# Dépannage du build Docusaurus et des traductions

Procédure pour résoudre les erreurs de `yarn build`, en particulier celles introduites par la traduction automatique dans `i18n/`.

## Lancer un build de diagnostic

```bash
NO_UPDATE_NOTIFIER=1 BASE_URL=/ yarn build
```

Le build compile les cinq langues. Il s'arrête à la première langue en erreur et affiche le fichier en cause.

## Erreurs courantes

### 1. MDX Compilation Failed
**Symptôme** :
```
Error: MDX compilation failed for file "..."
Cause: Could not parse expression with acorn
Line: X, Column: Y
```
**Cause** :
- Blocs de code mal formés ou non fermés (souvent introduit par la traduction automatique).
- Accolades `{}` dans le texte qui sont interprétées comme du code JSX/JS par le parser MDX.
**Solution** :
1.  Localiser la ligne précise dans le fichier indiqué.
2.  Vérifier si le bloc de code précédent est bien fermé par ` ``` `.
3.  Vérifier si le bloc de code contient des ` ``` ` intempestifs à l'intérieur.
4.  Si l'erreur est dans du texte, échapper les accolades ou les mettre dans un bloc de code inline (` `).

Une erreur dans un fichier de `i18n/` se corrige dans la source française puis par une nouvelle traduction, jamais à la main dans la traduction.

### 2. ReferenceError (Variables Indéfinies)
**Symptôme** :
```
Error: Can't render static file for pathname "..."
[cause]: ReferenceError: [variableName] is not defined
```
**Cause** :
- Import d'image manquant.
- Nom de variable d'image traduit par erreur dans le corps du fichier MDX (ex: `import myImage ... <img src={myImage} />` devient `<img src={monImage} />` après traduction, alors que l'import reste `myImage`).
**Solution** :
1.  Identifier la variable incriminée dans le message d'erreur.
2.  Vérifier les imports en haut du fichier MDX.
3.  Si l'erreur est dans la source française, corriger le nom de la variable pour qu'il corresponde exactement à l'import.
4.  Si l'erreur n'existe que dans une traduction, retraduire le fichier (`python scripts/translate_py/translate.py --force --path <chemin relatif à docs/>`) et signaler le défaut du traducteur dans la PR, plutôt que de corriger `i18n/` à la main.

### 3. Broken Links / Anchors
**Symptôme** :
```
[INFO] Docusaurus found broken links!
... linking to ../path/file.md#anchor (resolved as: ...)
```
**Cause** :
- Liens relatifs incorrects après déplacement de fichiers.
- Ancres (`#titre`) qui changent avec la traduction des titres (ex: `#introduction` devient `#einführung`), alors que le lien pointe toujours vers l'ancre originale (ou vice-versa).
**Solution** :
- Lier vers le fichier source avec son extension (`../storage/oss/oss.md`) : Docusaurus résout et vérifie ces liens dans toutes les langues.
- Après une traduction, lancer `python3 scripts/fix_i18n_anchors.py` : le script réaligne les ancres sur les titres traduits (`--check` pour vérifier sans modifier). Ne pas corriger les ancres à la main dans `i18n/`.

## Démarche

1.  **Build de Diagnostic** : Lancer `yarn build` pour obtenir la liste exacte des erreurs.
2.  **Traitement Prioritaire** : S'attaquer d'abord aux erreurs **bloquantes** (MDX, ReferenceError) qui arrêtent le build. Les warnings (broken links) peuvent attendre.
3.  **Correction Ciblée** :
    - Ouvrir le fichier fautif.
    - Appliquer la correction.
4.  **Validation Incrémentale** : Relancer le build après chaque correction majeure pour vérifier si l'erreur a disparu ou s'est déplacée.
5.  **Nettoyage** : Une fois le build passant (SUCCESS), traiter les warnings restants si le temps le permet.
