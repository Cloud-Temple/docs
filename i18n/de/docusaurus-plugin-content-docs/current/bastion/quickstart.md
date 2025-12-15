---
title: Schnellstartanleitung
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'

Diese Schnellstartanleitung zeigt Ihnen, wie Sie die Erstellung einer Appliance anfordern und wie Sie eine neue Session erstellen und daran teilnehmen.

## Voraussetzungen

1. Ein Abonnement für das Cloud Temple-Angebot (Bastion Appliance-Abonnement) abgeschlossen haben.
2. Die zu verwaltenden Geräte müssen vom Netzwerk aus erreichbar sein, in dem die Bastion Appliance bereitgestellt ist.
3. Die entsprechenden Berechtigungen für das Bastion-Modul besitzen.
4. Bei einer On-Premise-Bereitstellung der Appliance müssen die entsprechenden Netzwerkflüsse freigegeben sein.

## Required flows for the proper operation of the Bastion product

Several flows are necessary for the proper operation of the Bastion Appliance.

### Bastion Gateway

| Source                   | Destination                                 | Protocol  |
|--------------------------|---------------------------------------------|-----------|
| Client bastion appliance | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### RDP Administration Traffic

| Source                   | Destination                 | Protocol  |
|--------------------------|-----------------------------|-----------|
| Client bastion appliance | Instances to administer     | TCP/3389  |

### SSH Administration Flow

| Source                   | Destination                 | Protocol  |
|--------------------------|-----------------------------|-----------|
| Client bastion appliance | Instances to administer       | TCP/22    |

## Requesting the Creation of an Appliance

Before you can deploy an Appliance, you must submit a subscription request for an Appliance via a support ticket.  
The support portal is accessible from the Console using the buoy icon in the top-right corner of the window.

<img src={shivaSupport} />

## Gerät speichern

Um ein Gerät, das verwaltet werden soll, regelmäßig zu nutzen, ist es sinnvoller, eine Session zu erstellen, die Sie bei jeder Anmeldung nur mit Ihrem Benutzernamen und Ihrem Passwort authentifiziert.

Gehen Sie hierzu im Menü „Bastion“ zum Tab „Geräte“ und klicken Sie auf die Schaltfläche „Neues Gerät“.

<img src={creerSession} />

Geben Sie nun die erforderlichen Informationen für die Erstellung Ihres Geräts ein:

- Gerätename;
- Beschreibung;
- zugeordnete Appliance;
- Protokolltyp (SSH oder RDP);
- IP-Adresse des Hosts;
- Tastaturkonfiguration.

<img src={creerSession2} />

Eine Benachrichtigung sollte oben rechts auf der Seite erscheinen, die die Erstellung des Geräts anzeigt. Die Session wird anschließend der Liste Ihrer Geräte hinzugefügt.

Sie können ein neues Gerät auch über den Tab „Appliances“ erstellen, indem Sie auf die Aktionsschaltfläche der Appliance klicken, der Sie ein Gerät zuordnen möchten.

<img src={creerSession3} />

## Connect to a device

Go to the "Devices" tab in the "Bastion" tab. Click on the action bar of the device you want to open, and then click the "Open" button.

<img src={ouvrirSession} />

For each connection to a device, you only need to provide your authentication credentials.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the start of the connection to your device appears, and the console to your virtual machine opens.