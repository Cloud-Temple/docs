---
title: Konzepte
---

<a id="concepts--private-backbone"></a>

## Einführung

Der **Private Backbone** ist das historische Konnektivitätsangebot von Cloud Temple und richtet sich an Netzwerkexperten. Er basiert auf einer Layer-2-Infrastruktur (VPLS) und ermöglicht es, erweiterte private Netzwerke zwischen den Verfügbarkeitszonen einer Region aufzubauen und Ihre Dienste im Internet bereitzustellen. Er eignet sich für komplexe hybride Cloud-Architekturen, wenn Sie die volle Kontrolle über Ihre Netzwerktopologie behalten und Ihre Sicherheitsgeräte selbst verwalten möchten.

Der Private Backbone stützt sich auf zwei Säulen, die jeweils auf einer eigenen Seite beschrieben sind:

- die regionalen **[privaten Netzwerke](../private_network/concepts.md)** (VPLS-Technologie);
- den **[Internetzugang](../internet/concepts.md)** (öffentliche Adressierung, BGP, Anti-DDoS).

<a id="3-comparaison-private-backbone-vs-vpc"></a>

### Vergleich Private Backbone vs. VPC

| Kriterium          | Private Backbone                  | VPC                        |
|--------------------|-----------------------------------|----------------------------|
| Netzwerkebene      | L2 (VPLS)                         | L3 (Routing)               |
| Verwaltung         | Manuell (Experte)                 | Automatisiert (cloud-native) |
| Topologiekontrolle | Vollständig                       | Geführt                    |
| Anwendungsfälle    | Komplexe hybride Architekturen    | Cloud-native Anwendungen   |
| Flexibilität       | Maximal                           | Cloud-Standard             |

:::tip[VPC für ein cloud-natives Erlebnis]
Für ein vereinfachtes und automatisiertes Netzwerkerlebnis sollten Sie das Produkt **[VPC](/network/vpc)** bevorzugen.
Der Private Backbone wird empfohlen, wenn Sie L2-Erweiterungen oder eine feingranulare Kontrolle der Netzwerktopologie benötigen.
:::

### Zielgruppen und Anwendungsfälle

- **Netzwerkarchitekten**: hybride Cloud-Architekturen mit L2- und L3-Erweiterung.
- **Organisationen mit mehreren Standorten**: Erweiterung eines Unternehmensnetzwerks zwischen Verfügbarkeitszonen.
- **Sensible Daten**: private Kommunikation ohne Exposition im Internet.
- **Bereitstellung von Diensten**: Web-, API- oder Anwendungsdienste, die hinter Ihrer eigenen Firewall im Internet veröffentlicht werden.
- **Housing**: Internetanbindung und privates Netzwerk für gehostete Geräte.

## Vorteile

| Vorteil                      | Beschreibung                                                                               |
|------------------------------|--------------------------------------------------------------------------------------------|
| Transparente L2-Erweiterung  | VPLS erweitert ein Layer-2-Netzwerk zwischen den Verfügbarkeitszonen wie ein einziges LAN. |
| Isolation                    | Jedes private VLAN ist isoliert; Sie kontrollieren die Zugriffe vollständig.               |
| Externe Konnektivität        | Ports mit 1 Gbps / 10 Gbps binden Ihre Standorte, Betreiber oder gehosteten Geräte an.     |
| Dedizierte Leitungen         | Verbindungen mit garantierter Bandbreite, bereitgestellt über zwei diversifizierte optische Pfade. |
| Mandantenübergreifende Freigabe | Ein privates Netzwerk kann zwischen den Tenants derselben Organisation geteilt werden.  |

## Funktionen

| Funktion                    | Beschreibung                                                                             |
|-----------------------------|------------------------------------------------------------------------------------------|
| Regionale private VLANs     | Virtuelle Netzwerke, die zwischen den Verfügbarkeitszonen erweitert werden.              |
| VLAN-Tagging und Trunk-Modus | Unterstützung von 802.1q und QinQ (802.1ad), Bündelung von VLANs über eine einzige Verbindung. |
| Mandantenübergreifende Freigabe | Gemeinsam genutzte Netzwerke innerhalb derselben Organisation.                       |
| Externe Konnektivität       | Ports mit 1 Gbps / 10 Gbps für IPSEC, MPLS oder Glasfaser.                               |
| Dedizierte Leitungen        | Ethernet 1G / 10G und Fiber Channel 8G / 16G.                                            |
| Öffentliche IPs             | Öffentliche IPv4- und IPv6-Adressen zur Bereitstellung Ihrer Dienste.                    |
| Reverse DNS (PTR)           | Anpassbarer PTR-Eintrag für jede öffentliche IP-Adresse.                                 |
| Natives Anti-DDoS           | Im Internetzugang enthaltener Schutz vor volumetrischen Angriffen.                       |
| eBGP-Peering                | Ankündigung Ihrer eigenen IPv4- und IPv6-Präfixe.                                        |

<a id="1-réseaux-privés-vpls"></a>

## Architektur

### Erweiterte L2-Architektur

Die privaten Netzwerke basieren auf der Technologie **VPLS (Virtual Private LAN Service)**. Sie erstellt ein transparentes, erweitertes Layer-2-Netzwerk (Ethernet-Schicht) zwischen allen **Verfügbarkeitszonen** einer Region.

Das zugrunde liegende MPLS-Netzwerk gewährleistet:

- eine Dienst-zu-Dienst-Konnektivität von bis zu **100 Gbps**;
- eine für Kunden **transparente** Punkt-zu-Mehrpunkt-L2-Erweiterung;
- **diversifizierte Pfade** für hohe Verfügbarkeit.

### Regionale private VLANs

Jedes virtuelle Netzwerk ist ein isoliertes **privates VLAN**, das zwischen den Clustern der Region propagiert wird:

- anpassbare Benennung, freie IP-Adressierung (Sie wählen Ihren Adressierungsplan);
- Unterstützung von **802.1q** (VLAN-Tagging) und **QinQ / 802.1ad** (Double Tagging);
- Möglichkeit des **Trunk-Modus**: Bündelung mehrerer VLANs über eine einzige physische Verbindung;
- selektive Propagierung: Auswahl der Ziel-Cluster (Limit von 20 Netzwerken pro Aktion).

### Mandantenübergreifende Freigabe

Ein privates Netzwerk kann **zwischen mehreren Tenants** derselben Organisation **geteilt** werden:

- Aktivierung über die Cloud Temple-Konsole;
- nach Organisation und Berechtigungen gefilterte Tenant-Liste;
- grafische Darstellung der Propagierung auf Clustern und Hypervisoren.

### Externe Konnektivität

Physische Ports mit **1 Gbps / 10 Gbps** (Glasfaser oder Kupfer) ermöglichen die Anbindung von:

- in der gemeinsamen Zone gehosteten Netzwerkgeräten (Firewalls, Router);
- IPSEC-, MPLS- oder Glasfaserverbindungen zu On-Premise-Standorten;
- Drittanbieter-Betreibern.

Diese Ports erfordern eine **Serviceanfrage** und werden nach Angebot bereitgestellt.

<a id="2-accès-internet--adressage-public"></a>

### Internetzugang

#### Öffentliche IP-Adressblöcke

Es werden beim RIPE registrierte Blöcke **öffentlicher IP-Adressen** bereitgestellt:

- **IPv4**: Blöcke ab 1 Adresse;
- **IPv6**: Blöcke ab /64.

Mit diesen Adressen können Sie Ihre Dienste von den Cloud Temple-Infrastrukturen aus im Internet bereitstellen.

#### Verwaltung von Reverse DNS (PTR)

Für jede öffentliche IP-Adresse können Sie über die Konsole einen benutzerdefinierten **PTR-Eintrag** für die Reverse-DNS-Auflösung Ihrer Dienste konfigurieren.

#### Natives Anti-DDoS

Der **Anti-DDoS**-Schutz ist im Internetzugang nativ enthalten. Er schützt Ihre exponierten Dienste ohne zusätzliche Konfiguration vor volumetrischen Angriffen.

#### BGP & erweitertes Routing

Für eine feingranulare Kontrolle des Routings:

- **eBGP**-Peering zur Ankündigung Ihrer eigenen IP-Präfixe;
- Konfiguration von **Route Servern** und BGP-Nachbarn;
- Unterstützung von IPv4- und IPv6-Präfixen;
- kompatibel mit Firewalls Ihrer Wahl (FortiGate, pfSense usw.).

#### Internet-Anwendungsfälle

- Bereitstellung von Web-, API- oder Anwendungsdiensten im Internet.
- Internetanbindung für Geräte im Housing.
- Architekturen mit dedizierter Firewall zur Verwaltung eingehender und ausgehender Datenströme.
- BGP-Peering für Organisationen mit eigenem AS.

### Integration mit Cloud Temple-Diensten

Der Private Backbone ist die Netzwerkgrundlage der Cloud Temple-Dienste. IaaS OpenSource, IaaS VMware, PaaS OpenShift, Housing und VPC können öffentliche IP-Adressen nutzen und sich in die privaten Netzwerke integrieren.

## Regionen und Verfügbarkeitszonen

Der Private Backbone ist in der Region FR1 verfügbar. Seine privaten Netzwerke erstrecken sich über alle Verfügbarkeitszonen der Region.

## Technische Spezifikationen

| Parameter                  | Wert                                          |
|----------------------------|-----------------------------------------------|
| Netzwerkleistung einer VM  | Maximal 10 Gbps                               |
| Dienst-zu-Dienst-Konnektivität | Bis zu 100 Gbps                           |
| Externe Konnektivität      | Ports mit 1 / 10 Gbps                         |
| Öffentliche Adressierung   | IPv4 ab einer Adresse, IPv6 ab /64            |

### Dedizierte Leitungen

Für Anforderungen an hohe Bandbreite mit garantiertem Durchsatz:

| Typ               | Durchsatz | Vertragsbindung |
|-------------------|---------|------------|
| Ethernet 1G       | 1 Gbps    | 36 Monate       |
| Ethernet 10G      | 10 Gbps   | 36 Monate       |
| Fiber Channel 8G  | 8 Gbps    | 36 Monate       |
| Fiber Channel 16G | 16 Gbps   | 36 Monate       |

Alle dedizierten Leitungen werden über **zwei diversifizierte optische Pfade** bereitgestellt.

### Grenzen

- Die Propagierung eines privaten Netzwerks erfolgt auf maximal 20 Netzwerke pro Aktion.
- Die Netzwerkleistung einer VM ist auf 10 Gbps begrenzt.

## Sicherheit und Compliance

Der Private Backbone ist nach HDS und ISO 27001 zertifiziert.

- **Isolation**: Jedes private VLAN ist isoliert, und die Freigabe zwischen Tenants ist auf dieselbe Organisation beschränkt.
- **Schutz**: Der Internetzugang umfasst einen Anti-DDoS-Schutz vor volumetrischen Angriffen.

## Dienstverfügbarkeit

Das Verfügbarkeitsziel des Netzwerks beträgt 99,99 %, gemessen über einen Monat.

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple ist in der [Verantwortlichkeitsmatrix (RACI) Netzwerk](../../contractual/network/raci.md) beschrieben.

## Reversibilität

Nicht zutreffend: Der Private Backbone transportiert Ihre Netzwerkströme und speichert keine Kundendaten. Ihr Adressierungsplan und die Konfiguration Ihrer Geräte bleiben unter Ihrer Kontrolle.

## Preise

Die Preise des Private Backbone sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Private Backbone — Preise](https://www.cloud-temple.com/produits/private-backbone/).
