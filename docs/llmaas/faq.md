# FAQ sur l'offre de service LLMaaS Cloud Temple

## Offre et Capacités

### **Quelle est la proposition de valeur de votre service LLMaaS ?**
Notre service vous offre un accès **souverain et sécurisé** à un large catalogue de modèles d'IA de pointe, via une API compatible OpenAI. Nous gérons toute la complexité de l'infrastructure qualifiée **SecNumCloud 3.2**, vous permettant de vous concentrer sur la création de valeur pour vos applications, tout en maîtrisant vos coûts grâce à un modèle économique prévisible et en accélérant vos développements grâce à des standards ouverts.

### **Quel type de modèles proposez-vous et comment le catalogue évolue-t-il ?**
Nous proposons un catalogue riche de 45 modèles open-source, incluant les familles **Llama (Meta), Qwen, Deepseek, Mistral, Gemma (Google), Cogito et Granite (IBM)**. Nos modèles sont spécialisés pour divers cas d'usage :
*   **Raisonnement complexe et conversationnel**.
*   **Génération et analyse de code**.
*   **Analyse de documents longs** (jusqu'à 128k tokens avec des modèles comme `Gemma 3` ou `Qwen2.5-VL`).
*   **Capacités multimodales** (analyse d'image avec les séries `Granite Vision`, `Gemma 3`, `Qwen2.5-VL` et `Mistral Small`).
*   **Support multilingue avancé** (avec des modèles comme `Llama 3.3` et la famille `Qwen`).

Ce catalogue est **revu chaque trimestre** pour intégrer les modèles les plus performants, avec une politique de cycle de vie transparente (préavis de 3 mois avant tout retrait) pour garantir la stabilité de vos applications.

### **Quelles sont les principales capacités fonctionnelles de votre API ?**
Notre API, 100% compatible avec le standard OpenAI, vous permet de construire facilement des fonctionnalités avancées comme :
*   Des **chatbots/assistants** conversationnels.
*   Des systèmes de **Recherche Augmentée par Génération (RAG)** en utilisant notre endpoint d'embedding.
*   Des applications d'**analyse d'images et de documents visuels** sans OCR préalable.
*   La **transcription audio** via un service dédié.

## Sécurité et Souveraineté

### **Comment garantissez-vous la souveraineté et la confidentialité de nos données ?**
La souveraineté est au cœur de notre offre. Elle repose sur plusieurs piliers :
1.  **Hébergement en France** : Notre infrastructure est exclusivement en France, opérée par Cloud Temple, une société de droit français. Cela nous soustrait aux lois extraterritoriales comme le **CLOUD Act américain**.
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
*   **"Guardrails" applicatifs** pour se prémunir contre les menaces spécifiques aux LLMs, comme l'injection de prompts et les tentatives d'exploitation des modèles.
*   **Tests d'intrusion réguliers** réalisés par des auditeurs qualifiés (PASSI) dans le cadre de notre qualification SecNumCloud 3.2.

## Intégration et Usage

### **Comment s'intègre votre API ?**
Notre service est "API-first". Étant **compatible avec l'API OpenAI**, vous pouvez utiliser tous les SDK (Python, Node.js, etc.) et frameworks standards du marché comme **LangChain** ou **LlamaIndex** pour une intégration rapide. Nous fournissons une documentation technique complète (OpenAPI) et des exemples de code.

### **Peut-on personnaliser l'expérience utilisateur ?**
Oui, totalement. Notre service étant une API "headless", vous avez un contrôle total sur l'interface et l'expérience de vos utilisateurs finaux, y compris l'intégration de votre charte graphique et l'affichage de messages de conformité, qui sont de votre responsabilité.

### **Comment gérez-vous les risques liés à la propriété intellectuelle (PI) ?**
Vous avez le contrôle total sur les modèles que votre application appelle. Pour les cas d'usage sensibles à la PI, nous mettons en avant les modèles **Granite d'IBM**, qui bénéficient d'une **indemnisation contractuelle sans plafond** contre les réclamations de PI, une garantie unique sur le marché.

## Modèle Économique et Support

### **Quel est votre modèle économique ?**
Notre modèle est basé sur la consommation réelle (**tokens** pour le langage, **minutes** pour l'audio) pour refléter le coût de calcul réel. Pour garantir la prévisibilité et la maîtrise budgétaire, nous proposons des **Tiers de service** avec des budgets plafonnés et des **contrats sur mesure**. Vous pouvez suivre votre consommation en temps réel depuis la Console Cloud Temple pour une transparence totale. De plus, le nombre d'utilisateurs est toujours illimité, quel que soit le plan choisi.

### **Quel niveau de support et de SLA proposez-vous ?**
Notre offre standard inclut un support technique en Français et Anglais, accessible via notre portail client, avec un engagement de première réponse en jour ouvré. La plateforme bénéficie d'un engagement de disponibilité de **99%**. Pour les besoins les plus critiques, nos **Services Professionnels** optionnels vous donnent accès à des SLAs renforcés, incluant un support prioritaire avec un temps de réponse jusqu'à 4h pour les incidents critiques, et un accompagnement stratégique sur mesure (ateliers d'innovation, gouvernance ITIL).
