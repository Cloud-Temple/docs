---
title: Distribuire un firewall opensource pfSense
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

Questa guida ti aiuterà a distribuire il tuo firewall open source pfSense nel Cloud Temple in pochi minuti.

## Prerequisiti

I prerequisiti per questa guida sono i seguenti:

1. Aver sottoscritto l'offerta Cloud Temple: devi disporre della tua organizzazione, del tuo tenant e dei tuoi accessi,
2. Avere i diritti sul modulo compute.

Questo documento descrive i passaggi da seguire per distribuire un firewall virtuale pfSense.

## Distribuire un firewall opensource pfSense

[pfSense](https://www.pfsense.org) è un progetto open source basato su freeBSD che consente di configurare un firewall virtuale.

Un firewall pfSense si amministra tramite un'interfaccia web, quindi è necessario disporre di una seconda macchina
con un'interfaccia grafica che abbia un indirizzo IP nella stessa rete LAN del firewall per poterlo configurare.

Avremo bisogno di un set di due VM:

- la prima sarà la macchina su cui distribuiremo il firewall
- la seconda sarà la macchina da cui amministreremo il firewall.

### Richiedere una connessione internet

Il primo passo consiste nel recuperare [le informazioni di accesso a Internet qui](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).
 Devi avere le seguenti informazioni:

- prefisso pubblico
- prefisso interconnessione
- gateway any-cast
- range IP
- AS locale
- AS di Cloud Temple
- timer keepalive e timer hold-time
- indirizzi dei server di routing

### Installazione e configurazione di rete delle interfacce

Puoi quindi distribuire la tua VM pfSense:

1. __Installazione del firewall__ dal template pfSense in Shiva:
    - [(Distribuire tramite la console)](/docs/iaas_vmware/tutorials/deploy_vm_template)
    - [(Distribuire tramite Terraform)](/docs/iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configurazione delle interfacce LAN e WAN__ del firewall: l'interfaccia WAN deve essere nel tuo vLAN internet, il suo IP sarà preso dal range IP che ti è stato comunicato dal CDS così come il default GW.
3. __Installazione della seconda macchina__ di gestione.
4. __Configurazione dell'interfaccia__ della VM di gestione: questa macchina deve essere nella stessa rete in cui è stata configurata l'interfaccia LAN del firewall.

### Accesso al Firewall

Una volta che le due VM sono state installate correttamente, il secondo passo consiste nell'accedere al firewall per iniziare la configurazione.

- Accedere all'interfaccia web del firewall dalla VM di gestione:

<img src={pfSenseWebui} />
- Login di default:
    - Username: *admin*
    - Password: *pfsense* (ricorda di cambiare la password di default)

<img src={pfSenseHomePage} />
### Configurazione del firewall
Questo passaggio consiste nel configurare i neighbors BGP del FW.

- Per prima cosa, autorizza il traffico BGP in TCP 179 in __'Firewall > Rules'__:

<img src={pfSenseBgpRule} />

- Vai in __'Services > FRR BGP'__ per iniziare la configurazione della tua sessione BGP:

<img src={pfSenseFrrPackage} />

- Spunta le prime due caselle e inserisci il numero del tuo AS locale e i timer come comunicato dal CDS.

<img src={pfSenseGeneralConf} />

### Configurazione dei neighbors BGP

In Neighbors, clicca su +Add per iniziare a creare i tuoi neighbors BGP.

- Per ogni neighbor: inserisci il suo indirizzo IP in __'General Options > Name/address'__

<img src={pfSenseNeighborConf} />

- Inserisci il remote AS (corrispondente al numero di AS di Cloud Temple) nelle Basic Options come segue:

<img src={bgpBasicOptions} />

- Infine, in Advanced Option, fai questo:

<img src={ebgpConf} />

- Seleziona la casella che definisce il tipo di neighbor. Nel nostro caso, è ``un route server``:

<img src={routeServerNeighbor} />

- Alla fine, ricordati di salvare le modifiche cliccando su __'Save'__:

<img src={neighborsOverview} />

### Verifica dello stato della sessione BGP con i neighbors

In Status, puoi vedere lo stato della sessione BGP che hai appena configurato

<img src={pfSenseBgpStatus} />

Assicurati che lo __BGP State__ sia su __Established__.

### Annunciare il proprio prefisso pubblico

Per annunciare il proprio prefisso pubblico, è possibile creare route in /32 e fare la redistribuzione in static:

- In __*System > Routing > Static Routes*__: crea le tue route static in /32 impostando la Gateway su Null4- 127.0.0.1
- In __*Services > FRR package > BGP > Network Distribution*__: attiva la ``redistribuzione`` in locale scegliendo IPV4 in ``Redistribute`` FRR static routes.
