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

## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to be managed must be accessible from the network where the Bastion Appliance is deployed.
3. Have permissions on the Bastion module.
4. For an on-premise Appliance deployment, the corresponding network flows must be open.

## Interface

Once logged into the Console web portal, navigate to the "Bastion" tab in the left-hand menu.

<img src={sessions} />

The "Equipment" tab allows you to view your list of equipment. An equipment entry corresponds to a connection configuration via a Bastion Appliance. For each equipment, the following information is displayed: its name, tags, description, associated Appliance, connection type (SSH or RDP), host IP address, and keyboard configuration.

You can filter your list of equipment based on assigned tags, and a search engine enables you to look up a session by its name.

<img src={sessions2} />

The "Appliances" tab displays the list of your Bastion Appliances. For each appliance, its name and description are provided.

A search engine is available to help you locate an appliance by its name.

<img src={appliances} />

## Deploy an Appliance

Before deploying an Appliance, you must submit a subscription request for an Appliance via a support ticket.

## Open a connection to a device

In the **Appliances** tab, click the action bar of the appliance you want to open. Then click the **Open** button.

<img src={ouvrirAppliance} />

Next, fill in the required connection information:

- Protocol selection (SSH or RDP);
- IP address of the host to manage;
- Credentials;
- Keyboard configuration.

Then click **Connect** to open the appliance. The virtual machine's console will then open.

## Register a Device

To access a device you manage regularly, it is more convenient to create a device configuration, which will only require your username and password at each connection.

To do this, go to the « Devices » tab in the « Bastion » menu, then click the « New Device » button.

<img src={creerSession} />

Next, fill in the required information to create your device:

- Device name;
- Description;
- Associated appliance;
- Protocol type (SSH or RDP);
- Host IP address;
- Keyboard language.

<img src={creerSession2} />

A notification indicating the creation of your device configuration should appear in the top-right corner of the page. The configuration will then be added to your list of devices.

To create a new connection, you can also go to the « Appliances » tab and click the action bar of the appliance to which you want to associate a device configuration.

<img src={creerSession3} />

## Connect to a Device

Go to the "Devices" tab within the "Bastion" tab. Click on the action bar of the device you wish to open, then click the "Open" button.

<img src={ouvrirSession} />

For each connection to a device, you only need to provide your authentication credentials.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the session start appears, and the console to your virtual machine opens.

## Modify a device configuration

Go to the "Devices" tab in the "Bastion" section, click on the action bar of the device you wish to modify, and click the "Modify" button.

<img src={modifierSession} />

You can then modify the device name, description, associated Appliance, protocol (SSH or RDP), host IP address, or keyboard language.

<img src={modifierSession2} />

## Delete a device configuration

Go to the "Devices" tab in the "Bastion" section, click the action bar of the device you want to delete, and then click the "Delete" button.

<img src={supprimerSession} />