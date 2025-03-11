---
title: Getting Started Guide
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'


This getting started guide shows you how to request the creation of an Appliance and how to register and connect to a new session.

## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to be administered must be accessible from the network where the Bastion Appliance is deployed.
3. Have the rights on the Bastion module.
4. When deploying the on-premise Appliance, the corresponding flows must be open.


## Flows necessary for the operation of the Bastion product

Several flows are necessary for the proper functioning of the Bastion Appliance.

### The Bastion Gateway
| Source                   | Destination                                 | Protocol |
|--------------------------|---------------------------------------------|----------|
| Bastion client appliance | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242 |

### RDP administration flows

| Source                   | Destination                 | Protocol |
|--------------------------|-----------------------------|----------|
| Bastion client appliance | Instances to be administered | TCP/3389 |

### SSH administration flows

| Source                   | Destination                 | Protocol |
|--------------------------|-----------------------------|----------|
| Bastion client appliance | Instances to be administered | TCP/22   |


## Request the creation of an Appliance
Before you can deploy an Appliance, you must request an Appliance subscription via a support request.
Support is accessible in the Shiva console from the lifebuoy icon on the bar at the top right of the window.

<img src={shivaSupport} />


## Register equipment

To regularly access equipment to be administered, it is more appropriate to create a session, which will only require your username and password for each connection.

To do this, go to the "Equipment" tab of the "Bastion" menu, then click on the "New equipment" button.

<img src={creerSession} />


Then fill in the necessary information for the creation of your equipment:

    - Equipment name;
    - Description;
    - Associated appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard configuration.

<img src={creerSession2} />


A notification indicating the creation of the equipment should appear at the top right of the page. The session is then added to your list of equipment.

To create new equipment, you can also go through the "Appliances" tab by clicking on the action bar of the Appliance to which you want to associate equipment.

<img src={creerSession3} />

## Connect to equipment

Go to the "Equipment" tab of the "Bastion" tab. Click on the action bar of the equipment you want to open, and click on the "Open" button.

<img src={ouvrirSession} />

For each connection to the equipment, you only need to enter your authentication information.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the start of the connection to your equipment appears and the console to your virtual machine opens.