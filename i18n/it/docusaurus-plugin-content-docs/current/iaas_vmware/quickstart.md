---
title: Guida rapida
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
import shivaCpool_011 from './images/shiva_cpool_011.jpg'
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
import shivaCpool_007 from './images/shiva_cpool_007.jpg'
import shivaCpool_008Build from './images/shiva_cpool_008_build.jpg'
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

### Gestione delle Macchine virtuali

L'interfaccia di gestione delle tue macchine virtuali è disponibile nella console Shiva nel menu __'IaaS'__ situato sulla barra verde a sinistra dello schermo.

### Lista delle macchine virtuali

Nella sezione __'Macchine virtuali'__, hai accesso alla lista delle tue macchine virtuali ospitate sul tuo Cloud di fiducia.

<img src={shivaVmHome} />

Hai accesso alle seguenti informazioni, per ogni macchina virtuale:
- il suo nome,
- i tag che le sono assegnati,
- il suo stato (spenta, accesa, in elaborazione, host disconnesso o non valido),
- il suo manager (in ambiente VMware, il Vcenter associato),
- il suo sistema operativo,
- La quantità di CPU virtuali (vCPU),
- La quantità di memoria virtuale (vRAM).

### Azioni sulle macchine virtuali

Le seguenti azioni sono possibili da questa interfaccia:

- Aggiornare la lista delle macchine virtuali;
- Esportare la lista in formato CSV;
- Filtrare la lista;
- Cercare una macchina virtuale per nome;
- Creare una nuova macchina virtuale.

<img src={shivaVmHomeDesc} />

__Un banner di avvisi può essere presente in cima alla lista__: indica che degli allarmi critici sono stati attivati su una o più delle tue macchine virtuali.
Il pulsante __'Vedi'__ permette di consultare le macchine virtuali interessate da questa notifica.

<img src={shivaVmHomeAlarme} />

Quando clicchi sulla freccia a discesa verde sulla destra della lista per una macchina virtuale:

<img src={shivaVmActions} />

Accedi a tutte le informazioni riguardanti la stessa:

<img src={shivaVmInformations} />

Una barra rapida permette di realizzare le seguenti azioni:

<img src={shivaVmBandeauRapide} />

- Accendere la macchina virtuale;
- Spegnerla;
- Riavviarla;
- Modificare le opzioni di alimentazione del SO ospite;
- Aprire la console;
- Montare un ISO;
- Smontare un ISO;
- Clonare la macchina virtuale;
- Spostarla (vMotion);
- Rinominarla;
- Eliminarla.

Una vista rapida offre una visualizzazione dello __storage__, della __CPU__ e della __RAM__ della macchina virtuale.

<img src={shivaVmVueRapide} />

Nella scheda __'Informazioni generali'__, trovi informazioni dettagliate relative alla tua macchina virtuale, come il suo OS, la sua posizione fisica (datacenter, datastore, ecc.), la RAM, la CPU, gli indirizzi IP, i log e altro.

<img src={shivaVmInfosGenerales} />

Da questa vista, puoi effettuare le seguenti azioni:

- Modificare il sistema operativo (la macchina virtuale deve essere spenta),
- Aggiornare la versione dell'hardware (la macchina virtuale deve essere spenta),
- Modificare la RAM o la CPU.

Una scheda __'Avanzato'__ permette di consultare informazioni più specifiche come le info "VMware tools", la versione hardware, il manager, ecc...

<img src={shivaVmInfosAvancees} />

### Modifica della RAM o della CPU di una macchina virtuale
Vai nella scheda __'Macchine Virtuali'__, visualizza i dettagli di una macchina virtuale,
seleziona la scheda __'Info generali'__ e clicca sul pulsante di modifica della variabile da modificare:

<img src={shivaEditCpuRam} />

### Le modalità dei dischi

Puoi aggiungere diverse modalità di dischi:
  - __Persistente__: Le modifiche vengono immediatamente e definitivamente scritte sul disco virtuale. **È la modalità consigliata.**
  - __Indipendente non-persistente__: Le modifiche apportate al disco virtuale sono registrate in un nuovo log e cancellate allo spegnimento. Non influenzato dagli snapshot. **Non è supportato dal backup.**
  - __Indipendente persistente__: Le modifiche vengono immediatamente e definitivamente scritte sul disco virtuale. Non influenzato dagli snapshot. **Non è supportato dal backup.**

### Gestione dei controller di macchina virtuale

Puoi modificare il tipo di controller del disco per la tua macchina virtuale.

<img src={shivaVmDiskctrl_001} />

Le macchine virtuali possono essere dotate di controller SCSI e NVME, con un limite di 4 controller per ciascun tipo. Ogni controller può gestire fino a 15 dischi.

Un controller SCSI può essere configurato con diversi sottotipi: Para Virtual, Bus Logic, LSI Logic o LSI Logic SAS.

Il controller Para Virtual si distingue per la sua capacità estesa. Può supportare fino a 64 dischi quando la versione hardware della macchina virtuale è compatibile con un ESXi in versione 6.7 o superiore.

> **Importante** : Se desideri modificare il tipo di un controller Para Virtual che ha più di 15 dischi, dovrai prima scollegare i dischi dagli slot interessati.

### Console d'une machine virtuelle

La console di una macchina virtuale è accessibile dall'elenco delle macchine virtuali facendo clic sull'icona __'Console'__ :

<img src={shivaCpool_010} />

Si aprirà una nuova scheda del tuo browser che mostrerà la console della tua macchina, basata su un client VNC:

<img src={shivaCpool_011} />

È possibile nel menu VNC:

- richiedere l'invio di tasti particolari,
- eseguire operazioni di copia/incolla dalla clipboard del tuo OS,
- passare alla modalità schermo intero,
- cambiare la dimensione della finestra (scaling).

La gestione della tastiera, con la console delle macchine virtuali, funziona perfettamente in un ambiente completamente *inglese*.

L'input effettuato nella console dipende dalla lingua della tastiera della tua macchina fisica, dalla lingua della tastiera della macchina virtuale e dall'attivazione o meno dell'opzione 'enforce keyboard' a sinistra dello schermo.
Di seguito una sintesi delle situazioni possibili con la lingua francese:

| Lingua della tastiera della macchina fisica (input) | Lingua della tastiera della macchina virtuale | Opzione 'enforce keyboard' selezionata | Risultato (output)                                   |
| --------------------------------------------------- | ------------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| Francese                                            | Francese                                    | No                                     | Sconsigliato (problema con i caratteri speciali)    |
| Francese                                            | Francese                                    | Sì                                     | < e > non funzionano                                |
| Francese                                            | Inglese                                     | No                                     | Sconsigliato (problema con i caratteri speciali)    |
| Francese                                            | Inglese                                     | Sì                                     | Inglese                                             |

| Inglese                                           | Francese                                  | No                                     | < e > non funzionano                            |
| Inglese                                           | Francese                                  | Sì                                     | < e > non funzionano                            |
| Inglese                                           | Inglese                                   | No                                     | Inglese                                         |
| Inglese                                           | Inglese                                   | Sì                                     | Inglese                                         |

__Nota__ :

- Se la combinazione __'AltGr'__ e __'@'__ sulla tastiera non funziona, attiva il pulsante __'enforce key'__ nel menu __'VNC'__ della console e riprova.
- Se ancora non funziona e il sistema operativo della macchina fisica è __Windows, imposta la tastiera della macchina fisica in inglese
e prova a inserire la @ in modo classico__ *(output azerty: AltGr + tasto dello 0 o output qwerty: tasto del 2)*.

### Catalogues de machines virtuelles Cloud Temple

Cloud Temple mette a vostra disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dai nostri team.
Comprende ad oggi diverse decine di `Templates` e immagini da montare sulle vostre macchine virtuali.

<img src={shivaCatalogs} />

Per pubblicare un ISO/OVF, è necessario andare nella vista __'Catalogue'__ e fare clic sul pulsante __'publier des fichiers'__ in alto alla pagina:

<img src={shivaCatalogs_002} />

È possibile trasformare una VM in un modello ed esportarla nel catalogo. Per fare ciò, selezionate una macchina virtuale e utilizzate il pulsante di azione __'clone'__:

<img src={shivaVmTemplate_002} />

Selezionate __'Exporter en vm-template'__:

<img src={shivaVmTemplate_001} />

Inserite poi le informazioni necessarie. Sarà quindi possibile distribuire una nuova VM dal modello tramite il pulsante __'Nouvelle machine virtuelle'__ o dalla pagina __'Catalogues'__. È anche possibile esportare la VM nel formato OVF.

**Da sapere**: è possibile convertire un file OVA in OVF e viceversa.
Il metodo più comune utilizzato è Vmware convertor, ma esiste anche un metodo semplice utilizzando ```tar```

Estrazione del file ova:
```
$ tar -xvf vmName.ova
```

Creare un file OVA da un file OVF:
```
$ tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Configurazione avanzata delle macchine virtuali: Extra Config

Gli Extra Config forniscono un mezzo flessibile per includere coppie chiave=valore nella configurazione di una macchina virtuale. Le chiavi e i valori sono interpretati dal sistema quando la macchina virtuale è distribuita.

Ora, potete voi stessi modificare le proprietà di tipo __Extra Config__ nelle opzioni avanzate di una macchina virtuale:

<img src={shivaVmAdv_001} />

Potete aggiungere una proprietà da un elenco di chiavi. Inoltre, potete modificare il valore di una chiave che avete voi stessi aggiunto. Le coppie chiave=valore esistenti non sono modificabili.

Contattate il supporto per qualsiasi richiesta di aggiunta di nuove chiavi.

<img src={shivaVmAdv_002} />

__Nota__ : *Per l'uso del GPU da parte della macchina virtuale, è obbligatorio abilitare la chiave 'pciPassthru.use64bitMMIO' e allocare la quantità di spazio MMIO (Memory-mapped I/O) necessaria tramite 'pciPassthru.64bitMMIOSizeGB'. Si consiglia vivamente di fare riferimento alla [documentazione ufficiale Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Configurazione avanzata delle macchine virtuali: vAPP

Potete anche modificare le proprietà di tipo __vAPP__ nelle opzioni avanzate di una macchina virtuale:

<img src={shivaVmAdv_003} />

Potete aggiungere una proprietà, modificarla o eliminarla. Sono disponibili quattro tipi di proprietà: Stringa, Numero, Booleano, Password:

<img src={shivaVmAdv_004} />

__Nota__ : *La macchina virtuale deve essere arrestata per modificare le sue proprietà vAPP.*

### Gestione degli __'hyperviseurs'__ e __'Cpool'__ (cluster di hypervisors)

La gestione dei vostri hypervisors avviene nel sottomenu __'Calcul'__ del menu __'IaaS'__, situato nella fascia verde a sinistra dello schermo.

<img src={shivaCpool_001} />

In questo sottomenu, avete accesso a una vista su:

- Stack software di hypervisors, loro AZ e risorse,
- Stack software di backup.

A gennaio 2024, l'offerta di hypervisor disponibile sull'infrastruttura qualificata Cloud Temple è basata su VMware. Il software di backup utilizzato è IBM Spectrum Protect Plus.

### Gestione dei cluster VMware

Per accedere alla gestione dei cluster VMware, fate clic nel sottomenu __'Calcul'__ del menu __'IaaS'__:

Di default, la prima scheda elenca tutti gli hypervisors (tutti i cluster inclusi):

<img src={shivaEsx_001} />

È possibile visualizzare i dettagli di un hypervisor facendo clic sul suo nome:

<img src={shivaEsx_002} />

Esiste una scheda per cluster di hypervisor per consultare i dettagli di ciascuno:

<img src={shivaCpool_003} />

Se fate clic su un cluster, vedete la sintesi della sua composizione:

- Il totale della potenza di calcolo espressa in Ghz,
- Il totale della memoria disponibile e il rapporto utilizzato,
- Il totale dello spazio di archiviazione (di tutti i tipi) così come la quota parte utilizzata,
- I meccanismi di automazione su indisponibilità di una lama di calcolo (__'Vsphere DRS'__),
- Il numero di macchine virtuali,
- Il numero di hypervisors.

<!-- TODO: Add missing page. -->
<!-- Consultando la pagina di un cluster, sono disponibili diverse schede. La scheda __'Règles'__ vi permette di definire le [regole di affinità / anti-affinità](compute.md#gestion-de-laffinité-de-vos-machines-virtuelles) -->

<img src={shivaCpool_004} />

Vedete apparire per ogni hypervisor nella scheda __'Hosts'__:

- L'uso __CPU__ e __Memoria__,
- Il numero di macchine virtuali assegnate,
- La disponibilità di un nuovo build per il sistema operativo dell'hypervisor se del caso,
- Lo stato dell'hypervisor (connesso in produzione, in manutenzione, spento, ...),
- Un menu di azioni.

<img src={shivaCpool_005} />

Diverse azioni sono possibili dalla scheda __'Hosts'__:

- ordinare nuovi hypervisors tramite il pulsante __'Ajouter un host'__:

<img src={shivaCpool_009} />

- possibilità di consultare il __dettaglio di un hypervisor__:

<img src={shivaCpool_007} />

- entrare o uscire dallo stato __di manutenzione__ un hypervisor,
- __aggiornare__ eventualmente questo hypervisor; per fare ciò, __deve essere necessariamente in manutenzione__. Esistono due tipi di aggiornamenti:

1. I builds VMware (le nuove versioni dell'hypervisor):

<img src={shivaCpool_008Build} />

2. L'aggiornamento del firmware della vostra lama di calcolo (bios e firmware schede figlie):

<img src={shivaCpool_008Firm} />

*__Nota__*:

- *Cloud Temple mette a disposizione i build per gli hypervisors a intervalli regolari.
È importante aggiornare regolarmente i vostri hypervisors, soprattutto per consentire l'applicazione delle patch di sicurezza.
Tuttavia, __non aggiorniamo noi stessi i vostri hypervisors__. Cloud Temple non ha visibilità sugli impegni di disponibilità dei vostri workloads.
Vi lasciamo quindi implementare la vostra gestione del cambiamento e applicare al miglior momento i nuovi build.*
- *Il processo di aggiornamento è interamente automatizzato. Dovete disporre di almeno due hypervisors nel vostro cluster per consentire un aggiornamento senza interruzione del servizio.*

<!-- TODO: Add missing page. -->
<!-- - *È necessario avere [le autorizzazioni adeguate](../console/permissions.md) per effettuare le diverse azioni.* -->

Vedete anche tutte le regole di affinità/anti-affinità per il vostro cluster di hypervisors nella sezione __'Règles'__.

### Gestione dell'affinità delle vostre macchine virtuali

Le __regole di affinità e anti-affinità__ consentono di controllare la posizione delle macchine virtuali sui vostri hypervisors.
Possono essere utilizzate per gestire l'uso delle risorse del vostro __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro affamati di risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion permette di spostare le macchine virtuali da un host all'altro senza interruzione del servizio.

È possibile configurare la gestione delle regole per:

- __Regole di Affinità__: Queste regole assicurano che alcune macchine virtuali vengano eseguite sullo stesso host fisico.
Sono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
insieme sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
dove la performance è critica, come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di Anti-affinità__: Al contrario, queste regole garantiscono che alcune macchine virtuali non vengano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
per evitare che macchine critiche siano tutte interessate in caso di guasto di un singolo server.
Le regole di anti-affinità sono cruciali per le applicazioni che richiedono alta disponibilità,
come negli ambienti di produzione in cui la tolleranza ai guasti è una priorità.

Ad esempio, non vuoi che i tuoi due Active Directory siano sullo stesso hypervisor.

Durante la creazione di una regola, definisci il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Stato'__) e le macchine interessate del tuo cluster di hypervisor.

<img src={shivaCpool_006} />

*Nota: le regole di affinità/anti-affinità proposte nella console sono regole riguardanti le macchine virtuali tra di loro (nessuna regola tra hypervisor e macchine virtuali).*

## Backup

### Creare una politica di backup

Per aggiungere una nuova politica di backup, è necessario fare una richiesta al supporto. Il supporto è accessibile dall'icona della boa in alto a destra della finestra.

La creazione di una nuova politica di backup avviene attraverso __una richiesta di servizio__ indicando:

    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)

<img src={shivaSupport} />

### Assegnare una politica di backup a una macchina virtuale

Quando una SLA è assegnata a una macchina virtuale (VM), tutti i dischi associati a questa VM ereditano automaticamente la stessa SLA. Successivamente, è possibile avviare manualmente l'esecuzione del backup tramite la scheda "Politiche di backup". In mancanza di un avvio manuale, il backup verrà eseguito automaticamente secondo il planning configurato dalla SLA.

SecNumCloud rende obbligatoria l'assegnazione di una politica di backup a una macchina virtuale prima del suo avvio. In caso contrario, riceverai la seguente notifica:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Clicca sulla scheda __'Politiche di backup'__ del menu della tua macchina virtuale. Puoi visualizzare le politiche di backup assegnate alla stessa.

Per assegnare una nuova politica di backup alla macchina virtuale, clicca sul pulsante __'Aggiungi una politica'__ e seleziona la politica di backup desiderata.

<img src={shivaVmPolitiquesBackup} />

### Assegnare una politica di backup a un disco virtuale

È anche possibile assegnare una SLA direttamente a un disco virtuale specifico di una macchina. In questo caso, la macchina virtuale non eredita questa SLA applicata individualmente al disco. Tuttavia, non è possibile avviare manualmente l'esecuzione del backup a livello dei dischi, poiché questa funzionalità non è supportata in Spectrum Protect Plus.

D'altra parte, è possibile escludere alcuni dischi da una o più politiche di backup (SLA) della VM, il che consente di disassegnare una o più SLA su una base disco per disco. Questo approccio offre la flessibilità di avviare manualmente l'esecuzione del backup di una SLA senza influenzare tutti i dischi della macchina virtuale, consentendo così una gestione più fine dei backup.

Clicca sulla barra delle azioni del disco a cui desideri assegnare una politica di backup. Quindi, clicca su __'Politiche'__ e seleziona la politica di backup desiderata.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota*: La politica da aggiungere deve trovarsi in una zona di disponibilità diversa dalla macchina virtuale.

### Eseguire una politica di backup

Nel menu __'Politiche di backup'__ della tua macchina virtuale, clicca sul pulsante __'Esegui'__ della colonna __'Azioni'__ della politica di backup che desideri eseguire.

<img src={shivaVmPolitiquesBackupExecute} />

Per eseguire una politica di backup, puoi anche partire dalla sezione __'Backup'__ nel menu della tua macchina virtuale. Clicca sul pulsante __'Esegui il backup'__, quindi seleziona il backup che desideri eseguire dall’elenco a discesa.

<img src={shivaVmPolitiquesBackupExecute2} />

### Rimuovere una politica di backup

Nel menu __'Politiche di backup'__ della tua macchina virtuale, clicca sul pulsante __'Rimuovi'__ della colonna __'Azioni'__ della politica di backup che desideri rimuovere.

<img src={shivaVmPolitiquesBackupRetirer} />

__Attenzione, non è possibile rimuovere l'ultima SLA su una macchina virtuale accesa:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Rimozione di una politica di backup: caso di una politica di backup sospesa ("held")

Quando l'ultima risorsa è dissociata da una politica SLA, il sistema rileva automaticamente questa situazione. Di conseguenza, tutti i lavori legati a questa politica SLA passano automaticamente allo stato "Sospeso" ("Held"). È importante notare che a questo punto, la rimozione diretta della politica SLA non è possibile a causa dell'esistenza di lavori dipendenti. Per procedere alla rimozione della politica, deve essere seguito un iter.

Bisogna verificare che i lavori interessati siano effettivamente nello stato "Sospeso". Una volta effettuata questa verifica, questi lavori possono essere rimossi. Solo dopo aver rimosso questi lavori dipendenti, la politica SLA potrà essere definitivamente cancellata dal sistema.

Un caso particolare merita un'attenzione specifica: l'aggiunta di una nuova risorsa a una politica SLA i cui lavori dipendenti non sono stati rimossi. In questa situazione, gli identificativi dei lavori saranno conservati. Tuttavia, è cruciale notare che i lavori nello stato "Sospeso" non riprenderanno automaticamente. Sarà necessaria un'intervento manuale per riattivarli e consentire la loro esecuzione.

Nota: Per qualsiasi precisazione su questa situazione, contatta il supporto Cloud Temple.

La console Cloud Temple impedisce l'assegnazione di una macchina virtuale a una politica sospesa:

<img src={shivaBackupHeld_001} />

Allo stesso modo, non è possibile avviare una macchina virtuale che è associata a una politica di backup sospesa:

<img src={shivaBackupHeld_002} />

### Ripristinare un backup

La scheda __'Backup'__ del menu delle tue macchine virtuali ti permette di accedere all'elenco dei backup delle stesse.
Per ripristinare un backup, clicca sul pulsante __'Ripristina'__ sulla riga corrispondente al backup che desideri ripristinare.

<img src={shivaVmBackupRestaurer} />

1. __Modo produzione__: Il modo produzione permette il recupero dopo un incidente sul sito locale dal storage primario o un sito di ripristino dopo incidente remoto, sostituendo le immagini delle macchine originali con le immagini di recupero. Tutte le configurazioni vengono trasferite nell'ambito del recupero, inclusi i nomi e gli identificatori, e tutti i lavori di copia dei dati associati alla macchina virtuale continuano a essere eseguiti. Nell'ambito di un ripristino in modalità produzione, puoi scegliere di sostituire l'archiviazione nella macchina virtuale con un disco virtuale proveniente da un backup precedente della macchina virtuale.

2. __Modo test__: Il modo test crea macchine virtuali temporanee per lo sviluppo, il test, la verifica degli snapshot e la verifica del recupero dopo incidente in base a un programma ripetibile, senza impatto sugli ambienti di produzione. Le macchine di test funzionano finché necessario per eseguire il test e la verifica, e poi vengono pulite. Tramite il networking isolato, puoi creare un ambiente sicuro per testare i tuoi lavori senza interferire con le macchine virtuali utilizzate per la produzione. Le macchine virtuali create in modalità test hanno nomi e identificatori unici per evitare conflitti nel tuo ambiente di produzione.

3. __Modo clone__: Il modo Clone crea copie delle macchine virtuali per i casi di uso che richiedono copie permanenti o a lungo termine per esplorazione dati o la duplicazione di un ambiente di test su una rete isolata. Le macchine virtuali create in modalità clone hanno nomi e identificatori unici per evitare conflitti nel tuo ambiente di produzione. In modalità clone, devi prestare attenzione al consumo delle risorse poiché il modo clone crea macchine permanenti o a lungo termine.

__Il ripristino è di default in modalità "TEST" per preservare la produzione__ e puoi scegliere il nome della vm ripristinata:

<img src={shivaVmBackupTest} />

Nota che se i test sono soddisfacenti, è possibile passare una macchina virtuale dalla modalità test alla modalità produzione:

<img src={shivaVmBackup_2prod} />
