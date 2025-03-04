---
title: Cifrare una macchina virtuale VMware
tags:
  - iaas_vmware
  - tutorials
---

Questo tutorial ti aiuta a cifrare una macchina virtuale IaaS VMware dal portale Shiva.

### Prerequisiti

1. **Provider di chiavi (HSM/KMS)**:
   - Un provider di chiavi deve essere configurato sul vStack. (Se nessun provider di chiavi è configurato, contattare il servizio di supporto tramite un ticket.)
   - Assicurarsi che il provider di chiavi sia correttamente attivato.

2. **Stato della macchina virtuale**:
   - La macchina virtuale deve essere spenta.
   - La macchina virtuale non deve essere in modalità spp 'test'.
   - La macchina virtuale non deve essere già cifrata.
   - La macchina virtuale non deve avere snapshot.
   - La macchina virtuale non deve essere replicata.

### Interfaccia

Una volta connesso al portale web Shiva, dal menu __'IaaS'__, sottomenu __'Configurazione'__ e poi la scheda __'vCenters'__, troverai l'informazione che indica se la cifratura è attivata sul vstack in questione.

![](images/shiva_hsm_kms_000.png)

Vai poi nel sottomenu __'Macchine virtuali'__ e seleziona la macchina che desideri cifrare.

Nelle informazioni generali della macchina virtuale, troverai l'informazione che indica se la macchina è già cifrata o meno.

![](images/shiva_hsm_kms_001.png)

Se la macchina virtuale rispetta i prerequisiti, puoi continuare la procedura cliccando sul pulsante con un logo di lucchetto nella barra degli strumenti che indica __'Cifrare la macchina virtuale'__.

![](images/shiva_hsm_kms_002.png)

Apparirà una finestra di conferma, seleziona Cifrare.

![](images/shiva_hsm_kms_003.png)

Una volta completata l'azione, dovresti vedere l'informazione che è cambiata e che indica che la tua macchina è cifrata.

![](images/shiva_hsm_kms_004.png)
