---
title: Configurazione di Rete della VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '../images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '../images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Configurazione di Rete della VM

Questo tutorial ti guida nel collegare una macchina virtuale a una rete VPC e assegnarle un IP statico (privato), così come un IP pubblico se necessario.

## Prerequisiti
*   Avere un VPC e una rete privata creati.
*   Avere una VM distribuita.

## 1. Assegnazione di un IP Privato Statico

Puoi fissare l'IP privato della tua VM in due modi.

### Metodo A: Dalla Macchina Virtuale (Consigliato)

Questo metodo ti permette di configurare la rete e l'IP in un unico passaggio durante la creazione dell'interfaccia.

1.  Accedi alla visualizzazione dei dettagli della tua macchina virtuale.
2.  Vai alla scheda **Adattatori di rete**.
3.  Clicca sul pulsante **Nuovo adattatore di rete** per aggiungere un'interfaccia.
<img src={vpcCreateNetworkAdaptersVm} />

4.  Nella finestra modale, seleziona la tua rete VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />

5.  Una volta selezionata la rete, scegli uno degli IP statici disponibili.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6.  Convalida la creazione.

> **Nota**: Puoi modificare l'adattatore di rete successivamente per cambiare rete se necessario.

### Metodo B: Dalla vista Reti Private

Questo metodo è utile per riservare un IP prima di creare la VM o per modificare un'associazione esistente.

1.  Accedi alla visualizzazione dettagliata del tuo VPC, scheda **Reti Private**.
2.  Espandi il pool di indirizzi IP della rete interessata.
3.  Clicca sull'azione "Associa a un indirizzo MAC" per un IP disponibile.
4.  Nella finestra modale, associa uno degli IP statici a un indirizzo MAC di una VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Associazione di un IP Pubblico (Opzionale)

Se desideri rendere la tua VM accessibile da Internet.

1.  Dalla visualizzazione dettagliata del tuo VPC, vai alla scheda **IP Pubblici**.
<img src={vpcDetailIpsPub} />

2.  Clicca sul pulsante **Associa un IP pubblico**.

3.  Nella finestra modale, seleziona la rete privata e l'IP statico di destinazione, quindi convalida l'associazione.
<img src={vpcIpPubAssociate} />

4.  Una volta effettuata l'associazione, puoi utilizzare questo indirizzo IP pubblico per raggiungere la tua VM.

## Configurazione del SO Ospite

**Importante**: Per garantire che l'IP statico (privato) venga assegnato correttamente, assicurati che l'interfaccia di rete del tuo sistema operativo ospite (OS) sia configurata in modalità **DHCP**. Il servizio DHCP del VPC assegnerà l'indirizzo riservato.
