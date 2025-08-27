---
title: Guía de inicio
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationPolicies from './images/open_iaas_replication_policies.png'
import openIaasReplicationPolicyCreate from './images/open_iaas_replication_policy_create.png'
import openIaasReplicationPolicyDetails from './images/open_iaas_replication_policy_details.png'
import openIaasReplicationVmAssociate from './images/open_iaas_replication_vm_associate.png'
import openIaasReplicationVmList from './images/open_iaas_replication_vm_list.png'
import openIaasReplicationReplicas from './images/open_iaas_replication_replicas.png'
import openIaasReplicationStatus from './images/open_iaas_replication_status.png'

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

La replicación de máquinas virtuales permite crear y mantener copias sincronizadas de sus VMs entre diferentes zonas de disponibilidad, garantizando la continuidad del negocio y facilitando la implementación de planes de recuperación ante desastres.

### Gestión de Políticas de Replicación

Las políticas de replicación definen cómo y cuándo se replicarán sus máquinas virtuales. Acceda a la gestión de replicación a través del menú __'Replicación'__ en la sección OpenIaaS.

<img src={openIaasReplicationPolicies} />

#### Creación de una Política de Replicación

Para crear una nueva política de replicación:

1. Haga clic en el botón __'Crear Política'__
2. Complete la información requerida:
   - **Nombre de la política**: Elija un nombre descriptivo
   - **Almacenamiento de destino**: Seleccione el repositorio de almacenamiento (tipo `lvmohba`)
   - **Intervalo de replicación**: Elija entre 1-59 minutos o 1-24 horas
   - **Zona de disponibilidad de destino**: Seleccione la zona de destino

<img src={openIaasReplicationPolicyCreate} />

#### Detalles y Gestión de Políticas

Una vez creada, puede ver los detalles de la política incluyendo:
- Parámetros de configuración
- Máquinas virtuales asociadas
- Estado e historial de replicación

<img src={openIaasReplicationPolicyDetails} />

### Asociación de Máquinas Virtuales

#### Agregar VMs a una Política

Para asociar una máquina virtual con una política de replicación:

1. Seleccione la política objetivo
2. Haga clic en __'Asociar VM'__
3. Elija las máquinas virtuales a replicar
4. Confirme la asociación

<img src={openIaasReplicationVmAssociate} />

**Importante**: Las máquinas virtuales deben estar ubicadas en una zona de disponibilidad diferente a la zona de destino.

#### Gestión de VMs Asociadas

Vea y gestione todas las máquinas virtuales asociadas con sus políticas de replicación:

<img src={openIaasReplicationVmList} />

Para cada VM, puede:
- Ver el estado de replicación
- Modificar asociaciones
- Monitorear el historial de replicación

### Monitoreo de Réplicas

#### Vista General de Réplicas

Acceda a la lista completa de sus réplicas y su estado:

<img src={openIaasReplicationReplicas} />

Cada réplica muestra:
- Información de la máquina virtual fuente
- Ubicación de destino
- Marca de tiempo de la última replicación
- Estado actual

#### Estado de Replicación

Monitoree el estado en tiempo real de todas sus replicaciones:

<img src={openIaasReplicationStatus} />

La interfaz proporciona:
- **Historial de ejecución** con marcas de tiempo detalladas
- **Estado de éxito/fallo** para cada replicación
- **Métricas de rendimiento** y estadísticas
- **Notificaciones de alerta** para cualquier problema

### Mejores Prácticas

- **Planifique sus intervalos**: Elija la frecuencia de replicación basada en la criticidad de su aplicación
- **Monitoree el espacio de almacenamiento**: Asegúrese de tener espacio suficiente en las zonas de destino
- **Pruebe regularmente**: Verifique la integridad de las réplicas periódicamente
- **Documente las políticas**: Mantenga documentación clara de su estrategia de replicación

Esta solución de replicación se integra perfectamente con la infraestructura calificada SecNumCloud de Cloud Temple, proporcionando máxima seguridad y cumplimiento para sus datos críticos.
