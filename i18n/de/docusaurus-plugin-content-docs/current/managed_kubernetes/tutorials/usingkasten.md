---
title: Anwendungen mit Veeam Kasten sichern
---

import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'

## Einführung

Veeam Kasten K10 ist eine Backup- und Wiederherstellungslösung, die speziell für Kubernetes-Umgebungen entwickelt wurde. Im Cloud Temple Managed Kubernetes-Dienst ist Kasten integriert, um Ihnen den Schutz Ihrer Anwendungen, die Wiederherstellung von Daten bei Bedarf und die Sicherung der Geschäftskontinuität zu ermöglichen.

Dieses Tutorial führt Sie durch die grundlegenden Schritte zum Sichern und Wiederherstellen einer Anwendung mit Kasten.

## Voraussetzungen

Stellen Sie vor dem Start sicher, dass Sie Folgendes haben:

- Einen aktiven Managed Kubernetes-Cluster.
- Den Bezeichner Ihres Clusters (z.B. `ctodev`).
- Eine in Ihrem Cluster bereitgestellte Anwendung, die Sie sichern möchten.

## 1. Zugriff auf das Kasten-Dashboard

Das Kasten-Dashboard ist über eine sichere URL erreichbar, die aus dem Bezeichner Ihres Clusters aufgebaut wird.

1. **Erstellen Sie die Zugriffs-URL**:
    Die URL basiert auf folgendem Schema: `https://k10.external-secured.<bezeichner>.mk.ms-cloud-temple.com/k10/`
    Ersetzen Sie `<bezeichner>` durch den Bezeichner Ihres Clusters. Wenn Ihr Bezeichner beispielsweise `ctodev` ist, lautet die URL: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.

2. **Navigieren Sie zur URL** in Ihrem Browser.

    :::info Sicherheitshinweis
    Der Zugriff auf diese URL ist auf die öffentlichen IP-Adressen beschränkt, die Sie angegeben haben. Wenn Sie keine Verbindung herstellen können, stellen Sie sicher, dass Ihre IP-Adresse autorisiert ist, indem Sie den Cloud Temple-Support kontaktieren.
    :::

<img src={k10dashboard} />

:::tip[Integrierter Schnellstart-Leitfaden]
Die Kasten-Konsole enthält einen interaktiven Schnellstart-Leitfaden auf ihrer Startseite. Folgen Sie ihm gerne für eine erste praktische Einführung direkt über die Oberfläche.
:::

## 2. Backup-Speicher verstehen

Standardmäßig ist Kasten vorkonfiguriert, um den Objektspeicherdienst (S3) von Cloud Temple zu nutzen, um Ihre Backups sicher und dauerhaft zu speichern.

Sie müssen nichts konfigurieren. Der Speicherort ist bereits im Kasten-Dashboard unter **Settings > Locations** definiert. Diese Konfiguration stellt sicher, dass Ihre Daten auf souveräner Infrastruktur gespeichert werden.

<img src={k10s3location} />

:::info[Kostenmodell]
Der Veeam Kasten-Dienst ist im Managed Kubernetes-Angebot enthalten. Der Backup-Speicher auf unserem souveränen S3 wird nutzungsbasiert abgerechnet. Weitere Details finden Sie in unserer Preisliste.
:::

## 3. Eine Backup-Richtlinie erstellen

Eine Backup-Richtlinie (`Policy`) ist eine Reihe von Regeln, die definieren, wann und wie Ihre Anwendungen gesichert werden sollen.

:::warning[Vorhandene Backup-Richtlinie]
Eine Backup-Richtlinie namens `infra-backups` ist bereits in Ihrer Kasten-Instanz konfiguriert. Diese Richtlinie stellt die Sicherung der mit dem Cluster gelieferten wesentlichen Komponenten sicher.

<img src={k10infrabackups} />

**Ändern oder löschen Sie diese Richtlinie nicht.**

Sie müssen Ihre eigenen Richtlinien erstellen, um die von Ihnen bereitgestellten Anwendungen zu sichern.
:::

1. Navigieren Sie im Kasten-Dashboard zum Abschnitt **Policies** und klicken Sie auf **Create New Policy**.

2. **Benennen Sie Ihre Richtlinie**: Geben Sie einen beschreibenden Namen an, z.B. `backup-my-app-daily`.

3. **Definieren Sie die Häufigkeit (Action)**:
    - **Action**: `Snapshot`.
    - **Frequency**: Wählen Sie die für Sie passende Häufigkeit (z.B. `Daily` um `02:00`).

4. **Wählen Sie die zu sichernden Ressourcen aus**:
    - **Select resources by**: Sie können Anwendungen nach Name (`Application Name`), nach Namespace (`Namespace`) oder nach Labels auswählen.
    - Um alle Anwendungen eines Namespaces zu sichern, wählen Sie `Namespace` und wählen Sie den gewünschten Namespace aus.

5. **Klicken Sie auf `Create Policy`**, um zu speichern.

Die Richtlinie wird automatisch in der definierten Häufigkeit ausgeführt. Sie können auch eine manuelle Ausführung starten, indem Sie auf die „Play"-Schaltfläche (▶️) neben der Richtlinie klicken.

## 4. Eine Anwendung wiederherstellen

Kasten erleichtert die Wiederherstellung einer Anwendung auf ihren vorherigen Zustand von einem Wiederherstellungspunkt aus.

1. Gehen Sie im Dashboard zum Abschnitt **Applications**. Sie sehen dort die Liste Ihrer Anwendungen und ihren Compliance-Status bezüglich der Backup-Richtlinien.

2. **Wählen Sie die Anwendung aus**, die Sie wiederherstellen möchten.

3. **Wählen Sie einen Wiederherstellungspunkt**:
    Die Anwendungsseite zeigt eine Liste der verfügbaren Wiederherstellungspunkte an. Wählen Sie den gewünschten aus und klicken Sie auf **Restore**.

4. **Konfigurieren Sie die Wiederherstellung**:
    - Sie können wählen, ob Sie in einem neuen Namespace wiederherstellen oder die vorhandene Anwendung ersetzen möchten. In diesem Tutorial ersetzen wir die vorhandene Anwendung.
    - Klicken Sie auf **Restore**, um den Prozess zu starten.

Kasten stellt nun die Anwendung in dem im Snapshot erfassten Zustand wieder her. Sie können den Fortschritt im Dashboard verfolgen.

## 5. Backup-Sicherheit

Der Schutz Ihrer Backup-Daten hat höchste Priorität. Die Integration von Kasten im Managed Kubernetes-Angebot erfüllt die höchsten Sicherheitsstandards.

- **Verschlüsselung**: Gemäß den SecNumCloud-Anforderungen werden alle Ihre Backups verschlüsselt. Die Daten werden während der Übertragung zum S3-Speicher mit dem **TLS 1.3**-Protokoll und im Ruhezustand in den Speicher-Buckets mit dem **AES-256**-Algorithmus verschlüsselt.

- **Berechtigungsverwaltung**: Der Zugriff auf die Kasten-Oberfläche und ihre Funktionen wird durch ein auf Kubernetes RBAC basierendes Berechtigungssystem gesteuert. Nur autorisierte Benutzer können Backup- und Wiederherstellungsrichtlinien erstellen, ändern oder ausführen, was eine strikte Governance Ihrer Backup-Operationen gewährleistet.

## Fazit

Sie haben gelernt, wie Sie Veeam Kasten für grundlegende Backup- und Wiederherstellungsvorgänge in Ihrem Managed Kubernetes-Cluster verwenden. Kasten bietet viele erweiterte Funktionen, wie z.B. die Migration von Anwendungen zwischen Clustern und granulare Aufbewahrungsrichtlinien, die Sie erkunden können, um Ihre Datenschutzstrategie zu stärken.

Weitere Informationen finden Sie in der [offiziellen Kasten K10-Dokumentation](https://docs.kasten.io/latest/).
