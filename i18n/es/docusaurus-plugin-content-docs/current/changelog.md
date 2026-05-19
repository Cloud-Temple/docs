---
title: Seguimiento de Cambios
sidebar_position: 2
---

# Registro de Cambios

### 4 de mayo de 2026 : Parches de seguridad — imagen Docker (CVE Alpine)

- **Seguridad (Docker)** : Adición de `apk upgrade --no-cache` en la etapa final `nginx:stable-alpine` de los Dockerfiles de producción (`Dockerfile` y `Dockerfile.prebuilt`). Esta actualización corrige todas las CVE Críticas y Altas detectadas por Harbor/Trivy en la imagen `3.24.3`, relacionadas con los paquetes Alpine congelados: `libcrypto3`, `libssl3`, `libxml2`, `libxslt`, `libexpat`, `libpng`, `zlib`, `c-ares`, `musl`, `xz-libs`, `busybox`, `curl`. El próximo build generará una imagen con todos estos paquetes en su última versión corregida.

### 30 de abril de 2026: Aclaraciones sobre el rendimiento del almacenamiento

- **Almacenamiento (IaaS VMware, OpenSource, Bare Metal)** : Se han añadido límites absolutos de IOPS y ancho de banda máximo para todas las clases de almacenamiento. Esta información permite dimensionar mejor los entornos en función de los requisitos de rendimiento.

### 24 de abril de 2026 : Enriquecimiento de la documentación de copia de seguridad IaaS OpenSource

- **IaaS OpenSource (Sauvegarde)** : Enriquecimiento de la sección de copia de seguridad con detalles sobre la arquitectura técnica (sauvegarde incrémentale, impact du Thick provisioning sur le stockage), la seguridad (chiffrement AES-256, isolation réseau), el monitoreo y las restricciones de planificación. Traducciones disponibles EN/DE/ES/IT.

### 20 de abril de 2026 : Actualización del dimensionamiento de Managed Database

- **MariaDB y PostgreSQL gestionados** : Actualización de los perfiles de dimensionamiento máximo disponibles para los servicios de bases de datos gestionadas.

### 17 de abril de 2026 : VM Instances — documentación ilustrada, tutoriales y traducciones

- **VM Instances — Enriquecimiento documental** : Rediseño completo e ilustración de la documentación de VM Instances. La guía de inicio rápido (`quickstart.md`) cubre ahora todo el recorrido ilustrado del usuario: acceso a la sección, lista de VMs, asistente de creación en 9 pasos (familia de instancia, zona de disponibilidad, plantilla SO, diseño, nombre/copia de seguridad, Cloud Init, discos, red, resumen), y gestión de las 4 pestañas (Información, Discos, Red, Instantáneas).
- **VM Instances — Tutoriales** : Creación de 3 tutoriales dedicados en un directorio `tutorials/` : (1) **Crear su primera VM** (asistente completo ilustrado + Cloud Init + disco adicional), (2) **Gestionar los discos** (adición desde la consola + particionado de Linux), (3) **Crear y gestionar instantáneas** (creación, restauración, eliminación + buenas prácticas y comparación instantánea/copia de seguridad). La navegación lateral se actualiza con 3 entradas individuales en la categoría Tutoriales.

### 17 de abril de 2026: Documentos contractuales, traducciones y armonización terminológica

- **Documentos contractuales — Reestructuración** : La página `contracts.md` se reorganiza con la jerarquía de los documentos contractuales en la parte superior de la página, incluyendo la lista de prioridad de los 6 documentos (CGVU, Convención SecNumCloud, Convención específica ¹, PAS ², CPU, DPA) y un recuadro de precisiones contractuales.

### 16 de abril de 2026: Rediseño de la navegación, documentos contractuales y actualizaciones

- **Navegación — Compute** : Agrupación de VM Instances (preview), IaaS OpenSource e IaaS VMware bajo una única categoría **Compute** en la navegación (PR #277).
- **Navegación — Network** : Agrupación de VPC (preview) y Private Backbone bajo una única categoría **Network** en la navegación.
- **Documentos contractuels** : Reestructuración completa de la documentación contractual — creación de una página central `/contracts` (condiciones generales, condiciones particulares, convenios de servicio SecNumCloud, SLA de VM instances) y de una página central `/shared-responsibility` (matrices RACI por servicio: IaaS, S3, PaaS, Kubernetes, LLMaaS, Red). El menú lateral contractual se reemplaza por una columna dedicada **Contractuel** en el pie de página. Traducciones disponibles EN/DE/ES/IT.
- **VM Instances** : Actualización del compromiso de nivel de servicio (SLA) del 99,9 % al 99,95 %.
- **IaaS OpenSource** : Adición de una nota sobre la duración máxima de retención de las copias de seguridad (máximo 24 meses, migración a Glacier prevista para el T1 2027).

### 15 de abril de 2026 : Nueva documentación de instancias VM (Cloud Public)

- **instancias VM** : Publicación de la documentación inicial del servicio de instancias VM (en vista previa), nueva oferta de máquinas virtuales compartidas de Cloud Temple. La documentación cubre la visión general del servicio, los conceptos técnicos (clases de servicio Development/General Purpose/Performance, plantillas predefinidas y personalizadas, almacenamiento, red VPC, copia de seguridad), así como una guía de inicio completa. El servicio está organizado bajo una nueva categoría **Cloud Public** en la navegación.

### 15 de abril de 2026 : Mejora de la documentación de IaaS VMware — métricas de clúster

- **IaaS VMware** : Se ha añadido documentación detallada sobre las métricas mostradas en la vista de un clúster VMware desde la Consola Cloud Temple. Cubre los tres gráficos de memoria del clúster : **Memoria asignada** (cantidad total asignada a las VMs), **Memoria consumida** (memoria física realmente utilizada por las VMs) y **Asignación en el peor de los casos** (proyección del consumo máximo simultáneo), con la descripción precisa de lo que representa cada indicador para anticipar las necesidades de recursos.

### 15 de abril de 2026: Documentación de Managed MariaDB, Managed PostgreSQL y correcciones multilingües

- **Managed MariaDB** : Publicación de la documentación inicial del servicio Managed MariaDB (en vista previa) : presentación del servicio, conceptos técnicos (arquitecturas StandAlone y Distributed), guía de inicio. 
- **Managed PostgreSQL** : Publicación de la documentación inicial del servicio Managed PostgreSQL (en vista previa) : presentación del servicio, conceptos técnicos, guía de inicio.
- **Correcciones multilingües (imágenes)** : Corrección de las referencias de imágenes en las traducciones de las secciones Managed Kubernetes y Managed MariaDB para todos los idiomas (EN, DE, ES, IT) — conversión de las rutas relativas `./images/` a rutas absolutas `@site/docs/...` para garantizar un renderizado correcto en todos los idiomas.
- **Corrección de enlaces rotos** : Resolución de varios enlaces rotos en la documentación : referencias a las licencias LLMaaS, enlace a la consola en el tutorial de rclone (OSS), enlace IAM en la documentación de red (EN), enlaces relativos en la sección de Terraform (EN).

### 15 de abril de 2026 : Nuevo módulo Gestor de costos

- **Consola (Gestionnaire des coûts)** : Se añade la documentación completa del nuevo módulo de seguimiento de consumo accesible desde la Consola Cloud Temple. Cubre el panel de control, el consumo global (avec projection de fin de mois), la distribución por producto y por servicio, los detalles de facturación línea por línea y el catálogo de precios.

### 26 de marzo de 2026 : Actualización de la lista de subprocesadores (DPA)

- **Contractual** : Actualización del Anexo Contractual sobre Datos Personales (DPA) - revisión de la lista de subprocesadores (retiro de Microsoft Azure y Amazon Web Services, modificación de la actividad para Iron Mountain) y adición de la fecha de autorización.

### 19 de marzo de 2026 : Mejoras en la documentación de IaaS y Terraform

- **IaaS OpenSource** : Se ha añadido una guía completa para crear una máquina virtual. El tutorial cubre los tres métodos de despliegue disponibles (plantilla, importación XVA, Marketplace) con instrucciones paso a paso y recomendaciones de buenas prácticas.
- **IaaS VMware** : Se ha añadido una página que agrupa todos los tutoriales disponibles para facilitar la navegación y el descubrimiento de las guías.
- **Terraform** : Nueva sección que explica cómo recibir automáticamente las notificaciones de las nuevas versiones del proveedor de Terraform a través de GitHub.

### 19 de marzo de 2026: Actualización del DPA y cumplimiento HDS

- **Contractual**: Actualización del Anexo Contractual sobre Datos Personales (DPA) a la versión 1.0. Integración de los últimos requisitos de la certificación HDS (Proveedor de Servicios de Alojamiento de Datos de Salud) y actualización de la lista de subcontratistas autorizados. Traducción completa en inglés, alemán, español e italiano.

### 21 de febrero de 2026: Mejora del SEO

- **SEO**: Corrección de la URL de producción (`https://docs.cloud-temple.com`) y de la ruta base (`/`) en la configuración de Docusaurus, garantizando URLs canónicas correctas para la indexación en Google.
- **Sitemap**: Activación de la generación automática del sitemap (`/sitemap.xml`) para mejorar el rastreo y la indexación por parte de los motores de búsqueda.
- **Robots.txt**: Adición de un archivo `robots.txt` que permite el rastreo completo del sitio y apunta al sitemap.

### 21 de febrero de 2026: Conceptos avanzados de red y mejoras multilingües

- **Red (Internet)** : Nueva página de **conceptos avanzados** que documenta las comunidades BGP y el control de la Local Preference en el backbone de Internet Cloud Temple (AS33930). Incluye una guía de configuración con un ejemplo de Bird.
- **LLMaaS** : Actualización del catálogo de modelos y adición del ciclo de vida de los modelos. Inclusión de modelos LTS (Long Term Support).
- **Consola (Seguridad)** : Mejora de la calidad de las traducciones de las alertas de seguridad (inglés, alemán, español, italiano).
- **Multilingüe** : Traducción de la nueva página de conceptos avanzados de red a los 4 idiomas (en, de, es, it) y mejora general de la calidad de las traducciones existentes.
- **IaaS Bare Metal** : Adición de aclaraciones sobre el volumen BFS (Boot from SAN) en la guía de inicio: el Volumen 1 está dedicado a la instalación del SO, no compartible dentro de una misma AZ, con recomendación de almacenar los datos en un volumen LUN adicional.
- **Almacenamiento de Objetos (OSS)** : Adición de una página **FAQ** que cubre el acceso S3, las listas blancas IP, los enlaces prefirmados y los escenarios de uso recomendados.

### 10 de febrero de 2026 : Actualización de tarifas de LLMaaS

- **LLMaaS** : Actualización global de las tarifas de la API (Input : 1,9€/M, Output : 8€/M, Raisonneur : 8€/M) en toda la documentación técnica y comercial.

### 5 de febrero de 2026: Aclaraciones sobre los acuerdos de nivel de servicio (SLA)

- **Managed Kubernetes**: Actualización completa y finalización de los acuerdos de nivel de servicio (SLA) para la oferta Managed Kubernetes.

### 21 de enero de 2026: Mejoras y traducciones de seguridad

- **Gestión de la consola** : Actualización de las traducciones internacionales (inglés, alemán, español, italiano) para las alertas de seguridad en la consola de gestión.

### 19 de enero de 2026 : Extensión Managed Kubernetes y VPC

- **Managed Kubernetes** : Se añade soporte para los nodos **Bare Metal** y los **GPUs** (NVIDIA).
- **Managed Kubernetes** : Nuevo tutorial sobre el uso de GPUs en un clúster de Kubernetes.
- **Managed Kubernetes** : Se reemplaza KubeCost por una guía más reciente sobre **OpenCost**.
- **Network (VPC)** : Documentación completa del servicio Virtual Private Cloud (VPC), que incluye los conceptos de alta disponibilidad (HA), las guías de inicio y los tutoriales.
- **Multilingüe** : Traducción completa del servicio VPC y de los nuevos contenidos de Kubernetes al inglés, alemán, español e italiano.

### 15 de diciembre de 2025 : Estabilización y correcciones multilingües

- **Multilingüe (Terraform, LLMaaS, Harbor)** : Corrección importante de las traducciones al español, italiano y alemán. Resolución de problemas de sintaxis MDX (blocs de code vides, balises non échappées) que impedían la compilación del sitio.
- **Multilingüe (Images)** : Restauración de las rutas de imágenes correctas en las versiones italiana y alemana para las secciones Bastión e IaaS VMware.
- **Build** : Validación del despliegue para las 5 idiomas admitidas.

### 11 de diciembre de 2025 : Novedades de Managed Kubernetes

- **Managed Kubernetes** : Añadido un nuevo tutorial sobre el uso de **Gateway API** para la gestión avanzada del tráfico.
- **Managed Kubernetes** : Actualización de la documentación sobre la gestión de cuotas (Ceph) y optimización de las herramientas de gestión de costos (OpenCost).

### 22 Noviembre 2025 : Novedades LLMaaS y mejoras globales

- **LLMaaS (OCR)** : Adición de documentación completa para **DeepSeek-OCR**, nuestro nuevo modelo especializado en el análisis de documentos (PDF, imágenes), capaz de extraer texto estructurado, tablas y fórmulas matemáticas.
- **Multilingüe** : Resolución de problemas de accesibilidad en las versiones italiana y alemana de la documentación.
- **Calidad** : Corrección de la visualización de bloques de código en los tutoriales LLMaaS y restauración de imágenes faltantes en la guía de inicio IaaS VMware (versión italiana).

### 20 Noviembre 2025 : Actualización principal PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Rediseño y actualización completa de la documentación de OpenShift, que incluye nuevas capturas de pantalla y una traducción completa al inglés, español, alemán e italiano para acompañar nuestra expansión internacional.

### 3 de noviembre de 2025: Mejora de los tutoriales de Kubernetes

- **Managed Kubernetes** : Se ha añadido un nuevo tutorial sobre el despliegue continuo con **ArgoCD** y el enfoque GitOps.
- **Managed Kubernetes** : Revisión y mejora de los tutoriales existentes. Las guías sobre despliegue, red, gestión de permisos (Capsule) y copia de seguridad (Kasten) se han enriquecido para abordar mejor las cuestiones de seguridad, gobernanza y coste, en respuesta a las expectativas de los perfiles CISO y Comprador.

### 28 de octubre de 2025 : Nueva documentación de Managed Kubernetes y mejoras varias

- **Managed Kubernetes (PR #193 & améliorations)**: Se ha añadido una documentación completa para el nuevo servicio Managed Kubernetes. La sección incluye una presentación del servicio, los conceptos técnicos, una guía de inicio, un primer tutorial y la matriz de responsabilidades (RACI). El contenido se ha enriquecido para responder mejor a las expectativas de los diferentes perfiles de usuarios.
- **Almacenamiento de Objetos (PR #190, #189)**: Se han añadido dos nuevos tutoriales para el servicio de Almacenamiento de Objetos: uno sobre la gestión de accesos a los buckets S3 y otro sobre el uso de Restic para las copias de seguridad.
- **Contractual (PR #191)**: Corrección y actualización del documento "Data Processing Agreement" (DPA).

### 18 de octubre de 2025 : Mantenimiento y nuevas documentaciones

- **LLMaaS** : Se ha añadido una nueva pregunta a la FAQ para presentar la página de estado pública ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), que permite seguir en tiempo real la disponibilidad y el rendimiento de cada modelo.
- **Contractuel** : Actualización importante del Acuerdo de Tratamiento de Datos (DPA v2) para reflejar los últimos requisitos legales y de cumplimiento.
- **Console** : Mejora y aclaración de la documentación sobre la gestión de pedidos.
- **Marketplace** : Se ha añadido un tutorial detallado sobre la personalización de imágenes de máquinas virtuales (VM) para crear plantillas reutilizables.
- **LLMaaS** : Se ha añadido una guía para configurar la extensión CLINE de VSCode con el fin de utilizar los modelos de lenguaje de Cloud Temple directamente desde el editor.
- **Almacenamiento de Objetos (OSS)** : Se han añadido aclaraciones sobre la política de ciclo de vida (Lifecycle) para la eliminación de datos.
- **Almacenamiento de Objetos (OSS)** : Se ha añadido una guía de resolución de problemas para los errores de checksum (`XAmzContentSHA256Mismatch`) con AWS CLI y Terraform.
- **LLMaaS** : Actualización de la lista de modelos disponibles y retraducción de más de 50 documentos para garantizar la coherencia.

### 14 de agosto de 2025 : Mejoras y correcciones

- **LLMaaS** : Actualización y aclaración de las respuestas de la FAQ para abordar mejor las preguntas técnicas y estratégicas. Se ha añadido la FAQ a la navegación.
- **General** : Corrección de varios enlaces de navegación internos en toda la documentación para una experiencia más fluida.

### Julio de 2025 : Novedades y actualizaciones principales

- **Almacenamiento de Objetos (OSS)** :
  - Rediseño completo de la sección de tutoriales con guías dedicadas para herramientas populares: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer y el SDK de Python Boto3.
  - Añadidas aclaraciones sobre los conceptos de cuentas de almacenamiento y el bloqueo de objetos (Object Lock).
- **IaaS OpenSource** :
  - Añadida documentación detallada sobre la gestión de la Alta Disponibilidad (HA) para los grupos de recursos y las máquinas virtuales.
- **Consola** :
  - Actualización de la página de alertas de seguridad con las últimas vulnerabilidades.
- **Red** :
  - Añadidas nuevas capturas de pantalla para ilustrar la configuración de la conectividad IPv6.

### 29 de junio de 2025 : finalización de la documentación de LLMaaS

- Validación del conjunto completo de pruebas.
- Corrección y validación de los pipelines de RAG con FAISS y Qdrant.
- Enriquecimiento de los tutoriales con explicaciones técnicas más detalladas.
- Adición de una sección sobre la seguridad de los prompts y el ciclo de vida de los modelos en los conceptos.
- Mejora de la página de explicación del RAG con diagramas y detalles sobre los modelos de embedding.
- Actualización de la documentación de la API, la guía de inicio y la presentación del servicio.
- Adición de los precios para el endpoint de Transcripción de Audio.
- Adición de la planificación prevista del ciclo de vida de los modelos.
- Adición de la matriz de responsabilidades para la oferta LLMaaS.