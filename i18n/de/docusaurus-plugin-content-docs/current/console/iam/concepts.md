---
title: Concepts
---

## Benutzer

Die Zugriffskonten für die Shiva-Konsole werden vom Masterkonto des Auftraggebers auf Einladung erstellt (unabhängig vom Authentifizierungsverzeichnis). 
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Die Identitätsföderation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt per Einladung. Um einen Benutzer in eine [Organisation](#organisations) einzuladen, gehen Sie im linken Menü auf Ihrem Bildschirm im grünen Banner auf __'Verwaltung'__ und dann im Untermenü auf __'Benutzer'__.

Klicken Sie auf der Benutzerseite auf die Schaltfläche __'Neuer Benutzer'__.

![](images/shiva_onboard_003.png)

Geben Sie dann die E-Mail-Adresse des Benutzers an.

![](images/shiva_onboard_004.png)

Der Benutzer erhält eine Bestätigungs-E-Mail.

![](images/shiva_onboard_001.png)

Nach Abschluss der Überprüfung kann sich der Benutzer in der Konsole anmelden.

### Zuweisung von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt über die Benutzerseite.

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Es ist daher erforderlich, dass der einladende Administrator dem Benutzer die für seine Tätigkeit erforderlichen Rechte zuweist. Klicken Sie dazu einfach im Menü des Benutzers auf __'Aktionen'__ und wählen Sie die Option __'Bearbeiten'__.

Das Kontextmenü zur Aktivierung der Rechte erscheint dann:

![](images/shiva_onboard_005.png)

Die Berechtigungskonfiguration muss für jeden [Tenant](#tenants) der [Organisation](#organisations) vorgenommen werden.

Eine Liste der Berechtigungen und deren Definition ist [hier](#permissions) verfügbar.

### Wiederanmeldung eines Benutzers

Wenn ein Benutzer provisioniert wurde, aber seine Anmeldung innerhalb der Ablauffrist der von der Konsole gesendeten E-Mail nicht bestätigt hat, kann er seine Anmeldung nicht mehr bestätigen. Es ist dann möglich, ihm einen neuen Link zu senden, damit er seine erste Anmeldung erneuern kann.

Die Wiederanmeldung eines Benutzers erfolgt im Reiter __'Benutzer'__ im Verwaltungsfenster unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie erneut anmelden möchten, und klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und dann auf __'Wiederanmeldung'__.

**Warnung**: Stellen Sie sicher, dass die Wiederanmeldungsanforderung tatsächlich von Ihnen stammt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_012.png)

### Aktualisierung Ihres Profils

Diese Aktion steht nur für ein lokales Konto (nicht SSO) zur Verfügung.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und dann die Aktion __'Profil aktualisieren'__.

Gehen Sie anschließend in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anforderung zur Aktualisierung des Profils tatsächlich von Ihnen stammt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_014.png)

### Passwort zurücksetzen

Diese Aktion steht nur für ein lokales Konto (nicht SSO) zur Verfügung.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und dann die Aktion __'Passwort zurücksetzen'__.

Gehen Sie anschließend in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anforderung zur Zurücksetzung Ihres Passworts tatsächlich von Ihnen stammt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_015.png)

### Zurücksetzen der Zwei-Faktor-Authentifizierung

Diese Aktion steht nur für ein lokales Konto (nicht SSO) zur Verfügung.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und dann die Aktion __'MFA zurücksetzen'__.

Gehen Sie anschließend in Ihr E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zwei-Faktor-Authentifizierung zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass die Anforderung zur Zurücksetzung Ihrer Zwei-Faktor-Authentifizierung tatsächlich von Ihnen stammt. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_016.png)

### Löschen eines Benutzers

Das Löschen eines Benutzers erfolgt im Reiter __'Benutzer'__ im Verwaltungsfenster unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie dann auf die Aktionsschaltfläche am Ende der Zeile und dann auf __'Löschen'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Hinweis: Sie können sich nicht selbst löschen und Sie können keinen Benutzer __'Eigentümer'__ löschen.

### Abmelden

Die Abmeldung eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm und dann auf __'Abmelden'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Eine automatische Abmeldung erfolgt, wenn das Sitzungs-JWT-Token abläuft.

### Ändern der Sprache eines Benutzers

Das Ändern der Sprache eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm, unter __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden [Tenant](#tenants).

### Abonnement für thematische Benachrichtigungen

Das Abonnementmanagement ermöglicht den Empfang von E-Mails zu aktivierten Themen, die automatisch bei Auftreten entsprechender Ereignisse gesendet werden.

Es ist im Benutzerprofil unter dem Tab "Meine Abonnements" erreichbar:

![](images/shiva_profil_007.png)

Zum Beispiel werden im Falle eines Vorfalls spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und schrittweise erweitert werden, um sich den Bedürfnissen und Änderungen in unserer Betriebsumgebung anzupassen.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine feingranulare Verwaltung der Rechte der Benutzer einer Organisation mit einer Trennung nach Tenant. 
Zunächst ermöglicht das Hauptkonto des Auftraggebers die Erstkonfiguration der Konten und der zugehörigen Berechtigungen. 
Anschließend ermöglicht das Recht __'iam_write'__ einem Konto die Verwaltung der Berechtigungen anderer Benutzer.

### Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Wenn ein Benutzer erstellt wird, verfügt er standardmäßig über keine Berechtigungen. Jede Berechtigung wird individuell zugewiesen und funktioniert einzeln, ohne sich mit anderen Berechtigungen zu überschneiden. Sie gelten in Kombination, was bedeutet, dass ein Benutzer über alle erforderlichen Berechtigungen verfügen muss, um eine bestimmte Aktion auszuführen.

Die folgenden Berechtigungen können für jeden Benutzer und für jeden Tenant Ihrer Organisation konfiguriert werden:
	•	Leseberechtigungen „read“: ermöglichen nur die Ansicht von Ressourcen ohne Änderungsmöglichkeit.
	•	Schreibberechtigungen „write“: ermöglichen die Änderung von Konfigurationen.
 	•	Verwaltungsberechtigungen „management“: ermöglichen das erweiterte Management von Ressourcen.

- __Dies sind Berechtigungen, keine Rollen.__ Daher ist es notwendig, über die Berechtigung READ und WRITE zu verfügen, um eine Konfiguration ändern zu können.

Letzte Aktualisierung: 23/01/2025

| Name der Berechtigung                         | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Ansicht von Protokollen und Aktivitäten                                                                                       |
| activity_write                                | Verwaltung von Protokollen und Aktivitäten                                                                                     |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Ansicht                                                                  |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Änderung                                                                 |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Ansicht                                                                    |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Änderung                                                                   |
| bastion_read                                  | Ansicht von Bastion-Ressourcen                                                                                                 |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen,...)                                                                  |
| bastion_console_access                        | Berechtigung zum Zugriff auf die Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                     |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                |

| compute_iaas_opensource_infrastructure_read   | Angebot OpenIaaS - Erweiterte Datenabfrage der Ressourcen Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Angebot OpenIaaS - Erweiterte Verwaltung der Ressourcen Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Angebot OpenIaaS - Abfrage von Ressourcen des Typs Virtuelle Maschinen                                                        |
| compute_iaas_opensource_management            | Angebot OpenIaaS - Verwaltung von Ressourcen des Typs Virtuelle Maschinen                                                             |
| compute_iaas_opensource_virtual_machine_power | Angebot OpenIaaS - Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| compute_iaas_vmware_console_access            | Angebot Vmware - Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_vmware_infrastructure_read       | Angebot Vmware - Erweiterte Datenabfrage der VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration usw.)  |
| compute_iaas_vmware_infrastructure_write      | Angebot Vmware - Erweiterte Verwaltung der VMware-Ressourcen                                                                           |
| compute_iaas_vmware_read                      | Angebot Vmware - Abfrage von Ressourcen des Typs Virtuelle Maschinen                                                         |
| compute_iaas_vmware_management                | Angebot Vmware - Verwaltung von Ressourcen des Typs Virtuelle Maschinen (ermöglicht die Verschlüsselung einer virtuellen Maschine)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Angebot Vmware - Verwaltung der Stromversorgung einer virtuellen Maschine                                                               |
| baremetal_read                                | Angebot Bare Metal - Abfrage von Ressourcen des Typs Bare Metal                                                               |
| baremetal_console_access                      | Angebot Bare Metal - Öffnen der Konsole eines Bare Metal                                                                  |
| console_public_access_read                    | Abfrage der IPs, die Zugriff auf die Konsole haben                                                                         |
| console_public_access_write                   | Hinzufügen von IPs, die Zugriff auf die Konsole haben                                                                                  |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                              |
| documentation_read                            | Abfrage der Dokumentationsressourcen von Confluence                                                                        |
| housing_read                                  | Abfrage von Ressourcen des Typs Colocation                                                                                 |
| iam_offline_access                            | Erstellen und Löschen von Personal Access Tokens (PAT)                                                                        |
| iam_read                                      | Abfrage von Benutzerrechten                                                                                           |
| iam_write                                     | Verwaltung von Benutzerrechten                                                                                                |
| intervention_read                             | Abfrage von geplanten Änderungen und Markteinführungen auf der Plattform                                                  |
| inventory_read                                | Abfrage von Ressourcen des Typs Inventar                                                                                 |
| inventory_write                               | Verwaltung von Ressourcen des Typs Inventar                                                                                      |
| monitoring_read                               | Abfrage des Monitorings                                                                                                     |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                          |
| metric_read                                   | Abfrage von Gesundheitsdaten zu virtuellen Maschinen und Hosts                                                         |
| network_read                                  | Abfrage von Netzwerkressourcen                                                                                             |
| network_write                                 | Verwaltung von Netzwerkressourcen                                                                                                  |
| order_read                                    | Abfrage von Infrastrukturaufträgen                                                                                     |
| order_write                                   | Erstellung eines Infrastrukturauftrags                                                                                            |
| object-storage_iam_management                 | Verwaltung von Speicherkonten auf dem Produkt S3                                                                       |
| object-storage_read                           | Anzeige von Buckets und Bucket-Konfigurationen                                                                   |
| object-storage_write                          | Bearbeitung von Buckets und Bucket-Konfigurationen                                                                  |
| openshift_management                          | Verbindung zu den Openshift-Plattformen (tenantbezogen)                                                          |
| support_management                            | Abfrage aller Support-Tickets des Tenants                                                                       |
| support_read                                  | Abfrage der eigenen Support-Tickets des Tenants                                                                                  |
| support_write                                 | Erstellung eines Support-Tickets für den Tenant                                                                                     |
| tag_read                                      | Abfrage von Tags, außer RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung von Tags, außer RTMS-Tags                                                                                        |
| ticket_comment_read                           | Abfrage von Kommentaren                                                                                                  |
| ticket_comment_write                          | Verwaltung von Kommentaren                                                                                                       |
| ticket_read                                   | Abfrage von Tickets                                                                                                       |
| ticket_write                                  | Verwaltung von Tickets                                                                                                            |

### Veraltete Berechtigungen

Die folgenden Berechtigungen sind nicht mehr verfügbar:

| Berechtigungsname                           | Datum       | Beschreibung der Berechtigung                                                                                   |
| ------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)               | 07/10/2024 | Abfrage von Ressourcen des Typs Backup                                                                      |
| backup_write (**DEPRECATED**)               | 07/10/2024 | Verwaltung von Backup-Ressourcen - Änderung                                                           |
| compute_console_access (**DEPRECATED**)     | 07/10/2024 | Öffnen der Konsole einer virtuellen Maschine                                                                |
| compute_infrastructure_read (**DEPRECATED**)| 07/10/2024 | Erweiterte Datenabfrage der VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration usw.) |
| compute_infrastructure_write (**DEPRECATED**)| 07/10/2024 | Erweiterte Verwaltung der VMware-Ressourcen                                                                          |
| compute_read (**DEPRECATED**)                | 07/10/2024 | Abfrage von Ressourcen des Typs Virtuelle Maschinen                                                        |
| compute_management (**DEPRECATED**)          | 07/10/2024 | Verwaltung von Ressourcen des Typs Virtuelle Maschinen                                                             |
| compute_virtual_machine_power (**DEPRECATED**)    | 07/10/2024 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| iam_manage_permissions (**DEPRECATED**)    | 07/10/2024 | Verwaltung neuer Rechte für sich selbst                                                                      |


## Organisationen
L'organisation est liée à votre __compte commanditaire__ et au __contrat Cloud Temple associé__. Elle représente votre entité (société, département, équipe, ...) qui porte la relation contractuelle entre Cloud Temple et vous.

### Principe d'une organisation

L'organisation a quatre grands rôles :

- Elle représente __l'entité contractuelle__ pour les aspects de suivi et de facturation,
- Elle définit __la configuration globale du mécanisme d'authentification__ : l'authentification peut être locale au niveau de la console Shiva ou distante via un service de fédération d'identité,
- Elle porte l'ensemble des __comptes utilisateurs__,
- Elle __fédère les tenants__ (Production, Préproduction, Dev, Application 1, Application 2, ...) que vous définissez pour les besoins de votre architecture Cloud.

Les rôles (droits/permissions) des utilisateurs sont configurables pour chaque tenant définit dans votre organisation. Par exemple un compte peut être autorisé à commander des ressources dans un tenant, mais pas dans un autre.

### Mécanismes d'authentification

La console Shiva permet au niveau de l'organisation __le paramétrage du mécanisme d'authentification__. Vous pouvez
utiliser le référentiel local d'authentification de la console Shiva ou bien accoster votre organisation à l'un
de vos référentiels d'authentification.

Les référentiels externes suivants sont supportés :

- Référentiels compatibles __OpenID Connect__,
- Référentiels compatibles __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

Le tenant est un __regroupement de ressources au sein d'une organisation__. Eine [Organisation](#organisations) hat mindestens einen Tenant (einen __Standardtenant__, der umbenannt werden kann). Im Allgemeinen werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Umfänge zu segmentieren.

Zum Beispiel:

- Ein __Produktions__ Tenant
- Ein __Vorproduktions__ Tenant
- Ein __Abnahme__ Tenant
- Ein __Qualifikations__ Tenant

Es ist aber auch möglich, die Dinge mit einer __applikativen Sicht__ oder nach __Kritikalität__ zu organisieren:

- Ein __Anwendung 1__ Tenant oder __Kritikalität 1__
- Ein __Anwendung 2__ Tenant oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen werden einem bestimmten Tenant zugewiesen und nicht mit anderen Tenants geteilt. Zum Beispiel sind ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Tenant verfügbar.
Bezüglich der Netzwerke ist es möglich, __'cross tenant'__ Netzwerke zu beantragen, um die Netzwerkkontinuität zwischen den Tenants zu gewährleisten.

Die Berechtigungen der Benutzer sind in jedem Tenant festzulegen. Daher muss jede Organisation sorgfältig über die gewünschten Tenants nachdenken. Dieser Punkt wird in der Regel in einem Einführungsworkshop angesprochen, wenn die Organisation erstellt wird.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tenants weiterzuentwickeln.

Ein Tenant kann nicht leer sein. Er muss unbedingt mit einem Minimum an Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherplatz,
- Ein Netzwerk-VLAN.

| Bestellreferenz                                            | Einheit   | SKU                      |
|------------------------------------------------------------|----------|--------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants            | 1 Tenant | csp:tenant:v1            |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone | 1 Tenant | csp:(region):iaas:az:v1  |

### Verwaltung der Eigentümer eines Tenants

#### Kontext
Jeder Tenant hat mindestens einen Eigentümer, der so eine klare Verantwortung und eine effektive Verwaltung der zugehörigen Ressourcen gewährleistet. Es ist außerdem möglich, mehrere Eigentümer auf einem einzigen Tenant zu deklarieren, was eine Zusammenarbeit und eine gemeinsame Entscheidungsfindung ermöglicht. Unten finden Sie wichtige Informationen, die bei der Verwaltung dieser Eigentümer zu beachten sind.

#### Wichtige Informationen zur Verwaltung der Eigentümer

#### 1. Anzahl der Eigentümer
* Es gibt keine technische Begrenzung für die Anzahl der Eigentümer, die auf einem Tenant definiert werden können.
* Die Verwaltungsschnittstelle (GUI) gibt eine Warnung aus, wenn mehr als 3 Eigentümer vorhanden sind, um zu ermutigen, die Anzahl der Eigentümer aus Sicherheits- und Zugangsverwaltungsgründen zu begrenzen.

#### 2. Hinzufügen eines neuen Eigentümers
* Beim Hinzufügen eines neuen Eigentümers kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern.
* Diese Ausbreitungszeit ist normal und stellt sicher, dass die Zugriffsrechte korrekt auf alle zugehörigen Dienste und Ressourcen angewendet werden.

#### 3. Entfernen eines Eigentümers
* Um einen Eigentümer von einem Tenant zu entfernen, muss der Benutzer eine Anfrage an den Support stellen.
* Dieses Verfahren stellt sicher, dass die Änderungen der Zugriffsrechte sicher und gemäß den Best Practices der Zugangsverwaltung erfolgen.

### Zugriffsberechtigung zu einem Tenant: Erlaubte IPs

Der Zugang zur Cloud-Verwaltungskonsole ist streng auf vorher genehmigte IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Qualifizierung. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem der Zugriff nur für Benutzer aus bestimmten IP-Bereichen erlaubt wird, wodurch die Risiken unbefugten Zugriffs minimiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards geschützt wird.

Hinweis: *Das Entfernen einer genehmigten IP erfolgt durch eine Supportanfrage in der Cloud Temple-Konsole.*

### Ressourcenverbrauch innerhalb eines Tenants

Es ist möglich, die verbrauchten Cloud-Ressourcen innerhalb eines Tenants anzuzeigen, wodurch eine detaillierte Ansicht der Nutzung der verschiedenen bereitgestellten Dienste ermöglicht wird. Diese Funktionalität ermöglicht es den Benutzern, in Echtzeit die Nutzung ihrer Ressourcen zu verfolgen, die am meisten genutzten Dienste zu identifizieren und ihre Nutzung je nach Bedarf zu optimieren.

Im Konsolenmenü klicken Sie auf "Verbrauchsbericht" und wählen Sie den gewünschten Zeitraum. So können Sie den Ressourcenverbrauch für den definierten Zeitraum im Detail anzeigen, was Ihnen ermöglicht, die Nutzung der Dienste zu analysieren und Ihr Management dementsprechend zu optimieren:

![](images/shiva_tenant_ressources_01.png)