---
title: AI Model Catalogue
sidebar_position: 2
---

# LLM as a Service Model Catalogue

## Overview

Cloud Temple LLMaaS offers **36 carefully selected and optimized large language models** to meet the most stringent **SecNumCloud** requirements. Our catalog covers the entire spectrum, from ultra-efficient micro-models to extremely large models.

### Global Statistics

| Metric | Value |
|--------|-------|
| **Total number of models** | 36 models |
| **Minimum context** | 8,192 tokens |
| **Maximum context** | 120,000 tokens |
| **Compliance** | SecNumCloud ✅ HDS ✅ Sovereignty ✅ C5 ✅ |
| **Location** | 100% France 🇫🇷 |

### Pricing

| Usage Type | Price |
|------------|-------|
| **Input Tokens** | 0.9€ / million tokens |
| **Output Tokens** | 4€ / million tokens |
| **Advanced Reasoning** | 21€ / million tokens |

## Large Models

### Llama 3.3 70B
**Meta • 70B parameters • Context: 60,000 tokens**

State-of-the-art multilingual model developed by Meta, designed to excel in natural dialogue, complex reasoning, and nuanced instruction understanding.

**Technical Specifications:**
- **Speed** : 30 tokens/second tokens/second
- **Consumption** : 8.87 kWh/million tokens
- **License** : [LLAMA 3.3 Community Licence](./licences/llama3.3_70b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Dialogue` `Multilingual`

**Use Cases:**
- Multilingual chatbots supporting 8 languages simultaneously
- Execution of chained complex instructions (prompt chaining)
- Processing of a 60K token dialogue window for conversational history
- Analysis of large legal or technical documents (>100 pages)
- Generation of structured texts with fidelity to stylistic instructions

---

### Qwen3 235B
**Qwen Team • 235B parameters • Context: 32,000 tokens**

Next-generation very large model from Qwen3, offering extended capabilities for the most complex tasks.

**Technical Specifications:**
- **Speed** : 21 tokens/second
- **Consumption** : 6.35 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Multilingual` `Very Large`

**Use Cases:**
- Highly advanced conversational agents with large context and tool integration (MCP)
- Solving extremely complex problems (maths, code)
- Analysis and generation of very large and technical documents
- Multilingual applications (>100 languages) requiring high-fidelity understanding and generation

---

### DeepSeek-R1 671B
**DeepSeek AI • 671B parameters • Context: 32,000 tokens**

Extremely large model from DeepSeek AI, designed for peak reasoning and generation.

**Technical Specifications:**
- **Speed** : 16 tokens/second tokens/second
- **Consumption** : 8.33 kWh/million tokens
- **License** : [MIT Licence](./licences/deepseek-r1_671b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Extremely Large`

**Use Cases:**
- Peak reasoning tasks
- High-quality text generation
- AI research and development

---

### Gemma 3 27B
**Google • 27B parameters • Context: 120,000 tokens**

Revolutionary Google model offering optimal balance between power and efficiency, with exceptional performance/cost ratio for demanding professional applications.

**Technical Specifications:**
- **Speed** : 68 tokens/second tokens/second ⚡
- **Consumption** : 3.91 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/gemma3_27b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Fast` `Large Context`

**Use Cases:**
- Document analysis with extended context up to 120K tokens (approximately 400 pages)
- Semantic indexing and search in large document databases
- Simultaneous processing of images and text through multimodal capabilities
- Structured data extraction from PDFs and scanned documents
- Integration with external tools via function calling API

---

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B parameters • Context: 32,000 tokens**

Next-generation FP8 MoE (3B activated) model with hybrid thinking modes and advanced agent capabilities.

**Technical Specifications:**
- **Speed** : 103 tokens/second tokens/second ⚡
- **Consumption** : 2.58 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Fast` `Multilingual`

**Use Cases:**
- Advanced conversational agents with tool integration (MCP)
- Solving complex problems (maths, code) with "Thinking" mode
- Multilingual applications (>100 languages)
- Scenarios requiring cost/performance balance (MoE) on VLLM
- Engaging multi-turn dialogues with precise instruction following

---

### DeepSeek-R1 70B
**DeepSeek AI • 70B parameters • Context: 32,000 tokens**

DeepSeek AI 70B model

**Technical Specifications:**
- **Speed** : 20 tokens/second tokens/second
- **Consumption** : 11.44 kWh/million tokens
- **License** : [MIT Licence](./licences/deepseek-r1_70b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Large`

**Use Cases:**
- Complex reasoning tasks
- High-quality text generation
- In-depth document analysis (within 27k context limit)

---

## Specialized Models

### Qwen3 14B
**Qwen Team • 14B parameters • Context: 32,000 tokens**

Next-generation dense Qwen3 model (14B) offering performance equivalent to Qwen2.5 32B with better efficiency.

**Technical Specifications:**
- **Speed** : 69 tokens/second tokens/second ⚡
- **Consumption** : 2.65 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Fast` `Multilingual`

**Use Cases:**
- General tasks requiring performance and large context
- Creative and technical content generation
- Data analysis and complex reasoning
- Integration with external tools via function calling

---

### Gemma 3 12B
**Google • 12B parameters • Context: 120,000 tokens**

Intermediate version of the Gemma 3 model offering excellent balance between performance and efficiency.

**Technical Specifications:**
- **Speed** : 67 tokens/second tokens/second ⚡
- **Consumption** : 2.73 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/gemma3_12b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Fast` `Large Context`

**Use Cases:**
- Multimodal applications with moderate resource constraints
- Document processing with standard context (up to 100 pages)
- Combined text generation and image analysis
- Deployments on standard GPUs without specialized infrastructure
- Advanced chatbots with integrated visual and text capabilities

---

### Gemma 3 4B
**Google • 4B parameters • Context: 120,000 tokens**

Compact Google model offering excellent performance in a lightweight and economical format.

**Technical Specifications:**
- **Speed** : 58 tokens/second tokens/second ⚡
- **Consumption** : 0.93 kWh/million tokens 🌱
- **License** : [Google Gemma Terms of Use](./licences/gemma3_4b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Fast` `Compact` `Large Context` `Efficient`

**Use Cases:**
- Embedded and edge computing applications with image processing
- Reactive multimodal chatbots requiring low latency
- Large-scale deployments with visual and text capabilities
- Mobile applications with image and text analysis
- Processing of simple to medium complexity visual queries with high performance

---

### Gemma 3 1B
**Google • 1B parameters • Context: 32,000 tokens**

Ultra-light micro-model designed for deployments on devices with very limited resources.

**Technical Specifications:**
- **Speed** : 41 tokens/second tokens/second
- **Consumption** : 1.32 kWh/million tokens 🌱
- **License** : [Google Gemma Terms of Use](./licences/gemma3_1b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Ultra-compact` `Embedded` `Efficient`

**Use Cases:**
- Deployment on IoT devices and embedded systems with API integration
- Applications requiring local inference on CPU with function calls
- Basic text tasks with instant response time and function calling
- Compact assistants for mass-market applications with external service integration
- Intelligent control systems integrating multiple APIs/services

---

### Lucie-7B-Instruct
**OpenLLM-France • 7B parameters • Context: 32,000 tokens**

Open-source multilingual causal model (7B), fine-tuned from Lucie-7B. Optimized for French.

**Technical Specifications:**
- **Speed** : 41 tokens/second tokens/second
- **Consumption** : 1.32 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `French` `Open-Source` `Efficient`

---

### Mistral Small 3.1
**Mistral AI • 24B parameters • Context: 60,000 tokens**

Compact and reactive model from Mistral AI, specifically designed to provide fluid and relevant conversational assistance with optimal response speed.

**Technical Specifications:**
- **Speed** : 14 tokens/second tokens/second
- **Consumption** : 13.06 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security`

**Use Cases:**
- Conversational applications
- Virtual assistants combining image and text analysis (26 tokens/s)
- Technical support chatbots with access to technical documentation
- Content creation/edition tools with immediate response (blogs, emails)
- Deployment on standard infrastructure (24B parameters)

---

### DeepCoder
**Agentica x Together AI • 14B parameters • Context: 32,000 tokens**

Open-source AI model (14B) from Together AI & Agentica, a credible alternative to proprietary models for code generation.

**Technical Specifications:**
- **Speed** : 62 tokens/second tokens/second ⚡
- **Consumption** : 2.95 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Programming` `Reasoning` `Open-Source` `Mathematics` `Fast`

**Use Cases:**
- Code generation in over 15 languages with performance optimization
- Debugging and refactoring of existing codebases with impact analysis
- Implementation of complex algorithms (graphs, trees, heuristics)
- Code transposition between languages and frameworks (e.g., Python to JavaScript)
- Automated creation of unit tests with code coverage > 80%

---

### Granite 3.2 Vision
**IBM • 2B parameters • Context: 16,384 tokens**

Revolutionary compact model from IBM specialized in computer vision, capable of analyzing and understanding visual documents directly without intermediate OCR technologies.

**Technical Specifications:**
- **Speed** : 48 tokens/second tokens/second ⚡
- **Consumption** : 1.13 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Security` `Fast` `Compact` `Efficient`

**Use Cases:**
- Structured data extraction from invoices and forms without OCR
- Direct analysis of tables and charts with trend interpretation
- Reading and interpreting technical diagrams (electrical, mechanical)
- Processing of handwritten documents with high recognition rate
- Lightweight computer vision (2B parameters) with high speed (79 tokens/s)

---

### Granite 3.3 8B
**IBM • 8B parameters • Context: 60,000 tokens**

Granite 8B model fine-tuned by IBM for improved reasoning and instruction following, with a 128k tokens context.

**Technical Specifications:**
- **Speed** : 27 tokens/second tokens/second
- **Consumption** : 2.0 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `Efficient`

**Use Cases:**
- General instruction-following tasks (classification, extraction, Q&A)
- Multilingual AI assistants (12 languages)
- Processing of very long documents (128k tokens): summaries and question-answering
- Code generation/completion with Fill-in-the-Middle
- Integration with external tools via function calling
- Structured reasoning with "Thinking" mode

---

### Granite 3.3 2B
**IBM • 2B parameters • Context: 120,000 tokens**

Granite 2B model fine-tuned by IBM, optimized for reasoning and instruction following, with a 128k tokens context.

**Technical Specifications:**
- **Speed** : 45 tokens/second tokens/second ⚡
- **Consumption** : 1.2 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `Fast` `Efficient`

**Use Cases:**
- Lightweight deployments with large context (128k tokens)
- General instruction-following tasks on limited resources
- Compact multilingual AI assistants
- Processing of long documents on less powerful devices
- FIM code generation/completion on standard workstations

---

### Granite 3.1 MoE
**IBM • 3B parameters • Context: 32,000 tokens**

Innovative IBM model using the Mixture-of-Experts (MoE) architecture to deliver exceptional performance while drastically optimizing computational resource usage.

**Technical Specifications:**
- **Speed** : 74 tokens/second tokens/second ⚡
- **Consumption** : 0.73 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Security` `Fast` `MoE` `Efficiency` `Efficient`

**Use Cases:**
- General-purpose applications with optimized inference cost (42 tokens/second)
- Document processing in CPU environments with limited RAM usage
- Specialized analyses with dynamic activation of relevant model parts
- High-density deployments with low energy consumption per inference
- Parallel processing of multiple query types with MoE specialization

---

### Cogito 14B
**Deep Cogito • 14B parameters • Context: 32,000 tokens**

Deep Cogito model specifically designed to excel in deep reasoning and nuanced contextual understanding tasks, ideal for sophisticated analytical applications.

**Technical Specifications:**
- **Speed** : 60 tokens/second tokens/second ⚡
- **Consumption** : 3.05 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Comprehension` `Analysis` `Fast`

**Use Cases:**
- Semantic analysis of texts with identification of implicit implications
- Structured causal reasoning with identification of cause-effect relationships
- Synthesis of complex documents with extraction of key information
- Precise question-answering systems on specialized document corpora
- Argumentative analysis with evaluation of reasoning solidity

---

### Cogito 32B
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model offering significantly amplified reasoning and analytical capabilities, designed for the most demanding analytical AI applications.

**Technical Specifications:**
- **Speed** : 32 tokens/second tokens/second
- **Consumption** : 5.73 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Comprehension` `Analysis`

**Use Cases:**
- Multi-factorial scenario analysis with probabilistic result evaluation
- Problem resolution with formal demonstration of steps
- High-criticality applications requiring precision and result verifiability
- Expert systems in specialized domains (legal, medical, technical)
- Multi-step reasoning with complete explanation of conclusions

---

### Qwen3 32B
**Qwen Team • 32B parameters • Context: 40,000 tokens**

Powerful next-generation Qwen3 model offering advanced capabilities in reasoning, code, and agentics, with an extended context.

**Technical Specifications:**
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Multilingual` `Large Context`

**Use Cases:**
- Advanced conversational agents with large context and tool integration (MCP)
- Complex problem resolution (maths, code) with "Thinking" mode
- Analysis and generation of large documents
- Multilingual applications (>100 languages) requiring deep understanding

---

### QwQ-32B
**Qwen Team • 32B parameters • Context: 32,000 tokens**

32 billion parameter model enhanced through reinforcement learning (RL) to excel in reasoning, coding, mathematics, and agent tasks.

**Technical Specifications:**
- **Speed** : 35 tokens/second tokens/second
- **Consumption** : 5.22 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Coding` `Mathematics`

**Use Cases:**
- Solving complex problems requiring reasoning and tool usage
- Code generation and execution with result verification
- Advanced mathematical tasks with accuracy verification
- Agent applications capable of interacting with the environment
- Improved instruction following and alignment with human preferences

---

### DeepSeek-R1 14B
**DeepSeek AI • 14B parameters • Context: 32,000 tokens**
Compact and efficient version of the DeepSeek-R1 model, offering an excellent balance between performance and lightweight for deployments requiring flexibility and responsiveness.

**Technical specifications:**
- **Speed** : 60 tokens/second ⚡
- **Consumption** : 3.05 kWh/million tokens
- **License** : [MIT licence](./licences/deepseek-r1_14b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Compact` `Versatile` `Fast`

**Use cases:**
- General-purpose applications with fast inference requirements (44 tokens/s)
- Deployments on standard servers without specialized GPU (14B parameters)
- Text processing with contextual analysis and response time < 2s
- Edge computing deployment with optimized local inference
- Rapid prototyping of AI applications with short iteration time

---

### DeepSeek-R1 32B
**DeepSeek AI • 32B parameters • Context: 32,000 tokens**

Intermediate version of the DeepSeek-R1 model offering a strategic balance between the advanced capabilities of the 70B version and the efficiency of the 14B version for optimal versatility and performance.

**Technical specifications:**
- **Speed** : 33 tokens/second
- **Consumption** : 5.54 kWh/million tokens
- **License** : [MIT licence](./licences/deepseek-r1_32b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Versatile`

**Use cases:**
- Applications requiring a good power/cost balance (32B parameters)
- Professional text processing with semantic nuance analysis
- Automated generation of structured reports from raw data
- Applications combining data analysis and content generation
- Specialized assistants for technical sectors (legal, medical, technical)

---

### Cogito 3B
**Deep Cogito • 3B parameters • Context: 32,000 tokens**

Compact version of the Cogito model optimized for reasoning on devices with limited resources.

**Technical specifications:**
- **Speed** : 63 tokens/second ⚡
- **Consumption** : 0.86 kWh/million tokens 🌱
- **License** : [LLAMA 3.2 Community Licence](./licences/cogito_3b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Compact` `Embedded` `Efficient` `Fast`

---

### Granite Embedding
**IBM • 278M parameters • Context: 32,000 tokens**

Ultra-lightweight IBM embedding model for semantic search and classification.

**Technical specifications:**
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient`

---

### Granite 3 Guardian 2B
**IBM • 2B parameters • Context: 8,192 tokens**

Compact IBM model specialized in security and compliance, detecting risks and inappropriate content.

**Technical specifications:**
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Compliance` `Compact` `Filtering` `Efficient`

---

### Granite 3 Guardian 8B
**IBM • 8B parameters • Context: 32,000 tokens**

IBM model specialized in security and compliance, offering advanced risk detection capabilities.

**Technical specifications:**
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Compliance` `Filtering`

---

### Qwen 2.5 0.5B
**Qwen Team • 0.5B parameters • Context: 32,000 tokens**

Ultra-lightweight micro-model from the Qwen 2.5 family, designed for maximum efficiency on constrained devices.

**Technical specifications:**
- **Speed** : 57 tokens/second ⚡
- **Consumption** : 0.95 kWh/million tokens 🌱
- **License** : [MIT licence](./licences/qwen2.5_0.5b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Ultra-compact` `Fast` `Embedded` `Efficient`

---

### Qwen 2.5 1.5B
**Qwen Team • 1.5B parameters • Context: 32,000 tokens**

Very compact model from the Qwen 2.5 family, offering a good performance/size balance for lightweight deployments.

**Technical specifications:**
- **Speed** : 94 tokens/second ⚡
- **Consumption** : 0.58 kWh/million tokens 🌱
- **License** : [MIT licence](./licences/qwen2.5_1.5b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Embedded` `Efficient`

---

### Qwen 2.5 14B
**Qwen Team • 14B parameters • Context: 32,000 tokens**

Medium-sized versatile model from the Qwen 2.5 family, good performance/resource balance.

**Technical specifications:**
- **Speed** : 61 tokens/second ⚡
- **Consumption** : 3.0 kWh/million tokens
- **License** : [MIT licence](./licences/qwen2.5_14b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Versatile` `Multilingual` `Fast`

---

### Qwen 2.5 32B
**Qwen Team • 32B parameters • Context: 32,000 tokens**

Powerful model from the Qwen 2.5 family, offering advanced capabilities in understanding and generation.

**Technical specifications:**
- **Speed** : 32 tokens/second
- **Consumption** : 5.73 kWh/million tokens
- **License** : [MIT licence](./licences/qwen2.5_32b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Versatile` `Multilingual` `Reasoning`

---

### Qwen 2.5 3B
**Qwen Team • 3B parameters • Context: 32,000 tokens**

Compact and efficient model from the Qwen 2.5 family, suitable for general tasks on limited resources.

**Technical specifications:**
- **Speed** : 60 tokens/second ⚡
- **Consumption** : 0.9 kWh/million tokens 🌱
- **License** : [MIT licence](./licences/qwen2.5_3b.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Versatile` `Efficient`

---

### Qwen3 0.6b
**Qwen Team • 0.6B parameters • Context: 32,000 tokens**

Compact and efficient model from the Qwen3 family, suitable for general tasks on limited resources.

**Technical specifications:**
- **Speed** : 60 tokens/second ⚡
- **Consumption** : 0.9 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Versatile` `Efficient`

---

### Qwen3 1.7b
**Qwen Team • 1.7B parameters • Context: 32,000 tokens**

Very compact model from the Qwen3 family, offering a good performance/size balance for lightweight deployments.

**Technical specifications:**
- **Speed** : 83 tokens/second ⚡
- **Consumption** : 0.65 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Embedded` `Efficient`

---

### Qwen3 4b
**Qwen Team • 4B parameters • Context: 32,000 tokens**

Compact model from the Qwen3 family offering excellent performance in a lightweight and cost-effective format.

**Technical specifications:**
- **Speed** : 48 tokens/second
- **Consumption** : 1.13 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Efficient`

---

### Qwen3 8b
**Qwen Team • 8B parameters • Context: 32,000 tokens**

Qwen3 8B model offering a good balance between performance and efficiency for general tasks.

**Technical specifications:**
- **Speed** : 29 tokens/second
- **Consumption** : 1.87 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Agent` `Multilingual` `Efficient`

---

### Qwen2.5-VL 3B
**Qwen Team • 3.8B parameters • Context: 128,000 tokens**

Compact Vision-Language model, performant solution for edge AI (edge AI).

**Technical specifications:**
- **Speed** : 65 tokens/second ⚡
- **Consumption** : 0.83 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `Fast` `Efficient` `OCR` `Visual Localization` `Edge AI`

---

### Qwen2.5-VL 7B
**Qwen Team • 7B (8.3B) parameters • Context: 128,000 tokens**

High-performance Vision-Language model, outperforming GPT-4o-mini on certain tasks.

**Technical specifications:**
- **Speed** : 37 tokens/second
- **Consumption** : 1.46 kWh/million tokens 🌱
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `Efficient` `OCR` `Visual Localization`

---

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B parameters • Context: 16,000 tokens**

Language model specialized for cybersecurity, optimized for efficiency.
- **Speed** : 22 tokens/second tokens/second
- **Consumption** : 2.46 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities :**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags :** `Security` `Compact`

---

### devstral 24B
**Mistral AI & All Hands AI • 24B parameters • Context : 120 000 tokens**

Devstral is an agentic LLM for software engineering tasks.

**Technical specifications :**
- **Speed** : 53 tokens/second tokens/second ⚡
- **Consumption** : 4.5 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache2.licence.md)
- **Location** : FR 🇫🇷

**Capabilities :**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags :** `Agent` `Programming` `Open-Source` `Large Context`

**Use cases :**
- Codebase exploration and modification
- Agentic
- European

---

## Recommended Use Cases

### Multilingual Dialogue

Chatbots and assistants capable of communicating in multiple languages with automatic detection, context maintenance throughout the conversation, and understanding of linguistic specifics

**Recommended Models :**

- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Long Document Analysis

Processing of large documents (>100 pages) with context maintenance throughout the text, key information extraction, generation of relevant summaries, and answering specific questions about the content

**Recommended Models :**

- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programming and Development
Code generation and optimization in multiple languages, debugging, refactoring, full feature development, understanding of complex algorithmic implementations, and creation of unit tests

**Recommended Models :**

- DeepCoder
- QwQ
- DeepSeek-R1
- Granite 3.3
- Devstral

### Visual Analysis

Direct processing of images and visual documents without OCR preprocessing, interpretation of technical diagrams, charts, tables, drawings, and photos with detailed textual explanations of the visual content

**Recommended Models :**

- Granite 3.2 Vision
- Mistral Small 3.1
- Gemma 3
- Qwen2.5-VL

### Security and Compliance

Applications requiring specific security capabilities; sensitive content filtering, reasoning traceability, GDPR/HDS verification, risk minimization, vulnerability analysis, and compliance with sectoral regulations

**Recommended Models :**

- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Foundation-Sec-8B

### Lightweight and Embedded Deployments

Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded or IoT systems

**Recommended Models :**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3