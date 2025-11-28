---
title: Guía de inicio
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationMenu from './images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from './images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from './images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from './images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from './images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from './images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from './images/open_iaas_replication_replicas_table.png'
import openIaasVmConsoleBtn from './images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from './images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from './images/open_iaas_vm_console_clipboard.png'

## Cálculo

### Gestión de máquinas virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la consola Shiva en el menú __'OpenIaaS'__ situado en la barra verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su Cloud de confianza.

<img src={openIaasVirtualMachinesList} />

Tiene acceso a la siguiente información para cada máquina virtual:

- Su nombre.
- Su estado (apagada, encendida).
- Su zona de disponibilidad (AZ).
- Su sistema operativo.
- La cantidad de CPU virtuales (vCPU).
- La cantidad de memoria virtual (vRAM).

### Acciones sobre las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz:

- Actualizar la lista de máquinas virtuales.
- Filtrar la lista.
- Buscar una máquina virtual por su nombre.
- Crear una nueva máquina virtual.

<img src={openIaasVirtualMachinesListActions} />

Cuando hace clic en la flecha desplegable verde a la derecha de la lista para una máquina virtual, accede a todas las informaciones relacionadas con ella.

<img src={openIaasVirtualMachineOverview} />

Una barra rápida permite realizar las siguientes acciones:

<img src={openIaasVirtualMachineActions} />

- Encender la máquina virtual.
- Apagarla.
- Reiniciarla.
- Abrir la consola.
- Montar un ISO.
- Desmontar un ISO.
- Convertir la máquina virtual en plantilla.
- Moverla.
- Renombrarla.
- Eliminarla.

En la pestaña de información '__Generales__', encontrará información detallada sobre su máquina virtual, como su ubicación física (AZ, Pool, Host), la RAM, el CPU, las direcciones IP y otras.

<img src={openIaasVirtualMachineOverviewInformations} />

Una pestaña '__Avanzado__' permite consultar información más específica:

- UUID de la máquina virtual
- Herramientas invitadas
- Sistema operativo invitado
- Unidad DVD

Así como modificar ciertas opciones, tales como:

- El orden de arranque
- El arranque seguro (secure boot)
- El arranque automático (imposible si no hay ninguna política de copia de seguridad asociada a la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Consola de una máquina virtual

La consola de una máquina virtual está disponible desde la lista de máquinas virtuales haciendo clic en el icono __'Consola'__:

<img src={openIaasVmConsoleBtn} />

Se abre un nuevo separador en su navegador y se muestra entonces la consola de su máquina, basada en un cliente VNC:

<img src={openIaasVmConsoleOpen} />

Es posible realizar las siguientes acciones en el menú VNC:
- solicitar el envío de teclas especiales,
- forzar un mapeo de teclado (en caso de que su máquina virtual no tenga la misma disposición de teclado que su navegador web),
- abrir un campo de texto que se puede transmitir a la máquina. Este método reemplaza el antiguo portapapeles no funcional,
- pasar al modo de pantalla completa,
- cambiar el tamaño de la ventana (escalamiento).

#### Keyboard layout support

The input entered in the console depends on the keyboard language of your web browser, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option on the left side of the screen is enabled or not.

Below is a summary of the possible scenarios:

| Physical machine keyboard language (input) | Virtual machine keyboard language | 'Enforce keyboard' option selected | Result (output)        |
| ------------------------------------------ | --------------------------------- | ---------------------------------- | ---------------------- |
| French                                     | French                            | No                                 | ✅                     |
| French                                     | French                            | Yes                                | Not recommended        |
| French                                     | English                           | No                                 | English                |
| French                                     | English                           | Yes                                | ✅                     |
| English                                    | French                            | No                                 | French                 |
| English                                    | French                            | Yes                                | ✅                     |
| English                                    | English                           | No                                 | ✅                     |
| English                                    | English                           | Yes                                | Not recommended        |

__Note__:
- If certain characters do not appear during manual input, you can try using the clipboard.

#### Funcionamiento del portapapeles
Esta función le permite enviar una cadena completa de caracteres a su máquina virtual. Es importante tener en cuenta que la tecla "enforce keyboard" influye en la forma en que esta cadena de caracteres será transmitida a su máquina virtual. Si observa durante la escritura en la consola que la opción "enforce keyboard" es necesaria, recuerde activarla antes de utilizar el portapapeles.  
Esta función puede utilizarse para enviar una contraseña, un comando o el contenido de un archivo de configuración, por ejemplo:

<img src={openIaasVmConsoleClipboard} />

Al hacer clic en el botón "Pegar", el contenido de su campo de texto se envía a su máquina virtual.

## Replicación

### Access to replication management

The replication management interface is available in the Console under the menu __'OpenIaaS'__ > __'Replication'__, located on the green bar on the left side of the screen.

<img src={openIaasReplicationMenu} />

### Creación de una política de replicación

En la sección __'Replicación'__, puede crear políticas que definan los parámetros de protección de sus máquinas virtuales.

<img src={openIaasReplicationPoliciesView} />

Para crear una nueva política, haga clic en el botón __'Agregar una política'__. Se abrirá un formulario con los siguientes pasos:

#### Paso 1: Información general

- __Nombre__: Asigne un nombre descriptivo a su política
- __Frecuencia__: Seleccione el intervalo de replicación (1-59 minutos o 1-24 horas)

<img src={openIaasReplicationPolicyForm1} />

#### Step 2: Storage Selection

- __Availability Zone__: Select the destination zone
- __Pool__: Choose the resource pool
- __Block Storage__: Select the destination storage

<img src={openIaasReplicationPolicyForm2} />

#### Paso 3: Validación

Verifique los parámetros y haga clic en __'Agregar'__ para crear la política.

### Asociación de una VM a la replicación

Para proteger una máquina virtual, acceda a los detalles de su VM desde la lista de máquinas virtuales.

En la vista detallada de la VM, encontrará una sección __'Replicación'__:

<img src={openIaasVmReplicationSection} />

Pasos para asociar una VM a la replicación:

1. Haga clic en __'Configurar una política'__
2. Seleccione la política de replicación deseada en el menú desplegable
3. Valide su selección

La replicación se iniciará automáticamente tras la validación.

### Gestión de políticas y réplicas

#### Vista de las políticas

La pestaña __'Políticas'__ le permite visualizar todas sus políticas de replicación:

<img src={openIaasReplicationPoliciesTable} />

Tiene acceso a la siguiente información para cada política:

- Su nombre
- Su frecuencia de replicación
- La zona de disponibilidad de destino
- El pool asociado
- El almacenamiento en bloque utilizado

Las acciones disponibles incluyen:

- Consultar los detalles de cada política
- Modificar los parámetros
- Eliminar una política no utilizada

#### Vista de réplicas

La pestaña __'Réplicas'__ muestra todas las máquinas virtuales en proceso de replicación:

<img src={openIaasReplicationReplicasTable} />

Puede visualizar:

- El nombre de las máquinas virtuales replicadas
- La ubicación de origen y destino
- La política de replicación asociada

Las acciones disponibles incluyen:

- Exportación de datos en formato CSV
- Consulta de los detalles de replicación
- Gestión de réplicas por política