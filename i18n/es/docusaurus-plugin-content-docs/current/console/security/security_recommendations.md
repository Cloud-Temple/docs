---
title: Buenas prácticas
---

*Última actualización: 22/05/2025*

## Recomendaciones para el uso seguro de los servicios Cloud Temple

Los servicios Cloud Temple le ofrecen una infraestructura en la nube altamente segura por diseño. Sin embargo, algunas buenas prácticas de seguridad recaen en su responsabilidad como usuario de estos servicios. Este guía le ayuda a reforzar la seguridad de su entorno en la nube aprovechando las funcionalidades ofrecidas en la Consola.

Encontrará recomendaciones concretas para:

- Proteger el acceso a la Consola en la nube;
- Gestionar los accesos y permisos de manera controlada;
- Seguridad de las recursos desplegados a través de nuestros servicios en la nube.

## Acceso a la Consola

El acceso a la Consola es la puerta de entrada a todos sus servicios Cloud Temple. Por lo tanto, es esencial protegerlo de manera efectiva.

### Restringir el acceso a la Consola mediante filtrado de IP

El acceso a la consola de gestión en la nube está limitado a las direcciones IP previamente autorizadas. Esta restricción permite autorizar el acceso solo a los usuarios provenientes de las rangos de IP especificados, minimizando así los riesgos de acceso no autorizado.

Puede configurar estas restricciones IP en los ajustes de su organización. Para saber cómo configurar el filtrado de IP, consulte la [Gestión de accesos y autenticación | Documentación Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Para maximizar la eficacia de este mecanismo, tenga en cuenta:

- **Limitar el número de direcciones IP autorizadas al estricto necesario**;
- Evitar rangos demasiado amplios o genéricos;
- Añadir **únicamente IP provenientes de entornos controlados** (ej.: IP de salida de su red empresarial);
- Prohibir, o limitar al máximo, las direcciones IP individuales (ej.: IP pública del domicilio de su personal de TI);
- Prohibir, o limitar, las direcciones IP de un tercero (ej.: proveedor de servicios);
- Mantener esta lista actualizada en caso de evolución de su infraestructura de red.

Para los accesos remotos (trabajo remoto, proveedores...), prefiera pasar por su red empresarial mediante VPN en lugar de autorizar direcciones IP individuales. Esto reduce la superficie de exposición de la Consola y centraliza la gestión de accesos dentro de su organización.

### Utilizar la federación de identidad

La federación de identidad permite integrar la Consola Cloud Temple a su proveedor de identidad (IdP), activando el SSO. Este enfoque centraliza la autenticación y ofrece varios beneficios:

- Gestión unificada de cuentas: creación, modificación y eliminación a través de su directorio;
- Reducción de la superficie de ataque: las cuentas locales se vuelven innecesarias o limitadas;
- Mayor trazabilidad: los accesos se registran a través de su IdP;
- Integración reforzada: MFA, alertas, políticas de seguridad contextual...;
- Facilitar la conformidad: coherencia con sus prácticas internas.

Por estas razones, **la federación de identidad se recomienda**, especialmente para entornos con gran número de usuarios o requisitos de seguridad elevados.

Siga nuestros tutoriales paso a paso para integrar su proveedor de identidad:

- [Configurar la federación con Azure AD | Documentación Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Configurar la federación con ADFS | Documentación Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Activar la autenticación multifactor (MFA)

La autenticación multifactor (MFA) refuerza significativamente la seguridad del acceso a la Consola Cloud Temple. Añade un paso de autenticación pidiendo un código temporal generado por una aplicación dedicada, complementando la contraseña. Esta medida limita fuertemente los riesgos de acceso no autorizado, incluso en caso de robo de credenciales.

Para las cuentas gestionadas localmente por la Consola (sin federación), el MFA está activado por defecto y no se puede desactivar.

**Para las cuentas federadas, se recomienda fuertemente exigir el MFA en el proveedor de identidad**, especialmente para los administradores con acceso a la Consola.

Para más información:

- [¿Qué es el MFA y es obligatorio? | Documentación Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Federación de identidad con Microsoft EntraID | Documentación Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Tutorial: Federación de identidad con Microsoft ADFS | Documentación Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Acceder a la Consola desde equipos seguros

El equipo y el entorno desde los que accede a la Consola son importantes para garantizar la seguridad de la administración de sus servicios en la nube. Si opera en un entorno con requisitos de seguridad elevados, puede aplicar las siguientes recomendaciones:

- Para la administración por sus propias equipos, aplicar todo o parte de las [Recomendaciones sobre la administración segura de SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) ;
- En caso de administración por un tercero, estudiar la oportunidad de recurrir a un [Prestadores de administración y mantenimiento seguros (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), según la sensibilidad de los recursos alojados y su contexto legal y regulatorio.

### Sensibilizar a los administradores sobre el riesgo de phishing

Los accesos a la Consola Cloud Temple deben estar bajo vigilancia reforzada, especialmente frente a intentos de phishing para robar credenciales o códigos MFA. Es crucial que los usuarios autorizados estén regularmente sensibilizados sobre estos riesgos: verificación sistemática de la URL, prudencia frente a mensajes inesperados y notificación inmediata de cualquier actividad sospechosa.

Para limitar estos riesgos, recomendamos no acceder nunca a la Consola a través de un enlace recibido por correo electrónico, sino siempre escribir manualmente la URL habitual.

Estas buenas prácticas recaen en su responsabilidad como cliente y son esenciales para prevenir ataques de phishing. En caso de duda, el soporte Cloud Temple sigue a su disposición.

## Gestión de los servicios en la nube

Sus recursos en la nube se gestionan desde la Consola. Este capítulo presenta recomendaciones esenciales para controlar la explotación de los servicios en la nube.

### Identificar a los propietarios de tenant

El propietario de tenant tiene todas las permisos relacionados con los productos activados y recibe las notificaciones oficiales. Es crucial asegurarse de que los propietarios de su tenant sean los interlocutores adecuados dentro de su organización.

Para una gestión segura y eficaz:

- **Identifique a un propietario responsable**, preferiblemente una persona directamente involucrada en la gestión del entorno.
- **Verifique la dirección de correo electrónico de contacto** del propietario para asegurarse de que sea válida y consultada regularmente.
- **Asegure un control directo**, añadiendo un propietario miembro de su organización, incluso si confía la gestión de su servicio en la nube, para poder supervisar las notificaciones y decisiones importantes.
- **Limite el número de propietarios** a 3 para reducir la superficie de exposición y facilitar la auditoría de acciones críticas.

Para más información sobre la gestión de los propietarios de tenant, consulte el [Guía de propietarios en un tenant | Documentación Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestionar los permisos en sus servicios en la nube

La Consola Cloud Temple permite gestionar los accesos de forma granular asignando a cada usuario uno o varios niveles de permiso, que determinan exactamente las acciones autorizadas. Consulte la documentación de permisos ([Permisos disponibles para los usuarios de su organización | Documentación Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) para comprender en detalle los diferentes permisos y asignarlos de manera adecuada.

Para una gestión eficaz y segura de los permisos, le recomendamos seguir estas buenas prácticas:

- **Aplicar el principio del menor privilegio:** otorgue a los usuarios solo los permisos necesarios para sus misiones. Esto reduce los riesgos limitando el acceso a funcionalidades no necesarias.
- **Limitar los permisos sensibles:** Asigne los permisos sensibles solo a los usuarios responsables de estas funciones. Los permisos sensibles incluyen principalmente la gestión de accesos (console_public_access_write, *console_access, object - storage_write), la gestión de permisos (iam_write, iam_offline_access), y la gestión de copias de seguridad (backup_iaas_opensource_write, backup_iaas_spp_write).**
- **Preferir el acceso en modo lectura:** En caso de duda, otorgue un acceso en modo lectura (*_read) para minimizar los riesgos mientras permite el acceso a la información necesaria.
- **Realizar revisiones periódicas de los derechos:** Verifique periódicamente los permisos de los usuarios para retirar los obsoletos. La exportación de permisos en formato CSV facilita esta gestión.**

Una asignación controlada de permisos limita los riesgos de error o acción maliciosa, reforzando al mismo tiempo su postura de seguridad.

### Actualizar regularmente los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores para garantizar la aplicación de parches de seguridad. Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones empresariales.
Por lo tanto, le recomendamos:

- Controlar regularmente en la Consola la disponibilidad de nuevos builds para sus hipervisores;  
- **Desplegar regularmente los nuevos builds en todos sus hipervisores**, especialmente si corrigen vulnerabilidades de seguridad;
- Desplegar regularmente en sus máquinas virtuales las nuevas versiones de los vmtools.

**Una página de alertas de seguridad está disponible** para informarle sobre las vulnerabilidades conocidas y recomendaciones asociadas: [Alertas de seguridad | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).  

### Seguir la actividad en los servicios cloud

Para garantizar una supervisión efectiva de su entorno cloud y reaccionar rápidamente ante anomalías, es esencial implementar una estrategia de vigilancia activa. Le recomendamos especialmente:

- **Supervisar la disponibilidad de los servicios** a través de la [Página de estado | Cloud Temple](https://status.cloud-temple.com/), para recibir alertas en caso de incidentes o fallos globales;
- **Activar las notificaciones temáticas** pertinentes para su uso desde la Consola, para recibir alertas importantes en tiempo real (ver [Suscripción a notificaciones temáticas | Documentación Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Utilizar los registros de actividad Cloud** para identificar acciones sensibles o sospechosas en sus recursos (ver sección « Registro - Seguimiento de Actividades » del [Guía de inicio | Documentación Cloud Temple](../../iaas_vmware/quickstart)). La recopilación y análisis de registros de actividad puede automatizarse mediante las API de la Consola, para integrar eventos en sus herramientas de supervisión o detección de incidentes.

## Proteger los recursos alojados

En un modelo Cloud, la seguridad de los recursos desplegados recae en la responsabilidad del usuario. Cloud Temple proporciona una infraestructura segura, pero le corresponde proteger sus sistemas operativos, datos y configuraciones.

A continuación encontrará las buenas prácticas esenciales para reforzar la seguridad de sus VM: configuración de políticas de copia de seguridad, cifrado de recursos críticos y fortalecimiento de los sistemas operativos. Estas medidas contribuyen a limitar los riesgos de compromiso, garantizar la integridad de los datos y asegurar la continuidad de actividad en caso de incidente.

### Configurar las copias de seguridad

Para garantizar la seguridad y resiliencia de sus datos, es esencial definir y aplicar correctamente sus políticas de copia de seguridad. La asignación de una política de copia de seguridad a cada máquina virtual antes de su inicio es obligatoria. La documentación está disponible en la sección "Copia de seguridad" del [Guía de inicio | Documentación Cloud Temple](../../iaas_vmware/quickstart).

Estas son las recomendaciones sobre la gestión de las políticas de copia de seguridad de sus recursos Cloud Temple:

- **Defina sus políticas de copia de seguridad:** Solicite al soporte la creación de políticas de copia de seguridad adaptadas a las necesidades de seguridad de nuestra organización.  
- **Evite políticas suspendidas:** No deje ninguna VM asociada a una política de copia de seguridad suspendida para evitar comprometer la seguridad de los datos.
- **Realice pruebas de restauración:** Pruebe regularmente la restauración de sus copias de seguridad para controlar la eficacia de sus procedimientos de restauración.

### Cifrar las VM sensibles

Además del cifrado de datos a nivel de discos, nativo para todas las recursos cloud, **el cifrado de las VM puede activarse para proteger sus recursos más sensibles**. Para ello, consulte [Cifrar una máquina virtual VMware | Documentación Cloud Temple](../../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Estas son algunas buenas prácticas en caso de uso del cifrado de VM:

- Activar el cifrado en las VM sensibles: Aplicarlo desde la creación de la máquina o durante una actualización planificada. La operación requiere el apagado temporal de la VM;
- Verificar el estado de cifrado: Compruebe desde la consola que la VM muestra el estado "cifrada";
- Realizar una copia de seguridad antes del cifrado: Asegúrese de que la VM esté correctamente copiada de seguridad antes de cualquier modificación.

### Limitar la exposición de sus recursos

Para limitar la superficie de ataque de sus máquinas virtuales, se recomienda fuertemente limitar al mínimo necesario los servicios expuestos. En particular, asegúrese de configurar sus recursos de manera a **no exponer públicamente las interfaces de administración y consolas** de los sistemas y aplicaciones desplegados.

Si utiliza los servicios de Almacenamiento Objetos de Cloud Temple, también se recomienda **no configurar sus buckets en acceso público**, salvo en casos estrictamente necesarios (ver [Limitación de accesos a sus buckets S3 | Documentación Cloud Temple](../../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Fortalecer las máquinas virtuales (servicios IaaS)

El alojamiento de una máquina virtual en una nube segura no garantiza, por sí solo, la seguridad del sistema operativo, servicios o aplicaciones que ejecuta. El fortalecimiento de las VM, ya sean desplegadas por usted o provenientes del catálogo, recae en su responsabilidad.

Le recomendamos **aplicar las medidas de seguridad básicas**

- Mantener los sistemas actualizados con parches de seguridad;
- Limitar los servicios expuestos;
- Desactivar componentes innecesarios;  
- Restringir los derechos de acceso al mínimo necesario;
- Activar el registro de accesos;
- Configurar copias de seguridad periódicas.

Para guiar estas acciones, apoye:

- Los guías de fortalecimiento de los editores de los software que utiliza;
- [Guías esenciales y buenas prácticas de ciberseguridad | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guías de seguridad CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Estas buenas prácticas constituyen la primera línea de defensa para garantizar la seguridad de sus sistemas en la nube.

### Fortalecer los contenedores (servicios PaaS)

Para garantizar la seguridad de sus contenedores en el marco del servicio PaaS OpenShift, le recomendamos implementar las siguientes medidas para reforzar su fortalecimiento:

- **Origen de las imágenes:** Asegúrese de que todas las imágenes provengan de fuentes confiables, como registros internos o el Red Hat Container Catalog, y evite el uso de imágenes comunitarias no verificadas, como las disponibles en Docker Hub público.
- **Restricción de privilegios:** Limite los privilegios de los contenedores utilizando las funcionalidades de OpenShift, especialmente los *Security Context Constraints* (SCC), para restringir permisos al mínimo necesario.
- **Configuración de SCC:** Cree SCC personalizados para cada aplicación o grupo de aplicaciones. Esto incluye la restricción de llamadas al sistema autorizadas (por ejemplo, mediante *seccomp profiles*), con configuraciones específicas como la prohibición de *ptrace* o *mount* para reducir los riesgos de escape de contenedores.
- **Aislamiento de cargas de trabajo:** Utilice *Namespaces* y *Network Policies* para aislar las aplicaciones y limitar las interacciones no necesarias entre los contenedores.
- **Registro completo:** Active el registro mediante el operador OpenShift Logging para capturar eventos asociados a los contenedores y sistemas alojados, para detectar y analizar mejor cualquier actividad sospechosa.

## Para obtener más información

Si desea beneficiarse de servicios de seguridad complementarios o de un apoyo reforzado en aspectos de seguridad (auditoría, fortalecimiento, conformidad, asesoramiento, etc.), nuestros **Servicios Profesionales** pueden solicitarse. Para más información, póngase en contacto con su interlocutor Cloud Temple.