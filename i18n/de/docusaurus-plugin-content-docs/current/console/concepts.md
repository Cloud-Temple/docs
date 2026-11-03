---
title: Konzepte der Console
---

Diese Seite stellt das Modell vor, auf dem die Console beruht: die Organisation, die Tenants, die Nutzer und ihre Berechtigungen sowie die zwei Zugangswege. Die Referenzdokumentation dieses Modells ist das Modul [IAM](./iam/concepts.md).

## Organisation und Tenants

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

## Nutzer und Berechtigungen

Die **Zugangsdaten** eines Nutzers gelten für die gesamte Organisation. Seine **Berechtigungen** werden dagegen Tenant für Tenant festgelegt: Ein Konto kann berechtigt sein, in einem Tenant Ressourcen zu bestellen, in einem anderen aber nicht.

Zwei Rollen sind zu unterscheiden:

- der **Eigentümer der Organisation** verwaltet Konten, Tenants und erlaubte IP-Adressen. Er ist standardmäßig Eigentümer aller Tenants der Organisation;
- der **Eigentümer eines Tenants** erhält alle Berechtigungen der auf diesem Tenant aktivierten Produkte.

Beide Rollen kann dieselbe Person innehaben. Die vollständigen Regeln stehen unter [Zuweisung von Berechtigungen in einem Tenant](./iam/concepts.md#zuweisung-von-berechtigungen-in-einem-tenant) und in der [Liste der Berechtigungen](./iam/concepts.md#berechtigungen).

## Zugriff auf die Console

Der Zugriff auf die Console ist auf zwei Ebenen geschützt:

- **erlaubte IP-Adressen**: Nur die von Ihrer Organisation angegebenen öffentlichen IP-Adressen können die Console erreichen. Es gibt eine einzige Liste für die gesamte Organisation, unabhängig davon, aus welchem Tenant sie bearbeitet wird;
- **Zwei-Faktor-Authentifizierung**: Sie ist für alle Konten der Console Pflicht. Ist Ihre Organisation mit Ihrem eigenen Verzeichnis föderiert, siehe die [Authentifizierungsmechanismen](./iam/concepts.md#authentifizierungsmechanismen).

Das Vorgehen ist unter [Anmelden und Zugänge absichern](./onboarding.md#schritt-2-anmelden-und-zugriffe-absichern) beschrieben.

## Oberfläche und API

Alles, was Sie in der Console tun, ist auch über ihre [API](./api.md) möglich. Sie authentifiziert sich mit einem **API-Schlüssel** (*Personal Access Token*), der an einen Tenant und an den Nutzer gebunden ist, der ihn erstellt hat. Der [Terraform-Provider](../terraform/terraform.md), mit dem Sie Ihre Plattform *as code* steuern, authentifiziert sich ebenfalls mit API-Zugangsdaten, die in der Console erzeugt werden.
