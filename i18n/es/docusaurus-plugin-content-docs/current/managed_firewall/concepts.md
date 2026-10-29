---
title: Conceptos
---

## Presentación

Managed Firewall es un clúster de cortafuegos de nueva generación (NGFW) totalmente gestionado. Garantiza el filtrado de los flujos norte-sur (entre Internet y sus recursos) y este-oeste (entre sus segmentos internos), la prevención de intrusiones, la inspección de aplicaciones y la conectividad VPN hacia sus sedes remotas y sus usuarios móviles.

El servicio está disponible en dos ediciones:

- **Edición Stormshield**: solución de un fabricante francés, adaptada a las organizaciones que buscan soberanía tecnológica en su equipo de seguridad;
- **Edición Fortinet**: adaptada a las organizaciones que desean apoyarse en el ecosistema Fortinet (SD-WAN, ZTNA, Security Fabric) o integrarlo en sus infraestructuras existentes.

En ambas ediciones, el servicio incluye el clúster de alta disponibilidad Activo/Pasivo, la gestión operativa (mantenimiento en condiciones operativas, supervisión 24/7, actualizaciones de las firmas) y las funciones VPN.

### Destinatarios y casos de uso

Managed Firewall está dirigido a los RSSI y equipos de seguridad, a las direcciones de sistemas de información que amplían o sustituyen un cortafuegos on-premise, y a los equipos DevOps que necesitan un cortafuegos dedicado delante de sus clústeres de aplicaciones. Casos de uso típicos:

- **Perímetro de seguridad cloud**: filtrado de los flujos entrantes y salientes de sus recursos (máquinas virtuales, clústeres Kubernetes, bases de datos).
- **VPN sitio a sitio (IPsec)**: interconexión cifrada entre sus recursos cloud, sus centros de datos on-premise, sus sucursales y sus socios.
- **Acceso remoto (SSL-VPN)**: acceso cifrado y autenticado por MFA a los recursos internos para los empleados móviles.
- **Microsegmentación**: aislamiento de los segmentos de red (DMZ, producción, desarrollo, bases de datos) con reglas de filtrado entre segmentos.
- **Inspección de aplicaciones y prevención de intrusiones**: control de las aplicaciones que atraviesan el cortafuegos y bloqueo de los intentos de explotación de vulnerabilidades.
- **SD-WAN y ZTNA (edición Fortinet)**: gestión de varios enlaces WAN con conmutación automática, y acceso a aplicaciones basado en la identidad y la postura del terminal.

## Ventajas

| Ventaja                      | Descripción                                                                                                                                              |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Explotación incluida         | El despliegue, la alta disponibilidad, las actualizaciones (sistema del cortafuegos, firmas IPS, bases de URL) y la supervisión se gestionan en su lugar. |
| Elección del fabricante      | Usted elige la edición Stormshield o Fortinet según sus exigencias de soberanía y su ecosistema existente.                                              |
| Alta disponibilidad          | El clúster Activo/Pasivo conmuta automáticamente al segundo nodo en caso de fallo de un nodo.                                                            |
| Protección multicapa         | Filtrado L3/L4 con estado, control de aplicaciones L7, IPS/IDS, filtrado web y antivirus se reúnen en un único servicio.                                 |
| VPN integrada                | VPN IPsec sitio a sitio y SSL-VPN están incluidas, sin infraestructura VPN adicional.                                                                    |
| Inteligencia de amenazas     | Las firmas IPS, las bases de URL y los indicadores de compromiso se actualizan automáticamente desde las fuentes del fabricante.                          |
| Escalabilidad                | Puede pasar a un modelo superior sin rediseñar la arquitectura, conservando la configuración.                                                            |

## Funcionalidades

### Funcionalidades comunes a ambas ediciones

| Funcionalidad                      | Descripción                                                                                                                                                  |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cortafuegos con estado (L3/L4)     | Filtrado por dirección IP de origen y destino, puerto TCP/UDP y protocolo, con seguimiento del estado de las sesiones.                                       |
| Control de aplicaciones (L7)       | Identificación y control de más de 3 000 aplicaciones, independientemente del puerto utilizado: autorización, bloqueo o limitación por aplicación.          |
| Prevención de intrusiones (IPS/IDS) | Detección y bloqueo de los intentos de explotación de vulnerabilidades: firmas de ataques, anomalías de protocolo, parches virtuales (virtual patching).    |
| Filtrado web                       | Categorización y filtrado de URL, bloqueo de sitios maliciosos y de phishing, filtrado DNS, aplicación de SafeSearch.                                       |
| Inspección SSL/TLS                 | Descifrado e inspección del tráfico HTTPS/TLS, y posterior recifrado transparente. Se pueden definir excepciones (banca, salud, certificados internos).     |
| Antivirus                          | Análisis de los archivos en tránsito por HTTP, FTP, SMTP, IMAP y POP3.                                                                                       |
| VPN IPsec sitio a sitio            | Túneles IKEv2 cifrados en AES-256-GCM con Perfect Forward Secrecy, autenticación por certificados o clave precompartida, VPN basada en enrutamiento (VTI), Dead Peer Detection. |
| SSL-VPN                            | Acceso remoto en full tunnel o split tunnel, autenticación MFA (TOTP con LDAP o Active Directory), portal web o cliente nativo.                              |
| Alta disponibilidad                | Clúster Activo/Pasivo con sincronización de las sesiones y de las configuraciones, y conmutación automática.                                                 |
| NAT/PAT                            | Traducción de direcciones de origen y destino para exponer servicios de forma controlada y gestionar los flujos de Internet.                                 |
| Registro                           | Registros de los flujos autorizados y bloqueados, de los eventos IPS, de las conexiones VPN y de las sesiones de usuarios, exportables a un SIEM.             |

### Funcionalidades propias de la edición Fortinet

| Funcionalidad                 | Descripción                                                                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SD-WAN                        | Gestión de varios enlaces WAN con conmutación automática, reparto de carga por aplicación y seguimiento de la calidad de los enlaces (pérdida, latencia, jitter).   |
| ZTNA                          | Acceso a aplicaciones basado en la identidad del usuario y la postura del terminal (FortiClient), con verificación continua de la conformidad del terminal.        |
| Virtual Domains (VDOM)        | División del cortafuegos en instancias lógicamente aisladas en un mismo clúster, para separar entornos o entidades.                                                |
| Servicios FortiGuard          | Inteligencia de amenazas: base de URL (más de 175 categorías), firmas IPS y antivirus, reputación IP, filtrado DNS, anti-botnet.                                    |
| Integración Security Fabric   | Integración con el ecosistema Fortinet (FortiAnalyzer, FortiManager, FortiSIEM, FortiEDR).                                                                         |
| Anti-spam                     | Filtrado del tráfico de correo electrónico (SMTP, IMAP, POP3) contra el spam y los correos electrónicos maliciosos.                                                |

### Funcionalidades propias de la edición Stormshield

| Funcionalidad                          | Descripción                                                                                                                    |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Análisis de protocolos ASQ             | Motor de inspección que verifica la conformidad de los protocolos de red con los RFC, más allá de las firmas.                  |
| Integración Stormshield Data Security  | Compatibilidad con Stormshield Data Security para el cifrado de los datos a nivel de archivo y de correo electrónico.           |
| Stormshield Management Center          | Consola de gestión centralizada de las políticas de seguridad.                                                                 |
| Inteligencia de amenazas               | Actualizaciones periódicas de las firmas IPS, de las URL maliciosas y de los indicadores de compromiso desde el fabricante.    |

### Administración y supervisión

- **Gestión de las políticas**: toda modificación (regla de filtrado, configuración VPN) es objeto de una solicitud de cambio formalizada, tramitada por el equipo de explotación del servicio.
- **Interfaz del fabricante**: se puede ofrecer un acceso a la interfaz web del fabricante para la consulta de los registros y de las políticas.
- **Supervisión**: paneles de control preconfigurados (tráfico por interfaz, sesiones activas, tasa de bloqueo IPS, ancho de banda VPN, estado de la alta disponibilidad, CPU y memoria).
- **Alertas**: alertas preconfiguradas (nodo no disponible, túnel VPN caído, pico de tráfico anómalo, detección de ataque, saturación de las sesiones).
- **Exportación de los registros**: Syslog (TCP/TLS), CEF o LEEF hacia su SIEM o el de un tercero.

## Arquitectura

El servicio se basa en un clúster de dos nodos en modo Activo/Pasivo. El nodo activo garantiza el filtrado, la inspección y la pasarela VPN; el nodo pasivo permanece sincronizado (sesiones, configuración, tablas de enrutamiento) y retoma el tráfico en caso de fallo.

El clúster se sitúa entre sus accesos externos (Internet, WAN, sedes remotas, usuarios móviles) y sus recursos alojados, a los que protege en zonas de red filtradas.

El servicio incluye:

- **el clúster de alta disponibilidad** de dos nodos;
- **la gestión de las firmas**: actualización automática de las bases IPS, de filtrado de URL, de antivirus y de inteligencia de amenazas;
- **la supervisión** del estado del clúster, de las sesiones activas, de los túneles VPN y de las métricas de rendimiento;
- **la administración** del cortafuegos por el equipo de explotación del servicio.

### Integraciones

- **VPC**: el cortafuegos se sitúa como pasarela de seguridad entre las zonas de red de su VPC.
- **Private Backbone**: filtrado de los flujos entre zonas de disponibilidad y entre sedes.
- **Managed Kubernetes**: cortafuegos dedicado delante de los clústeres Kubernetes gestionados.
- **Bastion**: acceso de administración trazado a las consolas del cortafuegos.
- **SIEM**: exportación de los registros de flujos, de los eventos IPS y de las conexiones VPN hacia su SIEM o el de un tercero.
- **Equipos de terceros**: VPN IPsec compatible con cualquier equipo que admita IKEv2; autenticación SSL-VPN mediante Active Directory, LDAP o RADIUS, con TOTP.

## Regiones y zonas de disponibilidad

Managed Firewall está disponible en la región FR1. La infraestructura y los datos de configuración se alojan exclusivamente en Francia.

## Especificaciones técnicas

### Modelos de la edición Stormshield

Cada modelo corresponde a un clúster de alta disponibilidad completo de dos nodos.

| Modelo | vCPU | RAM  | Usuarios SSL-VPN máx. | Túneles IPsec máx. |
|--------|------|------|--------------------------|-------------------|
| EVA1   | 1    | 2 GB | 50                       | 100               |
| EVA2   | 2    | 3 GB | 512                      | 150               |
| EVA3   | 4    | 6 GB | 512                      | 200               |

### Modelos de la edición Fortinet

Cada modelo corresponde a un clúster de alta disponibilidad completo de dos nodos.

| Modelo | vCPU | VDOM incluidos |
|--------|------|-------------|
| VM02V  | 2    | 1           |
| VM04V  | 4    | 1           |
| VM08V  | 8    | 1           |

Una opción añade 5 VDOM. Cada VDOM dispone de sus propias políticas de seguridad, tablas de enrutamiento, interfaces de red y registros.

### Parámetros comunes

| Parámetro                  | Valor                                                     |
|----------------------------|-----------------------------------------------------------|
| Modo de alta disponibilidad | Activo/Pasivo (Activo/Activo bajo petición)              |
| VPN IPsec                  | IKEv2 (compatible con IKEv1)                              |
| Cifrado VPN                | AES-256-GCM, AES-128-GCM                                  |
| Integridad VPN             | SHA-256, SHA-384, SHA-512                                 |
| Perfect Forward Secrecy    | DH grupo 14 (2 048 bits) como mínimo, hasta el grupo 21 (ECDH P-521) |
| Autenticación VPN          | Certificados X.509 o clave precompartida                  |
| Cifrado SSL-VPN            | TLS 1.3 (TLS 1.2 como mínimo)                             |
| Cifrado de administración  | TLS 1.3                                                   |
| Registro de los flujos     | Todas las sesiones, volumen configurable                  |

### Límites

- Las reglas de filtrado las gestiona el equipo de explotación del servicio, en coordinación con usted, mediante el proceso de solicitud de cambio.
- El acceso directo a la línea de comandos del cortafuegos (SSH o consola) no se proporciona de forma estándar.
- Los modelos Stormshield tienen un número máximo de usuarios SSL-VPN y de túneles IPsec fijado por la licencia: más allá, es necesario pasar a un modelo superior.
- El modo Activo/Activo (reparto de las sesiones) está disponible bajo petición; el modo estándar es Activo/Pasivo.

## Seguridad y cumplimiento

Managed Firewall está certificado HDS e ISO 27001.

- **Cifrado en tránsito**: AES-256-GCM para las VPN (IKEv2, SSL-VPN), TLS 1.3 para la administración.
- **Cifrado en reposo**: los registros están cifrados.
- **Gobernanza de los cambios**: toda modificación de la política de seguridad sigue un proceso de cambio documentado y trazable.
- **Trazabilidad**: todas las operaciones de administración quedan registradas (autor, modificación, fecha).
- **Alertas**: los eventos críticos (intentos de intrusión, superación de umbrales, fallo de un nodo) activan alertas en tiempo real.

## Copia de seguridad y continuidad

- **Alta disponibilidad**: el clúster Activo/Pasivo sincroniza sesiones, configuraciones y tablas de enrutamiento, y conmuta automáticamente en caso de fallo de un nodo.
- **Mantenimiento sin interrupción**: los parches se aplican nodo por nodo (actualización del nodo pasivo, conmutación y, después, actualización del otro nodo) para garantizar la continuidad del servicio.

## Versiones y ciclo de vida

- **Edición Fortinet**: versión de FortiOS elegida según las recomendaciones del fabricante, con dos actualizaciones mayores planificadas al año.
- **Edición Stormshield**: última versión estable, con dos actualizaciones mayores planificadas al año y parches de seguridad aplicados en un plazo de 15 días.
- **Firmas IPS, antivirus y URL**: actualizaciones automáticas diarias, o en tiempo real según la suscripción del fabricante.
- **Fin de soporte**: se le notifica 90 días antes del fin de soporte de una versión.

## Disponibilidad del servicio

| Elemento                       | Objetivo de disponibilidad, medido sobre un mes |
|--------------------------------|-----------------------------------------------|
| Servicio de filtrado (clúster) | 99,9 %                                        |
| Túneles VPN IPsec establecidos | 99,9 %                                        |

## Reversibilidad

Al finalizar el servicio, puede recuperar los siguientes elementos:

| Elemento exportado       | Entregable                                                 | Plazo de puesta a disposición | Coste      |
|--------------------------|------------------------------------------------------------|-----------------------------|------------|
| Configuración            | Archivo de configuración completo del cortafuegos (formato del fabricante) | 15 días      | Sin coste  |
| Registros                | Registros de flujos y de eventos (Syslog o CEF)            | 30 días                     | Sin coste  |
| Políticas VPN            | Parámetros de los túneles IPsec y del SSL-VPN              | 15 días                     | Sin coste  |
| Asistencia a la migración | Soporte técnico para un despliegue en otra infraestructura | Bajo petición              | Bajo presupuesto |

Los datos de configuración y los registros se borran después de forma segura en un plazo de 7 días.

## Precios

Managed Firewall se factura mensualmente, por clúster de alta disponibilidad de dos nodos, con las licencias del fabricante, las firmas y la explotación incluidas. Las tarifas se publican en la página del producto en el sitio web de Cloud Temple:
[Managed Firewall — precios](https://www.cloud-temple.com/produits/managed-firewall/).

## Buenas prácticas

- Elija la edición según sus exigencias: soberanía del fabricante (Stormshield) o funciones SD-WAN, ZTNA y VDOM (Fortinet).
- Dimensione el modelo según el número de usuarios SSL-VPN y de túneles IPsec previstos, con un margen de crecimiento.
- Exporte los registros a su SIEM para correlacionar los eventos de red con sus otras fuentes de seguridad.
- Utilice el Bastion para los accesos de administración, a fin de que queden trazados.
