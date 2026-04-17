---
title: Modèle de responsabilité partagée — VPC
slug: /contractual/network/raci-vpc
---

# Modèle de responsabilité partagée — VPC (Virtual Private Cloud)

Voici le modèle **RACI** définissant la répartition des responsabilités entre le client et Cloud Temple pour l'utilisation du service **VPC (Virtual Private Cloud)**.

> **Particularité de l'offre VPC**  
> Le VPC est un service réseau **entièrement managé par Cloud Temple**, offrant une expérience cloud-native : routage automatique, haute disponibilité intégrée et gestion IPAM/DHCP native. Cloud Temple garantit le fonctionnement et la disponibilité de l'infrastructure réseau sous-jacente (routeurs VPC, backbone inter-AZ, passerelle externe). Le client est responsable de la conception, de la configuration et de la sécurité de son espace réseau : sous-réseaux, adressage, politiques de filtrage et interconnexions.

---

## Définition des rôles

| Rôle         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Réalise  | __R__éalise le processus                                                              |
| (A) Approuve | __A__pprouve la réalisation du processus                                              |
| (C) Consulte | __C__onsulté pendant le processus                                                     |
| (I) Informé  | __I__nformé des résultats du processus (via l'outillage, le portail ou la messagerie) |

---

## Infrastructure réseau physique & backbone

Cloud Temple est entièrement responsable de l'infrastructure physique et du backbone réseau sur lequel repose le VPC.

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer la mise en œuvre et le maintien des infrastructures **réseau physiques** (switches, routeurs backbone) |        | **RA**       |
| Assurer la connectivité **inter-datacenter / inter-AZ** du backbone Cloud Temple                            | **I**  | **RA**       |
| Assurer le maintien en condition opérationnelle du **backbone réseau** Cloud Temple                         | **I**  | **RA**       |
| Assurer le maintien en condition de sécurité du **backbone réseau** Cloud Temple                            | **I**  | **RA**       |
| Gérer les incidents, problèmes et capacités du backbone réseau                                              | **I**  | **RA**       |
| Acquérir et maintenir les licences essentielles au fonctionnement de l'infrastructure réseau                |        | **RA**       |

---

## Infrastructure VPC (routeur, gateway & IPAM)

Cloud Temple assure le fonctionnement des composants cœur du VPC. Le client configure son espace réseau au sein de cette infrastructure.

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer le maintien en condition opérationnelle du **routeur VPC** *(1)*                                   | **I**  | **RA**       |
| Assurer la **haute disponibilité** du routeur VPC                                                           | **I**  | **RA**       |
| Assurer le maintien en condition opérationnelle de la **Passerelle Externe (External Gateway)** *(1)*      | **I**  | **RA**       |
| Assurer la **haute disponibilité** de la Passerelle Externe                                                 | **I**  | **RA**       |
| Assurer le fonctionnement du service **IPAM & DHCP** sous-jacent                                           | **I**  | **RA**       |
| Gérer les incidents et problèmes sur les composants cœur du VPC                                            | **I**  | **RA**       |
| Mettre à jour et maintenir en condition de sécurité les composants cœur du VPC                             | **I**  | **RA**       |

*(1) Le routeur VPC et la Passerelle Externe sont des composants entièrement managés par Cloud Temple. Leur disponibilité est garantie par Cloud Temple dans le cadre du SLA du service VPC.*

---

## Provisionnement & configuration du VPC

Le client est responsable de la création et de la configuration de son VPC ainsi que des ressources réseau qui le composent.

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Créer, modifier et supprimer un **VPC**                                                                     | **RA** | **I**        |
| Définir l'architecture réseau du VPC (nombre de sous-réseaux, topologie)                                   | **RA** |              |
| Créer, modifier et supprimer des **réseaux privés (Private Networks / VLANs)** dans le VPC                 | **RA** | **I**        |
| Définir le **plan d'adressage IP** (plages CIDR) des réseaux privés                                        | **RA** | **I**        |
| Configurer les **pools DHCP** (plages dynamiques, DNS, gateway)                                             | **RA** | **C**        |
| Activer et configurer la **Passerelle Externe** (accès Internet, NAT, DNAT) *(2)*                          | **RA** | **C**        |
| Gérer les **routes statiques** au sein du VPC                                                               | **RA** |              |

*(2) L'activation de la Passerelle Externe ouvre l'accès Internet pour le VPC. Le client est responsable des règles de filtrage et du contrôle des flux associés.*

---

## IPs publiques & exposition Internet

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Allouer le **pool d'IPs publiques** disponibles sur la plateforme                                          | **I**  | **RA**       |
| Commander et associer des **IPs publiques (IPs flottantes)** à son VPC                                     | **RA** | **I**        |
| Configurer les règles **NAT / DNAT** pour l'exposition de services                                          | **RA** |              |
| Gérer le cycle de vie des IPs publiques (association, libération, déplacement)                              | **RA** | **I**        |
| S'assurer que les services exposés sur Internet respectent les politiques de sécurité applicables           | **RA** |              |

---

## Sécurité réseau

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer l'**isolation réseau inter-tenants** au niveau de la plateforme *(3)*                              |        | **RA**       |
| Définir et configurer les **politiques de micro-segmentation** (security groups) *(4)*                     | **RA** |              |
| Mettre en place un **filtrage des flux** entrants/sortants (pare-feu applicatif, IDS/IPS) *(5)*            | **RA** |              |
| Gérer les **certificats TLS** et la terminaison SSL des services exposés                                    | **RA** |              |
| Réaliser des **tests d'intrusion** sur les ressources hébergées dans le VPC *(6)*                          | **RA** | **C**        |
| Surveiller les **comportements anormaux** sur les flux réseau du tenant                                     | **RA** |              |

*(3) Cloud Temple garantit l'isolation stricte entre VPC appartenant à des tenants différents. Aucun flux ne peut traverser cette barrière sans action explicite du client.*  
*(4) La micro-segmentation (security groups) sera disponible au S1 2026. Les politiques de filtrage s'appliquant avant cette disponibilité sont à mettre en œuvre par le client via un équipement de sécurité dédié.*  
*(5) Le filtrage applicatif des flux au sein du VPC est sous la responsabilité du client. Cloud Temple ne réalise pas d'inspection de contenu des flux du tenant.*  
*(6) Les tests d'intrusion doivent faire l'objet d'une déclaration préalable auprès de Cloud Temple, conformément aux conditions générales d'utilisation.*

---

## Interconnexion avec des réseaux externes

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Définir la stratégie d'**interconnexion** avec des environnements on-premise ou d'autres clouds            | **RA** | **C**        |
| Souscrire et configurer un accès **VPN site-à-site** *(disponible S2 2026)*                                | **RA** | **C**        |
| Souscrire et configurer un accès **Cloud Connect** (lien dédié) *(disponible S2 2026)*                     | **RA** | **C**        |
| Gérer les **BGP / routes** associées aux interconnexions opérateur                                          | **RA** | **CI**       |
| Assurer la **sécurité des flux** transitant sur les interconnexions                                         | **RA** |              |

---

## Connexion des ressources au VPC

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Attacher des **instances VM** à un réseau privé du VPC                                                     | **RA** | **I**        |
| Attacher des **ressources IaaS** (VMs VMware, OpenIaaS) aux réseaux privés du VPC                         | **RA** | **C**        |
| Configurer les **interfaces réseau** des ressources connectées au VPC                                       | **RA** |              |
| S'assurer que les ressources connectées appliquent des **configurations réseau cohérentes** (gateway, DNS) | **RA** |              |

---

## Surveillance & observabilité réseau

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Surveiller le fonctionnement des **composants cœur du VPC** (routeur, gateway)                             | **I**  | **RA**       |
| Assurer le suivi de la **performance du backbone** réseau Cloud Temple                                      | **I**  | **RA**       |
| Collecter et analyser les **logs de flux réseau** (flow logs) du VPC *(disponible S1 2026)*                | **RA** | **I**        |
| Mettre en place une **supervision des flux** applicatifs dans le VPC                                        | **RA** |              |
| Monitorer la **latence et la bande passante** des flux au sein du VPC                                       | **RA** | **I**        |

---

## Gestion des changements & capacités

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Prendre la décision d'ajouter, modifier ou retirer des ressources réseau dans son VPC                       | **RA** | **CI**       |
| Gérer les capacités et l'évolutivité de l'infrastructure réseau backbone                                    |        | **RA**       |
| Planifier et gérer la croissance du plan d'adressage IP dans le VPC                                         | **RA** | **C**        |

---

## Gestion des accès & identités

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer l'accessibilité de la **Console Cloud Temple** et de l'API réseau                                  |        | **RA**       |
| Gérer les habilitations des équipes Cloud Temple à l'infrastructure réseau                                  |        | **RA**       |
| Administrer les droits d'accès au VPC dans la Console Cloud Temple (IAM)                                    | **RA** |              |

---

## Journaux (logs)

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Conserver et mettre à disposition les **journaux de la plateforme VPC** *(7)*                              |        | **RA**       |
| Collecter et conserver les **logs de flux** et journaux applicatifs du tenant                               | **RA** |              |

*(7) La durée de rétention des journaux de la plateforme VPC est précisée dans la convention de service correspondante.*

---

## Documentation & contractuel

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Assurer la gestion commerciale et contractuelle (devis, commandes, facturation)                             | **I**  | **RA**       |
| Assurer le suivi contractuel de la prestation                                                               | **RA** | **I**        |
| Assurer la maintenance et la disponibilité de la documentation technique du service VPC                     | **I**  | **RA**       |
| Documenter l'architecture réseau déployée dans son tenant (schémas, CMDB)                                   | **RA** |              |

---

## Réversibilité

| Activité                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Planifier le projet de réversibilité réseau et choisir les architectures cibles                             | **RA** | **I**        |
| Exporter la configuration du VPC et des ressources réseau via l'API ou les outils mis à disposition        | **RA** | **I**        |
| Procéder au démantèlement des configurations VPC à la suite de la résiliation                               | **I**  | **RA**       |

---

> *Des services professionnels sont disponibles si vous souhaitez déléguer tout ou partie des responsabilités listées comme étant à la charge du client. Contactez votre interlocuteur commercial Cloud Temple.*
