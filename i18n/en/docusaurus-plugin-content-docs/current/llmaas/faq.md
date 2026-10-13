# FAQ on the LLMaaS Cloud Temple Service Offering

## Offering and Capabilities

### **What is the value proposition of your LLMaaS service?**
Our service provides you with **sovereign and secure** access to a wide catalog of cutting-edge AI models, via an OpenAI-compatible API. We manage all the complexity of the infrastructure qualified under **SecNumCloud 3.2**, allowing you to focus on creating value for your applications, while controlling your costs through a predictable business model and accelerating your development through open standards.

### **What type of models do you offer and how does the catalog evolve?**
The catalog covers chat and reasoning, programming and agents, vision, embeddings, reranking, security, translation, and audio/image use cases. Models and their licenses vary depending on the use case.

Consult the **[catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle)** for the current list, LTS statuses, deadlines, and recommended migrations. New releases are published in the **[LLMaas changelog](https://llmaas.status.cloud-temple.app/changelog)**.

### **Can an old model name continue to work after a catalog update?**
Yes, some identifiers are redirected to a successor. This preserves the API call but may modify the model's behavior. Check the destination in the lifecycle, test it on your use cases, and then update your configuration. See the [migration guide](./concepts.md#migration-to-another-model).

### **What are the main functional capabilities of your API?**
Our OpenAI-compatible API allows you to build features such as those below. Supported endpoints and parameters are specified in the [API reference](./api.md#openai-compatibility).
*   Conversational **chatbots/assistants** with streaming and function calling.
*   Complete **Retrieval-Augmented Generation (RAG)** systems: embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + augmented generation.
*   **Image and visual document analysis** applications (OCR, charts). For PDFs, convert pages to images beforehand; see the [OCR guide prerequisites](./ocr.md#prerequisites-image-format-and-dependencies).
*   **Audio transcription** in batch or real-time via WebSocket.
*   **Batch processing (Batch API)** for large workloads, with specific pricing published in the official pricing catalog.
*   **Image generation** via OpenAI-compatible API.

## Security and Sovereignty

### **How do you ensure the sovereignty and confidentiality of our data?**
Sovereignty is at the heart of our offering. It rests on several pillars:
1.  **Hosting and operation in France**: The LLMaaS infrastructure is hosted in France and operated in France by Cloud Temple, a French law company. For sovereignty guarantees associated with the qualification, see [our SecNumCloud approach](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **SecNumCloud 3.2 Qualification**: The highest security certification from ANSSI guarantees this positioning.
3.  **No data retention**: We do **not store your prompts or responses**. Data is processed volatily in memory during inference.
4.  **End-to-end encryption**: All communications with the API are encrypted using **TLS 1.3**.

### **How do you manage access, rights (RBAC), and authentication (SSO, MFA)?**
Our service integrates with your security policy according to a shared responsibility model:
*   **For your end users**: Identity management, rights (RBAC), and strong authentication (SSO, MFA) are the responsibility of **your application**.
*   **For your administrators**: Access to the **Cloud Temple Console** for service management (key management, monitoring) can be connected to your corporate SSO (via OpenID Connect) to benefit from your security policies, including MFA.
*   **For your applications**: You can create different API keys with distinct consumption quotas to segment rights at the application level.

### **How is the platform secured?**
We apply defense in depth:
*   **Strong authentication** via API key for each request.
*   **TLS 1.3 encryption** of all traffic.
*   **Network protection** by next-generation firewalls and intrusion detection/prevention systems (IDS/IPS).
*   **Regular penetration testing** conducted by qualified auditors (PASSI) as part of our SecNumCloud 3.2 qualification.

### **Are prompts automatically filtered?**
No. The platform does not apply automatic content filtering of prompts against injections or instruction bypass attempts. Content controls are the responsibility of your application. You can explicitly integrate a security model to evaluate inputs or responses, according to your business criteria. See [prompt security](./concepts.md#prompt-security).

## Integration and Usage

### **How does your API integrate?**
Our service is "API-first". Its **OpenAI-compatible API** allows the use of OpenAI SDKs and frameworks like **LangChain** or **LlamaIndex** for supported calls. Configure the base URL and your LLMaaS key, then verify the parameters and capabilities of the chosen model. See the [documented differences](./api.md#openai-compatibility) and [integration examples](./tutorials.md).

### **Can the user experience be customized?**
Yes, completely. Since our service is a "headless" API, you have full control over the interface and user experience for your end users, including the integration of your brand guidelines and the display of compliance messages, which are your responsibility.

### **How do you manage risks related to intellectual property (IP)?**
You have full control over the models your application calls. For IP-sensitive use cases, we highlight **IBM's Granite models**, which benefit from **unlimited contractual indemnification** against IP claims, a unique guarantee on the market.

## Business Model and Support

### **What is your business model?**
Our model is based on actual consumption to reflect the exact compute cost. Pricing by usage type:

| Usage |
| ------- |
| **Input tokens (chat)** |
| **Output tokens (chat)** |
| **Reasoning tokens** |
| **Reranking** |
| **Batch (input)** |
| **Batch (output)** |
| **Audio ASR** |

To find the current public prices and create your estimate, consult the [official Cloud Temple pricing catalog](https://www.cloud-temple.com/en/our-public-rates/).


To ensure predictability and budget control, we offer **Service Tiers** with capped budgets and **custom contracts**. You can monitor your consumption in real-time from the Cloud Temple Console for total transparency. The number of users is always unlimited, regardless of the plan chosen.

### **What level of support and SLA do you offer?**
Our standard offering includes technical support in French and English, accessible via our customer portal, with a first response commitment on business days. The platform has a **99%** availability commitment. For the most critical needs, our optional **Professional Services** give you access to enhanced SLAs, including priority support with a response time of up to 4 hours for critical incidents, and custom strategic support (innovation workshops, ITIL governance).

### **How can I monitor the health status of the LLMaaS platform?**
We believe in total transparency regarding the availability of our services. You can check the operational status of each AI model in real-time on our public status page: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

This page provides detailed information on:
*   The overall platform status.
*   The availability of each model individually.
*   Performance metrics such as response time (TTFB) and throughput (tokens/s).
*   Incident history for complete tracking.
