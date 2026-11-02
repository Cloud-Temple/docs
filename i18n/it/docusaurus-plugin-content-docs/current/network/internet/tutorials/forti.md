---
title: Deployare un firewall virtuale Fortigate
tags:
  - internet
  - tutorials
---

import fortiSupport from '@site/docs/network/internet/images/forti_support.png';
import fortiSupportVm01 from '@site/docs/network/internet/images/forti_support_vm_01.png';
import fortiSupportVm02 from '@site/docs/network/internet/images/forti_support_vm_02.png';
import asn from '@site/docs/network/internet/images/asn.png';
import ipsPub from '@site/docs/network/internet/images/ips_pub.png';
import ipsInterco from '@site/docs/network/internet/images/ips_interco.png';
import fortiVmType01 from '@site/docs/network/internet/images/forti_vm_type_01.png';
import shivaCatalogues from '@site/docs/network/internet/images/shiva_catalogues.png';
import imgImport01 from '@site/docs/network/internet/images/img_import_01.png';
import imgImport02 from '@site/docs/network/internet/images/img_import_02.png';
import imgImport03 from '@site/docs/network/internet/images/img_import_03.png';
import imgImport04 from '@site/docs/network/internet/images/img_import_04.png';
import imgImport05 from '@site/docs/network/internet/images/img_import_05.png';
import imgImport06 from '@site/docs/network/internet/images/img_import_06.png';
import imgImport07 from '@site/docs/network/internet/images/img_import_07.png';
import imgImport08 from '@site/docs/network/internet/images/img_import_08.png';
import imgImport09 from '@site/docs/network/internet/images/img_import_09.png';
import imgImport10 from '@site/docs/network/internet/images/img_import_10.png';
import imgImport11 from '@site/docs/network/internet/images/img_import_11.png';
import imgImport12 from '@site/docs/network/internet/images/img_import_12.png';
import ipPlan01 from '@site/docs/network/internet/images/ip_plan_01.png';
import ipPlan02 from '@site/docs/network/internet/images/ip_plan_02.png';
import ipPlan03 from '@site/docs/network/internet/images/ip_plan_03.png';
import ipPlan04 from '@site/docs/network/internet/images/ip_plan_04.png';
import ipPlan05 from '@site/docs/network/internet/images/ip_plan_05.png';
import imgDeploy01 from '@site/docs/network/internet/images/img_deploy_01.png';
import imgDeploy02 from '@site/docs/network/internet/images/img_deploy_02.png';
import imgDeploy04 from '@site/docs/network/internet/images/img_deploy_04.png';
import imgDeploy05 from '@site/docs/network/internet/images/img_deploy_05.png';
import imgDeploy06 from '@site/docs/network/internet/images/img_deploy_06.png';
import imgDeploy07 from '@site/docs/network/internet/images/img_deploy_07.png';
import imgDeploy08 from '@site/docs/network/internet/images/img_deploy_08.png';
import imgDeploy09 from '@site/docs/network/internet/images/img_deploy_09.png';
import imgBackup01 from '@site/docs/network/internet/images/img_backup_01.png';
import imgBackup02 from '@site/docs/network/internet/images/img_backup_02.png';
import imgBackup03 from '@site/docs/network/internet/images/img_backup_03.png';
import imgBackup04 from '@site/docs/network/internet/images/img_backup_04.png';
import vmStart01 from '@site/docs/network/internet/images/vm_start_01.png';
import vmStart02 from '@site/docs/network/internet/images/vm_start_02.png';
import vmConsole01 from '@site/docs/network/internet/images/vm_console_01.png';
import vmBoot01 from '@site/docs/network/internet/images/vm_boot_01.png';
import vmBoot02 from '@site/docs/network/internet/images/vm_boot_02.png';
import vmBoot03 from '@site/docs/network/internet/images/vm_boot_03.png';
import vmBoot04 from '@site/docs/network/internet/images/vm_boot_04.png';

## Oggetto di questa guida

Questa guida dettagli gli passaggi essenziali per deployare efficacemente un firewall individuale o un cluster di firewall in un ambiente SecNumCloud.

**Nota:** *Le configurazioni presentate in questo documento fungono da guida di riferimento e devono essere attentamente adattate alle specificità tecniche, ai requisiti di sicurezza e agli obiettivi operativi propri di ciascun ambiente*

## Prerequisiti per questa guida

### Permessi necessari

Il deployment delle appliance virtuali richiede un accesso al tenant del cliente nella console Cloud Temple con i seguenti permessi specifici:

Se si utilizza il prodotto **OpenIaaS** :

| Nome del permesso                          | Descrizione del permesso                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                                |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione drs, ecc) |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse VMware                                                                          |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                        |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                             |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                              |
| activity_read                                 | Consultazione dei log e delle attività                                                                                    |

Se si utilizza il prodotto **Vmware** :

| Nome del permesso                          | Descrizione del permesso                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione drs, ecc)  |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                           |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                         |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                               |
| activity_read                                 | Consultazione dei log e delle attività                                                                                    |

Se si desidera utilizzare ***Terraform***, sono richiesti i seguenti permessi aggiuntivi :

| Nome del permesso                          | Descrizione del permesso                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| tag_read                                      | Consultazione dei tag, ad eccezione dei tag RTMS                                                                                   |
| tag_write                                     | Gestione dei tag, ad eccezione dei tag RTMS                                                                                        |
| iam_read                                      | Consultazione dei diritti utente                                                                                           |
| iam_write                                     | Gestione dei diritti utente                                                                                                |

L'immagine OVA dell'appliance da deployare deve essere disponibile prima di iniziare il processo. Le immagini Fortinet sono disponibili su [il sito di supporto](https://support.fortinet.com/welcome/). È necessario disporre di un account di supporto Fortinet.

Andare nella **sezione Download** poi **Firmware Images** :

<img src={fortiSupport} />

**Al 1° Luglio 2024, la versione 7.2 è raccomandata.**

L'immagine da recuperare è la FGT_VM64 in formato OVF/ZIP :

<img src={fortiSupportVm01} />

**Nota:** *Se si è sottoscritto un'unità d'opera firewall Fortinet, il supporto Cloud Temple può mettere a disposizione l'immagine in formato OVA nonché la licenza associata.*

| Unità d'opera di infrastruttura - FIREWALL VIRTUALI | Unità             | sku                     |
| :--------------------------------------------------- | :---------------- | :---------------------- |
| FIREWALL UTM -Fortigate Virtuale VM02V - senza vdom    | 1 cluster virtuale | csp:fr1:licence:fw:ftg2 |
| FIREWALL UTM -Fortigate Virtuale VM04V - senza vdom    | 1 cluster virtuale | csp:fr1:licence:fw:ftg4 |
| FIREWALL UTM -Fortigate Virtuale VM08V - senza vdom    | 1 cluster virtuale | csp:fr1:licence:fw:ftg8 |
| FIREWALL UTM -Fortigate - 5 vdom complementari     | 5 vdom            | csp:fr1:licence:fw:vdom |

### Informazioni di connettività di rete

È necessario disporre delle informazioni necessarie per stabilire la sessione BGP con il backbone. Questi dati sono disponibili nella console Cloud Temple, nella sezione Network → Internet → ASNs :

<img src={asn} />

È inoltre necessario disporre di un intervallo di indirizzi IP pubblici la cui estensione è in rapporto con il proprio bisogno. L'intervallo di indirizzi riservato è indicato nella console Cloud Temple alla sezione Network → Internet → IP pubbliche. Ecco un esempio :

<img src={ipsPub} />

Infine, è necessario disporre del blocco che vi è stato assegnato sulla rete di interconnessione BGP al fine di poter beneficiare di una rotta verso Internet. La rete di interconnessione Cloud Temple è la 100.64.0.0/16 e ogni accesso beneficia di un sotto-rete di interconnessione di tipo /28. Questa rete serve per l'istituzione della sessione BGP con il cuore di routing Cloud Temple. Questo intervallo si trova nella console Cloud Temple nella sezione Network → Internet → IPs di interconnessione. Ecco un esempio :

<img src={ipsInterco} />

**Nota:** *È necessario aver sottoscritto le unità d'opera associate di connettività Internet. Si vedranno quindi apparire le informazioni di connettività nella console Cloud Temple.*

## Architettura di rete tipo

L'architettura tipo di un deployment Cloud Temple è di tipo Cluster in continuità di attività. Implica la messa in opera e la sottoscrizione di almeno 2 zone di disponibilità in una regione.

Il deployment standard dei firewall si effettua in cluster, con un equipaggiamento in ciascuna zona di disponibilità SNC. Una rete virtuale assicura la sincronizzazione del cluster. Le porte WAN accedono a Internet tramite la rete di interconnessione.

Una configurazione iniziale è necessaria per stabilire le sessioni BGP, permettendo così la connettività Internet. I VLAN privati sono instradati verso le interfacce LAN del firewall virtuale tramite un trunk (aggregazione di reti di livello 2 tramite la tecnologia 802.1q).

**Nota:** *Sebbene non si tratti di un'architettura raccomandata, questa guida si applica anche ai deployment mono-AZ.*

## Importare l'appliance Fortinet nella console Cloud Temple

### Decompressione del file appliance

Dopo il download dal sito di supporto Fortinet, decomprimere il file ZIP per ottenere :

- I dischi virtuali VMDK dell'appliance,

- I file OVF che descrivono l'appliance per diversi formati di hardware virtuale VMware.

<img src={fortiSupportVm02} />

Ecco i tipi di template comunemente integrati nel .ZIP :

| Template                     | Compatible with                           |
| ---------------------------- | ----------------------------------------- |
| FortiGate-VM64.ovf           | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.hw13.ovf      | ESXI 6.5(Hardware Version 13) or later    |
| FortiGate-VM64.hw15.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64.hw17.ovf      | ESXI 7.0(Hardware Version 17) or later    |
| FortiGate-VM64.vapp.ovf      | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.nsxt.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64-ZNTA.vapp.ovf | ESXI 7.0(Hardware Version 17) or later    |

### Importare l'appliance nel proprio catalogo di immagini tramite la console Cloud Temple

Connettersi al proprio tenant all'interno della console Cloud Temple, poi andare in "**Catalogo**" e "**Pubblicare dei file**" :

<img src={shivaCatalogues} />

Scegliere un nome per la propria immagine. Si raccomanda di utilizzare : **FGT-VM-VERSIONE-AZ**, per esempio qui FGT-VM-*7.2.8*-*TH3S* :

<img src={imgImport01} />

Indicare quindi la libreria di immagini della zona di disponibilità **(1)**:

<img src={imgImport02} />

Scegliere quindi i file da pubblicare nella libreria **(2)**:

<img src={imgImport03} />

<img src={imgImport04} />

Cliccare quindi su "**pubblicare dei file**" :

<img src={imgImport05} />

Aspettare la fine del download dei propri file nella libreria :

<img src={imgImport06} />

<img src={imgImport07} />

*L'operazione è da ripetere per ciascuna zona di disponibilità in cui si desidera deployare un'appliance.*

Per esempio per la seconda zona PAR7S :

<img src={imgImport08} />

<img src={imgImport09} />

<img src={imgImport10} />

<img src={imgImport11} />

<img src={imgImport12} />

**Nota:**

- ***(1)*** *Ciascuna zona di disponibilità dispone di una libreria di immagini per gli hypervisor di questa zona.*

- ***(2)*** *per il file .ovf, prendere una versione il cui hardware virtuale è in versione compatibile con la versione degli hypervisor ESXi (al 1° luglio 2024, la versione massima supportata è la **v19** corrispondente agli ESX 7.0.x.).*

## Deployment dell'appliance Fortinet su una zona di disponibilità

### Pianificare il deployment della propria interconnessione BGP

È necessario selezionare un indirizzo IP di interconnessione per la futura appliance Firewall. Il primo indirizzo è sempre la gateway BGP Cloud Temple. Gli altri indirizzi sono quindi in principio disponibili (a meno che non si siano precedentemente deployati altri equipaggiamenti) :

<img src={ipPlan01} />

La regola vuole che si prendano gli IP liberi in sequenza :

<img src={ipPlan02} />

### Pianificare l'uso dei propri indirizzi IP pubblici

Tutti gli IP pubblici assegnati sono utilizzabili per il proprio tenant. La dimensione del sotto-rete dipende dalle unità d'opera sottoscritte.

<img src={ipPlan03} />

### Parametri di configurazione BGP4

Annotare le 3 informazioni importanti seguenti per il seguito della configurazione BGP4 :

<img src={ipPlan04} />

- **AS Partner** : il remote AS utilizzato per avviare la sessione BGP dal punto di vista del firewall, si tratta dell'AS Cloud Temple.

- **Route Servers** : i due peer BGP verso i quali avviare una sessione BGP.

- **Nome** : il numero di AS proprio del tenant; rimuovere il prefisso *AS* per conservare solo il numero.

<img src={ipPlan05} />

### Deployare l'appliance sull'infrastruttura

Dalla libreria della zona di disponibilità su cui si desidera installare l'appliance, selezionare il template poi "**Deploy**" :

<img src={imgDeploy01} />

Bisogna quindi nominare la macchina virtuale; si consiglia la seguente nomenclatura : FGT-VM-**0X**-**ROLE**-**AZ**

- **0X** :corrisponde al tipo di licenza Fortigate a cui si è sottoscritto :

<img src={fortiVmType01} />

- **ROLE** : Ad esempio INTERNET per un firewall di interconnessione INTERNET.

- **AZ** : La zona di disponibilità

<img src={imgDeploy02} />

Scegliere quindi il cluster di hypervisor target :

<img src={imgDeploy04} />

Scegliere il target di storage :

<img src={imgDeploy05} />

Indicare infine le informazioni di configurazione dell'appliance e in particolare le informazioni di indirizzamento ottenute precedentemente :

<img src={imgDeploy06} />

- **Token** : non indicare nulla

- **Configuration URL** : non indicare nulla

- **Hostname** : identico al nome dell'involucro della VM

- **DNS** : 208.91.112.53 et 208.91.112.2 (per impostazione predefinita, ma è possibile decidere di utilizzare altri DNS a propria discrezione)

- **Interface IP** : prima IP di interconnessione libera

- **Netmask** : netmask del range di interconnessione

- **Interface 2** : non configurata

Cliccare quindi su **Avanti**. Le informazioni di configurazione delle interfacce devono essere compilate. La prima interfaccia è da utilizzare per l'accesso internet; le altre sono temporaneamente impostate sul vlan dedicata all'alta disponibilità :

<img src={imgDeploy07} />

infine, cliccare su "**Deploy**".

<img src={imgDeploy08} />

<img src={imgDeploy09} />

Quando il deploy è terminato, la console Cloud Temple lo indica e l'appliance è ora visibile nelle macchine virtuali.

### Assegnazione di una policy di backup

In ambiente SecNumCloud, una macchina virtuale deve avere una policy di backup per avviarsi. È possibile configurarla nelle policy e avviare la task di inventario :

<img src={imgBackup01} />

<img src={imgBackup02} />

Assegnare la policy corrispondente al RPO desiderato, per impostazione predefinita è possibile scegliere una policy giornaliera :

<img src={imgBackup03} />

È possibile confermare la scelta :

<img src={imgBackup04} />

Se sono richieste policy aggiuntive (come in questo esempio 'daily' e 'monthly'), ripetere l'operazione per ogni policy aggiuntiva.

### Avvio della macchina virtuale

L'avvio della macchina virtuale si effettua dalla console Cloud Temple :

<img src={vmStart01} />

È possibile osservare la console e l'appliance Fortinet reboota nuovamente al termine del primo Boot :

<img src={vmStart02} />

Dopo questo secondo boot, l'indirizzo IP indicato nel deploy della macchina virtuale alla sezione **OvfProperties**, deve rispondere al ping a condizione di un accesso alla rete di interconnessione.

## Configurazione iniziale

### Connessione alla console

Nella console Cloud Temple, selezionare l'appliance Fortinet e richiedere la console dell'appliance.

<img src={vmConsole01} />

A seconda del momento in cui si accede alla console, è stato possibile vedere il boot e il reboot iniziali di quest'ultima :

<img src={vmBoot01} />

<img src={vmBoot02} />

È quindi possibile connettersi alla console dell'appliance, il nome utente è "**admin**". L'appliance richiederà di cambiare la password (non ne esiste una predefinita, basta premere ENTER).

Bisogna quindi inserire una nuova password.

**Attenzione : l'appliance è in tastiera QWERTY.**

**In caso di errore di password, sarà necessario reinstallare l'appliance.**

<img src={vmBoot03} />

<img src={vmBoot04} />

### Configurazione della sessione BGP

In questa fase, si configurerà in modalità console l'appliance Fortinet per stabilire il link BGP4

#### Configurazione del range di IP Pubbliche

La prima fase consiste nel definire i range di indirizzi IP pubblici. Per iniziare, si configurerà solo il primo blocco. Si utilizzeranno le informazioni precedentemente annotate.

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

È quindi possibile verificare che la configurazione sia stata eseguita correttamente con il comando :

    show router prefix-list

#### Configurazione della route map

Una "route map policy" serve a definire policy di routing più complesse che possono influenzare o modificare il comportamento del traffico di rete in base a criteri specifici. Le route map sono particolarmente utili per attività avanzate di gestione del traffico, come il filtraggio delle route, la ridirezione del traffico, o la modifica degli attributi di route in protocolli di routing dinamico come BGP (Border Gateway Protocol). Nel nostro contesto, essa mira a proteggere la rete dagli annunci non validi.

La seconda fase consiste nel configurare la route map policy :

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

È quindi possibile verificare che la configurazione sia stata eseguita correttamente con il comando :

    show router route-map

#### Configurazione dell'annuncio BGP

Si configurerà ora l'annuncio BGP. È necessario disporre, come visto più sopra in questa guida, dell'IP di interconnessione (qui, il router-id), dell'indirizzo IP del peer BGP4 (qui, **100.64.0.1** et **100.64.0.2**), dell'AS locale (qui **4200000005**) e del range IP Pubblico precedentemente configurato. ***Ricordate*** :

<img src={ipPlan04} />

et

<img src={ipPlan05} />

In questa configurazione, l'AS (autonomous system) di Cloud Temple è il 33930. L'AS 65001 è un AS privato che rappresenta l'utente. L'utilizzo a questo livello di un numero AS privato è più pulito in particolare se più connessioni BGP devono essere configurate.

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

È quindi possibile verificare che le sessioni BGP siano stabilite :

    get router info bgp summary

#### Configurazione dell'indirizzo Loopback

Utilizzando l'indirizzo loopback per stabilire sessioni BGP tra peer, la stabilità della sessione viene migliorata. Gli indirizzi loopback non dipendono dallo stato di una specifica interfaccia fisica. Di conseguenza, anche se un'interfaccia va in guasto o se un percorso viene interrotto, la sessione BGP può rimanere attiva finché esiste un altro percorso di routing valido tra i peer. Questo aumenta la ridondanza e la resilienza della rete.

L'utilizzo di indirizzi loopback per le sessioni BGP consente inoltre di contribuire a rafforzare la sicurezza. Le policy di sicurezza possono essere applicate in modo più uniforme ed efficiente agli indirizzi loopback, e misure di sicurezza aggiuntive come l'autenticazione e le liste di controllo accessi possono essere più facilmente implementate.

Si consiglia di nominare l'indirizzo Loopback utilizzando la prima IP pubblica del primo range, che dovrebbe essere l'indirizzo predefinito per uscire su Internet : **LOOP_"PENULTIMO OTTETTO DELL'IP PUBBLICO"_"ULTIMO OTTETTO DELL'IP PUBBLICO"**

Ad esempio, se la prima IP Pubblica del primo range è 80.75.159.90/32, la loopback è nominata **LOOP_159.90**.
Nella riga di comando dell'appliance, digitare (**Attenzione 80.75.159.90/32 è qui un esempio !**):

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

Questo consente la configurazione iniziale del NAT, del DNS, della prevenzione delle intrusioni e dell'orologio. Ora, l'appliance deve essere in grado di pinging l'esterno se l'indirizzo IP sorgente è l'IP di NAT (qui in questo esempio 80.57.159.90).

**Si consiglia inoltre di cambiare la porta di amministrazione, che è per impostazione predefinita 80 o 443.**

#### Configurazione delle interfacce WAN e HA

Al fine di semplificare la leggibilità delle interfacce nella gestione dei dispositivi, si raccomanda di rinominare le interfacce in modo che il loro nome corrisponda al loro ruolo sul firewall. Questo si ottiene tramite la definizione di un alias sull'interfaccia.

Il port1 è definito come WAN e il port2 è rinominato HA. Per la porta di HA, viene definito un indirizzo IP nella subnet APIPA affinché i dispositivi possano unirsi in questo modo una volta in cluster.

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

### Deploy di un secondo membro

#### Deploy della seconda VM

Per deployare un secondo membro per la messa in cluster, è raccomandato disporre di una seconda AZ al fine di garantire l'alta disponibilità del cluster di firewall.

Per il deploy della seconda appliance, sarà necessario ripetere le azioni di deploy indicate precedentemente nella seconda AZ :

- Aggiunta del template OVF in una libreria di contenuti
- Deploy di una VM da questa libreria di contenuti
- Assegnazione di una policy di backup

Si raccomanda di mantenere la policy di nomina della VM, ovvero FGT-VM-0X-ROLE-AZ e per l'indirizzo IP della prima interfaccia, si tratterà di utilizzare la seconda IP libera del range di interconnessione.

#### Configurazione delle interfacce WAN e HA

Sempre nell'ottica di semplificare la leggibilità delle interfacce, queste devono essere rinominate sul secondo membro. Sarà inoltre necessario in questa fase configurare l'indirizzo IP dell'interfaccia di HA affinché i dispositivi possano comunicare per la messa in cluster.

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

### Messa in cluster

Si configurerà un clustering Attivo/Passivo. La password costituisce una chiave condivisa tra i due membri del cluster e dovrà essere conservata in modo sicuro. La comunicazione tra i dispositivi avviene in unicast e quindi l'IP peer da indicare è quello dell'interfaccia HA del firewall con cui stabilire il cluster.
Infine, le interfacce menzionate nella sezione *monitor* sono le interfacce monitorate, se il link L2 viene perso, ciò innesca un failover del cluster.

Sul primo dispositivo, si ottiene questa configurazione :

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

Infine, sul secondo, si cambierà l'indirizzo IP del peer e si abbasserà la priorità affinché il primo dispositivo venga eletto per impostazione predefinita come membro attivo del cluster :

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
Per una verifica completa, il comando *get sys ha status* è il comando indicato. Per verificare in modo più sintetico, è necessario eseguire *diag sys ha checksum cluster*
Quando la sincronizzazione è funzionante, i checksum della riga *all* devono essere identici sui due dispositivi.

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

Innanzitutto, si sposta la porta di amministrazione dalla porta 443 alla porta 8443 al fine di liberare una porta standard che può essere utilizzata per scopi di business.

```
config system global
 set admin-sport 8443
end
```

Aggiunta di un servizio custom per le regole di flusso da seguire:

```
config firewall service custom
    edit "TCP-8443"
        set tcp-portrange 8443
    next
end
```

Autorizzazione dell'amministrazione sull'interfaccia WAN e sull'interfaccia loopback. Sarà importante a questo passo adattare il nome dell'interfaccia LOOP come definito in precedenza:

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

Si crea quindi una regola di flusso che autorizza l'accesso alle interfacce di amministrazione sull'interfaccia loopback. Questa regola è molto permissiva, autorizza tutti gli indirizzi IP, è opportuno filtrare successivamente su intervalli esplicitamente consentiti.

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

Infine, si restringe l'autenticazione dell'account admin a intervalli di IP predefiniti. Questa è una forte raccomandazione di sicurezza di Cloud Temple.

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
