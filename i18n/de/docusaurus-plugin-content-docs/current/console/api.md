---
title: API-Dokumentation
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

Die Cloud Temple API ermöglicht es Ihnen, alle Ihre Cloud-Ressourcen programmatisch zu erstellen und zu verwalten. Alles, was Sie über die Cloud Temple Konsole tun können, kann auch über die API durchgeführt werden, von der Erstellung virtueller Maschinen bis zur Konfiguration der Identitäts- und Zugriffsverwaltung.

Diese Dokumentation führt Sie durch die Verwendung der Cloud Temple API, von der Authentifizierung bis zu Best Practices, einschließlich des Lebenszyklus-Managements von Endpunkten.

## Schnellstart: Ihre erste API-Anfrage

:::info[Zusammenfassung - 3 Schritte zum Starten]
1. 🔑 **PAT generieren** über die Konsole
2. 🚀 **Mit curl testen** auf `/iam/v2/roles`
3. ✅ **Antwort analysieren** JSON
:::

### Voraussetzungen

Bevor Sie beginnen, benötigen Sie ein Cloud Temple Konto mit den entsprechenden Berechtigungen zum Generieren von API-Schlüsseln.

### Schritte

1. **API-Schlüssel generieren**: Melden Sie sich bei der [Cloud Temple Konsole](https://shiva.cloud-temple.com/login) an und generieren Sie Ihren Personal Access Token (siehe Abschnitt [API-Schlüssel](#api-schlüssel-personal-access-token) unten).

2. **Erste Anfrage testen**: Führen Sie den folgenden curl-Befehl aus und ersetzen Sie `<your-personal-access-token>` durch Ihren Token:

```bash
curl -X GET \
  -H "Authorization: Bearer <your-personal-access-token>" \
  -H "Content-Type: application/json" \
  "https://shiva.cloud-temple.com/api/iam/v2/roles"
```

3. **Antwort analysieren**: Sie erhalten die Liste der in Ihrem Tenant verfügbaren IAM-Rollen, um die vorhandenen Berechtigungen zu verstehen.

## Authentifizierung

### API-Schlüssel (Personal Access Token)

Der __API-Schlüssel__ ermöglicht die Authentifizierung bei API-Anfragen. Die Generierung eines API-Schlüssels, auch als __Personal Access Token (PAT)__ bekannt, ist eine sichere Methode zur Verbindung mit Konsolen-APIs ohne grafische Benutzeroberfläche. Jeder dieser Token ist mit einem Tenant und dem Benutzer verknüpft, der ihn erstellt hat.

Die Erstellung dieses Tokens erfolgt über Ihr Konto. Sie können mehrere Schlüssel generieren und für jeden die Berechtigungen innerhalb Ihrer Rechte konfigurieren.

#### API-Schlüssel erstellen

Um einen API-Schlüssel zu erstellen, klicken Sie einfach auf __Ihr Profil__:

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

Klicken Sie im Profilmenü auf __'Personal Access Token'__

<img src={ShivaProfil003} />

Sie sehen dann alle für diesen Benutzer in diesem Tenant erstellten API-Schlüssel. Klicken Sie auf __'Neues persönliches Zugriffstoken'__

<img src={ShivaProfil002} />

Sie müssen dann:

- Den Namen dieses neuen Tokens angeben,
- Ein Ablaufdatum festlegen (maximale Gültigkeit 12 Monate),
- Die mit dem Token verbundenen Berechtigungen auswählen.

Die Details Ihres Tokens werden dann angezeigt. __Warnung: Sie können später nicht mehr auf diese Details zugreifen.__

Wenn Sie diese Informationen nicht aufzeichnen, müssen Sie den Token löschen und neu erstellen.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Aus Sicherheitsgründen wird empfohlen, mehrere Token zu erstellen, jeder mit einem bestimmten Zweck (ein Token pro Anwendung oder Geschäftsprozess), anstatt einen Token mit allen Berechtigungen zu erstellen.

Sie sehen dann den neu erstellten Token und sein zukünftiges Ablaufdatum.

<img src={ShivaProfil005} />

:::info[Authentifizierungs-Token-Lebenszyklus]
Wenn Sie Ihren __Personal Access Token (PAT)__ zur Authentifizierung bei der API verwenden, erhalten Sie als Rückgabe einen Zugriffstoken. Es ist wichtig zu beachten, dass dieser Zugriffstoken ein __JSON Web Token (JWT)__ mit begrenzter Lebensdauer ist.

- __Lebensdauer__: Jeder JWT-Token ist __5 Minuten__ gültig.
- __Überprüfung__: Sie können das Ausstellungsdatum (`iat`) und Ablaufdatum (`exp`) Ihres Tokens durch Dekodierung überprüfen. Online-Tools wie [jwt.io](https://jwt.io) machen dies einfach.

Sobald der Token abläuft, müssen Sie sich erneut mit Ihrem PAT authentifizieren, um einen neuen zu erhalten. Daher wird empfohlen, diesen Lebenszyklus in Ihren Skripten und Anwendungen zu verwalten, indem Sie eine automatische Token-Erneuerung planen.
:::

## API-Portal-Zugriff

Die OpenAPI 3.0 (Swagger) Dokumentation für Cloud Temple Konsolen-APIs ist direkt in der Anwendung verfügbar:

<img src={ShivaApi001} />

Der API-Zugriff erfordert eine Authentifizierung. Nach der Authentifizierung müssen alle Operationen den __'Authorization'__-Header mit dem während der Authentifizierungsphase erhaltenen Bearer-Zugriffstoken enthalten.

Die Endpunkt-URLs werden direkt in __Swagger__ bereitgestellt (im "Servers"-Objekt auf jeder API-Seite).

### Interaktive Dokumentation erkunden

Das API-Portal ermöglicht es Ihnen:

- Alle verfügbaren Endpunkte nach Modul anzuzeigen
- Anfragen direkt über die Schnittstelle zu testen
- Datenmodelle (Schemas) für jede Ressource anzuzeigen
- Mögliche Antwortcodes für jeden Endpunkt anzuzeigen

## Endpunkt-Struktur

### URL-Format

Cloud Temple API-URLs folgen einer konsistenten Struktur:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{resource}
```

Dabei:
- `{module}`: Das betreffende Modul (compute, iam, network, backup, etc.)
- `{version}`: Die API-Version (v1, v2, etc.)
- `{resource}`: Die zu manipulierende Ressource (virtual-machines, users, networks, etc.)

### Endpunkt-Beispiele

```
# Virtuelle Maschinen (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identität und Zugriff (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Netzwerke
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Modul-Organisation

Die Cloud Temple API ist in funktionale Module organisiert:

| Modul | Beschreibung | Basis-URL |
|--------|-------------|----------|
| Cloud Temple Konsole | Allgemeine Funktionen | `/api/v1/` |
| Identität (IAM) | Benutzer- und Zugriffsverwaltung | `/iam/v1/` |
| VMware IaaS | VMware-Virtualisierungsressourcen | `/compute/v1/` |
| OpenIaaS | Xen Orchestra-Ressourcen | `/openiaas/v1/` |
| S3 | Objektspeicher | `/s3/v1/` |
| OpenShift | PaaS-Plattform | `/openshift/v1/` |
| Bastion | SSH/RDP Bastion-Geräte | `/bastion/v1/` |
| Netzwerk | Level 2 und 3 Netzwerkverwaltung | `/network/v1/` |
| Housing | Colocation und Housing | `/housing/v1/` |
| Marketplace | Lösungskatalog | `/marketplace/v1/` |
| Support | Tickets und Support | `/support/v1/` |
| Benachrichtigung | Benachrichtigungssystem | `/notification/v1/` |
| LLMaaS | Künstliche Intelligenz | `/llmaas/v1/` |

## Aktivitäten

Die Verfolgung von Schreibanfragen (POST, PUT, PATCH, DELETE) erfolgt über das Aktivitätsmanagement. Jede solche Anfrage generiert automatisch eine zugeordnete Aktivität. Ein HTTP 201 Statuscode bestätigt die erfolgreiche Erstellung der Aktivität. Die eindeutige Kennung dieser Aktivität wird in den Antwort-Headern unter dem Schlüssel 'Location' zurückgegeben.

<img src={ShivaApi002} />

Sobald die Kennung abgerufen wurde, ist es möglich, auf die Aktivitätsdetails über die Activity-Modul-API zuzugreifen:

<img src={ShivaApi003} />

Der Aktivitätsinhalt enthält alle wesentlichen Informationen zur Identifizierung der Operation, ihres Ausführungsdatums und ihres Fortschrittsstatus. Hier ist das Aktivitätsmodell:

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

### Aktivitätszustände

Das __state__-Objekt kann je nach Aktivitätszustand unterschiedliche Formen annehmen:

#### waiting

Zustand bevor die Operation begonnen hat:

```json
waiting: {}
```

#### running

Zustand wenn die Operation läuft:

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### failed

Zustand wenn die Operation fehlgeschlagen ist:

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completed

Zustand wenn die Operation abgeschlossen ist:

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Erstellte Ressourcen-Kennung]
Die Kennung (UUIDv4) der erstellten Ressource ist im Aktivitätsergebnis verfügbar, sobald sie abgeschlossen ist.
:::

## API-Limits

### Warum Limits?

Die Cloud Temple Konsole definiert __Obergrenzen für das Anfragevolumen__, das ein Benutzer über einen bestimmten Zeitraum an die API senden kann. Die Implementierung dieser Ratenlimits ist eine gängige Maßnahme im API-Management, die aus mehreren wesentlichen Gründen eingeführt wurde:

- __Missbrauchsverhütung__: Diese Limits helfen, die API-Integrität zu schützen, indem sie missbräuchliche oder fahrlässige Nutzung verhindern, die den Betrieb beeinträchtigen könnte.
- __Servicequalitätssicherung__: Durch die Regulierung des API-Zugriffs stellen wir eine faire Ressourcenverteilung sicher, sodass alle Benutzer von einer stabilen und leistungsstarken Erfahrung profitieren können.

Nehmen Sie zum Beispiel ein schlecht konzipiertes oder ineffizientes Skript, das wiederholte API-Aufrufe versucht und dabei das Risiko einer Ressourcensättigung und Leistungsverschlechterung birgt. Durch die Festlegung von Anfrage-Schwellenwerten verhindern wir diese Situationen und erhalten __einen reibungslosen, ununterbrochenen Service__ für alle unsere Kunden.

### Was sind die Ratenlimits für die Cloud Temple Konsolen-API?

Wir wenden quantitative Beschränkungen auf Benutzerinteraktionen mit der Konsole für jedes Produkt an.

Die Limits sind definiert in __Anfragen pro Sekunde (r/s) und pro Quell-IP__. Jenseits des Grenzwerts antwortet das System mit einem HTTP 429 Fehlercode, der anzeigt, dass das autorisierte Anfragelimit überschritten wurde.

Hier sind die definierten Limits:

| Produkt | Grenzwert |
|---|---|
| Cloud Temple Konsole | 25 r/s |
| Identität (IAM) | 25 r/s |
| VMware IaaS | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Netzwerk | 25 r/s |
| Housing | 25 r/s |
| Marketplace | 25 r/s |
| Support | 25 r/s |
| Benachrichtigung | 25 r/s |
| LLMaaS | 25 r/s |

### Spezifische Routen

Bestimmte spezifische API-Endpunkte, insbesondere solche im Zusammenhang mit Authentifizierung oder sensiblen Aktionen, haben restriktivere Limits zur Verbesserung der Sicherheit und Gewährleistung der Stabilität.

| Route | Grenzwert |
|---|---|
| Authentifizierung (IAM) | 5 r/s |
| IaaS - Speicher (Datastores) | 20 r/s |
| Marketplace (Kontakt) | 1 r/min - 5 r/h |

### Wie funktionieren Ratenlimits?

Wenn die Anzahl der an einen API-Endpunkt gesendeten Anfragen das autorisierte Limit überschreitet, antwortet der Endpunkt mit __einem HTTP 429 Antwortcode__. Dieser Code zeigt an, dass der Benutzer die erlaubte Anzahl von Anfragen überschritten hat. Wenn dies auftritt, stellt der API-Endpunkt auch ein JSON-Objekt als Antwort bereit, das detaillierte Informationen über die angewandte Beschränkung enthält:

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### Wie vermeidet man zu viele Anfragen?

Es wird empfohlen, die Anzahl der von Ihrer Automatisierung vorgenommenen API-Aufrufe zu begrenzen, um unter dem für den Endpunkt festgelegten Ratenlimit zu bleiben.

Diese Situation tritt häufig auf, wenn mehrere Anfragen parallel mit mehreren Prozessen oder Threads ausgeführt werden.

Es gibt mehrere Möglichkeiten, die Effizienz Ihrer Automatisierung zu verbessern, einschließlich der Verwendung von __Caching__-Mechanismen und der Implementierung __eines Wiederholungssystems mit exponentiellem Backoff__. Diese Methode beinhaltet eine kurze Pause, wenn ein Ratenlimit-Fehler auftritt, und versucht dann die Anfrage erneut. Wenn die Anfrage erneut fehlschlägt, wird die Pausendauer schrittweise erhöht, bis die Anfrage erfolgreich ist oder bis eine maximale Anzahl von Wiederholungen erreicht ist.

Dieser Ansatz hat viele Vorteile:

- __Exponentielles Backoff__ stellt sicher, dass erste Versuche schnell durchgeführt werden, während längere Verzögerungen bei wiederholten Fehlern vorgesehen sind.
- Das Hinzufügen __zufälliger Variation__ zur Pause hilft zu verhindern, dass alle Versuche gleichzeitig auftreten.

Es ist wichtig zu beachten, dass __erfolglose Anfragen Ihr Ratenlimit nicht beeinflussen__. Das kontinuierliche erneute Senden einer Anfrage ist jedoch möglicherweise keine langfristig tragfähige Lösung, da sich dieses Verhalten in Zukunft ändern könnte. Wir empfehlen daher, sich nicht ausschließlich auf diesen Mechanismus zu verlassen.

Die Python-Bibliotheken __[Backoff](https://pypi.org/project/backoff/)__ und __[Tenacity](https://pypi.org/project/tenacity/)__ sind gute Ausgangspunkte für die Implementierung von Abmilderungsstrategien.

## Endpunkt-Lebenszyklus und Veralterung

### Veraltungspolitik

Cloud Temple verpflichtet sich, die API-Kompatibilität im Laufe der Zeit aufrechtzuerhalten. Wenn es jedoch notwendig ist, die API weiterzuentwickeln (neue Funktionen, Optimierungen, Sicherheitskorrekturen), können einige Endpunkte veraltet und dann entfernt werden.

#### 3-Monats-Mindestregel

Wenn ein Endpunkt als veraltet markiert wird:

1. **Offizielle Ankündigung**: Die Veraltung wird in den Konsolen-Release-Notes angekündigt
2. **Übergangsphase**: Der Endpunkt bleibt **mindestens 3 Monate** nach der Ankündigung **zugänglich und funktionsfähig**
3. **Entfernungsdatum**: Ein spezifisches endgültiges Entfernungsdatum wird zum Zeitpunkt der Ankündigung mitgeteilt
4. **Dokumentierte Alternative**: Der neue Ersatz-Endpunkt ist dokumentiert und verfügbar

Diese 3-Monats-Regel gibt Ihnen die notwendige Zeit, Ihren Code anzupassen und zu den neuen Endpunkten zu migrieren.

### Wie identifiziert man einen veralteten Endpunkt?

#### Im API-Portal (Swagger)

Veraltete Endpunkte erscheinen durchgestrichen in der Swagger-Dokumentation:


~~POST /v1/alter/endpunkt~~

Die Endpunkt-Beschreibung enthält:
- Das Ankündigungsdatum der Veraltung
- Das geplante Entfernungsdatum
- Den empfohlenen Ersatz-Endpunkt

<img src={ShivaApi004} />

### Best Practices für das Management von Veraltungen

1. **Veraltete Funktionen überwachen**: Überprüfen Sie regelmäßig die veralteten Funktionen in der Konsole, um über bevorstehende Veraltungen informiert zu werden.

2. **Ihre Migrationen planen**: Sobald eine Veraltung angekündigt wird, planen Sie die Migration Ihres Codes zum neuen Endpunkt innerhalb von 3 Monaten.

3. **Neue Endpunkte testen**: Testen Sie neue Endpunkte, sobald sie verfügbar sind, auch während der Übergangsphase.

4. **Ihre Abhängigkeiten dokumentieren**: Führen Sie eine Liste der von Ihrer Anwendung verwendeten Endpunkte, um zukünftige Migrationen zu erleichtern.

## Best Practices

### Token-Sicherheit

:::danger[Wesentliche Sicherheitsregeln]
- 🚫 Exponieren Sie Ihre Tokens niemals in versioniertem Code (Git, etc.)
- 🔐 Verwenden Sie Umgebungsvariablen zum Speichern von Tokens
- 🎯 Erstellen Sie Tokens mit minimalen Berechtigungen (Prinzip der geringsten Rechte)
- 🔄 Erneuern Sie Ihre Tokens regelmäßig (maximal 12 Monate)
- ⚠️ Widerrufen Sie kompromittierte Tokens sofort
:::

### Fehlerbehandlung

Behandeln Sie immer HTTP-Fehler in Ihrem Code. Achten Sie besonders auf die folgenden Codes:

| Code | Beschreibung | Empfohlene Aktion |
|------|-------------|-------------------|
| **401** Unauthorized | Abgelaufener oder ungültiger Token | Erneut mit Ihrem PAT authentifizieren |
| **403** Forbidden | Unzureichende Berechtigungen | Token-Rechte überprüfen |
| **429** Too Many Requests | Ratenlimit erreicht | Warten vor erneutem Versuch (Backoff) |
| **500/503** Server Error | Temporärer Serverfehler | Später erneut versuchen |

### API-Aufruf-Optimierung

- Paginierung für große Listen verwenden
- Daten zwischenspeichern, die sich selten ändern
- Filter verwenden, um zurückgegebene Daten zu begrenzen
- Operationen nach Möglichkeit gruppieren
- Asynchronen Aktivitätsstatus verfolgen anstelle von intensivem Polling

### Wiederholung mit exponentiellem Backoff

Um temporäre Fehler oder Ratenlimiting (HTTP 429) zu behandeln, implementieren Sie eine Wiederholungsstrategie mit exponentiellem Backoff:

:::tip[Empfohlene Wiederholungsstrategie]
- ⏱️ **Progressive Wartezeit**: 1s, 2s, 4s, 8s...
- 🎲 **Zufällige Variation**: Verhindert, dass alle Clients gleichzeitig wiederholen
- 🔄 **Wiederholungslimit**: Maximal 3-5 Versuche
- 📚 **Python-Bibliotheken**: [Backoff](https://pypi.org/project/backoff/) oder [Tenacity](https://pypi.org/project/tenacity/)
:::
