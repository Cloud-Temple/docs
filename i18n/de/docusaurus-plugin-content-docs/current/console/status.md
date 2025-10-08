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

Wie jede Cloud-Infrastrukturplattform unterliegt die Cloud Temple-Plattform regelmäßigen Hardware- und Software-Wartungsarbeiten.

## Zugriff auf laufende Operationen und Vorfälle

Das Symbol zur Operationsverfolgung ermöglicht es Ihnen, die geplanten Operationen auf der Cloud Temple-Infrastruktur sowie die offenen Vorfälle auf dem Tenant zu sehen. Dieses Symbol ist in der Symbolleiste oben links auf dem Bildschirm zugänglich und hat die Form eines __'Werkzeug'__-Symbols.

<img src={shivaInterventionMenu01} />

Dieses Symbol soll Sichtbarkeit über geplante, laufende und abgeschlossene Eingriffe und/oder Vorfälle auf dem Tenant bieten.

Wenn Eingriffe und/oder Vorfälle laufen, erscheint eine Zahl auf dem Symbol.

Durch Klicken auf Schnellansicht finden Sie die laufenden Eingriffe. Es ist auch möglich, auf __'Alle Eingriffe'__ oder __'Alle Tenant-Vorfälle und Berichte'__ zu klicken, um mehr Details anzuzeigen.

<img src={shivaInterventionMenu03} />

## Verfolgung geplanter Eingriffe

Die Seite Eingriffe besteht aus zwei Registerkarten. Die erste Registerkarte ermöglicht es Ihnen, die für die nächsten 60 Tage geplanten Eingriffe und die laufenden Eingriffe zu sehen.

<img src={shivaInterventionMenu04} />

Die abgeschlossenen Eingriffe hingegen sind in der zweiten Registerkarte 'Abgeschlossen' sichtbar. Abgeschlossene Eingriffe werden 60 Tage lang in der Vergangenheit aufbewahrt und sind zugänglich, was eine umfassende Verfolgung der Wartungsoperationshistorie ermöglicht.

<img src={shivaInterventionMenu05} />

Der Zugriff auf diese Informationen erfordert für das Benutzerprofil die Berechtigung '__intervention_read__'.

## Vorfallmanagement

Es sind zwei Arten von Vorfällen zu unterscheiden: globale Vorfälle, die das gesamte System betreffen, und Vorfälle, die spezifisch für einen Kundenbereich sind und nur die Ressourcen oder Dienste betreffen, die mit einem bestimmten Kunden verbunden sind.

### Globale Vorfälle

Der Abruf von Informationen zu globalen Vorfällen erfordert keine besondere Berechtigung. Ein rotes Banner wird beim Einloggen in die Konsole angezeigt, um vor dem Vorhandensein eines laufenden globalen Vorfalls zu warnen. Der Benutzer hat die Möglichkeit, dieses Banner während der Sitzung vorübergehend auszublenden, aber es wird bei jeder neuen Anmeldung oder bei einer Aktualisierung der Seite wieder erscheinen, solange der Vorfall nicht gelöst ist.

<img src={shivaIncident_001} />

Eine Schaltfläche __'Mehr erfahren'__ leitet zur öffentlichen Seite zur Vorfallverfolgung weiter, die Zugang zu zusätzlichen Informationen über den laufenden Vorfall bietet:

<img src={shivaIncident_002} />

Es ist möglich, die Berichte zu globalen Vorfällen zu erhalten. Der Zugriff auf diese Berichte erfordert die spezifische Berechtigung '__incident_management__'. Globale Vorfallberichte werden archiviert und sind 60 Tage nach ihrer Lösung zugänglich, um eine vollständige Nachverfolgbarkeit der Systemereignisse zu gewährleisten.

Hier ist ein Beispiel für die Registerkarte, die diese Berichte anzeigt:

<img src={shivaIncident_003} />

### Vorfälle in einem Kundenbereich

Die Sichtbarkeit von Vorfällen, die spezifisch für einen Kundenbereich sind, erfordert die Berechtigung __incident_read__. Diese Vorfälle werden durch ein spezielles Symbol dargestellt, begleitet von einem roten Badge, das die Anzahl der laufenden Vorfälle anzeigt.

Das Symbol ist anklickbar und ermöglicht es, die mit den Vorfällen verbundenen Tickets aufzulisten. Jedes Ticket enthält einen Link zu den Details des Vorfalls, der die Möglichkeit bietet, den Fortschritt ihrer Lösung zu verfolgen. Gelöste Vorfälle und ihre Berichte (CRs) bleiben 60 Tage lang zugänglich, was eine rückblickende Analyse und Verfolgung der implementierten Korrekturmaßnahmen ermöglicht.

<img src={shivaIncident_004} />

Um die Details eines Vorfalls einzusehen, ist es notwendig, der Autor des Vorfalltickets zu sein oder über die Berechtigung __support_management__ zu verfügen.

### Benachrichtigungsverwaltung

Um Benutzer im Falle eines neuen Vorfalls schnell zu informieren, wurde ein E-Mail-Benachrichtigungssystem eingerichtet. Von ihrem Benutzerprofil aus ermöglicht eine Registerkarte mit dem Titel '*Meine Abonnements*' den Benutzern, Benachrichtigungen für beide Arten von Vorfällen zu abonnieren. So erhalten sie kurz nach der Meldung oder Lösung eines Vorfalls eine E-Mail.

<img src={shivaIncident_005} />

Der Betreff der E-Mail gibt die Art des Vorfalls an und, im Falle eines Vorfalls im Zusammenhang mit einem Bereich, den Namen des betroffenen Bereichs. Die Benachrichtigung enthält auch einen Link, um direkt auf die Details des Vorfalls zuzugreifen:

<img src={shivaIncident_006} />
