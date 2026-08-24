---
title: Konzepte
---

## Zwei Optionen sind möglich

- __physisches Hosting pro 'U'__ in gemeinsam genutztem Rack und gemeinsam genutztem Rechenzentrum,
- __dediziertes Hosting pro Rack__ mit mindestens 42 'U' in gemeinsam genutztem Rechenzentrum.

Die Anfrage für physisches Hosting wird über __eine Serviceanfrage__ gestellt, die Folgendes angibt:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer zur Finalisierung der Konfiguration
    Der Name des Tenants
    der gewünschte Hosting-Typ (gemeinsam genutztes 'U' oder dediziertes Rack)
    Die gewünschte Menge
    Die Art der Ausrüstung und deren Eigenschaften (Größe, Gewicht, Energieverbrauch, Wärmeabfuhr, ...)

Das Cloud Temple Support-Team wird sich mit Ihnen in Verbindung setzen, um die Anfrage abzuschließen.

## Shared Hosting

### Hosting von Appliances (Netzwerk, Firewall, ...)

Das Shared-Hosting erfolgt in einem Rack, das von verschiedenen Cloud Temple-Kunden gemeinsam genutzt wird. [Die Segmentierung](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) erfolgt in 'U' (Rack-Einheiten).
Eine Rack-Einheit misst 1,75 Zoll (entspricht 44,45 mm) in der Höhe. Die Racks für Shared-Hosting verfügen über zwei separate Stromkreise.

Die maximale Gerätebelastung pro 'U'-Einheit beträgt 25 kg. Darüber hinaus muss die Anzahl der 'U'-Einheiten bestellt werden, die erforderlich ist, um das Gesamtgewicht Ihrer Geräte zu tragen.

Beispielsweise ist für ein Gerät mit einem Gewicht von 34 kg die Buchung von 2 Rack-Einheiten erforderlich.

Für jede Rack-Einheit kann je nach Bedarf eine oder zwei C13-Steckdosen angefordert werden.

Jede Steckdose ist pro 'U' auf 150 W bei 220 V begrenzt.

Wenn Sie für Ihre Geräte eine Leistung von 1500 W über zwei Stromversorgungen benötigen, müssen Sie anfordern:

1500 W / 150 W = 10 'U', also 5 'U' (bzw. 750 W) pro Stromkreis.

Die Netzwerkconnectivität muss parallel zum erwarteten Porttyp und zum gewünschten Durchsatz gebucht werden. Folgende Optionen stehen pro Netzwerkport zur Verfügung:

- Kupfer 100MBps/1Gbps,
- Glasfaser 1Gbps/10Gbps über ein von Cloud Temple bereitgestelltes SFP-Modul für die Konnektivität auf Cloud-Temple-Seite.

Für diese Buchungseinheiten erfolgt die Kühlung zwingend von der Vorderseite des Racks zur Rückseite, und __die Appliance nimmt ihre Netzwerkverbindung an der Vorderseite des Racks auf.__

__*Hinweis:*__ *Die Mindestlaufzeit beträgt 12 Monate.*

| Referenz                                          | Einheit | SKU                                    | Laufzeit |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| RACK-HOSTING - 1 U Shared - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 Monate    |
| RACK-HOSTING - 1 U Shared - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 Monate    |

### Server-Hosting

Die Einheiten __'Server'__ sind auf die Wärmeabfuhr der Server ausgelegt und __stellen eine Netzwerkanbindung an der Rückseite bereit__, was Wartungsarbeiten vereinfacht und die Kühlung des Racks optimiert.

__Sie sind für Server zwingend erforderlich.__

| Referenz                                                    | Einheit | SKU                                        | Laufzeit   |
| ------------------------------------------------------------ | ------- | ------------------------------------------ | ---------- |
| RACK-UNTERBRINGUNG - 1 U Geteilt - Server - 400 W (2 C19)    | 2 U     | csp:(region):hosting:shared:srv:basic:v1   | 12 Monate  |
| RACK-UNTERBRINGUNG - 1 U Geteilt - Server - 800 W (2 C19)    | 2 U     | csp:(region):hosting:shared:srv:premium:v1 | 12 Monate  |

## Dediziertes Hosting

Die dedizierte Rack-Unterbringung erfolgt in einer Shared-Hosting-Zone außerhalb von secnumcloud. Der dedizierte Hosting-Rack hat eine Mindestgröße von 42 'U' bzw. 42 Rack-Einheiten.
Die Tiefe beträgt 1200 Millimeter, wovon 1000 Millimeter für die Geräte nutzbar sind. Die Breite beträgt 600 Millimeter.

Er wird mit der notwendigen Kühlung, gesicherten Vor- und Rücktüren sowie 3 kW Stromversorgung über zwei separate Stromkreise mit jeweils 16 Ampere geliefert.

Es ist möglich, zusätzliche Stromstufen in Schritten von 2 kW anzufordern. __Die maximale Gesamtmasse der in den dedizierten Rack integrierbaren Geräte beträgt 1000 kg__.

Der Rack ist mit 'PDU' (Stromverteilungseinheiten) ausgestattet, die an die gebuchte Leistung angepasst und überwacht werden. Es gibt eine 'PDU' pro Stromkreis.

| Referenz                                                    | Einheit      | SKU                                        | Laufzeit |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| RACK-UNTERBRINGUNG - Dedizierter 42U-Rack inklusive 3 kW Stromversorgung | 1 42U-Rack | csp:(region):hosting:dedicated:rack:v1     | 12 Monate    |
| STROM - 2 kW Zusatzleistung                                | 2 kW       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 Monate    |

### Netzwerkverbindung für physisches Hosting

Die Netzwerkverbindung wird zusätzlich zum physischen Hosting je nach erwartetem Porttyp und gewünschter Bandbreite gebucht. Hier sind die möglichen Optionen pro Netzwerkport:

- Kupfer 1 Gbps,
- Glasfaser 1 Gbps/10 Gbps über ein von Cloud Temple bereitgestelltes SFP-Modul für die Verbindung auf Cloud-Temple-Seite.

Es ist ebenfalls möglich, eine Verbindung im Meet-Me-Room der verschiedenen Rechenzentren anzufordern, um Ihre Provider-Anbindung aufzunehmen.
Diese Verbindung erfolgt zwingend über Glasfaser mit Datenraten von 1 Gbps oder 10 Gbps.

| Referenz                                                              | Einheit     | SKU                                    | Laufzeit |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| NETZWERK - 1 Port - 1 Gbps - Glasfaser oder Kupfer                             | 1 Port    | csp:(region):hosting:shared:port1g:v1  | 36 Monate    |
| NETZWERK - 1 Port - 10 Gbps - Glasfaser                                      | 1 Port    | csp:(region):hosting:shared:port10g:v1 | 36 Monate    |
| NETZWERK - Private Link-Verbindung im Meet-Me-Room einer AZ - 1 Port 1 Gbps  | 1 Paket | csp:(region):hosting:mmr:v1:1g         | 36 Monate    |
| NETZWERK - Private Link-Verbindung im Meet-Me-Room einer AZ - 1 Port 10 Gbps | 1 Paket | csp:(region):hosting:mmr:v1:10g        | 36 Monate    |

### 'Hands & Eyes'-Dienste

Zusätzlich zu den physischen Hosting- und Netzwerkverbindungsdiensten können Sie professionelle Assistenzdienste für Ihr physisches Hosting in Anspruch nehmen.

Diese werden von Datacenter-Technikern oder von spezialisierten Cloud-Temple-Datacenter-Ingenieuren durchgeführt.

Im Folgenden finden Sie die verfügbaren Hauptarbeitspakete für 'Hands & Eyes'. Sie dienen der Bearbeitung der folgenden Aufgaben :

- Begleitung eines zuvor identifizierten externen Dienstleisters,
- Überprüfung des Status einer Ausrüstung (état des LEDS, état de fonctionnement, ...),
- Fotografieren einer zuvor identifizierten Kundenhardware,
- Betätigen eines Kontakts/Schalters,
- Neustart der Ausrüstung,
- Anschließen eines Zugriffsterminals zur Fernsteuerung,
- Austausch von Steckverbindern ohne Änderung der Verkabelung.

| Referenz                                                                               | Einheit   | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hand's & Eyes Datacenter - Geschäftszeiten (8h - 19h; Lundi au vendredi)                 | 1 Stunde | csp:(region):hosting:ho:std:v1   | 2 Stunden   |
| Hand's & Eyes Datacenter - Geschäftszeiten (8h - 19h; Lundi au vendredi) - DRINGEND        | 1 Stunde | csp:(region):hosting:ho:fast:v1  | 30 Minuten |
| Hand's & Eyes Datacenter - Außerhalb der Geschäftszeiten (nuit, week end et jours fériés)          | 1 Stunde | csp:(region):hosting:hno:std:v1  | 2 Tage    |
| Hand's & Eyes Datacenter - Außerhalb der Geschäftszeiten (nuit, week end et jours fériés) - DRINGEND | 1 Stunde | csp:(region):hosting:hno:fast:v1 | 2 Stunden   |

Sie können zudem einen Cloud-Temple-Datacenter-Ingenieur für die Bearbeitung der folgenden Aufgaben in Anspruch nehmen :

- Rackeinbau (avec les équipements de protection et de levage adaptés),
- Verkabelung (suivant le plan de câblage préalablement remis),
- Änderung der Verkabelung oder Verlegung einer bestehenden Ausrüstung,
- Unterstützung bei der Anbieter-Netzwerkverbindung.

| Referenz                                                                    | Einheit  | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Datacenter-Ingenieur - Geschäftszeiten (8h - 19h; Lundi au vendredi)          | 1 Leistung | csp:(region):hosting:ho:std:v1  | 2 Tage  |
| Datacenter-Ingenieur - Geschäftszeiten (8h - 19h; Lundi au vendredi) - DRINGEND | 1 Leistung | csp:(region):hosting:ho:fast:v1 | 4 Stunden |

__Hinweis:__

- *Jeder Antrag muss über die Erstellung eines Einsatzauftrags in der Cloud-Temple-Konsole erfolgen*,
- *Bei dringenden Anfragen ist nach Erstellung des Einsatzauftrags in der Cloud-Temple-Konsole der Bereitschaftsdienst zu kontaktieren*,
- *Jede begonnene Stunde wird vollständig berechnet.*