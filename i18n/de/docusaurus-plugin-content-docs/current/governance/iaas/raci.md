---
title: IaaS-Verantwortlichkeitsmatrix
---


Hier ist das **RACI**-Modell, das die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der IaaS-Infrastrukturen von Cloud Temple definiert.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen des RACI-Modells:

| Rolle        | Beschreibung                                                                          |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realisiert| __R__ealisiert den Prozess                                                           |
| (A) Approbt   | __A__ppruvt die Durchführung des Prozesses                                           |
| (C) Konsultiert| __C__onsultiert während des Prozesses                                               |
| (I) Informiert| __I__nformiert über die Ergebnisse des Prozesses (über das Tool, das Portal oder die E-Mail) |

## Definition Ihres Bedarfs

| Aktivität                                                                                       | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|--------------------|
| Die gesamte Architektur Ihrer Cloud Temple-Plattform definieren                                | __RA__      | __CI__             |
| Die Anzahl der Tenants und die Anzahl der Verfügbarkeitszonen für jeden Tenant festlegen        | __RA__      | __CI__             |
| Ihre allgemeine Wiederherstellungs- oder Kontinuitätsstrategie festlegen                       | __RA__      | __CI__             |
| Ihre Cloud Temple-Plattform angemessen dimensionieren (Berechnung, Speicher, Netzwerk, Backup,...) | __RA__      | __CI__             |
| Die Dienstleistungen mit den erforderlichen Informationen abonnieren                           | __RA__      | __I__              |

## Erste Implementierung Ihrer Cloud Temple Tenants

| Aktivität                                                                                                     | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellung der Implementierung der **physischen Rechenzentren**                                           |             | __RA__             |
| Sicherstellung der Implementierung der **Berechnungsinfrastrukturen**                                         | __I__       | __RA__             |
| Sicherstellung der Implementierung der **Speicherinfrastrukturen**                                            | __I__       | __RA__             |
| Sicherstellung der Konnektivität zum **Backbone-Netzwerk(1)**                                                 | __I__       | __RA__             |
| Erwerb und Wartung der notwendigen Softwarelizenzen für den Betrieb der Cloud Temple-Plattform                |             | __RA__             |
| Implementierung der Grundeinstellungen Ihrer Cloud Temple Tenants                                             | __CI__      | __RA__             |
| Implementierung der initialen Konfiguration für den Backup-Service                                            | __CI__      | __RA__             |
| *Falls abonniert:* Implementierung der initialen Netzwerkkonfiguration für Internet- und Firewall-Dienste     | __CI__      | __RA__             |
| Bereitstellung der erforderlichen Unterstützung für die Handhabung Ihrer Cloud Temple-Umgebung                | __I__       | __RA__             |
| Durchführung der finalen Konfigurationsanpassungen des Dienstes nach Lieferung                                | __RA__      | __C__              |
| Konfiguration eines externen Authentifizierungsverzeichnisses für die Cloud Temple-Konsole                    | __RA__      | __C__              |
| Erstellung der Benutzer für jeden Tenant in der Cloud Temple-Konsole und Zuweisung der Rechte                 | __RA__      |                    |
| Validierung der Übereinstimmung der gelieferten Plattform mit dem SecNumCloud-Referenz                        | __I__       | __RA__             |
| Validierung der Übereinstimmung der gelieferten Plattform mit den erforderlichen Spezifikationen            | __RA__      | __CI__             |

*(1) Das Backbone-Netzwerk ist die zentrale Infrastruktur von Cloud Temple, die eine Nabe bildet, auf der die spezifischen Kundennetzwerke basieren, die von dieser Hauptinfrastruktur integriert und unterstützt werden.*

## Integration Ihres Informationssystems in Ihre Cloud Temple-Umgebung

| Aktivität                                                                                                                      | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Erstellung, Installation und Aktualisierung Ihrer virtuellen Maschinen                                                       | __RA__      |                    |
| Installation und Konfiguration der Software und Middleware auf Ihren virtuellen Maschinen                                     | __RA__      |                    |
| Erwerb und Besitz der Lizenzen und Nutzungsrechte<br/> für die Betriebssysteme Ihrer virtuellen Maschinen                     | __RA__      |                    |
| Netzwerkkonfiguration für jede Ihrer virtuellen Maschinen                                                                     | __RA__      |                    |
| Sicherstellung, dass jede virtuelle Maschine einem konsistenten Backup-Plan zugeordnet ist                                    | __RA__      | __C__              |
| Sicherstellung, dass jede virtuelle Maschine einem<br/>Business-Continuity- oder Disaster-Recovery-Plan zugeordnet ist        | __RA__      | __C__              |
| Implementierung einer Antivirenschutzstrategie auf Ihren virtuellen Maschinen                                                | __RA__      |                    |
| Einrichtung einer Mess- und Überwachungslösung auf Ihren virtuellen Maschinen                                                | __RA__      |                    |
| Festlegung der TAG-Politik für Ihre virtuellen Maschinen                                                                     | __RA__      |                    |

## Wiederkehrende Aufgaben

### Verwaltung von Zugängen und Identitäten

| Aktivität                                                                                                                             | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Zugänglichkeit des Cloud Temple-Konsole und der zugehörigen API sicherstellen                                                         |             | __RA__             |
| Zugänglichkeit des auf Ihren virtuellen Maschinen bereitgestellten Informationssystems sicherstellen                                 | __RA__      |                    |
| Verwaltung der physischen und logischen Zugriffsberechtigungen des Cloud Temple-Teams auf die SecNumCloud-Infrastrukturen             |             | __RA__             |
| Verwaltung der Zugänge und der zugehörigen Sicherheitsrichtlinien zur Cloud Temple-Konsole und ihrer API                             | __RA__      |                    |
| Verwaltung der Zugänge und der zugehörigen Sicherheitsrichtlinien für das im Rahmen Ihrer Cloud Temple-Tenants gehostete Informationssystem | __RA__      |                    |

### Aufrechterhaltung des Betriebs- und Sicherheitszustands

Die Aktivitäten zur Aufrechterhaltung des Betriebs- und Sicherheitszustands der von Cloud Temple im Rahmen ihres IaaS-Angebots bereitgestellten Infrastrukturen und Dienste werden mit dem Ziel der Konformität mit der SecNumCloud-Qualifikation durchgeführt.

| Aktivität                                                                                                          | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellen der Funktionsfähigkeit der **physischen Rechenzentrum-Infrastrukturen**                             | __I__       | __RA__             |
| Sicherstellen der Sicherheit der **physischen Rechenzentrum-Infrastrukturen**                                      | __I__       | __RA__             |
| Sicherstellen der Funktionsfähigkeit der **Berechnungsinfrastrukturen**                                           | __I__       | __RA__             |
| Sicherstellen der Sicherheit der **Berechnungsinfrastrukturen (2)**                                               | __RA__      | __CI__             |
| Sicherstellen der Funktionsfähigkeit der **Speicherinfrastrukturen**                                               | __I__       | __RA__             |
| Sicherstellen der Sicherheit der **Speicherinfrastrukturen**                                                       | __I__       | __RA__             |
| Sicherstellen der Funktionsfähigkeit der **Backbone-Netzwerkinfrastrukturen**                                      | __I__       | __RA__             |
| Sicherstellen der Sicherheit der **Backbone-Netzwerkinfrastrukturen**                                              | __I__       | __RA__             |
| Sicherstellen der Funktionsfähigkeit der in den Tenant-Kunden **(3)** bereitgestellten virtuellen Maschinen      | __RA__      |                    |
| Sicherstellen der Sicherheit der in den Tenant-Kunden **(3)** bereitgestellten virtuellen Maschinen              | __RA__      |                    |
| Sicherstellen der Funktionsfähigkeit der innerhalb der Tenant-Kunden bereitgestellten Middleware                | __RA__      |                    |

| Sicherstellen der sicheren Betriebsbedingungen der eingesetzten Middleware in den Client-Tenants                   | __RA__      |                   |

*(2) Cloud Temple stellt regelmäßig die neuesten Betriebssystemversionen für Ihre Hypervisoren zur Verfügung. 
Da Cloud Temple jedoch nicht über die spezifischen Gegebenheiten Ihrer Produktionsumgebungen und die Anforderungen 
Ihrer Workloads informiert ist, __liegt die Entscheidung, das Betriebssystem Ihrer Hypervisoren zu aktualisieren,
wodurch ein Neustart erforderlich wird, bei Ihnen__. Diese Operation kann über die Cloud Temple Konsole oder über die API durchgeführt werden.
Professionelle Dienstleistungen sind verfügbar, wenn Sie möchten, dass Cloud Temple bestimmte Operationen übernimmt.*

*(3) Cloud Temple bietet Lizenzpakete für Firewalls (Fortinet, Stormshield) und Load Balancer (HAProxy) an und 
arbeitet während der Implementierungsphase mit Ihren Teams zusammen, um die Erstkonfiguration vorzunehmen. 
Die Verantwortung für den operativen und sicheren Betrieb liegt jedoch während der normalen Betriebsphase bei Ihnen.
Professionelle Dienstleistungen sind verfügbar, wenn Sie möchten, dass Cloud Temple bestimmte Operationen übernimmt.*

### Management von Änderungen, Vorfällen, Problemen und Kapazitäten

| Tätigkeit                                                                                                              | Kundenrolle | Rolle Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Verwaltung von Vorfällen in **physischen Rechenzentrumsinfrastrukturen**                                               | __I__       | __RA__              |
| Verwaltung von Problemen in **physischen Rechenzentrumsinfrastrukturen**                                               |             | __RA__              |
| Verwaltung von Kapazitäten in **physischen Rechenzentrumsinfrastrukturen**                                             |             | __RA__              |
| Verwaltung von Vorfällen in **Recheninfrastrukturen**                                                                  | __I__       | __RA__              |
| Verwaltung von Problemen in **Recheninfrastrukturen**                                                                  |             | __RA__              |
| Verwaltung von Kapazitäten in **Recheninfrastrukturen**                                                                | __RA__      | __CI__              |
| Verwaltung von Vorfällen in **Speicherinfrastrukturen**                                                                | __I__       | __RA__              |
| Verwaltung von Problemen in **Speicherinfrastrukturen**                                                                |             | __RA__              |
| Verwaltung von Kapazitäten in **Speicherinfrastrukturen**                                                              | __RA__      | __CI__              |
| Verwaltung von Vorfällen in **Backbone-Netzwerkinfrastrukturen**                                                       | __I__       | __RA__              |
| Verwaltung von Problemen in **Backbone-Netzwerkinfrastrukturen**                                                       |             | __RA__              |
| Verwaltung von Kapazitäten in **Backbone-Netzwerkinfrastrukturen**                                                     |             | __RA__              |
| Implementierung einer neuen virtuellen Maschine oder Erstellung einer neuen Anwendungsumgebung innerhalb eines Client-Tenants | __RA__      |                   |
| Änderung der Konfiguration der bereitgestellten virtuellen Maschinen                                                   | __RA__      |                   |
| Löschung einer bereitgestellten virtuellen Maschine                                                                    | __RA__      |                   |
| Entscheidung über die Hinzufügung, Änderung oder Entfernung von Ressourcen auf der Cloud Temple Plattform              | __RA__      | __CI__              |
| Ausführung der Entscheidung zur Änderung der Ressourcen auf der Cloud Temple Plattform                                | __I__       | __RA__              |
| Anwendung von Tags auf virtuelle Maschinen gemäß der festgelegten Richtlinie                                           | __RA__      |                   |

### Performance-Management

| Tätigkeit                                                                                                                                              | Kundenrolle | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Sicherstellung der Überwachung des ordnungsgemäßen Betriebs und der Zuverlässigkeit aller Geräte, die an der Erbringung des qualifizierten SecNumCloud-Dienstes beteiligt sind | __I__       | __RA__              |
| Überwachung der Performance der physischen Ressourcen für Rechner, Speicher und Netzwerk, die Ihren Tenants zur Verfügung gestellt werden __(4)__                  | __RI__      | __A__               |
| Überwachung der Performance der virtuellen Maschinen, die Ihre Umgebungen unterstützen                                                                      | __RA__      | __I__               |

*(4) Die Cloud Temple Plattform hat eine Philosophie, die auf __der Bereitstellung dedizierter Infrastrukturen__ für die Anforderungen von __Rechenkapazitäten__ (mit physischen Blades), __Speicher__ (über dedizierte LUNs auf SANs) und __Netzwerk__ (einschließlich Firewalls und Load Balancer) basiert. Diese dedizierten Ressourcen werden dem Kunden zur Verfügung gestellt, wobei die Nutzung und die daraus resultierende Belastung direkt von der Nutzung durch den Kunden abhängen. Es liegt daher in der Verantwortung des Kunden, die notwendigen Überwachungs- und Messsysteme zu implementieren und zu verwalten, um eine optimale Funktionsweise seines Informationssystems sicherzustellen.*

### Management des Backups und der Wiederherstellung auf der integrierten Backup-Lösung

| Tätigkeit                                                                                                                                  | Kundenrolle | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Sicherstellung der operativen Betriebsbedingungen für die **Backup-Infrastrukturen** auf der Cloud Temple Plattform **(5)**              |             | __RA__              |
| Sicherstellung der sicheren Betriebsbedingungen für die **Backup-Infrastrukturen** auf der Cloud Temple Plattform                         | __I__       | __RA__              |
| Verwaltung von Vorfällen in den **Backup-Infrastrukturen** auf der Cloud Temple Plattform                                                 | __I__       | __RA__              |
| Verwaltung von Problemen in den **Backup-Infrastrukturen** auf der Cloud Temple Plattform                                                 |             | __RA__              |
| Verwaltung von Kapazitäten in den **Backup-Infrastrukturen** auf der Cloud Temple Plattform                                               | __AI__      | __RC__              |
| Sicherstellung der operativen Betriebsbedingungen für die vom Kunden innerhalb seiner Tenants gewählte Backup-Lösung **(6)**              | __RA__      |                   |
| Sicherstellung der sicheren Betriebsbedingungen für die vom Kunden innerhalb seiner Tenants gewählte Backup-Lösung                        | __RA__      |                   |
| Verwaltung von Vorfällen in der vom Kunden innerhalb seiner Tenants gewählten Backup-Lösung                                                | __RA__      |                   |
| Verwaltung von Problemen in der vom Kunden innerhalb seiner Tenants gewählten Backup-Lösung                                                | __RA__      |                   |
| Verwaltung von Kapazitäten in der vom Kunden innerhalb seiner Tenants gewählten Backup-Lösung                                              | __RA__      | __CI__              |
| Management des Lebenszyklus der Backup-Richtlinien                                                                                        | __RA__      |                   |
| Sicherstellung, dass die Backup-Richtlinien kohärent mit dem Lebenszyklus der Daten sind                                                  | __RA__      |                   |
| Sicherstellung, dass die Business-Continuity- oder Disaster-Recovery-Pläne kohärent mit dem Lebenszyklus der Daten sind                   | __RA__      |                   |
| Durchführung regelmäßiger Tests zur Bewertung der Wirksamkeit der Backup-Strategie                                                        | __RA__      |                   |
| Durchführung regelmäßiger Tests zur Bewertung der Wirksamkeit der Strategie<br/>zur Wiederherstellung oder Business-Continuity            | __RA__      | __CI__              |

*(5) Ab dem 1. Januar 2024 ist die in der Cloud Temple Plattform integrierte Backup-Lösung IBM Spectrum Protect Plus. 
Diese Lösung ist vollständig automatisiert und kann über die Cloud Temple Konsole oder die Cloud Temple API verwaltet werden.*

### Management des Backups und der Wiederherstellung für externe Plattformen innerhalb eines Client-Tenants

| Tätigkeit                                                                                                                                  | Kundenrolle | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Assurer le maintien en condition opérationnelle sur la solution de sauvegarde choisie au sein de ses tenants par le client **(6)**       | __RA__      |                   |
| Assurer le maintien en condition de sécurité sur la solution de sauvegarde choisie au sein de ses tenants par le client                  | __RA__      |                   |
| Gérer les incidents sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | __RA__      |                   |
| Gérer les problèmes sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | __RA__      |                   |
| Gérer les capacités sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | __RA__      | __CI__            |
| Gérer le cycle des vies des politiques de sauvegarde                                                                                      | __RA__      |                   |
| S'assurer que les politiques de sauvegarde sont cohérentes avec le cycle de vie de la donnée                                              | __RA__      |                   |
| S'assurer que les plans de continuité d'activité ou de reprise d'activité sont cohérents avec le cycle de vie de la donnée                | __RA__      |                   |
| Effectuer des tests périodiques pour évaluer l'efficacité de la stratégie de sauvegarde                                                   | __RA__      |                   |
| Effectuer des tests périodiques pour évaluer l'efficacité de la stratégie<br/> de reprise d'activité ou de continuité d'activité          | __RA__      | __CI__            |

*(6) Ceci concerne toute solution de sauvegarde supplémentaire mise en place dans les environnements du client et gérée par celui-ci.
Cloud Temple propose des services professionnels pour ceux qui souhaitent déléguer certaines opérations à Cloud Temple.*

### Gestion de la documentation et du contrat

| Activité                                                                                                                                                        | Rôle Client | Rôle Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer la gestion commerciale et contractuelle du client, incluant l'établissement de devis, le traitement des commandes et la gestion de la facturation       | __I__       | __RA__            |
| Assurer le suivi contractuel de la prestation, incluant la validation des devis, le suivi des livraisons et la surveillance de la facturation                   | __RA__      | __I__             |
| Assurer la maintenance et la disponibilité de l'inventaire des ressources fournies par Cloud Temple relative à l'offre SecNumCloud                              | __I__       | __RA__            |
| Assurer la maintenance et la mise à disposition de la documentation technique relative à l'offre SecNumCloud                                                    | __I__       | __RA__            |
| Assurer le suivi du cycle de vie des machines virtuelles déployées dans vos environnements Cloud Temple<br/> via votre CMDB (Configuration Management Database) | __RA__      |                   |
| Maintenir à jour la politique d'accès à l'interface de la console Cloud Temple ou à l'API Cloud Temple                                                          | __RA__      |                   |

### Gestion des journaux

| Activité                                                                                                                 | Rôle Client | Rôle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Conserver et mettre à disposition les journaux de la plateforme IaaS Cloud Temple **(7)**                                |             | __RA__            |
| Conserver et mettre à disposition les journaux du système d'information<br/> hébergé au sein de vos tenants Cloud Temple | __RA__      |                   |

*(7) Au premier janvier 2024, la durée de rétention des journaux de la plateforme est d'une année.*

## Connectivité au réseau client (mpls, fibre dédiée, ipsec, ...)

| Activité                                                                                             | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Souscrire à une connectivité réseau opérateur pour accéder à un datacenter physique Cloud Temple (8) | __RA__      | __CI__            |
| Gérer le plan d'adressage IP                                                                         | __RA__      | __I__             |
| Gérer les incidents sur les liens réseaux opérateurs client                                          | __RA__      |                   |
| Gérer les problèmes sur les liens réseaux opérateurs client                                          | __RA__      | __CI__            |
| Gérer les capacités sur les liens réseaux opérateurs client                                          | __RA__      | __CI__            |

*(8) Cloud Temple assume la responsabilité du réseau concernant son infrastructure backbone, ses points de collecte ainsi que
les points d'interconnexion datacenter, garantissant ainsi la connectivité entre ces points et son réseau backbone.
Dans l'offre d'hébergement en baie physique, Cloud Temple assume la responsabilité à partir de l'équipement situé en haut du rack, communément appelé "top of rack".*

## Réversibilité

| Activité                                                                                                                                                                                       | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Planifier le projet de réversibilité et choisir les infrastructures cibles                                                                                                                     | __RA__      | __I__             |
| Mettre en oeuvre les opérations de transition, qu'elles impliquent une extraction manuelle, l'utilisation d'API <br/>ou toute autre méthode tierce compatible avec la plateforme Cloud Temple. | __RA__      | __I__             |
| Transférer les données tout en contrôlant les répercussions de la migration sur la qualité du service fourni <br/>par le système d'information du client.                                      | __RA__      |                   |
| Procéder au démantèlement des configurations du Cloud Privé et des options associées au client, <br/>à la suite de la résiliation du contrat.                                                  | __I__       | __RA__            |
| Réaliser l'effacement sécurisé des données sur les supports de stockage et fournir une attestation                                                                                             | __I__       | __RA__            |