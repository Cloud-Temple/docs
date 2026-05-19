---
title: Guía de inicio
---
import openIaasVirtualMachinesList from '@site/docs/iaas_opensource/images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from '@site/docs/iaas_opensource/images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from '@site/docs/iaas_opensource/images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from '@site/docs/iaas_opensource/images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from '@site/docs/iaas_opensource/images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from '@site/docs/iaas_opensource/images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationMenu from '@site/docs/iaas_opensource/images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from '@site/docs/iaas_opensource/images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from '@site/docs/iaas_opensource/images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from '@site/docs/iaas_opensource/images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from '@site/docs/iaas_opensource/images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from '@site/docs/iaas_opensource/images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from '@site/docs/iaas_opensource/images/open_iaas_replication_replicas_table.png'
import openIaasVmConsoleBtn from '@site/docs/iaas_opensource/images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from '@site/docs/iaas_opensource/images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from '@site/docs/iaas_opensource/images/open_iaas_vm_console_clipboard.png'

## Cálculo

### Gestión de las máquinas virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la Consola, en el menú __'OpenIaaS'__ ubicado en la barra verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su nube de confianza.

<img src={openIaasVirtualMachinesList} />

Tiene acceso a la siguiente información para cada máquina virtual:

- Su nombre.
- Su estado (apagada, encendida).
- Su zona de disponibilidad (AZ).
- Su sistema operativo.
- La cantidad de CPU virtuales (vCPU).
- La cantidad de memoria virtual (vRAM).

### Acciones sobre las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz :

- Actualizar la lista de máquinas virtuales.
- Filtrar la lista.
- Buscar una máquina virtual por su nombre.
- Crear una nueva máquina virtual.

<img src={openIaasVirtualMachinesListActions} />

Cuando hace clic en la flecha desplegable verde a la derecha de la lista para una máquina virtual, accede a toda la información concerniente a la misma.

<img src={openIaasVirtualMachineOverview} />

Una barra rápida permite realizar las siguientes acciones :

<img src={openIaasVirtualMachineActions} />

- Encender la máquina virtual.
- Apagarla.
- Reiniciarla.
- Abrir la consola.
- Montar una ISO.
- Desmontar una ISO.
- Convertir la máquina virtual en plantilla.
- Moverla.
- Renombrarla.
- Eliminarla.

En la pestaña de información '__Generales__', encontrará información detallada relativa a su máquina virtual, como su ubicación física (AZ, Pool, Host), la RAM, la CPU, las direcciones IP, entre otras.

<img src={openIaasVirtualMachineOverviewInformations} />

Una pestaña '__Avanzado__' permite consultar información más específica :

- UUID de la máquina virtual
- Guest tools
- SO invitado
- Unidad de DVD

Así como modificar ciertas opciones, como :

- El orden de arranque
- Secure Boot
- El arranque automático (imposible si no hay ninguna política de copia de seguridad asociada a la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Consola de una máquina virtual

La consola de una máquina virtual es accesible desde la lista de máquinas virtuales haciendo clic en el icono __'Consola'__ :

<img src={openIaasVmConsoleBtn} />

Se abrirá una nueva pestaña en su navegador y se mostrará la consola de su máquina, basada en un cliente VNC :

<img src={openIaasVmConsoleOpen} />

En el menú VNC es posible :

- solicitar el envío de teclas específicas,
- forzar un mapeo de teclado (en caso de que su máquina virtual no tenga la misma distribución de teclado que su navegador web),
- abrir un campo de texto transmitible a la máquina. Este método reemplaza al antiguo portapapeles que no funcionaba,
- cambiar a modo de pantalla completa,
- cambiar el tamaño de la ventana (scaling).

#### Soporte de distribuciones de teclado

La entrada realizada en la consola depende de la distribución del teclado de su navegador web, de la distribución del teclado de la máquina virtual y de la activación o no de la opción 'enforce keyboard' en el lado izquierdo de la pantalla.
A continuación se presenta un resumen de las situaciones posibles:

| Distribución del teclado de la máquina física (entrée) | Distribución del teclado de la máquina virtual | Opción 'enforce keyboard' seleccionada | Resultado (sortie)        |
| ------------------------------------------------------ | ---------------------------------------------- | -------------------------------------- | ------------------------- |
| Francés                                                | Francés                                        | No                                     | ✅                        |
| Francés                                                | Francés                                        | Sí                                     | No recomendado            |
| Francés                                                | Inglés                                         | No                                     | Inglés                    |
| Francés                                                | Inglés                                         | Sí                                     | ✅                        |
| Inglés                                                 | Francés                                        | No                                     | Francés                   |
| Inglés                                                 | Francés                                        | Sí                                     | ✅                        |
| Inglés                                                 | Inglés                                         | No                                     | ✅                        |
| Inglés                                                 | Inglés                                         | Sí                                     | No recomendado            |

__Nota__ :

- Si algunos caracteres no se ingresan correctamente en la entrada manual, puede intentar usar el portapapeles.

#### Funcionamiento del portapapeles

Esta funcionalidad le permite enviar una cadena de caracteres completa a su máquina virtual. Es importante tener en cuenta que la tecla "enforce keyboard" influye en la forma en que esta cadena de caracteres
se transmitirá a su máquina virtual. Si al escribir en la consola observa que la opción "enforce keyboard" es necesaria, recuerde activarla antes de utilizar el portapapeles.  
Esta funcionalidad puede utilizarse, por ejemplo, para enviar una contraseña, un comando o el contenido de un archivo de configuración:

<img src={openIaasVmConsoleClipboard} />

Al hacer clic en el botón "Paste", el contenido de su campo de texto se envía a su máquina virtual.

## Replicación

### Acceso a la gestión de la replicación

La interfaz de gestión de la replicación está disponible en la Consola en el menú __'OpenIaaS'__ > __'Replicación'__ ubicado en la barra verde a la izquierda de la pantalla.

<img src={openIaasReplicationMenu} />

### Creación de una política de replicación

En la sección __'Replicación'__, puede crear políticas que definan los parámetros de protección de sus máquinas virtuales.

<img src={openIaasReplicationPoliciesView} />

Para crear una nueva política, haga clic en el botón __'Agregar política'__. Se abrirá un formulario con los siguientes pasos:

#### Paso 1: Información general

- __Nombre__ : Asigne un nombre explícito a su política
- __Frecuencia__ : Seleccione el intervalo de replicación (1-59 minutes ou 1-24 heures)

<img src={openIaasReplicationPolicyForm1} />

#### Paso 2 : Selección del almacenamiento

- __Zona de disponibilité__ : Seleccione la zona de destino
- __Pool__ : Seleccione el pool de recursos
- __Block Storage__ : Seleccione el almacenamiento de destino

<img src={openIaasReplicationPolicyForm2} />

#### Paso 3 : Validación

Verifique los parámetros y haga clic en __'Agregar'__ para crear la política.

### Asociación de una VM a la replicación

Para proteger una máquina virtual, acceda a los detalles de su VM desde la lista de máquinas virtuales.

En la vista detallada de la VM, encontrará una sección __'Replicación'__ :

<img src={openIaasVmReplicationSection} />

Los pasos para asociar una VM a la replicación:

1. Haga clic en __'Configurar una política'__
2. Seleccione la política de replicación deseada en la lista desplegable
3. Confirme su elección

La replicación se inicia automáticamente tras la validación.

### Gestión de políticas y réplicas

#### Vista de las políticas

La pestaña __'Políticas'__ le permite visualizar todas sus políticas de replicación:

<img src={openIaasReplicationPoliciesTable} />

Tiene acceso a la siguiente información para cada política:

- Su nombre
- Su frecuencia de replicación
- La zona de disponibilidad de destino
- El pool asociado
- El almacenamiento de bloques utilizado

Las acciones disponibles incluyen:

- Consultar los detalles de cada política
- Modificar los parámetros
- Eliminar una política no utilizada

#### Vista de réplicas

La pestaña __'Réplicas'__ muestra todas las máquinas virtuales que se están replicando:

<img src={openIaasReplicationReplicasTable} />

Puede visualizar:

- El nombre de las máquinas virtuales replicadas
- La ubicación de origen y destino
- La política de réplica asociada

Las acciones disponibles incluyen:

- Exportación de datos en formato CSV
- Consulta de los detalles de réplica
- Gestión de réplicas por política