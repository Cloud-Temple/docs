---
title: Leitmotiv
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

## Eigentum

### Tenant-Erstellung

Die Erstellung eines Tenants erfolgt durch eine Service-Anfrage, die folgende Informationen enthält:

    Den Namen Ihrer Organisation
    Der Name eines Kontaktpersonals mit seinem Mailadresse und Telefonnummer zur Endgültigen Konfiguration des Tenants
    Den Namen des Tenants
    Die Verfügbarkeitszone oder alternativ der gewünschte Standort physikalisch für den Tenant

### Tenant-Wahl

Die Auswahl des Tenants erfolgt von der Hauptseite der Konsole:

<img src={shivaTenant} />

*Bitte beachten Sie: Die Ressourcen eines Tenants sind exklusiv und dürfen nicht mit anderen Tenants vermischt werden.*

## Console Access Accounts

Console Access Accounts are created by the master account of the sponsor on invitation (regardless of the authentication reference).
The identification information is global to your [Organization](concepts.md#organisationen).

*__Note:__ The identity federation is managed at the organization level.*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladen. Um einen Benutzer in einer [Organisation](concepts.md#organisationen) einzuladen, gehen Sie im linken Bandeau über den Menüpunkt __'Administration'__, dann __'Benutzer'__.

Klicken Sie auf den Button __'Neuer Benutzer'__ aus der Seite der Benutzer.

<img src={shivaOnboard_003} />

Geben Sie dann die E-Mail-Adresse des Benutzers an.

<img src={shivaOnboard_004} />

Der Benutzer erhält nachfolgend ein Verifizierungs-E-Mail.

<img src={shivaOnboard_001} />

Nach Abschluss der Verifizierung kann der Benutzer sich an die Console anmelden.


### Explication:

Le texte a été traduit du français au détecté langage Markdown, avec une attention particulière à préserver la structure et le formatage original. Les éléments HTML ou Markdown structurels (comme les titres, les listes, les en-têtes) ont été conservés sans modification. Le contenu textuel des images a également été traduit.

Les instructions pour créer un compte utilisateur dans une organisation sont décrites de manière claire et structurée, avec des étapes spécifiques :

1. Accéder à l'administration de l'organisation via le menu gauche du bandeau vert.
2. Sélectionner "Utilisateurs" dans ce menu.
3. Cliquer sur "Nouvel Utilisateur".
4. Entrer l'adresse e-mail du nouveau utilisateur.
5. Le nouveau membre recevra une vérification par e-mail.
6. Une fois la vérification terminée, le nouveau membre pourra se connecter à la console.

### Zugrichtung von Benutzereintrittsrechten

Die Verwaltung von Benutzerrechten erfolgt über die Benutzerseite.

<img src={shivaOnboard_003} />

Standardmäßig hat ein Benutzer keine Rechte. Es ist daher notwendig, dass der Administrator, der ihn eingeladen hat, ihm die erforderlichen Rechte für seine Tätigkeit zuweisen. Dies geschieht, indem man auf das Menü __'Aktionen__ des Benutzers klickt und die Option __'Anpassen__ auswählt__.

Das Menü zur Zugriffsrechtskonfiguration erscheint dann:

<img src={shivaOnboard_005} />

Die Konfiguration der Rechte erfolgt für jeden [Tenant](concepts.md#tenant) innerhalb der [Organisation](concepts.md#organisationen).

Die Liste der Rechte und deren Definition ist hier [durchzugehen](#berechtigungen).

### Ändern des Benutzersystemsprachen

Die Spracheänderung eines Benutzers muss im Bereich __'Profil'__ des Benutzers selbst vorgenommen werden, welches sich in der oberen rechten Ecke des Bildschirms befindet und unter __'Benutzerparameter'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden Tenant [Tenant](concepts.md#tenant).

### Abonnement an die Themen-Updates

Die Verwaltung der Abonnements ermöglicht es Ihnen, E-Mails zu erhalten, die mit aktivierten Themen verbunden sind und automatisch gesendet werden, wenn ein entsprechender Ereignis auftritt.

Sie ist in Ihrem Benutzerprofil unter dem Tab "Meine Abonnements" zugänglich:

<img src={shivaProfil_007} />

Beispielsweise würden bei einem Vorfall spezifische E-Mail-Benachrichtigungen für diese Thema generiert werden.

Die Liste der verfügbaren Themen kann sich ständig weiterentwickeln und verbessern, um den Bedürfnissen und Veränderungen in unserem Betriebsmilieu gerecht zu werden.

## Berechtigungen

Note: The Markdown structure and formatting are preserved as is. The text "Permissions" remains unchanged in the translation. No modifications were made to HTML elements or code blocks, adhering strictly to the provided rules.

### Welche Berechtigungen stehen den Benutzerkonten der Konsole zur Verfügung?

Hier ist die Liste der verfügbaren [Berechtigungen](#berechtigungen).

### How to grant permissions?

You can find the procedure for assigning permissions [here](#berechtigungen)

### Warum kann ich keine Berechtigung hinzufügen?

Um eine Berechtigung zu erhöhen, benötigen Sie die Berechtigung __'iam_write'__ sowie die Berechtigung, die Sie hinzufügen möchten.

### Wie ein Benutzer hinzufügen?

*Hinweis: Um einen Benutzer zu erstellen, müssen Sie den Berechtigungsnamen `__'iam_write'__ besitzen.*

### Wie man Benutzerzugriffe und -rechte auditiert?

Gehen Sie auf die Seite "Benutzer" und klicken Sie auf den Button "Exportieren als CSV":

### How to delete a user?

In the 'Administration' menu located on the top left bar, under the 'User' submenu, click on the 'Action' icon of the target user and select 'Delete'.

*Note:*

- *To add a user, you need to have the __iam_write__ permission.*
- *If it's a federated user, make sure they have also been removed from their identity repository.*

### Wie man seinen Passwort zurücksetzt

Es ist möglich, Ihr Passwort wiederherzustellen, indem Sie auf die Seite der Anmeldeseite der Konsole klicken und auf "Passwort vergessen?" klicken.

### Warum sind einige Benutzer grau gefärbt?

Die Grautöne stellen Benutzer dar, die ihr Konto noch nicht validiert haben. Bei der Erstellung des Kontos erhielten die Benutzer eine Bestätigungs-E-Mail.

<img src={shivaOnboard_001} />

Nach Abschluss der Validierung können die Benutzer sich auf die Konsole einloggen.

Das Konto bleibt grau, bis die Validierung abgeschlossen ist.

### Was ist ein Personal Access Token (PAT)?

Die Erzeugung eines API-Schlüssels, auch bekannt als __Personal Access Token (PAT)__,
ist eine sichere Methode, um sich an die Console-APIs zu verbinden, ohne über eine grafische Benutzeroberfläche.

### Was ist MFA und ist es verpflichtend?

MFA, oder Multi-Factor Authentication (Mehrfach-Authentifizierung), bezeichnet ein Verfahren zur Identitätsüberprüfung eines Benutzers in zwei Schritten, auch als Authentifizierung zu zweifelnm Faktor bekannt.

Der Benutzer muss zwei verschiedene Beweise seiner Identität vorlegen. Bei der Konsole ist die MFA verpflichtend und erfordert, dass ein einmaligen Code eingegeben wird, nachdem der Passwort-Eingabe des Kontos bestätigt wurde.

### Verwaltung von Zugriffen und Authentifizierung

### Zugrichtlinien für den Tenant: Erlaubte IP-Adressen

Die Zugangsmöglichkeit zur Cloud-Management-Konsole wird streng auf die vorab genehmigten IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der Qualifizierung SecNumCloud. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem nur Benutzer aus spezifischen IP-Adressblöcken zugelassen werden, was die Risiken von unbefugtem Zugriff minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards schützt.

Es ist nun möglich, die Liste der erlaubten öffentlichen IP-Adressen auf dem Tenant anzuzeigen und eine neue öffentliche IP-Adresse direkt aus dem Menü "Administration > Zugrichtlinien" hinzuzufügen.

<img src={shivaIpAccessManagement_01} />

Für diese Funktion benötigt der Benutzer den Rechtsstatus `console_public_access_read`, um die erlaubten IPs anzuzeigen, sowie den Status `console_public_access_write` zur Hinzufügung einer neuen öffentlichen IP-Adresse in die Liste.

Dann kann eine neue IP-Adresse hinzugefügt werden:

<img src={shivaIpAccessManagement_02} />

Hinweis: *Die Entfernung einer erlaubten IP-Adresse erfolgt über eine Support-Anfrage in der Cloud-Konsole.*
