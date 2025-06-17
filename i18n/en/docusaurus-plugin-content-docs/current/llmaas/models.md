### Programming and Development
Code generation and optimization in multiple languages, debugging, refactoring, full feature development, understanding of complex algorithmic implementations and unit test creation

**Recommended models:**

- DeepCoder
- QwQ
- DeepSeek-R1
- Granite 3.3
- Devstral

### DeepSeek-R1 671B
**DeepSeek AI • 671B parameters • Context: 32,000 tokens**

Extremely large model from DeepSeek AI, designed for the pinnacle of reasoning and generation.

**Technical specifications:**
- **Speed**: 16 tokens/second
- **Consumption**: 8.33 kWh/million tokens
- **License**: [MIT License](./licences/deepseek-r1_671b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Pinnacle reasoning tasks
- High-quality text generation
- AI research and development

---

### Gemma 3 12B
**Google • 12B parameters • Context: 120,000 tokens**

Intermediate version of the Gemma 3 model offering an excellent balance between performance and efficiency.

**Technical specifications:**
- **Speed**: 67 tokens/second ⚡
- **Consumption**: 2.73 kWh/million tokens
- **License**: [Google Gemma Terms of Use](./licences/gemma3_12b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Use cases:**
- Multimodal applications with moderate resource constraints
- Document processing with standard context (up to 100 pages)
- Text content generation and combined image analysis
- Deployments on standard GPUs without specialized infrastructure
- Advanced chatbots with integrated visual and text capabilities

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B parameters • Context: 16,000 tokens**

Specialized language model for cybersecurity, optimized for efficiency.

**Technical specifications:**
- **Speed** : 22 tokens/second tokens/second
- **Consumption** : 2.46 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

### Qwen3 0.6b
**Qwen Team • 0.6B parameters • Context: 32,000 tokens**

Compact and efficient model from the Qwen3 family, suitable for general tasks on limited resources.

**Technical specifications:**
- **Speed**: 60 tokens/second ⚡
- **Consumption**: 0.9 kWh/million tokens 🌱
- **License**: [Apache 2.0](./licences/apache2.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

### Granite 3 Guardian 8B
**IBM • 8B parameters • Context: 32,000 tokens**

IBM model specialized in security and compliance, offering advanced risk detection capabilities.

**Technical specifications:**
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

### Granite 3.3 8B
**IBM • 8B parameters • Context: 60,000 tokens**

Granite 8B model fine-tuned by IBM for improved reasoning and instruction following, with a context of 128k tokens.

**Technical specifications:**
- **Speed** : 27 tokens/second
- **Consumption** : 2.0 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Use cases:**
- General instruction-following tasks (classification, extraction, Q&A)
- Multilingual AI assistants (12 languages)
- Processing of very long documents (128k tokens): summaries and question-answering
- Code generation/completion with Fill-in-the-Middle
- Integration with external tools via function calling
- Structured reasoning with the "Thinking" mode

### Gemma 3 27B
**Google • 27B parameters • Context: 120,000 tokens**

Revolutionary model from Google offering an optimal balance between power and efficiency, with an exceptional performance/cost ratio for demanding professional applications.

**Technical specifications:**
- **Speed** : 68 tokens/second ⚡
- **Consumption** : 3.91 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/gemma3_27b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Use cases:**
- Document analysis with extended context up to 120K tokens (approximately 400 pages)
- Semantic indexing and search in large document databases
- Simultaneous image and text processing through multimodal capabilities
- Structured data extraction from PDFs and scanned documents
- Integration with external tools via API function calling

### QwQ-32B
**Qwen Team • 32B parameters • Context: 32,000 tokens**

A 32-billion-parameter model enhanced by reinforcement learning (RL) to excel in reasoning, coding, mathematics, and agent tasks.

**Technical specifications:**
- **Speed**: 35 tokens/second tokens/second
- **Consumption**: 5.22 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache2.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Complex problem resolution requiring reasoning and tool usage
- Code generation and execution with result verification
- Advanced math tasks with accuracy verification
- Agent applications capable of interacting with the environment
- Enhanced instruction following and alignment with human preferences

### Gemma 3 4B
**Google • 4B parameters • Context: 120,000 tokens**

Compact Google model offering excellent performance in a lightweight and cost-effective format.

**Technical specifications:**
- **Speed** : 58 tokens/second ⚡
- **Consumption** : 0.93 kWh/million tokens 🌱
- **License** : [Google Gemma Terms of Use](./licences/gemma3_4b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Use cases:**
- Embedded applications and edge computing with image processing
- Multimodal reactive chatbots requiring low latency
- Large-scale deployments with visual and text capabilities
- Mobile applications with image and text analysis
- Processing of simple to medium complexity visual queries with high performance

### Visual Analysis

Direct processing of images and visual documents without OCR pre-processing, interpretation of technical diagrams, graphs, tables, drawings, and photos with generation of detailed textual explanations of the visual content

**Recommended Models:**

- Granite 3.2 Vision
- Mistral Small 3.1
- Gemma 3
- Qwen2.5-VL

### Note on Performance Metrics
The speed values (tokens/s) represent performance targets under real-world conditions. The energy consumption (kWh/Mtoken) is calculated by dividing the estimated inference server power (in Watts) by the model's measured speed (in tokens/second), then converted to kilowatt-hours per million tokens. This method provides a practical comparison of the energy efficiency of different models, to be used as a relative indicator rather than an absolute measure of electrical consumption.

### Qwen3 1.7b
**Qwen Team • 1.7B parameters • Context: 32,000 tokens**

Very compact model from the Qwen3 family, offering a good performance/size balance for lightweight deployments.

**Technical specifications:**
- **Speed**: 83 tokens/second ⚡
- **Consumption**: 0.65 kWh/million tokens 🌱
- **License**: [Apache 2.0](./licences/apache2.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

---

### devstral 24B
**Mistral AI & All Hands AI • 24B parameters • Context: 120,000 tokens**

Devstral is an agent-based LLM for software engineering tasks.

**Technical specifications:**
- **Speed** : 53 tokens/second ⚡
- **Consumption** : 4.5 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Use cases:**
- Codebase exploration and modification
- Agentic
- European

### Qwen 2.5 0.5B
**Qwen Team • 0.5B parameters • Context: 32,000 tokens**

Ultra-lightweight micro-model from the Qwen 2.5 family, designed for maximum efficiency on constrained devices.

**Technical specifications:**
- **Speed**: 57 tokens/second tokens/second ⚡
- **Consumption**: 0.95 kWh/million tokens 🌱
- **License**: [MIT license](./licences/qwen2.5_0.5b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

### DeepSeek-R1 14B
**DeepSeek AI • 14B parameters • Context: 32,000 tokens**

Compact and efficient version of the DeepSeek-R1 model, offering an excellent trade-off between performance and lightweight for deployments requiring flexibility and responsiveness.

**Technical specifications:**
- **Speed**: 60 tokens/second ⚡
- **Consumption**: 3.05 kWh/million tokens
- **License**: [MIT license](./licences/deepseek-r1_14b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- General-purpose applications with fast inference requirements (44 tokens/s)
- Deployments on standard servers without specialized GPU (14B parameters)
- Text processing with contextual analysis and response time < 2s
- Edge computing deployment with optimized local inference
- Rapid AI application prototyping with short iteration time

### Gemma 3 1B
**Google • 1B parameters • Context: 32,000 tokens**

Ultra-lightweight micro-model designed for deployments on devices with very limited resources.

**Technical specifications:**
- **Speed**: 41 tokens/second
- **Consumption**: 1.32 kWh/million tokens 🌱
- **License**: [Google Gemma Terms of Use](./licences/gemma3_1b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Use cases:**
- Deployment on IoT devices and embedded systems with API integration
- Applications requiring local CPU inference with function calls
- Basic text tasks with instant response time and function calling
- Compact assistants for consumer applications with external service integration
- Intelligent control systems integrating multiple APIs/services

### Pricing

| Usage Type | Price |
|------------|-------|
| **Input Tokens** | 0.9€ / million tokens |
| **Output Tokens** | 4€ / million tokens |
| **Advanced Reasoning** | 21€ / million tokens |

### Security and Compliance

Applications requiring specific security capabilities; sensitive content filtering, reasoning traceability, RGPD/HDS compliance verification, risk minimization, vulnerability analysis, and adherence to sectoral regulations

**Recommended models:**

- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Foundation-Sec-8B

### Granite 3.3 2B
**IBM • 2B parameters • Context: 128k tokens**

Granite 2B model fine-tuned by IBM, optimized for reasoning and instruction following, with a context of 128k tokens.

**Technical specifications:**
- **Speed** : 45 tokens/second ⚡
- **Consumption** : 1.2 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Use cases:**
- Lightweight deployments with large context (128k tokens)
- General instruction-following tasks on limited resources
- Compact multilingual AI assistants
- Processing long documents on less powerful devices
- FIM code generation/completion on standard workstations

## Overview

Cloud Temple LLMaaS offers **large language models** that are carefully selected and optimized. Our catalog covers the entire spectrum, from ultra-efficient micro-models to extremely large models.

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B parameters • Context: 32,000 tokens**

Next-generation FP8 MoE model (3B activated) with hybrid thinking modes and advanced agent capabilities.

**Technical specifications:**
- **Speed** : 103 tokens/second ⚡
- **Consumption** : 2.58 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Advanced conversational agents with tool integration (MCP)
- Complex problem solving (math, code) with "Thinking" mode
- Multilingual applications (>100 languages)
- Scenarios requiring cost/performance balance (MoE) on VLLM
- Engaging multi-turn dialogue and precise instruction following

## Recommended Use Cases

---
title: AI Model Catalog
sidebar_position: 2
---

### Qwen3 4b
**Qwen Team • 4B parameters • Context: 32,000 tokens**

Compact model from the Qwen3 family offering excellent performance in a lightweight and cost-effective format.

**Technical specifications:**
- **Speed** : 48 tokens/second tokens/second
- **Consumption** : 1.13 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

---

### Qwen 2.5 1.5B
**Qwen Team • 1.5B parameters • Context: 32,000 tokens**

Very compact model from the Qwen 2.5 family, offering a good performance/size balance for lightweight deployments.

**Technical specifications:**
- **Speed**: 94 tokens/second ⚡
- **Consumption**: 0.58 kWh/million tokens 🌱
- **License**: [MIT License](./licences/qwen2.5_1.5b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

### DeepSeek-R1 32B
**DeepSeek AI • 32B parameters • Context: 32,000 tokens**

Intermediate version of the DeepSeek-R1 model offering a strategic balance between the advanced capabilities of the 70B version and the efficiency of the 14B version, for optimal versatility and performance.

**Technical specifications:**
- **Speed**: 33 tokens/second
- **Consumption**: 5.54 kWh/million tokens
- **License**: [MIT License](./licences/deepseek-r1_32b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Applications requiring a good power/cost balance (32B parameters)
- Professional text processing with analysis of semantic nuances
- Automated generation of structured reports from raw data
- Applications combining data analysis and content generation
- Specialized assistants for technical sectors (legal, medical, technical)

### Granite 3.1 MoE
**IBM • 3B parameters • Context: 32,000 tokens**

Innovative IBM model using the Mixture-of-Experts (MoE) architecture to deliver exceptional performance while drastically optimizing computational resource usage.

**Technical specifications:**
- **Speed** : 74 tokens/second ⚡
- **Consumption** : 0.73 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Use cases:**
- General-purpose applications with optimized inference cost (42 tokens/second)
- Document processing in CPU environments with limited RAM usage
- Specialized analyses with dynamic activation of relevant parts of the model
- High-density deployments with low energy consumption per inference
- Parallel processing of multiple query types with MoE specialization

## Large Models

### DeepSeek-R1 70B
**DeepSeek AI • 70B parameters • Context: 32,000 tokens**

70B Model from DeepSeek AI

**Technical Specifications:**
- **Speed** : 20 tokens/second tokens/second
- **Consumption** : 11.44 kWh/million tokens
- **License** : [MIT License](./licences/deepseek-r1_70b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use Cases:**
- Complex reasoning tasks
- High-quality text generation
- In-depth document analysis (within the 27k context limit)

### Lucie-7B-Instruct
**OpenLLM-France • 7B parameters • Context: 32,000 tokens**

Causal multilingual open-source model (7B), fine-tuned from Lucie-7B. Optimized for French.

**Technical specifications:**
- **Speed** : 41 tokens/second tokens/second
- **Consumption** : 1.32 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

### Multilingual Dialogue

Chatbots and assistants capable of communicating in multiple languages with automatic detection, maintaining the context throughout the conversation and understanding linguistic specifics

**Recommended Models:**

- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Lightweight and Embedded Deployments

Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded systems or IoT

**Recommended Models:**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3

# Catalog of LLM as a Service Models

### Qwen3 8b
**Qwen Team • 8B parameters • Context: 32,000 tokens**

Qwen3 8B model offering a good balance between performance and efficiency for general tasks.

**Technical specifications:**
- **Speed**: 29 tokens/second
- **Consumption**: 1.87 kWh/million tokens 🌱
- **License**: [Apache 2.0](./licences/apache2.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

### Cogito 3B
**Deep Cogito • 3B parameters • Context: 32,000 tokens**

Compact version of the Cogito model, optimized for reasoning on devices with limited resources.

**Technical specifications:**
- **Speed** : 63 tokens/second ⚡
- **Consumption** : 0.86 kWh/million tokens 🌱
- **License** : [LLAMA 3.2 Community Licence](./licences/cogito_3b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

---

### Qwen 2.5 14B
**Qwen Team • 14B parameters • Context: 32,000 tokens**

A versatile mid-sized model from the Qwen 2.5 family, offering a good performance/resource balance.

**Technical specifications:**
- **Speed**: 61 tokens/second tokens/second ⚡
- **Consumption**: 3.0 kWh/million tokens
- **License**: [MIT License](./licences/qwen2.5_14b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

### Cogito 14B
**Deep Cogito • 14B parameters • Context: 32,000 tokens**

Deep Cogito model specifically designed to excel in deep reasoning tasks and nuanced contextual understanding, ideal for advanced analytical applications.

**Technical specifications:**
- **Speed** : 60 tokens/second tokens/second ⚡
- **Consumption** : 3.05 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Semantic analysis of texts with identification of implicit implications
- Structured causal reasoning with identification of cause-effect relationships
- Synthesis of complex documents with extraction of key information
- Precise question-answering systems on specialized document corpora
- Argumentative analysis with evaluation of reasoning solidity

## Specialized Models

### Mistral Small 3.1
**Mistral AI • 24B parameters • Context: 60,000 tokens**

Compact and reactive model from Mistral AI, specifically designed to provide smooth and relevant conversational assistance with optimal response speed.

**Technical specifications:**
- **Speed**: 14 tokens/second tokens/second
- **Consumption**: 13.06 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache2.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Use cases:**
- Conversational applications
- Virtual assistants combining image and text analysis (26 tokens/s)
- Technical support chatbots with access to technical documentation
- Content creation/editing tools with immediate response (blogs, emails)
- Deployment on standard infrastructure (24B parameters)

### Long Document Analysis

Processing of large documents (>100 pages) with context maintenance throughout the entire text, extraction of key information, generation of relevant summaries, and answering specific questions about the content

**Recommended Models:**

- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Llama 3.3 70B
**Meta • 70B parameters • Context: 60,000 tokens**

State-of-the-art multilingual model developed by Meta, designed to excel in natural dialogue, complex reasoning, and nuanced understanding of instructions.

**Technical specifications:**
- **Speed**: 30 tokens/second
- **Consumption**: 8.87 kWh/million tokens
- **License**: [LLAMA 3.3 Community Licence](./licences/llama3.3_70b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Use cases:**
- Multilingual chatbots supporting 8 languages simultaneously
- Execution of chained complex instructions (prompt chaining)
- Processing a 60K token dialogue window for conversational history
- Analysis of large legal or technical documents (>100 pages)
- Generation of structured texts with fidelity to stylistic instructions

### Granite Embedding
**IBM • 278M parameters • Context: 32,000 tokens**

Ultra-lightweight IBM embedding model for semantic search and classification.

**Technical specifications:**
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

---

### Qwen 2.5 32B
**Qwen Team • 32B parameters • Context: 32,000 tokens**

Powerful model from the Qwen 2.5 family, offering advanced capabilities in understanding and generation.

**Technical specifications:**
- **Speed** : 32 tokens/second tokens/second
- **Consumption** : 5.73 kWh/million tokens
- **License** : [MIT licence](./licences/qwen2.5_32b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

### Qwen2.5-VL 3B
**Qwen Team • 3.8B parameters • Context: 128 000 tokens**

Compact Vision-Language model, high-performance solution for edge AI.

**Technical specifications:**
- **Speed** : 65 tokens/second ⚡
- **Consumption** : 0.83 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

---

### Cogito 32B
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model offering significantly enhanced reasoning and analysis capabilities, designed for the most demanding analytical AI applications.

**Technical specifications:**
- **Speed** : 32 tokens/second
- **Consumption** : 5.73 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Multi-factorial scenario analysis with probabilistic outcome evaluation
- Scientific problem resolution with formal step-by-step demonstration
- High-criticality applications requiring precision and result verifiability
- Expert systems in specialized domains (legal, medical, technical)
- Analysis with multi-step reasoning and complete explainability of conclusions

### DeepCoder
**Agentica x Together AI • 14B parameters • Context: 32,000 tokens**

Open source AI model (14B) by Together AI & Agentica, credible alternative to proprietary models for code generation.

**Technical specifications:**
- **Speed** : 62 tokens/second ⚡
- **Consumption** : 2.95 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Code generation in over 15 languages with performance optimization
- Debugging and refactoring of existing codebases with impact analysis
- Implementation of complex algorithms (graphs, trees, heuristics)
- Code transposition between languages and frameworks (e.g., Python to JavaScript)
- Automated unit test creation with code coverage > 80%

### Qwen3 14B
**Qwen Team • 14B parameters • Context: 32,000 tokens**

New generation dense model Qwen3 (14B), offering performance equivalent to Qwen2.5 32B with better efficiency.

**Technical specifications:**
- **Speed**: 69 tokens/second ⚡
- **Consumption**: 2.65 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache2.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- General tasks requiring performance and large context
- Creative and technical content generation
- Data analysis and complex reasoning
- Integration with external tools via function calling

### Global Statistics

| Metric | Value |
|----------|--------|
| **Total Number of Models** | 36 models |
| **Minimum Context** | 8 192 tokens |
| **Maximum Context** | 120 000 tokens |
| **Compliance** | SecNumCloud ✅ HDS ✅ Sovereignty ✅ C5 ✅ |
| **Location** | 100% France 🇫🇷 |

### Qwen3 235B
**Qwen Team • 235B parameters • Context: 32,000 tokens**

Very large-scale model from the new generation Qwen3, offering extended capabilities for the most complex tasks.

**Technical specifications:**
- **Speed**: 21 tokens/second
- **Consumption**: 6.35 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache2.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Highly advanced conversational agents with large context and tool integration (MCP)
- Solving extremely complex problems (maths, code)
- Analysis and generation of very large and technical documents
- Multilingual applications (>100 languages) requiring high-fidelity understanding and generation

### Qwen 2.5 3B
**Qwen Team • 3B parameters • Context: 32,000 tokens**

Compact and efficient model from the Qwen 2.5 family, suitable for general tasks on limited resources.

**Technical specifications:**
- **Speed**: 60 tokens/second ⚡
- **Consumption**: 0.9 kWh/million tokens 🌱
- **License**: [MIT license](./licences/qwen2.5_3b.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

### Qwen2.5-VL 7B
**Qwen Team • 7B (8.3B) parameters • Context: 128,000 tokens**

High-performance Vision-Language model, outperforming GPT-4o-mini on certain tasks.

**Technical specifications:**
- **Speed** : 37 tokens/second tokens/second
- **Consumption** : 1.46 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

### Granite 3 Guardian 2B
**IBM • 2B parameters • Context: 8 192 tokens**

Compact IBM model specialized in security and compliance, detecting risks and inappropriate content.

**Technical specifications:**
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

### Qwen3 32B
**Qwen Team • 32B parameters • Context: 40,000 tokens**

Next-generation Qwen3 model offering advanced capabilities in reasoning, code, and agentics, with an extended context.

**Technical specifications:**
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Use cases:**
- Advanced conversational agents with large context and tool integration (MCP)
- Complex problem solving (maths, code) with "Thinking" mode
- Analysis and generation of large documents
- Multilingual applications (>100 languages) requiring deep understanding

### Granite 3.2 Vision  
**IBM • 2B parameters • Context: 16,384 tokens**  

Revolutionary compact model from IBM specialized in computer vision, capable of analyzing and understanding visual documents directly without relying on intermediate OCR technologies.  

**Technical specifications:**  
- **Speed** : 48 tokens/second ⚡  
- **Consumption** : 1.13 kWh/million tokens 🌱  
- **License** : [Apache 2.0](./licences/apache2.licence.md)  
- **Location** : FR 🇫🇷  

**Capabilities:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security  

**Use cases:**  
- Extract structured data from invoices and forms without OCR  
- Direct analysis of tables and charts with trend interpretation  
- Reading and interpreting technical diagrams (electrical, mechanical)  
- Processing handwritten documents with high recognition rates  
- Lightweight computer vision (2B parameters) with high speed (79 tokens/s)