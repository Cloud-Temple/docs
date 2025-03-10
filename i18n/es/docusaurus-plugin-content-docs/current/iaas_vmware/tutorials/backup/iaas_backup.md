---
title: Preguntas frecuentes sobre la copia de seguridad
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---
import backupCloneIaas_001 from './images/backup_clone_iaas_001.png'
import backupCloneIaas_002 from './images/backup_clone_iaas_002.png'
import backupRestoIaas_001 from './images/backup_resto_iaas_001.png'
import backupCloneIaas_004 from './images/backup_clone_iaas_004.png'
import backupPolicyIaas_001 from './images/backup_policy_iaas_001.png'
import backupPolicyIaas_002 from './images/backup_policy_iaas_002.png'
import backupPolicyIaas_003 from './images/backup_policy_iaas_003.png'
import backupPolicyIaas_006 from './images/backup_policy_iaas_006.png'
import backupPolicyIaas_005 from './images/backup_policy_iaas_005.png'
import backupPolicyIaas_004 from './images/backup_policy_iaas_004.png'
import backupCloneIaas_003 from './images/backup_clone_iaas_003.png'
import backupPolicyIaas_007 from './images/backup_policy_iaas_007.png'
import backupRestoreIaas_001 from './images/backup_restore_iaas_001.png'
import backupRestoreIaas_003 from './images/backup_restore_iaas_003.png'
import backupRestoreIaas_002 from './images/backup_restore_iaas_002.png'
import backupInvIaas_001 from './images/backup_inv_iaas_001.png'

#### ¿Cómo clonar una máquina virtual?

Existen 2 formas de clonar una máquina virtual:

- La primera opción permite clonar una máquina virtual directamente desde el icono __'Clonar'__ de su máquina virtual:

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- La segunda opción consiste en clonar la máquina virtual utilizando __una copia de seguridad__ de la máquina virtual y luego utilizando __la restauración en modo clon__ de una copia de seguridad.
Ir a la sección __'Copia de seguridad'__ de su máquina virtual y elegir la acción __'Restaurar'__:

<img src={backupRestoIaas_001} />

Luego elija la opción de restauración __'Clonar'__:

<img src={backupCloneIaas_004} />

#### ¿Por qué cuando voy a la página "políticas de copia de seguridad" y selecciono una política, no veo las mismas máquinas virtuales que cuando voy a "informe de copias de seguridad" y selecciono la misma política?

Esto significa que las máquinas virtuales que faltan tuvieron la política en cuestión asignada durante
un tiempo (explicando su presencia en los informes de copias de seguridad) pero que __actualmente ya no es así__.

#### ¿Cómo agregar una política de copia de seguridad a una máquina virtual?

Vaya a la página __'Máquinas Virtuales'__ en la sección __'IaaS'__ del menú verde en el lado izquierdo de la pantalla.

Seleccione una máquina virtual y luego la pestaña __'Políticas de copias de seguridad'__ de esa máquina:

<img src={backupPolicyIaas_001} />

Agregue la política de copia de seguridad deseada:

<img src={backupPolicyIaas_002} />

### ¿Cómo eliminar una política de copia de seguridad de una máquina virtual?

Vaya a la página __'Máquinas Virtuales'__, seleccione una máquina virtual y luego la pestaña __'Políticas de copias de seguridad'__ de esa máquina.

Elimine la política de copia de seguridad deseada y confirme la eliminación:

<img src={backupPolicyIaas_003} />

__*Nota:*__ *¡Atención! __Secnumcloud impone que haya al menos una política de copia de seguridad__ para cada máquina virtual.*

### ¿Cómo saber si una copia de seguridad se ejecutó correctamente?

Hay 2 soluciones posibles:

1. Vaya a la página de __'Tareas'__ en el menú __'Copia de seguridad'__ en el menú verde a la izquierda de su pantalla. Elija la tarea correspondiente a la copia de seguridad y selecciónela.
Luego, encuentre la *sesión de tarea* correspondiente a su copia de seguridad, selecciónela usando el menú __'Acciones'__.

<img src={backupPolicyIaas_006} />

Estas acciones permiten ver los registros detallados de la ejecución de la copia de seguridad. Puede buscar en los registros de la copia de seguridad:

<img src={backupPolicyIaas_005} />

2. Vaya a la página __'Informes de copia de seguridad'__ y seleccione la política que le interese:

<img src={backupPolicyIaas_004} />

Puede filtrar por fecha, descargar el informe en formato __PDF__ o __CSV__ para utilizarlo en herramientas de terceros.

### ¿Cómo iniciar una restauración?

Vaya a la página __'Máquinas Virtuales'__, seleccione una máquina virtual y luego la pestaña __'Copias de seguridad'__ de esa máquina. Para iniciar la restauración, seleccione la copia de seguridad a restaurar.

<img src={backupCloneIaas_003} />

### ¿Qué es la opción de quiescing?

El __quiescing__ es un proceso que consiste en notificar al sistema para que se ponga en un estado adecuado antes de que comience el snapshot.
Por defecto, el __quiescing está activado__. Puede desactivarse manualmente en caso de que el sistema maneje mal el snapshot o si el agente del hipervisor no está instalado en la máquina virtual.

Para ello, en la sección __'Copias de seguridad'__ de su máquina, haga clic en __'Modificar las opciones'__ y desactive el __quiescing__:

<img src={backupPolicyIaas_007} />

### ¿Cuáles son las opciones de restauración de una máquina virtual?

Hay 3 opciones principales para restaurar una máquina virtual, en su destino inicial o en un destino diferente:

- __'CLONAR'__: Restaura la máquina virtual renombrándola, sin reemplazar la máquina virtual original.

<img src={backupRestoreIaas_001} />

- __'PRODUCCIÓN'__: Restaura y __reemplaza__ la máquina virtual en producción (la máquina virtual actualmente en producción es __destruida__)

<img src={backupRestoreIaas_003} />

- __'PRUEBA'__: Restaura la máquina virtual de producción __sin sobrescribirla__.

<img src={backupRestoreIaas_002} />

### ¿Cómo restaurar y reemplazar la máquina virtual de producción, sin mantener la máquina virtual actualmente en producción?

Elija el modo de restauración __'Producción'__. La opción de 'sobrescribir la máquina virtual' está seleccionada por defecto.

<img src={backupRestoreIaas_003} />

### ¿Por qué el número de máquinas virtuales es diferente entre los módulos de copia de seguridad y cómputo?

La diferencia de máquinas virtuales puede deberse a que el módulo de copias de seguridad no ha recuperado las últimas máquinas creadas.

Para actualizar el módulo de copias de seguridad, es necesario solicitar a la capa de software de copia de seguridad que vuelva a inventariar las máquinas virtuales.
Para ello, en el menú __'Infraestructura'__ del menú verde a la izquierda de la pantalla, navegue al submenú __'Spectrum Protect Plus'__ y utilice el botón __'Acción'__ del inventario:

<img src={backupInvIaas_001} />

Tenga en cuenta que la fecha del último inventario está indicada.

Si persiste una diferencia en la cantidad de máquinas virtuales, puede deberse a las máquinas virtuales que alojan el sistema que permite
las copias de seguridad. Estas no se contabilizan a sí mismas en el cálculo del número de máquinas en el módulo de copias de seguridad.

### ¿Cómo hacer el inventario de las máquinas virtuales en el módulo de copia de seguridad?

Para iniciar un inventario de las máquinas virtuales en el módulo de copias de seguridad, en el menú __'Infraestructura'__ del menú verde a la izquierda de la pantalla, navegue al submenú __'Spectrum Protect Plus'__ y utilice el botón __'Acción'__ del inventario:

<img src={backupInvIaas_001} />

Tenga en cuenta que la fecha del último inventario está indicada.

### ¿Por qué falla la copia de seguridad de mi máquina virtual indicando un problema de snapshot?

Este error significa que es la primera vez que su máquina intenta ser copiada.

__Durante la primera copia de seguridad de una máquina virtual, no debe haber ningún snapshot presente en la máquina.__

### ¿Cómo restaurar y reemplazar la máquina virtual de producción, conservando y renombrando la máquina virtual de producción?

Así es como debe proceder:

- Elija el modo __'CLONAR'__ (el modo clon implica un cambio de dirección MAC y UUID de la máquina virtual),
- Renombre la máquina virtual restaurada con el nombre definitivo (de la máquina virtual de producción),
- Renombre la antigua máquina virtual de producción (agregando _OLD al final).

### ¿Cómo restaurar una máquina virtual, sin reemplazar la máquina virtual original?

Así es como debe proceder:

- Elija el modo __'CLONAR'__ (el modo clon implica un cambio de dirección MAC y UUID de la máquina virtual)
- Defina el nombre del clon (_REST u otros)

### ¿Por qué no puedo eliminar un disco en modo de acceso instantáneo en mi máquina virtual?

Ejecute el inventario de la copia de seguridad: en el menú __'Infraestructura'__ del menú verde a la izquierda de la pantalla, navegue
al submenú __'Spectrum Protect Plus'__ y utilice el botón __'Acción'__ del inventario:

<img src={backupInvIaas_001} />

Realice la eliminación del disco una vez que el inventario haya terminado. Actualice la máquina virtual para verificar que el disco haya sido eliminado correctamente.

### ¿Por qué no puedo iniciar una máquina virtual con una política en estado Held (política suspendida)?

Una política en estado "Held" es una funcionalidad que permite suspender temporalmente las acciones de retención y eliminación de datos, garantizando así que los datos permanezcan intactos y disponibles más allá de su período de retención estándar por razones específicas como el cumplimiento o necesidades legales.

Supongamos que una empresa tiene una política de retención de copias de seguridad de 30 días para ciertos datos de producción. Debido a una investigación legal, reciben una solicitud para preservar todas las copias de seguridad pertinentes por un período indefinido. Tienen la opción de suspender la política de copia de seguridad asociada mediante el estado "Held" para evitar la eliminación automática de estas copias de seguridad después de 30 días, asegurando así que los datos estén disponibles durante toda la duración de la investigación.


Una política de respaldo suspendida (en estado Held) no ejecutará las copias de seguridad del plan asignado, y la máquina virtual no puede considerarse protegida, lo que no cumple con las normas de SecNumCloud.

No dudes en pedir consejo a nuestro equipo de soporte sobre este tema.