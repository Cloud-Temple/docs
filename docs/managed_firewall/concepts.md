---
title: Concepts
---

## Présentation

Managed Firewall est un cluster de pare-feu de nouvelle génération (NGFW) entièrement managé. Il assure le filtrage des flux nord-sud (entre Internet et vos ressources) et est-ouest (entre vos segments internes), la prévention d'intrusions, l'inspection applicative et la connectivité VPN vers vos sites distants et vos utilisateurs nomades.

Le service est disponible en deux éditions :

- **Édition Stormshield** : solution d'un éditeur français, adaptée aux organisations qui recherchent une souveraineté technologique sur leur équipement de sécurité ;
- **Édition Fortinet** : adaptée aux organisations qui souhaitent s'appuyer sur l'écosystème Fortinet (SD-WAN, ZTNA, Security Fabric) ou l'intégrer à leurs infrastructures existantes.

Dans les deux éditions, le service comprend le cluster haute disponibilité Actif/Passif, la gestion opérationnelle (maintien en condition opérationnelle, supervision 24/7, mises à jour des signatures) et les fonctions VPN.

### Publics et cas d'usage

Managed Firewall s'adresse aux RSSI et équipes sécurité, aux DSI qui étendent ou remplacent un pare-feu on-premise, et aux équipes DevOps qui ont besoin d'un pare-feu dédié devant leurs clusters applicatifs. Cas d'usage typiques :

- **Périmètre de sécurité cloud** : filtrage des flux entrants et sortants de vos ressources (machines virtuelles, clusters Kubernetes, bases de données).
- **VPN site à site (IPsec)** : interconnexion chiffrée entre vos ressources cloud, vos datacenters on-premise, vos agences et vos partenaires.
- **Accès distant (SSL-VPN)** : accès chiffré et authentifié par MFA aux ressources internes pour les collaborateurs nomades.
- **Micro-segmentation** : isolation des segments réseau (DMZ, production, développement, bases de données) avec des règles de filtrage inter-segments.
- **Inspection applicative et prévention d'intrusions** : contrôle des applications qui traversent le pare-feu et blocage des tentatives d'exploitation de vulnérabilités.
- **SD-WAN et ZTNA (édition Fortinet)** : gestion de plusieurs liens WAN avec bascule automatique, et accès applicatif fondé sur l'identité et la posture du terminal.

## Avantages

| Avantage                     | Description                                                                                                                                              |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Exploitation prise en charge | Le déploiement, la haute disponibilité, les mises à jour (système du pare-feu, signatures IPS, bases d'URL) et la supervision sont assurés pour vous.    |
| Choix de l'éditeur           | Vous choisissez l'édition Stormshield ou Fortinet selon vos exigences de souveraineté et votre écosystème existant.                                       |
| Haute disponibilité          | Le cluster Actif/Passif bascule automatiquement sur le second nœud en cas de défaillance d'un nœud.                                                       |
| Protection multicouche       | Filtrage L3/L4 avec état, contrôle applicatif L7, IPS/IDS, filtrage web et antivirus sont réunis dans un seul service.                                   |
| VPN intégré                  | VPN IPsec site à site et SSL-VPN sont inclus, sans infrastructure VPN supplémentaire.                                                                    |
| Renseignement sur les menaces | Les signatures IPS, les bases d'URL et les indicateurs de compromission sont mis à jour automatiquement depuis les sources de l'éditeur.                 |
| Évolutivité                  | Vous pouvez passer à un modèle supérieur sans refonte de l'architecture, avec reprise de la configuration.                                               |

## Fonctionnalités

### Fonctionnalités communes aux deux éditions

| Fonctionnalité                     | Description                                                                                                                                                  |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pare-feu avec état (L3/L4)         | Filtrage par adresse IP source et destination, port TCP/UDP et protocole, avec suivi de l'état des sessions.                                                |
| Contrôle applicatif (L7)           | Identification et contrôle de plus de 3 000 applications, indépendamment du port utilisé : autorisation, blocage ou limitation par application.             |
| Prévention d'intrusions (IPS/IDS)  | Détection et blocage des tentatives d'exploitation de vulnérabilités : signatures d'attaques, anomalies protocolaires, correctifs virtuels (virtual patching). |
| Filtrage web                       | Catégorisation et filtrage des URL, blocage des sites malveillants et d'hameçonnage, filtrage DNS, application de SafeSearch.                                |
| Inspection SSL/TLS                 | Déchiffrement et inspection du trafic HTTPS/TLS, puis rechiffrement transparent. Des exceptions peuvent être définies (banque, santé, certificats internes). |
| Antivirus                          | Analyse des fichiers en transit sur HTTP, FTP, SMTP, IMAP et POP3.                                                                                           |
| VPN IPsec site à site              | Tunnels IKEv2 chiffrés en AES-256-GCM avec Perfect Forward Secrecy, authentification par certificats ou clé pré-partagée, VPN par routage (VTI), Dead Peer Detection. |
| SSL-VPN                            | Accès distant en full tunnel ou split tunnel, authentification MFA (TOTP avec LDAP ou Active Directory), portail web ou client natif.                        |
| Haute disponibilité                | Cluster Actif/Passif avec synchronisation des sessions et des configurations, et basculement automatique.                                                    |
| NAT/PAT                            | Traduction d'adresses source et destination pour exposer des services de façon contrôlée et gérer les flux Internet.                                        |
| Journalisation                     | Journaux des flux autorisés et bloqués, des événements IPS, des connexions VPN et des sessions utilisateurs, exportables vers un SIEM.                        |

### Fonctionnalités propres à l'édition Fortinet

| Fonctionnalité                | Description                                                                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SD-WAN                        | Gestion de plusieurs liens WAN avec bascule automatique, répartition de charge par application et suivi de la qualité des liens (perte, latence, gigue).           |
| ZTNA                          | Accès applicatif fondé sur l'identité de l'utilisateur et la posture du terminal (FortiClient), avec vérification continue de la conformité du terminal.          |
| Virtual Domains (VDOM)        | Découpage du pare-feu en instances logiquement isolées sur un même cluster, pour séparer des environnements ou des entités.                                        |
| Services FortiGuard           | Renseignement sur les menaces : base d'URL (plus de 175 catégories), signatures IPS et antivirus, réputation IP, filtrage DNS, anti-botnet.                         |
| Intégration Security Fabric   | Intégration avec l'écosystème Fortinet (FortiAnalyzer, FortiManager, FortiSIEM, FortiEDR).                                                                         |
| Anti-spam                     | Filtrage du trafic e-mail (SMTP, IMAP, POP3) contre le spam et les e-mails malveillants.                                                                           |

### Fonctionnalités propres à l'édition Stormshield

| Fonctionnalité                         | Description                                                                                                                    |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Analyse protocolaire ASQ               | Moteur d'inspection qui vérifie la conformité des protocoles réseau aux RFC, au-delà des signatures.                           |
| Intégration Stormshield Data Security  | Compatibilité avec Stormshield Data Security pour le chiffrement des données au niveau fichier et e-mail.                      |
| Stormshield Management Center          | Console de gestion centralisée des politiques de sécurité.                                                                     |
| Renseignement sur les menaces          | Mises à jour régulières des signatures IPS, des URL malveillantes et des indicateurs de compromission depuis l'éditeur.        |

### Administration et supervision

- **Gestion des politiques** : toute modification (règle de filtrage, configuration VPN) fait l'objet d'une demande de changement formalisée, traitée par l'équipe d'exploitation du service.
- **Interface de l'éditeur** : un accès à l'interface web de l'éditeur peut être proposé pour la consultation des journaux et des politiques.
- **Supervision** : tableaux de bord préconfigurés (trafic par interface, sessions actives, taux de blocage IPS, bande passante VPN, état de la haute disponibilité, CPU et mémoire).
- **Alertes** : alertes préconfigurées (nœud indisponible, tunnel VPN coupé, pic de trafic anormal, détection d'attaque, saturation des sessions).
- **Export des journaux** : Syslog (TCP/TLS), CEF ou LEEF vers votre SIEM ou celui d'un tiers.

## Architecture

Le service repose sur un cluster de deux nœuds en mode Actif/Passif. Le nœud actif assure le filtrage, l'inspection et la passerelle VPN ; le nœud passif reste synchronisé (sessions, configuration, tables de routage) et reprend le trafic en cas de défaillance.

Le cluster s'insère entre vos accès externes (Internet, WAN, sites distants, utilisateurs nomades) et vos ressources hébergées, qu'il protège dans des zones réseau filtrées.

Le service comprend :

- **le cluster haute disponibilité** de deux nœuds ;
- **la gestion des signatures** : mise à jour automatique des bases IPS, de filtrage d'URL, d'antivirus et de renseignement sur les menaces ;
- **la supervision** de l'état du cluster, des sessions actives, des tunnels VPN et des métriques de performance ;
- **l'administration** du pare-feu par l'équipe d'exploitation du service.

### Intégrations

- **VPC** : le pare-feu s'insère comme passerelle de sécurité entre les zones réseau de votre VPC.
- **Private Backbone** : filtrage des flux entre zones de disponibilité et entre sites.
- **Managed Kubernetes** : pare-feu dédié devant les clusters Kubernetes managés.
- **Bastion** : accès d'administration tracé aux consoles du pare-feu.
- **SIEM** : export des journaux de flux, des événements IPS et des connexions VPN vers votre SIEM ou celui d'un tiers.
- **Équipements tiers** : VPN IPsec compatible avec tout équipement qui supporte IKEv2 ; authentification SSL-VPN via Active Directory, LDAP ou RADIUS, avec TOTP.

## Régions et zones de disponibilité

Managed Firewall est disponible dans la région FR1. L'infrastructure et les données de configuration sont hébergées exclusivement en France.

## Caractéristiques techniques

### Modèles de l'édition Stormshield

Chaque modèle correspond à un cluster haute disponibilité complet de deux nœuds.

| Modèle | vCPU | RAM  | Utilisateurs SSL-VPN max | Tunnels IPsec max |
|--------|------|------|--------------------------|-------------------|
| EVA1   | 1    | 2 Go | 50                       | 100               |
| EVA2   | 2    | 3 Go | 512                      | 150               |
| EVA3   | 4    | 6 Go | 512                      | 200               |

### Modèles de l'édition Fortinet

Chaque modèle correspond à un cluster haute disponibilité complet de deux nœuds.

| Modèle | vCPU | VDOM inclus |
|--------|------|-------------|
| VM02V  | 2    | 1           |
| VM04V  | 4    | 1           |
| VM08V  | 8    | 1           |

Une option ajoute 5 VDOM. Chaque VDOM dispose de ses propres politiques de sécurité, tables de routage, interfaces réseau et journaux.

### Paramètres communs

| Paramètre                  | Valeur                                                    |
|----------------------------|-----------------------------------------------------------|
| Mode de haute disponibilité | Actif/Passif (Actif/Actif sur demande)                   |
| VPN IPsec                  | IKEv2 (compatible IKEv1)                                  |
| Chiffrement VPN            | AES-256-GCM, AES-128-GCM                                  |
| Intégrité VPN              | SHA-256, SHA-384, SHA-512                                 |
| Perfect Forward Secrecy    | DH groupe 14 (2 048 bits) au minimum, jusqu'au groupe 21 (ECDH P-521) |
| Authentification VPN       | Certificats X.509 ou clé pré-partagée                     |
| Chiffrement SSL-VPN        | TLS 1.3 (TLS 1.2 au minimum)                              |
| Chiffrement d'administration | TLS 1.3                                                 |
| Journalisation des flux    | Toutes les sessions, volumétrie configurable              |

### Limites

- Les règles de filtrage sont gérées par l'équipe d'exploitation du service, en coordination avec vous, via le processus de demande de changement.
- L'accès direct à la ligne de commande du pare-feu (SSH ou console) n'est pas fourni en standard.
- Les modèles Stormshield ont un nombre maximal d'utilisateurs SSL-VPN et de tunnels IPsec fixé par la licence : au-delà, un passage à un modèle supérieur est nécessaire.
- Le mode Actif/Actif (répartition des sessions) est disponible sur demande ; le mode standard est Actif/Passif.

## Sécurité et conformité

Managed Firewall est certifié HDS et ISO 27001.

- **Chiffrement en transit** : AES-256-GCM pour les VPN (IKEv2, SSL-VPN), TLS 1.3 pour l'administration.
- **Chiffrement au repos** : les journaux sont chiffrés.
- **Gouvernance des changements** : toute modification de la politique de sécurité suit un processus de changement documenté et traçable.
- **Traçabilité** : toutes les opérations d'administration sont journalisées (auteur, modification, date).
- **Alertes** : les événements critiques (tentatives d'intrusion, dépassement de seuils, défaillance d'un nœud) déclenchent des alertes en temps réel.

## Sauvegarde et continuité

- **Haute disponibilité** : le cluster Actif/Passif synchronise sessions, configurations et tables de routage, et bascule automatiquement en cas de défaillance d'un nœud.
- **Maintenance sans interruption** : les correctifs sont appliqués nœud par nœud (mise à jour du nœud passif, basculement, puis mise à jour de l'autre nœud) pour assurer la continuité du service.

## Versions et cycle de vie

- **Édition Fortinet** : version de FortiOS retenue selon les préconisations de l'éditeur, avec deux mises à jour majeures planifiées par an.
- **Édition Stormshield** : dernière version stable, avec deux mises à jour majeures planifiées par an et des correctifs de sécurité appliqués sous 15 jours.
- **Signatures IPS, antivirus et URL** : mises à jour automatiques quotidiennes, ou en temps réel selon l'abonnement de l'éditeur.
- **Fin de support** : vous êtes notifié 90 jours avant la fin de support d'une version.

## Disponibilité du service

| Élément                        | Objectif de disponibilité, mesuré sur un mois |
|--------------------------------|-----------------------------------------------|
| Service de filtrage (cluster)  | 99,9 %                                        |
| Tunnels VPN IPsec établis      | 99,9 %                                        |

## Réversibilité

À la fin du service, vous pouvez récupérer les éléments suivants :

| Élément exporté          | Livrable                                                   | Délai de mise à disposition | Coût       |
|--------------------------|------------------------------------------------------------|-----------------------------|------------|
| Configuration            | Fichier de configuration complet du pare-feu (format éditeur) | 15 jours                 | Sans frais |
| Journaux                 | Journaux de flux et d'événements (Syslog ou CEF)           | 30 jours                    | Sans frais |
| Politiques VPN           | Paramètres des tunnels IPsec et du SSL-VPN                 | 15 jours                    | Sans frais |
| Assistance à la migration | Support technique pour un déploiement sur une autre infrastructure | Sur demande         | Sur devis  |

Les données de configuration et les journaux sont ensuite effacés de façon sécurisée sous 7 jours.

## Tarification

Managed Firewall est facturé mensuellement, par cluster haute disponibilité de deux nœuds, licences de l'éditeur, signatures et exploitation incluses. Les tarifs sont publiés sur la page produit du site Cloud Temple :
[Managed Firewall — tarifs](https://www.cloud-temple.com/produits/managed-firewall/).

## Bonnes pratiques

- Choisissez l'édition selon vos exigences : souveraineté de l'éditeur (Stormshield) ou fonctions SD-WAN, ZTNA et VDOM (Fortinet).
- Dimensionnez le modèle selon le nombre d'utilisateurs SSL-VPN et de tunnels IPsec attendus, avec une marge de croissance.
- Exportez les journaux vers votre SIEM pour corréler les événements réseau avec vos autres sources de sécurité.
- Passez par le Bastion pour les accès d'administration, afin qu'ils soient tracés.
