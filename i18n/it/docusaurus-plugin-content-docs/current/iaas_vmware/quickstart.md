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

### Gestione delle macchine virtuali

L'interfaccia di gestione delle vostre macchine virtuali è disponibile nella console Shiva nel menu __'IaaS'__ situato sulla barra verde a sinistra dello schermo.

### Lista delle macchine virtuali

Nella sezione __'Macchine virtuali'__, avete accesso alla lista delle vostre macchine virtuali ospitate sul vostro Cloud di fiducia.

<img src={shivaVmHome} />

Avete accesso alle seguenti informazioni per ogni macchina virtuale:

- Il suo nome,
- I tag che le sono stati assegnati,
- Il suo stato (spenta, accesa, in elaborazione, host disconnesso o non valido),
- Il suo manager (in ambiente VMware, il Vcenter associato),
- Il suo sistema operativo,
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

__Un banner di avvisi può essere presente nella parte superiore della lista__: indica che sono stati attivati allarmi critici su una o più delle vostre macchine virtuali.
Il pulsante __'Visualizza'__ permette di consultare le macchine virtuali interessate da questa notifica.

<img src={shivaVmHomeAlarme} />

Quando cliccate sulla freccia a discesa verde sulla destra della lista per una macchina virtuale:

<img src={shivaVmActions} />

Accedete a tutte le informazioni su di essa:

<img src={shivaVmInformations} />

Una barra di accesso rapido permette di realizzare le seguenti azioni:

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

Nella scheda __'Informazioni generali'__, trovate informazioni dettagliate relative alla vostra macchina virtuale, come il suo SO, la sua posizione fisica (datacenter, datastore, ecc.), RAM, CPU, indirizzi IP, log e altro.

<img src={shivaVmInfosGenerales} />

Da questa vista, potete effettuare le seguenti azioni:

- Modificare il sistema operativo (la macchina virtuale deve essere spenta),
- Aggiornare la versione dell'hardware (la macchina virtuale deve essere spenta),
- Modificare la RAM o la CPU.

Una scheda __'Avanzate'__ permette di consultare informazioni più specifiche come le info "VMware tools", la versione hardware, il manager, ecc.

<img src={shivaVmInfosAvancees} />

### Modifica della RAM o della CPU di una macchina virtuale

Andate nella scheda __'Macchine Virtuali'__, visualizzate i dettagli di una macchina virtuale,
selezionate la scheda __'Informazioni generali'__ e cliccate sul pulsante di modifica della variabile da modificare:

<img src={shivaEditCpuRam} />

### Modalità dei dischi

Potete aggiungere diverse modalità di dischi:

- __Persistente__: Le modifiche vengono scritte immediatamente e permanentemente sul disco virtuale. __Questa è la modalità raccomandata.__
- __Indipendente non persistente__: Le modifiche apportate al disco virtuale vengono registrate in un nuovo log e eliminate allo spegnimento. Non è influenzato dagli snapshot. __Non è supportato dal backup.__
- __Indipendente persistente__: Le modifiche vengono scritte immediatamente e permanentemente sul disco virtuale. Non è influenzato dagli snapshot. __Non è supportato dal backup.__

### Gestione dei controller di macchina virtuale

Potete modificare il tipo di controller del disco per la vostra macchina virtuale.

<img src={shivaVmDiskctrl_001} />

Le macchine virtuali possono essere dotate di controller SCSI e NVME, con un limite di 4 controller di ciascun tipo. Ogni controller può gestire fino a 15 dischi.

Un controller SCSI può essere configurato con diversi sottotipi: Para Virtual, Bus Logic, LSI Logic o LSI Logic SAS.

Il controller Para Virtual si distingue per la sua capacità estesa. Può supportare fino a 64 dischi quando la versione hardware della macchina virtuale è compatibile con un ESXi in versione 6.7 o superiore.

> __Importante__: Se desiderate modificare il tipo di un controller Para Virtual che possiede più di 15 dischi, dovrete prima scollegare i dischi sugli slot interessati.

### Console di una macchina virtuale

La console di una macchina virtuale è accessibile dalla lista delle macchine virtuali cliccando sull'icona __'Console'__:

<img src={shivaCpool_010} />

Si apre una nuova scheda del vostro browser e viene visualizzata la console della vostra macchina, basata su un client VNC:

<img src={shivaCpool_011} />

È possibile nel menu VNC:

- Richiedere l'invio di un tasto particolare,
- Realizzare copia/incolla dagli appunti del vostro OS,
- Passare alla modalità a schermo intero,
- Cambiare la dimensione della finestra (scaling).

La gestione della tastiera, con la console delle macchine virtuali, funziona perfettamente in un ambiente completamente *inglese*.

L'input effettuato nella console dipende dalla lingua della tastiera della vostra macchina fisica, dalla lingua della tastiera
della macchina virtuale e dall'attivazione o meno dell'opzione 'enforce keyboard' a sinistra dello schermo.
Ecco una sintesi delle situazioni possibili con la lingua francese:

| Lingua della tastiera della macchina fisica (input) | Lingua della tastiera della macchina virtuale | Opzione 'enforce keyboard' selezionata | Risultato (output)                                   |
| --------------------------------------------------- | -------------------------------------------- | -------------------------------------- | ---------------------------------------------------- |
| Francese                                            | Francese                                     | No                                     | Sconsigliato (problema con i caratteri speciali)     |
| Francese                                            | Francese                                     | Sì                                     | < e > non funzionano                                 |
| Francese                                            | Inglese                                      | No                                     | Sconsigliato (problema con i caratteri speciali)     |
| Francese                                            | Inglese                                      | Sì                                     | Inglese                                              |
| Inglese                                             | Francese                                     | No                                     | < e > non funzionano                                 |
| Inglese                                             | Francese                                     | Sì                                     | < e > non funzionano                                 |
| Inglese                                             | Inglese                                      | No                                     | Inglese                                              |
| Inglese                                             | Inglese                                      | Sì                                     | Inglese                                              |

__Nota__:

- Se la combinazione __'AltGr'__ e __'@'__ sulla tastiera non funziona, attivate il pulsante __'enforce key'__ nel menu __'VNC'__ della console e riprovate.
- Se ancora non funziona e l'OS della macchina fisica è __Windows, impostate la tastiera della macchina fisica in inglese
e provate a inserire la @ in modo classico__ *(output azerty: AltGr + tasto dello 0 o output qwerty: tasto del 2)*.

### Cataloghi di macchine virtuali Cloud Temple

Cloud Temple mette a vostra disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dai nostri team.
Comprende ad oggi diverse decine di `Templates` e immagini da montare sulle vostre macchine virtuali.

<img src={shivaCatalogs} />

Per pubblicare un ISO/OVF, bisogna andare nella vista __'Catalogo'__ e cliccare sul pulsante __'pubblicare file'__ nella parte superiore della pagina:

<img src={shivaCatalogs_002} />

È possibile trasformare una VM in modello ed esportarla nel catalogo. Per fare ciò, selezionate una macchina virtuale e utilizzate il pulsante di azione __'clona'__:

<img src={shivaVmTemplate_002} />

Selezionate __'Esporta come vm-template'__:

<img src={shivaVmTemplate_001} />

Inserite poi le informazioni necessarie. Sarà quindi possibile distribuire una nuova VM dal modello utilizzando il pulsante __'Nuova macchina virtuale'__ o dalla pagina __'Cataloghi'__. È anche possibile esportare la VM in formato OVF.

__Buono a sapersi__: è possibile convertire un file OVA in OVF e viceversa.
Il metodo più comune utilizzato è Vmware convertor ma esiste anche un metodo semplice utilizzando ```tar```

Estrazione del file ova:

```
tar -xvf vmName.ova
```

Creare un file OVA da un file OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Impostazioni avanzate delle macchine virtuali: Extra Config

Extra Config fornisce un modo flessibile per includere coppie chiave=valore nella configurazione di una macchina virtuale. Le chiavi e i valori sono interpretati dal sistema quando la macchina virtuale viene distribuita.

Ora, potete modificare voi stessi le proprietà di tipo __Extra Config__ nelle opzioni avanzate di una macchina virtuale:

<img src={shivaVmAdv_001} />

Potete aggiungere una proprietà da una lista di chiavi. Inoltre, potete modificare il valore di una chiave che avete aggiunto voi stessi. Le coppie chiave=valore già esistenti non sono modificabili.

Vi preghiamo di contattare il supporto per qualsiasi richiesta di aggiunta di nuove chiavi.

<img src={shivaVmAdv_002} />

__Nota__: *Per l'utilizzo della GPU da parte della macchina virtuale, è obbligatorio attivare la chiave 'pciPassthru.use64bitMMIO' e allocare la quantità di spazio MMIO (Memory-mapped I/O) necessario tramite 'pciPassthru.64bitMMIOSizeGB'. Si raccomanda vivamente di fare riferimento alla [documentazione ufficiale Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Impostazioni avanzate delle macchine virtuali: vAPP

Potete anche modificare le proprietà di tipo __vAPP__ nelle opzioni avanzate di una macchina virtuale:

<img src={shivaVmAdv_003} />

Potete aggiungere una proprietà, modificarla o eliminarla. Sono proposti quattro tipi di proprietà: Stringa, Numero, Booleano, Password:

<img src={shivaVmAdv_004} />

__Nota__: *La macchina virtuale deve essere fermata per modificare le sue proprietà vAPP.*

### Gestione degli __'hypervisor'__ e __'Cpool'__ (cluster di hypervisor)

La gestione dei vostri hypervisor si fa nel sottomenu __'Calcolo'__ del menu __'IaaS'__, situato nella barra verde a sinistra del vostro schermo.

<img src={shivaCpool_001} />

In questo sottomenu, disponete di una vista su:

- Lo stack software di hypervisor, le loro AZ e le loro risorse,
- Lo stack software di backup.

A gennaio 2024, l'offerta di hypervisor disponibile sull'infrastruttura qualificata Cloud Temple è basata su VMware. Il software di backup utilizzato è IBM Spectrum Protect Plus.

### Gestione dei cluster VMware

Per accedere alla gestione dei cluster VMware, cliccate nel sottomenu __'Calcolo'__ del menu __'IaaS'__:

Per impostazione predefinita, la prima scheda elenca tutti gli hypervisor (di tutti i cluster):

<img src={shivaEsx_001} />

È possibile visualizzare i dettagli di un hypervisor cliccando sul suo nome:

<img src={shivaEsx_002} />

Esiste una scheda per ogni cluster di hypervisor per consultare i dettagli di ciascuno:

<img src={shivaCpool_003} />

Se cliccate su un cluster, vedete la sintesi della sua composizione:

- Il totale della potenza di calcolo espresso in GHz,
- Il totale della memoria disponibile e il rapporto utilizzato,
- Il totale dello spazio di storage (tutti i tipi combinati) così come la quota parte utilizzata,
- I meccanismi di automazione in caso di indisponibilità di una lama di calcolo (__'Vsphere DRS'__),
- Il numero di macchine virtuali,
- Il numero di hypervisor.

<!-- TODO: Add missing page. -->
<!-- Consultando la pagina di un cluster, sono disponibili diverse schede. La scheda __'Regole'__ vi permette di definire le [regole di affinità / anti-affinità](compute.md#gestione-dell-affinità-delle-vostre-macchine-virtuali) -->

<img src={shivaCpool_004} />

Vedete apparire per ogni hypervisor nella scheda __'Host'__:

- L'utilizzo di __CPU__ e __Memoria__,
- Il numero di macchine virtuali assegnate,
- La disponibilità di una nuova build per il sistema operativo dell'hypervisor se del caso,
- Lo stato dell'hypervisor (connesso in produzione, in manutenzione, spento, ...),
- Un menu di azione.

<img src={shivaCpool_005} />

Diverse azioni sono possibili dalla scheda __'Host'__:

- Ordinare nuovi hypervisor tramite il pulsante __'Aggiungi un host'__:

<img src={shivaCpool_009} />

- Possibilità di consultare __il dettaglio di un hypervisor__:

<img src={shivaCpool_007} />

- Entrare o uscire dallo __stato di manutenzione__ di un hypervisor,
- __Aggiornare__ se necessario questo hypervisor; per fare ciò, __deve essere imperativamente in manutenzione__. Ci sono due tipi di aggiornamenti:

1. Le build VMware (le nuove versioni dell'hypervisor):

<img src={shivaCpool_008Build} />

2. L'aggiornamento del firmware della vostra lama di calcolo (bios e firmware schede figlie):

<img src={shivaCpool_008Firm} />

*__Nota__*:

- *Cloud Temple mette a disposizione le build per gli hypervisor a intervalli regolari.
È importante aggiornare regolarmente i vostri hypervisor, in particolare per permettere l'applicazione delle patch di sicurezza.
Tuttavia, __noi non aggiorniamo da soli i vostri hypervisor__. Cloud Temple non ha visibilità sugli impegni di disponibilità dei vostri workload.
Vi lasciamo quindi implementare la vostra gestione del cambiamento e applicare al momento migliore le nuove build.*
- *Il processo di aggiornamento è completamente automatizzato. Dovete disporre di almeno due hypervisor nel vostro cluster per permettere un aggiornamento senza interruzione del servizio.*

<!-- TODO: Add missing page. -->
<!-- - *È necessario avere [i permessi adeguati](../console/permissions.md) per effettuare le diverse azioni.* -->

Vedete anche l'insieme delle regole di affinità/anti-affinità per il vostro cluster di hypervisor nella parte __'Regole'__.

### Gestione dell'affinità delle vostre macchine virtuali

Le __regole di affinità e anti-affinità__ permettono di controllare il posizionamento delle macchine virtuali sui vostri hypervisor.
Possono essere utilizzate per gestire l'utilizzo delle risorse del vostro __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro che consumano molte risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion permette di spostare le macchine virtuali da un host all'altro senza interruzione del servizio.

Potete configurare grazie alla gestione delle regole:

- __Regole di Affinità__: Queste regole assicurano che certe macchine virtuali siano eseguite sullo stesso host fisico.
Sono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
insieme sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
dove le prestazioni sono critiche, come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di Anti-affinità__: Al contrario, queste regole garantiscono che certe macchine virtuali non siano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
per evitare che tutte le macchine critiche siano colpite in caso di guasto di un singolo server.
Le regole di anti-affinità sono cruciali per le applicazioni che richiedono alta disponibilità,
come negli ambienti di produzione dove la tolleranza ai guasti è una priorità.
Ad esempio, non volete che i vostri due Active Directory siano sullo stesso hypervisor.

Quando create una regola, definite il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Stato'__) e le macchine interessate del vostro cluster di hypervisor.

<img src={shivaCpool_006} />

*Nota: le regole di affinità/anti-affinità proposte nella console sono regole riguardanti le macchine virtuali tra loro (non ci sono regole tra hypervisor e macchine virtuali).*

## Backup

### Creare una politica di backup

Per aggiungere una nuova politica di backup, bisogna fare una richiesta al supporto. Il supporto è accessibile dall'icona del salvagente in alto a destra della finestra.

La creazione di una nuova politica di backup viene realizzata tramite __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e n° di telefono per finalizzare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)

<img src={shivaSupport} />

### Assegnare una politica di backup a una macchina virtuale

Quando un SLA viene assegnato a una macchina virtuale (VM), tutti i dischi associati a questa VM ereditano automaticamente lo stesso SLA. Successivamente, è possibile avviare manualmente l'esecuzione del backup tramite la scheda "Politiche di backup". In assenza di un avvio manuale, il backup verrà eseguito automaticamente secondo la pianificazione configurata dal SLA.

SecNumCloud rende obbligatoria l'assegnazione di una politica di backup a una macchina virtuale prima del suo avvio. In caso contrario, avrete la seguente notifica:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Cliccate sulla scheda __'Politiche di backup'__ del menu della vostra macchina virtuale. Potete visualizzare la o le politiche di backup assegnate ad essa.

Per assegnare una nuova politica di backup alla macchina virtuale, cliccate sul pulsante __'Aggiungi una politica'__ e selezionate la politica di backup desiderata.

<img src={shivaVmPolitiquesBackup} />

### Assegnare una politica di backup a un disco virtuale

È anche possibile assegnare un SLA direttamente a un disco virtuale specifico di una macchina. In questo caso, la macchina virtuale non eredita questo SLA applicato individualmente al disco. Tuttavia, non è possibile avviare manualmente l'esecuzione del backup a livello dei dischi, poiché questa funzionalità non è supportata in Spectrum Protect Plus.

D'altra parte, è possibile escludere certi dischi da una o più politiche di backup (SLA) della VM, il che permette di disassegnare uno o più SLA su base disco per disco. Questo approccio offre la flessibilità di avviare manualmente l'esecuzione del backup di un SLA senza influenzare tutti i dischi della macchina virtuale, permettendo così una gestione più fine dei backup.

Cliccate sulla barra di azioni del disco a cui volete assegnare una politica di backup. Poi, cliccate su __'Politiche'__ e selezionate la politica di backup desiderata.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota*: La politica da aggiungere deve trovarsi in una zona di disponibilità diversa dalla macchina virtuale.

### Eseguire una politica di backup

Nel menu __'Politiche di backup'__ della vostra macchina virtuale, cliccate sul pulsante __'Esegui'__ della colonna __'Azioni'__ della politica di backup che desiderate eseguire.

<img src={shivaVmPolitiquesBackupExecute} />

Per eseguire una politica di backup, potete anche partire dalla sezione __'Backup'__ nel menu della
vostra macchina virtuale. Cliccate sul pulsante __'Esegui il backup'__, poi selezionate il backup che desiderate eseguire dall'elenco a discesa.

<img src={shivaVmPolitiquesBackupExecute2} />

### Rimuovere una politica di backup

Nel menu __'Politiche di backup'__ della vostra macchina virtuale, cliccate sul pulsante __'Rimuovi'__ della colonna __'Azioni'__ della politica di backup che desiderate rimuovere.

<img src={shivaVmPolitiquesBackupRetirer} />

__Attenzione, non è possibile rimuovere l'ultimo SLA su una macchina virtuale accesa:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Eliminazione di una politica di backup: caso di una politica di backup sospesa ("held")

Quando l'ultima risorsa viene dissociata da una politica SLA, il sistema rileva automaticamente questa situazione. Di conseguenza, tutti i lavori legati a questa politica SLA passano automaticamente allo stato "Sospeso" ("Held"). È importante notare che a questo punto, l'eliminazione diretta della politica SLA non è possibile a causa dell'esistenza di lavori dipendenti. Per procedere all'eliminazione della politica, deve essere seguita una serie di passaggi.

Bisogna verificare che i lavori interessati siano effettivamente nello stato "Sospeso". Una volta effettuata questa verifica, questi lavori possono essere eliminati. È solo dopo aver eliminato questi lavori dipendenti che la politica SLA potrà essere definitivamente cancellata dal sistema.

Un caso particolare merita un'attenzione specifica: l'aggiunta di una nuova risorsa a una politica SLA i cui lavori dipendenti non sono stati eliminati. In questa situazione, gli identificatori dei lavori saranno conservati. Tuttavia, è cruciale notare che i lavori in stato "Sospeso" non riprenderanno automaticamente. Un intervento manuale sarà necessario per riattivarli e permettere la loro esecuzione.

nota: Per qualsiasi precisazione su questa situazione, contattate il supporto Cloud Temple.

La console Cloud Temple impedisce l'assegnazione di una macchina virtuale a una politica sospesa:

<img src={shivaBackupHeld_001} />

Allo stesso modo, non è possibile avviare una macchina virtuale che è associata a una politica di backup sospesa:

<img src={shivaBackupHeld_002} />

### Ripristinare un backup

La scheda __'Backup'__ del menu delle vostre macchine virtuali vi permette di accedere alla lista dei backup di essa.
Per ripristinare un backup, cliccate sul pulsante __'Ripristina'__ sulla riga corrispondente al backup che desiderate ripristinare.

<img src={shivaVmBackupRestaurer} />

1. __Modalità produzione__: La modalità produzione permette il ripristino dopo incidente sul sito locale dallo storage primario o un sito di ripristino dopo incidente remoto, sostituendo le immagini di macchina originali con le immagini di ripristino. Tutte le configurazioni vengono trasferite come parte del ripristino, compresi nomi e identificatori, e tutti i lavori di copia dei dati associati alla macchina virtuale continuano a funzionare. Nell'ambito di un ripristino in modalità produzione, potete scegliere di sostitu
