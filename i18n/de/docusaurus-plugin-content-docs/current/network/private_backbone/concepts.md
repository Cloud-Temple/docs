---
title: Konzepte
---

# Konzepte — Private Backbone

Der Private Backbone basiert auf zwei komplementären Säulen: **regionalen privaten Netzwerken** (VPLS-Technologie) und **Internetkonnektivität** (öffentliche Adressierung, BGP, Anti-DDoS).

---

## 1. Private Netzwerke (VPLS)

### Erweiterte L2-Architektur

Cloud Temple bietet private Netzwerke auf Basis der **VPLS (Virtual Private LAN Service)**-Technologie an. Diese Technologie erstellt ein transparentes, erweitertes Layer-2-Netzwerk (Ethernet-Schicht) zwischen allen **Verfügbarkeitszonen** einer Region.

Das zugrunde liegende MPLS-Netzwerk gewährleistet:
- Dienst-zu-Dienst-Konnektivität bis zu **100 Gbps**
- **Transparente** Punkt-zu-Mehrpunkt-L2-Erweiterung für Kunden
- **Diversifizierte Pfade** für hohe Verfügbarkeit

### Regionale private VLANs

Jedes virtuelle Netzwerk ist ein isoliertes **privates VLAN**, das zwischen den Clustern der Region propagiert wird:

- Anpassbare Benennung, freie IP-Adressierung (der Kunde wählt seinen Adressierungsplan)
- Unterstützung von **802.1q** (VLAN-Tagging) und **QinQ / 802.1ad** (Double-Tagging)
- **Trunk-Modus** möglich: mehrere VLANs über eine einzelne physische Leitung aggregieren
- Selektive Propagierung: Auswahl der Ziel-Cluster (Limit von 20 Netzwerken pro Aktion)

### Mandanten-übergreifendes Teilen

Ein privates Netzwerk kann **zwischen mehreren Mandanten** derselben Organisation geteilt werden:
- Aktivierung über die Cloud Temple-Konsole
- Mandantenliste nach Organisation und Berechtigungen gefiltert
- Grafische Anzeige der Propagierung auf Clustern und Hypervisoren

### Externe Konnektivität

Physische Ports mit **1 Gbps / 10 Gbps** (Glasfaser oder Kupfer) ermöglichen den Anschluss von:
- In der gemeinsamen Zone gehosteten Netzwerkgeräten (Firewalls, Router)
- IPSEC-, MPLS- oder Glasfaserleitungen zu On-Premise-Standorten
- Drittanbieter-Betreibern

Diese Ports erfordern eine **Serviceanfrage** und werden auf Angebot geliefert.

### Dedizierte Leitungen

Für Anforderungen an hohe Bandbreite mit garantiertem Durchsatz:

| Typ | Durchsatz | Laufzeit |
|-----|-----------|----------|
| Ethernet 1G | 1 Gbps | 36 Monate |
| Ethernet 10G | 10 Gbps | 36 Monate |
| Fiber Channel 8G | 8 Gbps | 36 Monate |
| Fiber Channel 16G | 16 Gbps | 36 Monate |

Alle dedizierten Leitungen werden automatisch auf **zwei diversifizierten Glasfaserpfaden** geliefert.

---

## 2. Internetzugang & Öffentliche Adressierung

### Öffentliche IP-Adressblöcke

Cloud Temple stellt beim RIPE registrierte **öffentliche IP-Adressen** bereit:
- **IPv4**: Blöcke ab 1 Adresse
- **IPv6**: Blöcke ab /64 (64 Adressen)

Diese Adressen ermöglichen es, Ihre Dienste über die Cloud Temple-Infrastruktur im Internet zugänglich zu machen.

### Reverse-DNS-Verwaltung (PTR)

Für jede öffentliche IP-Adresse können Sie über die Cloud Temple-Konsole einen benutzerdefinierten **PTR-Eintrag** konfigurieren, der die Reverse-DNS-Auflösung Ihrer Dienste ermöglicht.

### Nativer Anti-DDoS-Schutz

Der **Anti-DDoS**-Schutz ist nativ im Cloud Temple-Internetzugang enthalten. Er schützt Ihre exponierten Dienste ohne zusätzliche Konfiguration vor volumetrischen Angriffen.

### BGP & Erweitertes Routing

Für Organisationen, die eine feinkörnige Routing-Kontrolle benötigen:
- **eBGP**-Peering zum Ankündigen eigener IP-Präfixe verfügbar
- Konfiguration von **Route Servern** und BGP-Nachbarn
- Unterstützung von IPv4- und IPv6-Präfixen
- Kompatibel mit Ihrer bevorzugten Firewall (FortiGate, pfSense usw.)

### Internet-Anwendungsfälle

- Exposition von Web-, API- oder Anwendungsdiensten im Internet
- Internetzugang für gehostete Geräte
- Architekturen mit dedizierter Firewall zur Verwaltung ein- und ausgehender Datenströme
- BGP-Peering für Organisationen mit eigenem AS

---

## 3. Vergleich Private Backbone vs VPC

| Kriterium | Private Backbone | VPC |
|-----------|-----------------|-----|
| Netzwerkebene | L2 (VPLS) | L3 (Routing) |
| Verwaltung | Manuell (Experte) | Automatisiert (cloud-native) |
| Topologie-Kontrolle | Vollständig | Geführt |
| Anwendungsfall | Komplexe hybride Architekturen | Cloud-native Anwendungen |
| Flexibilität | Maximum | Cloud-Standard |

:::tip[VPC für eine cloud-native Erfahrung]
Für eine vereinfachte und automatisierte Netzwerkerfahrung wählen Sie das **[VPC](/network/vpc)**-Angebot.  
Private Backbone wird empfohlen, wenn Sie L2-Erweiterung oder detaillierte Netzwerktopologie-Kontrolle benötigen.
:::
