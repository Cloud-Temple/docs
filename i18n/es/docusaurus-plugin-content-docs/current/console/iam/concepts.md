---
conceptos:
---

Importar imágenes:
- shivaOnboard_003 desde './images/shiva_onboard_003.png'
- shivaOnboard_004 desde './images/shiva_onboard_004.png'
- shivaOnboard_001 desde './images/shiva_onboard_001.png'
- shivaOnboard_005 desde './images/shiva_onboard_005.png'
- shivaProfil_012 desde './images/shiva_profil_012.png'
- shivaProfil_014 desde './images/shiva_profil_014.png'
- shivaProfil_015 desde './images/shiva_profil_015.png'
- shivaProfil_016 desde './images/shiva_profil_016.png'
- shivaProfil_013 desde './images/shiva_profil_013.png'
- shivaProfil_010 desde './images/shiva_profil_010.png'
- shivaProfil_009 desde './images/shiva_profil_009.png'
- shivaProfil_011 desde './images/shiva_profil_011.png'
- shivaProfil_006 desde './images/shiva_profil_006.png'
- shivaProfil_007 desde './images/shiva_profil_007.png'
- shivaTenantRessources_01 desde './images/shiva_tenant_ressources_01.png'

## Usuarios

Los cuentas de acceso a la consola Shiva se crean por el cuenta matriz del cliente en invitación (independientemente del repositorio de autenticación).
Las información de identificación son globales para tu [Organización](#organizaciones).

*__Nota:__ [La federicación de identidad se gestiona al nivel de la organización](#mecanismos-autenticación)*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza mediante invitación. Para invitar a un usuario dentro de una [Organización](#organizaciones), navegue al menú __'Administración'__ en la barra superior izquierda y luego al submenú __'Usuarios'.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

A continuación, indique la dirección de correo electrónico del usuario:

<img src={shivaOnboard_004} />

El usuario recibirá un correo de confirmación.

<img src={shivaOnboard_001} />

Una vez completada la confirmación, el usuario podrá iniciar sesión en la consola.


### Explicación:
- La traducción se ha centrado principalmente en el texto explicativo que describe el proceso de creación de un usuario dentro de una organización, manteniendo la estructura y formato Markdown original.
- No se han modificado elementos HTML o Markdown estructurales (como etiquetas <a>, <div>, encabezados #, listas, bloques de código) a menos que el contenido interno de los tableaux (incluyendo encabezados de tabla) haya sido traducido.
- Los blocs de código Python no se han modificado; solo se ha mantenido la indicación de no traducir nombres de variables, funciones, clases, sintaxis Python, comentarios y la indentación.
- Contenidos dentro de corchetes [], parenthèses o URLs se han dejado intactos.
- Nuevas líneas, espacios o formato no se han añadido fuera del texto original.
- El contenido HTML bruto se ha dejado sin modificación.

### Attribution of User Permissions

User permission management is handled from the user profile page.

<img src={shivaOnboard_003} />

By default, a user has no permissions. Therefore, it's essential that the administrator who invited them grants the necessary rights for their role. This can be done by clicking on the "Actions" menu of the user and selecting "Modify".

The permission activation menu then appears:

<img src={shivaOnboard_005} />

Permission configuration must be set up for each [Tenant](#tenant) within an [Organization](#organizations).

The list of permissions along with their definitions can be found [here](#permissions).

### Re-registración de un usuario

Cuando un usuario ha sido provisionado pero no ha confirmado su inscripción dentro del plazo de vencimiento del correo electrónico enviado por la Consola, ya no podrá confirmar su inscripción. En este caso, se puede enviarle un enlace para que reinicie su primera inscripción.

La re-registración de un usuario debe realizarse en el panel __'Usuario'__ del menú Administración, ubicado en la parte inferior izquierda del escritorio.

Seleccione al usuario al que desea re-inscribirlo, luego haga clic en el botón de acción ubicado al final de la línea y __'Re-registración'.

__Advertencia__: Asegúrese de estar al corriente de la solicitud de re-inscripción de su cuenta de usuario. Gracias por señalar cualquier solicitud no relacionada con usted a través del servicio de soporte.

<img src={shivaProfil_012} />

### Actualizar su perfil

Este procedimiento solo está disponible para cuentas locales (no SSO).

Seleccione en su __Perfil__ (en la parte superior derecha del escritorio), luego __Configuración de usuario__ y elija la acción __Actualizar su perfil__.

A continuación, vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Siga simplement las instrucciones para actualizar su perfil.

<img src={shivaProfil_014} />

### Reiniciar Contraseña

Esta acción solo está disponible para cuentas locales (no SSO).

Seleccione en su __'Perfil'__, ubicado en la parte superior derecha de la pantalla, luego __'Configuración del usuario'__ y elija la opción __'Reiniciar contraseña'.__

A continuación, vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Siga simplemente las instrucciones para actualizar su contraseña.

<img src={shivaProfil_015} />

### Reiniciar el factor de autenticación de doble cifrado

Este proceso solo está disponible para cuentas locales (no SSO).

Haga clic en su **Perfil** (en la parte superior derecha del escritorio), luego en **Configuración del usuario**, y seleccione la opción **Reiniciar MFA**.

A continuación, vaya a su correo electrónico y haga clic en el enlace generado por la Consola. Siga las instrucciones para actualizar su factor de autenticación de doble cifrado.

<img src={shivaProfil_016} />

### Eliminación de un usuario

La eliminación de un usuario debe realizarse en el panel __'Usuario'__ del menú Administración, ubicado en la parte inferior izquierda del escritorio.

Seleccione al usuario que desea eliminar, luego haga clic en el botón de acción ubicado al final de la línea y __'Eliminar'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: No se permite eliminar a sí mismo ni tampoco a un usuario __'Propietario'__.

### Desconectar

La desconexión de un usuario debe realizarse en su __'Perfil'__, ubicado en la parte superior derecha del escritorio, y seleccionar __'Desconectar'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una desconexión automática se lleva a cabo cuando expira el token de sesión (JWT Token).

### Cambio de idioma del usuario

El cambio de idioma del usuario debe realizarse en el __'Perfil'__ del usuario, ubicado en la parte superior derecha del escritorio, dentro de los __'Configuraciones del usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant] individualmente.

### Abonnement a Notificaciones Thematicas

La gestión de los abonos permite recibir correos electrónicos relacionados con las temáticas activadas que se enviarán automáticamente en caso de ocurrir eventos correspondientes.

Esta función está disponible en el perfil del usuario, dentro del apartado "Mis suscripciones" :

<img src={shivaProfil_007} />

Por ejemplo, en caso de un incidente, se generarán correos electrónicos específicos por esta temática.

La lista de las temáticas disponibles puede variar y mejorarse gradualmente para adaptarse a los necesidades y cambios en nuestro entorno operativo.

## Permisos

La consola Shiva ofrece una gestión fina de los permisos de los usuarios de una organización, con la separación por teniente.
Inicialmente, es el cuenta principal del cliente quien permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el permiso __'iam_write__' permite a un usuario administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de su organización

Al crear un usuario, este no posee ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de manera independiente, sin superposición con otros permisos. Aplican en conjunto, lo que significa que un usuario debe tener todos los permisos necesarios para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y cada entidad de su organización:

- Permisos de tipo "leer": permiten solo la consulta de recursos sin posibilidad de modificación.
- Permisos de tipo "escribir": autorizan la modificación de configuraciones.
- Permisos de tipo "gestión": permiten la gestión avanzada de recursos.
- Permisos de tipo "acceso al console": autorizan las conexiones tipo PMAD en las recursos.
- Permisos de tipo "energía de máquina virtual": autorizan la gestión del suministro de energía de una máquina virtual.

**Nota**: Estos no son roles, sino permisos. Para modificar una configuración, es necesario tener el permiso READ y WRITE.

Última actualización: 16/07/2025

| Nombre del permiso                          | Descripción del permiso                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| actividad_leer                                 | Consulta de registros de auditoría y actividades                                                                                    |
| actividad_escribir                            | Gestión de registros de auditoría y actividades                                                                                         |
| backup_iaas_opensource_leer                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                          |
| backup_iaas_opensource_escribir               | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                          |
| backup_iaas_spp_leer                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                            |
| backup_iaas_spp_escribir                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                            |
| bastion_leer                                  | Consulta de recursos de tipo bastion                                                                                    |
| bastion_escribir                                 | Gestión (aplicaciones, sesiones, etc.) de recursos de tipo Bastion                                                             |
| bastion_acceso_al_console                     | Autorización de acceso a la consola (ssh/rdp) de una recurso protegida por una aplicación Bastion                                 |
| compute_iaas_opensource_acceso_al_console     | Oferta OpenIaaS -Abrir la consola de una máquina virtual                                                                |
| compute_iaas_opensource_infraestructura_leer  | Oferta OpenIaaS -Consulta de datos avanzados de recursos Xen Orchestra |
| compute_iaas_opensource_infraestructura_escribir | Oferta OpenIaaS -Gestión avanzada de recursos Xen Orchestra                                                                          |
| compute_iaas_opensource_leer                  | Oferta OpenIaaS -Consulta de recursos de tipo Máquinas Virtuales                                                        |
| compute_iaas_opensource_gestión             | Oferta OpenIaaS -Gestión de recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_energía_de_vm        | Oferta OpenIaaS -Gestión del suministro de energía de una máquina virtual                                                              |
| compute_iaas_opensource_replicación_recuperación | Oferta OpenIaaS -Gestión de la repliación                                                                 |
| compute_iaas_vmware_acceso_al_console        | Oferta Vmware -Abrir la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infraestructura_leer      | Oferta Vmware -Consulta de datos avanzados de recursos VMware (reglas de afinidad/antáfisa, configuración DRS, etc)  |
| compute_iaas_vmware_infraestructura_escribir   | Oferta Vmware -Gestión avanzada de recursos VMware                                                                           |
| compute_iaas_vmware_leer                      | Oferta Vmware -Consulta de recursos de tipo Máquinas Virtuales                                                         |
| compute_iaas_vmware_gestión                | Oferta Vmware -Gestión de recursos de tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)                                                              |
| compute_iaas_vmware_energía_de_vm           | Oferta Vmware -Gestión del suministro de energía de una máquina virtual                                                               |
| baremetal_gestión                          | Oferta Bare Metal -Gestión de recursos de tipo Bare Metal                                                               |
| baremetal_leer                                | Oferta Bare Metal -Consulta de recursos de tipo Bare Metal                                                               |
| baremetal_acceso_al_console                  | Oferta Bare Metal -Abrir la consola de un Bare Metal                                                                  |
| accesodominio_leer                           | Consulta de IPs autorizadas para acceder a la consola                                                                         |
| accesodominio_escribir                          | Añadir IPs autorizados para acceder a la consola                                                                                 |
| documentacion_leer                            | Consulta de recursos de documentación de Confluence                                                                          |
| alojamiento_leer                              | Consulta de recursos de tipo colocación                                                                                 |
| iam_offline_escribir                          | Creación y eliminación de tokens de acceso personal (PAT)                                                                        |
| iam_leer                                      | Consulta de permisos del usuario                                                                                           |
| iam_escribir                                     | Gestión de permisos del usuario                                                                                                |
| intervención_leer                             | Consulta de cambios y despliegues planificados en la plataforma                                                              |
| inventario_leer                               | Consulta de recursos de tipo Inventario                                                                                 |
| inventario_escribir                          | Gestión de recursos de tipo Inventario                                                                                      |
| monitoreo_leer                                | Consulta del monitoreo                                                                                                     |
| monitoreo_escribir                           | Gestión del monitoreo                                                                                                          |
| métrica_leer                                  | Consulta de datos de salud sobre máquinas virtuales y hosts                                                         |
| red_leer                                      | Consulta de recursos de tipo Red                                                                                         |
| red_escribir                                     | Gestión de recursos de tipo Red                                                                                                  |
| orden_leer                                   | Consulta de comandos de infraestructura                                                                                     |
| orden_escribir                                  | Creación de un comando de infraestructura                                                                                            |
| almacenamiento_iam_gestión                  | Permitir la gestión de cuentas de almacenamiento en el producto S3                                                                       |
| almacenamiento_leer                          | Permitir ver los contenedores y configuraciones de contenedores                                                                   |
| almacenamiento_escribir                         | Permitir editar contenedores y configuraciones de contenedores                                                                  |
| openshift_gestión                           | Permitir conectarse a plataformas OpenShift (al alcance del teniente)                                                          |
| gestión_de_incidentes                       | Gestión de incidentes                                                                                                                  |
| incidente_leer                                 | Consulta de incidentes                                                                                                            |

## Organizaciones

La organización está relacionada con tu __cuenta de cliente__ y el contrato Cloud Temple asociado. Representa a tu entidad (empresa, departamento, equipo, etc.) que mantiene la relación contractual entre Cloud Temple y tí.

### Principio de una organización

La organización tiene cuatro grandes funciones:

- Representa __la entidad contratada__ para aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local en el console Shiva o distante a través de un servicio de federação de identidad,
- Alberga todos los __cuentas de usuario__,
- Federa los __tenedores__ (Producción, Prueba, Desarrollo, Aplicación 1, Aplicación 2, etc.) que define para los necesidades de su arquitectura Cloud.

Los roles (permisos/autorizaciones) de los usuarios son configurables para cada tenedor definido en su organización. Por ejemplo, un cuenta puede estar autorizada a solicitar recursos en un tenedor, pero no en otro.

### Mecanismos de Autenticación

La consola Shiva permite al nivel de la organización el configuración del mecanismo de autenticación. Puede utilizar el repositorio de autenticación local de la consola Shiva o bien integrar su organización a uno de sus repositorios de autenticación.

Los siguientes repositorios externos se soportan:

- Repositorios compatibles __OpenID Connect__,
- Repositorios compatibles __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Hosting

The hosting refers to a **grouping of resources within an organization**. An organization inherently has at least one tenant, referred to as the default tenant and can be renamed. Typically, multiple tenants are employed for the purpose of segmenting responsibilities or technical boundaries.

For instance:

- A Production tenant
- A Preproduction tenant
- A Receipt tenant
- A Qualification tenant

It's also feasible to organize things using a **application view** or by **criticality**:

- An Application 1 tenant or Criticality 1 tenant
- An Application 2 tenant or Criticality 2 tenant
- ...

Technical resources procured are allocated to a specific tenant and are not shared with others. For example, a Hypervisor cluster and associated L2 networks are only available within one tenant. Regarding networking, it's possible to request 'cross-tenant' networks for ensuring network continuity between tenants.

User permissions must be defined at the tenant level. Thus, each organization needs to carefully consider its desired tenants. This aspect is typically addressed during the initial setup workshop, when an organization is created.

It's possible to evolve the architecture by adding or removing tenants.

A tenant cannot be empty; it must inherently be initialized with a minimum of resources:

- A availability zone (AZ, i.e., a physical data center),
- A compute cluster,
- An storage space,
- A VLAN network.

| Command Reference                                         | Unité    | SKU                     |
|-----------------------------------------------------------|----------|-------------------------|
| HOSTING - *(REGION)* - Activation of a tenant              | 1 tenant | csp:tenant:v1           |
| HOSTING - *(REGION)* - Activation of an availability zone | 1 tenant | csp:(region):iaas:az:v1 |

### Gestión de propietarios en un teniente

Cada teniente cuenta con al menos un propietario, lo que garantiza una responsabilidad clara y una gestión eficiente de las recursos asociados. Además, es posible declarar múltiples propietarios en un mismo teniente, facilitando la colaboración y la toma de decisiones compartidas. A continuación, se presentan información clave a considerar al gestionar estos propietarios:

### Informaciones importantes sobre la gestión de propietarios

1. **Definición**:
   - Propietario en el contexto del cloud computing y de los sistemas IT se refiere a una persona o entidad que tiene la propiedad legal y los derechos administrativos sobre un recurso informático, como un servidor virtual, un almacenamiento en la nube, un sistema de gestión de bases de datos, etc.

2. **Responsabilidades**:
   - Gestionar el acceso y la seguridad del recurso.
   - Supervisar el rendimiento y la disponibilidad del servicio.
   - Realizar mantenimientos preventivos y correctivos.
   - Asegurar el cumplimiento de políticas de seguridad y privacidad.
   - Planificar y ejecutar actualizaciones y mejoras del sistema.

3. **Gestión de Propietarios**:
   - La gestión de propietarios puede ser centralizada o descentralizada, dependiendo del modelo de cloud computing adoptado (publico, privado, híbrido).
   - En modelos publicos, los proveedores de servicios manejan la infraestructura subyacente; en privados, las organizaciones tienen más control sobre ella.

4. **Gestión de Identidades y Acceso (IAM)**:
   - Implementar controles de acceso basados en roles para gestionar quién puede acceder a qué recursos.
   - Utilizar autenticación multifactor para fortalecer la seguridad.

5. **Automatización y Orchestración**:
   - Emplear herramientas de automatización (como Ansible, Puppet, Chef) para la gestión de propietarios y la configuración continua.
   - Implementar políticas de automatización para la gestión de recursos en tiempo real.

6. **Monitoreo y Gestión de Alertes**:
   - Utilizar herramientas de monitoreo (como Nagios, Zabbix) para vigilar el rendimiento y la salud del sistema.
   - Configurar alertas automáticas para problemas críticos.

7. **Gestión de Cambios y Continuidad**:
   - Implementar procesos de gestión de cambios (como CI/CD) para automatizar el despliegue de nuevas funcionalidades.
   - Planificar y ejecutar estrategias de continuidad de negocios para minimizar el impacto de incidentes.

8. **Cumplimiento Normativo**:
   - Asegurar que las prácticas de gestión de propietarios cumplan con normativas locales e internacionales (como GDPR, HIPAA).

9. **Costos y Gestión de Presupuesto**:
   - Monitorear el uso de recursos para optimizar los costos.
   - Implementar mecanismos de control de gastos basados en roles o departamentos.

10. **Evaluación y Mejora Continua**:
    - Realizar auditorías periódicas para evaluar la eficiencia del sistema de gestión de propietarios.
    - Utilizar retroalimentación de usuarios y análisis de datos para mejorar continuamente las prácticas de gestión.

### Ejemplo Markdown con traducción:

```markdown
# Informaciones importantes sobre la gestión de propietarios

## Definición
- Propietario en el contexto del cloud computing y de los sistemas IT se refiere a una persona o entidad que tiene la propiedad legal y los derechos administrativos sobre un recurso informático, como un servidor virtual, un almacenamiento en la nube, un sistema de gestión de bases de datos, etc.

## Responsabilidades
- Gestionar el acceso y la seguridad del recurso.
- Supervisar el rendimiento y la disponibilidad del servicio.
- Realizar mantenimientos preventivos y correctivos.
- Asegurar el cumplimiento de políticas de seguridad y privacidad.
- Planificar y ejecutar actualizaciones y mejoras del sistema.

## Gestión de Propietarios
- La gestión de propietarios puede ser centralizada o descentralizada, dependiendo del modelo de cloud computing adoptado (publico, privado, híbrido).
- En modelos publicos, los proveedores de servicios manejan la infraestructura subyacente; en privados, las organizaciones tienen más control sobre ella.
```

### Número de propietarios

* No hay límite técnico en cuanto al número de propietarios que se pueden definir en el entorno.
* La interfaz de gestión (IGM) emite un aviso cuando se supera el número de 3 propietarios, con el fin de incentivar la limitación del número de propietarios por razones de seguridad y gestión óptima de los accesos.

### 2. Adición de un nuevo propietario

* Al agregar un nuevo propietario, la actualización de sus permisos puede requerir un tiempo de propagación que puede alcanzar los 60 minutos.
- Este tiempo de latencia es normal y permite asegurarse de que los derechos de acceso se apliquen correctamente a todos los servicios y recursos asociados.

### 2. Permisos de un propietario

* Un propietario recibirá todas las permisos relacionados con los productos activados en su tenencia.
- No es posible modificar los permisos de un propietario.

#### 3. Remoción de un propietario

* Para retirar a un propietario del inquilino, el usuario debe presentar una solicitud al soporte.
- Esta procedencia garantiza que las modificaciones en los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de acceso.

### Autorización de acceso a un teniente: IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previas autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad incrementada al permitir el acceso solo a los usuarios provenientes de rangos de direcciones IP específicos, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más altos.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos dentro de un teniente

Es posible visualizar las recursos cloud consumidos dentro de un teniente, lo que permite una visión detallada del uso de los diferentes servicios desplegados. Esta función permite a los usuarios seguir en tiempo real la consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso en función de sus necesidades.

En el menú de la consola, haga clic en "Informe de Consumo" y seleccione la pérdida de tiempo deseada. De esta forma, podrá visualizar en detalle la consumo de recursos cloud durante la pérdida de tiempo especificada, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

<img src={shivaTenantRessources_01} />