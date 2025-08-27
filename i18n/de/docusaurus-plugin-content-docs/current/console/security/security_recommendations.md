---
title: Bonnes pratiques
---

*Letzte Aktualisierung: 22/05/2025*

## Empfehlungen zur sicheren Nutzung der Cloud-Temple-Dienste

Die Cloud-Temple-Dienste bieten Ihnen eine von Grund auf sicher konzipierte Cloud-Infrastruktur. Dennoch obliegt ein Teil der Sicherheitsmaßnahmen Ihrer Verantwortung als Nutzer dieser Dienste. Dieser Leitfaden hilft Ihnen, die Sicherheit Ihrer Cloud-Umgebung zu stärken, indem Sie die in der Konsole bereitgestellten Funktionen optimal nutzen.

Sie finden hier konkrete Empfehlungen, um:

- Den Zugriff auf die Cloud-Konsole zu schützen;
- Zugriffsrechte und Berechtigungen kontrolliert zu verwalten;
- Die über unsere Clouddienste bereitgestellten Ressourcen abzusichern.

## Zugriff auf die Konsole

Der Zugriff auf die Konsole ist das Eingangstor zu all Ihren Cloud-Temple-Diensten. Deshalb ist es entscheidend, diesen Zugang wirksam abzusichern.

### Zugriff auf die Konsole durch IP-Filterung einschränken

Der Zugriff auf die Verwaltungskonsole ist auf zuvor autorisierte IP-Adressen beschränkt. Diese Einschränkung ermöglicht den Zugriff ausschließlich von den angegebenen IP-Bereichen und minimiert dadurch das Risiko unbefugter Zugriffe.

Sie können diese IP-Beschränkungen in den Einstellungen Ihrer Organisation konfigurieren. Um zu erfahren, wie Sie IP-Filter einrichten, lesen Sie bitte [Gestion des accès et authentification | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Für eine optimale Wirksamkeit dieser Maßnahme sollten Sie:

- **Die Anzahl zugelassener IP-Adressen** auf das unbedingt Erforderliche begrenzen;
- Zu große oder generische Bereiche vermeiden;
- **Nur IPs aus kontrollierten Umgebungen** zulassen (z. B. IP des Ausgangs Ihres Firmennetzwerks);
- Einzelne IPs (z. B. öffentliche IP-Adresse eines IT-Mitarbeiters im Homeoffice) vermeiden oder auf das Notwendigste beschränken;
- IP-Adressen von Dritten (z. B. Dienstleister) vermeiden oder deren Nutzung einschränken;
- Diese Liste bei Änderungen Ihrer Netzwerkinfrastruktur aktuell halten.

Für Fernzugriffe (Homeoffice, Dienstleister…) sollte nach Möglichkeit der Zugriff über Ihr Unternehmensnetzwerk per VPN erfolgen, anstatt einzelne IP-Adressen direkt zuzulassen. Dies verringert die Angriffsfläche der Konsole und zentralisiert die Zugriffskontrolle innerhalb Ihrer Organisation.

### Identitätsföderation verwenden

Die Identitätsföderation ermöglicht die Integration der Cloud-Temple-Konsole mit Ihrem Identitätsanbieter (IdP) durch Aktivierung von SSO. Dieser Ansatz zentralisiert die Authentifizierung und bietet mehrere Vorteile:

- Einheitliche Verwaltung der Konten: Erstellung, Änderungen und Löschungen über Ihr Verzeichnis;
- Reduzierung der Angriffsfläche: lokale Konten sind überflüssig oder begrenzt;
- Erhöhte Nachvollziehbarkeit: Zugriffe werden durch Ihren IdP protokolliert;
- Erhöhte Integration: MFA, Warnmeldungen, kontextabhängige Sicherheitsrichtlinien…;
- Erleichterte Compliance: entspricht Ihren internen Sicherheitsrichtlinien.

Daher wird die **Verwendung von Identitätsföderation empfohlen**, insbesondere bei größeren Umgebungen oder hohen Sicherheitsanforderungen.

Folgen Sie unseren Schritt-für-Schritt-Anleitungen zur Integration Ihres Identitätsanbieters:

- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Aktivierung der Multi-Faktor-Authentifizierung (MFA)

Die Multi-Faktor-Authentifizierung (MFA) erhöht die Sicherheit beim Zugriff auf die Cloud-Temple-Konsole erheblich. Sie ergänzt das Passwort durch die Eingabe eines temporären Codes, der von einer speziellen App generiert wird und begrenzt das Risiko unbefugter Zugriffe – selbst beim Diebstahl von Zugangsdaten.

Für lokal über die Konsole verwaltete Konten (ohne Föderation) ist MFA standardmäßig aktiviert und kann nicht deaktiviert werden.

**Für föderierte Konten wird dringend empfohlen, MFA auf Seiten des Identitätsanbieters zu erzwingen**, insbesondere für Administratoren mit Zugriff auf die Konsole.

Weitere Informationen:

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Zugriff auf die Konsole nur von sicheren Geräten

Die Geräte und Umgebungen, über die Sie auf die Konsole zugreifen, sind entscheidend für die sichere Verwaltung Ihrer Clouddienste. Wenn Sie in einer Umgebung mit hohen Sicherheitsanforderungen arbeiten, sollten Sie folgende Empfehlungen berücksichtigen:

- Für die Administration durch eigene Teams: wenden Sie vollständig oder teilweise die [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) an;
- Bei Verwaltung durch Dritte prüfen Sie, ob der Einsatz eines [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams) sinnvoll ist – je nach Sensibilität der gehosteten Ressourcen und Ihrem rechtlichen sowie regulatorischen Kontext.

### Administratoren für Phishing-Risiken sensibilisieren

Der Zugriff auf die Cloud-Temple-Konsole erfordert besondere Vorsicht, insbesondere angesichts von Phishing-Versuchen, mit denen Zugangsdaten oder MFA-Codes abgegriffen werden sollen. Es ist unerlässlich, autorisierte Nutzer regelmäßig für diese Risiken zu sensibilisieren: systematische Prüfung der URL, Vorsicht bei unerwarteten Nachrichten sowie sofortige Meldung verdächtiger Aktivitäten.

Um diese Risiken zu minimieren, empfehlen wir, die Konsole niemals über einen per E-Mail erhaltenen Link zu öffnen, sondern immer durch manuelle Eingabe der bekannten URL darauf zuzugreifen.

Diese bewährten Methoden liegen in Ihrer Verantwortung als Kunde und sind entscheidend zur Vorbeugung von Phishing-Angriffen. Im Zweifelsfall steht Ihnen der Support von Cloud Temple zur Verfügung.

## Verwaltung von Clouddiensten

Ihre Cloudressourcen werden über die Konsole verwaltet. Dieses Kapitel stellt wesentliche Empfehlungen zur sicheren und kontrollierten Nutzung Ihrer Clouddienste bereit.

### Tenant-Eigentümer identifizieren

Der Tenant-Eigentümer besitzt alle Rechte bezüglich aktivierter Dienste und erhält offizielle Benachrichtigungen. Es ist entscheidend sicherzustellen, dass die Tenant-Eigentümer geeignete Ansprechpartner innerhalb Ihrer Organisation sind.

Für eine sichere und effiziente Verwaltung:

- **Benennen Sie einen verantwortlichen Eigentümer**, möglichst jemanden mit direkter Zuständigkeit für die Umgebung;
- **Überprüfen Sie die E-Mail-Adresse des Eigentümers**, um sicherzustellen, dass sie gültig ist und regelmäßig überprüft wird;
- **Stellen Sie eine direkte Kontrolle sicher**, indem Sie einen Eigentümer aus Ihrer Organisation hinzufügen – auch wenn die Verwaltung ausgelagert ist –, damit Sie die wichtigsten Informationen und Entscheidungen überwachen können;
- **Begrenzen Sie die Anzahl der Eigentümer auf drei**, um die Angriffsfläche zu verringern und die Überprüfung kritischer Aktionen zu erleichtern.

Weitere Informationen zur Verwaltung von Tenant-Eigentümern finden Sie im [Guide des popriétaires sur un tenant | Documentation Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Berechtigungen auf Ihre Clouddienste verwalten

Die Cloud-Temple-Konsole bietet eine fein abgestufte Zugriffsverwaltung, bei der jedem Benutzer ein oder mehrere Berechtigungsniveaus zugewiesen werden, die exakt festlegen, welche Aktionen erlaubt sind. Die Dokumentation zu den Berechtigungen ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) erläutert die verschiedenen Berechtigungen und deren sinnvolle Zuweisung im Detail.

Für eine effektive und sichere Rechtevergabe empfehlen wir, folgende bewährte Verfahren umzusetzen:

- **Das Prinzip der minimalen Rechte anwenden:** Gewähren Sie Benutzern nur diejenigen Rechte, die sie für ihre Aufgaben tatsächlich benötigen. Dies verringert das Risiko durch unnötige Zugriffsrechte.
- **Kritische Berechtigungen einschränken:** Sensible Berechtigungen sollten ausschließlich autorisierten Nutzern zugewiesen werden. Dazu gehören insbesondere die Verwaltung des Zugriffs (console_public_access_write, *_console_access, object-storage_write), die Rechteverwaltung (iam_write, iam_offline_access) und die Backup-Verwaltung (backup_iaas_opensource_write, backup_iaas_spp_write).**
- **Bevorzugt Leserechte zuweisen:** Bei Unsicherheiten zunächst Leserechte (*.read) gewähren, um Risiken zu minimieren und dennoch den Zugriff auf wichtige Informationen zu ermöglichen.
- **Regelmäßige Überprüfung der Rechte:** Überprüfen Sie regelmäßig die Benutzerberechtigungen und entfernen Sie nicht mehr benötigte. Der Export im CSV-Format unterstützt Sie dabei.**

Eine kontrollierte Zuweisung von Berechtigungen begrenzt Risiken durch Fehler oder böswillige Handlungen und stärkt Ihre Sicherheitsstrategie.

### Regelmäßige Aktualisierung der Hypervisoren

Cloud Temple stellt regelmäßig neue Builds für Hypervisoren bereit, um Sicherheitsupdates bereitzustellen. Die Aktualisierung der Hypervisoren obliegt jedoch Ihrer Verantwortung, da wir keinen Einblick in Ihre betrieblichen Rahmenbedingungen haben.
Daher empfehlen wir Ihnen Folgendes:

- Den Status neuer Builds für Ihre Hypervisoren regelmäßig in der Konsole zu überprüfen;  
- **Neue Builds regelmäßig auf allen Ihren Hypervisoren bereitzustellen**, insbesondere wenn sie Sicherheitslücken beheben;
- Die neuen Versionen der VMTools regelmäßig auf Ihren virtuellen Maschinen bereitzustellen.

**Eine Seite mit Sicherheitswarnungen steht zur Verfügung**, um Sie über bekannte Schwachstellen und entsprechende Empfehlungen zu informieren: [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).  

### Cloud-Dienste überwachen

Um eine effektive Überwachung Ihrer Cloud-Umgebung zu gewährleisten und bei Anomalien schnell reagieren zu können, ist die Einrichtung einer aktiven Monitoring-Strategie unerlässlich. Wir empfehlen insbesondere:

- **Die Verfügbarkeit von Diensten zu überwachen** über die [Status page | Cloud Temple](https://status.cloud-temple.com/), um bei Ausfällen oder globalen Dienstunterbrechungen rechtzeitig benachrichtigt zu werden;
- **Relevante thematische Benachrichtigungen zu aktivieren**, die für Ihre Nutzung relevant sind, über die Konsole, um wichtige Warnungen in Echtzeit zu erhalten (siehe [Abonnement aux notifications thématiques | Documentation Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Die Cloud-Aktivitätsprotokolle auszuwerten**, um sensible oder verdächtige Aktionen auf Ihren Ressourcen zu identifizieren (siehe Abschnitt „Journalisation - Suivi des Activités“ im [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart)). Die Erfassung und Analyse der Aktivitätsprotokolle kann über die Console-APIs automatisiert werden, sodass Ereignisse in Ihre Überwachungs- oder Incident-Detection-Tools integriert werden können.

## Gehostete Ressourcen absichern

Im Cloud-Modell liegt die Sicherheit der bereitgestellten Ressourcen in der Verantwortung des Nutzers. Cloud Temple stellt eine sichere Infrastruktur bereit, doch Sie sind dafür verantwortlich, Ihre Betriebssysteme, Daten und Konfigurationen zu schützen.

Nachfolgend finden Sie bewährte Vorgehensweisen zur Erhöhung der Sicherheit Ihrer VMs: Konfiguration von Backup-Richtlinien, Verschlüsselung von kritischen Ressourcen und Härtung der Betriebssysteme. Diese Maßnahmen helfen, Kompromittierungsrisiken zu minimieren, die Datenintegrität sicherzustellen und die Betriebsfähigkeit bei einem Vorfall aufrechtzuerhalten.

### Backups konfigurieren

Um Sicherheit und Ausfallsicherheit Ihrer Daten zu gewährleisten, ist es entscheidend, Ihre Backup-Richtlinien korrekt zu definieren und anzuwenden. Die Zuweisung einer Backup-Richtlinie für jede virtuelle Maschine vor deren Start ist verpflichtend. Die Dokumentation dazu finden Sie im Abschnitt „Sauvegarde“ im [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart).

Folgende Empfehlungen gelten für das Management der Backup-Richtlinien Ihrer Cloud-Temple-Ressourcen:

- **Definieren Sie Ihre Backup-Richtlinien:** Bitten Sie den Support um die Erstellung von Backup-Richtlinien, die den Sicherheitsanforderungen Ihrer Organisation entsprechen.  
- **Vermeiden Sie pausierte Richtlinien:** Vergewissern Sie sich, dass keine VM mit einer pausierten Backup-Richtlinie verknüpft ist, um Sicherheitsrisiken zu vermeiden.
- **Testen Sie Wiederherstellungen:** Führen Sie regelmäßig Wiederherstellungstests durch, um die Wirksamkeit Ihrer Backup-Strategien zu überprüfen.

### Sensible VMs verschlüsseln

Zusätzlich zur standardmäßigen Datenverschlüsselung auf Festplattenebene für alle Cloud-Ressourcen kann **die Verschlüsselung von VMs aktiviert werden, um Ihre sensibelsten Ressourcen zu schützen**. Weitere Informationen finden Sie unter [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Folgende bewährte Praktiken gelten bei Verwendung der VM-Verschlüsselung:

- Aktivieren Sie die Verschlüsselung bei sensiblen VMs: Führen Sie dies direkt bei der Erstellung der VM oder im Rahmen eines geplanten Updates durch. Der Vorgang erfordert ein temporäres Herunterfahren der VM;
- Überprüfen Sie den Verschlüsselungsstatus: Stellen Sie in der Konsole sicher, dass der Verschlüsselungsstatus der VM als „chiffré“ angezeigt wird;
- Vorheriges Backup: Vergewissern Sie sich, dass die VM vor jeder Änderung korrekt gesichert ist.

### Exposition von Ressourcen einschränken

Zur Minimierung der Angriffsfläche Ihrer virtuellen Maschinen empfiehlt es sich, den Zugriff auf notwendige Dienste strikt zu beschränken. Achten Sie insbesondere darauf, Ihre Ressourcen so zu konfigurieren, dass **Administrationsschnittstellen und Konsolen der Systeme und Anwendungen nicht öffentlich zugänglich sind**.

Falls Sie Object-Storage-Services von Cloud Temple verwenden, wird empfohlen, **Ihre Buckets nicht öffentlich zugänglich zu machen**, außer in Fällen, in denen dies zwingend erforderlich ist (siehe [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Virtuelle Maschinen härten (IaaS-Services)

Das Hosting einer virtuellen Maschine in einer gesicherten Cloud garantiert nicht automatisch die Sicherheit des Betriebssystems, der Dienste oder der Anwendungen. Die Härtung der VMs – egal ob selbst deployed oder aus dem Katalog – liegt in Ihrer Verantwortung.

Wir empfehlen Ihnen, **grundlegende Sicherheitsmaßnahmen anzuwenden:**

- Systeme mit aktuellen Sicherheits-Patches versorgen;
- Exponierte Dienste auf ein Minimum beschränken;
- Nicht benötigte Komponenten deaktivieren;  
- Zugriffsrechte auf das notwendige Minimum beschränken;
- Zugriffsjournale aktivieren;
- Regelmäßige Backups einrichten.

Zur Orientierung können Sie sich auf folgende Quellen stützen:

- Die Härtungsrichtlinien der von Ihnen eingesetzten Softwareanbieter;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Diese bewährten Praktiken bilden die erste Verteidigungslinie zur Absicherung Ihrer Systeme in der Cloud.

### Container härten (PaaS-Services)

Zur Absicherung Ihrer Container im Rahmen des PaaS-Dienstes OpenShift empfehlen wir Ihnen folgende Maßnahmen zur Härtung:

- **Image-Quellen:** Stellen Sie sicher, dass alle Container-Images aus vertrauenswürdigen Quellen stammen – etwa internen Registern oder dem Red Hat Container Catalog – und vermeiden Sie den Einsatz nicht überprüfter Community-Images wie jene aus dem öffentlichen Docker Hub.
- **Einschränkung von Berechtigungen:** Beschränken Sie die Rechte der Container mithilfe der OpenShift-Funktionen, insbesondere der *Security Context Constraints* (SCC), um die Zugriffsrechte auf das notwendige Maß zu reduzieren.
- **SCC-Konfiguration:** Erstellen Sie individuelle SCCs für jede Anwendung oder Anwendungssuite. Dazu gehört die Einschränkung erlaubter Systemaufrufe (beispielsweise mit *seccomp profiles*), mit spezifischen Einschränkungen wie dem Verbot von *ptrace* oder *mount*, um das Risiko eines Containerausbruchs zu minimieren.
- **Isolierung von Workloads:** Verwenden Sie *Namespaces* und *Network Policies*, um Anwendungen voneinander zu isolieren und unnötige Interaktionen zwischen Containern zu unterbinden.
- **Umfassende Protokollierung:** Aktivieren Sie die Protokollierung über den OpenShift Logging Operator, um Ereignisse im Zusammenhang mit Containern und gehosteten Systemen zu erfassen und verdächtige Aktivitäten besser zu erkennen und zu analysieren.

## Weiterführende Unterstützung

Wenn Sie zusätzliche Sicherheitsservices in Anspruch nehmen oder eine engere Begleitung bei sicherheitsrelevanten Themen wünschen (Audit, Härtung, Compliance, Beratung usw.), können unsere **Professional Services** hinzugezogen werden. Wenden Sie sich hierzu bitte an Ihre Kontaktperson bei Cloud Temple.