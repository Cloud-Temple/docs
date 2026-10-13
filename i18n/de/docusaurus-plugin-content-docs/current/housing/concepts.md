---
title: Konzepte
---

## Zwei Optionen sind möglich

- __physisches Hosting pro 'U'__ in einem gemeinsam genutzten Rack und gemeinsam genutztem Bereich,
- __dediziertes Hosting pro Rack__ mit mindestens 42 'U' in einem gemeinsam genutzten Bereich.

Die unterstützten Housing-Bestellungen sind im Modul __Bestellungen (Order)__ der Cloud Temple-Konsole verfügbar: Platzreservierung, Installation und Demontage, technischer Support, Smart Hands sowie Verkabelung/Entkabelung. Für von der Konsole nicht unterstützte Operationen wenden Sie sich bitte an den Support. Die Anfrage muss insbesondere folgende Angaben enthalten:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit E-Mail-Adresse und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    der gewünschte Hosting-Typ (Shared 'U' oder dediziertes Rack)
    Die gewünschte Menge
    Der Gerätetyp und seine Eigenschaften (Größe, Gewicht, Energieverbrauch, Wärmeentwicklung, ...)

Das Cloud Temple Support-Team wird sich mit Ihnen in Verbindung setzen, um die Anfrage abzuschließen.

## Shared Hosting

### Hosting von Appliances (Netzwerk, Firewall, ...)

Das Shared-Hosting erfolgt in einem gemeinsam genutzten Rack zwischen verschiedenen Cloud-Temple-Kunden. [Die Segmentierung](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) erfolgt in 'U' (Rack-Einheiten).
Eine Rack-Einheit misst 1,75 Zoll (entspricht 44,45 mm) in der Höhe. Die Racks für das Shared-Hosting verfügen über zwei separate Stromkreise.

Das maximale Gewicht der Geräte pro 'U' beträgt 25 kg. Darüber hinaus ist es erforderlich, die Anzahl der 'U' zu bestellen, die das Gesamtgewicht Ihrer Geräte tragen können.

Beispielsweise ist für ein Gerät mit 34 kg die Buchung von 2 Rack-Einheiten erforderlich.

Für jede Rack-Einheit kann je nach Bedarf eine oder zwei C13-Stromsteckdosen angefordert werden.

Jede Stromsteckdose ist pro 'U' auf 150 W bei 220 V begrenzt.

Wenn Ihr Gerät eine Leistung von 1500 W über zwei Netzteile beziehen soll, ist es erforderlich, Folgendes zu bestellen:

1500 W / 150 W = 10 'U', also 5 'U' (bzw. 750 W) pro Stromkreis.

Die Netzwerk-Konnektivität ist parallel nach gewünschtem Port-Typ und gewünschter Bandbreite zu buchen. Hier sind die möglichen Optionen pro Netzwerkport:

- Kupfer `100MBps/1Gbps`,
- Glasfaser 1 Gbps/10 Gbps über ein SFP-Modul, das für die Konnektivität auf Cloud-Temple-Seite bereitgestellt wird.

Bei diesen Geräten ist die Kühlung zwingend von der Vorderseite des Racks zur Rückseite gerichtet, und __die Appliance bezieht ihre Netzwerk-Konnektivität von der Vorderseite des Racks.__

__*Hinweis:*__ *Die Mindestvertragslaufzeit beträgt 12 Monate.*

| Referenz                                           | Einheit | SKU                                    | Laufzeit     |
| -------------------------------------------------- | ------- | -------------------------------------- | ------------ |
| RACK-HOSTING - 1 U SHARED - 150 W (1 C13)          | 1 U     | csp:(region):hosting:shared:basic:v1   | 12 Monate    |
| RACK-HOSTING - 1 U SHARED - 300 W (2 C13)          | 1 U     | csp:(region):hosting:shared:premium:v1 | 12 Monate    |

### Server-Hosting

Die Werkseinheiten __'Server'__ sind darauf ausgelegt, der Wärmeableitung der Server gerecht zu werden und __bieten eine rückseitige Netzwerkverbindung__, was die Wartungsarbeiten vereinfacht und somit die Kühlung des Racks optimiert.

__Sie sind für Server obligatorisch.__

| Referenz                                                   | Einheit | SKU                                        | Laufzeit |
| ------------------------------------------------------------ | ------- | ------------------------------------------ | -------- |
| RACK-HOSTING - 1 U Geteilt - Server - 400 W (2 C19)        | 2 U     | csp:(region):hosting:shared:srv:basic:v1   | 12 Monate |
| RACK-HOSTING - 1 U Geteilt - Server - 800 W (2 C19)        | 2 U     | csp:(region):hosting:shared:srv:premium:v1 | 12 Monate |

## Dedizierter Hosting

Der dedizierte Rack-Hosting erfolgt in einer gemeinsamen Hosting-Zone außerhalb von secnumcloud. Der dedizierte Hosting-Rack hat eine Mindesthöhe von 42 'U' (Rack-Einheiten).
Die Tiefe beträgt 1200 Millimeter, wovon 1000 Millimeter für die Geräte nutzbar sind. Die Breite beträgt 600 Millimeter.

Er wird mit der erforderlichen Kühlung, gesicherten Vorder- und Hintertüren sowie 3 Kw Stromversorgung auf 2 Stromkreisen mit je 16 Ampere geliefert.

Es können zusätzliche Stromkapazitäten in 2-Kw-Schritten angefordert werden. __Das maximale Gewicht der im dedizierten Rack integrierbaren Geräte beträgt 1000 kg__.

Der Rack-Schrank ist mit überwachten 'PDU's (Power Distribution Units) ausgestattet, die an die gebuchte Leistung angepasst sind. Pro Stromkreis ist ein 'PDU' vorhanden.

| Referenz                                                    | Einheit      | SKU                                        | Vertragslaufzeit |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------------- |
| RACK-HOSTING - Dedizierter 42U-Rack inkl. 3 Kw Stromversorgung | 1 Rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 Monate        |
| ZUSÄTZLICHE LEISTUNG - Zusätzliche 2 Kw                    | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 Monate        |

### Netzwerkconnectivity für das physische Hosting

Die Netzwerkconnectivity ist als Ergänzung zum physischen Hosting basierend auf dem gewünschten Porttyp und der gewünschten Bandbreite zu buchen. Nachfolgend die möglichen Optionen pro Netzwerkport:

- Kupfer 1 Gbps,
- Glasfaser 1 Gbps/10 Gbps über ein SFP-Modul, das für die Connectivity auf Cloud-Temple-Seite bereitgestellt wird.

Es ist ebenfalls möglich, eine Connectivity im Meet-Me-Room der verschiedenen Rechenzentren anzufordern, um Ihre Operator-Connectivity anzubinden.
Diese Connectivity erfolgt zwingend über Glasfaser mit Bandbreiten von 1 Gbps oder 10 Gbps.

| Referenz                                                              | Einheit     | SKU                                    | Vertragslaufzeit |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------------- |
| NETZWERK - 1 Port - 1 Gbps - Glasfaser oder Kupfer                     | 1 Port    | csp:(region):hosting:shared:port1g:v1  | 36 Monate        |
| NETZWERK - 1 Port - 10 Gbps - Glasfaser                                | 1 Port    | csp:(region):hosting:shared:port10g:v1 | 36 Monate        |
| NETZWERK - Privater Link-Anschluss im Meet-Me-Room einer AZ - 1 Port 1 Gbps | 1 Paket | csp:(region):hosting:mmr:v1:1g         | 36 Monate        |
| NETZWERK - Privater Link-Anschluss im Meet-Me-Room einer AZ - 1 Port 10 Gbps | 1 Paket | csp:(region):hosting:mmr:v1:10g        | 36 Monate        |

### Services 'Hands & Eyes'

Ergänzend zu den Diensten für physisches Hosting und Netzwerkconnectivity können professionelle Assistenzdienste für Ihr physisches Hosting angefordert werden.

Diese werden von Datacenter-Technikern oder von auf Datacenter spezialisierten Cloud Temple-Ingenieuren durchgeführt.

Nachfolgend finden Sie die wichtigsten verfügbaren 'Hands & Eyes'-Aufgaben. Diese dienen der Bearbeitung folgender Themen:

- Begleitung eines zuvor identifizierten externen Technikers,
- Feststellung des Status eines Geräts (LED-Status, Betriebszustand, ...),
- Fotografieren eines zuvor identifizierten Kunden-Geräts,
- Drücken einer Taste/eines Schalters,
- Neustart des Geräts,
- Anschließen eines Zugriffsterminals zur Fernsteuerung,
- Ersetzen einer Steckverbindung ohne Änderung der Verkabelung.

| Référence | Unité | SKU | GTI |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hands & Eyes Datacenter - Geschäftszeiten (8h - 19h; Montag bis Freitag) | 1 Stunde | csp:(region):hosting:ho:std:v1 | 2 Stunden |
| Hands & Eyes Datacenter - Geschäftszeiten (8h - 19h; Montag bis Freitag) - DRINGEND | 1 Stunde | csp:(region):hosting:ho:fast:v1 | 30 Minuten |
| Hands & Eyes Datacenter - Nicht-Geschäftszeiten (Nacht, Wochenende und Feiertage) | 1 Stunde | csp:(region):hosting:hno:std:v1 | 2 Tage |
| Hands & Eyes Datacenter - Nicht-Geschäftszeiten (Nacht, Wochenende und Feiertage) - DRINGEND | 1 Stunde | csp:(region):hosting:hno:fast:v1 | 2 Stunden |

Sie können zudem einen Cloud Temple Datacenter-Ingenieur für die Bearbeitung folgender Themen in Anspruch nehmen:

- Rack-Einbau (unter Verwendung geeigneter Schutz- und Hebetechnik),
- Verkabelung (gemäß dem zuvor übergebenen Verkabelungsplan),
- Änderung der Verkabelung oder Verschieben eines bestehenden Geräts,
- Unterstützung bei der Operator-Netzwerkconnectivity.

| Référence | Unité | SKU | GTI |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Datacenter-Ingenieur - Geschäftszeiten (8h - 19h; Montag bis Freitag) | 1 Einsatz | csp:(region):hosting:ho:std:v1 | 2 Tage |
| Datacenter-Ingenieur - Geschäftszeiten (8h - 19h; Montag bis Freitag) - DRINGEND | 1 Einsatz | csp:(region):hosting:ho:fast:v1 | 4 Stunden |

__Hinweis :__

- *Jede Anfrage muss über die Erstellung eines Einsatztickets in der Cloud Temple Console erfolgen*,
- *Bei dringenden Anfragen ist der Bereitschaftsdienst nach Erstellung des Einsatztickets in der Cloud Temple Console anzurufen*,
- *Angefangene Stunden werden voll berechnet.*