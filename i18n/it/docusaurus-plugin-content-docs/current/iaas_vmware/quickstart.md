---
title: Guida di avvio
---
import shivaVmHome from '@site/docs/iaas_vmware/images/shiva_vm_home.png'
import shivaVmHomeDesc from '@site/docs/iaas_vmware/images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from '@site/docs/iaas_vmware/images/shiva_vm_home_alarme.png'
import shivaVmActions from '@site/docs/iaas_vmware/images/shiva_vm_actions.png'
import shivaVmInformations from '@site/docs/iaas_vmware/images/shiva_vm_informations.png'
import shivaVmBandeauRapide from '@site/docs/iaas_vmware/images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from '@site/docs/iaas_vmware/images/shiva_vm_vue_rapide.png'
import shivaVmInfosGenerales from '@site/docs/iaas_vmware/images/shiva_vm_infos_generales.png'
import shivaVmInfosAvancees from '@site/docs/iaas_vmware/images/shiva_vm_infos_avancees.png'
import shivaEditCpuRam from '@site/docs/iaas_vmware/images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from '@site/docs/iaas_vmware/images/shiva_vm_diskctrl_001.png'
import shivaCpool_010 from '@site/docs/iaas_vmware/images/shiva_cpool_010.png'
import shivaCpool_011 from '@site/docs/iaas_vmware/images/shiva_cpool_011.png'
import shivaCpool_012 from '@site/docs/iaas_vmware/images/shiva_cpool_012.png'
import shivaCatalogs from '@site/docs/iaas_vmware/images/shiva_catalogs.png'
import shivaCatalogs_002 from '@site/docs/iaas_vmware/images/shiva_catalogs_002.png'
import shivaVmTemplate_002 from '@site/docs/iaas_vmware/images/shiva_vm_template_002.png'
import shivaVmTemplate_001 from '@site/docs/iaas_vmware/images/shiva_vm_template_001.png'
import shivaVmAdv_001 from '@site/docs/iaas_vmware/images/shiva_vm_adv_001.png'
import shivaVmAdv_002 from '@site/docs/iaas_vmware/images/shiva_vm_adv_002.png'
import shivaVmAdv_003 from '@site/docs/iaas_vmware/images/shiva_vm_adv_003.png'
import shivaVmAdv_004 from '@site/docs/iaas_vmware/images/shiva_vm_adv_004.png'
import shivaCpool_001 from '@site/docs/iaas_vmware/images/shiva_cpool_001.png'
import shivaEsx_001 from '@site/docs/iaas_vmware/images/shiva_esx_001.png'
import shivaEsx_002 from '@site/docs/iaas_vmware/images/shiva_esx_002.png'
import shivaCpool_003 from '@site/docs/iaas_vmware/images/shiva_cpool_003.png'
import shivaCpool_004 from '@site/docs/iaas_vmware/images/shiva_cpool_004.png'
import shivaCpool_005 from '@site/docs/iaas_vmware/images/shiva_cpool_005.png'
import shivaCpool_009 from '@site/docs/iaas_vmware/images/shiva_cpool_009.png'
import shivaCpool_007 from '@site/docs/iaas_vmware/images/shiva_cpool_007.png'
import shivaCpool_008Build from '@site/docs/iaas_vmware/images/shiva_cpool_008_build.png'
import shivaCpool_008Firm from '@site/docs/iaas_vmware/images/shiva_cpool_008_firm.png'
import shivaCpool_006 from '@site/docs/iaas_vmware/images/shiva_cpool_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaVmPolitiquesBackupAssignMandatory from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_assign_mandatory.png'
import shivaVmPolitiquesBackup from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup.png'
import shivaVmDisquesVirtuelsPolitiques from '@site/docs/iaas_vmware/images/shiva_vm_disques_virtuels_politiques.png'
import shivaVmPolitiquesBackupExecute from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_execute.png'
import shivaVmPolitiquesBackupExecute2 from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_execute2.png'
import shivaVmPolitiquesBackupRetirer from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_retirer.png'
import shivaVmPolitiquesBackupRetirerImpossible from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_retirer_impossible.png'
import shivaBackupHeld_001 from '@site/docs/iaas_vmware/images/shiva_backup_held_001.png'
import shivaBackupHeld_002 from '@site/docs/iaas_vmware/images/shiva_backup_held_002.png'
import shivaVmBackupRestaurer from '@site/docs/iaas_vmware/images/shiva_vm_backup_restaurer.png'
import shivaVmBackupTest from '@site/docs/iaas_vmware/images/shiva_vm_backup_test.png'
import shivaVmBackup_2prod from '@site/docs/iaas_vmware/images/shiva_vm_backup_2prod.png'
import iaasVmwareClusterProvisionedMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_provisioned_memory.png'
import iaasVmwareClusterUsedMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_used_memory.png'
import iaasVmwareClusterWorstCaseAllocationMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_worst_case_allocation_memory.png'
import iaasVmwareEsxMemory from '@site/docs/iaas_vmware/images/iaas_vmware_esx_memory.png'

## Calcolo

### Gestione delle macchine virtuali

L'interfaccia di gestione delle tue macchine virtuali è disponibile nella Console nel menu __'IaaS'__ situato nella barra verde a sinistra dello schermo.

### Elenco delle macchine virtuali

Nella sezione __'Macchine virtuali'__, hai accesso all'elenco delle tue macchine virtuali ospitate sul tuo Cloud di fiducia.

<img src={shivaVmHome} />

Hai accesso alle seguenti informazioni, per ogni macchina virtuale:

- il nome,
- i tag assegnati,
- lo stato (spento, acceso, in elaborazione, host disconnesso o invalid),
- il gestore (in ambiente VMware, il Vcenter associato),
- il sistema operativo,
- La quantità di CPU virtuali (vCPU),
- La quantità di memoria virtuale (vRAM).

### Azioni sulle macchine virtuali

Le seguenti azioni sono possibili da questa interfaccia :

- Aggiornare l'elenco delle macchine virtuali ;
- Esportare l'elenco nel formato CSV ;
- Filtrare l'elenco ;
- Cercare una macchina virtuale per nome ;
- Creare una nuova macchina virtuale.

<img src={shivaVmHomeDesc} />

__Un banner di allerta può essere presente in alto nell'elenco__ : indica che sono state attivate allarmi critici su una o più delle tue macchine virtuali.
Il pulsante __'Visualizza'__ consente di consultare le macchine virtuali interessate da questa notifica.

<img src={shivaVmHomeAlarme} />

Quando fai clic sulla freccia a discesa verde sulla destra dell'elenco per una macchina virtuale :

<img src={shivaVmActions} />

Accedi a tutte le informazioni relative a essa :

<img src={shivaVmInformations} />

Una barra rapida consente di eseguire le seguenti azioni :

<img src={shivaVmBandeauRapide} />

- Accendere la macchina virtuale ;
- Spegnere ;
- Riavviare ;
- Modificare le opzioni di alimentazione del sistema operativo guest ;
- Aprire la console ;
- Montare un ISO ;
- Smontare un ISO ;
- Clonare la macchina virtuale ;
- Spostarla (vMotion) ;
- Rinominarla ;
- Eliminarla.

Una vista rapida offre una visualizzazione di __storage__, di __CPU__ e di __RAM__ della macchina virtuale.

<img src={shivaVmVueRapide} />

Nella scheda __'Informazioni generali'__, trovi informazioni dettagliate relative alla tua macchina virtuale, come il suo SO, la sua posizione fisica (datacenter, datastore, ecc.), la RAM, la CPU, gli indirizzi IP, i log e altro.

<img src={shivaVmInfosGenerales} />

Da questa vista, puoi eseguire le seguenti azioni :

- Modificare il sistema operativo (la macchina virtuale deve essere spenta),
- Aggiornare la versione dell'hardware (la macchina virtuale deve essere spenta),
- Modificare la RAM o la CPU.

Una scheda __'Avanzate'__ consente di consultare informazioni più specifiche come i dettagli "VMware Tools", la versione hardware, il manager, ecc...

<img src={shivaVmInfosAvancees} />

### Modifica della RAM o della CPU di una macchina virtuale

Vai alla scheda __'Macchine Virtuali'__, visualizza i dettagli di una macchina virtuale,
seleziona la scheda __'Informazioni generali'__ e fai clic sul pulsante di modifica della variabile da modificare :

<img src={shivaEditCpuRam} />

### Le modalità dei dischi

È possibile aggiungere diverse modalità dei dischi:

- __Persistente__ : Le modifiche vengono scritte immediatamente e definitivamente sul disco virtuale. __Questa è la modalità consigliata.__
- __Indipendente non persistente__ : Le modifiche apportate al disco virtuale vengono registrate in un nuovo log e eliminate allo spegnimento. Non influenzato dagli snapshot. __Non è supportato dal backup.__
- __Indipendente persistente__ : Le modifiche vengono scritte immediatamente e definitivamente sul disco virtuale. Non influenzato dagli snapshot. __Non è supportato dal backup.__

### Gestione dei controller della macchina virtuale

È possibile modificare il tipo di controller del disco per la propria macchina virtuale.

<img src={shivaVmDiskctrl_001} />

Le macchine virtuali possono essere dotate di controller SCSI e NVMe, con un limite di 4 controller per ciascun tipo. Ogni controller può gestire fino a 15 dischi.

Un controller SCSI può essere configurato con diversi sottotipi: Para Virtual, Bus Logic, LSI Logic o LSI Logic SAS.

Il controller Para Virtual si distingue per la sua capacità estesa. Può supportare fino a 64 dischi quando la versione hardware della macchina virtuale è compatibile con ESXi versione 6.7 o successiva.

> __Importante__ : Se si desidera modificare il tipo di un controller Para Virtual che dispone di più di 15 dischi, sarà necessario innanzitutto scollegare i dischi dagli slot interessati.

### Console di una macchina virtuale

La console di una macchina virtuale è accessibile dall'elenco delle macchine virtuali facendo clic sull'icona __'Console'__:

<img src={shivaCpool_010} />

Si apre una nuova scheda del browser e viene visualizzata la console della tua macchina, basata su un client __VNC__:

<img src={shivaCpool_011} />

È possibile nel menu __VNC__:

- richiedere l'invio di tasti particolari,
- forzare una mappatura della tastiera (nel caso in cui non sia stato possibile identificare correttamente la tua tastiera),
- aprire un campo di testo trasmissibile alla macchina. Questo metodo sostituisce il vecchio sistema degli appunti non funzionante,
- passare alla modalità a schermo intero.

__Nota__ :
Il ridimensionamento della finestra è automatico.

#### Supporto layout tastiera

La digitazione eseguita nella console dipende dal layout della tastiera del browser web, dal layout della tastiera della macchina virtuale e dall'attivazione o meno dell'opzione 'enforce keyboard' a sinistra dello schermo. Di seguito una sintesi delle situazioni possibili :

| Layout della tastiera della macchina fisica (input) | Layout della tastiera della macchina virtuale | Opzione 'enforce keyboard' selezionata | Risultato (output)        |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------ |
| Francese                                          | Francese                                  | No                                    | ✅                       |
| Francese                                          | Francese                                  | Sì                                    | Non consigliato            |
| Francese                                          | Inglese                                   | No                                    | Inglese                  |
| Francese                                          | Inglese                                   | Sì                                    | ✅                       |
| Inglese                                           | Francese                                  | No                                    | Francese                 |
| Inglese                                           | Francese                                  | Sì                                    | ✅                       |
| Inglese                                           | Inglese                                   | No                                    | ✅                       |
| Inglese                                           | Inglese                                   | Sì                                    | Non consigliato            |

__Nota__ :

- Se alcuni caratteri non passano durante la digitazione manuale, puoi provare tramite il clipboard.

#### Funzionamento degli appunti

Questa funzionalità consente di inviare l'intera stringa di caratteri alla tua macchina virtuale. È importante notare che il tasto "enforce keyboard" influisce sul modo in cui questa stringa di caratteri
verrà trasmessa alla tua macchina virtuale. Se durante la digitazione nella console riscontri che l'opzione "enforce keyboard" è necessaria, ricordati di attivarla prima di utilizzare gli appunti.  
Questa funzionalità può essere utilizzata per l'invio di una password, di un comando o del contenuto di un file di configurazione, ad esempio:

<img src={shivaCpool_012} />

Al clic sul pulsante "Paste", il contenuto del tuo campo di testo viene inviato alla tua macchina virtuale.

### Cataloghi di macchine virtuali Cloud Temple

Cloud Temple mette a disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dai nostri team.
Attualmente comprende diverse decine di `Templates` e immagini da montare sulle vostre macchine virtuali.

<img src={shivaCatalogs} />

Per pubblicare un ISO/OVF, è necessario accedere alla vista __'Catalogo'__ e fare clic sul pulsante __'pubblica file'__ in alto nella pagina :

<img src={shivaCatalogs_002} />

È possibile trasformare una VM in un modello ed esportarla nel catalogo. A tal fine, selezionare una macchina virtuale e utilizzare il pulsante di azione __'clone'__ :

<img src={shivaVmTemplate_002} />

Selezionare __'Esporta come vm-template'__ :

<img src={shivaVmTemplate_001} />

Compilare quindi le informazioni necessarie. Sarà quindi possibile distribuire una nuova VM a partire dal modello dal pulsante __'Nuova macchina virtuale'__ o dalla pagina __'Cataloghi'__. È anche possibile esportare la VM in formato OVF.

__Da sapere__: è possibile convertire un file OVA in OVF e viceversa.
Il metodo più comune utilizzato è VMware Converter, ma esiste anche un metodo semplice utilizzando ```tar```

Estrazione del file ova:

```
tar -xvf vmName.ova
```

Creazione di un file OVA a partire da un file OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Configurazione avanzata delle macchine virtuali: Extra Config

Le Extra Config forniscono un modo flessibile per includere coppie chiave=valore nella configurazione di una macchina virtuale. Le chiavi e i valori vengono interpretati dal sistema quando la macchina virtuale viene distribuita.

Ora è possibile modificare direttamente le proprietà di tipo __Extra Config__ nelle opzioni avanzate di una macchina virtuale:

<img src={shivaVmAdv_001} />

È possibile aggiungere una proprietà da un elenco di chiavi. Inoltre, è possibile modificare il valore di una chiave aggiunta manualmente. Le coppie chiave=valore già esistenti non sono modificabili.

Si prega di contattare il supporto per qualsiasi richiesta di aggiunta di nuove chiavi.

<img src={shivaVmAdv_002} />

__Nota__ : *Per l'utilizzo della GPU da parte della macchina virtuale, è obbligatorio abilitare la chiave 'pciPassthru.use64bitMMIO' e allocare la quantità di spazio MMIO (Memory-mapped I/O) necessaria tramite 'pciPassthru.64bitMMIOSizeGB'. Si consiglia vivamente di fare riferimento alla [documentazione ufficiale Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Configurazione avanzata delle macchine virtuali : vAPP

È possibile, inoltre, modificare le proprietà di tipo __vAPP__ nelle opzioni avanzate di una macchina virtuale :

<img src={shivaVmAdv_003} />

È possibile aggiungere una proprietà, modificarla o eliminarla. Sono proposti quattro tipi di proprietà : Stringa, Numero, Booleano, Password :

<img src={shivaVmAdv_004} />

__Nota__ : *La macchina virtuale deve essere arrestata per modificare le sue proprietà vAPP.*

### Gestione degli __'iperVisori'__ e degli __'Cpool'__ (cluster di iperVisori)

La gestione dei vostri iperVisori avviene nel sottomenu __'Calcolo'__ del menu __'IaaS'__, situato nella barra verde a sinistra dello schermo.

<img src={shivaCpool_001} />

In questo sottomenu, è disponibile una vista su:

- Lo stack software degli iperVisori, le loro AZ e le relative risorse,
- Lo stack software di backup.

A gennaio 2024, l'offerta di iperVisore disponibile sull'infrastruttura certificata Cloud Temple si basa su VMware. Il software di backup utilizzato è IBM Spectrum Protect Plus.

### Gestione dei cluster VMware

Per accedere alla gestione dei cluster VMware, fai clic nel sottomenu __'Calcolo'__ del menu __'IaaS'__ :

Per impostazione predefinita, la prima scheda elenca tutti gli hypervisor (tous cluster confondus):

<img src={shivaEsx_001} />

È possibile visualizzare i dettagli di un hypervisor facendo clic sul suo nome:

<img src={shivaEsx_002} />

È presente una scheda per ogni cluster di hypervisor per consultare i dettagli di ciascuno:

<img src={shivaCpool_003} />

Se fai clic su un cluster, vedi la sintesi della sua composizione :
- Il totale della potenza di calcolo espressa in GHz,
- Il totale della memoria disponibile e il rapporto di utilizzo,
- Il totale dello spazio di archiviazione (tous types confondus) nonché la quota di spazio utilizzata,
- I meccanismi di automazione in caso di indisponibilità di una lama di calcolo (__'Vsphere DRS'__),
- Il numero di macchine virtuali,
- Il numero di hypervisor.

#### Interpretare i dati di consumo visualizzati

<img src={iaasVmwareClusterProvisionedMemory} />

__Memoria allocata (Cluster) :__ Questo grafico rappresenta la quantità totale di memoria allocata al cluster.

<img src={iaasVmwareClusterUsedMemory} />

__Memoria consumata (Cluster) :__ Questa vista mostra la memoria attivamente consumata solo dalle macchine virtuali del cluster. Corrisponde alla memoria fisica effettivamente utilizzata dalle VM per le loro operazioni, che è un indicatore chiave del carico di lavoro attuale.

<img src={iaasVmwareClusterWorstCaseAllocationMemory} />

__Allocazione nel caso peggiore (Cluster) :__ Questo grafico illustra la memoria che sarebbe richiesta se tutte le macchine virtuali del cluster dovessero consumare simultaneamente l'intera memoria loro allocata (lo scenario di consumo massimo). Il risultato include anche la memoria necessaria per il funzionamento del cluster, nonché diversi parametri specifici di VMware (il calcolo non è semplicemente uguale alla somma della RAM di tutte le macchine virtuali). Ciò consente di anticipare le esigenze di risorse critiche e prevenire l'esaurimento della memoria.

<img src={iaasVmwareEsxMemory} />

__Memoria consumata (ESX) :__ A differenza dei grafici del cluster, questo mostra l'intera memoria consumata su un host ESX specifico. Include non solo la memoria utilizzata dalle macchine virtuali ospitate su questo host, ma anche la memoria consumata dal sistema dell'iperviseur stesso (overhead di ESXi).

<img src={shivaCpool_004} />

Vedrai visualizzati per ogni iperviseur nella scheda __'Hosts'__ :

- L'utilizzo __CPU__ e __Memoria__,
- Il numero di macchine virtuali assegnate,
- La disponibilità di un nuovo build per il sistema operativo dell'iperviseur, se del caso,
- Lo stato dell'iperviseur (connesso in produzione, in manutenzione, spento, ...),
- Un menu di azione.

<img src={shivaCpool_005} />

Dalla scheda __'Hosts'__ sono possibili diverse azioni :

- richiedere nuovi iperviseur tramite il pulsante __'Aggiungi host'__ :

<img src={shivaCpool_009} />

- possibilità di consultare __i dettagli di un iperviseur__ :

<img src={shivaCpool_007} />

- di mettere un iperviseur in __stato di manutenzione__ o di rimuoverlo,
- di __aggiornare__, se del caso, questo iperviseur; per farlo, __deve essere obbligatoriamente in manutenzione__. Esistono due tipi di aggiornamenti :

1. I build VMware (le nuove versioni dell'iperviseur):

<img src={shivaCpool_008Build} />

1. L'aggiornamento del firmware della tua blade di calcolo (bios e firmware delle schede di espansione):

<img src={shivaCpool_008Firm} />

*__Nota__* :

- *Cloud Temple mette a disposizione i build per gli iperviseur a intervalli regolari.
È importante aggiornare regolarmente i tuoi iperviseur, in particolare per consentire l'applicazione delle patch di sicurezza.
Tuttavia, __non aggiorniamo automaticamente i tuoi iperviseur__. Cloud Temple non ha visibilità sugli impegni di disponibilità dei tuoi workload.
Ti lasciamo quindi la responsabilità di implementare la tua gestione del cambiamento e di applicare i nuovi build nel momento migliore.*
- *Il processo di aggiornamento è completamente automatizzato. Devi disporre di almeno due iperviseur nel tuo cluster per consentire un aggiornamento senza interruzione del servizio.*

{/*TODO: Add missing page. */}
{/* -*È necessario disporre delle autorizzazioni adeguate per eseguire le diverse azioni.**/}

Vedrai anche l'insieme delle regole di affinità/anti-affinità per il tuo cluster di iperviseur nella sezione __'Regole'__.

### Gestione dell'affinità delle tue macchine virtuali

Le __regole di affinità e anti-affinità__ consentono di controllare la posizione delle macchine virtuali sui tuoi hypervisor.
Possono essere utilizzate per gestire l'utilizzo delle risorse del tuo __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro ad alto consumo di risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion consente di spostare le macchine virtuali da un host all'altro senza interruzione del servizio.

Puoi configurare tramite la gestione delle regole :

- __Regole di Affinità__ : Queste regole garantiscono che determinate macchine virtuali vengano eseguite sullo stesso host fisico.
Vengono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
tra loro sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
in cui le prestazioni sono critiche, come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di Anti-affinità__ : Al contrario, queste regole garantiscono che determinate macchine virtuali non vengano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
per evitare che macchine critiche vengano tutte interessate in caso di guasto di un singolo server.
Le regole di anti-affinità sono cruciali per le applicazioni che richiedono un'alta disponibilità,
come negli ambienti di produzione dove la tolleranza ai guasti è una priorità.
Ad esempio, non si desidera che i propri due Active Directory si trovino sullo stesso hypervisor.

Durante la creazione di una regola, puoi definire il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Stato'__) e le macchine interessate del tuo cluster di hypervisor.

<img src={shivaCpool_006} />

*Nota: le regole di affinità/anti-affinità proposte nella console sono regole relative alle macchine virtuali tra loro (nessuna regola tra hypervisor e macchine virtuali).*

## Backup

### Creare una politica di backup

Per aggiungere una nuova politica di backup, è necessario inviare una richiesta al supporto. Il supporto è accessibile tramite l'icona del salvagente in alto a destra nella finestra.

La creazione di una nuova politica di backup viene effettuata tramite __una richiesta di servizio__ indicando:

    Il nome della tua Organizzazione
    Il nome di un referente con la sua email e numero di telefono per completare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)

<img src={shivaSupport} />

### Assegnare una politica di backup a una macchina virtuale

Quando viene assegnata una SLA a una macchina virtuale (VM), tutti i dischi associati a tale VM ereditano automaticamente la stessa SLA. Successivamente, è possibile avviare manualmente l'esecuzione del backup tramite la scheda "Politiche di backup". In assenza di un'avvio manuale, il backup verrà eseguito automaticamente in base al piano configurato dall'SLA.

SecNumCloud rende obbligatoria l'assegnazione di una politica di backup a una macchina virtuale prima del suo avvio. In caso contrario, riceverai la seguente notifica:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Fai clic sulla scheda __'Politiche di backup'__ nel menu della tua macchina virtuale. Puoi visualizzare la o le politiche di backup assegnate a tale macchina.

Per assegnare una nuova politica di backup alla macchina virtuale, fai clic sul pulsante __'Aggiungi una politica'__ e seleziona la politica di backup desiderata.

<img src={shivaVmPolitiquesBackup} />

### Assegnare una politica di backup a un disco virtuale

È inoltre possibile assegnare una SLA direttamente a un disco virtuale specifico di una macchina. In questo caso, la macchina virtuale non eredita questa SLA applicata individualmente al disco. Tuttavia, non è possibile avviare manualmente l'esecuzione del backup a livello di disco, poiché questa funzionalità non è supportata in Spectrum Protect Plus.

Al contrario, è possibile escludere alcuni dischi da una o più politiche di backup (SLA) della VM, consentendo di disassegnare una o più SLA(s) su base disco per disco. Questo approccio offre la flessibilità di avviare manualmente l'esecuzione del backup di una SLA senza influenzare tutti i dischi della macchina virtuale, consentendo così una gestione più granulare dei backup.

Fare clic sulla barra delle azioni del disco a cui si desidera assegnare una politica di backup. Quindi, fare clic su __'Politiche'__ e selezionare la politica di backup desiderata.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota* : La politica da aggiungere deve trovarsi in una zona di disponibilità diversa dalla macchina virtuale.

### Eseguire una politica di backup

Nel menu __'Politiche di backup'__ della tua macchina virtuale, fai clic sul pulsante __'Esegui'__ nella colonna __'Azioni'__ della politica di backup che desideri eseguire.

<img src={shivaVmPolitiquesBackupExecute} />

Per eseguire una politica di backup, puoi anche partire dalla sezione __'Backup'__ nel menu di
tua macchina virtuale. Fai clic sul pulsante __'Esegui backup'__, quindi seleziona il backup che desideri eseguire dall'elenco a discesa.

<img src={shivaVmPolitiquesBackupExecute2} />

### Rimuovere una politica di backup

Nel menu __'Politiche di backup'__ della tua macchina virtuale, fai clic sul pulsante __'Rimuovi'__ nella colonna __'Azioni'__ della politica di backup che desideri rimuovere.

<img src={shivaVmPolitiquesBackupRetirer} />

__Attenzione, non è possibile rimuovere l'ultima SLA su una macchina virtuale accesa :__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Eliminazione di una politica di backup: caso di una politica di backup in stato "sospeso" ("held")

Quando l'ultima risorsa viene disassociata da una politica SLA, il sistema rileva automaticamente questa situazione. Di conseguenza, tutti i job correlati a questa politica SLA passano automaticamente allo stato "Sospeso" ("Held"). È importante notare che, a questo stadio, l'eliminazione diretta della politica SLA non è possibile a causa dell'esistenza di job dipendenti. Per procedere all'eliminazione della politica, è necessario seguire una serie di passaggi.

È necessario verificare che i job interessati siano effettivamente nello stato "Sospeso". Una volta effettuata questa verifica, tali job possono essere eliminati. Solo dopo aver eliminato questi job dipendenti la politica SLA potrà essere definitivamente rimossa dal sistema.

Un caso particolare merita un'attenzione specifica: l'aggiunta di una nuova risorsa a una politica SLA i cui job dipendenti non sono stati eliminati. In questa situazione, gli identificativi dei job verranno mantenuti. Tuttavia, è fondamentale notare che i job in stato "Sospeso" non riprenderanno automaticamente. Sarà necessario un intervento manuale per riattivarli e consentirne l'esecuzione.

nota: Per qualsiasi chiarimento su questa situazione, contattare il supporto Cloud Temple.

La console Cloud Temple impedisce l'assegnazione di una macchina virtuale a una politica sospesa:

<img src={shivaBackupHeld_001} />

Allo stesso modo, non è possibile avviare una macchina virtuale che è associata a una politica di backup sospesa:

<img src={shivaBackupHeld_002} />

### Ripristinare un backup

La scheda __'Backup'__ nel menu delle tue macchine virtuali ti consente di accedere all'elenco dei backup di ciascuna di esse.
Per ripristinare un backup, fai clic sul pulsante __'Ripristina'__ sulla riga corrispondente al backup che desideri ripristinare.

<img src={shivaVmBackupRestaurer} />

1. __Modalità produzione__ : La modalità produzione consente il ripristino dopo un incidente sul sito locale dallo storage primario o da un sito di disaster recovery remoto, sostituendo le immagini originali della macchina con le immagini di recupero. Tutte le configurazioni vengono trasferite nell'ambito del ripristino, inclusi nomi e identificatori, e tutti i job di copia dei dati associati alla macchina virtuale continuano a essere eseguiti. Nel contesto di un ripristino in modalità produzione, puoi scegliere di sostituire lo storage nella macchina virtuale con un disco virtuale proveniente da un backup di una macchina virtuale precedente.

2. __Modalità test__ : La modalità test crea macchine virtuali temporanee per lo sviluppo, il test, la verifica degli snapshot e la verifica del ripristino dopo un incidente in base a un piano ripetibile, senza impattare gli ambienti di produzione. Le macchine di test vengono eseguite per il tempo necessario a effettuare il test e la verifica, per poi essere eliminate. Tramite una rete isolata, puoi creare un ambiente sicuro per testare i tuoi job senza interferire con le macchine virtuali utilizzate per la produzione. Le macchine virtuali create in modalità test dispongono di nomi e identificatori univoci per evitare qualsiasi conflitto nel tuo ambiente di produzione.

3. __Modalità clone__ : La modalità Clone crea copie delle macchine virtuali per casi d'uso che richiedono copie permanenti o a esecuzione prolungata per l'esplorazione dei dati o la duplicazione di un ambiente di test su una rete isolata. Le macchine virtuali create in modalità clone dispongono di nomi e identificatori univoci per evitare qualsiasi conflitto nel tuo ambiente di produzione. In modalità clone, devi prestare attenzione al consumo delle risorse poiché la modalità clone crea macchine permanenti o a lungo termine.

__Il ripristino è impostato di default in modalità "TEST" per preservare la produzione__ ed è possibile scegliere il nome della vm ripristinata :

<img src={shivaVmBackupTest} />

Nota che se i test sono soddisfacenti, è possibile passare una macchina virtuale dalla modalità test alla modalità produzione :

<img src={shivaVmBackup_2prod} />