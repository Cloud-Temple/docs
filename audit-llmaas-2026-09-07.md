# Audit des incohérences résiduelles AI / LLMaaS

Date : 7 septembre 2026. État audité : fichiers de travail après la première mise à jour éditoriale, avant correction des constats ci-dessous.

## Périmètre et limites

Relecture des 11 pages françaises `docs/llmaas/*.md` (environ 4 450 lignes), du RACI LLMaaS, des renvois depuis l’accueil et la FAQ générale, et contrôle des catalogues traduits. Confrontation avec `status`, le YAML et l’inventaire modèles, puis avec les routes, le Swagger et les modules Batch/sécurité du dépôt LLMaaS. Les licences tierces n’ont pas fait l’objet d’une analyse juridique exhaustive ; les traductions n’ont pas fait l’objet d’une relecture linguistique intégrale. Le reste des services du portail n’est pas inclus.

Les constats sur l’implémentation portent sur le code local consulté, pas sur une vérification de la version déployée. Aucun appel d’inférence authentifié n’a été réalisé. Les engagements commerciaux et juridiques sont signalés pour validation, sans en déduire de conclusion juridique.

## Résultat

23 constats regroupés : 5 P1, 13 P2 et 5 P3. P1 = à traiter avant publication de cette mise à jour ; P2 = contradiction ou obstacle significatif ; P3 = clarification ou amélioration de reproductibilité. Les constats décrivent l’état relevé pendant l’audit. Les remédiations validées sont suivies sous chaque point ; les autres restent à traiter.

## 01. Protection des prompts surévaluée

**Suivi — corrigé dans les sources françaises le 7 septembre 2026.** Christophe Lesur confirme que le filtrage historique a été neutralisé en raison de nombreux faux positifs. La description des trois couches et la procédure de désactivation ont été retirées de Concepts. La FAQ ne promet plus de guardrails automatiques et précise la responsabilité applicative. Les traductions restent à régénérer avec le script officiel lorsque la clé API sera disponible.

**P1 — avéré dans le code local.** La page Concepts décrit trois couches actives : structure, motifs et comportement. Dans le module Rust consulté, les motifs sont vides, `check_structure` renvoie toujours `false` et aucun `check_behavior` n’est implémenté. Les commentaires du handler ne correspondent pas non plus à ce module.

**Conséquence :** Le lecteur peut croire bénéficier automatiquement de contrôles qui ne sont pas implémentés dans cette version du code.

**Correction recommandée :** Retirer la description des trois couches et faire confirmer les protections effectivement déployées. Distinguer les modèles Guardian appelés par une application des contrôles automatiques du service.

**Preuves :** [concepts.md](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:102), [security.rs](/Users/clesur/PROJETS/LLMaaS/servers/lb/src/security.rs:4), [chat_completions_handler.rs](/Users/clesur/PROJETS/LLMaaS/servers/lb/src/handlers/chat_completions_handler.rs:43).

## 02. Le guide Batch décrit une autre API

**Suivi — guide français corrigé le 7 septembre 2026.** Christophe Lesur confirme que les sources LB/proxy Rust correspondent au service déployé. Guide remplacé par le contrat `/v1/chat/completions/batch` ; références ajoutées dans API et vue d'ensemble. Exemple Python vérifié hors réseau avec MockTransport : URLs, corps, polling, erreurs partielles/globales, sauvegarde et limite d'attente. Compilation FR réussie. Le démonstrateur `LLMaaS/exemples/simple_batch` reste à remplacer dans son dépôt ; il n'est plus recommandé par le guide. Traductions à régénérer.

**P1 — avéré dans les sources locales.** La documentation utilise `/v1/files`, `/v1/batches`, des fichiers JSONL et `custom_id`. Le routeur et le Swagger exposent `/v1/chat/completions/batch` et son GET : `messages` est un tableau de conversations, les résultats reviennent dans `results[]`. La limite par défaut est 1 000 conversations, contre 50 000 annoncées dans le guide. Le guide propose également des embeddings, une liste et une annulation de batches qui ne figurent pas dans ce contrat.

**Conséquence :** Un client suivant le guide construit une intégration incompatible. Le démonstrateur local `exemples/simple_batch` reproduit le mauvais parcours et ne constitue donc pas une validation indépendante.

**Correction recommandée :** Réécrire le guide autour du contrat réellement déployé, puis tester soumission et récupération avec une clé de recette. Corriger également le démonstrateur dans son dépôt propriétaire.

**Preuves :** [batch.md](/Users/clesur/PROJETS/docs/docs/llmaas/batch.md:43), [batch.md](/Users/clesur/PROJETS/docs/docs/llmaas/batch.md:473), [main.rs](/Users/clesur/PROJETS/LLMaaS/servers/lb/src/main.rs:224), [swagger.yaml](/Users/clesur/PROJETS/LLMaaS/servers/lb/swagger.yaml:591), [batch.rs](/Users/clesur/PROJETS/LLMaaS/servers/monitoring/llm_proxy_rust/src/batch.rs:103).

## 03. Conservation des données : trois descriptions incompatibles

**Statut — journalisation des contenus désactivée en production.** Le 7 septembre 2026, Christophe rapporte la confirmation de Kevin. Le doute sur l'activation en production est levé sur cette base ; aucune inspection directe de production n'a été réalisée dans cet audit. La RFC est en cours ; cette confirmation ne vaut pas clôture de tous ses éventuels travaux.

**Suivi.** Le code contient bien un mécanisme de journalisation chiffrée des requêtes et réponses (`non_streaming.rs` et `encrypted_logging.rs`), mais sa présence ne signifie pas qu'il est actif. Ne plus présenter son activation comme un risque constaté en production. Le guide Batch a déjà été corrigé ; la formulation générale de non-conservation dans la FAQ reste à préciser pour tenir compte de la conservation temporaire des résultats Batch, distincte des journaux.

**P1 — contradiction avérée.** La FAQ promet un traitement limité au temps de l’inférence sans conservation des prompts/réponses. Concepts annonce des logs complets et leur rétention. Batch annonce sept jours de conservation de fichiers. Le code Batch et le Swagger indiquent une conservation en RAM avec TTL par défaut de 24 h après complétion.

**Conséquence :** Le client ne peut pas déterminer ce qui est conservé, où, pendant combien de temps et selon quel mode d’appel.

**Correction recommandée :** Écrire une description unique séparant données synchrones, données Batch et métadonnées de journalisation. Faire valider les durées et le comportement en cas de redémarrage ; ne pas confondre absence de disque et absence de conservation.

**Preuves :** [faq.md](/Users/clesur/PROJETS/docs/docs/llmaas/faq.md:31), [concepts.md](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:92), [batch.md](/Users/clesur/PROJETS/docs/docs/llmaas/batch.md:475), [batch.rs](/Users/clesur/PROJETS/LLMaaS/servers/monitoring/llm_proxy_rust/src/batch.rs:105).

## 04. Unité de facturation du reranking contradictoire

**Suivi — tarif confirmé par Christophe et sources françaises corrigées.** Tarif publié : 4 € par million de documents traités. API, FAQ, Concepts et guide Reranking alignés ; effet de `top_n` précisé et exemple à 0,40 € ajouté. Source complémentaire : RFC-0084 classée FAIT et sa migration SQL. Traductions à régénérer. La divergence de calcul compteur/dashboard identifiée dans le complément logiciel reste un sujet distinct à vérifier ; la correction documentaire ne la résout pas. Les schémas de réponse seront traités au point 11.

**P1 — arbitrage facturation nécessaire.** API, FAQ et YAML annoncent 4 €/million de tokens rerankés. La formule Concepts utilise des documents et le guide Reranking présente `search_units` comme l’unité facturée. Le Swagger parle lui aussi d’une clé tarifaire `rerank_search_units` par document, tout en décrivant une réponse réelle fondée sur `usage.prompt_tokens`/`total_tokens`. Vérification complémentaire : `CreditService::calculate_consumption_cost` facture explicitement `search_units × tarif / 1 000 000` et exclut les tokens du reranking. L’unité documents est donc confirmée dans le code local ; le tarif de production reste à vérifier en configuration active.

**Conséquence :** Les estimations de coût sont incompatibles ; les sources amont divergent elles-mêmes.

**Correction recommandée :** Aligner la documentation sur les documents traités après confirmation de la version déployée et du tarif configuré. Corriger ensemble formule, exemples, schémas et sources.

**Preuves :** [concepts.md](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:49), [rerank.md](/Users/clesur/PROJETS/docs/docs/llmaas/rerank.md:129), [swagger.yaml](/Users/clesur/PROJETS/LLMaaS/servers/lb/swagger.yaml:471).

## 05. Exemples risqués présentés comme utilisables en production

**Complément repéré pendant le point 15 — corrigé sur validation de Christophe.** La seconde calculatrice du quickstart utilise désormais les mêmes opérations bornées que celle du tutoriel : deux nombres finis, quatre opérateurs, longueur limitée, aucun eval. Description de l’outil et question de démonstration adaptées à une seule opération. Tests des opérations, des entrées rejetées et du parcours appel outil/réponse finale avec HTTP simulé.

**Suivi — corrections françaises validées par Christophe et appliquées le 7 septembre 2026.** Calculatrice limitée à deux nombres finis et quatre opérateurs sans exécution de code ; Fetch déplacé côté serveur avec clé en variable d’environnement ; LlamaIndex utilise `TemporaryDirectory`. Vérifications hors réseau : opérations et entrées rejetées, Fetch sans clé/succès/erreur HTTP, nettoyage du dossier sur succès et exception. La compatibilité des imports LangChain reste à traiter au point 13. Traductions à régénérer.

**P1 — avéré dans les exemples.** Le tutoriel agent exécute directement `eval(expression)` sur une sortie pilotée par le modèle. L’exemple Fetch étiqueté Browser envoie la clé du service depuis le navigateur. Le tutoriel LlamaIndex crée puis supprime un répertoire de nom fixe `temp_llama_data`, qui pourrait préexister.

**Conséquence :** Exécution de code arbitraire, exposition d’une clé de service et suppression involontaire de données si les exemples sont repris tels quels.

**Correction recommandée :** Remplacer la calculatrice par une opération explicitement bornée, utiliser un appel via backend pour l’exemple navigateur et un vrai répertoire temporaire pour LlamaIndex.

**Preuves :** [tutorials.md](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:510), [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:778), [tutorials.md](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:861).

## 06. Des tarifs périmés subsistent dans les exemples

**Décision — accepté en l'état par Christophe le 7 septembre 2026.** Les tarifs OCR sont le contenu du document de démonstration ; les corpus RAG sont des données de test. Aucune modification demandée pour ces exemples. Les constats et recommandations ci-dessous sont conservés comme historique de l'audit, sans action à mener sur ce point.

**P2 — avéré.** Les corpus des deux tutoriels RAG contiennent 1,9 €/million en entrée, contre 1,8 dans la grille. La sortie OCR reproduit une grille à 0,90 / 4 / 21 € sans avertissement explicite qu’il s’agit d’un document historique, pas des prix du service.

**Conséquence :** Les démonstrateurs répondent avec des tarifs périmés et les extraits OCR peuvent être interprétés comme une grille actuelle.

**Correction recommandée :** Utiliser des données fictives sans prix Cloud Temple dans les tutoriels. Identifier clairement les prix présents dans le document OCR comme contenu de l’image, non contractuel et non actuel.

**Preuves :** [tutorials.md](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:284), [tutorials.md](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:395), [ocr.md](/Users/clesur/PROJETS/docs/docs/llmaas/ocr.md:251).

## 07. Compatibilité OpenAI annoncée comme totale

**Suivi — correction française approuvée et appliquée.** Suppression de « 100 % » et de la promesse de tous les SDK/frameworks dans la FAQ ; ajout d’une section Compatibilité OpenAI dans API avec renvois vers les contrats complétions, embeddings, transcription et Batch. Introduction SDK du tutoriel reformulée sans promesse de migration transparente. Traductions à régénérer.

**P2 — contradiction avérée.** La FAQ dit « 100% compatible », mais API documente des écarts : `/v1/completions` attend des messages, certains formats de transcription ne sont pas acceptés et les embeddings exigent du texte. Le Batch local utilise également un contrat spécifique.

**Conséquence :** Le client peut supposer qu’un simple changement d’URL suffit pour toutes les fonctions.

**Correction recommandée :** Remplacer la promesse générale par une compatibilité détaillée par endpoint, avec les différences documentées.

**Preuves :** [faq.md](/Users/clesur/PROJETS/docs/docs/llmaas/faq.md:17), [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:284), [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:342).

## 08. PDF : sans prétraitement ou conversion préalable ?

**Suivi — corrigé en français sur confirmation de Christophe.** La FAQ précise la conversion préalable des pages PDF en images et renvoie aux prérequis du guide OCR. La promesse « sans prétraitement » est supprimée. Traductions à régénérer.

**P2 — contradiction avérée.** La FAQ annonce l’analyse de PDF sans prétraitement. Le guide OCR exige de convertir les PDF en images au préalable.

**Conséquence :** Le client ne sait pas s’il peut envoyer un PDF directement.

**Correction recommandée :** Préciser les formats effectivement acceptés par endpoint et distinguer conversion côté application et éventuelle prise en charge native.

**Preuves :** [faq.md](/Users/clesur/PROJETS/docs/docs/llmaas/faq.md:20), [ocr.md](/Users/clesur/PROJETS/docs/docs/llmaas/ocr.md:86).

## 09. Rotation des clés : automatique ou responsabilité du client ?

**Suivi — corrigé en français sur validation de Christophe.** Concepts attribue la création, la rotation et la révocation des clés API au client, avec un lien vers le RACI. La mention de rotation automatique est supprimée. Traductions à régénérer.

**P2 — contradiction avérée.** Concepts annonce une rotation automatique. Le RACI attribue création, rotation et révocation au client. API recommande une rotation régulière manuelle.

**Conséquence :** Un client peut ne pas organiser la rotation en pensant qu’elle est opérée par Cloud Temple.

**Correction recommandée :** Aligner la description sur le mécanisme réellement disponible et sur le RACI ; distinguer rotation de la clé client et secrets internes.

**Preuves :** [concepts.md](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:29), [raci.md](/Users/clesur/PROJETS/docs/docs/contractual/llmaas/raci.md:33), [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:837).

## 10. Des exemples de modèles et performances restent anciens

**Suivi — remplacements précis validés par Christophe et appliqués en français.** Vision utilise `gemma4:31b`, Cline `qwen3.6:35b`, après vérification des alias LB et des capacités dans l’inventaire. Le bloc sentiment/petit modèle et juridique/gros modèle ainsi que les chiffres énergétiques non contextualisés sont remplacés par un conseil d’évaluation sur qualité, latence et consommation. La réponse `/models` reste une illustration, explicitement signalée comme telle ; les valeurs effectives viennent de l’API. Traductions à régénérer.

**P2 — résidus avérés, disponibilité à vérifier.** Vision utilise encore `gemma3:27b`, Cline `qwen3-coder:30b`, et Concepts `qwen3.5:0.8b`. Concepts conserve un comparatif énergétique de Gemma 3 1B et Llama 3.3 70B. La réponse fictive `/models` annonce 60 000 tokens pour GPT-OSS, contre 131 072 dans l’inventaire opérationnel.

**Conséquence :** Les guides peuvent dépendre d’alias ou transmettre de fausses limites après la suppression du catalogue figé. Vérification complémentaire dans `servers/lb/config.yaml` : `gemma3:27b` est redirigé vers Gemma 4 31B ; `qwen3-coder:30b` et `qwen3.5:0.8b` vers Qwen 3.6 35B. Le dernier cas contredit directement le conseil de choisir un modèle compact.

**Correction recommandée :** Remplacer les anciens exemples après vérification des capacités et de l’identifiant ; retirer les valeurs de performance non datées. Identifier les réponses comme extraits illustratifs.

**Preuves :** [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:262), [tutorials.md](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:915), [concepts.md](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:227), [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:532).

## 11. Reranking : scores et réponse mal décrits

**Suivi — corrigé en français sur validation de Christophe.** Guide et API alignés sur le format Jina/vLLM du Swagger : id score, modèle, résultats avec document text/multi_modal, usage prompt_tokens/total_tokens. Extraits explicitement illustratifs, bloc backend signalé comme omis. Le handler Rust transmet les scores sans normalisation. Suppression de la garantie 0–1 et du filtre fixe 0,3 ; explication du calibrage par modèle/corpus. Facturation par document inchangée. Vérification JSON hors réseau, sans appel de production. Traductions à régénérer.

**P2 — écart avéré avec le Swagger.** Le guide décrit un score entre 0 et 1, un seuil universel de 0,3 et une réponse `usage.billed_units.search_units`. Le Swagger indique des logits bruts non normalisés et `usage.prompt_tokens`/`total_tokens`.

**Conséquence :** Un seuil inadapté peut éliminer tous les résultats pertinents ; le parsing des métriques peut échouer.

**Correction recommandée :** Aligner le schéma sur une réponse observée du service et expliquer que les seuils se calibrent par modèle et corpus. Conserver le classement relatif comme règle générale.

**Preuves :** [rerank.md](/Users/clesur/PROJETS/docs/docs/llmaas/rerank.md:128), [rerank.md](/Users/clesur/PROJETS/docs/docs/llmaas/rerank.md:346), [swagger.yaml](/Users/clesur/PROJETS/LLMaaS/servers/lb/swagger.yaml:465).

## 12. L’exemple de filtrage Reranking lève TypeError

**Suivi — résolu par suppression de l’exemple au point 11.** Le filtre à seuil fixe défectueux est remplacé par des conseils de calibrage, sans nouvel exemple de code. La fonction qui confondait chaînes et objets de résultats n’est plus publiée dans la source française.

**P2 — reproduit hors réseau.** `rerank_documents` renvoie une liste de chaînes. `rerank_with_threshold` traite ensuite chaque chaîne comme un objet contenant `index` et `relevance_score`. Reproduction isolée : `string indices must be integers, not str`.

**Conséquence :** Le code ne peut pas fonctionner tel qu’écrit.

**Correction recommandée :** Conserver les objets de scores jusqu’au filtrage, puis convertir les résultats en textes.

**Preuves :** [rerank.md](/Users/clesur/PROJETS/docs/docs/llmaas/rerank.md:262), [rerank.md](/Users/clesur/PROJETS/docs/docs/llmaas/rerank.md:348).

## 13. Tutoriels LangChain non reproductibles avec l’installation proposée

**Suivi — remise en état ciblée validée par Christophe et appliquée.** Imports actualisés (`langchain_core`, `langchain_classic`, `langchain_text_splitters`), intégration Qdrant dédiée, attributs BaseTool typés pour Pydantic et appels via invoke. Suppression du contournement model_rebuild. Versions de référence documentées, classes historiques explicitement signalées. Vérifications sous Python 3.13.15 avec bibliothèques réelles : wrapper, FAISS, Qdrant mémoire, agent exécutant la calculatrice, chat et embeddings API ; réponses HTTP simulées, sockets bloquées. pip check réussi. Aucun service de production ni serveur Qdrant distant sollicité. Les wrappers embeddings restent à examiner au point 14. Traductions à régénérer.


**P2 — confirmé par l’éditeur.** Les instructions installent LangChain sans version, puis utilisent notamment `langchain.chains.LLMChain`, `RetrievalQA` et les anciens imports. La documentation officielle v1 déplace les chaînes historiques dans `langchain-classic`.

**Conséquence :** Une installation actuelle peut échouer dès les imports, malgré la mention de code testé.

**Correction recommandée :** Choisir un exemple minimal maintenu et une combinaison de versions vérifiée, puis tester l’installation depuis un environnement vierge. Éviter une refonte générale des frameworks.

**Preuves :** [tutorials.md](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:34), [Migration officielle LangChain v1](https://docs.langchain.com/oss/python/migrate/langchain-v1).

## 14. Contournement LangChain Embeddings potentiellement inutile

**Suivi — simplification validée par Christophe et appliquée en français.** Les trois wrappers embeddings de l’API et des tutoriels RAG sont remplacés par OpenAIEmbeddings avec check_embedding_ctx_length=False et model_kwargs encoding_format=float. Les requêtes texte/lots, Bearer, format numérique et erreurs 400/401 ont été vérifiés avec le client réel et un transport simulé. Le proxy transmet input et encoding_format au moteur ; aucune validation en production effectuée. FAISS et Qdrant mémoire revérifiés avec le client standard. Suppression du wrapper qui masquait les erreurs ; documentation du découpage désormais à la charge de l’application. La suggestion de réutiliser directement le wrapper LangChain dans LlamaIndex est supprimée. Traductions à régénérer.

**P3 — simplification à tester.** API recommande une classe personnalisée car OpenAIEmbeddings pré-tokenise les textes. L’éditeur documente `check_embedding_ctx_length=False` pour envoyer du texte brut.

**Conséquence :** La documentation entretient une couche spécifique et ses erreurs : la classe renvoie `[]` sur erreur HTTP, puis `embed_query` accède à `[0]`.

**Correction recommandée :** Tester le client standard avec ce réglage sur LLMaaS. Si validé, remplacer le contournement ; sinon documenter précisément l’incompatibilité restante.

**Preuves :** [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:906), [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:954), [Référence LangChain du réglage](https://reference.langchain.com/python/langchain-openai/embeddings/base/OpenAIEmbeddings/check_embedding_ctx_length).

## 15. Commandes de démarrage incohérentes avec les fichiers présentés

**Suivi — corrigé en français sur validation de Christophe.** Les deux exemples se lancent depuis les dossiers créés par le lecteur (simple_tool_calling et simple_vision), avec requirements.txt et .env locaux. Les listes de fichiers, configurations et commandes sont alignées. Parcours de clé harmonisé sur Console → LLMaaS → Clés API, validé par Christophe, sans contrôle de l’interface en direct. Traductions à régénérer.

**P2 — avéré.** Le quickstart demande de créer des répertoires `simple_tool_calling` / `simple_vision`, puis exécute `tests/llmaas/test_tool_calling.py` et `test_vision.py`. Ces deux scripts ne sont pas présents à ces emplacements dans le dépôt consulté. Les étapes de création de clés diffèrent aussi entre quickstart (paramètres du compte) et Cline (LLMaaS > Clés API).

**Conséquence :** Le lecteur ne peut pas suivre les instructions de bout en bout.

**Correction recommandée :** Utiliser les noms des scripts effectivement créés et un seul parcours Console, à vérifier sur l’interface actuelle.

**Preuves :** [quickstart.md](/Users/clesur/PROJETS/docs/docs/llmaas/quickstart.md:408), [quickstart.md](/Users/clesur/PROJETS/docs/docs/llmaas/quickstart.md:592), [tutorials.md](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:910).

## 16. Exemples de formats non directement copiables

**Suivi — corrigé en français sur validation de Christophe.** Paramètres du quickstart en JSON valide, explications sorties du bloc. Réponse embeddings signalée comme extrait abrégé non copiable et bloc étiqueté text. Fragment OCR conservé puisqu’il est explicitement présenté comme extrait du payload. Les anciens exemples JSONL Batch ont déjà été retirés lors du point 2. Traductions à régénérer.

**P3 — avéré.** Le bloc JSON des paramètres quickstart contient des commentaires ; la réponse embeddings contient `...`. Batch étiquette du JSONL comme JSON. Le fragment OCR `"text": ...` est un extrait de dictionnaire, pas un programme Python autonome.

**Conséquence :** Les blocs peuvent être copiés comme du JSON ou du Python valide alors qu’ils ne le sont pas.

**Correction recommandée :** Distinguer exemples complets, JSONL, JSON commenté et fragments. Le parseur a signalé ces cas ; JSONL et fragments explicites ne sont pas des bugs de l’API.

**Preuves :** [quickstart.md](/Users/clesur/PROJETS/docs/docs/llmaas/quickstart.md:117), [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:401), [batch.md](/Users/clesur/PROJETS/docs/docs/llmaas/batch.md:58), [ocr.md](/Users/clesur/PROJETS/docs/docs/llmaas/ocr.md:199).

## 17. Headers et corps de réponse confondus

**Suivi — corrigé en français sur validation de Christophe.** Section renommée « Métadonnées des réponses » ; id et backend décrits comme des champs du corps JSON, avec une présence dépendant de l’endpoint et un renvoi à la référence API. Suppression de la promesse de headers présents dans chaque réponse. Traductions à régénérer.

**P3 — incohérence de présentation.** La vue d’ensemble annonce `id` et `backend` comme des headers présents dans chaque réponse, puis les montre dans le JSON. Le Swagger les décrit comme des champs du corps, notamment pour le reranking.

**Conséquence :** Une intégration peut chercher les informations au mauvais endroit.

**Correction recommandée :** Documenter séparément les en-têtes HTTP et les extensions du corps ; vérifier leur présence par endpoint.

**Preuves :** [llmaas.md](/Users/clesur/PROJETS/docs/docs/llmaas/llmaas.md:42), [swagger.yaml](/Users/clesur/PROJETS/LLMaaS/servers/lb/swagger.yaml:468).

## 18. Engagements juridiques/commerciaux sans source applicable

**Suivi — formulation de souveraineté corrigée (8 septembre 2026).** Sur validation de Christophe, la FAQ décrit l’hébergement et l’exploitation en France par Cloud Temple, société de droit français, et renvoie à la page officielle « Notre approche SecNumCloud », consultée et accessible. Suppression de la déduction générale sur le CLOUD Act à partir du seul lieu d’hébergement et du droit de la société. Le corpus de démonstration des tutoriels reste inchangé, conformément à la décision sur les données de test.

**Validation métier — disponibilité et support (8 septembre 2026).** Christophe confirme les engagements de la FAQ pour l’offre actuelle : disponibilité de 99 %, première réponse du support standard en jour ouvré, réponse jusqu’à 4 h pour les incidents critiques avec l’option de support renforcé. Texte conservé sur cette confirmation, sans ajout d’une période de calcul du SLA ni d’une couverture horaire non précisées.

**Validation métier — garantie IBM (8 septembre 2026).** Christophe confirme que la garantie d’indemnisation IBM sans plafond annoncée pour Granite s’applique à son utilisation via LLMaaS. Mentions conservées dans la FAQ et le guide RAG sur cette confirmation ; aucune vérification contractuelle indépendante réalisée dans cet audit. Cette confirmation porte sur l’applicabilité de la garantie, pas sur l’affirmation comparative « unique sur le marché ».

**Suivi partiel — isolation hors périmètre LLMaaS.** Christophe indique que la mention « Environnements dédiés par tenant » ne concerne pas LLMaaS et valide sa suppression de Concepts. Ligne retirée sans la remplacer par une affirmation d’isolation logique. Les autres sujets de ce point (garanties IBM, souveraineté, disponibilité/support) restent à examiner séparément.

**P2 — validation métier et contractuelle.** La FAQ affirme une indemnisation IBM sans plafond, une soustraction au CLOUD Act, un SLA de 99 % et une réponse support jusqu’à 4 h. Concepts promet aussi une isolation dédiée par tenant. Le RAG reprend l’indemnisation sans préciser les conditions du service souscrit.

**Conséquence :** Ces affirmations peuvent être interprétées comme des engagements Cloud Temple. L’audit ne conclut pas qu’elles sont fausses, mais leur applicabilité n’est pas établie par les pièces consultées.

**Correction recommandée :** Faire valider les formulations par les responsables concernés et pointer vers les clauses applicables ; préciser le périmètre qualifié, l’isolation et les conditions de garanties de tiers.

**Preuves :** [faq.md](/Users/clesur/PROJETS/docs/docs/llmaas/faq.md:29), [faq.md](/Users/clesur/PROJETS/docs/docs/llmaas/faq.md:57), [faq.md](/Users/clesur/PROJETS/docs/docs/llmaas/faq.md:77), [concepts.md](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:84), [rag_explained.md](/Users/clesur/PROJETS/docs/docs/llmaas/rag_explained.md:56).

## 19. Les sources catalogue restent divergentes

**Décision — référence de cycle de vie confirmée par Christophe le 8 septembre 2026.** Lifecycle fait autorité pour les dates et migrations. Règle explicitée dans le guide modèles et le README de maintenance ; aucune duplication des dates dans la documentation. Les capacités techniques sont à vérifier dans la configuration effective du service. Les fichiers des dépôts LLMaaS/status n’ont pas été modifiés : leurs divergences restent à réconcilier par les mainteneurs, et la divergence de contexte n’est pas tranchée par cette décision sur les dates.

**P2 — avéré.** `qwen3.6:27b` : DSP 31/12 dans le YAML contre 30/09 dans lifecycle. `qwen3.8:27b` : contexte 250 000 dans lifecycle contre 1 000 000 dans l’inventaire opérationnel. `embeddinggemma:300m` : DSP 30/06/2026 dans le YAML, contre 30/12/2027 dans l’inventaire et lifecycle.

**Conséquence :** Un lien unique réduit les copies mais ne garantit pas la justesse de la source publiée.

**Correction recommandée :** Réconcilier les données amont, définir le propriétaire de chaque champ et vérifier leur accord lors d’une livraison de modèle.

**Preuves :** [models_config.yaml](/Users/clesur/PROJETS/LLMaaS/scripts/models_information/models_config.yaml:30), [models_config.yaml](/Users/clesur/PROJETS/LLMaaS/scripts/models_information/models_config.yaml:574), [lifecycle.ts](/Users/clesur/PROJETS/status/web/src/data/lifecycle.ts:33), [model_list.md](/Users/clesur/PROJETS/LLMaaS/scripts/models_information/model_list.md:17).

## 20. Les traductions conservent le catalogue obsolète

**Validation finale — point 20 clos le 10 septembre 2026.** Après traduction du changelog par Christophe : 48 empreintes et structures vérifiées sans écart (12 pages × 4 langues), ancres réalignées et contrôle sans défaut. Build FR/EN/ES/IT/DE réussi, sans lien ni ancre cassé. Tests du traducteur, syntaxe des admonitions et scénarios HTTP simulés Batch/LangChain/embeddings/calculatrice repassés. Les autres points encore ouverts de l’audit ne sont pas déclarés résolus par cette validation.

**Correction des ancres — 10 septembre 2026.** Réutilisation de scripts/fix_i18n_anchors.py découvert dans les commits récents ; identifiants explicites abandonnés car incompatibles avec le MDX strict du projet. Correction du calcul des slugs pour conserver les espaces consécutifs comme github-slugger. Liens traduits réalignés par cet outil, sans édition manuelle de i18n ; son mode --check ne signale plus aucun écart. Workflow post-traduction rappelé dans scripts/README.md. La nouvelle entrée de changelog reste à traduire séparément.

**Suivi — traductions régénérées par Christophe, contrôlées le 9 septembre 2026.** Les 44 empreintes de traduction (11 pages × 4 langues) correspondent aux sources françaises actuelles. Compilation réussie dans les cinq langues ; 104 blocs Python traduits syntaxiquement valides, sans nouvelle erreur par rapport aux sources. Le build signale toutefois 68 liens LLMaaS à ancres cassées (17 par langue EN/ES/IT/DE) : les titres traduits changent les ancres tandis que les liens conservent les fragments français. Point non clos : correction durable des ancres à soumettre avant publication. Des espaces de fin de ligne générés font aussi échouer git diff --check ; pas d’édition manuelle de i18n. Journal : /tmp/docs-llmaas-translations-build.log.

**P2 — avéré.** Les catalogues EN/DE/ES/IT contiennent encore les nombres et fiches anciens et aucun lien lifecycle. La traduction de cette session n’a pas pu démarrer, faute de `CLOUDTEMPLE_API_KEY`.

**Conséquence :** La réponse dépendra de la langue choisie, même si le build multilingue réussit.

**Correction recommandée :** Regénérer toutes les pages LLMaaS modifiées avec le script officiel, puis contrôler les liens et compiler. Ne pas modifier i18n à la main.

**Preuves :** [models.md](/Users/clesur/PROJETS/docs/i18n/en/docusaurus-plugin-content-docs/current/llmaas/models.md:10), [README.md](/Users/clesur/PROJETS/docs/README.md:183).

## 21. Lifecycle ne remplace pas les fiches de capacités et licences

**P2 — limite de la modification en cours.** La nouvelle page models supprime les anciennes fiches détaillées et renvoie vers lifecycle. Or lifecycle expose surtout phase, dates, contexte et migration, sans les champs structurés de licence, vision ou tool calling du YAML. Le nouveau guide demande donc de vérifier certaines informations sans offrir une fiche publique équivalente.

**Conséquence :** La simplification traite le retard mais réduit l’aide au choix. C’est un effet de la modification de cette session, pas seulement une dette antérieure.

**Correction recommandée :** Conserver le cycle de vie comme référence des dates et publier les capacités/licences à partir du YAML source, dans une page générée existante ou le portail catalogue. Ne pas recréer des fiches manuelles dans docs.

**Preuves :** [models.md](/Users/clesur/PROJETS/docs/docs/llmaas/models.md:69), [lifecycle.tsx](/Users/clesur/PROJETS/status/web/src/pages/lifecycle.tsx:4), [models_config.yaml](/Users/clesur/PROJETS/LLMaaS/scripts/models_information/models_config.yaml:44).

## 22. Fonctions annoncées sans référence API correspondante

**P3 — documentation incomplète.** La vue d’ensemble annonce synthèse vocale et génération d’images, et la FAQ annonce transcription temps réel. La page API ne décrit pas ces interfaces ; le Swagger local contient au moins `/v1/audio/speech` et `/v1/images/generations`. Les sections Semantic Kernel et Haystack sont des simulations par HTTP, sans utiliser les SDK annoncés.

**Conséquence :** Le lecteur ne peut pas implémenter toutes les fonctions annoncées à partir de la documentation.

**Correction recommandée :** Ajouter des renvois vers les contrats maintenus et renommer les simulations pour éviter de les présenter comme des intégrations SDK validées.

**Preuves :** [llmaas.md](/Users/clesur/PROJETS/docs/docs/llmaas/llmaas.md:125), [faq.md](/Users/clesur/PROJETS/docs/docs/llmaas/faq.md:21), [swagger.yaml](/Users/clesur/PROJETS/LLMaaS/servers/lb/swagger.yaml:217), [tutorials.md](/Users/clesur/PROJETS/docs/docs/llmaas/tutorials.md:658).

## 23. Conseils coût/performance et sécurité trop généraux

**P3 — contradictions pédagogiques.** API recommande de réutiliser les conversations pour économiser, alors que Concepts explique que l’historique est refacturé en entrée à chaque appel. Concepts relie taille/énergie du modèle à un coût client alors que la grille présentée est uniforme par token. La formule peut faire croire que les tokens de raisonnement sont à ajouter aux completion_tokens sans expliquer leur inclusion. Retirer guillemets/backticks est présenté comme nettoyage contre l’injection ; Reranking annonce +15 à +30 % de précision sans protocole ni source.

**Conséquence :** Mauvaises estimations, attentes de gains non étayées et sentiment trompeur de protection.

**Correction recommandée :** Expliquer le coût à partir des champs de consommation facturés, la réduction d’historique et les mesures sur le corpus client ; ne pas présenter une suppression de caractères comme une protection anti-injection.

**Preuves :** [api.md](/Users/clesur/PROJETS/docs/docs/llmaas/api.md:831), [concepts.md](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:48), [concepts.md](/Users/clesur/PROJETS/docs/docs/llmaas/concepts.md:302), [rerank.md](/Users/clesur/PROJETS/docs/docs/llmaas/rerank.md:37).

## Vérifications effectuées

- Compilation Docusaurus des cinq langues réussie, puis compilation française finale réussie après les deux dernières retouches FR. Des avertissements HTML non bloquants concernent des pages hors LLMaaS.
- Les liens publics `/`, `/lifecycle`, `/changelog` et `/history` répondent HTTP 200.
- Les ancres du guide de migration et de la section Reranking du nouveau catalogue sont présentes dans le HTML généré.
- `git diff --check` passe.
- L’ancien générateur refuse explicitement la régénération et ne modifie pas `models.md`.
- Reproduction isolée du TypeError du filtre de reranking sans appel réseau.
- Analyse syntaxique des blocs Python/JSON et vérification des deux chemins de scripts manquants du quickstart.
- Traduction automatique bloquée par l’absence de clé API ; un build réussi ne signifie pas que les traductions sont à jour.

## Ordre de traitement recommandé

1. Corriger Batch, la description des protections et la conservation ; arbitrer l’unité de facturation du reranking.
2. Corriger les exemples présentant un risque, les scripts cassés et les contradictions de formats/modèles/tarifs.
3. Faire valider les engagements contractuels et réconcilier les métadonnées amont.
4. Rétablir l’accès public aux capacités/licences depuis leur source maintenue, puis régénérer les traductions et valider le parcours client.

## Complément plateforme : calcul du coût reranking à vérifier

Le [compteur de crédits](/Users/clesur/PROJETS/LLMaaS/servers/token_counter-renew/src/services/credit_service.rs:19) divise `search_units × tarif` par un million. La fonction [calc_costs_with_mode du dashboard V2](/Users/clesur/PROJETS/LLMaaS/servers/llmaas-dashboard/control-center-v2/src/utils/pricing.rs:182) multiplie les unités par le tarif sans cette division, alors que son commentaire revendique un alignement sur le compteur. Les deux fonctions consomment la clé `rerank_search_units`.

Il s’agit d’une divergence de code à vérifier avec les conventions de chargement des tarifs et la version déployée, pas d’une preuve de surfacturation en production. À valeur de tarif identique, ces formules diffèrent d’un facteur un million. Ne pas essayer de compenser cette divergence par une formulation documentaire.

## Inventaire des exemples dépassés

Le [relevé détaillé des exemples](./audit-exemples-llmaas-2026-09-07.md) distingue les exemples à remplacer, les réglages de modèles à actualiser et les démonstrateurs dont le principe reste utilisable. Les scripts externes n’ont pas été modifiés ni exécutés contre la production.
