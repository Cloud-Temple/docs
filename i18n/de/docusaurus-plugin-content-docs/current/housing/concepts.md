---
title: Konzepte
---

## Zwei Optionen stehen zur Verfügung

- __Physisches Hosting nach 'U'__ in gemeinsam genutztem Rack und gemeinsam genutztem Raum,
- __Dediziertes Rack-Hosting__ mit mindestens 42 'U' in gemeinsam genutztem Raum.

Die Anfrage für physisches Hosting erfolgt durch __eine Serviceanfrage__ mit folgenden Angaben:

    Name Ihrer Organisation
    Name eines Ansprechpartners mit E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Name des Tenants
    Gewünschter Hosting-Typ (gemeinsam genutzt nach 'U' oder dediziert nach Rack)
    Gewünschte Menge
    Art der Ausrüstung und ihre Eigenschaften (Größe, Gewicht, Stromverbrauch, Wärmeabgabe, ...)

Das Cloud Temple Support-Team wird sich mit Ihnen in Verbindung setzen, um die Anfrage abzuschließen.

## Gemeinsam genutztes Hosting

### Hosting von Appliances (Netzwerk, Firewall, ...)

Gemeinsam genutztes Hosting erfolgt in einem Rack, das von verschiedenen Cloud Temple-Kunden gemeinsam genutzt wird. [Die Segmentierung](https://de.wikipedia.org/wiki/Höheneinheit) erfolgt nach 'U' (Rack-Einheit).
Eine Rack-Einheit misst 1,75 Zoll (oder 44,45 mm) in der Höhe. Gemeinsam genutzte Hosting-Racks verfügen über zwei separate Stromketten.

Das maximale Gewicht der Geräte für jede 'U'-Einheit beträgt 25 kg. Darüber hinaus ist es notwendig, die Anzahl der 'U's zu bestellen, die erforderlich sind, um das Gesamtgewicht Ihrer Ausrüstung zu tragen.

Beispielsweise ist es für ein Gerät mit einem Gewicht von 34 kg notwendig, 2 Rack-Einheiten zu abonnieren.

Für jede Rack-Einheit ist es möglich, je nach Bedarf eine oder zwei elektrische Steckdosen vom Typ C13 anzufordern.

Jede Steckdose ist auf 150W bei 220V für jedes 'U' begrenzt.

Wenn Sie für Ihr Gerät 1500W Leistung auf zwei Netzteilen wünschen, müssen Sie Folgendes anfordern:

1500 W / 150 W = 10 'U', oder 5 'U' (oder 750 W) pro Stromkette.

Die Netzwerkkonnektivität muss separat nach Art des benötigten Ports und der gewünschten Bandbreite abonniert werden. Hier sind die möglichen Optionen pro Netzwerkport:

- Kupfer 100MBps/1Gbps,
- Glasfaser 1Gbps/10Gbps über ein SFP-Modul, das für die Konnektivität auf der Cloud Temple-Seite bereitgestellt wird.

Für diese Arbeitseinheiten erfolgt die Kühlung notwendigerweise von der Vorderseite des Racks zur Rückseite, und __die Appliance erhält ihre Netzwerkkonnektivität von der Vorderseite des Racks.__

__*Hinweis:*__ *Die Mindestvertragslaufzeit beträgt 12 Monate.*

| Referenz                                          | Einheit | SKU                                    | Vertragslaufzeit |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| RACK-HOSTING - 1 U Gemeinsam genutzt - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 Monate    |
| RACK-HOSTING - 1 U Gemeinsam genutzt - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 Monate    |

### Server-Hosting

Die Arbeitseinheiten __'Server'__ sind darauf ausgelegt, sich an die Wärmeabgabe von Servern anzupassen und __bieten Netzwerkkonnektivität auf der Rückseite__, was die Wartungsarbeiten vereinfacht und somit die Kühlung des Racks optimiert.

__Sie sind für Server obligatorisch.__

| Referenz                                                    | Einheit | SKU                                        | Vertragslaufzeit |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| RACK-HOSTING - 1 U Gemeinsam genutzt - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 Monate    |
| RACK-HOSTING - 1 U Gemeinsam genutzt - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 Monate    |

## Dediziertes Hosting

Dediziertes Rack-Hosting erfolgt in einem gemeinsam genutzten Hosting-Bereich außerhalb von secnumcloud. Das dedizierte Hosting-Rack hat eine Mindestgröße von 42 'U' oder 42 Rack-Einheiten.
Die Tiefe beträgt 1200 Millimeter, wovon 1000 Millimeter von Geräten nutzbar sind. Die Breite beträgt 600 Millimeter.

Es wird mit der notwendigen Kühlung, gesicherten Vorder- und Rücktüren und 3 kW Energie auf 2 elektrischen Ketten mit jeweils 16 Ampere geliefert.

Es ist möglich, zusätzliche Energiestufen in 2-kW-Schritten anzufordern. __Das maximale Gewicht der Geräte, die in das dedizierte Rack integriert werden können, beträgt 1000 kg__.

Das Rack ist mit 'PDUs' (Power Distribution Units) ausgestattet, die an die abonnierte Leistung angepasst und überwacht werden. Es gibt eine 'PDU' pro Stromkette.

| Referenz                                                    | Einheit      | SKU                                        | Vertragslaufzeit |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| RACK-HOSTING - Dediziertes 42 U Rack inklusive 3 kW Energie | 1 Rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 Monate    |
| ENERGIE - Zusätzliche 2 kW                                | 2 kW       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 Monate    |

### Netzwerkkonnektivität für physisches Hosting

Die Netzwerkkonnektivität muss zusätzlich zum physischen Hosting nach Art des benötigten Ports und der gewünschten Bandbreite abonniert werden. Hier sind die möglichen Optionen pro Netzwerkport:

- Kupfer 1Gbps,
- Glasfaser 1Gbps/10Gbps über ein SFP-Modul, das für die Konnektivität auf der Cloud Temple-Seite bereitgestellt wird.

Es ist auch möglich, Konnektivität im Meet-Me-Room-Bereich der verschiedenen Rechenzentren anzufordern, um Ihre Betreiberkonnektivität zu erhalten.
Diese Konnektivität erfolgt notwendigerweise über Glasfaser mit Geschwindigkeiten von 1 Gbps oder 10 Gbps.

| Referenz                                                              | Einheit     | SKU                                    | Vertragslaufzeit |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| NETZWERK - 1 Port - 1 Gbps - Glasfaser oder Kupfer                             | 1 Port    | csp:(region):hosting:shared:port1g:v1  | 36 Monate    |
| NETZWERK - 1 Port - 10 Gbps - Glasfaser                                      | 1 Port    | csp:(region):hosting:shared:port10g:v1 | 36 Monate    |
| NETZWERK - Private Link-Verbindung im Meet-Me-Room einer AZ - 1 Port 1Gbps  | 1 Paket | csp:(region):hosting:mmr:v1:1g         | 36 Monate    |
| NETZWERK - Private Link-Verbindung im Meet-Me-Room einer AZ - 1 Port 10Gbps | 1 Paket | csp:(region):hosting:mmr:v1:10g        | 36 Monate    |

### 'Hands & Eyes'-Dienste

Zusätzlich zu den physischen Hosting- und Netzwerkkonnektivitätsdiensten ist es möglich, professionelle Unterstützungsdienste für Ihr physisches Hosting anzufordern.

Sie werden von Rechenzentrum-Technikern oder von Cloud Temple-Ingenieuren, die auf Rechenzentren spezialisiert sind, betrieben.

Hier sind die wichtigsten verfügbaren 'Hands & Eyes'-Arbeitseinheiten. Sie zielen darauf ab, die folgenden Themen zu behandeln:

- Begleitung eines zuvor identifizierten externen Intervenienten,
- Überprüfung des Status von Geräten (LED-Status, Betriebsstatus, ...),
- Aufnahme von Fotos von zuvor identifizierten Kundengeräten,
- Drücken eines Schalters,
- Neustart des Geräts,
- Anschluss eines Zugangsterminals für Fernsteuerung,
- Austausch von Steckverbindern ohne Änderung der Verkabelung.

| Referenz                                                                               | Einheit   | SKU                              | Reaktionszeit |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Rechenzentrum Hand's & Eyes - Geschäftszeiten (8-19 Uhr; Montag bis Freitag)                 | 1 Stunde | csp:(region):hosting:ho:std:v1   | 2 Stunden   |
| Rechenzentrum Hand's & Eyes - Geschäftszeiten (8-19 Uhr; Montag bis Freitag) - DRINGEND        | 1 Stunde | csp:(region):hosting:ho:fast:v1  | 30 Minuten |
| Rechenzentrum Hand's & Eyes - Außerhalb der Geschäftszeiten (Nacht, Wochenende und Feiertage)          | 1 Stunde | csp:(region):hosting:hno:std:v1  | 2 Tage    |
| Rechenzentrum Hand's & Eyes - Außerhalb der Geschäftszeiten (Nacht, Wochenende und Feiertage) - DRINGEND | 1 Stunde | csp:(region):hosting:hno:fast:v1 | 2 Stunden   |

Sie können auch von einem Cloud Temple-Rechenzentrum-Ingenieur profitieren, um die folgenden Themen zu behandeln:

- Racking (mit geeigneter Schutz- und Hebeausrüstung),
- Verkabelung (gemäß dem zuvor eingereichten Verkabelungsplan),
- Änderung der Verkabelung oder Verlegung vorhandener Geräte,
- Unterstützung bei der Betreiber-Netzwerkkonnektivität.

| Referenz                                                                    | Einheit  | SKU                             | Reaktionszeit |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Rechenzentrum-Ingenieur - Geschäftszeiten (8-19 Uhr; Montag bis Freitag)          | 1 Akt | csp:(region):hosting:ho:std:v1  | 2 Tage  |
| Rechenzentrum-Ingenieur - Geschäftszeiten (8-19 Uhr; Montag bis Freitag) - DRINGEND | 1 Akt | csp:(region):hosting:ho:fast:v1 | 4 Stunden |

__Hinweis:__

- *Alle Anfragen müssen über die Eröffnung einer Interventionsakte in der Cloud Temple-Konsole erfolgen*,
- *Im Falle einer dringenden Anfrage rufen Sie den Bereitschaftsdienst an, nachdem Sie die Interventionsakte in der Cloud Temple-Konsole eröffnet haben*,
- *Jede begonnene Stunde wird berechnet.*
