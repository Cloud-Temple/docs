---
title: Concepts
---


## Benutzer

Die Zugänge zur Shiva-Konsole werden durch das Hauptkonto des Mandanten auf Einladung erstellt (unabhängig vom Authentifizierungs-Repository).
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Die Identitätsföderation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellen eines Benutzerkontos in Ihrer Organisation

Das Erstellen eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladung. Um einen Benutzer zu einer [Organisation](#organisations) einzuladen, gehen Sie zum __'Administration'__-Menü links auf Ihrem Bildschirm auf dem grünen Banner und dann in das Untermenü __'Benutzer'__.

Klicken Sie auf den Button __'Neuer Benutzer'__ auf der Benutzerseite.

![](images/shiva_onboard_003.png)

Geben Sie dann die E-Mail-Adresse des Benutzers ein

![](images/shiva_onboard_004.png)

Der Benutzer erhält dann eine Verifizierungs-E-Mail.

![](images/shiva_onboard_001.png)

Nach Abschluss der Verifizierung kann sich der Benutzer auf der Konsole anmelden.

### Zuweisung von Berechtigungen zu einem Benutzer

Das Management der Benutzerrechte erfolgt auf der Benutzerseite.

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Daher muss der Administrator, der die Einladung verschickt hat, ihm die erforderlichen Rechte für seine Tätigkeit gewähren. Klicken Sie einfach auf das Benutzer__'Aktions'__-Menü und wählen Sie die Option __'Bearbeiten'__.

Dann erscheint das Menü zur Rechtevergabe:

![](images/shiva_onboard_005.png)

Das Konfigurieren der Berechtigungen muss für jeden [Tenant](#tenants) in der [Organisation](#organisations) erfolgen.

Die Liste der Berechtigungen und deren Definition ist [hier](#permissions) verfügbar.

### Erneute Registrierung eines Benutzers

Wenn ein Benutzer bereitgestellt wurde, aber seine Registrierung nicht innerhalb der Ablaufzeit der von der Konsole gesendeten E-Mail bestätigt hat, kann er seine Registrierung nicht mehr bestätigen. Es ist dann möglich, ihm einen Link erneut zu senden, damit er seine erste Registrierung erneuern kann.

Die erneute Registrierung eines Benutzers erfolgt im __'Benutzer'__-Tab des Administration-Panels unten links auf dem Bildschirm.

Wählen Sie den Benutzer, den Sie erneut registrieren möchten, und klicken Sie auf den Aktionsbutton am Ende der Zeile und dann auf __'Erneute Registrierung'__.

**Warnung**: Stellen Sie sicher, dass die Anfrage zur erneuten Registrierung Ihres Benutzerkontos tatsächlich von Ihnen stammt. Melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_012.png)

### Aktualisierung Ihres Profils

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie im __'Profil'__ oben rechts auf dem Bildschirm dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Ihr Profil aktualisieren'__.

Gehen Sie dann zu Ihrem E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zur Aktualisierung des Profils tatsächlich von Ihnen stammt. Melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_014.png)

### Zurücksetzen des Passworts

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie im __'Profil'__ oben rechts auf dem Bildschirm dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Passwort zurücksetzen'__.

Gehen Sie dann zu Ihrem E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zum Zurücksetzen Ihres Passworts tatsächlich von Ihnen stammt. Melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_015.png)

### Zurücksetzen der Zwei-Faktor-Authentifizierung

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie im __'Profil'__ oben rechts auf dem Bildschirm dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'MFA zurücksetzen'__.

Gehen Sie dann zu Ihrem E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zwei-Faktor-Authentifizierung zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zum Zurücksetzen Ihrer Zwei-Faktor-Authentifizierung tatsächlich von Ihnen stammt. Melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_016.png)

### Löschen eines Benutzers

Das Löschen eines Benutzers erfolgt im __'Benutzer'__-Tab des Administration-Panels unten links auf dem Bildschirm.

Wählen Sie den Benutzer, den Sie löschen möchten, und klicken Sie auf den Aktionsbutton am Ende der Zeile und dann auf __'Löschen'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Hinweis: Sie können sich selbst nicht löschen und einen Benutzer __'Eigentümer'__ können Sie nicht löschen.

### Abmelden

Die Abmeldung eines Benutzers erfolgt im __'Profil'__ oben rechts auf dem Bildschirm und dann __'Abmelden'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Eine automatische Abmeldung erfolgt bei Ablauf des JWT-Session-Tokens.

### Ändern der Sprache eines Benutzers

Das Ändern der Sprache eines Benutzers erfolgt im __'Profil'__ oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden [Tenant](#tenants).

### Anmeldung zu thematischen Benachrichtigungen

Das Management der Abonnements ermöglicht den Empfang von E-Mails zu aktivierten Themenbereichen, die automatisch bei Auftreten entsprechender Ereignisse gesendet werden.

Sie ist im Benutzerprofil im Tab "Meine Abonnements" verfügbar:

![](images/shiva_profil_007.png)

 Zum Beispiel werden im Fall eines Vorfalls spezifische thematische E-Mail-Benachrichtigungen generiert.

Die Liste der verfügbaren Themenbereiche kann sich ändern und wird kontinuierlich erweitert, um den Bedürfnissen und Veränderungen in unserem Operationsumfeld gerecht zu werden.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine feine Verwaltung der Benutzerrechte einer Organisation, mit einer Trennung nach Tenant.
Anfänglich erlaubt das Hauptkonto des Auftraggebers die Initialkonfiguration der Konten und der zugehörigen Berechtigungen.
Später ermöglicht das Recht __'iam_write'__ einem Konto die Verwaltung der Berechtigungen anderer Benutzer.

### Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Wenn ein Benutzer erstellt wird, besitzt er standardmäßig keine Berechtigungen. Jede Berechtigung wird einzeln zugewiesen und funktioniert autark, ohne sich mit anderen Berechtigungen zu überschneiden. Sie gelten gleichzeitig, was bedeutet, dass ein Benutzer alle erforderlichen Berechtigungen besitzen muss, um eine spezifische Aktion auszuführen.

Die folgenden Berechtigungen können für jeden Benutzer und jeden Tenant Ihrer Organisation konfiguriert werden:
	•	Leseberechtigungen (“read”): ermöglichen nur das Betrachten von Ressourcen ohne Änderungsmöglichkeiten.
	•	Schreibberechtigungen („write“): erlauben die Änderung von Konfigurationen.
 	•	Management-Berechtigungen (“management“): erlauben das erweiterte Ressourcenmanagement.

- __Dies sind Berechtigungen, keine Rollen.__ In diesem Sinne ist es notwendig, die Berechtigung READ und WRITE zu haben, um eine Konfiguration ändern zu können.

__VERSION : 20250123__

| Name der Berechtigung                          | Beschreibung der Berechtigung                                                                                                    |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Einsicht in Logs und Aktivitäten                                                                                               |
| activity_write                                | Management von Logs und Aktivitäten                                                                                            |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Einsicht                                                                 |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Änderungen                                                               |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Einsicht                                                                   |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Änderungen                                                                 |
| bastion_read                                  | Einsicht in Bastion-Ressourcen                                                                                                 |
| bastion_write                                 | Verwaltung von Ressourcen (Appliances, Sitzungen,...) vom Typ Bastion                                                          |
| bastion_console_access                        | Zugangsberechtigung zur Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                              |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                |

| compute_iaas_opensource_infrastructure_read   | Angebot OpenIaaS - Erweitertes Datenlesen der Xen Orchestra Ressourcen |
| compute_iaas_opensource_infrastructure_write  | Angebot OpenIaaS - Erweiterte Verwaltung der Xen Orchestra Ressourcen                                                                          |
| compute_iaas_opensource_read                  | Angebot OpenIaaS - Abfrage der Ressourcen vom Typ Virtuelle Maschinen                                                        |
| compute_iaas_opensource_management            | Angebot OpenIaaS - Verwaltung der Ressourcen vom Typ Virtuelle Maschinen                                                             |
| compute_iaas_opensource_virtual_machine_power | Angebot OpenIaaS - Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| compute_iaas_vmware_console_access            | Angebot Vmware - Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_vmware_infrastructure_read       | Angebot Vmware - Erweitertes Datenlesen der VMware Ressourcen (Affinity/Anti-Affinity-Regeln, DRS-Konfiguration, etc)  |
| compute_iaas_vmware_infrastructure_write      | Angebot Vmware - Erweiterte Verwaltung der VMware Ressourcen                                                                           |
| compute_iaas_vmware_read                      | Angebot Vmware - Abfrage der Ressourcen vom Typ Virtuelle Maschinen                                                         |
| compute_iaas_vmware_management                | Angebot Vmware - Verwaltung der Ressourcen vom Typ Virtuelle Maschinen (ermöglicht die Verschlüsselung einer virtuellen Maschine)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Angebot Vmware - Verwaltung der Stromversorgung einer virtuellen Maschine                                                               |
| baremetal_read                                | Angebot Bare Metal - Abfrage der Ressourcen vom Typ Bare Metal                                                               |
| baremetal_console_access                      | Angebot Bare Metal - Öffnen der Konsole eines Bare Metal                                                                  |
| console_public_access_read                    | Abfrage der IPs, die Zugriff auf die Konsole haben                                                                         |
| console_public_access_write                   | Hinzufügen von IPs, die Zugriff auf die Konsole haben                                                                                  |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                              |
| documentation_read                            | Abfrage der Dokumentationsressourcen von Confluence                                                                        |
| housing_read                                  | Abfrage der Ressourcen vom Typ Colocation                                                                                 |
| iam_offline_access                            | Erstellen und Löschen von persönlichen Access Tokens (PAT)                                                                        |
| iam_read                                      | Abfrage der Benutzerrechte                                                                                           |
| iam_write                                     | Verwaltung der Benutzerrechte                                                                                                |
| intervention_read                             | Abfrage der geplanten Änderungen und Produktionsbereitstellungen auf der Plattform                                                  |
| inventory_read                                | Abfrage der Ressourcen vom Typ Inventar                                                                                 |
| inventory_write                               | Verwaltung der Ressourcen vom Typ Inventar                                                                                      |
| monitoring_read                               | Abfrage des Monitorings                                                                                                     |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                          |
| metric_read                                   | Abfrage der Gesundheitsdaten von virtuellen Maschinen und Hosts                                                         |
| network_read                                  | Abfrage der Netzwerkressourcen                                                                                             |
| network_write                                 | Verwaltung der Netzwerkressourcen                                                                                                  |
| order_read                                    | Abfrage der Infrastrukturbestellungen                                                                                     |
| order_write                                   | Erstellung von Infrastrukturbestellungen                                                                                            |
| object-storage_iam_management                 | Verwaltung der Speicherkonten im S3-Produkt                                                                       |
| object-storage_read                           | Einsicht in die Buckets und deren Konfigurationen                                                                   |
| object-storage_write                          | Bearbeiten der Buckets und deren Konfigurationen                                                                  |
| openshift_management                          | Ermöglicht den Zugriff auf die Openshift Plattformen (mandantenspezifisch)                                                          |
| support_management                            | Abfrage aller Support-Tickets des Mandanten                                                                       |
| support_read                                  | Abfrage der eigenen Support-Tickets des Mandanten                                                                                  |
| support_write                                 | Erstellung eines Support-Tickets für den Mandanten                                                                                     |
| tag_read                                      | Abfrage der Tags, außer RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung der Tags, außer RTMS-Tags                                                                                        |
| ticket_comment_read                           | Abfrage der Kommentare                                                                                                  |
| ticket_comment_write                          | Verwaltung der Kommentare                                                                                                       |
| ticket_read                                   | Abfrage der Tickets                                                                                                       |
| ticket_write                                  | Verwaltung der Tickets                                                                                                            |

**Notizen** :

- *Es gibt keine Begrenzung der Anzahl der Eigentümer (Owner), die auf dem Mandanten definiert werden können. Allerdings gibt das Verwaltungstool (GUI) eine Warnung aus, wenn mehr als 3 Eigentümer vorhanden sind, um die Anzahl der Eigentümer aus Sicherheits- und verwaltungstechnischen Gründen zu begrenzen.*
- *Beim Hinzufügen eines neuen Eigentümers (Owner) kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern. Diese Verzögerung ist normal und stellt sicher, dass die Zugangsrechte korrekt auf alle zugehörigen Dienste und Ressourcen angewendet werden.*
- *Um einen Eigentümer (Owner) vom Mandanten zu entfernen, muss der Benutzer eine Anfrage beim Support einreichen. Dieses Verfahren stellt sicher, dass Änderungen der Zugriffsrechte sicher und in Übereinstimmung mit den Best Practices für Zugriffsverwaltung durchgeführt werden.*

### Veraltete Berechtigungen

Die folgenden Berechtigungen sind nicht mehr verfügbar:

| Name der Berechtigung                         | Datum       | Beschreibung der Berechtigung                                                                                   |
| --------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**VERALTET**)                  | 07/10/2024 | Abfrage der Ressourcen vom Typ Backup                                                                     |
| backup_write (**VERALTET**)                  | 07/10/2024 | Verwaltung der Ressourcen vom Typ Backup - Bearbeitung                                                           |
| compute_console_access (**VERALTET**)        | 07/10/2024 | Öffnen der Konsole einer virtuellen Maschine                                                                |
| compute_infrastructure_read (**VERALTET**)   | 07/10/2024 | Erweitertes Datenlesen der VMware Ressourcen (Affinity/Anti-Affinity-Regeln, DRS-Konfiguration, etc) |

| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Fortgeschrittenes Management von VMware-Ressourcen                                                                       |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Abfrage von Ressourcen des Typs Virtuelle Maschinen                                                                       |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Verwaltung von Ressourcen des Typs Virtuelle Maschinen                                                                    |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                  |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Verwaltung neuer Rechte für sich selbst                                                                                    |


## Organisationen

Die Organisation ist mit Ihrem __sponsorierten Konto__ und dem __zugehörigen Cloud Temple Vertrag__ verbunden. Sie repräsentiert Ihre Einheit (Unternehmen, Abteilung, Team, ...), die das Vertragsverhältnis zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert __die vertragliche Einheit__ für Aspekte der Nachverfolgung und Abrechnung,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: die Authentifizierung kann lokal auf der Ebene der Shiva-Konsole oder remote über einen Identitätsfederationsdienst erfolgen,
- Sie umfasst alle __Benutzerkonten__,
- Sie __federiert die Tenants__ (Produktion, Préproduction, Dev, Anwendung 1, Anwendung 2, ...), die Sie für die Bedürfnisse Ihrer Cloud-Architektur festlegen.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Tenant konfigurierbar. Zum Beispiel kann ein Konto berechtigt sein, Ressourcen in einem Tenant zu bestellen, aber nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene __die Konfiguration des Authentifizierungsmechanismus__. Sie können
das lokale Authentifizierungsverzeichnis der Shiva-Konsole verwenden oder Ihre Organisation an eines Ihrer Authentifizierungsverzeichnisse anbinden.

Die folgenden externen Verzeichnisse werden unterstützt:

- Verzeichnisse kompatibel mit __OpenID Connect__,
- Verzeichnisse kompatibel mit __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

Der Tenant ist eine __Gruppierung von Ressourcen innerhalb einer Organisation__. Eine [Organisation](#organisations) hat mindestens einen Tenant (genannt __Standard-Tenant__, der umbenannt werden kann). In der Regel werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Zum Beispiel:

- Ein Tenant __Produktion__
- Ein Tenant __Préproduction__
- Ein Tenant __Recette__
- Ein Tenant __Qualifikation__

Aber es ist auch möglich, Dinge mit einer __applikationsspezifischen Ansicht__ oder nach __Kritikalität__ zu organisieren:

- Ein Tenant __Anwendung 1__ oder __Kritikalität 1__
- Ein Tenant __Anwendung 2__ oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen werden einem bestimmten Tenant zugewiesen und nicht mit anderen Tenants geteilt. Zum Beispiel steht ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Tenant zur Verfügung.
Für Netzwerke ist es möglich, __'cross tenant'__ Netzwerke anzufordern, um die Netzwerk-Continuity zwischen den Tenants zu gewährleisten.

Die Berechtigungen der Benutzer sind in jedem Tenant festzulegen. Jede Organisation sollte daher sorgfältig überlegen, welche Tenants gewünscht sind. Dieser Punkt wird in der Regel in einem Initialisierungsworkshop besprochen, wenn die Organisation erstellt wird.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tenants weiterzuentwickeln.

Ein Tenant darf nicht leer sein. Er muss mit einem Mindestmaß an Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherplatz,
- Ein Netzwerk-VLAN.


| Bestellreferenz                                             | Einheit  | SKU                     |
|-------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants             | 1 Tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone  | 1 Tenant | csp:(region):iaas:az:v1 |


### Zugriffserlaubnis auf einen Tenant: erlaubte IPs

Der Zugang zur Cloud-Management-Konsole ist streng auf zuvor autorisierte IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Qualifikation. Diese Einschränkung gewährleistet ein erhöhtes Maß an Sicherheit, indem der Zugriff nur für Benutzer aus spezifischen IP-Bereichen erlaubt wird, wodurch das Risiko eines unautorisierten Zugriffs minimiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards geschützt wird.

Hinweis: *Das Löschen einer autorisierten IP erfolgt über eine Supportanfrage in der Cloud Temple-Konsole.*

### Ressourcennutzung innerhalb eines Tenants

Es ist möglich, die verbrauchten Cloud-Ressourcen innerhalb eines Tenants zu visualisieren und bietet so eine detaillierte Ansicht der Nutzung der verschiedenen bereitgestellten Dienste. Diese Funktion ermöglicht es Benutzern, die Nutzung ihrer Ressourcen in Echtzeit zu überwachen, die am meisten genutzten Dienste zu identifizieren und deren Nutzung entsprechend den Bedürfnissen zu optimieren.

Im Menü der Konsole klicken Sie auf "Verbrauchsbericht" und wählen Sie den gewünschten Zeitraum aus. Sie können dann die Nutzung der Cloud-Ressourcen im definierten Zeitraum im Detail anzeigen, was es Ihnen ermöglicht, die Dienstenutzung zu analysieren und Ihre Verwaltung entsprechend zu optimieren:

![](images/shiva_tenant_ressources_01.png)