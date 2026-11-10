---
title: Geplante Vorgänge und Incident-Management
---
import shivaInterventionMenu01 from '@site/docs/console/images/shiva_intervention_menu01.png'
import shivaInterventionMenu03 from '@site/docs/console/images/shiva_intervention_menu03.png'
import shivaInterventionMenu04 from '@site/docs/console/images/shiva_intervention_menu04.png'
import shivaInterventionMenu05 from '@site/docs/console/images/shiva_intervention_menu05.png'
import shivaIncident_001 from '@site/docs/console/images/shiva_incident_001.png'
import shivaIncident_002 from '@site/docs/console/images/shiva_incident_002.png'
import shivaIncident_003 from '@site/docs/console/images/shiva_incident_003.png'
import shivaIncident_004 from '@site/docs/console/images/shiva_incident_004.png'
import shivaIncident_005 from '@site/docs/console/images/shiva_incident_005.png'
import shivaIncident_006 from '@site/docs/console/images/shiva_incident_006.png'

Wie jede Cloud-Infrastrukturplattform ist auch die Cloud Temple-Plattform regelmäßig Gegenstand von Arbeiten sowie von Hardware- und Softwarewartung.

## Zugriff auf laufende Vorgänge und Incidents

Über das Symbol zur Vorgangsverfolgung können Sie die geplanten Vorgänge an der Cloud Temple-Infrastruktur sowie die offenen Incidents des Tenants einsehen. Dieses Symbol befindet sich in der Symbolleiste oben links auf dem Bildschirm und hat die Form eines __'Werkzeuge'__-Symbols.

<img src={shivaInterventionMenu01} />

Dieses Symbol bietet einen Überblick über geplante, laufende und abgeschlossene Interventionen und/oder Incidents des Tenants.

Wenn Interventionen und/oder Incidents laufen, erscheint eine Zahl auf dem Symbol.

Mit einem Klick auf die Schnellansicht finden Sie die laufenden Interventionen. Sie können auch auf __'Alle Interventionen'__ oder __'Alle Incidents und Berichte des Tenants'__ klicken, um weitere Details anzuzeigen.

<img src={shivaInterventionMenu03} />

## Geplante Interventionen verfolgen

Die Seite "Interventionen" besteht aus zwei Registerkarten. Die erste Registerkarte zeigt die geplanten Interventionen für die nächsten 60 Tage sowie laufende Interventionen an.

<img src={shivaInterventionMenu04} />

Die abgeschlossenen Interventionen sind in der zweiten Registerkarte „Abgeschlossen“ sichtbar. Abgeschlossene Interventionen werden 60 Tage im Vergangenheitsbereich aufbewahrt und bleiben zugänglich, um einen vollständigen Überblick über die Wartungsgeschichte zu gewährleisten.

<img src={shivaInterventionMenu05} />

Der Zugriff auf diese Informationen erfordert für das Benutzerprofil die Berechtigung '__intervention_read__'.

## Incident-Management

Es sind zwei Arten von Incidents zu unterscheiden: globale Incidents, die das gesamte System betreffen, und Incidents, die spezifisch für einen Kundenbereich sind und nur die Ressourcen oder Dienste eines bestimmten Kunden beeinträchtigen.

### Globale Incidents

Für den Abruf von Informationen zu globalen Incidents ist keine besondere Berechtigung erforderlich. Direkt nach der Anmeldung an der Konsole wird ein rotes Banner angezeigt, das auf einen laufenden globalen Incident hinweist, an dessen Behebung gearbeitet wird. Der Benutzer kann dieses Banner während seiner Sitzung vorübergehend ausblenden; es erscheint jedoch bei jeder neuen Anmeldung oder beim Aktualisieren der Seite erneut, solange der Incident nicht behoben ist.

<img src={shivaIncident_001} />

Eine Schaltfläche __'Mehr erfahren'__ leitet auf die öffentliche Seite zur Verfolgung von Incidents weiter, auf der weitere Informationen zum laufenden Incident verfügbar sind:

<img src={shivaIncident_002} />

Die Berichte zu globalen Incidents können abgerufen werden. Der Zugriff auf diese Berichte erfordert die spezifische Berechtigung '__incident_management__'. Die Berichte zu globalen Incidents werden archiviert und bleiben nach ihrer Behebung 60 Tage lang zugänglich, was eine vollständige Nachvollziehbarkeit der Systemereignisse gewährleistet.

Hier ein Beispiel für den Tab, in dem diese Berichte angezeigt werden:

<img src={shivaIncident_003} />

### Incidents in einem Auftraggeberbereich

Die Sichtbarkeit von Incidents, die spezifisch für einen Kundenbereich sind, erfordert die Berechtigung __incident_read__. Diese Incidents werden durch ein eigenes Symbol dargestellt, begleitet von einem roten Badge, das die Anzahl der laufenden Incidents angibt.

Das Symbol ist anklickbar und listet die mit den Incidents verbundenen Tickets auf. Jedes Ticket enthält einen Link zu den Details des Incidents, sodass Sie den Fortschritt der Behebung verfolgen können. Behobene Incidents und ihre Berichte (CRs) bleiben 60 Tage lang einsehbar, was eine rückblickende Analyse und die Nachverfolgung der umgesetzten Korrekturmaßnahmen ermöglicht.

<img src={shivaIncident_004} />

Um die Details eines Incidents einzusehen, müssen Sie entweder der Autor des Incident-Tickets sein oder über die Berechtigung __support_management__ verfügen.

<a id="notification-management"></a>
### Verwaltung der Benachrichtigungen

Um die Benutzer bei einem neuen Incident schnell zu informieren, wurde ein E-Mail-Benachrichtigungssystem eingerichtet. In ihrem Benutzerprofil können die Benutzer über einen Tab mit dem Titel '*Meine Abonnements*' die Benachrichtigungen für beide Arten von Incidents abonnieren. So erhalten sie sehr kurzfristig eine E-Mail, wenn ein Incident gemeldet oder behoben wird.

<img src={shivaIncident_005} />

Der Betreff der E-Mail gibt die Art des Incidents an und enthält bei einem bereichsbezogenen Incident den Namen des betroffenen Bereichs. Die Benachrichtigung enthält außerdem einen Link, über den Sie direkt auf die Details des Incidents zugreifen können:

<img src={shivaIncident_006} />
