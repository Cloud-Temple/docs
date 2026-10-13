---
title: Seguimiento de Cambios
sidebar_position: 2
---

# Seguimiento de Cambios

### 12 Octubre 2026: Notas de la versión de la Consola hasta la v4.52.0

- **Consola**: Las [notas de la versión del producto](./changelog_produits.md) presentan las novedades y correcciones de las versiones 4.50.0, 4.51.0 y 4.52.0, incluidas las evoluciones de la red VPC, el despliegue cloud-init y la restauración de máquinas virtuales.

### 10 Septiembre 2026: Documentación LLMaaS actualizada

- **Elegir y seguir sus modelos**: Acceso directo al [catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) para consultar los modelos disponibles, los plazos de soporte y las migraciones recomendadas.
- **Tomar el control del servicio**: Guías de inicio y ejemplos de integración actualizados para facilitar los primeros usos y la integración en sus aplicaciones.
- **Comprender los usos y la facturación**: Documentación aclarada sobre los procesos por lotes, la búsqueda documental y las modalidades de facturación del reranking.

### 20 Agosto 2026: Armonización de la etiqueta de madurez de las bases de datos gestionadas

- **Navegación — Bases de datos**: Eliminación de la etiqueta **Beta** en las entradas **MariaDB Gestionada** y **PostgreSQL Gestionada** del menú lateral y en las tarjetas de la página Bases de datos. Los dos servicios mostraban simultáneamente dos etiquetas de madurez contradictorias: *Beta* en la navegación, *Preview* en el título de sus páginas de producto. Solo se conserva la etiqueta **Preview**, como fuente única de verdad sobre el nivel de madurez de estos servicios. Traducciones disponibles EN/DE/ES/IT.

### 17 Agosto 2026: Actualización de las alertas de seguridad

- **Seguridad**: Nuevos [avisos de seguridad](./console/security/security_alarms.md) están disponibles para los entornos VMware, OpenShift, XCP-ng y Dell, para ayudarle a identificar los productos afectados y las acciones recomendadas.

### 14 Agosto 2026: Aclaración de la gestión de accesos

- **Consola — Gestión de accesos**: La [guía de identidades y permisos](./console/iam/concepts.md) distingue las acciones que deben realizarse a nivel de la organización y de cada tenant, para facilitar la asignación de accesos y la gestión de los propietarios.

### 7 Agosto 2026: Guía de la vista de organización

- **Consola — Organización**: La [guía de inicio](./console/console_quickstart.md) presenta la vista de organización y la gestión de tenants. La documentación aclara también el papel de los propietarios y los procedimientos para evolucionar sus accesos.

### 15 Julio 2026: Precisión sobre el cifrado de Object Storage

- **Object Storage (Seguridad)**: La sección sobre el cifrado de datos en reposo (D@RE) aclara ahora que el servicio utiliza un cifrado AES de 256 bits certificado FIPS 140-3, a través de la biblioteca de software RSA BSAFE Crypto-J versión 7.x.

### 30 Abril 2026: Precisión sobre el rendimiento del almacenamiento

- **Almacenamiento (IaaS VMware, OpenSource, Bare Metal)**: Adición de los límites absolutos de IOPS y del ancho de banda máximo para todas las clases de almacenamiento. Esta información permite dimensionar mejor los entornos en función de las necesidades de rendimiento.

### 24 Abril 2026: Enriquecimiento de la documentación de copia de seguridad IaaS OpenSource

- **IaaS OpenSource (Copia de seguridad)**: Enriquecimiento de la sección de copia de seguridad con precisiones sobre la arquitectura técnica (copia incremental, impacto del Thick provisioning en el almacenamiento), la seguridad (cifrado AES-256, aislamiento de red), el monitoreo y las restricciones de planificación. Traducciones disponibles EN/DE/ES/IT.

### 20 Abril 2026: Actualización del dimensionamiento de Managed Database

- **Managed MariaDB & PostgreSQL**: Actualización de las plantillas de dimensionamiento máximo disponibles para los servicios de bases de datos gestionadas.

### 17 Abril 2026: VM Instances — documentación ilustrada, tutoriales y traducciones

- **VM Instances — Enriquecimiento documental**: Reestructuración completa e ilustración de la documentación de VM Instances. La guía de inicio (`quickstart.md`) cubre ahora todo el recorrido del usuario ilustrado: acceso a la sección, lista de VMs, asistente de creación en 9 pasos (familia de instancia, zona de disponibilidad, plantilla OS, plantilla, nombre/copia de seguridad, Cloud Init, discos, red, resumen) y gestión de las 4 pestañas (Información, Discos, Red, Snapshots).
- **VM Instances — Tutoriales**: Creación de 3 tutoriales dedicados en una carpeta `tutorials/`: (1) **Crear su primera VM** (asistente completo ilustrado + Cloud Init + disco adicional), (2) **Gestionar los discos** (adición desde la consola + particionamiento Linux), (3) **Crear y gestionar los snapshots** (creación, restauración, eliminación + buenas prácticas y comparación snapshot/copia de seguridad). La navegación lateral se actualiza con 3 entradas individuales en la categoría Tutoriales.

### 17 Abril 2026: Documentos contractuales, traducciones y armonización terminológica

- **Documentos contractuales — Reestructuración**: La página `contracts.md` se reorganiza con la jerarquía de los documentos contractuales en la parte superior de la página, incluyendo la lista de prioridad de los 6 documentos (CGVU, Convención SecNumCloud, Convención específica ¹, PAS ², CPU, DPA) y un recuadro de precisiones contractuales.

### 16 Abril 2026: Reestructuración de la navegación, documentos contractuales y actualizaciones

- **Navegación — Compute**: Agrupación de VM Instances (preview), IaaS OpenSource e IaaS VMware bajo una única categoría **Compute** en la navegación (PR #277).
- **Navegación — Network**: Agrupación de VPC (preview) y Private Backbone bajo una única categoría **Network** en la navegación.
- **Documentos contractuales**: Reestructuración completa de la documentación contractual — creación de una página hub `/contracts` (condiciones generales, condiciones particulares, convenciones de servicio SecNumCloud, SLA VM instances) y de una página hub `/shared-responsibility` (matrices RACI por servicio: IaaS, S3, PaaS, Kubernetes, LLMaaS, Red). El menú lateral contractual se reemplaza por una columna dedicada **Contractual** en el pie de página. Traducciones disponibles EN/DE/ES/IT.
- **VM Instances**: Actualización del compromiso de nivel de servicio (SLA) del 99,9 % al 99,95 %.
- **IaaS OpenSource**: Adición de una nota sobre la duración máxima de retención de las copias de seguridad (24 meses máximo, migración a Glacier prevista en el T1 2027).

### 15 Abril 2026: Nueva documentación de VM instances (Cloud Public)

- **VM instances**: Publicación de la documentación inicial del servicio VM instances (en preview), nueva oferta de máquinas virtuales compartidas de Cloud Temple. La documentación cubre la visión general del servicio, los conceptos técnicos (clases de servicio Development/General Purpose/Performance, plantillas predefinidas y personalizadas, almacenamiento, red VPC, copia de seguridad), así como una guía de inicio completa. El servicio se organiza bajo una nueva categoría **Cloud Public** en la navegación.

### 15 Abril 2026: Mejora de la documentación IaaS VMware — métricas del clúster

- **IaaS VMware**: Adición de una documentación detallada sobre las métricas mostradas en la vista de un clúster VMware desde la Consola Cloud Temple. Cubre los tres gráficos de memoria del clúster: **Memoria asignada** (cantidad total asignada a las VMs), **Memoria consumida** (memoria física realmente utilizada por las VMs) y **Asignación en el peor de los casos** (proyección del consumo máximo simultáneo), con la descripción precisa de lo que representa cada indicador para anticipar las necesidades de recursos.

### 15 Abril 2026: Documentación Managed MariaDB, Managed PostgreSQL

- **Managed MariaDB**: Publicación de la documentación inicial del servicio Managed MariaDB (en preview): presentación del servicio, conceptos técnicos (arquitecturas StandAlone y Distributed), guía de inicio.
- **Managed PostgreSQL**: Publicación de la documentación inicial del servicio Managed PostgreSQL (en preview): presentación del servicio, conceptos técnicos, guía de inicio.

### 15 Abril 2026: Nuevo módulo Gestor de costes

- **Consola (Gestor de costes)**: Adición de la documentación completa del nuevo módulo de seguimiento del consumo accesible desde la Consola Cloud Temple. Cubre el panel de control, el consumo global (con proyección de fin de mes), la distribución por producto y por servicio, los detalles de facturación línea por línea y el catálogo de precios.

### 26 Marzo 2026: Actualización de la lista de subcontratistas (DPA)

- **Contractual**: Actualización del Anexo Contractual sobre Datos de Carácter Personal (DPA) — revisión de la lista de subcontratistas (retirada de Microsoft Azure y Amazon Web Services, modificación de la actividad para Iron Mountain) y adición de la fecha de autorización.

### 19 Marzo 2026: Mejoras en la documentación IaaS y Terraform

- **IaaS OpenSource**: Adición de una guía completa para crear una máquina virtual. El tutorial cubre los tres métodos de despliegue disponibles (modelo, importación XVA, Marketplace) con instrucciones paso a paso y recomendaciones de buenas prácticas.
- **IaaS VMware**: Adición de una página que agrupa todos los tutoriales disponibles para facilitar la navegación y el descubrimiento de las guías.
- **Terraform**: Nueva sección que explica cómo recibir automáticamente las notificaciones de las nuevas versiones del Provider Terraform a través de GitHub.

### 19 Marzo 2026: Actualización DPA y conformidad HDS

- **Contractual**: Actualización del Anexo Contractual sobre Datos de Carácter Personal (DPA) a la versión 1.0. Integración de los últimos requisitos de la certificación HDS (Alojador de Datos de Salud) y actualización de la lista de subcontratistas autorizados. Traducción completa en inglés, alemán, español e italiano.

### 21 Febrero 2026: Conceptos avanzados de red

- **Red (Internet)**: Nueva página de **conceptos avanzados** que documenta las comunidades BGP y el control de la Local Preference en el backbone Internet Cloud Temple (AS33930). Incluye una guía de configuración con ejemplo Bird.
- **LLMaaS**: Actualización del catálogo de modelos y adición del ciclo de vida de los modelos. Adición de los modelos LTS (Long Term Support).
- **IaaS Bare Metal**: Adición de precisiones sobre el volumen BFS (Boot from SAN) en la guía de inicio: el Volumen 1 está dedicado a la instalación del SO, no compartible dentro de una misma AZ, con recomendación de almacenar los datos en un volumen LUN adicional.
- **Almacenamiento Objeto (OSS)**: Adición de una página **FAQ** que cubre el acceso S3, las listas blancas de IP, los enlaces pre-firmados y los escenarios de uso recomendados.

### 10 Febrero 2026: Actualización de los precios LLMaaS

- **LLMaaS**: Actualización de las condiciones tarifarias de la API. Los precios vigentes están disponibles en el [catálogo tarifario oficial Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

### 5 Febrero 2026: Precisión sobre los compromisos de servicio (SLA)

- **Managed Kubernetes**: Actualización completa y finalización de los compromisos de nivel de servicio (SLA) para la oferta Managed Kubernetes.

### 19 Enero 2026: Extensión Managed Kubernetes y VPC

- **Managed Kubernetes**: Adición del soporte para los nodos **Bare Metal** y las **GPUs** (NVIDIA).
- **Managed Kubernetes**: Nuevo tutorial sobre el uso de GPUs en un clúster Kubernetes.
- **Managed Kubernetes**: Reemplazo de KubeCost por una guía más reciente sobre **OpenCost**.
- **Red (VPC)**: Documentación completa del servicio Virtual Private Cloud (VPC), incluyendo los conceptos de alta disponibilidad (HA), las guías de inicio y los tutoriales.

### 11 Diciembre 2025: Novedades de Managed Kubernetes

- **Managed Kubernetes**: Añadido un nuevo tutorial sobre el uso de **Gateway API** para la gestión avanzada del tráfico.
- **Managed Kubernetes**: Actualización de la documentación sobre la gestión de cuotas (Ceph) y optimización de las herramientas de gestión de costes (OpenCost).

### 22 Noviembre 2025: Novedades de LLMaaS y mejoras globales

- **LLMaaS (OCR)**: Añadida una documentación completa para **DeepSeek-OCR**, nuestro nuevo modelo especializado en el análisis de documentos (PDF, imágenes), capaz de extraer texto estructurado, tablas y fórmulas matemáticas.

### 20 Noviembre 2025: Actualización mayor de PaaS OpenShift

- **PaaS OpenShift (PR #194)**: Rediseño y actualización completa de la documentación de OpenShift, incluyendo nuevas capturas de pantalla y una traducción íntegra al inglés, español, alemán e italiano para acompañar nuestra expansión internacional.

### 3 Noviembre 2025: Mejora de los tutoriales de Kubernetes

- **Managed Kubernetes**: Añadido un nuevo tutorial sobre el despliegue continuo con **ArgoCD** y el enfoque GitOps.
- **Managed Kubernetes**: Revisión y mejora de los tutoriales existentes. Las guías sobre el despliegue, la red, la gestión de permisos (Capsule) y la copia de seguridad (Kasten) se han enriquecido para abordar mejor las cuestiones de seguridad, gobernanza y coste, en respuesta a las expectativas de los perfiles de CISO y Comprador.

### 28 Octubre 2025: Nueva documentación de Managed Kubernetes y mejoras varias

- **Managed Kubernetes (PR #193 y mejoras)**: Añadida una documentación completa para el nuevo servicio Managed Kubernetes. La sección incluye una presentación del servicio, los conceptos técnicos, una guía de inicio, un primer tutorial y la matriz de responsabilidades (RACI). El contenido se ha enriquecido para responder mejor a las expectativas de los diferentes perfiles de usuarios.
- **Almacenamiento de Objetos (PR #190, #189)**: Añadidos dos nuevos tutoriales para el servicio de Almacenamiento de Objetos: uno sobre la gestión de accesos a los buckets S3 y otro sobre el uso de Restic para las copias de seguridad.
- **Contractual (PR #191)**: Corrección y actualización del documento "Acuerdo de Procesamiento de Datos" (DPA).

### 18 Octubre 2025: Mantenimiento y nuevas documentaciones

- **LLMaaS**: Añadida una nueva pregunta a la FAQ para presentar la página de estado público ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), que permite seguir en tiempo real la disponibilidad y el rendimiento de cada modelo.
- **Contractual**: Actualización mayor del Acuerdo de Procesamiento de Datos (DPA v2) para reflejar los últimos requisitos legales y de cumplimiento.
- **Consola**: Mejora y aclaración de la documentación relativa a la gestión de pedidos.
- **Marketplace**: Añadido un tutorial detallado sobre la personalización de las imágenes de las máquinas virtuales (VM) para crear plantillas reutilizables.
- **LLMaaS**: Añadida una guía para configurar la extensión VSCode CLINE con el fin de utilizar los modelos de lenguaje de Cloud Temple directamente desde el editor.
- **Almacenamiento de Objetos (OSS)**: Añadidas precisiones sobre la política de ciclo de vida (Lifecycle) para la eliminación de datos.
- **Almacenamiento de Objetos (OSS)**: Añadida una guía de resolución de problemas para los errores de suma de comprobación (`XAmzContentSHA256Mismatch`) con AWS CLI y Terraform.
- **LLMaaS**: Actualización de la lista de modelos disponibles y retraducción de más de 50 documentos para asegurar la coherencia.

### 14 Agosto 2025: Mejoras y correcciones

- **LLMaaS**: Actualización y aclaración de las respuestas de la FAQ para abordar mejor las preguntas técnicas y estratégicas. Añadida la FAQ a la navegación.

### Julio 2025: Novedades y actualizaciones mayores

- **Almacenamiento de Objetos (OSS)**:
  - Rediseño completo de la sección de tutoriales con guías dedicadas para herramientas populares: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer y el SDK Python Boto3.
  - Añadidas precisiones sobre los conceptos de cuentas de almacenamiento y el bloqueo de objetos (Object Lock).
- **IaaS OpenSource**:
  - Añadida una documentación detallada sobre la gestión de la Alta Disponibilidad (HA) para los grupos de recursos y las máquinas virtuales.
- **Consola**:
  - Actualización de la página de alertas de seguridad con las últimas vulnerabilidades.
- **Red**:
  - Añadidas nuevas capturas de pantalla para ilustrar la configuración de la conectividad IPv6.

### 29 Junio 2025: Finalización de la documentación de LLMaaS

- Validación del conjunto completo de pruebas.
- Corrección y validación de los pipelines RAG con FAISS y Qdrant.
- Enriquecimiento de los tutoriales con explicaciones técnicas más detalladas.
- Añadida una sección sobre la seguridad de los prompts y el ciclo de vida de los modelos en los conceptos.
- Mejora de la página de explicación del RAG con esquemas y detalles sobre los modelos de incrustación (embedding).
- Actualización de la documentación de la API, la guía de inicio y la presentación del servicio.
- Añadido el precio para el endpoint de Transcripción de Audio.
- Añadido el calendario previsto del ciclo de vida de los modelos.
- Añadida la matriz de responsabilidades para la oferta LLMaaS.
