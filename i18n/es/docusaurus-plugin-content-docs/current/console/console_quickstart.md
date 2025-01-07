---
title: Quickstart
---

## Prérequis
- Haber suscrito a una oferta Cloud Temple. Para suscribirse simplemente, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo a la dirección __contact@cloud-temple.com__.
- Tener acceso a la consola Shiva
- Tener su IPv4 pública declarada en la zona de confianza Cloud Temple (el acceso a la consola Shiva está limitado a las direcciones de confianza identificadas)

## Conexión a su tenant Cloud Temple
Shiva es accesible a través de la URL a continuación:
    https://shiva.cloud-temple.com
    O bien desde la URL directa que se le ha comunicado por correo.

La primera página le permite seleccionar [la organización](iam/concepts.md#organisations) en la cual su usuario ha sido creado.
Una vez que la empresa esté especificada, haga clic en __'Conectar'__.

![](images/shiva_login.png)

Luego será redirigido a una página que le pedirá que se autentique.
Una vez conectado, llegará a esta página.

![](images/shiva_home.png)

## Gestión del idioma
La consola está disponible en __francés__, __inglés__. Puede cambiar el idioma de funcionamiento mediante el ícono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Parámetros del usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada tenant [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar al __equipo de soporte Cloud Temple__ a través del __ícono 'boya'__ situado en la parte superior derecha de la pantalla.

![](images/shiva_support.png)

Se le guiará durante todo el proceso de solicitud de soporte.

El primer paso es la identificación del tipo de solicitud de soporte:

- Pedir un consejo sobre el uso de un producto (fuera de incidentes),
- Pedir asistencia en relación con su cuenta de cliente,
- Declarar un incidente o pedir soporte técnico.
- Pedir la asistencia de un servicio profesional (disponibilidad de un ingeniero Cloud Temple para un problema).

![](images/shiva_support_01.png)

Luego tiene la posibilidad de dar detalles e incluir archivos (imagen o registros por ejemplo).

![](images/shiva_support_02.png)

Una vez realizada su solicitud, es posible encontrar sus solicitudes a través del __ícono 'boya'__ situado en la parte superior derecha de la pantalla:

![](images/shiva_support_03.png)

## Acceso a las funcionalidades del usuario a través de la interfaz web

El conjunto de funcionalidades accesibles para su usuario (dependiendo de sus derechos) está situado a la izquierda de la pantalla, en la barra verde.
Las funcionalidades están agrupadas por módulo. Esto agrupa principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de las operaciones__,
- El __control de los recursos IaaS__ (Cálculo, almacenamiento, red, ...)
- El __control de los recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...)
- El acceso a los __servicios adicionales__ (Bastion, monitoreo, ...)
- La __administración de su organización__ (Gestión de los tenants, derechos, ...)

La activación de un módulo para un usuario depende de los derechos del usuario. Por ejemplo, el módulo __'Pedido'__ no estará disponible si el usuario no tiene el derecho __'ORDER'__.

Aquí una presentación de los diferentes módulos disponibles. Nuevos módulos enriquecen la consola regularmente:

![](images/shiva_onboard_007.png)

- __Tablero de control__ : permite tener rápidamente una vista del __total de recursos de cálculo y almacenamiento__, las estadísticas del __respaldo__ y un __resumen de los expedientes de soporte__,
- __Inventario__ : permite tener una vista de todos sus recursos del tipo __'máquinas virtuales'__. Si se utilizan los __etiquetas__, permite tener una vista por __etiqueta__ (por ejemplo, vista de negocio, vista aplicativa, ...),
- __Infogestión__ : da acceso al seguimiento de sus __solicitudes de soporte__ y a la __metrología de los servicios__,
- __IaaS__ : permite el __control de las infraestructuras IaaS VMware__ (Máquinas virtuales, clusters, hipervisores, réplicas, respaldo, ...),
- __OpenIaaS__ : permite el __control de los recursos Xen Orchestra__ (Máquinas virtuales, respaldo, ...),
- __OpenShift__ : permite el control de su **arquitectura PaaS RedHat Openshift** y el manejo de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastion__ : permite desplegar y controlar dispositivos bastion SSH/RDP en sus redes,
- __Red__ : permite el control de las __redes de nivel 2 y 3__, de las __IP públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocación__ : ofrece la vista de los equipos ubicados en la zona de __colocación compartida o dedicada__,
- __Pedido__ : permite ordenar recursos y seguir los despliegues,
- __Administración__ : agrupa las funciones de administración de usuarios y de tenants así como el acceso a la jornalización global.

## Acceso a las funcionalidades del usuario a través del API

El acceso a todas las funcionalidades de la consola Shiva es posible a través del API Shiva. Puede tener el detalle de los verbos y las configuraciones a través de __'Perfil'__ y __'APIs'__:

![](images/shiva_onboard_008.png)

## Proveedor Terraform

Cloud Temple pone a su disposición un proveedor Terraform para controlar *"as code"* su plataforma Cloud. Es accesible aquí:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest