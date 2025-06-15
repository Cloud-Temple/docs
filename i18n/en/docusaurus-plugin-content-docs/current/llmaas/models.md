---
title: AI Model Catalogue
sidebar_position: 2
---

# LLM as a Service Model Catalogue

## Overview

Cloud Temple LLMaaS offers **44 large language models** carefully selected and optimized to meet the most stringent **SecNumCloud** requirements. Our catalog covers the entire spectrum, from ultra-efficient micro-models to extremely large models.

### Global Statistics

| Metric | Value |
|--------|-------|
| **Total number of models** | 44 models |
| **Minimum context** | 8,192 tokens |
| **Maximum context** | 128,000 tokens |
| **Compliance** | SecNumCloud ✅ HDS ✅ Sovereignty ✅ C5 ✅ |
| **Location** | 100% France 🇫🇷 |

### Pricing

| Usage Type | Price |
|------------|-------|
| **Input tokens** | 0.9€ / million tokens |
| **Output tokens** | 4€ / million tokens |
| **Advanced reasoning** | 21€ / million tokens |

## Large Models

### DeepSeek-R1 671B
**DeepSeek AI • 671B parameters • Context: 16,000 tokens**

Extremely large model from DeepSeek AI, designed for the pinnacle of reasoning and generation.

**Technical specifications:**
- **Speed** : 12 tokens/second
- **Consumption** : 11.11 kWh/million tokens
- **License** : [MIT Licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Cutting-edge reasoning tasks
- High-quality text generation
- AI research and development

---

### DeepSeek-R1 70B
**DeepSeek AI • 70B parameters • Context: 32,000 tokens**

70B model from DeepSeek AI

**Technical specifications:**
- **Speed** : 21 tokens/second
- **Consumption** : 12.56 kWh/million tokens
- **License** : [MIT Licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Cutting-edge reasoning tasks
- High-quality text generation
- AI research and development

---

### Gemma 3 27B
**Google • 27B parameters • Context: 120,000 tokens**

Revolutionary Google model offering optimal balance between power and efficiency, with exceptional performance/cost ratio for demanding professional applications.

**Technical specifications:**
- **Speed** : 20 tokens/second
- **Consumption** : 6.67 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security


**Use Cases:**
- Document analysis with extended context up to 120K tokens (approximately 400 pages)
- Semantic indexing and search in large document databases
- Processing of images and text simultaneously through multimodal capabilities
- Structured data extraction from PDFs and scanned documents
- Integration with external tools via function calling API

---

### Llama 3.3 70B
**Meta • 70B parameters • Context: 60,000 tokens**

State-of-the-art multilingual model developed by Meta, designed to excel in natural dialogue, complex reasoning, and nuanced instruction understanding.

**Technical specifications:**
- **Speed** : 26 tokens/second
- **Consumption** : 11.75 kWh/million tokens
- **License** : [LLAMA 3.3 Community Licence](./licences/llama_3.3_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security


**Use Cases:**
- Multilingual chatbots supporting 8 languages simultaneously
- Execution of chained complex instructions (prompt chaining)
- Processing of 60K token dialogue window for conversational history
- Analysis of large legal or technical documents (>100 pages)
- Generation of structured texts with fidelity to stylistic instructions

---

### Qwen2.5-VL 32B
**Qwen Team • 32B parameters • Context: 120,000 tokens**

Most powerful version of the Qwen2.5-VL series, offering advanced visual understanding and agent capabilities.

**Technical specifications:**
- **Speed** : 18 tokens/second
- **Consumption** : 7.41 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security


**Use Cases:**
- Analysis of very complex documents and diagrams
- Autonomous visual agents for navigation and GUI interaction
- High-precision object localization and text recognition tasks
- Generation of rich, detailed descriptions from complex images

---

### Qwen2.5-VL 72B
**Qwen Team • 72B parameters • Context: 128,000 tokens**

Most powerful version of the Qwen2.5-VL series, offering advanced visual understanding and agent capabilities for the most demanding tasks.

**Technical specifications:**
- **Speed** : 15 tokens/second
- **Consumption** : 8.89 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Analysis of very complex documents and diagrams
- Autonomous visual agents for navigation and GUI interaction
- Very high-precision object localization and text recognition tasks
- Generation of rich, detailed descriptions from very complex images

---

### Qwen3 235B
**Qwen Team • 235B parameters • Context: 60,000 tokens**

Very large next-generation Qwen3 model, offering extended capabilities for the most complex tasks.

**Technical specifications:**
- **Speed** : 17 tokens/second
- **Consumption** : 7.84 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Highly advanced conversational agents with large context and tool integration (MCP)
- Solving extremely complex problems (maths, code)
- Analysis and generation of very large and technical documents
- Multilingual applications (>100 languages) requiring high-fidelity understanding and generation

---

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B parameters • Context: 32,000 tokens**

Next-generation FP8 MoE (3B activated) model with hybrid thinking modes and advanced agent capabilities.

**Technical specifications:**
- **Speed** : 106 tokens/second
- **Consumption** : 2.88 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Advanced conversational agents with tool integration (MCP)
- Solving complex problems (maths, code) with "Thinking" mode
- Multilingual applications (>100 languages)
- Scenarios requiring cost/performance balance (MoE) on VLLM
- Engaging multi-turn dialogues with precise instruction following

---

## Specialized Models

### Cogito 14B
**Deep Cogito • 14B parameters • Context: 32,000 tokens**

Deep Cogito model specifically designed to excel in deep reasoning and nuanced contextual understanding, ideal for sophisticated analytical applications.

**Technical specifications:**
- **Speed** : 60 tokens/second
- **Consumption** : 4.40 kWh/million tokens
- **License** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Semantic analysis of texts with identification of implicit implications
- Structured causal reasoning with identification of cause-effect relationships
- Synthesis of complex documents with extraction of key information
- Precise question-answering systems on specialized document corpora
- Argumentative analysis with evaluation of reasoning solidity

---

### Cogito 32B
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model offering significantly amplified reasoning and analytical capabilities, designed for the most demanding AI analytical applications.

**Technical specifications:**
- **Speed** : 32 tokens/second
- **Consumption** : 8.25 kWh/million tokens
- **License** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Multi-factorial scenario analysis with probabilistic outcome evaluation
- Scientific problem solving with formal demonstration of steps
- High-criticality applications requiring result accuracy and verifiability
- Expert systems in specialized domains (legal, medical, technical)
- Multi-step reasoning with complete explanation of conclusions

---

### Cogito 3B
**Deep Cogito • 3B parameters • Context: 32,000 tokens**

Compact version of the Cogito model, optimized for reasoning on resource-constrained devices.

**Technical specifications:**
- **Speed** : 55 tokens/second
- **Consumption** : 0.61 kWh/million tokens
- **License** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security



---

### Cogito 8B
**Deep Cogito • 8B parameters • Context: 32,000 tokens**

**Technical specifications:**
- **Speed** : 45 tokens/second
- **Consumption** : 1.85 kWh/million tokens
- **License** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Efficient reasoning on edge devices
- Real-time decision support systems
- Low-latency applications requiring contextual understanding
- Embedded AI solutions for IoT and mobile devices
- Context-aware assistants with tool integration
Mid-size model from the Cogito family, offering a good balance between reasoning capabilities and efficiency.

**Technical specifications:**
- **Speed** : 30 tokens/second
- **Consumption** : 1.11 kWh/million tokens
- **License** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security



---

### DeepCoder
**Agentica x Together AI • 14B parameters • Context: 32,000 tokens**

Open source AI model (14B) by Together AI & Agentica, a credible alternative to proprietary models for code generation.

**Technical specifications:**
- **Speed** : 64 tokens/second
- **Consumption** : 4.12 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use cases:**
- Code generation in over 15 languages with performance optimization
- Debugging and refactoring of existing codebases with impact analysis
- Implementation of complex algorithms (graphs, trees, heuristics)
- Automated unit test creation with code coverage > 80%

---

### DeepSeek-R1 14B
**DeepSeek AI • 14B parameters • Context: 32,000 tokens**

Compact and efficient version of the DeepSeek-R1 model, offering an excellent balance between performance and lightweight design for deployments requiring flexibility and responsiveness.

**Technical specifications:**
- **Speed** : 62 tokens/second
- **Consumption** : 4.26 kWh/million tokens
- **License** : [MIT licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use cases:**
- General-purpose applications with fast inference needs (44 tokens/s)
- Deployments on standard servers without specialized GPUs (14B parameters)
- Text processing with contextual analysis and response time < 2s
- Edge computing deployment with optimized local inference
- Rapid prototyping of AI applications with short iteration time

---

### DeepSeek-R1 32B
**DeepSeek AI • 32B parameters • Context: 32,000 tokens**

Mid-size version of the DeepSeek-R1 model offering a strategic balance between the advanced capabilities of the 70B version and the efficiency of the 14B version for optimal versatility and performance.

**Technical specifications:**
- **Speed** : 33 tokens/second
- **Consumption** : 7.99 kWh/million tokens
- **License** : [MIT licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use cases:**
- Applications requiring a good power/cost balance (32B parameters)
- Professional text processing with analysis of semantic subtleties
- Automated generation of structured reports from raw data
- Applications combining data analysis and content generation
- Specialized assistants for technical sectors (legal, medical, technical)

---

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B parameters • Context: 16,384 tokens**

Language model specialized in cybersecurity, optimized for efficiency.

**Technical specifications:**
- **Speed** : 21 tokens/second
- **Consumption** : 1.59 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security



---

### Gemma 3 12B
**Google • 12B parameters • Context: 120,000 tokens**

Mid-size version of the Gemma 3 model offering an excellent balance between performance and efficiency.

**Technical specifications:**
- **Speed** : 56 tokens/second
- **Consumption** : 4.71 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security


**Use cases:**
- Multimodal applications with moderate resource constraints
- Document processing with standard context (up to 100 pages)
- Text content generation and image analysis combined
- Deployments on standard GPUs without specialized infrastructure
- Advanced chatbots with integrated visual and text capabilities

---

### Gemma 3 1B
**Google • 1B parameters • Context: 32,000 tokens**

Ultra-light micro-model designed for deployments on devices with very limited resources.

**Technical specifications:**
- **Speed** : 112 tokens/second
- **Consumption** : 0.15 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security


**Use cases:**
- Deployment on IoT devices and embedded systems with API integration
- Applications requiring local inference on CPU with function calls
- Basic text tasks with instant response time and function calling
- Compact assistants for mass-market applications with external service integration
- Intelligent control systems integrating multiple APIs/services

---

### Gemma 3 4B
**Google • 4B parameters • Context: 120,000 tokens**

Compact Google model offering excellent performance in a lightweight and economical format.

**Technical specifications:**
- **Speed** : 57 tokens/second
- **Consumption** : 0.58 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security


**Use cases:**
- Embedded and edge computing applications with image processing
- Reactive multimodal chatbots requiring low latency (<50ms)
- Large-scale deployments with visual and text capabilities
- Mobile applications with image and text analysis
- Processing of simple to medium complexity visual queries with high performance

---

### Granite 3 Guardian 2B
**IBM • 2B parameters • Context: 8,192 tokens**

Compact IBM model specialized in security and compliance, detecting risks and inappropriate content.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : N/A
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security



---

### Granite 3 Guardian 8B
**IBM • 8B parameters • Context: 32,000 tokens**

IBM model specialized in security and compliance, offering advanced risk detection capabilities.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : N/A
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security



---

### Granite 3.1 MoE
**IBM • 3B parameters • Context: 32,000 tokens**

Innovative IBM model using the Mixture-of-Experts (MoE) architecture to deliver exceptional performance while drastically optimizing computational resource usage.

**Technical specifications:**
- **Speed** : 74 tokens/second
- **Consumption** : 0.45 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security


**Use cases:**
- General-purpose applications with optimized inference cost (42 tokens/second)
- Document processing in CPU environments with limited RAM usage
- Specialized analyses with dynamic activation of relevant model parts
- High-density deployments with low energy consumption per inference
- Parallel processing of multiple query types with MoE specialization

---

### Granite 3.2 Vision
**IBM • 2B parameters • Context: 16,384 tokens**

Revolutionary compact IBM model specialized in computer vision, capable of analyzing and understanding visual documents directly without relying on intermediate OCR technologies.

**Technical specifications:**
- **Speed** : 48 tokens/second
- **Consumption** : 0.69 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security


**Use cases:**
- Structured data extraction from invoices and forms without OCR
- Direct analysis of tables and charts with trend interpretation
- Reading and interpreting technical diagrams (electrical, mechanical)
- Processing of handwritten documents with high recognition rates
- Lightweight computer vision (2B parameters) with high speed (50 tokens/s)

---

### Granite 3.3 2B
**IBM • 2B parameters • Context: 120,000 tokens**

Fine-tuned Granite 2B model by IBM, optimized for reasoning and instruction following, with a 128k token context.

**Technical specifications:**
- **Speed** : 45 tokens/second
- **Consumption** : 0.74 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security


**Use cases:**
- Lightweight deployments with large context (128k tokens)
- General instruction-following tasks on limited resources
- Compact multilingual AI assistants
- Processing of long documents on less powerful devices
- FIM code generation/completion on standard workstations

---

### Granite 3.3 8B
**IBM • 8B parameters • Context: 60,000 tokens**
Granite 8B model fine-tuned by IBM for improved reasoning and instruction following, with a context of 128k tokens.

**Technical specifications:**
- **Speed** : 30 tokens/second
- **Consumption** : 1.11 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security


**Use Cases:**
- General instruction-following tasks (classification, extraction, Q&A)
- Multilingual AI assistants (12 languages)
- (Long document processing (128k tokens): summaries, Q&A)
- Code generation/completion with Fill-in-the-Middle
- Integration with external tools via function calling
- Structured reasoning with the "Thinking" mode

---

### Granite Embedding
**IBM • 278M parameters • Context: 512 tokens**

Ultra-lightweight IBM embedding model for semantic search and classification.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : N/A
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Llama 3.1 8B
**Meta • 8B parameters • Context: 32,000 tokens**

Base model of the Llama 3.1 family, offering solid performance for its size.

**Technical specifications:**
- **Speed** : 31 tokens/second
- **Consumption** : 1.08 kWh/million tokens
- **License** : [LLAMA 3.1 Community Licence](./licences/llama_3.1_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Lucie-7B-Instruct
**OpenLLM-France • 7B parameters • Context: 32,000 tokens**

Open-source multilingual causal model (7B), fine-tuned from Lucie-7B. Optimized for French.

**Technical specifications:**
- **Speed** : 4 tokens/second
- **Consumption** : 8.33 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Magistral 24B
**Mistral AI • 24B parameters • Context: 40,000 tokens**

Mistral AI's first reasoning model, excelling in domain-specific reasoning, transparent and multilingual.

**Technical specifications:**
- **Speed** : 25 tokens/second
- **Consumption** : 5.33 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security


**Use Cases:**
- Strategy and business operations (risk modeling)
- Regulated industries (legal, finance) with traceable reasoning
- Software engineering (project planning, architecture)
- Content creation and communication (creative writing, storytelling)

---

### Mistral Small 3.1
**Mistral AI • 24B parameters • Context: 60,000 tokens**

Mistral AI's compact and responsive model, specifically designed to provide fluid and relevant conversational assistance with optimal response speed.

**Technical specifications:**
- **Speed** : 48 tokens/second
- **Consumption** : 5.50 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security


**Use Cases:**
- Conversational applications
- Virtual assistants combining image and text analysis (26 tokens/s)
- Technical support chatbots with access to technical documentation
- Content creation/editing tools with immediate response (blogs, emails)
- Deployment on standard infrastructures (24B parameters)

---

### Phi-4 Reasoning 14B
**Microsoft • 14B parameters • Context: 32,000 tokens**

Microsoft's Phi family model, specialized in complex reasoning and mathematics.

**Technical specifications:**
- **Speed** : 71 tokens/second
- **Consumption** : 3.71 kWh/million tokens
- **License** : [MIT Licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security



---

### QwQ-32B
**Qwen Team • 32B parameters • Context: 32,000 tokens**

32 billion parameter model enhanced by reinforcement learning (RL) to excel in reasoning, coding, mathematics, and agent tasks.

**Technical specifications:**
- **Speed** : 35 tokens/second
- **Consumption** : 7.54 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- Solving complex problems requiring reasoning and tool use
- Code generation and execution with result verification
- Advanced mathematical tasks with accuracy verification
- Agent applications capable of interacting with the environment
- Improved instruction following and alignment with human preferences

---

### Qwen 2.5 0.5B
**Qwen Team • 0.5B parameters • Context: 32,000 tokens**

Ultra-light micro-model from the Qwen 2.5 family, designed for maximum efficiency on constrained devices.

**Technical specifications:**
- **Speed** : 162 tokens/second
- **Consumption** : 0.10 kWh/million tokens
- **License** : [MIT licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Qwen 2.5 1.5B
**Qwen Team • 1.5B parameters • Context: 32,000 tokens**

Very compact model from the Qwen 2.5 family, offering a good performance/size balance for lightweight deployments.

**Technical specifications:**
- **Speed** : 102 tokens/second
- **Consumption** : 0.33 kWh/million tokens
- **License** : [MIT licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Qwen 2.5 14B
**Qwen Team • 14B parameters • Context: 32,000 tokens**

Versatile mid-sized model from the Qwen 2.5 family, good performance/resource balance.

**Technical specifications:**
- **Speed** : 61 tokens/second
- **Consumption** : 4.33 kWh/million tokens
- **License** : [MIT licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Qwen 2.5 32B
**Qwen Team • 32B parameters • Context: 32,000 tokens**

Powerful model from the Qwen 2.5 family, offering advanced capabilities in understanding and generation.

**Technical specifications:**
- **Speed** : 31 tokens/second
- **Consumption** : 8.51 kWh/million tokens
- **License** : [MIT licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security



---

### Qwen 2.5 3B
**Qwen Team • 3B parameters • Context: 32,000 tokens**

Compact and efficient model from the Qwen 2.5 family, suitable for general tasks on limited resources.

**Technical specifications:**
- **Speed** : 64 tokens/second
- **Consumption** : 0.52 kWh/million tokens
- **License** : [MIT licence](./licences/mit_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Qwen2.5-VL 3B
**Qwen Team • 3.8B parameters • Context: 128,000 tokens**

Compact Vision-Language model, performant solution for edge AI.

**Technical specifications:**
- **Speed** : 65 tokens/second
- **Consumption** : 0.51 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security



---

### Qwen2.5-VL 7B
**Qwen Team • 7B (8.3B) parameters • Context: 128,000 tokens**

High-performance Vision-Language model, outperforming GPT-4o-mini on certain tasks.

**Technical specifications:**
- **Speed** : 35 tokens/second
- **Consumption** : 0.95 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security



---

### Qwen3 0.6b
**Qwen Team • 0.6B parameters • Context: 32,000 tokens**

Compact and efficient model from the Qwen3 family, suitable for general tasks on limited resources.

**Technical specifications:**
- **Speed** : 112 tokens/second
- **Consumption** : 0.15 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Qwen3 1.7b
**Qwen Team • 1.7B parameters • Context: 32,000 tokens**

Very compact model from the Qwen3 family, offering a good performance/size balance for lightweight deployments.

**Technical specifications:**
- **Speed** : 88 tokens/second
- **Consumption** : 0.38 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Qwen3 14B
**Qwen Team • 14B parameters • Context: 32,000 tokens**

New generation dense Qwen3 model (14B), offering performance equivalent to Qwen2.5 32B with better efficiency.

**Technical specifications:**
- **Speed** : 68 tokens/second
- **Consumption** : 3.88 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use Cases:**
- General tasks requiring performance and large context
- Creative and technical content generation
- Data analysis and complex reasoning
- Integration with external tools via function calling

---

### Qwen3 32B
**Qwen Team • 32B parameters • Context: 40,000 tokens**

Powerful next-generation Qwen3 model, offering advanced capabilities in reasoning, code, and agentics, with an extended context.

**Technical specifications:**
- **Speed** : 18 tokens/second
- **Consumption** : 7.41 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security


**Use cases:**
- Advanced conversational agents with large context and tool integration (MCP)
- Solving complex problems (maths, code) with "Thinking" mode
- Analysis and generation of large documents
- Multilingual applications (>100 languages) requiring deep understanding

---

### Qwen3 4b
**Qwen Team • 4B parameters • Context: 32,000 tokens**

Compact model from the Qwen3 family offering excellent performance in a lightweight and cost-effective format.

**Technical specifications:**
- **Speed** : 49 tokens/second
- **Consumption** : 0.68 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security



---

### Qwen3 8b
**Qwen Team • 8B parameters • Context: 32,000 tokens**

Qwen3 8B model offering a good balance between performance and efficiency for general tasks.

**Technical specifications:**
- **Speed** : 33 tokens/second
- **Consumption** : 1.01 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security



---

### devstral 24B
**Mistral AI & All Hands AI • 24B parameters • Context: 120,000 tokens**

Devstral is an agentic LLM for software engineering tasks.

**Technical specifications:**
- **Speed** : 45 tokens/second
- **Consumption** : 5.86 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security


**Use cases:**
- Codebase exploration and modification
- Agentic
- European

---

## Recommended Use Cases

### Multilingual Dialogue

Chatbots and assistants capable of communicating in multiple languages with automatic detection, context maintenance throughout the conversation, and understanding of linguistic specifics

**Recommended models:**

- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Long Document Analysis

Processing of large documents (>100 pages) with context maintenance throughout the text, key information extraction, generation of relevant summaries, and answering specific questions about the content

**Recommended models:**

- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programming and Development

Code generation and optimization in multiple languages, debugging, refactoring, full feature development, understanding of complex algorithmic implementations, and creation of unit tests

**Recommended models:**

- DeepCoder
- QwQ
- DeepSeek-R1
- Granite 3.3
- Devstral

### Visual Analysis

Direct processing of images and visual documents without OCR preprocessing, interpretation of technical diagrams, charts, tables, drawings, and photos with detailed textual explanations of the visual content

**Recommended models:**

- Granite 3.2 Vision
- Mistral Small 3.1
- Gemma 3
- Qwen2.5-VL

### Security and Compliance

Applications requiring specific security capabilities; sensitive content filtering, reasoning traceability, RGPD/HDS compliance verification, risk minimization, vulnerability analysis, and adherence to sectoral regulations

**Recommended models:**

- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Magistral 24b
- Foundation-Sec-8B

### Lightweight and Embedded Deployments

Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded or IoT systems

**Recommended models:**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3
