---
title: Beispiel einer Identitätsföderation mit Microsoft EntraID (Azure AD)
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from '@site/docs/console/iam/tutorials/images/sso_entra_001.png'
import ssoEntra_002 from '@site/docs/console/iam/tutorials/images/sso_entra_002.png'
import ssoAad_004 from '@site/docs/console/iam/tutorials/images/sso_aad_004.png'
import ssoAad_005 from '@site/docs/console/iam/tutorials/images/sso_aad_005.png'
import ssoAad_006 from '@site/docs/console/iam/tutorials/images/sso_aad_006.png'
import ssoAad_007 from '@site/docs/console/iam/tutorials/images/sso_aad_007.png'
import ssoAad_008 from '@site/docs/console/iam/tutorials/images/sso_aad_008.png'
import ssoAad_009 from '@site/docs/console/iam/tutorials/images/sso_aad_009.png'
import ssoAad_010 from '@site/docs/console/iam/tutorials/images/sso_aad_010.png'
import ssoAad_011 from '@site/docs/console/iam/tutorials/images/sso_aad_011.png'
import ssoAad_012 from '@site/docs/console/iam/tutorials/images/sso_aad_012.png'
import ssoAad_013 from '@site/docs/console/iam/tutorials/images/sso_aad_013.png'
import ssoAad_014 from '@site/docs/console/iam/tutorials/images/sso_aad_014.png'
import ssoAad_015 from '@site/docs/console/iam/tutorials/images/sso_aad_015.png'
import ssoAad_016 from '@site/docs/console/iam/tutorials/images/sso_aad_016.png'
import ssoAad_017 from '@site/docs/console/iam/tutorials/images/sso_aad_017.png'
import ssoAad_018 from '@site/docs/console/iam/tutorials/images/sso_aad_018.png'

Nachfolgend finden Sie ein Beispiel für die Konfiguration des Authentifizierungsverzeichnisses einer Cloud-Temple-Organisation mit __Microsoft EntraID__.

Die Konfiguration Ihres Microsoft-Verzeichnisses auf Ebene einer Cloud-Temple-Organisation erleichtert die Authentifizierung Ihrer Benutzer an der Konsole. Dadurch lässt sich die Vervielfachung von Authentifizierungsfaktoren vermeiden und die Angriffsfläche verringern. Wenn Ihre Benutzer bereits an ihrem Microsoft-Konto angemeldet sind, erfolgt die Authentifizierung an den Diensten der Konsole nahtlos.

:::info[Azure AD und Microsoft EntraID]
Microsoft EntraID ist seit 2023 der neue Name von Azure Active Directory (Azure AD). Es handelt sich um dasselbe Produkt: Dieses Tutorial gilt gleichermaßen für beide Bezeichnungen.
:::

:::info[Verwendetes Protokoll]
Die Föderation mit EntraID erfolgt über __OpenID Connect (OIDC)__. Eine SAML-Konfiguration ist auf Ihrer Seite nicht erforderlich.
:::

## Die ausgetauschten Informationen

Die Einrichtung beruht auf einem Austausch in beide Richtungen. Hier die Einzelheiten vorab, damit Sie alles in einem Durchgang vorbereiten können.

### Was Sie uns übermitteln müssen

| Information | Bezeichnung im Azure-Portal | Wozu sie dient |
|---|---|---|
| __Application (client) ID__ | *Application (client) ID* | Identifiziert die Anwendung gegenüber EntraID |
| __Directory (tenant) ID__ | *Directory (tenant) ID* | Bestimmt die OpenID-Connect-Endpunkte Ihres Verzeichnisses |
| __Client Secret__ | *Client secret* → Spalte __Value__ | Authentifiziert die Konsole gegenüber EntraID |

Beide Kennungen finden Sie auf der Registerkarte __"Overview"__ Ihrer App-Registrierung; das Secret wird auf der Registerkarte __"Certificates & secrets"__ erstellt.

:::warning[Übermitteln Sie das Secret niemals im Text einer Anfrage]
Der Wert des Client Secret ist ein Authentifizierungsmerkmal. Fügen Sie ihn nicht in den Text einer Supportanfrage, in einen Kommentar oder in einen unverschlüsselten Anhang ein: Dort bliebe er dauerhaft einsehbar.

Geben Sie in Ihrer Anfrage an, dass Ihnen das Secret vorliegt, und übermitteln Sie es über den sicheren Kanal, den Ihr Cloud-Temple-Ansprechpartner Ihnen nennt. Die beiden Kennungen (Application ID und Directory ID) sind nicht vertraulich und dürfen in der Anfrage stehen.
:::

### Was Cloud Temple Ihnen übermittelt

Die __"Redirect URL"__, die für Ihre Organisation spezifisch ist. Sie ist in Ihrer EntraID-App-Registrierung zu hinterlegen (Schritt 3).

:::tip[Fordern Sie sie beim Öffnen Ihrer Anfrage an]
Diese URL hängt von Ihrer Organisation ab und lässt sich nicht erraten. Wenn Sie sie beim Öffnen Ihrer Supportanfrage anfordern, können Sie die gesamte Azure-Konfiguration in einem Durchgang vornehmen, ohne später darauf zurückkommen zu müssen.
:::

## Schritt 1: SSO-Konfiguration auf Seite von Microsoft EntraID

### Registrierung einer neuen Azure-Anwendung (Azure-Portal)

Für die Erstellung der __App Registration__ rufen Sie das Microsoft-Azure-Portal auf und wählen dann in Microsoft EntraID __"ADD > App Registration"__.

Geben Sie auf der Seite "Register an application" Folgendes an:

```
- Name: "SHIVA" angeben
- Supported account types: Accounts in this organizational directory only (<Ihr Azure-Tenant> only - Single tenant)
- Redirect URL: die von Cloud Temple bereitgestellte URL angeben. Falls sie Ihnen noch nicht vorliegt, lassen Sie das Feld leer und fahren Sie mit Schritt 3 fort.
```

<img src={ssoEntra_001} />

Die Angaben __Application (client) ID__ und __Directory (tenant) ID__ werden auf der Registerkarte "Overview" angezeigt. Notieren Sie sie: Es handelt sich um zwei der drei Informationen, die Sie in Ihrer Supportanfrage angeben müssen.

<img src={ssoEntra_002} />

### Festlegung eines Secret

Erstellen Sie auf der Registerkarte "Certificates & secrets" ein neues Secret.

<img src={ssoAad_004} />

:::warning[Kopieren Sie den Wert sofort]
Der Wert des Secret wird nur ein einziges Mal angezeigt, unmittelbar nach seiner Erstellung. Kopieren Sie den Inhalt der Spalte __"Value"__ und nicht den der Spalte __"Secret ID"__. Falls Sie diesen Wert verlieren, müssen Sie ein neues Secret erzeugen.
:::

<img src={ssoAad_005} />

:::caution[Gültigkeit auf 24 Monate begrenzt]
Das Ablaufdatum des Secret darf 24 Monate nicht überschreiten, auch nicht mit einem benutzerdefinierten Ablaufdatum. __Notieren Sie sich dieses Datum bereits jetzt__: Nach Ablauf funktioniert die SSO-Anmeldung für sämtliche Benutzer nicht mehr. Siehe Abschnitt [Erneuerung des Secret](#erneuerung-des-secret).
:::

### Freigabe der von der Konsole verwendeten Informationen

Die Konsole identifiziert Ihre Benutzer anhand der im Identitätstoken übermittelten Informationen. Nur eine Maßnahme ist Ihrerseits erforderlich: __die E-Mail-Adresse bereitstellen__.

Klicken Sie im Menü __"Token Configuration"__ auf __"Add optional claim"__. Wählen Sie "ID" als Tokentyp und aktivieren Sie "email".

<img src={ssoAad_006} />

Die Azure-Oberfläche fragt, ob Sie eine Berechtigung hinzufügen möchten, die das Lesen der E-Mail-Adresse eines Benutzers erlaubt (Microsoft Graph email). Aktivieren Sie das Kontrollkästchen und bestätigen Sie.

<img src={ssoAad_007} />

Rufen Sie anschließend "API permissions" auf und klicken Sie auf __"Grant admin consent for &lt;Ihre Organisation&gt;"__.

<img src={ssoAad_008} />

Zur Information: Hier alle von der Konsole genutzten Informationen:

| Information | Verwendung | Maßnahme Ihrerseits |
|---|---|---|
| `email` | Anmeldeadresse des Benutzers | __Ja__ — als optionaler Claim zu deklarieren (siehe oben) |
| `oid` | Stabile Zuordnung des Konsolenkontos zur Identität in Ihrem Verzeichnis, auch bei Änderung der E-Mail-Adresse | Keine — wird von EntraID nativ ausgestellt |
| `given_name`, `family_name` | In der Konsole angezeigter Vor- und Nachname | Keine — im Bereich `profile` enthalten |

### Zusätzliche Sicherheitseinstellungen (optional, aber empfohlen)

Standardmäßig erlaubt Microsoft EntraID in dieser Konfiguration jedem Benutzer Ihres Azure-Tenants, sich an Ihrer Cloud-Temple-Organisation anzumelden. Sie können den Zugriff auf Ebene der __"App Registration"__ einschränken, sodass nur eine Liste von Benutzern oder Gruppen zugelassen ist.

Gehen Sie dazu wie folgt vor.

#### Zugriff auf die zusätzlichen Einstellungen der "App Registration"

##### Option 1

Rufen Sie die Registerkarte "Overview" auf und klicken Sie auf den Namen der Anwendung (der Link hinter "Managed application").

<img src={ssoAad_009} />

##### Option 2

Rufen Sie die "Enterprise applications" auf und suchen Sie nach dem Namen der zuvor erstellten Anwendung.

<img src={ssoAad_010} />

#### Beschränkung der Authentifizierung auf zugewiesene Benutzer

Legen Sie hier fest, dass ein Benutzer der Anwendung zugewiesen sein muss, um sich authentifizieren zu dürfen:

<img src={ssoAad_011} />

#### Zuweisung von Benutzern und Gruppen zur Anwendung

Nur die der Anwendung zugewiesenen Gruppen und Benutzer können sich über die App Registration an Ihrer Cloud-Temple-Organisation anmelden.

<img src={ssoAad_012} />

Wenden Sie die Zuweisung abschließend durch Klick auf "Assign" an.

<img src={ssoAad_013} />

Ab jetzt können sich die der Anwendung zugewiesenen Benutzer über die erstellte Anwendung an Ihrer Cloud-Temple-Organisation anmelden.

## Schritt 2: SSO-Konfiguration Ihrer Organisation beantragen

Dieser Teil der Konfiguration wird auf Ebene der Organisation vom Cloud-Temple-Team durchgeführt.

Stellen Sie dazu __eine Supportanfrage__ in der Konsole, in der Sie Ihren Wunsch nach einer Microsoft-EntraID-Föderation angeben, und nennen Sie:

- den Namen Ihrer Organisation;
- den Namen eines Ansprechpartners mit E-Mail-Adresse und Telefonnummer für den Abschluss der Konfiguration;
- die in Schritt 1 notierte __Application (client) ID__;
- die in Schritt 1 notierte __Directory (tenant) ID__.

Übermitteln Sie das __Client Secret__ über den von Ihrem Ansprechpartner genannten sicheren Kanal und nicht im Text der Anfrage.

Sobald die Konfiguration auf Seite der Konsole abgeschlossen ist, wird der angegebene Ansprechpartner informiert und erhält die zu hinterlegende __"Redirect URL"__.

## Schritt 3: Hinterlegung der "Redirect URL"

Falls Sie die "Redirect URL" bei der Erstellung der Anwendung nicht angegeben haben, fügen Sie sie jetzt hinzu.

Klicken Sie auf der Startseite der App Registration im Menü "Overview" auf "Add a Redirect URL".

<img src={ssoAad_014} />

Rufen Sie anschließend "Add a platform" auf und fügen Sie eine Plattform vom Typ Web hinzu.

<img src={ssoAad_015} />

Geben Sie die von Cloud Temple bereitgestellte "Redirect URL" an.

<img src={ssoAad_016} />

Nach dem Hinzufügen der "Redirect URL" sollten Sie dieses Ergebnis erhalten.

<img src={ssoAad_017} />

Es kann einige Minuten dauern, bis die Konfiguration der "Redirect URL" wirksam wird.

## Schritt 4: Überprüfung

Sobald alle Schritte abgeschlossen sind, können Sie sich über Ihr SSO an Ihrer Cloud-Temple-Organisation anmelden.

<img src={ssoAad_018} />

:::info[Berechtigungen neuer Benutzer]
Die Identitätsföderation regelt die __Authentifizierung__, nicht die __Berechtigungen__. Ein Benutzer, der sich zum ersten Mal über SSO anmeldet, verfügt über keinerlei Rechte, solange ein Eigentümer der Organisation ihm keine über die Konsole zugewiesen hat.
:::

## Erneuerung des Secret

Das Client Secret läuft spätestens 24 Monate nach seiner Erstellung ab. Nach Ablauf funktioniert die SSO-Anmeldung für sämtliche Benutzer nicht mehr. Planen Sie die Erneuerung rechtzeitig:

1. Erstellen Sie unter "Certificates & secrets" ein __neues__ Secret, ohne das alte zu löschen;
2. übermitteln Sie dessen Wert über den sicheren Kanal an Cloud Temple, indem Sie eine Supportanfrage stellen;
3. löschen Sie das alte Secret im Azure-Portal, sobald unsere Teams die Umstellung bestätigt haben.

Indem Sie beide Secrets während der Umstellung beibehalten, vermeiden Sie jede Betriebsunterbrechung.

## Bewährte Vorgehensweisen

- __Steuern Sie den Zugriff über Gruppen__ statt über einzelne Benutzer: Der Zugang oder Abgang einer Person wird dann in Ihrem Verzeichnis geregelt, ohne Eingriff in der Konsole.
- __Aktivieren Sie die Multi-Faktor-Authentifizierung__ für die Anwendung in Ihren EntraID-Richtlinien für bedingten Zugriff: Sie gilt dann auch für den Zugang zur Konsole.
- __Richten Sie eine Erinnerung__ vor dem Ablaufdatum des Secret ein.
- __Behalten Sie mindestens ein lokales Eigentümerkonto__ in Ihrer Cloud-Temple-Organisation außerhalb der Föderation, um bei Nichtverfügbarkeit Ihres Verzeichnisses weiterhin Zugang zu haben.

## Fehlerbehebung

| Symptom | Wahrscheinliche Ursache |
|---|---|
| `AADSTS50011`: Die Redirect-URL stimmt nicht überein | Die in Azure hinterlegte "Redirect URL" weicht von der durch Cloud Temple bereitgestellten ab. Prüfen Sie sie Zeichen für Zeichen, einschließlich eines fehlenden abschließenden `/`. |
| `AADSTS7000215`: ungültiges Secret | Das Secret ist abgelaufen, oder es wurde die "Secret ID" statt des "Value" übermittelt. |
| `AADSTS50105`: Benutzer nicht zugewiesen | Die Option "Assignment required" ist aktiv und der Benutzer ist der Anwendung nicht zugewiesen. |
| Die Anmeldeschaltfläche erscheint nicht auf der Seite | Die Konfiguration ist auf Seite von Cloud Temple noch nicht aktiv. |
| Der Benutzer wird authentifiziert, die Konsole verweigert jedoch den Zugriff | Der Claim `email` fehlt im Token, oder dem Benutzer wurden keine Rechte zugewiesen. |

## Support

Bei Fragen zu diesem Vorgehen stellen Sie bitte eine Supportanfrage über Ihre Konsole. Geben Sie den Namen Ihrer Organisation sowie den Zeitstempel eines fehlgeschlagenen Anmeldeversuchs an: So lässt sich der entsprechende Eintrag auffinden.
