---
title: Customiser une image OpenIaaS
---
import marketplaceOpenIaasExportTemplate from '../images/marketplace_openiaas_export_template.png'
import marketplaceOpenIaasExportTemplateButton from '../images/marketplace_openiaas_export_template_button.png'
import marketplaceOpeniaasDeployFromTemplate from '../images/marketplace_openiaas_deploy_from_template.png'

Ce tutoriel explique comment personnaliser une image de machine virtuelle (VMI) OpenIaaS fournie par la Marketplace pour créer vos propres modèles réutilisables.

### Principe général

La Marketplace fournit des systèmes d'exploitation (OS) génériques. Le déploiement depuis la marketplace vous offre une base saine, rapidement et facilement déployable, vous évitant des uploads manuels et accélérant vos déploiements.

Une fois l'image déployée, elle devient une machine virtuelle que vous pouvez configurer. Vous pouvez ensuite l'exporter en tant que modèle réutilisable par tous les utilisateurs de votre tenant.

---

## Étapes de personnalisation

1.  **Déployer l'image** de base depuis la Marketplace.
2.  **Configurer la machine virtuelle** selon vos besoins.
3.  **Créer un modèle** à partir de la machine virtuelle configurée.
4.  **Déployer une nouvelle machine virtuelle** depuis votre modèle personnalisé.

---

### Étape 1 : Déployer l'image de base

Suivez le tutoriel [Déployer une image sur OpenIaaS](./deploy_openiaas.md) pour commencer.

---

### Étape 2 : Configurer la machine virtuelle

Une fois la machine virtuelle déployée, configurez-la selon vos besoins (installation de logiciels, configuration de sécurité, etc.).

---

### Étape 3 : Créer un modèle à partir de la machine virtuelle

1.  Depuis la liste de vos machines virtuelles, sélectionnez la machine virtuelle configurée.
2.  Sélectionnez **"Exporter"** depuis la barre d'action.
3.  Suivez les étapes de la Console pour exporter le modèle.

<img src={marketplaceOpenIaasExportTemplateButton} />
<img src={marketplaceOpenIaasExportTemplate} />

---

### Étape 4 : Déployer depuis votre nouveau modèle

Vous pouvez déployer depuis la page "Catalogue" ou depuis la page "Machines Virtuelles".

Pour déployer depuis la page **Machines Virtuelles** :
1.  Cliquez sur **"Créer une machine virtuelle"**.
2.  Choisissez **"Déployer depuis un modèle"**.
3.  Sélectionnez votre nouveau modèle dans la liste.

<img src={marketplaceOpeniaasDeployFromTemplate} />
