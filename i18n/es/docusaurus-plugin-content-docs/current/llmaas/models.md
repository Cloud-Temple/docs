---
title: Catálogo de Modelos LLMaaS
sidebar_position: 2
---

# Catálogo de Modelos LLM como Servicio

## Visión general

Cloud Temple LLMaaS ofrece **41 modelos de lenguaje grande** cuidadosamente seleccionados y optimizados para satisfacer los requisitos más estrictos de **SecNumCloud**. Nuestro catálogo cubre todo el espectro, desde micromodelos altamente eficientes hasta modelos extremadamente grandes.

### Estadísticas Generales

| Métrica | Valor |
|--------|-------|
| **Número total de modelos** | 41 modelos |
| **Contexto mínimo** | 8 192 tokens |
| **Contexto máximo** | 262 144 tokens |
| **Conformidad** | SecNumCloud ✅ HDS ✅ Soberanía ✅ C5 ❌ |
| **Localización** | 100% Francia 🇫🇷 |

### Precios

| Tipo de uso | Precio |
|-------------|--------|
| **Tokens de entrada** | 0,90 € / millón de tokens |
| **Tokens de salida** | 4 € / millón de tokens |
| **Razonamiento avanzado** | 21 € / millón de tokens |

## Modelos de Gran Tamaño

### gpt-oss:120b
**OpenAI • 120B parámetros • Contexto: 120 000 tokens**

Modelo de lenguaje de vanguardia de código abierto de OpenAI, ofreciendo un rendimiento sólido con una licencia flexible Apache 2.0.

**Especificaciones técnicas:**
- **Velocidad**: 140 tokens/segundo
- **Consumo**: 1,69 kWh/millón de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `MoE` `Agente` `Razonamiento` `Código abierto` `Muy grande`

**Casos de uso:**
- Agentes de conversación avanzados con razonamiento complejo e integración de herramientas.
- Aplicaciones que requieren transparencia total en el proceso de razonamiento (cadena de pensamiento).
- Escenarios comerciales que necesitan una licencia permisiva (Apache 2.0).
- Fine-tuning para tareas especializadas que requieren un modelo base potente.

### llama3.3:70b
**Meta • 70B parameters • Context: 132,000 tokens**

State-of-the-art multilingual model developed by Meta, designed to excel in natural dialogue, complex reasoning, and nuanced instruction understanding.

**Technical specifications:**
- **Speed**: 31 tokens/second
- **Energy consumption**: 8.58 kWh per million tokens
- **License**: LLAMA 3.3 Community License
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Dialogue` `Multilingual`

**Use cases:**
- Multilingual chatbots supporting 8 languages simultaneously
- Execution of complex, chained instructions (prompt chaining)
- Processing of conversation windows up to 60K tokens for conversational history
- Analysis of large legal or technical documents (>100 pages)
- Generation of structured text with strict adherence to stylistic guidelines

### gemma3:27b
**Google • 27B parameters • Context: 120,000 tokens**

Revolutionary model from Google offering an optimal balance between power and efficiency, with an exceptional performance-to-cost ratio for demanding professional applications.

**Technical specifications:**
- **Speed**: 24 tokens/second
- **Energy consumption**: 5.56 kWh per million tokens
- **License**: Google Gemma Terms of Use
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Large context`

**Use cases:**
- Document analysis with extended context up to 120K tokens (approximately 400 pages)
- Indexing and semantic search in large document databases
- Simultaneous processing of images and text thanks to multimodal capabilities
- Structured data extraction from PDFs and scanned documents
- Integration with external tools via function calling API

### qwen3-coder:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

MoE-optimized model designed for software engineering tasks, featuring an extremely long context.

**Technical Specifications:**
- **Speed**: 84 tokens/second ⚡
- **Energy Consumption**: 3.14 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Programming` `Large Context` `MoE`

**Use Cases:**
- Software engineering agents for exploring and modifying codebases
- Generation of complex code with repository-scale understanding
- Reasoning tasks over extended contexts
- Code improvement via reinforcement learning

### qwen3-2507:30b-a3b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

Improved version of the non-thinking mode of Qwen3-30B, with enhanced general capabilities, broader knowledge coverage, and better user alignment.

**Technical Specifications:**
- **Speed**: 118 tokens/second ⚡
- **Energy Consumption**: 1.65 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Large Context` `MoE` `Multilingual`

**Use Cases:**
- Complex tasks requiring precise instruction following and logical reasoning.
- Multilingual applications with extensive knowledge coverage.
- High-quality text generation for open-ended and subjective tasks.
- Analysis of very large documents thanks to the 250k-token context.

### qwen3:30b-a3b
**Qwen Team • 30B parameters • Context: 32,000 tokens**

Latest generation of Qwen models, featuring significant improvements in training data, architecture, and optimization.

**Technical Specifications:**
- **Speed**: 118 tokens/second
- **Energy Consumption**: 1.65 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Programming` `Multilingual` `MoE`

**Use Cases:**
- Complex reasoning tasks and code generation.
- Multilingual applications requiring broad linguistic coverage.
- Scenarios demanding a good balance between performance and resource efficiency thanks to the MoE architecture.

### qwen2.5vl:32b
**Qwen Team • 32B parameters • Context: 120,000 tokens**

Most powerful version of the Qwen2.5-VL series, offering state-of-the-art visual understanding and agent capabilities.

**Technical Specifications:**
- **Speed**: 22 tokens/second
- **Energy Consumption**: 6.06 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `OCR` `Visual Localization` `Large`

**Use Cases:**
- Analysis of highly complex documents and diagrams
- Autonomous visual agents for navigation and interaction with GUIs
- High-precision object localization and text recognition tasks
- Generation of rich, detailed descriptions from complex images

### qwen2.5vl:72b
**Qwen Team • 72B parameters • Context: 128,000 tokens**

Most powerful version of the Qwen2.5-VL series, offering state-of-the-art visual understanding and agent capabilities for the most demanding tasks.

**Technical Specifications:**
- **Speed**: 13 tokens/second
- **Energy Consumption**: 10.26 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `OCR` `Visual Localization` `Very Large`

**Use Cases:**
- Analysis of highly complex documents and diagrams
- Autonomous visual agents for navigation and interaction with GUIs
- High-precision object localization and text recognition tasks
- Generation of rich, detailed descriptions from highly complex images

### qwen3-next:80b
**Qwen Team • 80B parameters • Context: 262,144 tokens**

Qwen's Next 80B FP8 model, optimized for large contexts and reasoning, served via vLLM (A100).

**Technical Specifications:**
- **Speed**: 59 tokens/second ⚡
- **Energy Consumption**: 3.3 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `MoE`

**Use Cases:**
- Advanced conversational agents with tool integration
- Analysis of very large documents (up to 260k tokens)
- Code generation and complex tasks requiring structured reasoning

## Modelos especializados

### embeddinggemma:300m
**Google • 300M parameters • Context: 2,048 tokens**

State-of-the-art embedding model from Google, optimized for its size, ideal for search and semantic retrieval tasks.

**Technical specifications:**
- **License**: Google Gemma Terms of Use
- **Localization**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient` `Multilingual`

**Use cases:**
- Information search and retrieval (Retrieval)
- Document classification and clustering
- Semantic similarity search
- Deployment on resource-constrained devices (mobile, laptop)

### gpt-oss:20b
**OpenAI • 20B parameters • Context: 120,000 tokens**

Open-weight language model from OpenAI, optimized for efficiency and deployment on consumer-grade hardware.

**Technical specifications:**
- **Speed**: 85 tokens/second ⚡
- **Energy consumption**: 1.57 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Compact` `Fast`

**Use cases:**
- Deployments on resource-constrained devices (edge devices) or low-cost servers.
- Applications requiring fast inference with strong reasoning capabilities.
- Agent-based use cases involving function calls, web navigation, and code execution.
- Fine-tuning for specialized tasks on consumer-grade hardware.

### qwen3:14b
**Qwen Team • 14B parámetros • Contexto: 32.000 tokens**

Modelo denso de nueva generación Qwen3 (14B), que ofrece un rendimiento equivalente al Qwen2.5 32B con una mejor eficiencia.

**Especificaciones técnicas:**
- **Velocidad**: 44 tokens/segundo ⚡
- **Consumo**: 3,03 kWh/millón de tokens
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Rápido` `Multilingüe`

**Casos de uso:**
- Tareas generales que requieren alto rendimiento y gran contexto
- Generación de contenido creativo y técnico
- Análisis de datos y razonamiento complejo
- Integración con herramientas externas mediante llamadas a funciones

### gemma3:4b
**Google • 4B parámetros • Contexto: 120 000 tokens**

Modelo compacto de Google que ofrece un excelente rendimiento en un formato ligero y económico.

**Especificaciones técnicas:**
- **Velocidad**: 60 tokens/segundo ⚡
- **Consumo**: 0,55 kWh/millón de tokens 🌱
- **Licencia**: Términos de uso de Google Gemma
- **Localización**: FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Rápido` `Compacto` `Gran contexto` `Eficiente`

**Casos de uso:**
- Aplicaciones embebidas y edge computing con procesamiento de imágenes
- Chatbots multimodales reactivos que requieren baja latencia
- Despliegues a gran escala con capacidades visuales y de texto
- Aplicaciones móviles con análisis de imágenes y texto
- Procesamiento de consultas visuales de complejidad baja a media con alta performance

### gemma3:1b
**Google • 1B parámetros • Contexto: 32.000 tokens**

Pequeño modelo ultraligero diseñado para despliegues en dispositivos con recursos muy limitados.

**Especificaciones técnicas:**
- **Velocidad**: 115 tokens/segundo ⚡
- **Consumo**: 0,15 kWh/millón de tokens 🌱
- **Licencia**: Términos de uso de Google Gemma
- **Localización**: FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Ultra-compacto` `Embebido` `Eficiente` `Rápido`

**Casos de uso:**
- Despliegue en dispositivos IoT y sistemas embebidos con integración API
- Aplicaciones que requieren inferencia local en CPU con llamadas a funciones
- Tareas textuales básicas con respuesta instantánea y llamadas a funciones
- Asistentes compactos para aplicaciones de uso general con integración de servicios externos
- Sistemas de control inteligente que integran múltiples APIs/servicios

### mistral-small3.1:24b
**Mistral AI • 24B parameters • Context: 120,000 tokens**

Compact and responsive model from Mistral AI, specifically designed to deliver smooth and relevant conversational assistance with optimal response speed.

**Technical specifications:**
- **Speed**: 34 tokens/second
- **Energy consumption**: 3.83 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security`

**Use cases:**
- Conversational applications
- Virtual assistants combining image and text analysis (26 tokens/s)
- Technical support chatbots with access to technical documentation
- Content creation/editing tools with instant responses (blogs, emails)
- Deployment on standard infrastructure (24B parameters)

### mistral-small3.2:24b
**Mistral AI • 24B parameters • Context: 128,000 tokens**

Minor update to Mistral Small 3.1, improving instruction following, function calling robustness, and reducing repetition errors.

**Technical specifications:**
- **Speed**: 56 tokens/second
- **Energy consumption**: 2.33 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security` `Instruction Following`

**Use cases:**
- Conversational agents with enhanced instruction following
- Robust integration with external tools via function calling
- Applications requiring high reliability to avoid repetitions
- Use cases identical to Mistral Small 3.1, with improved performance

### deepcoder:14b
**Agentica x Together AI • 14B parameters • Context: 32,000 tokens**

Open-source AI model (14B) by Together AI & Agentica, a credible alternative to proprietary models for code generation.

**Technical specifications:**
- **Speed**: 9 tokens/second ⚡
- **Energy consumption**: 3.72 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Programming` `Reasoning` `Open-Source` `Mathematics` `Fast`

**Use cases:**
- Code generation in over 15 languages with performance optimization
- Debugging and refactoring of existing codebases with impact analysis
- Implementation of complex algorithms (graphs, trees, heuristics)
- Automated generation of unit tests with code coverage > 80%
- Code translation between languages/frameworks (e.g., Python to JavaScript)

### granite3.2-vision:2b
**IBM • 2B parameters • Context: 16,384 tokens**

Revolutionary compact model from IBM specialized in computer vision, capable of directly analyzing and understanding visual documents without relying on intermediate OCR technologies.

**Technical specifications:**
- **Speed**: 88 tokens/second
- **Energy consumption**: 0.38 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Security` `Compact` `Efficient`

**Use cases:**
- Extraction of structured data from invoices and forms without OCR
- Direct analysis of tables and charts with trend interpretation
- Reading and interpreting technical diagrams (electrical, mechanical)
- Processing handwritten documents with high recognition accuracy
- Lightweight computer vision (2B parameters) with high speed (50 tokens/s)

### granite3.3:8b
**IBM • 8B parámetros • Contexto: 60.000 tokens**

Modelo Granite 8B ajustado mediante fine-tuning por IBM para un razonamiento y seguimiento de instrucciones mejorados, con un contexto de 128k tokens.

**Especificaciones técnicas:**
- **Velocidad**: 39 tokens/segundo
- **Consumo**: 0,85 kWh/millón de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `Eficiente`

**Casos de uso:**
- Tareas generales de seguimiento de instrucciones (clasificación, extracción, preguntas y respuestas)
- Asistentes de IA multilingües (12 idiomas)
- Procesamiento de documentos muy largos (128k tokens) para tareas de resúmenes, preguntas y respuestas, etc.
- Generación/completado de código con Fill-in-the-Middle
- Integración con herramientas externas mediante function calling
- Razonamiento estructurado con el modo "Thinking"

### granite3.3:2b
**IBM • 2B parámetros • Contexto: 120 000 tokens**

Modelo Granite 2B finetuneado por IBM, optimizado para razonamiento y seguimiento de instrucciones, con un contexto de 128k tokens.

**Especificaciones técnicas:**
- **Velocidad**: 88 tokens/segundo
- **Consumo**: 0.38 kWh/millón de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `Eficiente`

**Casos de uso:**
- Despliegues ligeros con gran contexto (128k tokens)
- Tareas generales de seguimiento de instrucciones en recursos limitados
- Asistentes de IA multilingües compactos
- Procesamiento de documentos largos en dispositivos menos potentes
- Generación/completado de código FIM en estaciones de trabajo estándar

### magistral:24b
**Mistral AI • 24B parameters • Context: 40,000 tokens**

Mistral AI's first reasoning model, excelling in domain-specific reasoning, transparent and multilingual.

**Technical specifications:**
- **Speed**: 29 tokens/second
- **Energy consumption**: 4.59 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Reasoning` `Multilingual`

**Use cases:**
- Business strategy and operations (risk modeling)
- Regulated industries (legal, finance) with traceable reasoning
- Software engineering (project planning, architecture)
- Content creation and communication (creative writing, storytelling)

### cogito:32b
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model, offering significantly enhanced reasoning and analytical capabilities, designed for the most demanding AI analytical applications.

**Technical specifications:**
- **Speed**: 37 tokens/second
- **Energy consumption**: 7.13 kWh per million tokens
- **License**: LLAMA 3.2 Community License
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Understanding` `Analysis`

**Use cases:**
- Multi-factorial scenario analysis with probabilistic evaluation of outcomes
- Scientific problem solving with formal demonstration of steps
- High-criticality applications requiring precision and verifiability of results
- Expert systems in specialized domains (legal, medical, technical)
- Multi-step reasoning analysis with full explainability of conclusions

### qwen3:32b
**Qwen Team • 32B parameters • Context: 40,000 tokens**

Advanced next-generation Qwen3 model, offering enhanced capabilities in reasoning, coding, and agent-based tasks, with an extended context window.

**Technical Specifications:**
- **Speed**: 21 tokens/second
- **Energy Consumption**: 6.35 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Multilingual` `Large Context`

**Use Cases:**
- Advanced conversational agents with large context and tool integration (MCP)
- Solving complex problems (math, code) using "Thinking" mode
- Analysis and generation of large-volume documents
- Multilingual applications (>100 languages) requiring deep understanding

### qwq:32b
**Qwen Team • 32B parameters • Context: 32,000 tokens**

32-billion-parameter model enhanced via reinforcement learning (RL) to excel in reasoning, coding, mathematics, and agent tasks.

**Technical specifications:**
- **Speed**: 11 tokens/second
- **Energy consumption**: 23.99 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Coding` `Mathematics`

**Use cases:**
- Solving complex problems requiring reasoning and tool utilization
- Code generation and execution with result verification
- Advanced mathematical tasks with accuracy validation
- Agent applications capable of interacting with the environment
- Enhanced instruction following and alignment with human preferences

### deepseek-r1:14b
**DeepSeek AI • 14B parámetros • Contexto: 32 000 tokens**

Versión compacta y eficiente del modelo DeepSeek-R1, que ofrece un excelente equilibrio entre rendimiento y ligereza para despliegues que requieren flexibilidad y reactividad.

**Especificaciones técnicas:**
- **Velocidad**: 23 tokens/segundo ⚡
- **Consumo**: 1,45 kWh/millón de tokens
- **Licencia**: MIT
- **Localización**: FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Compacto` `Polivalente` `Rápido`

**Casos de uso:**
- Aplicaciones generales con necesidades de inferencia rápida (44 tokens/s)
- Despliegues en servidores estándar sin GPU especializada (14B parámetros)
- Procesamiento de texto con análisis contextual y respuestas rápidas
- Despliegue en computación de borde con inferencia local optimizada
- Prototipado rápido de aplicaciones de IA con tiempos de iteración cortos

### deepseek-r1:32b
**DeepSeek AI • 32B parameters • Context: 32,000 tokens**

Intermediate version of the DeepSeek-R1 model, offering a strategic balance between the advanced capabilities of the 70B version and the efficiency of the 14B version, for optimal versatility and performance.

**Technical specifications:**
- **Speed**: 20 tokens/second
- **Energy consumption**: 13.18 kWh per million tokens
- **License**: MIT license
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Versatile`

**Use cases:**
- Applications requiring a good balance of power and cost (32B parameters)
- Professional text processing with semantic nuance analysis
- Automated generation of structured reports from raw data
- Applications combining data analysis and content generation
- Specialized assistants for technical fields (legal, medical, technical)

### cogito:3b
**Deep Cogito • 3B parameters • Context: 32,000 tokens**

Versión compacta del modelo Cogito, optimizada para el razonamiento en dispositivos con recursos limitados.

**Especificaciones técnicas:**
- **Velocidad** : 78 tokens/segundo ⚡
- **Consumo** : 0.43 kWh/millón de tokens 🌱
- **Licencia** : Licencia Comunitaria LLAMA 3.2
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Razonamiento` `Compacto` `Embebido` `Eficiente` `Rápido`

### granite-embedding:278m
**IBM • 278M parameters • Context: 512 tokens**

Ultra-lightweight embedding model from IBM for semantic search and classification.

**Technical specifications:**
- **License**: Apache 2.0
- **Localization**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient`

### granite3-guardian:2b
**IBM • 2B parameters • Context: 8,192 tokens**

Compact model from IBM specialized in security and compliance, detecting risks and inappropriate content.

**Technical specifications:**
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Compliance` `Compact` `Filtering` `Efficient`

### granite3-guardian:8b
**IBM • 8B parameters • Context: 32,000 tokens**

IBM's specialized model for security and compliance, offering advanced risk detection capabilities.

**Technical specifications:**
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Compliance` `Filtering`

### qwen3:0.6b
**Equipo Qwen • 0.6B parámetros • Contexto: 32 000 tokens**

Modelo compacto y eficiente de la familia Qwen3, adecuado para tareas generales en recursos limitados.

**Especificaciones técnicas:**
- **Velocidad**: 28 tokens por segundo ⚡
- **Consumo**: 0.6 kWh por millón de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Versátil` `Eficiente`

### qwen3:1.7b
**Qwen Team • 1.7B parámetros • Contexto: 32 000 tokens**

Modelo muy compacto de la familia Qwen3, que ofrece un buen equilibrio entre rendimiento y tamaño para despliegues ligeros.

**Especificaciones técnicas:**
- **Velocidad**: 46 tokens por segundo ⚡
- **Consumo**: 0.73 kWh por millón de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Rápido` `Embebido` `Eficiente`

### qwen3:4b
**Qwen Team • 4B parámetros • Contexto: 32.000 tokens**

Modelo compacto de la familia Qwen3 que ofrece un excelente rendimiento en un formato ligero y económico.

**Especificaciones técnicas:**
- **Velocidad**: 29 tokens/segundo
- **Consumo**: 1,15 kWh/millón de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Eficiente`

### qwen3-2507-think:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Qwen3-4B model optimized for reasoning, with improved performance on logical tasks, mathematics, science, and code, and an extended context of up to 250K tokens.

**Technical Specifications:**
- **Speed**: 77 tokens/second ⚡
- **Energy Consumption**: 1.73 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `Compact` `Fast`

**Use Cases:**
- Highly complex reasoning tasks (logic, math, science, code).
- Conversational agents with extremely long conversation history (up to 256k tokens).
- Deep reasoning analysis of very large documents.
- Integration with external tools via function calling, even within very large contexts.

### qwen3-2507:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Updated version of the non-thinking mode of Qwen3-4B, featuring significant improvements in general capabilities, expanded knowledge coverage, and better alignment with user preferences.

**Technical Specifications:**
- **Speed**: 69 tokens/second ⚡
- **Energy Consumption**: 1.93 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Large Context` `Compact` `Fast` `Multilingual`

**Use Cases:**
- General tasks requiring precise instruction following and logical reasoning.
- Multilingual applications with broad knowledge coverage.
- High-quality text generation for open-ended and subjective tasks.
- Analysis of very large documents thanks to a 256k-token context.

### qwen3:8b
**Qwen Team • 8B parameters • Context: 32,000 tokens**

Qwen3 8B model offering a good balance between performance and efficiency for general tasks.

**Technical specifications:**
- **Speed**: 18 tokens/second
- **Energy consumption**: 1.85 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Agent` `Multilingual` `Efficient`

### qwen2.5vl:3b
**Qwen Team • 3.8B parameters • Context: 128,000 tokens**

Compact Vision-Language model, high-performance solution for edge AI.

**Technical Specifications:**
- **Speed**: 73 tokens/second ⚡
- **Energy Consumption**: 0.45 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Localization**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `Fast` `Efficient` `OCR` `Visual Localization` `Edge AI`

### qwen2.5vl:7b
**Equipo Qwen • 7B (8.3B) parámetros • Contexto: 128 000 tokens**

Modelo de visión-lenguaje potente, que supera a GPT-4o-mini en algunas tareas.

**Especificaciones técnicas:**
- **Velocidad**: 48 tokens por segundo
- **Consumo**: 0,69 kWh por millón de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Agente` `Razonamiento` `Eficiente` `OCR` `Localización Visual`

### devstral:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 100,000 tokens**

Devstral is an agentic LLM designed for software engineering tasks.

**Technical specifications:**
- **Speed**: 50 tokens/second
- **Energy consumption**: 5.27 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Open-Source` `Large Context`

**Use cases:**
- Codebase exploration and modification
- Agentic
- European

### cogito:8b
**Deep Cogito • 8B parameters • Context: 32,000 tokens**

Intermediate-sized model from the Cogito family, offering a good balance between reasoning capabilities and efficiency.

**Technical specifications:**
- **Speed** : 43 tokens/second
- **Energy consumption** : 0.77 kWh per million tokens 🌱
- **License** : LLAMA 3.2 Community License
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Versatile` `Efficient`

### granite4-small-h:32b
**IBM • 32B (9B activos) parámetros • Contexto: 128 000 tokens**

Modelo MoE (Mixture-of-Experts) de IBM, diseñado como un "caballo de batalla" para tareas diarias empresariales, con una excelente eficiencia en contextos largos.

**Especificaciones técnicas:**
- **Velocidad**: 28 tokens/segundo
- **Consumo**: 1,19 kWh/millón de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `MoE` `Gran Contexto` `Eficiente`

**Casos de uso:**
- Agentes conversacionales para soporte al cliente con acceso a bases de conocimientos extensas.
- Automatización de flujos de trabajo empresariales que requieren el uso de múltiples herramientas.
- Análisis de documentos largos con un consumo de recursos optimizado.
- Despliegues en infraestructuras de tamaño medio gracias a su eficiencia.

### granite4-tiny-h:7b
**IBM • 7B (1B activos) parámetros • Contexto: 128 000 tokens**

Modelo híbrido MoE ultraeficiente de IBM, diseñado para baja latencia, aplicaciones de borde y locales, y como bloque base para flujos de trabajo de agentes.

**Especificaciones técnicas:**
- **Velocidad**: 77 tokens/segundo ⚡
- **Consumo**: 0,43 kWh/millón de tokens 🌱
- **Licencia**: Apache 2.0
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `MoE` `Gran contexto` `Eficiente` `Rápido` `Compacto`

**Casos de uso:**
- Aplicaciones embebidas y de borde que requieren baja latencia.
- Tareas rápidas dentro de flujos de trabajo de agentes más amplios (por ejemplo, llamadas a funciones).
- Análisis de documentos en hardware de consumo general.
- Despliegues que requieren una huella de memoria mínima.

### deepseek-ocr
**DeepSeek AI • 3B parameters • Context: 8,192 tokens**

Specialized OCR model from DeepSeek, designed for high-precision text extraction with formatting preservation.

**Technical specifications:**
- **Speed**: 120 tokens/second ⚡
- **Energy consumption**: 0.16 kWh per million tokens 🌱
- **License**: MIT license
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `OCR` `Efficient`

**Use cases:**
- Extraction of structured text (Markdown/LaTeX) from images/PDFs
- Document digitization with complex tables and formulas

## Cas de uso recomendados

### Multilingual dialogue
Chatbots and assistants capable of communicating in multiple languages with automatic language detection, context preservation throughout the entire conversation, and understanding of linguistic nuances

**Recommended models:**
- Llama 3.3
- Mistral Small 3.2
- Qwen 3
- Openai OSS
- Granite 4

### Análisis de documentos largos  
Procesamiento de documentos extensos (>100 páginas) con mantenimiento del contexto a lo largo de todo el texto, extracción de información clave, generación de resúmenes pertinentes y respuesta a preguntas específicas sobre el contenido.

**Modelos recomendados:**  
- Gemma 3  
- Qwen next  
- Qwen 3  
- Granite 4

### Programación y desarrollo  
Generación y optimización de código en múltiples lenguajes, depuración, refactorización, desarrollo de funcionalidades completas, comprensión de implementaciones algorítmicas complejas y creación de pruebas unitarias

**Modelos recomendados:**  
- DeepCoder  
- Qwen3 coder  
- Granite 4  
- Devstral

### Visual analysis
Direct processing of images and visual documents without prior OCR preprocessing, interpretation of technical diagrams, charts, tables, drawings, and photos, with generation of detailed textual explanations of the visual content

**Recommended models:**
- deepseek-OCR
- Mistral Small 3.2
- Gemma 3
- Qwen2.5-VL

### Seguridad y cumplimiento
Aplicaciones que requieren capacidades específicas en materia de seguridad; filtrado de contenido sensible, trazabilidad de razonamientos, verificación del RGPD/HDS, minimización de riesgos, análisis de vulnerabilidades y cumplimiento de regulaciones sectoriales.

**Modelos recomendados:**
- Granite Guardian
- Granite 4
- Devstral
- Mistral Small 3.2
- Magistral 24b

### Lightweight and Embedded Deployments
Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded systems or IoT devices

**Recommended models:**
- Gemma 3
- Granite Guardian
- Granite 4 tiny
- DeepSeek-OCR