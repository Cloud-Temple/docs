---
title: Concepts
---

## Zwei Optionen sind möglich:

- __physisches Hosting im 'U'__ in einem gemeinschaftlichen Rack und gemeinschaftlichem Raum,
- __dediziertes Hosting pro Rack__ mit mindestens 42 'U' in einem gemeinschaftlichem Raum.

Der Antrag für physisches Hosting wird durch __einen Serviceantrag__ gestellt, der folgendes enthält:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail-Adresse und Telefonnummer zur abschließenden Konfiguration
    Der Name des Tenants
    Die gewünschte Art des Hostings (gemeinschaftlich im 'U' oder dediziert im Rack)
    Die gewünschte Menge
    Die Art der Ausrüstung und deren Merkmale (Größe, Gewicht, Energieverbrauch, Wärmeabgabe, ...)

Das Cloud Temple Supportteam wird sich mit Ihnen in Verbindung setzen, um den Antrag abzuschließen.

## Gemeinschaftliches Hosting

### Hosting von Appliances (Netzwerk, Firewall, ...)

Das gemeinschaftliche Hosting erfolgt in einem Rack, das von verschiedenen Cloud Temple Kunden geteilt wird. [Die Segmentierung](https://de.wikipedia.org/wiki/HE-Einheit) erfolgt im 'U' (Rack-Einheit).
Eine Rack-Einheit misst 1,75 Zoll (also 44,45 mm) in der Höhe. Die gemeinschaftlich genutzten Host-Racks haben zwei separate Stromkreisläufe.

Das maximale Gewicht der Geräte pro Rack-Einheit beträgt 25 kg. Darüber hinaus ist es notwendig, die Anzahl der 'U' zu bestellen, die zur Unterstützung des Gesamtgewichts Ihrer Ausrüstung erforderlich sind.

Zum Beispiel, für ein Gerät mit 34 kg ist es notwendig, 2 Rack-Einheiten zu buchen.

Es ist möglich, für jede Rack-Einheit eine oder zwei Steckdosen vom Typ C13 je nach Bedarf anzufordern.

Jede Steckdose ist auf 150 W bei 220 V pro 'U' begrenzt. 

Wenn Sie für Ihr Gerät eine Leistung von 1500 W auf zwei Stromversorgungen benötigen, müssen Sie anfordern

1500 W / 150 W = 10 'U', also 5 'U' (oder 750 W) pro Stromkreislauf.

Die Netzwerkkonnektivität muss parallel je nach erwarteten Port-Typ und gewünschter Bandbreite abonniert werden. Hier sind die möglichen Optionen pro Netzwerkport:

- Kupfer 100MBps/1Gbps,
- Glasfaser 1Gbps/10Gbps über ein SFP-Modul, das für die Konnektivität von Cloud Temple bereitgestellt wird.

Für diese Arbeitseinheiten erfolgt die Kühlung notwendigerweise von der Vorderseite des Racks zur Rückseite, und **die Appliance nimmt ihre Netzwerkkonnektivität von der Vorderseite des Racks.**

__*Hinweis:*__ *die Mindestverpflichtung beträgt 12 Monate.*

| Referenz                                             | Einheit | SKU                                    | Verpflichtung |
| ---------------------------------------------------- | ------- | -------------------------------------- | ------------- |
| HOSTING IM RACK - 1 U Gemeinschaftlich - 150W (1 C13) | 1 U    | csp:(region):hosting:shared:basic:v1   | 12 Monate     |
| HOSTING IM RACK - 1 U Gemeinschaftlich - 300W (2 C13) | 1 U    | csp:(region):hosting:shared:premium:v1 | 12 Monate     |

### Hosting von Servern

Die Arbeitseinheiten **'Server'** sind dafür vorgesehen, die Wärmeableitung der Server zu bewältigen und **bieten Netzwerkkonnektivität auf der Rückseite**, was die Wartungsarbeiten erleichtert und somit die Kühlung des Racks optimiert. 

**Sie sind für Server obligatorisch.**

| Referenz                                                        | Einheit | SKU                                        | Verpflichtung |
| ---------------------------------------------------------------- | ------- | ------------------------------------------ | ------------- |
| HOSTING IM RACK - 1 U Gemeinschaftlich - Server - 400 W (2 C19)  | 2 U    | csp:(region):hosting:shared:srv:basic:v1   | 12 Monate     |
| HOSTING IM RACK - 1 U Gemeinschaftlich - Server - 800 W (2 C19)  | 2 U    | csp:(region):hosting:shared:srv:premium:v1 | 12 Monate     |

## Dediziertes Hosting

Das dedizierte Hosting im Rack erfolgt in einem gemeinschaftlichen Hostingbereich außerhalb der SecNumCloud. Das dedizierte Hostingrack hat eine Größe von mindestens 42 'U' oder 42 Rakeinheiten.
Die Tiefe beträgt 1200 Millimeter, davon 1000 Millimeter nutzbar für die Geräte. Die Breite beträgt 600 Millimeter.

Es wird mit der notwendigen Kühlung, gesicherten Türen vorne und hinten und 3 kW Energie auf zwei 16-Ampere-Stromkreisen geliefert.

Es ist möglich, zusätzliche Leistungsschritte von 2 kW zu verlangen. __Das maximale Gewicht der im dedizierten Rack integrierbaren Geräte beträgt 1000 kg__.

Das Rack ist mit 'PDUs' (Power Distribution Units) ausgestattet, die an die bestellte Leistung angepasst und überwacht werden. Es gibt ein 'PDU' pro Stromkreis.

| Referenz                                                        | Einheit        | SKU                                        | Verpflichtung |
| ---------------------------------------------------------------- | -------------- | ------------------------------------------ | ------------- |
| HOSTING IM RACK - Dediziertes Rack 42 U inkl. 3 kW Energie       | 1 Rack 42U    | csp:(region):hosting:dedicated:rack:v1     | 12 Monate     |
| ENERGIE - 2 kW zusätzlich                                        | 2 kW          | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 Monate     |

### Netzwerkkonnektivität für physisches Hosting

Die Netzwerkkonnektivität muss zusätzlich zum physischen Hosting je nach erwarteten Port-Typ und gewünschter Bandbreite abonniert werden. Hier sind die möglichen Optionen pro Netzwerkport:

- Kupfer 1Gbps,
- Glasfaser 1Gbps/10Gbps über ein SFP-Modul, das für die Konnektivität von Cloud Temple bereitgestellt wird.

Es ist auch möglich, eine Konnektivität im Meet-Me-Raum der verschiedenen Rechenzentren anzufordern, um Ihre Betreiberkonnektivität zu empfangen.
Diese Konnektivität muss unbedingt über Glasfaser mit Geschwindigkeiten von 1Gbps oder 10GBps erfolgen.

| Referenz                                                               | Einheit | SKU                                        | Verpflichtung |
| ----------------------------------------------------------------------- | ------- | ------------------------------------------ | ------------- |
| NETZWERK - 1 Port - 1 Gbps - Glasfaser oder Kupfer                      | 1 Port | csp:(region):hosting:shared:port1g:v1      | 36 Monate     |
| NETZWERK - 1 Port - 10 Gbps - Glasfaser                                 | 1 Port | csp:(region):hosting:shared:port10g:v1     | 36 Monate     |
| NETZWERK - Private Verbindung im Meet-Me-Raum einer AZ - 1 Port 1Gbps   | 1 Paket| csp:(region):hosting:mmr:v1:1g             | 36 Monate     |
| NETZWERK - Private Verbindung im Meet-Me-Raum einer AZ - 1 Port 10Gbps  | 1 Paket| csp:(region):hosting:mmr:v1:10g            | 36 Monate     |

### 'Hands & Eyes' Services

Zusätzlich zu den Services für physisches Hosting und Netzwerkkonnektivität ist es möglich, professionelle Assistenzservices für Ihr physisches Hosting zu beantragen.

Diese werden von Datacenter-Technikern oder Cloud Temple Ingenieuren, die auf Datacenter spezialisiert sind, erbracht.

Hier sind die wichtigsten verfügbaren 'Hands & Eyes' Arbeitseinheiten. Sie zielen darauf ab, die folgenden Themen zu behandeln:

- Begleitung eines zuvor identifizierten externen Technikers,
- Überprüfen eines Status auf einem Gerät (Status der LEDs, Betriebsstatus, ...),
- Fotografieren eines zuvor identifizierten Kunden-Geräts,
- Betätigen eines Schalters,
- Neustarten des Geräts,
- Anschließen eines Zugangsterminals für die Fernsteuerung,
- Ersetzen einer Verbindung ohne Änderung der Verkabelung.

| Referenz                                                                               | Einheit| SKU                                        | GTI        |
| -------------------------------------------------------------------------------------- | -------| ------------------------------------------ | ---------- |
| Hands & Eyes Datencenter - Öffnungszeiten (8h - 19h; Montag bis Freitag)                | 1 Stunde| csp:(region):hosting:ho:std:v1             | 2 Stunden  |
| Hands & Eyes Datencenter - Öffnungszeiten (8h - 19h; Montag bis Freitag) - DRINGEND     | 1 Stunde| csp:(region):hosting:ho:fast:v1            | 30 Minuten |
| Hands & Eyes Datencenter - Außerhalb der Öffnungszeiten (Nacht, Wochenende und Feiertage)| 1 Stunde| csp:(region):hosting:hno:std:v1            | 2 Tage     |
| Hands & Eyes Datencenter - Außerhalb der Öffnungszeiten (Nacht, Wochenende und Feiertage) - DRINGEND | 1 Stunde| csp:(region):hosting:hno:fast:v1          | 2 Stunden  |

Sie können auch einen Cloud Temple Datacenter-Ingenieur beauftragen, um die folgenden Themen zu behandeln:

- Rackmontage (mit geeignetem Hebe- und Schutzgerät),
- Verkabelung (gemäß dem vorher übergebenen Verkabelungsplan),
- Änderung der Verkabelung oder Umzug eines vorhandenen Geräts,
- Unterstützung bei Betreiber-Netzwerkkonnektivität.

| Referenz                                                                    | Einheit | SKU                              | GTI       |
| ---------------------------------------------------------------------------- | ------- | -------------------------------- | --------- |
| Datacenter-Ingenieur - Öffnungszeiten (8h - 19h; Montag bis Freitag)         | 1 Auftrag| csp:(region):hosting:ho:std:v1   | 2 Tage    |
| Datacenter-Ingenieur - Öffnungszeiten (8h - 19h; Montag bis Freitag) - DRINGEND | 1 Auftrag| csp:(region):hosting:ho:fast:v1  | 4 Stunden |

__Hinweis:__

- *Jeder Antrag muss über die Eröffnung eines Einsatzdossiers in der Cloud Temple-Konsole gestellt werden*,
- *Im Falle eines dringenden Antrags rufen Sie den Bereitschaftsdienst nach der Öffnung des Einsatzdossiers in der Cloud Temple-Konsole an*,
- *Jede angebrochene Stunde wird berechnet.*