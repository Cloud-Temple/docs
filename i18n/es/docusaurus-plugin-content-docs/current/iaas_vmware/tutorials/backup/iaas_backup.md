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

Existen 2 maneras de clonar una máquina virtual:

- La primera opción permite clonar una máquina virtual directamente desde el icono __'Clonar'__ de su máquina virtual:

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- La segunda solución consiste en clonar la máquina virtual utilizando __una copia de seguridad__ de la máquina virtual y luego utilizando __la restauración en modo clon__ de una copia de seguridad.
Vaya a la sección __'Copia de seguridad'__ de su máquina virtual y elija la acción __'Restaurar'__ :

<img src={backupRestoIaas_001} />

A continuación, elija la opción __'Clonar'__ de restauración:

<img src={backupCloneIaas_004} />

#### ¿Por qué cuando voy a la página "políticas de copia de seguridad" y selecciono una política, no veo las mismas máquinas virtuales que cuando voy a "informes de copias de seguridad" y selecciono la misma política?

Esto significa que las máquinas virtuales faltantes tuvieron la política en cuestión asignada durante un tiempo (explicando su presencia en los informes de copias de seguridad), pero que __actualmente no es el caso__.

#### ¿Cómo agregar una política de copia de seguridad a una máquina virtual?

Vaya a la página __'Máquinas Virtuales'__ en la sección __'IaaS'__ del menú vertical en el lado izquierdo de la pantalla.

Seleccione una máquina virtual y luego la pestaña __'Políticas de copias de seguridad'__ de esta máquina:

<img src={backupPolicyIaas_001} />

Agregue la política de copia de seguridad deseada:

<img src={backupPolicyIaas_002} />

### ¿Cómo eliminar una política de copia de seguridad de una máquina virtual?

Vaya a la página __'Máquinas Virtuales'__, seleccione una máquina virtual y luego la pestaña __'Políticas de copias de seguridad'__ de esta máquina.

Elimine la política de copia de seguridad deseada y confirme la eliminación:

<img src={backupPolicyIaas_003} />

__*Nota:*__ *¡Cuidado! __Secnumcloud exige que haya al menos una política de copia de seguridad__ para cada máquina virtual.*

### ¿Cómo saber si una copia de seguridad se ejecutó correctamente?

Hay 2 soluciones posibles:

1. Vaya a la página __'Trabajos'__ del menú __'Copia de seguridad'__ en el menú vertical a la izquierda de su pantalla. Elija el trabajo correspondiente a la copia de seguridad y selecciónelo.
Luego, encuentre el *jobsession* correspondiente a su copia de seguridad, selecciónelo mediante el menú __'Acciones'__.

<img src={backupPolicyIaas_006} />

Estas acciones permiten obtener los registros detallados de la ejecución de la copia de seguridad. Puede buscar en los registros de copia de seguridad:

<img src={backupPolicyIaas_005} />

2. Vaya a la página __'Informes de copias de seguridad'__ y seleccione la política que le interesa:

<img src={backupPolicyIaas_004} />

Luego puede filtrar por fecha, descargar el informe en formato __PDF__ o __CSV__ para utilizarlo en herramientas externas.

### ¿Cómo iniciar una restauración?

Vaya a la página __'Máquinas Virtuales'__, seleccione una máquina virtual y luego la pestaña __'Copias de seguridad'__ de esta máquina. Para iniciar la restauración, seleccione la copia de seguridad que desea restaurar.

<img src={backupCloneIaas_003} />

### ¿Qué es la opción de quiescing?

El __quiescing__ es un proceso que consiste en notificar al sistema para que se ponga en un estado adecuado antes del inicio del snapshot.
Por defecto, el __quiescing está activado__. Puede desactivarlo manualmente en caso de que el sistema gestione mal el snapshot o si el agente del hipervisor no esté instalado en la máquina virtual.

Para hacerlo, en la sección __'Copias de seguridad'__ de su máquina virtual, haga clic en __'Modificar las opciones'__ y desactive el __quiescing__ :

<img src={backupPolicyIaas_007} />

### ¿Cuáles son las opciones de restauración de una máquina virtual?

3 opciones principales para restaurar una VM, en su destino original o en un destino diferente:

- __'CLONAR'__ : Restaura la máquina virtual y la renombra, sin reemplazar la máquina virtual original.

<img src={backupRestoreIaas_001} />

- __'PRODUCCIÓN'__ : Restaura y __reemplaza__ la máquina virtual de producción (la máquina virtual actualmente en producción se __destruye__).

<img src={backupRestoreIaas_003} />

- __'PRUEBA'__ : Restaura la máquina virtual de producción __sin sobrescribirla__.

<img src={backupRestoreIaas_002} />

### ¿Cómo restaurar y reemplazar la máquina virtual de producción, sin conservar la máquina virtual actualmente en producción?

Elija el modo de restauración __'PRODUCCIÓN'__. La opción 'sobrescribir la máquina virtual' está activada por defecto.

<img src={backupRestoreIaas_003} />

### ¿Por qué el número de máquinas virtuales es diferente entre los módulos copia de seguridad y cálculo?

La diferencia en el número de máquinas virtuales puede deberse a que el módulo de copias de seguridad no ha recuperado las últimas máquinas creadas.

Para actualizar el módulo de copias de seguridad, debe solicitar a la capa de software de copia de seguridad que reinventorie las máquinas virtuales.
Para ello, en el menú __'Infraestructura'__ del menú vertical a la izquierda de la pantalla, navegue hasta el submenú __'Spectrum Protect Plus'__ y utilice el botón __'Acción'__ del inventario :

<img src={backupInvIaas_001} />

Tenga en cuenta que tiene la fecha del último inventario que se indica.

Si persiste la diferencia en la máquina virtual, puede deberse a las máquinas virtuales que albergan el sistema que permite las copias de seguridad. En efecto, estas no se cuentan a sí mismas en el cálculo del número de máquinas en el módulo de copias de seguridad.

### ¿Cómo realizar el inventario de las máquinas virtuales en el módulo de copia de seguridad?

Para iniciar un inventario de las máquinas virtuales en el módulo de copia de seguridad, en el menú __'Infraestructura'__ del menú vertical a la izquierda de la pantalla, navegue hasta el submenú __'Spectrum Protect Plus'__ y utilice el botón __'Acción'__ del inventario :

<img src={backupInvIaas_001} />

Tenga en cuenta que tiene la fecha del último inventario que se indica.

### ¿Por qué la copia de seguridad de mi máquina virtual falla indicando un problema de snapshot?

Este error significa que es la primera vez que su máquina intenta ser copiada.

__Durante la primera copia de seguridad de una máquina virtual, no debe haber ningún snapshot en la máquina.__

### ¿Cómo restaurar y reemplazar la máquina virtual de producción, conservando y renombrando la máquina virtual de producción?

Así es como proceder:

- Elija el modo __'CLONAR'__ (el modo clon implica un cambio de dirección MAC y UUID de la máquina virtual),
- Renombre la máquina virtual restaurada con el nombre definitivo (de la VM de producción),
- Renombre la antigua máquina virtual de producción (en _OLD).

### ¿Cómo restaurar una máquina virtual sin reemplazar la máquina virtual original?

Así es como proceder:

- Elija el modo __'CLONAR'__ (el modo clon implica un cambio de dirección MAC y UUID de la máquina virtual)
- Defina el nombre del clon (_REST u otros)

### ¿Por qué no puedo eliminar un disco en modo acceso instantáneo en mi máquina virtual?

Ejecute el inventario de la copia de seguridad: en el menú __'Infraestructura'__ del menú vertical a la izquierda de la pantalla, navegue hasta el submenú __'Spectrum Protect Plus'__ y utilice el botón __'Acción'__ del inventario :

<img src={backupInvIaas_001} />

Realice la eliminación del disco una vez finalizado el inventario. Actualice la máquina virtual para verificar que el disco haya sido eliminado correctamente.

### ¿Por qué no puedo iniciar una máquina virtual con una política en estado Held (política suspendida)?

Una política en estado "Held" es una función que permite suspender temporalmente las acciones de retención y eliminación de datos, garantizando así que los datos permanezcan intactos y disponibles más allá de su período de retención estándar para razones específicas como la conformidad o las necesidades legales.

Supongamos que una empresa tiene una política de retención de copia de seguridad de 30 días para ciertos datos de producción. Debido a una investigación legal, reciben una solicitud para preservar todas las copias de seguridad pertinentes durante un período indeterminado. Tiene la posibilidad de suspender la política de copia de seguridad asociada mediante el estado "Held" para evitar la eliminación automática de estas copias de seguridad después de 30 días, asegurando así que los datos estén disponibles durante toda la duración de la investigación.
Una política de copia de seguridad suspendida (en estado Held) no ejecutará las copias de seguridad del planificador asignado, por lo que la máquina virtual no podrá considerarse protegida, lo que no cumple con las normas SecNumCloud.

No dude en solicitar consejo a nuestro equipo de soporte sobre este tema.