---
title: Konzepte
---

### Die VPLS-Technologie
Das globale Netzwerk von Cloud Temple verwendet die Technologie __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ ist ein Layer-2-VPN von Punkt-zu-Multipunkt auf Ethernet-Basis. Es ermöglicht die Verbindung von geografisch
verstreuten Standorten über ein MPLS-Netzwerk. Für die Kunden erscheinen alle Standorte im selben
Ethernet-LAN, auch wenn der Verkehr über das Cloud Temple-Netzwerk geleitet wird.

__VPLS__ hat in seiner Implementierung und Konfiguration viel gemeinsam mit einem Layer-2-VPN. Bei VPLS wird ein Paket, das von einem Kundennetzwerk stammt,
zuerst an ein Kundengerät (CE) (z.B. einen Router oder Ethernet-Switch) gesendet.
Es wird dann an einen Anbieter-Edge-Router (PE) innerhalb des Netzwerks des Dienstanbieters gesendet.
Das Paket durchläuft das Netzwerk des Dienstanbieters über einen MPLS-Label-Switched-Pfad (LSP).
Es erreicht den Ausgangspe-Router, der den Datenverkehr dann an das CE-Gerät am Zielkundennetzwerk weiterleitet.
Der Unterschied besteht darin, dass bei __VPLS__ Pakete das Netzwerk des Dienstanbieters auf Punkt-zu-Multipunkt-Weise durchqueren können, was bedeutet, dass ein Paket von einem CE-Gerät aus
an alle PE-Router gesendet werden kann, die an einer VPLS-Routing-Instanz beteiligt sind.

Der __VPLS__-Kreislauf eines Kunden kann __zwischen allen Verfügbarkeitszonen einer Region erweitert werden__.

Das __VPLS__-Protokoll ist für die Kunden __völlig transparent__, die nur die verschiedenen VLANs in ihren Verfügbarkeitszonen sehen.

### Das Netzwerk im VMware-Virtualisierungsangebot

Die virtuellen Netzwerke (vlan) des VMware-Virtualisierungsangebots sind Netzwerke vom Typ __'DVPortgroup'__. Ein __'dvPortGroup'__,
oder auch __'Distributed Virtual Port Group'__, ist ein spezifisches Konzept von VMware. Ein dvPortGroup ist eine Einheit, die
mehrere virtuelle Ports (vPorts) in einer verteilten virtuellen Netzwerkumgebung gruppiert, um ihre Nutzung zu erleichtern.

Lokalisiert innerhalb eines __[Tenant](../../../console/iam/concepts/#tenant)__, können sie zwischen den Verfügbarkeitszonen erweitert werden,
so dass Sie "aktiv/aktiv"-Architekturen mit Quorum erstellen können.

Die maximal nutzbare Bandbreite hängt hauptsächlich vom verwendeten Klingenmodell (10Gbps konvergiert oder 25 Gbps konvergiert) und den Fähigkeiten der virtuellen Maschinen ab.

Es ist möglich, eine Bandbreite von 10Gbps zu erreichen.

Die in der Cloud Temple-Konsole im Rahmen des VMware-Virtualisierungsangebots verfügbaren Konfigurationen sind:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Hinweis__*:

- *Die Auswahl der IP-Adressierung innerhalb dieser Netzwerke ist __frei.__*
- *__SRV-IO__ ist im Netzwerkangebot, das mit der VMware-Virtualisierung verbunden ist, nicht verfügbar.*
- *__QinQ__ wird in der Cloud Temple-Architektur unterstützt. QinQ, auch bekannt als "VLAN stacking" oder 802.1ad, ist
ein Netzwerkprotokoll, das die Kapselung mehrerer VLAN-Tags (Virtual Local Area Network) in einem einzigen Ethernet-Frame ermöglicht.*

## Regionale private Netzwerke

Die Bestellung von privaten Netzwerken innerhalb einer Region erfolgt direkt über die Cloud Temple-Konsole.

__*Anmerkung:*__ *Es ist nicht möglich, die ID des 802.1q VLAN auszuwählen.*

| Referenz                                  | Einheit | SKU                            |
|-------------------------------------------|--------|---------------------------------|
| NETZWERK - Region FR1 - privates VLAN inter AZ | 1 VLAN | csp:(region):network:vlan:v1 |


## Netzwerkfreigabe zwischen Tenants

Standardmäßig __sind Netzwerke nur innerhalb eines Tenants verfügbar.__ Sie können wählen, __ein Netzwerk zwischen mehreren Tenants zu teilen__, aus technischen Gründen oder aus Konnektivitätsgründen.
Es ist somit möglich, ein Netzwerk zwischen Ihren __[Tenant](../../../console/iam/concepts/#tenant)__ innerhalb derselben Organisation zu teilen.

## Externe private Konnektivität

Das Netzwerkangebot von Cloud Temple ermöglicht es den Kunden, ihre eigenen IPSEC-, MPLS- oder Fibre-Infrastrukturen an ihre Tenants anzuschließen.

Cloud Temple bietet dafür:

- Die Möglichkeit, ein Netzwerkgerät in einem gemeinsamen Bereich zu hosten (nicht Secnumcloud-zertifiziert)
- Konnektivitätsports von 1Gbps oder 10Gbps.

Die Erstellung einer externen Konnektivität erfolgt durch eine Serviceanfrage mit Angabe:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit dessen E-Mail und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Die Verfügbarkeitszone oder ersatzweise der gewünschte physische Standort für diese Konnektivität
    Die Anzahl und für jeden einzelnen den erwarteten Konnektivitätstyp (Faser, Kupfer, 1Gbps, 10Gbps, ...)
    Das Netzwerk Ihres Tenants, das diese Konnektivität aufnehmen soll
    Die Anzahl der gewünschten 'U' Hosting-Einheiten

## Dedizierte Schaltungen

Cloud Temple bietet die Möglichkeit, eine dedizierte Faser zwischen zwei dedizierten Hosting-Infrastrukturen (Rack) zu nutzen.

Dieser Service wird typischerweise verwendet, wenn Sie 2 nicht-cloud Infrastrukturen (z.B. zwei IBM AS/400) in zwei getrennten Racks
in zwei physisch getrennten Rechenzentren hosten möchten.
Sie können diese beiden Racks direkt privat verbinden, ohne das Cloud Temple Backbone zu nutzen, und nur das optische Übertragungs-Backbone verwenden.

In diesem Kontext können wir eine Glasfaserverbindung zwischen Ihren beiden Racks liefern. Die Lieferung erfolgt systematisch auf zwei diversifizierten optischen Wegen.

Hier sind die verschiedenen möglichen Lieferarten:

- Ethernet-Faser 1Gbps
- Ethernet-Faser 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

Die Erstellung einer dedizierten Konnektivität erfolgt durch eine Serviceanfrage mit Angabe:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit dessen E-Mail und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Die Identifikationsnummern der beiden dedizierten Racks
    Die gewünschte Bandbreite
    Das Netzwerk Ihres Tenants, das diese Konnektivität aufnehmen soll

Sie werden vom Support kontaktiert, um Ihre Anfrage zu präzisieren.

| Referenz                                                                                | Einheit   | SKU                             | Engagement |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| NETZWERK - dedizierte Verbindung inter AZ 1G Ethernet (zwei Verbindungen über zwei diversifizierte Wege)       | 1 Pauschale | csp:(region):network:epl:1g:v1   | 36 Monate |
| NETZWERK - dedizierte Verbindung inter AZ 10G Ethernet (zwei Verbindungen über zwei diversifizierte Wege)      | 1 Pauschale | csp:(region):network:epl:10g:v1  | 36 Monate |
| NETZWERK - dedizierte Verbindung inter AZ 8G Fiber-Channel (zwei Verbindungen über zwei diversifizierte Wege)  | 1 Pauschale | csp:(region):network:fcpl:8g:v1  | 36 Monate |
| NETZWERK - dedizierte Verbindung inter AZ 16G Fiber-Channel (zwei Verbindungen über zwei diversifizierte Wege) | 1 Pauschale | csp:(region):network:fcpl:16g:v1 | 36 Monate |