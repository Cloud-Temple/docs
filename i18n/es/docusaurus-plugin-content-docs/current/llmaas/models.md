---
title: Catálogo de Modelos de IA
sidebar_position: 2
---

# Catálogo de Modelos LLM como servicio

## Visión general

Cloud Temple LLMaaS ofrece **modelos de lenguaje a gran escala** cuidadosamente seleccionados y optimizados. Nuestro catálogo cubre todo el espectro, desde micromodelos ultraeficientes hasta modelos extremadamente voluminosos.

### Nota sobre las medidas de rendimiento
Los valores de velocidad (tokens/s) representan objetivos de rendimiento en condiciones reales. El consumo energético (kWh/Mtoken) se calcula dividiendo la potencia estimada del servidor de inferencia (en vatios) por la velocidad medida del modelo (en tokens/segundo), y luego se convierte a kilovatios-hora por millón de tokens. Este método ofrece una comparación práctica de la eficiencia energética de los diferentes modelos, y debe utilizarse como indicador relativo en lugar de una medida absoluta del consumo eléctrico.

### Estadísticas Globales

| Métrica | Valor |
|----------|--------|
| **Número total de modelos** | 36 modelos |
| **Contexto mínimo** | 8 192 tokens |
| **Contexto máximo** | 120 000 tokens |
| **Conformidad** | SecNumCloud ✅ HDS ✅ Soberanía ✅ C5 ✅ |
| **Localización** | 100% Francia 🇫🇷 |

### Tarificación

| Tipo de uso | Precio |
|-------------|--------|
| **Tokens de entrada** | 0.9€ / millón de tokens |
| **Tokens de salida** | 4€ / millón de tokens |
| **Razonamiento avanzado** | 21€ / millón de tokens |

## Modelos de Gran Tamaño

### Llama 3.3 70B
**Meta • 70B parámetros • Contexto: 60 000 tokens**

Modelo multilingüe de vanguardia desarrollado por Meta, diseñado para destacar en diálogos naturales, razonamiento complejo y comprensión sutil de instrucciones.

**Especificaciones técnicas:**
- **Velocidad** : 30 tokens/segundo
- **Consumo** : 8,87 kWh/millon de tokens
- **Licencia** : [LLAMA 3.3 Community Licence](./licences/llama3.3_70b.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Chatbots multilingües que admiten 8 idiomas simultáneamente
- Ejecución de instrucciones complejas encadenadas (prompt chaining)
- Procesamiento de una ventana de diálogo de 60K tokens para historial de conversación
- Análisis de documentos legales o técnicos voluminosos (>100 páginas)
- Generación de textos estructurados con fidelidad a las instrucciones estilísticas

### Qwen3 235B
**Equipo Qwen • 235B parámetros • Contexto: 32 000 tokens**

Modelo muy grande de la nueva generación Qwen3, ofreciendo capacidades ampliadas para las tareas más complejas.

**Especificaciones técnicas:**
- **Velocidad**: 21 tokens/segundo
- **Consumo**: 6,35 kWh/millon de tokens
- **Licencia**: [Apache 2.0](./licences/apache2.licence.md)
- **Ubicación**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Agentes conversacionales muy avanzados con gran contexto e integración de herramientas (MCP)
- Resolución de problemas extremadamente complejos (matemáticas, código)
- Análisis y generación de documentos muy voluminosos y técnicos
- Aplicaciones multilingües (>100 idiomas) que requieren comprensión y generación de muy alta fidelidad

### DeepSeek-R1 671B
**DeepSeek AI • 671B parámetros • Contexto: 32 000 tokens**

Modelo extremadamente grande de DeepSeek AI, diseñado para el máximo de razonamiento y generación.

**Especificaciones técnicas:**
- **Velocidad** : 16 tokens/segundo
- **Consumo** : 8,33 kWh/millón de tokens
- **Licencia** : [MIT Licence](./licences/deepseek-r1_671b.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Tareas de razonamiento de vanguardia
- Generación de texto de alta calidad
- Investigación y desarrollo en IA

---

### Gemma 3 27B  
**Google • 27B parámetros • Contexto: 120 000 tokens**  

Modelo revolucionario de Google que ofrece un equilibrio óptimo entre potencia y eficiencia, con una relación rendimiento/costo excepcional para aplicaciones profesionales exigentes.  

**Especificaciones técnicas:**  
- **Velocidad** : 68 tokens/segundo ⚡  
- **Consumo** : 3,91 kWh/millón de tokens  
- **Licencia** : [Google Gemma Terms of Use](./licences/gemma3_27b.licence.md)  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad  

**Casos de uso:**  
- Análisis de documentos con contexto extendido hasta 120K tokens (aproximadamente 400 páginas)  
- Indexación y búsqueda semántica en bases documentales voluminosas  
- Procesamiento de imágenes y texto de forma simultánea gracias a las capacidades multimodales  
- Extracción estructurada de datos a partir de PDF y documentos escaneados  
- Integración con herramientas externas mediante la API de llamada a funciones

### Qwen3 30B-A3B FP8
**Equipo Qwen • 30B-A3B parámetros • Contexto: 32 000 tokens**

Modelo MoE FP8 (3B activados) de nueva generación, con modos de pensamiento híbridos y capacidades avanzadas de agente.

**Especificaciones técnicas:**
- **Velocidad** : 103 tokens/segundo ⚡
- **Consumo** : 2,58 kWh/millon de tokens
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Agentes conversacionales avanzados con integración de herramientas (MCP)
- Resolución de problemas complejos (matemáticas, código) con modo "Thinking"
- Aplicaciones multilingües (>100 idiomas)
- Escenarios que requieren un equilibrio costo/rendimiento (MoE) en VLLM
- Diálogo de múltiples turnos atractivo y seguimiento preciso de instrucciones

### DeepSeek-R1 70B  
**DeepSeek AI • 70B parámetros • Contexto: 32 000 tokens**  

Modelo de 70B de DeepSeek AI  

**Especificaciones técnicas:**  
- **Velocidad** : 20 tokens/segundo tokens/segundo  
- **Consumo** : 11,44 kWh/millón de tokens  
- **Licencia** : [MIT Licence](./licences/deepseek-r1_70b.licence.md)  
- **Ubicación** : FR 🇫🇷  

**Capacidades:**  
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad  

**Casos de uso:**  
- Tareas de razonamiento complejo  
- Generación de texto de alta calidad  
- Análisis detallado de documentos (dentro del límite de contexto de 27k)  

---

## Modelos Especializados

### Qwen3 14B
**Equipo Qwen • 14B parámetros • Contexto: 32 000 tokens**

Modelo denso de nueva generación Qwen3 (14B), que ofrece un rendimiento equivalente al Qwen2.5 32B con una mayor eficiencia.

**Especificaciones técnicas:**
- **Velocidad** : 69 tokens por segundo ⚡
- **Consumo** : 2,65 kWh por millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Tareas generales que requieren rendimiento y gran contexto
- Generación de contenido creativo y técnico
- Análisis de datos y razonamiento complejo
- Integración con herramientas externas mediante llamada a funciones

### Gemma 3 12B
**Google • 12B parámetros • Contexto: 120 000 tokens**

Versión intermedia del modelo Gemma 3 que ofrece un excelente equilibrio entre rendimiento y eficiencia.

**Especificaciones técnicas:**
- **Velocidad** : 67 tokens/segundo ⚡
- **Consumo** : 2,73 kWh/millon de tokens
- **Licencia** : [Términos de uso de Google Gemma](./licences/gemma3_12b.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Aplicaciones multimodales con restricciones moderadas de recursos
- Procesamiento de documentos con contexto estándar (hasta 100 páginas)
- Generación de contenido textual y análisis de imágenes combinados
- Despliegues en GPU estándar sin infraestructura especializada
- Chatbots avanzados con capacidades visuales y textuales integradas

### Gemma 3 4B  
**Google • 4B parámetros • Contexto: 120 000 tokens**  

Modelo compacto de Google que ofrece excelentes rendimientos en un formato ligero y económico.  

**Especificaciones técnicas:**  
- **Velocidad** : 58 tokens/segundo ⚡  
- **Consumo** : 0.93 kWh/millon de tokens 🌱  
- **Licencia** : [Google Gemma Terms of Use](./licences/gemma3_4b.licence.md)  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad  

**Casos de uso:**  
- Aplicaciones embebidas y edge computing con procesamiento de imágenes  
- Chatbots multimodales reactivos que requieren baja latencia  
- Despliegues a gran escala con capacidades visuales y textuales  
- Aplicaciones móviles con análisis de imágenes y textos  
- Procesamiento de consultas visuales de baja a media complejidad con alta performance

### Gemma 3 1B  
**Google • 1B parámetros • Contexto: 32 000 tokens**  

Micromodelo ultra-ligero diseñado para despliegues en dispositivos con muy pocos recursos.  

**Especificaciones técnicas:**  
- **Velocidad** : 41 tokens/segundo tokens/segundo  
- **Consumo** : 1,32 kWh/millon de tokens 🌱  
- **Licencia** : [Términos de uso de Google Gemma](./licences/gemma3_1b.licence.md)  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad  

**Casos de uso:**  
- Despliegue en dispositivos IoT y sistemas embebidos con integración de API  
- Aplicaciones que requieren inferencia local en CPU con llamadas a funciones  
- Tareas textuales básicas con respuesta instantánea y llamadas a funciones  
- Asistentes compactos para aplicaciones de uso general con integración de servicios externos  
- Sistemas de control inteligente que integran varias APIs/servicios

### Lucie-7B-Instruct
**OpenLLM-France • 7B parámetros • Contexto: 32 000 tokens**

Modelo causal multilingüe de código abierto (7B), fine-tuneado desde Lucie-7B. Optimizado para el francés.

**Especificaciones técnicas:**
- **Velocidad** : 41 tokens/segundo tokens/segundo
- **Consumo** : 1,32 kWh/millon de tokens 🌱
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

### Mistral Small 3.1  
**Mistral AI • 24B parámetros • Contexto: 60 000 tokens**  

Modelo compacto y reactivo de Mistral AI, especialmente diseñado para ofrecer una asistencia conversacional fluida y pertinente con una velocidad de respuesta óptima.  

**Especificaciones técnicas:**  
- **Velocidad** : 14 tokens/segundo  
- **Consumo** : 13,06 kWh/millón de tokens  
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad  

**Casos de uso:**  
- Aplicaciones conversacionales  
- Asistentes virtuales que combinan análisis de imágenes y texto (26 tokens/s)  
- Chatbots de soporte técnico con acceso a documentación técnica  
- Herramientas de creación/edición de contenido con respuesta inmediata (blogs, correos electrónicos)  
- Despliegue en infraestructuras estándar (24B de parámetros)

### DeepCoder
**Agentica x Together AI • 14B parámetros • Contexto: 32 000 tokens**

Modelo de IA de código abierto (14B) de Together AI & Agentica, una alternativa creíble a los modelos propietarios para la generación de código.

**Especificaciones técnicas:**
- **Velocidad** : 62 tokens por segundo tokens por segundo ⚡
- **Consumo** : 2.95 kWh por millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Generación de código en más de 15 lenguajes con optimización de rendimiento
- Depuración y refactorización de bases de código existentes con análisis de impacto
- Implementación de algoritmos complejos (grafos, árboles, heurísticas)
- Transposición de código entre lenguajes y frameworks (por ejemplo Python a JavaScript)
- Creación automática de pruebas unitarias con cobertura de código > 80%

### Granite 3.2 Visión
**IBM • 2 mil millones de parámetros • Contexto: 16 384 tokens**

Modelo compacto revolucionario de IBM especializado en visión por computadora, capaz de analizar y comprender directamente los documentos visuales sin recurrir a tecnologías OCR intermedias.

**Especificaciones técnicas:**
- **Velocidad** : 48 tokens/segundo ⚡
- **Consumo** : 1,13 kWh/millón de tokens 🌱
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad

**Casos de uso:**
- Extracción de datos estructurados de facturas y formularios sin OCR
- Análisis directo de tablas y gráficos con interpretación de tendencias
- Lectura e interpretación de diagramas técnicos (eléctricos, mecánicos)
- Procesamiento de documentos manuscritos con alto índice de reconocimiento
- Visión por computadora ligera (2 mil millones de parámetros) con alta velocidad (79 tokens/s)

### Granite 3.3 8B
**IBM • 8B parámetros • Contexto: 60 000 tokens**

Modelo Granite 8B ajustado por IBM para un razonamiento y seguimiento de instrucciones mejorados, con un contexto de 128k tokens.

**Especificaciones técnicas:**
- **Velocidad**: 27 tokens/segundo
- **Consumo**: 2.0 kWh/millón de tokens 🌱
- **Licencia**: [Apache 2.0](./licences/apache2.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Casos de uso:**
- Tareas generales de seguimiento de instrucciones (clasificación, extracción, Preguntas y Respuestas)
- Asistentes de IA multilingües (12 idiomas)
- Procesamiento de documentos muy largos (128k tokens): resúmenes y preguntas-respuestas
- Generación/completado de código con Fill-in-the-Middle
- Integración con herramientas externas mediante llamadas de función
- Razonamiento estructurado con el modo "Thinking"

### Granite 3.3 2B  
**IBM • 2B parámetros • Contexto: 120 000 tokens**  

Modelo Granite 2B fine-tuneado por IBM, optimizado para el razonamiento y el seguimiento de instrucciones, con un contexto de 128k tokens.  

**Especificaciones técnicas:**  
- **Velocidad** : 45 tokens por segundo ⚡  
- **Consumo** : 1.2 kWh/millón de tokens 🌱  
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad  

**Casos de uso:**  
- Despliegues ligeros con gran contexto (128k tokens)  
- Tareas generales de seguimiento de instrucciones en recursos limitados  
- Asistentes de IA multilingües compactos  
- Procesamiento de documentos largos en dispositivos menos potentes  
- Generación/completación de código FIM en estaciones de trabajo estándar  

---

### Granite 3.1 MoE
**IBM • 3 mil millones de parámetros • Contexto: 32 000 tokens**

Modelo innovador de IBM que utiliza la arquitectura Mixture-of-Experts (MoE) para ofrecer un rendimiento excepcional optimizando drásticamente el uso de los recursos computacionales.

**Especificaciones técnicas:**
- **Velocidad** : 74 tokens por segundo ⚡
- **Consumo** : 0.73 kWh/millón de tokens 🌱
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Casos de uso:**
- Aplicaciones generales con costo de inferencia optimizado (42 tokens por segundo)
- Procesamiento de documentos en entornos CPU con uso de RAM limitado
- Análisis especializados con activación dinámica de las partes pertinentes del modelo
- Despliegues de alta densidad con bajo consumo energético por inferencia
- Procesamiento paralelo de varios tipos de consultas con especialización MoE

---

### Cogito 14B
**Deep Cogito • 14B parámetros • Contexto: 32 000 tokens**

Modelo Deep Cogito especialmente diseñado para destacar en tareas de razonamiento profundo y comprensión contextual sutil, ideal para aplicaciones analíticas sofisticadas.

**Especificaciones técnicas:**
- **Velocidad** : 60 tokens/segundo ⚡
- **Consumo** : 3,05 kWh/millon de tokens
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Análisis semántico de textos con identificación de implicaciones no explícitas
- Razonamiento causal estructurado con identificación de relaciones causa-efecto
- Síntesis de documentos complejos con extracción de información clave
- Sistemas de preguntas-respuestas precisas sobre corpus documentales especializados
- Análisis argumentativo con evaluación de la solidez de los razonamientos

### Cogito 32B
**Deep Cogito • 32B parámetros • Contexto: 32 000 tokens**

Versión avanzada del modelo Cogito que ofrece capacidades de razonamiento y análisis considerablemente ampliadas, diseñada para las aplicaciones más exigentes en inteligencia artificial analítica.

**Especificaciones técnicas:**
- **Velocidad** : 32 tokens/segundo tokens/segundo
- **Consumo** : 5,73 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Análisis de escenarios multi-factoriales con evaluación probabilística de los resultados
- Resolución de problemas científicos con demostración formal de los pasos
- Aplicaciones de alta criticidad que requieren precisión y verificabilidad de los resultados
- Sistemas expertos en dominios especializados (jurídico, médico, técnico)
- Análisis con razonamiento multi-etapas y explicabilidad completa de las conclusiones

### Qwen3 32B
**Equipo Qwen • 32B parámetros • Contexto: 40 000 tokens**

Modelo potente de la nueva generación Qwen3, que ofrece capacidades avanzadas en razonamiento, código y agentes, con un contexto ampliado.

**Especificaciones técnicas:**
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Agentes conversacionales avanzados con gran contexto e integración de herramientas (MCP)
- Resolución de problemas complejos (matemáticas, código) con modo "Thinking"
- Análisis y generación de documentos voluminosos
- Aplicaciones multilingües (>100 idiomas) que requieren una comprensión profunda

### QwQ-32B
**Equipo Qwen • 32B parámetros • Contexto: 32 000 tokens**

Modelo de 32 mil millones de parámetros mejorado mediante aprendizaje por refuerzo (RL) para destacar en razonamiento, codificación, matemáticas y tareas de agente.

**Especificaciones técnicas:**
- **Velocidad**: 35 tokens/segundo
- **Consumo**: 5,22 kWh/millón de tokens
- **Licencia**: [Apache 2.0](./licences/apache2.licence.md)
- **Ubicación**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Resolución de problemas complejos que requieren razonamiento y uso de herramientas
- Generación y ejecución de código con verificación de los resultados
- Tareas matemáticas avanzadas con verificación de la precisión
- Aplicaciones de agente capaces de interactuar con el entorno
- Seguimiento de instrucciones mejorado y alineación con las preferencias humanas

---

### DeepSeek-R1 14B
**DeepSeek AI • 14B parámetros • Contexto: 32 000 tokens**

Versión compacta y eficiente del modelo DeepSeek-R1, que ofrece un excelente equilibrio entre rendimiento y ligereza para despliegues que requieren flexibilidad y reactividad.

**Especificaciones técnicas:**
- **Velocidad** : 60 tokens/segundo ⚡
- **Consumo** : 3,05 kWh/millon de tokens
- **Licencia** : [MIT licence](./licences/deepseek-r1_14b.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Aplicaciones generales con necesidades de inferencia rápida (44 tokens/s)
- Despliegues en servidores estándar sin GPU especializada (14B parámetros)
- Procesamiento de texto con análisis contextual y tiempo de respuesta < 2s
- Despliegue en edge computing con inferencia local optimizada
- Prototipado rápido de aplicaciones IA con tiempo de iteración corto

### DeepSeek-R1 32B
**DeepSeek AI • 32B parámetros • Contexto: 32 000 tokens**

Versión intermedia del modelo DeepSeek-R1 que ofrece un equilibrio estratégico entre las capacidades avanzadas de la versión 70B y la eficiencia de la versión 14B, para una versatilidad y rendimiento óptimos.

**Especificaciones técnicas:**
- **Velocidad** : 33 tokens/segundo
- **Consumo** : 5,54 kWh/millon de tokens
- **Licencia** : [MIT licence](./licences/deepseek-r1_32b.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Casos de uso:**
- Aplicaciones que requieren un buen equilibrio entre potencia y costo (32B parámetros)
- Procesamiento de texto profesional con análisis de las sutilezas semánticas
- Generación automática de informes estructurados a partir de datos brutos
- Aplicaciones que combinan análisis de datos y generación de contenidos
- Asistentes especializados para sectores técnicos (jurídico, médico, técnico)

### Cogito 3B
**Deep Cogito • 3B parámetros • Contexto: 32 000 tokens**

Versión compacta del modelo Cogito, optimizada para el razonamiento en dispositivos con recursos limitados.

**Especificaciones técnicas:**
- **Velocidad** : 63 tokens por segundo ⚡
- **Consumo** : 0.86 kWh/millón de tokens 🌱
- **Licencia** : [Licencia Comunitaria LLAMA 3.2](./licences/cogito_3b.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

---

### Granite Embedding
**IBM • 278M parámetros • Contexto: 32 000 tokens**

Modelo de embedding ultra-ligero de IBM para la búsqueda semántica y la clasificación.

**Especificaciones técnicas :**
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades :**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

---

### Granite 3 Guardian 2B
**IBM • 2B parámetros • Contexto: 8192 tokens**

Modelo compacto de IBM especializado en seguridad y cumplimiento, detección de riesgos y contenido inapropiado.

**Especificaciones técnicas:**
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

---

### Granite 3 Guardian 8B
**IBM • 8B parámetros • Contexto: 32 000 tokens**

Modelo de IBM especializado en seguridad y cumplimiento, con capacidades avanzadas de detección de riesgos.

**Especificaciones técnicas:**
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

---

### Qwen 2.5 0.5B
**Equipo Qwen • 0.5B parámetros • Contexto: 32 000 tokens**

Micromodelo ultra-ligero de la familia Qwen 2.5, diseñado para una eficiencia máxima en dispositivos con restricciones.

**Especificaciones técnicas:**
- **Velocidad**: 57 tokens/segundo ⚡
- **Consumo**: 0.95 kWh/millon tokens 🌱
- **Licencia**: [licencia MIT](./licences/qwen2.5_0.5b.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

### Qwen 2.5 1.5B
**Equipo Qwen • 1.5B parámetros • Contexto: 32 000 tokens**

Modelo muy compacto de la familia Qwen 2.5, que ofrece un buen equilibrio entre rendimiento/tamaño para despliegues ligeros.

**Especificaciones técnicas:**
- **Velocidad**: 94 tokens/segundo ⚡
- **Consumo**: 0.58 kWh/millón de tokens 🌱
- **Licencia**: [MIT licence](./licences/qwen2.5_1.5b.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

### Qwen 2.5 14B
**Equipo Qwen • 14B parámetros • Contexto: 32 000 tokens**

Modelo versátil de tamaño medio de la familia Qwen 2.5, buen equilibrio rendimiento/recursos.

**Especificaciones técnicas:**
- **Velocidad**: 61 tokens/segundo ⚡
- **Consumo**: 3.0 kWh/millon de tokens
- **Licencia**: [MIT licence](./licences/qwen2.5_14b.licence.md)
- **Ubicación**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

### Qwen 2.5 32B
**Equipo Qwen • 32B parámetros • Contexto: 32 000 tokens**

Modelo potente de la familia Qwen 2.5, que ofrece capacidades avanzadas en comprensión y generación.

**Especificaciones técnicas:**
- **Velocidad**: 32 tokens/segundo tokens/segundo
- **Consumo**: 5,73 kWh/millón de tokens
- **Licencia**: [MIT licence](./licences/qwen2.5_32b.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

### Qwen 2.5 3B
**Equipo Qwen • 3B parámetros • Contexto: 32 000 tokens**

Modelo compacto y eficiente de la familia Qwen 2.5, adecuado para tareas generales en recursos limitados.

**Especificaciones técnicas:**
- **Velocidad**: 60 tokens/segundo ⚡
- **Consumo**: 0.9 kWh/millon de tokens 🌱
- **Licencia**: [licencia MIT](./licences/qwen2.5_3b.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

---

### Qwen3 0.6b
**Equipo Qwen • 0.6B parámetros • Contexto: 32 000 tokens**

Modelo compacto y eficiente de la familia Qwen3, adecuado para tareas generales en recursos limitados.

**Especificaciones técnicas:**
- **Velocidad** : 60 tokens/seconde tokens/seconde ⚡
- **Consumo** : 0.9 kWh/millon tokens 🌱
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

---

### Qwen3 1.7b
**Equipo Qwen • 1.7B parámetros • Contexto: 32 000 tokens**

Modelo muy compacto de la familia Qwen3, que ofrece un buen equilibrio rendimiento/tamaño para despliegues ligeros.

**Especificaciones técnicas:**
- **Velocidad** : 83 tokens/segundo ⚡
- **Consumo** : 0.65 kWh/millón de tokens 🌱
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

---

### Qwen3 4b
**Equipo Qwen • 4 mil millones de parámetros • Contexto: 32.000 tokens**

Modelo compacto de la familia Qwen3 que ofrece excelentes rendimientos en un formato ligero y económico.

**Especificaciones técnicas:**
- **Velocidad** : 48 tokens/segundo tokens/segundo
- **Consumo** : 1,13 kWh/millon de tokens 🌱
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

---

### Qwen3 8b
**Equipo Qwen • 8B parámetros • Contexto: 32 000 tokens**

Modelo Qwen3 8B que ofrece un buen equilibrio entre rendimiento y eficiencia para tareas generales.

**Especificaciones técnicas:**
- **Velocidad** : 29 tokens por segundo tokens por segundo
- **Consumo** : 1.87 kWh/millon de tokens 🌱
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

---

### Qwen2.5-VL 3B
**Equipo Qwen • 3.8B parámetros • Contexto: 128 000 tokens**

Modelo de Visión-Lenguaje compacto, solución eficiente para la IA en el borde (edge AI).

**Especificaciones técnicas:**
- **Velocidad**: 65 tokens/segundo tokens/segundo ⚡
- **Consumo**: 0.83 kWh/millon de tokens 🌱
- **Licencia**: [Apache 2.0](./licences/apache2.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

### Qwen2.5-VL 7B
**Equipo Qwen • 7B (8.3B) parámetros • Contexto: 128 000 tokens**

Modelo de Visión-Lenguaje eficiente, superando a GPT-4o-mini en ciertas tareas.

**Especificaciones técnicas:**
- **Velocidad** : 37 tokens por segundo
- **Consumo** : 1,46 kWh/millon de tokens 🌱
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

---

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B parámetros • Contexto: 16.000 tokens**

Modelo de lenguaje especializado en ciberseguridad, optimizado para eficiencia.

**Especificaciones técnicas:**
- **Velocidad** : 22 tokens por segundo tokens por segundo
- **Consumo** : 2,46 kWh/millon de tokens
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

---

### devstral 24B
**Mistral AI & All Hands AI • 24B parámetros • Contexto: 120.000 tokens**

Devstral es un LLM agente para tareas de ingeniería de software.

**Especificaciones técnicas:**
- **Velocidad** : 53 tokens/segundo ⚡
- **Consumo** : 4,5 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache2.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Casos de uso:**
- Exploración y modificación de bases de código
- Agente
- Europeo

---

## Casos de uso recomendados

### Diálogo multilingüe

Chatbots y asistentes capaces de comunicarse en varios idiomas con detección automática, mantenimiento del contexto a lo largo de toda la conversación y comprensión de las especificidades lingüísticas

**Modelos recomendados :**

- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Análisis de documentos largos

Procesamiento de documentos voluminosos (más de 100 páginas) con mantenimiento del contexto en todo el texto, extracción de información clave, generación de resúmenes pertinentes y respuesta a preguntas específicas sobre el contenido

**Modelos recomendados :**

- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programación y desarrollo
Generación y optimización de código en múltiples lenguajes, depuración, refactorización, desarrollo de funcionalidades completas, comprensión de implementaciones algorítmicas complejas y creación de pruebas unitarias

**Modelos recomendados :**

- DeepCoder
- QwQ
- DeepSeek-R1
- Granite 3.3
- Devstral

### Análisis visual

Procesamiento directo de imágenes y documentos visuales sin preprocesamiento OCR, interpretación de diagramas técnicos, gráficos, tablas, dibujos y fotos con generación de explicaciones textuales detalladas del contenido visual

**Modelos recomendados:**

- Granite 3.2 Vision
- Mistral Small 3.1
- Gemma 3
- Qwen2.5-VL

### Seguridad y cumplimiento

Aplicaciones que requieren capacidades específicas en materia de seguridad; filtrado de contenido sensible, trazabilidad de los razonamientos, verificación RGPD/HDS, minimización de riesgos, análisis de vulnerabilidades y cumplimiento de las regulaciones sectoriales

**Modelos recomendados:**

- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Foundation-Sec-8B

### Despliegues ligeros y embebidos

Aplicaciones que requieren una huella mínima en recursos, despliegue en dispositivos con capacidad limitada, inferencia en tiempo real en CPU estándar e integración en sistemas embebidos o IoT

**Modelos recomendados:**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3