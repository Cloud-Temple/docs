---
title: Títulos de buenas prácticas
---

Última actualización: 22/05/2025

## Recomendaciones para el uso seguro de los servicios Cloud Temple

Los servicios Cloud Temple ofrecen una infraestructura cloud altamente segura por diseño. Sin embargo, algunas prácticas de seguridad adecuadas son responsabilidad tuya como usuario de estos servicios. Este guía te ayuda a fortalecer la seguridad de tu entorno cloud aprovechando las funcionalidades disponibles en la Consola.

Encontrarás recomendaciones concretas para:

- Proteger el acceso a la Consola cloud;
- Gestionar los accesos y permisos de manera eficiente;
- Seguridad de las recursos desplegados mediante nuestros servicios cloud.

## Acceso a la Consola

El acceso a la Consola es la entrada principal hacia el conjunto de servicios Cloud Temple. Por lo tanto, es crucial protegerlo eficazmente.

### Limitar el acceso a la consola mediante filtrado de direcciones IP

El acceso a la consola de gestión cloud está limitado a las direcciones IP previamente autorizadas. Esta restricción permite autorizar el acceso solo a los usuarios provenientes de rangos de direcciones IP específicos, minimizando así los riesgos de acceso no autorizado.

Puede configurar estas restricciones de direcciones IP en los parámetros de su organización. Para saber cómo configurar el filtrado de direcciones IP, consulte la [Gestión del acceso y autentificación | Documentación Cloud Temple](../../console/iam/quickstart?_highlight=*factor#gestión-del-acceso-y-autentificación).

Para maximizar la eficiencia de este mecanismo, asegúrese de:

- **Limitar el número de direcciones IP autorizadas** al máximo necesario;
- Evitar rangos de direcciones IP demasiado amplios o generales;
- Agregar solo direcciones IP provenientes de entornos controlados (ej. IP de salida su red empresarial);
- Prohibir, o limitar al máximo, las direcciones IP individuales (ej. IP pública del hogar de su personal IT);
- Prohibir, o limitar, las direcciones IP de terceros (ej. proveedores de servicio);
- Mantener esta lista actualizada en caso de cambios en la infraestructura de red de su organización.

Para los acceso a distancia (trabajo remoto, prestadores…), prefiera pasar por su red empresarial a través de VPN en lugar de autorizar directamente direcciones IP individuales. Esto reduce la superficie expuesta de la Consola y centraliza la gestión de los accesos dentro de su organización.

### Uso de la federación de identidad

La federación de identidad permite integrar la Consola Cloud Temple con tu proveedor de identidad (IdP), activando el SSO. Esta solución centraliza la autenticación y ofrece varios beneficios:

- Gestión unificada de cuentas: creación, modificación e eliminación a través de tu directorio;
- Reducción de la superficie de ataque: los conteos locales se vuelven innecesarios o limitados;
- Mayor trazabilidad: los acceso se registran por tu IdP;
- Integración reforzada: MFA, alertas, políticas de seguridad contextual…;
- Facilita la conformidad: coherencia con tus prácticas internas.

Por estas razones, **la federación de identidades se recomienda**, especialmente para entornos con grandes plantillas o requisitos de seguridad elevados.

Sigue nuestros guías paso a paso para integrar tu proveedor de identidad:

- [Configurar la federação con Azure AD | Documentación Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Configurar la federación con ADFS | Documentación Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Activar la autenticación de múltiples factores (MFA)

La autenticación de múltiples factores (MFA) mejora significativamente la seguridad de acceso a la Consola Cloud Temple. Agrega una etapa de autenticación solicitando un código temporal generado por una aplicación dedicada, junto con el nombre de usuario y contraseña. Esta medida reduce enormemente los riesgos de acceso no autorizado, incluso en caso de robo de identificadores.

Para los cuentas gestionadas localmente a través de la Consola (sin federicación), la MFA se activa por defecto y no puede ser desactivada.

**Para las cuentas federadas, se recomienda encarecidamente solicitar la MFA del proveedor de identidad**, especialmente para los administradores con acceso a la Consola.

Para más información:

- [¿Qué es la MFA y está obligatoria? | Documentación Cloud Temple](../../console/iam/quickstart?_highlight=*factor#qu%C3%B1en+de+lo+que+es+la+MFA+y+est+obligatoria)
- [Tutorial: Federicación de identidad con Microsoft Intune | Documentación Cloud Temple](../../console/iam/tutorials/sso_intune)
- [Tutorial: Federicación de identidad con Okta | Documentación Cloud Temple](../../console/iam/tutorials/sso_okta)

### Acceso a la Consola desde entornos seguros

El lugar y el entorno desde el cual acceda a la Consola son cruciales para garantizar la administración segura de sus servicios en la nube. Si se trabaja en un entorno con altos requisitos de seguridad, puede aplicar las siguientes recomendaciones:

- Para la administración por parte de su propio equipo, aplique toda o parte de las [Recomendaciones para la administración segura de los SIS | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si).
- En caso de administración por un tercero, considere la viabilidad de contratar a un [Prestador de administración y mantenimiento seguros (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), teniendo en cuenta la sensibilidad de los recursos alojados y su marco legal y regulatorio.

### Alfabetizar a los administradores sobre el riesgo de phishing

Los accesos a la Consola Cloud Temple requieren una vigilancia reforzada, especialmente frente a intentos de phishing destinados a robar identificadores o códigos MFA. Es crucial que los usuarios autorizados sean regularmente concienciados sobre estos riesgos: verificación sistemática de la URL, prudencia ante mensajes inesperados y señalización inmediata de cualquier actividad sospechosa.

Para minimizar estos riesgos, recomendamos nunca acceder a la Consola a través de un enlace recibido por correo electrónico, sino siempre ingresando manualmente la URL habitual.

Estas buenas prácticas son responsabilidad del cliente y son esenciales para evitar ataques de phishing. En caso de duda, el soporte Cloud Temple está disponible.

## Gestión de servicios en nube

Las configuraciones de sus recursos de nube se gestionan a través de la Consola. Este capítulo le presenta recomendaciones fundamentales para controlar el funcionamiento de los servicios en nube.

### Identificar a los propietarios de tenencia

El propietario de tenencia tiene todas las permisos relacionados con los productos activos y recibe las notificaciones oficiales. Es crucial asegurarse de que los propietarios de su tenencia sean los interlocutores adecuados dentro de su organización.

Para una gestión segura y eficiente:

- **Identifica un propietario responsable**, preferiblemente alguien directamente involucrado en la gestión del entorno.
- **Verifica la dirección de correo electrónico de contacto** del propietario para asegurar que sea válida y consultada regularmente.
- **Mantén un control directo**, agregando un propietario miembro de tu organización, incluso si confías la gestión de tu servicio cloud, para supervisar las notificaciones y decisiones importantes.
- **Limita el número de propietarios** a 3 para reducir la superficie de exposición y facilitar el auditoría de acciones críticas.

Para obtener más información sobre la gestión de propietarios de tenencia, consulta el [Guía sobre los propietarios en un tenencia | Documentación Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-dels-propietarios-en-un-tenencia).

### Gestion de las permisos en tus servicios cloud

La Consola Cloud Temple ofrece una gestión de permisos altamente gráfica, permitiendo asignar a cada usuario un o más niveles de permiso, que determinan con precisión las acciones autorizadas. Consulta la documentación sobre los permisos ([Permisos disponibles para los usuarios de tu organización | Documentación Cloud Temple](../../console/iam/conceptos?_highlight=*propietario#permisos-disponibles-para-los-usuarios-de-tu-organizacion)) para entender en detalle las diferentes permisos y su asignación adecuada.

Para una gestión eficiente y segura de los permisos, te recomendamos seguir estas mejores prácticas:

- **Aplica el principio del menor privilegio:** otorga únicamente las permisos necesarios para las funciones del usuario. Esto reduce riesgos limitando el acceso a funcionalidades no necesarias.
- **Limita los permisos sensibles:** asigna los permisos sensibles solo a los usuarios responsables de estas funciones. Los permisos sensibles incluyen la gestión de acceso (console_public_access_write, *_console_access, object - storage_write), la gestión de permisos (iam_write, iam_offline_access) y la gestión de copias de seguridad (backup_iaas_opensource_write, backup_iaas_spp_write).
- **Prioriza el acceso en lectura únicamente:** En caso de duda, otorga un acceso en lectura únicamente (\*_read) para minimizar riesgos mientras permite el acceso a las informaciónes necesarias.
- **Realiza revisiones periódicas de los derechos:** verifica regularmente los permisos de los usuarios para retirar los obsoletos. La exportación de los permisos en formato CSV facilita esta gestión.

Una asignación maestra de permisos limita los riesgos de error o acción malintencionada, fortaleciendo así tu postura de seguridad.

### Actualizar regularmente los hyperviseurs

Cloud Temple ofrece actualizaciones regulares para los hyperviseurs para garantizar la aplicación de parches de seguridad. Sin embargo, la actualización de los hyperviseurs es responsabilidad tuya, ya que no tenemos visión de tus restricciones empresariales.

Por lo tanto, te recomendamos:

- Verificar regularmente en la Consola la disponibilidad de nuevos builds para tus hyperviseurs;  
- **Desplegar regularmente los nuevos builds en todo el conjunto de tus hyperviseurs**, especialmente si corrigen vulnerabilidades de seguridad;  
- Desplegar regularmente sobre tus máquinas virtuales las nuevas versiones de vmtools.

También puedes consultar una página de alertas de seguridad para estar informado sobre vulnerabilidades conocidas y recomendaciones asociadas: [Alertas de seguridad | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Seguimiento de la actividad en los servicios cloud

Para garantizar una vigilancia efectiva de tu entorno cloud y responder rápidamente en caso de anomalía, es crucial implementar una estrategia de vigilancia activa. Te recomendamos especialmente:

- **Monitorear la disponibilidad de los servicios** a través de la [Página de Estado | Cloud Temple](https://status.cloud-temple.com/), para ser alertado en caso de incidentes o fallos globales;
- **Activar las notificaciones temáticas** relevantes para tu uso desde la Consola, para recibir alertas importantes en tiempo real (ver [Suscripción a notificaciones temáticas | Documentación Cloud Temple](../../console/iam/concepts#suscripcion-a-notificaciones-tematicas)).
- **Aprovechar los registros de actividad cloud** para identificar acciones sensibles o sospechosas sobre tus recursos (ver sección "Registro - Seguimiento de Actividades" del [Guía de inicio | Documentación Cloud Temple](../../iaas_vmware/quickstart)). La recolección y análisis de los registros de actividad pueden automatizarse a través de las API Consola, para integrar los eventos en tus herramientas de supervisión o de detección de incidentes.

## Fortalecer la seguridad de las recursos alojadas

En un modelo de nube, la seguridad de las recursos que se despliegan recae en la responsabilidad del usuario. Cloud Temple ofrece una infraestructura segura, pero es usted quien debe proteger sus sistemas operativos, sus datos y sus configuraciones.

A continuación, se presentan las prácticas básicas esenciales para fortalecer la seguridad de sus VM: configuración de políticas de backup, cifrado de recursos críticos y endurecimiento de los sistemas operativos. Estas medidas contribuyen a limitar los riesgos de compromiso, a garantizar la integridad de los datos y a asegurar una continuidad de actividades en caso de incidente.

### Configurar las copias de seguridad

Para garantizar la seguridad y la resiliencia de sus datos, es crucial definir y aplicar correctamente sus políticas de copia de seguridad. La asignación de una política de copia de seguridad a cada máquina virtual antes de iniciarla es obligatoria. La documentación se encuentra en la sección "Copias de seguridad" del [Guía de inicio | Documentación Cloud Temple IaaS VMware](../../iaas_vmware/quickstart).

Aquí están las recomendaciones para gestionar las políticas de copias de seguridad de sus recursos Cloud Temple:

- **Defina sus políticas de copia de seguridad:** Pida al soporte la creación de políticas de copia de seguridad adaptadas a los requisitos de seguridad de su organización.  
- **Evite las políticas suspendidas:** No deje ninguna VM asociada a una política de copia de seguridad suspendida para evitar comprometer la seguridad de sus datos.
- **Realice pruebas de restauración:** Realice pruebas regulares de la restauración de sus copias de seguridad para controlar la efectividad de sus procedimientos de recuperación.

### Encriptar máquinas virtuales sensibles

Además del encriptado de datos al nivel de los discos, nativos para todas las recursos cloud, **el encriptado de máquinas virtuales (VM) puede activarse para proteger sus recursos más sensibles**. Para ello, consulta [Encriptar una máquina virtual VMware | Documentación Cloud Temple](../../iaas_vmware/tutorials/vm_encryption?_highlight=*encriptar).

Aquí hay algunas buenas prácticas a considerar al utilizar el encriptado de VM:

- Activar el encriptado sobre las VMs sensibles: Aplica-lo desde la creación de la máquina o durante una actualización planificada. La operación requiere el cierre temporal de la VM;
- Verificar el estado de encriptación: Confirma desde la consola que la VM muestre correctamente el estado "encriptado";
- Hacer una copia de seguridad antes del encriptado: Asegúrate de que la VM esté correctamente respaldada antes de realizar cualquier modificación.

### Limitar la exposición de sus recursos

Para limitar la superficie de ataque de tus máquinas virtuales, es altamente recomendable restringir los servicios expuestos al máximo necesario. En particular, asegúrate de configurar tus recursos de manera que **no se exposen públicamente las interfaces de administración y consolas** de sistemas y aplicaciones despliegues.

Si utilizas los servicios de Almacenamiento Objeto de Cloud Temple, también es recomendable **no configurar tus buckets en acceso público**, a menos que sea estrictamente necesario (consulta [Limitación del acceso a tus buckets S3 | Documentación Cloud Temple](../../storage/oss/quickstart?#gestión-de-políticas-de-acceso]).

### Fortalecer las máquinas virtuales (servicios IaaS)

Alojar una máquina virtual en un entorno de nube seguro no garantiza, por sí mismo, la seguridad del sistema operativo, los servicios o las aplicaciones que ejecute. El fortalecimiento de las VMs, ya sean alojadas por usted o provenientes del catálogo, recae en su responsabilidad.

Le recomendamos que **aplique las medidas básicas de seguridad**:

- Mantenga los sistemas actualizados con los parches de seguridad;
- Limite los servicios expuestos;
- Desactive los componentes innecesarios;  
- Restrinja los derechos de acceso al estricto necesario;
- Activa la registro de acciones;
- Configure salvaguardas regulares.

Para guiarlo en estas acciones, se le recomienda:

- Los guías de fortalecimiento del software que utiliza;
- [Guías esenciales y buenas prácticas de ciberseguridad | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guías de seguridad CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Estas buenas prácticas constituyen la primera línea de defensa para proteger sus sistemas en el cloud.

### Fortalecer los contenedores (servicios PaaS)

Para garantizar la seguridad de tus contenedores en el marco del servicio PaaS OpenShift, te recomendamos implementar las siguientes medidas para fortalecer su protección:

- **Fuente de imágenes**: Asegúrate de que todas las imágenes provienen de fuentes confiables, como registros internos o el Red Hat Container Catalog, y evita el uso de imágenes comunitarias no verificadas, como aquellas disponibles en Docker Hub público.
- **Restricciones de privilegios**: Limita los privilegios de los contenedores utilizando las funcionalidades de OpenShift, especialmente las *Security Context Constraints* (SCC), para restringir las permisos al máximo necesario.
- **Configuración de SCC**: Crea SCC personalizados para cada aplicación o grupo de aplicaciones. Esto incluye la restricción de llamadas sistemáticas autorizadas (por ejemplo, mediante *seccomp profiles*), con configuraciones específicas como la prohibición de *ptrace* o *mount* para reducir los riesgos de evasión de contenedores.
- **Aislamiento de cargas de trabajo**: Utiliza los *Namespaces* y las *Network Policies* para aislar las aplicaciones y limitar las interacciones no necesarias entre los contenedores.
- **Registros completos**: Activa la registro mediante el operador OpenShift Logging para capturar eventos asociados con los contenedores y sistemas hospedados, lo que permite una detección y análisis más efectivos de cualquier actividad sospechosa.

## Para ir más allá

Si deseas obtener servicios de seguridad adicionales o un acompañamiento de seguridad más fuerte en áreas como auditorías, fortalecimiento, cumplimiento, asesoría, etc., nuestros **Servicios Profesionales** pueden ser solicitados. Para obtener más información, ponte en contacto con tu interlocutor Cloud Temple.
