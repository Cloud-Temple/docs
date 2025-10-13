

---
title: Catálogo de Modelos LLMaaS
sidebar_position: 2
---



# Catálogo de Modelos LLM como servicio



## Visión general

Cloud Temple LLMaaS propone **51 modelos de lenguaje grandes** cuidadosamente seleccionados y optimizados para responder a las exigencias más estrictas de SecNumCloud. Nuestro catálogo cubre todo el espectro, desde micromodelos ultraeficientes hasta modelos extremadamente grandes.



### Estadísticas Generales

| Métrica | Valor |
|----------|--------|
| **Número total de modelos** | 51 modelos |
| **Contexto mínimo** | 8 192 tokens |
| **Contexto máximo** | 262 144 tokens |
| **Conformidad** | SecNumCloud ✅ HDS ✅ Soberanía ✅ C5 ❌ |
| **Localización** | 100% Francia 🇫🇷 |



### Tarifas

| Tipo de uso | Precio |
|------------|--------|
| **Tokens de entrada** | 0.9€ / millón de tokens |
| **Tokens de salida** | 4€ / millón de tokens |
| **Razonamiento avanzado** | 21€ / millón de tokens |



## Modelos de Gran Tamaño



### gpt-oss:120b
**OpenAI • 120B parámetros • Contexto : 120 000 tokens**

Modelo de lenguaje de peso abierto de vanguardia de OpenAI, ofreciendo buenas prestaciones con una licencia flexible Apache 2.0.

**Especificaciones técnicas :**
- **Velocidad** : 38 tokens por segundo
- **Consumo** : 3,51 kWh/millón de tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades :**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `MoE` `Agente` `Razonamiento` `Open-Source` `Muy Grande`

**Casos de uso :**
- Agentes conversacionales avanzados con razonamiento complejo e integración de herramientas.
- Aplicaciones que requieren transparencia total del proceso de razonamiento (chain-of-thought).
- Escenarios comerciales que requieren una licencia permisiva (Apache 2.0).
- Fine-tuning para tareas especializadas que requieren un modelo base potente.



### llama3.3:70b
**Meta • 70 mil millones de parámetros • Contexto: 120.000 tokens**

Modelo multilingüe de vanguardia desarrollado por Meta, diseñado para destacar en el diálogo natural, el razonamiento complejo y la comprensión sutil de las instrucciones.

**Especificaciones técnicas:**
- **Velocidad** : 15 tokens/segundo
- **Consumo** : 8,89 kWh/millón de tokens
- **Licencia** : Licencia LLAMA 3.3 Community
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Diálogo` `Multilingüe`

**Casos de uso:**
- Chatbots multilingües que admiten 8 idiomas simultáneamente
- Ejecución de instrucciones complejas encadenadas (prompt chaining)
- Procesamiento de una ventana de diálogo de 60.000 tokens para historial conversacional
- Análisis de documentos jurídicos o técnicos voluminosos (>100 páginas)
- Generación de textos estructurados con fidelidad a las instrucciones estilísticas



### qwen3:235b
**Equipo Qwen • 235B parámetros • Contexto: 60 000 tokens**

Modelo muy grande de la nueva generación Qwen3, ofreciendo capacidades ampliadas para las tareas más complejas.

**Especificaciones técnicas:**
- **Velocidad**: 17 tokens/segundo ⚡
- **Consumo**: 7,84 kWh/millon de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Multilingüe` `Muy Grande`

**Casos de uso:**
- Agentes conversacionales muy avanzados con gran contexto e integración de herramientas (MCP)
- Resolución de problemas extremadamente complejos (matemáticas, código)
- Análisis y generación de documentos muy voluminosos y técnicos
- Aplicaciones multilingües (>100 idiomas) que requieren una comprensión y generación de muy alta fidelidad



### deepseek-r1:671b
**DeepSeek AI • 671B parámetros • Contexto: 16 000 tokens**

Modelo extremadamente grande de DeepSeek AI, diseñado para el máximo de razonamiento y generación.

**Especificaciones técnicas:**
- **Velocidad** : 12 tokens por segundo
- **Consumo** : 11.11 kWh por millón de tokens
- **Licencia** : Licencia MIT
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Extremadamente Grande`

**Casos de uso:**
- Tareas de razonamiento de vanguardia
- Generación de texto de alta calidad
- Investigación y desarrollo en IA

---



### gemma3:27b
**Google • 27B parámetros • Contexto: 120 000 tokens**

Modelo revolucionario de Google que ofrece un equilibrio óptimo entre potencia y eficiencia, con una relación rendimiento/costo excepcional para aplicaciones profesionales exigentes.

**Especificaciones técnicas:**
- **Velocidad** : 20 tokens/segundo
- **Consumo** : 6,67 kWh/millón de tokens
- **Licencia** : Google Gemma Terms of Use
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Gran contexto`

**Casos de uso:**
- Análisis de documentos con contexto extendido hasta 120K tokens (aproximadamente 400 páginas)
- Indexación y búsqueda semántica en bases documentales voluminosas
- Procesamiento de imágenes y texto de forma simultánea gracias a las capacidades multimodales
- Extracción estructurada de datos a partir de PDF y documentos escaneados
- Integración con herramientas externas a través de la API function calling



### qwen3-coder:30b
**Equipo Qwen • 30B parámetros • Contexto: 250 000 tokens**

Modelo MoE optimizado para tareas de ingeniería de software, con un contexto muy largo.

**Especificaciones técnicas:**
- **Velocidad:** 80 tokens/segundo ⚡
- **Consumo:** 3,3 kWh/millon de tokens
- **Licencia:** Apache 2.0
- **Ubicación:** FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Programación` `Gran contexto` `MoE`

**Casos de uso:**
- Agentes de ingeniería de software para explorar y modificar bases de código
- Generación de código complejo con comprensión a escala de repositorio (repository-scale)
- Tareas de razonamiento en contextos extensos
- Mejora de código mediante aprendizaje por refuerzo



### qwen3-2507-think:30b-a3b
**Equipo Qwen • 30 mil millones de parámetros • Contexto: 120 000 tokens**

Modelo avanzado de la familia Qwen3, optimizado para el razonamiento profundo y los contextos extensos.

**Especificaciones técnicas:**
- **Velocidad** : 80 tokens por segundo ⚡
- **Consumo** : 3,3 kWh/millón de tokens
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Gran contexto`

**Casos de uso:**
- Análisis de documentos muy grandes con razonamiento complejo.
- Agentes conversacionales con un historial de conversación extenso.
- Tareas de Preguntas y Respuestas en grandes corpora de texto.
- Integración con herramientas externas mediante llamadas a funciones en grandes contextos.



### qwen3-2507:30b-a3b
**Equipo Qwen • 30B parámetros • Contexto: 250 000 tokens**

Versión mejorada del modo sin pensamiento de Qwen3-30B, con capacidades generales, una cobertura de conocimientos y un alineamiento del usuario mejorados.

**Especificaciones técnicas:**
- **Velocidad:** 90 tokens/segundo ⚡
- **Consumo:** 2,16 kWh/millón de tokens
- **Licencia:** Apache 2.0
- **Localización:** FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Gran Contexto` `MoE` `Multilingüe`

**Casos de uso:**
- Tareas complejas que requieren un seguimiento de instrucciones preciso y un razonamiento lógico.
- Aplicaciones multilingües con una gran cobertura de conocimientos.
- Generación de texto de alta calidad para tareas abiertas y subjetivas.
- Análisis de documentos muy voluminosos gracias al contexto de 250k tokens.



### qwen3:30b-a3b
**Equipo Qwen • 30B parámetros • Contexto: 32 000 tokens**

Última generación de modelos Qwen, que ofrece mejoras significativas en cuanto a datos de entrenamiento, arquitectura y optimización.

**Especificaciones técnicas:**
- **Velocidad**: 50 tokens por segundo
- **Consumo**: 3,89 kWh/millón de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Programación` `Multilingüe` `MoE`

**Casos de uso:**
- Tareas de razonamiento complejo y generación de código.
- Aplicaciones multilingües que requieren una amplia cobertura lingüística.
- Escenarios que requieren un buen equilibrio entre rendimiento y eficiencia de recursos gracias a la arquitectura MoE.



### deepseek-r1:70b
**DeepSeek AI • 70B parámetros • Contexto: 32 000 tokens**

Modelo de 70B de DeepSeek AI

**Especificaciones técnicas:**
- **Velocidad** : 21 tokens/segundo tokens/segundo
- **Consumo** : 12,56 kWh/millón tokens
- **Licencia** : Licencia MIT
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Grande`

**Casos de uso:**
- Tareas de razonamiento de vanguardia
- Generación de texto de alta calidad
- Investigación y desarrollo en IA

---



### qwen2.5vl:32b
**Equipo Qwen • 32 mil millones de parámetros • Contexto: 120 000 tokens**

Versión más potente de la serie Qwen2.5-VL, ofreciendo capacidades de comprensión visual y de agente de vanguardia.

**Especificaciones técnicas:**
- **Velocidad**: 18 tokens por segundo tokens por segundo
- **Consumo**: 7,41 kWh/millón de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Razonamiento` `OCR` `Localización Visual` `Grande`

**Casos de uso:**
- Análisis de documentos y diagramas muy complejos
- Agentes visuales autónomos para la navegación e interacción con interfaces gráficas (GUI)
- Tareas de localización de objetos y reconocimiento de texto de alta precisión
- Generación de descripciones ricas y detalladas a partir de imágenes complejas



### qwen2.5vl:72b
**Equipo Qwen • 72B parámetros • Contexto: 128 000 tokens**

Versión más potente de la serie Qwen2.5-VL, ofreciendo capacidades de comprensión visual y agente de vanguardia para tareas más exigentes.

**Especificaciones técnicas:**
- **Velocidad**: 15 tokens/segundo
- **Consumo**: 8,89 kWh/millón de tokens
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



## Modelos Especializados



### embeddinggemma:300m
**Google • 300M parámetros • Contexto: 2 048 tokens**

Modelo de embedding de vanguardia de Google, optimizado para su tamaño, ideal para tareas de búsqueda y recuperación semántica.

**Especificaciones técnicas :**
- **Licencia** : Google Gemma Terms of Use
- **Localización** : FR 🇫🇷

**Capacidades :**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Embedding` `Compacto` `Semántico` `Eficiente` `Multilingüe`

**Casos de uso :**
- Búsqueda y recuperación de información (Retrieval)
- Clasificación y agrupamiento de documentos
- Búsqueda de similitud semántica
- Despliegue en dispositivos con recursos limitados (móvil, portátil)



### gpt-oss:20b
**OpenAI • 20B parámetros • Contexto: 120 000 tokens**

Modelo de lenguaje con pesos abiertos de OpenAI, optimizado para la eficiencia y el despliegue en hardware de uso general.

**Especificaciones técnicas:**
- **Velocidad** : 57 tokens por segundo ⚡
- **Consumo** : 2,34 kWh por millón de tokens
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `MoE` `Agente` `Razonamiento` `Open Source` `Compacto` `Rápido`

**Casos de uso:**
- Despliegues en dispositivos con recursos limitados (edge devices) o servidores de bajo costo.
- Aplicaciones que requieren inferencia rápida con buenas capacidades de razonamiento.
- Casos de uso agentes con llamada de funciones, navegación web y ejecución de código.
- Fine-tuning para tareas especializadas en hardware de uso general.



### qwen3:14b
**Equipo Qwen • 14B parámetros • Contexto: 32 000 tokens**

Modelo de red densa de nueva generación Qwen3 (14B), que ofrece un rendimiento equivalente al Qwen2.5 32B con una mayor eficiencia.

**Especificaciones técnicas:**
- **Velocidad**: 40 tokens por segundo ⚡
- **Consumo**: 3,33 kWh/millon de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Rápido` `Multilingüe`

**Casos de uso:**
- Tareas generales que requieren rendimiento y gran contexto
- Generación de contenido creativo y técnico
- Análisis de datos y razonamiento complejo
- Integración con herramientas externas mediante llamadas a funciones

---



### gemma3:12b
**Google • 12B parámetros • Contexto: 120 000 tokens**

Versión intermedia del modelo Gemma 3 que ofrece un excelente equilibrio entre rendimiento y eficiencia.

**Especificaciones técnicas:**
- **Velocidad** : 56 tokens/segundo ⚡
- **Consumo** : 4,71 kWh/millon de tokens
- **Licencia** : Google Gemma Terms of Use
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Rápido` `Gran contexto`

**Casos de uso:**
- Aplicaciones multimodales con limitaciones de recursos moderadas
- Procesamiento de documentos con contexto estándar (hasta 100 páginas)
- Generación de contenido textual y análisis de imágenes combinados
- Despliegues en GPU estándar sin infraestructura especializada
- Chatbots avanzados con capacidades visuales y textuales integradas



### gemma3:4b
**Google • 4B parámetros • Contexto: 120 000 tokens**

Modelo compacto de Google que ofrece excelentes rendimientos en un formato ligero y económico.

**Especificaciones técnicas:**
- **Velocidad** : 57 tokens/segundo ⚡
- **Consumo** : 0.58 kWh/millon de tokens 🌱
- **Licencia** : Google Gemma Terms of Use
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Rápido` `Compacto` `Gran contexto` `Eficiente`

**Casos de uso:**
- Aplicaciones embebidas y edge computing con procesamiento de imágenes
- Chatbots multimodales reactivos que requieren baja latencia
- Despliegues a gran escala con capacidades visuales y textuales
- Aplicaciones móviles con análisis de imágenes y textos
- Procesamiento de consultas visuales de baja a media complejidad con alta performance



### gemma3:1b  
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
- Despliegue en dispositivos IoT y sistemas embebidos con integración API  
- Aplicaciones que requieren inferencia local en CPU con llamadas a funciones  
- Tareas textuales básicas con respuesta inmediata y llamada a funciones  
- Asistentes compactos para aplicaciones de uso general con integración de servicios externos  
- Sistemas de control inteligente que integran múltiples APIs/servicios



### lucie-instruct:7b
**OpenLLM-France • 7B parámetros • Contexto: 32 000 tokens**

Modelo causal multilingüe de código abierto (7B), ajustado finamente desde Lucie-7B. Optimizado para el francés.

**Especificaciones técnicas :**
- **Velocidad** : 4 tokens/segundo tokens/segundo
- **Consumo** : 8,33 kWh/millón de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades :**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Francés` `Open-Source` `Eficiente`



### mistral-small3.1:24b
**Mistral AI • 24B parámetros • Contexto: 120 000 tokens**

Modelo compacto y reactivo de Mistral AI, especialmente diseñado para ofrecer una asistencia conversacional fluida y pertinente con una velocidad de respuesta óptima.

**Especificaciones técnicas:**
- **Velocidad**: 35 tokens/segundo tokens/segundo
- **Consumo**: 3,72 kWh/millón tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas:** `Visión` `Agente` `Seguridad`

**Casos de uso:**
- Aplicaciones conversacionales
- Asistentes virtuales que combinan análisis de imágenes y texto (26 tokens/s)
- Chatbots de soporte técnico con acceso a la documentación técnica
- Herramientas de creación/edición de contenido con respuesta inmediata (blogs, correos electrónicos)
- Despliegue en infraestructuras estándar (24B de parámetros)



### mistral-small3.2:24b
**Mistral AI • 24B parámetros • Contexto: 120 000 tokens**

Actualización menor de Mistral Small 3.1, mejorando el seguimiento de instrucciones, la robustez del function calling y reduciendo los errores de repetición.

**Especificaciones técnicas:**
- **Velocidad** : 35 tokens/seconde tokens/seconde
- **Consumo** : 3.72 kWh/millon tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas:** `Visión` `Agente` `Seguridad` `Seguimiento de Instrucciones`

**Casos de uso:**
- Agentes conversacionales con un seguimiento de instrucciones mejorado
- Integración robusta con herramientas externas mediante function calling
- Aplicaciones que requieren una gran fiabilidad para evitar repeticiones
- Casos de uso idénticos a Mistral Small 3.1 con mejores rendimientos



### deepcoder:14b
**Agentica x Together AI • 14B parámetros • Contexto: 32 000 tokens**

Modelo de IA de código abierto (14B) de Together AI & Agentica, alternativa creíble a los modelos propietarios para la generación de código.

**Especificaciones técnicas:**
- **Velocidad** : 64 tokens por segundo ⚡
- **Consumo** : 4.12 kWh por millón de tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Programación` `Razonamiento` `Open-Source` `Matemáticas` `Rápido`

**Casos de uso:**
- Generación de código en más de 15 lenguajes con optimización de rendimiento
- Depuración y refactorización de bases de código existentes con análisis de impacto
- Implementación de algoritmos complejos (grafos, árboles, heurísticas)
- Creación automática de pruebas unitarias con cobertura de código > 80%
- Transposición de código entre lenguajes/frameworks (por ejemplo Python a JavaScript)



### granite3.2-vision:2b
**IBM • 2B parámetros • Contexto: 16.384 tokens**

Modelo compacto revolucionario de IBM especializado en visión por computadora, capaz de analizar y comprender directamente los documentos visuales sin recurrir a tecnologías OCR intermedias.

**Especificaciones técnicas:**
- **Velocidad**: 48 tokens/seconde tokens/seconde
- **Consumo**: 0.69 kWh/millon de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas:** `Visión` `Seguridad` `Compacto` `Eficiente`

**Casos de uso:**
- Extracción de datos estructurados de facturas y formularios sin OCR
- Análisis directo de tablas y gráficos con interpretación de tendencias
- Lectura e interpretación de diagramas técnicos (eléctricos, mecánicos)
- Procesamiento de documentos manuscritos con alto índice de reconocimiento
- Visión por computadora ligera (2B parámetros) con velocidad elevada (50 tokens/s)



### granite3.3:8b
**IBM • 8B parámetros • Contexto: 60 000 tokens**

Modelo Granite 8B fine-tunado por IBM para un razonamiento y seguimiento de instrucciones mejorados, con un contexto de 128k tokens.

**Especificaciones técnicas:**
- **Velocidad** : 30 tokens/segundo tokens/segundo
- **Consumo** : 1,11 kWh/millón de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `Eficiente`

**Casos de uso:**
- Tareas generales de seguimiento de instrucciones (clasificación, extracción, Preguntas y Respuestas)
- Asistentes de IA multilingües (12 idiomas)
- Procesamiento de documentos muy largos (128k tokens) para tareas de resúmenes, Preguntas y Respuestas, etc.
- Generación/completación de código con Fill-in-the-Middle
- Integración con herramientas externas mediante llamadas a funciones
- Razonamiento estructurado con el modo "Thinking"



### granite3.3:2b
**IBM • 2 mil millones de parámetros • Contexto: 120 000 tokens**

Modelo Granite 2B ajustado por IBM, optimizado para razonamiento y seguimiento de instrucciones, con un contexto de 128k tokens.

**Especificaciones técnicas:**
- **Velocidad** : 45 tokens/segundo
- **Consumo** : 0.74 kWh/millon de tokens 🌱
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `Eficiente`

**Casos de uso:**
- Despliegues ligeros con gran contexto (128k tokens)
- Tareas generales de seguimiento de instrucciones en recursos limitados
- Asistentes IA multilingües compactos
- Procesamiento de documentos largos en dispositivos menos potentes
- Generación/completación de código FIM en estaciones de trabajo estándar



### magistral:24b
**Mistral AI • 24B parámetros • Contexto: 40 000 tokens**

El primer modelo de razonamiento de Mistral AI, excelente en razonamiento específico al dominio, transparente y multilingüe.

**Especificaciones técnicas:**
- **Velocidad** : 25 tokens/segundo tokens/segundo
- **Consumo** : 5,33 kWh/millon de tokens
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Razonamiento` `Multilingüe`

**Casos de uso:**
- Estrategia y operaciones comerciales (modelado de riesgos)
- Industrias reguladas (derecho, finanzas) con razonamiento trazable
- Ingeniería de software (planificación de proyectos, arquitectura)
- Creación de contenido y comunicación (redacción creativa, narración)



### granite3.1-moe:3b  
**IBM • 3 mil millones de parámetros • Contexto: 32 000 tokens**  

Modelo innovador de IBM que utiliza la arquitectura Mezcla de Expertos (MoE) para ofrecer un rendimiento excepcional mientras optimiza drásticamente el uso de los recursos computacionales.  

**Especificaciones técnicas:**  
- **Velocidad** : 74 tokens/segundo ⚡  
- **Consumo** : 0.45 kWh/millon de tokens 🌱  
- **Licencia** : Apache 2.0  
- **Localización** : FR 🇫🇷  

**Capacidades:**  
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad  

**Etiquetas:** `Agente` `Seguridad` `Rápido` `MoE` `Eficiencia` `Eficiente`  

**Casos de uso:**  
- Aplicaciones generales con costo de inferencia optimizado (42 tokens/segundo)  
- Procesamiento de documentos en entornos CPU con uso limitado de RAM  
- Análisis especializados con activación dinámica de las partes pertinentes del modelo  
- Despliegues de alta densidad con bajo consumo energético por inferencia  
- Procesamiento paralelo de varios tipos de consultas con especialización MoE



### cogito:14b
**Deep Cogito • 14B parámetros • Contexto: 32 000 tokens**

Modelo de Deep Cogito especialmente diseñado para destacar en tareas de razonamiento profundo y comprensión contextual sutil, ideal para aplicaciones analíticas sofisticadas.

**Especificaciones técnicas:**
- **Velocidad** : 60 tokens por segundo ⚡
- **Consumo** : 4.4 kWh por millón de tokens
- **Licencia** : Licencia Community LLAMA 3.2
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Comprensión` `Análisis` `Rápido`

**Casos de uso:**
- Análisis semántico de textos con identificación de implicaciones no explícitas
- Razonamiento causal estructurado con identificación de relaciones causa-efecto
- Síntesis de documentos complejos con extracción de información clave
- Sistemas de preguntas-respuestas precisos sobre corpus documentales especializados
- Análisis argumentativo con evaluación de la solidez de los razonamientos



### cogito:32b
**Deep Cogito • 32B parámetros • Contexto: 32 000 tokens**

Versión avanzada del modelo Cogito que ofrece capacidades de razonamiento y análisis considerablemente ampliadas, diseñada para las aplicaciones más exigentes en materia de inteligencia artificial analítica.

**Especificaciones técnicas:**
- **Velocidad** : 32 tokens por segundo
- **Consumo** : 8,25 kWh por millón de tokens
- **Licencia** : Licencia Comunitaria LLAMA 3.2
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Comprensión` `Análisis`

**Casos de uso:**
- Análisis de escenarios multi-factoriales con evaluación probabilística de los resultados
- Resolución de problemas científicos con demostración formal de los pasos
- Aplicaciones de alta criticidad que requieren precisión y verificabilidad de los resultados
- Sistemas expertos en dominios especializados (jurídico, médico, técnico)
- Análisis con razonamiento de múltiples pasos y explicabilidad completa de las conclusiones



### qwen3:32b
**Equipo Qwen • 32B parámetros • Contexto: 40 000 tokens**

Modelo potente de la nueva generación Qwen3, que ofrece capacidades avanzadas en razonamiento, código y agentes, con un contexto ampliado.

**Especificaciones técnicas:**
- **Velocidad** : 18 tokens/segundo
- **Consumo** : 7,41 kWh/millón de tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Multilingüe` `Gran Contexto`

**Casos de uso:**
- Agentes conversacionales avanzados con gran contexto e integración de herramientas (MCP)
- Resolución de problemas complejos (matemáticas, código) con modo "Pensando"
- Análisis y generación de documentos voluminosos
- Aplicaciones multilingües (>100 idiomas) que requieren una comprensión profunda

---



### qwq:32b
**Equipo Qwen • 32 mil millones de parámetros • Contexto: 32.000 tokens**

Modelo de 32 mil millones de parámetros mejorado mediante aprendizaje por refuerzo (RL) para destacar en el razonamiento, la codificación, las matemáticas y las tareas de agente.

**Especificaciones técnicas:**
- **Velocidad** : 35 tokens por segundo tokens por segundo
- **Consumo** : 7,54 kWh/millón de tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Codificación` `Matemáticas`

**Casos de uso:**
- Resolución de problemas complejos que requieren razonamiento y uso de herramientas
- Generación y ejecución de código con verificación de resultados
- Tareas matemáticas avanzadas con verificación de la precisión
- Aplicaciones de agente capaces de interactuar con el entorno
- Seguimiento de instrucciones mejorado y alineación con las preferencias humanas



### deepseek-r1:14b
**DeepSeek AI • 14 mil millones de parámetros • Contexto: 32.000 tokens**

Versión compacta y eficiente del modelo DeepSeek-R1, ofreciendo un excelente equilibrio entre rendimiento y ligereza para despliegues que requieren flexibilidad y reactividad.

**Especificaciones técnicas:**
- **Velocidad** : 62 tokens/segundo ⚡
- **Consumo** : 4,26 kWh/millón de tokens
- **Licencia** : licencia MIT
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Compacto` `Versátil` `Rápido`

**Casos de uso:**
- Aplicaciones generales con necesidades de inferencia rápida (44 tokens/s)
- Despliegues en servidores estándar sin GPU especializado (14 mil millones de parámetros)
- Procesamiento de texto con análisis contextual y respuestas rápidas
- Despliegue en edge computing con inferencia local optimizada
- Prototipo rápido de aplicaciones IA con tiempos de iteración cortos



### deepseek-r1:32b
**DeepSeek AI • 32B parámetros • Contexto: 32 000 tokens**

Versión intermedia del modelo DeepSeek-R1 que ofrece un equilibrio estratégico entre las capacidades avanzadas de la versión 70B y la eficiencia de la versión 14B, para una versatilidad y rendimiento óptimo.

**Especificaciones técnicas:**
- **Velocidad:** 33 tokens por segundo
- **Consumo:** 7.99 kWh/millón de tokens
- **Licencia:** Licencia MIT
- **Ubicación:** FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Versátil`

**Casos de uso:**
- Aplicaciones que requieren un buen equilibrio entre potencia y costo (32B parámetros)
- Procesamiento de texto profesional con análisis de sutilezas semánticas
- Generación automática de informes estructurados a partir de datos brutos
- Aplicaciones que combinan análisis de datos y generación de contenido
- Asistentes especializados para sectores técnicos (jurídico, médico, técnico)



### cogito:3b
**Deep Cogito • 3B parámetros • Contexto: 32 000 tokens**

Versión compacta del modelo Cogito, optimizada para el razonamiento en dispositivos con recursos limitados.

**Especificaciones técnicas:**
- **Velocidad** : 55 tokens por segundo ⚡
- **Consumo** : 0.61 kWh por millón de tokens 🌱
- **Licencia** : Licencia LLAMA 3.2 Community
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Compacte` `Embebido` `Eficiente` `Rápido`



### granite-embedding:278m
**IBM • 278M parámetros • Contexto: 512 tokens**

Modelo de embedding ultra-ligero de IBM para búsqueda semántica y clasificación.

**Especificaciones técnicas:**
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Embedding` `Compacto` `Semántico` `Eficiente`



### granite3-guardian:2b
**IBM • 2B parámetros • Contexto: 8192 tokens**

Modelo compacto de IBM especializado en seguridad y cumplimiento, que detecta riesgos y contenidos inapropiados.

**Especificaciones técnicas:**
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Seguridad` `Cumplimiento` `Compacto` `Filtrado` `Eficiente`



### granite3-guardian:8b
**IBM • 8 mil millones de parámetros • Contexto: 32.000 tokens**

Modelo de IBM especializado en seguridad y cumplimiento, con capacidades avanzadas de detección de riesgos.

**Especificaciones técnicas :**
- **Licencia** : Apache 2.0
- **Ubicación** : FR 🇫🇷

**Capacidades :**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Seguridad` `Cumplimiento` `Filtrado`



### qwen2.5:0.5b
**Equipo Qwen • 0.5B parámetros • Contexto: 32.000 tokens**

Micromodelo ultra-ligero de la familia Qwen 2.5, diseñado para una máxima eficiencia en dispositivos con restricciones.

**Especificaciones técnicas:**
- **Velocidad:** 162 tokens por segundo ⚡
- **Consumo:** 0.1 kWh por millón de tokens 🌱
- **Licencia:** MIT
- **Localización:** FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Ultra-compacto` `Rápido` `Embebido` `Eficiente`



### qwen2.5:1.5b
**Equipo Qwen • 1.5B parámetros • Contexto: 32 000 tokens**

Modelo muy compacto de la familia Qwen 2.5, ofreciendo un buen equilibrio entre rendimiento/tamaño para despliegues ligeros.

**Especificaciones técnicas:**
- **Velocidad**: 102 tokens/segundo ⚡
- **Consumo**: 0.33 kWh/millon de tokens 🌱
- **Licencia**: Licencia MIT
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Embebido` `Eficiente`



### qwen2.5:14b
**Equipo Qwen • 14B parámetros • Contexto: 32 000 tokens**

Modelo versátil de tamaño medio de la familia Qwen 2.5, buen equilibrio rendimiento/recursos.

**Especificaciones técnicas:**
- **Velocidad**: 61 tokens/segundo ⚡
- **Consumo**: 4.33 kWh/millon de tokens
- **Licencia**: Licencia MIT
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Versátil` `Multilingüe` `Rápido`



### qwen2.5:32b
**Equipo Qwen • 32B parámetros • Contexto: 32 000 tokens**

Modelo potente de la familia Qwen 2.5, que ofrece capacidades avanzadas en comprensión y generación.

**Especificaciones técnicas:**
- **Velocidad**: 31 tokens por segundo
- **Consumo**: 8,51 kWh/millon de tokens
- **Licencia**: licencia MIT
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Versátil` `Multilingüe` `Razonamiento`



### qwen2.5:3b
**Equipo Qwen • 3 millores de parámetros • Contexto: 32 000 tokens**

Modelo compacto y eficiente de la familia Qwen 2.5, adecuado para tareas generales en recursos limitados.

**Especificaciones técnicas:**
- **Velocidad**: 64 tokens/segundo ⚡
- **Consumo**: 0.52 kWh/millón de tokens 🌱
- **Licencia**: MIT license
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Versátil` `Eficiente`



### qwen3:0.6b
**Equipo Qwen • 0.6B parámetros • Contexto: 32 000 tokens**

Modelo compacto y eficiente de la familia Qwen3, adecuado para tareas generales en recursos limitados.

**Especificaciones técnicas:**
- **Velocidad** : 112 tokens/segundo ⚡
- **Consumo** : 0.15 kWh/millon de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Versátil` `Eficiente`



### qwen3:1.7b
**Equipo Qwen • 1.7B parámetros • Contexto: 32.000 tokens**

Modelo muy compacto de la familia Qwen3, ofreciendo un buen equilibrio rendimiento/tamaño para despliegues ligeros.

**Especificaciones técnicas:**
- **Velocidad** : 88 tokens/segundo ⚡
- **Consumo** : 0.38 kWh/millon de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Embebido` `Eficiente`



### qwen3:4b
**Equipo Qwen • 4B parámetros • Contexto: 32 000 tokens**

Modelo compacto de la familia Qwen3 que ofrece excelentes rendimientos en un formato ligero y económico.

**Especificaciones técnicas:**
- **Velocidad**: 49 tokens/segundo tokens/segundo
- **Consumo**: 0,68 kWh/millon de tokens 🌱
- **Licencia**: Apache 2.0
- **Ubicación**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Eficiente`



### qwen3-2507-think:4b
**Equipo Qwen • 4B parámetros • Contexto: 250 000 tokens**

Modelo Qwen3-4B optimizado para el razonamiento, con un mejor rendimiento en tareas lógicas, matemáticas, científicas y de código, y un contexto extendido de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad**: 70 tokens/segundo ⚡
- **Consumo**: 1,9 kWh/millon de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Gran contexto` `Compacto` `Rápido`

**Casos de uso:**
- Tareas de razonamiento muy complejas (lógica, matemáticas, ciencia, código).
- Agentes conversacionales con un historial de conversación muy extenso (256k tokens).
- Análisis de documentos muy voluminosos con razonamiento profundo.
- Integración con herramientas externas mediante llamadas de función en contextos muy grandes.



### qwen3-2507:4b
**Equipo Qwen • 4B parámetros • Contexto: 250 000 tokens**

Versión actualizada del modo sin pensamiento de Qwen3-4B, con mejoras significativas en las capacidades generales, amplia cobertura de conocimientos y mejor alineación con las preferencias de los usuarios.

**Especificaciones técnicas:**
- **Velocidad**: 70 tokens/segundo ⚡
- **Consumo**: 1,9 kWh/millon de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Gran Contexto` `Compacto` `Rápido` `Multilingüe`

**Casos de uso:**
- Tareas generales que requieren un seguimiento preciso de instrucciones y un razonamiento lógico.
- Aplicaciones multilingües con una amplia cobertura de conocimientos.
- Generación de texto de alta calidad para tareas abiertas y subjetivas.
- Análisis de documentos muy voluminosos gracias al contexto de 256k tokens.



### qwen3:8b
**Equipo Qwen • 8B parámetros • Contexto: 32 000 tokens**

Modelo Qwen3 8B que ofrece un buen equilibrio entre rendimiento y eficiencia para tareas generales.

**Especificaciones técnicas:**
- **Velocidad** : 33 tokens/segundo tokens/segundo
- **Consumo** : 1,01 kWh/millon de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Agente` `Multilingüe` `Eficiente`



### qwen2.5vl:3b
**Equipo Qwen • 3.8B parámetros • Contexto: 128 000 tokens**

Modelo de Visión-Lenguaje compacto, solución eficiente para la IA en el borde (edge AI).

**Especificaciones técnicas:**
- **Velocidad** : 65 tokens/segundo ⚡
- **Consumo** : 0.51 kWh/millon de tokens 🌱
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Razonamiento` `Rápido` `Eficiente` `OCR` `Localización Visual` `Edge AI`



### qwen2.5vl:7b
**Equipo Qwen • 7B (8.3B) parámetros • Contexto: 128 000 tokens**

Modelo de Visión-Lenguaje eficiente, superando a GPT-4o-mini en ciertas tareas.

**Especificaciones técnicas:**
- **Velocidad**: 35 tokens/segundo tokens/segundo
- **Consumo**: 0.95 kWh/millon de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Razonamiento` `Eficiente` `OCR` `Localización Visual`



### hf.co/roadus/Foundation-Sec-8B-Q4_K_M-GGUF:Q4_K_M
**Foundation AI — Cisco • 8B parámetros • Contexto : 16 384 tokens**

Modelo de lenguaje especializado en ciberseguridad, optimizado para eficiencia.

**Especificaciones técnicas :**
- **Velocidad** : 21 tokens/seconde tokens/seconde
- **Consumo** : 1.59 kWh/millon tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades :**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas :** `Seguridad` `Compacto`



### devstral:24b
**Mistral AI & All Hands AI • 24B parámetros • Contexto : 120 000 tokens**

Devstral es un LLM agente para tareas de ingeniería de software.

**Especificaciones técnicas :**
- **Velocidad** : 45 tokens/segundo tokens/segundo
- **Consumo** : 5,86 kWh/millón de tokens
- **Licencia** : Apache 2.0
- **Localización** : FR 🇫🇷

**Capacidades :**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Agente` `Programación` `Open-Source` `Gran contexto`

**Casos de uso :**
- Exploración y modificación de bases de código
- Agente
- Europeo

---



### cogito:8b
**Deep Cogito • 8B parámetros • Contexto: 32 000 tokens**

Modelo intermedio de la familia Cogito, ofreciendo un buen equilibrio entre las capacidades de razonamiento y la eficiencia.

**Especificaciones técnicas:**
- **Velocidad** : 30 tokens por segundo
- **Consumo** : 1,11 kWh/millón de tokens 🌱
- **Licencia** : Licencia Comunitaria LLAMA 3.2
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Polivalente` `Eficiente`



### llama3.1:8b
**Meta • 8B parámetros • Contexto : 32 000 tokens**

Modelo base de la familia Llama 3.1, ofreciendo un buen rendimiento para su tamaño.

**Especificaciones técnicas :**
- **Velocidad** : 31 tokens/segundo tokens/segundo
- **Consumo** : 1,08 kWh/millon de tokens 🌱
- **Licencia** : Licencia Comunitaria LLAMA 3.1
- **Ubicación** : FR 🇫🇷

**Capacidades :**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Versátil` `Eficiente`



### phi4-reasoning:14b
**Microsoft • 14B parámetros • Contexto: 32.000 tokens**

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
- Mistral Small 3.2
- Qwen 3
- Granite 3.3



### Análisis de documentos largos
Procesamiento de documentos voluminosos (más de 100 páginas) con mantenimiento del contexto en todo el texto, extracción de información clave, generación de resúmenes pertinentes y respuesta a preguntas específicas sobre el contenido

**Modelos recomendados:**
- Gemma 3
- Qwen3
- Granite 3.3



### Programación y desarrollo
Generación y optimización de código en múltiples lenguajes, depuración, refactorización, desarrollo de funcionalidades completas, comprensión de implementaciones algorítmicas complejas y creación de pruebas unitarias

**Modelos recomendados:**
- DeepCoder
- QwQ
- Qwen3 coder
- Granite 3.3
- Devstral



### Análisis visual
Procesamiento directo de imágenes y documentos visuales sin preprocesamiento OCR, interpretación de diagramas técnicos, gráficos, tablas, dibujos y fotos con generación de explicaciones textuales detalladas del contenido visual

**Modelos recomendados :**
- Granite 3.2 Vision
- Mistral Small 3.2
- Gemma 3
- Qwen2.5-VL



### Seguridad y cumplimiento
Aplicaciones que requieren capacidades específicas en materia de seguridad; filtrado de contenido sensible, trazabilidad de los razonamientos, verificación del RGPD/HDS, minimización de riesgos, análisis de vulnerabilidades y cumplimiento de las regulaciones sectoriales

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