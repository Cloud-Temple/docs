---
title: Modell der gemeinsamen Verantwortung — VPC
slug: /contractual/network/raci-vpc
---

# Shared-Responsibility-Modell — VPC (Virtual Private Cloud)

Hier ist das **RACI**-Modell, das die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung des **VPC (Virtual Private Cloud)**-Services definiert.

> **Besonderheit des VPC-Angebots**  
> Das VPC ist ein Netzwerk-Service, der **vollständig von Cloud Temple verwaltet wird** und eine cloud-native Erfahrung bietet: automatisches Routing, integrierte Hochverfügbarkeit und native IPAM/DHCP-Verwaltung. Cloud Temple garantiert den Betrieb und die Verfügbarkeit der zugrunde liegenden Netzwerkinfrastruktur (VPC-Router, inter-AZ-Backbone, externes Gateway). Der Kunde ist verantwortlich für das Design, die Konfiguration und die Sicherheit seines Netzwerksegments: Subnetze, Adressierung, Filterrichtlinien und Interconnections.

---

## Definition der Rollen

| Rolle         | Beschreibung                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realisiert | __R__ealisiert den Prozess                                                              |
| (A) Genehmigt | __G__enehmigt die Prozessdurchführung                                                  |
| (C) Konsultiert | __K__onsultiert während des Prozesses                                                  |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses (über die Tools, das Portal oder die Messaging-Plattform) |

---

## Physische Netzwerk-Infrastruktur & Backbone

Cloud Temple ist vollständig für die physische Infrastruktur und das Netzwerk-Backbone verantwortlich, auf dem das VPC basiert.

| Tätigkeit                                                                                                    | Kunde | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Bereitstellung und Wartung der **physischen Netzwerk-Infrastrukturen** (Switches, Backbone-Router) |        | **RA**       |
| Sicherstellung der **Rechenzentrum-übergreifenden / AZ-übergreifenden** Konnektivität des Cloud Temple Backbones | **I**  | **RA**       |
| Sicherstellung der Betriebsbereitschaft des **Cloud Temple Netzwerk-Backbones** | **I**  | **RA**       |
| Sicherstellung der Sicherheitskonformität des **Cloud Temple Netzwerk-Backbones** | **I**  | **RA**       |
| Verwaltung von Incidents, Problemen und Kapazitäten des Netzwerk-Backbones | **I**  | **RA**       |
| Beschaffung und Aufrechterhaltung der für den Betrieb der Netzwerk-Infrastruktur erforderlichen Lizenzen |        | **RA**       |

---

## VPC-Infrastruktur (Router, Gateway & IPAM)

Cloud Temple gewährleistet den Betrieb der Kernkomponenten des VPC. Der Kunde konfiguriert seinen Netzwerkbereich innerhalb dieser Infrastruktur.

| Aktivität                                                                                                    | Kunde | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|-------|--------------|
| Sicherstellung der Betriebsbereitschaft des **VPC-Routers** *(1)*                                          | **I** | **RA**       |
| Sicherstellung der **Hochverfügbarkeit** des VPC-Routers                                                   | **I** | **RA**       |
| Sicherstellung der Betriebsbereitschaft des **Externen Gateways (External Gateway)** *(1)*                 | **I** | **RA**       |
| Sicherstellung der **Hochverfügbarkeit** des Externen Gateways                                             | **I** | **RA**       |
| Sicherstellung des Betriebs des zugrunde liegenden **IPAM & DHCP**-Diensts                                 | **I** | **RA**       |
| Verwaltung von Störungen und Problemen bei den Kernkomponenten des VPC                                     | **I** | **RA**       |
| Aktualisierung und Aufrechterhaltung des Sicherheitszustands der Kernkomponenten des VPC                   | **I** | **RA**       |

*(1) Der VPC-Router und das Externe Gateway sind vollständig von Cloud Temple verwaltete Komponenten. Ihre Verfügbarkeit wird von Cloud Temple im Rahmen des SLA des VPC-Dienstes garantiert.*

---

## VPC-Provisionierung und -Konfiguration

Der Kunde ist für die Erstellung und Konfiguration seines VPC sowie der darin enthaltenen Netzwerkressourcen verantwortlich.

| Aktivität                                                                                                   | Kunde  | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| **VPC** erstellen, ändern und löschen                                                                       | **RA** | **I**        |
| VPC-Netzwerkarchitektur festlegen (nombre de sous-réseaux, topologie)                                       | **RA** |              |
| **Private Networks / VLANs** im VPC erstellen, ändern und löschen                                           | **RA** | **I**        |
| **IP-Adressplan** der privaten Netzwerke festlegen (plages CIDR)                                            | **RA** | **I**        |
| **DHCP-Pools** konfigurieren (plages dynamiques, DNS, gateway)                                              | **RA** | **C**        |
| **Externe Gateway** aktivieren und konfigurieren (accès Internet, NAT, DNAT) *(2)*                         | **RA** | **C**        |
| **Statische Routen** innerhalb des VPC verwalten                                                            | **RA** |              |

*(2) Die Aktivierung des externen Gateways ermöglicht den Internetzugriff für das VPC. Der Kunde ist für die Filterregeln und die Steuerung der damit verbundenen Datenflüsse verantwortlich.*

---

## Öffentliche IPs & Internet-Exposition

| Aktivität                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Zuweisung des **Pools öffentlicher IPs**, der auf der Plattform verfügbar ist                              | **I**  | **RA**       |
| Anforderung und Zuordnung **öffentlicher IPs (Floating IPs)** an das eigene VPC                             | **RA** | **I**        |
| Konfiguration der **NAT-/DNAT-Regeln** für die Exposition von Diensten                                      | **RA** |              |
| Verwaltung des Lebenszyklus öffentlicher IPs (Zuordnung, Freigabe, Änderung)                                | **RA** | **I**        |
| Gewährleistung, dass die über das Internet exponierten Dienste die geltenden Sicherheitsrichtlinien einhalten | **RA** |              |

---

## Netzwerksicherheit

| Aufgabe                                                                                                    | Kunde | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|-------|--------------|
| Sicherstellung der **Netzwerktrennung zwischen Mandanten** auf Plattformebene *(3)*                              |       | **RA**       |
| Definition und Konfiguration der **Richtlinien zur Mikrosegmentierung** (security groups) *(4)*                     | **RA** |              |
| Einrichtung einer **Datenflussfilterung** ein-/ausgehend (pare-feu applicatif, IDS/IPS) *(5)*            | **RA** |              |
| Verwaltung der **TLS-Zertifikate** und SSL-Terminierung exponierter Dienste                                    | **RA** |              |
| Durchführung von **Penetrationstests** auf den im VPC gehosteten Ressourcen *(6)*                          | **RA** | **C**        |
| Überwachung **anomaler Verhaltensweisen** im Mandantendatenverkehr                                     | **RA** |              |

*(3) Cloud Temple garantiert die strikte Trennung zwischen VPCs verschiedener Mandanten. Kein Datenverkehr kann diese Barriere ohne explizite Aktion des Kunden durchlaufen.*  
*(4) Die Mikrosegmentierung (security groups) ist im S1 2026 verfügbar. Vor dieser Verfügbarkeit geltende Filterrichtlinien sind vom Kunden über eine dedizierte Sicherheitsinfrastruktur umzusetzen.*  
*(5) Die anwendungsbezogene Filterung des Datenverkehrs innerhalb des VPC liegt in der Verantwortung des Kunden. Cloud Temple führt keine Inhaltsprüfung des Mandantendatenverkehrs durch.*  
*(6) Penetrationstests sind gemäß den Allgemeinen Geschäftsbedingungen vorab bei Cloud Temple anzumelden.*

## Interkonnektion mit externen Netzwerken

| Aktivität                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Strategie für die **Interkonnektion** mit On-Premise-Umgebungen oder anderen Clouds festlegen            | **RA** | **C**        |
| Zugang zu einem **Site-to-Site-VPN** abonnieren und konfigurieren *(disponible S2 2026)*                                | **RA** | **C**        |
| Zugang zu **Cloud Connect** (lien dédié) abonnieren und konfigurieren *(disponible S2 2026)*                     | **RA** | **CI**       |
| Verwaltung der **BGP / Routes** im Zusammenhang mit Operator-Interkonnektionen                                          | **RA** | **CI**       |
| Gewährleistung der **Sicherheit der Datenflüsse** über die Interkonnektionen                                         | **RA** |              |

---

## Anbindung von Ressourcen an das VPC

| Aktivität                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| **VM-Instanzen** an ein privates VPC-Netzwerk anbinden                                                     | **RA** | **I**        |
| **IaaS-Ressourcen** (VMware-VMs, OpenIaaS) an die privaten VPC-Netzwerke anbinden                         | **RA** | **C**        |
| **Netzwerkschnittstellen** der mit dem VPC verbundenen Ressourcen konfigurieren                                       | **RA** |              |
| Sicherstellen, dass die verbundenen Ressourcen **konsistente Netzwerkkonfigurationen** (Gateway, DNS) | **RA** |              |

---

## Netzwerküberwachung & Observability

| Aktivität                                                                                                    | Kunde | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|-------|--------------|
| Überwachung des Betriebs der **Kernkomponenten des VPC** (routeur, gateway)                             | **I**  | **RA**       |
| Überwachung der **Backbone-Performance** des Cloud Temple-Netzwerks                                      | **I**  | **RA**       |
| Sammlung und Analyse der **Netzwerkfluss-Logs** (flow logs) des VPC *(disponible S1 2026)*                | **RA** | **I**        |
| Einrichtung eines **Monitorings der Anwendungsflüsse** im VPC                                        | **RA** |              |
| Überwachung der **Latenz und Bandbreite** der Flüsse innerhalb des VPC                                       | **RA** | **I**        |

---

## Änderungs- und Kapazitätsmanagement

| Aktivität                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Entscheidung treffen, Netzwerkressourcen im eigenen VPC hinzuzufügen, zu ändern oder zu entfernen                       | **RA** | **CI**       |
| Kapazitäten und Skalierbarkeit der Backbone-Netzwerkinfrastruktur verwalten                                    |        | **RA**       |
| Wachstum des IP-Adressplans im VPC planen und verwalten                                         | **RA** | **C**        |

---

## Zugriffs- & Identitätsmanagement

| Aktivität                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Sicherstellung der Erreichbarkeit der **Cloud Temple Console** und der Netzwerk-API                                  |        | **RA**       |
| Verwaltung der Berechtigungen der Cloud Temple-Teams für die Netzwerk-Infrastruktur                                  |        | **RA**       |
| Verwaltung der Zugriffsrechte auf das VPC in der Cloud Temple Console (IAM)                                    | **RA** |              |

---

## Protokolle (Logs)

| Aktivität                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Speichern und Bereitstellen der **VPC-Plattformprotokolle** *(7)*                                          |        | **RA**       |
| Sammeln und Speichern der **Flow-Logs** und Anwendungsprotokolle des Tenants                                | **RA** |              |

*(7) Die Aufbewahrungsdauer der VPC-Plattformprotokolle wird in der entsprechenden Servicevereinbarung festgelegt.*

---

## Dokumentation & Vertragliches

| Aktivität                                                                                                    | Kunde | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|-------|--------------|
| Übernahme des kommerziellen und vertraglichen Managements (devis, commandes, facturation)                  | **I**  | **RA**       |
| Sicherstellung des vertraglichen Monitorings der Dienstleistung                                            | **RA** | **I**        |
| Sicherstellung der Wartung und Verfügbarkeit der technischen Dokumentation des VPC-Dienstes                | **I**  | **RA**       |
| Dokumentation der im Tenant bereitgestellten Netzwerkarchitektur (schémas, CMDB)                           | **RA** |              |

---

## Reversibilität

| Aktivität                                                                                                    | Kunde | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|-------|--------------|
| Das Projekt zur Netzwerk-Reversibilität planen und die Zielarchitekturen auswählen                         | **RA** | **I**        |
| VPC-Konfiguration und Netzwerkressourcen über die API oder die bereitgestellten Tools exportieren            | **RA** | **I**        |
| VPC-Konfigurationen nach Vertragsbeendigung zurückbauen                                                    | **I**  | **RA**       |

---

> *Professionelle Dienstleistungen stehen zur Verfügung, wenn Sie die als Kundenverantwortung aufgeführten Aufgaben ganz oder teilweise delegieren möchten. Kontaktieren Sie Ihren Cloud Temple-Vertriebspartner.*