---
title: Buenas prácticas
---

*Última actualización : 22/05/2025*

## Recomendaciones para el uso seguro de los servicios Cloud Temple

Los servicios Cloud Temple le ofrecen una infraestructura cloud altamente segura por diseño. Sin embargo, ciertas buenas prácticas de seguridad son de su responsabilidad como usuario de estos servicios. Esta guía le ayuda a reforzar la seguridad de su entorno cloud aprovechando las funcionalidades ofrecidas en la Consola.

En ella encontrará recomendaciones concretas para:

- Proteger el acceso a la Consola cloud;
- Gestionar los accesos y los permisos de manera controlada;
- Asegurar los recursos desplegados a través de nuestros servicios cloud.

## Acceso a la Consola

El acceso a la Consola es la puerta de entrada a todos sus servicios de Cloud Temple. Por lo tanto, es esencial protegerla de manera eficaz.

### Restringir el acceso a la Consola mediante filtrado IP

El acceso a la consola de gestión en la nube está limitado a las direcciones IP previamente autorizadas. Esta restricción permite autorizar el acceso únicamente a los usuarios que provienen de los rangos de IP especificados, minimizando así los riesgos de acceso no autorizado.

Puede configurar estas restricciones de IP en la configuración de su organización. Para saber cómo configurar el filtrado de IP, consulte la [Gestion des accès et authentification | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Para maximizar la eficacia de este mecanismo, asegúrese de :

- **Limitar el número de direcciones IP autorizadas** estrictamente a lo necesario ;
- Evitar rangos demasiado amplios o genéricos ;
- Agregar **únicamente IPs que provengan de entornos controlados** (ej.: IP de salida de su red corporativa) ;
- Prohibir, o limitar al máximo, las direcciones IP individuales (ej.: IP pública del domicilio de su personal de TI) ;
- Prohibir, o limitar, las direcciones IP de terceros (ej.: proveedor de servicios) ;
- Mantener esta lista actualizada en caso de cambios en su infraestructura de red.

Para los accesos remotos (teletrabajo, proveedores…), priorice el tránsito a través de su red corporativa mediante VPN en lugar de autorizar directamente direcciones IP individuales. Esto reduce la superficie de exposición de la Consola y centraliza la gestión de accesos dentro de su organización.

### Utilizar la federación de identidad

La federación de identidad permite integrar la Consola Cloud Temple con su proveedor de identidad (IdP), activando el SSO. Este enfoque centraliza la autenticación y ofrece varios beneficios :

- Gestión unificada de cuentas : creación, modificación y eliminación a través de su directorio ;
- Reducción de la superficie de ataque : las cuentas locales se vuelven innecesarias o limitadas ;
- Mayor trazabilidad : los accesos se registran por su IdP ;
- Integración reforzada : MFA, alertas, políticas de seguridad contextuales… ;
- Cumplimiento facilitado : coherencia con sus prácticas internas.

Por estas razones, **se recomienda la federación de identidades**, especialmente para entornos con un gran número de usuarios o con altos requisitos de seguridad.

Siga nuestras guías paso a paso para integrar su proveedor de identidad :

- [Configurar la federación con Azure AD | Documentación Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Configurar la federación con ADFS | Documentación Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Habilitar la autenticación multifactor (MFA)

La autenticación multifactor (MFA) refuerza significativamente la seguridad de acceso a la Consola Cloud Temple. Agrega una etapa de autenticación solicitando un código temporal generado por una aplicación dedicada, como complemento a la contraseña. Esta medida limita considerablemente los riesgos de acceso no autorizado, incluso en caso de robo de credenciales.

Para las cuentas gestionadas localmente por la Consola (sin federación), la MFA está habilitada de forma predeterminada y no puede desactivarse.

**Para las cuentas federadas, se recomienda encarecidamente exigir la MFA en el lado del proveedor de identidad**, especialmente para los administradores que tienen acceso a la Consola.

Para obtener más información:  

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Acceder a la Consola desde equipos seguros

El equipo y el entorno desde los que accede a la Consola son importantes para garantizar la seguridad en la administración de sus servicios en la nube. Si opera en un entorno con altos requisitos de seguridad, puede aplicar las siguientes recomendaciones:

- Para la administración por parte de sus propios equipos, aplicar total o parcialmente las [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- En caso de administración por parte de un tercero, evaluar la conveniencia de recurrir a un [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), según la sensibilidad de los recursos alojados y su marco legal y regulatorio.

### Sensibilizar a los administradores al riesgo de phishing

El acceso a la Consola Cloud Temple debe estar sujeto a una vigilancia reforzada, especialmente frente a los intentos de phishing que buscan robar credenciales o códigos MFA. Es crucial que los usuarios autorizados sean sensibilizados regularmente sobre estos riesgos: verificación sistemática de la URL, prudencia ante mensajes inesperados y notificación inmediata de cualquier actividad sospechosa.

Para limitar estos riesgos, recomendamos no acceder nunca a la Consola a través de un enlace recibido por correo electrónico, sino siempre introduciendo manualmente la URL habitual.

Estas buenas prácticas son de su responsabilidad como cliente y son esenciales para prevenir ataques de phishing. En caso de duda, el soporte de Cloud Temple permanece a su disposición.

## Gestión de servicios cloud

Sus recursos Cloud se gestionan desde la Consola. Este capítulo le presenta recomendaciones esenciales para controlar el uso de los servicios cloud.

### Identificar a los propietarios del tenant

El propietario del tenant posee todos los permisos relacionados con los productos activados y recibe las notificaciones oficiales. Es crucial asegurarse de que los propietarios de su tenant sean los interlocutores adecuados dentro de su organización.

Para una gestión segura y eficaz:

- **Identifique a un propietario responsable**, preferiblemente una persona directamente involucrada en la gestión del entorno.
- **Verifique la dirección de correo electrónico de contacto** del propietario para asegurarse de que es válida y se consulta regularmente.
- **Asegure un control directo**, agregando un propietario que sea miembro de su organización, incluso si delega la gestión de su servicio en la nube, para poder supervisar las notificaciones y decisiones importantes.
- **Limite el número de propietarios** a 3 para reducir la superficie de exposición y facilitar la auditoría de las acciones críticas.

Para obtener más información sobre la gestión de los propietarios del tenant, consulte la [Guía de propietarios en un tenant | Documentación Cloud Temple](../../console/iam/concepts#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestionar los permisos en sus servicios cloud

La Consola Cloud Temple permite una gestión granular de los accesos al asignar a cada usuario uno o varios niveles de permiso, que determinan con precisión las acciones autorizadas. Consulte la documentación de permisos ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) para comprender en detalle los diferentes permisos y asignarlos de manera adecuada.

Para una gestión eficaz y segura de los permisos, le recomendamos seguir estas mejores prácticas :

- **Aplicar el principio del menor privilegio :** otorgue a los usuarios únicamente los permisos necesarios para sus misiones. Esto reduce los riesgos al limitar el acceso a funcionalidades innecesarias.
- **Limitar los permisos sensibles :** Asigne los permisos sensibles únicamente a los usuarios responsables de estas funciones. Los permisos sensibles incluyen, entre otros, la gestión de accesos (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestión de permisos (iam\_write, iam\_offline\_access), y la gestión de copias de seguridad (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Priorizar el acceso de solo lectura :** En caso de duda, otorgue un acceso de solo lectura (\*\_read) para minimizar los riesgos mientras permite el acceso a la información necesaria.
- **Realizar revisiones periódicas de los derechos :** Verifique regularmente los permisos de los usuarios para retirar los obsoletos. La exportación de permisos en formato CSV facilita esta gestión.**

Una asignación controlada de los permisos limita los riesgos de error o acción maliciosa, al tiempo que refuerza su postura de seguridad.

### Actualizar regularmente los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores para garantizar la aplicación de los parches de seguridad. Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones de negocio.  

Por lo tanto, le recomendamos que:

- Verificar regularmente en la Consola la disponibilidad de nuevos builds para sus hipervisores;  
- **Desplegar regularmente los nuevos builds en todos sus hipervisores**, especialmente si corrigen vulnerabilidades de seguridad;
- Desplegar regularmente en sus máquinas virtuales las nuevas versiones de vmtools.

**Está disponible una página de alertas de seguridad** para informarle sobre las vulnerabilidades conocidas y las recomendaciones asociadas: [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Monitorear la actividad de los servicios cloud

Para garantizar un monitoreo eficaz de su entorno cloud y reaccionar rápidamente ante anomalías, es esencial implementar una estrategia de vigilancia activa. Le recomendamos, en particular, lo siguiente:

- **Monitorear la disponibilidad de los servicios** a través de la [Status page | Cloud Temple](https://status.cloud-temple.com/), para recibir alertas en caso de incidentes o interrupciones generales;
- **Activar las notificaciones temáticas** relevantes para su uso desde la Consola, para recibir en tiempo real las alertas importantes (voir [Abonnement aux notifications thématiques | Documentation Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-thématiques));
- **Aprovechar los registros de actividad de Cloud** para identificar acciones sensibles o sospechosas en sus recursos (voir section « Journalisation - Suivi des Activités » du [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart)). La recopilación y el análisis de los registros de actividad pueden automatizarse mediante las API de la Consola, para integrar los eventos en sus herramientas de supervisión o detección de incidentes.

## Asegurar los recursos alojados

En un modelo Cloud, la seguridad de los recursos desplegados es responsabilidad del usuario. Cloud Temple proporciona una infraestructura segura, pero le corresponde a usted proteger sus sistemas operativos, sus datos y sus configuraciones.

A continuación, encontrará las mejores prácticas esenciales para reforzar la seguridad de sus VM: configuración de políticas de copia de seguridad, cifrado de recursos críticos y endurecimiento de los sistemas operativos. Estas medidas contribuyen a limitar los riesgos de compromiso, a garantizar la integridad de los datos y a asegurar la continuidad operativa en caso de incidente.

### Configurar las copias de seguridad

Para garantizar la seguridad y la resiliencia de sus datos, es esencial definir y aplicar correctamente sus políticas de copia de seguridad. La asignación de una política de copia de seguridad a cada máquina virtual antes de su inicio es obligatoria. La documentación está disponible en la sección "Copia de seguridad" de la [Guía de inicio rápido | Documentación Cloud Temple](../../iaas_vmware/quickstart).

A continuación se presentan las recomendaciones para la gestión de las políticas de copia de seguridad de sus recursos de Cloud Temple:

- **Defina sus políticas de copia de seguridad:** Solicite al equipo de soporte la creación de políticas de copia de seguridad adaptadas a las necesidades de seguridad de su organización.  
- **Evite las políticas suspendidas:** No deje ninguna VM asociada a una política de copia de seguridad suspendida para evitar comprometer la seguridad de los datos.
- **Realice pruebas de restauración:** Pruebe regularmente la restauración de sus copias de seguridad para verificar la eficacia de sus procedimientos de restauración.

### Cifrar las VM sensibles

Como complemento al cifrado de datos a nivel de disco, nativo para todos los recursos en la nube, **el cifrado de las VM puede activarse para proteger sus recursos más sensibles**. Para ello, consulte [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

A continuación se presentan algunas buenas prácticas en caso de utilizar el cifrado de las VM :

- Activar el cifrado en las VM sensibles : Aplíquelo desde la creación de la máquina o durante una actualización planificada. La operación requiere la parada temporal de la VM ;
- Verificar el estado de cifrado : Controle desde la consola que la VM muestre correctamente el estado "cifrado" ;
- Realizar una copia de seguridad antes del cifrado : Asegúrese de que la VM esté correctamente respaldada antes de cualquier modificación.

### Restringir la exposición de sus recursos

Para limitar la superficie de ataque de sus máquinas virtuales, se recomienda encarecidamente restringir al mínimo estrictamente necesario los servicios expuestos. En particular, asegúrese de configurar sus recursos de manera que **no expongan públicamente las interfaces de administración y consolas** de los sistemas y aplicaciones desplegados.

Si utiliza los servicios de Almacenamiento de Objetos de Cloud Temple, también se aconseja **no configurar sus buckets con acceso público**, salvo en los casos en que sea estrictamente necesario (ver [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../../storage/oss/quickstart#gestion-des-politiques-daccès)).

### Endurecer las máquinas virtuales (servicios IaaS)

El alojamiento de una máquina virtual en una nube segura no garantiza, por sí solo, la seguridad del sistema operativo, de los servicios o de las aplicaciones que ejecuta. El endurecimiento de las VM, ya sean desplegadas por usted o provengan del catálogo, es de su responsabilidad.

Le recomendamos **aplicar las medidas de seguridad básicas**

- Mantener los sistemas actualizados con los parches de seguridad ;
- Limitar los servicios expuestos ;
- Desactivar los componentes innecesarios ;  
- Restringir los derechos de acceso al estrictamente necesario ;
- Activar el registro de accesos ;
- Configurar copias de seguridad regulares.

Para guiarle en estas acciones, apóyese en :

- Las guías de endurecimiento de los editores de software que utiliza ;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Estas buenas prácticas constituyen la primera línea de defensa para asegurar sus sistemas en la nube.

### Endurecimiento de contenedores (servicios PaaS)

Para garantizar la seguridad de sus contenedores en el marco del servicio PaaS OpenShift, le recomendamos implementar las siguientes medidas para reforzar su endurecimiento:

- **Fuente de las imágenes** : Asegúrese de que todas las imágenes provengan de fuentes confiables, como registros internos o el Red Hat Container Catalog, y evite el uso de imágenes comunitarias no verificadas, como las disponibles en Docker Hub público.
- **Restricción de privilegios** : Limite los privilegios de los contenedores utilizando las funciones de OpenShift, en particular las *Security Context Constraints* (SCC), para restringir los permisos al estricto necesario.
- **Configuración de SCC** : Cree SCC personalizados para cada aplicación o grupo de aplicaciones. Esto incluye la restricción de las llamadas del sistema autorizadas (por ejemplo, mediante *seccomp profiles*), con configuraciones específicas como la prohibición de *ptrace* o *mount* para reducir los riesgos de escape de contenedores.
- **Aislamiento de cargas de trabajo** : Utilice *Namespaces* y *Network Policies* para aislar las aplicaciones y limitar las interacciones innecesarias entre los contenedores.
- **Registro completo** : Active el registro mediante el operador OpenShift Logging para capturar los eventos asociados a los contenedores y sistemas alojados, con el fin de detectar y analizar mejor cualquier actividad sospechosa.

## Para ir más allá

Si desea acceder a servicios de seguridad complementarios o contar con un acompañamiento reforzado en aspectos de seguridad (auditoría, endurecimiento, cumplimiento, consultoría, etc.), puede solicitar nuestros **Professional Services**. Para obtener más información, póngase en contacto con su referente en Cloud Temple.