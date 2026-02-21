---
title: Seguimiento de Cambios
sidebar_position: 2
---

# Tracking Changes

### 21 February 2026: Advanced networking concepts and multilingual improvements

- **Network (Internet)**: New **advanced concepts** page documenting BGP communities and Local Preference control on the Cloud Temple Internet backbone (AS33930). Includes a configuration guide with Bird example.
- **LLMaaS**: Update to the model catalog and addition of model lifecycle management. Introduction of LTS (Long Term Support) models.
- **Console (Security)**: Improved quality of security alert translations (English, German, Spanish, Italian).
- **Multilingual**: Translation of the new advanced networking concepts page into 4 languages (en, de, es, it) and overall enhancement of existing translation quality.

### 10 de febrero de 2026: Actualización de tarifas de LLMaaS

- **LLMaaS**: Actualización general de las tarifas de la API (Entrada: 1,9€/M, Salida: 8€/M, Razonador: 8€/M) en toda la documentación técnica y comercial.

### 5 de febrero de 2026: Aclaraciones sobre los compromisos de servicio (SLA)

- **Kubernetes administrado**: Actualización completa y finalización de los compromisos de nivel de servicio (SLA) para la oferta de Kubernetes administrado.

### 21 January 2026: Security Improvements and Translations

- **Console Management**: Updated international translations (English, German, Spanish, Italian) for security alerts in the management console.

### January 19, 2026: Managed Kubernetes and VPC Enhancements

- **Managed Kubernetes**: Added support for **Bare Metal** nodes and **GPUs** (NVIDIA).
- **Managed Kubernetes**: New tutorial on using GPUs within a Kubernetes cluster.
- **Managed Kubernetes**: Replaced KubeCost with a more up-to-date guide on **OpenCost**.
- **Network (VPC)**: Comprehensive documentation for the Virtual Private Cloud (VPC) service, including high availability (HA) concepts, quick start guides, and tutorials.
- **Multilingual**: Full translation of the VPC service and new Kubernetes content into English, German, Spanish, and Italian.

### December 15, 2025: Stabilization and Multilingual Fixes

- **Multilingual (Terraform, LLMaaS, Harbor)**: Major correction of translations in Spanish, Italian, and German. Resolved MDX syntax issues (empty code blocks, unescaped tags) that were preventing site compilation.
- **Multilingual (Images)**: Restored correct image paths in the Italian and German versions for the Bastion and VMware IaaS sections.
- **Build**: Validation of deployment across all 5 supported languages.

### 11 de diciembre de 2025: Nuevas funciones de Kubernetes administrado

- **Kubernetes administrado**: Adición de un nuevo tutorial sobre el uso de **Gateway API** para la gestión avanzada del tráfico.
- **Kubernetes administrado**: Actualización de la documentación sobre la gestión de cuotas (Ceph) y optimización de las herramientas de gestión de costos (OpenCost).

### 22 November 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues in the Italian and German versions of the documentation.
- **Quality**: Fixed code block display in LLMaaS tutorials and restored missing images in the Italian version of the VMware IaaS quick start guide.

### 20 de noviembre de 2025: Actualización mayor del PaaS OpenShift

- **PaaS OpenShift (PR #194)**: Reestructuración y actualización completa de la documentación de OpenShift, incluyendo nuevas capturas de pantalla y una traducción integral al inglés, español, alemán e italiano para acompañar nuestra expansión internacional.

### 3 de noviembre de 2025: Mejoras en los tutoriales de Kubernetes

- **Kubernetes administrado**: Adición de un nuevo tutorial sobre implementación continua con **ArgoCD** y el enfoque GitOps.
- **Kubernetes administrado**: Revisión y mejora de los tutoriales existentes. Los guías sobre implementación, red, gestión de permisos (Capsule) y copias de seguridad (Kasten) han sido enriquecidos para abordar mejor las cuestiones de seguridad, gobernanza y costos, en respuesta a las expectativas de los perfiles RSSI y Comprador.

### 28 de octubre de 2025: Nueva documentación para Kubernetes administrado y mejoras diversas

- **Kubernetes administrado (PR #193 y mejoras)**: Se ha añadido una documentación completa para el nuevo servicio de Kubernetes administrado. La sección incluye una presentación del servicio, conceptos técnicos, una guía de inicio, un primer tutorial y una matriz de responsabilidades (RACI). El contenido se ha enriquecido para responder mejor a las expectativas de los distintos perfiles de usuarios.
- **Almacenamiento objeto (PR #190, #189)**: Se han añadido dos nuevos tutoriales para el servicio de Almacenamiento objeto: uno sobre la gestión de accesos a los buckets S3 y otro sobre el uso de Restic para copias de seguridad.
- **Contrato (PR #191)**: Corrección y actualización del documento "Acuerdo de tratamiento de datos" (DPA).

### 18 de octubre de 2025: Mantenimiento y nuevas documentaciones

- **LLMaaS**: Adición de una nueva pregunta en la FAQ para presentar la página de estado público ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), que permite seguir en tiempo real la disponibilidad y el rendimiento de cada modelo.
- **Contractual**: Actualización importante del Acuerdo de Procesamiento de Datos (DPA v2) para reflejar los últimos requisitos legales y de cumplimiento.
- **Consola**: Mejora y aclaración de la documentación relacionada con la gestión de órdenes.
- **Marketplace**: Adición de un tutorial detallado sobre la personalización de imágenes de máquinas virtuales (VM) para crear plantillas reutilizables.
- **LLMaaS**: Adición de una guía para configurar la extensión VSCode CLINE y utilizar los modelos de lenguaje de Cloud Temple directamente desde el editor.
- **Almacenamiento Objeto (OSS)**: Añadidas precisiones sobre la política de ciclo de vida (Lifecycle) para la eliminación de datos.
- **Almacenamiento Objeto (OSS)**: Incorporación de una guía de solución de problemas para errores de suma de verificación (`XAmzContentSHA256Mismatch`) con AWS CLI y Terraform.
- **LLMaaS**: Actualización de la lista de modelos disponibles y retraducción de más de 50 documentos para garantizar la coherencia.

### 14 de agosto de 2025: Mejoras y correcciones

- **LLMaaS**: Actualización y aclaración de las respuestas de la FAQ para abordar de forma más eficaz las preguntas técnicas y estratégicas. Adición de la FAQ a la navegación.
- **General**: Corrección de varios enlaces de navegación internos a través de la documentación para una experiencia más fluida.

### Julio 2025: Nuevas funciones y actualizaciones principales

- **Almacenamiento objeto (OSS)**:
    - Reestructuración completa de la sección de tutoriales con guías específicas para herramientas populares: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer y el SDK Python Boto3.
    - Adición de detalles sobre los conceptos de cuentas de almacenamiento y el bloqueo de objetos (Object Lock).
- **IaaS de código abierto**:
    - Incorporación de una documentación detallada sobre la gestión de Alta Disponibilidad (HA) para grupos de recursos y máquinas virtuales.
- **Consola**:
    - Actualización de la página de alertas de seguridad con las últimas vulnerabilidades.
- **Red**:
    - Adición de nuevas capturas de pantalla para ilustrar la configuración de conectividad IPv6.

### June 29, 2025: Finalization of LLMaaS documentation

- Full test suite validation.
- Correction and validation of RAG pipelines with FAISS and Qdrant.
- Enhancement of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle within the concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, quick start guide, and service presentation.
- Addition of pricing for the Audio Transcription endpoint.
- Addition of the projected model lifecycle timeline.
- Addition of the responsibility matrix for the LLMaaS offering.