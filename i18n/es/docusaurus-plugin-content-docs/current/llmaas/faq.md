# Preguntas frecuentes sobre la oferta de servicio LLMaaS Cloud Temple

## Oferta y Capacidades

### **¿Cuál es la propuesta de valor de su servicio LLMaaS?**
Nuestro servicio le ofrece un acceso **soberano y seguro** a un amplio catálogo de modelos de IA de vanguardia, a través de una API compatible con OpenAI. Gestionamos toda la complejidad de la infraestructura calificada **SecNumCloud 3.2**, permitiéndole concentrarse en la creación de valor para sus aplicaciones, mientras controla sus costos gracias a un modelo económico predecible y acelera sus desarrollos gracias a estándares abiertos.

### **¿Qué tipo de modelos ofrecemos y cómo evoluciona el catálogo?**
Ofrecemos un catálogo rico en 45 modelos de código abierto, incluyendo las familias **Llama (Meta), Qwen, Deepseek, Mistral, Gemma (Google), Cogito y Granite (IBM)**. Nuestros modelos están especializados en diversos casos de uso:
*   **Razonamiento complejo y conversacional**.
*   **Generación y análisis de código**.
*   **Análisis de documentos largos** (hasta 128k tokens con modelos como `Gemma 3` o `Qwen2.5-VL`).
*   **Capacidades multimodales** (análisis de imagen con las series `Granite Vision`, `Gemma 3`, `Qwen2.5-VL` y `Mistral Small`).
*   **Soporte multilingüe avanzado** (con modelos como `Llama 3.3` y la familia `Qwen`).

Este catálogo se **revisa cada trimestre** para integrar los modelos más potentes, con una política de ciclo de vida transparente (aviso de 3 meses antes de cualquier retiro) para garantizar la estabilidad de sus aplicaciones.

### **¿Cuáles son las principales capacidades funcionales de su API?**
Nuestra API, 100% compatible con el estándar OpenAI, le permite crear fácilmente funcionalidades avanzadas como:
*   **Chatbots/asistentes** conversacionales.
*   Sistemas de **Búsqueda Incrementada por Generación (RAG)** utilizando nuestro endpoint de embedding.
*   Aplicaciones de **análisis de imágenes y documentos visuales** sin OCR previo.
*   La **transcripción de audio** a través de un servicio dedicado.

## Seguridad y Soberanía

### **¿Cómo garantiza la soberanía y confidencialidad de sus datos?**
La soberanía es el núcleo de nuestra oferta. Se basa en varios pilares:
1.  **Almacenamiento en Francia** : Nuestra infraestructura está exclusivamente en Francia, operada por Cloud Temple, una empresa de derecho francés. Esto nos exime de leyes extraterritoriales como el **CLOUD Act estadounidense**.
2.  **Calificación SecNumCloud 3.2** : El nivel más alto de seguridad de la ANSSI garantiza este posicionamiento.
3.  **No conservación de datos** : No almacenamos **ni sus preguntas, ni las respuestas**. Los datos se procesan de forma volátil en memoria durante la inferencia.
4.  **Cifrado de extremo a extremo** : Todas las comunicaciones con la API están cifradas en **TLS 1.3**.

### **¿Cómo gestiona los accesos, los derechos (RBAC) y la autenticación (SSO, MFA)?**
Nuestro servicio se integra a su política de seguridad según un modelo de responsabilidad compartida:
*   **Para sus usuarios finales**: La gestión de identidades, derechos (RBAC) y autenticación fuerte (SSO, MFA) es responsabilidad de **su aplicación**.
*   **Para sus administradores**: Los accesos a la **Consola Cloud Temple** para el control del servicio (gestión de claves, supervisión) pueden conectarse a su SSO empresarial (a través de OpenID Connect) para beneficiarse de sus políticas de seguridad, incluido el MFA.
*   **Para sus aplicaciones**: Puede crear diferentes claves de API con cuotas de consumo distintas para segmentar los derechos a nivel aplicativo.

### **¿Cómo está segura la plataforma?**
Aplicamos una defensa en profundidad:
*   **Autenticación fuerte** mediante clave de API para cada solicitud.
*   **Cifrado TLS 1.3** de todos los flujos.
*   **Protección de red** mediante firewall de próxima generación y sistemas de detección/previsión de intrusión (IDS/IPS).
*   **"Guardrails" aplicativos** para prevenir amenazas específicas de LLM, como la inyección de prompts y los intentos de explotación de modelos.
*   **Pruebas de intrusión periódicas** realizadas por auditores cualificados (PASSI) dentro del marco de nuestra certificación SecNumCloud 3.2.

## Integración y Uso

### **¿Cómo se integra su API?**
Nuestro servicio es "API-first". Siendo **compatible con la API de OpenAI**, puede utilizar todos los SDK (Python, Node.js, etc.) y marcos estándar del mercado como **LangChain** o **LlamaIndex** para una integración rápida. Ofrecemos una documentación técnica completa (OpenAPI) y ejemplos de código.

### **¿Se puede personalizar la experiencia del usuario ?**
Sí, por completo. Nuestro servicio, siendo una API "headless", le da un control total sobre la interfaz y la experiencia de sus usuarios finales, incluyendo la integración de su estilo gráfico y la visualización de mensajes de conformidad, que son su responsabilidad.

### **¿Cómo gestiona los riesgos relacionados con la propiedad intelectual (PI)?**
Tiene el control total sobre los modelos que llama su aplicación. Para los casos de uso sensibles a la PI, recomendamos los modelos **Granite de IBM**, que cuentan con una **indemnización contractual sin límite** contra reclamaciones de PI, una garantía única en el mercado.

## Modelo Económico y Soporte

### **¿Cuál es su modelo económico?**
Nuestro modelo se basa en el consumo real (**tokens** para el lenguaje, **minutos** para el audio) para reflejar el costo real de cálculo. Para garantizar la previsibilidad y el control presupuestario, ofrecemos **Terceros de servicio** con presupuestos limitados y **contratos a medida**. Puede seguir su consumo en tiempo real desde la Consola Cloud Temple para una transparencia total. Además, el número de usuarios siempre es ilimitado, sin importar el plan elegido.

### **¿Qué nivel de soporte y SLA ofrece?**
Nuestra oferta estándar incluye soporte técnico en francés y en inglés, accesible a través de nuestro portal de clientes, con un compromiso de primera respuesta en día hábil. La plataforma cuenta con un compromiso de disponibilidad del **99%**. Para necesidades más críticas, nuestros **Servicios Profesionales** opcionales le brindan acceso a SLAs reforzados, incluyendo soporte prioritario con un tiempo de respuesta de hasta 4 horas para incidentes críticos, y un acompañamiento estratégico personalizado (talleres de innovación, gobernanza ITIL).