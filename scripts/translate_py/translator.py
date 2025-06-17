"""
Module de traduction utilisant l'API Cloud Temple LLMaaS.

Ce module gère les appels API, la segmentation du contenu en blocs,
les tentatives de retry et la gestion des erreurs de traduction.
"""

import asyncio
import time
import re
from typing import List, Optional, Tuple, Callable

import aiohttp
import tiktoken

try:
    from .config import TranslationConfig, LANG_CONFIG
    from .models import APIResponse, BlockTranslationResult
except ImportError:
    from config import TranslationConfig, LANG_CONFIG
    from models import APIResponse, BlockTranslationResult


class SimpleThrottler:
    """Throttler simple pour limiter les appels concurrents."""
    
    def __init__(self, rate_limit: int):
        self.semaphore = asyncio.Semaphore(rate_limit)
    
    async def __aenter__(self):
        await self.semaphore.acquire()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        self.semaphore.release()


class ContentSplitter:
    """Utilitaire pour découper le contenu en blocs traduisibles en comptant les tokens."""
    
    def __init__(self, max_tokens: int = 8000, model_name: str = "gpt-4"):
        """
        Initialise le splitter.
        
        Args:
            max_tokens: Taille maximale d'un bloc en tokens.
            model_name: Nom du modèle pour le tokenizer (ex: "gpt-4", "gpt-3.5-turbo").
        """
        self.max_tokens = max_tokens
        try:
            self.encoding = tiktoken.encoding_for_model(model_name)
        except KeyError:
            self.encoding = tiktoken.get_encoding("cl100k_base")
    
    def _count_tokens(self, text: str) -> int:
        """Compte le nombre de tokens dans un texte."""
        return len(self.encoding.encode(text))

    def _split_large_block(self, block: str) -> List[str]:
        """Sous-découpe un bloc qui dépasse la limite de tokens."""
        sub_blocks = []
        current_pos = 0
        while current_pos < len(block):
            # Estimation du point de coupure en caractères
            estimated_end = current_pos + self.max_tokens * 4
            
            # Segment à analyser
            segment = block[current_pos:estimated_end]
            
            # Si le segment est dans la limite, on le prend en entier
            if self._count_tokens(segment) <= self.max_tokens:
                sub_blocks.append(segment)
                current_pos += len(segment)
                continue

            # Le segment est trop grand, il faut le couper
            # On cherche le point de coupure idéal en reculant depuis la fin du segment
            split_pos = len(segment)
            
            # Priorité aux fins de phrase
            sentence_enders = ['.', '!', '?']
            best_split = -1
            for p in sentence_enders:
                pos = segment.rfind(p)
                if pos > best_split:
                    best_split = pos
            
            if best_split != -1:
                split_pos = best_split + 1
            else:
                # Sinon, on cherche un espace
                pos = segment.rfind(' ')
                if pos != -1:
                    split_pos = pos + 1
            
            sub_blocks.append(block[current_pos:current_pos + split_pos])
            current_pos += split_pos
            
        return sub_blocks

    def split_content(self, content: str) -> List[str]:
        """
        Découpe le contenu en blocs sémantiques basés sur les en-têtes Markdown.
        Les blocs trop grands sont ensuite sous-découpés.
        """
        final_blocks = []
        
        # Découpage initial par en-têtes
        header_pattern = re.compile(r'^(#+\s.*)', re.MULTILINE)
        
        # Trouver tous les en-têtes et leurs positions
        matches = list(header_pattern.finditer(content))
        
        start_pos = 0
        for match in matches:
            # Bloc entre le dernier en-tête (ou le début) et le début du nouvel en-tête
            block_content = content[start_pos:match.start()]
            if block_content.strip():
                final_blocks.append(block_content)
            
            # L'en-tête lui-même est le début du nouveau bloc
            start_pos = match.start()
            
        # Ajouter le dernier bloc après le dernier en-tête
        last_block = content[start_pos:]
        if last_block.strip():
            final_blocks.append(last_block)
            
        # Sous-découpage des blocs trop grands
        processed_blocks = []
        for block in final_blocks:
            if self._count_tokens(block) > self.max_tokens:
                processed_blocks.extend(self._split_large_block(block))
            else:
                processed_blocks.append(block)

        return [b for b in processed_blocks if b.strip()]


class TranslationPromptGenerator:
    """Générateur de prompts pour la traduction."""
    
    @staticmethod
    def generate_system_prompt(target_language: str) -> str:
        """
        Génère le prompt système pour la traduction.
        
        Args:
            target_language: Langue cible (nom complet)
            
        Returns:
            Prompt système formaté
        """
        return f"""Tu es un traducteur technique spécialisé dans le Cloud computing, les systèmes IT et l'ingénierie logicielle. 
Ta tâche est de traduire du texte du français vers {target_language} tout en préservant strictement la structure et le formatage du fichier Markdown original.

RÈGLES STRICTES À RESPECTER :
1. Ne modifie, ne traduis pas et n'interprète aucun élément HTML ou Markdown *structurel* (comme <a>, <div>, les en-têtes #, les listes, les blocs de code). Cependant, le *texte* à l'intérieur des tableaux (y compris les en-têtes de tableau) DOIT être traduit.
2. Ne modifie pas le contenu à l'intérieur des blocs de code délimités par :
   - Triple backticks : ```
   - Triple quotes : ''' ou \"\"\"
   - Code inline : `code`
3. Pour les blocs de code Python spécifiquement :
   - NE traduis PAS les noms de variables, fonctions, classes ou toute syntaxe Python
   - NE traduis PAS les chaînes à l'intérieur du code (même si elles contiennent du français)
   - NE traduis PAS les docstrings (texte entre triple quotes ''' ou \"\"\")
   - Traduis SEULEMENT les commentaires qui commencent par # s'ils sont des lignes de commentaires autonomes
   - Préserve EXACTEMENT toute indentation, espacement et syntaxe Python
4. Ne traduis pas ou ne modifie pas le texte à l'intérieur de crochets [], parenthèses () ou URLs.
5. N'ajoute pas ou ne modifie pas de nouvelles lignes, espaces ou formatage en dehors du texte original.
6. Si le contenu inclut du HTML brut, ne l'altère pas ou ne le traduis pas ; laisse-le exactement comme il apparaît.
7. Pour tout bloc de code de langage de programmation, préserve TOUTE syntaxe, noms de variables, appels de fonction et littéraux de chaîne inchangés.

Ta seule tâche est de traduire uniquement le contenu texte en dehors des éléments de code, Markdown ou HTML, tout en garantissant que tout formatage et intégrité structurelle sont préservés.
L'objectif est de produire une traduction techniquement précise, professionnelle et qui maintient la structure du fichier original sans aucune modification non intentionnelle.
NE RACONTE PAS TA VIE. Ne retourne QUE la traduction du contenu fourni, sans aucune introduction, conclusion, ou commentaire additionnel.
"""

    @staticmethod
    def generate_user_prompt(content: str) -> str:
        """
        Génère le prompt utilisateur avec le contenu à traduire.
        
        Args:
            content: Contenu à traduire
            
        Returns:
            Prompt utilisateur
        """
        return content


class CloudTempleTranslator:
    """Client de traduction utilisant l'API Cloud Temple LLMaaS."""
    
    def __init__(self, config: TranslationConfig, ui=None):
        self.config = config
        self.ui = ui
        self.content_splitter = ContentSplitter(config.max_tokens_per_block, config.model)
        self.prompt_generator = TranslationPromptGenerator()
        self.throttler = SimpleThrottler(rate_limit=config.concurrent_translations)
        self._session: Optional[aiohttp.ClientSession] = None
    
    async def __aenter__(self):
        self._session = aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=300))
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self._session:
            await self._session.close()
    
    async def translate_content(
        self, 
        content: str, 
        target_lang: str,
        progress_callback: Optional[Callable[[int, int], None]] = None
    ) -> BlockTranslationResult:
        target_lang_name = LANG_CONFIG.LANGUAGES.get(target_lang, target_lang)
        blocks = self.content_splitter.split_content(content)
        total_blocks = len(blocks)
        
        if total_blocks == 0:
            return BlockTranslationResult(original_text=content, success=True, translated_text="")

        if total_blocks == 1:
            result = await self._translate_block(blocks[0], target_lang_name, 1, 1)
            if progress_callback:
                progress_callback(1, 1)
            return result
        
        # Traitement séquentiel des blocs pour une progression cohérente
        translated_blocks = []
        errors = []
        total_tokens = 0
        total_time = 0

        for i, block in enumerate(blocks):
            block_result = await self._translate_block(block, target_lang_name, i + 1, total_blocks)
            
            # Appel du callback après avoir terminé le bloc
            if progress_callback:
                progress_callback(i + 1, total_blocks)
            
            if block_result.success and block_result.translated_text:
                translated_blocks.append(block_result.translated_text)
            else:
                translated_blocks.append(block_result.original_text)
                if block_result.error:
                    errors.append(f"Bloc {block_result.block_number}: {block_result.error}")
            
            if block_result.tokens_used:
                total_tokens += block_result.tokens_used
            if block_result.processing_time:
                total_time += block_result.processing_time
        
        success = not errors
        final_content = '\n\n'.join(translated_blocks) if success else None
        error_message = '; '.join(errors) if errors else None
        
        return BlockTranslationResult(
            original_text=content,
            translated_text=final_content,
            success=success,
            error=error_message,
            block_number=total_blocks,
            total_blocks=total_blocks,
            processing_time=total_time,
            tokens_used=total_tokens
        )
    
    async def _translate_block(
        self,
        text: str,
        target_lang_name: str,
        block_number: int = 1,
        total_blocks: int = 1
    ) -> BlockTranslationResult:
        start_time = time.time()
        last_error = None
        
        for attempt in range(1, self.config.max_retries + 1):
            try:
                async with self.throttler:
                    api_response = await self._call_api(text, target_lang_name, attempt)
                
                if api_response.success:
                    return BlockTranslationResult(
                        original_text=text,
                        translated_text=api_response.content,
                        success=True,
                        block_number=block_number,
                        total_blocks=total_blocks,
                        processing_time=time.time() - start_time,
                        tokens_used=api_response.tokens_used or 0
                    )
                else:
                    last_error = api_response.error
                    
            except Exception as e:
                last_error = str(e)
            
            if attempt < self.config.max_retries:
                await asyncio.sleep(self.config.retry_delay)
        
        return BlockTranslationResult(
            original_text=text,
            success=False,
            error=f"Échec après {self.config.max_retries} tentatives: {last_error}",
            block_number=block_number,
            total_blocks=total_blocks,
            processing_time=time.time() - start_time
        )
    
    async def _call_api(
        self, 
        text: str, 
        target_lang_name: str,
        attempt: int = 1
    ) -> APIResponse:
        if not self._session:
            raise RuntimeError("Session HTTP non initialisée")
        
        system_prompt = self.prompt_generator.generate_system_prompt(target_lang_name)
        user_prompt = self.prompt_generator.generate_user_prompt(text)
        
        payload = {
            "model": self.config.model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            "temperature": self.config.temperature,
            "top_p": self.config.top_p,
            "stream": False
        }
        
        headers = {
            "Authorization": f"Bearer {self.config.api_key}",
            "Content-Type": "application/json"
        }
        
        if self.ui and self.ui.debug:
            system_tokens = self.content_splitter._count_tokens(system_prompt)
            user_tokens = self.content_splitter._count_tokens(user_prompt)
            self.ui.log_api_request(
                attempt=attempt,
                model=payload['model'],
                system_prompt=system_prompt,
                user_prompt=user_prompt,
                system_tokens=system_tokens,
                user_tokens=user_tokens
            )

        start_time = time.time()
        
        try:
            async with self._session.post(self.config.api_url, json=payload, headers=headers) as response:
                response_time = time.time() - start_time
                
                if response.status == 200:
                    data = await response.json()
                    content = data.get("choices", [{}])[0].get("message", {}).get("content")
                    
                    if content:
                        tokens_used = data.get("usage", {}).get("total_tokens")
                        prompt_tokens = data.get("usage", {}).get("prompt_tokens")
                        completion_tokens = data.get("usage", {}).get("completion_tokens")

                        if self.ui and self.ui.debug:
                            self.ui.log_api_response(
                                attempt=attempt,
                                status=response.status,
                                response_content=content,
                                prompt_tokens=prompt_tokens,
                                completion_tokens=completion_tokens,
                                total_tokens=tokens_used
                            )
                        
                        return APIResponse(
                            success=True,
                            content=content,
                            model_used=data.get("model"),
                            tokens_used=tokens_used,
                            response_time=response_time,
                            attempt_number=attempt,
                            max_attempts=self.config.max_retries
                        )
                
                error_text = await response.text()
                error_msg = f"HTTP {response.status}: {error_text}"
                if self.ui and self.ui.debug:
                    self.ui.add_log(f"Erreur API: {error_msg}", "error")
                return APIResponse(success=False, error=error_msg, response_time=response_time, attempt_number=attempt, max_attempts=self.config.max_retries)
                    
        except Exception as e:
            error_msg = f"Erreur réseau ou timeout: {str(e)}"
            if self.ui and self.ui.debug:
                self.ui.add_log(f"Erreur API: {error_msg}", "error")
            return APIResponse(success=False, error=error_msg, response_time=time.time() - start_time, attempt_number=attempt, max_attempts=self.config.max_retries)


async def test_api_connection(config: TranslationConfig, ui=None) -> Tuple[bool, str]:
    test_text = "Bonjour, ceci est un test de connexion API."
    try:
        async with CloudTempleTranslator(config, ui) as translator:
            result = await translator.translate_content(test_text, "en")
            if result.success:
                return True, "Connexion API réussie"
            else:
                return False, f"Erreur API: {result.error}"
    except Exception as e:
        return False, f"Erreur de connexion: {str(e)}"
