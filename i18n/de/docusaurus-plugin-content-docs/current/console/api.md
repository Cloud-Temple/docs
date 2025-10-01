---
title: Dokumentation API
---

import ShivaProfil001 from './images/shiva_profil_001.png'
import ShivaProfil002 from './images/shiva_profil_002.png'
import ShivaProfil003 from './images/shiva_profil_003.png'
import ShivaProfil004 from './images/shiva_profil_004.png'
import ShivaProfil005 from './images/shiva_profil_005.png'
import ShivaApi001 from './images/shiva_api_001.png'
import ShivaApi002 from './images/shiva_api_002.png'
import ShivaApi003 from './images/shiva_api_003.png'
import ShivaApi004 from './images/shiva_api_004.png'

## API Keys

The __API Key__, also known as a __Personal Access Token (PAT)__, serves as an authentication method when you need to make requests to the Shiva API. Generating an API key is a secure way to connect to Shiva's APIs without relying on a graphical interface. Each token is associated with a tenant and the user who created it.

Creating these tokens can be done from your account. You can generate multiple keys, configuring permissions for each within the limits of your access rights.

To create an API key, simply:

<img src="ShivaProfil001" />

From the profile menu, select __'Personal Access Token'__.

<img src="ShivaProfil003" />

You'll then see a list of all API keys created for this user in this tenant. Click on __'New Personal Access Token'__.

<img src="ShivaProfil002" />

You will need to:

- Provide a name for the new token,
- Specify an expiration date (maximum 12 months validity),
- Choose the permissions associated with the token.

The details of your token are then displayed. __Note:__ It's no longer possible to view these after creation.

If you forget these details, you'll need to destroy and regenerate the token.

<img src="ShivaProfil004" />

For security reasons, it is recommended to create multiple tokens with specific purposes (one for each application or business process) rather than using one token with all permissions.

You will then see the newly created token and its upcoming expiration date.

<img src="ShivaProfil005" />

## Zugruß zum API-Portal

Die Dokumentation OpenAPI 3.0 (Swagger) der Cloud-Console-APIs von Cloud Temple ist direkt in der Anwendung verfügbar:

<img src={ShivaApi001} />

Der Zugriff auf die APIs erfordert eine Authentifizierung. Nach erfolgreicher Authentifizierung müssen alle Operationen den Header `__'Authorization'__ enthalten, der den bearer Access Token enthält, der während der Authentifizierungsphase erhalten wurde.

Die URL der Zugriffsstellen wird direkt in __Swagger__ (im Objekt "Servers" jeder Seite der APIs) angegeben.

## Aktivitäten

Die Überwachung von Anfragen des Typs Erstellung (POST, PUT, PATCH, DELETE) erfolgt über die Verwaltung von Aktivitäten. Jede solche Anfrage generiert automatisch eine entsprechende Aktivität. Ein Statuscode HTTP 201 bestätigt die erfolgreiche Erstellung der Aktivität. Der eindeutige Identifikator dieser Aktivität wird im Antwortheader unter der Schlüssel "Location" zurückgegeben.

<img src={ShivaApi002} />

Nachdem der Identifikator abgerufen wurde, kann man die Details der Aktivität über die API des Moduls Aktivität erhalten:

<img src={ShivaApi003} />

Der Inhalt der Aktivität enthält alle notwendigen Informationen zur Identifizierung der Operation, zur Datum der Ausführung sowie zum Fortschritt. Hier ist ein Beispiel für eine Aktivität:

```json
{
    "tenantId": "UUIDV4",
    "description": "STRING",
    "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
    "tags": "STRING[]",
    "initiator": "UUIDV4",
    "concernedItems": [
        {
        "type": "string",
        "id": "string"
        }
    ],
    "id": "UUIDV4",
    "creationDate": "DATE",
    "operationType": "read" | "write",
    "state": "CompletedState | RunningState | WaitingState | FailedState"
}
```

Das Objekt __state__ kann je nach Zustand der Aktivität verschiedene Formen annehmen:

__warten__, Zustand vor Beginn der Operation:

```json
waiting: {}
```

__laufen__, Zustand während der Ausführung der Operation:

```json
running: {
    status: string;
    startDate: Date;
    progression: number;
}
```

__fehlgeschlagen__, Zustand, wenn die Operation fehlschlug:

```json
failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
}
```

__abgeschlossen__, Zustand, wenn die Operation abgeschlossen ist:

```json
completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
}
```

__Hinweis: Der Identifikator (UUIDv4) der erstellten Ressource steht im Antwortinhalt der Aktivität zur Verfügung, sobald diese abgeschlossen ist.__

## API-Limits

### Warum gibt es Limits?

Die Cloud Temple-Konsole definiert __Obergrenzen für das Anfragevolumen__, das ein Benutzer innerhalb eines bestimmten Zeitraums an die API richten kann. Die Einführung dieser Ratenbegrenzungen ist eine gängige Praxis in der API-Verwaltung und wird aus mehreren wesentlichen Gründen angewendet:

- __Missbrauchsprävention__: Diese Limits tragen dazu bei, die Integrität der API zu schützen, indem sie missbräuchliche oder unsachgemäße Nutzungen verhindern, die ihren Betrieb beeinträchtigen könnten.
- __Sicherstellung der Dienstqualität__: Durch die Regulierung des Zugriffs auf die API gewährleisten wir eine gerechte Verteilung der Ressourcen, sodass alle Benutzer von einer stabilen und leistungsstarken Erfahrung profitieren können.

Nehmen wir als Beispiel ein schlecht konzipiertes oder ineffizientes Skript, das wiederholte Aufrufe an die API versucht und dabei Gefahr läuft, die Ressourcen zu überlasten und die Leistung zu beeinträchtigen. Durch die Festlegung von Anfrageschwellenwerten verhindern wir solche Situationen und gewährleisten die Aufrechterhaltung eines __flüssigen und unterbrechungsfreien Dienstes__ für alle unsere Kunden.

### Was sind die Ratenlimits für die API der Cloud Temple-Konsole?

Wir wenden quantitative Beschränkungen für die Interaktionen der Benutzer mit der Konsole für jedes Produkt an.

Die Limits sind in __Anfragen pro Sekunde (A/s) und pro Quell-IP__ definiert. Bei Überschreiten des Grenzwertes antwortet das System mit dem HTTP-Fehlercode 429, der anzeigt, dass das Limit der zulässigen Anfragen überschritten wurde.

Hier sind die definierten Limits:

| Produkt | Limit |
|---|---|
| Cloud Temple Konsole | 25 A/s |
| Identität (IAM) | 25 A/s |
| IaaS VMware | 25 A/s |
| OpenIaaS | 25 A/s |
| S3 | 25 A/s |
| Openshift | 25 A/s |
| Bastion | 25 A/s |
| Netzwerk | 25 A/s |
| Hosting | 25 A/s |
| Marktplatz | 25 A/s |
| Support | 25 A/s |
| Benachrichtigung | 25 A/s |
| LLMaaS | 25 A/s |

### Spezifische Routen

Bestimmte API-Endpunkte, insbesondere solche, die mit der Authentifizierung oder sensiblen Aktionen zusammenhängen, haben restriktivere Limits, um die Sicherheit zu erhöhen und die Stabilität zu gewährleisten.

| Route | Limit |
|---|---|
| Authentifizierung (IAM) | 5 A/s |
| IaaS - Storage (Datastores) | 20 A/s |
| Marktplatz (Kontakt) | 1 A/min - 5 A/h |

### Wie funktionieren die Rate Limits?

Wenn der Anzahl der an einen API-Punkt gesendeten Anfragen die zulässige Obergrenze überschreitet, reagiert der API-Punkt mit einem HTTP-Statuscode 429. Dieser Code signalisiert, dass der Benutzer die maximale Anzahl von Anfragen überschritten hat. Zusätzlich zur Rückmeldigung des Statuscodes 429 liefert der API-Punkt ein JSON-Objekt mit detaillierten Informationen über die angelegte Begrenzung:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

### Wie man zu viele Anfragen vermeidet

Es wird empfohlen, die Anzahl der API-Anfragen in Ihrer Automatisierung so weit wie möglich zu begrenzen, um immer unterhalb des Endpunkts für die Taktstufe zu bleiben.

Diese Situation tritt häufig auf, wenn mehrere Anfragen gleichzeitig mit verschiedenen Prozessen oder Threads ausgeführt werden.

Es gibt verschiedene Möglichkeiten, Ihre Automatisierung effizienter zu gestalten:

- **Verwendung von __Meldungsmüll__**: Dies bedeutet, dass Sie die Ergebnisse vorher speichern und bei erneuten Anfragen diese Meldungen wiederholen.
- **Implementierung eines __Systeme der Wiederholungsversuch mit progressiver Verzögerung__**: Bei einer Fehlermeldung aufgrund von Taktstufenbeschränkungen pausieren Sie zunächst kurz und versuchen die Anfrage erneut. Wenn dies ebenfalls fehlschlägt, verlängern Sie die Pause progressiv, bis die Anfrage erfolgreich ist oder ein maximales Anzahl von Wiederholungsversuchen erreicht ist.

Diese Methode bietet mehrere Vorteile:

- Die __progressive Verzögerung__ stellt sicher, dass die ersten Versuche schnell durchgeführt werden, während längere Pausen bei wiederholten Fehlerschlägen eingeleitet werden.
- Die Einführung von __randomisierten Verzögerungen__ kann dazu beitragen, dass keine Anfragen gleichzeitig ausgeführt werden und somit die Last auf das System verteilt wird.

Es ist wichtig zu beachten, dass unerfolgreiche Anfragen Ihre Taktstufe nicht beeinträchtigen. Dennoch, kontinuierliches Wiederholen einer fehlgeschlagenen Anfrage kann langfristig nicht die beste Lösung sein, da dies sich ändern könnte. Daher sollten Sie Ihre Automatisierung nicht ausschließlich auf diesem Mechanismus stützen.

Bibliotheken wie __Backoff__ (https://pypi.org/project/backoff/) und __Tenacity__ (https://pypi.org/project/tenacity/) in Python bieten gute Grundlagen für die Implementierung von Attenuation-Strategien.

## Lebenszyklus eines Endpunkt-API

Die Informationen zur Entwicklung der Endpunkte der API sind in den Release-Notes verfügbar:

<img src={ShivaApi004} />

Sie finden die Liste der Endpunkte, die aktuell nicht mehr unterstützt werden.

Zusätzlich werden die Endpunkte, die obsolet sind, auf unserer API wie folgt dargestellt:
__~~this/is/an/endpoint~~__ sowie eine endgültige Löschdatum in der Beschreibung.
