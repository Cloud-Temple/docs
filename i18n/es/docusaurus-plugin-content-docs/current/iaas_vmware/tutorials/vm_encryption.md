---
title: Cifrar una máquina virtual VMware
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from './images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from './images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from './images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from './images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from './images/shiva_hsm_kms_004.png'


Este tutorial te ayuda a cifrar una máquina virtual IaaS VMWare desde el portal Shiva.

### Prerrequisitos

1. **Proveedor de claves (HSM/KMS)** :
   - Un proveedor de claves debe estar configurado en la vStack. (Si no hay ningún proveedor de claves configurado, por favor contacta al servicio de soporte a través de un ticket.)
   - Asegúrate de que el proveedor de claves esté correctamente activado.

2. **Estado de la máquina virtual** :
   - La máquina virtual debe estar apagada.
   - La máquina virtual no debe estar en modo spp 'test'.
   - La máquina virtual no debe estar ya cifrada.
   - La máquina virtual no debe tener una snapshot.
   - La máquina virtual no debe estar replicada.

### Interfaz

Una vez conectado al portal web Shiva, desde el menú __'IaaS'__, submenú __'Configuración'__ y luego la pestaña __'vCenters'__, encontrarás la información que indica si el cifrado está activado en la vstack en cuestión.

<img src={shivaHsmKms_000} />

Dirígete luego al submenú __'Máquinas virtuales'__ y selecciona la máquina que deseas cifrar.

En la información general de la máquina virtual, encontrarás la información que indica si la máquina ya está cifrada o no.

<img src={shivaHsmKms_001} />

Si la máquina virtual cumple con los prerrequisitos, puedes continuar con el procedimiento haciendo clic en el botón con un logo de candado en la barra de herramientas que indica __'Cifrar la máquina virtual'__.

<img src={shivaHsmKms_002} />

Aparecerá una ventana de confirmación, selecciona Cifrar.

<img src={shivaHsmKms_003} />

Una vez que la acción se haya completado, deberías ver que la información ha cambiado y que indica que tu máquina está cifrada.

<img src={shivaHsmKms_004} />