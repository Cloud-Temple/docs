---
title: Konzepte
---

<a id="deux-options-sont-possibles"></a>

## Einführung

Das Cloud Temple Housing beherbergt Ihre physischen Geräte (Server, Netzwerk-Appliances, Betreibergeräte) in gesicherten Rechenzentren. Zwei Optionen stehen zur Verfügung:

- **gemeinsam genutztes Hosting pro 'U'**, in einem von mehreren Kunden gemeinsam genutzten Rack;
- **dediziertes Hosting pro Rack**, mit mindestens 42 'U', ausschließlich für Ihre Organisation reserviert.

Das Angebot umfasst die Netzwerkkonnektivität zu Ihren Geräten sowie Unterstützungsleistungen im Rechenzentrum.

:::info
Das Housing wird in einer Nicht-SecNumCloud-Zone gehostet.
:::

### Zielgruppen und Anwendungsfälle

- **Physische Legacy-Geräte**: Hosting von Servern, die nicht virtualisiert werden können.
- **Netzwerk- und Sicherheits-Appliances**: Firewalls und Netzwerkgeräte in der Nähe Ihrer Cloud-Ressourcen.
- **Betreiberanbindung**: Empfang einer Betreiberleitung im Meet Me Room.
- **Übergang in die Cloud**: vorübergehendes Hosting während einer schrittweisen Migration.
- **Regulatorische Anforderungen**: Geräte, die physisch getrennt bleiben müssen.
- **Wiederherstellung nach einem Ausfall**: Ausweichstandort für kritische Geräte.

## Vorteile

| Vorteil                  | Beschreibung                                                                                                      |
|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| Physische Sicherheit     | Die Geräte werden in rund um die Uhr (24/7) überwachten Rechenzentren mit strenger Zugangskontrolle gehostet.     |
| Konfigurationsfreiheit   | Sie wählen und konfigurieren die Hardware nach Ihren Anforderungen.                                               |
| Dedizierter Raum         | Das dedizierte Rack bietet einen privaten Raum, ohne gemeinsame Nutzung mit anderen Kunden.                       |
| Unterstützung vor Ort    | Die Rechenzentrumstechniker handeln in Ihrem Auftrag, ohne dass Sie anreisen müssen.                              |
| Nähe zur Cloud           | Die gehosteten Geräte können mit den anderen Cloud Temple-Produkten verbunden werden.                             |

## Funktionen

| Funktion                         | Beschreibung                                                                        |
|----------------------------------|-------------------------------------------------------------------------------------|
| Gemeinsam genutztes Hosting      | Ab 1 'U' und 150 W, für Appliances oder Server.                                     |
| Dediziertes Rack                 | Rack mit 42 'U' und 3 kW Leistung, erweiterbar in Schritten von 2 kW.               |
| Redundante Stromversorgung       | Zwei unabhängige Stromkreise.                                                       |
| Netzwerkkonnektivität            | Kupfer- oder Glasfaserports, bis zu 10 Gbps.                                        |
| Meet Me Room                     | Empfang einer privaten Betreiberleitung mit 1 Gbps oder 10 Gbps.                    |
| Hands & Eyes-Dienste             | Punktuelle Einsätze der Rechenzentrumstechniker.                                    |
| Dienste eines Rechenzentrumsingenieurs | Einbau ins Rack, Verkabelung und Verwaltung der Verbindungen (Patch-Management). |

### Bestellungen und Anfragen

Die unterstützten Housing-Bestellungen sind im Modul __Bestellungen (Order)__ der Cloud Temple-Konsole verfügbar: Platzreservierung, Installation und Demontage, technischer Support, Smart Hands sowie Verkabelung/Entkabelung. Für von der Konsole nicht unterstützte Vorgänge wenden Sie sich an den Support. Die Anfrage muss insbesondere folgende Angaben enthalten:

- den Namen Ihrer Organisation;
- den Namen einer Kontaktperson mit ihrer E-Mail-Adresse und Telefonnummer, um die Konfiguration abzuschließen;
- den Namen des Tenants;
- den gewünschten Hosting-Typ (gemeinsam genutzt pro 'U' oder dediziertes Rack);
- die gewünschte Menge;
- den Gerätetyp und seine Eigenschaften (Abmessungen, Gewicht, Stromverbrauch, Wärmeabgabe usw.).

Das Support-Team setzt sich anschließend mit Ihnen in Verbindung, um die Anfrage abzuschließen.

<a id="services-hands--eyes"></a>

### Hands & Eyes-Dienste

Die Rechenzentrumstechniker können in Ihrem Auftrag tätig werden, insbesondere um:

- einen zuvor benannten externen Dienstleister zu begleiten;
- den Zustand eines Geräts festzustellen (LED-Status, Betriebszustand usw.);
- Fotos eines zuvor benannten Geräts aufzunehmen;
- einen Schalter zu betätigen oder ein Gerät neu zu starten;
- ein Zugangsterminal für eine Fernsteuerung anzuschließen;
- einen Steckverbinder ohne Änderung der Verkabelung auszutauschen.

### Dienste eines Rechenzentrumsingenieurs

Ein Rechenzentrumsingenieur kann Folgendes übernehmen:

- den Einbau ins Rack, mit geeigneter Schutz- und Hebeausrüstung;
- die Verkabelung gemäß dem zuvor übergebenen Verkabelungsplan;
- die Änderung der Verkabelung oder das Versetzen eines vorhandenen Geräts;
- die Unterstützung bei der Netzwerkkonnektivität des Betreibers.

Jeder Eingriff in die physische Verkabelung (Netzwerk, Strom, Glasfaser) wird ausschließlich von den Rechenzentrumsingenieuren durchgeführt. Die Softwarekonfiguration Ihrer Geräte bleibt unter Ihrer Kontrolle.

| Dienst                                | Zeitfenster                                    | Einsatzzeit          | Einsatzzeit bei Dringlichkeit |
|---------------------------------------|------------------------------------------------|----------------------|------------------|
| Hands & Eyes                          | Geschäftszeiten (8:00 – 19:00 Uhr, Montag bis Freitag) | 2 Stunden    | 30 Minuten       |
| Hands & Eyes                          | Außerhalb der Geschäftszeiten (Nacht, Wochenende, Feiertage) | 2 Tage | 2 Stunden        |
| Rechenzentrumsingenieur               | Geschäftszeiten (8:00 – 19:00 Uhr, Montag bis Freitag) | 2 Tage       | 4 Stunden        |

:::note
- Jede Anfrage erfolgt über die Eröffnung eines Einsatztickets in der Konsole.
- Rufen Sie im Notfall nach der Eröffnung des Tickets den Bereitschaftsdienst an.
- Jede angefangene Stunde wird berechnet.
:::

## Architektur

- **Infrastruktur**: redundante Stromversorgung (zwei unabhängige Stromzuführungen), kontrollierte Kühlung und Klimatisierung, mehrschichtige physische Sicherheit.
- **Integrationen**: direkte Verbindung zu den Cloud Temple-Produkten und Meet Me Room für Betreiberanbindungen.

## Regionen und Verfügbarkeitszonen

Das Housing ist in der Region FR1 in drei Verfügbarkeitszonen verfügbar. Die Racks befinden sich ausschließlich in Frankreich.

## Technische Spezifikationen

### Gemeinsam genutztes Hosting

Das gemeinsam genutzte Hosting erfolgt in einem von verschiedenen Kunden gemeinsam genutzten Rack. [Die Segmentierung](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) erfolgt pro 'U' (Höheneinheit). Eine Höheneinheit ist 1,75 Zoll (d. h. 44,45 mm) hoch. Die Racks für gemeinsam genutztes Hosting verfügen über zwei getrennte Stromkreise.

Das maximale Gewicht der Geräte beträgt 25 kg pro 'U'. Darüber hinaus muss die Anzahl an 'U' bestellt werden, die das Gesamtgewicht des Geräts tragen kann: zum Beispiel 2 'U' für ein Gerät mit 34 kg.

<a id="hébergement-dappliances-réseau-firewall-"></a>

#### Appliances (Netzwerk, Firewall…)

Jede Höheneinheit kann je nach Bedarf über eine oder zwei Steckdosen vom Typ C13 verfügen. Jede Steckdose ist auf 150 W bei 220 V begrenzt. Für ein Gerät mit 1.500 W an zwei Netzteilen werden somit 1.500 W / 150 W = 10 'U' benötigt, also 5 'U' (750 W) pro Stromkreis.

Die Kühlung erfolgt von der Vorderseite zur Rückseite des Racks, und __die Appliance erhält ihre Netzwerkkonnektivität an der Vorderseite des Racks.__

#### Hosting von Servern

Die für Server bestimmten Einheiten (2 'U', 400 W oder 800 W an zwei C19-Steckdosen) sind auf die Wärmeabgabe von Servern ausgelegt und __stellen die Netzwerkkonnektivität an der Rückseite bereit__, was die Wartung vereinfacht und die Kühlung des Racks optimiert. __Sie sind für Server verpflichtend.__

### Dediziertes Hosting

Das dedizierte Rack wird in einer Zone für gemeinsam genutztes Hosting außerhalb von SecNumCloud installiert.

| Parameter            | Wert                                                                    |
|----------------------|-------------------------------------------------------------------------|
| Abmessungen          | mindestens 42 'U'; Tiefe 1.200 mm, davon 1.000 mm nutzbar; Breite 600 mm |
| Leistung             | 3 kW inklusive an zwei Stromkreisen mit 16 A, erweiterbar in Schritten von 2 kW |
| Maximales Gewicht    | 1.000 kg pro Rack                                                       |
| Verteilung           | Eine überwachte PDU (Stromverteilereinheit) pro Stromkreis              |
| Ausstattung          | Kühlung und gesicherte Türen vorne und hinten                           |

<a id="connectivité-réseau-pour-lhébergement-physique"></a>

### Netzwerkkonnektivität

Die Netzwerkkonnektivität wird zusätzlich zum Hosting nach Porttyp und gewünschter Bandbreite gebucht:

- Kupfer 100 Mbps oder 1 Gbps;
- Glasfaser 1 Gbps oder 10 Gbps, über ein bereitgestelltes SFP-Modul für die Konnektivität auf Cloud Temple-Seite.

Eine Konnektivität im Meet Me Room ermöglicht außerdem den Empfang Ihrer Betreiberleitung. Sie erfolgt zwingend über Glasfaser, mit 1 Gbps oder 10 Gbps.

### Grenzen

- Maximales Gewicht von 25 kg pro 'U' beim gemeinsam genutzten Hosting und von 1.000 kg pro dediziertem Rack.
- Leistung von 150 W pro Steckdose beim gemeinsam genutzten Hosting von Appliances.
- Nutzbare Tiefe von 1.000 mm in einem dedizierten Rack.

## Sicherheit und Compliance

Das Housing ist nach HDS und ISO 27001 zertifiziert. Es wird in einer Nicht-SecNumCloud-Zone gehostet.

- **Physische Zugangskontrolle**: strenger Zugang, Überwachung rund um die Uhr (24/7) und vollständige Nachverfolgbarkeit der Einsätze.
- **Begleiteter Zugang**: Jeder Besuch vor Ort erfolgt nach Terminvereinbarung und in Begleitung eines Rechenzentrumstechnikers.
- **Verschlüsselung**: Die Verschlüsselung der gehosteten Geräte liegt in Ihrer Verantwortung. Der Dienst gewährleistet die physische Sicherheit der Räumlichkeiten.

## Dienstverfügbarkeit

| Element                 | Verfügbarkeitsziel, gemessen über einen Monat |
|-------------------------|-----------------------------------------------|
| Stromversorgung         | 100 %                                         |
| Kühlung                 | 100 %                                         |

## Reversibilität

Am Ende des Dienstes werden Ihnen Ihre Geräte zurückgegeben:

| Vorgang                   | Lieferergebnis     | Frist     | Kosten    |
|---------------------------|--------------------|-----------|-----------|
| Rücknahme der Hardware    | Kundenhardware     | 15 Tage   | Kostenlos |
| Unterstützung beim Umzug  | Logistische Unterstützung | Auf Anfrage | Auf Angebot |

## Preise

Das Hosting wird mit einer Mindestlaufzeit von 12 Monaten gebucht. Die Preise und Laufzeiten der einzelnen Optionen sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Housing — Preise](https://www.cloud-temple.com/produits/housing-espace-dedie/).
