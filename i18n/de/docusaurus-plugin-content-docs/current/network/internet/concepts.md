---
title: Konzepte
---

## CloudTemple Internet-Infrastruktur

CloudTemple operiert als **Cloud Service Provider (CSP)** mit einer autonomen, hochresilienten und sicheren Internet-Infrastruktur. Unsere Carrier-Grade-Konnektivität basiert auf unserer eigenen AS (Autonomous System Number), die uns vollständige Kontrolle über das Routing gibt und hohe Verfügbarkeit für alle unsere Services garantiert.

Diese autonome Infrastruktur ermöglicht es uns, Internet-Konnektivität mit erweiterten Funktionen anzubieten, die für alle Arten von CloudTemple-Angeboten geeignet sind, von dediziertem Hosting bis hin zu IaaS-Lösungen und PaaS-Services.

## Netzwerkarchitektur und Redundanz

Unser Netzwerk profitiert von einer redundanten Architektur, die darauf ausgelegt ist, die Leistung zu optimieren und die Servicekontinuität zu gewährleisten. CloudTemple verfügt über ein unabhängiges autonomes System mit einer Reihe zugewiesener öffentlicher IP-Präfixe, die direkte globale Konnektivität gewährleisten.

Diese Konnektivität basiert auf **zwei verschiedenen Pfaden**, um die Resilienz zu maximieren:

**Transit-Konnektivität:** Zwei Haupt-Transit-Betreiber gewährleisten Redundanz auf globaler Ebene und ermöglichen optimales Routing des Internet-Traffics zu unseren Infrastrukturen.

**Austauschpunkte:** Unsere Präsenz an zwei Austauschpunkten (IXP) in Paris ermöglicht es uns, die Latenz für europäische Benutzer erheblich zu reduzieren und gleichzeitig die Leistung regionaler Services zu verbessern. Dieser Ansatz garantiert auch natürliche Redundanz gegen Anbieterausfälle.

Die Verwendung des BGP4-Protokolls garantiert effizientes Routing Ihrer Internet-Flows zum aktiven Gateway Ihrer Architektur, insbesondere in Multi-Availability-Zone-Deployment-Szenarien, wie es bei Firewall-Clustern der Fall ist, die zwischen zwei Verfügbarkeitszonen verteilt sind.

## Integrierter Anti-DDoS-Schutz

Aller eingehende Traffic zur CloudTemple-Infrastruktur profitiert von erweiterten Anti-DDoS-Schutz, bereitgestellt von **F5**, einem globalen Marktführer in der Netzwerksicherheit. Dieser Schutz funktioniert transparent und automatisch.

Volumetrische Angriffe werden direkt am Rand des F5-Netzwerks erkannt und abgemildert, noch bevor sie das CloudTemple-Netzwerk erreichen. Diese Upstream-Filterung gewährleistet, dass keine Sättigung unsere Internet-Verbindungen beeinträchtigen kann, und nur legitime Anfragen erreichen unsere Infrastrukturen.

**Alle CloudTemple-Services** profitieren von diesem Schutz ohne zusätzliche Kosten, einschließlich Client-Präfixe, die zu unserer Infrastruktur migriert werden können. Dieser integrierte Ansatz verwandelt eine Sicherheitsbeschränkung in einen operativen Vorteil für unsere Kunden.

## Zuweisung öffentlicher IP-Adressen

CloudTemple bietet ein flexibles System zur Zuweisung von Provider Aggregated (PA) öffentlichen IP-Adressen, das es Kunden ermöglicht, öffentliche IP-Adressen **einzeln** entsprechend ihren spezifischen Bedürfnissen zu reservieren.

### Reservierungsprozess

Die Reservierung öffentlicher IP-Adressen erfolgt direkt über die CloudTemple-Konsole und bietet autonome und sofortige Verwaltung:

**Über die Konsolen-API:** Mögliche Integration in Ihre Automatisierungs- und Bereitstellungs-Workflows.

**Über die Web-Konsole:** Intuitive Benutzeroberfläche, zugänglich über den Bereich *Internet* Ihres Kundenbereichs.

Der Reservierungsprozess folgt diesen einfachen Schritten: Verbindung zur Konsole, Navigation zu *Internet* > *IP-Adressen verwalten*, Auswahl von *Neue Adresse reservieren*, Wahl zwischen IPv4 oder IPv6, dann Bestätigung der Bestellung.

### Abrechnung

Die Abrechnung öffentlicher IP-Adressen erfolgt pro Arbeitseinheit (AE) und beginnt sobald die Adresse reserviert wird, was vollständige Kostentransparenz garantiert.

| Referenz | Einheit | SKU |
|----------|---------|-----|
| Netzwerk - Dedizierte öffentliche IPv4 | 1 IPv4 | RSIP-IP4-UNIT |
| Netzwerk - Dedizierte öffentliche IPv6 | 1 IPv6 | RSIP-IP6-UNIT |

## IPv4-Blöcke

Die IPv4-Bereitstellung unterliegt __verfügbaren Bestandsgrenzen__ für unsere Kunden, pro IP-Adresse.

Die Bestellung von IPv4-Adressen erfolgt über das Menü __*'Öffentliche IPs'*__ im Netzwerk-Menü im grünen Banner links, über die Schaltfläche __*"IPv4-Adressen oder IPv6-Präfixe bestellen"*__.

Sie können die Ihnen zugewiesenen Adressblöcke in demselben Menü einsehen.

| Referenz                           | Einheit | SKU                          |
| ---------------------------------- | ------- | ---------------------------- |
| Netzwerk - Dedizierte öffentliche IPv4 | 1 IPv4  | csp:(region):network:ipv4:v2 |

## IPv6-Blöcke

Die Bestellung von IPv6-Präfixen erfolgt über das Menü __*'Öffentliche IPs'*__ im Netzwerk-Menü im grünen Banner links, über die Schaltfläche __*"IPv4-Adressen oder IPv6-Präfixe bestellen"*__.

Sie können die Ihnen zugewiesenen Präfixe in demselben Menü einsehen.

| Referenz                                    | Einheit  | SKU                          |
| ------------------------------------------- | -------- | ---------------------------- |
| Netzwerk - Dedizierte öffentliche IPv6-Bereiche | 64 IPv6  | csp:(region):network:ipv6:v1 |

## Migration von Client-IP-Präfixen

CloudTemple unterstützt Kunden, die ihre eigenen IP-Präfixe zu unserer Infrastruktur migrieren möchten, und erleichtert so Migrationsprojekte bei gleichzeitiger Beibehaltung der bestehenden Netzwerkidentität.

### Migrationsvorteile

Dieser Ansatz ermöglicht es Ihnen, Ihre IP-Identität bei der Migration zu CloudTemple beizubehalten und gewährleistet perfekte Kontinuität für Ihre Anwendungen und Kunden. Sie behalten die vollständige Kontrolle über die Nutzung Ihrer IP-Adressen bei und profitieren gleichzeitig von der CloudTemple-Infrastruktur.

### Integrationsprozess

Ihr IP-Präfix (zum Beispiel `203.0.113.0/24`) wird in das CloudTemple-Backbone-Netzwerk integriert und von unserem AS angekündigt. Nach der Integration kann das Präfix frei mit Ihren virtuellen Maschinen, Load Balancern oder anderen Services verknüpft werden.

**Alle Adressen im migrierten Präfix profitieren automatisch vom F5 Anti-DDoS-Schutz**, ohne zusätzliche Konfiguration oder Mehrkosten.

### Erforderliche Bedingungen

Die Migration von IP-Präfixen erfordert, dass das Präfix in einer anerkannten Internet-Registry (ARIN, RIPE, APNIC, etc.) registriert ist und Sie der rechtmäßige Eigentümer sind. Das BGP-Management kann von Ihren Teams übernommen werden oder vom technischen Support von CloudTemple profitieren, je nach Ihren Präferenzen.

## Internet-Bandbreiten-Reservierung

Internet-Bandbreite kann in Schritten von 100 Mbps reserviert werden. Die maximale verfügbare Kapazität für ein Gateway beträgt 10 Gbps, möglicherweise begrenzt durch die technischen Eigenschaften Ihres Gateways.

Die Abrechnung erfolgt im 95. Perzentil über den Abrechnungszeitraum, normalerweise einen Monat. Sie können daher gelegentlich von einem Burst über Ihre reservierte Kapazität hinaus profitieren.

| Referenz                                    | Einheit   | SKU                                     |
| ------------------------------------------- | --------- | --------------------------------------- |
| Netzwerk - Reservierte Internet-Bandbreite | 100 Mbps  | csp:(region):network:trafic:internet:v1 |

__*Hinweis:*__
*Es gibt keine __volumetrische Abrechnung__ vom Typ __'Egress Fees'. Sie zahlen nur für die Bandbreiten-Reservierung.__*

## Verfügbarkeit nach Angebot

Alle diese Internet-Konnektivitätsfunktionen sind bei allen CloudTemple-Angeboten verfügbar und garantieren eine konsistente Erfahrung unabhängig vom verwendeten Service-Typ.

| Angebot | Internet-Konnektivität | DDoS-Schutz | RSIP-Verwaltung | Präfix-Migration |
|---------|------------------------|--------------|-----------------|------------------|
| Dediziertes Hosting | ✓ | ✓ | ✓ | ✓ |
| Shared Hosting | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Dieser einheitliche Ansatz gewährleistet, dass alle unsere Kunden von Carrier-Grade-Internet-Zugang mit integrierter Sicherheit und erweiterten Funktionen profitieren, unabhängig von ihrer technologischen Wahl.
