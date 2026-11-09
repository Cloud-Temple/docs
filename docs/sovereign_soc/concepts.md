---
title: Concepts
---

## Présentation

Le Sovereign SOC est un service de cyber-surveillance managé. Il assure la collecte, l'analyse et la qualification des événements de sécurité de vos systèmes d'information, qu'ils soient hébergés sur le Cloud de confiance ou dans un autre environnement. Le service est bout en bout : il inclut la plateforme technique de détection, l'analyse automatisée et la validation humaine 24/7 par une équipe d'analystes sécurité. Vous ne recevez que des tickets d'incidents qualifiés, accompagnés d'un plan de remédiation suivi.

### Une qualification en entonnoir

Chaque événement de sécurité passe par trois niveaux d'analyse successifs, afin de ne solliciter vos équipes que sur des incidents avérés :

1. **Détection automatique** : analyse en temps réel des journaux collectés, par correspondance avec des règles de détection (pattern matching).
2. **Pré-qualification par IA** : des modèles d'intelligence artificielle enrichissent les alertes au regard des menaces et vulnérabilités connues, et écartent les faux positifs évidents.
3. **Validation humaine** : un analyste du SOC qualifie l'incident avant l'émission du ticket, puis suit la remédiation.

### Sovereign SOC ou SIEM

Un SIEM (Security Information and Event Management) est la plateforme technique qui collecte, corrèle et conserve les journaux. Le Sovereign SOC inclut cette plateforme, mais aussi l'analyse et la qualification des alertes par des analystes. Si vous disposez déjà d'une équipe SOC interne et cherchez uniquement une plateforme de collecte et de corrélation, un SIEM opéré par vos soins ou par un tiers répond à ce besoin.

### Publics et cas d'usage

Le service s'adresse aux DSI et RSSI qui souhaitent externaliser la surveillance de sécurité sans constituer un SOC interne, aux équipes opérationnelles qui reçoivent les tickets d'incidents, et aux responsables conformité qui ont besoin de centraliser les traces d'audit. Cas d'usage typiques :

- **Détection d'intrusion** : tentatives d'accès illégitimes, compromissions de comptes, élévations de privilèges. Par exemple, une connexion anormale hors des heures ouvrées est vérifiée par un analyste (absence d'intervention de maintenance planifiée), qui vous notifie pour blocage.
- **Détection de rançongiciels** : comportements de chiffrement massif de fichiers et communications suspectes vers des serveurs de commande et de contrôle (C2).
- **Surveillance de l'infrastructure** : flux réseau anormaux et modifications critiques de configuration.
- **Traçabilité** : centralisation des traces d'audit de vos systèmes.

## Avantages

| Avantage                   | Description                                                                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Souveraineté               | Les données collectées sont hébergées en France ; avec le niveau SOC France, le service est aussi opéré entièrement en France. |
| Surveillance continue      | Les alertes sont traitées 24 heures sur 24, 7 jours sur 7, toute l'année.                                                                           |
| Alertes qualifiées         | La combinaison de l'analyse automatisée et de la validation humaine limite les sollicitations de vos équipes aux incidents confirmés.            |
| Modèle à l'abonnement      | Le service est souscrit sous forme d'abonnement, sans investissement initial dans une plateforme de détection ni dans une équipe dédiée.           |
| Mise en œuvre rapide       | L'architecture de collecte et de traitement est pré-provisionnée.                                                                                  |
| Coordination des équipes   | Lorsque vos systèmes sont hébergés sur le Cloud de confiance, les équipes cloud et sécurité se coordonnent sur la gestion des changements, des actifs et des incidents. |

## Fonctionnalités

| Fonctionnalité                  | Description                                                                                                                       |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Catalogue de sources de journaux | Collecte des journaux des principales technologies de vos systèmes d'information.                                                 |
| Règles de détection             | Catalogue de règles éprouvées couvrant les principales techniques d'attaque, documentées selon le référentiel MITRE ATT&CK.       |
| Pré-qualification par IA        | Qualification automatisée de premier niveau, pour écarter les faux positifs et enrichir l'analyse des alertes.                    |
| Expertise humaine 24/7          | Validation des alertes critiques par un analyste du SOC, proposition et suivi d'un plan de remédiation.                           |
| Cloisonnement des données       | Isolation logique stricte des données de chaque client.                                                                           |
| Ticketing                       | Création automatique d'un ticket pour chaque incident confirmé.                                                                   |
| Notifications                   | Envoi des alertes qualifiées par e-mail aux contacts que vous avez désignés.                                                      |
| Portail client                  | Accès aux tickets, aux tableaux de bord, au registre des règles de détection et aux livrables du service.                         |
| Reporting et gouvernance        | Tableau de bord mensuel (revue des tickets, évolution du périmètre surveillé, registre des règles de détection) et comité de pilotage trimestriel ; des comités supplémentaires sont proposés en option. |

## Architecture

### Flux de données

1. **Collecte** : les journaux sont collectés selon la nature de chaque source, par un agent de transfert (forwarder) installé sur votre infrastructure ou par appel d'API.
2. **Transport** : les journaux transitent par un tunnel VPN IPsec ou par une connexion TLS 1.3 jusqu'à l'enclave de collecte du SOC.
3. **Traitement** : une plateforme de collecte et d'analyse mutualisée applique les règles de détection, complétée par un module d'analyse par IA. Les données de chaque client y sont logiquement cloisonnées.
4. **Exploitation** : les analystes du SOC traitent les alertes depuis une console de gestion dédiée, puis émettent les tickets d'incidents.

### Intégrations

- **Notifications** : alertes qualifiées envoyées par e-mail aux contacts désignés.
- **Portail client** : suivi des incidents dans l'outil de ticketing du service.
- **Outils ITSM tiers** : l'interfaçage avec vos outils de gestion des services informatiques peut être étudié au cas par cas.

### Organisation de la réponse aux incidents

Une procédure de gestion des incidents de sécurité est rédigée avec vous, associée à une matrice d'escalade. Elle précise les contacts, le modèle opérationnel et le processus de traitement des incidents.

## Régions et zones de disponibilité

Les données collectées sont hébergées en France ; avec le niveau SOC France, le service est aussi opéré entièrement en France. Les systèmes surveillés peuvent, eux, être hébergés sur le Cloud de confiance, sur un cloud tiers ou on-premise, dès lors que leurs journaux peuvent être acheminés jusqu'à l'enclave de collecte.

## Caractéristiques techniques

| Paramètre                     | Valeur                                                                                         |
|-------------------------------|------------------------------------------------------------------------------------------------|
| Collecte                      | Agent de transfert installé sur votre infrastructure, ou collecte par API                      |
| Transport                     | Tunnel VPN IPsec ou TLS 1.3                                                                    |
| Chiffrement au repos          | AES-256                                                                                        |
| Conservation des journaux     | 90 jours en stockage chaud ; extension en stockage froid en option (1 an, ou 7 ans pour les secteurs régulés) |
| Méthode de détection          | Correspondance de motifs (pattern matching), règles documentées selon MITRE ATT&CK            |
| Plage de supervision          | 24/7, toute l'année, par des analystes francophones                                            |
| Délai de qualification        | Moins d'une heure entre une alerte critique et sa qualification par un analyste ; ce n'est ni un délai d'intervention ni un délai de remédiation |

### Niveaux de service

| Niveau | Description |
|---|---|
| SOC Core | Données hébergées en France, qualification des alertes critiques en moins d'une heure, 24/7, comité de pilotage trimestriel. |
| SOC France | Comme SOC Core, avec des données et une opération du service entièrement en France. |
| Option Premium | Recherche proactive de menaces (*threat hunting*) en continu et test d'intrusion annuel ; cumulable avec SOC Core ou SOC France. |

### Règles de détection

Les règles de détection incluses dans le service sont présentées et validées avec vous lors de la phase de build, en fonction du périmètre surveillé et des journaux disponibles. Elles sont conçues pour :

- couvrir les menaces les plus probables ;
- s'appliquer sans réglage lourd sur un système d'information ;
- disposer d'une couverture MITRE ATT&CK documentée, avec des seuils et des niveaux de criticité proposés par défaut. Ces seuils peuvent être adaptés à partir de la liste de vos actifs sensibles.

Le cycle de vie des règles est défini avec vous pour suivre l'évolution du périmètre, des menaces, des vulnérabilités et des incidents de sécurité. Le suivi mensuel vous permet de connaître les règles en vigueur et les risques couverts.

On distingue deux types de nouvelles règles :

- **Règle simple** : une source de journaux et une condition, par exemple la détection d'une attaque par force brute sur une authentification.
- **Règle avancée** : plusieurs conditions, ou un enrichissement par l'IA (renseignement sur les menaces, sensibilité des actifs).

### Phases du service

1. **Souscription** : le périmètre du service et les options retenues sont définis avec vous ; vous prenez connaissance des prérequis à votre charge.
2. **Build** : construction du service avec vous, mise en place de la collecte et des règles de détection, définition de l'organisation de gestion des incidents entre vos équipes et le SOC.
3. **Pré-run** : période d'un mois consacrée à l'ajustement des règles de détection. À son issue, un objectif de taux de faux positifs peut être établi avec vous.
4. **Run** : surveillance active, notifications et escalades, définition et suivi des plans de remédiation, tableau de bord mensuel et comité de pilotage trimestriel, évolution des sources de journaux et des règles de détection.

### Options

| Option                                              | Description                                                                                                                                                                  |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alignement sur votre analyse de risques             | Option du build. À partir de votre analyse de risques cybersécurité, les règles de détection et la criticité des alertes sont alignées sur vos risques, lors d'un atelier commun. |
| Tests d'intrusion                                   | Option du run. Vérification de la sécurité d'une application, ou déclenchement volontaire de règles de détection pour éprouver de bout en bout l'organisation mise en place.   |
| Conservation des journaux à froid                   | Stockage des journaux sur une longue durée, en dehors des systèmes de détection, avec protection de leur intégrité et de leur confidentialité.                                |

### Limites

- Le service repose sur l'analyse des journaux et la correspondance de motifs. Il n'inclut pas de fonctionnalités avancées d'analyse comportementale des utilisateurs et des entités (UEBA), ni de corrélation complexe entre plusieurs sources.
- Le niveau de faux positifs dépend de votre contexte : qualité des données collectées, exposition du système d'information, respect des bonnes pratiques par les utilisateurs et les administrateurs.

## Sécurité et conformité

Le service et son système d'information mettent en œuvre des mesures de sécurité techniques et organisationnelles :

- **Hébergement en France** : les données collectées et les modèles d'IA qui les analysent sont hébergés en France.
- **Chiffrement** : les données sont chiffrées en transit et au repos.
- **Cloisonnement** : architecture cloisonnée, isolation logique des données de chaque client.
- **Maintien en condition de sécurité** des composants techniques du service.
- **Mesures organisationnelles** : chartes d'usage du système d'information, d'éthique et d'administration, contrôle des antécédents, clause de confidentialité et sensibilisation à la sécurité pour l'ensemble des collaborateurs du SOC.
- **Supervision continue** : les alertes sont traitées 24/7 par des analystes francophones ; avec le niveau SOC France, le service est opéré entièrement en France.

## Réversibilité

Les journaux, les règles de détection, les cas d'usage personnalisés et l'historique des investigations restent votre propriété. Vous pouvez en demander l'export à tout moment, dans des formats standards ; l'export est gratuit et réalisé sous 30 jours, puis vos environnements font l'objet d'une purge sécurisée sous 7 jours.

## Tarification

Le Sovereign SOC est facturé sous forme d'un abonnement fixe, complété d'une part variable calculée sur le volume quotidien moyen de journaux ingérés ; cette part couvre l'ingestion, la conservation de 90 jours et l'analyse par IA. La mise en service (build) et les options sont facturées séparément. Les tarifs sont publiés sur la page produit du site Cloud Temple :
[Sovereign SOC — tarifs](https://www.cloud-temple.com/produits/sovereign-soc/).

## Bonnes pratiques

- Il est recommandé de faire collecter par le SOC les alertes émises par vos propres solutions de sécurité (xDR, pare-feu applicatif, IPS…), afin qu'elles soient qualifiées avec le reste de vos événements.
- Fournissez la liste de vos actifs sensibles : elle permet d'adapter les seuils et la criticité des alertes.
- Les accès au portail client sont nominatifs : il vous revient d'en assurer la revue régulière.
