---
title: Getting Started Guide
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'

This getting started guide shows you how to request the creation of an Appliance, and how to create a new session and connect to it.

## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to be managed must be accessible from the network where the Bastion Appliance is deployed.
3. Have permissions on the Bastion module.
4. For an on-premise Appliance deployment, the corresponding network flows must be open.

## Required flows for the Bastion product operation

Several flows are necessary for the proper operation of the Bastion Appliance.

### The Bastion Gateway

| Source                   | Destination                                 | Protocol  |
|--------------------------|---------------------------------------------|-----------|
| Bastion client appliance | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### RDP Administration Flow

| Source                   | Destination                 | Protocol  |
|--------------------------|-----------------------------|-----------|
| Client bastion appliance | Instances to administer       | TCP/3389  |

### SSH Administration Flow

| Source                   | Destination                 | Protocol  |
|--------------------------|-----------------------------|-----------|
| Client bastion appliance | Instances to administer       | TCP/22    |

## Requesting Appliance Creation

Before deploying an Appliance, you must submit a subscription request for an Appliance via a support ticket.  
The support portal is accessible from the Console using the buoy icon in the top-right corner of the window.

<img src={shivaSupport} />

## Register a Device

To access a device you manage regularly, it is more convenient to create a session, which will only require your username and password at each connection.

To do this, go to the "Devices" tab in the "Bastion" menu, then click the "New Device" button.

<img src={creerSession} />

Next, fill in the required information to create your device:

- Device name;
- Description;
- Associated appliance;
- Protocol type (SSH or RDP);
- Host IP address;
- Keyboard configuration.

<img src={creerSession2} />

A notification indicating the device creation should appear in the top-right corner of the page. The session is then added to your list of devices.

To create a new device, you can also go through the "Appliances" tab by clicking the action bar of the appliance to which you want to associate a device.

<img src={creerSession3} />

## Connect to a Device

Go to the "Devices" tab within the "Bastion" tab. Click on the action bar of the device you wish to open, then click the "Open" button.

<img src={ouvrirSession} />

For each connection to a device, you only need to provide your authentication credentials.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the start of the connection to your device appears, and the console to your virtual machine opens.