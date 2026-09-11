# Contexte documentation LLMaaS

Mise à jour : 7 septembre 2026.

## Décision éditoriale

La documentation explique les usages, l'API, le choix d'un modèle et les migrations. Elle ne recopie plus le catalogue complet, les nombres de modèles, les performances ou les tableaux de fin de support.

- Catalogue et cycle de vie public : https://llmaas.status.cloud-temple.app/lifecycle
- Nouveautés : https://llmaas.status.cloud-temple.app/changelog
- Disponibilité : https://llmaas.status.cloud-temple.app/
- Métadonnées et capacités : dépôt LLMaaS, `scripts/models_information/models_config.yaml`.
- Identifiants exposés : `GET /v1/models` authentifié.

`memory-bank/models_config.yaml` est une copie historique. L'ancien générateur est désactivé pour éviter d'écraser le guide `docs/llmaas/models.md`. Voir le README principal pour le workflow.

## Points de vigilance amont

Les sources consultées divergent : `qwen3.6:27b` porte une DSP au 31/12/2026 dans le YAML LLMaaS, mais au 30/09/2026 avec redirection dans `status`. Le contexte de `qwen3.8:27b` est de 250 000 dans `status`, contre 1 000 000 dans l'inventaire opérationnel LLMaaS. Faire réconcilier ces informations par les mainteneurs des sources avant leur prochaine publication.

Ne pas assimiler dépréciation et indisponibilité : certains anciens identifiants sont redirigés. Une redirection impose de valider le comportement du successeur. Ne pas réintroduire un préavis universel de trois mois sans validation : les annonces consultées ne le respectent pas toutes.

## Traductions et validation

Modifier les sources françaises puis utiliser `scripts/translate_py/translate.py` ; ne pas éditer manuellement `i18n/`. Compiler Docusaurus et vérifier les liens après modification.

## Remédiation validée — filtrage des prompts (7 septembre 2026)

Christophe Lesur confirme que le filtrage historique a été neutralisé à cause de nombreux faux positifs. Ne plus présenter de filtrage automatique du contenu des prompts, de protection native anti-injection/jailbreak, ni de trois couches de contrôle actives. Les modèles de sécurité sont appelés explicitement par l'application cliente. Concepts et FAQ corrigés en français ; traductions à régénérer. Continuer la remédiation de l'audit point par point en posant une question à Christophe avant chaque point suivant.

## Remédiation validée — Batch (7 septembre 2026)

Christophe confirme que les sources LB et proxy Rust correspondent au service déployé. Guide FR Batch réécrit sur POST/GET `/v1/chat/completions/batch` : conversations JSON, modèle/paramètres communs, 202 queued, results en réponse GET, erreurs partielles possibles même avec completed. Limites par défaut configurables : 1 000 conversations, 100 lots en file par instance, TTL 24 h après complétion (pas un SLA de traitement). État Batch en mémoire sans reprise après redémarrage. Exemple validé avec HTTP simulé ; aucun batch soumis en production. Le démonstrateur externe simple_batch et les traductions restent à corriger.

Point 3 à arbitrer : le proxy contient aussi `encrypted_logging`, activé par défaut dans config.rs, avec appels de journalisation des entrées/sorties du chat et rétention configurable. Ne pas conclure à une absence de journalisation des contenus à partir du stockage en RAM de l'état Batch. Demander à Christophe les modalités réellement appliquées (activation, clés, rétention).

## Suivi — RFC journalisation

Christophe confirme que la RFC SRE sur la journalisation est en cours et demande de poursuivre les autres points. Ne pas clore le point 3 ni affirmer une absence de stockage des contenus avant le retour SRE. Prochain point : unité et tarif du reranking ; RFC-0084 classée FAIT et migration SQL indiquent 4 €/million de documents, à soumettre à Christophe avant correction documentaire.

## Remédiation validée — tarif reranking

Christophe confirme 4 € par million de documents traités (search_units), conforme à la RFC-0084 classée FAIT et à la migration SQL. Sources FR API, FAQ, Concepts et Reranking corrigées. `top_n` ne réduit pas le nombre de documents facturés. Exemple : 1 000 requêtes × 100 documents = 100 000 unités = 0,40 €. Supprimer toute assimilation aux tokens et comparaison « 50 % moins cher que la génération ». Ne pas confondre cette validation tarifaire avec la résolution de la divergence logicielle compteur/dashboard ; traductions et schémas de réponse restent à traiter. Prochain point à soumettre : 5, exemples risqués.

## Remédiation validée — exemples risqués

Point 5 approuvé et corrigé en français : calculatrice sans eval (deux nombres finis, quatre opérations, calcul composé par appels successifs), Fetch Node.js côté serveur avec LLMAAS_API_KEY, LlamaIndex avec TemporaryDirectory et nettoyage même sur erreur. Comportements modifiés vérifiés hors réseau ; aucune requête de production. Compatibilité des dépendances LangChain traitée séparément au point 13. Traductions toujours en attente de clé. Prochain point à soumettre : 6, tarifs périmés dans les corpus RAG et sorties OCR.

## Décisions complémentaires — points 3 et 6

Christophe rapporte le 7 septembre 2026 que Kevin confirme la désactivation de la journalisation des contenus en production. Le doute sur l'activation est levé sur confirmation opérationnelle, sans inspection directe de production par l'assistant. La présence du mécanisme dans le code ne constitue pas une preuve d'activation. Cette décision remplace l'attente de confirmation mentionnée plus haut. La formulation générale de la FAQ reste à distinguer de la conservation temporaire Batch ; la RFC n'est pas déclarée terminée.

Point 6 accepté en l'état : les prix dans l'OCR appartiennent à une démonstration et ceux des corpus RAG à des tests. Ne pas les remplacer ni ajouter d'avertissement. Prochain point à soumettre : 7, promesse de compatibilité OpenAI à 100 %.

## Remédiation validée — compatibilité OpenAI

Point 7 approuvé : conserver « API compatible OpenAI » en précisant le périmètre des appels documentés. FAQ, API et introduction du tutoriel SDK corrigées ; section de référence avec renvois vers les différences complétions, embeddings, transcription et Batch. Ne plus promettre 100 % de compatibilité ni une migration universellement transparente. Prochain point à soumettre : 8, PDF annoncé sans prétraitement dans la FAQ alors que le guide OCR demande une conversion en images.

## Remédiation validée — PDF

Point 8 confirmé par Christophe : les pages PDF doivent être converties en images avant analyse. FAQ corrigée avec renvoi aux prérequis OCR ; suppression de « sans prétraitement ». Prochain point à soumettre : 9, rotation automatique des clés annoncée dans Concepts alors que le RACI attribue la rotation au client.

## Remédiation validée — rotation des clés API

Point 9 validé par Christophe : création, rotation et révocation des clés API clientes sous la responsabilité du client. Concepts corrigé avec lien vers le RACI ; ne plus annoncer de rotation automatique des clés clientes. Prochain point à soumettre : 10, exemples de modèles et performances anciens.

## Remédiation validée — anciens modèles et performances

Point 10 : remplacements précis approuvés par Christophe. Vision gemma4:31b ; Cline qwen3.6:35b. Suppression du choix automatique sentiment/petit modèle et juridique/gros modèle ainsi que du comparatif énergétique ancien. Conseil fondé sur évaluation qualité/latence/consommation, avec renvoi lifecycle. Réponse fictive /models conservée et signalée comme illustrative. Prochain point à soumettre : 11, scores et schéma de réponse du reranking.

## Remédiation validée — réponse et scores reranking

Point 11 corrigé après validation : réponses illustratives Jina/vLLM dans API et Reranking, scores bruts non normalisés, compteurs tokens distincts de la facturation par document. Sources : Swagger et rerank_handler.rs, sans observation de production. Suppression du filtre fixe 0,3 remplacé par conseils de calibrage ; cette suppression résout également le point 12 (TypeError dans cet exemple). Prochain point à soumettre : 13, imports et dépendances LangChain des tutoriels.

## Remédiation validée — dépendances LangChain

Point 13 corrigé : imports core/classic/text_splitters, QdrantVectorStore (langchain-qdrant), BaseTool name/description typés, invoke, retrait model_rebuild. Versions validées documentées dans les prérequis des tutoriels et liées depuis API. Python 3.13.15 ; classic 1.0.8, core 1.6.2, openai 1.6.0, community 0.4.2, text-splitters 1.1.2, qdrant 1.1.0. Environnement temporaire /tmp/llmaas-langchain-check ; test /tmp/check_llmaas_langchain.py, journal /tmp/llmaas-langchain-check.log. Pip check et exécution wrapper/FAISS/Qdrant mémoire/agent calculatrice/chat/embeddings API passent, réseau bloqué et HTTP simulé. Conserver les classes historiques dans cette remise en état ciblée en signalant leur statut, pas de refonte d’agents. Prochain point à soumettre : 14, intégration embeddings standard et propagation des erreurs du wrapper API.

## Remédiation validée — embeddings LangChain

Point 14 : API et deux tutoriels RAG utilisent maintenant OpenAIEmbeddings, check_embedding_ctx_length=False, model_kwargs={encoding_format: float}. Trois wrappers supprimés, dont celui qui renvoyait [] en cas d’erreur. Découpage préalable des documents explicitement requis. Configuration vérifiée contre EmbeddingRequest/openai_types.rs et embeddings_handler.rs ; client réel testé avec HTTP simulé et sockets bloquées : textes Unicode/lots, Bearer, format float, vecteurs, erreurs 400/401 propagées. Pipelines FAISS/Qdrant mémoire repassés. Tests temporaires /tmp/check_llmaas_embeddings.py et /tmp/check_llmaas_langchain.py ; pas de validation en production. Prochain point à soumettre : 15, chemins du quickstart et parcours de création de clé.

## Remédiation validée — commandes quickstart

Point 15 approuvé : exemples autonomes dans simple_tool_calling et simple_vision ; cd dans chaque dossier avant installation et lancement, .env local partout, aucun chemin tests/llmaas. Parcours de création de clé harmonisé sur LLMaaS > Clés API sur validation de Christophe, sans inspection UI directe. Prochain point à soumettre : 16, étiquetage des extraits JSON/Python et formats illustratifs.

## Complément validé — calculatrice du quickstart

Christophe approuve la correction du résidu eval dans le quickstart : même calcul borné que le tutoriel agent, description et paramètres du tool adaptés, question simple 15 + 20. Aucun support de calcul composé ajouté au scénario à deux appels. Reprendre ensuite le point 16 (formats illustratifs), encore à soumettre.

## Remédiation validée — formats des exemples

Point 16 validé : JSON des paramètres quickstart directement copiable, commentaires déplacés en prose. Réponse embeddings signalée comme extrait abrégé et étiquetée text. Fragment OCR conservé comme demandé. Ancien JSONL Batch déjà supprimé au point 2. Prochain point à soumettre : 17, id/backend annoncés comme headers alors qu’il s’agit de champs JSON.

## Remédiation validée — métadonnées des réponses

Point 17 corrigé sur validation : id/backend sont des champs du corps JSON selon l’endpoint, pas des headers universels. Vue d’ensemble renommée « Métadonnées des réponses » avec lien API. Prochain point à soumettre : 18, affirmations métier/contractuelles à qualifier.

## Point 18 — isolation hors périmètre

Christophe précise que « Environnements dédiés par tenant » ne concerne pas LLMaaS et approuve la suppression de cette seule ligne dans Concepts. Ne pas en déduire une description alternative de l’isolation. Le point 18 reste ouvert pour les autres engagements ; les soumettre séparément.

## Point 18 — garantie IBM confirmée (8 septembre 2026)

Christophe confirme l’applicabilité de la garantie d’indemnisation IBM sans plafond aux modèles Granite utilisés via LLMaaS. Conserver cette mention dans FAQ et RAG ; validation métier du dirigeant, pas de vérification contractuelle indépendante. L’affirmation « unique sur le marché » n’est pas couverte par cette confirmation. Prochain sous-point à soumettre : engagements de disponibilité et de support annoncés dans la FAQ.

## Point 18 — disponibilité et support confirmés (8 septembre 2026)

Christophe confirme les engagements publiés : disponibilité 99 %, première réponse du support standard en jour ouvré, jusqu’à 4 h pour les incidents critiques avec support renforcé optionnel. Conserver le texte ; ne pas inventer de période de calcul ou de couverture horaire. Sous-point suivant : formulation absolue relative au CLOUD Act dans la FAQ.

## Point 18 — souveraineté reformulée (8 septembre 2026)

Christophe valide la reformulation de la FAQ : hébergement/exploitation en France par Cloud Temple, société de droit français ; renvoi https://www.cloud-temple.com/notre-approche-secnumcloud/ (page consultée). Retrait de la déduction générale CLOUD Act. Les données des démonstrateurs restent inchangées. Les validations IBM et SLA précédentes demeurent acquises.

## Point 19 — autorité lifecycle confirmée (8 septembre 2026)

Christophe confirme que lifecycle fait autorité pour les dates de cycle de vie et les migrations. Guide modèles et README alignés ; ne pas recopier de dates divergentes depuis le YAML. Les capacités doivent être vérifiées dans la configuration effective et les métadonnées API. Les dépôts amont restent inchangés ; divergences techniques non arbitrées par cette décision. Prochain point : 20, traductions, toujours en attente d’une clé accessible au script officiel ; proposer une passe finale après les corrections restantes.

## Traductions contrôlées — 9 septembre 2026

Christophe a lancé et terminé les traductions. Les 44 empreintes sont à jour ; compilation FR/EN/ES/IT/DE réussie. 104 blocs Python traduits contrôlés sans nouvelle erreur de syntaxe. Reste 68 liens à ancres cassées dans les pages LLMaaS traduites (17/langue) car les titres changent les ancres. Proposer des identifiants explicites stables dans les titres sources et leur préservation par le traducteur ; ne pas éditer i18n manuellement. Logs /tmp/docs-llmaas-translations-build.log et /tmp/llmaas-translated-anchor-issues.txt. Espaces de fin de ligne générés signalés par git diff --check. Point 20 non clos ; points 21–23 restent à traiter.

## Ancres et revue du changelog — 10 septembre 2026

L’historique a révélé scripts/fix_i18n_anchors.py, à réutiliser après traduction. Les identifiants explicites {#...} sont incompatibles avec le MDX strict future.v4, comme expliqué par le commit 264dd588 : approche abandonnée et modifications préparatoires retirées. Aucun changement restant dans translator.py. Outil existant corrigé sur un seul point : ne pas fusionner les espaces lors du calcul d’un slug, confirmé contre github-slugger. Toutes les ancres traduites réparées par ce script ; --check sans écart. Workflow rappelé dans scripts/README.md. La clé reste absente de l’environnement de l’assistant.

À la demande de Christophe, revue des 44 commits hors fusion depuis le 1er août 2026 jusqu’à HEAD 17761583 (25 août). Changelog docs/changelog.md complété : 7 août vue organisation (fd3ebf69, 496dfa32 et ajustements propriétaires), 14 août périmètres IAM (010ca014), 17 août avis sécurité produits (2f3d6ea6), 10 septembre actualisation LLMaaS de cette session. L’entrée du 20 août bases managées couvre déjà 2c1c79e1 ; les versions publiées par 2ed2c249 figurent dans changelog_produits.md. Les commits CI, traduction, images, liens et nettoyage ne justifient pas d’annonces produit et restent exclus conformément au souhait utilisateur et au nettoyage éditorial e5736eec. La correction du développement de MCP dans le tutoriel OpenCost (45401230) reste une précision terminologique mineure, non une nouveauté produit. Les merges ne sont pas comptés deux fois.

Le changelog français modifié doit être traduit via translate.py --path changelog.md, puis fix_i18n_anchors.py et build. Ne pas recopier manuellement les nouvelles entrées dans i18n.

## Prévisualisation Docker et compteurs de traduction — 10 septembre 2026

Site compilé BASE_URL=/ en cinq langues et image construite avec docker/production/Dockerfile.prebuilt. Conteneur docs-llmaas-preview, image docs-llmaas-preview:local, accès local http://localhost:8082. Pages FR/changelog et modèles dans quatre langues vérifiées HTTP 200, ressources JS italiennes également. Image instantanée des fichiers au moment du build ; les futures traductions nécessitent une nouvelle construction pour y apparaître.

Christophe signale 23 736 tokens IN pour 2 876 OUT. Inspection : compteurs repris de usage.prompt_tokens/completion_tokens des blocs réussis, sans double addition apparente. Changelog actuel découpé en 34 blocs/langue ; 16 554 caractères source, 2 276 caractères de consignes par appel, soit 77 384 caractères de consignes répétés/langue. Ratio fortement accru par ce découpage, qui mérite une optimisation ciblée à soumettre ; ne pas conclure à la troncature sur le ratio seul. Aucun changement du découpage effectué.

## Traducteur — modèle et effort par défaut (10 septembre 2026)

Christophe demande qwen3.8:27b par défaut et gestion de l’effort réglé sur low. Appliqué à TranslationConfig, CLI et .env.example ; reasoning_effort est transmis dans le corps de chaque requête chat et affiché au démarrage. Option --reasoning-effort prioritaire sur TRANSLATION_REASONING_EFFORT, elle-même prioritaire sur le défaut low. README scripts actualisé. Trois tests dans tests/translation/test_model_effort.py : défauts/priorités, passage CLI, requête HTTP simulée. Aucun changement du découpage ni retraduction déclenchée. Pas d’entrée au changelog utilisateur pour ce réglage interne.

## Validation avant commit — 10 septembre 2026

Christophe confirme la traduction du changelog et autorise retest, rebuild et commit si les contrôles passent. 48 empreintes/structures de traduction concordent ; fix_i18n_anchors.py --check sans écart ; 3 tests traduction et 6 tests admonitions réussis ; scénarios Batch, LangChain/FAISS/Qdrant mémoire, embeddings et calculatrice repassés avec HTTP simulé. Build BASE_URL=/ dans les cinq langues réussi sans liens/ancres cassés. Les espaces de fin de ligne conservés par les traductions sont cosmétiques ; aucun autre défaut dans git diff --check. Reconstruction de l’image de prévisualisation et commit local des changements validés, sans push. Points 21–23 et précisions résiduelles du point 3 restent à traiter séparément.
