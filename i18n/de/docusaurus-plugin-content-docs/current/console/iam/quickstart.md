---
title: Schnellstartanleitung
---
import shivaTenant from './images/shiva_tenant.png'
import shivaOnboard_003 from './images/shiva_onboard_003.png'
import shivaOnboard_004 from './images/shiva_onboard_004.png'
import shivaOnboard_001 from './images/shiva_onboard_001.png'
import shivaOnboard_005 from './images/shiva_onboard_005.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaProfil_007 from './images/shiva_profil_007.png'
import shivaIpAccessManagement_01 from './images/shiva_ip_access_management_01.png'
import shivaIpAccessManagement_02 from './images/shiva_ip_access_management_02.png'

## Mandant

### Creation of a tenant

The creation of a tenant is carried out by submitting a service request indicating:

    Your Organization's name
    Name of a contact person, including their email address and phone number, to finalize the configuration
    Name of the tenant
    Desired availability zone, or alternatively, the physical site for the tenant

### Selection of a tenant

The selection of a tenant is performed from the main page of the Console:

<img src={shivaTenant} />

*__Note:__ The resources of a tenant are exclusive to that tenant and cannot be mixed with those of other tenants.*

## Access Accounts for the Console

Access accounts for the Console are created by the sponsor's master account upon invitation (regardless of the authentication repository).

Credentials are global to your [Organization](concepts.md#organizations).

*__Note:__ Identity federation is managed at the organization level*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt über eine Einladung. Um einen Benutzer in einer [Organisation](concepts.md#organisations) einzuladen, navigieren Sie im linken Menüband (grüner Balken) zu __'Administration'__ und dann zum Untermenü __'Benutzer'__.

Klicken Sie auf die Schaltfläche __'Neuer Benutzer'__ auf der Benutzerseite.

<img src={shivaOnboard_003} />

Geben Sie anschließend die E-Mail-Adresse des Benutzers ein.

<img src={shivaOnboard_004} />

Der Benutzer erhält dann eine E-Mail zur Bestätigung.

<img src={shivaOnboard_001} />

Nach Abschluss der Überprüfung kann sich der Benutzer auf der Konsole anmelden.

### Assignment of Permissions to a User

User rights management is performed from the user page.

<img src={shivaOnboard_003} />

By default, a user has no rights. Therefore, the administrator who sent the invitation must assign the necessary rights for the user's activities. Simply click on the user's __'Actions'__ menu and select the __'Edit'__ option.

The rights activation menu then appears:

<img src={shivaOnboard_005} />

Permission configuration must be done for each [Tenant](concepts.md#tenant) within the 
[Organization](concepts.md#organisations).

The list of permissions and their definitions is available [here](#permissions).

### Change the language of a user

Changing a user's language is done in their __'Profile'__, located in the top right corner of the screen, under __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is set individually for each tenant [Tenant](concepts.md#tenant).

### Thematic Notifications Subscription

Managing subscriptions allows you to receive emails related to activated themes, which are automatically sent when corresponding events occur.

This feature is accessible in the user profile, under the "My Subscriptions" tab:

<img src={shivaProfil_007} />

For example, in the event of an incident, specific email notifications related to this theme will be generated.

The list of available themes may evolve and gradually expand to adapt to changing operational needs and environment requirements.

## Berechtigungen

### Welche Berechtigungen sind für Benutzerkonten in der Konsole verfügbar?

Hier finden Sie die Liste der verfügbaren [Berechtigungen](#permissions).

### How to add a permission?

The [procedure for assigning permissions is available here](#permissions)

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you want to add__.

### How to add a user?

*__Note__ : To add a user, you must have the __'iam_write'__ permission.*

### How to audit user access/permissions?

Go to the users page and click the __'Export CSV'__ button:

### How to delete a user?

In the __'Administration'__ menu on the green bar on the left side of the screen, under the sub-menu __'User'__, click the __'Action'__ icon of the target user and select __'Delete'__.

*__Note__*:

- *To add a user, you must have the __'iam_write'__ permission.*
- *If this is a federated user, __make sure the user has also been deleted from the identity repository__.*

### How to reset your password?

You can reset your password from the Console login page by clicking on __'Forgot password?'__.

### Warum sind einige Benutzer grau?

Graue Benutzer sind solche, deren Konto noch nicht bestätigt wurde. Beim Erstellen des Kontos erhalten die Benutzer eine Bestätigungs-E-Mail.

<img src={shivaOnboard_001} />

Sobald die Bestätigung abgeschlossen ist, kann sich der Benutzer in die Konsole einloggen.

Das Konto bleibt grau, solange die Bestätigung nicht abgeschlossen ist.

### Was ist ein Personal Access Token (PAT)?

Die Erstellung eines API-Schlüssels, auch als __Personal Access Token (PAT)__ bezeichnet,
ist eine sichere Methode, um sich an die Console-APIs anzumelden, ohne eine grafische Benutzeroberfläche verwenden zu müssen.

### What is MFA and is it mandatory?

MFA (multi-factor authentication) is a concept of user identity verification in two steps, also known as __two-factor authentication__.

The user must provide two distinct proofs of identity. In the case of the Console, two-factor authentication is mandatory and requires entering a one-time code after the user has entered their account password.

## Access Management and Authentication

### Zugriffsberechtigung auf einen Mandanten: Genehmigte IP-Adressen

Der Zugriff auf die Cloud-Verwaltungskonsole ist streng auf vorab genehmigte IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Zertifizierung. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem nur Benutzer aus festgelegten IP-Bereichen Zugriff erhalten, wodurch das Risiko von unbefugtem Zugriff minimiert und die Cloud-Infrastruktur gemäß den höchsten Sicherheitsstandards geschützt wird.

Es ist nun möglich, die Liste der genehmigten öffentlichen IP-Adressen für den Mandanten anzuzeigen und eine neue öffentliche IP-Adresse direkt über den Tab „Administration > Zugriff“ dieser Liste hinzuzufügen.

<img src={shivaIpAccessManagement_01} />

Dazu muss der Benutzer die Berechtigung `console_public_access_read` besitzen, um die genehmigten IPs einzusehen, und die Berechtigung `console_public_access_write`, um eine öffentliche IP-Adresse der Liste hinzuzufügen.

Anschließend kann eine neue IP-Adresse hinzugefügt werden:

<img src={shivaIpAccessManagement_02} />

Hinweis: *Die Entfernung einer genehmigten IP-Adresse erfolgt über eine Support-Anfrage in der Cloud-Temple-Konsole.*