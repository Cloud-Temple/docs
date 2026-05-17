# FAQ on the LLMaaS Cloud Temple Service Offering

## Offerings and Capabilities

### **What is the value proposition of your LLMaaS service?**
Our service provides you with **sovereign and secure** access to an extensive catalog of cutting-edge AI models, via an OpenAI-compatible API. We manage all the complexity of **SecNumCloud 3.2** qualified infrastructure, allowing you to focus on creating value for your applications, while controlling your costs through a predictable pricing model and accelerating your development with open standards.

### **What types of models do you offer and how does the catalog evolve?**
We offer a rich catalog of **58 open-source models**, including the **Llama (Meta), Qwen, Mistral, Gemma (Google), NVIDIA Nemotron, Cogito, and Granite (IBM)** families. Our models cover 8 categories:
*   **Chat & Reasoning** — dialogue, analysis, agents with function calling.
*   **Programming & Agents** — code generation, refactoring, autonomous agents.
*   **Vision & Multimodal** — image analysis, OCR, video, contexts up to 1M tokens.
*   **Embedding** — vectorization for semantic RAG (BGE-M3, Granite, Qwen3-Embedding).
*   **Reranking** — reranking of RAG results (Cohere-compatible API `/v1/rerank`).
*   **Security** — content filtering, guardrails (Granite3-Guardian).
*   **Translation** — 55 languages (TranslateGemma).
*   **Audio & Image** — real-time transcription (Voxtral), image generation (z-image).

This catalog is **reviewed quarterly** to incorporate the highest-performing models, with a transparent lifecycle policy (3-month advance notice prior to any removal) to ensure the stability of your applications.

### **What are the main functional capabilities of your API?**
Our API, 100% compatible with the OpenAI standard, allows you to easily build advanced features such as:
*   Conversational **chatbots/assistants** with streaming and function calling.
*   Complete **Retrieval-Augmented Generation (RAG)** systems: embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + generation.
*   **Image and visual document analysis** applications (OCR, charts, PDFs) without preprocessing.
*   **Audio transcription** in batch or real-time via WebSocket.
*   Asynchronous **batch processing (Batch API)** for high-volume workloads, with 50% lower pricing.
*   **Image generation** via an OpenAI-compatible API.

## Security and Sovereignty

### **How do you ensure the sovereignty and confidentiality of our data?**
Sovereignty is at the heart of our offering. It rests on several pillars:
1.  **Hosting in France**: Our infrastructure is exclusively located in France, operated by Cloud Temple, a company governed by French law. This exempts us from extraterritorial laws such as the **US CLOUD Act**.
2.  **SecNumCloud 3.2 Certification**: The highest security certification from ANSSI guarantees this positioning.
3.  **No data retention**: We do **not store your prompts or the responses**. Data is processed volatily in memory during inference.
4.  **End-to-end encryption**: All communications with the API are encrypted using **TLS 1.3**.

### **How do you manage access, access rights (RBAC), and authentication (SSO, MFA)?**
Our service integrates with your security policy under a shared responsibility model:
*   **For your end users**: Identity management, access rights (RBAC), and strong authentication (SSO, MFA) are the responsibility of **your application**.
*   **For your administrators**: Access to the **Cloud Temple Console** for service management (key management, monitoring) can be connected to your corporate SSO (via OpenID Connect) to leverage your security policies, including MFA.
*   **For your applications**: You can create different API keys with distinct usage quotas to segment access rights at the application level.

### **How is the platform secured?**
We apply a defense-in-depth strategy:
*   **Strong authentication** via API key for each request.
*   **TLS 1.3 encryption** for all traffic.
*   **Network protection** through next-generation firewalls and intrusion detection/prevention systems (IDS/IPS).
*   **Application "guardrails"** to safeguard against LLM-specific threats, such as prompt injection and model exploitation attempts.
*   **Regular penetration tests** conducted by qualified auditors (PASSI) as part of our SecNumCloud 3.2 certification.

## Integration and Usage

### **How does your API integrate?**
Our service is "API-first". Being **compatible with the OpenAI API**, you can use all standard SDKs (Python, Node.js, etc.) and frameworks on the market such as **LangChain** or **LlamaIndex** for rapid integration. We provide comprehensive technical documentation (OpenAPI) and code examples.

### **Can the user experience be customized?**
Yes, absolutely. Since our service is a "headless" API, you have full control over the interface and the experience of your end users, including the integration of your brand guidelines and the display of compliance messages, which are your responsibility.

### **How do you manage Intellectual Property (IP) risks?**
You have full control over the models your application calls. For IP-sensitive use cases, we highlight **IBM Granite models**, which benefit from **uncapped contractual indemnification** against IP claims, a unique market guarantee.

## Business Model and Support

### **What is your business model?**
Our model is based on actual consumption to reflect the exact compute cost. Pricing by usage type:

| Usage | Rate |
|-------|------|
| **Input tokens (chat)** | €1.8 / million |
| **Output tokens (chat)** | €8.0 / million |
| **Reasoning tokens** | €8.0 / million |
| **Reranking** | €4.0 / million reranked tokens |
| **Batch (input)** | €0.9 / million (−50%) |
| **Batch (output)** | €4.0 / million (−50%) |
| **Audio ASR** | €0.01 / minute of transcription |

To ensure predictability and budget control, we offer **Service Tiers** with capped budgets and **custom contracts**. You can monitor your consumption in real time from the Cloud Temple Console for complete transparency. The number of users is always unlimited, regardless of the chosen plan.

### **What level of support and SLA do you offer?**
Our standard offering includes technical support in French and English, accessible via our client portal, with a first response commitment within one business day. The platform includes a **99%** availability commitment. For the most critical needs, our optional **Professional Services** provide access to enhanced SLAs, including priority support with a response time of up to 4 hours for critical incidents, and tailored strategic support (innovation workshops, ITIL governance).

### **How can I monitor the health status of the LLMaaS platform?**
We believe in complete transparency regarding the availability of our services. You can check the real-time operational status of each AI model on our public status page: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

This page provides detailed information on:
*   The overall status of the platform.
*   The availability of each model individually.
*   Performance metrics such as response time (TTFB) and throughput (tokens/s).
*   Incident history for comprehensive tracking.