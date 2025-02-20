---
title: Verantwortlichkeitsmatrix IaaS
---

Hier ist das **RACI**-Modell, das die Verteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der IaaS-Infrastrukturen von Cloud Temple definiert.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen des RACI:

| Rolle        | Beschreibung                                                                        |
|--------------|-------------------------------------------------------------------------------------|
| (R) Realisiert| __R__ealisiert den Prozess                                                          |
| (A) Absegnet | __A__bgenehmigt die Durchführung des Prozesses                                      |
| (C) Konsultiert | __C__onsultiert während des Prozesses                                            |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses (via Werkzeug, Portal oder Nachricht) |

## Definition Ihres Bedarfs

| Tätigkeit                                                                                       | Kundenrolle | Cloud Temple Rolle |
|------------------------------------------------------------------------------------------------|-------------|--------------------|
| Definieren der Gesamtarchitektur Ihrer Cloud Temple Plattform                                   | __RA__      | __CI__             | 
| Definieren der Anzahl an Tenants und der Anzahl von Verfügbarkeitszonen für jeden Tenant        | __RA__      | __CI__             | 
| Definieren Ihrer globalen Strategie für Wiederherstellung oder Fortführung des Betriebs         | __RA__      | __CI__             | 
| Richtige Dimensionierung Ihrer Cloud Temple Plattform (Rechnen, Speicher, Netzwerk, Backup,...) | __RA__      | __CI__             | 
| Abonnieren der Dienste mit den erforderlichen Informationen                                     | __RA__      | __I__              |

## Initiale Implementierung Ihrer Cloud Temple Tenants

| Tätigkeit                                                                                                | Kundenrolle | Cloud Temple Rolle |
|----------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Gewährleistung der Implementierung der **physischen Rechenzentren**                                       |             | __RA__             | 
| Gewährleistung der Implementierung der **Recheninfrastrukturen**                                          | __I__       | __RA__             | 
| Gewährleistung der Implementierung der **Speicherinfrastrukturen**                                        | __I__       | __RA__             | 
| Gewährleistung der Implementierung der Konnektivität zum **Backbone-Netzwerk(1)**                         | __I__       | __RA__             | 
| Erwerb und Wartung der wesentlichen Softwarelizenzen für den Betrieb der Cloud Temple Plattform           |             | __RA__             | 
| Implementierung der Grundkonfiguration Ihrer Cloud Temple Tenants                                         | __CI__      | __RA__             | 
| Implementierung der Ersteinrichtung des Backup-Dienstes                                                   | __CI__      | __RA__             |
| *Falls abonniert:* Implementierung der Netzwerkerstkonfiguration für Internet- und Firewall-Dienste       | __CI__      | __RA__             |
| Bereitstellung der erforderlichen Unterstützung für die Einführung Ihrer Cloud Temple Umgebung            | __I__       | __RA__             | 
| Vornahme der endgültigen Konfigurationsanpassungen des Dienstes nach seiner Bereitstellung                 | __RA__      | __C__              | 
| Konfiguration eines externen Authentifizierungs-Repositorys für die Cloud Temple Konsole                   | __RA__      | __C__              | 
| Erstellung der Benutzer jedes Tenants in der Cloud Temple Konsole und Zuweisung der Rechte                 | __RA__      |                    | 
| Validierung der Konformität der gelieferten Plattform mit dem SecNumCloud-Referenzrahmen                   | __I__       | __RA__             |
| Validierung der Konformität der gelieferten Plattform mit den erforderlichen Spezifikationen               | __RA__      | __CI__             |

*(1) Das Backbone-Netzwerk bildet die zentrale Infrastruktur von Cloud Temple, auf der die spezifischen Kundennetzwerke aufbauen, die in diese Hauptinfrastruktur integriert und unterstützt werden.*

## Integration Ihres Informationssystems in Ihre Cloud Temple Umgebung

| Tätigkeit                                                                                                         | Kundenrolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Erstellung, Installation, Aktualisierung Ihrer virtuellen Maschinen                                               | __RA__      |                    | 
| Installation und Konfiguration der Software und Middleware auf Ihren virtuellen Maschinen                        | __RA__      |                    | 
| Erwerb und Besitz der Lizenzen und Nutzungsrechte <br/>für die Betriebssysteme Ihrer virtuellen Maschinen        | __RA__      |                    | 
| Konfiguration des Netzwerks für jede Ihrer virtuellen Maschinen                                                   | __RA__      |                    |
| Sicherstellung, dass jede virtuelle Maschine mit einem kohärenten Backup-Plan assoziiert ist                      | __RA__      | __C__              | 
| Sicherstellung, dass jede virtuelle Maschine mit einem <br/>kohärenten Wiederherstellungs- oder Fortführungsplan assoziiert ist | __RA__      | __C__              | 
| Implementierung einer Antivirenschutzstrategie auf Ihren virtuellen Maschinen                                     | __RA__      |                    | 
| Implementierung einer Metrologie- und Überwachungslösung auf Ihren virtuellen Maschinen                           | __RA__      |                    | 
| Definition der TAG-Politik Ihrer virtuellen Maschinen                                                             | __RA__      |                    |

## Wiederkehrende Operationen

### Zugangs- und Identitätsmanagement

| Tätigkeit                                                                                                                             | Kundenrolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------------------------------------------------------------- |-------------|--------------------|
| Sicherstellung der Zugänglichkeit des Cloud Temple Konsolendienstes und der zugehörigen API                                          |             | __RA__             |
| Sicherstellung der Zugänglichkeit des Informationssystems, das auf Ihren virtuellen Maschinen bereitgestellt ist                         | __RA__      |                    |
| Verwaltung der physischen und logischen Zugangsberechtigungen der Cloud Temple Teams zu den SecNumCloud Infrastrukturen              |             | __RA__             |
| Verwaltung der Zugänge und der zugehörigen Sicherheitspolitik im Zusammenhang mit der Cloud Temple Konsolenschnittstelle und ihrer API  | __RA__      |                    |
| Verwaltung der Zugänge und der zugehörigen Sicherheitspolitik für das Informationssystem<br/>, das innerhalb Ihrer Cloud Temple Tenants gehostet wird | __RA__      |                    |

### Sicherstellung des Betriebszustands und der Sicherheit

Die Aktivitäten zur Sicherstellung des Betriebszustands und der Sicherheit der Infrastrukturen und Dienste, die von Cloud Temple im Rahmen seines IaaS-Angebots bereitgestellt werden, erfolgen im Hinblick auf die Konformität mit der SecNumCloud-Qualifikation.

| Tätigkeit                                                                                                         | Kundenrolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellung des Betriebszustands der **physischen Rechenzentren**                                              | __I__       | __RA__             | 
| Sicherstellung der Betriebssicherheit für die **physischen Rechenzentren**                                         | __I__       | __RA__             | 
| Sicherstellung des Betriebszustands der **Recheninfrastrukturen**                                                  | __I__       | __RA__             | 
| Sicherstellung der Betriebssicherheit der **Recheninfrastrukturen (2)**                                            | __RA__      | __CI__             | 
| Sicherstellung des Betriebszustands der **Speicherinfrastrukturen**                                                | __I__       | __RA__             | 
| Sicherstellung der Betriebssicherheit der **Speicherinfrastrukturen**                                              | __I__       | __RA__             | 
| Sicherstellung des Betriebszustands der **Backbone-Netzwerkinfrastrukturen**                                       | __I__       | __RA__             | 
| Sicherstellung der Betriebssicherheit der **Backbone-Netzwerkinfrastrukturen**                                      | __I__       | __RA__             |
| Sicherstellung des Betriebszustands der in den Kundentenants bereitgestellten virtuellen Maschinen **(3)**         | __RA__      |                    |
| Sicherstellung der Betriebssicherheit der in den Kundentenants bereitgestellten virtuellen Maschinen **(3)**       | __RA__      |                    |

| Assurer le maintien en condition opérationnelle des middleswares déployées dans les tenants client                | __RA__      |                   |
| Assurer le maintien en condition de sécurité des middleswares déployées dans les tenants client                   | __RA__      |                   |

*(2) Cloud Temple liefert regelmäßig die neuesten Versionen des Betriebssystems für Ihre Hypervisoren. 
Dennoch, da Cloud Temple nicht über die Spezifika Ihrer Produktionsumgebungen und die Anforderungen 
an Ihre Workloads informiert ist, __liegt die Entscheidung, das Betriebssystem Ihrer Hypervisoren zu aktualisieren, 
wodurch ein Neustart erforderlich wird, bei Ihnen__. Dieser Vorgang kann über die Cloud Temple-Konsole oder die API durchgeführt werden.
Professionelle Dienstleistungen stehen zur Verfügung, wenn Sie möchten, dass Cloud Temple bestimmte Vorgänge übernimmt.*

*(3) Cloud Temple bietet Lizenzpakete für Firewalls (Fortinet, Stormshield) und Load Balancer (HAProxy) an und 
arbeitet mit Ihren Teams während der Implementierungsphase an der Erstkonfiguration. Allerdings 
liegt die Verantwortung für die Betriebs- und Sicherheitserhaltung während der laufenden Betriebsphase bei Ihnen. 
Professionelle Dienstleistungen stehen zur Verfügung, wenn Sie möchten, dass Cloud Temple bestimmte Aufgaben übernimmt.*

### Verwaltung von Änderungen, Vorfällen, Problemen und Kapazitäten

| Aktivität                                                                                                              | Kundenrolle | Cloud Temple Rolle |
|-----------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Verwalten von Vorfällen in **physischen Rechenzentrumsinfrastrukturen**                                                | __I__       | __RA__              |
| Verwalten von Problemen in **physischen Rechenzentrumsinfrastrukturen**                                                |             | __RA__              |
| Verwalten von Kapazitäten in **physischen Rechenzentrumsinfrastrukturen**                                              |             | __RA__              |
| Verwalten von Vorfällen in **Berechnungsinfrastrukturen**                                                              | __I__       | __RA__              |
| Verwalten von Problemen in **Berechnungsinfrastrukturen**                                                              |             | __RA__              |
| Verwalten von Kapazitäten in **Berechnungsinfrastrukturen**                                                            | __RA__      | __CI__              |
| Verwalten von Vorfällen in **Speicherinfrastrukturen**                                                                 | __I__       | __RA__              |
| Verwalten von Problemen in **Speicherinfrastrukturen**                                                                 |             | __RA__              |
| Verwalten von Kapazitäten in **Speicherinfrastrukturen**                                                               | __RA__      | __CI__              |
| Verwalten von Vorfällen in **Backbone-Netzwerkinfrastrukturen**                                                        | __I__       | __RA__              |
| Verwalten von Problemen in **Backbone-Netzwerkinfrastrukturen**                                                        |             | __RA__              |
| Verwalten von Kapazitäten in **Backbone-Netzwerkinfrastrukturen**                                                      |             | __RA__              |
| Erstellen einer neuen virtuellen Maschine oder einer neuen Anwendungsumgebung innerhalb eines Kunden-Tenants          | __RA__      |                     |
| Ändern der Konfiguration der bereitgestellten virtuellen Maschinen                                                     | __RA__      |                     |
| Löschen einer bereitgestellten virtuellen Maschine                                                                     | __RA__      |                     |
| Entscheidung, Ressourcen auf der Cloud Temple-Plattform hinzuzufügen, zu ändern oder zu entfernen                      | __RA__      | __CI__              |
| Entscheidung zur Ressourcenänderung auf der Cloud Temple-Plattform umsetzen                                            | __I__       | __RA__              |
| Anwendung von Tags auf virtuelle Maschinen gemäß der definierten Richtlinie                                            | __RA__      |                     |

### Leistungsverwaltung

| Aktivität                                                                                                                                              | Kundenrolle | Cloud Temple Rolle |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Überwachung des ordnungsgemäßen Betriebs und der Zuverlässigkeit aller an der Leistung des qualifizierten SecNumCloud-Dienstes beteiligten Geräte       | __I__       | __RA__              |
| Verfolgen der Leistung der zur Verfügung gestellten physischen Berechnungs-, Speicher- und Netzwerkinfrastrukturen für Ihre Tenants __(4)__             | __RI__      | __A__               |
| Überwachung der Leistung der virtuellen Maschinen, die Ihre Umgebungen unterstützen                                                                    | __RA__      | __I__               |

*(4) Die Cloud Temple-Plattform verfolgt eine Philosophie, die sich auf __die Bereitstellung dedizierter Infrastrukturen__ für die Bedürfnisse von __Berechnungen__ (mit physischen Blades), __Speicher__ (über dedizierte LUNs auf SANs) und __Netzwerk__ (einschließlich Firewalls und Load Balancern) konzentriert. Diese dedizierten Ressourcen werden dem Kunden zur Verfügung gestellt, dessen Nutzung und resultierende Belastung direkt von ihrer Verwendung abhängen. Es liegt daher in der Verantwortung des Kunden, die notwendigen Überwachungs- und Messsysteme zu installieren und zu verwalten, um die optimale Funktionsweise seines Informationssystems zu gewährleisten.*

### Verwaltung von Backup und Wiederanlauf auf integrierten Backups

| Aktivität                                                                                                                                  | Kundenrolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Aufrechterhaltung der Betriebsbereitschaft auf den in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen** **(5)**            |             | __RA__              |
| Aufrechterhaltung der Sicherheitsbedingungen auf den in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen**                   | __I__       | __RA__              |
| Vorfallsmanagement auf den in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen**                                            | __I__       | __RA__              |
| Problemmanagement auf den in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen**                                             |             | __RA__              |
| Kapazitätsmanagement auf den in die Cloud Temple-Plattform integrierten **Backup-Infrastrukturen**                                          | __AI__      | __RC__              |
| Aufrechterhaltung der Betriebsbereitschaft auf der vom Kunden innerhalb seiner Tenants gewählten Backup-Lösung **(6)**                      | __RA__      |                     |
| Aufrechterhaltung der Sicherheitsbedingungen auf der vom Kunden innerhalb seiner Tenants gewählten Backup-Lösung                           | __RA__      |                     |
| Vorfallsmanagement auf der vom Kunden innerhalb seiner Tenants gewählten Backup-Lösung                                                     | __RA__      |                     |
| Problemmanagement auf der vom Kunden innerhalb seiner Tenants gewählten Backup-Lösung                                                      | __RA__      |                     |
| Kapazitätsmanagement auf der vom Kunden innerhalb seiner Tenants gewählten Backup-Lösung                                                   | __RA__      | __CI__              |
| Lebenszyklusverwaltung der Backup-Strategien                                                                                               | __RA__      |                     |
| Sicherstellen, dass die Backup-Strategien mit dem Lebenszyklus der Daten im Einklang stehen                                                 | __RA__      |                     |
| Sicherstellen, dass die Notfall- oder Wiederanlaufpläne mit dem Lebenszyklus der Daten im Einklang stehen                                  | __RA__      |                     |
| Regelmäßige Tests zur Bewertung der Wirksamkeit der Backup-Strategie                                                                       | __RA__      |                     |
| Regelmäßige Tests zur Bewertung der Wirksamkeit der Wiederanlauf- oder Notfallstrategie                                                    | __RA__      | __CI__              |

*(5) Ab dem 1. Januar 2024 ist die in die Cloud Temple-Plattform integrierte Backup-Lösung IBM Spectrum Protect Plus. 
Diese Lösung ist vollständig automatisiert und kann über die Cloud Temple-Konsole oder die Cloud Temple-API verwaltet werden.*

### Verwaltung von Backup und Wiederanlauf für Drittanbieterplattformen innerhalb eines Kunden-Tenants

| Aktivität                                                                                                                                  | Kundenrolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellung des Betriebs der gewählten Backup-Lösung innerhalb der Mandanten des Kunden **(6)**                                         | __RA__      |                   |
| Sicherstellung der Sicherheit der gewählten Backup-Lösung innerhalb der Mandanten des Kunden                                              | __RA__      |                   |
| Management von Vorfällen bei der gewählten Backup-Lösung innerhalb der Mandanten des Kunden                                                | __RA__      |                   |
| Management von Problemen bei der gewählten Backup-Lösung innerhalb der Mandanten des Kunden                                                | __RA__      |                   |
| Management der Kapazitäten der gewählten Backup-Lösung innerhalb der Mandanten des Kunden                                                  | __RA__      | __CI__            |
| Management des Lebenszyklus der Backup-Richtlinien                                                                                        | __RA__      |                   |
| Sicherstellen, dass die Backup-Richtlinien mit dem Lebenszyklus der Daten konsistent sind                                                  | __RA__      |                   |
| Sicherstellen, dass die Notfall- und Wiederherstellungspläne mit dem Lebenszyklus der Daten konsistent sind                                | __RA__      |                   |
| Durchführung regelmäßiger Tests zur Bewertung der Effektivität der Backup-Strategie                                                       | __RA__      |                   |
| Durchführung regelmäßiger Tests zur Bewertung der Effektivität der Notfall- und Wiederherstellungsstrategien                              | __RA__      | __CI__            |

*(6) Dies betrifft jede zusätzliche Backup-Lösung, die in den Umgebungen des Kunden implementiert und von ihm verwaltet wird. 
Cloud Temple bietet professionelle Dienste für diejenigen, die bestimmte Operationen an Cloud Temple delegieren möchten.* 

### Dokumentations- und Vertragsmanagement

| Aktivität                                                                                                                                                        | Kundenrolle | Rollen Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|----------------------|
| Sicherstellung des kommerziellen und vertraglichen Managements des Kunden, einschließlich Angebotserstellung, Auftragsabwicklung und Rechnungsmanagement         | __I__       | __RA__               |
| Sicherstellung der vertraglichen Nachverfolgung des Dienstes, einschließlich Angebotsvalidierung, Lieferverfolgung und Rechnungsüberwachung                      | __RA__      | __I__                |
| Sicherstellung der Wartung und Verfügbarkeit der von Cloud Temple bereitgestellten Ressourceninventare im Zusammenhang mit dem Angebot SecNumCloud               | __I__       | __RA__               |
| Sicherstellung der Wartung und Bereitstellung der technischen Dokumentation im Zusammenhang mit dem Angebot SecNumCloud                                           | __I__       | __RA__               |
| Nachverfolgung des Lebenszyklus der in Ihrer Cloud Temple Umgebung bereitgestellten virtuellen Maschinen<br/> über Ihre CMDB (Configuration Management Database)  | __RA__      |                      |
| Aktualisierung der Zugriffspolitik auf die Cloud Temple Konsole oder API                                                                                         | __RA__      |                      |

### Log-Management

| Aktivität                                                                                                                 | Kundenrolle | Rollen Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------|-------------|----------------------|
| Speicherung und Bereitstellung der Logs der Cloud Temple IaaS-Plattform **(7)**                                            |             | __RA__               |
| Speicherung und Bereitstellung der Logs des in Ihren Cloud Temple Mandaten gehosteten Informationssystems                 | __RA__      |                      |

*(7) Ab dem 1. Januar 2024 beträgt die Aufbewahrungsdauer der Plattform-Logs ein Jahr.*

## Netzwerkanbindung zum Kunden (mpls, dedizierte Faser, ipsec, ...)

| Aktivität                                                                                             | Kundenrolle | Rollen Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|----------------------|
| Abonnieren einer Netzwerkanbindung beim Netzbetreiber für den Zugang zu einem Cloud Temple Rechenzentrum (8)     | __RA__      | __CI__               |
| Management der IP-Adressplanung                                                                         | __RA__      | __I__                |
| Management von Vorfällen bei den Netzoperatorverbindungen des Kunden                                   | __RA__      |                      |
| Management von Problemen bei den Netzoperatorverbindungen des Kunden                                   | __RA__      | __CI__               |
| Management der Kapazitäten bei den Netzoperatorverbindungen des Kunden                                 | __RA__      | __CI__               |

*(8) Cloud Temple übernimmt die Verantwortung für das Netzwerk, was seine Backbone-Infrastruktur, seine Sammelpunkte sowie die Interconnection-Punkte des Rechenzentrums umfasst, und garantiert so die Konnektivität zwischen diesen Punkten und seinem Backbone-Netzwerk. 
Im Angebot zur physischen Colocation übernimmt Cloud Temple die Verantwortung ab der obersten Rachebene, auch bekannt als "top of rack".*

## Reversibilität

| Aktivität                                                                                                                                                                                  | Kundenrolle | Rollen Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|----------------------|
| Planung des Reversibilitätsprojekts und Auswahl der Zielinfrastrukturen                                                                                                                     | __RA__      | __I__                |
| Durchführung der Übergangsoperationen, ob diese nun eine manuelle Extraktion, die Nutzung von APIs <br/>oder jede andere mit der Cloud Temple Plattform kompatible Methode beinhalten       | __RA__      | __I__                |
| Übertragung der Daten unter Kontrolle der Migrationseinflüsse auf die Servicequalität des<br/> Informationssystems des Kunden                                                              | __RA__      |                      |
| Abbau der Konfigurationen des privaten Clouds und der mit dem Kunden verbundenen Optionen <br/>nach Kündigung des Vertrages                                                               | __I__       | __RA__               |
| Sichere Löschung der Daten auf den Speichermedien und Bereitstellung eines Löschzertifikats                                                                                                 | __I__       | __RA__               |