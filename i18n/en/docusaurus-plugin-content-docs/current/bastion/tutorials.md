---
title: Tutorials
---
import sessions from '@site/docs/bastion/images/sessions.png'
import sessions2 from '@site/docs/bastion/images/sessions2.png'
import appliances from '@site/docs/bastion/images/appliances.png'
import ouvrirAppliance from '@site/docs/bastion/images/ouvrir_appliance.png'
import creerSession from '@site/docs/bastion/images/creer_session.png'
import creerSession2 from '@site/docs/bastion/images/creer_session2.png'
import creerSession3 from '@site/docs/bastion/images/creer_session3.png'
import ouvrirSession from '@site/docs/bastion/images/ouvrir_session.png'
import ouvrirSession2 from '@site/docs/bastion/images/ouvrir_session2.png'
import modifierSession from '@site/docs/bastion/images/modifier_session.png'
import modifierSession2 from '@site/docs/bastion/images/modifier_session2.png'
import supprimerSession from '@site/docs/bastion/images/supprimer_session.png'

These tutorials help you deploy and manage a Bastion Cloud Temple from the Console.

## Prerequisites

1. Subscribe to the Cloud Temple product (Appliance Bastion subscription).
2. The devices to be managed must be accessible from the network where the Appliance Bastion is deployed.
3. Have permissions for the Bastion module.
4. For an on-premise Appliance deployment, the corresponding traffic flows must be allowed.

## Interface

Once logged into the Console web portal, go to the "Bastion" tab in the left menu.

<img src={sessions} />

The « Devices » tab allows you to view the list of your devices. A device corresponds to a configuration of
connection via a Bastion Appliance. For each device, its name, tags,
description, associated Appliance, connection type (SSH ou RDP), host IP, and finally the keyboard layout are displayed.

You can filter the list of your devices by their assigned tags, and a search bar allows you to search for a session by its name.

<img src={sessions2} />

The « Appliances » tab displays the list of your Bastion Appliances. For each Appliance, its name and description are specified.

A search bar is available to allow you to search for an Appliance by its name.

<img src={appliances} />

## Deploy an Appliance

Before you can deploy an Appliance, you must submit an Appliance subscription request via a support request.

## Open a connection to a device

In the "Appliances" tab, click on the action bar of the Appliance you want to open. Then click the "Open" button.

<img src={ouvrirAppliance} />

Then fill in the information required for the connection:

    - Protocol selection (SSH or RDP);
    - IP address of the host to manage;
    - Credentials;
    - Keyboard layout.

Then click "Connect" to open the Appliance. The console of the virtual machine to manage will then open.

## Register an Equipment

To regularly access an equipment for administration, it is recommended to create an equipment configuration, which will only require your username and password upon each connection.

To do this, go to the « Equipment » tab in the « Bastion » menu, then click the « New equipment » button.

<img src={creerSession} />

Then, fill in the information required to create your equipment:

    - Equipment name;
    - Description;
    - Associated appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard language.

<img src={creerSession2} />

A notification indicating the creation of your equipment configuration should appear in the top right corner of the page. The configuration is then added to your equipment list.

To create a new connection, you can also go through the « Appliances » tab by clicking on the action bar of the Appliance to which you want to associate an equipment configuration.

<img src={creerSession3} />

## Connect to a device

Navigate to the "Devices" tab in the "Bastion" tab. Click on the action bar of the device you want to open, and click the "Open" button.

<img src={ouvrirSession} />

Each time you connect to the device, you only need to provide your authentication credentials.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the start of the session appears, and the console to your virtual machine opens.

## Modify an equipment configuration

Navigate to the "Equipment" tab in the "Bastion" section, click on the action bar of the equipment you want to modify, and click the "Edit" button.

<img src={modifierSession} />

You can then modify the equipment name, its description, the associated Appliance, the protocol (SSH or RDP), the host IP address, or the keyboard language.

<img src={modifierSession2} />

## Delete an equipment configuration

Go to the "Equipment" tab in the "Bastion" section, click on the action bar of the equipment you want to delete, and click the "Delete" button.

<img src={supprimerSession} />