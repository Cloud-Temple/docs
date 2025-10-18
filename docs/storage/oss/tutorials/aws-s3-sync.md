---
title: Synchroniser un dossier avec AWS CLI
---

De manière similaire à `mc`, l'AWS CLI fournit la commande `aws s3 sync` pour synchroniser des répertoires. Cette commande compare le contenu du dossier source et du bucket de destination pour ne transférer que les fichiers nouveaux ou modifiés.

N'oubliez pas de configurer votre [client AWS comme indiqué dans le guide de démarrage](../quickstart.md) et d'utiliser le paramètre `--endpoint-url`.

### Exemple de base

Pour synchroniser le contenu du dossier local `./mon-site` vers le bucket `s3://demo-app` :

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Options utiles

*   `--delete` : Supprime les fichiers du bucket qui n'existent plus dans le dossier local. C'est l'équivalent de l'option `--remove` de `mc mirror`.
*   `--exact-timestamps` : Lors de la synchronisation, ne copie le fichier que si l'horodatage de modification est différent.
*   `--dryrun` : Affiche les opérations qui seraient effectuées sans réellement les exécuter. Très utile pour vérifier une commande avant de la lancer.

```bash
# Simulation d'une synchronisation avec suppression pour vérifier les changements
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(dryrun) delete: s3://demo-app/old-file.html
(dryrun) upload: mon-site/new-file.css to s3://demo-app/new-file.css
