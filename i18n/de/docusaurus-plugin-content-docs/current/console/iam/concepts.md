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

## Benutzernamen

Die Zugriffsberechtigungen auf die Shiva-Konsole werden vom Hauptauftragnehmer des Auftrags über eine Einladung (unabhängig vom Authentifizierungssystem) erstellt. Die Identifikationsinformationen sind für Ihre [Organisation](#organisation) gültig.

*__Hinweis:__ Die Verwaltung der Identitätsfusion erfolgt auf Organisationslevel (#Authentifizierungsmechanismen)*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladen. Um einen Benutzer in einer [Organisation](#organisation) einzuladen, gehen Sie im linken Bandeau oben auf der Startseite zur Unterseite __'Administration'__ und dann zum Untermenü __'Benutzer'__.

Klicken Sie auf den Button __'Neuer Benutzer'__ aus der Seite der Benutzer.

<img src={shivaOnboard_003} />

Geben Sie anschließend die E-Mail-Adresse des Benutzers ein:

<img src={shivaOnboard_004} />

Der Benutzer erhält dann eine Bestätigungs-E-Mail.

<img src={shivaOnboard_001} />

Nach Abschluss der Verifizierung kann der Benutzer sich an die Console anmelden.


### Explication:

Le texte a été traduit du français au détecté en allemand, respectant les règles spécifiées :

1. Structure et formatage Markdown ont été préservés (en-têtes #, listes, blocs de code).
2. Les éléments HTML ou Markdown structurels n'ont pas été modifiés.
3. Bien que le contenu des tableaux ait été traduit, les en-têtes de tableau ont été conservés dans la langue d'origine (française).
4. Les blocs de code Python et autres structures codiques n'ont pas été modifiés ; noms de variables, syntaxe, etc., restent inchangés.
5. Les éléments HTML bruts, les crochets [], parenthèses ou URLs ont été laissés intacts.
6. Le contenu textuel a été traduit du français vers le détecté en allemand tout en préservant l'intégrité structurelle et le formatage Markdown originale.

### Zugrichtung von Benutzerrechten

Die Verwaltung der Benutzerrechte erfolgt über die Seite des Benutzers.

<img src={shivaOnboard_003} />

Standardmäßig hat ein Benutzer keine Rechte. Es ist daher notwendig, dass der Administrator, der ihn eingeladen hat, ihm die erforderlichen Rechte für seine Tätigkeit zuweisen. Dies geschieht, indem man auf das Menü __'Aktionen__ des Benutzers klickt und die Option __'Anpassen__ auswählt__.

Das Menü zur Aktivierung der Rechte erscheint dann:

<img src={shivaOnboard_005} />

Die Konfiguration der Berechtigungen muss für jeden [Tenant] innerhalb des [Organisation] vorgenommen werden.

Die Liste der Berechtigungen und ihre Definition ist hier zugänglich [diesen Link](#permissions).

### User Re-registration

When a user has been provisioned but fails to confirm their registration within the expiration period of the email sent by the Console, they are no longer able to finalize their registration. In such cases, it's possible to resend them a renewal link for their initial registration.

To initiate a user re-registration, navigate to the 'User' tab in the Administration panel, located at the bottom left of the screen.

Select the user account you wish to re-register, then click on the action button at the end of the line followed by 'Re-registration'.

**Warning**: Ensure that you are indeed initiating this registration request for your own account. Please report any unauthorized requests via support ticket.

<img src={shivaProfil_012} />

### Profil aktualisieren

Diese Funktion ist nur für lokale Konten (nicht mit SSO) verfügbar.

Wählen Sie in Ihrem __'Profil'__ oben rechts auf der Seite und wählen Sie dann __'Benutzerparameter'__ aus. Wählen Sie die Aktion __'Ihr Profil aktualisieren'__.

Gehen Sie dann in Ihre E-Mail-Adresse und klicken Sie auf den vom Console generierten Link. Folgen Sie einfach den Anweisungen, um Ihr Profil zu aktualisieren.

**Hinweis**: Stellen Sie sicher, dass Sie die Anfrage zur Aktualisierung Ihres Profils tatsächlich gesendet haben. Bitte melden Sie alle unbekannten Anfragen über ein Support-Ticket an.

<img src={shivaProfil_014} />

### Passwort-Neustart

Diese Funktion ist nur für lokale Konten (nicht SSO) verfügbar.

Wählen Sie in Ihrem __Profil__ oben rechts auf der Bildschirmseite und dann __Einstellungen des Benutzers__ aus, und wählen Sie die Aktion __Passwort neu generieren__.

Gehen Sie dann in Ihre E-Mail und klicken Sie auf den von der Console erzeugten Link. Folgen Sie einfach den Anweisungen zum Ändern Ihres Passworts.

__Warnung__: Stellen Sie sicher, dass Sie die Anfrage zur Neugenerierung Ihres Passworts tatsächlich gestartet haben. Bitte melden Sie alle unerwarteten Anfragen zur Passwort-Neugenerierung über ein Support-Ticket.

<img src={shivaProfil_015} />

### Wiederholung des Zweifaktor-Authentifizierungsverfahrens

Diese Aktion ist nur für ein lokales Konto (kein SSO) verfügbar.

Wählen Sie in Ihrem __Profil__ oben rechts auf dem Bildschirm, dann __Einstellungen des Benutzers__ und wählen Sie die Aktion __Zweifaktor-Authentifizierung neu anlegen__.

Gehen Sie dann in Ihre E-Mail und klicken Sie auf den von der Console generierten Link. Folgen Sie einfach den Anweisungen, um Ihr Zweifaktor-Authentifizierungsverfahren zu aktualisieren.

__Warnung__: Stellen Sie sicher, dass Sie die Aufforderung zur Wiederherstellung Ihres Zweifaktor-Authentifizierungsverfahren tatsächlich gesendet haben. Bitte melden Sie alle unbekannten Anfragen zur Wiederherstellung Ihrer Zwei-Faktor-Authentifizierung über ein Support-Ticket.

<img src={shivaProfil_016} />

### Benutzerlöschung

Die Löschung eines Benutzers erfolgt im Bereich __'Benutzer'__ des Admin-Bereichs, links unterhalb des Bildschirms.

Wählen Sie den Benutzer aus, den Sie löschen möchten, und klicken Sie auf die Aktionsoption am Ende der Zeile, dann __'Löschen'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Hinweis: Selbst das Löschen des eigenen Kontos sowie das Löschen eines Benutzers mit dem Status __'Eigentümer'__ sind nicht möglich.

### Ausloggen

Die Abmeldung eines Benutzers erfolgt im Profil des Benutzers, das sich oben rechts befindet, und wählt dann "Abmelzen".

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Eine automatische Abmeldung tritt auf, wenn der Session-Token (JWT Token) abläuft.

### Änderung des Benutzerschlusssprachen

Die Spracheänderung eines Benutzers muss im __'Profil'__ des Benutzers vorgenommen werden, welches sich am rechten oberen Rand des Bildschirms befindet und unter __'Benutzerparameter'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden Tenant ([Tenant](#tenant).)

### Abonnement an die Themen-Updates

Die Verwaltung der Abonnements ermöglicht es Ihnen, E-Mails zu erhalten, die sich auf aktivierte Themen beziehen und automatisch gesendet werden, wenn ein entsprechender Ereignis eintritt.

Sie ist in Ihrem Benutzerprofil unter dem Tab "Meine Abonnements" zugänglich:

<img src={shivaProfil_007} />

Zum Beispiel würden bei einem Vorfall spezifische E-Mail-Benachrichtigungen für diese Thema generiert werden.

Die Liste der verfügbaren Themen kann sich ständig weiterentwickeln und verbessern, um den Bedürfnissen und Veränderungen in unserem Betriebsbetrieb gerecht zu werden.

## Zugriffskontrollen

Die Shiva-Konsole bietet eine präzise Steuerung der Benutzerrechte innerhalb einer Organisation, unterteilt nach Tenant.
Anfänglich ist es der Hauptkonto des Auftraggebers, das die Konfiguration initialisierter Benutzer und damit verbundene Rechte ermöglicht.
Nachfolgend ermöglicht das Recht `__'iam_write'__` einem Konto die Verwaltung der Rechte anderer Benutzer.

### Berechtigungen für Benutzer in Ihrer Organisation

Bei der Erstellung eines Benutzers wird kein Standard-Recht automatisch zugewiesen. Jedes Recht wird einzeln zuweisen und funktioniert unabhängig voneinander, ohne Überlappungen mit anderen Rechten. Sie wirken zusammen, was bedeutet, dass ein Benutzer für eine spezifische Aktion alle erforderlichen Rechte besitzen muss.

Die nachfolgenden Rechte können für jeden Benutzer und jedes Tenant in Ihrer Organisation konfiguriert werden:

- **Rechtstyp "lesen"**: Ermöglicht das Lesen von Ressourcen, ohne die Möglichkeit der Modifikation.
- **Rechtstyp "schreiben"**: Erlaubt die Modifikation von Konfigurationen.
- **Rechtstyp "Management"**: Gibt Zugriff auf fortgeschrittene Ressourcenverwaltung.
- **Rechtstyp "ConsoleAccess"**: Ermöglicht den Zugang zu Ressourcen über PMAD-Verbindungen.
- **Rechtstyp "VirtualMachinePower"**: Gibt Zugriff auf die Stromsteuerung virtueller Maschinen.

**Wichtig: Diese sind Rechte, nicht Rollen.** Um eine Konfiguration zu ändern, benötigen Sie zunächst das Lesen-Recht (READ) und das Schreiben-Recht (WRITE).

Letzte Aktualisierung: 16.07.2025

| Name des Rechts                          | Beschreibung des Rechts                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                             | Lesen von Log- und Aktivitätsnachweisen                                                                                    |
| activity_write                            | Verwaltung von Log- und Aktivitätsnachweisen                                                                                         |
| backup_iaas_opensource_read              | Verwaltung von Backup-Ressourcen - Offene IaaS-Angebot - Lesen                                                          |
| backup_iaas_opensource_write             | Verwaltung von Backup-Ressourcen - Offene IaaS-Angebot - Ändern                                                          |
| backup_iaas_spp_read                     | Verwaltung von Backup-Ressourcen - VMware-Angebot - Lesen                                                            |
| backup_iaas_spp_write                    | Verwaltung von Backup-Ressourcen - VMware-Angebot - Ändern                                                            |
| bastion_read                             | Lesen von Bastion-Ressourcen                                                                                                |
| bastion_write                            | Verwaltung von Ressourcen (Appliances, Sitzungen usw.) des Bastion-Typs                                                             |
| bastion_console_access                   | Autorisierung zum Zugriff auf die Console (SSH/RDP) von Schutzressourcen durch eine Bastion-Applikation                     |
| compute_iaas_opensource_console_access   | Offene IaaS - Öffnen der Console einer virtuellen Maschine                                                                  |
| compute_iaas_opensource_infrastructure_read | Offene IaaS - Lesen fortgeschrittener Daten von Xen Orchestrator |
| compute_iaas_opensource_infrastructure_write | Offene IaaS - Fortgeschrittene Verwaltung von Ressourcen von Xen Orchestrator                                                                          |
| compute_iaas_opensource_read             | Offene IaaS - Lesen von virtuellen Maschinen-Ressourcen                                                                 |
| compute_iaas_opensource_management       | Offene IaaS - Verwaltung von virtuellen Maschinen-Ressourcen                                                                 |
| compute_iaas_opensource_virtual_machine_power | Offene IaaS - Steuerung der Stromversorgung virtueller Maschinen                                                              |
| compute_iaas_opensource_replication_recover | Offene IaaS - Verwaltung der Replikation                                                                                     |
| compute_iaas_vmware_console_access        | VMware - Öffnen der Console einer virtuellen Maschine                                                                  |
| compute_iaas_vmware_infrastructure_read   | VMware - Lesen fortgeschrittener Daten von VMware (Affinität-Regeln, DRS-Konfiguration usw.)                          |
| compute_iaas_vmware_infrastructure_write  | VMware - Fortgeschrittene Verwaltung von Ressourcen von VMware                                                                 |
| compute_iaas_vmware_read                  | VMware - Lesen von virtuellen Maschinen-Ressourcen                                                                   |
| compute_iaas_vmware_management            | VMware - Verwaltung von virtuellen Maschinen-Ressourcen (ermöglicht das Verschlüsseln einer virtuellen Maschine)                      |
| compute_iaas_vmware_virtual_machine_power | VMware - Steuerung der Stromversorgung virtueller Maschinen                                                               |
| baremetal_management                     | Bare Metal - Verwaltung von Ressourcen von Bare Metal                                                                   |
| baremetal_read                             | Bare Metal - Lesen von Ressourcen von Bare Metal                                                                   |
| baremetal_console_access                 | Öffnen der Console einer physischen Maschine durch eine Bastion-Applikation (Bare Metal)                                 |
| console_public_access_read               | Lesen von IPs, die auf die Console zugreifen dürfen                                                                  |
| console_public_access_write              | Hinzufügen von IPs, die auf die Console zugreifen dürfen                                                                 |
| documentation_read                       | Lesen von Dokumentationsressourcen (Confluence)                                                                   |
| housing_read                             | Lesen von Ressourcen des Colocation-Typs                                                                                 |
| iam_offline_access                        | Erstellung und Löschen von persönlichen Zugriffstokens (PAT)                                                              |
| iam_read                                 | Lesen der Benutzerrechte                                                                                                     |
| iam_write                                | Verwaltung der Benutzerrechte                                                                                                  |
| intervention_read                         | Lesen von Änderungen und geplanten Produktionsumständen auf der Plattform                                                  |
| inventory_read                            | Lesen von Ressourcen des Inventars                                                                                             |
| inventory_write                           | Verwaltung von Ressourcen des Inventars                                                                                      |
| monitoring_read                          | Lesen des Monitorings                                                                                                        |
| monitoring_write                         | Verwaltung des Monitorings                                                                                                 |
| metric_read                              | Lesen von Gesundheitsdaten virtueller Maschinen und Hosts                                                                  |
| network_read                             | Lesen von Ressourcen des Netzwerks                                                                                            |
| network_write                            | Verwaltung von Ressourcen des Netzwerks                                                                                     |
| order_read                               | Lesen von Infrastruktur-Commanded                                                                                           |
| order_write                              | Erstellung einer Infrastruktur-Commando                                                                                      |
| object-storage_iam_management            | Gibt Zugriff auf die Konten des Speichersystems S3 (Produkt)                                                              |
| object-storage_read                      | Gibt Zugriff auf Buckets und deren Konfiguration von Buckets                                                                   |
| object-storage_write                     | Ermöglicht das Bearbeiten von Buckets und deren Konfiguration von Buckets                                                  |
| openshift_management                     | Gibt Zugriff auf Plattformen OpenShift (skaliert auf Tenant)                                                              |
| support_management                       | Lesen aller Support-Tickets des Tenants                                                                                      |
| support_read                             | Lesen der eigenen Support-Tickets des Tenants                                                                                 |
| support_write                            | Erstellung eines Support-Tickets auf dem Tenant                                                                               |
| tag_read                                 | Lesen von Tags, außer den RTMS-Tags                                                                                       |
| tag_write                                | Verwaltung von Tags, außer den RTMS-Tags                                                                                |
| ticket_comment_read                      | Lesen von Kommentaren                                                                                                        |
| ticket_comment_write                     | Verwaltung von Kommentaren                                                                                                     |
| ticket_read                             | Lesen von Tickets                                                                                                        |
| ticket_write                            | Verwaltung von Tickets                                                                                                     |
| incident_management                      | Verwaltung von Incidents                                                                                                    |
| incident_read                           | Lesen von Incidents                                                                                                       |

## Organisationen

Die Organisation ist mit Ihrem __Kundenauftrag__ und dem damit verbundenen Cloud-Vertrag von Cloud Temple verbunden. Sie repräsentiert die jeweilige Stelle (Unternehmen, Abteilung, Team) Ihrer Organisation, die den Vertrag zwischen Cloud Temple und Ihnen trägt.

### Organisations Principe

Die Organisation hat vier Hauptrollen:

- Sie vertritt __die rechtliche Entität__ für Aspekte der Nachverfolgung und Rechnungsstellung,
- Sie definiert __das globale Konfigurationsniveau des Authentifizierungsmodells__: Die Authentifizierung kann lokal auf der Console Shiva erfolgen oder über einen Identity Federation Service abgewickelt werden,
- Sie trägt die gesamten __Benutzerkonten__,
- Sie __fusioniert die Tenants__ (Produktion, Prüfung, Entwicklung, Anwendung 1, Anwendung 2 usw.) die Sie für Ihre Cloud-Architektur definiert haben.

Die Rollen (Rechte/Berechtigungen) der Benutzer sind konfigurierbar und werden für jeden Tenant innerhalb Ihrer Organisation festgelegt. Zum Beispiel kann ein Konto beispielsweise autorisiert werden, Ressourcen in einem Tenant zu bestellen, aber nicht in einem anderen.

### Authentication Mechanisms

The Shiva console allows for the configuration of the authentication mechanism at the organization level. You can utilize the local authentication repository of the Shiva console or integrate your organization with one of its supported authentication repositories.

The following external repositories are supported:

- **OpenID Connect** compatible repositories
- **SAML** compatible repositories
- **Microsoft ADFS**
- **Microsoft EntraID** (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

The tenant is a **grouping of resources within an organization**. An organization has at least one tenant (referred to as the default tenant, which can be renamed). Typically, multiple tenants are used to segment responsibilities or technical perimeters.

For example:

- A production tenant
- A pre-production tenant
- A testing tenant
- A quality assurance tenant

It's also possible to organize things with a **application view** or by **criticality**:

- An application 1 tenant or a criticality 1 tenant
- An application 2 tenant or a criticality 2 tenant
- ...

Technical resources ordered are assigned to a specific tenant and are not shared with other tenants. For instance, a Hypervisor cluster and associated L2 networks are only available within one tenant.

Regarding networks, it's possible to request 'cross-tenant' networks for ensuring network continuity between tenants.

User permissions are defined within each tenant. Thus, an organization must carefully consider the desired tenants. This point is typically addressed during the initial setup workshop, at the time of organization creation.

It's possible to evolve the architecture by adding or removing tenants.

A tenant cannot be empty; it must be initialized with a minimum of resources:

- A availability zone (AZ, i.e., a physical data center),
- A compute cluster,
- An storage space,
- A VLAN network.

| Command Reference                                         | Unité    | SKU                     |
|-----------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activation d'un tenant                 | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activation d'une zone de disponibilité | 1 tenant | csp:(region):iaas:az:v1 |

### Besitzverwaltung auf einem Tenant

Jeder Tenant besitzt mindestens einen Besitzer, was eine klare Verantwortlichkeit und effiziente Ressourcenverwaltung gewährleistet. Darüber hinaus ist es möglich, mehrere Besitzer für einen Tenant zu benennen, was eine Zusammenarbeit und gemeinsame Entscheidungsfindung ermöglicht. Im folgenden finden Sie wichtige Informationen zur Verwaltung dieser Besitzer.

### Wichtige Informationen zur Eigentümerverwaltung

1. **Verantwortlichkeiten der Eigentümer**:
   - Die Eigentümer sind für die Verwaltung und den Betrieb des Cloud-Rechenraums verantwortlich.
   - Sie sorgen dafür, dass alle Systeme und Dienste reibungslos funktionieren.

2. **Zugangskontrolle**:
   - Eigentümer haben vollen Zugriff auf alle Ressourcen im Cloud-Umfeld.
   - Kontrollen über Benutzer- und Gruppenmanagement sind in ihrer Verantwortung.

3. **Sicherheitsmaßnahmen**:
   - Implementierung und Überwachung von Sicherheitsrichtlinien, um Daten vor unbefugtem Zugriff zu schützen.
   - Regelmäßige Audits und Updates der Sicherheitsprotokolle.

4. **Ressourcenverwaltung**:
   - Verwaltung des Budgets für Cloud-Ressourcen (z.B. VMs, Speicher, Netzwerk).
   - Planung und Optimierung der Ressourcennutzung zur Effizienzsteigerung.

5. **Compliance und Regulierung**:
   - Aufrechterhaltung der Compliance mit Branchen- und Branchenbestimmten Vorschriften (z.B. GDPR, HIPAA).
   - Überwachung von Audits und Dokumentation für regulatorische Anforderungen.

6. **Wartung und Support**:
   - Planung und Durchführung von Wartungsarbeiten zur Aufrechterhaltung der Systemleistung.
   - Bereitstellung von technischen Unterstützung für Eigentümer und Benutzer.

7. **Migration und Skalierung**:
   - Steuerung von Migrationen zwischen verschiedenen Cloud-Plattformen oder Migration von Anwendungen in den Cloud.
   - Planung und Durchführung von Skalierungsmaßnahmen basierend auf Nachfrage.

8. **Berichterstattung**:
   - Erstellung regelmäßiger Berichte über die Leistung, Kosten und Sicherheit des Cloud-Umfelds.
   - Bereitstellung von Informationen für Managemententscheidungen.

9. **Kooperation mit Lieferanten**:
   - Zusammenarbeit mit Cloud-Anbietern zur Optimierung der Dienste und zum Lösen technischer Herausforderungen.

10. **Innovation und Verbesserung**:
    - Überwachung von Trends im Bereich des Cloud Computing, um neue Technologien zu identifizieren und in die bestehende Infrastruktur zu integrieren.

### Anzahl der Eigentümer

* Es gibt keine technische Begrenzung für die Anzahl der definierten Eigentümer auf dem Tenant.
* Die Verwaltungs-Oberfläche (IHM) gibt ein Warnhinweis ab, wenn mehr als 3 Eigentümer bestehen, um eine Überlegung zur Beschränkung der Anzahl der Eigentümer aufgrund von Sicherheits- und Optimierungsanforderungen anzusprechen.

### 2. Hinzufügen eines neuen Eigentümers

* Bei der Hinzufügung eines neuen Eigentümers kann die Aktualisierung seiner Berechtigungen bis zu 60 Minuten dauern.
- Diese Verzögerung ist normal und stellt sicher, dass die Zugriffsrechte korrekt auf alle mit dem Eigentümer verbundenen Dienste und Ressourcen angewendet werden.

### 2. Eigentümer-Permissien

* Ein Eigentümer erhält die vollständigen Berechtigungen für alle aktivierten Produkte auf seinem Tenant.
- Die Änderung der Berechtigungen eines Eigentümers ist nicht möglich.

#### 3. Entfernung eines Mieters

* Um einen Mieter vom Vermieter zu entfernen, muss der Benutzer eine Anfrage beim Support einreichen.
- Diese Verfahren stellt sicher, dass die Änderungen der Zugriffsrechte sicher und in Übereinstimmung mit den guten Praktiken der Zugangskontrolle durchgeführt werden.

### Zugriffsberechtigung auf einen Tenant: Erlaubte IP-Adressen

Die Zugriffsmöglichkeit zur Cloud-Management-Konsole wird streng auf die vorab genehmigten IP-Adressen beschränkt, im Einklang mit den Anforderungen der Qualifizierung SecNumCloud. Diese Beschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem nur die Zugriffe von Benutzern aus spezifischen IP-Adressblöcken zulässig sind, was die Risiken von unbefugtem Zugriff minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards schützt.

Hinweis: *Die Entfernung einer genehmigten IP-Adresse erfolgt durch eine Support-Anfrage in der Cloud-Management-Konsole.*

### Verbrauch von Ressourcen innerhalb eines Tenants

Es ist möglich, die im Cloud-Tenant konsumierten Ressourcen zu visualisieren, was eine detaillierte Übersicht über den Einsatz verschiedener Dienste bietet. Diese Funktion ermöglicht es den Benutzern, die Konsumation ihrer Ressourcen in Echtzeit zu verfolgen, die am meisten genutzen Dienste zu identifizieren und deren Nutzung entsprechend anzupassen.

Im Menü der Console klicken Sie auf "Verbrauchsbericht" und wählen Sie die gewünschte Zeitspanne aus. Dadurch können Sie detailliert die Konsumation der Cloud-Ressourcen für die ausgewählte Zeitperiode anzeigen, was Ihnen ermöglicht, die Nutzung der Dienste zu analysieren und Ihre Verwaltung entsprechend anzupassen:

<img src={shivaTenantRessources_01} />
