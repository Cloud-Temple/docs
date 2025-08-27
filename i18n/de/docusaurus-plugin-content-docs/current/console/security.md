---
title: Sicherheitsempfehlungen
---

## Empfehlungen für die sichere Nutzung der Cloud Temple-Dienste

Die Cloud Temple-Dienste bieten Ihnen eine Cloud-Infrastruktur mit Sicherheitsmechanismen von Grund auf. Dennoch liegen einige Sicherheitsmaßnahmen in Ihrer Verantwortung als Nutzer dieser Dienste. Dieser Leitfaden unterstützt Sie dabei, die Sicherheit Ihrer Cloud-Umgebung durch die in der Konsole verfügbaren Funktionen zu stärken.

Hier finden Sie konkrete Empfehlungen, um:

- Den Zugriff auf die Cloud-Konsole zu schützen;
- Zugriffe und Berechtigungen kontrolliert zu verwalten;
- Die über unsere Cloud-Dienste bereitgestellten Ressourcen abzusichern.

## Zugriff auf die Konsole

Der Zugang zur Konsole stellt den Einstiegspunkt zu allen Ihren Cloud Temple-Diensten dar. Es ist daher entscheidend, diesen Zugang wirksam zu sichern.  

### Zugriff auf die Konsole per IP-Filterung einschränken

Der Zugriff auf die Cloud-Verwaltungskonsole ist auf zuvor berechtigte IP-Adressen beschränkt. Diese Einschränkung erlaubt den Zugriff nur für Nutzer aus den angegebenen IP-Bereichen und minimiert so das Risiko unbefugten Zugriffs.

Sie können diese IP-Einschränkungen in den Einstellungen Ihrer Organisation konfigurieren. Informationen zur Einrichtung der IP-Filterung finden Sie unter [Gestion des accès et authentification | Documentation Cloud Temple](../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Um die Effektivität dieses Mechanismus zu maximieren, achten Sie bitte auf folgende Punkte:

- **Begrenzen Sie die Zahl der erlaubten IP-Adressen** auf das absolut Notwendige;
- Vermeiden Sie zu breite oder generische IP-Bereiche;
- Fügen Sie **nur IPs aus kontrollierten Umgebungen** hinzu (z. B. Ausgangsadresse Ihres Firmennetzwerks);
- Vermeiden oder begrenzen Sie Einzel-IP-Adressen so weit wie möglich (z. B. öffentliche IP von IT-Mitarbeitern im Homeoffice);
- Vermeiden oder beschränken Sie IP-Adressen Dritter (z. B. Dienstleister);
- Halten Sie die Liste aktuell, wenn sich Ihre Netzwerkinfrastruktur ändert.

Für Fernzugriffe (Homeoffice, Dienstleister…) bevorzugen Sie den Zugriff über Ihr Unternehmensnetzwerk via VPN, anstatt individuelle IP-Adressen direkt zu autorisieren. Dies reduziert die Angriffsfläche der Konsole und zentralisiert das Zugriffsmanagement innerhalb Ihrer Organisation.

### Identitätsföderation verwenden

Die Identitätsföderation ermöglicht die Integration der Cloud Temple-Konsole in Ihren eigenen Identitätsanbieter (IdP) durch Aktivierung von SSO. Dieser Ansatz zentralisiert die Authentifizierung und bietet mehrere Vorteile:

- Einheitliche Benutzerkontoverwaltung: Erstellung, Änderung und Löschung über Ihr Verzeichnis;
- Verringerung der Angriffsfläche: lokale Accounts werden überflüssig oder eingeschränkt;
- Erhöhte Nachvollziehbarkeit: Zugriffe werden durch Ihren IdP protokolliert;
- Verbesserte Integration: MFA, Alarme, kontextabhängige Sicherheitsrichtlinien …;
- Erleichterte Compliance: Konsistenz mit internen Richtlinien.

Daher wird **die Verwendung von Identitätsföderation empfohlen**, insbesondere in Umgebungen mit vielen Nutzern oder hohen Sicherheitsanforderungen.

Folgen Sie unseren Schritt-für-Schritt-Anleitungen zur Integration Ihres Identitätsanbieters:
- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../console/iam/tutorials/sso_aad)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../console/iam/tutorials/sso_adfs)

### Aktivieren der Multi-Faktor-Authentifizierung (MFA)

Die Multi-Faktor-Authentifizierung (MFA) erhöht die Zugriffssicherheit auf die Cloud Temple-Konsole erheblich. Neben dem Passwort wird ein temporärer Code verlangt, der von einer speziellen App generiert wird. Diese Maßnahme reduziert das Risiko unbefugten Zugriffs auch bei gestohlenen Anmeldedaten deutlich.

Für lokal über die Konsole verwaltete Accounts (ohne Föderation) ist MFA standardmäßig aktiviert und kann nicht deaktiviert werden.

**Für föderierte Accounts wird dringend empfohlen, die Aktivierung von MFA über den Identitätsanbieter zu verlangen**, insbesondere für Administratoren mit Zugriff auf die Konsole.

Weitere Informationen:  

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../console/iam/tutorials/sso_aad)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../console/iam/tutorials/sso_adfs)

### Zugriff auf die Konsole nur von sicheren Geräten

Das Gerät und die Umgebung, von denen aus Sie die Konsole nutzen, spielen eine wichtige Rolle bei der sicheren Verwaltung Ihrer Cloud-Dienste. Wenn Sie mit hohen Sicherheitsanforderungen arbeiten, beachten Sie bitte folgende Empfehlungen:

- Für die Verwaltung durch eigene Teams: Befolgen Sie ganz oder teilweise die [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- Im Falle einer Verwaltung durch Dritte: Ziehen Sie die Beauftragung eines [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams) in Betracht – je nach Sensibilität der gehosteten Ressourcen und den gesetzlichen/regulatorischen Anforderungen.

### Administratoren für Phishing-Risiken sensibilisieren

Zugriffe auf die Cloud Temple-Konsole müssen besonders gesichert sein, insbesondere gegenüber Phishing-Versuchen, die auf die Abfrage von Anmeldedaten oder MFA-Codes abzielen. Es ist entscheidend, dass berechtigte Nutzer regelmäßig für diese Risiken sensibilisiert werden: Überprüfung der URL, Vorsicht bei unerwarteten Nachrichten und sofortiges Melden verdächtiger Aktivitäten.

Zur Risikominimierung empfehlen wir, die Konsole niemals über einen per E-Mail erhaltenen Link aufzurufen, sondern die gewohnte URL stets manuell einzugeben.

Diese bewährten Sicherheitsmaßnahmen fallen in Ihre Verantwortung als Kunde und sind essenziell zur Vorbeugung gegen Phishing-Angriffe. Bei Zweifeln steht Ihnen unser Cloud Temple Support-Team zur Verfügung.

## Verwaltung von Cloud-Diensten

Ihre Cloud-Ressourcen werden über die Konsole verwaltet. Dieses Kapitel enthält grundlegende Empfehlungen für die sichere und kontrollierte Nutzung der Dienste.

### Tenant-Eigentümer identifizieren

Der Tenant-Eigentümer besitzt alle Rechte für aktivierte Produkte und erhält offizielle Benachrichtigungen. Es ist entscheidend, geeignete Ansprechpartner innerhalb Ihrer Organisation als Eigentümer zu benennen.

Für eine sichere und effiziente Verwaltung:

- **Benennen Sie einen verantwortlichen Eigentümer**, idealerweise direkt an der Umgebung beteiligt;
- **Überprüfen Sie die Kontakt-E-Mail-Adresse des Eigentümers**, um deren Gültigkeit und regelmäßige Nutzung sicherzustellen;
- **Stellen Sie direkten Zugriff sicher**, indem Sie einen Eigentümer aus Ihrer Organisation benennen – auch dann, wenn Sie die Verwaltung Ihres Cloud-Diensts delegieren –, um Benachrichtigungen und wichtige Entscheidungen überwachen zu können;
- **Begrenzen Sie die Anzahl der Eigentümer** auf maximal 3, um die Angriffsfläche zu reduzieren und die Nachverfolgung kritischer Aktionen zu erleichtern.

Weitere Informationen zur Verwaltung von Tenant-Eigentümern finden Sie im [Guide des popriétaires sur un tenant | Documentation Cloud Temple](../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Berechtigungen für Ihre Cloud-Dienste verwalten

Die Cloud Temple-Konsole bietet eine feingranulare Zugriffskontrolle, indem jedem Nutzer eine oder mehrere Berechtigungsebenen zugewiesen werden, die genau festlegen, welche Aktionen erlaubt sind. Die vollständige Übersicht finden Sie in der Dokumentation ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)).

Für eine effiziente und sichere Berechtigungsverwaltung empfehlen wir folgende Best Practices:

- **Prinzip der minimalen Rechtevergabe beachten:** Geben Sie Nutzern nur die für ihre Aufgaben unbedingt nötigen Berechtigungen. Das minimiert Risiken durch unnötige Rechte.
- **Sensible Rechte einschränken:** Vergeben Sie sensible Rechte nur an zuständige Benutzer. Dazu zählen unter anderem Zugriffsverwaltung (console_public_access_write, *_console_access, object - storage_write), Rechteverwaltung (iam_write, iam_offline_access) und Backup-Verwaltung (backup_iaas_opensource_write, backup_iaas_spp_write).
- **Bevorzugt Leserechte vergeben:** Im Zweifelsfall nur Lesezugriff vergeben (*_read), um Risiken zu minimieren und gleichzeitig Zugang zu notwendigen Informationen zu gewähren.
- **Regelmäßige Rechteüberprüfungen durchführen:** Kontrollieren Sie regelmäßig die Zuweisung von Rechten und entfernen Sie veraltete Zugriffe. Der Export der Rechte im CSV-Format unterstützt Sie bei dieser Aufgabe.

Eine kontrollierte Rechtevergabe begrenzt das Risiko von Fehlern oder böswilligen Aktionen und stärkt Ihre Sicherheitslage.

### Hypervisoren regelmäßig aktualisieren

Cloud Temple stellt regelmäßig Builds für Hypervisoren zur Verfügung, um Sicherheitsupdates bereitzustellen. Das Einspielen dieser Updates liegt jedoch in Ihrer Verantwortung, da wir keine Kenntnis über Ihre geschäftlichen Anforderungen haben.  

Daher empfehlen wir:
- Überprüfen Sie regelmäßig in der Konsole die Verfügbarkeit neuer Builds für Ihre Hypervisoren;  
- **Stellen Sie regelmäßig neue Builds auf all Ihren Hypervisoren bereit**, insbesondere wenn sie Sicherheitslücken beheben;
- Installieren Sie regelmäßig neue Versionen der vmtools auf Ihren virtuellen Maschinen.

Eine in der Konsole verfügbare Sicherheitsinformationsseite ermöglicht die Identifizierung bekannter Schwachstellen und der zugehörigen Empfehlungen (zu installierende Builds usw.).

### Überwachung der Aktivitäten in den Cloud-Services

Um eine effektive Überwachung Ihrer Cloud-Umgebung sicherzustellen und im Falle von Anomalien schnell reagieren zu können, ist es wichtig, eine aktive Monitoring-Strategie einzurichten. Wir empfehlen insbesondere:

- **Verfolgung der Dienstverfügbarkeit** über die [Status page | Cloud Temple](https://status.cloud-temple.com/), um bei globalen Vorfällen oder Ausfällen benachrichtigt zu werden;
- **Aktivieren Sie thematische Benachrichtigungen**, die für Ihre Nutzung relevant sind, direkt in der Konsole, um wichtige Warnmeldungen in Echtzeit zu erhalten (siehe [Abonnement aux notifications thématiques | Documentation Cloud Temple](../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Nutzen Sie die Cloud-Aktivitätsprotokolle**, um sensible oder verdächtige Aktionen an Ihren Ressourcen zu identifizieren (siehe Abschnitt „Protokollierung - Aktivitätsüberwachung“ im [Guide de démarrage | Documentation Cloud Temple](../iaas_vmware/quickstart)). Das Sammeln und die Analyse der Aktivitätsprotokolle kann über die Console-APIs automatisiert werden, um Ereignisse in Ihre Überwachungs- oder Incident-Detection-Tools zu integrieren.

## Absicherung der gehosteten Ressourcen

Im Cloud-Modell liegt die Sicherheit der bereitgestellten Ressourcen in der Verantwortung des Nutzers. Cloud Temple stellt eine gesicherte Infrastruktur bereit, doch es obliegt Ihnen, Ihre Betriebssysteme, Daten und Konfigurationen zu schützen.

Im Folgenden finden Sie bewährte grundlegende Praktiken zur Erhöhung der Sicherheit Ihrer VMs: Backup-Policy-Konfiguration, Verschlüsselung kritischer Ressourcen und Härtung der Betriebssysteme. Diese Maßnahmen tragen dazu bei, das Risiko von Kompromittierungen zu begrenzen, die Datenintegrität sicherzustellen und die Geschäftskontinuität bei einem Vorfall zu gewährleisten.

### Backup-Konfiguration

Um die Sicherheit und Resilienz Ihrer Daten zu gewährleisten, ist es unerlässlich, Ihre Backup-Policies korrekt zu definieren und umzusetzen. Die Zuweisung einer Backup-Policy zu jeder virtuellen Maschine vor deren Start ist verpflichtend. Die Dokumentation hierzu befindet sich im Abschnitt "Sauvegarde" des [Guide de démarrage | Documentation Cloud Temple](../iaas_vmware/quickstart).

Empfehlungen zur Verwaltung Ihrer Backup-Policies bei Cloud Temple:

- **Definieren Sie Ihre Backup-Policies:** Bitten Sie den Support um die Erstellung von Policies, die den Sicherheitsanforderungen Ihrer Organisation entsprechen.  
- **Vermeiden Sie pausierte Policies:** Stellen Sie sicher, dass keine VM einer pausierten Backup-Policy zugewiesen ist, um die Datensicherheit nicht zu gefährden.
- **Führen Sie Wiederherstellungstests durch:** Testen Sie regelmäßig die Wiederherstellung Ihrer Backups, um die Wirksamkeit der Verfahren sicherzustellen.

### Verschlüsselung sensibler VMs

Neben der standardmäßigen Datenverschlüsselung auf Speicherebene bei allen Cloud-Ressourcen kann bei besonders sensiblen Ressourcen **die VM-Verschlüsselung aktiviert werden**. Weitere Informationen finden Sie unter [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Bewährte Praktiken bei Einsatz von VM-Verschlüsselung:

- Verschlüsselung auf sensiblen VMs aktivieren: Wenden Sie dies beim Erstellen oder bei einer geplanten Aktualisierung der VM an. Der Vorgang erfordert ein temporäres Herunterfahren der VM;
- Verschlüsselungsstatus überprüfen: Kontrollieren Sie in der Konsole, dass der Status der VM als "verschlüsselt" angezeigt wird;
- Backup vor der Verschlüsselung: Stellen Sie sicher, dass die VM vor einer Verschlüsselungsoperation ordnungsgemäß gesichert ist.

### Begrenzung der Ressourcenexposition

Um die Angriffsfläche Ihrer virtuellen Maschinen zu reduzieren, wird dringend empfohlen, nur notwendige Dienste verfügbar zu machen. Stellen Sie insbesondere sicher, dass Sie **Administrationsschnittstellen und Konsolen von Systemen und Anwendungen nicht öffentlich exponieren**.

Wenn Sie die Objektspeicher-Services von Cloud Temple nutzen, wird zudem empfohlen, **Buckets nicht öffentlich zugänglich zu konfigurieren**, außer in notwendigen Fällen (siehe [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Härtung der virtuellen Maschinen (IaaS-Services)

Das Hosting einer virtuellen Maschine in einer gesicherten Cloud garantiert nicht automatisch die Sicherheit des Betriebssystems, der Dienste oder der darauf ausgeführten Anwendungen. Die Härtung einer VM liegt in Ihrer Verantwortung, unabhängig davon, ob sie selbst erstellt oder aus dem Katalog bereitgestellt wurde.

Wir empfehlen, **grundlegende Sicherheitsmaßnahmen umzusetzen**:

- Systeme mit Sicherheits-Patches auf dem aktuellen Stand halten;
- Nur notwendige Dienste freigeben;
- Nicht benötigte Komponenten deaktivieren;  
- Zugriffsrechte auf das notwendige Minimum beschränken;
- Zugriffsjournalisierung aktivieren;
- Regelmäßige Backups konfigurieren.

Zur Unterstützung bei diesen Maßnahmen nutzen Sie bitte:

- Die Härtungsleitfäden der Hersteller der von Ihnen eingesetzten Software;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Diese bewährten Praktiken bilden die erste Verteidigungslinie zur Absicherung Ihrer Systeme in der Cloud.

### Härtung von Containern (PaaS-Services)

Zur Absicherung Ihrer Container im Rahmen des PaaS-Dienstes OpenShift empfehlen wir folgende Maßnahmen zur Erhöhung der Härtung:

- **Image-Quellen:** Stellen Sie sicher, dass sämtliche Images aus vertrauenswürdigen Quellen stammen, wie unternehmensinterne Registries oder der Red Hat Container Catalog. Vermeiden Sie die Nutzung von nicht verifizierten Community-Images, etwa aus dem öffentlichen Docker Hub.
- **Einschränkung von Privilegien:** Begrenzen Sie die Berechtigungen der Container mithilfe von OpenShift-Funktionen wie den *Security Context Constraints* (SCC), um nur die notwendigsten Rechte zu gewähren.
- **SCC-Konfiguration:** Erstellen Sie angepasste SCCs für jede Anwendung oder Anwendungsgruppe. Dazu gehört die Einschränkung erlaubter Systemaufrufe (z. B. via *seccomp profiles*) mit gezielten Anpassungen wie der Deaktivierung von *ptrace* oder *mount*, um Container-Escape-Risiken zu verringern.
- **Workload-Isolation:** Nutzen Sie *Namespaces* und *Network Policies*, um Anwendungen voneinander zu isolieren und unnötige Interaktionen unter Containern zu unterbinden.
- **Umfassende Protokollierung:** Aktivieren Sie die Protokollierung über den OpenShift Logging Operator, um Ereignisse im Zusammenhang mit Containern und gehosteten Systemen zu erfassen und verdächtige Aktivitäten besser zu erkennen und zu analysieren.

## Weiterführende Informationen

Wenn Sie zusätzliche Sicherheitsdienste oder gezielte Unterstützung zu sicherheitsrelevanten Themen erhalten möchten (Audit, Härtung, Compliance, Beratung etc.), stehen Ihnen unsere **Professional Services** zur Verfügung. Wenden Sie sich für weitere Informationen an Ihren Cloud Temple Ansprechpartner.