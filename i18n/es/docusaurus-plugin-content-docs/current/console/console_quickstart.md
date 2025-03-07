---
title: Quickstart
---
import shivaLogin from './images/shiva_login.png'
import shivaHome from './images/shiva_home.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaSupport from './images/shiva_support.png'
import shivaSupport_01 from './images/shiva_support_01.png'
import shivaSupport_02 from './images/shiva_support_02.png'
import shivaSupport_03 from './images/shiva_support_03.png'
import shivaOnboard_007 from './images/shiva_onboard_007.png'
import shivaLogs from './images/shiva_logs.png'
import shivaOnboard_009 from './images/shiva_onboard_009.png'
import shivaOnboard_008 from './images/shiva_onboard_008.png'


## Prérequis
- Tener una suscripción a una oferta de Cloud Temple. Para suscribirse simplemente, puede [contáctanos](https://www.cloud-temple.com/contactez-nous/) o por correo a la dirección __contact@cloud-temple.com__.
- Tener acceso a la consola Shiva.
- Tener su IPv4 pública declarada en la zona de confianza de Cloud Temple (el acceso a la consola shiva está limitado a las direcciones de confianza identificadas).

## Conexión a su tenant de Cloud Temple
Shiva es accesible a través de la siguiente URL:
    https://shiva.cloud-temple.com
    O desde la URL directa que se le ha comunicado por correo.

La primera página le permite seleccionar [la organización](iam/concepts.md#organisations) en la que su usuario ha sido creado.
Una vez que la empresa esté ingresada, haga clic en __'Conectar'__.

<img src={shivaLogin} />

Luego será redirigido a una página que le pedirá que se autentique.
Una vez conectado, llegará a esta página.

<img src={shivaHome} />

## Gestión del idioma
La consola está disponible en __francés__ e __inglés__. Puede cambiar el idioma de funcionamiento mediante el icono de __idioma__ ubicado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Configuración de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar __al equipo de soporte de Cloud Temple__ a través del __icono 'boya'__ ubicado en la parte superior derecha de la pantalla.

<img src={shivaSupport} />

Serás guiado durante todo el proceso de solicitud de soporte.

La primera etapa es la identificación del tipo de solicitud de soporte:

- Pedir consejo sobre el uso de un producto (excepto incidentes),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Reportar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (disponibilidad de un ingeniero de Cloud Temple para un problema específico).

<img src={shivaSupport_01} />

Luego, tiene la posibilidad de dar precisiones e incluir archivos (imágenes o registros, por ejemplo).

El solicitante también puede especificar un nivel de criticidad (P1 a P4) en la descripción del ticket, en caso de un incidente, tales como:

**CRÍTICO (P1)**:

- Sospecha de fuga de datos sensibles
- Detección de un acceso no autorizado a sus datos
- Compromiso de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anormales en datos sensibles
- Violación de datos personales

**ALTA (P2)**:

- Fallo en los accesos de los usuarios
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Inconsistencia en los datos
- Gran lentitud que afecta la actividad

**MEDIA (P3)**:

- Problema de rendimiento localizado
- Incidente en una función no crítica
- Error de configuración con impacto limitado
- Dificultad de acceso puntual

**BAJA (P4)**:

- Solicitud de investigación
- Anomalía sin impacto directo
- Pregunta de conformidad
- Necesidad de aclaración técnica

<img src={shivaSupport_02} />

Una vez que su solicitud sea enviada, es posible encontrar sus solicitudes a través del __icono 'boya'__ ubicado en la parte superior derecha de la pantalla:

<img src={shivaSupport_03} />

## Acceso a las funcionalidades de usuario a través de la interfaz web

Todas las funcionalidades accesibles para su usuario (dependiendo de sus permisos) están ubicadas a la izquierda de la pantalla, en la banda verde.
Las funcionalidades están agrupadas por módulo. Esto incluye principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de operaciones__,
- El __control de recursos IaaS__ (Cálculo, almacenamiento, red, ...)
- El __control de recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...)
- El acceso a __servicios adicionales__ (Bastión, monitoreo, ...)
- La __administración de su organización__ (Gestión de tenants, permisos, ...)

La activación de un módulo para un usuario depende de los permisos del usuario. Por ejemplo, el módulo __'Orden'__ no estará disponible si el usuario no tiene el permiso __'ORDER'__.

Aquí hay una presentación de los diferentes módulos disponibles. Nuevos módulos enriquecen la consola regularmente:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Tablero de Control__ : permite una vista rápida del __total de recursos de cálculo y almacenamiento__, las estadísticas de __respaldo__ y un __resumen de las solicitudes de soporte__,
- __Inventario__ : permite una vista de todos sus recursos de tipo __'máquinas virtuales'__. Si se utilizan __etiquetas__, permite una vista por __etiqueta__ (por ejemplo, vista de negocio, vista de aplicación, ...),
- __Gestión__ : da acceso al seguimiento de sus __solicitudes de soporte__ y a la __metrología de servicios__,
- __IaaS__ : permite el __control de infraestructuras IaaS de VMware__ (Máquinas virtuales, clústeres, hipervisores, replicación, respaldo, ...),
- __OpenIaaS__ : permite el __control de recursos Xen Orchestra__ (Máquinas virtuales, respaldo, ...),
- __OpenShift__ : permite el control de su **arquitectura PaaS RedHat Openshift** y la gestión de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastión__ : Permite desplegar y controlar appliances bastión SSH/RDP en sus redes,
- __Red__ : permite el control de __redes de nivel 2 y 3__, __IP públicas__ y sus __circuitos telecom__.
- __Colocación__ : Ofrece una vista de los equipos ubicados en la zona de __colocación compartida o dedicada__,
- __Orden__ : Permite la orden de recursos y el seguimiento de despliegues,
- __Administración__ : Agrupa las funciones de administración de usuarios y tenants así como el acceso a la gestión de registros globales.
</div>
</div>
Los pictogramas __'NEW'__ significan que el producto en cuestión ha sido provisionado pero aún no está calificado como __oferta SecNumCloud__ y __'BETA'__ significan que el producto en cuestión ha sido provisionado y recién calificado como __oferta SecNumCloud__.

**Registro - Seguimiento de Actividades**
======================================

La página de actividades está destinada a proporcionar una visibilidad completa de todas las operaciones de lectura y escritura realizadas dentro de la consola, asegurando así una mayor trazabilidad y seguridad. Destaca las dos pestañas principales: Recientes y Archivadas.

<img src={shivaLogs} />

### **Estructura de la Página**

#### **Pestañas**
	+ **Recientes**
		- Operaciones recientes
		- Seguimiento en tiempo real
	+ **Archivadas**
		- Operaciones en un período más largo
		- Operaciones archivadas para trazabilidad y conformidad
#### **Información Mostrada**
	+ Fecha y Hora
	+ Tipo de operación
    + Estado
	+ Usuario
	+ Descripción de la operación
#### **Funcionalidad**
	+ Búsqueda/Filtrado para operaciones específicas

### **Uso**

* **Acceso:** permiso `activity_read`
* **Navegación:**
	- Seleccione la pestaña "Recientes" para operaciones en tiempo real.
	- Elija "Archivadas" para consultar el historial.
	- Utilice las funcionalidades de búsqueda y filtrado para localizar operaciones específicas.

#### **Nota de Conformidad**
De acuerdo con la calificación SecNumCloud, el almacenamiento de eventos de la consola de Cloud Temple es de un mínimo de **6 meses**, garantizando así el cumplimiento de los requisitos de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic en la parte inferior izquierda de la banda verde en el icono de __'Novedades'__. Tendrá el detalle de las modificaciones para cada versión de la consola de Cloud Temple.

<img src={shivaOnboard_009} />

## Acceso a las funcionalidades de usuario a través de la API

El acceso a todas las funcionalidades de la consola de Shiva es posible a través de la API de Shiva. Puede obtener el detalle de los verbos y las configuraciones a través de __'Perfil'__ y __'APIs'__:

<img src={shivaOnboard_008} />

## Proveedor Terraform

Cloud Temple pone a su disposición un proveedor Terraform para controlar su plataforma Cloud como *"código"*. Está accesible aquí:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest