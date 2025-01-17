---
title: Tutorials
---

These tutorials help you deploy and manage a Cloud Temple Bastion from the Shiva portal.


## Prerequisites

1. Have subscribed to the Cloud Temple offer (Bastion Appliance subscription).
2. The equipment to be managed must be accessible from the network where the Bastion Appliance is deployed.
3. Have rights on the Bastion module.
4. For the deployment of the on-premise Appliance, the corresponding flows must be open.

## Interface

Once connected to the Shiva web portal, go to the "Bastion" tab in the left menu.

![](images/sessions.png)

The "Equipment" tab allows you to view the list of your equipment. An equipment corresponds to a connection configuration via a Bastion Appliance. For each equipment, its name, tags, description, the associated Appliance, the connection type (SSH or RDP), the host IP, and the keyboard configuration are indicated.

You can filter the list of your equipment according to the tags assigned to them, and a search engine allows you to search for a session by its name.

![](images/sessions2.png)

The "Appliances" tab gives you the list of your Bastion Appliances. For each Appliance, the name of the Appliance and its description are specified.

A search engine is available to allow you to search for an Appliance by its name.

![](images/appliances.png)

## Deploy an Appliance

Before you can deploy an Appliance, you must request a subscription to an Appliance via a support request.

## Open a flow to equipment

In the "Appliances" tab, click on the action bar of the Appliance you want to open. Then click on the "Open" button.

![](images/ouvrir_appliance.png)

Then enter the information necessary for the connection:

    - Choice of protocol (SSH or RDP);
    - IP address of the host to be administered;
    - Identification information;
    - Keyboard configuration.

Then click on "Connect" to open the Appliance. The console of the virtual machine to be administered then opens.

## Register equipment

To regularly access equipment to be managed, it is more suitable to create equipment configuration, which will only require your username and password for each connection.

To do this, go to the "Equipment" tab of the "Bastion" menu, then click on the "New equipment" button.

![](images/creer_session.png)

Then enter the information necessary to create your equipment:

    - Equipment name;
    - Description;
    - Associated Appliance;
    - Protocol type (SSH or RDP);
    - Host IP address;
    - Keyboard language.

![](images/creer_session2.png)

A notification indicating the creation of your equipment configuration should appear at the top right of the page. The configuration is then added to the list of your equipment.

To create a new connection, you can also go through the "Appliances" tab by clicking on the action bar of the Appliance to which you want to associate an equipment configuration.

![](images/creer_session3.png)

## Connect to equipment

Go to the "Equipment" tab of the "Bastion" tab. Click on the action bar of the equipment you want to open, and click on the "Open" button.

![](images/ouvrir_session.png)

For each connection to the equipment, you only need to provide your authentication information.

![](images/ouvrir_session2.png)

After entering your credentials, a notification confirming the start of the session appears and the console to your virtual machine opens.

## Modify equipment configuration

Go to the "Equipment" tab of the "Bastion" section, click on the action bar of the equipment you want to modify, and click on the "Modify" button.

![](images/modifier_session.png)

You can then modify the name of the equipment, its description, the associated Appliance, the protocol (SSH or RDP), the host IP address, or the keyboard language.

![](images/modifier_session2.png)

## Delete equipment configuration

Go to the "Equipment" tab of the "Bastion" section, click on the action bar of the equipment you want to delete, and click on the "Delete" button.

![](images/supprimer_session.png)