---
title: Konzepte der Console
---

## Einführung

Die **Cloud-Temple-Konsole** ist der zentrale Zugang zum gesamten Cloud-Temple-Katalog: Compute, Speicher, Netzwerk, Sicherheit, Container, KI und Managed Services. Hier bestellen und verwalten Sie Ihre Ressourcen im Self-Service, verwalten Identitäten und Zugriffe, verfolgen Ihre Vorgänge und eröffnen Ihre Supportanfragen.

Sie ist *API-first* konzipiert: Die Weboberfläche basiert auf der öffentlichen API, die Sie direkt, mit dem Terraform-Provider oder mit dem MCP-Server nutzen können.

Sie richtet sich an IT-Teams, die ihre Plattform verwalten, an DevOps-Teams, die sie automatisieren, an Sicherheits- und Compliance-Teams, die Zugriffe und Nachverfolgbarkeit kontrollieren, und an Betriebsteams, die die Vorgänge verfolgen.

Das Modell, auf dem die Konsole basiert (Organisation, Tenants, Benutzer und Berechtigungen), ist im Abschnitt Architektur beschrieben; seine Referenzdokumentation ist das Modul [IAM](./iam/concepts.md).

## Vorteile

| Vorteil | Beschreibung |
|---|---|
| Zentraler Zugang | Alle Ihre Ressourcen und Dienste in einem Portal, mit einem einzigen Satz von Zugangsdaten. |
| Self-Service | Sie erstellen, konfigurieren und löschen Ihre Ressourcen jederzeit, ohne Eingreifen von Cloud Temple. |
| Automatisierung | Die Plattform lässt sich per API oder mit Terraform steuern, mit versionierbaren Konfigurationen, die sich in Ihre CI/CD-Pipelines einfügen. |
| Sicherheit und Nachverfolgbarkeit | Nach IP-Adresse gefilterte Zugriffe, Zwei-Faktor-Authentifizierung, Berechtigungen pro Tenant und Protokollierung der Aktionen. |

## Funktionen

| Funktion | Beschreibung |
|---|---|
| Webkonsole | Dashboard, Ressourceninventar, Bestellungen im Self-Service, Zugang zu allen abonnierten Produkten. |
| Identitäts- und Zugriffsverwaltung | Organisation, Tenants, Benutzer und Berechtigungen: siehe das Modul [IAM](./iam/concepts.md). |
| REST-API | Im Format OpenAPI 3.0 dokumentierte API, über die Konsole abrufbar: siehe die [API der Konsole](./api.md). |
| Terraform-Provider | Provider `Cloud-Temple/cloudtemple`, im Terraform Registry veröffentlicht: siehe den [Terraform-Provider](../terraform/terraform.md). |
| MCP-Server | Anbindung eines MCP-kompatiblen KI-Clients (*Model Context Protocol*) an Ihren Tenant, um Ihre Umgebung abzufragen. |
| Verfolgung der Vorgänge | [Geplante Eingriffe und Störungen](./status.md), Aktivitätsprotokoll. |
| Support | Erstellung und Verfolgung von Supportanfragen über die Konsole. |

## Architektur

### Organisation und Tenants

Die gesamte Plattform beruht auf zwei Ebenen.

**Die Organisation** steht für Ihre Einheit: Unternehmen, Abteilung oder Team. Sie trägt Ihren Vertrag und Ihre Abrechnung und bündelt alle Nutzerkonten. Sie legt außerdem den gemeinsamen Authentifizierungsmechanismus dieser Konten fest: lokal in der Console oder föderiert mit Ihrem eigenen Verzeichnis.

**Der Tenant** ist eine Arbeitsumgebung innerhalb der Organisation. Eine Organisation hat mindestens einen. Bestellte Ressourcen sind einem bestimmten Tenant zugeordnet und werden nicht mit anderen Tenants geteilt.

```
Ihre Organisation
├── Tenant „Produktion"
├── Tenant „Abnahme"
└── Tenant „Lab"
```

Die Aufteilung in Tenants bestimmen Sie: nach Umgebung (Produktion, Abnahme), nach Anwendung oder nach Kritikalität. Sie können jederzeit Tenants hinzufügen, und kein Produkt ist von vornherein aktiviert: Sie wählen die Produkte jedes Tenants. Details finden Sie unter [Organisationen](./iam/concepts.md#organisationen) und [Tenant](./iam/concepts.md#tenant).

Die Ressourcen eines Tenants werden in [Regionen und Verfügbarkeitszonen](../additional_content/concepts_regional.md) bereitgestellt.

### Nutzer und Berechtigungen

Die **Zugangsdaten** eines Nutzers gelten für die gesamte Organisation. Seine **Berechtigungen** werden dagegen Tenant für Tenant festgelegt: Ein Konto kann berechtigt sein, in einem Tenant Ressourcen zu bestellen, in einem anderen aber nicht.

Zwei Rollen sind zu unterscheiden:

- der **Eigentümer der Organisation** verwaltet Konten, Tenants und erlaubte IP-Adressen. Er ist standardmäßig Eigentümer aller Tenants der Organisation;
- der **Eigentümer eines Tenants** erhält alle Berechtigungen der auf diesem Tenant aktivierten Produkte.

Beide Rollen kann dieselbe Person innehaben. Die vollständigen Regeln stehen unter [Zuweisung von Berechtigungen in einem Tenant](./iam/concepts.md#zuweisung-von-berechtigungen-in-einem-tenant) und in der [Liste der Berechtigungen](./iam/concepts.md#berechtigungen).

### Oberfläche und API

Alles, was Sie in der Console tun, ist auch über ihre [API](./api.md) möglich. Sie authentifiziert sich mit einem **API-Schlüssel** (*Personal Access Token*), der an einen Tenant und an den Nutzer gebunden ist, der ihn erstellt hat. Der [Terraform-Provider](../terraform/terraform.md), mit dem Sie Ihre Plattform *as code* steuern, authentifiziert sich ebenfalls mit API-Zugangsdaten, die in der Console erzeugt werden.

## Regionen und Verfügbarkeitszonen

Die Konsole und die API werden in Frankreich gehostet. Sie steuern die Ressourcen Ihrer Tenants, die in den Regionen und Verfügbarkeitszonen des jeweiligen Produkts bereitgestellt werden.

## Technische Spezifikationen

### Oberfläche

Die Konsole ist auf Französisch, Englisch, Deutsch, Spanisch und Italienisch verfügbar.

### API und Terraform-Provider

- Die API folgt dem Format OpenAPI 3.0; ihre interaktive Dokumentation ist über die Konsole abrufbar. Jede Schreibanfrage erzeugt eine [Aktivität](./api.md), mit der sich ihr Status verfolgen lässt.
- Der Terraform-Provider ist mit Terraform 1.0 und neueren Versionen sowie mit OpenTofu kompatibel.

### MCP-Server

Der MCP-Server basiert auf der öffentlichen API und übernimmt deren Kontrollen: Authentifizierung per persönlichem Zugriffstoken, Berechtigungen, Filterung nach IP-Adresse und Protokollierung der Aktionen. Ein KI-Client handelt nur im Rahmen der Berechtigungen des verwendeten Tokens.

### Grenzen

- Die Ratenbegrenzungen der API sind pro Produkt festgelegt; darüber hinaus antwortet die API mit einem HTTP-Fehler 429: siehe die [API der Konsole](./api.md).

## Sicherheit und Compliance

### Zugriff auf die Console

Der Zugriff auf die Console ist auf zwei Ebenen geschützt:

- **erlaubte IP-Adressen**: Nur die von Ihrer Organisation angegebenen öffentlichen IP-Adressen können die Console erreichen. Es gibt eine einzige Liste für die gesamte Organisation, unabhängig davon, aus welchem Tenant sie bearbeitet wird;
- **Zwei-Faktor-Authentifizierung**: Sie ist für alle Konten der Console Pflicht. Ist Ihre Organisation mit Ihrem eigenen Verzeichnis föderiert, siehe die [Authentifizierungsmechanismen](./iam/concepts.md#authentifizierungsmechanismen).

Das Vorgehen ist unter [Anmelden und Zugänge absichern](./onboarding.md#schritt-2-anmelden-und-zugriffe-absichern) beschrieben.

### Nachverfolgbarkeit

Die Vorgänge werden protokolliert: Identität des Initiators, Datum, Art des Vorgangs und Status. Da die Konsole auf einer nach SecNumCloud qualifizierten Infrastruktur gehostet wird, werden ihre Ereignisse mindestens 6 Monate aufbewahrt.

### Zertifizierungen

Die Konsole ist nach HDS und ISO 27001 zertifiziert und in den nach SecNumCloud qualifizierten und C5-konformen Diensten enthalten.

## Reversibilität

Die Konsole und die API speichern Ihre Anwendungsdaten nicht: Sie bewahren Konfigurationsmetadaten und Protokolle auf.

- **Terraform-Konfigurationen**: Ihre Konfigurationsdateien und Ihre State-Datei gehören Ihnen.
- **Aktivitätsprotokolle**: über die API der Konsole exportierbar.

## Preise

Die Konsole, die API, der MCP-Server und der Terraform-Provider sind ohne Aufpreis in jedem Cloud-Temple-Abonnement enthalten. Die von Ihnen bestellten Ressourcen werden zum Preis des jeweiligen Produkts abgerechnet. Siehe die Produktseite auf der Cloud-Temple-Website:
[Konsole – API – Terraform-Provider](https://www.cloud-temple.com/produits/console-api-provider-terraform/).
