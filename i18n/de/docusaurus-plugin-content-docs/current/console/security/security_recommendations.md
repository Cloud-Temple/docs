---
title: Bewährte Praktiken
---

## Empfehlungen für die sichere Nutzung von Cloud Temple-Diensten

Die Cloud Temple-Dienste bieten Ihnen eine von Grund auf hochsichere Cloud-Infrastruktur. Bestimmte Sicherheitsmaßnahmen liegen jedoch in Ihrer Verantwortung als Nutzer dieser Dienste. Dieser Leitfaden hilft Ihnen, die Sicherheit Ihrer Cloud-Umgebung zu stärken, indem Sie die in der Console angebotenen Funktionen nutzen.

Sie finden hier konkrete Empfehlungen für:

- Den Schutz des Zugriffs auf die Cloud Console;
- Die kontrollierte Verwaltung von Zugriffen und Berechtigungen;
- Die Sicherung der über unsere Cloud-Dienste bereitgestellten Ressourcen.

## Zugriff auf die Console

Der Zugriff auf die Console ist das Eingangstor zu allen Ihren Cloud Temple-Diensten. Daher ist es wichtig, diesen Zugang effektiv zu schützen.

### Einschränkung des Console-Zugriffs durch IP-Filterung

Der Zugriff auf die Cloud-Management-Console ist auf zuvor autorisierte IP-Adressen beschränkt. Diese Einschränkung ermöglicht den Zugriff nur für Benutzer aus bestimmten IP-Bereichen und minimiert so das Risiko unbefugter Zugriffe.

Sie können diese IP-Einschränkungen in den Einstellungen Ihrer Organisation konfigurieren. Informationen zur Konfiguration der IP-Filterung finden Sie unter [Zugriffsverwaltung und Authentifizierung | Cloud Temple-Dokumentation](../console/iam/quickstart?_highlight=*facteur#gestion-des-acc%C3%A8s-et-authentification).

Um die Wirksamkeit dieses Mechanismus zu maximieren, sollten Sie:

- **Die Anzahl der autorisierten IP-Adressen** auf das unbedingt Notwendige beschränken;
- Zu breite oder generische Bereiche vermeiden;
- **Nur IPs aus kontrollierten Umgebungen hinzufügen** (z.B. ausgehende IP Ihres Unternehmensnetzwerks);
- Individuelle IP-Adressen (z.B. öffentliche IP-Adresse des Wohnsitzes Ihres IT-Personals) verbieten oder maximal einschränken;
- IP-Adressen von Dritten (z.B. Dienstleister) verbieten oder einschränken;
- Diese Liste bei Änderungen Ihrer Netzwerkinfrastruktur aktuell halten.

Für Fernzugriffe (Telearbeit, Dienstleister usw.) sollten Sie den Zugang über Ihr Unternehmensnetzwerk per VPN bevorzugen, anstatt einzelne IP-Adressen direkt zu autorisieren. Dies reduziert die Angriffsfläche der Console und zentralisiert die Zugriffsverwaltung innerhalb Ihrer Organisation.

### Nutzung der Identitätsföderation

Die Identitätsföderation ermöglicht die Integration der Cloud Temple Console mit Ihrem Identitätsanbieter (IdP) durch Aktivierung von SSO. Dieser Ansatz zentralisiert die Authentifizierung und bietet mehrere Vorteile:

- Einheitliche Kontoverwaltung: Erstellung, Änderung und Löschung über Ihr Verzeichnis;
- Reduzierte Angriffsfläche: Lokale Konten werden unnötig oder eingeschränkt;
- Erhöhte Nachverfolgbarkeit: Zugriffe werden von Ihrem IdP protokolliert;
- Verstärkte Integration: MFA, Alarmierung, kontextbezogene Sicherheitsrichtlinien usw.;
- Erleichterte Compliance: Konsistenz mit Ihren internen Praktiken.

Aus diesen Gründen wird **die Identitätsföderation empfohlen**, insbesondere für Umgebungen mit großem Personalbestand oder hohen Sicherheitsanforderungen.

Folgen Sie unseren Schritt-für-Schritt-Anleitungen zur Integration Ihres Identitätsanbieters:
- [Konfiguration der Föderation mit Azure AD | Cloud Temple-Dokumentation](../console/iam/tutorials/sso_aad)
- [Konfiguration der Föderation mit ADFS | Cloud Temple-Dokumentation](../console/iam/tutorials/sso_adfs)

### Aktivierung der Multi-Faktor-Authentifizierung (MFA)

Die Multi-Faktor-Authentifizierung (MFA) stärkt den Sicherheitszugriff auf die Cloud Temple Console erheblich. Sie fügt einen Authentifizierungsschritt hinzu, indem sie zusätzlich zum Passwort einen von einer speziellen Anwendung generierten temporären Code anfordert. Diese Maßnahme begrenzt das Risiko unbefugter Zugriffe stark, selbst wenn Anmeldedaten gestohlen werden.

Für lokal von der Console verwaltete Konten (ohne Föderation) ist MFA standardmäßig aktiviert und kann nicht deaktiviert werden.

**Für föderierte Konten wird dringend empfohlen, MFA auf Seiten des Identitätsanbieters zu verlangen**, insbesondere für Administratoren mit Zugriff auf die Console.

Weitere Informationen:

- [Was ist MFA und ist es obligatorisch? | Cloud Temple-Dokumentation](../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Identitätsföderation mit Microsoft EntraID | Cloud Temple-Dokumentation](../console/iam/tutorials/sso_aad)
- [Tutorial: Identitätsföderation mit Microsoft ADFS | Cloud Temple-Dokumentation](../console/iam/tutorials/sso_adfs)

### Zugriff auf die Console von sicheren Geräten

Der Arbeitsplatz und die Umgebung, von der aus Sie auf die Console zugreifen, sind wichtig für die Sicherung der Verwaltung Ihrer Cloud-Dienste. Wenn Sie in einer Umgebung mit hohen Sicherheitsanforderungen arbeiten, können Sie die folgenden Empfehlungen anwenden:

- Für die Verwaltung durch Ihre eigenen Teams: Anwendung aller oder eines Teils der [Empfehlungen für die sichere IS-Administration | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- Bei Verwaltung durch Dritte: Prüfung der Möglichkeit, einen [Anbieter für sichere Administration und Wartung (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams) zu beauftragen, je nach Sensibilität der gehosteten Ressourcen und Ihrem rechtlichen und regulatorischen Kontext.

### Sensibilisierung der Administratoren für Phishing-Risiken

Der Zugriff auf die Cloud Temple Console erfordert erhöhte Wachsamkeit, insbesondere gegenüber Phishing-Versuchen, die darauf abzielen, Anmeldedaten oder MFA-Codes zu stehlen. Es ist entscheidend, dass autorisierte Benutzer regelmäßig für diese Risiken sensibilisiert werden: systematische Überprüfung der URL, Vorsicht bei unerwarteten Nachrichten und sofortige Meldung verdächtiger Aktivitäten.

Um diese Risiken zu begrenzen, empfehlen wir, niemals über einen per E-Mail erhaltenen Link auf die Console zuzugreifen, sondern immer durch manuelle Eingabe der üblichen URL.

Diese bewährten Praktiken liegen in Ihrer Verantwortung als Kunde und sind wesentlich zur Verhinderung von Phishing-Angriffen. Im Zweifelsfall steht Ihnen der Cloud Temple-Support zur Verfügung.

## Verwaltung von Cloud-Diensten

Ihre Cloud-Ressourcen werden über die Console verwaltet. Dieses Kapitel präsentiert wesentliche Empfehlungen zur Kontrolle des Betriebs von Cloud-Diensten.

### Identifizierung der Tenant-Eigentümer

Der Tenant-Eigentümer verfügt über alle Berechtigungen für aktivierte Produkte und erhält offizielle Benachrichtigungen. Es ist entscheidend sicherzustellen, dass die Eigentümer Ihres Tenants die geeigneten Ansprechpartner innerhalb Ihrer Organisation sind.

Für eine sichere und effiziente Verwaltung:

- **Identifizieren Sie einen verantwortlichen Eigentümer**, vorzugsweise eine Person, die direkt an der Verwaltung der Umgebung beteiligt ist.
- **Überprüfen Sie die E-Mail-Adresse des Eigentümers**, um sicherzustellen, dass sie gültig ist und regelmäßig überprüft wird.
- **Stellen Sie eine direkte Kontrolle sicher**, indem Sie einen Eigentümer hinzufügen, der Mitglied Ihrer Organisation ist, selbst wenn Sie die Verwaltung Ihres Cloud-Dienstes auslagern, um Benachrichtigungen und wichtige Entscheidungen überwachen zu können.
- **Begrenzen Sie die Anzahl der Eigentümer** auf 3, um die Angriffsfläche zu reduzieren und die Prüfung kritischer Aktionen zu erleichtern.

Weitere Informationen zur Verwaltung von Tenant-Eigentümern finden Sie im [Leitfaden für Eigentümer eines Tenants | Cloud Temple-Dokumentation](../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Verwaltung der Berechtigungen für Ihre Cloud-Dienste

Die Cloud Temple Console ermöglicht eine granulare Zugriffsverwaltung, indem jedem Benutzer eine oder mehrere Berechtigungsstufen zugewiesen werden, die genau festlegen, welche Aktionen erlaubt sind. Konsultieren Sie die Berechtigungsdokumentation ([Verfügbare Berechtigungen für Benutzer Ihrer Organisation | Cloud Temple-Dokumentation](../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)), um die verschiedenen Berechtigungen im Detail zu verstehen und sie angemessen zuzuweisen.

Für eine effektive und sichere Berechtigungsverwaltung empfehlen wir die folgenden bewährten Praktiken:

- **Anwendung des Prinzips der geringsten Privilegien:** Gewähren Sie Benutzern nur die für ihre Aufgaben notwendigen Berechtigungen. Dies reduziert Risiken, indem der Zugriff auf unnötige Funktionen eingeschränkt wird.
- **Einschränkung sensibler Berechtigungen:** Weisen Sie sensible Berechtigungen nur Benutzern zu, die für diese Funktionen verantwortlich sind. Sensible Berechtigungen betreffen insbesondere die Zugriffsverwaltung (console\_public\_access\_write, \*\_console\_access, object - storage\_write), die Berechtigungsverwaltung (iam\_write, iam\_offline\_access) und die Backup-Verwaltung (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Bevorzugung des Nur-Lese-Zugriffs:** Im Zweifelsfall gewähren Sie Nur-Lese-Zugriff (\*\_read), um Risiken zu minimieren und gleichzeitig den Zugriff auf notwendige Informationen zu ermöglichen.
- **Regelmäßige Überprüfung der Rechte:** Überprüfen Sie regelmäßig die Berechtigungen der Benutzer, um veraltete zu entfernen. Der Export von Berechtigungen im CSV-Format erleichtert diese Verwaltung.**

Eine kontrollierte Zuweisung von Berechtigungen begrenzt das Risiko von Fehlern oder böswilligen Aktionen und stärkt gleichzeitig Ihre Sicherheitslage.

### Regelmäßige Aktualisierung der Hypervisoren

Cloud Temple stellt regelmäßig Builds für Hypervisoren bereit, um die Anwendung von Sicherheitspatches zu gewährleisten. Die Aktualisierung der Hypervisoren bleibt jedoch Ihre Verantwortung, da wir keinen Einblick in Ihre geschäftlichen Einschränkungen haben.

Daher empfehlen wir Ihnen:

- Regelmäßig in der Console die Verfügbarkeit neuer Builds für Ihre Hypervisoren zu überprüfen;
- **Regelmäßig neue Builds auf allen Ihren Hypervisoren zu implementieren**, insbesondere wenn sie Sicherheitslücken beheben;
- Regelmäßig neue Versionen der VMtools auf Ihren virtuellen Maschinen zu implementieren.

Eine in der Console verfügbare Sicherheitsinformationsseite hilft, bekannte Schwachstellen und zugehörige Empfehlungen (zu implementierende Builds usw.) zu identifizieren.

### Überwachung der Aktivitäten auf Cloud-Diensten

Um eine effektive Überwachung Ihrer Cloud-Umgebung zu gewährleisten und schnell auf Anomalien reagieren zu können, ist es wichtig, eine aktive Überwachungsstrategie zu implementieren. Wir empfehlen insbesondere:

- **Überwachung der Dienstverfügbarkeit** über die [Statusseite | Cloud Temple](https://status.cloud-temple.com/), um bei Vorfällen oder globalen Ausfällen alarmiert zu werden;
- **Aktivierung relevanter thematischer Benachrichtigungen** für Ihre Nutzung von der Console aus, um wichtige Warnungen in Echtzeit zu erhalten (siehe [Abonnement thematischer Benachrichtigungen | Cloud Temple-Dokumentation](../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Nutzung der Cloud-Aktivitätsprotokolle** zur Identifizierung sensibler oder verdächtiger Aktionen auf Ihren Ressourcen (siehe Abschnitt "Protokollierung - Aktivitätsverfolgung" im [Erste Schritte-Leitfaden | Cloud Temple-Dokumentation](../iaas_vmware/quickstart)). Die Sammlung und Analyse von Aktivitätsprotokollen kann über die Console-APIs automatisiert werden, um Ereignisse in Ihre Überwachungs- oder Vorfallerkennungstools zu integrieren.

## Sicherung gehosteter Ressourcen

In einem Cloud-Modell liegt die Sicherheit der bereitgestellten Ressourcen in der Verantwortung des Benutzers. Cloud Temple stellt eine sichere Infrastruktur bereit, aber es liegt an Ihnen, Ihre Betriebssysteme, Daten und Konfigurationen zu schützen.

Nachfolgend finden Sie die wesentlichen bewährten Praktiken zur Stärkung der Sicherheit Ihrer VMs: Konfiguration von Backup-Richtlinien, Verschlüsselung kritischer Ressourcen und Härtung von Betriebssystemen. Diese Maßnahmen tragen dazu bei, das Risiko einer Kompromittierung zu begrenzen, die Datenintegrität zu gewährleisten und die Geschäftskontinuität im Falle eines Vorfalls sicherzustellen.

### Konfiguration von Backups

Um die Sicherheit und Widerstandsfähigkeit Ihrer Daten zu gewährleisten, ist es wichtig, Ihre Backup-Richtlinien korrekt zu definieren und anzuwenden. Die Zuweisung einer Backup-Richtlinie zu jeder virtuellen Maschine vor ihrem Start ist obligatorisch. Die Dokumentation ist im Abschnitt "Backup" des [Erste Schritte-Leitfadens | Cloud Temple-Dokumentation](../iaas_vmware/quickstart) verfügbar.

Hier sind die Empfehlungen für die Verwaltung von Backup-Richtlinien für Ihre Cloud Temple-Ressourcen:

- **Definieren Sie Ihre Backup-Richtlinien:** Bitten Sie den Support um die Erstellung von Backup-Richtlinien, die an die Sicherheitsbedürfnisse Ihrer Organisation angepasst sind.
- **Vermeiden Sie ausgesetzte Richtlinien:** Lassen Sie keine VM mit einer ausgesetzten Backup-Richtlinie verbunden, um die Datensicherheit nicht zu gefährden.
- **Führen Sie Wiederherstellungstests durch:** Testen Sie regelmäßig die Wiederherstellung Ihrer Backups, um die Wirksamkeit Ihrer Wiederherstellungsverfahren zu überprüfen.

### Verschlüsselung sensibler VMs

Zusätzlich zur Datenverschlüsselung auf Festplattenebene, die für alle Cloud-Ressourcen nativ ist, **kann die VM-Verschlüsselung aktiviert werden, um Ihre sensibleren Ressourcen zu schützen**. Dazu siehe [Verschlüsselung einer VMware-VM | Cloud Temple-Dokumentation](../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Hier einige bewährte Praktiken bei der Verwendung der VM-Verschlüsselung:

- Aktivierung der Verschlüsselung auf sensiblen VMs: Wenden Sie sie bei der Erstellung der Maschine oder während eines geplanten Updates an. Der Vorgang erfordert das vorübergehende Anhalten der VM;
- Überprüfung des Verschlüsselungsstatus: Kontrollieren Sie von der Console aus, dass die VM den Status "verschlüsselt" anzeigt;
- Backup vor Verschlüsselung: Stellen Sie sicher, dass die VM vor jeder Änderung ordnungsgemäß gesichert ist.

### Einschränkung der Ressourcenexposition

Um die Angriffsfläche Ihrer virtuellen Maschinen zu begrenzen, wird dringend empfohlen, die exponierten Dienste auf das unbedingt Notwendige zu beschränken. Achten Sie insbesondere darauf, Ihre Ressourcen so zu konfigurieren, dass **Administrationsoberflächen und Konsolen** der bereitgestellten Systeme und Anwendungen **nicht öffentlich exponiert werden**.

Wenn Sie die Objektspeicherdienste von Cloud Temple nutzen, wird ebenfalls empfohlen, **Ihre Buckets nicht für öffentlichen Zugriff zu konfigurieren**, außer in Fällen, in denen dies unbedingt erforderlich ist (siehe [Einschränkung des Zugriffs auf Ihre S3-Buckets | Cloud Temple-Dokumentation](../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Härtung virtueller Maschinen (IaaS-Dienste)

Das Hosting einer virtuellen Maschine in einer sicheren Cloud garantiert allein noch nicht die Sicherheit des Betriebssystems, der Dienste oder der Anwendungen, die sie ausführt. Die Härtung von VMs, ob von Ihnen bereitgestellt oder aus dem Katalog stammend, liegt in Ihrer Verantwortung.

Wir empfehlen, **grundlegende Sicherheitsmaßnahmen anzuwenden**:

- Systeme mit Sicherheitspatches aktuell halten;
- Exponierte Dienste einschränken;
- Unnötige Komponenten deaktivieren;
- Zugriffsrechte auf das unbedingt Notwendige beschränken;
- Zugriffsprotokolle aktivieren;
- Regelmäßige Backups konfigurieren.

Zur Unterstützung bei diesen Maßnahmen können Sie sich auf folgende Ressourcen stützen:

- Härtungsleitfäden der Hersteller der von Ihnen verwendeten Software;
- [Wesentliche Leitfäden und bewährte Praktiken für Cybersicherheit | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [CIS Benchmarks® Sicherheitsleitfäden | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Diese bewährten Praktiken bilden die erste Verteidigungslinie zur Sicherung Ihrer Systeme in der Cloud.

### Härtung von Containern (PaaS-Dienste)

Um die Sicherheit Ihrer Container im Rahmen des OpenShift PaaS-Dienstes zu gewährleisten, empfehlen wir die Umsetzung der folgenden Maßnahmen zur Stärkung ihrer Härtung:

- **Bildquellen**: Stellen Sie sicher, dass alle Images aus vertrauenswürdigen Quellen stammen, wie internen Registries oder dem Red Hat Container Catalog, und vermeiden Sie die Verwendung ungeprüfter Community-Images, wie sie im öffentlichen Docker Hub verfügbar sind.
- **Einschränkung von Privilegien**: Beschränken Sie die Privilegien von Containern durch Nutzung der OpenShift-Funktionen, insbesondere der *Security Context Constraints* (SCC), um die Berechtigungen auf das unbedingt Notwendige zu beschränken.
- **SCC-Konfiguration**: Erstellen Sie benutzerdefinierte SCCs für jede Anwendung oder Anwendungsgruppe. Dies umfasst die Einschränkung autorisierter Systemaufrufe (z.B. über *seccomp profiles*), mit spezifischen Konfigurationen wie dem Verbot von *ptrace* oder *mount*, um das Risiko eines Container-Ausbruchs zu reduzieren.
- **Isolation von Workloads**: Verwenden Sie *Namespaces* und *Network Policies*, um Anwendungen zu isolieren und unnötige Interaktionen zwischen Containern zu begrenzen.
- **Vollständige Protokollierung**: Aktivieren Sie die Protokollierung über den OpenShift Logging Operator, um Ereignisse im Zusammenhang mit Containern und gehosteten Systemen zu erfassen und verdächtige Aktivitäten besser erkennen und analysieren zu können.

## Weiterführende Informationen

Wenn Sie von zusätzlichen Sicherheitsdiensten oder verstärkter Unterstützung in Sicherheitsaspekten (Audit, Härtung, Compliance, Beratung usw.) profitieren möchten, können unsere **Professional Services** in Anspruch genommen werden. Für weitere Informationen wenden Sie sich an Ihren Cloud Temple-Ansprechpartner.
