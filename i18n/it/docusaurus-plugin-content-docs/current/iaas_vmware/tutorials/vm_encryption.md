---
title: Cifrare una macchina virtuale VMware
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from './images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from './images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from './images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from './images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from './images/shiva_hsm_kms_004.png'


Questo tutorial ti aiuta a cifrare una macchina virtuale IaaS VMWare dal portale Shiva.

### Prerequisiti

1. **Fornitore di chiavi (HSM/KMS)**:
   - Un fornitore di chiavi deve essere configurato sulla vStack. (Se nessun fornitore di chiavi è configurato, contatta il servizio di supporto tramite un ticket.)
   - Assicurati che il fornitore di chiavi sia correttamente attivato.

2. **Stato della macchina virtuale**:
   - La macchina virtuale deve essere spenta.
   - La macchina virtuale non deve essere in modalità 'test' spp.
   - La macchina virtuale non deve essere già cifrata.
   - La macchina virtuale non deve avere snapshot.
   - La macchina virtuale non deve essere replicata.

### Interfaccia

Una volta connesso al portale web Shiva, dal menu __'IaaS'__, sottomenu __'Configurazione'__ e la scheda __'vCenters'__, troverai l'informazione che ti indica se la crittografia è attivata sulla vStack in questione.

<img src={shivaHsmKms_000} />

Vai quindi al sottomenu __'Macchine virtuali'__ e seleziona la macchina che desideri cifrare.

Nelle informazioni generali della macchina virtuale, troverai l'informazione che indica se la macchina è già cifrata o meno.

<img src={shivaHsmKms_001} />

Se la macchina virtuale rispetta i prerequisiti, puoi continuare la procedura cliccando sul pulsante con un logo di lucchetto nella barra degli strumenti che indica __'Cifrare la macchina virtuale'__.

<img src={shivaHsmKms_002} />

Apparirà una finestra di conferma, seleziona Cifrare.

<img src={shivaHsmKms_003} />

Una volta completata l'azione, dovresti vedere che l'informazione è cambiata e indica che la tua macchina è cifrata.

<img src={shivaHsmKms_004} />