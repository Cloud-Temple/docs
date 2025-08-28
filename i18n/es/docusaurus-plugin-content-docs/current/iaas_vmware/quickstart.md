---
Guía de inicio
---

Importar imágenes:
- shivaVmHome desde './images/shiva_vm_home.png'
- shivaVmHomeDesc desde './images/shiva_vm_home_desc.png'
- shivaVmHomeAlarme desde './images/shiva_vm_home_alarme.png'
- shivaVmActions desde './images/shiva_vm_actions.png'
- shivaVmInformaciones desde './images/shiva_vm_informations.png'
- shivaVmBandeauRapide desde './images/shiva_vm_bandeau_rapide.png'
- shivaVmVueRapide desde './images/shiva_vm_vue_rapide.png'
- shivaVmInfosGenerales desde './images/shiva_vm_infos_generales.png'
- shivaVmInfosAvancees desde './images/shiva_vm_infos_avancees.png'
- shivaEditCpuRam desde './images/shiva_edit_cpu_ram.png'
- shivaVmDiskctrl_001 desde './images/shiva_vm_diskctrl_001.png'
- shivaCpool_010 desde './images/shiva_cpool_010.png'
- shivaCpool_011 desde './images/shiva_cpool_011.png'
- shivaCatalogs desde './images/shiva_catalogs.png'
- shivaCatalogs_002 desde './images/shiva_catalogs_002.png'
- shivaVmTemplate_002 desde './images/shiva_vm_template_002.png'
- shivaVmTemplate_001 desde './images/shiva_vm_template_001.png'
- shivaVmAdv_001 desde './images/shiva_vm_adv_001.png'
- shivaVmAdv_002 desde './images/shiva_vm_adv_002.png'
- shivaVmAdv_003 desde './images/shiva_vm_adv_003.png'
- shivaVmAdv_004 desde './images/shiva_vm_adv_004.png'
- shivaCpool_001 desde './images/shiva_cpool_001.png'
- shivaEsx_001 desde './images/shiva_esx_001.png'
- shivaEsx_002 desde './images/shiva_esx_002.png'
- shivaCpool_003 desde './images/shiva_cpool_003.png'
- shivaCpool_004 desde './images/shiva_cpool_004.png'
- shivaCpool_005 desde './images/shiva_cpool_005.png'
- shivaCpool_009 desde './images/shiva_cpool_009.png'
- shivaCpool_007 desde './images/shiva_cpool_007.png'
- shivaCpool_008Build desde './images/shiva_cpool_008_build.png'
- shivaCpool_008Firm desde './images/shiva_cpool_008_firm.png'
- shivaCpool_006 desde './images/shiva_cpool_006.png'
- shivaSupport desde '../console/images/shiva_support.png'
- shivaVmPolíticasBackupAssignMandatory desde './images/shiva_vm_políticas_backup_assign_mandatory.png'
- shivaVmPolíticasBackup desde './images/shiva_vm_políticas_backup.png'
- shivaVmDiscosVirtualesPolíticas desde './images/shiva_vm_discos_virtueles_políticas.png'
- shivaVmPolíticasBackupExecute desde './images/shiva_vm_políticas_backup_execute.png'
- shivaVmPolíticasBackupExecute2 desde './images/shiva_vm_políticas_backup_execute2.png'
- shivaVmPolíticasBackupRetirar desde './images/shiva_vm_políticas_backup_retirar.png'
- shivaVmPolíticasBackupRetirarImposible desde './images/shiva_vm_políticas_backup_retirar_imposible.png'
- shivaBackupHeld_001 desde './images/shiva_backup_held_001.png'
- shivaBackupHeld_002 desde './images/shiva_backup_held_002.png'
- shivaVmBackupRestaurar desde './images/shiva_vm_backup_restaurer.png'
- shivaVmBackupTest desde './images/shiva_vm_backup_test.png'
- shivaVmBackup_2prod desde './images/shiva_vm_backup_2prod.png'

### Cálculo

### Gestión de Virtuales

La interfaz de administración de sus máquinas virtuales está disponible en la consola Shiva, dentro del menú __'IaaS'__ ubicado en el barra lateral superior a la izquierda del escritorio.

### Lista de máquinas virtuales

En la sección __'Máquinas Virtuales'__, tendrás acceso a la lista de tus máquinas virtuales alojadas en tu nube confiable.

<img src={shivaVmHome} />

Para cada máquina virtual, podrás acceder a las siguientes informaciónes:

- Su nombre,
- Los etiquetas que le asignas,
- Su estado (apagado, encendido, en proceso, host desconectado o inválido),
- Su administrador (en entorno VMware, el Vcenter asociado),
- Sistema operativo,
- La cantidad de virtual CPU (vCPU),
- La cantidad de memoria virtual (vRAM).

### Actions sur les máquinas virtuales

Las siguientes acciones son posibles a partir de esta interfaz:

- Actualizar la lista de máquinas virtuales;
- Exportar la lista en formato CSV;
- Filtrar la lista;
- Buscar una máquina virtual por su nombre;
- Crear una nueva máquina virtual.

<img src={shivaVmHomeDescripcion} />

__Un bandeau de alertas puede estar presente en la parte superior de la lista__ para indicar que se han activado alarmas críticas en una o más de sus máquinas virtuales. El botón __'Ver detalles'__ permite consultar las máquinas virtuales afectadas por esta notificación.

<img src={shivaVmHomeAlerta} />

Al hacer clic en el botón verde rectangular al lado derecho de una máquina virtual:

<img src={shivaVmAcciones} />

Se accede a todas las información relacionadas con ella:

<img src={shivaVmInformacion} />

Un bandeau rápido permite realizar las siguientes acciones:

<img src={shivaVmBandejaRapida} />

- Enciender la máquina virtual;
- Apagarla;
- Reiniciarla;
- Modificar las opciones de energía del invitado SE;
- Abrir la consola;
- Montar un ISO;
- Desmontar un ISO;
- Clonar la máquina virtual;
- Moverla (vMotion);
- Renombrarla;
- Eliminarla.

Una vista rápida ofrece una visualización del __almacenamiento__, __procesador__ y __RAM__ de la máquina virtual.

<img src={shivaVmVistaRapida} />

En el apartado __'Información general___, se encuentran detalles detallados sobre su máquina virtual, como el sistema operativo, su ubicación física (datacenter, datastore, etc.), la RAM, el procesador, las direcciones IP, los registros y otros.

<img src={shivaVmInformacionGeneral} />

Desde esta vista, se pueden realizar las siguientes acciones:

- Modificar el sistema operativo (la máquina virtual debe estar apagada),
- Actualizar la versión del hardware (la máquina virtual debe estar apagada),
- Modificar la RAM o el procesador.

Un apartado __'Avanzado___, permite consultar información más específica como las informaciones de "VMware tools", la versión hardware, el manager, etc...

<img src={shivaVmInformacionAvanzada} />

### Edición de la RAM o del CPU de una máquina virtual

Ve a la pestaña __'Máquinas Virtuales'__, muestra los detalles de una máquina virtual, selecciona la pestaña __'Información general'__ y haz clic en el botón para editar la variable que deseas modificar:

<img src={shivaEditCpuRam} />

### Modos de disco

Puedes agregar diferentes modos de disco:

- **Persista**: Las modificaciones se escriben inmediata y definitivamente en el disco virtual. __Es el modo recomendado.__
- **Independiente no persista**: Las modificaciones realizadas en el disco virtual se registran en un nuevo registro de log y se eliminan al apagar la máquina. No está afectado por las copias de seguridad. __No es soportado por la recuperación de desastres.__
- **Independiente persistente**: Las modificaciones se escriben inmediata y definitivamente en el disco virtual. No está afectado por las copias de seguridad. __No es soportado por la recuperación de desastres.__

### Gestión de controladores de disco virtual

Puede cambiar el tipo de controlador de disco para su máquina virtual.

<img src={shivaVmDiskctrl_001} />

Las máquinas virtuales pueden estar equipadas con controladores SCSI y NVME, con una limitación de 4 controladores por tipo. Cada controlador puede gestionar hasta 15 discos.

Los controladores SCSI pueden configurarse con subtipos diferentes: Para Virtual, Logicas de Bus, LSI Logic o LSI Logic SAS.

El controlador Para Virtual se destaca por su amplia capacidad. Puede soportar hasta 64 discos cuando la versión hardware de la máquina virtual es compatible con ESXi en versiones 6.7 o superior.

> __Importante__: Si desea cambiar el tipo de un controlador Para Virtual que tenga más de 15 discos, debe primero desconectar los discos en los puertos correspondientes.

### Console de una máquina virtual

La consola de una máquina virtual está accesible desde la lista de máquinas virtuales haciendo clic en el ícono __'Console'__:

<img src={shivaCpool_010} />

Se abre un nuevo tablero del navegador y se muestra entonces la consola de su máquina virtual, basada en un cliente VNC:

<img src={shivaCpool_011} />

En el menú VNC, es posible:

- Solicitar enviar una tecla específica,
- Realizar copiar-peinar desde el portapapeles de su sistema operativo,
- Pasar a modo completo de pantalla,
- Cambiar la tamaño de la ventana (scaling).

La gestión del teclado con las consolas de máquinas virtuales funciona perfectamente en un entorno completamente *inglés*.

La entrada efectuada en la consola depende del idioma del teclado de su máquina física, del idioma del teclado de la máquina virtual y de si está activada o no la opción 'enforcer clave'. Aquí hay una resumen de las posibles situaciones con el francés:

| Idioma del teclado de la máquina física (entrada) | Idioma del teclado de la máquina virtual | Opción 'enforcer clave' seleccionada | Resultado (salida)                                   |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| Francés                                          | Francés                                  | No                                    | Desaconsejado (problema con los caracteres especiales) |
| Francés                                          | Francés                                  | Sí                                    | < y > no funcionan                          |
| Francés                                          | Inglés                                   | No                                    | Desaconsejado (problema con los caracteres especiales) |
| Francés                                          | Inglés                                   | Sí                                    | Anglais                                             |
| Inglés                                           | Francés                                  | No                                    | < y > no funcionan                          |
| Inglés                                           | Francés                                  | Sí                                    | < y > no funcionan                          |
| Inglés                                           | Inglés                                   | No                                    | Anglais                                             |
| Inglés                                           | Inglés                                   | Sí                                    | Anglais                                             |

__Nota__:

- Si la combinación __'AltGr'__ y __'@'__ en el teclado no funciona, active el botón __'enforcer clave'__ en el menú __'VNC'__ de la consola y vuelva a intentarlo.
- Si esto no funciona y su sistema operativo de la máquina física es __Windows__, cambie el teclado de su máquina física al inglés y intente escribir @ de manera clásica *(salida azerty: AltGr + tecla del 0 o salida qwerty: tecla del 2)*.

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple ofrece a sus usuarios un catálogo de `Templates` que se actualiza regularmente por nuestras equipos. Este catálogo contiene varias decenas de `Templates` e imágenes para montar en máquinas virtuales.

<img src={shivaCatalogs} />

Para publicar un ISO/OVF, debe acceder a la vista __'Catalogo'__ y hacer clic en el botón __'Publicar archivos'__ ubicado en la parte superior de la página:

<img src={shivaCatalogs_002} />

Es posible transformar una VM en un modelo y exportarlo al catálogo. Para ello, seleccione una máquina virtual y utilice el botón de acción __'Clonar'__:

<img src={shivaVmTemplate_002} />

Seleccione __'Exportar como vm-template'__ :

<img src={shivaVmTemplate_001} />

Luego, rellene las información necesaria. A continuación, será posible desplegar una nueva VM a partir del modelo desde el botón __'Nueva máquina virtual'__ o desde la página __'Catálogos'. También es posible exportar la VM al formato OVF.

__Conocimiento útil__: se puede convertir un archivo OVA en OVF y viceversa. La metodología más comúnmente utilizada es Vmware Converter, aunque también existe una forma más sencilla utilizando ```tar```.

Extraer un archivo OVA:

```
tar -xvf vmName.ova
```

Crear un archivo OVA desde un archivo OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName.disk1.vmdk vmName.mf
```

### Configuración avanzada de máquinas virtuales: Configuraciones Adicionales

Las configuraciones adicionales (Extra Config) ofrecen una forma flexible para incluir pares clave-valor en la configuración de una máquina virtual. Estos pares clave-valor se interpretan por el sistema durante el despliegue de la máquina virtual.

Ahora, puedes modificar las propiedades de tipo __Configuración Adicional__ directamente en las opciones avanzadas de una máquina virtual:

<img src={shivaVmAdv_001} />

Puedes agregar una nueva propiedad a la lista. Además, puedes modificar la valor de una propiedad que has añadido personalmente. Las pares clave-valor existentes no pueden ser modificadas.

Por favor, póngate en contacto con el soporte para cualquier solicitud de agregación de nuevas claves.

<img src={shivaVmAdv_002} />

__Nota__: *Para el uso de GPUs por parte de la máquina virtual, es obligatorio activar la clave 'pciPassthru.use64bitMMIO' y asignar la cantidad de espacio MMIO (Memory-mapped I/O) necesaria mediante 'pciPassthru.64bitMMIOSizeGB'. Se recomienda consultar la [documentación oficial Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Configuración avanzada de máquinas virtuales: vAPP

Además de poder modificar las propiedades de tipo __vAPP__ en las opciones avanzadas de una máquina virtual, también se puede agregar, modificar o eliminar una propiedad. Se ofrecen cuatro tipos de propiedades: String, Número, Booleano y Contraseña:

<img src={shivaVmAdv_003} />

__Nota__: *La máquina virtual debe estar parada para modificar sus propiedades vAPP.*



### Management of __'Hypervisors__ and __'Cpool'__ (Hypervisor Clusters)

The management of your hypervisors is handled within the sub-menu labeled __'Compute__' under the __'IaaS'__ menu, located in the top left navigation bar.

<img src={shivaCpool_001} />

Within this sub-menu, you have access to:

- The hypervisor software stack, their AZ (Availability Zone), and resource allocation,
- The backup software stack.

As of January 2024, the available hypervisor offering on Cloud Temple's qualified infrastructure is based on VMware. The backup software utilized is IBM Spectrum Protect Plus.

### Gestión de clusters VMware

Para acceder al control de los clusters VMware, haz clic en el submenú __'Cálculo'__ del menú __'IaaS'__:

Por defecto, el primer tablero muestra todos los hyperviseurs (todos los clusters confundidos):

<img src={shivaEsx_001} />

Puedes ver los detalles de un hyperviseur haciendo clic en su nombre:

<img src={shivaEsx_002} />

Hay un tablero por cluster de hyperviseur para consultar los detalles de cada uno:

<img src={shivaCpool_003} />

Al hacer clic en un cluster, verás la resumen de su composición:

- El total de potencia de cálculo expresado en Ghz,
- El total de memoria disponible y el ratio utilizado,
- El total de almacenamiento (todos los tipos confundidos) junto con el porcentaje utilizado,
- Los mecanismos de automatización en caso de indisponibilidad de una lámina de computación (__'Vsphere DRS'__),
- El número de máquinas virtuales,
- El número de hyperviseurs.

<!-- TODO: Añadir la página ausente. -->
<!-- Al consultar la página de un cluster, se disponen varios tableros. El tablero __'Reglas'__ te permite definir las [restricciones de afinidad / anti-afinidad](compute.md#gestion-de-laffinité-de-vos-machines-virtuelles) -->

<img src={shivaCpool_004} />

Aparecen en el tablero __'Hosts__' para cada hyperviseur:

- El uso __CPU__ y __memoria__,
- El número de máquinas virtuales afectadas,
- La disponibilidad de un nuevo build para el sistema operativo del hyperviseur (si es necesario),
- El estado del hyperviseur (en producción, mantenimiento, apagado, ...),
- Un menú de acción.

<img src={shivaCpool_005} />

Se pueden realizar varias acciones desde el tablero __'Hosts__':

- Ordenar nuevos hyperviseurs mediante el botón __'Agregar un host'__:

<img src={shivaCpool_009} />

- Consultar los detalles de un hyperviseur:

<img src={shivaCpool_007} />

- Entrar o salir del estado de mantenimiento de un hyperviseur,
- Actualizar el caso necesario (si es aplicable), para lo cual __el hyperviseur debe estar en mantenimiento__. Existen dos tipos de actualizaciones:

    1. Los builds VMware (las nuevas versiones del hyperviseur):

<img src={shivaCpool_008Build} />

    2. La actualización del firmware de tu placa base (BIOS y firmware de las tarjetas filas):

<img src={shivaCpool_008Firm} />

*__Nota__:*-

- *Cloud Temple ofrece los builds para los hyperviseurs a intervalos regulares. Es importante mantener actualizados tus hyperviseurs, especialmente para aplicar correcciones de seguridad. Sin embargo, __no nos encargamos de actualizar automáticamente tus hyperviseurs__. Cloud Temple no tiene visibilidad sobre los compromisos de disponibilidad de tus workloads. Por lo tanto, te dejamos que implementes tu gestión de cambios y apliques las nuevas actualizaciones en el momento adecuado.*
- *El proceso de actualización es completamente automatizado. Debes tener al menos dos hyperviseurs en tu cluster para realizar una actualización sin interrupción del servicio.*

<!-- TODO: Añadir la página ausente. -->
<!-- - Es necesario contar con las __permisos adecuadas__ (__'Permisos de acceso al console'__, __'console.md__) para realizar las diferentes acciones.* -->

Además, puedes ver toda la configuración de restricciones de afinidad/anti-afinidad para tu cluster de hyperviseurs en la sección __'Reglas'__.

### Gestión del afinidad de sus máquinas virtuales

Las **reglas de afinidad y anti-afinidad** permiten controlar la ubicación de las máquinas virtuales en sus virtualizadores.
Estas reglas se utilizan para gestionar el uso de recursos de su **Cpool**.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o aislar las cargas de trabajo intensivas en recursos.
En un **Cpool** VMware, estas reglas se utilizan comúnmente para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de estas reglas:

- **Reglas de Afinidad**: Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo servidor físico.
Se utilizan para mejorar las prestaciones manteniendo las máquinas virtuales que comunican con frecuencia
en el mismo servidor, lo que reduce la latencia de red. Las reglas de afinidad son útiles en escenarios donde la rendimiento es crítico, como en bases de datos o aplicaciones que requieren una comunicación rápida entre los servidores.

- **Reglas de Anti-afinidad**: A la inversa, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten en el mismo servidor físico.
Son importantes para la disponibilidad y la resiliencia, por ejemplo, para evitar que las máquinas críticas caigan en caso de fallo de un servidor único.
Las reglas anti-afinidad son cruciales para las aplicaciones que requieren alta disponibilidad, como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no deseas que tus dos Actives Directory estén en el mismo virtualizador.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla, su estado de activación (__'Estado'__) y las máquinas involucradas de tu cluster de virtualizadores.

<img src={shivaCpool_006} />

*Nota: Las reglas de afinidad/anti-afinidad propuestas en la consola se refieren a las máquinas virtuales entre sí (no a reglas entre virtualizadores y máquinas virtuales).*

## Bloqueo de Copia de Seguridad

### En-tête 1

**Objeto:** Protección de datos

**Descripción:** Implementación de un sistema de copia de seguridad para garantizar la integridad y disponibilidad de los datos.

### En-tête 2

#### Planificación del Bloqueo de Copia de Seguridad

1. **Evaluación de Riesgos:** Identificación de activos críticos y posibles amenazas.
2. **Estrategia de Copia de Seguridad:** Elección de la frecuencia, método (completo o incremental) y ubicación del almacenamiento.
3. **Selección de Herramientas:** Implementación de software de gestión de copias de seguridad.
4. **Planificación de Testes:** Desarrollo de procedimientos para validar la integridad de las copias de seguridad.
5. **Capacitación del Personal:** Formación sobre el uso y mantenimiento del sistema de copia de seguridad.
6. **Documentación:** Creación de manuales detallados y políticas de gestión de copias de seguridad.

### En-tête 3

#### Implementación del Bloqueo de Copia de Seguridad

1. **Configuración del Software:** Instalación, configuración y personalización según las necesidades del entorno.
2. **Definición de Políticas de Copia de Seguridad:** Establecimiento de cronogramas, métodos de almacenamiento y procedimientos de recuperación.
3. **Integración con Sistemas Existentes:** Sincronización con sistemas de gestión de bases de datos y otros servicios críticos.
4. **Pruebas del Sistema:** Realización de pruebas de copia de seguridad completas para validar la funcionalidad.
5. **Monitoreo Continuo:** Implementación de herramientas de monitoreo para alertar sobre errores o fallas.

### En-tête 4

#### Mantenimiento y Mejora del Bloqueo de Copia de Seguridad

1. **Actualizaciones Regulares:** Mantenimiento del software y hardware para asegurar la seguridad y el rendimiento.
2. **Revisión Periódica:** Evaluación continua de las políticas y procedimientos para adaptarse a los cambios en la infraestructura o requisitos de negocio.
3. **Capacitación Continua:** Actualización del personal sobre nuevas tecnologías, amenazas y mejores prácticas.
4. **Evaluación de Riesgos:** Revisión continua de los riesgos identificados para ajustar las estrategias de copia de seguridad según sea necesario.
5. **Pruebas de Recuperación:** Realización de ensayos periódicos de recuperación de datos para validar la efectividad del plan de recuperación ante desastres.

### Crear una política de respaldo

Para crear una nueva política de respaldo, es necesario solicitarlo al soporte. El soporte está disponible a través del ícono de la ancla en la parte superior derecha de la ventana.

La creación de una nueva política de respaldo se realiza mediante:

    Nombre de tu Organización
    Nombre de un contacto junto con su correo electrónico y número de teléfono para finalizar la configuración
    Nombre del propietario
    Nombre de la política de respaldo
    Características (x días, y semanas, z meses, etc.)

<img src={shivaSupport} />

### Asignar una política de respaldo a una máquina virtual

Al asignar una SLA (Servicio de Nivel de Aceite) a una máquina virtual (VM), todos los discos asociados a esta VM heredan automáticamente la misma SLA. Posteriormente, es posible iniciar manualmente la ejecución de la copia de seguridad mediante el menú "Políticas de respaldo". En ausencia de un inicio manual, la copia de seguridad se ejecutará automáticamente según el plan configurado por la SLA.

SecNumCloud hace obligatoria la asignación de una política de respaldo a una máquina virtual antes de su arranque. En caso contrario, recibirás la siguiente notificación:

<img src="shivaVmPolitiquesBackupAssignMandatory.png" alt="Notificación de falta de asignación de política de respaldo" />

Haz clic en el menú "Políticas de respaldo" del panel de control de tu máquina virtual para visualizar la o las políticas de respaldo asignadas a ella.

Para asignar una nueva política de respaldo a la máquina virtual, haz clic en el botón "Agregar política" y selecciona la política de respaldo deseada.

<img src="shivaVmPolitiquesBackup.png" alt="Menú para agregar o modificar una política de respaldo" />

### Asociar una política de respaldo a un volumen virtual

Además de asignar una SLA directamente a un volumen virtual específico de una máquina virtual, también es posible realizar esta tarea en nivel de máquina virtual. En este caso, la máquina virtual no hereda individualmente esta SLA aplicada al volumen. Sin embargo, no se puede iniciar manualmente la ejecución de la copia de seguridad a nivel de discos, ya que esta función no está soportada por Spectrum Protect Plus.

Por otro lado, es posible excluir ciertos volúmenes de una o más políticas de respaldo (SLA) de la VM, lo que permite desasignar una o más SLA(s) en base a disco por disco. Esta metodología ofrece la flexibilidad de iniciar manualmente la ejecución de la copia de seguridad de una SLA sin afectar todos los volúmenes de la máquina virtual, permitiendo así una gestión más fina de las copias de seguridad.

Haz clic en el botón de acciones del volumen al que deseas asignar una política de respaldo. Luego, selecciona __'Políticas'__ y elige la política de respaldo deseada.

<img src={shivaVmDiscosVirtualesPoliticas} />

*Nota*: La política a agregar debe estar ubicada en una zona de disponibilidad diferente a la máquina virtual.

### Executar una política de respaldo

En el menú __'Políticas de respaldo'__ de su máquina virtual, haga clic en el botón __'Ejecutar'__ de la columna __'Acciones'__ de la política de respaldo que desee ejecutar.

<img src={shivaVmPolitiquesBackupExecute} />

Para ejecutar una política de respaldo, también puede comenzar desde la sección __'Respaldos'__ en el menú de su máquina virtual. Haga clic en el botón __'Ejecutar respaldo'__, luego seleccione la copia que desee ejecutar en el listado desplegable.

<img src={shivaVmPolitiquesBackupExecute2} />

### Eliminar una política de respaldo

En el menú __'Políticas de respaldo'__ de su máquina virtual, haga clic en el botón __'Eliminar'__ de la columna __'Acciones'__ de la política de respaldo que desee eliminar.

<img src={shivaVmPolitiquesBackupRetirer} />

__Atención: No se puede eliminar la última SLA en una máquina virtual encendida:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Eliminación de una política de respaldo: caso de una política de respaldo suspendida ("suelta")

Cuando la última recurso está asociada a una política SLA (Servicio de Nivel de Aseguramiento), el sistema detecta automáticamente esta situación. Como consecuencia, todos los trabajos relacionados con esta política SLA pasan automáticamente al estado "Suspendido" ("Suelta"). Es importante destacar que a este punto, la eliminación directa de la política SLA no es posible debido a la existencia de trabajos dependientes. Para proceder a la eliminación de la política, se deben seguir una serie de pasos:

Primero, verifique que los trabajos involucrados realmente estén en el estado "Suspendido". Una vez confirmado esto, estos trabajos pueden ser eliminados. Solo después de eliminar estos trabajos dependientes, la política SLA podrá ser eliminada definitivamente del sistema.

Un caso particular requiere atención especial: se agrega una nueva recurso a una política SLA cuyos trabajos dependientes no han sido eliminados. En este escenario, los identificadores de los trabajos se conservarán. Sin embargo, es crucial recordar que los trabajos en estado "Suspendido" no reanudarán automáticamente. Se necesitará una intervención manual para activarlos y permitir su ejecución.

Nota: Para cualquier aclaración sobre esta situación, póngase en contacto con el soporte Cloud Temple.

La consola Cloud Temple impide asignar una máquina virtual a una política suspendida:

<img src={shivaBackupHeld_001} />

Del mismo modo, no se puede iniciar una máquina virtual asociada a una política de respaldo suspendida:

<img src={shivaBackupHeld_002} />

### Restaurar una copia de seguridad

El menú "Copias de seguridad" de las máquinas virtuales te permite acceder a la lista de copias de seguridad disponibles para ellas. Para restaurar una copia de seguridad, haz clic en el botón "Restaurar" junto a la copia de seguridad que deseas restaurar.

<img src={shivaVmBackupRestaurer} />

1. **Modo producción**: El modo producción permite la recuperación tras un incidente en el sitio local desde el almacenamiento primario o un sitio de recuperación tras un incidente distante, reemplazando las imágenes de máquina original por las de recuperación. Se transfieren todas las configuraciones asociadas a la recuperación, incluyendo nombres y identificadores, y se continúan ejecutando los trabajos de copia de datos relacionados con la máquina virtual. En el modo producción, puedes optar por reemplazar el almacenamiento en la máquina virtual por un disco virtual de una copia de seguridad de máquina virtual anterior.

2. **Modo prueba**: El modo prueba crea máquinas virtuales temporales para el desarrollo, pruebas, verificación instantánea y verificación tras un incidente según un ciclo reiterable sin afectar los entornos de producción. Las máquinas de prueba ejecutan hasta que se completen los tests y verificaciones, luego se limpian. A través de la red aislada, puedes establecer un entorno seguro para probar tus trabajos sin interferir con las máquinas virtuales utilizadas en producción. Las máquinas virtuales creadas en modo prueba poseen nombres y identificadores únicos para evitar conflictos en tu entorno de producción.

3. **Modo clonado**: El modo Clonado crea copias de las máquinas virtuales para casos de uso que requieren copias permanentes o ejecutadas durante un largo período, como la exploración de datos o el duplicado de un entorno de prueba en una red aislada. Las máquinas virtuales creadas en modo clonado poseen nombres y identificadores únicos para evitar conflictos en tu entorno de producción. En modo clonado, es crucial estar atento al consumo de recursos, ya que este modo crea máquinas permanentes o a largo plazo.

**La restauración por defecto está configurada en modo "PRUEBA" para preservar la producción**, y puedes elegir el nombre de la VM restaurada:

<img src={shivaVmBackupRestaurer} />

Tenguido que si los pruebas son satisfactorias, es posible pasar una máquina virtual del modo prueba al modo producción:

<img src={shivaVmBackup_2prod} />