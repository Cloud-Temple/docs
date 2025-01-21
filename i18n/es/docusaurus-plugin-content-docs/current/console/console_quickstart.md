---
title: Quickstart
---

## Prérequis
- Avoir souscrit à une offre Cloud Temple. Pour souscrire simplement, vous pouvez [nous contacter](https://www.cloud-temple.com/contactez-nous/) ou par mail à l'adresse __contact@cloud-temple.com__.
- Avoir un acceso a la consola Shiva
- Tener su IPv4 pública declarada en la zona de confianza de Cloud Temple (el acceso a la consola shiva está limitado a las direcciones de confianza identificadas)

## Connexion à votre tenant Cloud Temple
Shiva es accesible a través de la URL siguiente:
    https://shiva.cloud-temple.com
    O desde la URL directa que se le ha comunicado por correo.

La primera página le permite seleccionar [la organización](iam/concepts.md#organisations) en la cual su usuario ha sido creado.
Una vez informada la empresa, haga clic en __'Se connecter'__.

![](images/shiva_login.png)

Usted será redirigido a una página que le pedirá autenticarse.
Una vez conectado, llegará a esta página.

![](images/shiva_home.png)

## Gestión del idioma
La consola está disponible en __francés__, __inglés__. Puede cambiar el idioma de funcionamiento usando el ícono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Parámetros del usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada tenant [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar al __equipo de soporte de Cloud Temple__ a través del __ícono 'salvavidas'__ situado en la parte superior derecha de la pantalla.

![](images/shiva_support.png)

Será guiado durante todo el proceso de solicitud de soporte.

La primera etapa es la identificación del tipo de solicitud de soporte:

- Solicitar un consejo sobre el uso de un producto (fuera de incidencia),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Declarar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (provisión de un ingeniero de Cloud Temple para un problema específico).

![](images/shiva_support_01.png)

Luego tiene la posibilidad de proporcionar detalles adicionales e incluir archivos (por ejemplo, imágenes o registros).

El solicitante también puede especificar un nivel de criticidad (P1 a P4) en la descripción del ticket, en caso de un incidente, tales como:

**CRÍTICO (P1) - Notificación inmediata**:

- Sospecha de fuga de datos sensibles
- Detección de acceso no autorizado a sus datos
- Compromiso de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anómalos en datos sensibles
- Violación de datos personales

**ALTO (P2) - Notificación <2h**:

- Mal funcionamiento de los accesos de usuarios
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Incoherencia en los datos
- Lentitud mayor que afecta la actividad

**MEDIO (P3) - Notificación <4h**:

- Problema de rendimiento localizado
- Incidente en una función no crítica
- Error de configuración con impacto limitado
- Dificultad de acceso puntual

**BAJO (P4) - Notificación <24h**:

- Solicitud de investigación
- Anomalía sin impacto directo
- Pregunta de conformidad
- Necesidad de aclaración técnica

![](images/shiva_support_02.png)

Una vez realizada su solicitud, es posible encontrar sus solicitudes a través del __ícono 'salvavidas'__ situado en la parte superior derecha de la pantalla:

![](images/shiva_support_03.png)

## Acceso a las funcionalidades del usuario mediante la interfaz web

Todas las funcionalidades accesibles para su usuario (según sus derechos) están situadas a la izquierda de la pantalla, en la banda verde.
Las funcionalidades están agrupadas por módulo. Esto agrupa principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de operaciones__,
- La __gestión de los recursos IaaS__ (Cálculo, almacenamiento, red, ...)
- La __gestión de los recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...)
- El acceso a __servicios adicionales__ (Bastion, monitoreo, ...)
- La __administración de su organización__ (Gestión de tenants, derechos, ...)

La activación de un módulo para un usuario depende de los derechos del usuario. Por ejemplo el módulo __'Pedido'__ no estará disponible si el usuario no tiene el derecho __'ORDER'__.

Aquí hay una presentación de los diferentes módulos disponibles. Nuevos módulos enriquecen la consola regularmente:

![](images/shiva_onboard_007.png)

- __Tablero de Control__ : permite tener rápidamente una vista del __total de recursos de cálculo y almacenamiento__, las estadísticas del __respaldo__ y una __síntesis de los casos de soporte__,
- __Inventario__ : permite tener una vista de todos sus recursos tipo __'máquinas virtuales'__. Si se utilizan los __tags__, permite una vista por __tag__ (por ejemplo, vista de negocio, vista de aplicación, ...),
- __Gestión__ : da acceso al seguimiento de sus __solicitudes de soporte__ y a la __metrología de servicios__,
- __IaaS__ : permite la __gestión de las infraestructuras IaaS VMware__ (Máquinas virtuales, clusters, hipervisores, replicaciones, respaldo, ...),
- __OpenIaaS__ : permite la __gestión de los recursos Xen Orchestra__ (Máquinas virtuales, respaldo, ...),
- __OpenShift__ : permite la gestión de su **arquitectura PaaS RedHat Openshift** y la administración de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastion__ : Permite desplegar y gestionar appliances bastion SSH/RDP en sus redes,
- __Red__ : permite la gestión de las __redes de nivel 2 y 3__, las __IP públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocación__ : Ofrece la vista sobre los equipos situados en zona de __colocación compartida o dedicada__,
- __Pedido__ : Permite el pedido de recursos y el seguimiento de despliegues,
- __Administración__ : Agrupa las funciones de administración de usuarios y tenants así como el acceso a la journalización global.

Los pictogramas __'NEW'__ significan que el producto en cuestión ha sido provisionado pero aún no está calificado como __oferta SecNumCloud__ y __'BETA'__ significan que el producto en cuestión ha sido provisionado y acaba de ser calificado como __oferta SecNumCloud__.

## Acceso a las funcionalidades del usuario mediante la API

El acceso a todas las funcionalidades de la consola Shiva es posible a través de la API Shiva. Puede obtener el detalle de los verbos y configuraciones a través de __'Perfil'__ y __'APIs'__ :

![](images/shiva_onboard_008.png)

## Proveedor Terraform

Cloud Temple pone a su disposición un proveedor de Terraform para gestionar *"as code"* su plataforma Cloud. Es accesible aquí:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest