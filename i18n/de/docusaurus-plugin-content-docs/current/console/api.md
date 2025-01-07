---
title: Documentation API 
---

## API-Schlüssel

Der __API-Schlüssel__ ermöglicht die Authentifizierung, wenn Sie Anfragen an die API stellen möchten. Das Erstellen eines API-Schlüssels, auch genannt __Personal Access Token (PAT)__, ist eine sichere Möglichkeit, auf die Shiva-APIs zuzugreifen, ohne eine grafische Benutzeroberfläche zu verwenden. Jeder dieser Tokens ist mit einem Tenant und dem Benutzer verknüpft, der ihn erstellt hat.

Das Erstellen dieses Tokens erfolgt über Ihr Konto. Es ist möglich, mehrere Schlüssel zu generieren und für jeden die Berechtigungen innerhalb Ihrer Rechte zu konfigurieren.

Um einen API-Schlüssel zu erstellen, __klicken Sie einfach auf Ihr Profil__:

![](images/shiva_profil_001.png)

Klicken Sie im Profilmenü auf __'Persönlicher Zugriffstoken'__

![](images/shiva_profil_003.png)

Sie sehen dann auf dem Bildschirm alle API-Schlüssel, die für diesen Benutzer in diesem Tenant erstellt wurden. Klicken Sie auf __'Neuer persönlicher Zugriffstoken'__

![](images/shiva_profil_002.png)

Sie müssen dann:

- Den Namen dieses neuen Tokens angeben,
- Ein Ablaufdatum angeben (maximal 12 Monate Gültigkeit),
- Die Berechtigungen auswählen, die mit dem Token verbunden sind.

Die Details zu Ihrem Token werden dann angezeigt. __Achtung, ein nachträglicher Zugriff ist nicht mehr möglich.__

Wenn Sie diese Informationen nicht notieren, müssen Sie den Token zerstören und neu erstellen.

![](images/shiva_profil_004.png)

Aus Sicherheitsgründen wird empfohlen, mehrere Tokens zu erstellen, die jeweils einen bestimmten Zweck haben (ein Token pro Anwendung oder Geschäftsprozess), anstatt einen Token mit allen Rechten zu erstellen.

Sie sehen dann den neu erstellten Token und sein zukünftiges Ablaufdatum.

![](images/shiva_profil_005.png)

## Zugang zum API-Portal

Die OpenAPI 3.0 (Swagger) Dokumentation der Clouds Temple Konsole APIs ist direkt in der Anwendung verfügbar:

![](images/shiva_api_001.png)

Der Zugang zu den APIs erfordert eine Authentifizierung. Sobald Sie authentifiziert sind, müssen alle Operationen den Header __'Authorization'__ mit dem während der Authentifizierungsphase erhaltenen Bearer Access Token enthalten.

Die URL der Zugangspunkte wird direkt in __Swagger__ angegeben (im "Servers"-Objekt jeder API-Seite).

## Die Aktivitäten

Die Nachverfolgung von Schreibanforderungen (POST, PUT, PATCH, DELETE) erfolgt über die Aktivitätsverwaltung. Jede Anfrage dieser Art generiert automatisch eine zugehörige Aktivität. Ein HTTP-Statuscode 201 bestätigt die erfolgreiche Erstellung der Aktivität. Die eindeutige Kennung dieser Aktivität wird in den Antwortheadern unter dem Schlüssel 'Location' zurückgesendet.

![](images/shiva_api_002.png)

Nachdem die Kennung abgerufen wurde, ist es möglich, auf die Aktivitätsdetails zuzugreifen, indem die API des Aktivitätsmoduls verwendet wird:

![](images/shiva_api_003.png)

Der Inhalt der Aktivität enthält alle wesentlichen Informationen zum Identifizieren der Operation, ihres Ausführungsdatums sowie ihres Fortschrittszustands. Hier ist das Modell einer Aktivität:

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

Das Objekt **state** kann verschiedene Formen annehmen, je nach Zustand der Aktivität, nämlich:

**waiting**, Zustand vor Beginn der Operation:
```
    waiting: {}
```
**running**, Zustand während der Operation:
```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
**failed**, Zustand bei fehlgeschlagener Operation:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, Zustand bei abgeschlossener Operation:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```
**Hinweis: Die Kennung (UUIDv4) der erstellten Ressource ist im Ergebnis der Aktivität verfügbar, sobald diese abgeschlossen ist.**

## API-Grenzen

### Warum Begrenzungen?

Die Cloud Temple Konsole legt __Obergrenzen für das Anfragevolumen__ fest, das ein Benutzer innerhalb eines bestimmten Zeitraums an die API senden kann. Die Einführung dieser Frequenzgrenzen ist eine übliche Maßnahme im API-Management, die aus mehreren wesentlichen Gründen getroffen wird:

- **Missbrauchsprävention**: Diese Grenzen tragen dazu bei, die Integrität der API zu wahren, indem sie missbräuchliche oder unbeabsichtigte Nutzung verhindern, die ihren Betrieb beeinträchtigen könnten.
- **Gewährleistung der Dienstqualität**: Durch die Regelung des API-Zugriffs sorgen wir für eine faire Verteilung der Ressourcen, sodass alle Benutzer von einer stabilen und effizienten Benutzererfahrung profitieren.

Ein Beispiel ist ein schlecht konzipiertes oder ineffizientes Skript, das wiederholte API-Aufrufe versucht, wodurch die Ressourcen ausgelastet und die Leistung beeinträchtigt werden könnten. Durch die Festlegung von Anfrageschwellen verhindern wir diese Situationen und gewährleisten __einen reibungslosen und unterbrechungsfreien Service__ für unsere gesamte Kundschaft.

### Was sind die Ratenbegrenzungen für die Cloud Temple Konsole API?

Wir wenden quantitative Einschränkungen auf die Benutzerinteraktionen mit der Konsole für jedes Produkt an.

Die Limits werden in __Anfragen pro Sekunde (r/s) und pro Quell-IP__ definiert. Überschreitet ein Benutzer diese Grenze, antwortet das System mit einem HTTP-Fehlercode 429, der darauf hinweist, dass die erlaubte Antragsgrenze überschritten wurde.

Hier sind die festgelegten Grenzen:

| Produkt              | Grenzschwelle |
|----------------------|--------------|
| Cloud Temple Konsole | 60 r/s       |
| Identität (IAM)      | 60 r/s       |
| IaaS - Berechnung    | 60 r/s       |
| IaaS - Speicherung   | 20 r/s       |
| IaaS - Sicherung     | 60 r/s       |
| PaaS - S3            | 60 r/s       |
| PaaS - Openshift     | 60 r/s       |
| Netzwerk             | 60 r/s       |
| Hosting              | 60 r/s       |

### Wie funktionieren die Ratenbegrenzungen?

Wenn die Anzahl der an einen API-Endpunkt gesendeten Anfragen die zulässige Grenze überschreitet, reagiert der Endpunkt __mit einem HTTP 429 Antwortcode__. Dieser Code zeigt an, dass der Benutzer die zulässige Anzahl von Anfragen überschritten hat.
In diesem Fall liefert der Endpunkt auch ein JSON-Objekt als Antwort, das detaillierte Informationen über die angewendete Begrenzung enthält:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### Wie vermeiden Sie zu viele Anfragen?

Es wird empfohlen, die Anzahl der von Ihrer Automatisierung durchgeführten API-Aufrufe zu begrenzen, um unter der Ratenbegrenzung des Endpunkts zu bleiben.

Diese Situation tritt häufig auf, wenn mehrere Anfragen gleichzeitig ausgeführt werden, z.B. durch mehrere Prozesse oder Threads.

Es gibt verschiedene Möglichkeiten, die Effizienz Ihrer Automatisierung zu verbessern, darunter die Verwendung von __Caching-Mechanismen__ und die Implementierung eines __progressiven Verzögerungssystems__. Diese Methode besteht darin, bei einer Ratenbegrenzungsfehler eine kurze Pause einzulegen und die Anfrage erneut zu versuchen. Schlägt der nächste Versuch erneut fehl, wird die Pause schrittweise verlängert, bis der Antrag erfolgreich ist oder eine maximale Anzahl von Wiederholungsversuchen erreicht ist.

Diese Vorgehensweise bietet mehrere Vorteile:

- __Progressive Verzögerung__ stellt sicher, dass erste Versuche schnell durchgeführt werden, während längere Pausen im Falle wiederholter Fehlschläge eingeplant werden.
- Das Hinzufügen einer __zufälligen Variation__ zur Pause trägt dazu bei zu verhindern, dass alle Versuche gleichzeitig auftreten.

Beachten Sie, dass __fehlgeschlagene Anfragen Ihre Ratenbegrenzung nicht beeinträchtigen__.
Allerdings könnte das kontinuierliche Senden von Anfragen langfristig keine brauchbare Lösung sein, da dieses Verhalten in Zukunft geändert werden könnte. Aus diesem Grund raten wir davon ab, sich ausschließlich auf diesen Mechanismus zu verlassen.

Die Python-Bibliotheken __[Backoff](https://pypi.org/project/backoff/)__ und __[Tenacity](https://pypi.org/project/tenacity/)__ sind gute Ausgangspunkte für die Implementierung von Verzögerungsstrategien.