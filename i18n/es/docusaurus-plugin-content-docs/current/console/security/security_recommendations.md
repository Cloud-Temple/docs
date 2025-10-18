

---
title: Buenas prácticas
---

*Última actualización: 22/05/2025*



## Recomendaciones para el uso seguro de los servicios Cloud Temple

Los servicios Cloud Temple le ofrecen una infraestructura en la nube altamente segura por diseño. Sin embargo, algunas buenas prácticas de seguridad corresponden a su responsabilidad como usuario de estos servicios. Esta guía lo ayuda a reforzar la seguridad de su entorno en la nube aprovechando las funcionalidades ofrecidas en la Consola.

Encontrará recomendaciones concretas para:

- Proteger el acceso a la consola en la nube;
- Gestionar los accesos y permisos de manera controlada;
- Proteger los recursos desplegados a través de nuestros servicios en la nube.



## Acceso a la Consola

El acceso a la Consola es la puerta de entrada a todos sus servicios Cloud Temple. Por lo tanto, es esencial protegerlo de manera efectiva.



### Restringir el acceso a la Consola mediante filtrado de IP

El acceso a la consola de gestión en la nube está limitado a las direcciones IP previamente autorizadas. Esta restricción permite autorizar el acceso únicamente a los usuarios provenientes de las rangos de IP especificados, minimizando así los riesgos de acceso no autorizado.

Puede configurar estas restricciones IP en los parámetros de su organización. Para saber cómo configurar el filtrado de IP, consulte la [Gestión de accesos y autenticación | Documentación Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Para maximizar la eficacia de este mecanismo, tenga en cuenta lo siguiente:

- **Limitar el número de direcciones IP autorizadas** al estrictamente necesario;
- Evitar rangos demasiado amplios o genéricos;
- Añadir **únicamente IP provenientes de entornos controlados** (ej.: IP de salida de su red empresarial);
- Prohibir, o limitar al máximo, las direcciones IP individuales (ej.: IP pública del domicilio de su personal de TI);
- Prohibir, o limitar, las direcciones IP de un tercero (ej.: proveedor de servicios);
- Mantener esta lista actualizada en caso de evolución de su infraestructura de red.

Para accesos remotos (trabajo remoto, proveedores...), prefiera pasar por su red empresarial mediante VPN en lugar de autorizar direcciones IP individuales. Esto reduce la superficie de exposición de la Consola y centraliza la gestión de accesos dentro de su organización.



### Usar la federación de identidad

La federación de identidad permite integrar la Consola Cloud Temple a su proveedor de identidad (IdP), activando el SSO. Este enfoque centraliza la autenticación y ofrece varios beneficios:

- Gestión unificada de cuentas: creación, modificación y eliminación a través de su directorio;
- Reducción de la superficie de ataque: las cuentas locales se vuelven innecesarias o limitadas;
- Mayor trazabilidad: los accesos se registran mediante su IdP;
- Integración reforzada: MFA, alertas, políticas de seguridad contextual…;
- Cumplimiento facilitado: coherencia con sus prácticas internas.

Por estas razones, **la federación de identidades se recomienda**, especialmente para entornos con gran número de usuarios o requisitos de seguridad elevados.

Siga nuestros tutoriales paso a paso para integrar su proveedor de identidad:

- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)



### Habilitar la autenticación de dos factores (MFA)

La autenticación de dos factores (MFA) mejora significativamente la seguridad de acceso a la Consola Cloud Temple. Añade un paso adicional de autenticación solicitando un código temporal generado por una aplicación dedicada, junto con la contraseña. Esta medida reduce considerablemente los riesgos de acceso no autorizado, incluso en caso de robo de credenciales.

Para las cuentas gestionadas localmente desde la Consola (sin federación), el MFA está habilitado por defecto y no se puede deshabilitar.

**Para las cuentas federadas, se recomienda encarecidamente exigir el MFA en el proveedor de identidad**, especialmente para los administradores con acceso a la Consola.

Para más información:  

- [¿Qué es la autenticación de dos factores y es obligatoria? | Documentación Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Federación de identidad con Microsoft EntraID | Documentación Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Tutorial: Federación de identidad con Microsoft ADFS | Documentación Cloud Temple](../../console/iam/tutorials/sso_adfs)



### Acceder a la Consola desde dispositivos seguros

El puesto y el entorno desde los que accede a la Consola son importantes para garantizar la administración de sus servicios en la nube. Si se encuentra en un entorno con requisitos de seguridad elevados, puede aplicar las siguientes recomendaciones:

- Para la administración por sus propias equipos, aplicar todo o parte de [Recomendaciones sobre la administración segura de los SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) ;
- En caso de administración por un tercero, estudiar la oportunidad de recurrir a un [Prestadores de administración y mantenimiento seguros (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), según la sensibilidad de los recursos alojados y su contexto legal y regulatorio.



### Sensibilizar a los administradores al riesgo de phishing

Los accesos a la Consola Cloud Temple deben estar sujetos a una vigilancia reforzada, especialmente frente a intentos de phishing destinados a robar credenciales o códigos MFA. Es crucial que los usuarios autorizados estén sensibilizados regularmente ante estos riesgos: verificación sistemática de la URL, prudencia frente a mensajes inesperados y notificación inmediata de cualquier actividad sospechosa.

Para limitar estos riesgos, recomendamos nunca acceder a la Consola a través de un enlace recibido por correo electrónico, sino siempre escribir manualmente la URL habitual.

Estas buenas prácticas son responsabilidad del cliente y son esenciales para prevenir los ataques de phishing. En caso de duda, el soporte Cloud Temple sigue a su disposición.



## Gestión de servicios en la nube

Tus recursos en la nube se gestionan desde la Consola. Este capítulo presenta recomendaciones esenciales para controlar la operación de los servicios en la nube.



### Identificar a los propietarios del inquilino

El propietario del inquilino tiene todas las permisos relacionados con los productos activados y recibe notificaciones oficiales. Es crucial asegurarse de que los propietarios de su inquilino sean los contactos adecuados dentro de su organización.

Para una gestión segura y eficaz:

- **Identifique un propietario responsable**, preferiblemente una persona directamente involucrada en la gestión del entorno.
- **Verifique la dirección de correo electrónico de contacto** del propietario para asegurarse de que sea válida y consultada regularmente.
- **Asegúrese de tener un control directo**, agregando un propietario miembro de su organización, incluso si confía la gestión de su servicio en la nube, para poder supervisar las notificaciones y decisiones importantes.
- **Limite el número de propietarios** a 3 para reducir la superficie de exposición y facilitar el auditoría de las acciones críticas.

Para más información sobre la gestión de los propietarios del inquilino, consulte el [Guía de propietarios en un inquilino | Documentación Cloud Temple](../../console/iam/concepts#gestion-des-propri%C3%A9taires-sur-un-tenant).



### Gestionar los permisos en sus servicios en la nube

La Consola Cloud Temple permite gestionar los accesos de forma granular asignando a cada usuario uno o varios niveles de permiso, que determinan exactamente las acciones autorizadas. Consulte la documentación sobre permisos ([Permisos disponibles para los usuarios de su organización | Documentación Cloud Temple](../../console/iam/concepts#permissions-disponibles-para-los-usuarios-de-su-organización)) para comprender en detalle los diferentes permisos y asignarlos de manera adecuada.

Para una gestión eficaz y segura de los permisos, le recomendamos seguir estas buenas prácticas:

- **Aplicar el principio del mínimo privilegio:** otorgue a los usuarios únicamente los permisos necesarios para sus funciones. Esto reduce los riesgos limitando el acceso a funcionalidades no necesarias.
- **Limitar los permisos sensibles:** asigne los permisos sensibles únicamente a los usuarios responsables de dichas funciones. Los permisos sensibles incluyen especialmente la gestión de accesos (console_public_access_write, *_console_access, object - storage_write), la gestión de permisos (iam_write, iam_offline_access) y la gestión de copias de seguridad (backup_iaas_opensource_write, backup_iaas_spp_write).
- **Priorizar el acceso de solo lectura:** en caso de duda, otorgue un acceso de solo lectura (*_read) para minimizar los riesgos, permitiendo al mismo tiempo el acceso a la información necesaria.
- **Realizar revisiones periódicas de los derechos:** revise periódicamente los permisos de los usuarios para eliminar los obsoletos. La exportación de permisos en formato CSV facilita esta gestión.

Una asignación controlada de permisos limita los riesgos de errores o acciones malintencionadas, reforzando al mismo tiempo su postura de seguridad.



### Actualizar regularmente los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores con el fin de aplicar las correcciones de seguridad. Sin embargo, la actualización de los hipervisores sigue siendo responsabilidad suya, ya que no tenemos visibilidad sobre sus restricciones empresariales.  

Por lo tanto, le recomendamos que:

- Verifique regularmente en la Consola la disponibilidad de nuevos builds para sus hipervisores;  
- **Implemente regularmente los nuevos builds en todos sus hipervisores**, especialmente si corrigen vulnerabilidades de seguridad;
- Implemente regularmente en sus máquinas virtuales las nuevas versiones de los vmtools.

**Una página de alertas de seguridad está disponible** para informarle sobre las vulnerabilidades conocidas y las recomendaciones asociadas: [Alertas de seguridad | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).



### Seguir la actividad en los servicios en la nube

Para garantizar una supervisión eficaz de su entorno en la nube y reaccionar rápidamente ante anomalías, es esencial implementar una estrategia de vigilancia activa. Recomendamos especialmente:

- **Supervisar la disponibilidad de los servicios** a través de la [Página de estado | Cloud Temple](https://status.cloud-temple.com/), para recibir notificaciones en caso de incidentes o fallos globales;
- **Activar las notificaciones temáticas** relevantes para su uso desde la Consola, para recibir alertas importantes en tiempo real (ver [Suscripción a las notificaciones temáticas | Documentación Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-thématiques));
- **Utilizar los registros de actividad de Cloud** para identificar acciones sensibles o sospechosas en sus recursos (ver sección « Registro - Seguimiento de Actividades » del [Guía de inicio | Documentación Cloud Temple](../../iaas_vmware/quickstart)). La recopilación y análisis de registros de actividad puede automatizarse mediante las API de la Consola, para integrar los eventos en sus herramientas de supervisión o detección de incidentes.



## Proteger los recursos alojados

En un modelo en la nube, la seguridad de los recursos desplegados corresponde a la responsabilidad del usuario. Cloud Temple proporciona una infraestructura segura, pero le corresponde a usted proteger sus sistemas operativos, sus datos y sus configuraciones.

A continuación encontrará las buenas prácticas esenciales para reforzar la seguridad de sus máquinas virtuales: configuración de políticas de copia de seguridad, cifrado de recursos críticos y fortalecimiento de los sistemas operativos. Estas medidas contribuyen a limitar los riesgos de compromiso, garantizar la integridad de los datos y asegurar la continuidad de la actividad en caso de incidente.



### Configurar las copias de seguridad

Para garantizar la seguridad y la resiliencia de sus datos, es esencial definir y aplicar correctamente sus políticas de copia de seguridad. La asignación de una política de copia de seguridad a cada máquina virtual antes de su inicio es obligatoria. La documentación está disponible en la sección "Copia de seguridad" del [Guía de inicio | Documentación Cloud Temple](../../iaas_vmware/quickstart).

Estas son las recomendaciones para la gestión de las políticas de copias de seguridad de sus recursos Cloud Temple:

- **Defina sus políticas de copia de seguridad:** Solicite al soporte la creación de políticas de copia de seguridad adaptadas a los requisitos de nuestra organización en materia de seguridad.  
- **Evite las políticas suspendidas:** No deje ninguna VM asociada a una política de copia de seguridad suspendida para evitar comprometer la seguridad de los datos.
- **Realice pruebas de restauración:** Pruebe regularmente la restauración de sus copias de seguridad para controlar la eficacia de sus procedimientos de restauración.



### Cifrar las VM sensibles

Además del cifrado de datos a nivel de discos, nativos para todas las recursos en la nube, **el cifrado de VM puede activarse para proteger sus recursos más sensibles**. Para ello, consulte [Cifrar una máquina virtual VMware | Documentación Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

Estas son algunas buenas prácticas en caso de utilizar el cifrado de VM:

- Activar el cifrado en las VM sensibles: Aplicarlo desde la creación de la máquina o durante una actualización programada. La operación requiere el apagado temporal de la VM;
- Verificar el estado de cifrado: Verifique desde la consola que la VM muestra correctamente el estado "cifrada";
- Hacer una copia de seguridad antes del cifrado: Asegúrese de que la VM esté correctamente respaldada antes de cualquier modificación.



### Restringir la exposición de sus recursos

Para limitar la superficie de ataque de sus máquinas virtuales, se recomienda fuertemente restringir al mínimo necesario los servicios expuestos. En particular, asegúrese de configurar sus recursos de manera a **no exponer públicamente las interfaces de administración y consolas** de los sistemas y aplicaciones desplegados.

Si utiliza los servicios de Almacenamiento de Objetos de Cloud Temple, también se recomienda **no configurar sus buckets con acceso público**, excepto en casos estrictamente necesarios (ver [Limitación del acceso a sus buckets S3 | Documentación Cloud Temple](../../storage/oss/quickstart#gestion-des-politiques-daccès)).



### Hardening de máquinas virtuales (servicios IaaS)

La alojamiento de una máquina virtual en una nube segura no garantiza, por sí solo, la seguridad del sistema operativo, los servicios o las aplicaciones que ejecuta. El hardening de las VM, ya sean desplegadas por usted o provenientes del catálogo, corresponde a su responsabilidad.

Le recomendamos aplicar las **medidas de seguridad básicas**:

- Mantener los sistemas actualizados con parches de seguridad;
- Limitar los servicios expuestos;
- Desactivar los componentes innecesarios;  
- Restringir los derechos de acceso al mínimo necesario;
- Activar la auditoría de accesos;
- Configurar copias de seguridad periódicas.

Para guiar estas acciones, apóyese en:

- Las guías de hardening de los editores de los software que utiliza;
- [Guías esenciales y buenas prácticas de ciberseguridad | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guías de seguridad CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Estas buenas prácticas constituyen la primera línea de defensa para proteger sus sistemas en la nube.



### Fortalecer los contenedores (servicios PaaS)

Para garantizar la seguridad de sus contenedores en el marco del servicio PaaS OpenShift, le recomendamos implementar las siguientes medidas para reforzar su fortalecimiento:

- **Fuente de las imágenes** : Asegúrese de que todas las imágenes provengan de fuentes confiables, como registros internos o el Red Hat Container Catalog, y evite el uso de imágenes comunitarias no verificadas, como las disponibles en Docker Hub público.
- **Restricción de privilegios** : Limite los privilegios de los contenedores utilizando las funciones de OpenShift, incluidos los *Security Context Constraints* (SCC), para restringir las permisos al estricto mínimo necesario.
- **Configuración de los SCC** : Cree SCC personalizados para cada aplicación o grupo de aplicaciones. Esto incluye la restricción de los llamados a sistema autorizados (por ejemplo, mediante *seccomp profiles*), con configuraciones específicas como la prohibición de *ptrace* o *mount* para reducir los riesgos de fuga de contenedores.
- **Aislamiento de las cargas de trabajo** : Utilice los *Namespaces* y las *Network Policies* para aislar las aplicaciones y limitar las interacciones no necesarias entre los contenedores.
- **Registro completo** : Active el registro a través del operador OpenShift Logging para capturar los eventos asociados a los contenedores y sistemas alojados, con el fin de detectar y analizar mejor cualquier actividad sospechosa.



## Para ir más allá

Si desea beneficiarse de servicios de seguridad adicionales o de un asesoramiento reforzado en aspectos de seguridad (auditoría, fortalecimiento, cumplimiento, asesoramiento, etc.), nuestros **Professional Services** pueden ser solicitados. Para obtener más información, póngase en contacto con su interlocutor de Cloud Temple.