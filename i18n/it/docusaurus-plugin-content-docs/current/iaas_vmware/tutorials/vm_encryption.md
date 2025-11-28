---
title: Crittografare una macchina virtuale VMware
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from './images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from './images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from './images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from './images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from './images/shiva_hsm_kms_004.png'

Questo tutorial ti aiuta a crittografare una macchina virtuale IaaS VMWare dal portale Console.

### Prerequisiti

1. **Fornitore di chiavi (HSM/KMS)**:
   - Un fornitore di chiavi deve essere configurato sulla vStack. (Se nessun fornitore di chiavi è configurato, si prega di contattare il servizio di supporto tramite un ticket.)
   - Assicurati che il fornitore di chiavi sia correttamente attivato.

2. **Stato della macchina virtuale**:
   - La macchina virtuale deve essere spenta.
   - La macchina virtuale non deve essere in modalità spp 'test'.
   - La macchina virtuale non deve essere già crittografata.
   - La macchina virtuale non deve avere snapshot.
   - La macchina virtuale non deve essere replicata.

### Interfaccia

Una volta connesso al portale web Console, dal menu **'IaaS'**, sottomenu **'Configurazione'** e poi la scheda **'vCenters'**, troverai l'informazione che ti indica se la crittografia è attivata sulla vstack in questione.

<img src={shivaHsmKms_000} />

Vai quindi nel sottomenu **'Macchine virtuali'** e seleziona la macchina che desideri crittografare.

Nelle informazioni generali della macchina virtuale, troverai l'informazione che indica se la macchina è già crittografata o meno.

<img src={shivaHsmKms_001} />

Se la macchina virtuale rispetta i prerequisiti, puoi continuare la procedura cliccando sul pulsante con un logo di lucchetto nella barra degli strumenti che indica **'Crittografa la macchina virtuale'**.

<img src={shivaHsmKms_002} />

Apparirà una finestra di conferma, seleziona Crittografa.

<img src={shivaHsmKms_003} />

Una volta terminata l'azione, dovresti vedere l'informazione che è cambiata e che ti indica che la tua macchina è crittografata.

<img src={shivaHsmKms_004} />
