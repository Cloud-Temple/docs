---
title: Seguimiento de Cambios
sidebar_position: 2
---

# Tracking Changes

### 28 de octubre de 2025: Nueva documentación de Kubernetes administrado y mejoras diversas

- **Kubernetes administrado (PR #193 y mejoras)**: Se ha añadido una documentación completa para el nuevo servicio de Kubernetes administrado. La sección incluye una presentación del servicio, los conceptos técnicos, una guía de inicio, un primer tutorial y la matriz de responsabilidades (RACI). El contenido se ha enriquecido para responder mejor a las expectativas de los distintos perfiles de usuarios.
- **Almacenamiento objeto (PR #190, #189)**: Se han añadido dos nuevos tutoriales para el servicio de Almacenamiento objeto: uno sobre la gestión de accesos a los buckets S3 y otro sobre el uso de Restic para las copias de seguridad.
- **Contrato (PR #191)**: Corrección y actualización del documento "Acuerdo de tratamiento de datos" (DPA).

### 18 de octubre de 2025: Mantenimiento y nuevas documentaciones

- **LLMaaS**: Adición de una nueva pregunta en la FAQ para presentar la página de estado público ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), que permite seguir en tiempo real la disponibilidad y el rendimiento de cada modelo.
- **Contractual**: Actualización importante del Acuerdo de Procesamiento de Datos (DPA v2) para reflejar los últimos requisitos legales y de cumplimiento.
- **Consola**: Mejora y aclaración de la documentación relacionada con la gestión de órdenes.
- **Marketplace**: Adición de un tutorial detallado sobre la personalización de imágenes de máquinas virtuales (VM) para crear plantillas reutilizables.
- **LLMaaS**: Adición de una guía para configurar la extensión VSCode CLINE y utilizar los modelos de lenguaje de Cloud Temple directamente desde el editor.
- **Almacenamiento Objeto (OSS)**: Adición de precisiones sobre la política de ciclo de vida (Lifecycle) para la eliminación de datos.
- **Almacenamiento Objeto (OSS)**: Adición de una guía de solución de problemas para errores de suma de verificación (`XAmzContentSHA256Mismatch`) con AWS CLI y Terraform.
- **LLMaaS**: Actualización de la lista de modelos disponibles y retraducción de más de 50 documentos para garantizar la coherencia.

### 14 de agosto de 2025: Mejoras y correcciones

- **LLMaaS**: Actualización y aclaración de las respuestas de la FAQ para abordar de forma más efectiva las preguntas técnicas y estratégicas. Adición de la FAQ a la navegación.
- **General**: Corrección de varios enlaces de navegación internos a través de la documentación para una experiencia más fluida.

### Julio 2025: Nuevas funciones y actualizaciones principales

- **Almacenamiento objeto (OSS)**:
    - Revisión completa de la sección de tutoriales con guías específicas para herramientas populares: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer y el SDK Python Boto3.
    - Añadidas aclaraciones sobre los conceptos de cuentas de almacenamiento y el bloqueo de objetos (Object Lock).
- **IaaS de código abierto**:
    - Incorporación de una documentación detallada sobre la gestión de Alta Disponibilidad (HA) para grupos de recursos y máquinas virtuales.
- **Consola**:
    - Actualización de la página de alertas de seguridad con las últimas vulnerabilidades.
- **Red**:
    - Adición de nuevas capturas de pantalla para ilustrar la configuración de conectividad IPv6.

### 29 June 2025: Finalization of LLMaaS documentation

- Full test suite validation.
- Correction and validation of RAG pipelines with FAISS and Qdrant.
- Enhancement of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle within concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of API documentation, quick start guide, and service presentation.
- Addition of pricing for the Audio Transcription endpoint.
- Addition of the forecasted model lifecycle timeline.
- Addition of the responsibility matrix for the LLMaaS offering.