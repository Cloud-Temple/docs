---
title: Konzepte
---

### VPLS-Technologie

Das globale Netzwerk von Cloud Temple verwendet die __[VPLS](https://de.wikipedia.org/wiki/Virtual_Private_LAN_Service)__-Technologie.
__VPLS__ ist ein Punkt-zu-Multipunkt Layer-2-VPN auf Ethernet-Basis. Es ermöglicht die Verbindung geografisch verteilter Standorte
über ein MPLS-Netzwerk. Für die Kunden erscheinen alle Standorte als Teil desselben
Ethernet-LANs, obwohl der Datenverkehr über das Cloud Temple-Netzwerk transportiert wird.

__VPLS__ hat in seiner Implementierung und Konfiguration viel mit einem Layer-2-VPN gemeinsam. Bei VPLS wird ein Paket, das
aus einem Kundennetzwerk stammt, zunächst an ein Customer Edge (CE)-Gerät (z.B. einen Router oder einen Ethernet-Switch) gesendet.
Es wird dann an einen Provider Edge (PE)-Router innerhalb des Netzwerks des Dienstanbieters gesendet.
Das Paket durchquert das Netzwerk des Dienstanbieters auf einem MPLS-Label-Switched Path (LSP).
Es erreicht den Ausgangs-PE-Router, der den Verkehr dann an das CE-Gerät am Ziel-Kundenstandort weiterleitet.
Der Unterschied liegt darin, dass bei __VPLS__ Pakete das Netzwerk des Dienstanbieters
auf Punkt-zu-Multipunkt-Weise durchqueren können, was bedeutet, dass ein Paket von einem CE-Gerät an
alle PE-Router, die an einer __VPLS__-Routing-Instanz teilnehmen, übertragen werden kann.

Der __VPLS__-Kreis eines Kunden kann __über alle Verfügbarkeitszonen einer Region hinweg erweitert werden__.

Das __VPLS__-Protokoll ist für Kunden __völlig transparent__, die nur die verschiedenen VLANs in ihren Verfügbarkeitszonen sehen.

### Netzwerke im VMware-Virtualisierungsangebot

Virtuelle Netzwerke (VLAN) im VMware-Virtualisierungsangebot sind Netzwerke vom Typ __'DVPortgroup'__. Eine __'dvPortGroup'__,
oder __'Distributed Virtual Port Group'__, ist ein VMware-spezifisches Konzept. Eine dvPortGroup ist eine Einheit, die
mehrere virtuelle Ports (vPorts) in einer verteilten virtuellen Netzwerkumgebung zusammenfasst, um ihre Nutzung zu erleichtern.

Sie befinden sich innerhalb eines __[Tenants](../../../console/iam/concepts/#tenant)__ und können über Verfügbarkeitszonen hinweg erweitert werden,
was Ihnen den Aufbau von "Aktiv/Aktiv"-Architekturen mit Quorum ermöglicht.

Die maximal nutzbare Bandbreite hängt hauptsächlich vom verwendeten Blade-Modell (10 Gbps konvergiert oder 25 Gbps konvergiert) und den Fähigkeiten der virtuellen Maschinen ab.

Es ist möglich, eine Bandbreite von 10 Gbps zu erreichen.

Die auf der Cloud Temple-Konsole im Rahmen des VMware-Virtualisierungsangebots verfügbaren Konfigurationen sind wie folgt:

- __Vlan-Tagging__
- __Trunk__
- __Port-Mirror__

*__Hinweis__* :

- *Die Wahl der IP-Adressierung innerhalb dieser Netzwerke ist __frei.__*
- *__SRV-IO__ ist im Netzwerkangebot für die VMware-Virtualisierung nicht verfügbar.*
- *__QinQ__ wird auf der Cloud Temple-Architektur unterstützt. QinQ, auch bekannt als "VLAN-Stacking" oder 802.1ad, ist
ein Netzwerkprotokoll, das die Kapselung mehrerer VLAN-Tags (Virtual Local Area Network) in einem einzigen Ethernet-Frame ermöglicht.*

## Regionale private Netzwerke

Die Bestellung privater Netzwerke innerhalb einer Region erfolgt direkt über die Cloud Temple-Konsole.

__*Hinweis:*__ *Es ist nicht möglich, die 802.1q VLAN-ID zu wählen.*

| Referenz                                 | Einheit | SKU                          |
|-------------------------------------------|--------|------------------------------|
| NETZWERK - Region FR1 - Privates VLAN zwischen AZ | 1 VLAN | csp:(region):network:vlan:v1 |

## Netzwerk-Sharing zwischen Tenants

Standardmäßig sind __Netzwerke nur innerhalb eines Tenants verfügbar__. Sie können wählen, __ein Netzwerk zwischen mehreren Tenants zu teilen__, aus technischen Gründen oder aus Konnektivitätsgründen.
Es ist somit möglich, ein Netzwerk zwischen Ihren __[Tenants](../../../console/iam/concepts/#tenant)__ innerhalb derselben Organisation zu teilen.

## Externe private Konnektivität

Das Netzwerkangebot von Cloud Temple ermöglicht es Kunden, ihre eigenen IPSEC-, MPLS- oder Glasfaser-Infrastrukturen mit ihren Tenants zu verbinden.

Zu diesem Zweck bietet Cloud Temple:

- Die Möglichkeit, ein Netzwerkgerät in einem gemeinsamen Bereich (nicht als Secnumcloud qualifiziert) zu hosten,
- 1Gbps- oder 10Gbps-Konnektivitätsports.

Die Erstellung einer externen Konnektivität erfolgt durch eine Serviceanfrage mit Angabe von:

    Ihrem Organisationsnamen
    Dem Namen eines Kontakts mit seiner E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Dem Namen des Tenants
    Der gewünschten Verfügbarkeitszone oder, falls nicht vorhanden, dem gewünschten physischen Standort für diese Konnektivität
    Der Anzahl und für jeden, der Art des erwarteten Konnektivitätsports (Glasfaser, Kupfer, 1Gbps, 10Gbps, ...)
    Dem Netzwerk Ihres Tenants, das diese Konnektivität aufnehmen soll
    Der Anzahl der eventuell gewünschten 'U' für das Hosting

## Dedizierte Leitungen

Cloud Temple bietet die Möglichkeit, von einer dedizierten Glasfaserverbindung zwischen zwei dedizierten Hosting-Infrastrukturen (Racks) zu profitieren.

Dieser Dienst wird typischerweise genutzt, wenn Sie 2 Nicht-Cloud-Infrastrukturen (z.B. zwei IBM AS/400) in zwei separaten Racks auf zwei separaten physischen Rechenzentren hosten möchten.
Sie möchten diese beiden Racks möglicherweise direkt privat verbinden, ohne die Cloud Temple-Backbone-Infrastruktur zu nutzen, und nur das optische Übertragungsbackbone verwenden.

In diesem Kontext können wir eine Glasfaserverbindung zwischen Ihren beiden Racks bereitstellen. Die Bereitstellung erfolgt systematisch über zwei diversifizierte optische Wege.

Hier sind die verschiedenen möglichen Lieferarten:

- 1Gbps Glasfaser-Ethernet
- 10Gbps Glasfaser-Ethernet
- 8Gbps Fiber Channel
- 16Gbps Fiber Channel

Die Erstellung einer dedizierten Konnektivität erfolgt durch eine Serviceanfrage mit Angabe von:

    Ihrem Organisationsnamen
    Dem Namen eines Kontakts mit seiner E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Dem Namen des Tenants
    Den Kennungen der beiden dedizierten Racks
    Der gewünschten Bandbreite
    Dem Netzwerk Ihres Tenants, das diese Konnektivität aufnehmen soll

Sie werden vom Support kontaktiert, um Ihre Anfrage zu präzisieren.

| Referenz                                                                                | Einheit  | SKU                              | Bindung   |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| NETZWERK - Dedizierte Inter-AZ 1G-Ethernet-Verbindung (zwei Verbindungen über zwei diversifizierte Wege) | 1 Paket | csp:(region):network:epl:1g:v1   | 36 Monate  |
| NETZWERK - Dedizierte Inter-AZ 10G-Ethernet-Verbindung (zwei Verbindungen über zwei diversifizierte Wege) | 1 Paket | csp:(region):network:epl:10g:v1  | 36 Monate  |
| NETZWERK - Dedizierte Inter-AZ 8G-Fiber-Channel-Verbindung (zwei Verbindungen über zwei diversifizierte Wege) | 1 Paket | csp:(region):network:fcpl:8g:v1  | 36 Monate  |
| NETZWERK - Dedizierte Inter-AZ 16G-Fiber-Channel-Verbindung (zwei Verbindungen über zwei diversifizierte Wege) | 1 Paket | csp:(region):network:fcpl:16g:v1 | 36 Monate  |
