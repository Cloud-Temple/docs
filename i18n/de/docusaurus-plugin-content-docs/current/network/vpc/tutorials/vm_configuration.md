---
title: Netzwerkkonfiguration der VM
---
import vpcCreateNetworkAdaptersVmModale from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '@site/docs/network/vpc/images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '@site/docs/network/vpc/images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '@site/docs/network/vpc/images/vpc_mac_address_associate_modale.png'

# Netzwerkkonfiguration der VM

Dieses Tutorial führt Sie durch die Anbindung einer virtuellen Maschine an ein VPC-Netzwerk und die Zuweisung einer statischen (privaten) IP-Adresse sowie bei Bedarf einer öffentlichen IP-Adresse.

## Voraussetzungen

* Ein VPC und ein privates Netzwerk erstellt haben.
* Eine VM bereitgestellt haben (IaaS Open Source oder VMware).

## 1. Zuweisung einer statischen privaten IP-Adresse

Sie können die private IP-Adresse Ihrer VM auf zwei Arten festlegen.

### Methode A: Von der virtuellen Maschine aus (Empfohlen)

Diese Methode ermöglicht die Konfiguration von Netzwerk und IP in einem einzigen Schritt bei der Erstellung der Schnittstelle.

1. Öffnen Sie die Detailansicht Ihrer virtuellen Maschine.
2. Gehen Sie zum Tab **Netzwerkadapter**.
3. Klicken Sie auf die Schaltfläche **Neuen Netzwerkadapter hinzufügen**, um eine Schnittstelle hinzuzufügen.
<img src={vpcCreateNetworkAdaptersVm} />

4. Wählen Sie in der Modalauswahl Ihr VPC-Netzwerk aus.
<img src={vpcCreateNetworkAdaptersVmModale} />

5. Nach der Auswahl des Netzwerks wählen Sie eine der verfügbaren statischen IPs aus.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6. Bestätigen Sie die Erstellung.

> **Hinweis**: Sie können den Netzwerkadapter später bearbeiten, um das Netzwerk zu wechseln, falls erforderlich.

### Methode B: Über die Ansicht „Private Netzwerke“

Diese Methode eignet sich, um eine IP-Adresse vor der Erstellung der VM zu reservieren oder eine bestehende Zuordnung zu ändern.

1. Öffnen Sie die Detailansicht Ihres VPC, Tab **Private Netzwerke**.
2. Klappen Sie den IP-Adresspool des betreffenden Netzwerks auf.
3. Klicken Sie für eine verfügbare IP-Adresse auf die Aktion „Einer MAC-Adresse zuordnen“.
4. Ordnen Sie im Modalfenster eine der statischen IP-Adressen der MAC-Adresse einer VM zu.
<img src={vpcMacAddressAssociateModale} />

## 2. Zuordnung einer öffentlichen IP-Adresse (optional)

Wenn Sie Ihre VM aus dem Internet erreichbar machen möchten.

1. Öffnen Sie in der Detailansicht Ihres VPC den Tab **Öffentliche IPs**.  
<img src={vpcDetailIpsPub} />

2. Klicken Sie auf die Schaltfläche **Öffentliche IP zuordnen**.

3. Wählen Sie im Modalfenster das private Zielnetzwerk und die statische Ziel-IP aus und bestätigen Sie anschließend die Zuordnung.  
<img src={vpcIpPubAssociate} />

4. Sobald die Zuordnung erfolgt ist, können Sie Ihre VM über diese öffentliche IP-Adresse erreichen.

## Konfiguration des Gastbetriebssystems

**Wichtig**: Damit die statische (private) IP-Adresse korrekt zugewiesen wird, stellen Sie sicher, dass die Netzwerkschnittstelle Ihres Gastbetriebssystems (OS) im **DHCP**-Modus konfiguriert ist. Der DHCP-Dienst des VPC weist die reservierte Adresse zu.
