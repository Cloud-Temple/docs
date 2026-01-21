---
title: Catálogo de Modelos de IA
sidebar_position: 2
---

# Catálogo de Modelos LLM como Servicio

## Visión general

Cloud Temple LLMaaS ofrece **42 modelos de lenguaje grande** cuidadosamente seleccionados y optimizados para satisfacer los requisitos más estrictos de **SecNumCloud**. Nuestro catálogo cubre todo el espectro, desde micromodelos altamente eficientes hasta modelos extremadamente grandes.

### Estadísticas Generales

| Métrica | Valor |
|--------|-------|
| **Número total de modelos** | 42 modelos |
| **Contexto mínimo** | 2.048 tokens |
| **Contexto máximo** | 262.144 tokens |
| **Conformidad** | SecNumCloud ✅ HDS ✅ Soberanía ✅ C5 ✅ |
| **Localización** | 100% Francia 🇫🇷 |

### Precios

| Tipo de uso | Precio |
|-------------|--------|
| **Tokens de entrada** | 0,90 € / millón de tokens |
| **Tokens de salida** | 4 € / millón de tokens |
| **Razonamiento avanzado** | 21 € / millón de tokens |

## Modelos de Gran Tamaño

### cogito:32b
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model offering significantly enhanced reasoning and analytical capabilities, designed for the most demanding AI analytical applications.

**Technical specifications:**
- **Speed**: 20 tokens/second
- **Consumption**: 6.67 kWh/million tokens
- **License**: [LLAMA 3.2 Community License](./licences/llama_3.2_community_licence.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Comprehension` `Analysis`

**Use cases:**
- Multi-factorial scenario analysis with probabilistic evaluation of outcomes
- Scientific problem solving with formal demonstration of steps
- High-criticality applications requiring precision and verifiability of results
- Expert systems in specialized domains (legal, medical, technical)
- Multi-step reasoning analysis with full explainability of conclusions

### gemma3:27b
**Google • 27B parameters • Context: 120,000 tokens**

Revolutionary model from Google offering an optimal balance between power and efficiency, with an exceptional performance-to-cost ratio for demanding professional applications.

**Technical specifications:**
- **Speed**: 21 tokens/second
- **Energy consumption**: 6.35 kWh per million tokens
- **License**: [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Large context`

**Use cases:**
- Document analysis with extended context up to 120K tokens (approximately 400 pages)
- Semantic indexing and search in large document databases
- Simultaneous processing of images and text thanks to multimodal capabilities
- Structured data extraction from PDFs and scanned documents
- Integration with external tools via function calling API

### glm-4.7:358b
**Zhipu AI • 358B parameters • Context: 120,000 tokens**

High-performance versatile model developed by Zhipu AI, excelling in logical reasoning, multilingual understanding, and complex tasks.

**Technical specifications:**
- **Speed**: 18 tokens/second
- **Consumption**: 7.41 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `Multilingual`

**Use cases:**
- Complex reasoning tasks
- Analysis of long documents
- Advanced conversational assistants

### gpt-oss:120b
**OpenAI • 120B parameters • Context: 120,000 tokens**

State-of-the-art open-weight language model from OpenAI, delivering strong performance with a flexible Apache 2.0 license.

**Technical specifications:**
- **Speed**: 104 tokens/second
- **Energy consumption**: 2.19 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Very Large`

**Use cases:**
- Advanced conversational agents with complex reasoning and tool integration.
- Applications requiring full transparency in the reasoning process (chain-of-thought).
- Commercial scenarios needing a permissive license (Apache 2.0).
- Fine-tuning for specialized tasks requiring a powerful base model.

### llama3.3:70b
**Meta • 70B parameters • Context: 132,000 tokens**

State-of-the-art multilingual model developed by Meta, designed to excel in natural dialogue, complex reasoning, and nuanced instruction understanding.

**Technical specifications:**
- **Speed**: 29 tokens/second
- **Consumption**: 7.85 kWh/million tokens
- **License**: [LLAMA 3.3 Community License](./licences/llama_3.3_community_licence.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Dialogue` `Multilingual`

**Use cases:**
- Multilingual chatbots supporting 8 languages simultaneously
- Execution of complex, chained instructions (prompt chaining)
- Processing of 60K-token dialogue windows for conversational history
- Analysis of large legal or technical documents (>100 pages)
- Generation of structured text with strict adherence to stylistic guidelines

### ministral-3:14b
**Mistral AI • 14B parameters • Context: 250,000 tokens**

The most powerful model in the Ministral family, designed for complex tasks on local infrastructure.

**Technical specifications:**
- **Speed**: 31 tokens/second
- **Consumption**: 4.30 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `High Performance` `Edge` `Reasoning` `Code`

**Use cases:**
- Solving complex problems locally
- Coding and engineering assistants
- Deep document analysis with reasoning

### nemotron-3-nano:30b
**NVIDIA • 30B parameters • Context: 250,000 tokens**

NVIDIA-optimized model for complex reasoning and tool utilization, deployed with an extended context.

**Technical specifications:**
- **Speed**: 89 tokens/second
- **Consumption**: 1.62 kWh per million tokens
- **License**: [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context`

**Use cases:**
- Complex autonomous agents with multiple tool calls
- Logical reasoning and problem solving
- Long document analysis with precise extraction

### olmo-3:32b
**AllenAI • 32B parámetros • Contexto: 65.536 tokens**

El primer modelo de razonamiento completamente abierto a esta escala, rivalizando con los mejores modelos propietarios.

**Especificaciones técnicas:**
- **Velocidad**: 19 tokens/segundo
- **Consumo**: 7,02 kWh/millón de tokens
- **Licencia**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas:** `Open-Source` `Gran Contexto` `Razonamiento` `Transparencia` `Código` `Alto Rendimiento`

**Casos de uso:**
- Razonamiento complejo y resolución de problemas multi-etapa
- Desarrollo de software avanzado y generación de código
- Análisis profundo que requiere transparencia sobre el proceso de toma de decisiones

### olmo-3:7b
**AllenAI • 7B parameters • Context: 65,536 tokens**

Reference "Fully Open" model, offering complete transparency (data, code, weights) and remarkable efficiency.

**Technical specifications:**
- **Speed**: 37 tokens/second
- **Consumption**: 1.65 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Open-Source` `Large Context` `Transparent` `Efficient` `Maths` `Code`

**Use cases:**
- Academic and scientific research requiring full reproducibility
- Programming tasks and mathematical problem solving
- Analysis of medium-sized documents with full traceability

### qwen3-2507:235b
**Qwen Team • 235B parameters • Context: 130,000 tokens**

Massive MoE model with 235 billion parameters, activating only 22 billion at a time, delivering state-of-the-art performance.

**Technical specifications:**
- **Speed**: 58 tokens/second
- **Energy consumption**: 3.93 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.license.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Very Large`

**Use cases:**
- Solving complex mathematical and logical problems
- Tasks requiring extensive knowledge base
- Advanced coding assistant
- In-depth document analysis

### qwen3-2507:30b-a3b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

Improved version of the non-thinking mode of Qwen3-30B, featuring enhanced general capabilities, broader knowledge coverage, and better user alignment.

**Technical specifications:**
- **Speed**: 104 tokens/second
- **Energy consumption**: 1.39 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Large Context` `MoE` `Multilingual`

**Use cases:**
- Complex tasks requiring precise instruction following and logical reasoning.
- Multilingual applications with extensive knowledge coverage.
- High-quality text generation for open-ended and subjective tasks.
- Analysis of very large documents thanks to the 250k-token context.

### qwen3-coder:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

MoE-optimized model for software engineering tasks, featuring an extremely long context.

**Technical specifications:**
- **Speed**: 104 tokens/second
- **Consumption**: 1.39 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Programming` `Large Context` `MoE`

**Use cases:**
- Software engineering agents for exploring and modifying codebases
- Generation of complex code with repository-scale understanding
- Reasoning tasks over extended contexts
- Code improvement via reinforcement learning

### qwen3-next:80b
**Qwen Team • 80B parameters • Context: 262,144 tokens**

Next 80B model from Qwen, optimized for large contexts and reasoning, served via vLLM (A100).

**Technical specifications:**
- **Speed**: 148 tokens/second
- **Consumption**: 1.54 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `MoE`

**Use cases:**
- Advanced conversational agents with tool integration
- Analysis of very large documents (up to 260k tokens)
- Code generation and complex tasks requiring structured reasoning

### qwen3-omni:30b
**Qwen Team • 30B parameters • Context: 32,768 tokens**

Qwen3-Omni 30B is a native multimodal model capable of understanding text, images, video, and audio within a single stream.

**Technical specifications:**
- **Speed**: 86 tokens/second
- **Consumption**: 2.65 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Omni` `Audio` `Vision` `Agent` `Multimodal` `BF16`

**Use cases:**
- Fluid multimodal interactions (speaks, sees, listens)
- Combined video and audio analysis
- Next-generation intelligent assistants

### qwen3-vl:235b
**Qwen Team • 235B parameters • Context: 200,000 tokens**

The most powerful multimodal model in the catalog, combining state-of-the-art visual understanding with exceptional reasoning capabilities.

**Technical specifications:**
- **Speed**: 31 tokens/second
- **Consumption**: 7.35 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `NVFP4` `Blackwell` `Vision`

**Use cases:**
- Automation of complex document workflows (multilingual OCR, structured extraction)
- Intelligent visual agents for software interaction and GUI automation
- Advanced scientific and technical analysis (STEM, 3D spatial reasoning)
- Multimodal RAG on large documents (>200k tokens) and videos

### qwen3-vl:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

State-of-the-art multimodal model (Qwen3-VL) offering exceptional visual understanding and precise temporal reasoning.

**Technical specifications:**
- **Speed** : 43 tokens/second
- **Consumption** : 3.10 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Large Context` `Multimodal` `Video` `OCR`

**Use cases:**
- Deep analysis of long videos and intelligent surveillance
- Extraction of complex structured data (documents, tables, charts)
- Advanced visual assistants with spatial understanding
- Multimodal reasoning over sequences of events

### qwen3-vl:32b
**Qwen Team • 32B parameters • Context: 250,000 tokens**

High-performance variant of Qwen3-VL, optimized for the most demanding vision tasks.

**Technical specifications:**
- **Speed**: 17 tokens/second
- **Consumption**: 7.84 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Large Context` `Multimodal` `Video` `OCR`

**Use cases:**
- Scientific and technical analysis of high-resolution images
- Automation of complex visual processes
- Detailed understanding of dynamic scenes

### qwen3:14b
**Qwen Team • 14B parameters • Context: 131,072 tokens**

Balanced Qwen3 14B model, delivering strong general performance with good inference speed.

**Technical specifications:**
- **Speed**: 68.2 tokens/second
- **Consumption**: 0.90 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Versatile` `Multilingual`

**Use cases:**
- High-performance virtual assistants
- High-quality content generation
- Classification and extraction tasks

## Modelos especializados

### bge-m3:567m
**BAAI • 567M parameters • Context: 8,192 tokens**

State-of-the-art multilingual embedding model (BGE-M3), offering exceptional semantic search capabilities across more than 100 languages.

**Technical specifications:**
- **Speed**: 171 tokens/second
- **Consumption**: 0.36 kWh/million tokens
- **License**: [MIT](./licences/mit.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Multilingual` `Efficient`

**Use cases:**
- Multilingual semantic search
- Retrieval-Augmented Generation (RAG)
- Document clustering and classification

### deepseek-ocr
**DeepSeek AI • 3B parameters • Context: 8,192 tokens**

Specialized OCR model from DeepSeek, designed for high-precision text extraction with formatting preservation.

**Technical specifications:**
- **Speed**: 79 tokens/second
- **Consumption**: 1.01 kWh/million tokens
- **License**: [MIT License](./licences/mit_licence.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `OCR` `Efficient`

**Use cases:**
- Extraction of structured text (Markdown/LaTeX) from images/PDFs
- Document digitization with complex tables and formulas

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 380,000 tokens**

Second iteration of Devstral (Small 2), state-of-the-art agent model for software engineering, deployed on Mac Studio with massive context.

**Technical specifications:**
- **Speed**: 23 tokens/second
- **Consumption**: 5.80 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Vision` `Open-Source` `Very Large Context`

**Use cases:**
- Autonomous coding agents on very large codebases
- Modernization of legacy systems
- Fixing complex bugs requiring a holistic view of the project

### devstral:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 120,000 tokens**

Devstral 24b is an agent-based LLM specialized in software engineering, co-developed by Mistral AI and All Hands AI.

**Technical specifications:**
- **Speed**: 44 tokens/second
- **Consumption**: 3.28 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Open-Source` `Large Context` `FP8`

**Use cases:**
- Codebase exploration and modification
- Autonomous software engineering agents
- Complex code refactoring and generation

### embeddinggemma:300m
**Google • 300M parameters • Context: 2,048 tokens**

State-of-the-art embedding model from Google, optimized for its size, ideal for search and semantic retrieval tasks.

**Technical specifications:**
- **Speed** : 175 tokens/second
- **Consumption** : 0.35 kWh per million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient` `Multilingual`

**Use cases:**
- Information search and retrieval (Retrieval)
- Document classification and clustering
- Semantic similarity search
- Deployment on resource-constrained devices (mobile, laptop)

### gemma3:1b
**Google • 1B parameters • Context: 120,000 tokens**

Micro-model Gemma 3, ultra-fast and efficient.

**Technical specifications:**
- **Speed** : 53 tokens/second
- **Consumption** : 1.15 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Efficient` `Edge`

**Use cases:**
- Fast text classification
- Simple chatbots
- Rapid prototyping

### gemma3:4b
**Google • 4B parámetros • Contexto: 120.000 tokens**

Modelo compacto Gemma 3 de 4B, ofreciendo un excelente ratio rendimiento/tamaño.

**Especificaciones técnicas:**
- **Velocidad**: 48,0 tokens por segundo
- **Consumo**: 1,27 kWh por millón de tokens
- **Licencia**: [Términos de uso de Google Gemma](./licences/google_gemma_terms_of_use.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Compacto` `Eficiente` `Edge`

**Casos de uso:**
- Asistentes personales en portátiles
- Resumen de texto
- Traducción ligera

### gpt-oss:20b
**OpenAI • 20B parameters • Context: 120,000 tokens**

Open-source language model from OpenAI, optimized for efficiency and deployment on consumer-grade hardware.

**Technical specifications:**
- **Speed**: 9 tokens/second
- **Energy consumption**: 14.81 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Compact` `Fast`

**Use cases:**
- Deployments on resource-constrained devices (edge devices) or low-cost servers.
- Applications requiring fast inference with strong reasoning capabilities.
- Agent-based use cases involving function calls, web navigation, and code execution.
- Fine-tuning for specialized tasks on consumer hardware.

### granite-embedding:278m
**IBM • 278 millones de parámetros • Contexto: 8.192 tokens**

Modelo de embedding ultra-compacto de IBM Granite, diseñado para una eficiencia máxima.

**Especificaciones técnicas:**
- **Velocidad**: 196,3 tokens por segundo
- **Consumo**: 0,31 kWh por millón de tokens
- **Licencia**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Embedding` `Compacto` `Eficiente`

**Casos de uso:**
- Búsqueda semántica
- Agrupamiento de documentos

### granite4-small-h:32b
**IBM • 32B (9B activos) parámetros • Contexto: 128,000 tokens**

Modelo MoE (Mixture-of-Experts) de IBM, diseñado como un "caballo de batalla" para tareas diarias empresariales, con una excelente eficiencia en contextos largos.

**Especificaciones técnicas:**
- **Velocidad**: 33 tokens por segundo
- **Consumo**: 4,04 kWh por millón de tokens
- **Licencia**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `MoE` `Gran contexto` `Eficiente`

**Casos de uso:**
- Agentes conversacionales para soporte al cliente con acceso a bases de conocimientos extensas.
- Automatización de flujos de trabajo empresariales que requieren el uso de múltiples herramientas.
- Análisis de documentos largos con un consumo de recursos optimizado.
- Despliegues en infraestructuras de tamaño medio gracias a su eficiencia.

### granite4-tiny-h:7b
**IBM • 7B (1B activos) parámetros • Contexto: 128.000 tokens**

Modelo híbrido MoE ultraeficiente de IBM, diseñado para baja latencia, aplicaciones en "edge" y locales, y como bloque base para flujos de trabajo de agentes.

**Especificaciones técnicas:**
- **Velocidad**: 58 tokens por segundo
- **Consumo**: 1,05 kWh por millón de tokens
- **Licencia**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ✅ Seguridad

**Etiquetas:** `Agente` `Razonamiento` `Seguridad` `MoE` `Gran contexto` `Eficiente` `Rápido` `Compacto`

**Casos de uso:**
- Aplicaciones embebidas y en "edge" que requieren baja latencia.
- {'Tareas rápidas dentro de flujos de trabajo de agentes más amplios (por ejemplo': 'llamadas a funciones).'}
- Análisis de documentos en hardware de consumo general.
- Despliegues que requieren una huella de memoria mínima.

### medgemma:27b
**Google • 27B parameters • Context: 128,000 tokens**

MedGemma is one of Google's most advanced open models for understanding medical text and images, based on Gemma 3.

**Technical specifications:**
- **Speed**: 22 tokens/second
- **Energy consumption**: 6.56 kWh per million tokens
- **License**: [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Medical` `Vision` `Specialized` `Large Context`

**Use cases:**
- Medical image interpretation (Report generation and VQA)
- Medical text understanding and clinical reasoning (Decision support)
- Patient interaction (Interviews and medical triage)
- Medical record synthesis and literature search

### ministral-3:3b
**Mistral AI • 3B parameters • Context: 250,000 tokens**

Cutting-edge compact model from Mistral AI, designed for efficiency in local and edge deployments.

**Technical specifications:**
- **Speed**: 50 tokens/second
- **Energy consumption**: 1.22 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Efficient` `Edge`

**Use cases:**
- Local inference on mobile devices or edge devices
- Responsive personal assistants
- Fast routing and classification tasks

### ministral-3:8b
**Mistral AI • 8B parameters • Context: 250,000 tokens**

Intermediate-sized model from the Ministral family, offering an optimal balance between performance and resource usage.

**Technical specifications:**
- **Speed**: 55 tokens/second
- **Consumption**: 2.42 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Efficient` `Edge` `Reasoning`

**Use cases:**
- Advanced local conversational assistants
- Document analysis and information extraction
- Tasks requiring a good balance between speed and quality

### mistral-small3.2:24b
**Mistral AI • 24B parameters • Context: 128,000 tokens**

Minor update to Mistral Small 3.1, improving instruction following, function calling robustness, and reducing repetition errors.

**Technical specifications:**
- **Speed**: 27 tokens/second
- **Consumption**: 5.35 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security` `Instruction Following`

**Use cases:**
- Conversational agents with improved instruction following
- Robust integration with external tools via function calling
- Applications requiring high reliability to avoid repetitions
- Use cases identical to Mistral Small 3.1, with enhanced performance

### qwen3-2507-think:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Qwen3-4B model optimized for reasoning, with improved performance on logical tasks, mathematics, science, and code, and an extended context of up to 250K tokens.

**Technical specifications:**
- **Speed**: 52 tokens/second
- **Energy consumption**: 2.56 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `Compact` `Fast`

**Use cases:**
- Highly complex reasoning tasks (logic, math, science, code).
- Conversational agents with very long conversation history (256k tokens).
- Deep reasoning analysis of very large documents.
- Integration with external tools via function calling on extremely large contexts.

### qwen3-2507:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Updated version of the Qwen3-4B non-thinking mode, featuring significant improvements in general capabilities, expanded knowledge coverage, and better alignment with user preferences.

**Technical Specifications:**
- **Speed**: 30 tokens/second
- **Consumption**: 4.44 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Large Context` `Compact` `Fast` `Multilingual`

**Use Cases:**
- General tasks requiring precise instruction following and logical reasoning.
- Multilingual applications with broad knowledge coverage.
- High-quality text generation for open-ended and subjective tasks.
- Analysis of very large documents thanks to a 256k-token context.

### qwen3-embedding:0.6b
**Qwen Team • 0.6B parameters • Context: 32,768 tokens**

Ultra-light Qwen3 embedding model, optimized for speed and efficiency on resource-constrained infrastructure.

**Technical specifications:**
- **Speed**: N/A
- **Energy consumption**: 0.57 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Efficient`

**Use cases:**
- Fast semantic search
- Real-time text classification

### qwen3-embedding:4b
**Qwen Team • 4B parameters • Context: 40,000 tokens**

Ultra-performing Qwen3-4B embedding model, offering deep semantic understanding and an extended context window.

**Technical specifications:**
- **Speed** : N/A
- **Energy consumption** : 0.57 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Large Context` `Efficient`

**Use cases:**
- Semantic search on long documents
- RAG with extended context windows
- High-precision semantic analysis

### qwen3-vl:2b
**Qwen Team • 2 millones de parámetros • Contexto: 250.000 tokens**

Modelo multimodal ultracompacto Qwen3-VL, que ofrece capacidades avanzadas de visión en dispositivos de borde.

**Especificaciones técnicas:**
- **Velocidad**: 64 tokens por segundo
- **Consumo**: 0,95 kWh por millón de tokens
- **Licencia**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Compacto` `Eficiente` `Multimodal` `Borde` `OCR`

**Casos de uso:**
- Análisis de imágenes en tiempo real en dispositivos móviles
- OCR y lectura de documentos ligeros
- Clasificación y ordenación visual rápida

### qwen3-vl:4b
**Equipo Qwen • 4B parámetros • Contexto: 250.000 tokens**

Modelo multimodal Qwen3-VL equilibrado, que ofrece un rendimiento sólido en visión con una huella reducida.

**Especificaciones técnicas:**
- **Velocidad**: 57 tokens por segundo
- **Consumo**: 2,34 kWh por millón de tokens
- **Licencia**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Compacto` `Multimodal` `Eficiente` `Vídeo` `OCR`

**Casos de uso:**
- Análisis automatizado de documentos (facturas, formularios)
- Comprensión de contenido de vídeo
- Asistentes visuales interactivos

### qwen3-vl:8b
**Qwen Team • 8B parámetros • Contexto: 250.000 tokens**

Modelo multimodal Qwen3-VL (8B), con rendimiento avanzado en visión y una huella razonable.

**Especificaciones técnicas:**
- **Velocidad**: 44 tokens por segundo
- **Consumo**: 3,03 kWh por millón de tokens
- **Licencia**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización**: FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas:** `Visión` `Compacto` `Multimodal` `Eficiente` `Vídeo` `OCR`

**Casos de uso:**
- Análisis automatizado de documentos
- Comprensión de contenido de vídeo
- Asistentes visuales interactivos

### qwen3:0.6b
**Qwen Team • 0.6B parameters • Context: 40,000 tokens**

Ultra-light Qwen3 model with 0.6 billion parameters, offering exceptional inference speed for simple and fast tasks.

**Technical specifications:**
- **Speed**: 46 tokens/second
- **Consumption**: 1.33 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Efficient` `Multilingual`

**Use cases:**
- Simple text processing tasks
- Fast classification and sorting
- Lightweight assistants with low latency

### rnj-1:8b
**Essential AI • 8B parameters • Context: 32,000 tokens**

8B "Open Weight" model specialized in code, mathematics, and sciences (STEM).

**Technical specifications:**
- **Speed**: 31 tokens/second
- **Consumption**: 1.97 kWh/million tokens
- **License**: [Open Weights](./licences/open_weights.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Code` `Maths` `STEM` `Reasoning` `Efficient`

**Use cases:**
- Advanced programming assistant and code generation
- Solving complex mathematical problems
- Scientific and technical tasks (STEM)

## Cas de uso recomendados

### Multilingual dialogue

Chatbots and assistants capable of communicating in multiple languages with automatic language detection, context preservation throughout the conversation, and understanding of linguistic nuances.

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

Direct processing of images and visual documents without prior OCR preprocessing, interpretation of technical diagrams, charts, tables, drawings, and photos, with generation of detailed textual explanations of the visual content.

**Recommended models:**

- deepseek-OCR
- Mistral Small 3.2
- Gemma 3
- Qwen 3 VL

### Seguridad y cumplimiento

Aplicaciones que requieren capacidades específicas en materia de seguridad; filtrado de contenido sensible, trazabilidad de razonamientos, verificación del RGPD/HDS, minimización de riesgos, análisis de vulnerabilidades y cumplimiento de regulaciones sectoriales.

**Modelos recomendados:**

- Granite Guardian
- Granite 4
- Devstral
- Mistral Small 3.2
- Magistral small

### Lightweight and Embedded Deployments

Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded systems or IoT devices

**Recommended models:**

- Gemma 3n
- Granite 4 tiny
- Qwen 3 VL (2B)