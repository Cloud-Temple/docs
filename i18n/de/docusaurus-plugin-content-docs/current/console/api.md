---
title: Documentation API
---
import ShivaProfil001 from './images/shiva_profil_001.png'
import ShivaProfil002 from './images/shiva_profil_002.png'
import ShivaProfil003 from './images/shiva_profil_003.png'
import ShivaProfil004 from './images/shiva_profil_004.png'
import ShivaProfil005 from './images/shiva_profil_005.png'
import ShivaApi001 from './images/shiva_api_001.png'
import ShivaApi002 from './images/shiva_api_002.png'
import ShivaApi003 from './images/shiva_api_003.png'
import ShivaApi004 from './images/shiva_api_004.jpg'

## API-Schlüssel

Der __API-Schlüssel__ ermöglicht die Authentifizierung, wenn Sie Anfragen an die API stellen möchten. Die Generierung eines API-Schlüssels, auch __Personal Access Token (PAT)__ genannt,
ist eine sichere Methode, um sich bei den Shiva-APIs anzumelden, ohne eine grafische Benutzeroberfläche zu verwenden. Jeder dieser Tokens ist einem Mandanten und dem Benutzer zugeordnet, der ihn erstellt hat.

Die Erstellung dieses Tokens erfolgt über Ihr Konto. Es ist möglich, mehrere Schlüssel zu generieren und für jeden die Berechtigungen im Rahmen Ihrer Rechte zu konfigurieren.

Um einen API-Schlüssel zu erstellen, genügt es, __auf Ihr Profil zu klicken__:

<img src={ShivaProfil001} />

Im Profilmenü klicken Sie auf __'Persönlicher Zugangstoken'__

<img src={ShivaProfil003} />

Anschließend sehen Sie alle für diesen Benutzer in diesem Mandanten erstellten API-Schlüssel. Klicken Sie auf __'Neuer persönlicher Zugangstoken'__

<img src={ShivaProfil002} />

Sie müssen dann:

- Den Namen dieses neuen Tokens angeben,
- Ein Ablaufdatum angeben (maximal 12 Monate Gültigkeit),
- Die mit dem Token verbundenen Berechtigungen auswählen.

Die Details zu Ihrem Token werden dann angezeigt. __Achtung, es ist nicht möglich, im Nachhinein darauf zuzugreifen.__

Wenn Sie diese Informationen nicht notieren, müssen Sie den Token zerstören und neu erstellen.

<img src={ShivaProfil004} />

Aus Sicherheitsgründen wird empfohlen, mehrere Tokens zu erstellen, die jeweils eine spezifische Aufgabe haben (ein Token für jede Anwendung oder für jeden Geschäftsprozess) anstatt einen Token mit allen Rechten zu erstellen.

Dann sehen Sie den neu erstellten Token und das zukünftige Ablaufdatum.

<img src={ShivaProfil005} />

## Zugriff auf das API-Portal

Die OpenAPI 3.0 (Swagger)-Dokumentation der Cloud Temple-Konsolen-APIs ist direkt in der Anwendung verfügbar:

<img src={ShivaApi001} className="img-large" />

Der Zugriff auf die APIs erfordert eine Authentifizierung. Sobald Sie authentifiziert sind, müssen alle Operationen den Header
__'Authorization'__ mit dem bei der Authentifizierung erhaltenen Bearer-Access-Token enthalten.

Die URL der Zugangspunkte wird direkt in __Swagger__ angegeben (im "Servers"-Objekt jeder APIs-Seite).

## Die Aktivitäten

Die Nachverfolgung von Schreibanfragen (POST, PUT, PATCH, DELETE) erfolgt über das Aktivitätsmanagement. Jede Anfrage dieser Art generiert automatisch eine zugehörige Aktivität. Ein HTTP-Statuscode 201 bestätigt die erfolgreiche Erstellung der Aktivität. Die eindeutige Kennung dieser Aktivität wird in den Antwort-Headern unter dem Schlüssel 'Location' zurückgesendet.

<img src={ShivaApi002} />

Sobald die Kennung abgerufen wurde, ist es möglich, auf die Details der Aktivität zuzugreifen, indem man die API des Aktivitätsmoduls verwendet:

<img src={ShivaApi003} />

Der Inhalt der Aktivität enthält alle wesentlichen Informationen zur Identifizierung der Operation, deren Ausführungsdatum und deren Fortschrittszustand. Hier ist das Modell einer Aktivität:

```
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

Das Objekt **state** kann je nach Zustand der Aktivität verschiedene Formen annehmen, nämlich:

**waiting**, Zustand bevor die Operation begonnen hat:
```
    waiting: {}
```
**running**, Zustand während die Operation ausgeführt wird:
```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
**failed**, Zustand wenn die Operation fehlgeschlagen ist:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, Zustand wenn die Operation abgeschlossen ist:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

**Hinweis: Die Kennung (UUIDv4) der erstellten Ressource ist verfügbar im Ergebnis der Aktivität, sobald diese abgeschlossen ist.**

## API-Grenzen

### Warum Begrenzungen?

Die Cloud Temple-Konsole legt __Grenzen für das Volumen der Anfragen__ fest, die ein Benutzer
innerhalb eines bestimmten Zeitraums an die API richten kann. Die Festlegung dieser Frequenzgrenzen ist eine übliche Maßnahme im API-Management, die aus mehreren wesentlichen Gründen erfolgt:

- **Vermeidung von Missbrauch**: Diese Begrenzungen tragen dazu bei, die Integrität der API zu wahren, indem sie missbräuchliche oder fehlerhafte Verwendungen verhindern, die deren Betrieb beeinträchtigen könnten.
- **Sicherstellung der Servicequalität**: Durch die Regulierung des Zugriffs auf die API sorgen wir für eine faire Verteilung der Ressourcen, sodass alle Benutzer eine stabile und leistungsstarke Erfahrung genießen können.

Nehmen wir das Beispiel eines schlecht entwickelten oder ineffizienten Skripts, das wiederholte API-Aufrufe versucht,
die Ressourcen belasten und die Leistung beeinträchtigen könnten. Durch die Festlegung von Abfrageschwellen verhindern wir diese Situationen und gewährleisten __einen reibungslosen und unterbrechungsfreien Dienst__ für alle unsere Kunden.

### Was sind die Ratelimits für die Cloud Temple-Konsolen-API?

Wir setzen quantitative Einschränkungen für die Interaktionen der Benutzer mit der Konsole
für jedes Produkt.

Die Grenzen sind in __Anfragen pro Sekunde (r/s) und pro Quell-IP__ definiert. Übersteigt das Anfragevolumen die festgelegte Schwelle, antwortet das System
mit einem HTTP-Fehler 429, der signalisiert, dass das Anfragelimit überschritten wurde.

Hier sind die festgelegten Grenzen:

| Produkt              | Schwellenwert |
|----------------------|---------------|
| Cloud Temple-Konsole | 60 r/s        |
| Identität (IAM)      | 60 r/s        |
| IaaS - Berechnung    | 60 r/s        |
| IaaS - Speicher      | 20 r/s        |
| IaaS - Sicherung     | 60 r/s        |
| PaaS - S3            | 60 r/s        |
| PaaS - Openshift     | 60 r/s        |
| Netzwerk             | 60 r/s        |
| Hosting              | 60 r/s        |

### Wie funktionieren die Ratelimits?

Wenn das Volumen der gesendeten Anfragen an einen API-Punkt die erlaubte Grenze überschreitet, reagiert der API-Punkt
__mit einem HTTP-Antwortcode 429__. Dieser Code zeigt an, dass der Benutzer die erlaubte Anzahl von Anfragen überschritten hat.
In diesem Fall liefert der API-Punkt auch ein JSON-Objekt als Antwort,
das detaillierte Informationen zur angewendeten Begrenzung enthält:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### Wie vermeidet man zu viele Anfragen?

Es wird empfohlen, die Anzahl der von Ihrer Automatisierung ausgeführten API-Aufrufe zu begrenzen, um innerhalb der festgelegten Ratelimits für den Endpunkt zu bleiben.

Dies tritt häufig auf, wenn mehrere Anfragen gleichzeitig ausgeführt werden,
mit mehreren Prozessen oder Threads.

Es gibt mehrere Möglichkeiten, die Effizienz Ihrer Automatisierung zu verbessern, unter anderem durch Verwendung von
__Caching-Mechanismen__ und durch Implementierung eines __Replaysystems mit progressiver Abklingzeit__. Diese Methode besteht darin,
eine kurze Pause einzulegen, wenn ein Ratelimit-Fehler auftritt und dann die Anfrage erneut zu senden.
Scheitert die Anfrage erneut, wird die Pausendauer schrittweise verlängert, bis die Anfrage erfolgreich ist
oder bis eine maximale Anzahl von Wiederholungsversuchen erreicht ist.

Diese Vorgehensweise bietet mehrere Vorteile:

- __Progressive Abklingzeit__ stellt sicher, dass die ersten Wiederholungsversuche schnell durchgeführt werden, während bei wiederholtem Fehlschlag längere Wartezeiten vorgesehen sind.
- Die Hinzufügung einer __zufälligen Variation__ zur Pause hilft zu vermeiden, dass alle Wiederholungsversuche gleichzeitig stattfinden.

Es ist wichtig zu beachten, dass __fehlgeschlagene Anfragen Ihre Ratelimits nicht beeinflussen__.
Ständiges Wiederholen einer Anfrage könnte jedoch langfristig keine brauchbare Lösung sein,
da sich dieses Verhalten in Zukunft ändern könnte. Wir empfehlen daher, sich nicht ausschließlich auf diesen Mechanismus zu verlassen.

Die Bibliotheken __[Backoff](https://pypi.org/project/backoff/)__ und __[Tenacity](https://pypi.org/project/tenacity/)__ in Python
sind gute Ausgangspunkte zur Implementierung von Abklingstrategien.

## Lebenszyklus eines API-Endpunkts

Die Entwicklungsinformationen der API-Endpunkte sind in den Versionshinweisen verfügbar:

<img src={ShivaApi004} className="img-large" />

Sie finden die Liste der Endpunkte, die aktiv schrittweise eingestellt werden.

Darüber hinaus werden die veralteten Endpunkte wie folgt in unseren APIs angezeigt:
__~~this/is/an/endpoint~~__ sowie ein endgültiges Löschdatum in der Beschreibung.