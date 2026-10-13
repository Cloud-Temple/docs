# FAQ zur LLMaaS Cloud Temple Dienstleistung

## Angebot und Fähigkeiten

### **Was ist der Wertvorschlag Ihres LLMaaS-Dienstes?**
Unser Dienst bietet Ihnen einen **souveränen und sicheren** Zugang zu einem breiten Katalog modernster KI-Modelle über eine OpenAI-kompatible API. Wir übernehmen die gesamte Komplexität der **SecNumCloud 3.2** qualifizierten Infrastruktur, sodass Sie sich auf die Wertschöpfung für Ihre Anwendungen konzentrieren, Ihre Kosten durch ein vorhersehbares Geschäftsmodell kontrollieren und Ihre Entwicklungen durch offene Standards beschleunigen können.

### **Welche Arten von Modellen bieten Sie an und wie entwickelt sich der Katalog?**
Der Katalog deckt Chat und Reasoning, Programmierung und Agenten, Vision, Embeddings, Reranking, Sicherheit, Übersetzung sowie Audio-/Bildanwendungen ab. Die Modelle und ihre Lizenzen variieren je nach Verwendungszweck.

Sehen Sie sich den **[Katalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle)** für die aktuelle Liste, LTS-Status, Fristen und empfohlene Migrationen an. Neuigkeiten werden im **[LLMaaS Changelog](https://llmaas.status.cloud-temple.app/changelog)** veröffentlicht.

### **Kann ein alter Modellname nach einer Katalogaktualisierung weiterhin funktionieren?**
Ja, einige Identifikatoren werden auf einen Nachfolger umgeleitet. Dies erhält den API-Aufruf, kann jedoch das Verhalten des Modells ändern. Überprüfen Sie das Ziel im Lebenszyklus, testen Sie es mit Ihren Anwendungsfällen und aktualisieren Sie dann Ihre Konfiguration. Siehe [Migrationsleitfaden](./concepts.md#migration-zu-einem-anderen-modell).

### **Was sind die wichtigsten funktionalen Fähigkeiten Ihrer API?**
Unsere OpenAI-kompatible API ermöglicht es Ihnen, Funktionen wie die folgenden zu erstellen. Die unterstützten Endpunkte und Parameter sind in der [API-Referenz](./api.md#openai-kompatibilität) angegeben.
*   Konversationale **Chatbots/Assistenten** mit Streaming und Function Calling.
*   Vollständige **RAG-Systeme (Retrieval-Augmented Generation)**: Embedding (`/v1/embeddings`) + Reranking (`/v1/rerank`) + augmentierte Generierung.
*   Anwendungen zur **Bild- und Dokumentenanalyse** (OCR, Diagramme). Für PDFs konvertieren Sie die Seiten vorher in Bilder; siehe [Voraussetzungen des OCR-Leitfadens](./ocr.md#voraussetzungen-bildformat-und-abhängigkeiten).
*   **Audio-Transkription** batchweise oder in Echtzeit über WebSocket.
*   **Batch-Verarbeitung (Batch API)** asynchron für große Workloads, mit einer spezifischen Preisgestaltung, die im offiziellen Preiskatalog veröffentlicht ist.
*   **Bildgenerierung** über eine OpenAI-kompatible API.

## Sicherheit und Souveränität

### **Wie gewährleisten Sie die Souveränität und Vertraulichkeit unserer Daten?**
Die Souveränität steht im Mittelpunkt unseres Angebots. Sie basiert auf mehreren Säulen:
1.  **Hosting und Betrieb in Frankreich**: Die LLMaaS-Infrastruktur wird in Frankreich gehostet und von Cloud Temple, einer französischen Gesellschaft, betrieben. Für die mit der Qualifikation verbundenen Souveränitätsgarantien siehe [unser SecNumCloud-Ansatz](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **SecNumCloud 3.2-Qualifikation**: Die höchste Sicherheitszertifizierung der ANSSI garantiert diese Positionierung.
3.  **Keine Datenspeicherung**: Wir speichern **weder Ihre Prompts noch die Antworten**. Die Daten werden während der Inferenz flüchtig im Speicher verarbeitet.
4.  **End-to-End-Verschlüsselung**: Alle Kommunikationen mit der API werden in **TLS 1.3** verschlüsselt.

### **Wie verwalten Sie Zugriffe, Berechtigungen (RBAC) und Authentifizierung (SSO, MFA)?**
Unser Dienst integriert sich in Ihre Sicherheitsrichtlinien nach einem Modell der geteilten Verantwortung:
*   **Für Ihre Endbenutzer**: Die Verwaltung von Identitäten, Rechten (RBAC) und starker Authentifizierung (SSO, MFA) liegt in der Verantwortung **Ihrer Anwendung**.
*   **Für Ihre Administratoren**: Der Zugriff auf die **Cloud Temple Console** zur Steuerung des Dienstes (Schlüsselverwaltung, Überwachung) kann mit Ihrem Unternehmens-SSO (über OpenID Connect) verbunden werden, um Ihre Sicherheitsrichtlinien, einschließlich MFA, zu nutzen.
*   **Für Ihre Anwendungen**: Sie können verschiedene API-Schlüssel mit separaten Verbrauchsquotas erstellen, um Berechtigungen auf Anwendungsebene zu segmentieren.

### **Wie ist die Plattform gesichert?**
Wir wenden eine Defense-in-Depth-Strategie an:
*   **Starke Authentifizierung** durch API-Schlüssel für jede Anfrage.
*   **TLS 1.3-Verschlüsselung** aller Datenströme.
*   **Netzwerkschutz** durch Next-Generation-Firewalls und Intrusion Detection/Prevention Systems (IDS/IPS).
*   **Regelmäßige Penetrationstests** durch qualifizierte Prüfer (PASSI) im Rahmen unserer SecNumCloud 3.2-Qualifikation.

### **Werden Prompts automatisch gefiltert?**
Nein. Die Plattform wendet keine automatische Filterung von Prompt-Inhalten gegen Injektionen oder Versuche zur Umgehung von Anweisungen an. Inhaltskontrollen liegen in der Verantwortung Ihrer Anwendung. Sie können explizit ein Sicherheitsmodell integrieren, um Eingaben oder Antworten gemäß Ihren Geschäftsrichtlinien zu bewerten. Siehe [Prompt-Sicherheit](./concepts.md#prompt-sicherheit).

## Integration und Nutzung

### **Wie integriert sich Ihre API?**
Unser Dienst ist "API-first". Seine **OpenAI-kompatible API** ermöglicht die Verwendung von OpenAI-SDKs und Frameworks wie **LangChain** oder **LlamaIndex** für unterstützte Aufrufe. Konfigurieren Sie die Basis-URL und Ihren LLMaaS-Schlüssel und überprüfen Sie die Parameter und Fähigkeiten des gewählten Modells. Siehe [dokumentierte Unterschiede](./api.md#openai-kompatibilität) und [Integrationsbeispiele](./tutorials.md).

### **Kann die Benutzererfahrung angepasst werden?**
Ja, vollständig. Da unser Dienst eine "headless" API ist, haben Sie volle Kontrolle über die Benutzeroberfläche und die Erfahrung Ihrer Endbenutzer, einschließlich der Integration Ihres Corporate Designs und der Anzeige von Compliance-Nachrichten, die in Ihrer Verantwortung liegen.

### **Wie gehen Sie mit Risiken im Zusammenhang mit geistigem Eigentum (IP) um?**
Sie haben die volle Kontrolle über die Modelle, die Ihre Anwendung aufruft. Für IP-sensitive Anwendungsfälle heben wir die **IBM Granite-Modelle** hervor, die eine **vertragliche Haftungsbefreiung ohne Deckelung** gegen IP-Ansprüche genießen, eine einmalige Garantie auf dem Markt.

## Wirtschaftsmodell und Support

### **Wie ist Ihr Wirtschaftsmodell?**
Unser Modell basiert auf dem tatsächlichen Verbrauch, um die exakten Berechnungskosten widerzuspiegeln. Die Preisgestaltung nach Nutzungsart:

| Nutzung |
| ------- |
| **Eingabetokens (Chat)** |
| **Ausgabetokens (Chat)** |
| **Reasoning-Tokens** |
| **Reranking** |
| **Batch (Eingabe)** |
| **Batch (Ausgabe)** |
| **Audio ASR** |

Um die aktuellen öffentlichen Preise zu erfahren und Ihre Schätzung zu erstellen, konsultieren Sie den [offiziellen Cloud Temple Preiskatalog](https://www.cloud-temple.com/nos-tarifs-publics/).


Um Vorhersehbarkeit und Budgetkontrolle zu gewährleisten, bieten wir **Service-Tiers** mit begrenzten Budgets und **maßgeschneiderte Verträge** an. Sie können Ihren Verbrauch in Echtzeit über die Cloud Temple Console verfolgen, um volle Transparenz zu gewährleisten. Die Anzahl der Benutzer ist unabhängig vom gewählten Plan immer unbegrenzt.

### **Welches Support- und SLA-Niveau bieten Sie an?**
Unser Standardangebot umfasst technischen Support auf Französisch und Englisch, zugänglich über unser Kundenportal, mit einer Verpflichtung zur ersten Antwort an einem Werktag. Die Plattform bietet eine Verfügbarkeitsverpflichtung von **99%**. Für die kritischsten Anforderungen geben Ihnen unsere optionalen **Professional Services** Zugang zu verstärkten SLAs, einschließlich Prioritäts-Support mit einer Reaktionszeit von bis zu 4 Stunden für kritische Vorfälle und einer maßgeschneiderten strategischen Begleitung (Innovationsworkshops, ITIL-Governance).

### **Wie kann ich den Gesundheitszustand der LLMaaS-Plattform verfolgen?**
Wir glauben an volle Transparenz regarding der Verfügbarkeit unserer Dienste. Sie können den Betriebsstatus jedes KI-Modells in Echtzeit auf unserer öffentlichen Statusseite einsehen: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Diese Seite bietet detaillierte Informationen zu:
*   Dem allgemeinen Status der Plattform.
*   Der Verfügbarkeit jedes einzelnen Modells.
*   Leistungsmetriken wie Antwortzeit (TTFB) und Durchsatz (Tokens/s).
*   Der Historie von Vorfällen für ein vollständiges Tracking.
