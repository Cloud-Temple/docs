---
title: Häufig gestellte Fragen
---

## Welche Vorgänge erzeugen eine Aktivität?

Alle Vorgänge, die über die Konsole oder ihre API ausgeführt werden: Schreibvorgänge (Erstellung, Änderung, Löschung) ebenso wie Lesevorgänge. Jede Aktivität zeigt unter anderem den Initiator, das Datum, die Art des Vorgangs, die betroffenen Ressourcen und den Status. Siehe [Aktivitäten](./concepts.md#aktivitäten).

## Wann wechselt eine Aktivität von „Kürzlich“ zu „Archiviert“?

Sobald der Vorgang beendet ist, ob erfolgreich oder fehlgeschlagen, wechselt die Aktivität 24 bis 30 Stunden nach ihrer Erstellung in die Registerkarte **Archiviert**. Ein länger dauernder Vorgang bleibt in **Kürzlich**, solange er läuft, und wechselt dann innerhalb von 6 Stunden nach seinem Ende in **Archiviert**.

## Wie lange werden archivierte Aktivitäten aufbewahrt?

558 Tage, also etwa 18 Monate, ab ihrer Archivierung. Das ist länger als die Mindestdauer von 6 Monaten, die mit der SecNumCloud-Qualifizierung der Konsole verbunden ist.

## Gelten diese Fristen für alle Tenants gleichermaßen?

Ja. Sie werden von Cloud Temple auf Plattformebene festgelegt, sind für alle Tenants identisch und nicht konfigurierbar.

## Wie kann ich archivierte Aktivitäten einsehen oder abrufen?

In der Konsole über das Menü **Logs**, Registerkarte **Archiviert**, mit der Berechtigung `activity_read`. Über die API mit der Route `GET /activity/v1/activities/archive`: siehe [API der Konsole](./api.md#die-aktivitäten).

## Erfassen die Aktivitäten Ereignisse der Infrastruktur?

Nein. Sie erfassen die Vorgänge auf der Konsole und ihrer API, nicht die Ereignisse der zugrunde liegenden Infrastruktur.
