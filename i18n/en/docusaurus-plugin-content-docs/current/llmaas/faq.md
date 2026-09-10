# FAQ for the LLMaaS Cloud Temple Service Offering

## Offering and Capabilities

### **What is the value proposition of your LLMaaS service?**
Our service provides you with **sovereign and secure** access to a broad catalog of cutting-edge AI models, via an OpenAI-compatible API. We manage all the complexity of the **SecNumCloud 3.2** certified infrastructure, enabling you to focus on delivering value for your applications, while controlling costs through a predictable pricing model and accelerating development with open standards.

### **What types of models do you offer and how does the catalog evolve?**
The catalog covers chat and reasoning, programming and agents, vision, embeddings, reranking, security, translation, and audio/image use cases. Models and their licenses vary depending on the use case.

Consult the **[catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle)** for the current list, LTS statuses, end-of-life dates, and recommended migrations. Updates are published in the **[LLMaaS changelog](https://llmaas.status.cloud-temple.app/changelog)**.

### **Can an old model name continue to work after a catalog update?**
Yes, some identifiers are redirected to a successor. This preserves the API call but may change the model's behavior. Check the destination in the lifecycle, test it on your use cases, and then update your configuration. Consult the [migration guide](./concepts.md#migration-to-another-model).

### **What are the main functional capabilities of your API?**
Our OpenAI-compatible API allows you to build features like those below. The supported endpoints and parameters are detailed in the [référence API](./api.md#openai-compatibility).
*   Conversational **chatbots/assistants** with streaming and function calling.
*   Complete **Retrieval-Augmented Generation (RAG)** systems: embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + augmented generation.
*   **Image and visual document analysis** applications (OCR, graphiques). For PDFs, convert pages to images beforehand; refer to the [prérequis du guide OCR](./ocr.md#prerequisites-image-format-and-dependencies).
*   **Audio transcription** in batch or real-time via WebSocket.
*   Asynchronous **batch processing (Batch API)** for large-scale workloads, with 50% reduced pricing.
*   **Image generation** via OpenAI-compatible API.

## Security and Sovereignty

### **How do you ensure the sovereignty and confidentiality of our data?**
Sovereignty is at the heart of our offering. It rests on several pillars:
1.  **Hosting and operation in France** : The LLMaaS infrastructure is hosted in France and operated in France by Cloud Temple, a French legal entity. For sovereignty guarantees associated with the certification, consult [our SecNumCloud approach](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **SecNumCloud 3.2 Certification** : The highest security clearance from ANSSI guarantees this positioning.
3.  **No data retention** : We do not store **your prompts or the responses**. Data is processed in volatile memory only during inference.
4.  **End-to-end encryption** : All communications with the API are encrypted using **TLS 1.3**.

### **How do you manage access, permissions (RBAC), and authentication (SSO, MFA)?**
Our service integrates with your security policy under a shared responsibility model:
*   **For your end users**: Identity management, permissions (RBAC), and strong authentication (SSO, MFA) are the responsibility of **your application**.
*   **For your administrators**: Access to the **Cloud Temple Console** for service management (gestion des clés, supervision) can be connected to your enterprise SSO (via OpenID Connect) to leverage your security policies, including MFA.
*   **For your applications**: You can create different API keys with distinct consumption quotas to segment permissions at the application level.

### **How is the platform secured?**
We implement a defense-in-depth approach:
*   **Strong authentication** via API key for each request.
*   **TLS 1.3 encryption** for all traffic.
*   **Network protection** via next-generation firewalls and intrusion detection/prevention systems (IDS/IPS).
*   **Regular penetration testing** conducted by qualified auditors (PASSI) as part of our SecNumCloud 3.2 qualification.

### **Are prompts automatically filtered?**
No. The platform does not automatically filter prompt content against injections or instruction bypass attempts. Content controls are the responsibility of your application. You can explicitly integrate a security model to evaluate inputs or responses, based on your business criteria. See [prompt security](./concepts.md#prompt-security).

## Integration and Usage

### **How does your API integrate?**
Our service is "API-first". Its **OpenAI-compatible API** allows you to use the OpenAI SDKs and frameworks like **LangChain** or **LlamaIndex** for supported calls. Configure the base URL and your LLMaaS key, then verify the settings and capabilities of the selected model. Consult the [documented differences](./api.md#openai-compatibility) and [integration examples](./tutorials.md).

### **Can the user experience be customized?**
Yes, absolutely. Since our service is a "headless" API, you have full control over the interface and the experience of your end users, including the integration of your brand guidelines and the display of compliance messages, which are your responsibility.

### **How do you manage intellectual property (IP) risks?**
You have full control over the models your application calls. For IP-sensitive use cases, we highlight the **IBM Granite** models, which come with **uncapped contractual indemnification** against IP claims, a unique guarantee in the market.

## Business Model and Support

### **What is your pricing model?**
Our model is based on actual consumption to reflect the exact compute cost. Pricing by usage type:

| Usage | Rate |
|-------|-------|
| **Input tokens (chat)** | 1.8 € / million |
| **Output tokens (chat)** | 8.0 € / million |
| **Reasoning tokens** | 8.0 € / million |
| **Reranking** | 4.00 € / million documents processed |
| **Batch (input)** | 0.9 € / million (−50%) |
| **Batch (output)** | 4.0 € / million (−50%) |
| **Audio ASR** | 0.01 € / minute of transcription |

To ensure predictability and budget control, we offer **Service Tiers** with capped budgets and **custom contracts**. You can monitor your consumption in real time from the Temple Cloud Console for complete transparency. The number of users is always unlimited, regardless of the plan chosen.

### **What level of support and SLA do you offer?**
Our standard offering includes technical support in French and English, accessible via our customer portal, with a first response commitment within one business day. The platform features a **99%** availability commitment. For the most critical needs, our optional **Professional Services** provide access to enhanced SLAs, including priority support with a response time of up to 4 hours for critical incidents, and tailored strategic guidance (innovation workshops, ITIL governance).

### **How can I monitor the health status of the LLMaaS platform?**
We believe in full transparency regarding the availability of our services. You can check the real-time operational status of each AI model on our public status page: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

This page provides detailed information on:
*   The overall platform status.
*   The availability of each model individually.
*   Performance metrics such as response time (TTFB) and throughput (tokens/s).
*   Incident history for complete tracking.