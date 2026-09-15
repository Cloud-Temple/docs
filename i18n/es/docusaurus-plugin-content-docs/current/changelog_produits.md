---
title: Novedades de productos
sidebar_position: 999
---

# Novedades del producto y actualizaciones

> Este changelog enumera únicamente las nuevas funcionalidades y actualizaciones significativas de la plataforma Cloud Temple.
> Las correcciones de errores se excluyen intencionadamente.

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Adición de la columna « Fabric » en la pestaña de red de un servidor Bare Metal

## v4.49.0 — 2026-08-31

### [Console](/console)
- Inicio automático del tutorial de bienvenida en el primer inicio de sesión de un usuario
- Eliminación de las notificaciones de error al cargar el panel de control cuando los entornos no están aprovisionados

### [Console — Organisation](/console/iam/concepts)
- Visualización del precio de activación de un tenant en el modal de creación, en modo Organización

### [Instancias de VM](/public_cloud/vm_instances)
- Ocultación de campos y mensaje explícito cuando no hay almacenamiento disponible, al agregar y al ampliar un disco
- Asociación y disociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC
- Posibilidad de elegir una plantilla personalizada (vCPU y RAM libres, dentro de los límites de la familia de instancia) al crear, restaurar y redimensionar una Instancia de VM

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El número de vCPU propuesto para el redimensionamiento de una máquina virtual ahora está limitado por su capacidad máxima
- Asociación y disociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Visualización del tipo de blade en lugar de su descripción en la « Clase » de los pools

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Aviso en la restauración que indica que la máquina virtual original no se reemplaza: se crea una nueva máquina virtual con fecha

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Asociación y disociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Visualización del tipo de blade en lugar de su descripción en la « Clase » de los clústeres

### [Red](/network/network_overview)
- Reserva de IP interco : bloqueo de las direcciones de red y de difusión, e indicador « Reservada » en las IPs reservadas

### [VPC](/network/vpc)
- El botón « Nuevo VPC » de la lista ahora aparece en gris cuando se alcanza el límite de VPC

### [Bare Metal](/iaas_bare-metal)
- Visualización del tipo de blade en lugar de su descripción en la « Clase » de los servidores Bare Metal

## v4.48.0 — 2026-08-13

### [Consola](/console)
- Mejora en la persistencia de la selección de idioma, ahora vinculada al perfil de usuario

### [VM Instances](/public_cloud/vm_instances)
- El costo estimado mostrado durante la creación de una instancia de VM es ahora mensual, sobre una base de 730 h/mes

### [Marketplace](/marketplace)
- Ahora solo se ofrecen las zonas de disponibilidad compatibles con la imagen seleccionada durante el despliegue desde el Marketplace
- El precio de un producto del Marketplace desplegado en Instancia VM indica ahora que se calcula en función de la CPU, la RAM y el almacenamiento

### [Commandes](/console/orders)
- Mensaje explícito cuando ya no hay suficiente espacio disponible para un tipo de almacenamiento, al solicitar una zona de disponibilidad o un pool

### [VPC](/network/vpc)
- El nombre del VPC ahora se muestra antes que el de la red en los selectores de red
- El nombre del VPC ahora precede al de la red en la pestaña Adaptadores de red de las máquinas virtuales
- Armonización de los colores de las etiquetas de tipo de VPC (compartido, dedicado) con los de las redes
- La opción Instancias de VM ahora está disponible desde el formulario de asociación de una IP estática
- Los adaptadores de red ya asociados a una IP estática ahora aparecen atenuados en el formulario de asociación

### [Object Storage](/storage/oss)
- Elección del estilo de direccionamiento (path-style ou virtual-hosted) al generar un enlace de compartición de un archivo
- Advertencia sobre los buckets cuyo nombre no es compatible con DNS : solo es posible el acceso path-style

### [Gestor de costos](/console/billing/concepts)
- La sección Gestor de costos ya no aparece en el panel de la Organización cuando la organización no es elegible
- Se muestra una tarjeta de error, en lugar de un costo de 0 €, cuando falla la recuperación de los consumos en el panel de la Organización
- Las líneas del plan de soporte ahora se agrupan bajo « Soporte » en el costo por tenant, en lugar de un tenant « Desconocido »

### [Consola — Organización](/console/iam/concepts)
- Los productos de un tenant ahora se agrupan según sean modificables, no desactivables o no disponibles, junto con el motivo del bloqueo.

### [Soporte](/console)
- Las descripciones y los informes post-incidente ahora están con formato (markdown) en la página de Incidentes
- Los mensajes globales de soporte ahora se muestran en modo Organización

### [Alojamiento (Colocación)](/housing)
- Adición de los tipos de interfaz 1000BASE-SX y 10GBASE-SR a la reserva de espacio en colocación

## v4.47.0 — 2026-07-30

### [Console](/console)
- La documentación Swagger del módulo Comandos ya está disponible

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante el despliegue de una máquina virtual, solo se ofrecen ahora los elementos desplegables del catálogo (OVF y plantillas de máquina virtual)

### [Instancias de VM](/public_cloud/vm_instances)
- El costo estimado (por hora) ahora se muestra durante la creación de una instancia, con el desglose por concepto (vCPU, RAM, discos)

### [VPC](/network/vpc)
- Al solicitar un nuevo VPC, ahora puede elegir un despliegue en un entorno dedicado (su infraestructura OpenIaaS) o en un entorno compartido (sujeto a la suscripción al producto VM Instances)

### [Almacenamiento de objetos](/storage/oss)
- Las mayúsculas ya no se permiten en el nombre de un bucket, de acuerdo con las reglas de nomenclatura

### [Marketplace](/marketplace)
- Ahora puede desplegar una Instancia de VM (Public Cloud) directamente desde la ficha de un producto Marketplace

## 2026-07-27 — Bases de datos administradas (Vista previa)

### [MariaDB Administrado](/managed_mariadb)
- El modelo de despliegue Distributed se renombra como MultiAZ
- Los tipos de instancia ahora llegan hasta 6X-Large (32 vCPU y 128 Gio de memoria) y el almacenamiento ampliable en caliente hasta 512 Gio
- Publicación de recomendaciones de dimensionamiento que explican el ajuste de los parámetros del motor, con una advertencia sobre la activación de `performance_schema` por debajo del tipo X-Large
- La restauración a un punto en el tiempo ya no está disponible: las copias de seguridad se basan ahora en copias físicas diarias y exportaciones lógicas, sin archivado continuo de los registros de transacciones

### [PostgreSQL Gestionado](/managed_postgresql)
- Nueva arquitectura basada en el operador Kubernetes CloudNative-PG y el plugin de respaldo Barman Cloud
- Tres modelos de despliegue: StandAlone en instancia única, Replica en tres instancias replicadas de forma asíncrona con failover automático, y Entreprise en tres instancias replicadas de forma síncrona en al menos dos nodos, garantizando la durabilidad sin bloqueos en caso de indisponibilidad de un nodo
- Despliegue declarativo mediante recursos personalizados de Kubernetes, utilizable a través de Terraform o Helm, y exportación nativa de métricas a Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organisation](/console/iam/concepts)
- Ahora puede crear un tenant directamente desde la página Tenants, seleccionando los productos asociados

### [Consola — Actividades](/console)
- Los registros de actividad ahora pueden filtrarse por módulo

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La dirección IP pública ahora se muestra en la lista de interfaces de red de una máquina virtual conectada a un VPC
- Una pestaña « Salud » ahora está disponible en el detalle de una máquina virtual, accesible desde la lista

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Ahora puede solicitar una replicación VMware entre zonas de disponibilidad

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- La lista de interfaces de red de una máquina virtual conectada a un VPC ahora muestra la dirección IP pública
- Una pestaña « Salud » ahora está disponible en el detalle de una máquina virtual abierta desde la lista

### [VM Instances](/public_cloud/vm_instances)
- La dirección IP pública ahora se muestra en la lista de adaptadores de red de una instancia conectada a un VPC
- Una pestaña « Salud » ahora está disponible en el detalle de una instancia, accesible desde la lista

### [Alojamiento (Colocation)](/housing)
- Los pedidos de Colocation ya están disponibles: reserva de espacio, instalación y retirada de equipos
- Los pedidos de Colocation de intervención ya están disponibles: asistencia técnica y smart hands
- Los pedidos de Colocation de cableado y descableado (CPE) ya están disponibles
- Los pedidos de Colocation no compatibles con la consola ahora se indican claramente, con una invitación para contactar al soporte

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- La creación de una instancia se basa ahora en la selección de una imagen de sistema, que reemplaza a las plantillas

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al configurar los núcleos por socket de una máquina virtual OpenIaaS, la topología del procesador (número de sockets y núcleos por socket) ahora se muestra explícitamente

### [LLMaaS](/llmaas)
- El importe mínimo de un crédito LLMaaS se reduce a 100 €

## v4.45.3 — 2026-07-21

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante el despliegue de una máquina virtual, ahora se muestra un mensaje « Ningún modelo disponible » cuando el catálogo está vacío

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al desplegar una máquina virtual, ahora se muestra un mensaje « Ningún modelo disponible » cuando el catálogo está vacío

## v4.45.2 — 2026-07-17

### [Console](/console)
- Mejoras técnicas menores

## v4.45.0 — 2026-07-10

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante una operación bloqueante, las máquinas virtuales muestran ahora un estado explícito: copia de seguridad, instantánea o restauración en curso
- La edición de la CPU se adapta ahora a la opción de adición de CPU en caliente (CPU hot add) y al estado de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Durante una operación bloqueante, las máquinas virtuales muestran ahora un estado explícito (copia de seguridad, instantánea o restauración en curso)
- El detalle de una máquina virtual muestra ahora un resumen de uso (CPU, RAM, almacenamiento)

### [VM Instances](/public_cloud/vm_instances)
- Las instancias muestran ahora un estado explícito (copia de seguridad, instantánea o restauración en curso) durante una operación bloqueante
- Las métricas de uso instantáneo (CPU, RAM, almacenamiento) se muestran ahora para cada instancia
- La unicidad del nombre se verifica ahora tanto en la creación como en la restauración de una instancia

### [Red](/network/network_overview)
- Durante una solicitud que incluya una etapa de propagación, las nuevas redes solo se crean en la validación final de la solicitud.

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- El tipo de red (backbone privado) ahora se muestra en los adaptadores de red de una instancia, incluso sin la funcionalidad VPC

## v4.44.1 — 2026-07-02

### [Console](/console)
- Mejoras técnicas menores

## v4.44.0 — 2026-07-02

### [Commandes](/console/orders)
- Las acciones de aprovisionamiento de infraestructura ahora tienen en cuenta los roles de negocio (cómputo, red, VPC, bare metal…) como complemento a los permisos de pedido

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- El seguimiento de la carga de los archivos ISO y OVF ha sido mejorado y ahora es posible cancelar una carga en curso

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El seguimiento del envío de archivos ISO y XVA ha mejorado y ahora es posible cancelar un envío en curso

### [Instancias de VM](/public_cloud/vm_instances)
- Los tamaños de disco ya no aceptan valores decimales, al crear una instancia, así como al agregar o ampliar un disco
- Los indicadores de procesamiento de las instancias y sus recursos ahora se restablecen correctamente después de actualizar la página

### [VPC](/network/vpc)
- Desde la interfaz de red de una máquina virtual conectada a una red VPC, ahora puede acceder directamente al VPC correspondiente (VMware, OpenIaaS y VM Instances)
- Algunas operaciones de VPC ahora pueden ejecutarse en paralelo: añadir una puerta de enlace durante la creación de una red privada (y viceversa), y la eliminación simultánea de varias redes privadas

## 2026-06-30 — API Métricas

### [Métricas](/console/metrics/concepts)
- Un token de acceso ahora puede verificar la disponibilidad del servicio de métricas a través del endpoint de la API `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Consola](/console)
- Los selectores de redes ahora distinguen visualmente las redes VPC y el Backbone privado
- Un tutorial interactivo ahora está disponible en la página Usuarios

### [Consola — Actividades](/console)
- Ahora puede consultar el detalle de una actividad desplegando su fila en las listas Recientes y Archivadas
- Cada actividad cuenta ahora con una página de detalle dedicada, accesible mediante enlace directo
- El detalle de una actividad es ahora accesible desde las notificaciones de éxito y error
- Ahora puede consultar el JSON completo de una actividad, copiarlo o descargarlo
- La lista de actividades archivadas ahora puede ordenarse por fecha de creación

### [Commandes](/console/orders)
- La visualización del progreso de un pedido ha sido rediseñada

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los detalles de una máquina virtual se muestran ahora en una nueva vista
- Durante la modificación en caliente, se verifica la coherencia entre la CPU y los núcleos por socket: se muestran advertencias y no se aceptan valores no válidos

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Ahora puede solicitar la eliminación de un entorno IaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Una nueva vista de detalle está disponible para las máquinas virtuales
- Ahora puede filtrar la lista de máquinas virtuales por zona de disponibilidad (AZ)

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- La página de un Storage Repository ahora muestra la fecha de creación del snapshot de un disco

### [Instancias de VM](/public_cloud/vm_instances)
- El detalle de una instancia se muestra en una nueva vista
- El botón « Iniciar una copia de seguridad ahora » está ahora deshabilitado cuando la copia de seguridad no está disponible

### [VPC](/network/vpc)
- La descripción de la dirección IP pública ahora se muestra al asociarla a una red privada

### [Almacenamiento de objetos](/storage/oss)
- Ahora puede agregar una descripción a las direcciones IP autorizadas (whitelist) de un bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- La sección « Privacidad » ha sido actualizada

### [Almacenamiento de objetos](/storage/oss)
- La disponibilidad del certificado TLS wildcard para el acceso S3 en estilo host ahora se indica
- Ahora puede cargar un archivo en S3 desde una URL prefirmada
- Ahora puede activar el versionado en un bucket
- Ahora puede gestionar las versiones de un archivo

## v4.41.1 — 2026-06-11

### [Commandes](/console/orders)
- El máximo disponible al solicitar un Block Storage se ha actualizado

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Los mensajes relacionados con el stock son ahora más precisos al solicitar hipervisores o aumentar la RAM de un clúster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al agregar un disco existente a una máquina virtual, el UUID del disco ahora se muestra cuando varios discos tienen el mismo nombre

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Ahora se muestra una advertencia al solicitar la actualización del host maestro de un pool

### [VPC](/network/vpc)
- El pedido de un VPC requiere ahora que una zona de disponibilidad de OpenIaaS esté desplegada

## 2026-06-06 — Servidor MCP de la Consola

- Recurso de ayuda para la autenticación que describe la obtención de un token de acceso personal y el formato de encabezado esperado; los errores de autenticación ahora indican la causa y los pasos a seguir
- Cambio de configuración con impacto: la URL de la API especificada en la configuración del servidor debe incluir ahora el segmento `/api`; debe actualizarse antes del despliegue de esta versión para evitar errores 404. La URL se valida en el arranque y se admite la infraestructura de claves públicas y privadas

## 2026-06-05 — Servidor MCP de la Consola

- Consulta del nombre y la versión del servidor desplegado

## v4.40.0 — 2026-06-02

### [Console](/console)
- Un recorrido interactivo de bienvenida ya está disponible

### [Consola — Organización](/console/iam/concepts)
- El gestor de costos ya está disponible en la vista de organización
- La vista de organización ahora cuenta con una visualización dedicada

### [Commandes](/console/orders)
- La etapa de red ya no aparece en las órdenes cuando solo está activado el producto VPC

### [Soporte](/console)
- Los planes y los contactos de soporte se han actualizado

### [Tickets de soporte](/console)
- Las funcionalidades de servicios gestionados se han retirado de los tickets de soporte

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Las funcionalidades de la biblioteca de contenido público han sido retiradas

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El valor predeterminado del paso CloudInit se ha actualizado para los despliegues OpenIaaS desde la Marketplace
- Se ha mejorado el envío de caracteres especiales desde el portapapeles de la consola de una máquina virtual

### [Red](/network/network_overview)
- Ahora puede eliminar la descripción de una dirección IP
- Ahora puede completar el campo `description` al crear una red virtual
- Ahora puede completar el campo `description` al modificar una red virtual

### [VPC](/network/vpc)
- La descripción de una IP flotante VPC ahora se muestra
- Ahora puede modificar la descripción de una IP flotante VPC

## 2026-05-25 — Servidor MCP de la Consola

- Cada denegación de permiso indica ahora el producto afectado y el nombre exacto del permiso que debe activarse en el token de acceso personal

## 2026-05-24 — Servidor MCP de la Consola

- Gestión del soporte desde un agente: lista y detalle de tickets, creación, comentario, cierre, consulta de mantenimientos programados y sus categorías, incidentes del tenant e incidentes de la plataforma
- Opción de destrucción tras el arranque en el despliegue desde el Marketplace
- Flujo guiado de despliegue de una máquina virtual Linux
- Recursos consultables directamente: glosario de términos IaaS OpenSource, topología de un pool que agrupa hosts, repositorios de almacenamiento, redes e indicadores en una sola vista, y catálogo Marketplace filtrado por IaaS OpenSource

## 2026-05-23 — Servidor MCP de la Consola

- Navegación del catálogo Marketplace con filtros, y fichas técnicas IaaS OpenSource (XVA) y VMware (OVF) detallando procesadores, memoria, discos y nombres exactos de las interfaces de red
- Despliegue de una máquina virtual IaaS OpenSource desde un elemento del catálogo, idempotente por nombre
- Control de la alimentación de las máquinas virtuales IaaS OpenSource — encendido, apagado, reinicio, pausa, suspensión y reanudación — idempotente por estado
- Seguimiento de operaciones largas a través de las actividades

## 2026-05-22 — Servidor MCP de la Consola

- Consulta extendida del IaaS OpenSource : pools, hosts, máquinas virtuales, snapshots, adaptadores de red con detección de direcciones MAC duplicadas, discos virtuales y estado de replicación, siendo todas estas operaciones de solo lectura
- Filtros aplicables del lado del servidor en todas estas listas

## v4.39.2 — 2026-05-22

### [Red](/network/network_overview)
- Ahora puede eliminar el registro PTR de una dirección IP pública o de una dirección IP de interconexión

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Las reglas de nomenclatura de las instantáneas de máquina virtual han sido modificadas

### [Bare Metal](/iaas_bare-metal)
- Ahora puede modificar la descripción de una cuchilla

### [Red](/network/network_overview)
- Ahora puede modificar el registro PTR de una dirección IP de interconexión

## v4.39.0 — 2026-04-23

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los discos existentes ahora se muestran al agregar un nuevo disco
- Al migrar (vMotion) una máquina virtual en modo « solo recurso de cómputo », ahora es posible elegir un clúster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Los discos existentes ahora se muestran al agregar un nuevo disco

### [VM Instances](/public_cloud/vm_instances)
- La lista de instancias de VM ahora se puede exportar en formato CSV
- La visualización de la frecuencia de una política de copia de seguridad ha sido revisada

### [Bare Metal](/iaas_bare-metal)
- La selección de redes es ahora obligatoria durante la propagación de una red en un Bare Metal

## 2026-04-20 — Bases de datos administradas (Vista previa)

### [MariaDB Gestionado](/managed_mariadb)
- Publicación de los parámetros del motor asociados a cada plantilla de instancia: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` y `table_open_cache`
- Revisión de las plantillas de instancia: el límite se reduce a 3X-Large (8 vCPU y 32 Gio de memoria) y el almacenamiento máximo extensible en caliente pasa de 512 Gio a 128 Gio

### [PostgreSQL Gestionado](/managed_postgresql)
- Publicación de los parámetros del motor asociados a cada plantilla de instancia: `shared_buffers`, `effective_cache_size`, `work_mem` y `max_connections`
- Revisión de las plantillas de instancia: el límite se reduce a 3X-Large (8 vCPU y 32 GiB de memoria) y el almacenamiento máximo ampliable en caliente pasa de 512 GiB a 128 GiB

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- Las redes propuestas ahora se filtran tanto al crear una instancia como al modificar un adaptador de red

## v4.38.0 — 2026-04-17

### [Identidad y Acceso (IAM)](/console/iam)
- Seis nuevos permisos están disponibles: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` y `public_cloud_vm_instances_console_access`
- El nombre del producto correspondiente ahora aparece al inicio de la descripción de cada permiso

### [Gestionnaire des coûts](/console/billing/concepts)
- La interfaz del administrador de costos ha sido mejorada
- La unidad mostrada en los gráficos de consumo ha sido actualizada

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante el despliegue de una máquina virtual, se ha revisado el paso de selección de una imagen del Marketplace

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ahora puede cambiar la visualización de la página del catálogo entre cuadrícula y tabla
- La etapa de selección de una imagen de Marketplace durante el despliegue de una máquina virtual ha sido actualizada

### [VM Instances](/public_cloud/vm_instances)
- El panel de control ahora muestra el uso de las cuotas de Instancias VM
- Una nueva página presenta la lista de Instancias VM
- Ahora puede crear una nueva instancia
- Ahora puede consultar y gestionar los discos, los adaptadores de red y las instantáneas de una instancia
- Ahora puede actualizar las capacidades de una instancia y modificar su estado
- Ahora puede acceder a la consola de una instancia

### [LLMaaS](/llmaas)
- La visualización de los precios en la vista de consumo y el formulario de recarga de crédito han sido actualizados

## 2026-04-15 — Bases de datos administradas (Preview)

### [MariaDB Managé](/managed_mariadb)
- Apertura en Preview de MariaDB Managé: modelos StandAlone y Distributed en clúster de tres nodos detrás de un proxy, almacenamiento replicado en tres zonas de disponibilidad y compromiso de disponibilidad del 99,9 %

### [PostgreSQL Gestionado](/managed_postgresql)
- Apertura en Preview de PostgreSQL Gestionado: modelos StandAlone y Distributed en clúster de tres nodos detrás de un proxy, replicación síncrona multizona sin pérdida de datos y restauración a un punto en el tiempo

## v4.37.0 — 2026-04-02

### [Gestor de costos](/console/billing/concepts)
- Adición del importe previsto en la página de consumo para el gráfico y la tendencia
- Mejora visual cuando hay un error o muy pocos datos sobre el consumo del mes actual

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora del formulario para desplegar una máquina virtual desde un elemento del catálogo
- Añadida la posibilidad de cambiar el tipo de visualización (cuadrícula o tabla) desde la página del catálogo

## v4.36.0 — 2026-03-27

### [Console](/console)
- Actualización de gráficos de métricas y consumo

### [Gestor de costos](/console/billing/concepts)
- Adición de la página del gestor de costos
- Posibilidad de visualizar los costos del mes en curso
- Posibilidad de visualizar los costos en un intervalo de fechas y comparar las tendencias

### [Commandes](/console/orders)
- Bloqueo del desaprovisionamiento de un clúster de hipervisores cuando un clúster de almacenamiento está adjunto

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Adición de filtros y ordenación en la lista de discos desde los detalles de un Block Storage

### [VPC](/network/vpc)
- Mejora de la interfaz en la carga de datos en los formularios

## v4.35.4 — 2026-03-18

### [Console](/console)
- Mejora de la reconexión a WebSockets

### [Support](/console)
- Adición de una solución de respaldo para la creación de un ticket de soporte cuando los websockets están desconectados

## v4.35.3 — 2026-03-17

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Actualización de la recuperación de los discos al cargar los réplicas desde la pestaña Replicación

## v4.35.0 — 2026-03-11

### [Comandos](/console/orders)
- Adición del comando de eliminación de un mapeo cpool/spool
- Adición del comando de desaprovisionamiento de red privada VPC
- Modificaciones en el comando de desaprovisionamiento de un volumen Bare Metal, es posible solicitar la eliminación desde la lista de volúmenes
- Adición del comando de eliminación de mapeo de volumen Bare Metal
- Adición del comando de desaprovisionamiento de VPC
- Bloqueo del desaprovisionamiento de un datastore si es el último de un clúster de datastore

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de agregar un límite de RAM a una máquina virtual

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Actualización de multi vMotion de VMware para permitir mover las VMs de un clúster a otro

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Adición de la posibilidad de actualizar un host
- Visualización de la información de las actualizaciones de un host

### [Red](/network/network_overview)
- Desactivación del botón de eliminación de propagación de red cuando no se entrega ninguna propagación

### [LLMaaS](/llmaas)
- Visualización del consumo agrupado por tipo de tokens

## v4.34.0 — 2026-02-18

### [Console](/console)
- Actualización importante del motor de renderizado de la aplicación
- Los menús de VMware y OpenIaaS no se muestran cuando solo está activado el módulo de métricas

### [Métricas](/console/metrics/concepts)
- Posibilidad de exportar en CSV desde las páginas de Métricas de VMware y OpenIaaS

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Al mover una máquina virtual, no es posible seleccionar el mismo host de destino que el host actual de la máquina virtual
- Adición del botón 'Nuevo catálogo' en la página Catálogo VMware

## 2026-02-04 — Servidor MCP de la Consola

- Consulta de los modelos de máquinas virtuales, redes, hosts y repositorios de almacenamiento IaaS OpenSource

## 2026-02-03 — Servidor MCP de la Consola

- Puesta a disposición del servidor MCP (Model Context Protocol) de la Consola, autenticado mediante token de acceso personal
- Consulta y gestión de las máquinas virtuales VMware desde un agente: lista, detalles, centros de datos virtuales, encendido y apagado

## v4.33.0 — 2026-01-21

### [Comandos](/console/orders)
- Adición del comando de eliminación de una propagación de red en OpenIaaS

### [Métricas](/console/metrics/concepts)
- Adición de filtros para las páginas de métricas de VMWare y OpenIaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la página de métricas 'Máquinas Virtuales'
- Adición de la página de detalles de métricas para cada VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Actualización del modal de cierre de un ticket de soporte

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Al asignar una política de copia de seguridad a un disco, ahora se propone inventariar el disco si no es reconocido por la solución de copia de seguridad.

### [Bare Metal](/iaas_bare-metal)
- La eliminación de un volumen BFS en un Bare Metal ahora está bloqueada, el volumen se eliminará al eliminar el Bare Metal
- Al solicitar un Bare Metal, el primer volumen ahora se renombra como 'volumen BFS'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Actualización de las explicaciones de los tooltips sobre las opciones disponibles durante la restauración de una máquina virtual

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Los snapshots vinculados a las políticas de copia de seguridad son ahora visibles
- Visualización del Host asociado a la ubicación de almacenamiento de un ISO durante la carga y desde la página de catálogo

### [Object Storage](/storage/oss)
- Mostrar una tarjeta explicativa desde la pestaña de MPU incompletos cuando la IP de la Consola no está autorizada, impidiendo la visualización de la pestaña.

### [Marketplace](/marketplace)
- Visualización de la tarjeta de error al acceder a una página del marketplace que no existe

## v4.30.1 — 2025-12-16

### [Console](/console)
- Mejora de la visualización de errores vacíos mostrando por defecto el estado HTTP devuelto

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Posibilidad de asociar una IP estática a una dirección MAC personalizada

### [LLMaaS](/llmaas)
- En las métricas de consumo, filtrado de series con valores iguales a 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Mejora de la sincronización de las acciones en las páginas VPC
- Añadida la asociación de una IP estática a una IP pública desde la lista de IPs estáticas

### [Almacenamiento](/storage/oss)
- Agregación de MPU incompletos desde la página de un bucket
- Posibilidad de eliminar un MPU incompleto

## v4.28.0 — 2025-11-21

### [Console](/console)
- Añadida la posibilidad de mostrar mensajes informativos globales visibles en toda la aplicación

### [Commandes](/console/orders)
- Posibilidad de solicitar un aumento de crédito LLMaaS para el tenant
- Posibilidad de solicitar un VPC
- Posibilidad de solicitar una red privada dentro de un VPC
- Posibilidad de solicitar una IP pública para el producto VPC
- Posibilidad de activar la gateway para un VPC
- Adición de la posibilidad de solicitar la eliminación de un tenant

### [Métricas](/console/metrics/concepts)
- Mejora en la visualización de los tooltips en los gráficos de métricas: ahora es posible hacer clic en un punto para fijar el tooltip y consultar todos los datos

### [Réseau](/network/network_overview)
- Agrupación de las páginas Redes e Internet bajo un único producto: Backbone privado
- Adición de la gestión del registro PTR al modificar una IP pública
- Bloqueo del uso compartido para ciertos tipos de redes

### [VPC](/network/vpc)
- Integración del producto VPC
- Adición de una página que lista los VPC
- Adición de una página de Detalles de un VPC
- Posibilidad de gestionar las redes privadas, las IP públicas y la gateway de un VPC
- Posibilidad de asociar una IP estática de una red privada VPC a un adaptador de red VMware u OpenIaaS
- Posibilidad de asociar una IP estática con una IP pública de un VPC

### [LLMaaS](/llmaas)
- Adición de una pestaña de Facturación en la página LLMaaS para los tenants con prepago activado
- Visualización del crédito restante para los tenants en modo prepago, en el panel de control y desde la pestaña de Facturación

## v4.27.0 — 2025-11-12

### [Pedidos](/console/orders)
- Añadida una verificación del stock disponible al solicitar recursos
- Añadido un filtro por tipo de pedido y por producto en la lista de pedidos

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora de la consola de las máquinas virtuales. Mejor gestión del teclado y adición de un portapapeles

### [IaaS VMware — Respaldo](/iaas_vmware)
- Adición de una alerta en el dashboard para los VSnap de respaldo SPP con una ocupación excesiva

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Mejora de la consola de las máquinas virtuales. Mejor gestión del teclado y adición de un portapapeles

### [Marketplace](/marketplace)
- Adición de la posibilidad de mostrar los detalles técnicos de una imagen

## v4.26.5 — 2025-11-04

### [Console](/console)
- Mejora del tamaño de los gráficos del panel de control al redimensionar la ventana

## v4.26.3 — 2025-10-31

### [Métriques](/console/metrics/concepts)
- Modificación del nombre de las exportaciones de métricas presentadas en los gráficos

## v4.26.0 — 2025-10-22

### [Console](/console)
- Adición de un botón para copiar el UUID del perímetro actual desde el perfil de usuario
- Rediseño completo del Panel de control
- Adición de reconexión automática al seguimiento de actividades cuando se interrumpe la conexión

### [Pedidos](/console/orders)
- Actualización de los formularios de pedido para agregarlos a las diferentes páginas correspondientes (ejemplo: nuevo Datastore desde la página de Almacenamiento)

### [Soporte](/console)
- Adición de la dirección de correo electrónico de la persona que cerró el ticket en la calificación del ticket de soporte

### [Métricas](/console/metrics/concepts)
- Rediseño de la recopilación de métricas de VMware, la URL de la página ahora es /iaas/metrics
- Adición de una pestaña de métricas de infraestructura de VMware en Cómputo
- Adición de una pestaña de métricas de infraestructura de VMware en Almacenamiento
- Adición de una página de métricas para OpenIaaS
- Adición de una pestaña de métricas de infraestructura de OpenIaaS en Cómputo
- Adición de una pestaña de métricas de infraestructura de OpenIaaS en Almacenamiento

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de las nuevas claves extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Bloqueo de la selección de un hostcluster sin host activo
- Al crear una máquina virtual VMware, la selección del Vcenter se realiza ahora en función de la zona de disponibilidad seleccionada
- Adición de límites en los nombres y descripciones durante la carga de un archivo en VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al agregar un disco OpenIaaS, los almacenamientos que no pertenecen al Pool de la máquina virtual ahora se filtran
- Al realizar un snapshot, la opción para capturar la memoria ahora está desmarcada de forma predeterminada

### [IaaS OpenSource — Sauvegarde](/iaas_opensource)
- Adición de la posibilidad de ejecutar una copia de seguridad desde la pestaña de copias de seguridad de una máquina virtual OpenIaaS

### [Réseau](/network/network_overview)
- Eliminación de la restricción que impedía la selección de múltiples tipos de redes en la página de redes virtuales

### [Object Storage](/storage/oss)
- Optimización de la recuperación de archivos de un bucket

### [PaaS OpenShift](/paas_openshift)
- Adición de una página que lista los clústeres OpenShift
- Adición de una página de detalles de un clúster OpenShift

### [Marketplace](/marketplace)
- Añadido de un filtro por UUID y posibilidad de copiar el UUID de un elemento

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Actualización del uso de la configuración avanzada y las propiedades OVF durante el despliegue de una máquina virtual de VMware

## v4.24.0 — 2025-09-24

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Posibilidad de desplegar una imagen de máquina virtual desde la lista de máquinas virtuales

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de desplegar una imagen de máquina virtual desde la lista de máquinas virtuales

### [Réseau](/network/network_overview)
- Añadición de una validación para bloquear la eliminación de la compartición de una red si la red está propagada en otro Tenant

### [Marketplace](/marketplace)
- Adición del producto Marketplace
- Adición de una página que lista las soluciones disponibles en el catálogo
- Adición de una página para consultar los detalles de una solución
- Posibilidad de desplegar una imagen de máquina virtual en un entorno OpenIaaS o VMware desde los detalles de una solución
- Posibilidad de contactar a un socio para una solución de servicios gestionados

## v4.23.0 — 2025-09-12

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Adición del soporte para 4 nuevos valores extra-configs

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- No mostrar la alerta de HA en las VMs afectadas cuando el ISO local no está montado
- Al agregar o redimensionar un disco, indicar si el SR asociado se utiliza para una configuración de replicación

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Inclusión del nombre de la AZ en el informe de copia de seguridad

### [Almacenamiento de objetos](/storage/oss)
- Actualización de la información sobre el ciclo de vida de un bucket

### [LLMaaS](/llmaas)
- Adición del producto LLMaaS
- Adición de la lista de modelos disponibles
- Adición de la lista de claves API con posibilidad de crearlas
- Adición del consumo por modelos y por claves
- Adición de los detalles de un modelo
- Posibilidad de probar un modelo

## v4.22.1 — 2025-09-10

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Modificación de las alertas relativas a la configuración del formato de disco seleccionado, durante un VMotion que incluya almacenamiento

## v4.22.0 — 2025-09-02

### [Commandes](/console/orders)
- Adición del comando de eliminación de propagación de red desde la página de todos los comandos, todos los comandos disponibles son ahora accesibles desde esta página.

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Actualización de las condiciones sobre el cambio del formato de disco al mover una máquina virtual y adición de información sobre el formato de disco actual durante una configuración por disco

## v4.21.0 — 2025-08-22

### [Consola](/console)
- Actualización de la vista cuando no se crea/provisiona ningún dato o cuando se produce un error al obtener información.

### [Soporte](/console)
- Apertura de los modales de soporte con el servicio asociado preseleccionado
- Añadido de una insignia en el menú y la barra de navegación cuando un ticket de soporte requiere una respuesta

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de la posibilidad de exportar en CSV la lista de réplicas VMware
- Mejora del control deslizante de selección de RAM en ciertas órdenes
- Adición de la gestión de las opciones Static differed and immediate para vMotion

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Bloqueo de la eliminación de un cluster no vacío o con hosts/datastores no en mantenimiento

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la posibilidad de exportar en CSV la lista de réplicas OpenIaaS y las políticas asociadas
- Adición de detalles sobre las herramientas utilizadas por las máquinas virtuales (pvDrivers, managementAgent et tools)
- Adición de verificaciones para la alta disponibilidad (HA)

### [Red](/network/network_overview)
- Modificación de la selección de una dirección IPv4 con una lista disponible

## v4.20.0 — 2025-07-29

### [Commandes](/console/orders)
- Adición de información sobre los stocks limitados y agotados de los recursos de computación al solicitar una nueva zona de disponibilidad

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de una opción de VMware Tools para sincronizar la hora con el host
- Actualización de las condiciones sobre el cifrado de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Eliminación de la información de última ejecución de las políticas de replicación que provocaba lentitud
- Gestión del checksum TX para los adaptadores de red
- Adición de una advertencia sobre la replicación OpenIaaS si el número de AZ es inferior a 2
- Adición de alta disponibilidad (HA) para los pools y máquinas virtuales

## v4.19.0 — 2025-07-24

### [Pedidos](/console/orders)
- Actualización del pedido de IPs públicas con la posibilidad de solicitar un prefijo IPv6
- Actualización de la visualización de los pedidos disponibles cuando no hay ningún entorno aprovisionado

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un filtro de replicación en la lista de máquinas virtuales
- Actualización del modal de creación de una máquina virtual

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Adición de un filtro de replicación en la lista de máquinas virtuales

### [Red](/network/network_overview)
- Actualización de la página de Internet con la adición de la gestión de IPv6

## v4.18.0 — 2025-07-15

### [Console](/console)
- Actualización de la visualización cuando no se crea/provisiona ningún dato o cuando se produce un error al obtener información.

### [Commandes](/console/orders)
- Actualización de los pasos de internet al solicitar una nueva zona de disponibilidad o un nuevo pool

### [Soporte](/console)
- Adición de un servicio de seguridad para cada producto durante la creación de un ticket de soporte

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un enlace de un ISO montado en un controlador al elemento correspondiente en el catálogo

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una página de Replicación OpenIaaS con la lista de réplicas y las políticas de replicación
- Posibilidad de agregar y eliminar una configuración de replicación a una máquina virtual OpenIaaS
- Posibilidad de crear y eliminar una política de replicación
- Posibilidad de restaurar un réplica
- Posibilidad de exportar las máquinas virtuales en formato CSV.

## v4.17.0 — 2025-06-20

### [Pedidos](/console/orders)
- Posibilidad de solicitar un Pool OpenIaaS
- Posibilidad de solicitar la asociación de un volumen existente a un Bare Metal existente desde la página de un Bare Metal, desde la página de un volumen y desde la página de pedidos

### [Soporte](/console)
- Posibilidad de eliminar un archivo en un ticket de soporte
- La descripción sobre la satisfacción al cerrar un ticket es ahora opcional

## v4.16.0 — 2025-06-04

### [Console](/console)
- Agregación de traducciones al inglés en la página de informes de consumo del menú de órdenes

### [Pedidos](/console/orders)
- Posibilidad de solicitar el aumento de tamaño de un volumen bare metal
- Posibilidad de solicitar el aumento de tamaño de un Block Storage OpenIaaS

### [Soporte](/console)
- Rediseño de la creación de un ticket de soporte
- Interpretación del markdown en un ticket de soporte y actualización del orden de visualización de los comentarios
- Adición de retroalimentación al cerrar un ticket de soporte
- Actualización de la visualización de los pictogramas según el impacto de un incidente global

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de una opción para conservar la configuración de una máquina virtual durante una restauración en Producción en el clúster de origen

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un mensaje de advertencia en caso de falta de espacio en disco en un Block Storage (90% utilizado) y aviso durante la ejecución de comandos

### [Almacenamiento de objetos](/storage/oss)
- Adición de la descripción de los roles S3 al asignarlos a un bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Visualización de un error cuando una red está mal configurada en un adaptador de red de una máquina virtual, impidiendo también el arranque de la máquina virtual

## v4.15.0 — 2025-05-13

### [Console](/console)
- Ajuste de las unidades mostradas en los recursos de infraestructura: GiB (Gibibyte) en lugar de GB (Gigabyte)

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de mover un disco OpenIaaS
- Posibilidad de conectar y desconectar un disco OpenIaaS
- Visualización del estado conectado/desconectado de un disco
- Posibilidad de copiar el UUID de un disco, red virtual o instantánea
- Posibilidad de elegir el nombre de una máquina virtual durante el despliegue de un archivo XVA
- Adición de la posibilidad de asignar una política de copia de seguridad al momento de iniciar una máquina virtual si no tiene ninguna.

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de acciones disponibles en un disco desde un Block Storage

### [Bare Metal](/iaas_bare-metal)
- Adición de direcciones MAC en la tabla de interfaces de un Bare Metal
- Adición de una página sobre los detalles de un volumen Bare Metal

## v4.14.0 — 2025-04-28

### [Console](/console)
- Posibilidad de fijar páginas en el menú
- Actualización del renderizado de la documentación de la API

### [Commandes](/console/orders)
- Posibilidad de solicitar la eliminación de un Block Storage OpenIaaS
- Posibilidad de solicitar la adición de un Block Storage a un Pool OpenIaaS
- Posibilidad de solicitar la eliminación de un Host OpenIaaS
- Adición de la información del producto afectado en la lista de solicitudes
- Posibilidad de solicitar la adición de un Host a un pool OpenIaaS

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Posibilidad de poner un Host en mantenimiento
- Posibilidad de editar la descripción de un modelo
- Posibilidad de elegir un Host al iniciar una máquina virtual
- Adición de una regla de unicidad en el nombre de las máquinas virtuales OpenIaaS

## v4.13.0 — 2025-04-08

### [Console](/console)
- Adición de estadísticas e información de contacto en la página de Soporte

### [Commandes](/console/orders)
- Rediseño de la visualización de los detalles de una orden
- Rediseño de la visualización de las opciones de órdenes
- Actualización de la visualización para solicitar el primer baremetal cuando no hay ninguno
- Actualización del pedido de un Bare Metal con la selección de la propagación de redes en las interfaces del Bare Metal
- Posibilidad de propagar un VLAN en un Bare Metal
- Posibilidad de agregar un volumen a un baremetal
- Posibilidad de desaprovisionar un volumen de un Bare Metal
- Posibilidad de desaprovisionar un Bare Metal

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un botón para copiar UUID en las redes y catálogos VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un botón para copiar UUID en las redes y catálogos OpenIaaS
- Adición de un botón para copiar UUID en un Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Añadida la visualización de las interfaces de red y las redes que se propagan en un bare metal
- Añadidas las acciones de encender, reiniciar y apagar un bare metal

### [Red](/network/network_overview)
- Posibilidad de visualizar las propagaciones en un Bare Metal de una red

## v4.12.0 — 2025-03-25

### [Console](/console)
- Posibilidad de eliminar una IP de la lista blanca desde la página de acceso

### Etiquetas
- Adición de etiquetas a las máquinas virtuales OpenIaaS

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Actualización de la recuperación de las recomendaciones de la API sobre las reglas de afinidad/antiafinidad de un HostCluster

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

### [Pedidos](/console/orders)
- Actualización de los nombres de las zonas de disponibilidad durante un pedido
- Modificación del mínimo de datastore durante el pedido de un datastoreCluster

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Cuando el campo label de hostCluster y datastoreCluster se establece en vacío, se aplicará el nombre técnico por defecto.

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Cuando el campo label de los pools se deja vacío, se aplicará el nombre técnico por defecto
- Adición de un mensaje emergente informativo en la página de catálogo y durante la importación de ISO para indicar que el formato XVA es compatible durante la creación de una máquina virtual

## v4.11.0 — 2025-03-10

### [Pedidos](/console/orders)
- Actualización de los tipos de red permitidos durante la creación de una AZ
- Actualización de los recursos mínimos a aprovisionar durante el pedido de una nueva zona de disponibilidad

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Visualización del nombre de la máquina virtual en la pestaña de la consola para VMware

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Adición de la gestión de etiquetas en los datastore cluster y host cluster de VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Permitir el despliegue de una máquina virtual vía importación XVA para OpenIaaS
- Adición de la gestión de etiquetas en los pools OpenIaaS
- Visualización del nombre de la máquina virtual en la pestaña de la consola para OpenIaaS

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Actualización de la información de CPU de los hosts y pools OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Añadido de IOPS/TO en los volúmenes baremetal

## v4.10.0 — 2025-03-04

### [Consola](/console)
- Actualización de los enlaces a la nueva documentación pública

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Adición de una alerta para informar a los usuarios en caso de duplicidad de direcciones MAC en la lista de máquinas virtuales y durante la creación o modificación de adaptadores de red
- Adición de una opción para forzar el apagado o reinicio de una máquina virtual
- La memoria ya no se incluirá de forma predeterminada al realizar un snapshot si la máquina virtual no está encendida
- Posibilidad de renombrar y redimensionar un disco
- Adición de la eliminación de ISO y plantillas desde la página de catálogo
- Adición de la posibilidad de eliminar el disco de configuración 'Cloud Init' durante el despliegue de una máquina virtual

## v4.9.1 — 2025-02-27

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Posibilidad de editar un adaptador de red en una máquina virtual encendida

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de restricciones sobre los caracteres permitidos en los nombres de las máquinas virtuales OpenIaaS

## v4.9.0 — 2025-02-21

### [Consola](/console)
- Hacer clicables los nombres en las tablas cuando exista una página vinculada
- Mejorar la apertura de las consolas para evitar la apertura de múltiples pestañas si hay varias ventanas abiertas en la misma página
- Mostrar un error al abrir una consola si el navegador no permite las redirecciones a la aplicación

### [Métricas](/console/metrics/concepts)
- Mostrar la unidad de la RAM en la página de estado de las máquinas virtuales

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Bloquear la creación de una máquina virtual si el espacio en los Block Storage seleccionados no es suficiente
- Limpiar las direcciones MAC predeterminadas durante la creación de una máquina virtual OpenIaaS

### [Stockage](/storage/oss)
- Poder copiar en el portapapeles un punto de conexión S3

## v4.8.0 — 2025-02-14

### [Comandos](/console/orders)
- Adición del comando de propagación de una red en Pools OpenIaaS
- Adición de los comandos de propagación de red en la página de todos los comandos

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Visualización del número de discos asignados y disponibles por controlador en una máquina virtual
- Actualización de las condiciones sobre el número de discos posibles a agregar en controladores SCSI Para Virtual según la versión de hardware de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de agregar opciones de Cloud Init al crear una máquina virtual OpenIaaS
- Visualización de los discos en la página de un Block Storage
- Posibilidad de actualizar la configuración del firmware de arranque de una máquina virtual OpenIaaS
- Posibilidad de clonar una máquina virtual OpenIaaS

### [Red](/network/network_overview)
- Actualización de la visualización de las propagaciones de una red y adición de propagaciones OpenIaaS
- Actualización de la creación de una red y posibilidad de propagar la red en la infraestructura OpenIaaS desde su creación

## v4.7.0 — 2025-02-03

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La exportación en OVF está bloqueada cuando la máquina virtual está cifrada

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Mostrar las relaciones de clusters de datastores y clusters de hosts en las páginas de Cómputo y Almacenamiento

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Modificación de la opción de inicio después de la restauración para un entorno SecNumCloud durante la restauración en modo clon o producción en un host o clúster alternativo

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Agregar los botones para montar y desmontar un ISO de OpenIaaS en la barra de acciones de una máquina virtual

### [Red](/network/network_overview)
- Mejora de la visualización de las propagaciones de red cuando las solicitudes de eliminación de propagaciones están en curso

## v4.6.0 — 2025-01-30

### [Console](/console)
- Eliminar los caracteres mostrados durante la autocompletación al agregar observadores en la creación de un ticket de soporte
- Actualización de la visualización del menú y de las páginas disponibles para las ofertas de VMware y OpenIaaS en un nuevo entorno sin zonas de disponibilidad aprovisionadas

### [Consola — Notificaciones](/console)
- Actualización de la visualización de las suscripciones a las notificaciones desde la página de perfil

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Agregar la posibilidad de cifrar una máquina virtual

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Adición de la exportación como plantilla de una máquina virtual

## v4.5.0 — 2025-01-17

### [Console](/console)
- Adición de la descripción a la creación y visualización de las whitelists
- Posibilidad de modificar la descripción de una whitelist

### [Órdenes](/console/orders)
- Adición de una orden para nueva Zona de Disponibilidad OpenIaaS
- Adición de una orden para Bare Metal
- Vincular un clúster de hipervisores a un clúster de almacenamiento

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mostrar el tamaño restante entre paréntesis en los árboles de selección de almacenamiento

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Adición del peor caso de asignación de memoria en un hostCluster VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Añadida la carga de ISO en los catálogos OpenIaaS
- Añadida la funcionalidad de mover las máquinas virtuales OpenIaaS
- Posibilidad de seleccionar discos y redes al crear una máquina virtual OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Adición de una página que lista los Bare Metal
- Adición de una página que lista los volúmenes Bare Metal
- Adición de una página con los detalles de un Bare Metal
- Adición de la posibilidad de abrir una consola Bare Metal

## v4.4.0 — 2025-01-13

### [Console](/console)
- Modificaciones técnicas realizadas durante el proceso de autenticación

## v4.3.0 — 2024-12-19

### [Consola — Actividades](/console)
- Adición de enlaces "acceder al recurso" en las actividades relacionadas con XOA y Object-Storage

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Adición de etiquetas y la IP de la máquina virtual a la exportación CSV de las máquinas virtuales

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Proponer exportar únicamente los elementos filtrados en la exportación CSV de los informes de copia de seguridad en la subpestaña de máquinas virtuales

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de plantillas de VM XOA desde la página de catálogos

### [Almacenamiento de objetos](/storage/oss)
- Poder crear y restablecer la clave de acceso global desde las cuentas de almacenamiento

## v4.2.0 — 2024-12-10

### [Consola](/console)
- Agregar redirecciones a la página de estado

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los elementos ya presentes en 'Mi catálogo' se muestran ahora en 'Catálogo público'
- Añadir redirecciones a los componentes mencionados en un elemento del catálogo de VMware
- Actualización de la visualización de la RAM en un clúster de hipervisores
- Eliminación de la opción de replicar automáticamente los nuevos discos que causaba errores
- Adición de validaciones en la replicación de una máquina virtual
- Adición de nuevas configuraciones extra PCIPassthru desde la configuración avanzada de una máquina virtual para la gestión de GPU
- Posibilidad de añadir un controlador PCI a las máquinas virtuales

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Visualización de recomendaciones y fallos de DRS desde un clúster de hipervisores
- Nuevo estado en los hipervisores y datastores cuando una solicitud de mantenimiento está en curso
- Adición de información sobre la GPU de un hipervisor

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Eliminar varias opciones de copia de seguridad no funcionales en máquinas virtuales en modo de prueba

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una página de copia de seguridad para la sección de copias de seguridad de OpenIaas que lista los errores, las políticas, los informes de copia de seguridad y permite la recuperación de máquinas virtuales eliminadas

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Adición de una página para listar las zonas de disponibilidad de OpenIaas
- Agregar una página de almacenamiento para la sección de OpenIaas
- Adición de una página de cómputo para la sección de OpenIaas

### [Alojamiento (Colocación)](/housing)
- Modificación de la información mostrada desde la página de periféricos

## v4.1.1 — 2024-11-18

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora de la edición de la memoria, la conversión se realiza hacia la unidad con el valor entero más cercano
- Al realizar un snapshot, el botón para guardar la RAM está desactivado cuando la máquina virtual está apagada
- Cuando se expanden varias máquinas virtuales, la lista de discos no se muestra inmediatamente

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Adición del botón de exportación CSV en la pestaña de máquinas virtuales de la página de informes de copia de seguridad

## v4.1.0 — 2024-11-13

### [Consola](/console)
- Posibilidad de enviar un archivo durante un feedback

### [Identité & Accès (IAM)](/console/iam)
- Desactivación de la posibilidad de eliminar un propietario

### [Pedidos](/console/orders)
- Añadida la gestión de creación, eliminación y edición de un datastore desde la página de pedidos
- Añadida la posibilidad de eliminar un Host

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de las actividades de instantáneas en la pestaña de instantáneas de una VM
- Visualización del tamaño real de las máquinas virtuales en la exportación CSV

### [IaaS VMware — Infrastructure](/iaas_vmware)
- En las páginas de computación y almacenamiento, el filtro por zonas de disponibilidad también se aplica a las pestañas de clúster
- Visualización de los porcentajes de utilización en las barras de consumo (CPU / RAM / Stockage)

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una validación sobre la presencia de políticas de copia de seguridad en la opción de inicio automático
- Adición de una opción para forzar el apagado/reinicio de las máquinas virtuales sin guest-tools instalados
- Mejora del mensaje de ejecución de una política OpenIaas en una máquina virtual específica

### [Bastion](/bastion)
- Adición de una validación en el campo Host de un equipo

## v4.0.3 — 2024-11-04

### [Console](/console)
- Mejoras y correcciones relacionadas con el nuevo diseño

## v4.0.2 — 2024-10-30

### [Console](/console)
- Mejoras y correcciones relacionadas con el nuevo diseño

## v4.0.1 — 2024-10-25

### [Console](/console)
- Mejoras y correcciones relacionadas con el nuevo diseño

## v4.0.0 — 2024-10-18

### [Console](/console)
- Nuevo diseño de la Consola
- Rediseño de las páginas de infraestructura y copia de seguridad

---

:::info[Historique antérieur]

El historial completo de las versiones anteriores a v4.0 (v1.0 a v3.38.1, de febrero de 2019 a octubre de 2024) está disponible en el [historial Git](https://github.com/Cloud-Temple/docs) del proyecto.

:::