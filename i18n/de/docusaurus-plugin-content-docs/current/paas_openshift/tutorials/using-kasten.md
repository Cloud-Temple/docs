---
title: Konfigurieren von Backups mit Kasten auf dem S3 SNC Cloud Temple
---

---

## Ziele

Das Hauptziel dieses Leitfadens ist es, Ihnen zu zeigen, wie Sie einen **S3 SNC (SecNumCloud)**-Speicher in Kasten konfigurieren, um Ihre Backups in der Cloud-Infrastruktur von Cloud Temple durchzuführen und zu verwalten. Dieser Leitfaden deckt die notwendigen Schritte ab, um diese Integration in einer OpenShift-Umgebung zu konfigurieren.

---

## Bekannte Einschränkungen

Im Rahmen dieser Konfiguration:  

- **Zugang zum Cloud Temple S3-Angebot** : Sie müssen über das von Cloud Temple bereitgestellte S3-Angebot verfügen (Zugriffsschlüssel und geheimer Schlüssel).

---

## Hauptmerkmale

- **Sicher und zertifiziert** : Cloud Temple bietet einen S3-Speicher, der den **SecNumCloud**-Standards entspricht und zertifiziert und gesichert ist.
- **Einfache Integration mit Kasten** : Die intuitive Benutzeroberfläche von Kasten ermöglicht eine schnelle und direkte Konfiguration.
- **Geeignet für moderne Umgebungen** : Diese Lösung ist für die einfache Einbindung in Kubernetes-Cluster konzipiert, die mit OpenShift betrieben werden.

---

## Softwareversionen

Stellen Sie sicher, dass die folgenden Softwareversionen und Tools installiert sind, um eine optimale Kompatibilität zu gewährleisten:

- **Kasten K10**: v5.5.10 oder höher
- **OpenShift CLI**: v4.15.6 oder höher
- **Kubernetes**: v1.24 oder höher (über OpenShift)

---

## Voraussetzungen

Um diesem Leitfaden zu folgen, stellen Sie sicher, dass Sie die folgenden Elemente haben:

1. **Zugang zur Kasten-Benutzeroberfläche**: Sie müssen Zugriff auf das in Ihrem OpenShift-Cluster bereitgestellte Kasten-Dashboard haben.
2. **Von Cloud Temple bereitgestellte S3-Schlüssel**:
   - Zugangsschlüssel (Access Key)
   - Geheimschlüssel (Secret Key)
3. **Vorkonfigurierter Bucket**: Ein Bucket im Cloud Temple S3, z.B. `demobackup`.
4. **Kubernetes-Berechtigungen**: Sie müssen über administrative Berechtigungen im Namespace Kasten (`kasten-io`) verfügen, um Konfigurationen durchzuführen.

---

## Demonstrationsplan

### Überblick über die Schritte

1. Vorbereitung der Kasten- und OpenShift-Umgebung.
2. Konfiguration eines S3-Profils in der Kasten-Benutzeroberfläche.
3. Erstellung und Validierung von Backup-Jobs, die auf den konfigurierten S3-Speicherort verweisen.

---

## Benötigte Dateien

Es sind keine spezifischen Dateien für diese Konfiguration erforderlich, aber Sie benötigen die folgenden Informationen von Cloud Temple:

- **S3-Zugangsschlüssel**
- **S3-Geheimschlüssel**
- **S3 SNC-Endpunkt-URL**: Beispiel `xxxxx.s3.fr1.cloud-temple.com`.
- **Name Ihres Buckets**: Beispiel `demobackup`.

---

## Bereitstellungsverlauf

### 1. Zugriff auf Kasten über OpenShift

Greifen Sie auf die grafische Benutzeroberfläche Ihres OpenShift-Clusters zu:

1. Melden Sie sich bei der OpenShift-Konsole an und navigieren Sie zum Namespace, in dem Kasten bereitgestellt wird (standardmäßig `kasten-io`).
2. Gehen Sie zum Tab **Applications** und klicken Sie auf den Weiterleitungslink zum Kasten-Dashboard.
3. Sobald Sie in Kasten sind, stellen Sie sicher, dass die Abhängigkeiten funktionieren (Verbindung zu den Knoten, verfügbare Ressourcen).

---

### 2. Erstellen eines S3-Profils in Kasten

1. Gehen Sie im Kasten-Dashboard zum Abschnitt **"Locations"** (Speicherorte).
2. Klicken Sie auf die Schaltfläche **"Add New Location"** (Neuen Speicherort hinzufügen).
3. Wählen Sie den Speichertyp **"S3 Compatible Storage"**.
4. Geben Sie die folgenden Parameter ein:

   - **Type**: S3 Compatible Storage
   - **Region**: `FR1`
   - **Bucket Name**: `demobackup`
   - **Endpoint (URL)**: `xxxxx.s3.fr1.cloud-temple.com`
   - **Access Key**: Geben Sie den von Cloud Temple bereitgestellten Zugangsschlüssel ein.
   - **Secret Key**: Geben Sie den zugehörigen Geheimschlüssel ein.

5. Testen Sie die Konnektivität über die Benutzeroberfläche, um sicherzustellen, dass die Verbindung zum Bucket erfolgreich ist.
6. Speichern Sie die Konfiguration.

---

### 3. Konfigurieren und Validieren eines Backup-Jobs

1. Erstellen Sie in Kasten eine Richtlinie (Policy) zur Verwaltung Ihrer Backups:
   - Gehen Sie zum Abschnitt **Policies** (Richtlinien).
   - Klicken Sie auf **Create Policy** (Richtlinie erstellen).
   - Wählen Sie **Backup** als Aufgabentyp.
   - Wählen Sie die Namespaces oder Workloads aus, die in das Backup einbezogen werden sollen (z.B. eine kritische Anwendung, die in OpenShift bereitgestellt wird).

2. Wählen Sie unter **Location** (Speicherort) den zuvor konfigurierten S3-Speicherort (`demobackup`).

3. Planen Sie die Häufigkeit der Backups:
   - Beispiel: Tägliches Backup um 23:00 Uhr.

4. Speichern Sie die Richtlinie und führen Sie einen manuellen Test durch, um sicherzustellen, dass die Backups ordnungsgemäß funktionieren.

---

### 4. Überprüfen des Backup-Status

1. Gehen Sie zum Abschnitt **Activities** (Aktivitäten) in Kasten.
2. Prüfen Sie die abgeschlossenen Backups und stellen Sie sicher, dass die Daten in Ihren Cloud Temple S3-Bucket gesendet wurden.
3. Melden Sie sich bei der S3-Benutzeroberfläche von Cloud Temple an, um das Vorhandensein der Backup-Dateien im Bucket zu überprüfen.

---

## Validierungskriterien

Um zu bestätigen, dass das Backup korrekt konfiguriert ist:

1. Die Konnektivitätstests zum S3-Bucket (Endpunkt, Zugangsschlüssel, Geheimschlüssel) sind erfolgreich.
2. Die Backups werden fehlerfrei ausgeführt und im Abschnitt **Activities** von Kasten angezeigt.
3. Die Backup-Dateien erscheinen im S3-Bucket (über die Cloud Temple-Benutzeroberfläche überprüfen).
4. Die gesicherten Workloads können erfolgreich über Kasten wiederhergestellt werden.

---

## Fazit

Durch die Befolgung dieses Leitfadens haben Sie erfolgreich einen SecNumCloud-kompatiblen S3-Speicherort in Kasten mit der Cloud Temple-Infrastruktur konfiguriert. Dieses Workflow ermöglicht es Ihnen, Ihre Backups effektiv zu verwalten und gleichzeitig von einem zertifizierten und sicheren Speicher zu profitieren.

Für weiterführende Maßnahmen könnten Sie:

- Weitere Workloads zum Backup hinzufügen.
- Erweiterte Aufbewahrungsrichtlinien in Kasten konfigurieren.
- Die Wiederherstellungstests automatisieren, um Ihre Daten zu validieren.

Sie haben nun eine robuste und konforme Lösung, um Ihre kritischen Daten zu sichern ! 🚀
