---
title: Konzepte
---


## Benutzer

Die Zugänge zur Shiva-Konsole werden vom Hauptkonto des Auftraggebers auf Einladung erstellt (egal welches Authentifizierungs-Repository).
Die Anmeldeinformationen sind global für Ihre [Organisation](#organisations).

*__Hinweis:__ [Die Identitätsföderation wird auf Organisationsebene verwaltet](#organisations#mecanismes-dauthentification)*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladung. Um einen Benutzer in eine [Organisation](#organisations) einzuladen, gehen Sie im linken Menü Ihrer Bildschirmansicht auf den grünen Balken zu __'Administration'__ und dann zum Untermenü __'Benutzer'__.  

Klicken Sie auf der Benutzerseite auf die Schaltfläche __'Neuer Benutzer'__.

![](images/shiva_onboard_003.png)

Geben Sie anschließend die E-Mail-Adresse des Benutzers an.

![](images/shiva_onboard_004.png)

Der Benutzer erhält dann eine Verifizierungsmail.

![](images/shiva_onboard_001.png)

Nach Abschluss der Verifizierung kann sich der Benutzer in die Konsole einloggen.

### Zuweisung von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt von der Benutzerseite aus.

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Daher muss der Administrator, der die Einladung vorgenommen hat, dem Benutzer die für seine Tätigkeit erforderlichen Rechte zuweisen. Klicken Sie einfach auf das __'Aktionen'__-Menü des Benutzers und wählen Sie die Option __'Bearbeiten'__.  

Das Menü zur Rechteaktivierung erscheint dann:

![](images/shiva_onboard_005.png)

Die Konfiguration der Berechtigungen ist für jeden [Mandanten](#tenants) der [Organisation](#organisations) vorzunehmen.

Die Liste der Berechtigungen und deren Definition ist [hier](#permissions) verfügbar.

### Ändern der Sprache eines Benutzers

Die Änderung der Sprache eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden [Mandanten](#tenants).

### Abonnement zu thematischen Benachrichtigungen

Mit Hilfe der Abonnementverwaltung können E-Mails zu den aktivierten Themen automatisch gesendet werden, wenn entsprechende Ereignisse eintreten.

Sie ist im Benutzerprofil im Tab "Meine Abonnements" zugänglich:

![](images/shiva_profil_007.png)

 Beispielsweise werden bei einem Vorfall spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und erweitern, um sich an die Bedürfnisse und Veränderungen in unserer Betriebsumgebung anzupassen.



## Berechtigungen

Die Shiva-Konsole ermöglicht eine feine Verwaltung der Rechte der Benutzer einer Organisation mit einer Segmentierung nach Mandanten.
Initial ermöglicht das Hauptkonto des Auftraggebers die anfängliche Konfiguration der Konten und der zugehörigen Berechtigungen.
Anschließend ermöglicht das Recht __'iam_write'__ einem Konto, die Berechtigungen der anderen Benutzer zu verwalten.

### Verfügbare Berechtigungen für die Benutzer Ihrer Organisation

Die folgenden Berechtigungen sind für jeden [Benutzer](#utilisateurs) und für jeden [Mandanten](#tenants#selection-dun-tenant) Ihrer Organisation konfigurierbar.

- Berechtigungen des Typs __'read'__ sind mit der Ansicht ohne Konfigurationsmöglichkeit verbunden
- Berechtigungen des Typs __'write'__ sind mit der Änderung von Konfigurationen verbunden
- __Es handelt sich um Berechtigungen, keine Rollen.__ Daher ist es notwendig, die Berechtigung READ und WRITE zu haben, um eine Konfiguration zu ändern.

__VERSION : 20241007__

| Name der Berechtigung                         | Beschreibung der Berechtigung                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Ansicht von Protokollen und Aktivitäten                                                                                         |
| activity_write                                | Verwaltung von Protokollen und Aktivitäten                                                                                      |
| backup_iaas_opensource_read                   | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Ansicht                                                                   |
| backup_iaas_opensource_write                  | Verwaltung von Backup-Ressourcen - OpenIaaS-Angebot - Änderung                                                                |
| backup_iaas_spp_read                          | Verwaltung von Backup-Ressourcen - VMware-Angebot - Ansicht                                                                     |
| backup_iaas_spp_write                         | Verwaltung von Backup-Ressourcen - VMware-Angebot - Änderung                                                                   |
| bastion_read                                  | Ansicht von Bastion-Ressourcen                                                                                                 |
| bastion_write                                 | Verwaltung von Bastion-Ressourcen (Appliances, Sitzungen,...)                                                                  |
| bastion_console_access                        | Zugang zur Konsole (ssh/rdp) einer durch eine Bastion-Appliance geschützten Ressource                                          |
| compute_iaas_opensource_console_access        | OpenIaaS-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS-Angebot - Ansicht erweiterter Daten von Xen Orchestra Ressourcen                                                      |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS-Angebot - Erweiterte Verwaltung von Xen Orchestra Ressourcen                                                 |
| compute_iaas_opensource_read                  | OpenIaaS-Angebot - Ansicht der Ressourcen vom Typ Virtuelle Maschinen                                                           |
| compute_iaas_opensource_management            | OpenIaaS-Angebot - Verwaltung der Ressourcen vom Typ Virtuelle Maschinen                                                      |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                    |
| compute_iaas_vmware_console_access            | VMware-Angebot - Öffnen der Konsole einer virtuellen Maschine                                                                  |
| compute_iaas_vmware_infrastructure_read       | VMware-Angebot - Ansicht erweiterter Daten von VMware-Ressourcen (Affinity-/Anti-Affinity-Regeln, drs-Konfigurationen, etc)    |
| compute_iaas_vmware_infrastructure_write      | VMware-Angebot - Verwaltung erweiterter VMware-Ressourcen                                                                      |
| compute_iaas_vmware_read                      | VMware-Angebot - Ansicht der Ressourcen vom Typ Virtuelle Maschinen                                                            |
| compute_iaas_vmware_management                | VMware-Angebot - Verwaltung der Ressourcen vom Typ Virtuelle Maschinen                                                         |
| compute_iaas_vmware_virtual_machine_power     | VMware-Angebot - Verwaltung der Stromversorgung einer virtuellen Maschine                                                      |
| console_public_access_read                    | Ansicht der IPs, die Zugang zur Konsole haben                                                                                  |
| console_public_access_write                   | Hinzufügen von IPs, die Zugang zur Konsole haben                                                                               |
| compute_virtual_machine_power                 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                                       |
| documentation_read                            | Ansicht der Confluence-Dokumentationsressourcen                                                                                |
| housing_read                                  | Ansicht der Ressourcen vom Typ Colocation                                                                                      |
| iam_offline_access                            | Erstellung und Löschung von Personal Access Tokens (PAT)                                                                       |
| iam_read                                      | Ansicht der Benutzerrechte                                                                                                     |
| iam_write                                     | Verwaltung der Benutzerrechte                                                                                                  |
| intervention_read                             | Ansicht von Änderungen und geplanten Produktivsetzungen auf der Plattform                                                      |
| inventory_read                                | Ansicht der Ressourcen vom Typ Inventar                                                                                       |
| inventory_write                               | Verwaltung der Ressourcen vom Typ Inventar                                                                                   |
| monitoring_read                               | Ansicht des Monitorings                                                                                                       |

| monitoring_write                              | Verwaltung der Überwachung                                                                                           |
| metric_read                                   | Abrufen von Gesundheitsdaten über virtuelle Maschinen und Hosts                                                     |
| network_read                                  | Abrufen von Netzwerkressourcen                                                                                      |
| network_write                                 | Verwaltung der Netzwerkressourcen                                                                                   |
| order_read                                    | Abrufen von Infrastrukturbestellungen                                                                               |
| order_write                                   | Erstellung von Infrastrukturbestellungen                                                                            |
| object-storage_iam_management                 | Verwaltung von Speicherkonten auf dem Produkt S3                                                                    |
| object-storage_read                           | Ansicht von Buckets und Bucket-Konfigurationen                                                                      |
| object-storage_write                          | Bearbeitung von Buckets und Bucket-Konfigurationen                                                                  |
| openshift_management                          | Zugang zu Openshift-Plattformen (auf Tenant-Ebene beschränkt)                                                       |
| Owner                                         | Der Benutzer hat Administratorrechte für einen Tenant                                                              |
| support_management                            | Durchsicht sämtlicher Support-Tickets eines Tenants                                                                  |
| support_read                                  | Durchsicht der eigenen Support-Tickets eines Tenants                                                                |
| support_write                                 | Erstellung eines Support-Tickets für den Tenant                                                                     |
| tag_read                                      | Ansicht von Tags, außer RTMS-Tags                                                                                   |
| tag_write                                     | Verwaltung von Tags, außer RTMS-Tags                                                                                |
| ticket_comment_read                           | Ansicht von Kommentaren                                                                                            |
| ticket_comment_write                          | Verwaltung von Kommentaren                                                                                          |
| ticket_read                                   | Ansicht von Tickets                                                                                                 |
| ticket_write                                  | Verwaltung von Tickets                                                                                              |

**Hinweise** :

- *Es gibt keine Begrenzung hinsichtlich der Anzahl von Eigentümern (Owners), die auf einem Tenant definiert werden können. Allerdings gibt die Verwaltungsoberfläche eine Warnung aus, wenn mehr als 3 Eigentümer vorhanden sind, um aus Sicherheits- und Zugangsverwaltungsgründen die Anzahl der Eigentümer zu begrenzen.*
- *Beim Hinzufügen eines neuen Eigentümers (Owner) kann es bis zu 60 Minuten dauern, bis dessen Berechtigungen aktualisiert sind. Diese Verbreitungszeit ist normal und stellt sicher, dass die Zugangsrechte korrekt auf alle zugehörigen Dienste und Ressourcen angewendet werden.*
- *Um einen Eigentümer (Owner) von einem Tenant zu entfernen, muss der Benutzer eine Anfrage an den Support stellen. Dieses Verfahren stellt sicher, dass Änderungen der Zugangsrechte sicher und gemäß den Best Practices für die Zugangsverwaltung durchgeführt werden.*

### Veraltete Berechtigungen

Die folgenden Berechtigungen sind nicht mehr verfügbar:

| Name der Berechtigung                         | Datum      | Beschreibung der Berechtigung                                                                                      |
| --------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| backup_read  (**DEPRECATED**)                 | 07/10/2024 | Abrufen von Backup-Ressourcen                                                                                      |
| backup_write (**DEPRECATED**)                 | 07/10/2024 | Verwaltung von Backup-Ressourcen - Änderungen                                                                      |
| compute_console_access (**DEPRECATED**)       | 07/10/2024 | Öffnen der Konsole einer virtuellen Maschine                                                                       |
| compute_infrastructure_read (**DEPRECATED**)  | 07/10/2024 | Abrufen von erweiterten Daten der VMware-Ressourcen (Affinitäts-/Anti-Affinitätsregeln, DRS-Konfiguration usw.)     |
| compute_infrastructure_write (**DEPRECATED**) | 07/10/2024 | Erweiterte Verwaltung der VMware-Ressourcen                                                                        |
| compute_read (**DEPRECATED**)                 | 07/10/2024 | Abrufen von Ressourcen des Typs Virtuelle Maschinen                                                                |
| compute_management (**DEPRECATED**)           | 07/10/2024 | Verwaltung von Ressourcen des Typs Virtuelle Maschinen                                                             |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Verwaltung der Stromversorgung einer virtuellen Maschine                                                           |
| iam_manage_permissions (**DEPRECATED**)       | 07/10/2024 | Verwaltung neuer Berechtigungen für sich selbst                                                                    |


## Organisationen

Die Organisation ist mit Ihrem __Sponsor-Konto__ und dem __dazugehörigen Cloud Temple-Vertrag__ verbunden. Sie stellt Ihre Entität (Unternehmen, Abteilung, Team, ...) dar, die die vertragliche Verbindung zwischen Cloud Temple und Ihnen trägt.

### Prinzip einer Organisation

Die Organisation hat vier Hauptrollen:

- Sie repräsentiert die __vertragliche Entität__ für die Aspekte der Überwachung und Abrechnung,
- Sie definiert __die globale Konfiguration des Authentifizierungsmechanismus__: Die Authentifizierung kann lokal auf der Shiva-Konsole oder remote über einen Identitätsföderierungsdienst erfolgen,
- Sie trägt alle __Benutzerkonten__,
- Sie __vereinigt die Tenants__ (Produktion, Vorproduktion, Entwicklung, Anwendung 1, Anwendung 2, ...), die Sie für Ihre Cloud-Architektur benötigen.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind für jeden definierten Tenant innerhalb Ihrer Organisation konfigurierbar. Zum Beispiel kann ein Konto berechtigt sein, Ressourcen in einem Tenant zu bestellen, aber nicht in einem anderen.

### Authentifizierungsmechanismen

Die Shiva-Konsole ermöglicht auf Organisationsebene die __Konfiguration des Authentifizierungsmechanismus__. Sie können 
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

Der Tenant ist eine __Zusammenfassung von Ressourcen innerhalb einer Organisation__. Eine [Organisation](#organisationen) hat mindestens einen Tenant (den sogenannten __Standard-Tenant__, der umbenannt werden kann). In der Regel werden mehrere Tenants verwendet, um Verantwortlichkeiten oder technische Bereiche zu segmentieren.

Zum Beispiel:

- Ein Tenant __Produktion__
- Ein Tenant __Vorproduktion__
- Ein Tenant __Abnahme__
- Ein Tenant __Qualifikation__

Es ist aber auch möglich, die Dinge mit einer __anwendungsorientierten Sicht__ oder nach __Kritikalität__ zu organisieren:

- Ein Tenant __Anwendung 1__ oder __Kritikalität 1__
- Ein Tenant __Anwendung 2__ oder __Kritikalität 2__
- ...

Die bestellten technischen Ressourcen werden einem bestimmten Tenant zugewiesen und nicht mit anderen Tenants geteilt. Beispielsweise steht ein Hypervisor-Cluster und die dazugehörigen L2-Netzwerke nur in einem Tenant zur Verfügung.
In Bezug auf die Netzwerke ist es möglich, __'cross-tenant'-Netzwerke__ anzufordern, um die Netzwerkverbindung zwischen den Tenants sicherzustellen.

Die Berechtigungen der Benutzer sind für jeden Tenant separat zu definieren. Jede Organisation muss daher gut über die gewünschten Tenants nachdenken. Dieser Punkt wird in der Regel im initialen Workshop bei der Erstellung der Organisation angesprochen.

Es ist möglich, die Architektur zu erweitern, indem Tenants hinzugefügt oder entfernt werden.

Ein Tenant kann nicht leer sein. Er muss mindestens mit einer Ressource initialisiert werden:

- Eine Verfügbarkeitszone (AZ, also ein physisches Rechenzentrum),
- Ein Rechen-Cluster,
- Ein Speicherbereich,
- Ein Netzwerk-VLAN.


| Bestellreferenz                                          | Einheit  | SKU                     |  
|----------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Aktivierung eines Tenants             | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone  | 1 tenant | csp:(region):iaas:az:v1 |


### Zugangserlaubnis zu einem Tenant: Zugriff über zugelassene IPs

Der Zugang zur Cloud-Verwaltungskonsole ist strikt auf zuvor zugelassene IP-Adressen beschränkt, gemäß den Anforderungen der SecNumCloud-Zertifizierung. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem sie den Zugang nur für Benutzer von bestimmten IP-Bereichen erlaubt, wodurch das Risiko unbefugter Zugriffe minimiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards geschützt wird.

Hinweis: *Das Entfernen einer zugelassenen IP erfolgt über eine Support-Anfrage in der Cloud Temple-Konsole.*

### Ressourcenverbrauch innerhalb eines Tenants

Es ist möglich, die im Rahmen eines Tenants verbrauchten Cloud-Ressourcen einzusehen, was eine detaillierte Ansicht der Nutzung der verschiedenen bereitgestellten Dienste bietet. Diese Funktion ermöglicht es den Nutzern, den Ressourcenverbrauch in Echtzeit zu verfolgen, die am stärksten genutzten Dienste zu identifizieren und die Nutzung entsprechend den Anforderungen zu optimieren.

Im Konsolenmenü klicken Sie auf "Verbrauchsbericht" und wählen den gewünschten Zeitraum aus. So können Sie den Ressourcenverbrauch der Cloud im definierten Zeitraum im Detail anzeigen, was Ihnen eine Analyse der Dienstnutzung sowie eine Optimierung Ihrer Verwaltung ermöglicht:

![](images/shiva_tenant_ressources_01.png)