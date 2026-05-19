---
title: Berechtigungen mit Capsule verwalten
---

## Ziele

Dieses Tutorial führt Sie in die Verwendung von **Capsule**, dem integrierten Multi-Tenancy-Tool für Ihren **Managed Kubernetes**-Cluster. Am Ende dieses Leitfadens wissen Sie:

- Was ein **Capsule-Tenant** ist und wie er Ihre Berechtigungen organisiert.
- Wie Sie **Namespaces innerhalb Ihres Tenants erstellen und verwalten**.
- Wie **Sicherheitsrichtlinien und Quotas** auf Ihre Projekte angewendet werden.

## Was ist Capsule?

Capsule ist ein Kubernetes-Controller, der das Konzept des **Tenant** einführt, um mehrere Namespaces zu gruppieren. Im Managed Kubernetes von Cloud Temple wird Capsule eingesetzt, um Ihnen die eigenständige Verwaltung Ihrer eigenen Namespaces zu ermöglichen, ohne dass ein Cluster-Administrator eingreifen muss.

Bei der Bereitstellung Ihres Clusters haben die Cloud Temple-Teams einen ersten Tenant für Sie erstellt und Sie als **Eigentümer (Tenant Owner)** bestimmt.

:::tip
Standardmäßig heißt Ihr erster Tenant `default` und das Dienstkonto des Eigentümers ist `defaultapp`.
:::

Weitere Informationen zum Projekt finden Sie auf der [offiziellen Website von Capsule](https://projectcapsule.dev/).

## Schritt 1: Den Namen Ihres Tenants ermitteln

Als `Tenant Owner` haben Sie keine Berechtigungen, um die `Tenant`-Ressource direkt aufzulisten. Der Name Ihres Tenants wird Ihnen von den Cloud Temple-Teams bei der Bereitstellung des Service mitgeteilt.

Falls Sie den Namen Ihres Tenants vergessen haben, können Sie ihn durch Inspektion der Labels der Namespaces ermitteln, auf die Sie Zugriff haben. Der folgende Befehl listet alle Namespaces auf, die an einen Capsule-Tenant gebunden sind, und zeigt deren Labels an:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Suchen Sie nach dem Label `capsule.clastix.io/tenant`. Der Wert dieses Labels entspricht dem Namen Ihres Tenants. Anschließend können Sie diesen Namen verwenden, um zu filtern und nur die Namespaces Ihres Tenants anzuzeigen:

```bash
# Une fois que vous connaissez le nom de votre tenant, par exemple "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Schritt 2: Erstellen eines neuen Namespaces

Ihr Hauptvorteil als `Tenant Owner` besteht darin, Namespaces selbst erstellen zu können. Dies lässt sich direkt mit einem einzigen `kubectl`-Befehl durchführen.

Führen Sie den folgenden Befehl aus, um ein Namespace mit dem Namen `mon-projet-dev` zu erstellen:

```bash
kubectl create namespace mon-projet-dev
```

Capsule fängt diese Anfrage ab. Da Sie Eigentümer eines Tenants sind, wird es die Erstellung des Namespaces genehmigen und diesen automatisch Ihrem Tenant zuordnen.

## Schritt 3: Überprüfung der Namespace-Zuordnung

Nachdem der Namespace erstellt wurde, können Sie prüfen, ob er erfolgreich Ihrem Tenant zugeordnet wurde.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Sie werden feststellen, dass Capsule ein Label zu Ihrem Namespace hinzugefügt hat, das angibt, zu welchem Tenant er gehört. Genau dieser Mechanismus gewährleistet die Isolation zwischen den verschiedenen Tenants im Cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Schritt 4: Vererbung von Richtlinien verstehen

Einer der größten Vorteile von Capsule besteht darin, dass alle Sicherheitsrichtlinien, Ressourcenquotas (`ResourceQuota`) und Ressourcenbegrenzungen (`LimitRange`), die auf Tenant-Ebene von Administratoren festgelegt wurden, **automatisch an alle von Ihnen erstellten Namespaces vererbt werden**.

Dies stellt sicher, dass Ihre Projekte die für Ihre Umgebung festgelegten Ressourcenlimits (CPU, Arbeitsspeicher, Speicher) und Sicherheitsregeln (wie Standard-Netzwerkrichtlinien oder Sicherheitsbeschränkungen, die von **Kyverno** definiert wurden) einhalten, ohne dass Sie diese für jeden Namespace neu konfigurieren müssen.

:::info
Für Ihren Capsule-Tenant wurden spezifische Quotas festgelegt, um die Nutzung von persistentem Speicher (Ceph-Block und Ceph-FileSystem) auf den im Cluster verfügbaren Gesamtspeicher zu begrenzen. Wenn Sie diese Quotas für ein bestimmtes Projekt ändern müssen, richten Sie bitte eine Anfrage an den Cloud Temple Support.
:::

## Fazit

Dank Capsule verfügen Sie über volle Autonomie bei der Verwaltung der Namespaces Ihrer Teams, während Sie gleichzeitig von einem von den Cluster-Administratoren vorkonfigurierten und sicheren Framework profitieren. Sie können Namespaces nach Bedarf erstellen, ändern und löschen, wobei die erforderlichen Schutzmechanismen automatisch angewendet werden.

Falls Sie einen neuen Tenant erstellen müssen, um eine weitere Gruppe von Projekten oder Teams zu isolieren, können Sie diesbezüglich eine Anfrage an den Cloud-Temple-Support richten.