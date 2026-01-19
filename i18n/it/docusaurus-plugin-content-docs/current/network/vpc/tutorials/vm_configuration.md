---
title: Configurazione della rete della VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '../images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '../images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Network Configuration of the VM

This tutorial guides you through connecting a virtual machine to a VPC network and assigning it a static (private) IP address, as well as a public IP address if required.

## Prerequisiti
*   Disporre di un VPC e di una rete privata creati.
*   Disporre di una VM distribuita (IaaS Open Source o VMware).

## 1. Assegnazione di un indirizzo IP privato statico

È possibile fissare l'indirizzo IP privato della propria VM in due modi.

### Metodo A: Dalla Macchina Virtuale (Raccomandato)

Questo metodo ti permette di configurare rete e indirizzo IP in un'unica operazione durante la creazione dell'interfaccia.

1.  Accedi alla vista dettagliata della tua macchina virtuale.
2.  Vai alla scheda **Adattatori di rete**.
3.  Clicca sul pulsante **Nuovo adattatore di rete** per aggiungere un'interfaccia.
<img src={vpcCreateNetworkAdaptersVm} />

4.  Nella finestra modale, seleziona il tuo rete VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />

5.  Una volta selezionata la rete, scegli una delle IP statiche disponibili.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6.  Conferma la creazione.

> **Nota**: Puoi modificare in seguito l'adattatore di rete per cambiare rete, se necessario.

### Metodo B: Dalla vista Reti Private

Questo metodo è utile per prenotare un indirizzo IP prima della creazione della VM o per modificare un'associazione esistente.

1. Accedi alla vista dettagliata del tuo VPC, scheda **Reti Private**.
2. Espandi il pool di indirizzi IP della rete interessata.
3. Clicca sull'azione "Associa a un indirizzo MAC" per un indirizzo IP disponibile.
4. Nella finestra modale, associa una delle IP statiche a un indirizzo MAC di una VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Associating a Public IP (Optional)

If you want to make your VM accessible from the internet.

1.  From the detailed view of your VPC, go to the **Public IPs** tab.  
<img src={vpcDetailIpsPub} />

2.  Click the **Associate a public IP** button.

3.  In the modal, select the target private network and static IP, then confirm the association.  
<img src={vpcIpPubAssociate} />

4.  Once the association is complete, you can use this public IP address to access your VM.

## Configurazione del sistema operativo ospite

**Importante**: perché l'indirizzo IP statico (privato) venga assegnato correttamente, assicurati che l'interfaccia di rete del tuo sistema operativo ospite (OS) sia configurata in modalità **DHCP**. Il servizio DHCP del VPC si occuperà di assegnare l'indirizzo riservato.