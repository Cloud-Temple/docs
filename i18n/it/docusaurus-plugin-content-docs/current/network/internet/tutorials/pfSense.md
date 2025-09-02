---
title: Deployment di un firewall opensource pfSense
tags:
  - internet
  - tutorial
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

Questo tutorial vi aiuterà a installare il tuo __firewall opensource pfSense__ nel Cloud di fiducia in pochi minuti.

## Prerequisiti

I requis per il presente guida sono i seguenti:

1. Abbonamento all'offerta Cloud Temple: è necessario disporre dell'organizzazione, del tenente e degli accessi,
2. Permesso di accedere al modulo compute.

Il documento descrive le passaggi da seguire per eseguire il deployment di un firewall virtuale pfSense.

## Deployment of an open source pfSense firewall

[pfSense](https://www.pfsense.org) è un progetto open source basato su FreeBSD che consente di installare un firewall virtuale.

Un firewall pfSense viene gestito tramite un'interfaccia web, quindi è necessario disporre di una seconda macchina con un'interfaccia grafica dotata di un'indirizzo IP all'interno dello stesso rete LAN che ospita il firewall per poterlo configurare.

Avremo bisogno di un insieme di due VM:

- La prima sarà la macchina su cui verrà installato il firewall.
- La seconda sarà quella da cui verrà amministrata il firewall.

### Richiedere la consegna delle connessioni internet

La prima fase consiste nel recuperare [le informazioni di accesso internet qui seguono](https://docs.cloud-temple.com/network/internet/quickstart#management-of-your-internet-connections). È necessario avere le seguenti informazioni:

- prefix pubblico
- prefix interconnessione
- gateway anycast
- intervallo IP
- AS locale
- AS Cloud Temple
- tempi di keepalive e timer di tenuta
- indirizzi delle rotte server



### Installazione e configurazione delle interfacce di rete

Dopo aver installato il firewall pfSense, puoi procedere con la sua configurazione:

1. **Installazione del firewall** da template pfSense nello spazio Shiva:
    - [(Installazione tramite console)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Installazione tramite Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. **Configurazione delle interfacce LAN e WAN del firewall**: l'interfaccia WAN deve essere all'interno del tuo vLAN internet, il suo IP sarà preso nella gamma di indirizzi IP che ti è stata comunicata dal CDS insieme alla default Gateway.
3. **Installazione della seconda macchina di gestione**:
    - [(Configurazione della macchina di gestione)](../../../iaas_vmware/tutorials/configure_management_vm).
4. **Configurazione dell'interfaccia** della VM di gestione: questa macchina deve essere all'interno dello stesso network dell'interfaccia LAN del firewall configurata.

### Accesso al Firewall

Una volta che entramo nelle due VM, la seconda fase consiste ad accedere al firewall per iniziare la sua configurazione.

- accedere all'interfaccia web del firewall dalla VM di amministrazione:

<img src={pfSenseWebui} />
- login con i dati predefiniti:
    - username : *admin*
    - password : *pfsense* (ricorda di cambiare il password di default)

<img src={pfSenseHomePage} />

### Configurazione del firewall
Questa fase consiste a configurare i neighbors BGP del FW.

- Innanzitutto, assicurati di abilitare il flusso BGP su TCP 179 nel __'Firewall > Regole'__:

<img src={pfSenseBgpRule} />

- Passa poi in __'Servizi > FRR BGP'__ per avviare la configurazione della sessione BGP:

<img src={pfSenseFrrPackage} />

- Abilita le due prime case e specifica il numero AS locale e i tempi di vita che ti sono stati comunicati dal CDS.

<img src={pfSenseGeneralConf} />

### Configurazione dei vicini BGP

Nella scheda "Vicini", fai clic su "Aggiungi" per iniziare a creare i tuoi vicini BGP.

- Per ogni vicino: inserisci l'indirizzo IP nella sezione "Opzioni generali > Nome/indirizzo".

<img src={pfSenseNeighborConf} />

- Inserisci il remoto AS (che corrisponde al numero di AS di Cloud Temple) nelle opzioni di base come segue:

<img src={bgpBasicOptions} />

- Nella sezione "Opzioni avanzate", inserisci quanto segue:

<img src={ebgpConf} />

- Attiva la casella che definisce il tipo del tuo vicino. In questo caso, è un server di route:

<img src={routeServerNeighbor} />

- Ricorda di salvare le tue modifiche cliccando su "Salva":

<img src={neighborsOverview} />

### Verifica dello stato della sessione BGP con i vicini

Nella scheda "Stato", è possibile visualizzare lo stato della sessione BGP che hai recentement configurato

<img src={pfSenseBgpStatus} />

Assicurati che lo **stato BGP** sia a **stabilito**.

### Annunciare il propri prefix pubblico

Per annunciare il propri prefix pubblico, è possibile creare rotte in /32 e far la redistribuzione statica:

- Nel **System > Routing > Static Routes**: creare le rotte statiche in /32 impostando la Gateway a Null4- 127.0.0.1
- Nella **Services > FRR package > BGP > Network Distribution**: abilitare la ``redistribution`` locale selezionando IPV4 come ``Reditribute`` nei routing statico FRR
