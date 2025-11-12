---
title: Guida di Partenza
---

import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasVmConsoleBtn from './images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from './images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from './images/open_iaas_vm_console_clipboard.png'
import openIaasReplicationMenu from './images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from './images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from './images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from './images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from './images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from './images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from './images/open_iaas_replication_replicas_table.png'

### Calcolo

### Gestione delle Macchine Virtuali

L'interfaccia di gestione delle tue macchine virtuali è disponibile nella console Shiva all'interno del menu "OpenIaaS" situato nel bandella verticale a sinistra della schermata.

### Elenco delle macchine virtuali

Nella sezione __'Macchine Virtuali',__ è possibile accedere alla lista delle macchine virtuali ospitate nel Cloud di fiducia scelto.

<img src={openIaasVirtualMachinesList} />

Per ciascuna macchina virtuale, è disponibile il seguente insieme:

- Il suo nome.
- Lo stato (spento o acceso).
- La sua area di disponibilità (AZ).
- Il sistema operativo.
- La quantità di CPU virtuali (vCPU).
- La quantità di memoria virtuale (vRAM).

### Azioni sulle macchine virtuali

Le seguente interfaccia consente di eseguire le seguenti compiti:

- Aggiornare la lista delle macchine virtuali.
- Filtrare la lista.
- Cercare una macchina virtuale per nome.
- Creare una nuova macchina virtuale.

<img src={openIaasVirtualMachinesListActions} />

Se si clicca sulla spunta verde all'estrema de destra di una lista di macchine virtuali, si accede a tutte le informazioni relative a quella specifica.

<img src={openIaasVirtualMachineOverview} />

Un bandello rapido consente di eseguire le seguenti azioni:

<img src={openIaasVirtualMachineActions} />

- Accendere la macchina virtuale.
- Spegnere la macchina virtuale.
- Riavviare la macchina virtuale.
- Aprire la console.
- Montare un ISO.
- Smontare un ISO.
- Convertire la macchina virtuale in template.
- Spostare la macchina virtuale.
- Rinominare la macchina virtuale.
- Eliminare la macchina virtuale.

Nell'elenco delle informazioni "__Generali__", si trovano dettagli dettagliati sulla propria macchina virtuale, come il suo posizionamento fisico (AZ, Pool, Host), la RAM, il CPU, le indirizzi IP e altre informazioni.

<img src={openIaasVirtualMachineOverviewInformations} />

Un'area "__Avanzate__" fornisce ulteriori dettagli:

- UUID della macchina virtuale
- Strumenti ospiti
- Sistema operativo ospite
- Lettore DVD

Inoltre, si possono modificare alcune impostazioni, come:

- Ordine di avvio
- Secure Boot
- Avvio automatico (impossibile se non è associata una politica di backup alla VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Console della macchina virtuale

La console della macchina virtuale è accessibile dalla lista delle macchine virtuali facendo clic sull'icona __'Console'__:

<img src={openIaasVmConsoleBtn} />

Si apre una nuova scheda nel tuo browser che mostra la console della tua macchina, basata su un client VNC:

<img src={openIaasVmConsoleOpen} />

Nel menu VNC, è possibile:
- Richiedere l'invio di tasti particolari,
- Forzare una mappatura della tastiera (nel caso in cui la tua macchina virtuale non abbia la stessa disposizione della tastiera del tuo browser web),
- Aprire un campo di testo trasmissibile alla macchina. Questo metodo sostituisce la vecchia clipboard non funzionale,
- Passare in modalità schermo intero,
- Modificare le dimensioni della finestra (ridimensionamento).

#### Supporto disposizioni tastiera
L'input effettuato nella console dipende dalla lingua della tastiera del tuo browser web, dalla lingua della tastiera della macchina virtuale e dall'attivazione o meno dell'opzione 'enforce keyboard' sul lato sinistro dello schermo. Ecco un riepilogo delle possibili situazioni con la lingua francese:

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

<img src={openIaasVmConsoleClipboard} />

Facendo clic sul pulsante "Paste", il contenuto del tuo campo di testo viene inviato alla tua macchina virtuale.

### Riproduzione

### Accesso ai controlli di replica

L'interfaccia di gestione della replica è disponibile nella console Shiva all'interno del menu "OpenIaaS" > "Replica" situato nel bandella verticale a sinistra dell'schermo.

<img src={openIaasReplicationMenu} />

### Creazione di una politica di replica

Nella sezione __'Replicazione'__, è possibile creare politiche che definiscono i parametri di protezione delle vostre macchine virtuali.

<img src={openIaasReplicationPoliciesView} />

Per creare una nuova politica, fai clic sul pulsante __'Aggiungi politica'.__ Si aprirà un modulo con le seguenti fasi:

#### Passo 1: Informazioni generali

- **Nome**: Fornisci un nome esplicito per la tua politica di replica
- **Frequenza**: Scegli l'intervallo di ripetizione (da 1 a 59 minuti o da 1 a 24 ore)

<img src={openIaasReplicationPolicyForm1} />

### Fase 2: Selezione dello stoccaggio

- **Area di disponibilità**: Scegli la zona di destinazione
- **Pool**: Scegli il pool di risorse
- **Storage Block**: Scegli lo storage di destinazione

<img src={openIaasReplicationPolicyForm2} />

#### Passo 3: Verifica

Controlla i parametri e fai clic su __"Aggiungi"__ per creare la politica.

### Associazione di una VM alla replicazione

Per proteggere una macchina virtuale, accedi alle informazioni sulla tua VM dalla lista delle macchine virtuali.

Nella scheda dettagliata della VM, troverai una sezione __'Replicazione':<img src={openIaasVmReplicationSection} />

Le passaggi per associare una VM alla replicazione:

1. Fai clic su __'Configurare una politica'__
2. Scegli la politica di replicazione desiderata nella lista a discesa
3. Conferma il tuo scelto

La replicazione inizia automaticamente dopo la conferma.

## Gestione delle politiche e replica

Questo sottoinsieme si concentra sulle politiche di gestione dei dati e le repliche nei sistemi cloud. In questo ambito, è fondamentale garantire la conformità alle normative e ai requisiti aziendali attraverso l'implementazione di strategie di controllo e audit efficaci.

1. **Politiche di Gestione dei Dati**:
   - Definizione e implementazione di politiche chiare per la gestione dei dati, inclusi i processi di raccolta, archiviazione, utilizzo e cancellazione.
   - Implementazione di meccanismi di controllo degli accessi basati su ruoli (RBAC) per limitare l'accesso ai dati sensibili.

2. **Repliche dei Dati**:
   - Strategie di replica per garantire la disponibilità e la resilienza dei dati, considerando le opzioni di replication asimmetrica/simmetrica (one-way vs two-way).
   - Implementazione di meccanismi di sincronizzazione e integrità dei dati tra i diversi sistemi di replica.

3. **Conformità Normativa**:
   - Monitoraggio e gestione delle politiche per garantire la conformità alle normative sulla protezione dei dati (GDPR, HIPAA, CCPA) attraverso audit regolari e registrazioni dettagliate.

4. **Audit e Tracciabilità**:
   - Implementazione di sistemi di tracciamento e logging per monitorare le modifiche ai dati e garantire la trasparenza delle operazioni.
   - Audit periodici per verificare l'efficacia delle politiche di gestione dei dati e le repliche.

5. **Gestione degli Errori**:
   - Sviluppo di piani di recupero dagli errori per mitigare i rischi associati a incidenti di sicurezza o perdita di dati.

6. **Formazione e Consapevolezza**:
   - Programmi di formazione continua per l'organizzazione e il personale sui principi della gestione dei dati e delle repliche, nonché sulle normative pertinenti.

Questo ambito è cruciale per garantire che i sistemi cloud rispettino gli standard di qualità, sicurezza e conformità richiesti dalle organizzazioni e dai regolatori.

#### Politiche di Replicazione

Il riquadro "Politiche" ti permette di visualizzare tutte le tue politiche di replica:

<img src={openIaasReplicationPoliciesTable} />

Per ciascuna politica, avrai accesso alle seguenti informazioni:

- Il nome della politica
- La frequenza di replica
- La zona di disponibilità di destinazione
- Il pool associato
- Lo storage blocco utilizzato

Le azioni disponibili includono:

- Visualizzare i dettagli di ciascuna politica
- Modificare i parametri
- Rimuovere una politica non utilizzata
```

#### Vista delle repliche

Il modulo __"Repliche"__ mostra tutte le server virtuali in fase di replica:

<img src={openIaasReplicationReplicasTable} />

Puoi visualizzare:

- Il nome dei server virtuali replicati
- La posizione sorgente e di destinazione
- La politica di replica associata

Le azioni disponibili includono:

- Esporta i dati nel formato CSV
- Visualizza i dettagli della replica
- Gestisci le repliche per politica
```
