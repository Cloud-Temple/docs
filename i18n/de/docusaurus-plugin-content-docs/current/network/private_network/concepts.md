---
title: Concepts
---

### Die VPLS-Technologie
Das globale Cloud Temple Netzwerk nutzt die __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__ Technologie.
__VPLS__ ist ein Layer-2-Point-to-Multipoint-VPN basierend auf Ethernet. Es ermöglicht die Verbindung geografisch verstreuter 
Standorte über ein MPLS-Netzwerk miteinander. Für die Kunden erscheinen alle Standorte im selben Ethernet-LAN, auch wenn der Verkehr über das Cloud Temple Netzwerk transportiert wird.

__VPLS__ hat in seiner Implementierung und Konfiguration viel gemeinsam mit einem Layer-2-VPN. In VPLS wird ein Paket, das aus einem Kundennetzwerk stammt, zuerst an ein Kundengerät (CE) (z. B. einen Router oder Ethernet-Switch) gesendet.
Es wird dann an einen Provider-Edge-Router (PE) innerhalb des Netzwerks des Dienstanbieters gesendet. 
Das Paket durchläuft das Netz des Dienstanbieters entlang eines MPLS-Label-Switched-Paths (LSP). 
Es erreicht den ausgehenden PE-Router, der den Verkehr dann an das CE-Gerät am Zielkundensite weiterleitet.
Der Unterschied besteht darin, dass Pakete bei __VPLS__ das Netzwerk des Dienstanbieters point-to-multipoint durchqueren können, was bedeutet, dass ein Paket von einem CE-Gerät 
an alle PE-Router gesendet werden kann, die an einer __VPLS__-Routing-Instanz teilnehmen. 

Der __VPLS__-Schaltkreis eines Kunden kann __zwischen allen Verfügbarkeitszonen einer Region__ erweitert werden.

Das __VPLS__-Protokoll ist für die Kunden __vollständig transparent__, die nur die verschiedenen VLANs in ihren Verfügbarkeitszonen sehen.

### Das Netzwerk im VMware-Virtualisierungsangebot

Die virtuellen Netzwerke (VLAN) des VMware-Virtualisierungsangebots sind Netzwerke des Typs __'DVPortgroup'__. Eine __'dvPortGroup'__, 
oder __'Distributed Virtual Port Group'__, ist ein spezifisches Konzept von VMware. Eine dvPortGroup ist eine Entität, die 
mehrere virtuelle Ports (vPorts) in einer verteilten virtuellen Netzwerkumgebung gruppiert, um deren Nutzung zu erleichtern.

Innerhalb eines __[Tenants](../../../console/iam/concepts/#tenant)__ können diese zwischen Verfügbarkeitszonen erweitert werden, 
was es Ihnen ermöglicht, "aktiv/aktiv"-Architekturen mit Quorum zu erstellen.

Die maximale nutzbare Bandbreite hängt hauptsächlich vom verwendeten Blade-Modell (10Gbps konvergent oder 25Gbps konvergent) und den Fähigkeiten der virtuellen Maschinen ab.

Es ist möglich, eine Bandbreite von 10Gbps zu erreichen.

Die auf der Cloud Temple-Konsole im Rahmen des VMware-Virtualisierungsangebots verfügbaren Konfigurationen sind die folgenden:

- __VLAN-Tagging__
- __Trunk__
- __Port-Mirror__

*__Hinweis__*: 

- *Die Wahl der IP-Adressierung innerhalb dieser Netzwerke ist __frei.__*
- *__SRV-IO__ ist im Netzwerkangebot, das mit der VMware-Virtualisierung verbunden ist, nicht verfügbar.*
- *__QinQ__ wird in der Cloud Temple-Architektur unterstützt. QinQ, auch bekannt als "VLAN-Stacking" oder 802.1ad, ist 
ein Netzwerkprotokoll, das die Kapselung mehrerer VLAN-Tags (Virtual Local Area Network) in einem einzigen Ethernet-Frame ermöglicht.*


## Regionale private Netzwerke

Die Bestellung privater Netzwerke innerhalb einer Region erfolgt direkt in der Cloud Temple-Konsole. 

__*Hinweis:*__ *Es ist nicht möglich, die VLAN-ID 802.1q auszuwählen.*

| Referenz                                  | Einheit| SKU                          | 
|-------------------------------------------|--------|------------------------------|
| RESEAU - Region FR1 - Private VLAN inter AZ | 1 VLAN | csp:(region):network:vlan:v1 |


## Netzwerkfreigabe zwischen Tenants

Standardmäßig __sind Netzwerke nur innerhalb eines Tenants verfügbar__. Sie können wählen, __ein Netzwerk zwischen mehreren Tenants zu teilen__, aus technischen oder Konnektivitätsgründen.
Es ist somit möglich, ein Netzwerk zwischen Ihren __[Tenants](../../../console/iam/concepts/#tenant)__ innerhalb derselben Organisation zu teilen.

## Externe private Konnektivität

Das Cloud Temple Netzwerkangebot ermöglicht Kunden, ihre eigenen IPSEC-, MPLS- oder Glasfaserinfrastrukturen mit ihren Tenants zu verbinden.

Cloud Temple bietet dafür: 

- Die Möglichkeit, ein Netzwerkgerät in einer gemeinsamen Zone (nicht Secnumcloud-zertifiziert) zu hosten,
- Konnektivitätsports mit 1Gbps oder 10Gbps.

Die Erstellung einer externen Konnektivität erfolgt durch eine Serviceanfrage mit Angabe von:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer zur Abschluss der Konfiguration
    Der Name des Tenant
    Die Verfügbarkeitszone oder alternativ der gewünschte physische Standort für diese Konnektivität
    Die Anzahl und für jeden, der erwartete Port-Typ (Glasfaser, Kupfer, 1Gbps, 10Gbps, ...)
    Das Netzwerk Ihres Tenant, das diese Konnektivität aufnehmen soll
    Die gewünschte Anzahl an Hosting-Einheiten ('U')

## Dedizierte Schaltkreise

Cloud Temple bietet die Möglichkeit, von einer dedizierten Glasfaserverbindung zwischen zwei dedizierten Hosting-Infrastrukturen (Rack) zu profitieren.

Dieser Service wird typischerweise genutzt, wenn Sie zwei Nicht-Cloud-Infrastrukturen (z.B. zwei IBM AS/400) in zwei separaten Racks in zwei unterschiedlichen physischen Rechenzentren hosten möchten.
Sie können entscheiden, diese beiden Racks direkt privat zu verbinden, ohne das Backbone-Netzwerk von Cloud Temple zu nutzen, und nur das optische Übertragungs-Backbone zu verwenden.

In diesem Kontext können wir eine optische Glasfaserverbindung zwischen Ihren beiden Racks liefern. Die Bereitstellung erfolgt systematisch über zwei diversifizierte optische Pfade.

Hier sind die verschiedenen möglichen Bereitstellungsarten:

- 1Gbps Ethernet Glasfaser
- 10Gbps Ethernet Glasfaser
- 8Gbps Fiber Channel
- 16Gbps Fiber Channel

Die Erstellung einer dedizierten Konnektivität erfolgt durch eine Serviceanfrage mit Angabe von:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer zur Abschluss der Konfiguration
    Der Name des Tenants
    Die Identifikatoren der beiden dedizierten Racks 
    Die gewünschte Bandbreite
    Das Netzwerk Ihres Tenants, das diese Konnektivität aufnehmen soll

Sie werden vom Support kontaktiert, um Ihre Anfrage zu verfeinern.

| Referenz                                                                                | Einheit    | SKU                              | Verpflichtung |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|---------------|
| RESEAU - Dedizierter Link inter AZ 1G Ethernet (zwei Links über zwei diversifizierte Wege) | 1 Paket  | csp:(region):network:epl:1g:v1   | 36 Monate    |
| RESEAU - Dedizierter Link inter AZ 10G Ethernet (zwei Links über zwei diversifizierte Wege) | 1 Paket  | csp:(region):network:epl:10g:v1  | 36 Monate    |
| RESEAU - Dedizierter Link inter AZ 8G Fiber-Channel (zwei Links über zwei diversifizierte Wege) | 1 Paket  | csp:(region):network:fcpl:8g:v1  | 36 Monate    |
| RESEAU - Dedizierter Link inter AZ 16G Fiber-Channel (zwei Links über zwei diversifizierte Wege) | 1 Paket  | csp:(region):network:fcpl:16g:v1 | 36 Monate    |