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
   - Ensure the key provider is properly enabled.

2. **Virtual Machine State**:
   - The virtual machine must be powered off.
   - The virtual machine must not be in spp mode 'test'.
   - The virtual machine must not already be encrypted.
   - The virtual machine must not have any snapshots.
   - The virtual machine must not be replicated.

### Interface

After logging into the Console web portal, navigate to the **'IaaS'** menu, then the **'Configuration'** submenu, and select the **'vCenters'** tab to check whether encryption is enabled for the specific vStack.

<img src={shivaHsmKms_000} />

Next, go to the **'Virtual Machines'** submenu and select the virtual machine you wish to encrypt.

In the virtual machine's general information, you will find the status indicating whether the machine is already encrypted or not.

<img src={shivaHsmKms_001} />

If the virtual machine meets the prerequisites, proceed with the process by clicking the toolbar button displaying a lock icon labeled **'Encrypt Virtual Machine'**.

<img src={shivaHsmKms_002} />

A confirmation window will appear—select **Encrypt**.

<img src={shivaHsmKms_003} />

Once the operation is complete, you should see the updated status indicating that your virtual machine is now encrypted.

<img src={shivaHsmKms_004} />