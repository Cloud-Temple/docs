---
title: Ein Image auf eine VM-Instanz deployen
---

import marketplaceVmInstanceDeployment from '@site/docs/marketplace/images/marketplace_vminstance_deploy.jpg'
import marketplaceVmInstanceConfig from '@site/docs/marketplace/images/marketplace_vminstance_config.jpg'

Dieses Tutorial führt Sie durch den Deployment-Prozess eines Virtual-Machine-Images aus der Cloud Temple Marketplace in den VM-Instances-Dienst.

## Voraussetzungen

- Über einen Tenant mit aktiviertem Dienst **VM Instances** und den Berechtigungen zur Erstellung von Virtual Machines verfügen.
- Ein Image auswählen, das **VM Instance** unter den kompatiblen Zielen aufweist und für die gewünschte Instanzfamilie und Verfügbarkeitszone verfügbar ist.
- Über ausreichende Quotas für CPU, RAM und Speicher sowie über ein in der gewählten Zone erreichbares Netzwerk verfügen.

## Deployment-Schritte

### 1. Auswahl und Deployment

Auf der Detailseite des Images **VM Instance** unter **Deployment-Optionen** auswählen und dann auf **Deployen** klicken. Der Erstellungs-Assistent öffnet sich mit dem vorab ausgewählten Image.

<img src={marketplaceVmInstanceDeployment} alt="Sélection de la cible VM Instance dans les options de déploiement Marketplace" />

### 2. Konfiguration der Virtual Machine

Die Schritte des Assistenten ausfüllen:

- **Instanzfamilie** und **Verfügbarkeitszone**: aus den mit dem Image kompatiblen Optionen auswählen.
- **Vorlage**: die für den Bedarf und die Voraussetzungen des Images geeigneten CPU- und RAM-Ressourcen auswählen.
- **Instanzkonfiguration**: den Namen der VM und deren Backup-Richtlinie eingeben.
- **Cloud Init**: falls erforderlich, **Cloud Config** für die Konfiguration beim ersten Start und **Network Config** für die Netzwerkkonfiguration des Gastsystems ausfüllen. Die eventuell vorbefüllten Werte und das vom Image in seiner Marketplace-Karte akzeptierte Format überprüfen.
- **Datenträger**: die aus dem Image stammenden Datenträger, deren Kapazität und deren Speichertyp überprüfen; bei Bedarf Datenträger hinzufügen.
- **Netzwerkadapter**: die Schnittstellen an die Netzwerke der Umgebung anschließen.

<img src={marketplaceVmInstanceConfig} alt="Configuration de la machine virtuelle dans l'assistant VM Instances" />

Im Schritt **Zusammenfassung** Konfiguration und geschätzte Kosten überprüfen und dann auf **Erstellen** klicken.

Das [Tutorial zur Erstellung einer VM-Instanz](../../public_cloud/vm_instances/tutorials/create_vm.md) beschreibt die Parameter jedes Schritts im Detail.

## Alternative Zugriffsmöglichkeit

Ein Marketplace-Image kann auch über den VM-Instances-Dienst ausgewählt werden:

1. In der Cloud Temple Konsole **VM Instances** > **Instanzen** öffnen.
2. Auf **Neue Virtual Machine** klicken.
3. Eine Instanzfamilie und eine Verfügbarkeitszone auswählen.
4. Im Schritt **Image auswählen** das Image im integrierten Katalog auswählen.
5. Die Konfigurationsschritte abschließen und die **Zusammenfassung** bestätigen.

## Deployment-Überwachung

Sobald die Erstellung gestartet wurde:

- Die Liste **VM Instances** > **Instanzen** aufrufen, um den Status der VM zu verfolgen.
- Die Detailseite öffnen, um Informationen, Datenträger und Netzwerkadapter zu überprüfen.
- Nach dem Start die **Konsole** oder den in der Marketplace-Karte des Images angegebenen Verbindungsmodus verwenden.

Falls das Image Standard-Anmeldedaten bereitstellt, das Passwort bei der ersten Anmeldung ersetzen.
