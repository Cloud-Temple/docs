---
title: Catálogo de los Modelos LLMaaS
sidebar_position: 2
---

# Catálogo de Modelos LLM como Servicio

## Visión general

Cloud Temple LLMaaS propone **45 modelos de lenguaje grandes** cuidadosamente seleccionados y optimizados para responder a los requisitos **SecNumCloud** más estrictos. Nuestro catálogo cubre todo el espectro, desde micromodelos ultraeficientes hasta modelos extremadamente grandes.

### Estadísticas Generales

| Métrica | Valor |
|----------|--------|
| **Número total de modelos** | 45 modelos |
| **Contexto mínimo** | 8 192 tokens |
| **Contexto máximo** | 128 000 tokens |
| **Conformidad** | SecNumCloud ✅ HDS ✅ Soberanía ✅ C5 ❌ |
| **Localización** | 100% Francia 🇫🇷 |

### Tarificación

| Tipo de uso | Precio |
|------------|--------|
| **Tokens de entrada** | 0.9€ / millón de tokens |
| **Tokens de salida** | 4€ / millón de tokens |
| **Razonamiento avanzado** | 21€ / millón de tokens |

## Modelos de Gran Tamaño

### Llama 3.3 70B
**Meta • 70B parámetros • Contexto: 60 000 tokens**

Modelo multilingüe de vanguardia desarrollado por Meta, diseñado para destacar en el diálogo natural, el razonamiento complejo y la comprensión sutil de las instrucciones.

**Especificaciones técnicas:**
- **Velocidad** : 26 tokens por segundo
- **Consumo** : 11,75 kWh/millon de tokens
- **Licencia** : Licencia Comunitaria LLAMA 3.3
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Diálogo` `Multilingüe`

**Casos de uso:**
- Chatbots multilingües que admiten 8 idiomas simultáneamente
- Ejecución de instrucciones complejas encadenadas (prompt chaining)
- Procesamiento de una ventana de diálogo de 60K tokens para historial conversacional
- Análisis de documentos legales o técnicos voluminosos (>100 páginas)
- Generación de textos estructurados con fidelidad a las instrucciones estilísticas

### Qwen3 235B
**Equipo Qwen • 235B parámetros • Contexto: 60 000 tokens**

Modelo de gran tamaño de la nueva generación Qwen3, que ofrece capacidades ampliadas para las tareas más complejas.

**Especificaciones técnicas:**
- **Velocidad**: 17 tokens por segundo
- **Consumo**: 7,84 kWh/millón de tokens
- **Licencia**: Apache 2.0
- **Ubicación**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Multilingüe` `Muy Grande`

**Casos de uso:**
- Agentes conversacionales muy avanzados con gran contexto e integración de herramientas (MCP)
- Resolución de problemas extremadamente complejos (matemáticas, código)
- Análisis y generación de documentos muy voluminosos y técnicos
- Aplicaciones multilingües (>100 idiomas) que requieren una comprensión y generación de muy alta fidelidad

### DeepSeek-R1 671B
**DeepSeek AI • 671B parámetros • Contexto: 16 000 tokens**

Modelo extremadamente grande de DeepSeek AI, diseñado para el máximo de razonamiento y generación.

**Especificaciones técnicas:**
- **Velocidad** : 12 tokens/segundo tokens/segundo
- **Consumo** : 11.11 kWh/millon de tokens
- **Licencia** : Licencia MIT
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Extremadamente Grande`

**Casos de uso:**
- Tareas de razonamiento de vanguardia
- Generación de texto de alta calidad
- Investigación y desarrollo en IA

---

### Gemma 3 27B
**Google • 27B parámetros • Contexto: 120 000 tokens**

Modelo revolucionario de Google que ofrece un equilibrio óptimo entre potencia y eficiencia, con una relación rendimiento/costo excepcional para aplicaciones profesionales exigentes.

**Especificaciones técnicas:**
- **Velocidad** : 20 tokens/segundo
- **Consumo** : 6,67 kWh/millón de tokens
- **Licencia** : Google Gemma Terms of Use
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Gran contexto`

**Casos de uso:**
- Análisis de documentos con contexto extendido hasta 120K tokens (aproximadamente 400 páginas)
- Indexación y búsqueda semántica en bases documentales voluminosas
- Procesamiento de imágenes y texto simultáneos gracias a las capacidades multimodales
- Extracción estructurada de datos a partir de PDF y documentos escaneados
- Integración con herramientas externas mediante la API de llamada a funciones

### Qwen3 30B-A3B FP8
**Equipo Qwen • 30B-A3B parámetros • Contexto: 32 000 tokens**

Modelo MoE FP8 (3B activados) de nueva generación, con modos de pensamiento híbridos y capacidades avanzadas de agente.

**Especificaciones técnicas:**
- **Velocidad**: 106 tokens por segundo ⚡
- **Consumo**: 2,88 kWh/millon de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `MoE` `Agente` `Razonamiento` `Rápido` `Multilingüe`

**Casos de uso:**
- Agentes conversacionales avanzados con integración de herramientas (MCP)
- Resolución de problemas complejos (matemáticas, código) con el modo "Thinking"
- Aplicaciones multilingües (>100 idiomas)
- Escenarios que requieren un equilibrio costo/rendimiento (MoE) en VLLM
- Diálogo de múltiples turnos atractivo y seguimiento preciso de instrucciones

### DeepSeek-R1 70B
**DeepSeek AI • 70B parámetros • Contexto: 32 000 tokens**

Modelo de 70B de DeepSeek AI

**Especificaciones técnicas:**
- **Velocidad** : 21 tokens/segundo tokens/segundo
- **Consumo** : 12,56 kWh/millón de tokens
- **Licencia** : Licencia MIT
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Large`

**Casos de uso:**
- Tareas de razonamiento de vanguardia
- Generación de texto de alta calidad
- Investigación y desarrollo en IA

---

### Qwen2.5-VL 32B
**Equipo Qwen • 32B parámetros • Contexto: 120 000 tokens**

Versión más potente de la serie Qwen2.5-VL, ofreciendo capacidades de comprensión visual y agente de vanguardia.

**Especificaciones técnicas:**
- **Velocidad**: 18 tokens/segundo
- **Consumo**: 7,41 kWh/millón de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Razonamiento` `OCR` `Localización Visual` `Gran`

**Casos de uso:**
- Análisis de documentos y diagramas muy complejos
- Agentes visuales autónomos para la navegación e interacción con interfaces gráficas (GUI)
- Tareas de localización de objetos y reconocimiento de texto de alta precisión
- Generación de descripciones ricas y detalladas a partir de imágenes complejas

### Qwen2.5-VL 72B
**Equipo Qwen • 72B parámetros • Contexto: 128 000 tokens**

Versión más potente de la serie Qwen2.5-VL, que ofrece capacidades de comprensión visual y agente de vanguardia para las tareas más exigentes.

**Especificaciones técnicas:**
- **Velocidad**: 15 tokens/seconde
- **Consumo**: 8,89 kWh/millon de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Razonamiento` `OCR` `Localización Visual` `Muy Grande`

**Casos de uso:**
- Análisis de documentos y diagramas muy complejos
- Agentes visuales autónomos para la navegación e interacción con interfaces gráficas (GUI)
- Tareas de localización de objetos y reconocimiento de texto de muy alta precisión
- Generación de descripciones ricas y detalladas a partir de imágenes muy complejas

## Modelos especializados

### Qwen3 14B
**Equipo Qwen • 14B parámetros • Contexto: 32 000 tokens**

Modelo de densidad de nueva generación Qwen3 (14B), ofreciendo rendimiento equivalente a Qwen2.5 32B con mayor eficiencia.

**Especificaciones técnicas:**
- **Velocidad:** 68 tokens/segundo ⚡
- **Consumo:** 3,88 kWh/millón de tokens
- **Licencia:** Apache 2.0
- **Localización:** FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Rápido` `Multilingüe`

**Casos de uso:**
- Tareas generales que requieren rendimiento y gran contexto
- Generación de contenido creativo y técnico
- Análisis de datos y razonamiento complejo
- Integración con herramientas externas mediante llamadas a funciones

---

### Gemma 3 12B
**Google • 12B parámetros • Contexto: 120.000 tokens**

Versión intermedia del modelo Gemma 3 que ofrece un excelente equilibrio entre rendimiento y eficiencia.

**Especificaciones técnicas:**
- **Velocidad** : 56 tokens/segundo ⚡
- **Consumo** : 4,71 kWh/millón de tokens
- **Licencia** : Google Gemma Terms of Use
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Rápido` `Gran contexto`

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
- **Velocidad** : 57 tokens/segundo ⚡
- **Consumo** : 0.58 kWh/millon de tokens 🌱
- **Licencia** : Google Gemma Terms of Use
- **Localización** : ES 🇪🇸

**Capacidades:**
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Rápido` `Compacto` `Gran Contexto` `Eficiente`

**Casos de uso:**
- Aplicaciones embebidas y edge computing con procesamiento de imágenes
- Chatbots multimodales reactivos que requieren baja latencia
- Despliegues a gran escala con capacidades visuales y textuales
- Aplicaciones móviles con análisis de imágenes y textos
- Procesamiento de consultas visuales de baja a media complejidad con alto rendimiento

### Gemma 3 1B  
**Google • 1B parámetros • Contexto: 32 000 tokens**  

Micromodelo ultra-ligero diseñado para despliegues en dispositivos con muy pocos recursos.  

**Especificaciones técnicas:**  
- **Velocidad** : 112 tokens/segundo ⚡  
- **Consumo** : 0.15 kWh/millon de tokens 🌱  
- **Licencia** : Google Gemma Terms of Use  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad  

**Etiquetas:** `Ultra-compacto` `Embebido` `Eficiente` `Rápido`  

**Casos de uso:**  
- Despliegue en dispositivos IoT y sistemas embebidos con integración de API  
- Aplicaciones que requieren inferencia local en CPU con llamadas a funciones  
- Tareas textuales básicas con respuesta inmediata y llamada a funciones  
- Asistentes compactos para aplicaciones de uso general con integración de servicios externos  
- Sistemas de control inteligente que integran múltiples APIs/servicios

### Lucie-7B-Instruct
**OpenLLM-France • 7B parámetros • Contexto: 32.000 tokens**

Modelo multilingüe de código abierto (7B), fine-tuneado desde Lucie-7B. Optimizado para el francés.

**Especificaciones técnicas:**
- **Velocidad** : 4 tokens/segundo tokens/segundo
- **Consumo** : 8,33 kWh por millón de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Francés` `Open-Source` `Eficiente`

### Mistral Small 3.1  
**Mistral AI • 24B parámetros • Contexto: 120 000 tokens**  

Modelo compacto y reactivo de Mistral AI, especialmente diseñado para ofrecer una asistencia conversacional fluida y pertinente con una velocidad de respuesta óptima.  

**Especificaciones técnicas:**  
- **Velocidad:** 35 tokens por segundo  
- **Consumo:** 3.72 kWh por millón de tokens  
- **Licencia:** Apache 2.0  
- **Localización:** FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad  

**Etiquetas:** `Visión` `Agente` `Seguridad`  

**Casos de uso:**  
- Aplicaciones conversacionales  
- Asistentes virtuales que combinan análisis de imágenes y texto (26 tokens/s)  
- Chatbots de soporte técnico con acceso a la documentación técnica  
- Herramientas de creación/edición de contenido con respuesta inmediata (blogs, correos electrónicos)  
- Despliegue en infraestructuras estándar (24B de parámetros)

### Mistral Small 3.2  
**Mistral AI • 24 mil millones de parámetros • Contexto: 120.000 tokens**  

Actualización menor de Mistral Small 3.1, mejorando el seguimiento de instrucciones, la robustez del function calling y reduciendo los errores de repetición.  

**Especificaciones técnicas:**  
- **Velocidad** : 35 tokens/segundo  
- **Consumo** : 3,72 kWh/millón de tokens  
- **Licencia** : Apache 2.0  
- **Ubicación** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad  

**Etiquetas:** `Visión` `Agente` `Seguridad` `Seguimiento de Instrucciones`  

**Casos de uso:**  
- Agentes conversacionales con un seguimiento de instrucciones mejorado  
- Integración robusta con herramientas externas mediante function calling  
- Aplicaciones que requieren alta fiabilidad para evitar repeticiones  
- Casos de uso similares a Mistral Small 3.1 con un rendimiento mejorado

### Mistral Small 3.2  
**Mistral AI • 24B parámetros • Contexto: 120 000 tokens**  

Actualización menor de Mistral Small 3.1, mejorando el seguimiento de instrucciones, la robustez del llamado a funciones y reduciendo los errores de repetición.  

**Especificaciones técnicas:**  
- **Velocidad:** 50 tokens/segundo  
- **Consumo:** 5.28 kWh/millón tokens  
- **Licencia:** Apache 2.0  
- **Localización:** FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad  

**Etiquetas:** `Visión` `Agente` `Seguridad` `Seguimiento de Instrucciones`  

**Casos de uso:**  
- Agentes conversacionales con un seguimiento de instrucciones mejorado  
- Integración robusta con herramientas externas mediante llamada a funciones  
- Aplicaciones que requieren una gran fiabilidad para evitar repeticiones  
- Casos de uso idénticos a Mistral Small 3.1 con un rendimiento mejorado

### DeepCoder  
**Agentica x Together AI • 14 mil millones de parámetros • Contexto: 32.000 tokens**  

Modelo de IA de código abierto (14 mil millones) de Together AI & Agentica, una alternativa creíble a los modelos propietarios para la generación de código.  

**Especificaciones técnicas:**  
- **Velocidad** : 64 tokens/segundo ⚡  
- **Consumo** : 4,12 kWh/millón de tokens  
- **Licencia** : Apache 2.0  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad  

**Etiquetas:** `Programación` `Razonamiento` `Open Source` `Matemáticas` `Rápido`  

**Casos de uso:**  
- Generación de código en más de 15 lenguajes con optimización de rendimiento  
- Depuración y refactorización de bases de código existentes con análisis de impacto  
- Implementación de algoritmos complejos (grafos, árboles, heurísticas)  
- Creación automática de pruebas unitarias con cobertura de código > 80%  
- Transposición de código entre lenguajes/frameworks (por ejemplo Python a JavaScript)  

---

### Granite 3.2 Vision  
**IBM • 2B parámetros • Contexto: 16 384 tokens**  

Modelo compacto revolucionario de IBM especializado en visión por computadora, capaz de analizar e interpretar directamente documentos visuales sin recurrir a tecnologías OCR intermedias.  

**Especificaciones técnicas:**  
- **Velocidad** : 48 tokens por segundo  
- **Consumo** : 0.69 kWh por millón de tokens 🌱  
- **Licencia** : Apache 2.0  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad  

**Etiquetas:** `Visión` `Seguridad` `Compacto` `Eficiente`  

**Casos de uso:**  
- Extracción de datos estructurados de facturas y formularios sin OCR  
- Análisis directo de tablas y gráficos con interpretación de tendencias  
- Lectura e interpretación de diagramas técnicos (eléctricos, mecánicos)  
- Procesamiento de documentos manuscritos con un alto índice de reconocimiento  
- Visión por computadora ligera (2B parámetros) con alta velocidad (50 tokens/s)

### Granite 3.3 8B
**IBM • 8B parámetros • Contexto: 60 000 tokens**

Modelo Granite 8B fine-tuneado por IBM para un razonamiento y seguimiento de instrucciones mejorados, con un contexto de 128k tokens.

**Especificaciones técnicas:**
- **Velocidad** : 30 tokens/segundo tokens/segundo
- **Consumo** : 1.11 kWh por millón de tokens 🌱
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `Eficiente`

**Casos de uso:**
- Tareas generales de seguimiento de instrucciones (clasificación, extracción, Preguntas y Respuestas)
- Asistentes de IA multilingües (12 idiomas)
- Procesamiento de documentos muy largos (128k tokens) para tareas de resúmenes, Preguntas y Respuestas, etc.
- Generación/completado de código con Fill-in-the-Middle
- Integración con herramientas externas mediante llamadas de función
- Razonamiento estructurado con el modo "Thinking"

### Granite 3.3 2B  
**IBM • 2B parámetros • Contexto: 120 000 tokens**  

Modelo Granite 2B fine-tunado por IBM, optimizado para el razonamiento y el seguimiento de instrucciones, con un contexto de 128k tokens.  

**Especificaciones técnicas:**  
- **Velocidad** : 45 tokens/segundo tokens/segundo  
- **Consumo** : 0.74 kWh/millon de tokens 🌱  
- **Licencia** : Apache 2.0  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad  

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `Eficiente`  

**Casos de uso:**  
- Despliegues ligeros con gran contexto (128k tokens)  
- Tareas generales de seguimiento de instrucciones en recursos limitados  
- Asistentes de IA multilingües compactos  
- Procesamiento de documentos largos en dispositivos menos potentes  
- Generación/completación de código FIM en estaciones de trabajo estándar  

---

### Magistral 24B
**Mistral AI • 24B parámetros • Contexto: 40 000 tokens**

El primer modelo de razonamiento de Mistral AI, excelente en el razonamiento específico del dominio, transparente y multilingüe.

**Especificaciones técnicas:**
- **Velocidad** : 25 tokens/segundo tokens/segundo
- **Consumo** : 5,33 kWh/millon de tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Razonamiento` `Multilingüe`

**Casos de uso:**
- Estrategia y operaciones comerciales (modelado de riesgos)
- Industrias reguladas (derecho, finanzas) con razonamiento trazable
- Ingeniería de software (planificación de proyectos, arquitectura)
- Creación de contenido y comunicación (redacción creativa, narración)

### Granite 3.1 MoE
**IBM • 3 mil millones de parámetros • Contexto: 32.000 tokens**

Modelo innovador de IBM que utiliza la arquitectura Mixture-of-Experts (MoE) para ofrecer un rendimiento excepcional mientras optimiza drásticamente el uso de los recursos computacionales.

**Especificaciones técnicas:**
- **Velocidad** : 74 tokens/segundo tokens/segundo ⚡
- **Consumo** : 0,45 kWh/millon de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Seguridad` `Rápido` `MoE` `Eficiencia` `Eficiente`

**Casos de uso:**
- Aplicaciones generales con costo de inferencia optimizado (42 tokens/segundo)
- Procesamiento de documentos en entornos CPU con uso de RAM limitado
- Análisis especializados con activación dinámica de las partes pertinentes del modelo
- Despliegues de alta densidad con bajo consumo energético por inferencia
- Procesamiento paralelo de varios tipos de consultas con especialización MoE

### cogito:14b  
**Deep Cogito • 14B parámetros • Contexto: 32 000 tokens**  

Modelo de Deep Cogito especialmente diseñado para destacar en tareas de razonamiento profundo y comprensión contextual sutil, ideal para aplicaciones analíticas sofisticadas.  

**Especificaciones técnicas:**  
- **Velocidad:** 60 tokens por segundo ⚡  
- **Consumo:** 4,4 kWh/millon de tokens  
- **Licencia:** Licencia Community LLAMA 3.2  
- **Ubicación:** FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad  

**Etiquetas:** `Agente` `Razonamiento` `Comprensión` `Análisis` `Rápido`  

**Casos de uso:**  
- Análisis semántico de textos con identificación de implicaciones implícitas  
- Razonamiento causal estructurado con identificación de relaciones causa-efecto  
- Síntesis de documentos complejos con extracción de información clave  
- Sistemas de preguntas-respuestas precisos sobre corpus documentales especializados  
- Análisis argumentativo con evaluación de la solidez de los razonamientos

### Cogito 32B
**Deep Cogito • 32B parámetros • Contexto: 32 000 tokens**

Versión avanzada del modelo Cogito que ofrece capacidades de razonamiento y análisis considerablemente ampliadas, diseñadas para las aplicaciones más exigentes en inteligencia artificial analítica.

**Especificaciones técnicas:**
- **Velocidad** : 32 tokens/segundo tokens/segundo
- **Consumo** : 8,25 kWh/millón de tokens
- **Licencia** : Licencia Comunitaria LLAMA 3.2
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Comprensión` `Análisis`

**Casos de uso:**
- Análisis de escenarios multi-factoriales con evaluación probabilística de los resultados
- Resolución de problemas científicos con demostración formal de los pasos
- Aplicaciones de alta criticidad que requieren precisión y verificabilidad de los resultados
- Sistemas expertos en áreas especializadas (jurídico, médico, técnico)
- Análisis con razonamiento multi-etapas y explicabilidad completa de las conclusiones

### Qwen3 32B
**Equipo Qwen • 32B parámetros • Contexto: 40 000 tokens**

Modelo de la nueva generación Qwen3, con capacidades avanzadas en razonamiento, código y agentes, con un contexto ampliado.

**Especificaciones técnicas:**
- **Velocidad** : 18 tokens por segundo
- **Consumo** : 7,41 kWh/millón de tokens
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Multilingüe` `Gran contexto`

**Casos de uso:**
- Agentes conversacionales avanzados con gran contexto e integración de herramientas (MCP)
- Resolución de problemas complejos (matemáticas, código) con modo "Pensando"
- Análisis y generación de documentos voluminosos
- Aplicaciones multilingües (>100 idiomas) que requieren una comprensión profunda

### QwQ-32B
**Equipo Qwen • 32B parámetros • Contexto: 32 000 tokens**

Modelo de 32 mil millones de parámetros mejorado mediante aprendizaje por refuerzo (RL) para destacar en razonamiento, codificación, matemáticas y tareas de agente.

**Especificaciones técnicas:**
- **Velocidad**: 35 tokens/segundo
- **Consumo**: 7,54 kWh/millón de tokens
- **Licencia**: Apache 2.0
- **Ubicación**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Codificación` `Matemáticas`

**Casos de uso:**
- Resolución de problemas complejos que requieren razonamiento y uso de herramientas
- Generación y ejecución de código con verificación de resultados
- Tareas matemáticas avanzadas con verificación de precisión
- Aplicaciones de agente capaces de interactuar con el entorno
- Seguimiento de instrucciones mejorado y alineación con las preferencias humanas

### DeepSeek-R1 14B
**DeepSeek AI • 14B parámetros • Contexto: 32 000 tokens**

Versión compacta y eficiente del modelo DeepSeek-R1, que ofrece un excelente equilibrio entre rendimiento y ligereza para despliegues que requieren flexibilidad y reactividad.

**Especificaciones técnicas:**
- **Velocidad**: 62 tokens por segundo ⚡
- **Consumo**: 4,26 kWh/millon de tokens
- **Licencia**: MIT
- **Localización**: FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Compacto` `Versátil` `Rápido`

**Casos de uso:**
- Aplicaciones generales con necesidades de inferencia rápida (44 tokens/s)
- Despliegues en servidores estándar sin GPU especializada (14B parámetros)
- Procesamiento de texto con análisis contextual y tiempos de respuesta rápidos
- Despliegue en edge computing con inferencia local optimizada
- Prototipo rápido de aplicaciones IA con tiempos de iteración cortos

### DeepSeek-R1 32B
**DeepSeek AI • 32B parámetros • Contexto: 32 000 tokens**

Versión intermedia del modelo DeepSeek-R1 que ofrece un equilibrio estratégico entre las capacidades avanzadas de la versión 70B y la eficiencia de la versión 14B, para una versatilidad y rendimiento óptimo.

**Especificaciones técnicas:**
- **Velocidad**: 33 tokens/segundo tokens/segundo
- **Consumo**: 7.99 kWh/millón tokens
- **Licencia**: MIT
- **Ubicación**: FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Versátil`

**Casos de uso:**
- Aplicaciones que requieren un buen equilibrio entre potencia y costo (32B parámetros)
- Procesamiento de texto profesional con análisis de sutilezas semánticas
- Generación automática de informes estructurados a partir de datos brutos
- Aplicaciones que combinan análisis de datos y generación de contenido
- Asistentes especializados para sectores técnicos (jurídico, médico, técnico)

### Cogito 3B
**Deep Cogito • 3B parámetros • Contexto: 32 000 tokens**

Versión compacta del modelo Cogito, optimizada para el razonamiento en dispositivos con recursos limitados.

**Especificaciones técnicas:**
- **Velocidad** : 55 tokens por segundo ⚡
- **Consumo** : 0.61 kWh/millon de tokens 🌱
- **Licencia** : Licencia Comunitaria LLAMA 3.2
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Compacto` `Embebido` `Eficiente` `Rápido`

### Granite Embedding
**IBM • 278M parámetros • Contexto: 512 tokens**

Modelo de embedding ultra-ligero de IBM para búsqueda semántica y clasificación.

**Especificaciones técnicas:**
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Embedding` `Compacto` `Semántico` `Eficiente`

### Granite 3 Guardian 2B  
**IBM • 2B parámetros • Contexto: 8192 tokens**  

Modelo compacto de IBM especializado en seguridad y cumplimiento, detectando riesgos y contenidos inapropiados.  

**Especificaciones técnicas:**  
- **Licencia** : Apache 2.0  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad  

**Etiquetas :** `Seguridad` `Cumplimiento` `Compacto` `Filtrado` `Eficiente`

### Granite 3 Guardian 8B
**IBM • 8B parámetros • Contexto: 32 000 tokens**

Modelo de IBM especializado en seguridad y cumplimiento, ofreciendo capacidades avanzadas de detección de riesgos.

**Especificaciones técnicas:**
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Seguridad` `Cumplimiento` `Filtrado`

### Qwen 2.5 0.5B  
**Equipo Qwen • 0.5B parámetros • Contexto: 32 000 tokens**  

Micromodelo ultra-ligero de la familia Qwen 2.5, diseñado para una máxima eficiencia en dispositivos limitados.  

**Especificaciones técnicas:**  
- **Velocidad** : 162 tokens/segundo ⚡  
- **Consumo** : 0.1 kWh/millon de tokens 🌱  
- **Licencia** : Licencia MIT  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad  

**Etiquetas:** `Ultra-compacto` `Rápido` `Embebido` `Eficiente`

### Qwen 2.5 1.5B
**Equipo Qwen • 1.5B parámetros • Contexto: 32 000 tokens**

Modelo muy compacto de la familia Qwen 2.5, ofreciendo un buen equilibrio entre rendimiento/tamaño para despliegues ligeros.

**Especificaciones técnicas:**
- **Velocidad** : 102 tokens/segundo ⚡
- **Consumo** : 0.33 kWh/millon de tokens 🌱
- **Licencia** : Licencia MIT
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Embebido` `Eficiente`

### Qwen 2.5 14B
**Equipo Qwen • 14B parámetros • Contexto: 32 000 tokens**

Modelo versátil de tamaño medio de la familia Qwen 2.5, buen equilibrio rendimiento/recursos.

**Especificaciones técnicas:**
- **Velocidad**: 61 tokens/segundo ⚡
- **Consumo**: 4,33 kWh/millon de tokens
- **Licencia**: Licencia MIT
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Versátil` `Multilingüe` `Rápido`

### Qwen 2.5 32B
**Equipo Qwen • 32B parámetros • Contexto: 32 000 tokens**

Modelo potente de la familia Qwen 2.5, que ofrece capacidades avanzadas en comprensión y generación.

**Especificaciones técnicas:**
- **Velocidad**: 31 tokens/seconde tokens/seconde
- **Consumo**: 8,51 kWh/millon de tokens
- **Licencia**: licencia MIT
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Versátil` `Multilingüe` `Razonamiento`

### Qwen 2.5 3B
**Equipo Qwen • 3B parámetros • Contexto: 32 000 tokens**

Modelo compacto y eficiente de la familia Qwen 2.5, adaptado a tareas generales en recursos limitados.

**Especificaciones técnicas:**
- **Velocidad**: 64 tokens por segundo tokens por segundo ⚡
- **Consumo**: 0.52 kWh/millón de tokens 🌱
- **Licencia**: licencia MIT
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Versátil` `Eficiente`

### Qwen3 0.6b  
**Equipo Qwen • 0.6B parámetros • Contexto: 32 000 tokens**  

Modelo compacto y eficiente de la familia Qwen3, adecuado para tareas generales en recursos limitados.  

**Especificaciones técnicas:**  
- **Velocidad** : 112 tokens/segundo tokens/segundo ⚡  
- **Consumo** : 0.15 kWh/millon de tokens 🌱  
- **Licencia** : Apache 2.0  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad  

**Etiquetas:** `Compacto` `Rápido` `Polivalente` `Eficiente`

### Qwen3 1.7b
**Equipo Qwen • 1.7B parámetros • Contexto: 32 000 tokens**

Modelo muy compacto de la familia Qwen3, que ofrece un buen equilibrio rendimiento/tamaño para despliegues ligeros.

**Especificaciones técnicas:**
- **Velocidad** : 88 tokens/seconde ⚡
- **Consumo** : 0.38 kWh/millon de tokens 🌱
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Embebido` `Eficiente`

### Qwen3 4b
**Equipo Qwen • 4B parámetros • Contexto: 32.000 tokens**

Modelo compacto de la familia Qwen3 que ofrece excelentes rendimientos en un formato ligero y económico.

**Especificaciones técnicas:**
- **Velocidad** : 49 tokens por segundo
- **Consumo** : 0.68 kWh/millon de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Eficiente`

### Qwen3 8b
**Equipo Qwen • 8B parámetros • Contexto: 32.000 tokens**

Modelo Qwen3 8B que ofrece un buen equilibrio entre rendimiento y eficiencia para tareas generales.

**Especificaciones técnicas:**
- **Velocidad** : 33 tokens por segundo
- **Consumo** : 1,01 kWh por millón de tokens 🌱
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Agente` `Multilingüe` `Eficiente`

### Qwen2.5-VL 3B
**Equipo Qwen • 3.8B parámetros • Contexto: 128 000 tokens**

Modelo Vision-Lenguaje compacto, solución eficiente para la IA en el borde (edge AI).

**Especificaciones técnicas:**
- **Velocidad**: 65 tokens/segundo ⚡
- **Consumo**: 0.51 kWh/millon de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Razonamiento` `Rápido` `Eficiente` `OCR` `Localización Visual` `Edge AI`

### Qwen2.5-VL 7B
**Equipo Qwen • 7B (8.3B) parámetros • Contexto: 128 000 tokens**

Modelo de Visión-Lenguaje eficiente, que supera a GPT-4o-mini en ciertas tareas.

**Especificaciones técnicas:**
- **Velocidad**: 35 tokens/segundo
- **Consumo**: 0.95 kWh/millon de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Razonamiento` `Eficiente` `OCR` `Localización Visual`

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B parámetros • Contexto: 16 384 tokens**

Modelo de lenguaje especializado para la ciberseguridad, optimizado para la eficiencia.

**Especificaciones técnicas:**
- **Velocidad** : 21 tokens por segundo
- **Consumo** : 1.59 kWh por millón de tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Seguridad` `Compacto`

### devstral 24B
**Mistral AI & All Hands AI • 24B parámetros • Contexto: 120.000 tokens**

Devstral es un LLM agente para tareas de ingeniería de software.

**Especificaciones técnicas:**
- **Velocidad** : 45 tokens por segundo
- **Consumo** : 5,86 kWh/millon de tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Programación` `Open Source` `Gran Contexto`

**Casos de uso:**
- Exploración y modificación de bases de código
- Agente
- Europeo

### Cogito 8B
**Deep Cogito • 8B parámetros • Contexto: 32 000 tokens**

Modelo de tamaño intermedio de la familia Cogito, ofreciendo un buen equilibrio entre las capacidades de razonamiento y la eficiencia.

**Especificaciones técnicas:**
- **Velocidad** : 30 tokens por segundo
- **Consumo** : 1.11 kWh/millón de tokens 🌱
- **Licencia** : Licencia Comunitaria LLAMA 3.2
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Versátil` `Eficiente`

### Llama 3.1 8B
**Meta • 8B parámetros • Contexto: 32 000 tokens**

Modelo base de la familia Llama 3.1, ofreciendo un buen rendimiento para su tamaño.

**Especificaciones técnicas:**
- **Velocidad** : 31 tokens por segundo
- **Consumo** : 1.08 kWh por millón de tokens 🌱
- **Licencia** : Licencia Community de Llama 3.1
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Polivalente` `Eficiente`

### Phi-4 Reasoning 14B
**Microsoft • 14B parámetros • Contexto: 32 000 tokens**

Modelo de la familia Phi de Microsoft, especializado en razonamiento complejo y matemáticas.

**Especificaciones técnicas:**
- **Velocidad** : 71 tokens/segundo ⚡
- **Consumo** : 3,71 kWh/millon de tokens
- **Licencia** : Licencia MIT
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Matemáticas` `Programación` `Rápido`

## Casos de uso recomendados

### Diálogo multilingüe
Chatbots y asistentes capaces de comunicarse en varios idiomas con detección automática, mantenimiento del contexto a lo largo de toda la conversación y comprensión de las especificidades lingüísticas

**Modelos recomendados:**
- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Análisis de documentos largos
Procesamiento de documentos voluminosos (>100 páginas) con mantenimiento del contexto en todo el texto, extracción de información clave, generación de resúmenes pertinentes y respuesta a preguntas específicas sobre el contenido

**Modelos recomendados:**
- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programación y desarrollo
Generación y optimización de código en múltiples lenguajes, depuración, refactoring, desarrollo de funcionalidades completas, comprensión de implementaciones algorítmicas complejas y creación de pruebas unitarias

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
- Magistral 24b
- Foundation-Sec-8B

### Despliegues ligeros y embebidos
Aplicaciones que requieren una huella mínima en recursos, despliegue en dispositivos con capacidad limitada, inferencia en tiempo real en CPU estándar e integración en sistemas embebidos o IoT

**Modelos recomendados:**
- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3