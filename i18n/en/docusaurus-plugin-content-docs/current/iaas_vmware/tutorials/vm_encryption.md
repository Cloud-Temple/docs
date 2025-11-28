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

This tutorial helps you encrypt a VMware IaaS virtual machine from the Console portal.

### Prerequisites

1. **Key provider (HSM/KMS)** :
   - A key provider must be configured on the vStack. (If no key provider is configured, please contact the support service through a ticket.)
   - Ensure the key provider is correctly activated.

2. **Virtual machine status** :
   - The virtual machine must be powered off.
   - The virtual machine must not be in 'test' spp mode.
   - The virtual machine must not already be encrypted.
   - The virtual machine must not have snapshots.
   - The virtual machine must not be replicated.

### Interface

Once connected to the Console web portal, from the **'IaaS'** menu, under the **'Configuration'** submenu and the **'vCenters'** tab, you will find information indicating whether encryption is enabled on the relevant vStack.

<img src={shivaHsmKms_000} />

Then go to the **'Virtual Machines'** submenu and select the machine you want to encrypt.

In the virtual machine's general information, you will find information indicating whether the machine is already encrypted or not.

<img src={shivaHsmKms_001} />

If the virtual machine meets the prerequisites, you can proceed with the procedure by clicking the button with a lock icon in the toolbar indicating **'Encrypt the Virtual Machine'**.

<img src={shivaHsmKms_002} />

A confirmation window will appear, select Encrypt.

<img src={shivaHsmKms_003} />

Once the action is completed, you should see the updated information indicating that your machine is encrypted.

<img src={shivaHsmKms_004} />
