# Instructions pour contribuer à la documentation Cloud Temple

Ce fichier s'adresse aux assistants de développement et aux personnes qui contribuent à ce dépôt. Il donne ce qu'il faut savoir pour proposer une modification correcte du premier coup. Les règles détaillées sont dans [`contributing/`](contributing/).

## Le projet

- Documentation technique publique de Cloud Temple, publiée sur <https://docs.cloud-temple.com>. Version de recette : <https://docs-ng.c-t.tech>.
- Site [Docusaurus 3](https://docusaurus.io/) en MDX v3, TypeScript pour les composants.
- **Le français est la langue source.** L'anglais, l'allemand, l'espagnol et l'italien sont produits par un script de traduction.
- **Le dépôt est public.** Tout ce qui y entre, y compris l'historique Git, les messages de commit et les descriptions de PR, est visible de tous.

### Lecteurs

La documentation s'adresse d'abord à des profils techniques qui déploient et exploitent les services :

- **Experts techniques, architectes et équipes d'exploitation** : procédures exactes, limites, exemples qui fonctionnent.
- **RSSI** : sécurité, conformité SecNumCloud, partage des responsabilités.
- **DSI** : périmètre des offres, intégration, engagements de service.

Les pages de présentation doivent rester compréhensibles par un décideur, sans devenir commerciales.

## Organisation du dépôt

| Chemin | Contenu |
| --- | --- |
| `docs/` | Pages sources en français, un dossier par service (`docs/<service>/`). |
| `docs/contractual/` | Documents contractuels, matrices RACI, SLA. |
| `i18n/<langue>/` | Traductions générées et libellés d'interface. **Ne pas éditer à la main.** |
| `roadmap/` | Roadmap produit : un fichier YAML par produit (voir `plugins/roadmap/README.md`). |
| `sidebars.ts` | Navigation latérale, définie explicitement. |
| `docusaurus.config.ts` | Configuration du site, du footer et des langues. |
| `src/` | Composants React, pages spéciales, thème. |
| `static/` | Fichiers servis tels quels (logos, images globales). |
| `plugins/` | Plugins Docusaurus du dépôt (roadmap). |
| `scripts/` | Contrôles (`check_*.py`), traduction (`translate_py/`), ancres (`fix_i18n_anchors.py`), publication (`deploy/`). |
| `contributing/` | Règles détaillées de rédaction, de traduction et de dépannage. |
| `.github/workflows/` | Intégration et déploiement continus. |

## Écrire une page

### Structure d'un service

Un service suit en général ce découpage dans `docs/<service>/` :

- `<service>.md` : présentation du service ;
- `concepts.md` : architecture et fonctionnement ;
- `quickstart.md` : premiers pas ;
- `tutorials/` ou `tutorials.md` : procédures détaillées ;
- `faq.md` si nécessaire ;
- `images/` : captures et schémas du service.

Respecter l'organisation existante du service plutôt que d'en créer une nouvelle.

### Frontmatter et navigation

```markdown
---
title: Titre de la page
---
```

- `title` est attendu sur chaque page.
- La navigation se règle dans `sidebars.ts`. `sidebar_position` n'a pas d'effet sur les entrées déclarées explicitement : ne pas en ajouter. Une nouvelle page doit y être référencée pour apparaître dans le menu.

### Images

Importer l'image par son chemin depuis la racine du site, puis l'afficher :

```mdx
import creerSession from '@site/docs/bastion/images/creer_session.png'

<img src={creerSession} alt="Création d'une session" />
```

- Nommer les fichiers en minuscules, avec des underscores : `service_fonction_001.png`.
- Toujours renseigner `alt`.
- Masquer toute donnée réelle sur les captures : noms de clients, adresses IP, identifiants, jetons.

### MDX v3

- Encadrés : le titre se met entre crochets. `:::info[Titre]` fonctionne ; `:::info Titre` s'affiche en texte brut sans erreur de build. Le contrôle `scripts/check_admonitions.py` bloque cette erreur.
- Les accolades `{}` dans le texte sont interprétées comme du JavaScript : les placer dans du code (`` `{id}` ``) ou les échapper.
- Les liens internes pointent vers le fichier source avec son extension (`../storage/oss/oss.md`) : Docusaurus les vérifie au build.

## Règles de rédaction

Résumé de [`contributing/redaction.md`](contributing/redaction.md), qui fait référence :

- **Voix** : impersonnelle pour décrire (« Les données sont chiffrées »), vouvoiement pour les actions (« Vous pouvez configurer »).
- **Marque** : ne pas répéter « Cloud Temple » à chaque phrase ; utiliser les noms officiels des produits à la première mention.
- **Technologies internes** : ne pas nommer les solutions sous-jacentes (hyperviseur, sauvegarde, matériel, noms de serveurs) sauf si le client en a besoin.
- **Ton factuel** : pas de superlatifs ni de comparaisons commerciales.
- **Aucun chiffre inventé** : SLA, disponibilité, RPO/RTO, délais de support, limites et performances ne s'écrivent qu'à partir d'une source validée par le responsable produit.
- **Pas de prix** : renvoyer vers le [catalogue des tarifs publics](https://www.cloud-temple.com/nos-tarifs-publics/).
- **Exemples testés** : tout exemple de code publié a été exécuté. Les réponses abrégées ou fictives sont signalées. Jamais de vraie clé ni de vrai identifiant.
- **Changelog** : `docs/changelog.md` décrit ce qui change pour le lecteur, pas le travail interne.

## Traductions

- Modifier uniquement la source française dans `docs/`, puis lancer le script :

  ```bash
  python scripts/translate_py/translate.py --dry-run
  python scripts/translate_py/translate.py --token "$CLOUDTEMPLE_API_KEY"
  python3 scripts/fix_i18n_anchors.py
  ```

- `scripts/translate_py/translation-meta.json` garde l'empreinte de chaque source traduite. Une traduction périmée bloque le build de la roadmap : relancer le script plutôt que de modifier ce fichier à la main.
- Une erreur dans une page traduite se corrige dans la source puis par retraduction.
- Glossaire, termes à ne pas traduire et options du script : [`contributing/traduction.md`](contributing/traduction.md) et [`contributing/script-traduction.md`](contributing/script-traduction.md).

## Roadmap

La roadmap publique se modifie uniquement dans les YAML de `roadmap/`. Régénérer ensuite l'intermédiaire de traduction (`yarn generate:roadmap`), puis traduire. `docs/roadmap/roadmap.md` est généré : ne pas l'éditer. Les libellés de l'interface se modifient dans `docs/roadmap/interface.md`, puis se traduisent. Détails : [`plugins/roadmap/README.md`](plugins/roadmap/README.md).

## Commandes

Prérequis : Node.js 22, Yarn 1, Python 3.12 ou plus.

```bash
yarn install --frozen-lockfile                      # Dépendances
BASE_URL=/ yarn start                               # Serveur local (français)
NO_UPDATE_NOTIFIER=1 BASE_URL=/ yarn build          # Build des cinq langues
yarn typecheck                                      # Contrôle de types
python3 scripts/check_admonitions.py                # Syntaxe des encadrés
python3 scripts/check_secrets.py                    # Secrets et marqueurs de conflit
node --test plugins/roadmap/*.test.mjs src/components/SiteVersion/*.test.mjs
python3 -m unittest discover -s scripts/deploy -p 'test_*.py'
```

Avant de proposer une modification, au minimum : `check_admonitions.py`, `check_secrets.py` et un build des cinq langues. En cas d'erreur de build : [`contributing/depannage-build.md`](contributing/depannage-build.md).

## Contribuer

- Partir de la branche `staging`, sur une branche nommée selon le sujet : `docs/<sujet>`, `fix/<sujet>`.
- Ouvrir une Pull Request vers `staging`. Les contrôles « Contrôles » et « Build Docusaurus » doivent passer avant la fusion. La fusion publie automatiquement la recette.
- La production reçoit `staging` par une Pull Request vers `production`, avec approbation.
- Messages de commit au format `type: description`, en français. Types utilisés : `docs`, `fix`, `feat`, `chore`.
- Les commits et les Pull Requests sont signés par la personne qui contribue. Ne pas y ajouter de mention d'outil d'assistance ni de ligne `Co-Authored-By` désignant un outil.
- Une Pull Request décrit ce qui change et pourquoi, cite ses sources pour toute information produit, et liste les vérifications faites.

## Limites strictes

- Aucun secret, jeton, mot de passe, nom de machine interne ou adresse IP privée, même dans un exemple ou une capture.
- Aucune note de travail interne dans le dépôt : audits, journaux de session, états d'avancement.
- Aucun marqueur de conflit Git (`<<<<<<<`, `=======`, `>>>>>>>`) : vérifier avant chaque commit.
- Ne jamais éditer à la main : `i18n/`, `docs/roadmap/roadmap.md`, `scripts/translate_py/translation-meta.json`.
- Ne jamais pousser directement sur `staging` ou `production`.
- Ne pas modifier les workflows, les scripts de publication ni la configuration de déploiement sans demande explicite.
- Ne pas copier ni adapter de contenu tiers sans en vérifier la licence et les droits.
- En cas de doute sur une information produit, poser la question au responsable produit plutôt que de supposer.

## Collaborateurs Cloud Temple

Une mémoire de travail partagée Hivemind existe pour ce dépôt : décisions, points ouverts, historique. Pour y accéder, demandez l'accès aux responsables produit. Elle est facultative : le dépôt reste la référence, et toute règle nécessaire pour contribuer doit y figurer.

## Ressources

- [`README.md`](README.md) : présentation du dépôt.
- [`scripts/README.md`](scripts/README.md) : scripts du dépôt.
- [`contributing/`](contributing/) : rédaction, traduction, dépannage.
- [`plugins/roadmap/README.md`](plugins/roadmap/README.md) : roadmap produit.
