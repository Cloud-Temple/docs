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

## Cálculo

### Gestión de Máquinas Virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la consola Shiva en el menú __'OpenIaaS'__ situado en la barra verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su Cloud de confianza.

<img src={openIaasVirtualMachinesList} />

Tiene acceso a la siguiente información, para cada máquina virtual:

- Su nombre.
- Su estado (apagada, encendida).
- Su zona de disponibilidad (AZ).
- Su sistema operativo.
- La cantidad de CPU virtuales (vCPU).
- La cantidad de memoria virtual (vRAM).

### Acciones en las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz:

- Actualizar la lista de máquinas virtuales.
- Filtrar la lista.
- Buscar una máquina virtual por su nombre.
- Crear una nueva máquina virtual.

<img src={openIaasVirtualMachinesListActions} />

Cuando hace clic en la flecha verde a la derecha de la lista para una máquina virtual, accede a toda la información relativa a dicha máquina.

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

En la pestaña de información '__Generales__', encuentra información detallada relativa a su máquina virtual, como su ubicación física (AZ, Pool, Host), la RAM, el CPU, las direcciones IP y otras.

<img src={openIaasVirtualMachineOverviewInformations} />

Una pestaña '__Avanzado__' permite consultar información más específica:

- UUID de la máquina virtual
- Herramientas del invitado
- Sistema operativo del invitado
- Unidad DVD

Así como modificar ciertas opciones tales como:

- El orden de arranque
- El arranque seguro
- El arranque automático (imposible si no hay ninguna política de copia de seguridad asociada a la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

## Replicación

### Acceso a la Gestión de Replicación

La interfaz de gestión de replicación está disponible en la consola Shiva en el menú __'OpenIaaS'__ > __'Replicación'__ situado en la barra verde a la izquierda de la pantalla.

<img src={openIaasReplicationMenu} />

### Creación de una Política de Replicación

En la sección __'Replicación'__, puede crear políticas que definen los parámetros de protección de sus máquinas virtuales.

<img src={openIaasReplicationPoliciesView} />

Para crear una nueva política, haga clic en el botón __'Agregar una política'__. Se abre un formulario con los siguientes pasos:

#### Paso 1: Información General

- __Nombre__: Dé un nombre explícito a su política
- __Frecuencia__: Elija el intervalo de replicación (1-59 minutos o 1-24 horas)

<img src={openIaasReplicationPolicyForm1} />

#### Paso 2: Selección de Almacenamiento

- __Zona de Disponibilidad__: Seleccione la zona de destino
- __Pool__: Elija el pool de recursos
- __Block Storage__: Seleccione el almacenamiento de destino

<img src={openIaasReplicationPolicyForm2} />

#### Paso 3: Validación

Verifique los parámetros y haga clic en __'Agregar'__ para crear la política.

### Asociación de una VM con la Replicación

Para proteger una máquina virtual, acceda a los detalles de su VM desde la lista de máquinas virtuales.

En la vista detallada de la VM, encontrará una sección __'Replicación'__:

<img src={openIaasVmReplicationSection} />

Los pasos para asociar una VM con la replicación:

1. Haga clic en __'Configurar una política'__
2. Seleccione la política de replicación deseada de la lista desplegable
3. Valide su elección

La replicación comienza automáticamente después de la validación.

### Gestión de Políticas y Réplicas

#### Vista de Políticas

La pestaña __'Políticas'__ le permite visualizar todas sus políticas de replicación:

<img src={openIaasReplicationPoliciesTable} />

Tiene acceso a la siguiente información para cada política:

- Su nombre
- Su frecuencia de replicación
- La zona de disponibilidad de destino
- El pool asociado
- El block storage utilizado

Las acciones disponibles incluyen:

- Consultar los detalles de cada política
- Modificar los parámetros
- Eliminar una política no utilizada

#### Vista de Réplicas

La pestaña __'Réplicas'__ muestra todas las máquinas virtuales que están siendo replicadas actualmente:

<img src={openIaasReplicationReplicasTable} />

Puede visualizar:

- El nombre de las máquinas virtuales replicadas
- La ubicación de origen y destino
- La política de replicación asociada

Las acciones disponibles incluyen:

- Exportar datos en formato CSV
- Consultar los detalles de replicación
- Gestionar réplicas por política
