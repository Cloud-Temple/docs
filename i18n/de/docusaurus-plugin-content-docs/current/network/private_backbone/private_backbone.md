---
title: Private Backbone
slug: /network/private_backbone
---

# Private Backbone — Erweiterte Konnektivität

> **Übernehmen Sie die volle Kontrolle über Ihr Netzwerk mit einer erweiterten Konnektivität der Ebene 2, die für hybride Architekturen und maßgeschneiderte Konfigurationen entwickelt wurde.**

Der **Private Backbone** von Cloud Temple ist unser historisches Konnektivitätsprodukt, das für Experten entwickelt wurde. Basierend auf einer Netzwerkinfrastruktur der Ebene 2 (VPLS) ermöglicht er den Aufbau von erweiterten privaten Netzwerken zwischen Verfügbarkeitszonen einer Region. Dies ist die ideale Lösung für Unternehmen, die komplexe hybride Cloud-Architekturen aufbauen und die volle Kontrolle über ihre Netzwerktopologie behalten möchten.

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>VPLS-Architektur, regionale private Netzwerke, Internetzugang, öffentliche Adressierung IPv4/IPv6.</p>
    <a href="./private_backbone/concepts" class="card-link">Konzepte erkunden →</a>
  </div>
  <div class="card">
    <h3>Schnellstartanleitung</h3>
    <p>Erstellen Sie Ihr erstes privates Netzwerk und konfigurieren Sie Ihren Internetzugang in wenigen Schritten.</p>
    <a href="./private_backbone/quickstart" class="card-link">Starten →</a>
  </div>
  <div class="card">
    <h3>Tutorials</h3>
    <p>Konfigurieren Sie ein FortiGate oder pfSense mit BGP, um Ihre externe Konnektivität zu verwalten.</p>
    <a href="./private_backbone/tutorials" class="card-link">Tutorials anzeigen →</a>
  </div>
</div>

---

## Produktübersicht

Der **Private Backbone** bietet eine vollständige Palette von Low-Level-Diensten zur Interkonnektion und Bereitstellung Ihrer Infrastrukturen in einer souveränen Cloud. Er besteht aus zwei Säulen:

- **Private Netzwerke (VPLS)**: Erstellung von erweiterten, isolierten Netzwerken der Ebene 2 zwischen Verfügbarkeitszonen, ideal für komplexe hybride Architekturen.
- **Internetzugang**: Hochperformante Internetkonnektivität mit Zuweisung öffentlicher IP-Adressen (IPv4/IPv6) und nativem Anti-DDoS-Schutz.

:::tip[Für eine cloud-native Netzwerkerfahrung]
Für ein automatisierteres Netzwerkmanagement ist unser Produkt **[VPC (Virtual Private Cloud)](/network/vpc)** die empfohlene Lösung.
:::

---

## Schlüsselkennzahlen

| Vorteil | Wert |
|----------|--------|
| Inter-Service-Leistung | Bis zu **100 Gbps** |
| Externe Konnektivität | **1G / 10G** Ethernet |
| Öffentliche Adressierung | **IPv4 & IPv6** verfügbar |
| Netzwerkerweiterung | Transparente Ebene 2 über **VPLS** |
| Isolation | Vollständige **VLAN**-Segmentierung |
| SLA-Verfügbarkeit Netzwerk | **99,99 %** |

---

## Funktionen

| Funktion | Beschreibung |
|----------------|-------------|
| Regionale private VLANs | Erweiterte virtuelle Netzwerke zwischen AZs |
| Externe Konnektivität | 1G/10G-Ports für IPSEC, MPLS, Glasfaser |
| Dedizierte Leitungen | Ethernet 1G/10G mit diversifizierten Pfaden |
| VLAN-Tagging | Unterstützung für 802.1q und QinQ (802.1ad) |
| Mandantenteilung | Geteilte Netzwerke innerhalb derselben Organisation |
| Trunk-Modus | VLAN-Aggregation auf einer einzigen Verbindung |
| Öffentliche IPv4/IPv6-Adressen | Zuweisung pro Einheit, Verwaltung von Reverse-DNS (PTR) |
| Anti-DDoS-Schutz | Native Funktion im Internetzugang |

---

## Architektur

Die Infrastruktur basiert auf einem **MPLS**-Netzwerk mit interner Servicekonnektivität bis zu 100 Gbps:

- Transparente L2-Point-to-Multipoint-Erweiterung (VPLS)
- Externe Anschlussports (1G/10G) für Housing-Geräte oder Drittanbieter-Betreiber
- Automatisch diversifizierte Pfade für dedizierte Leitungen

### Cloud Temple-Integrationen

Die folgenden Dienste stützen sich auf den Private Backbone:

| Dienst | Typ |
|---------|------|
| IaaS OpenSource | Compute |
| IaaS VMware | Compute |
| PaaS OpenShift | Container |
| Housing | Rechenzentrum |
| VPC | Networking |

---

## Sicherheit & Compliance

**Zertifizierungen:** SecNumCloud 3.2 · HDS V1 · ISO 27001:2022 · ISAE 3402 · C5:2020

- Physische Verschlüsselung der Verbindungen zwischen Verfügbarkeitszonen
- Netzwerkisolation und Trennung des Datenverkehrs
- Datenresidenz in Frankreich (FR1)

---

## Preisgestaltung

| Dienst | SKU |
|---------|-----|
| Inter-AZ privates VLAN | `csp:(region):network:vlan:v1` |
| Dedizierte Ethernet-Leitung 1G | `csp:(region):network:epl:1g:v1` |
| Dedizierte Ethernet-Leitung 10G | `csp:(region):network:epl:10g:v1` |
| Öffentliche IPv4-Adresse | `csp:(region):network:ipv4:v1` |
| Öffentliche IPv6-Adresse | `csp:(region):network:ipv6:v1` |

Dedizierte Leitungen werden auf **zwei diversifizierten optischen Pfaden** bereitgestellt, mit einer Mindestlaufzeit von **36 Monaten**.

→ **[Öffentliche Tarife auf der Cloud Temple-Website](https://www.cloud-temple.com/nos-tarifs-publics/)**
