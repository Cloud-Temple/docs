---
title: Modell der geteilten Verantwortung — VPC
slug: /contractual/network/raci-vpc
---

# Modell der geteilten Verantwortung — VPC (Virtual Private Cloud)

Dieses **RACI**-Modell definiert die Verteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für den **VPC (Virtual Private Cloud)**-Dienst.

> **Besonderheiten des VPC-Dienstes**  
> Der VPC ist ein **vollständig von Cloud Temple verwalteter** Netzwerkdienst mit einer cloud-nativen Erfahrung: automatisches Routing, integrierte Hochverfügbarkeit und natives IPAM/DHCP-Management. Cloud Temple garantiert den Betrieb und die Verfügbarkeit der zugrunde liegenden Netzwerkinfrastruktur (VPC-Router, Inter-AZ-Backbone, externe Gateway). Der Kunde ist für das Design, die Konfiguration und die Sicherheit seines Netzwerkraums verantwortlich: Subnetze, Adressierung, Filterrichtlinien und Verbindungen.

---

## Rollendefinitionen

| Rolle             | Beschreibung                                                                                  |
|-------------------|-----------------------------------------------------------------------------------------------|
| (R) Responsible   | __R__ealisiert den Prozess                                                                    |
| (A) Accountable   | __V__erantwortlich für die erfolgreiche Durchführung des Prozesses                            |
| (C) Consulted     | Wird __k__onsultiert während des Prozesses                                                    |
| (I) Informed      | Wird über die Ergebnisse des Prozesses __i__nformiert                                         |

---

## Physische Netzwerkinfrastruktur & Backbone

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| Implementierung und Wartung der **physischen Netzwerkinfrastruktur** sicherstellen                            |        | **RA**       |
| **Inter-Datacenter / Inter-AZ**-Backbone-Konnektivität von Cloud Temple sicherstellen                         | **I**  | **RA**       |
| **Backbone-Netzwerk** betriebsbereit halten                                                                    | **I**  | **RA**       |
| **Backbone-Netzwerk** sicherheitstechnisch in Betrieb halten                                                   | **I**  | **RA**       |
| Vorfälle, Probleme und Kapazitäten des Backbone-Netzwerks verwalten                                           | **I**  | **RA**       |
| Notwendige **Lizenzen** für den Betrieb der Netzwerkinfrastruktur erwerben und aufrechterhalten                |        | **RA**       |

---

## VPC-Infrastruktur (Router, Gateway & IPAM)

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **VPC-Router** betriebsbereit halten *(1)*                                                                    | **I**  | **RA**       |
| **Hochverfügbarkeit** des VPC-Routers sicherstellen                                                           | **I**  | **RA**       |
| **Externe Gateway** betriebsbereit halten *(1)*                                                                | **I**  | **RA**       |
| **Hochverfügbarkeit** der externen Gateway sicherstellen                                                       | **I**  | **RA**       |
| Betrieb des zugrunde liegenden **IPAM & DHCP**-Dienstes sicherstellen                                        | **I**  | **RA**       |
| Vorfälle und Probleme bei VPC-Kernkomponenten verwalten                                                        | **I**  | **RA**       |
| VPC-Kernkomponenten aktualisieren und sicherheitstechnisch warten                                              | **I**  | **RA**       |

*(1) VPC-Router und externe Gateway sind vollständig von Cloud Temple verwaltete Komponenten. Ihre Verfügbarkeit wird von Cloud Temple im Rahmen des VPC-Service-SLA garantiert.*

---

## VPC-Bereitstellung & Konfiguration

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **VPC** erstellen, ändern und löschen                                                                         | **RA** | **I**        |
| VPC-Netzwerkarchitektur definieren (Anzahl der Subnetze, Topologie)                                           | **RA** |              |
| **Private Netzwerke (Private Networks / VLANs)** im VPC erstellen, ändern und löschen                        | **RA** | **I**        |
| **IP-Adressierungsplan** (CIDR-Bereiche) der privaten Netzwerke definieren                                    | **RA** | **I**        |
| **DHCP-Pools** konfigurieren (dynamische Bereiche, DNS, Gateway)                                              | **RA** | **C**        |
| **Externe Gateway** aktivieren und konfigurieren (Internet-Zugang, NAT, DNAT) *(2)*                           | **RA** | **C**        |
| **Statische Routen** innerhalb des VPC verwalten                                                               | **RA** |              |

*(2) Die Aktivierung der externen Gateway öffnet den Internet-Zugang für den VPC. Der Kunde ist für die zugehörigen Filterregeln und die Verkehrskontrolle verantwortlich.*

---

## Öffentliche IPs & Internet-Exposition

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Pool öffentlicher IPs** auf der Plattform bereitstellen                                                     | **I**  | **RA**       |
| **Öffentliche IPs (Floating IPs)** bestellen und dem VPC zuweisen                                             | **RA** | **I**        |
| **NAT / DNAT**-Regeln für die Dienstexposition konfigurieren                                                  | **RA** |              |
| Lebenszyklus öffentlicher IPs verwalten (Zuordnung, Freigabe, Verschiebung)                                   | **RA** | **I**        |
| Sicherstellen, dass im Internet exponierte Dienste die geltenden Sicherheitsrichtlinien einhalten             | **RA** |              |

---

## Netzwerksicherheit

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Mandantenübergreifende Netzwerkisolierung** auf Plattformebene sicherstellen *(3)*                          |        | **RA**       |
| **Mikrosegmentierungsrichtlinien** (Sicherheitsgruppen) definieren und konfigurieren *(4)*                    | **RA** |              |
| **Verkehrsfilterung** ein-/ausgehend implementieren (Anwendungs-Firewall, IDS/IPS) *(5)*                      | **RA** |              |
| **TLS-Zertifikate** und SSL-Terminierung exponierter Dienste verwalten                                        | **RA** |              |
| **Penetrationstests** für im VPC gehostete Ressourcen durchführen *(6)*                                       | **RA** | **C**        |
| **Anomales Verhalten** bei Mandantennetzwerkflüssen überwachen                                                 | **RA** |              |

*(3) Cloud Temple garantiert die strikte Isolierung zwischen VPCs verschiedener Mandanten.*  
*(4) Mikrosegmentierung (Sicherheitsgruppen) wird im H1 2026 verfügbar sein.*  
*(5) Die Filterung von Anwendungsverkehr im VPC liegt in der Verantwortung des Kunden.*  
*(6) Penetrationstests müssen Cloud Temple vorab gemeldet werden.*

---

## Verbindung zu externen Netzwerken

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Verbindungsstrategie** mit On-Premise-Umgebungen oder anderen Clouds definieren                             | **RA** | **C**        |
| **Site-to-Site-VPN**-Zugang abonnieren und konfigurieren *(verfügbar H2 2026)*                                | **RA** | **C**        |
| **Cloud Connect** (dedizierter Link) abonnieren und konfigurieren *(verfügbar H2 2026)*                       | **RA** | **C**        |
| **BGP / Routen** für Betreiberverbindungen verwalten                                                           | **RA** | **CI**       |
| **Sicherheit der Datenströme** über Verbindungen sicherstellen                                                 | **RA** |              |

---

## Ressourcenverbindung mit dem VPC

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **VM-Instanzen** mit einem privaten VPC-Netzwerk verbinden                                                    | **RA** | **I**        |
| **IaaS-Ressourcen** (VMware-VMs, OpenIaaS) mit privaten VPC-Netzwerken verbinden                              | **RA** | **C**        |
| **Netzwerkschnittstellen** der mit dem VPC verbundenen Ressourcen konfigurieren                               | **RA** |              |
| Sicherstellen, dass verbundene Ressourcen **konsistente Netzwerkkonfigurationen** anwenden                    | **RA** |              |

---

## Netzwerküberwachung & Beobachtbarkeit

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| Betrieb der **VPC-Kernkomponenten** (Router, Gateway) überwachen                                              | **I**  | **RA**       |
| **Performance des Cloud Temple**-Netzwerk-Backbones überwachen                                                | **I**  | **RA**       |
| **Netzwerkflussprotokolle** (Flow Logs) des VPC sammeln und analysieren *(verfügbar H1 2026)*                 | **RA** | **I**        |
| **Überwachung von Anwendungsflüssen** im VPC implementieren                                                    | **RA** |              |
| **Latenz und Bandbreite** der Datenströme im VPC überwachen                                                    | **RA** | **I**        |

---

## Änderungsmanagement & Kapazitäten

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| Entscheidung über Hinzufügen, Ändern oder Entfernen von Netzwerkressourcen im VPC                             | **RA** | **CI**       |
| Kapazitäten und Skalierbarkeit der Backbone-Netzwerkinfrastruktur verwalten                                   |        | **RA**       |
| Wachstum des IP-Adressierungsplans im VPC planen und verwalten                                                 | **RA** | **C**        |

---

## Zugriffs- & Identitätsverwaltung

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| Zugänglichkeit der **Cloud Temple Console** und Netzwerk-API sicherstellen                                    |        | **RA**       |
| Berechtigungen der Cloud Temple Teams zur Netzwerkinfrastruktur verwalten                                     |        | **RA**       |
| VPC-Zugriffsrechte in der Cloud Temple Console (IAM) verwalten                                                 | **RA** |              |

---

## Protokolle (Logs)

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **VPC-Plattformprotokolle** aufbewahren und bereitstellen *(7)*                                               |        | **RA**       |
| **Fluss- und Anwendungsprotokolle** des Mandanten sammeln und aufbewahren                                      | **RA** |              |

*(7) Die Aufbewahrungsdauer der VPC-Plattformprotokolle ist in der entsprechenden Dienstvereinbarung festgelegt.*

---

## Dokumentation & Vertragliches

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| Kaufmännisches und vertragliches Management sicherstellen                                                      | **I**  | **RA**       |
| Vertragliche Leistungserbringung überwachen                                                                    | **RA** | **I**        |
| Technische VPC-Servicedokumentation pflegen und bereitstellen                                                  | **I**  | **RA**       |
| Im Mandanten bereitgestellte Netzwerkarchitektur dokumentieren (Diagramme, CMDB)                               | **RA** |              |

---

## Reversibilität

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| Netzwerk-Reversibilitätsprojekt planen und Zielarchitekturen auswählen                                        | **RA** | **I**        |
| VPC-Konfiguration und Netzwerkressourcen über API oder bereitgestellte Tools exportieren                       | **RA** | **I**        |
| VPC-Konfigurationen nach Vertragsbeendigung abbauen                                                            | **I**  | **RA**       |

---

> *Professional Services stehen zur Verfügung, wenn Sie einige oder alle Verantwortlichkeiten an Cloud Temple delegieren möchten. Wenden Sie sich an Ihren Cloud Temple Account Manager.*
