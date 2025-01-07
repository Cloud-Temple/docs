---
title: Concepts
---


## Zuteilung einer öffentlichen Internetadresse Provider Aggregated (PA)

In diesem Kontext verwenden Sie öffentliche IP-Adressen, die Cloud Temple zugewiesen wurden und die Ihnen für Ihre Nutzung zur Verfügung gestellt werden.

Die Erstellung einer Internetverbindung und die Zuweisung der zugehörigen öffentlichen IP-Adressen erfolgt durch __eine Serviceanfrage__, die Folgendes angibt:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit E-Mail und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Die gewünschte Subnetzgröße (mindestens /29 in IPv4 und /64 in IPv6)
    Falls noch nicht bereitgestellt, werden die RIPE-Informationen (insbesondere der administrative Kontakt) vom Support angefordert

Die Bereitstellung des Internetzugangs erfolgt über das BGP4-Protokoll als Antwort auf die Supportanfrage, die folgende Informationen liefert:

- *Öffentliches Präfix*
- *Interconnection-Präfix*
- *Any-Cast-Gateway*
- *Subnetz-IP*
- *lokale AS*
- *AS von Cloud Temple*
- *Keepalive-Timer und Hold-Time-Timer*
- *Die Adressen der zu Ihrem Tenant gehörenden Route-Server*.

Die Verwendung des BGP4-Protokolls gewährleistet eine effiziente Weiterleitung Ihrer Internetströme zur aktiven Gateway Ihrer Architektur, insbesondere bei Multi-Verfügbarkeitszonen-Szenarien, wie z.B. bei Firewall-Clustern, die zwischen zwei Verfügbarkeitszonen verteilt sind.

## IPv4-Blöcke

### IPv4-Adressenangebot Version 1

__*Dieses Angebot wird seit dem 2. Mai 2024 nicht mehr vermarktet*__

Die Bereitstellung der IPv4-Adressen erfolgt __im Rahmen der verfügbaren Bestände__ für unsere Kunden, mit einem Mindestblock von 8 IPv4 (/29 oder 255.255.255.248).

Es ist möglich, die Ihnen zugewiesenen Adressblöcke im Menü __*'Öffentliche IPs'*__ des Netzmenüs im grünen linken Menüband anzuzeigen.

| Referenz                                 | Einheit | SKU                          |
| ---------------------------------------- | ------- | ---------------------------- |
| Netzwerk – Dedicierte öffentliche IPv4-Bereiche | 8 IPv4  | csp:(region):network:ipv4:v1 |

### IPv4-Adressenangebot Version 2

Die Bereitstellung einer IPv4 erfolgt __im Rahmen der verfügbaren Bestände__ für unsere Kunden, pro IP-Adresse.

Es ist möglich, die Ihnen zugewiesenen Adressblöcke im Menü __*'Öffentliche IPs'*__ des Netzmenüs im grünen linken Menüband anzuzeigen.


| Referenz                     | Einheit | SKU                          |
| ---------------------------- | ------- | ---------------------------- |
| Netzwerk – Dedicierte öffentliche IPv4 | 1 IPv4  | csp:(region):network:ipv4:v2 |


## IPv6-Blöcke

__Am 1. Mai 2024 ist das Angebot an öffentlichen IPv6-Adressen noch nicht zur Vermarktung verfügbar.__

Die Markteinführung ist für das zweite Halbjahr 2024 geplant.

| Referenz                                 | Einheit | SKU                          |
| ---------------------------------------- | ------- | ---------------------------- |
| Netzwerk – Dedicierte öffentliche IPv6-Bereiche | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Provider Independent (PI) öffentliche IP-Adressen

Wenn Sie über Ihr eigenes Provider Independent-Adressierung verfügen, haben Sie die Möglichkeit, dies im Autonomous System von Cloud Temple anzukündigen. Dadurch können Sie Ihre eigenen IP-Adressen innerhalb der Cloud Temple-Infrastruktur weiterhin verwenden und Ihre Migrationen erleichtern.

Dazu stellen Sie __eine Serviceanfrage__, die Folgendes angibt:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit E-Mail und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Der von Ihnen gehaltene und anzukündigende PI-IP-Adressblock
    Falls noch nicht bereitgestellt, werden die zugehörigen RIPE-Informationen vom Support angefordert 

Es gibt keine spezifische Abrechnung für Kunden, die Provider Independent-Adressen verwenden.

### Reservierung der Internet-Bandbreite

Die Internet-Bandbreite kann in Schritten von 100 Mbps reserviert werden. Die maximal verfügbare Kapazität für ein Gateway beträgt 10 Gbps, möglicherweise begrenzt durch die technischen Eigenschaften Ihres Gateways.

Die Abrechnung erfolgt zum 95. Perzentil über den Abrechnungszeitraum, in der Regel ein Monat. Sie können daher gelegentlich einen Burst über Ihre reservierte Kapazität hinaus genießen.

| Referenz                                 | Einheit  | SKU                                     |
| ---------------------------------------- | -------- | --------------------------------------- |
| Netzwerk – Reservierte Internet-Bandbreite | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Hinweis:*__
*Es gibt keine __volumentrische Abrechnung__ wie __'egress fees'. Sie zahlen nur für die Reservierung der Bandbreite.__*


## Anti-DDoS

Ein Distributed-Denial-of-Service-Angriff (DDoS) zielt darauf ab, einen Dienst zu degradieren oder offline zu stellen, indem er mit illegitimem Datenverkehr überlastet wird.

Der Anti-DDoS-Schutz von Cloud Temple schützt Sie vor böswilligen Akteuren und __ist ohne zusätzliche Kosten gegen volumetrische Angriffe aktiv__: Die Filterung erfolgt im Voraus durch unsere Telekommunikationspartner.