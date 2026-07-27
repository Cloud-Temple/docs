---
title: Sichern Ihrer Anwendungen mit Veeam Kasten
---


import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'

## Einführung

Veeam Kasten K10 ist eine Backup- und Wiederherstellungslösung, die speziell für Kubernetes-Umgebungen entwickelt wurde. Im Cloud Temple Managed Kubernetes-Produkt ist Kasten integriert, um Ihnen zu ermöglichen, Ihre Anwendungen zu schützen, Daten bei Bedarf wiederherzustellen und die Geschäftskontinuität zu gewährleisten.

Dieses Tutorial führt Sie durch die grundlegenden Schritte zum Sichern und Wiederherstellen einer Anwendung mit Kasten.

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie über Folgendes verfügen:

- Ein aktiver Managed Kubernetes-Cluster.
- Die Cluster-ID (z. B. `ctodev`).
- Eine in Ihrem Cluster bereitgestellte Anwendung, die Sie sichern möchten.

## 1. Zugriff auf das Kasten-Dashboard

Das Kasten-Dashboard ist über eine sichere URL zugänglich, die auf der Basis Ihrer Cluster-ID erstellt wird.

1. **Erstellen Sie die Zugriffs-URL** :
   Die URL basiert auf dem folgenden Muster: `https://k10.external-secured.<identifiant>.mk.ms-cloud-temple.com/k10/`
   Ersetzen Sie `<identifiant>` durch die ID Ihres Clusters. Wenn Ihre ID beispielsweise `ctodev` lautet, lautet die URL: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.
2. **Rufen Sie die URL** in Ihrem Browser auf.

   > ℹ️Hinweis zur Sicherheit
   > Der Zugriff auf diese URL ist auf die von Ihnen angegebenen öffentlichen IP-Adressen beschränkt. Wenn Sie sich nicht verbinden können, stellen Sie sicher, dass Ihre IP-Adresse freigeschaltet ist, indem Sie den Cloud Temple-Support kontaktieren.
   >

<img src={k10dashboard} />

> ℹ️[Integrierte Schnellstart-Anleitung] Die Kasten-Konsole enthält eine interaktive Schnellstart-Anleitung auf ihrer Startseite. Folgen Sie ihr gerne für eine erste Einführung direkt über die Oberfläche.

## 2. Die Backup-Speicherung verstehen

Standardmäßig ist Kasten so vorkonfiguriert, dass er den Objektspeicher (S3) von Cloud Temple verwendet, um Ihre Backups sicher und dauerhaft zu speichern.

Sie müssen keine Konfiguration vornehmen. Der Speicherort ist bereits im Kasten-Dashboard unter **Settings > Locations** festgelegt. Diese Konfiguration stellt sicher, dass Ihre Daten auf einer souveränen Infrastruktur gespeichert werden.

<img src={k10s3location} />

> ℹ️[Modèle de coût] Der Veeam Kasten-Dienst ist im Managed Kubernetes-Produkt enthalten. Die Speicherung von Backups auf unserem souveränen S3 wird nach Verbrauch abgerechnet. Weitere Details finden Sie in unserer Preisübersicht.

## 3. Eine Backup-Richtlinie erstellen

Eine Backup-Richtlinie (`Policy`) ist eine Sammlung von Regeln, die festlegen, wann und wie Ihre Anwendungen gesichert werden.

⚠[Bestehende Backup-Richtlinie] Eine Backup-Richtlinie mit dem Namen `infra-backups` ist bereits in Ihrer Kasten-Instanz konfiguriert. Diese Richtlinie sichert die mit dem Cluster ausgelieferten Kernkomponenten.

<img src={k10infrabackups} />

**Ändern oder löschen Sie diese Richtlinie nicht.**

Sie müssen Ihre eigenen Richtlinien erstellen, um die von Ihnen bereitgestellten Anwendungen zu sichern.

1. Navigieren Sie im Kasten-Dashboard zum Abschnitt **Policies** und klicken Sie auf **Create New Policy**.
2. **Nennen Sie Ihre Richtlinie**: Vergeben Sie einen beschreibenden Namen, z. B. `backup-my-app-daily`.
3. **Legen Sie die Häufigkeit (Action) fest**:

   - **Action**: `Snapshot` (Schnappschuss).
   - **Frequency**: Wählen Sie die für Sie passende Häufigkeit (z. B. `Daily` um `02:00`).
4. **Wählen Sie die zu sichernden Ressourcen aus**:

   - **Select resources by**: Sie können Anwendungen nach Name (`Application Name`), Namespace (`Namespace`) oder Labels auswählen.
   - Um alle Anwendungen eines Namespaces zu sichern, wählen Sie `Namespace` und wählen Sie den gewünschten Namespace aus.
5. **Klicken Sie auf `Create Policy`**, um zu speichern.

Die Richtlinie wird automatisch mit der festgelegten Häufigkeit ausgeführt. Sie können auch eine manuelle Ausführung starten, indem Sie auf die Schaltfläche "Play" (▶️) neben der Richtlinie klicken.

### Schnelle Sicherungsrichtlinien

Um die Einarbeitung in Kasten zu erleichtern, hat Cloud-Temple *24 Sicherungsrichtlinien* bereitgestellt, die zu festen Zeiten Sicherungen durchführen und eine Aufbewahrungsdauer von 7 Tagen in S3 vorsehen.

![K10policies](images/k10policies.png)

Diese Richtlinien gelten für **Namespaces, die über ein Label verfügen, das angibt, welche Richtlinie(n) angewendet werden soll(en).**

Beispielsweise wird ein Namespace mit dem Label **kasten-daily05-r7d = true** täglich um 05:00 Uhr UTC in S3 gesichert, mit einer Aufbewahrungsdauer von 7 Tagen.

## 4. Eine Anwendung wiederherstellen

Kasten erleichtert die Wiederherstellung einer Anwendung auf ihren vorherigen Zustand aus einem Wiederherstellungspunkt.

1. Gehen Sie im Dashboard zur Sektion **Anwendungen**. Dort sehen Sie die Liste Ihrer Anwendungen und deren Konformitätsstatus im Hinblick auf die Sicherungsrichtlinien.
2. **Wählen Sie die Anwendung** aus, die Sie wiederherstellen möchten.
3. **Wählen Sie einen Wiederherstellungspunkt** :
   Die Anwendungsseite zeigt eine Liste der verfügbaren Wiederherstellungspunkte. Wählen Sie den gewünschten Punkt aus und klicken Sie auf **Restore**.
4. **Konfigurieren Sie die Wiederherstellung** :

   - Sie können wählen, ob Sie in einem neuen Namespace wiederherstellen oder die vorhandene Anwendung ersetzen möchten. Für dieses Tutorial ersetzen wir die vorhandene Anwendung.
   - Klicken Sie auf **Restore**, um den Prozess zu starten.

Kasten stellt nun die Anwendung auf den im Snapshot festgehaltenen Zustand wieder her. Sie können den Fortschritt im Dashboard verfolgen.

## 5. Sicherheit der Sicherungen

Der Schutz Ihrer Sicherungsdaten hat höchste Priorität. Die Integration von Kasten in das Managed Kubernetes-Produkt entspricht den höchsten Sicherheitsstandards.

- **Verschlüsselung** : Gemäß den Anforderungen von SecNumCloud sind alle Ihre Sicherungen verschlüsselt. Die Daten werden während der Übertragung zum S3-Speicher mit dem Protokoll **TLS 1.3** und im Ruhezustand in den Speicher-Buckets mit dem Algorithmus **AES-256** verschlüsselt.
- **Berechtigungsverwaltung** : Der Zugriff auf die Kasten-Oberfläche und deren Funktionen wird durch ein auf Kubernetes-RBAC basierendes Berechtigungssystem gesteuert. Nur autorisierte Benutzer können Sicherungs- und Wiederherstellungsrichtlinien erstellen, ändern oder ausführen, was eine strikte Governance Ihrer Sicherungsoperationen gewährleistet.

## Fazit

Sie haben gelernt, Veeam Kasten für grundlegende Sicherungs- und Wiederherstellungsvorgänge in Ihrem Managed Kubernetes-Cluster zu verwenden. Kasten bietet zahlreiche erweiterte Funktionen, wie z. B. die Migration von Anwendungen zwischen Clustern und granulare Aufbewahrungsrichtlinien, die Sie erkunden können, um Ihre Strategie zum Schutz Ihrer Daten zu stärken.

Weitere Informationen finden Sie in der [offiziellen Dokumentation zu Kasten K10](https://docs.kasten.io/latest/).