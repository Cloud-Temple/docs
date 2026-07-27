---
title: Best Practices
---

*Letzte Aktualisierung: 22/05/2025*

## Empfehlungen für die sichere Nutzung der Cloud Temple-Dienste

Die Cloud Temple-Dienste bieten Ihnen eine von Grund auf hochsichere Cloud-Infrastruktur. Allerdings obliegt die Umsetzung bestimmter Sicherheitsbest Practices Ihrer Verantwortung als Nutzer dieser Dienste. Dieser Leitfaden hilft Ihnen, die Sicherheit Ihrer Cloud-Umgebung zu stärken, indem Sie die in der Konsole angebotenen Funktionen nutzen.

Hier finden Sie konkrete Empfehlungen zur:

- Schutz des Zugriffs auf die Cloud-Konsole;
- Kontrollierte Verwaltung von Zugriffen und Berechtigungen;
- Absicherung der über unsere Cloud-Dienste bereitgestellten Ressourcen.

## Zugriff auf die Konsole

Der Zugriff auf die Konsole ist der Einstiegspunkt zu allen Ihren Cloud Temple-Diensten. Daher ist es unerlässlich, sie wirksam zu schützen.

### Zugriff auf die Konsole durch IP-Filterung einschränken

Der Zugriff auf die Cloud-Managementkonsole ist auf zuvor autorisierte IP-Adressen beschränkt. Diese Einschränkung ermöglicht es, den Zugriff ausschließlich auf Benutzer aus den angegebenen IP-Bereichen zu beschränken und so das Risiko unbefugter Zugriffe zu minimieren.

Sie können diese IP-Einschränkungen in den Einstellungen Ihrer Organisation konfigurieren. Informationen zur Konfiguration der IP-Filterung finden Sie unter [Gestion des accès et authentification | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Um die Wirksamkeit dieses Mechanismus zu maximieren, beachten Sie Folgendes:

- **Die Anzahl der autorisierten IP-Adressen** auf das strikt Nötige beschränken;
- Zu breite oder generische Bereiche vermeiden;
- **Nur IP-Adressen aus kontrollierten Umgebungen** hinzufügen (ex : IP de sortie votre réseau d’entreprise) ;
- Individuelle IP-Adressen verbieten oder maximal einschränken (ex : IP publique du domicile de votre personnel IT) ;
- IP-Adressen von Drittanbietern verbieten oder einschränken (ex : prestataire de service) ;
- Diese Liste bei Änderungen Ihrer Netzwerkinfrastruktur aktuell halten.

Bei Fernzugriffen (télétravail, prestataires…), sollten Sie den Zugriff über Ihr Unternehmensnetzwerk via VPN bevorzugen, anstatt individuelle IP-Adressen direkt zu autorisieren. Dies reduziert die Angriffsfläche der Konsole und zentralisiert die Zugriffsverwaltung innerhalb Ihrer Organisation.

### Identitätsföderung nutzen

Die Identitätsföderung ermöglicht die Integration der Cloud Temple-Konsole in Ihren Identitätsanbieter (IdP) durch Aktivierung von SSO. Dieser Ansatz zentralisiert die Authentifizierung und bietet mehrere Vorteile:

- Einheitliche Kontoverwaltung: Erstellung, Änderung und Löschung über Ihr Verzeichnis;
- Reduzierung der Angriffsfläche: Lokale Konten werden überflüssig oder eingeschränkt;
- Verbesserte Nachvollziehbarkeit: Zugriffe werden von Ihrem IdP protokolliert;
- Erweiterte Integration: MFA, Alerting, kontextbezogene Sicherheitsrichtlinien…;
- Erleichterte Compliance: Konsistenz mit Ihren internen Praktiken.

Aus diesen Gründen wird **die Identitätsföderung empfohlen**, insbesondere für Umgebungen mit einer großen Nutzerzahl oder hohen Sicherheitsanforderungen.

Folgen Sie unseren Schritt-für-Schritt-Anleitungen, um Ihren Identitätsanbieter zu integrieren:

- [Identitätsföderung mit Azure AD konfigurieren | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_azuread)
- [Identitätsföderung mit ADFS konfigurieren | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_adfs)

### Aktivieren der Multi-Faktor-Authentifizierung (MFA)

Die Multi-Faktor-Authentifizierung (MFA) erhöht die Zugriffssicherheit auf die Cloud Temple-Konsole erheblich. Sie fügt einen zusätzlichen Authentifizierungsschritt hinzu, indem ein von einer dedizierten App generierter temporärer Code zusätzlich zum Passwort verlangt wird. Diese Maßnahme reduziert das Risiko eines unbefugten Zugriffs erheblich, selbst im Falle eines Diebstahls von Zugangsdaten.

Für lokal von der Konsole verwaltete Konten (ohne Föderation) ist MFA standardmäßig aktiviert und kann nicht deaktiviert werden.

**Für föderierte Konten wird dringend empfohlen, MFA auf Seiten des Identitätsanbieters vorzuschreiben**, insbesondere für Administratoren mit Zugriff auf die Konsole.

Weitere Informationen:  

- [Was ist MFA und ist es obligatorisch? | Cloud Temple-Dokumentation](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Identitätsföderation mit Microsoft Entra ID | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_azuread)
- [Tutorial: Identitätsföderation mit Microsoft ADFS | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_adfs)

### Zugriff auf die Konsole von gesicherten Endgeräten aus

Der Arbeitsplatz und die Umgebung, von denen aus Sie auf die Konsole zugreifen, sind entscheidend für die Absicherung der Verwaltung Ihrer Cloud-Dienste. Wenn Sie in einer Umgebung mit hohen Sicherheitsanforderungen tätig sind, können Sie die folgenden Empfehlungen befolgen:

- Für die Verwaltung durch Ihre eigenen Teams: Wenden Sie ganz oder teilweise die [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) an;
- Bei der Verwaltung durch Dritte: Prüfen Sie, ob der Einsatz eines [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams) sinnvoll ist, abhängig von der Sensibilität der gehosteten Ressourcen sowie Ihrem rechtlichen und regulatorischen Rahmen.

### Sensibilisierung der Administratoren für das Phishing-Risiko

Der Zugriff auf die Cloud Temple Console erfordert erhöhte Wachsamkeit, insbesondere gegenüber Phishing-Versuchen, die darauf abzielen, Anmeldeinformationen oder MFA-Codes zu stehlen. Es ist entscheidend, dass autorisierte Benutzer regelmäßig für diese Risiken sensibilisiert werden: systematische Überprüfung der URL, Vorsicht bei unerwarteten Nachrichten und sofortige Meldung jeder verdächtigen Aktivität.

Um diese Risiken zu minimieren, empfehlen wir, die Console niemals über einen per E-Mail erhaltenen Link aufzurufen, sondern stets die übliche URL manuell einzugeben.

Diese Best Practices liegen in Ihrer Verantwortung als Kunde und sind entscheidend zur Verhinderung von Phishing-Angriffen. Bei Unsicherheiten steht Ihnen der Cloud Temple Support jederzeit zur Verfügung.

## Verwaltung von Cloud-Diensten

Ihre Cloud-Ressourcen werden über die Konsole verwaltet. Dieses Kapitel enthält wesentliche Empfehlungen zur Steuerung des Betriebs von Cloud-Diensten.

### Identifizieren der Tenant-Inhaber

Der Tenant-Inhaber verfügt über alle Berechtigungen für die aktivierten Produkte und erhält die offiziellen Benachrichtigungen. Es ist entscheidend sicherzustellen, dass die Inhaber Ihres Tenants die richtigen Ansprechpartner innerhalb Ihrer Organisation sind.

Für eine sichere und effiziente Verwaltung:

- **Bestimmen Sie einen verantwortlichen Inhaber**, vorzugsweise eine Person, die direkt in die Verwaltung der Umgebung eingebunden ist.
- **Überprüfen Sie die Kontakt-E-Mail-Adresse** des Inhabers, um sicherzustellen, dass diese gültig und regelmäßig abgerufen wird.
- **Sichern Sie eine direkte Kontrolle**, indem Sie einen Inhaber aus Ihrer Organisation hinzufügen, auch wenn Sie die Verwaltung Ihres Cloud-Dienstes an Dritte delegieren, um wichtige Benachrichtigungen und Entscheidungen überwachen zu können.
- **Beschränken Sie die Anzahl der Inhaber** auf 3, um die Angriffsfläche zu verringern und das Audit kritischer Aktionen zu erleichtern.

Weitere Informationen zur Verwaltung von Tenant-Inhabern finden Sie im [Guide des propriétaires sur un tenant | Documentation Cloud Temple](../../console/iam/concepts#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Berechtigungen für Ihre Cloud-Dienste verwalten

Die Cloud Temple Console ermöglicht eine granulare Zugriffsverwaltung, indem jedem Benutzer eine oder mehrere Berechtigungsebenen zugewiesen werden, die die erlaubten Aktionen genau festlegen. Konsultieren Sie die Dokumentation zu den Berechtigungen ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)), um die verschiedenen Berechtigungen im Detail zu verstehen und sie entsprechend zuzuweisen.

Für eine effektive und sichere Verwaltung der Berechtigungen empfehlen wir Ihnen, diese Best Practices zu befolgen:

- **Prinzip des geringsten Privilegs anwenden:** Verleihen Sie den Benutzern nur die für ihre Aufgaben erforderlichen Berechtigungen. Dies reduziert Risiken, indem der Zugriff auf nicht benötigte Funktionen eingeschränkt wird.
- **Kritische Berechtigungen einschränken:** Weisen Sie kritische Berechtigungen nur den Benutzern zu, die für diese Funktionen verantwortlich sind. Kritische Berechtigungen umfassen insbesondere die Zugriffsverwaltung (console\_public\_access\_write, \*\_console\_access, object - storage\_write), die Berechtigungsverwaltung (iam\_write, iam\_offline\_access) und die Backup-Verwaltung (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Lesezugriff bevorzugen:** Im Zweifelsfall gewähren Sie einen Lesezugriff (\*\_read), um Risiken zu minimieren, während der Zugriff auf die erforderlichen Informationen ermöglicht wird.
- **Regelmäßige Überprüfungen der Rechte durchführen:** Überprüfen Sie regelmäßig die Benutzerberechtigungen, um veraltete Berechtigungen zu entfernen. Der Export der Berechtigungen im CSV-Format erleichtert diese Verwaltung.**

Eine kontrollierte Zuweisung von Berechtigungen begrenzt das Risiko von Fehlern oder böswilligen Aktionen und stärkt gleichzeitig Ihre Sicherheitslage.

### Hypervisoren regelmäßig aktualisieren

Cloud Temple stellt regelmäßig Builds für Hypervisoren bereit, um die Anwendung von Sicherheitspatches sicherzustellen. Die Aktualisierung der Hypervisoren bleibt jedoch Ihre Verantwortung, da wir keinen Einblick in Ihre geschäftlichen Anforderungen haben.  

Daher empfehlen wir Ihnen Folgendes:

- Regelmäßig in der Konsole prüfen, ob neue Builds für Ihre Hypervisoren verfügbar sind;  
- **Die neuen Builds regelmäßig auf allen Ihren Hypervisoren bereitstellen**, insbesondere wenn sie Sicherheitslücken beheben;
- Regelmäßig die neuen Versionen der vmtools auf Ihren virtuellen Maschinen bereitstellen.

**Eine Seite mit Sicherheitswarnungen steht zur Verfügung**, um Sie über bekannte Schwachstellen und die zugehörigen Empfehlungen zu informieren: [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Überwachung der Aktivitäten in Cloud-Diensten

Um eine effektive Überwachung Ihrer Cloud-Umgebung zu gewährleisten und bei Anomalien schnell reagieren zu können, ist es entscheidend, eine aktive Überwachungsstrategie zu implementieren. Wir empfehlen Ihnen insbesondere Folgendes:

- **Überwachung der Dienstverfügbarkeit** über die [Status page | Cloud Temple](https://status.cloud-temple.com/), um bei Störungen oder globalen Ausfällen benachrichtigt zu werden;
- **Aktivieren Sie die themenspezifischen Benachrichtigungen**, die für Ihren Anwendungsfall relevant sind, über die Konsole, um wichtige Warnungen in Echtzeit zu erhalten (voir [Abonnement aux notifications thématiques | Documentation Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-thématiques));
- **Nutzung der Cloud-Aktivitätsprotokolle**, um sensible oder verdächtige Aktionen an Ihren Ressourcen zu identifizieren (voir section « Journalisation - Suivi des Activités » du [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart)). Die Erfassung und Analyse der Aktivitätsprotokolle kann über die Console-APIs automatisiert werden, um die Ereignisse in Ihre Überwachungs- oder Incident-Erkennungs-Tools zu integrieren.

## Sicherung der gehosteten Ressourcen

Im Cloud-Modell liegt die Verantwortung für die Sicherheit der bereitgestellten Ressourcen beim Nutzer. Cloud Temple stellt eine sichere Infrastruktur bereit, doch Sie sind selbst dafür verantwortlich, Ihre Betriebssysteme, Daten und Konfigurationen zu schützen.

Im Folgenden finden Sie die wichtigsten Best Practices zur Stärkung der Sicherheit Ihrer VMs: Konfiguration von Backup-Richtlinien, Verschlüsselung kritischer Ressourcen und Absicherung der Betriebssysteme. Diese Maßnahmen tragen dazu bei, das Risiko von Sicherheitsverletzungen zu minimieren, die Datenintegrität zu gewährleisten und im Falle eines Vorfalls die Geschäftskontinuität sicherzustellen.

### Konfiguration der Backups

Um die Sicherheit und Resilienz Ihrer Daten zu gewährleisten, ist es entscheidend, Ihre Backup-Richtlinien korrekt zu definieren und anzuwenden. Die Zuweisung einer Backup-Richtlinie zu jeder virtuellen Maschine vor dem Start ist obligatorisch. Die Dokumentation ist im Abschnitt "Backup" des [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart) verfügbar.

Hier finden Sie die Empfehlungen zur Verwaltung der Backup-Richtlinien für Ihre Cloud Temple-Ressourcen:

- **Definieren Sie Ihre Backup-Richtlinien:** Wenden Sie sich an den Support, um die Erstellung von Backup-Richtlinien zu beantragen, die den Sicherheitsanforderungen Ihrer Organisation entsprechen.  
- **Vermeiden Sie pausierte Richtlinien:** Lassen Sie keine VM mit einer pausierten Backup-Richtlinie verknüpft, um die Datensicherheit nicht zu gefährden.
- **Führen Sie Wiederherstellungstests durch:** Testen Sie regelmäßig die Wiederherstellung Ihrer Backups, um die Wirksamkeit Ihrer Wiederherstellungsverfahren zu überprüfen.

### Verschlüsselung sensibler VMs

Zusätzlich zur Festplattenverschlüsselung, die für alle Cloud-Ressourcen nativ verfügbar ist, **kann die VM-Verschlüsselung aktiviert werden, um Ihre sensibelsten Ressourcen zu schützen**. Dazu finden Sie weitere Informationen unter [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption).

Hier sind einige bewährte Verfahren für die Nutzung der VM-Verschlüsselung:

- Verschlüsselung für sensible VMs aktivieren: Aktivieren Sie diese bereits bei der Erstellung der Maschine oder während eines geplanten Updates. Der Vorgang erfordert einen vorübergehenden Ausfall der VM;
- Verschlüsselungsstatus überprüfen: Stellen Sie in der Konsole sicher, dass die VM den Status „verschlüsselt“ anzeigt;
- Vor der Verschlüsselung sichern: Stellen Sie sicher, dass die VM vor jeder Änderung ordnungsgemäß gesichert ist.

### Einschränken der Exposition Ihrer Ressourcen

Um die Angriffsfläche Ihrer virtuellen Maschinen zu begrenzen, wird dringend empfohlen, die exponierten Dienste auf das strikt Notwendige zu beschränken. Achten Sie insbesondere darauf, Ihre Ressourcen so zu konfigurieren, dass die **Verwaltungs- und Konsolenschnittstellen nicht öffentlich exponiert werden** der bereitgestellten Systeme und Anwendungen.

Wenn Sie die Objektspeicherdienste von Cloud Temple nutzen, wird ebenfalls empfohlen, **Ihre Buckets nicht auf öffentlichen Zugriff zu konfigurieren**, es sei denn, dies ist strikt erforderlich (siehe [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../../storage/oss/quickstart#gestion-des-politiques-daccès)).

### Virtualmaschinen härten (IaaS-Dienste)

Die Bereitstellung einer virtuellen Maschine in einer sicheren Cloud-Umgebung garantiert allein nicht die Sicherheit des Betriebssystems, der Dienste oder der darauf ausgeführten Anwendungen. Das Härten der VMs, unabhängig davon, ob sie von Ihnen bereitgestellt oder aus dem Katalog stammen, liegt in Ihrer Verantwortung.

Wir empfehlen Ihnen, **grundlegende Sicherheitsmaßnahmen umzusetzen**

- Die Systeme mit Sicherheitspatches auf dem neuesten Stand halten;
- Die Anzahl der exponierten Dienste einschränken;
- Unnötige Komponenten deaktivieren;  
- Zugriffsrechte auf das strikt Notwendige beschränken;
- Die Zugriffsprotokollierung aktivieren;
- Regelmäßige Backups konfigurieren.

Zur Unterstützung bei diesen Maßnahmen stützen Sie sich auf:

- Die Härtungsrichtlinien der Hersteller der von Ihnen verwendeten Software;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Diese bewährten Verfahren bilden die erste Verteidigungslinie zur Absicherung Ihrer Systeme in der Cloud.

### Härtung von Containern (PaaS-Dienste)

Um die Sicherheit Ihrer Container im Rahmen des OpenShift-PaaS-Dienstes zu gewährleisten, empfehlen wir Ihnen, die folgenden Maßnahmen zur Verstärkung ihrer Härtung umzusetzen:

- **Image-Quellen** : Stellen Sie sicher, dass alle Images aus vertrauenswürdigen Quellen stammen, wie z. B. internen Registries oder dem Red Hat Container Catalog, und vermeiden Sie die Verwendung nicht geprüfter Community-Images, wie sie im öffentlichen Docker Hub verfügbar sind.
- **Privilegienbeschränkung** : Beschränken Sie die Privilegien der Container mithilfe der OpenShift-Funktionen, insbesondere der *Security Context Constraints* (SCC), um die Berechtigungen auf das strikt Notwendige zu begrenzen.
- **SCC-Konfiguration** : Erstellen Sie für jede Anwendung oder jede Anwendungsgruppe benutzerdefinierte SCCs. Dies umfasst die Einschränkung der erlaubten Systemaufrufe (z. B. über *seccomp profiles*), mit spezifischen Konfigurationen wie dem Verbot von *ptrace* oder *mount*, um das Risiko von Container-Escape-Angriffen zu verringern.
- **Isolierung der Workloads** : Verwenden Sie *Namespaces* und *Network Policies*, um Anwendungen zu isolieren und unnötige Interaktionen zwischen Containern zu begrenzen.
- **Umfassende Protokollierung** : Aktivieren Sie die Protokollierung über den OpenShift Logging Operator, um Ereignisse im Zusammenhang mit Containern und gehosteten Systemen zu erfassen, um verdächtige Aktivitäten besser erkennen und analysieren zu können.

## Für weitere Informationen

Wenn Sie zusätzliche Sicherheitsservices oder eine verstärkte Unterstützung in Sicherheitsfragen (Audits, Hardening, Compliance, Beratung usw.) in Anspruch nehmen möchten, können Sie unsere **Professional Services** hinzuziehen. Für weitere Informationen wenden Sie sich bitte an Ihren Ansprechpartner bei Cloud Temple.