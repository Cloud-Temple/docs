---
title: Getting Started Guide
---

Welcome to the Cloud Temple **Managed PostgreSQL** Getting Started Guide.

This guide explains how to connect to your managed PostgreSQL cluster, retrieve your connection credentials, and interact with the CloudNative-PG (CNPG) operator via Kubernetes.

---

## 1. Understanding Exposed Services

When a PostgreSQL cluster is deployed via the CNPG operator, several Kubernetes services are automatically created to route traffic to the correct instances.

| Service | Port | Role |
| :--- | :--- | :--- |
| `<cluster-name>-rw` | `5432` | **Primary (read/write)** : routes traffic only to the current primary instance. Use for applications that need to write data. |
| `<cluster-name>-ro` | `5432` | **Replicas (read-only)** : distributes read traffic across available replicas. Use for querying and reporting. |
| `<cluster-name>-r` | `5432` | **Read (any instance)** : routes traffic to the primary or any available replica. |

You can list these services in your namespace using the following command:

```bash
kubectl get services -n <votre-namespace>
```

---

## 2. Retrieve Your Credentials (Secrets)

For security reasons, passwords are randomly generated and securely stored as Kubernetes *Secrets*.

Two main secrets are created:

- `<cluster-name>-superuser` : System administrator credentials (`postgres`).
- `<cluster-name>-app` : Application user credentials (`app`).

To retrieve the password for the `postgres` user, run the following command (replacing with your values):

```bash
kubectl get secret <cluster-name>-superuser \
  -n <votre-namespace> \
  -o jsonpath='{.data.password}' | base64 -d
```

---

## 3. Connecting to the Database

Since databases are not exposed to the Internet by default, you can access them from your workstation using a secure tunnel via `kubectl port-forward`.

### Step 1: Open the local tunnel

In a terminal, run this command to forward port 5432 from the primary service (`-rw`) to your local machine:

```bash
kubectl port-forward svc/<cluster-name>-rw 5432:5432 -n <votre-namespace>
```

### Step 2: Start the psql connection

In another terminal, connect using the `psql` client:

```bash
psql -h localhost -U postgres
```

*(You will be prompted to enter the password retrieved in step 2)*

---

## 4. Check Cluster and Backup Status

You can query CNPG and Barman Custom Resources to check the status of your infrastructure.

**Check PostgreSQL instance status:**
```bash
kubectl get cluster -n <votre-namespace>
kubectl get pods -n <votre-namespace>
```

**Check backup status (Barman Cloud):**
```bash
# Voir les politiques de sauvegarde planifiées
kubectl get scheduledbackup -n <votre-namespace>

# Voir l'historique des sauvegardes complétées
kubectl get backup -n <votre-namespace>
```