---
title: Guide de démarrage
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Déployer une plateforme Redhat Openshift au sein de votre tenant

### Affectation des droits d'accès

Il est indispensable que l'administrateur du [Tenant](../console/iam/concepts.md#tenant) accorde le droit de gestion de la plateforme Openshift à l'utilisateur administrateur Openshift pour pouvoir y accéder :

<img src={oshiftRights} />

### Accès à l'environnement Openshift au sein d'un tenant

Après l'affectation des droits, le module '__Openshift__' apparaît alors dans le menu de la console Cloud Temple :

<img src={oshiftMenu_001} />

Vous voyez alors apparaître les clusters Openshift qui sont déployés au sein de votre tenant.

Cliquez sur le cluster que vous souhaitez administrer. Vous accéder à l'environnement d'administration du cluster :

<img src={oshiftMenu_002} />

Après authentification, vous pouvez administrer votre cluster :

<img src={oshiftMenu_003} />

### Ressources de votre environnement

Voici les informations de connexion et de configuration propres à votre environnement OpenShift.

#### Détails de connexion

Pour accéder aux différents composants OpenShift, veillez à ce que votre locataire soit inscrit sur la liste blanche dans la console (consultez la documentation : [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__ :
  [https://__votre-id-locataire__.shiva.cloud-temple.com/](https://**votre-id-locataire**.shiva.cloud-temple.com/)

- __OpenShift UI__ :
  [https://ui-ocp01-__votre-id__.paas.cloud-temple.com/](https://ui-ocp01-**votre-id**.paas.cloud-temple.com/)

- __API externe__ :
  [https://api-ocp01-__votre-id__.paas.cloud-temple.com](https://api-ocp01-**votre-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-__votre-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**votre-id**.paas.cloud-temple.com/applications)

#### Connexion au cluster via CLI

Pour vous connecter via la ligne de commande (CLI), utilisez la commande suivante :

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com/ --web
```

#### Accès au registre

Pour accéder au registre, connectez-vous en utilisant les commandes suivantes :

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com --web
docker login -u {votre-utilisateur} -p $(oc whoami -t) registry-ocp01-{votre-id}.paas.cloud-temple.com
```

Ensuite, testez la construction et le téléversement d'une image Docker :

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuration des routeurs et Load Balancers

La plateforme propose des options flexibles pour le __roulage des flux__ et l’__équilibrage de charge__ :

- Par défaut, des load balancers privés sont utilisés pour les routes et les ingresses.
- Domaines :
  - `*.apps-priv-ocp01-{votre-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{votre-id}.paas.cloud-temple.com`

Assurez-vous que vos routes ou ingresses sont configurés avec les étiquettes ou classes d’ingress appropriées pour garantir un routage correct.

Exemple :

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnexion IaaS

Les configurations réseau jouent un rôle crucial pour sécuriser les communications avec OpenShift.

- __Réseau d’interconnexion__ : 100.67.0.0/28
- __VIP du load balancer privé__ : 100.67.0.3

Vérifiez que votre pare-feu dispose d’une interface dédiée et autorise le trafic entre les réseaux spécifiés.
