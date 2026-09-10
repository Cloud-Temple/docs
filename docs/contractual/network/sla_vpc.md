---
title: SLA VPC
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Accord de Niveau de Service (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Date de dernière mise à jour** | 17 avril 2026 |

Le présent document définit les Engagements de Niveau de Service (SLA) applicables au produit **Virtual Private Cloud (VPC)** fourni par **Cloud Temple** (ci-après dénommé « le Fournisseur » ou « Cloud Temple »). Il complète les Conditions Générales de Vente et de Service de Cloud Temple et constitue un tout indissociable avec ces dernières.

---

## 1. Définitions

Dans le cadre du présent SLA, les termes suivants portant une majuscule ont la signification ci-dessous :

- **Taux de Disponibilité Mensuel** : Le pourcentage de temps de bon fonctionnement garanti pour le plan de données du service VPC au cours d'un mois calendaire.
- **Service VPC** : L'ensemble des composants managés par Cloud Temple constituant le Virtual Private Cloud : routeur VPC, réseaux privés (Private Networks), et passerelle externe (External Gateway) avec ses fonctionnalités NAT, DNAT et IPs flottantes.
- **Plan de Données** : Le plan de transport réseau assurant le routage des flux entre les réseaux privés d'un même VPC ainsi que la connectivité Internet via la passerelle externe.
- **Plan de Contrôle** : Les API et interfaces (Console Cloud Temple) permettant la création, la modification et la suppression des ressources VPC (réseaux, routeurs, IPs flottantes, règles de sécurité).
- **Période d'Indisponibilité** : Interruption complète du routage entre les réseaux privés d'un même VPC, ou perte totale de la connectivité Internet via la passerelle externe lorsqu'elle est activée, constatée par les outils de monitoring de Cloud Temple.
- **Durée d'Indisponibilité** : Temps ininterrompu pendant lequel la Période d'Indisponibilité est constatée. Pour être comptabilisée au titre de ce SLA, une Durée d'Indisponibilité doit être d'au moins **cinq (5) minutes consécutives**.

---

## 2. Engagements de Niveau de Service (SLA)

Cloud Temple s'engage sur les niveaux de disponibilité mensuels suivants :

| Composant | Taux de Disponibilité Mensuel garanti |
| :--- | :---: |
| **Plan de données VPC** (routage inter-réseaux, NAT, DNAT) | **99,99 %** |
| **Plan de contrôle VPC** (API, Console Cloud Temple) | **99,9 %** |

Un Taux de Disponibilité Mensuel de **99,99 %** pour le plan de données correspond à un maximum de **4,4 minutes** d'indisponibilité autorisée par mois calendaire.

En cas de non-respect de ces engagements, le Client pourra réclamer des Crédits de Service dans les conditions définies à l'Article 5.

---

## 3. Mesure et périmètre de la Disponibilité

La surveillance et le calcul du Taux de Disponibilité Mensuel sont effectués **exclusivement par les outils de monitoring de l'infrastructure de Cloud Temple**.

**Périmètre de responsabilité :**  
Le présent SLA couvre uniquement les composants réseau **managés par Cloud Temple** :
- Le routeur VPC et la table de routage interne.
- Les Private Networks (segments L2) et leur disponibilité au niveau du plan de données.
- La passerelle externe (External Gateway), ses fonctionnalités NAT, DNAT et les IPs flottantes associées.

:::info
Les ressources de calcul (VM Instances, IaaS OpenSource, IaaS VMware) connectées au VPC font l'objet de SLA distincts et ne sont pas couvertes par le présent document.
:::

---

## 4. Exclusions de Garantie

Le présent SLA ne constitue pas un engagement sur les éléments hors du contrôle direct de Cloud Temple. Ne sont **pas** considérées comme des Périodes d'Indisponibilité les coupures résultant de :

1. **Configurations du Client** : Règles de filtrage réseau (Security Groups, ACLs) configurées par le Client bloquant la connectivité, conflits d'adressage IP, mauvaise configuration de sous-réseaux ou de routes statiques.

2. **Défaillances des ressources connectées** : Pannes au niveau du système d'exploitation ou des applications hébergées sur les instances de calcul (VM Instances, IaaS, Bare Metal) connectées au VPC.

3. **Connectivité Internet externe** : Interruptions de connectivité intervenant au-delà du point de démarcation Cloud Temple (incidents chez les opérateurs de transit Internet, dégradations des liaisons BGP upstream).

4. **Maintenance programmée** : Interventions de maintenance sur l'infrastructure réseau de Cloud Temple ayant fait l'objet d'une notification préalable dans le cadre des fenêtres de maintenance prévues par le contrat de support du Client.

5. **Comportement abusif ou violation** : Suspension du service VPC par Cloud Temple suite à une violation des Conditions Générales ou des exigences de sécurité (ex : activité réseau malveillante, non-respect des Conditions d'Usage Acceptable).

6. **Force majeure** : Événements hors du contrôle raisonnable de Cloud Temple (catastrophes naturelles, actes de guerre, coupures d'énergie nationale, etc.).

---

## 5. Crédits de Service et Pénalités

### 5.1 Plan de données VPC

Si le Taux de Disponibilité Mensuel de 99,99 % n'est pas atteint pour le plan de données, le Client est éligible à un Crédit de Service calculé en pourcentage du montant mensuel facturé pour le service VPC :

| Taux de disponibilité mensuel constaté | Crédit de Service |
| :--- | :---: |
| Entre 99,00 % et 99,98 % | 10 % |
| Entre 95,00 % et 98,99 % | 25 % |
| Inférieur à 95,00 % | 100 % |

### 5.2 Plan de contrôle VPC

Si le Taux de Disponibilité Mensuel de 99,9 % n'est pas atteint pour le plan de contrôle, le Client est éligible à un Crédit de Service de **10 %** du montant mensuel facturé pour le service VPC concerné.

### 5.3 Modalités de réclamation

Pour obtenir un Crédit de Service, le Client doit en faire la demande motivée via l'ouverture d'un ticket auprès du support Cloud Temple dans un délai de **trente (30) jours calendaires** suivant le mois au cours duquel l'incident a eu lieu.

La demande devra comporter :
- L'identifiant (UUID) du VPC concerné
- Les horodatages précis de la Période d'Indisponibilité constatée
