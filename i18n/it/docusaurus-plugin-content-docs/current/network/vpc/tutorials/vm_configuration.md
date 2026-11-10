---
title: Configurazione della rete della VM
---
import vpcCreateNetworkAdaptersVmModale from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '@site/docs/network/vpc/images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '@site/docs/network/vpc/images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '@site/docs/network/vpc/images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '@site/docs/network/vpc/images/vpc_mac_address_associate_modale.png'

# Configurazione della rete della VM

Questo tutorial vi guida nel collegare una macchina virtuale a una rete VPC e nell'assegnarle un indirizzo IP statico (privato) e, se necessario, un indirizzo IP pubblico.

## Prerequisiti

* Disporre di un VPC e di una rete privata creati.
* Disporre di una VM distribuita (IaaS Open Source o VMware).

## 1. Assegnazione di un indirizzo IP privato statico

È possibile fissare l'indirizzo IP privato della propria VM in due modi.

### Metodo A: Dalla Macchina Virtuale (Raccomandato)

Questo metodo vi permette di configurare rete e indirizzo IP in un'unica operazione durante la creazione dell'interfaccia.

1. Accedete alla vista dettagliata della vostra macchina virtuale.
2. Andate alla scheda **Adattatori di rete**.
3. Cliccate sul pulsante **Nuovo adattatore di rete** per aggiungere un'interfaccia.
<img src={vpcCreateNetworkAdaptersVm} />

4. Nella finestra modale, selezionate la vostra rete VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />

5. Una volta selezionata la rete, scegliete una delle IP statiche disponibili.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6. Confermate la creazione.

> **Nota**: Potete modificare in seguito l'adattatore di rete per cambiare rete, se necessario.

### Metodo B: Dalla vista Reti Private

Questo metodo è utile per prenotare un indirizzo IP prima della creazione della VM o per modificare un'associazione esistente.

1. Accedete alla vista dettagliata del vostro VPC, scheda **Reti Private**.
2. Espandete il pool di indirizzi IP della rete interessata.
3. Cliccate sull'azione "Associa a un indirizzo MAC" per un indirizzo IP disponibile.
4. Nella finestra modale, associate una delle IP statiche a un indirizzo MAC di una VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Associazione di un indirizzo IP pubblico (Opzionale)

Se desiderate rendere la vostra VM accessibile da Internet.

1. Dalla vista dettagliata del vostro VPC, accedete alla scheda **IP pubbliche**.  
<img src={vpcDetailIpsPub} />

2. Cliccate sul pulsante **Associa un IP pubblico**.

3. Nella finestra modale, selezionate la rete privata e l'IP statico di destinazione, quindi confermate l'associazione.  
<img src={vpcIpPubAssociate} />

4. Una volta effettuata l'associazione, potete utilizzare questo indirizzo IP pubblico per raggiungere la vostra VM.

## Configurazione del sistema operativo ospite

**Importante**: perché l'indirizzo IP statico (privato) venga assegnato correttamente, assicuratevi che l'interfaccia di rete del vostro sistema operativo ospite (OS) sia configurata in modalità **DHCP**. Il servizio DHCP del VPC si occuperà di assegnare l'indirizzo riservato.
