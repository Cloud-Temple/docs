---
title: Guía de inicio
---
import shivaVmHome from '@site/docs/iaas_vmware/images/shiva_vm_home.png'
import shivaVmHomeDesc from '@site/docs/iaas_vmware/images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from '@site/docs/iaas_vmware/images/shiva_vm_home_alarme.png'
import shivaVmActions from '@site/docs/iaas_vmware/images/shiva_vm_actions.png'
import shivaVmInformations from '@site/docs/iaas_vmware/images/shiva_vm_informations.png'
import shivaVmBandeauRapide from '@site/docs/iaas_vmware/images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from '@site/docs/iaas_vmware/images/shiva_vm_vue_rapide.png'
import shivaVmInfosGenerales from '@site/docs/iaas_vmware/images/shiva_vm_infos_generales.png'
import shivaVmInfosAvancees from '@site/docs/iaas_vmware/images/shiva_vm_infos_avancees.png'
import shivaEditCpuRam from '@site/docs/iaas_vmware/images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from '@site/docs/iaas_vmware/images/shiva_vm_diskctrl_001.png'
import shivaCpool_010 from '@site/docs/iaas_vmware/images/shiva_cpool_010.png'
import shivaCpool_011 from '@site/docs/iaas_vmware/images/shiva_cpool_011.png'
import shivaCpool_012 from '@site/docs/iaas_vmware/images/shiva_cpool_012.png'
import shivaCatalogs from '@site/docs/iaas_vmware/images/shiva_catalogs.png'
import shivaCatalogs_002 from '@site/docs/iaas_vmware/images/shiva_catalogs_002.png'
import shivaVmTemplate_002 from '@site/docs/iaas_vmware/images/shiva_vm_template_002.png'
import shivaVmTemplate_001 from '@site/docs/iaas_vmware/images/shiva_vm_template_001.png'
import shivaVmAdv_001 from '@site/docs/iaas_vmware/images/shiva_vm_adv_001.png'
import shivaVmAdv_002 from '@site/docs/iaas_vmware/images/shiva_vm_adv_002.png'
import shivaVmAdv_003 from '@site/docs/iaas_vmware/images/shiva_vm_adv_003.png'
import shivaVmAdv_004 from '@site/docs/iaas_vmware/images/shiva_vm_adv_004.png'
import shivaCpool_001 from '@site/docs/iaas_vmware/images/shiva_cpool_001.png'
import shivaEsx_001 from '@site/docs/iaas_vmware/images/shiva_esx_001.png'
import shivaEsx_002 from '@site/docs/iaas_vmware/images/shiva_esx_002.png'
import shivaCpool_003 from '@site/docs/iaas_vmware/images/shiva_cpool_003.png'
import shivaCpool_004 from '@site/docs/iaas_vmware/images/shiva_cpool_004.png'
import shivaCpool_005 from '@site/docs/iaas_vmware/images/shiva_cpool_005.png'
import shivaCpool_009 from '@site/docs/iaas_vmware/images/shiva_cpool_009.png'
import shivaCpool_007 from '@site/docs/iaas_vmware/images/shiva_cpool_007.png'
import shivaCpool_008Build from '@site/docs/iaas_vmware/images/shiva_cpool_008_build.png'
import shivaCpool_008Firm from '@site/docs/iaas_vmware/images/shiva_cpool_008_firm.png'
import shivaCpool_006 from '@site/docs/iaas_vmware/images/shiva_cpool_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaVmPolitiquesBackupAssignMandatory from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_assign_mandatory.png'
import shivaVmPolitiquesBackup from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup.png'
import shivaVmDisquesVirtuelsPolitiques from '@site/docs/iaas_vmware/images/shiva_vm_disques_virtuels_politiques.png'
import shivaVmPolitiquesBackupExecute from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_execute.png'
import shivaVmPolitiquesBackupExecute2 from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_execute2.png'
import shivaVmPolitiquesBackupRetirer from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_retirer.png'
import shivaVmPolitiquesBackupRetirerImpossible from '@site/docs/iaas_vmware/images/shiva_vm_politiques_backup_retirer_impossible.png'
import shivaBackupHeld_001 from '@site/docs/iaas_vmware/images/shiva_backup_held_001.png'
import shivaBackupHeld_002 from '@site/docs/iaas_vmware/images/shiva_backup_held_002.png'
import shivaVmBackupRestaurer from '@site/docs/iaas_vmware/images/shiva_vm_backup_restaurer.png'
import shivaVmBackupTest from '@site/docs/iaas_vmware/images/shiva_vm_backup_test.png'
import shivaVmBackup_2prod from '@site/docs/iaas_vmware/images/shiva_vm_backup_2prod.png'
import iaasVmwareClusterProvisionedMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_provisioned_memory.png'
import iaasVmwareClusterUsedMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_used_memory.png'
import iaasVmwareClusterWorstCaseAllocationMemory from '@site/docs/iaas_vmware/images/iaas_vmware_cluster_worst_case_allocation_memory.png'
import iaasVmwareEsxMemory from '@site/docs/iaas_vmware/images/iaas_vmware_esx_memory.png'

## Cálculo

### Gestión de las máquinas virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la Consola, en el menú __'IaaS'__ situado en la barra verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su nube de confianza.

<img src={shivaVmHome} />

Tiene acceso a la siguiente información para cada máquina virtual:

- su nombre,
- las etiquetas asignadas,
- su estado (apagada, encendida, en proceso, host desconectado o inválido),
- su gestor (en entorno VMware, el Vcenter asociado),
- su sistema operativo,
- la cantidad de CPUs virtuales (vCPU),
- la cantidad de memoria virtual (vRAM).

### Acciones sobre las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz :

- Actualizar la lista de máquinas virtuales ;
- Exportar la lista en formato CSV ;
- Filtrar la lista ;
- Buscar una máquina virtual por su nombre ;
- Crear una nueva máquina virtual.

<img src={shivaVmHomeDesc} />

__Puede haber una barra de alertas en la parte superior de la lista__ : indica que se han activado alarmas críticas en una o varias de sus máquinas virtuales.
El botón __'Ver'__ permite consultar las máquinas virtuales afectadas por esta notificación.

<img src={shivaVmHomeAlarme} />

Cuando hace clic en la flecha desplegable verde a la derecha de la lista para una máquina virtual :

<img src={shivaVmActions} />

Accede a toda la información relacionada con ella :

<img src={shivaVmInformations} />

Una barra rápida permite realizar las siguientes acciones :

<img src={shivaVmBandeauRapide} />

- Encender la máquina virtual ;
- Apagarla ;
- Reiniciarla ;
- Modificar las opciones de alimentación del SO invitado ;
- Abrir la consola ;
- Montar una ISO ;
- Desmontar una ISO ;
- Clonar la máquina virtual ;
- Moverla (vMotion) ;
- Renombrarla ;
- Eliminarla.

Una vista rápida ofrece una visualización del __almacenamiento__, de la __CPU__ y de la __RAM__ de la máquina virtual.

<img src={shivaVmVueRapide} />

En la pestaña __'Información general'__, encuentra información detallada relativa a su máquina virtual, como su OS, su ubicación física (datacenter, datastore, etc.), la RAM, el CPU, las direcciones IP, los logs y otros.

<img src={shivaVmInfosGenerales} />

Desde esta vista, puede realizar las siguientes acciones :

- Modificar el sistema operativo (la machine virtuelle devant être éteinte),
- Actualizar la versión del hardware (la machine virtuelle devant être éteinte),
- Modificar la RAM o el CPU.

Una pestaña __'Avanzado'__ permite consultar información más específica como los datos de "VMware tools", la versión de hardware, el gestor, etc...

<img src={shivaVmInfosAvancees} />

### Edición de la RAM o la CPU de una máquina virtual

Vaya a la pestaña __'Máquinas Virtuelles'__, muestre los detalles de una máquina virtual,
seleccione la pestaña __'Información general'__ y haga clic en el botón de edición de la variable a modificar :

<img src={shivaEditCpuRam} />

### Los modos de disco

Puede agregar diferentes modos de disco:

- __Persistente__ : Los cambios se escriben de inmediato y de forma definitiva en el disco virtual. __Es el modo recomendado.__
- __Independiente no persistente__ : Los cambios realizados en el disco virtual se registran en un nuevo registro y se eliminan al apagar. No se ve afectado por las instantáneas. __No es compatible con la copia de seguridad.__
- __Independiente persistente__ : Los cambios se escriben de inmediato y de forma definitiva en el disco virtual. No se ve afectado por las instantáneas. __No es compatible con la copia de seguridad.__

### Gestión de controladores de máquina virtual

Puede modificar el tipo de controlador de disco para su máquina virtual.

<img src={shivaVmDiskctrl_001} />

Las máquinas virtuales pueden estar equipadas con controladores SCSI y NVME, con un límite de 4 controladores de cada tipo. Cada controlador puede gestionar hasta 15 discos.

Un controlador SCSI puede configurarse con diferentes subtipos: Para Virtual, Bus Logic, LSI Logic o LSI Logic SAS.

El controlador Para Virtual se destaca por su capacidad ampliada. Puede admitir hasta 64 discos cuando la versión de hardware de la máquina virtual es compatible con ESXi versión 6.7 o superior.

> __Importante__ : Si desea modificar el tipo de un controlador Para Virtual que tenga más de 15 discos, primero deberá desconectar los discos en las ranuras correspondientes.

### Consola de una máquina virtual

La consola de una máquina virtual es accesible desde la lista de máquinas virtuales haciendo clic en el icono __'Consola'__ :

<img src={shivaCpool_010} />

Se abre una nueva pestaña en su navegador y se muestra la consola de su máquina, basada en un cliente __VNC__ :

<img src={shivaCpool_011} />

Es posible en el menú __VNC__ :

- solicitar el envío de teclas específicas,
- forzar un mapeo de teclado (en caso de que no hayamos podido identificar correctamente su teclado),
- abrir un campo de texto transmitible a la máquina. Este método reemplaza al antiguo portapapeles no funcional,
- cambiar al modo de pantalla completa.

__Nota__ :
El escalado de la ventana es automático.

#### Soporte de distribuciones de teclado

La entrada realizada en la consola depende de la distribución del teclado de su navegador web, de la distribución del teclado de la máquina virtual y de la activación o no de la opción 'enforce keyboard' a la izquierda de la pantalla. A continuación se presenta un resumen de las situaciones posibles :

| Distribución del teclado de la máquina física (entrada) | Distribución del teclado de la máquina virtual | Opción 'enforce keyboard' seleccionada | Resultado (salida)        |
| ------------------------------------------------------- | ---------------------------------------------- | -------------------------------------- | ------------------------ |
| Francés                                                 | Francés                                        | No                                     | ✅                       |
| Francés                                                 | Francés                                        | Sí                                     | No recomendado           |
| Francés                                                 | Inglés                                         | No                                     | Inglés                   |
| Francés                                                 | Inglés                                         | Sí                                     | ✅                       |
| Inglés                                                  | Francés                                        | No                                     | Francés                  |
| Inglés                                                  | Francés                                        | Sí                                     | ✅                       |
| Inglés                                                  | Inglés                                         | No                                     | ✅                       |
| Inglés                                                  | Inglés                                         | Sí                                     | No recomendado           |

__Nota__ :

- Si algunos caracteres no se muestran al escribir manualmente, puede intentar usar el portapapeles.

#### Funcionamiento del portapapeles

Esta funcionalidad le permite enviar una cadena de caracteres completa a su máquina virtual. Es importante tener en cuenta que la tecla "enforce keyboard" influye en la forma en que esta cadena de caracteres
se transmitirá a su máquina virtual. Si al escribir en la consola observa que la opción "enforce keyboard" es necesaria, recuerde activarla antes de usar el portapapeles.  
Esta funcionalidad puede utilizarse para el envío de una contraseña, un comando o el contenido de un archivo de configuración, por ejemplo:

<img src={shivaCpool_012} />

Al hacer clic en el botón "Paste", el contenido de su campo de texto se envía a su máquina virtual.

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` enriquecido y actualizado regularmente por nuestros equipos.
Incluye actualmente varias decenas de `Templates` e imágenes para montar en sus máquinas virtuales.

<img src={shivaCatalogs} />

Para publicar un ISO/OVF, debe ir a la vista __'Catálogo'__ y hacer clic en el botón __'publicar archivos'__ en la parte superior de la página :

<img src={shivaCatalogs_002} />

Es posible convertir una VM en plantilla y exportarla al catálogo. Para ello, seleccione una máquina virtual y utilice el botón de acción __'clonar'__ :

<img src={shivaVmTemplate_002} />

Seleccione __'Exportar como vm-template'__ :

<img src={shivaVmTemplate_001} />

A continuación, complete la información necesaria. Luego será posible implementar una nueva VM a partir de la plantilla desde el botón __'Nueva máquina virtual'__ o desde la página __'Catálogos'__. También es posible exportar la VM en formato OVF.

__A tener en cuenta__: es posible convertir un archivo OVA a OVF y viceversa.
El método más común utilizado es VMware Converter, pero también existe un método simple utilizando ```tar```

Extracción del archivo ova:

```
tar -xvf vmName.ova
```

Crear un archivo OVA desde un archivo OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Configuración avanzada de máquinas virtuales: Extra Config

Las Extra Config proporcionan una forma flexible de incluir pares clave=valor en la configuración de una máquina virtual. El sistema interpreta las claves y los valores cuando se implementa la máquina virtual.

Ahora, usted mismo puede modificar las propiedades de tipo __Extra Config__ en las opciones avanzadas de una máquina virtual:

<img src={shivaVmAdv_001} />

Puede agregar una propiedad entre una lista de claves. Además, puede modificar el valor de una clave que haya agregado usted mismo. Los pares clave=valor ya existentes no son modificables.

Contacte al soporte para cualquier solicitud de adición de nuevas claves.

<img src={shivaVmAdv_002} />

__Nota__ : *Para el uso de GPU por parte de la máquina virtual, es obligatorio activar la clave 'pciPassthru.use64bitMMIO' y asignar la cantidad de espacio MMIO (Memory-mapped I/O) necesario a través de 'pciPassthru.64bitMMIOSizeGB'. Se recomienda encarecidamente consultar la [documentación oficial de Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Configuración avanzada de máquinas virtuales : vAPP

También puede modificar las propiedades de tipo __vAPP__ en las opciones avanzadas de una máquina virtual:

<img src={shivaVmAdv_003} />

Puede agregar una propiedad, modificarla o eliminarla. Se ofrecen cuatro tipos de propiedades, String, Número, Booleano, Contraseña:

<img src={shivaVmAdv_004} />

__Nota__ : *La máquina virtual debe estar detenida para modificar sus propiedades vAPP.*

### Gestión de los __'hipervisores'__ y __'Cpool'__ (clústeres de hipervisores)

La gestión de sus hipervisores se realiza en el submenú __'Cálculo'__ del menú __'IaaS'__, ubicado en la barra verde a la izquierda de su pantalla.

<img src={shivaCpool_001} />

En este submenú, dispone de una vista sobre:

- La stack de software de hipervisores, su AZ y sus recursos,
- La stack de software de copia de seguridad.

En enero de 2024, la oferta de hipervisor disponible en la infraestructura cualificada Cloud Temple se basa en VMware. El software de copia de seguridad utilizado es IBM Spectrum Protect Plus.

### Gestión de clusters VMware

Para acceder a la gestión de clusters VMware, haga clic en el submenú __'Cómputo'__ del menú __'IaaS'__ :

Por defecto, la primera pestaña lista todos los hipervisores (todos los clústeres en conjunto):

<img src={shivaEsx_001} />

Es posible visualizar los detalles de un hipervisor haciendo clic en su nombre:

<img src={shivaEsx_002} />

Existe una pestaña por clúster de hipervisores para consultar los detalles de cada uno:

<img src={shivaCpool_003} />

Si hace clic en un clúster, verá un resumen de su composición :

- El total de la potencia de cómputo expresada en GHz,
- El total de la memoria disponible y la proporción utilizada,
- El total del espacio de almacenamiento (todos los tipos combinados) así como la cuota utilizada,
- Los mecanismos de automatización ante la indisponibilidad de una lámina de cómputo (__'Vsphere DRS'__),
- El número de máquinas virtuales,
- El número de hipervisores.

#### Interpretar los datos de consumo mostrados

<img src={iaasVmwareClusterProvisionedMemory} />

__Memoria asignada (Cluster) :__ Este gráfico representa la cantidad total de memoria asignada al cluster.

<img src={iaasVmwareClusterUsedMemory} />

__Memoria consumida (Cluster) :__ Esta vista muestra la memoria activamente consumida únicamente por las máquinas virtuales del cluster. Corresponde a la memoria física realmente utilizada por las VMs para sus operaciones, lo cual es un indicador clave de la carga de trabajo actual.

<img src={iaasVmwareClusterWorstCaseAllocationMemory} />

__Asignación en el peor de los casos (Cluster) :__ Este gráfico ilustra la memoria que se requeriría si todas las máquinas virtuales del cluster consumieran simultáneamente toda la memoria que les ha sido asignada (el escenario de consumo máximo). El resultado también integra la memoria necesaria para el funcionamiento del cluster, así como diferentes parámetros propios de VMware (el cálculo no es simplemente igual a la suma de la RAM de todas las máquinas virtuales). Esto permite anticipar las necesidades de recursos críticos y prevenir el agotamiento de la memoria.

<img src={iaasVmwareEsxMemory} />

__Memoria consumida (ESX) :__ A diferencia de los gráficos del cluster, este muestra el total de la memoria consumida en un host ESX específico. Esto incluye no solo la memoria utilizada por las máquinas virtuales alojadas en este host, sino también la memoria consumida por el sistema del propio hipervisor (overhead de ESXi).

<img src={shivaCpool_004} />

Verá lo siguiente para cada hipervisor en la pestaña __'Hosts'__ :

- El uso de __CPU__ y __Memoria__ ,
- El número de máquinas virtuales afectadas ,
- La disponibilidad de una nueva build para el sistema operativo del hipervisor, si corresponde ,
- El estado del hipervisor (conectado en producción, en mantenimiento, apagado, ...),
- Un menú de acciones.

<img src={shivaCpool_005} />

Varias acciones son posibles desde la pestaña __'Hosts'__ :

- solicitar nuevos hipervisores a través del botón __'Agregar un host'__ :

<img src={shivaCpool_009} />

- posibilidad de consultar __el detalle de un hipervisor__ :

<img src={shivaCpool_007} />

- entrar o salir del __estado de mantenimiento__ de un hipervisor ,
- __actualizar__ en su caso este hipervisor; para ello, __debe estar obligatoriamente en mantenimiento__. Existen dos tipos de actualizaciones :

1. Las builds de VMware (las nuevas versiones del hipervisor):

<img src={shivaCpool_008Build} />

1. La actualización del firmware de su blade de cálculo (bios y firmware de las tarjetas secundarias):

<img src={shivaCpool_008Firm} />

*__Nota__* :

- *Cloud Temple pone a disposición las builds para los hipervisores a intervalos regulares.
Es importante actualizar regularmente sus hipervisores, especialmente para permitir la aplicación de parches de seguridad.
Sin embargo, __no actualizamos nosotros mismos sus hipervisores__. Cloud Temple no tiene visibilidad sobre los compromisos de disponibilidad de sus workloads.
Por lo tanto, le dejamos implementar su gestión del cambio y aplicar las nuevas builds en el mejor momento.*
- *El proceso de actualización es completamente automatizado. Debe disponer de al menos dos hipervisores en su cluster para permitir una actualización sin interrupción del servicio.*

{/*TODO: Add missing page. */}
{/* -*Es necesario contar con los permisos adecuados para realizar las diferentes acciones.**/}

También verá el conjunto de reglas de afinidad/anti-afinidad para su cluster de hipervisores en la sección __'Reglas'__.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden utilizarse para gestionar el uso de recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o aislar las cargas de trabajo intensivas en recursos.
En un __'Cpool'__ VMware, estas reglas suelen utilizarse para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de reglas:

- __Reglas de Afinidad__: Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican frecuentemente
entre sí en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios
donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre servidores.

- __Reglas de Anti-afinidad__: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que todas las máquinas críticas se vean afectadas en caso de fallo de un único servidor.
Las reglas de anti-afinidad son cruciales para aplicaciones que requieren alta disponibilidad,
como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no desea que sus dos Active Directory estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (affinité / anti-affinité), el nombre de la regla,
su estado de activación (__'Statut'__) y las máquinas afectadas de su cluster de hipervisores.

<img src={shivaCpool_006} />

*Nota: las reglas afinidad/anti-afinidad ofrecidas en la consola son reglas relativas a las máquinas virtuales entre sí (pas de règles entre hyperviseurs et machines virtuelles).*

## Copia de seguridad

### Crear una política de copia de seguridad

Para agregar una nueva política de copia de seguridad, es necesario realizar una solicitud al soporte. El soporte es accesible desde el icono de flotador en la esquina superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ que indique:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)

<img src={shivaSupport} />

### Asignar una política de copia de seguridad a una máquina virtual

Cuando se asigna una SLA a una máquina virtual (VM), todos los discos asociados a esta VM heredan automáticamente la misma SLA. Posteriormente, es posible iniciar manualmente la ejecución de la copia de seguridad a través de la pestaña "Políticas de copia de seguridad". En caso de no iniciarse manualmente, la copia de seguridad se ejecutará automáticamente según la programación configurada por la SLA.

SecNumCloud hace obligatoria la asignación de una política de copia de seguridad a una máquina virtual antes de su inicio. En caso contrario, recibirá la siguiente notificación:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Haga clic en la pestaña __'Políticas de copia de seguridad'__ del menú de su máquina virtual. Podrá visualizar la o las políticas de copia de seguridad asignada(s) a la misma.

Para asignar una nueva política de copia de seguridad a la máquina virtual, haga clic en el botón __'Agregar política'__ y seleccione la política de copia de seguridad deseada.

<img src={shivaVmPolitiquesBackup} />

### Asignar una política de copia de seguridad a un disco virtual

También es posible asignar una SLA directamente a un disco virtual específico de una máquina. En este caso, la máquina virtual no hereda esta SLA aplicada individualmente al disco. Sin embargo, no es posible iniciar manualmente la ejecución de la copia de seguridad a nivel de discos, ya que esta funcionalidad no está soportada en Spectrum Protect Plus.

Por el contrario, es posible excluir ciertos discos de una o varias políticas de copia de seguridad (SLA) de la VM, lo que permite desasignar una o varias SLA(s) en una base disco por disco. Este enfoque ofrece la flexibilidad de iniciar manualmente la ejecución de la copia de seguridad de una SLA sin afectar todos los discos de la máquina virtual, permitiendo así una gestión más detallada de las copias de seguridad.

Haga clic en la barra de acciones del disco al que desea asignar una política de copia de seguridad. Luego, haga clic en __'Políticas'__ y seleccione la política de copia de seguridad deseada.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota* : La política que se va a agregar debe encontrarse en una zona de disponibilidad diferente de la máquina virtual.

### Ejecutar una política de copia de seguridad

En el menú __'Políticas de copia de seguridad'__ de su máquina virtual, haga clic en el botón __'Ejecutar'__ de la columna __'Acciones'__ de la política de copia de seguridad que desea ejecutar.

<img src={shivaVmPolitiquesBackupExecute} />

Para ejecutar una política de copia de seguridad, también puede acceder a la sección __'Copias de seguridad'__ en el menú de
su máquina virtual. Haga clic en el botón __'Ejecutar copia de seguridad'__, y luego seleccione la copia de seguridad que desea ejecutar en la lista desplegable.

<img src={shivaVmPolitiquesBackupExecute2} />

### Retirar una política de copia de seguridad

En el menú __'Políticas de copia de seguridad'__ de su máquina virtual, haga clic en el botón __'Retirar'__ de la columna __'Acciones'__ de la política de copia de seguridad que desea retirar.

<img src={shivaVmPolitiquesBackupRetirer} />

__Atención, no es posible retirar la última SLA en una máquina virtual encendida :__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Eliminación de una política de copia de seguridad: caso de una política de copia de seguridad suspendida ("held")

Cuando el último recurso se desvincula de una política SLA, el sistema detecta automáticamente esta situación. En consecuencia, todos los trabajos relacionados con esta política SLA cambian automáticamente al estado "Suspendido" ("Held"). Es importante tener en cuenta que, en esta etapa, la eliminación directa de la política SLA no es posible debido a la existencia de trabajos dependientes. Para proceder a la eliminación de la política, se debe seguir una serie de pasos.

Debe verificarse que los trabajos afectados se encuentren efectivamente en estado "Suspendido". Una vez realizada esta verificación, estos trabajos pueden eliminarse. Solo después de eliminar estos trabajos dependientes la política SLA podrá borrarse definitivamente del sistema.

Un caso particular merece una atención específica: la adición de un nuevo recurso a una política SLA cuyos trabajos dependientes no se hayan eliminado. En esta situación, los identificadores de los trabajos se conservarán. Sin embargo, es crucial tener en cuenta que los trabajos en estado "Suspendido" no se reanudarán automáticamente. Será necesaria una intervención manual para reactivarlos y permitir su ejecución.

nota: Para cualquier aclaración sobre esta situación, contacte con el soporte de Cloud Temple.

La consola de Cloud Temple impide asignar una máquina virtual a una política suspendida:

<img src={shivaBackupHeld_001} />

Del mismo modo, no es posible iniciar una máquina virtual que esté asociada a una política de copia de seguridad suspendida:

<img src={shivaBackupHeld_002} />

### Restaurar una copia de seguridad

La pestaña __'Copias de seguridad'__ del menú de sus máquinas virtuales le permite acceder a la lista de copias de seguridad de estas.
Para restaurar una copia de seguridad, haga clic en el botón __'Restaurar'__ en la fila correspondiente a la copia de seguridad que desea restaurar.

<img src={shivaVmBackupRestaurer} />

1. __Modo producción__: El modo producción permite la recuperación ante incidentes en el sitio local desde el almacenamiento primario o un sitio de recuperación ante desastres remoto, reemplazando las imágenes de máquina originales por las imágenes de recuperación. Todas las configuraciones se transfieren como parte de la recuperación, incluidos los nombres y los identificadores, y todos los trabajos de copia de datos asociados a la máquina virtual continúan ejecutándose. En el marco de una restauración en modo producción, puede optar por reemplazar el almacenamiento en la máquina virtual por un disco virtual procedente de una copia de seguridad de máquina virtual anterior.

2. __Modo prueba__: El modo prueba crea máquinas virtuales temporales para el desarrollo, la prueba, la verificación de instantáneas y la verificación de recuperación ante incidentes según un plan repetible, sin impacto en los entornos de producción. Las máquinas de prueba se ejecutan tanto tiempo como sea necesario para realizar la prueba y la verificación, y luego se limpian. Mediante la red aislada, puede establecer un entorno seguro para probar sus trabajos sin interferir con las máquinas virtuales utilizadas para la producción. Las máquinas virtuales creadas en modo prueba tienen nombres e identificadores únicos para evitar conflictos en su entorno de producción.

3. __Modo clon__: El modo clon crea copias de las máquinas virtuales para casos de uso que requieren copias permanentes o de ejecución prolongada para la exploración de datos o la duplicación de un entorno de prueba en una red aislada. Las máquinas virtuales creadas en modo clon tienen nombres e identificadores únicos para evitar conflictos en su entorno de producción. En modo clon, debe prestar atención al consumo de recursos, ya que el modo clon crea máquinas permanentes o a largo plazo.

__La restauración es de forma predeterminada en modo "PRUEBA" para preservar la producción__ y es posible elegir el nombre de la máquina virtual restaurada:

<img src={shivaVmBackupTest} />

Tenga en cuenta que si las pruebas son satisfactorias, es posible cambiar una máquina virtual del modo prueba al modo producción:

<img src={shivaVmBackup_2prod} />