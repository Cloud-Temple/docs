

---
title: Konzepte
---



## Internet-Cloud-Infrastruktur

CloudTemple betreibt als **Cloud-Service-Anbieter (CSP)** eine eigenständige, hochverfügbare und sichere Internet-Infrastruktur. Unsere Operator-Connectivity basiert auf einer eigenen AS-Nummer (Autonome Systemnummer), die uns eine vollständige Kontrolle über den Routing gewährleistet und eine hohe Verfügbarkeit für alle unsere Dienste sicherstellt.

Diese eigenständige Infrastruktur ermöglicht es uns, eine Internet-Connectivity mit fortgeschrittenen Funktionen anzubieten, die sich an alle Arten von CloudTemple-Angeboten anpassen, von dediziertem Hosting bis hin zu IaaS-Lösungen über PaaS-Dienste.



## Netzwerkarchitektur und Redundanz

Unser Netzwerk verfügt über eine redundante Architektur, die darauf abzielt, die Leistung zu optimieren und die Dienstverfügbarkeit zu gewährleisten. CloudTemple verfügt über ein eigenständiges, unabhängiges System mit einem Satz öffentlicher IP-Präfixe, die zugewiesen wurden, um eine direkte globale Verbindung zu ermöglichen.

Diese Verbindung basiert auf **zwei unterschiedlichen Wegen**, um die Resilienz zu maximieren:

**Transit-Verbindung:** Zwei Haupt-Transit-Anbieter sorgen für globale Redundanz und ermöglichen einen optimalen Traffic-Routing über das Internet zu unseren Infrastrukturen.

**Exchange-Points:** Unsere Präsenz an zwei Exchange-Points (IXP) in Paris ermöglicht es, die Latenz für europäische Nutzer erheblich zu reduzieren und die Leistung regionaler Dienste zu verbessern. Dieser Ansatz gewährleistet zudem eine natürliche Redundanz gegenüber Ausfällen der Anbieter.

Die Verwendung des BGP4-Protokolls gewährleistet einen effizienten Routing Ihrer Internet-Flüsse zur aktiven Gateway-Architektur, insbesondere in Szenarien mit Multi-Zonen-Verfügbarkeits-Deployment, wie beispielsweise Firewall-Cluster, die zwischen zwei Verfügbarkeitszonen verteilt sind.



## Integrierter DDoS-Schutz

Alle eingehenden Traffic zu CloudTemple-Infrastruktur profitieren von einem fortschrittlichen DDoS-Schutz, der von **F5**, einem weltweit führenden Unternehmen in Netzwerksicherheit, gewährleistet wird. Dieser Schutz funktioniert transparent und automatisch.

Volumetrische Angriffe werden direkt an der Netzwerkrandstelle von F5 erkannt und abgemildert, noch bevor sie das CloudTemple-Netzwerk erreichen. Dieser Vorfilter schützt vor Überlastungen, die unsere Internetverbindungen beeinträchtigen könnten, und stellt sicher, dass nur legitime Anfragen unsere Infrastrukturen erreichen.

**Alle CloudTemple-Dienste** profitieren diesen Schutz kostenlos, einschließlich Kundenpräfixe, die zu unserer Infrastruktur migriert werden können. Dieser integrierte Ansatz verwandelt eine Sicherheitsanforderung in einen operativen Vorteil für unsere Kunden.



## Zuweisung öffentlicher IP-Adressen

CloudTemple bietet ein flexibles System zur Zuweisung von öffentlichen Provider Aggregated (PA)-IP-Adressen, mit dem Kunden öffentliche IP-Adressen **einzelnen** nach ihren spezifischen Anforderungen reservieren können.



### Buchungsprozess

Die Buchung von öffentlichen IP-Adressen erfolgt direkt über die CloudTemple-Konsole und bietet eine selbstständige und sofortige Verwaltung:

**Über die API der Konsole:** Integration in Ihre Automatisierungs- und Bereitstellungs-Workflows möglich.

**Über die Web-Konsole:** Eine intuitive Oberfläche, die über den *Internet*-Bereich Ihres Kundenportals zugänglich ist.

Der Buchungsprozess folgt diesen einfachen Schritten: Anmeldung an der Konsole, Navigation zu *Internet* > *Adressen verwalten*, Auswahl von *Neue Adresse buchen*, Auswahloption zwischen IPv4 oder IPv6, dann Bestätigung der Bestellung.



### Abrechnung

Die Abrechnung der öffentlichen IP-Adressen erfolgt pro Arbeitseinheit (AE) und beginnt mit der Reservierung der Adresse, wodurch eine vollständige Kostentransparenz gewährleistet wird.

| Referenz | Einheit | SKU |
|----------|---------|-----|
| Netzwerk - Dedicated IPv4-Adresse | 1 IPv4 | RSIP-IP4-UNIT |
| Netzwerk - Dedicated IPv6-Adresse | 1 IPv6 | RSIP-IP6-UNIT |



## IPv4-Bereiche

Die Lieferung einer IPv4-Adresse erfolgt __innerhalb des verfügbaren Lagerbestands__ für unsere Kunden, pro IP-Adresse.

Die Bestellung von IPv4-Adressen erfolgt im Menü __*'Öffentliche IPs'*__ des Netzwerkmenüs im linken grünen Balken über den Button __*"IPv4-Adressen oder IPv6-Präfixe bestellen"*__.

Es ist möglich, die Ihnen zugewiesenen Adressbereiche in diesem Menü anzuzeigen.

| Referenz                     | Einheit  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Netzwerk - Dedicated IPv4-Öffentlich | 1 IPv4 | csp:(region):network:ipv4:v2 |



## IPv6-Blöcke

Die IPv6-Präfixe werden über das Menü __*'Öffentliche IPs'*__ im Netzwerk-Menü in der grünen Leiste auf der linken Seite über den Button __*"Adressen IPv4 oder IPv6-Präfixe bestellen"*__ bestellt.

Es ist möglich, die Ihnen zugewiesenen Präfixe in diesem Menü anzuzeigen.

| Referenz                             | Einheit   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Netzwerk - Dedicated IPv6-Öffentliche Bereiche | 64 IPv6 | csp:(region):network:ipv6:v1 |



## Migration von IP-Präfixen der Kunden

CloudTemple begleitet Kunden, die ihre eigenen IP-Präfixe in unsere Infrastruktur migrieren möchten, und erleichtert damit die Migrationprojekte, während die bestehende Netzwerkidentität erhalten bleibt.



### Vorteile der Migration

Diese Vorgehensweise ermöglicht es, Ihre IP-Identität während der Migration zu CloudTemple zu bewahren, was eine perfekte Kontinuität für Ihre Anwendungen und Kunden gewährleistet. Sie behalten die vollständige Kontrolle über die Nutzung Ihrer IP-Adressen und profitieren gleichzeitig von der CloudTemple-Infrastruktur.



### Integrationsprozess

Ihr IP-Präfix (z. B. `203.0.113.0/24`) wird in das Backbone-Netzwerk von CloudTemple integriert und von unserem AS angekündigt. Sobald es integriert ist, kann das Präfix frei Ihren virtuellen Maschinen, Lastverteilern oder anderen Diensten zugeordnet werden.

**Alle Adressen des migrierten Präfixes profitieren automatisch von der F5-DDoS-Schutzfunktion**, ohne zusätzliche Konfiguration oder Kosten.



### Voraussetzungen

Die Migration von IP-Präfixen erfordert, dass das Präfix in einem anerkannten Internet-Registry (ARIN, RIPE, APNIC usw.) registriert ist und Sie dessen rechtmäßiger Eigentümer sind. Die BGP-Verwaltung kann von Ihrem Team übernommen werden oder Sie können den technischen Support von CloudTemple in Anspruch nehmen, je nach Ihren Vorlieben.



## Bandbreitenreservierung im Internet

Die Internet-Bandbreite kann in 100 Mbps-Schritten reserviert werden. Die maximale verfügbare Kapazität für eine Gateway beträgt 10 Gbps, möglicherweise begrenzt durch die technischen Eigenschaften Ihrer Gateway.

Die Abrechnung erfolgt nach dem 95. Perzentil während des Abrechnungszeitraums, üblicherweise einem Monat. Sie können daher gelegentlich einen Burst über Ihre reservierte Kapazität hinaus nutzen.

| Referenz                                 | Einheit    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Netzwerk - Reservierte Internet-Bandbreite | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Hinweis:*__
*Es gibt keine volumetrische Abrechnung im Sinne von 'Egress-Gebühren'. Sie zahlen nur die Reservierung der Bandbreite.*



## Verfügbarkeit nach Angebot

Alle diese Internet-Verbindungs-Funktionen sind auf allen CloudTemple-Angeboten verfügbar und gewährleisten eine einheitliche Erfahrung, unabhängig vom verwendeten Diensttyp.

| Angebot | Internetverbindung | DDoS-Schutz | RSIP-Verwaltung | Präfixmigration |
|---------|--------------------|----------------|------------------|-----------------|
| Dedicated Hosting | ✓ | ✓ | ✓ | ✓ |
| Shared Hosting | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Dieser einheitliche Ansatz stellt sicher, dass alle unsere Kunden einen qualitativ hochwertigen Operator-Internetzugang, integrierte Sicherheit und fortgeschrittene Funktionen genießen, unabhängig von ihrer technologischen Wahl.