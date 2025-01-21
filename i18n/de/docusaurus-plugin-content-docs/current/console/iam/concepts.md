---
title: Concepts
---


## Benutzer

Die Zugänge zur Shiva-Konsole werden vom Master-Konto des Auftraggebers auf Einladung erstellt (unabhängig vom Authentifizierungs-Repository).
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations) gültig.

*__Hinweis:__ [Die Verwaltung der Identitätsföderation erfolgt auf Organisationsebene](#organisations#mecanismes-dauthentification)*

### Erstellen eines Benutzerkontos in Ihrer Organisation

Das Erstellen eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladung. Um einen Benutzer zu einer [Organisation](#organisations) einzuladen, gehen Sie im linken Menü auf Ihrem Bildschirm auf dem grünen Banner auf __'Verwaltung'__ und dann im Untermenü auf __'Benutzer'__.  

Klicken Sie auf der Benutzerseite auf die Schaltfläche __'Neuer Benutzer'__. 

![](images/shiva_onboard_003.png)

Geben Sie danach die E-Mail-Adresse des Benutzers an 

![](images/shiva_onboard_004.png)

Der Benutzer erhält dann eine Bestätigungsmail.  

![](images/shiva_onboard_001.png)

Nach der Bestätigung kann sich der Benutzer in die Konsole einloggen.

### Zuweisen von Berechtigungen zu einem Benutzer

Die Verwaltung der Benutzerrechte erfolgt über die Benutzerseite. 

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Daher muss der Administrator, der die Einladung ausgesprochen hat, die notwendigen Rechte für seine Aktivitäten zuweisen. Klicken Sie einfach auf das Benutzer-Menü __'Aktionen'__ und wählen die Option __'Bearbeiten'__.  

Das Menü zur Rechtevergabe wird dann angezeigt:

![](images/shiva_onboard_005.png)

Die Konfiguration der Berechtigungen muss für jeden [Tenant](#tenants) der [Organisation](#organisations) separat erfolgen.

Die Liste der Berechtigungen und deren Definition finden Sie [hier](#permissions).

### Neuanmeldung eines Benutzers

Wenn ein Benutzer provisioniert wurde, aber seine Anmeldung nicht innerhalb der Ablaufzeit der von der Konsole gesendeten E-Mail bestätigt hat, kann er seine Anmeldung nicht mehr bestätigen. Es ist dann möglich, ihm einen Link zu senden, damit er seine erste Anmeldung erneuern kann.

Die Neuanmeldung eines Benutzers erfolgt im __'Benutzer'__-Tab im Verwaltungsbereich unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie neu anmelden möchten, und klicken Sie dann auf die Aktions-Schaltfläche am Ende der Zeile und danach auf __'Neuanmeldung'__.

![](images/shiva_profil_012.png)

### Löschen eines Benutzers

Das Löschen eines Benutzers erfolgt im __'Benutzer'__-Tab im Verwaltungsbereich unten links auf dem Bildschirm.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie dann auf die Aktions-Schaltfläche am Ende der Zeile und danach auf __'Löschen'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Hinweis: Sie können sich selbst nicht löschen und Sie können keinen Benutzer mit der Rolle __'Eigentümer'__ löschen.

### Abmelden

Um sich abzumelden, gehen Sie auf Ihr __'Profil'__ oben rechts auf dem Bildschirm und dann auf __'Abmelden'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

### Ändern der Sprache eines Benutzers

Das Ändern der Sprache eines Benutzers erfolgt über sein __'Profil'__ oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration wird für jeden [Tenant](#tenants) separat vorgenommen.

### Abonnieren von thematischen Benachrichtigungen

Die Verwaltung der Abonnements ermöglicht es, E-Mails zu den aktivierten Themen zu erhalten, die automatisch bei Auftreten entsprechender Ereignisse gesendet werden.

Dies ist im Benutzerprofil im Tab "Meine Abonnements" zugänglich:

![](images/shiva_profil_007.png)

 Zum Beispiel werden im Falle eines Vorfalls spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und kontinuierlich erweitert werden, um den Bedürfnissen und Veränderungen in unserem operativen Umfeld gerecht zu werden.



## Berechtigungen

Die Shiva-Konsole ermöglicht eine fein abgestufte Verwaltung der Benutzerrechte einer Organisation, mit einer Trennung nach Tenant.
Zunächst ermöglicht das Hauptkonto des Auftraggebers die Erstkonfiguration der Konten und der zugehörigen Berechtigungen.
Danach erlaubt das Recht __'iam_write'__ einem Konto die Verwaltung der Berechtigungen anderer Benutzer.

### Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Die folgenden Berechtigungen sind für jeden [Benutzer](#utilisateurs) und für jeden [Tenant](#tenants#selection-dun-tenant) Ihrer Organisation konfigurierbar.

- Die Berechtigungen des Typs __'read'__ sind mit der Einsichtnahme ohne Konfigurationsmöglichkeit verbunden.
- Die Berechtigungen des Typs __'write'__ sind mit der Änderung von Konfigurationen verbunden.
- __Es handelt sich um Berechtigungen, nicht um Rollen.__ Daher ist es notwendig, die Berechtigungen READ und WRITE zu haben, um eine Konfiguration ändern zu können.

__VERSION : 20241007__

| Name der Berechtigung                         | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------|
| activity_read                                 | Einsicht in Logs und Aktivitäten                                                                                                |
| activity_write                                | Verwaltung von Logs und Aktivitäten                                                                                            |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Einsichtnahme                                                             |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Änderung                                                                  |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Einsichtnahme                                                               |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - Vmware-Angebot - Änderung                                                                    |
| bastion_read                                  | Einsicht in Bastion-Ressourcen                                                                                                  |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen,...)                                                                   |
| bastion_console_access                        | Zugangsberechtigung zur Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                              |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                 |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS-Angebot - Einsicht in erweiterte Daten der Xen Orchestra-Ressourcen |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS-Angebot - Verwaltung der Xen Orchestra-Ressourcen                                                                          |
| compute_iaas_opensource_read                  | OpenIaaS-Angebot - Einsicht in Ressourcen vom Typ Virtuelle Maschinen                                                           |
| compute_iaas_opensource_management            | OpenIaaS-Angebot - Verwaltung der Ressourcen vom Typ Virtuelle Maschinen                                                        |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                     |
| compute_iaas_vmware_console_access            | Vmware-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                   |
| compute_iaas_vmware_infrastructure_read       | Vmware-Angebot - Einsicht in erweiterte Daten der VMware-Ressourcen (Affinity/Anti-Affinity-Regeln, DRS-Konfiguration, etc.)    |
| compute_iaas_vmware_infrastructure_write      | Vmware-Angebot - Verwaltung der erweiterten VMware-Ressourcen                                                                   |
| compute_iaas_vmware_read                      | Vmware-Angebot - Einsicht in Ressourcen vom Typ Virtuelle Maschinen                                                             |
| compute_iaas_vmware_management                | Vmware-Angebot - Verwaltung der Ressourcen vom Typ Virtuelle Maschinen                                                          |
| compute_iaas_vmware_virtual_machine_power     | Vmware-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                       |
| console_public_access_read                    | Einsicht in erlaubte IPs für den Zugang zur Konsole                                                                             |
| console_public_access_write                   | Hinzufügen erlaubter IPs für den Zugang zur Konsole                                                                             |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                        |
| documentation_read                            | Einsicht in Confluence-Dokumentationsressourcen                                                                                 |

| housing_read                                  | Abfrage von Ressourcen des Typs Colocation                                                                                   |
| iam_offline_access                            | Erstellung und Löschung von Personal Access Tokens (PAT)                                                                     |
| iam_read                                      | Abfrage von Benutzerrechten                                                                                                  |
| iam_write                                     | Verwaltung von Benutzerrechten                                                                                               |
| intervention_read                             | Abfrage von geplanten Änderungen und Inbetriebnahmen auf der Plattform                                                       |
| inventory_read                                | Abfrage von Ressourcen des Typs Inventar                                                                                     |
| inventory_write                               | Verwaltung von Ressourcen des Typs Inventar                                                                                  |
| monitoring_read                               | Abfrage des Monitorings                                                                                                      |
| monitoring_write                              | Verwaltung des Monitorings                                                                                                   |
| metric_read                                   | Abfrage von Gesundheitsdaten auf virtuellen Maschinen und Hosts                                                              |
| network_read                                  | Abfrage von Netzwerkressourcen                                                                                               |
| network_write                                 | Verwaltung von Netzwerkressourcen                                                                                            |
| order_read                                    | Abfrage von Infrastrukturaufträgen                                                                                           |
| order_write                                   | Erstellung von Infrastrukturaufträgen                                                                                        |
| object-storage_iam_management                 | Ermöglicht das Verwalten von Speicherkonten auf dem S3-Produkt                                                               |
| object-storage_read                           | Ermöglicht das Anzeigen von Buckets und Bucket-Konfigurationen                                                               |
| object-storage_write                          | Ermöglicht das Bearbeiten von Buckets und Bucket-Konfigurationen                                                             |
| openshift_management                          | Ermöglicht die Verbindung zu Openshift-Plattformen (im Tenant-Bereich)                                                       |
| Owner                                         | Der Benutzer hat Administrationsrechte für einen Tenant                                                                     |
| support_management                            | Abfrage aller Support-Tickets des Tenants                                                                                    |
| support_read                                  | Abfrage der eigenen Support-Tickets des Tenants                                                                              |
| support_write                                 | Erstellung eines Support-Tickets im Tenant                                                                                   |
| tag_read                                      | Abfrage von Tags, außer RTMS-Tags                                                                                            |
| tag_write                                     | Verwaltung von Tags, außer RTMS-Tags                                                                                         |
| ticket_comment_read                           | Abfrage von Kommentaren                                                                                                      |
| ticket_comment_write                          | Verwaltung von Kommentaren                                                                                                   |
| ticket_read                                   | Abfrage von Tickets                                                                                                          |
| ticket_write                                  | Verwaltung von Tickets                                                                                                       |

**Hinweise** :

- *Es gibt keine Grenze für die Anzahl der Administratoren (Owner), die auf einem Tenant definiert werden können. Die Management-Benutzeroberfläche (UI) gibt jedoch eine Warnung aus, wenn mehr als drei Administratoren vorhanden sind, um die Anzahl der Administratoren aus Sicherheits- und Zugriffsverwaltungsgründen zu begrenzen.*
- *Beim Hinzufügen eines neuen Administrators (Owner) kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern. Diese Verarbeitungszeit ist normal und gewährleistet, dass die Zugriffsrechte korrekt auf alle zugehörigen Dienste und Ressourcen angewendet werden.*
- *Um einen Administrator (Owner) aus dem Tenant zu entfernen, muss der Benutzer eine Anfrage an den Support stellen. Dieses Verfahren stellt sicher, dass Änderungen an den Zugriffsrechten sicher und gemäß den besten Verwaltungspraktiken durchgeführt werden.*

### Veraltete Berechtigungen

Die folgenden Berechtigungen sind nicht mehr verfügbar :

| Name der Berechtigung                         | Datum      | Beschreibung der Berechtigung                                                                                              |
| --------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| backup_read  (**VERALTET**)                   | 07/10/2024 | Abfrage von Ressourcen des Typs Backup                                                                                     |
| backup_write (**VERALTET**)                   | 07/10/2024 | Verwaltung von Ressourcen des Typs Backup - Änderung                                                                       |
| compute_console_access (**VERALTET**)         | 07/10/2024 | Öffnen der Konsole einer virtuellen Maschine                                                                               |
| compute_infrastructure_read (**VERALTET**)    | 07/10/2024 | Abfrage von erweiterten Daten der VMware-Ressourcen (Affinitäts-/Anti-Affinitäts-Regeln, DRS-Konfiguration, etc.)         |
| compute_infrastructure_write (**VERALTET**)   | 07/10/2024 | Erweiterte Verwaltung der VMware-Ressourcen                                                                                |
| compute_read (**VERALTET**)                   | 07/10/2024 | Abfrage von Ressourcen des Typs Virtuelle Maschinen                                                                        |
| compute_management (**VERALTET**)             | 07/10/2024 | Verwaltung von Ressourcen des Typs Virtuelle Maschinen                                                                     |
| compute_virtual_machine_power (**VERALTET**)  | 07/10/2024 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                   |
| iam_manage_permissions (**VERALTET**)         | 07/10/2024 | Verwaltung neuer Berechtigungen für sich selbst                                                                            |


## Organisationen

Die Organisation ist mit Ihrem __Auftragskonto__ und dem __zugehörigen Cloud Temple Vertrag__ verbunden. Sie repräsentiert Ihre Einheit (Firma, Abteilung, Team ...), die die vertragliche Beziehung zwischen Cloud Temple und Ihnen darstellt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen: 

- Sie repräsentiert __die vertragliche Einheit__ für die Nachverfolgung und Abrechnung,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: die Authentifizierung kann lokal auf der Shiva-Konsole oder remote über einen Identitätsföderationsdienst erfolgen,
- Sie umfasst alle __Benutzerkonten__,
- Sie __vereint die Tenants__ (Produktion, Vorproduktion, Entwicklung, Anwendung 1, Anwendung 2, ...), die Sie für die Anforderungen Ihrer Cloud-Architektur definieren.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden in Ihrer Organisation definierten Tenant konfigurierbar. Ein Konto kann beispielsweise berechtigt sein, Ressourcen in einem Tenant zu bestellen, jedoch nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene __die Konfiguration des Authentifizierungsmechanismus__. Sie können
das lokale Authentifizierungsverzeichnis der Shiva-Konsole verwenden oder Ihre Organisation an eines Ihrer externen Authentifizierungsverzeichnisse anbinden.

Die folgenden externen Verzeichnisse werden unterstützt:

- Verzeichnisse, die __OpenID Connect__ kompatibel sind
- Verzeichnisse, die __SAML__ kompatibel sind
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

Der Tenant ist eine __Gruppierung von Ressourcen innerhalb einer Organisation__. Eine [Organisation](#organisationen) hat mindestens einen Tenant (den __Standard-Tenant__, der umbenannt werden kann). In der Regel werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Zum Beispiel :

- Ein Tenant __Produktion__
- Ein Tenant __Vorproduktion__
- Ein Tenant __Test__
- Ein Tenant __Qualifikation__

Aber es ist auch möglich, die Dinge mit einer __anwendungsbezogenen Sicht__ oder nach __Kritikalität__ zu organisieren: 

- Ein Tenant __Anwendung 1__ oder __Kritikalität 1__
- Ein Tenant __Anwendung 2__ oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen sind einem bestimmten Tenant zugewiesen und werden nicht mit anderen Tenants geteilt. Beispielsweise steht ein Cluster aus Hypervisoren und die zugehörigen L2-Netzwerke nur in 1 Tenant zur Verfügung.
Bezüglich der Netzwerke ist es möglich, __'cross tenant'__ Netzwerke anzufordern, um die Netzwerk-Kontinuität zwischen den Tenants zu gewährleisten.

Die Benutzerberechtigungen sind für jeden Tenant separat zu definieren. Jede Organisation muss daher sorgfältig über die gewünschten Tenants nachdenken. Dieser Punkt wird in der Regel im Initialisierungs-Workshop bei der Erstellung der Organisation besprochen.

Es ist möglich, die Architektur durch Hinzufügen oder Entfernen von Tenants weiterzuentwickeln.

Ein Tenant darf nicht leer sein. Er muss unbedingt mit einem Minimum an Ressourcen initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Rechencluster,
- Ein Speicherplatz,
- Ein Netzwerk-VLAN.


| Bestellreferenz                                             | Einheit  | SKU                     |  
|-------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants             | 1 Tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone  | 1 Tenant | csp:(region):iaas:az:v1 |


### Zugriffserlaubnis zu einem Tenant: Erlaubte IPs

Der Zugriff auf die Cloud-Management-Konsole ist strikt auf zuvor autorisierte IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Qualifikation. Diese Einschränkung gewährleistet ein erhöhtes Maß an Sicherheit, indem der Zugang nur Benutzern von festgelegten IP-Bereichen erlaubt wird, wodurch die Risiken unbefugter Zugriffe minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards geschützt wird.

Hinweis: *Die Entfernung einer autorisierten IP erfolgt durch eine Support-Anfrage in der Cloud Temple Konsole.*

### Ressourcenverbrauch innerhalb eines Tenants

Es ist möglich, die verbrauchten Cloud-Ressourcen innerhalb eines Tenants anzuzeigen und somit eine detaillierte Übersicht über die Nutzung der verschiedenen bereitgestellten Dienste zu erhalten. Diese Funktionalität ermöglicht es den Benutzern, den Ressourcenverbrauch in Echtzeit zu verfolgen, die am meisten beanspruchten Dienste zu identifizieren und ihre Nutzung entsprechend den Anforderungen zu optimieren.

Im Konsolenmenü klicken Sie auf "Verbrauchsbericht" und wählen den gewünschten Zeitraum aus. Sie können dann den Ressourcenverbrauch der Cloud im definierten Zeitraum im Detail anzeigen lassen, was Ihnen ermöglicht, die Nutzung der Dienste zu analysieren und Ihr Management entsprechend zu optimieren:

![](images/shiva_tenant_ressources_01.png)