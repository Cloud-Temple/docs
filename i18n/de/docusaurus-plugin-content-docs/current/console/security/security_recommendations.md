---
title: Best Practices
---

*Letzte Aktualisierung: 22/05/2025*

## Empfehlungen für die sichere Nutzung der Cloud Temple-Dienste

Die Cloud Temple-Dienste bieten Ihnen eine hochsichere Cloud-Infrastruktur, die sicherheitsorientiert konzipiert ist. Allerdings obliegt es Ihnen als Nutzer dieser Dienste, bestimmte Sicherheitsbest-Practices einzuhalten. Dieser Leitfaden hilft Ihnen, die Sicherheit Ihrer Cloud-Umgebung zu stärken, indem Sie die in der Konsole angebotenen Funktionen nutzen.

Sie finden darin konkrete Empfehlungen für:

- Den Zugriff auf die Cloud-Konsole zu schützen;
- Zugriffe und Berechtigungen kontrolliert zu verwalten;
- Die über unsere Cloud-Dienste bereitgestellten Ressourcen zu sichern.

## Zugriff auf die Konsole

Der Zugriff auf die Konsole ist der Einstiegspunkt zu all Ihren Cloud Temple-Diensten. Es ist daher entscheidend, diesen wirksam zu schützen.

### Zugriff auf die Konsole durch IP-Filterung einschränken

Der Zugriff auf die Cloud-Verwaltungskonsole ist auf zuvor autorisierte IP-Adressen beschränkt. Diese Einschränkung ermöglicht es, den Zugriff ausschließlich auf Benutzer aus den angegebenen IP-Bereichen zu erlauben und damit das Risiko nicht autorisierter Zugriffe zu minimieren.

Sie können diese IP-Einschränkungen in den Einstellungen Ihrer Organisation konfigurieren. Um zu erfahren, wie Sie die IP-Filterung konfigurieren, konsultieren Sie die [Zugriffsverwaltung und Authentifizierung | Cloud Temple-Dokumentation](../../console/iam/quickstart?_highlight=*facteur#zugriffsverwaltung-und-authentifizierung).

Um die Wirksamkeit dieses Mechanismus zu maximieren, achten Sie darauf:

- **Die Anzahl der autorisierten IP-Adressen** auf das strikt Notwendige zu begrenzen;
- Zu weite oder generische Bereiche zu vermeiden;
- **Nur IP-Adressen aus kontrollierten Umgebungen** hinzuzufügen (z. B. Ausgangs-IP Ihrer Unternehmensnetzwerk);
- Individuelle IP-Adressen zu verbieten oder so weit wie möglich einzuschränken (z. B. öffentliche IP des Wohnsitzes Ihrer IT-Mitarbeiter);
- IP-Adressen Dritter zu verbieten oder einzuschränken (z. B. Dienstleister);
- Diese Liste bei Änderungen Ihrer Netzwerk-Infrastruktur aktuell zu halten.

Für Fernzugriffe (Homeoffice, Dienstleister usw.) empfehlen wir, über Ihr Unternehmensnetzwerk per VPN zu verbinden, anstatt individuelle IP-Adressen direkt zu autorisieren. Dies reduziert die Angriffsfläche der Konsole und zentralisiert die Zugriffsverwaltung innerhalb Ihrer Organisation.

### Identitätsföderation nutzen

Die Identitätsföderation ermöglicht es, die Cloud Temple-Konsole mit Ihrem Identitätsanbieter (IdP) zu integrieren, indem SSO aktiviert wird. Dieser Ansatz zentralisiert die Authentifizierung und bietet mehrere Vorteile:

- Einheitliche Kontoverwaltung: Erstellung, Änderung und Löschung über Ihr Verzeichnis;
- Reduzierung der Angriffsfläche: Lokale Konten werden unnötig oder eingeschränkt;
- Erhöhte Nachverfolgbarkeit: Zugriffe werden von Ihrem IdP protokolliert;
- Verstärkte Integration: MFA, Alerting, kontextbezogene Sicherheitsrichtlinien usw.;
- Erleichterte Compliance: Konsistenz mit Ihren internen Praktiken.

Aus diesen Gründen **wird die Identitätsföderation empfohlen**, insbesondere für Umgebungen mit großer Belegschaft oder hohen Sicherheitsanforderungen.

Folgen Sie unseren Schritt-für-Schritt-Anleitungen, um Ihren Identitätsanbieter zu integrieren:

- [Föderation mit Azure AD konfigurieren | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_azuread)
- [Föderation mit ADFS konfigurieren | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_adfs)

### Multi-Faktor-Authentifizierung (MFA) aktivieren

Die Multi-Faktor-Authentifizierung (MFA) stärkt die Sicherheit des Zugriffs auf die Cloud Temple-Konsole erheblich. Sie fügt einen Authentifizierungsschritt hinzu, indem ein temporärer Code angefordert wird, der von einer dedizierten Anwendung generiert wird, ergänzend zum Passwort. Diese Maßnahme reduziert das Risiko nicht autorisierter Zugriffe erheblich, selbst im Falle eines Diebstahls von Zugangsdaten.

Für lokal von der Konsole verwaltete Konten (ohne Föderation) ist MFA standardmäßig aktiviert und kann nicht deaktiviert werden.

**Für föderierte Konten wird dringend empfohlen, MFA auf Seiten des Identitätsanbieters zu erzwingen**, insbesondere für Administratoren mit Zugriff auf die Konsole.

Weitere Informationen:

- [Was ist MFA und ist es obligatorisch? | Cloud Temple-Dokumentation](../../console/iam/quickstart?_highlight=*facteur#was-ist-mfa-und-ist-es-obligatorisch)
- [Tutorial: Identitätsföderation mit Microsoft EntraID | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_azuread)
- [Tutorial: Identitätsföderation mit Microsoft ADFS | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_adfs)

### Zugriff auf die Konsole von gesicherten Geräten

Der Arbeitsplatz und die Umgebung, von der aus Sie auf die Konsole zugreifen, sind wichtig für die sichere Verwaltung Ihrer Cloud-Dienste. Wenn Sie in einer Umgebung mit hohen Sicherheitsanforderungen arbeiten, können Sie die folgenden Empfehlungen anwenden:

- Für die Verwaltung durch Ihre eigenen Teams, ganz oder teilweise die [Empfehlungen zur sicheren Verwaltung von IuK-Systemen | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) anwenden;
- Im Falle einer Verwaltung durch Dritte, die Inanspruchnahme eines [Anbieters für sichere Verwaltung und Wartung (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams) in Betracht ziehen, je nach Sensibilität der gehosteten Ressourcen und Ihrem rechtlichen und regulatorischen Kontext.

### Administratoren für das Phishing-Risiko sensibilisieren

Der Zugriff auf die Cloud Temple-Konsole erfordert besondere Aufmerksamkeit, insbesondere gegenüber Phishing-Versuchen, die darauf abzielen, Zugangsdaten oder MFA-Codes zu stehlen. Es ist entscheidend, dass berechtigte Benutzer regelmäßig für diese Risiken sensibilisiert werden: systematische Überprüfung der URL, Vorsicht bei unerwarteten Nachrichten und sofortige Meldung verdächtiger Aktivitäten.

Um diese Risiken zu begrenzen, empfehlen wir, niemals über einen per E-Mail empfangenen Link auf die Konsole zuzugreifen, sondern stets die übliche URL manuell einzugeben.

Diese Best Practices liegen in Ihrer Verantwortung als Kunde und sind wesentlich zur Prävention von Phishing-Angriffen. Bei Unsicherheiten steht der Cloud Temple-Support Ihnen zur Verfügung.

## Verwaltung der Cloud-Dienste

Ihre Cloud-Ressourcen werden über die Konsole verwaltet. Dieses Kapitel stellt Ihnen wesentliche Empfehlungen vor, um die Nutzung der Cloud-Dienste zu kontrollieren.

### Tenant-Eigentümer identifizieren

Der Tenant-Eigentümer verfügt über alle Berechtigungen, die mit den aktivierten Produkten verbunden sind, und erhält die offiziellen Benachrichtigungen. Es ist entscheidend sicherzustellen, dass die Eigentümer Ihres Tenants die geeigneten Ansprechpartner innerhalb Ihrer Organisation sind.

Für eine sichere und effiziente Verwaltung:

- **Identifizieren Sie einen verantwortlichen Eigentümer**, vorzugsweise eine Person, die direkt in die Verwaltung der Umgebung eingebunden ist.
- **Prüfen Sie die Kontakt-E-Mail-Adresse** des Eigentümers, um sicherzustellen, dass sie gültig und regelmäßig abgerufen wird.
- **Sichern Sie eine direkte Kontrolle**, indem Sie einen Eigentümer aus Ihrer Organisation hinzufügen, auch wenn Sie die Verwaltung Ihres Cloud-Dienstes delegieren, um Benachrichtigungen und wichtige Entscheidungen überwachen zu können.
- **Beschränken Sie die Anzahl der Eigentümer** auf 3, um die Angriffsfläche zu reduzieren und die Prüfung kritischer Aktionen zu erleichtern.

Weitere Informationen zur Verwaltung der Tenant-Eigentümer finden Sie im [Leitfaden für Eigentümer auf einem Tenant | Cloud Temple-Dokumentation](../../console/iam/concepts#verwaltung-der-eigentümer-auf-einem-tenant).

### Berechtigungen für Ihre Cloud-Dienste verwalten

Die Cloud Temple-Konsole ermöglicht eine granulare Zugriffsverwaltung, indem jedem Benutzer ein oder mehrere Berechtigungsebenen zugewiesen werden, die genau die erlaubten Aktionen bestimmen. Konsultieren Sie die Dokumentation zu den Berechtigungen ([Verfügbare Berechtigungen für Benutzer Ihrer Organisation | Cloud Temple-Dokumentation](../../console/iam/concepts#verfügbare-berechtigungen-für-benutzer-ihrer-organisation)), um die verschiedenen Berechtigungen im Detail zu verstehen und sie angemessen zuzuweisen.

Für eine effiziente und sichere Verwaltung der Berechtigungen empfehlen wir, diese Best Practices zu befolgen:

- **Das Prinzip der geringsten Berechtigung anwenden:** Erteilen Sie Benutzern ausschließlich die Berechtigungen, die für ihre Aufgaben erforderlich sind. Dies reduziert das Risiko, indem der Zugriff auf nicht benötigte Funktionen eingeschränkt wird.
- **Sensible Berechtigungen begrenzen:** Weisen Sie sensible Berechtigungen nur Benutzern zu, die für diese Funktionen verantwortlich sind. Sensible Berechtigungen betreffen insbesondere die Zugriffsverwaltung (console\_public\_access\_write, \*\_console\_access, object - storage\_write), die Berechtigungsverwaltung (iam\_write, iam\_offline\_access) und die Backup-Verwaltung (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Lesezugriff bevorzugen:** Im Zweifel erteilen Sie einen Lesezugriff (\*\_read), um das Risiko zu minimieren und gleichzeitig den Zugriff auf die erforderlichen Informationen zu ermöglichen.
- **Regelmäßige Rechteprüfungen durchführen:** Prüfen Sie regelmäßig die Berechtigungen der Benutzer, um veraltete zu entfernen. Der Export der Berechtigungen im CSV-Format erleichtert diese Verwaltung.**

Eine kontrollierte Zuweisung der Berechtigungen begrenzt das Risiko von Fehlern oder böswilligen Aktionen und stärkt gleichzeitig Ihre Sicherheitslage.

### Hypervisoren regelmäßig aktualisieren

Cloud Temple stellt regelmäßig Builds für die Hypervisoren bereit, um die Anwendung von Sicherheitspatches sicherzustellen. Allerdings liegt die Aktualisierung der Hypervisoren in Ihrer Verantwortung, da wir keine Sicht auf Ihre geschäftlichen Einschränkungen haben.

Daher empfehlen wir Ihnen:

- Regelmäßig in der Konsole die Verfügbarkeit neuer Builds für Ihre Hypervisoren zu prüfen;
- **Neue Builds regelmäßig auf allen Ihren Hypervisoren bereitzustellen**, insbesondere wenn sie Sicherheitslücken beheben;
- Regelmäßig neue Versionen der vmtools auf Ihren virtuellen Maschinen bereitzustellen.

**Eine Seite mit Sicherheitswarnungen ist verfügbar**, um Sie über bekannte Schwachstellen und die zugehörigen Empfehlungen zu informieren: [Sicherheitswarnungen | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

### Aktivität auf den Cloud-Diensten überwachen

Um eine wirksame Überwachung Ihrer Cloud-Umgebung sicherzustellen und bei Anomalien schnell reagieren zu können, ist es wesentlich, eine aktive Überwachungsstrategie umzusetzen. Wir empfehlen Ihnen insbesondere:

- **Die Verfügbarkeit der Dienste zu überwachen** über die [Status-Seite | Cloud Temple](https://status.cloud-temple.com/), um bei Vorfällen oder globalen Ausfällen benachrichtigt zu werden;
- **Themenbezogene Benachrichtigungen** für Ihre Nutzung über die Konsole zu aktivieren, um wichtige Warnungen in Echtzeit zu erhalten (siehe [Abonnement für themenbezogene Benachrichtigungen | Cloud Temple-Dokumentation](../../console/iam/concepts#abonnement-für-themenspezifische-benachrichtigungen));
- **Die Cloud-Aktivitätsprotokolle zu nutzen**, um sensible oder verdächtige Aktionen auf Ihren Ressourcen zu identifizieren (siehe Abschnitt „Protokollierung – Aktivitätsüberwachung" im [Einstiegsleitfaden | Cloud Temple-Dokumentation](../../iaas_vmware/quickstart)). Die Erfassung und Analyse der Aktivitätsprotokolle kann über die Konsole-APIs automatisiert werden, um Ereignisse in Ihre Überwachungs- oder Vorfallerkennungstools zu integrieren.

## Gehostete Ressourcen sichern

In einem Cloud-Modell liegt die Sicherheit der bereitgestellten Ressourcen in der Verantwortung des Nutzers. Cloud Temple stellt eine sichere Infrastruktur bereit, aber es liegt an Ihnen, Ihre Betriebssysteme, Daten und Konfigurationen zu schützen.

Nachfolgend finden Sie die wesentlichen Best Practices zur Stärkung der Sicherheit Ihrer VMs: Konfiguration von Backup-Richtlinien, Verschlüsselung kritischer Ressourcen und Härtung der Betriebssysteme. Diese Maßnahmen tragen dazu bei, das Risiko einer Kompromittierung zu begrenzen, die Integrität der Daten zu gewährleisten und die Geschäftskontinuität im Falle eines Vorfalls sicherzustellen.

### Backups konfigurieren

Um die Sicherheit und Resilienz Ihrer Daten sicherzustellen, ist es wesentlich, Ihre Backup-Richtlinien korrekt zu definieren und anzuwenden. Die Zuweisung einer Backup-Richtlinie zu jeder virtuellen Maschine vor ihrem Start ist obligatorisch. Die Dokumentation ist im Abschnitt „Backup" des [Einstiegsleitfadens | Cloud Temple-Dokumentation](../../iaas_vmware/quickstart) verfügbar.

Hier sind die Empfehlungen zur Verwaltung der Backup-Richtlinien Ihrer Cloud Temple-Ressourcen:

- **Definieren Sie Ihre Backup-Richtlinien:** Fordern Sie den Support auf, Backup-Richtlinien zu erstellen, die den Sicherheitsanforderungen Ihrer Organisation entsprechen.
- **Suspendierte Richtlinien vermeiden:** Lassen Sie keine VM mit einer suspendierten Backup-Richtlinie verknüpft, um die Sicherheit der Daten nicht zu gefährden.
- **Wiederherstellungstests durchführen:** Testen Sie regelmäßig die Wiederherstellung Ihrer Backups, um die Wirksamkeit Ihrer Wiederherstellungsverfahren zu kontrollieren.

### Sensible VMs verschlüsseln

Ergänzend zur nativen Datenverschlüsselung auf Datenträger-Ebene für alle Cloud-Ressourcen **kann die VM-Verschlüsselung aktiviert werden, um Ihre sensibelsten Ressourcen zu schützen**. Dazu konsultieren Sie [Eine VMware-Virtuelle Maschine verschlüsseln | Cloud Temple-Dokumentation](../../iaas_vmware/tutorials/vm_encryption).

Hier sind einige Best Practices bei der Nutzung der VM-Verschlüsselung:

- Verschlüsselung auf sensiblen VMs aktivieren: Wenden Sie sie bereits bei der Erstellung der Maschine oder bei einer geplanten Aktualisierung an. Der Vorgang erfordert den temporären Stillstand der VM;
- Verschlüsselungsstatus überprüfen: Kontrollieren Sie in der Konsole, dass die VM den Status „verschlüsselt" anzeigt;
- Vor der Verschlüsselung sichern: Stellen Sie sicher, dass die VM korrekt gesichert ist, bevor Änderungen vorgenommen werden.

### Die Exposition Ihrer Ressourcen einschränken

Um die Angriffsfläche Ihrer virtuellen Maschinen zu begrenzen, wird dringend empfohlen, die exponierten Dienste auf das strikt Notwendige zu beschränken. Achten Sie insbesondere darauf, Ihre Ressourcen so zu konfigurieren, dass **Verwaltungsoberflächen und Konsolen** der bereitgestellten Systeme und Anwendungen nicht öffentlich exponiert werden.

Wenn Sie die Objekt-Speicher-Dienste von Cloud Temple nutzen, wird ebenfalls empfohlen, **Ihre Buckets nicht auf öffentlichen Zugriff zu konfigurieren**, es sei denn, dies ist strikt erforderlich (siehe [Einschränkung des Zugriffs auf Ihre S3-Buckets | Cloud Temple-Dokumentation](../../storage/oss/quickstart#access-policy-management)).

### Härtung virtueller Maschinen (IaaS-Dienste)

Das Hosting einer virtuellen Maschine in einer sicheren Cloud-Umgebung garantiert allein nicht die Sicherheit des Betriebssystems, der Dienste oder der Anwendungen, die sie ausführt. Die Härtung der VMs, ob sie von Ihnen bereitgestellt oder aus dem Katalog bezogen wurden, liegt in Ihrer Verantwortung.

Wir empfehlen Ihnen, **grundlegende Sicherheitsmaßnahmen anzuwenden**

- Systeme mit Sicherheitsupdates auf dem neuesten Stand halten;
- Exponierte Dienste einschränken;
- Unnötige Komponenten deaktivieren;
- Zugriffsrechte auf das strikt Notwendige beschränken;
- Die Protokollierung von Zugriffen aktivieren;
- Regelmäßige Backups einrichten.

Als Orientierungshilfe für diese Maßnahmen können Sie sich auf Folgendes stützen:

- Die Härtungsrichtlinien der Hersteller der von Ihnen eingesetzten Software;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Diese bewährten Praktiken bilden die erste Verteidigungslinie zur Absicherung Ihrer Systeme in der Cloud.

### Härtung von Containern (PaaS-Dienste)

Um die Sicherheit Ihrer Container im Rahmen des PaaS-Dienstes OpenShift zu gewährleisten, empfehlen wir Ihnen, die folgenden Maßnahmen zur Stärkung ihrer Härtung umzusetzen:

- **Bildquelle**: Stellen Sie sicher, dass alle Bilder aus vertrauenswürdigen Quellen stammen, wie z. B. interne Register oder der Red Hat Container Catalog, und vermeiden Sie die Verwendung nicht verifizierter Community-Bilder, wie sie auf dem öffentlichen Docker Hub verfügbar sind.
- **Einschränkung der Berechtigungen**: Beschränken Sie die Privilegien der Container mithilfe der OpenShift-Funktionen, insbesondere der *Security Context Constraints* (SCC), um die Berechtigungen auf das strikt Notwendige zu begrenzen.
- **Konfiguration der SCC**: Erstellen Sie benutzerdefinierte SCCs für jede Anwendung oder jeden Anwendungsbereich. Dies umfasst die Einschränkung der erlaubten Systemaufrufe (z. B. über *seccomp profiles*), mit spezifischen Konfigurationen wie dem Verbot von *ptrace* oder *mount*, um das Risiko von Container-Escapes zu reduzieren.
- **Isolierung der Workloads**: Verwenden Sie *Namespaces* und *Network Policies*, um Anwendungen zu isolieren und unnötige Interaktionen zwischen Containern zu begrenzen.
- **Umfassende Protokollierung**: Aktivieren Sie die Protokollierung über den OpenShift Logging Operator, um Ereignisse, die mit Containern und gehosteten Systemen zusammenhängen, zu erfassen, um verdächtige Aktivitäten besser zu erkennen und zu analysieren.

## Weitere Informationen

Wenn Sie ergänzende Sicherheitsdienste oder eine verstärkte Unterstützung in Bezug auf Sicherheitsaspekte (Audit, Härtung, Compliance, Beratung usw.) in Anspruch nehmen möchten, können unsere **Professional Services** hinzugezogen werden. Für weitere Informationen wenden Sie sich an Ihren Ansprechpartner bei Cloud Temple.
