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

### Gestión de Máquinas Virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la consola Shiva en el menú __'IaaS'__ situado en la barra verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas Virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su Nube de Confianza.

<img src={shivaVmHome} />

Tiene acceso a la siguiente información, para cada máquina virtual:

- su nombre,
- las etiquetas asignadas,
- su estado (apagada, encendida, en proceso, host desconectado o inválido),
- su gestor (en entorno VMware, el Vcenter asociado),
- su sistema operativo,
- la cantidad de CPU virtual (vCPU),
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

Cuando hace clic en la flecha verde a la derecha de la lista para una máquina virtual:

<img src={shivaVmActions} />

Accede a toda la información relativa a esta:

<img src={shivaVmInformations} />

Un banner rápido permite realizar las siguientes acciones:

<img src={shivaVmBandeauRapide} />

- Encender la máquina virtual;
- Apagarla;
- Reiniciarla;
- Modificar las opciones de alimentación del sistema invitado;
- Abrir la consola;
- Montar un ISO;
- Desmontar un ISO;
- Clonar la máquina virtual;
- Moverla (vMotion);
- Renombrarla;
- Eliminarla.

Una vista rápida ofrece una visualización del __almacenamiento__, de la __CPU__ y de la __RAM__ de la máquina virtual.

<img src={shivaVmVueRapide} />

En la pestaña __'Informaciones generales'__, encuentra información detallada relativa a su máquina virtual, como su sistema operativo, su ubicación física (datacenter, almacén de datos, etc.), la RAM, la CPU, las direcciones IP, los registros, entre otros.

<img src={shivaVmInfosGenerales} />

Desde esta vista, puede realizar las siguientes acciones:

- Modificar el sistema operativo (la máquina virtual debe estar apagada),
- Actualizar la versión del hardware (la máquina virtual debe estar apagada),
- Modificar la RAM o la CPU.

Una pestaña __'Avanzado'__ permite consultar información más específica como las "herramientas de VMware", la versión de hardware, el gestor, etc...

<img src={shivaVmInfosAvancees} />

### Edición de la RAM o CPU de una máquina virtual

Vaya a la pestaña __'Máquinas Virtuales'__, muestre los detalles de una máquina virtual,
seleccione la pestaña __'Informaciones generales'__ y haga clic en el botón de edición de la variable a modificar:

<img src={shivaEditCpuRam} />

### Los modos de discos

Puede agregar diferentes modos de discos:

- __Persistente__: Las modificaciones se escriben inmediata y definitivamente en el disco virtual. __Es el modo recomendado.__
- __No persistente independiente__: Las modificaciones realizadas en el disco virtual se registran en un nuevo log y se eliminan al apagar. No afectado por los snapshots. __No es compatible con la copia de seguridad.__
- __Persistente independiente__: Las modificaciones se escriben inmediata y definitivamente en el disco virtual. No afectado por los snapshots. __No es compatible con la copia de seguridad.__

### Gestión de los controladores de máquina virtual

Puede modificar el tipo de controlador de disco para su máquina virtual.

<img src={shivaVmDiskctrl_001} />

Las máquinas virtuales pueden estar equipadas con controladores SCSI y NVME, con un límite de 4 controladores de cada tipo. Cada controlador puede manejar hasta 15 discos.

Un controlador SCSI puede configurarse con diferentes subtipos: Para Virtual, Bus Logic, LSI Logic o LSI Logic SAS.

El controlador Para Virtual se distingue por su capacidad extendida. Puede soportar hasta 64 discos cuando la versión de hardware de la máquina virtual es compatible con un ESXi en versión 6.7 o superior.

> __Importante__: Si desea modificar el tipo de un controlador Para Virtual que tiene más de 15 discos, primero deberá desconectar los discos de los slots correspondientes.

### Consola de una máquina virtual

La consola de una máquina virtual está disponible desde la lista de máquinas virtuales haciendo clic en el icono __'Consola'__ :

<img src={shivaCpool_010} />

Un nuevo pestaña de su navegador se abre y muestra entonces la consola de su máquina, basada en un cliente VNC :

<img src={shivaCpool_011} />

Es posible en el menú VNC:

- solicitar el envío de una tecla específica,
- realizar copiar/pegar desde el portapapeles de su sistema operativo,
- pasar a modo pantalla completa,
- cambiar el tamaño de la ventana (escalado).

La gestión del teclado, con la consola de las máquinas virtuales, funciona perfectamente en un entorno completamente *inglés*.

La entrada realizada en la consola depende del idioma del teclado de su máquina física, del idioma del teclado de la máquina virtual y de la activación o no de la opción 'enforce keyboard' a la izquierda de la pantalla.
Aquí hay un resumen de las situaciones posibles con el idioma francés :

| Idioma del teclado de la máquina física (entrada) | Idioma del teclado de la máquina virtual | Opción 'enforce keyboard' seleccionada | Resultado (salida)                                   |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| Francés                                          | Francés                                  | No                                    | No recomendado (problema con los caracteres especiales) |
| Francés                                          | Francés                                  | Sí                                    | < y > no funcionan                      |
| Francés                                          | Inglés                                   | No                                    | No recomendado (problema con los caracteres especiales) |
| Francés                                          | Inglés                                   | Sí                                    | Inglés                                             |
| Inglés                                           | Francés                                  | No                                    | < y > no funcionan                      |
| Inglés                                           | Francés                                  | Sí                                    | < y > no funcionan                      |
| Inglés                                           | Inglés                                   | No                                    | Inglés                                             |
| Inglés                                           | Inglés                                   | Sí                                    | Inglés                                             |

__Nota__ :

- Si la combinación __'AltGr'__ y __'@'__ en el teclado no funciona, active el botón __'forzar tecla'__ en el menú __'VNC'__ de la consola y pruebe nuevamente.
- Si esto no funciona y el sistema operativo de la máquina física es __Windows, configure el teclado de la máquina física en inglés
y intente ingresar el @ de manera clásica__ *(salida azerty: AltGr + tecla del 0 o salida qwerty: tecla del 2)*.

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple le proporciona un catálogo de `Plantillas` constantemente enriquecido y actualizado por nuestros equipos.
Actualmente incluye varias docenas de `Plantillas` e imágenes para montar en sus máquinas virtuales.

<img src={shivaCatalogs} />

Para publicar un ISO/OVF, vaya a la vista __'Catálogo'__ y haga clic en el botón __'publicar archivos'__ en la parte superior de la página:

<img src={shivaCatalogs_002} />

Es posible transformar una VM en modelo y exportarla al catálogo. Para ello, seleccione una máquina virtual y utilice el botón de acción __'clonar'__ :

<img src={shivaVmTemplate_002} />

Seleccione __'Exportar como vm-template'__ :

<img src={shivaVmTemplate_001} />

Luego, complete la información necesaria. A partir de ahí, será posible desplegar una nueva VM desde el botón __'Nueva máquina virtual'__ o desde la página __'Catálogos'__. También es posible exportar la VM en formato OVF.

__Consejo__: es posible convertir un archivo OVA a OVF y viceversa.
El método más común utilizado es Vmware convertor, pero también existe un método sencillo utilizando ```tar```

Extracción del archivo ova:

```
tar -xvf vmName.ova
```

Crear un archivo OVA desde un archivo OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Configuración avanzada de las máquinas virtuales: Extra Config

Los Extra Config proporcionan un medio flexible para incluir pares clave=valor en la configuración de una máquina virtual. Las claves y valores son interpretados por el sistema cuando la máquina virtual se despliega.

Ahora, usted mismo puede modificar las propiedades de tipo __Extra Config__ en las opciones avanzadas de una máquina virtual :

<img src={shivaVmAdv_001} />

Puede agregar una propiedad de entre una lista de claves. Además, puede modificar el valor de una clave que haya agregado usted mismo. Los pares clave=valor ya existentes no son modificables.

Póngase en contacto con el soporte para cualquier solicitud de adición de nuevas claves.

<img src={shivaVmAdv_002} />

__Nota__ : *Para el uso de GPU por la máquina virtual, es obligatorio activar la clave 'pciPassthru.use64bitMMIO' y asignar la cantidad de espacio MMIO (Memory-mapped I/O) necesario a través de 'pciPassthru.64bitMMIOSizeGB'. Se recomienda fuertemente consultar la [documentación oficial de Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Configuración avanzada de las máquinas virtuales: vAPP

También puede modificar las propiedades de tipo __vAPP__ en las opciones avanzadas de una máquina virtual :

<img src={shivaVmAdv_003} />

Puede agregar una propiedad, modificarla o eliminarla. Se ofrecen cuatro tipos de propiedades: Cadena, Número, Booleano, Contraseña:

<img src={shivaVmAdv_004} />

__Nota__ : *La máquina virtual debe estar detenida para modificar sus propiedades vAPP.*

### Gestión de los __'hipervisores'__ y __'Cpool'__ (clústeres de hipervisores)

La gestión de sus hipervisores se realiza en el submenú __'Cálculo'__ del menú __'IaaS'__, ubicado en la barra verde a la izquierda de su pantalla.

<img src={shivaCpool_001} />

En este submenú, dispone de una vista sobre:

- La pila de software de hipervisores, su AZ y sus recursos,
- La pila de software de copias de seguridad.

En enero de 2024, la oferta de hipervisores disponible en la infraestructura calificada Cloud Temple se basa en VMware. El software de copia de seguridad utilizado es IBM Spectrum Protect Plus.

### Gestión de los clústeres VMware

Para acceder a la gestión de los clústeres VMware, haga clic en el submenú __'Cálculo'__ del menú __'IaaS'__ :

Por defecto, la primera pestaña lista todos los hipervisores (todos los clústeres combinados):

<img src={shivaEsx_001} />

Es posible visualizar los detalles de un hipervisor haciendo clic en su nombre:

<img src={shivaEsx_002} />

Hay una pestaña por clúster de hipervisor para consultar los detalles de cada uno:

<img src={shivaCpool_003} />

Si hace clic en un clúster, verá la síntesis de su composición :

- El total de la potencia de cálculo expresada en GHz,
- El total de la memoria disponible y la proporción utilizada,
- El total del espacio de almacenamiento (todos los tipos combinados) así como la proporción utilizada,
- Los mecanismos de automatización sobre inoperatividad de una unidad de cálculo (__'Vsphere DRS'__),
- El número de máquinas virtuales,
- El número de hipervisores.

<!-- TODO: Add missing page. -->
<!-- Al consultar la página de un clúster, varios pestañas están disponibles. La pestaña __'Reglas'__ le permite definir las [reglas de afinidad / anti-afinidad](compute.md#gestion-de-laffinité-de-vos-machines-virtuelles) -->

<img src={shivaCpool_004} />

Verá aparecer para cada hipervisor en la pestaña __'Hosts'__ :

- El uso __CPU__ y __Memoria__,
- El número de máquinas virtuales asignadas,
- La disponibilidad de un nuevo build para el sistema operativo del hipervisor si aplica,
- El estado del hipervisor (conectado en producción, en mantenimiento, apagado, ...),
- Un menú de acción.

<img src={shivaCpool_005} />

Varias acciones son posibles desde la pestaña __'Hosts'__ :

- ordenar nuevos hipervisores mediante el botón __'Añadir un host'__ :

<img src={shivaCpool_009} />

- posibilidad de consultar __el detalle de un hipervisor__ :

<img src={shivaCpool_007} />

- entrar o salir del __estado de mantenimiento__ de un hipervisor,
- __actualizar__ si aplica este hipervisor; para ello, __debe estar obligatoriamente en mantenimiento__. Existen dos tipos de actualizaciones :

1. Los builds VMware (nuevas versiones del hipervisor):

<img src={shivaCpool_008Build} />

2. La actualización del firmware de su unidad de cálculo (BIOS y firmware de tarjetas secundarias):

<img src={shivaCpool_008Firm} />

*__Nota__* :

- *Cloud Temple pone a disposición los builds para los hipervisores en intervalos regulares.
Es importante actualizar regularmente sus hipervisores, especialmente para permitir la aplicación de parches de seguridad.
Sin embargo, __no actualizamos nosotros mismos sus hipervisores__. Cloud Temple no tiene visibilidad sobre los compromisos de disponibilidad de sus cargas de trabajo.
Por lo tanto, le dejamos implementar su gestión del cambio y aplicar los nuevos builds en el momento más adecuado.*
- *El proceso de actualización es completamente automatizado. Debe disponer de al menos dos hipervisores en su clúster para permitir una actualización sin interrupción del servicio.*

<!-- TODO: Add missing page. -->
<!-- - *Es necesario tener [los permisos adecuados](../console/permissions.md) para realizar las diferentes acciones.* -->

También verá todas las reglas de afinidad/anti-afinidad para su clúster de hipervisores en la sección __'Reglas'__.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden utilizarse para gestionar el uso de los recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo intensivas en recursos.
En un __'Cpool'__ VMware, estas reglas suelen utilizarse para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar gracias a la gestión de reglas:

- __Reglas de Afinidad__ : Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican frecuentemente
juntas en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios
donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre los servidores.

- __Reglas de Anti-afinidad__ : Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y resiliencia, por ejemplo,
para evitar que máquinas críticas se vean afectadas todas a la vez en caso de fallo de un único servidor.
Las reglas de anti-afinidad son cruciales para aplicaciones que requieren alta disponibilidad,
como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no desea que sus dos Directorios Actifs estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla, su estado de activación (__'Estado'__) y las máquinas afectadas de su clúster de hipervisores.

<img src={shivaCpool_006} />

*Nota: las reglas de afinidad/anti-afinidad propuestas en la consola son reglas que afectan a las máquinas virtuales entre sí (no reglas entre hipervisores y máquinas virtuales).*

## Copia de seguridad

### Crear una política de copia de seguridad

Para agregar una nueva política de copia de seguridad, debe realizar una solicitud al soporte. El soporte está disponible desde el icono de balsa en la parte superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza mediante un __pedido de servicio__ que indica:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del inquilino
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)

<img src={shivaSupport} />

### Asignar una política de copia de seguridad a una máquina virtual

Cuando una SLA se asigna a una máquina virtual (VM), todos los discos asociados a esta VM heredan automáticamente la misma SLA. Posteriormente, es posible ejecutar manualmente la copia de seguridad a través de la pestaña "Políticas de copia de seguridad". En caso de no ejecutarla manualmente, la copia de seguridad se ejecutará automáticamente según el plan configurado por la SLA.

SecNumCloud hace obligatoria la asignación de una política de copia de seguridad a una máquina virtual antes de su inicio. De lo contrario, recibirá la siguiente notificación:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Haga clic en la pestaña __'Políticas de copia de seguridad'__ del menú de su máquina virtual. Puede ver allí la o las políticas de copia de seguridad asignadas a esta.

Para asignar una nueva política de copia de seguridad a la máquina virtual, haga clic en el botón __'Añadir una política'__ y seleccione la política de copia de seguridad deseada.

<img src={shivaVmPolitiquesBackup} />

### Asignar una política de copia de seguridad a un disco virtual

También es posible asignar una SLA directamente a un disco virtual específico de una máquina. En este caso, la máquina virtual no hereda esta SLA aplicada individualmente al disco. Sin embargo, no es posible ejecutar manualmente la copia de seguridad a nivel de discos, ya que esta funcionalidad no está soportada en Spectrum Protect Plus.

Por otro lado, es posible excluir ciertos discos de una o varias políticas de copia de seguridad (SLA) de la VM, lo que permite desasignar una o varias SLA en una base disco a disco. Este enfoque ofrece la flexibilidad de ejecutar manualmente la copia de seguridad de una SLA sin afectar todos los discos de la máquina virtual, permitiendo así una gestión más precisa de las copias de seguridad.

Haga clic en la barra de acciones del disco al que desea asignar una política de copia de seguridad. Luego, haga clic en __'Políticas'__ y seleccione la política de copia de seguridad deseada.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota:* La política a añadir debe encontrarse en una zona de disponibilidad diferente de la máquina virtual.

### Ejecutar una política de copia de seguridad

En el menú __'Políticas de copia de seguridad'__ de su máquina virtual, haga clic en el botón __'Ejecutar'__ de la columna __'Acciones'__ de la política de copia de seguridad que desea ejecutar.

<img src={shivaVmPolitiquesBackupExecute} />

Para ejecutar una política de copia de seguridad, también puede partir de la sección __'Copias de seguridad'__ en el menú de su máquina virtual. Haga clic en el botón __'Ejecutar copia de seguridad'__, luego seleccione la copia de seguridad que desea ejecutar en el menú desplegable.

<img src={shivaVmPolitiquesBackupExecute2} />

### Retirar una política de copia de seguridad

En el menú __'Políticas de copia de seguridad'__ de su máquina virtual, haga clic en el botón __'Retirar'__ de la columna __'Acciones'__ de la política de copia de seguridad que desea retirar.

<img src={shivaVmPolitiquesBackupRetirer} />

__Atención, no es posible retirar la última SLA en una máquina virtual encendida:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Eliminación de una política de copia de seguridad: caso de una política de copia de seguridad suspendida ("held")

Cuando la última recurso se disocia de una política SLA, el sistema detecta automáticamente esta situación. Como consecuencia, todos los trabajos relacionados con esta política SLA se transfieren automáticamente al estado "Suspendido" ("Held"). Es importante destacar que, en este momento, no es posible eliminar directamente la política SLA debido a la existencia de trabajos dependientes. Para proceder con la eliminación de la política, se debe seguir una serie de pasos.

Es necesario verificar que los trabajos afectados estén efectivamente en el estado "Suspendido". Una vez realizada esta verificación, estos trabajos pueden eliminarse. Solo después de eliminar estos trabajos dependientes, la política SLA podrá ser eliminada definitivamente del sistema.

Un caso particular merece atención especial: la adición de una nueva recurso a una política SLA cuyos trabajos dependientes no han sido eliminados. En esta situación, los identificadores de los trabajos se conservarán. Sin embargo, es crucial destacar que los trabajos en estado "Suspendido" no reanudarán automáticamente. Se requerirá una intervención manual para reactivarlos y permitir su ejecución.

nota: Para cualquier precisión sobre esta situación, contacte al soporte Cloud Temple.

La consola Cloud Temple impide la asignación de una máquina virtual a una política suspendida:

<img src={shivaBackupHeld_001} />

De igual manera, no es posible iniciar una máquina virtual que esté asociada a una política de copia de seguridad suspendida:

<img src={shivaBackupHeld_002} />

### Restaurar una copia de seguridad

La pestaña __'Copias de seguridad'__ del menú de sus máquinas virtuales le permite acceder a la lista de copias de seguridad de esta.
Para restaurar una copia de seguridad, haga clic en el botón __'Restaurar'__ en la fila correspondiente a la copia de seguridad que desea restaurar.

<img src={shivaVmBackupRestaurer} />

1. __Modo producción__: El modo producción permite la recuperación tras un incidente en el sitio local desde el almacenamiento primario o un sitio de recuperación tras un incidente remoto, reemplazando las imágenes de máquina originales por las imágenes de recuperación. Todas las configuraciones se transfieren en el marco de la recuperación, incluidos los nombres e identificadores, y todos los trabajos de copia de datos asociados a la máquina virtual continuarán ejecutándose. En el marco de una restauración en modo producción, puede elegir reemplazar el almacenamiento en la máquina virtual por un disco virtual proveniente de una copia de seguridad anterior de máquina virtual.

2. __Modo de prueba__: El modo de prueba crea máquinas virtuales temporales para desarrollo, pruebas, verificación de instantáneas y verificación de recuperación tras un incidente según un plan repetible, sin impacto en los entornos de producción. Las máquinas de prueba se ejecutan tanto como sea necesario para realizar la prueba y verificación, y luego se limpian. A través de la red aislada, puede establecer un entorno seguro para probar sus trabajos sin interferir con las máquinas virtuales utilizadas para la producción. Las máquinas virtuales creadas en modo de prueba tienen nombres e identificadores únicos para evitar conflictos en su entorno de producción.

3. __Modo clon__: El modo clon crea copias de las máquinas virtuales para casos de uso que requieren copias permanentes o de ejecución prolongada para exploración de datos o duplicación de un entorno de prueba en una red aislada. Las máquinas virtuales creadas en modo clon tienen nombres e identificadores únicos para evitar conflictos en su entorno de producción. En modo clon, debe prestar atención al consumo de recursos, ya que el modo clon crea máquinas permanentes o de largo plazo.

__La restauración está por defecto en modo "PRUEBA" para preservar la producción__ y puede elegir el nombre de la vm restaurada:

<img src={shivaVmBackupTest} />

Tenga en cuenta que si las pruebas son satisfactorias, es posible pasar una máquina virtual del modo de prueba al modo de producción:

<img src={shivaVmBackup_2prod} />
