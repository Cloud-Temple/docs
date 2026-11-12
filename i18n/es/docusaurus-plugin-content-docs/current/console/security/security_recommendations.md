---
title: Buenas prácticas
---

*Última actualización : 22/05/2025*

## Recomendaciones para el uso seguro de los servicios Cloud Temple

Los servicios Cloud Temple le ofrecen una infraestructura cloud altamente segura por diseño. Sin embargo, ciertas buenas prácticas de seguridad son de su responsabilidad como usuario de estos servicios. Esta guía le ayuda a reforzar la seguridad de su entorno cloud aprovechando las funcionalidades propuestas en la Consola.

Encontrará en ella recomendaciones concretas para :

- Proteger el acceso a la Consola cloud ;
- Gestionar los accesos y los permisos de manera controlada ;
- Asegurar los recursos desplegados a través de nuestros servicios cloud.

## Acceso a la Consola

El acceso a la Consola es la puerta de entrada a la totalidad de sus servicios Cloud Temple. Por lo tanto, es esencial protegerla eficazmente.

### Restringir el acceso a la Consola mediante filtrado IP

El acceso a la consola de gestión cloud está limitado a las direcciones IP previamente autorizadas. Esta restricción permite autorizar el acceso únicamente a los usuarios provenientes de las rangos de IP especificados, minimizando así los riesgos de acceso no autorizado.

Puede configurar estas restricciones IP en los parámetros de su organización. Para saber cómo configurar el filtrado IP, consulte la [Gestión de accesos y autenticación | Documentación Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestión-de-accesos-y-autenticación).

Para maximizar la eficacia de este mecanismo, asegúrese de :

- **Limitar el número de direcciones IP autorizadas** al estrictamente necesario ;
- Evitar rangos demasiado amplios o genéricos ;
- Añadir **únicamente IPs provenientes de entornos controlados** (ej : IP de salida de su red corporativa) ;
- Proscribir, o limitar al máximo, las direcciones IP individuales (ej : IP pública del domicilio de su personal IT) ;
- Proscribir, o limitar, las direcciones IP de un tercero (ej : prestador de servicios) ;
- Mantener esta lista actualizada en caso de evolución de su infraestructura de red.

Para los accesos remotos (teletrabajo, prestadores…), prefiera un paso a través de su red corporativa mediante VPN en lugar de una autorización directa de direcciones IP individuales. Esto reduce la superficie de exposición de la Consola y centraliza la gestión de accesos dentro de su organización.

### Utilizar la federación de identidad

La federación de identidad permite integrar la Consola Cloud Temple con su proveedor de identidad (IdP), activando el SSO. Este enfoque centraliza la autenticación y ofrece varios beneficios :

- Gestión unificada de las cuentas : creación, modificación y supresión a través de su directorio ;
- Reducción de la superficie de ataque : las cuentas locales se vuelven innecesarias o limitadas ;
- Trazabilidad aumentada : los accesos son registrados por su IdP ;
- Integración reforzada : MFA, alertas, políticas de seguridad contextual… ;
- Cumplimiento facilitado : coherencia con sus prácticas internas.

Por estas razones, **la federación de identidades es recomendada**, en particular para los entornos con gran número de usuarios o con requisitos de seguridad elevados.

Siga nuestras guías paso a paso para integrar su proveedor de identidad :

- [Configurar la federación con Azure AD | Documentación Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Configurar la federación con ADFS | Documentación Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Activar la autenticación multifactor (MFA)

La autenticación multifactor (MFA) refuerza significativamente la seguridad de acceso a la Consola Cloud Temple. Añade una etapa de autenticación solicitando un código temporal generado por una aplicación dedicada, en complemento de la contraseña. Esta medida limita fuertemente los riesgos de acceso no autorizado, incluso en caso de robo de credenciales.

Para las cuentas gestionadas localmente por la Consola (sin federación), el MFA está activado por defecto y no puede desactivarse.

**Para las cuentas federadas, se recomienda encarecidamente exigir el MFA en el lado del proveedor de identidad**, en particular para los administradores con acceso a la Consola.

Para saber más :

- [¿Qué es el MFA y es obligatorio? | Documentación Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#qué-es-el-mfa-y-es-obligatorio)
- [Tutorial : Federación de identidad con Microsoft EntraID | Documentación Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Tutorial : Federación de identidad con Microsoft ADFS | Documentación Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Acceder a la Consola desde equipos seguros

El equipo y el entorno desde los que accede a la Consola son importantes para asegurar la administración de sus servicios cloud. Si opera en un entorno con requisitos de seguridad elevados, puede aplicar las siguientes recomendaciones :

- Para la administración por sus propios equipos, aplicar todo o parte de las [Recomendaciones relativas a la administración segura de los SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) ;
- En caso de administración por un tercero, estudiar la oportunidad de recurrir a un [Prestadores de administración y mantenimiento seguros (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), según la sensibilidad de los recursos alojados y su contexto legal y regulatorio.

### Sensibilizar a los administradores sobre el riesgo de phishing

Los accesos a la Consola Cloud Temple deben ser objeto de una vigilancia reforzada, en particular frente a los intentos de phishing que buscan sustraer credenciales o códigos MFA. Es crucial que los usuarios habilitados sean sensibilizados regularmente sobre estos riesgos : verificación sistemática de la URL, prudencia frente a mensajes inesperados, y notificación inmediata de cualquier actividad sospechosa.

Para limitar estos riesgos, recomendamos no acceder nunca a la Consola a través de un enlace recibido por correo electrónico, sino siempre introduciendo manualmente la URL habitual.

Estas buenas prácticas son de su responsabilidad como cliente y son esenciales para prevenir los ataques de phishing. En caso de duda, el soporte de Cloud Temple queda a su disposición.

## Gestión de los servicios cloud

Sus recursos Cloud se gestionan desde la Consola. Este capítulo le presenta recomendaciones esenciales para controlar la explotación de los servicios cloud.

### Identificar los propietarios de tenant

El propietario de tenant posee todos los permisos relacionados con los productos activados y recibe las notificaciones oficiales. Es crucial asegurarse de que los propietarios de su tenant son los interlocutores adecuados dentro de su organización.

Para una gestión segura y eficaz :

- **Identifique un propietario responsable**, de preferencia una persona directamente implicada en la gestión del entorno.
- **Verifique la dirección de correo electrónico de contacto** del propietario para asegurarse de que es válida y consultada regularmente.
- **Asegure un control directo**, añadiendo un propietario miembro de su organización, incluso si confía la gestión de su servicio cloud, para poder supervisar las notificaciones y decisiones importantes.
- **Limite el número de propietarios** a 3 para reducir la superficie de exposición y facilitar la auditoría de las acciones críticas.

Para saber más sobre la gestión de los propietarios de tenant, consulte la [Guía de los propietarios en un tenant | Documentación Cloud Temple](../../console/iam/concepts#gestión-de-propietarios-en-un-tenant).

### Gestionar los permisos sobre sus servicios cloud

La Consola Cloud Temple permite una gestión granular de los accesos asignando a cada usuario uno o varios niveles de permiso, que determinan precisamente las acciones autorizadas. Consulte la documentación de permisos ([Permisos disponibles para los usuarios de su organización | Documentación Cloud Temple](../../console/iam/concepts#permissions-disponibles-para-los-usuarios-de-su-organización)) para comprender en detalle los diferentes permisos y asignarlos de manera apropiada.

Para una gestión eficaz y segura de los permisos, le recomendamos seguir estas mejores prácticas :

- **Aplicar el principio de menor privilegio :** otorgue a los usuarios únicamente los permisos necesarios para sus funciones. Esto reduce los riesgos limitando el acceso a funcionalidades no necesarias.
- **Limite los permisos sensibles :** Asigne los permisos sensibles únicamente a los usuarios responsables de estas funciones. Los permisos sensibles conciernen en particular la gestión de accesos (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestión de permisos (iam\_write, iam\_offline\_access), y la gestión de copias de seguridad (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Prefiera el acceso de solo lectura :** En caso de duda, otorgue un acceso de solo lectura (\*\_read) para minimizar los riesgos permitiendo al mismo tiempo el acceso a la información necesaria.
- **Realice revisiones periódicas de los derechos :** Verifique regularmente los permisos de los usuarios para retirar los obsoletos. La exportación de permisos en formato CSV facilita esta gestión.**

Una asignación controlada de permisos limita los riesgos de error o de acción maliciosa, al mismo tiempo que refuerza su postura de seguridad.

### Actualizar regularmente los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores con el fin de garantizar la aplicación de las correcciones de seguridad. Sin embargo, la actualización de los hipervisores sigue siendo de su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones de negocio.

Por lo tanto, le recomendamos :

- Controlar regularmente en la Consola la disponibilidad de nuevos builds para sus hipervisores ;
- **Desplegar regularmente los nuevos builds en la totalidad de sus hipervisores**, en particular si corrigen vulnerabilidades de seguridad ;
- Desplegar regularmente en sus máquinas virtuales las nuevas versiones de vmtools.

**Una página de alertas de seguridad está disponible** para informarle de las vulnerabilidades conocidas y las recomendaciones asociadas : [Alertas de seguridad | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Seguir la actividad sobre los servicios cloud

Para garantizar una vigilancia eficaz de su entorno cloud y reaccionar rápidamente en caso de anomalía, es esencial poner en marcha una estrategia de vigilancia activa. Le recomendamos en particular :

- **Vigilar la disponibilidad de los servicios** a través de la [Status page | Cloud Temple](https://status.cloud-temple.com/), para ser alertado en caso de incidentes o averías globales ;
- **Activar las notificaciones temáticas** pertinentes para su uso desde la Consola, para recibir en tiempo real las alertas importantes (ver [Suscripción a las notificaciones temáticas | Documentación Cloud Temple](../../console/iam/concepts#suscripción-a-notificaciones-temáticas)) ;
- **Explotar los registros de actividad Cloud** para identificar las acciones sensibles o sospechosas sobre sus recursos (ver sección « Registro - Seguimiento de Actividades » de la [Guía de inicio | Documentación Cloud Temple](../../iaas_vmware/quickstart)). La recopilación y el análisis de los registros de actividad puede automatizarse a través de las API de la Consola, para integrar los eventos en sus herramientas de supervisión o de detección de incidentes.

## Asegurar los recursos alojados

En un modelo Cloud, la seguridad de los recursos desplegados es responsabilidad del usuario. Cloud Temple proporciona una infraestructura segura, pero le corresponde proteger sus sistemas operativos, sus datos y sus configuraciones.

A continuación encontrará las buenas prácticas esenciales para reforzar la seguridad de sus VM : configuración de políticas de copia de seguridad, cifrado de los recursos críticos, y endurecimiento de los sistemas operativos. Estas medidas contribuyen a limitar los riesgos de compromiso, a garantizar la integridad de los datos, y a asegurar una continuidad de actividad en caso de incidente.

### Configurar las copias de seguridad

Para garantizar la seguridad y la resiliencia de sus datos, es esencial definir y aplicar correctamente sus políticas de copia de seguridad. La asignación de una política de copia de seguridad a cada máquina virtual antes de su arranque es obligatoria. La documentación está disponible en la sección "Copia de seguridad" de la [Guía de inicio | Documentación Cloud Temple](../../iaas_vmware/quickstart).

A continuación las recomendaciones en materia de gestión de las políticas de copia de seguridad de sus recursos Cloud Temple :

- **Defina sus políticas de copia de seguridad :** Solicite al soporte la creación de las políticas de copia de seguridad adaptadas a las necesidades de su organización en materia de seguridad.
- **Evite las políticas suspendidas :** No deje ninguna VM asociada a una política de copia de seguridad suspendida para evitar comprometer la seguridad de los datos.
- **Realice pruebas de restauración :** Pruebe regularmente la restauración de sus copias de seguridad para controlar la eficacia de sus procedimientos de restauración.

### Cifrar las VM sensibles

En complemento del cifrado de los datos a nivel de los discos, nativo para todos los recursos cloud, **el cifrado de las VM puede activarse para proteger sus recursos más sensibles**. Para ello, consulte [Cifrar una máquina virtual VMware | Documentación Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

A continuación algunas buenas prácticas en caso de uso del cifrado de las VM :

- Activar el cifrado en las VM sensibles : Aplíquelo desde la creación de la máquina o durante una actualización planificada. La operación requiere la parada temporal de la VM ;
- Verificar el estado de cifrado : Controle desde la consola que la VM muestre bien el estado "cifrado" ;
- Hacer copia de seguridad antes del cifrado : Asegúrese de que la VM está correctamente respaldada antes de cualquier modificación.

### Restringir la exposición de sus recursos

Para limitar la superficie de ataque de sus máquinas virtuales, se recomienda encarecidamente restringir al estrictamente necesario los servicios expuestos. En particular, asegúrese de configurar sus recursos de manera de **no exponer públicamente las interfaces de administración y consolas** de los sistemas y aplicaciones desplegados.

Si utiliza los servicios de Almacenamiento de Objetos de Cloud Temple, también se aconseja **no configurar sus buckets en acceso público**, salvo en los casos en que sea estrictamente necesario (ver [Limitación de los accesos a sus buckets S3 | Documentación Cloud Temple](../../storage/oss/quickstart#gestión-de-políticas-de-acceso)).

### Endurecer las máquinas virtuales (servicios IaaS)

El alojamiento de una máquina virtual en una nube segura no garantiza, por sí solo, la seguridad del sistema operativo, de los servicios o de las aplicaciones que ejecuta. El endurecimiento de las VM, ya sean desplegadas por usted o procedentes del catálogo, es de su responsabilidad.

Le recomendamos **aplicar las medidas de seguridad básicas**

- Mantener los sistemas actualizados con los parches de seguridad;
- Limitar los servicios expuestos;
- Desactivar los componentes innecesarios;
- Restringir los derechos de acceso al mínimo estrictamente necesario;
- Activar el registro de accesos;
- Configurar copias de seguridad periódicas.

Para guiarle en estas acciones, base su trabajo en:

- Las guías de endurecimiento de los editores de los software que utiliza;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Estas buenas prácticas constituyen la primera línea de defensa para proteger sus sistemas en la nube.

### Endurecer los contenedores (servicios PaaS)

Para garantizar la seguridad de sus contenedores en el marco del servicio PaaS OpenShift, le recomendamos implementar las siguientes medidas para reforzar su endurecimiento:

- **Origen de las imágenes**: Asegúrese de que todas las imágenes provengan de fuentes fiables, como registros internos o el Red Hat Container Catalog, y evite el uso de imágenes comunitarias no verificadas, como las disponibles en Docker Hub público.
- **Restricción de privilegios**: Limite los privilegios de los contenedores utilizando las funcionalidades de OpenShift, en particular las *Security Context Constraints* (SCC), para restringir los permisos al mínimo estrictamente necesario.
- **Configuración de las SCC**: Cree SCC personalizados para cada aplicación o grupo de aplicaciones. Esto incluye la restricción de las llamadas al sistema autorizadas (por ejemplo, mediante *seccomp profiles*), con configuraciones específicas como la prohibición de *ptrace* o *mount* para reducir los riesgos de escape de contenedores.
- **Aislamiento de las cargas de trabajo**: Utilice los *Namespaces* y los *Network Policies* para aislar las aplicaciones y limitar las interacciones innecesarias entre los contenedores.
- **Registro completo**: Active el registro mediante el operador OpenShift Logging para capturar los eventos asociados a los contenedores y sistemas alojados, a fin de detectar y analizar mejor cualquier actividad sospechosa.

## Para ir más allá

Si desea beneficiarse de servicios de seguridad complementarios o de un acompañamiento reforzado en aspectos de seguridad (auditoría, endurecimiento, cumplimiento, asesoramiento, etc.), nuestros **Professional Services** pueden ser solicitados. Para obtener más información, acérquese a su interlocutor de Cloud Temple.
