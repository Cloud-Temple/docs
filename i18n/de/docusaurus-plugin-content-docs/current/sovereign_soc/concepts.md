---
title: Konzepte
---

## Einführung

Das Sovereign SOC ist ein Managed Service zur Cyber-Überwachung. Es übernimmt die Erfassung, Analyse und Qualifizierung der Sicherheitsereignisse Ihrer Informationssysteme, unabhängig davon, ob diese in der vertrauenswürdigen Cloud oder in einer anderen Umgebung gehostet werden. Der Dienst ist durchgängig (End-to-End): Er umfasst die technische Erkennungsplattform, die automatisierte Analyse und die menschliche Validierung rund um die Uhr (24/7) durch ein Team von Sicherheitsanalysten. Sie erhalten ausschließlich qualifizierte Incident-Tickets, begleitet von einem nachverfolgten Behebungsplan.

### Qualifizierung nach dem Trichterprinzip

Jedes Sicherheitsereignis durchläuft drei aufeinanderfolgende Analysestufen, damit Ihre Teams nur bei tatsächlichen Vorfällen hinzugezogen werden:

1. **Automatische Erkennung**: Echtzeitanalyse der erfassten Protokolle durch Abgleich mit Erkennungsregeln (Pattern Matching).
2. **Vorqualifizierung durch KI**: Modelle der künstlichen Intelligenz reichern die Alarme im Hinblick auf bekannte Bedrohungen und Schwachstellen an und schließen offensichtliche Fehlalarme (False Positives) aus.
3. **Menschliche Validierung**: Ein Analyst des SOC qualifiziert den Vorfall vor der Ausstellung des Tickets und verfolgt anschließend die Behebung.

### Sovereign SOC oder SIEM

Ein SIEM (Security Information and Event Management) ist die technische Plattform, die Protokolle erfasst, korreliert und aufbewahrt. Das Sovereign SOC umfasst diese Plattform, aber darüber hinaus auch die Analyse und Qualifizierung der Alarme durch Analysten. Wenn Sie bereits über ein internes SOC-Team verfügen und lediglich eine Plattform zur Erfassung und Korrelation suchen, deckt ein von Ihnen selbst oder von einem Dritten betriebenes SIEM diesen Bedarf ab.

### Zielgruppen und Anwendungsfälle

Der Dienst richtet sich an IT-Leiter (CIO) und Informationssicherheitsbeauftragte (CISO), die die Sicherheitsüberwachung auslagern möchten, ohne ein internes SOC aufzubauen, an die operativen Teams, die die Incident-Tickets erhalten, sowie an Compliance-Verantwortliche, die Audit-Trails zentralisieren müssen. Typische Anwendungsfälle:

- **Erkennung von Eindringversuchen**: unrechtmäßige Zugriffsversuche, Kompromittierung von Konten, Rechteausweitungen. Beispielsweise wird eine ungewöhnliche Anmeldung außerhalb der Geschäftszeiten von einem Analysten überprüft (kein geplanter Wartungseinsatz), der Sie zur Sperrung benachrichtigt.
- **Erkennung von Ransomware**: Verhaltensweisen einer massenhaften Dateiverschlüsselung und verdächtige Kommunikation mit Command-and-Control-Servern (C2).
- **Überwachung der Infrastruktur**: ungewöhnliche Netzwerkflüsse und kritische Konfigurationsänderungen.
- **Nachvollziehbarkeit**: Zentralisierung der Audit-Trails Ihrer Systeme.

## Vorteile

| Vorteil                    | Beschreibung                                                                                                                                      |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Souveränität               | Die erfassten Daten werden in Frankreich gehostet, und die Analysten des SOC sind in Frankreich ansässig.                                          |
| Kontinuierliche Überwachung | Die Alarme werden 24 Stunden am Tag, 7 Tage die Woche, das ganze Jahr über bearbeitet.                                                            |
| Qualifizierte Alarme       | Die Kombination aus automatisierter Analyse und menschlicher Validierung beschränkt die Inanspruchnahme Ihrer Teams auf bestätigte Vorfälle.      |
| Abonnementmodell           | Der Dienst wird im Abonnement bezogen, ohne Anfangsinvestition in eine Erkennungsplattform oder in ein eigenes Team.                                |
| Schnelle Umsetzung         | Die Erfassungs- und Verarbeitungsarchitektur ist vorab bereitgestellt.                                                                             |
| Koordination der Teams     | Wenn Ihre Systeme in der vertrauenswürdigen Cloud gehostet werden, stimmen sich die Cloud- und Sicherheitsteams beim Änderungs-, Asset- und Incident-Management ab. |

## Funktionen

| Funktion                        | Beschreibung                                                                                                                      |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Katalog von Protokollquellen    | Erfassung der Protokolle der wichtigsten Technologien Ihrer Informationssysteme.                                                  |
| Erkennungsregeln                | Katalog bewährter Regeln, die die wichtigsten Angriffstechniken abdecken und nach dem MITRE ATT&CK-Framework dokumentiert sind.   |
| Vorqualifizierung durch KI      | Automatisierte Qualifizierung der ersten Ebene, um Fehlalarme auszuschließen und die Analyse der Alarme anzureichern.             |
| Menschliche Expertise 24/7      | Validierung kritischer Alarme durch einen Analysten des SOC, Vorschlag und Nachverfolgung eines Behebungsplans.                   |
| Abschottung der Daten           | Strikte logische Isolierung der Daten jedes Kunden.                                                                               |
| Ticketing                       | Automatische Erstellung eines Tickets für jeden bestätigten Vorfall.                                                              |
| Benachrichtigungen              | Versand der qualifizierten Alarme per E-Mail an die von Ihnen benannten Kontakte.                                                 |
| Kundenportal                    | Zugriff auf die Tickets, die Dashboards, das Register der Erkennungsregeln und die Leistungsergebnisse des Dienstes.               |
| Monatliche Nachverfolgung       | Monatliches Dashboard: Überprüfung der Tickets, Entwicklung des überwachten Bereichs, Register der umgesetzten Erkennungsregeln.   |

## Architektur

### Datenfluss

1. **Erfassung**: Die Protokolle werden je nach Art der jeweiligen Quelle erfasst, über einen auf Ihrer Infrastruktur installierten Weiterleitungsagenten (Forwarder) oder per API-Aufruf.
2. **Transport**: Die Protokolle werden über einen IPsec-VPN-Tunnel zur Erfassungsenklave des SOC übertragen.
3. **Verarbeitung**: Eine gemeinsam genutzte Erfassungs- und Analyseplattform wendet die Erkennungsregeln an, ergänzt durch ein KI-Analysemodul. Die Daten jedes Kunden sind dort logisch abgeschottet.
4. **Betrieb**: Die Analysten des SOC bearbeiten die Alarme über eine dedizierte Verwaltungskonsole und stellen anschließend die Incident-Tickets aus.

### Integrationen

- **Benachrichtigungen**: qualifizierte Alarme, die per E-Mail an die benannten Kontakte gesendet werden.
- **Kundenportal**: Nachverfolgung der Vorfälle im Ticketing-Tool des Dienstes.
- **ITSM-Tools von Drittanbietern**: Die Anbindung an Ihre IT-Service-Management-Tools kann im Einzelfall geprüft werden.

### Organisation der Reaktion auf Vorfälle

Gemeinsam mit Ihnen wird ein Verfahren zur Behandlung von Sicherheitsvorfällen erstellt, ergänzt durch eine Eskalationsmatrix. Es legt die Kontakte, das Betriebsmodell und den Prozess zur Bearbeitung von Vorfällen fest.

## Regionen und Verfügbarkeitszonen

Der Dienst wird in Frankreich betrieben: Alle erfassten Daten verbleiben im Inland. Die überwachten Systeme hingegen können in der vertrauenswürdigen Cloud, in einer Drittanbieter-Cloud oder On-Premises gehostet werden, sofern ihre Protokolle zur Erfassungsenklave geleitet werden können.

## Technische Spezifikationen

| Parameter                     | Wert                                                                                           |
|-------------------------------|------------------------------------------------------------------------------------------------|
| Erfassung                     | Auf Ihrer Infrastruktur installierter Weiterleitungsagent oder Erfassung per API               |
| Transport                     | IPsec-VPN-Tunnel; TLS 1.3-kompatible Erfassungsprotokolle                                      |
| Verschlüsselung im Ruhezustand | AES-256                                                                                       |
| Aufbewahrung der Protokolle   | 90 Tage; ein spezifischer Aufbewahrungsbedarf kann auf Anfrage berücksichtigt werden           |
| Erkennungsmethode             | Mustervergleich (Pattern Matching), nach MITRE ATT&CK dokumentierte Regeln                     |
| Überwachungszeitraum          | 24/7, das ganze Jahr über                                                                      |

### Erkennungsregeln

Die im Dienst enthaltenen Erkennungsregeln werden Ihnen in der Build-Phase vorgestellt und mit Ihnen abgestimmt, abhängig vom überwachten Bereich und den verfügbaren Protokollen. Sie sind so konzipiert, dass sie:

- die wahrscheinlichsten Bedrohungen abdecken;
- ohne aufwendige Feinabstimmung auf ein Informationssystem anwendbar sind;
- über eine dokumentierte MITRE ATT&CK-Abdeckung verfügen, mit standardmäßig vorgeschlagenen Schwellenwerten und Kritikalitätsstufen. Diese Schwellenwerte können anhand der Liste Ihrer sensiblen Assets angepasst werden.

Der Lebenszyklus der Regeln wird mit Ihnen festgelegt, um der Entwicklung des Bereichs, der Bedrohungen, der Schwachstellen und der Sicherheitsvorfälle zu folgen. Durch die monatliche Nachverfolgung wissen Sie, welche Regeln in Kraft sind und welche Risiken abgedeckt werden.

Es werden zwei Arten neuer Regeln unterschieden:

- **Einfache Regel**: eine Protokollquelle und eine Bedingung, zum Beispiel die Erkennung eines Brute-Force-Angriffs auf eine Authentifizierung.
- **Erweiterte Regel**: mehrere Bedingungen oder eine Anreicherung durch KI (Bedrohungsinformationen, Sensibilität der Assets).

### Phasen des Dienstes

1. **Bestellung**: Der Umfang des Dienstes und die gewählten Optionen werden mit Ihnen festgelegt; Sie nehmen die von Ihnen zu erfüllenden Voraussetzungen zur Kenntnis.
2. **Build**: Aufbau des Dienstes gemeinsam mit Ihnen, Einrichtung der Erfassung und der Erkennungsregeln, Festlegung der Organisation des Incident-Managements zwischen Ihren Teams und dem SOC.
3. **Pre-Run**: einmonatiger Zeitraum zur Feinabstimmung der Erkennungsregeln. Zu dessen Abschluss kann mit Ihnen ein Zielwert für die Fehlalarmquote festgelegt werden.
4. **Run**: aktive Überwachung, Benachrichtigungen und Eskalationen, Festlegung und Nachverfolgung der Behebungspläne, monatliche Governance, Weiterentwicklung der Protokollquellen und der Erkennungsregeln.

### Optionen

| Option                                              | Beschreibung                                                                                                                                                                 |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ausrichtung an Ihrer Risikoanalyse                  | Option der Build-Phase. Ausgehend von Ihrer Cybersicherheits-Risikoanalyse werden die Erkennungsregeln und die Kritikalität der Alarme in einem gemeinsamen Workshop auf Ihre Risiken ausgerichtet. |
| Penetrationstests                                   | Option der Run-Phase. Überprüfung der Sicherheit einer Anwendung oder gezieltes Auslösen von Erkennungsregeln, um die eingerichtete Organisation durchgängig zu erproben.     |
| Kaltaufbewahrung der Protokolle                     | Langfristige Speicherung der Protokolle außerhalb der Erkennungssysteme, mit Schutz ihrer Integrität und Vertraulichkeit.                                                    |

### Grenzen

- Der Dienst beruht auf der Analyse von Protokollen und dem Mustervergleich. Er umfasst weder erweiterte Funktionen zur Verhaltensanalyse von Benutzern und Entitäten (UEBA) noch eine komplexe Korrelation über mehrere Quellen hinweg.
- Die Fehlalarmquote hängt von Ihrem Kontext ab: Qualität der erfassten Daten, Exposition des Informationssystems, Einhaltung bewährter Verfahren durch Benutzer und Administratoren.

## Sicherheit und Compliance

Der Dienst und sein Informationssystem setzen technische und organisatorische Sicherheitsmaßnahmen um:

- **Hosting in Frankreich**: Die erfassten Daten und die KI-Modelle, die sie analysieren, werden in Frankreich gehostet.
- **Verschlüsselung**: Die Daten werden bei der Übertragung und im Ruhezustand verschlüsselt.
- **Abschottung**: abgeschottete Architektur, logische Isolierung der Daten jedes Kunden.
- **Aufrechterhaltung der Sicherheit** der technischen Komponenten des Dienstes.
- **Organisatorische Maßnahmen**: Richtlinien zur Nutzung des Informationssystems, zur Ethik und zur Administration, Hintergrundüberprüfungen, Vertraulichkeitsklausel und Sensibilisierung für Sicherheit für alle Mitarbeitenden des SOC.
- **Kontinuierliche Überwachung**: Die Alarme werden rund um die Uhr (24/7) von in Frankreich ansässigen Analysten bearbeitet.

## Reversibilität

Die erfassten Daten (Protokolle) und die Erkennungsregeln bleiben Ihr Eigentum. Sie werden Ihnen auf Anfrage in Standardformaten zurückgegeben.

## Preise

Das Sovereign SOC wird als festes Abonnement abgerechnet, ergänzt durch einen variablen Anteil, der auf Basis des durchschnittlichen täglichen Volumens der aufgenommenen Protokolle berechnet wird; dieser Anteil umfasst die Aufnahme, die Aufbewahrung über 90 Tage und die KI-Analyse. Die Inbetriebnahme (Build) und die Optionen werden separat abgerechnet. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Sovereign SOC — Preise](https://www.cloud-temple.com/produits/sovereign-soc/).

## Bewährte Verfahren

- Es wird empfohlen, die von Ihren eigenen Sicherheitslösungen (xDR, Web Application Firewall, IPS…) ausgegebenen Alarme vom SOC erfassen zu lassen, damit sie zusammen mit Ihren übrigen Ereignissen qualifiziert werden.
- Stellen Sie die Liste Ihrer sensiblen Assets bereit: Sie ermöglicht es, die Schwellenwerte und die Kritikalität der Alarme anzupassen.
- Die Zugänge zum Kundenportal sind personenbezogen: Es obliegt Ihnen, sie regelmäßig zu überprüfen.
