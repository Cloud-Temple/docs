---
title: Tutorials
---
import sessions from './images/sessions.png'
import sessions2 from './images/sessions2.png'
import appliances from './images/appliances.png'
import ouvrirAppliance from './images/ouvrir_appliance.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'
import modifierSession from './images/modifier_session.png'
import modifierSession2 from './images/modifier_session2.png'
import supprimerSession from './images/supprimer_session.png'

These tutorials help you deploy and manage a Cloud Temple Bastion from the Console.

## Voraussetzungen

1. Ein Abonnement für das Cloud Temple-Angebot (Bastion Appliance-Abonnement) abgeschlossen haben.
2. Die zu verwaltenden Geräte müssen vom Netzwerk aus erreichbar sein, in dem die Bastion Appliance bereitgestellt ist.
3. Die entsprechenden Berechtigungen für das Bastion-Modul besitzen.
4. Bei einer On-Premise-Bereitstellung der Appliance müssen die entsprechenden Netzwerkflüsse freigegeben sein.

## Interface

Nach der Anmeldung am Web-Portal Console gehen Sie zum Menüpunkt „Bastion“ im linken Menü.

<img src={sessions} />

Der Reiter „Geräte“ ermöglicht Ihnen die Ansicht Ihrer Geräte. Ein Gerät entspricht einer Verbindungskonfiguration über eine Bastion-Appliance. Für jedes Gerät werden dessen Name, Tags, Beschreibung, die zugeordnete Appliance, der Verbindungstyp (SSH oder RDP), die IP-Adresse des Hosts sowie die Tastaturbelegung angezeigt.

Sie können die Liste Ihrer Geräte nach den zugeordneten Tags filtern, und ein Suchfeld ermöglicht die Suche nach einer Session anhand ihres Namens.

<img src={sessions2} />

Der Reiter „Appliances“ zeigt Ihnen die Liste Ihrer Bastion-Appliances. Für jede Appliance werden deren Name und Beschreibung angegeben.

Ein Suchfeld steht zur Verfügung, um eine Appliance anhand ihres Namens zu suchen.

<img src={appliances} />

## Deploy an Appliance

Before you can deploy an appliance, you must submit a subscription request for an appliance via a support ticket.

## Open a connection to a device

In the **Appliances** tab, click the action bar of the appliance you want to open. Then click the **Open** button.

<img src={ouvrirAppliance} />

Next, enter the required connection information:

- Protocol selection (SSH or RDP);
- IP address of the host to manage;
- Credentials;
- Keyboard configuration.

Click **Connect** to open the appliance. The virtual machine's console will then open.

## Gerät speichern

Um ein Gerät, das verwaltet werden soll, regelmäßig zugänglich zu machen, ist es sinnvoller, eine Gerätekonfiguration zu erstellen, die Sie bei jeder Verbindung nur mit Ihrem Benutzernamen und Passwort authentifiziert.

Gehen Sie hierzu im Menü „Bastion“ zum Tab „Geräte“ und klicken Sie auf die Schaltfläche „Neues Gerät“.

<img src={creerSession} />

Geben Sie nun die erforderlichen Informationen für die Erstellung Ihres Geräts ein:

- Gerätename;
- Beschreibung;
- zugeordnete Appliance;
- Protokolltyp (SSH oder RDP);
- IP-Adresse des Hosts;
- Tastaturbelegung.

<img src={creerSession2} />

Eine Benachrichtigung sollte oben rechts auf der Seite erscheinen, die die Erstellung Ihrer Gerätekonfiguration bestätigt. Die Konfiguration wird anschließend Ihrer Liste von Geräten hinzugefügt.

Sie können eine neue Verbindung auch über den Tab „Appliances“ herstellen, indem Sie auf die Aktionsschaltfläche der Appliance klicken, der Sie eine Gerätekonfiguration zuordnen möchten.

<img src={creerSession3} />

## Connect to a device

Go to the "Devices" tab in the "Bastion" tab. Click on the action bar of the device you want to open, and then click the "Open" button.

<img src={ouvrirSession} />

For each connection to a device, you only need to provide your authentication credentials.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the start of the session appears, and the console to your virtual machine opens.

## Equipment configuration editieren

Gehen Sie zum Tab „Geräte“ im Bereich „Bastion“, klicken Sie auf die Aktionsschaltfläche des Geräts, das Sie bearbeiten möchten, und drücken Sie die Schaltfläche „Bearbeiten“.

<img src={modifierSession} />

Anschließend können Sie den Gerätenamen, die Beschreibung, die zugeordnete Appliance, das Protokoll (SSH oder RDP), die IP-Adresse des Hosts oder die Tastaturbelegung ändern.

<img src={modifierSession2} />

## Delete a device configuration

Go to the "Devices" tab in the "Bastion" section, click the action bar of the device you want to delete, and then click the "Delete" button.

<img src={supprimerSession} />
