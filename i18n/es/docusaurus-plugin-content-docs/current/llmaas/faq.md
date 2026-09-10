# FAQ sobre la oferta de servicio LLMaaS Cloud Temple

## Oferta y Capacidades

### **¿Cuál es la propuesta de valor de su servicio LLMaaS?**
Nuestro servicio le ofrece un acceso **soberano y seguro** a un amplio catálogo de modelos de IA de vanguardia, a través de una API compatible con OpenAI. Gestionamos toda la complejidad de la infraestructura calificada **SecNumCloud 3.2**, permitiéndole concentrarse en la creación de valor para sus aplicaciones, al tiempo que controla sus costos gracias a un modelo económico predecible y acelera sus desarrollos mediante estándares abiertos.

### **¿Qué tipo de modelos ofrece y cómo evoluciona el catálogo?**
El catálogo cubre chat y razonamiento, programación y agentes, visión, embeddings, reranking, seguridad, traducción y usos de audio/imagen. Los modelos y sus licencias varían según el uso.

Consulte el **[catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle)** para la lista actual, los estados LTS, las fechas de caducidad y las migraciones recomendadas. Las novedades se publican en el **[changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog)**.

### **¿Puede un nombre de modelo antiguo seguir funcionando después de una evolución del catálogo?**
Sí, algunos identificadores se redirigen a un sucesor. Esto preserva la llamada a la API, pero puede modificar el comportamiento del modelo. Verifique el destino en el ciclo de vida, pruébelo en sus casos de uso y luego actualice su configuración. Consulte la [guía de migración](./concepts.md#migración-a-otro-modelo).

### **¿Cuáles son las principales capacidades funcionales de su API ?**
Nuestra API compatible con OpenAI le permite construir funcionalidades como las que se detallan a continuación. Los endpoints y parámetros compatibles se especifican en la [referencia de la API](./api.md#compatibilidad-con-openai).
*   **Chatbots/asistentes** conversacionales con streaming y function calling.
*   Sistemas completos de **Búsqueda Aumentada por Generación (RAG)** : embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + generación aumentada.
*   Aplicaciones de **análisis de imágenes y documentos visuales** (OCR, gráficos). Para los PDF, convierta previamente las páginas a imágenes; consulte los [prerrequisitos de la guía de OCR](./ocr.md#prerrequisitos-formato-de-la-imagen-y-dependencias).
*   La **transcripción de audio** batch o en tiempo real mediante WebSocket.
*   El **procesamiento por lotes (Batch API)** asíncrono para workloads voluminosos, con una reducción del 50% en la tarificación.
*   La **generación de imágenes** mediante API compatible con OpenAI.

## Seguridad y Soberanía

### **¿Cómo garantizan la soberanía y la confidencialidad de nuestros datos ?**
La soberanía está en el centro de nuestra oferta. Se basa en varios pilares :
1.  **Alojamiento y operación en Francia** : La infraestructura LLMaaS está alojada en Francia y operada en Francia por Cloud Temple, sociedad de derecho francés. Para las garantías de soberanía asociadas a la cualificación, consulte [notre approche SecNumCloud](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **Cualificación SecNumCloud 3.2** : El más alto visado de seguridad de la ANSSI garantiza esta posición.
3.  **No conservación de datos** : No almacenamos **ni sus prompts, ni las respuestas**. Los datos se procesan de forma volátil en memoria durante el tiempo de inferencia.
4.  **Cifrado de extremo a extremo** : Todas las comunicaciones con la API están cifradas con **TLS 1.3**.

### **¿Cómo gestionan los accesos, los permisos (RBAC) y la autenticación (SSO, MFA)?**
Nuestro servicio se integra en su política de seguridad según un modelo de responsabilidad compartida:
*   **Para sus usuarios finales** : La gestión de identidades, permisos (RBAC) y autenticación robusta (SSO, MFA) es responsabilidad de **su aplicación**.
*   **Para sus administradores** : Los accesos a la **Consola Cloud Temple** para la gestión del servicio (gestión de claves, supervisión) pueden conectarse a su SSO corporativo (vía OpenID Connect) para aplicar sus políticas de seguridad, incluido el MFA.
*   **Para sus aplicaciones** : Puede crear diferentes claves de API con cuotas de consumo distintas para segmentar los permisos a nivel de aplicación.

### **¿Cómo se asegura la plataforma?**
Aplicamos una defensa en profundidad:
*   **Autenticación fuerte** mediante clave de API para cada solicitud.
*   **Cifrado TLS 1.3** de todos los flujos.
*   **Protección de red** mediante firewalls de nueva generación y sistemas de detección y prevención de intrusiones (IDS/IPS).
*   **Pruebas de intrusión periódicas** realizadas por auditores cualificados (PASSI) en el marco de nuestra calificación SecNumCloud 3.2.

### **¿Se filtran los prompts automáticamente?**
No. La plataforma no aplica filtrado automático del contenido de los prompts contra inyecciones o intentos de elusión de instrucciones. Los controles de contenido corresponden a su aplicación. Puede integrar explícitamente un modelo de seguridad para evaluar las entradas o las respuestas, según sus criterios de negocio. Consulte la [seguridad de los prompts](./concepts.md#seguridad-de-los-prompts).

## Integración y Uso

### **¿Cómo se integra su API?**
Nuestro servicio es "API-first". Su **API compatible con OpenAI** permite utilizar los SDK de OpenAI y frameworks como **LangChain** o **LlamaIndex** para las llamadas compatibles. Configure la URL base y su clave LLMaaS, y luego verifique los parámetros y las capacidades del modelo seleccionado. Consulte las [différences documentées](./api.md#compatibilidad-con-openai) y los [exemples d’intégration](./tutorials.md).

### **¿Se puede personalizar la experiencia del usuario?**
Sí, totalmente. Dado que nuestro servicio es una API "headless", tiene un control total sobre la interfaz y la experiencia de sus usuarios finales, incluida la integración de su identidad visual y la visualización de mensajes de cumplimiento, que son de su responsabilidad.

### **¿Cómo gestiona los riesgos relacionados con la propiedad intelectual (PI)?**
Tiene el control total sobre los modelos que su aplicación invoca. Para los casos de uso sensibles a la PI, destacamos los modelos **Granite de IBM**, que cuentan con una **indemnización contractual sin límite** frente a reclamaciones de PI, una garantía única en el mercado.

## Modelo Económico y Soporte

### **¿Cuál es su modelo de negocio?**
Nuestro modelo se basa en el consumo real para reflejar el costo de cómputo exacto. La tarifa por tipo de uso:

| Uso | Tarifa |
|-------|-------|
| **Tokens de entrada (chat)** | 1,8 € / millón |
| **Tokens de salida (chat)** | 8,0 € / millón |
| **Tokens de razonamiento** | 8,0 € / millón |
| **Reranking** | 4,00 € / millón de documentos procesados |
| **Batch (entrada)** | 0,9 € / millón (−50%) |
| **Batch (salida)** | 4,0 € / millón (−50%) |
| **Audio ASR** | 0,01 € / minuto de transcripción |

Para garantizar la previsibilidad y el control presupuestario, ofrecemos **Niveles de servicio** con presupuestos con tope y **contratos personalizados**. Puede seguir su consumo en tiempo real desde la Consola Cloud Temple para una transparencia total. El número de usuarios es siempre ilimitado, independientemente del plan elegido.

### **¿Qué nivel de soporte y SLA ofrecen?**
Nuestra oferta estándar incluye soporte técnico en francés e inglés, accesible a través de nuestro portal de clientes, con un compromiso de primera respuesta en un día hábil. La plataforma cuenta con un compromiso de disponibilidad del **99%**. Para las necesidades más críticas, nuestros **Servicios Profesionales** opcionales le brindan acceso a SLAs reforzados, que incluyen soporte prioritario con un tiempo de respuesta de hasta 4 horas para incidentes críticos, y un acompañamiento estratégico a medida (talleres de innovación, gobernanza ITIL).

### **¿Cómo puedo seguir el estado de salud de la plataforma LLMaaS?**
Creemos en una transparencia total sobre la disponibilidad de nuestros servicios. Puede consultar en tiempo real el estado operativo de cada modelo de IA en nuestra página de estado pública: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Esta página proporciona información detallada sobre:
*   El estado general de la plataforma.
*   La disponibilidad de cada modelo individualmente.
*   Las métricas de rendimiento como el tiempo de respuesta (TTFB) y el throughput (tokens/s).
*   El historial de incidentes para un seguimiento completo.