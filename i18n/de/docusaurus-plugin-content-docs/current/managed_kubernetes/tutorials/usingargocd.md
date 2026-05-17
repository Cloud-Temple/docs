---
title: ArgoCD für Ihre GitOps-Bereitstellungen verwenden
---

import argocdguestbook from '@site/docs/managed_kubernetes/tutorials/images/argocdguestbook.png'

## Ziele

Dieses Tutorial erklärt, wie Sie **ArgoCD** verwenden, das GitOps-Tool für kontinuierliche Bereitstellungen, das in Ihrem **Managed Kubernetes**-Cluster integriert ist. Am Ende dieses Leitfadens wissen Sie:

- Was der GitOps-Ansatz ist.
- Wie Sie auf die ArgoCD-Benutzeroberfläche zugreifen.
- Wie Sie eine Anwendung bereitstellen, indem Sie ArgoCD zur Synchronisierung eines Git-Repositorys nutzen.

## Das Prinzip von GitOps mit ArgoCD

**GitOps** ist eine Praxis, bei der ein Git-Repository als einzige Quelle der Wahrheit verwendet wird, um den gewünschten Zustand Ihrer Infrastruktur und Ihrer Anwendungen zu deklarieren.

**ArgoCD** ist das Tool, das dieses Prinzip umsetzt. Es überwacht kontinuierlich ein Git-Repository und vergleicht den dort definierten Zustand (über Kubernetes-Manifeste) mit dem tatsächlichen Zustand Ihres Clusters. Falls es eine Abweichung erkennt, wendet es die Änderungen automatisch an, damit der Cluster dem in Git deklarierten Zustand entspricht.

Die Vorteile sind zahlreich:

- **Zuverlässige und reproduzierbare Bereitstellungen.**
- **Vollständige Nachverfolgbarkeit** aller Änderungen über die Git-Verlaufshistorie.
- **Schnelle Wiederherstellung** nach einem Vorfall durch Zurückgehen auf einen früheren Commit.
- **Verbesserte Sicherheit** durch die Einschränkung direkter Cluster-Zugriffe.

## Zugriff auf die ArgoCD-Oberfläche

Die ArgoCD-Weboberfläche ist über eine interne URL Ihres Clusters erreichbar. Um darauf zuzugreifen, müssen Sie mit dem internen Netzwerk des Clusters verbunden sein (z. B. über einen Bastion-Host oder ein VPN).

Die zu verwendende URL lautet wie folgt, wobei `<votre-identifiant-de-cluster>` zu remplacer ist :

`http://argocd.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Die interne IP-Adresse des ArgoCD-Ingress können Sie mit dem folgenden Befehl abrufen :

```bash
kubectl get ingress argocd-server -n argocd
```

:::info
Das Passwort für das `admin`-Konto wird Ihnen von den Cloud Temple-Teams bei der Bereitstellung Ihres Clusters bereitgestellt.
:::

## Eine Anwendung mit ArgoCD bereitstellen

Wir werden nun eine Testanwendung mit der GitOps-Approche bereitstellen.

### 1. Das Git-Repository

ArgoCD benötigt ein Git-Repository, das die Kubernetes-Manifeste der bereitzustellenden Anwendung enthält. Für dieses Tutorial verwenden wir das Beispiel-Repository von ArgoCD: `https://github.com/argoproj/argocd-example-apps`. Wir werden die Anwendung `guestbook` bereitstellen, die sich in diesem Repository befindet.

### 2. Vorbereiten des Ziel-Namespace

Damit die Anwendung in einem von Capsule verwalteten Namespace bereitgestellt werden kann, müssen wir diesen Namespace zunächst erstellen und ihm das entsprechende Tenant-Label zuweisen.

Führen Sie die folgenden Befehle aus:

```bash
# Crée le namespace
kubectl create namespace guestbook

# Applique le label pour l'associer au tenant "default" de Capsule (si besoin, car le namespace a surement déjà été associé avec votre tenant lors de sa création)
kubectl label namespace guestbook capsule.clastix.io/tenant=default
```

### 3. Erstellen der Anwendung in ArgoCD

Da der Namespace bereit ist, können wir die Anwendung in ArgoCD anlegen.

1. Erstellen Sie eine Datei mit dem Namen `app-guestbook.yaml` und dem folgenden Inhalt:

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

    Dieses Manifest weist ArgoCD an, Folgendes zu tun:
    - Eine Anwendung mit dem Namen `guestbook` zu erstellen.
    - Das Repository `argocd-example-apps` zu überwachen.
    - Sich auf den Ordner `guestbook` in diesem Repository zu konzentrieren.
    - Die im lokalen Cluster im Namespace `guestbook` gefundenen Manifeste bereitzustellen.
    - Die Synchronisierung automatisch aufrechtzuerhalten (`automated`).

2. Sie haben zwei Optionen zum Erstellen der Anwendung in ArgoCD:

    **Option A: Über `kubectl` (GitOps-Ansatz)**

    Wenden Sie dieses Manifest direkt auf Ihren Cluster an. Dies ist die empfohlene Methode, da sie dem GitOps-Prinzip des deklarativen Managements folgt.

    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Option B: Über die ArgoCD-Weboberfläche**

    Sie können die Anwendung auch direkt über die grafische Oberfläche erstellen:
    - Klicken Sie in der ArgoCD-Benutzeroberfläche auf **"+ NEW APP"**.
    - Klicken Sie oben rechts auf dem Erstellungsbildschirm auf **"EDIT AS YAML"**.
    - Fügen Sie den Inhalt Ihrer Datei `app-guestbook.yaml` in den Editor ein.
    - Klicken Sie auf **"CREATE"**.

### 4. Synchronisierung überprüfen

Sobald Sie das Manifest anwenden, erkennt ArgoCD diese neue `Application`-Ressource und beginnt mit der Arbeit.

1. **Über die Weboberfläche :**
    - Melden Sie sich in der ArgoCD-Weboberfläche an.
    - Sie sollten eine neue Karte für die `guestbook`-Anwendung sehen.
    - Nach einigen Augenblicken sollte sich sein Status in `Healthy` und `Synced` ändern.
    - Durch Klicken auf die Karte können Sie alle erstellten Kubernetes-Ressourcen (Deployment, Service usw.) einsehen.

<img src={argocdguestbook} />

1. **Über die Befehlszeile :**
    - Überprüfen Sie, ob der Namespace `guestbook` erstellt wurde :

      ```bash
      kubectl get ns guestbook
      ```

    - Überprüfen Sie, ob die Ressourcen der Anwendung in diesem Namespace bereitgestellt wurden :

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

Wenn Sie nun ein Manifest im Git-Repository ändern, erkennt ArgoCD die Änderung und aktualisiert die Anwendung automatisch im Cluster. Das ist die Magie von GitOps !

## Bereinigung

Um die Anwendung und alle zugehörigen Ressourcen zu entfernen, können Sie einfach die `Application`-Ressource in ArgoCD löschen.

1. **Über die Weboberfläche:**
    - Suchen Sie in der ArgoCD-UI die Anwendung `guestbook`.
    - Klicken Sie auf die drei Punkte (...), um das Menü zu öffnen, und wählen Sie **"Löschen"**.
    - Aktivieren Sie die Option **"Foreground"**, um sicherzustellen, dass alle verwalteten Ressourcen (Pods, Dienste usw.) ebenfalls kaskadierend gelöscht werden.
2. **Über `kubectl` :**
    - Löschen Sie die von Ihnen erstellte Datei `app-guestbook.yaml` :

      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD löscht nun alle Komponenten der `guestbook`-Anwendung. Sobald die Löschsynchronisation abgeschlossen ist, ist der Namespace `guestbook` leer. Sie können ihn anschließend mit dem folgenden Befehl löschen:

```bash
kubectl delete namespace guestbook
```

:::info[Vertiefende Informationen: Verwaltung von Secrets
]
Dieses Tutorial verwendet ein öffentliches Repository ohne sensible Daten. Für Ihre Produktionsanwendungen ist es entscheidend, niemals Secrets (Passwörter, API-Schlüssel) im Klartext in Ihrem Git-Repository zu speichern. Lösungen wie **Sealed Secrets** oder **HashiCorp Vault** integrieren sich mit ArgoCD, um Ihre Secrets sicher zu verwalten. Ein zukünftiges Tutorial wird diesen Ansatz detailliert beschreiben.
:::

## Fazit

Sie haben Ihre erste Anwendung mit ArgoCD gemäß den GitOps-Prinzipien bereitgestellt. Dieser leistungsstarke Ansatz ermöglicht es Ihnen, Ihre Bereitstellungen deklarativ, zuverlässig und sicher zu verwalten. Wir empfehlen Ihnen, ihn für alle Ihre Anwendungen auf Managed Kubernetes zu nutzen.