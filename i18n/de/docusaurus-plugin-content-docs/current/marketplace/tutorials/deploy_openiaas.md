---
title: Ein Image auf OpenIaaS bereitstellen
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

Dieses Tutorial führt Sie durch die Bereitstellung eines Virtual Machine Images vom Cloud Temple Marketplace in Ihre OpenIaaS-Umgebung.

## Voraussetzungen

- Eine konfigurierte OpenIaaS-Umgebung haben
- Berechtigungen zur Erstellung virtueller Maschinen haben
- Das Image muss **OpenIaaS** in seinen kompatiblen Zielen haben

## Bereitstellungsschritte

### 1. Auswahl und Bereitstellung

Von der Detailseite einer OpenIaaS-kompatiblen Lösung aus wählen Sie Ihre Zielumgebung und klicken auf **Bereitstellen**:
<img src={marketplaceOpeniaasDeployment} />

### 2. Konfiguration der virtuellen Maschine

Konfigurieren Sie die Grundparameter Ihrer virtuellen Maschine:
- **Name** der VM
- **Ressourcen** (CPU, RAM)
- **Speicher**
- **Netzwerk**

<img src={marketplaceOpeniaasConfig} />

Die Bereitstellung dauert normalerweise weniger als 10 Minuten, abhängig von der Image-Größe.

## Alternativer Zugang

Sie können auch direkt von der **Virtual Machines**-Seite Ihrer OpenIaaS-Umgebung auf Marketplace-Images zugreifen:

1. Gehen Sie zu **Virtual Machines** > **VM erstellen**
2. Wählen Sie **Marketplace Images** in den Quelloptionen
3. Wählen Sie Ihre Lösung aus dem integrierten Katalog

## Bereitstellungsüberwachung

Nach dem Start der Bereitstellung:
- Verfolgen Sie den Fortschritt über die OpenIaaS-Konsole
- Die VM erscheint in Ihrer Liste virtueller Maschinen
- Verbinden Sie sich nach Abschluss der Bereitstellung
