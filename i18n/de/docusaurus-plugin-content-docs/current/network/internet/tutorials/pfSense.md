---
title: Bereitstellen einer Open-Source-PfSense-Firewall
tags:
  - internet
  - anleitungen
---
import pfSenseWebui from '@site/docs/network/internet/images/pfsense_webui.png';
import pfSenseHomePage from '@site/docs/network/internet/images/pfsense_home_page.png';
import pfSenseBgpRule from '@site/docs/network/internet/images/pfsense_bgp_rule.png';
import pfSenseFrrPackage from '@site/docs/network/internet/images/pfsense_frr_package.png';
import pfSenseGeneralConf from '@site/docs/network/internet/images/pfsense_general_conf.png';
import pfSenseNeighborConf from '@site/docs/network/internet/images/pfsense_neighbor_conf.png';
import bgpBasicOptions from '@site/docs/network/internet/images/bgp_basic_options.png';
import ebgpConf from '@site/docs/network/internet/images/ebgp_conf.png';
import routeServerNeighbor from '@site/docs/network/internet/images/route_server_neighbor.png';
import neighborsOverview from '@site/docs/network/internet/images/neighbors_overview.png';
import pfSenseBgpStatus from '@site/docs/network/internet/images/pfsense_bgp_status.png';

Dieser Leitfaden hilft Ihnen, Ihre __Open-Source-PfSense-Firewall__ im Cloud de Confiance in nur wenigen Minuten bereitzustellen.

## Voraussetzungen

Die Voraussetzungen für diese Anleitung sind wie folgt:

1. Ein Abonnement für das Cloud Temple-Produkt abgeschlossen haben: Sie müssen über Ihre Organisation, Ihren Tenant und Ihre Zugriffsrechte verfügen,
2. Berechtigungen für das Compute-Modul besitzen.

Dieses Dokument beschreibt die Schritte zur Bereitstellung eines virtuellen pfSense-Firewalls.

## Bereitstellung einer Open-Source-pfSense-Firewall

[pfSense](https://www.pfsense.org) ist ein Open-Source-Projekt auf Basis von FreeBSD, das die Einrichtung eines virtuellen Firewalls ermöglicht.

Ein pfSense-Firewall wird über eine Weboberfläche verwaltet, daher benötigt man einen zweiten Rechner mit grafischer Oberfläche
und einer IP-Adresse im selben LAN-Netzwerk wie der Firewall, um ihn konfigurieren zu können.

Wir benötigen zwei VMs:

- die erste ist der Rechner, auf dem wir den Firewall bereitstellen
- die zweite ist der Rechner, von dem aus wir den Firewall verwalten.

### Internet-Zugangsbereitstellung anfordern

Der erste Schritt besteht darin, [die Informationen zum Internetzugang hier](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet) zu beschaffen.
 Sie benötigen die folgenden Informationen:

- öffentliches Prefix
- Interconnection-Prefix
- Anycast-Gateway
- IP-Bereich
- lokales AS
- AS von Cloud Temple
- Keepalive-Timer und Hold-Time-Timer
- Adressen der Route-Server

### Installation und Netzwerkkonfiguration der Schnittstellen

Sie können anschließend Ihre pfSense-VM bereitstellen:

1. __Installation der Firewall__ aus der pfSense-Vorlage in der Konsole:
    - [(Über die Konsole bereitstellen)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Über Terraform bereitstellen)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. __Konfiguration der LAN- und WAN-Schnittstellen__ der Firewall: Die WAN-Schnittstelle muss sich in Ihrem Internet-vLAN befinden, ihre IP-Adresse wird aus dem IP-Bereich entnommen, der Ihnen vom CDS mitgeteilt wurde, ebenso wie das Standard-Gateway.
3. __Installation der zweiten Management-Maschine__.
4. __Konfiguration der Schnittstelle__ der Management-VM: Diese Maschine muss sich im selben Netzwerk befinden wie das Netzwerk, in dem die LAN-Schnittstelle der Firewall konfiguriert wurde.

### Zugriff auf die Firewall

Sobald beide VMs erfolgreich installiert sind, besteht der zweite Schritt darin, auf die Firewall zuzugreifen, um mit der Konfiguration zu beginnen.

- Zugriff auf die Web-Oberfläche der Firewall von der Management-VM aus:

<img src={pfSenseWebui} />
- Standard-Login:
    - Benutzername: *admin*
    - Passwort: *pfsense* (vergessen Sie nicht, das Standardpasswort zu ändern)

<img src={pfSenseHomePage} />

### Konfiguration der Firewall
In diesem Schritt werden die BGP-Nachbarn der FW konfiguriert.

- Stellen Sie zunächst sicher, dass der BGP-Traffic über TCP-Port 179 in __'Firewall > Regeln'__ zugelassen wird:

<img src={pfSenseBgpRule} />

- Navigieren Sie zu __'Dienste > FRR BGP'__, um die Konfiguration Ihrer BGP-Sitzung zu starten:

<img src={pfSenseFrrPackage} />

- Aktivieren Sie die ersten beiden Kontrollkästchen und geben Sie die Nummer Ihrer lokalen AS sowie die Telefonnummern ein, die Ihnen vom CDS mitgeteilt wurden.

<img src={pfSenseGeneralConf} />

### Konfiguration der BGP-Nachbarn

In Neighbors klicken Sie auf +Add, um mit der Erstellung Ihrer BGP-Nachbarn zu beginnen.

- Geben Sie für jeden Nachbarn seine IP-Adresse in __'General Options > Name/address'__ ein.

<img src={pfSenseNeighborConf} />

- Geben Sie das Remote-AS (entspricht der AS-Nummer von Cloud Temple) in den Basic Options wie folgt ein:

<img src={bgpBasicOptions} />

- Und schließlich in der Advanced Option: Gehen Sie wie folgt vor:

<img src={ebgpConf} />

- Aktivieren Sie das Kontrollkästchen, das den Typ Ihres Nachbarn definiert. In unserem Fall ist es ein ``Route``-Server:

<img src={routeServerNeighbor} />

- Vergessen Sie am Ende nicht, Ihre Änderungen zu speichern, indem Sie auf __'save'__ klicken:

<img src={neighborsOverview} />

### Überprüfung des BGP-Sitzungsstatus mit den Nachbarn

Unter Status können Sie den Status der BGP-Sitzung einsehen, die Sie gerade konfiguriert haben.

<img src={pfSenseBgpStatus} />

Stellen Sie sicher, dass der __BGP State__ auf __established__ steht.

### Öffentliches Präfix ankündigen

Um ein öffentliches Präfix anzukündigen, können Sie /32-Routen erstellen und die statische Redistribution durchführen:

- unter __*System > Routing > Static Routes*__: Erstellen Sie Ihre statischen /32-Routen und legen Sie das Gateway auf Null4- 127.0.0.1 fest
- unter __*Services > FRR package > BGP > Network Distribution*__: Aktivieren Sie die lokale ``redistribution``, indem Sie IPV4 in ``Reditribute`` FRR static routes auswählen.