---
title : Déployer au travers d'HelmFile
---
# Déployer à l'aide de Helmfile

---

## Objectifs

Déployer des applications sur notre PaaS OpenShift avec **Helmfile** en orchestrant plusieurs Helm charts ensemble.

Ce tutoriel démontre :

- Déploiement d'un **front-end Nginx** avec routes publique et privée
- Déploiement d'un **back-end PostgreSQL** avec stockage persistant
- Utilisation de **charts Helm personnalisés**
- Respect des **contraintes et limitations connues**

---

## Contraintes et limitations connues

### Contraintes OpenShift

* Respecte les contraintes OpenShift  **(SCC restricted-V2)** appliqué automatiquement.
* Déploiement uniquement de **conteneurs sans privilèges**.
* **UIDs** assignés dynamiquement (> 30000).
* Capabilities droppées (`drop: ALL`).
* Ne jamais spécifier de `fsGroup` fixe (laisser OpenShift l'assigner).
* Aucun recours aux  **CRD personnalisés**.
* Pas d’accès au rôle de la plateforme en tant que  **cluster-admin**.
* Pas de déploiement au niveau du cluster (**installation cluster-wide**).
* Pas de **création de namespaces** via Helmfile (pour éviter des conflits de permissions).

### Labels Cloud Temple

- `ct-router-type: public` : Route accessible depuis Internet
- `ct-router-type: private` : Route accessible uniquement depuis le réseau interne

---

## Prérequis

- **OpenShift CLI (`oc`)** installé
- **Helm** installé
- **Helmfile** installé
- Cluster OpenShift géré par Cloud Temple
- Rôle **client admin**

---

## Déploiement

### 1. Récupérer les fichiers

Clonez le repository :

```bash
git clone https://github.com/Cloud-Temple/product-openshift-how-to.git
cd product-openshift-how-to/examples/deploy-through-helmfile
```

### 2. Connexion et création du namespace

```bash
oc login --server=https://api.openshift.example.com:6443 --web
oc new-project poc-helmfile
```

> **Attention** :
> Modifiez `--server=url` avec l'url de votre instance Cloud Temple PaaS.

### 3. Déployer avec Helmfile

```bash
helmfile sync
```

### 4. Vérifier le déploiement

```bash
oc get pods -n poc-helmfile
oc get routes -n poc-helmfile
oc get pvc -n poc-helmfile
```

### 5. Tester Nginx

```bash
echo "URL : https://$(oc get route nginx-demo-public -n poc-helmfile -o jsonpath='{.spec.host}')"
curl -k https://$(oc get route nginx-demo-public -n poc-helmfile -o jsonpath='{.spec.host}')
```

### 6. Tester PostgreSQL

```bash
oc apply -f test-postgres-job.yaml
oc wait --for=condition=complete job/postgres-test -n poc-helmfile --timeout=60s
oc logs job/postgres-test -n poc-helmfile
```

---

## Nettoyage

```bash
helmfile destroy
# ou
oc delete project poc-helmfile
```

---

## Documentation complète

Pour un guide détaillé avec :

- Architecture et diagrammes
- Configuration détaillée des fichiers
- Explications des charts Helm
- Tests et validation

**Consultez le [guide complet dans le repository](https://github.com/Cloud-Temple/product-openshift-how-to/blob/main/examples/deploy-through-helmfile/howto.md)**
