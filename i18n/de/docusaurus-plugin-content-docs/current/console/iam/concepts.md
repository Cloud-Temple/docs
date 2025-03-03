---
title: Concepts
---


## Benutzer

Die Zugänge zur Shiva-Konsole werden durch das Hauptkonto des Auftraggebers auf Einladung erstellt (unabhängig vom Authentifizierungs-Repository).
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Die Identitätsföderation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellen eines Benutzerkontos in Ihrer Organisation

Das Erstellen eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladung. Um einen Benutzer in einer [Organisation](#organisations) einzuladen, gehen Sie im linken Menü __'Administration'__ auf dem grünen Banner und dann im Untermenü __'Benutzer'__.

Klicken Sie auf der Benutzerseite auf die Schaltfläche __'Neuer Benutzer'__.

![](images/shiva_onboard_003.png)

Geben Sie dann die E-Mail-Adresse des Benutzers an.

![](images/shiva_onboard_004.png)

Der Benutzer erhält dann eine Bestätigungsmail.

![](images/shiva_onboard_001.png)

Nach Abschluss der Bestätigung kann sich der Benutzer in der Konsole anmelden.

### Zuweisen von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt über die Benutzerseite.

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Daher muss der einladende Administrator dem Benutzer die für seine Tätigkeit erforderlichen Rechte zuweisen. Klicken Sie einfach auf das Menü __'Aktionen'__ des Benutzers und wählen Sie die Option __'Bearbeiten'__.

Das Berechtigungsaktivierungsmenü erscheint dann:

![](images/shiva_onboard_005.png)

Die Konfiguration der Berechtigungen erfolgt für jeden [Mandant](#tenants) der [Organisation](#organisations).

Die Liste der Berechtigungen und ihre Definition sind [hier](#permissions) verfügbar.

### Wiederanmeldung eines Benutzers

Wenn ein Benutzer bereitgestellt wurde, aber seine Anmeldung nicht innerhalb der Ablaufzeit der von der Konsole gesendeten E-Mail bestätigt hat, kann er seine Anmeldung nicht mehr bestätigen. Es ist dann möglich, ihm einen Link zu senden, damit er sich erneut anmelden kann.

Die Wiederanmeldung eines Benutzers erfolgt im Tab __'Benutzer'__ des Administrationsbereichs unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie wiederanmelden möchten, und klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und dann auf __'Wiederanmeldung'__.

**Warnung**: Stellen Sie sicher, dass Sie den Antrag auf Wiederanmeldung Ihres Benutzerkontos gestellt haben. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_012.png)

### Aktualisieren Ihres Profils

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Ihr Profil aktualisieren'__.

Gehen Sie dann zu Ihrem Posteingang und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie den Antrag auf Aktualisierung des Profils gestellt haben. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_014.png)

### Zurücksetzen des Passworts

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Passwort zurücksetzen'__.

Gehen Sie dann zu Ihrem Posteingang und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie den Antrag auf Zurücksetzung Ihres Passworts gestellt haben. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_015.png)

### Zurücksetzen der Zwei-Faktor-Authentifizierung

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und wählen Sie die Aktion __'MFA zurücksetzen'__.

Gehen Sie dann zu Ihrem Posteingang und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zwei-Faktor-Authentifizierung zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie den Antrag auf Zurücksetzung Ihrer Zwei-Faktor-Authentifizierung gestellt haben. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_016.png)

### Löschen eines Benutzers

Das Löschen eines Benutzers erfolgt im Tab __'Benutzer'__ des Administrationsbereichs unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und dann auf __'Löschen'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Hinweis: Sie können sich selbst nicht löschen und Sie können keinen Benutzer __'Eigentümer'__ löschen.

### Abmelden

Die Abmeldung eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm und dann auf __'Abmelden'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Eine automatische Abmeldung erfolgt nach Ablauf des Sitzungstokens (JWT-Token).

### Ändern der Sprache eines Benutzers

Das Ändern der Sprache eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm unter __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden [Mandant](#tenants).

### Abonnement thematischer Benachrichtigungen

Das Management der Abonnements ermöglicht es, E-Mails zu den aktivierten Themen zu erhalten, die automatisch bei Auftreten entsprechender Ereignisse gesendet werden.

Es ist im Benutzerprofil im Tab "Meine Abonnements" verfügbar:

![](images/shiva_profil_007.png)

Zum Beispiel werden bei einem Vorfall spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und wird schrittweise erweitert, um sich an die Bedürfnisse und Änderungen in unserer operativen Umgebung anzupassen.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine feingranulare Verwaltung der Rechte der Benutzer einer Organisation, mit einer Trennung pro Mandant.
Anfangs ermöglicht das Hauptkonto des Auftraggebers die erstmalige Konfiguration der Konten und der zugehörigen Berechtigungen.
Anschließend ermöglicht das Recht __'iam_write'__ einem Konto, die Berechtigungen anderer Benutzer zu verwalten.

### Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Wenn ein Benutzer erstellt wird, hat er standardmäßig keine Berechtigung. Jede Berechtigung wird einzeln zugewiesen und funktioniert unabhängig, ohne Überschneidung mit anderen Berechtigungen. Sie gelten zusammen, was bedeutet, dass ein Benutzer über alle erforderlichen Berechtigungen verfügen muss, um eine bestimmte Aktion auszuführen.

Die folgenden Berechtigungen sind für jeden Benutzer und für jeden Mandanten Ihrer Organisation konfigurierbar:
	•	Leseberechtigungen (read): ermöglichen nur das Anzeigen von Ressourcen ohne Änderungsmöglichkeit.
	•	Schreibberechtigungen (write): erlauben das Ändern von Konfigurationen.
 	•	Managementberechtigungen (management): erlauben die erweiterte Verwaltung von Ressourcen.

- __Es sind Berechtigungen, keine Rollen.__ Daher ist es notwendig, die Berechtigung READ und WRITE zu haben, um eine Konfiguration zu ändern.

Letztes Update am: 23/01/2025

| Name der Berechtigung                         | Beschreibung der Berechtigung                                                                                                 |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Anzeigen von Logbüchern und Aktivitäten                                                                                       |
| activity_write                                | Verwaltung von Logbüchern und Aktivitäten                                                                                     |
| backup_iaas_opensource_read                   | Verwaltung der Backup-Ressourcen - OpenIaaS-Angebot - nur Anzeige                                                             |
| backup_iaas_opensource_write                  | Verwaltung der Backup-Ressourcen - OpenIaaS-Angebot - Änderung                                                                |
| backup_iaas_spp_read                          | Verwaltung der Backup-Ressourcen - Vmware-Angebot - nur Anzeige                                                               |
| backup_iaas_spp_write                         | Verwaltung der Backup-Ressourcen - Vmware-Angebot - Änderung                                                                  |
| bastion_read                                  | Anzeigen von Bastion-Ressourcen                                                                                               |
| bastion_write                                 | Verwaltung von Ressourcen (Appliances, Sitzungen,...) der Art Bastion                                                         |
| bastion_console_access                        | Erlauben des Zugangs zur Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                           |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                               |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS Angebot - Erweiterte Datenansicht der Xen Orchestra-Ressourcen                                                       |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS Angebot - Erweiterte Verwaltung der Xen Orchestra-Ressourcen                                                         |
| compute_iaas_opensource_read                  | OpenIaaS Angebot - Ressourcenansicht von virtuellen Maschinen                                                                 |
| compute_iaas_opensource_management            | OpenIaaS Angebot - Verwaltung der Ressourcen von virtuellen Maschinen                                                         |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                   |
| compute_iaas_vmware_console_access            | Vmware Angebot - Öffnung der Konsole einer virtuellen Maschine                                                                |
| compute_iaas_vmware_infrastructure_read       | Vmware Angebot - Erweiterte Datenansicht der VMware-Ressourcen (Affinity-/Anti-Affinity-Regeln, DRS-Konfiguration, usw.)     |
| compute_iaas_vmware_infrastructure_write      | Vmware Angebot - Erweiterte Verwaltung der VMware-Ressourcen                                                                  |
| compute_iaas_vmware_read                      | Vmware Angebot - Ressourcenansicht von virtuellen Maschinen                                                                   |
| compute_iaas_vmware_management                | Vmware Angebot - Verwaltung der Ressourcen von virtuellen Maschinen (ermöglicht die Verschlüsselung einer virtuellen Maschine)|
| compute_iaas_vmware_virtual_machine_power     | Vmware Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                     |
| baremetal_read                                | Bare Metal Angebot - Ressourcenansicht von Bare Metal                                                                         |
| baremetal_console_access                      | Bare Metal Angebot - Öffnung der Konsole eines Bare Metal                                                                     |
| console_public_access_read                    | Ansicht der IPs, die Zugriff auf die Konsole haben                                                                            |
| console_public_access_write                   | Hinzufügen von IPs, die Zugriff auf die Konsole haben                                                                         |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                      |
| documentation_read                            | Ansicht der Confluence-Dokumentationsressourcen                                                                               |
| housing_read                                  | Ressourcenansicht von Kollokation                                                                                             |
| iam_offline_access                            | Erstellung und Löschung von Personal Access Tokens (PAT)                                                                      |
| iam_read                                      | Ansicht der Benutzerberechtigungen                                                                                            |
| iam_write                                     | Verwaltung der Benutzerberechtigungen                                                                                         |
| intervention_read                             | Ansicht der geplanten Änderungen und Produktionsbereitstellungen auf der Plattform                                            |
| inventory_read                                | Ressourcenansicht von Inventar                                                                                                |
| inventory_write                               | Verwaltung der Inventarressourcen                                                                                             |
| monitoring_read                               | Ansicht des Monitorings                                                                                                       |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                    |
| metric_read                                   | Ansicht der Gesundheitsdaten von virtuellen Maschinen und Hosts                                                               |
| network_read                                  | Ressourcenansicht von Netzwerk                                                                                                |
| network_write                                 | Verwaltung der Netzwerkressourcen                                                                                             |
| order_read                                    | Ansicht der Infrastruktur-Bestellungen                                                                                        |
| order_write                                   | Erstellung von Infrastruktur-Bestellungen                                                                                     |
| object-storage_iam_management                 | Verwaltung der Speicherkonten auf dem S3-Produkt                                                                              |
| object-storage_read                           | Ansicht der Buckets und Bucket-Konfigurationen                                                                                |
| object-storage_write                          | Bearbeiten der Buckets und Bucket-Konfigurationen                                                                             |
| openshift_management                          | Verbindung zu Openshift-Plattformen (Mandant bezogen)                                                                         |
| support_management                            | Ansicht aller Support-Tickets des Mandanten                                                                                   |
| support_read                                  | Ansicht der eigenen Support-Tickets des Mandanten                                                                             |
| support_write                                 | Erstellung eines Support-Tickets auf dem Mandanten                                                                            |
| tag_read                                      | Ansicht der Tags, ausgenommen RTMS-Tags                                                                                       |
| tag_write                                     | Verwaltung der Tags, ausgenommen RTMS-Tags                                                                                    |
| ticket_comment_read                           | Ansicht der Kommentare                                                                                                        |
| ticket_comment_write                          | Verwaltung der Kommentare                                                                                                     |
| ticket_read                                   | Ansicht der Tickets                                                                                                           |
| ticket_write                                  | Verwaltung der Tickets                                                                                                        |

## Organisationen

Die Organisation ist mit Ihrem __Auftragskonto__ und dem __zugehörigen Cloud Temple-Vertrag__ verknüpft. Sie repräsentiert Ihre Einheit (Unternehmen, Abteilung, Team, ...) und stellt die vertragliche Beziehung zwischen Cloud Temple und Ihnen dar.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert die __vertragliche Einheit__ für Verfolgungs- und Abrechnungszwecke,
- Sie definiert die __globale Konfiguration des Authentifizierungsmechanismus__: die Authentifizierung kann lokal auf der Shiva-Konsole oder entfernt über einen Identitätsfederationsdienst erfolgen,
- Sie führt alle __Benutzerkonten__,
- Sie __vereint die Mandanten__ (Produktion, Preproduktion, Dev, Anwendung 1, Anwendung 2, ...), die Sie für die Bedürfnisse Ihrer Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Mandanten konfigurierbar. Beispielsweise kann ein Konto berechtigt sein, Ressourcen in einem Mandanten zu bestellen, jedoch nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene __die Konfiguration des Authentifizierungsmechanismus__. Sie können
das lokale Authentifizierungsverzeichnis der Shiva-Konsole verwenden oder Ihre Organisation an eines Ihrer
Authentifizierungsverzeichnisse andocken.

Die folgenden externen Verzeichnisse werden unterstützt:

- Verzeichnisse kompatibel mit __OpenID Connect__,
- Verzeichnisse kompatibel mit __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Mandant

Der Mandant ist __eine Sammlung von Ressourcen innerhalb einer Organisation__. Eine [Organisation](#organisations) hat mindestens einen Mandanten (der sogenannte __Standard-Mandant__, der umbenannt werden kann). In der Regel werden mehrere Mandanten verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Zum Beispiel:

- Ein Mandant __Produktion__
- Ein Mandant __Preproduktion__
- Ein Mandant __Test__
- Ein Mandant __Qualifizierung__

Es ist auch möglich, die Dinge mit einer __Anwendungssicht__ oder nach __Kritikalität__ zu organisieren:

- Ein Mandant __Anwendung 1__ oder __Kritikalität 1__
- Ein Mandant __Anwendung 2__ oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen werden einem bestimmten Mandanten zugewiesen und nicht mit anderen Mandanten geteilt. Zum Beispiel sind ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Mandanten verfügbar.
Bezüglich der Netzwerke ist es möglich, __'mandantenübergreifende'__ Netzwerke anzufordern, um die Netzwerkkontinuität zwischen den Mandanten zu gewährleisten.

Die Berechtigungen der Benutzer müssen in jedem Mandanten definiert werden. Daher muss jede Organisation die gewünschten Mandanten sorgfältig überdenken. Dieser Punkt wird in der Regel in einem Initialisierungsworkshop zum Zeitpunkt der Erstellung der Organisation behandelt.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Mandanten weiterzuentwickeln.

Ein Mandant kann nicht leer sein. Er muss unbedingt mit einem Minimum an Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, d.h. ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherplatz,
- Ein Netzwerk-VLAN.


| Bestellreferenz                                             | Einheit  | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Mandanten            | 1 Mandant| csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone   | 1 Mandant| csp:(region):iaas:az:v1 |


### Verwaltung der Eigentümer eines Tenants
Jeder Tenant hat mindestens einen Eigentümer, der so eine klare Verantwortlichkeit und eine effiziente Verwaltung der zugehörigen Ressourcen gewährleistet. Zudem ist es möglich, mehrere Eigentümer für einen Tenant zu bestimmen, wodurch eine Kollaboration und gemeinsame Entscheidungsfindung ermöglicht wird. Unten finden Sie wichtige Informationen, die bei der Verwaltung dieser Eigentümer zu beachten sind.

#### Wichtige Informationen zur Eigentümerverwaltung

#### 1. Anzahl der Eigentümer
* Es gibt keine technische Begrenzung für die Anzahl der Eigentümer, die für den Tenant bestimmt werden können.
* Die Verwaltungsoberfläche (IHM) gibt eine Warnung aus, wenn mehr als 3 Eigentümer vorhanden sind, um dazu anzuregen, die Anzahl der Eigentümer aus Sicherheits- und Zugriffsmanagementgründen zu begrenzen.

#### 2. Hinzufügen eines neuen Eigentümers
* Beim Hinzufügen eines neuen Eigentümers kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern.
* Diese Propagationszeit ist normal und stellt sicher, dass die Zugriffsrechte ordnungsgemäß auf alle zugehörigen Dienste und Ressourcen angewendet werden.

#### 2. Berechtigungen eines Eigentümers
* Ein Eigentümer erhält alle mit den für seinen Tenant aktivierten Produkten verbundenen Berechtigungen.
* Es ist nicht möglich, die Berechtigungen eines Eigentümers zu ändern.

#### 3. Entfernen eines Eigentümers
* Um einen Eigentümer vom Tenant zu entfernen, muss der Benutzer eine Anfrage an den Support stellen.
* Dieses Verfahren stellt sicher, dass Änderungen der Zugriffsrechte sicher und gemäß den Best Practices des Zugriffsmanagements durchgeführt werden.

### Autorisierter Zugriff auf einen Tenant: Zugelassene IPs

Der Zugriff auf die Cloud-Verwaltungskonsole ist streng auf zuvor zugelassene IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Qualifikation. Diese Beschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem der Zugriff nur Benutzern aus festgelegten IP-Bereichen erlaubt wird, wodurch die Risiken unbefugter Zugriffe minimiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards geschützt wird.

Hinweis : *Das Entfernen einer zugelassenen IP erfolgt durch eine Support-Anfrage über die Cloud Temple-Konsole.*

### Ressourcennutzung innerhalb eines Tenants

Es ist möglich, die innerhalb eines Tenants verbrauchten Cloud-Ressourcen anzuzeigen, wodurch eine detaillierte Ansicht der Nutzung der verschiedenen bereitgestellten Dienste geboten wird. Diese Funktion ermöglicht es den Benutzern, die Ressourcennutzung in Echtzeit zu verfolgen, die am meisten genutzten Dienste zu identifizieren und ihre Nutzung je nach Bedarf zu optimieren.

Im Menü der Konsole klicken Sie auf „Nutzungsbericht" und wählen Sie den gewünschten Zeitraum aus. Sie können dann die Ressourcennutzung der Cloud innerhalb des definierten Zeitraums im Detail anzeigen, was Ihnen ermöglicht, die Dienstnutzung zu analysieren und Ihre Verwaltung entsprechend zu optimieren:

![](images/shiva_tenant_ressources_01.png)
