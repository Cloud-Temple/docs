---
title: Concepts
---

## Zuweisung einer öffentlichen Provider Aggregated (PA) Internetadresse

In diesem Kontext verwenden Sie vom Cloud Temple zugewiesene öffentliche IP-Adressen, die Ihnen für Ihre Nutzung vermietet werden.

Die Erstellung der Internetverbindung und die Zuweisung der zugehörigen öffentlichen IP-Adressen erfolgt durch __eine Serviceanfrage__, in der Folgendes angegeben wird:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit seiner E-Mail und Telefonnummer zur abschließenden Konfiguration
    Der Name des Tenants
    Die Größe des gewünschten Subnetzes (mindestens /29 bei IPv4 und /64 bei IPv6)
    Falls sie noch nicht bereitgestellt wurden, werden die RIPE-Informationen (insbesondere administrativer Kontakt) vom Support angefordert

Die Bereitstellung des Internetzugangs erfolgt über das BGP4-Protokoll nach Rücksendung der Supportanfrage, das die folgenden Informationen bereitstellt:

- *öffentliches Präfix*
- *Interkonnektionspräfix*
- *Any-Cast-Gateway*
- *Subnet-IP*
- *lokales AS*
- *AS von Cloud Temple*
- *Keepalive-Timer und Hold-Time-Timer*
- *die Adressen der mit Ihrem Tenant verbundenen Routenserver*.

Die Verwendung des BGP4-Protokolls garantiert eine effiziente Weiterleitung Ihrer Internetströme zum aktiven Gateway Ihrer Architektur, insbesondere in Szenarien mit Multi-Availability-Zone-Bereitstellungen, wie es bei Firewall-Clustern, die zwischen zwei Verfügbarkeitszonen verteilt sind, der Fall ist.

## IPv4-Blöcke

### IPv4-Adressenangebot Version 1

__*Dieses Angebot ist seit dem 2. Mai 2024 nicht mehr kommerziell verfügbar*__

Die Bereitstellung der IPv4-Adressen erfolgt __im Rahmen der verfügbaren Bestände__ für unsere Kunden, mit einem Mindestblock von 8 IP-Adressen (/29 oder 255.255.255.248).

Es ist möglich, die Ihnen zugewiesenen Adressblöcke im Menü __*'Öffentliche IPs'*__ des Netzmenüs in der linken grünen Leiste anzuzeigen.

| Referenz                               | Einheit | SKU                          |
| -------------------------------------- | ------- | ---------------------------- |
| Netzwerk - Dedizierte öffentliche IPv4-Plätze | 8 IPv4  | csp:(region):network:ipv4:v1 |

### IPv4-Adressenangebot Version 2

Die Bereitstellung einer IPv4-Adresse erfolgt __im Rahmen der verfügbaren Bestände__ für unsere Kunden, pro IP-Adresse.

Es ist möglich, die Ihnen zugewiesenen Adressblöcke im Menü __*'Öffentliche IPs'*__ des Netzmenüs in der linken grünen Leiste anzuzeigen.

| Referenz                    | Einheit | SKU                          |
| --------------------------- | ------- | ---------------------------- |
| Netzwerk - Dedizierte öffentliche IPv4 | 1 IPv4  | csp:(region):network:ipv4:v2 |


## IPv6-Blöcke

__Zum 1. Mai 2024, ist das Angebot an öffentlichen IPv6-Adressen noch nicht marktfähig.__

Das Ziel der Markteinführung ist für das zweite Halbjahr 2024 geplant.

| Referenz                               | Einheit | SKU                          |
| -------------------------------------- | ------- | ---------------------------- |
| Netzwerk - Dedizierte öffentliche IPv6-Plätze | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Unabhängige öffentliche IP-Adressen (PI)

Wenn Sie über eigene unabhängige Provider-Adressen verfügen, haben Sie die Möglichkeit, diese im Autonomous System von Cloud Temple anzukündigen. Dadurch können Sie Ihre eigenen IP-Adressen weiterhin innerhalb der Cloud Temple-Infrastruktur nutzen und Ihre Migrationen erleichtern.

Hierfür stellen Sie eine __Serviceanfrage__ mit folgenden Angaben:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit seiner E-Mail und Telefonnummer zur abschließenden Konfiguration
    Der Name des Tenants
    Der IP-PI-Adressblock, den Sie besitzen und ankündigen möchten
    Falls noch nicht bereitgestellt, werden die zugehörigen RIPE-Informationen vom Support angefordert

Es gibt keine spezielle Abrechnung für Kunden, die unabhängige Provider-Adressen verwenden.

### Reservierung von Internet-Bandbreite

Die Internet-Bandbreite kann in Schritten von 100 Mbps reserviert werden. Die maximale verfügbare Kapazität für ein Gateway beträgt 10 Gbps, möglicherweise begrenzt durch die technischen Eigenschaften Ihres Gateways.

Die Abrechnung erfolgt im 95. Perzentil über den Abrechnungszeitraum, in der Regel ein Monat. Gelegentlich können Sie also über Ihre reservierte Kapazität hinaus einen Burst erleben.

| Referenz                               | Einheit | SKU                                      |
| -------------------------------------- | ------- | ---------------------------------------- |
| Netzwerk - Reservierte Internet-Bandbreite | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Bemerkung:*__
*Es gibt keine __volumenbasierte Abrechnung__ wie __'Egress-Gebühren'. Sie zahlen nur für die Reservierung der Bandbreite.__*


## Anti-DDoS

Ein Distributed Denial of Service (DDoS) Angriff zielt darauf ab, einen Service durch illegitimen Verkehr zu überlasten oder offline zu stellen.

Der Anti-DDoS-Schutz von Cloud Temple schützt Sie vor böswilligen Akteuren und __ist ohne zusätzliche Kosten gegen volumetrische Angriffe aktiv__: Die Filterung erfolgt im Vorfeld durch unsere Telekommunikationspartner.