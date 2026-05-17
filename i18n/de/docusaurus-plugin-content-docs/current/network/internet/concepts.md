---
title: Konzepte
---

## CloudTemple Internet-Infrastruktur

CloudTemple agiert als **Cloud Service Provider (CSP)** mit einer eigenständigen, hochgradig resilienten und sicheren Internetinfrastruktur. Unsere Konnektivität auf Operator-Ebene stützt sich auf eine eigene AS-Nummer (Autonomous System Number), die uns eine vollständige Kontrolle über das Routing ermöglicht und eine hohe Verfügbarkeit für alle unsere Dienste garantiert.

Diese eigenständige Infrastruktur ermöglicht es uns, eine Internetkonnektivität mit erweiterten Funktionen anzubieten, die auf sämtliche CloudTemple-Angebote zugeschnitten ist, vom Dedicated Hosting über IaaS-Lösungen bis hin zu PaaS-Diensten.

## Netzwerkarchitektur und Redundanz

Unser Netzwerk basiert auf einer redundanten Architektur, die für optimierte Leistung und garantierte Dienstkontinuität ausgelegt ist. CloudTemple verfügt über ein eigenständiges Autonomes System mit zugewiesenen öffentlichen IP-Präfixen, das eine direkte globale Konnektivität sicherstellt.

Diese Konnektivität stützt sich auf **zwei separate Pfade**, um die Resilienz zu maximieren:

**Transit-Konnektivität:** Zwei primäre Transit-Betreiber gewährleisten die globale Redundanz und ermöglichen ein optimales Routing des Internet-Traffics zu unseren Infrastrukturen.

**Exchange Points (IXP):** Unsere Präsenz an zwei Internet Exchange Points (IXP) in Paris ermöglicht es uns, die Latenz für europäische Nutzer erheblich zu reduzieren und gleichzeitig die Leistung regionaler Dienste zu verbessern. Dieser Ansatz gewährleistet zudem eine natürliche Redundanz gegenüber Ausfällen von Providern.

Der Einsatz des BGP4-Protokolls gewährleistet ein effizientes Routing Ihrer Internet-Datenströme zum aktiven Gateway Ihrer Architektur, insbesondere in Szenarien mit Multi-Availability-Zone-Deployments, wie beispielsweise bei Firewall-Clustern, die auf zwei Verfügbarkeitszonen verteilt sind.

## Integrierter DDoS-Schutz

Der gesamte eingehende Datenverkehr zur CloudTemple-Infrastruktur profitiert von einem fortschrittlichen Anti-DDoS-Schutz, der von **F5**, einem weltweit führenden Anbieter für Netzwerksicherheit, bereitgestellt wird. Dieser Schutz funktioniert nahtlos und automatisch.

Volumetrische Angriffe werden direkt am Netzwerkrand von F5 erkannt und gemildert, noch bevor sie das CloudTemple-Netzwerk erreichen. Diese vorgelagerte Filterung stellt sicher, dass keine Überlastung unsere Internetverbindungen beeinträchtigen kann, und nur legitime Anfragen erreichen unsere Infrastrukturen.

**Alle CloudTemple-Dienste** profitieren von diesem Schutz ohne Mehrkosten, einschließlich der Kunden-Prefixes, die in unsere Infrastruktur migriert werden können. Dieser integrierte Ansatz verwandelt eine Sicherheitsanforderung in einen betrieblichen Vorteil für unsere Kunden.

## Zuweisung öffentlicher IP-Adressen

CloudTemple bietet ein flexibles System zur Vergabe von Provider Aggregated (PA)-IP-Adressen, das es Kunden ermöglicht, öffentliche IP-Adressen **einzeln** nach ihren spezifischen Anforderungen zu reservieren.

### Reservierungsprozess

Die Reservierung öffentlicher IP-Adressen erfolgt direkt über die CloudTemple-Konsole und ermöglicht eine eigenständige sowie sofortige Verwaltung:

**Über die Konsolen-API:** Integration in Ihre Automatisierungs- und Bereitstellungsworkflows möglich.

**Über die Webkonsole:** Intuitive Benutzeroberfläche, die über den Bereich *Internet* in Ihrem Kundenbereich erreichbar ist.

Der Reservierungsprozess folgt diesen einfachen Schritten: Anmeldung bei der Konsole, Navigation zu *Internet* > *IP-Adressen verwalten*, Auswahl von *Neue Adresse reservieren*, Auswahl zwischen IPv4 oder IPv6 und abschließende Bestätigung der Bestellung.

### Abrechnung

Die Abrechnung öffentlicher IP-Adressen erfolgt pro Abrechnungseinheit (UO) und beginnt mit der Reservierung der Adresse, was eine vollständige Kostentransparenz gewährleistet.

| Referenz | Einheit | SKU |
|----------|---------|-----|
| Netzwerk - Dedizierte öffentliche IPv4 | 1 IPv4 | RSIP-IP4-UNIT |
| Netzwerk - Dedizierte öffentliche IPv6 | 1 IPv6 | RSIP-IP6-UNIT |

## IPv4-Blöcke

Die Bereitstellung einer IPv4 erfolgt **solange der Vorrat reicht** für unsere Kunden, pro IP-Adresse.

Die Bestellung von IPv4-Adressen erfolgt über das Menü ***'Öffentliche IPs'*** im Menü Netzwerke in der grünen Leiste links, über die Schaltfläche ***"IPv4-Adressen oder IPv6-Präfixe bestellen"***.

In diesem Menü können Sie auch die Ihnen zugewiesenen Adressblöcke einsehen.

| Referenz                      | Einheit | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Netzwerk - Dedizierte öffentliche IPv4 | IPv4/32 | csp:(region):network:ipv4:v2 |

## IPv6-Blöcke

Die Bestellung von IPv6-Präfixen erfolgt über das Menü ***'Öffentliche IPs'*** im Menü Netzwerke in der grünen Seitenleiste links, über die Schaltfläche ***"IPv4-Adressen oder IPv6-Präfixe bestellen"***.

In diesemselben Menü können Sie die Ihnen zugewiesenen Präfixe einsehen.

| Referenz                              | Einheit | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Netzwerk - Dedizierte öffentliche IPv6-Bereiche | IPv6/48 | csp:(region):network:ipv6:v1 |

## Migration von Kunden-IP-Präfixen

CloudTemple begleitet Kunden, die ihre eigenen IP-Präfixe in unsere Infrastruktur migrieren möchten, und erleichtert so die Migrationsprojekte, unter Beibehaltung der bestehenden Netzwerkidentität.

### Vorteile der Migration

Dieser Ansatz ermöglicht es, Ihre IP-Identität bei der Migration zu CloudTemple beizubehalten und gewährleistet so eine nahtlose Kontinuität für Ihre Anwendungen und Kunden. Sie behalten die vollständige Kontrolle über die Nutzung Ihrer IP-Adressen, während Sie gleichzeitig von der CloudTemple-Infrastruktur profitieren.

### Integrationsprozess

Ihr IP-Präfix (z. B. `203.0.113.0/24`) wird in das CloudTemple-Backbone-Netzwerk integriert und von unserer AS bekannt gegeben. Nach der Integration kann das Präfix beliebig Ihren virtuellen Maschinen, Load Balancern oder anderen Diensten zugewiesen werden.

**Alle Adressen des migrierten Präfixes profitieren automatisch vom F5 Anti-DDoS-Schutz**, ohne zusätzliche Konfiguration oder Mehrkosten.

### Voraussetzungen

Die Migration von IP-Präfixen erfordert, dass das Präfix in einem anerkannten Internet-Register (ARIN, RIPE, APNIC, usw.) eingetragen ist und Sie der rechtmäßige Eigentümer sind. Die BGP-Verwaltung kann entweder von Ihren Teams übernommen oder nach Ihren Präferenzen durch den technischen Support von CloudTemple unterstützt werden.

## Reservierung von Internet-Bandbreite

Die Internet-Bandbreite kann in Schritten von 100 Mbps reserviert werden. Die maximale verfügbare Kapazität pro Gateway beträgt 10 Gbps, die potenziell durch die technischen Eigenschaften Ihres Gateways begrenzt sein kann.

Die Abrechnung erfolgt basierend auf dem 95. Perzentil über den Abrechnungszeitraum, der in der Regel einen Monat beträgt. Sie können daher gelegentlich von einem Burst über Ihre reservierte Kapazität hinaus profitieren.

| Referenz                                  | Einheit  | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Netzwerk - Reservierte Internet-Bandbreite| 100 Mbps | csp:(region):network:trafic:internet:v1 |

***Hinweis:***
*Es gibt keine **volumetrische Abrechnung** in Form von **'egress fees'. Sie zahlen nur die Bandbreitenreservierung.***

## Produktverfügbarkeit

Sämtliche dieser Funktionen zur Internetkonnektivität sind in allen CloudTemple-Angeboten verfügbar und gewährleisten ein einheitliches Nutzererlebnis, unabhängig von der Art des genutzten Dienstes.

| Angebot | Internetkonnektivität | DDoS-Schutz | RSIP-Verwaltung | Prefix-Migration |
|-------|----------------------|------------------|---------------|-------------------|
| Dediziertes Hosting | ✓ | ✓ | ✓ | ✓ |
| Shared Hosting | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS Open Source | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Dieser einheitliche Ansatz stellt sicher, dass alle unsere Kunden einen Internetzugang in Carrier-Grade-Qualität mit integrierter Sicherheit und erweiterten Funktionen nutzen können, unabhängig von ihrer Technologieentscheidung.