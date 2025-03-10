---
title: Concepts
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

Die Zugangskonten zur Shiva-Konsole werden vom Hauptkonto des Auftraggebers auf Einladung erstellt (unabhängig vom Authentifizierungs-Repository).
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Identitätsföderation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladung. Um einen Benutzer in eine [Organisation](#organisations) einzuladen, gehen Sie in das Menü __'Administration'__ links auf Ihrem Bildschirm im grünen Banner und dann in das Untermenü __'Benutzer'__.

Klicken Sie auf die Schaltfläche __'Neuer Benutzer'__ auf der Benutzerseite.

<img src={shivaOnboard_003} />

Geben Sie anschließend die E-Mail-Adresse des Benutzers an

<img src={shivaOnboard_004} />

Der Benutzer erhält dann eine Bestätigungsmail.

<img src={shivaOnboard_001} />

Nach Abschluss der Überprüfung kann sich der Benutzer in der Konsole anmelden.

### Zuordnung von Berechtigungen zu einem Benutzer

Die Verwaltung der Benutzerrechte erfolgt über die Benutzerseite.

<img src={shivaOnboard_003} />

Standardmäßig hat ein Benutzer keine Rechte. Es ist daher erforderlich, dass der Administrator, der die Einladung ausgesprochen hat, dem Benutzer die für seine Tätigkeit erforderlichen Rechte zuweist. Klicken Sie einfach auf das Menü __'Aktionen'__ des Benutzers und wählen Sie die Option __'Bearbeiten'__.

Das Menü zur Aktivierung der Rechte erscheint dann:

<img src={shivaOnboard_005} />

Die Konfiguration der Berechtigungen muss für jeden [Tenant](#tenants) der [Organisation](#organisations) erfolgen.

Die Liste der Berechtigungen und deren Definition ist [hier](#permissions) zugänglich.

### Neuanmeldung eines Benutzers

Wenn ein Benutzer bereitgestellt wurde, aber seine Anmeldung nicht innerhalb der Ablaufzeit der von der Konsole gesendeten E-Mail bestätigt hat, kann er seine Anmeldung nicht mehr bestätigen. Es ist dann möglich, ihm einen Link zu senden, damit er seine Erstregistrierung erneuert.

Die Neuanmeldung eines Benutzers erfolgt auf der Registerkarte __'Benutzer'__ im Administrationsbereich unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie neu anmelden möchten, und klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und dann auf __'Neuanmeldung'__.

**Warnung**: Stellen Sie sicher, dass die Anfrage zur Neuanmeldung Ihres Benutzerkontos von Ihnen stammt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_012} />

### Aktualisierung Ihres Profils

Diese Aktion ist nur für lokale Konten (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm und dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Profil aktualisieren'__.

Gehen Sie dann in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zur Aktualisierung Ihres Profils von Ihnen stammt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_014} />

### Zurücksetzung des Passworts

Diese Aktion ist nur für lokale Konten (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm und dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Passwort zurücksetzen'__.

Gehen Sie dann in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zur Zurücksetzung Ihres Passworts von Ihnen stammt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_015} />

### Zurücksetzung der Zwei-Faktor-Authentifizierung

Diese Aktion ist nur für lokale Konten (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm und dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'MFA zurücksetzen'__.

Gehen Sie dann in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zwei-Faktor-Authentifizierung zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anfrage zur Zurücksetzung Ihrer Zwei-Faktor-Authentifizierung von Ihnen stammt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_016} />

### Löschung eines Benutzers

Die Löschung eines Benutzers erfolgt auf der Registerkarte __'Benutzer'__ im Administrationsbereich unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und dann auf __'Löschen'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Hinweis: Sie können sich nicht selbst löschen und Sie können keinen Benutzer mit der Rolle __'Eigentümer'__ löschen.

### Abmelden

Das Abmelden eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm und dann auf __'Abmelden'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Ein automatisches Abmelden erfolgt bei Ablauf des Session-Tokens (JWT-Token).

### Sprache eines Benutzers ändern

Die Änderung der Sprache eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden [Tenant](#tenants).

### Abonnement zu thematischen Benachrichtigungen

Das Verwaltung der Abonnements ermöglicht es, E-Mails zu den aktivierten Themenschwerpunkten zu erhalten, die bei Auftreten entsprechender Ereignisse automatisch gesendet werden.

Es ist im Benutzerprofil zugänglich, im Reiter "Meine Abonnements":

<img src={shivaProfil_007} />

 Zum Beispiel werden bei einem Vorfall spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themenschwerpunkte kann sich weiterentwickeln und wird schrittweise erweitert, um den Anforderungen und Veränderungen in unserem operativen Umfeld gerecht zu werden.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine feingranulare Verwaltung der Rechte der Benutzer einer Organisation, mit einer Trennung nach Tenants.
Zunächst ermöglicht das Hauptkonto des Auftraggebers die anfängliche Konfiguration der Konten und der zugehörigen Berechtigungen.
Anschließend ermöglicht das Recht __'iam_write'__ einem Konto, die Berechtigungen anderer Benutzer zu verwalten.

### Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Wenn ein Benutzer erstellt wird, verfügt er standardmäßig über keine Berechtigungen. Jede Berechtigung wird individuell zugewiesen und funktioniert eigenständig, ohne Überschneidungen mit anderen Berechtigungen. Sie wirken zusammen, was bedeutet, dass ein Benutzer über alle erforderlichen Berechtigungen verfügen muss, um eine spezifische Aktion auszuführen.

Die folgenden Berechtigungen sind für jeden Benutzer und jeden Tenant Ihrer Organisation konfigurierbar:
	•	Leseberechtigungen: Ermöglichen nur das Einsehen von Ressourcen ohne Änderungsmöglichkeiten.
	•	Schreibberechtigungen: Erlauben die Änderung der Konfigurationen.
 	•	Management-Berechtigungen: Erlauben die erweiterte Verwaltung der Ressourcen.

- __Dies sind Berechtigungen, keine Rollen.__ Somit ist es erforderlich, sowohl die Lese- als auch die Schreibberechtigung zu haben, um eine Konfiguration zu ändern.

Letzte Aktualisierung am: 23/01/2025

| Name der Berechtigung                          | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Einsicht in Protokolle und Aktivitäten                                                                                          |
| activity_write                                | Verwaltung von Protokollen und Aktivitäten                                                                                      |
| backup_iaas_opensource_read                   | Verwaltung von Backuprressourcen - OpenIaaS-Angebot - Einsehen                                                                  |
| backup_iaas_opensource_write                  | Verwaltung von Backuprressourcen - OpenIaaS-Angebot - Änderung                                                                  |
| backup_iaas_spp_read                          | Verwaltung von Backuprressourcen - Vmware-Angebot - Einsehen                                                              |

| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Änderung                                                            |
| bastion_read                                  | Einsicht in Bastion-Ressourcen                                                                                    |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen usw.)                                                             |
| bastion_console_access                        | Berechtigung zum Zugriff auf die Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                                 |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS-Angebot - Einsicht in erweiterte Daten der Xen Orchestra-Ressourcen |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS-Angebot - Erweiterte Verwaltung der Xen Orchestra-Ressourcen                                                                          |
| compute_iaas_opensource_read                  | OpenIaaS-Angebot - Einsicht in virtuelle Maschinen-Ressourcen                                                        |
| compute_iaas_opensource_management            | OpenIaaS-Angebot - Verwaltung von virtuellen Maschinen-Ressourcen                                                             |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| compute_iaas_vmware_console_access            | Vmware-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_vmware_infrastructure_read       | Vmware-Angebot - Einsicht in erweiterte Daten der VMware-Ressourcen (Affinity/Anti-Affinity-Regeln, DRS-Konfiguration usw.)  |
| compute_iaas_vmware_infrastructure_write      | Vmware-Angebot - Erweiterte Verwaltung der VMware-Ressourcen                                                                           |
| compute_iaas_vmware_read                      | Vmware-Angebot - Einsicht in virtuelle Maschinen-Ressourcen                                                         |
| compute_iaas_vmware_management                | Vmware-Angebot - Verwaltung von virtuellen Maschinen-Ressourcen (ermöglicht die Verschlüsselung einer virtuellen Maschine)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Vmware-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                               |
| baremetal_read                                | Bare Metal-Angebot - Einsicht in Bare Metal-Ressourcen                                                               |
| baremetal_console_access                      | Bare Metal-Angebot - Öffnen der Konsole eines Bare Metal                                                                  |
| console_public_access_read                    | Einsicht in die IPs, die Zugriff auf die Konsole haben                                                                         |
| console_public_access_write                   | Hinzufügen von IPs, die Zugriff auf die Konsole haben                                                                                  |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                              |
| documentation_read                            | Einsicht in Dokumentationsressourcen von Confluence                                                                        |
| housing_read                                  | Einsicht in Colocation-Ressourcen                                                                                 |
| iam_offline_access                            | Erstellung und Löschung von Personal Access Tokens (PAT)                                                                        |
| iam_read                                      | Einsicht in Benutzerrechte                                                                                           |
| iam_write                                     | Verwaltung der Benutzerrechte                                                                                                |
| intervention_read                             | Einsicht in geplante Änderungen und Produktionsfreigaben auf der Plattform                                                  |
| inventory_read                                | Einsicht in Inventarressourcen                                                                                 |
| inventory_write                               | Verwaltung von Inventarressourcen                                                                                      |
| monitoring_read                               | Einsicht in das Monitoring                                                                                                     |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                          |
| metric_read                                   | Einsicht in Gesundheitsdaten von virtuellen Maschinen und Hosts                                                         |
| network_read                                  | Einsicht in Netzwerkressourcen                                                                                             |
| network_write                                 | Verwaltung von Netzwerkressourcen                                                                                                  |
| order_read                                    | Einsicht in Infrastrukturaufträge                                                                                     |
| order_write                                   | Erstellung von Infrastrukturaufträgen                                                                                            |
| object-storage_iam_management                 | Verwaltung von Speicher-Konten im S3-Produkt                                                                       |
| object-storage_read                           | Einsicht in Buckets und Bucket-Konfigurationen                                                                   |
| object-storage_write                          | Bearbeitung von Buckets und Bucket-Konfigurationen                                                                  |
| openshift_management                          | Verbindung zu den Openshift-Plattformen (auf den Tenant beschränkt)                                                          |
| support_management                            | Einsicht in die Support-Tickets des Tenants                                                                       |
| support_read                                  | Einsicht in die eigenen Support-Tickets des Tenants                                                                                  |
| support_write                                 | Erstellung eines Support-Tickets auf dem Tenant                                                                                     |
| tag_read                                      | Einsicht in Tags, ausgenommen RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung von Tags, ausgenommen RTMS-Tags                                                                                        |
| ticket_comment_read                           | Einsicht in Kommentare                                                                                                  |
| ticket_comment_write                          | Verwaltung von Kommentaren                                                                                                       |
| ticket_read                                   | Einsicht in Tickets                                                                                                       |
| ticket_write                                  | Verwaltung von Tickets                                                                                                            |

## Organisationen

Die Organisation ist mit Ihrem __Auftragskonto__ und dem zugehörigen __Cloud-Temple-Vertrag__ verbunden. Sie repräsentiert Ihre Einheit (Unternehmen, Abteilung, Team usw.), die die vertragliche Beziehung zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert __die vertragliche Einheit__ in den Bereichen Nachverfolgung und Abrechnung,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: Die Authentifizierung kann lokal auf der Shiva-Konsole oder extern über einen Identitäts-Federationsdienst erfolgen,
- Sie trägt alle __Benutzerkonten__,
- Sie __vereint die Tenants__ (Produktion, Vorproduktion, Entwicklung, Anwendung 1, Anwendung 2 usw.), die Sie für die Bedürfnisse Ihrer Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Tenant konfigurierbar. Beispielsweise kann ein Konto berechtigt sein, Ressourcen in einem Tenant zu bestellen, aber nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene __die Konfiguration des Authentifizierungsmechanismus__. Sie können

utilisieren Sie das lokale Authentifizierungs-Repository der Shiva-Konsole oder binden Sie Ihre Organisation an eines Ihrer Authentifizierungs-Repositorys an.

Die folgenden externen Repositorys werden unterstützt:

- __OpenID Connect__-kompatible Repositorys,
- __SAML__-kompatible Repositorys,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

Der Tenant ist eine __Zusammenführung von Ressourcen innerhalb einer Organisation__. Eine [Organisation](#organisations) hat mindestens einen Tenant (genannt __Standard-Tenant__, der umbenannt werden kann). In der Regel werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Zum Beispiel:

- Ein __Produktions__-Tenant
- Ein __Preproduction__-Tenant
- Ein __Test__-Tenant
- Ein __Qualifikations__-Tenant

Es ist jedoch auch möglich, die Struktur nach einer __anwendungsbezogenen Sichtweise__ oder __Kritikalität__ zu organisieren:

- Ein __Application 1__ oder __Kritikalität 1__-Tenant
- Ein __Application 2__ oder __Kritikalität 2__-Tenant
- ...

Die angeforderten technischen Ressourcen werden einem bestimmten Tenant zugewiesen und nicht mit anderen Tenants geteilt. Zum Beispiel sind ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Tenant verfügbar.
Was die Netzwerke betrifft, ist es möglich, __'Cross-Tenant'__-Netzwerke zu beantragen, um die Netzwerkkontinuität zwischen den Tenants zu gewährleisten.

Die Berechtigungen der Benutzer müssen in jedem Tenant festgelegt werden. Jede Organisation muss daher die gewünschten Tenants sorgfältig überdenken. Dieser Punkt wird in der Regel in einem Initialisierungsworkshop angesprochen, wenn die Organisation erstellt wird.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tenants zu erweitern.

Ein Tenant darf nicht leer sein. Er muss mit mindestens einer Ressource initialisiert werden:

- Eine Verfügbarkeitszone (AZ, ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherplatz,
- Ein Netzwerk-VLAN.

| Bestellreferenz                                             | Einheit  | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants              | 1 Tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone   | 1 Tenant | csp:(region):iaas:az:v1 |

### Management der Eigentümer eines Tenants
Jeder Tenant hat mindestens einen Eigentümer, um so eine klare Verantwortlichkeit und eine effiziente Verwaltung der zugehörigen Ressourcen zu gewährleisten. Darüber hinaus ist es möglich, mehrere Eigentümer auf demselben Tenant zu deklarieren, was eine Zusammenarbeit und geteilte Entscheidungsfindung ermöglicht. Nachfolgend finden Sie wichtige Informationen, die bei der Verwaltung dieser Eigentümer zu beachten sind.

#### Wichtige Informationen zur Eigentümerverwaltung

#### 1. Anzahl der Eigentümer
* Es gibt keine technische Begrenzung für die Anzahl der Eigentümer, die auf dem Tenant definiert werden können.
* Das Management Interface (IHM) gibt eine Warnung aus, wenn mehr als 3 Eigentümer vorhanden sind, um die Anzahl der Eigentümer aus Sicherheits- und optimalen Zugangsverwaltungsgründen zu begrenzen.

#### 2. Hinzufügen eines neuen Eigentümers
* Beim Hinzufügen eines neuen Eigentümers kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern.
* Diese Zeitverzögerung ist normal und stellt sicher, dass die Zugriffsrechte korrekt auf alle zugehörigen Dienste und Ressourcen angewendet werden.

#### 2. Berechtigungen eines Eigentümers
* Einem Eigentümer werden alle Berechtigungen zugewiesen, die mit den auf seinem Tenant aktivierten Produkten verbunden sind.
* Es ist nicht möglich, die Berechtigungen eines Eigentümers zu ändern.

#### 3. Entfernung eines Eigentümers
* Um einen Eigentümer vom Tenant zu entfernen, muss der Benutzer eine Anfrage an den Support stellen.
* Dieses Verfahren stellt sicher, dass Änderungen der Zugriffsrechte sicher und in Übereinstimmung mit den bewährten Zugriffsverwaltungsmethoden durchgeführt werden.

### Zugangserlaubnis zu einem Tenant: Erlaubte IPs

Der Zugang zur Cloud-Management-Konsole ist streng auf zuvor erlaubte IP-Adressen beschränkt, dies in Übereinstimmung mit den Anforderungen der SecNumCloud-Zertifizierung. Diese Beschränkung gewährleistet ein höheres Maß an Sicherheit, indem der Zugriff nur aus bestimmten IP-Bereichen ermöglicht wird, wodurch unautorisierte Zugriffe minimiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards geschützt wird.

Hinweis: *Das Entfernen einer erlaubten IP erfolgt durch eine Supportanfrage in der Cloud Temple-Konsole.*

### Ressourcenkonsum innerhalb eines Tenants

Es ist möglich, die genutzten Cloud-Ressourcen innerhalb eines Tenants anzuzeigen, was eine detaillierte Sicht auf die Nutzung der verschiedenen eingesetzten Dienste bietet. Diese Funktionalität ermöglicht es den Benutzern, in Echtzeit den Verbrauch ihrer Ressourcen zu verfolgen, die am meisten genutzten Dienste zu identifizieren und deren Nutzung basierend auf den Anforderungen zu optimieren.

Im Konsolenmenü klicken Sie auf "Verbrauchsbericht" und wählen Sie den gewünschten Zeitraum aus. So können Sie detailliert den Ressourcenverbrauch in dem festgelegten Zeitraum anzeigen, was Ihnen ermöglicht, den Dienstgebrauch zu analysieren und Ihre Verwaltung entsprechend zu optimieren:

<img src={shivaTenantRessources_01} />