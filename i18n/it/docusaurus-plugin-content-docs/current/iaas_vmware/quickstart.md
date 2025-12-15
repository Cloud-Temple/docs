---
title: Guida di avvio
---
import shivaVmHome from './images/shiva_vm_home.png'
import shivaVmHomeDesc from './images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from './images/shiva_vm_home_alarme.png'
import shivaVmActions from './images/shiva_vm_actions.png'
import shivaVmInformations from './images/shiva_vm_informations.png'
import shivaVmBandeauRapide from './images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from './images/shiva_vm_vue_rapide.png'
import shivaVmInfosGenerales from './images/shiva_vm_infos_generales.png'
import shivaVmInfosAvancees from './images/shiva_vm_infos_avancees.png'
import shivaEditCpuRam from './images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from './images/shiva_vm_diskctrl_001.png'
import shivaCpool_010 from './images/shiva_cpool_010.png'
import shivaCpool_011 from './images/shiva_cpool_011.png'
import shivaCpool_012 from './images/shiva_cpool_012.png'
import shivaCatalogs from './images/shiva_catalogs.png'
import shivaCatalogs_002 from './images/shiva_catalogs_002.png'
import shivaVmTemplate_002 from './images/shiva_vm_template_002.png'
import shivaVmTemplate_001 from './images/shiva_vm_template_001.png'
import shivaVmAdv_001 from './images/shiva_vm_adv_001.png'
import shivaVmAdv_002 from './images/shiva_vm_adv_002.png'
import shivaVmAdv_003 from './images/shiva_vm_adv_003.png'
import shivaVmAdv_004 from './images/shiva_vm_adv_004.png'
import shivaCpool_001 from './images/shiva_cpool_001.png'
import shivaEsx_001 from './images/shiva_esx_001.png'
import shivaEsx_002 from './images/shiva_esx_002.png'
import shivaCpool_003 from './images/shiva_cpool_003.png'
import shivaCpool_004 from './images/shiva_cpool_004.png'
import shivaCpool_005 from './images/shiva_cpool_005.png'
import shivaCpool_009 from './images/shiva_cpool_009.png'
import shivaCpool_007 from './images/shiva_cpool_007.png'
import shivaCpool_008Build from './images/shiva_cpool_008_build.png'
import shivaCpool_008Firm from './images/shiva_cpool_008_firm.png'
import shivaCpool_006 from './images/shiva_cpool_006.png'
import shivaSupport from '../console/images/shiva_support.png'
import shivaVmPolitiquesBackupAssignMandatory from './images/shiva_vm_politiques_backup_assign_mandatory.png'
import shivaVmPolitiquesBackup from './images/shiva_vm_politiques_backup.png'
import shivaVmDisquesVirtuelsPolitiques from './images/shiva_vm_disques_virtuels_politiques.png'
import shivaVmPolitiquesBackupExecute from './images/shiva_vm_politiques_backup_execute.png'
import shivaVmPolitiquesBackupExecute2 from './images/shiva_vm_politiques_backup_execute2.png'
import shivaVmPolitiquesBackupRetirer from './images/shiva_vm_politiques_backup_retirer.png'
import shivaVmPolitiquesBackupRetirerImpossible from './images/shiva_vm_politiques_backup_retirer_impossible.png'
import shivaBackupHeld_001 from './images/shiva_backup_held_001.png'
import shivaBackupHeld_002 from './images/shiva_backup_held_002.png'
import shivaVmBackupRestaurer from './images/shiva_vm_backup_restaurer.png'
import shivaVmBackupTest from './images/shiva_vm_backup_test.png'
import shivaVmBackup_2prod from './images/shiva_vm_backup_2prod.png'

## Calcolo

### Gestione delle macchine virtuali

L'interfaccia di gestione delle macchine virtuali è disponibile nella Console nel menu __'IaaS'__ situato sulla barra verde a sinistra dello schermo.

### Elenco delle macchine virtuali

Nella sezione __'Macchine virtuali'__, puoi accedere all'elenco delle tue macchine virtuali ospitate sul tuo Cloud di fiducia.

<img src={shivaVmHome} />

Per ciascuna macchina virtuale, hai accesso alle seguenti informazioni:

- il nome,
- i tag assegnati,
- lo stato (spenta, accesa, in elaborazione, host disconnesso o non valido),
- il manager (nell'ambiente VMware, il Vcenter associato),
- il sistema operativo,
- la quantità di CPU virtuali (vCPU),
- la quantità di memoria virtuale (vRAM).

### Azioni sulle macchine virtuali

Le seguenti azioni sono disponibili da questa interfaccia:

- Aggiornare l'elenco delle macchine virtuali;
- Esportare l'elenco nel formato CSV;
- Filtrare l'elenco;
- Cerca una macchina virtuale in base al nome;
- Creare una nuova macchina virtuale.

<img src={shivaVmHomeDesc} />

__Un banner di avviso può essere presente in cima all'elenco__: indica che sono state attivate delle allarmi critiche su una o più delle tue macchine virtuali.  
Il pulsante __'Visualizza'__ permette di consultare le macchine virtuali interessate da questa notifica.

<img src={shivaVmHomeAlarme} />

Quando fai clic sulla freccia verde a destra dell'elenco per una macchina virtuale:

<img src={shivaVmActions} />

accedi a tutte le informazioni relative a tale macchina:

<img src={shivaVmInformations} />

Un banner rapido permette di eseguire le seguenti azioni:

<img src={shivaVmBandeauRapide} />

- Accendere la macchina virtuale;
- Spegnere la macchina virtuale;
- Riavviare la macchina virtuale;
- Modificare le opzioni di alimentazione del sistema operativo ospite;
- Aprire la console;
- Montare un ISO;
- Smontare un ISO;
- Clonare la macchina virtuale;
- Spostarla (vMotion);
- Rinominarla;
- Eliminarla.

Una vista rapida offre una visualizzazione del __storage__, del __CPU__ e della __RAM__ della macchina virtuale.

<img src={shivaVmVueRapide} />

Nella scheda __'Informazioni generali'__, trovi informazioni dettagliate relative alla tua macchina virtuale, come il sistema operativo, il posizionamento fisico (datacenter, datastore, ecc.), la RAM, il CPU, gli indirizzi IP, i log e altro.

<img src={shivaVmInfosGenerales} />

Da questa vista puoi eseguire le seguenti azioni:

- Modificare il sistema operativo (la macchina virtuale deve essere spenta),
- Aggiornare la versione del hardware (la macchina virtuale deve essere spenta),
- Modificare la RAM o il CPU.

Una scheda __'Avanzate'__ permette di consultare informazioni più specifiche, come quelle relative a "VMware Tools", alla versione hardware, al manager, ecc.

<img src={shivaVmInfosAvancees} />

### Modifica RAM o CPU di una macchina virtuale

Vai alla scheda __'Macchine Virtuali'__, visualizza i dettagli di una macchina virtuale, seleziona la scheda __'Informazioni generali'__ e fai clic sul pulsante di modifica della variabile da modificare:

<img src={shivaEditCpuRam} />

### Disk modes

You can add different disk modes:

- __Persistent__: Changes are immediately and permanently written to the virtual disk. __This is the recommended mode.__
- __Non-persistent independent__: Changes made to the virtual disk are recorded in a new log file and deleted when the virtual machine is powered off. Not affected by snapshots. __Not supported by backup.__
- __Persistent independent__: Changes are immediately and permanently written to the virtual disk. Not affected by snapshots. __Not supported by backup.__

### Gestione dei controller della macchina virtuale

È possibile modificare il tipo di controller del disco per la propria macchina virtuale.

<img src={shivaVmDiskctrl_001} />

Le macchine virtuali possono essere dotate di controller SCSI e NVMe, con un limite massimo di 4 controller per tipo. Ogni controller può gestire fino a 15 dischi.

Un controller SCSI può essere configurato con diversi sottotipi: Para Virtual, Bus Logic, LSI Logic o LSI Logic SAS.

Il controller Para Virtual si distingue per la sua ampia capacità. Può supportare fino a 64 dischi quando la versione hardware della macchina virtuale è compatibile con un ESXi versione 6.7 o successiva.

> __Importante__: Se si desidera modificare il tipo di un controller Para Virtual che possiede più di 15 dischi, sarà necessario prima staccare i dischi dai relativi slot.

### Console di una macchina virtuale

La console di una macchina virtuale è accessibile dalla lista delle macchine virtuali facendo clic sull'icona __'Console'__:

<img src={shivaCpool_010} />

Si aprirà un nuovo tab del tuo browser, che mostrerà la console della tua macchina, basata su un client **VNC**:

<img src={shivaCpool_011} />

Nel menu **VNC** è possibile:
- richiedere l'invio di tasti particolari,
- forzare un mapping della tastiera (nel caso in cui non sia stato possibile identificare correttamente la tua tastiera),
- aprire un campo di testo trasmissibile alla macchina. Questo metodo sostituisce il vecchio appunti non funzionante,
- passare alla modalità schermo intero.

__Nota__:
Lo scaling della finestra avviene automaticamente.

#### Keyboard layout support
The input entered in the console depends on the keyboard language of your web browser, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option on the left side of the screen is enabled. Below is a summary of the possible scenarios:

| Physical machine keyboard language (input) | Virtual machine keyboard language | 'Enforce keyboard' option selected | Result (output)        |
| -------------------------------------------- | --------------------------------- | ---------------------------------- | ------------------------ |
| French                                       | French                            | No                                 | ✅                       |
| French                                       | French                            | Yes                                | Not recommended          |
| French                                       | English                           | No                                 | English                  |
| French                                       | English                           | Yes                                | ✅                       |
| English                                      | French                            | No                                 | French                   |
| English                                      | French                            | Yes                                | ✅                       |
| English                                      | English                           | No                                 | ✅                       |
| English                                      | English                           | Yes                                | Not recommended          |

__Note__:
- If certain characters do not appear during manual input, you can try using the clipboard.

#### Funzionamento degli appunti
Questa funzionalità ti permette di inviare una stringa di caratteri completa alla tua macchina virtuale. È importante notare che il pulsante "enforce keyboard" influisce sul modo in cui questa stringa di caratteri verrà trasmessa alla tua macchina virtuale. Se durante l'inserimento nella console riscontri che l'opzione "enforce keyboard" è necessaria, assicurati di attivarla prima di utilizzare la funzione degli appunti.  
Questa funzionalità può essere utilizzata per inviare una password, un comando o il contenuto di un file di configurazione, ad esempio:

<img src={shivaCpool_012} />

Al clic sul pulsante "Incolla", il contenuto del campo di testo viene inviato alla tua macchina virtuale.

### Cloud Temple Virtual Machine Catalogs

Cloud Temple vous met à disposition un catalogue de `Templates` régulièrement enrichi et mis à jour par nos équipes.  
Il comprend actuellement plusieurs dizaines de `Templates` et images pouvant être déployées sur vos machines virtuelles.

<img src={shivaCatalogs} />

Pour publier un ISO/OVF, rendez-vous dans la vue __'Catalogue'__ et cliquez sur le bouton __'Publier des fichiers'__ en haut de la page :

<img src={shivaCatalogs_002} />

Il est possible de transformer une machine virtuelle en modèle et de l'exporter dans le catalogue. Pour ce faire, sélectionnez une machine virtuelle et utilisez le bouton d'action __'Clone'__ :

<img src={shivaVmTemplate_002} />

Sélectionnez __'Exporter en vm-template'__ :

<img src={shivaVmTemplate_001} />

Renseignez ensuite les informations nécessaires. Il sera alors possible de déployer une nouvelle machine virtuelle à partir du modèle depuis le bouton __'Nouvelle machine virtuelle'__ ou depuis la page __'Catalogues'__. Il est également possible d'exporter la machine virtuelle au format OVF.

__Informations utiles__: il est possible de convertir un fichier OVA en OVF et inversement.  
La méthode la plus couramment utilisée est VMware Converter, mais une méthode simple existe également en utilisant ```tar```.

Extraction du fichier OVA :

```
tar -xvf vmName.ova
```

Création d'un fichier OVA à partir d'un fichier OVF :

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Avanzato configurazione delle macchine virtuali: Extra Config

Le impostazioni Extra Config forniscono un metodo flessibile per includere coppie chiave=valore nella configurazione di una macchina virtuale. Le chiavi e i valori vengono interpretati dal sistema al momento del deployment della macchina virtuale.

Ora puoi modificare autonomamente le proprietà di tipo __Extra Config__ nelle opzioni avanzate di una macchina virtuale:

<img src={shivaVmAdv_001} />

Puoi aggiungere una proprietà scegliendola da un elenco di chiavi. Inoltre, puoi modificare il valore di una chiave che hai aggiunto tu stesso. Le coppie chiave=valore già esistenti non sono modificabili.

Per richieste di aggiunta di nuove chiavi, contatta il supporto tecnico.

<img src={shivaVmAdv_002} />

__Nota__ : *Per l'utilizzo del GPU da parte della macchina virtuale, è obbligatorio abilitare la chiave 'pciPassthru.use64bitMMIO' e allocare la quantità di spazio MMIO (Memory-mapped I/O) necessaria tramite 'pciPassthru.64bitMMIOSizeGB'. È fortemente consigliato fare riferimento alla [documentazione ufficiale NVIDIA](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Advanced virtual machine configuration: vAPP

You can also modify __vAPP__ type properties in the advanced options of a virtual machine:

<img src={shivaVmAdv_003} />

You can add a property, modify an existing one, or remove it. Four types of properties are available: String, Number, Boolean, Password:

<img src={shivaVmAdv_004} />

__Note__: *The virtual machine must be stopped to modify its vAPP properties.*

### Management of __'hypervisors'__ and __'Cpool'__ (hypervisor clusters)

The management of your hypervisors is performed in the __'Compute'__ submenu under the __'IaaS'__ menu, located in the green bar on the left side of your screen.

<img src={shivaCpool_001} />

In this submenu, you have visibility on:

- The hypervisor software stack, their AZs and resources,
- The backup software stack.

As of January 2024, the available hypervisor offering on the Cloud Temple qualified infrastructure is based on VMware. The backup software used is IBM Spectrum Protect Plus.

### Gestione dei cluster VMware

Per accedere alla gestione dei cluster VMware, fare clic nel sotto-menu __'Calcolo'__ del menu __'IaaS'__:

Per impostazione predefinita, la prima scheda elenca tutti gli hypervisor (inclusi tutti i cluster):

<img src={shivaEsx_001} />

È possibile visualizzare i dettagli di un hypervisor facendo clic sul suo nome:

<img src={shivaEsx_002} />

Esiste una scheda per ogni cluster di hypervisor per consultare i dettagli di ciascuno:

<img src={shivaCpool_003} />

Facendo clic su un cluster, viene visualizzata una sintesi della sua composizione:

- Il totale della potenza di calcolo espressa in GHz,
- Il totale della memoria disponibile e il rapporto di utilizzo,
- Lo spazio totale di archiviazione (di tutti i tipi combinati) e la percentuale di utilizzo,
- I meccanismi di automazione in caso di indisponibilità di un nodo di calcolo (__'vSphere DRS'__),
- Il numero di macchine virtuali,
- Il numero di hypervisor.

<!-- TODO: Add missing page. -->
<!-- Al consultare la pagina di un cluster, sono disponibili diverse schede. La scheda __'Regole'__ consente di definire le [regole di affinità/anti-affinità](compute.md#gestione-dellaffinità-delle-tue-macchine-virtuali) -->

<img src={shivaCpool_004} />

Nella scheda __'Hosts'__ vengono visualizzati per ogni hypervisor:

- L'utilizzo di __CPU__ e __Memoria__,
- Il numero di macchine virtuali assegnate,
- La disponibilità di un nuovo build per il sistema operativo dell'hypervisor, se presente,
- Lo stato dell'hypervisor (connesso in produzione, in manutenzione, spento, ecc.),
- Un menu azioni.

<img src={shivaCpool_005} />

Dalla scheda __'Hosts'__ sono disponibili diverse azioni:

- richiedere nuovi hypervisor tramite il pulsante __'Aggiungi un host'__:

<img src={shivaCpool_009} />

- possibilità di consultare il __dettaglio di un hypervisor__:

<img src={shivaCpool_007} />

- entrare o uscire dal __modo di manutenzione__ un hypervisor,
- __aggiornare__ l'hypervisor, se necessario; per farlo, __deve essere obbligatoriamente in manutenzione__. Esistono due tipi di aggiornamenti:

1. I build VMware (nuove versioni dell'hypervisor):

<img src={shivaCpool_008Build} />

2. L'aggiornamento del firmware del nodo di calcolo (BIOS e firmware delle schede aggiuntive):

<img src={shivaCpool_008Firm} />

*__Nota__*:

- Cloud Temple mette a disposizione i build per gli hypervisor a intervalli regolari.
È importante aggiornare regolarmente gli hypervisor, in particolare per applicare i correttivi di sicurezza.
Tuttavia, __non aggiorniamo automaticamente gli hypervisor per conto vostro__. Cloud Temple non ha visibilità sugli impegni di disponibilità dei vostri carichi di lavoro.
Vi lasciamo quindi gestire autonomamente il processo di cambiamento e applicare i nuovi build al momento più opportuno.
- Il processo di aggiornamento è completamente automatizzato. È necessario disporre di almeno due hypervisor nel cluster per consentire un aggiornamento senza interruzioni del servizio.

<!-- TODO: Add missing page. -->
<!-- - *È necessario disporre delle [autorizzazioni appropriate](../console/permissions.md) per eseguire le diverse azioni.* -->

Nella sezione __'Regole'__ è inoltre possibile visualizzare l'insieme delle regole di affinità/anti-affinità per il cluster di hypervisor.

### Gestione dell'affinità delle macchine virtuali

Le __regole di affinità e anti-affinità__ consentono di controllare la posizione delle macchine virtuali sugli iperhost.
Possono essere utilizzate per gestire l'utilizzo delle risorse del tuo __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico tra i server o a isolare carichi di lavoro intensivi in termini di risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion permette di spostare macchine virtuali da un host all'altro senza interruzioni del servizio.

Puoi configurare tramite la gestione delle regole:

- __Regole di affinità__: queste regole garantiscono che alcune macchine virtuali vengano eseguite sullo stesso host fisico.
  Vengono utilizzate per migliorare le prestazioni mantenendo insieme le macchine virtuali che comunicano frequentemente,
  riducendo così la latenza di rete. Le regole di affinità sono utili in scenari in cui le prestazioni sono critiche,
  come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di anti-affinità__: al contrario, queste regole garantiscono che alcune macchine virtuali non vengano eseguite
  sullo stesso host fisico. Sono fondamentali per la disponibilità e la resilienza, ad esempio,
  per evitare che tutte le macchine critiche vengano colpite in caso di guasto di un singolo server.
  Le regole di anti-affinità sono essenziali per applicazioni che richiedono un'alta disponibilità,
  come negli ambienti di produzione dove la tolleranza ai guasti è una priorità.
  Ad esempio, non desideri che i tuoi due server Active Directory si trovino sullo stesso iperhost.

Durante la creazione di una regola, definisci il tipo di regola (affinità / anti-affinità), il nome della regola,
lo stato di attivazione (__'Stato'__) e le macchine coinvolte nel cluster degli iperhost.

<img src={shivaCpool_006} />

*Nota: le regole di affinità/anti-affinità disponibili nella console sono regole che riguardano le macchine virtuali tra loro (non regole tra iperhost e macchine virtuali).*

## Backup

### Create a backup policy

To create a new backup policy, you must submit a request to support. Support is accessible via the buoy icon in the top-right corner of the window.

Creating a new backup policy is done through a __service request__ specifying:

    Your Organization's name
    A contact name, email address, and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The retention characteristics (x days, y weeks, z months, ...)

<img src={shivaSupport} />

### Assegnare una politica di backup a una macchina virtuale

Quando una SLA viene assegnata a una macchina virtuale (VM), tutti i dischi associati a tale VM ereditano automaticamente la stessa SLA. In seguito, è possibile avviare manualmente il backup tramite la scheda "Politiche di backup". In assenza di un avvio manuale, il backup verrà eseguito automaticamente secondo il piano configurato dalla SLA.

SecNumCloud rende obbligatorio assegnare una politica di backup a una macchina virtuale prima del suo avvio. In caso contrario, verrà visualizzato il seguente messaggio di avviso:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Fai clic sulla scheda __'Politiche di backup'__ del menu della tua macchina virtuale. Qui potrai visualizzare la o le politiche di backup assegnate a tale macchina.

Per assegnare una nuova politica di backup alla macchina virtuale, fai clic sul pulsante __'Aggiungi una politica'__ e seleziona la politica di backup desiderata.

<img src={shivaVmPolitiquesBackup} />

### Assign a backup policy to a virtual disk

It is also possible to assign an SLA directly to a specific virtual disk of a machine. In this case, the virtual machine does not inherit this SLA applied individually to the disk. However, it is not possible to manually trigger backup execution at the disk level, as this functionality is not supported in Spectrum Protect Plus.

On the other hand, it is possible to exclude certain disks from one or more backup policies (SLAs) of the VM, which allows unassigning one or more SLAs on a per-disk basis. This approach provides the flexibility to manually trigger the backup execution of an SLA without affecting all disks of the virtual machine, enabling more granular backup management.

Click on the action bar of the disk to which you want to assign a backup policy. Then, click on __'Policies'__ and select the desired backup policy.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Note*: The policy to be added must reside in a different availability zone than the virtual machine.

### Eseguire una politica di backup

Nel menu __'Politiche di backup'__ della tua macchina virtuale, fai clic sul pulsante __'Esegui'__ nella colonna __'Azioni'__ della politica di backup che desideri eseguire.

<img src={shivaVmPolitiquesBackupExecute} />

Per eseguire una politica di backup, puoi anche partire dalla sezione __'Backup'__ nel menu della tua macchina virtuale. Fai clic sul pulsante __'Esegui il backup'__, quindi seleziona il backup che desideri eseguire nell'elenco a discesa.

<img src={shivaVmPolitiquesBackupExecute2} />

### Rimuovere una politica di backup

Nel menu __'Politiche di backup'__ della tua macchina virtuale, fai clic sul pulsante __'Rimuovi'__ nella colonna __'Azioni'__ della politica di backup che desideri rimuovere.

<img src={shivaVmPolitiquesBackupRetirer} />

__Attenzione, non è possibile rimuovere l'ultima SLA su una macchina virtuale attiva:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Deletion of a backup policy: case of a suspended backup policy ("held")

When the last resource is disassociated from an SLA policy, the system automatically detects this situation. As a result, all jobs associated with this SLA policy are automatically moved to the "Held" state. It is important to note that direct deletion of the SLA policy is not possible at this stage due to the presence of dependent jobs. To proceed with the deletion of the policy, a series of steps must be followed.

First, verify that the affected jobs are indeed in the "Held" state. Once this verification is complete, these jobs can be deleted. Only after removing these dependent jobs can the SLA policy be permanently erased from the system.

A special case requires particular attention: adding a new resource to an SLA policy whose dependent jobs have not been deleted. In this scenario, the job identifiers will be preserved. However, it is crucial to note that jobs in the "Held" state will not resume automatically. Manual intervention will be required to reactivate them and allow their execution.

note: For any clarification regarding this situation, contact Cloud Temple support.

The Cloud Temple console prevents assigning a virtual machine to a suspended policy:

<img src={shivaBackupHeld_001} />

Similarly, it is not possible to start a virtual machine associated with a suspended backup policy:

<img src={shivaBackupHeld_002} />

### Ripristinare un backup

L'opzione __'Backup'__ nel menu delle tue macchine virtuali ti permette di accedere all'elenco dei backup di tale macchina.

Per ripristinare un backup, fai clic sul pulsante __'Ripristina'__ nella riga corrispondente al backup che desideri ripristinare.

<img src={shivaVmBackupRestaurer} />

1. __Modalità produzione__: La modalità produzione consente il ripristino dopo un incidente sul sito locale dallo storage primario o da un sito di ripristino remoto, sostituendo le immagini originali della macchina con le immagini di ripristino. Tutte le configurazioni vengono trasferite durante il ripristino, inclusi nomi e identificatori, e tutti i processi di copia dati associati alla macchina virtuale continuano a essere eseguiti. Nella modalità di ripristino in produzione, puoi scegliere di sostituire lo storage della macchina virtuale con un disco virtuale proveniente da un backup precedente della macchina virtuale.

2. __Modalità test__: La modalità test crea macchine virtuali temporanee per sviluppo, test, verifica di snapshot e verifica del ripristino dopo incidenti, secondo un piano ripetibile, senza alcun impatto sugli ambienti di produzione. Le macchine di test vengono eseguite per il tempo necessario per completare il test e la verifica, dopodiché vengono eliminate. Grazie alla rete isolata, puoi creare un ambiente sicuro per testare i tuoi lavori senza interferire con le macchine virtuali utilizzate per la produzione. Le macchine virtuali create in modalità test hanno nomi e identificatori univoci per evitare conflitti nel tuo ambiente di produzione.

3. __Modalità clone__: La modalità clone crea copie delle macchine virtuali per casi d'uso che richiedono copie permanenti o a lungo termine, ad esempio per l'esplorazione dei dati o la duplicazione di un ambiente di test su una rete isolata. Le macchine virtuali create in modalità clone hanno nomi e identificatori univoci per evitare conflitti nel tuo ambiente di produzione. In modalità clone, devi prestare attenzione al consumo delle risorse poiché questa modalità crea macchine permanenti o a lungo termine.

__Il ripristino è impostato per impostazione predefinita in modalità "TEST" per preservare la produzione__, e puoi scegliere il nome della macchina virtuale ripristinata:

<img src={shivaVmBackupTest} />

Nota che, se i test sono soddisfacenti, è possibile passare una macchina virtuale dalla modalità test alla modalità produzione:

<img src={shivaVmBackup_2prod} />
