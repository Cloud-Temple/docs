---
title: Concepts
---
import bastion from '@site/docs/bastion/images/bastion.png'

<a id="cest-quoi-le-bastion-cloud-temple-"></a>

## Introduction

The Cloud Temple Bastion is a managed service that provides secure RDP or SSH connectivity from the Cloud Temple Console to your physical and virtual infrastructures, whether they are located on the trusted Cloud, on a public cloud or on-premise. It is the single entry point for your administrative access: your devices are administered without being exposed to the Internet, and all actions are traced for audit and compliance purposes.

<img src={bastion} />

### Audiences and use cases

The Bastion is intended for system administrators, DevOps teams, organizations subject to regulatory requirements and the public sector. Typical use cases:

- **Remote administrative access**: secure gateway to sensitive infrastructures.
- **Attack surface reduction**: no administered device is directly exposed to the Internet.
- **Partner and service provider access**: temporary and controlled access to devices.
- **Regulatory compliance**: traceability of actions for audits.
- **Multi-environment administration**: unified access to cloud and on-premise resources.

<a id="les-avantages"></a>

## Benefits

| Benefit                | Description                                                                                                                                                             |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Centralized management | The Bastion is accessible directly from the Console: all administrative access is managed in one place.                                                                |
| Security               | Devices administered via the Bastion are not exposed to the Internet, which notably protects them from port scanning by malicious users.                              |
| Traceability           | All administrative actions are logged.                                                                                                                                  |
| Access flexibility     | A single service administers devices located on the trusted Cloud, on a public cloud or on-premise.                                                                    |
| Infrastructure as Code | A REST API allows devices to be managed entirely "as Code".                                                                                                             |

## Features

| Feature                 | Description                                                                                         |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| RDP and SSH access      | Secure connection to the devices to be administered.                                                |
| Quick connection        | One-off connection to a device by specifying the protocol, its IP address and your credentials.     |
| Registered devices      | Reusable connection configuration: only your credentials are requested at each connection.          |
| Tags and search         | Organization of devices by tags, search by name.                                                    |
| Encrypted flows         | All communications between the Console, the Appliance and the devices are encrypted.                |
| Logging                 | Traceability of all administrative actions.                                                         |
| REST API                | Creation, modification and deletion of devices via API.                                             |

## Architecture

### The Bastion Appliance

The Bastion Appliance is a virtual machine deployed close to your devices. It carries a secure and direct flow from the Console to the devices to be administered located in the same virtual network.

The flow is encrypted and encapsulated in a VPN tunnel. The solution does not require opening a flow from the Internet to your infrastructures. The Appliance only needs access to the public IP of the Bastion Console module on port 443.

An Appliance can be used to make a quick connection to a device. At each connection, the desired protocol, the IP address of the machine and your credentials must be specified. To avoid entering this information at each connection, you can register the devices you administer regularly.

<a id="les-sessions"></a>

### Devices

A device is a connection configuration registered in the Bastion. It associates a machine to be administered (name, IP address, SSH or RDP protocol, keyboard layout) with the Appliance through which the flow transits.

This configuration is suited to regular connection to a device. The essential information is retained: only your credentials are requested when connecting.

### Integrations

- **Cloud Temple Console**: management of Appliances and devices from the "Bastion" menu.
- **REST API**: automation of device management.

## Regions and availability zones

The Bastion service is operated from the FR1 region, and its logs are hosted in France. The Appliance is deployed as close as possible to your devices: on the trusted Cloud, on a public cloud or on-premise.

## Technical specifications

| Parameter         | Value                                |
|-------------------|--------------------------------------|
| Protocols         | RDP, SSH                             |
| Managed devices   | Up to 50 per Appliance               |
| Encryption        | Mandatory, on all flows              |
| API               | REST                                 |
| Logging           | All administrative actions           |

### Limits

- An Appliance administers a maximum of 50 devices. Beyond that, deploy an additional Appliance.
- The devices to be administered must be reachable from the network where the Appliance is deployed.

## Security and compliance

The Bastion is certified HDS and ISO 27001. It is included in the SecNumCloud-qualified and C5-compliant services.

- **Encryption**: all flows are encrypted.
- **Isolation**: Appliances run in a dedicated environment, with strict logical isolation of the administration virtual machines.
- **Access control**: granular access control and enforcement of password policies.
- **Traceability**: all administrative actions are logged.

## Service availability

The availability target of the Bastion service is 99.9%, measured over one month.

## Reversibility

At the end of the service, you can retrieve the following items, free of charge:

| Exported item    | Deliverable               | Availability lead time      |
|------------------|---------------------------|-----------------------------|
| Audit logs       | Audit files               | 30 days                     |
| Configuration    | Appliance settings        | 15 days                     |

## Pricing

The Bastion is billed monthly, per Appliance. Prices are published on the product page on the Cloud Temple website:
[Bastion — pricing](https://www.cloud-temple.com/produits/bastion/).
