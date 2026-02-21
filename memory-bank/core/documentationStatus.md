# Statut de la Documentation

## 🚦 État Global du Build
- **Dernier build** : ✅ SUCCÈS (21/02/2026 - 15h31)
- **Langues compilées** : fr, en, es, it, de
- **Dernières modifications** :
  - Ajout d'une nouvelle page `network/internet/advanced_concepts.md` sur les communautés BGP et la Local Preference (PR #249).
  - Mise à jour du catalogue de modèles LLMaaS et correction des erreurs MDX (concepts, models) pour toutes les langues.
  - Amélioration de la qualité des traductions des alertes de sécurité (security_alarms.md) en en, de, es, it.
  - Mise à jour du changelog avec les dernières modifications.
  - Traduction de la page concepts avancés réseau vers les 4 langues.
- **Problèmes résolus précédemment** :
  - Correction des erreurs de compilation MDX (Acorn) dans `llmaas/models.md` et `llmaas/concepts.md` pour toutes les langues (fr, en, es, it, de).
  - Restauration des blocs de code Python manquants dans les traductions de `llmaas/concepts.md`.
  - Suppression d'une duplication du modèle `devstral-small-2:24b` dans toutes les versions du catalogue de modèles.
  - Correction d'un bloc de code mal fermé dans `network/internet/advanced_concepts.md` (version en, es, it, de).
  - Correction des imports d'images incorrects dans les traductions (it, de) qui causaient des erreurs de build ("Module not found").

## 📊 Couverture par Service

### Console Management (`/docs/console/`)
- **État** : ✅ Stable
- **Traduction** : Complète

### Bastion Security (`/docs/bastion/`)
- **État** : ✅ Stable
- **Traduction** : Complète
- **Note** : Imports d'images corrigés dans `it` et `de`.

### IaaS Services (`/docs/iaas_*/`)
- **État** : ✅ Stable
- **Traduction** : Complète
- **Note** : Imports d'images corrigés pour IaaS VMware (`it`, `de`).

### PaaS OpenShift (`/docs/paas_openshift/`)
- **État** : ✅ Stable
- **Traduction** : Complète

### Managed Kubernetes (`/docs/managed_kubernetes/`)
- **État** : ✅ Stable
- **Traduction** : Complète
- **Note** : Balises `<VAR>` corrigées dans `usingharbor.md`.

### LLMaaS (`/docs/llmaas/`)
- **État** : ✅ Stable e Validé
- **Traduction** : Complète
- **Note** : Blocs de code Python corrigés dans `concepts.md`.

### Terraform (`/docs/terraform/`)
- **État** : ✅ Stable e Validé
- **Traduction** : Complète
- **Note** : Correction systématique des blocs de code vides et de la syntaxe HCL dans `concepts.md`, `quickstart.md`, `terraform.md`, `tutorials.md` pour toutes les langues.

### Network (`/docs/network/`)
- **État** : ✅ Stable (VPC, Internet concepts avancés) / 🔄 En développement (Internet base, Private Network)
- **Traduction** : VPC et concepts avancés Internet traduits (en, de, es, it)
- **Note** : Nouvelle page `advanced_concepts.md` ajoutée (communautés BGP, Local Preference AS33930).

### Storage (`/docs/storage/`)
- **État** : 🔄 En développement

## 🌍 Internationalisation (i18n)

**Dernière mise à jour des traductions** : 21/02/2026 (Fix Build MDX, Catalogue Modèles, Concepts Réseau)

| Langue | Statut Build | Qualité Traduction | Actions Requises |
|--------|--------------|-------------------|------------------|
| **FR** | ✅ Succès | Native | Source de vérité |
| **EN** | ✅ Succès | Haute | Aucune |
| **ES** | ✅ Succès | Moyenne | Aucune |
| **IT** | ✅ Succès | Moyenne | Aucune |
| **DE** | ✅ Succès | Moyenne | Aucune |

## 🛠️ Maintenance Technique

### Actions Récentes
- [x] Correction des erreurs MDX dans les fichiers anglais (`en`).
- [x] Application des corrections aux fichiers espagnols (`es`), italiens (`it`) et allemands (`de`).
- [x] Correction des chemins d'images brisés par la traduction (`apri_appliance` vs `ouvrir_appliance`, etc.).
- [x] Validation par un build complet réussi.
- [x] Mise à jour du changelog avec les dernières modifications.

### Actions Futures
- [ ] Améliorer le script de traduction pour prévenir la réapparition de ces erreurs (blocs vides, échappement, traduction des chemins d'images).
- [ ] Standardiser les ancres dans les fichiers source pour éviter les liens brisés lors de la traduction.
