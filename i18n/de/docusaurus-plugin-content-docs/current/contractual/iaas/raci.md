---
title: IaaS Verantwortlichkeitsmatrix
---

Hier ist das **RACI**-Modell, das die Verteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der IaaS-Infrastrukturen von Cloud Temple definiert.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen des RACI:

| Rolle        | Beschreibung                                                                        |
|--------------|-------------------------------------------------------------------------------------|
| (R) Realisieren | __R__ealisiert den Prozess                                                         |
| (A) Absegnen  | __A__bsegnet die Durchführung des Prozesses                                           |
| (C) Konsultieren | __C__onsultiert während des Prozesses                                              |
| (I) Informiert  | __I__nformiert über die Ergebnisse des Prozesses (via Tools, Portal oder Messaging) |

## Definition Ihres Bedarfs

| Aktivität                                                                                       | Kundenrolle | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|--------------------|
| Definieren der globalen Architektur Ihrer Cloud Temple Plattform                               | **RA**      | **CI**            |
| Definieren der Anzahl der Tenants und der Verfügbarkeitszonen für jeden Tenant                  | **RA**      | **CI**            |
| Definieren Ihrer globalen Strategie zur Wiederherstellung oder Geschäftskontinuität            | **RA**      | **CI**            |
| Korrektes Dimensionieren Ihrer Cloud Temple Plattform (Rechenleistung, Speicher, Netzwerk, Backup,...) | **RA**      | **CI**            |
| Abonnieren der Dienste mit den erforderlichen Informationen                                    | **RA**      | **I**             |

## Implementierung Ihrer Cloud Temple Tenants

| Aktivität                                                                                                     | Kundenrolle | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellen der Implementierung der **physischen Rechenzentren**                                           |             | **RA**            |
| Sicherstellen der Implementierung der **Recheninfrastrukturen**                                               | **I**       | **RA**            |
| Sicherstellen der Implementierung der **Speicherinfrastrukturen**                                            | **I**       | **RA**            |
| Sicherstellen der Konnektivität zum **Backbone-Netzwerk(1)**                                                  | **I**       | **RA**            |
| Erwerb und Wartung der essenziellen Softwarelizenzen für den Betrieb der Cloud Temple Plattform              |             | **RA**            |
| Implementierung der Basiskonfiguration Ihrer Cloud Temple Tenants                                            | **CI**      | **RA**            |
| Implementierung der Ausgangskonfiguration für den Backup-Dienst                                              | **CI**      | **RA**            |
| *Wenn abonniert:* Implementierung der Netzwerkausgangskonfiguration für Internetdienste und Firewall         | **CI**      | **RA**            |
| Bereitstellung der erforderlichen Unterstützung für die Nutzung Ihrer Cloud Temple Umgebung                  | **I**       | **RA**            |
| Vornahme der endgültigen Konfigurationsanpassungen des Dienstes nach seiner Lieferung                        | **RA**      | **C**             |
| Konfiguration eines externen Authentifizierungsverzeichnisses für die Cloud Temple Konsole                    | **RA**      | **C**             |
| Erstellen von Benutzern für jeden Tenant in der Cloud Temple Konsole und Zuweisen der Rechte                 | **RA**      |                   |
| Validieren der Konformität der gelieferten Plattform mit dem SecNumCloud-Referenzrahmen                      | **I**       | **RA**            |
| Validieren der Konformität der gelieferten Plattform mit den erforderlichen Spezifikationen                  | **RA**      | **CI**            |

*(1) Das Backbone-Netzwerk stellt die zentrale Infrastruktur von Cloud Temple dar und bietet eine Rückgratstruktur, auf der
die spezifischen Kundennetzwerke basieren, welche in diese Hauptinfrastruktur integriert und unterstützt werden.*

## Integration Ihres Informationssystems in Ihre Cloud Temple Umgebung

| Aktivität                                                                                                                      | Kundenrolle | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Erstellen, Installieren, Aktualisieren Ihrer virtuellen Maschinen                                                             | **RA**      |                   |
| Installieren und Konfigurieren der Software und Middleware auf Ihren virtuellen Maschinen                                      | **RA**      |                   |
| Erwerb und Besitz der Lizenzen und Nutzungsrechte<br/> für die Betriebssysteme Ihrer virtuellen Maschinen                   | **RA**      |                   |
| Konfigurieren des Netzwerks für jede Ihrer virtuellen Maschinen                                                                | **RA**      |                   |
| Sicherstellen, dass jede virtuelle Maschine mit einem konsistenten Backup-Plan verbunden ist                                    | **RA**      | **C**             |
| Sicherstellen, dass jede virtuelle Maschine mit einem<br/> konsistenten Wiederherstellungs- oder Geschäftskontinuitätsplan verbunden ist | **RA**      | **C**             |
| Implementierung einer Antivirus-Strategie auf Ihren virtuellen Maschinen                                                        | **RA**      |                   |
| Implementierung einer Metrologie- und Überwachungslösung auf Ihren virtuellen Maschinen                                        | **RA**      |                   |
| Definieren der TAG-Politik Ihrer virtuellen Maschinen                                                                           | **RA**      |                   |

## Wiederkehrende Operationen

### Zugriffs- und Identitätsmanagement

| Aktivität                                                                                                                             | Kundenrolle | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellung der Zugänglichkeit der Cloud Temple Konsolen-Dienste und der zugehörigen API                                        |             | **RA**            |
| Sicherstellung der Zugänglichkeit des Informationssystems, das auf Ihren virtuellen Maschinen bereitgestellt wird                     | **RA**      |                   |
| Verwaltung der physischen und logischen Berechtigungen der Cloud Temple Teams zu den SecNumCloud-Infrastrukturen                    |             | **RA**            |
| Verwaltung des Zugangs und der zugehörigen Sicherheitspolitik im Zusammenhang mit der Cloud Temple Konsole-Schnittstelle und ihrer API | **RA**      |                   |
| Verwaltung des Zugangs und der zugehörigen Sicherheitspolitik zum Informationssystem<br/> das innerhalb Ihrer Cloud Temple Tenants gehostet wird | **RA**      |                   |

### Betrieb und Sicherheit aufrechterhalten

Die Aktivitäten zur Aufrechterhaltung des betrieblichen und sicherheitstechnischen Zustands der Infrastrukturen und Dienste,
die von Cloud Temple im Rahmen seines IaaS-Angebots angeboten werden, werden mit dem Ziel der Konformität mit der SecNumCloud-Qualifikation durchgeführt.

| Aktivität                                                                                                          | Kundenrolle | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellen der Aufrechterhaltung des betrieblichen Zustands der **physischen Rechenzentren**                    | **I**       | **RA**            |
| Sicherstellen der Aufrechterhaltung des Sicherheitszustands der **physischen Rechenzentren**                       | **I**       | **RA**            |
| Sicherstellen der Aufrechterhaltung des betrieblichen Zustands der **Recheninfrastrukturen**                       | **I**       | **RA**            |
| Sicherstellen der Aufrechterhaltung des Sicherheitszustands der **Recheninfrastrukturen(2)**                       | **RA**      | **CI**            |
| Sicherstellen der Aufrechterhaltung des betrieblichen Zustands der **Speicherinfrastrukturen**                     | **I**       | **RA**            |
| Sicherstellen der Aufrechterhaltung des Sicherheitszustands der **Speicherinfrastrukturen**                        | **I**       | **RA**            |
| Sicherstellen der Aufrechterhaltung des betrieblichen Zustands der **Backbone-Netzwerkinfrastrukturen**            | **I**       | **RA**            |
| Sicherstellen der Aufrechterhaltung des Sicherheitszustands der **Backbone-Netzwerkinfrastrukturen**               | **I**       | **RA**            |
| Sicherstellung der Betriebserhaltung der in den Kunden-Tenants bereitgestellten virtuellen Maschinen **(3)**       | **RA**      |                   |
| Sicherstellung der Betriebserhaltung des Sicherheitszustands der in den Kunden-Tenants bereitgestellten virtuellen Maschinen **(3)**  | **RA**      |                   |
| Sicherstellung der Betriebsbereitschaft der in den Kunden-Tenants bereitgestellten Middleware                      | **RA**      |                   |

| Gewährleistung der Sicherheitsbedingungen für die in den Mandantenumgebungen eingesetzten Middleware-Anwendungen               | **RA**      |                   |

*(2) Cloud Temple liefert regelmäßig die neuesten Versionen des Betriebssystems für Ihre Hypervisoren. Da Cloud Temple jedoch keine Kenntnis von den spezifischen Eigenschaften Ihrer Produktionsumgebungen und den Anforderungen Ihrer Workloads hat, **liegt die Entscheidung, das Betriebssystem Ihrer Hypervisoren zu aktualisieren, was einen Neustart zur Folge hat, bei Ihnen**. Diese Aktion kann über das Cloud Temple-Console oder die API durchgeführt werden. Professionelle Dienstleistungen stehen zur Verfügung, falls Sie möchten, dass Cloud Temple bestimmte Operationen übernimmt.*

*(3) Cloud Temple bietet Lizenzpakete für Firewalls (Fortinet, Stormshield) und Load Balancer (HAProxy) an und arbeitet bei der Ersteinrichtung während der Implementierungsphase mit Ihren Teams zusammen. Die Verantwortung für die Aufrechterhaltung des operativen und sicheren Zustands liegt jedoch während der laufenden Betriebsphase bei Ihnen. Professionelle Dienstleistungen stehen zur Verfügung, falls Sie möchten, dass Cloud Temple bestimmte Operationen übernimmt.*

### Veränderungs-, Vorfalls-, Problem- und Kapazitätsmanagement

| Aktivität                                                                                                              | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Verwaltung von Vorfällen in physischen **Rechenzentrumsinfrastrukturen**                                               | **I**       | **RA**              |
| Verwaltung von Problemen in physischen **Rechenzentrumsinfrastrukturen**                                               |             | **RA**              |
| Kapazitätsmanagement in physischen **Rechenzentrumsinfrastrukturen**                                                   |             | **RA**              |
| Verwaltung von Vorfällen in **Recheninfrastrukturen**                                                                  | **I**       | **RA**              |
| Verwaltung von Problemen in **Recheninfrastrukturen**                                                                  |             | **RA**              |
| Kapazitätsmanagement in **Recheninfrastrukturen**                                                                      | **RA**      | **CI**              |
| Verwaltung von Vorfällen in **Speicherinfrastrukturen**                                                                | **I**       | **RA**              |
| Verwaltung von Problemen in **Speicherinfrastrukturen**                                                                |             | **RA**              |
| Kapazitätsmanagement in **Speicherinfrastrukturen**                                                                    | **RA**      | **CI**              |
| Verwaltung von Vorfällen in **Backbone-Netzwerkinfrastrukturen**                                                       | **I**       | **RA**              |
| Verwaltung von Problemen in **Backbone-Netzwerkinfrastrukturen**                                                       |             | **RA**              |
| Kapazitätsmanagement in **Backbone-Netzwerkinfrastrukturen**                                                           |             | **RA**              |
| Einrichtung einer neuen virtuellen Maschine oder eines neuen Anwendungsumfeldes innerhalb eines Mandantenkunden        | **RA**      |                     |
| Änderung der Konfiguration der bereitgestellten virtuellen Maschinen                                                   | **RA**      |                     |
| Löschung einer bereitgestellten virtuellen Maschine                                                                    | **RA**      |                     |
| Entscheidung über das Hinzufügen, Ändern oder Entfernen von Ressourcen auf der Cloud Temple-Plattform                   | **RA**      | **CI**              |
| Umsetzung der Entscheidung zur Änderung der Ressourcen auf der Cloud Temple-Plattform                                  | **I**       | **RA**              |
| Anwendung von Tags auf virtuelle Maschinen gemäß der festgelegten Richtlinie                                           | **RA**      |                     |

### Leistungsmanagement

| Aktivität                                                                                                                                             | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Überwachung der ordnungsgemäßen Funktionalität und Zuverlässigkeit aller an der servicequalifizierten SecNumCloud-Dienstleistung beteiligten Geräte     | **I**       | **RA**              |
| Verfolgung der Leistung der physikalischen Rechen-, Speicher- und Netzwerkressourcen, die Ihren Mandanten zur Verfügung stehen **(4)**                 | **RI**      | **A**               |
| Überwachung der Leistung der virtuellen Maschinen, die Ihre Umgebungen unterstützen                                                                   | **RA**      | **I**               |

*(4) Die Cloud Temple-Plattform verfolgt eine Philosophie der Bereitstellung **dedizierter Infrastrukturen** für die Bedürfnisse von **Rechenkapazitäten** (mit physischen Blades), **Speicher** (über dedizierte LUNs auf SANs) und **Netzwerke** (einschließlich Firewalls und Load Balancer). Diese dedizierten Ressourcen werden dem Kunden zur Verfügung gestellt, dessen Nutzung und resultierende Auslastung direkt von der Anwendungsweise abhängen. Es liegt daher in der Verantwortung des Kunden, die notwendigen Überwachungs- und Messsysteme einzurichten und zu verwalten, um die optimale Funktionsweise seines Informationssystems zu gewährleisten.*

### Backup- und Disaster-Recovery-Management für integriertes Backup

| Aktivität                                                                                                                                  | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Sicherstellung des operativen Betriebs der in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen** **(5)**                  |             | **RA**              |
| Sicherstellung der Sicherheitsbedingungen der in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen**                       | **I**       | **RA**              |
| Verwaltung von Vorfällen in den in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen**                                     | **I**       | **RA**              |
| Verwaltung von Problemen in den in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen**                                     |             | **RA**              |
| Kapazitätsmanagement der in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen**                                            | **AI**      | **RC**              |
| Sicherstellung des operativen Betriebs der vom Kunden in seinen Mandanten gewählten Backup-Lösung **(6)**                                | **RA**      |                     |
| Sicherstellung der Sicherheitsbedingungen der vom Kunden in seinen Mandanten gewählten Backup-Lösung                                    | **RA**      |                     |
| Verwaltung von Vorfällen in der vom Kunden in seinen Mandanten gewählten Backup-Lösung                                                    | **RA**      |                     |
| Verwaltung von Problemen in der vom Kunden in seinen Mandanten gewählten Backup-Lösung                                                    | **RA**      |                     |
| Kapazitätsmanagement der vom Kunden in seinen Mandanten gewählten Backup-Lösung                                                           | **RA**      | **CI**              |
| Verwaltung des Lebenszyklus der Backup-Richtlinien                                                                                       | **RA**      |                     |
| Sicherstellen, dass die Backup-Richtlinien mit dem Lebenszyklus der Daten übereinstimmen                                                                            | **RA**      |                     |
| Sicherstellen, dass Business Continuity- oder Disaster-Recovery-Pläne mit dem Lebenszyklus der Daten übereinstimmen                      | **RA**      |                     |
| Durchführung regelmäßiger Tests zur Bewertung der Effektivität der Backup-Strategie                                                      | **RA**      |                     |
| Durchführung regelmäßiger Tests zur Bewertung der Effektivität der Disaster-Recovery- oder Business-Continuity-Strategie                 | **RA**      | **CI**              |

*(5) Ab 1. Januar 2024 wird die in die Cloud Temple-Plattform integrierte Backup-Lösung IBM Spectrum Protect Plus sein. Diese Lösung ist vollständig automatisiert und kann über das Cloud Temple-Console oder die Cloud Temple-API verwaltet werden.*
| Sicherstellen der Betriebsfähigkeit für die gewählte Backup-Lösung innerhalb der Tenants durch den Kunden **(6)**       | **RA**      |                   |
| Sicherstellen der Sicherheit für die gewählte Backup-Lösung innerhalb der Tenants durch den Kunden                    | **RA**      |                   |
| Incident-Management für die gewählte Backup-Lösung innerhalb der Tenants durch den Kunden                             | **RA**      |                   |
| Problem-Management für die gewählte Backup-Lösung innerhalb der Tenants durch den Kunden                              | **RA**      |                   |
| Kapazitätsmanagement für die gewählte Backup-Lösung innerhalb der Tenants durch den Kunden                            | **RA**      | **CI**            |
| Verwaltung des Lebenszyklus der Backup-Richtlinien                                                                    | **RA**      |                   |
| Sicherstellen, dass die Backup-Richtlinien im Einklang mit dem Lebenszyklus der Daten stehen                            | **RA**      |                   |
| Sicherstellen, dass die Business-Continuity- oder Disaster-Recovery-Pläne im Einklang mit dem Lebenszyklus der Daten stehen  | **RA**      |                   |
| Regelmäßige Tests zur Bewertung der Wirksamkeit der Backup-Strategie durchführen                                         | **RA**      |                   |
| Regelmäßige Tests zur Bewertung der Wirksamkeit der Strategie der<br/> Disaster Recovery oder Business Continuity durchführen | **RA**      | **CI**            |

*(6) Dies betrifft jede zusätzliche Backup-Lösung, die in der Umgebung des Kunden implementiert und von ihm verwaltet wird. Cloud Temple bietet professionelle Dienste für diejenigen, die bestimmte Operationen an Cloud Temple delegieren möchten.*

### Dokumentations- und Vertragsmanagement

| Aktivität                                                                                                   | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Sicherstellen der kaufmännischen und vertraglichen Verwaltung des Kunden, einschließlich Angebotserstellung, Auftragsbearbeitung und Rechnungsstellung | **I**       | **RA**              |
| Sicherstellen der Vertragsverfolgung der Leistung, einschließlich Angebotserstellung, Lieferverfolgung und Rechnungsüberwachung                      | **RA**      | **I**               |
| Sicherstellen der Wartung und Verfügbarkeit des Inventars der von Cloud Temple bereitgestellten Ressourcen im Rahmen des SecNumCloud-Angebots      | **I**       | **RA**              |
| Sicherstellen der Wartung und Bereitstellung der technischen Dokumentation zum SecNumCloud-Angebot                                               | **I**       | **RA**              |
| Sicherstellen der Verfolgung des Lebenszyklus der in den Cloud Temple-Umgebungen bereitgestellten virtuellen Maschinen<br/> über Ihre CMDB (Configuration Management Database) | **RA**      |                     |
| Auf dem Laufenden halten der Zugriffsrichtlinie für die Cloud Temple-Konsole oder die Cloud Temple-API                                            | **RA**      |                     |

### Log-Management

| Aktivität                                                                                                    | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Speicherung und Bereitstellung der Logs der Cloud Temple IaaS-Plattform **(7)**                               |             | **RA**              |
| Speicherung und Bereitstellung der Logs des Informationssystems<br/> das innerhalb Ihrer Cloud Temple-Tenants gehostet wird | **RA**      |                     |

*(7) Ab dem 1. Januar 2024 beträgt die Aufbewahrungsdauer der Logs der Plattform ein Jahr.*

## Netzwerk-Konnektivität des Kunden (mpls, dedizierte Glasfaser, ipsec, ...)

| Aktivität                                                                                                | Rolle Kunde | Rolle Cloud Temple |
|-----------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Abschluss eines Netzwerkkonnektivitätsvertrags mit einem Betreiber zum Zugang zu einem physischen Cloud Temple-Datacenter (8) | **RA**      | **CI**              |
| Verwaltung des IP-Adressplans                                                                        | **RA**      | **I**               |
| Incident-Management für die Netzbetreiber-Links des Kunden                                            | **RA**      |                     |
| Problem-Management für die Netzbetreiber-Links des Kunden                                             | **RA**      | **CI**              |
| Kapazitätsmanagement für die Netzbetreiber-Links des Kunden                                           | **RA**      | **CI**              |

*(8) Cloud Temple übernimmt die Verantwortung für das Netzwerk in Bezug auf seine Backbone-Infrastruktur, Sammelpunkte sowie Datacenter-Verbindungspunkte und gewährleistet somit die Konnektivität zwischen diesen Punkten und seinem Backbone-Netz. Im physischen Hosting-Angebot übernimmt Cloud Temple die Verantwortung ab der obersten Rack-Ausrüstung, gemeinhin als „top of rack“ bezeichnet.*

## Reversibilität

| Aktivität                                                                                                                                                   | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Planung des Reversibilitätsprojekts und Auswahl der Zielinfrastrukturen                                                                                        | **RA**      | **I**               |
| Durchführung der Übergangsoperationen, ob manuelle Extraktion, Verwendung von APIs<br/> oder eine andere Drittanbietermethode, die mit der Cloud Temple-Plattform kompatibel ist. | **RA**      | **I**               |
| Datenübertragung unter Kontrolle der Auswirkungen der Migration auf die Dienstqualität des<br/> Informationssystems des Kunden.                               | **RA**      |                     |
| Dekommissionierung der Konfigurationen des privaten Clouds und der dem Kunden zugehörigen Optionen,<br/> nach Vertragsbeendigung.                            | **I**       | **RA**              |
| Durchführung der sicheren Datenlöschung auf den Speichermedien und Ausstellung einer Bescheinigung                                                             | **I**       | **RA**              |