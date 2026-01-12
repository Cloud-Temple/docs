---
title: Encrypt a VMware Virtual Machine
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from './images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from './images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from './images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from './images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from './images/shiva_hsm_kms_004.png'

This tutorial guides you through encrypting an IaaS VMware virtual machine from the Console portal.

### Prerequisiti

1. **Fornitore di chiavi (HSM/KMS)**:
   - Un fornitore di chiavi deve essere configurato sulla vStack. (Se nessun fornitore di chiavi è configurato, contattare il servizio support tramite un ticket.)
   - Assicurarsi che il fornitore di chiavi sia correttamente abilitato.

2. **Stato della macchina virtuale**:
   - La macchina virtuale deve essere spenta.
   - La macchina virtuale non deve essere in modalità spp 'test'.
   - La macchina virtuale non deve già essere crittografata.
   - La macchina virtuale non deve avere snapshot.
   - La macchina virtuale non deve essere replicata.

### Interfaccia

Dopo esserti collegato al portale web Console, dal menu **'IaaS'**, sottomenu **'Configurazione'** e successivamente dalla scheda **'vCenters'**, troverai le informazioni che indicano se il cifratura è abilitata sulla vStack in questione.

<img src={shivaHsmKms_000} />

Successivamente, recati nel sottomenu **'Macchine virtuali'** e seleziona la macchina che desideri cifrare.

Nelle informazioni generali della macchina virtuale, troverai il dettaglio che indica se la macchina è già cifrata o meno.

<img src={shivaHsmKms_001} />

Se la macchina virtuale soddisfa i prerequisiti, puoi proseguire la procedura facendo clic sul pulsante con l'icona di un lucchetto nella barra degli strumenti contrassegnato da **'Cifra la macchina virtuale'**.

<img src={shivaHsmKms_002} />

Verrà visualizzata una finestra di conferma: seleziona **'Cifra'**.

<img src={shivaHsmKms_003} />

Una volta completata l'azione, dovresti notare che l'informazione è cambiata, indicando che la tua macchina è ora cifrata.

<img src={shivaHsmKms_004} />