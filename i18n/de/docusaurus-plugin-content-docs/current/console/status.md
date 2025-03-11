---
title: Geplante Operationen und Vorfallmanagement
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


Wie jede Cloud-Infrastrukturplattform unterliegt auch die Cloud-Temple-Plattform regelmäßig Hardware- und Software-Wartungsarbeiten.

## Zugriff auf laufende Operationen und Vorfälle

Das Operations-Tracking-Icon ermöglicht die Ansicht der geplanten Operationen auf der Cloud Temple-Infrastruktur sowie der offenen Vorfälle auf dem Mandanten. Dieses Icon ist in der Iconleiste oben links auf dem Bildschirm zugänglich und hat die Form eines __'Werkzeug'-Icons__.

<img src={shivaInterventionMenu01} />

Dieses Icon zielt darauf ab, Sichtbarkeit auf geplante, laufende und abgeschlossene Eingriffe und/oder Vorfälle auf dem Mandanten zu bieten.

Wenn Eingriffe und/oder Vorfälle im Gange sind, erscheint eine Zahl auf dem Icon.

Durch Klicken auf schnelle Ansicht finden Sie die laufenden Eingriffe. Es ist auch möglich, auf __'Alle Eingriffe'__ oder __'Alle Vorfälle und Berichte des Mandanten'__ zu klicken, um weitere Details anzuzeigen.

<img src={shivaInterventionMenu03} />

## Nachverfolgung der geplanten Eingriffe

Die Seite Eingriffe besteht aus zwei Registerkarten. Die erste Registerkarte ermöglicht die Ansicht der geplanten Eingriffe für die nächsten 30 Tage und der laufenden Eingriffe.

<img src={shivaInterventionMenu04} />

Abgeschlossene Eingriffe sind auf der zweiten Registerkarte 'Abgeschlossen' sichtbar.

<img src={shivaInterventionMenu05} />

Der Zugriff auf diese Informationen erfordert für das Benutzerprofil die Berechtigung '**intervention_read**'.

## Vorfallmanagement

Es gibt zwei Arten von Vorfällen: globale Vorfälle, die das gesamte System betreffen, und vorfallbezogene Vorfälle, die nur die Ressourcen oder Dienste eines bestimmten Kunden betreffen.

### Globale Vorfälle

Für den Abruf von Informationen zu globalen Vorfällen sind keine besonderen Berechtigungen erforderlich. Ein rotes Banner wird beim Anmelden an der Konsole angezeigt, um auf das Vorhandensein eines globalen Vorfalls hinzuweisen, der derzeit behoben wird. Der Benutzer hat die Möglichkeit, dieses Banner während seiner Sitzung vorübergehend auszublenden, aber es wird bei jeder neuen Anmeldung oder beim Aktualisieren der Seite wieder angezeigt, solange der Vorfall ungelöst bleibt.

<img src={shivaIncident_001} />

Eine Schaltfläche __'Mehr erfahren'__ leitet zur öffentlichen Vorfallverfolgungsseite weiter, auf der zusätzliche Informationen zum laufenden Vorfall zugänglich sind:

<img src={shivaIncident_002} />

Es ist möglich, Berichte über globale Vorfälle zu erhalten. Der Zugriff auf diese Berichte erfordert die spezifische Berechtigung '**incident_management**'.

Hier ist ein Beispiel für die Registerkarte, die diese Berichte anzeigt:

<img src={shivaIncident_003} />

### Vorfälle auf einem Sponsorbereich

Die Sichtbarkeit der vorfallbezogenen Vorfälle erfordert die Berechtigung **incident_read**. Diese Vorfälle werden durch ein entsprechendes Icon dargestellt, das von einem roten Abzeichen begleitet wird, das die Anzahl der laufenden Vorfälle anzeigt.

Das Icon ist anklickbar und ermöglicht die Auflistung der mit den Vorfällen verbundenen Tickets. Jedes Ticket enthält einen Link zu den Vorfalldetails und bietet die Möglichkeit, deren Fortschritt zu verfolgen:

<img src={shivaIncident_004} />

Um die Details eines Vorfalls einzusehen, ist es notwendig, der Verfasser des Vorfalltickets zu sein oder über die Berechtigung **support_management** zu verfügen.

### Benachrichtigungsmanagement

Um Benutzer im Falle eines neuen Vorfalls schnell zu informieren, wurde ein E-Mail-Benachrichtigungssystem eingerichtet. Von ihrem Benutzerprofil aus können sich Benutzer unter der Registerkarte '*Meine Abonnements*' für Benachrichtigungen zu beiden Vorfalltypen abonnieren. So erhalten sie eine E-Mail in kurzer Zeit bei der Meldung oder Lösung eines Vorfalls.

<img src={shivaIncident_005} />

Der Betreff der E-Mail gibt den Vorfalltyp und im Falle eines vorfallbezogenen Vorfalls den Namen des betroffenen Bereichs an. Die Benachrichtigung enthält auch einen Link, der direkt zu den Vorfalldetails führt:

<img src={shivaIncident_006} />