---
title : Déployer une Machine Virtuelle (VM) avec KubeVirt
---

## Objectifs

Ce tutoriel a pour objectif de fournir des étapes claires pour déployer et configurer des machines virtuelles (VM) dans **KubeVirt** sur votre cluster OpenShift.

Deux scénarios seront abordés :

1. Création et déploiement d’une machine virtuelle Fedora avec NGINX.
2. Création d’une machine virtuelle Windows Server 2022 personnalisée avec IIS.

---

## Limitations connues

- Les templates manquants dans le catalogue OpenShift peuvent être récupérés depuis le référentiel officiel KubeVirt :  
  [https://github.com/kubevirt/common-templates/tree/master](https://github.com/kubevirt/common-templates/tree/master).  
- Les machines virtuelles déployées doivent être compatibles avec KubeVirt (drivers virtio, format disques, etc.).
- La configuration dépend des privilèges assignés dans le projet OpenShift correspondant.
- Une configuration avancée du réseau (par exemple : port forwarding) est nécessaire pour accéder aux services hébergés sur les VM.

---

## Points forts

- **Flexibilité** : Permet de déployer des VM directement depuis OpenShift, simplifiant l’hébergement d’applications nécessitant un environnement VM.  
- **Compatibilité Windows et Linux** : Supporte Fedora et Windows Server.  
- **Facilité d’intégration** : Utilise les services inhérents à KubeVirt et OpenShift (PVC, port forwarding, ingress).  

---

## Versions des logiciels

- OpenShift : v4.15 ou supérieur  
- Kubernetes : v1.24 ou supérieur  
- KubeVirt : v0.56 ou supérieur  
- VMware Workstation (pour la conversion Windows Server) : Version 16 ou supérieure  
- qemu-img : Version 6.1 ou supérieure  

---

## Prérequis

Avant de commencer, assurez-vous :

1. Que KubeVirt est correctement installé dans OpenShift.  
2. De disposer d’un accès administrateur au projet OpenShift où la VM sera déployée.  
3. D’avoir les clés SSH pour accéder à la machine virtuelle Fedora.
4. D’avoir installé et configuré les outils suivants :  
   - **OpenShift CLI (`oc`)**  
   - **qemu-img** (pour la conversion de disques au format `qcow2`)  
5. D’avoir accès au blob Azure où l’image Windows Server sera stockée.  

---

## Plan de démonstration

### Vue d’ensemble des étapes

1. Déployer une VM Fedora avec NGINX.  
2. Déployer une VM Windows Server avec IIS.  
3. Configurer l’accès réseau (SSH pour Fedora, RDP pour Windows).  
4. Vérifier que les services (NGINX/IIS) sont accessibles depuis votre navigateur.  

---

## Fichiers nécessaires

Vous aurez besoin des fichiers suivants pour le déploiement :

1. **ssh-port-forward.yaml** : Manifeste pour configurer l’accès SSH à la VM Fedora.  
2. **nginx-expose.yaml** : Manifeste pour exposer NGINX dans OpenShift.  
3. **rdp-port-forward.yaml** : Manifeste pour configurer l’accès RDP à la VM Windows.  
4. **iis-expose.yaml** : Manifeste pour exposer IIS dans OpenShift.  

---

## Déroulement du déploiement

---

### Étape 1 : Déployer une VM Fedora avec NGINX

1. **Créer une VM Fedora dans OpenShift** :  

   - Accédez à la vue **Administrateur** dans OpenShift et sélectionnez **Virtualization**.
   - Allez dans l’onglet **Catalog** et cliquez sur **Créer une nouvelle VM**.
   - Renseignez les paramètres suivants :  
     - **Système d’exploitation** : Fedora  
     - **Type d’instance**  : U Series avec **2 CPU et 8 Go RAM**  
     - **Nom de la VM** : `fedora-nginx`  
   - Ajoutez votre clé SSH publique (`mysshkey`) pour accéder à la VM.
   - Cliquez sur **Créer**.  

2. **Configurer l’accès CLI à OpenShift** :  

   - Saisissez la commande suivante pour travailler sur le bon projet OpenShift :  

     ```bash
     oc project demokubevirt
     ```

   - Connectez-vous à l’API OpenShift :  

     ```bash
     oc login --server=api-ocp01-{your-id}.paas.cloud-temple.com --web
     ```

3. **Configurer l’accès SSH à la VM Fedora** :  

   - Appliquez le manifeste pour configurer le port forwarding pour SSH :  

     ```bash
     oc apply -f ssh-port-forward.yaml
     ```

   - Redirigez le port localement depuis votre machine :  

     ```bash
     oc port-forward svc/fedora-service-ssh 2222:22
     ```

   - Connectez-vous à la VM depuis un nouveau terminal :  

     ```bash
     ssh cloud-user@127.0.0.1 -p 2222 -o StrictHostKeyChecking=no
     ```

4. **Déployer NGINX sur Fedora** :  

   - Connectez-vous à la VM comme ci-dessus et exécutez les commandes :  

     ```bash
     sudo dnf update -y 
     sudo dnf install nginx -y
     sudo systemctl start nginx
     sudo systemctl enable nginx
     ```

   - Vérifiez que NGINX fonctionne correctement :  

     ```bash
     sudo systemctl status nginx
     ```

5. **Exposer NGINX dans OpenShift** :  

   - Appliquez le manifeste suivant pour exposer le service :  

     ```bash
     oc apply -f nginx-expose.yaml
     ```

6. **Accéder au site web NGINX** :  

   - Ouvrez votre navigateur et accédez à :  
     `https://nginx-fedora.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

### Étape 2 : Déployer une VM Windows Server avec IIS

1. **Créer une image Windows personnalisée** :  

   - Installez une VM Windows Server dans VMware Workstation avec :  
     - Drivers : **Virtio**, SATA, e1000e, UEFI.  
     - Effectuez un **Sysprep**.
     - Exportez l’image au format **OVF**.  

   - Convertissez l’image disque au format **qcow2** en utilisant `qemu-img` :  

     ```bash
     qemu-img convert -f vmdk -O qcow2 WindowsServer2022-OC-disk1.vmdk output.qcow2
     ```

   - Téléchargez l’image convertie dans un blob Azure et récupérez la clé SAS.  

2. **Créer un template personnalisé pour Windows Server dans KubeVirt** :  

   - Depuis l’onglet **catalog** d’OpenShift, créez un template avec les paramètres suivants :  
     - **2 CPU, 8 Go RAM, 100 Go de stockage**.  
     - Configurez le stockage pour utiliser **virtio**.  
     - Utilisez l’URL du blob comme source de disque et intégrez la clé SAS.  

3. **Configurer IIS sur Windows** :  

   - Connectez-vous à la VM (mot de passe administrateur, clavier, etc.).
   - Installez **IIS** dans la console :  

     ```powershell
     Install-WindowsFeature -name Web-Server -IncludeManagementTools
     ```

4. **Configurer l’accès RDP** :  

   - Appliquez les YAML suivants :  

     ```bash
     oc apply -f rdp-port-forward.yaml
     oc apply -f iis-expose.yaml
     ```

   - Redirigez le port RDP localement :  

     ```bash
     oc port-forward svc/windows-service-rdp 2222:3389
     ```

   - Connectez-vous via votre client RDP :  

     ```bash
     mstsc -v 127.0.0.1:2222
     ```

5. **Accéder au site web IIS** :  

   - Dans votre navigateur, rendez-vous à :  
     `https://iis-windows.apps-ocp01-{your-id}.paas.cloud-temple.com`.

---

## Critères de validation

1. Les VM Fedora et Windows Server sont déployées sans erreurs.  
2. SSH sur Fedora et RDP sur Windows fonctionnent via le port forwarding.  
3. Les services NGINX et IIS sont accessibles publiquement via les URL configurées.  

---

## Conclusion

Ce guide vous a permis de déployer des machines virtuelles Fedora et Windows Server sur KubeVirt avec OpenShift. Vous avez appris à configurer les accès réseau (SSH/RDP) et à exposer des services web. Ces étapes peuvent être reproduites pour divers scénarios où des VM sont nécessaires dans un environnement sur le PaaS OpenShift **Cloud Temple**. 🚀
