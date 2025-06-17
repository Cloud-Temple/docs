## Incident Management

Two types of incidents need to be distinguished: global incidents, which affect the entire system, and client-specific incidents, which only impact the resources or services associated with a specific client.

### Notification Management

To quickly inform users about new incidents, an email notification system has been implemented. From their user profile, a tab titled "*My Subscriptions*" allows users to subscribe to notifications for both types of incidents. Thus, they will receive an email within a very short time frame when an incident is reported or resolved.

<img src={shivaIncident_005} />

The email subject will indicate the type of incident, and in the case of an incident related to a perimeter, the name of the affected perimeter. The notification will also contain a link to directly access the incident details:

<img src={shivaIncident_006} />

## Access to ongoing operations and incidents

The operations tracking icon allows you to view planned operations on the Cloud Temple infrastructure as well as open incidents on the tenant. This icon is accessible in the icon bar at the top left of the screen and takes the form of an icon __'Tools'__.

<img src={shivaInterventionMenu01} />

This icon aims to provide visibility on planned, ongoing, and completed interventions and/or tenant incidents.

When interventions and/or incidents are ongoing, a number appears on the icon.

By clicking on quick view, you will find the ongoing interventions. It is also possible to click on __‘All interventions’__ or __‘All tenant incidents and reports’__ to display more details.

<img src={shivaInterventionMenu03} />

### Incidents within a client perimeter

The visibility of incidents specific to a client perimeter requires the __incident_read__ permission. These incidents are represented by a dedicated icon, accompanied by a red badge indicating the number of ongoing incidents.

The icon is clickable, allowing to list the tickets associated with the incidents. Each ticket includes a link to the incident details, offering the possibility to track the progress of their resolution:

<img src={shivaIncident_004} />

To view the details of an incident, you must be the ticket author or have the __support_management__ permission.

---
title: Planned Operations and Incident Management
---
import shivaInterventionMenu01 from './images/shiva_intervention_menu01.png'
import shivaInterventionMenu03 from './images/shiva_intervention_menu03.png'
import shivaInterventionMenu04 from './images/shiva_intervention_menu04.png'
import shivaInterventionMenu05 from './images/shiva_intervention_menu05.png'
import shivaIncident_001 from './images/shiva_incident_001.png'
import shivaIncident_002 from './images/shiva_incident_002.png'
import shivaIncident_003 from './images/shiva_incident_003.png'
import shivaIncident_004 from './images/shiva_incident_004.png'
import shivaIncident_005 from './images/shiva_incident_005.png'
import shivaIncident_006 from './images/shiva_incident_006.png'

As any cloud infrastructure platform, the Cloud Temple platform is subject to regular work and hardware and software maintenance.

## Tracking of Planned Interventions

The Interventions page consists of two tabs. The first tab allows you to view scheduled interventions for the next 30 days and ongoing interventions.

<img src={shivaInterventionMenu04} />

Completed interventions, on the other hand, are visible in the second tab 'Completed'

<img src={shivaInterventionMenu05} />

Access to this information requires the '__intervention_read__' permission for the user profile.

### Global Incidents

Retrieving information about global incidents does not require any special permissions. A red banner is displayed upon connecting to the console to alert users of an ongoing global incident being resolved. The user has the option to temporarily hide this banner during their session, but it will reappear with each new connection or page refresh as long as the incident remains unresolved.

<img src={shivaIncident_001} />

A button __'Learn more'__ redirects to the public incident tracking page, allowing access to additional information about the current incident:

<img src={shivaIncident_002} />

It is possible to obtain global incident reports. Access to these reports requires the specific permission '__incident_management__'.

Here is an example of the tab displaying these reports:

<img src={shivaIncident_003} />