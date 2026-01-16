---
title: Tutoriels
---

Ces tutoriels vous aident à utiliser et paramétrer la partie IaaS VMWare depuis le portail Console.

## Chiffrer une machine virtuelle VMWare

## Prérequisitos

1. **Proveedor de clave (HSM/KMS)**:
   - Un proveedor de clave debe estar configurado en la vStack. (Si no hay un proveedor de clave configurado, comuníquese con el servicio de soporte a través de un ticket.)
   - Asegúrese de que el proveedor de clave esté correctamente activado.

2. **Estado de la máquina virtual**:
   - La máquina virtual debe estar apagada.
   - La máquina virtual no debe estar en modo 'test'.
   - La máquina virtual no debe estar ya cifrada.

## Interfaz

Una vez conectado al portal web Console, desde el menú __'IaaS'__, submenú __'Configuración'__ y luego la pestaña __'vCenters'__, encontrará la información que le indica si el cifrado está activado en la vStack en cuestión.

![](images/shiva_hsm_kms_000.png)

Luego vaya al submenú __'Máquinas Virtuales'__ y seleccione la máquina que desea cifrar.

En la información general de la máquina virtual, encontrará la información que le indicará si la máquina ya está cifrada o no.

![](images/shiva_hsm_kms_001.png)

Si la máquina virtual cumple con los prerequisitos, puede continuar el procedimiento haciendo clic en el botón con un logo de candado en la barra de herramientas que indica __'Cifrar la máquina virtual'__.

![](images/shiva_hsm_kms_002.png)

Aparecerá una ventana de confirmación, seleccione Cifrar.

![](images/shiva_hsm_kms_003.png)

Una vez que la acción se haya completado, debería ver la información que ha cambiado y que le indica que su máquina está cifrada.

![](images/shiva_hsm_kms_004.png)
