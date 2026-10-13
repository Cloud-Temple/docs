---
title: Novedades de productos
sidebar_position: 999
---

# Novedades de productos y evoluciones

> Este registro de cambios enumera las nuevas funcionalidades y evoluciones significativas de la plataforma Cloud Temple.
> Las correcciones de errores se incluyen a partir de la versión 4.50.0.

## v4.52.0 — 2026-10-06

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Restauración de una máquina virtual cuyos discos están distribuidos en varios datastores: elección de un datastore de destino para cada datastore de origen

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Pestaña Instantáneas: identificación del tipo de cada instantánea (manual, copia de seguridad, replicación, huérfana)
- Relocalización de una máquina virtual: posibilidad de conservar el host de origen para migrar únicamente el almacenamiento, ahora utilizable en un pool de un solo host
- Corrección de la casilla « Destruir la configuración cloud-init después del arranque », que no tenía efecto al desplegar una máquina virtual mediante plantilla

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Host maestro: retirada de las acciones de mantenimiento e indicación del camino a seguir para su eliminación (eliminación de su pool)
- Almacenamiento: puesta en mantenimiento y salida de mantenimiento de un Block Storage desde la consola

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Informes de copia de seguridad: las ejecuciones de una política se ordenan por fecha de inicio, de la más reciente a la más antigua
- Informes de copia de seguridad: diversas correcciones en la pantalla (actualización, ordenación y paginación de las ejecuciones)

### [Marketplace](/marketplace)
- Despliegue de una imagen: pre-relleno de la configuración cloud-init (user-data y configuración de red) proporcionada por la imagen, modificable antes del despliegue

## v4.51.0 — 2026-09-18

### [Consola — Organización](/console/iam/concepts)
- Adición de una columna « Tipo » (SecNumCloud / Legacy) en la lista de tenants
- El favorito de un tenant se indica ahora mediante una etiqueta « Favorito » en la lista de tenants

### [Identidad y Acceso (IAM)](/console/iam)
- Aclaración del impacto de la re-inscripción de un usuario: el modal de confirmación especifica que se le enviará un nuevo correo electrónico de inscripción

### [Soporte](/console)
- Volver a mostrar el bloque de información de soporte en modo Organización

### [Métricas](/console/metrics/concepts)
- Corrección de las leyendas de los gráficos de métricas de las máquinas virtuales

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Corrección del asistente vMotion: el botón « Siguiente » permanecía bloqueado tras un error de compatibilidad del host al volver a un paso anterior
- Envío de atajos de teclado del sistema (Alt+Tab, ⌘, Esc…) a la consola de la máquina virtual en pantalla completa (API Keyboard Lock, navegador Chromium)
- Corrección de la consola VMware (WMKS): un Alt+Tab dejaba la tecla Alt considerada como presionada por parte de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Aclaración de la advertencia al mover un disco virtual: las máquinas virtuales asociadas ya no se anuncian como suspendidas, solo algunas acciones están temporalmente no disponibles

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Detalle de un pool: visualización y gestión de Block Storage desde Compute, y de hosts desde Storage (pestañas cruzadas)

## v4.50.0 — 2026-09-10

### [Consola](/console)
- Actualización de las unidades de cuotas mostradas (GiB)

### [Consola — Organización](/console/iam/concepts)
- Visualización del seguimiento de la preparación de un tenant en su creación

### [Pedidos](/console/orders)
- Adición del pedido de eliminación de una IP pública VPC
- Adición del pedido de eliminación de una IP Private Backbone

### [VPC](/network/vpc)
- Visualización del estado de configuración y elección de IP estática en las operaciones de máquinas virtuales
- Posibilidad de elegir una red VPC y configurar una IP estática en todos los formularios que requieran configuración de red en una máquina virtual (creación, despliegue, migración, restauración, exportación)

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Adición de la columna « Fabric » en la pestaña de red de un servidor Bare Metal

## v4.49.1 — 2026-09-03

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La acción « Asociar una IP pública » de la pestaña « Tarjetas de red » está deshabilitada cuando la puerta de enlace del VPC no está activada

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- La acción « Asociar una IP pública » de la pestaña « Tarjetas de red » está deshabilitada cuando la puerta de enlace del VPC no está activada

### [VM Instances](/public_cloud/vm_instances)
- La acción « Asociar una IP pública » de la pestaña « Tarjetas de red » está deshabilitada cuando la puerta de enlace del VPC no está activada

## v4.49.0 — 2026-08-31

### [Consola](/console)
- Lanzamiento automático del tutorial de bienvenida en el primer inicio de sesión de un usuario
- Eliminación de las notificaciones de error al cargar el panel de control cuando los entornos no están aprovisionados

### [Consola — Organización](/console/iam/concepts)
- Visualización del precio de activación de un tenant en el modal de creación, en modo Organización

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Asociación y desasociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Visualización del tipo de lámina en lugar de su descripción en la « Clase » de los clústeres

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El número de vCPU propuesto para el redimensionamiento de una máquina virtual está ahora limitado por su capacidad máxima
- Asociación y desasociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Visualización del tipo de lámina en lugar de su descripción en la « Clase » de los pools

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Mención a la restauración que especifica que la máquina virtual original no se reemplaza: se crea una nueva máquina virtual con fecha

### [VM Instances](/public_cloud/vm_instances)
- Ocultación de los campos y mensaje explícito cuando no hay almacenamiento disponible, al añadir y ampliar un disco
- Asociación y desasociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC
- Posibilidad de elegir una plantilla personalizada (vCPU y RAM libres, dentro de los límites de la familia de instancia) en la creación, restauración y redimensionamiento de una VM Instance

### [Bare Metal](/iaas_bare-metal)
- Visualización del tipo de lámina en lugar de su descripción en la « Clase » de los servidores Bare Metal

### [Red](/network/network_overview)
- Reserva de IP interco: bloqueo de las direcciones de red y de difusión, e indicador « Reservada » en las IP reservadas

### [VPC](/network/vpc)
- El botón « Nuevo VPC » de la lista está ahora deshabilitado cuando se alcanza el límite de VPC

## v4.48.0 — 2026-08-13

### [Consola](/console)
- Mejora de la persistencia de la elección de idioma, ahora vinculada al perfil de usuario

### [Consola — Organización](/console/iam/concepts)
- Los productos de un tenant se agrupan ahora según si son modificables, no desactivables o no disponibles, con el motivo del bloqueo

### [Gestor de costes](/console/billing/concepts)
- La sección Gestor de costes ya no aparece en el panel de control de la Organización cuando la organización no es elegible
- Visualización de una tarjeta de error, en lugar de un coste nulo, cuando la recuperación de los consumos falla en el panel de control de la Organización
- Las líneas del plan de soporte se agrupan ahora bajo « Soporte » en el coste por tenant, en lugar de un tenant « Desconocido »

### [Pedidos](/console/orders)
- Mensaje explícito cuando ya no hay suficiente espacio disponible para un tipo de almacenamiento, al pedir una zona de disponibilidad o un pool

### [Soporte](/console)
- Las descripciones y los informes post-incidente se formatean ahora (markdown) en la página Incidentes
- Los mensajes globales de soporte se muestran ahora en modo Organización

### [VM Instances](/public_cloud/vm_instances)
- El coste estimado mostrado al crear una VM Instance es ahora mensual, sobre una base de 730 h/mes

### [VPC](/network/vpc)
- El nombre del VPC se muestra ahora delante del nombre de la red en los selectores de red
- El nombre del VPC precede ahora al nombre de la red en la pestaña Adaptadores de red de las máquinas virtuales
- Armonización de los colores de las etiquetas del tipo de VPC (compartido, dedicado) con las de las redes
- La opción VM Instances está ahora disponible desde el formulario de asociación de una IP estática
- Los adaptadores de red ya asociados a una IP estática están deshabilitados en el formulario de asociación

### [Object Storage](/storage/oss)
- Elección del estilo de direccionamiento (path-style o virtual-hosted) al generar un enlace de compartición de un archivo
- Advertencia sobre los buckets cuyo nombre no es compatible con DNS: solo es posible el acceso path-style

### [Marketplace](/marketplace)
- Solo se proponen las zonas de disponibilidad compatibles con la imagen seleccionada al desplegar desde el Marketplace
- El precio de un producto del Marketplace desplegado en VM Instance indica ahora que se calcula según la CPU, la RAM y el almacenamiento

### [Housing (Colocación)](/housing)
- Adición de los tipos de interfaz 1000BASE-SX y 10GBASE-SR a la reserva de espacio en colocación

## v4.47.0 — 2026-07-30

### [Consola](/console)
- La documentación Swagger del módulo Pedidos está ahora disponible

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Al desplegar una máquina virtual, solo se proponen ahora los elementos desplegables del catálogo (OVF y plantillas de máquina virtual)

### [VM Instances](/public_cloud/vm_instances)
- El coste estimado (por hora) se muestra ahora al crear una instancia, con el desglose por componente (vCPU, RAM, discos)

### [VPC](/network/vpc)
- Al pedir un nuevo VPC, ahora puede elegir un despliegue en un entorno dedicado (su infraestructura OpenIaaS) o en un entorno compartido (sujeto a una suscripción al producto VM Instances)

### [Object Storage](/storage/oss)
- Las mayúsculas se rechazan ahora en el nombre de un bucket, conforme a las reglas de nomenclatura

### [Marketplace](/marketplace)
- Ahora puede desplegar una VM Instance (Cloud Público) directamente desde la ficha de un producto del Marketplace

## 2026-07-27 — Bases de datos gestionadas (Preview)

### [MariaDB Gestionada](/managed_mariadb)
- El modelo de despliegue Distribuido se renombra MultiAZ
- Las plantillas de instancia llegan ahora hasta 6X-Large (32 vCPU y 128 GiB de memoria) y el almacenamiento extensible en caliente hasta 512 GiB
- Publicación de las recomendaciones de dimensionamiento que explican la calibración de los parámetros del motor, con una advertencia sobre la activación de `performance_schema` por debajo de la plantilla X-Large
- La restauración a un momento dado ya no se propone: las copias de seguridad se basan ahora en las copias de seguridad físicas diarias y las exportaciones lógicas, sin archivado continuo de los registros de transacciones

### [PostgreSQL Gestionado](/managed_postgresql)
- Nueva arquitectura basada en el operador Kubernetes CloudNative-PG y el plugin de copia de seguridad Barman Cloud
- Tres modelos de implementación: StandAlone en instancia única, Replica en tres instancias replicadas de forma asíncrona con conmutación por error automática, y Empresa en tres instancias replicadas de forma síncrona en al menos dos nodos, garantizando la durabilidad sin bloqueo en caso de indisponibilidad de un nodo
- Implementación declarativa mediante recursos personalizados de Kubernetes, utilizable vía Terraform o Helm, y exportación nativa de métricas a Prometheus

## v4.46.0 — 2026-07-24

### [Consola — Organización](/console/iam/concepts)
- Ahora puede crear un tenant directamente desde la página Tenants, seleccionando los productos asociados

### [Consola — Actividades](/console)
- Los registros de actividad ahora se pueden filtrar por módulo

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La dirección IP pública ahora se muestra en la lista de interfaces de red de una máquina virtual conectada a un VPC
- Una pestaña « Salud » está ahora disponible en el detalle de una máquina virtual, accesible desde la lista

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Ahora puede solicitar una replicación VMware entre zonas de disponibilidad

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- La lista de interfaces de red de una máquina virtual conectada a un VPC ahora muestra la dirección IP pública
- Una pestaña « Salud » está ahora disponible en el detalle de una máquina virtual abierto desde la lista

### [Instancias VM](/public_cloud/vm_instances)
- La dirección IP pública ahora se muestra en la lista de adaptadores de red de una instancia conectada a un VPC
- Una pestaña « Salud » está ahora disponible en el detalle de una instancia, accesible desde la lista

### [Housing (Colocación)](/housing)
- Los pedidos de Colocación están ahora disponibles: reserva de espacio, instalación y desmontaje de equipos
- Los pedidos de intervención de Colocación están ahora disponibles: asistencia técnica y smart hands
- Los pedidos de cableado y descableado de Colocación (CPE) están ahora disponibles
- Los pedidos de Colocación no soportados por la consola están ahora claramente señalados, con una invitación a contactar al soporte

## v4.45.5 — 2026-07-23

### [Instancias VM](/public_cloud/vm_instances)
- La creación de una instancia se basa ahora en la selección de una imagen del sistema, que reemplaza a los modelos

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al configurar los núcleos por socket de una máquina virtual OpenIaaS, la topología del procesador (número de sockets y núcleos por socket) se muestra ahora explícitamente

### [LLMaaS](/llmaas)
- El monto mínimo de crédito LLMaaS cambia; consulte el [catálogo de tarifas oficial de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

## v4.45.3 — 2026-07-21

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Al implementar una máquina virtual, un mensaje « Ningún modelo disponible » se muestra ahora cuando el catálogo está vacío

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al implementar una máquina virtual, un mensaje « Ningún modelo disponible » se muestra ahora cuando el catálogo está vacío

## v4.45.2 — 2026-07-17

### [Consola](/console)
- Mejoras técnicas menores

## v4.45.0 — 2026-07-10

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante una operación bloqueante, las máquinas virtuales muestran ahora un estado explícito: copia de seguridad, instantánea o restauración en curso
- La edición de la CPU se adapta ahora a la opción de agregar CPU en caliente (CPU hot add) y al estado de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Durante una operación bloqueante, las máquinas virtuales muestran ahora un estado explícito (copia de seguridad, instantánea o restauración en curso)
- El detalle de una máquina virtual presenta ahora un resumen de uso (CPU, RAM, almacenamiento)

### [Instancias VM](/public_cloud/vm_instances)
- Las instancias muestran ahora un estado explícito (copia de seguridad, instantánea o restauración en curso) durante una operación bloqueante
- Las métricas de uso instantáneo (CPU, RAM, almacenamiento) se muestran ahora para cada instancia
- La unicidad del nombre se controla ahora tanto en la creación como en la restauración de una instancia

### [Red](/network/network_overview)
- Durante un pedido que incluye una etapa de propagación, las nuevas redes solo se crean en la validación final del pedido

## v4.44.2 — 2026-07-03

### [Instancias VM](/public_cloud/vm_instances)
- El tipo de red (backbone privado) se muestra ahora en los adaptadores de red de una instancia, incluso sin la funcionalidad VPC

## v4.44.1 — 2026-07-02

### [Consola](/console)
- Mejoras técnicas menores

## v4.44.0 — 2026-07-02

### [Pedidos](/console/orders)
- Las acciones de aprovisionamiento de infraestructura ahora tienen en cuenta los roles de negocio (cálculo, red, VPC, bare metal…) además de los derechos de pedido

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- El seguimiento del envío de archivos ISO y OVF ha sido mejorado y ahora es posible cancelar un envío en curso

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El seguimiento del envío de archivos ISO y XVA ha sido mejorado y ahora es posible cancelar un envío en curso

### [Instancias VM](/public_cloud/vm_instances)
- Los tamaños de disco ya no aceptan valores decimales, tanto en la creación de una instancia como en la adición o ampliación de un disco
- Los indicadores de procesamiento de las instancias y sus recursos se restablecen ahora correctamente después de actualizar la página

### [VPC](/network/vpc)
- Desde la tarjeta de red de una máquina virtual vinculada a una red VPC, accede ahora directamente al VPC concernido (VMware, OpenIaaS e Instancias VM)
- Algunos pedidos VPC ahora se pueden pasar en paralelo: adición de una pasarela durante la creación de una red privada (y viceversa), y varias eliminaciones simultáneas de redes privadas

## 2026-06-30 — API Métricas

### [Métricas](/console/metrics/concepts)
- Un token de acceso puede ahora verificar la disponibilidad del servicio de métricas a través del punto de API `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Consola](/console)
- Los selectores de redes distinguen ahora visualmente las redes VPC y Backbone privado
- Un tutorial interactivo está ahora disponible en la página Usuarios

### [Consola — Actividades](/console)
- Ahora puede consultar el detalle de una actividad desplegando su fila en las listas Recientes y Archivadas
- Cada actividad tiene ahora una página de detalle dedicada, accesible por enlace directo
- El detalle de una actividad es ahora accesible desde las notificaciones de éxito y fracaso
- Ahora puede consultar el JSON completo de una actividad, copiarlo o descargarlo
- La lista de actividades archivadas ahora se puede ordenar por fecha de creación

### [Pedidos](/console/orders)
- La visualización del progreso de un pedido ha sido rediseñada

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- El detalle de una máquina virtual se muestra ahora en una nueva vista
- Durante la modificación en caliente, la coherencia entre CPU y núcleos por socket se controla: se muestran advertencias y los valores inválidos no se aceptan

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Ahora puede solicitar la eliminación de un entorno IaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Una nueva vista de detalle está disponible para las máquinas virtuales
- Ahora puede filtrar la lista de máquinas virtuales por zona de disponibilidad (AZ)

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- La página de un Storage Repository muestra ahora la fecha de toma de la instantánea de un disco

### [Instancias VM](/public_cloud/vm_instances)
- El detalle de una instancia se muestra en una nueva vista
- El botón « Iniciar una copia de seguridad ahora » está ahora desactivado cuando la copia de seguridad no está disponible

### [VPC](/network/vpc)
- La descripción de la dirección IP pública se muestra ahora al asociarla a una red privada

### [Almacenamiento de Objetos](/storage/oss)
- Ahora puede agregar una descripción a las direcciones IP autorizadas (whitelist) de un bucket

## v4.42.0 — 2026-06-22

### [Consola](/console)
- La sección « Privacidad » ha sido actualizada

### [Almacenamiento de Objetos](/storage/oss)
- La disponibilidad del certificado TLS wildcard para el acceso S3 en estilo host está ahora indicada
- Ahora puede cargar un archivo en S3 desde una URL pre-firmada
- Ahora puede activar el versionado en un bucket
- Ahora puede gestionar las versiones de un archivo

## v4.41.1 — 2026-06-11

### [Pedidos](/console/orders)
- El máximo disponible durante el pedido de un Block Storage ha sido actualizado

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Los mensajes relativos a los stocks son ahora más precisos durante el pedido de hipervisores o el aumento de RAM de un cluster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al agregar un disco existente a una máquina virtual, el UUID del disco se muestra ahora cuando varios discos llevan el mismo nombre

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Una advertencia se muestra ahora al solicitar la actualización del host maestro de un pool

### [VPC](/network/vpc)
- El pedido de un VPC requiere ahora que una zona de disponibilidad OpenIaaS esté desplegada

## 2026-06-06 — Servidor MCP de la Consola

- Recurso de ayuda para la autenticación describiendo la obtención de un token de acceso personal y el formato de encabezado esperado; los errores de autenticación indican ahora la causa y el procedimiento a seguir
- Cambio de configuración con impacto: la URL de la API indicada en la configuración del servidor debe ahora incluir el segmento `/api`, a actualizar antes del despliegue de esta versión bajo pena de errores 404. La URL se controla al inicio y la infraestructura de claves públicas privada es soportada

## 2026-06-05 — Servidor MCP de la Consola

- Consulta del nombre y la versión del servidor desplegado

## v4.40.0 — 2026-06-02

### [Consola](/console)
- Un recorrido de bienvenida interactivo está ahora disponible

### [Consola — Organización](/console/iam/concepts)
- El gestor de costos está ahora disponible en la vista organización
- La vista organización beneficia ahora de una visualización dedicada

### [Pedidos](/console/orders)
- La etapa de red ya no aparece en los pedidos cuando solo el producto VPC está activado

### [Soporte](/console)
- Los planes y los contactos de soporte han sido actualizados

### [Tickets de soporte](/console)
- Las funcionalidades de gestión han sido retiradas de los tickets de soporte

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Las funcionalidades de la biblioteca de contenido público han sido retiradas

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El valor por defecto de la etapa CloudInit ha sido actualizado para los despliegues OpenIaaS desde el Marketplace
- El envío de caracteres especiales desde el portapapeles de la consola de una máquina virtual ha sido mejorado

### [Red](/network/network_overview)
- Ahora puede eliminar la descripción de una dirección IP
- Ahora puede rellenar el campo `description` durante la creación de una red virtual
- Ahora puede rellenar el campo `description` durante la modificación de una red virtual

### [VPC](/network/vpc)
- La descripción de una IP flotante VPC se muestra ahora
- Ahora puedes modificar la descripción de una IP flotante VPC

## 2026-05-25 — Servidor MCP de la Consola

- Cada rechazo de permiso indica ahora el producto afectado y el nombre exacto del permiso que debe activarse en el token de acceso personal

## 2026-05-24 — Servidor MCP de la Consola

- Gestión del soporte desde un agente: lista y detalle de los tickets, creación, comentario, cierre, consulta de mantenimientos planificados y sus categorías, incidentes del inquilino e incidentes de la plataforma
- Opción de destrucción tras el inicio en el despliegue desde el Marketplace
- Recorrido guiado de despliegue de una máquina virtual Linux
- Recursos consultables directamente: glosario de términos IaaS OpenSource, topología de un pool que reúne hosts, repositorios de almacenamiento, redes e indicadores en una sola lectura, y catálogo Marketplace filtrado en IaaS OpenSource

## 2026-05-23 — Servidor MCP de la Consola

- Recorrido del catálogo Marketplace con filtros, y fichas técnicas IaaS OpenSource (XVA) y VMware (OVF) detallando procesadores, memoria, discos y nombres exactos de las interfaces de red
- Despliegue de una máquina virtual IaaS OpenSource desde un elemento del catálogo, idempotente por nombre
- Control del encendido de las máquinas virtuales IaaS OpenSource — encendido, apagado, reinicio, pausa, suspensión y reanudación — idempotente por estado
- Seguimiento de las operaciones largas a través de las actividades

## 2026-05-22 — Servidor MCP de la Consola

- Consulta ampliada de IaaS OpenSource: pools, hosts, máquinas virtuales, snapshots, adaptadores de red con detección de direcciones MAC duplicadas, discos virtuales y estado de replicación, todas estas operaciones siendo de solo lectura
- Filtros aplicables en el lado del servidor sobre todas estas listas

## v4.39.2 — 2026-05-22

### [Red](/network/network_overview)
- Ahora puedes eliminar el registro PTR de una dirección IP pública o de una dirección IP de interconexión

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Se han modificado las reglas de nomenclatura de las snapshots de máquina virtual

### [Bare Metal](/iaas_bare-metal)
- Ahora puedes modificar la descripción de una lámina

### [Red](/network/network_overview)
- Ahora puedes modificar el registro PTR de una dirección IP de interconexión

## v4.39.0 — 2026-04-23

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los discos existentes se muestran ahora al añadir un nuevo disco
- Al mover (vMotion) una máquina virtual en modo «solo recurso de cálculo», ahora es posible elegir un cluster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Los discos existentes se muestran ahora al añadir un nuevo disco

### [VM Instances](/public_cloud/vm_instances)
- La lista de VM Instances ahora se puede exportar en formato CSV
- Se ha revisado la visualización de la frecuencia de una política de copia de seguridad

### [Bare Metal](/iaas_bare-metal)
- La selección de las redes es ahora obligatoria al propagar una red sobre un Bare Metal

## 2026-04-20 — Bases de datos gestionadas (Preview)

### [MariaDB Gestionada](/managed_mariadb)
- Publicación de los parámetros del motor asociados a cada plantilla de instancia: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` y `table_open_cache`
- Revisión de las plantillas de instancia: el límite se reduce a 3X-Large (8 vCPU y 32 GiB de memoria) y el almacenamiento máximo escalable en caliente pasa de 512 GiB a 128 GiB

### [PostgreSQL Gestionada](/managed_postgresql)
- Publicación de los parámetros del motor asociados a cada plantilla de instancia: `shared_buffers`, `effective_cache_size`, `work_mem` y `max_connections`
- Revisión de las plantillas de instancia: el límite se reduce a 3X-Large (8 vCPU y 32 GiB de memoria) y el almacenamiento máximo escalable en caliente pasa de 512 GiB a 128 GiB

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- Las redes propuestas se filtran ahora en la creación de una instancia así como en la modificación de un adaptador de red

## v4.38.0 — 2026-04-17

### [Identidad & Acceso (IAM)](/console/iam)
- Seis nuevos permisos están disponibles: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` y `public_cloud_vm_instances_console_access`
- El nombre del producto afectado aparece ahora al principio de la descripción de cada permiso

### [Gestor de costes](/console/billing/concepts)
- La interfaz del gestor de costes ha sido mejorada
- La unidad mostrada en los gráficos de consumo se ha actualizado

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Al desplegar una máquina virtual, la etapa de selección de una imagen del Marketplace se ha revisado

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Ahora puedes cambiar la visualización de la página del catálogo entre cuadrícula y tabla
- La etapa de selección de una imagen del Marketplace durante el despliegue de una máquina virtual se ha actualizado

### [VM Instances](/public_cloud/vm_instances)
- El panel de control muestra ahora el uso de las cuotas de VM Instances
- Una nueva página presenta la lista de VM Instances
- Ahora puedes crear una nueva instancia
- Ahora puedes consultar y gestionar los discos, los adaptadores de red y las snapshots de una instancia
- Ahora puedes actualizar las capacidades de una instancia y modificar su estado
- Ahora puedes acceder a la consola de una instancia

### [LLMaaS](/llmaas)
- La visualización de los precios en la vista de consumo y el formulario de recarga de crédito se han actualizado

## 2026-04-15 — Bases de datos gestionadas (Preview)

### [MariaDB Gestionada](/managed_mariadb)
- Apertura en Preview de MariaDB Gestionada: modelos StandAlone y Distributed en cluster de tres nodos detrás de un proxy, almacenamiento replicado en tres zonas de disponibilidad y compromiso de disponibilidad del 99,9 %

### [PostgreSQL Gestionada](/managed_postgresql)
- Apertura en Preview de PostgreSQL Gestionada: modelos StandAlone y Distributed en cluster de tres nodos detrás de un proxy, replicación síncrona multi-zona sin pérdida de datos y restauración a un instante dado

## v4.37.0 — 2026-04-02

### [Gestor de costes](/console/billing/concepts)
- Adición del importe previsto en la página de consumo para el gráfico y la tendencia
- Mejora visual cuando hay un error o demasiados pocos datos sobre el consumo del mes en curso

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora del formulario para desplegar una máquina virtual desde un elemento del catálogo
- Adición de la posibilidad de cambiar el tipo de visualización (cuadrícula o tabla) desde la página del catálogo

## v4.36.0 — 2026-03-27

### [Consola](/console)
- Actualización de los gráficos de métricas y consumo

### [Gestor de costes](/console/billing/concepts)
- Adición de la página del gestor de costes
- Posibilidad de visualizar los costes del mes en curso
- Posibilidad de visualizar los costes en un intervalo de fechas y comparar las tendencias

### [Pedidos](/console/orders)
- Bloqueo de la desprovisionación de un cluster de hipervisores cuando un cluster de almacenamiento está adjunto

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de filtros y ordenaciones en la lista de discos desde los detalles de un Block Storage

### [VPC](/network/vpc)
- Mejora de la interfaz en la carga de datos en los formularios

## v4.35.4 — 2026-03-18

### [Consola](/console)
- Mejora de la reconexión a los websockets

### [Soporte](/console)
- Adición de una solución de respaldo para la creación de un ticket de soporte cuando los websockets están desconectados

## v4.35.3 — 2026-03-17

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Actualización de la recuperación de discos durante la carga de réplicas desde la pestaña Replicación

## v4.35.0 — 2026-03-11

### [Pedidos](/console/orders)
- Adición del comando de eliminación de un mapeo cpool/spool
- Adición del comando de desprovisionación de red privada VPC
- Modificaciones en el comando de desprovisionamiento de un volumen Bare Metal, es posible solicitar la eliminación desde la lista de volúmenes
- Adición del comando de eliminación de mapeo de volumen Bare Metal
- Adición del comando de desprovisionamiento de VPC
- Bloqueo de la desprovisionación de un datastore si es el último de un cluster de datastores

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de añadir un límite de RAM en una máquina virtual

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Actualización del multi vmotion de VMware para permitir mover las VMs de un cluster a otro

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de la posibilidad de actualizar un host
- Visualización de la información de las actualizaciones de un host

### [Red](/network/network_overview)
- Desactivación del botón de eliminación de propagación de red cuando no hay ninguna propagación entregada

### [LLMaaS](/llmaas)
- Visualización del consumo agrupado por tipo de tokens

## v4.34.0 — 2026-02-18

### [Consola](/console)
- Actualización mayor del motor de visualización de la aplicación
- Los menús VMware y OpenIaaS no se muestran cuando solo está activado el módulo de métricas

### [Métricas](/console/metrics/concepts)
- Posibilidad de exportar en CSV desde las páginas Métricas VMware y OpenIaaS

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante un desplazamiento de máquina virtual, no es posible seleccionar el mismo host de destino que el host actual de la máquina virtual
- Adición del botón 'Nuevo catálogo' en la página Catálogo VMware

## 2026-02-04 — Servidor MCP de la Consola

- Consulta de los modelos de máquinas virtuales, las redes, los hosts y los repositorios de almacenamiento IaaS OpenSource

## 2026-02-03 — Servidor MCP de la Consola

- Puesta a disposición del servidor MCP (Model Context Protocol) de la Consola, autenticado por token de acceso personal
- Consulta y control de las máquinas virtuales VMware desde un agente: lista, detalle, centros de datos virtuales, encendido y apagado

## v4.33.0 — 2026-01-21

### [Pedidos](/console/orders)
- Adición del comando de eliminación de una propagación de red en OpenIaaS

### [Métricas](/console/metrics/concepts)
- Adición de filtros para las páginas de métricas VMWare y OpenIaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la página de métricas 'Máquinas Virtuales'
- Adición de la página de detalles de las métricas para cada VM

## v4.32.0 — 2026-01-14

### [Soporte](/console)
- Actualización de la ventana modal de cierre de un ticket de soporte

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Al asignar una política de copia de seguridad a un disco, ahora se propone inventariar el disco si no es reconocido por la solución de copia de seguridad

### [Bare Metal](/iaas_bare-metal)
- La eliminación de un volumen BFS en un Bare Metal está ahora bloqueada, el volumen se eliminará con la eliminación del Bare Metal
- Al solicitar un Bare Metal, el primer volumen se renombra ahora como 'volumen BFS'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Actualización de las explicaciones de los tooltips sobre las opciones disponibles durante la restauración de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Las snapshots vinculadas a las políticas de copias de seguridad son ahora visibles
- Visualización del Host vinculado a la ubicación de almacenamiento de un ISO durante la carga y desde la página del catálogo

### [Object Storage](/storage/oss)
- Visualización de una tarjeta explicativa desde la pestaña MPU incompletos cuando la IP de la Consola no está autorizada, impidiendo la visualización de la pestaña

### [Marketplace](/marketplace)
- Visualización de la tarjeta de error al acceder a una página del marketplace que no existe

## v4.30.1 — 2025-12-16

### [Console](/console)
- Mejora de la visualización de errores vacíos mostrando por defecto el estado HTTP devuelto

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Posibilidad de asociar una IP estática a una dirección MAC personalizada

### [LLMaaS](/llmaas)
- En las métricas de consumo, filtrado de las series que tienen valores a 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Mejora de la sincronización de las acciones en las páginas de VPCs
- Adición de la asociación de una IP estática a una IP pública desde la lista de IPs estáticas

### [Almacenamiento](/storage/oss)
- Adición de los MPU incompletos desde la página de un bucket
- Posibilidad de eliminar un MPU incompleto

## v4.28.0 — 2025-11-21

### [Console](/console)
- Adición de la posibilidad de mostrar mensajes informativos globales visibles en toda la aplicación

### [Pedidos](/console/orders)
- Posibilidad de solicitar un añadido de crédito LLMaaS para el tenant
- Posibilidad de solicitar un VPC
- Posibilidad de solicitar una red privada en un VPC
- Posibilidad de solicitar una IP pública para el producto VPC
- Posibilidad de activar la pasarela para un VPC
- Adición de la posibilidad de solicitar la eliminación de un tenant

### [Métricas](/console/metrics/concepts)
- Mejora de la visualización de las herramientas emergentes (tooltips) en los gráficos de métricas: ahora es posible hacer clic en un punto para fijar la herramienta emergente y consultar todos los datos

### [Red](/network/network_overview)
- Agrupación de las páginas Redes e Internet bajo un único producto: Backbone privado
- Adición de la gestión del registro PTR durante la modificación de una IP pública
- Bloqueo del intercambio para ciertos tipos de redes

### [VPC](/network/vpc)
- Integración del producto VPC
- Adición de una página que lista los VPC
- Adición de una página de Detalles de un VPC
- Posibilidad de gestionar las redes privadas, las IPs públicas y la pasarela de un VPC
- Posibilidad de asociar una IP estática de una red privada VPC a un adaptador de red VMware o OpenIaaS
- Posibilidad de asociar una IP estática con una IP pública de un VPC

### [LLMaaS](/llmaas)
- Adición de una pestaña Facturación en la página LLMaaS para los tenants con el prepago activado
- Visualización del crédito restante para los tenants en modo prepago, en el panel de control y desde la pestaña Facturación

## v4.27.0 — 2025-11-12

### [Pedidos](/console/orders)
- Adición de una verificación sobre el stock disponible durante la solicitud de recursos
- Adición de un filtro por tipo de pedido y por producto en la lista de pedidos

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora de la consola de las máquinas virtuales. Mejor gestión del teclado y adición de un portapapeles

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Adición de una alerta en el panel de control para los VSnap de copia de seguridad SPP con una ocupación demasiado alta

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Mejora de la consola de las máquinas virtuales. Mejor gestión del teclado y adición de un portapapeles

### [Marketplace](/marketplace)
- Adición de la posibilidad de mostrar los detalles técnicos de una imagen

## v4.26.5 — 2025-11-04

### [Console](/console)
- Mejora del tamaño de los gráficos del panel de control durante el redimensionamiento de la ventana

## v4.26.3 — 2025-10-31

### [Métricas](/console/metrics/concepts)
- Modificación del nombre de las exportaciones de métricas presentadas en los gráficos

## v4.26.0 — 2025-10-22

### [Console](/console)
- Adición de un botón para copiar el UUID del perímetro actual desde el perfil de usuario
- Rediseño completo del Panel de control
- Adición de una reconexión automática al seguimiento de actividades cuando la conexión se interrumpe

### [Pedidos](/console/orders)
- Actualización de los formularios de pedido para añadirlos a las diferentes páginas concernidas (ejemplo nuevo Datastore desde la página Almacenamiento)

### [Soporte](/console)
- Adición de la dirección email de la persona que cerró el ticket en la valoración del ticket de soporte

### [Métricas](/console/metrics/concepts)
- Rediseño de la recuperación de las métricas VMware, la URL de la página es ahora /iaas/metrics
- Adición de una pestaña de métricas de infraestructura VMware en el Cálculo
- Adición de una pestaña de métricas de infraestructura VMware en el Almacenamiento
- Adición de una página de métrica para OpenIaaS
- Adición de una pestaña de métricas de infraestructura OpenIaaS en el Cálculo
- Adición de una pestaña de métricas de infraestructura OpenIaaS en el Almacenamiento

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de las nuevas claves extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Bloqueo de la selección de un hostcluster sin host activo
- Durante la creación de una máquina virtual VMware, la elección del Vcenter se realiza ahora en función de la zona de disponibilidad seleccionada
- Adición de límites en los nombres y descripciones durante la carga de un archivo en VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Durante la adición de un disco OpenIaaS, los almacenes que no pertenecen al Pool de la máquina virtual se filtran ahora
- Durante una instantánea (snapshot), la opción para tomar la memoria se desmarca por defecto ahora

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Adición de la posibilidad de ejecutar una copia de seguridad desde la pestaña copias de seguridad de una máquina virtual OpenIaaS

### [Red](/network/network_overview)
- Eliminación de la restricción que impedía la selección de varios tipos de redes en la página de redes virtuales

### [Object Storage](/storage/oss)
- Optimización de la recuperación de los archivos de un bucket

### [PaaS OpenShift](/paas_openshift)
- Adición de una página que lista los clústers OpenShift
- Adición de una página de detalles de un clúster OpenShift

### [Marketplace](/marketplace)
- Adición de un filtro por UUID y posibilidad de copiar el UUID de un elemento

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Actualización del uso de la configuración avanzada y de las propiedades OVF durante el despliegue de una máquina virtual VMware

## v4.24.0 — 2025-09-24

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de desplegar una imagen de máquina virtual desde la lista de máquinas virtuales

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de desplegar una imagen de máquina virtual desde la lista de máquinas virtuales

### [Red](/network/network_overview)
- Adición de una validación para bloquear la eliminación del intercambio de una red si la red se propaga en otro Tenant

### [Marketplace](/marketplace)
- Adición del producto Marketplace
- Adición de una página que lista las soluciones disponibles en el catálogo
- Adición de una página para consultar los detalles de una solución
- Posibilidad de desplegar una imagen de máquina virtual en un entorno OpenIaaS o VMware desde los detalles de una solución
- Posibilidad de contactar a un socio para una solución de servicios gestionados

## v4.23.0 — 2025-09-12

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición del soporte de 4 nuevos valores extra-configs

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- No mostrar la alerta HA en las VMs concernidas cuando la ISO local no está montada
- Durante la adición o el redimensionamiento de un disco, indicar si el SR vinculado se utiliza para una configuración de replicación

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Adición del nombre de la AZ en el informe de copia de seguridad

### [Object Storage](/storage/oss)
- Actualización de la información concerniente al ciclo de vida de un bucket

### [LLMaaS](/llmaas)
- Adición del producto LLMaaS
- Adición de la lista de modelos disponibles
- Adición de la lista de claves API con posibilidad de crearlas
- Adición del consumo por modelos y por claves
- Adición de los detalles de un modelo
- Posibilidad de probar un modelo

## v4.22.1 — 2025-09-10

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Modificación de las alertas concernientes a la configuración del formato de disco elegido, durante un VMotion que incluye el almacenamiento

## v4.22.0 — 2025-09-02

### [Pedidos](/console/orders)
- Adición del pedido de una eliminación de propagación de red desde la página de todos los pedidos, todos los pedidos disponibles son ahora accesibles desde esta página

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Actualización de las condiciones sobre el cambio del formato de disco durante el desplazamiento de una máquina virtual y adición de información sobre el formato del disco actual durante una configuración por disco

## v4.21.0 — 2025-08-22

### [Console](/console)
- Actualización de la visualización cuando no se crean/provisionan datos o cuando ocurre un error durante la obtención de información.

### [Soporte](/console)
- Apertura de los modales de soporte con el servicio asociado preseleccionado
- Adición de una insignia en el menú y la barra de navegación cuando un ticket de soporte requiere una respuesta

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de la posibilidad de exportar en CSV la lista de réplicas VMware
- Mejora del control deslizante de selección de RAM en algunos comandos
- Adición de la gestión de las opciones Static differed and immediate para el vMotion

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Bloqueo de la eliminación de un clúster no vacío o con hosts/datastores no en mantenimiento

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la posibilidad de exportar en CSV la lista de réplicas OpenIaaS y de las políticas asociadas
- Adición de precisiones sobre las herramientas utilizadas por las máquinas virtuales (pvDrivers, managementAgent y tools)
- Adición de verificaciones para la alta disponibilidad (HA)

### [Red](/network/network_overview)
- Modificación de la selección de una dirección IPv4 con una lista disponible

## v4.20.0 — 2025-07-29

### [Pedidos](/console/orders)
- Adición de información concerniente a los stocks limitados y agotados respecto a los recursos de cálculo durante la solicitud de una nueva zona de disponibilidad

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de una opción VMware Tools para sincronizar la hora con el host
- Actualización de las condiciones sobre el cifrado de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Eliminación de la información de última ejecución de las políticas de replicación que causan lentitud
- Gestión del TX checksumming para los adaptadores de red
- Adición de un aviso sobre la replicación OpenIaaS si el número de AZ es inferior a 2
- Adición de la alta disponibilidad (HA) para los pools y máquinas virtuales

## v4.19.0 — 2025-07-24

### [Pedidos](/console/orders)
- Actualización del pedido de IPs públicas con la posibilidad de solicitar un prefijo IPv6
- Actualización de la visualización de los pedidos disponibles cuando no hay ningún entorno provisionado

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un filtro de replicación en la lista de máquinas virtuales
- Actualización del modal de creación de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un filtro de replicación en la lista de máquinas virtuales

### [Red](/network/network_overview)
- Actualización de la página Internet con la adición de la gestión de las IPv6

## v4.18.0 — 2025-07-15

### [Console](/console)
- Actualización de la visualización cuando no se crean/provisionan datos o cuando ocurre un error durante la obtención de información.

### [Pedidos](/console/orders)
- Actualización de las etapas de internet durante la solicitud de una nueva zona de disponibilidad o de un nuevo pool

### [Soporte](/console)
- Adición de un servicio de seguridad para cada producto durante la creación de un ticket de soporte

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un enlace de una ISO montada en un controlador al elemento correspondiente en el catálogo

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una página de Replicación OpenIaaS con la lista de réplicas y las políticas de replicación
- Posibilidad de añadir y eliminar una configuración de replicación a una máquina virtual OpenIaaS
- Posibilidad de crear y eliminar una política de replicación
- Posibilidad de restaurar una réplica
- Posibilidad de exportar las máquinas virtuales en formato CSV.

## v4.17.0 — 2025-06-20

### [Comandos](/console/orders)
- Posibilidad de pedir un Pool OpenIaaS
- Posibilidad de pedir la asociación de un volumen existente a un Bare Metal existente desde la página de un Bare Metal, desde la página de un volumen y desde la página de los comandos

### [Soporte](/console)
- Posibilidad de eliminar un archivo en un ticket de soporte
- La descripción en la satisfacción al cierre de un ticket es ahora opcional

## v4.16.0 — 2025-06-04

### [Consola](/console)
- Adición de las traducciones inglesas en la página de informes de consumo del menú de comandos

### [Comandos](/console/orders)
- Posibilidad de pedir el aumento de tamaño de un volumen bare metal
- Posibilidad de pedir el aumento de tamaño de un Block Storage OpenIaaS

### [Soporte](/console)
- Rediseño de la creación de un ticket de soporte
- Interpretación del markdown en un ticket de soporte y actualización del orden de visualización de los comentarios
- Adición de un feedback al cerrar un ticket de soporte
- Actualización de la visualización de los pictogramas según el impacto de un incidente global

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de una opción para conservar la configuración de una máquina virtual durante una restauración en Producción en el clúster original

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un mensaje de advertencia en caso de falta de espacio en disco en un Block Storage (90% utilizado) y advertencia durante los comandos

### [Object Storage](/storage/oss)
- Adición de la descripción de los roles S3 al asignarlos a un bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Visualización de un error cuando una red está mal configurada en un adaptador de red de una máquina virtual, impidiendo también el arranque de la máquina virtual

## v4.15.0 — 2025-05-13

### [Consola](/console)
- Ajuste de las unidades mostradas en los recursos de infraestructura: GiB (Gibibyte) en lugar de GB (Gigabyte)

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de mover un disco OpenIaaS
- Posibilidad de conectar y desconectar un disco OpenIaaS
- Visualización del estado conectado/desconectado de un disco
- Posibilidad de copiar el UUID de un disco, red virtual o snapshot
- Posibilidad de elegir el nombre de una máquina virtual durante el despliegue de un archivo XVA
- Adición de la posibilidad de asignar una política de copia de seguridad al iniciar una máquina virtual si esta no tiene ninguna.

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de acciones disponibles en un disco desde un Block Storage

### [Bare Metal](/iaas_bare-metal)
- Adición de las direcciones MAC en la tabla de interfaces de un Bare Metal
- Adición de una página sobre los detalles de un volumen Bare Metal

## v4.14.0 — 2025-04-28

### [Consola](/console)
- Posibilidad de anclar páginas en el menú
- Actualización de la renderización de las documentaciones API

### [Comandos](/console/orders)
- Posibilidad de pedir la eliminación de un Block Storage OpenIaaS
- Posibilidad de pedir la adición de un Block Storage a un Pool OpenIaaS
- Posibilidad de pedir la eliminación de un Host OpenIaaS
- Adición de la información del producto concernido en la lista de comandos
- Posibilidad de pedir la adición de un Host a un pool OpenIaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de poner un Host en mantenimiento
- Posibilidad de editar la descripción de un modelo
- Posibilidad de elegir un Host al arrancar una máquina virtual
- Adición de una regla de unicidad sobre el nombre de las máquinas virtuales OpenIaaS

## v4.13.0 — 2025-04-08

### [Consola](/console)
- Adición de estadísticas e información de contacto en la página de Soporte

### [Comandos](/console/orders)
- Rediseño de la visualización de los detalles de un comando
- Rediseño de la visualización de las opciones de comandos
- Actualización de la visualización para pedir el primer baremetal cuando no hay ninguno
- Actualización del comando de un Bare Metal con la selección de la propagación de las redes en las interfaces del Bare Metal
- Posibilidad de propagar un VLAN en un Bare Metal
- Posibilidad de añadir un volumen a un baremetal
- Posibilidad de desaprovisionar un volumen de un Bare Metal
- Posibilidad de desaprovisionar un Bare Metal

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un botón copiar UUID en las redes y catálogos VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un botón copiar UUID en las redes y catálogos OpenIaaS
- Adición de un botón copiar UUID en un Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Adición de la visualización de las interfaces de red y las redes propagadas en un baremetal
- Añadir las acciones encender, reiniciar y apagar un baremetal

### [Red](/network/network_overview)
- Posibilidad de visualizar las propagaciones en un Bare Metal de una red

## v4.12.0 — 2025-03-25

### [Consola](/console)
- Posibilidad de eliminar una IP whitelist desde la página de acceso

### Etiquetas
- Adición de las etiquetas en las máquinas virtuales OpenIaaS

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Actualización de la recuperación de las recomendaciones API sobre las reglas de afinidad/anti-afinidad de un HostCluster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Mostrar la importación de un XVA OpenIaaS en la lista de descargas
- Posibilidad de adjuntar un disco existente a una máquina virtual
- Posibilidad de desadjuntar un disco existente de una máquina virtual

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Actualización de la visualización de los discos de un Block Storage OpenIaaS

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Actualización del mensaje de error al acceder a los archivos de un bucket Object Storage

## v4.11.1 — 2025-03-12

### [Comandos](/console/orders)
- Actualización de los nombres de las zonas de disponibilidad durante un comando
- Modificación del mínimo de datastore durante el comando de un datastoreCluster

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Cuando el campo label de los hostCluster y datastoreCluster se modifica a vacío, el nombre técnico se aplicará por defecto

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Cuando el campo label de los pools se modifica a vacío, el nombre técnico se aplicará por defecto
- Adición de un globo informativo en la página catálogo y durante la importación ISO para indicar que el XVA es compatible durante la creación de una máquina virtual

## v4.11.0 — 2025-03-10

### [Comandos](/console/orders)
- Actualización de los tipos de redes permitidos durante la creación de una AZ
- Actualización de los recursos mínimos a aprovisionar durante el comando de una nueva zona de disponibilidad

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Visualización del nombre de la máquina virtual en la pestaña de la consola para VMware

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Adición de la gestión de las etiquetas en los datastore cluster y host cluster VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Permitir el despliegue de una máquina virtual mediante importación XVA para OpenIaaS
- Adición de la gestión de las etiquetas en los pools OpenIaaS
- Visualización del nombre de la máquina virtual en la pestaña de la consola para OpenIaaS

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Actualización de la información de CPU de los hosts y pools OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Adición de los IOPS/TO en los volúmenes baremetal

## v4.10.0 — 2025-03-04

### [Consola](/console)
- Actualización de los enlaces a la nueva documentación pública

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una alerta para informar a los usuarios en caso de duplicidad de direcciones MAC en la lista de máquinas virtuales y durante la creación o modificación de adaptadores de red
- Adición de una opción para forzar la parada o el reinicio de una máquina virtual
- La memoria ya no se incluirá por defecto durante un snapshot si la máquina virtual no está encendida
- Posibilidad de renombrar y redimensionar un disco
- Adición de la eliminación de las ISO y modelos desde la página catálogo
- Adición de la posibilidad de eliminar el disco de configuración 'Cloud Init' durante el despliegue de una máquina virtual

## v4.9.1 — 2025-02-27

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de editar un adaptador de red en una máquina virtual encendida

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de restricciones sobre los caracteres permitidos en los nombres de las máquinas virtuales OpenIaaS

## v4.9.0 — 2025-02-21

### [Consola](/console)
- Hacer clicables los nombres en las tablas cuando existe una página vinculada
- Mejorar la apertura de las consolas para evitar la apertura de varias pestañas si hay varias ventanas abiertas en la misma página
- Mostrar un error al abrir una consola si el navegador no permite redirecciones en la aplicación

### [Métricas](/console/metrics/concepts)
- Mostrar la unidad de la RAM en la página de salud de las máquinas virtuales

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Bloquear la creación de una máquina virtual si el espacio en los Block Storage seleccionados no es suficiente
- Vaciar las direcciones MAC por defecto durante la creación de una máquina virtual OpenIaaS

### [Almacenamiento](/storage/oss)
- Poder copiar en el portapapeles un punto final S3

## v4.8.0 — 2025-02-14

### [Comandos](/console/orders)
- Adición del comando de propagación de una red en los Pools OpenIaaS
- Adición de los comandos de propagación de red en la página de todos los comandos

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Visualización del número de discos asignados y disponibles por controlador en una máquina virtual
- Actualización de las condiciones sobre el número de discos posibles a añadir en controladores SCSI Para Virtual en función de la versión hardware de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de añadir opciones Cloud Init en la creación de una máquina virtual OpenIaaS
- Visualización de los discos en la página de un Block Storage
- Posibilidad de actualizar la configuración del firmware de arranque de una máquina virtual OpenIaaS
- Poder clonar una máquina virtual OpenIaaS

### [Red](/network/network_overview)
- Actualización de la visualización de las propagaciones de una red y adición de propagaciones OpenIaaS
- Actualización de la creación de una red y posibilidad de propagar la red en la infraestructura OpenIaaS desde su creación

## v4.7.0 — 2025-02-03

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La exportación en OVF está bloqueada cuando la máquina virtual está cifrada

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Mostrar las relaciones datastores clusters y host clusters en las páginas Cálculo y Almacenamiento

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Modificación de la opción de arranque después de la restauración para un entorno SecNumCloud durante la restauración en modo clon o producción en un host o clúster alternativo

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Añadir los botones montar y desmontar una ISO OpenIaaS en la barra de acciones de una máquina virtual

### [Red](/network/network_overview)
- Mejora de la visualización de las propagaciones de red cuando hay solicitudes de eliminación de propagaciones en curso

## v4.6.0 — 2025-01-30

### [Consola](/console)
- Eliminar los caracteres mostrados durante el autocompletado al añadir observadores durante la creación de un ticket de soporte
- Actualización de la visualización del menú y de las páginas disponibles para las ofertas VMware y OpenIaaS en un nuevo entorno sin zonas de disponibilidad provisionadas

### [Consola — Notificaciones](/console)
- Actualización de la visualización de las suscripciones a notificaciones desde la página de perfil

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Añadir la posibilidad de cifrar una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Añadir la exportación como plantilla de una máquina virtual

## v4.5.0 — 2025-01-17

### [Consola](/console)
- Añadir la descripción en la creación y visualización de las listas blancas (whitelists)
- Posibilidad de modificar la descripción de una lista blanca

### [Comandos](/console/orders)
- Añadir un comando para una nueva Zona de Disponibilidad OpenIaaS
- Añadir un comando para el Bare Metal
- Vincular un clúster de hipervisores a un clúster de almacenamiento

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mostrar el tamaño restante entre paréntesis en los árboles de selección de almacenamiento

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Añadir el peor caso de asignación de memoria en un hostCluster VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Añadir la carga de ISO en los catálogos OpenIaaS
- Añadir el desplazamiento de las máquinas virtuales OpenIaaS
- Poder elegir los discos y redes en la creación de una máquina virtual OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Añadir una página que liste los Bare Metal
- Añadir una página que liste los volúmenes Bare Metal
- Añadir una página con los detalles de un Bare Metal
- Añadir la posibilidad de abrir una consola Bare Metal

## v4.4.0 — 2025-01-13

### [Consola](/console)
- Modificaciones técnicas realizadas durante el proceso de autenticación

## v4.3.0 — 2024-12-19

### [Consola — Actividades](/console)
- Añadir los enlaces "acceder al recurso" en las actividades relacionadas con XOA y Object-Storage

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Añadir las etiquetas y la IP de la máquina virtual a la exportación CSV de las máquinas virtuales

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Ofrecer exportar únicamente los elementos filtrados en la exportación CSV de los informes de copia de seguridad en la subpestaña de máquinas virtuales

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Añadir las VM-templates XOA desde la página de catálogos

### [Object Storage](/storage/oss)
- Poder crear y restablecer la clave de acceso global desde las cuentas de almacenamiento

## v4.2.0 — 2024-12-10

### [Consola](/console)
- Añadir redirecciones a la página de estado

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los elementos ya presentes en 'Mi catálogo' siguen mostrándose ahora en 'Catálogo público'
- Añadir redirecciones en los componentes citados en un elemento del catálogo VMware
- Actualización de la visualización de la RAM en un clúster de hipervisores
- Eliminación de la opción de replicar automáticamente los nuevos discos que causaba errores
- Añadir validaciones en la replicación de una máquina virtual
- Añadir nuevas extra config PCIPassthru desde la configuración avanzada de una máquina virtual para la gestión de GPU
- Posibilidad de añadir un controlador PCI en las máquinas virtuales

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Visualización de las recomendaciones y fallos DRS desde un clúster de hipervisores
- Nuevo estado en los hipervisores y datastores cuando hay una solicitud de mantenimiento en curso
- Añadir información sobre la GPU de un hipervisor

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Eliminar varias opciones de Backup no funcionales en máquinas virtuales en modo prueba

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Añadir una página de copia de seguridad para la parte de copias de seguridad OpenIaas que liste los errores, las políticas, los informes de las copias de seguridad y permita la recuperación de máquinas virtuales eliminadas

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Añadir una página para listar las zonas de disponibilidad OpenIaas
- Añadir una página de almacenamiento para la parte OpenIaas
- Añadir una página de cálculo para la parte OpenIaas

### [Housing (Colocación)](/housing)
- Modificación de la información mostrada desde la página de dispositivos

## v4.1.1 — 2024-11-18

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora en la edición de la memoria, la conversión se realiza hacia la unidad con el último valor entero
- Durante una instantánea, el botón para guardar la RAM se desactiva cuando la máquina virtual está apagada
- Cuando varias máquinas virtuales están desplegadas, la lista de discos no se muestra inmediatamente

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Añadir el botón de exportación CSV en la pestaña de máquinas virtuales de la página de informes de copia de seguridad

## v4.1.0 — 2024-11-13

### [Consola](/console)
- Posibilidad de enviar un archivo durante un feedback

### [Identidad & Acceso (IAM)](/console/iam)
- Desactivación de la posibilidad de eliminar un propietario

### [Comandos](/console/orders)
- Añadir la gestión de añadir, eliminar y editar un datastore desde la página de comandos
- Añadir la posibilidad de eliminar un Host

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Añadir las actividades de instantáneas en la pestaña de instantáneas de una VM
- Visualización del tamaño real de las máquinas virtuales en la exportación CSV

### [IaaS VMware — Infraestructura](/iaas_vmware)
- En las páginas de cálculo y almacenamiento, el filtro sobre las zonas de disponibilidad se aplica también a las pestañas de clúster
- Visualización de los porcentajes de uso en las barras de consumo (CPU / RAM / Almacenamiento)

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Añadir una validación sobre la presencia de políticas de copia de seguridad en la opción de inicio automático
- Añadir una opción para forzar la parada/reinicio de las máquinas virtuales sin guest-tools instalados
- Mejora del mensaje de ejecución de una política OpenIaas en una máquina virtual específica

### [Bastion](/bastion)
- Añadir una validación en el campo Host de un equipo

## v4.0.3 — 2024-11-04

### [Consola](/console)
- Mejoras y correcciones relacionadas con el nuevo diseño

## v4.0.2 — 2024-10-30

### [Consola](/console)
- Mejoras y correcciones relacionadas con el nuevo diseño

## v4.0.1 — 2024-10-25

### [Consola](/console)
- Mejoras y correcciones relacionadas con el nuevo diseño

## v4.0.0 — 2024-10-18

### [Consola](/console)
- Nuevo diseño de la Consola
- Rediseño de las páginas de infraestructura y copia de seguridad

---

:::info[Historial anterior]

El historial completo de las versiones anteriores a v4.0 (v1.0 a v3.38.1, de febrero de 2019 a octubre de 2024) está disponible en el [historial Git](https://github.com/Cloud-Temple/docs) del proyecto.

:::
