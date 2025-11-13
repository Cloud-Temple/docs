---
title: Guida di Partenza
---

import shivaVmHome from './images/shiva_vm_home.png'
import shivaVmHomeDesc from './images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from './images/shiva_vm_home_alarme.png'
import shivaVmActions from './images/shiva_vm_actions.png'
import shivaVmInformazioni from './images/shiva_vm_informations.png'
import shivaVmBandeauRapide from './images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from './images/shiva_vm_vue_rapide.png'
import shivaVmInformazioniGenerali from './images/shiva_vm_informazioni_generali.png'
import shivaVmInformazioniAvanzate from './images/shiva_vm_informazioni_avanzate.png'
import shivaEditCpuRam from './images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from './images/shiva_vm_diskctrl_001.png'
import shivaVmNetctrl_001 from './images/shiva_vm_netctrl_001.png'
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

### Calcolo

### Gestione delle Macchine Virtuali

L'interfaccia di gestione delle tue macchine virtuali è disponibile nella console Shiva all'interno del menu "IaaS" situato nel bandella verticale a sinistra della schermata.

### Elencato delle macchine virtuali

Nella sezione __'Macchine Virtuali'__, è possibile accedere alla lista delle macchine virtuali ospitate nel Cloud di fiducia scelto.

<img src={shivaVmHome} />

Per ciascuna macchina virtuale, è disponibile il seguente insieme:

- Il nome,
- I tag assegnati,
- Lo stato (spento, acceso, in elaborazione, host disconnesso o invalido),
- Il gestionario (in ambiente VMware, il Vcenter associato),
- Il sistema operativo,
- La quantità di CPU virtuali (vCPU),
- La quantità di memoria virtuale (vRAM).

### Actions sur les macchine virtuali

Le seguente interfaccia offre le seguente:

- Raffreddare la lista delle macchine virtuali;
- Esportare la lista nel formato CSV;
- Filtrare la lista;
- Cercare una macchina virtuale per il suo nome;
- Creare una nuova macchina virtuale.

<img src={shivaVmHomeDesc} />

__Un banner di avvisi può essere visualizzato in alto della lista__: indica che sono state segnalate allarmi critici su una o più delle tue macchine virtuali. Il pulsante __"Vedere"__ consente di consultare le macchine virtuali interessate da questa notifica.

<img src={shivaVmHomeAlarme} />

Quando si clicca sullo spinotto a forma di foglia verde sulla destra di una macchina virtuale:

<img src={shivaVmActions} />

Si accede a tutte le informazioni relative a quella macchina.

<img src={shivaVmInformazioni} />

Un banner rapido consente di eseguire le seguenti azioni:

<img src={shivaVmBandeauRapide} />

- Accendere la macchina virtuale;
- Spegnerela;
- Ricominciarla;
- Modificare le opzioni di alimentazione del server ospitante;
- Aprire la console;
- Montare un ISO;
- Smontare un ISO;
- Clonare la macchina virtuale;
- Spostarla (vMotion);
- Rinominarla;
- Eliminare.

Una vista rapida fornisce una visualizzazione del __storage__, __CPU__ e __RAM__ della macchina virtuale.

<img src={shivaVmVueRapide} />

Nell'onglet __"Informazioni generali"__ si trovano informazioni dettagliate relative alla tua macchina virtuale, come il sistema operativo, la posizione fisica (datacenter, datastore, ecc.), la RAM, il CPU, gli indirizzi IP, i log e altro ancora.

<img src={shivaVmInformazioniGenerali} />

Da questa vista, si possono eseguire le seguenti azioni:

- Modificare l'operativo sistema (la macchina virtuale deve essere spenta);
- Aggiornare la versione del hardware (la macchina virtuale deve essere spenta);
- Modificare la RAM o il CPU.

Un onglet __"Avanzato"__ consente di consultare informazioni più specifiche, come le informazioni "VMware tools", la versione hardware, il manager, ecc.

<img src={shivaVmInformazioniAvanzate} />

### Modifica della RAM o del CPU di una macchina virtuale

Vai nell'angolo __"Macchine Virtuali"__, visualizza i dettagli di una macchina virtuale, seleziona l'angolo __"Informazioni generali"__ e clicca sul pulsante per modificare la variabile da cambiare:

<img src={shivaEditCpuRam} />

### I modi di disco

Puoi aggiungere diversi tipi di dischi:

- **Persistente**: Le modificato è scritto immediatamente e definitivamente sul disco virtuale. È il metodo raccomandato.
- **Indipendente non persistente**: Le modificato viene registrato in un nuovo log e cancellato alla disconnession. Non influenzato dai snapshot. Non è supportato per la backup.
- **Indipendente persistente**: Il modificato è scritto immediatamente e definitivamente sul disco virtuale. Non influenzato dai snapshot. Non è supportato per la backup.

### Gestione dei controller di rete virtuale

È possibile modificare il tipo del controller di rete per la tua macchina virtuale.

<img src={shivaVmNetctrl_001} />

Le sistemi virtuali possono essere dotati di controller di rete SCSI e NVME, con una limitazione di 4 controllori di ciascun tipo. Ogni controllolo può gestire fino a 15 dispositivi di rete.

Un controllolo SCSI può essere configurato con diversi sotto-tipi: Virtualization, Bus Logic, LSI Logic o LSI Logic SAS.

Il controllolo Virtualization distingue per la sua estensione. Può supportare fino a 64 dispositivi di rete quando il hardware della macchina virtuale è compatibile con un ESXi in versione 6.7 o superiore.

> __Importante__ : Se desidera modificare il tipo di un controllolo Virtualization che contiene più di 15 dispositivi di rete, è necessario prima disconnetter i dispositivi sui slot pertinenti.

### Console di una macchina virtuale

L'interfaccia della console di una macchina virtuale è accessibile dalla lista delle macchine virtuali cliccando sull'icona __'Console'__:

<img src={shivaCpool_010} />

Un nuovo tab del tuo browser si apre e mostra la console della tua macchina, basata su un client VNC:

<img src={shivaCpool_011} />

Nel menu **VNC**, è possibile:
- Richiedere l'invio di tasti particolari,
- Forzare una mappatura della tastiera (nel caso in cui non siamo riusciti a identificare correttamente la tua tastiera),
- Aprire un campo di testo trasmissibile alla macchina. Questo metodo sostituisce la vecchia clipboard non funzionale,
- Passare in modalità schermo intero.

__Nota__:
Il ridimensionamento della finestra è automatico.

#### Supporto disposizioni tastiera
L'input effettuato nella console dipende dalla lingua della tastiera del tuo browser web, dalla lingua della tastiera della macchina virtuale e dall'attivazione o meno dell'opzione 'enforce keyboard' sul lato sinistro dello schermo. Ecco un riepilogo delle possibili situazioni :

| Lingua della tastiera della macchina fisica (input) | Lingua della tastiera della macchina virtuale | Opzione 'enforce keyboard' selezionata | Risultato (output)        |
| -------------------------------------------------- | --------------------------------------------- | -------------------------------------- | ------------------------ |
| Francese                                          | Francese                                      | No                                     | ✅                       |
| Francese                                          | Francese                                      | Sì                                     | Non consigliato          |
| Francese                                          | Inglese                                       | No                                     | Inglese                  |
| Francese                                          | Inglese                                       | Sì                                     | ✅                       |
| Inglese                                           | Francese                                      | No                                     | Francese                 |
| Inglese                                           | Francese                                      | Sì                                     | ✅                       |
| Inglese                                           | Inglese                                       | No                                     | ✅                       |
| Inglese                                           | Inglese                                       | Sì                                     | Non consigliato          |

__Nota__:
- Se alcuni caratteri non funzionano con l'input manuale, puoi provare tramite la clipboard.

#### Funzionamento della clipboard
Questa funzionalità ti consente di inviare un'intera stringa di caratteri alla tua macchina virtuale. È importante notare che il tasto "enforce keyboard" influisce sul modo in cui questa stringa di caratteri verrà trasmessa alla tua macchina virtuale. Se noti durante l'input nella console che l'opzione "enforce keyboard" è necessaria, ricorda di attivarla prima di utilizzare la clipboard.  
Questa funzionalità può essere utilizzata per inviare una password, un comando o il contenuto di un file di configurazione, ad esempio:

<img src={shivaCpool_012} />

Facendo clic sul pulsante "Paste", il contenuto del tuo campo di testo viene inviato alla tua macchina virtuale.

### Catalogo di Template Virtuali Cloud Temple

Cloud Temple offre un catalogo di `Template` continuamente aggiornato e ampliato dalle nostre squadre. Comprende a oggi diverse decine di `Template` e immagini da montare sulle nostre macchine virtuali.

<img src={shivaCatalogs} />

Per pubblicare un ISO/OVF, è necessario accedere alla scheda __'Catalogo__ e cliccare sul pulsante __'Pubblica file'__ in alto della pagina:

<img src={shivaCatalogs_002} />

È possibile trasformare una VM in modello e esportarla nel catalogo. Per farlo, seleziona una macchina virtuale e utilizza il pulsante di azione __'Clonare'__:

<img src={shivaVmTemplate_002} />

Seleziona __'Esporta come Template VM__':

<img src={shivaVmTemplate_001} />

Inserisci quindi le informazioni necessarie. Sarà poi possibile avviare una nuova VM a partire dal modello, tramite il pulsante __'Nuova macchina virtuale__'__ o dalla scheda __'Cataloghi__. Inoltre, è possibile esportare la VM nel formato OVF.

__Nota__: è possibile convertire un file OVA in OVF e viceversa. La metodologia più comunemente utilizzata è Vmware Converter ma esistono anche metodi semplici tramite ```tar```.

Estrazione di un file ova:

```
tar -xvf vmName.ova
```

Creazione di un file OVA da un file OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName.disk1.vmdk vmName.mf
```

### Configurazione avanzata delle macchine virtuali: Extra Config

Le Extra Config offre un modo flessibile per includere coppie chiave-valore nella configurazione di una macchina virtuale. Le chiavi e i valori vengono interpretati dal sistema quando la macchina virtuale viene avviata.

Ora, è possibile modificare le proprietà del tipo __Extra Config__ nelle opzioni avanzate di una macchina virtuale:

<img src={shivaVmAdv_001} />

È possibile aggiungere una proprietà dalla lista delle chiavi. Inoltre, è possibile modificare la valore di una chiave che si è aggiunta manualmente. Le coppie chiave-valore esistenti non possono essere modificate.

Si prega di contattare il supporto per qualsiasi richiesta di aggiunta di nuove chiavi.

<img src={shivaVmAdv_002} />

__Nota__: *Per l'utilizzo dei GPU da parte della macchina virtuale, è obbligatorio attivare la chiave 'pciPassthru.use64bitMMIO' e allocare la quantità di spazio MMIO (Memory-mapped I/O) necessaria tramite 'pciPassthru.64bitMMIOSizeGB'. Si prega di consultare la [documentazione ufficiale Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Configurazione avanzata delle macchine virtuali: vAPP

È possibile modificare anche le proprietà di tipo __vAPP__ nelle opzioni avanzate di una macchina virtuale:

<img src={shivaVmAdv_003} />

Puoi aggiungere una proprietà, modificarla o rimuoverla. Sono disponibili quattro tipi di proprietà: String, Numero, Bool, Password:

<img src={shivaVmAdv_004} />

__Nota__: *La macchina virtuale deve essere fermata per modificare le sue proprietà vAPP.*

### Management of __'Hypervisors__ and __'Cpool'__ (Hypervisor Clusters)

The management of your hypervisors is carried out in the sub-menu under __'Compute'__ within the __'IaaS'__ menu, located in the top left toolbar.

<img src={shivaCpool_001} />

In this sub-menu, you have access to:

- The hypervisor software stack, their AZ (Availability Zone) and resources,
- The backup software stack.

As of January 2024, the hypervisor offering available on Cloud Temple's qualified infrastructure is based on VMware. The backup software utilized is IBM Spectrum Protect Plus.

### Gestione dei cluster VMware

Per accedere alla gestione dei cluster VMware, fai clic nel sottomenu __'Calcolo__' del menu __'IaaS__ :

Di default, il primo riquadro elenca tutti i virtualizzatori (tutti i cluster confondibili):

<img src={shivaEsx_001} />

È possibile visualizzare i dettagli di un virtualizzatore facendo clic sul suo nome:

<img src={shivaEsx_002} />

Esiste un riquadro per ogni cluster di virtualizzatori per consultare i dettagli di ciascuno:

<img src={shivaCpool_003} />

Se clicca su un cluster, vedrai la sintesi della sua composizione:

- La potenza calcolare totale espressa in Ghz,
- La memoria disponibile e il rapporto utilizzato,
- Lo spazio di archiviazione (di tutti i tipi) insieme al rapporto utilizzato,
- I meccanismi di automazione su presenza di un lato calcolo indisponibile (__'Vsphere DRS'__),
- Il numero di machine virtuali,
- Il numero di virtualizzatori.

<!-- TODO: Aggiungere la pagina per le regole d'affinità/anti-affinità -->
<!-- Consultando la pagina di un cluster, sono disponibili diversi riquadri. Il riquadro __'Regole__' ti permette di definire le [regole d'affinità / anti-affinità](compute.md#gestion-de-laffinité-de-vos-machines-virtuelles) dei tuoi virtualizzatori: -->

<img src={shivaCpool_004} />

Appare per ogni virtualizzatore nell'elenco __'Host__ :

- L'uso __CPU__ e __Mémoire__,
- Il numero di machine virtuali collegate,
- La disponibilità di un nuovo build per il sistema operativo del virtualizzatore (se applicabile),
- Lo stato dell'indirizzo IP (connesso in produzione, in manutenzione, disattivato, ecc.),
- Un menu di azione.

<img src={shivaCpool_005} />

Sono disponibili diverse azioni da questo riquadro __'Host__ :

- Ordinare nuovi virtualizzatori tramite il pulsante __'Aggiungi un host'__:

<img src={shivaCpool_009} />

- Consultare i dettagli di un virtualizzatore:

<img src={shivaCpool_007} />

- Mettere o rimuovere un virtualizzatore in uno stato di manutenzione,
- Aggiornare il virtualizzatore (se necessario), per cui deve essere in manutenzione. Esistono due tipi di aggiornamenti:

1. I build VMware (le nuove versioni del virtualizzatore):

<img src={shivaCpool_008Build} />

2. L'aggiornamento del firmware della tua lame di calcolo (BIOS e firmware delle schede):

<img src={shivaCpool_008Firm} />

*__Nota__: *Cloud Temple mette a disposizione i build per i virtualizzatori a intervalli regolari. È importante aggiornare regolarmente i tuoi virtualizzatori, soprattutto per applicare i correttivi di sicurezza. Tuttavia, *Cloud Temple non si occupa dell'aggiornamento automatico dei tuoi virtualizzatori*. Non abbiamo visibilità sulle garanzie di disponibilità dei tuoi workload. Ti lasciamo quindi gestire la tua politica di cambio e applicare l'aggiornamento al momento giusto.*
- *Il processo di aggiornamento è completamente automatizzato. È necessario disporre di almeno due virtualizzatori nel cluster per eseguire un aggiornamento senza interruzione del servizio.*

<!-- TODO: Aggiungere la pagina per le regole d'affinità/anti-affinità -->
<!-- Inoltre, puoi vedere l'intero insieme delle regole d'affinità/anti-affinità per il tuo cluster di virtualizzatori nella sezione __'Regole__'. -->

### Gestione dell'affinità delle macchine virtuali

Le **regolatori di affinità e anti-affinità** consentono di controllare l'ubicazione delle macchine virtuali sui vostri virtualizzatori.
Possono essere utilizzati per gestire l'utilizzo delle risorse del vostro **pool Cpool**.
Ad esempio, possono aiutare a bilanciare la carica di lavoro tra i server o a isolare le cariche di lavoro ad alta richiesta in termini di risorse.
In un pool VMware, queste regole vengono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion consente di spostare le macchine virtuali da un host a un altro senza interruzione del servizio.

Potete configurare attraverso la gestione delle regole:

- **Regole di Affinità**: Queste regole garantiscono che alcune macchine virtuali vengano eseguite su lo stesso host fisico.
Vengono utilizzate per migliorare le prestazioni mantenendo sullo stesso server le macchine virtuali che comunicano frequentemente tra loro, riducendo così la latenza del network. Le regole di affinità sono utili in scenari in cui la performance è critica, come nelle basi dati o nelle applicazioni che richiedono una comunicazione rapida tra i server.

- **Regole di Anti-Affinità**: A contrario, queste regole garantiscono che alcune macchine virtuali non vengano eseguite su lo stesso host fisico.
Sono importanti per la disponibilità e la resilienza, ad esempio, per evitare che le macchine critiche siano tutte colpite in caso di guasto di un singolo server. Le regole di anti-affinità sono cruciali per le applicazioni che richiedono una alta disponibilità, come negli ambienti di produzione dove la tolleranza alle interruzioni è una priorità. Ad esempio, non vorreste che i due Actives Directory siano su lo stesso virtualizzatore.

Creando una regola, definite il tipo di regola (affinità / anti-affinità), il nome della regola, lo stato di attivazione ("Stato") e le macchine coinvolte nel vostro cluster di virtualizzatori.

<img src={shivaCpool_006} />

*Nota: Le regole di affinità/anti-affinità proposte nella console sono relative alle macchine virtuali tra loro (non riguardano le regole tra i virtualizzatori e le macchine virtuali).*

---
backup
---

### Creare una politica di backup

Per creare una nuova politica di backup è necessario effettuare una richiesta al supporto. Il supporto è accessibile tramite l'icona della palla da pesca in alto a destra della finestra.

La creazione di una nuova politica di backup viene realizzata attraverso una **richiesta di servizio** che indica:

    Il nome dell'organizzazione
    Il nome di un contatto con il suo indirizzo email e numero di telefono per finalizzare la configurazione
    Il nome del proprietario
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ecc.)

<img src={shivaSupport} />

### Assegnare una politica di backup a una macchina virtuale

Quando si assegna una SLA (Service Level Agreement) a una macchina virtuale (VM), tutti i dischi associati alla VM ereditano automaticamente la stessa SLA. Successivamente, è possibile avviare manualmente l'esecuzione della backup tramite il riquadino "Politiche di backup". Se non si attiva manualmente la backup, essa verrà eseguita automaticamente secondo il piano configurato dalla SLA.

SecNumCloud rende obbligatorio l'assegnazione di una politica di backup a una macchina virtuale prima del suo avvio. In caso contrario, si visualizzerà la seguente notifica:

<img src={shivaVmPolitiquesBackupAssignMandatory} alt="Notifica di mancanza di assegnazione della politica di backup" />

Fare clic sul riquadino "Politiche di backup" nel menu della tua macchina virtuale per visualizzare la/le politica(i) di backup assegnata(e).

Per assegnare una nuova politica di backup alla macchina virtuale, fare clic sul pulsante "Aggiungi politica" e selezionare quella desiderata.

<img src={shivaVmPolitiquesBackup} alt="Assegnazione di una politica di backup" />

### Assegnare una politica di backup a un volume virtuale

È anche possibile assegnare una SLA direttamente a un volume virtuale specifico di una macchina, in questo caso, la macchina virtuale non eredita questa SLA applicata individualmente al volume. Tuttavia, non è possibile avviare manualmente l'esecuzione della backup su livello di volti, poiché questa funzionalità non è supportata da Spectrum Protect Plus.

Al contrario, è possibile escludere determinati volti da una o più politiche di backup (SLA) dalla VM, il che consente di disassumere una o più SLA(s) su base disco per disco. Questa approccio offre la flessibilità di avviare manualmente l'esecuzione della backup di una SLA senza influenzare tutti i volti della macchina virtuale, consentendo così una gestione più precisa delle backup.

Fai clic sulla barra degli atti del volume al quale desideri assegnare una politica di backup. Successivamente, fai clic su "Politiche" e seleziona la politica di backup desiderata.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota*: La politica da aggiungere deve trovarsi in una zona disponibilità diversa dalla macchina virtuale.

### Esecuzione di una politica di backup

Nella scheda "Politiche di backup" della tua macchina virtuale, fai clic sul pulsante "Esegui" nella colonna "Azioni" della politica di backup che desideri eseguire.

<img src={shivaVmPolitiquesBackupExecute} alt="Politiche di backup - Esegui" />

Puoi anche eseguire una politica di backup partendo dalla sezione "Backup" nel menu della tua macchina virtuale. Fai clic sul pulsante "Esegui il backup", quindi seleziona la backup che desideri eseguire nella lista a discesa.

<img src={shivaVmPolitiquesBackupExecute2} alt="Backup - Esegui il backup" />

### Rimuovere una politica di backup

Nel menu __'Politiche di backup'__ della tua macchina virtuale, fai clic sul pulsante __'Rimuovere'__ nella colonna __'Azioni'__ della politica di backup che desideri rimuovere.

<img src={shivaVmPolitiquesBackupRetirer} />

__Attenzione: non è possibile rimuovere la SLA finale su una macchina virtuale accesa :__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Eliminazione di una politica di backup in sospeso: casi di una politica SLA sospesa ("held")

Quando la penultima risorsa viene disassociata da una politica SLA, il sistema rileva automaticamente questa situazione. Di conseguenza, tutti i lavori correlati a questa politica SLA passano automaticamente all'stato "Sospeso" ("Held"). È importante notare che in questo momento, la cancellazione diretta della politica SLA non è possibile a causa di lavori dipendenti. Per procedere alla cancellazione della politica, devono essere seguite una serie di passaggi.

È necessario verificare che i lavori interessati siano effettivamente nello stato "Sospeso". Una volta effettuata questa verifica, questi lavori possono essere cancellati. Solo dopo aver eliminato questi lavori dipendenti, la politica SLA può essere definitivamente rimossa dal sistema.

Un caso particolare richiede attenzione speciale: l'aggiunta di una nuova risorsa a una politica SLA per cui i lavori dipendenti non sono stati cancellati. In questo scenario, gli identificativi dei lavori vengono conservati. Tuttavia, è fondamentale notare che i lavori nello stato "Sospeso" non si riprenderanno automaticamente. Un'intervento manuale sarà necessario per riattivarli e permettere la loro esecuzione.

nota: Per ulteriori chiarimenti su questa situazione, contattare il supporto Cloud Temple.

La console Cloud Temple impedisce di assegnare una macchina virtuale a una politica sospesa:

<img src={shivaBackupHeld_001} />

Allo stesso modo, non è possibile avviare una macchina virtuale associata a una politica di backup sospesa:

<img src={shivaBackupHeld_002} />

### Ristrutturare una backup

L'angolo "Backup" del menu delle tue macchine virtuali ti permette di accedere alla lista delle backup della stessa. Per ripristinare una backup, fai clic sul pulsante "Ristrutturare" sulla riga corrispondente alla backup che desideri restaurare.

<img src={shivaVmBackupRestaurer} />

1. **Mode di produzione**: Il mode di produzione consente la ripristino dopo un incidente sul sito locale, da uno stoccaggio primario o da un sito di recupero post-incidente distaccato, sostituendo le immagini della macchina originale con quelle di recupero. Tutte le configurazioni vengono trasferite nel contesto del ripristino, inclusi i nomi e gli identificativi, e tutti i compiti di copia dei dati associati alla macchina virtuale continuano a funzionare. Nel caso di una ripristinazione in modalità di produzione, puoi scegliere di sostituire lo stoccaggio nella macchina virtuale con un disco virtuale proveniente da una backup della macchina virtuale precedente.

2. **Mode di test**: Il mode di test crea macchine virtuali temporanee per lo sviluppo, il test, la verifica dell'instantaneo e la verifica del ripristino post-incidente secondo un ciclo ripetibile, senza influenzare gli ambienti di produzione. Le macchine di test eseguono fino a quando non viene completato il test e la verifica, dopo di che vengono pulite. Attraverso l'isolamento del network, puoi stabilire un ambiente sicuro per testare i tuoi lavori senza interferire con le macchine virtuali utilizzate per la produzione. Le macchine virtuali create in modalità di test possiedono nomi e identificativi unici per evitare eventuali conflitti nel tuo ambiente di produzione.

3. **Mode clonazione**: Il mode Clonazione crea copie delle macchine virtuali per casi d'uso che richiedono copie permanenti o eseguite a lungo, come l'esplorazione dei dati o la duplicazione di un ambiente di test su un network isolato. Le macchine virtuali create in modalità clonazione possiedono nomi e identificativi unici per evitare eventuali conflitti nel tuo ambiente di produzione. Nel mode clonazione, è necessario prestare attenzione alla consumo delle risorse poiché il mode clonazione crea macchine permanenti o a lungo termine.

**La ripristinazione è impostata per default in modalità "TEST" per preservare la produzione**, e puoi scegliere il nome della vm restaurata:

<img src={shivaVmBackupTest} />

Nota che se i test sono soddisfacenti, è possibile trasferire una macchina virtuale dal mode test al mode production:

<img src={shivaVmBackup_2prod} />
