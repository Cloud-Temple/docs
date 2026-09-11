# FAQ zum Serviceangebot LLMaaS Cloud Temple

## Angebot und Kapazitäten

### **Was ist das Wertversprechen Ihres LLMaaS-Dienstes?**
Unser Service bietet Ihnen **souveränen und sicheren** Zugriff auf einen umfangreichen Katalog modernster KI-Modelle über eine OpenAI-kompatible API. Wir übernehmen die gesamte Komplexität der zertifizierten **SecNumCloud 3.2**-Infrastruktur, sodass Sie sich auf die Wertschöpfung für Ihre Anwendungen konzentrieren können, Ihre Kosten dank eines vorhersehbaren Kostenmodells im Griff behalten und Ihre Entwicklungen dank offener Standards beschleunigen.

### **Welche Art von Modellen bieten Sie an und wie entwickelt sich der Katalog?**
Der Katalog deckt Chat und Reasoning, Programmierung und Agenten, Vision, Embeddings, Reranking, Sicherheit, Übersetzung sowie Audio- und Bildanwendungen ab. Die Modelle und deren Lizenzen variieren je nach Verwendungszweck.

Siehe **[Katalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle)** für die aktuelle Liste, den LTS-Status, die Ablaufdaten und die empfohlenen Migrationen. Neuigkeiten werden im **[LLMaaS Changelog](https://llmaas.status.cloud-temple.app/changelog)** veröffentlicht.

### **Kann ein alter Modellname nach einer Katalogaktualisierung weiterhin funktionieren?**
Ja, einige Identifikatoren werden auf einen Nachfolger umgeleitet. Dies erhält den API-Aufruf, kann jedoch das Verhalten des Modells verändern. Überprüfen Sie das Ziel im Lebenszyklus, testen Sie es mit Ihren Anwendungsfällen und aktualisieren Sie anschließend Ihre Konfiguration. Siehe [guide de migration](./concepts.md#migration-zu-einem-anderen-modell).

### **Welche sind die wichtigsten Funktionen Ihrer API?**
Unsere OpenAI-kompatible API ermöglicht es Ihnen, Funktionen wie die unten aufgeführten zu entwickeln. Die unterstützten Endpunkte und Parameter sind in der [API-Referenz](./api.md#openai-kompatibilität) detailliert beschrieben.
*   Konversationelle **Chatbots/Assistenten** mit Streaming und Function Calling.
*   Umfassende Systeme für **Retrieval-Augmented Generation (RAG)**: Embedding (`/v1/embeddings`) + Reranking (`/v1/rerank`) + augmentierte Generierung.
*   Anwendungen zur **Bild- und visuellen Dokumentenanalyse** (OCR, Grafiken). Für PDFs konvertieren Sie die Seiten zuvor in Bilder; siehe die [Voraussetzungen im OCR-Leitfaden](./ocr.md#voraussetzungen--bildformat-und-abhängigkeiten).
*   **Audio-Transkription** im Batch- oder Echtzeitmodus über WebSocket.
*   Asynchrone **Batch-Verarbeitung (Batch API)** für umfangreiche Workloads mit einem Preisnachlass von 50 %.
*   **Bildgenerierung** über eine OpenAI-kompatible API.

## Sicherheit und Souveränität

### **Wie gewährleisten Sie die Souveränität und Vertraulichkeit unserer Daten ?**
Souveränität steht im Mittelpunkt unseres Angebots. Sie basiert auf mehreren Säulen :
1.  **Hosting und Betrieb in Frankreich** : Die LLMaaS-Infrastruktur wird in Frankreich gehostet und von Cloud Temple, einem nach französischem Recht gegründeten Unternehmen, in Frankreich betrieben. Für die mit der Zertifizierung verbundenen Souveränitätsgarantien lesen Sie [unseren SecNumCloud-Ansatz](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **SecNumCloud 3.2-Zertifizierung** : Das höchste Sicherheitszertifikat der ANSSI garantiert diese Positionierung.
3.  **Keine Datenspeicherung** : Wir speichern **weder Ihre Prompts noch die Antworten**. Die Daten werden nur flüchtig im Arbeitsspeicher während der Inferenz verarbeitet.
4.  **End-to-End-Verschlüsselung** : Alle Kommunikationen mit der API sind mit **TLS 1.3** verschlüsselt.

### **Wie verwalten Sie Zugriffe, Berechtigungen (RBAC) und Authentifizierung (SSO, MFA)?**
Unser Dienst integriert sich in Ihre Sicherheitsrichtlinien nach dem Prinzip der geteilten Verantwortung :
*   **Für Ihre Endbenutzer** : Die Verwaltung von Identitäten, Berechtigungen (RBAC) und starker Authentifizierung (SSO, MFA) liegt in der Verantwortung **Ihrer Anwendung**.
*   **Für Ihre Administratoren** : Der Zugriff auf die **Console Cloud Temple** zur Steuerung des Dienstes (Schlüsselverwaltung, Überwachung) kann mit Ihrem unternehmensweiten SSO (über OpenID Connect) verbunden werden, um von Ihren Sicherheitsrichtlinien, einschließlich MFA, zu profitieren.
*   **Für Ihre Anwendungen** : Sie können verschiedene API-Schlüssel mit unterschiedlichen Nutzungskontingenten erstellen, um Berechtigungen auf Anwendungsebene zu segmentieren.

### **Wie wird die Plattform gesichert?**
Wir wenden eine Verteidigung in der Tiefe an:
*   **Starke Authentifizierung** über API-Schlüssel für jede Anfrage.
*   **TLS 1.3-Verschlüsselung** aller Datenströme.
*   **Netzwerkschutz** durch Next-Generation-Firewalls und Intrusion Detection/Prevention Systems (IDS/IPS).
*   **Regelmäßige Penetrationstests** durch qualifizierte Auditoren (PASSI) im Rahmen unserer SecNumCloud 3.2-Zertifizierung.

### **Werden Prompts automatisch gefiltert?**
Nein. Die Plattform wendet keine automatische Filterung des Prompt-Inhalts gegen Injektionen oder Versuche zur Umgehung von Anweisungen an. Die Inhaltsprüfung obliegt Ihrer Anwendung. Sie können explizit ein Sicherheitsmodell integrieren, um Eingaben oder Antworten gemäß Ihren geschäftlichen Kriterien zu bewerten. Siehe [Prompt-Sicherheit](./concepts.md#prompt-sicherheit).

## Integration und Nutzung

### **Wie wird Ihre API integriert?**
Unser Service ist "API-first". Seine **OpenAI-kompatible API** ermöglicht die Nutzung der OpenAI-SDKs und von Frameworks wie **LangChain** oder **LlamaIndex** für die unterstützten Aufrufe. Konfigurieren Sie die Basis-URL und Ihren LLMaaS-Schlüssel und überprüfen Sie anschließend die Parameter und Fähigkeiten des gewählten Modells. Siehe die [dokumentierten Unterschiede](./api.md#openai-kompatibilität) und die [Integrationsbeispiele](./tutorials.md).

### **Kann die Benutzererfahrung angepasst werden?**
Ja, absolut. Da unser Service eine "headless"-API ist, haben Sie die vollständige Kontrolle über die Benutzeroberfläche und die Benutzererfahrung Ihrer Endnutzer, einschließlich der Integration Ihres Corporate Designs und der Anzeige von Compliance-Hinweisen, die in Ihrer Verantwortung liegen.

### **Wie gehen Sie mit Risiken im Zusammenhang mit dem geistigen Eigentum (IP) um?**
Sie haben die vollständige Kontrolle über die Modelle, die Ihre Anwendung aufruft. Für IP-sensible Anwendungsfälle stellen wir die **IBM Granite**-Modelle in den Vordergrund, die eine **unbegrenzte vertragliche Entschädigung** gegen IP-Ansprüche bieten, eine einzigartige Garantie auf dem Markt.

## Wirtschaftsmodell und Support

### **Wie sieht Ihr Abrechnungsmodell aus?**
Unser Modell basiert auf dem tatsächlichen Verbrauch, um die genauen Rechenkosten widerzuspiegeln. Die Preisgestaltung nach Nutzungstyp:

| Nutzung | Tarif |
|-------|-------|
| **Eingabe-Tokens (Chat)** | 1.8 € / Million |
| **Ausgabe-Tokens (Chat)** | 8.0 € / Million |
| **Reasoning-Tokens** | 8.0 € / Million |
| **Reranking** | 4,00 € / Million verarbeiteter Dokumente |
| **Batch (Eingabe)** | 0.9 € / Million (−50%) |
| **Batch (Ausgabe)** | 4.0 € / Million (−50%) |
| **Audio ASR** | 0.01 € / Transkriptionsminute |

Um Planungssicherheit und Budgetkontrolle zu gewährleisten, bieten wir **Service-Stufen** mit festen Budgetobergrenzen und **maßgeschneiderten Verträgen** an. Sie können Ihren Verbrauch in Echtzeit über die Cloud Temple Console verfolgen, um vollständige Transparenz zu gewährleisten. Die Anzahl der Benutzer ist immer unbegrenzt, unabhängig vom gewählten Tarif.

### **Welches Support- und SLA-Niveau bieten Sie an?**
Unser Standardangebot umfasst einen technischen Support auf Französisch und Englisch, der über unser Kundenportal zugänglich ist, mit einer Verpflichtung zur ersten Antwort innerhalb eines Werktags. Die Plattform verfügt über eine Verfügbarkeitsgarantie von **99%**. Für kritischere Anforderungen bieten unsere optionalen **Professional Services** Zugang zu erweiterten SLAs, einschließlich prioritärem Support mit einer Reaktionszeit von bis zu 4 Stunden für kritische Vorfälle sowie maßgeschneiderte strategische Beratung (ateliers d'innovation, gouvernance ITIL).

### **Wie kann ich den Betriebszustand der LLMaaS-Plattform überwachen?**
Wir setzen auf vollständige Transparenz bezüglich der Verfügbarkeit unserer Dienste. Sie können den Betriebsstatus jedes KI-Modells in Echtzeit auf unserer öffentlichen Statusseite einsehen: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Diese Seite bietet detaillierte Informationen zu:
*   dem allgemeinen Status der Plattform.
*   der individuellen Verfügbarkeit jedes Modells.
*   Performance-Metriken wie Antwortzeit (TTFB) und Durchsatz (Tokens/s).
*   dem Vorfallverlauf zur vollständigen Nachverfolgung.