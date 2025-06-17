## The necessary flows for the operation of the Bastion product

Several flows are necessary for the proper operation of the Bastion Appliance.

## Request the creation of an Appliance

Before being able to deploy an Appliance, a subscription request for an Appliance must be submitted to the support team.
Support is accessible in the Shiva console from the buoy icon on the top right bar of the window.

<img src={shivaSupport} />

## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to manage must be accessible from the network where the Bastion Appliance is deployed.
3. Have the rights on the Bastion module.
4. In the case of an on-premise Appliance deployment, the corresponding flows must be opened.

## Connect to a device

Go to the "Devices" tab under the "Bastion" tab. Click on the action bar of the device you want to open, and click the "Open" button.

<img src={ouvrirSession} />

Each time you connect to a device, you only need to enter your authentication information.

<img src={ouvrirSession2} />

After entering your credentials, a notification confirming the start of the connection to your device appears, and the console to your virtual machine opens.

### SSH Administration Flow

| Source                   | Destination                 | Protocol |
|--------------------------|-----------------------------|----------|
| Client Bastion Appliance | The instances to administer | TCP/22   |

### The Bastion Gateway

| Source                   | Destination                                 | Protocol |
|--------------------------|---------------------------------------------|----------|
| Client Bastion Appliance | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242 |

## Register a device

To access a device to administer regularly, it is more appropriate to create a session, which will only require your username and password at each connection.

To do this, go to the "Devices" tab in the "Bastion" menu, then click the "New device" button.

<img src={creerSession} />

Then fill in the necessary information for creating your device:

    - Device name;
    - Description;
    - Associated appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard configuration.

<img src={creerSession2} />

A notification indicating the creation of the device should appear in the top right corner of the page. The session is then added to your list of devices.

To create a new device, you can also go through the "Appliances" tab by clicking the action bar of the appliance to which you want to associate a device.

<img src={creerSession3} />

---
title: Getting Started Guide
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'

This getting started guide shows you how to request the creation of an Appliance and how to register a new session and connect to it.

### RDP Administration Flows

| Source                   | Destination                 | Protocol |
|--------------------------|-----------------------------|----------|
| Client Bastion Appliance | Instances to Administer     | TCP/3389 |