---
title: Concepts
---

## Two options are available

- __physical hosting in a shared rack__ with shared space and shared rack units,
- __dedicated rack hosting__ of at least 42 'U' in shared space.

The request for physical hosting is made via __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The type of hosting desired (shared 'U' or dedicated rack)
    The quantity desired
    The type of equipment and its characteristics (size, weight, power consumption, thermal dissipation, ...)

The Cloud Temple support team will contact you to finalize the request.

## Shared Hosting

### Hosting of appliances (network, firewall, ...)

Shared hosting is done in a rack shared between different Cloud Temple clients. [Segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) is done per 'U' (rack unit).
A rack unit measures 1.75 inches (i.e. 44.45 mm) in height. Shared hosting racks have two separate electrical circuits.

The maximum weight of equipment per 'U' is 25Kg. Beyond this, it is necessary to order the number of 'U' required to support the total weight of your equipment.

For example, for an equipment of 34 Kg, it is necessary to subscribe to 2 rack units.

It is possible for each rack unit to request one or two C13 electrical outlets depending on your needs.

Each electrical outlet is limited to 150W at 220v per 'U'.

If you wish your equipment to benefit from 1500W power, on two power supplies, it is necessary to request:

1500 W / 150 W = 10 'U', i.e. 5 'U' (or 750 W) per electrical circuit.

Network connectivity must be subscribed in parallel by type of expected port and desired bandwidth, here are the possible options per network port:

- Copper 100MBps/1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for Cloud Temple connectivity.

For these units, cooling is necessarily done from the front of the rack to the back, and __the appliance takes its network connectivity from the front of the rack.__

__*Note:*__ *The minimum commitment is 12 months.*

| Reference                                          | Unit | SKU                                    | Commitment |
| -------------------------------------------------- | ---- | -------------------------------------- | ---------- |
| SHARED RACK HOSTING - 1 U - 150W (1 C13)          | 1 U  | csp:(region):hosting:shared:basic:v1   | 12 months  |
| SHARED RACK HOSTING - 1 U - 300W (2 C13)          | 1 U  | csp:(region):hosting:shared:premium:v1 | 12 months  |

### Server Hosting

The __'Servers'__ units are designed to accommodate server thermal dissipation and __provide network connectivity from the back__, simplifying maintenance operations and optimizing rack cooling.

__They are mandatory for servers.__

| Reference                                                    | Unit | SKU                                        | Commitment |
| ------------------------------------------------------------ | ---- | ------------------------------------------ | ---------- |
| SHARED RACK HOSTING - 1 U - Server - 400 W (2 C19)          | 2 U  | csp:(region):hosting:shared:srv:basic:v1   | 12 months  |
| SHARED RACK HOSTING - 1 U - Server - 800 W (2 C19)          | 2 U  | csp:(region):hosting:shared:srv:premium:v1 | 12 months  |

## Dedicated Hosting

Dedicated rack hosting is done in a shared hosting area outside of secnumcloud. The dedicated rack has a minimum dimension of 42 'U' or 42 rack units.
The depth is 1200 millimeters of which 1000 millimeters are usable for equipment. The width is 600 millimeters.

It is delivered with the necessary cooling, secure front and rear doors, and 3 Kw of power on two 16-amp electrical circuits.

It is possible to request additional power tiers of 2Kw. __The maximum equipment weight that can be installed in the dedicated rack is 1000kg__.

The rack is equipped with PDU (power distribution unit) adapted to the subscribed power and monitored. There is a 'PDU' per electrical circuit.

| Reference                                                    | Unit      | SKU                                        | Commitment |
| ------------------------------------------------------------ | --------- | ------------------------------------------ | ---------- |
| SHARED RACK HOSTING - 42U Dedicated Rack including 3Kw power | 1 42U rack | csp:(region):hosting:dedicated:rack:v1     | 12 months  |
| POWER - 2 Kw additional                                      | 2 Kw      | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 months  |

### Network Connectivity for Physical Hosting

Network connectivity must be subscribed in addition to physical hosting by type of expected port and desired bandwidth, here are the possible options per network port:

- Copper 1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for Cloud Temple connectivity.

It is also possible to request connectivity in the meet me room of the different datacenters to receive your operator's connectivity.
This connectivity is necessarily fiber optic at 1Gbps or 10GBps speeds.

| Reference                                                              | Unit     | SKU                                    | Commitment |
| ---------------------------------------------------------------------- | -------- | -------------------------------------- | ---------- |
| NETWORK - 1 port - 1 Gbps - fiber or copper                             | 1 port   | csp:(region):hosting:shared:port1g:v1  | 36 months  |
| NETWORK - 1 port - 10 Gbps - fiber                                      | 1 port   | csp:(region):hosting:shared:port10g:v1 | 36 months  |
| NETWORK - Private link connection in meet me room of an AZ - 1 port 1Gbps  | 1 package | csp:(region):hosting:mmr:v1:1g         | 36 months  |
| NETWORK - Private link connection in meet me room of an AZ - 1 port 10Gbps | 1 package | csp:(region):hosting:mmr:v1:10g        | 36 months  |

### 'Hands & Eyes' Services

In addition to physical hosting and network connectivity services, it is possible to request professional assistance services for your physical hosting.

They are operated by datacenter technicians or Cloud Temple engineers specialized in datacenters.

Here are the main 'Hands & Eyes' units available. They aim to handle the following topics:

- Accompanying an external technician previously identified,
- Checking the status of a device (LED status, operating status, ...),
- Taking photos of a client device previously identified,
- Pressing a switch,
- Restarting the device,
- Connecting an access terminal for remote control,
- Replacing a connector without modifying the cabling.

| Reference                                                                               | Unit   | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | ------ | -------------------------------- | ---------- |
| Datacenter Hands & Eyes - Working hours (8h - 19h; Monday to Friday)                 | 1 hour | csp:(region):hosting:ho:std:v1   | 2 hours    |
| Datacenter Hands & Eyes - Working hours (8h - 19h; Monday to Friday) - URGENT        | 1 hour | csp:(region):hosting:ho:fast:v1  | 30 minutes |
| Datacenter Hands & Eyes - Non-working hours (night, weekend and holidays)          | 1 hour | csp:(region):hosting:hno:std:v1  | 2 days     |
| Datacenter Hands & Eyes - Non-working hours (night, weekend and holidays) - URGENT | 1 hour | csp:(region):hosting:hno:fast:v1 | 2 hours    |

You can also benefit from a Cloud Temple datacenter engineer to handle the following:

- Racking (with appropriate protection and lifting equipment),
- Cabling (according to the previously submitted cabling plan),
- Cabling modifications or moving an existing device,
- Assistance with operator network connectivity.

| Reference                                                                    | Unit  | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ----- | ------------------------------- | -------- |
| Datacenter Engineer - Working hours (8h - 19h; Monday to Friday)          | 1 act | csp:(region):hosting:ho:std:v1  | 2 days   |
| Datacenter Engineer - Working hours (8h - 19h; Monday to Friday) - URGENT | 1 act | csp:(region):hosting:ho:fast:v1 | 4 hours  |

__Note:__

- *All requests must go through the opening of an intervention file in the Cloud Temple console*,
- *In case of urgent request, call the on-call after opening the intervention file in the Cloud Temple console*,
- *Any started hour is due.*