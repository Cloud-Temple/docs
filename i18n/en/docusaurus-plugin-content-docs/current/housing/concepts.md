---
title: Concepts
---

<a id="deux-options-sont-possibles"></a>

## Introduction

Cloud Temple Housing hosts your physical equipment (servers, network appliances, carrier equipment) in secure datacenters. Two options are available:

- **shared hosting per 'U'**, in a rack shared between several customers;
- **dedicated rack hosting**, of at least 42 'U', reserved for your organization.

The offer includes network connectivity to your equipment and datacenter assistance services.

:::info
Housing is hosted in a non-SecNumCloud zone.
:::

### Audiences and use cases

- **Legacy physical equipment**: hosting of servers that cannot be virtualized.
- **Network and security appliances**: firewalls and network equipment close to your cloud resources.
- **Carrier connection**: reception of a carrier link in the Meet Me Room.
- **Transition to the cloud**: temporary hosting during a progressive migration.
- **Regulatory constraints**: equipment that must remain physically separate.
- **Disaster recovery**: backup site for critical equipment.

## Benefits

| Benefit                  | Description                                                                                                       |
|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| Physical security        | Equipment is hosted in datacenters monitored 24/7, with strict access control.                                    |
| Freedom of configuration | You choose and configure the hardware according to your needs.                                                    |
| Dedicated space          | The dedicated rack offers a private space, without sharing with other customers.                                  |
| On-site support          | Datacenter technicians work on your behalf, without you having to travel.                                         |
| Proximity to the cloud   | Hosted equipment can be connected to other Cloud Temple products.                                                 |

## Features

| Feature                          | Description                                                                         |
|----------------------------------|-------------------------------------------------------------------------------------|
| Shared hosting                   | From 1 'U' and 150 W, for appliances or servers.                                    |
| Dedicated rack                   | 42 'U' rack with 3 kW of power, expandable in 2 kW increments.                      |
| Redundant power supply           | Two independent power chains.                                                       |
| Network connectivity             | Copper or fiber ports, up to 10 Gbps.                                               |
| Meet Me Room                     | Reception of a private carrier link at 1 Gbps or 10 Gbps.                           |
| Hands & Eyes services            | Ad hoc interventions by datacenter technicians.                                     |
| Datacenter engineer services     | Racking, cabling and connection management (patch management).                     |

### Orders and requests

Supported Housing orders are accessible in the __Orders (Order)__ module of the Cloud Temple Console: space reservation, installation and un-racking, technical assistance, smart hands, and cabling/uncabling. For operations not supported by the Console, contact support. The request must specify in particular:

- your organization's name;
- the name of a contact, with their email address and phone number, to finalize the configuration;
- the tenant name;
- the desired hosting type (shared per 'U' or dedicated per rack);
- the desired quantity;
- the equipment type and its specifications (size, weight, power consumption, heat dissipation, etc.).

The support team will then contact you to finalize the request.

<a id="services-hands--eyes"></a>

### Hands & Eyes services

Datacenter technicians can work on your behalf, in particular to:

- accompany a previously identified external contractor;
- check the status of equipment (LED status, operating status, etc.);
- take photos of previously identified equipment;
- press a switch or restart equipment;
- connect an access terminal for remote control;
- replace a connector without modifying the cabling.

### Datacenter engineer services

A datacenter engineer can handle:

- racking, with the appropriate protective and lifting equipment;
- cabling, following the previously provided cabling plan;
- modification of cabling or relocation of existing equipment;
- assistance with carrier network connectivity.

Any work on the physical cabling (network, power, optical fiber) is carried out exclusively by the datacenter engineers. The software configuration of your equipment remains under your control.

| Service                               | Time slot                                      | Response time        | Urgent response time |
|---------------------------------------|------------------------------------------------|----------------------|------------------|
| Hands & Eyes                          | Business hours (8:00 – 19:00, Monday to Friday) | 2 hours             | 30 minutes       |
| Hands & Eyes                          | Non-business hours (night, weekend, public holidays) | 2 days         | 2 hours          |
| Datacenter engineer                   | Business hours (8:00 – 19:00, Monday to Friday) | 2 days              | 4 hours          |

:::note
- All requests go through opening an intervention ticket in the Console.
- In case of emergency, call the on-call service after opening the ticket.
- Any hour started is billable.
:::

## Architecture

- **Infrastructure**: redundant power supply (two independent power feeds), controlled cooling and air conditioning, multi-layer physical security.
- **Integrations**: direct connection to Cloud Temple products and Meet Me Room for carrier connections.

## Regions and availability zones

Housing is available in the FR1 region, across three availability zones. The racks are located exclusively in France.

## Technical specifications

### Shared hosting

Shared hosting takes place in a rack shared between different customers. [Segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) is done per 'U' (rack unit). A rack unit measures 1.75 inches (i.e. 44.45 mm) in height. Shared hosting racks have two separate power chains.

The maximum equipment weight is 25 kg per 'U'. Beyond that, you must order the number of 'U' needed to support the total weight of the equipment: for example, 2 'U' for 34 kg equipment.

<a id="hébergement-dappliances-réseau-firewall-"></a>

#### Appliances (network, firewall…)

Each rack unit can have one or two C13 power outlets, according to your needs. Each outlet is limited to 150 W at 220 V. For 1,500 W equipment on two power supplies, you therefore need 1,500 W / 150 W = 10 'U', i.e. 5 'U' (750 W) per power chain.

Cooling flows from the front to the rear of the rack, and __the appliance takes its network connectivity at the front of the rack.__

#### Server hosting

The units dedicated to servers (2 'U', 400 W or 800 W on two C19 outlets) are adapted to the heat dissipation of servers and __provide network connectivity at the rear__, which simplifies maintenance and optimizes rack cooling. __They are mandatory for servers.__

### Dedicated hosting

The dedicated rack is installed in a shared hosting zone outside SecNumCloud.

| Parameter            | Value                                                                   |
|----------------------|-------------------------------------------------------------------------|
| Dimensions           | 42 'U' minimum; depth 1,200 mm, of which 1,000 mm usable; width 600 mm |
| Power                | 3 kW included on two 16 A power chains, expandable in 2 kW increments  |
| Maximum weight       | 1,000 kg per rack                                                       |
| Distribution         | One monitored PDU (power distribution unit) per power chain             |
| Equipment            | Cooling and secured doors at the front and rear                         |

<a id="connectivité-réseau-pour-lhébergement-physique"></a>

### Network connectivity

Network connectivity is subscribed in addition to hosting, by port type and desired bandwidth:

- copper 100 Mbps or 1 Gbps;
- fiber 1 Gbps or 10 Gbps, via an SFP module provided for Cloud Temple-side connectivity.

Meet Me Room connectivity also allows you to receive your carrier link. It is necessarily optical fiber, at 1 Gbps or 10 Gbps.

### Limits

- Maximum weight of 25 kg per 'U' in shared hosting, and 1,000 kg per dedicated rack.
- Power of 150 W per outlet in shared appliance hosting.
- Usable depth of 1,000 mm in a dedicated rack.

## Security and compliance

Housing is certified HDS and ISO 27001. It is hosted in a non-SecNumCloud zone.

- **Physical access control**: strict access, 24/7 monitoring and full traceability of interventions.
- **Escorted access**: any on-site visit is by appointment, escorted by a datacenter technician.
- **Encryption**: encryption of hosted equipment is your responsibility. The service ensures the physical security of the premises.

## Service availability

| Item                    | Availability objective, measured over one month |
|-------------------------|-----------------------------------------------|
| Power supply            | 100%                                          |
| Cooling                 | 100%                                          |

## Reversibility

At the end of the service, your equipment is returned to you:

| Operation                 | Deliverable        | Lead time | Cost      |
|---------------------------|--------------------|-----------|-----------|
| Hardware recovery         | Customer hardware  | 15 days   | Free of charge |
| Relocation assistance     | Logistics support  | On request | On quote |

## Pricing

Hosting is subscribed with a minimum commitment of 12 months. The prices and commitment periods for each option are published on the product page on the Cloud Temple website:
[Housing — pricing](https://www.cloud-temple.com/produits/housing-espace-dedie/).
