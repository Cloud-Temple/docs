---
title: Guía de inicio
---
import shivaVmHome from './images/shiva_vm_home.png'
import shivaVmHomeDesc from './images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from './images/shiva_vm_home_alarme.png'
import shivaVmActions from './images/shiva_vm_actions.png'
import shivaVmInformations from './images/shiva_vm_informations.png'
import shivaVmBandeauRapide from './images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from './images/shiva_vm_vue_rapide.png'
import shivaVmInfosGenerales from './images/shiva_vm_infos_generales.png'
import shivaVmInfosAvancees from './images/shiva_vm_infos_avancees.png'
import shivaEditCpuRam from './images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from './images/shiva_vm_diskctrl_001.png'
import shivaCpool_010 from './images/shiva_cpool_010.png'
import shivaCpool_011 from './images/shiva_cpool_011.png'
import shivaCpool_012 from './images/shiva_cpool_012.png'
import shivaCatalogs from './images/shiva_catalogs.png'
import shivaCatalogs_002 from './images/shiva_catalogs_002.png'
import shivaVmTemplate_002 from './images/shiva_vm_template_002.png'
import shivaVmTemplate_001 from './images/shiva_vm_template_001.png'
import shivaVmAdv_001 from './images/shiva_vm_adv_001.png'
import shivaVmAdv_002 from './images/shiva_vm_adv_002.png'
import shivaVmAdv_003 from './images/shiva_vm_adv_003.png'
import shivaVmAdv_004 from './images/shiva_vm_adv_004.png'
import shivaCpool_001 from './images/shiva_cpool_001.png'
import shivaEsx_001 from './images/shiva_esx_001.png'
import shivaEsx_002 from './images/shiva_esx_002.png'
import shivaCpool_003 from './images/shiva_cpool_003.png'
import shivaCpool_004 from './images/shiva_cpool_004.png'
import shivaCpool_005 from './images/shiva_cpool_005.png'
import shivaCpool_009 from './images/shiva_cpool_009.png'
import shivaCpool_007 from './images/shiva_cpool_007.png'
import shivaCpool_008Build from './images/shiva_cpool_008_build.png'
import shivaCpool_008Firm from './images/shiva_cpool_008_firm.png'
import shivaCpool_006 from './images/shiva_cpool_006.png'
import shivaSupport from '../console/images/shiva_support.png'
import shivaVmPolitiquesBackupAssignMandatory from './images/shiva_vm_politiques_backup_assign_mandatory.png'
import shivaVmPolitiquesBackup from './images/shiva_vm_politiques_backup.png'
import shivaVmDisquesVirtuelsPolitiques from './images/shiva_vm_disques_virtuels_politiques.png'
import shivaVmPolitiquesBackupExecute from './images/shiva_vm_politiques_backup_execute.png'
import shivaVmPolitiquesBackupExecute2 from './images/shiva_vm_politiques_backup_execute2.png'
import shivaVmPolitiquesBackupRetirer from './images/shiva_vm_politiques_backup_retirer.png'
import shivaVmPolitiquesBackupRetirerImpossible from './images/shiva_vm_politiques_backup_retirer_impossible.png'
import shivaBackupHeld_001 from './images/shiva_backup_held_001.png'
import shivaBackupHeld_002 from './images/shiva_backup_held_002.png'
import shivaVmBackupRestaurer from './images/shiva_vm_backup_restaurer.png'
import shivaVmBackupTest from './images/shiva_vm_backup_test.png'
import shivaVmBackup_2prod from './images/shiva_vm_backup_2prod.png'

## Cálculo

### Gestión de máquinas virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la Consola, en el menú __'IaaS'__ situado en la barra verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su Cloud de confianza.

<img src={shivaVmHome} />

Tiene acceso a la siguiente información para cada máquina virtual:

- su nombre,
- las etiquetas asignadas,
- su estado (apagada, encendida, en proceso, host desconectado o inválido),
- su gestor (en entorno VMware, el Vcenter asociado),
- su sistema operativo,
- la cantidad de CPU virtuales (vCPU),
- la cantidad de memoria virtual (vRAM).

### Acciones sobre las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz:

- Actualizar la lista de máquinas virtuales;
- Exportar la lista en formato CSV;
- Filtrar la lista;
- Buscar una máquina virtual por su nombre;
- Crear una nueva máquina virtual.

<img src={shivaVmHomeDesc} />

__Un banner de alertas puede estar presente en la parte superior de la lista__: indica que se han activado alarmas críticas en una o varias de sus máquinas virtuales.  
El botón __'Ver'__ permite consultar las máquinas virtuales afectadas por esta notificación.

<img src={shivaVmHomeAlarme} />

Cuando hace clic en la flecha desplegable verde a la derecha de la lista para una máquina virtual:

<img src={shivaVmActions} />

Accede a todas las informaciones relacionadas con ella:

<img src={shivaVmInformations} />

Un banner rápido permite realizar las siguientes acciones:

<img src={shivaVmBandeauRapide} />

- Encender la máquina virtual;
- Apagarla;
- Reiniciarla;
- Modificar las opciones de alimentación del sistema operativo invitado;
- Abrir la consola;
- Montar un ISO;
- Desmontar un ISO;
- Clonar la máquina virtual;
- Moverla (vMotion);
- Renombrarla;
- Eliminarla.

Una vista rápida ofrece una visualización del __almacenamiento__, del __CPU__ y de la __RAM__ de la máquina virtual.

<img src={shivaVmVueRapide} />

En la pestaña __'Información general'__, encuentra información detallada sobre su máquina virtual, como su sistema operativo, su ubicación física (datacenter, datastore, etc.), la RAM, el CPU, las direcciones IP, los registros (logs) y otros datos.

<img src={shivaVmInfosGenerales} />

Desde esta vista, puede realizar las siguientes acciones:

- Modificar el sistema operativo (la máquina virtual debe estar apagada),
- Actualizar la versión del hardware (la máquina virtual debe estar apagada),
- Modificar la RAM o el CPU.

Una pestaña __'Avanzado'__ permite consultar información más específica, como los datos de "VMware Tools", la versión de hardware, el gestor, etc...

<img src={shivaVmInfosAvancees} />

### Edición de la RAM o la CPU de una máquina virtual

Vaya al panel __'Máquinas Virtuales'__, muestre los detalles de una máquina virtual, seleccione el panel __'Información general'__ y haga clic en el botón de edición de la variable que desea modificar:

<img src={shivaEditCpuRam} />

### Modes de discos

Puede agregar diferentes modos de disco:

- __Persistente__: Los cambios se escriben inmediata y definitivamente en el disco virtual. __Este es el modo recomendado.__
- __No persistente independiente__: Los cambios realizados en el disco virtual se registran en un nuevo archivo de registro y se eliminan al apagar. No se ve afectado por las instantáneas. __No es compatible con la copia de seguridad.__
- __Persistente independiente__: Los cambios se escriben inmediata y definitivamente en el disco virtual. No se ve afectado por las instantáneas. __No es compatible con la copia de seguridad.__

### Virtual Machine Controller Management

You can modify the disk controller type for your virtual machine.

<img src={shivaVmDiskctrl_001} />

Virtual machines can be equipped with SCSI and NVMe controllers, with a limit of 4 controllers of each type. Each controller can manage up to 15 disks.

A SCSI controller can be configured with different subtypes: Para Virtual, Bus Logic, LSI Logic, or LSI Logic SAS.

The Para Virtual controller stands out due to its extended capabilities. It can support up to 64 disks when the virtual machine's hardware version is compatible with ESXi 6.7 or later.

> __Important__: If you want to change the type of a Para Virtual controller that has more than 15 disks, you must first detach the disks from the affected slots.

### Consola de una máquina virtual

La consola de una máquina virtual está disponible desde la lista de máquinas virtuales haciendo clic en el icono __'Consola'__:

<img src={shivaCpool_010} />

Se abre un nuevo separador en su navegador y se muestra entonces la consola de su máquina, basada en un cliente **VNC**:

<img src={shivaCpool_011} />

Es posible, desde el menú **VNC**:
- solicitar el envío de teclas especiales,
- forzar un mapeo de teclado (en caso de que no hayamos podido identificar correctamente su teclado),
- abrir un campo de texto que se puede transmitir a la máquina. Este método reemplaza el antiguo portapapeles no funcional,
- pasar al modo de pantalla completa.

__Nota__:
El escalado de la ventana es automático.

#### Keyboard layout support

The input entered in the console depends on the keyboard language of your web browser, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option on the left side of the screen is enabled. Below is a summary of the possible scenarios:

| Physical machine keyboard language (input) | Virtual machine keyboard language | 'Enforce keyboard' option selected | Result (output)        |
| -------------------------------------------- | --------------------------------- | ---------------------------------- | ------------------------ |
| French                                       | French                            | No                                 | ✅                       |
| French                                       | French                            | Yes                                | Not recommended          |
| French                                       | English                           | No                                 | English                  |
| French                                       | English                           | Yes                                | ✅                       |
| English                                      | French                            | No                                 | French                   |
| English                                      | French                            | Yes                                | ✅                       |
| English                                      | English                           | No                                 | ✅                       |
| English                                      | English                           | Yes                                | Not recommended          |

__Note__:
- If certain characters do not appear when typed manually, you can try pasting them from the clipboard.

#### Funcionamiento del portapapeles
Esta función le permite enviar una cadena completa de caracteres a su máquina virtual. Es importante tener en cuenta que la tecla "enforce keyboard" influye en la forma en que esta cadena de caracteres será transmitida a su máquina virtual. Si observa durante la entrada en la consola que la opción "enforce keyboard" es necesaria, recuerde activarla antes de utilizar el portapapeles.  
Esta función puede utilizarse para enviar una contraseña, un comando o el contenido de un archivo de configuración, por ejemplo:

<img src={shivaCpool_012} />

Al hacer clic en el botón "Pegar", el contenido de su campo de texto se envía a su máquina virtual.

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` constantemente enriquecido y actualizado por nuestros equipos.  
Actualmente incluye decenas de `Templates` e imágenes que puede desplegar en sus máquinas virtuales.

<img src={shivaCatalogs} />

Para publicar un ISO/OVF, debe acceder a la vista __'Catálogo'__ y hacer clic en el botón __'Publicar archivos'__ situado en la parte superior de la página:

<img src={shivaCatalogs_002} />

Es posible convertir una máquina virtual en modelo y exportarla al catálogo. Para ello, seleccione una máquina virtual y utilice el botón de acción __'Clonar'__:

<img src={shivaVmTemplate_002} />

Seleccione __'Exportar como vm-template'__:

<img src={shivaVmTemplate_001} />

A continuación, rellene la información necesaria. A partir de entonces, será posible desplegar una nueva máquina virtual a partir del modelo mediante el botón __'Nueva máquina virtual'__ o desde la página __'Catálogos'__. También es posible exportar la VM en formato OVF.

__Consejo útil__: es posible convertir un archivo OVA a OVF y viceversa.  
El método más comúnmente utilizado es VMware Converter, pero también existe una forma sencilla utilizando ```tar```.

Extracción del archivo OVA:

```
tar -xvf vmName.ova
```

Creación de un archivo OVA a partir de un archivo OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Advanced Virtual Machine Configuration: Extra Config

Extra Config provides a flexible way to include key=value pairs in a virtual machine's configuration. The keys and values are interpreted by the system when the virtual machine is deployed.

You can now directly modify __Extra Config__ properties in the advanced options of a virtual machine:

<img src={shivaVmAdv_001} />

You can add a property from a predefined list of keys. Additionally, you can modify the value of a key you have added yourself. Pre-existing key=value pairs cannot be modified.

Please contact support for any request to add new keys.

<img src={shivaVmAdv_002} />

__Note__: *To enable GPU usage by the virtual machine, it is mandatory to enable the key 'pciPassthru.use64bitMMIO' and allocate the required MMIO (Memory-mapped I/O) space via 'pciPassthru.64bitMMIOSizeGB'. It is strongly recommended to refer to the [official NVIDIA documentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Advanced virtual machine configuration: vAPP

You can also modify __vAPP__ type properties in the advanced options of a virtual machine:

<img src={shivaVmAdv_003} />

You can add a property, modify an existing one, or remove it. Four types of properties are available: String, Number, Boolean, Password:

<img src={shivaVmAdv_004} />

__Note__: *The virtual machine must be stopped to modify its vAPP properties.*

### Management of __'hypervisors'__ and __'Cpool'__ (hypervisor clusters)

Managing your hypervisors is done in the __'Compute'__ submenu under the __'IaaS'__ menu, located in the green bar on the left side of your screen.

<img src={shivaCpool_001} />

In this submenu, you have visibility on:

- The hypervisor software stack, their AZs, and their resources,
- The backup software stack.

As of January 2024, the available hypervisor offering on the Cloud Temple qualified infrastructure is based on VMware. The backup software used is IBM Spectrum Protect Plus.

### Gestión de los clusters VMware

Para acceder a la gestión de los clusters VMware, haga clic en el submenú __'Cálculo'__ del menú __'IaaS'__:

De forma predeterminada, la primera pestaña muestra todos los hipervisores (todos los clusters combinados):

<img src={shivaEsx_001} />

Es posible visualizar los detalles de un hipervisor haciendo clic en su nombre:

<img src={shivaEsx_002} />

Existe una pestaña por cada cluster de hipervisor para consultar los detalles de cada uno:

<img src={shivaCpool_003} />

Si hace clic en un cluster, verá un resumen de su composición:

- El total de potencia de cálculo expresado en GHz,
- La memoria disponible total y la proporción utilizada,
- El espacio total de almacenamiento (de todos los tipos combinados) así como el porcentaje de uso,
- Los mecanismos de automatización ante la inactividad de un nodo de cálculo (__'vSphere DRS'__),
- El número de máquinas virtuales,
- El número de hipervisores.

<!-- TODO: Add missing page. -->
<!-- Al consultar la página de un cluster, están disponibles varias pestañas. La pestaña __'Reglas'__ le permite definir las [reglas de afinidad / anti-afinidad](compute.md#gestion-de-laffinité-de-vos-machines-virtuelles) -->

<img src={shivaCpool_004} />

En la pestaña __'Hosts'__ aparece para cada hipervisor:

- El uso de __CPU__ y __Memoria__,
- El número de máquinas virtuales asignadas,
- La disponibilidad de una nueva versión del sistema operativo del hipervisor, si procede,
- El estado del hipervisor (conectado en producción, en mantenimiento, apagado, etc.),
- Un menú de acciones.

<img src={shivaCpool_005} />

Desde la pestaña __'Hosts'__ se pueden realizar varias acciones:

- solicitar nuevos hipervisores mediante el botón __'Agregar un host'__:

<img src={shivaCpool_009} />

- posibilidad de consultar el __detalle de un hipervisor__:

<img src={shivaCpool_007} />

- entrar o salir del __estado de mantenimiento__ de un hipervisor,
- __actualizar__ el hipervisor si es necesario; para ello, __debe estar obligatoriamente en mantenimiento__. Existen dos tipos de actualizaciones:

1. Las versiones de VMware (nuevas versiones del hipervisor):

<img src={shivaCpool_008Build} />

2. La actualización del firmware de su nodo de cálculo (BIOS y firmware de tarjetas secundarias):

<img src={shivaCpool_008Firm} />

*__Nota__*:

- Cloud Temple pone a disposición las versiones para los hipervisores en intervalos regulares.
Es importante actualizar periódicamente sus hipervisores, especialmente para aplicar parches de seguridad.
Sin embargo, __no actualizamos nosotros mismos sus hipervisores__. Cloud Temple no tiene visibilidad sobre los compromisos de disponibilidad de sus cargas de trabajo.
Por ello, le dejamos gestionar su cambio y aplicar las nuevas versiones en el momento más adecuado.

- El proceso de actualización es completamente automatizado. Debe disponer de al menos dos hipervisores en su cluster para permitir una actualización sin interrupción del servicio.

<!-- TODO: Add missing page. -->
<!-- - *Es necesario contar con los permisos adecuados* [permisos adecuados](../console/permissions.md) para realizar las distintas acciones. -->

También puede ver todas las reglas de afinidad/anti-afinidad para su cluster de hipervisores en la sección __'Reglas'__.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.  
Pueden utilizarse para gestionar el uso de los recursos de su __'Cpool'__.  
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar cargas de trabajo intensivas en recursos.  
En un __'Cpool'__ VMware, estas reglas suelen utilizarse para gestionar el comportamiento de las máquinas virtuales con vMotion.  
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de reglas:

- __Reglas de afinidad__: Estas reglas garantizan que ciertas máquinas virtuales se ejecuten en el mismo host físico.  
  Se utilizan para mejorar el rendimiento al mantener juntas las máquinas virtuales que se comunican frecuentemente,  
  reduciendo así la latencia de red. Las reglas de afinidad son útiles en escenarios donde el rendimiento es crítico,  
  como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre servidores.

- __Reglas de anti-afinidad__: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten  
  en el mismo host físico. Son importantes para la disponibilidad y resiliencia, por ejemplo,  
  para evitar que todas las máquinas críticas se vean afectadas en caso de fallo de un único servidor.  
  Las reglas de anti-afinidad son cruciales para aplicaciones que requieren alta disponibilidad,  
  como en entornos de producción donde la tolerancia a fallos es una prioridad.  
  Por ejemplo, no desea que sus dos servidores de Active Directory estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,  
su estado de activación (__'Estado'__) y las máquinas virtuales afectadas en su clúster de hipervisores.

<img src={shivaCpool_006} />

*Nota: las reglas de afinidad/anti-afinidad ofrecidas en la consola son reglas que afectan a las máquinas virtuales entre sí (no reglas entre hipervisores y máquinas virtuales).*

## Backup

### Create a backup policy

To create a new backup policy, you must submit a request to support. Support is accessible via the buoy icon in the top-right corner of the window.

Creating a new backup policy is done through a __service request__ specifying:

    Your Organization's name
    A contact name, email, and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The retention characteristics (x days, y weeks, z months, ...)

<img src={shivaSupport} />

### Asignar una política de copia de seguridad a una máquina virtual

Cuando se asigna una SLA a una máquina virtual (VM), todos los discos asociados a dicha VM heredan automáticamente la misma SLA. Posteriormente, es posible ejecutar manualmente la copia de seguridad a través del panel "Políticas de copia de seguridad". En ausencia de una ejecución manual, la copia de seguridad se realizará automáticamente según el plan configurado por la SLA.

SecNumCloud exige obligatoriamente la asignación de una política de copia de seguridad a una máquina virtual antes de su arranque. En caso contrario, recibirás la siguiente notificación:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Haz clic en la pestaña __'Políticas de copia de seguridad'__ del menú de tu máquina virtual. Allí podrás visualizar la política o políticas de copia de seguridad asignadas a dicha máquina.

Para asignar una nueva política de copia de seguridad a la máquina virtual, haz clic en el botón __'Agregar política'__ y selecciona la política de copia de seguridad deseada.

<img src={shivaVmPolitiquesBackup} />

### Assign a backup policy to a virtual disk

It is also possible to assign an SLA directly to a specific virtual disk of a machine. In this case, the virtual machine does not inherit this SLA applied individually to the disk. However, it is not possible to manually trigger backup execution at the disk level, as this functionality is not supported in Spectrum Protect Plus.

On the other hand, it is possible to exclude certain disks from one or more backup policies (SLAs) of the VM, which allows unassigning one or more SLAs on a per-disk basis. This approach provides the flexibility to manually initiate backup execution for a specific SLA without affecting all disks of the virtual machine, enabling more granular backup management.

Click on the action bar of the disk to which you want to assign a backup policy. Then, click on __'Policies'__ and select the desired backup policy.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Note*: The policy to be added must reside in a different availability zone than the virtual machine.

### Ejecutar una política de copia de seguridad

En el menú __'Políticas de copia de seguridad'__ de su máquina virtual, haga clic en el botón __'Ejecutar'__ de la columna __'Acciones'__ de la política de copia de seguridad que desee ejecutar.

<img src={shivaVmPolitiquesBackupExecute} />

Para ejecutar una política de copia de seguridad, también puede partir desde la sección __'Copias de seguridad'__ en el menú de su máquina virtual. Haga clic en el botón __'Ejecutar la copia de seguridad'__, y luego seleccione la copia de seguridad que desee ejecutar en el menú desplegable.

<img src={shivaVmPolitiquesBackupExecute2} />

### Remove a backup policy

In the __'Backup Policies'__ menu of your virtual machine, click the __'Remove'__ button in the __'Actions'__ column for the backup policy you wish to remove.

<img src={shivaVmPolitiquesBackupRetirer} />

__Warning: It is not possible to remove the last SLA on an active virtual machine:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Deleting a backup policy: case of a suspended backup policy ("held")

When the last resource is disassociated from an SLA policy, the system automatically detects this situation. As a result, all jobs associated with this SLA policy are automatically moved to the "Held" ("Suspended") state. It is important to note that direct deletion of the SLA policy is not possible at this stage due to the existence of dependent jobs. To proceed with the deletion of the policy, a series of steps must be followed.

First, verify that the affected jobs are indeed in the "Held" state. Once this verification is complete, these jobs can be deleted. Only after removing these dependent jobs can the SLA policy be permanently erased from the system.

A special case requires particular attention: adding a new resource to an SLA policy whose dependent jobs have not been deleted. In this scenario, job identifiers will be preserved. However, it is crucial to note that jobs in the "Held" state will not resume automatically. Manual intervention will be required to reactivate them and allow their execution.

> **Note:** For any clarification regarding this situation, please contact Cloud Temple support.

The Cloud Temple console prevents assigning a virtual machine to a suspended policy:

<img src={shivaBackupHeld_001} />

Similarly, it is not possible to start a virtual machine associated with a suspended backup policy:

<img src={shivaBackupHeld_002} />

### Restaurar una copia de seguridad

La pestaña __'Copias de seguridad'__ del menú de sus máquinas virtuales le permite acceder a la lista de copias de seguridad de dicha máquina.

Para restaurar una copia de seguridad, haga clic en el botón __'Restaurar'__ en la fila correspondiente a la copia de seguridad que desea restaurar.

<img src={shivaVmBackupRestaurer} />

1. __Modo producción__: El modo producción permite la recuperación tras un incidente en el sitio local desde el almacenamiento primario o un sitio de recuperación tras un incidente remoto, reemplazando las imágenes de máquina original por las imágenes de recuperación. Todas las configuraciones se transfieren durante la recuperación, incluidos nombres e identificadores, y todos los trabajos de copia de datos asociados a la máquina virtual continúan ejecutándose. Durante una restauración en modo producción, puede elegir reemplazar el almacenamiento de la máquina virtual por un disco virtual procedente de una copia de seguridad anterior de la máquina virtual.

2. __Modo prueba__: El modo prueba crea máquinas virtuales temporales para desarrollo, pruebas, verificación de instantáneas y verificación de recuperación tras un incidente según un plan repetible, sin impacto en los entornos de producción. Las máquinas de prueba se ejecutan durante el tiempo necesario para realizar las pruebas y verificaciones, y luego se limpian. Mediante una red aislada, puede establecer un entorno seguro para probar sus trabajos sin interferir con las máquinas virtuales utilizadas en producción. Las máquinas virtuales creadas en modo prueba poseen nombres e identificadores únicos para evitar cualquier conflicto en su entorno de producción.

3. __Modo clonación__: El modo clonación crea copias de las máquinas virtuales para casos de uso que requieren copias permanentes o de ejecución prolongada, como exploración de datos o duplicación de un entorno de prueba en una red aislada. Las máquinas virtuales creadas en modo clonación poseen nombres e identificadores únicos para evitar cualquier conflicto en su entorno de producción. En modo clonación, debe tener cuidado con el consumo de recursos, ya que este modo crea máquinas permanentes o de largo plazo.

__La restauración está configurada por defecto en modo "PRUEBA" para preservar la producción__, y puede elegir el nombre de la máquina virtual restaurada:

<img src={shivaVmBackupTest} />

Tenga en cuenta que si las pruebas son satisfactorias, es posible pasar una máquina virtual del modo prueba al modo producción:

<img src={shivaVmBackup_2prod} />