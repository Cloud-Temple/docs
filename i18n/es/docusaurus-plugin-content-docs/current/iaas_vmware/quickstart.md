---
title: Guía de inicio rápido
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
import shivaCpool_011 from './images/shiva_cpool_011.jpg'
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
import shivaCpool_007 from './images/shiva_cpool_007.jpg'
import shivaCpool_008Build from './images/shiva_cpool_008_build.jpg'
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

## Cómputo

### Gestión de máquinas virtuales

La interfaz de gestión de sus máquinas virtuales está disponible en la consola Shiva en el menú __'IaaS'__ situado en la barra verde a la izquierda de la pantalla.

### Lista de máquinas virtuales

En la sección __'Máquinas virtuales'__, tiene acceso a la lista de sus máquinas virtuales alojadas en su Cloud de confianza.

<img src={shivaVmHome} />

Tiene acceso a la siguiente información para cada máquina virtual:

- Su nombre,
- Las etiquetas que le han sido asignadas,
- Su estado (apagada, encendida, en procesamiento, host desconectado o inválido),
- Su gestor (en entorno VMware, el Vcenter asociado),
- Su sistema operativo,
- La cantidad de CPUs virtuales (vCPU),
- La cantidad de memoria virtual (vRAM).

### Acciones sobre las máquinas virtuales

Las siguientes acciones son posibles desde esta interfaz:

- Actualizar la lista de máquinas virtuales;
- Exportar la lista en formato CSV;
- Filtrar la lista;
- Buscar una máquina virtual por su nombre;
- Crear una nueva máquina virtual.

<img src={shivaVmHomeDesc} />

__Un banner de alertas puede estar presente en la parte superior de la lista__: indica que se han activado alarmas críticas en una o varias de sus máquinas virtuales.
El botón __'Ver'__ permite consultar las máquinas virtuales que están afectadas por esta notificación.

<img src={shivaVmHomeAlarme} />

Cuando hace clic en la flecha desplegable verde a la derecha de la lista para una máquina virtual:

<img src={shivaVmActions} />

Accede a toda la información sobre ella:

<img src={shivaVmInformations} />

Una barra de acceso rápido permite realizar las siguientes acciones:

<img src={shivaVmBandeauRapide} />

- Encender la máquina virtual;
- Apagarla;
- Reiniciarla;
- Modificar las opciones de alimentación del SO invitado;
- Abrir la consola;
- Montar un ISO;
- Desmontar un ISO;
- Clonar la máquina virtual;
- Moverla (vMotion);
- Renombrarla;
- Eliminarla.

Una vista rápida ofrece una visualización del __almacenamiento__, la __CPU__ y la __RAM__ de la máquina virtual.

<img src={shivaVmVueRapide} />

En la pestaña __'Información general'__, encontrará información detallada relativa a su máquina virtual, como su SO, su ubicación física (datacenter, datastore, etc.), RAM, CPU, direcciones IP, logs y más.

<img src={shivaVmInfosGenerales} />

Desde esta vista, puede realizar las siguientes acciones:

- Modificar el sistema operativo (la máquina virtual debe estar apagada),
- Actualizar la versión del hardware (la máquina virtual debe estar apagada),
- Modificar la RAM o la CPU.

Una pestaña __'Avanzado'__ permite consultar información más específica como la información de "VMware tools", la versión de hardware, el gestor, etc.

<img src={shivaVmInfosAvancees} />

### Edición de la RAM o la CPU de una máquina virtual

Vaya a la pestaña __'Máquinas Virtuales'__, muestre los detalles de una máquina virtual,
seleccione la pestaña __'Información general'__ y haga clic en el botón de edición de la variable a modificar:

<img src={shivaEditCpuRam} />

### Modos de discos

Puede añadir diferentes modos de discos:

- __Persistente__: Los cambios se escriben inmediata y permanentemente en el disco virtual. __Este es el modo recomendado.__
- __Independiente no persistente__: Los cambios realizados en el disco virtual se registran en un nuevo log y se eliminan al apagar. No se ve afectado por las instantáneas. __No es compatible con la copia de seguridad.__
- __Independiente persistente__: Los cambios se escriben inmediata y permanentemente en el disco virtual. No se ve afectado por las instantáneas. __No es compatible con la copia de seguridad.__

### Gestión de controladores de máquina virtual

Puede modificar el tipo de controlador de disco para su máquina virtual.

<img src={shivaVmDiskctrl_001} />

Las máquinas virtuales pueden estar equipadas con controladores SCSI y NVME, con un límite de 4 controladores de cada tipo. Cada controlador puede gestionar hasta 15 discos.

Un controlador SCSI puede configurarse con diferentes subtipos: Para Virtual, Bus Logic, LSI Logic o LSI Logic SAS.

El controlador Para Virtual se distingue por su capacidad extendida. Puede soportar hasta 64 discos cuando la versión de hardware de la máquina virtual es compatible con un ESXi en versión 6.7 o superior.

> __Importante__: Si desea modificar el tipo de un controlador Para Virtual que tiene más de 15 discos, primero deberá desconectar los discos en los slots correspondientes.

### Consola de una máquina virtual

La consola de una máquina virtual es accesible desde la lista de máquinas virtuales haciendo clic en el icono __'Consola'__:

<img src={shivaCpool_010} />

Se abre una nueva pestaña en su navegador y se muestra la consola de su máquina, basada en un cliente VNC:

<img src={shivaCpool_011} />

Es posible en el menú VNC:

- Solicitar el envío de una tecla particular,
- Realizar copiar/pegar desde el portapapeles de su SO,
- Pasar a modo pantalla completa,
- Cambiar el tamaño de la ventana (escalado).

La gestión del teclado, con la consola de las máquinas virtuales, funciona perfectamente en un entorno completamente *inglés*.

La entrada realizada en la consola depende del idioma del teclado de su máquina física, del idioma del teclado
de la máquina virtual y de la activación o no de la opción 'enforce keyboard' a la izquierda de la pantalla.
Aquí hay un resumen de las situaciones posibles con el idioma francés:

| Idioma del teclado de la máquina física (entrada) | Idioma del teclado de la máquina virtual | Opción 'enforce keyboard' seleccionada | Resultado (salida)                                   |
| ------------------------------------------------- | ---------------------------------------- | -------------------------------------- | ---------------------------------------------------- |
| Francés                                           | Francés                                  | No                                     | No recomendado (problema con caracteres especiales)  |
| Francés                                           | Francés                                  | Sí                                     | < y > no funcionan                                   |
| Francés                                           | Inglés                                   | No                                     | No recomendado (problema con caracteres especiales)  |
| Francés                                           | Inglés                                   | Sí                                     | Inglés                                               |
| Inglés                                            | Francés                                  | No                                     | < y > no funcionan                                   |
| Inglés                                            | Francés                                  | Sí                                     | < y > no funcionan                                   |
| Inglés                                            | Inglés                                   | No                                     | Inglés                                               |
| Inglés                                            | Inglés                                   | Sí                                     | Inglés                                               |

__Nota__:

- Si la combinación __'AltGr'__ y __'@'__ en el teclado no funciona, active el botón __'enforce key'__ en el menú __'VNC'__ de la consola y vuelva a intentarlo.
- Si todavía no funciona y el SO de la máquina física es __Windows, ponga el teclado de la máquina física en inglés
y trate de introducir el @ de manera clásica__ *(salida azerty: AltGr + tecla del 0 o salida qwerty: tecla del 2)*.

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` regularmente enriquecido y actualizado por nuestros equipos.
Incluye a día de hoy varias decenas de `Templates` e imágenes para montar en sus máquinas virtuales.

<img src={shivaCatalogs} />

Para publicar un ISO/OVF, hay que ir a la vista __'Catálogo'__ y hacer clic en el botón __'publicar archivos'__ en la parte superior de la página:

<img src={shivaCatalogs_002} />

Es posible transformar una VM en plantilla y exportarla al catálogo. Para ello, seleccione una máquina virtual y utilice el botón de acción __'clonar'__:

<img src={shivaVmTemplate_002} />

Seleccione __'Exportar como vm-template'__:

<img src={shivaVmTemplate_001} />

A continuación, rellene la información necesaria. Será entonces posible desplegar una nueva VM a partir de la plantilla desde el botón __'Nueva máquina virtual'__ o desde la página __'Catálogos'__. También es posible exportar la VM en formato OVF.

__Bueno saberlo__: es posible convertir un archivo OVA a OVF y viceversa.
El método más común utilizado es Vmware convertor pero también existe un método simple utilizando ```tar```

Extracción del archivo ova:

```
tar -xvf vmName.ova
```

Crear un archivo OVA desde un archivo OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Configuración avanzada de máquinas virtuales: Extra Config

Extra Config proporciona una forma flexible de incluir pares clave=valor en la configuración de una máquina virtual. Las claves y los valores son interpretados por el sistema cuando se despliega la máquina virtual.

Ahora, usted mismo puede modificar las propiedades de tipo __Extra Config__ en las opciones avanzadas de una máquina virtual:

<img src={shivaVmAdv_001} />

Puede añadir una propiedad de entre una lista de claves. Además, puede modificar el valor de una clave que usted mismo haya añadido. Los pares clave=valor ya existentes no son modificables.

Por favor, contacte con el soporte para cualquier solicitud de adición de nuevas claves.

<img src={shivaVmAdv_002} />

__Nota__: *Para el uso de GPU por la máquina virtual, es obligatorio activar la clave 'pciPassthru.use64bitMMIO' y asignar la cantidad de espacio MMIO (Memory-mapped I/O) necesario a través de 'pciPassthru.64bitMMIOSizeGB'. Se recomienda encarecidamente consultar la [documentación oficial de Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Configuración avanzada de máquinas virtuales: vAPP

También puede modificar las propiedades de tipo __vAPP__ en las opciones avanzadas de una máquina virtual:

<img src={shivaVmAdv_003} />

Puede añadir una propiedad, modificarla o eliminarla. Se ofrecen cuatro tipos de propiedades: String, Número, Booleano, Contraseña:

<img src={shivaVmAdv_004} />

__Nota__: *La máquina virtual debe estar detenida para modificar sus propiedades vAPP.*

### Gestión de __'hipervisores'__ y __'Cpool'__ (clusters de hipervisores)

La gestión de sus hipervisores se realiza en el submenú __'Cómputo'__ del menú __'IaaS'__, situado en la barra verde a la izquierda de su pantalla.

<img src={shivaCpool_001} />

En este submenú, dispone de una vista sobre:

- El stack de software de hipervisores, sus AZ y sus recursos,
- El stack de software de copia de seguridad.

En enero de 2024, la oferta de hipervisor disponible en la infraestructura cualificada Cloud Temple está basada en VMware. El software de copia de seguridad utilizado es IBM Spectrum Protect Plus.

### Gestión de clusters VMware

Para acceder a la gestión de clusters VMware, haga clic en el submenú __'Cómputo'__ del menú __'IaaS'__:

Por defecto, la primera pestaña lista todos los hipervisores (de todos los clusters):

<img src={shivaEsx_001} />

Es posible visualizar los detalles de un hipervisor haciendo clic en su nombre:

<img src={shivaEsx_002} />

Existe una pestaña por cluster de hipervisor para consultar los detalles de cada uno:

<img src={shivaCpool_003} />

Si hace clic en un cluster, verá la síntesis de su composición:

- El total de la potencia de cálculo expresado en GHz,
- El total de la memoria disponible y la ratio utilizada,
- El total del espacio de almacenamiento (todos los tipos combinados) así como la parte utilizada,
- Los mecanismos de automatización en caso de indisponibilidad de una cuchilla de cálculo (__'Vsphere DRS'__),
- El número de máquinas virtuales,
- El número de hipervisores.

<!-- TODO: Add missing page. -->
<!-- Al consultar la página de un cluster, están disponibles varias pestañas. La pestaña __'Reglas'__ le permite definir las [reglas de afinidad / anti-afinidad](compute.md#gestion-de-la-afinidad-de-sus-maquinas-virtuales) -->

<img src={shivaCpool_004} />

Verá aparecer para cada hipervisor en la pestaña __'Hosts'__:

- El uso de __CPU__ y __Memoria__,
- El número de máquinas virtuales asignadas,
- La disponibilidad de una nueva build para el sistema operativo del hipervisor en su caso,
- El estado del hipervisor (conectado en producción, en mantenimiento, apagado, ...),
- Un menú de acción.

<img src={shivaCpool_005} />

Varias acciones son posibles desde la pestaña __'Hosts'__:

- Pedir nuevos hipervisores a través del botón __'Añadir un host'__:

<img src={shivaCpool_009} />

- Posibilidad de consultar __el detalle de un hipervisor__:

<img src={shivaCpool_007} />

- Entrar o salir del __estado de mantenimiento__ de un hipervisor,
- __Actualizar__ en su caso este hipervisor; para ello, __debe estar imperativamente en mantenimiento__. Existen dos tipos de actualizaciones:

1. Las builds VMware (las nuevas versiones del hipervisor):

<img src={shivaCpool_008Build} />

2. La actualización del firmware de su cuchilla de cálculo (bios y firmware de tarjetas hijas):

<img src={shivaCpool_008Firm} />

*__Observación__*:

- *Cloud Temple pone a disposición las builds para los hipervisores a intervalos regulares.
Es importante actualizar regularmente sus hipervisores, especialmente para permitir la aplicación de los parches de seguridad.
Sin embargo, __nosotros no actualizamos por nosotros mismos sus hipervisores__. Cloud Temple no tiene visibilidad sobre los compromisos de disponibilidad de sus cargas de trabajo.
Le dejamos, por tanto, implementar su gestión del cambio y aplicar en el mejor momento las nuevas builds.*
- *El proceso de actualización está completamente automatizado. Debe disponer de al menos dos hipervisores en su cluster para permitir una actualización sin interrupción del servicio.*

<!-- TODO: Add missing page. -->
<!-- - *Es necesario tener [los permisos adecuados](../console/permissions.md) para efectuar las diferentes acciones.* -->

También ve el conjunto de reglas de afinidad/anti-afinidad para su cluster de hipervisores en la parte __'Reglas'__.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden utilizarse para gestionar el uso de los recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ VMware, estas reglas se utilizan a menudo para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar gracias a la gestión de reglas:

- __Reglas de Afinidad__: Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican frecuentemente
juntas en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios
donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre los servidores.

- __Reglas de Anti-afinidad__: A la inversa, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que todas las máquinas críticas se vean afectadas en caso de fallo de un único servidor.
Las reglas de anti-afinidad son cruciales para las aplicaciones que requieren alta disponibilidad,
como en los entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no desea que sus dos Active Directory estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,
su estado de activación (__'Estado'__) y las máquinas concernidas de su cluster de hipervisores.

<img src={shivaCpool_006} />

*Nota: las reglas de afinidad/anti-afinidad propuestas en la consola son reglas concernientes a las máquinas virtuales entre ellas (no hay reglas entre hipervisores y máquinas virtuales).*

## Copia de seguridad

### Crear una política de copia de seguridad

Para añadir una nueva política de copia de seguridad, hay que hacer una solicitud al soporte. El soporte es accesible desde el icono de salvavidas en la parte superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)

<img src={shivaSupport} />

### Asignar una política de copia de seguridad a una máquina virtual

Cuando se asigna un SLA a una máquina virtual (VM), todos los discos asociados a esta VM heredan automáticamente el mismo SLA. Posteriormente, es posible lanzar manualmente la ejecución de la copia de seguridad a través de la pestaña "Políticas de copia de seguridad". A falta de un lanzamiento manual, la copia de seguridad se ejecutará automáticamente según la planificación configurada por el SLA.

SecNumCloud hace obligatoria la asignación de una política de copia de seguridad a una máquina virtual antes de su inicio. En caso contrario, tendrá la siguiente notificación:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Haga clic en la pestaña __'Políticas de copia de seguridad'__ del menú de su máquina virtual. Puede visualizar la o las políticas de copia de seguridad asignada(s) a la misma.

Para asignar una nueva política de copia de seguridad a la máquina virtual, haga clic en el botón __'Añadir una política'__ y seleccione la política de copia de seguridad deseada.

<img src={shivaVmPolitiquesBackup} />

### Asignar una política de copia de seguridad a un disco virtual

También es posible asignar un SLA directamente a un disco virtual específico de una máquina. En este caso, la máquina virtual no hereda este SLA aplicado individualmente al disco. Sin embargo, no es posible lanzar manualmente la ejecución de la copia de seguridad a nivel de los discos, ya que esta funcionalidad no está soportada en Spectrum Protect Plus.

Por otro lado, es posible excluir ciertos discos de una o varias políticas de copia de seguridad (SLA) de la VM, lo que permite desasignar uno o varios SLA(s) sobre una base disco por disco. Este enfoque ofrece la flexibilidad de lanzar manualmente la ejecución de la copia de seguridad de un SLA sin afectar a todos los discos de la máquina virtual, permitiendo así una gestión más fina de las copias de seguridad.

Haga clic en la barra de acciones del disco al que desea asignar una política de copia de seguridad. Luego, haga clic en __'Políticas'__ y seleccione la política de copia de seguridad deseada.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota*: La política a añadir debe encontrarse en una zona de disponibilidad diferente de la máquina virtual.

### Ejecutar una política de copia de seguridad

En el menú __'Políticas de copia de seguridad'__ de su máquina virtual, haga clic en el botón __'Ejecutar'__ de la columna __'Acciones'__ de la política de copia de seguridad que desea ejecutar.

<img src={shivaVmPolitiquesBackupExecute} />

Para ejecutar una política de copia de seguridad, también puede partir de la sección __'Copias de seguridad'__ en el menú de
su máquina virtual. Haga clic en el botón __'Ejecutar la copia de seguridad'__, luego seleccione la copia de seguridad que desea ejecutar en la lista desplegable.

<img src={shivaVmPolitiquesBackupExecute2} />

### Retirar una política de copia de seguridad

En el menú __'Políticas de copia de seguridad'__ de su máquina virtual, haga clic en el botón __'Retirar'__ de la columna __'Acciones'__ de la política de copia de seguridad que desea retirar.

<img src={shivaVmPolitiquesBackupRetirer} />

__Atención, no es posible retirar el último SLA en una máquina virtual encendida:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Eliminación de una política de copia de seguridad: caso de una política de copia de seguridad suspendida ("held")

Cuando el último recurso se disocia de una política SLA, el sistema detecta automáticamente esta situación. En consecuencia, todos los trabajos relacionados con esta política SLA cambian automáticamente al estado "Suspendido" ("Held"). Es importante señalar que en esta etapa, la eliminación directa de la política SLA no es posible debido a la existencia de trabajos dependientes. Para proceder a la eliminación de la política, se debe seguir una serie de pasos.

Hay que verificar que los trabajos concernidos están efectivamente en estado "Suspendido". Una vez realizada esta verificación, estos trabajos pueden ser eliminados. Es solo después de haber eliminado estos trabajos dependientes que la política SLA podrá ser definitivamente borrada del sistema.

Un caso particular merece una atención específica: la adición de un nuevo recurso a una política SLA cuyos trabajos dependientes no han sido eliminados. En esta situación, los identificadores de los trabajos serán conservados. Sin embargo, es crucial señalar que los trabajos en estado "Suspendido" no se reanudarán automáticamente. Una intervención manual será necesaria para reactivarlos y permitir su ejecución.

nota: Para cualquier precisión sobre esta situación, contacte con el soporte de Cloud Temple.

La consola Cloud Temple impide la asignación de una máquina virtual a una política suspendida:

<img src={shivaBackupHeld_001} />

Del mismo modo, no es posible iniciar una máquina virtual que está asociada a una política de copia de seguridad suspendida:

<img src={shivaBackupHeld_002} />

### Restaurar una copia de seguridad

La pestaña __'Copias de seguridad'__ del menú de sus máquinas virtuales le permite acceder a la lista de copias de seguridad de la misma.
Para restaurar una copia de seguridad, haga clic en el botón __'Restaurar'__ en la línea correspondiente a la copia de seguridad que desea restaurar.

<img src={shivaVmBackupRestaurer} />

1. __Modo producción__: El modo producción permite la recuperación tras incidente en el sitio local desde el almacenamiento primario o un sitio de recuperación tras incidente remoto, reemplazando las imágenes de máquina originales por las imágenes de recuperación. Todas las configuraciones se transfieren como parte de la recuperación, incluyendo nombres e identificadores, y todos los trabajos de copia de datos asociados a la má
