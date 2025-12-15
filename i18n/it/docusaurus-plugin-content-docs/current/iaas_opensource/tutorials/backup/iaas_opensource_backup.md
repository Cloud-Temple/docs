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

È possibile esportare una macchina virtuale facendo clic sull'icona __'Esporta'__:

<img src={backupCloneOpenIaas_001} />
<img src={backupCloneOpenIaas_002} />

### Come aggiungere una politica di backup a una macchina virtuale?

Vai alla pagina __'Macchine Virtuali'__ nella sezione __'OpenIaaS'__ del menu verticale sul lato sinistro dello schermo.

Seleziona una macchina virtuale, quindi l'opzione __'Politiche di backup'__ relativa a tale macchina:

<img src={backupPolicyOpenIaas_001} />

Aggiungi la politica di backup desiderata:

<img src={backupPolicyOpenIaas_002} />

### Come eliminare una politica di backup da una macchina virtuale?

Vai alla pagina __'Macchine Virtuali'__, seleziona una macchina virtuale e poi l'opzione __'Politiche di backup'__ relativa a tale macchina.

Elimina la politica di backup desiderata e conferma l'eliminazione:

<img src={backupPolicyOpenIaas_003} />

__*Nota:*__ *Attenzione! __SecNumCloud richiede che ogni macchina virtuale abbia almeno una politica di backup assegnata__.*

### Come verificare che un backup sia stato eseguito correttamente?

Vai alla pagina __'Report'__ del menu __'Backup'__ nel menu di navigazione a sinistra dello schermo. Seleziona la politica di backup desiderata.

<img src={backupPolicyOpenIaas_004} />

Una volta selezionata una politica, potrai visualizzare i backup ordinati per __Data di avvio__.

<img src={backupPolicyOpenIaas_005} />

Per ogni backup è disponibile il dettaglio completo tramite l’azione __Visualizza__.

<img src={backupPolicyOpenIaas_006} />

### Come avviare un ripristino?

Vai alla pagina __'Macchine Virtuali'__, seleziona una macchina virtuale e poi l'opzione __'Backup'__ relativa a questa macchina. Per avviare il ripristino, seleziona il backup da ripristinare.

<img src={backupRestorationOpenIaas_001} />
<img src={backupRestorationOpenIaas_002} />