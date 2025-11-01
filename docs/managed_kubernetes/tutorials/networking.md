---
title: le réseau dans Kubernetes Managé
---

import cillium from './images/cillium.png'

---

## Objectifs

Ce tutoriel a pour objectif de vous familiariser avec les concepts réseau fondamentaux de l'offre **Managed Kubernetes**. À la fin de ce guide, vous serez en mesure de :

- Comprendre le plan d'adressage IP de votre cluster (nœuds, pods, services).
- Connaître les différents mécanismes pour exposer vos applications (Ingress, LoadBalancer).
- Visualiser les flux réseau et les politiques de sécurité avec Hubble.

Nous prendrons comme **exemple** un cluster **"ctodev"**, dont le range attribué est **10.20.0.0/22**

*Note : Ce range d'IP privées X.Y.Z.0/22 (RFC 1918) est défini avec le client lors de la mise en place du cluster. Il ne peux pas être modifié plus tard.*

## Plan d'adressage IP

Votre cluster Kubernetes Managé dispose d'un VLAN multi-zonal avec un range d'adresses IPv4 en /22. 

Le range de notre **exemple** 10.20.0.0/22 est découpé de manière logique en sous-ranges.

    - 10.20.0.0/24 est attribué aux Noeuds du cluster:

        - 10.20.0.10 : ctodev-gitrunner (la machine qui pilote l'infrastructure)

        - 10.20.0.20 : IP virtuelle (load balancée) du service API Kubernetes
        - 10.20.0.21 : ctodev-cp-01 (control plane 01)
        - 10.20.0.22 : ctodev-cp-02 (control plane 02)
        - 10.20.0.23 : ctodev-cp-03 (control plane 03)

        - 10.20.0.41 : ctodev-ceph-01 (Ceph Storage 01)
        - 10.20.0.42 : ctodev-ceph-02 (Ceph Storage 02)
        - 10.20.0.43 : ctodev-ceph-03 (Ceph Storage 03)

        - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - MetalLB interne : 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - MetalLB externe : 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Services: 10.95.0.0/12 

*Note : Les ranges Pods et Services sont définis avec le client lors de la mise en place du cluster. Ils ne peuvent pas être modifiés plus tard.*

## Utilisation de MetalLB

MetalLB est le composant qui permet d'exposer des services de couche 3 (non web / L7) directement sur une adresse IP, qu'elle soit interne ou externe, en utilisant le type de service `LoadBalancer`. C'est une alternative aux Ingress pour les applications non-HTTP ou pour des cas d'usage spécifiques.

Pour utiliser MetalLB, il vous suffit de créer un service de type `LoadBalancer`. MetalLB lui assignera automatiquement une adresse IP depuis les plages préconfigurées. La distinction entre les plages `interne` et `externe` est une mesure de sécurité pour garantir qu'une application destinée à un usage interne ne soit pas exposée sur un réseau public par erreur.

**Exemple : Exposer un service sur le réseau interne**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-interne
  namespace: mon-namespace
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

Après avoir appliqué ce manifeste, votre service se verra attribuer une adresse IP dans la plage `10.20.1.1 – 10.20.1.127` et sera accessible depuis votre réseau interne connecté au cluster.

**Exemple : Exposer un service sur le réseau externe**

Pour demander une adresse IP depuis la plage externe (`10.20.1.128 – 10.20.1.254`), vous devez ajouter le label `lb-type: external` à votre service.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-externe
  namespace: mon-namespace
  labels:
    lb-type: external
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

> **Important** : Cette plage reste **dans un espace d’adressage privé**. Pour une **exposition publique**, il est nécessaire de créer une **règle NAT (DNAT)** sur le firewall de votre infrastructure afin de rediriger le trafic d'une de vos IP publiques externes vers l’adresse IP privée attribuée par MetalLB.

## IP Publiques

Votre cluster Kubernetes Managé a été livré d'origine avec 2 adresses IPv4 publiques.


La 1ère IP est utilisée sur le port 6443 pour l'API Kubernetes (dans notre exemple ctodev.mk.ms-cloud-temple.com:6443)

Cette même IP est aussi NATée sur l'ingress controller *"nginx-external-secured"* pour le port 443. Ceci permet l'exposition des différentes consoles mises à votre disposition (voir le guide quickstart). Les accès à cette IP publique sont **filtrés** avec une liste d'IP autorisées.

---
La 2ème IP publique est NAtée sur l'ingress controller *"nginx-external"*, sur les ports 80 et 443.

Les applications exposées avec l'ingress class *"nginx-external"* seront donc directement accessible depuis Internet sur cette IP.

*Si vous souhaitez une modification des règles de firewall (ajout/retrait d'IP autorisées), vous devez faire une demande de support.*

*Il est possible d'ajouter d'autres IP publiques si vous le souhaitez.*

## DNS

Pour le DNS interne (CoreDNS), le cluster aura ces paramètres:

- Nom du cluster : ` <identifiant du cluster>`
- Domaine interne : `<identifiant du cluster>-cluster.local` (dans notre exemple : ctodev-cluster.local)

Ce domaine interne est crucial pour la communication inter-services au sein du cluster. Il permet à une application de contacter une autre application en utilisant simplement son nom de service Kubernetes, sans avoir à connaître son adresse IP interne.

Par exemple, un service nommé `api-backend` dans le namespace `production` sera automatiquement résolvable à l'adresse `api-backend.production.svc.ctodev-cluster.local`.

---

La zone DNS publique utilisée pour les clusters Kubernetes Managé est `.mk.ms-cloud-temple.com`

L'ingress *"nginx-external"* (mappé sur l'IP publique n°2) est accessible sur `"*.external.<votre identifiant de cluster>.mk.ms-cloud-temple.com"`.
Si vous publiez une application avec cet ingress-class, vous pourrez y accéder directement via ce nom de domaine. Voir le tutoriel : [Déployer votre première application](./firstdeploy)

## Hubble : L'observabilité réseau à portée de main

Hubble est une interface graphique et en ligne de commande pour visualiser et comprendre les flux réseau de votre cluster. Basé sur Cilium, il vous offre une cartographie détaillée des services, des dépendances et des politiques réseau en temps réel.

Avec Hubble, vous pouvez :
- **Visualiser les flux de trafic** entre vos pods et services.
- **Identifier les problèmes de connectivité** et les erreurs réseau.
- **Vérifier l'application de vos politiques de sécurité** (Network Policies).
- **Explorer les dépendances** entre vos différentes applications.

### Accéder à l'interface Hubble

L'interface graphique de Hubble est exposée sur une URL interne de votre cluster. L'accès n'est pas possible via un port-forwarding `kubectl` car les utilisateurs ne disposent pas des droits suffisants sur le namespace `kube-system`.

Pour y accéder, vous devez être connecté au réseau interne du cluster (par exemple, via un bastion ou un VPN). L'URL à utiliser est la suivante :

`http://hubble.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Pour que cette URL soit résolvable par votre poste de travail, vous devrez probablement ajouter une entrée dans votre fichier `hosts` ou dans votre DNS interne. Vous pouvez obtenir l'adresse IP interne de l'Ingress Hubble avec la commande suivante :

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Création de zones DNS internes (cluster privé)

Pour renforcer la sécurité et simplifier l'accès à vos services et à l'API Kubernetes depuis votre réseau interne, il est recommandé de créer une zone DNS interne. Cette zone permettra de résoudre les noms de domaine de vos Ingress et de l'API Kubernetes vers leurs adresses IP privées respectives, évitant ainsi de transiter par des réseaux publics.

**Exemple de configuration avec notre cluster "ctodev", dont le range attribué est** **10.20.0.0/22 :**

En vous basant sur les URLs fournies dans le guide de démarrage, vous pouvez configurer votre DNS interne comme suit :

1.  **Créez la zone DNS privée** sur vos serveurs DNS internes pour `.<identifiant du cluster>.mk.ms-cloud-temple.com`

2.  **Ajoutez les enregistrements de type A** suivants :

    -   **Pour l'API Kubernetes :**
        -   `. -> 10.20.0.20` (IP virtuelle de l'API)

    -   **Pour les services internes (via l'Ingress `nginx-internal`) :**
        -   `hubble.internal -> 10.20.1.1`
        -   `argocd.internal -> 10.20.1.1`
        -   `ceph.internal -> 10.20.1.1`

    -   **Pour les services sécurisés (via l'Ingress `nginx-external-secure`) :**
        -   `k10.external-secured -> 10.20.1.129`
        -   `grafana.external-secured -> 10.20.1.129`
        -   `harbor.external-secured -> 10.20.1.129`
        -   `kubecost.external-secured -> 10.20.1.129`

Cette configuration garantit que le trafic vers l'API et les services internes reste confiné à votre réseau privé, conformément aux meilleures pratiques de sécurité.

<div class="card">
  <div class="card__header">
    <h3>Tutoriel : Déployer votre première application</h3>
  </div>
  <div class="card__body">
    <p>
      Suivez notre guide détaillé pour apprendre à exposer une application en utilisant un Ingress.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Voir le tutoriel &rarr;</a>
  </div>
</div>
