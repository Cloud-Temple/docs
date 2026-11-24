---
title: Ein Image auf OpenIaaS bereitstellen
---
import marketplaceOpeniaasDeployment from '@site/docs/marketplace/images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '@site/docs/marketplace/images/marketplace_openiaas_config.png'

Dieses Tutorial führt Sie durch die Bereitstellung eines virtuellen Maschinen-Images aus der Cloud Temple Marketplace in Ihre OpenIaaS-Umgebung.

## Voraussetzungen

- Eine konfigurierte OpenIaaS-Umgebung vorhanden haben
- Berechtigungen zur Erstellung virtueller Maschinen besitzen
- Das Image muss **OpenIaaS** unter den kompatiblen Zielen aufweisen

## Bereitstellungsschritte

### 1. Auswahl und Bereitstellung

Auf der Detailseite einer OpenIaaS-kompatiblen Lösung wählen Sie Ihre Zielumgebung aus und klicken Sie auf **Bereitstellen** :
<img src={marketplaceOpeniaasDeployment} />

### 2. Konfiguration der virtuellen Maschine

Konfigurieren Sie die grundlegenden Parameter Ihrer virtuellen Maschine :

- **Name** der VM
- **Ressourcen** (CPU, RAM)
- **Speicher**
- **Netzwerk**

<img src={marketplaceOpeniaasConfig} />

Die Bereitstellung dauert in der Regel weniger als 10 Minuten, abhängig von der Größe des Images.

## Alternative Zugriffsmöglichkeit

Sie können auch direkt über die Seite **Virtuelle Maschinen** Ihrer OpenIaaS-Umgebung auf Marketplace-Images zugreifen :

1. Gehen Sie zu **Virtuelle Maschinen** > **VM erstellen**
2. Wählen Sie **Marketplace-Images** in den Quellenoptionen aus
3. Wählen Sie Ihre Lösung aus dem integrierten Katalog

## Bereitstellung verfolgen

Sobald die Bereitstellung gestartet wurde :

- Verfolgen Sie den Fortschritt über die OpenIaaS-Konsole
- Die VM wird in Ihrer Liste virtueller Maschinen angezeigt

Falls das Image Standard-Anmeldedaten bereitstellt, ersetzen Sie das Passwort bei der ersten Anmeldung.
