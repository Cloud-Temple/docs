---
title: Statische IP und VM konfigurieren
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcStaticIps from '../images/vpc_static_ips.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Statische IP und VM konfigurieren

Dieses Tutorial führt Sie durch die Verbindung einer IaaS Open Source-VM mit einem VPC-Netzwerk und die Zuweisung einer statischen IP.

## Voraussetzungen
*   Eine VPC und ein privates Netzwerk wurden erstellt.
*   Eine IaaS Open Source-VM wurde bereitgestellt.

## Schritt 1: Netzwerkschnittstelle auf der VM erstellen

1.  Greifen Sie auf die Detailansicht Ihrer virtuellen Maschine zu.
2.  Gehen Sie zum Reiter **Netzwerkschnittstellen**.
3.  Klicken Sie auf die Schaltfläche, um eine Schnittstelle hinzuzufügen.
<img src={vpcCreateNetworkAdaptersVm} />

4.  Wählen Sie im modalen Fenster Ihr VPC-Netzwerk aus.
<img src={vpcCreateNetworkAdaptersVmModale} />
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

5.  Bestätigen Sie die Erstellung. Notieren Sie die für die Schnittstelle generierte MAC-Adresse.

## Schritt 2: Statische IP in der VPC erstellen

1.  Greifen Sie auf Ihre VPC zu, Reiter **Statische IPs**.
2.  Erstellen Sie bei Bedarf einen neuen Pool oder eine neue statische IP.
<img src={vpcStaticIps} />

## Schritt 3: IP der MAC-Adresse zuordnen

1.  Wählen Sie die statische IP aus, die Sie zuweisen möchten.
2.  Klicken Sie auf die Zuordnungsaktion (oder "MAC-Adresse zuordnen").
3.  Geben Sie im modalen Fenster die MAC-Adresse der in Schritt 1 erstellten Netzwerkschnittstelle ein oder wählen Sie sie aus.
<img src={vpcMacAddressAssociateModale} />

4.  Bestätigen Sie.
