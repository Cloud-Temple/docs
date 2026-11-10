---
title: Distribuire un firewall open source pfSense
tags:
  - internet
  - tutorials
---
import pfSenseWebui from '@site/docs/network/internet/images/pfsense_webui.png';
import pfSenseHomePage from '@site/docs/network/internet/images/pfsense_home_page.png';
import pfSenseBgpRule from '@site/docs/network/internet/images/pfsense_bgp_rule.png';
import pfSenseFrrPackage from '@site/docs/network/internet/images/pfsense_frr_package.png';
import pfSenseGeneralConf from '@site/docs/network/internet/images/pfsense_general_conf.png';
import pfSenseNeighborConf from '@site/docs/network/internet/images/pfsense_neighbor_conf.png';
import bgpBasicOptions from '@site/docs/network/internet/images/bgp_basic_options.png';
import ebgpConf from '@site/docs/network/internet/images/ebgp_conf.png';
import routeServerNeighbor from '@site/docs/network/internet/images/route_server_neighbor.png';
import neighborsOverview from '@site/docs/network/internet/images/neighbors_overview.png';
import pfSenseBgpStatus from '@site/docs/network/internet/images/pfsense_bgp_status.png';

Questa guida vi aiuterà a distribuire il vostro __firewall open source pfSense__ nel Cloud di Fiducia in pochi minuti.

## Prerequisiti

I prerequisiti per questa guida sono i seguenti:

1. Aver sottoscritto l'offerta Cloud Temple: è necessario disporre della propria organizzazione, del proprio tenant e degli accessi,
2. Disporre dei diritti sul modulo compute.

Questo documento descrive i passaggi da seguire per distribuire un firewall virtuale pfSense.

## Distribuire un firewall open source pfSense

[pfSense](https://www.pfsense.org) è un progetto open source basato su FreeBSD che consente di realizzare un firewall virtuale.

Un firewall pfSense si amministra tramite un'interfaccia web: per configurarlo occorre quindi disporre di una seconda macchina con un'interfaccia grafica e un indirizzo IP nella stessa rete LAN del firewall.

Avremo bisogno di un insieme di due VM:

- la prima sarà la macchina su cui distribuiremo il firewall
- la seconda sarà la macchina da cui amministreremo il firewall.

### Richiedete una consegna di accesso a Internet

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

Successivamente, è possibile distribuire la vostra VM pfSense:

1. __Installazione del firewall__ dal modello pfSense in Console:
    - [(Distribuite tramite la console)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Distribuite tramite Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configurazione delle interfacce LAN e WAN__ del firewall: l'interfaccia WAN deve essere nel vostro vLAN Internet, con un indirizzo IP estratto dall'intervallo IP fornito dal CDS, insieme alla gateway predefinita.
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

- In primo luogo, assicuratevi di autorizzare il traffico BGP su TCP 179 in __'Firewall > Rules'__:

<img src={pfSenseBgpRule} />

- Andate su __'Services > FRR BGP'__ per iniziare la configurazione della vostra sessione BGP:

<img src={pfSenseFrrPackage} />

- Selezionate le prime due caselle e inserite il numero del vostro AS locale e i tempi forniti dal CDS.  

<img src={pfSenseGeneralConf} />

### Configurazione dei vicini BGP

In __Neighbors__, fare clic su __+Add__ per iniziare a creare i propri vicini BGP.

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

In Status, potete vedere lo stato della sessione BGP che avete appena configurato.

<img src={pfSenseBgpStatus} />

Assicuratevi che lo __BGP State__ sia impostato su __established__.

### Annunciate il vostro prefisso pubblico

Per annunciare il vostro prefisso pubblico, potete creare route in /32 e redistribuirle come statiche:

- in __*System > Routing > Static Routes*__ : create le vostre route statiche in /32 impostando la Gateway su Null4-127.0.0.1
- in __*Services > FRR package > BGP > Network Distribution*__ : abilitate la funzionalità di ``redistribution`` locale scegliendo IPV4 in ``Redistribute`` le route statiche FRR.
