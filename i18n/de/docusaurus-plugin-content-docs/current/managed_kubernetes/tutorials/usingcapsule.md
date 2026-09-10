---
title: Berechtigungen mit Capsule verwalten
---

## Ziele

Dieses Tutorial führt Sie durch die Verwendung von **Capsule**, dem integrierten Multi-Tenancy-Tool in Ihrem **Managed Kubernetes**-Cluster. Am Ende dieses Leitfadens werden Sie Folgendes wissen:

- Was ein **Capsule-Tenant** ist und wie er Ihre Berechtigungen organisiert.
- Wie Sie **Namespaces** innerhalb Ihres Tenants erstellen und verwalten.
- Wie **Sicherheitsrichtlinien und Quotas** auf Ihre Projekte angewendet werden.

## Was ist Capsule ?

Capsule ist ein Kubernetes-Controller, der das Konzept des **Tenant** einführt, um mehrere Namespaces zu gruppieren. Im Managed Kubernetes-Produkt von Cloud Temple wird Capsule eingesetzt, um Ihnen die autonome Verwaltung Ihrer eigenen Namespaces zu delegieren, ohne dass ein Cluster-Administrator eingreifen muss.

Bei der Auslieferung Ihres Clusters haben die Teams von Cloud Temple einen ersten Tenant für Sie erstellt und Sie als **Eigentümer (Tenant Owner)** dafür benannt.

> ℹ️Standardmäßig heißt Ihr erster Tenant `default` und der Service-Account des Eigentümers ist `defaultapp`.

Weitere Informationen zum Projekt finden Sie auf der [offiziellen Capsule-Website](https://projectcapsule.dev/).

## Schritt 1: Den Namen Ihres Tenants ermitteln

Als `Tenant Owner` verfügen Sie nicht über die Berechtigungen, die Ressource `Tenant` direkt aufzulisten. Der Name Ihres Tenants wird Ihnen von den Cloud Temple-Teams bei der Übergabe des Services mitgeteilt.

Falls Sie den Namen Ihres Tenants vergessen haben, können Sie ihn durch Überprüfung der Labels der Namespaces, auf die Sie Zugriff haben, wiederfinden. Der folgende Befehl listet alle Namespaces auf, die einem Capsule-Tenant zugeordnet sind, und zeigt deren Labels an:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Suchen Sie nach dem Label `capsule.clastix.io/tenant`. Der Wert dieses Labels entspricht dem Namen Ihres Tenants. Sie können diesen Namen anschließend verwenden, um zu filtern und ausschließlich die Namespaces Ihres Tenants anzuzeigen:

```bash
# Une fois que vous connaissez le nom de votre tenant, par exemple "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Schritt 2 : Einen neuen Namespace erstellen

Ihr Hauptvorteil als `Tenant Owner` besteht darin, Namespaces selbst erstellen zu können. Sie können dies direkt mit einem einzigen `kubectl`-Befehl ausführen.

Führen Sie den folgenden Befehl aus, um einen Namespace mit dem Namen `mon-projet-dev` zu erstellen:

```bash
kubectl create namespace mon-projet-dev
```

Capsule wird diese Anfrage abfangen. Da Sie Inhaber eines Tenants sind, wird es die Erstellung des Namespace genehmigen und ihn automatisch Ihrem Tenant zuordnen.

## Schritt 3: Überprüfen der Namespace-Zuordnung

Sobald der Namespace erstellt wurde, können Sie überprüfen, ob er erfolgreich Ihrem Tenant zugewiesen wurde.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Sie werden feststellen, dass Capsule Ihrem Namespace ein Label hinzugefügt hat, das angibt, welchem Tenant er angehört. Dieser Mechanismus gewährleistet die Isolierung zwischen den verschiedenen Tenants im Cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Schritt 4 : Verständnis der Richtlinienvererbung

Einer der größten Vorteile von Capsule ist, dass alle Sicherheitsrichtlinien, Ressourcenquoten (`ResourceQuota`) und Ressourcenlimits (`LimitRange`), die auf Tenant-Ebene von den Administratoren definiert werden, von allen erstellten Namespaces **automatisch vererbt** werden.

Dies stellt sicher, dass Ihre Projekte die Verbrauchsgrenzen (CPU, Arbeitsspeicher, Speicher) und Sicherheitsregeln (wie Standard-Netzrichtlinien oder von **Kyverno** definierte Sicherheitsbeschränkungen) einhalten, die für Ihre Umgebung festgelegt wurden, ohne dass Sie diese für jeden Namespace erneut konfigurieren müssen.

> ℹ️ Für Ihren Capsule-Tenant wurden spezifische Quoten festgelegt, um die Nutzung des persistenten Speichers (Ceph-Block, Ceph-Block-norepl und Ceph-FileSystem) auf den im Cluster insgesamt verfügbaren Speicherplatz zu beschränken. Wenn Sie diese Quoten für ein bestimmtes Projekt ändern müssen, richten Sie bitte eine Anfrage an den Cloud Temple Support.

## Conclusion

Dank Capsule verfügen Sie über volle Autonomie bei der Verwaltung der Namespaces Ihrer Teams und profitieren gleichzeitig von einem sicheren, von den Cluster-Administratoren vorkonfigurierten Rahmen. Sie können Namespaces nach Belieben erstellen, ändern und löschen, wobei die erforderlichen Sicherheitsvorkehrungen automatisch angewendet werden.

Falls Sie einen neuen Tenant erstellen müssen, um eine weitere Gruppe von Projekten oder Teams zu isolieren, können Sie dies beim Cloud Temple-Support beantragen.