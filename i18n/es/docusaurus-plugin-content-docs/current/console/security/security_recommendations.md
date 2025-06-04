---
title: Bonnes pratiques
---

*Última actualización: 22/05/2025*

## Recomendaciones para el uso seguro de los servicios Cloud Temple

Los servicios de Cloud Temple le proporcionan una infraestructura en la nube altamente segura por diseño. Sin embargo, algunas buenas prácticas de seguridad son de su responsabilidad como usuario de estos servicios. Esta guía le ayuda a reforzar la seguridad de su entorno en la nube aprovechando las funcionalidades ofrecidas en la Consola.

Aquí encontrará recomendaciones concretas para:

- Proteger el acceso a la Consola cloud;
- Gestionar los accesos y los permisos de manera controlada;
- Asegurar los recursos desplegados mediante nuestros servicios cloud.

## Acceso a la Consola

El acceso a la Consola es la puerta de entrada a todos sus servicios Cloud Temple. Por lo tanto, es esencial protegerla eficazmente.

### Restringir el acceso a la Consola mediante filtrado IP

El acceso a la consola de gestión cloud está limitado a las direcciones IP previamente autorizadas. Esta restricción permite autorizar el acceso únicamente a los usuarios procedentes de los rangos de IP especificados, minimizando así los riesgos de acceso no autorizado.

Puede configurar estas restricciones IP en los parámetros de su organización. Para saber cómo configurar el filtrado IP, consulte [Gestion des accès et authentification | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-acc%C3%A8s-et-authentification).

Para maximizar la eficacia de este mecanismo, asegúrese de:

- **Limitar el número de direcciones IP autorizadas** a lo estrictamente necesario;
- Evitar rangos demasiado amplios o genéricos;
- Añadir **únicamente IP provenientes de entornos controlados** (ej.: IP de salida de su red corporativa);
- Prohibir, o limitar al máximo, las direcciones IP individuales (ej.: IP pública del domicilio de su personal de TI);
- Prohibir, o limitar, las direcciones IP de terceros (ej.: proveedor de servicios);
- Mantener esta lista actualizada en caso de evolución de su infraestructura de red.

Para el acceso remoto (teletrabajo, proveedores...), priorice una conexión a través de su red corporativa mediante VPN en lugar de autorizar direcciones IP individuales directamente. Esto reduce la superficie de exposición de la Consola y centraliza la gestión del acceso dentro de su organización.

### Utilizar federación de identidad

La federación de identidad permite integrar la Consola Cloud Temple con su proveedor de identidad (IdP), activando el SSO. Este enfoque centraliza la autenticación y ofrece varios beneficios:

- Gestión unificada de cuentas: creación, modificación y eliminación mediante su directorio;
- Reducción de la superficie de ataque: las cuentas locales se vuelven innecesarias o limitadas;
- Mayor trazabilidad: los accesos son registrados por su IdP;
- Integración reforzada: MFA, alertas, políticas de seguridad contextuales…;
- Facilitación del cumplimiento: coherencia con sus prácticas internas.

Por estas razones, **se recomienda la federación de identidades**, especialmente para entornos con grandes equipos o altos requerimientos de seguridad.

Siga nuestras guías paso a paso para integrar su proveedor de identidad:

- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Activar la autenticación multifactor (MFA)

La autenticación multifactor (MFA) refuerza significativamente la seguridad de acceso a la Consola Cloud Temple. Agrega una etapa de autenticación solicitando un código temporal generado por una aplicación dedicada, en complemento a la contraseña. Esta medida limita fuertemente el riesgo de accesos no autorizados, incluso en caso de robo de credenciales.

Para las cuentas gestionadas localmente por la Consola (sin federación), el MFA está activado por defecto y no se puede desactivar.

**Para las cuentas federadas, se recomienda encarecidamente exigir el MFA en el lado del proveedor de identidad**, especialmente para los administradores con acceso a la Consola.

Para saber más:

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Acceder a la Consola desde equipos seguros

El equipo y el entorno desde los que accede a la Consola son importantes para asegurar la administración de sus servicios cloud. Si opera en un entorno con altos requerimientos de seguridad, puede aplicar las siguientes recomendaciones:

- Para la administración por parte de sus propios equipos, aplique en todo o en parte las [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- En caso de administración por un tercero, evalúe la posibilidad de recurrir a un [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), según la sensibilidad de los recursos alojados y su contexto legal y normativo.

### Sensibilizar a los administradores sobre el riesgo de phishing

Los accesos a la Consola Cloud Temple deben estar sujetos a una vigilancia reforzada, en particular frente a intentos de phishing dirigidos a robar credenciales o códigos MFA. Es crucial que los usuarios autorizados sean sensibilizados regularmente sobre estos riesgos: verificación sistemática de la URL, precaución ante mensajes inesperados, y notificación inmediata de cualquier actividad sospechosa.

Para limitar estos riesgos, recomendamos nunca acceder a la Consola mediante un enlace recibido por correo electrónico, sino siempre escribiendo manualmente la URL habitual.

Estas buenas prácticas son de su responsabilidad como cliente y son esenciales para prevenir ataques de phishing. En caso de duda, el soporte de Cloud Temple está a su disposición.

## Gestión de los servicios cloud

Sus recursos cloud son gestionados desde la Consola. Este capítulo presenta recomendaciones esenciales para controlar la explotación de los servicios cloud.

### Identificar a los propietarios del tenant

El propietario del tenant posee todos los permisos vinculados a los productos activados y recibe las notificaciones oficiales. Es crucial asegurarse de que los propietarios de su tenant sean los interlocutores adecuados dentro de su organización.

Para una gestión segura y eficaz:

- **Identifique un propietario responsable**, preferentemente una persona directamente implicada en la gestión del entorno.
- **Verifique la dirección de correo electrónico de contacto** del propietario para asegurarse de que sea válida y consultada regularmente.
- **Asegure un control directo**, añadiendo un propietario miembro de su organización, incluso si confía la gestión de su servicio cloud, para poder supervisar las notificaciones y decisiones importantes.
- **Limite el número de propietarios** a 3 para reducir la superficie de exposición y facilitar la auditoría de las acciones críticas.

Para saber más sobre la gestión de propietarios del tenant, consulte la [Guide des popriétaires sur un tenant | Documentation Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestionar los permisos sobre sus servicios cloud

La Consola Cloud Temple permite una gestión granular de los accesos asignando a cada usuario uno o varios niveles de permiso, que determinan con precisión las acciones autorizadas. Consulte la documentación de permisos ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) para entender en detalle los distintos permisos y asignarlos de forma adecuada.

Para una gestión eficaz y segura de los permisos, recomendamos seguir estas buenas prácticas:

- **Aplicar el principio del mínimo privilegio:** otorgue a los usuarios únicamente los permisos necesarios para sus funciones. Esto reduce los riesgos al limitar el acceso a funcionalidades innecesarias.
- **Limite los permisos sensibles:** Asigne los permisos sensibles únicamente a los usuarios responsables de dichas funciones. Los permisos sensibles incluyen especialmente la gestión de accesos (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestión de permisos (iam\_write, iam\_offline\_access), y la gestión de copias de seguridad (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Priorice el acceso de solo lectura:** En caso de duda, proporcione un acceso de solo lectura (\*\_read) para minimizar los riesgos permitiendo al mismo tiempo el acceso a la información necesaria.
- **Realice revisiones regulares de los derechos:** Verifique regularmente los permisos de los usuarios para eliminar los que estén obsoletos. La exportación de permisos en formato CSV facilita esta gestión.**

Una asignación controlada de los permisos limita los riesgos de error o de acciones maliciosas, al tiempo que refuerza su postura de seguridad.

### Actualizar regularmente los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores a fin de asegurar la aplicación de parches de seguridad. Sin embargo, la actualización de los hipervisores sigue siendo de su responsabilidad, ya que no tenemos visibilidad sobre sus limitaciones de negocio.
Por lo tanto, le recomendamos:

- Controlar regularmente en la Consola la disponibilidad de nuevas builds para sus hipervisores;  
- **Desplegar regularmente los nuevos builds en todos sus hipervisores**, especialmente si corrigen vulnerabilidades de seguridad;
- Desplegar regularmente en sus máquinas virtuales las nuevas versiones de vmtools.

**Una página de alertas de seguridad está disponible** para informarle sobre vulnerabilidades conocidas y recomendaciones asociadas: [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).  

### Supervisar la actividad en los servicios cloud

Para garantizar una monitorización eficaz de su entorno cloud y reaccionar rápidamente en caso de anomalía, es fundamental establecer una estrategia de vigilancia activa. Le recomendamos en particular:

- **Supervisar la disponibilidad de los servicios** a través de la [Status page | Cloud Temple](https://status.cloud-temple.com/), para ser alertado en caso de incidentes o fallos globales;
- **Activar las notificaciones temáticas** pertinentes para su uso desde la Consola, con el fin de recibir en tiempo real alertas importantes (ver [Abonnement aux notifications thématiques | Documentation Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Explotar los registros de actividad Cloud** para identificar acciones sensibles o sospechosas sobre sus recursos (ver sección « Journalisation - Suivi des Activités » del [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart)). La recopilación y el análisis de los registros de actividad pueden automatizarse a través de las API de la Consola, con el fin de integrar los eventos en sus herramientas de supervisión o detección de incidentes.

## Proteger los recursos alojados

En un modelo Cloud, la seguridad de los recursos desplegados es responsabilidad del usuario. Cloud Temple proporciona una infraestructura segura, pero le corresponde proteger sus sistemas operativos, datos y configuraciones.

A continuación, encontrará las buenas prácticas esenciales para reforzar la seguridad de sus VM: configuración de políticas de copias de seguridad, cifrado de los recursos críticos, y endurecimiento de los sistemas operativos. Estas medidas contribuyen a limitar los riesgos de compromiso, garantizar la integridad de los datos y asegurar la continuidad operativa en caso de incidente.

### Configurar las copias de seguridad

Para garantizar la seguridad y la resiliencia de sus datos, es esencial definir y aplicar correctamente sus políticas de copia de seguridad. La asignación de una política de copia de seguridad a cada máquina virtual antes de su puesta en marcha es obligatoria. La documentación está disponible en la sección "Sauvegarde" del [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart).

Estas son las recomendaciones en materia de gestión de políticas de copias de seguridad de sus recursos Cloud Temple:

- **Defina sus políticas de copia de seguridad:** Solicite al soporte la creación de las políticas de copia de seguridad adaptadas a las necesidades de su organización en materia de seguridad.  
- **Evite las políticas suspendidas:** No deje ninguna VM asociada a una política de copia de seguridad suspendida para no comprometer la seguridad de los datos.
- **Realice pruebas de restauración:** Pruebe regularmente la restauración de sus copias de seguridad para verificar la eficacia de sus procedimientos de recuperación.

### Cifrar las VM sensibles

Además del cifrado de datos a nivel de disco, nativo para todos los recursos cloud, **el cifrado de las VM puede activarse para proteger sus recursos más sensibles**. Para ello, consulte [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

A continuación, algunas buenas prácticas en caso de utilización del cifrado de las VM:

- Activar el cifrado en las VM sensibles: Aplíquelo desde la creación de la máquina o durante una actualización planificada. Esta operación requiere parar temporalmente la VM;
- Verificar el estado de cifrado: Compruebe desde la consola que la VM tiene el estado "chiffré";
- Realizar una copia de seguridad antes de cifrar: Asegúrese de que la VM está correctamente respaldada antes de realizar cualquier modificación.

### Restringir la exposición de sus recursos

Para limitar la superficie de ataque de sus máquinas virtuales, se recomienda encarecidamente restringir al mínimo necesario los servicios expuestos. En particular, asegúrese de configurar sus recursos de manera que **no expongan públicamente las interfaces de administración y consolas** de los sistemas y aplicaciones desplegados.

Si utiliza los servicios de Almacenamiento de Objetos de Cloud Temple, también se aconseja **no configurar sus buckets con acceso público**, salvo en los casos en los que sea estrictamente necesario (ver [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Endurecer las máquinas virtuales (servicios IaaS)

Alojar una máquina virtual en un cloud seguro no garantiza, por sí solo, la seguridad del sistema operativo, de los servicios o las aplicaciones que ejecuta. El endurecimiento de las VM, ya sea que las despliegue usted mismo o provengan del catálogo, es responsabilidad suya.

Le recomendamos **aplicar las medidas de seguridad básicas**

- Mantener los sistemas actualizados con los parches de seguridad;
- Limitar los servicios expuestos;
- Desactivar los componentes innecesarios;  
- Restringir los derechos de acceso al mínimo necesario;
- Activar la generación de registros de acceso;
- Configurar copias de seguridad periódicas.

Para guiarle en estas acciones, puede apoyarse en:

- Las guías de endurecimiento de los editores de software que utiliza;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Estas buenas prácticas constituyen la primera línea de defensa para proteger sus sistemas en el cloud.

### Endurecer los contenedores (servicios PaaS)

Para garantizar la seguridad de sus contenedores en el marco del servicio PaaS OpenShift, le recomendamos implementar las siguientes medidas para reforzar su endurecimiento:

- **Fuente de las imágenes**: Asegúrese de que todas las imágenes provengan de fuentes fiables, como registros internos o el Red Hat Container Catalog, y evite el uso de imágenes comunitarias no verificadas, como las disponibles en el Docker Hub público.
- **Restricción de privilegios**: Limite los privilegios de los contenedores utilizando las funcionalidades de OpenShift, en particular las *Security Context Constraints* (SCC), para restringir los permisos al mínimo necesario.
- **Configuración de las SCC**: Cree SCC personalizadas para cada aplicación o grupo de aplicaciones. Esto incluye la restricción de llamadas al sistema autorizadas (por ejemplo, mediante *seccomp profiles*), con configuraciones específicas como la prohibición de *ptrace* o *mount* para reducir los riesgos de escape de los contenedores.
- **Aislamiento de las cargas de trabajo**: Utilice *Namespaces* y *Network Policies* para aislar las aplicaciones y limitar las interacciones innecesarias entre contenedores.
- **Registro completo**: Active el registro de eventos a través del operador OpenShift Logging para capturar los eventos relacionados con los contenedores y sistemas alojados, con el fin de detectar y analizar mejor cualquier actividad sospechosa.

## Para profundizar

Si desea beneficiarse de servicios de seguridad complementarios o de un acompañamiento adicional sobre aspectos de seguridad (auditoría, endurecimiento, conformidad, asesoramiento, etc.), puede recurrir a nuestros **Professional Services**. Para obtener más información, póngase en contacto con su interlocutor de Cloud Temple.