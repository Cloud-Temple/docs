---
title: Cifrar una máquina virtual de VMware
tags:
  - iaas_vmware
  - tutorials
---
import shivaHsmKms_000 from './images/shiva_hsm_kms_000.png'
import shivaHsmKms_001 from './images/shiva_hsm_kms_001.png'
import shivaHsmKms_002 from './images/shiva_hsm_kms_002.png'
import shivaHsmKms_003 from './images/shiva_hsm_kms_003.png'
import shivaHsmKms_004 from './images/shiva_hsm_kms_004.png'

Este tutorial le ayuda a cifrar una máquina virtual IaaS de VMWare desde el portal Shiva.

### Requisitos previos

1. **Proveedor de claves (HSM/KMS)** :
   - Un proveedor de claves debe estar configurado en la vStack. (Si ningún proveedor de claves está configurado, por favor contacte al servicio de soporte a través de un ticket.)
   - Asegúrese de que el proveedor de claves esté correctamente activado.

2. **Estado de la máquina virtual** :
   - La máquina virtual debe estar apagada.
   - La máquina virtual no debe estar en modo 'test'.
   - La máquina virtual no debe estar ya cifrada.
   - La máquina virtual no debe tener instantáneas.
   - La máquina virtual no debe estar replicada.

### Interfaz

Una vez conectado al portal web Shiva, desde el menú **'IaaS'**, submenú **'Configuración'** y pestaña **'vCenters'**, encontrará la información que le indica si el cifrado está activado en la vStack en cuestión.

<img src={shivaHsmKms_000} />

A continuación, vaya al submenú **'Máquinas virtuales'** y seleccione la máquina que desee cifrar.

En las informaciones generales de la máquina virtual, encontrará la información que indica si la máquina ya está cifrada o no.

<img src={shivaHsmKms_001} />

Si la máquina virtual cumple los requisitos previos, puede continuar el procedimiento haciendo clic en el botón con un icono de candado en la barra de herramientas que indica **'Cifrar la máquina virtual'**.

<img src={shivaHsmKms_002} />

Aparecerá una ventana de confirmación, seleccione Cifrar.

<img src={shivaHsmKms_003} />

Una vez finalizada la acción, debería ver la información que ha cambiado y que le indica que su máquina está cifrada.

<img src={shivaHsmKms_004} />