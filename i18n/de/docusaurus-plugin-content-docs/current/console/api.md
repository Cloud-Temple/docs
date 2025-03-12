---
title: API-Dokumentation
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
ist eine sichere Methode, um sich mit den Shiva-APIs zu verbinden, ohne eine grafische Benutzeroberfläche zu verwenden. Jeder dieser Tokens ist mit einem Tenant und dem Benutzer verknüpft, der ihn erstellt hat.

Die Erstellung dieses Tokens erfolgt über Ihr Konto. Es ist möglich, mehrere Schlüssel zu generieren und für jeden die Berechtigungen im Rahmen Ihrer Rechte zu konfigurieren.

Um einen API-Schlüssel zu erstellen, __klicken Sie einfach auf Ihr Profil__:

<img src={ShivaProfil001} />

Im Profilmenü klicken Sie auf __'Persönlicher Zugriffstoken'__

<img src={ShivaProfil003} />

Sie sehen dann alle API-Schlüssel, die für diesen Benutzer in diesem Tenant erstellt wurden. Klicken Sie auf __'Neuer persönlicher Zugriffstoken'__

<img src={ShivaProfil002} />

Sie müssen dann:

- Den Namen dieses neuen Tokens angeben,
- Ein Ablaufdatum angeben (maximal 12 Monate Gültigkeit),
- Die mit dem Token verbundenen Berechtigungen auswählen.

Die Details zu Ihrem Token werden dann angezeigt. __Achtung, es ist später nicht mehr möglich, darauf zuzugreifen.__

Wenn Sie diese Informationen nicht notieren, müssen Sie den Token löschen und neu erstellen.

<img src={ShivaProfil004} />

Aus Sicherheitsgründen wird empfohlen, mehrere Tokens zu erstellen, die jeweils einen spezifischen Verwendungszweck haben (ein Token für jede Anwendung oder jeden Geschäftsprozess), anstatt einen Token mit allen Berechtigungen zu erstellen.

Sie sehen dann den neu erstellten Token und sein zukünftiges Ablaufdatum.

<img src={ShivaProfil005} />

## Zugriff auf das API-Portal

Die OpenAPI 3.0 (Swagger)-Dokumentation der Cloud Temple-Konsolen-APIs ist direkt in der Anwendung verfügbar:

<img src={ShivaApi001} />

Der Zugriff auf die APIs erfordert eine Authentifizierung. Nach der Authentifizierung müssen alle Operationen den Header
__'Authorization'__ mit dem Bearer-Access-Token enthalten, der während der Authentifizierungsphase erhalten wurde.

Die URL der Endpunkte wird direkt in __Swagger__ angegeben (im "Servers"-Objekt jeder API-Seite).

## Die Aktivitäten

Die Nachverfolgung von Schreibanfragen (POST, PUT, PATCH, DELETE) erfolgt über das Aktivitätsmanagement. Jede Anfrage dieser Art generiert automatisch eine zugehörige Aktivität. Ein HTTP-Statuscode 201 bestätigt die erfolgreiche Erstellung der Aktivität. Die eindeutige Kennung dieser Aktivität wird in den Antwort-Headern unter dem Schlüssel 'Location' zurückgegeben.

<img src={ShivaApi002} />

Sobald die Kennung abgerufen wurde, ist es möglich, auf die Details der Aktivität zuzugreifen, indem man die API des Activity-Moduls verwendet:

<img src={ShivaApi003} />

Der Inhalt der Aktivität enthält alle wesentlichen Informationen zur Identifizierung der Operation, ihres Ausführungsdatums und ihres Fortschrittsstatus. Hier ist das Modell einer Aktivität:

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

Das Objekt **state** kann je nach Status der Aktivität verschiedene Formen annehmen, nämlich:

**waiting**, Status bevor die Operation begonnen hat:
```
    waiting: {}
```
**running**, Status während die Operation ausgeführt wird:
```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
**failed**, Status wenn die Operation fehlgeschlagen ist:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, Status wenn die Operation abgeschlossen ist:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

**Hinweis: Die Kennung (UUIDv4) der erstellten Ressource ist im Ergebnis der Aktivität verfügbar, sobald diese abgeschlossen ist.**

## API-Limits

### Warum Limits?

Die Cloud Temple-Konsole definiert __Obergrenzen für das Volumen an Anfragen__, die ein Benutzer innerhalb eines bestimmten Zeitraums an die API senden kann. Die Festlegung dieser Frequenzobergrenzen ist eine übliche Maßnahme im API-Management, die aus mehreren wesentlichen Gründen eingeführt wurde:

- **Verhinderung von Missbrauch**: Diese Limits tragen dazu bei, die Integrität der API zu schützen, indem sie missbräuchliche oder unachtsame Nutzungen verhindern, die ihre Funktionalität beeinträchtigen könnten.
- **Sicherstellung der Servicequalität**: Durch die Regulierung des API-Zugriffs gewährleisten wir eine gerechte Verteilung der Ressourcen, sodass alle Benutzer eine stabile und effiziente Erfahrung genießen können.

Ein Beispiel: Ein schlecht konzipiertes oder ineffizientes Skript, das wiederholt API-Aufrufe tätigt, könnte Ressourcen sättigen und die Leistung beeinträchtigen. Durch die Festlegung von Anfragelimits verhindern wir solche Situationen und stellen __einen reibungslosen, unterbrechungsfreien Service__ für alle unsere Kunden sicher.

### Welche Ratelimits gelten für die Cloud Temple-Konsolen-API?

Wir wenden quantitative Beschränkungen auf die Benutzerinteraktionen mit der Konsole für jedes Produkt an.

Die Limits sind in __Anfragen pro Sekunde (r/s) und pro Quell-IP__ definiert. Jenseits des Schwellenwerts antwortet das System
mit einem HTTP-Fehlercode 429, der anzeigt, dass das erlaubte Anfragelimit überschritten wurde.

Hier sind die definierten Limits:

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

Wenn die Anzahl der an einen API-Endpunkt gesendeten Anfragen das erlaubte Limit überschreitet, antwortet der API-Endpunkt mit
__einem HTTP-Antwortcode 429__. Dieser Code zeigt an, dass der Benutzer die Anzahl der erlaubten Anfragen überschritten hat.
In diesem Fall stellt der API-Endpunkt auch ein JSON-Objekt als Antwort bereit,
das detaillierte Informationen über die angewandte Begrenzung enthält:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### Wie vermeidet man zu viele Anfragen?

Es wird empfohlen, die Anzahl der von Ihrer Automatisierung getätigten API-Aufrufe zu begrenzen, um unter dem für den Endpunkt festgelegten Ratelimit zu bleiben.

Diese Situation tritt häufig auf, wenn mehrere Anfragen parallel ausgeführt werden, unter Verwendung mehrerer Prozesse oder Threads.

Es gibt mehrere Möglichkeiten, die Effizienz Ihrer Automatisierung zu verbessern, insbesondere durch die Verwendung von __Caching__-Mechanismen und die Implementierung eines __Backoff-Wiederholungssystems__. Diese Methode beinhaltet eine kurze Pause, wenn ein Ratelimit-Fehler auftritt, und dann einen erneuten Versuch der Anfrage. Wenn die Anfrage erneut fehlschlägt, wird die Pausendauer schrittweise erhöht, bis die Anfrage erfolgreich ist oder bis eine maximale Anzahl von Wiederholungen erreicht ist.

Dieser Ansatz bietet viele Vorteile:

- __Backoff__ stellt sicher, dass frühe Versuche schnell durchgeführt werden, während bei wiederholtem Fehlschlagen längere Verzögerungen berücksichtigt werden.
- Das Hinzufügen einer __zufälligen Variation__ zur Pause hilft zu vermeiden, dass alle Wiederholungsversuche gleichzeitig stattfinden.

Es ist wichtig zu beachten, dass __erfolglose Anfragen Ihr Ratelimit nicht beeinflussen__.
Allerdings könnte das kontinuierliche Wiederholen einer Anfrage keine langfristig tragfähige Lösung sein, da dieses Verhalten in Zukunft geändert werden könnte. Daher empfehlen wir, sich nicht ausschließlich auf diesen Mechanismus zu verlassen.

Die Python-Bibliotheken __[Backoff](https://pypi.org/project/backoff/)__ und __[Tenacity](https://pypi.org/project/tenacity/)__ sind gute Ausgangspunkte für die Implementierung von Backoff-Strategien.

## API-Endpunkt-Lebenszyklus

Informationen zu API-Endpunkt-Updates sind in den Release Notes verfügbar:

<img src={ShivaApi004} />

Sie finden die Liste der Endpunkte, die aktivitätsweise als veraltet markiert sind.

Darüber hinaus werden veraltete Endpunkte in unseren APIs wie folgt dargestellt:
__~~this/is/an/endpoint~~__ zusammen mit einem endgültigen Löschdatum in der Beschreibung.
