---
title: Modèle de responsabilité partagée — VM instances
slug: /contractual/vm-instances/raci
---

# Modèle de responsabilité partagée — VM instances

Voici le modèle **RACI** définissant la répartition des responsabilités entre le client et Cloud Temple pour l'utilisation du service **VM instances** (machines virtuelles mutualisées).

> **Particularité de l'offre VM instances**  
> Contrairement à l'offre IaaS dédiée, le service VM instances repose sur une infrastructure de calcul **mutualisée et entièrement managée par Cloud Temple**. Cloud Temple prend en charge la gestion complète de l'hyperviseur, des images système et de la couche infrastructure. Le client conserve la pleine responsabilité de ce qui s'exécute à l'intérieur de ses instances : système d'exploitation invité, applications, données et sécurité applicative.

---

## Définition des rôles

| Rôle         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Réalise  | __R__éalise le processus                                                              |
| (A) Approuve | __A__pprouve la réalisation du processus                                              |
| (C) Consulte | __C__onsulté pendant le processus                                                     |
| (I) Informé  | __I__nformé des résultats du processus (via l'outillage, le portail ou la messagerie) |

---

## Infrastructure physique & hyperviseur

Cloud Temple est entièrement responsable de la couche infrastructure et d'hyperviseur. Le client n'a pas accès à cette couche.

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer la mise en œuvre et le maintien des **datacenters physiques**                                 |        | **RA**       |
| Assurer la mise en œuvre et le maintien des infrastructures **calcul mutualisé**                      | **I**  | **RA**       |
| Assurer la mise en œuvre et le maintien des infrastructures **stockage**                              | **I**  | **RA**       |
| Assurer la mise en œuvre et le maintien de la connectivité **réseau backbone**                        | **I**  | **RA**       |
| Gérer, mettre à jour et maintenir en condition de sécurité les **hyperviseurs** *(1)*                 | **I**  | **RA**       |
| Assurer la **haute disponibilité** de la plateforme d'hyperviseurs                                    | **I**  | **RA**       |
| Gérer les incidents, problèmes et capacités des couches infrastructure et hyperviseur                 | **I**  | **RA**       |
| Acquérir et maintenir les **licences** essentielles au fonctionnement de la plateforme                |        | **RA**       |

*(1) Les hyperviseurs et la couche de virtualisation sont entièrement sous la responsabilité de Cloud Temple. Le client ne dispose d'aucun accès à l'hyperviseur ni à la couche de gestion sous-jacente.*

---

## Images, templates & catalogue

| Activité                                                                                                       | Client | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| Construire, publier et maintenir les **images officielles** du catalogue *(2)*                                | **I**  | **RA**       |
| Appliquer les correctifs de sécurité et les mises à jour sur les **images du catalogue**                      |        | **RA**       |
| Valider la conformité et la sécurité des images publiées dans le catalogue                                    |        | **RA**       |
| **Dériver** une image officielle du catalogue pour créer une image personnalisée *(3)*                        | **RA** | **I**        |
| S'assurer de la conformité, des licences et de la sécurité de toute image personnalisée dérivée               | **RA** |              |
| Maintenir et mettre à jour les images personnalisées dérivées (correctifs OS, outils intégrés)                | **RA** |              |

*(2) Les images officielles du catalogue (distributions Linux, Windows Server, etc.) sont construites, maintenues et mises à jour par Cloud Temple. Leur niveau de sécurité à l'état initial est sous la responsabilité de Cloud Temple.*  
*(3) Le client peut dériver une image officielle du catalogue pour créer une image personnalisée. Dès lors, **l'entière responsabilité** de cette image lui incombe : conformité, licences, mises à jour de sécurité, présence et mise à jour des tools, et hardening. Cloud Temple ne prend pas en charge le maintien de ces images dérivées.*

---

## Provisionnement & cycle de vie des instances

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Créer, démarrer, arrêter et supprimer des **instances VM**                                            | **RA** | **I**        |
| Choisir le gabarit (flavor) et l'image de départ de l'instance                                        | **RA** |              |
| Redimensionner une instance (changement de gabarit) *(4)*                                             | **RA** | **I**        |
| Gérer les **métadonnées et tags** associés aux instances                                               | **RA** |              |
| Gérer le **cycle de vie** des instances (création, modification, décommissionnement)                   | **RA** |              |
| Prendre la décision d'ajouter ou réduire des ressources.                              | **RA** |            |

*(4) Le redimensionnement peut nécessiter un redémarrage de l'instance. La disponibilité de l'application hébergée pendant cette opération est sous la responsabilité du client.*

---

## Système d'exploitation invité (Guest OS) & tools

Le client a la pleine maîtrise et la pleine responsabilité du système d'exploitation à l'intérieur de ses instances.

:::warning[Condition de validité du SLA — Tools obligatoires]
Les **tools VM instances** (agents de gestion de l'hyperviseur) sont **pré-installés par Cloud Temple** lors du déploiement de l'instance depuis le catalogue. Ces agents sont indispensables au bon fonctionnement de la plateforme et à la mesure de la disponibilité.

**Si le client désactive ou supprime ces tools, le SLA est immédiatement caduc.** Cloud Temple ne peut plus garantir ni mesurer la disponibilité de l'instance sans ces agents. La présence et le bon fonctionnement des tools sont sous l'entière responsabilité du client durant l'exploitation.
:::

| Activité                                                                                                        | Client | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Pré-installer les tools** (agents hyperviseur, PV drivers) lors du déploiement depuis le catalogue *(5)*     |        | **RA**       |
| S'assurer que les **tools restent installés, activés et à jour** durant toute la vie de l'instance *(6)*       | **RA** |              |
| Appliquer les **correctifs et mises à jour de sécurité** du système d'exploitation invité                      | **RA** |              |
| **Durcir** la configuration du système d'exploitation (CIS, recommandations ANSSI, etc.)                       | **RA** |              |
| Gérer les **comptes utilisateurs, mots de passe et clés SSH** à l'intérieur de l'instance *(7)*                | **RA** |              |
| Installer et configurer les **agents de supervision** (métriques OS, logs système)                              | **RA** |              |
| Maintenir la **conformité réglementaire** applicable aux OS et aux données hébergées                            | **RA** |              |

*(5) Cloud Temple fournit une image initiale à l'état de sortie du catalogue avec les tools pré-installés. La responsabilité de la configuration, du durcissement et des mises à jour ultérieures du système d'exploitation revient intégralement au client dès la première connexion à l'instance.*  
*(6) La suppression ou la désactivation des tools par le client entraîne la suspension immédiate des engagements de niveau de service (SLA) pour l'instance concernée. Cloud Temple ne peut être tenu responsable des dysfonctionnements liés à l'absence de ces agents.*  
*(7) La sécurité des accès à l'instance (solidité des mots de passe, gestion des clés SSH, principe de moindre privilège) est sous l'entière responsabilité du client. Cloud Temple ne peut être tenu responsable d'une compromission résultant d'une configuration d'accès insuffisamment sécurisée.*

---

## Sécurité des instances & exposition Internet

:::danger[Responsabilité de sécurité du client]
Cloud Temple assure uniquement l'**isolation inter-tenants** au niveau de la plateforme. La protection de chaque instance contre les menaces réseau (Internet, flux internes) est **entièrement sous la responsabilité du client**. Une instance connectée à Internet sans filtrage adéquat ou avec des credentials faibles expose le client à des risques de compromission pour lesquels Cloud Temple ne saurait être tenu responsable.
:::

| Activité                                                                                                              | Client | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer l'**isolation réseau inter-tenants** au niveau de la plateforme                                              |        | **RA**       |
| **Protéger les instances exposées sur Internet** (règles de filtrage, security groups, pare-feu) *(A)*               | **RA** |              |
| S'assurer qu'aucun service n'est exposé sur Internet sans **règle de filtrage explicite**                            | **RA** |              |
| Mettre en place et maintenir un **pare-feu applicatif** (WAF, IDS/IPS) si requis par le niveau de criticité          | **RA** |              |
| Configurer des **mots de passe robustes et des clés SSH sécurisées** sur toutes les instances *(B)*                  | **RA** |              |
| Appliquer le **principe du moindre privilège** sur les comptes OS et les accès distants (SSH, RDP)                   | **RA** |              |
| Mettre en place une solution de **détection et réponse aux incidents** (EDR, SIEM) si requis                         | **RA** |              |
| Procéder au **durcissement de la configuration** réseau et OS des instances (désactivation des services inutiles)    | **RA** |              |
| Notifier Cloud Temple en cas de **suspicion de compromission** affectant la plateforme mutualisée                    | **RA** | **C**        |

*(A) Toute instance connectée à Internet via une IP publique ou une règle NAT sans filtrage adéquat l'est sous la seule responsabilité du client. Cloud Temple n'effectue pas d'inspection ni de filtrage des flux sortants ou entrants du tenant.*  
*(B) L'utilisation de mots de passe faibles, de clés SSH compromises ou d'accès root non restreints constitue un manquement aux bonnes pratiques de sécurité. Cloud Temple ne peut être tenu responsable d'une compromission résultant d'une configuration d'accès insuffisamment sécurisée de la part du client.*

---

## Applications & middlewares

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Installer, configurer et maintenir les **applications** et **middlewares** dans les instances          | **RA** |              |
| Appliquer les **correctifs de sécurité** des applications et middlewares                               | **RA** |              |
| Acquérir et détenir les **licences logicielles** des applications hébergées                            | **RA** |              |
| Mettre en place une **stratégie antivirale** sur les instances                                         | **RA** |              |
| Gérer la **continuité applicative** (load balancing, réplication, clustering)                          | **RA** |              |

---

## Réseau & connectivité

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer le maintien du **réseau backbone** et de l'infrastructure réseau mutualisée                    | **I**  | **RA**       |
| Configurer les **interfaces réseau** des instances                                                     | **RA** |              |
| Gérer le **plan d'adressage IP** dans le tenant                                                        | **RA** | **I**        |
| Configurer et gérer les **groupes de sécurité** (security groups / règles de filtrage) *(6)*           | **RA** |              |
| Souscrire et configurer l'**accès Internet** (IPs publiques, NAT)                                     | **RA** |         |
| Gérer les incidents sur les liens réseau **backbone** (couche Cloud Temple)                            | **I**  | **RA**       |

*(6) La configuration des règles de filtrage réseau applicables aux instances est sous la responsabilité du client. Cloud Temple assure uniquement l'isolation inter-tenants au niveau de la plateforme.*

---

## Stockage des instances

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer le maintien en condition opérationnelle de l'**infrastructure de stockage** mutualisée        | **I**  | **RA**       |
| Assurer le maintien en condition de sécurité de l'infrastructure de stockage                          | **I**  | **RA**       |
| Créer, attacher et gérer les **volumes de stockage supplémentaires**                                   | **RA** | **I**        |
| S'assurer de la **cohérence des données** stockées dans les instances                                  | **RA** |              |
| Définir et appliquer une **politique de chiffrement des données** à l'intérieur des instances *(7)*   | **RA** |              |

*(7) Le chiffrement au repos de l'infrastructure de stockage sous-jacente est assuré par Cloud Temple. Le chiffrement applicatif des données (au niveau du système de fichiers ou de la base de données) est sous la responsabilité du client.*

---

## Sauvegarde & snapshots

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer le maintien en condition opérationnelle de l'**infrastructure de sauvegarde**                 | **I**  | **RA**       |
| **Activer et configurer** la politique de sauvegarde associée à une instance                          | **RA** |       |
| **Déclencher des snapshots** ponctuels d'une instance                                                  | **RA** |         |
| Vérifier la **cohérence et la restaurabilité** des sauvegardes effectuées                             | **RA** |         |
| Effectuer des **tests de restauration** périodiques                                                    | **RA** |              |
| Gérer les **capacités de stockage** dédiées aux sauvegardes                                            |  | **RC**       |
| Définir la **stratégie de continuité ou de reprise d'activité** pour les applications hébergées       | **RA** |        |

---

## Surveillance & performance

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Surveiller le bon fonctionnement de l'**infrastructure physique et des hyperviseurs**                  | **I**  | **RA**       |
| Assurer le suivi de la **performance des ressources mutualisées** (calcul, stockage, réseau)           | **I**  | **RA**       |
| Superviser les **performances des instances** (CPU, RAM, disk I/O, réseau au niveau guest)             | **RA** |         |
| Mettre en place une solution de **métrologie et d'alerte** pour les applications hébergées             | **RA** |              |

---

## Gestion des accès & identités

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer l'accessibilité de la **Console Cloud Temple** et de l'API                                    |        | **RA**       |
| Gérer les **habilitations** des équipes Cloud Temple à l'infrastructure qualifiée SecNumCloud          |        | **RA**       |
| Administrer les accès à la **Console Cloud Temple** (utilisateurs, rôles, IAM)                        | **RA** |              |
| Gérer les accès **au sein des instances** (comptes OS, clés SSH, bastion)                              | **RA** |              |
| Configurer un **référentiel d'authentification externe** (SSO, LDAP) pour la Console                  | **RA** | **C**        |

---

## Journaux (logs)

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Conserver et mettre à disposition les **journaux de la plateforme** VM instances *(8)*                |        | **RA**       |
| Collecter, conserver et analyser les **journaux système et applicatifs** des instances                 | **RA** |              |

*(8) La durée de rétention des journaux de la plateforme est précisée dans la convention de service VM instances.*

---

## Documentation & contractuel

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer la gestion commerciale et contractuelle (devis, commandes, facturation)                        | **I**  | **RA**       |
| Assurer le suivi contractuel de la prestation (livraisons, facturation)                                | **RA** | **I**        |
| Assurer la maintenance et la disponibilité de la documentation technique du service                    | **I**  | **RA**       |
| Tenir à jour la **CMDB** relative aux instances déployées dans son tenant                              | **RA** |              |
| Maintenir à jour la politique d'accès à la Console et à l'API                                          | **RA** |              |

---

## Réversibilité

| Activité                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Planifier le projet de réversibilité et choisir les infrastructures cibles                             | **RA** | **I**        |
| Exporter les données et images d'instances via l'API ou les outils mis à disposition                   | **RA** | **I**        |
| Procéder au démantèlement des configurations à la suite de la résiliation                              | **I**  | **RA**       |
| Réaliser l'effacement sécurisé des données sur les supports de stockage et fournir une attestation     | **I**  | **RA**       |

---

> *Des services professionnels sont disponibles si vous souhaitez déléguer tout ou partie des responsabilités listées comme étant à la charge du client. Contactez votre interlocuteur commercial Cloud Temple.*
