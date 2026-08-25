---
title: Novedades del producto
sidebar_position: 999
---

# Novedades del producto & Evoluciones

> Este changelog lista únicamente las nuevas funcionalidades y evoluciones significativas de la plataforma Cloud Temple.
> Las correcciones de errores están excluidas intencionalmente.

## v4.47.0 — 2026-07-30

### [Console](/console)
- La documentación Swagger del módulo Comandos ya está disponible

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante el despliegue de una máquina virtual, ahora solo se ofrecen los elementos desplegables del catálogo (OVF y plantillas de máquina virtual)

### [VM Instances](/public_cloud/vm_instances)
- El costo estimado (por hora) se muestra ahora durante la creación de una instancia, con el desglose por componente (vCPU, RAM, discos)

### [VPC](/network/vpc)
- Al solicitar un nuevo VPC, ahora puede elegir un despliegue en un entorno dedicado (su infraestructura OpenIaaS) o en un entorno compartido (sujeto a la suscripción al producto VM Instances)

### [Object Storage](/storage/oss)
- Las mayúsculas ya no se permiten en el nombre de un bucket, conforme a las reglas de nomenclatura

### [Marketplace](/marketplace)
- Ahora puede desplegar una instancia de VM (Public Cloud) directamente desde la ficha de un producto de Marketplace

## 2026-07-27 — Bases de datos gestionadas (Preview)

### [MariaDB gestionado](/managed_mariadb)
- El modelo de despliegue Distributed se renombra como MultiAZ
- Los tipos de instancia ahora llegan hasta 6X-Large (32 vCPU y 128 Gio de memoria) y el almacenamiento ampliable en caliente hasta 512 Gio
- Publicación de recomendaciones de dimensionamiento que explican el ajuste de los parámetros del motor, con una advertencia sobre la activación de `performance_schema` por debajo del tipo X-Large
- La restauración a un punto en el tiempo ya no está disponible: las copias de seguridad se basan ahora en copias físicas diarias y exportaciones lógicas, sin archivado continuo de los registros de transacciones

### [PostgreSQL gestionado](/managed_postgresql)
- Nueva arquitectura basada en el operador Kubernetes CloudNative-PG y el plugin de respaldo Barman Cloud
- Tres modelos de despliegue: StandAlone en instancia única, Replica en tres instancias replicadas de forma asíncrona con failover automático, y Entreprise en tres instancias replicadas de forma síncrona en al menos dos nodos, garantizando la durabilidad sin bloqueos en caso de indisponibilidad de un nodo
- Despliegue declarativo mediante recursos personalizados de Kubernetes, utilizable a través de Terraform o Helm, y exportación nativa de métricas a Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organización](/console/iam/concepts)
- Ahora puede crear un tenant directamente desde la página Tenants, seleccionando los productos asociados

### [Console — Actividades](/console)
- Los registros de actividad ahora se pueden filtrar por módulo

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La dirección IP pública ahora se muestra en la lista de interfaces de red de una máquina virtual conectada a un VPC
- Una pestaña « Salud » ahora está disponible en el detalle de una máquina virtual, accesible desde la lista

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Ahora puede solicitar una réplica VMware entre zonas de disponibilidad

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- La lista de interfaces de red de una máquina virtual conectada a un VPC ahora muestra la dirección IP pública
- Una pestaña « Salud » ahora está disponible en el detalle de una máquina virtual abierta desde la lista

### [VM Instances](/public_cloud/vm_instances)
- La dirección IP pública ahora se muestra en la lista de adaptadores de red de una instancia conectada a un VPC
- Una pestaña « Salud » ahora está disponible en el detalle de una instancia, accesible desde la lista

### [Housing (Colocation)](/housing)
- Los pedidos de Colocation ya están disponibles: reserva de espacio, instalación y desmontaje de equipos
- Los pedidos de intervención de Colocation ya están disponibles: asistencia técnica y smart hands
- Los pedidos de Colocation de cableado y descableado (CPE) ya están disponibles
- Los pedidos de Colocation no admitidos por la consola ahora se indican claramente, con una invitación a contactar al soporte

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- La creación de una instancia se basa ahora en la selección de una imagen de sistema, que reemplaza a las plantillas

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Durante la configuración de los núcleos por socket de una máquina virtual OpenIaaS, la topología del procesador (número de sockets y núcleos por socket) se muestra ahora de forma explícita

### [LLMaaS](/llmaas)
- El monto mínimo de un crédito LLMaaS se reduce a 100 €

## v4.45.3 — 2026-07-21

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Al desplegar una máquina virtual, ahora se muestra un mensaje « Ningún modelo disponible » cuando el catálogo está vacío

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Durante el despliegue de una máquina virtual, ahora se muestra un mensaje « Ningún modelo disponible » cuando el catálogo está vacío

## v4.45.2 — 2026-07-17

### [Console](/console)
- Mejoras técnicas menores

## v4.45.0 — 2026-07-10

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante una operación bloqueante, las máquinas virtuales muestran ahora un estado explícito: copia de seguridad, instantánea o restauración en curso
- La edición del CPU se adapta ahora a la opción de adición de CPU en caliente (CPU hot add) y al estado de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Durante una operación bloqueante, las máquinas virtuales muestran ahora un estado explícito (copia de seguridad, instantánea o restauración en curso)
- El detalle de una máquina virtual muestra ahora un resumen de uso (CPU, RAM, almacenamiento)

### [VM Instances](/public_cloud/vm_instances)
- Las instancias muestran ahora un estado explícito (copia de seguridad, instantánea o restauración en curso) durante una operación bloqueante
- Las métricas de uso instantáneo (CPU, RAM, almacenamiento) se muestran ahora para cada instancia
- La unicidad del nombre se verifica ahora tanto en la creación como en la restauración de una instancia

### [Red](/network/network_overview)
- Durante una solicitud que incluya una etapa de propagación, las nuevas redes solo se crean en la validación final de la solicitud

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- El tipo de red (backbone privado) ahora se muestra en los adaptadores de red de una instancia, incluso sin la funcionalidad VPC

## v4.44.1 — 2026-07-02

### [Console](/console)
- Mejoras técnicas menores

## v4.44.0 — 2026-07-02

### [Pedidos](/console/orders)
- Las acciones de aprovisionamiento de infraestructura ahora tienen en cuenta los roles de negocio (cómputo, red, VPC, bare metal…) en complemento a los permisos de pedido

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- El seguimiento de la carga de archivos ISO y OVF ha sido mejorado y ahora es posible cancelar una carga en curso

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El seguimiento del envío de los archivos ISO y XVA ha mejorado y ahora es posible cancelar un envío en curso

### [VM Instances](/public_cloud/vm_instances)
- Los tamaños de disco ya no admiten valores decimales, ya sea al crear una instancia o al agregar o ampliar un disco
- Los indicadores de procesamiento de las instancias y sus recursos ahora se restablecen correctamente tras recargar la página

### [VPC](/network/vpc)
- Desde la tarjeta de red de una máquina virtual asociada a una red VPC, ahora puede acceder directamente al VPC correspondiente (VMware, OpenIaaS et VM Instances)
- Algunos comandos de VPC ahora pueden ejecutarse en paralelo: agregar una puerta de enlace durante la creación de una red privada (et inversement), y varias eliminaciones simultáneas de redes privadas

## 2026-06-30 — API de métricas

### [Métricas](/console/metrics/concepts)
- Un token de acceso ahora puede verificar la disponibilidad del servicio de métricas a través del endpoint de la API `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Console](/console)
- Los selectores de redes ahora diferencian visualmente las redes VPC y Backbone privado
- Un tutorial interactivo ya está disponible en la página Usuarios

### [Console — Actividades](/console)
- Ahora puede consultar el detalle de una actividad expandiendo su fila en las listas Recientes y Archivados
- Cada actividad cuenta ahora con una página de detalle dedicada, accesible mediante un enlace directo
- El detalle de una actividad es ahora accesible desde las notificaciones de éxito y error
- Ahora puede consultar el JSON completo de una actividad, copiarlo o descargarlo
- La lista de actividades archivadas ahora puede ordenarse por fecha de creación

### [Pedidos](/console/orders)
- La visualización del progreso de un pedido ha sido rediseñada

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los detalles de una máquina virtual se muestran ahora en una nueva vista
- Durante la modificación en caliente, se verifica la coherencia entre la CPU y los núcleos por socket: se muestran advertencias y no se aceptan valores inválidos

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Ahora puede solicitar la eliminación de un entorno IaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Una nueva vista de detalles está disponible para las máquinas virtuales
- Ahora puede filtrar la lista de máquinas virtuales por zona de disponibilidad (AZ)

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- La página de un Storage Repository ahora muestra la fecha de creación del snapshot de un disco

### [VM Instances](/public_cloud/vm_instances)
- El detalle de una instancia se muestra en una nueva vista
- El botón « Iniciar una copia de seguridad ahora » está ahora deshabilitado cuando la copia de seguridad no está disponible

### [VPC](/network/vpc)
- La descripción de la dirección IP pública ahora se muestra al asociarla a una red privada

### [Object Storage](/storage/oss)
- Ahora puede agregar una descripción a las direcciones IP autorizadas (whitelist) de un bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- La sección « Confidencialidad » se ha actualizado

### [Object Storage](/storage/oss)
- Ahora se indica la disponibilidad del certificado TLS wildcard para el acceso S3 en estilo host
- Ahora puede cargar un archivo en S3 desde una URL prefirmada
- Ahora puede activar el versionado en un bucket
- Ahora puede gestionar las versiones de un archivo

## v4.41.1 — 2026-06-11

### [Pedidos](/console/orders)
- El máximo disponible al realizar un pedido de Block Storage se ha actualizado

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Los mensajes relacionados con el inventario son ahora más precisos al solicitar hipervisores o aumentar la RAM de un clúster.

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al agregar un disco existente a una máquina virtual, el UUID del disco ahora se muestra cuando varios discos tienen el mismo nombre

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Ahora se muestra una advertencia al solicitar la actualización del host maestro de un pool

### [VPC](/network/vpc)
- La solicitud de un VPC ahora requiere que se haya desplegado una zona de disponibilidad OpenIaaS

## 2026-06-06 — Servidor MCP de la Console

- Recurso de ayuda para la autenticación que describe la obtención de un token de acceso personal y el formato de encabezado esperado; los errores de autenticación ahora indican la causa y los pasos a seguir
- Cambio de configuración con impacto: la URL de la API indicada en la configuración del servidor debe incluir ahora el segmento `/api`, que debe actualizarse antes del despliegue de esta versión para evitar errores 404. La URL se valida al inicio y se admite la infraestructura de claves pública y privada

## 2026-06-05 — Servidor MCP de la Console

- Consulta del nombre y la versión del servidor desplegado

## v4.40.0 — 2026-06-02

### [Console](/console)
- Un recorrido de bienvenida interactivo ya está disponible

### [Console — Organización](/console/iam/concepts)
- El gestor de costos ya está disponible en la vista de organización
- La vista de organización cuenta ahora con una visualización dedicada

### [Pedidos](/console/orders)
- La etapa de red ya no aparece en los pedidos cuando solo está activado el producto VPC

### [Soporte](/console)
- Los planes y los contactos de soporte han sido actualizados

### [Tickets de soporte](/console)
- Las funcionalidades de servicios gestionados han sido retiradas de los tickets de soporte

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Las funcionalidades de la biblioteca de contenido público han sido retiradas

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El valor predeterminado del paso CloudInit se ha actualizado para los despliegues OpenIaaS desde el Marketplace
- El envío de caracteres especiales desde el portapapeles de la consola de una máquina virtual ha sido mejorado

### [Red](/network/network_overview)
- Ahora puede eliminar la descripción de una dirección IP
- Ahora puede completar el campo `description` al crear una red virtual
- Ahora puede completar el campo `description` al modificar una red virtual

### [VPC](/network/vpc)
- La descripción de una IP flotante VPC se muestra ahora
- Ahora puede modificar la descripción de una IP flotante VPC

## 2026-05-25 — Servidor MCP de la Console

- Cada denegación de permiso indica ahora el producto correspondiente y el nombre exacto del permiso que debe activarse en el token de acceso personal

## 2026-05-24 — Servidor MCP de la Console

- Gestión del soporte desde un agente: lista y detalle de los tickets, creación, comentario, cierre, consulta de los mantenimientos programados y sus categorías, incidentes del tenant e incidentes de la plataforma
- Opción de destrucción después del inicio en el despliegue desde el Marketplace
- Flujo guiado de despliegue de una máquina virtual Linux
- Recursos consultables directamente: glosario de términos IaaS OpenSource, topología de un pool que reúne hosts, repositorios de almacenamiento, redes e indicadores en una sola vista, y catálogo del Marketplace filtrado por IaaS OpenSource

## 2026-05-23 — Servidor MCP de la Console

- Navegación del catálogo Marketplace con filtros, y fichas técnicas IaaS OpenSource (XVA) y VMware (OVF) que detallan procesadores, memoria, discos y nombres exactos de las interfaces de red
- Despliegue de una máquina virtual IaaS OpenSource desde un elemento del catálogo, idempotente por nombre
- Control de la alimentación de las máquinas virtuales IaaS OpenSource — encendido, apagado, reinicio, pausa, suspensión y reanudación — idempotente por estado
- Seguimiento de operaciones largas a través de las actividades

## 2026-05-22 — Servidor MCP de la Console

- Consulta extendida del IaaS OpenSource: pools, hosts, máquinas virtuales, snapshots, adaptadores de red con detección de direcciones MAC duplicadas, discos virtuales y estado de replicación, siendo todas estas operaciones de solo lectura
- Filtros aplicables en el servidor sobre el conjunto de estas listas

## v4.39.2 — 2026-05-22

### [Red](/network/network_overview)
- Ahora puede eliminar el registro PTR de una dirección IP pública o de una dirección IP de interconexión

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Las reglas de nomenclatura de las instantáneas de máquina virtual han sido modificadas

### [Bare Metal](/iaas_bare-metal)
- Ahora puede modificar la descripción de un servidor

### [Red](/network/network_overview)
- Ahora puede modificar el registro PTR de una dirección IP de interconexión

## v4.39.0 — 2026-04-23

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los discos existentes ahora se muestran al agregar un nuevo disco
- Al mover (vMotion) una máquina virtual en modo « solo recurso de cálculo », ahora es posible elegir un clúster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Los discos existentes ahora se muestran al agregar un nuevo disco

### [VM Instances](/public_cloud/vm_instances)
- La lista de instancias de VM ahora se puede exportar en formato CSV
- Se ha revisado la visualización de la frecuencia de una política de copia de seguridad

### [Bare Metal](/iaas_bare-metal)
- La selección de redes es ahora obligatoria durante la propagación de una red en un Bare Metal

## 2026-04-20 — Bases de datos gestionadas (Preview)

### [MariaDB gestionado](/managed_mariadb)
- Publicación de los parámetros del motor asociados a cada plantilla de instancia : `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` y `table_open_cache`
- Revisión de las plantillas de instancia : el límite se reduce a 3X-Large (8 vCPU y 32 GiB de memoria) y el almacenamiento máximo ampliable en caliente pasa de 512 GiB a 128 GiB

### [PostgreSQL gestionado](/managed_postgresql)
- Publicación de los parámetros del motor asociados a cada tipo de instancia: `shared_buffers`, `effective_cache_size`, `work_mem` y `max_connections`
- Revisión de los tipos de instancia: el límite se reduce a 3X-Large (8 vCPU y 32 Gio de memoria) y el almacenamiento máximo extensible en caliente pasa de 512 Gio a 128 Gio

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- Las redes propuestas ahora se filtran al crear una instancia, así como al modificar un adaptador de red

## v4.38.0 — 2026-04-17

### [Identidad y acceso (IAM)](/console/iam)
- Seis nuevos permisos están disponibles : `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` y `public_cloud_vm_instances_console_access`
- El nombre del producto correspondiente ahora aparece al inicio de la descripción de cada permiso

### [Gestor de costes](/console/billing/concepts)
- La interfaz del gestor de costos ha sido mejorada
- La unidad mostrada en los gráficos de consumo ha sido actualizada

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante el despliegue de una máquina virtual, se ha revisado el paso de selección de una imagen del Marketplace.

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Ahora puede alternar la vista de la página de catálogo entre cuadrícula y tabla
- La etapa de selección de una imagen de Marketplace durante el despliegue de una máquina virtual ha sido actualizada

### [VM Instances](/public_cloud/vm_instances)
- El panel de control ahora muestra el uso de las cuotas de VM Instances
- Una nueva página presenta la lista de VM Instances
- Ahora puede crear una nueva instancia
- Ahora puede consultar y gestionar los discos, los adaptadores de red y las instantáneas de una instancia
- Ahora puede actualizar las capacidades de una instancia y modificar su estado
- Ahora puede acceder a la consola de una instancia

### [LLMaaS](/llmaas)
- La visualización de los precios en la vista de consumo y el formulario de recarga de crédito han sido actualizados

## 2026-04-15 — Bases de datos gestionadas (Preview)

### [MariaDB gestionado](/managed_mariadb)
- Apertura en Preview de MariaDB Managé : modelos StandAlone y Distributed en clúster de tres nodos detrás de un proxy, almacenamiento replicado en tres zonas de disponibilidad y compromiso de disponibilidad del 99,9 %

### [PostgreSQL gestionado](/managed_postgresql)
- Apertura en fase Preview de PostgreSQL Administrado: modelos StandAlone y Distributed en clúster de tres nodos detrás de un proxy, replicación síncrona multi-zona sin pérdida de datos y restauración a un punto en el tiempo

## v4.37.0 — 2026-04-02

### [Gestor de costes](/console/billing/concepts)
- Adición del monto proyectado en la página de consumo para el gráfico y la tendencia
- Mejora visual cuando hay un error o muy pocos datos sobre el consumo del mes en curso

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora del formulario para desplegar una máquina virtual desde un elemento del catálogo
- Añadida la posibilidad de cambiar el tipo de visualización (cuadrícula o tabla) desde la página del catálogo

## v4.36.0 — 2026-03-27

### [Console](/console)
- Actualización de los gráficos de métricas y consumo

### [Gestor de costes](/console/billing/concepts)
- Adición de la página del gestor de costos
- Posibilidad de visualizar los costos del mes en curso
- Posibilidad de visualizar los costos en un intervalo de fechas y comparar las tendencias

### [Pedidos](/console/orders)
- Bloqueo del desaprovisionamiento de un clúster de hipervisores cuando un clúster de almacenamiento está adjunto

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Añadido de filtros y ordenación en la lista de discos desde los detalles de un Block Storage

### [VPC](/network/vpc)
- Mejora de la interfaz en la carga de datos en los formularios

## v4.35.4 — 2026-03-18

### [Console](/console)
- Mejora de la reconexión a los websockets

### [Soporte](/console)
- Adición de una solución de respaldo para la creación de un ticket de soporte cuando los websockets están desconectados

## v4.35.3 — 2026-03-17

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Actualización de la recuperación de los discos al cargar los réplicas desde la pestaña Replicación

## v4.35.0 — 2026-03-11

### [Pedidos](/console/orders)
- Adición del comando de eliminación de un mapeo cpool/spool
- Adición del comando de desaprovisionamiento de red privada VPC
- Modificaciones en el comando de desaprovisionamiento de un volumen Bare Metal, es posible solicitar la eliminación desde la lista de volúmenes
- Adición del comando de eliminación de mapeo de volumen Bare Metal
- Adición del comando de desaprovisionamiento de VPC
- Bloqueo del desaprovisionamiento de un datastore si es el último de un clúster de datastore

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de agregar un límite de RAM a una máquina virtual

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Actualización de Multi vMotion de VMware para permitir mover las VMs de un clúster a otro

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de la posibilidad de actualizar un host
- Visualización de la información de actualizaciones de un host

### [Red](/network/network_overview)
- Desactivación del botón de eliminación de propagación de red cuando no se entrega ninguna propagación

### [LLMaaS](/llmaas)
- Visualización del consumo agrupado por tipo de tokens

## v4.34.0 — 2026-02-18

### [Console](/console)
- Actualización importante del motor de renderizado de la aplicación
- Los menús VMware y OpenIaaS no se muestran cuando solo está activado el módulo de métricas

### [Métricas](/console/metrics/concepts)
- Posibilidad de exportar a CSV desde las páginas Métricas de VMware y OpenIaaS

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante un movimiento de máquina virtual, no es posible seleccionar el mismo host de destino que el host actual de la máquina virtual
- Adición del botón 'Nuevo catálogo' en la página Catálogo VMware

## 2026-02-04 — Servidor MCP de la Console

- Consulta de los modelos de máquinas virtuales, redes, hosts y repositorios de almacenamiento IaaS OpenSource

## 2026-02-03 — Servidor MCP de la Console

- Puesta a disposición del servidor MCP (Model Context Protocol) de la Consola, autenticado mediante token de acceso personal
- Consulta y gestión de las máquinas virtuales VMware desde un agente: lista, detalles, centros de datos virtuales, encendido y apagado

## v4.33.0 — 2026-01-21

### [Pedidos](/console/orders)
- Adición del comando de eliminación de una propagación de red en OpenIaaS

### [Métricas](/console/metrics/concepts)
- Adición de filtros para las páginas de métricas de VMWare y OpenIaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Añadida la página de métricas 'Máquinas Virtuales'
- Añadida la página de detalles de métricas para cada VM

## v4.32.0 — 2026-01-14

### [Soporte](/console)
- Actualización del modal de cierre de un ticket de soporte

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Al asignar una política de copia de seguridad a un disco, ahora se propone inventariar el disco si no es reconocido por la solución de copia de seguridad

### [Bare Metal](/iaas_bare-metal)
- La eliminación de un volumen BFS en un Bare Metal ahora está bloqueada; el volumen se eliminará al eliminar el Bare Metal
- Al solicitar un Bare Metal, el primer volumen ahora se renombra como 'volumen BFS'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Actualización de las explicaciones de las ventanas emergentes sobre las opciones disponibles durante la restauración de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Los snapshots vinculados a las políticas de copia de seguridad son ahora visibles
- Visualización del Host vinculado a la ubicación de almacenamiento de un ISO durante la carga y desde la página de catálogo

### [Object Storage](/storage/oss)
- Visualización de una tarjeta explicativa desde la pestaña de MPU incompletos cuando la IP de la Consola no está autorizada, impidiendo la visualización de la pestaña

### [Marketplace](/marketplace)
- Visualización de la tarjeta de error al acceder a una página de la marketplace que no existe

## v4.30.1 — 2025-12-16

### [Console](/console)
- Mejora en la visualización de errores vacíos mostrando por defecto el estado HTTP devuelto

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Posibilidad de asociar una IP estática a una dirección MAC personalizada

### [LLMaaS](/llmaas)
- En las métricas de consumo, filtrado de series con valores en 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Mejora de la sincronización de las acciones en las páginas VPC
- Adición de la asociación de una IP estática a una IP pública desde la lista de IPs estáticas

### [Almacenamiento](/storage/oss)
- Agregación de MPU incompletos desde la página de un bucket
- Posibilidad de eliminar un MPU incompleto

## v4.28.0 — 2025-11-21

### [Console](/console)
- Adición de la posibilidad de mostrar mensajes informativos globales visibles en toda la aplicación

### [Pedidos](/console/orders)
- Posibilidad de solicitar una adición de crédito LLMaaS para el tenant
- Posibilidad de solicitar un VPC
- Posibilidad de solicitar una red privada dentro de un VPC
- Posibilidad de solicitar una IP pública para el producto VPC
- Posibilidad de activar la gateway para un VPC
- Adición de la posibilidad de solicitar la eliminación de un tenant

### [Métricas](/console/metrics/concepts)
- Mejora en la visualización de los tooltips en los gráficos de métricas: ahora es posible hacer clic en un punto para fijar el tooltip y consultar todos los datos

### [Red](/network/network_overview)
- Agrupación de las páginas de Redes e Internet bajo un único producto: Backbone privado
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
- Adición de una pestaña Facturación en la página LLMaaS para los tenants con el prepago activado
- Visualización del crédito restante para los tenants en modo prepago, en el panel de control y desde la pestaña Facturación

## v4.27.0 — 2025-11-12

### [Pedidos](/console/orders)
- Se ha añadido una verificación del stock disponible al solicitar recursos
- Se ha añadido un filtro por tipo de pedido y por producto en la lista de pedidos

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora de la consola de las máquinas virtuales. Mejor gestión del teclado y adición de un portapapeles

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Adición de una alerta en el dashboard para las VSnap de copia de seguridad SPP con una ocupación demasiado elevada

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Mejora de la consola de las máquinas virtuales. Mejor gestión del teclado y adición de un portapapeles

### [Marketplace](/marketplace)
- Añadida la posibilidad de mostrar los detalles técnicos de una imagen

## v4.26.5 — 2025-11-04

### [Console](/console)
- Mejora del tamaño de los gráficos del panel de control al redimensionar la ventana

## v4.26.3 — 2025-10-31

### [Métricas](/console/metrics/concepts)
- Modificación del nombre de las exportaciones de métricas presentadas en los gráficos

## v4.26.0 — 2025-10-22

### [Console](/console)
- Añadido un botón para copiar el UUID del perímetro actual desde el perfil de usuario
- Rediseño completo del Panel de control
- Añadida la reconexión automática al seguimiento de actividades cuando se interrumpe la conexión

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
- Al agregar un disco OpenIaaS, los volúmenes de almacenamiento que no pertenecen al Pool de la máquina virtual ahora se filtran
- Al realizar un snapshot, la opción para capturar la memoria ahora está desmarcada de forma predeterminada

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Adición de la posibilidad de ejecutar una copia de seguridad desde la pestaña de copias de seguridad de una máquina virtual OpenIaaS

### [Red](/network/network_overview)
- Eliminación de la restricción que impedía la selección de múltiples tipos de redes en la página de redes virtuales

### [Object Storage](/storage/oss)
- Optimización de la recuperación de archivos de un bucket

### [PaaS OpenShift](/paas_openshift)
- Añadida una página que lista los clústeres OpenShift
- Añadida una página de detalles de un clúster OpenShift

### [Marketplace](/marketplace)
- Añadido de un filtro por UUID y posibilidad de copiar el UUID de un elemento

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Actualización del uso de la configuración avanzada y las propiedades OVF durante el despliegue de una máquina virtual VMware

## v4.24.0 — 2025-09-24

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de desplegar una imagen de máquina virtual desde la lista de máquinas virtuales

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de desplegar una imagen de máquina virtual desde la lista de máquinas virtuales

### [Red](/network/network_overview)
- Adición de una validación para bloquear la eliminación de la compartición de una red si la red está propagada a otro Tenant

### [Marketplace](/marketplace)
- Adición del producto Marketplace
- Adición de una página que lista las soluciones disponibles en el catálogo
- Adición de una página para consultar los detalles de una solución
- Posibilidad de desplegar una imagen de máquina virtual en un entorno OpenIaaS o VMware desde los detalles de una solución
- Posibilidad de contactar a un socio para una solución de servicios gestionados

## v4.23.0 — 2025-09-12

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición del soporte para 4 nuevos valores extra-configs

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- No mostrar la alerta HA en las VMs afectadas cuando la ISO local no está montada
- Al agregar o redimensionar un disco, indicar si el SR asociado se utiliza para una configuración de replicación

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Adición del nombre de la AZ al informe de copia de seguridad

### [Object Storage](/storage/oss)
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
- Modificación de las alertas relacionadas con la configuración del formato de disco seleccionada, durante un VMotion que incluye el almacenamiento

## v4.22.0 — 2025-09-02

### [Pedidos](/console/orders)
- Se ha añadido el comando de eliminación de propagación de red desde la página de todos los comandos; todos los comandos disponibles ahora están accesibles desde esta página.

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Actualización de las condiciones sobre el cambio del formato de disco al mover una máquina virtual y adición de información sobre el formato de disco actual durante una configuración por disco

## v4.21.0 — 2025-08-22

### [Console](/console)
- Actualización de la interfaz cuando no se crean/provisionan datos o cuando se produce un error al obtener información.

### [Soporte](/console)
- Apertura de las modales de soporte con el servicio asociado preseleccionado
- Adición de una insignia en el menú y la barra de navegación cuando un ticket de soporte requiere una respuesta

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de la posibilidad de exportar en CSV la lista de réplicas de VMware
- Mejora del control deslizante de selección de RAM en ciertos comandos
- Adición de la gestión de las opciones Static differed and immediate para vMotion

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Bloqueo de la eliminación de un clúster no vacío o con hosts/datastores no en mantenimiento

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la posibilidad de exportar en CSV la lista de réplicas OpenIaaS y las políticas asociadas
- Adición de detalles sobre las herramientas utilizadas por las máquinas virtuales (pvDrivers, managementAgent y tools)
- Adición de verificaciones para la alta disponibilidad (HA)

### [Red](/network/network_overview)
- Modificación de la selección de una dirección IPv4 con una lista disponible

## v4.20.0 — 2025-07-29

### [Pedidos](/console/orders)
- Adición de información sobre el stock limitado y agotado de los recursos de cómputo al solicitar una nueva zona de disponibilidad

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de una opción de VMware Tools para sincronizar la hora con el host
- Actualización de las condiciones sobre el cifrado de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Eliminación de la información de última ejecución de las políticas de replicación que causaban lentitud
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

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un filtro de replicación en la lista de máquinas virtuales

### [Red](/network/network_overview)
- Actualización de la página de Internet con la adición de la gestión de IPv6

## v4.18.0 — 2025-07-15

### [Console](/console)
- Actualización de la visualización cuando no se crea/provisiona ningún dato o cuando se produce un error al obtener información.

### [Pedidos](/console/orders)
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
- Adición de traducciones al inglés en la página de informes de consumo del menú de pedidos

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
- Adición de un mensaje de advertencia en caso de falta de espacio en disco en un Block Storage (90% utilizado) y aviso al ejecutar comandos

### [Object Storage](/storage/oss)
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
- Adición de la posibilidad de asignar una política de copia de seguridad al iniciar una máquina virtual si no tiene ninguna.

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de acciones disponibles en un disco desde un Block Storage

### [Bare Metal](/iaas_bare-metal)
- Adición de direcciones MAC a la tabla de interfaces de un Bare Metal
- Adición de una página sobre los detalles de un volumen Bare Metal

## v4.14.0 — 2025-04-28

### [Console](/console)
- Posibilidad de fijar páginas en el menú
- Actualización del renderizado de la documentación de la API

### [Pedidos](/console/orders)
- Posibilidad de solicitar la eliminación de un Block Storage OpenIaaS
- Posibilidad de solicitar la adición de un Block Storage a un Pool OpenIaaS
- Posibilidad de solicitar la eliminación de un Host OpenIaaS
- Adición de la información del producto afectado en la lista de pedidos
- Posibilidad de solicitar la adición de un Host a un pool OpenIaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de poner un Host en mantenimiento
- Posibilidad de editar la descripción de un modelo
- Posibilidad de seleccionar un Host al iniciar una máquina virtual
- Adición de una regla de unicidad en el nombre de las máquinas virtuales OpenIaaS

## v4.13.0 — 2025-04-08

### [Console](/console)
- Adición de estadísticas e información de contacto en la página de Soporte

### [Pedidos](/console/orders)
- Rediseño de la visualización de los detalles de una orden
- Rediseño de la visualización de las opciones de órdenes
- Actualización de la visualización para solicitar el primer baremetal cuando no hay ninguno
- Actualización del pedido de un Bare Metal con la selección de la propagación de redes en las interfaces del Bare Metal
- Posibilidad de propagar un VLAN en un Bare Metal
- Posibilidad de agregar un volumen a un baremetal
- Posibilidad de desaprovisionar un volumen de un Bare Metal
- Posibilidad de desaprovisionar un Bare Metal

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un botón para copiar el UUID en las redes y catálogos VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un botón para copiar el UUID en las redes y catálogos OpenIaaS
- Adición de un botón para copiar el UUID en un Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Adición de la visualización de las interfaces de red y las redes propagadas en un bare metal
- Agregar las acciones de encender, reiniciar y apagar un bare metal

### [Red](/network/network_overview)
- Posibilidad de visualizar las propagaciones en un servidor Bare Metal de una red

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
- Actualización del mensaje de error al acceder a los archivos de un bucket de Object Storage

## v4.11.1 — 2025-03-12

### [Pedidos](/console/orders)
- Actualización de los nombres de las zonas de disponibilidad durante un pedido
- Modificación del mínimo de datastore durante el pedido de un datastoreCluster

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Cuando el campo label de hostCluster y datastoreCluster se deja vacío, se aplicará el nombre técnico por defecto.

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Cuando el campo label de los pools se deja vacío, el nombre técnico se aplicará por defecto
- Adición de una ventana emergente informativa en la página de catálogo y durante la importación de ISO para indicar que el formato XVA es soportado durante la creación de una máquina virtual

## v4.11.0 — 2025-03-10

### [Pedidos](/console/orders)
- Actualización de los tipos de redes permitidos durante la creación de una AZ
- Actualización de los recursos mínimos a aprovisionar al solicitar una nueva zona de disponibilidad

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Visualización del nombre de la máquina virtual en la pestaña de la consola para VMware

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Adición de la gestión de etiquetas en los datastore cluster y host cluster de VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Permitir el despliegue de una máquina virtual mediante importación XVA para OpenIaaS
- Adición de la gestión de etiquetas en los pools OpenIaaS
- Visualización del nombre de la máquina virtual en la pestaña de la consola para OpenIaaS

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Actualización de la información de CPU de los hosts y pools OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Añadido de IOPS/TO en los volúmenes baremetal

## v4.10.0 — 2025-03-04

### [Console](/console)
- Actualización de los enlaces a la nueva documentación pública

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una alerta para informar a los usuarios en caso de direcciones MAC duplicadas en la lista de máquinas virtuales y durante la creación o modificación de adaptadores de red
- Adición de una opción para forzar el apagado o el reinicio de una máquina virtual
- La memoria ya no se incluirá de forma predeterminada al realizar un snapshot si la máquina virtual no está encendida
- Posibilidad de renombrar y redimensionar un disco
- Adición de la eliminación de ISO y plantillas desde la página de catálogo
- Adición de la posibilidad de eliminar el disco de configuración 'Cloud Init' durante el despliegue de una máquina virtual

## v4.9.1 — 2025-02-27

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de editar un adaptador de red en una máquina virtual encendida

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de restricciones sobre los caracteres permitidos en los nombres de las máquinas virtuales OpenIaaS

## v4.9.0 — 2025-02-21

### [Console](/console)
- Hacer clicables los nombres en las tablas cuando exista una página enlazada
- Mejorar la apertura de las consolas para evitar la apertura de múltiples pestañas si hay varias ventanas abiertas en la misma página
- Mostrar un error al abrir una consola si el navegador no permite las redirecciones a la aplicación

### [Métricas](/console/metrics/concepts)
- Mostrar la unidad de RAM en la página de salud de las máquinas virtuales

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Bloquear la creación de una máquina virtual si el espacio en los Block Storage seleccionados no es suficiente
- Vaciar las direcciones MAC predeterminadas durante la creación de una máquina virtual OpenIaaS

### [Almacenamiento](/storage/oss)
- Poder copiar en el portapapeles un punto de conexión S3

## v4.8.0 — 2025-02-14

### [Pedidos](/console/orders)
- Adición de la orden de propagación de una red en pools OpenIaaS
- Adición de las órdenes de propagación de red en la página de todas las órdenes

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Visualización del número de discos asignados y disponibles por controlador en una máquina virtual
- Actualización de las condiciones sobre el número de discos que es posible agregar en controladores SCSI Paravirtual según la versión de hardware de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de agregar opciones de Cloud Init durante la creación de una máquina virtual OpenIaaS
- Visualización de los discos en la página de un Block Storage
- Posibilidad de actualizar la configuración del firmware de arranque de una máquina virtual OpenIaaS
- Posibilidad de clonar una máquina virtual OpenIaaS

### [Red](/network/network_overview)
- Actualización de la visualización de las propagaciones de una red y adición de propagaciones OpenIaaS
- Actualización de la creación de una red y posibilidad de propagar la red en la infraestructura OpenIaaS desde su creación

## v4.7.0 — 2025-02-03

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La exportación en OVF está bloqueada cuando la máquina virtual está cifrada

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Mostrar las relaciones de clusters de datastores y clusters de hosts en las páginas de Cómputo y Almacenamiento

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Modificación de la opción de arranque después de la restauración para un entorno SecNumCloud durante la restauración en modo clon o producción en un host o clúster alternativo

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Agregar los botones para montar y desmontar un ISO de OpenIaaS en la barra de acciones de una máquina virtual

### [Red](/network/network_overview)
- Mejora de la visualización de las propagaciones de red cuando hay solicitudes de eliminación de propagaciones en curso

## v4.6.0 — 2025-01-30

### [Console](/console)
- Eliminar los caracteres mostrados durante la autocompletación al agregar observadores en la creación de un ticket de soporte
- Actualización de la visualización del menú y de las páginas disponibles para las ofertas de VMware y OpenIaaS en un nuevo entorno sin zonas de disponibilidad aprovisionadas

### [Console — Notificaciones](/console)
- Actualización de la visualización de las suscripciones a notificaciones desde la página de perfil

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Agregar la posibilidad de cifrar una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la exportación como modelo de una máquina virtual

## v4.5.0 — 2025-01-17

### [Console](/console)
- Adición de la descripción a la creación y visualización de las whitelists
- Posibilidad de modificar la descripción de una whitelist

### [Pedidos](/console/orders)
- Adición de una orden para una nueva Zona de Disponibilidad OpenIaaS
- Adición de una orden para Bare Metal
- Vincular un clúster de hipervisores a un clúster de almacenamiento

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mostrar el tamaño restante entre paréntesis en los árboles de selección de almacenamiento

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Adición del peor caso de asignación de memoria en un hostCluster VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la carga de ISO en los catálogos OpenIaaS
- Adición de la migración de las máquinas virtuales OpenIaaS
- Posibilidad de seleccionar discos y redes al crear una máquina virtual OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Añadido de una página que lista los Bare Metal
- Añadido de una página que lista los volúmenes Bare Metal
- Añadido de una página con los detalles de un Bare Metal
- Añadida la posibilidad de abrir una consola Bare Metal

## v4.4.0 — 2025-01-13

### [Console](/console)
- Modificaciones técnicas realizadas durante el proceso de autenticación

## v4.3.0 — 2024-12-19

### [Console — Actividades](/console)
- Adición de enlaces "acceder al recurso" en las actividades relacionadas con XOA y Object-Storage

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de etiquetas y la IP de la máquina virtual a la exportación CSV de las máquinas virtuales

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Proponer exportar únicamente los elementos filtrados en la exportación CSV de los informes de respaldo en la subpestaña máquinas virtuales

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de plantillas de VM XOA desde la página de catálogos

### [Object Storage](/storage/oss)
- Poder crear y restablecer la clave de acceso global desde las cuentas de almacenamiento

## v4.2.0 — 2024-12-10

### [Console](/console)
- Agregar redirecciones a la página de estado

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los elementos ya presentes en 'Mi catálogo' ahora se siguen mostrando en 'Catálogo público'
- Añadir redirecciones a los componentes mencionados en un elemento del catálogo de VMware
- Actualización de la visualización de la RAM en un clúster de hipervisores
- Eliminación de la opción de replicar automáticamente los nuevos discos que provocaba errores
- Adición de validaciones en la replicación de una máquina virtual
- Adición de nuevas configuraciones extra PCIPassthru desde la configuración avanzada de una máquina virtual para la gestión de GPU
- Posibilidad de agregar un controlador PCI a las máquinas virtuales

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Visualización de las recomendaciones y fallos de DRS desde un clúster de hipervisores
- Nuevo estado en los hipervisores y datastores cuando una solicitud de mantenimiento está en curso
- Adición de información sobre la GPU de un hipervisor

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Eliminar varias opciones de copia de seguridad no funcionales en máquinas virtuales en modo de prueba

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una página de copia de seguridad para la sección de copias de seguridad de OpenIaas que lista los errores, las políticas, los informes de copia de seguridad y permite la recuperación de máquinas virtuales eliminadas

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de una página para listar las zonas de disponibilidad de OpenIaas
- Agregar una página de almacenamiento para la parte OpenIaas
- Adición de una página de cómputo para la parte OpenIaas

### [Housing (Colocation)](/housing)
- Modificación de la información mostrada desde la página de periféricos

## v4.1.1 — 2024-11-18

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora en la edición de la memoria, la conversión se realiza hacia la unidad con el último valor entero
- Durante un snapshot, el botón para guardar la RAM está deshabilitado cuando la máquina virtual está apagada
- Cuando se expanden varias máquinas virtuales, la lista de discos no se muestra de inmediato

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Adición del botón de exportación CSV en la pestaña de máquinas virtuales de la página de informes de copia de seguridad

## v4.1.0 — 2024-11-13

### [Console](/console)
- Posibilidad de enviar un archivo al proporcionar feedback

### [Identidad y acceso (IAM)](/console/iam)
- Desactivación de la posibilidad de eliminar un propietario

### [Pedidos](/console/orders)
- Añadida la gestión de adición, eliminación y edición de un datastore desde la página de pedidos
- Añadida la posibilidad de eliminar un Host

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de las actividades de instantáneas en la pestaña de instantáneas de una VM
- Visualización del tamaño real de las máquinas virtuales en la exportación CSV

### [IaaS VMware — Infraestructura](/iaas_vmware)
- En las páginas de cómputo y almacenamiento, el filtro por zonas de disponibilidad también se aplica a las pestañas de clúster
- Visualización de los porcentajes de uso en las barras de consumo (CPU / RAM / Stockage)

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Añadida una validación sobre la presencia de políticas de copia de seguridad en la opción de inicio automático
- Añadida una opción para forzar el apagado/reinicio de las máquinas virtuales sin guest-tools instalados
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

:::info[Historial anterior]

El historial completo de las versiones anteriores a v4.0 (v1.0 a v3.38.1, de febrero de 2019 a octubre de 2024) está disponible en el [historial Git](https://github.com/Cloud-Temple/docs) del proyecto.

:::
