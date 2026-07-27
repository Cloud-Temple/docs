---
title: Schnellstart
---

Willkommen beim Einstiegsguide für **Verwaltetes PostgreSQL** von Cloud Temple.

In diesem Leitfaden erfahren Sie, wie Sie sich mit Ihrem verwalteten PostgreSQL-Cluster verbinden, Ihre Zugangsdaten abrufen und über Kubernetes mit dem CloudNative-PG-Operator (CNPG) interagieren.

---

## 1. Exponierte Dienste verstehen

Wenn ein PostgreSQL-Cluster über den CNPG-Operator bereitgestellt wird, werden automatisch mehrere Kubernetes-Dienste erstellt, um den Verkehr an die richtigen Instanzen weiterzuleiten.

| Dienst | Port | Rolle |
| :--- | :--- | :--- |
| `<cluster-name>-rw` | `5432` | **Primary (Lese-/Schreibzugriff)** : leitet den Verkehr ausschließlich an die aktuelle Primärinstanz weiter. Sollte für Anwendungen verwendet werden, die Daten schreiben müssen. |
| `<cluster-name>-ro` | `5432` | **Replicas (nur lesen)** : verteilt den Leseverkehr auf die verfügbaren Replikate. Sollte für Abfragen und Reporting verwendet werden. |
| `<cluster-name>-r` | `5432` | **Read (jede Instanz)** : leitet den Verkehr an die Primärinstanz oder ein beliebiges verfügbares Replikat weiter. |

Sie können diese Dienste in Ihrem Namespace mit dem folgenden Befehl auflisten:

```bash
kubectl get services -n <votre-namespace>
```

---

## 2. Ihre Zugangsdaten (Secrets) abrufen

Aus Sicherheitsgründen werden die Passwörter zufällig generiert und sicher als Kubernetes-*Secrets* gespeichert.

Es werden zwei Haupt-Secrets erstellt:

- `<cluster-name>-superuser` : Zugangsdaten des Systemadministrators (`postgres`).
- `<cluster-name>-app` : Zugangsdaten des Anwendungsbenutzers (`app`).

Um das Passwort des Benutzers `postgres` abzurufen, führen Sie den folgenden Befehl aus (ersetzen Sie die Platzhalter durch Ihre Werte):

```bash
kubectl get secret <cluster-name>-superuser \
  -n <votre-namespace> \
  -o jsonpath='{.data.password}' | base64 -d
```

---

## 3. Verbindung zur Datenbank herstellen

Da Datenbanken standardmäßig nicht über das Internet erreichbar sind, können Sie von Ihrem Arbeitsplatzrechner aus über einen sicheren Tunnel mit `kubectl port-forward` darauf zugreifen.

### Schritt 1: Lokalen Tunnel öffnen

Führen Sie in einem Terminal diesen Befehl aus, um Port 5432 des primären Dienstes (`-rw`) auf Ihren lokalen Computer zu weiterzuleiten:

```bash
kubectl port-forward svc/<cluster-name>-rw 5432:5432 -n <votre-namespace>
```

### Schritt 2: psql-Verbindung starten

Verbinden Sie sich in einem anderen Terminal mit dem Client `psql` :

```bash
psql -h localhost -U postgres
```

*(Sie werden aufgefordert, das in Schritt 2 erhaltene Passwort einzugeben)*

---

## 4. Cluster- und Backupstatus überprüfen

Sie können die Custom Resources von CNPG und Barman abfragen, um den Status Ihrer Infrastruktur einzusehen.

**PostgreSQL-Instanzstatus anzeigen:**
```bash
kubectl get cluster -n <votre-namespace>
kubectl get pods -n <votre-namespace>
```

**Backupstatus (Barman Cloud) anzeigen:**
```bash
# Voir les politiques de sauvegarde planifiées
kubectl get scheduledbackup -n <votre-namespace>

# Voir l'historique des sauvegardes complétées
kubectl get backup -n <votre-namespace>
```