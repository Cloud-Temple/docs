---
title: Ein virtuelles Fortigate-Firewall bereitstellen
tags:
  - internet
  - tutorials
---

import fortiSupport from '@site/docs/network/internet/images/forti_support.png';
import fortiSupportVm01 from '@site/docs/network/internet/images/forti_support_vm_01.png';
import fortiSupportVm02 from '@site/docs/network/internet/images/forti_support_vm_02.png';
import asn from '@site/docs/network/internet/images/asn.png';
import ipsPub from '@site/docs/network/internet/images/ips_pub.png';
import ipsInterco from '@site/docs/network/internet/images/ips_interco.png';
import fortiVmType01 from '@site/docs/network/internet/images/forti_vm_type_01.png';
import shivaCatalogues from '@site/docs/network/internet/images/shiva_catalogues.png';
import imgImport01 from '@site/docs/network/internet/images/img_import_01.png';
import imgImport02 from '@site/docs/network/internet/images/img_import_02.png';
import imgImport03 from '@site/docs/network/internet/images/img_import_03.png';
import imgImport04 from '@site/docs/network/internet/images/img_import_04.png';
import imgImport05 from '@site/docs/network/internet/images/img_import_05.png';
import imgImport06 from '@site/docs/network/internet/images/img_import_06.png';
import imgImport07 from '@site/docs/network/internet/images/img_import_07.png';
import imgImport08 from '@site/docs/network/internet/images/img_import_08.png';
import imgImport09 from '@site/docs/network/internet/images/img_import_09.png';
import imgImport10 from '@site/docs/network/internet/images/img_import_10.png';
import imgImport11 from '@site/docs/network/internet/images/img_import_11.png';
import imgImport12 from '@site/docs/network/internet/images/img_import_12.png';
import ipPlan01 from '@site/docs/network/internet/images/ip_plan_01.png';
import ipPlan02 from '@site/docs/network/internet/images/ip_plan_02.png';
import ipPlan03 from '@site/docs/network/internet/images/ip_plan_03.png';
import ipPlan04 from '@site/docs/network/internet/images/ip_plan_04.png';
import ipPlan05 from '@site/docs/network/internet/images/ip_plan_05.png';
import imgDeploy01 from '@site/docs/network/internet/images/img_deploy_01.png';
import imgDeploy02 from '@site/docs/network/internet/images/img_deploy_02.png';
import imgDeploy04 from '@site/docs/network/internet/images/img_deploy_04.png';
import imgDeploy05 from '@site/docs/network/internet/images/img_deploy_05.png';
import imgDeploy06 from '@site/docs/network/internet/images/img_deploy_06.png';
import imgDeploy07 from '@site/docs/network/internet/images/img_deploy_07.png';
import imgDeploy08 from '@site/docs/network/internet/images/img_deploy_08.png';
import imgDeploy09 from '@site/docs/network/internet/images/img_deploy_09.png';
import imgBackup01 from '@site/docs/network/internet/images/img_backup_01.png';
import imgBackup02 from '@site/docs/network/internet/images/img_backup_02.png';
import imgBackup03 from '@site/docs/network/internet/images/img_backup_03.png';
import imgBackup04 from '@site/docs/network/internet/images/img_backup_04.png';
import vmStart01 from '@site/docs/network/internet/images/vm_start_01.png';
import vmStart02 from '@site/docs/network/internet/images/vm_start_02.png';
import vmConsole01 from '@site/docs/network/internet/images/vm_console_01.png';
import vmBoot01 from '@site/docs/network/internet/images/vm_boot_01.png';
import vmBoot02 from '@site/docs/network/internet/images/vm_boot_02.png';
import vmBoot03 from '@site/docs/network/internet/images/vm_boot_03.png';
import vmBoot04 from '@site/docs/network/internet/images/vm_boot_04.png';

## Zweck dieses Leitfadens

Dieser Leitfaden beschreibt die wesentlichen Schritte zum effizienten Bereitstellen eines einzelnen Firewalls oder eines Firewall-Clusters in einer SecNumCloud-Umgebung.

**Hinweis:** *Die in diesem Dokument dargestellten Konfigurationen dienen als Referenzleitfaden und müssen sorgfältig an die technischen Spezifikationen, Sicherheitsanforderungen und operativen Ziele der jeweiligen Umgebung angepasst werden.*

## Voraussetzungen für diesen Leitfaden

### Erforderliche Berechtigungen

Die Bereitstellung der virtuellen Appliances erfordert einen Zugriff auf den Tenant des Kunden in der Cloud Temple-Konsole mit den folgenden spezifischen Berechtigungen:

Wenn Sie das Produkt **OpenIaaS** verwenden:

| Berechtigungsname                          | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot – Öffnen der Konsole einer virtuellen Maschine                                                                |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS-Angebot – Abruf fortgeschrittener Daten der VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration usw.) |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS-Angebot – Fortgeschrittene Verwaltung der VMware-Ressourcen                                                                          |
| compute_iaas_opensource_read                  | OpenIaaS-Angebot – Abruf von Ressourcen vom Typ Virtuelle Maschinen                                                        |
| compute_iaas_opensource_management            | OpenIaaS-Angebot – Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                             |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS-Angebot – Steuerung der Stromversorgung einer virtuellen Maschine                                                              |
| activity_read                                 | Abruf von Protokollen und Aktivitäten                                                                                    |

Wenn Sie das Produkt **Vmware** verwenden:

| Berechtigungsname                          | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_vmware_console_access            | Vmware-Angebot – Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_vmware_infrastructure_read       | Vmware-Angebot – Abruf fortgeschrittener Daten der VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration usw.)  |
| compute_iaas_vmware_infrastructure_write      | Vmware-Angebot – Fortgeschrittene Verwaltung der VMware-Ressourcen                                                                           |
| compute_iaas_vmware_read                      | Vmware-Angebot – Abruf von Ressourcen vom Typ Virtuelle Maschinen                                                         |
| compute_iaas_vmware_management                | Vmware-Angebot – Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                              |
| compute_iaas_vmware_virtual_machine_power     | Vmware-Angebot – Steuerung der Stromversorgung einer virtuellen Maschine                                                               |
| activity_read                                 | Abruf von Protokollen und Aktivitäten                                                                                    |

Wenn Sie ***Terraform*** verwenden möchten, sind die folgenden zusätzlichen Berechtigungen erforderlich:

| Berechtigungsname                          | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| tag_read                                      | Abruf von Tags, ausgenommen RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung von Tags, ausgenommen RTMS-Tags                                                                                        |
| iam_read                                      | Abruf der Benutzerberechtigungen                                                                                           |
| iam_write                                     | Verwaltung der Benutzerberechtigungen                                                                                                |

Das OVA-Image der bereitzustellenden Appliance muss vor Beginn des Prozesses verfügbar sein. Die Fortinet-Images finden Sie auf [der Support-Website](https://support.fortinet.com/welcome/). Es ist erforderlich, über ein Fortinet-Support-Konto zu verfügen.

Gehen Sie in den **Bereich Download** und dann zu **Firmware Images**:

<img src={fortiSupport} />

**Stand 1. Juli 2024 wird Version 7.2 empfohlen.**

Das abzurufende Image ist FGT_VM64 im OVF/ZIP-Format:

<img src={fortiSupportVm01} />

**Hinweis:** *Wenn Sie eine Firewall-Leistungseinheit von Fortinet abonniert haben, kann der Cloud Temple-Support das Image im OVA-Format sowie die zugehörige Lizenz bereitstellen.*

| Infrastruktur-Leistungseinheiten – VIRTUELLE FIREWALLS | Einheit             | sku                     |
| :--------------------------------------------------- | :---------------- | :---------------------- |
| FIREWALL UTM – Fortigate Virtuel VM02V – ohne vdom    | 1 virtueller Cluster | csp:fr1:licence:fw:ftg2 |
| FIREWALL UTM – Fortigate Virtuel VM04V – ohne vdom    | 1 virtueller Cluster | csp:fr1:licence:fw:ftg4 |
| FIREWALL UTM – Fortigate Virtuel VM08V – ohne vdom    | 1 virtueller Cluster | csp:fr1:licence:fw:ftg8 |
| FIREWALL UTM – Fortigate – 5 zusätzliche vdoms     | 5 vdom            | csp:fr1:licence:fw:vdom |

### Informationen zur Netzwerk-Konnektivität

Sie müssen über die erforderlichen Informationen verfügen, um die BGP-Session mit dem Backbone aufzubauen. Diese Daten sind in der Cloud Temple-Konsole im Bereich Network → Internet → ASNs verfügbar:

<img src={asn} />

Sie müssen außerdem über einen Bereich öffentlicher IP-Adressen verfügen, dessen Umfang Ihrem Bedarf entspricht. Der reservierte Adressbereich wird in der Cloud Temple-Konsole im Bereich Network → Internet → Öffentliche IPs angezeigt. Hier ein Beispiel:

<img src={ipsPub} />

Schließlich müssen Sie über den Ihnen zugewiesenen Block im BGP-Interconnect-Netzwerk verfügen, um eine Route zu Internet zu erhalten. Das Interconnect-Netzwerk von Cloud Temple ist 100.64.0.0/16 und jeder Zugang verfügt über ein Interconnect-Subnetz vom Typ /28. Dieses Netzwerk dient dem Aufbau der BGP-Session mit dem Routing-Kern von Cloud Temple. Sie finden diesen Bereich in der Cloud Temple-Konsole im Bereich Network → Internet → Interconnect-IPs. Hier ein Beispiel:

<img src={ipsInterco} />

**Hinweis:** *Sie müssen die zugehörigen Leistungseinheiten für die Internet-Konnektivität abonniert haben. Dann werden die Konnektivitätsinformationen in der Cloud Temple-Konsole angezeigt.*

## Typische Netzwerkarchitektur

Die typische Architektur einer Cloud Temple-Bereitstellung ist ein Cluster mit Betriebskontinuität. Dies erfordert die Implementierung und das Abonnement von mindestens zwei Verfügbarkeitszonen in einer Region.

Die Standardbereitstellung der Firewalls erfolgt als Cluster, mit einem Gerät in jeder SNC-Verfügbarkeitszone. Ein virtuelles Netzwerk stellt die Synchronisierung des Clusters sicher. Die WAN-Ports greifen über das Interconnect-Netzwerk auf Internet zu.

Eine anfängliche Konfiguration ist erforderlich, um die BGP-Sessions aufzubauen und somit die Internet-Konnektivität zu ermöglichen. Die privaten VLANs werden über einen Trunk (Aggregation von Layer-2-Netzwerken über die 802.1q-Technologie) zu den LAN-Schnittstellen des virtuellen Firewalls geleitet.

**Hinweis:** *Obwohl dies keine empfohlene Architektur ist, gilt dieser Leitfaden auch für Single-AZ-Bereitstellungen.*

## Import der Fortinet-Appliance in die Cloud Temple-Konsole

### Entpacken der Appliance-Datei

Nach dem Download von der Fortinet-Support-Website entpacken Sie die ZIP-Datei, um Folgendes zu erhalten:

- Die virtuellen VMDK-Disks der Appliance,

- Die OVF-Dateien, die die Appliance für verschiedene virtuelle VMware-Hardwareformate beschreiben.

<img src={fortiSupportVm02} />

Hier sind die Template-Typen, die häufig in der .ZIP-Datei enthalten sind:

| Template                     | Compatible with                           |
| ---------------------------- | ----------------------------------------- |
| FortiGate-VM64.ovf           | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.hw13.ovf      | ESXI 6.5(Hardware Version 13) or later    |
| FortiGate-VM64.hw15.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64.hw17.ovf      | ESXI 7.0(Hardware Version 17) or later    |
| FortiGate-VM64.vapp.ovf      | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.nsxt.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64-ZNTA.vapp.ovf | ESXI 7.0(Hardware Version 17) or later    |

### Import der Appliance in Ihr Image-Katalog über die Cloud Temple-Konsole

Melden Sie sich in Ihrem Tenant in der Cloud Temple-Konsole an und gehen Sie dann zu "**Katalog**" und "**Dateien veröffentlichen**":

<img src={shivaCatalogues} />

Wählen Sie einen Namen für Ihr Image. Wir empfehlen die Verwendung von: **FGT-VM-VERSION-AZ**, beispielsweise hier FGT-VM-*7.2.8*-*TH3S*:

<img src={imgImport01} />

Geben Sie anschließend die Image-Bibliothek der Verfügbarkeitszone **(1)** an:

<img src={imgImport02} />

Wählen Sie anschließend die Dateien aus, die in der Bibliothek veröffentlicht werden sollen **(2)**:

<img src={imgImport03} />

<img src={imgImport04} />

Klicken Sie anschließend auf "**Dateien veröffentlichen**":

<img src={imgImport05} />

Warten Sie auf den Abschluss des Uploads Ihrer Dateien in die Bibliothek:

<img src={imgImport06} />

<img src={imgImport07} />

*Der Vorgang ist für jede Verfügbarkeitszone zu wiederholen, in der Sie eine Appliance bereitstellen möchten.*

Beispielsweise für die zweite Zone PAR7S:

<img src={imgImport08} />

<img src={imgImport09} />

<img src={imgImport10} />

<img src={imgImport11} />

<img src={imgImport12} />

**Hinweis:**

- ***(1)*** *Jede Verfügbarkeitszone verfügt über eine Image-Bibliothek für die Hypervisoren dieser Zone.*

- ***(2)*** *Für die .ovf-Datei eine Version wählen, deren virtuelle Hardware mit der Version der ESXi-Hypervisoren kompatibel ist (Stand 1. Juli 2024 ist die maximal unterstützte Version **v19**, die den ESX 7.0.x entspricht).*

## Bereitstellung der Fortinet-Appliance in einer Verfügbarkeitszone

### Planung Ihrer BGP-Interconnect-Bereitstellung

Sie müssen eine Interconnect-IP-Adresse für Ihre zukünftige Firewall-Appliance auswählen. Die erste Adresse ist immer das BGP-Gateway von Cloud Temple. Die anderen Adressen sind daher grundsätzlich verfügbar (außer Sie haben zuvor andere Geräte bereitgestellt):

<img src={ipPlan01} />

Die Regel besagt, dass man die freien IPs nacheinander nimmt:

<img src={ipPlan02} />

### Planung der Nutzung Ihrer öffentlichen IP-Adressen

Alle zugewiesenen öffentlichen IPs sind für Ihren Tenant nutzbar. Die Größe des Subnetzes hängt von den abonnierten Leistungseinheiten ab.

<img src={ipPlan03} />

### BGP4-Konfigurationsparameter

Notieren Sie die folgenden drei wichtigen Informationen für die weitere BGP4-Konfiguration:

<img src={ipPlan04} />

- **Partner-AS**: Das Remote-AS, das zur Einrichtung der BGP-Session aus Sicht des Firewalls verwendet wird; es handelt sich um das AS von Cloud Temple.

- **Route Server**: Die beiden BGP-Peers, zu denen eine BGP-Session aufgebaut werden soll.

- **Name**: Die dem Tenant eigene AS-Nummer; das Präfix *AS* entfernen und nur die Nummer beibehalten.

<img src={ipPlan05} />

### Appliance auf der Infrastruktur bereitstellen

Wählen Sie in der Bibliothek der Verfügbarkeitsszone, in der Sie Ihre Appliance installieren möchten, die Vorlage aus und klicken Sie auf "**Bereitstellen**" :

<img src={imgDeploy01} />

Sie müssen anschließend die virtuelle Maschine benennen; wir empfehlen die folgende Nomenklatur : FGT-VM-**0X**-**ROLE**-**AZ**

- **0X** : entspricht dem Fortigate-Lizenztyp, für den Sie sich entschieden haben :

<img src={fortiVmType01} />

- **ROLE** : Zum Beispiel INTERNET für ein Internet-Interconnect-Firewall.

- **AZ** : Die Verfügbarkeitsszone

<img src={imgDeploy02} />

Wählen Sie anschließend den Ziel-Hypervisor-Cluster :

<img src={imgDeploy04} />

Wählen Sie das Speicherziel :

<img src={imgDeploy05} />

Geben Sie schließlich die Konfigurationsinformationen Ihrer Appliance ein, insbesondere die zuvor ermittelten Adressierungsdaten :

<img src={imgDeploy06} />

- **Token** : nichts eingeben

- **Konfigurations-URL** : nichts eingeben

- **Hostname** : identisch mit dem Namen der VM-Hülle

- **DNS** : 208.91.112.53 und 208.91.112.2 (Standard, aber Sie können andere DNS-Server nach Belieben verwenden)

- **Interface IP** : erste freie Interconnect-IP

- **Netmask** : Netmask des Interconnect-Adressbereichs

- **Interface 2** : nicht konfiguriert

Klicken Sie anschließend auf **Weiter**. Die Konfigurationsinformationen der Schnittstellen müssen eingegeben werden. Die erste Schnittstelle ist für den Internetzugang zu verwenden; die anderen werden vorübergehend auf das VLAN für die Hochverfügbarkeit gesetzt :

<img src={imgDeploy07} />

schließlich auf "**Bereitstellen**" klicken.

<img src={imgDeploy08} />

<img src={imgDeploy09} />

Wenn die Bereitstellung abgeschlossen ist, informiert Sie die Cloud Temple-Konsole darüber und Ihre Appliance ist nun in den virtuellen Maschinen sichtbar.

### Zuweisung einer Sicherungsrichtlinie

In einer SecNumCloud-Umgebung muss eine virtuelle Maschine eine Sicherungsrichtlinie haben, um gestartet zu werden. Sie können diese in den Richtlinien konfigurieren und die Inventuraufgabe starten :

<img src={imgBackup01} />

<img src={imgBackup02} />

Weisen Sie die Richtlinie zu, die dem gewünschten RPO entspricht; standardmäßig können Sie eine tägliche Richtlinie wählen :

<img src={imgBackup03} />

Sie können Ihre Auswahl bestätigen :

<img src={imgBackup04} />

Falls zusätzliche Richtlinien erforderlich sind (wie in diesem Beispiel 'daily' und 'monthly'), wiederholen Sie den Vorgang für jede zusätzliche Richtlinie.

### Starten der virtuellen Maschine

Das Starten der virtuellen Maschine erfolgt über die Cloud Temple-Konsole :

<img src={vmStart01} />

Es ist möglich, die Konsole zu beobachten; die Fortinet-Appliance startet nach dem ersten Boot erneut :

<img src={vmStart02} />

Nach diesem zweiten Boot muss die in der Bereitstellung der virtuellen Maschine im Abschnitt **OvfProperties** angegebene IP-Adresse auf Ping antworten, vorausgesetzt, ein Zugriff auf das Interconnect-Netzwerk besteht.

## Initiale Konfiguration

### Verbindung zur Konsole

Wählen Sie in der Cloud Temple-Konsole Ihre Fortinet-Appliance aus und fordern Sie die Konsole der Appliance an.

<img src={vmConsole01} />

Je nachdem, wann Sie auf die Konsole zugreifen, haben Sie möglicherweise den initialen Boot und Neustart der Appliance gesehen :

<img src={vmBoot01} />

<img src={vmBoot02} />

Sie können sich anschließend auf der Konsole der Appliance anmelden; der Benutzername ist "**admin**". Die Appliance fordert Sie auf, das Passwort zu ändern (es gibt standardmäßig kein Passwort, einfach auf ENTER drücken).

Sie müssen dann ein neues Passwort eingeben.

**Achtung : Die Appliance verwendet eine QWERTY-Tastatur.**

**Im Falle eines Passwortfehlers müssen Sie Ihre Appliance neu installieren.**

<img src={vmBoot03} />

<img src={vmBoot04} />

### Konfiguration der BGP-Session

In diesem Schritt konfigurieren wir Ihre Fortinet-Appliance im Konsolenmodus, um die BGP4-Verbindung aufzubauen.

#### Konfiguration des öffentlichen IP-Adressbereichs

Der erste Schritt besteht darin, die öffentlichen IP-Adressbereiche zu definieren. Zum Anfang konfigurieren wir nur den ersten Block. Wir verwenden die Informationen, die Sie zuvor notiert haben.

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

Sie können dann überprüfen, ob die Konfiguration erfolgreich durchgeführt wurde, mit dem Befehl :

    show router prefix-list

#### Konfiguration der Route Map

Eine "Route Map Policy" dient dazu, komplexere Routing-Richtlinien zu definieren, die das Verhalten des Netzwerkverkehrs basierend auf bestimmten Kriterien beeinflussen oder ändern können. Route Maps sind besonders nützlich für fortgeschrittene Aufgaben der Verkehrssteuerung, wie z. B. das Filtern von Routen, die Umleitung von Verkehr oder die Änderung von Routenattributen in dynamischen Routing-Protokollen wie BGP (Border Gateway Protocol). In unserem Kontext dient sie dazu, Ihr Netzwerk vor ungültigen Ankündigungen zu schützen.

Der zweite Schritt besteht darin, die Route Map Policy zu konfigurieren :

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

Sie können dann überprüfen, ob die Konfiguration erfolgreich durchgeführt wurde, mit dem Befehl :

    show router route-map

#### Konfiguration der BGP-Ankündigung

Wir konfigurieren nun die BGP-Ankündigung. Sie müssen, wie weiter oben in diesem Guide beschrieben, die Interconnect-IP (hier die Router-ID), die IP-Adresse des BGP4-Peers (hier **100.64.0.1** und **100.64.0.2**), das lokale AS (hier **4200000005**) und den zuvor konfigurierten öffentlichen IP-Adressbereich zur Hand haben. ***Erinnern Sie sich*** :

<img src={ipPlan04} />

und

<img src={ipPlan05} />

In dieser Konfiguration ist das AS (Autonomous System) von Cloud Temple 33930. Das AS 65001 ist ein privates AS, das Sie repräsentiert. Die Verwendung einer privaten AS-Nummer auf dieser Ebene ist sauberer, insbesondere wenn mehrere BGP-Verbindungen konfiguriert werden müssen.

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

Sie können anschließend überprüfen, ob die BGP-Sessions aufgebaut sind :

    get router info bgp summary

#### Konfiguration der Loopback-Adresse

Durch die Verwendung der Loopback-Adresse zur Einrichtung von BGP-Sessions zwischen Peers wird die Stabilität der Session verbessert. Loopback-Adressen hängen nicht vom Zustand einer bestimmten physischen Schnittstelle ab. Daher kann die BGP-Session auch dann aktiv bleiben, wenn eine Schnittstelle ausfällt oder ein Pfad unterbrochen wird, solange ein anderer gültiger Routing-Pfad zwischen den Peers existiert. Dies erhöht die Redundanz und Resilienz des Netzwerks.

Die Verwendung von Loopback-Adressen für BGP-Sessions hilft auch, die Sicherheit zu stärken. Sicherheitsrichtlinien können gleichmäßiger und effektiver auf Loopback-Adressen angewendet werden, und zusätzliche Sicherheitsmaßnahmen wie Authentifizierung und Zugriffskontrolllisten können leichter implementiert werden.

Wir empfehlen, die Loopback-Adresse mit der ersten öffentlichen IP des ersten Bereichs zu benennen, die die Standardadresse für den Internetzugang sein sollte : **LOOP_"VORLETZTES OKTETT DER ÖFFENTLICHEN IP"_"LETZTES OKTETT DER ÖFFENTLICHEN IP"**

Zum Beispiel, wenn Ihre erste öffentliche IP Ihres ersten Bereichs 80.75.159.90/32 ist, wird die Loopback **LOOP_159.90** genannt.
Geben Sie in der Kommandozeile Ihrer Appliance Folgendes ein (**Achtung : 80.75.159.90/32 ist hier ein Beispiel !**):

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

Dies ermöglicht die initiale Konfiguration von NAT, DNS, Intrusion Prevention und der Uhr. Ab jetzt muss Ihre Appliance in der Lage sein, das externe Netzwerk zu pingen, wenn die Quell-IP-Adresse die NAT-IP ist (hier in diesem Beispiel 80.57.159.90).

**Wir empfehlen auch, den Verwaltungsport zu ändern, der standardmäßig 80 oder 443 ist.**

#### Konfiguration der WAN- und HA-Schnittstellen

Um die Lesbarkeit der Schnittstellen in der Geräteverwaltung zu vereinfachen, empfehlen wir, die Schnittstellen so umzubenennen, dass ihr Name ihrer Rolle auf dem Firewall entspricht. Dies erfolgt über die Definition eines Aliases auf der Schnittstelle.

Port1 wird als WAN definiert und Port2 wird in HA umbenannt. Für den HA-Port wird eine IP-Adresse im APIPA-Subnetz definiert, damit die Geräte sich auf diese Weise nach dem Clustering verbinden können.

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

Um ein zweites Mitglied für das Clustering bereitzustellen, wird empfohlen, eine zweite AZ bereitzuhalten, um die Hochverfügbarkeit des Firewall-Clusters sicherzustellen.

Für die Bereitstellung der zweiten Appliance müssen die zuvor beschriebenen Bereitstellungsschritte in der zweiten AZ wiederholt werden :

- Hinzufügen der OVF-Vorlage zu einer Inhaltsbibliothek
- Bereitstellung einer VM aus dieser Inhaltsbibliothek
- Zuweisung einer Sicherungsrichtlinie

Wir empfehlen, die Benennungskonvention der VM beizubehalten, nämlich FGT-VM-0X-ROLE-AZ, und für die IP-Adresse der ersten Schnittstelle die zweite freie IP des Interconnect-Adressbereichs zu verwenden.

#### Konfiguration der WAN- und HA-Schnittstellen

Auch hier, um die Lesbarkeit der Schnittstellen zu vereinfachen, müssen diese auf dem zweiten Mitglied umbenannt werden. In diesem Schritt muss außerdem die IP-Adresse der HA-Schnittstelle konfiguriert werden, damit die Geräte für das Clustering kommunizieren können.

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

Wir konfigurieren ein Active/Passive-Clustering. Das Passwort stellt einen gemeinsamen Schlüssel zwischen den beiden Cluster-Mitgliedern dar und muss sicher aufbewahrt werden. Die Kommunikation zwischen den Geräten erfolgt per Unicast, und die anzugebende Peer-IP ist die der HA-Schnittstelle des Firewalls, mit dem das Cluster aufgebaut werden soll.
Schließlich sind die in der Sektion *monitor* genannten Schnittstellen die überwachten Schnittstellen; wenn die L2-Verbindung verloren geht, wird ein Failover des Clusters ausgelöst.

Auf dem ersten Gerät ergibt sich folgende Konfiguration :

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

Auf dem zweiten Gerät ändern wir schließlich die Peer-IP-Adresse und senken die Priorität, damit das erste Gerät standardmäßig als aktives Cluster-Mitglied gewählt wird :

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

Die Synchronisation kann einige Minuten in Anspruch nehmen.
Für eine vollständige Überprüfung ist der Befehl *get sys ha status* der empfohlene Befehl. Für eine kürzere Überprüfung muss *diag sys ha checksum cluster* ausgeführt werden.
Wenn die Synchronisation funktioniert, müssen die Checksums der Zeile *all* auf beiden Geräten identisch sein.

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

#### Konfiguration der externen Zugriffe auf das Firewall

Zunächst wird der Verwaltungsport von Port 443 auf Port 8443 verschoben, um einen Standardport freizugeben, der für geschäftliche Zwecke verwendet werden kann.

```
config system global
 set admin-sport 8443
end
```

Hinzufügen eines benutzerdefinierten Dienstes für die zu verwendenden Flussregeln:

```
config firewall service custom
    edit "TCP-8443"
        set tcp-portrange 8443
    next
end
```

Erlaubnis der Verwaltung über die WAN-Schnittstelle und die Loopback-Schnittstelle. An dieser Stelle ist es wichtig, den Namen der LOOP-Schnittstelle anzupassen, wie zuvor definiert:

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

Anschließend wird eine Flussregel erstellt, die den Zugriff auf die Verwaltungsschnittstellen über die Loopback-Schnittstelle erlaubt. Diese Regel ist sehr permissiv, sie erlaubt alle IP-Adressen. Es ist anschließend erforderlich, auf explizit erlaubte Bereiche zu filtern.

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

Schließlich wird die Authentifizierung des Admin-Kontos auf vorab festgelegte IP-Bereiche eingeschränkt. Dies ist eine starke Sicherheitsempfehlung von Cloud Temple.

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
