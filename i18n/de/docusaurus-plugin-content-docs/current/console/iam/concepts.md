---
title: Concepts
---

## Benutzer

Zugänge zur Shiva-Konsole werden vom Hauptkonto des Auftraggebers per Einladung erstellt (unabhängig vom Authentifizierungs-Repository).
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Die Identitätsfederation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt per Einladung. Um einen Benutzer in einer [Organisation](#organisations) einzuladen, gehen Sie im linken Menüband Ihres Bildschirms im grünen Bereich auf __'Verwaltung'__ und dann im Untermenü auf __'Benutzer'__.

Klicken Sie auf der Benutzerseite auf die Schaltfläche __'Neuer Benutzer'__.

![](images/shiva_onboard_003.png)

Geben Sie anschließend die E-Mail-Adresse des Benutzers an.

![](images/shiva_onboard_004.png)

Der Benutzer erhält dann eine Bestätigungs-E-Mail.

![](images/shiva_onboard_001.png)

Nach Abschluss der Überprüfung kann der Benutzer sich in die Konsole einloggen.

### Zuordnung von Berechtigungen zu einem Benutzer

Die Verwaltung der Benutzerrechte erfolgt über die Benutzerseite.

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Daher muss der Administrator, der die Einladung ausgesprochen hat, dem Benutzer die für seine Tätigkeit erforderlichen Rechte gewähren. Dazu klicken Sie einfach im Menü __'Aktionen'__ des Benutzers und wählen die Option __'Bearbeiten'__.

Das Berechtigungs-Menü erscheint dann:

![](images/shiva_onboard_005.png)

Die Berechtigungskonfiguration muss für jeden [Tenant](#tenants) der [Organisation](#organisations) vorgenommen werden.

Die Liste der Berechtigungen und deren Definition ist [hier](#permissions) zugänglich.

### Benutzer erneut registrieren

Wenn ein Benutzer angelegt, aber nicht innerhalb der Gültigkeitsdauer der von der Konsole versandten E-Mail registriert wurde, kann er seine Registrierung nicht mehr bestätigen. In diesem Fall ist es möglich, ihm einen Link zu senden, sodass er seine erste Registrierung erneuern kann.

Die erneute Registrierung eines Benutzers erfolgt im Reiter __'Benutzer'__ des Verwaltungspanels, unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie erneut registrieren möchten, und klicken Sie dann auf die Aktions-Schaltfläche am Ende der Zeile und dann auf __'Erneut registrieren'__.

**Warnung**: Stellen Sie sicher, dass Sie der Initiator der Anfrage zur erneuten Registrierung Ihres Benutzerkontos sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_012.png)

### Profil aktualisieren

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und die Aktion __'Profil aktualisieren'__.

Gehen Sie dann zu Ihrem Posteingang und klicken auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Initiator der Anfrage zur Profilaktualisierung sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_014.png)

### Passwort zurücksetzen

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und die Aktion __'Passwort zurücksetzen'__.

Gehen Sie dann zu Ihrem Posteingang und klicken auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Initiator der Anfrage zum Zurücksetzen Ihres Passworts sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_015.png)

### Zweifaktor-Authentifizierung zurücksetzen

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und die Aktion __'MFA zurücksetzen'__.

Gehen Sie dann zu Ihrem Posteingang und klicken auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zweifaktor-Authentifizierung zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Initiator der Anfrage zum Zurücksetzen Ihrer Zweifaktor-Authentifizierung sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_016.png)

### Benutzer löschen

Das Löschen eines Benutzers erfolgt im Reiter __'Benutzer'__ des Verwaltungspanels, unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie auf die Aktions-Schaltfläche am Ende der Zeile und dann auf __'Löschen'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Hinweis: Sie können sich nicht selbst löschen und Sie können einen __'Eigentümer'__-Benutzer nicht löschen.

### Abmelden

Die Abmeldung eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Abmelden'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Eine automatische Abmeldung erfolgt, wenn der Sitzungs-Token (JWT-Token) abläuft.

### Sprache des Benutzers ändern

Das Ändern der Sprache eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden [Tenant](#tenants).

### Anmeldung zu thematischen Benachrichtigungen

Die Verwaltung der Abonnements ermöglicht es, E-Mails zu den aktivierten Themen zu erhalten, die automatisch gesendet werden, wenn entsprechende Ereignisse eintreten.

Diese ist im Benutzerprofil im Reiter "Meine Abonnements" verfügbar:

![](images/shiva_profil_007.png)

Zum Beispiel werden im Falle eines Vorfalls themenspezifische E-Mail-Benachrichtigungen generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und schrittweise erweitert werden, um den Anforderungen und Änderungen in unserer Betriebsumgebung gerecht zu werden.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine fein granulierte Verwaltung der Rechte der Benutzer einer Organisation, mit einer Trennung nach Tenant.
Initial erfolgt die Konfiguration der Konten und zugehörigen Berechtigungen durch das Hauptkonto des Auftraggebers.
Anschließend ermöglicht das __'iam_write'__-Recht einem Konto die Verwaltung der Berechtigungen anderer Benutzer.

### Verfügbare Berechtigungen für Benutzer Ihrer Organisation

Wenn ein Benutzer angelegt wird, besitzt er standardmäßig keine Berechtigungen. Jede Berechtigung wird individuell zugewiesen und funktioniert eigenständig, ohne Überschneidungen mit anderen Berechtigungen. Sie gelten in Kombination, was bedeutet, dass ein Benutzer alle erforderlichen Berechtigungen haben muss, um eine bestimmte Aktion auszuführen.

Die folgenden Berechtigungen sind für jeden Benutzer und für jeden Tenant Ihrer Organisation konfigurierbar:
	•	“read”-Berechtigungen: erlauben nur die Ansicht der Ressourcen ohne Änderungsmöglichkeiten.
	•	“write”-Berechtigungen: erlauben die Änderung von Konfigurationen.
 	•	“management“-Berechtigungen: erlauben die erweiterte Verwaltung von Ressourcen.

- __Es handelt sich um Berechtigungen, nicht um Rollen.__ Daher ist es notwendig, sowohl LESEN als auch SCHREIBEN Berechtigungen zu haben, um eine Konfiguration zu ändern.

Letzte Aktualisierung am: 23/01/2025

| Name der Berechtigung                          | Beschreibung der Berechtigung                                                                                                  |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Einsicht in Logs und Aktivitäten                                                                                               |
| activity_write                                | Verwaltung von Logs und Aktivitäten                                                                                            |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Ansicht                                                                  |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Änderung                                                                 |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Ansicht                                                                    |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Änderung                                                                   |
| bastion_read                                  | Einsicht in Bastion-Ressourcen                                                                                                 |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen,...)                                                                  |
| bastion_console_access                        | Berechtigung für den Zugriff auf die Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Konsole eines virtuellen Computers öffnen                                                                   |

| compute_iaas_opensource_infrastructure_read   | OpenIaaS-Angebot - Anzeige erweiterter Daten von Xen Orchestra-Ressourcen |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS-Angebot - Erweiterte Verwaltung von Xen Orchestra-Ressourcen                                                                           |
| compute_iaas_opensource_read                  | OpenIaaS-Angebot - Anzeige von Ressourcen vom Typ Virtuelle Maschinen                                                       |
| compute_iaas_opensource_management            | OpenIaaS-Angebot - Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                            |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| compute_iaas_vmware_console_access            | VMware-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_vmware_infrastructure_read       | VMware-Angebot - Anzeige erweiterter Daten von VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration, etc.)    |
| compute_iaas_vmware_infrastructure_write      | VMware-Angebot - Erweiterte Verwaltung von VMware-Ressourcen                                                                               |
| compute_iaas_vmware_read                      | VMware-Angebot - Anzeige von Ressourcen vom Typ Virtuelle Maschinen                                                         |
| compute_iaas_vmware_management                | VMware-Angebot - Verwaltung von Ressourcen vom Typ Virtuelle Maschinen (Ermöglicht die Verschlüsselung einer virtuellen Maschine)                                                              |
| compute_iaas_vmware_virtual_machine_power     | VMware-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                               |
| baremetal_read                                | Bare Metal-Angebot - Anzeige von Ressourcen vom Typ Bare Metal                                                               |
| baremetal_console_access                      | Bare Metal-Angebot - Öffnen der Konsole eines Bare Metals                                                                      |
| console_public_access_read                    | Anzeige der IPs, die zum Zugriff auf die Konsole berechtigt sind                                                                         |
| console_public_access_write                   | Hinzufügen von IPs, die zum Zugriff auf die Konsole berechtigt sind                                                                                 |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                              |
| documentation_read                            | Anzeige von Dokumentationsressourcen in Confluence                                                                        |
| housing_read                                  | Anzeige von Ressourcen vom Typ Colocation                                                                                 |
| iam_offline_access                            | Erstellen und Löschen von persönlichen Zugriffstokens (PAT)                                                                         |
| iam_read                                      | Anzeige der Benutzerrechte                                                                                           |
| iam_write                                     | Verwaltung der Benutzerrechte                                                                                               |
| intervention_read                             | Anzeige geplanter Änderungen und Inbetriebnahmen auf der Plattform                                                   |
| inventory_read                                | Anzeige von Ressourcen vom Typ Inventar                                                                                 |
| inventory_write                               | Verwaltung von Ressourcen vom Typ Inventar                                                                                       |
| monitoring_read                               | Anzeige des Monitorings                                                                                                     |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                          |
| metric_read                                   | Anzeige von Gesundheitsdaten der virtuellen Maschinen und Hosts                                                         |
| network_read                                  | Anzeige von Netzwerkressourcen                                                                                             |
| network_write                                 | Verwaltung von Netzwerkressourcen                                                                                                  |
| order_read                                    | Anzeige von Infrastrukturaufträgen                                                                                     |
| order_write                                   | Erstellung von Infrastrukturaufträgen                                                                                           |
| object-storage_iam_management                 | Ermöglicht die Verwaltung von Speicherkonten auf dem S3-Produkt                                                                       |
| object-storage_read                           | Ermöglicht die Anzeige von Buckets und Bucket-Konfigurationen                                                                    |
| object-storage_write                          | Ermöglicht die Bearbeitung von Buckets und Bucket-Konfigurationen                                                                  |
| openshift_management                          | Ermöglicht den Zugriff auf Openshift-Plattformen (auf den Mieter beschränkt)                                                           |
| support_management                            | Anzeige aller Support-Tickets des Mieters                                                                       |
| support_read                                  | Anzeige der Support-Tickets des Mieters                                                                                  |
| support_write                                 | Erstellung eines Support-Tickets für den Mieter                                                                                     |
| tag_read                                      | Anzeige von Tags, außer RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung von Tags, außer RTMS-Tags                                                                                        |
| ticket_comment_read                           | Anzeige von Kommentaren                                                                                                  |
| ticket_comment_write                          | Verwaltung von Kommentaren                                                                                                       |
| ticket_read                                   | Anzeige von Tickets                                                                                                       |
| ticket_write                                  | Verwaltung von Tickets                                                                                                            |

**Hinweise** :

- *Es gibt keine Beschränkung hinsichtlich der Anzahl der Inhaber (owners), die für den Mieter definiert werden können. Die Verwaltungsoberfläche (IHM) gibt jedoch eine Warnung aus, wenn mehr als 3 Inhaber festgelegt sind, um die Anzahl der Eigentümer aus Sicherheitsgründen und zur optimalen Verwaltung der Zugriffe zu begrenzen.*
- *Beim Hinzufügen eines neuen Eigentümers (owner) kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern. Diese Verbreitungszeit ist normal und stellt sicher, dass die Zugriffsrechte korrekt auf alle zugehörigen Dienste und Ressourcen angewendet werden.*
- *Um einen Eigentümer (owner) vom Mieter zu entfernen, muss der Benutzer eine Supportanfrage einreichen. Dieser Vorgang stellt sicher, dass Änderungen an den Zugriffsrechten sicher und gemäß den besten Praktiken der Zugangskontrolle durchgeführt werden.*

### Veraltete Berechtigungen

Die folgenden Berechtigungen sind nicht mehr verfügbar:

| Berechtigungsname                            | Datum       | Beschreibung der Berechtigung                                                                                     |
| -------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| backup_read  (**VERALTET**)                  | 07/10/2024  | Anzeige von Ressourcen vom Typ Backup                                                                             |
| backup_write (**VERALTET**)                  | 07/10/2024  | Verwaltung von Ressourcen vom Typ Backup - Bearbeitung                                                            |
| compute_console_access (**VERALTET**)        | 07/10/2024  | Öffnen der Konsole einer virtuellen Maschine                                                                      |
| compute_infrastructure_read (**VERALTET**)   | 07/10/2024  | Anzeige erweiterter Daten von VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration, etc.)       |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Erweiterte Verwaltung von VMware-Ressourcen                                                                    |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Konsultation von Ressourcen vom Typ Virtuelle Maschinen                                                        |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                          |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Verwaltung des Stromversorgungszustands einer virtuellen Maschine                                               |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Verwaltung neuer Berechtigungen für sich selbst                                                                 |


## Organisationen

Die Organisation ist mit Ihrem __Sponsor-Konto__ und dem __damit verbundenen Cloud Temple Vertrag__ verknüpft. Sie repräsentiert Ihre Einheit (Firma, Abteilung, Team, ...), die die vertragliche Beziehung zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert __die vertragliche Einheit__ für Tracking- und Abrechnungszwecke,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: die Authentifizierung kann lokal auf der Shiva-Konsole oder extern über einen Identitätsföderationsdienst erfolgen,
- Sie trägt alle __Benutzerkonten__,
- Sie __vereinigt die Tenants__ (Produktion, Vorproduktion, Entwicklung, Anwendung 1, Anwendung 2, ...), die Sie für die Bedürfnisse Ihrer Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Tenant konfigurierbar. Zum Beispiel kann ein Konto berechtigt sein, Ressourcen in einem Tenant zu bestellen, aber nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene __die Konfiguration des Authentifizierungsmechanismus__. Sie können
das lokale Authentifizierungsverzeichnis der Shiva-Konsole verwenden oder Ihre Organisation an eines Ihrer Authentifizierungsverzeichnisse anbinden.

Die folgenden externen Verzeichnisse werden unterstützt:

- __OpenID Connect__ kompatible Verzeichnisse,
- __SAML__ kompatible Verzeichnisse,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

Ein Tenant ist eine __Gruppe von Ressourcen innerhalb einer Organisation__. Eine [Organisation](#organisationen) hat mindestens einen Tenant (genannt __Standard-Tenant__, der umbenannt werden kann). In der Regel werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Beispielsweise:

- Ein __Produktions-Tenant__
- Ein __Vorproduktions-Tenant__
- Ein __Test-Tenant__
- Ein __Qualifizierungs-Tenant__

Aber es ist auch möglich, Dinge mit einer __Anwendungssicht__ oder nach __Kritikalität__ zu organisieren:

- Ein __Anwendungs-Tenant 1__ oder __Kritikalität 1__
- Ein __Anwendungs-Tenant 2__ oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen werden einem bestimmten Tenant zugewiesen und nicht mit anderen Tenants geteilt. Zum Beispiel sind ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Tenant verfügbar.
Was die Netzwerke betrifft, können __'cross tenant'__ Netzwerke angefordert werden, um die Netzwerkverbindung zwischen den Tenants zu gewährleisten.

Die Berechtigungen der Benutzer sind für jeden Tenant einzeln festzulegen. Daher muss jede Organisation sorgfältig über die gewünschten Tenants nachdenken. Dieser Punkt wird in der Regel bei einem Initialisierungsworkshop angesprochen, wenn die Organisation erstellt wird.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tenants zu ändern.

Ein Tenant kann nicht leer sein. Er muss mindestens mit einigen grundlegenden Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherplatz,
- Ein Netzwerk-VLAN.


| Bestellreferenz                                             | Einheit  | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants              | 1 Tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone   | 1 Tenant | csp:(region):iaas:az:v1 |


### Zugriffserlaubnis auf einen Tenant: Zulässige IP-Adressen

Der Zugriff auf die Cloud-Management-Konsole ist streng auf zuvor zugelassene IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Zertifizierung. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem der Zugriff nur für Benutzer aus angegebenen IP-Bereichen ermöglicht wird, was das Risiko unbefugter Zugriffe minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards schützt.

Hinweis: *Das Entfernen einer zulässigen IP-Adresse erfolgt durch eine Support-Anfrage in der Cloud Temple-Konsole.*

### Ressourcennutzung innerhalb eines Tenants

Es ist möglich, die innerhalb eines Tenants genutzten Cloud-Ressourcen anzuzeigen, was einen detaillierten Überblick über die Nutzung der verschiedenen bereitgestellten Dienste bietet. Diese Funktion ermöglicht es den Benutzern, den Verbrauch ihrer Ressourcen in Echtzeit zu verfolgen, die am meisten genutzten Dienste zu identifizieren und ihre Nutzung je nach Bedarf zu optimieren.

Im Menü der Konsole klicken Sie auf "Verbrauchsbericht" und wählen Sie den gewünschten Zeitraum aus. Sie können dann die Nutzung der Cloud-Ressourcen im definierten Zeitraum im Detail anzeigen, was Ihnen ermöglicht, die Nutzung der Dienste zu analysieren und Ihre Verwaltung entsprechend zu optimieren:

![](images/shiva_tenant_ressources_01.png)