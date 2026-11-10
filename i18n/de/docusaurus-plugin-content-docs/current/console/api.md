---
title: Dokumentation der API der Konsole
---
import ShivaProfil001 from '@site/docs/console/images/shiva_profil_001.png'
import ShivaProfil002 from '@site/docs/console/images/shiva_profil_002.png'
import ShivaProfil003 from '@site/docs/console/images/shiva_profil_003.png'
import ShivaProfil004 from '@site/docs/console/images/shiva_profil_004.png'
import ShivaProfil005 from '@site/docs/console/images/shiva_profil_005.png'
import ShivaApi001 from '@site/docs/console/images/shiva_api_001.png'
import ShivaApi002 from '@site/docs/console/images/shiva_api_002.png'
import ShivaApi003 from '@site/docs/console/images/shiva_api_003.png'
import ShivaApi004 from '@site/docs/console/images/shiva_api_004.png'

## Einführung

Die Cloud Temple API ermöglicht es Ihnen, die Ressourcen der in die Konsole integrierten Produkte programmgesteuert zu erstellen und zu verwalten. Alles, was Sie über die Cloud Temple Konsole tun können, lässt sich auch über die API umsetzen – von der Erstellung virtueller Maschinen bis zur Konfiguration der Identitäts- und Zugriffsverwaltung.

Diese Dokumentation führt Sie durch die Nutzung der Cloud Temple API, von der Authentifizierung über bewährte Verfahren bis hin zur Lebenszyklusverwaltung der Endpunkte.

## Quickstart: Ihre erste API-Anfrage

:::info[Zusammenfassung – 3 Schritte zum Start]
1. 🔑 **Ihren PAT generieren** über die Konsole
2. 🔄 **ID und Secret gegen ein JWT austauschen**
3. 🚀 **Die API mit diesem JWT** im Header `Authorization` aufrufen
:::

### Voraussetzungen

Bevor Sie beginnen, prüfen Sie folgende Punkte:

- **Konto und Tenant**: Ihr Konto verfügt über die Berechtigung `iam_offline_access` im Tenant, in dem Sie den PAT **erstellen** möchten.
- **Berechtigungen des PAT**: Wählen Sie nur die Berechtigungen aus, die für die Operationen erforderlich sind, die Ihr Skript ausführt. Es ist nicht erforderlich, `iam_offline_access` zu den Berechtigungen des PAT hinzuzufügen, um ihn am Authentifizierungspunkt zu verwenden.
- **Netzwerkzugriff**: Die ausgehende öffentliche IP-Adresse, die von Ihrem Skript verwendet wird, muss für die Organisation freigegeben sein. Siehe [Hinzufügen einer IP-Adresse unter Verwaltung > Zugriff](./onboarding.md#eine-ip-adresse-hinzufügen). Planen Sie etwa **10 Minuten** für die Berücksichtigung einer Hinzufügung ein. Das Anzeigen und Ändern dieser Liste erfordert jeweils `console_public_access_read` und `console_public_access_write`; diese Berechtigungen sind für die Authentifizierung des PAT nicht erforderlich.
- **Werkzeuge**: Die folgenden Beispiele verwenden `curl` und ein Bash-kompatibles Shell.

:::warning[Browser und Skript können unterschiedliche IPs verwenden]
Eine erfolgreiche Verbindung zur Konsole bestätigt nicht den Netzwerkzugriff Ihres Skripts. Ein Proxy, ein VPN oder ein CI-Runner kann eine andere ausgehende öffentliche IP-Adresse verwenden. Die konfigurierte Adresse zum Erreichen eines Proxys ist nicht unbedingt die öffentliche Adresse, mit der er ins Internet hinausgeht. Lassen Sie diese durch Ihr Netzwerkteam bestätigen und geben Sie sie für die betreffende Organisation frei.
:::

### Schritte

1. **Ihren PAT generieren**: Melden Sie sich in der [Cloud Temple Konsole](https://shiva.cloud-temple.com/login) an, wählen Sie den betreffenden Tenant aus und erstellen Sie einen Personal Access Token (siehe [API-Schlüssel](#api-schlüssel-personal-access-token)). Bewahren Sie dessen **ID** und **Secret** auf. Die erwartete ID ist die des PAT, nicht die des Tenants, der Organisation oder des Benutzers.

2. **Ein JWT-Zugriffstoken abrufen**: Ersetzen Sie die fiktiven Werte `ID_DU_PAT` und `SECRET_DU_PAT` durch die des gleichen PAT, der nicht abgelaufen und nicht widerrufen ist. Senden Sie eine **POST**-Anfrage mit einem gültigen JSON-Körper und dem Header `Content-Type: application/json` an die vollständige URL unten, die **`/api/iam`** enthält. Ein vorheriges Bearer-Token ist an diesem Authentifizierungspunkt nicht erforderlich.

```bash
ACCESS_TOKEN=$(curl --fail --silent --show-error \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{"id":"ID_DU_PAT","secret":"SECRET_DU_PAT"}' \
  'https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token')
```

Bei Erfolg (HTTP 200) enthält der Antwortkörper das JWT, das hier in der Variable `ACCESS_TOKEN` gespeichert wird. Falls der Befehl fehlschlägt, konsultieren Sie die [Fehlerbehebung](#fehlerbehebung-der-pat-authentifizierung), bevor Sie fortfahren.

3. **Eine API mit dem JWT aufrufen**: Verwenden Sie dieses Zugriffstoken in `Authorization: Bearer`. Das folgende Beispiel fragt die Liste der IAM-Rollen ab:

```bash
curl --fail --silent --show-error \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  'https://shiva.cloud-temple.com/api/iam/v2/roles'
```

Das erwartete Bearer ist das **in Schritt 2 erhaltene JWT**, weder die ID noch das Secret des PAT. Die folgenden Operationen unterliegen weiterhin den dem PAT erteilten Berechtigungen.

:::caution[Zugangsdaten schützen]
Die Werte im Beispiel sind fiktiv. Stellen Sie in Ihren Automatisierungen das Secret über Ihren Secret-Manager bereit und vermeiden Sie, es im Code, im Shell-Verlauf oder in den Protokollen zu speichern. Teilen Sie weder das Secret des PAT noch das erhaltene JWT.
:::

## Authentifizierung

### API-Schlüssel (Personal Access Token)

Der __API-Schlüssel__ dient der Authentifizierung, wenn Sie Anfragen an die API senden möchten. Die Generierung eines API-Schlüssels, auch __Personal Access Token (PAT)__ genannt, ist eine sichere Methode, sich mit den API-Konsolen zu verbinden, ohne eine grafische Benutzeroberfläche zu verwenden. Jeder dieser Tokens ist an einen Tenant und den Benutzer gebunden, der ihn erstellt hat.

Die Erstellung dieses Tokens erfolgt über Ihr Konto und erfordert die Berechtigung `iam_offline_access`. Es ist möglich, mehrere Schlüssel zu generieren und für jeden die Berechtigungen im Rahmen Ihrer Rechte zu konfigurieren. Diese Erstellungsberechtigung ist von den API-Operation-Berechtigungen des PAT getrennt: Der Austausch seiner ID und seines Secrets gegen ein JWT erfordert nicht, dass er selbst `iam_offline_access` trägt.

#### Einen API-Schlüssel erstellen

Um einen API-Schlüssel zu erstellen, müssen Sie nur auf Ihr __Profil klicken__:

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

Im Profilmenü auf __'Persönliches Zugriffstoken'__ klicken

<img src={ShivaProfil003} />

Sie sehen nun auf dem Bildschirm alle API-Schlüssel, die für diesen Benutzer in diesem Tenant erstellt wurden. Auf __'Neues persönliches Zugriffstoken'__ klicken

<img src={ShivaProfil002} />

Sie müssen dann:

- Den Namen dieses neuen Tokens angeben,
- Ein Ablaufdatum angeben (maximal 12 Monate Gültigkeit),
- Die dem Token zugeordneten Berechtigungen auswählen.

Die Details zu Ihrem Token werden dann angezeigt. __Achtung, ein nachträglicher Zugriff ist nicht mehr möglich.__

Wenn Sie diese Informationen nicht notieren, müssen Sie das Token löschen und neu erstellen.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Aus Sicherheitsgründen wird empfohlen, mehrere Tokens mit jeweils einem spezifischen Zweck zu erstellen (ein Token pro Anwendung oder pro Geschäftsprozess), anstatt ein Token mit allen Rechten zu erstellen.

Sie sehen anschließend das neu erstellte Token und sein künftiges Ablaufdatum.

<img src={ShivaProfil005} />

:::info[Lebenszyklus des Authentifizierungstokens]
Wenn Sie Ihren __Personal Access Token (PAT)__ zur Authentifizierung gegenüber der API verwenden, erhalten Sie als Antwort ein Zugriffstoken. Es ist wichtig zu beachten, dass dieses Zugriffstoken ein __JSON Web Token (JWT)__ mit einer begrenzten Lebensdauer ist.

- __Lebensdauer__: Jedes JWT-Token ist für eine Dauer von __5 Minuten__ gültig.
- __Prüfung__: Sie können das Ausstellungsdatum (`iat`) und das Ablaufdatum (`exp`) einsehen, indem Sie das JWT lokal entschlüsseln. Übermitteln Sie kein aktives Token an einen externen Entschlüsselungsdienst. Die Entschlüsselung allein überprüft nicht dessen Signatur.

Sobald das Token abgelaufen ist, müssen Sie sich mit Ihrem PAT erneut authentifizieren, um ein neues zu erhalten. Es wird daher empfohlen, diesen Lebenszyklus in Ihren Skripten und Anwendungen durch eine automatische Token-Erneuerung zu verwalten.
:::

### Fehlerbehebung der PAT-Authentifizierung

Beginnen Sie damit, die fehlschlagende Anfrage zu identifizieren: **der ID/Secret-Austausch** oder **der API-Operation-Aufruf mit dem JWT**. Die durchzuführenden Prüfungen sind unterschiedlich.

| Symptom | Prüfungen |
|---|---|
| Authentifizierungsanfrage abgelehnt | Prüfen Sie die Methode **POST**, die vollständige URL `https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token`, den Typ `application/json` und einen Körper, der die Zeichenfolgen `id` und `secret` enthält. Wählen Sie in Postman einen Körper **raw / JSON**. Senden Sie diesen Körper nicht mit der Methode GET. |
| Authentifizierungsschlag trotz konformer Anfrage | Prüfen Sie, dass ID und Secret zum **gleichen PAT** gehören, im erwarteten Tenant, und dass dieser PAT weder abgelaufen noch widerrufen ist. Verwenden Sie nicht die ID des Tenants anstelle der ID des PAT. |
| **HTTP 403**, insbesondere mit einer HTML-Fehlerseite | Dieser Status beweist nicht einen Mangel an IAM-Berechtigungen. Prüfen Sie die tatsächliche ausgehende öffentliche IP-Adresse und die Zugriffsliste der Organisation, dann den Proxy und die Form der Anfrage: Ein Proxy oder ein Web Application Firewall (WAF) kann die Anfrage ablehnen, bevor sie die API erreicht. Ein HTML-Körper kann helfen, diese Ablehnung zu identifizieren, ohne jedoch auszureichen, um deren Ursache zu bestimmen. |
| Der Austausch gelingt, aber der API-Operation-Aufruf schlägt fehl | Prüfen Sie, dass der Bearer-Header das erhaltene JWT enthält, dass dieses nicht abgelaufen ist und dass der PAT die für die Operation im richtigen Tenant erforderlichen Berechtigungen besitzt. Das Hinzufügen von `iam_offline_access` zum PAT löst eine Ablehnung bei einer API-Operation nicht allein. |

Wenn das Problem persistiert, übermitteln Sie dem Support die Testzeit **mit der Zeitzone**, die Methode und die URL, den HTTP-Status, die bestätigte ausgehende öffentliche IP-Adresse sowie die Antwort und eine mögliche Anfragekennung. Stellen Sie einen bereinigten Screenshot oder einen Befehl bereit: Maskieren Sie das Secret, das JWT, die Header `Authorization` und `Proxy-Authorization` sowie die Cookies. Der HTTP-Status allein reicht nicht aus, um mit Sicherheit die Komponente zu identifizieren, die die Anfrage abgelehnt hat.

## Zugriff auf das API-Portal

Die OpenAPI 3.0 (Swagger)-Dokumentation der APIs der Cloud Temple Konsole ist direkt in der Anwendung verfügbar:

<img src={ShivaApi001} />

Die geschützten Operationen der APIs erfordern den Header __`Authorization`__ mit dem Bearer JWT, das während der Authentifizierungsphase erhalten wurde. Der oben beschriebene initiale Austausch der ID und des Secrets des PAT erfordert diesen Header nicht.

Die URL der Zugangspunkte wird direkt in __Swagger__ angegeben (im Objekt "Servers" jeder API-Seite).

### Die interaktive Dokumentation erkunden

Das API-Portal ermöglicht es Ihnen:

- Alle verfügbaren Endpunkte pro Modul einzusehen
- Anfragen direkt aus der Oberfläche zu testen
- Die Datenmodelle (Schemata) für jede Ressource anzuzeigen
- Die möglichen Antwortcodes für jeden Endpunkt einzusehen

## Struktur der Endpunkte

### URL-Format

Die URLs der Cloud Temple API folgen einer konsistenten Struktur:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{ressource}
```

Wobei:
- `{module}`: Das betreffende Modul (compute, iam, network, backup usw.)
- `{version}`: Die API-Version (v1, v2 usw.)
- `{ressource}`: Die zu bearbeitende Ressource (virtual-machines, users, networks usw.)

### Beispiele für Endpunkte

```
# Machines virtuelles (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identité et accès (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Réseaux
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Organisation nach Modulen

Die Cloud Temple API ist in funktionale Module unterteilt:

| Modul | Beschreibung | Basis-URL |
|--------|-------------|----------|
| Cloud Temple Konsole | Allgemeine Funktionen | `/api/v1/` |
| Identität (IAM) | Verwaltung von Benutzern und Zugriffen | `/iam/v1/` |
| IaaS VMware | VMware-Virtualisierungsressourcen | `/compute/v1/` |
| OpenIaaS | Xen Orchestra-Ressourcen | `/openiaas/v1/` |
| S3 | Objektspeicher | `/s3/v1/` |
| OpenShift | PaaS-Plattform | `/openshift/v1/` |
| Bastion | SSH/RDP-Bastion-Appliances | `/bastion/v1/` |
| Netzwerk | Netzwerkverwaltung Ebene 2 und 3 | `/network/v1/` |
| Hosting | Colocation und Housing | `/housing/v1/` |
| Marketplace | Katalog von Lösungen | `/marketplace/v1/` |
| Support | Tickets und Assistance | `/support/v1/` |
| Benachrichtigung | Benachrichtigungssystem | `/notification/v1/` |
| LLMaaS | Künstliche Intelligenz | `/llmaas/v1/` |

## Die Aktivitäten

Das Tracking von Schreib-Anfragen (POST, PUT, PATCH, DELETE) wird über die Aktivitätsverwaltung sichergestellt. Jede Anfrage dieses Typs erzeugt automatisch eine zugehörige Aktivität. Ein HTTP-Statuscode 201 bestätigt die erfolgreiche Erstellung der Aktivität. Die eindeutige Kennung dieser Aktivität wird in den Antwortheadern unter dem Schlüssel 'Location' zurückgegeben.

<img src={ShivaApi002} />

Sobald die Kennung abgerufen wurde, ist es möglich, auf die Details der Aktivität zuzugreifen, indem die API des Moduls Activity verwendet wird:

<img src={ShivaApi003} />

Der Inhalt der Aktivität umfasst alle wesentlichen Informationen zur Identifizierung der Operation, ihres Ausführungsdatums sowie ihres Fortschrittszustands. Hier ist das Modell einer Aktivität:

```json
{
  "id": "UUIDV4",
  "tenantId": "UUIDV4",
  "description": "STRING",
  "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
  "tags": "STRING[]",
  "initiator": "UUIDV4",
  "creationDate": "DATE",
  "concernedItems": [
    {
      "type": "string",
      "id": "string"
    }
  ],
  "state": "CompletedState | RunningState | WaitingState | FailedState",
  "operationType": "read" | "write"
}
```

### Zustände einer Aktivität

Das Objekt __state__ kann je nach Zustand der Aktivität verschiedene Formen annehmen, nämlich:

#### waiting

Zustand, bevor die Operation begonnen hat:

```json
waiting: {}
```

#### running

Zustand, wenn die Operation läuft:

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### failed

Zustand, wenn die Operation fehlgeschlagen ist:

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completed

Zustand, wenn die Operation abgeschlossen ist:

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Kennung der erstellten Ressource]
Die Kennung (UUIDv4) der erstellten Ressource ist im Ergebnis der Aktivität verfügbar, sobald diese abgeschlossen ist.
:::

## API-Limits

### Warum Limits?

Die Cloud Temple Konsole definiert __Obergrenzen für das Anfragevolumen__, das ein Benutzer innerhalb eines bestimmten Zeitraums an die API senden kann. Die Einführung dieser Frequenzgrenzen ist eine gängige Maßnahme in der API-Verwaltung, die aus mehreren wesentlichen Gründen übernommen wird:

- __Missbrauchsvorbeugung__: Diese Limits tragen zur Wahrung der Integrität der API bei, indem sie missbräuchliche oder unvorsichtige Nutzungen verhindern, die deren Funktionsfähigkeit gefährden könnten.
- __Gewährleistung der Servicequalität__: Durch die Regulierung des API-Zugriffs sorgen wir für eine faire Ressourcenverteilung, sodass alle Benutzer von einem stabilen und leistungsfähigen Erlebnis profitieren.

Nehmen wir das Beispiel eines schlecht konzipierten oder ineffizienten Skripts, das wiederholte API-Aufrufe versucht und dabei die Ressourcen überlasten und die Leistung beeinträchtigen könnte. Durch die Festlegung von Anfragegrenzen verhindern wir diese Situationen und stellen sicher, dass __ein flüssiger und unterbrechungsfreier Service__ für unsere gesamte Kundschaft aufrechterhalten wird.

### Welche Ratenlimits gelten für die API der Cloud Temple-Konsole?

Wir wenden quantitative Einschränkungen für die Interaktionen der Benutzer mit der Konsole für jedes Produkt an.

Die Limits sind in __Anfragen pro Sekunde (r/s) und pro Quell-IP__ definiert. Wird der Schwellenwert überschritten, antwortet das System mit dem HTTP-Fehlercode 429, der signalisiert, dass das zulässige Anfrage-Limit überschritten wurde.

Hier sind die definierten Limits:

| Produkt | Schwellenwert |
|---|---|
| Cloud Temple-Konsole | 25 r/s |
| Identität (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Netzwerk | 25 r/s |
| Hosting | 25 r/s |
| Marketplace | 25 r/s |
| Support | 25 r/s |
| Benachrichtigung | 25 r/s |
| LLMaaS | 25 r/s |

### Spezifische Routen

Bestimmte API-Endpunkte, insbesondere solche, die mit der Authentifizierung oder sensiblen Aktionen zusammenhängen, unterliegen strengeren Limits zur Stärkung der Sicherheit und Gewährleistung der Stabilität.

| Route | Schwellenwert |
|---|---|
| Authentifizierung (IAM) | 5 r/s |
| IaaS – Speicher (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min – 5 r/h |

### Wie funktionieren die Ratenlimits?

Wenn die Anzahl der an einen API-Endpunkt gesendeten Anfragen das zulässige Limit überschreitet, reagiert der API-Endpunkt, indem er __einen HTTP-Antwortcode 429__ zurückgibt. Dieser Code gibt an, dass der Benutzer die Anzahl der erlaubten Anfragen überschritten hat. In diesem Fall liefert der API-Endpunkt zusätzlich ein JSON-Objekt als Antwort, das detaillierte Informationen zur angewendeten Drosselung enthält:

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### Wie vermeidet man zu viele Anfragen?

Es wird empfohlen, die Anzahl der API-Aufrufe in Ihrer Automatisierung so zu begrenzen, dass Sie unter dem für den Endpunkt festgelegten Ratenlimit bleiben.

Diese Situation tritt häufig auf, wenn mehrere Anfragen parallel ausgeführt werden, beispielsweise mit mehreren Prozessen oder Threads.

Es gibt mehrere Möglichkeiten, die Effizienz Ihrer Automatisierung zu verbessern, darunter die Nutzung von __Caching-Mechanismen__ und die Implementierung eines __Retry-Systems mit exponentiellem Backoff__. Dabei wird bei einer Ratenlimit-Fehlermeldung eine kurze Pause eingelegt und die Anfrage anschließend erneut versucht. Wenn die Anfrage erneut fehlschlägt, wird die Pausendauer schrittweise verlängert, bis die Anfrage erfolgreich ist oder eine maximale Anzahl von Wiederholungsversuchen erreicht wird.

Dieser Ansatz bietet zahlreiche Vorteile:

- __Exponentielles Backoff__ stellt sicher, dass die ersten Versuche schnell ausgeführt werden, während bei wiederholtem Fehlschlag längere Wartezeiten eingeplant sind.
- Das Hinzufügen einer __zufälligen Variation__ zur Pause trägt dazu bei, dass nicht alle Versuche gleichzeitig erfolgen.

Es ist wichtig zu beachten, dass __fehlgeschlagene Anfragen Ihr Ratenlimit nicht beeinträchtigen__. Allerdings kann das ständige erneute Senden einer Anfrage langfristig keine tragfähige Lösung sein, da dieses Verhalten in Zukunft geändert werden könnte. Wir empfehlen daher, sich nicht ausschließlich auf diesen Mechanismus zu verlassen.

Die Bibliotheken __[Backoff](https://pypi.org/project/backoff/)__ und __[Tenacity](https://pypi.org/project/tenacity/)__ in Python sind gute Ausgangspunkte für die Implementierung von Backoff-Strategien.

## Lebenszyklus und Deprecation von Endpunkten

### Deprecation-Richtlinie

Cloud Temple verpflichtet sich, die Kompatibilität seiner API langfristig aufrechtzuerhalten. Wenn jedoch eine Weiterentwicklung der API erforderlich ist (neue Funktionen, Optimierungen, Sicherheitskorrekturen), können bestimmte Endpunkte als veraltet markiert und anschließend entfernt werden.

#### Regel der mindestens 3 Monate

Wenn ein Endpunkt als veraltet markiert wird:

1. **Offizielle Ankündigung**: Die Deprecation wird in den Versionshinweisen der Konsole angekündigt
2. **Übergangszeitraum**: Der Endpunkt bleibt **mindestens 3 Monate nach der Ankündigung zugänglich und funktionsfähig**
3. **Entfernungsdatum**: Ein genaues Datum für die endgültige Entfernung wird bereits bei der Ankündigung mitgeteilt
4. **Dokumentierte Alternative**: Der neue Ersatz-Endpunkt ist dokumentiert und verfügbar

Diese 3-Monats-Regel gibt Ihnen die nötige Zeit, Ihren Code anzupassen und auf die neuen Endpunkte zu migrieren.

### Wie erkennt man einen veralteten Endpunkt?

#### Im API-Portal (Swagger)

Veraltete Endpunkte erscheinen in der Swagger-Dokumentation durchgestrichen:


~~POST /v1/ancien/endpoint~~

Die Beschreibung des Endpunkts enthält:
- Das Datum der Deprecation-Ankündigung
- Das geplante Entfernungsdatum
- Den empfohlenen Ersatz-Endpunkt

<img src={ShivaApi004} />

### Best Practices für die Verwaltung von Deprecations

1. **Veraltete Funktionen überwachen**: Prüfen Sie regelmäßig die veralteten Funktionen in der Konsole, um angekündigte Deprecations und deren geplantes Entfernungsdatum zu kennen.

2. **Migrationen planen**: Sobald eine Deprecation angekündigt wird, planen Sie die Migration Ihres Codes auf den neuen Endpunkt innerhalb von 3 Monaten.

3. **Neue Endpunkte testen**: Testen Sie die neuen Endpunkte, sobald sie verfügbar sind, auch während des Übergangszeitraums.

4. **Abhängigkeiten dokumentieren**: Führen Sie eine Liste der Endpunkte, die Ihre Anwendung nutzt, um zukünftige Migrationen zu erleichtern.

## Best Practices

### Token-Sicherheit

:::danger[Essentielle Sicherheitsregeln]
- 🚫 Token niemals in versioniertem Code (Git usw.) offenlegen
- 🔐 Umgebungsvariablen zur Speicherung von Tokens verwenden
- 🎯 Tokens mit minimalen Berechtigungen erstellen (Prinzip der geringsten Rechte)
- 🔄 Tokens regelmäßig erneuern (maximal 12 Monate)
- ⚠️ Kompromittierte Tokens sofort widerrufen
:::

### Fehlerbehandlung

Behandeln Sie HTTP-Fehler immer in Ihrem Code. Achten Sie besonders auf die folgenden Codes:

| Code | Beschreibung | Empfohlene Maßnahme |
|------|-------------|-------------------|
| **401** Unauthorized | Token abgelaufen oder ungültig | Mit Ihrem PAT neu authentifizieren |
| **403** Forbidden | Unzureichende Berechtigungen | Berechtigungen des Tokens prüfen |
| **429** Too Many Requests | Ratenlimit erreicht | Warten, bevor erneut versucht wird (Backoff) |
| **500/503** Server Error | Vorübergehender Serverfehler | Später erneut versuchen |

### Optimierung der API-Aufrufe

- Pagination für umfangreiche Listen verwenden
- Daten, die sich selten ändern, cachen
- Filter verwenden, um die zurückgegebenen Daten zu begrenzen
- Operationen zusammenfassen, wenn möglich
- Den Status asynchroner Aktivitäten verfolgen, anstatt intensives Polling durchzuführen

### Retry mit exponentiellem Backoff

Um vorübergehende Fehler oder Rate Limiting (HTTP 429) zu behandeln, implementieren Sie eine Retry-Strategie mit exponentiellem Backoff:

:::tip[Empfohlene Retry-Strategie]
- ⏱️ **Progressives Warten**: 1s, 2s, 4s, 8s...
- 🎲 **Zufällige Variation**: Verhindert, dass alle Clients gleichzeitig erneut versuchen
- 🔄 **Versuchslimit**: Maximum 3–5 Versuche
- 📚 **Python-Bibliotheken**: [Backoff](https://pypi.org/project/backoff/) oder [Tenacity](https://pypi.org/project/tenacity/)
:::
