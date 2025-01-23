---
title: Quickstart
---

##  Tenant

### Créación de un tenant

La creación de un tenant se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para el tenant


### Selección de un tenant

La selección del tenant se hace desde la página principal de la consola Shiva:

![](images/shiva_tenant.png)


*__Nota:__ Los recursos de un tenant le son propios y no se mezclan con otros tenants.*



## Cuentas de acceso a la consola Shiva

Las cuentas de acceso a la consola Shiva son creadas por la cuenta maestra del solicitante bajo invitación (cualquiera sea el directorio de autenticación).
La información de identificación es global para su [Organización](concepts.md#organisations).

*__Nota:__ La federación de identidad se gestiona a nivel de la organización.*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario en una [Organización](concepts.md#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego en el submenú __'Usuarios'__.  

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios. 

![](images/shiva_onboard_003.png)

Luego indique la dirección de correo electrónico del usuario

![](images/shiva_onboard_004.png)

El usuario entonces recibirá un correo de verificación.  

![](images/shiva_onboard_001.png)

Una vez la verificación finalizada, el usuario podrá conectarse a la consola.

### Asignación de permisos a un usuario

La gestión de derechos de usuarios se hace desde la página de usuario. 

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que realizó la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Editar'__.  

El menú de activación de derechos aparece entonces:

![](images/shiva_onboard_005.png)

La configuración de permisos se debe hacer para cada [Tenant](concepts.md#tenants) de la
[Organización](concepts.md#organisations).

La lista de permisos y su definición está disponible [aquí](#permissions).

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se debe realizar en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Parámetros de usuario'__.

![](images/shiva_profil_006.png)

La configuración se hace para cada tenant [Tenant](concepts.md#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir los correos electrónicos relacionados con los temas activados que se enviarán automáticamente cuando ocurran eventos correspondientes.

Es accesible en el perfil del usuario, en la pestaña "Mis suscripciones":

![](images/shiva_profil_007.png)

Por ejemplo, en caso de incidencia, se generarán notificaciones por correo electrónico específicas para este tema.

La lista de temas disponibles está sujeta a evolución y se enriquecerá progresivamente para adaptarse a las necesidades y a los cambios en nuestro entorno operativo.


## Permisos

### ¿Cuáles son los permisos disponibles para las cuentas de usuario de la consola Shiva?

Aquí está la lista de [permisos disponibles](#permissions).

### ¿Cómo añadir un permiso?

Aquí está la [procedimiento para asignar permisos está disponible aquí](#permissions)

### ¿Por qué no puedo añadir un permiso?

Para añadir un permiso, necesita poseer el permiso __'iam_write'__ así como el __permiso que desea añadir__.

### ¿Cómo añadir un usuario?

*__Nota__ : Para añadir un usuario, debe poseer el derecho __'iam_write'__.*

### ¿Cómo auditar los accesos/permisos de los usuarios?

Vaya a la página de usuarios y haga clic en el botón __'Exportar csv'__:

### ¿Cómo eliminar un usuario?

En el menú __'Administración'__ en la barra verde a la izquierda de la pantalla, en el submenú __'usuario'__, haga clic en el icono __'Acción'__ del usuario objetivo y elija __'Eliminar'__.

*__Nota__ :*
- *Para añadir un usuario, debe poseer el derecho __'iam_write'__.*
- *Si se trata de un usuario federado, __asegúrese de que el usuario también ha sido eliminado del directorio de identidad__.*

### ¿Cómo restablecer su contraseña?
Es posible restablecer su contraseña desde la página de inicio de sesión de la consola Shiva haciendo clic en __'¿Olvidó su contraseña?'__.

### ¿Por qué algunos usuarios están en gris?
Los usuarios en gris son aquellos que no han validado su cuenta. Durante la creación de la cuenta, el usuario recibió un correo de verificación.  

![](../../console/images/shiva_onboard_001.png)

Una vez la verificación finalizada, el usuario podrá conectarse a la consola.  

La cuenta está en gris mientras la verificación no haya sido completada.

### ¿Qué es un Personal Access Token (PAT)?

La generación de una clave API, también llamada __Personal Access Token (PAT)__, 
es una forma segura de conectarse a las API de Shiva sin pasar por una interfaz gráfica. 

### ¿Qué es el MFA y es obligatorio?
El MFA (autenticación multifactor) es un concepto de verificación de la identidad de un usuario en dos pasos, llamado __autenticación de doble factor__.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la consola Shiva, la autenticación de doble factor es obligatoria y requiere ingresar un código de un solo uso una vez que el usuario ha introducido la contraseña de su cuenta. 


## Gestión de accesos y autenticación

### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de gestión de la nube está estrictamente limitado a las direcciones IP previamente autorizadas, en cumplimiento con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado permitiendo el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura de la nube según los estándares de seguridad más altos.

Ahora es posible mostrar la lista de direcciones IP públicas autorizadas en el tenant y añadir una nueva dirección IP pública a esta lista directamente desde la pestaña "Administración > Acceso". 

![](images/shiva_ip_access_management_01.png)

Para ello, el usuario debe disponer del derecho `console_public_access_read` para consultar las IP autorizadas, y del derecho `console_public_access_write` para añadir una dirección IP pública a la lista.

Es posible entonces añadir una nueva IP:

![](images/shiva_ip_access_management_02.png)

Nota: *La eliminación de una IP autorizada se hace mediante una solicitud de soporte en la consola Cloud Temple.*