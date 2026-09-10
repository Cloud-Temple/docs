# FAQ sur l'offre de service LLMaaS Cloud Temple

## Offre et Capacités

### **Quelle est la proposition de valeur de votre service LLMaaS ?**
Notre service vous offre un accès **souverain et sécurisé** à un large catalogue de modèles d'IA de pointe, via une API compatible OpenAI. Nous gérons toute la complexité de l'infrastructure qualifiée **SecNumCloud 3.2**, vous permettant de vous concentrer sur la création de valeur pour vos applications, tout en maîtrisant vos coûts grâce à un modèle économique prévisible et en accélérant vos développements grâce à des standards ouverts.

### **Quel type de modèles proposez-vous et comment le catalogue évolue-t-il ?**
Le catalogue couvre le chat et le raisonnement, la programmation et les agents, la vision, les embeddings, le reranking, la sécurité, la traduction et les usages audio/image. Les modèles et leurs licences varient selon l'usage.

Consultez le **[catalogue et cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle)** pour la liste actuelle, les statuts LTS, les échéances et les migrations conseillées. Les nouveautés sont publiées dans le **[changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog)**.

### **Un ancien nom de modèle peut-il continuer à fonctionner après une évolution du catalogue ?**
Oui, certains identifiants sont redirigés vers un successeur. Cela préserve l'appel API mais peut modifier le comportement du modèle. Vérifiez la destination dans le cycle de vie, testez-la sur vos cas d'usage puis mettez à jour votre configuration. Consultez le [guide de migration](./concepts.md#migration-vers-un-autre-modèle).

### **Quelles sont les principales capacités fonctionnelles de votre API ?**
Notre API compatible OpenAI vous permet de construire des fonctionnalités comme celles ci-dessous. Les endpoints et paramètres pris en charge sont précisés dans la [référence API](./api.md#compatibilité-openai).
*   Des **chatbots/assistants** conversationnels avec streaming et function calling.
*   Des systèmes de **Recherche Augmentée par Génération (RAG)** complets : embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + génération augmentée.
*   Des applications d'**analyse d'images et de documents visuels** (OCR, graphiques). Pour les PDF, convertissez préalablement les pages en images ; consultez les [prérequis du guide OCR](./ocr.md#prérequis--format-de-limage-et-dépendances).
*   La **transcription audio** batch ou temps réel via WebSocket.
*   Le **traitement en lot (Batch API)** asynchrone pour les workloads volumineux, avec une tarification réduite de 50%.
*   La **génération d'images** via API compatible OpenAI.

## Sécurité et Souveraineté

### **Comment garantissez-vous la souveraineté et la confidentialité de nos données ?**
La souveraineté est au cœur de notre offre. Elle repose sur plusieurs piliers :
1.  **Hébergement et exploitation en France** : L’infrastructure LLMaaS est hébergée en France et opérée en France par Cloud Temple, société de droit français. Pour les garanties de souveraineté associées à la qualification, consultez [notre approche SecNumCloud](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **Qualification SecNumCloud 3.2** : Le plus haut visa de sécurité de l'ANSSI garantit ce positionnement.
3.  **Non-conservation des données** : Nous ne stockons **ni vos prompts, ni les réponses**. Les données sont traitées de manière volatile en mémoire le temps de l'inférence.
4.  **Chiffrement de bout en bout** : Toutes les communications avec l'API sont chiffrées en **TLS 1.3**.

### **Comment gérez-vous les accès, les droits (RBAC) et l'authentification (SSO, MFA) ?**
Notre service s'intègre à votre politique de sécurité selon un modèle de responsabilité partagée :
*   **Pour vos utilisateurs finaux** : La gestion des identités, des droits (RBAC) et de l'authentification forte (SSO, MFA) est de la responsabilité de **votre application**.
*   **Pour vos administrateurs** : Les accès à la **Console Cloud Temple** pour le pilotage du service (gestion des clés, supervision) peuvent être connectés à votre SSO d'entreprise (via OpenID Connect) pour bénéficier de vos politiques de sécurité, y compris le MFA.
*   **Pour vos applications** : Vous pouvez créer différentes clés d'API avec des quotas de consommation distincts pour segmenter les droits au niveau applicatif.

### **Comment la plateforme est-elle sécurisée ?**
Nous appliquons une défense en profondeur :
*   **Authentification forte** par clé d'API pour chaque requête.
*   **Chiffrement TLS 1.3** de tous les flux.
*   **Protection réseau** par pare-feu de nouvelle génération et systèmes de détection/prévention d'intrusion (IDS/IPS).
*   **Tests d'intrusion réguliers** réalisés par des auditeurs qualifiés (PASSI) dans le cadre de notre qualification SecNumCloud 3.2.

### **Les prompts sont-ils filtrés automatiquement ?**
Non. La plateforme n'applique pas de filtrage automatique du contenu des prompts contre les injections ou les tentatives de contournement des instructions. Les contrôles de contenu relèvent de votre application. Vous pouvez intégrer explicitement un modèle de sécurité pour évaluer les entrées ou les réponses, selon vos critères métier. Consultez la [sécurité des prompts](./concepts.md#sécurité-des-prompts).

## Intégration et Usage

### **Comment s'intègre votre API ?**
Notre service est "API-first". Son **API compatible OpenAI** permet d’utiliser les SDK OpenAI et des frameworks comme **LangChain** ou **LlamaIndex** pour les appels pris en charge. Configurez l’URL de base et votre clé LLMaaS, puis vérifiez les paramètres et les capacités du modèle choisi. Consultez les [différences documentées](./api.md#compatibilité-openai) et les [exemples d’intégration](./tutorials.md).

### **Peut-on personnaliser l'expérience utilisateur ?**
Oui, totalement. Notre service étant une API "headless", vous avez un contrôle total sur l'interface et l'expérience de vos utilisateurs finaux, y compris l'intégration de votre charte graphique et l'affichage de messages de conformité, qui sont de votre responsabilité.

### **Comment gérez-vous les risques liés à la propriété intellectuelle (PI) ?**
Vous avez le contrôle total sur les modèles que votre application appelle. Pour les cas d'usage sensibles à la PI, nous mettons en avant les modèles **Granite d'IBM**, qui bénéficient d'une **indemnisation contractuelle sans plafond** contre les réclamations de PI, une garantie unique sur le marché.

## Modèle Économique et Support

### **Quel est votre modèle économique ?**
Notre modèle est basé sur la consommation réelle pour refléter le coût de calcul exact. La tarification par type d'usage :

| Usage | Tarif |
|-------|-------|
| **Tokens d'entrée (chat)** | 1.8 € / million |
| **Tokens de sortie (chat)** | 8.0 € / million |
| **Tokens de raisonnement** | 8.0 € / million |
| **Reranking** | 4,00 € / million de documents traités |
| **Batch (entrée)** | 0.9 € / million (−50%) |
| **Batch (sortie)** | 4.0 € / million (−50%) |
| **Audio ASR** | 0.01 € / minute de transcription |

Pour garantir la prévisibilité et la maîtrise budgétaire, nous proposons des **Tiers de service** avec des budgets plafonnés et des **contrats sur mesure**. Vous pouvez suivre votre consommation en temps réel depuis la Console Cloud Temple pour une transparence totale. Le nombre d'utilisateurs est toujours illimité, quel que soit le plan choisi.

### **Quel niveau de support et de SLA proposez-vous ?**
Notre offre standard inclut un support technique en Français et Anglais, accessible via notre portail client, avec un engagement de première réponse en jour ouvré. La plateforme bénéficie d'un engagement de disponibilité de **99%**. Pour les besoins les plus critiques, nos **Services Professionnels** optionnels vous donnent accès à des SLAs renforcés, incluant un support prioritaire avec un temps de réponse jusqu'à 4h pour les incidents critiques, et un accompagnement stratégique sur mesure (ateliers d'innovation, gouvernance ITIL).

### **Comment puis-je suivre l'état de santé de la plateforme LLMaaS ?**
Nous croyons en une transparence totale sur la disponibilité de nos services. Vous pouvez consulter en temps réel le statut opérationnel de chaque modèle d'IA sur notre page de statut publique : **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Cette page fournit des informations détaillées sur :
*   L'état général de la plateforme.
*   La disponibilité de chaque modèle individuellement.
*   Les métriques de performance comme le temps de réponse (TTFB) et le débit (tokens/s).
*   L'historique des incidents pour un suivi complet.
