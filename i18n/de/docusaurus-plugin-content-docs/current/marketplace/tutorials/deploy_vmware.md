---
title: Ein Image auf VMware bereitstellen
---
import marketplaceVmwareDeployment from '../images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '../images/marketplace_vmware_config.png'

Dieses Tutorial führt Sie durch die Bereitstellung eines Virtual Machine Images vom Cloud Temple Marketplace in Ihre VMware-Umgebung.

## Voraussetzungen

- Eine konfigurierte VMware-Umgebung haben
- Berechtigungen zur Erstellung virtueller Maschinen haben
- Das Image muss **VMware** in seinen kompatiblen Zielen haben

## Bereitstellungsschritte

### 1. Auswahl und Bereitstellung

Von der Detailseite einer VMware-kompatiblen Lösung aus wählen Sie Ihre Zielumgebung und klicken auf **Bereitstellen**:
<img src={marketplaceVmwareDeployment} />

### 2. Konfiguration der virtuellen Maschine

Konfigurieren Sie die Grundparameter Ihrer virtuellen Maschine:
- **Name** der VM
- **Ressourcen** (CPU, RAM)
- **Speicher**
- **Netzwerk**

<img src={marketplaceVmwareConfig} />

Die Bereitstellung dauert normalerweise weniger als 10 Minuten, abhängig von der Image-Größe.

## Alternativer Zugang

Sie können auch direkt über die VMware-Schnittstelle auf Marketplace-Templates zugreifen:

1. Gehen Sie zu **vSphere** > **VM bereitstellen**
2. Wählen Sie **Marketplace Template** als Quelle
3. Durchsuchen Sie verfügbare Images im integrierten Katalog

## Bereitstellungsüberwachung

Nach dem Start der Bereitstellung:
- Verfolgen Sie den Fortschritt über die VMware-Konsole
- Die VM erscheint in Ihrem vSphere-Inventar
- Verbinden Sie sich nach Abschluss der Bereitstellung
