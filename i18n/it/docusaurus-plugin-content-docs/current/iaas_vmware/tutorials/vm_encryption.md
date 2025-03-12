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

Questo tutorial vi aiuta a cifrare una macchina virtuale IaaS VMWare dal portale Shiva.

### Prerequisiti

1. **Fornitore di chiavi (HSM/KMS)** :
   - Un fornitore di chiavi deve essere configurato sul vStack. (Se nessun fornitore di chiavi è configurato, contattate il servizio di supporto tramite un ticket.)
   - Assicuratevi che il fornitore di chiavi sia correttamente attivato.

2. **Stato della macchina virtuale** :
   - La macchina virtuale deve essere spenta.
   - La macchina virtuale non deve essere in modalità spp 'test'.
   - La macchina virtuale non deve essere già cifrata.
   - La macchina virtuale non deve avere snapshot.
   - La macchina virtuale non deve essere replicata.

### Interfaccia

Una volta connessi al portale web Shiva, dal menu **'IaaS'**, sottomenu **'Configurazione'** e poi la scheda **'vCenters'**, troverete l'informazione che indica se la cifratura è attivata sul vstack in questione.

<img src={shivaHsmKms_000} />

Andate poi nel sottomenu **'Macchine virtuali'** e selezionate la macchina che desiderate cifrare.

Nelle informazioni generali della macchina virtuale, troverete l'informazione che indica se la macchina è già cifrata o no.

<img src={shivaHsmKms_001} />

Se la macchina virtuale rispetta i prerequisiti, potete continuare la procedura cliccando sul pulsante con un logo di lucchetto nella barra degli strumenti che indica **'Cifrare la macchina virtuale'**.

<img src={shivaHsmKms_002} />

Apparirà una finestra di conferma, selezionate Cifrare.

<img src={shivaHsmKms_003} />

Una volta terminata l'azione, dovreste vedere l'informazione che è cambiata e che vi indica che la vostra macchina è cifrata.

<img src={shivaHsmKms_004} />
