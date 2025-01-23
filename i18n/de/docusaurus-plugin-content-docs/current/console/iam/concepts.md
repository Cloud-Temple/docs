---
title: Concepts
---


## Benutzer

Die Zugriffsberechtigungen auf die Shiva-Konsole werden vom Hauptkonto des Auftraggebers auf Einladung erstellt (unabhängig vom Authentifizierungs-Repository).
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Die Identitätsfederation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellen eines Benutzerkontos in Ihrer Organisation

Das Erstellen eines Benutzerkontos in Ihrer Organisation erfolgt per Einladung. Um einen Benutzer in eine [Organisation](#organisations) einzuladen, gehen Sie zum Menü __'Administration'__ auf der linken Seite Ihres Bildschirms im grünen Banner und dann zum Untermenü __'Benutzer'__.

Klicken Sie auf die Schaltfläche __'Neuer Benutzer'__ auf der Benutzerseite.

![](images/shiva_onboard_003.png)

Geben Sie dann die E-Mail-Adresse des Benutzers an.

![](images/shiva_onboard_004.png)

Der Benutzer erhält dann eine Bestätigungsmail.

![](images/shiva_onboard_001.png)

Nach Abschluss der Verifizierung kann sich der Benutzer in der Konsole anmelden.

### Zuweisen von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt auf der Benutzerseite.

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Es ist daher notwendig, dass der Administrator, der die Einladung ausgesprochen hat, dem Benutzer die notwendigen Rechte für seine Tätigkeit zuweist. Klicken Sie einfach auf das __'Aktionen'__-Menü des Benutzers und wählen Sie die Option __'Bearbeiten'__.

Das Menü zur Aktivierung der Rechte erscheint dann:

![](images/shiva_onboard_005.png)

Die Konfiguration der Berechtigungen muss für jeden [Tenant](#tenants) der [Organisation](#organisations) durchgeführt werden.

Die Liste der Berechtigungen und deren Definition ist [hier](#permissions) zugänglich.

### Neuanmeldung eines Benutzers

Wenn ein Benutzer bereitgestellt wurde, aber seine Anmeldung nicht innerhalb der Frist der von der Konsole gesendeten E-Mail bestätigt hat, kann er seine Anmeldung nicht mehr bestätigen. Es ist dann möglich, ihm einen Link zu senden, damit er seine erste Anmeldung erneuern kann.

Die Neuanmeldung eines Benutzers muss im __'Benutzer'__-Tab im Administrationsbereich, unten links auf dem Bildschirm, durchgeführt werden.

Wählen Sie den Benutzer aus, den Sie erneut registrieren möchten, und klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und anschließend auf __'Neuanmeldung'__.

**Warnung**: Stellen Sie sicher, dass Sie der Initiator der Anfrage zur Neuanmeldung Ihres Benutzerkontos sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_012.png)

### Aktualisieren Ihres Profils

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Profil aktualisieren'__.

Gehen Sie dann in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Initiator der Anfrage zur Profilaktualisierung sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_014.png)

### Zurücksetzen des Passworts

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Passwort zurücksetzen'__.

Gehen Sie dann in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Initiator der Anfrage zum Zurücksetzen Ihres Passworts sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_015.png)

### Zurücksetzen der Zwei-Faktor-Authentifizierung

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'MFA zurücksetzen'__.

Gehen Sie dann in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zwei-Faktor-Authentifizierung zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Initiator der Anfrage zum Zurücksetzen Ihrer Zwei-Faktor-Authentifizierung sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_016.png)

### Löschen eines Benutzers

Das Löschen eines Benutzers muss im __'Benutzer'__-Tab im Administrationsbereich, unten links auf dem Bildschirm, durchgeführt werden.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und anschließend auf __'Löschen'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Hinweis: Sie können sich nicht selbst löschen und Sie können keinen __'Eigentümer'__-Benutzer löschen.

### Abmelden

Die Abmeldung eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Abmelden'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Eine automatische Abmeldung erfolgt beim Ablauf des Sitzungs-Tokens (JWT-Token).

### Ändern der Sprache eines Benutzers

Das Ändern der Sprache eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration wird für jeden [Tenant](#tenants) durchgeführt.

### Abonnement thematischer Benachrichtigungen

Die Verwaltung der Abonnements ermöglicht es, E-Mails zu den aktivierten Themenbereichen zu erhalten, die automatisch beim Auftreten entsprechender Ereignisse gesendet werden.

Dies ist im Benutzerprofil im Tab "Meine Abonnements" zugänglich:

![](images/shiva_profil_007.png)

 Zum Beispiel werden im Falle eines Vorfalls spezifische E-Mail-Benachrichtigungen für dieses Thema generiert.

Die Liste der verfügbaren Themen kann sich im Laufe der Zeit weiterentwickeln und wird kontinuierlich erweitert, um den Bedürfnissen und Änderungen in unserem Betriebsumfeld gerecht zu werden.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine feine Verwaltung der Rechte der Benutzer einer Organisation, mit einer Trennung nach Tenant.
Ursprünglich ermöglicht das Hauptkonto des Auftraggebers die erstmalige Konfiguration der Konten und der zugehörigen Berechtigungen.
Anschließend ermöglicht das Recht __'iam_write'__ einem Konto, die Berechtigungen anderer Benutzer zu verwalten.

### Verfügbare Berechtigungen für Benutzer Ihrer Organisation

Die folgenden Berechtigungen sind für jeden [Benutzer](#benutzer) und für jeden [Tenant](#tenants#selection-dun-tenant) Ihrer Organisation konfigurierbar.

Verfügbare Berechtigungen für Benutzer Ihrer Organisation

Wenn ein Benutzer erstellt wird, besitzt er zunächst keine Berechtigungen. Jede Berechtigung wird individuell zugewiesen und funktioniert auf einer einzelnen Basis, ohne Überschneidung mit anderen Berechtigungen. Sie gilt in Kombination, was bedeutet, dass ein Benutzer über alle erforderlichen Berechtigungen verfügen muss, um eine spezifische Aktion durchzuführen.

Die folgenden Berechtigungen sind für jeden Benutzer und für jeden Tenant Ihrer Organisation konfigurierbar:
	•	Leseberechtigungen („read“): erlauben nur das Anzeigen von Ressourcen ohne Möglichkeit zur Änderung.
	•	Schreibberechtigungen („write“): erlauben das Ändern von Konfigurationen.
 	•	Verwaltungsberechtigungen („management“): erlauben die erweiterte Verwaltung von Ressourcen.

- __Es handelt sich um Berechtigungen, nicht um Rollen.__ Aus diesem Grund ist es notwendig, sowohl die Lese- als auch die Schreibberechtigung zu haben, um eine Konfiguration zu ändern.

__VERSION: 20241007__

| Name der Berechtigung                         | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Anzeigen von Protokollen und Aktivitäten                                                                                        |
| activity_write                                | Verwaltung von Protokollen und Aktivitäten                                                                                      |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Anzeige                                                                   |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Änderung                                                                  |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Anzeige                                                                     |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Änderung                                                                    |
| bastion_read                                  | Anzeigen von Bastion-Ressourcen                                                                                                 |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen,...)                                                                   |
| bastion_console_access                        | Konsolenzugriff (ssh/rdp) auf eine durch eine Bastion-Appliance geschützte Ressource                                            |
| compute_iaas_opensource_console_access        | Offre OpenIaaS -Öffnung der Konsole einer virtuellen Maschine                                                                |
| compute_iaas_opensource_infrastructure_read   | Offre OpenIaaS -Einsicht in erweiterte Daten der Xen Orchestra-Ressourcen |
| compute_iaas_opensource_infrastructure_write  | Offre OpenIaaS -Erweiterte Verwaltung der Xen Orchestra-Ressourcen                                                                          |
| compute_iaas_opensource_read                  | Offre OpenIaaS -Einsicht in Ressourcen vom Typ Virtuelle Maschinen                                                        |
| compute_iaas_opensource_management            | Offre OpenIaaS -Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                             |
| compute_iaas_opensource_virtual_machine_power | Offre OpenIaaS -Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| compute_iaas_vmware_console_access            | Offre Vmware - Öffnung der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offre Vmware - Einsicht in erweiterte Daten der VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration, etc)  |
| compute_iaas_vmware_infrastructure_write      | Offre Vmware - Erweiterte Verwaltung der VMware-Ressourcen                                                                           |
| compute_iaas_vmware_read                      | Offre Vmware - Einsicht in Ressourcen vom Typ Virtuelle Maschinen                                                         |
| compute_iaas_vmware_management                | Offre Vmware - Verwaltung von Ressourcen vom Typ Virtuelle Maschinen (ermöglicht die Verschlüsselung einer virtuellen Maschine)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offre Vmware - Verwaltung der Stromversorgung einer virtuellen Maschine                                                               |
| baremetal_read                                | Offre Bare Metal - Einsicht in Ressourcen vom Typ Bare Metal                                                               |
| baremetal_console_access                      | Offre Bare Metal - Öffnung der Konsole eines Bare Metal                                                                  |
| console_public_access_read                    | Einsicht in die IPs, die Zugriff auf die Konsole haben                                                                         |
| console_public_access_write                   | Hinzufügen von IPs, die Zugriff auf die Konsole haben                                                                                  |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                              |
| documentation_read                            | Einsicht in die Confluence-Dokumentationsressourcen                                                                        |
| housing_read                                  | Einsicht in Ressourcen vom Typ Colocation                                                                                 |
| iam_offline_access                            | Erstellung und Löschung von Personal Access Tokens (PAT)                                                                        |
| iam_read                                      | Einsicht in Benutzerrechte                                                                                           |
| iam_write                                     | Verwaltung von Benutzerrechten                                                                                                |
| intervention_read                             | Einsicht in geplante Änderungen und Deployments auf der Plattform                                                  |
| inventory_read                                | Einsicht in Ressourcen vom Typ Inventar                                                                                 |
| inventory_write                               | Verwaltung von Ressourcen vom Typ Inventar                                                                                      |
| monitoring_read                               | Einsicht in das Monitoring                                                                                                     |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                          |
| metric_read                                   | Einsicht in Gesundheitsdaten von virtuellen Maschinen und Hosts                                                         |
| network_read                                  | Einsicht in Netzwerkressourcen                                                                                             |
| network_write                                 | Verwaltung von Netzwerkressourcen                                                                                                  |
| order_read                                    | Einsicht in Infrastrukturaufträge                                                                                     |
| order_write                                   | Erstellung von Infrastrukturaufträgen                                                                                            |
| object-storage_iam_management                 | Erlaubt die Verwaltung von Speicherkonten im S3-Produkt                                                                       |
| object-storage_read                           | Erlaubt die Einsicht in Buckets und deren Konfigurationen                                                                   |
| object-storage_write                          | Erlaubt das Bearbeiten von Buckets und deren Konfigurationen                                                                  |
| openshift_management                          | Erlaubt die Verbindung zu Openshift-Plattformen (tenant-bezogene Berechtigung)                                                          |
| Owner                                         | Der Benutzer hat Administratorrechte für einen Tenant                                                                        |
| support_management                            | Einsicht in alle Support-Tickets des Tenants                                                                       |
| support_read                                  | Einsicht in eigene Support-Tickets des Tenants                                                                                  |
| support_write                                 | Erstellung eines Support-Tickets für den Tenant                                                                                     |
| tag_read                                      | Einsicht in Tags, außer RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung von Tags, außer RTMS-Tags                                                                                        |
| ticket_comment_read                           | Einsicht in Kommentare                                                                                                  |
| ticket_comment_write                          | Verwaltung von Kommentaren                                                                                                       |
| ticket_read                                   | Einsicht in Tickets                                                                                                       |
| ticket_write                                  | Verwaltung von Tickets                                                                                                            |

**Notes** :

- *Es gibt keine Begrenzung der Anzahl von Besitzern (Owners), die auf einen Tenant definiert werden können. Jedoch gibt die Verwaltungsoberfläche (IHM) eine Warnung aus, wenn es mehr als 3 Besitzer gibt, um zur Begrenzung der Anzahl der Besitzer aus Sicherheits- und optimalen Zugangsmanagement-Gründen anzuraten.*
- *Beim Hinzufügen eines neuen Besitzers (Owner) kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern. Diese Übertragungszeit ist normal und stellt sicher, dass die Zugriffsrechte korrekt auf alle zugehörigen Dienste und Ressourcen angewendet werden.*
- *Um einen Besitzer (Owner) vom Tenant zu entfernen, muss der Benutzer eine Anfrage an den Support stellen. Dieses Verfahren stellt sicher, dass Änderungen der Zugriffsrechte sicher und in Übereinstimmung mit bewährten Praktiken des Zugangsmanagements durchgeführt werden.*

### Abgelehnte Berechtigungen

Die folgenden Berechtigungen sind nicht mehr verfügbar:

| Name der Berechtigung                           | Datum       | Beschreibung der Berechtigung                                                                                   |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Einsicht in Ressourcen vom Typ Backup                                                                     |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Verwaltung von Ressourcen vom Typ Backup - Bearbeitung                                                           |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Öffnen der Konsole einer virtuellen Maschine                                                                   |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Einsicht erweiterten Daten der VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration, etc.)  |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Erweiterte Verwaltung der VMware-Ressourcen                                                                    |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Einsicht in Ressourcen vom Typ virtuelle Maschinen                                                             |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Verwaltung von Ressourcen vom Typ virtuelle Maschinen                                                          |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                       |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Verwaltung neuer Berechtigungen für sich selbst                                                                |


## Organisationen

Die Organisation ist mit Ihrem __vertraglichen Konto__ und dem __zugehörigen Cloud Temple-Vertrag__ verbunden. Sie steht für Ihre Einheit (Unternehmen, Abteilung, Team, ...) die die vertragliche Beziehung zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert __die vertragliche Einheit__ für Abrechnungs- und Nachverfolgungsaspekte,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: Die Authentifizierung kann lokal auf der Shiva-Konsole oder remote über einen Identitätsföderationsdienst erfolgen,
- Sie umfasst alle __Benutzerkonten__,
- Sie __bündelt die Tenants__ (Produktion, Vorproduktion, Entwicklung, Anwendung 1, Anwendung 2, ...), die Sie entsprechend den Anforderungen Ihrer Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Tenant konfigurierbar. Beispielsweise kann ein Konto berechtigt sein, Ressourcen in einem Tenant zu bestellen, jedoch nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene __die Konfiguration des Authentifizierungsmechanismus__. Sie können
das lokale Authentifizierungsverzeichnis der Shiva-Konsole verwenden oder Ihre Organisation an eines Ihrer
Authentifizierungsverzeichnisse anbinden.

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

Der Tenant ist eine __Ressourcengruppe innerhalb einer Organisation__. Eine [Organisation](#organisationen) hat mindestens einen Tenant (genannt __Standard-Tenant__, der umbenannt werden kann). Im Allgemeinen werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Beispielsweise:

- Ein __Produktions-Tenant__
- Ein __Vorproduktions-Tenant__
- Ein __Test-Tenant__
- Ein __Qualifizierungs-Tenant__

Es ist jedoch auch möglich, die Dinge aus einer __Anwendungssicht__ oder nach __Kritikalität__ zu organisieren:

- Ein Tenant __Anwendung 1__ oder __Kritikalität 1__
- Ein Tenant __Anwendung 2__ oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen werden einem bestimmten Tenant zugewiesen und nicht mit anderen Tenants geteilt. Beispielsweise sind ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Tenant verfügbar. Betreffend der Netzwerke ist es möglich, __'cross-tenant'__ Netzwerke zu beantragen, um die Netzwerkkontinuität zwischen den Tenants zu gewährleisten.

Die Benutzerberechtigungen sind in jedem Tenant festzulegen. Daher sollte jede Organisation gut über die gewünschten Tenants nachdenken. Dieser Punkt wird normalerweise in einem Initialisierungsworkshop besprochen, wenn die Organisation erstellt wird.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tenants zu ändern.

Ein Tenant kann nicht leer sein. Er muss mit mindestens einer Ressource initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherplatz,
- Ein Netzwerkvlan.


| Bestellreferenz                                              | Einheit  | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants              | 1 Tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone   | 1 Tenant | csp:(region):iaas:az:v1 |


### Zugriffsberechtigung zu einem Tenant: Zugelassene IPs

Der Zugriff auf die Cloud-Management-Konsole ist ausschließlich auf vorher zugelassene IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Qualifikation. Diese Einschränkung gewährleistet ein verstärktes Sicherheitsniveau, indem der Zugriff nur für Benutzer aus spezifischen IP-Bereichen gestattet wird. So werden die Risiken unbefugten Zugriffs minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards geschützt.

Hinweis: *Das Entfernen einer zugelassenen IP-Adresse erfolgt durch eine Supportanforderung in der Cloud Temple-Konsole.*

### Ressourcennutzung innerhalb eines Tenants

Es ist möglich, die in einem Tenant verbrauchten Cloud-Ressourcen anzuzeigen, wodurch eine detaillierte Ansicht der Nutzung der verschiedenen bereitgestellten Dienste ermöglicht wird. Diese Funktion ermöglicht es den Benutzern, den Verbrauch ihrer Ressourcen in Echtzeit zu überwachen, die am häufigsten genutzten Dienste zu identifizieren und ihre Nutzung je nach Bedarf zu optimieren.

Klicken Sie im Konsolenmenü auf „Verbrauchsbericht“ und wählen Sie den gewünschten Zeitraum aus. Sie können dann den Ressourcenverbrauch innerhalb des definierten Zeitraums im Detail anzeigen, was Ihnen ermöglicht, die Nutzung der Dienste zu analysieren und entsprechend Ihr Management zu optimieren:

![](images/shiva_tenant_ressources_01.png)