---
titel: Einschalten eines freien Firewalls pfSense
tags:
  - Internet
  - Tutorials
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

Dieses Tutorial führt Sie Schritt für Schritt durch den Einsatz Ihres __freien Firewalls pfSense__ in der Vertrauenswürdigen Cloud, nur wenige Minuten entfernt.

## Vorraufsätze

Für dieses Dokument sind folgende Voraussetzungen erforderlich:

1. Sie haben sich für die Cloud-Anwendung Cloud Temple angemeldet und verfügen über Ihre Organisation, Ihren Tenant sowie die entsprechenden Zugriffsrechte,
2. Sie besitzen die Berechtigungen zum Modul compute.

Dieses Dokument beschreibt die Schritte zur Bereitstellung eines virtuellen Firewalls pfSense.

## Deploying an open-source pfSense Firewall

[pfSense](https://www.pfsense.org) is an open-source project based on FreeBSD that enables the setup of a virtual firewall.

A pfSense firewall is managed via a web interface, so you'll need a second machine with a graphical interface and an IP address within the same LAN network as the firewall to configure it.

You will require an ensemble of two VMs:

- The first VM will be where we deploy the firewall.
- The second VM will be used for managing the firewall.

### Anfrage der Internetzugangsverbindung

Die erste Schritte bestehen darin, die Informationen zum Internetzugriff hier zu erhalten: [Internetzugangsinformationen abrufen](https://docs.cloud-temple.com/network/internet/quickstart#management-of-your-internet-connections). Sie benötigen die folgenden Informationen:

- Public Prefix
- Interconnection Prefix
- Anycast Gateway
- IP Range
- Local AS Number
- Cloud Temple AS Number
- Keepalive Timers und Hold-Time Timer
- Adressen der Routing Server

### Erstellung und Konfiguration des Netzwerkinterfaces

Nachdem Sie pfSense bereitgestellt haben, können Sie die folgenden Schritte durchführen:

1. **Installation des Firewalls** aus dem pfSense-Template in Shiva:
    - [(Durchführung über die Konsole)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Durchführung mit Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. **Konfiguration der Netzwerkinterfaces LAN und WAN** des Firewalls: Die WAN-Interface muss in Ihrem vLAN Internet liegen, dessen IP aus der von Ihren CDS übermittelten IP-Adresse und dem default Gateway entnommen wird.
3. **Installation der zweiten Management-Maschine**.
4. **Konfiguration der Netzwerkinterface** der Management-VM: Diese Maschine muss in demselben Netzwerk liegen, wie die LAN-Interface des Firewalls konfiguriert wurde.

### Zugriff auf Firewall

Sobald die beiden VMs installiert sind, ist die nächste Schritt die Verbindung zum Firewall, um seine Konfiguration zu beginnen.

- Zugang zur Web-Oberfläche des Firewalls über die Management-VM:

<img src={pfSenseWebui} />
- Anmeldung mit dem Standardnamen und -passwort:
    - Benutzername: *admin*
    - Passwort: *pfsense* (Denken Sie daran, das Standardpasswort durch das neue zu ändern)

<img src={pfSenseHomePage} />

### Firewall-Konfiguration des NAT-PMP-Verbindungen
In dieser Phase wird die BGP-Nachbarn-Konfiguration des FW eingestellt.

- Zunächst stellen Sie sicher, dass der BGP-Fluss in __'Firewall > Regeln'__ genehmigt ist:

<img src={pfSenseBgpRule} />

- Wechseln Sie dann zu __'Dienste > FRR BGP__ für die Konfiguration Ihrer BGP-Session:

<img src={pfSenseFrrPackage} />

- Markieren Sie die beiden ersten Optionen und geben Sie Ihren lokalen AS-Nummer sowie die Zeitstempel an, die vom CDS übermittelt wurden.

<img src={pfSenseGeneralConf} />

### Konfiguration der BGP-Nachbarn

In der Konfiguration der BGP-Nachbarn öffnen Sie die Registerkarte "Zusatz" und klicken Sie auf "+Hinzufügen", um Ihre BGP-Nachbarn zu erstellen.

- Für jeden Nachbar: Geben Sie seine IP-Adresse in den Bereich "Allgemeine Optionen > Name/Adresse" ein.

<img src={pfSenseNeighborConf} />

- Geben Sie die entfernte AS (entspricht dem AS-Nummer des Cloud-Tempels) in den grundlegenden Einstellungen wie folgt:

<img src={bgpBasicOptions} />

- In den fortgeschrittenen Optionen geben Sie:

<img src={ebgpConf} />

- Markieren Sie die entsprechende Kategorie, um den Typ Ihres Nachbarn zu definieren. In unserem Fall ist es ein "Route-Server":

<img src={routeServerNeighbor} />

- Beenden Sie Ihre Einstellungen mit einem Klick auf "Speichern" (save):

<img src={neighborsOverview} />

### Überprüfung des BGP-Sessionenstatus und der Nachbarn

Im Bereich "Status" können Sie den Status der BGP-Session, die Sie gerade konfiguriert haben, überprüfen.

<img src={pfSenseBgpStatus} />

Stellen Sie sicher, dass das __BGP-Status__ auf __gesetzt__ steht.

### Annoncer Ihr öffentlicher Präfix

Um Ihren öffentlichen Präfix anzuzeigen, können Sie Routen in /32 erstellen und diese zur statischen Redundanz machen:

- Im Bereich __*System > Routing > Static Routes*__: Erstellen Sie Ihre statischen Routen in /32 und setzen Sie die Gateway auf Null4- 127.0.0.1
- Im Bereich __*Services > FRR package > BGP > Network Distribution*__: Aktivieren Sie die ``redistribution`` lokal, wählen Sie IPV4 als ``Reditribute`` im FRR statischen Routen.