---
title: Synchroniser un dossier avec mc mirror
---

La commande `mc mirror` est un outil puissant pour synchroniser le contenu d'un dossier local vers un bucket S3. Elle peut téléverser les fichiers nouveaux ou modifiés, et optionnellement supprimer les fichiers du bucket qui n'existent plus localement. C'est une méthode efficace pour maintenir une sauvegarde ou déployer un site statique.

N'oubliez pas de configurer votre [client MinIO comme indiqué dans le guide de démarrage](../quickstart.md).

### Exemple de base

Pour synchroniser le contenu du dossier local `./mon-site` vers le bucket `demo-app` sur votre alias `cloudtemple-fr1`:

```bash
❯ mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Options utiles

*   `--overwrite` : Force le remplacement des fichiers existants sur la destination, même s'ils sont plus récents.
*   `--remove` : Supprime les fichiers de la destination qui n'existent plus dans le dossier source. **À utiliser avec prudence**, car cela peut entraîner une perte de données irréversible.

```bash
# Synchronisation complète avec suppression des fichiers distants obsolètes
❯ mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/
