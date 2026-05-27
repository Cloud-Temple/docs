---
title: Control de Cambios
sidebar_position: 2
---

# Seguimiento de Cambios

### 26 de mayo de 2026: Mejora del flujo de trabajo de traducción

- **Traducción (herramientas)** : Adición de las opciones `--token`, `--url` y `--model` al script de Python `scripts/translate_py/translate.py`. El token de API ahora puede proporcionarse directamente desde la línea de comandos, sin necesidad de recrear el archivo `.env`. Las opciones de CLI tienen prioridad sobre las variables de entorno.
- **Traducción (configuración)** : Actualización del modelo de traducción predeterminado a `qwen3.6:27b`, manteniendo el endpoint predeterminado de Cloud Temple LLMaaS `https://api.ai.cloud-temple.com/v1/chat/completions`.
- **Traducción (dry-run)** : El flujo de trabajo de simulación sigue siendo utilizable sin token de API, para verificar los archivos a traducir antes de cualquier ejecución real.

### 4 de mayo de 2026: Parches de seguridad — imagen Docker (CVE Alpine)

- **Seguridad (Docker)** : Adición de `apk upgrade --no-cache` en la etapa final `nginx:stable-alpine` de los Dockerfiles de producción (`Dockerfile` y `Dockerfile.prebuilt`). Esta actualización corrige todas las CVE Critical y High detectadas por Harbor/Trivy en la imagen `3.24.3`, relacionadas con los paquetes Alpine fijados: `libcrypto3`, `libssl3`, `libxml2`, `libxslt`, `libexpat`, `libpng`, `zlib`, `c-ares`, `musl`, `xz-libs`, `busybox`, `curl`. La próxima compilación generará una imagen con todos estos paquetes en su última versión corregida.

### 30 de abril de 2026: Detalles sobre el rendimiento del almacenamiento

- **Almacenamiento (IaaS VMware, OpenSource, Bare Metal)** : Adición de límites absolutos de IOPS y ancho de banda máximo para todas las clases de almacenamiento. Esta información permite dimensionar mejor los entornos según las necesidades de rendimiento.

### 24 de abril de 2026: Enriquecimiento de la documentación de copia de seguridad IaaS OpenSource

- **IaaS OpenSource (Copia de seguridad)** : Enriquecimiento de la sección de copia de seguridad con precisiones sobre la arquitectura técnica (copia de seguridad incremental, impacto del Thick provisioning en el almacenamiento), la seguridad (cifrado AES-256, aislamiento de red), el monitoreo y las restricciones de planificación. Traducciones disponibles EN/DE/ES/IT.

### 20 de abril de 2026: Actualización del dimensionamiento de Managed Database

- **Managed MariaDB & PostgreSQL**: Actualización de las plantillas de dimensionamiento máximo disponibles para los servicios de bases de datos gestionadas.

### 17 de abril de 2026: VM Instances — documentación ilustrada, tutoriales y traducciones

- **VM Instances — Enriquecimiento de la documentación** : Reestructuración completa e ilustración de la documentación de VM Instances. La guía de inicio rápido (`quickstart.md`) cubre ahora todo el recorrido del usuario ilustrado: acceso a la sección, lista de VMs, asistente de creación en 9 pasos (familia de instancia, zona de disponibilidad, plantilla de SO, esquema, nombre/copia de seguridad, Cloud Init, discos, red, resumen) y gestión de las 4 pestañas (Información, Discos, Red, Instantáneas).
- **VM Instances — Tutoriales** : Creación de 3 tutoriales dedicados en un directorio `tutorials/` : (1) **Crear su primera VM** (asistente completo ilustrado + Cloud Init + disco adicional), (2) **Gestionar los discos** (agregado desde la consola + particionamiento en Linux), (3) **Crear y gestionar instantáneas** (creación, restauración, eliminación + mejores prácticas y comparación entre instantánea y copia de seguridad). La navegación lateral se ha actualizado con 3 entradas individuales en la categoría Tutoriales.

### 17 de abril de 2026 : Documentos contractuales, traducciones y armonización terminológica

- **Documentos contractuales — Reestructuración** : La página `contracts.md` se ha reorganizado con la jerarquía de los documentos contractuales en la parte superior de la página, incluyendo la lista de prioridad de los 6 documentos (CGVU, Convention SecNumCloud, Convention spécifique ¹, PAS ², CPU, DPA) y un recuadro de aclaraciones contractuales.

### 16 de abril de 2026 : Rediseño de la navegación, documentos contractuales y actualizaciones

- **Navegación — Compute** : Agrupación de VM Instances (preview), IaaS OpenSource e IaaS VMware bajo una única categoría **Compute** en la navegación (PR #277).
- **Navegación — Network** : Agrupación de VPC (preview) y Private Backbone bajo una única categoría **Network** en la navegación.
- **Documentos contractuales** : Reestructuración completa de la documentación contractual — creación de una página hub `/contracts` (condiciones generales, condiciones particulares, acuerdos de servicio SecNumCloud, SLA de instancias VM) y de una página hub `/shared-responsibility` (matrices RACI por servicio : IaaS, S3, PaaS, Kubernetes, LLMaaS, Red). El menú lateral contractual es reemplazado por una columna dedicada **Contractual** en el footer. Traducciones disponibles EN/DE/ES/IT.
- **VM Instances** : Actualización del acuerdo de nivel de servicio (SLA) del 99,9 % al 99,95 %.
- **IaaS OpenSource** : Adición de una nota sobre el período máximo de retención de las copias de seguridad (24 meses como máximo, migración a Glacier prevista para el T1 2027).

### 15 de abril de 2026: Nueva documentación de instancias VM (Cloud Public)

- **Instancias VM** : Publicación de la documentación inicial del servicio de instancias VM (en vista previa), nueva oferta de máquinas virtuales compartidas de Cloud Temple. La documentación cubre la visión general del servicio, los conceptos técnicos (clases de servicio Development/General Purpose/Performance, plantillas predefinidas y personalizadas, almacenamiento, red VPC, copia de seguridad), así como una guía de inicio completa. El servicio está organizado bajo una nueva categoría **Cloud Public** en la navegación.

### 15 de abril de 2026 : Mejora de la documentación de IaaS VMware — métricas de clúster

- **IaaS VMware** : Adición de documentación detallada sobre las métricas mostradas en la vista de un clúster VMware desde la Consola Cloud Temple. Cubre los tres gráficos de memoria del clúster : **Memoria asignada** (cantidad total asignada a las VMs), **Memoria consumida** (memoria física realmente utilizada por las VMs) y **Asignación en el peor de los casos** (proyección de consumo máximo simultáneo), con la descripción precisa de lo que representa cada indicador para anticipar las necesidades de recursos.

### 15 de abril de 2026 : Documentación de Managed MariaDB, Managed PostgreSQL y correcciones multilingües

- **Managed MariaDB** : Publicación de la documentación inicial del servicio Managed MariaDB (en preview) : presentación del servicio, conceptos técnicos (architectures StandAlone et Distributed), guía de inicio. 
- **Managed PostgreSQL** : Publicación de la documentación inicial del servicio Managed PostgreSQL (en preview) : presentación del servicio, conceptos técnicos, guía de inicio.
- **Correcciones multilingües (images)** : Corrección de las referencias de imágenes en las traducciones de las secciones Managed Kubernetes y Managed MariaDB para todos los idiomas (EN, DE, ES, IT) — conversión de rutas relativas `./images/` a rutas absolutas `@site/docs/...` para garantizar una visualización correcta en todos los idiomas.
- **Corrección de enlaces rotos** : Resolución de varios enlaces rotos en la documentación : referencias a las licencias LLMaaS, enlace a la consola en el tutorial de rclone (OSS), enlace IAM en la documentación de red (EN), enlaces relativos en la sección de Terraform (EN).

### 15 de abril de 2026: Nuevo módulo Gestor de costos

- **Consola (Gestor de costos)** : Se ha añadido la documentación completa del nuevo módulo de seguimiento del consumo accesible desde la Consola Cloud Temple. Cubre el panel de control, el consumo global (con proyección de fin de mes), el desglose por producto y por servicio, los detalles de facturación línea por línea y el catálogo de precios.

### 26 de marzo de 2026 : Actualización de la lista de subprocesadores (DPA)

- **Contractual** : Actualización del Anexo Contractual sobre Datos de Carácter Personal (DPA) - revisión de la lista de subprocesadores (retiro de Microsoft Azure y Amazon Web Services, modificación de la actividad para Iron Mountain) y adición de la fecha de autorización.

### 19 de marzo de 2026 : Mejoras en la documentación de IaaS y Terraform

- **IaaS OpenSource** : Adición de una guía completa para crear una máquina virtual. El tutorial cubre los tres métodos de despliegue disponibles (modèle, import XVA, Marketplace) con instrucciones paso a paso y recomendaciones de buenas prácticas.
- **IaaS VMware** : Adición de una página que agrupa todos los tutoriales disponibles para facilitar la navegación y el descubrimiento de las guías.
- **Terraform** : Nueva sección que explica cómo recibir automáticamente las notificaciones de las nuevas versiones del Proveedor de Terraform a través de GitHub.

### 19 de marzo de 2026: Actualización del DPA y cumplimiento HDS

- **Contractual** : Actualización del Anexo Contractual sobre Datos de Carácter Personal (DPA) a la versión 1.0. Integración de los últimos requisitos de la certificación HDS (Hospedador de Datos de Salud) y actualización de la lista de subcontratistas autorizados. Traducción completa al inglés, alemán, español e italiano.

### 21 de febrero de 2026: Mejora del posicionamiento SEO

- **SEO** : Corrección de la URL de producción (`https://docs.cloud-temple.com`) y de la ruta base (`/`) en la configuración de Docusaurus, garantizando URLs canónicas correctas para la indexación de Google.
- **Sitemap** : Activación de la generación automática del sitemap (`/sitemap.xml`) para mejorar el rastreo y la indexación por parte de los motores de búsqueda.
- **Robots.txt** : Adición de un archivo `robots.txt` que autoriza el rastreo completo del sitio y apunta al sitemap.

### 21 de febrero de 2026 : Conceptos avanzados de red y mejoras multilingües

- **Red (Internet)** : Nueva página de **conceptos avanzados** que documenta las comunidades BGP y el control de la Local Preference en el backbone de Internet Cloud Temple (AS33930). Incluye una guía de configuración con ejemplo de Bird.
- **LLMaaS** : Actualización del catálogo de modelos y adición del ciclo de vida de los modelos. Adición de modelos LTS (Long Term Support).
- **Consola (Seguridad)** : Mejora de la calidad de las traducciones de las alertas de seguridad (anglais, allemand, espagnol, italien).
- **Multilingüe** : Traducción de la nueva página de conceptos avanzados de red a los 4 idiomas (en, de, es, it) y mejora general de la calidad de las traducciones existentes.
- **IaaS Bare Metal** : Adición de precisiones sobre el volumen BFS (Boot from SAN) en la guía de arranque : el Volumen 1 está dedicado a la instalación del SO, no es compartible dentro de la misma AZ, con recomendación de almacenar los datos en un volumen LUN adicional.
- **Almacenamiento de Objetos (OSS)** : Adición de una página **FAQ** que cubre el acceso S3, las listas blancas de IP, los enlaces prefirmados y los escenarios de uso recomendados.

### 10 de febrero de 2026: Actualización de tarifas de LLMaaS

- **LLMaaS**: Actualización global de las tarifas de la API (Input : 1,9€/M, Output : 8€/M, Raisonneur : 8€/M) en toda la documentación técnica y comercial.

### 5 de febrero de 2026: Aclaraciones sobre los acuerdos de nivel de servicio (SLA)

- **Managed Kubernetes**: Actualización completa y finalización de los acuerdos de nivel de servicio (SLA) para la oferta Managed Kubernetes.

### 21 de enero de 2026 : Mejoras y traducciones de seguridad

- **Console Management** : Actualización de las traducciones internacionales (inglés, alemán, español, italiano) para las alertas de seguridad en la consola de gestión.

### 19 de enero de 2026: Extensión de Managed Kubernetes y VPC

- **Managed Kubernetes**: Adición del soporte para nodos **Bare Metal** y **GPUs** (NVIDIA).
- **Managed Kubernetes**: Nuevo tutorial sobre el uso de GPUs en un clúster de Kubernetes.
- **Managed Kubernetes**: Reemplazo de KubeCost por una guía más reciente sobre **OpenCost**.
- **Network (VPC)**: Documentación completa del servicio Virtual Private Cloud (VPC), que incluye conceptos de alta disponibilidad (HA), guías de inicio y tutoriales.
- **Multilingüe**: Traducción completa del servicio VPC y de los nuevos contenidos de Kubernetes al inglés, alemán, español e italiano.

### 15 de diciembre de 2025 : Estabilización y correcciones multilingües

- **Multilingüe (Terraform, LLMaaS, Harbor)** : Corrección importante de las traducciones al español, italiano y alemán. Resolución de problemas de sintaxis MDX (bloques de código vacíos, etiquetas no escapadas) que impedían la compilación del sitio.
- **Multilingüe (Imágenes)** : Restauración de las rutas de imágenes correctas en las versiones italiana y alemana para las secciones Bastion e IaaS VMware.
- **Build** : Validación del despliegue para el conjunto de los 5 idiomas soportados.

### 11 de diciembre de 2025: Novedades de Managed Kubernetes

- **Managed Kubernetes** : Añadido de un nuevo tutorial sobre el uso de **Gateway API** para la gestión avanzada del tráfico.
- **Managed Kubernetes** : Actualización de la documentación sobre la gestión de cuotas (Ceph) y optimización de las herramientas de gestión de costos (OpenCost).

### 22 de noviembre de 2025: Novedades de LLMaaS y mejoras generales

- **LLMaaS (OCR)**: Adición de documentación completa para **DeepSeek-OCR**, nuestro nuevo modelo especializado en el análisis de documentos (PDF, imágenes), capaz de extraer texto estructurado, tablas y fórmulas matemáticas.
- **Multilingüe**: Resolución de problemas de accesibilidad en las versiones italiana y alemana de la documentación.
- **Calidad**: Corrección de la visualización de los bloques de código en los tutoriales de LLMaaS y restauración de las imágenes faltantes en la guía de inicio rápido de IaaS VMware (versión italiana).

### 20 de noviembre de 2025 : Actualización importante de PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Rediseño y actualización completa de la documentación de OpenShift, incluyendo nuevas capturas de pantalla y una traducción integral al inglés, español, alemán e italiano para acompañar nuestra expansión internacional.

### 3 de noviembre de 2025: Mejora de los tutoriales de Kubernetes

- **Managed Kubernetes** : Adición de un nuevo tutorial sobre despliegue continuo con **ArgoCD** y el enfoque GitOps.
- **Managed Kubernetes** : Revisión y mejora de los tutoriales existentes. Las guías sobre despliegue, red, gestión de permisos (Capsule) y copia de seguridad (Kasten) se han enriquecido para abordar mejor las cuestiones de seguridad, gobernanza y coste, en respuesta a las expectativas de los perfiles de CISO y Comprador.

### 28 de octubre de 2025 : Nueva documentación de Managed Kubernetes y diversas mejoras

- **Managed Kubernetes (PR #193 y mejoras)**: Adición de una documentación completa para el nuevo servicio Managed Kubernetes. La sección incluye una presentación del servicio, los conceptos técnicos, una guía de inicio, un primer tutorial y la matriz de responsabilidades (RACI). El contenido se ha enriquecido para responder mejor a las expectativas de los diferentes perfiles de usuarios.
- **Almacenamiento de Objetos (PR #190, #189)**: Adición de dos nuevos tutoriales para el servicio de Almacenamiento de Objetos: uno sobre la gestión de accesos a los buckets S3 y otro sobre el uso de Restic para las copias de seguridad.
- **Contractual (PR #191)**: Corrección y actualización del documento "Data Processing Agreement" (DPA).

### 18 de octubre de 2025: Mantenimiento y nueva documentación

- **LLMaaS** : Adición de una nueva pregunta a la FAQ para presentar la página de estado pública ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), permitiendo seguir en tiempo real la disponibilidad y el rendimiento de cada modelo.
- **Contratos** : Actualización importante del Acuerdo de Tratamiento de Datos (DPA v2) para reflejar los últimos requisitos legales y de cumplimiento.
- **Consola** : Mejora y aclaración de la documentación sobre la gestión de comandos.
- **Marketplace** : Adición de un tutorial detallado sobre la personalización de imágenes de máquinas virtuales (VM) para crear plantillas reutilizables.
- **LLMaaS** : Adición de una guía para configurar la extensión VSCode CLINE para utilizar los modelos de lenguaje de Cloud Temple directamente desde el editor.
- **Almacenamiento de Objetos (OSS)** : Adición de aclaraciones sobre la política de ciclo de vida (Lifecycle) para la eliminación de datos.
- **Almacenamiento de Objetos (OSS)** : Adición de una guía de solución de problemas para errores de checksum (`XAmzContentSHA256Mismatch`) con AWS CLI y Terraform.
- **LLMaaS** : Actualización de la lista de modelos disponibles y retraducción de más de 50 documentos para garantizar la coherencia.

### 14 de agosto de 2025: Mejoras y correcciones

- **LLMaaS** : Actualización y aclaración de las respuestas de la FAQ para abordar mejor las preguntas técnicas y estratégicas. Adición de la FAQ a la navegación.
- **General** : Corrección de varios enlaces de navegación interna a lo largo de la documentación para una experiencia más fluida.

### Julio 2025: Novedades y actualizaciones principales

- **Almacenamiento de Objetos (OSS)**:
  - Rediseño completo de la sección de tutoriales con guías dedicadas para herramientas populares: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer y el SDK Python Boto3.
  - Adición de aclaraciones sobre los conceptos de cuentas de almacenamiento y bloqueo de objetos (Object Lock).
- **IaaS OpenSource**:
  - Adición de documentación detallada sobre la gestión de Alta Disponibilidad (HA) para los pools de recursos y las máquinas virtuales.
- **Consola**:
  - Actualización de la página de alertas de seguridad con las últimas vulnerabilidades.
- **Red**:
  - Adición de nuevas capturas de pantalla para ilustrar la configuración de la conectividad IPv6.

### 29 de junio de 2025: finalización de la documentación de LLMaaS

- Validación de la suite de pruebas completa.
- Corrección y validación de los pipelines RAG con FAISS y Qdrant.
- Enriquecimiento de los tutoriales con explicaciones técnicas más detalladas.
- Adición de una sección sobre la seguridad de los prompts y el ciclo de vida de los modelos en los conceptos.
- Mejora de la página de explicación del RAG con diagramas y detalles sobre los modelos de embedding.
- Actualización de la documentación de la API, de la guía de inicio y de la presentación del servicio.
- Adición de la información de precios para el endpoint Transcription Audio.
- Adición de la planificación prevista del ciclo de vida de los modelos.
- Adición de la matriz de responsabilidades para la oferta LLMaaS.