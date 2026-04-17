---
title: Private Backbone
slug: /network/private_backbone
---

# Private Backbone — Erweiterte Konnektivität

> **Übernehmen Sie die vollständige Kontrolle über Ihr Netzwerk mit erweiterter Layer-2-Konnektivität, konzipiert für hybride Architekturen und maßgeschneiderte Konfigurationen.**

Der **Private Backbone** von Cloud Temple ist unser historisches Konnektivitätsangebot, das für Experten entwickelt wurde. Es basiert auf einer Layer-2-Netzwerkinfrastruktur (VPLS) und ermöglicht die Erstellung erweiterter privater Netzwerke zwischen den Verfügbarkeitszonen einer Region. Es ist die ideale Lösung für Unternehmen, die komplexe hybride Cloud-Architekturen aufbauen und die vollständige Kontrolle über ihre Netzwerktopologie behalten möchten.

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>VPLS-Architektur, regionale private Netzwerke, Internetzugang, öffentliche IPv4/IPv6-Adressierung.</p>
    <a href="./concepts" class="card-link">Konzepte erkunden →</a>
  </div>
  <div class="card">
    <h3>Erste Schritte</h3>
    <p>Erstellen Sie Ihr erstes privates Netzwerk und konfigurieren Sie Ihren Internetzugang in wenigen Schritten.</p>
    <a href="./quickstart" class="card-link">Loslegen →</a>
  </div>
  <div class="card">
    <h3>Tutorials</h3>
    <p>Konfigurieren Sie FortiGate oder pfSense mit BGP zur Verwaltung Ihrer externen Konnektivität.</p>
    <a href="./tutorials" class="card-link">Tutorials ansehen →</a>
  </div>
</div>

---

## Dienstübersicht

Der **Private Backbone** bietet eine vollständige Reihe von Low-Level-Diensten zur Verbindung und Bereitstellung Ihrer Infrastrukturen in einer souveränen Cloud. Er besteht aus zwei Säulen:

- **Private Netzwerke (VPLS)**: Erstellung erweiterter und isolierter Layer-2-Netzwerke zwischen Verfügbarkeitszonen — ideal für komplexe hybride Architekturen.
- **Internetzugang**: Hochleistungs-Internetkonnektivität mit Zuweisung öffentlicher IP-Adressen (IPv4/IPv6) und nativem Anti-DDoS-Schutz.

:::tip[Für eine cloud-native Netzwerkerfahrung]
Für ein stärker automatisiertes Netzwerkmanagement empfehlen wir unser **[VPC (Virtual Private Cloud)](/network/vpc)**-Angebot.
:::

---

## Kennzahlen

| Vorteil | Wert |
|---------|------|
| Dienst-zu-Dienst-Performance | Bis zu **100 Gbps** |
| Externe Konnektivität | **1G / 10G** Ethernet |
| Öffentliche Adressierung | **IPv4 & IPv6** verfügbar |
| Netzwerkerweiterung | Transparentes Layer 2 über **VPLS** |
| Isolierung | Vollständige **VLAN**-Segmentierung |
| Netzwerkverfügbarkeits-SLA | **99,99 %** |

---

## Funktionen

| Funktion | Beschreibung |
|----------|--------------|
| Regionale private VLANs | Erweiterte Inter-AZ-Netzwerke |
| Externe Konnektivität | 1G/10G-Ports für IPSEC, MPLS, Glasfaser |
| Dedizierte Leitungen | Ethernet 1G/10G mit diversifizierten Pfaden |
| VLAN-Tagging | Unterstützung für 802.1q und QinQ (802.1ad) |
| Mandanten-übergreifendes Teilen | Gemeinsame Netzwerke innerhalb einer Organisation |
| Trunk-Modus | VLAN-Aggregation über eine einzelne Leitung |
| Öffentliche IPv4/IPv6-IPs | Einzelzuweisung, PTR-DNS-Verwaltung |
| Anti-DDoS-Schutz | Nativ beim Internetzugang |

---

## Architektur

Die Infrastruktur basiert auf einem **MPLS**-Netzwerk mit Dienst-zu-Dienst-Konnektivität bis zu 100 Gbps:

- Transparente Punkt-zu-Mehrpunkt-L2-Erweiterung (VPLS)
- Externe Verbindungsports (1G/10G) für gehostete Geräte oder Drittanbieter-Betreiber
- Automatisch diversifizierte Pfade für dedizierte Leitungen

### Cloud Temple Integrationen

Folgende Dienste stützen sich auf den Private Backbone:

| Dienst | Typ |
|--------|-----|
| IaaS OpenSource | Compute |
| IaaS VMware | Compute |
| PaaS OpenShift | Container |
| Housing | Rechenzentrum |
| VPC | Netzwerk |

---

## Sicherheit & Compliance

**Zertifizierungen:** SecNumCloud 3.2 · HDS V1 · ISO 27001:2022 · ISAE 3402 · C5:2020

- Physische Verschlüsselung der Verbindungen zwischen Verfügbarkeitszonen
- Netzwerkisolierung und Verkehrstrennung
- Datenspeicherung in Frankreich (FR1)

---

## Preisgestaltung

| Dienst | SKU |
|--------|-----|
| Privates Inter-AZ-VLAN | `csp:(region):network:vlan:v1` |
| Dedizierte Ethernet-1G-Leitung | `csp:(region):network:epl:1g:v1` |
| Dedizierte Ethernet-10G-Leitung | `csp:(region):network:epl:10g:v1` |
| Öffentliche IPv4-Adresse | `csp:(region):network:ipv4:v1` |
| Öffentliche IPv6-Adresse | `csp:(region):network:ipv6:v1` |

Dedizierte Leitungen werden auf **zwei diversifizierten Glasfaserpfaden** mit einer Mindestlaufzeit von **36 Monaten** bereitgestellt.

→ **[Offizielle Preise auf cloud-temple.com](https://www.cloud-temple.com/produits/)**
