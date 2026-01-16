---
title: VM-Netzwerkkonfiguration
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '../images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '../images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# VM-Netzwerkkonfiguration

Dieses Tutorial führt Sie durch die Verbindung einer virtuellen Maschine mit einem VPC-Netzwerk und die Zuweisung einer statischen IP (privat) sowie einer öffentlichen IP bei Bedarf.

## Voraussetzungen
*   Eine VPC und ein privates Netzwerk wurden erstellt.
*   Eine VM wurde bereitgestellt.

## 1. Zuweisung einer privaten statischen IP

Sie können die private IP Ihrer VM auf zwei Arten festlegen.

### Methode A: Von der virtuellen Maschine (Empfohlen)

Mit dieser Methode können Sie das Netzwerk und die IP in einem einzigen Schritt bei der Erstellung der Schnittstelle konfigurieren.

1.  Greifen Sie auf die Detailansicht Ihrer virtuellen Maschine zu.
2.  Gehen Sie zum Reiter **Netzwerkadapter**.
3.  Klicken Sie auf die Schaltfläche **Neuer Netzwerkadapter**, um eine Schnittstelle hinzuzufügen.
<img src={vpcCreateNetworkAdaptersVm} />

4.  Wählen Sie im modalen Fenster Ihr VPC-Netzwerk aus.
<img src={vpcCreateNetworkAdaptersVmModale} />

5.  Sobald das Netzwerk ausgewählt ist, wählen Sie eine der verfügbaren statischen IPs aus.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6.  Bestätigen Sie die Erstellung.

> **Hinweis**: Sie können den Netzwerkadapter später bearbeiten, um das Netzwerk bei Bedarf zu ändern.

### Methode B: Aus der Ansicht Private Netzwerke

Diese Methode ist nützlich, um eine IP zu reservieren, bevor die VM erstellt wird, oder um eine bestehende Zuordnung zu ändern.

1.  Gehen Sie in der Detailansicht Ihrer VPC zum Reiter **Private Netzwerke**.
2.  Erweitern Sie den IP-Adresspool des betreffenden Netzwerks.
3.  Klicken Sie bei einer verfügbaren IP auf die Aktion "Einer MAC-Adresse zuordnen".
4.  Ordnen Sie im modalen Fenster eine der statischen IPs einer MAC-Adresse einer VM zu.
<img src={vpcMacAddressAssociateModale} />

## 2. Zuordnung einer öffentlichen IP (Optional)

Wenn Sie Ihre VM über das Internet erreichbar machen möchten.

1.  Gehen Sie in der Detailansicht Ihrer VPC zum Reiter **Öffentliche IPs**.
<img src={vpcDetailIpsPub} />

2.  Klicken Sie auf die Schaltfläche **Öffentliche IP zuordnen**.

3.  Wählen Sie im modalen Fenster das private Netzwerk und die statische Ziel-IP aus und bestätigen Sie die Zuordnung.
<img src={vpcIpPubAssociate} />

4.  Sobald die Zuordnung erfolgt ist, können Sie diese öffentliche IP-Adresse verwenden, um Ihre VM zu erreichen.

## Konfiguration des Gastbetriebssystems

**Wichtig**: Um sicherzustellen, dass die statische IP (privat) korrekt zugewiesen wird, stellen Sie sicher, dass die Netzwerkschnittstelle Ihres Gastbetriebssystems (OS) im **DHCP**-Modus konfiguriert ist. Der VPC-DHCP-Dienst weist die reservierte Adresse zu.
