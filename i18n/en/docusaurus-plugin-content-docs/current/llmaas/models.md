---
title: LLMaaS Model Catalog
sidebar_position: 2
---

# LLM as a Service Model Catalog

## Overview

Cloud Temple LLMaaS offers **41 carefully selected and optimized large language models** designed to meet the most stringent **SecNumCloud** requirements. Our catalog covers the entire spectrum, from ultra-efficient micro-models to extremely large models.

### Global Statistics

| Metric | Value |
|--------|-------|
| **Total number of models** | 41 models |
| **Minimum context** | 8,192 tokens |
| **Maximum context** | 262,144 tokens |
| **Compliance** | SecNumCloud ✅ HDS ✅ Sovereignty ✅ C5 ❌ |
| **Location** | 100% France 🇫🇷 |

### Pricing

| Usage Type | Price |
|------------|-------|
| **Input Tokens** | €0.90 / million tokens |
| **Output Tokens** | €4.00 / million tokens |
| **Advanced Reasoning** | €21.00 / million tokens |

## Large Language Models

### gpt-oss:120b
**OpenAI • 120B parameters • Context: 120,000 tokens**

State-of-the-art open-weight language model from OpenAI, delivering strong performance with a flexible Apache 2.0 license.

**Technical Specifications:**
- **Speed**: 140 tokens/second
- **Energy Consumption**: 1.69 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Very Large`

**Use Cases:**
- Advanced conversational agents with complex reasoning and tool integration.
- Applications requiring full transparency in the reasoning process (chain-of-thought).
- Commercial scenarios needing a permissive license (Apache 2.0).
- Fine-tuning for specialized tasks requiring a powerful base model.

### llama3.3:70b
**Meta • 70B parameters • Context: 132,000 tokens**

State-of-the-art multilingual model developed by Meta, designed to excel in natural dialogue, complex reasoning, and nuanced instruction understanding.

**Technical Specifications:**
- **Speed**: 31 tokens/second
- **Energy Consumption**: 8.58 kWh per million tokens
- **License**: LLAMA 3.3 Community License
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Dialogue` `Multilingual`

**Use Cases:**
- Multilingual chatbots supporting 8 languages simultaneously
- Execution of complex, chained instructions (prompt chaining)
- Processing of 60K-token dialogue windows for conversational history
- Analysis of large legal or technical documents (>100 pages)
- Generation of structured text with strict adherence to stylistic guidelines

### gemma3:27b
**Google • 27B parameters • Context: 120,000 tokens**

Revolutionary model from Google offering an optimal balance between power and efficiency, with an exceptional performance-to-cost ratio for demanding professional applications.

**Technical Specifications:**
- **Speed**: 24 tokens/second
- **Energy Consumption**: 5.56 kWh per million tokens
- **License**: Google Gemma Terms of Use
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Large context`

**Use Cases:**
- Document analysis with extended context up to 120K tokens (approximately 400 pages)
- Semantic indexing and search within large document repositories
- Simultaneous processing of images and text thanks to multimodal capabilities
- Structured data extraction from PDFs and scanned documents
- Integration with external tools via function calling API

### qwen3-coder:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

MoE-optimized model for software engineering tasks, featuring an extremely long context.

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
- Complex code generation with repository-scale understanding
- Reasoning tasks over extended contexts
- Code improvement via reinforcement learning

### qwen3-2507:30b-a3b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

Enhanced version of the non-thinking mode from Qwen3-30B, featuring improved general capabilities, broader knowledge coverage, and better user alignment.

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
- Scenarios demanding a strong balance between performance and resource efficiency, thanks to the MoE architecture.

### qwen2.5vl:32b
**Qwen Team • 32B parameters • Context: 120,000 tokens**

Most powerful version of the Qwen2.5-VL series, delivering state-of-the-art visual understanding and agent capabilities.

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

The most powerful version of the Qwen2.5-VL series, delivering state-of-the-art visual understanding and agent capabilities for the most demanding tasks.

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

## Specialized Models

### embeddinggemma:300m
**Google • 300M parameters • Context: 2,048 tokens**

State-of-the-art embedding model from Google, optimized for its size, ideal for search and semantic retrieval tasks.

**Technical Specifications:**
- **License**: Google Gemma Terms of Use
- **Localization**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient` `Multilingual`

**Use Cases:**
- Information search and retrieval (Retrieval)
- Document classification and clustering
- Semantic similarity search
- Deployment on resource-constrained devices (mobile, laptop)

### gpt-oss:20b
**OpenAI • 20B parameters • Context: 120,000 tokens**

Open-weight language model from OpenAI, optimized for efficiency and deployment on consumer-grade hardware.

**Technical Specifications:**
- **Speed**: 85 tokens/second ⚡
- **Energy Consumption**: 1.57 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Compact` `Fast`

**Use Cases:**
- Deployments on resource-constrained devices (edge devices) or low-cost servers.
- Applications requiring fast inference with strong reasoning capabilities.
- Agent-based use cases involving function calling, web navigation, and code execution.
- Fine-tuning for specialized tasks on consumer-grade hardware.

### qwen3:14b
**Qwen Team • 14B parameters • Context: 32,000 tokens**

Next-generation dense model Qwen3 (14B), delivering performance comparable to Qwen2.5 32B with improved efficiency.

**Technical Specifications:**
- **Speed**: 44 tokens/second ⚡
- **Energy Consumption**: 3.03 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Fast` `Multilingual`

**Use Cases:**
- General tasks requiring high performance and large context
- Creative and technical content generation
- Data analysis and complex reasoning
- Integration with external tools via function calling

### gemma3:4b
**Google • 4B parameters • Context: 120,000 tokens**

Compact model from Google delivering excellent performance in a lightweight and cost-effective format.

**Technical Specifications:**
- **Speed** : 60 tokens/second ⚡
- **Energy Consumption** : 0.55 kWh per million tokens 🌱
- **License** : Google Gemma Terms of Use
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Fast` `Compact` `Large Context` `Efficient`

**Use Cases:**
- Embedded applications and edge computing with image processing
- Responsive multimodal chatbots requiring low latency
- Large-scale deployments with visual and textual capabilities
- Mobile applications with image and text analysis
- Processing of visual queries with medium to high complexity, delivering high performance

### gemma3:1b
**Google • 1B parameters • Context: 32,000 tokens**

Ultra-lightweight micro-model designed for deployment on devices with very limited resources.

**Technical Specifications:**
- **Speed**: 115 tokens/second ⚡
- **Energy Consumption**: 0.15 kWh per million tokens 🌱
- **License**: Google Gemma Terms of Use
- **Localization**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Ultra-compact` `Embedded` `Efficient` `Fast`

**Use Cases:**
- Deployment on IoT devices and embedded systems with API integration
- Applications requiring local CPU inference with function calls
- Basic text tasks with instant response and function calling
- Compact assistants for consumer applications with external service integration
- Intelligent control systems integrating multiple APIs/services

### mistral-small3.1:24b
**Mistral AI • 24B parameters • Context: 120,000 tokens**

Compact and responsive model from Mistral AI, specifically designed to deliver smooth and relevant conversational assistance with optimal response speed.

**Technical Specifications:**
- **Speed**: 34 tokens/second
- **Energy Consumption**: 3.83 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security`

**Use Cases:**
- Conversational applications
- Virtual assistants combining image and text analysis (26 tokens/s)
- Technical support chatbots with access to technical documentation
- Content creation/editing tools with instant responses (blogs, emails)
- Deployment on standard infrastructure (24B parameters)

### mistral-small3.2:24b
**Mistral AI • 24B parameters • Context: 128,000 tokens**

Minor update to Mistral Small 3.1, improving instruction following, function calling robustness, and reducing repetition errors.

**Technical Specifications:**
- **Speed**: 56 tokens/second
- **Energy Consumption**: 2.33 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security` `Instruction Following`

**Use Cases:**
- Conversational agents with enhanced instruction following
- Robust integration with external tools via function calling
- Applications requiring high reliability to avoid repetitions
- Use cases identical to Mistral Small 3.1, with improved performance

### deepcoder:14b
**Agentica x Together AI • 14B parameters • Context: 32,000 tokens**

Open-source AI model (14B) by Together AI & Agentica, a credible alternative to proprietary models for code generation.

**Technical Specifications:**
- **Speed**: 9 tokens/second ⚡
- **Energy Consumption**: 3.72 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Programming` `Reasoning` `Open-Source` `Mathematics` `Fast`

**Use Cases:**
- Code generation across more than 15 languages with performance optimization
- Debugging and refactoring of existing codebases with impact analysis
- Implementation of complex algorithms (graphs, trees, heuristics)
- Automated generation of unit tests with code coverage > 80%
- Code translation between languages/frameworks (e.g., Python to JavaScript)

### granite3.2-vision:2b
**IBM • 2B parameters • Context: 16,384 tokens**

Revolutionary compact IBM model specialized in computer vision, capable of directly analyzing and understanding visual documents without relying on intermediate OCR technologies.

**Technical Specifications:**
- **Speed**: 88 tokens/second
- **Energy Consumption**: 0.38 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Security` `Compact` `Efficient`

**Use Cases:**
- Extraction of structured data from invoices and forms without OCR
- Direct analysis of tables and charts with trend interpretation
- Reading and interpreting technical diagrams (electrical, mechanical)
- Processing handwritten documents with high recognition accuracy
- Lightweight computer vision (2B parameters) with high speed (50 tokens/s)

### granite3.3:8b
**IBM • 8B parameters • Context: 60,000 tokens**

Granite 8B model fine-tuned by IBM for enhanced reasoning and instruction-following capabilities, with a context length of 128k tokens.

**Technical Specifications:**
- **Speed**: 39 tokens/second
- **Energy Consumption**: 0.85 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `Efficient`

**Use Cases:**
- General instruction-following tasks (classification, extraction, Q&A)
- Multilingual AI assistants (12 languages)
- Processing very long documents (up to 128k tokens) for summarization, Q&A, etc.
- Code generation/completion using Fill-in-the-Middle
- Integration with external tools via function calling
- Structured reasoning using the "Thinking" mode

### granite3.3:2b
**IBM • 2B parameters • Context: 120,000 tokens**

Fine-tuned 2B-parameter Granite model by IBM, optimized for reasoning and instruction-following, with a 128k-token context.

**Technical Specifications:**
- **Speed**: 88 tokens/second
- **Energy Consumption**: 0.38 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `Efficient`

**Use Cases:**
- Lightweight deployments with large context (128k tokens)
- General instruction-following tasks on limited resources
- Compact multilingual AI assistants
- Processing long documents on less powerful devices
- Code generation/completion (FIM) on standard workstations

### magistral:24b
**Mistral AI • 24B parameters • Context: 40,000 tokens**

Mistral AI's first reasoning model, excelling in domain-specific reasoning, transparent, and multilingual.

**Technical Specifications:**
- **Speed**: 29 tokens/second
- **Energy Consumption**: 4.59 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Reasoning` `Multilingual`

**Use Cases:**
- Business strategy and operations (risk modeling)
- Regulated industries (legal, finance) with traceable reasoning
- Software engineering (project planning, architecture)
- Content creation and communication (creative writing, storytelling)

### cogito:32b
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model offering significantly enhanced reasoning and analytical capabilities, designed for the most demanding AI analytical applications.

**Technical Specifications:**
- **Speed**: 37 tokens/second
- **Energy Consumption**: 7.13 kWh per million tokens
- **License**: LLAMA 3.2 Community License
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Comprehension` `Analysis`

**Use Cases:**
- Multi-factorial scenario analysis with probabilistic evaluation of outcomes  
- Scientific problem solving with formal step-by-step demonstration  
- High-criticality applications requiring precision and verifiability of results  
- Expert systems in specialized domains (legal, medical, technical)  
- Multi-step reasoning analysis with full explainability of conclusions

### qwen3:32b
**Qwen Team • 32B parameters • Context: 40,000 tokens**

Next-generation powerful Qwen3 model, offering advanced capabilities in reasoning, coding, and agent-based tasks, with an extended context window.

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

**Technical Specifications:**
- **Speed**: 11 tokens/second
- **Energy Consumption**: 23.99 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Coding` `Mathematics`

**Use Cases:**
- Solving complex problems requiring reasoning and tool utilization
- Code generation and execution with result verification
- Advanced mathematical tasks with accuracy validation
- Agent applications capable of interacting with environments
- Enhanced instruction following and alignment with human preferences

### deepseek-r1:14b
**DeepSeek AI • 14B parameters • Context: 32,000 tokens**

Compact and efficient version of the DeepSeek-R1 model, offering an excellent balance between performance and lightweight design for deployments requiring flexibility and responsiveness.

**Technical Specifications:**
- **Speed**: 23 tokens/second ⚡
- **Energy Consumption**: 1.45 kWh per million tokens
- **License**: MIT License
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Compact` `Versatile` `Fast`

**Use Cases:**
- General-purpose applications requiring fast inference (44 tokens/s)
- Deployments on standard servers without specialized GPUs (14B parameters)
- Text processing with contextual analysis and fast response times
- Edge computing deployments with optimized local inference
- Rapid prototyping of AI applications with short iteration times

### deepseek-r1:32b
**DeepSeek AI • 32B parameters • Context: 32,000 tokens**

Intermediate version of the DeepSeek-R1 model, offering a strategic balance between the advanced capabilities of the 70B version and the efficiency of the 14B version, for optimal versatility and performance.

**Technical Specifications:**
- **Speed**: 20 tokens/second
- **Energy Consumption**: 13.18 kWh per million tokens
- **License**: MIT license
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Versatile`

**Use Cases:**
- Applications requiring a good balance of power and cost (32B parameters)
- Professional text processing with semantic nuance analysis
- Automated generation of structured reports from raw data
- Applications combining data analysis and content generation
- Specialized assistants for technical fields (legal, medical, engineering)

### cogito:3b
**Deep Cogito • 3B parameters • Context: 32,000 tokens**

Compact version of the Cogito model, optimized for reasoning on resource-constrained devices.

**Technical Specifications:**
- **Speed** : 78 tokens/second ⚡
- **Energy Consumption** : 0.43 kWh per million tokens 🌱
- **License** : LLAMA 3.2 Community License
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Compact` `Embedded` `Efficient` `Fast`

### granite-embedding:278m
**IBM • 278M parameters • Context: 512 tokens**

Ultra-lightweight embedding model from IBM for semantic search and classification.

**Technical Specifications:**
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient`

### granite3-guardian:2b
**IBM • 2B parameters • Context: 8,192 tokens**

Compact IBM model specialized in security and compliance, detecting risks and inappropriate content.

**Technical Specifications:**
- **License** : Apache 2.0
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Compliance` `Compact` `Filtering` `Efficient`

### granite3-guardian:8b
**IBM • 8B parameters • Context: 32,000 tokens**

IBM's specialized model for security and compliance, offering advanced risk detection capabilities.

**Technical Specifications:**
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Compliance` `Filtering`

### qwen3:0.6b
**Qwen Team • 0.6B parameters • Context: 32,000 tokens**

Compact and efficient model from the Qwen3 family, designed for general-purpose tasks on limited resources.

**Technical Specifications:**
- **Speed**: 28 tokens/second ⚡
- **Energy Consumption**: 0.6 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Versatile` `Efficient`

### qwen3:1.7b
**Qwen Team • 1.7B parameters • Context: 32,000 tokens**

Very compact model from the Qwen3 family, offering a strong performance-to-size balance for lightweight deployments.

**Technical Specifications:**
- **Speed**: 46 tokens/second ⚡
- **Energy Consumption**: 0.73 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Embedded` `Efficient`

### qwen3:4b
**Qwen Team • 4B parameters • Context: 32,000 tokens**

Compact model from the Qwen3 family delivering excellent performance in a lightweight and cost-effective format.

**Technical Specifications:**
- **Speed**: 29 tokens/second
- **Energy Consumption**: 1.15 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Efficient`

### qwen3-2507-think:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Qwen3-4B model optimized for reasoning, with improved performance on logical tasks, mathematics, science, and code, featuring an extended context of 250K tokens.

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
- Deep reasoning over very large documents.
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

Qwen3 8B model offering a good balance between performance and efficiency for general-purpose tasks.

**Technical Specifications:**
- **Speed**: 18 tokens/second
- **Energy Consumption**: 1.85 kWh per million tokens 🌱
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
**Qwen Team • 7B (8.3B) parameters • Context: 128,000 tokens**

High-performance Vision-Language model, outperforming GPT-4o-mini on certain tasks.

**Technical Specifications:**
- **Speed**: 48 tokens/second
- **Energy Consumption**: 0.69 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Localization**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `Efficient` `OCR` `Visual Localization`

### devstral:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 100,000 tokens**

Devstral is an agentive LLM designed for software engineering tasks.

**Technical Specifications:**
- **Speed**: 50 tokens/second
- **Energy Consumption**: 5.27 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Open-Source` `Large Context`

**Use Cases:**
- Codebase exploration and modification
- Agentic workflows
- European-focused

### cogito:8b
**Deep Cogito • 8B parameters • Context: 32,000 tokens**

Intermediate-sized model from the Cogito family, offering a good balance between reasoning capabilities and efficiency.

**Technical Specifications:**
- **Speed** : 43 tokens/second
- **Energy Consumption** : 0.77 kWh per million tokens 🌱
- **License** : LLAMA 3.2 Community License
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Versatile` `Efficient`

### granite4-small-h:32b
**IBM • 32B (9B active) parameters • Context: 128,000 tokens**

IBM's MoE (Mixture-of-Experts) model, designed as a "workhorse" for daily enterprise tasks, featuring excellent efficiency for long-context processing.

**Technical Specifications:**
- **Speed**: 28 tokens/second
- **Energy Consumption**: 1.19 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `MoE` `Long Context` `Efficient`

**Use Cases:**
- Conversational agents for customer support with access to extensive knowledge bases.
- Enterprise workflow automation requiring the use of multiple tools.
- Analysis of long documents with optimized resource consumption.
- Deployment on medium-scale infrastructures thanks to its efficiency.

### granite4-tiny-h:7b
**IBM • 7B parameters (1B active) • Context: 128,000 tokens**

Ultra-efficient hybrid MoE model from IBM, designed for low latency, edge and local applications, and as a foundational component for agent workflows.

**Technical Specifications:**
- **Speed**: 77 tokens/second ⚡
- **Energy Consumption**: 0.43 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `MoE` `Large Context` `Efficient` `Fast` `Compact`

**Use Cases:**
- Embedded and edge applications requiring low latency.
- Fast tasks within larger agent workflows (e.g., function calling).
- Document analysis on consumer-grade hardware.
- Deployments requiring minimal memory footprint.

### deepseek-ocr
**DeepSeek AI • 3B parameters • Context: 8,192 tokens**

Specialized OCR model from DeepSeek, designed for high-precision text extraction with formatting preservation.

**Technical Specifications:**
- **Speed**: 120 tokens/second ⚡
- **Energy Consumption**: 0.16 kWh per million tokens 🌱
- **License**: MIT License
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `OCR` `Efficient`

**Use Cases:**
- Extract structured text (Markdown/LaTeX) from images/PDFs
- Document digitization with complex tables and formulas

## Recommended Use Cases

### Multilingual Dialogue
Chatbots and assistants capable of communicating in multiple languages with automatic language detection, context preservation throughout the entire conversation, and understanding of linguistic nuances

**Recommended Models:**
- Llama 3.3
- Mistral Small 3.2
- Qwen 3
- Openai OSS
- Granite 4

### Long Document Analysis  
Processing large documents (>100 pages) while preserving context across the entire text, extracting key information, generating relevant summaries, and answering specific questions about the content.

**Recommended Models:**  
- Gemma 3  
- Qwen next  
- Qwen 3  
- Granite 4

### Programming and Development  
Code generation and optimization across multiple languages, debugging, refactoring, full feature development, understanding of complex algorithmic implementations, and unit test creation

**Recommended models:**
- DeepCoder
- Qwen3 coder
- Granite 4
- Devstral

### Visual Analysis  
Direct processing of images and visual documents without prior OCR preprocessing, interpretation of technical diagrams, charts, tables, drawings, and photos, with generation of detailed textual explanations of the visual content.

**Recommended Models:**  
- deepseek-OCR  
- Mistral Small 3.2  
- Gemma 3  
- Qwen2.5-VL

### Security and Compliance
Applications requiring specific security capabilities; sensitive content filtering, reasoning traceability, GDPR/HDS compliance verification, risk minimization, vulnerability analysis, and adherence to industry-specific regulations

**Recommended models:**
- Granite Guardian
- Granite 4
- Devstral
- Mistral Small 3.2
- Magistral 24b

### Lightweight and Embedded Deployments  
Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded systems or IoT environments

**Recommended Models:**
- Gemma 3
- Granite Guardian
- Granite 4 tiny
- DeepSeek-OCR