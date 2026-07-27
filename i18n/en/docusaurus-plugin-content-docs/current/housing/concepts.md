---
title: Concepts
---

## Two options are available

- __physical hosting per 'U'__ in a shared cabinet and shared space,
- __dedicated hosting per rack__ of at least 42 'U' in shared space.

The physical hosting request is made via __a service request__ specifying:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The tenant name
    The desired hosting type (shared per 'U' or dedicated per rack)
    The desired quantity
    The equipment type and its specifications (size, weight, power consumption, thermal dissipation, ...)

The Cloud Temple support team will contact you to finalize the request.

## Shared Hosting

### Appliance Hosting (network, firewall, ...)

Shared hosting is performed in a rack shared among different Cloud Temple clients. [Segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) is done per 'U' (rack unit).
A rack unit measures 1.75 inches (or 44.45 mm) in height. Shared hosting racks feature two distinct power circuits.

The maximum equipment weight per 'U' unit is 25 kg. Beyond that, you must order the number of 'U's required to support the total weight of your equipment.

For example, for a 34 kg piece of equipment, you must subscribe to 2 rack units.

For each rack unit, you can request one or two C13-type power outlets depending on your needs.

Each power outlet is limited to 150W at 220V per 'U'.

If you want your equipment to draw 1500W of power across two power supplies, you must request

1500 W / 150 W = 10 'U's, or 5 'U's (or 750 W) per power circuit.

Network connectivity must be subscribed to in parallel based on the expected port type and desired bandwidth. Here are the possible options per network port:

- Copper 100MBps/1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for connectivity on the Cloud Temple side.

For these units, cooling must necessarily flow from the front of the rack to the rear, and __the appliance receives its network connectivity at the front of the rack.__

__*Note:*__ *the minimum commitment is 12 months.*

| Reference                                          | Unit  | SKU                                    | Commitment |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| RACK HOSTING - 1 U Shared - 150W (1 C13)           | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 months  |
| RACK HOSTING - 1 U Shared - 300W (2 C13)           | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 months  |

### Server Hosting

The __'Servers'__ service units are designed to accommodate server heat dissipation and __provide rear network connectivity__, simplifying maintenance operations and thus optimizing rack cooling.

__They are mandatory for servers.__

| Reference                                                    | Unit  | SKU                                        | Commitment |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| RACK HOSTING - 1 U Shared - Server - 400 W (2 C19)           | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 months  |
| RACK HOSTING - 1 U Shared - Server - 800 W (2 C19)           | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 months  |

## Dedicated Hosting

Dedicated rack hosting is provided in a shared hosting zone outside of secnumcloud. The dedicated hosting rack has a minimum dimension of 42 'U' or 42 rack units.
The depth is 1200 millimeters, of which 1000 millimeters are usable for equipment. The width is 600 millimeters.

It is delivered with the necessary cooling, secure front and rear doors, and 3 kW of power across 2 power feeds of 16 amperes each.

Additional power increments of 2 kW can be requested. __The maximum weight of equipment that can be installed in the dedicated rack is 1000 kg__.

The rack is equipped with 'PDU's (Power Distribution Units) sized for the subscribed capacity and monitored. There is one 'PDU' per power feed.

| Reference                                                    | Unit       | SKU                                        | Commitment |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| RACK HOSTING - 42 U Dedicated Rack including 3 kW of power   | 1 42U rack | csp:(region):hosting:dedicated:rack:v1     | 12 months  |
| POWER - 2 kW additional                                      | 2 kW       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 months  |

### Network connectivity for physical hosting

Network connectivity must be subscribed to in addition to physical hosting, based on the expected port type and desired bandwidth. Here are the available options per network port:

- Copper 1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for connectivity on the Cloud Temple side.

It is also possible to request connectivity in the meet-me room area of the various data centers to receive your carrier connectivity.
This connectivity must necessarily be via optical fiber at speeds of 1Gbps or 10Gbps.

| Reference                                                              | Unit     | SKU                                    | Commitment |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| NETWORK - 1 port - 1 Gbps - fiber or copper                             | 1 port    | csp:(region):hosting:shared:port1g:v1  | 36 months    |
| NETWORK - 1 port - 10 Gbps - fiber                                      | 1 port    | csp:(region):hosting:shared:port10g:v1 | 36 months    |
| NETWORK - Private link connection in an AZ meet-me room - 1 port 1Gbps  | 1 package | csp:(region):hosting:mmr:v1:1g         | 36 months    |
| NETWORK - Private link connection in an AZ meet-me room - 1 port 10Gbps | 1 package | csp:(region):hosting:mmr:v1:10g        | 36 months    |

### 'Hands & Eyes' Services

In addition to physical hosting and network connectivity services, you can request professional assistance services for your physical hosting.

They are performed by datacenter technicians or by Cloud Temple engineers specialized in datacenters.

Here are the main available 'Hands & Eyes' work units. They are designed to address the following tasks:

- Escorting a previously identified external technician,
- Checking the status of a device (LED status, operational state, ...),
- Taking photos of a previously identified client device,
- Pressing a contactor/power button,
- Restarting the device,
- Connecting an access terminal for remote control,
- Replacing a connector without modifying the cabling.

| Reference                                                                               | Unit   | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | ------ | -------------------------------- | ---------- |
| Hands & Eyes datacenter - Business hours (8 AM - 7 PM; Monday to Friday)                 | 1 hour | csp:(region):hosting:ho:std:v1   | 2 hours    |
| Hands & Eyes datacenter - Business hours (8 AM - 7 PM; Monday to Friday) - URGENT        | 1 hour | csp:(region):hosting:ho:fast:v1  | 30 minutes |
| Hands & Eyes datacenter - Non-business hours (nights, weekends, and public holidays)     | 1 hour | csp:(region):hosting:hno:std:v1  | 2 days     |
| Hands & Eyes datacenter - Non-business hours (nights, weekends, and public holidays) - URGENT | 1 hour | csp:(region):hosting:hno:fast:v1 | 2 hours    |

You can also benefit from a Cloud Temple datacenter engineer to address the following tasks:

- Racking (using appropriate protective and lifting equipment),
- Cabling (following the previously provided cabling plan),
- Cabling modification or relocation of an existing device,
- Assistance with operator network connectivity.

| Reference                                                                    | Unit  | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ----- | ------------------------------- | -------- |
| Datacenter Engineer - Business hours (8 AM - 7 PM; Monday to Friday)          | 1 task | csp:(region):hosting:ho:std:v1  | 2 days   |
| Datacenter Engineer - Business hours (8 AM - 7 PM; Monday to Friday) - URGENT | 1 task | csp:(region):hosting:ho:fast:v1 | 4 hours  |

__Note :__

- *All requests must be submitted by opening an intervention ticket in the Cloud Temple console*,
- *In case of an urgent request, call the on-call support after opening the intervention ticket in the Cloud Temple console*,
- *Any started hour is billed in full.*