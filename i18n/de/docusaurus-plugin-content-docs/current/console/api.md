---
title: Documentation API
---

## API-Schlüssel

Der __API-Schlüssel__ ermöglicht die Authentifizierung, wenn Sie Anfragen an die API stellen möchten. Die Generierung eines API-Schlüssels, auch __Personal Access Token (PAT)__ genannt,
ist eine sichere Methode, um auf die Shiva-APIs zuzugreifen, ohne eine grafische Benutzeroberfläche zu verwenden. Jeder dieser Tokens ist einem Tenant und dem Benutzer zugeordnet, der ihn erstellt hat.

Die Erstellung dieses Tokens erfolgt über Ihr Konto. Es ist möglich, mehrere Schlüssel zu generieren und für jeden die Berechtigungen innerhalb Ihrer Rechte anzupassen.

Um einen API-Schlüssel zu erstellen, klicken Sie einfach auf __Ihr Profil__:

![](images/shiva_profil_001.png)

Klicken Sie im Profilmenü auf __'Personal Access Token'__

![](images/shiva_profil_003.png)

Sie sehen dann alle für diesen Benutzer in diesem Tenant erstellten API-Schlüssel auf dem Bildschirm. Klicken Sie auf __'Neuer persönlicher Zugriffstoken'__

![](images/shiva_profil_002.png)

Sie müssen dann:

- Den Namen dieses neuen Tokens angeben,
- Ein Ablaufdatum angeben (maximal 12 Monate gültig),
- Die mit dem Token verbundenen Berechtigungen wählen.

Die Details zu Ihrem Token werden dann angezeigt. __Achtung, es ist nachträglich nicht mehr möglich, darauf zuzugreifen.__

Wenn Sie diese Informationen nicht notieren, müssen Sie den Token zerstören und neu erstellen.

![](images/shiva_profil_004.png)

Aus Sicherheitsgründen wird empfohlen, mehrere Tokens zu erstellen, wobei jeder eine spezifische Funktion hat (ein Token pro Anwendung oder pro Geschäftsprozess), anstatt einen einzigen Token mit allen Rechten zu erstellen.

Sie sehen dann den neu erstellten Token und sein zukünftiges Ablaufdatum.

![](images/shiva_profil_005.png)

## Zugriff auf das API-Portal

Die OpenAPI 3.0 (Swagger) Dokumentation der APIs der Cloud Temple Konsole ist direkt in der Anwendung verfügbar:

![](images/shiva_api_001.png)

Der Zugriff auf die APIs erfordert eine Authentifizierung. Nach der Authentifizierung müssen alle Vorgänge den Header
__'Authorization'__ mit dem im Authentifizierungsprozess erhaltenen Bearer-Zugriffstoken enthalten.

Die URL der Endpunkte wird direkt in __Swagger__ angegeben (im "Servers"-Objekt jeder API-Seite).

## Die Aktivitäten

Die Nachverfolgung von Schreibanfragen (POST, PUT, PATCH, DELETE) erfolgt über das Aktivitätsmanagement. Jede Anfrage dieser Art generiert automatisch eine zugehörige Aktivität. Ein HTTP-Statuscode 201 bestätigt die erfolgreiche Erstellung der Aktivität. Die eindeutige Kennung dieser Aktivität wird in den Antwort-Headern unter dem Schlüssel 'Location' zurückgesendet.

![](images/shiva_api_002.png)

Nachdem Sie die Kennung erhalten haben, können Sie die Details der Aktivität über die API des Activity-Moduls abrufen:

![](images/shiva_api_003.png)

Der Inhalt der Aktivität enthält alle wesentlichen Informationen zur Identifizierung des Vorgangs, das Ausführungsdatum sowie den Fortschritt. Hier ist das Modell einer Aktivität:

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

Das **state**-Objekt kann je nach Aktivitätsstatus verschiedene Formen annehmen:

**waiting**, der Zustand bevor der Vorgang begonnen hat:
```
    waiting: {}
```
**running**, der Zustand, wenn der Vorgang im Gange ist:
```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
**failed**, der Zustand, wenn der Vorgang fehlgeschlagen ist:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, der Zustand, wenn der Vorgang abgeschlossen ist:
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

Die Cloud Temple Konsole definiert __Obergrenzen für das Volumen von Anfragen__, die ein Benutzer innerhalb eines bestimmten Zeitraums an die API senden kann. Die Einführung dieser Frequenzgrenzen ist eine gängige Maßnahme im API-Management, die aus mehreren wichtigen Gründen erfolgt:

- **Verhinderung von Missbrauch**: Diese Limits tragen zur Wahrung der Integrität der API bei, indem sie missbräuchliche oder fehlerhafte Nutzungen verhindern, die ihre Funktionsweise beeinträchtigen könnten.
- **Sicherung der Servicequalität**: Durch die Regulierung des API-Zugriffs gewährleisten wir eine faire Verteilung der Ressourcen, sodass alle Benutzer eine stabile und leistungsfähige Erfahrung genießen können.

Nehmen wir das Beispiel eines schlecht gestalteten oder ineffizienten Skripts, das wiederholte API-Aufrufe versucht,
die die Ressourcen hätte überlasten und die Leistung beeinträchtigen könnten. Durch die Festlegung von Anfragegrenzen
verhindern wir solche Situationen und stellen sicher, dass alle unsere Kunden __einen reibungslosen und ununterbrochenen Service__ erhalten.

### Was sind die Ratenlimits für die API der Cloud Temple Konsole?

Wir wenden quantitative Beschränkungen auf die Benutzerinteraktionen mit der Konsole für jedes Produkt an.

Die Limits werden in __Anfragen pro Sekunde (r/s) und pro Quell-IP__ definiert. Überschreitet man das Limit, wird das System mit einem HTTP 429-Fehlercode antworten, was darauf hinweist, dass das Anfragelimit überschritten wurde.

Hier sind die festgelegten Grenzen:

| Produkt              | Obergrenze  |
|----------------------|--------------|
| Cloud Temple Console | 60 r/s       |
| Identität (IAM)      | 60 r/s       |
| IaaS - Compute       | 60 r/s       |
| IaaS - Speicher      | 20 r/s       |
| IaaS - Backup        | 60 r/s       |
| PaaS - S3            | 60 r/s       |
| PaaS - Openshift     | 60 r/s       |
| Netzwerk             | 60 r/s       |
| Hosting              | 60 r/s       |

### Wie funktionieren die Ratenlimits?

Wenn die Anzahl der an einen API-Endpunkt gesendeten Anfragen das erlaubte Limit überschreitet, wird der Endpunkt
__einen HTTP 429-Antwortcode__ zurückgeben. Dieser Code zeigt an, dass der Benutzer die erlaubte Anzahl von Anfragen überschritten hat. In diesem Fall gibt der Endpunkt auch ein JSON-Objekt als Antwort zurück,
das detaillierte Informationen zur angewendeten Begrenzung enthält:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### Wie kann man zu viele Anfragen vermeiden?

Es wird empfohlen, die Anzahl der von Ihrer Automatisierung durchgeführten API-Aufrufe zu begrenzen, um unter dem festgelegten Ratenlimit für den Endpunkt zu bleiben.

Diese Situation tritt häufig auf, wenn mehrere Anfragen parallel ausgeführt werden,
unter Verwendung mehrerer Prozesse oder Threads.

Es gibt mehrere Möglichkeiten, die Effizienz Ihrer Automatisierung zu verbessern, einschließlich der Verwendung von __Caching-Mechanismen__ und der Implementierung eines __Replaysystems mit zunehmender Verzögerung__. Diese Methode besteht darin, eine kurze Pause einzulegen, wenn ein Ratenlimitfehler auftritt, und dann die Anfrage erneut zu versuchen.
Wenn die Anfrage erneut fehlschlägt, wird die Pause schrittweise verlängert, bis die Anfrage erfolgreich ist
oder bis eine maximale Anzahl von Wiederholungsversuchen erreicht ist.

Dieser Ansatz bietet viele Vorteile:

- __Die zunehmende Verzögerung__ stellt sicher, dass die ersten Versuche schnell erfolgen, während längere Pausen bei wiederholtem Fehlschlagen vorgesehen sind.
- Die Hinzufügung einer __zufälligen Variation__ zur Pause hilft zu verhindern, dass alle Versuche gleichzeitig erfolgen.

Es ist wichtig zu beachten, dass __fehlgeschlagene Anfragen Ihr Ratenlimit nicht beeinträchtigen__.
Das kontinuierliche Senden einer Anfrage könnte jedoch langfristig keine tragfähige Lösung sein,
da sich dieses Verhalten in Zukunft ändern könnte. Daher empfehlen wir, sich nicht ausschließlich auf diesen Mechanismus zu verlassen.

Die Bibliotheken __[Backoff](https://pypi.org/project/backoff/)__ und __[Tenacity](https://pypi.org/project/tenacity/)__ in Python
sind gute Ausgangspunkte zum Implementieren von Verzögerungsstrategien.

## Lebenszyklus eines API-Endpunkts

Die Fortschrittsinformationen der API-Endpunkte sind in den Release Notes verfügbar:

![](images/shiva_api_004.jpg)

Sie finden die Liste der Endpunkte, die nach und nach für jede Aktivität verschoben werden.

Zudem werden veraltete Endpunkte auf unseren APIs wie folgt angezeigt:
__~~this/is/an/endpoint~~__ sowie ein endgültiges Löschdatum in der Beschreibung.