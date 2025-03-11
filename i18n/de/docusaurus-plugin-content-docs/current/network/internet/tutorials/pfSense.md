---
title: Einrichten einer Open-Source-Firewall pfSense
tags:
  - internet
  - tutorials
---
import pfSenseWebui from '../images/pfsense_webui.png';
import pfSenseHomePage from '../images/pfsense_home_page.png';
import pfSenseBgpRule from '../images/pfsense_bgp_rule.png';
import pfSenseFrrPackage from '../images/pfsense_frr_package.png';
import pfSenseGeneralConf from '../images/pfsense_general_conf.png';
import pfSenseNeighborConf from '../images/pfsense_neighbor_conf.png';
import bgpBasicOptions from '../images/bgp_basic_options.png';
import ebgpConf from '../images/ebgp_conf.png';
import routeServerNeighbor from '../images/route_server_neighbor.png';
import neighborsOverview from '../images/neighbors_overview.png';
import pfSenseBgpStatus from '../images/pfsense_bgp_status.png';

Dieser Leitfaden hilft Ihnen, Ihre __Open-Source-Firewall pfSense__ innerhalb weniger Minuten in der Cloud von Confiance zu implementieren.

## Voraussetzungen

Die Voraussetzungen für diesen Leitfaden sind:

1. Abonnieren Sie das Cloud Temple Angebot: Sie müssen über Ihre Organisation, Ihren Mandanten und Ihre Zugänge verfügen,
2. Berechtigungen für das Compute-Modul haben.

Dieses Dokument beschreibt die Schritte zur Implementierung einer virtuellen Firewall pfSense.

## Einrichten einer Open-Source-Firewall pfSense

[pfSense](https://www.pfsense.org) ist ein Open-Source-Projekt, das auf FreeBSD basiert und eine virtuelle Firewall einrichten kann.

Eine pfSense-Firewall wird über eine Weboberfläche verwaltet. Sie benötigen daher eine zweite Maschine mit einer grafischen Benutzeroberfläche und einer IP-Adresse im selben LAN-Netzwerk wie die Firewall, um sie konfigurieren zu können.

Wir benötigen ein Set von zwei VMs:

- Die erste wird die Maschine sein, auf der wir die Firewall einrichten werden
- Die zweite wird die Maschine sein, von der aus wir die Firewall verwalten.

### Internetzugang anfordern

Der erste Schritt besteht darin, [die Informationen zum Internetzugang hier abzurufen](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).
 Sie müssen die folgenden Informationen haben:

- öffentliches Präfix
- Interconnection-Prefix
- any-cast Gateway
- IP-Bereich
- lokales AS
- AS von Cloud Temple
- keepalive timers und hold-time timer
- Adressen der Routen-Server

### Installation und Netzwerkkonfiguration der Schnittstellen

Sie können dann Ihre pfSense-VM implementieren:

1. __Installation der Firewall__ aus der pfSense-Vorlage in Shiva:
    - [(Über die Konsole bereitstellen)](/docs/iaas_vmware/tutorials/deploy_vm_template)
    - [(Über Terraform bereitstellen)](/docs/iaas_vmware/tutorials/deploy_vm_terraform).
2. __Konfiguration der LAN- und WAN-Schnittstellen__ der Firewall: Die WAN-Schnittstelle muss in Ihrem VLAN-Internet sein, ihre IP wird aus dem vom CDS mitgeteilten IP-Bereich sowie der Standard-GW genommen.
3. __Installation der zweiten Verwaltungsmaschine__.
4. __Konfiguration der Schnittstelle__ der Verwaltungs-VM: Diese Maschine muss im selben Netzwerk sein wie das, in dem die LAN-Schnittstelle der Firewall konfiguriert wurde.

### Zugriff auf die Firewall

Sobald beide VMs ordnungsgemäß installiert sind, besteht der zweite Schritt darin, auf die Firewall zuzugreifen, um mit der Konfiguration zu beginnen.

- Zugriff auf die Weboberfläche der Firewall von der Verwaltungs-VM aus:

<img src={pfSenseWebui} />
- Standard-Login:
    - Benutzername: *admin*
    - Passwort: *pfsense* (denken Sie daran, das Standardpasswort zu ändern)

<img src={pfSenseHomePage} />
### Konfiguration der Firewall
Dieser Schritt besteht darin, die BGP-Neighbors der FW zu konfigurieren.

- Denken Sie in erster Linie daran, den BGP-Verkehr auf TCP 179 in __'Firewall > Rules'__ zuzulassen:

<img src={pfSenseBgpRule} />

- Gehen Sie zu __'services > FRR BGP'__, um mit der Konfiguration Ihrer BGP-Sitzung zu beginnen:

<img src={pfSenseFrrPackage} />

- Aktivieren Sie die ersten beiden Kästchen und geben Sie die Nummer Ihres lokalen AS und die Ihnen vom CDS mitgeteilten Zeiten an.

<img src={pfSenseGeneralConf} />

### Konfiguration der BGP-Neighbors

Klicken Sie in Neighbors auf +Add, um Ihre BPG-Nachbarn hinzuzufügen.

- Für jeden Neighbor: Geben Sie seine IP-Adresse in __'General Options > Name/address'__ ein

<img src={pfSenseNeighborConf} />

- Geben Sie das remote AS (entsprechend der AS-Nummer von Cloud Temple) in den Basisoptionen wie folgt ein:

<img src={bgpBasicOptions} />

- Und schließlich machen Sie Folgendes in den erweiterten Optionen:

<img src={ebgpConf} />

- Aktivieren Sie das Kästchen, das den Typ Ihres Neighbors definiert. In unserem Fall ist es ``ein Routen`` Server:

<img src={routeServerNeighbor} />

- Am Ende vergessen Sie nicht, Ihre Änderungen zu speichern, indem Sie auf __'save'__ klicken:

<img src={neighborsOverview} />

### Überprüfung des Status der BGP-Sitzung mit den Neighbors
Im Status können Sie den Status der konfigurierten BGP-Sitzung sehen

<img src={pfSenseBgpStatus} />

Stellen Sie sicher, dass der __BGP State__ auf __established__ steht.

### Ankündigung des öffentlichen Präfixes

Um Ihr öffentliches Präfix anzukündigen, können Sie Routen im /32-Format erstellen und die statische Verteilung vornehmen:

- in __*System > Routing > Static Routes*__ : Erstellen Sie Ihre statischen Routen im /32-Format mit der Gateway-Einstellung auf Null4- 127.0.0.1
- in __*Services > FRR package > BGP > Network Distribution*__ : Aktivieren Sie die ``redistribution`` lokal durch Auswahl von IPV4 in ``Reditribute`` FRR static routes.