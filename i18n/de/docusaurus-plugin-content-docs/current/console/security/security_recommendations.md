

---
title: Gute Praktiken
---

*Letzte Aktualisierung: 22.05.2025*



## Empfehlungen für die sichere Nutzung der Cloud Temple-Dienste

Die Cloud Temple-Dienste bieten Ihnen eine hochsichere Cloud-Infrastruktur per Design. Allerdings liegen bestimmte Sicherheitspraktiken in Ihrer Verantwortung als Benutzer dieser Dienste. Dieser Leitfaden hilft Ihnen, die Sicherheit Ihrer Cloud-Umgebung zu stärken, indem Sie die in der Konsole verfügbaren Funktionen nutzen.

Sie finden darin konkrete Empfehlungen für:

- Schutz des Zugangs zur Cloud-Konsole;
- Kontrollierte Verwaltung von Zugriffen und Berechtigungen;
- Sicherung der über unsere Cloud-Dienste bereitgestellten Ressourcen.



## Zugriff auf die Konsole

Der Zugriff auf die Konsole ist der Einstiegspunkt zu allen Ihren Cloud Temple-Diensten. Es ist daher wichtig, ihn effektiv zu schützen.



### Zugriff auf die Konsole durch IP-Filterung beschränken

Der Zugriff auf die Cloud-Verwaltungskonsole ist auf vorab autorisierte IP-Adressen beschränkt. Diese Einschränkung ermöglicht es, den Zugriff nur für Benutzer aus den angegebenen IP-Bereichen zu erlauben, wodurch das Risiko von unerlaubtem Zugriff minimiert wird.

Sie können diese IP-Einschränkungen in den Einstellungen Ihrer Organisation konfigurieren. Um zu erfahren, wie Sie die IP-Filterung einrichten, konsultieren Sie die [Zugangs- und Authentifizierungsverwaltung | Cloud Temple-Dokumentation](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

Um die Effektivität dieses Mechanismus zu maximieren, achten Sie auf folgendes:

- **Beschränken Sie die Anzahl der erlaubten IP-Adressen auf das Notwendigste**;
- Vermeiden Sie zu große oder generische Bereiche;
- Fügen Sie **nur IP-Adressen aus kontrollierten Umgebungen** hinzu (z. B. Ausgangs-IPs Ihres Unternehmensnetzwerks);
- Verboten oder so weit wie möglich eingeschränkt: individuelle IP-Adressen (z. B. öffentliche IP-Adresse des Heimbüros Ihres IT-Personals);
- Verboten oder so weit wie möglich eingeschränkt: IP-Adressen von Dritten (z. B. Dienstleister);
- Halten Sie diese Liste bei Änderungen Ihrer Netzwerkinfrastruktur aktuell.

Für Fernzugriff (Homeoffice, Dienstleister...) bevorzugen Sie einen Zugang über Ihr Unternehmensnetzwerk via VPN anstelle der direkten Freigabe einzelner IP-Adressen. Dies reduziert die Angriffsfläche der Konsole und zentralisiert die Zugriffsverwaltung innerhalb Ihrer Organisation.



### Identitätsfederierung verwenden

Die Identitätsfederierung ermöglicht die Integration der Cloud Temple-Konsole bei Ihrem Identitätsanbieter (IdP) und aktiviert das SSO. Dieser Ansatz zentralisiert die Authentifizierung und bietet zahlreiche Vorteile:

- Einheitliche Kontoverwaltung: Erstellung, Änderung und Löschung über Ihr Verzeichnis;
- Reduzierung der Angriffsfläche: lokale Konten werden überflüssig oder eingeschränkt;
- Erhöhte Nachverfolgbarkeit: Zugriffe werden durch Ihren IdP protokolliert;
- Stärkere Integration: MFA, Alarmierung, kontextbezogene Sicherheitsrichtlinien…;
- Einfachere Einhaltung: Konsistenz mit Ihren internen Praktiken.

Aus diesen Gründen **wird die Identitätsfederierung empfohlen**, insbesondere für Umgebungen mit großem Personal oder hohen Sicherheitsanforderungen.

Befolgen Sie unsere Schritt-für-Schritt-Anleitungen, um Ihren Identitätsanbieter zu integrieren:

- [Identitätsfederierung mit Azure AD konfigurieren | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_azuread)
- [Identitätsfederierung mit ADFS konfigurieren | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_adfs)



### MFA-Authentifizierung aktivieren

Die Mehrfaktor-Authentifizierung (MFA) stärkt die Zugriffssicherheit auf die Cloud Temple-Konsole erheblich. Sie fügt eine zusätzliche Authentifizierungsstufe hinzu, bei der ein temporärer Code, der von einer speziellen Anwendung generiert wird, neben dem Passwort angefordert wird. Dieser Schutz begrenzt die Risiken von unautorisiertem Zugriff erheblich, auch wenn Anmeldeinformationen gestohlen werden.

Für Konten, die lokal über die Cloud Temple-Konsole verwaltet werden (ohne Federation), ist die MFA standardmäßig aktiviert und kann nicht deaktiviert werden.

**Für federierte Konten wird dringend empfohlen, die MFA auf Seiten des Identitätsanbieters zu verlangen**, insbesondere für Administratoren, die Zugriff auf die Konsole haben.

Weitere Informationen:  

- [Was ist MFA und ist es obligatorisch? | Cloud Temple-Dokumentation](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Identitätsfederierung mit Microsoft EntraID | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_azuread)
- [Tutorial: Identitätsfederierung mit Microsoft ADFS | Cloud Temple-Dokumentation](../../console/iam/tutorials/sso_adfs)



### Auf die Konsole von sicheren Geräten zugreifen

Der Arbeitsplatz und die Umgebung, von denen aus Sie auf die Konsole zugreifen, sind wichtig, um die Administration Ihrer Cloud-Dienste zu sichern. Wenn Sie in einem Umfeld mit hohen Sicherheitsanforderungen arbeiten, können Sie die folgenden Empfehlungen anwenden:

- Für die Administration durch Ihre eigenen Teams, wenden Sie eine oder mehrere der [Empfehlungen zur sicheren Administration von IT-Systemen | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) an;
- Bei der Administration durch Dritte prüfen Sie die Möglichkeit, auf [Zertifizierte Administrations- und Wartungsdienstleister (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams) zurückzugreifen, abhängig von der Sensibilität der gehosteten Ressourcen und Ihrem rechtlichen und regulatorischen Kontext.



### Bewusstsein der Administratoren für das Phishing-Risiko schärfen

Der Zugang zur Cloud Temple Console muss besonders aufmerksam überwacht werden, insbesondere gegenüber Phishing-Angriffen, die darauf abzielen, Zugangsdaten oder MFA-Codes zu stehlen. Es ist entscheidend, dass berechtigte Benutzer regelmäßig über diese Risiken informiert werden: systematische Überprüfung der URL, Vorsicht bei unerwarteten Nachrichten und unverzügliche Meldung jeder verdächtigen Aktivität.

Um diese Risiken zu begrenzen, empfehlen wir, niemals über einen Link zuzugreifen, der per E-Mail erhalten wurde, sondern immer die gewöhnliche URL manuell einzugeben.

Diese guten Praktiken sind Ihre Verantwortung als Kunde und sind entscheidend, um Phishing-Angriffe zu verhindern. Im Zweifelsfall steht Ihnen der Cloud Temple Support zur Verfügung.



## Cloud-Dienstverwaltung

Ihre Cloud-Ressourcen werden von der Konsole aus verwaltet. Dieses Kapitel präsentiert Ihnen wichtige Empfehlungen, um die Nutzung der Cloud-Dienste zu kontrollieren.



### Mandantbesitzer identifizieren

Der Mandantbesitzer verfügt über alle Berechtigungen für aktivierte Produkte und erhält offizielle Benachrichtigungen. Es ist entscheidend sicherzustellen, dass die Mandantbesitzer die richtigen Ansprechpartner innerhalb Ihrer Organisation sind.

Für eine sichere und effiziente Verwaltung:

- **Identifizieren Sie einen verantwortlichen Mandantbesitzer**, idealerweise eine Person, die direkt in die Verwaltung der Umgebung involviert ist.
- **Überprüfen Sie die Kontaktemail des Mandantbesitzers**, um sicherzustellen, dass sie gültig ist und regelmäßig geprüft wird.
- **Stellen Sie eine direkte Kontrolle sicher**, indem Sie einen Mandantbesitzer aus Ihrer Organisation hinzufügen, selbst wenn Sie die Verwaltung Ihres Cloud-Diensts an Dritte übertragen, um Benachrichtigungen und wichtige Entscheidungen überwachen zu können.
- **Begrenzen Sie die Anzahl der Mandantbesitzer auf 3**, um die Angriffsfläche zu reduzieren und die Auditierung kritischer Aktionen zu vereinfachen.

Weitere Informationen zur Verwaltung von Mandantbesitzern finden Sie im [Guide zu Mandantbesitzern | Cloud Temple-Dokumentation](../../console/iam/concepts#gestion-des-propri%C3%A9taires-sur-un-tenant).



### Berechtigungen für Ihre Cloud-Dienste verwalten

Die Cloud Temple-Konsole ermöglicht eine granulare Zugriffsverwaltung, indem jedem Benutzer ein oder mehrere Berechtigungsebenen zugewiesen werden, die genau die erlaubten Aktionen bestimmen. Lesen Sie die Berechtigungs-Dokumentation ([Verfügbare Berechtigungen für Benutzer Ihrer Organisation | Cloud Temple-Dokumentation](../../console/iam/concepts#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)), um detailliert zu verstehen, welche verschiedenen Berechtigungen vorhanden sind und wie Sie diese angemessen zuweisen.

Für eine effektive und sichere Berechtigungsverwaltung empfehlen wir, diese Best Practices zu befolgen:

- **Prinzip der minimalen Berechtigung anwenden:** Gewähren Sie Benutzern nur die Berechtigungen, die für ihre Aufgaben erforderlich sind. Dies reduziert Risiken, indem der Zugriff auf nicht benötigte Funktionen eingeschränkt wird.
- **Sensible Berechtigungen begrenzen:** Weisen Sie sensible Berechtigungen nur Benutzern zu, die für diese Funktionen verantwortlich sind. Zu den sensiblen Berechtigungen gehören insbesondere die Zugriffsverwaltung (console_public_access_write, *_console_access, object - storage_write), die Berechtigungsverwaltung (iam_write, iam_offline_access) und die Backup-Verwaltung (backup_iaas_opensource_write, backup_iaas_spp_write).**
- **Leserechte bevorzugen:** Bei Unsicherheit gewähren Sie Leserechte (*_read), um Risiken zu minimieren, während der Zugriff auf erforderliche Informationen ermöglicht wird.
- **Regelmäßige Überprüfung der Berechtigungen durchführen:** Überprüfen Sie regelmäßig die Berechtigungen der Benutzer, um veraltete Berechtigungen zu entfernen. Der Export der Berechtigungen im CSV-Format erleichtert diese Verwaltung.**

Eine kontrollierte Zuweisung von Berechtigungen begrenzt Risiken von Fehlern oder schädlichen Aktionen und stärkt Ihre Sicherheitsposition.



### Regelmäßige Aktualisierung der Hypervisoren

Cloud Temple stellt regelmäßig Builds für die Hypervisoren bereit, um die Anwendung von Sicherheitspatches zu gewährleisten. Die Aktualisierung der Hypervisoren bleibt jedoch Ihre Verantwortung, da wir keinen Einblick in Ihre geschäftlichen Anforderungen haben.

Daher empfehlen wir Ihnen:

- Regelmäßig in der Konsole zu prüfen, ob neue Builds für Ihre Hypervisoren verfügbar sind;  
- **Regelmäßig die neuen Builds auf allen Ihren Hypervisoren zu deployen**, insbesondere wenn sie Sicherheitslücken beheben;  
- Regelmäßig die neuen Versionen der vmtools auf Ihren virtuellen Maschinen zu deployen.

**Eine Sicherheitswarnungsseite ist verfügbar**, um Sie über bekannte Schwachstellen und zugehörige Empfehlungen zu informieren: [Sicherheitswarnungen | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).



### Aktivitäten auf Cloud-Diensten überwachen

Um eine effektive Überwachung Ihrer Cloud-Umgebung sicherzustellen und schnell auf Anomalien reagieren zu können, ist es entscheidend, eine aktive Überwachungsstrategie zu implementieren. Wir empfehlen insbesondere:

- **Die Verfügbbarkeit der Dienste überwachen** über die [Statusseite | Cloud Temple](https://status.cloud-temple.com/), um bei Incidenten oder Ausfällen globaler Natur benachrichtigt zu werden;
- **Relevante thematische Benachrichtigungen aktivieren** für Ihren Einsatzfall über die Console, um in Echtzeit wichtige Alarme zu erhalten (siehe [Abonnement zu thematischen Benachrichtigungen | Cloud Temple-Dokumentation](../../console/iam/concepts#abonnement-aux-notifications-thématiques));
- **Die Cloud-Protokolle auswerten**, um sensible oder verdächtige Aktionen auf Ihren Ressourcen zu identifizieren (siehe Abschnitt „Protokollierung – Aktivitätsverfolgung“ des [Leitfadens zur Einrichtung | Cloud Temple-Dokumentation](../../iaas_vmware/quickstart)). Die Erfassung und Analyse der Aktivitätsprotokolle kann über die Console-API automatisiert werden, um Ereignisse in Ihre Überwachungs- oder Incident-Erkennungstools zu integrieren.



## Ressourcen schützen

Im Cloud-Modell liegt die Sicherheit der bereitgestellten Ressourcen in der Verantwortung des Benutzers. Cloud Temple bietet eine sichere Infrastruktur, aber es liegt an Ihnen, Ihre Betriebssysteme, Ihre Daten und Ihre Konfigurationen zu schützen.

Unten finden Sie die wesentlichen Best Practices, um die Sicherheit Ihrer VM zu verstärken: Konfiguration von Sicherungsrichtlinien, Verschlüsselung kritischer Ressourcen und Verstärkung der Betriebssysteme. Diese Maßnahmen tragen dazu bei, die Risiken von Sicherheitsverletzungen zu begrenzen, die Datenintegrität zu gewährleisten und eine Betriebskontinuität im Falle eines Vorfalls zu sichern.



### Backup konfigurieren

Um die Sicherheit und Resilienz Ihrer Daten zu gewährleisten, ist es entscheidend, Ihre Backup-Politiken korrekt zu definieren und anzuwenden. Die Zuweisung einer Backup-Politik zu jeder virtuellen Maschine vor deren Start ist obligatorisch. Die Dokumentation ist in der Sektion „Backup“ des [Quickstart-Guides | Cloud Temple-Dokumentation](../../iaas_vmware/quickstart) verfügbar.

Hier sind die Empfehlungen für die Verwaltung der Backup-Politiken Ihrer Cloud Temple-Ressourcen:

- **Definieren Sie Ihre Backup-Politiken:** Fordern Sie den Support an, um Backup-Politiken zu erstellen, die den Sicherheitsanforderungen unserer Organisation entsprechen.  
- **Vermeiden Sie suspendierte Backup-Politiken:** Lassen Sie keine VM mit einer suspendierten Backup-Politik verbunden, um die Datenintegrität nicht zu gefährden.
- **Führen Sie regelmäßige Wiederherstellungstests durch:** Testen Sie regelmäßig die Wiederherstellung Ihrer Backups, um die Effektivität Ihrer Wiederherstellungsverfahren zu überprüfen.



### Verschlüsselung sensibler VMs

Zusätzlich zur Verschlüsselung der Daten auf Festplattenebene, die für alle Cloud-Ressourcen nativ ist, **kann die Verschlüsselung von VMs aktiviert werden, um Ihre sensibelsten Ressourcen zu schützen**. Dazu konsultieren Sie bitte [VMware-Maschine verschlüsseln | Cloud Temple-Dokumentation](../../iaas_vmware/tutorials/vm_encryption).

Hier sind einige bewährte Praktiken bei der Verwendung der VM-Verschlüsselung:

- Verschlüsselung auf sensiblen VMs aktivieren: Aktivieren Sie sie bei der Erstellung der Maschine oder während einer geplanten Aktualisierung. Der Vorgang erfordert einen vorübergehenden Stopp der VM;
- Status der Verschlüsselung prüfen: Kontrollieren Sie über die Konsole, ob die VM den Status "verschlüsselt" anzeigt;
- Vor der Verschlüsselung sichern: Stellen Sie sicher, dass die VM korrekt gesichert ist, bevor Sie Änderungen vornehmen.



### Einschränkung der Exposition Ihrer Ressourcen

Um die Angriffsfläche Ihrer virtuellen Maschinen zu begrenzen, wird dringend empfohlen, die exponierten Dienste auf das Notwendigste zu beschränken. Insbesondere achten Sie darauf, Ihre Ressourcen so zu konfigurieren, dass **die Verwaltungs-Schnittstellen und Konsole der deployten Systeme und Anwendungen nicht öffentlich zugänglich gemacht werden**.

Wenn Sie die Objektspeicher-Dienste von Cloud Temple verwenden, wird ebenfalls empfohlen, **Ihre Buckets nicht im öffentlichen Zugriff zu konfigurieren**, es sei denn, dies ist ausdrücklich notwendig (siehe [Einschränkung des Zugriffs auf Ihre S3-Buckets | Cloud Temple-Dokumentation](../../storage/oss/quickstart#gestion-des-politiques-daccès)).



### Virtuelle Maschinen harden (IaaS-Dienste)

Das Hosting einer virtuellen Maschine in einer sicheren Cloud garantiert allein nicht die Sicherheit des Betriebssystems, der Dienste oder der Anwendungen, die sie ausführt. Das Hardening von VMs, egal ob sie von Ihnen bereitgestellt werden oder aus dem Katalog stammen, liegt in Ihrer Verantwortung.

Wir empfehlen Ihnen, **die grundlegenden Sicherheitsmaßnahmen anzuwenden**

- Systeme aktuell mit Sicherheitspatches halten;
- Exponierte Dienste begrenzen;
- Nicht benötigte Komponenten deaktivieren;  
- Zugriffsrechte auf das Notwendigste beschränken;
- Zugriffsprotokollierung aktivieren;
- Regelmäßige Backups konfigurieren.

Um diese Maßnahmen umzusetzen, verlassen Sie sich auf :

- Die Hardening-Guides der Anbieter der von Ihnen verwendeten Software;
- [Essentielle Leitfäden und Cybersecurity-Best Practices | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Sicherheitsleitfäden CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Diese Best Practices bilden die erste Verteidigungslinie, um Ihre Systeme in der Cloud zu sichern.



### Container sicherer gestalten (PaaS-Dienste)

Um die Sicherheit Ihrer Container im Rahmen des PaaS-Dienstes OpenShift zu gewährleisten, empfehlen wir, die folgenden Maßnahmen zur Stärkung des Sicherheitsniveaus umzusetzen:

- **Bildquellen**: Stellen Sie sicher, dass alle Bilder aus vertrauenswürdigen Quellen stammen, wie z. B. internen Registrierungen oder dem Red Hat Container Catalog, und vermeiden Sie die Verwendung nicht verifizierter Community-Bilder, wie sie auf Docker Hub öffentlich verfügbar sind.
- **Einschränkung der Berechtigungen**: Begrenzen Sie die Berechtigungen der Container mithilfe der Funktionen von OpenShift, insbesondere der *Security Context Constraints* (SCC), um die Berechtigungen auf das unbedingt Notwendige zu beschränken.
- **Konfiguration der SCC**: Erstellen Sie benutzerdefinierte SCCs für jede Anwendung oder Gruppe von Anwendungen. Dies umfasst die Einschränkung der zulässigen Systemaufrufe (z. B. über *seccomp profiles*), mit spezifischen Konfigurationen wie dem Verbot von *ptrace* oder *mount*, um das Risiko von Container-Eskapaden zu reduzieren.
- **Arbeitslast-Isolierung**: Verwenden Sie *Namespaces* und *Network Policies*, um Anwendungen zu isolieren und unnotwendige Interaktionen zwischen Containern zu begrenzen.
- **Vollständige Protokollierung**: Aktivieren Sie die Protokollierung über den OpenShift-Logging-Operator, um Ereignisse im Zusammenhang mit Containern und Host-Systemen zu erfassen, um so verdächtige Aktivitäten besser zu erkennen und zu analysieren.



## Weiterführende Informationen

Wenn Sie zusätzliche Sicherheitsdienstleistungen oder eine verstärkte Begleitung bei Sicherheitsaspekten (Audit, Hardening, Compliance, Beratung usw.) wünschen, können unsere **Professional Services** in Anspruch genommen werden. Weitere Informationen erhalten Sie, indem Sie sich an Ihren Cloud Temple-Kontakt wenden.