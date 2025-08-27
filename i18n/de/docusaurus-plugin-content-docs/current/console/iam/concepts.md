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

Die Zugriffskonten für die Shiva-Konsole werden durch das Masterkonto des Auftraggebers auf Einladung erstellt (unabhängig vom Authentifizierungsrepository). Die Anmeldeinformationen sind für Ihre [Organisation](#organisations) global.

*__Hinweis:__ [Die Identitätsfederierung wird auf Ebene der Organisation verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt über eine Einladung. Um einen Benutzer in einer [Organisation](#organisations) einzuladen, gehen Sie im linken Menü __'Verwaltung'__ am grünen Band oben auf Ihrem Bildschirm und dann im Untermenü __'Benutzer'__.

Klicken Sie auf den Button __'Neuer Benutzer'__ auf der Benutzerseite.

<img src={shivaOnboard_003} />

Geben Sie dann die E-Mail-Adresse des Benutzers an

<img src={shivaOnboard_004} />

Der Benutzer erhält dann eine E-Mail zur Überprüfung.

<img src={shivaOnboard_001} />

Nach Abschluss der Überprüfung kann der Benutzer sich auf der Konsole anmelden.

### Zuweisung von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt über die Benutzerseite.

<img src={shivaOnboard_003} />

Standardmäßig hat ein Benutzer keine Berechtigungen. Es ist daher notwendig, dass der Administrator, der die Einladung erstellt hat, den notwendigen Berechtigungen für seine Tätigkeit zuweist. Es reicht aus, auf das Menü __'Aktionen'__ des Benutzers zu klicken und die Option __'Bearbeiten'__ auszuwählen.

Das Menü zur Aktivierung der Berechtigungen erscheint dann:

<img src={shivaOnboard_005} />

Die Konfiguration der Berechtigungen muss für jeden [Tenant](#tenants) der [Organisation](#organisations) durchgeführt werden.

Die Liste der Berechtigungen und ihre Definitionen sind [hier](#permissions) zugänglich.

### Wiederanmeldung eines Benutzers

Wenn ein Benutzer bereitgestellt wurde, aber innerhalb der Frist des von der Console gesendeten E-Mails seine Registrierung nicht bestätigt hat, kann er seine Registrierung nicht mehr bestätigen. Es ist dann möglich, ihm einen Link zu senden, damit er seine ursprüngliche Registrierung erneut durchführt.

Die Wiederanmeldung eines Benutzers erfolgt im Tab __'Benutzer'__ im Administration-Fenster, unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie wiederanmelden möchten, und klicken Sie auf die Aktionsschaltfläche am Ende der Zeile, dann auf __'Wiederanmeldung'__.

__Warnung__: Stellen Sie sicher, dass Sie die Ursache der Wiederanmeldung Ihres Benutzerkontos sind. Melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_012} />

### Profil aktualisieren

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie in Ihrem „Profil“, oben rechts auf dem Bildschirm, dann „Benutzereinstellungen“ und wählen Sie die Aktion „Profil aktualisieren“.

Gehen Sie anschließend in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole erzeugten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

__Warnung__: Stellen Sie sicher, dass Sie die Ursprungsquelle der Profilaktualisierungsanfrage sind. Vielen Dank, wenn Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket melden.

<img src={shivaProfil_014} />

### Passwort zurücksetzen

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'Passwort zurücksetzen'__.

Gehen Sie anschließend in Ihren E-Mail-Postfach und klicken Sie auf den Link, der von der Konsole generiert wurde. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

__Warnung__: Stellen Sie sicher, dass Sie die Anfrage zur Passwortrücksetzung selbst gestellt haben. Melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

<img src={shivaProfil_015} />

### Zurücksetzen der zweistufigen Authentifizierung

Diese Aktion ist nur für ein lokales Konto (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Benutzereinstellungen'__ und wählen Sie die Aktion __'MFA zurücksetzen'__.

Gehen Sie anschließend in Ihr E-Mail-Konto und klicken Sie auf den von der Konsole generierten Link. Befolgen Sie einfach die Schritte, um Ihre zweistufige Authentifizierung zu aktualisieren.

__Warnung__: Stellen Sie sicher, dass Sie die Anfrage zum Zurücksetzen Ihrer zweistufigen Authentifizierung selbst gestellt haben. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über einen Support-Ticket.

<img src={shivaProfil_016} />

### Benutzer löschen

Die Löschung eines Benutzers erfolgt im Tab __'Benutzer'__ im Administrationsbereich, unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie auf die Aktion am Ende der Zeile, dann auf __'Löschen'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Hinweis: Sie können sich selbst nicht löschen und Sie können keinen Benutzer __'Eigentümer'__ löschen.

### Abmelden

Die Abmeldung eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, dann __'Abmelden'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Eine automatische Abmeldung erfolgt bei Ablauf des Sitzungs-JWT-Tokens.

### Ändern der Sprache eines Benutzers

Die Änderung der Sprache eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt pro Mieter [Tenant](#tenants).

### Themenbenachrichtigungen abonnieren

Die Verwaltung der Abonnements ermöglicht das Empfangen von E-Mails zu aktivierten Themen, die automatisch bei Auftreten entsprechender Ereignisse versendet werden.

Sie ist im Benutzerprofil im Tab "Meine Abonnements" zugänglich:

<img src={shivaProfil_007} />

Beispielsweise werden bei einem Vorfall spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und schrittweise erweitert werden, um den Anforderungen und Veränderungen in unserem operativen Umfeld gerecht zu werden.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine detaillierte Verwaltung der Benutzerrechte einer Organisation mit einer Trennung nach Mandanten.  
Anfangs ist das Hauptkonto des Auftraggebers für die Anfangskonfiguration der Konten und zugehörigen Berechtigungen verantwortlich.  
Danach ermöglicht das Recht __'iam_write'__ einem Konto, die Berechtigungen anderer Benutzer zu verwalten.

### Verfügbare Berechtigungen für Benutzer Ihrer Organisation

Wenn ein Benutzer erstellt wird, hat er standardmäßig keine Berechtigungen. Jede Berechtigung wird individuell zugewiesen und funktioniert unabhängig, ohne Überlappung mit anderen Berechtigungen. Sie wirken zusammen, was bedeutet, dass ein Benutzer alle erforderlichen Berechtigungen besitzen muss, um eine bestimmte Aktion auszuführen.

Die folgenden Berechtigungen können für jeden Benutzer und jeden Mandanten Ihrer Organisation konfiguriert werden:

- Leseberechtigungen: Erlauben nur die Anzeige von Ressourcen ohne Änderungsmöglichkeit.
- Schreibberechtigungen: Erlauben die Änderung von Konfigurationen.
- Verwaltungsrechte: Erlauben die fortgeschrittene Verwaltung von Ressourcen.
- Konsole-Zugriff: Erlauben den Zugriff auf die Konsole (SSH/RDP) auf Ressourcen.
- Virtueller Maschinen-Strom: Erlauben die Verwaltung der Stromversorgung einer virtuellen Maschine.

- __Dies sind Berechtigungen, nicht Rollen.__ Daher ist es erforderlich, die Berechtigungen Lese- und Schreibzugriff zu haben, um eine Konfiguration zu ändern.

Letzte Aktualisierung: 16/07/2025

| Berechtigungsname                             | Berechtigungsbeschreibung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Anzeige von Protokollen und Aktivitäten                                                                                      |
| activity_write                                | Verwaltung von Protokollen und Aktivitäten                                                                                   |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - Angebot OpenIaaS - Anzeige                                                             |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - Angebot OpenIaaS - Änderung                                                             |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Angebot Vmware - Anzeige                                                               |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Angebot Vmware - Änderung                                                               |
| bastion_read                                  | Anzeige von Bastion-Ressourcen                                                                                             |
| bastion_write                                 | Verwaltung von Ressourcen (Appliances, Sitzungen, usw.) der Bastion                                                         |
| bastion_console_access                        | Zugriffserlaubnis auf die Konsole (SSH/RDP) einer Ressource, die durch eine Bastion-Appliance geschützt ist                              |
| compute_iaas_opensource_console_access        | Angebot OpenIaaS - Öffnen der Konsole einer virtuellen Maschine                                                             |
| compute_iaas_opensource_infrastructure_read   | Angebot OpenIaaS - Anzeige von erweiterten Daten der Xen Orchestra-Ressourcen |
| compute_iaas_opensource_infrastructure_write  | Angebot OpenIaaS - Fortgeschrittene Verwaltung der Xen Orchestra-Ressourcen                                                          |
| compute_iaas_opensource_read                  | Angebot OpenIaaS - Anzeige von Ressourcen des Typs virtuelle Maschinen                                                      |
| compute_iaas_opensource_management            | Angebot OpenIaaS - Verwaltung von Ressourcen des Typs virtuelle Maschinen                                                   |
| compute_iaas_opensource_virtual_machine_power | Angebot OpenIaaS - Verwaltung der Stromversorgung einer virtuellen Maschine                                                 |
| compute_iaas_opensource_replication_recover   | Angebot OpenIaaS - Verwaltung der Replikation                                                              |
| compute_iaas_vmware_console_access            | Angebot Vmware - Öffnen der Konsole einer virtuellen Maschine                                                               |
| compute_iaas_vmware_infrastructure_read       | Angebot Vmware - Anzeige von erweiterten Daten der VMware-Ressourcen (Affinitätsregeln/Anti-Affinitätsregeln, DRS-Konfiguration usw.)  |
| compute_iaas_vmware_infrastructure_write      | Angebot Vmware - Fortgeschrittene Verwaltung der VMware-Ressourcen                                                         |
| compute_iaas_vmware_read                      | Angebot Vmware - Anzeige von Ressourcen des Typs virtuelle Maschinen                                                        |
| compute_iaas_vmware_management                | Angebot Vmware - Verwaltung von Ressourcen des Typs virtuelle Maschinen (Ermöglicht die Verschlüsselung einer virtuellen Maschine)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Angebot Vmware - Verwaltung der Stromversorgung einer virtuellen Maschine                                                   |
| baremetal_management                          | Angebot Bare Metal - Verwaltung von Bare Metal-Ressourcen                                                               |
| baremetal_read                                | Angebot Bare Metal - Anzeige von Bare Metal-Ressourcen                                                               |
| baremetal_console_access                      | Angebot Bare Metal - Öffnen der Konsole eines Bare Metal                                                                  |
| console_public_access_read                    | Anzeige der IP-Adressen, die den Zugriff auf die Konsole erlauben                                                           |
| console_public_access_write                   | Hinzufügen von IP-Adressen, die den Zugriff auf die Konsole erlauben                                                         |
| documentation_read                            | Anzeige der Confluence-Dokumentationsressourcen                                                                             |
| housing_read                                  | Anzeige von Ressourcen des Typs Rechenzentrums                                                                              |
| iam_offline_access                            | Erstellung und Löschung von persönlichen Zugriffstoken (PAT)                                                                 |
| iam_read                                      | Anzeige der Benutzerberechtigungen                                                                                          |
| iam_write                                     | Verwaltung der Benutzerberechtigungen                                                                                       |
| intervention_read                             | Anzeige von geplanten Änderungen und Bereitstellungen auf der Plattform                                                       |
| inventory_read                                | Anzeige von Inventar-Ressourcen                                                                                             |
| inventory_write                               | Verwaltung von Inventar-Ressourcen                                                                                          |
| monitoring_read                               | Anzeige des Monitorings                                                                                                     |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                  |
| metric_read                                   | Anzeige von Gesundheitsdaten zu virtuellen Maschinen und Hosts                                                              |
| network_read                                  | Anzeige von Netzwerk-Ressourcen                                                                                             |
| network_write                                 | Verwaltung von Netzwerk-Ressourcen                                                                                          |
| order_read                                    | Anzeige von Infrastruktur-Bestellungen                                                                                      |
| order_write                                   | Erstellung einer Infrastruktur-Bestellung                                                                                   |
| object-storage_iam_management                 | Erlaubt die Verwaltung von Speicherkonten auf dem S3-Produkt                                                                 |
| object-storage_read                           | Erlaubt das Anzeigen von Buckets und Bucket-Konfigurationen                                                                 |
| object-storage_write                          | Erlaubt das Bearbeiten von Buckets und Bucket-Konfigurationen                                                              |
| openshift_management                          | Erlaubt den Zugriff auf Openshift-Plattformen (auf den Mandanten beschränkt)                                                |
| support_management                            | Anzeige aller Support-Tickets des Mandanten                                                                                 |
| support_read                                  | Anzeige der eigenen Support-Tickets des Mandanten                                                                           |
| support_write                                 | Erstellung eines Support-Tickets für den Mandanten                                                                          |
| tag_read                                      | Anzeige von Tags, außer den RTMS-Tags                                                                                       |
| tag_write                                     | Verwaltung von Tags, außer den RTMS-Tags                                                                                    |
| ticket_comment_read                           | Anzeige von Kommentaren                                                                                                     |
| ticket_comment_write                          | Verwaltung von Kommentaren                                                                                                  |
| ticket_read                                   | Anzeige von Tickets                                                                                                         |
| ticket_write                                  | Verwaltung von Tickets                                                                                                      |
| incident_management                           | Verwaltung von Incident                                                                                                       |
| incident_read                                 | Anzeige von Incident                                                                                                            |

## Organisationen

Die Organisation ist mit Ihrem __Auftraggeberkonto__ und dem __zugehörigen Cloud Temple-Vertrag__ verbunden. Sie stellt Ihre Einheit (Gesellschaft, Abteilung, Team, ...) dar, die die vertragliche Beziehung zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier große Rollen:

- Sie ist die __vertragliche Einheit__ für Aspekte der Überwachung und Abrechnung,
- Sie definiert den __globalen Authentifizierungsmechanismus__: Die Authentifizierung kann lokal auf der Shiva-Konsole oder über einen Identitätsfederationsdienst erfolgen,
- Sie verwaltet alle __Benutzerkonten__,
- Sie __verwaltet die Mandanten__ (Production, Préproduction, Dev, Anwendung 1, Anwendung 2, ...) die Sie für Ihre Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Mandanten konfigurierbar. Zum Beispiel kann ein Konto berechtigt sein, Ressourcen in einem Mandanten zu bestellen, aber nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Ebene der Organisation __die Konfiguration des Authentifizierungsmechanismus__. Sie können entweder das lokale Authentifizierungsverzeichnis der Shiva-Konsole verwenden oder Ihre Organisation mit einer Ihrer Authentifizierungsquellen verknüpfen.

Die folgenden externen Authentifizierungsquellen werden unterstützt:

- Authentifizierungsquellen, die mit __OpenID Connect__ kompatibel sind,
- Authentifizierungsquellen, die mit __SAML__ kompatibel sind,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

Der Tenant ist ein __Ressourcenbündel innerhalb einer Organisation__. Eine [Organisation](#organisations) hat mindestens einen Tenant (der __Standard-Tenant__ genannt wird und umbenannt werden kann). Normalerweise werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Beispielsweise:

- Ein Tenant __Production__
- Ein Tenant __Präproduktion__
- Ein Tenant __Test__
- Ein Tenant __Qualifizierung__

Es ist jedoch auch möglich, die Dinge mit einer __Anwendungssicht__ oder nach __Kritikalität__ zu organisieren:

- Ein Tenant __Anwendung 1__ oder __Kritikalität 1__
- Ein Tenant __Anwendung 2__ oder __Kritikalität 2__
- ...

Die technischen Ressourcen, die bestellt werden, werden einem bestimmten Tenant zugewiesen und werden nicht mit anderen Tents geteilt. Beispielsweise sind ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Tenant verfügbar.
Bezüglich der Netzwerke ist es möglich, __'cross-tenant'-Netzwerke__ zu beantragen, um die Netzwerkverfügbarkeit zwischen den Tents sicherzustellen.

Die Benutzerberechtigungen müssen in jedem Tenant definiert werden. Daher muss jede Organisation sorgfältig über die gewünschten Tents nachdenken. Dieser Punkt wird in der Regel in einem Initiativworkshop behandelt, bei der Erstellung der Organisation.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tents zu verändern.

Ein Tenant darf nicht leer sein. Er muss unbedingt mit einem Minimum an Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Berechnungscluster,
- Ein Speicherplatz,
- Ein VLAN-Netzwerk.

| Bestellreferenz                                        | Einheit    | SKU                     |
|--------------------------------------------------------|------------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants         | 1 Tenant   | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone | 1 Tenant   | csp:(region):iaas:az:v1 |

### Verwaltung der Eigentümer eines Tenants

Jeder Tenant hat mindestens einen Eigentümer, was eine klare Verantwortung und eine effiziente Verwaltung der zugehörigen Ressourcen sicherstellt. Außerdem ist es möglich, mehrere Eigentümer auf einem einzelnen Tenant zu deklarieren, was Zusammenarbeit und gemeinsame Entscheidungsfindung ermöglicht. Unten finden Sie wichtige Informationen, die bei der Verwaltung dieser Eigentümer berücksichtigt werden müssen.

#### Wichtige Informationen zur Eigentümerverwaltung

#### 1. Anzahl der Eigentümer

* Es gibt keine technische Grenze für die Anzahl der Eigentümer, die auf dem Mandanten definiert werden können.
- Das Verwaltungsinterface (IHM) gibt eine Warnung aus, wenn mehr als 3 Eigentümer vorhanden sind, um zu veranlassen, die Anzahl der Eigentümer aufgrund von Sicherheits- und optimierter Zugangsverwaltungsgründen zu begrenzen.

#### 2. Hinzufügen eines neuen Eigentümers

* Bei der Hinzufügung eines neuen Eigentümers kann die Aktualisierung seiner Berechtigungen eine Verzögerung von bis zu 60 Minuten verursachen.
- Dieser Verbreitungszeitraum ist normal und stellt sicher, dass die Zugriffsrechte korrekt auf alle verknüpften Dienste und Ressourcen angewendet werden.

#### 2. Berechtigungen eines Eigentümers

* Ein Eigentümer erhält alle Berechtigungen, die mit den auf seinem Mandanten aktivierten Produkten verbunden sind.
- Es ist nicht möglich, die Berechtigungen eines Eigentümers zu ändern.

#### 3. Entfernung eines Eigentümers

* Um einen Eigentümer aus dem Mieter zu entfernen, muss der Benutzer eine Anfrage an den Support senden.
- Diese Prozedur stellt sicher, dass die Änderungen der Zugriffsrechte sicher und gemäß den besten Praktiken der Zugriffsverwaltung durchgeführt werden.

### Zugriffsberechtigung für einen Mandanten: Genehmigte IP-Adressen

Der Zugriff auf die Cloud-Verwaltungsconsole ist streng auf vorher genehmigte IP-Adressen beschränkt, im Einklang mit den Anforderungen der SecNumCloud-Zertifizierung. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem sie den Zugriff nur für Benutzer aus festgelegten IP-Bereichen ermöglicht und somit die Risiken von unerlaubtem Zugriff minimiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards schützt.

Hinweis: *Die Entfernung einer genehmigten IP erfolgt über eine Supportanfrage in der Cloud Temple-Console.*

### Ressourcenverbrauch innerhalb eines Mandanten

Es ist möglich, die Cloud-Ressourcen anzuzeigen, die innerhalb eines Mandanten verbraucht werden, wodurch eine detaillierte Übersicht über die Nutzung der verschiedenen bereitgestellten Dienste entsteht. Diese Funktion ermöglicht es den Benutzern, den Ressourcenverbrauch in Echtzeit zu verfolgen, die am stärksten beanspruchten Dienste zu identifizieren und ihre Nutzung entsprechend den Anforderungen zu optimieren.

Im Menü der Konsole klicken Sie auf „Verbrauchsbericht“ und wählen Sie das gewünschte Zeitintervall aus. Sie können dann den Cloud-Ressourcenverbrauch für die definierte Periode detailliert ansehen, was Ihnen ermöglicht, die Nutzung der Dienste zu analysieren und Ihre Verwaltung entsprechend zu optimieren:

<img src={shivaTenantRessources_01} />