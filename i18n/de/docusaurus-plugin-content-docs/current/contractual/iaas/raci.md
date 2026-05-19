---
title: IaaS-Verantwortlichkeitsmatrix
displayed_sidebar: docSidebar
---


Hier finden Sie das **RACI**-Modell, das die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der IaaS-Infrastrukturen von Cloud Temple definiert.

## Definition der verschiedenen Rollen

Hier werden die verschiedenen Rollen des RACI-Modells erläutert:

| Rolle         | Beschreibung                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Durchführend  | __R__ealisiert den Prozess                                                              |
| (A) Genehmigend | __A__genehmigt die Durchführung des Prozesses                                              |
| (C) Beraten | __C__onsultiert während des Prozesses                                                     |
| (I) Informiert  | __I__nformiert über die Ergebnisse des Prozesses (über die Tools, das Portal oder die Messaging-Dienste) |

## Definition Ihrer Anforderungen

| Aktivität                                                                                      | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|--------------------|
| Definition der Gesamtarchitektur Ihrer Cloud Temple-Plattform                                  | **RA**      | **CI**             |
| Definition der Anzahl der Tenants und der Verfügbarkeitszonen pro Tenant                       | **RA**      | **CI**             |
| Definition Ihrer gesamten Strategie zur Wiederherstellung oder Geschäftskontinuität            | **RA**      | **CI**             |
| Korrekte Dimensionierung Ihrer Cloud Temple-Plattform (Compute, Storage, Netzwerk, Backup, ...) | **RA**      | **CI**             |
| Bezug der Dienste mit den erforderlichen Informationen                                           | **RA**      | **I**              |

## Initiale Implementierung Ihrer Cloud Temple Tenants

| Aktivität                                                                                                     | Kundenrolle | Cloud-Temple-Rolle |
|--------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Gewährleistung der Implementierung der **physischen Rechenzentren**                                          |             | **RA**             |
| Gewährleistung der Implementierung der **Rechen**-Infrastruktur                                               | **I**       | **RA**             |
| Gewährleistung der Implementierung der **Speicher**-Infrastruktur                                             | **I**       | **RA**             |
| Gewährleistung der Implementierung der Konnektivität zum **Backbone-Netzwerk(1)**                             | **I**       | **RA**             |
| Erwerb und Wartung der essenziellen Softwarelizenzen für den Betrieb der Cloud-Temple-Plattform              |             | **RA**             |
| Implementierung der Basiskonfiguration Ihrer Cloud Temple Tenants                                            | **CI**      | **RA**             |
| Implementierung der Anfangskonfiguration für den Backup-Dienst                                                | **CI**      | **RA**             |
| *Falls abonniert:* Implementierung der Anfangskonfiguration für die Internet- und Firewall-Dienste            | **CI**      | **RA**             |
| Bereitstellung der erforderlichen Unterstützung für die Inbetriebnahme Ihrer Cloud-Temple-Umgebungen         | **I**       | **RA**             |
| Durchführung der abschließenden Konfigurationsanpassungen des Dienstes nach dessen Bereitstellung             | **RA**      | **C**              |
| Konfiguration eines externen Authentifizierungsverzeichnisses für die Cloud-Temple-Konsole                   | **RA**      | **C**              |
| Erstellung der Benutzer für jeden Tenant in der Cloud-Temple-Konsole und Zuweisung der Berechtigungen         | **RA**      |                    |
| Validierung der Konformität der gelieferten Plattform mit dem SecNumCloud-Referenzrahmen                      | **I**       | **RA**             |
| Validierung der Konformität der gelieferten Plattform mit den erforderlichen Spezifikationen                  | **RA**      | **CI**             |

*(1) Das Backbone-Netzwerk bildet die zentrale Infrastruktur von Cloud Temple und bietet ein Rückgrat, auf dem die spezifischen Client-Netzwerke aufsetzen, die in diese Hauptinfrastruktur integriert und von ihr unterstützt werden.*

## Integrieren Sie Ihr Informationssystem in Ihre Cloud-Temple-Umgebungen

| Tätigkeit                                                                                                                      | Kundenrolle | Cloud-Temple-Rolle |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Erstellen, Installieren und Aktualisieren Ihrer virtuellen Maschinen                                                                       | **RA**      |                   |
| Installieren und Konfigurieren von Software und Middleware auf Ihren virtuellen Maschinen                                              | **RA**      |                   |
| Erwerben und Halten von Lizenzen und Nutzungsrechten für die Betriebssysteme Ihrer virtuellen Maschinen  | **RA**      |                   |
| Konfigurieren des Netzwerks für jede Ihrer virtuellen Maschinen                                                                     | **RA**      |                   |
| Sicherstellen, dass jede virtuelle Maschine einem konsistenten Sicherungsplan zugeordnet ist                                          | **RA**      | **C**             |
| Sicherstellen, dass jede virtuelle Maschine einem konsistenten Plan für die Geschäftskontinuität oder das Disaster Recovery zugeordnet ist | **RA**      | **C**             |
| Implementieren einer Antivirenschutzstrategie auf Ihren virtuellen Maschinen                                                | **RA**      |                   |
| Implementieren einer Metriken- und Überwachungslösung auf Ihren virtuellen Maschinen                                     | **RA**      |                   |
| Definieren der TAG-Richtlinie für Ihre virtuellen Maschinen                                                                        | **RA**      |                   |

## Wiederkehrende Operationen

### Verwaltung von Zugriffen und Identitäten

| Aktivität                                                                                                                             | Kundenrolle | Cloud-Temple-Rolle |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellung der Verfügbarkeit des Cloud Temple Console-Dienstes und der zugehörigen API                                                         |             | **RA**            |
| Sicherstellung der Verfügbarkeit des auf Ihren virtuellen Maschinen bereitgestellten Informationssystems                                                 | **RA**      |                    |
| Verwaltung der physischen und logischen Berechtigungen der Cloud Temple-Teams für die SecNumCloud-Infrastrukturen.                              |             | **RA**            |
| Verwaltung der Zugriffe und der zugehörigen Sicherheitsrichtlinie für die Cloud Temple Console-Oberfläche und deren API                | **RA**      |                    |
| Verwaltung der Zugriffe und der zugehörigen Sicherheitsrichtlinie für das Informationssystem, das in Ihren Cloud Temple-Tenants gehostet wird | **RA**      |                    |

### Betriebssicherheit und Sicherheitsbereitschaft

Die Aktivitäten zur Aufrechterhaltung der Betriebs- und Sicherheitsbereitschaft der von Cloud Temple im Rahmen seines IaaS-Angebots bereitgestellten Infrastrukturen und Dienste werden mit dem Ziel der Konformität zur SecNumCloud-Qualifikation durchgeführt.

| Aktivität                                                                                                          | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Aufrechterhaltung der Betriebsbereitschaft der **physischen Rechenzentrum-Infrastrukturen**                     | **I**       | **RA**            |
| Aufrechterhaltung der Sicherheitsbereitschaft der **physischen Rechenzentrum-Infrastrukturen**                        | **I**       | **RA**            |
| Aufrechterhaltung der Betriebsbereitschaft der **Compute-Infrastrukturen**                                    | **I**       | **RA**            |
| Aufrechterhaltung der Sicherheitsbereitschaft der **Compute-Infrastrukturen (2)**                                   | **RA**      | **CI**            |
| Aufrechterhaltung der Betriebsbereitschaft der **Storage-Infrastrukturen**                                  | **I**       | **RA**            |
| Aufrechterhaltung der Sicherheitsbereitschaft der **Storage-Infrastrukturen**                                     | **I**       | **RA**            |
| Aufrechterhaltung der Betriebsbereitschaft der **Backbone-Netzwerk-Infrastrukturen**                          | **I**       | **RA**            |
| Aufrechterhaltung der Sicherheitsbereitschaft der **Backbone-Netzwerk-Infrastrukturen**                             | **I**       | **RA**            |
| Aufrechterhaltung der Betriebsbereitschaft der in den Kunden-Mandanten bereitgestellten virtuellen Maschinen **(3)** | **RA**      |                   |
| Aufrechterhaltung der Sicherheitsbereitschaft der in den Kunden-Mandanten bereitgestellten virtuellen Maschinen **(3)**    | **RA**      |                   |
| Aufrechterhaltung der Betriebsbereitschaft der in den Kunden-Mandanten bereitgestellten Middleware                | **RA**      |                   |
| Aufrechterhaltung der Sicherheitsbereitschaft der in den Kunden-Mandanten bereitgestellten Middleware                   | **RA**      |                   |

*(2) Cloud Temple stellt regelmäßig die neuesten Versionen des Betriebssystems für Ihre Hypervisor bereit.
Da Cloud Temple jedoch nicht über die Spezifika Ihrer Produktionsumgebungen und die Anforderungen
Ihrer Workloads informiert ist, **liegt die Entscheidung zur Aktualisierung des Betriebssystems Ihrer Hypervisor,
die einen Neustart nach sich zieht, bei Ihnen**. Dieser Vorgang kann über die Cloud Temple-Konsole oder die API
durchgeführt werden. Professionelle Dienstleistungen stehen zur Verfügung, falls Sie möchten, dass Cloud Temple
bestimmte Operationen übernimmt.*

*(3) Cloud Temple bietet Lizenzpakete für Firewalls (Fortinet, Stormshield) und Lastverteiler (HAProxy) an und
arbeitet mit Ihren Teams an der Erstkonsfiguration während der Implementierungsphase. Die Verantwortung für
die Aufrechterhaltung der Betriebs- und Sicherheitsbereitschaft liegt jedoch während der laufenden Betriebsphase
bei Ihnen. Professionelle Dienstleistungen stehen zur Verfügung, falls Sie möchten, dass Cloud Temple bestimmte Operationen übernimmt.*

### Änderung, Vorfall, Problem und Kapazitätsmanagement

| Aktivität                                                                                                              | Kundenrolle | Cloud-Temple-Rolle |
|-----------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Vorfälle auf der Infrastruktur **physischer Rechenzentren** verwalten                                                 | **I**       | **RA**             |
| Probleme auf der Infrastruktur **physischer Rechenzentren** verwalten                                                 |             | **RA**             |
| Kapazitäten auf der Infrastruktur **physischer Rechenzentren** verwalten                                              |             | **RA**             |
| Vorfälle auf der Infrastruktur **Compute** verwalten                                                                  | **I**       | **RA**             |
| Probleme auf der Infrastruktur **Compute** verwalten                                                                  |             | **RA**             |
| Kapazitäten auf der Infrastruktur **Compute** verwalten                                                               | **RA**      | **CI**             |
| Vorfälle auf der Infrastruktur **Storage** verwalten                                                                  | **I**       | **RA**             |
| Probleme auf der Infrastruktur **Storage** verwalten                                                                  |             | **RA**             |
| Kapazitäten auf der Infrastruktur **Storage** verwalten                                                               | **RA**      | **CI**             |
| Vorfälle auf der Infrastruktur **Backbone-Netzwerk** verwalten                                                        | **I**       | **RA**             |
| Probleme auf der Infrastruktur **Backbone-Netzwerk** verwalten                                                        |             | **RA**             |
| Kapazitäten auf der Infrastruktur **Backbone-Netzwerk** verwalten                                                     |             | **RA**             |
| Eine neue virtuelle Maschine bereitstellen oder eine neue Anwendungsumgebung innerhalb eines Kunden-Mandanten erstellen | **RA**      |                    |
| Die Konfiguration bereitgestellter virtueller Maschinen ändern                                                        | **RA**      |                    |
| Eine bereitgestellte virtuelle Maschine löschen                                                                       | **RA**      |                    |
| Die Entscheidung treffen, Ressourcen auf der Cloud-Temple-Plattform hinzuzufügen, zu ändern oder zu entfernen         | **RA**      | **CI**             |
| Die Entscheidung zur Ressourcenänderung auf der Cloud-Temple-Plattform umsetzen                                       | **I**       | **RA**             |
| Tags für virtuelle Maschinen gemäß der definierten Richtlinie anwenden                                                | **RA**      |                    |

### Leistungsmanagement

| Tätigkeit                                                                                                                                              | Kundenrolle | Cloud-Temple-Rolle |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Überwachung des ordnungsgemäßen Betriebs und der Zuverlässigkeit aller Geräte, die an der Erbringung des SecNumCloud-zertifizierten Dienstes beteiligt sind | **I**       | **RA**             |
| Überwachung der Leistung der physischen Compute-, Speicher- und Netzwerkressourcen, die Ihren Tenants **(4)** zur Verfügung gestellt werden                  | **RI**      | **A**              |
| Überwachung der Leistung der virtuellen Maschinen, die Ihre Umgebungen unterstützen                                                                      | **RA**      | **I**              |

*(4) Die Cloud-Temple-Plattform verfolgt eine Philosophie, die sich auf **die Bereitstellung dedizierter Infrastrukturen** für die Anforderungen an **Rechenleistung** (mit physischen Blades), **Speicher** (über dedizierte LUNs auf SANs)
und **Netzwerk** (einschließlich Firewalls und Load Balancer). Diese dedizierten Ressourcen stehen dem Kunden zur Verfügung, wobei Nutzung
und daraus resultierende Last direkt von dessen Verwendung abhängen. Es liegt daher in der Verantwortung des Kunden, die erforderlichen Monitoring- und Metriksysteme
einzurichten und zu verwalten, um den optimalen Betrieb seines Informationssystems sicherzustellen.*

### Verwaltung der Datensicherung und der Disaster-Recovery-Strategie auf der integrierten Sicherung

| Aktivität                                                                                                                                  | Kundenrolle | Cloud-Temple-Rolle |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Betriebsbereitschaft der in die Cloud-Temple-Plattform integrierten **Sicherungs**-Infrastrukturen gewährleisten **(5)** |             | **RA**             |
| Sicherheitsbereitschaft der in die Cloud-Temple-Plattform integrierten **Sicherungs**-Infrastrukturen gewährleisten | **I**       | **RA**             |
| Incidentmanagement für die in die Cloud-Temple-Plattform integrierten **Sicherungs**-Infrastrukturen durchführen | **I**       | **RA**             |
| Problemmanagement für die in die Cloud-Temple-Plattform integrierten **Sicherungs**-Infrastrukturen durchführen |             | **RA**             |
| Kapazitätsmanagement für die in die Cloud-Temple-Plattform integrierten **Sicherungs**-Infrastrukturen durchführen | **AI**      | **RC**             |
| Betriebsbereitschaft der vom Kunden in seinen Tenants gewählten Sicherungslösung gewährleisten **(6)**       | **RA**      |                    |
| Sicherheitsbereitschaft der vom Kunden in seinen Tenants gewählten Sicherungslösung gewährleisten | **RA**      |                    |
| Incidentmanagement für die vom Kunden in seinen Tenants gewählte Sicherungslösung durchführen | **RA**      |                    |
| Problemmanagement für die vom Kunden in seinen Tenants gewählte Sicherungslösung durchführen | **RA**      |                    |
| Kapazitätsmanagement für die vom Kunden in seinen Tenants gewählte Sicherungslösung durchführen | **RA**      | **CI**             |
| Lebenszyklusverwaltung der Sicherungsrichtlinien durchführen | **RA**      |                    |
| Sicherstellen, dass die Sicherungsrichtlinien mit dem Datenlebenszyklus konsistent sind | **RA**      |                    |
| Sicherstellen, dass die Geschäftskontinuitäts- oder Disaster-Recovery-Pläne mit dem Datenlebenszyklus konsistent sind | **RA**      |                    |
| Regelmäßige Tests zur Bewertung der Wirksamkeit der Sicherungsstrategie durchführen | **RA**      |                    |
| Regelmäßige Tests zur Bewertung der Wirksamkeit der Disaster-Recovery- oder Geschäftskontinuitäts-Strategie durchführen | **RA**      | **CI**             |

*(5) Stand 1. Januar 2024 ist die in die Cloud-Temple-Plattform integrierte Sicherungslösung IBM Spectrum Protect Plus.
Diese Lösung ist vollständig automatisiert und kann über die Cloud-Temple-Konsole oder die Cloud-Temple-API verwaltet werden.*

### Verwaltung der Datensicherung und Geschäftskontinuität für Drittanbieterplattformen innerhalb eines Kunden-Tenants

| Aktivität                                                                                                                                  | Kundenrolle | Cloud Temple-Rolle |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Betriebssicherheit der vom Kunden in seinen Mandanten gewählten Backup-Lösung gewährleisten **(6)**                                       | **RA**      |                    |
| Sicherheitsstatus der vom Kunden in seinen Mandanten gewählten Backup-Lösung gewährleisten                                                | **RA**      |                    |
| Störungen auf der vom Kunden in seinen Mandanten gewählten Backup-Lösung verwalten                                                          | **RA**      |                    |
| Probleme auf der vom Kunden in seinen Mandanten gewählten Backup-Lösung verwalten                                                           | **RA**      |                    |
| Kapazitäten auf der vom Kunden in seinen Mandanten gewählten Backup-Lösung verwalten                                                        | **RA**      | **CI**             |
| Lebenszyklus der Backup-Richtlinien verwalten                                                                                               | **RA**      |                    |
| Sicherstellen, dass die Backup-Richtlinien mit dem Datenlebenszyklus übereinstimmen                                                         | **RA**      |                    |
| Sicherstellen, dass die Geschäftskontinuitäts- oder Disaster-Recovery-Pläne mit dem Datenlebenszyklus übereinstimmen                        | **RA**      |                    |
| Regelmäßige Tests zur Bewertung der Effektivität der Backup-Strategie durchführen                                                           | **RA**      |                    |
| Regelmäßige Tests zur Bewertung der Effektivität der Disaster-Recovery- oder Geschäftskontinuitätsstrategie durchführen                     | **RA**      | **CI**             |

*(6) Dies betrifft alle zusätzlichen Backup-Lösungen, die in den Umgebungen des Kunden bereitgestellt und von diesem verwaltet werden. Cloud Temple bietet professionelle Dienstleistungen für diejenigen, die bestimmte Operationen an Cloud Temple delegieren möchten.*

### Verwaltung der Dokumentation und des Vertrags

| Aktivität                                                                                                                                                        | Rolle Kunde | Rolle Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellung der kaufmännischen und vertraglichen Betreuung des Kunden, einschließlich der Angebotserstellung, Auftragsabwicklung und Rechnungsstellung       | **I**       | **RA**             |
| Sicherstellung der vertraglichen Überwachung der Dienstleistung, einschließlich der Angebotsvalidierung, Lieferungsverfolgung und Rechnungsüberwachung           | **RA**      | **I**              |
| Sicherstellung der Wartung und Verfügbarkeit des Inventars der von Cloud Temple bereitgestellten Ressourcen im Zusammenhang mit dem SecNumCloud-Angebot            | **I**       | **RA**             |
| Sicherstellung der Wartung und Bereitstellung der technischen Dokumentation im Zusammenhang mit dem SecNumCloud-Angebot                                         | **I**       | **RA**             |
| Sicherstellung der Überwachung des Lebenszyklus der in Ihren Cloud Temple-Umgebungen bereitgestellten virtuellen Maschinen über Ihre CMDB (Configuration Management Database) | **RA**      |                    |
| Aktualisierung der Zugriffsrichtlinie für die Cloud Temple-Konsolenschnittstelle oder die Cloud Temple-API                                                        | **RA**      |                    |

### Logverwaltung

| Aktivität                                                                                                                 | Kundenrolle | Cloud-Temple-Rolle |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Aufbewahrung und Bereitstellung der Protokolle der IaaS-Cloud-Temple-Plattform **(7)**                                |             | **RA**            |
| Aufbewahrung und Bereitstellung der Protokolle des Informationssystems, das in Ihren Cloud-Temple-Tenants gehostet wird | **RA**      |                   |

*(7) Stand 1. Januar 2024 beträgt die Aufbewahrungsdauer der Plattformprotokolle ein Jahr.*

## Konnektivität zum Client-Netzwerk (mpls, fibre dédiée, ipsec, ...)

| Aktivität                                                                                             | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Abschluss einer Operator-Netzwerkkonnektivität zum Zugriff auf ein physisches Cloud Temple Rechenzentrum (8) | **RA**      | **CI**            |
| Verwaltung des IP-Adressplans                                                                         | **RA**      | **I**             |
| Verwaltung von Incidents auf den Operator-Netzwerkverbindungen des Kunden                              | **RA**      |                   |
| Verwaltung von Problemen auf den Operator-Netzwerkverbindungen des Kunden                              | **RA**      | **CI**            |
| Verwaltung der Kapazitäten auf den Operator-Netzwerkverbindungen des Kunden                            | **RA**      | **CI**            |

*(8) Cloud Temple übernimmt die Netzwerkverantwortung für seine Backbone-Infrastruktur, seine Sammelpunkte sowie die Rechenzentrums-Interkonnektionspunkte und gewährleistet damit die Konnektivität zwischen diesen Punkten und seinem Backbone-Netzwerk.
Im Angebot für physisches Rack-Hosting übernimmt Cloud Temple die Verantwortung ab dem Gerät oben im Rack, allgemein als „Top of Rack“ bezeichnet.*

## Rückholbarkeit

| Aktivität                                                                                                                                                                                       | Kundenrolle | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Das Rückholbarkeitsprojekt planen und die Ziel-Infrastrukturen auswählen                                                                                                                     | **RA**      | **I**              |
| Die Übergangsvorgänge durchführen, ob manuelle Extraktion, API-Nutzung oder eine andere mit der Cloud-Temple-Plattform kompatible Drittanbietermethode. | **RA**      | **I**              |
| Daten übertragen und dabei die Auswirkungen der Migration auf die Servicequalität des Informationssystems des Kunden überwachen.                                      | **RA**      |                    |
| Nach Vertragskündigung den Abbau der Konfigurationen der Privaten Cloud und der damit verbundenen Kundenoptionen vornehmen.                                                  | **I**       | **RA**             |
| Die sichere Löschung der Daten auf den Speichermedien durchführen und eine Löschbescheinigung ausstellen                                                                                             | **I**       | **RA**             |