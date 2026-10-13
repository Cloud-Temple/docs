---
title: Concepts
---

## Two options are available

- __physical hosting per 'U'__ in a shared rack and shared space,
- __dedicated rack hosting__ of at least 42 'U' in shared space.

Supported Housing orders are accessible in the __Orders (Order)__ module of the Cloud Temple console: space reservation, installation and un-racking, technical assistance, smart hands, and cabling/uncabling. For operations not supported by the console, contact support. The request must specify in particular:

    Your Organization's name
    A contact name with their email and phone number to finalize the configuration
    The tenant name
    The desired hosting type (shared per 'U' or dedicated per rack)
    The desired quantity
    The equipment type and its specifications (size, weight, power consumption, heat dissipation, ...)

The Cloud Temple support team will contact you to finalize the request.

## Shared hosting

### Appliance Hosting (réseau, firewall, ...)

Shared hosting takes place in a rack shared among various Cloud Temple clients. [La segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) is done per 'U' (unité de rack).
A rack unit measures 1.75 inches (44.45 mm) in height. Shared hosting racks are equipped with two separate power chains.

The maximum equipment weight per 'U' is 25 kg. Beyond that, you must order the number of 'U's required to support the total weight of your equipment.

For example, for equipment weighing 34 kg, you must order 2 rack units.

For each rack unit, you can request one or two C13 power outlets depending on your needs.

Each power outlet is limited to 150W at 220V per 'U'.

If you want your equipment to have a power capacity of 1500W across two power supplies, you must request

1500 W / 150 W = 10 'U', which means 5 'U' (or 750 W) per power chain.

Network connectivity must be subscribed to separately based on the expected port type and desired bandwidth. Here are the possible options per network port:

- Copper `100MBps/1Gbps`,
- Fiber 1Gbps/10Gbps via an SFP module provided for Cloud Temple-side connectivity.

For these equipment units, cooling is necessarily done from the front of the rack to the back, and __the appliance takes its network connectivity at the front of the rack.__

__*Note:*__ *the minimum commitment is 12 months.*

| Reference                                          | Unit   | SKU                                    | Commitment |
| -------------------------------------------------- | ------ | -------------------------------------- | ---------- |
| RACK HOSTING - 1 U Shared - 150W (1 C13)           | 1 U    | csp:(region):hosting:shared:basic:v1   | 12 months  |
| RACK HOSTING - 1 U Shared - 300W (2 C13)           | 1 U    | csp:(region):hosting:shared:premium:v1 | 12 months  |

### Server Hosting

The __'Servers'__ work units are designed to accommodate server heat dissipation and __provide rear network connectivity__, simplifying maintenance operations and thus optimizing rack cooling.

__They are mandatory for servers.__

| Reference                                                    | Unit | SKU                                        | Commitment |
| ------------------------------------------------------------ | ---- | ------------------------------------------ | ---------- |
| RACK HOSTING - 1 U Shared - Server - 400 W (2 C19)           | 2 U  | csp:(region):hosting:shared:srv:basic:v1   | 12 months  |
| RACK HOSTING - 1 U Shared - Server - 800 W (2 C19)           | 2 U  | csp:(region):hosting:shared:srv:premium:v1 | 12 months  |

## Dedicated Hosting

Dedicated rack hosting is located in a shared hosting zone outside of secnumcloud. The dedicated hosting rack has a minimum dimension of 42 'U' or 42 rack units.
The depth is 1200 millimeters, with 1000 millimeters usable for equipment. The width is 600 millimeters.

It is delivered with the necessary cooling, secured front and rear doors, and 3 Kw of power across 2 electrical chains of 16 amperes each.

Additional power increments of 2Kw can be requested. __The maximum weight of equipment that can be integrated into the dedicated rack is 1000kg__.

The rack is equipped with 'PDU' (unité de distribution d'énergie) tailored to the subscribed power capacity and monitored. There is one 'PDU' per electrical chain.

| Reference                                                    | Unit      | SKU                                        | Commitment |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| RACK HOSTING - 42U Dedicated Rack including 3Kw of power     | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 months  |
| POWER - 2 Kw additional                                      | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 months  |

### Network connectivity for physical hosting

Network connectivity must be subscribed to in addition to physical hosting, based on the expected port type and desired bandwidth. Here are the possible options per network port:

- Copper 1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for Cloud Temple side connectivity.

It is also possible to request connectivity in the meet-me room zone of the various datacenters to receive your operator connectivity.
This connectivity must necessarily be fiber optic at speeds of 1Gbps or 10Gbps.

| Reference                                                              | Unit     | SKU                                    | Commitment |
| ---------------------------------------------------------------------- | -------- | -------------------------------------- | ---------- |
| NETWORK - 1 port - 1 Gbps - fiber or copper                            | 1 port   | csp:(region):hosting:shared:port1g:v1  | 36 months  |
| NETWORK - 1 port - 10 Gbps - fiber                                     | 1 port   | csp:(region):hosting:shared:port10g:v1 | 36 months  |
| NETWORK - Private link connection in an AZ meet-me room - 1 port 1Gbps | 1 package| csp:(region):hosting:mmr:v1:1g         | 36 months  |
| NETWORK - Private link connection in an AZ meet-me room - 1 port 10Gbps| 1 package| csp:(region):hosting:mmr:v1:10g        | 36 months  |

### 'Hands & Eyes' Services

In addition to physical hosting and network connectivity services, you can request professional assistance services for your physical hosting.

They are performed by datacenter technicians or Cloud Temple engineers specialized in datacenters.

Below are the main 'Hands & Eyes' service units available. They aim to address the following tasks:

- Accompanying a previously identified external technician,
- Checking equipment status (état des LEDS, état de fonctionnement, ...),
- Taking photos of a previously identified customer equipment,
- Pressing a switch,
- Rebooting the equipment,
- Connecting an access terminal for remote control,
- Replacing cabling without modifying the existing wiring.

| Reference | Unit | SKU | GTI |
| --- | --- | --- | --- |
| Hand's & Eyes datacenter - Business Hours (8h - 19h; Lundi au vendredi) | 1 hour | csp:(region):hosting:ho:std:v1 | 2 hours |
| Hand's & Eyes datacenter - Business Hours (8h - 19h; Lundi au vendredi) - URGENT | 1 hour | csp:(region):hosting:ho:fast:v1 | 30 minutes |
| Hand's & Eyes datacenter - Non-Business Hours (nuit, week end et jours fériés) | 1 hour | csp:(region):hosting:hno:std:v1 | 2 days |
| Hand's & Eyes datacenter - Non-Business Hours (nuit, week end et jours fériés) - URGENT | 1 hour | csp:(region):hosting:hno:fast:v1 | 2 hours |

You can also avail a Cloud Temple datacenter engineer to handle the following tasks:

- Racking (avec les équipements de protection et de levage adaptés),
- Cabling (suivant le plan de câblage préalablement remis),
- Cabling modification or relocation of existing equipment,
- Operator network connectivity assistance.

| Reference | Unit | SKU | GTI |
| --- | --- | --- | --- |
| Datacenter Engineer - Business Hours (8h - 19h; Lundi au vendredi) | 1 task | csp:(region):hosting:ho:std:v1 | 2 days |
| Datacenter Engineer - Business Hours (8h - 19h; Lundi au vendredi) - URGENT | 1 task | csp:(region):hosting:ho:fast:v1 | 4 hours |

__Note:__

- *All requests must go through opening a ticket in the Cloud Temple console*,
- *In case of an urgent request, call the on-call support after opening the ticket in the Cloud Temple console*,
- *Any started hour is billable.*