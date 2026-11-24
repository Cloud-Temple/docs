---
title: Ein Image auf VMware bereitstellen
---
import marketplaceVmwareDeployment from '@site/docs/marketplace/images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '@site/docs/marketplace/images/marketplace_vmware_config.png'

Dieses Tutorial führt Sie durch die Bereitstellung eines virtuellen Maschinen-Images aus der Cloud Temple Marketplace in Ihre VMware-Umgebung.

## Voraussetzungen

- Eine konfigurierte VMware-Umgebung vorhanden haben
- Berechtigungen zum Erstellen virtueller Maschinen besitzen
- Das Image muss **VMware** in seinen kompatiblen Zielen enthalten

## Bereitstellungsschritte

### 1. Auswahl und Bereitstellung

Auf der Detailseite einer VMware-kompatiblen Lösung wählen Sie Ihre Zielumgebung aus und klicken Sie auf **Bereitstellen**:
<img src={marketplaceVmwareDeployment} />

### 2. Konfiguration der virtuellen Maschine

Konfigurieren Sie die grundlegenden Parameter Ihrer virtuellen Maschine:

- **Name** der VM
- **Ressourcen** (CPU, RAM)
- **Speicher**
- **Netzwerk**

<img src={marketplaceVmwareConfig} />

Die Bereitstellung dauert in der Regel weniger als 10 Minuten, abhängig von der Größe des Images.

## Alternative Zugriffsmöglichkeit

Sie können auch direkt über die VMware-Oberfläche auf die Marketplace-Templates zugreifen:

1. Navigieren Sie zu **vSphere** > **VM bereitstellen**
2. Wählen Sie **Template Marketplace** als Quelle
3. Durchsuchen Sie die im integrierten Katalog verfügbaren Images

## Bereitstellung verfolgen

Sobald die Bereitstellung gestartet wurde:

- Verfolgen Sie den Fortschritt über die VMware-Konsole
- Die VM wird in Ihrem vSphere-Inventar angezeigt

Falls das Image Standard-Anmeldedaten bereitstellt, ersetzen Sie das Passwort bei der ersten Anmeldung.
