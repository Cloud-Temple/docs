---
title: Concepts
---

## Two options are available:

- __physical hosting by 'U'__ in shared bays and shared space,
- __dedicated hosting by rack__ of at least 42 'U' in shared space.

The request for physical hosting is made through __a service request__ specifying:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The type of hosting desired (shared by 'U' or dedicated by rack)
    The desired quantity
    The type of equipment and its characteristics (size, weight, power consumption, heat dissipation, ...)

The Cloud Temple support team will contact you to finalize the request.

## Shared Hosting

### Hosting of appliances (network, firewall, ...)

Shared hosting is performed in a rack shared between different Cloud Temple clients. [The segmentation](https://en.wikipedia.org/wiki/Rack_unit) is done at the 'U' (rack unit) level.
A rack unit measures 1.75 inches (or 44.45 mm) in height. Shared hosting racks have two distinct electrical chains. 

The maximum weight of the equipment for each 'U' unit is 25Kg. Beyond that, it is necessary to order the number of 'U' units required to support the total weight of your equipment.

For example, for equipment weighing 34 Kg, it is necessary to subscribe to 2 rack units.

It is possible for each rack unit to request to benefit from one or two C13 type electrical outlets according to your needs.

Each electrical outlet is limited to 150W at 220v for each 'U'.

If you want your equipment to benefit from 1500W power on two power supplies, it is necessary to request
1500 W / 150 W = 10 'U', i.e., 5 'U' (or 750 W) per electrical chain.

Network connectivity should be subscribed to in parallel according to expected port type and desired bandwidth. Here are the possible options per network port:

- Copper 100MBps/1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for connectivity on the Cloud Temple side.

For these operational units, the cooling is necessarily from the front face of the rack to the rear face, and **the appliance takes its network connectivity from the front face of the rack.**

__*Note:*__ *the minimum commitment is 12 months.*

| Reference                                           | Unit | SKU                                    | Commitment |
| --------------------------------------------------- | ---- | -------------------------------------- | ---------- |
| RACK HOSTING - 1 U Shared - 150W (1 C13)            | 1 U  | csp:(region):hosting:shared:basic:v1   | 12 months  |

| RENTAL IN RACK - Shared 1 U - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 months  |

### Server Hosting

The **'Servers'** work units are designed to adapt to the thermal dissipation of servers and **provide rear-facing network connectivity**, simplifying maintenance operations and optimizing rack cooling.

**They are mandatory for servers.**

| Reference                                                      | Unit  | SKU                                        | Commitment |
| -------------------------------------------------------------  | ----- | ------------------------------------------ | ---------- |
| RENTAL IN RACK - Shared 1 U - Server - 400 W (2 C19)           | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 months  |
| RENTAL IN RACK - Shared 1 U - Server - 800 W (2 C19)           | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 months  |


## Dedicated Hosting


Dedicated rack hosting is conducted in a shared hosting area outside of secnumcloud. The dedicated hosting rack has a minimum dimension of 42 'U' or 42 rack units.
The depth is 1200 millimeters, with 1000 millimeters usable by the equipment. The width is 600 millimeters.

It is delivered with the necessary cooling, secure front and rear doors, and 3 Kw of power on 2 electrical chains of 16 amperes each.

It is possible to request additional power levels in increments of 2Kw. __The maximum weight of the equipment that can be integrated into the dedicated rack is 1000kg__.

The bay is equipped with 'PDU' (Power Distribution Unit) suited to the subscribed power and monitored. There is one 'PDU' per electrical chain.

| Reference                                                    | Unit       | SKU                                        | Commitment |

| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| RACK HOUSING - Dedicated 42U Rack including 3Kw of energy    | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 months  |
| ENERGY - Additional 2 Kw                                     | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 months  |

### Network Connectivity for Physical Hosting

Network connectivity must be subscribed in addition to physical hosting, depending on the type of port and desired bandwidth. Here are the possible options per network port:

- Copper 1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for connectivity on the Cloud Temple side.

It is also possible to request connectivity in the meet me room zone of various data centers to receive your operator connectivity.
This connectivity is necessarily fiber optic at speeds of 1Gbps or 10GBps.
| Reference                                                              | Unit      | SKU                                    | Commitment |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| NETWORK - 1 port - 1 Gbps - fiber or copper                            | 1 port    | csp:(region):hosting:shared:port1g:v1  | 36 months  |
| NETWORK - 1 port - 10 Gbps - fiber                                     | 1 port    | csp:(region):hosting:shared:port10g:v1 | 36 months  |
| NETWORK - Private link connection in meet me room of an AZ - 1 port 1Gbps | 1 package | csp:(region):hosting:mmr:v1:1g         | 36 months  |
| NETWORK - Private link connection in meet me room of an AZ - 1 port 10Gbps | 1 package | csp:(region):hosting:mmr:v1:10g        | 36 months  |

### 'Hands & Eyes' Services
In addition to physical hosting and network connectivity services, it is possible to request professional support services for your physical hosting.

These services are operated by datacenter technicians or by Cloud Temple engineers specialized in datacenter operations.

Here are the main 'Hands & Eyes' service units available. They aim to address the following tasks:

- Assisting an identified external participant,
- Checking the status of equipment (LED status, operational status, ...),
- Taking photos of pre-identified client equipment,
- Pressing a contactor,
- Restarting the equipment,
- Connecting an access terminal for remote control,
- Replacing a connector without altering the wiring.

| Reference                                                                               | Unit   | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Datacenter Hand's & Eyes - Business hours (8am - 7pm; Monday to Friday)                 | 1 hour  | csp:(region):hosting:ho:std:v1   | 2 hours    |
| Datacenter Hand's & Eyes - Business hours (8am - 7pm; Monday to Friday) - URGENT        | 1 hour  | csp:(region):hosting:ho:fast:v1  | 30 minutes |
| Datacenter Hand's & Eyes - Non-business hours (night, weekend, and holidays)            | 1 hour  | csp:(region):hosting:hno:std:v1  | 2 days     |
| Datacenter Hand's & Eyes - Non-business hours (night, weekend, and holidays) - URGENT   | 1 hour  | csp:(region):hosting:hno:fast:v1 | 2 hours    |

You can also benefit from a Cloud Temple datacenter engineer for handling the following topics:

- Racking (with appropriate protective and lifting equipment),
- Cabling (according to the previously provided cabling plan),
- Wiring modification or relocation of existing equipment,
- Assistance with operator network connectivity.

| Reference                                                                    | Unit   | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Datacenter Engineer - Business hours (8 am - 7 pm; Monday to Friday)          | 1 act  | csp:(region):hosting:ho:std:v1  | 2 days   |
| Datacenter Engineer - Business hours (8 am - 7 pm; Monday to Friday) - URGENT | 1 act  | csp:(region):hosting:ho:fast:v1 | 4 hours  |

__Note:__

- *All requests must be submitted by opening an intervention ticket in the Cloud Temple console*,
- *For urgent requests, call the on-call team after opening the intervention ticket in the Cloud Temple console*,
- *Any started hour is due.*