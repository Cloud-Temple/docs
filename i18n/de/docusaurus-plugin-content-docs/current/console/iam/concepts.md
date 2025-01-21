---
title: Concepts
---


## Benutzer

Die Zugangsaccounts zum Shiva-Konsole werden vom Hauptkonto des Auftraggebers auf Einladung erstellt (unabhängig vom Authentifizierungs-Repository).
Die Zugangsdaten sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Das Identitätsmanagement wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Benutzerkonto in Ihrer Organisation erstellen

Das Erstellen eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladung. Um einen Benutzer in eine [Organisation](#organisations) einzuladen, gehen Sie zum Menü __'Verwaltung'__ links auf Ihrem Bildschirm im grünen Banner und dann zum Untermenü __'Benutzer'__.  

Klicken Sie auf der Benutzerseite auf die Schaltfläche __'Neuer Benutzer'__. 

![](images/shiva_onboard_003.png)

Geben Sie anschließend die E-Mail-Adresse des Benutzers an 

![](images/shiva_onboard_004.png)

Der Benutzer erhält dann eine Verifizierungs-E-Mail.  

![](images/shiva_onboard_001.png)

Nach Abschluss der Verifizierung kann sich der Benutzer auf der Konsole anmelden.

### Berechtigungen einem Benutzer zuweisen

Die Verwaltung der Benutzerrechte erfolgt auf der Benutzerseite. 

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Daher muss der Administrator, der die Einladung vorgenommen hat, ihm die für seine Tätigkeit erforderlichen Rechte zuweisen. Klicken Sie einfach auf das Menü __'Aktionen'__ des Benutzers und wählen Sie die Option __'Bearbeiten'__.  

Das Menü zur Aktivierung der Rechte erscheint dann:

![](images/shiva_onboard_005.png)

Die Konfiguration der Berechtigungen muss für jeden [Mandant](#tenants) der [Organisation](#organisations) vorgenommen werden.

Die Liste der Berechtigungen und deren Definition ist [hier](#permissions) zugänglich.

### Erneute Registrierung eines Benutzers

Wenn ein Benutzer bereitgestellt wurde, seine Registrierung jedoch innerhalb der Ablaufzeit der von der Konsole gesendeten E-Mail nicht bestätigt hat, kann er seine Registrierung nicht mehr bestätigen. Es ist dann möglich, ihm einen Link zu senden, damit er seine Erstregistrierung erneuern kann.

Die erneute Registrierung eines Benutzers erfolgt im Tab __'Benutzer'__ des Verwaltungspanels unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie erneut registrieren möchten, und klicken Sie dann auf den Aktionsknopf am Ende der Zeile und dann auf __'Erneute Registrierung'__.

**Warnung**: Stellen Sie sicher, dass Sie der Urheber der Anfrage zur erneuten Registrierung Ihres Benutzerkontos sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_012.png)

### Profil aktualisieren

Diese Aktion ist nur für lokale Konten (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und dann die Aktion __'Profil aktualisieren'__.

Gehen Sie anschließend zu Ihrem E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Profil zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Urheber der Anfrage zur Aktualisierung des Profils sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_014.png)

### Passwort zurücksetzen

Diese Aktion ist nur für lokale Konten (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und dann die Aktion __'Passwort zurücksetzen'__.

Gehen Sie anschließend zu Ihrem E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihr Passwort zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Urheber der Anfrage zum Zurücksetzen Ihres Passworts sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_015.png)

### Zurücksetzen der Zwei-Faktor-Authentifizierung

Diese Aktion ist nur für lokale Konten (nicht SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf dem Bildschirm __'Benutzereinstellungen'__ und dann die Aktion __'MFA zurücksetzen'__.

Gehen Sie anschließend zu Ihrem E-Mail-Postfach und klicken Sie auf den von der Konsole generierten Link. Folgen Sie einfach den Schritten, um Ihre Zwei-Faktor-Authentifizierung zu aktualisieren.

**Warnung**: Stellen Sie sicher, dass Sie der Urheber der Anfrage zum Zurücksetzen Ihrer Zwei-Faktor-Authentifizierung sind. Bitte melden Sie alle Anfragen, die nicht von Ihnen stammen, über ein Support-Ticket.

![](images/shiva_profil_016.png)

### Benutzer löschen

Das Löschen eines Benutzers muss im Tab __'Benutzer'__ des Verwaltungspanels unten links auf dem Bildschirm erfolgen.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie dann auf den Aktionsknopf am Ende der Zeile und dann auf __'Löschen'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Hinweis: Sie können sich nicht selbst löschen und Sie können keinen Benutzer __'Eigentümer'__ löschen.

### Abmelden

Die Abmeldung eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm und dann __'Abmelden'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Eine automatische Abmeldung erfolgt bei Ablauf des Sitzungstokens (JWT-Token).

### Sprache eines Benutzers ändern

Das Ändern der Sprache eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden [Tenant](#tenants).

### Thematischen Benachrichtigungen abonnieren

Die Benachrichtigungsverwaltung ermöglicht es, E-Mails zu den aktivierten Themen zu erhalten, die automatisch bei entsprechenden Ereignissen gesendet werden.

Die Verwaltung ist im Benutzerprofil im Tab "Meine Abonnements" zugänglich:

![](images/shiva_profil_007.png)

 Zum Beispiel werden im Falle eines Vorfalls spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und schrittweise erweitert werden, um den Bedürfnissen und Änderungen in unserer Betriebsumgebung gerecht zu werden.

## Berechtigungen

Die Shiva-Konsole ermöglicht eine feine Verwaltung der Benutzerrechte einer Organisation, mit einer Trennung nach Tenant.
Ursprünglich ermöglicht das Hauptkonto des Auftraggebers die initiale Konfiguration der Konten und der zugehörigen Berechtigungen.
Später ermöglicht das Recht __'iam_write'__ einem Konto die Verwaltung der Berechtigungen anderer Benutzer.

### Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Die folgenden Berechtigungen sind für jeden [Benutzer](#utilisateurs) und für jeden [Tenant](#tenants#selection-dun-tenant) Ihrer Organisation konfigurierbar.

- Die Berechtigungen vom Typ __'read'__ sind mit der Einsichtnahme ohne Konfigurationsmöglichkeiten verbunden
- Die Berechtigungen vom Typ __'write'__ sind mit der Änderung der Konfiguration verbunden.
- __Es handelt sich um Berechtigungen, keine Rollen.__ In diesem Sinne ist es notwendig, die Berechtigung READ und WRITE zu haben, um eine Konfiguration zu ändern.

__VERSION : 20241007__

| Name der Berechtigung                         | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Einsichtnahme in Protokolle und Aktivitäten                                                                                    |
| activity_write                                | Verwaltung von Protokollen und Aktivitäten                                                                                     |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS Angebot - Einsichtnahme                                                            |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS Angebot - Änderung                                                                 |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Vmware Angebot - Einsichtnahme                                                             |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware Angebot - Änderung                                                                  |
| bastion_read                                  | Einsichtnahme in Bastion-Ressourcen                                                                                            |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen,...)                                                                  |
| bastion_console_access                        | Zugriffserlaubnis auf die Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                           |
| compute_iaas_opensource_console_access        | OpenIaaS Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS Angebot - Einsichtnahme in erweiterte Daten der Xen Orchestra Ressourcen |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS Angebot - Erweiterte Verwaltung der Xen Orchestra Ressourcen                                                                          |
| compute_iaas_opensource_read                  | OpenIaaS Angebot - Einsichtnahme in Ressourcen vom Typ Virtuelle Maschinen                                                      |

| compute_iaas_opensource_management            | Angebot OpenIaaS -Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                             |
| compute_iaas_opensource_virtual_machine_power | Angebot OpenIaaS -Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| compute_iaas_vmware_console_access            | Angebot Vmware - Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_vmware_infrastructure_read       | Angebot Vmware - Anzeige erweiterter Daten zu Vmware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, drs-Konfiguration usw.)  |
| compute_iaas_vmware_infrastructure_write      | Angebot Vmware - Erweiterte Verwaltung der Vmware-Ressourcen                                                                           |
| compute_iaas_vmware_read                      | Angebot Vmware - Anzeige von Ressourcen vom Typ Virtuelle Maschinen                                                         |
| compute_iaas_vmware_management                | Angebot Vmware - Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                              |
| compute_iaas_vmware_virtual_machine_power     | Angebot Vmware - Verwaltung der Stromversorgung einer virtuellen Maschine                                                               |
| console_public_access_read                    | Anzeige der berechtigten IPs zum Zugriff auf die Konsole                                                                         |
| console_public_access_write                   | Hinzufügen berechtigter IPs zum Zugriff auf die Konsole                                                                                  |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                              |
| documentation_read                            | Anzeige der Dokumentationsressourcen von Confluence                                                                        |
| housing_read                                  | Anzeige von Ressourcen vom Typ Colocation                                                                                 |
| iam_offline_access                            | Erstellen und Löschen von Personal Access Tokens (PAT)                                                                        |
| iam_read                                      | Anzeige der Benutzerrechte                                                                                           |
| iam_write                                     | Verwaltung der Benutzerrechte                                                                                                |
| intervention_read                             | Anzeige der auf der Plattform geplanten Änderungen und Produktionsbereitstellungen                                                  |
| inventory_read                                | Anzeige von Ressourcen vom Typ Inventar                                                                                 |
| inventory_write                               | Verwaltung von Ressourcen vom Typ Inventar                                                                                      |
| monitoring_read                               | Anzeige des Monitorings                                                                                                     |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                          |
| metric_read                                   | Anzeige von Gesundheitsdaten zu virtuellen Maschinen und Hosts                                                         |
| network_read                                  | Anzeige von Netzwerkressourcen                                                                                             |
| network_write                                 | Verwaltung von Netzwerkressourcen                                                                                                  |
| order_read                                    | Anzeige der Infrastrukturaufträge                                                                                     |
| order_write                                   | Erstellung eines Infrastrukturauftrags                                                                                            |
| object-storage_iam_management                 | Verwaltung der Speicherkonten für das S3-Produkt                                                                       |
| object-storage_read                           | Anzeige der Buckets und ihrer Konfigurationen                                                                   |
| object-storage_write                          | Bearbeitung der Buckets und ihrer Konfigurationen                                                                  |
| openshift_management                          | Verbindung zu Openshift-Plattformen herstellen (auf den Tenant bezogen)                                                          |
| Owner                                         | Der Benutzer hat Administratorrechte auf einem Tenant                                                                        |
| support_management                            | Anzeige aller Support-Tickets des Tenants                                                                       |
| support_read                                  | Anzeige der eigenen Support-Tickets des Tenants                                                                                  |
| support_write                                 | Erstellung eines Support-Tickets auf dem Tenant                                                                                     |
| tag_read                                      | Anzeige der Tags, außer den RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung der Tags, außer den RTMS-Tags                                                                                        |
| ticket_comment_read                           | Anzeige der Kommentare                                                                                                  |
| ticket_comment_write                          | Verwaltung der Kommentare                                                                                                       |
| ticket_read                                   | Anzeige der Tickets                                                                                                       |
| ticket_write                                  | Verwaltung der Tickets                                                                                                            |

**Hinweise** :

- *Es gibt keine Begrenzung bezüglich der Anzahl der auf einem Tenant festgelegten Eigentümer. Die Verwaltungsoberfläche (IHM) gibt jedoch eine Warnung aus, wenn es mehr als 3 Eigentümer gibt, um aus Sicherheitsgründen und zur optimalen Verwaltung der Zugriffsrechte die Anzahl der Eigentümer zu begrenzen.*
- *Bei Hinzufügung eines neuen Eigentümers kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern. Diese Verbreitungszeit ist normal und stellt sicher, dass die Zugriffsrechte korrekt auf alle zugehörigen Dienste und Ressourcen angewendet werden.*
- *Um einen Eigentümer vom Tenant zu entfernen, muss der Benutzer eine Anfrage beim Support einreichen. Dieses Verfahren stellt sicher, dass Änderungen der Zugriffsrechte sicher und gemäß den bewährten Verfahren der Zugriffskontrolle durchgeführt werden.*

### Veraltete Berechtigungen

Die folgenden Berechtigungen sind nicht mehr verfügbar :

| Name der Berechtigung                         | Datum      | Beschreibung der Berechtigung                                                                                   |
| --------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                 | 07/10/2024 | Anzeige von Ressourcen vom Typ Backup                                                                     |
| backup_write (**DEPRECATED**)                 | 07/10/2024 | Verwaltung von Ressourcen vom Typ Backup - Änderung                                                           |
| compute_console_access (**DEPRECATED**)       | 07/10/2024 | Öffnen der Konsole einer virtuellen Maschine                                                                |
| compute_infrastructure_read (**DEPRECATED**)  | 07/10/2024 | Anzeige erweiterter Daten zu Vmware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, drs-Konfiguration usw.) |
| compute_infrastructure_write (**DEPRECATED**) | 07/10/2024 | Erweiterte Verwaltung der Vmware-Ressourcen                                                                          |
| compute_read (**DEPRECATED**)                 | 07/10/2024 | Anzeige von Ressourcen vom Typ Virtuelle Maschinen                                                        |
| compute_management (**DEPRECATED**)           | 07/10/2024 | Verwaltung von Ressourcen vom Typ Virtuelle Maschinen                                                             |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                              |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Verwaltung der neuen Rechte für sich selbst                                                                      |


## Organisationen

Die Organisation ist mit Ihrem __Contractor-Konto__ und dem __damit verbundenen Cloud Temple-Vertrag__ verbunden. Sie stellt Ihre Einheit (Unternehmen, Abteilung, Team, ...) dar, die die vertragliche Beziehung zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie stellt die __vertragliche Einheit__ für Tracking- und Abrechnungsaspekte dar,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: Die Authentifizierung kann entweder lokal auf der Shiva-Konsole oder remote über einen Identitätsföderationsdienst erfolgen,
- Sie trägt alle __Benutzerkonten__,
- Sie __föderiert die Mandanten__ (Produktion, Vorproduktion, Entwicklung, Anwendung 1, Anwendung 2, ...), die Sie für die Anforderungen Ihrer Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Mandanten konfigurierbar. Beispielsweise kann ein Konto berechtigt sein, Ressourcen in einem Mandanten zu bestellen, aber nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene __die Einstellung des Authentifizierungsmechanismus__. Sie können
das lokale Authentifizierungsrepository der Shiva-Konsole verwenden oder Ihre Organisation an eines Ihrer Authentifizierungsrepositorys anbinden.

Folgende externe Repositories werden unterstützt:

- Repositories, die __OpenID Connect__ unterstützen,
- Repositories, die __SAML__ unterstützen,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Mandant

Der Mandant ist eine __Ressourcengruppe innerhalb einer Organisation__. Eine [Organisation](#organisationen) hat mindestens einen Mandanten (genannt __Standard-Mandant__, der umbenannt werden kann). In der Regel werden mehrere Mandanten verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Zum Beispiel:

- Ein __Produktions__-Mandant
- Ein __Vorproduktions__-Mandant
- Ein __Test__-Mandant
- Ein __Qualifikations__-Mandant

Aber es ist auch möglich, die Dinge mit einer __Anwendungsperspektive__ oder nach __Kritikalität__ zu organisieren:

- Ein __Anwendung 1__-Mandant oder __Kritikalität 1__
- Ein __Anwendung 2__-Mandant oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen werden einem spezifischen Mandanten zugewiesen und nicht mit anderen Mandanten geteilt. Beispielsweise sind ein Hypervisor-Cluster und die zugehörigen L2-Netzwerke nur in einem Mandanten verfügbar.
Für Netzwerke ist es möglich, __Cross-Tenant__-Netzwerke zu beantragen, um die Netzwerkverbindung zwischen den Mandanten zu gewährleisten.

Die Benutzerberechtigungen sind in jedem Mandanten festzulegen. Jede Organisation muss daher sorgfältig über die gewünschten Mandanten nachdenken. Dieser Punkt wird in der Regel im Initialisierungsworkshop bei der Erstellung der Organisation behandelt.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Mandanten weiterzuentwickeln.

Ein Mandant kann nicht leer sein. Er muss notwendigerweise mit einem Minimum an Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherbereich,
- Ein Netzwerk-VLAN.


| Bestellreferenz                                        | Einheit  | SKU                     |  
|--------------------------------------------------------|----------|-------------------------|
| MANDANT - *(REGION)* - Aktivierung eines Mandanten     | 1 Mandant| csp:mandant:v1          |
| MANDANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone | 1 Mandant | csp:(region):iaas:az:v1 |


### Autorisierung des Zugriffs auf einen Mandanten: Zugelassene IPs

Der Zugriff auf die Cloud-Management-Konsole ist strikt auf zuvor zugelassene IP-Adressen beschränkt, um die Anforderungen der SecNumCloud-Qualifizierung zu erfüllen. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem sie nur den Zugriff durch Benutzer aus festgelegten IP-Bereichen erlaubt und somit die Risiken unbefugten Zugriffs minimiert, wobei die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards geschützt wird.

Hinweis: *Das Entfernen einer zugelassenen IP erfolgt durch eine Supportanfrage in der Cloud Temple-Konsole.*

### Ressourcenkonsum innerhalb eines Mandanten

Es ist möglich, die verbrauchten Cloud-Ressourcen innerhalb eines Mandanten anzuzeigen und damit eine detaillierte Ansicht der Nutzung der verschiedenen bereitgestellten Dienste zu erhalten. Diese Funktionalität ermöglicht es den Benutzern, den Verbrauch ihrer Ressourcen in Echtzeit zu überwachen, die am stärksten genutzten Dienste zu identifizieren und deren Nutzung je nach Bedarf zu optimieren.

Im Menü der Konsole klicken Sie auf „Verbrauchsbericht“ und wählen Sie dann den gewünschten Zeitraum aus. Sie können dann den Verbrauch der Cloud-Ressourcen im definierten Zeitraum detailliert anzeigen, was Ihnen ermöglicht, die Nutzung der Dienste zu analysieren und Ihre Verwaltung entsprechend zu optimieren:

![](images/shiva_tenant_ressources_01.png)