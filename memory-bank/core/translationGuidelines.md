# Guidelines de Traduction - Cloud Temple Documentation

## Principe Fondamental

**Le français est la langue source** de toute la documentation Cloud Temple. Toutes les traductions découlent du contenu français original et maintiennent la cohérence terminologique SecNumCloud.

## Architecture Multilingue

### Langues Supportées (`/i18n/`)
```
i18n/
├── fr/     # 🇫🇷 Français (SOURCE)
├── en/     # 🇬🇧 Anglais (priorité haute)
├── de/     # 🇩🇪 Allemand (marché DACH)
├── es/     # 🇪🇸 Espagnol (expansion EU)
└── it/     # 🇮🇹 Italien (marché méditerranéen)
```

### Structure de Traduction
Chaque langue contient :
- **`code.json`** : Traductions interface Docusaurus
- **`docusaurus-plugin-content-docs/`** : Contenu markdown traduit
- **`docusaurus-theme-classic/`** : Thème localisé

## Glossaire Technique Cloud Temple

### Termes JAMAIS Traduits
Ces termes restent en français ou anglais technique dans toutes les langues :

#### **Marque et Services**
- **Cloud Temple** → Cloud Temple (invariant)
- **Console** → Console (nom propre)
- **SecNumCloud** → SecNumCloud (certification ANSSI)
- **ANSSI** → ANSSI (organisme français)

#### **Technologies et Standards**
- **API** → API (pas d'équivalent)
- **endpoint** → endpoint (terme technique)
- **cluster** → cluster (informatique)
- **namespace** → namespace (Kubernetes)
- **container** → container (pas conteneur)
- **pod** → pod (Kubernetes)
- **node** → node (infrastructure)
- **subnet** → subnet (réseau)
- **VLAN** → VLAN (acronyme)
- **VPN** → VPN (acronyme)
- **SSL/TLS** → SSL/TLS (protocoles)
- **SSH** → SSH (protocole)
- **HTTP(S)** → HTTP(S) (protocoles web)

#### **Concepts Cloud**
- **IaaS** → IaaS (Infrastructure as a Service)
- **PaaS** → PaaS (Platform as a Service)
- **SaaS** → SaaS (Software as a Service)
- **DevOps** → DevOps (méthodologie)
- **CI/CD** → CI/CD (pratiques)

### Terminologie Cloud Temple par Langue

#### **🇫🇷 Français (Source)**
| Concept | Terme Français | Note |
|---------|----------------|------|
| Infrastructure | Infrastructure | Source |
| Sécurité | Sécurité | Référence SecNumCloud |
| Conformité | Conformité | Contexte réglementaire |
| Authentification | Authentification | Sécurité |
| Chiffrement | Chiffrement | Pas cryptage |
| Surveillance | Surveillance | Monitoring |
| Basculement | Basculement | Failover |
| Sauvegarde | Sauvegarde | Backup |
| Récupération | Récupération | Recovery |

#### **🇬🇧 Anglais**
| Français | Anglais | Contexte |
|----------|---------|----------|
| Infrastructure | Infrastructure | Direct |
| Sécurité | Security | Standard |
| Conformité | Compliance | Regulatory |
| Authentification | Authentication | Security |
| Chiffrement | Encryption | Standard |
| Surveillance | Monitoring | Technical |
| Basculement | Failover | Technical |
| Sauvegarde | Backup | Standard |
| Récupération | Recovery | Standard |
| Colocation | Colocation | Housing |
| Hébergement | Hosting | Service |

#### **🇩🇪 Allemand**
| Français | Allemand | Note |
|----------|----------|------|
| Infrastructure | Infrastruktur | Direct |
| Sécurité | Sicherheit | Important |
| Conformité | Compliance | Anglicisme accepté |
| Authentification | Authentifizierung | Complet |
| Chiffrement | Verschlüsselung | Précis |
| Surveillance | Überwachung | Monitoring |
| Colocation | Colocation | Terme technique |
| Hébergement | Hosting | Anglicisme |

#### **🇪🇸 Espagnol**
| Français | Espagnol | Contexte |
|----------|----------|----------|
| Infrastructure | Infraestructura | Direct |
| Sécurité | Seguridad | Standard |
| Conformité | Cumplimiento | Réglementaire |
| Authentification | Autenticación | Sécurité |
| Chiffrement | Cifrado | Encryption |
| Surveillance | Monitorización | Technique |
| Colocation | Colocation | Terme technique |

#### **🇮🇹 Italien**
| Français | Italien | Note |
|----------|---------|------|
| Infrastructure | Infrastruttura | Direct |
| Sécurité | Sicurezza | Standard |
| Conformité | Conformità | Réglementaire |
| Authentification | Autenticazione | Sécurité |
| Chiffrement | Crittografia | Précis |
| Surveillance | Monitoraggio | Monitoring |

## Règles de Traduction par Type de Contenu

### 📋 Pages Principales (`[service].md`)
#### Structure à Maintenir
```markdown
# [Nom Service Traduit]

## Vue d'ensemble
[Description adaptée à la culture locale]

## Qualification SecNumCloud
[Garder référence ANSSI - expliquer contexte]

## Architecture
[Termes techniques invariants]
```

#### Règles Spécifiques
- **Titres** : Traduire mais garder cohérence
- **SecNumCloud** : Toujours expliquer le contexte français
- **Architecture** : Termes techniques en anglais
- **Screenshots** : Garder interface française

### 🔧 Concepts Techniques (`concepts.md`)
#### Approche Traduction
- **Diagrammes** : Garder anglais technique
- **Architectures** : Termes cloud standards
- **Sécurité** : Adapter au contexte légal local
- **Performance** : Métriques universelles

### ⚡ Guides Rapides (`quickstart.md`)
#### Adaptation Culturelle
- **Étapes** : Numérotation locale (1,2,3 vs 1.,2.,3.)
- **Commandes** : Garder syntaxe exacte
- **Variables** : Adapter exemples locaux
- **Validation** : Termes de validation appropriés

### 📚 Tutoriels (`tutorials.md`)
#### Localisation Avancée
- **Cas d'usage** : Adapter aux marchés locaux
- **Exemples** : Entreprises et contextes locaux
- **Réglementations** : Mentionner équivalents locaux (GDPR, etc.)
- **Support** : Références aux équipes régionales

## Intégration avec `/scripts/translate.js`

### Configuration Automatique
Le script de traduction doit respecter :

```javascript
// Termes à ne JAMAIS traduire
const INVARIANT_TERMS = [
  'Cloud Temple', 'Console', 'SecNumCloud', 'ANSSI',
  'API', 'endpoint', 'cluster', 'namespace', 'container',
  'IaaS', 'PaaS', 'SaaS', 'DevOps', 'CI/CD'
];

// Termes techniques cloud (garder en anglais)
const TECHNICAL_TERMS = [
  'pod', 'node', 'subnet', 'VLAN', 'VPN', 'SSH', 'SSL', 'TLS'
];
```

### Workflow Automatisé
```bash
# 1. Traduire nouveau contenu français
yarn translate:new

# 2. Valider terminologie
yarn translate:validate

# 3. Générer glossaire
yarn translate:glossary
```

## Processus de Validation

### 🔍 Validation Automatique
1. **Termes invariants** : Vérification non-traduction
2. **Cohérence terminologique** : Glossaire respecté
3. **Structure markdown** : Formatting préservé
4. **Liens internes** : Paths adaptés par langue

### 👥 Validation Humaine
1. **Review technique** : Expert par langue
2. **Contexte métier** : Connaissance Cloud Temple
3. **Culture locale** : Adaptation appropriée
4. **Juridique** : Conformité réglementaire locale

## Gestion des Métadonnées

### Headers Docusaurus
```markdown
---
title: "[Titre Traduit]"
sidebar_position: [même position]
---
```

### Navigation (`sidebars.ts`)
Les titres de navigation sont traduits via `i18n/[lang]/code.json` :

```json
{
  "sidebar.docs.console": "Console de Gestion",
  "sidebar.docs.bastion": "Sécurité Bastion",
  "sidebar.docs.iaas": "Infrastructure IaaS"
}
```

## Adaptation Réglementaire

### 🇫🇷 France (Source)
- **SecNumCloud** : Référence absolue
- **ANSSI** : Autorité nationale
- **RGPD** : Réglementation européenne
- **Hébergement de données** : Souveraineté

### 🇬🇧 Royaume-Uni / International
- **SecNumCloud** : Expliquer équivalence
- **Data sovereignty** : Concept clé
- **GDPR compliance** : Réglementation applicable
- **Hosting** : Services d'hébergement

### 🇩🇪 Allemagne (DACH)
- **Datensouveränität** : Concept central
- **DSGVO** : RGPD allemand
- **BSI** : Équivalent ANSSI (mentionner)
- **Hosting/Colocation** : Termes acceptés

### 🇪🇸 Espagne
- **Soberanía de datos** : Souveraineté données
- **RGPD** : Réglementation européenne
- **CCN-CERT** : Équivalent ANSSI espagnol
- **Alojamiento** : Hébergement

### 🇮🇹 Italie
- **Sovranità digitale** : Souveraineté numérique
- **GDPR** : Réglementation européenne
- **AgID** : Agence digitale italienne
- **Hosting** : Terme accepté

## Guidelines Éditoriales par Langue

### Ton et Style
#### 🇫🇷 Français
- **Ton** : Technique professionnel avant-vente
- **Vouvoiement** : Systématique
- **Précision** : Terminologie SecNumCloud exacte

#### 🇬🇧 Anglais
- **Tone** : Professional technical sales
- **Style** : Clear and direct
- **Formality** : Business appropriate

#### 🇩🇪 Allemand
- **Ton** : Professionell und präzise
- **Höflichkeit** : Sie-Form konsequent
- **Fachsprache** : Technische Genauigkeit

#### 🇪🇸 Espagnol
- **Tono** : Profesional técnico
- **Tratamiento** : Formal (usted)
- **Precisión** : Terminología técnica

#### 🇮🇹 Italien
- **Tono** : Professionale tecnico
- **Formalità** : Registro formale
- **Chiarezza** : Terminologia precisa

## Maintenance et Mise à Jour

### Workflow de Traduction
1. **Contenu français créé** → Source de référence
2. **Traduction automatique** → Premier draft via script
3. **Review technique** → Validation expert langue
4. **Validation métier** → Cohérence Cloud Temple
5. **Publication** → Mise en ligne multilingue

### Suivi Qualité
- **Métriques complétude** : % traduit par langue
- **Cohérence terminologique** : Respect glossaire
- **Feedback utilisateurs** : Amélioration continue
- **Audit périodique** : Validation trimestrielle

### Outils de Validation
```bash
# Vérifier cohérence terminologique
yarn i18n:check-terms

# Valider structure markdown
yarn i18n:validate-structure

# Générer rapport complétude
yarn i18n:coverage-report
```

---

## Checklist Traduction

### ✅ Avant Traduction
- [ ] Contenu français finalisé et validé
- [ ] Terminologie vérifiée avec glossaire
- [ ] Screenshots en français disponibles
- [ ] Structure markdown correcte

### ✅ Pendant Traduction
- [ ] Termes invariants respectés
- [ ] Contexte SecNumCloud expliqué
- [ ] Adaptation culturelle appropriée
- [ ] Liens internes adaptés

### ✅ Après Traduction
- [ ] Review technique par expert langue
- [ ] Validation cohérence Cloud Temple
- [ ] Test navigation multilingue
- [ ] Intégration dans build Docusaurus

---

*Guidelines de traduction Cloud Temple - 05/06/2025*
*Référence pour maintenir la qualité multilingue*
