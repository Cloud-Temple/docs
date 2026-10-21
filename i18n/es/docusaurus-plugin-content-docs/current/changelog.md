---
title: Registro de Cambios
sidebar_position: 2
---

# Registro de Cambios

### 21 de octubre de 2026 : Nueva consola Cloud Temple (v5.0.0)

- **Consola** : Las [notas de versión de productos](./changelog_produits.md) presentan las versiones 4.52.1 a 5.0.0, incluida la nueva consola : rediseño completo de la interfaz con tema oscuro, navegación simplificada, nueva página de detalle de máquinas virtuales, páginas Cómputo y Almacenamiento repensadas y explorador de archivos Object Storage. La versión anterior de la consola sigue accesible hasta finales de noviembre de 2026 desde la ventana « Novedades ».

### 12 de octubre de 2026 : Notas de versión de la Consola hasta la v4.52.0

- **Consola** : Las [notas de versión de productos](./changelog_produits.md) presentan las novedades y correcciones de las versiones 4.50.0, 4.51.0 y 4.52.0, en particular las evoluciones de la red VPC, del despliegue cloud-init y de la restauración de máquinas virtuales.

### 10 de septiembre de 2026 : Documentación LLMaaS actualizada

- **Elegir y seguir sus modelos** : Acceso directo al [catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) para consultar los modelos disponibles, las fechas de fin de soporte y las migraciones recomendadas.
- **Ponerse en marcha con el servicio** : Guías de inicio y ejemplos de integración actualizados para facilitar los primeros usos y la integración en sus aplicaciones.
- **Comprender los usos y la facturación** : Documentación aclarada sobre los procesos por lotes, la búsqueda documental y las modalidades de facturación del reranking.

### 20 de agosto de 2026 : Armonización del etiquetado de madurez de las bases de datos gestionadas

- **Navegación — Bases de datos** : Supresión de la insignia **Beta** en las entradas **MariaDB Gestionado** y **PostgreSQL Gestionado** del menú lateral y en las tarjetas de la página Bases de datos. Los dos servicios mostraban simultáneamente dos etiquetas de madurez contradictorias : *Beta* en la navegación, *Preview* en el título de sus páginas de producto. Solo se conserva la insignia **Preview**, como fuente única de verdad sobre el nivel de madurez de estos servicios. Traducciones disponibles EN/DE/ES/IT.

### 17 de agosto de 2026 : Actualización de las alertas de seguridad

- **Seguridad** : Hay nuevos [avisos de seguridad](./console/security/security_alarms.md) disponibles para los entornos VMware, OpenShift, XCP-ng y Dell, para ayudarle a identificar los productos afectados y las acciones recomendadas.

### 14 de agosto de 2026 : Aclaración de la gestión de accesos

- **Consola — Gestión de accesos** : La [guía de identidades y permisos](./console/iam/concepts.md) distingue las acciones a realizar a nivel de la organización y de cada tenant, para facilitar la atribución de accesos y la gestión de los propietarios.

### 7 de agosto de 2026 : Guía de la vista de organización

- **Consola — Organización** : La [guía de inicio](./console/console_quickstart.md) presenta la vista de organización y la gestión de los tenants. La documentación precisa también el rol de los propietarios y los pasos para hacer evolucionar sus accesos.

### 15 de julio de 2026 : Precisión sobre el cifrado Object Storage

- **Object Storage (Seguridad)** : La sección sobre el cifrado de datos en reposo (D@RE) precisa ahora que el servicio utiliza un cifrado AES de 256 bits certificado FIPS 140-3, mediante la biblioteca de software RSA BSAFE Crypto-J en versión 7.x.

### 30 de abril de 2026 : Precisiones sobre el rendimiento de almacenamiento

- **Almacenamiento (IaaS VMware, OpenSource, Bare Metal)** : Adición de los límites absolutos de IOPS y de ancho de banda máximo para todas las clases de almacenamiento. Esta información permite dimensionar mejor los entornos en función de las necesidades de rendimiento.

### 24 de abril de 2026 : Enriquecimiento de la documentación de copia de seguridad IaaS OpenSource

- **IaaS OpenSource (Copia de seguridad)** : Enriquecimiento de la sección de copia de seguridad con precisiones sobre la arquitectura técnica (copia de seguridad incremental, impacto del Thick provisioning en el almacenamiento), la seguridad (cifrado AES-256, aislamiento de red), el monitoreo y las restricciones de planificación. Traducciones disponibles EN/DE/ES/IT.

### 20 de abril de 2026 : Actualización del dimensionamiento Managed Database

- **Managed MariaDB & PostgreSQL** : Actualización de las plantillas de dimensionamiento máximo disponibles para los servicios de bases de datos gestionadas.

### 17 de abril de 2026 : Instancias VM — documentación ilustrada, tutoriales y traducciones

- **Instancias VM — Enriquecimiento documental** : Rediseño completo e ilustración de la documentación de Instancias VM. La guía de inicio (`quickstart.md`) cubre ahora la totalidad del recorrido del usuario ilustrado : acceso a la sección, lista de VMs, asistente de creación en 9 pasos (familia de instancia, zona de disponibilidad, plantilla de SO, plantilla, nombre/copia de seguridad, Cloud Init, discos, red, resumen), y gestión de las 4 pestañas (Información, Discos, Red, Instantáneas).
- **Instancias VM — Tutoriales** : Creación de 3 tutoriales dedicados en un directorio `tutorials/` : (1) **Crear su primera VM** (asistente completo ilustrado + Cloud Init + disco adicional), (2) **Gestionar los discos** (adición desde la consola + particionado Linux), (3) **Capturar y gestionar instantáneas** (creación, restauración, supresión + buenas prácticas y comparación instantánea/copia de seguridad). La navegación lateral se actualiza con 3 entradas individuales en la categoría Tutoriales.

### 17 de abril de 2026 : Documentos contractuales, traducciones y armonización terminológica

- **Documentos contractuales — Reestructuración** : La página `contracts.md` se reorganiza con la jerarquía de los documentos contractuales en la parte superior de la página, incluyendo la lista de prioridad de los 6 documentos (CGVU, Convenio SecNumCloud, Convenio específico ¹, PAS ², CPU, DPA) y un recuadro de precisiones contractuales.

### 16 de abril de 2026 : Rediseño de la navegación, documentos contractuales y actualizaciones

- **Navegación — Cómputo** : Agrupación de Instancias VM (preview), IaaS OpenSource e IaaS VMware bajo una única categoría **Cómputo** en la navegación (PR #277).
- **Navegación — Red** : Agrupación de VPC (preview) y Private Backbone bajo una única categoría **Red** en la navegación.
- **Documentos contractuales** : Reestructuración completa de la documentación contractual — creación de una página hub `/contracts` (condiciones generales, condiciones particulares, convenios de servicio SecNumCloud, SLA instancias VM) y de una página hub `/shared-responsibility` (matrices RACI por servicio : IaaS, S3, PaaS, Kubernetes, LLMaaS, Red). El menú lateral contractual se reemplaza por una columna dedicada **Contractual** en el pie de página. Traducciones disponibles EN/DE/ES/IT.
- **Instancias VM** : Actualización del compromiso de nivel de servicio (SLA) del 99,9 % al 99,95 %.
- **IaaS OpenSource** : Adición de una nota sobre la duración máxima de retención de las copias de seguridad (24 meses máximo, migración a Glacier prevista para el T1 2027).

### 15 de abril de 2026 : Nueva documentación de instancias VM (Cloud Público)

- **Instancias VM** : Puesta en línea de la documentación inicial del servicio de instancias VM (en preview), nueva oferta de máquinas virtuales mutualizadas de Cloud Temple. La documentación cubre la visión general del servicio, los conceptos técnicos (clases de servicio Development/General Purpose/Performance, plantillas predefinidas y personalizadas, almacenamiento, red VPC, copia de seguridad), así como una guía de inicio completa. El servicio se organiza bajo una nueva categoría **Cloud Público** en la navegación.

### 15 de abril de 2026 : Mejora de la documentación IaaS VMware — métricas de clúster

- **IaaS VMware** : Adición de una documentación detallada sobre las métricas mostradas en la vista de un clúster VMware desde la Consola Cloud Temple. Cubre los tres gráficos de memoria del clúster : **Memoria asignada** (cantidad total asignada a las VMs), **Memoria consumida** (memoria física realmente utilizada por las VMs) y **Asignación en el peor de los casos** (proyección de consumo máximo simultáneo), con la descripción precisa de lo que cada indicador representa para anticipar las necesidades de recursos.

### 15 de abril de 2026 : Documentación Managed MariaDB, Managed PostgreSQL

- **Managed MariaDB** : Puesta en línea de la documentación inicial del servicio Managed MariaDB (en preview) : presentación del servicio, conceptos técnicos (arquitecturas StandAlone y Distributed), guía de inicio.
- **Managed PostgreSQL** : Puesta en línea de la documentación inicial del servicio Managed PostgreSQL (en preview) : presentación del servicio, conceptos técnicos, guía de inicio.

### 15 de abril de 2026 : Nuevo módulo Gestor de costes

- **Consola (Gestor de costes)** : Adición de la documentación completa del nuevo módulo de seguimiento de consumo accesible desde la Consola Cloud Temple. Cubre el panel de control, el consumo global (con proyección de fin de mes), la distribución por producto y por servicio, los detalles de facturación línea por línea y el catálogo de precios.

### 26 de marzo de 2026 : Actualización de la lista de subcontratistas (DPA)

- **Contractual** : Actualización del Anexo Contractual sobre los Datos de Carácter Personal (DPA) - revisión de la lista de subcontratistas (retirada de Microsoft Azure y Amazon Web Services, modificación de la actividad para Iron Mountain) y adición de la fecha de autorización.

### 19 de marzo de 2026 : Mejoras de documentación IaaS y Terraform

- **IaaS OpenSource** : Adición de una guía completa para crear una máquina virtual. El tutorial cubre los tres métodos de despliegue disponibles (modelo, importación XVA, Marketplace) con instrucciones paso a paso y recomendaciones de buenas prácticas.
- **IaaS VMware** : Adición de una página que agrupa el conjunto de tutoriales disponibles para facilitar la navegación y el descubrimiento de las guías.
- **Terraform** : Nueva sección que explica cómo recibir automáticamente las notificaciones de las nuevas versiones del Provider Terraform a través de GitHub.

### 19 de marzo de 2026 : Actualización DPA y conformidad HDS

- **Contractual** : Actualización del Anexo Contractual sobre los Datos de Carácter Personal (DPA) a la versión 1.0. Integración de los últimos requisitos de la certificación HDS (Hébergeur de Datos de Salud) y actualización de la lista de subcontratistas autorizados. Traducción completa en inglés, alemán, español e italiano.

### 21 de febrero de 2026 : Conceptos avanzados de red

- **Red (Internet)** : Nueva página de **conceptos avanzados** que documenta las comunidades BGP y el control de la Local Preference en el backbone Internet Cloud Temple (AS33930). Incluye una guía de configuración con ejemplo Bird.
- **LLMaaS** : Actualización del catálogo de modelos y adición del ciclo de vida de los modelos. Adición de los modelos LTS (Long Term Support).
- **IaaS Bare Metal** : Adición de precisiones sobre el volumen BFS (Boot from SAN) en la guía de inicio : el Volumen 1 está dedicado a la instalación del SO, no compartible dentro de una misma AZ, con recomendación de almacenar los datos en un volumen LUN adicional.
- **Almacenamiento de Objetos (OSS)** : Adición de una página **FAQ** que cubre el acceso S3, las listas blancas IP, los enlaces pre-firmados y los escenarios de uso recomendados.

### 10 de febrero de 2026 : Actualización de las tarifas LLMaaS

- **LLMaaS** : Actualización de las condiciones tarifarias de la API. Las tarifas en vigor están disponibles en el [catálogo tarifario oficial Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

### 5 de febrero de 2026 : Precisiones sobre los compromisos de servicio (SLA)

- **Managed Kubernetes** : Actualización completa y finalización de los compromisos de nivel de servicio (SLA) para la oferta Managed Kubernetes.

### 19 de enero de 2026 : Extensión Managed Kubernetes y VPC

- **Managed Kubernetes** : Adición del soporte para los nodos **Bare Metal** y los **GPUs** (NVIDIA).
- **Managed Kubernetes** : Nuevo tutorial sobre el uso de GPUs en un clúster Kubernetes.
- **Managed Kubernetes** : Reemplazo de KubeCost por una guía más reciente sobre **OpenCost**.
- **Red (VPC)** : Documentación completa del servicio Virtual Private Cloud (VPC), incluyendo los conceptos de alta disponibilidad (HA), las guías de inicio y los tutoriales.

### 11 de diciembre de 2025 : Novedades Managed Kubernetes

- **Managed Kubernetes** : Adición de un nuevo tutorial sobre el uso de **Gateway API** para la gestión avanzada del tráfico.
- **Managed Kubernetes** : Actualización de la documentación sobre la gestión de cuotas (Ceph) y optimización de las herramientas de gestión de costes (OpenCost).

### 22 de noviembre de 2025 : Novedades LLMaaS y mejoras globales

- **LLMaaS (OCR)** : Adición de una documentación completa para **DeepSeek-OCR**, nuestro nuevo modelo especializado en el análisis de documentos (PDF, imágenes), capaz de extraer texto estructurado, tablas y fórmulas matemáticas.

### 20 de noviembre de 2025 : Actualización mayor PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Rediseño y actualización completa de la documentación OpenShift, incluyendo nuevas capturas de pantalla y una traducción integral en inglés, español, alemán e italiano para acompañar nuestra expansión internacional.

### 3 de noviembre de 2025 : Mejora de los tutoriales Kubernetes

- **Managed Kubernetes** : Adición de un nuevo tutorial sobre el despliegue continuo con **ArgoCD** y el enfoque GitOps.
- **Managed Kubernetes** : Revisión y mejora de los tutoriales existentes. Las guías sobre el despliegue, la red, la gestión de permisos (Capsule) y la copia de seguridad (Kasten) han sido enriquecidas para abordar mejor las cuestiones de seguridad, gobernanza y coste, en respuesta a las expectativas de los perfiles RSSI y Comprador.

### 28 de octubre de 2025 : Nueva documentación Managed Kubernetes y mejoras diversas

- **Managed Kubernetes (PR #193 & mejoras)**: Adición de una documentación completa para el nuevo servicio Managed Kubernetes. La sección incluye una presentación del servicio, los conceptos técnicos, una guía de inicio, un primer tutorial, y la matriz de responsabilidades (RACI). El contenido ha sido enriquecido para responder mejor a las expectativas de los diferentes perfiles de usuarios.
- **Almacenamiento de Objetos (PR #190, #189)**: Adición de dos nuevos tutoriales para el servicio de Almacenamiento de Objetos : uno sobre la gestión de accesos a los buckets S3 y otro sobre el uso de Restic para las copias de seguridad.
- **Contractual (PR #191)**: Corrección y actualización del documento "Data Processing Agreement" (DPA).

### 18 de octubre de 2025 : Mantenimiento y nuevas documentaciones

- **LLMaaS** : Adición de una nueva pregunta a la FAQ para presentar la página de estado pública ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), permitiendo seguir en tiempo real la disponibilidad y las prestaciones de cada modelo.
- **Contractual** : Actualización mayor del Data Processing Agreement (DPA v2) para reflejar los últimos requisitos legales y de conformidad.
- **Consola** : Mejora y aclaración de la documentación concerniente a la gestión de los pedidos.
- **Marketplace** : Adición de un tutorial detallado sobre la personalización de las imágenes de máquinas virtuales (VM) para crear plantillas reutilizables.
- **LLMaaS** : Adición de una guía para configurar la extensión VSCode CLINE para utilizar los modelos de lenguaje de Cloud Temple directamente desde el editor.
- **Almacenamiento de Objetos (OSS)** : Adición de precisiones sobre la política de ciclo de vida (Lifecycle) para la supresión de los datos.
- **Almacenamiento de Objetos (OSS)** : Adición de una guía de solución de problemas para los errores de checksum (`XAmzContentSHA256Mismatch`) con AWS CLI y Terraform.
- **LLMaaS** : Actualización de la lista de modelos disponibles y retraducción de más de 50 documentos para asegurar la coherencia.

### 14 de agosto de 2025 : Mejoras y correcciones

- **LLMaaS** : Actualización y aclaración de las respuestas de la FAQ para abordar mejor las cuestiones técnicas y estratégicas. Adición de la FAQ a la navegación.

### Julio 2025: Novedades y actualizaciones importantes

- **Almacenamiento de Objetos (OSS)** :
  - Rediseño completo de la sección de tutoriales con guías dedicadas para herramientas populares : AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer y el SDK Python Boto3.
  - Añadición de precisiones sobre los conceptos de cuentas de almacenamiento y el bloqueo de objetos (Object Lock).
- **IaaS OpenSource** :
  - Añadición de una documentación detallada sobre la gestión de la Alta Disponibilidad (HA) para los pools de recursos y las máquinas virtuales.
- **Consola** :
  - Actualización de la página de alertas de seguridad con las últimas vulnerabilidades.
- **Red** :
  - Añadición de nuevas capturas de pantalla para ilustrar la configuración de la conectividad IPv6.

### 29 de junio de 2025: finalización de la documentación LLMaaS

- Validación de la suite de pruebas completa.
- Corrección y validación de los pipelines RAG with FAISS y Qdrant.
- Enriquecimiento de los tutoriales con explicaciones técnicas más detalladas.
- Añadición de una sección sobre la seguridad de los prompts y el ciclo de vida de los modelos en los conceptos.
- Mejora de la página de explicación del RAG con diagramas y detalles sobre los modelos de embedding.
- Actualización de la documentación de la API, de la guía de inicio y de la presentación del servicio.
- Añadición del pricing para el endpoint Transcription Audio.
- Añadición de la planificación previsional del ciclo de vida de los modelos.
- Añadición de la matriz de responsabilidad para la oferta LLMaaS.
