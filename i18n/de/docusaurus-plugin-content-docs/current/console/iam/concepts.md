---
title: Konzepte
---
import shivaOnboard_003 from './images/shiva_onboard_003.png'
import shivaOnboard_004 from './images/shiva_onboard_004.png'
import shivaOnboard_001 from './images/shiva_onboard_001.png'
import shivaOnboard_005 from './images/shiva_onboard_005.png'
import shivaProfil_012 from './images/shiva_profil_012.png'
import shivaProfil_014 from './images/shiva_profil_014.png'
import shivaProfil_015 from './images/shiva_profil_015.png'
import shivaProfil_016 from './images/shiva_profil_016.png'
import shivaProfil_013 from './images/shiva_profil_013.png'
import shivaProfil_010 from './images/shiva_profil_010.png'
import shivaProfil_009 from './images/shiva_profil_009.png'
import shivaProfil_011 from './images/shiva_profil_011.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaProfil_007 from './images/shiva_profil_007.png'
import shivaTenantRessources_01 from './images/shiva_tenant_ressources_01.png'

## Benutzer

Die Zugangskonten für die Shiva-Konsole werden vom Master-Konto des Auftraggebers per Einladung erstellt (unabhängig vom Authentifizierungsverzeichnis).
Die Anmeldedaten sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Die Identitätsföderation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt per Einladung. Um einen Benutzer in eine [Organisation](#organisations) einzuladen, gehen Sie zum Menü __'Administration'__ auf der linken Seite Ihres Bildschirms im grünen Banner und dann zum Untermenü __'Benutzer'__.

Klicken Sie auf die Schaltfläche __'Neuer Benutzer'__ auf der Benutzerseite.

<img src={shivaOnboard_003} />

Geben Sie dann die E-Mail-Adresse des Benutzers ein.

<img src={shivaOnboard_004} />

Der Benutzer erhält daraufhin eine Bestätigungs-E-Mail.

<img src={shivaOnboard_001} />

Nach Abschluss der Bestätigung kann sich der Benutzer in der Konsole anmelden.

### Zuweisen von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt über die Benutzerseite.

<img src={shivaOnboard_003} />

Standardmäßig hat ein Benutzer keine Rechte. Daher muss der Administrator, der die Einladung gesendet hat, dem Benutzer die für seine Tätigkeit erforderlichen Rechte gewähren. Klicken Sie einfach auf das Menü __'Aktionen'__ des Benutzers und wählen Sie die Option __'Bearbeiten'__.

Das Menü zur Aktivierung der Rechte erscheint dann:

<img src={shivaOnboard_005} />

Die Berechtigungskonfiguration muss für jeden [Tenant](#tenants) der [Organisation](#organisations) durchgeführt werden.

Die Liste der Berechtigungen und ihre Definitionen ist [hier](#permissions) zugänglich.

### Erneute Registrierung eines Benutzers

Wenn ein Benutzer bereitgestellt wurde, aber seine Registrierung nicht innerhalb der Ablaufzeit der von der Konsole gesendeten E-Mail bestätigt hat, kann er seine Registrierung nicht mehr bestätigen. Es ist dann möglich, ihm einen Link zu senden, damit er seine erste Registrierung erneuern kann.

Die erneute Registrierung eines Benutzers erfolgt im Tab __'Benutzer'__ des Administrationsbereichs unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie erneut registrieren möchten, klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und wählen Sie __'Erneute Registrierung'__.

__Warnung__: Stellen Sie sicher, dass Sie der Initiator der Anfrage zur erneuten Registrierung Ihres Benutzerkontos sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_012} />

### Aktualisierung Ihres Profils

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie Ihr __'Profil'__ oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Profil aktualisieren'__.

Gehen Sie zu Ihrem E-Mail-Posteingang und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

__Warnung__: Stellen Sie sicher, dass Sie der Initiator der Anfrage zur Profilaktualisierung sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_014} />

### Zurücksetzen Ihres Passworts

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie Ihr __'Profil'__ oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Passwort zurücksetzen'__.

Gehen Sie zu Ihrem E-Mail-Posteingang und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

__Warnung__: Stellen Sie sicher, dass Sie der Initiator der Anfrage zum Zurücksetzen des Passworts sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_015} />

### Zurücksetzen der Zwei-Faktor-Authentifizierung

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie Ihr __'Profil'__ oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'MFA zurücksetzen'__.

Gehen Sie zu Ihrem E-Mail-Posteingang und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zwei-Faktor-Authentifizierung zu aktualisieren.

__Warnung__: Stellen Sie sicher, dass Sie der Initiator der Anfrage zum Zurücksetzen Ihrer Zwei-Faktor-Authentifizierung sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_016} />

### Löschen eines Benutzers

Das Löschen eines Benutzers erfolgt im Tab __'Benutzer'__ des Administrationsbereichs unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie löschen möchten, klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und wählen Sie __'Löschen'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Hinweis: Sie können sich selbst nicht löschen und Sie können keinen Benutzer mit der Rolle __'Eigentümer'__ löschen.

### Abmelden

Die Abmeldung erfolgt über Ihr __'Profil'__ oben rechts auf dem Bildschirm, dann __'Abmelden'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Eine automatische Abmeldung erfolgt, wenn das Sitzungstoken (JWT Token) abläuft.

### Ändern der Sprache eines Benutzers

Das Ändern der Sprache eines Benutzers erfolgt über sein __'Profil'__ oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden [Tenant](#tenants).

### Abonnieren von thematischen Benachrichtigungen

Die Abonnementverwaltung ermöglicht es Ihnen, E-Mails zu aktivierten Themen zu erhalten, die automatisch gesendet werden, wenn entsprechende Ereignisse eintreten.

Sie ist im Benutzerprofil im Tab "Meine Abonnements" zugänglich:

<img src={shivaProfil_007} />

Im Falle eines Vorfalls werden beispielsweise spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen wird sich wahrscheinlich weiterentwickeln und schrittweise erweitert werden, um sich an die Bedürfnisse und Veränderungen in unserer Betriebsumgebung anzupassen.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine detaillierte Verwaltung der Benutzerrechte innerhalb einer Organisation, mit Trennung nach Tenant.
Zunächst ist es das Hauptkonto des Auftraggebers, das die anfängliche Konfiguration von Konten und zugehörigen Berechtigungen ermöglicht.
Anschließend ermöglicht das Recht __'iam_write'__ einem Konto, die Berechtigungen anderer Benutzer zu verwalten.

### Verfügbare Berechtigungen für Benutzer in Ihrer Organisation

Wenn ein Benutzer erstellt wird, hat er standardmäßig keine Berechtigungen. Jede Berechtigung wird individuell zugewiesen und funktioniert eigenständig, ohne Überschneidung mit anderen Berechtigungen. Sie werden in Kombination angewendet, was bedeutet, dass ein Benutzer alle erforderlichen Berechtigungen haben muss, um eine bestimmte Aktion durchzuführen.

Die folgenden Berechtigungen sind für jeden Benutzer und für jeden Tenant Ihrer Organisation konfigurierbar:

- Berechtigungen vom Typ "read": erlauben nur die Anzeige von Ressourcen ohne Möglichkeit zur Änderung.
- Berechtigungen vom Typ "write": erlauben die Änderung von Konfigurationen.
- Berechtigungen vom Typ "management": erlauben die erweiterte Verwaltung von Ressourcen.
- Berechtigungen vom Typ "console_access": autorisieren PMAD-Verbindungen zu Ressourcen.
- Berechtigungen vom Typ "virtual_machine_power": autorisieren die Stromverwaltung einer virtuellen Maschine.

- __Dies sind Berechtigungen, keine Rollen.__ Als solche ist es notwendig, sowohl die READ- als auch die WRITE-Berechtigung zu haben, um eine Konfiguration zu ändern.

Letzte Aktualisierung am: 16.07.2025

| Berechtigungsname                             | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Anzeigen von Protokollen und Aktivitäten                                                                                        |
| activity_write                                | Verwaltung von Protokollen und Aktivitäten                                                                                      |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Anzeige                                                                   |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Änderung                                                                  |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - VMware-Angebot - Anzeige                                                                     |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - VMware-Angebot - Änderung                                                                    |
| bastion_read                                  | Anzeigen von Bastion-Ressourcen                                                                                                 |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen,...)                                                                   |
| bastion_console_access                        | Berechtigung zum Zugriff auf die Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                     |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS-Angebot - Anzeigen erweiterter Daten von Xen Orchestra-Ressourcen                                                      |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS-Angebot - Erweiterte Verwaltung von Xen Orchestra-Ressourcen                                                           |
| compute_iaas_opensource_read                  | OpenIaaS-Angebot - Anzeigen von virtuellen Maschinenressourcen                                                                  |
| compute_iaas_opensource_management            | OpenIaaS-Angebot - Verwaltung von virtuellen Maschinenressourcen                                                                |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS-Angebot - Stromverwaltung einer virtuellen Maschine                                                                    |
| compute_iaas_opensource_replication_recover   | OpenIaaS-Angebot - Verwaltung der Replikation                                                                                   |
| compute_iaas_vmware_console_access            | VMware-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                   |
| compute_iaas_vmware_infrastructure_read       | VMware-Angebot - Anzeigen erweiterter Daten von VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration usw.)  |
| compute_iaas_vmware_infrastructure_write      | VMware-Angebot - Erweiterte Verwaltung von VMware-Ressourcen                                                                    |
| compute_iaas_vmware_read                      | VMware-Angebot - Anzeigen von virtuellen Maschinenressourcen                                                                    |
| compute_iaas_vmware_management                | VMware-Angebot - Verwaltung von virtuellen Maschinenressourcen (ermöglicht die Verschlüsselung einer virtuellen Maschine)       |
| compute_iaas_vmware_virtual_machine_power     | VMware-Angebot - Stromverwaltung einer virtuellen Maschine                                                                      |
| baremetal_management                          | Bare Metal-Angebot - Verwaltung von Bare Metal-Ressourcen                                                                       |
| baremetal_read                                | Bare Metal-Angebot - Anzeigen von Bare Metal-Ressourcen                                                                         |
| baremetal_console_access                      | Bare Metal-Angebot - Öffnen der Konsole eines Bare Metal                                                                        |
| console_public_access_read                    | Anzeigen von IPs, die für den Zugriff auf die Konsole autorisiert sind                                                          |
| console_public_access_write                   | Hinzufügen von IPs, die für den Zugriff auf die Konsole autorisiert sind                                                        |
| compute_virtual_machine_power                 | Stromverwaltung einer virtuellen Maschine                                                                                       |
| documentation_read                            | Anzeigen von Confluence-Dokumentationsressourcen                                                                                |
| housing_read                                  | Anzeigen von Colocation-Ressourcen                                                                                              |
| iam_offline_access                            | Erstellung und Löschung von persönlichen Zugriffstoken (PAT)                                                                    |
| iam_read                                      | Anzeigen von Benutzerrechten                                                                                                    |
| iam_write                                     | Verwaltung von Benutzerrechten                                                                                                  |
| intervention_read                             | Anzeigen geplanter Änderungen und Bereitstellungen auf der Plattform                                                            |
| inventory_read                                | Anzeigen von Inventarressourcen                                                                                                 |
| inventory_write                               | Verwaltung von Inventarressourcen                                                                                               |
| monitoring_read                               | Anzeigen von Überwachungsdaten                                                                                                  |
| monitoring_write                              | Verwaltung der Überwachung                                                                                                      |
| metric_read                                   | Anzeigen von Gesundheitsdaten auf virtuellen Maschinen und Hosts                                                                |
| network_read                                  | Anzeigen von Netzwerkressourcen                                                                                                 |
| network_write                                 | Verwaltung von Netzwerkressourcen                                                                                               |
| order_read                                    | Anzeigen von Infrastrukturbestellungen                                                                                          |
| order_write                                   | Erstellen von Infrastrukturbestellungen                                                                                         |
| object-storage_iam_management                 | Verwaltung von Speicherkonten auf dem S3-Produkt                                                                                |
| object-storage_read                           | Anzeigen von Buckets und Bucket-Konfigurationen                                                                                 |
| object-storage_write                          | Bearbeiten von Buckets und Bucket-Konfigurationen                                                                               |
| openshift_management                          | Verbindung zu Openshift-Plattformen (auf den Tenant beschränkt)                                                                 |
| support_management                            | Anzeigen aller Support-Tickets des Tenants                                                                                      |
| support_read                                  | Anzeigen Ihrer eigenen Support-Tickets des Tenants                                                                              |
| support_write                                 | Erstellen eines Support-Tickets für den Tenant                                                                                  |
| tag_read                                      | Anzeigen von Tags, außer RTMS-Tags                                                                                              |
| tag_write                                     | Verwaltung von Tags, außer RTMS-Tags                                                                                            |
| ticket_comment_read                           | Anzeigen von Kommentaren                                                                                                        |
| ticket_comment_write                          | Verwaltung von Kommentaren                                                                                                      |
| ticket_read                                   | Anzeigen von Tickets                                                                                                            |
| ticket_write                                  | Verwaltung von Tickets                                                                                                          |
| incident_management                           | Verwaltung von Vorfällen                                                                                                       |
| incident_read                                 | Anzeigen von Vorfällen                                                                                                         |

## Organisationen

Die Organisation ist mit Ihrem __Auftraggeberkonto__ und dem __zugehörigen Cloud Temple-Vertrag__ verknüpft. Sie repräsentiert Ihre Einheit (Unternehmen, Abteilung, Team usw.), die die vertragliche Beziehung zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert die __vertragliche Einheit__ für Tracking- und Abrechnungsaspekte,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: Die Authentifizierung kann lokal auf der Ebene der Shiva-Konsole oder remote über einen Identitätsföderationsdienst erfolgen,
- Sie hält alle __Benutzerkonten__,
- Sie __föderiert die Tenants__ (Produktion, Vorproduktion, Entwicklung, Anwendung 1, Anwendung 2 usw.), die Sie für die Bedürfnisse Ihrer Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Tenant konfigurierbar. Ein Konto kann beispielsweise berechtigt sein, Ressourcen in einem Tenant zu bestellen, aber nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht __die Konfiguration des Authentifizierungsmechanismus__ auf Organisationsebene. Sie können
das lokale Authentifizierungsverzeichnis der Shiva-Konsole verwenden oder Ihre Organisation mit einem Ihrer
Authentifizierungsverzeichnisse verbinden.

Die folgenden externen Verzeichnisse werden unterstützt:

- __OpenID Connect__-kompatible Verzeichnisse,
- __SAML__-kompatible Verzeichnisse,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

Der Tenant ist eine __Gruppierung von Ressourcen innerhalb einer Organisation__. Eine [Organisation](#organisations) hat mindestens einen Tenant (genannt __Standard-Tenant__, der umbenannt werden kann). Im Allgemeinen werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Zum Beispiel:

- Ein __Produktions__-Tenant
- Ein __Vorproduktions__-Tenant
- Ein __Test__-Tenant
- Ein __Qualifikations__-Tenant

Es ist aber auch möglich, die Dinge mit einer __Anwendungssicht__ oder nach __Kritikalität__ zu organisieren:

- Ein __Anwendung 1__- oder __Kritikalität 1__-Tenant
- Ein __Anwendung 2__- oder __Kritikalität 2__-Tenant
- ...

Die bestellten technischen Ressourcen werden einem bestimmten Tenant zugewiesen und werden nicht mit anderen Tenants geteilt. Ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke sind beispielsweise nur in einem Tenant verfügbar.
Bezüglich Netzwerken ist es möglich, __'Cross-Tenant'__-Netzwerke anzufordern, um die Netzwerkkontinuität zwischen Tenants zu gewährleisten.

Benutzerberechtigungen müssen in jedem Tenant definiert werden. Daher muss jede Organisation die gewünschten Tenants sorgfältig überlegen. Dieser Punkt wird in der Regel in einem Initialisierungsworkshop zum Zeitpunkt der Organisationserstellung behandelt.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tenants weiterzuentwickeln.

Ein Tenant kann nicht leer sein. Er muss notwendigerweise mit einem Minimum an Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherplatz,
- Ein Netzwerk-VLAN.

| Bestellreferenz                                              | Einheit  | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Tenant-Aktivierung                     | 1 Tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung der Verfügbarkeitszone     | 1 Tenant | csp:(region):iaas:az:v1 |

### Verwaltung von Eigentümern auf einem Tenant

Jeder Tenant hat mindestens einen Eigentümer, was eine klare Verantwortung und eine effektive Verwaltung der zugehörigen Ressourcen gewährleistet. Darüber hinaus ist es möglich, mehrere Eigentümer für denselben Tenant zu deklarieren, was Zusammenarbeit und gemeinsame Entscheidungsfindung ermöglicht. Nachfolgend finden Sie wichtige Informationen, die bei der Verwaltung dieser Eigentümer zu berücksichtigen sind.

#### Wichtige Informationen zur Eigentümerverwaltung

#### 1. Anzahl der Eigentümer

* Es gibt keine technische Begrenzung für die Anzahl der Eigentümer, die auf dem Tenant definiert werden können.
- Die Verwaltungsoberfläche (GUI) gibt eine Warnung aus, wenn es mehr als 3 Eigentümer gibt, um die Anzahl der Eigentümer aus Sicherheitsgründen und für eine optimale Zugriffsverwaltung zu begrenzen.

#### 2. Hinzufügen eines neuen Eigentümers

* Beim Hinzufügen eines neuen Eigentümers kann die Aktualisierung seiner Berechtigungen eine Verzögerung von bis zu 60 Minuten erfordern.
- Diese Ausbreitungszeit ist normal und stellt sicher, dass die Zugriffsrechte ordnungsgemäß auf alle zugehörigen Dienste und Ressourcen angewendet werden.

#### 2. Eigentümerberechtigungen

* Ein Eigentümer erhält alle Berechtigungen im Zusammenhang mit den auf seinem Tenant aktivierten Produkten.
- Es ist nicht möglich, die Berechtigungen eines Eigentümers zu ändern.

#### 3. Entfernen eines Eigentümers

* Um einen Eigentümer vom Tenant zu entfernen, muss der Benutzer eine Anfrage an den Support stellen.
- Dieses Verfahren stellt sicher, dass Änderungen an den Zugriffsrechten sicher und in Übereinstimmung mit den Best Practices für die Zugriffsverwaltung durchgeführt werden.

### Tenant-Zugriffsautorisierung: Autorisierte IPs

Der Zugriff auf die Cloud-Verwaltungskonsole ist streng auf zuvor autorisierte IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Qualifikation. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem der Zugriff nur von bestimmten IP-Bereichen aus erlaubt wird, wodurch die Risiken eines unbefugten Zugriffs minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards geschützt wird.

Hinweis: *Die Entfernung einer autorisierten IP erfolgt über eine Support-Anfrage in der Cloud Temple-Konsole.*

### Ressourcenverbrauch innerhalb eines Tenants

Es ist möglich, die innerhalb eines Tenants verbrauchten Cloud-Ressourcen anzuzeigen, wodurch eine detaillierte Ansicht der Nutzung der verschiedenen bereitgestellten Dienste bereitgestellt wird. Diese Funktion ermöglicht es Benutzern, ihren Ressourcenverbrauch in Echtzeit zu verfolgen, die am meisten genutzten Dienste zu identifizieren und ihre Nutzung entsprechend den Bedürfnissen zu optimieren.

Klicken Sie im Konsolenmenü auf "Verbrauchsbericht" und wählen Sie dann den gewünschten Zeitraum. Sie können den Cloud-Ressourcenverbrauch im Detail über den definierten Zeitraum anzeigen, was Ihnen ermöglicht, die Dienstnutzung zu analysieren und Ihre Verwaltung entsprechend zu optimieren:

<img src={shivaTenantRessources_01} />
