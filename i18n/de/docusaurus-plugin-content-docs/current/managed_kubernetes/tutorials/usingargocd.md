---
title: ArgoCD für Ihre GitOps-Deployments verwenden
---

import argocdguestbook from '@site/docs/managed_kubernetes/tutorials/images/argocdguestbook.png'

## Ziele

Dieses Tutorial erklärt, wie Sie **ArgoCD**, das in Ihren **Managed Kubernetes**-Cluster integrierte GitOps-Tool für kontinuierliche Deployments, verwenden. Am Ende dieses Leitfadens werden Sie wissen:

- Was der GitOps-Ansatz ist.
- Wie Sie auf die ArgoCD-Oberfläche zugreifen.
- Wie Sie eine Anwendung mit ArgoCD bereitstellen, um ein Git-Repository zu synchronisieren.

## Das GitOps-Prinzip mit ArgoCD

**GitOps** ist eine Praxis, bei der ein Git-Repository als einzige Quelle der Wahrheit für die Deklaration des gewünschten Zustands Ihrer Infrastruktur und Anwendungen verwendet wird.

**ArgoCD** ist das Tool, das dieses Prinzip umsetzt. Es überwacht kontinuierlich ein Git-Repository und vergleicht den dort definierten Zustand (über Kubernetes-Manifeste) mit dem tatsächlichen Zustand Ihres Clusters. Wenn es eine Abweichung feststellt, wendet es automatisch die Änderungen an, damit der Cluster dem entspricht, was in Git deklariert ist.

Die Vorteile sind zahlreich:

- **Zuverlässige und reproduzierbare Deployments.**
- **Vollständige Nachvollziehbarkeit** aller Änderungen über die Git-Historie.
- **Schnelle Wiederherstellung** nach einem Vorfall durch Rückkehr zu einem früheren Commit.
- **Verbesserte Sicherheit** durch Einschränkung des direkten Clusterzugangs.

## Zugriff auf die ArgoCD-Oberfläche

Die ArgoCD-Weboberfläche ist auf einer internen URL Ihres Clusters exponiert. Um darauf zuzugreifen, müssen Sie mit dem internen Netzwerk des Clusters verbunden sein (z.B. über einen Bastion-Host oder ein VPN).

Die zu verwendende URL lautet wie folgt, wobei Sie `<ihr-cluster-bezeichner>` ersetzen:

`http://argocd.internal.<ihr-cluster-bezeichner>.mk.ms-cloud-temple.com`

Sie können die interne IP-Adresse des ArgoCD-Ingress mit folgendem Befehl abrufen:

```bash
kubectl get ingress argocd-server -n argocd
```

:::info
Das Passwort für das `admin`-Konto wird Ihnen von den Cloud Temple-Teams bei der Lieferung Ihres Clusters mitgeteilt.
:::

## Eine Anwendung mit ArgoCD bereitstellen

Wir werden nun eine Testanwendung mit dem GitOps-Ansatz bereitstellen.

### 1. Das Git-Repository

ArgoCD benötigt ein Git-Repository mit den Kubernetes-Manifesten der bereitzustellenden Anwendung. Für dieses Tutorial verwenden wir das ArgoCD-Beispiel-Repository: `https://github.com/argoproj/argocd-example-apps`. Wir werden die `guestbook`-Anwendung bereitstellen, die sich in diesem Repository befindet.

### 2. Den Ziel-Namespace vorbereiten

Damit die Anwendung in einem von Capsule verwalteten Namespace bereitgestellt werden kann, müssen wir zunächst diesen Namespace erstellen und das entsprechende Tenant-Label darauf anwenden.

Führen Sie die folgenden Befehle aus:

```bash
# Erstellt den Namespace
kubectl create namespace guestbook

# Wendet das Label an, um ihn mit dem Capsule-Tenant "default" zu verknüpfen (falls nötig, da der Namespace bei seiner Erstellung wahrscheinlich bereits Ihrem Tenant zugeordnet wurde)
kubectl label namespace guestbook capsule.clastix.io/tenant=default
```

### 3. Die Anwendung in ArgoCD erstellen

Da der Namespace nun bereit ist, können wir ArgoCD die Anwendung deklarieren.

1. Erstellen Sie eine Datei namens `app-guestbook.yaml` mit folgendem Inhalt:

    ```yaml
    apiVersion: argoproj.io/v1alpha1
    kind: Application
    metadata:
      name: guestbook
      namespace: argocd
    spec:
      project: default
      source:
        repoURL: https://github.com/argoproj/argocd-example-apps.git
        targetRevision: HEAD
        path: guestbook
      destination:
        server: https://kubernetes.default.svc
        namespace: guestbook
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
    ```

    Dieses Manifest weist ArgoCD an:
    - Eine Anwendung namens `guestbook` zu erstellen.
    - Das `argocd-example-apps`-Repository zu überwachen.
    - Den Fokus auf den `guestbook`-Ordner in diesem Repository zu legen.
    - Die im `guestbook`-Namespace des lokalen Clusters gefundenen Manifeste bereitzustellen.
    - Die Synchronisierung automatisch aufrechtzuerhalten (`automated`).

2. Sie haben zwei Möglichkeiten, die Anwendung in ArgoCD zu erstellen:

    **Option A: Über `kubectl` (GitOps-Ansatz)**

    Wenden Sie dieses Manifest direkt auf Ihren Cluster an. Dies ist die empfohlene Methode, da sie dem GitOps-Prinzip der deklarativen Verwaltung folgt.

    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Option B: Über die ArgoCD-Weboberfläche**

    Sie können die Anwendung auch direkt über die grafische Oberfläche erstellen:
    - Klicken Sie in der ArgoCD-UI auf **"+ NEW APP"**.
    - Klicken Sie oben rechts im Erstellungsbildschirm auf **"EDIT AS YAML"**.
    - Fügen Sie den Inhalt Ihrer Datei `app-guestbook.yaml` in den Editor ein.
    - Klicken Sie auf **"CREATE"**.

### 4. Die Synchronisierung überprüfen

Sobald Sie das Manifest anwenden, erkennt ArgoCD diese neue `Application`-Ressource und beginnt seine Arbeit.

1. **Über die Weboberfläche:**
    - Melden Sie sich bei der ArgoCD-Oberfläche an.
    - Sie sollten eine neue Karte für die `guestbook`-Anwendung sehen.
    - Nach einigen Augenblicken sollte ihr Status auf `Healthy` und `Synced` wechseln.
    - Durch Klicken auf die Karte können Sie alle Kubernetes-Ressourcen (Deployment, Service, etc.) visualisieren, die erstellt wurden.

<img src={argocdguestbook} />

1. **Über die Befehlszeile:**
    - Überprüfen Sie, dass der `guestbook`-Namespace erstellt wurde:

      ```bash
      kubectl get ns guestbook
      ```

    - Überprüfen Sie, dass die Anwendungsressourcen ordnungsgemäß in diesem Namespace bereitgestellt wurden:

      ```bash
      kubectl get all -n guestbook
      NAME                                READY   STATUS    RESTARTS   AGE
      pod/guestbook-ui-85db984648-br6r2   1/1     Running   0          19m

      NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
      service/guestbook-ui   ClusterIP   10.111.160.90   <none>        80/TCP    19m

      NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
      deployment.apps/guestbook-ui   1/1     1            1           19m

      NAME                                      DESIRED   CURRENT   READY   AGE
      replicaset.apps/guestbook-ui-85db984648   1         1         1       19m
      ```

### 5. Der GitOps-Zyklus

Wenn Sie nun ein Manifest im Git-Repository ändern, erkennt ArgoCD die Änderung und aktualisiert die Anwendung im Cluster automatisch. Das ist die Magie von GitOps!

## Bereinigung

Um die Anwendung und alle zugehörigen Ressourcen zu löschen, können Sie einfach die ArgoCD `Application`-Ressource löschen.

1. **Über die Weboberfläche:**
    - Finden Sie in der ArgoCD-UI die `guestbook`-Anwendung.
    - Klicken Sie auf die drei Punkte (...), um das Menü zu öffnen, und wählen Sie **"Delete"**.
    - Aktivieren Sie die Option **"Foreground"**, um sicherzustellen, dass alle verwalteten Ressourcen (Pods, Services, etc.) ebenfalls in Kaskade gelöscht werden.
2. **Über `kubectl`:**
    - Löschen Sie die erstellte Datei `app-guestbook.yaml`:

      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD wird nun alle Komponenten der `guestbook`-Anwendung löschen. Sobald die Lösch-Synchronisierung abgeschlossen ist, wird der `guestbook`-Namespace leer sein. Sie können ihn dann mit folgendem Befehl löschen:

```bash
kubectl delete namespace guestbook
```

:::info Weiterführend: Secrets-Verwaltung
Dieses Tutorial verwendet ein öffentliches Repository ohne sensible Daten. Für Ihre Produktionsanwendungen ist es entscheidend, niemals Secrets (Passwörter, API-Schlüssel) im Klartext in Ihrem Git-Repository zu speichern. Lösungen wie **Sealed Secrets** oder **HashiCorp Vault** integrieren sich mit ArgoCD, um Ihre Secrets sicher zu verwalten. Ein zukünftiges Tutorial wird diesen Ansatz detailliert beschreiben.
:::

## Fazit

Sie haben Ihre erste Anwendung mit ArgoCD nach GitOps-Prinzipien bereitgestellt. Dieser leistungsstarke Ansatz ermöglicht es Ihnen, Ihre Deployments deklarativ, zuverlässig und sicher zu verwalten. Wir ermutigen Sie, ihn für alle Ihre Anwendungen auf Managed Kubernetes zu übernehmen.
