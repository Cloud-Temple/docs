---
title: Konzepte
---

## Einführung

Managed Firewall ist ein vollständig verwalteter Cluster aus Next-Generation-Firewalls (NGFW). Er übernimmt die Filterung des Nord-Süd-Datenverkehrs (zwischen dem Internet und Ihren Ressourcen) und des Ost-West-Datenverkehrs (zwischen Ihren internen Segmenten), die Intrusion Prevention, die Anwendungsinspektion sowie die VPN-Konnektivität zu Ihren entfernten Standorten und mobilen Benutzern.

Der Dienst ist in zwei Editionen verfügbar:

- **Stormshield-Edition**: Lösung eines französischen Herstellers, geeignet für Organisationen, die technologische Souveränität über ihre Sicherheitsausrüstung anstreben;
- **Fortinet-Edition**: geeignet für Organisationen, die sich auf das Fortinet-Ökosystem (SD-WAN, ZTNA, Security Fabric) stützen oder es in ihre bestehenden Infrastrukturen integrieren möchten.

In beiden Editionen umfasst der Dienst den Aktiv/Passiv-Hochverfügbarkeitscluster, den operativen Betrieb (Aufrechterhaltung der Betriebsbereitschaft, 24/7-Überwachung, Aktualisierung der Signaturen) und die VPN-Funktionen.

### Zielgruppen und Anwendungsfälle

Managed Firewall richtet sich an CISOs und Sicherheitsteams, an IT-Abteilungen, die eine On-Premise-Firewall erweitern oder ersetzen, und an DevOps-Teams, die eine dedizierte Firewall vor ihren Anwendungsclustern benötigen. Typische Anwendungsfälle:

- **Cloud-Sicherheitsperimeter**: Filterung des ein- und ausgehenden Datenverkehrs Ihrer Ressourcen (virtuelle Maschinen, Kubernetes-Cluster, Datenbanken).
- **Site-to-Site-VPN (IPsec)**: verschlüsselte Verbindung zwischen Ihren Cloud-Ressourcen, Ihren On-Premise-Rechenzentren, Ihren Niederlassungen und Ihren Partnern.
- **Fernzugriff (SSL-VPN)**: verschlüsselter, per MFA authentifizierter Zugriff auf interne Ressourcen für mobile Mitarbeitende.
- **Mikrosegmentierung**: Isolierung der Netzwerksegmente (DMZ, Produktion, Entwicklung, Datenbanken) mit Filterregeln zwischen den Segmenten.
- **Anwendungsinspektion und Intrusion Prevention**: Kontrolle der Anwendungen, die die Firewall passieren, und Blockierung von Versuchen, Schwachstellen auszunutzen.
- **SD-WAN und ZTNA (Fortinet-Edition)**: Verwaltung mehrerer WAN-Verbindungen mit automatischem Failover sowie Anwendungszugriff auf Basis der Identität und des Gerätezustands (Posture).

## Vorteile

| Vorteil                      | Beschreibung                                                                                                                                             |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Betrieb übernommen           | Bereitstellung, Hochverfügbarkeit, Updates (Firewall-System, IPS-Signaturen, URL-Datenbanken) und Überwachung werden für Sie übernommen.                  |
| Wahl des Herstellers         | Sie wählen die Stormshield- oder die Fortinet-Edition entsprechend Ihren Souveränitätsanforderungen und Ihrem bestehenden Ökosystem.                      |
| Hochverfügbarkeit            | Der Aktiv/Passiv-Cluster schaltet bei Ausfall eines Knotens automatisch auf den zweiten Knoten um.                                                        |
| Mehrschichtiger Schutz       | Zustandsbehaftete L3/L4-Filterung, L7-Anwendungskontrolle, IPS/IDS, Webfilterung und Antivirus sind in einem einzigen Dienst vereint.                     |
| Integriertes VPN             | Site-to-Site-IPsec-VPN und SSL-VPN sind enthalten, ohne zusätzliche VPN-Infrastruktur.                                                                   |
| Bedrohungsinformationen      | IPS-Signaturen, URL-Datenbanken und Kompromittierungsindikatoren werden automatisch aus den Quellen des Herstellers aktualisiert.                         |
| Skalierbarkeit               | Sie können ohne Neugestaltung der Architektur auf ein höheres Modell wechseln, wobei die Konfiguration übernommen wird.                                    |

## Funktionen

### Gemeinsame Funktionen beider Editionen

| Funktion                           | Beschreibung                                                                                                                                                 |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Zustandsbehaftete Firewall (L3/L4) | Filterung nach Quell- und Ziel-IP-Adresse, TCP/UDP-Port und Protokoll, mit Verfolgung des Sitzungszustands.                                                  |
| Anwendungskontrolle (L7)           | Erkennung und Kontrolle von mehr als 3.000 Anwendungen, unabhängig vom verwendeten Port: Zulassen, Blockieren oder Begrenzen je Anwendung.                    |
| Intrusion Prevention (IPS/IDS)     | Erkennung und Blockierung von Versuchen, Schwachstellen auszunutzen: Angriffssignaturen, Protokollanomalien, virtuelle Patches (Virtual Patching).           |
| Webfilterung                       | Kategorisierung und Filterung von URLs, Blockierung bösartiger und Phishing-Websites, DNS-Filterung, Durchsetzung von SafeSearch.                            |
| SSL/TLS-Inspektion                 | Entschlüsselung und Inspektion des HTTPS/TLS-Datenverkehrs, anschließend transparente erneute Verschlüsselung. Ausnahmen können definiert werden (Banken, Gesundheitswesen, interne Zertifikate). |
| Antivirus                          | Analyse von Dateien bei der Übertragung über HTTP, FTP, SMTP, IMAP und POP3.                                                                                  |
| Site-to-Site-IPsec-VPN             | Mit AES-256-GCM verschlüsselte IKEv2-Tunnel mit Perfect Forward Secrecy, Authentifizierung per Zertifikat oder Pre-Shared Key, routenbasiertes VPN (VTI), Dead Peer Detection. |
| SSL-VPN                            | Fernzugriff im Full-Tunnel- oder Split-Tunnel-Modus, MFA-Authentifizierung (TOTP mit LDAP oder Active Directory), Webportal oder nativer Client.            |
| Hochverfügbarkeit                  | Aktiv/Passiv-Cluster mit Synchronisierung der Sitzungen und Konfigurationen sowie automatischem Failover.                                                    |
| NAT/PAT                            | Übersetzung von Quell- und Zieladressen, um Dienste kontrolliert bereitzustellen und den Internetverkehr zu verwalten.                                       |
| Protokollierung                    | Protokolle der zugelassenen und blockierten Datenflüsse, der IPS-Ereignisse, der VPN-Verbindungen und der Benutzersitzungen, exportierbar in ein SIEM.        |

### Spezifische Funktionen der Fortinet-Edition

| Funktion                      | Beschreibung                                                                                                                                                       |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SD-WAN                        | Verwaltung mehrerer WAN-Verbindungen mit automatischem Failover, anwendungsbasierter Lastverteilung und Überwachung der Verbindungsqualität (Verlust, Latenz, Jitter). |
| ZTNA                          | Anwendungszugriff auf Basis der Benutzeridentität und des Gerätezustands (FortiClient), mit kontinuierlicher Überprüfung der Gerätekonformität.                    |
| Virtual Domains (VDOM)        | Aufteilung der Firewall in logisch isolierte Instanzen auf demselben Cluster, um Umgebungen oder Organisationseinheiten zu trennen.                                 |
| FortiGuard-Dienste            | Bedrohungsinformationen: URL-Datenbank (mehr als 175 Kategorien), IPS- und Antivirus-Signaturen, IP-Reputation, DNS-Filterung, Anti-Botnet.                        |
| Security-Fabric-Integration   | Integration in das Fortinet-Ökosystem (FortiAnalyzer, FortiManager, FortiSIEM, FortiEDR).                                                                          |
| Anti-Spam                     | Filterung des E-Mail-Verkehrs (SMTP, IMAP, POP3) gegen Spam und bösartige E-Mails.                                                                                 |

### Spezifische Funktionen der Stormshield-Edition

| Funktion                               | Beschreibung                                                                                                                   |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| ASQ-Protokollanalyse                   | Inspektions-Engine, die über Signaturen hinaus die Konformität der Netzwerkprotokolle mit den RFCs prüft.                      |
| Integration von Stormshield Data Security | Kompatibilität mit Stormshield Data Security für die Verschlüsselung von Daten auf Datei- und E-Mail-Ebene.                 |
| Stormshield Management Center          | Zentrale Verwaltungskonsole für die Sicherheitsrichtlinien.                                                                    |
| Bedrohungsinformationen                | Regelmäßige Aktualisierung der IPS-Signaturen, bösartigen URLs und Kompromittierungsindikatoren durch den Hersteller.           |

### Administration und Überwachung

- **Richtlinienverwaltung**: Jede Änderung (Filterregel, VPN-Konfiguration) erfordert einen formalisierten Änderungsantrag, der vom Betriebsteam des Dienstes bearbeitet wird.
- **Oberfläche des Herstellers**: Ein Zugang zur Weboberfläche des Herstellers kann zur Einsicht in Protokolle und Richtlinien angeboten werden.
- **Überwachung**: vorkonfigurierte Dashboards (Datenverkehr je Schnittstelle, aktive Sitzungen, IPS-Blockierungsrate, VPN-Bandbreite, Hochverfügbarkeitsstatus, CPU und Arbeitsspeicher).
- **Warnmeldungen**: vorkonfigurierte Warnmeldungen (Knoten nicht verfügbar, VPN-Tunnel unterbrochen, ungewöhnliche Verkehrsspitze, Angriffserkennung, Sitzungssättigung).
- **Protokollexport**: Syslog (TCP/TLS), CEF oder LEEF an Ihr SIEM oder das eines Dritten.

## Architektur

Der Dienst basiert auf einem Cluster aus zwei Knoten im Aktiv/Passiv-Modus. Der aktive Knoten übernimmt Filterung, Inspektion und VPN-Gateway; der passive Knoten bleibt synchronisiert (Sitzungen, Konfiguration, Routingtabellen) und übernimmt bei einem Ausfall den Datenverkehr.

Der Cluster befindet sich zwischen Ihren externen Zugängen (Internet, WAN, entfernte Standorte, mobile Benutzer) und Ihren gehosteten Ressourcen, die er in gefilterten Netzwerkzonen schützt.

Der Dienst umfasst:

- **den Hochverfügbarkeitscluster** aus zwei Knoten;
- **die Signaturverwaltung**: automatische Aktualisierung der Datenbanken für IPS, URL-Filterung, Antivirus und Bedrohungsinformationen;
- **die Überwachung** des Clusterzustands, der aktiven Sitzungen, der VPN-Tunnel und der Leistungsmetriken;
- **die Administration** der Firewall durch das Betriebsteam des Dienstes.

### Integrationen

- **VPC**: Die Firewall wird als Sicherheitsgateway zwischen den Netzwerkzonen Ihrer VPC eingefügt.
- **Private Backbone**: Filterung der Datenflüsse zwischen Verfügbarkeitszonen und zwischen Standorten.
- **Managed Kubernetes**: dedizierte Firewall vor den verwalteten Kubernetes-Clustern.
- **Bastion**: nachverfolgbarer administrativer Zugriff auf die Konsolen der Firewall.
- **SIEM**: Export der Datenflussprotokolle, IPS-Ereignisse und VPN-Verbindungen an Ihr SIEM oder das eines Dritten.
- **Geräte von Drittanbietern**: IPsec-VPN kompatibel mit allen Geräten, die IKEv2 unterstützen; SSL-VPN-Authentifizierung über Active Directory, LDAP oder RADIUS, mit TOTP.

## Regionen und Verfügbarkeitszonen

Managed Firewall ist in der Region FR1 verfügbar. Die Infrastruktur und die Konfigurationsdaten werden ausschließlich in Frankreich gehostet.

## Technische Spezifikationen

### Modelle der Stormshield-Edition

Jedes Modell entspricht einem vollständigen Hochverfügbarkeitscluster aus zwei Knoten.

| Modell | vCPU | RAM  | Max. SSL-VPN-Benutzer    | Max. IPsec-Tunnel |
|--------|------|------|--------------------------|-------------------|
| EVA1   | 1    | 2 GB | 50                       | 100               |
| EVA2   | 2    | 3 GB | 512                      | 150               |
| EVA3   | 4    | 6 GB | 512                      | 200               |

### Modelle der Fortinet-Edition

Jedes Modell entspricht einem vollständigen Hochverfügbarkeitscluster aus zwei Knoten.

| Modell | vCPU | Enthaltene VDOMs |
|--------|------|------------------|
| VM02V  | 2    | 1                |
| VM04V  | 4    | 1                |
| VM08V  | 8    | 1                |

Eine Option fügt 5 VDOMs hinzu. Jede VDOM verfügt über eigene Sicherheitsrichtlinien, Routingtabellen, Netzwerkschnittstellen und Protokolle.

### Gemeinsame Parameter

| Parameter                  | Wert                                                      |
|----------------------------|-----------------------------------------------------------|
| Hochverfügbarkeitsmodus    | Aktiv/Passiv (Aktiv/Aktiv auf Anfrage)                    |
| IPsec-VPN                  | IKEv2 (kompatibel mit IKEv1)                              |
| VPN-Verschlüsselung        | AES-256-GCM, AES-128-GCM                                  |
| VPN-Integrität             | SHA-256, SHA-384, SHA-512                                 |
| Perfect Forward Secrecy    | Mindestens DH-Gruppe 14 (2.048 Bit), bis zu Gruppe 21 (ECDH P-521) |
| VPN-Authentifizierung      | X.509-Zertifikate oder Pre-Shared Key                     |
| SSL-VPN-Verschlüsselung    | TLS 1.3 (mindestens TLS 1.2)                              |
| Verschlüsselung der Administration | TLS 1.3                                           |
| Protokollierung der Datenflüsse | Alle Sitzungen, konfigurierbares Volumen             |

### Grenzen

- Die Filterregeln werden vom Betriebsteam des Dienstes in Abstimmung mit Ihnen über den Änderungsantragsprozess verwaltet.
- Ein direkter Zugriff auf die Befehlszeile der Firewall (SSH oder Konsole) wird standardmäßig nicht bereitgestellt.
- Die Stormshield-Modelle haben eine durch die Lizenz festgelegte maximale Anzahl an SSL-VPN-Benutzern und IPsec-Tunneln: Darüber hinaus ist ein Wechsel auf ein höheres Modell erforderlich.
- Der Aktiv/Aktiv-Modus (Verteilung der Sitzungen) ist auf Anfrage verfügbar; der Standardmodus ist Aktiv/Passiv.

## Sicherheit und Compliance

Managed Firewall ist nach HDS und ISO 27001 zertifiziert.

- **Verschlüsselung bei der Übertragung**: AES-256-GCM für VPNs (IKEv2, SSL-VPN), TLS 1.3 für die Administration.
- **Verschlüsselung im Ruhezustand**: Die Protokolle werden verschlüsselt.
- **Änderungs-Governance**: Jede Änderung der Sicherheitsrichtlinie folgt einem dokumentierten und nachvollziehbaren Änderungsprozess.
- **Nachverfolgbarkeit**: Alle Administrationsvorgänge werden protokolliert (Urheber, Änderung, Datum).
- **Warnmeldungen**: Kritische Ereignisse (Eindringversuche, Schwellenwertüberschreitungen, Ausfall eines Knotens) lösen Warnmeldungen in Echtzeit aus.

## Sicherung und Kontinuität

- **Hochverfügbarkeit**: Der Aktiv/Passiv-Cluster synchronisiert Sitzungen, Konfigurationen und Routingtabellen und schaltet bei Ausfall eines Knotens automatisch um.
- **Unterbrechungsfreie Wartung**: Patches werden Knoten für Knoten eingespielt (Aktualisierung des passiven Knotens, Umschaltung, dann Aktualisierung des anderen Knotens), um die Kontinuität des Dienstes sicherzustellen.

## Versionen und Lebenszyklus

- **Fortinet-Edition**: FortiOS-Version gemäß den Empfehlungen des Herstellers, mit zwei geplanten Hauptaktualisierungen pro Jahr.
- **Stormshield-Edition**: neueste stabile Version, mit zwei geplanten Hauptaktualisierungen pro Jahr und Sicherheitspatches, die innerhalb von 15 Tagen eingespielt werden.
- **IPS-, Antivirus- und URL-Signaturen**: automatische tägliche Aktualisierungen oder Aktualisierungen in Echtzeit, je nach Abonnement beim Hersteller.
- **Supportende**: Sie werden 90 Tage vor dem Supportende einer Version benachrichtigt.

## Dienstverfügbarkeit

| Element                        | Verfügbarkeitsziel, gemessen über einen Monat |
|--------------------------------|-----------------------------------------------|
| Filterdienst (Cluster)         | 99,9 %                                        |
| Aufgebaute IPsec-VPN-Tunnel    | 99,9 %                                        |

## Reversibilität

Am Ende des Dienstes können Sie die folgenden Elemente abrufen:

| Exportiertes Element     | Liefergegenstand                                           | Bereitstellungsfrist        | Kosten     |
|--------------------------|------------------------------------------------------------|-----------------------------|------------|
| Konfiguration            | Vollständige Konfigurationsdatei der Firewall (Herstellerformat) | 15 Tage               | Kostenlos  |
| Protokolle               | Datenfluss- und Ereignisprotokolle (Syslog oder CEF)       | 30 Tage                     | Kostenlos  |
| VPN-Richtlinien          | Parameter der IPsec-Tunnel und des SSL-VPN                 | 15 Tage                     | Kostenlos  |
| Migrationsunterstützung  | Technischer Support für eine Bereitstellung auf einer anderen Infrastruktur | Auf Anfrage | Auf Angebot |

Die Konfigurationsdaten und Protokolle werden anschließend innerhalb von 7 Tagen sicher gelöscht.

## Preise

Managed Firewall wird monatlich pro Hochverfügbarkeitscluster aus zwei Knoten abgerechnet, einschließlich Herstellerlizenzen, Signaturen und Betrieb. Die Preise werden auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Managed Firewall — Preise](https://www.cloud-temple.com/produits/managed-firewall/).

## Bewährte Verfahren

- Wählen Sie die Edition entsprechend Ihren Anforderungen: Souveränität des Herstellers (Stormshield) oder SD-WAN-, ZTNA- und VDOM-Funktionen (Fortinet).
- Dimensionieren Sie das Modell nach der erwarteten Anzahl an SSL-VPN-Benutzern und IPsec-Tunneln, mit Spielraum für Wachstum.
- Exportieren Sie die Protokolle in Ihr SIEM, um Netzwerkereignisse mit Ihren anderen Sicherheitsquellen zu korrelieren.
- Nutzen Sie das Bastion für administrative Zugriffe, damit diese nachverfolgt werden.
