---
title: Erste Schritte
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

## Tenant

### Erstellung eines Tenants

Die Erstellung eines Tenants erfolgt über eine Serviceanfrage mit folgenden Angaben:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Der Name des Tenants
    Die gewünschte Verfügbarkeitszone oder, falls nicht vorhanden, der gewünschte physische Standort für den Tenant

### Auswahl eines Tenants

Die Auswahl des Tenants erfolgt von der Hauptseite der Shiva-Konsole aus:

<img src={shivaTenant} />

*__Hinweis:__ Die Ressourcen eines Tenants sind ihm eigen und können nicht mit anderen Tenants vermischt werden.*

## Zugangskonten für die Shiva-Konsole

Die Zugangskonten für die Shiva-Konsole werden vom Master-Konto des Auftraggebers per Einladung erstellt (unabhängig vom Authentifizierungsverzeichnis).
Die Anmeldedaten sind global für Ihre [Organisation](concepts.md#organisations).

*__Hinweis:__ Die Identitätsföderation wird auf Organisationsebene verwaltet*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt per Einladung. Um einen Benutzer in eine [Organisation](concepts.md#organisations) einzuladen, gehen Sie zum Menü __'Administration'__ auf der linken Seite Ihres Bildschirms im grünen Banner und dann zum Untermenü __'Benutzer'__.

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

Die Berechtigungskonfiguration muss für jeden [Tenant](concepts.md#tenants) der [Organisation](concepts.md#organisations) durchgeführt werden.

Die Liste der Berechtigungen und ihre Definitionen ist [hier](#permissions) zugänglich.

### Ändern der Sprache eines Benutzers

Das Ändern der Sprache eines Benutzers erfolgt über sein __'Profil'__ oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden [Tenant](concepts.md#tenants).

### Abonnieren von thematischen Benachrichtigungen

Die Abonnementverwaltung ermöglicht es Ihnen, E-Mails zu aktivierten Themen zu erhalten, die automatisch gesendet werden, wenn entsprechende Ereignisse eintreten.

Sie ist im Benutzerprofil im Tab "Meine Abonnements" zugänglich:

<img src={shivaProfil_007} />

Im Falle eines Vorfalls werden beispielsweise spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen wird sich wahrscheinlich weiterentwickeln und schrittweise erweitert werden, um sich an die Bedürfnisse und Veränderungen in unserer Betriebsumgebung anzupassen.

## Berechtigungen

### Welche Berechtigungen sind für Benutzerkonten der Shiva-Konsole verfügbar?

Hier ist die Liste der [verfügbaren Berechtigungen](#permissions).

### Wie fügt man eine Berechtigung hinzu?

Das [Verfahren zur Zuweisung von Berechtigungen ist hier verfügbar](#permissions).

### Warum kann ich eine Berechtigung nicht hinzufügen?

Um eine Berechtigung hinzuzufügen, benötigen Sie die Berechtigung __'iam_write'__ sowie die __Berechtigung, die Sie hinzufügen möchten__.

### Wie fügt man einen Benutzer hinzu?

*__Hinweis__: Um einen Benutzer hinzuzufügen, müssen Sie über das Recht __'iam_write'__ verfügen.*

### Wie prüft man die Zugänge/Berechtigungen der Benutzer?

Gehen Sie zur Benutzerseite und klicken Sie auf die Schaltfläche __'CSV exportieren'__:

### Wie löscht man einen Benutzer?

Im Menü __'Administration'__ auf dem grünen Banner auf der linken Seite des Bildschirms, im Untermenü __'Benutzer'__, klicken Sie auf das Symbol __'Aktion'__ des Zielbenutzers und wählen Sie __'Löschen'__.

*__Hinweis__:*

- *Um einen Benutzer hinzuzufügen, müssen Sie über das Recht __'iam_write'__ verfügen.*
- *Wenn es sich um einen föderierten Benutzer handelt, __stellen Sie sicher, dass der Benutzer auch aus dem Identitätsverzeichnis gelöscht wurde__.*

### Wie setzt man sein Passwort zurück?

Es ist möglich, Ihr Passwort von der Anmeldeseite der Shiva-Konsole aus zurückzusetzen, indem Sie auf __'Passwort vergessen?'__ klicken.

### Warum sind einige Benutzer ausgegraut?

Ausgegraute Benutzer sind diejenigen, die ihr Konto nicht validiert haben. Bei der Erstellung des Kontos hat der Benutzer eine Bestätigungs-E-Mail erhalten.

<img src={shivaOnboard_001} />

Nach Abschluss der Bestätigung kann sich der Benutzer in der Konsole anmelden.

Das Konto ist ausgegraut, bis die Bestätigung abgeschlossen ist.

### Was ist ein Personal Access Token (PAT)?

Die Generierung eines API-Schlüssels, auch __Personal Access Token (PAT)__ genannt, ist eine sichere Methode, um sich mit den Shiva-APIs zu verbinden, ohne eine grafische Benutzeroberfläche zu verwenden.

### Was ist MFA und ist es obligatorisch?

MFA (Multi-Faktor-Authentifizierung) ist ein Konzept zur Überprüfung der Identität eines Benutzers in zwei Schritten, genannt __Zwei-Faktor-Authentifizierung__.

Der Benutzer muss zwei verschiedene Identitätsnachweise erbringen. Im Fall der Shiva-Konsole ist die Zwei-Faktor-Authentifizierung obligatorisch und erfordert die Eingabe eines Einmalkodes, nachdem der Benutzer das Passwort seines Kontos eingegeben hat.

## Zugriffsverwaltung und Authentifizierung

### Tenant-Zugriffsautorisierung: Autorisierte IPs

Der Zugriff auf die Cloud-Verwaltungskonsole ist streng auf zuvor autorisierte IP-Adressen beschränkt, in Übereinstimmung mit den Anforderungen der SecNumCloud-Qualifikation. Diese Einschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem der Zugriff nur Benutzern von bestimmten IP-Bereichen aus erlaubt wird, wodurch die Risiken eines unbefugten Zugriffs minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards geschützt wird.

Es ist jetzt möglich, die Liste der auf dem Tenant autorisierten öffentlichen IP-Adressen anzuzeigen und eine neue öffentliche IP-Adresse direkt über den Tab "Administration > Zugriff" zu dieser Liste hinzuzufügen.

<img src={shivaIpAccessManagement_01} />

Dazu muss der Benutzer über das Recht `console_public_access_read` verfügen, um die autorisierten IPs einzusehen, und über das Recht `console_public_access_write`, um eine öffentliche IP-Adresse zur Liste hinzuzufügen.

Es ist dann möglich, eine neue IP hinzuzufügen:

<img src={shivaIpAccessManagement_02} />

Hinweis: *Die Entfernung einer autorisierten IP erfolgt über eine Support-Anfrage in der Cloud Temple-Konsole.*
