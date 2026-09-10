---
title: Preguntas frecuentes sobre la copia de seguridad
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---
import backupCloneIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_001.png'
import backupCloneIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_002.png'
import backupRestoIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_resto_iaas_001.png'
import backupCloneIaas_004 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_004.png'
import backupPolicyIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_001.png'
import backupPolicyIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_002.png'
import backupPolicyIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_003.png'
import backupPolicyIaas_006 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_006.png'
import backupPolicyIaas_005 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_005.png'
import backupPolicyIaas_004 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_004.png'
import backupCloneIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_003.png'
import backupPolicyIaas_007 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_007.png'
import backupRestoreIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_001.png'
import backupRestoreIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_003.png'
import backupRestoreIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_002.png'
import backupInvIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_inv_iaas_001.png'

#### ¿Cómo clonar una máquina virtual?

Existen 2 formas de clonar una máquina virtual:

- La primera opción permite clonar una máquina virtual directamente desde el icono __'Clonar'__ de su máquina virtual:

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- La segunda opción consiste en clonar la máquina virtual utilizando __una copia de seguridad__ de la máquina virtual y, a continuación, utilizando __la restauración en modo clonar__ de una copia de seguridad.
Ve a la sección __'Copia de seguridad'__ de su máquina virtual y selecciona la acción __'Restaurar'__:

<img src={backupRestoIaas_001} />

Selecciona a continuación la opción __'Clonar'__ de restauración:

<img src={backupCloneIaas_004} />

#### ¿Por qué, cuando voy a la página "políticas de copia de seguridad" y selecciono una política, no veo las mismas máquinas virtuales que cuando voy a "informe de copias de seguridad" y selecciono la misma política?

Esto significa que las máquinas virtuales que faltan tenían asignada la política en cuestión durante
un tiempo (lo que explica su presencia en los informes de copias de seguridad), pero que __actualmente ya no es así__.

#### ¿Cómo agregar una política de copia de seguridad a una máquina virtual?

Vaya a la página __'Máquinas Virtuales'__ en la sección __'IaaS'__ de la barra de menú verde en el lado izquierdo de la pantalla.

Seleccione una máquina virtual y luego la pestaña __'Políticas de copia de seguridad'__ de esta máquina:

<img src={backupPolicyIaas_001} />

Agregue la política de copia de seguridad deseada:

<img src={backupPolicyIaas_002} />

### ¿Cómo eliminar una política de copia de seguridad de una máquina virtual?

Vaya a la página __'Máquinas Virtuales'__, seleccione una máquina virtual y luego la pestaña __'Políticas de copia de seguridad'__ de esta máquina.

Elimine la política de copia de seguridad deseada y confirme la eliminación:

<img src={backupPolicyIaas_003} />

__*Nota:*__ *¡Atención! __Secnumcloud exige que haya al menos una política de copia de seguridad__ para cada máquina virtual.*

### ¿Cómo saber si una copia de seguridad se ha ejecutado correctamente?

Existen 2 soluciones posibles:

1. Vaya a la página __'Jobs'__ del menú __'Copia de seguridad'__ en la barra verde a la izquierda de su pantalla. Seleccione la tarea correspondiente a la copia de seguridad y selecciónela.
A continuación, busque la *sesión de trabajo* correspondiente a su copia de seguridad y selecciónela mediante el menú __'Acciones'__.

<img src={backupPolicyIaas_006} />

Estas acciones permiten obtener los registros detallados de la ejecución de la copia de seguridad. Puede buscar en los registros de copia de seguridad:

<img src={backupPolicyIaas_005} />

1. Vaya a la página __'Informes de copia de seguridad'__ y seleccione la política que le interese:

<img src={backupPolicyIaas_004} />

A continuación, puede filtrar por fecha, descargar el informe en formato __PDF__ o __CSV__ para procesarlo en herramientas de terceros.

### ¿Cómo iniciar una restauración?

Acceda a la página __'Máquinas Virtuales'__, seleccione una máquina virtual y luego la pestaña __'Copias de seguridad'__ de esta máquina. Para iniciar la restauración, seleccione la copia de seguridad a restaurar.

<img src={backupCloneIaas_003} />

### ¿Qué es la opción de quiescing?

El __quiescing__ es un proceso que consiste en notificar al sistema para que se ponga en un estado adecuado antes de iniciar la instantánea.
Por defecto, el __quiescing está activado__. Puede desactivarse manualmente en el caso de que el sistema gestione mal la instantánea o si el agente del hipervisor no está instalado en la máquina virtual.

Para ello, en la sección __'Copias de seguridad'__ de tu máquina virtual, haz clic en __'Modificar opciones'__ y desactiva el __quiescing__:

<img src={backupPolicyIaas_007} />

### ¿Cuáles son las opciones de restauración de una máquina virtual?

3 opciones principales para restaurar una vm, en su destino inicial o en un destino diferente:

- __'CLONE'__ : Restaura la máquina virtual renombrándola, sin reemplazar la máquina virtual original.

<img src={backupRestoreIaas_001} />

- __'PRODUCTION'__ : Restaura y __reemplaza__ la máquina virtual de producción (la máquina virtual actualmente en producción es __destruida__)

<img src={backupRestoreIaas_003} />

- __'TEST'__ : Restaura la máquina virtual de producción __sin sobrescribirla__.

<img src={backupRestoreIaas_002} />

### ¿Cómo restaurar y reemplazar la máquina virtual de producción, sin conservar la máquina virtual actualmente en producción?

Seleccione el modo de restauración __'Producción'__. La opción 'sobrescribir la máquina virtual' es la opción predeterminada.

<img src={backupRestoreIaas_003} />

### ¿Por qué difiere el número de máquinas virtuales entre los módulos de copia de seguridad y de cómputo?

La diferencia en el número de máquinas virtuales puede deberse a que el módulo de copias de seguridad no ha recuperado las últimas máquinas creadas.

Para actualizar el módulo de copias de seguridad, es necesario solicitar a la capa de software de copia de seguridad que actualice el inventario de las máquinas virtuales.
Para ello, en el menú __'Infrastructure'__ de la barra verde a la izquierda de la pantalla, navegue al submenú __'Spectrum Protect Plus'__ y utilice el botón __'Action'__ del inventario:

<img src={backupInvIaas_001} />

Tenga en cuenta que se indica la fecha del último inventario.

Si persiste una diferencia en el número de máquinas virtuales, puede deberse a las máquinas virtuales que alojan el sistema que permite
las copias de seguridad. De hecho, estas no se incluyen en el cálculo del número de máquinas en el módulo de copias de seguridad.

### ¿Cómo realizar el inventario de las máquinas virtuales en el módulo de copia de seguridad?

Para ejecutar un inventario de las máquinas virtuales en el módulo de copia de seguridad, en el menú __'Infrastructure'__ de la barra verde a la izquierda de la pantalla, navegue hasta el submenú __'Spectrum Protect Plus'__ y utilice el botón __'Action'__ del inventario:

<img src={backupInvIaas_001} />

Tenga en cuenta que se muestra la fecha del último inventario.

### ¿Por qué falla la copia de seguridad de mi máquina virtual indicando un problema de instantánea?

Este error indica que es la primera vez que su máquina intenta ser respaldada.

__Durante la primera copia de seguridad de una máquina virtual, no debe haber ninguna instantánea presente en la máquina.__

### ¿Cómo restaurar y reemplazar la máquina virtual de producción, conservando y renombrando la máquina virtual de producción?

A continuación se indica cómo proceder:

- Seleccione el modo __'CLONE'__ (el modo clon provoca un cambio en la dirección MAC y el UUID de la máquina virtual),
- Renombre la máquina virtual restaurada con el nombre definitivo (de la vm de producción),
- Renombre la antigua máquina virtual de producción (en _OLD).

### ¿Cómo restaurar una máquina virtual sin reemplazar la máquina virtual original?

A continuación se indica cómo proceder:

- Seleccione el modo __'CLONE'__ (el modo clon provoca un cambio en la dirección MAC y el UUID de la máquina virtual)
- Defina el nombre del clon (_REST u otros)

### ¿Por qué no puedo eliminar un disco en modo instant access en mi máquina virtual?

Ejecute el inventario de la copia de seguridad: en el menú __'Infraestructura'__ de la barra verde a la izquierda de la pantalla, navegue
hasta el submenú __'Spectrum Protect Plus'__ y utilice el botón __'Acción'__ del inventario:

<img src={backupInvIaas_001} />

Elimine el disco una vez finalizado el inventario. Actualice la máquina virtual para verificar que el disco se haya eliminado correctamente.

### ¿Por qué no puedo iniciar una máquina virtual con una política en estado Held (política suspendida)?

Una política en estado "Held"  es una característica que permite suspender temporalmente las acciones de retención y eliminación de datos, garantizando así que los datos permanezcan intactos y disponibles más allá de su período de retención estándar por motivos específicos como el cumplimiento normativo o las necesidades legales.

Supongamos que una empresa tiene una política de retención de copias de seguridad de 30 días para ciertos datos de producción. Debido a una investigación legal, recibe una solicitud para preservar todas las copias de seguridad relevantes durante un período indeterminado. Puede suspender la política de copia de seguridad asociada mediante el estado "Held" para evitar la eliminación automática de estas copias de seguridad después de 30 días, asegurando así que los datos permanezcan disponibles durante toda la duración de la investigación.

Una política de copia de seguridad suspendida (en estado Held) no ejecutará las copias de seguridad de la programación asignada, por lo que la máquina virtual no podrá considerarse protegida, lo cual no cumple con las normas SecNumCloud.

No dude en solicitar asesoramiento a nuestro equipo de soporte sobre este tema.