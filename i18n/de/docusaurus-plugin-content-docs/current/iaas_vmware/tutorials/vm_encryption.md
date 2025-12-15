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

### Prerequisites

1. **Key Provider (HSM/KMS)**:
   - A key provider must be configured on the vStack. (If no key provider is configured, please contact support via a ticket.)
   - Ensure the key provider is correctly activated.

2. **Virtual Machine Status**:
   - The virtual machine must be powered off.
   - The virtual machine must not be in spp mode 'test'.
   - The virtual machine must not already be encrypted.
   - The virtual machine must not have any snapshots.
   - The virtual machine must not be replicated.

### Schnittstelle

Nach der Anmeldung am Web-Portal Console finden Sie unter dem Menü **'IaaS'**, Untermenü **'Konfiguration'** und dem Tab **'vCenters'** Informationen darüber, ob die Verschlüsselung für die betreffende vStack aktiviert ist.

<img src={shivaHsmKms_000} />

Wechseln Sie anschließend zum Untermenü **'Virtuelle Maschinen'** und wählen Sie die virtuelle Maschine aus, die Sie verschlüsseln möchten.

In den allgemeinen Informationen zur virtuellen Maschine finden Sie Hinweise, ob die Maschine bereits verschlüsselt ist oder nicht.

<img src={shivaHsmKms_001} />

Wenn die virtuelle Maschine die Voraussetzungen erfüllt, können Sie die Prozedur fortsetzen, indem Sie auf die Schaltfläche mit dem Schloss-Symbol in der Werkzeugleiste klicken, die mit **'Virtuelle Maschine verschlüsseln'** beschriftet ist.

<img src={shivaHsmKms_002} />

Es erscheint ein Bestätigungsdialogfeld. Wählen Sie **'Verschlüsseln'**.

<img src={shivaHsmKms_003} />

Nach Abschluss der Aktion sollten Sie die aktualisierte Information sehen, die Ihnen mitteilt, dass Ihre Maschine nun verschlüsselt ist.

<img src={shivaHsmKms_004} />