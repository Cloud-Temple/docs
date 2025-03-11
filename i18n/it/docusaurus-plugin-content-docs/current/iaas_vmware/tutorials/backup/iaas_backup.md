---
title: Domande frequenti riguardanti il backup
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---
import backupCloneIaas_001 from './images/backup_clone_iaas_001.png'
import backupCloneIaas_002 from './images/backup_clone_iaas_002.png'
import backupRestoIaas_001 from './images/backup_resto_iaas_001.png'
import backupCloneIaas_004 from './images/backup_clone_iaas_004.png'
import backupPolicyIaas_001 from './images/backup_policy_iaas_001.png'
import backupPolicyIaas_002 from './images/backup_policy_iaas_002.png'
import backupPolicyIaas_003 from './images/backup_policy_iaas_003.png'
import backupPolicyIaas_006 from './images/backup_policy_iaas_006.png'
import backupPolicyIaas_005 from './images/backup_policy_iaas_005.png'
import backupPolicyIaas_004 from './images/backup_policy_iaas_004.png'
import backupCloneIaas_003 from './images/backup_clone_iaas_003.png'
import backupPolicyIaas_007 from './images/backup_policy_iaas_007.png'
import backupRestoreIaas_001 from './images/backup_restore_iaas_001.png'
import backupRestoreIaas_003 from './images/backup_restore_iaas_003.png'
import backupRestoreIaas_002 from './images/backup_restore_iaas_002.png'
import backupInvIaas_001 from './images/backup_inv_iaas_001.png'

#### Come clonare una macchina virtuale?

Esistono due modi per clonare una macchina virtuale:

- La prima opzione permette di clonare una macchina virtuale direttamente dall'icona __'Clone'__ della tua macchina virtuale:

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- La seconda soluzione consiste nel clonare la macchina virtuale utilizzando __un backup__ della macchina virtuale e poi utilizzando __il ripristino in modalità clone__ di un backup.
Vai alla sezione __'Backup'__ della tua macchina virtuale e scegli l'azione __'Ripristina'__:

<img src={backupRestoIaas_001} />

Scegli poi l'opzione __'Clone'__ di ripristino:

<img src={backupCloneIaas_004} />

#### Perché quando vado alla pagina "politiche di backup" e seleziono una politica, non vedo le stesse macchine virtuali che vedo quando vado su "report di backup" e seleziono la stessa politica?

Ciò significa che le macchine virtuali mancanti hanno avuto la politica in questione assegnata loro per un certo periodo (spiegando la loro presenza nei report di backup) ma che __non è più così attualmente__.

#### Come aggiungere una politica di backup a una macchina virtuale?

Vai alla pagina __'Macchine Virtuali'__ nella sezione __'IaaS'__ del menu verde a sinistra dello schermo.

Seleziona una macchina virtuale poi la scheda __'Politiche di backup'__ di questa macchina:

<img src={backupPolicyIaas_001} />

Aggiungi la politica di backup desiderata:

<img src={backupPolicyIaas_002} />

### Come eliminare una politica di backup da una macchina virtuale?

Vai alla pagina __'Macchine Virtuali'__, seleziona una macchina virtuale e poi la scheda __'Politiche di backup'__ di questa macchina.

Elimina la politica di backup desiderata e conferma l'eliminazione:

<img src={backupPolicyIaas_003} />

__*Nota:*__ *Attenzione! __Secnumcloud richiede che ci sia almeno una politica di backup__ per ogni macchina virtuale.*

### Come sapere se un backup è stato eseguito correttamente?

Ci sono due soluzioni possibili:

1. Vai alla pagina __'Jobs'__ del menu __'Backup'__ nel menu verde a sinistra dello schermo. Scegli il job corrispondente al backup e selezionalo.
Poi, trova la *jobsession* corrispondente al tuo backup e selezionala attraverso il menu __'Azioni'__.

<img src={backupPolicyIaas_006} />

Queste azioni permettono di avere i log dettagliati dell'esecuzione del backup. Puoi cercare nei registri di backup:

<img src={backupPolicyIaas_005} />

2. Vai alla pagina __'Report di backup'__ e seleziona la politica che ti interessa:

<img src={backupPolicyIaas_004} />

Puoi quindi filtrare per data, scaricare il report in formato __PDF__ o __CSV__ per utilizzarlo in strumenti di terze parti.

### Come avviare un ripristino?

Vai alla pagina __'Macchine Virtuali'__, seleziona una macchina virtuale e poi la scheda __'Backup'__ di questa macchina. Per avviare il ripristino, seleziona il backup da ripristinare.

<img src={backupCloneIaas_003} />

### Cos'è l'opzione di quiescing?

Il __quiescing__ è un processo che consiste nell'avvisare il sistema per portarlo in uno stato appropriato prima dell'inizio del snapshot.
Per impostazione predefinita, il __quiescing è attivato__. Può essere disattivato manualmente nel caso in cui il sistema gestisca male lo snapshot o se l'agente dell'hypervisor non è installato sulla macchina virtuale.

Per fare ciò, nella sezione __'Backup'__ della tua macchina virtuale, clicca su __'Modifica opzioni'__ e disattiva il __quiescing__:

<img src={backupPolicyIaas_007} />

### Quali sono le opzioni di ripristino per una macchina virtuale?

Tre opzioni principali per ripristinare una vm, sulla destinazione iniziale o su una diversa:

- __'CLONE'__: Ripristina la macchina virtuale rinominandola, senza sostituire la macchina virtuale originale.

<img src={backupRestoreIaas_001} />

- __'PRODUZIONE'__: Ripristina e __sostituisce__ la macchina virtuale di produzione (la macchina virtuale attualmente in produzione viene __distrutta__)

<img src={backupRestoreIaas_003} />

- __'TEST'__: Ripristina la macchina virtuale di produzione __senza sovrascriverla__.

<img src={backupRestoreIaas_002} />

### Come ripristinare e sostituire la macchina virtuale di produzione, senza mantenere la macchina virtuale attualmente in produzione?

Scegli la modalità di ripristino __'Produzione'__. L'opzione 'sovrascrivi la macchina virtuale' è predefinita.

<img src={backupRestoreIaas_003} />

### Perché il numero di macchine virtuali è diverso tra i moduli di backup e compute?

La differenza nel numero delle macchine virtuali può derivare dal fatto che il modulo di backup non ha acquisito le ultime macchine create.

Per aggiornare il modulo di backup, è necessario richiedere al livello software di backup di reinventarizzare le macchine virtuali.
Per fare ciò, nel menu __'Infrastruttura'__ del menu verde a sinistra dello schermo, naviga verso il sottomenu __'Spectrum Protect Plus'__ e utilizza il pulsante __'Azione'__ dell'inventario:

<img src={backupInvIaas_001} />

Nota che hai la data dell'ultimo inventario indicata.

Se persiste una differenza nel numero delle macchine virtuali, ciò potrebbe derivare dalle macchine virtuali che ospitano il sistema che permette i backup. Infatti, queste ultime non si contano da sole nel calcolo del numero di macchine sul modulo di backup.

### Come fare l'inventario delle macchine virtuali sul modulo backup?

Per avviare un inventario delle macchine virtuali sul modulo di backup, nel menu __'Infrastruttura'__ del menu verde a sinistra dello schermo, naviga verso il sottomenu __'Spectrum Protect Plus'__ e utilizza il pulsante __'Azione'__ dell'inventario:

<img src={backupInvIaas_001} />

Nota che hai la data dell'ultimo inventario indicata.

### Perché il backup della mia macchina virtuale fallisce indicando un problema di snapshot?

Questo errore significa che è la prima volta che la tua macchina cerca di essere backupata.

__Durante il primo backup di una macchina virtuale, nessuno snapshot deve essere presente sulla macchina.__

### Come ripristinare e sostituire la macchina virtuale di produzione, mantenendo e rinominando la macchina virtuale di produzione?

Ecco come procedere:

- Scegli la modalità __'CLONE'__ (la modalità clone comporta un cambio di indirizzo MAC e UUID della macchina virtuale),
- Rinomina la macchina virtuale ripristinata con il nome definitivo (della vm di produzione),
- Rinomina la vecchia macchina virtuale di produzione (in _OLD).

### Come ripristinare una macchina virtuale, senza sostituire la macchina virtuale originale?

Ecco come procedere:

- Scegli la modalità __'CLONE'__ (la modalità clone comporta un cambio di indirizzo MAC e UUID della macchina virtuale)
- Definisci il nome del clone (_REST o altri)

### Perché non posso eliminare un disco in modalità instant access sulla mia macchina virtuale?

Esegui l'inventario del backup: nel menu __'Infrastruttura'__ del menu verde a sinistra dello schermo, naviga verso il sottomenu __'Spectrum Protect Plus'__ e utilizza il pulsante __'Azione'__ dell'inventario:

<img src={backupInvIaas_001} />

Effettua l'eliminazione del disco una volta completato l'inventario. Aggiorna la macchina virtuale per verificare che il disco sia stato eliminato correttamente.

### Perché non posso avviare una macchina virtuale con una politica in stato Held (politica sospesa)?

Una politica in stato "Held" è una funzionalità che consente di sospendere temporaneamente le azioni di retention e eliminazione dei dati, garantendo così che i dati rimangano intatti e disponibili oltre il loro periodo di retention standard per motivi specifici come conformità o esigenze legali.

Supponiamo che un'azienda abbia una politica di retention di backup di 30 giorni per alcuni dati di produzione. A causa di un'indagine legale, ricevono una richiesta per preservare tutti i backup pertinenti per un periodo di tempo indeterminato. Hai la possibilità di sospendere la politica di backup associata tramite lo stato "Held" per impedire l'eliminazione automatica di questi backup dopo 30 giorni, assicurando che i dati rimangano disponibili per tutta la durata dell'indagine.


Una politica di backup sospesa (in stato Held) non eseguirà i backup del piano assegnato, la macchina virtuale non può quindi essere considerata protetta il che non rispetta gli standard SecNumCloud.

Non esitate a chiedere consiglio al nostro team di supporto su questo argomento.