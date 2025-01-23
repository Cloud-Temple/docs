---
title: Concepts
---


## Nutzer

Die Zugänge zur Shiva-Konsole werden durch das Hauptkonto des Auftraggebers auf Einladung erstellt (unabhängig vom Authentifizierungsrepository).
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Die Identitätsföderation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellen eines Benutzerkontos in Ihrer Organisation

Das Erstellen eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladung. Um einen Benutzer in eine [Organisation](#organisations) einzuladen, gehen Sie im linken Menü __'Verwaltung'__ auf Ihrem Bildschirm und dann im Untermenü __'Benutzer'__.

Klicken Sie auf der Seite der Benutzer auf die Schaltfläche __'Neuer Benutzer'__.

![](images/shiva_onboard_003.png)

Geben Sie anschließend die E-Mail-Adresse des Benutzers an

![](images/shiva_onboard_004.png)

Der Benutzer erhält dann eine Bestätigungs-E-Mail.

![](images/shiva_onboard_001.png)

Nachdem die Überprüfung abgeschlossen ist, kann sich der Benutzer in die Konsole einloggen.

### Zuweisung von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt von der Benutzerseite aus.

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Es ist daher notwendig, dass der Administrator, der die Einladung ausgesprochen hat, ihm die für seine Tätigkeit erforderlichen Rechte gewährt. Klicken Sie einfach auf das Menü __'Aktionen'__ des Benutzers und wählen Sie die Option __'Bearbeiten'__.

Das Menü zur Aktivierung der Rechte erscheint dann:

![](images/shiva_onboard_005.png)

Die Konfiguration der Berechtigungen erfolgt für jeden [Tenant](#tenants) der [Organisation](#organisations).

Die Liste der Berechtigungen und deren Definition sind [hier](#permissions) zugänglich.

### Neueintragung eines Benutzers

Wenn ein Benutzer bereitgestellt wurde, aber die Anmeldung innerhalb des Ablaufs der von der Konsole gesendeten E-Mail nicht bestätigt hat, kann er seine Anmeldung nicht mehr bestätigen. Es ist dann möglich, ihm einen neuen Link zu senden, damit er seine erste Anmeldung erneuern kann.

Die Neueintragung eines Benutzers erfolgt im Reiter __'Benutzer'__ im Verwaltungsbereich unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie erneut registrieren möchten, und klicken Sie dann am Ende der Zeile auf die Aktionstaste und dann auf __'Neueintragung'__.

**Warnung**: Stellen Sie sicher, dass die Anfrage zur Neueintragung des Benutzerkontos von Ihnen kommt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_012.png)

### Aktualisieren Ihres Profils

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Profil aktualisieren'__.

Gehen Sie anschließend in Ihr Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zur Aktualisierung des Profils von Ihnen kommt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_014.png)

### Zurücksetzen des Passworts

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Passwort zurücksetzen'__.

Gehen Sie anschließend in Ihr Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zum Zurücksetzen Ihres Passworts von Ihnen kommt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_015.png)

### Zurücksetzen der Zwei-Faktor-Authentifizierung

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'MFA zurücksetzen'__.

Gehen Sie anschließend in Ihr Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zwei-Faktor-Authentifizierung zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zum Zurücksetzen Ihrer Zwei-Faktor-Authentifizierung von Ihnen kommt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_016.png)

### Löschen eines Benutzers

Das Löschen eines Benutzers erfolgt im Reiter __'Benutzer'__ im Verwaltungsbereich unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie am Ende der Zeile auf die Aktionstaste und dann auf __'Löschen'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Hinweis: Sie können sich nicht selbst löschen und Sie können keinen __'Eigentümer'__ Benutzer löschen.

### Abmelden

Die Abmeldung eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm und dann auf __'Abmelden'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Eine automatische Abmeldung erfolgt beim Ablauf des Sitzungstokens (JWT-Token).

### Ändern der Sprache eines Benutzers

Das Ändern der Sprache eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm unter __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden [Tenant](#tenants).

### Abonnement für thematische Benachrichtigungen

Das Abonnement-Management ermöglicht den Empfang von E-Mails zu aktivierten Themen, die automatisch bei entsprechenden Ereignissen gesendet werden.

Es ist im Benutzerprofil, im Reiter "Meine Abonnements" zugänglich:

![](images/shiva_profil_007.png)

Zum Beispiel werden im Falle eines Vorfalls spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und wird kontinuierlich erweitert, um den Anforderungen und Veränderungen in unserem operativen Umfeld gerecht zu werden.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine feine Verwaltung der Benutzerrechte einer Organisation mit einer Trennung pro Tenant.
Ursprünglich ermöglicht das Hauptkonto des Lieferanten die anfängliche Konfiguration der Konten und der damit verbundenen Berechtigungen.
Danach ermöglicht das Recht __'iam_write'__ einem Konto, die Berechtigungen anderer Benutzer zu verwalten.

### Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Wenn ein Benutzer erstellt wird, besitzt er standardmäßig keine Berechtigung. Jede Berechtigung wird einzeln zugewiesen und funktioniert eigenständig ohne Überlappung mit anderen Berechtigungen. Sie gelten in Kombination, was bedeutet, dass ein Benutzer über alle erforderlichen Berechtigungen verfügen muss, um eine spezifische Aktion auszuführen.

Die folgenden Berechtigungen sind für jeden Benutzer und für jeden Tenant Ihrer Organisation konfigurierbar:
	•	“Read“-Berechtigungen: ermöglichen nur das Anzeigen von Ressourcen ohne Änderungsmöglichkeit.
	•	“Write“-Berechtigungen: erlauben das Ändern von Konfigurationen.
 	•	“Management“-Berechtigungen: erlauben die erweiterte Verwaltung von Ressourcen.

- __Dies sind Berechtigungen, keine Rollen.__  Daher ist es notwendig, sowohl die Berechtigung READ als auch WRITE zu haben, um eine Konfiguration zu ändern.

__VERSION : 20241007__

| Name der Berechtigung                          | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Anzeigen von Logbüchern und Aktivitäten                                                                                        |
| activity_write                                | Verwaltung von Logbüchern und Aktivitäten                                                                                      |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Anzeigen                                                                 |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Ändern                                                                   |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Anzeigen                                                                   |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Ändern                                                                     |
| bastion_read                                  | Anzeigen von Bastion-Ressourcen                                                                                                |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen,...)                                                                  |
| bastion_console_access                        | Console-Zugriff (ssh/rdp) auf eine durch eine Bastion-Appliance geschützte Ressource                                           |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                               |

| compute_iaas_opensource_infrastructure_read   | Angebot OpenIaaS -Erweiterte Datenabfrage der Xen Orchestra Ressourcen |
| compute_iaas_opensource_infrastructure_write  | Angebot OpenIaaS -Erweiterte Verwaltung der Xen Orchestra Ressourcen                                                                          |
| compute_iaas_opensource_read                  | Angebot OpenIaaS -Abfrage von Ressourcen des Typs Virtuelle Maschinen                                                        |
| compute_iaas_opensource_management            | Angebot OpenIaaS -Verwaltung von Ressourcen des Typs Virtuelle Maschinen                                                             |
| compute_iaas_opensource_virtual_machine_power | Angebot OpenIaaS -Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| compute_iaas_vmware_console_access            | Angebot VMware - Öffnung der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_vmware_infrastructure_read       | Angebot VMware - Erweiterte Datenabfrage der VMware Ressourcen (Affinity/Anti-Affinity Regeln, DRS-Konfiguration, etc)  |
| compute_iaas_vmware_infrastructure_write      | Angebot VMware - Erweiterte Verwaltung der VMware Ressourcen                                                                           |
| compute_iaas_vmware_read                      | Angebot VMware - Abfrage von Ressourcen des Typs Virtuelle Maschinen                                                         |
| compute_iaas_vmware_management                | Angebot VMware - Verwaltung von Ressourcen des Typs Virtuelle Maschinen (ermöglicht die Verschlüsselung einer virtuellen Maschine)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Angebot VMware - Verwaltung der Stromversorgung einer virtuellen Maschine                                                               |
| baremetal_read                                | Angebot Bare Metal - Abfrage von Ressourcen des Typs Bare Metal                                                               |
| baremetal_console_access                      | Angebot Bare Metal - Öffnung der Konsole eines Bare Metals                                                                  |
| console_public_access_read                    | Abfrage der IPs, die auf die Konsole zugreifen dürfen                                                                         |
| console_public_access_write                   | Hinzufügen von IPs, die auf die Konsole zugreifen dürfen                                                                                  |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                              |
| documentation_read                            | Abfrage der Dokumentationsressourcen von Confluence                                                                        |
| housing_read                                  | Abfrage von Ressourcen des Typs Kolokation                                                                                 |
| iam_offline_access                            | Erstellen und Löschen von Personal Access Tokens (PAT)                                                                        |
| iam_read                                      | Abfrage der Benutzerrechte                                                                                           |
| iam_write                                     | Verwaltung der Benutzerrechte                                                                                                |
| intervention_read                             | Abfrage von geplanten Änderungen und Implementierungen auf der Plattform                                                  |
| inventory_read                                | Abfrage von Ressourcen des Typs Inventar                                                                                 |
| inventory_write                               | Verwaltung von Ressourcen des Typs Inventar                                                                                      |
| monitoring_read                               | Abfrage des Monitorings                                                                                                     |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                          |
| metric_read                                   | Abfrage von Gesundheitsdaten auf den virtuellen Maschinen und Hosts                                                         |
| network_read                                  | Abfrage von Netzwerkressourcen                                                                                             |
| network_write                                 | Verwaltung von Netzwerkressourcen                                                                                                  |
| order_read                                    | Abfrage von Infrastruktur-Bestellungen                                                                                     |
| order_write                                   | Erstellen von Infrastruktur-Bestellungen                                                                                            |
| object-storage_iam_management                 | Ermöglicht die Verwaltung der Benutzerkonten des S3-Produkts                                                                       |
| object-storage_read                           | Ermöglicht die Einsicht der Buckets und deren Konfigurationen                                                                   |
| object-storage_write                          | Ermöglicht die Bearbeitung der Buckets und deren Konfigurationen                                                                  |
| openshift_management                          | Ermöglicht die Verbindung mit den Openshift-Plattformen (mandantenbezogen)                                                          |
| support_management                            | Abfrage aller Support-Tickets des Mandanten                                                                       |
| support_read                                  | Abfrage der Support-Tickets des Mandanten                                                                                  |
| support_write                                 | Erstellung eines Support-Tickets für den Mandanten                                                                                     |
| tag_read                                      | Abfrage der Tags, außer RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung der Tags, außer RTMS-Tags                                                                                        |
| ticket_comment_read                           | Abfrage der Kommentare                                                                                                  |
| ticket_comment_write                          | Verwaltung der Kommentare                                                                                                       |
| ticket_read                                   | Abfrage der Tickets                                                                                                       |
| ticket_write                                  | Verwaltung der Tickets                                                                                                            |

**Notizen** :

- *Es gibt keine Begrenzung hinsichtlich der Anzahl der Eigentümer (Owners), die für den Mandanten festgelegt werden können. Allerdings gibt die Verwaltungsoberfläche (IHM) eine Warnung aus, wenn mehr als 3 Eigentümer vorhanden sind, um darauf hinzuweisen, dass die Begrenzung der Anzahl der Eigentümer aus Sicherheits- und optimalen Zugriffsverwaltungsgründen empfohlen wird.*
- *Beim Hinzufügen eines neuen Eigentümers (Owner) kann es bis zu 60 Minuten dauern, bis die Aktualisierung seiner Berechtigungen propagiert wird. Diese Zeitspanne ist normal und gewährleistet, dass die Zugriffsrechte ordnungsgemäß auf alle zugehörigen Dienste und Ressourcen angewendet werden.*
- *Um einen Eigentümer (Owner) vom Mandanten zu entfernen, muss der Benutzer einen Antrag beim Support stellen. Diese Vorgehensweise stellt sicher, dass Änderungen der Zugriffsrechte sicher und gemäß den bewährten Praxisrichtlinien für die Zugriffsverwaltung durchgeführt werden.*

### Veraltete Berechtigungen

Die folgenden Berechtigungen sind nicht mehr verfügbar:

| Name der Berechtigung                           | Datum       | Beschreibung der Berechtigung                                                                                   |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**VERALTET**)                  | 07/10/2024 | Abfrage von Ressourcen des Typs Backup                                                                     |
| backup_write (**VERALTET**)                  | 07/10/2024 | Verwaltung von Ressourcen des Typs Backup - Bearbeitung                                                           |
| compute_console_access (**VERALTET**)        | 07/10/2024 | Öffnung der Konsole einer virtuellen Maschine                                                                |
| compute_infrastructure_read (**VERALTET**)   | 07/10/2024 | Erweiterte Datenabfrage der VMware Ressourcen (Affinity/Anti-Affinity Regeln, DRS-Konfiguration, etc) |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Erweiterte Verwaltung der VMware-Ressourcen                                                                    |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Abfrage von Ressourcen des Typs Virtuelle Maschinen                                                           |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Verwaltung von Ressourcen des Typs Virtuelle Maschinen                                                        |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                       |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Verwaltung neuer Rechte für sich selbst                                                                        |


## Organisationen

Die Organisation ist mit Ihrem __Auftraggeberkonto__ und dem __zugehörigen Cloud Temple-Vertrag__ verknüpft. Sie repräsentiert Ihre Einheit (Unternehmen, Abteilung, Team, ...), die die vertragliche Beziehung zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert __die vertragliche Einheit__ für Nachverfolgungs- und Abrechnungsaspekte,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: Die Authentifizierung kann lokal auf der Shiva-Konsole oder aus der Ferne über einen Identitätsföderationsdienst erfolgen,
- Sie umfasst alle __Benutzerkonten__,
- Sie __föderiert die Tenants__ (Produktion, Präproduktion, Dev, Anwendung 1, Anwendung 2, ...), die Sie für die Bedürfnisse Ihrer Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Tenant konfigurierbar. Zum Beispiel kann ein Konto berechtigt sein, Ressourcen in einem Tenant zu bestellen, aber nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene __die Konfiguration des Authentifizierungsmechanismus__. Sie können das lokale Authentifizierungsverzeichnis der Shiva-Konsole verwenden oder Ihre Organisation an eines Ihrer Authentifizierungsverzeichnisse anbinden.

Die folgenden externen Verzeichnisse werden unterstützt:

- Verzeichnisse, die mit __OpenID Connect__ kompatibel sind,
- Verzeichnisse, die mit __SAML__ kompatibel sind,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

Der Tenant ist eine __Zusammenstellung von Ressourcen innerhalb einer Organisation__. Eine [Organisation](#organisations) hat mindestens einen Tenant (genannt __Standard-Tenant__, der umbenannt werden kann). In der Regel werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Beispiel:

- Ein Tenant __Produktion__
- Ein Tenant __Präproduktion__
- Ein Tenant __Test__
- Ein Tenant __Qualifikation__

Aber es ist auch möglich, die Dinge mit einer __anwendungsorientierten Ansicht__ oder nach __Kritikalität__ zu organisieren:

- Ein Tenant __Anwendung 1__ oder __Kritikalität 1__
- Ein Tenant __Anwendung 2__ oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen sind einem bestimmten Tenant zugeordnet und werden nicht mit anderen Tenants geteilt. Beispielsweise ist ein Hypervisor-Cluster und die damit verbundenen L2-Netzwerke nur in einem Tenant verfügbar.
Im Hinblick auf die Netzwerke ist es möglich, __‘cross-tenant’__ Netzwerke anzufordern, um die Netzwerkkontinuität zwischen den Tenants sicherzustellen.

Die Benutzerberechtigungen sind in jedem Tenant zu definieren. Daher muss jede Organisation sorgfältig über die gewünschten Tenants nachdenken. Dieser Punkt wird in der Regel in einem Initialisierungsworkshop zur Erstellung der Organisation erörtert.

Es ist möglich, die Architektur zu erweitern, indem Tenants hinzugefügt oder entfernt werden.

Ein Tenant kann nicht leer sein. Es muss notwendigerweise mit einem Minimum an Ressourcen initialisiert werden:

- Einer Verfügbarkeitszone (AZ, d. h. ein physisches Rechenzentrum),
- Einem Rechencluster,
- Einem Speicherplatz,
- Einem Netzwerk-VLAN.


| Bestellreferenz                                              | Einheit   | SKU                     |
|--------------------------------------------------------------|-----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants              | 1 tenant  | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone   | 1 tenant  | csp:(region):iaas:az:v1 |


### Zugriffsberechtigung zu einem Tenant: zugelassene IPs

Der Zugriff auf die Cloud-Management-Konsole ist streng auf vorher zugelassene IP-Adressen beschränkt, um den Anforderungen der SecNumCloud-Zertifizierung zu entsprechen. Diese Einschränkung gewährleistet einen erhöhten Sicherheitsstandard, indem nur Nutzer von bestimmten IP-Bereichen Zugriff erhalten, was das Risiko unbefugter Zugriffe minimiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards schützt.

Hinweis: *Die Entfernung einer zugelassenen IP-Adresse erfolgt über eine Support-Anfrage in der Cloud Temple-Konsole.*

### Ressourcennutzung innerhalb eines Tenants

Es ist möglich, die innerhalb eines Tenants genutzten Cloud-Ressourcen zu visualisieren, was einen detaillierten Überblick über die Nutzung der verschiedenen bereitgestellten Dienste bietet. Diese Funktion ermöglicht es den Benutzern, die Ressourcennutzung in Echtzeit zu verfolgen, die meistgenutzten Dienste zu identifizieren und ihre Nutzung basierend auf den Anforderungen zu optimieren.

Im Konsolenmenü klicken Sie auf „Verbrauchsbericht“ und wählen den gewünschten Zeitraum aus. So können Sie die Cloud-Ressourcennutzung im definierten Zeitraum im Detail anzeigen und die Dienstenutzung analysieren, um Ihre Verwaltung entsprechend zu optimieren:

![](images/shiva_tenant_ressources_01.png)