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


This tutorial helps you encrypt an IaaS VMWare virtual machine from the Shiva portal.

### Prerequisites

1. **Key Provider (HSM/KMS)**:
   - A key provider must be configured on the vStack. (If no key provider is configured, please contact support through a ticket.)
   - Ensure the key provider is correctly activated.

2. **State of the Virtual Machine**:
   - The virtual machine must be powered off.
   - The virtual machine must not be in 'test' spp mode.
   - The virtual machine must not already be encrypted.
   - The virtual machine must not have a snapshot.
   - The virtual machine must not be replicated.

### Interface

Once logged into the Shiva web portal, from the __'IaaS'__ menu, sub-menu __'Configuration'__, then the __'vCenters'__ tab, you will find information indicating whether encryption is enabled on the vStack in question.

<img src={shivaHsmKms_000} />

Go to the __'Virtual Machines'__ sub-menu and select the machine you want to encrypt.

In the general information of the virtual machine, you will find information indicating whether the machine is already encrypted or not.

<img src={shivaHsmKms_001} />

If the virtual machine meets the prerequisites, you can continue the procedure by clicking the button with a padlock logo in the toolbar indicating __'Encrypt Virtual Machine'__.

<img src={shivaHsmKms_002} />

A confirmation window will appear, select Encrypt.

<img src={shivaHsmKms_003} />

Once the action is completed, you should see the information has changed, indicating that your machine is encrypted.

<img src={shivaHsmKms_004} />