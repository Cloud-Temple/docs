---
title: Guide de démarrage
---


##  Tenant

### Création d'un tenant

La création d'un tenant est réalisée par une demande de service indiquant :

    El nombre de su Organización
    El nombre de un contacto con su correo y número de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o en su defecto el sitio físico deseado para el tenant


### Selection d'un tenant

La selección del tenant se hace desde la página principal de la consola Shiva :

![](images/shiva_tenant.png)


*__Nota :__ Los recursos de un tenant le son propios y no son mezclables con otros tenants.*



## Cuentas de acceso a la consola Shiva

Las cuentas de acceso a la consola Shiva son creadas por la cuenta maestra del patrocinador por invitación (cualquiera que sea el referente de autenticación).
La información de identificación es global para su [Organización](concepts.md#organisations).

*__Nota :__ La federación de identidad se gestiona a nivel de la organización*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se hace por invitación. Para invitar a un usuario en una [Organización](concepts.md#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego en el submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

![](images/shiva_onboard_003.png)

Indique luego la dirección de correo del usuario

![](images/shiva_onboard_004.png)

El usuario entonces recibirá un correo de verificación.

![](images/shiva_onboard_001.png)

Una vez terminada la verificación, el usuario podrá conectarse en la consola.

### Asignación de permisos a un usuario

La gestión de derechos de usuarios se hace desde la página de usuarios.

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene derechos. Es necesario que el administrador que hizo la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Modificar'__.

El menú de activación de derechos entonces aparecerá:

![](images/shiva_onboard_005.png)

La configuración de permisos debe hacerse para cada [Tenant](concepts.md#tenants) de la 
[Organización](concepts.md#organisations).

La lista de los permisos y su definición está accesible [aquí](#permissions).

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la esquina superior derecha de la pantalla, en los __'Configuraciones de usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada tenant [Tenant](concepts.md#tenants).

### Suscripción a las notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con las temáticas activadas, los cuales serán enviados automáticamente cuando ocurran eventos correspondientes.

Es accesible en el perfil de usuario, en la pestaña "Mis suscripciones":

![](images/shiva_profil_007.png)

Por ejemplo, en caso de un incidente, se generarán notificaciones por correo electrónico específicas para esa temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y cambios en nuestro entorno operativo.


## Permisos

### ¿Cuáles son los permisos disponibles para las cuentas de usuario de la consola Shiva?

Aquí está la lista de los [permisos disponibles](#permissions).

### ¿Cómo añadir un permiso?

Aquí está la [procedimiento de asignación de permisos disponible aquí](#permissions)

### ¿Por qué no puedo añadir un permiso?

Para añadir un permiso, necesita poseer el permiso __'iam_write'__ así como el __permiso que desea añadir__.

### ¿Cómo añadir un usuario?

*__Nota__ : Para añadir un usuario, debe poseer el derecho __'iam_write'__.*

### ¿Cómo auditar los accesos/permisos de los usuarios?

Vaya a la página de usuarios y haga clic en el botón __'Exportar csv'__ :

### ¿Cómo eliminar un usuario?

En el menú __'Administración'__ en la barra verde a la izquierda de la pantalla, en el submenú __'Usuarios'__, haga clic en el icono __'Acción'__ del usuario objetivo y elija __'Eliminar'__.

*__nota__ :*
- *Para añadir un usuario, debe poseer el derecho __'iam_write'__.*
- *Si es un usuario federado, __asegúrese de que el usuario también haya sido eliminado desde el referente de identidad__.*

### ¿Cómo restablecer su contraseña?
Es posible restablecer su contraseña desde la página de inicio de sesión de la consola Shiva haciendo clic en __'¿Olvidó su contraseña?'__.

### ¿Por qué algunos usuarios están en gris?
Los usuarios en gris son aquellos que no han validado su cuenta. Al crear la cuenta, el usuario recibió un correo de verificación.

![](../../console/images/shiva_onboard_001.png)

Una vez completada la verificación, el usuario podrá conectarse a la consola.

La cuenta estará en gris hasta que la verificación sea finalizada.

### ¿Qué es un Personal Access Token (PAT)?

La generación de una clave API, también llamada __Personal Access Token (PAT)__, es una manera segura de
conectarse a las API de Shiva sin pasar por una interfaz gráfica.

### ¿Qué es el MFA y es obligatorio?
El MFA (autenticación multifactor) es un concepto de verificación de la identidad de un usuario en dos etapas, llamado __autenticación de doble factor__.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la consola Shiva, la autenticación de doble factor es obligatoria y requiere ingresar un código de un solo uso después de que el usuario haya ingresado la contraseña de su cuenta.


## Gestión de accesos y autenticación

### Autorización de acceso a un tenant: IPs autorizadas

El acceso a la consola de gestión en la nube está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con las exigencias de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de accesos no autorizados y protegiendo la infraestructura en la nube según los estándares de seguridad más elevados.

Es posible visualizar la lista de direcciones IP públicas autorizadas en el tenant y añadir una nueva dirección IP pública a esta lista directamente desde el apartado "Administración > Acceso".

![](images/shiva_ip_access_management_01.png)

Para ello, el usuario debe disponer del derecho `console_public_access_read` para consultar las IPs autorizadas y del derecho `console_public_access_write` para añadir una dirección IP pública a la lista.

Es posible añadir una nueva IP:

![](images/shiva_ip_access_management_02.png)

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*