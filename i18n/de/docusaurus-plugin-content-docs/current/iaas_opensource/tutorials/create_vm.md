---
title: Eine virtuelle Maschine erstellen
---

Dieses Tutorial führt Sie durch die verschiedenen Methoden zur Erstellung einer virtuellen Maschine in Ihrer OpenIaaS-Umgebung.

## Einführung

Die Cloud Temple-Konsole bietet **drei Methoden** zum Erstellen einer OpenIaaS-virtuellen Maschine an:

1. **Aus einem Modell** : Schnelle Bereitstellung aus einem vorkonfigurierten Modell
2. **XVA-Import** : Import einer virtuellen Maschine aus einer XVA-Datei
3. **Über den Marketplace** : Bereitstellung eines zertifizierten Images aus dem Cloud Temple-Katalog

## Voraussetzungen

- Über eine konfigurierte OpenIaaS-Umgebung verfügen
- Über die erforderlichen Berechtigungen zum Erstellen virtueller Maschinen verfügen
- Für den XVA-Modus: über eine gültige XVA-Datei verfügen
- Für den Marketplace-Modus: Zugriff auf den Marketplace-Katalog haben

## Zugriff auf die Erstellung

Wählen Sie im Menü **OpenIaaS** > **Virtuelle Maschinen** die Schaltfläche **Neue virtuelle Maschine** aus.

Es öffnet sich ein Fenster, das Ihnen die drei verfügbaren Bereitstellungsmethoden anzeigt. Wählen Sie die gewünschte Methode aus, um fortzufahren.

---

## Methode 1 : Bereitstellung aus einem Modell

Diese Methode ermöglicht die schnelle Erstellung einer virtuellen Maschine aus einem vorkonfigurierten Modell.

### Schritt 1: Auswahl des Pools und des Modells

Wählen Sie zunächst den **Pool** (Verfügbarkeitszone) aus, in dem Sie Ihre virtuelle Maschine bereitstellen möchten, und wählen Sie anschließend das **Modell** als Basis aus.

### Schritt 2: Allgemeine Informationen

Konfigurieren Sie die grundlegenden Einstellungen Ihrer virtuellen Maschine:

- **Name** : Eindeutiger Name der virtuellen Maschine (alphanumerische Zeichen, Bindestriche, Unterstriche, Punkte und Leerzeichen sind erlaubt)
- **CPU** : Anzahl der virtuellen Kerne (Minimum 1)
- **RAM** : Speichermenge mit Auswahl der Einheit (MB, GB, TB)

### Schritt 3: Cloud Init (optional)

Cloud Init ermöglicht die Automatisierung der Erstkonfiguration Ihrer virtuellen Maschine beim ersten Start.

Sie können Folgendes konfigurieren:

- **Cloud Config** : Allgemeine Konfiguration (Hostname, Benutzer, Pakete usw.)
- **Network Config** : Netzwerkkonfiguration im Netplan v2-Format
- **Destroy After Boot** : Option zum Löschen der Cloud Init-Konfiguration nach dem ersten Start

:::info
Dieser Schritt ist vollständig optional. Wenn Sie Cloud Init nicht benötigen, lassen Sie die Felder auf den Standardwerten und fahren Sie mit dem nächsten Schritt fort.
:::

### Schritt 4: Konfiguration der Festplatten

Verwalten Sie die virtuellen Festplatten Ihrer virtuellen Maschine. Die Festplatten des Modells werden automatisch hinzugefügt und können nicht gelöscht werden.

Konfigurieren Sie für jede Festplatte Folgendes:

- **Name** : Eindeutiger Name der Festplatte
- **Kapazität** : Größe der Festplatte mit Auswahl der Einheit (MB, GB, TB)
- **Block Storage** : Ziel-Speicher

Sie können insgesamt bis zu 24 virtuelle Festplatten hinzufügen. Klicken Sie auf **Festplatte hinzufügen**, um eine neue Festplatte zu erstellen.

:::warning
Wenn Sie Cloud-Init konfigurieren, ist mindestens eine Festplatte erforderlich, um die Konfiguration zu speichern.
:::

### Schritt 5: Konfiguration der Netzwerkadapter

Konfigurieren Sie die Netzwerkinterfaces Ihrer virtuellen Maschine (maximal 7 Adapter).

Für jeden Netzwerkadapter:

- **Netzwerk** : Wählen Sie das virtuelle Netzwerk (mit Hinweis auf VPC oder Private Backbone)
- **MAC-Adresse** : Optional, wird automatisch generiert, wenn nicht angegeben

:::info[VPC]
Die Konfiguration von VPC-Netzwerken ist erst nach Abschluss des Vorgangs über den Reiter „Netzwerk“ der virtuellen Maschine verfügbar. Die Konfiguration über dieses Formular wird in Kürze bereitgestellt.
:::

Klicken Sie auf **Netzwerkadapter hinzufügen**, um eine neue Schnittstelle zu erstellen.

### Schritt 6: Hohe Verfügbarkeit

Konfigurieren Sie die Hochverfügbarkeitsstufe Ihrer virtuellen Maschine.

:::tip
Weitere Informationen zur Konfiguration der Hochverfügbarkeit und den verfügbaren Modi finden Sie im dazugehörigen Leitfaden: [Verwaltung der Hochverfügbarkeit einer virtuellen Maschine](./high_availability/manage_vm)
:::

### Schritt 7: Zusammenfassung und Validierung

Überprüfen Sie Ihre gesamte Konfiguration, bevor Sie die virtuelle Maschine erstellen.

Die Zusammenfassung zeigt alle konfigurierten Parameter an:

- Allgemeine Informationen (Name, CPU, RAM)
- Ausgewähltes Modell
- Cloud-Init (falls konfiguriert)
- Datenträger
- Netzwerkadapter
- Hohe Verfügbarkeit

Klicken Sie auf **Erstellen**, um die Bereitstellung Ihrer virtuellen Maschine zu starten.

---

## Methode 2: Import aus einer XVA-Datei

Diese Methode ermöglicht den Import einer virtuellen Maschine aus einer Datei im XVA-Format (XenServer Virtual Appliance).

### Beschreibung des XVA-Formats

Das XVA-Format ist das native Export-/Importformat von XCP-ng und XenServer. Es enthält eine vollständige virtuelle Maschine mit ihren Festplatten und ihrer Konfiguration.

### Schritt 1: Name der virtuellen Maschine

Legen Sie den Namen Ihrer virtuellen Maschine fest.

Der Name muss denselben Regeln entsprechen wie bei der Bereitstellung aus einer Vorlage (alphanumerische Zeichen, Bindestriche, Unterstriche, Punkte und Leerzeichen).

### Schritt 2: XVA-Datei hochladen

Laden Sie Ihre XVA-Datei von Ihrem Computer hoch.

:::info
Die Datei muss die Erweiterung `.xva` haben. Dateinamen dürfen nur alphanumerische Zeichen, Bindestriche, Unterstriche und Punkte enthalten (keine Leerzeichen).
:::

Ziehen Sie Ihre Datei in den vorgesehenen Bereich oder klicken Sie, um die Datei über Ihren Datei-Explorer auszuwählen.

### Schritt 3: Speicherauswahl

Wählen Sie den Zielspeicher für Ihre importierte virtuelle Maschine.

Wählen Sie einen Block Storage im Verzeichnisbaum aus. Das System überprüft automatisch, ob der verfügbare Speicherplatz ausreicht, um Ihre XVA-Datei aufzunehmen.

### Schritt 4: Zusammenfassung und Validierung

Überprüfen Sie die Informationen, bevor Sie den Import starten.

Die Zusammenfassung zeigt:

- Der Name der VM
- Der Bereitstellungstyp (XVA)
- Die XVA-Datei und ihre Größe
- Der Zielspeicher

Klicken Sie auf **Erstellen**, um den Import Ihrer virtuellen Maschine zu starten.

### Über die Option skip_set_template

Beim Import einer XVA-Datei bestimmt die Option `skip_set_template`, ob das Importergebnis eine direkt verwendbare virtuelle Maschine oder eine Vorlage ist. Diese Option wird insbesondere mit Automatisierungstools wie Packer verwendet. Weitere Informationen: [Dokumentation XCP-ng](https://xcp-ng.org/blog/2024/02/22/using-packer-with-xcp-ng/).

---

## Methode 3: Bereitstellung über den Marketplace

Der Cloud Temple Marketplace bietet zertifizierte und sofort einsatzbereite Images für virtuelle Maschinen an.

### Auswahl eines Marketplace-Images

Durchsuchen Sie den Katalog der für OpenIaaS verfügbaren Images.

Es werden nur mit der OpenIaaS-Plattform kompatible Images angezeigt.

### Konfiguration der virtuellen Maschine

Die Konfiguration über den Marketplace folgt einem ähnlichen Prozess wie die Bereitstellung aus einem Modell, mit einigen Besonderheiten:

- Die Systemmerkmale (OS, CPU, RAM) sind durch das Marketplace-Image vorgegeben
- Sie können den Namen der VM anpassen
- Cloud Init ist für die Erstkonfiguration verfügbar
- Das Netzwerk-Mapping ermöglicht die Zuordnung der Netzwerkschnittstellen des Images zu Ihren Netzwerken

:::tip
Für eine detaillierte Anleitung zur Marketplace-Bereitstellung lesen Sie das entsprechende Tutorial: [Bereitstellen eines Images auf OpenIaaS](../../marketplace/tutorials/deploy_openiaas)
:::

---

## Best Practices

### Wahl der Bereitstellungsmethode

- **Modell** : Ideal für standardmäßige und wiederkehrende Bereitstellungen innerhalb Ihrer Organisation
- **XVA** : Empfohlen für die Migration bestehender VMs oder die Verwendung benutzerdefinierter Images
- **Marketplace** : Ideal für den schnellen Start mit zertifizierten und gewarteten Images

### Konfiguration der Ressourcen

- **CPU und RAM** : Dimensionieren Sie diese entsprechend den tatsächlichen Anforderungen Ihrer Workload
- **Datenträger** : Planen Sie eine Wachstumsmarge ein, um zukünftige Größenanpassungen zu vermeiden

### Hohe Verfügbarkeit

- Aktivieren Sie den **Restart**-Modus für kritische Anwendungen
- Verwenden Sie **Best-Effort** für weniger kritische Umgebungen

### Cloud Init

- Verwenden Sie Cloud Init, um die Konfiguration Ihrer VMs zu standardisieren
- Dokumentieren Sie Ihre Cloud-Init-Konfigurationen, um deren Wiederverwendung zu erleichtern
- Testen Sie Ihre Konfigurationen auf Test-VMs, bevor Sie sie in der Produktion bereitstellen

### Sicherheit

- Verwenden Sie aussagekräftige Namen, um die Identifizierung und Verwaltung zu erleichtern
- Planen Sie eine Backup-Strategie bereits bei der Erstellung der VM