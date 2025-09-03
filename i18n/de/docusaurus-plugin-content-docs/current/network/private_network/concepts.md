---
title: Konzepte
---

### Die VPLS-Technologie

Das globale Cloud Temple-Netzwerk verwendet die Technologie __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ ist ein Layer-2-VPN mit Punkt-zu-Multipunkt-Verbindung, das auf Ethernet basiert. Es ermöglicht die Verbindung von geografisch verteilten Standorten über ein MPLS-Netzwerk. Für die Kunden sehen alle Standorte aus wie ein gemeinsames Ethernet-LAN, auch wenn der Datenverkehr über das Cloud Temple-Netzwerk transportiert wird.

__VPLS__ hat in seiner Implementierung und Konfiguration viel mit einem Layer-2-VPN gemeinsam. Bei VPLS wird ein Paket, das aus einem Kunden-Netzwerk stammt, zunächst an ein Customer Edge-Gerät (CE) (z. B. ein Router oder ein Ethernet-Switch) gesendet.
Es wird dann an einen Provider Edge-Router innerhalb des Dienstleister-Netzwerks gesendet.
Das Paket durchquert das Dienstleister-Netzwerk über einen MPLS-Label-Switch-Pfad (LSP).
Es erreicht den Ausgangs-Provider Edge-Router, der den Datenverkehr anschließend an das CE-Gerät am Zielstandort des Kunden weiterleitet.
Der Unterschied besteht darin, dass bei __VPLS__ die Pakete das Dienstleister-Netzwerk in einer Punkt-zu-Multipunkt-Verbindung durchqueren können, was bedeutet, dass ein Paket, das von einem CE-Gerät stammt, an alle PE-Router weitergeleitet werden kann, die an einer __VPLS__-Routingsitzung teilnehmen.

Der __VPLS__-Kreislauf eines Kunden kann __über alle Verfügbarkeitszonen einer Region hinaus erweitert werden__.

Der __VPLS__-Protokoll ist __vollständig transparent__ für die Kunden, die nur die verschiedenen VLANs auf ihren Verfügbarkeitszonen sehen.

### Das Netzwerk in der VMware-Virtualisierungsangebot

Die virtuellen Netzwerke (VLAN) des VMware-Virtualisierungsangebots sind Netzwerke vom Typ __'DVPortgroup'__. Ein __'dvPortGroup'__, oder __'Distributed Virtual Port Group'__, ist ein spezifischer Begriff in VMware. Ein dvPortGroup ist eine Entität, die mehrere virtuelle Ports (vPorts) in einem verteilten virtuellen Netzwerkumfeld zusammenfasst, um deren Nutzung zu vereinfachen.

Innerhalb eines __[Tenant](../../console/iam/concepts.md#tenant)__ können sie zwischen den Verfügbarkeitszonen erweitert werden, wodurch es Ihnen ermöglicht wird, Architekturen "aktiv/aktiv" mit Quorum zu erstellen.

Die maximale nutzbare Bandbreite hängt hauptsächlich vom Blade-Modell ab (10 Gbps konvergiert oder 25 Gbps konvergiert) und von den Fähigkeiten der virtuellen Maschinen.

Es ist eine Bandbreite von 10 Gbps zu erwarten.

Die verfügbaren Konfigurationen in der Cloud Temple-Konsole im Rahmen des VMware-Virtualisierungsangebots sind wie folgt:

- __VLAN-Tagging__
- __Trunk__
- __Port-Mirror__

*__Hinweis__*:

- *Die Wahl der IP-Adresse innerhalb dieser Netzwerke ist __frei__.*
- *__SRV-IO__ ist im Netzwerkangebot der VMware-Virtualisierung nicht verfügbar.*
- *__QinQ__ wird auf der Cloud Temple-Architektur unterstützt. QinQ, auch als „VLAN-Stacking“ oder 802.1ad bekannt, ist ein Netzwerkprotokoll, das die Einbettung mehrerer VLAN-Etiketten (Virtual Local Area Network) in einen einzigen Ethernet-Rahmen ermöglicht.*

## Regionale private Netzwerke

Die Verwaltung privater Netzwerke innerhalb einer Region erfolgt direkt in der Cloud Temple-Konsole.

__*Hinweis:*__ *Es ist nicht möglich, die VLAN-ID 802.1q auszuwählen.*

| Referenz                                 | Einheit  | SKU                          |
|-------------------------------------------|--------|------------------------------|
| NETZWERK - Region FR1 - inter AZ privates VLAN | 1 VLAN | csp:(region):network:vlan:v1 |

## Netzwerkfreigabe zwischen Mandanten

Standardmäßig sind __Netzwerke nur innerhalb eines Mandanten verfügbar__. Sie können __ein Netzwerk zwischen mehreren Mandanten freigeben__ aus technischen Gründen oder aus Gründen der Verbindung.
Es ist somit möglich, ein Netzwerk zwischen Ihren __[Mandanten](../../console/iam/concepts.md#tenant)__ innerhalb derselben Organisation zu teilen.

## Externe Privatverbindung

Das Cloud Temple-Netzwerkangebot ermöglicht es Kunden, ihre eigenen IPSEC-, MPLS- oder Fibre-Infrastrukturen mit ihren Mietern zu verbinden.

Cloud Temple bietet hierzu an:

- Die Möglichkeit, ein Netzwerkgerät in einer gemeinsamen Zone (nicht Secnumcloud-zertifiziert) zu hosten,
- Verbindungsports mit 1Gbps oder 10Gbps.

Die Einrichtung einer externen Verbindung erfolgt durch eine Serviceanfrage, die folgende Angaben enthält:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer, um die Konfiguration abzuschließen
    Der Name des Mieters
    Die verfügbare Zone oder, falls nicht verfügbar, der gewünschte physische Standort für diese Verbindung
    Die Anzahl der erwarteten Verbindungsports und für jeden jeweils der Typ (Faser, Kupfer, 1Gbps, 10Gbps, ...)
    Das Netzwerk des Mieters, das diese Verbindung empfangen soll
    Die Anzahl der eventuell gewünschten Rack-Einheiten (U) für die Hosting-Plätze

## Dedizierte Leitungen

Cloud Temple bietet die Möglichkeit, eine dedizierte Glasfaser zwischen zwei dedizierten Hosting-Infrastrukturen (Racks) zu nutzen.

Dieser Dienst wird typischerweise verwendet, wenn Sie zwei nicht-cloud-basierte Infrastrukturen (z. B. zwei IBM AS/400) in zwei separaten Racks auf zwei physischen Datacenters hosten möchten. Sie möchten möglicherweise diese beiden Racks direkt über ein privates Netzwerk verbinden, ohne die Cloud Temple-Backbone-Infrastruktur zu nutzen, sondern nur das optische Übertragungsbackbone.

In diesem Kontext können wir eine Glasfaser-Verbindung zwischen Ihren beiden Racks liefern. Die Lieferung erfolgt stets über zwei unterschiedliche optische Pfade.

Hier sind die verschiedenen möglichen Lieferarten:

- Ethernet-Glasfaser 1Gbps
- Ethernet-Glasfaser 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

Die Einrichtung einer dedizierten Verbindung erfolgt über eine Serviceanfrage, die folgende Angaben enthält:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer zur Abschlusskonfiguration
    Der Name des Tenants
    Die Identifikatoren der beiden dedizierten Racks
    Die gewünschte Bandbreite
    Das Netzwerk des Tenants, das diese Verbindung empfangen soll

Sie werden vom Support kontaktiert, um Ihre Anfrage zu verfeinern.

| Referenz                                                                                | Einheit     | SKU                              | Vertrag |
|------------------------------------------------------------------------------------------|-------------|----------------------------------|---------|
| NETZWERK - Inter-AZ-Dedizierter Ethernet-Link 1G (zwei Links über zwei unterschiedliche Pfade)       | 1 Paket | csp:(region):network:epl:1g:v1   | 36 Monate    |
| NETZWERK - Inter-AZ-Dedizierter Ethernet-Link 10G (zwei Links über zwei unterschiedliche Pfade)      | 1 Paket | csp:(region):network:epl:10g:v1  | 36 Monate    |
| NETZWERK - Inter-AZ-Dedizierter Fiber Channel-Link 8G (zwei Links über zwei unterschiedliche Pfade)  | 1 Paket | csp:(region):network:fcpl:8g:v1  | 36 Monate    |
| NETZWERK - Inter-AZ-Dedizierter Fiber Channel-Link 16G (zwei Links über zwei unterschiedliche Pfade) | 1 Paket | csp:(region):network:fcpl:16g:v1 | 36 Monate    |