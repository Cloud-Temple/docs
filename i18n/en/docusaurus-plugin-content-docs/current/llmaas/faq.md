# FAQ on the Service Offer LLMaaS Cloud Temple

## Offer and Capabilities

### **What is the value proposition of your LLMaaS service?**
Our service provides you with **sovereign and secure** access to a wide catalog of cutting-edge AI models, via an OpenAI-compatible API. We manage all the complexity of the qualified **SecNumCloud 3.2** infrastructure, allowing you to focus on creating value for your applications, while managing your costs through a predictable economic model and accelerating your developments through open standards.

### **What types of models do you offer and how does the catalog evolve?**
We offer a rich catalog of 45 open-source models, including the families **Llama (Meta), Qwen, Deepseek, Mistral, Gemma (Google), Cogito and Granite (IBM)**. Our models are specialized for various use cases:
*   **Complex reasoning and conversational**.
*   **Code generation and analysis**.
*   **Long document analysis** (up to 128k tokens with models like `Gemma 3` or `Qwen2.5-VL`).
*   **Multimodal capabilities** (image analysis with the `Granite Vision`, `Gemma 3`, `Qwen2.5-VL` and `Mistral Small` series).
*   **Advanced multilingual support** (with models like `Llama 3.3` and the `Qwen` family).

This catalog is **reviewed quarterly** to integrate the most performant models, with a transparent lifecycle policy (3-month notice before any removal) to ensure the stability of your applications.

### **What are the main functional capabilities of your API?**
Our API, 100% compatible with the OpenAI standard, allows you to easily build advanced features such as:
*   **Conversational chatbots/assistants**.
*   **Retrieval-Augmented Generation (RAG)** systems using our embedding endpoint.
*   **Visual document and image analysis** applications without prior OCR.
*   **Audio transcription** via a dedicated service.

## Security and Sovereignty

### **How do you ensure the sovereignty and confidentiality of our data?**
Data sovereignty is at the core of our offering. It is based on several pillars:
1.  **Hosting in France**: Our infrastructure is exclusively located in France, operated by Cloud Temple, a French company. This protects us from extraterritorial laws such as the **American CLOUD Act**.
2.  **SecNumCloud 3.2 certification**: The highest security accreditation from ANSSI guarantees this positioning.
3.  **Data non-persistence**: We do not store **your prompts or responses**. Data is processed in a volatile manner in memory during inference.
4.  **End-to-end encryption**: All communications with the API are encrypted using **TLS 1.3**.

### **How do you manage access, permissions (RBAC), and authentication (SSO, MFA)?**
Our service integrates with your security policy according to a shared responsibility model:
*   **For your end users**: Identity management, permissions (RBAC), and strong authentication (SSO, MFA) are the responsibility of **your application**.
*   **For your administrators**: Access to the **Cloud Temple Console** for service management (key management, monitoring) can be connected to your enterprise SSO (via OpenID Connect) to benefit from your security policies, including MFA.
*   **For your applications**: You can create different API keys with distinct consumption quotas to segment permissions at the application level.

### **How is the platform secured?**
We apply a layered defense:
*   **Strong authentication** via API key for each request.
*   **TLS 1.3 Encryption** of all data flows.
*   **Network protection** via next-generation firewalls and intrusion detection/prevention systems (IDS/IPS).
*   **Application-level "Guardrails"** to protect against specific LLM threats, such as prompt injection and model exploitation attempts.
*   **Regular penetration tests** conducted by qualified auditors (PASSI) as part of our SecNumCloud 3.2 certification.

## Integration and Usage

### **How does your API integrate?**
Our service is "API-first". Being **compatible with the OpenAI API**, you can use all SDKs (Python, Node.js, etc.) and standard market frameworks like **LangChain** or **LlamaIndex** for quick integration. We provide a complete technical documentation (OpenAPI) and code examples.

### **Can you customize the user experience?**
Yes, completely. Our service being a "headless" API, you have full control over the interface and the experience of your end users, including the integration of your branding and the display of compliance messages, which are your responsibility.

### **How do you manage risks related to intellectual property (IP)?**
You have full control over the models your application calls. For PI-sensitive use cases, we highlight **IBM's Granite** models, which offer **contractual unlimited indemnification** against PI claims, a unique guarantee on the market.

## Economic Model and Support

### **What is your business model?**
Our model is based on actual consumption (**tokens** for language, **minutes** for audio) to reflect the real computing cost. To ensure predictability and budget control, we offer **Service Providers** with capped budgets and **custom contracts**. You can track your consumption in real-time from the Cloud Temple Console for total transparency. Additionally, the number of users is always unlimited, regardless of the plan chosen.

### **What level of support and SLA do you offer?**
Our standard offer includes technical support in French and English, accessible via our client portal, with a commitment to first response on business days. The platform has a **99%** availability commitment. For the most critical needs, our optional **Professional Services** provide enhanced SLAs, including priority support with a response time of up to 4 hours for critical incidents, and customized strategic support (innovation workshops, ITIL governance).