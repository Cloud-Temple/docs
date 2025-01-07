---
title: Quickstart
---

##  Tenant

### Erstellung eines Tenants

Die Erstellung eines Tenants erfolgt durch eine Serviceanfrage mit folgenden Angaben:

    Der Name Ihrer Organisation
    Den Namen eines Ansprechpartners mit seiner E-Mail-Adresse und Telefonnummer zur Fertigstellung der Konfiguration
    Den Namen des Tenants
    Die Verfügbarkeitszone oder alternativ den gewünschten physischen Standort für den Tenant


### Auswahl eines Tenants

Die Auswahl des Tenants erfolgt über die Hauptseite der Shiva-Konsole:

![](images/shiva_tenant.png)


*__Hinweis:__ Die Ressourcen eines Tenants sind ihm exklusiv zugeordnet und können nicht mit anderen Tenants gemischt werden.*



## Zugänge zur Shiva-Konsole

Die Zugänge zur Shiva-Konsole werden vom Hauptkonto des Auftraggebers nach Einladung (unabhängig vom Authentifizierungsreferenzsystem) erstellt. Die Zugangsdaten sind global für Ihre [Organisation](concepts.md#organisations).

*__Hinweis:__ Die Identitätsföderation wird auf Organisationsebene verwaltet.*

### Erstellung eines Benutzerkontos in Ihrer Organisation

Die Erstellung eines Benutzerkontos in Ihrer Organisation erfolgt durch Einladung. Um einen Benutzer zu einer [Organisation](concepts.md#organisations) einzuladen, gehen Sie in das Menü __'Administration'__ links auf Ihrem Bildschirm im grünen Banner und dann in das Untermenü __'Benutzer'__.  

Klicken Sie auf der Benutzerseite auf die Schaltfläche __'Neuer Benutzer'__. 

![](images/shiva_onboard_003.png)

Geben Sie dann die E-Mail-Adresse des Benutzers an 

![](images/shiva_onboard_004.png)

Der Benutzer wird dann eine Bestätigungs-E-Mail erhalten.

![](images/shiva_onboard_001.png)

Nach Abschluss der Überprüfung kann sich der Benutzer in der Konsole anmelden.

### Zuweisung von Berechtigungen an einen Benutzer

Die Verwaltung der Benutzerrechte erfolgt über die Benutzerseite.

![](images/shiva_onboard_003.png)

Standardmäßig hat ein Benutzer keine Rechte. Der Administrator, der die Einladung ausgesprochen hat, muss ihm die zur Ausführung seiner Tätigkeit erforderlichen Rechte zuweisen. Klicken Sie einfach auf das Menü __'Aktionen'__ des Benutzers und wählen Sie die Option __'Bearbeiten'__.  

Das Rechteaktivierungsmenü erscheint dann:

![](images/shiva_onboard_005.png)

Die Berechtigungskonfiguration muss für jeden [Tenant](concepts.md#tenants) der [Organisation](concepts.md#organisations) vorgenommen werden.

Die Liste der Berechtigungen und ihre Definition sind [hier](#permissions) abrufbar.

### Ändern der Sprache eines Benutzers

Die Änderung der Sprache eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration wird für jeden Tenant [Tenant](concepts.md#tenants) vorgenommen.

### Abonnements für thematische Benachrichtigungen

Die Verwaltung der Abonnements ermöglicht es, E-Mails zu aktivierten Themenbereichen zu erhalten, die bei entsprechenden Ereignissen automatisch gesendet werden.

Diese ist im Benutzerprofil im Tab "Meine Abonnements" zugänglich:

![](images/shiva_profil_007.png)

Zum Beispiel werden im Falle eines Vorfalls spezifische E-Mail-Benachrichtigungen zu diesem Thema generiert.

Die Liste der verfügbaren Themen kann sich weiterentwickeln und wird schrittweise angepasst, um den Bedürfnissen und Veränderungen in unserer Betriebsumgebung gerecht zu werden.


## Berechtigungen

### Welche Berechtigungen sind für Benutzerkonten der Shiva-Konsole verfügbar?

Hier ist die Liste der [verfügbaren Berechtigungen](#permissions).

### Wie füge ich eine Berechtigung hinzu?

Hier ist die [Prozedur zur Zuweisung von Berechtigungen](#permissions).

### Warum kann ich keine Berechtigung hinzufügen?

Um eine Berechtigung hinzuzufügen, müssen Sie über die Berechtigung __'iam_write'__ sowie die __Berechtigung, die Sie hinzufügen möchten__ verfügen.

### Wie füge ich einen Benutzer hinzu?

*__Hinweis__ : Um einen Benutzer hinzuzufügen, müssen Sie über die Berechtigung __'iam_write'__ verfügen.*

### Wie auditiere ich Benutzerzugriffe/-berechtigungen?

Gehen Sie auf die Benutzerseite und klicken Sie auf die Schaltfläche __'CSV exportieren'__:

### Wie lösche ich einen Benutzer?

Im Menü __'Administration'__ auf dem grünen Banner links auf dem Bildschirm, im Untermenü __'Benutzer'__, klicken Sie auf das Symbol __'Aktion'__ des Zielbenutzers und wählen Sie __'Löschen'__.

*__Hinweis__ :*
- *Um einen Benutzer hinzuzufügen, müssen Sie über die Berechtigung __'iam_write'__ verfügen.*
- *Handelt es sich um einen föderierten Benutzer, __stellen Sie sicher, dass der Benutzer auch aus dem Identitätsreferenzsystem gelöscht wurde__.*

### Wie setze ich mein Passwort zurück?
Es ist möglich, das Passwort auf der Anmeldeseite der Shiva-Konsole zurückzusetzen, indem Sie auf __'Passwort vergessen?'__ klicken.

### Warum sind manche Benutzer ausgegraut?
Ausgegraute Benutzer sind diejenigen, die ihr Konto nicht verifiziert haben. Bei der Kontoerstellung hat der Benutzer eine Bestätigungs-E-Mail erhalten.

![](../../console/images/shiva_onboard_001.png)

Nach Abschluss der Überprüfung kann sich der Benutzer in der Konsole anmelden.

Das Konto bleibt ausgegraut, bis die Überprüfung abgeschlossen ist.

### Was ist ein Personal Access Token (PAT)?

Die Generierung eines API-Schlüssels, auch __Personal Access Token (PAT)__ genannt, ist eine sichere Möglichkeit, sich mit den Shiva-APIs zu verbinden, ohne eine grafische Benutzeroberfläche zu verwenden.

### Was ist MFA und ist es obligatorisch?
MFA (Multi-Faktor-Authentifizierung) ist ein Konzept der doppelten Identitätsüberprüfung eines Benutzers, genannt __Zwei-Faktor-Authentifizierung__.

Der Benutzer muss zwei unterschiedliche Identitätsnachweise erbringen. Im Fall der Shiva-Konsole ist die Zwei-Faktor-Authentifizierung obligatorisch und erfordert, dass nach Eingabe des Kontopassworts ein einmaliger Code eingegeben wird.


## Zugriffskontrolle und Authentifizierung

### Zugriffsberechtigung für einen Tenant: Zugelassene IPs

Der Zugriff auf die Cloud-Management-Konsole ist streng auf zuvor autorisierte IP-Adressen beschränkt, um die Anforderungen der SecNumCloud-Qualifikation zu erfüllen. Diese Beschränkung gewährleistet ein verstärktes Sicherheitsniveau, indem sie den Zugriff nur für Benutzer aus festgelegten IP-Bereichen ermöglicht, wodurch das Risiko unbefugter Zugriffe minimiert und die Cloud-Infrastruktur nach den höchsten Sicherheitsstandards geschützt wird.

Es ist nun möglich, die Liste der autorisierten öffentlichen IP-Adressen auf dem Tenant anzuzeigen und eine neue öffentliche IP-Adresse direkt über den Tab "Administration > Zugriff" hinzuzufügen.

![](images/shiva_ip_access_management_01.png)

Dazu muss der Benutzer über das Recht `console_public_access_read` zum Anzeigen der autorisierten IPs und über das Recht `console_public_access_write` zum Hinzufügen einer öffentlichen IP-Adresse zur Liste verfügen.

Es ist möglich, eine neue IP hinzuzufügen:

![](images/shiva_ip_access_management_02.png)

Hinweis: *Das Entfernen einer autorisierten IP erfolgt über eine Supportanfrage in der Cloud Temple-Konsole.*

### Was ist der Captcha? Warum kann er den Zugang zur Anwendung blockieren?
Der __'Captcha'__ ist eine Sicherheitsmaßnahme, die Ihr Konto vor Spam schützt und alle Versuche, Ihr Passwort zu entschlüsseln, verhindert.

Der __'Captcha'__ stellt einen einfachen Test, um zu überprüfen, ob es sich um einen menschlichen Benutzer und nicht um einen Bot handelt, der versucht, auf das Konto zuzugreifen.

Die Cloud Temple-Konsole verwendet einen Captcha vom Typ v3. Der Typ v3 ist ein unsichtbarer Test, der einen Vertrauensindex basierend auf den Benutzerinteraktionen erstellt.

Die Cloud Temple-Konsole basiert auf diesem Vertrauenswert, um den Benutzer zu autorisieren oder nicht, sich anzumelden.

Wenn Sie Schwierigkeiten mit dem __'Captcha'__-Test haben, um sich in der Shiva-Konsole anzumelden, wenden Sie sich bitte an den Benutzer-Support.