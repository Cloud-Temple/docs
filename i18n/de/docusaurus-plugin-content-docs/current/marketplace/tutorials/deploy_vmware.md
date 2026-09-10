---
title: Bereitstellen eines Images auf VMware
---
import marketplaceVmwareDeployment from '@site/docs/marketplace/images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '@site/docs/marketplace/images/marketplace_vmware_config.png'

Dieses Tutorial führt Sie bei der Bereitstellung eines Images einer virtuellen Maschine aus dem Cloud Temple Marketplace in Ihre VMware-Umgebung.

## Voraussetzungen

- Verfügen über eine konfigurierte VMware-Umgebung
- Über die Berechtigungen zum Erstellen von virtuellen Maschinen verfügen
- Das Image muss **VMware** in den kompatiblen Zielen enthalten

## Deployment-Schritte

### 1. Auswahl und Bereitstellung

Wählen Sie auf der Detailseite einer VMware-kompatiblen Lösung Ihre Zielumgebung aus und klicken Sie auf **Bereitstellen** :
<img src={marketplaceVmwareDeployment} />

### 2. Konfiguration der virtuellen Maschine

Konfigurieren Sie die grundlegenden Parameter Ihrer virtuellen Maschine:

- **Name** der VM
- **Ressourcen** (CPU, RAM)
- **Speicher**
- **Netzwerk**

<img src={marketplaceVmwareConfig} />

Die Bereitstellung dauert in der Regel weniger als 10 Minuten, abhängig von der Größe des Images.

## Alternativer Zugriff

Sie können auch direkt über die VMware-Oberfläche auf die Marketplace-Templates zugreifen:

1. Navigieren Sie zu **vSphere** > **VM bereitstellen**
2. Wählen Sie **Marketplace-Templates** als Quelle
3. Durchsuchen Sie die im integrierten Katalog verfügbaren Images

## Deployment-Verfolgung

Sobald das Deployment gestartet wurde:

- Verfolgen Sie den Fortschritt über die VMware-Konsole
- Die VM wird in Ihrem vSphere-Inventar angezeigt