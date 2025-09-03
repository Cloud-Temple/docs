---
Titel: Gute Praktiken
---

*Letzte Aktualisierung: 22.05.2025*

## Empfehlungen zur sicheren Nutzung von Cloud Temple's Dienstleistungen

Die Cloud Temple bietet eine hochgesichertes Infrastruktur durch Design, jedoch liegen bestimmte Sicherheitsbest Practices in Ihrer Verantwortung als Nutzer dieser Dienste. Dieses Dokument hilft Ihnen, die Sicherheit Ihres Cloud-Umfelds zu verbessern, indem es die Funktionen der Konsole nutzt.

Sie finden hier praktische Empfehlungen für:

- Schutz des Zugriffs auf die Cloud-Konsole;
- Management der Zugriffe und Berechtigungen effektiv;
- Sicherung der von unseren Cloud-Diensten bereitgestellten Ressourcen.



## Zugriff auf die Konsole

Der Zugriff auf die Konsole ist der Eingangspunkt zu Ihrem gesamten Cloud-Tempel-Ökosystem. Daher ist es von entscheidender Bedeutung, ihn sicherzustellen, dass er effektiv geschützt wird.

### Einschränkung des Zugriffs auf die Konsole durch IP-Filtern

Der Zugriff auf die Cloud-Management-Konsole wird auf vorab autorisierte IP-Adressen beschränkt. Diese Regelung ermöglicht den Zugang nur für Benutzer aus spezifischen IP-Adresseinheiten, was die Risiken von unbefugtem Zugriff minimiert.

Sie können diese Einschränkungen in den Organisationsrichtlinien konfigurieren. Weitere Informationen zur Konfiguration des IP-Filtrierens finden Sie in der [Verwaltung der Zugriffssteuerung und Authentifizierung | Cloud Temple Dokumentation](../../console/iam/quickstart#verwaltung-von-zugriffen-und-authentifizierung).

Um die Effizienz dieses Mechanismus zu maximieren, beachten Sie bitte:

- **Die Anzahl der zulässigen IP-Adressen** auf das absolut Notwendige zu beschränken;
- Vermeiden Sie zu große oder allgemeine Platten;
- Fügen Sie nur IP-Adressen von kontrollierten Umgebungen hinzu (z.B. IP-Adresse des Ausgangsnetzes Ihres Unternehmens);
- Einschränken oder beschränken Sie die IP-Adressen einzelner Benutzer (z.B. öffentliche IP-Adresse eines Heimcomputers) auf das absolut Notwendige;
- Einschränken oder beschränken Sie die IP-Adressen von Dritten (z.B. Dienstleister);
- Halten Sie diese Liste aktuell, falls sich Ihre Netzwerkinfrastruktur ändert.

Für den Zugang aus dem Homeoffice oder über externe Dienste (z.B. Remote-Arbeit, Cloud-Dienste) bevorzugen Sie eine Verbindung über Ihr Unternehmensnetzwerk via VPN anstelle direkter Autorisierung von IP-Adressen einzelner Benutzer. Dies reduziert die Ausweitung der Konsole und vereinfacht die Zugangskontrolle innerhalb Ihres Unternehmens.

### Verwenden der Identitätsverwaltungsfederation

Die Identitätsverwaltungsfederation ermöglicht die Integration der Console Cloud Temple mit Ihrem Identity Provider (IdP), indem Sie Single Sign-On (SSO) aktivieren. Diese Methode bietet eine zentrale Authentifizierung und bringt mehrere Vorteile:

- Zentralisierte Benutzerverwaltung: Erstellung, Änderung und Löschung von Konten über Ihren Adressserver;
- Reduzierte Angriffsfläche: Die lokalen Konten werden obsolet oder eingeschränkt;
- Erhöhte Transparenz: Zugriffe werden durch Ihr IdP protokolliert;
- Erhöhte Integration: Multi-Factor-Authentifizierung (MFA), Warnungen, Sicherheitskontextpolitiken usw.;
- Einfache Konformität: Konsistenz mit Ihren internen Praktiken.

Aufgrund dieser Vorteile wird **die Identitätsverwaltungsfederation empfohlen**, insbesondere für Umgebungen mit großem Personal oder hohen Sicherheitsanforderungen.

Befolgen Sie unsere Schritt-für-Schritt-Anleitungen zur Integration Ihres Identity Providers:

- [Konfiguration der Identitätsverwaltungsfederation mit Azure AD | Dokumentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Konfiguration der Identitätsverwaltungsfederation mit ADFS | Dokumentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Aktivieren der Mehrfaktor-Authentifizierung (MFA)

Die Mehrfaktor-Authentifizierung (MFA) erhöht die Sicherheit beim Zugriff auf die Cloud-Console "Tempel des Königs". Sie führt eine zusätzliche Authentifizierungsstufe hinzu, indem sie einen temporären Code erfordert, der von einer speziellen Anwendung generiert wird, neben dem Passwort. Diese Maßnahme reduziert die Risiken von unbefugtem Zugriff erheblich, selbst bei einem Diebstahl der Identifikatoren.

Für Konten, die lokal durch die Cloud-Console verwaltigt werden (ohne Federierung), wird MFA standardmäßig aktiviert und kann nicht deaktiviert werden.

**Für federierte Konten ist es dringend empfohlen, den Auftrag des Anbieters der Identitätsverwaltung zu verlangen, MFA am Kundenseite durchzuführen**, insbesondere für Administratoren mit Zugriff auf die Cloud-Console.

Weitere Informationen:

- [Was ist MFA und ist es verpflichtend? | Dokumentation von Cloud Temple](../../console/iam/quickstart#was-ist-mfa-und-ist-es-verpflichtend)
- [Schulung: Federierung der Identität mit Microsoft Intune | Dokumentation von Cloud Temple](../../console/iam/tutorials/sso_intune)
- [Schulung: Federierung der Identität mit Okta | Dokumentation von Cloud Temple](../../console/iam/tutorials/sso_okta)

### Zugang zur Konsole aus sichernen Umgebungen

Die von Ihnen genutzten Anschlüsse und der von Ihnen betriebene Umfeld sind entscheidend für die Sicherung der Administration Ihrer Cloud-Dienste. Wenn Sie in einem Umfeld mit hohen Sicherheitsanforderungen arbeiten, sollten Sie die folgenden Empfehlungen beachten:

- Für die Selbstverwaltung durch Ihre eigenen Teams, befolgen Sie bitte vollständig oder teilweise die [Sicherheitsverfahren für die Verwaltung von IT-Systemen | Bundesamt für Sicherheit im Internet (BSI)](https://www.bsi.de/EN/Topics/A_Security/IT_Security_Guides/Security_Guidelines_for_IT_Systems_en.html);
- Bei der Verwaltung durch einen Dritten sollten Sie die Möglichkeit prüfen, einen [Sicherer Administrationspartner (PAM) zu beauftragen | BSI](https://www.bsi.de/EN/Topics/A_Security/IT_Security_Guides/Security_Guidelines_for_IT_Systems_en.html), abhängig von der Empfindlichkeit der gehosteten Ressourcen und Ihrem rechtlichen sowie regulatorischen Kontext.

### Sensibiliser die Administratoren an Phishing-Risiken

Die Zugriffe auf die Cloud-Console von Cloud Temple sollten mit besonderer Vorsicht genommen werden, insbesondere gegenüber Versuchen, durch Phishing Identifikatoren oder MFA-Codes zu erpressen. Es ist entscheidend, dass berechtigte Benutzer regelmäßig über die Risiken informiert werden: systematische Überprüfung der URL, Vorsicht vor unerwarteten Nachrichten und sofortiges Melden von verdächtigen Aktivitäten.

Um diese Risiken zu minimieren, empfehlen wir, niemals über E-Mail empfangene Links zur Console zu nutzen, sondern immer die bekannten URL manuell einzugeben.

Diese guten Praktiken obliegen Ihnen als Kunde und sind unerlässlich, um Phishing-Angriffe zu verhindern. Bei Zweifeln steht der Cloud-Tempel-Support für Sie zur Verfügung.

### Verwaltung von Cloud-Diensten

Ihre Cloud-Ressourcen werden aus der Konsole verwaltet. In diesem Kapitel stellen wir Ihnen wichtige Empfehlungen zur Kontrolle der Betriebsführung von Cloud-Diensten vor.

### Identifizierung der Eigentümer

Der Eigentümer eines Tenants besitzt alle Zugangsrechte zu aktivierten Produkten und erhält offizielle Benachrichtigungen. Es ist entscheidend, sicherzustellen, dass die Eigentümer Ihres Tenants die richtigen Ansprechpartner innerhalb Ihrer Organisation sind.

Für eine sichere und effiziente Verwaltung:

- **Einen verantwortlichen Eigentümer identifizieren**, idealerweise jemanden, der direkt in die Verwaltung des Umfelds involviert ist.
- **Die Kontaktdaten des Eigentümers** überprüfen, um sicherzustellen, dass sie gültig und regelmäßig genutzt werden.
- **Ein direkter Zugang durch die Hinzufügung eines Organisationsmitglieds als Eigentümer** gewährleisten, selbst wenn Sie die Verwaltung Ihres Cloud-Dienstes an einen externen Dienstleister übertragen, um wichtige Entscheidungen und Benachrichtigungen zu kontrollieren.
- **Die Anzahl der Eigentümer auf 3 begrenzen**, um die Exposition zu reduzieren und den Audit von kritischen Handlungen zu erleichtern.

Weitere Informationen zur Verwaltung von Eigentümern finden Sie im [Guide zum Eigentum eines Tenants | Cloud Temple-Dokumentation](../../console/iam/concepts#besitzverwaltung-auf-einem-tenant).

### Verwaltung von Zugriffsrechten auf Ihren Cloud-Diensten

Die Cloud-Tempel-Konsole ermöglicht eine präzise Verwaltung der Zugriffsrechte, indem jedem Benutzer ein oder mehrere Zugangsniveaus zugewiesen werden, die bestimmen, welche Aktionen autorisiert sind. Weitere Informationen zu den verfügbaren Rechten ([Zugriffsrechte für Benutzer Ihrer Organisation | Konfigurationsrichtlinien Cloud Temple](../../console/iam/concepts#berechtigungen-für-benutzer-in-ihrer-organisation)) finden Sie in der Dokumentation.

Für eine effiziente und sichere Verwaltung der Zugriffsrechte empfehlen wir folgende Best Practices:

- **Anwendungs des Prinzips der geringsten Privilegien:** Geben Sie den Benutzern nur die Rechte zu, die für ihre Aufgaben unbedingt erforderlich sind. Dies reduziert Risiken, indem der Zugriff auf nicht notwendige Funktionen eingeschränkt wird.
- **Sensiblen Rechten beschränken:** Vergeben Sie sensible Rechte nur an die Benutzer, die für diese Funktionen verantwortlich sind. Sensible Rechte beziehen sich insbesondere auf die Zugangskontrolle (console_public_access_write, *_console_access, object - storage_write), die Berechtigungenverwaltung (iam_write, iam_offline_access) und die Backup-Verwaltung (backup_iaas_opensource_write, backup_iaas_spp_write).
- **Lesendes Alleingeben:** In Zweifelsfällen geben Sie ein Lesendes Alleingeben (*_read) an, um Risiken zu minimieren und gleichzeitig den Zugriff auf notwendige Informationen zu ermöglichen.
- **Regelmäßige Überprüfung der Rechte:** Überprüfen Sie regelmäßig die Rechte der Benutzer, um abgeschaffte Rechte zu entfernen. Die Exportierung der Rechte in CSV-Format erleichtert diese Verwaltung.

Eine sorgfältige Zugriffsrechtszuweisung verringert das Risiko von Fehlern oder bösartiger Handlung, während sie die Sicherheitsposition stärkt.

### Regelmäßige Aktualisierung der Hypervisor

Cloud Temple bietet regelmäßig Updates für die Hypervisor, um sicherzustellen, dass Sicherheitslücken geschlossen werden. Die Aktualisierung der Hypervisor liegt jedoch in Ihrer Verantwortung, da wir keine Einblicke in Ihre Geschäftskonfiguration haben.

Daher empfehlen wir Ihnen:

- **Regelmäßig die verfügbaren neuen Builds für Ihre Hypervisor in der Konsole zu überprüfen**;
- **Regelmäßig die neuen Builds auf allen Ihrer Hypervisor auszuführen**, insbesondere wenn sie Sicherheitslücken schließen;
- **Regelmäßig auf Ihren virtuellen Maschinen die neuesten Versionen der vmtools auszuführen**.

Eine Seite mit Sicherheitswarnungen steht zur Verfügung, um Sie über bekannte Schwachstellen und Empfehlungen zu informieren: [Sicherheitswarnungen | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Verfolgen der Cloud-Aktivitäten

Um eine effektive Überwachung Ihres Cloud-Umfelds durchzuführen und schnell auf Anomalien reagieren zu können, ist es entscheidend, eine Strategie für aktive Alarmsysteme einzurichten. Wir empfehlen Ihnen:

- **Überwachen Sie die Verfügbarkeit der Dienste** über die [Statusseite | Cloud Temple](https://status.cloud-temple.com/), um im Falle von Störungen oder großflächigen Ausfällen benachrichtigt zu werden;
- **Themenüberwachungen aktivieren**, die für Ihren Einsatz relevant sind, aus der Konsole, um relevante Erinnerungen in Echtzeit zu erhalten (siehe [Abonnement auf Themenüberwachungen | Dokumentation Cloud Temple](../../console/iam/concepts#abonnement-an-die-themen-updates)) ;
- **Die Aktivitätslogs des Cloud** nutzen, um verdächtige oder ungewöhnliche Aktionen auf Ihren Ressourcen zu identifizieren (siehe Abschnitt "Journalisierung - Überwachung von Aktivitäten" im [Einstiegsleitfaden | Dokumentation Cloud Temple](../../iaas_vmware/quickstart)). Die Sammlung und Analyse der Aktivitätslogs kann automatisiert über die API-Konsole erfolgen, um die Ereignisse in Ihre Tools zur Überwachung oder Erkennung von Ausfällen zu integrieren.

## Sicherung von gehosteten Ressourcen

In einem Cloud-Modell liegt die Verantwortung für die Sicherung der von Ihnen bereitgestellten Ressourcen bei Ihnen selbst. Cloud Temple bietet eine sichere Infrastruktur, aber es ist Ihre Aufgabe, Ihre Betriebssysteme, Daten und Konfigurationen zu schützen.

Sie finden hier die grundlegenden Best Practices zur Stärkung der Sicherheit Ihrer VMs: Konfiguration von Backup-Politiken, Verschlüsselung kritischer Ressourcen sowie Hardening der Betriebssysteme. Diese Maßnahmen tragen dazu bei, das Risiko eines Angriffs zu minimieren, die Integrität der Daten zu gewährleisten und eine Kontinuität im Falle eines Incidents sicherzustellen.

### Sichern von Daten - Datensicherung konfigurieren

Um die Sicherheit und Widerstandsfähigkeit Ihrer Daten zu gewährleisten, ist es unerlässlich, Ihre Datensicherungsrichtlinien korrekt festzulegen und anzuwenden. Die Zuweisung einer Datensicherungsrichtlinie auf jede virtuellen Maschine vor ihrem Start ist Pflicht. Weitere Informationen finden Sie in der Abschnitt "Datensicherung" des [Startgültige Anleitung | Dokumentation Cloud Temple](../../iaas_vmware/quickstart).

Hier sind die Empfehlungen zur Verwaltung von Datensicherungsrichtlinien für Ihre Cloud Temple Ressourcen:

- **Richtlinien definieren:** Lassen Sie uns von unserem Support spezielle Datensicherungsrichtlinien erstellen, die den Sicherheitsanforderungen Ihrer Organisation entsprechen.
- **Vermeiden Sie suspendierte Richtlinien:** Stellen Sie sicher, dass keine VM mit einer suspendierten Datensicherungsrichtlinie verbunden ist, um unbeabsichtigte Datenverletzungen zu vermeiden.
- **Testen Sie die Wiederherstellung:** Testen Sie regelmäßig die Wiederherstellung Ihrer Backups, um die Effizienz Ihrer Wiederherstellungsverfahren zu überprüfen.

### Encrypting Sensitive VMs

In addition to encrypting data at the disk level, native for all cloud resources, **encrypting virtual machines (VMs) can be enabled to safeguard your most sensitive resources**. For more information, refer to [Encrypting a VMware Machine | Cloud Temple Documentation](../../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Here are some best practices when using VM encryption:

- Enable encryption on sensitive VMs: Apply it during VM creation or planned updates. The process requires temporarily stopping the VM;
- Verify encryption status: Confirm from the console that the VM displays "encrypted" status correctly;
- Backup before encryption: Ensure the VM is properly backed up prior to any modifications.

### Begrenzen der Auskunftserstattung Ihrer Ressourcen

Um die Angriffsfläche Ihrer virtuellen Maschinen zu reduzieren, ist es empfehenswert, die bereitgestellten Dienste auf das Notwendige zu beschränken. Insbesondere sollten Sie sicherstellen, dass Ihre Ressourcen so konfiguriert sind, **dass keine Admin-Interfaces und Konsolen der Systeme und Anwendungen öffentlich zugänglich sind**.

Wenn Sie die Cloud Storage Object Services von Cloud Temple verwenden, ist es ratsam, **die Buckets nicht öffentlich zu konfigurieren**, außer in den Fällen, in denen dies absolut notwendig ist (weitere Informationen finden Sie in der Dokumentation zur Verwaltung von Zugriffsrechten für S3 | Cloud Storage Object Services).

### Hardening Virtual Machines (IaaS)

Hosting virtual machines on a secure cloud does not inherently ensure the security of the operating system, services, or applications they run. Hardening virtual machines, whether self-managed or sourced from a catalog, falls under your responsibility.

We recommend you to **apply basic security measures**:

- Keep systems updated with security patches;
- Limit exposed services;
- Disable unnecessary components;  
- Restrict access rights to the minimum necessary;
- Enable access logging;
- Configure regular backups.

To guide you through these actions, refer to:

- Security hardening guides provided by software vendors you use;
- [Essential Guides and Cybersecurity Best Practices | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [CIS Benchmarks® Security Guides | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

These practices form the first line of defense for securing your systems in the cloud.

### Hardening Container (Security Enhancements for PaaS Services)

To ensure the security of your containers within the OpenShift Platform-as-a-Service (PaaS), we recommend implementing the following measures to strengthen their hardening:

- **Image Sources**: Ensure that all images originate from trusted sources, such as internal registries or the Red Hat Container Catalog, and avoid using unverified community images available on public Docker Hub.
- **Privilege Restriction**: Utilize OpenShift's security features, including *Security Context Constraints* (SCC), to limit container permissions strictly to what is necessary.
- **Custom SCC Configuration**: Create tailored SCCs for each application or group of applications. This includes restricting allowed system calls via *seccomp profiles*, with specific configurations like the prohibition of *ptrace* or *mount* to minimize the risk of container escape attacks.
- **Workload Isolation**: Leverage *Namespaces* and *Network Policies* to isolate workloads and limit unnecessary interactions between containers.
- **Comprehensive Logging**: Activate logging via OpenShift's Operator for OpenShift Logging to capture events related to containers and hosted systems, enhancing the detection and analysis of suspicious activities.

## Weitere Informationen

Wenn Sie zusätzliche Sicherheitsdienste oder einen verstärkten Sicherheitsbegleitung in Bezug auf Aspekte wie Audit, Hardening, Compliance, Beratung usw. benötigen, können unsere **Professional Services** für Sie da sein. Weitere Informationen erhalten Sie bei Ihrem Cloud Temple-Ansprechpartner.
