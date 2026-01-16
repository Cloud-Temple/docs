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

### Requis

1. **Proveedor de claves (HSM/KMS)**:
   - Debe estar configurado un proveedor de claves en la vStack. (Si ningún proveedor de claves está configurado, póngase en contacto con el servicio de soporte mediante un ticket.)
   - Asegúrese de que el proveedor de claves est correctamente activado.

2. **Estado de la máquina virtual**:
   - La máquina virtual debe estar apagada.
   - La máquina virtual no debe estar en modo 'test' de spp.
   - La máquina virtual no debe estar ya cifrada.
   - La máquina virtual no debe tener instantáneas (snapshots).
   - La máquina virtual no debe estar replicada.

### Interfaz

Una vez conectado al portal web Console, desde el menú **'IaaS'**, submenú **'Configuración'** y luego la pestaña **'vCenters'**, encontrarás la información que indica si el cifrado está activado en la vStack correspondiente.

<img src={shivaHsmKms_000} />

A continuación, ve al submenú **'Máquinas virtuales'** y selecciona la máquina que deseas cifrar.

En la sección de información general de la máquina virtual, encontrarás el indicador que te muestra si la máquina ya está cifrada o no.

<img src={shivaHsmKms_001} />

Si la máquina virtual cumple con los requisitos previos, puedes continuar el procedimiento haciendo clic en el botón con el ícono de candado en la barra de herramientas que indica **'Cifrar la máquina virtual'**.

<img src={shivaHsmKms_002} />

Aparecerá una ventana de confirmación. Selecciona Cifrar.

<img src={shivaHsmKms_003} />

Una vez finalizada la acción, deberías ver que la información ha cambiado y te indica que tu máquina está cifrada.

<img src={shivaHsmKms_004} />