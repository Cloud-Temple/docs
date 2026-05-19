# FAQ zum Serviceangebot LLMaaS Cloud Temple

## Angebot und Kompetenzen

### **Was ist das Wertversprechen Ihres LLMaaS-Dienstes?**
Unser Service bietet Ihnen einen **souveränen und sicheren** Zugang zu einem umfangreichen Katalog modernster KI-Modelle über eine OpenAI-kompatible API. Wir übernehmen die gesamte Komplexität der **SecNumCloud 3.2**-zertifizierten Infrastruktur, sodass Sie sich auf die Wertschöpfung für Ihre Anwendungen konzentrieren können, Ihre Kosten durch ein vorhersehbares Preismodell im Griff behalten und Ihre Entwicklungen durch offene Standards beschleunigen.

### **Welche Art von Modellen bieten Sie an und wie entwickelt sich der Katalog?**
Wir bieten einen umfangreichen Katalog mit **58 Open-Source-Modellen**, einschließlich der Familien **Llama (Meta), Qwen, Mistral, Gemma (Google), NVIDIA Nemotron, Cogito und Granite (IBM)**. Unsere Modelle decken 8 Kategorien ab:
*   **Chat & Reasoning** — Dialog, Analyse, Agents mit Function Calling.
*   **Programmierung & Agents** — Codegenerierung, Refactoring, autonome Agents.
*   **Vision & Multimodal** — Bildanalyse, OCR, Video, Kontexte bis zu 1M Tokens.
*   **Embedding** — Vektorisierung für semantisches RAG (BGE-M3, Granite, Qwen3-Embedding).
*   **Reranking** — Neuanordnung von RAG-Ergebnissen (Cohere-kompatible API `/v1/rerank`).
*   **Sicherheit** — Inhaltsfilterung, Guardrails (Granite3-Guardian).
*   **Übersetzung** — 55 Sprachen (TranslateGemma).
*   **Audio & Bild** — Echtzeit-Transkription (Voxtral), Bildgenerierung (z-image).

Dieser Katalog wird **vierteljährlich aktualisiert**, um die leistungsfähigsten Modelle zu integrieren, mit einer transparenten Lebenszykluspolitik (3-monatige Vorankündigung vor jeder Einstellung), um die Stabilität Ihrer Anwendungen zu gewährleisten.

### **Was sind die wichtigsten funktionalen Fähigkeiten Ihrer API?**
Unsere API, zu 100 % kompatibel mit dem OpenAI-Standard, ermöglicht es Ihnen, problemlos erweiterte Funktionen wie folgende zu entwickeln:
*   Konversationale **Chatbots/Assistenten** mit Streaming und Function Calling.
*   Vollständige **durch Suche ergänzte Generierung (RAG)**-Systeme: Embedding (`/v1/embeddings`) + Reranking (`/v1/rerank`) + augmentierte Generierung.
*   Anwendungen zur **Bild- und visuellen Dokumentenanalyse** (OCR, Diagramme, PDF) ohne Vorverarbeitung.
*   **Audio-Transkription** im Batch-Modus oder in Echtzeit über WebSocket.
*   Asynchrone **Batch-Verarbeitung (Batch API)** für umfangreiche Workloads mit einem um 50 % reduzierten Preis.
*   **Bildgenerierung** über eine OpenAI-kompatible API.

## Sicherheit und Souveränität

### **Wie gewährleisten Sie die Souveränität und Vertraulichkeit Ihrer Daten?**
Die Souveränität steht im Mittelpunkt unseres Angebots. Sie basiert auf mehreren Säulen:
1.  **Hosting in Frankreich** : Unsere Infrastruktur befindet sich ausschließlich in Frankreich und wird von Cloud Temple, einem französischen Unternehmen, betrieben. Dies schützt uns vor extraterritorialen Gesetzen wie dem **US-amerikanischen CLOUD Act**.
2.  **SecNumCloud-Zertifizierung 3.2** : Die höchste Sicherheitszertifizierung der ANSSI garantiert diese Ausrichtung.
3.  **Keine Datenspeicherung** : Wir speichern **weder Ihre Prompts noch die Antworten**. Die Daten werden während der Inferenz flüchtig im Arbeitsspeicher verarbeitet.
4.  **End-to-End-Verschlüsselung** : Alle Kommunikationen mit der API werden über **TLS 1.3** verschlüsselt.

### **Wie verwalten Sie Zugriffe, Berechtigungen (RBAC) und Authentifizierung (SSO, MFA)?**
Unser Dienst integriert sich in Ihre Sicherheitsrichtlinie nach einem Modell der geteilten Verantwortung:
*   **Für Ihre Endanwender** : Die Verwaltung von Identitäten, Berechtigungen (RBAC) und der starken Authentifizierung (SSO, MFA) liegt in der Verantwortung **Ihrer Anwendung**.
*   **Für Ihre Administratoren** : Die Zugriffe auf die **Console Cloud Temple** zur Dienststeuerung (Schlüsselverwaltung, Überwachung) können mit Ihrem Unternehmens-SSO (über OpenID Connect) verbunden werden, um von Ihren Sicherheitsrichtlinien, einschließlich MFA, zu profitieren.
*   **Für Ihre Anwendungen** : Sie können verschiedene API-Schlüssel mit separaten Verbrauchsquotas erstellen, um Berechtigungen auf Anwendungsebene zu segmentieren.

### **Wie ist die Plattform gesichert?**
Wir wenden Defense in Depth an:
*   **Starke Authentifizierung** über API-Schlüssel für jede Anfrage.
*   **TLS 1.3-Verschlüsselung** aller Datenströme.
*   **Netzwerkschutz** durch Next-Generation-Firewalls und Intrusion-Detection-/Intrusion-Prevention-Systeme (IDS/IPS).
*   **Anwendungsbezogene „Guardrails“** zum Schutz vor LLM-spezifischen Bedrohungen wie Prompt-Injection und Versuchen, die Modelle auszunutzen.
*   **Regelmäßige Penetrationstests** durch qualifizierte Prüfer (PASSI) im Rahmen unserer SecNumCloud 3.2-Zertifizierung.

## Integration und Nutzung

### **Wie integriert sich Ihre API?**
Unser Service ist "API-first". Da er **mit der OpenAI-API kompatibel ist**, können Sie alle gängigen SDKs (Python, Node.js usw.) und Frameworks des Marktes wie **LangChain** oder **LlamaIndex** für eine schnelle Integration nutzen. Wir stellen eine vollständige technische Dokumentation (OpenAPI) sowie Codebeispiele bereit.

### **Lässt sich die Benutzererfahrung anpassen?**
Ja, vollständig. Da es sich bei unserem Dienst um eine "Headless-API" handelt, haben Sie die vollständige Kontrolle über die Oberfläche und die Erfahrung Ihrer Endnutzer, einschließlich der Integration Ihres Corporate Designs und der Anzeige von Compliance-Hinweisen, die in Ihrer Verantwortung liegen.

### **Wie gehen Sie mit Risiken im Zusammenhang mit geistigem Eigentum (PI) um?**
Sie haben die vollständige Kontrolle über die Modelle, die Ihre Anwendung aufruft. Für PI-sensitive Anwendungsfälle empfehlen wir die **Granite von IBM**-Modelle, die eine **vertragliche Entschädigung ohne Obergrenze** bei PI-Ansprüchen bieten – eine einzigartige Garantie auf dem Markt.

## Geschäftsmodell und Support

### **Wie lautet Ihr Geschäftsmodell?**
Unser Modell basiert auf dem tatsächlichen Verbrauch, um die exakten Rechenkosten widerzuspiegeln. Die Preisgestaltung nach Nutzungsart:

| Nutzung | Preis |
|-------|-------|
| **Eingabetokens (Chat)** | 1.8 € / Million |
| **Ausgabetokens (Chat)** | 8.0 € / Million |
| **Reasoning-Tokens** | 8.0 € / Million |
| **Reranking** | 4.0 € / Million reranketer Tokens |
| **Batch (Eingabe)** | 0.9 € / Million (−50%) |
| **Batch (Ausgabe)** | 4.0 € / Million (−50%) |
| **Audio-ASR** | 0.01 € / Minute Transkription |

Um Vorhersehbarkeit und Budgetkontrolle zu gewährleisten, bieten wir **Service-Tiers** mit begrenzten Budgets und **maßgeschneiderte Verträge** an. Sie können Ihren Verbrauch in Echtzeit über die Cloud Temple Console verfolgen, um volle Transparenz zu gewährleisten. Die Anzahl der Benutzer ist unabhängig vom gewählten Plan stets unbegrenzt.

### **Welches Support-Level und welchen SLA bieten Sie an?**
Unser Standardangebot umfasst einen technischen Support auf Französisch und Englisch, der über unser Kundenportal verfügbar ist, mit der Verpflichtung zur ersten Antwort innerhalb eines Geschäftstags. Die Plattform bietet eine Verfügbarkeitsgarantie von **99%**. Für die kritischsten Anforderungen bieten Ihnen unsere optionalen **Professional Services** Zugang zu erweiterten SLAs, einschließlich eines Prioritäts-Supports mit einer Reaktionszeit von bis zu 4 Stunden für kritische Vorfälle sowie einer maßgeschneiderten strategischen Begleitung (Innovationsworkshops, ITIL-Governance).

### **Wie kann ich den Gesundheitsstatus der LLMaaS-Plattform überwachen?**
Wir setzen auf vollständige Transparenz bezüglich der Verfügbarkeit unserer Dienste. Sie können den Betriebsstatus jedes KI-Modells in Echtzeit auf unserer öffentlichen Statusseite einsehen: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Diese Seite bietet detaillierte Informationen zu:
*   Den allgemeinen Status der Plattform.
*   Die Verfügbarkeit jedes einzelnen Modells.
*   Leistungsmetriken wie die Antwortzeit (TTFB) und der Durchsatz (Tokens/s).
*   Den Incident-Verlauf für eine vollständige Nachverfolgung.