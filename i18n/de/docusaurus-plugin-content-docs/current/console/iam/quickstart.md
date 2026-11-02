---
title: Häufig gestellte Fragen
---
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'

# IAM-FAQ

Die gängigen Fragen zu Konten, Berechtigungen und dem Zugriff auf die Konsole. Die Schritt-für-Schritt-Verfahren finden Sie unter [Onboarding](../onboarding.md); die vollständige Referenz finden Sie in den [IAM-Konzepten](concepts.md).

<a id="tenant"></a>
<a id="création-dun-tenant"></a>
<a id="selection-dun-tenant"></a>

## Wie erstelle oder wähle ich einen Tenant aus?

Die Erstellung eines Tenants erfolgt __im Self-Service__ über die Konsole, ohne vorherige Serviceanfrage: __'Administration > Tenants'__, Schaltfläche __'Neuer Tenant'__. Der Arbeits-Tenant wird über das Auswahlmenü __'Meine Tenants'__ in der Kopfzeile ausgewählt.

Siehe [Eine Umgebung auswählen oder erstellen](../onboarding.md#schritt-3-eine-umgebung-auswählen-oder-erstellen).

*__Hinweis:__ Die Ressourcen eines Tenants gehören ausschließlich zu diesem und werden nicht mit anderen Tenants geteilt.*

<a id="comptes-daccès-à-la-console"></a>
<a id="création-dun-compte-utilisateur-dans-votre-organisation"></a>

## Wie füge ich einen Benutzer hinzu?

Per Einladung, über __'Administration > Benutzer'__, Schaltfläche __'Neuer Benutzer'__. Die Anmeldedaten gelten global für Ihre [Organisation](concepts.md#organisationen), unabhängig vom Authentifizierungsverzeichnis.

*__Hinweis__: Um einen Benutzer hinzuzufügen, müssen Sie über das Recht __'iam_write'__ verfügen.*

Siehe [Ihre Mitarbeiter einladen](../onboarding.md#schritt-4-ihre-mitarbeiter-einladen) und die [Referenz](concepts.md#erstellen-eines-benutzerkontos-in-ihrer-organisation).

<a id="affectation-des-permissions-à-un-utilisateur"></a>

## Wie füge ich eine Berechtigung hinzu?

Standardmäßig hat ein Benutzer keine Rechte. Öffnen Sie auf der Benutzerseite das Menü __'Aktionen'__ des Benutzers und wählen Sie __'Bearbeiten'__. Berechtigungen werden __Tenant für Tenant__ vergeben: Es gibt keine globale Zuweisung auf Organisationsebene.

Siehe die [Zuweisung von Berechtigungen in einem Tenant](concepts.md#zuweisung-von-berechtigungen-in-einem-tenant).

## Warum kann ich keine Berechtigung hinzufügen?

Um eine Berechtigung hinzuzufügen, benötigen Sie die Berechtigung __'iam_write'__ sowie die __Berechtigung, die Sie hinzufügen möchten__.

<a id="permissions"></a>

## Welche Berechtigungen sind für Benutzerkonten der Konsole verfügbar?

Siehe die Liste der [verfügbaren Berechtigungen](concepts.md#verfügbare-berechtigungen-für-benutzer-ihrer-organisation) und ihre Definition.

## Wie prüfe ich die Zugriffe/Berechtigungen der Benutzer?

Rufen Sie die Seite __'Benutzer'__ auf und klicken Sie auf die Schaltfläche __'CSV exportieren'__: Sie erhalten die Liste der Benutzer und ihrer Zugriffe.

## Wie lösche ich einen Benutzer?

Klicken Sie im Menü __'Administration'__ in der grünen Leiste links auf dem Bildschirm, im Untermenü __'Benutzer'__, auf das Symbol __'Aktionen'__ des betreffenden Benutzers und wählen Sie __'Löschen'__.

*__Hinweis__:*

- *Sie können sich weder selbst löschen noch einen Benutzer vom Typ __'Eigentümer'__ löschen.*
- *Handelt es sich um einen föderierten Benutzer, __stellen Sie sicher, dass der Benutzer auch im Identitätsverzeichnis gelöscht wurde__.*

## Warum sind einige Benutzer ausgegraut?

Ausgegraute Benutzer sind diejenigen, die ihr Konto noch nicht bestätigt haben. Bei der Erstellung des Kontos hat der Benutzer eine Bestätigungs-E-Mail erhalten.

<img src={shivaOnboard_001} />

Das Konto bleibt ausgegraut, solange die Bestätigung nicht abgeschlossen ist. Wenn der Link abgelaufen ist, verwenden Sie die Aktion __'Neuanmeldung'__: siehe die [Neuanmeldung eines Benutzers](concepts.md#neuanmeldung-eines-benutzers).

## Wie setze ich mein Passwort zurück?

Sie können Ihr Passwort auf der Anmeldeseite der Konsole zurücksetzen, indem Sie auf __'Passwort vergessen?'__ klicken.

## Was ist MFA und ist sie verpflichtend?

MFA (Multi-Faktor-Authentifizierung) ist ein Konzept zur Überprüfung der Identität eines Benutzers in zwei Schritten, die sogenannte __Zwei-Faktor-Authentifizierung__.

Der Benutzer muss zwei unterschiedliche Identitätsnachweise erbringen. Bei der Konsole ist die Zwei-Faktor-Authentifizierung verpflichtend und erfordert die Eingabe eines Einmalcodes, nachdem der Benutzer das Passwort seines Kontos eingegeben hat.

## Was ist ein Personal Access Token (PAT)?

Die Erstellung eines API-Schlüssels, auch als __Personal Access Token (PAT)__ bezeichnet, ist eine sichere Methode, um sich an die APIs der Konsole anzumelden, ohne eine grafische Benutzeroberfläche zu verwenden. Siehe die [API-Dokumentation](../api.md).

<a id="gestion-des-accès-et-authentification"></a>
<a id="autorisation-daccès-à-la-console--ip-autorisées"></a>

## Wie autorisiere ich eine neue IP-Adresse für den Zugriff auf die Konsole?

Da die Konsole auf einer SecNumCloud-qualifizierten Infrastruktur gehostet wird, ist der Zugriff auf sie auf autorisierte öffentliche IP-Adressen beschränkt. Die Liste gehört zur __Organisation__: Sie wird über __'Administration > Zugriff'__ eingesehen und ergänzt, mit den Rechten `console_public_access_read` und `console_public_access_write`. Das Entfernen einer Adresse erfolgt über eine Support-Anfrage in der Konsole.

Siehe [Eine IP-Adresse hinzufügen](../onboarding.md#eine-ip-adresse-hinzufügen).

## Wie föderiere ich die Authentifizierung mit unserem Verzeichnis?

Die Identitätsföderation wird auf Organisationsebene konfiguriert: siehe die [Authentifizierungsmechanismen](concepts.md#authentifizierungsmechanismen) und die [Tutorials zur Identitätsföderation](/console/iam/tutorials).

<a id="changer-la-langue-dun-utilisateur"></a>

## Wie ändere ich die Sprache eines Benutzers?

In seinem __'Profil'__, oben rechts auf dem Bildschirm, unter __'Benutzereinstellungen'__. Siehe [Sprache eines Benutzers ändern](concepts.md#sprache-eines-benutzers-ändern).

<a id="abonnement-aux-notifications-thématiques"></a>

## Wie erhalte ich Benachrichtigungen per E-Mail?

Aktivieren Sie im Benutzerprofil auf der Registerkarte __'Meine Abonnements'__ die gewünschten Themen. Siehe das [Abonnement für themenspezifische Benachrichtigungen](concepts.md#abonnement-für-themenspezifische-benachrichtigungen).
