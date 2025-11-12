---
title: Guía de inicio
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasVmConsoleBtn from './images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from './images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from './images/open_iaas_vm_console_clipboard.png'
import openIaasReplicationMenu from './images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from './images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from './images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from './images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from './images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from './images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from './images/open_iaas_replication_replicas_table.png'

## Cálculo

### Gestión de Máquinas Virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la consola Shiva, dentro del menú "OpenIaaS" ubicado en el barra lateral superior a la izquierda del escritorio.

### Lista de máquinas virtuales

En la sección __'Máquinas Virtuales'__, tendrás acceso a la lista de tus máquinas virtuales alojadas en tu Cloud de confianza.

<img src={openIaasVirtualMachinesList} />

Para cada máquina virtual, podrás acceder a las siguientes informaciones:

- Su nombre.
- Su estado (encendido o apagado).
- La zona de disponibilidad (AZ).
- El sistema operativo.
- La cantidad de unidades de procesador virtuales (vCPU).
- La cantidad de memoria virtual (vRAM).

### Acciones sobre máquinas virtuales

Las siguientes acciones son posibles a partir de esta interfaz:

- Actualizar la lista de máquinas virtuales.
- Filtrar la lista.
- Buscar una máquina virtual por su nombre.
- Crear una nueva máquina virtual.

<img src={openIaasVirtualMachinesListActions} />

Al hacer clic en el botón desplegable verde a la derecha de la lista para una máquina virtual, se accede a toda la información relacionada con ella.

<img src={openIaasVirtualMachineOverview} />

Un barra rápida permite realizar las siguientes acciones:

<img src={openIaasVirtualMachineActions} />

- Enciender la máquina virtual.
- Apagarla.
- Reiniciarla.
- Abrir la consola.
- Montar un ISO.
- Desmontar un ISO.
- Convertir la máquina virtual en plantilla.
- Moverla.
- Renombrarla.
- Eliminarla.

En el apartado '__Información general__', se encuentran detalles detallados sobre tu máquina virtual, como su ubicación física (AZ, Pool, Host), la RAM, el CPU, las direcciones IP y otros datos relevantes.

<img src={openIaasVirtualMachineOverviewInformations} />

Un apartado '__Avanzado__' permite consultar información más específica:

- UUID de la máquina virtual
- Herramientas del invitado
- Sistema operativo invitado
- Lector DVD

Además, se pueden modificar ciertos parámetros, como:

- El orden de inicio
- El seguro de arranque
- Arrancar automáticamente (imposible si no está asociada ninguna política de respaldo a la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Consola de una máquina virtual

La consola de una máquina virtual está accesible desde la lista de máquinas virtuales haciendo clic en el icono __'Consola'__:

<img src={openIaasVmConsoleBtn} />

Se abre una nueva pestaña en su navegador que muestra la consola de su máquina, basada en un cliente VNC:

<img src={openIaasVmConsoleOpen} />

En el menú VNC, es posible:
- Solicitar el envío de teclas particulares,
- Forzar un mapeo de teclado (en caso de que su máquina virtual no tenga la misma disposición de teclado que su navegador web),
- Abrir un campo de texto transmisible a la máquina. Este método reemplaza el antiguo portapapeles no funcional,
- Pasar a modo de pantalla completa,
- Cambiar el tamaño de la ventana (escalado).

#### Soporte de disposiciones de teclado
La entrada realizada en la consola depende del idioma del teclado de su navegador web, del idioma del teclado de la máquina virtual y de si la opción 'enforce keyboard' está activada o no en el lado izquierdo de la pantalla. Aquí hay un resumen de las situaciones posibles con el idioma francés:

| Idioma del teclado de la máquina física (entrada) | Idioma del teclado de la máquina virtual | Opción 'enforce keyboard' seleccionada | Resultado (salida)        |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------ |
| Francés                                          | Francés                                  | No                                    | ✅                       |
| Francés                                          | Francés                                  | Sí                                    | No recomendado            |
| Francés                                          | Inglés                                   | No                                    | Inglés                  |
| Francés                                          | Inglés                                   | Sí                                    | ✅                       |
| Inglés                                           | Francés                                  | No                                    | Francés                 |
| Inglés                                           | Francés                                  | Sí                                    | ✅                       |
| Inglés                                           | Inglés                                   | No                                    | ✅                       |
| Inglés                                           | Inglés                                   | Sí                                    | No recomendado            |

__Nota__:
- Si ciertos caracteres no funcionan con la entrada manual, puede intentar a través del portapapeles.

#### Funcionamiento del portapapeles
Esta funcionalidad le permite enviar toda una cadena de caracteres hacia su máquina virtual. Es importante tener en cuenta que la tecla "enforce keyboard" influye en la forma en que esta cadena de caracteres será transmitida a su máquina virtual. Si observa durante la entrada en la consola que la opción "enforce keyboard" es necesaria, piense en activarla antes de usar el portapapeles.  
Esta funcionalidad puede utilizarse para enviar una contraseña, un comando o el contenido de un archivo de configuración, por ejemplo:

<img src={openIaasVmConsoleClipboard} />

Al hacer clic en el botón "Paste", el contenido de su campo de texto se envía a su máquina virtual.

## Replicación

### Acceso a la gestión de replicación

La interfaz de gestión de replicación está disponible en la consola Shiva, dentro del menú "OpenIaaS" > "Replicación", ubicado en el barra lateral superior izquierda del escritorio.

<img src={openIaasReplicationMenu} />

### Creación de una política de replicación

En la sección __'Replicación'__, puedes crear políticas que definan los parámetros de protección de tus máquinas virtuales.

<img src={openIaasReplicationPoliciesView} />

Para crear una nueva política, haz clic en el botón __'Agregar una política'__. Se abrirá un formulario con las siguientes etapas:

#### Etapa 1: Información general

- __Nombre de la política__ : Proporciona un nombre claro para tu política de replicación de infraestructura en nube.
- __Frecuencia__ : Selecciona el intervalo de replicación (de 1 a 59 minutos o de 1 a 24 horas).

<img src={openIaasReplicationPolicyForm1} />

### Etapa 2: Selección del almacenamiento

- **Área de disponibilidad**: Seleccionar la zona de destino
- **Piscina**: Elegir el conjunto de recursos
- **Almacenamiento bloqueo**: Seleccionar el almacenamiento de destino

<img src={openIaasReplicationPolicyForm2} />

#### Etapa 3: Validación

Verifica los parámetros y haz clic en __Agregar__ para crear la política.

### Asociación de una VM con la replicación

Para proteger una máquina virtual, acceda a los detalles de su VM desde la lista de máquinas virtuales.

En la vista detallada de la VM, encontrará una sección __'Replicación'__:

<img src={openIaasVmReplicationSection} />

Las etapas para asociar una VM con la replicación:

1. Haga clic en __'Configurar política'__
2. Seleccione la política de replicación deseada desde el listado desplegable
3. Confirme su selección

La replicación comienza automáticamente después de la confirmación.

## Gestión de políticas y replicas

La gestión de políticas y replicas es un aspecto crucial en el ámbito del cloud computing, especialmente cuando se trabaja con sistemas distribuidos y bases de datos. A continuación, se presenta una descripción detallada de este tema:

### Políticas de Replicación

Las políticas de replicación definen cómo se gestionan las copias de los datos en un sistema distribuido. Estas políticas pueden variar según el tipo de sistema, pero generalmente abarcan:

1. **Nivel de replicación**: Determina cuántas copias de cada documento o bloque de datos se mantienen. Ejemplos incluyen replicación local (solo en el mismo servidor), replicación regional (en la misma región geográfica) y global (en diferentes continentes).

2. **Consistencia**: Define cómo se garantiza que todas las copias de los datos estén sincronizadas. Los tipos de consistencia más comunes son:
   - **Síndrome de lectura no bloqueada (Read Consistency)**: Asegura que una lectura reciente devuelva siempre la última versión escrita, independientemente del orden en el que se han aplicado las actualizaciones.
   - **Síndrome de lectura con bloqueo (Read Commitment)**: Garantiza que una lectura reciente devuelva solo los datos que ya han sido comprometidos por otras transacciones, sin bloquearlas.
   - **Síndrome de lectura no bloqueada (Eventual Consistency)**: No garantiza la consistencia inmediata; las actualizaciones pueden tardar en propagarse a todas las copias.

3. **Tolerancia a fallos**: Define cómo el sistema maneja fallas, como el corte de energía o el desastre físico. Las políticas pueden incluir mecanismos de replicación asimétrica (donde algunas copias son más importantes que otras) y técnicas de recuperación ante fallos avanzadas.

### Gestión de Replicas

La gestión de replicas implica tareas como:

- **Monitoreo**: Supervisar el estado de las replicas para detectar problemas temprano, como desynchronización o fallos del sistema.
- **Mantenimiento**: Realizar operaciones de mantenimiento sin interrumpir el servicio, como actualizaciones de software, copias de seguridad y recuperación ante desastres.
- **Optimización**: Ajustar las políticas de replicación para equilibrar rendimiento, costo y consistencia según los requisitos del sistema.

### Herramientas y Sistemas

Varios sistemas de cloud computing ofrecen herramientas integradas o APIs para gestionar políticas y replicas:

- **Google Cloud**: Utiliza Google Cloud Dataflow, BigQuery, y Cloud Spanner para manejar la replicación y consistencia.
- **Amazon Web Services (AWS)**: Ofrece Amazon DynamoDB, Amazon Aurora, y AWS Global Accelerator para gestionar replicas distribuidas.
- **Microsoft Azure**: Utiliza Azure Cosmos DB, Azure SQL Database, y Azure Traffic Manager para administrar replicación y consistencia.

### Consideraciones de Seguridad

La gestión de políticas y replicas también implica consideraciones de seguridad:

- **Cifrado**: Asegurar que los datos en reposo y en tránsito estén cifrados para proteger la información sensible.
- **Autenticación y autorización**: Implementar controles de acceso robustos para limitar el acceso a las replicas y a los sistemas de gestión.
- **Auditoría**: Mantener registros detallados de todas las operaciones relacionadas con la replicación para cumplir con requisitos regulatorios y mejorar la seguridad.

En resumen, la gestión de políticas y replicas es un aspecto fundamental en el diseño y operación de sistemas distribuidos en cloud computing. Las políticas adecuadas pueden optimizar el rendimiento, garantizar la consistencia y proteger los datos contra fallas y amenazas de seguridad.

#### Políticas visibles

El encuadernador __'Políticas'__ te permite visualizar todas tus políticas de replicación:

<img src={openIaasReplicationPoliciesTable} />

Tienes acceso a la siguiente información para cada política:

- Su nombre
- Frecuencia de replicación
- Zona de disponibilidad de destino
- Piscina asociada
- Almacenamiento bloqueado utilizado

Las acciones disponibles incluyen:

- Consultar los detalles detallados de cada política
- Modificar los parámetros
- Eliminar una política no utilizada



#### Vista de Replicas

El cuadro __'Replicas'__ muestra todas las máquinas virtuales en proceso de replicación:

<img src={openIaasReplicationReplicasTable} />

Puedes visualizar:

- El nombre de las máquinas virtuales replicadas
- El origen y el destino de la ubicación
- La política de replicación asociada

Las acciones disponibles incluyen:

- Exportar los datos en formato CSV
- Consultar los detalles de replicación
- Gestionar las replicas por política
