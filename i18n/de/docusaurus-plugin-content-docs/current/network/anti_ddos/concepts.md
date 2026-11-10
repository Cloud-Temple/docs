---
title: Konzepte
---

## Einführung

Anti-DDoS schützt im Internet veröffentlichte Anwendungen und Dienste vor volumetrischen Distributed-Denial-of-Service-Angriffen (DDoS), die darauf abzielen, die Netzwerkverbindungen zu überlasten. Der eingehende Datenverkehr wird permanent überwacht: Im Falle eines Angriffs wird der illegitime Datenverkehr vorgelagert gefiltert, und nur legitime Anfragen erreichen Ihre Dienste.

Der Schutz ist im [Internetzugang](../internet/concepts.md) des Private Backbone enthalten. Er ist standardmäßig aktiv und erfordert keine Konfiguration Ihrerseits.

### Zielgruppen und Anwendungsfälle

- **Websites mit hohem Datenverkehr**: Aufrechterhaltung der Verfügbarkeit der Website während eines Angriffs.
- **Kritische Anwendungen**: Kontinuität der im Internet exponierten Webanwendungen.
- **Anbieter von SaaS-Lösungen**: Schutz der Plattformen, auf die ihre Kunden zugreifen.

## Vorteile

| Vorteil                    | Beschreibung                                                                                         |
|----------------------------|------------------------------------------------------------------------------------------------------|
| Dienstkontinuität          | Ihre Dienste bleiben während eines volumetrischen Angriffs erreichbar.                               |
| Vorgelagerte Filterung     | Illegitimer Datenverkehr wird gefiltert, bevor er das Cloud Temple-Netzwerk und Ihre Infrastrukturen erreicht. |
| Permanente Überwachung     | Der eingehende Datenverkehr wird kontinuierlich analysiert, für eine sofortige Reaktion.             |
| Keine Konfiguration        | Der Schutz gilt automatisch für öffentliche IP-Adressen, ohne Einstellungen oder Eingriffe.          |

## Funktionen

| Funktion                | Beschreibung                                                                                      |
|-------------------------|---------------------------------------------------------------------------------------------------|
| Volumetrischer Schutz   | Vorgelagerte Bereinigung des Datenverkehrs, um volumetrische Angriffe zu blockieren, bevor sie Ihre Dienste erreichen. |
| Datenverkehrsanalyse    | Erkennung und Analyse bösartiger Datenverkehrsmuster.                                             |
| Kontinuierliche Überwachung | Permanente Überwachung des eingehenden Datenverkehrs.                                         |
| Angriffsberichte        | Im Falle eines erheblichen Angriffs kann auf Anfrage beim Support ein Vorfallbericht bereitgestellt werden. |

## Architektur

### Funktionsweise des Schutzes

Volumetrische Angriffe werden am Netzwerkrand, vor dem Cloud Temple-Netzwerk, erkannt und abgewehrt. Wird ein Angriff erkannt, wird der illegitime Datenverkehr automatisch umgeleitet und gefiltert („bereinigt“), ohne den legitimen Datenverkehr zu stören, der weiterhin zu Ihren Diensten geleitet wird.

Der Schutz arbeitet auf Netzwerkebene (Schichten 3 und 4): Er entschlüsselt die Datenströme nicht und prüft nicht deren Inhalt.

### Integration mit anderen Produkten

Anti-DDoS ist ein Bestandteil des Internetzugangs. Er deckt alle Dienste ab, die über eine von Cloud Temple bereitgestellte öffentliche IP-Adresse exponiert sind, insbesondere:

- **Housing**: gemeinsam genutztes oder dediziertes Hosting;
- **Compute**: Bare Metal, IaaS VMware, IaaS OpenSource;
- **Containers**: PaaS OpenShift, Managed Kubernetes.

Die IP-Präfixe, die Sie in die Cloud Temple-Infrastruktur migrieren, profitieren ebenfalls von dem Schutz, ohne zusätzliche Konfiguration (siehe die [Konzepte des Internetzugangs](../internet/concepts.md)).

## Regionen und Verfügbarkeitszonen

Der Schutz ist in der Region FR1 verfügbar.

## Technische Spezifikationen

| Parameter               | Wert                                                          |
|-------------------------|---------------------------------------------------------------|
| Art der behandelten Angriffe | Volumetrische Angriffe                                   |
| Schutzebene             | Netzwerk (Schichten 3 und 4)                                  |
| Mitigationskapazität    | 1 Tb/s                                                        |
| Erkennung               | Permanent                                                     |
| Geltungsbereich         | Von Cloud Temple bereitgestellte öffentliche IP-Adressen und migrierte Präfixe |
| Konfiguration           | Keine, Schutz standardmäßig aktiv                             |

### Grenzen

- Der Schutz zielt auf volumetrische Angriffe auf Netzwerkebene ab: Er prüft nicht den Anwendungsinhalt der Datenströme.
- Es wird weder eine Konsole noch eine API bereitgestellt: Der Schutz wird vollständig von den Cloud Temple-Teams verwaltet und ist nicht konfigurierbar.
- Angriffsberichte werden auf Anfrage über den Support bereitgestellt.

## Sicherheit und Compliance

Anti-DDoS ist nach HDS und ISO 27001 zertifiziert.

- **Verschlüsselung**: Der Schutz führt keinerlei Entschlüsselung der Datenströme durch.
- **Prüfung**: Der Inhalt der Datenströme wird nicht geprüft.

## Dienstverfügbarkeit

Das Verfügbarkeitsziel des Anti-DDoS-Dienstes beträgt 99,99 %, monatlich gemessen.

## Reversibilität

Da Anti-DDoS im Internetzugang enthalten ist, folgt seine Reversibilität der des Netzwerkangebots: Der Schutz wird bei Kündigung des Internetdienstes entfernt. Sie können die folgenden Elemente kostenlos abrufen:

| Exportiertes Element | Lieferumfang                          | Bereitstellungsfrist        |
|----------------------|---------------------------------------|-----------------------------|
| Vorfallberichte      | Angriffsberichte, auf Anfrage         | 30 Tage                     |

## Preise

Anti-DDoS ist ohne Aufpreis im Internetzugangsangebot enthalten. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Anti-DDoS — Preise](https://www.cloud-temple.com/produits/anti-ddos/).
