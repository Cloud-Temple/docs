## Open a connection to a device

In the "Appliances" tab, click on the action bar of the Appliance you want to open. Then click the "Open" button.

<img src={ouvrirAppliance} />

Then fill in the necessary connection information:

    - Protocol selection (SSH or RDP);
    - IP address of the host to manage;
    - Credentials;
    - Keyboard configuration.

Click "Connect" to open the Appliance. The console of the virtual machine to manage then opens.

## Modify an equipment configuration

Go to the "Equipment" tab in the "Bastion" section, click on the action bar of the equipment you want to modify, and click the "Modify" button.

<img src={modifierSession} />

You can then modify the equipment name, its description, the associated Appliance, the protocol (SSH or RDP), the host's IP address or the keyboard language.

<img src={modifierSession2} />

## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to manage must be accessible from the network where the Bastion Appliance is deployed.
3. Have the rights on the Bastion module.
4. In the case of an on-premise Appliance deployment, the corresponding flows must be opened.

## Connect to a device

Go to the "Devices" tab under the "Bastion" tab. Click on the action bar of the device you want to open, and click the "Open" button.

<img src={ouvrirSession} />

For each connection to the device, you only need to provide your authentication information.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the start of the session appears, and the console to your virtual machine opens.

## Deploy an Appliance

Before being able to deploy an Appliance, a subscription request for an Appliance must be submitted through a support request.

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

These tutorials help you deploy and manage a Cloud Temple Bastion from the Console portal.

## Delete an equipment configuration

Go to the "Equipment" tab in the "Bastion" section, click on the action bar of the equipment you want to delete, and click on the "Delete" button.

<img src={supprimerSession} />

## Register a device

To access a device to manage regularly, it is more appropriate to create a device configuration, which will only require your username and password at each connection.

To do this, go to the "Devices" tab in the "Bastion" menu, then click the "New device" button.

<img src={creerSession} />

Then fill in the necessary information to create your device:

    - Device name;
    - Description;
    - Associated appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard language.

<img src={creerSession2} />

A notification indicating the creation of your device configuration should appear in the top right corner of the page. The configuration is then added to your list of devices.

To create a new connection, you can also go through the "Appliances" tab by clicking the action bar of the appliance to which you want to associate a device configuration.

<img src={creerSession3} />

## Interface

Once connected to the Console web portal, go to the "Bastion" tab in the left menu.

<img src={sessions} />

The "Equipements" tab allows you to view your equipment list. An equipment corresponds to a connection configuration via a Bastion Appliance. For each equipment, its name, tags, description, associated Appliance, connection type (SSH or RDP), host IP, and keyboard configuration are indicated.

You can filter your equipment list according to the tags assigned to them, and a search engine allows you to look for a session by its name.

<img src={sessions2} />

The "Appliances" tab provides a list of your Bastion Appliances. For each Appliance, the Appliance's name and description are specified.

A search engine is available to help you search for an Appliance by its name.

<img src={appliances} />
