---
title: Configurare un IP Statico e una VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcStaticIps from '../images/vpc_static_ips.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Configurare un IP Statico e una VM

Questo tutorial ti guida nel collegare una macchina virtuale IaaS Open Source a una rete VPC e assegnarle un IP statico.

## Prerequisiti
*   Avere un VPC e una rete privata creati.
*   Avere una VM IaaS Open Source distribuita.

## Passo 1: Creare l'adattatore di rete sulla VM

1.  Accedi alla visualizzazione dei dettagli della tua macchina virtuale.
2.  Vai alla scheda **Interfacce di Rete**.
3.  Clicca sul pulsante per aggiungere un'interfaccia.
<img src={vpcCreateNetworkAdaptersVm} />

4.  Nella finestra modale, seleziona la tua rete VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

5.  Convalida la creazione. Annota l'indirizzo MAC generato per l'interfaccia.

## Passo 2: Creare un IP Statico nel VPC

1.  Accedi al tuo VPC, scheda **IP Statici**.
2.  Se necessario, crea un nuovo pool o un nuovo IP statico.
<img src={vpcStaticIps} />

## Passo 3: Associare l'IP all'indirizzo MAC

1.  Seleziona l'IP statico che desideri assegnare.
2.  Clicca sull'azione di associazione (o "Associa un indirizzo MAC").
3.  Nella finestra modale, inserisci o seleziona l'indirizzo MAC dell'interfaccia di rete creata nel passo 1.
<img src={vpcMacAddressAssociateModale} />

4.  Convalida.
