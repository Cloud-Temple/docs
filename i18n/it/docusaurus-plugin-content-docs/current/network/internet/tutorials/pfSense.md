---
title: Deploy a pfSense open source firewall
tags:
  - internet
  - tutorials
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

This guide will help you deploy your __open source pfSense firewall__ in the Cloud of Trust in just a few minutes.

## Prerequisiti

I prerequisiti per questa guida sono i seguenti:

1. Aver sottoscritto l'offerta Cloud Temple: è necessario disporre della propria organizzazione, del proprio tenant e degli accessi,
2. Disporre dei diritti sul modulo compute.

Questo documento descrive i passaggi da seguire per distribuire un firewall virtuale pfSense.

## Deploy a pfSense open source firewall

[pfSense](https://www.pfsense.org) is an open source project based on FreeBSD that allows you to set up a virtual firewall.

A pfSense firewall is managed via a web interface, so you need a second machine with a graphical interface that has an IP address in the same LAN network as the firewall in order to configure it.

We will need a set of two VMs:

- The first one will be the machine where we deploy the firewall
- The second one will be the machine from which we will administer the firewall

### Richiedi una consegna di accesso a Internet

Il primo passo consiste nel recuperare [le informazioni di accesso a Internet qui](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).  
È necessario disporre delle seguenti informazioni:

- prefisso pubblico  
- prefisso di interconnessione  
- gateway any-cast  
- intervallo IP  
- AS locale  
- AS di Cloud Temple  
- timer keepalive e timer hold-time  
- indirizzi dei route server

### Installazione e configurazione delle interfacce di rete

Successivamente, è possibile distribuire la tua VM pfSense:

1. __Installazione del firewall__ dal modello pfSense in Console:
    - [(Distribuisci tramite la console)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Distribuisci tramite Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configurazione delle interfacce LAN e WAN__ del firewall: l'interfaccia WAN deve essere nel tuo vLAN Internet, con un indirizzo IP estratto dall'intervallo IP fornito dal CDS, insieme alla gateway predefinita.
3. __Installazione della seconda macchina di gestione__.
4. __Configurazione dell'interfaccia__ della VM di gestione: questa macchina deve trovarsi nello stesso rete in cui è stata configurata l'interfaccia LAN del firewall.

### Accesso al Firewall

Una volta installate correttamente le due VM, la seconda fase consiste nell'accedere al firewall per iniziare la sua configurazione.

- accedere all'interfaccia web del firewall dalla VM di gestione:

<img src={pfSenseWebui} />
- accesso predefinito:
    - nome utente: *admin*
    - password: *pfsense* (ricordarsi di modificare la password predefinita)

<img src={pfSenseHomePage} />

### Configurazione del firewall  
Questa fase consiste nel configurare i vicini BGP del FW.

- In primo luogo, assicurati di autorizzare il traffico BGP su TCP 179 in __'Firewall > Rules'__:

<img src={pfSenseBgpRule} />

- Vai su __'Servizi > FRR BGP'__ per iniziare la configurazione della tua sessione BGP:

<img src={pfSenseFrrPackage} />

- Seleziona le prime due caselle e inserisci il numero del tuo AS locale e i tempi forniti dal CDS.  

<img src={pfSenseGeneralConf} />

### Configurazione dei vicini BGP

In **Neighbors**, fare clic su **+Add** per iniziare a creare i propri vicini BGP.

- Per ogni vicino: inserire l'indirizzo IP nel campo __'General Options > Name/address'__:

<img src={pfSenseNeighborConf} />

- Inserire il numero di AS remoto (corrispondente al numero di AS di cloud temple) nelle opzioni di base come segue:

<img src={bgpBasicOptions} />

- Infine, nelle opzioni avanzate, effettuare le seguenti configurazioni:

<img src={ebgpConf} />

- Selezionare la casella che definisce il tipo di vicino. Nel nostro caso, si tratta di un ``route server``:

<img src={routeServerNeighbor} />

- Al termine, non dimenticare di salvare le modifiche facendo clic su __'save'__:

<img src={neighborsOverview} />

### Verifica dello stato della sessione BGP con i neighbor

In Status, puoi vedere lo stato della sessione BGP che hai appena configurato.

<img src={pfSenseBgpStatus} />

Assicurati che lo __Stato BGP__ sia impostato su __established__.

### Annunciate il vostro prefisso pubblico

Per annunciare il vostro prefisso pubblico, potete creare route in /32 e redistribuirle come statiche:

- in __*System > Routing > Static Routes*__ : create le vostre route statiche in /32 impostando la Gateway su Null4-127.0.0.1
- in __*Services > FRR package > BGP > Network Distribution*__ : abilitate la funzionalità di ``redistribution`` locale scegliendo IPV4 in ``Redistribute`` le route statiche FRR.