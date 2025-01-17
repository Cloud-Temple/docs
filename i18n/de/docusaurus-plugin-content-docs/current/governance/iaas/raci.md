---
title: Matrice de responsabilité IaaS
---

Voici le modèle **RACI** définissant la répartition des responsabilités entre le client et Cloud Temple pour l'utilisation des infrastructures IaaS de Cloud Temple.

## Définition des différents rôles

Nous rappelons ici les différents rôles du RACI :

| Rôle         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Réalise  | __R__ealisiert den Prozess                                                            |
| (A) Approuve | __A__bgenickt die Durchführung des Prozesses                                          |
| (C) Consulte | __K__onsultiert während des Prozesses                                                 |
| (I) Informé  | __I__nformiert über die Ergebnisse des Prozesses (über das Tool, das Portal oder die Nachrichten) |

## Définition votre besoin

| Activité                                                                                       | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Définir l'architecture globale de votre plateforme Cloud Temple                                | __RA__      | __CI__            | 
| Définir le nombre de tenants et le nombre de zone de disponibilité pour chaque tenant          | __RA__      | __CI__            | 
| Définir votre stratégie globale de reprise ou de continuité d'activité                         | __RA__      | __CI__            | 
| Dimensionner correctement votre plateforme Cloud Temple (calcul, stockage, réseau, backup,...) | __RA__      | __CI__            | 
| Souscrire aux services avec les informations nécessaires                                       | __RA__      | __I__             | 

## Mise en œuvre initiale de vos tenants Cloud Temple

| Activité                                                                                                     | Rôle Client | Rôle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer la mise en oeuvre des **datacenters physiques**                                                      |             | __RA__            | 
| Assurer la mise en oeuvre des infrastructures **calcul**                                                     | __I__       | __RA__            | 
| Assurer la mise en oeuvre des infrastructures **stockage**                                                   | __I__       | __RA__            | 
| Assurer la mise en oeuvre de la connectivité au **réseau backbone(1)**                                       | __I__       | __RA__            | 
| Acquérir et maintenir les licences logiciels essentiels pour le fonctionnement de la plateforme Cloud Temple |             | __RA__            | 
| Implémenter la configuration de base de vos tenants Cloud Temple                                             | __CI__      | __RA__            | 
| Implémenter la configuration initiale pour le service de sauvegarde                                          | __CI__      | __RA__            |
| *S'ils sont souscrit :* implémenter la configuration réseau initiale pour les services Internet et Firewall  | __CI__      | __RA__            |
| Offrir l'assistance requise pour la prise en main de vos environnements Cloud Temple                         | __I__       | __RA__            | 
| Effectuer les ajustements de configuration finaux du service après sa livraison                              | __RA__      | __C__             | 
| Configurer un référentiel d'authentification externe pour la console Cloud Temple                            | __RA__      | __C__             | 
| Créer les utilisateurs de chaque tenant dans la console Cloud Temple et affecter les droits                  | __RA__      |                   | 
| Valider la conformité de la plateforme livrée avec le référentiel SecNumCloud                                | __I__       | __RA__            |
| Valider la conformité de la plateforme livrée avec les spécifications requises                               | __RA__      | __CI__            |

*(1) Le réseau backbone constitue l'infrastructure centrale de Cloud Temple, offrant une colonne vertébrale sur laquelle 
reposent les réseaux clients spécifiques, lesquels sont intégrés et pris en charge par cette infrastructure principale.*

## Intégrer votre système d'information dans vos environnements Cloud Temple

| Activité                                                                                                                      | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Créer, installer, mettre à jour vos machines virtuelles                                                                       | __RA__      |                   | 
| Installer et configurer les logiciels et middlewares sur vos machines virtuelles                                              | __RA__      |                   | 
| Acheter et détenir les licences et les droits d'utilisation <br/>pour les systèmes d'exploitation de vos machines virtuelles  | __RA__      |                   | 
| Configurer le réseau pour chacune vos machines virtuelles                                                                     | __RA__      |                   |
| S'assurer que chaque machine virtuelle est associée à un plan de sauvegarde cohérent                                          | __RA__      | __C__             | 
| S'assurer que chaque machine virtuelle est associée à un <br/>plan de reprise d'activité ou de continuité d'activité cohérent | __RA__      | __C__             | 
| Implémenter une stratégie de protection antivirale sur vos machines virtuelles                                                | __RA__      |                   | 
| Mettre en place une solution de métrologie et de surveillance sur vos machines virtuelles                                     | __RA__      |                   | 
| Définir la politique de TAG de vos machines virtuelles                                                                        | __RA__      |                   | 

## Opérations récurrentes

### Gestion des accès et des identités

| Activité                                                                                                                             | Rôle Client | Rôle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer l'accessibilité du service Console Cloud Temple et de l'API associée                                                         |             | __RA__            |
| Assurer l'accessibilité du système d'information déployé sur vos machines virtuelles                                                 | __RA__      |                   |
| Gérer les habilitations physiques et logiques des équipes Cloud Temple aux infrastructures SecNumCloud.                              |             | __RA__            |
| Administrer les accès et la politique de sécurité associée liés à l'interface de la console Cloud Temple et à son API                | __RA__      |                   |
| Administrer les accès et la politique de sécurité associée au système d'information<br/> hébergé au sein de vos tenants Cloud Temple | __RA__      |                   |

### maintien en condition opérationnelle et en condition de sécurité

Les activités visant à maintenir en condition opérationnelle et sécuritaire pour les infrastructures et services 
proposés par Cloud Temple, dans le cadre de son offre IaaS, sont réalisées dans l'objectif de conformité à la qualification SecNumCloud.

| Activité                                                                                                          | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer le maintien en condition opérationnelle des infrastructures **datacenters physiques**                     | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité des infrastructures **datacenters physiques**                        | __I__       | __RA__            | 
| Assurer le maintien en condition opérationnelle des infrastructures **calcul**                                    | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité des infrastructures **calcul (2)**                                   | __RA__      | __CI__            | 
| Assurer le maintien en condition opérationnelle des infrastructures **stockage**                                  | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité des infrastructures **stockage**                                     | __I__       | __RA__            | 
| Assurer le maintien en condition opérationnelle des infrastructures **réseaux backbone**                          | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité des infrastructures **réseaux backbone**                             | __I__       | __RA__            |
| Assurer le maintien en condition opérationnelle des machines virtuelles déployées dans les tenants client **(3)** | __RA__      |                   |
| Assurer le maintien en condition de sécurité des machines virtuelles déployées dans les tenants client **(3)**    | __RA__      |                   |
| Sicherstellen der Betriebsbereitschaft der eingesetzten Middleware in den Kunden-Tenants              | __RA__      |                   |
| Sicherstellen der Sicherheitsbedingungen der eingesetzten Middleware in den Kunden-Tenants            | __RA__      |                   |

*(2) Cloud Temple stellt regelmäßig die neuesten Versionen des Betriebssystems für Ihre Hypervisoren bereit. 
Da Cloud Temple jedoch nicht über die spezifischen Anforderungen Ihrer Produktionsumgebungen und Arbeitslasten informiert ist, obliegt __die Entscheidung zur Aktualisierung des Betriebssystems Ihrer Hypervisoren, was einen Neustart zur Folge hätte, Ihnen__. Dieser Vorgang kann über die Cloud Temple-Konsole oder die API durchgeführt werden.
Professionelle Dienstleistungen stehen zur Verfügung, falls Sie wünschen, dass Cloud Temple einige Vorgänge übernimmt.*

*(3) Cloud Temple bietet Lizenzpakete für Firewalls (Fortinet, Stormshield) und Load Balancer (HAProxy) an und arbeitet beim erstmaligen Setup während der Implementierungsphase mit Ihrem Team zusammen. Während der aktuellen Betriebsphase liegt die Verantwortung für die Betriebs- und Sicherheitsbedingungen jedoch bei Ihnen. Professionelle Dienstleistungen stehen zur Verfügung, falls Sie wünschen, dass Cloud Temple einige Vorgänge übernimmt.*

### Verwaltung von Änderungen, Zwischenfällen, Problemen und Kapazitäten

| Aktivität                                                                                                              | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Verwaltung von Zwischenfällen in **physischen Datacenter-Infrastrukturen**                                             | __I__       | __RA__             |
| Verwaltung von Problemen in **physischen Datacenter-Infrastrukturen**                                                  |             | __RA__             |
| Verwaltung von Kapazitäten in **physischen Datacenter-Infrastrukturen**                                                |             | __RA__             |
| Verwaltung von Zwischenfällen in **Compute-Infrastrukturen**                                                           | __I__       | __RA__             |
| Verwaltung von Problemen in **Compute-Infrastrukturen**                                                                |             | __RA__             |
| Verwaltung von Kapazitäten in **Compute-Infrastrukturen**                                                              | __RA__      | __CI__             |
| Verwaltung von Zwischenfällen in **Storage-Infrastrukturen**                                                           | __I__       | __RA__             |
| Verwaltung von Problemen in **Storage-Infrastrukturen**                                                                |             | __RA__             |
| Verwaltung von Kapazitäten in **Storage-Infrastrukturen**                                                              | __RA__      | __CI__             |
| Verwaltung von Zwischenfällen in **Netzwerk-Backbone-Infrastrukturen**                                                 | __I__       | __RA__             |
| Verwaltung von Problemen in **Netzwerk-Backbone-Infrastrukturen**                                                      |             | __RA__             |
| Verwaltung von Kapazitäten in **Netzwerk-Backbone-Infrastrukturen**                                                    |             | __RA__             |
| Einrichten einer neuen virtuellen Maschine oder Erstellen einer neuen Anwendungsumgebung innerhalb eines Kunden-Tenants | __RA__      |                    |
| Ändern der Konfiguration der bereitgestellten virtuellen Maschinen                                                     | __RA__      |                    |
| Löschen einer bereitgestellten virtuellen Maschine                                                                     | __RA__      |                    |
| Entscheidung über das Hinzufügen, Ändern oder Entfernen von Ressourcen auf der Cloud Temple-Plattform                  | __RA__      | __CI__             |
| Durchführung der Entscheidung zur Ressourcenerweiterung auf der Cloud Temple-Plattform                                 | __I__       | __RA__             |
| Anwenden von Tags auf virtuelle Maschinen gemäß der festgelegten Richtlinie                                            | __RA__      |                    |

### Leistungsverwaltung

| Aktivität                                                                                                                                              | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Überwachung der Funktionsfähigkeit und Zuverlässigkeit aller Geräte, die in die Bereitstellung des qualifizierten SecNumCloud-Dienstes involviert sind  | __I__       | __RA__             |
| Überwachung der Leistung der physischen Ressourcen für Compute, Storage und Netzwerk, die Ihren Tenants zur Verfügung gestellt werden __(4)__           | __RI__      | __A__              |
| Überwachung der Leistung der virtuellen Maschinen, die Ihre Umgebungen unterstützen                                                                    | __RA__      | __I__              |

*(4) Die Cloud Temple-Plattform verfolgt eine Philosophie der __Bereitstellung dedizierter Infrastrukturen__ für die Anforderungen an __Compute__ (mit physischen Blades), __Storage__ (mittels dedizierter LUNs auf SANs) 
und __Netzwerk__ (inklusive Firewalls und Load Balancer). Diese dedizierten Ressourcen stehen dem Kunden zur Verfügung, deren Nutzung und resultierende Belastung hängen direkt von dessen Verwendung ab. Daher obliegt es dem Kunden, die erforderlichen Überwachungs- und Messsysteme zu implementieren und zu verwalten, um die optimale Funktion seines Informationssystems zu gewährleisten.*

### Verwaltung von Sicherung und Wiederherstellung auf integrierter Sicherungsplattform

| Aktivität                                                                                                                 | Rolle Kunde | Rolle Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellen der Betriebsbereitschaft der **integrierten Sicherungsinfrastrukturen** der Cloud Temple-Plattform **(5)**  |             | __RA__             |
| Sicherstellen der Sicherheitsbedingungen der **integrierten Sicherungsinfrastrukturen** der Cloud Temple-Plattform        | __I__       | __RA__             |
| Verwaltung von Zwischenfällen in den **integrierten Sicherungsinfrastrukturen** der Cloud Temple-Plattform                | __I__       | __RA__             |
| Verwaltung von Problemen in den **integrierten Sicherungsinfrastrukturen** der Cloud Temple-Plattform                     |             | __RA__             |
| Verwaltung von Kapazitäten in den **integrierten Sicherungsinfrastrukturen** der Cloud Temple-Plattform                   | __AI__      | __RC__             |
| Sicherstellen der Betriebsbereitschaft der gewählten Sicherungslösung innerhalb seiner Tenants durch den Kunden **(6)**  | __RA__      |                    |
| Sicherstellen der Sicherheitsbedingungen der gewählten Sicherungslösung innerhalb seiner Tenants durch den Kunden        | __RA__      |                    |
| Verwaltung von Zwischenfällen in der gewählten Sicherungslösung innerhalb seiner Tenants durch den Kunden                | __RA__      |                    |
| Verwaltung von Problemen in der gewählten Sicherungslösung innerhalb seiner Tenants durch den Kunden                      | __RA__      |                    |
| Verwaltung von Kapazitäten in der gewählten Sicherungslösung innerhalb seiner Tenants durch den Kunden                    | __RA__      | __CI__             |
| Verwaltung des Lebenszyklus der Sicherungsrichtlinien                                                                     | __RA__      |                    |
| Sicherstellen der Konsistenz der Sicherungsrichtlinien mit dem Lebenszyklus der Daten                                      | __RA__      |                    |
| Sicherstellen, dass die Pläne zur Geschäftskontinuität oder Wiederherstellung mit dem Lebenszyklus der Daten konsistent sind| __RA__      |                    |
| Regelmäßige Tests zur Bewertung der Effektivität der Sicherungsstrategie                                                  | __RA__      |                    |
| Regelmäßige Tests zur Bewertung der Effektivität der Strategie<br/> zur Wiederherstellung oder Geschäftskontinuität       | __RA__      | __CI__             |

*(5) Ab dem 1. Januar 2024 ist die in die Cloud Temple-Plattform integrierte Sicherungslösung IBM Spectrum Protect Plus. 
Diese Lösung ist vollständig automatisiert und kann über die Cloud Temple-Konsole oder die Cloud Temple-API verwaltet werden.*

### Verwaltung von Sicherung und Wiederherstellung für Drittanbieterplattformen innerhalb eines Kunden-Tenants

| Aktivität                                                                                                                                   | Rolle Kunde | Rolle Cloud Temple |

|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen der Betriebsbereitschaft der gewählten Sicherungslösung innerhalb der Mandanten des Kunden **(6)**                          | __RA__      |                   |
| Sicherstellen der Sicherheit der gewählten Sicherungslösung innerhalb der Mandanten des Kunden                                            | __RA__      |                   |
| Verwaltung von Vorfällen mit der gewählten Sicherungslösung innerhalb der Mandanten des Kunden                                            | __RA__      |                   |
| Verwaltung von Problemen mit der gewählten Sicherungslösung innerhalb der Mandanten des Kunden                                            | __RA__      |                   |
| Kapazitätsmanagement der gewählten Sicherungslösung innerhalb der Mandanten des Kunden                                                    | __RA__      | __CI__            |
| Lebenszyklusmanagement der Backup-Politiken                                                                                               | __RA__      |                   |
| Sicherstellen, dass die Backup-Politiken mit dem Datenlebenszyklus übereinstimmen                                                         | __RA__      |                   |
| Sicherstellen, dass die Notfall- oder Wiederherstellungspläne mit dem Datenlebenszyklus übereinstimmen                                    | __RA__      |                   |
| Periodische Tests zur Bewertung der Wirksamkeit der Sicherungsstrategie durchführen                                                      | __RA__      |                   |
| Periodische Tests zur Bewertung der Wirksamkeit der <br/>Wiederherstellungs- oder Geschäftskontinuitätsstrategie durchführen             | __RA__      | __CI__            |

*(6) Dies betrifft jede zusätzliche Sicherungslösung, die in den Umgebungen des Kunden implementiert und vom Kunden verwaltet wird. 
Cloud Temple bietet professionelle Dienstleistungen für diejenigen an, die bestimmte Operationen an Cloud Temple delegieren möchten.*

### Dokumentations- und Vertragsmanagement

| Aktivität                                                                                                                                                  | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Sicherstellen des kommerziellen und vertraglichen Managements des Kunden, einschließlich der Erstellung von Angeboten, der Bearbeitung von Bestellungen und der Rechnungsstellung | __I__       | __RA__              |
| Sicherstellen der Vertragsverfolgung der Dienstleistung, einschließlich der Validierung von Angeboten, der Verfolgung von Lieferungen und der Überwachung der Rechnungsstellung  | __RA__      | __I__               |
| Sicherstellen der Wartung und Verfügbarkeit des von Cloud Temple bereitgestellten Ressourceninventars im Zusammenhang mit dem SecNumCloud-Angebot           | __I__       | __RA__              |
| Sicherstellen der Wartung und Bereitstellung technischer Dokumentationen im Zusammenhang mit dem SecNumCloud-Angebot                                       | __I__       | __RA__              |
| Verfolgen des Lebenszyklus der in Ihren Cloud Temple Umgebungen bereitgestellten virtuellen Maschinen <br/>über Ihre CMDB (Configuration Management Database) | __RA__      |                     |
| Aktualisieren der Zugriffspolitik auf die Cloud Temple Konsole oder die Cloud Temple API                                                                   | __RA__      |                     |

### Log-Management

| Aktivität                                                                                                              | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Speichern und Bereitstellen der Logs der Cloud Temple IaaS-Plattform **(7)**                                           |             | __RA__              |
| Speichern und Bereitstellen der Logs des Informationssystems, <br/>das in Ihren Cloud Temple Mandanten gehostet wird   | __RA__      |                     |

*(7) Ab dem 1. Januar 2024 beträgt die Aufbewahrungsdauer der Logs der Plattform ein Jahr.*

## Netzwerkkonnektivität (mpls, dedizierte Faser, ipsec, ...)

| Aktivität                                                                                     | Rolle Kunde | Rolle Cloud Temple |
|----------------------------------------------------------------------------------------------|-------------|---------------------|
| Abschluss einer Netzwerkkonnektivität über einen Anbieter, um auf ein physisches Cloud Temple Rechenzentrum zuzugreifen **(8)**  | __RA__      | __CI__              |
| Verwaltung des IP-Adressierungsplans                                                         | __RA__      | __I__               |
| Verwaltung von Vorfällen auf den Netzverbindungen des Kundenanbieters                         | __RA__      |                     |
| Verwaltung von Problemen auf den Netzverbindungen des Kundenanbieters                         | __RA__      | __CI__              |
| Kapazitätsmanagement der Netzverbindungen des Kundenanbieters                                 | __RA__      | __CI__              |

*(8) Cloud Temple übernimmt die Verantwortung für das Netzwerk im Backbone seiner Infrastruktur, seinen Sammelpunkten sowie den Interconnection-Punkten im Rechenzentrum und gewährleistet damit die Konnektivität zwischen diesen Punkten und seinem Backbone-Netzwerk. 
Beim Angebot von physischen Schrankunterbringung übernimmt Cloud Temple die Verantwortung ab der Ausrüstung oben im Rack, gemeinhin als "top of rack" bezeichnet.*

## Reversibilität

| Aktivität                                                                                                                                                             | Rolle Kunde | Rolle Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Planung des Reversibilitätsprojekts und Auswahl der Zielinfrastrukturen                                                                                              | __RA__      | __I__               |
| Durchführung der Übergangsoperationen, ob manuelle Extraktion, die Nutzung von APIs <br/>oder jede andere Drittanbietermethode, die mit der Cloud Temple-Plattform kompatibel ist | __RA__      | __I__               |
| Übertragen der Daten unter Kontrolle der Auswirkungen der Migration auf die Qualität der Dienstleistung, <br/>die vom Informationssystem des Kunden bereitgestellt wird | __RA__      |                     | 
| Durchführung der Demontage der Konfigurationen des privaten Clouds und der damit verbundenen Optionen <br/>des Kunden nach Vertragsbeendigung                        | __I__       | __RA__              |
| Sicheres Löschen der Daten auf Speicherträgern und Bereitstellung eines Zertifikats                                                                                   | __I__       | __RA__              |