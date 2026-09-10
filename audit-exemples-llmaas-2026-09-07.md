# Exemples LLMaaS dépassés ou à requalifier

Date : 7 septembre 2026. Complément de l’[audit documentaire](./audit-llmaas-2026-09-07.md).

## Méthode

Relecture des exemples intégrés aux pages, repérage des modèles par défaut et des contrats dans `LLMaaS/exemples/`, confrontation avec les routes Rust, le Swagger, les alias du load balancer et les annonces de `status`. Cet inventaire est une qualification documentaire et statique, pas une certification d’exécution de tous les démonstrateurs.

Un ancien nom peut continuer à répondre grâce à une redirection. « Dépassé » signifie ici que le nom, la capacité annoncée, le contrat ou l’installation ne représente plus correctement le parcours à recommander. Cela ne signifie pas systématiquement que tout le script échoue.

## Démonstrateurs du dépôt LLMaaS

| Exemple | Diagnostic | Preuve | Décision recommandée |
|---------|------------|--------|----------------------|
| [simple_batch](/Users/clesur/PROJETS/LLMaaS/exemples/simple_batch/simple_batch.py:172) | À remplacer | Upload de fichiers puis `/batches`, alors que le code plateforme expose `/chat/completions/batch` avec JSON. | Réécrire sur le vrai contrat ; ce démonstrateur ne valide pas le guide Batch actuel. |
| [qwen_omni_demo](/Users/clesur/PROJETS/LLMaaS/exemples/qwen_omni_demo/qwen-omni-demo.py:28) | À retirer de la sélection courante | La démo annonce Qwen3-Omni et l’audio/vidéo, mais l’identifiant est un alias vers Qwen 3.6 35B dans la configuration LB. | Requalifier le scénario multimodal sur des endpoints et capacités actuels ; ne pas simplement changer le nom du modèle. |
| [medgemma_analysis](/Users/clesur/PROJETS/LLMaaS/exemples/medgemma_analysis/analyze_medical_image.py:31) | Candidat à l’archivage | Modèle MedGemma 27B fixé dans le code ; son retrait est annoncé dans le changelog du 1er avril 2026. | Retirer du parcours client actif sauf offre spécifique confirmée ; ne pas substituer un modèle généraliste tout en conservant la promesse médicale. |
| [rag-granite-qdrant-demo](/Users/clesur/PROJETS/LLMaaS/exemples/rag-granite-qdrant-demo/rag_demo.py:32) | Dépendances à actualiser | Imports historiques `langchain.text_splitter` et `langchain.prompts`, installation sans version de LangChain ; README encore centré sur Granite 3.3 8B. | Actualiser les imports/dépendances et le modèle, puis vérifier depuis un environnement vierge. |
| [simple_vision](/Users/clesur/PROJETS/LLMaaS/exemples/simple_vision/test_vision.py:22) | Modèle par défaut dépassé | Défaut `granite3.2-vision:2b`, absent des modèles actifs du catalogue public consulté. | Choisir un identifiant multimodal actuel après vérification ; le format texte + image peut être conservé. |
| [simple_tool_calling](/Users/clesur/PROJETS/LLMaaS/exemples/simple_tool_calling/test_tool_calling.py:74) | Alias historique confirmé | Défaut `qwen3:30b-a3b`, redirigé vers Qwen 3.6 35B dans la configuration LB. | Utiliser explicitement le modèle cible et tester les appels d’outils ; conserver le principe du démonstrateur. |
| [summarizer](/Users/clesur/PROJETS/LLMaaS/exemples/summarizer/summarizer.py:38) | Modèles par défaut dépassés | Résumé intermédiaire et final utilisent `granite3.3:8b`. | Mettre les modèles actuels dans la configuration d’exemple ; vérifier qualité, contexte et coût. |
| [translate](/Users/clesur/PROJETS/LLMaaS/exemples/translate/translate.py:35) | Modèle par défaut dépassé | Défaut `qwen3:14b`. Une démo spécialisée `simple_translate` existe déjà. | Orienter le parcours simple vers simple_translate après validation ; conserver ce script seulement si ses fonctions avancées sont utiles. |
| [getfact](/Users/clesur/PROJETS/LLMaaS/exemples/getfact/getfact.py:62) | Modèle par défaut dépassé | Extraction configurée par défaut sur `qwen3:14b`. | Choisir un modèle actuel et vérifier le respect du schéma de sortie sur les cas d’extraction. |
| [transkryptor](/Users/clesur/PROJETS/LLMaaS/exemples/transkryptor/transkryptor.py:774) | Post-traitement à actualiser | Le raffinement de transcription utilise par défaut `qwen3:14b`. | Actualiser uniquement le modèle de raffinement et valider le rendu ; ce constat ne remet pas en cause toute la transcription. |
| [transkryptor/rework-only](/Users/clesur/PROJETS/LLMaaS/exemples/transkryptor/rework-only.py:611) | Post-traitement à actualiser | Même ancien modèle dans le script de reprise autonome. | Aligner les deux scripts sur une configuration commune maintenue, sans refonte. |
| [photoanalyzer](/Users/clesur/PROJETS/LLMaaS/exemples/photoanalyzer/photoanalyzer.py:29) | Modèle par défaut dépassé | Défaut `qwen2.5vl:7b`, famille retirée selon les annonces de décembre 2025. | Actualiser le modèle de vision et les exemples de résultats ; conserver le traitement des images si encore adapté. |
| [mini-chat/openai_chat](/Users/clesur/PROJETS/LLMaaS/exemples/mini-chat/openai_chat.py:56) | Modèle par défaut dépassé | Défaut `mistral-small3.1:24b`. L’aide mini-chat cite aussi `gemma3:4b`. | Actualiser les configurations et l’aide, en vérifiant quels modules restent utilisés. |
| [simple_rerank](/Users/clesur/PROJETS/LLMaaS/exemples/simple_rerank/simple_rerank.py:32) | À conserver avec corrections ciblées | Endpoint `/rerank` et modèles configurables cohérents. Le README garde un catalogue figé ; la barre graphique suppose une échelle de scores fixe. | Retirer la liste figée et expliquer les scores par modèle ; ne pas archiver tout le démonstrateur. |
| [deepseek-ocr-demo](/Users/clesur/PROJETS/LLMaaS/exemples/deepseek-ocr-demo/ocr_demo.py:303) | À qualifier, pas déclaré obsolète | Le modèle DeepSeek-OCR figure encore dans la configuration LB, bien qu’il ne soit pas une fiche du catalogue lifecycle consulté. | Vérifier la disponibilité réelle et le statut produit. L’absence dans lifecycle seule ne prouve pas un retrait. |

Les scripts `simple_translate`, `simple_voxtral`, `simple_image_generation`, `simple_tts`, `list_models`, `status_api_demo` et `simple_rag_demo` ne sont pas à déclarer obsolètes sur la seule base de leur âge ou de leurs noms. Leurs modèles, formats et dépendances doivent être validés par des tests ciblés avant de les désigner comme exemples de référence. Les autres outils du répertoire n’ont pas fait l’objet d’une exécution exhaustive.

## Exemples intégrés à la documentation

| Exemple | État | Traitement recommandé |
|---------|------|-----------------------|
| [Batch complet](/Users/clesur/PROJETS/docs/docs/llmaas/batch.md:176) | Contrat incompatible avec la plateforme locale | Remplacer le parcours fichiers/JSONL par le contrat Batch réel. |
| [Wrapper LangChain](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:36) | Imports et chaîne historiques ; installation non figée | Corrigé au point 13 : imports core/classic, invoke et versions de référence ; wrapper exécuté avec réponse HTTP simulée. |
| [RAG FAISS et Qdrant](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:182) | Chaînes historiques et corpus à 1,9 € ; imports hétérogènes | Dépendances corrigées au point 13 ; FAISS et Qdrant mémoire vérifiés avec HTTP simulé. Corpus de test conservés sur décision de Christophe (point 6). |
| [Agent calculatrice](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:510) | Exécution non bornée de code fourni au modèle | Corrigé en français le 7 septembre 2026 : deux nombres finis, opérateurs +, -, *, / ; aucun eval. Compatibilité LangChain corrigée au point 13 ; agent et appel calculatrice exécutés avec réponses HTTP simulées. |
| [Semantic Kernel](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:639) | Simulation par requête HTTP, sans le SDK annoncé | Renommer en exemple de synthèse par API ou fournir une vraie intégration maintenue. |
| [Haystack](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:713) | Simulation par requête HTTP, sans Haystack | Renommer en exemple de question/réponse contextualisée ou fournir une vraie intégration maintenue. |
| [Configuration Cline](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:915) | Ancien alias, contexte illustratif et réglages non liés au modèle actuel | Identifiant remplacé par qwen3.6:35b au point 10. Le parcours de l’extension et les autres réglages restent à qualifier. |
| [Choix d’un modèle compact](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:233) | Cet alias est redirigé vers un 35B | Corrigé au point 10 : bloc et comparatif énergétique supprimés, remplacés par un conseil d’évaluation sur les usages. |
| [Vision API](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:262) | Alias vers Gemma 4 31B | Corrigé au point 10 : gemma4:31b, capacité vision vérifiée dans l’inventaire. |
| [Filtre de pertinence](/Users/clesur/PROJETS/docs/docs/llmaas/rerank.md:348) | TypeError reproduit : chaînes utilisées comme objets de score | Résolu au point 11 : exemple défectueux supprimé et remplacé par des conseils de calibrage sans seuil universel. |
| [Fetch navigateur](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:778) | Expose la clé du service côté navigateur si copié tel quel | Exemple avec backend applicatif et authentification utilisateur. |
| [Exécution Tool Calling / Vision](/Users/clesur/PROJETS/docs/docs/llmaas/quickstart.md:408) | Chemins erronés | Corrigé au point 15 : commandes depuis simple_tool_calling et simple_vision créés par le lecteur, requirements.txt et .env locaux. |
| [LlamaIndex](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:861) | Le répertoire temporaire a un nom fixe et est supprimé récursivement | Utiliser TemporaryDirectory ; actualiser les instructions de dépendances avant validation. |
| [Retry récursif](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:820) | Relance sans limite ni timeout explicite | Remplacer par un nombre de tentatives borné et une attente adaptée aux réponses de l’API. |

## Sources de qualification

- [Alias actuels du LB](/Users/clesur/PROJETS/LLMaaS/servers/lb/config.yaml:31) : Gemma 3 27B → Gemma 4 31B ; Qwen3-Omni, Qwen3-Coder, Qwen3 30B et Qwen3.5 0.8B → Qwen 3.6 35B.
- [Routes Batch](/Users/clesur/PROJETS/LLMaaS/servers/lb/src/main.rs:224) et [contrat Swagger](/Users/clesur/PROJETS/LLMaaS/servers/lb/swagger.yaml:591).
- [Annonces de retrait et de remplacement](/Users/clesur/PROJETS/status/web/src/data/changelog.ts).
- [Migration officielle LangChain v1](https://docs.langchain.com/oss/python/migrate/langchain-v1) : chaînes historiques déplacées vers langchain-classic. La présence d’anciens imports n’est pas une preuve d’échec si une ancienne version est volontairement figée ; ici, l’installation proposée ne garantit pas cette version.

## Organisation minimale recommandée

Conserver un exemple court par capacité (chat, outils, vision, embeddings/RAG, rerank, batch, audio, image, traduction). Pointer depuis les guides vers ces scripts maintenus, au lieu de recopier de gros programmes. Pour chaque exemple recommandé : modèle configurable, dépendances vérifiées et dernier test réussi identifiable. Archiver explicitement les démonstrations liées à une génération de modèle retirée.

Aucune modification des scripts du dépôt LLMaaS n’a été effectuée pendant cet audit.
