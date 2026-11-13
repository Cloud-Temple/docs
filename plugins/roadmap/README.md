# Roadmap : un YAML par produit

La source éditable est le dossier `roadmap/` à la racine du dépôt. Il contient
uniquement des fichiers YAML, avec un fichier par produit et une liste de
fonctionnalités dans chaque fichier. Aucun appel GitHub n’est nécessaire.

```text
roadmap/
  cloud-console.yaml
  hsm.yaml
  iaas-opensource.yaml
  iaas-vmware.yaml
  iam.yaml
  managed-iam.yaml
  managed-kms.yaml
  managed-waf.yaml
  siem.yaml
  soc.yaml
  vm-instances.yaml
```

## Exemple

```yaml
product: IaaS VMware
features:
  - id: RM-003
    category: Compute
    status: prioritized
    quarter: 2026 - Q4
    tags: [SNC]
    assignees: [Respoun]
    title: Migration des sauvegardes IaaS VMware
    description: >-
      Migrer les sauvegardes IaaS VMware vers IBM Storage Defender Data Protect.
```

`product` s’applique à toutes les fonctionnalités du fichier. Chaque entrée
possède un Internal ID unique et stable, un titre et une description en français.
Déplacer une fonctionnalité ou réordonner la liste ne doit pas changer son ID.
Les identifiants `RM-*` actuels sont provisoires.

Champs requis par fonctionnalité : `id`, `title`, `description`, `category`,
`status`. Statuts possibles : `acknowledged`, `prioritized`, `in_progress`,
`partial`, `done`.

Champs facultatifs : `quarter` (`YYYY - Q1` à `YYYY - Q4`), `tags`, `assignees`,
`priority`, `type`, `startDate`, `releaseDate`, `changelog`, `votes`, `createdAt`,
`updatedAt`, et `points` (liste de textes courts affichés sous la description).
`assignees` sert au suivi interne : il n’est pas affiché sur le site public.
Les dates utilisent ISO 8601 ; les votes sont des entiers positifs ou nuls.
Omettre les valeurs inconnues. Ne pas inventer de date ni de claim produit.
Les textes restent simples, sans HTML ni JSX. Les descriptions peuvent utiliser
les blocs YAML `>-` ou `|` pour être écrites sur plusieurs lignes.

## Générer et traduire

1. Modifier uniquement les YAML de `roadmap/` pour le contenu produit.
2. Générer l’intermédiaire de traduction :

   ```bash
   node plugins/roadmap/generate.mjs
   ```

   Le raccourci `yarn generate:roadmap` exécute la même commande.
3. Utiliser le script officiel pour traduire les changements :

   ```bash
   scripts/translate_py/.venv/bin/python scripts/translate_py/translate.py \
     --path roadmap/roadmap.md
   ```

4. Lancer le build Docusaurus dans les cinq langues :

   ```bash
   yarn build
   ```

`docs/roadmap/roadmap.md` est désormais un fichier généré : ne pas l’éditer.
Il sert uniquement d’intermédiaire au script officiel, qui traduit le Markdown
et protège les métadonnées dans les blocs JSON. Ne pas modifier manuellement
les traductions dans `i18n/`. Les dates, statuts, produits, tags et Internal ID
restent communs aux langues. Le plugin vérifie aussi les empreintes produites
par le script officiel pour refuser une traduction périmée après un changement
de titre ou de description.

Le plugin lit les YAML pour le français et les textes générés par le script
pour les autres langues. Un YAML invalide, un Internal ID dupliqué, un fichier
généré périmé ou une traduction manquante bloque la génération du site.

## Intégration et interface

`src/pages/roadmap.tsx` est une page dédiée, sans barre de navigation ni menu
latéral de documentation, sur fond blanc. Elle réutilise le pied de page habituel
et le lien « Documentation Cloud Temple » revient à l’accueil technique.
Les cinq routes localisées `/roadmap` restent générées par Docusaurus.
Cette page n’est liée ni dans le menu ni dans le pied de page : leurs liens
Roadmap conservent la destination GitHub Project d’origine. La nouvelle page
reste accessible par URL directe, est exclue du sitemap et porte une directive
`noindex, nofollow`. Cela ne constitue pas une restriction d’accès.

Avec `BASE_URL=/`, son URL française est `/roadmap` ; les autres langues
conservent leur préfixe (`/en/roadmap`…). Les YAML et les traductions sont
validés à la génération. À chaque ouverture, la page charge les cartes et les
libellés de la langue courante depuis la base définie par la variable de build
`ROADMAP_DATA_URL`. La CI utilise `/roadmap-data/` : les données sont servies
par le même site que les pages, quelle que soit l’adresse utilisée. Une URL
relative est résolue sur l’adresse de la page ; HTTPS reste obligatoire.
Le navigateur n’envoie aucune clé et ne remplace pas une erreur S3 par des cartes
embarquées potentiellement périmées. Il affiche un état de chargement, puis un
message et un bouton Réessayer en cas d’erreur, avec un délai maximal de 15 s.
Les réponses, IDs, statuts, champs, libellés et empreintes SHA-256 sont contrôlés.

## Publication des données

```bash
node plugins/roadmap/export.mjs "$PWD/roadmap-export"
```

L’export valide les données et les traductions avec le même plugin que le build.
Il produit les 27 YAML originaux, un JSON de données par langue (79 cartes et
les libellés), puis un `manifest.json` avec chemins et empreintes SHA-256.
Les fichiers sont regroupés sous `releases/<empreinte>/`. La CI publie ensuite
l’export sous le préfixe `roadmap-data/` avec `scripts/deploy/roadmap_publish.py` :
fichiers de version d’abord, manifeste en dernier. Les identifiants S3 n’entrent
ni dans cet export ni dans le code navigateur. Le frontend consomme le manifeste et
le JSON localisé ; il ne parcourt pas les YAML du bucket. Modifier uniquement un
YAML distant ne met donc pas les cartes à jour : régénérer l’intermédiaire,
traduire officiellement et exporter/publier une nouvelle version complète.
Cette publication de données ne nécessite aucun nouveau build du frontend.
Le manifeste est demandé avec `cache: no-store`, les objets de version ont des
chemins immuables, et leurs empreintes empêchent de mélanger deux publications.

Les textes de l’interface restent dans `docs/roadmap/interface.md` et suivent
également le script officiel (`--path roadmap/interface.md`). Pour une nouvelle
catégorie, ajouter sa clé `category.<nom>` dans ce fichier puis le traduire.
Les fichiers de données sous `docs/roadmap/` ne deviennent pas des pages publiques
séparées ; ils sont exclus du plugin docs standard.

## Contrôles locaux

```bash
node --test plugins/roadmap/index.test.mjs
node --experimental-strip-types --test plugins/roadmap/remote.test.mjs
node plugins/roadmap/generate.mjs --check
node node_modules/typescript/bin/tsc --noEmit --strict
```
