# FAQ sobre la oferta de servicio LLMaaS Cloud Temple

## Oferta y Capacidades

### **¿Cuál es la propuesta de valor de su servicio LLMaaS?**
Nuestro servicio le ofrece un acceso **soberano y seguro** a un amplio catálogo de modelos de IA de última generación, a través de una API compatible con OpenAI. Nos encargamos de toda la complejidad de la infraestructura certificada **SecNumCloud 3.2**, permitiéndole centrarse en la creación de valor para sus aplicaciones, mientras controla sus costes gracias a un modelo económico predecible y acelera sus desarrollos mediante estándares abiertos.

### **¿Qué tipo de modelos ofrecen y cómo evoluciona el catálogo?**
Ofrecemos un catálogo extenso de **58 modelos open-source**, que incluyen las familias **Llama (Meta), Qwen, Mistral, Gemma (Google), NVIDIA Nemotron, Cogito y Granite (IBM)**. Nuestros modelos cubren 8 categorías:
*   **Chat y Razonamiento** — diálogo, análisis, agentes con function calling.
*   **Programación y Agentes** — generación de código, refactorización, agentes autónomos.
*   **Visión y Multimodal** — análisis de imágenes, OCR, vídeo, contextos de hasta 1M tokens.
*   **Embedding** — vectorización para RAG semántico (BGE-M3, Granite, Qwen3-Embedding).
*   **Reranking** — reordenamiento de resultados RAG (API compatible con Cohere `/v1/rerank`).
*   **Seguridad** — filtrado de contenidos, guardrails (Granite3-Guardian).
*   **Traducción** — 55 idiomas (TranslateGemma).
*   **Audio e Imagen** — transcripción en tiempo real (Voxtral), generación de imágenes (z-image).

Este catálogo se **revisa cada trimestre** para integrar los modelos más eficientes, con una política de ciclo de vida transparente (aviso previo de 3 meses antes de cualquier retirada) para garantizar la estabilidad de sus aplicaciones.

### **¿Cuáles son las principales capacidades funcionales de su API?**
Nuestra API, 100% compatible con el estándar OpenAI, le permite construir fácilmente funcionalidades avanzadas como:
*   **Chatbots/asistentes** conversacionales con streaming y function calling.
*   Sistemas completos de **Búsqueda Aumentada por Generación (RAG)**: embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + generación aumentada.
*   Aplicaciones de **análisis de imágenes y documentos visuales** (OCR, gráficos, PDF) sin preprocesamiento.
*   **Transcripción de audio** por lotes o en tiempo real a través de WebSocket.
*   **Procesamiento por lotes (Batch API)** asíncrono para cargas de trabajo voluminosas, con una tarifa reducida en un 50%.
*   **Generación de imágenes** a través de una API compatible con OpenAI.

## Seguridad y Soberanía

### **¿Cómo garantizan la soberanía y la confidencialidad de nuestros datos?**
La soberanía es el eje central de nuestra oferta. Se basa en varios pilares:
1.  **Alojamiento en Francia** : Nuestra infraestructura se encuentra exclusivamente en Francia, operada por Cloud Temple, una sociedad de derecho francés. Esto nos exime de las leyes extraterritoriales como el **CLOUD Act estadounidense**.
2.  **Certificación SecNumCloud 3.2** : La máxima certificación de seguridad de la ANSSI garantiza este posicionamiento.
3.  **No retención de datos** : No almacenamos **ni sus prompts, ni las respuestas**. Los datos se procesan de forma volátil en la memoria durante la inferencia.
4.  **Cifrado de extremo a extremo** : Todas las comunicaciones con la API se cifran mediante **TLS 1.3**.

### **¿Cómo gestionan los accesos, los derechos (RBAC) y la autenticación (SSO, MFA) ?**
Nuestro servicio se integra con su política de seguridad bajo un modelo de responsabilidad compartida:
*   **Para sus usuarios finales** : La gestión de identidades, derechos (RBAC) y autenticación fuerte (SSO, MFA) es responsabilidad de **su aplicación**.
*   **Para sus administradores** : Los accesos a la **Console Cloud Temple** para la gestión del servicio (gestión de claves, supervisión) pueden conectarse a su SSO empresarial (vía OpenID Connect) para aprovechar sus políticas de seguridad, incluido el MFA.
*   **Para sus aplicaciones** : Puede crear diferentes claves de API con cuotas de consumo distintas para segmentar los derechos a nivel de aplicación.

### **¿Cómo se asegura la plataforma?**
Aplicamos una defensa en profundidad :
*   **Autenticación fuerte** mediante clave de API para cada solicitud.
*   **Cifrado TLS 1.3** de todos los flujos.
*   **Protección de red** mediante cortafuegos de nueva generación y sistemas de detección y prevención de intrusiones (IDS/IPS).
*   **"Guardrails" de aplicación** para protegerse contra las amenazas específicas de los LLMs, como la inyección de prompts y los intentos de explotación de los modelos.
*   **Pruebas de intrusión periódicas** realizadas por auditores cualificados (PASSI) en el marco de nuestra certificación SecNumCloud 3.2.

## Integración y Uso

### **¿Cómo se integra su API?**
Nuestro servicio es "API-first". Al ser **compatible con la API de OpenAI**, puede utilizar todos los SDK (Python, Node.js, etc.) y frameworks estándar del mercado como **LangChain** o **LlamaIndex** para una integración rápida. Proporcionamos una documentación técnica completa (OpenAPI) y ejemplos de código.

### **¿Se puede personalizar la experiencia de usuario?**
Sí, totalmente. Al ser nuestro servicio una API "headless", usted tiene un control total sobre la interfaz y la experiencia de sus usuarios finales, incluida la integración de su línea gráfica y la visualización de mensajes de cumplimiento, que son responsabilidad suya.

### **¿Cómo gestionan los riesgos relacionados con la propiedad intelectual (PI)?**
Usted tiene el control total sobre los modelos que invoca su aplicación. Para los casos de uso sensibles a la PI, destacamos los modelos **Granite de IBM**, que cuentan con una **indemnización contractual sin límite** frente a reclamaciones de PI, una garantía única en el mercado.

## Modelo de Negocio y Soporte

### **¿Cuál es su modelo de negocio?**
Nuestro modelo se basa en el consumo real para reflejar el costo exacto de cálculo. La tarificación por tipo de uso:

| Uso | Tarifa |
|-------|-------|
| **Tokens de entrada (chat)** | 1.8 € / millón |
| **Tokens de salida (chat)** | 8.0 € / millón |
| **Tokens de razonamiento** | 8.0 € / millón |
| **Reranking** | 4.0 € / millón de tokens rerankados |
| **Batch (entrada)** | 0.9 € / millón (−50%) |
| **Batch (salida)** | 4.0 € / millón (−50%) |
| **Audio ASR** | 0.01 € / minuto de transcripción |

Para garantizar la previsibilidad y la gestión presupuestaria, ofrecemos **Niveles de servicio** con presupuestos tope y **contratos a medida**. Puede seguir su consumo en tiempo real desde la Consola Cloud Temple para una transparencia total. El número de usuarios es siempre ilimitado, independientemente del plan elegido.

### **¿Qué nivel de soporte y SLA ofrecen?**
Nuestra oferta estándar incluye soporte técnico en francés e inglés, accesible a través de nuestro portal de clientes, con un compromiso de primera respuesta en día hábil. La plataforma cuenta con un compromiso de disponibilidad del **99%**. Para las necesidades más críticas, nuestros **Servicios Profesionales** opcionales le brindan acceso a SLAs reforzados, que incluyen soporte prioritario con un tiempo de respuesta de hasta 4 horas para incidentes críticos, y un acompañamiento estratégico personalizado (talleres de innovación, gobernanza ITIL).

### **¿Cómo puedo monitorear el estado de salud de la plataforma LLMaaS?**
Creemos en una transparencia total sobre la disponibilidad de nuestros servicios. Puede consultar en tiempo real el estado operativo de cada modelo de IA en nuestra página de estado pública: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Esta página proporciona información detallada sobre:
*   El estado general de la plataforma.
*   La disponibilidad de cada modelo individualmente.
*   Las métricas de rendimiento como el tiempo de respuesta (TTFB) y el throughput (tokens/s).
*   El historial de incidentes para un seguimiento completo.