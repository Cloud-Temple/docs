---
title: Modell der geteilten Verantwortung — VM-Instanzen
slug: /contractual/vm-instances/raci
---

# Modell der geteilten Verantwortung — VM-Instanzen

Dieses **RACI**-Modell definiert die Verteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für den **VM-Instanzen**-Dienst (gemeinsam genutzte virtuelle Maschinen).

> **Besonderheiten des VM-Instanzen-Dienstes**  
> Im Gegensatz zum dedizierten IaaS-Angebot basiert der VM-Instanzen-Dienst auf einer **gemeinsam genutzten und vollständig von Cloud Temple verwalteten** Compute-Infrastruktur. Cloud Temple übernimmt das vollständige Management des Hypervisors, der Systemimages und der Infrastrukturschicht. Der Kunde trägt die volle Verantwortung für alles, was innerhalb seiner Instanzen ausgeführt wird: Gast-Betriebssystem, Anwendungen, Daten und Anwendungssicherheit.

---

## Rollendefinitionen

| Rolle             | Beschreibung                                                                                  |
|-------------------|-----------------------------------------------------------------------------------------------|
| (R) Responsible   | __R__ealisiert den Prozess                                                                    |
| (A) Accountable   | __V__erantwortlich für die erfolgreiche Durchführung des Prozesses                            |
| (C) Consulted     | Wird __k__onsultiert während des Prozesses                                                    |
| (I) Informed      | Wird über die Ergebnisse des Prozesses __i__nformiert (über Tools, Portal oder Messaging)     |

---

## Physische Infrastruktur & Hypervisor

Cloud Temple ist vollständig für die Infrastruktur- und Hypervisor-Schicht verantwortlich. Der Kunde hat keinen Zugriff auf diese Schicht.

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Implementierung und Wartung der **physischen Rechenzentren** sicherstellen                            |        | **RA**       |
| Implementierung und Wartung der **gemeinsam genutzten Compute**-Infrastruktur sicherstellen           | **I**  | **RA**       |
| Implementierung und Wartung der **Speicher**-Infrastruktur sicherstellen                              | **I**  | **RA**       |
| Implementierung und Wartung der **Backbone-Netzwerk**-Konnektivität sicherstellen                     | **I**  | **RA**       |
| **Hypervisoren** verwalten, aktualisieren und sicherheitstechnisch warten *(1)*                       | **I**  | **RA**       |
| **Hochverfügbarkeit** der Hypervisor-Plattform sicherstellen                                          | **I**  | **RA**       |
| Vorfälle, Probleme und Kapazitäten der Infrastruktur- und Hypervisor-Schicht verwalten               | **I**  | **RA**       |
| Für den Betrieb der Plattform notwendige **Lizenzen** erwerben und aufrechterhalten                   |        | **RA**       |

*(1) Hypervisoren und die Virtualisierungsschicht liegen vollständig in der Verantwortung von Cloud Temple. Der Kunde hat weder Zugriff auf den Hypervisor noch auf die zugrunde liegende Verwaltungsschicht.*

---

## Images, Templates & Katalog

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| **Offizielle Katalog-Images** erstellen, veröffentlichen und pflegen *(2)*                            | **I**  | **RA**       |
| Sicherheits-Patches und Updates für **Katalog-Images** anwenden                                       |        | **RA**       |
| Konformität und Sicherheit der veröffentlichten Katalog-Images validieren                             |        | **RA**       |
| Ein offizielles Katalog-Image **ableiten** um ein benutzerdefiniertes Image zu erstellen *(3)*        | **RA** | **I**        |
| Konformität, Lizenzen und Sicherheit jedes abgeleiteten benutzerdefinierten Images sicherstellen      | **RA** |              |
| Abgeleitete benutzerdefinierte Images pflegen und aktualisieren (OS-Patches, integrierte Tools)      | **RA** |              |

*(2) Offizielle Katalog-Images (Linux-Distributionen, Windows Server usw.) werden von Cloud Temple erstellt, gepflegt und aktualisiert. Ihr anfängliches Sicherheitsniveau liegt in der Verantwortung von Cloud Temple.*  
*(3) Der Kunde kann ein offizielles Katalog-Image ableiten, um ein benutzerdefiniertes Image zu erstellen. Ab diesem Zeitpunkt liegt die **gesamte Verantwortung** für dieses Image beim Kunden: Konformität, Lizenzen, Sicherheitsupdates, Vorhandensein und Aktualisierung der Tools sowie Hardening. Cloud Temple übernimmt keine Pflege abgeleiteter Images.*

---

## Bereitstellung & Instanz-Lebenszyklus

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| **VM-Instanzen** erstellen, starten, stoppen und löschen                                              | **RA** | **I**        |
| Flavor und Start-Image der Instanz auswählen                                                          | **RA** |              |
| Instanz skalieren (Flavor-Änderung) *(4)*                                                             | **RA** | **I**        |
| **Metadaten und Tags** der Instanzen verwalten                                                        | **RA** |              |
| **Lebenszyklus** der Instanzen verwalten (Erstellung, Änderung, Stilllegung)                          | **RA** |              |
| Entscheidung über Hinzufügen oder Reduzieren von Ressourcen treffen                                  | **RA** |              |

*(4) Eine Größenänderung kann einen Neustart der Instanz erfordern. Die Verfügbarkeit der gehosteten Anwendung während dieser Operation liegt in der Verantwortung des Kunden.*

---

## Gast-Betriebssystem (Guest OS) & Tools

Der Kunde hat die volle Kontrolle und die volle Verantwortung für das Betriebssystem innerhalb seiner Instanzen.

:::warning[SLA-Gültigkeitsbedingung — Obligatorische Tools]
Die **VM-Instanzen-Tools** (Hypervisor-Management-Agenten) werden von Cloud Temple **bei der Bereitstellung** der Instanz aus dem Katalog **vorinstalliert**. Diese Agenten sind für den ordnungsgemäßen Betrieb der Plattform und die Verfügbarkeitsmessung unverzichtbar.

**Wenn der Kunde diese Tools deaktiviert oder entfernt, ist das SLA sofort hinfällig.** Cloud Temple kann die Verfügbarkeit der Instanz ohne diese Agenten weder garantieren noch messen. Das Vorhandensein und die ordnungsgemäße Funktion der Tools liegen während der gesamten Lebensdauer der Instanz in der ausschließlichen Verantwortung des Kunden.
:::

| Aktivität                                                                                                      | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Tools vorinstallieren** (Hypervisor-Agenten, PV-Treiber) bei der Bereitstellung aus dem Katalog *(5)*      |        | **RA**       |
| Sicherstellen, dass **Tools installiert, aktiviert und aktuell** bleiben *(6)*                                | **RA** |              |
| **Sicherheits-Patches und Updates** des Gast-Betriebssystems anwenden                                        | **RA** |              |
| Konfiguration des Betriebssystems **absichern** (CIS, ANSSI-Empfehlungen usw.)                               | **RA** |              |
| **Benutzerkonten, Passwörter und SSH-Schlüssel** innerhalb der Instanz verwalten *(7)*                        | **RA** |              |
| **Monitoring-Agenten** installieren und konfigurieren (OS-Metriken, Systemprotokolle)                         | **RA** |              |
| **Regulatorische Compliance** für gehostete OS und Daten aufrechterhalten                                     | **RA** |              |

*(5) Cloud Temple stellt ein initiales Image aus dem Katalog mit vorinstallierten Tools bereit. Die Verantwortung für Konfiguration, Absicherung und nachfolgende OS-Updates liegt vollständig beim Kunden ab der ersten Verbindung zur Instanz.*  
*(6) Das Entfernen oder Deaktivieren der Tools durch den Kunden führt zur sofortigen Aussetzung der Service-Level-Verpflichtungen (SLA) für die betroffene Instanz. Cloud Temple kann nicht für Fehlfunktionen verantwortlich gemacht werden, die auf das Fehlen dieser Agenten zurückzuführen sind.*  
*(7) Die Zugangssicherheit zur Instanz (Passwortstärke, SSH-Schlüssel-Verwaltung, Prinzip der geringsten Berechtigung) liegt vollständig in der Verantwortung des Kunden. Cloud Temple kann nicht für eine Kompromittierung verantwortlich gemacht werden, die aus einer unzureichend gesicherten Zugriffskonfiguration resultiert.*

---

## Instanz-Sicherheit & Internet-Exposition

:::danger[Sicherheitsverantwortung des Kunden]
Cloud Temple gewährleistet nur die **mandantenübergreifende Netzwerkisolierung** auf Plattformebene. Der Schutz jeder Instanz gegen Netzwerkbedrohungen (Internet, interne Datenströme) liegt **vollständig in der Verantwortung des Kunden**. Eine Instanz, die ohne ausreichende Filterung oder mit schwachen Zugangsdaten mit dem Internet verbunden ist, setzt den Kunden Kompromittierungsrisiken aus, für die Cloud Temple nicht verantwortlich gemacht werden kann.
:::

| Aktivität                                                                                                            | Kunde  | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Mandantenübergreifende Netzwerkisolierung** auf Plattformebene sicherstellen                                      |        | **RA**       |
| **Internet-exponierte Instanzen schützen** (Filterregeln, Sicherheitsgruppen, Firewalls) *(A)*                      | **RA** |              |
| Sicherstellen, dass kein Dienst ohne **explizite Filterregel** im Internet exponiert wird                           | **RA** |              |
| Eine **Application Firewall** (WAF, IDS/IPS) implementieren und pflegen, falls erforderlich                         | **RA** |              |
| **Starke Passwörter und sichere SSH-Schlüssel** auf allen Instanzen konfigurieren *(B)*                             | **RA** |              |
| Das **Prinzip der geringsten Berechtigung** bei OS-Konten und Remote-Zugriffen anwenden                             | **RA** |              |
| Eine **Erkennungs- und Incident-Response-Lösung** (EDR, SIEM) implementieren, falls erforderlich                    | **RA** |              |
| **Konfigurationshärtung** von Netzwerk und OS der Instanzen durchführen                                             | **RA** |              |
| Cloud Temple bei **Verdacht auf Kompromittierung** der gemeinsam genutzten Plattform benachrichtigen                | **RA** | **C**        |

*(A) Jede Instanz, die ohne ausreichende Filterung über eine öffentliche IP oder NAT-Regel mit dem Internet verbunden ist, liegt ausschließlich in der Verantwortung des Kunden. Cloud Temple prüft oder filtert den eingehenden oder ausgehenden Datenverkehr des Mandanten nicht.*  
*(B) Die Verwendung schwacher Passwörter, kompromittierter SSH-Schlüssel oder unbeschränkter Root-Zugänge verstößt gegen bewährte Sicherheitspraktiken. Cloud Temple kann nicht für eine Kompromittierung verantwortlich gemacht werden, die aus einer unzureichend gesicherten Zugriffskonfiguration des Kunden resultiert.*

---

## Anwendungen & Middleware

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| **Anwendungen** und **Middleware** in Instanzen installieren, konfigurieren und pflegen               | **RA** |              |
| **Sicherheits-Patches** für Anwendungen und Middleware anwenden                                       | **RA** |              |
| **Software-Lizenzen** für gehostete Anwendungen erwerben und halten                                   | **RA** |              |
| Eine **Antiviren-Strategie** auf Instanzen implementieren                                             | **RA** |              |
| **Anwendungskontinuität** verwalten (Load Balancing, Replikation, Clustering)                         | **RA** |              |

---

## Netzwerk & Konnektivität

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| **Backbone-Netzwerk** und gemeinsam genutzte Netzwerkinfrastruktur aufrechterhalten                   | **I**  | **RA**       |
| **Netzwerkschnittstellen** der Instanzen konfigurieren                                                | **RA** |              |
| **IP-Adressierungsplan** innerhalb des Mandanten verwalten                                            | **RA** | **I**        |
| **Sicherheitsgruppen** (Filterregeln) konfigurieren und verwalten                                     | **RA** |              |
| **Internet-Zugang** abonnieren und konfigurieren (öffentliche IPs, NAT)                               | **RA** |              |
| Vorfälle bei **Backbone**-Netzwerkverbindungen (Cloud Temple-Schicht) verwalten                       | **I**  | **RA**       |

---

## Instanz-Speicher

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Gemeinsam genutzte **Speicherinfrastruktur** betriebsbereit halten                                    | **I**  | **RA**       |
| Speicherinfrastruktur sicherheitstechnisch in Betrieb halten                                          | **I**  | **RA**       |
| **Zusätzliche Speicher-Volumes** erstellen, anhängen und verwalten                                    | **RA** | **I**        |
| **Datenkonsistenz** in den Instanzen sicherstellen                                                    | **RA** |              |
| Eine **Datenverschlüsselungsrichtlinie** innerhalb der Instanzen definieren und anwenden              | **RA** |              |

---

## Backup & Snapshots

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| **Backup-Infrastruktur** betriebsbereit halten                                                        | **I**  | **RA**       |
| **Backup-Richtlinie** für eine Instanz aktivieren und konfigurieren                                   | **RA** |              |
| **Point-in-Time-Snapshots** einer Instanz auslösen                                                    | **RA** |              |
| **Konsistenz und Wiederherstellbarkeit** der durchgeführten Backups überprüfen                        | **RA** |              |
| **Regelmäßige Wiederherstellungstests** durchführen                                                   | **RA** |              |
| **Speicherkapazität** für Backups verwalten                                                           |        | **RC**       |
| **Kontinuitäts- oder Wiederherstellungsstrategie** für gehostete Anwendungen definieren               | **RA** |              |

---

## Monitoring & Performance

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Ordnungsgemäßes Funktionieren von **physischer Infrastruktur und Hypervisoren** überwachen            | **I**  | **RA**       |
| Performance der **gemeinsam genutzten Ressourcen** überwachen (Compute, Storage, Netzwerk)           | **I**  | **RA**       |
| **Instanz-Performance** überwachen (CPU, RAM, Disk I/O, Netzwerk auf Guest-Ebene)                    | **RA** |              |
| Eine **Metriken- und Alarmlösung** für gehostete Anwendungen implementieren                           | **RA** |              |

---

## Zugriffs- & Identitätsverwaltung

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Zugänglichkeit der **Cloud Temple Console** und API sicherstellen                                     |        | **RA**       |
| **Berechtigungen** der Cloud Temple Teams zur qualifizierten SecNumCloud-Infrastruktur verwalten      |        | **RA**       |
| Zugriff auf die **Cloud Temple Console** verwalten (Benutzer, Rollen, IAM)                           | **RA** |              |
| Zugriff **innerhalb der Instanzen** verwalten (OS-Konten, SSH-Schlüssel, Bastion)                    | **RA** |              |
| Ein **externes Authentifizierungsverzeichnis** (SSO, LDAP) für die Console konfigurieren             | **RA** | **C**        |

---

## Protokolle (Logs)

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| **Plattformprotokolle** der VM-Instanzen aufbewahren und bereitstellen *(8)*                          |        | **RA**       |
| **System- und Anwendungsprotokolle** der Instanzen sammeln, aufbewahren und analysieren               | **RA** |              |

*(8) Die Aufbewahrungsdauer der Plattformprotokolle ist in der VM-Instanzen-Dienstvereinbarung festgelegt.*

---

## Dokumentation & Vertragliches

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Kaufmännisches und vertragliches Management sicherstellen (Angebote, Bestellungen, Abrechnung)        | **I**  | **RA**       |
| Vertragliche Leistungserbringung überwachen (Lieferungen, Abrechnung)                                 | **RA** | **I**        |
| Technische Servicedokumentation pflegen und bereitstellen                                             | **I**  | **RA**       |
| **CMDB** für im Mandanten bereitgestellte Instanzen aktuell halten                                    | **RA** |              |
| Zugriffsrichtlinie für Console und API aktuell halten                                                 | **RA** |              |

---

## Reversibilität

| Aktivität                                                                                              | Kunde  | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Reversibilitätsprojekt planen und Zielinfrastrukturen auswählen                                       | **RA** | **I**        |
| Daten und Instanz-Images über API oder bereitgestellte Tools exportieren                              | **RA** | **I**        |
| Konfigurationen nach Vertragsbeendigung abbauen                                                       | **I**  | **RA**       |
| Sichere Datenlöschung auf Speichermedien durchführen und Bescheinigung ausstellen                     | **I**  | **RA**       |

---

> *Professional Services stehen zur Verfügung, wenn Sie einige oder alle der als Kundenpflicht aufgeführten Verantwortlichkeiten an Cloud Temple delegieren möchten. Wenden Sie sich an Ihren Cloud Temple Account Manager.*
