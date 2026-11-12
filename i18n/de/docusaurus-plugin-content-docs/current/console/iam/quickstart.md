---
title: Schnellstart-Anleitung
---
import shivaTenant from '@site/docs/console/iam/images/shiva_tenant.png'
import shivaOnboard_003 from '@site/docs/console/iam/images/shiva_onboard_003.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaProfil_006 from '@site/docs/console/iam/images/shiva_profil_006.png'
import shivaProfil_007 from '@site/docs/console/iam/images/shiva_profil_007.png'
import shivaOrgAccess from '@site/docs/console/images/shiva_org_access.png'
import shivaIpAccessManagement_02 from '@site/docs/console/iam/images/shiva_ip_access_management_02.png'

## Tenant

### Erstellung eines Tenants

Die Erstellung eines Tenants erfolgt __selbstbedient__ über die Konsole, ohne vorherige Serviceanfrage. Über __'Administration > Tenants'__ öffnet der Button __'Neuer Tenant'__ ein zweigeteiltes Formular: die Identität des Tenants (Name und Beschreibung) und die Produkte, die darin aktiviert werden sollen.

Das detaillierte Verfahren ist im [Quickstart Console](../console_quickstart.md) beschrieben.

### Auswahl eines Tenants

Die Auswahl des Tenants erfolgt von der Hauptseite der Konsole:

<img src={shivaTenant} />

*__Hinweis:__ Die Ressourcen eines Tenants sind ihm ausschließlich zugeordnet und können nicht mit anderen Tenants gemischt werden.*

## Konten für den Konsolenzugriff

Die Konten für den Konsolenzugriff werden vom Master-Konto des Auftraggebers per Einladung erstellt (unabhängig vom Authentifizierungsverzeichnis).
Die Anmeldeinformationen sind für Ihre [Organisation](concepts.md#organisationen) global.

*__Hinweis:__ Die Identitätsföderation wird auf Organisationsebene verwaltet*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt per Einladung. Um einen Benutzer in einer [Organisation](concepts.md#organisationen) einzuladen, gehen Sie im Menü __'Administration'__ links auf Ihrem Bildschirm in der grünen Leiste auf das Untermenü __'Benutzer'__.

Klicken Sie auf der Benutzereite auf den Button __'Neuer Benutzer'__.

<img src={shivaOnboard_003} />

Geben Sie anschließend die E-Mail-Adresse des Benutzers an.

<img src={shivaOnboard_004} />

Der Benutzer erhält dann eine Bestätigungs-E-Mail.

<img src={shivaOnboard_001} />

Sobald die Bestätigung abgeschlossen ist, kann sich der Benutzer in der Konsole anmelden.

### Zuweisung von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt von der Benutzereite.

<img src={shivaOnboard_003} />

Standardmäßig verfügt ein Benutzer über keine Rechte. Es ist daher erforderlich, dass der Administrator, der die Einladung ausgesprochen hat, ihm die für seine Tätigkeit erforderlichen Rechte zuweist. Es genügt, auf das Menü __'Aktionen'__ des Benutzers zu klicken und die Option __'Bearbeiten'__ auszuwählen.

Das Menü zur Aktivierung der Rechte wird dann angezeigt:

<img src={shivaOnboard_005} />

Die Konfiguration der Berechtigungen ist für jeden [Tenant](concepts.md#tenant) der
[Organisation](concepts.md#organisationen) durchzuführen.

Die Liste der Berechtigungen und deren Definition ist [hier](#berechtigungen) verfügbar.

### Sprache eines Benutzers ändern

Die Sprachänderung eines Benutzers erfolgt in seinem __'Profil'__ oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden Tenant [Tenant](concepts.md#tenant).

### Abonnement für thematische Benachrichtigungen

Die Verwaltung der Abonnements ermöglicht es, E-Mails zu den aktivierten Themen zu erhalten, die automatisch bei Eintreten entsprechender Ereignisse gesendet werden.

Sie ist im Benutzerprofil im Reiter "Meine Abonnements" verfügbar:

<img src={shivaProfil_007} />

Zum Beispiel werden bei einem Vorfall spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und schrittweise erweitert werden, um sich an die Bedürfnisse und Veränderungen in unserer Betriebsumgebung anzupassen.

## Berechtigungen

### Welche Berechtigungen sind für Benutzerkonten der Konsole verfügbar?

Hier ist die Liste der [verfügbaren Berechtigungen](#berechtigungen).

### Wie füge ich eine Berechtigung hinzu?

Das [Verfahren zur Zuweisung von Berechtigungen ist hier verfügbar](#berechtigungen)

### Warum kann ich keine Berechtigung hinzufügen?

Um eine Berechtigung hinzuzufügen, müssen Sie die Berechtigung __'iam_write'__ sowie die __Berechtigung, die Sie hinzufügen möchten__, besitzen.

### Wie füge ich einen Benutzer hinzu?

*__Hinweis__ : Um einen Benutzer hinzuzufügen, müssen Sie das Recht __'iam_write'__ besitzen.*

### Wie auditieren ich die Zugriffe/Berechtigungen der Benutzer?

Gehen Sie auf die Benutzereite und klicken Sie auf den Button __'CSV exportieren'__ :

### Wie lösche ich einen Benutzer?

Im Menü __'Administration'__ in der grünen Leiste links auf dem Bildschirm, im Untermenü __'Benutzer'__, klicken Sie auf das Symbol __'Aktion'__ des Zielbenutzers und wählen Sie __'Löschen'__.

*__Hinweis__ :*

- *Um einen Benutzer hinzuzufügen, müssen Sie das Recht __'iam_write'__ besitzen.*
- *Handelt es sich um einen föderierten Benutzer, __stellen Sie sicher, dass der Benutzer auch aus dem Identitätsverzeichnis gelöscht wurde__.*

### Wie setze ich mein Passwort zurück?

Es ist möglich, das Passwort von der Anmeldeseite der Konsole zurückzusetzen, indem Sie auf __'Passwort vergessen?'__ klicken.

### Warum sind einige Benutzer ausgegraut?

Die ausgegrauten Benutzer sind diejenigen, die ihr Konto nicht bestätigt haben. Bei der Kontenerstellung hat der Benutzer eine Bestätigungs-E-Mail erhalten.

<img src={shivaOnboard_001} />

Sobald die Bestätigung abgeschlossen ist, kann sich der Benutzer in der Konsole anmelden.

Das Konto bleibt ausgegraut, bis die Bestätigung abgeschlossen ist.

### Was ist ein Personal Access Token (PAT)?

Die Generierung eines API-Schlüssels, auch __Personal Access Token (PAT)__ genannt,
ist eine sichere Methode, sich ohne grafische Benutzeroberfläche mit den API der Konsole zu verbinden.

### Was ist MFA und ist es obligatorisch?

MFA (Multi-Faktor-Authentifizierung) ist ein Konzept zur Identitätsprüfung eines Benutzers in zwei Schritten, auch __Zwei-Faktor-Authentifizierung__ genannt.

Der Benutzer muss zwei verschiedene Identitätsnachweise erbringen. Im Fall der Konsole ist die Zwei-Faktor-Authentifizierung obligatorisch und erfordert die Eingabe eines Einmal-Codes, nachdem der Benutzer das Passwort seines Kontos eingegeben hat.

## Zugriffsverwaltung und Authentifizierung

### Zugriffsgenehmigung auf die Konsole : autorisierte IPs

Der Zugriff auf die Cloud-Verwaltungskonsole ist streng auf zuvor autorisierte IP-Adressen beschränkt, im Einklang mit den Anforderungen der SecNumCloud-Zertifizierung. Diese Beschränkung gewährleistet ein erhöhtes Sicherheitsniveau, indem der Zugriff nur Benutzern aus angegebenen IP-Bereichen ermöglicht wird, wodurch das Risiko unbefugter Zugriffe minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards geschützt wird.

Die Liste gehört zur __Organisation__ : eine von einem beliebigen Tenant hinzugefügte Adresse autorisiert den Zugriff auf die Konsole für die gesamte Organisation. Sie wird im Reiter __'Administration > Zugriff'__ eingesehen und ergänzt.

<img src={shivaOrgAccess} />

Dazu muss der Benutzer über das Recht `console_public_access_read` zur Einsicht der autorisierten IPs und über das Recht `console_public_access_write` zum Hinzufügen einer öffentlichen IP-Adresse zur Liste verfügen.

Es ist dann möglich, eine neue IP hinzuzufügen:

<img src={shivaIpAccessManagement_02} />

Hinweis: *Die Löschung einer autorisierten IP erfolgt über eine Supportanfrage in der Cloud Temple-Konsole.*
