---
title: Konzepte
---

## Zuweisung von Provider Aggregated (PA) öffentlichen Internetadressen

In diesem Kontext verwenden Sie öffentliche IP-Adressen, die Cloud Temple zugewiesen sind und die Ihnen für Ihre Nutzung vermietet werden.

Die Erstellung einer Internetverbindung und die Zuweisung der zugehörigen öffentlichen IP-Adressen erfolgt durch __eine Serviceanfrage__ mit folgenden Angaben:

    Name Ihrer Organisation
    Name eines Kontakts mit E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Name des Tenants
    Gewünschte Subnetzgröße (mindestens /29 in IPv4 und /64 in IPv6)
    Falls noch nicht bereitgestellt, werden RIPE-Informationen (insbesondere administrativer Kontakt) vom Support angefordert

Die Bereitstellung des Internetzugangs erfolgt über das BGP4-Protokoll als Antwort auf die Support-Anfrage, die folgende Informationen liefert:

- *öffentliches Präfix*
- *Interconnection-Präfix*
- *Any-Cast-Gateway*
- *IP-Subnetz*
- *lokales AS*
- *Cloud Temple AS*
- *Keepalive-Timer und Hold-Time-Timer*
- *Route-Server-Adressen, die Ihrem Tenant zugeordnet sind*.

Die Verwendung des BGP4-Protokolls gewährleistet ein effizientes Routing Ihrer Internetflüsse zum aktiven Gateway Ihrer Architektur, insbesondere in Multi-Availability-Zone-Bereitstellungsszenarien, wie z.B. bei Firewall-Clustern, die zwischen zwei Verfügbarkeitszonen verteilt sind.

## IPv4-Blöcke

### IPv4-Adressangebot Version 1

__*Dieses Angebot wird seit dem 2. Mai 2024 nicht mehr vermarktet*__

Die Lieferung von IPv4 erfolgt __vorbehaltlich verfügbarer Bestände__ für unsere Kunden, mit einem Mindestblock von 8 IPv4 (/29 oder 255.255.255.248).

Sie können die Ihnen zugewiesenen Adressblöcke im Menü __*'Öffentliche IPs'*__ des Netzwerkmenüs in der grünen Leiste links anzeigen.

| Referenz                                    | Einheit | SKU                          |
| ------------------------------------------- | ------- | ---------------------------- |
| Netzwerk - Dedizierter öffentlicher IPv4-Bereich | 8 IPv4  | csp:(region):network:ipv4:v1 |

### IPv4-Adressangebot Version 2

Die Lieferung von IPv4 erfolgt __vorbehaltlich verfügbarer Bestände__ für unsere Kunden, pro IP-Adresse.

Sie können die Ihnen zugewiesenen Adressblöcke im Menü __*'Öffentliche IPs'*__ des Netzwerkmenüs in der grünen Leiste links anzeigen.

| Referenz                               | Einheit | SKU                          |
| -------------------------------------- | ------- | ---------------------------- |
| Netzwerk - Dedizierte öffentliche IPv4 | 1 IPv4  | csp:(region):network:ipv4:v2 |

## IPv6-Blöcke

Die Bestellung von IPv6-Blöcken erfolgt über das Menü __*Internet*__ in der Registerkarte __*Netzwerke*__.

Sie können die Ihnen zugewiesenen Präfixe im Menü __*'Öffentliche IPs'*__ des Netzwerkmenüs in der grünen Leiste links anzeigen.

| Referenz                                    | Einheit  | SKU                          |
| ------------------------------------------- | -------- | ---------------------------- |
| Netzwerk - Dedizierter öffentlicher IPv6-Bereich | 64 IPv6  | csp:(region):network:ipv6:v1 |

## Provider Independent (PI) öffentliche IP-Adressen

Wenn Sie über eigene Provider Independent-Adressen verfügen, haben Sie die Möglichkeit, diese im Autonomous System von Cloud Temple anzukündigen. Dies ermöglicht es Ihnen, Ihre eigenen IP-Adressen innerhalb der Cloud Temple-Infrastruktur weiterhin zu verwenden und erleichtert Ihre Migrationen.

Erstellen Sie dazu __eine Serviceanfrage__ mit folgenden Angaben:

    Name Ihrer Organisation
    Name eines Kontakts mit E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Name des Tenants
    Der PI-IP-Adressblock, den Sie besitzen und ankündigen möchten
    Falls noch nicht bereitgestellt, werden die zugehörigen RIPE-Informationen vom Support angefordert

Es gibt keine spezifische Abrechnung für Kunden, die Provider Independent-Adressen verwenden.

### Reservierung von Internetbandbreite

Die Internetbandbreite kann in Schritten von 100 Mbps reserviert werden. Die maximale verfügbare Kapazität für ein Gateway beträgt 10 Gbps, möglicherweise begrenzt durch die technischen Eigenschaften Ihres Gateways.

Die Abrechnung erfolgt am 95. Perzentil über den Abrechnungszeitraum, normalerweise einen Monat. Sie können daher gelegentlich von einem Burst über Ihre reservierte Kapazität hinaus profitieren.

| Referenz                                    | Einheit  | SKU                                     |
| ------------------------------------------- | -------- | --------------------------------------- |
| Netzwerk - Reservierte Internetbandbreite   | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Hinweis:*__
*Es gibt keine __volumenbasierte Abrechnung__ wie __'Egress-Gebühren'. Sie zahlen nur für die Bandbreitenreservierung.__*

## Anti-DDoS

Ein verteilter Denial-of-Service-Angriff (DDoS) zielt darauf ab, einen Dienst zu beeinträchtigen oder offline zu nehmen, indem er ihn mit illegitimem Datenverkehr überlastet.

Der Anti-DDoS-Schutz von Cloud Temple schützt Sie vor böswilligen Akteuren und __ist ohne zusätzliche Kosten gegen volumetrische Angriffe aktiv__: Die Filterung erfolgt vorgelagert durch unsere Telekommunikationspartner.
