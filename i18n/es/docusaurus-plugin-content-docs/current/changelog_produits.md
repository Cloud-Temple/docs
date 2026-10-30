---
title: Novedades de productos
sidebar_position: 999
---

# Novedades de productos & evoluciones

> Este changelog lista las nuevas funcionalidades y evoluciones significativas de la plataforma Cloud Temple.
> Las correcciones de errores están incluidas a partir de la versión 4.50.0.

## v5.0.0 — 2026-10-15

### [Consola](/console)
- Nueva consola: rediseño completo de la interfaz, con un nuevo diseño y un tema oscuro
- Elección del tema claro u oscuro desde el perfil, con vistas previas
- Visita guiada de la nueva consola en el primer inicio de sesión
- Posibilidad de volver a la versión anterior de la consola desde la ventana « Novedades », mientras siga disponible
- Navegación: los productos están agrupados en una sola sección, el Marketplace se coloca bajo el Gestor de costes y « Public Cloud » se convierte en « VM Instances »
- Mención SecNumCloud en la cabecera de las páginas de los productos cualificados
- Los formularios en varias etapas ya no se cierran con un clic fuera de la ventana
- Corrección del cierre de las ventanas que muestran un secreto una sola vez durante su creación
- Nueva página de detalle de las máquinas virtuales VMware, OpenIaaS y VM Instances, que reúne información, consumo y últimas actividades
- Menú de acciones en cada fila de la lista de máquinas virtuales

### [VM Instances](/public_cloud/vm_instances)
- La información de una máquina virtual sigue siendo consultable durante una operación en curso

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Páginas Cómputo y Almacenamiento rediseñadas: cabecera de clúster con su consumo y nuevas fichas de host y datastore
- Corrección de las cargas duplicadas al hacer clic en un clúster y de la URL modificada al volver a « Todos »

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Páginas Cómputo y Almacenamiento rediseñadas: cabecera de pool con su consumo y nuevas fichas de host, block storage y zona de disponibilidad

### [Object Storage](/storage/oss)
- Explorador de archivos rediseñado: árbol de directorios, panel de detalle, arrastrar y soltar y seguimiento de los envíos en la lista
- Visualización y restauración de archivos eliminados en los buckets versionados

### [Pedidos](/console/orders)
- Nueva presentación del detalle de un pedido

### [Gestor de costes](/console/billing/concepts)
- Diagramas de pastel de la vista previa clicables para acceder directamente al detalle del consumo

### [Consola — Organización](/console/iam/concepts)
- Corrección del indicador de carga del Gestor de costes en el panel de la organización

### [Consola — Actividades](/console)
- Detalle de las actividades enriquecido con los recursos afectados a medida que avanzan

### [Bastion](/bastion)
- Botón « Copiar todo » para el YAML de despliegue en el detalle de una appliance

### [Marketplace](/marketplace)
- Ficha de un elemento del Marketplace: sumario y columna derecha visibles durante el desplazamiento

### [Métricas](/console/metrics/concepts)
- Corrección de una infojuego que permanecía visible en los gráficos después de desanclar

## v4.53.1 — 2026-10-15

### [Consola](/console)
- Mejoras técnicas menores

## v4.53.0 — 2026-10-14

### [VM Instances](/public_cloud/vm_instances)
- Visualización de las insignias beta en las familias de instancias y las clases de almacenamiento afectadas
- Visualización de los indicadores de disponibilidad y stock bajo según la familia, la zona y el almacenamiento seleccionados, con desactivación de las opciones no disponibles
- Importación de un disco de datos VHD o VMDK desde el Object Storage del tenant, con selección del archivo y seguimiento del progreso
- Limitación a 8 tarjetas de red por máquina virtual, con indicación del límite durante la creación y la adición de una tarjeta
- Visualización del precio del almacenamiento y del coste estimado al añadir un disco, así como del coste tras la extensión
- Identificación de las máquinas virtuales en error mediante un estado dedicado y adición del filtro correspondiente
- Creación, restauración y cambio de la política de copia de seguridad de una máquina virtual: solo se proponen las políticas compatibles con la familia de instancia
- Corrección de la unidad de retención de las políticas de copia de seguridad, expresada en número de copias de seguridad y no en días
- Restauración de una copia de seguridad: solo se proponen las familias de instancia hacia las que la copia de seguridad puede ser restaurada

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Posibilidad de solicitar el reinicio de un host ESX desde la lista de hosts

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Posibilidad de solicitar el reinicio de un host XCP desde la lista de hosts, con un aviso de indisponibilidad del pool cuando el último host activo está afectado

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Despliegue por plantilla o desde el Marketplace: corrección de la alteración de las configuraciones cloud-init que contienen caracteres especiales, a la lectura y al envío

### [Marketplace](/marketplace)
- Corrección del despliegue de una imagen en OpenIaaS cuando solo se ha rellenado la configuración de red cloud-init

### [Consola — Organización](/console/iam/concepts)
- Supresión de un tenant: la instrucción de confirmación se muestra ahora por encima del campo de entrada

### [Consola](/console)
- Protección de las transferencias de archivos en curso durante la expiración de la sesión: interrupción de la redirección automática, visualización del progreso y posibilidad de volver a conectarse en una nueva pestaña
- Corrección de las redirecciones de los enlaces antiguos hacia los tickets de soporte y los hosts VMware y OpenIaaS

## v4.52.2 — 2026-10-09

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Posibilidad de desvincular el último clúster de almacenamiento de un clúster de hipervisor

## v4.52.1 — 2026-10-07

### [Pedidos](/console/orders)
- Corrección del pedido de aumento del tamaño de un datastore

### [LLMaaS](/llmaas)
- Corrección del coste total del consumo LLMaaS, superior a la suma del gráfico (consumos ahora mostrados por día UTC)

## v4.52.0 — 2026-10-06

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Restauración de una máquina virtual cuyos discos están repartidos en varios datastores: elección de un datastore de destino para cada datastore de origen

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Pestaña Snapshots: identificación del tipo de cada snapshot (manual, copia de seguridad, replicación, huérfano)
- Relocalización de una máquina virtual: posibilidad de conservar el host de origen para migrar solo el almacenamiento, ahora utilizable en un pool de un solo host
- Corrección de la casilla « Destruir la configuración cloud-init después del arranque », sin efecto al desplegar una máquina virtual por plantilla

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Host master: retirada de las acciones de mantenimiento e indicación del camino a seguir para su supresión (supresión de su pool)
- Almacenamiento: puesta en mantenimiento y salida de mantenimiento de un Block Storage desde la consola

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Informes de copia de seguridad: las ejecuciones de una política están ordenadas por fecha de inicio, de la más reciente a la más antigua
- Informes de copia de seguridad: correcciones diversas en la pantalla (refresco, ordenación y paginación de las ejecuciones)

### [Marketplace](/marketplace)
- Despliegue de una imagen: precarga de la configuración cloud-init (user-data y configuración de red) proporcionada por la imagen, modificable antes del despliegue

## v4.51.0 — 2026-09-18

### [Consola — Organización](/console/iam/concepts)
- Adición de una columna « Tipo » (SecNumCloud / Legacy) en la lista de tenants
- El favorito de un tenant se indica ahora mediante una insignia « Favorito » en la lista de tenants

### [Identidad y Acceso (IAM)](/console/iam)
- Aclaración del impacto de la reinscripción de un usuario: el modal de confirmación precisa que se le enviará un nuevo correo de inscripción

### [Soporte](/console)
- Revisualización del bloque de información de soporte en modo Organización

### [Métricas](/console/metrics/concepts)
- Corrección de las leyendas de los gráficos de métricas de las máquinas virtuales

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Corrección del asistente vMotion: el botón « Siguiente » permanecía bloqueado después de un error de compatibilidad de host al volver a una etapa anterior
- Envío de los atajos de teclado del sistema (Alt+Tab, ⌘, Esc…) a la consola de la máquina virtual a pantalla completa (API Keyboard Lock, navegador Chromium)
- Corrección de la consola VMware (WMKS): un Alt+Tab dejaba la tecla Alt considerada como pulsada en el lado de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Aclaración del aviso al mover un disco virtual: las máquinas virtuales asociadas ya no se anuncian como suspendidas, solo ciertas acciones están temporalmente no disponibles

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Detalle de un pool: visualización y gestión de los Block Storage desde Compute, y de los hosts desde Storage (pestañas cruzadas)

## v4.50.0 — 2026-09-10

### [Consola](/console)
- Actualización de las unidades de cuotas mostradas (GiB)

### [Consola — Organización](/console/iam/concepts)
- Visualización del seguimiento de preparación de un tenant en su creación

### [Pedidos](/console/orders)
- Adición del pedido de supresión de una IP pública VPC
- Adición del pedido de supresión de una IP Private Backbone

### [VPC](/network/vpc)
- Visualización del estado de configuración y elección de IP estática en las operaciones de máquinas virtuales
- Posibilidad de elegir una red VPC y configurar una IP estática en todos los formularios que requieren una configuración de red en una máquina virtual (creación, despliegue, migración, restauración, exportación)

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Adición de la columna « Fabric » en la pestaña de red de un servidor Bare Metal

## v4.49.1 — 2026-09-03

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La acción « Asociar una IP pública » de la pestaña « Tarjetas de red » está deshabilitada cuando la gateway del VPC no está activada

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- La acción « Asociar una IP pública » de la pestaña « Tarjetas de red » está deshabilitada cuando la gateway del VPC no está activada

### [VM Instances](/public_cloud/vm_instances)
- La acción « Asociar una IP pública » de la pestaña « Tarjetas de red » está deshabilitada cuando la gateway del VPC no está activada

## v4.49.0 — 2026-08-31

### [Consola](/console)
- Lanzamiento automático del tutorial de bienvenida en el primer inicio de sesión de un usuario
- Supresión de las notificaciones de error al cargar el panel cuando los entornos no están aprovisionados

### [Consola — Organización](/console/iam/concepts)
- Visualización del precio de activación de un tenant en el modal de creación, en modo Organización

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Asociación y disociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Visualización del tipo de lámina en lugar de su descripción en la « Clase » de los clústeres

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El número de vCPU propuesto al redimensionar una máquina virtual está ahora limitado por su capacidad máxima
- Asociación y disociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Visualización del tipo de lámina en lugar de su descripción en la « Clase » de los pools

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Mención en la restauración precisando que la máquina virtual de origen no es reemplazada: se crea una nueva máquina virtual con fecha

### [VM Instances](/public_cloud/vm_instances)
- Ocultación de los campos y mensaje explícito cuando no hay almacenamiento disponible, al añadir y al extender un disco
- Asociación y disociación de una IP pública desde la pestaña « Tarjetas de red » de una máquina virtual conectada a un VPC
- Posibilidad de elegir una plantilla personalizada (vCPU y RAM libres, dentro de los límites de la familia de instancia) en la creación, la restauración y el redimensionamiento de una VM Instance

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
- Los productos de un tenant están ahora agrupados según sean modificables, no desactivables o no disponibles, con el motivo del bloqueo

### [Gestor de costes](/console/billing/concepts)
- La sección Gestor de costes ya no aparece en el panel de Organización cuando la organización no es elegible
- Visualización de una tarjeta de error, en lugar de un coste nulo, cuando la recuperación de los consumos falla en el panel de Organización
- Las filas de plan de soporte están ahora agrupadas bajo « Soporte » en el coste por tenant, en lugar de un tenant « Desconocido »

### [Pedidos](/console/orders)
- Mensaje explícito cuando no hay suficiente espacio disponible para un tipo de almacenamiento, al pedir una zona de disponibilidad o un pool

### [Soporte](/console)
- Las descripciones y los informes post-incidente están ahora formateados (markdown) en la página Incidentes
- Los mensajes globales de soporte se muestran ahora en modo Organización

### [VM Instances](/public_cloud/vm_instances)
- El coste estimado mostrado durante la creación de una VM Instance es ahora mensual, sobre una base de 730 h/mes

### [VPC](/network/vpc)
- El nombre del VPC se muestra ahora delante del nombre de la red en los selectores de red
- El nombre del VPC precede ahora al nombre de la red en la pestaña Adaptadores de red de las máquinas virtuales
- Armonización de los colores de las etiquetas de tipo de VPC (mutualizado, dedicado) con los de las redes
- La opción VM Instances está ahora disponible desde el formulario de asociación de una IP estática
- Los adaptadores de red ya asociados a una IP estática están ahora deshabilitados en el formulario de asociación

### [Object Storage](/storage/oss)
- Elección del estilo de direccionamiento (path-style o virtual-hosted) durante la generación de un enlace de compartición de un archivo
- Aviso sobre los buckets cuyo nombre no es compatible con DNS: solo el acceso path-style es posible

### [Marketplace](/marketplace)
- Solo las zonas de disponibilidad compatibles con la imagen seleccionada se proponen ahora durante el despliegue desde el Marketplace
- El precio de un producto del Marketplace desplegado como VM Instance indica ahora que se calcula según el CPU, la RAM y el almacenamiento

### [Housing (Colocación)](/housing)
- Adición de los tipos de interfaz 1000BASE-SX y 10GBASE-SR a la reserva de ubicación en colocación

## v4.47.0 — 2026-07-30

### [Consola](/console)
- La documentación Swagger del módulo Pedidos está ahora disponible

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante el despliegue de una máquina virtual, solo los elementos desplegables del catálogo (OVF y modelos de máquina virtual) se proponen ahora

### [VM Instances](/public_cloud/vm_instances)
- El coste estimado (horario) se muestra ahora durante la creación de una instancia, con el detalle por concepto (vCPU, RAM, discos)

### [VPC](/network/vpc)
- Al momento de solicitar un nuevo VPC, ahora puede elegir un despliegue en un entorno dedicado (su infraestructura OpenIaaS) o en un entorno compartido (sujeto a la suscripción al producto VM Instances)

### [Object Storage](/storage/oss)
- Las mayúsculas ahora se rechazan en el nombre de un bucket, de conformidad con las reglas de nombrado

### [Marketplace](/marketplace)
- Ahora puede desplegar una VM Instance (Public Cloud) directamente desde la ficha de un producto del Marketplace

## 2026-07-27 — Bases de datos gestionadas (Preview)

### [MariaDB Gestionado](/managed_mariadb)
- El modelo de despliegue Distributed ha sido renombrado a MultiAZ
- Las plantillas de instancia ahora van hasta 6X-Large (32 vCPU y 128 Gio de memoria) y el almacenamiento es extensible en caliente hasta 512 Gio
- Publicación de recomendaciones de dimensionamiento que explican el calibrado de los parámetros del motor, con una advertencia sobre la activación de `performance_schema` por debajo de la plantilla X-Large
- La restauración en un punto en el tiempo ya no se ofrece: las copias de seguridad se basan ahora en copias de seguridad físicas diarias y exportaciones lógicas, sin archivado continuo de los registros de transacciones

### [PostgreSQL Gestionado](/managed_postgresql)
- Nueva arquitectura basada en el operador Kubernetes CloudNative-PG y el plugin de copia de seguridad Barman Cloud
- Tres modelos de despliegue: StandAlone en instancia única, Replica en tres instancias replicadas de forma asíncrona con conmutación automática, y Entreprise en tres instancias replicadas de forma síncrona sobre dos nodos como mínimo, garantizando la durabilidad sin bloqueo en caso de indisponibilidad de un nodo
- Despliegue declarativo mediante recursos personalizados de Kubernetes, utilizable a través de Terraform o Helm, y exportación nativa de métricas hacia Prometheus

## v4.46.0 — 2026-07-24

### [Consola — Organización](/console/iam/concepts)
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
- Una pestaña « Salud » ahora está disponible en el detalle de una máquina virtual abierto desde la lista

### [VM Instances](/public_cloud/vm_instances)
- La dirección IP pública ahora se muestra en la lista de adaptadores de red de una instancia conectada a un VPC
- Una pestaña « Salud » ahora está disponible en el detalle de una instancia, accesible desde la lista

### [Housing (Colocación)](/housing)
- Los pedidos de Colocación ahora están disponibles: reserva de espacio, instalación y desinstalación de equipos
- Los pedidos de Colocación de intervención ahora están disponibles: acompañamiento técnico y smart hands
- Los pedidos de Colocación de cableado y descableado (CPE) ahora están disponibles
- Los pedidos de Colocación no soportados por la consola ahora se indican claramente, con una invitación a contactar al soporte

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- La creación de una instancia se basa ahora en la selección de una imagen de sistema, que reemplaza a las plantillas

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al configurar los núcleos por socket de una máquina virtual OpenIaaS, la topología del procesador (número de sockets y núcleos por socket) ahora se muestra explícitamente

### [LLMaaS](/llmaas)
- El monto mínimo de crédito LLMaaS ha cambiado; consulte el [catálogo tarifario oficial Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

## v4.45.3 — 2026-07-21

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Al desplegar una máquina virtual, un mensaje « Ninguna plantilla disponible » ahora se muestra cuando el catálogo está vacío

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al desplegar una máquina virtual, un mensaje « Ninguna plantilla disponible » ahora se muestra cuando el catálogo está vacío

## v4.45.2 — 2026-07-17

### [Consola](/console)
- Mejoras técnicas menores

## v4.45.0 — 2026-07-10

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante una operación bloqueante, las máquinas virtuales ahora muestran un estado explícito: copia de seguridad, snapshot o restauración en curso
- La edición del CPU ahora se adapta a la opción de adición de CPU en caliente (CPU hot add) y al estado de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Durante una operación bloqueante, las máquinas virtuales ahora muestran un estado explícito (copia de seguridad, snapshot o restauración en curso)
- El detalle de una máquina virtual ahora presenta un resumen de uso (CPU, RAM, almacenamiento)

### [VM Instances](/public_cloud/vm_instances)
- Las instancias ahora muestran un estado explícito (copia de seguridad, snapshot o restauración en curso) durante una operación bloqueante
- Las métricas de uso instantáneo (CPU, RAM, almacenamiento) ahora se muestran para cada instancia
- La unicidad del nombre ahora se controla tanto en la creación como en la restauración de una instancia

### [Red](/network/network_overview)
- Durante un pedido que incluye una etapa de propagación, las nuevas redes solo se crean en la validación final del pedido

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- El tipo de red (backbone privado) ahora se muestra en los adaptadores de red de una instancia, incluso sin la funcionalidad VPC

## v4.44.1 — 2026-07-02

### [Consola](/console)
- Mejoras técnicas menores

## v4.44.0 — 2026-07-02

### [Pedidos](/console/orders)
- Las acciones de aprovisionamiento de infraestructura ahora tienen en cuenta los roles de negocio (cómputo, red, VPC, bare metal…) en complemento de los derechos de pedido

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- El seguimiento del envío de archivos ISO y OVF ha sido mejorado y ahora es posible cancelar un envío en curso

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El seguimiento del envío de archivos ISO y XVA ha sido mejorado y ahora es posible cancelar un envío en curso

### [VM Instances](/public_cloud/vm_instances)
- Los tamaños de disco ya no aceptan valores decimales, tanto en la creación de una instancia como en la adición o extensión de un disco
- Los indicadores de procesamiento de las instancias y de sus recursos ahora se restablecen correctamente tras una actualización de la página

### [VPC](/network/vpc)
- Desde la tarjeta de red de una máquina virtual asociada a una red VPC, ahora accede directamente al VPC correspondiente (VMware, OpenIaaS y VM Instances)
- Ciertos pedidos VPC ahora pueden realizarse en paralelo: adición de una pasarela durante la creación de una red privada (y viceversa), y varias eliminaciones simultáneas de redes privadas

## 2026-06-30 — API Métricas

### [Métricas](/console/metrics/concepts)
- Un token de acceso ahora puede verificar la disponibilidad del servicio de métricas a través del punto de API `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Consola](/console)
- Los selectores de redes ahora distinguen visualmente las redes VPC y Backbone privado
- Un tutorial interactivo ahora está disponible en la página Usuarios

### [Consola — Actividades](/console)
- Ahora puede consultar el detalle de una actividad desplegando su línea en las listas Recientes y Archivadas
- Cada actividad ahora dispone de una página de detalle dedicada, accesible por enlace directo
- El detalle de una actividad ahora es accesible desde las notificaciones de éxito y de fallo
- Ahora puede consultar el JSON completo de una actividad, copiarlo o descargarlo
- La lista de actividades archivadas ahora puede ordenarse por fecha de creación

### [Pedidos](/console/orders)
- La visualización del progreso de un pedido ha sido rediseñada

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- El detalle de una máquina virtual ahora se muestra en una nueva vista
- Durante la modificación en caliente, la coherencia entre CPU y núcleos por socket se controla: se muestran advertencias y los valores no válidos no se aceptan

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Ahora puede solicitar la eliminación de un entorno IaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Una nueva vista de detalle está disponible para las máquinas virtuales
- Ahora puede filtrar la lista de máquinas virtuales por zona de disponibilidad (AZ)

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- La página de un Storage Repository ahora muestra la fecha de toma del snapshot de un disco

### [VM Instances](/public_cloud/vm_instances)
- El detalle de una instancia se muestra en una nueva vista
- El botón « Iniciar una copia de seguridad ahora » ahora está deshabilitado cuando la copia de seguridad no está disponible

### [VPC](/network/vpc)
- La descripción de la dirección IP pública ahora se muestra al asociarla a una red privada

### [Object Storage](/storage/oss)
- Ahora puede añadir una descripción a las direcciones IP autorizadas (whitelist) de un bucket

## v4.42.0 — 2026-06-22

### [Consola](/console)
- La sección « Confidencialidad » ha sido actualizada

### [Object Storage](/storage/oss)
- La disponibilidad del certificado TLS wildcard para el acceso S3 en host-style ahora se indica
- Ahora puede subir un archivo a S3 a partir de una URL pre-firmada
- Ahora puede activar el versioning en un bucket
- Ahora puede gestionar las versiones de un archivo

## v4.41.1 — 2026-06-11

### [Pedidos](/console/orders)
- El máximo disponible al solicitar un Block Storage ha sido actualizado

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Los mensajes relativos a los stocks ahora son más precisos al solicitar hipervisores o al aumentar la RAM de un clúster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al añadir un disco existente a una máquina virtual, el UUID del disco ahora se muestra cuando varios discos tienen el mismo nombre

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Una advertencia ahora se muestra al solicitar la actualización del host maestro de un pool

### [VPC](/network/vpc)
- La solicitud de un VPC ahora requiere que una zona de disponibilidad OpenIaaS esté desplegada

## 2026-06-06 — Servidor MCP de la Consola

- Recurso de ayuda para la autenticación que describe la obtención de un token de acceso personal y el formato de cabecera esperado; los errores de autenticación ahora indican la causa y el procedimiento a seguir
- Cambio de configuración con impacto: la URL de la API indicada en la configuración del servidor ahora debe incluir el segmento `/api`, a actualizar antes del despliegue de esta versión bajo riesgo de errores 404. La URL se controla al inicio y la infraestructura de claves públicas privadas está soportada

## 2026-06-05 — Servidor MCP de la Consola

- Consulta del nombre y de la versión del servidor desplegado

## v4.40.0 — 2026-06-02

### [Consola](/console)
- Un recorrido de bienvenida interactivo ahora está disponible

### [Consola — Organización](/console/iam/concepts)
- El gestor de costos ahora está disponible en la vista organización
- La vista organización ahora dispone de una visualización dedicada

### [Pedidos](/console/orders)
- La etapa de red ya no aparece en los pedidos cuando solo el producto VPC está activado

### [Soporte](/console)
- Los planes y los contactos de soporte han sido actualizados

### [Tickets de soporte](/console)
- Las funcionalidades de infogestión han sido retiradas de los tickets de soporte

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Las funcionalidades de la biblioteca de contenido público han sido retiradas

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- El valor predeterminado de la etapa CloudInit ha sido actualizado para los despliegues OpenIaaS desde el Marketplace
- El envío de caracteres especiales desde el portapapeles de la consola de una máquina virtual ha sido mejorado

### [Red](/network/network_overview)
- Ahora puede eliminar la descripción de una dirección IP
- Ahora puede rellenar el campo `description` al crear una red virtual
- Ahora puede rellenar el campo `description` al modificar una red virtual

### [VPC](/network/vpc)
- La descripción de una IP flotante VPC ahora se muestra
- Ahora puede modificar la descripción de una IP flotante VPC

## 2026-05-25 — Servidor MCP de la Consola

- Cada denegación de permiso ahora indica el producto concernido y el nombre exacto del permiso a activar en el token de acceso personal

## 2026-05-24 — Servidor MCP de la Consola

- Gestión del soporte desde un agente: lista y detalle de tickets, creación, comentario, cierre, consulta de mantenimientos planificados y de sus categorías, incidentes del tenant e incidentes de la plataforma
- Opción de destrucción tras el arranque en el despliegue desde el Marketplace
- Recorrido guiado de despliegue de una máquina virtual Linux
- Recursos consultables directamente: glosario de términos IaaS OpenSource, topología de un pool que reúne hosts, depósitos de almacenamiento, redes e indicadores en una sola lectura, y catálogo Marketplace filtrado sobre el IaaS OpenSource

## 2026-05-23 — Servidor MCP de la Consola

- Recorrido del catálogo Marketplace con filtros, y fichas técnicas IaaS OpenSource (XVA) y VMware (OVF) detallando procesadores, memoria, discos y nombres exactos de las interfaces de red
- Despliegue de una máquina virtual IaaS OpenSource desde un elemento del catálogo, idempotente por nombre
- Control de la alimentación de las máquinas virtuales IaaS OpenSource — encendido, apagado, reinicio, pausa, suspensión y reanudación — idempotente por estado
- Seguimiento de las operaciones largas a través de las actividades

## 2026-05-22 — Servidor MCP de la Consola

- Consulta extendida del IaaS OpenSource: pools, hosts, máquinas virtuales, snapshots, adaptadores de red con detección de direcciones MAC duplicadas, discos virtuales y estado de replicación, todas estas operaciones siendo de solo lectura
- Filtros aplicables en el servidor sobre el conjunto de estas listas

## v4.39.2 — 2026-05-22

### [Red](/network/network_overview)
- Ahora puede eliminar el registro PTR de una dirección IP pública o de una dirección IP de interconexión

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Las reglas de nombrado de los snapshots de máquina virtual han sido modificadas

### [Bare Metal](/iaas_bare-metal)
- Ahora puede modificar la descripción de una lámina

### [Red](/network/network_overview)
- Ahora puede modificar el registro PTR de una dirección IP de interconexión

## v4.39.0 — 2026-04-23

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los discos existentes ahora se muestran al añadir un nuevo disco
- Durante el desplazamiento (vMotion) de una máquina virtual en modo « solo recurso de cómputo », ahora es posible elegir un clúster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Los discos existentes se muestran ahora al agregar un nuevo disco

### [VM Instances](/public_cloud/vm_instances)
- La lista de VM Instances ahora puede exportarse en formato CSV
- La visualización de la frecuencia de una política de copia de seguridad ha sido revisada

### [Bare Metal](/iaas_bare-metal)
- La selección de redes ahora es obligatoria al propagar una red en un Bare Metal

## 2026-04-20 — Bases de datos administradas (Preview)

### [MariaDB administrado](/managed_mariadb)
- Publicación de los parámetros del motor asociados a cada plantilla de instancia: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` y `table_open_cache`
- Revisión de las plantillas de instancia: el límite se reduce a 3X-Large (8 vCPU y 32 Gio de memoria) y el almacenamiento máximo extensible en caliente pasa de 512 Gio a 128 Gio

### [PostgreSQL administrado](/managed_postgresql)
- Publicación de los parámetros del motor asociados a cada plantilla de instancia: `shared_buffers`, `effective_cache_size`, `work_mem` y `max_connections`
- Revisión de las plantillas de instancia: el límite se reduce a 3X-Large (8 vCPU y 32 Gio de memoria) y el almacenamiento máximo extensible en caliente pasa de 512 Gio a 128 Gio

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- Las redes propuestas ahora se filtran tanto en la creación de una instancia como en la modificación de un adaptador de red

## v4.38.0 — 2026-04-17

### [Identidad y acceso (IAM)](/console/iam)
- Seis nuevos permisos están disponibles: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` y `public_cloud_vm_instances_console_access`
- El nombre del producto correspondiente aparece ahora al inicio de la descripción de cada permiso

### [Gestor de costos](/console/billing/concepts)
- La interfaz del gestor de costos ha sido mejorada
- La unidad mostrada en los gráficos de consumo ha sido actualizada

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante el despliegue de una máquina virtual, el paso de selección de una imagen del Marketplace ha sido revisado

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Ahora puede alternar la visualización de la página de catálogo entre cuadrícula y tabla
- El paso de selección de una imagen del Marketplace durante el despliegue de una máquina virtual ha sido actualizado

### [VM Instances](/public_cloud/vm_instances)
- El panel de control ahora muestra el uso de las cuotas de VM Instances
- Una nueva página presenta la lista de VM Instances
- Ahora puede crear una nueva instancia
- Ahora puede consultar y gestionar los discos, los adaptadores de red y las instantáneas de una instancia
- Ahora puede actualizar las capacidades de una instancia y modificar su estado
- Ahora puede acceder a la consola de una instancia

### [LLMaaS](/llmaas)
- La visualización de los precios en la vista de consumo y el formulario de recarga de crédito han sido actualizados

## 2026-04-15 — Bases de datos administradas (Preview)

### [MariaDB administrado](/managed_mariadb)
- Apertura en Preview de MariaDB administrado: modelos StandAlone y Distributed en clúster de tres nodos detrás de un proxy, almacenamiento replicado en tres zonas de disponibilidad y compromiso de disponibilidad del 99,9 %

### [PostgreSQL administrado](/managed_postgresql)
- Apertura en Preview de PostgreSQL administrado: modelos StandAlone y Distributed en clúster de tres nodos detrás de un proxy, replicación síncrona multi-zona sin pérdida de datos y restauración en un punto en el tiempo

## v4.37.0 — 2026-04-02

### [Gestor de costos](/console/billing/concepts)
- Adición del monto previsto en la página de consumo para el gráfico y la tendencia
- Mejora visual cuando hay un error o demasiados pocos datos sobre el consumo del mes en curso

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora del formulario para desplegar una máquina virtual desde un elemento del catálogo
- Adición de la posibilidad de cambiar el tipo de visualización (cuadrícula o tabla) desde la página de catálogo

## v4.36.0 — 2026-03-27

### [Consola](/console)
- Actualización de los gráficos de métricas y consumo

### [Gestor de costos](/console/billing/concepts)
- Adición de la página del gestor de costos
- Posibilidad de visualizar los costos del mes en curso
- Posibilidad de visualizar los costos en un intervalo de fechas y comparar las tendencias

### [Órdenes](/console/orders)
- Bloqueo del desaprovisionamiento de un clúster de hipervisores cuando un clúster de almacenamiento está adjunto

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de filtros y ordenamientos en la lista de discos desde los detalles de un Block Storage

### [VPC](/network/vpc)
- Mejora de la interfaz en la carga de datos en los formularios

## v4.35.4 — 2026-03-18

### [Consola](/console)
- Mejora de la reconexión a los websockets

### [Soporte](/console)
- Adición de una solución de respaldo para la creación de un ticket de soporte cuando los websockets están desconectados

## v4.35.3 — 2026-03-17

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Actualización de la recuperación de los discos durante la carga de los réplicas desde la pestaña de Replicación

## v4.35.0 — 2026-03-11

### [Órdenes](/console/orders)
- Adición del comando de eliminación de un mapeo cpool/spool
- Adición del comando de desaprovisionamiento de red privada VPC
- Modificaciones en el comando de desaprovisionamiento de un volumen Bare Metal, es posible solicitar la eliminación desde la lista de volúmenes
- Adición del comando de eliminación de mapeo de volumen Bare Metal
- Adición del comando de desaprovisionamiento de VPC
- Bloqueo del desaprovisionamiento de un datastore si es el último de un clúster de datastores

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de agregar un límite de RAM en una máquina virtual

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Actualización del multi vMotion de VMware para permitir mover las VMs de un clúster a otro

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de la posibilidad de actualizar un host
- Visualización de la información de actualizaciones de un host

### [Red](/network/network_overview)
- Desactivación del botón de eliminación de propagación de red cuando no hay ninguna propagación entregada

### [LLMaaS](/llmaas)
- Visualización del consumo agrupado por tipo de tokens

## v4.34.0 — 2026-02-18

### [Consola](/console)
- Actualización mayor del motor de visualización de la aplicación
- Los menús de VMware y OpenIaaS no se muestran cuando solo el módulo de métricas está activado

### [Métricas](/console/metrics/concepts)
- Posibilidad de exportar en CSV desde las páginas de Métricas de VMware y OpenIaaS

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Durante un movimiento de máquina virtual, no es posible seleccionar el mismo host de destino que el host actual de la máquina virtual
- Adición del botón 'Nuevo catálogo' en la página de Catálogo de VMware

## 2026-02-04 — Servidor MCP de la Consola

- Consulta de los modelos de máquinas virtuales, las redes, los hosts y los depósitos de almacenamiento IaaS OpenSource

## 2026-02-03 — Servidor MCP de la Consola

- Puesta a disposición del servidor MCP (Model Context Protocol) de la Consola, autenticado mediante token de acceso personal
- Consulta y control de las máquinas virtuales VMware desde un agente: lista, detalle, datacenters virtuales, encendido y apagado

## v4.33.0 — 2026-01-21

### [Órdenes](/console/orders)
- Adición del comando de eliminación de una propagación de red en OpenIaaS

### [Métricas](/console/metrics/concepts)
- Adición de filtros para las páginas de métricas de VMware y OpenIaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la página de métricas 'Máquinas Virtuales'
- Adición de la página de detalles de métricas para cada VM

## v4.32.0 — 2026-01-14

### [Soporte](/console)
- Actualización de la modal de cierre de un ticket de soporte

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Al asignar una política de copia de seguridad en un disco, ahora se propone inventariar el disco si no es reconocido por la solución de copia de seguridad

### [Bare Metal](/iaas_bare-metal)
- La eliminación de un volumen BFS en un Bare Metal ahora está bloqueada, el volumen se eliminará al eliminar el Bare Metal
- Al solicitar un Bare Metal, el primer volumen ahora se renombra a 'volumen BFS'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Actualización de las explicaciones de las info-burbujas sobre las opciones disponibles durante la restauración de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Las instantáneas asociadas a las políticas de copia de seguridad ahora son visibles
- Visualización del Host asociado a la ubicación de almacenamiento de un ISO durante la carga y desde la página de catálogo

### [Object Storage](/storage/oss)
- Visualización de una tarjeta explicativa desde la pestaña de MPU incompletos cuando la IP de la Consola no está autorizada, impidiendo la visualización de la pestaña

### [Marketplace](/marketplace)
- Visualización de la tarjeta de error al acceder a una página de la marketplace que no existe

## v4.30.1 — 2025-12-16

### [Consola](/console)
- Mejora de la visualización de errores vacíos mostrando por defecto el estado HTTP devuelto

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Posibilidad de asociar una IP estática a una dirección MAC personalizada

### [LLMaaS](/llmaas)
- En las métricas de consumo, filtrado de las series que tienen valores en 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Mejora de la sincronización de las acciones en las páginas de VPCs
- Adición de la asociación de una IP estática a una IP pública desde la lista de IPs estáticas

### [Almacenamiento](/storage/oss)
- Adición de los MPU incompletos desde la página de un bucket
- Posibilidad de eliminar un MPU incompleto

## v4.28.0 — 2025-11-21

### [Consola](/console)
- Adición de la posibilidad de mostrar mensajes de información globales visibles en toda la aplicación

### [Órdenes](/console/orders)
- Posibilidad de solicitar una adición de crédito LLMaaS para el tenant
- Posibilidad de solicitar un VPC
- Posibilidad de solicitar una red privada en un VPC
- Posibilidad de solicitar una IP pública para el producto VPC
- Posibilidad de activar la gateway para un VPC
- Adición de la posibilidad de solicitar la eliminación de un tenant

### [Métricas](/console/metrics/concepts)
- Mejora de la visualización de los tooltips en los gráficos de métricas: ahora es posible hacer clic en un punto para fijar el tooltip y consultar el conjunto de datos

### [Red](/network/network_overview)
- Agrupación de las páginas de Redes e Internet bajo un único producto: Backbone privado
- Adición de la gestión del registro PTR durante la modificación de una IP pública
- Bloqueo del compartimiento para ciertos tipos de redes

### [VPC](/network/vpc)
- Integración del producto VPC
- Adición de una página que lista los VPC
- Adición de una página de Detalles de un VPC
- Posibilidad de gestionar las redes privadas, las IPs públicas y la gateway de un VPC
- Posibilidad de asociar una IP estática de una red privada VPC a un adaptador de red VMware o OpenIaaS
- Posibilidad de asociar una IP estática con una IP pública de un VPC

### [LLMaaS](/llmaas)
- Adición de una pestaña de Facturación en la página LLMaaS para los tenants con el prepago activado
- Visualización del crédito restante para los tenants en modo prepago, en el panel de control y desde la pestaña de Facturación

## v4.27.0 — 2025-11-12

### [Órdenes](/console/orders)
- Adición de una verificación sobre el stock disponible durante la solicitud de recursos
- Adición de un filtro por tipo de orden y por producto en la lista de órdenes

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora de la consola de las máquinas virtuales. Mejor gestión del teclado y adición de un portapapeles

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Adición de una alerta en el panel de control para las VSnap de copia de seguridad SPP con una ocupación demasiado alta

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Mejora de la consola de las máquinas virtuales. Mejor gestión del teclado y adición de un portapapeles

### [Marketplace](/marketplace)
- Adición de la posibilidad de mostrar los detalles técnicos de una imagen

## v4.26.5 — 2025-11-04

### [Consola](/console)
- Mejora del tamaño de los gráficos del panel de control durante el redimensionamiento de la ventana

## v4.26.3 — 2025-10-31

### [Métricas](/console/metrics/concepts)
- Modificación del nombre de las exportaciones de métricas presentadas en los gráficos

## v4.26.0 — 2025-10-22

### [Consola](/console)
- Adición de un botón para copiar el UUID del ámbito actual desde el perfil de usuario
- Rediseño completo del Panel de control
- Adición de una reconexión automática al seguimiento de actividades cuando la conexión se interrumpe

### [Órdenes](/console/orders)
- Actualización de los formularios de orden para agregarlos a las diferentes páginas concernidas (ejemplo: nuevo Datastore desde la página de Almacenamiento)

### [Soporte](/console)
- Adición de la dirección de correo electrónico de la persona que cerró el ticket en la calificación del ticket de soporte

### [Métricas](/console/metrics/concepts)
- Rediseño de la recuperación de las métricas de VMware, la URL de la página ahora es /iaas/metrics
- Adición de una pestaña de métricas de infraestructura de VMware en Cómputo
- Adición de una pestaña de métricas de infraestructura de VMware en Almacenamiento
- Adición de una página de métricas para OpenIaaS
- Adición de una pestaña de métricas de infraestructura de OpenIaaS en Cómputo
- Adición de una pestaña de métricas de infraestructura de OpenIaaS en Almacenamiento

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de las nuevas claves extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Bloqueo de la selección de un hostcluster sin host activo
- Durante la creación de una máquina virtual de VMware, la selección del Vcenter se realiza ahora en función de la zona de disponibilidad seleccionada
- Adición de límites en los nombres y descripciones durante la carga de un archivo en VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Al agregar un disco de OpenIaaS, los almacenamientos que no pertenecen al Pool de la máquina virtual ahora se filtran
- Durante una instantánea, la opción para capturar la memoria ahora está desmarcada por defecto

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Adición de la posibilidad de ejecutar una copia de seguridad desde la pestaña de copias de seguridad de una máquina virtual de OpenIaaS

### [Red](/network/network_overview)
- Eliminación de la restricción que impedía la selección de varios tipos de redes en la página de redes virtuales

### [Object Storage](/storage/oss)
- Optimización de la recuperación de los archivos de un bucket

### [PaaS OpenShift](/paas_openshift)
- Adición de una página que lista los clústeres de OpenShift
- Adición de una página de detalles de un clúster de OpenShift

### [Marketplace](/marketplace)
- Adición de un filtro por UUID y posibilidad de copiar el UUID de un elemento

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Actualización del uso de la configuración avanzada y las propiedades OVF durante el despliegue de una máquina virtual de VMware

## v4.24.0 — 2025-09-24

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de desplegar una imagen de máquina virtual desde la lista de máquinas virtuales

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de desplegar una imagen de máquina virtual desde la lista de máquinas virtuales

### [Red](/network/network_overview)
- Adición de una validación para bloquear la eliminación del compartimiento de una red si la red está propagada en otro Tenant

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
- No mostrar la alerta HA en las VMs afectadas cuando el ISO local no está montado
- Durante la adición o el redimensionamiento de un disco, indicar si el SR asociado se utiliza para una configuración de replicación

### [IaaS OpenSource — Copia de seguridad](/iaas_opensource)
- Adición del nombre de la AZ en el informe de copia de seguridad

### [Object Storage](/storage/oss)
- Actualización de las informaciones sobre el ciclo de vida de un bucket

### [LLMaaS](/llmaas)
- Adición del producto LLMaaS
- Adición de la lista de modelos disponibles
- Adición de la lista de claves API con posibilidad de crearlas
- Adición del consumo por modelos y por claves
- Adición de los detalles de un modelo
- Posibilidad de probar un modelo

## v4.22.1 — 2025-09-10

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Modificación de las alertas sobre la configuración de formato de disco elegida, durante un vMotion que incluye el storage

## v4.22.0 — 2025-09-02

### [Órdenes](/console/orders)
- Adición de la orden de supresión de propagación de red desde la página de todas las órdenes, el conjunto de órdenes disponibles ahora es accesible desde esta página

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Actualización de las condiciones sobre el cambio del formato de disco durante el desplazamiento de una máquina virtual y adición de informaciones sobre el formato del disco actual durante una configuración por disco

## v4.21.0 — 2025-08-22

### [Consola](/console)
- Actualización de la visualización cuando no hay ningún dato creado/provisionado o cuando un error se produce durante la obtención de información.

### [Soporte](/console)
- Apertura de los modales de soporte con el servicio asociado preseleccionado
- Adición de una insignia en el menú y la navbar cuando un ticket de soporte requiere una respuesta

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de la posibilidad de exportar en CSV la lista de réplicas VMware
- Mejora del slider de selección de la RAM en ciertas órdenes
- Adición de la gestión de las opciones Static differed and immediate para el vMotion

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Bloqueo de la supresión de un cluster no vacío o con hosts/datastores no en mantenimiento

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la posibilidad de exportar en CSV la lista de réplicas OpenIaaS y de las políticas asociadas
- Adición de detalles sobre las herramientas utilizadas por las máquinas virtuales (pvDrivers, managementAgent y tools)
- Adición de verificaciones para la alta disponibilidad (HA)

### [Red](/network/network_overview)
- Modificación de la selección de una dirección IPv4 con una lista disponible

## v4.20.0 — 2025-07-29

### [Órdenes](/console/orders)
- Adición de informaciones sobre los stocks limitados y agotados concernientes a los recursos de cómputo durante la orden de una nueva zona de disponibilidad

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de una opción VMware Tools para sincronizar la hora con el host
- Actualización de las condiciones sobre el cifrado de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Retiro de las informaciones de última ejecución de las políticas de replicación que provocan lentitudes
- Gestión del TX checksumming para los adaptadores de red
- Adición de un aviso sobre la replicación OpenIaaS si el número de AZ es inferior a 2
- Adición de la alta disponibilidad (HA) para los pools y máquinas virtuales

## v4.19.0 — 2025-07-24

### [Órdenes](/console/orders)
- Actualización de la orden de IPs públicas con la posibilidad de ordenar un prefijo IPv6
- Actualización de la visualización de las órdenes disponibles cuando no hay ningún entorno provisionado

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un filtro de replicación en la lista de máquinas virtuales
- Actualización del modal de creación de una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un filtro de replicación en la lista de máquinas virtuales

### [Red](/network/network_overview)
- Actualización de la página Internet con la adición de la gestión de IPv6

## v4.18.0 — 2025-07-15

### [Consola](/console)
- Actualización de la visualización cuando no hay ningún dato creado/provisionado o cuando un error se produce durante la obtención de información.

### [Órdenes](/console/orders)
- Actualización de los pasos de internet durante la orden de una nueva zona de disponibilidad o de un nuevo pool

### [Soporte](/console)
- Adición de un servicio de seguridad para cada producto durante la creación de un ticket de soporte

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un enlace de un ISO montado en un controlador hacia el elemento correspondiente en el catálogo

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una página Replicación OpenIaaS con la lista de réplicas y las políticas de replicación
- Posibilidad de agregar y eliminar una configuración de replicación a una máquina virtual OpenIaaS
- Posibilidad de crear y eliminar una política de replicación
- Posibilidad de restaurar un réplica
- Posibilidad de exportar las máquinas virtuales al formato CSV.

## v4.17.0 — 2025-06-20

### [Órdenes](/console/orders)
- Posibilidad de ordenar un Pool OpenIaaS
- Posibilidad de ordenar la asociación de un volumen existente a un Bare Metal existente desde la página de un Bare Metal, desde la página de un volumen y desde la página de órdenes

### [Soporte](/console)
- Posibilidad de eliminar un archivo en un ticket de soporte
- La descripción sobre la satisfacción al cierre de un ticket es ahora opcional

## v4.16.0 — 2025-06-04

### [Consola](/console)
- Adición de las traducciones en inglés en la página de informes de consumo del menú de órdenes

### [Órdenes](/console/orders)
- Posibilidad de ordenar el aumento de tamaño de un volumen bare metal
- Posibilidad de ordenar el aumento de tamaño de un Block Storage OpenIaaS

### [Soporte](/console)
- Rediseño de la creación de un ticket de soporte
- Interpretación del markdown en un ticket de soporte y actualización del orden de visualización de los comentarios
- Adición de un feedback durante el cierre de un ticket de soporte
- Actualización de la visualización de los pictogramas según el impacto de un incidente global

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de una opción para conservar la configuración de una máquina virtual durante una restauración en Producción en el cluster de origen

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un mensaje de advertencia en caso de falta de espacio en disco en un Block Storage (90% utilizado) y aviso durante las órdenes

### [Object Storage](/storage/oss)
- Adición de la descripción de los roles S3 durante la asignación en un bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Visualización de un error cuando una red está mal configurada en un adaptador de red de una máquina virtual, impidiendo también el inicio de la máquina virtual

## v4.15.0 — 2025-05-13

### [Consola](/console)
- Ajuste de las unidades mostradas en los recursos de infraestructura: GiB (Gibibyte) en lugar de GB (Gigabyte)

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de mover un disco OpenIaaS
- Posibilidad de conectar y desconectar un disco OpenIaaS
- Visualización del estado conectado/desconectado de un disco
- Posibilidad de copiar el UUID de un disco, red virtual o snapshot
- Posibilidad de elegir el nombre de una máquina virtual durante un despliegue de archivo XVA
- Adición de la posibilidad de asignar una política de copia de seguridad al momento de iniciar una máquina virtual si no tiene ninguna.

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de acciones disponibles en un disco desde un Block Storage

### [Bare Metal](/iaas_bare-metal)
- Adición de las direcciones MAC en la tabla de interfaces de un Bare Metal
- Adición de una página sobre los detalles de un volumen Bare Metal

## v4.14.0 — 2025-04-28

### [Consola](/console)
- Posibilidad de fijar páginas en el menú
- Actualización del renderizado de las documentaciones API

### [Órdenes](/console/orders)
- Posibilidad de ordenar la supresión de un Block Storage OpenIaaS
- Posibilidad de ordenar la adición de un Block Storage a un Pool OpenIaaS
- Posibilidad de ordenar la supresión de un Host OpenIaaS
- Adición de la información del producto afectado en la lista de órdenes
- Posibilidad de ordenar la adición de un Host a un pool OpenIaaS

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de poner un Host en mantenimiento
- Posibilidad de editar la descripción de un modelo
- Posibilidad de elegir un Host al inicio de una máquina virtual
- Adición de una regla de unicidad en el nombre de las máquinas virtuales OpenIaaS

## v4.13.0 — 2025-04-08

### [Consola](/console)
- Adición de estadísticas e informaciones de contacto en la página Soporte

### [Órdenes](/console/orders)
- Rediseño de la visualización de los detalles de una orden
- Rediseño de la visualización de las opciones de órdenes
- Actualización de la visualización para ordenar el primer baremetal cuando no hay ninguno
- Actualización de la orden de un Bare Metal con la selección de la propagación de las redes en las interfaces del Bare Metal
- Posibilidad de propagar un VLAN en un Bare Metal
- Posibilidad de agregar un volumen a un baremetal
- Posibilidad de desprovisionar un volumen de un Bare Metal
- Posibilidad de desprovisionar un Bare Metal

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de un botón copiar UUID en las redes y catálogos VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de un botón copiar UUID en las redes y catálogos OpenIaaS
- Adición de un botón copiar UUID en un Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Adición de la visualización de las interfaces de red y las redes que se propagan en ellas en un baremetal
- Adición de las acciones encender, reiniciar y apagar un baremetal

### [Red](/network/network_overview)
- Posibilidad de visualizar las propagaciones en un Bare Metal de una red

## v4.12.0 — 2025-03-25

### [Consola](/console)
- Posibilidad de eliminar una IP whitelist desde la página de acceso

### Etiquetas
- Adición de tags en las máquinas virtuales OpenIaaS

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Actualización de la recuperación de las recomendaciones API sobre las reglas de afinidad/anti-afinidad de un HostCluster

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Visualización de la importación de un XVA OpenIaaS en la lista de descargas
- Posibilidad de adjuntar un disco existente a una máquina virtual
- Posibilidad de desadjuntar un disco existente de una máquina virtual

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Actualización de la visualización de los discos de un Block Storage OpenIaaS

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Actualización del mensaje de error durante el acceso a los archivos de un bucket Object Storage

## v4.11.1 — 2025-03-12

### [Órdenes](/console/orders)
- Actualización de los nombres de las zonas de disponibilidad durante una orden
- Modificación del mínimo de datastore durante la orden de un datastoreCluster

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Cuando el campo label de hostCluster y datastoreCluster es modificado a vacío, el nombre técnico se aplicará por defecto

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Cuando el campo label de los pools es modificado a vacío, el nombre técnico se aplicará por defecto
- Adición de una burbuja informativa en la página catálogo y durante la importación ISO para indicar que el XVA es soportado durante la creación de una máquina virtual

## v4.11.0 — 2025-03-10

### [Órdenes](/console/orders)
- Actualización de los tipos de redes autorizados durante la creación de una AZ
- Actualización de los recursos mínimos a provisionar durante la orden de una nueva zona de disponibilidad

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Visualización del nombre de la máquina virtual en la pestaña de la consola para VMware

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Adición de la gestión de etiquetas en los datastore cluster y host cluster VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Permitir el despliegue de una máquina virtual mediante importación XVA para OpenIaaS
- Adición de la gestión de etiquetas en los pools OpenIaaS
- Visualización del nombre de la máquina virtual en la pestaña de la consola para OpenIaaS

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Actualización de las informaciones de CPU de los hosts y pools OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Adición de IOPS/TO en los volúmenes baremetal

## v4.10.0 — 2025-03-04

### [Consola](/console)
- Actualización de los enlaces a la nueva documentación pública

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una alerta para informar a los usuarios en caso de duplicado de direcciones MAC en la lista de máquinas virtuales y durante la creación o modificación de adaptadores de red
- Adición de una opción para forzar el apagado o el reinicio de una máquina virtual
- La memoria ya no será incluida por defecto durante un snapshot si la máquina virtual no está encendida
- Posibilidad de renombrar y redimensionar un disco
- Adición de la supresión de ISOs y modelos desde la página catálogo
- Adición de la posibilidad de eliminar el disco de configuración 'Cloud Init' durante el despliegue de una máquina virtual

## v4.9.1 — 2025-02-27

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Posibilidad de editar un adaptador de red en una máquina virtual encendida

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de restricciones sobre los caracteres autorizados en los nombres de las máquinas virtuales OpenIaaS

## v4.9.0 — 2025-02-21

### [Consola](/console)
- Hacer clicables los nombres en las tablas cuando una página relacionada existe
- Mejorar la apertura de las consolas para evitar la apertura de varias pestañas si varias ventanas están abiertas en la misma página
- Mostrar un error durante la apertura de una consola si el navegador no autoriza las redirecciones en la aplicación

### [Métricas](/console/metrics/concepts)
- Mostrar la unidad de la RAM en la página de salud de las máquinas virtuales

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Bloquear la creación de una máquina virtual si el espacio en los Block Storage seleccionados no es suficiente
- Vaciar las direcciones MAC por defecto durante la creación de una máquina virtual OpenIaaS

### [Almacenamiento](/storage/oss)
- Poder copiar en el portapapeles un punto de terminación S3

## v4.8.0 — 2025-02-14

### [Órdenes](/console/orders)
- Adición de la orden de propagación de una red en Pools OpenIaaS
- Adición de las órdenes de propagación de red en la página de todas las órdenes

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Visualización del número de discos asignados y disponibles por controlador en una máquina virtual
- Actualización de las condiciones sobre el número de discos posibles a agregar en controladores SCSI Para Virtual en función de la versión de hardware de la máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Posibilidad de agregar opciones Cloud Init en la creación de una máquina virtual OpenIaaS
- Visualización de los discos en la página de un Block Storage
- Posibilidad de actualizar la configuración del firmware de arranque de una máquina virtual OpenIaaS
- Posibilidad de clonar una máquina virtual OpenIaaS

### [Red](/network/network_overview)
- Actualización de la visualización de las propagaciones de una red y agregación de propagaciones OpenIaaS
- Actualización de la creación de una red y posibilidad de propagar la red en la infraestructura OpenIaaS desde su creación

## v4.7.0 — 2025-02-03

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- La exportación en OVF está bloqueada cuando la máquina virtual está cifrada

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Mostrar las relaciones datastores-clusters y host-clusters en las páginas de Cómputo y Almacenamiento

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Modificación de la opción de inicio después de la restauración para un entorno SecNumCloud durante la restauración en modo clon o producción en un host o clúster alternativo

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Agregar los botones de montar y desmontar un ISO OpenIaaS en la barra de acciones de una máquina virtual

### [Red](/network/network_overview)
- Mejora de la visualización de las propagaciones de las redes cuando hay solicitudes de supresión de propagaciones en curso

## v4.6.0 — 2025-01-30

### [Consola](/console)
- Eliminar los caracteres mostrados durante el autocompletado al agregar observadores en la creación de un ticket de soporte
- Actualización de la visualización del menú y de las páginas disponibles para las ofertas VMware y OpenIaaS en un nuevo entorno sin zonas de disponibilidad provisionadas

### [Consola — Notificaciones](/console)
- Actualización de la visualización de las suscripciones a notificaciones desde la página de perfil

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Agregar la posibilidad de cifrar una máquina virtual

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la exportación como plantilla de una máquina virtual

## v4.5.0 — 2025-01-17

### [Consola](/console)
- Adición de la descripción en la creación y visualización de las whitelists
- Posibilidad de modificar la descripción de una whitelist

### [Órdenes](/console/orders)
- Adición de una orden de nueva Zona de Disponibilidad OpenIaaS
- Adición de una orden para Bare Metal
- Vincular un clúster de hipervisores a un clúster de almacenamiento

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mostrar el tamaño restante entre paréntesis en los árboles de selección de almacenamiento

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Adición del peor caso de asignación de memoria en un hostCluster VMware

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de la carga de ISO en los catálogos OpenIaaS
- Adición del desplazamiento de las máquinas virtuales OpenIaaS
- Posibilidad de elegir los discos y redes en la creación de una máquina virtual OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Adición de una página que lista los Bare Metal
- Adición de una página que lista los volúmenes Bare Metal
- Adición de una página con los detalles de un Bare Metal
- Adición de la posibilidad de abrir una consola Bare Metal

## v4.4.0 — 2025-01-13

### [Consola](/console)
- Modificaciones técnicas realizadas durante el proceso de autenticación

## v4.3.0 — 2024-12-19

### [Consola — Actividades](/console)
- Adición de los enlaces "acceder al recurso" en las actividades relacionadas con XOA y Object-Storage

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de los tags y la IP de la máquina virtual en la exportación CSV de las máquinas virtuales

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Ofrecer exportar únicamente los elementos filtrados en la exportación CSV de los informes de copia de seguridad en la subpestaña de máquinas virtuales

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de las VM-templates XOA desde la página de catálogos

### [Object Storage](/storage/oss)
- Posibilidad de crear y reiniciar la clave de acceso global desde las cuentas de almacenamiento

## v4.2.0 — 2024-12-10

### [Consola](/console)
- Agregar redirecciones a la página de estado

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Los elementos ya presentes en 'Mi catálogo' se muestran ahora también en 'Catálogo público'
- Agregar redirecciones en los componentes citados en un elemento del catálogo VMware
- Actualización de la visualización de la RAM en un clúster de hipervisores
- Eliminación de la opción de replicar automáticamente los nuevos discos que provocaba errores
- Adición de validaciones en la replicación de una máquina virtual
- Adición de nueva configuración extra PCIPassthru desde la configuración avanzada de una máquina virtual para la gestión de GPU
- Posibilidad de agregar un controlador PCI en las máquinas virtuales

### [IaaS VMware — Infraestructura](/iaas_vmware)
- Visualización de las recomendaciones y fallas de DRS desde un clúster de hipervisores
- Nuevo estado en los hipervisores y datastores cuando hay una solicitud de puesta en mantenimiento en curso
- Adición de la información sobre el GPU de un hipervisor

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Eliminar varias opciones de copia de seguridad no funcionales en máquinas virtuales en modo de prueba

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una página de copia de seguridad para la sección de copias de seguridad OpenIaas que lista los errores, las políticas, los informes de copias de seguridad y permite la recuperación de máquinas virtuales eliminadas

### [IaaS OpenSource — Infraestructura](/iaas_opensource)
- Adición de una página para listar las zonas de disponibilidad OpenIaas
- Agregar una página de almacenamiento para la sección OpenIaas
- Adición de una página de cómputo para la sección OpenIaas

### [Housing (Colocación)](/housing)
- Modificación de la información mostrada desde la página de periféricos

## v4.1.1 — 2024-11-18

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Mejora de la edición de la memoria, la conversión se realiza hacia la unidad con el último valor entero
- Durante un snapshot, el botón para guardar la RAM está deshabilitado cuando la máquina virtual está apagada
- Cuando varias máquinas virtuales están desplegadas, la lista de discos no se muestra de inmediato

### [IaaS VMware — Copia de seguridad](/iaas_vmware)
- Adición del botón de exportación CSV en la pestaña de máquinas virtuales de la página de informes de copia de seguridad

## v4.1.0 — 2024-11-13

### [Consola](/console)
- Posibilidad de enviar un archivo durante un feedback

### [Identidad y Acceso (IAM)](/console/iam)
- Desactivación de la posibilidad de eliminar un propietario

### [Órdenes](/console/orders)
- Adición de la gestión de adición, supresión y edición de un datastore desde la página de órdenes
- Adición de la posibilidad de eliminar un Host

### [IaaS VMware — Máquinas virtuales](/iaas_vmware)
- Adición de las actividades de snapshots en la pestaña de snapshot de una VM
- Visualización del tamaño real de las máquinas virtuales en la exportación CSV

### [IaaS VMware — Infraestructura](/iaas_vmware)
- En las páginas de cómputo y almacenamiento, el filtro sobre las zonas de disponibilidad se aplica también a las pestañas de clúster
- Visualización de los porcentajes de uso en las barras de consumo (CPU / RAM / Almacenamiento)

### [IaaS OpenSource — Máquinas virtuales](/iaas_opensource)
- Adición de una validación sobre la presencia de políticas de copia de seguridad en la opción de inicio automático
- Adición de una opción para forzar el apagado/reinicio de las máquinas virtuales sin guest-tools instalados
- Mejora del mensaje de ejecución de una política OpenIaas en una máquina virtual específica

### [Bastión](/bastion)
- Adición de una validación en el campo Host de un equipo

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

El historial completo de las versiones anteriores a v4.0 (v1.0 a v3.38.1, de febrero de 2019 a octubre de 2024) está disponible en el [historial de Git](https://github.com/Cloud-Temple/docs) del proyecto.

:::
