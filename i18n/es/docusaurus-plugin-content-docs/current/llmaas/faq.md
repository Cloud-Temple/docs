# Preguntas frecuentes sobre la oferta de servicio LLMaaS Cloud Temple

## Oferta y Capacidades

### **¿Cuál es la propuesta de valor de su servicio LLMaaS?**

Nuestro servicio le ofrece acceso **soberano y seguro** a un amplio catálogo de modelos de IA de vanguardia, a través de una API compatible con OpenAI. Nosotros gestionamos toda la complejidad de la infraestructura certificada **SecNumCloud 3.2**, permitiéndole centrarse en crear valor para sus aplicaciones, manteniendo bajo control sus costos gracias a un modelo económico predecible y acelerando sus desarrollos gracias a estándares abiertos.

### **¿Qué tipo de modelos ofrecemos y cómo evoluciona el catálogo?**

Ofrecemos un catálogo amplio de 45 modelos de código abierto, que incluye las familias **Llama (Meta), Qwen, Deepseek, Mistral, Gemma (Google), Cogito y Granite (IBM)**. Nuestros modelos están especializados para diversos casos de uso:

*   **Razonamiento complejo y conversacional**.
*   **Generación y análisis de código**.
*   **Análisis de documentos largos** (hasta 128k tokens con modelos como `Gemma 3` o `Qwen2.5-VL`).
*   **Capacidades multimodales** (análisis de imágenes con las series `Granite Vision`, `Gemma 3`, `Qwen2.5-VL` y `Mistral Small`).
*   **Soporte avanzado multilingüe** (con modelos como `Llama 3.3` y la familia `Qwen`).

Este catálogo se **revisa trimestralmente** para incorporar los modelos más potentes, con una política de ciclo de vida transparente (aviso previo de 3 meses antes de cualquier retirada) que garantiza la estabilidad de sus aplicaciones.

### **¿Cuáles son las principales capacidades funcionales de su API?**  
Nuestra API, totalmente compatible con el estándar OpenAI, le permite crear fácilmente funcionalidades avanzadas como:  
*   **Chatbots/asistentes** conversacionales.  
*   Sistemas de **Búsqueda Incrementada por Generación (RAG)** utilizando nuestro endpoint de embedding.  
*   Aplicaciones de **análisis de imágenes y documentos visuales** sin necesidad de OCR previo.  
*   **Transcripción de audio** a través de un servicio dedicado.

## Seguridad y Soberanía

### **¿Cómo garantizamos la soberanía y la confidencialidad de sus datos?**

La soberanía está en el corazón de nuestra oferta. Se basa en varios pilares:

1.  **Almacenamiento en Francia**: Nuestra infraestructura está exclusivamente ubicada en Francia, gestionada por Cloud Temple, una empresa de derecho francés. Esto nos exime de las leyes extraterritoriales como el **CLOUD Act estadounidense**.
2.  **Certificación SecNumCloud 3.2**: La máxima acreditación de seguridad de la ANSSI garantiza este posicionamiento.
3.  **No conservación de datos**: No almacenamos **ni sus prompts, ni las respuestas**. Los datos se procesan de forma volátil en memoria durante el tiempo de inferencia.
4.  **Cifrado de extremo a extremo**: Todas las comunicaciones con la API están cifradas mediante **TLS 1.3**.

### **How do you manage access, permissions (RBAC), and authentication (SSO, MFA)?**

Our service integrates with your security policy under a shared responsibility model:

*   **For your end users**: Identity management, permissions (RBAC), and strong authentication (SSO, MFA) are the responsibility of **your application**.
*   **For your administrators**: Access to the **Cloud Temple Console** for service management (key management, monitoring) can be connected to your enterprise SSO (via OpenID Connect) to leverage your security policies, including MFA.
*   **For your applications**: You can create different API keys with distinct consumption quotas to segment permissions at the application level.

### **How is the platform secured?**
We implement a defense-in-depth strategy:
*   **Strong authentication** via API key for every request.
*   **TLS 1.3 encryption** for all data flows.
*   **Network protection** using next-generation firewalls and intrusion detection/prevention systems (IDS/IPS).
*   **Application-level guardrails** to defend against LLM-specific threats, such as prompt injection and model exploitation attempts.
*   **Regular penetration testing** conducted by qualified auditors (PASSI) as part of our SecNumCloud 3.2 certification process.

## Integración y uso

### **How does your API integrate?**
Our service is "API-first". Being **OpenAI API-compatible**, you can use all standard SDKs (Python, Node.js, etc.) and market-leading frameworks such as **LangChain** or **LlamaIndex** for fast integration. We provide comprehensive technical documentation (OpenAPI) and code examples.

### **¿Se puede personalizar la experiencia del usuario?**
Sí, totalmente. Dado que nuestro servicio es una API "headless", usted tiene un control total sobre la interfaz y la experiencia de sus usuarios finales, incluida la integración de su identidad gráfica y la visualización de mensajes de conformidad, que son de su responsabilidad.

### **How do you manage risks related to intellectual property (IP)?**

You have full control over the models your application calls. For use cases sensitive to IP, we highlight IBM's **Granite models**, which come with a **contractual, unlimited indemnification** against IP claims—a unique guarantee in the market.

## Modelo Económico y Soporte

### **¿Cuál es su modelo económico?**
Nuestro modelo se basa en el consumo real (**tokens** para el lenguaje, **minutos** para el audio) para reflejar el costo computacional real. Para garantizar previsibilidad y control presupuestario, ofrecemos **Tiers de servicio** con presupuestos máximos y **contratos personalizados**. Puede supervisar su consumo en tiempo real desde la Consola Cloud Temple para una transparencia total. Además, el número de usuarios es siempre ilimitado, independientemente del plan elegido.

### **What level of support and SLA do you offer?**
Our standard offering includes technical support in French and English, accessible via our customer portal, with a commitment to first response within one business day. The platform comes with a **99%** availability commitment. For more critical needs, our optional **Professional Services** provide enhanced SLAs, including priority support with response times of up to 4 hours for critical incidents, and tailored strategic support (innovation workshops, ITIL governance).

### **¿Cómo puedo seguir el estado de salud de la plataforma LLMaaS?**

Creemos en una transparencia total sobre la disponibilidad de nuestros servicios. Puede consultar en tiempo real el estado operativo de cada modelo de IA en nuestra página pública de estado: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Esta página proporciona información detallada sobre:
*   El estado general de la plataforma.
*   La disponibilidad de cada modelo individualmente.
*   Las métricas de rendimiento, como el tiempo de respuesta (TTFB) y el rendimiento (tokens/s).
*   El historial de incidentes para un seguimiento completo.