---
title: Seguimiento de Cambios
sidebar_position: 2
---

# Seguimiento de Cambios

### 10 de septiembre de 2026: Documentación de LLMaaS actualizada

- **Seleccionar y supervisar sus modelos** : Acceso directo al [catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) para consultar los modelos disponibles, las fechas de finalización del soporte y las migraciones recomendadas.
- **Comenzar a utilizar el servicio** : Guías de inicio y ejemplos de integración actualizados para facilitar los primeros usos y la integración en sus aplicaciones.
- **Comprender los usos y la facturación** : Documentación aclarada sobre el procesamiento por lotes, la búsqueda documental y las modalidades de facturación del reranking.

### 20 de agosto de 2026: Armonización de la etiqueta de madurez de las bases de datos gestionadas

- **Navegación — Databases** : Eliminación de la insignia **Beta** en las entradas **MariaDB Gestionado** y **PostgreSQL Gestionado** del menú lateral y en las tarjetas de la página Databases. Ambos servicios mostraban simultáneamente dos etiquetas de madurez contradictorias: *Beta* en la navegación, *Preview* en el título de sus páginas de producto. Solo se conserva la insignia **Preview**, como única fuente de verdad sobre el nivel de madurez de estos servicios. Traducciones disponibles EN/DE/ES/IT.

### 17 de agosto de 2026 : Actualización de las alertas de seguridad

- **Seguridad** : Nuevos [avisos de seguridad](./console/security/security_alarms.md) están disponibles para los entornos VMware, OpenShift, XCP-ng y Dell, para ayudarle a identificar los productos afectados y las acciones recomendadas.

### 14 de agosto de 2026: Aclaración sobre la gestión de accesos

- **Consola — Gestión de accesos** : La [guía de identidades y permisos](./console/iam/concepts.md) distingue las acciones a realizar a nivel de organización y de cada tenant, para facilitar la asignación de accesos y la gestión de propietarios.

### 7 de agosto de 2026: Guía de la vista de organización

- **Consola — Organización** : La [guía de inicio rápido](./console/console_quickstart.md) presenta la vista de organización y la gestión de tenants. La documentación también especifica el rol de los propietarios y los procedimientos para actualizar sus accesos.

### 15 de julio de 2026: Aclaración sobre el cifrado de Object Storage

- **Object Storage (Seguridad)** : La sección sobre el cifrado de datos en reposo (D@RE) especifica ahora que el servicio utiliza un cifrado AES de 256 bits certificado FIPS 140-3, mediante la biblioteca de software RSA BSAFE Crypto-J en la versión 7.x.

### 30 de abril de 2026 : Detalles sobre el rendimiento del almacenamiento

- **Almacenamiento (IaaS VMware, OpenSource, Bare Metal)** : Adición de límites absolutos de IOPS y ancho de banda máximo para todas las clases de almacenamiento. Esta información permite dimensionar mejor los entornos en función de las necesidades de rendimiento.

### 24 de abril de 2026: Enriquecimiento de la documentación de copia de seguridad IaaS OpenSource

- **IaaS OpenSource (Copia de seguridad)** : Enriquecimiento de la sección de copia de seguridad con precisiones sobre la arquitectura técnica (copia de seguridad incremental, impacto del Thick provisioning en el almacenamiento), la seguridad (cifrado AES-256, aislamiento de red), el monitoreo y las restricciones de planificación. Traducciones disponibles EN/DE/ES/IT.

### 20 de abril de 2026 : Actualización del dimensionamiento de Managed Database

- **Managed MariaDB & PostgreSQL** : Actualización de las plantillas de dimensionamiento máximo disponibles para los servicios de bases de datos gestionadas.

### 17 de abril de 2026: Instancias VM — documentación ilustrada, tutoriales y traducciones

- **Instancias VM — Enriquecimiento documental** : Rediseño completo e ilustración de la documentación de Instancias VM. La guía de inicio rápido (`quickstart.md`) cubre ahora todo el recorrido del usuario ilustrado: acceso a la sección, lista de VMs, asistente de creación en 9 pasos (familia de instancia, zona de disponibilidad, plantilla de SO, esquema, nombre/respaldo, Cloud Init, discos, red, resumen), y gestión de las 4 pestañas (Información, Discos, Red, Instantáneas).
- **Instancias VM — Tutoriales** : Creación de 3 tutoriales dedicados en un directorio `tutorials/` : (1) **Crear su primera VM** (asistente completo ilustrado + Cloud Init + disco adicional), (2) **Gestionar los discos** (agregado desde la consola + particionamiento Linux), (3) **Crear y gestionar instantáneas** (creación, restauración, eliminación + mejores prácticas y comparación instantánea/respaldo). La navegación lateral se actualiza con 3 entradas individuales en la categoría Tutoriales.

### 17 de abril de 2026: Documentos contractuales, traducciones y armonización terminológica

- **Documentos contractuales — Reestructuración** : La página `contracts.md` ha sido reorganizada con la jerarquía de los documentos contractuales en la parte superior de la página, incluyendo la lista de prioridad de los 6 documentos (CGVU, Convention SecNumCloud, Convention spécifique ¹, PAS ², CPU, DPA) y un recuadro de precisiones contractuales.

### 16 de abril de 2026 : Rediseño de la navegación, documentos contractuales y actualizaciones

- **Navegación — Compute** : Agrupación de VM Instances (preview), IaaS OpenSource e IaaS VMware bajo una única categoría **Compute** en la navegación (PR #277).
- **Navegación — Network** : Agrupación de VPC (preview) y Private Backbone bajo una única categoría **Network** en la navegación.
- **Documentos contractuales** : Reestructuración completa de la documentación contractual — creación de una página hub `/contracts` (términos y condiciones generales, condiciones particulares, acuerdos de servicio SecNumCloud, SLA de instancias VM) y de una página hub `/shared-responsibility` (matrices RACI por servicio : IaaS, S3, PaaS, Kubernetes, LLMaaS, Red). El menú lateral contractual se reemplaza por una columna dedicada **Contractual** en el pie de página. Traducciones disponibles EN/DE/ES/IT.
- **VM Instances** : Actualización del compromiso de nivel de servicio (SLA) del 99,9 % al 99,95 %. 
- **IaaS OpenSource** : Adición de una nota sobre la duración máxima de retención de las copias de seguridad (24 meses como máximo, migración a Glacier prevista para el T1 2027).

### 15 de abril de 2026: Nueva documentación de instancias VM (Cloud Public)

- **VM instances** : Publicación de la documentación inicial del servicio VM instances (en vista previa), nueva oferta de máquinas virtuales compartidas de Cloud Temple. La documentación cubre la descripción general del servicio, los conceptos técnicos (clases de servicio Development/General Purpose/Performance, plantillas predefinidas y personalizadas, almacenamiento, red VPC, copia de seguridad), así como una guía de inicio completa. El servicio está organizado bajo una nueva categoría **Cloud Public** en la navegación.

### 15 de abril de 2026 : Mejora de la documentación de IaaS VMware — métricas de clúster

- **IaaS VMware** : Se añade documentación detallada sobre las métricas mostradas en la vista de un clúster VMware desde la Consola Cloud Temple. Cubre los tres gráficos de memoria del clúster: **Memoria asignada** (cantidad total asignada a las VM), **Memoria consumida** (memoria física realmente utilizada por las VM) y **Asignación en el peor de los casos** (proyección del consumo máximo simultáneo), con la descripción precisa de lo que representa cada indicador para anticipar las necesidades de recursos.

### 15 de abril de 2026 : Documentación Managed MariaDB, Managed PostgreSQL

- **Managed MariaDB** : Publicación de la documentación inicial del servicio Managed MariaDB (en preview) : presentación del servicio, conceptos técnicos (architectures StandAlone et Distributed), guía de inicio. 
- **Managed PostgreSQL** : Publicación de la documentación inicial del servicio Managed PostgreSQL (en preview) : presentación del servicio, conceptos técnicos, guía de inicio.

### 15 de abril de 2026: Nuevo módulo Gestor de costos

- **Consola (Gestor de costos)** : Adición de la documentación completa del nuevo módulo de seguimiento de consumo accesible desde la Consola Cloud Temple. Cubre el panel de control, el consumo global (con proyección de fin de mes), la distribución por producto y por servicio, los detalles de facturación línea por línea y el catálogo de precios.

### 26 de marzo de 2026 : Actualización de la lista de subcontratistas (DPA)

- **Contractual** : Actualización del Anexo Contractual sobre Datos de Carácter Personal (DPA) - revisión de la lista de subcontratistas (retirada de Microsoft Azure y Amazon Web Services, modificación de la actividad para Iron Mountain) y adición de la fecha de autorización.

### 19 de marzo de 2026 : Mejoras en la documentación de IaaS y Terraform

- **IaaS OpenSource** : Adición de una guía completa para crear una máquina virtual. El tutorial cubre los tres métodos de implementación disponibles (modèle, import XVA, Marketplace) con instrucciones paso a paso y recomendaciones de buenas prácticas.
- **IaaS VMware** : Adición de una página que agrupa todos los tutoriales disponibles para facilitar la navegación y el descubrimiento de las guías.
- **Terraform** : Nueva sección que explica cómo recibir automáticamente las notificaciones de las nuevas versiones del Proveedor de Terraform a través de GitHub.

### 19 de marzo de 2026 : Actualización del DPA y cumplimiento de HDS

- **Contractual** : Actualización del Anexo Contractual sobre Datos de Carácter Personal (DPA) a la versión 1.0. Integración de los últimos requisitos de la certificación HDS (Hébergeur de Données de Santé) y actualización de la lista de subcontratistas autorizados. Traducción completa al inglés, alemán, español e italiano.

### 21 de febrero de 2026 : Conceptos avanzados de red

- **Red (Internet)** : Nueva página de **conceptos avanzados** que documenta las comunidades BGP y el control de la Local Preference en el backbone de Internet Cloud Temple (AS33930). Incluye una guía de configuración con ejemplo de Bird.
- **LLMaaS** : Actualización del catálogo de modelos y adición del ciclo de vida de los modelos. Adición de modelos LTS (Long Term Support).
- **IaaS Bare Metal** : Adición de aclaraciones sobre el volumen BFS (Boot from SAN) en la guía de arranque: el Volumen 1 está dedicado a la instalación del SO, no es compartible dentro de la misma AZ, con recomendación de almacenar los datos en un volumen LUN adicional.
- **Almacenamiento de Objetos (OSS)** : Adición de una página **FAQ** que cubre el acceso S3, las listas blancas de IP, los enlaces prefirmados y los escenarios de uso recomendados.

### 10 de febrero de 2026: Actualización de tarifas de LLMaaS

- **LLMaaS**: Actualización global de las tarifas de la API (Input : 1,9€/M, Output : 8€/M, Raisonneur : 8€/M) en toda la documentación técnica y comercial.

### 5 de febrero de 2026: Aclaraciones sobre los acuerdos de nivel de servicio (SLA)

- **Managed Kubernetes**: Actualización completa y finalización de los acuerdos de nivel de servicio (SLA) para la oferta Managed Kubernetes.

### 19 de enero de 2026: Extensión de Managed Kubernetes y VPC

- **Managed Kubernetes**: Adición de soporte para nodos **Bare Metal** y **GPUs** (NVIDIA).
- **Managed Kubernetes**: Nuevo tutorial sobre el uso de GPUs en un clúster de Kubernetes.
- **Managed Kubernetes**: Reemplazo de KubeCost por una guía más reciente sobre **OpenCost**.
- **Network (VPC)**: Documentación completa del servicio Virtual Private Cloud (VPC), que incluye los conceptos de alta disponibilidad (HA), las guías de inicio y los tutoriales.

### 11 de diciembre de 2025 : Novedades de Managed Kubernetes

- **Managed Kubernetes** : Adición de un nuevo tutorial sobre el uso de **Gateway API** para la gestión avanzada del tráfico.
- **Managed Kubernetes** : Actualización de la documentación sobre la gestión de cuotas (Ceph) y optimización de las herramientas de gestión de costos (OpenCost).

### 22 de noviembre de 2025 : Novedades de LLMaaS y mejoras globales

- **LLMaaS (OCR)** : Adición de documentación completa para **DeepSeek-OCR**, nuestro nuevo modelo especializado en el análisis de documentos (PDF, imágenes), capaz de extraer texto estructurado, tablas y fórmulas matemáticas.

### 20 de noviembre de 2025 : Actualización importante de PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Rediseño y actualización completa de la documentación de OpenShift, incluyendo nuevas capturas de pantalla y una traducción integral al inglés, español, alemán e italiano para acompañar nuestra expansión internacional.

### 3 de noviembre de 2025: Mejora de los tutoriales de Kubernetes

- **Managed Kubernetes**: Adición de un nuevo tutorial sobre despliegue continuo con **ArgoCD** y el enfoque GitOps.
- **Managed Kubernetes**: Revisión y mejora de los tutoriales existentes. Las guías sobre despliegue, red, gestión de permisos (Capsule) y copia de seguridad (Kasten) se han enriquecido para abordar mejor las cuestiones de seguridad, gobernanza y coste, en respuesta a las expectativas de los perfiles de CISO y Comprador.

### 28 de octubre de 2025: Nueva documentación Managed Kubernetes y diversas mejoras

- **Managed Kubernetes (PR #193 & améliorations)**: Se ha añadido documentación completa para el nuevo servicio Managed Kubernetes. La sección incluye una presentación del servicio, los conceptos técnicos, una guía de inicio, un primer tutorial y la matriz de responsabilités (RACI). El contenido se ha enriquecido para responder mejor a las expectativas de los diferentes perfiles de usuarios.
- **Almacenamiento de Objetos (PR #190, #189)**: Se han añadido dos nuevos tutoriales para el servicio de Almacenamiento de Objetos: uno sobre la gestión de accesos a los buckets S3 y otro sobre el uso de Restic para las copias de seguridad.
- **Contractual (PR #191)**: Corrección y actualización del documento "Data Processing Agreement" (DPA).

### 18 de octubre de 2025 : Mantenimiento y nueva documentación

- **LLMaaS** : Se ha añadido una nueva pregunta a la FAQ para presentar la página de estado pública ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), que permite seguir en tiempo real la disponibilidad y el rendimiento de cada modelo.
- **Contractual** : Actualización importante del Acuerdo de Tratamiento de Datos (DPA v2) para reflejar los últimos requisitos legales y de cumplimiento.
- **Consola** : Mejora y aclaración de la documentación sobre la gestión de órdenes.
- **Marketplace** : Se ha añadido un tutorial detallado sobre la personalización de imágenes de máquinas virtuales (VM) para crear plantillas reutilizables.
- **LLMaaS** : Se ha añadido una guía para configurar la extensión VSCode CLINE y utilizar los modelos de lenguaje de Cloud Temple directamente desde el editor.
- **Almacenamiento de Objetos (OSS)** : Se han añadido aclaraciones sobre la política de ciclo de vida (Lifecycle) para la eliminación de datos.
- **Almacenamiento de Objetos (OSS)** : Se ha añadido una guía de solución de problemas para los errores de checksum (`XAmzContentSHA256Mismatch`) con AWS CLI y Terraform.
- **LLMaaS** : Actualización de la lista de modelos disponibles y retraducción de más de 50 documentos para garantizar la coherencia.

### 14 de agosto de 2025: Mejoras y correcciones

- **LLMaaS**: Actualización y aclaración de las respuestas de la FAQ para abordar mejor las preguntas técnicas y estratégicas. Adición de la FAQ a la navegación.

### Julio de 2025: Novedades y actualizaciones principales

- **Almacenamiento de Objetos (OSS)** :
  - Rediseño completo de la sección de tutoriales con guías dedicadas para herramientas populares: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer y el SDK Python Boto3.
  - Adición de aclaraciones sobre los conceptos de cuentas de almacenamiento y bloqueo de objetos (Object Lock).
- **IaaS OpenSource** :
  - Adición de documentación detallada sobre la gestión de Alta Disponibilidad (HA) para los pools de recursos y las máquinas virtuales.
- **Consola** :
  - Actualización de la página de alertas de seguridad con las últimas vulnerabilidades.
- **Red** :
  - Adición de nuevas capturas de pantalla para ilustrar la configuración de la conectividad IPv6.

### 29 de junio de 2025: finalización de la documentación LLMaaS

- Validación de la suite de pruebas completa.
- Corrección y validación de los pipelines RAG con FAISS y Qdrant.
- Enriquecimiento de los tutoriales con explicaciones técnicas más detalladas.
- Adición de una sección sobre la seguridad de los prompts y el ciclo de vida de los modelos en los conceptos.
- Mejora de la página de explicación del RAG con diagramas y detalles sobre los modelos de embedding.
- Actualización de la documentación de la API, de la guía de inicio y de la presentación del servicio.
- Adición del pricing para el endpoint Transcripción de Audio.
- Adición del cronograma previsto del ciclo de vida de los modelos.
- Adición de la matriz de responsabilidades para la oferta LLMaaS.