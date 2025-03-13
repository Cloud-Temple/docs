---
title: Distribuire un firewall virtuale Fortigate
tags:
  - internet
  - tutorials
---

import fortiSupport from '../images/forti_support.png';
import fortiSupportVm01 from '../images/forti_support_vm_01.png';
import fortiSupportVm02 from '../images/forti_support_vm_02.png';
import asn from '../images/asn.png';
import ipsPub from '../images/ips_pub.png';
import ipsInterco from '../images/ips_interco.png';
import fortiVmType01 from '../images/forti_vm_type_01.png';
import shivaCatalogues from '../images/shiva_catalogues.png';
import imgImport01 from '../images/img_import_01.png';
import imgImport02 from '../images/img_import_02.png';
import imgImport03 from '../images/img_import_03.png';
import imgImport04 from '../images/img_import_04.png';
import imgImport05 from '../images/img_import_05.png';
import imgImport06 from '../images/img_import_06.png';
import imgImport07 from '../images/img_import_07.png';
import imgImport08 from '../images/img_import_08.png';
import imgImport09 from '../images/img_import_09.png';
import imgImport10 from '../images/img_import_10.png';
import imgImport11 from '../images/img_import_11.png';
import imgImport12 from '../images/img_import_12.png';
import ipPlan01 from '../images/ip_plan_01.png';
import ipPlan02 from '../images/ip_plan_02.png';
import ipPlan03 from '../images/ip_plan_03.png';
import ipPlan04 from '../images/ip_plan_04.png';
import ipPlan05 from '../images/ip_plan_05.png';
import imgDeploy01 from '../images/img_deploy_01.png';
import imgDeploy02 from '../images/img_deploy_02.png';
import imgDeploy03 from '../images/img_deploy_03.png';
import imgDeploy04 from '../images/img_deploy_04.png';
import imgDeploy05 from '../images/img_deploy_05.png';
import imgDeploy06 from '../images/img_deploy_06.png';
import imgDeploy07 from '../images/img_deploy_07.png';
import imgDeploy08 from '../images/img_deploy_08.png';
import imgDeploy09 from '../images/img_deploy_09.png';
import imgDeploy10 from '../images/img_deploy_10.png';
import imgDeploy11 from '../images/img_deploy_11.png';
import imgBackup01 from '../images/img_backup_01.png';
import imgBackup02 from '../images/img_backup_02.png';
import imgBackup03 from '../images/img_backup_03.png';
import imgBackup04 from '../images/img_backup_04.png';
import vmStart01 from '../images/vm_start_01.png';
import vmStart02 from '../images/vm_start_02.png';
import vmConsole01 from '../images/vm_console_01.png';
import vmBoot01 from '../images/vm_boot_01.png';
import vmBoot02 from '../images/vm_boot_02.png';
import vmBoot03 from '../images/vm_boot_03.png';
import vmBoot04 from '../images/vm_boot_04.png';

## Obiettivo di questa guida

Questa guida descrive i passaggi essenziali per distribuire efficacemente un firewall individuale o un cluster di firewall in un ambiente SecNumCloud.

**Nota:** *Le configurazioni presentate in questo documento servono come guida di riferimento e devono essere attentamente adattate alle specifiche tecniche, ai requisiti di sicurezza e agli obiettivi operativi specifici di ogni ambiente*

## Prerequisiti per questa guida

### Diritti necessari

La distribuzione degli appliance virtuali richiede un accesso al tenant del cliente nella console Cloud Temple con i seguenti permessi specifici:

Se utilizzi l'offerta **OpenIaaS**:

| Nome del permesso                            | Descrizione del permesso                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                             |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse VMware (regole affinità/anti-affinità, configurazione drs, ecc) |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse VMware                                                                      |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                       |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                            |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                         |
| activity_read                                 | Consultazione dei log e delle attività                                                                                         |

Se utilizzi l'offerta **Vmware**:

| Nome del permesso                            | Descrizione del permesso                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                               |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole affinità/anti-affinità, configurazione drs, ecc)  |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                        |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                         |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                           |
| activity_read                                 | Consultazione dei log e delle attività                                                                                         |

Se desideri utilizzare ***Terraform***, sono richiesti i seguenti permessi aggiuntivi:

| Nome del permesso                            | Descrizione del permesso                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                      |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                           |
| iam_read                                      | Consultazione dei diritti utente                                                                                               |
| iam_write                                     | Gestione dei diritti utente                                                                                                    |

L'immagine OVA dell'appliance da distribuire deve essere disponibile prima di iniziare il processo. Troverai le immagini Fortinet sul [sito del supporto](https://support.fortinet.com/welcome/). È necessario disporre di un account di supporto Fortinet.

Vai alla **sezione Download** e poi **Firmware Images**:

<img src={fortiSupport} />

**Al 1° luglio 2024, la versione 7.2 è raccomandata.**

L'immagine da scaricare è la FGT_VM64 in formato OVF/ZIP:

<img src={fortiSupportVm01} />

**Nota:** *Se hai sottoscritto un'unità di lavoro firewall Fortinet, il supporto Cloud Temple può mettere a disposizione l'immagine in formato OVA e la licenza associata.*

| Unità di lavoro dell'infrastruttura - FIREWALLS VIRTUALI | Unità            | sku                     |
| :------------------------------------------------------ | :---------------- | :---------------------- |
| FIREWALL UTM -Fortigate Virtuale VM02V - senza vdom     | 1 cluster virtuale | csp:fr1:licence:fw:ftg2 |
| FIREWALL UTM -Fortigate Virtuale VM04V - senza vdom     | 1 cluster virtuale | csp:fr1:licence:fw:ftg4 |
| FIREWALL UTM -Fortigate Virtuale VM08V - senza vdom     | 1 cluster virtuale | csp:fr1:licence:fw:ftg8 |
| FIREWALL UTM -Fortigate - 5 vdom complementari          | 5 vdom            | csp:fr1:licence:fw:vdom |

### Informazioni di connettività di rete

Devi disporre delle informazioni necessarie per stabilire la sessione BGP con il backbone. Questi dati sono disponibili nella console Cloud Temple, nella sezione Network → Internet → ASNs:

<img src={asn} />

Devi anche disporre di un intervallo di indirizzi IP pubblici la cui estensione sia in linea con le tue esigenze. L'intervallo di indirizzi riservato è indicato nella console Cloud Temple nella sezione Network → Internet → IP pubblici. Ecco un esempio:

<img src={ipsPub} />

Infine, devi disporre del blocco che ti è assegnato sulla rete di interconnessione BGP per poter beneficiare di una rotta verso Internet. La rete di interconnessione Cloud Temple è la 100.64.0.0/16 e ogni accesso beneficia di una sottorete di interconnessione di tipo /28. Questa rete serve per stabilire la sessione BGP con il core di routing Cloud Temple. Troverai questo intervallo nella console Cloud Temple nella sezione Network → Internet → IPs di interconnessione. Ecco un esempio:

<img src={ipsInterco} />

**Nota:** *Devi aver sottoscritto le unità di lavoro associate alla connettività Internet. Vedrai quindi apparire le informazioni di connettività nella console Cloud Temple.*

## Architettura di rete tipo

L'architettura tipo di un deployment Cloud Temple è di tipo Cluster in continuità di attività. Implica l'implementazione e la sottoscrizione ad almeno 2 zone di disponibilità in una regione.

Il deployment standard dei firewall viene effettuato in cluster, con un dispositivo in ciascuna zona di disponibilità SNC. Una rete virtuale assicura la sincronizzazione del cluster. Le porte WAN accedono a Internet tramite la rete di interconnessione.

Una configurazione iniziale è necessaria per stabilire le sessioni BGP, permettendo così la connettività Internet. Le VLAN private sono instradate verso le interfacce LAN del firewall virtuale tramite un trunk (aggregazione di reti di livello 2 tramite la tecnologia 802.1q).

**Nota:** *Sebbene non sia un'architettura raccomandata, questa guida si applica anche ai deployment mono-AZ.*

## Importare l'appliance Fortinet nella console Cloud Temple

### Decompressione del file appliance

Dopo il download dal sito di supporto Fortinet, decomprimi il file ZIP per ottenere:

- I dischi virtuali VMDK dell'appliance,

- I file OVF che descrivono l'appliance per diversi formati di hardware virtuale VMware.

<img src={fortiSupportVm02} />

Ecco i tipi di template comunemente integrati nel file .ZIP:

| Template                     | Compatible with                           |
| ---------------------------- | ----------------------------------------- |
| FortiGate-VM64.ovf           | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.hw13.ovf      | ESXI 6.5(Hardware Version 13) or later    |
| FortiGate-VM64.hw15.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64.hw17.ovf      | ESXI 7.0(Hardware Version 17) or later    |
| FortiGate-VM64.vapp.ovf      | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.nsxt.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64-ZNTA.vapp.ovf | ESXI 7.0(Hardware Version 17) or later    |

### Importare l'appliance nel tuo catalogo di immagini tramite la console Cloud Temple

Accedi al tuo tenant nella console Cloud Temple, poi vai in "**Catalogo**" e "**Pubblica file**":

<img src={shivaCatalogues} />

Scegli un nome per la tua immagine. Ti consigliamo di utilizzare: **FGT-VM-VERSIONE-AZ**, per esempio qui FGT-VM-*7.2.8*-*TH3S*:

<img src={imgImport01} />

Indica poi la libreria di immagini della zona di disponibilità **(1)**:

<img src={imgImport02} />

Scegli poi i file da pubblicare nella libreria **(2)**:

<img src={imgImport03} />

<img src={imgImport04} />

Clicca poi su "**pubblica file**":

<img src={imgImport05} />

Attendi la fine del caricamento dei tuoi file nella libreria:

<img src={imgImport06} />

<img src={imgImport07} />

*L'operazione va ripetuta per ogni zona di disponibilità in cui desideri distribuire un appliance.*

Per esempio per la seconda zona PAR7S:

<img src={imgImport08} />

<img src={imgImport09} />

<img src={imgImport10} />

<img src={imgImport11} />

<img src={imgImport12} />

**Nota:**

- ***(1)*** *Ogni zona di disponibilità dispone di una libreria di immagini per gli hypervisor di quella zona.*

- ***(2)*** *per il file .ovf, scegli una versione con hardware virtuale compatibile con la versione degli hypervisor ESXi (al 1° luglio 2024, la versione massima supportata è la **v19** corrispondente agli ESX 7.0.x.).*

## Distribuzione dell'appliance Fortinet su una zona di disponibilità

### Pianificare la distribuzione della tua interconnessione BGP

Devi selezionare un indirizzo IP di interconnessione per il tuo futuro appliance Firewall. Il primo indirizzo è sempre il gateway BGP Cloud Temple. Gli altri indirizzi sono quindi in linea di principio disponibili (a meno che tu non abbia precedentemente distribuito altri dispositivi):

<img src={ipPlan01} />

La regola vuole che si prendano gli IP liberi in sequenza:

<img src={ipPlan02} />

### Pianificare l'uso dei tuoi indirizzi IP pubblici

Tutti gli IP pubblici allocati sono utilizzabili per il tuo tenant. La dimensione della sottorete dipende dalle unità di lavoro sottoscritte.

<img src={ipPlan03} />

### Parametri di configurazione BGP4

Nota le 3 informazioni importanti seguenti per il proseguimento della configurazione BGP4:

<img src={ipPlan04} />

- **AS Partner**: il remote AS utilizzato per stabilire la sessione BGP dal punto di vista del firewall, si tratta dell'AS Cloud Temple.

- **Route Servers**: i due peer BGP verso cui stabilire una sessione BGP.

- **Nome**: il numero di AS proprio del tenant; rimuovere il prefisso *AS* per conservare solo il numero.

<img src={ipPlan05} />

### Distribuire l'appliance sull'infrastruttura

Dalla libreria della zona di disponibilità su cui desideri installare il tuo appliance, seleziona il template e poi "**Distribuisci**":

<img src={imgDeploy01} />

Devi poi nominare la macchina virtuale; ti consigliamo la seguente nomenclatura: FGT-VM-**0X**-**RUOLO**-**AZ**

- **0X**: corrisponde al tipo di licenza Fortigate che hai sottoscritto:

<img src={fortiVmType01} />

- **RUOLO**: Per esempio INTERNET per un firewall di interconnessione INTERNET.

- **AZ**: La zona di disponibilità

<img src={imgDeploy02} />

Scegli poi la zona di disponibilità:

<img src={imgDeploy03} />

Poi il cluster di hypervisor target:

<img src={imgDeploy04} />

Scegli la destinazione di storage:

<img src={imgDeploy05} />

Indica infine le informazioni di configurazione del tuo appliance e in particolare le informazioni di indirizzamento ottenute precedentemente:

<img src={imgDeploy06} />

- **Token**: non indicare nulla

- **Configuration URL**: non indicare nulla

- **Hostname**: identico al nome della VM

- **DNS**: 208.91.112.53 e 208.91.112.2 (di default, ma puoi decidere di utilizzare altri DNS a tua convenienza)

- **Interface IP**: primo IP di interconnessione libero

- **Netmask**: netmask dell'intervallo di interconnessione

- **Interface 2**: non configurata

Clicca poi su **Avanti**. Le informazioni di configurazione delle interfacce devono essere compilate. La prima interfaccia deve essere utilizzata per l'accesso internet; le altre sono temporaneamente messe sulla vlan dedicata all'alta disponibilità:

<img src={imgDeploy07} />

infine, clicca su "**Distribuisci**".

<img src={imgDeploy08} />

<img src={imgDeploy09} />

Quando la distribuzione è terminata, la console Cloud Temple te lo indica:

<img src={imgDeploy10} />

Il tuo appliance è ora visibile nelle macchine virtuali:

<img src={imgDeploy11} />

### Assegnazione di una politica di backup

In ambiente SecNumCloud, una macchina virtuale deve avere una politica di backup per avviarsi. Puoi configurarla nelle politiche e avviare l'attività di inventario:

<img src={imgBackup01} />

<img src={imgBackup02} />

Assegna la politica corrispondente all'RPO desiderato, di default puoi scegliere una politica giornaliera:

<img src={imgBackup03} />

Puoi confermare la tua scelta:

<img src={imgBackup04} />

Se sono richieste politiche aggiuntive (come in questo esempio 'daily' e 'monthly'), ripeti l'operazione per ogni politica aggiuntiva.

### Avvio della macchina virtuale

L'avvio della macchina virtuale si effettua dalla console Cloud Temple:

<img src={vmStart01} />

È possibile osservare la console e l'appliance Fortinet riavviarsi nuovamente al termine del primo boot:

<img src={vmStart02} />

Dopo questo secondo boot, l'indirizzo IP indicato nel deployment della macchina virtuale nella sezione **OvfProperties**, deve rispondere al ping a condizione di avere accesso alla rete di interconnessione.

## Configurazione iniziale

### Connessione alla console

Nella console Cloud Temple, seleziona il tuo appliance Fortinet e richiedi la console dell'appliance.

<img src={vmConsole01} />

A seconda del momento in cui accedi alla console, potresti aver visto l'avvio e il riavvio iniziali:

<img src={vmBoot01} />

<img src={vmBoot02} />

Puoi quindi connetterti alla console dell'appliance, il nome utente è "**admin**". L'appliance ti chiederà di cambiare la password (non ce n'è una predefinita, basta premere INVIO).

Dovrai quindi inserire una nuova password.

**Attenzione: L'appliance ha una tastiera QWERTY.**

**In caso di errore nella password, dovrai reinstallare l'appliance.**

<img src={vmBoot03} />

<img src={vmBoot04} />

### Configurazione della sessione BGP

In questa fase, configureremo in modalità console il tuo appliance Fortinet per stabilire il collegamento BGP4.

#### Configurazione del range di IP pubblici

Il primo passo consiste nel definire gli intervalli di indirizzi IP pubblici. Per iniziare, configureremo solo il primo blocco. Utilizzeremo le informazioni che hai precedentemente annotato.

    config router prefix-list
        edit "pfx_net_public_customer"
        config rule
        edit 1
            set prefix 80.75.159.90/31
                unset ge
                set le 32
            next
        edit 100
            set action deny
            set prefix 0.0.0.0 0.0.0.0
                unset ge
                unset le
            next
        end
    next
    edit "pfx_deny_all"
        config rule
            edit 1
                set action deny
                set prefix 0.0.0.0 0.0.0.0
                unset ge
                unset le
        next
        end
    next
    end

Puoi quindi verificare che la configurazione sia avvenuta correttamente con il comando:

    show router prefix-list

#### Configurazione della route map

Una "route map policy" serve a definire politiche di routing più complesse che possono influenzare o modificare il comportamento del traffico di rete basato su criteri specifici. Le route map sono particolarmente utili per compiti avanzati di gestione del traffico, come il filtraggio delle rotte, la reindirizzazione del traffico o la modifica degli attributi di rotta in protocolli di routing dinamico come BGP (Border Gateway Protocol). Nel nostro contesto, mira a proteggere la tua rete da annunci non validi.

Il secondo passaggio consiste nel configurare la route map policy:

    config router route-map
        edit "rm_deny_all"
            config rule
            edit 1
                set match-ip-address "pfx_deny_all"
            next
        end
        next
        edit "rm_net_public_customer"
            config rule
            edit 1
                set match-ip-address "pfx_net_public_customer"
            next
        end
        next
    end

Puoi quindi verificare che la configurazione sia avvenuta correttamente con il comando:

    show router route-map

#### Configurazione dell'annuncio BGP

Configureremo ora l'annuncio BGP. Devi avere in tuo possesso, come visto in precedenza in questa guida, l'IP di interconnessione (qui, il router-id), l'indirizzo IP del peer BGP4 (qui, **100.64.0.1** e **100.64.0.2**), il local AS (qui **4200000005**) e l'intervallo IP Pubblico precedentemente configurato. ***Ricorda***:

<img src={ipPlan04} />

e

<img src={ipPlan05} />

In questa configurazione, l'AS (autonomous system) di Cloud Temple è il 33930. L'AS 65001 è un AS privato che ti rappresenta. L'utilizzo a questo livello di un numero di AS privato è più appropriato soprattutto se devono essere configurate più connessioni BGP.

    config router bgp
        set as 65001
        set router-id **100.64.1.110**
        set network-import-check disable
        set graceful-restart enable
        config neighbor
            edit "100.64.0.1"
                set capability-graceful-restart enable
                set ebgp-enforce-multihop enable
                set next-hop-self enable
                set soft-reconfiguration enable
                set ebgp-multihop-ttl 3
                set remote-as 33930
                set local-as 4200000005
                set route-map-in "rm_deny_all"
                set route-map-out "rm_net_public_customer"
                set keep-alive-timer 10
                set holdtime-timer 30
            next
            edit "100.64.0.2"
                set capability-graceful-restart enable
                set ebgp-enforce-multihop enable
                set next-hop-self enable
                set soft-reconfiguration enable
                set ebgp-multihop-ttl 3
                set remote-as 33930
                set local-as 4200000005
                set route-map-in \"rm_deny_all\"
                set route-map-out \"rm_net_public_customer\"
                set keep-alive-timer 10
                set holdtime-timer 30
            next
        end

    config network
        edit 1
            set prefix 80.75.159.90/31
        next
    end
    config redistribute "connected"
    end
    config redistribute "static"
        set status enable
    end
    end

Puoi quindi verificare che le sessioni BGP siano attivate:

    get router info bgp summary

#### Configurazione dell'indirizzo di LoopBack

L'utilizzo dell'indirizzo di loopback per stabilire sessioni BGP tra peer migliora la stabilità della sessione. Gli indirizzi di loopback non dipendono dallo stato di una specifica interfaccia fisica. Di conseguenza, anche se un'interfaccia fallisce o se un percorso è interrotto, la sessione BGP può rimanere attiva fintanto che esiste un altro percorso di routing valido tra i peer. Questo aumenta la ridondanza e la resilienza della rete.

Utilizzare indirizzi di loopback per le sessioni BGP aiuta anche a rafforzare la sicurezza. Le politiche di sicurezza possono essere applicate in modo più uniforme ed efficace agli indirizzi di loopback, e misure di sicurezza aggiuntive come l'autenticazione e le liste di controllo degli accessi possono essere implementate più facilmente.

Consigliamo di nominare l'indirizzo di LoopBack utilizzando il primo IP pubblico del primo range, che dovrebbe essere l'indirizzo predefinito per uscire su Internet: **LOOP_"PENULTIMO OTTETTO DELL'IP PUBBLICO"_"ULTIMO OTTETTO DELL'IP PUBBLICO"**

Per esempio, se il tuo primo indirizzo IP Pubblico del primo range è 80.75.159.90/32, il loopback è nominato **LOOP_159_90**.
Nella riga di comando del tuo dispositivo, digita (**Attenzione 80.75.159.90/32 è qui un esempio!**):

```
    config system interface
        edit "LOOP_159_90"
        set vdom "root"
        set ip 80.75.159.90/32
        set allowaccess ping
        set type loopback
        next
    end
    config firewall ippool
        edit "NAT-PUB-ALL"
        set startip 80.75.159.90
        set endip 80.75.159.90
        next
    end
    config system dns
        set primary 96.45.45.45
        set secondary 96.45.46.46
        set source-ip 80.75.159.90
    end
    config system fortiguard
        set update-server-location eu
        set source-ip 80.75.159.90
    end
    config system ntp
        set ntpsync enable
        set source-ip 80.75.159.90
    end
```

Questo permette la configurazione iniziale del NAT, del DNS, della prevenzione delle intrusioni e dell'orologio. Ora il tuo dispositivo dovrebbe essere in grado di pingare l'esterno se l'indirizzo IP sorgente è l'IP del NAT (qui in questo esempio 80.75.159.90).

**Consigliamo anche di cambiare la porta di amministrazione, che di default è 80 o 443.**

#### Configurazione delle interfacce WAN e HA

Per semplificare la leggibilità delle interfacce nell'amministrazione dei dispositivi, raccomandiamo di rinominare le interfacce in modo che il loro nome corrisponda al loro ruolo nel firewall. Ciò avviene tramite la definizione di un alias sull'interfaccia.

Il port1 è definito come WAN e il port2 è rinominato HA. Per la porta HA, viene definito un indirizzo IP nel subnet APIPA in modo che i dispositivi possano connettersi in questo modo una volta in cluster.

```
config system interface
        edit "port1"
                set alias "WAN"
        next
        edit "port2"
                set ip 169.254.254.1 255.255.255.252
                set allowaccess ping
                set type physical
                set alias "HA"
                set snmp-index 2
        next
end
```

### Distribuzione di un secondo membro

#### Distribuzione della seconda VM

Per distribuire un secondo membro per il clustering, è consigliabile disporre di una seconda AZ per garantire un'alta disponibilità del cluster firewall.

Per la distribuzione del secondo dispositivo, ripetere le azioni di distribuzione indicate in precedenza nella seconda AZ:

- Aggiungere il template OVF a una libreria di contenuti
- Distribuire una VM da questa libreria di contenuti
- Assegnazione di una politica di backup

Consigliamo di mantenere la politica di denominazione della VM, ovvero FGT-VM-0X-ROLE-AZ e per l'indirizzo IP della prima interfaccia, utilizzare il secondo IP libero dell'intervallo di interconnessione.

#### Configurazione delle interfacce WAN e HA

Sempre con l'obiettivo di semplificare la leggibilità delle interfacce, queste devono essere rinominate sul secondo membro. Durante questa fase, configurare anche l'indirizzo IP dell'interfaccia HA affinché i dispositivi possano comunicare per il clustering.

```
config system interface
        edit "port1"
                set alias "WAN"
        next
        edit "port2"
                set ip 169.254.254.2 255.255.255.252
                set allowaccess ping
                set type physical
                set alias "HA"
                set snmp-index 2
        next
end
```

### Configurazione del cluster

Configureremo un clustering Attivo/Passivo. La password costituisce una chiave condivisa tra i due membri del cluster e deve essere conservata in modo sicuro. La comunicazione tra i dispositivi avviene in unicast e quindi l'IP del peer da indicare è quello dell'interfaccia HA del firewall con cui stabilire il cluster.
Infine, le interfacce menzionate nella sezione *monitor* sono le interfacce monitorate, se il link L2 viene perso, ciò attiverà un failover del cluster.

Sul primo dispositivo, questa è la configurazione:

```
config system ha
    set mode a-p
    set group-name "FTG-HA-INTERNET"
    set group-id 16
    set password SECRET
    set hbdev HA 10
    set priority 100
    set monitor "HA" "WAN"
    set unicast-hb enable
    set unicast-hb-peerip 169.254.254.2
end
```

Infine, sul secondo, cambiamo l'indirizzo IP del peer e aumentiamo la priorità in modo che il primo dispositivo sia eletto di default come membro attivo del cluster:

```
config system ha
    set mode a-p
    set group-name "FTG-HA-INTERNET"
    set group-id 16
    set password SECRET
    set hbdev HA 10
    set priority 200
    set monitor "HA" "WAN"
    set unicast-hb enable
    set unicast-hb-peerip 169.254.254.1
end
```

La sincronizzazione può richiedere alcuni minuti per stabilirsi.

Per una verifica completa, il comando *get sys ha status* è il comando indicato. Per verificare in modo più conciso, è necessario eseguire *diag sys ha checksum cluster*.
Quando la sincronizzazione è funzionale, i checksum della riga *all* devono essere identici su entrambi i dispositivi.

```
# diag sys ha checksum cluster

================== FG3H0ZZZNNNNNNN1 ==================

is_manage_primary()=1, is_root_primary()=1
debugzone
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb

checksum
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb

================== FG3H0ZZZNNNNNNN2 ==================

is_manage_primary()=0, is_root_primary()=0
debugzone
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb

checksum
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb
```

#### Configurazione degli accessi esterni sul firewall

Innanzitutto, spostiamo la porta di amministrazione dalla porta 443 alla porta 8443 per consentire la liberazione di una porta standard che può essere utilizzata per usi aziendali.

```
config system global
 set admin-sport 8443
end
```

Aggiunta di un servizio personalizzato per le regole di flusso da seguire:

```
config firewall service custom
    edit "TCP-8443"
        set tcp-portrange 8443
    next
end
```

Autorizzazione dell'amministrazione sull'interfaccia WAN e sull'interfaccia loopback. Sarà importante in questa fase adattare il nome dell'interfaccia LOOP come definito in precedenza:

```
edit port1
 set allowaccess ping https ssh http
next

config system interface
 edit "LOOP_0"
        set allowaccess ping https ssh http snmp
 next
end
```

Creiamo quindi una regola di flusso che autorizza l'accesso alle interfacce di amministrazione sull'interfaccia loopback. Questa regola è molto permissiva, autorizza tutti gli indirizzi IP, è opportuno filtrare successivamente su intervalli esplicitamente consentiti.

```
config firewall policy
    edit 1
        set name "WAN to LOOP"
        set srcintf "port1"
        set dstintf "LOOP_0"
        set action accept
        set srcaddr "all"
        set dstaddr "all"
        set schedule "always"
        set service "ALL_ICMP" "HTTP" "HTTPS" "SSH" "TCP-8443"
    next
end
```

Infine, limitiamo l'autenticazione dell'account admin a intervalli di IP prestabiliti. Questa è una forte raccomandazione di sicurezza di Cloud Temple.

```
config system admin
    edit "admin"
        set trusthost1 100.64.1.99/32
        set trusthost2 1.2.3.4/32
        set trusthost3 5.6.7.8/32
        set accprofile "super_admin"
        set vdom "root"
        set password SECRET
     next
end
```
