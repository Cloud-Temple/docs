---
title: Shared-Responsibility-Modell — VM-Instanzen
slug: /contractual/vm-instances/raci
---

# Modell der geteilten Verantwortung — VM-Instanzen

Dies ist das **RACI**-Modell, das die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung des **VM-Instanzen**-Services (geteilte virtuelle Maschinen) definiert.

> **Besonderheit des VM-Instanzen-Angebots**  
> Im Gegensatz zum dedizierten IaaS-Angebot basiert der VM-Instanzen-Service auf einer **von Cloud Temple vollständig verwalteten und geteilten** Recheninfrastruktur. Cloud Temple übernimmt das vollständige Management des Hypervisors, der Systemimages und der Infrastrukturschicht. Der Kunde behält die volle Verantwortung für das, was innerhalb seiner Instanzen ausgeführt wird: Gastbetriebssystem, Anwendungen, Daten und Anwendungssicherheit.

---

## Definition der Rollen

| Rolle         | Beschreibung                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realisiert | __R__ealisiert den Prozess                                                              |
| (A) Genehmigt | __G__enehmigt die Prozessdurchführung                                                  |
| (C) Konsultiert | __K__onsultiert während des Prozesses                                                  |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses (über die Tools, das Portal oder die Messaging-Plattform) |

---

## Physische Infrastruktur & Hypervisor

Cloud Temple ist vollständig für die Infrastruktur- und Hypervisor-Schicht verantwortlich. Der Kunde hat keinen Zugriff auf diese Schicht.

| Aufgabe | Kunde | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Bereitstellung und Wartung der **physischen Rechenzentren** sicherstellen | | **RA** |
| Bereitstellung und Wartung der **gemeinsam genutzten Recheninfrastrukturen** | **I** | **RA** |
| Bereitstellung und Wartung der **Speicherinfrastrukturen** | **I** | **RA** |
| Bereitstellung und Wartung der **Backbone-Netzwerk-Konnektivität** | **I** | **RA** |
| Verwaltung, Aktualisierung und sicherer Betrieb der **Hypervisoren** *(1)* | **I** | **RA** |
| Sicherstellung der **Hochverfügbarkeit** der Hypervisor-Plattform | **I** | **RA** |
| Verwaltung von Incidents, Problemen und Kapazitäten der Infrastruktur- und Hypervisor-Schicht | **I** | **RA** |
| Beschaffung und Verwaltung der für den Plattformbetrieb erforderlichen **Lizenzen** | | **RA** |

*(1) Die Hypervisoren und die Virtualisierungsschicht liegen vollständig in der Verantwortung von Cloud Temple. Der Kunde hat keinen Zugriff auf den Hypervisor oder die zugrunde liegende Management-Schicht.*

---

## Images, Templates & Katalog

| Aktivität                                                                                                       | Kunde | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|-------|--------------|
| Offizielle **Katalog-Images** erstellen, veröffentlichen und pflegen *(2)*                                | **I**  | **RA**       |
| Sicherheitspatches und Updates auf die **Katalog-Images** anwenden                      |        | **RA**       |
| Konformität und Sicherheit der im Katalog veröffentlichten Images validieren                                    |        | **RA**       |
| Ein offizielles **Katalog-Image** zur Erstellung eines benutzerdefinierten Images **ableiten** *(3)*                        | **RA** | **I**        |
| Konformität, Lizenzen und Sicherheit jedes abgeleiteten benutzerdefinierten Images sicherstellen               | **RA** |              |
| Abgeleitete benutzerdefinierte Images pflegen und aktualisieren (OS-Patches, integrierte Tools)                | **RA** |              |

*(2) Die offiziellen Katalog-Images (Linux-Distributionen, Windows Server usw.) werden von Cloud Temple erstellt, gepflegt und aktualisiert. Das initiale Sicherheitsniveau liegt in der Verantwortung von Cloud Temple.*  
*(3) Der Kunde kann ein offizielles Katalog-Image ableiten, um ein benutzerdefiniertes Image zu erstellen. Ab diesem Zeitpunkt trägt er **die volle Verantwortung** für dieses Image: Konformität, Lizenzen, Sicherheitsupdates, Vorhandensein und Aktualisierung der Tools sowie Hardening. Cloud Temple übernimmt keine Pflege dieser abgeleiteten Images.*

---

## Instanzbereitstellung & Lebenszyklus der Instanzen

| Aktivität | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| **VM-Instanzen** erstellen, starten, stoppen und löschen | **RA** | **I** |
| Instanztyp (flavor) und Start-Image der Instanz auswählen | **RA** | |
| Instanz skalieren (changement de gabarit) *(4)* | **RA** | **I** |
| **Metadaten und Tags** der Instanzen verwalten | **RA** | |
| **Lebenszyklus** der Instanzen verwalten (création, modification, décommissionnement) | **RA** | |
| Entscheidung über das Hinzufügen oder Reduzieren von Ressourcen treffen. | **RA** | |

*(4) Das Skalieren kann einen Neustart der Instanz erfordern. Die Verfügbarkeit der gehosteten Anwendung während dieses Vorgangs liegt in der Verantwortung des Clients.*

---

## Gastbetriebssystem (Guest OS) & Tools

Der Kunde hat die volle Kontrolle und die volle Verantwortung für das Betriebssystem innerhalb seiner Instanzen.

:::warning[Bedingung für die SLA-Gültigkeit — Erforderliche Tools]
Die **VM-Instance-Tools** (agents de gestion de l'hyperviseur) werden von **Cloud Temple bei der Bereitstellung der Instanz aus dem Katalog vorinstalliert**. Diese Agenten sind für den ordnungsgemäßen Betrieb der Plattform und die Verfügbarkeitsmessung unerlässlich.

**Wenn der Kunde diese Tools deaktiviert oder löscht, erlischt das SLA sofort.** Cloud Temple kann ohne diese Agenten die Verfügbarkeit der Instanz weder garantieren noch messen. Das Vorhandensein und der einwandfreie Betrieb der Tools liegen während des Betriebs in der alleinigen Verantwortung des Kunden.
:::

| Activité                                                                                                        | Client | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Tools vorinstallieren** (agents hyperviseur, PV drivers) bei der Bereitstellung aus dem Katalog *(5)*     |        | **RA**       |
| Sicherstellen, dass die **Tools während der gesamten Lebensdauer der Instanz installiert, aktiviert und aktuell bleiben** *(6)*       | **RA** |              |
| **Sicherheits-Patches und Updates** des Gastbetriebssystems anwenden                      | **RA** |              |
| **Härten** der Betriebssystemkonfiguration (CIS, recommandations ANSSI, etc.)                       | **RA** |              |
| Verwalten der **Benutzerkonten, Passwörter und SSH-Schlüssel** innerhalb der Instanz *(7)*                | **RA** |              |
| Installieren und Konfigurieren der **Überwachungsagenten** (métriques OS, logs système)                              | **RA** |              |
| Aufrechterhaltung der **gesetzlichen Konformität** für Betriebssysteme und gehostete Daten                            | **RA** |              |

*(5) Cloud Temple stellt ein initiales Image im Katalogzustand mit vorinstallierten Tools bereit. Die Verantwortung für die Konfiguration, das Hardening und die nachfolgenden Updates des Betriebssystems liegt ab der ersten Verbindungsherstellung zur Instanz vollständig beim Kunden.*  
*(6) Das Löschen oder Deaktivieren der Tools durch den Kunden führt zur sofortigen Aussetzung der Service-Level-Agreement-(SLA)-Verpflichtungen für die betreffende Instanz. Cloud Temple kann nicht für Störungen verantwortlich gemacht werden, die auf das Fehlen dieser Agenten zurückzuführen sind.*  
*(7) Die Sicherheit des Zugriffs auf die Instanz (solidité des mots de passe, gestion des clés SSH, principe de moindre privilège) liegt in der alleinigen Verantwortung des Kunden. Cloud Temple kann nicht für eine Kompromittierung verantwortlich gemacht werden, die auf eine unzureichend gesicherte Zugriffskonfiguration zurückzuführen ist.*

---

## Sicherheit von Instanzen & Internet-Exposition

:::danger[Verantwortung für die Sicherheit des Kunden]
Cloud Temple gewährleistet ausschließlich die **Mandantentrennung** auf Plattformebene. Der Schutz jeder Instanz vor Netzwerkbedrohungen (Internet, interner Datenverkehr) liegt **ausschließlich in der Verantwortung des Kunden**. Eine mit dem Internet verbundene Instanz ohne angemessene Filterung oder mit schwachen Zugangsdaten setzt den Kunden Risiken einer Kompromittierung aus, für die Cloud Temple nicht haftbar gemacht werden kann.
:::

| Aktivität                                                                                                              | Kunde | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|--------|--------------|
| Gewährleistung der **Netzwerk-Mandantentrennung** auf Plattformebene                                              |        | **Cloud Temple**       |
| **Schutz der über das Internet exponierten Instanzen** (Filterregeln, Security Groups, Firewall) *(A)*               | **Kunde** |              |
| Sicherstellen, dass keine Dienste ohne **explizite Filterregel** über das Internet exponiert sont                            | **Kunde** |              |
| Einrichtung und Wartung eines **Application Firewalls (WAF)** (WAF, IDS/IPS) bei Bedarf je nach Kritizitätsstufe          | **Kunde** |              |
| Konfiguration **robuster Passwörter und sicherer SSH-Schlüssel** auf allen Instanzen *(B)*                  | **Kunde** |              |
| Anwendung des **Prinzips der geringsten Rechte** auf OS-Konten und Remote-Zugänge (SSH, RDP)                   | **Kunde** |              |
| Einrichtung einer Lösung zur **Ereigniserkennung und -reaktion** (EDR, SIEM) bei Bedarf                         | **Kunde** |              |
| **Härtung der Konfiguration** von Instanzen (Netzwerk und OS) (Deaktivierung unnötiger Dienste)    | **Kunde** |              |
| Cloud Temple im Falle eines **Verdachts auf Kompromittierung** der gemeinsam genutzten Plattform benachrichtigen                    | **Kunde** | **C**        |

*(A) Jede über eine öffentliche IP oder eine NAT-Regel ohne angemessene Filterung mit dem Internet verbundene Instanz liegt in der alleinigen Verantwortung des Kunden. Cloud Temple führt keine Inspektion oder Filterung des ein- oder ausgehenden Datenverkehrs des Mandanten durch.*  
*(B) Die Verwendung schwacher Passwörter, kompromittierter SSH-Schlüssel oder uneingeschränkter Root-Zugänge stellt einen Verstoß gegen die Sicherheitsbest Practices dar. Cloud Temple kann nicht für eine Kompromittierung verantwortlich gemacht werden, die auf eine vom Kunden unzureichend gesicherte Zugriffsconfigurationsresultiert.*

## Anwendungen & Middleware

| Aktivität                                                                                               | Kunde | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|-------|--------------|
| Anwendungen und Middleware in Instanzen installieren, konfigurieren und warten                          | **RA** |              |
| **Sicherheitsupdates** für Anwendungen und Middleware anwenden                                          | **RA** |              |
| **Softwarelizenzen** für gehostete Anwendungen erwerben und verwalten                                   | **RA** |              |
| Eine **Antivirenstrategie** auf den Instanzen implementieren                                            | **RA** |              |
| Die **Anwendungskontinuität** (Lastverteilung, Replikation, Clustering) verwalten                       | **RA** |              |

---

## Netzwerk & Konnektivität

| Aktivität                                                                                               | Kunde | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Sicherstellung des **Backbone-Netzwerks** und der gemeinsam genutzten Netzwerkinfrastruktur                    | **I**  | **RA**       |
| Konfiguration der **Netzwerkschnittstellen** der Instanzen                                                     | **RA** |              |
| Verwaltung des **IP-Adressierungsplans** im Tenant                                                        | **RA** | **I**        |
| Konfiguration und Verwaltung der **Sicherheitsgruppen** (security groups / règles de filtrage) *(6)*           | **RA** |              |
| Abschluss und Konfiguration des **Internetzugriffs** (IPs publiques, NAT)                                     | **RA** |         |
| Management von Störungen auf den **Backbone**-Netzwerkverbindungen (couche Cloud Temple)                            | **I**  | **RA**       |

*(6) Die Konfiguration der für Instanzen geltenden Netzwerkfilterregeln liegt in der Verantwortung des Kunden. Cloud Temple gewährleistet ausschließlich die Mandantentrennung auf Plattformebene.*

---

## Instanzspeicher

| Aktivität                                                                                               | Kunde | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|-------|--------------|
| Sicherstellung des Betriebs der **gemeinsam genutzten Speicherinfrastruktur**                          | **I**  | **RA**       |
| Sicherstellung der Sicherheit der Speicherinfrastruktur                                               | **I**  | **RA**       |
| Erstellen, Anhängen und Verwalten von **zusätzlichen Speicher-Volumes**                                 | **RA** | **I**        |
| Sicherstellung der **Konsistenz der** in den Instanzen gespeicherten **Daten**                        | **RA** |              |
| Definieren und Anwenden einer **Datenverschlüsselungsrichtlinie** innerhalb der Instanzen *(7)*        | **RA** |              |

*(7) Die Verschlüsselung ruhender Daten der zugrunde liegenden Speicherinfrastruktur wird von Cloud Temple gewährleistet. Die anwendungsspezifische Verschlüsselung der Daten (auf Dateisystem- oder Datenbankebene) liegt in der Verantwortung des Kunden.*

---

## Sicherung & Snapshots

| Aktivität                                                                                               | Kunde | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|-------|--------------|
| Sicherstellung des Betriebs der **Sicherungsinfrastruktur**                 | **I**  | **RA**       |
| **Aktivieren und Konfigurieren** der mit einer Instanz verknüpften Sicherungsrichtlinie                          | **RA** |       |
| **Auslösen von einmaligen Snapshots** einer Instanz                                                  | **RA** |         |
| Überprüfen der **Konsistenz und Wiederherstellbarkeit** der durchgeführten Sicherungen                             | **RA** |         |
| Durchführen von **Wiederherstellungstests** in regelmäßigen Abständen                                                    | **RA** |              |
| Verwalten der **Speicherkapazitäten** für Sicherungen                                            |  | **RC**       |
| Festlegen der **Strategie für Kontinuität oder Wiederanlauf** für gehostete Anwendungen       | **RA** |        |

---

## Monitoring & Leistung

| Aktivität                                                                                              | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Überwachung des einwandfreien Betriebs der **physischen Infrastruktur und der Hypervisor**             | **I**  | **RA**       |
| Überwachung der **Leistung der gemeinsam genutzten Ressourcen** (Compute, Storage, Netzwerk)           | **I**  | **RA**       |
| Überwachung der **Leistung der Instanzen** (CPU, RAM, Disk-I/O, Netzwerk auf Gast-Ebene)              | **RA** |              |
| Implementierung einer **Metriken- und Alarmierungslösung** für gehostete Anwendungen                   | **RA** |              |

---

## Zugriffs- & Identitätsverwaltung

| Aufgabe                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Sicherstellung des Zugriffs auf die **Cloud Temple Konsole** und die API                                    |        | **RA**       |
| Verwaltung der **Berechtigungen** der Cloud Temple-Teams für die SecNumCloud-zertifizierte Infrastruktur          |        | **RA**       |
| Verwaltung der Zugriffsrechte auf die **Cloud Temple Konsole** (Benutzer, Rollen, IAM)                        | **RA** |              |
| Verwaltung der Zugriffe **innerhalb der Instanzen** (OS-Konten, SSH-Schlüssel, Bastion)                              | **RA** |              |
| Konfiguration einer **externen Authentifizierungsquelle** (SSO, LDAP) für die Konsole                  | **RA** | **C**        |

---

## Protokolle (Logs)

| Aktivität                                                                                               | Kunde | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|-------|--------------|
| **Plattformprotokolle** der VM-Instanzen speichern und bereitstellen *(8)*                            |       | **RA**       |
| **System- und Anwendungsprotokolle** der Instanzen sammeln, speichern und analysieren                  | **RA** |              |

*(8) Die Aufbewahrungsfrist für die Plattformprotokolle ist in der Servicevereinbarung für VM-Instanzen festgelegt.*

---

## Dokumentation & Vertragliches

| Tätigkeit                                                                                               | Kunde | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Übernahme des kommerziellen und vertraglichen Managements (Angebote, Bestellungen, Rechnungsstellung)                        | **I**  | **RA**       |
| Überwachung des Vertragsfortschritts der Dienstleistung (Lieferungen, Rechnungsstellung)                                | **RA** | **I**        |
| Sicherstellung der Pflege und Verfügbarkeit der technischen Dokumentation des Dienstes                    | **I**  | **RA**       |
| Aktualisierung der **CMDB** für die in seinem Tenant bereitgestellten Instanzen                              | **RA** |              |
| Aktualisierung der Zugriffsrichtlinie für die Konsole und die API                                          | **RA** |              |

---

## Rückübertragbarkeit

| Aktivität                                                                                               | Kunde | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|-------|--------------|
| Das Rückübertragbarkeitsprojekt planen und die Ziel-Infrastrukturen festlegen                             | **RA** | **I**        |
| Daten und Instanz-Images über die API oder die bereitgestellten Tools exportieren                   | **RA** | **I**        |
| Rückbau der Konfigurationen nach Vertragsbeendigung durchführen                              | **I**  | **RA**       |
| Sichere Löschung der Daten auf den Speichermedien durchführen und eine Löschbescheinigung ausstellen     | **I**  | **RA**       |

---

> *Professionelle Dienstleistungen stehen zur Verfügung, wenn Sie die als Kundenverantwortung aufgeführten Aufgaben ganz oder teilweise delegieren möchten. Wenden Sie sich an Ihren Cloud Temple-Vertriebspartner.*