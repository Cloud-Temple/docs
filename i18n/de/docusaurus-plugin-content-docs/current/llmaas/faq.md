# FAQ über das Dienstangebot LLMaaS Cloud Temple

## Angebot und Fähigkeiten

### **Was ist der Wertvorschlag Ihres LLMaaS-Dienstes?**  
Unser Dienst bietet Ihnen einen **souveränen und sicheren** Zugang zu einem umfangreichen Katalog von Spitzenmodellen der KI über eine OpenAI-kompatible API. Wir verwalten die gesamte Komplexität der zertifizierten Infrastruktur **SecNumCloud 3.2**, wodurch Sie sich auf die Erstellung von Wert für Ihre Anwendungen konzentrieren können, während Sie Ihre Kosten durch ein vorhersehbares Wirtschaftsmodell kontrollieren und Ihre Entwicklungen durch offene Standards beschleunigen.

### **Welche Arten von Modellen bieten Sie an und wie entwickelt sich der Katalog?**
Wir bieten ein umfangreiches Katalog mit 45 Open-Source-Modellen an, darunter die Familien **Llama (Meta), Qwen, Deepseek, Mistral, Gemma (Google), Cogito und Granite (IBM)**. Unsere Modelle sind für verschiedene Anwendungsfälle spezialisiert:
*   **Komplexes und konversatives Denken**.
*   **Codegenerierung und -analyse**.
*   **Analyse von langen Dokumenten** (bis zu 128k Tokens mit Modellen wie `Gemma 3` oder `Qwen2.5-VL`).
*   **Multimodale Fähigkeiten** (Bildanalyse mit den Serien `Granite Vision`, `Gemma 3`, `Qwen2.5-VL` und `Mistral Small`).
*   **Fortgeschrittener Mehrsprachigkeit** (mit Modellen wie `Llama 3.3` und der `Qwen`-Familie).

Dieser Katalog wird quartalsweise überarbeitet, um die leistungsstärksten Modelle zu integrieren, mit einer transparenten Lebenszyklus-Politik (3-monatiger Vorab-Warning vor jedem Rückzug), um die Stabilität Ihrer Anwendungen zu gewährleisten.

### **Welche sind die wichtigsten funktionalen Fähigkeiten Ihrer API?**
Unsere API, 100 % kompatibel mit dem OpenAI-Standard, ermöglicht Ihnen die einfache Erstellung fortgeschrittener Funktionen wie:
*   Konversationelle **Chatbots/Assistenten**.
*   Systeme zur **Erweiterten Suche durch Generierung (RAG)** mit unserem Embedding-Endpunkt.
*   Anwendungen zur **Bild- und visuellen Dokumentenanalyse** ohne vorherige OCR.
*   Die **Audio-Transkription** über einen spezialisierten Dienst.

## Sicherheit und Souveränität

### **Wie gewährleisten Sie die Souveränität und Vertraulichkeit unserer Daten?**  
Die Souveränität steht im Mittelpunkt unseres Angebots. Sie basiert auf mehreren Säulen:  
1.  **Hosting in Frankreich** : Unsere Infrastruktur befindet sich ausschließlich in Frankreich und wird von Cloud Temple, einer französischen Gesellschaft, betrieben. Dies entzieht uns den extraterritorialen Gesetzen wie dem **CLOUD Act der USA**.  
2.  **Zertifizierung SecNumCloud 3.2** : Der höchste Sicherheitsstandard der ANSSI garantiert diese Positionierung.  
3.  **Keine Speicherung der Daten** : Wir speichern **weder Ihre Prompts noch die Antworten**. Die Daten werden während der Inferenz nur temporär im Speicher verarbeitet.  
4.  **Ende-zu-Ende-Verschlüsselung** : Alle Kommunikationen mit der API sind mit **TLS 1.3** verschlüsselt.

### **Wie verwalten Sie Zugriff, Berechtigungen (RBAC) und Authentifizierung (SSO, MFA)?**
Unser Dienst integriert sich in Ihre Sicherheitspolitik gemäß einem Modell der geteilten Verantwortung:
*   **Für Ihre Endbenutzer**: Die Verwaltung von Identitäten, Berechtigungen (RBAC) und starker Authentifizierung (SSO, MFA) liegt in der Verantwortung **Ihrer Anwendung**.
*   **Für Ihre Administratoren**: Der Zugriff auf die **Cloud Temple-Konsole** zur Steuerung des Dienstes (Schlüsselverwaltung, Überwachung) kann mit Ihrem Unternehmens-SSO (über OpenID Connect) verbunden werden, um Ihre Sicherheitsrichtlinien zu nutzen, einschließlich der MFA.
*   **Für Ihre Anwendungen**: Sie können verschiedene API-Schlüssel mit unterschiedlichen Verbrauchsquoten erstellen, um die Berechtigungen auf Anwendungsebene zu segmentieren.

### **Wie ist die Plattform gesichert?**
Wir setzen eine mehrschichtige Sicherheitsstrategie um:
*   **Starke Authentifizierung** per API-Schlüssel für jede Anfrage.
*   **TLS 1.3-Verschlüsselung** aller Datenströme.
*   **Netzwerkschutz** durch Next-Generation-Firewalls und Intrusion Detection/Prevention-Systeme (IDS/IPS).
*   **Anwendungsguardrails**, um sich vor spezifischen LLM-Bedrohungen wie Prompt-Injektion und Modellausnutzung zu schützen.
*   **Regelmäßige Eindringversuche**, durch qualifizierte Auditor (PASSI) im Rahmen unserer SecNumCloud 3.2-Zertifizierung durchgeführt.

## Integration und Verwendung

### **Wie integriert sich Ihre API?**
Unser Dienst ist "API-first". Da er mit der OpenAI-API kompatibel ist, können Sie alle SDKs (Python, Node.js, usw.) und Standard-Frameworks des Marktes wie LangChain oder LlamaIndex verwenden, um eine schnelle Integration zu ermöglichen. Wir bieten eine vollständige technische Dokumentation (OpenAPI) und Code-Beispiele an.

### **Kann die Benutzererfahrung angepasst werden?**
Ja, vollständig. Da unser Dienst eine „headless“-API ist, haben Sie die volle Kontrolle über die Benutzeroberfläche und die Erfahrung Ihrer Endbenutzer, einschließlich der Integration Ihrer visuellen Identität und der Anzeige von Compliance-Meldungen, die in Ihrer Verantwortung liegen.

### **Wie verwalten Sie Risiken im Zusammenhang mit geistigem Eigentum (GE)?**  
Sie haben die volle Kontrolle über die Modelle, auf die Ihre Anwendung zugreift. Bei Anwendungsfällen, die sensibel gegenüber geistigem Eigentum sind, empfehlen wir die **Granite-Modelle von IBM**, die eine **vertragliche Entschädigung ohne Obergrenze** für GE-Ansprüche bieten, eine einzigartige Garantie auf dem Markt.

## Wirtschaftsmodell und Support

### **Was ist Ihr Geschäftsmodell?**
Unser Modell basiert auf der tatsächlichen Nutzung (**Tokens** für Sprache, **Minuten** für Audio), um die tatsächlichen Berechnungskosten widerzuspiegeln. Um Vorhersehbarkeit und Budgetkontrolle zu gewährleisten, bieten wir **Service-Levels** mit Gebührenobergrenzen und **maßgeschneiderte Verträge**. Sie können Ihre Nutzung in Echtzeit über die Cloud Temple Console verfolgen, um eine vollständige Transparenz zu gewährleisten. Darüber hinaus ist die Anzahl der Benutzer immer unbegrenzt, unabhängig vom gewählten Plan.

### **Welchen Support- und SLA-Niveau bieten Sie an?**
Unsere Standardangebot umfasst technischen Support auf Französisch und Englisch, über unseren Kundenportale zugänglich, mit einer Verpflichtung zur ersten Antwort innerhalb eines Arbeitstags. Die Plattform verfügt über eine Verpflichtung zur Verfügbarkeit von **99%**. Für die kritischsten Anforderungen bieten unsere optionalen **Professionelle Dienstleistungen** Zugang zu verstärkten SLAs, einschließlich priorisierten Support mit einer Antwortzeit von bis zu 4 Stunden für kritische Vorfälle und maßgeschneiderte strategische Begleitung (Innovationsworkshops, ITIL-Governance).