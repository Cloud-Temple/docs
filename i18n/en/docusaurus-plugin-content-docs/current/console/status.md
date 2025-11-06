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

As with any cloud infrastructure platform, the Temple Cloud platform undergoes regular hardware and software maintenance and updates.

## Access to Current Operations and Incidents

The operations tracking icon allows you to view planned operations on the Cloud Temple infrastructure as well as open incidents on the tenant. This icon is accessible in the icon bar located in the top-left corner of the screen and appears as the __'Tools'__ icon.

<img src={shivaInterventionMenu01} />

This icon is designed to provide visibility into planned, ongoing, and completed interventions, as well as incidents affecting the tenant.

When ongoing interventions and/or incidents exist, a number appears on the icon.

By clicking on "Quick View," you can access the list of ongoing interventions. You can also click on __'All Interventions'__ or __'All Incidents and Tenant Reports'__ to view more detailed information.

<img src={shivaInterventionMenu03} />

## Scheduled Interventions Tracking

The Interventions page consists of two tabs. The first tab allows you to view interventions scheduled over the next 60 days and ongoing interventions.

<img src={shivaInterventionMenu04} />

Completed interventions are visible in the second tab, 'Completed'. Completed interventions are retained and accessible for 60 days in the past, enabling full tracking of the maintenance operation history.

<img src={shivaInterventionMenu05} />

Access to this information requires the user profile to have the '__intervention_read__' permission.

## Incident Management

Two types of incidents must be distinguished: global incidents, which affect the entire system, and client-specific incidents, which impact only the resources or services associated with a particular client.

### Global Incidents

Retrieving information about global incidents does not require any special permissions. A red banner is displayed immediately upon logging into the console to alert users of an ongoing global incident currently being resolved. Users have the option to temporarily hide this banner during their session, but it will reappear on each new login or page refresh as long as the incident remains unresolved.

<img src={shivaIncident_001} />

A __'Learn More'__ button redirects to the public incident tracking page, providing additional details about the current incident:

<img src={shivaIncident_002} />

Global incident reports can be accessed. Access to these reports requires the specific permission '__incident_management__'. Global incident reports are archived and remain accessible for 60 days after resolution, ensuring full traceability of system events.

Here is an example of the tab displaying these reports:

<img src={shivaIncident_003} />

### Incidents within a Client's Scope

Visibility into incidents specific to a client's scope requires the __incident_read__ permission. These incidents are represented by a dedicated icon, accompanied by a red badge indicating the number of ongoing incidents.

The icon is clickable, allowing users to list the tickets associated with the incidents. Each ticket includes a link to the incident details, enabling tracking of resolution progress. Resolved incidents and their incident reports (CRs) remain accessible for 60 days, supporting retrospective analysis and monitoring of corrective actions taken.

<img src={shivaIncident_004} />

To view the details of an incident, the user must either be the ticket author or hold the __support_management__ permission.

### Notification Management

To promptly inform users about new incidents, an email notification system has been implemented. From their user profile, users can subscribe to notifications for both types of incidents via a tab titled '*My Subscriptions*'. As a result, they will receive an email within a very short time frame upon the reporting or resolution of an incident.

<img src={shivaIncident_005} />

The email subject will indicate the incident type, and in the case of an incident related to a scope, it will include the name of the affected scope. The notification will also contain a link enabling direct access to the incident details:

<img src={shivaIncident_006} />