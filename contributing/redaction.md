# Règles éditoriales — Documentation Cloud Temple

Ce fichier définit les conventions de style rédactionnel à respecter dans toute la documentation technique Cloud Temple (Docusaurus). Ces règles s'appliquent à la rédaction française originale comme aux traductions.

---

## 1. Utilisation du nom de marque

### Règle principale

**Ne pas répéter le nom "Cloud Temple" à chaque phrase ou paragraphe.**

La marque apparaît :
- dans le titre ou la première phrase d'une section, pour poser le contexte,
- quand il faut différencier un service Cloud Temple d'un service tiers,
- dans les noms de produits officiels (Console Cloud Temple, Stockage Objet Cloud Temple, etc.).

Ensuite, on passe aux tournures impersonnelles ou orientées produit/service.

### Tournures à privilégier

| À éviter | À utiliser |
|---|---|
| "Cloud Temple propose une architecture..." | "L'offre OpenIaaS intègre une architecture..." |
| "Cloud Temple stocke les sauvegardes sur..." | "Les sauvegardes sont stockées sur..." |
| "Cloud Temple garantit la résilience..." | "La plateforme garantit la résilience..." |
| "Cloud Temple vous permet de configurer..." | "Vous pouvez configurer..." |
| "Cloud Temple recommande de..." | "Il est recommandé de..." |

### Exemples de formulations acceptables

```markdown
✅ L'offre OpenIaaS intègre une architecture de sauvegarde distribuée native.
✅ Le service de sauvegarde utilise un mécanisme incrémental...
✅ L'architecture repose sur une séparation stricte entre...
✅ Les sauvegardes sont envoyées vers le Stockage Objet qualifié SecNumCloud.
✅ Vous pouvez demander une politique personnalisée via un ticket de support.

❌ Cloud Temple propose une architecture de sauvegarde...
❌ Cloud Temple stocke vos données sur...
❌ Cloud Temple vous recommande de...
```

---

## 2. Voix et point de vue

1. **Descriptions techniques** → voix impersonnelle ou passive :
   - *"L'architecture repose sur..."*, *"Les données sont chiffrées..."*, *"Le service utilise..."*

2. **Actions utilisateur** → deuxième personne du pluriel (vouvoiement) :
   - *"Vous pouvez configurer..."*, *"Pour créer une politique..."*, *"Vérifiez les journaux..."*

3. **Avertissements et recommandations** → impersonnel :
   - *"Il est recommandé de..."*, *"Il est impératif de..."*, *"Attention : cette opération..."*

---

## 3. Nommage des produits et services

- Utiliser les noms complets lors de la première mention dans une page : **Console Cloud Temple**, **Stockage Objet qualifié SecNumCloud**, **offre OpenIaaS**.
- Les occurrences suivantes peuvent utiliser des formes courtes : **la Console**, **le stockage S3**, **l'offre**.
- Ne pas inventer de noms marketing ni utiliser des anglicismes non établis dans la doc existante.

---

## 4. Références technologiques internes

La documentation ne doit pas exposer les noms des solutions techniques sous-jacentes utilisées par Cloud Temple en interne (hyperviseurs, orchestrateurs, solutions de sauvegarde…), sauf si cela est explicitement nécessaire pour le client (par exemple pour des drivers à installer côté VM).

Utiliser des termes génériques :
- *"l'hyperviseur"* plutôt qu'un nom de produit spécifique
- *"l'orchestrateur de sauvegarde"* plutôt qu'un nom commercial
- *"la stack de virtualisation"* plutôt qu'un nom de logiciel

---

## 5. Longueur et clarté

- Une section introductive = 2 à 4 phrases maximum.
- Les détails techniques complexes vont dans des sous-sections dédiées, pas dans le paragraphe d'intro.
- Préférer les listes à puces et tableaux markdown aux longs paragraphes pour les informations structurées.
- Les avertissements (`:::warning`) et notes (`:::info`) doivent être concis : 2 à 5 lignes maximum, sauf exception justifiée.

---

## 6. Ton factuel

- Décrire ce que fait le service, comment il fonctionne et comment l'utiliser.
- Pas de superlatifs marketing (« révolutionnaire », « inégalé », « le meilleur ») ni de comparaison avec des concurrents.
- Chaque affirmation technique doit pouvoir être vérifiée : composant, comportement, limite, procédure.

## 7. Chiffres, engagements et prix

- Ne jamais inventer ni extrapoler un chiffre : SLA, disponibilité, RPO/RTO, délais de support, limites, performances, nombre de modèles ou de clients.
- Un engagement contractuel (SLA, garantie, responsabilité) ne s'écrit qu'à partir d'une source validée par le responsable produit : documents contractuels, matrice RACI, fiche produit.
- Les prix ne figurent pas dans la documentation : renvoyer vers le [catalogue des tarifs publics](https://www.cloud-temple.com/nos-tarifs-publics/).
- Pour LLMaaS, les dates de cycle de vie et de migration des modèles font foi sur la [page lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) : ne pas les recopier dans les pages.

## 8. Exemples de code

- Tout exemple publié doit avoir été exécuté et fonctionner : commandes, appels d'API, scripts, réponses montrées.
- Une réponse abrégée ou fictive est signalée comme telle dans le texte qui la précède.
- Jamais de vraie clé, de vrai jeton ni de vrai identifiant client dans un exemple : utiliser des valeurs factices explicites (`<VOTRE_CLE_API>`, `your-api-key-here`).
- Indiquer les versions des dépendances lorsque l'exemple en dépend (SDK, bibliothèques).

## 9. Changelog de la documentation

- `docs/changelog.md` est public : il s'adresse aux lecteurs de la documentation.
- Une entrée décrit ce qui change pour le lecteur (nouvelle page, procédure corrigée, information ajoutée), pas le travail interne (refactorisation, outillage, traduction, CI).
- Format : `### [Date] : Titre de la mise à jour`.
- Le changelog des produits (`docs/changelog_produits.md`) est distinct et suit les versions publiées.
