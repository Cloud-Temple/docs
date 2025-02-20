---
title: Geplante Operationen und Vorfallverwaltung
---

Wie jede Cloud-Infrastrukturplattform unterliegt auch die Cloud-Temple-Plattform regelmäßigen Hardware- und Softwarewartungen.

## Zugriff auf aktuelle Operationen und Vorfälle

Das Operationsverfolgungssymbol ermöglicht die Anzeige der geplanten Operationen auf der Cloud Temple-Infrastruktur sowie der offenen Vorfälle auf dem Tenant. Dieses Symbol ist in der Symbolleiste oben links auf dem Bildschirm zugänglich und hat die Form eines __'Werkzeugs'__-Symbols.

![](images/shiva_intervention_menu01.png)

Dieses Symbol soll Sichtbarkeit auf geplante, laufende und abgeschlossene Interventionen und/oder Vorfälle auf dem Tenant bieten.

Wenn Interventionen und/oder Vorfälle im Gange sind, erscheint eine Zahl auf dem Symbol.

Durch Klicken auf Schnellansicht finden Sie die laufenden Interventionen. Es ist auch möglich, auf __‘Alle Interventionen’__ oder __‘Alle Vorfälle und Berichte des Tenants’__ zu klicken, um weitere Details anzuzeigen.

![](images/shiva_intervention_menu03.png)

## Verfolgung geplanter Interventionen

Die Seite Interventionen besteht aus zwei Registerkarten. Die erste Registerkarte zeigt die für die kommenden 30 Tage geplanten und die laufenden Interventionen an.

![](images/shiva_intervention_menu04.png)

Abgeschlossene Interventionen sind in der zweiten Registerkarte 'Abgeschlossen' sichtbar.

![](images/shiva_intervention_menu05.png)

Der Zugriff auf diese Informationen erfordert für das Benutzerprofil die Berechtigung '**intervention_read**'.

## Vorfallverwaltung

Es gibt zwei Arten von Vorfällen zu unterscheiden: globale Vorfälle, die das gesamte System betreffen, und vorfallsspezifische Vorfälle, die nur die Ressourcen oder Dienste eines bestimmten Kunden betreffen.

### Globale Vorfälle

Für das Abrufen von Informationen zu globalen Vorfällen sind keine besonderen Berechtigungen erforderlich. Ein rotes Banner wird sofort nach der Anmeldung an der Konsole angezeigt, um auf einen in Bearbeitung befindlichen globalen Vorfall hinzuweisen. Der Benutzer hat die Möglichkeit, dieses Banner während seiner Sitzung vorübergehend auszublenden, aber es wird bei jeder neuen Anmeldung oder Seitenaktualisierung erneut angezeigt, solange der Vorfall ungelöst bleibt.

![](images/shiva_incident_001.png)

Eine Schaltfläche __'Mehr erfahren'__ leitet zur öffentlichen Vorfallverfolgungsseite weiter, auf der zusätzliche Informationen zum aktuellen Vorfall zugänglich sind:

![](images/shiva_incident_002.png)

Es ist möglich, Berichte über globale Vorfälle abzurufen. Der Zugriff auf diese Berichte erfordert die spezifische Berechtigung '**incident_management**'.

Hier ist ein Beispiel für die Registerkarte, die diese Berichte anzeigt:

![](images/shiva_incident_003.png)

### Vorfälle in einem Kundenbereich

Die Sichtbarkeit von vorfallspezifischen Vorfällen erfordert die Berechtigung **incident_read**. Diese Vorfälle werden durch ein spezielles Symbol angezeigt, das von einem roten Abzeichen begleitet wird, das die Anzahl der laufenden Vorfälle angibt.

Das Symbol ist anklickbar und ermöglicht die Auflistung der mit den Vorfällen verbundenen Tickets. Jedes Ticket enthält einen Link zu den Vorfalldetails und bietet die Möglichkeit, den Fortschritt ihrer Lösung zu verfolgen:

![](images/shiva_incident_004.png)

Um die Details eines Vorfalls einzusehen, muss der Benutzer der Autor des Vorfalltickets sein oder über die Berechtigung **support_management** verfügen.

### Benachrichtigungsverwaltung

Um Benutzer im Falle eines neuen Vorfalls schnell zu informieren, wurde ein E-Mail-Benachrichtigungssystem eingerichtet. Von ihrem Benutzerprofil aus können Benutzer im Tab '*Meine Abonnements*' Benachrichtigungen für beide Vorfalltypen abonnieren. Dadurch erhalten sie in kurzer Zeit eine E-Mail, wenn ein Vorfall gemeldet oder gelöst wird.

![](images/shiva_incident_005.png)

Der Betreff der E-Mail gibt den Vorfalltyp und im Falle eines vorfallspezifischen Vorfalls den Namen des betroffenen Bereichs an. Die Benachrichtigung enthält auch einen Link, über den direkt auf die Vorfalldetails zugegriffen werden kann:

![](images/shiva_incident_006.png)