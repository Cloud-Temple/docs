---
title: Guida introduttiva
---

Benvenuti nella guida introduttiva di **PostgreSQL Gestito** Cloud Temple.

Questa guida illustra come connettersi al proprio cluster PostgreSQL gestito, recuperare le credenziali di accesso e interagire con l'operatore CloudNative-PG (CNPG) tramite Kubernetes.

---

## 1. Comprendere i Servizi Esposti

Quando un cluster PostgreSQL viene distribuito tramite l'operatore CNPG, vengono creati automaticamente diversi servizi Kubernetes per instradare il traffico verso le istanze corrette.

| Servizio | Porta | Ruolo |
| :--- | :--- | :--- |
| `<cluster-name>-rw` | `5432` | **Primario (lettura/scrittura)** : instrada il traffico esclusivamente verso l'istanza primaria corrente. Da utilizzare per le applicazioni che devono scrivere dati. |
| `<cluster-name>-ro` | `5432` | **Repliche (sola lettura)** : distribuisce il traffico di lettura sulle repliche disponibili. Da utilizzare per la consultazione e il reporting. |
| `<cluster-name>-r` | `5432` | **Lettura (qualsiasi istanza)** : instrada il traffico verso il primario o qualsiasi replica disponibile. |

È possibile elencare questi servizi nel proprio namespace con il seguente comando:

```bash
kubectl get services -n <votre-namespace>
```

---

## 2. Recuperare le proprie Credenziali (Secret)

Per motivi di sicurezza, le password vengono generate in modo casuale e memorizzate in modo sicuro come *Secret* Kubernetes.

Vengono creati due secret principali :

- `<cluster-name>-superuser` : Credenziali dell'amministratore di sistema (`postgres`).
- `<cluster-name>-app` : Credenziali dell'utente applicativo (`app`).

Per recuperare la password dell'utente `postgres`, esegui il seguente comando (sostituendo con i tuoi valori) :

```bash
kubectl get secret <cluster-name>-superuser \
  -n <votre-namespace> \
  -o jsonpath='{.data.password}' | base64 -d
```

---

## 3. Collegarsi al Database

Poiché i database non sono esposti su Internet per impostazione predefinita, è possibile accedervi dalla propria postazione di lavoro utilizzando un tunnel sicuro tramite `kubectl port-forward`.

### Passo 1: Aprire il tunnel locale

In un terminale, eseguite questo comando per inoltrare la porta 5432 del servizio primario (`-rw`) alla vostra macchina locale:

```bash
kubectl port-forward svc/<cluster-name>-rw 5432:5432 -n <votre-namespace>
```

### Passo 2: Avviare la connessione psql

In un altro terminale, connettiti con il client `psql` :

```bash
psql -h localhost -U postgres
```

*(Il vous sera demandé de saisir le mot de passe récupéré à l'étape 2)*

---

## 4. Verificare lo Stato del Cluster e dei Backup

È possibile interrogare le Custom Resources di CNPG e Barman per visualizzare lo stato della propria infrastruttura.

**Visualizzare lo stato delle istanze PostgreSQL :**
```bash
kubectl get cluster -n <votre-namespace>
kubectl get pods -n <votre-namespace>
```

**Visualizzare lo stato dei backup (Barman Cloud) :**
```bash
# Visualizzare le politiche di backup pianificate
kubectl get scheduledbackup -n <votre-namespace>

# Visualizzare la cronologia dei backup completati
kubectl get backup -n <votre-namespace>
```