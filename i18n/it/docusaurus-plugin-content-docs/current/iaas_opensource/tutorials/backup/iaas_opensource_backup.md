---
title: Domande frequenti sul backup
tags:
  - iaas_opensource
  - tutorials
  - iaas_opensource_backup
---

import backupCloneOpenIaas_001 from './images/backup_clone_iaas_opensource_001.png'
import backupCloneOpenIaas_002 from './images/backup_clone_iaas_opensource_002.png'
import backupPolicyOpenIaas_001 from './images/backup_policy_iaas_opensource_001.png'
import backupPolicyOpenIaas_002 from './images/backup_policy_iaas_opensource_002.png'
import backupPolicyOpenIaas_003 from './images/backup_policy_iaas_opensource_003.png'
import backupPolicyOpenIaas_004 from './images/backup_policy_iaas_opensource_004.png'
import backupPolicyOpenIaas_005 from './images/backup_policy_iaas_opensource_005.png'
import backupPolicyOpenIaas_006 from './images/backup_policy_iaas_opensource_006.png'
import backupRestorationOpenIaas_001 from './images/backup_restoration_iaas_opensource_001.png'
import backupRestorationOpenIaas_002 from './images/backup_restoration_iaas_opensource_002.png'

---

### Come clonare una macchina virtuale?

C'è solo un modo per clonare una macchina virtuale:

- Direttamente dall'icona __'Esporta'__ della tua macchina virtuale:

<img src={backupCloneOpenIaas_001} />
<img src={backupCloneOpenIaas_002} />

---

### Come aggiungere una politica di backup a una macchina virtuale?

Vai alla pagina __'Macchine virtuali'__ nella sezione __'OpenIaaS'__ del banner del menu verde sul lato sinistro dello schermo.

Seleziona una macchina virtuale e poi la scheda __'Politiche di backup'__ di questa macchina:

<img src={backupPolicyOpenIaas_001} />

Aggiungi la politica di backup desiderata:

<img src={backupPolicyOpenIaas_002} />

---

### Come rimuovere una politica di backup da una macchina virtuale?

Vai alla pagina __'Macchine virtuali'__, seleziona una macchina virtuale e poi la scheda __'Politiche di backup'__ di questa macchina.

Elimina la politica di backup desiderata e conferma l'eliminazione:

<img src={backupPolicyOpenIaas_003} />

__*Nota:*__ *Attenzione! __SecNumCloud richiede che ci sia almeno una politica di backup__ per ogni macchina virtuale.*

---

### Come sapere se un backup è stato eseguito correttamente?

Vai alla pagina __'Rapporti'__ del menu __'Backup'__ nel menu di navigazione a sinistra dello schermo. Scegli la politica di tua scelta e selezionala.

<img src={backupPolicyOpenIaas_004} />

Una volta selezionata una politica, hai accesso ai backup ordinati per __Data di inizio__.

<img src={backupPolicyOpenIaas_005} />

Hai a tua disposizione il dettaglio completo di ogni backup dall'azione __Visualizza__.

<img src={backupPolicyOpenIaas_006} />

---

### Come avviare un ripristino?

Vai alla pagina __'Macchine virtuali'__, seleziona una macchina virtuale e poi la scheda __'Backup'__ di questa macchina. Per avviare il ripristino, seleziona il backup da ripristinare.

<img src={backupRestorationOpenIaas_001} />
<img src={backupRestorationOpenIaas_002} />

---
