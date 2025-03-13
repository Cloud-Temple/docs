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

These tutorials help you deploy and manage a Cloud Temple Bastion from the Shiva portal.

## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to be administered must be accessible from the network where the Bastion Appliance is deployed.
3. Have rights on the Bastion module.
4. In the context of deploying the on-premise Appliance, the corresponding flows must be open.

## Interface

Once connected to the Shiva web portal, go to the "Bastion" tab from the left menu.

<img src={sessions} />

The "Equipment" tab allows you to view the list of your equipment. An equipment corresponds to a connection configuration via a Bastion Appliance. For each equipment, its name, tags, description, associated Appliance, connection type (SSH or RDP), host IP, and keyboard configuration are indicated.

You can filter the list of your equipment based on the tags assigned to them, and a search engine allows you to search for a session by its name.

<img src={sessions2} />

The "Appliances" tab gives you the list of your Bastion Appliances. For each Appliance, the name and description of the Appliance are specified.

A search engine is available to allow you to search for an Appliance by its name.

<img src={appliances} />

## Deploy an Appliance

Before being able to deploy an Appliance, a subscription request for an Appliance must be made via a support request.

## Open a flow to equipment

In the "Appliances" tab, click on the action bar of the Appliance you want to open. Then click on the "Open" button.

<img src={ouvrirAppliance} />

Then, fill in the necessary information for connection:

    - Choice of protocol (SSH or RDP);
    - Host IP address to be administered;
    - Identification information;
    - Keyboard configuration.

Then click "Connect" to open the Appliance. The console of the virtual machine to be administered then opens.

## Register equipment

To regularly access equipment to be administered, it is more suitable to create an equipment configuration, which will only require your username and password for each connection.

To do this, go to the "Equipment" tab of the "Bastion" menu, then click on the "New Equipment" button.

<img src={creerSession} />

Then fill in the necessary information to create your equipment:

    - Equipment name;
    - Description;
    - Associated Appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard language.

<img src={creerSession2} />

A notification indicating the creation of your equipment configuration should appear at the top right of the page. The configuration is then added to the list of your equipment.

To create a new connection, you can also go through the "Appliances" tab by clicking on the action bar of the Appliance to which you want to associate an equipment configuration.

<img src={creerSession3} />

## Connect to equipment

Go to the "Equipment" tab of the "Bastion" tab. Click on the action bar of the equipment you want to open, and click the "Open" button.

<img src={ouvrirSession} />

For each connection to the equipment, you only need to provide your authentication information.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the start of the session appears and the console to your virtual machine opens.

## Modify equipment configuration

Go to the "Equipment" tab of the "Bastion" section, click on the action bar of the equipment you want to modify, and click the "Modify" button.

<img src={modifierSession} />

You can then modify the equipment name, description, associated Appliance, protocol (SSH or RDP), host IP address, or keyboard language.

<img src={modifierSession2} />

## Delete equipment configuration

Go to the "Equipment" tab of the "Bastion" section, click on the action bar of the equipment you want to delete, and click the "Delete" button.

<img src={supprimerSession} />
