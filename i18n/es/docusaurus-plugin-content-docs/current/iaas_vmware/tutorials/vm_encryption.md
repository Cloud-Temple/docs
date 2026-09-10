---
title: Cifrar una máquina virtual
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from '@site/docs/iaas_vmware/tutorials/images/shiva_hsm_kms_004.png'

Este tutorial le ayuda a cifrar una máquina virtual IaaS de VMware desde el portal de la consola.

### Requisitos

1. **Proveedor de claves (HSM/KMS)** :
   - Debe configurarse un proveedor de claves en vStack. (Si no hay ningún proveedor de claves configurado, póngase en contacto con el servicio de soporte a través de un ticket.)
   - Asegúrese de que el proveedor de claves esté correctamente activado.

2. **Estado de la máquina virtual** :
   - La máquina virtual debe estar apagada.
   - La máquina virtual no debe estar en modo 'test' de spp.
   - La máquina virtual no debe estar ya cifrada.
   - La máquina virtual no debe tener ningún snapshot.
   - La máquina virtual no debe estar replicada.

### Interfaz

Una vez conectado al portal web Console, desde el menú **'IaaS'**, submenú **'Configuración'** y la pestaña **'vCenters'**, encontrará la información que le indica si el cifrado está activado en la vstack en cuestión.

<img src={shivaHsmKms_000} />

A continuación, diríjase al submenú **'Máquinas virtuales'** y seleccione la máquina que desea cifrar.

En la información general de la máquina virtual, encontrará el dato que indica si la máquina ya está cifrada o no.

<img src={shivaHsmKms_001} />

Si la máquina virtual cumple con los requisitos previos, puede continuar el procedimiento haciendo clic en el botón con un icono de candado en la barra de herramientas que indica **'Cifrar la máquina virtual'**.

<img src={shivaHsmKms_002} />

Aparecerá una ventana de confirmación; seleccione Cifrar.

<img src={shivaHsmKms_003} />

Una vez finalizada la acción, debería ver que la información ha cambiado y le indica que su máquina está cifrada.

<img src={shivaHsmKms_004} />