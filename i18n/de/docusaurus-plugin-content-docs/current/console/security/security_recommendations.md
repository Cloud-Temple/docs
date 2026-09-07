---
title: Best Practices
---

*Letzte Aktualisierung: 22/05/2025*

## Empfehlungen für die sichere Nutzung der Cloud Temple-Dienste

Die Cloud Temple-Dienste bieten Ihnen eine von Grund auf hochsichere Cloud-Infrastruktur. Allerdings obliegt die Umsetzung bestimmter Sicherheitsbest Practices Ihrer Verantwortung als Nutzer dieser Dienste. Dieser Leitfaden unterstützt Sie dabei, die Sicherheit Ihrer Cloud-Umgebung zu stärken, indem Sie die in der Konsole verfügbaren Funktionen nutzen.

Hier finden Sie konkrete Empfehlungen zur:

- Absicherung des Zugriffs auf die Cloud-Konsole;
- Kontrollierten Verwaltung von Zugriffen und Berechtigungen;
- Sicherung der über unsere Cloud-Dienste bereitgestellten Ressourcen.

## Zugriff auf die Konsole

Der Zugriff auf die Konsole ist der Zugangspunkt zu allen Ihren Cloud Temple-Diensten. Daher ist ein wirksamer Schutz unerlässlich.

### Einschränken des Zugriffs auf die Konsole durch IP-Filterung

Der Zugriff auf die Cloud-Verwaltungskonsole ist auf vorher autorisierte IP-Adressen beschränkt. Diese Einschränkung ermöglicht es, den Zugriff ausschließlich auf Benutzer aus den festgelegten IP-Bereichen zu gewähren und minimiert somit das Risiko unbefugter Zugriffe.

Sie können diese IP-Einschränkungen in den Einstellungen Ihrer Organisation konfigurieren. Informationen zur Konfiguration der IP-Filterung finden Sie unter [Zugriffs- und Authentifizierungsverwaltung | Cloud Temple Dokumentation](../../console/iam/quickstart?_highlight=*facteur#access-management-and-authentication).

Um die Effektivität dieses Mechanismus zu maximieren, beachten Sie Folgendes:

- **Beschränken Sie die Anzahl der autorisierten IP-Adressen** auf das strikt Notwendige;
- Vermeiden Sie zu breite oder generische Bereiche;
- Fügen Sie **ausschließlich IPs aus kontrollierten Umgebungen** hinzu (z. B. Ausgangs-IP Ihres Unternehmensnetzwerks);
- Schließen Sie individuelle IP-Adressen aus oder beschränken Sie diese auf ein Minimum (z. B. öffentliche Heim-IP Ihres IT-Personals);
- Schließen Sie IP-Adressen von Drittanbietern aus oder beschränken Sie diese (z. B. Dienstleister);
- Halten Sie diese Liste bei Änderungen Ihrer Netzwerkinfrastruktur auf dem neuesten Stand.

Bei Fernzugriffen (Homeoffice, Dienstleister usw.) bevorzugen Sie den Weg über Ihr Unternehmensnetzwerk via VPN anstatt eine direkte Freigabe individueller IP-Adressen. Dies reduziert die Angriffsfläche der Konsole und zentralisiert die Zugriffsverwaltung innerhalb Ihrer Organisation.

### Identitätsföderung nutzen

Die Identitätsföderung ermöglicht die Integration der Cloud Temple-Konsole in Ihren Identitätsanbieter (IdP) durch Aktivierung von SSO. Dieser Ansatz zentralisiert die Authentifizierung und bietet mehrere Vorteile:

- Einheitliche Kontoverwaltung: Erstellung, Änderung und Löschung über Ihr Verzeichnis;
- Reduzierung der Angriffsfläche: Lokale Konten werden überflüssig oder eingeschränkt;
- Verbesserte Auditfähigkeit: Zugriffe werden von Ihrem IdP protokolliert;
- Erweiterte Integration: MFA, Alerting, kontextbezogene Sicherheitsrichtlinien…;
- Erleichterte Compliance: Konsistenz mit Ihren internen Richtlinien.

Aus diesen Gründen wird **die Identitätsföderung empfohlen**, insbesondere für Umgebungen mit einem großen Nutzerkreis oder hohen Sicherheitsanforderungen.

Folgen Sie unseren Schritt-für-Schritt-Anleitungen, um Ihren Identitätsanbieter zu integrieren:

- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Aktivieren der Multi-Faktor-Authentifizierung (MFA)

Die Multi-Faktor-Authentifizierung (MFA) erhöht die Sicherheit des Zugriffs auf die Cloud Temple-Konsole erheblich. Sie fügt einen zusätzlichen Authentifizierungsschritt hinzu, indem ein von einer dedizierten App generierter temporärer Code zusätzlich zum Passwort verlangt wird. Diese Maßnahme reduziert das Risiko unbefugter Zugriffe erheblich, selbst im Falle eines Diebstahls von Zugangsdaten.

Für lokal von der Konsole verwaltete Konten (ohne Identitätsföderation) ist MFA standardmäßig aktiviert und kann nicht deaktiviert werden.

**Für föderierte Konten wird dringend empfohlen, MFA auf Seiten des Identitätsanbieters vorzuschreiben**, insbesondere für Administratoren mit Zugriff auf die Konsole.

Weitere Informationen:  

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#what-is-mfa-and-is-it-mandatory)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../../console/iam/tutorials/sso_azuread)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Zugriff auf die Konsole von sicheren Endgeräten aus

Der Arbeitsplatz und die Umgebung, von denen aus Sie auf die Konsole zugreifen, sind wichtig, um die Verwaltung Ihrer Cloud-Dienste abzusichern. Wenn Sie in einer Umgebung mit hohen Sicherheitsanforderungen arbeiten, können Sie die folgenden Empfehlungen anwenden:

- Für die Verwaltung durch Ihre eigenen Teams gelten ganz oder teilweise die [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) ;
- Im Falle einer Verwaltung durch Dritte sollten Sie prüfen, ob der Einsatz eines [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams) sinnvoll ist, abhängig von der Sensibilität der gehosteten Ressourcen sowie Ihrem rechtlichen und regulatorischen Umfeld.

### Sensibilisierung der Administratoren für das Phishing-Risiko

Der Zugriff auf die Cloud Temple-Konsole erfordert erhöhte Wachsamkeit, insbesondere gegenüber Phishing-Versuchen, die darauf abzielen, Anmeldeinformationen oder MFA-Codes zu stehlen. Es ist von entscheidender Bedeutung, dass berechtigte Benutzer regelmäßig für diese Risiken sensibilisiert werden: systematische Überprüfung der URL, Vorsicht bei unerwarteten Nachrichten und sofortige Meldung verdächtiger Aktivitäten.

Um diese Risiken zu begrenzen, empfehlen wir, niemals über einen per E-Mail erhaltenen Link auf die Konsole zuzugreifen, sondern stets die übliche URL manuell einzugeben.

Diese Best Practices fallen in Ihre Verantwortung als Kunde und sind unerlässlich zur Verhinderung von Phishing-Angriffen. Bei Unsicherheiten steht Ihnen der Cloud Temple-Support jederzeit zur Verfügung.

## Verwaltung von Cloud-Diensten

Ihre Cloud-Ressourcen werden über die Konsole verwaltet. Dieses Kapitel enthält wesentliche Empfehlungen zur Steuerung des Betriebs von Cloud-Diensten.

### Identifizieren der Tenant-Inhaber

Der Tenant-Inhaber verfügt über alle Berechtigungen für die aktivierten Produkte und erhält die offiziellen Benachrichtigungen. Es ist entscheidend sicherzustellen, dass die Inhaber Ihres Tenants die geeigneten Ansprechpartner innerhalb Ihrer Organisation sind.

Für eine sichere und effiziente Verwaltung:

- **Bestimmen Sie einen verantwortlichen Inhaber**, vorzugsweise eine Person, die direkt in die Verwaltung der Umgebung eingebunden ist.
- **Überprüfen Sie die Kontakt-E-Mail-Adresse** des Inhabers, um sicherzustellen, dass diese gültig und regelmäßig abgerufen wird.
- **Sichern Sie eine direkte Kontrolle**, indem Sie einen Inhaber aus Ihrer Organisation hinzufügen, auch wenn Sie die Verwaltung Ihres Cloud-Dienstes auslagern, um wichtige Benachrichtigungen und Entscheidungen überwachen zu können.
- **Beschränken Sie die Anzahl der Inhaber** auf 3, um die Angriffsfläche zu verringern und die Prüfung kritischer Aktionen zu erleichtern.

Weitere Informationen zur Verwaltung von Tenant-Inhabern finden Sie im [Guide des propriétaires sur un tenant | Documentation Cloud Temple](../../console/iam/concepts#verwaltung-der-eigentümer-auf-einem-tenant).

### Berechtigungen für Ihre Cloud-Dienste verwalten

Die Cloud Temple Console ermöglicht eine granulare Zugriffsverwaltung, indem jedem Benutzer eine oder mehrere Berechtigungsstufen zugewiesen werden, die die erlaubten Aktionen genau festlegen. Konsultieren Sie die Dokumentation zu den Berechtigungen ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts#verfügbare-berechtigungen-für-benutzer-ihrer-organisation)), um die verschiedenen Berechtigungen im Detail zu verstehen und sie entsprechend zuzuweisen.

Für eine effektive und sichere Verwaltung der Berechtigungen empfehlen wir Ihnen, die folgenden Best Practices zu befolgen:

- **Prinzip des geringsten Privilegs anwenden:** Verleihen Sie den Benutzern ausschließlich die für ihre Aufgaben erforderlichen Berechtigungen. Dies reduziert Risiken, indem der Zugriff auf unnötige Funktionen eingeschränkt wird.
- **Einschränkung sensibler Berechtigungen:** Weisen Sie sensible Berechtigungen ausschließlich den Benutzern zu, die für diese Funktionen verantwortlich sind. Sensible Berechtigungen umfassen insbesondere die Zugriffsverwaltung (console\_public\_access\_write, \*\_console\_access, object - storage\_write), die Berechtigungsverwaltung (iam\_write, iam\_offline\_access) und die Backup-Verwaltung (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Bevorzugung des schreibgeschützten Zugriffs:** Im Zweifelsfall gewähren Sie einen schreibgeschützten Zugriff (\*\_read), um Risiken zu minimieren und gleichzeitig den Zugriff auf die erforderlichen Informationen zu ermöglichen.
- **Regelmäßige Überprüfung der Rechte:** Überprüfen Sie regelmäßig die Benutzerberechtigungen, um veraltete Berechtigungen zu entfernen. Der Export der Berechtigungen im CSV-Format erleichtert diese Verwaltung.**

Eine kontrollierte Zuweisung von Berechtigungen begrenzt das Risiko von Fehlern oder böswilligen Aktionen und stärkt gleichzeitig Ihre Sicherheitspostur.

### Hypervisoren regelmäßig aktualisieren

Cloud Temple stellt regelmäßig Builds für Hypervisoren bereit, um die Anwendung von Sicherheitspatches zu gewährleisten. Die Aktualisierung der Hypervisoren bleibt jedoch in Ihrer Verantwortung, da wir keinen Einblick in Ihre betrieblichen Anforderungen haben.  

Daher empfehlen wir Ihnen Folgendes:

- Regelmäßig in der Konsole prüfen, ob neue Builds für Ihre Hypervisoren verfügbar sind;  
- **Die neuen Builds regelmäßig auf allen Ihren Hypervisoren bereitstellen**, insbesondere wenn sie Sicherheitslücken beheben;
- Regelmäßig die neuen Versionen der vmtools auf Ihren virtuellen Maschinen bereitstellen.

**Eine Seite mit Sicherheitswarnungen steht zur Verfügung**, um Sie über bekannte Schwachstellen und die zugehörigen Empfehlungen zu informieren: [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Überwachung der Aktivitäten in Cloud-Diensten

Um eine effektive Überwachung Ihrer Cloud-Umgebung zu gewährleisten und bei Anomalien schnell reagieren zu können, ist es unerlässlich, eine proaktive Überwachungsstrategie zu implementieren. Wir empfehlen Ihnen insbesondere Folgendes:

- **Überwachung der Dienstverfügbarkeit** über die [Status page | Cloud Temple](https://status.cloud-temple.com/), um bei Störungen oder globalen Ausfällen benachrichtigt zu werden;
- **Aktivieren relevanter themenbezogener Benachrichtigungen** für Ihren Anwendungsfall über die Konsole, um wichtige Warnungen in Echtzeit zu erhalten (voir [Abonnement aux notifications thématiques | Documentation Cloud Temple](../../console/iam/concepts#abonnement-für-themenspezifische-benachrichtigungen));
- **Nutzung der Cloud-Aktivitätsprotokolle**, um sensible oder verdächtige Aktionen an Ihren Ressourcen zu identifizieren (voir section « Journalisation - Suivi des Activités » du [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart)). Die Erfassung und Analyse der Aktivitätsprotokolle kann über die Konsolen-APIs automatisiert werden, um die Ereignisse in Ihre Überwachungs- oder Incident-Erkennungstools zu integrieren.

## Absicherung der gehosteten Ressourcen

In einem Cloud-Modell liegt die Sicherheit der bereitgestellten Ressourcen in der Verantwortung des Nutzers. Cloud Temple stellt eine sichere Infrastruktur bereit, doch Sie sind dafür verantwortlich, Ihre Betriebssysteme, Daten und Konfigurationen zu schützen.

Nachfolgend finden Sie die wesentlichen Best Practices zur Stärkung der Sicherheit Ihrer VMs: Konfiguration von Backup-Richtlinien, Verschlüsselung kritischer Ressourcen und Absicherung der Betriebssysteme. Diese Maßnahmen tragen dazu bei, Kompromittierungsrisiken zu begrenzen, die Datenintegrität zu gewährleisten und die Geschäftskontinuität im Störungsfall sicherzustellen.

### Backups konfigurieren

Um die Sicherheit und Resilienz Ihrer Daten zu gewährleisten, ist es entscheidend, Ihre Backup-Richtlinien korrekt zu definieren und anzuwenden. Die Zuweisung einer Backup-Richtlinie zu jeder virtuellen Maschine vor dem Start ist obligatorisch. Die Dokumentation ist im Abschnitt "Backup" des [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart) verfügbar.

Hier finden Sie die Empfehlungen zur Verwaltung der Backup-Richtlinien für Ihre Cloud Temple-Ressourcen:

- **Definieren Sie Ihre Backup-Richtlinien:** Wenden Sie sich an den Support, um die Erstellung von Backup-Richtlinien zu beantragen, die den Sicherheitsanforderungen Ihrer Organisation entsprechen.  
- **Vermeiden Sie angehaltene Richtlinien:** Lassen Sie keine VM mit einer angehaltenen Backup-Richtlinie verknüpft, um die Datensicherheit nicht zu gefährden.
- **Führen Sie Wiederherstellungstests durch:** Testen Sie regelmäßig die Wiederherstellung Ihrer Backups, um die Wirksamkeit Ihrer Wiederherstellungsverfahren zu überprüfen.

### Verschlüsseln sensibler VMs

Zusätzlich zur datenträgerbasierten Verschlüsselung, die für alle Cloud-Ressourcen standardmäßig integriert ist, **kann die VM-Verschlüsselung aktiviert werden, um Ihre sensibelsten Ressourcen zu schützen**. Dazu lesen Sie bitte [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

Hier sind einige bewährte Verfahren für die Verwendung der VM-Verschlüsselung:

- Verschlüsselung auf sensiblen VMs aktivieren: Wenden Sie diese bereits bei der Erstellung der Maschine oder während eines geplanten Updates an. Der Vorgang erfordert eine vorübergehende Abschaltung der VM;
- Verschlüsselungsstatus überprüfen: Stellen Sie in der Konsole sicher, dass die VM den Status "verschlüsselt" anzeigt;
- Vor der Verschlüsselung sichern: Stellen Sie sicher, dass die VM vor jeder Änderung ordnungsgemäß gesichert ist.

### Einschränken der Sichtbarkeit Ihrer Ressourcen

Um die Angriffsfläche Ihrer virtuellen Maschinen zu begrenzen, wird dringend empfohlen, die exponierten Dienste auf das strikt Notwendige zu beschränken. Stellen Sie insbesondere sicher, dass Ihre Ressourcen so konfiguriert sind, dass die **Verwaltungs- und Konsolenschnittstellen der bereitgestellten Systeme und Anwendungen nicht öffentlich zugänglich gemacht werden**.

Wenn Sie den Objektspeicher-Dienst von Cloud Temple nutzen, wird ebenfalls empfohlen, Ihre **Buckets nicht mit öffentlichem Zugriff zu konfigurieren**, es sei denn, dies ist strikt erforderlich (siehe [Einschränkung des Zugriffs auf Ihre S3-Buckets | Cloud Temple-Dokumentation](../../storage/oss/quickstart#access-policy-management)).

### Härten virtueller Maschinen (IaaS-Dienste)

Die Bereitstellung einer virtuellen Maschine in einer gesicherten Cloud garantiert allein nicht die Sicherheit des Betriebssystems, der Dienste oder der Anwendungen, die sie ausführt. Das Härten der VMs, unabhängig davon, ob sie von Ihnen bereitgestellt oder aus dem Katalog stammen, liegt in Ihrer Verantwortung.

Wir empfehlen Ihnen, **grundlegende Sicherheitsmaßnahmen umzusetzen**

- Die Systeme mit Sicherheitsupdates auf dem neuesten Stand halten;
- Die Anzahl der exponierten Dienste einschränken;
- Unnötige Komponenten deaktivieren;  
- Zugriffsrechte auf das strikt Notwendige beschränken;
- Die Protokollierung von Zugriffen aktivieren;
- Regelmäßige Backups konfigurieren.

Zur Unterstützung bei diesen Maßnahmen stützen Sie sich auf:

- Die Härtungsrichtlinien der Hersteller der von Ihnen verwendeten Software;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Diese bewährten Verfahren bilden die erste Verteidigungslinie zur Absicherung Ihrer Systeme in der Cloud.

### Container härten (services PaaS)

Um die Sicherheit Ihrer Container im Rahmen des OpenShift-PaaS-Dienstes zu gewährleisten, empfehlen wir Ihnen, die folgenden Maßnahmen zur Verstärkung ihrer Absicherung umzusetzen:

- **Image-Quellen** : Stellen Sie sicher, dass alle Images aus vertrauenswürdigen Quellen stammen, wie z. B. internen Registries oder dem Red Hat Container Catalog, und vermeiden Sie die Verwendung nicht geprüfter Community-Images, wie sie im öffentlichen Docker Hub verfügbar sind.
- **Einschränkung von Privilegien** : Beschränken Sie die Privilegien der Container mithilfe der OpenShift-Funktionen, insbesondere der *Security Context Constraints* (SCC), um die Berechtigungen auf das strikt Notwendige zu begrenzen.
- **Konfiguration der SCC** : Erstellen Sie für jede Anwendung oder jede Anwendungsgruppe benutzerdefinierte SCCs. Dies umfasst die Einschränkung der erlaubten Systemaufrufe (par exemple, via *seccomp profiles*), mit spezifischen Konfigurationen wie dem Verbot von *ptrace* oder *mount*, um das Risiko von Container-Escape-Angriffen zu verringern.
- **Isolierung der Workloads** : Verwenden Sie *Namespaces* und *Network Policies*, um Anwendungen zu isolieren und unnötige Interaktionen zwischen Containern zu begrenzen.
- **Umfassende Protokollierung** : Aktivieren Sie die Protokollierung über den OpenShift Logging Operator, um Ereignisse im Zusammenhang mit Containern und gehosteten Systemen zu erfassen, um verdächtige Aktivitäten besser erkennen und analysieren zu können.

## Für weitere Informationen

Wenn Sie zusätzliche Sicherheitsdienstleistungen oder eine verstärkte Unterstützung in Sicherheitsfragen (audit, durcissement, conformité, conseil, etc.) wünschen, können Sie unsere **Professional Services** in Anspruch nehmen. Für weitere Informationen wenden Sie sich bitte an Ihren Ansprechpartner bei Cloud Temple.