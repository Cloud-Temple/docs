---
title: SLA VM Instances
slug: /contractual/vm-instances/sla
displayed_sidebar: docSidebar
---


# Accord de Niveau de Service (SLA) – VM Instances

| | |
| :--- | :--- |
| **Date de dernière mise à jour** | 15 avril 2026 |

Le présent document définit les Engagements de Niveau de Service (SLA) applicables au produit **VM Instances** fourni par **Cloud Temple** (ci-après dénommé « le Fournisseur » ou « Cloud Temple »). Il complète les Conditions Générales de Vente et de Service de Cloud Temple et constitue un tout indissociable avec ces dernières.

---

## 1. Définitions

Dans le cadre du présent SLA, les termes suivants portant une majuscule ont la signification ci-dessous :

- **Taux de Disponibilité Mensuel** : Le pourcentage de temps de bon fonctionnement garanti pour une instance VM au cours d'un mois calendaire.
- **VM Instance** : Le serveur privé virtuel provisionné à la demande par le Client sur l'infrastructure cloud de Cloud Temple, basée sur des ressources de calcul et de stockage partagées à haute performance.
- **Période d'Indisponibilité** : Perte totale d'accès et de connectivité externe à la VM Instance, mesurée exclusivement au niveau de l'infrastructure sous-jacente de Cloud Temple (état de l'instance remonté comme inactif, stoppé ou en erreur par l'hyperviseur Cloud Temple).
- **Durée d'Indisponibilité** : Temps ininterrompu pendant lequel la Période d'Indisponibilité est constatée. Pour être comptabilisée au titre de ce SLA, une Durée d'Indisponibilité doit être d'au moins **quatre (4) minutes consécutives**.

---

## 2. Engagements de Niveau de Service (SLA)

Cloud Temple s'engage à assurer un Taux de Disponibilité Mensuel de **99,95 %** pour chaque VM Instance active facturée au Client.

Ce taux équivaut à un maximum de **21,9 minutes** de Durée d'Indisponibilité autorisée par mois calendaire. En cas de non-respect de cet engagement, le Client pourra réclamer des Crédits de Service dans les conditions définies à l'Article 5.

---

## 3. Mesure et périmètre de la Disponibilité

La surveillance et le calcul du Taux de Disponibilité Mensuel sont effectués **exclusivement par les outils de monitoring de l'infrastructure de Cloud Temple**, sondant l'état de l'instance au niveau de la couche de virtualisation.

**Périmètre de responsabilité :**  
Le présent SLA couvre uniquement le fonctionnement des ressources de calcul (Compute : CPU, RAM) allouées sur l'infrastructure matérielle de Cloud Temple.

:::info
La connectivité réseau (VPC, routage) ou le stockage persistant font l'objet de documents SLA distincts et ne sont pas couverts par le présent engagement.
:::

**Principe d'exclusion par le statut UP :**  
Dès lors que la VM Instance est vue comme « UP » ou « RUNNING » par la plateforme Cloud Temple, l'engagement de SLA est considéré comme respecté, indépendamment de l'accessibilité de la couche applicative du Client.

---

## 4. Exclusions de Garantie

Le présent SLA ne constitue pas un engagement sur la disponibilité des éléments qui sont sous le contrôle exclusif du Client. Par conséquent, ne sont **pas** considérées comme des Périodes d'Indisponibilité les coupures, pertes d'accès ou pannes résultant de :

1. **Défaillances du Système d'Exploitation (OS) ou logicielles** : Plantage de l'OS invité (ex : *Kernel Panic*, *Blue Screen of Death*), surcharge de la CPU ou de la RAM causée par les processus du Client, ou corruption du système de fichiers interne.

2. **Configurations du Client** : Règles de pare-feu réseau ou local (iptables, firewalld) bloquant les accès, erreurs de configuration réseau au sein de l'OS via Cloud-init ou en post-déploiement.

3. **Pannes applicatives** : Arrêt ou crash d'un service hébergé sur la VM Instance (serveur web, base de données, conteneurs, etc.).

4. **Maintenance programmée** : Interventions matérielles ou logicielles sur l'infrastructure physique de Cloud Temple ayant fait l'objet d'une notification préalable dans le cadre des fenêtres de maintenance prévues par votre contrat de support.

5. **Comportement abusif ou violation** : Suspension de la VM Instance par Cloud Temple suite à une violation des Conditions Générales ou des exigences de sécurité (ex : compromission, non-respect des règles de la Marketplace Cloud Temple).

6. **Force majeure** : Événements hors du contrôle raisonnable de Cloud Temple.

---

## 5. Crédits de Service et Pénalités

Si le Taux de Disponibilité Mensuel de 99,95 % n'est pas atteint pour une VM Instance donnée, le Client est éligible à un dédommagement sous forme de Crédit de Service.

Le Crédit de Service est calculé en pourcentage du montant mensuel facturé pour la VM Instance impactée :

| Taux de disponibilité mensuel constaté | Crédit de Service |
| :--- | :---: |
| Entre 99,00 % et 99,94 % | 10 % |
| Entre 95,00 % et 98,99 % | 25 % |
| Inférieur à 95,00 % | 100 % |

### 5.1 Modalités de réclamation

Pour obtenir un Crédit de Service, le Client doit en faire la demande motivée via l'ouverture d'un ticket auprès du support Cloud Temple dans un délai de **trente (30) jours calendaires** suivant le mois au cours duquel l'incident a eu lieu.

La demande devra comporter :
- L'identifiant (UUID) de la VM Instance concernée
- Les horodatages précis de la Période d'Indisponibilité constatée
