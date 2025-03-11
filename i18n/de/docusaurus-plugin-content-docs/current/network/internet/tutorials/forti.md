---
title: Déployer un firewall virtuel Fortigate
tags:
  - internet
  - tutorials
---

import fortiSupport from '../images/forti_support.png';
import fortiSupportVm01 from '../images/forti_support_vm_01.png';
import fortiSupportVm02 from '../images/forti_support_vm_02.png';
import asn from '../images/asn.png';
import ipsPub from '../images/ips_pub.png';
import ipsInterco from '../images/ips_interco.png';
import fortiVmType01 from '../images/forti_vm_type_01.png';
import shivaCatalogues from '../images/shiva_catalogues.png';
import imgImport01 from '../images/img_import_01.png';
import imgImport02 from '../images/img_import_02.png';
import imgImport03 from '../images/img_import_03.png';
import imgImport04 from '../images/img_import_04.png';
import imgImport05 from '../images/img_import_05.png';
import imgImport06 from '../images/img_import_06.png';
import imgImport07 from '../images/img_import_07.png';
import imgImport08 from '../images/img_import_08.png';
import imgImport09 from '../images/img_import_09.png';
import imgImport10 from '../images/img_import_10.png';
import imgImport11 from '../images/img_import_11.png';
import imgImport12 from '../images/img_import_12.png';
import ipPlan01 from '../images/ip_plan_01.png';
import ipPlan02 from '../images/ip_plan_02.png';
import ipPlan03 from '../images/ip_plan_03.png';
import ipPlan04 from '../images/ip_plan_04.png';
import ipPlan05 from '../images/ip_plan_05.png';
import imgDeploy01 from '../images/img_deploy_01.png';
import imgDeploy02 from '../images/img_deploy_02.png';
import imgDeploy03 from '../images/img_deploy_03.png';
import imgDeploy04 from '../images/img_deploy_04.png';
import imgDeploy05 from '../images/img_deploy_05.png';
import imgDeploy06 from '../images/img_deploy_06.png';
import imgDeploy07 from '../images/img_deploy_07.png';
import imgDeploy08 from '../images/img_deploy_08.png';
import imgDeploy09 from '../images/img_deploy_09.png';
import imgDeploy10 from '../images/img_deploy_10.png';
import imgDeploy11 from '../images/img_deploy_11.png';
import imgBackup01 from '../images/img_backup_01.png';
import imgBackup02 from '../images/img_backup_02.png';
import imgBackup03 from '../images/img_backup_03.png';
import imgBackup04 from '../images/img_backup_04.png';
import vmStart01 from '../images/vm_start_01.png';
import vmStart02 from '../images/vm_start_02.png';
import vmConsole01 from '../images/vm_console_01.png';
import vmBoot01 from '../images/vm_boot_01.png';
import vmBoot02 from '../images/vm_boot_02.png';
import vmBoot03 from '../images/vm_boot_03.png';
import vmBoot04 from '../images/vm_boot_04.png';

## Objekt dieser Anleitung

Dieser Leitfaden beschreibt die wesentlichen Schritte zur effizienten Bereitstellung einer einzelnen Firewall oder eines Firewall-Clusters in einer SecNumCloud-Umgebung.

**Hinweis:** *Die in diesem Dokument vorgestellten Konfigurationen dienen als Referenzleitfaden und müssen sorgfältig an die technischen Spezifikationen, Sicherheitsanforderungen und betrieblichen Ziele jeder Umgebung angepasst werden.*

## Voraussetzungen für diesen Leitfaden

### Erforderliche Rechte

Die Bereitstellung der virtuellen Appliances erfordert Zugriff auf den Tenant des Kunden in der Cloud Temple-Konsole mit den folgenden spezifischen Berechtigungen:

Wenn Sie das **OpenIaaS**-Angebot nutzen:

| Berechtigungsname                              | Beschreibung der Berechtigung                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_opensource_console_access         | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                |
| compute_iaas_opensource_infrastructure_read    | OpenIaaS-Angebot - Anzeige erweiterter Daten von VMware-Ressourcen (Affinity/Anti-Affinity-Regeln, DRS-Konfiguration usw.)     |
| compute_iaas_opensource_infrastructure_write   | OpenIaaS-Angebot - Verwaltung erweiterter VMware-Ressourcen                                                                    |
| compute_iaas_opensource_read                   | OpenIaaS-Angebot - Anzeige von Ressourcen vom Typ Virtuelle Maschinen                                                          |
| compute_iaas_opensource_management             | OpenIaaS-Angebot - Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                       |
| compute_iaas_opensource_virtual_machine_power  | OpenIaaS-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                    |
| activity_read                                  | Anzeige von Protokollen und Aktivitäten                                                                                        |

Wenn Sie das **Vmware**-Angebot nutzen:

| Berechtigungsname                              | Beschreibung der Berechtigung                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_vmware_console_access             | Vmware-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                  |
| compute_iaas_vmware_infrastructure_read        | Vmware-Angebot - Anzeige erweiterter Daten von VMware-Ressourcen (Affinity/Anti-Affinity-Regeln, DRS-Konfiguration usw.)        |
| compute_iaas_vmware_infrastructure_write       | Vmware-Angebot - Verwaltung erweiterter VMware-Ressourcen                                                                      |
| compute_iaas_vmware_read                       | Vmware-Angebot - Anzeige von Ressourcen vom Typ Virtuelle Maschinen                                                            |
| compute_iaas_vmware_management                 | Vmware-Angebot - Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                         |
| compute_iaas_vmware_virtual_machine_power      | Vmware-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                      |
| activity_read                                  | Anzeige von Protokollen und Aktivitäten                                                                                        |

Wenn Sie ***Terraform*** verwenden möchten, sind zusätzlich die folgenden Berechtigungen erforderlich:

| Berechtigungsname                              | Beschreibung der Berechtigung                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| tag_read                                       | Anzeige von Tags, außer RTMS-Tags                                                                                              |
| tag_write                                      | Verwaltung von Tags, außer RTMS-Tags                                                                                           |
| iam_read                                       | Anzeige von Benutzerrechten                                                                                                    |
| iam_write                                      | Verwaltung von Benutzerrechten                                                                                                 |

Das OVA-Image der Appliance, die bereitgestellt werden soll, muss vor Beginn des Prozesses verfügbar sein. Sie finden die Fortinet-Images auf [der Support-Website](https://support.fortinet.com/welcome/). Ein Fortinet-Support-Account ist erforderlich.

Gehen Sie zum **Download-Bereich** und dann zu den **Firmware Images**:

<img src={fortiSupport} />

**Am 1. Juli 2024 wird Version 7.2 empfohlen.**

Das abzurufende Image ist die FGT_VM64 im OVF/ZIP-Format:

<img src={fortiSupportVm01} />

**Hinweis:** *Wenn Sie eine Fortinet-Firewall-Leistungseinheit abonniert haben, kann der Cloud Temple-Support das Image im OVA-Format sowie die zugehörige Lizenz bereitstellen.*

| Infrastruktureinheiten - VIRTUELLE FIREWALLS          | Einheit             | sku                     |
| :--------------------------------------------------- | :----------------- | :---------------------- |
| FIREWALL UTM - Fortigate Virtual VM02V - ohne vdom   | 1 virtueller Cluster | csp:fr1:licence:fw:ftg2 |
| FIREWALL UTM - Fortigate Virtual VM04V - ohne vdom   | 1 virtueller Cluster | csp:fr1:licence:fw:ftg4 |
| FIREWALL UTM - Fortigate Virtual VM08V - ohne vdom   | 1 virtueller Cluster | csp:fr1:licence:fw:ftg8 |
| FIREWALL UTM - Fortigate - 5 zusätzliche vdom        | 5 vdom              | csp:fr1:licence:fw:vdom |

### Informationen zur Netzwerkkonnektivität

Sie müssen über die Informationen verfügen, die erforderlich sind, um die BGP-Sitzung mit dem Backbone einzurichten. Diese Daten sind in der Cloud Temple-Konsole unter Netzwerk → Internet → ASNs verfügbar:

<img src={asn} />

Sie müssen auch über einen Bereich öffentlicher IP-Adressen verfügen, dessen Umfang Ihren Anforderungen entspricht. Der reservierte Adressbereich wird in der Cloud Temple-Konsole im Abschnitt Netzwerk → Internet → Öffentliche IPs angegeben. Hier ein Beispiel:

<img src={ipsPub} />

Enfin, vous devez disposez du bloc qui vous est allouée sur le réseau d'interconnexion BGP afin de pouvoir bénéficier d'une route vers Internet. Le réseau d'interconnexion Cloud Temple est le 100.64.0.0/16 et chaque accès bénéficie d'un sous réseau d'interconnexion de type /28. Ce réseau sert à l'établissement de la session BGP avec le coeur de routage Cloud Temple. Vous trouverez cette plage dans la console Cloud Temple dans la section Network → Internet → IPs d'interconnexions. Voici un exemple :

<img src={ipsInterco} />

**Remarque :** *Vous devez avoir souscrit aux unités d'oeuvres associées de connectivité Internet. Vous voyez alors apparaître les informations de connectivité dans la console Cloud Temple.*

## Architekturtyp des Netzwerks

Die Standardarchitektur einer Cloud Temple-Bereitstellung ist ein Aktivitätskontinuitätscluster. Sie setzt die Implementierung und das Abonnement von mindestens 2 Verfügbarkeitszonen in einer Region voraus.

Die Standardbereitstellung der Firewalls erfolgt in einem Cluster mit einem Gerät in jeder Verfügbarkeitszone der SNC. Ein virtuelles Netzwerk stellt die Synchronisierung des Clusters sicher. Die WAN-Ports greifen über das Interconnect-Netzwerk auf das Internet zu.

Eine anfängliche Konfiguration ist erforderlich, um die BGP-Sitzungen einzurichten und somit die Internetkonnektivität zu ermöglichen. Die privaten VLANs werden über einen Trunk (Aggregation von Netzwerken der Ebene 2 über die 802.1q-Technologie) zu den LAN-Schnittstellen der virtuellen Firewall geleitet.

**Remarque :** *Obwohl es sich hierbei nicht um eine empfohlene Architektur handelt, gilt dieser Leitfaden auch für Einzel-AZ-Bereitstellungen.*

## Importieren des Fortinet-Appliances in die Cloud Temple-Konsole

### Entpacken der Appliance-Datei

Nach dem Herunterladen von der Fortinet-Support-Website entpacken Sie die ZIP-Datei, um folgende Dateien zu erhalten:

- Die virtuellen VMDK-Festplatten der Appliance,

- Die OVF-Dateien, die die Appliance für verschiedene VMware-Hardwareformate beschreiben.
  
<img src={fortiSupportVm02} />

Hier sind die Arten von Templates, die häufig in der .ZIP-Datei enthalten sind:

| Template                     | Kompatibel mit                            |
| ---------------------------- | ----------------------------------------- |
| FortiGate-VM64.ovf           | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.hw13.ovf      | ESXI 6.5(Hardware Version 13) or later    |
| FortiGate-VM64.hw15.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64.hw17.ovf      | ESXI 7.0(Hardware Version 17) or later    |
| FortiGate-VM64.vapp.ovf      | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.nsxt.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64-ZNTA.vapp.ovf | ESXI 7.0(Hardware Version 17) or later    |

### Importieren der Appliance in Ihr Image-Katalog über die Cloud Temple-Konsole

Melden Sie sich bei Ihrem Tenant in der Cloud Temple-Konsole an und gehen Sie dann zu "**Catalogue**" und "**Publier des fichiers**" :

<img src={shivaCatalogues} />

Wählen Sie einen Namen für Ihr Image. Wir empfehlen Ihnen, folgendes Format zu verwenden: **FGT-VM-VERSION-AZ**, beispielsweise hier FGT-VM-*7.2.8*-*TH3S* :

<img src={imgImport01} />

Geben Sie anschließend die Image-Bibliothek der Verfügbarkeitszone an **(1)**:

<img src={imgImport02} />

Wählen Sie anschließend die Dateien zum Veröffentlichen in der Bibliothek **(2)**:

<img src={imgImport03} />

<img src={imgImport04} />

Klicken Sie dann auf "**publier des fichiers**" :

<img src={imgImport05} />

Warten Sie, bis das Hochladen Ihrer Dateien in die Bibliothek abgeschlossen ist:

<img src={imgImport06} />

<img src={imgImport07} />

*Der Vorgang ist für jede Verfügbarkeitszone, in der Sie eine Appliance bereitstellen möchten, zu wiederholen.*

Beispielsweise für die zweite Zone PAR7S :

<img src={imgImport08} />

<img src={imgImport09} />

<img src={imgImport10} />

<img src={imgImport11} />

<img src={imgImport12} />

**Remarque :**

- ***(1)*** *Jede Verfügbarkeitszone verfügt über eine Image-Bibliothek für die Hypervisoren dieser Zone.*
  
- ***(2)*** *Für die .ovf-Datei nehmen Sie eine Version, deren virtuelle Hardware mit der Version der ESXi-Hypervisoren kompatibel ist (zum 1. Juli 2024 ist die maximal unterstützte Version die **v19**, die den ESX 7.0.x entspricht).*

## Bereitstellung der Fortinet-Appliance in einer Verfügbarkeitszone

### Planung der Bereitstellung Ihrer BGP-Interkonnektivität

Sie müssen eine Interconnect-IP-Adresse für Ihre zukünftige Firewall-Appliance auswählen. Die erste Adresse ist immer die BGP-Gateway von Cloud Temple. Die anderen Adressen sind daher grundsätzlich verfügbar (es sei denn, Sie haben zuvor andere Geräte bereitgestellt):

<img src={ipPlan01} />

Die Regel besagt, dass die freien IPs der Reihe nach verwendet werden:

<img src={ipPlan02} />

### Planung der Nutzung Ihrer öffentlichen IP-Adressen

Alle zugewiesenen öffentlichen IPs sind für Ihren Tenant nutzbar. Die Größe des Subnetzes hängt von den abonnierten Maßnahmen ab.

<img src={ipPlan03} />

### BGP4-Konfigurationseinstellungen

Notieren Sie die folgenden 3 wichtigen Informationen für die weitere BGP4-Konfiguration:

<img src={ipPlan04} />

- **AS Partner** : die Remote-AS, die für das Einrichten der BGP-Sitzung aus der Sicht des Firewalls verwendet wird, ist die AS von Cloud Temple.

- **Route Servers** : die beiden BGP-Peers, zu denen eine BGP-Sitzung eingerichtet werden soll.
  
- **Name** : die eigene AS-Nummer des Tenants; entfernen Sie das Präfix *AS* und behalten Sie nur die Nummer.

<img src={ipPlan05} />

### Bereitstellung der Appliance in der Infrastruktur

Wählen Sie aus der Bibliothek der Verfügbarkeitszone, in der Sie Ihre Appliance installieren möchten, das Template aus und dann "**Déployer**" :

<img src={imgDeploy01} />

Sie müssen dann die virtuelle Maschine benennen; wir empfehlen Ihnen folgendes Namensschema: FGT-VM-**0X**-**ROLE**-**AZ**

- **0X** :entspricht dem Fortigate-Lizenztyp, den Sie abonniert haben:

<img src={fortiVmType01} />

- **ROLE** : Zum Beispiel INTERNET für eine Interconnect-Firewall.

- **AZ** : Die Verfügbarkeitszone

<img src={imgDeploy02} />

Wählen Sie dann die Verfügbarkeitszone aus:

<img src={imgDeploy03} />

Dann der Ziel-Cluster des Hypervisors:

<img src={imgDeploy04} />

Wählen Sie das Speicherziel aus:

<img src={imgDeploy05} />

Geben Sie abschließend die Konfigurationsinformationen Ihrer Appliance an, insbesondere die zuvor erhaltenen Adressinformationen:

<img src={imgDeploy06} />

- **Token** : nichts angeben

- **Configuration URL** : nichts angeben

- **Hostname** : identisch mit dem Namen der VM-Hülle

- **DNS** : 208.91.112.53 und 208.91.112.2 (standardmäßig, aber Sie können nach Belieben andere DNS verwenden)

- **Interface IP** : erste freie Interconnect-IP

- **Netmask** : Netmask des Interconnect-Bereichs

- **Interface 2** : nicht konfiguriert

Klicken Sie dann auf **Suivant**. Die Konfigurationsinformationen der Schnittstellen müssen ausgefüllt werden. Die erste Schnittstelle soll für den Internetzugang verwendet werden; die anderen werden vorübergehend auf das VLAN für die Hochverfügbarkeit gesetzt:

<img src={imgDeploy07} />

Klicken Sie abschließend auf "**Deployer**".

<img src={imgDeploy08} />

<img src={imgDeploy09} />

Nachdem die Bereitstellung abgeschlossen ist, zeigt Ihnen die Cloud Temple-Konsole dies an:

<img src={imgDeploy10} />

Ihre Appliance ist nun in den virtuellen Maschinen sichtbar:

<img src={imgDeploy11} />

### Zuordnung einer Backup-Richtlinie

In der SecNumCloud-Umgebung muss eine virtuelle Maschine eine Backup-Richtlinie haben, um zu starten. Sie können sie in den Richtlinien konfigurieren und den Inventarisierungsauftrag starten:

<img src={imgBackup01} />

<img src={imgBackup02} />

Weisen Sie die Richtlinie dem gewünschten RPO entsprechend zu, standardmäßig können Sie eine tägliche Richtlinie wählen:

<img src={imgBackup03} />

Sie können Ihre Wahl bestätigen:

<img src={imgBackup04} />

Wenn zusätzliche Richtlinien erforderlich sind (wie in diesem Beispiel 'daily' und 'monthly'), wiederholen Sie den Vorgang für jede zusätzliche Richtlinie.

### Starten der virtuellen Maschine

Das Starten der virtuellen Maschine erfolgt über die Cloud Temple-Konsole:

<img src={vmStart01} />

Es ist möglich, die Konsole zu beobachten, und die Fortinet-Appliance startet nach dem ersten Booten erneut:

<img src={vmStart02} />

Nach diesem zweiten Boot sollte die in der Bereitstellung der virtuellen Maschine in der **OvfProperties**-Sektion angegebene IP-Adresse auf den Ping antworten, sofern ein Zugang zum Interconnect-Netzwerk verfügbar ist.

## Initiale Konfiguration

### Verbindung zur Konsole

Wählen Sie in der Cloud Temple-Konsole Ihre Fortinet-Appliance aus und fragen Sie die Konsole der Appliance an.

<img src={vmConsole01} />

Abhängig von dem Zeitpunkt, zu dem Sie auf die Konsole zugreifen, konnten Sie das anfängliche Booten und Neustarten der Appliance sehen:

<img src={vmBoot01} />

<img src={vmBoot02} />

Sie können sich dann mit der Konsole der Appliance verbinden, der Benutzername lautet "**admin**". Die Appliance fordert Sie auf, das Passwort zu ändern (es gibt kein Standardpasswort, einfach ENTER drücken).

Sie müssen dann ein neues Passwort eingeben.

**Achtung : Die Appliance ist in QWERTY-Tastaturbelegung.**

**Im Falle eines Passwortfehlers müssen Sie Ihre Appliance neu installieren.**

<img src={vmBoot03} />

<img src={vmBoot04} />

### Konfiguration der BGP-Sitzung

In diesem Schritt konfigurieren wir Ihre Fortinet-Appliance im Konsolenmodus, um die BGP4-Verbindung einzurichten

#### Konfiguration des Bereichs öffentlicher IPs

Der erste Schritt besteht darin, die Bereiche der öffentlichen IP-Adressen festzulegen. Zunächst konfigurieren wir nur den ersten Block. Wir verwenden die zuvor notierten Informationen.

    config router prefix-list
        edit "pfx_net_public_customer"
        config rule
        edit 1
            set prefix 80.75.159.90/31
                unset ge
                set le 32
            next
        edit 100
            set action deny
            set prefix 0.0.0.0 0.0.0.0
                unset ge

```
                unset le
            next
        end
    next
    edit "pfx_deny_all"
        config rule
            edit 1
                set action deny
                set prefix 0.0.0.0 0.0.0.0
                unset ge
                unset le
        next
        end
    next
    end

Sie können dann überprüfen, ob die Konfiguration erfolgreich durchgeführt wurde, mit dem Befehl:

    show router prefix-list

#### Konfiguration der Route Map

Eine "Route Map Policy" dient dazu, komplexere Routing-Richtlinien zu definieren, die das Verhalten des Netzwerkverkehrs basierend auf bestimmten Kriterien beeinflussen oder modifizieren können. Route Maps sind besonders nützlich für erweiterte Aufgaben der Verkehrsverwaltung, wie beispielsweise das Filtern von Routen, die Umleitung von Verkehr oder die Änderung von Routenattributen in dynamischen Routing-Protokollen wie BGP (Border Gateway Protocol). In unserem Kontext zielt sie darauf ab, Ihr Netzwerk vor ungültigen Ankündigungen zu schützen.

Der zweite Schritt besteht darin, die Route Map Policy zu konfigurieren:

    config router route-map
        edit "rm_deny_all"
            config rule
            edit 1
                set match-ip-address "pfx_deny_all"
            next
        end
        next
        edit "rm_net_public_customer"
            config rule
            edit 1
                set match-ip-address "pfx_net_public_customer"
            next
        end
        next
    end

Sie können dann überprüfen, ob die Konfiguration erfolgreich durchgeführt wurde, mit dem Befehl:

    show router route-map

#### Konfiguration der BGP-Ankündigung

Wir werden jetzt die BGP-Ankündigung konfigurieren. Sie sollten im Besitz der in diesem Leitfaden weiter oben erwähnten Interconnect-IP (hier die Router-ID), der IP-Adresse des BGP4-Peers (hier **100.64.0.1** und **100.64.0.2**), des lokalen AS (hier **4200000005**) und des zuvor konfigurierten öffentlichen IP-Bereichs sein. ***Erinnern Sie sich***:

<img src={ipPlan04} />

und

<img src={ipPlan05} />

In dieser Konfiguration ist das AS (Autonomous System) von Cloud Temple das 33930. Das AS 65001 ist ein privates AS, das Sie repräsentiert. Die Verwendung einer privaten AS-Nummer auf dieser Ebene ist besonders dann sinnvoll, wenn mehrere BGP-Verbindungen konfiguriert werden müssen.

    config router bgp
        set as 65001                                                                    
        set router-id **100.64.1.110**                                                     
        set network-import-check disable                                                    
        set graceful-restart enable                                                           
        config neighbor
            edit "100.64.0.1" 
                set capability-graceful-restart enable
                set ebgp-enforce-multihop enable
                set next-hop-self enable
                set soft-reconfiguration enable
                set ebgp-multihop-ttl 3
                set remote-as 33930
                set local-as 4200000005
                set route-map-in "rm_deny_all"
                set route-map-out "rm_net_public_customer"
                set keep-alive-timer 10
                set holdtime-timer 30
            next
            edit "100.64.0.2"
                set capability-graceful-restart enable
                set ebgp-enforce-multihop enable
                set next-hop-self enable
                set soft-reconfiguration enable
                set ebgp-multihop-ttl 3
                set remote-as 33930
                set local-as 4200000005
                set route-map-in \"rm_deny_all\"
                set route-map-out \"rm_net_public_customer\"
                set keep-alive-timer 10
                set holdtime-timer 30
            next
        end

    config network
        edit 1
            set prefix 80.75.159.90/31
        next
    end
    config redistribute "connected"
    end
    config redistribute "static"
        set status enable
    end
    end

Sie können dann überprüfen, ob die BGP-Sitzungen aufgebaut sind, mit dem Befehl:

    get router info bgp summary

#### Konfiguration der LoopBack-Adresse

Die Verwendung der Loopback-Adresse zur Einrichtung von BGP-Sitzungen zwischen Peers verbessert die Stabilität der Sitzung. Loopback-Adressen sind nicht vom Zustand einer bestimmten physischen Schnittstelle abhängig. Daher kann die BGP-Sitzung aktiv bleiben, auch wenn eine Schnittstelle ausfällt oder ein Pfad unterbrochen ist, solange zwischen den Peers ein anderer gültiger Routing-Pfad besteht. Dies erhöht die Redundanz und Resilienz des Netzwerks.

Die Verwendung von Loopback-Adressen für BGP-Sitzungen hilft auch die Sicherheit zu erhöhen. Sicherheitsrichtlinien können einheitlicher und effektiver auf Loopback-Adressen angewendet werden, und zusätzliche Sicherheitsmaßnahmen wie Authentifizierung und Zugriffssteuerungslisten können leichter implementiert werden.

Wir empfehlen, die Loopback-Adresse zu benennen, indem Sie die erste öffentliche IP des ersten Bereichs verwenden, die die Standardadresse für den Internetzugang sein sollte: **LOOP_"VORLETZTES OKTETT DER ÖFFENTLICHEN IP"_"LETZTES OKTETT DER ÖFFENTLICHEN IP"**

Zum Beispiel, wenn Ihre erste öffentliche IP Ihres ersten Bereichs 80.75.159.90/32 ist, wird die Loopback **LOOP_159.90** genannt.
In der Befehlszeile Ihrer Appliance geben Sie ein (**Achtung 80.75.159.90/32 ist hier ein Beispiel!**):

```
    config system interface 
        edit "LOOP_159_90"
        set vdom "root"
        set ip 80.75.159.90/32
        set allowaccess ping
        set type loopback
        next
    end
    config firewall ippool
        edit "NAT-PUB-ALL"
        set startip 80.75.159.90
        set endip 80.75.159.90
        next
    end
    config system dns
        set primary 96.45.45.45
        set secondary 96.45.46.46
        set source-ip 80.75.159.90
    end
    config system fortiguard
        set update-server-location eu
        set source-ip 80.75.159.90
    end
    config system ntp
        set ntpsync enable
        set source-ip 80.75.159.90
    end
```

Dies ermöglicht die ursprüngliche Konfiguration von NAT, DNS, Intrusion Prevention und Uhrzeit. Ihre Appliance sollte nun in der Lage sein, nach außen zu pingen, wenn die Quell-IP-Adresse die NAT-IP ist (hier in diesem Beispiel 80.57.159.90).

**Wir empfehlen auch, den Administrationsport zu ändern, der standardmäßig 80 oder 443 ist.**

#### Konfiguration der WAN- und HA-Schnittstellen

Um die Lesbarkeit der Schnittstellen in der Verwaltung der Geräte zu vereinfachen, empfehlen wir, die Schnittstellen so umzubenennen, dass ihr Name ihrer Rolle in der Firewall entspricht. Dies erfolgt durch die Definition eines Alias auf der Schnittstelle.

Port1 ist als WAN definiert und Port2 wird in HA umbenannt. Für den HA-Port wird eine IP-Adresse im APIPA-Subnetz definiert, damit die Geräte auf diese Weise in einem Cluster verbunden werden können.

```
config system interface
        edit "port1"
                set alias "WAN"
        next
        edit "port2"
                set ip 169.254.254.1 255.255.255.252
                set allowaccess ping
                set type physical
                set alias "HA"
                set snmp-index 2
        next
end
```

### Bereitstellung eines zweiten Mitglieds

#### Bereitstellung der zweiten VM

Um ein zweites Mitglied für das Clustering bereitzustellen, wird empfohlen, eine zweite AZ zur Verfügung zu haben, um eine hohe Verfügbarkeit des Firewall-Clusters sicherzustellen.

Für die Bereitstellung der zweiten Appliance sind die zuvor beschriebenen Bereitstellungsaktionen in der zweiten AZ zu wiederholen:

- Hinzufügen des OVF-Templates in eine Inhaltsbibliothek
- Bereitstellung einer VM aus dieser Inhaltsbibliothek
- Zuweisung einer Sicherungsrichtlinie

Wir empfehlen, das Namensschema der VM beizubehalten, nämlich FGT-VM-0X-ROLE-AZ und für die IP-Adresse der ersten Schnittstelle die zweite freie IP des Interconnect-Bereichs zu verwenden.

#### Konfiguration der WAN- und HA-Schnittstellen

Um die Lesbarkeit der Schnittstellen zu vereinfachen, sollten diese beim zweiten Mitglied ebenfalls umbenannt werden. Auch in diesem Schritt muss die IP-Adresse der HA-Schnittstelle konfiguriert werden, damit die Geräte für das Clustering kommunizieren können.

```
config system interface
        edit "port1"
                set alias "WAN"
        next
        edit "port2"
                set ip 169.254.254.2 255.255.255.252
                set allowaccess ping
                set type physical
                set alias "HA"
                set snmp-index 2
        next
end
```

### Clustering

Wir werden ein aktives/passives Clustering konfigurieren. Das Passwort dient als gemeinsam genutzter Schlüssel zwischen den beiden Cluster-Mitgliedern und sollte sicher aufbewahrt werden. Die Kommunikation zwischen den Geräten erfolgt unicast und die anzugebende Peer-IP ist die der HA-Schnittstelle der Firewall, mit der der Cluster aufgebaut werden soll. Schließlich sind die in der Sektion *monitor* genannten Schnittstellen die überwachten Schnittstellen, bei Verlust der L2-Verbindung wird ein Cluster-Failover ausgelöst.

Bei der ersten Einheit ergibt sich daraus diese Konfiguration:

```
config system ha
    set mode a-p
 set group-name "FTG-HA-INTERNET"
    set group-id 16
    set password SECRET
    set hbdev HA 10
 set priority 100
    set monitor "HA" "WAN"
    set unicast-hb enable
    set unicast-hb-peerip 169.254.254.2
end 
```

Schließlich werden wir bei der zweiten Einheit die Peer-IP-Adresse ändern und die Priorität senken, damit das erste Gerät standardmäßig als aktives Mitglied des Clusters gewählt wird:

```
config system ha
    set mode a-p
 set group-name "FTG-HA-INTERNET"
    set group-id 16
    set password SECRET
    set hbdev HA 10
 set priority 200
    set monitor "HA" "WAN"
    set unicast-hb enable
    set unicast-hb-peerip 169.254.254.1
end 
```

Die Synchronisation kann einige Minuten dauern.
```
Pour eine vollständige Überprüfung ist der Befehl *get sys ha status* der richtige Befehl. Um dies kürzer zu überprüfen, solltest du *diag sys ha checksum cluster* verwenden.
Wenn die Synchronisation funktioniert, müssen die Prüfprüfungen der Zeile *all* auf beiden Geräten identisch sein.

```
# diag sys ha checksum cluster

================== FG3H0ZZZNNNNNNN1 ==================

is_manage_primary()=1, is_root_primary()=1
debugzone
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f 
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d 
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb 

checksum
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f 
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d 
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb 

================== FG3H0ZZZNNNNNNN2 ==================

is_manage_primary()=0, is_root_primary()=0
debugzone
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f 
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d 
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb 

checksum
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f 
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d 
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb 
```

#### Konfiguration des externen Zugriffs auf die Firewall

Zuerst wird der Verwaltungsport vom Port 443 auf den Port 8443 verschoben, um die Freigabe eines Standardports zu ermöglichen, der für geschäftliche Anwendungen verwendet werden kann.

```
config system global
 set admin-sport 8443
end
```

Hinzufügen eines benutzerdefinierten Dienstes für die folgenden Datenverkehrsregeln:

```
config firewall service custom
    edit "TCP-8443"
        set tcp-portrange 8443
    next
end
```

Erlauben der Verwaltung über die WAN-Schnittstelle und die Loopback-Schnittstelle. Hierbei ist es wichtig, den Namen der Loopback-Schnittstelle anzupassen, wie zuvor definiert:

```
edit port1
 set allowaccess ping https ssh http
next

config system interface 
 edit "LOOP_0"
        set allowaccess ping https ssh http snmp
 next
end
```

Dann wird eine Verkehrsregel erstellt, die den Zugriff auf die Verwaltungsoberflächen über die Loopback-Schnittstelle erlaubt. Diese Regel ist sehr großzügig und erlaubt alle IP-Adressen, weshalb anschließend auf explizit zulässige Bereiche gefiltert werden sollte.

```
config firewall policy
    edit 1
        set name "WAN to LOOP"
        set srcintf "port1"
        set dstintf "LOOP_0"
        set action accept
        set srcaddr "all"
        set dstaddr "all"
        set schedule "always"
        set service "ALL_ICMP" "HTTP" "HTTPS" "SSH" "TCP-8443"
    next
end
```

Schließlich wird die Authentifizierung des Administratorkontos auf vorab definierte IP-Bereiche eingeschränkt. Dies ist eine starke Sicherheitsempfehlung von Cloud Temple.

```
config system admin
    edit "admin"
        set trusthost1 100.64.1.99/32
        set trusthost2 1.2.3.4/32
        set trusthost3 5.6.7.8/32
        set accprofile "super_admin"
        set vdom "root"
        set password SECRET
     next
end
```