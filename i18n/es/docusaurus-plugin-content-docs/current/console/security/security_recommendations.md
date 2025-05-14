---
title: Mejores Prácticas
---

## Recomendaciones para el Uso Seguro de los Servicios de Cloud Temple

Los servicios de Cloud Temple le ofrecen una infraestructura cloud altamente segura por diseño. Sin embargo, ciertas mejores prácticas de seguridad son su responsabilidad como usuario de estos servicios. Esta guía le ayuda a fortalecer la seguridad de su entorno cloud aprovechando las funcionalidades ofrecidas en la Consola.

Encontrará recomendaciones concretas para:

- Proteger el acceso a la Consola cloud;
- Gestionar los accesos y permisos de manera controlada;
- Asegurar los recursos desplegados a través de nuestros servicios cloud.

## Acceso a la Consola

El acceso a la Consola es la puerta de entrada a todos sus servicios de Cloud Temple. Por lo tanto, es esencial protegerla eficazmente.

### Restringir el Acceso a la Consola mediante Filtrado IP

El acceso a la consola de gestión cloud está limitado a direcciones IP previamente autorizadas. Esta restricción permite el acceso únicamente a usuarios provenientes de los rangos de IP especificados, minimizando así los riesgos de accesos no autorizados.

Puede configurar estas restricciones IP en los ajustes de su organización. Para saber cómo configurar el filtrado IP, consulte la [Gestión de Accesos y Autenticación | Documentación Cloud Temple](../console/iam/quickstart?_highlight=*facteur#gestion-des-acc%C3%A8s-et-authentification).

Para maximizar la eficacia de este mecanismo, asegúrese de:

- **Limitar el número de direcciones IP autorizadas** a lo estrictamente necesario;
- Evitar rangos demasiado amplios o genéricos;
- Añadir **únicamente IPs provenientes de entornos controlados** (ej: IP de salida de su red empresarial);
- Prohibir, o limitar al máximo, las direcciones IP individuales (ej: IP pública del domicilio de su personal IT);
- Prohibir, o limitar, las direcciones IP de terceros (ej: proveedor de servicios);
- Mantener esta lista actualizada en caso de evolución de su infraestructura de red.

Para los accesos remotos (teletrabajo, proveedores de servicios, etc.), privilegie el paso por su red empresarial vía VPN en lugar de autorizar directamente direcciones IP individuales. Esto reduce la superficie de exposición de la Consola y centraliza la gestión de accesos dentro de su organización.

### Utilizar la Federación de Identidad

La federación de identidad permite integrar la Consola Cloud Temple con su proveedor de identidad (IdP), activando el SSO. Este enfoque centraliza la autenticación y ofrece varios beneficios:

- Gestión unificada de cuentas: creación, modificación y eliminación a través de su directorio;
- Reducción de la superficie de ataque: las cuentas locales se vuelven innecesarias o limitadas;
- Mayor trazabilidad: los accesos son registrados por su IdP;
- Integración reforzada: MFA, alertas, políticas de seguridad contextual, etc.;
- Conformidad facilitada: coherencia con sus prácticas internas.

Por estas razones, **se recomienda la federación de identidades**, en particular para entornos con gran número de personal o con altos requisitos de seguridad.

Siga nuestras guías paso a paso para integrar su proveedor de identidad:
- [Configurar la Federación con Azure AD | Documentación Cloud Temple](../console/iam/tutorials/sso_aad)
- [Configurar la Federación con ADFS | Documentación Cloud Temple](../console/iam/tutorials/sso_adfs)

### Activar la Autenticación Multifactor (MFA)

La autenticación multifactor (MFA) refuerza significativamente la seguridad de acceso a la Consola Cloud Temple. Añade una etapa de autenticación solicitando un código temporal generado por una aplicación dedicada, además de la contraseña. Esta medida limita fuertemente los riesgos de acceso no autorizado, incluso en caso de robo de credenciales.

Para las cuentas gestionadas localmente por la Consola (sin federación), el MFA está activado por defecto y no puede ser desactivado.

**Para las cuentas federadas, se recomienda encarecidamente exigir el MFA del lado del proveedor de identidad**, en particular para los administradores con acceso a la Consola.

Para saber más:

- [¿Qué es el MFA y es obligatorio? | Documentación Cloud Temple](../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Federación de Identidad con Microsoft EntraID | Documentación Cloud Temple](../console/iam/tutorials/sso_aad)
- [Tutorial: Federación de Identidad con Microsoft ADFS | Documentación Cloud Temple](../console/iam/tutorials/sso_adfs)

### Acceder a la Consola desde Equipos Seguros

El puesto y el entorno desde los cuales accede a la Consola son importantes para asegurar la administración de sus servicios cloud. Si evoluciona en un entorno con altos requisitos de seguridad, puede aplicar las siguientes recomendaciones:

- Para la administración por sus propios equipos, aplicar todo o parte de las [Recomendaciones relativas a la administración segura de SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- En caso de administración por un tercero, estudiar la oportunidad de recurrir a un [Proveedor de Administración y Mantenimiento Seguros (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), según la sensibilidad de los recursos alojados y su contexto legal y reglamentario.

### Sensibilizar a los Administradores sobre el Riesgo de Phishing

Los accesos a la Consola Cloud Temple deben ser objeto de una vigilancia reforzada, en particular frente a los intentos de phishing destinados a robar credenciales o códigos MFA. Es crucial que los usuarios habilitados sean regularmente sensibilizados sobre estos riesgos: verificación sistemática de la URL, prudencia frente a mensajes inesperados, y señalamiento inmediato de cualquier actividad sospechosa.

Para limitar estos riesgos, recomendamos no acceder nunca a la Consola a través de un enlace recibido por correo electrónico, sino siempre introduciendo manualmente la URL habitual.

Estas buenas prácticas son su responsabilidad como cliente y son esenciales para prevenir ataques de phishing. En caso de duda, el soporte de Cloud Temple está a su disposición.

## Gestión de Servicios Cloud

Sus recursos Cloud se gestionan desde la Consola. Este capítulo presenta recomendaciones esenciales para controlar la explotación de los servicios cloud.

### Identificar a los Propietarios de Tenant

El propietario del tenant posee todos los permisos relacionados con los productos activados y recibe las notificaciones oficiales. Es crucial asegurarse de que los propietarios de su tenant sean los interlocutores adecuados dentro de su organización.

Para una gestión segura y eficaz:

- **Identifique un propietario responsable**, preferiblemente una persona directamente implicada en la gestión del entorno.
- **Verifique la dirección de correo electrónico de contacto** del propietario para asegurarse de que es válida y consultada regularmente.
- **Asegure un control directo**, añadiendo un propietario miembro de su organización, incluso si confía la gestión de su servicio cloud, con el fin de poder supervisar las notificaciones y decisiones importantes.
- **Limite el número de propietarios** a 3 para reducir la superficie de exposición y facilitar la auditoría de acciones críticas.

Para saber más sobre la gestión de propietarios de tenant, consulte la [Guía de propietarios en un tenant | Documentación Cloud Temple](../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gestionar los Permisos en sus Servicios Cloud

La Consola Cloud Temple permite una gestión granular de los accesos asignando a cada usuario uno o varios niveles de permiso, que determinan precisamente las acciones autorizadas. Consulte la documentación de permisos ([Permisos disponibles para los usuarios de su organización | Documentación Cloud Temple](../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) para comprender en detalle los diferentes permisos y asignarlos de manera apropiada.

Para una gestión eficaz y segura de los permisos, le recomendamos seguir estas mejores prácticas:

- **Aplicar el principio del menor privilegio:** conceda a los usuarios únicamente los permisos necesarios para sus misiones. Esto reduce los riesgos limitando el acceso a funcionalidades innecesarias.
- **Limite los permisos sensibles:** Asigne los permisos sensibles únicamente a los usuarios responsables de estas funciones. Los permisos sensibles conciernen principalmente a la gestión de accesos (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestión de permisos (iam\_write, iam\_offline\_access), y la gestión de copias de seguridad (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Privilegie el acceso de solo lectura:** En caso de duda, dé un acceso de solo lectura (\*\_read) para minimizar los riesgos permitiendo al mismo tiempo el acceso a la información necesaria.
- **Realice revisiones regulares de derechos:** Verifique regularmente los permisos de los usuarios para retirar los obsoletos. La exportación de permisos en formato CSV facilita esta gestión.**

Una atribución controlada de los permisos limita los riesgos de error o acción maliciosa, reforzando al mismo tiempo su postura de seguridad.

### Actualizar Regularmente los Hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores con el fin de asegurar la aplicación de parches de seguridad. Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones de negocio.

Por lo tanto, le recomendamos:

- Controlar regularmente en la Consola la disponibilidad de nuevos builds para sus hipervisores;
- **Desplegar regularmente los nuevos builds en todos sus hipervisores**, en particular si corrigen fallos de seguridad;
- Desplegar regularmente en sus máquinas virtuales las nuevas versiones de vmtools.

Una página de información de seguridad disponible en la Consola permite identificar las vulnerabilidades conocidas y las recomendaciones asociadas (builds a desplegar, etc.).

### Seguir la Actividad en los Servicios Cloud

Para asegurar una vigilancia eficaz de su entorno cloud y reaccionar rápidamente en caso de anomalía, es esencial implementar una estrategia de vigilancia activa. Le recomendamos especialmente:

- **Monitorizar la disponibilidad de los servicios** a través de la [Página de Estado | Cloud Temple](https://status.cloud-temple.com/), para ser alertado en caso de incidentes o interrupciones globales;
- **Activar las notificaciones temáticas** pertinentes para su uso desde la Consola, para recibir en tiempo real las alertas importantes (ver [Suscripción a notificaciones temáticas | Documentación Cloud Temple](../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Explotar los registros de actividad Cloud** para identificar acciones sensibles o sospechosas en sus recursos (ver sección "Registro - Seguimiento de Actividades" de la [Guía de inicio | Documentación Cloud Temple](../iaas_vmware/quickstart)). La recopilación y análisis de los registros de actividad puede ser automatizada a través de las API de Consola, para integrar los eventos a sus herramientas de supervisión o detección de incidentes.

## Asegurar los Recursos Alojados

En un modelo Cloud, la seguridad de los recursos desplegados es responsabilidad del usuario. Cloud Temple proporciona una infraestructura segura, pero le corresponde a usted proteger sus sistemas operativos, sus datos y sus configuraciones.

A continuación encontrará las buenas prácticas esenciales para reforzar la seguridad de sus VM: configuración de políticas de copia de seguridad, cifrado de recursos críticos, y endurecimiento de los sistemas operativos. Estas medidas contribuyen a limitar los riesgos de compromiso, garantizar la integridad de los datos, y asegurar una continuidad de actividad en caso de incidente.

### Configurar las Copias de Seguridad

Para asegurar la seguridad y la resiliencia de sus datos, es esencial definir y aplicar correctamente sus políticas de copia de seguridad. La asignación de una política de copia de seguridad a cada máquina virtual antes de su inicio es obligatoria. La documentación está disponible en la sección "Copia de seguridad" de la [Guía de inicio | Documentación Cloud Temple](../iaas_vmware/quickstart).

Aquí están las recomendaciones en materia de gestión de políticas de copias de seguridad de sus recursos Cloud Temple:

- **Defina sus políticas de copia de seguridad:** Solicite al soporte la creación de políticas de copia de seguridad adaptadas a las necesidades de su organización en materia de seguridad.
- **Evite las políticas suspendidas:** No deje ninguna VM asociada a una política de copia de seguridad suspendida para evitar comprometer la seguridad de los datos.
- **Realice pruebas de restauración:** Pruebe regularmente la restauración de sus copias de seguridad para controlar la eficacia de sus procedimientos de restauración.

### Cifrar las VM Sensibles

Como complemento al cifrado de datos a nivel de discos, nativo para todos los recursos cloud, **el cifrado de VM puede ser activado para proteger sus recursos más sensibles**. Para ello, consulte [Cifrar una máquina virtual VMware | Documentación Cloud Temple](../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Aquí hay algunas buenas prácticas en caso de uso del cifrado de VM:

- Activar el cifrado en las VM sensibles: Aplíquelo desde la creación de la máquina o durante una actualización planificada. La operación requiere la detención temporal de la VM;
- Verificar el estado de cifrado: Controle desde la consola que la VM muestra el estado "cifrado";
- Hacer copia de seguridad antes del cifrado: Asegúrese de que la VM está correctamente respaldada antes de cualquier modificación.

### Restringir la Exposición de sus Recursos

Para limitar la superficie de ataque de sus máquinas virtuales, se recomienda encarecidamente restringir al mínimo necesario los servicios expuestos. En particular, asegúrese de configurar sus recursos de manera que **no expongan públicamente las interfaces de administración y consolas** de los sistemas y aplicaciones desplegados.

Si utiliza los servicios de Almacenamiento de Objetos de Cloud Temple, también se aconseja **no configurar sus buckets en acceso público**, salvo en los casos en que sea estrictamente necesario (ver [Limitación de accesos a sus buckets S3 | Documentación Cloud Temple](../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Endurecer las Máquinas Virtuales (Servicios IaaS)

El alojamiento de una máquina virtual en una nube segura no garantiza, por sí solo, la seguridad del sistema operativo, de los servicios o de las aplicaciones que ejecuta. El endurecimiento de las VM, ya sean desplegadas por usted o provenientes del catálogo, es su responsabilidad.

Le recomendamos **aplicar las medidas de seguridad básicas**:

- Mantener los sistemas actualizados con los parches de seguridad;
- Limitar los servicios expuestos;
- Desactivar los componentes innecesarios;
- Restringir los derechos de acceso a lo estrictamente necesario;
- Activar el registro de accesos;
- Configurar copias de seguridad regulares.

Para guiarle en estas acciones, apóyese en:

- Las guías de endurecimiento de los editores de los softwares que utiliza;
- [Guías esenciales y buenas prácticas de ciberseguridad | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guías de seguridad CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Estas buenas prácticas constituyen la primera línea de defensa para asegurar sus sistemas en la nube.

### Endurecer los Contenedores (Servicios PaaS)

Para asegurar la seguridad de sus contenedores en el marco del servicio PaaS OpenShift, le recomendamos implementar las siguientes medidas para reforzar su endurecimiento:

- **Fuente de las imágenes**: Asegúrese de que todas las imágenes provienen de fuentes confiables, como registros internos o el Red Hat Container Catalog, y evite el uso de imágenes comunitarias no verificadas, como las disponibles en Docker Hub público.
- **Restricción de privilegios**: Limite los privilegios de los contenedores utilizando las funcionalidades de OpenShift, especialmente las *Security Context Constraints* (SCC), para restringir los permisos a lo estrictamente necesario.
- **Configuración de SCC**: Cree SCC personalizados para cada aplicación o grupo de aplicaciones. Esto incluye la restricción de las llamadas al sistema autorizadas (por ejemplo, vía *seccomp profiles*), con configuraciones específicas como la prohibición de *ptrace* o *mount* para reducir los riesgos de evasión de los contenedores.
- **Aislamiento de cargas de trabajo**: Utilice los *Namespaces* y las *Network Policies* para aislar las aplicaciones y limitar las interacciones innecesarias entre los contenedores.
- **Registro completo**: Active el registro vía el operador OpenShift Logging para captar los eventos asociados a los contenedores y sistemas alojados, para detectar y analizar mejor cualquier actividad sospechosa.

## Para Ir Más Allá

Si desea beneficiarse de servicios de seguridad complementarios o de un acompañamiento reforzado sobre aspectos de seguridad (auditoría, endurecimiento, conformidad, asesoramiento, etc.), nuestros **Professional Services** pueden ser solicitados. Para saber más, contacte con su interlocutor de Cloud Temple.
