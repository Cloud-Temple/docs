---
title: Anwendungen mit Veeam Kasten sichern
---

import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'

## Einführung

Veeam Kasten K10 ist eine Backup- und Wiederherstellungslösung, die speziell für Kubernetes-Umgebungen entwickelt wurde. Im Managed Kubernetes-Produkt von Cloud Temple ist Kasten integriert, um Ihnen den Schutz Ihrer Anwendungen, die Wiederherstellung von Daten bei Bedarf und die Sicherstellung Ihrer Geschäftskontinuität zu ermöglichen.

Dieses Tutorial führt Sie durch die grundlegenden Schritte zum Sichern und Wiederherstellen einer Anwendung mit Kasten.

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über die folgenden Elemente verfügen:

- Ein aktiver Managed Kubernetes-Cluster.
- Die Cluster-ID (z. B. `ctodev`).
- Eine in Ihrem Cluster bereitgestellte Anwendung, die Sie sichern möchten.

## 1. Zugriff auf das Kasten-Dashboard

Das Kasten-Dashboard ist über eine sichere URL zugänglich, die auf der Basis Ihrer Cluster-ID erstellt wird.

1. **Erstellen Sie die Zugriffs-URL** :
    Die URL basiert auf dem folgenden Muster: `https://k10.external-secured.<identifiant>.mk.ms-cloud-temple.com/k10/`
    Ersetzen Sie `<identifiant>` durch die ID Ihres Clusters. Wenn Ihre ID beispielsweise `ctodev` lautet, lautet die URL: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.

2. **Rufen Sie die URL** in Ihrem Browser auf.

    :::info Hinweis zur Sicherheit
    Der Zugriff auf diese URL ist auf die von Ihnen angegebenen öffentlichen IP-Adressen beschränkt. Falls Sie sich nicht anmelden können, stellen Sie sicher, dass Ihre IP-Adresse freigegeben ist, indem Sie den Cloud Temple Support kontaktieren.
    :::

<img src={k10dashboard} />

:::tip[Integrierter Schnellstart-Leitfaden
]
Die Kasten-Konsole enthält einen interaktiven Schnellstart-Leitfaden auf ihrer Startseite. Nutzen Sie diesen gerne für den ersten Einstieg direkt über die Oberfläche.
:::

## 2. Sicherungsspeicher verstehen

Standardmäßig ist Kasten so vorkonfiguriert, dass der Objektspeicherdienst (S3) von Cloud Temple zur sicheren und dauerhaften Speicherung Ihrer Sicherungen verwendet wird.

Sie müssen keine Konfiguration vornehmen. Der Speicherort ist bereits im Kasten-Dashboard unter **Settings > Locations** festgelegt. Diese Konfiguration stellt sicher, dass Ihre Daten auf einer souveränen Infrastruktur gespeichert werden.

<img src={k10s3location} />

:::info[Kostenmodell
]
Der Veeam Kasten-Dienst ist im Produkt Managed Kubernetes enthalten. Die Speicherung der Sicherungen auf unserem souveränen S3 wird nutzungsbasiert abgerechnet. Weitere Details finden Sie in unserer Preisliste.
:::

## 3. Eine Sicherungsrichtlinie erstellen

Eine Sicherungsrichtlinie (`Policy`) ist eine Reihe von Regeln, die festlegen, wann und wie Ihre Anwendungen gesichert werden.

:::warning[Bestehende Sicherungsrichtlinie
]
Eine Sicherungsrichtlinie mit dem Namen `infra-backups` ist in Ihrer Kasten-Instanz bereits konfiguriert. Diese Richtlinie sichert die mit dem Cluster gelieferten Kernkomponenten.

<img src={k10infrabackups} />

**Ändern oder löschen Sie diese Richtlinie nicht.**

Sie müssen Ihre eigenen Richtlinien erstellen, um die von Ihnen bereitgestellten Anwendungen zu sichern.
:::

1. Navigieren Sie im Kasten-Dashboard zum Bereich **Policies** und klicken Sie auf **Create New Policy**.

2. **Benennen Sie Ihre Richtlinie**: Vergeben Sie einen beschreibenden Namen, z. B. `backup-my-app-daily`.

3. **Legen Sie die Häufigkeit (Action) fest** :
    - **Action**: `Snapshot` (instantané).
    - **Frequency**: Wählen Sie die gewünschte Häufigkeit (par exemple, `Daily` à `02:00`).

4. **Wählen Sie die zu sichernden Ressourcen aus** :
    - **Select resources by**: Sie können Anwendungen nach Name (`Application Name`), Namespace (`Namespace`) oder Labels auswählen.
    - Um alle Anwendungen eines Namespaces zu sichern, wählen Sie `Namespace` aus und wählen Sie den gewünschten Namespace.

5. **Klicken Sie auf `Create Policy`**, um zu speichern.

Die Richtlinie wird automatisch im festgelegten Intervall ausgeführt. Sie können auch eine manuelle Ausführung starten, indem Sie auf die Schaltfläche "Play" (▶️) neben der Richtlinie klicken.

## 4. Eine Anwendung wiederherstellen

Kasten erleichtert die Wiederherstellung einer Anwendung auf ihren vorherigen Zustand aus einem Wiederherstellungspunkt.

1. Gehen Sie im Dashboard in den Bereich **Applications**. Dort sehen Sie die Liste Ihrer Anwendungen und deren Konformitätsstatus im Hinblick auf die Sicherungsrichtlinien.

2. **Wählen Sie die Anwendung** aus, die Sie wiederherstellen möchten.

3. **Wählen Sie einen Wiederherstellungspunkt** :
    Die Anwendungsseite zeigt eine Liste der verfügbaren Wiederherstellungspunkte. Wählen Sie den gewünschten Punkt aus und klicken Sie auf **Restore**.

4. **Konfigurieren Sie die Wiederherstellung** :
    - Sie können wählen, ob Sie in einem neuen Namespace wiederherstellen oder die vorhandene Anwendung überschreiben möchten. Für dieses Tutorial werden wir die vorhandene Anwendung überschreiben.
    - Klicken Sie auf **Restore**, um den Prozess zu starten.

Kasten stellt die Anwendung nun auf den im Snapshot erfassten Zustand wieder. Den Fortschritt können Sie im Dashboard verfolgen.

## 5. Backup-Sicherheit

Der Schutz Ihrer Backup-Daten ist eine Priorität. Die Integration von Kasten in das Managed Kubernetes-Produkt entspricht den höchsten Sicherheitsstandards.

- **Verschlüsselung** : Gemäß den SecNumCloud-Anforderungen werden alle Ihre Backups verschlüsselt. Die Daten werden während der Übertragung zum S3-Speicher mit dem Protokoll **TLS 1.3** und im Ruhezustand in den Storage-Buckets mit dem Algorithmus **AES-256** verschlüsselt.

- **Berechtigungsverwaltung** : Der Zugriff auf die Kasten-Oberfläche und deren Funktionen wird durch ein Berechtigungssystem gesteuert, das auf dem Kubernetes-RBAC basiert. Nur autorisierte Benutzer können Backup- und Wiederherstellungsrichtlinien erstellen, ändern oder ausführen, wodurch eine strenge Governance Ihrer Backup-Vorgänge gewährleistet ist.

## Fazit

Sie haben gelernt, wie Sie Veeam Kasten für grundlegende Backup- und Wiederherstellungsvorgänge in Ihrem Managed Kubernetes-Cluster verwenden. Kasten bietet zahlreiche erweiterte Funktionen, wie z. B. die Migration von Anwendungen zwischen Clustern und granulare Aufbewahrungsrichtlinien, die Sie erkunden können, um Ihre Datensicherungsstrategie zu stärken.

Weitere Informationen finden Sie in der [offiziellen Dokumentation von Kasten K10](https://docs.kasten.io/latest/).