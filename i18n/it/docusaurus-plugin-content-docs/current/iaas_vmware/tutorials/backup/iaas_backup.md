---
title: Domande frequenti sul backup
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---
import backupCloneIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_001.png'
import backupCloneIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_002.png'
import backupRestoIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_resto_iaas_001.png'
import backupCloneIaas_004 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_004.png'
import backupPolicyIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_001.png'
import backupPolicyIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_002.png'
import backupPolicyIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_003.png'
import backupPolicyIaas_006 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_006.png'
import backupPolicyIaas_005 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_005.png'
import backupPolicyIaas_004 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_004.png'
import backupCloneIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_003.png'
import backupPolicyIaas_007 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_007.png'
import backupRestoreIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_001.png'
import backupRestoreIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_003.png'
import backupRestoreIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_002.png'
import backupInvIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_inv_iaas_001.png'

#### Come clonare una macchina virtuale?

Esistono 2 modi per clonare una macchina virtuale :

- La prima opzione consente di clonare una macchina virtuale direttamente dall'icona __'Clona'__ della tua macchina virtuale :

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- La seconda soluzione consiste nel clonare la macchina virtuale utilizzando __un backup__ della macchina virtuale e successivamente __il ripristino in modalità clone__ di un backup.
Vai alla sezione __'Backup'__ della tua macchina virtuale e scegli l'azione __'Ripristina'__ :

<img src={backupRestoIaas_001} />

Seleziona quindi l'opzione __'Clona'__ per il ripristino :

<img src={backupCloneIaas_004} />

#### Perché quando vado alla pagina "politiche di backup" e seleziono una politica, non vedo le stesse macchine virtuali quando vado su "report di backup" e seleziono la stessa politica?

Questo significa che le macchine virtuali mancanti hanno avuto la politica in questione assegnata per
un certo periodo (spiegando la loro presenza nei report di backup) ma che __non è più il caso al momento attuale__.

#### Come aggiungere una politica di backup a una macchina virtuale?

Vai alla pagina __'Macchine Virtuali'__ nella sezione __'IaaS'__ della barra del menu verde sul lato sinistro dello schermo.

Seleziona una macchina virtuale e poi la scheda __'Politiche di backup'__ di questa macchina :

<img src={backupPolicyIaas_001} />

Aggiungi la politica di backup desiderata :

<img src={backupPolicyIaas_002} />

### Come eliminare una politica di backup da una macchina virtuale?

Vai alla pagina __'Macchine Virtuali'__, seleziona una macchina virtuale e poi la scheda __'Politiche di backup'__ di questa macchina.

Elimina la politica di backup desiderata e conferma l'eliminazione:

<img src={backupPolicyIaas_003} />

__*Nota:*__ *Attenzione! __Secnumcloud richiede che ci sia almeno una politica di backup__ per ogni macchina virtuale.*

### Come verificare se un backup è stato eseguito correttamente?

Sono disponibili 2 soluzioni possibili:

1. Vai alla pagina __'Jobs'__ del menu __'Backup'__ nella barra verde a sinistra dello schermo. Scegli il job corrispondente al backup e selezionalo.
Successivamente, individua la *jobsession* corrispondente al tuo backup e selezionala tramite il menu __'Actions'__.

<img src={backupPolicyIaas_006} />

Queste azioni consentono di visualizzare i log dettagliati dell'esecuzione del backup. Puoi cercare nei log di backup:

<img src={backupPolicyIaas_005} />

1. Vai alla pagina __'Report di backup'__ e seleziona la policy di tuo interesse:

<img src={backupPolicyIaas_004} />

Puoi quindi filtrare per data, scaricare il report in formato __PDF__ o __CSV__ per elaborarlo con strumenti di terze parti.

### Come eseguire un ripristino?

Vai alla pagina __'Macchine Virtuali'__, seleziona una macchina virtuale e poi la scheda __'Backup'__ di questa macchina. Per avviare il ripristino, seleziona il backup da ripristinare.

<img src={backupCloneIaas_003} />

### Cos'è l'opzione di quiescing?

Il __quiescing__ è un processo che consiste nel notificare al sistema di entrare in uno stato appropriato prima dell'inizio dello snapshot.
Per impostazione predefinita, il __quiescing è attivato__. Può essere disattivato manualmente nel caso in cui il sistema gestisca male lo snapshot o se l'agent dell'ipervisors non è installato sulla macchina virtuale.

Per fare ciò, nella sezione __'Backup'__ della tua macchina virtuale, fai clic su __'Modifica opzioni'__ e disattiva il __quiescing__ :

<img src={backupPolicyIaas_007} />

### Quali sono le opzioni di ripristino di una macchina virtuale?

3 opzioni principali per ripristinare una VM, sul suo target iniziale o su un target diverso :

- __'CLONE'__ : Ripristina la macchina virtuale rinominandola, senza sostituire la macchina virtuale originale.

<img src={backupRestoreIaas_001} />

- __'PRODUCTION'__ : Ripristina e __sostituisce__ la macchina virtuale di produzione (la macchina virtuale attualmente in produzione viene __distrutta__)

<img src={backupRestoreIaas_003} />

- __'TEST'__ : Ripristina la macchina virtuale di produzione __senza sovrascriverla__.

<img src={backupRestoreIaas_002} />

### Come ripristinare e sostituire la macchina virtuale di produzione, senza conservare la macchina virtuale attualmente in produzione?

Seleziona la modalità di ripristino __'Produzione'__. L'opzione 'sovrascrivere la macchina virtuale' è impostata per impostazione predefinita.

<img src={backupRestoreIaas_003} />

### Perché il numero di macchine virtuali è diverso tra i moduli di backup e compute?

La differenza di macchine virtuali può derivare dal fatto che il modulo di backup non ha recuperato le ultime macchine create.

Per aggiornare il modulo di backup, è necessario richiedere al livello software di backup di eseguire un reinventario delle macchine virtuali.
A tal fine, nel menu __'Infrastruttura'__ della barra verde a sinistra dello schermo, navigare verso il sottomenu __'Spectrum Protect Plus'__ e utilizzare il pulsante __'Azione'__ dell'inventario:

<img src={backupInvIaas_001} />

Si noti che viene indicata la data dell'ultimo inventario.

Se persiste una differenza nel numero di macchine virtuali, potrebbe dipendere dalle macchine virtuali che ospitano il sistema che gestisce i
backup. Infatti, queste non si conteggiano da sole nel calcolo del numero di macchine sul modulo di backup.

### Come effettuare l'inventario delle macchine virtuali sul modulo di backup?

Per avviare l'inventario delle macchine virtuali sul modulo di backup, nel menu __'Infrastructure'__ della barra verde a sinistra dello schermo, navigare verso il sottomenu __'Spectrum Protect Plus'__ e utilizzare il pulsante __'Action'__ dell'inventario:

<img src={backupInvIaas_001} />

Si noti che è indicata la data dell'ultimo inventario.

### Perché il backup della mia macchina virtuale fallisce indicando un problema di snapshot?

Questo errore indica che è la prima volta che la tua macchina viene sottoposta a backup.

__Durante il primo backup di una macchina virtuale, non deve essere presente alcuno snapshot sulla macchina.__

### Come ripristinare e sostituire la macchina virtuale di produzione, mantenendo e rinominando la macchina virtuale di produzione?

Ecco come procedere:

- Scegli la modalità __'CLONE'__ (la modalità clone comporta una modifica dell’indirizzo MAC e dell’UUID della macchina virtuale),
- Rinomina la macchina virtuale ripristinata con il nome definitivo (della vm di produzione),
- Rinomina la vecchia macchina virtuale di produzione (in _OLD).

### Come ripristinare una macchina virtuale, senza sostituire la macchina virtuale originale?

Ecco come procedere:

- Scegli la modalità __'CLONE'__ (la modalità clone comporta un cambiamento dell’indirizzo MAC e dell’UUID della macchina virtuale)
- Definisci il nome del clone (_REST o altri)

### Perché non posso eliminare un disco in modalità instant access sulla mia macchina virtuale?

Eseguire l'inventario del backup: nel menu __'Infrastruttura'__ della barra verde a sinistra dello schermo, navigare
verso il sottomenu __'Spectrum Protect Plus'__ e utilizzare il pulsante __'Azione'__ dell'inventario:

<img src={backupInvIaas_001} />

Effettuare l'eliminazione del disco una volta terminato l'inventario. Aggiornare la macchina virtuale per verificare che il disco sia stato effettivamente eliminato.

### Perché non posso avviare una macchina virtuale con una politica in stato Held (politica sospesa)?

Una politica in stato "Held"  è una funzionalità che consente di sospendere temporaneamente le azioni di conservazione ed eliminazione dei dati, garantendo così che i dati rimangano integri e disponibili oltre il loro periodo di conservazione standard per motivi specifici come la conformità o le esigenze legali.

Si supponga che un'azienda abbia una politica di conservazione dei backup di 30 giorni per alcuni dati di produzione. A causa di un'indagine legale, riceve una richiesta di conservare tutti i backup pertinenti per un periodo indeterminato. È possibile sospendere la politica di backup associata tramite lo stato "Held" per impedire l'eliminazione automatica di questi backup dopo 30 giorni, garantendo così che i dati rimangano disponibili per tutta la durata dell'indagine.

Una politica di backup sospesa (in stato Held) non eseguirà i backup previsti dal programma ad essa assegnato, la macchina virtuale non può quindi essere considerata protetta, il che non rispetta gli standard SecNumCloud.

Non esitate a richiedere consigli al nostro team di supporto su questo argomento.