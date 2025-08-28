---
title: Recomendaciones de seguridad
---

## Recommandations para el uso seguro de los servicios Cloud Temple

Los servicios de Cloud Temple le ofrecen una infraestructura cloud altamente segura por diseño. Sin embargo, ciertas buenas prácticas de seguridad son de su responsabilidad como usuario de estos servicios. Esta guía le ayuda a reforzar la seguridad de su entorno cloud aprovechando las funcionalidades ofrecidas en la Consola.

Encontrará recomendaciones concretas para:

- Proteger el acceso a la Consola cloud;
- Gestionar los accesos y permisos de manera controlada;
- Asegurar los recursos desplegados mediante nuestros servicios cloud.

## Acceso a la Consola

El acceso a la Consola es la puerta de entrada a todos sus servicios Cloud Temple. Por lo tanto, es esencial protegerla eficazmente.  

### Restringir el acceso a la Consola mediante filtrado IP

El acceso a la consola de gestión cloud está limitado a las direcciones IP autorizadas previamente. Esta restricción permite autorizar el acceso únicamente a los usuarios provenientes de los rangos de IP especificados, minimizando así los riesgos de accesos no autorizados.

Puede configurar estas restricciones IP en los parámetros de su organización. Para saber cómo configurar el filtrado IP, consulte la [Gestion des accès et authentification | Documentation Cloud Temple](../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Para maximizar la eficacia de este mecanismo, asegúrese de:

- **Limitar el número de direcciones IP autorizadas** a las estrictamente necesarias;
- Evitar rangos demasiado amplios o genéricos;
- Añadir **únicamente IP provenientes de entornos controlados** (ej: IP de salida de su red empresarial);
- Proscribir, o limitar al máximo, las direcciones IP individuales (ej: IP pública del domicilio de su personal IT);
- Proscribir, o limitar, las direcciones IP de un tercero (ej: proveedor de servicios);
- Mantener esta lista actualizada en caso de cambios en su infraestructura de red.

Para los accesos a distancia (teletrabajo, proveedores...), privilegie una conexión a través de su red empresarial vía VPN en lugar de autorizar directamente direcciones IP individuales. Esto reduce la superficie de exposición de la Consola y centraliza la gestión de accesos dentro de su organización.

### Utilizar federación de identidad

La federación de identidad permite integrar la Consola Cloud Temple con su proveedor de identidad (IdP), activando el SSO. Este enfoque centraliza la autenticación y ofrece varios beneficios:

- Gestión unificada de cuentas: creación, modificación y eliminación a través de su directorio;
- Reducción de la superficie de ataque: las cuentas locales se vuelven innecesarias o están limitadas;
- Mayor trazabilidad: los accesos se registran en su IdP;
- Integración reforzada: MFA, alertas, políticas de seguridad contextuales…;
- Facilidad de cumplimiento: coherencia con sus prácticas internas.

Por estas razones, **se recomienda la federación de identidades**, especialmente para entornos con un gran número de usuarios o con exigencias de seguridad elevadas.

Siga nuestras guías paso a paso para integrar su proveedor de identidad:
- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../console/iam/tutorials/sso_aad)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../console/iam/tutorials/sso_adfs)

### Activar la autenticación multifactor (MFA)

La autenticación multifactor (MFA) refuerza significativamente la seguridad de acceso a la Consola Cloud Temple. Añade una etapa de autenticación solicitando un código temporal generado por una aplicación dedicada, además de la contraseña. Esta medida reduce considerablemente los riesgos de accesos no autorizados, incluso en caso de robo de credenciales.

Para las cuentas gestionadas localmente por la Consola (sin federación), el MFA está activado por defecto y no puede desactivarse.

**Para las cuentas federadas, se recomienda encarecidamente exigir el MFA en el lado del proveedor de identidad**, especialmente para los administradores con acceso a la Consola.

Para saber más:  

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../console/iam/tutorials/sso_aad)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../console/iam/tutorials/sso_adfs)

### Acceder a la Consola desde equipos seguros

El puesto de trabajo y el entorno desde los cuales accede a la Consola son importantes para asegurar la administración de sus servicios cloud. Si opera en un entorno con exigencias de seguridad elevadas, puede aplicar las siguientes recomendaciones:

- Para la administración por parte de sus propios equipos, aplicar total o parcialmente las [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- En caso de administración por parte de un tercero, evaluar la posibilidad de recurrir a un [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), según la sensibilidad de los recursos alojados y su contexto legal y regulatorio.

### Concienciar a los administradores sobre el riesgo de phishing

Los accesos a la Consola Cloud Temple deben estar fuertemente vigilados, especialmente frente a intentos de phishing destinados a robar credenciales o códigos MFA. Es crucial que los usuarios autorizados sean regularmente concienciados sobre estos riesgos: verificación sistemática de la URL, precaución ante mensajes inesperados y reporte inmediato de cualquier actividad sospechosa.

Para minimizar estos riesgos, recomendamos no acceder nunca a la Consola a través de un enlace recibido por correo electrónico, sino siempre introduciendo manualmente la URL habitual.

Estas buenas prácticas son de su responsabilidad como cliente y son esenciales para prevenir ataques de phishing. En caso de duda, el soporte de Cloud Temple está a su disposición.

## Gestión de los servicios cloud

Sus recursos Cloud se gestionan desde la Consola. Este capítulo presenta recomendaciones esenciales para controlar la operación de los servicios cloud.

### Identificar a los propietarios del tenant

El propietario del tenant posee todos los permisos relacionados con los productos activados y recibe las notificaciones oficiales. Es crucial asegurarse de que los propietarios del tenant sean los interlocutores adecuados dentro de su organización.

Para una gestión segura y eficaz:

- **Identificar un propietario responsable**, preferiblemente una persona directamente implicada en la gestión del entorno;
- **Verificar la dirección e-mail de contacto** del propietario para asegurarse de que sea válida y se consulte regularmente;
- **Asegurar un control directo**, añadiendo un propietario miembro de su organización, incluso si confía la gestión de su servicio cloud, con el fin de poder supervisar las notificaciones y decisiones importantes;
- **Limitar el número de propietarios** a 3 para reducir la superficie de exposición y facilitar la auditoría de acciones críticas.

Para obtener más información sobre la gestión de propietarios del tenant, consulte el [Guide des popriétaires sur un tenant | Documentation Cloud Temple](../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestionar los permisos sobre sus servicios cloud

La Consola Cloud Temple permite una gestión granular de accesos asignando a cada usuario uno o varios niveles de permiso, que determinan con precisión las acciones autorizadas. Consulte la documentación de permisos ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) para entender en detalle los diferentes permisos y asignarlos de manera adecuada.

Para una gestión eficaz y segura de los permisos, le recomendamos seguir estas buenas prácticas:

- **Aplicar el principio del menor privilegio:** otorgue a los usuarios únicamente los permisos necesarios para sus funciones. Esto reduce los riesgos limitando el acceso a funcionalidades innecesarias.
- **Limitar los permisos sensibles:** Asigne los permisos sensibles solo a los usuarios responsables de estas funciones. Los permisos sensibles incluyen en particular la gestión de accesos (console_public_access_write, *_console_access, object - storage_write), la gestión de permisos (iam_write, iam_offline_access), y la gestión de respaldos (backup_iaas_opensource_write, backup_iaas_spp_write).
- **Privilegiar el acceso de solo lectura:** En caso de duda, otorgue un acceso de solo lectura (*_read) para minimizar los riesgos y permitir a la vez el acceso a la información necesaria.
- **Realizar revisiones regulares de derechos:** Verifique regularmente los permisos de los usuarios para eliminar los obsoletos. La exportación de permisos en formato CSV facilita esta gestión.

Una asignación controlada de permisos limita los riesgos de error o acción malintencionada, reforzando su postura de seguridad.

### Actualizar regularmente los hipervisores

Cloud Temple proporciona regularmente versiones para los hipervisores con el fin de asegurar la aplicación de los parches de seguridad. Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones empresariales.  

Por lo tanto, le recomendamos:
- Controlar regularmente en la Consola la disponibilidad de nuevos builds para sus hipervisores;  
- **Desplegar regularmente los nuevos builds en el conjunto de sus hipervisores**, en particular si corrigen vulnerabilidades de seguridad;
- Desplegar regularmente en sus máquinas virtuales las nuevas versiones de vmtools.

Una página de información de seguridad disponible en la Consola permite identificar las vulnerabilidades conocidas y las recomendaciones asociadas (builds a desplegar...).

### Supervisar la actividad de los servicios cloud

Para garantizar una monitorización eficaz de su entorno cloud y reaccionar rápidamente en caso de anomalías, es esencial implementar una estrategia de vigilancia activa. Le recomendamos en particular:

- **Supervisar la disponibilidad de los servicios** a través de la [Status page | Cloud Temple](https://status.cloud-temple.com/), para ser alertado en caso de incidentes o interrupciones generales;
- **Activar las notificaciones temáticas** pertinentes para su uso desde la Consola, para recibir en tiempo real las alertas importantes (ver [Abonnement aux notifications thématiques | Documentation Cloud Temple](../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Explotar los registros de actividad Cloud** para identificar acciones sensibles o sospechosas sobre sus recursos (ver sección « Journalisation - Suivi des Activités » del [Guide de démarrage | Documentation Cloud Temple](../iaas_vmware/quickstart)). La recopilación y análisis de los registros de actividad puede automatizarse mediante las API de la Consola, para integrar los eventos a sus herramientas de supervisión o detección de incidentes.

## Asegurar los recursos alojados

En el modelo Cloud, la seguridad de los recursos desplegados es responsabilidad del usuario. Cloud Temple proporciona una infraestructura segura, pero usted es responsable de proteger sus sistemas operativos, sus datos y sus configuraciones.

A continuación encontrará las buenas prácticas esenciales para reforzar la seguridad de sus VM: configuración de políticas de respaldo, cifrado de recursos críticos y endurecimiento de los sistemas operativos. Estas medidas contribuyen a limitar los riesgos de compromiso, a garantizar la integridad de los datos y a asegurar la continuidad operativa en caso de incidente.

### Configurar los respaldos

Para garantizar la seguridad y resiliencia de sus datos, es esencial definir y aplicar correctamente sus políticas de respaldo. La asignación de una política de respaldo a cada máquina virtual antes de su arranque es obligatoria. La documentación está disponible en la sección "Sauvegarde" del [Guide de démarrage | Documentation Cloud Temple](../iaas_vmware/quickstart).

Estas son las recomendaciones en materia de gestión de las políticas de respaldo de sus recursos Cloud Temple:

- **Defina sus políticas de respaldo:** Solicite al soporte la creación de políticas de respaldo adaptadas a las necesidades de su organización en materia de seguridad.  
- **Evite las políticas suspendidas:** No deje ninguna VM asociada a una política de respaldo suspendida para no comprometer la seguridad de los datos.
- **Realice pruebas de restauración:** Pruebe regularmente la restauración de sus respaldos para controlar la eficacia de sus procedimientos de recuperación.

### Cifrar las VM sensibles

Además del cifrado de datos a nivel de discos, nativo para todos los recursos cloud, **el cifrado de las VM puede activarse para proteger sus recursos más sensibles**. Para ello, consulte [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Algunas buenas prácticas en caso de uso del cifrado de las VM:

- Activar el cifrado en las VM sensibles: Aplíquelo desde la creación de la máquina o durante una actualización planificada. Esta operación requiere la parada temporal de la VM;
- Verificar el estado del cifrado: Compruebe desde la consola que la VM tenga el estado "cifrado";
- Respaldo antes del cifrado: Asegúrese de que la VM esté debidamente respaldada antes de cualquier modificación.

### Restringir la exposición de sus recursos

Para limitar la superficie de ataque de sus máquinas virtuales, se recomienda encarecidamente restringir a lo estrictamente necesario los servicios expuestos. En particular, asegúrese de configurar sus recursos para **no exponer públicamente las interfaces de administración y consolas** de los sistemas y aplicaciones desplegados.

Si utiliza los servicios de Almacenamiento de Objetos de Cloud Temple, también se aconseja **no configurar sus buckets con acceso público**, salvo en los casos en que esto sea estrictamente necesario (ver [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../storage/oss/quickstart#gestion-des-politiques-daccès).

### Endurecer las máquinas virtuales (servicios IaaS)

El alojamiento de una máquina virtual en un cloud seguro no garantiza, por sí solo, la seguridad del sistema operativo, de los servicios o de las aplicaciones que esta ejecute. El endurecimiento de las VM, ya sean desplegadas por usted o provenientes del catálogo, es de su responsabilidad.

Le recomendamos que **aplique las medidas básicas de seguridad**

- Mantener los sistemas actualizados con los parches de seguridad;
- Limitar los servicios expuestos;
- Desactivar los componentes innecesarios;  
- Restringir los derechos de acceso al mínimo necesario;
- Activar la generación de registros de acceso;
- Configurar respaldos regulares.

Para guiarle en estas acciones, apoye su trabajo en:

- Las guías de endurecimiento de los editores de software que utiliza;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Estas buenas prácticas constituyen la primera línea de defensa para asegurar sus sistemas en el cloud.

### Endurecer los contenedores (servicios PaaS)

Para garantizar la seguridad de sus contenedores en el marco del servicio PaaS OpenShift, le recomendamos implementar las siguientes medidas para reforzar su endurecimiento:

- **Origen de las imágenes**: Asegúrese de que todas las imágenes provienen de fuentes fiables, como registros internos o el Catálogo de Contenedores de Red Hat, y evite el uso de imágenes comunitarias no verificadas, como las disponibles en el Docker Hub público.
- **Restricción de privilegios**: Limite los privilegios de los contenedores utilizando las funcionalidades de OpenShift, especialmente los *Security Context Constraints* (SCC), para restringir los permisos a lo estrictamente necesario.
- **Configuración de los SCC**: Cree SCC personalizados para cada aplicación o grupo de aplicaciones. Esto incluye la restricción de las llamadas al sistema autorizadas (por ejemplo, mediante *seccomp profiles*), con configuraciones específicas como la prohibición de *ptrace* o *mount* para reducir el riesgo de escapatoria de contenedores.
- **Aislamiento de cargas de trabajo**: Use los *Namespaces* y las *Network Policies* para aislar las aplicaciones y limitar las interacciones innecesarias entre contenedores.
- **Registro completo**: Active la generación de registros mediante el operador OpenShift Logging para capturar los eventos asociados a los contenedores y sistemas alojados, con el fin de detectar y analizar mejor cualquier actividad sospechosa.

## Para ir más allá

Si desea beneficiarse de servicios complementarios de seguridad o de un acompañamiento reforzado sobre aspectos de seguridad (auditoría, endurecimiento, conformidad, asesoramiento, etc.), puede recurrir a nuestros **Professional Services**. Para más información, contacte a su interlocutor Cloud Temple.