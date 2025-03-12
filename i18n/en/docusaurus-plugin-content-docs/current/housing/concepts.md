---
title: Concepts
---

## Two options are available

- __physical hosting by 'U'__ in shared rack and shared space,
- __dedicated rack hosting__ with a minimum of 42 'U' in shared space.

The physical hosting request is made through __a service request__ indicating:

    Your Organization name
    The name of a contact with their email and phone number to finalize the configuration
    The tenant name
    The desired hosting type (shared by 'U' or dedicated by rack)
    The desired quantity
    The type of equipment and its characteristics (size, weight, power consumption, heat output, ...)

The Cloud Temple support team will contact you to finalize the request.

## Shared hosting

### Hosting of appliances (network, firewall, ...)

Shared hosting is done in a rack shared between different Cloud Temple clients. [Segmentation](https://en.wikipedia.org/wiki/Rack_unit) is done by 'U' (rack unit).
A rack unit measures 1.75 inches (or 44.45 mm) in height. Shared hosting racks have two separate power chains.

The maximum weight of equipment for each 'U' unit is 25kg. Beyond that, it is necessary to order the number of 'U's needed to support the total weight of your equipment.

For example, for equipment weighing 34 kg, it is necessary to subscribe to 2 rack units.

For each rack unit, it is possible to request one or two C13 type electrical outlets depending on your needs.

Each electrical outlet is limited to 150W at 220v for each 'U'.

If you want your equipment to have 1500W of power, on two power supplies, you need to request:

1500 W / 150 W = 10 'U', or 5 'U' (or 750 W) per power chain.

Network connectivity must be subscribed to separately by type of port required and desired bandwidth. Here are the possible options per network port:

- Copper 100MBps/1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for connectivity on the Cloud Temple side.

For these work units, cooling is necessarily done from the front of the bay to the rear, and __the appliance takes its network connectivity from the front of the bay.__

__*Note:*__ *the minimum commitment is 12 months.*

| Reference                                          | Unit | SKU                                    | Commitment |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| RACK HOSTING - 1 U Shared - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 months    |
| RACK HOSTING - 1 U Shared - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 months    |

### Server hosting

The __'Servers'__ work units are designed to adapt to the heat dissipation of servers and __provide network connectivity at the rear__, simplifying maintenance operations and thus optimizing the cooling of the bay.

__They are mandatory for servers.__

| Reference                                                    | Unit | SKU                                        | Commitment |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| RACK HOSTING - 1 U Shared - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 months    |
| RACK HOSTING - 1 U Shared - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 months    |

## Dedicated hosting

Dedicated rack hosting is done in a shared hosting area outside of secnumcloud. The dedicated hosting rack has a minimum dimension of 42 'U' or 42 rack units.
The depth is 1200 millimeters, of which 1000 millimeters are usable by equipment. The width is 600 millimeters.

It is delivered with the necessary cooling, secured front and rear doors, and 3 Kw of energy on 2 electrical chains of 16 amps each.

It is possible to request additional energy levels in 2Kw increments. __The maximum weight of equipment that can be integrated into the dedicated rack is 1000kg__.

The bay is equipped with 'PDUs' (power distribution units) adapted to the subscribed power and monitored. There is one 'PDU' per power chain.

| Reference                                                    | Unit      | SKU                                        | Commitment |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| RACK HOSTING - Dedicated 42 U Rack including 3Kw of energy | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 months    |
| ENERGY - Additional 2 Kw                                | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 months    |

### Network connectivity for physical hosting

Network connectivity must be subscribed to in addition to physical hosting by type of port required and desired bandwidth. Here are the possible options per network port:

- Copper 1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for connectivity on the Cloud Temple side.

It is also possible to request connectivity in the meet-me room area of the different datacenters to receive your operator connectivity.
This connectivity is necessarily in optical fiber at speeds of 1Gbps or 10GBps.

| Reference                                                              | Unit     | SKU                                    | Commitment |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| NETWORK - 1 port - 1 Gbps - fiber or copper                             | 1 port    | csp:(region):hosting:shared:port1g:v1  | 36 months    |
| NETWORK - 1 port - 10 Gbps - fiber                                      | 1 port    | csp:(region):hosting:shared:port10g:v1 | 36 months    |
| NETWORK - Private link connection in meet-me room of an AZ - 1 port 1Gbps  | 1 package | csp:(region):hosting:mmr:v1:1g         | 36 months    |
| NETWORK - Private link connection in meet-me room of an AZ - 1 port 10Gbps | 1 package | csp:(region):hosting:mmr:v1:10g        | 36 months    |

### 'Hands & Eyes' Services

In addition to physical hosting and network connectivity services, it is possible to request professional assistance services for your physical hosting.

They are operated by datacenter technicians or by Cloud Temple engineers specialized in datacenter operations.

Here are the main 'Hands & Eyes' work units available. They aim to address the following topics:

- Accompanying a previously identified external intervener,
- Checking the status of equipment (LED status, operating status, ...),
- Taking photos of previously identified client equipment,
- Pressing a switch,
- Restarting the equipment,
- Connecting an access terminal for remote control,
- Replacing connectors without modifying cabling.

| Reference                                                                               | Unit   | SKU                              | Response Time |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Datacenter Hand's & Eyes - Business hours (8am - 7pm; Monday to Friday)                 | 1 hour | csp:(region):hosting:ho:std:v1   | 2 hours   |
| Datacenter Hand's & Eyes - Business hours (8am - 7pm; Monday to Friday) - URGENT        | 1 hour | csp:(region):hosting:ho:fast:v1  | 30 minutes |
| Datacenter Hand's & Eyes - Non-business hours (night, weekend and holidays)          | 1 hour | csp:(region):hosting:hno:std:v1  | 2 days    |
| Datacenter Hand's & Eyes - Non-business hours (night, weekend and holidays) - URGENT | 1 hour | csp:(region):hosting:hno:fast:v1 | 2 hours   |

You can also benefit from a Cloud Temple datacenter engineer to address the following topics:

- Racking (with appropriate protection and lifting equipment),
- Cabling (according to the previously submitted cabling plan),
- Modification of cabling or relocation of existing equipment,
- Assistance with operator network connectivity.

| Reference                                                                    | Unit  | SKU                             | Response Time |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Datacenter Engineer - Business hours (8am - 7pm; Monday to Friday)          | 1 act | csp:(region):hosting:ho:std:v1  | 2 days  |
| Datacenter Engineer - Business hours (8am - 7pm; Monday to Friday) - URGENT | 1 act | csp:(region):hosting:ho:fast:v1 | 4 hours |

__Note:__

- *All requests must go through the opening of an intervention file in the Cloud Temple console*,
- *In case of an urgent request, call the on-call service after opening the intervention file in the Cloud Temple console*,
- *Any hour started is due.*
