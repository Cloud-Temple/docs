---
title: Chiffrer une machine virtuelle VMware
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from './images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from './images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from './images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from './images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from './images/shiva_hsm_kms_004.png'


Ce tutoriel vous aide à chiffrer une machine virtuelle IaaS VMWare depuis le portail Shiva.

### Prérequis

1. **Fournisseur de clé (HSM/KMS)** :
   - Un fournisseur de clé doit être configuré sur la vStack. (Si aucun fournisseur de clé n'est configuré, veuillez contacter le service support au travers d'un ticket.)
   - Assurez-vous que le fournisseur de clé est correctement activé.

2. **État de la machine virtuelle** :
   - La machine virtuelle doit être éteinte.
   - La machine virtuelle ne doit pas être en spp mode 'test'.
   - La machine virtuelle ne doit pas être déjà chiffrée.
   - La machine virtuelle ne doit pas avoir de snapshot.
   - La machine virtuelle ne doit pas être répliquée.

### Interface

Une fois connecté au portail web Shiva, depuis le menu __'IaaS'__, sous-menu __'Configuration'__ puis l'onglet __'vCenters'__, vous trouverez l'information vous indiquant si le chiffrement est activé sur la vstack en question.

<img src={shivaHsmKms_000} />

Rendez vous ensuite dans le sous-menu __'Machine virtuelles'__ puis sélectionnez la machine que vous souhaitez chiffrer.

Dans les informations générales de la machine virtuelle, vous trouverez l'information indiquant si la machine est déjà chiffrée ou non.

<img src={shivaHsmKms_001} />

Si la machine virtuelle respecte les prérequis, vous pouvez continuez la procédure en cliquant sur le bouton avec un logo de cadenas dans la barre d'outil indiquant __'Chiffrer la machine virtuelle'__.

<img src={shivaHsmKms_002} />

Une fenêtre de confirmation apparaitra, sélectionnez Chiffrer.

<img src={shivaHsmKms_003} />

Une fois l'action terminée, vous devriez voir l'information qui a changé et qui vous indique que votre machine est chiffrée.

<img src={shivaHsmKms_004} />

