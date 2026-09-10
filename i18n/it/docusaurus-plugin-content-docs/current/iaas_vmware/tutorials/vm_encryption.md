---
title: Crittografare una macchina virtuale
tags:
  - iaas_vmware
  - tutorial
---
import shivaHsmKms_000 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_004.png'

Questo tutorial ti aiuta a crittografare una macchina virtuale IaaS VMWare dalla console.

### Prerequisiti

1. **Fornitore di chiavi (HSM/KMS)** :
   - Un fornitore di chiavi deve essere configurato su vStack. (Se non è configurato alcun fornitore di chiavi, contattare il servizio di supporto tramite un ticket.)
   - Assicurarsi che il fornitore di chiavi sia correttamente attivato.

2. **Stato della macchina virtuale** :
   - La macchina virtuale deve essere spenta.
   - La macchina virtuale non deve essere in modalità 'test' spp.
   - La macchina virtuale non deve essere già crittografata.
   - La macchina virtuale non deve avere snapshot.
   - La macchina virtuale non deve essere replicata.

### Interfaccia

Una volta connessi alla Console web, dal menu **'IaaS'**, sottomenu **'Configurazione'** e quindi alla scheda **'vCenters'**, troverete l'informazione che indica se la crittografia è attivata sulla vstack in questione.

<img src={shivaHsmKms_000} />

Successivamente, recatevi nel sottomenu **'Macchine virtuali'** e selezionate la macchina che desiderate crittografare.

Nelle informazioni generali della macchina virtuale, troverete l'informazione che indica se la macchina è già crittografata o meno.

<img src={shivaHsmKms_001} />

Se la macchina virtuale soddisfa i prerequisiti, potete continuare la procedura facendo clic sul pulsante con l'icona di un lucchetto nella barra degli strumenti che indica **'Crittografa la macchina virtuale'**.

<img src={shivaHsmKms_002} />

Apparirà una finestra di conferma, selezionate Crittografa.

<img src={shivaHsmKms_003} />

Una volta completata l'operazione, dovreste vedere l'informazione modificata che indica che la vostra macchina è crittografata.

<img src={shivaHsmKms_004} />