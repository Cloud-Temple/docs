# FAQ sobre la oferta de servicio LLMaaS Cloud Temple

## Oferta y Capacidades

### **¿Cuál es la propuesta de valor de su servicio LLMaaS?**
Nuestro servicio le ofrece un acceso **soberano y seguro** a un amplio catálogo de modelos de IA de última generación, a través de una API compatible con OpenAI. Gestionamos toda la complejidad de la infraestructura cualificada **SecNumCloud 3.2**, permitiéndole concentrarse en la creación de valor para sus aplicaciones, mientras controla sus costos gracias a un modelo económico predecible y acelera sus desarrollos mediante estándares abiertos.

### **¿Qué tipo de modelos ofrece y cómo evoluciona el catálogo?**
El catálogo cubre el chat y el razonamiento, la programación y los agentes, la visión, los embeddings, el reranking, la seguridad, la traducción y los usos de audio/imagen. Los modelos y sus licencias varían según el uso.

Consulte el **[catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle)** para la lista actual, los estados LTS, los plazos y las migraciones recomendadas. Las novedades se publican en el **[changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog)**.

### **¿Puede un nombre antiguo de modelo seguir funcionando después de una evolución del catálogo?**
Sí, algunos identificadores se redirigen a un sucesor. Esto preserva la llamada API pero puede modificar el comportamiento del modelo. Verifique el destino en el ciclo de vida, pruébelo en sus casos de uso y luego actualice su configuración. Consulte la [guía de migración](./concepts.md#migración-hacia-otro-modelo).

### **¿Cuáles son las principales capacidades funcionales de su API?**
Nuestra API compatible con OpenAI le permite construir funcionalidades como las siguientes. Los endpoints y parámetros admitidos se especifican en la [referencia API](./api.md#compatibilidad-con-openai).
*   **Chatbots/asistentes** conversacionales con streaming y function calling.
*   Sistemas completos de **Búsqueda Aumentada por Generación (RAG)**: embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + generación aumentada.
*   Aplicaciones de **análisis de imágenes y documentos visuales** (OCR, gráficos). Para PDF, convierta previamente las páginas a imágenes; consulte los [requisitos de la guía OCR](./ocr.md#requisitos-previos-formato-de-la-imagen-y-dependencias).
*   **Transcripción de audio** por lotes o en tiempo real vía WebSocket.
*   El **procesamiento por lotes (Batch API)** asíncrono para cargas de trabajo voluminosas, con una tarificación específica publicada en el catálogo tarifario oficial.
*   La **generación de imágenes** vía API compatible con OpenAI.

## Seguridad y Soberanía

### **¿Cómo garantiza la soberanía y la confidencialidad de nuestros datos?**
La soberanía es el núcleo de nuestra oferta. Se basa en varios pilares:
1.  **Alojamiento y operación en Francia**: La infraestructura LLMaaS está alojada en Francia y operada en Francia por Cloud Temple, una sociedad de derecho francés. Para las garantías de soberanía asociadas a la cualificación, consulte [nuestro enfoque SecNumCloud](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **Cualificación SecNumCloud 3.2**: La máxima certificación de seguridad de la ANSSI garantiza este posicionamiento.
3.  **No conservación de datos**: No almacenamos **ni sus prompts, ni las respuestas**. Los datos se procesan de manera volátil en memoria durante la inferencia.
4.  **Cifrado de extremo a extremo**: Todas las comunicaciones con la API están cifradas en **TLS 1.3**.

### **¿Cómo gestiona los accesos, los derechos (RBAC) y la autenticación (SSO, MFA)?**
Nuestro servicio se integra en su política de seguridad según un modelo de responsabilidad compartida:
*   **Para sus usuarios finales**: La gestión de identidades, derechos (RBAC) y autenticación fuerte (SSO, MFA) es responsabilidad de **su aplicación**.
*   **Para sus administradores**: Los accesos a la **Consola Cloud Temple** para la gestión del servicio (gestión de claves, supervisión) pueden conectarse a su SSO empresarial (vía OpenID Connect) para beneficiarse de sus políticas de seguridad, incluido el MFA.
*   **Para sus aplicaciones**: Puede crear diferentes claves de API con cuotas de consumo distintas para segmentar los derechos a nivel de aplicación.

### **¿Cómo está asegurada la plataforma?**
Aplicamos una defensa en profundidad:
*   **Autenticación fuerte** mediante clave de API para cada solicitud.
*   **Cifrado TLS 1.3** de todos los flujos.
*   **Protección de red** mediante firewall de nueva generación y sistemas de detección/prevencción de intrusiones (IDS/IPS).
*   **Pruebas de intrusión regulares** realizadas por auditores cualificados (PASSI) en el marco de nuestra cualificación SecNumCloud 3.2.

### **¿Los prompts se filtran automáticamente?**
No. La plataforma no aplica un filtrado automático del contenido de los prompts contra inyecciones o intentos de elusión de instrucciones. Los controles de contenido son responsabilidad de su aplicación. Puede integrar explícitamente un modelo de seguridad para evaluar las entradas o las respuestas, según sus criterios de negocio. Consulte la [seguridad de los prompts](./concepts.md#seguridad-de-los-prompts).

## Integración y Uso

### **¿Cómo se integra su API?**
Nuestro servicio es "API-first". Su **API compatible con OpenAI** permite utilizar los SDK de OpenAI y frameworks como **LangChain** o **LlamaIndex** para las llamadas admitidas. Configure la URL base y su clave LLMaaS, y luego verifique los parámetros y las capacidades del modelo elegido. Consulte las [diferencias documentadas](./api.md#compatibilidad-con-openai) y los [ejemplos de integración](./tutorials.md).

### **¿Se puede personalizar la experiencia del usuario?**
Sí, totalmente. Al ser nuestro servicio una API "headless", tiene un control total sobre la interfaz y la experiencia de sus usuarios finales, incluida la integración de su identidad corporativa y la visualización de mensajes de cumplimiento, que son responsabilidad suya.

### **¿Cómo gestiona los riesgos relacionados con la propiedad intelectual (PI)?**
Usted tiene el control total sobre los modelos que llama su aplicación. Para casos de uso sensibles a la PI, destacamos los modelos **Granite de IBM**, que gozan de una **indemnización contractual sin límite** contra reclamaciones de PI, una garantía única en el mercado.

## Modelo Económico y Soporte

### **¿Cuál es su modelo económico?**
Nuestro modelo se basa en el consumo real para reflejar el coste exacto de cálculo. La tarificación por tipo de uso:

| Uso |
| ------- |
| **Tokens de entrada (chat)** |
| **Tokens de salida (chat)** |
| **Tokens de razonamiento** |
| **Reranking** |
| **Batch (entrada)** |
| **Batch (salida)** |
| **Audio ASR** |

Para conocer los precios públicos vigentes y elaborar su estimación, consulte el [catálogo tarifario oficial Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).


Para garantizar la previsibilidad y el control presupuestario, ofrecemos **Niveles de servicio** con presupuestos limitados y **contratos a medida**. Puede seguir su consumo en tiempo real desde la Consola Cloud Temple para una transparencia total. El número de usuarios es siempre ilimitado, independientemente del plan elegido.

### **¿Qué nivel de soporte y SLA ofrece?**
Nuestra oferta estándar incluye soporte técnico en Francés e Inglés, accesible a través de nuestro portal cliente, con un compromiso de primera respuesta en día laborable. La plataforma cuenta con un compromiso de disponibilidad del **99%**. Para las necesidades más críticas, nuestros **Servicios Profesionales** opcionales le dan acceso a SLAs reforzados, que incluyen soporte prioritario con un tiempo de respuesta de hasta 4 horas para incidentes críticos, y un acompañamiento estratégico a medida (talleres de innovación, gobernanza ITIL).

### **¿Cómo puedo seguir el estado de salud de la plataforma LLMaaS?**
Creemos en una transparencia total sobre la disponibilidad de nuestros servicios. Puede consultar en tiempo real el estado operativo de cada modelo de IA en nuestra página de estado pública: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Esta página proporciona información detallada sobre:
*   El estado general de la plataforma.
*   La disponibilidad de cada modelo individualmente.
*   Las métricas de rendimiento como el tiempo de respuesta (TTFB) y el throughput (tokens/s).
*   El historial de incidentes para un seguimiento completo.
