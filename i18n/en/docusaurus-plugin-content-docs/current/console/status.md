---
title: Scheduled Operations and Incident Management
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


Like any Cloud infrastructure platform, the Cloud Temple platform undergoes regular hardware and software maintenance works.

## Access to ongoing operations and incidents

The operations tracking icon allows you to view the scheduled operations on the Cloud Temple infrastructure as well as the open incidents on the tenant. This icon is accessible in the icon bar at the top left of the screen and has the form of a __'Tools'__ icon.

<img src={shivaInterventionMenu01} />

This icon aims to provide visibility on planned, ongoing, and completed interventions and/or incidents on the tenant.

When interventions and/or incidents are ongoing, a number appears on the icon.

By clicking on quick view, you will find the ongoing interventions. It is also possible to click on __‘All interventions’__ or __‘All tenant incidents and reports’__ to display more details.

<img src={shivaInterventionMenu03} />

## Tracking planned interventions

The Interventions page consists of two tabs. The first tab allows you to view the interventions planned for the next 30 days and the ongoing interventions.

<img src={shivaInterventionMenu04} />

The completed interventions, on the other hand, are visible in the second tab ‘Completed’

<img src={shivaInterventionMenu05} />

Access to this information requires the user profile permission '**intervention_read**'.

## Incident management

Two types of incidents are to be distinguished: global incidents, which affect the entire system, and incidents specific to a client perimeter, which impact only the resources or services associated with a particular client.

### Global Incidents

The retrieval of information concerning global incidents does not require any particular permission. A red banner is displayed upon logging into the console to warn of the presence of an ongoing global incident. The user has the option to hide this banner temporarily during the session, but it will reappear with each new login or page refresh, as long as the incident remains unresolved.

<img src={shivaIncident_001} />

A __'Learn more'__ button redirects to the public incident tracking page, providing access to additional information about the ongoing incident:

<img src={shivaIncident_002} />

It is possible to obtain the global incident reports. Access to these reports requires the specific '**incident_management**' permission.

Here is an example of the tab displaying these reports:

<img src={shivaIncident_003} />

### Incidents on a client perimeter

Visibility of incidents specific to a client perimeter requires the **incident_read** permission. These incidents are represented by a dedicated icon, accompanied by a red badge indicating the number of ongoing incidents.

The icon is clickable, allowing you to list the tickets associated with the incidents. Each ticket includes a link to the incident details, offering the possibility to track the progress of their resolution:

<img src={shivaIncident_004} />

To view the details of an incident, it is necessary to be the author of the incident ticket or to have the **support_management** permission.

### Notification management

In order to quickly inform users in case of a new incident, an email notification system has been put in place. From their user profile, a tab titled '*My subscriptions*' allows users to subscribe to notifications for both types of incidents. Thus, they will receive an email shortly upon the declaration or resolution of an incident.

<img src={shivaIncident_005} />

The subject of the email will indicate the type of incident and, in the case of an incident related to a perimeter, the name of the impacted perimeter. The notification will also contain a link to directly access the incident details:

<img src={shivaIncident_006} />