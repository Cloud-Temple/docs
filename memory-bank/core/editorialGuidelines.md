# Ligne Éditoriale — Terminologie Cloud Temple

## Principe fondamental

Cloud Temple **met à disposition des produits**. Le terme central est **"produit"**.  
Toute la documentation doit refléter ce positionnement, cohérent avec les standards du marché cloud.

---

## Règle 1 — Remplacer "offre" (nom) par "produit"

| ❌ À éviter | ✅ À utiliser |
|------------|--------------|
| notre **offre** IaaS OpenSource | notre **produit** IaaS OpenSource |
| l'**offre** PaaS OpenShift | le **produit** PaaS OpenShift |
| cette **offre** est adaptée pour… | ce **produit** est adapté pour… |
| l'**offre** inclut des GPU | le **produit** inclut des GPU |
| opter pour l'**offre** MariaDB Managé | opter pour le **produit** MariaDB Managé |

> **Exception :** "offre" utilisé comme **verbe** reste inchangé.  
> ✅ "cela **offre** une meilleure répartition" (verbe, pas un nom de produit)

---

## Règle 2 — Remplacer "service" (quand = produit Cloud Temple) par "produit"

| ❌ À éviter | ✅ À utiliser |
|------------|--------------|
| le **service** MariaDB Managé est hébergé… | le **produit** MariaDB Managé est hébergé… |
| le **service** VM Instances de Cloud Temple | le **produit** VM Instances de Cloud Temple |
| présentation du **service** | présentation du **produit** |
| documentation du **service** | documentation du **produit** |
| les concepts fondamentaux de notre **service** | les concepts fondamentaux de notre **produit** |

---

## Règle 3 — Conserver "service" pour les termes techniques et contractuels

Ces expressions ne doivent **pas** être modifiées :

| Expression | Catégorie |
|-----------|-----------|
| continuité de **service** | Disponibilité technique |
| interruption de **service** | Disponibilité technique |
| niveau de **service** / SLA | Contractuel normalisé |
| **demande de service** | Process support/ticket |
| **as a Service** (IaaS, PaaS, SaaS…) | Acronyme industriel universel |
| supervision du **service** | Opérationnel / monitoring |
| sans interruption de **service** | Technique |
| **Service** Level Agreement | Contractuel |

---

## Règle 4 — Conserver "service" dans des contextes neutres génériques

Quand "service" désigne un composant technique tiers ou un concept non lié à un produit Cloud Temple nommé, il peut rester :

- "les services Kubernetes" (ressources K8s)
- "les services d'infrastructure" (générique)

---

## Application

- **Périmètre** : `docs/` (documentation principale FR), hors `docs/contractual/` et `docs/contract/`  
- **Changelog** : ne pas modifier (historique immuable)
- **Traductions** : appliquer les mêmes règles aux versions i18n lors des traductions futures

---
