---
title: Berechtigungen mit Capsule verwalten
---

## Ziele

Dieses Tutorial führt Sie durch die Verwendung von **Capsule**, dem Multi-Tenancy-Tool, das in Ihren **Managed Kubernetes**-Cluster integriert ist. Am Ende dieses Leitfadens werden Sie wissen:

- Was ein **Capsule-Tenant** ist und wie er Ihre Berechtigungen organisiert.
- Wie Sie **Namespaces innerhalb Ihres Tenants erstellen und verwalten**.
- Wie **Sicherheitsrichtlinien und Kontingente** auf Ihre Projekte angewendet werden.

## Was ist Capsule?

Capsule ist ein Kubernetes-Controller, der das Konzept eines **Tenants** einführt, um mehrere Namespaces zu gruppieren. Im Managed Kubernetes-Angebot von Cloud Temple wird Capsule verwendet, um Ihnen die autonome Verwaltung Ihrer eigenen Namespaces zu übertragen, ohne dass ein Cluster-Administrator eingreifen muss.

Bei der Lieferung Ihres Clusters haben die Cloud Temple-Teams einen ersten Tenant für Sie erstellt und Sie als dessen **Eigentümer (Tenant Owner)** bestimmt.

:::tip
Standardmäßig heißt Ihr erster Tenant `default` und das Dienstkonto des Eigentümers ist `defaultapp`.
:::

Um mehr über das Projekt zu erfahren, können Sie die [offizielle Capsule-Website](https://projectcapsule.dev/) besuchen.

## Schritt 1: Den Namen Ihres Tenants kennen

Als `Tenant Owner` haben Sie keine Berechtigung, die `Tenant`-Ressource direkt aufzulisten. Der Name Ihres Tenants wird Ihnen von den Cloud Temple-Teams bei der Lieferung des Dienstes mitgeteilt.

Wenn Sie den Namen Ihres Tenants vergessen haben, können Sie ihn durch Überprüfen der Labels der Namespaces finden, auf die Sie Zugriff haben. Der folgende Befehl listet alle Namespaces auf, die einem Capsule-Tenant zugeordnet sind, und zeigt deren Labels an:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Suchen Sie nach dem Label `capsule.clastix.io/tenant`. Der Wert dieses Labels ist der Name Ihres Tenants. Sie können dann diesen Namen verwenden, um zu filtern und nur die Namespaces Ihres Tenants anzuzeigen:

```bash
# Sobald Sie den Namen Ihres Tenants kennen, zum Beispiel "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Schritt 2: Einen neuen Namespace erstellen

Ihr Hauptvorteil als `Tenant Owner` ist, dass Sie Namespaces selbst erstellen können. Sie können dies direkt mit einem einzigen `kubectl`-Befehl tun.

Führen Sie den folgenden Befehl aus, um einen Namespace namens `mon-projet-dev` zu erstellen:

```bash
kubectl create namespace mon-projet-dev
```

Capsule wird diese Anfrage abfangen. Da Sie Eigentümer eines Tenants sind, wird es die Erstellung des Namespace autorisieren und ihn automatisch mit Ihrem Tenant verknüpfen.

## Schritt 3: Die Namespace-Zuordnung überprüfen

Sobald der Namespace erstellt ist, können Sie überprüfen, ob er ordnungsgemäß Ihrem Tenant zugeordnet wurde.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Sie werden feststellen, dass Capsule Ihrem Namespace ein Label hinzugefügt hat, das angibt, zu welchem Tenant er gehört. Dies ist der Mechanismus, der die Isolation zwischen den verschiedenen Tenants des Clusters gewährleistet.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Schritt 4: Die Richtlinienvererbung verstehen

Einer der größten Vorteile von Capsule ist, dass alle Sicherheitsrichtlinien, Ressourcenkontingente (`ResourceQuota`) und Ressourcenbereiche (`LimitRange`), die von Administratoren auf Tenant-Ebene definiert wurden, **automatisch von allen Namespaces geerbt werden**, die Sie erstellen.

Dies stellt sicher, dass Ihre Projekte die Verbrauchsgrenzen (CPU, Arbeitsspeicher, Speicher) und Sicherheitsregeln (wie Standard-Netzwerkrichtlinien oder durch **Kyverno** definierte Sicherheitsbeschränkungen) einhalten, die für Ihre Umgebung festgelegt wurden, ohne dass Sie diese für jeden Namespace neu konfigurieren müssen.

:::info
Spezifische Kontingente wurden auf Ihrem Capsule-Tenant gesetzt, um die Nutzung des persistenten Speichers (Ceph-Block und Ceph-FileSystem) auf den im Cluster verfügbaren Gesamtspeicherplatz zu begrenzen. Wenn Sie diese Kontingente für ein bestimmtes Projekt ändern müssen, stellen Sie bitte eine Anfrage beim Cloud Temple-Support.
:::

## Fazit

Dank Capsule verfügen Sie über vollständige Autonomie bei der Verwaltung der Namespaces Ihrer Teams und profitieren gleichzeitig von einem sicheren und von den Cluster-Administratoren vorkonfigurierten Rahmen. Sie können Namespaces nach Belieben erstellen, ändern und löschen, in dem Wissen, dass die notwendigen Schutzmaßnahmen automatisch angewendet werden.

Wenn Sie einen neuen Tenant erstellen möchten, um eine weitere Gruppe von Projekten oder Teams zu isolieren, können Sie dies beim Cloud Temple-Support anfordern.
