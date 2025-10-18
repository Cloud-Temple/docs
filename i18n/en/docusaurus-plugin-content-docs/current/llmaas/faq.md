# FAQ about the LLMaaS Cloud Temple Service Offering

## Offer and Capabilities

### **What is the value proposition of your LLMaaS service?**

Our service provides you with **sovereign and secure access** to a wide catalog of cutting-edge AI models, via an OpenAI-compatible API. We handle all the complexity of the certified infrastructure **SecNumCloud 3.2**, allowing you to focus on delivering value for your applications, while maintaining full control over your costs through a predictable economic model and accelerating your development with open standards.

### **What types of models do you offer, and how does the catalog evolve?**

We offer a rich catalog of 45 open-source models, including the families **Llama (Meta), Qwen, Deepseek, Mistral, Gemma (Google), Cogito, and Granite (IBM)**. Our models are specialized for various use cases:

*   **Complex reasoning and conversational tasks**  
*   **Code generation and analysis**  
*   **Long-document analysis** (up to 128k tokens with models such as `Gemma 3` or `Qwen2.5-VL`)  
*   **Multimodal capabilities** (image analysis with the `Granite Vision`, `Gemma 3`, `Qwen2.5-VL`, and `Mistral Small` series)  
*   **Advanced multilingual support** (with models like `Llama 3.3` and the `Qwen` family)

This catalog is **reviewed quarterly** to incorporate the most performant models, with a transparent lifecycle policy (3-month notice prior to any deprecation) to ensure stability for your applications.

### **What are the main functional capabilities of your API?**

Our API, 100% compatible with the OpenAI standard, enables you to easily build advanced features such as:
*   **Conversational chatbots/assistants**.
*   **Retrieval-Augmented Generation (RAG)** systems using our embedding endpoint.
*   Applications for **image and visual document analysis** without prior OCR.
*   **Audio transcription** via a dedicated service.

## Security and Sovereignty

### **How do you ensure the sovereignty and confidentiality of our data?**

Data sovereignty is at the heart of our offering. It is built on several key pillars:

1.  **Hosting in France**: Our infrastructure is exclusively located in France and operated by Cloud Temple, a company governed by French law. This shields us from extraterritorial laws such as the **U.S. CLOUD Act**.
2.  **SecNumCloud 3.2 Certification**: The highest security certification granted by ANSSI ensures this positioning.
3.  **No Data Retention**: We do **not store your prompts or responses**. Data is processed transiently in memory during inference only.
4.  **End-to-End Encryption**: All communications with the API are encrypted using **TLS 1.3**.

### **How do you manage access, permissions (RBAC), and authentication (SSO, MFA)?**

Our service integrates with your security policy under a shared responsibility model:

*   **For your end users**: Identity management, permissions (RBAC), and strong authentication (SSO, MFA) are the responsibility of **your application**.
*   **For your administrators**: Access to the **Cloud Temple Console** for service management (key management, monitoring) can be connected to your enterprise SSO (via OpenID Connect) to leverage your existing security policies, including MFA.
*   **For your applications**: You can create different API keys with distinct consumption quotas to segment permissions at the application level.

### **How is the platform secured?**
We implement a defense-in-depth strategy:
*   **Strong authentication** via API key for every request.
*   **TLS 1.3 encryption** for all data flows.
*   **Network protection** using next-generation firewalls and intrusion detection/prevention systems (IDS/IPS).
*   **Application-level guardrails** to defend against LLM-specific threats, such as prompt injection and model exploitation attempts.
*   **Regular penetration testing** conducted by qualified auditors (PASSI) as part of our SecNumCloud 3.2 certification process.

## Integration and Usage

### **How does your API integrate?**
Our service is "API-first." Being **OpenAI API-compatible**, you can use all standard SDKs (Python, Node.js, etc.) and market-leading frameworks such as **LangChain** or **LlamaIndex** for rapid integration. We provide comprehensive technical documentation (OpenAPI) and code examples.

### **Can the user experience be customized?**
Yes, absolutely. Since our service is a "headless" API, you have full control over the interface and end-user experience, including integration of your brand's visual identity and display of compliance messages, which are your responsibility.

### **How do you manage risks related to intellectual property (IP)?**

You have full control over the models your application calls. For use cases sensitive to IP, we highlight IBM's **Granite models**, which come with a **contractual, unlimited indemnification** against IP claims—a unique guarantee available on the market.

## Economic Model and Support

### **What is your business model?**  
Our model is based on actual usage (**tokens** for language, **minutes** for audio) to reflect real computational costs. To ensure predictability and budget control, we offer **Service Tiers** with capped budgets and **custom contracts**. You can monitor your usage in real time via the Temple Cloud Console for full transparency. Additionally, the number of users is always unlimited, regardless of the plan you choose.

### **What level of support and SLA do you offer?**

Our standard offering includes technical support in French and English, accessible via our customer portal, with a commitment to first response within one business day. The platform is backed by a **99%** availability commitment. For more critical needs, our optional **Professional Services** provide enhanced SLAs, including priority support with response times as fast as 4 hours for critical incidents, and tailored strategic guidance (innovation workshops, ITIL governance).

### **How can I monitor the health status of the LLMaaS platform?**

We believe in complete transparency regarding the availability of our services. You can check in real time the operational status of each AI model on our public status page: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

This page provides detailed information on:
*   The overall status of the platform.
*   The availability of each model individually.
*   Performance metrics such as time to first byte (TTFB) and throughput (tokens/s).
*   Incident history for comprehensive tracking.