---
title: Image auf OpenIaaS bereitstellen
---
import marketplaceOpeniaasDeployment from '@site/docs/marketplace/images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '@site/docs/marketplace/images/marketplace_openiaas_config.png'

Dieses Tutorial zeigt Ihnen, wie Sie ein Image einer virtuellen Maschine aus der Cloud Temple Marketplace in Ihre OpenIaaS-Umgebung bereitstellen.

## Voraussetzungen

- Verfügen über ein konfiguriertes OpenIaaS-Umfeld
- Berechtigungen zum Erstellen von virtuellen Maschinen besitzen
- Das Image muss **OpenIaaS** in seinen kompatiblen Zielen enthalten

## Deployment-Schritte

### 1. Auswahl und Bereitstellung

Wählen Sie auf der Detailseite einer OpenIaaS-kompatiblen Lösung Ihre Zielumgebung aus und klicken Sie auf **Bereitstellen** :
<img src={marketplaceOpeniaasDeployment} />

### 2. Konfiguration der virtuellen Maschine

Konfigurieren Sie die grundlegenden Einstellungen Ihrer virtuellen Maschine:

- **Name** der VM
- **Ressourcen** (CPU, RAM)
- **Speicher**
- **Netzwerk**

<img src={marketplaceOpeniaasConfig} />

Die Bereitstellung dauert in der Regel weniger als 10 Minuten, abhängig von der Größe des Images.

## Alternativer Zugriff

Sie können auf Marketplace-Images auch direkt über die Seite **Virtuelle Maschinen** Ihrer OpenIaaS-Umgebung zugreifen :

1. Navigieren Sie zu **Virtuelle Maschinen** > **VM erstellen**
2. Wählen Sie **Marketplace-Images** in der Quellenauswahl aus
3. Wählen Sie Ihre Lösung aus dem integrierten Katalog aus

## Bereitstellungsstatus verfolgen

Sobald die Bereitstellung gestartet wurde:

- Verfolgen Sie den Fortschritt über die OpenIaaS-Konsole
- Die VM wird in Ihrer Liste der virtuellen Maschinen angezeigt