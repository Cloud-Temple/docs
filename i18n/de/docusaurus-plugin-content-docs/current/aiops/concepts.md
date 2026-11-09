---
title: Konzepte
---

:::info[Managed Service, außerhalb der Konsole]

AIOps wird über die Experten von Cloud Temple gebucht, die mit Ihnen seine Integration in Ihre Umgebung und den passenden Bereitstellungsmodus prüfen. Er wird nicht über die Cloud-Temple-Konsole bestellt und hat dort weder eine Ansicht noch eine API.

:::

## Einführung

Der Dienst **AIOps** von Cloud Temple ist eine Plattform für operative Intelligenz, die künstliche Intelligenz auf den IT-Betrieb anwendet: Überwachung, Analyse von Störungen und Automatisierung von Betriebsaufgaben. Er stützt sich auf eine hybride CMDB, um jedes Ereignis in seinen Kontext zu stellen (Dienste, Abhängigkeiten, Kritikalität). Er wirkt als Copilot Ihrer Teams: Er ersetzt sie nicht.

Er richtet sich an Betriebsteams, Produktionsingenieure, SREs (*Site Reliability Engineers*) und IT-Leitungen, die die Servicequalität verbessern und wiederkehrende Aufgaben reduzieren möchten. Typische Anwendungsfälle:

- das Rauschen bei einem Alarmsturm verringern, indem Ereignisse mit derselben Ursache zu einer einzigen Störung zusammengefasst werden;
- Anomalien in Sicherungsberichten und Stapelverarbeitungen erkennen;
- Störungen durch die Analyse des Verhaltens der Metriken vorhersehen.

## Vorteile

| Vorteil | Beschreibung |
|---|---|
| Reaktionsfähigkeit | Je nach Bereitstellungsmodus schlägt AIOps bekannte Korrekturen vor (Stackless) oder wendet sie an (Stackfull). |
| Weniger Rauschen | Die Korrelation der Alarme konzentriert Ihre Teams auf echte Störungen. |
| Proaktive Haltung | Die Anomalieerkennung meldet Abweichungen, bevor sie eine Störung verursachen. |
| Kompetenzweitergabe | Lösungsvorschläge und bewährte Runbooks verbreiten das Fachwissen erfahrener Ingenieure. |

## Funktionen

| Funktion | Beschreibung |
|---|---|
| Kontextbezogene Korrelation | Zusammenfassung der Alarme nach Topologie, um Alarmstürme einzudämmen. |
| Ursachenanalyse | Identifizierung der fehlerhaften Komponente in der Abhängigkeitskette. |
| Semantische Protokollanalyse | Verständnis der Fehler in Sicherungs- und Verarbeitungsprotokollen, über Rückgabecodes hinaus. |
| Anomalieerkennung | Erlernen des Normalverhaltens und Alarm bei Abweichung. |
| Automatische Behebung | Im Modus Stackfull Ausführung von Reparaturszenarien mit Schutzmechanismen; im Modus Stackless bleibt die Ausführung bei Ihren Teams. |
| Sortierung und Weiterleitung | Kategorisierung der Störung und Weiterleitung an das richtige Team. |
| Lösungsvorschläge | Abgleich mit der Wissensdatenbank und dem Ticketverlauf, um Runbooks und wahrscheinliche Ursachen vorzuschlagen. |

## Architektur

AIOps arbeitet wie ein Kontrollturm, der mit Ihren Betriebswerkzeugen verbunden ist:

- die **Überwachung** speist ihn laufend (Ereignisse, Alarme, Metriken und Protokolle je nach Umfang);
- das **ITSM-Werkzeug** liefert den operativen Kontext: Störungen, Änderungen, Verlauf;
- die **CMDB** liefert das Verzeichnis der Dienste und ihrer Abhängigkeiten.

Der Kontrollturm korreliert diese Signale, reichert die Tickets an (Kategorisierung, Gruppierung, Priorisierung, Runbook-Vorschläge) und protokolliert seine Aktionen im ITSM-Werkzeug.

### Bereitstellungsmodi

- **Stackless** (Standard): Keine Komponente wird Ihrem Informationssystem hinzugefügt. AIOps stützt sich auf die vorhandene Erfassung und liefert Analysen, Empfehlungen und Vorschläge; die Ausführung der Aktionen bleibt bei Ihren Teams.
- **Stackfull**: In Ihrem Informationssystem bereitgestellte KI-Agenten führen vordefinierte Behebungsszenarien aus, unter der Steuerung Ihrer ITSM-Prozesse.

### Integrationen

- **Überwachung**: Nagios, Centreon, Prometheus, Zabbix.
- **ITSM**: ServiceNow, Jira.
- **Umgebungen**: Azure, AWS, VMware.

## Regionen und Verfügbarkeitszonen

Die Daten werden in Frankreich in den Rechenzentren von Cloud Temple gehostet und pro Kunde isoliert. Die Inferenz der KI-Modelle erfolgt in Frankreich.

## Technische Spezifikationen

| Parameter | Wert |
|---|---|
| Datenaufbewahrung | Standardmäßig 12 Monate |
| Analysehäufigkeit | Echtzeit (Stream) |
| KI-Modelle | Überwachte, unüberwachte und große Sprachmodelle (LLM) |

### Grenzen

- AIOps wird nicht über die Cloud-Temple-Konsole bestellt und hat dort weder eine Ansicht noch eine API.
- Der abgedeckte Umfang und der Bereitstellungsmodus werden mit den Experten von Cloud Temple festgelegt.

## Sicherheit und Compliance

- **Isolation**: Die Daten jedes Kunden sind isoliert.
- **Standort**: Daten in Frankreich gehostet und KI-Modelle in Frankreich ausgeführt, auf der Infrastruktur von Cloud Temple.
- **Steuerung der Aktionen**: Im Modus Stackfull sind die Behebungsszenarien vordefiniert, durch Schutzmechanismen begrenzt und durch Ihre ITSM-Prozesse gesteuert; im Modus Stackless führt AIOps keine Aktion aus.

## Reversibilität

Die Modalitäten für den Export und die Löschung Ihrer Daten werden bei der Buchung mit den Experten von Cloud Temple festgelegt.

## Preise

AIOps wird nach einer Prüfung mit den Experten von Cloud Temple gebucht: [Kontakt aufnehmen](https://www.cloud-temple.com/contactez-nous/). Siehe auch die [AIOps-Seite der Cloud-Temple-Website](https://www.cloud-temple.com/produits/ai-ops/).
