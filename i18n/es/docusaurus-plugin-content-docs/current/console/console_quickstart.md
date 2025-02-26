---
title: Quickstart
---

## Prérequis
- Haber suscrito a una oferta Cloud Temple. Para suscribirse fácilmente, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo a la dirección __contact@cloud-temple.com__.
- Tener acceso a la consola Shiva
- Tener su IPv4 pública declarada en la zona de confianza Cloud Temple (el acceso a la consola Shiva está limitado a las direcciones de confianza identificadas)

## Conexión a su tenant Cloud Temple
Shiva es accesible a través de la siguiente URL:
    https://shiva.cloud-temple.com
    O desde la URL directa que se le haya proporcionado por correo.

La primera página le permite seleccionar [la organización](iam/concepts.md#organisations) en la que se ha creado su usuario.
Una vez ingresada la empresa, haga clic en __'Se connecter'__.

![](images/shiva_login.png)

Será redirigido a una página que le pedirá autenticarse.
Una vez conectado, llegará a esta página.

![](images/shiva_home.png)

## Gestión del idioma
La consola está disponible en __francés__ e __inglés__. Puede cambiar el idioma de funcionamiento a través del icono __idioma__ ubicado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Ajustes del usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar al __equipo de soporte de Cloud Temple__ mediante el icono __'boya'__ ubicado en la parte superior derecha de la pantalla.

![](images/shiva_support.png)

Será guiado durante todo el proceso de solicitud de soporte.

La primera etapa es la identificación del tipo de solicitud de soporte:

- Solicitar un consejo sobre el uso de un producto (excepto incidentes),
- Solicitar asistencia en relación con su cuenta de cliente,
- Reportar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (disponibilidad de un ingeniero Cloud Temple para un problema específico).

![](images/shiva_support_01.png)

Luego tendrá la posibilidad de proporcionar más detalles e incluir archivos (imágenes o registros, por ejemplo).

El solicitante también puede especificar un nivel de criticidad (P1 a P4) en la descripción del ticket, en caso de un incidente, como:

**CRÍTICO (P1)**:

- Sospecha de fuga de datos sensibles
- Detección de acceso no autorizado a sus datos
- Compromiso de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anómalos en datos sensibles
- Violación de datos de carácter personal

**ALTA (P2)**:

- Malfuncionamiento de los accesos de usuario
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Inconsistencias en los datos
- Lentos mayores que impactan la actividad

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

![](images/shiva_support_02.png)

Una vez realizada su solicitud, es posible encontrar sus solicitudes a través del icono __'boya'__ ubicado en la parte superior derecha de la pantalla:

![](images/shiva_support_03.png)

## Acceso a las funcionalidades del usuario a través de la interfaz web

Todas las funcionalidades accesibles para su usuario (según sus derechos) están ubicadas a la izquierda de la pantalla, en la bandeja verde.
Las funcionalidades están agrupadas por módulos. Principalmente agrupa:

- El __inventario__ de sus recursos,
- El __seguimiento de las operaciones__,
- La __gestión de recursos IaaS__ (Calculo, almacenamiento, red, ...),
- La __gestión de recursos OpenIaaS__ (Calculo, almacenamiento, red, ...),
- El acceso a los __servicios adicionales__ (Bastion, monitoreo, ...),
- La __administración de su organización__ (Gestión de tenants, derechos, ...)

La activación de un módulo para un usuario depende de los derechos del usuario. Por ejemplo, el módulo __'Commande'__ no estará disponible si el usuario no tiene el derecho __'ORDER'__.

Aquí una presentación de los diferentes módulos disponibles. Nuevos módulos enriquecen la consola regularmente:

![](images/shiva_onboard_007.png)

- __Tablero de Control__: proporciona rápidamente una vista sobre el __total de recursos de cálculo y almacenamiento__, estadísticas de la __copia de seguridad__ y un __resumen de los tickets de soporte__,
- __Inventario__: proporciona una vista de todos sus recursos de tipo __'máquinas virtuales'__. Si se utilizan los __tags__, permite una vista por __tag__ (por ejemplo, vista de negocio, vista de aplicación, ...),
- __Infogerencia__: da acceso al seguimiento de sus __solicitudes de soporte__ y a la __metrología de servicios__,
- __IaaS__: permite la __gestión de infraestructuras IaaS VMware__ (Máquinas virtuales, clústeres, hipervisores, replicaciones, copia de seguridad, ...),
- __OpenIaaS__: permite la __gestión de recursos Xen Orchestra__ (Máquinas virtuales, copia de seguridad, ...),
- __OpenShift__: permite la gestión de su **arquitectura PaaS RedHat OpenShift** y el manejo de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastion__: Permite desplegar y manejar appliances bastion SSH/RDP en sus redes,
- __Red__: permite la gestión de __redes de nivel 2 y 3__, __IPs públicas__ y sus __circuitos de telecomunicaciones__,
- __Colocation__: Ofrece una vista sobre los equipos situados en zonas de __colocación compartida o dedicada__,
- __Commande__: Permite la ordenación de recursos y el seguimiento de los despliegues,
- __Administración__: Agrupa las funciones de administración de usuarios y de tenants, así como el acceso a la auditoría global.

Los pictogramas __'NEW'__ significan que el producto en cuestión ha sido proporcionado pero aún no calificado como __oferta SecNumCloud__ y __'BETA'__ que el producto ha sido proporcionado y acaba de ser calificado como __oferta SecNumCloud__.

**Auditoría - Seguimiento de Actividades**
=====================================

La página de actividades está destinada a proporcionar una visibilidad completa sobre todas las operaciones de lectura y escritura realizadas en la consola, asegurando así una mayor trazabilidad y seguridad. Destaca los dos pestañas principales: Recientes y Archivados.

![](images/shiva_logs.png)

### **Estructura de la Página**

#### **Pestañas**
	+ **Recientes**
		- Operaciones recientes
		- Seguimiento en tiempo real
	+ **Archivados**
		- Operaciones sobre un período más largo
		- Operaciones archivadas para trazabilidad y conformidad
#### **Información Mostrada**
	+ Fecha y Hora
	+ Tipo de operación
    + El estado
	+ Usuario
	+ Descripción de la operación
#### **Funcionalidad**
	+ Búsqueda/Filtrado para operaciones específicas

### **Uso**

* **Acceso:** permiso `activity_read`
* **Navegación:**
	- Seleccione la pestaña "Recientes" para las operaciones en tiempo real.
	- Elija "Archivados" para consultar el historial.
	- Utilice las funciones de búsqueda y filtrado para localizar operaciones específicas.

#### **Nota de Conformidad**
De acuerdo con la calificación SecNumCloud, el almacenamiento de eventos de la consola Cloud Temple es de un mínimo de **6 meses**, garantizando así el cumplimiento de los requisitos de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic en la parte inferior izquierda de la bandeja verde sobre el icono __'Novedades'__. Tendrá el detalle de las modificaciones para cada versión de la consola Cloud Temple.

![](images/shiva_onboard_009.png)

## Acceso a las funcionalidades del usuario vía API

Se puede acceder a todas las funcionalidades de la consola Shiva a través de la API Shiva. Puedes ver el detalle de los verbos y configuraciones a través de __'Perfil'__ y __'APIs'__:

![](images/shiva_onboard_008.png)

## Provider Terraform

Cloud Temple pone a su disposición un provider Terraform para gestionar *"as code"* su plataforma Cloud. Está disponible aquí:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest