---
title: Organisationsansicht
---

Die **Organisationsansicht** bündelt die Funktionen zur Steuerung Ihrer Einheit in der Cloud Temple Console: Verwaltung der Tenants, der Benutzer und ihrer Berechtigungen, Zugriffskontrolle und Verfolgung des Verbrauchs. Eine Organisation fasst einen oder mehrere **Tenants** (voneinander isolierte Cloud-Umgebungen) zusammen, und die Benutzerberechtigungen werden **pro Tenant getrennt** verwaltet.

:::info
Diese Seite beschreibt die **Oberfläche**: wo sich die einzelnen Funktionen befinden und was sie ermöglichen. Die **Referenzdokumentation** zum Organisations-/Tenant-Modell und zu den Berechtigungen finden Sie im Modul [IAM](iam/concepts.md).
:::

## Kopfleiste und Auswahl des Arbeits-Tenants

Am oberen Rand der Console zeigt die Leiste die aktuelle Organisation an (**„Meine Organisation“**). Die zugehörige Auswahl öffnet die Liste **„Meine Tenants“**: Jeder Tenant erscheint dort, gegebenenfalls mit dem Abzeichen **SecNumCloud**, wenn er qualifiziert ist.

Um den **Arbeits-Tenant auszuwählen**, gibt es zwei Möglichkeiten:

- öffnen Sie in der Kopfleiste die Auswahl **„Meine Tenants“** und klicken Sie auf den gewünschten Tenant;
- verwenden Sie auf der Seite **Tenants** die Aktion **„Mit dem Tenant verbinden“** einer Zeile.

Die technischen Ressourcen (Rechenleistung, Speicher, Netzwerk usw.) sind **jedem Tenant eigen** und werden nicht zwischen Tenants geteilt.

{/* TODO screenshot: Kopfleiste mit ausgeklapptem Menü „Meine Tenants“ (SecNumCloud-Abzeichen sichtbar) */}

## Dashboard

Das **Dashboard** ist die Startseite der Organisation. Es bietet eine übergreifende Zusammenfassung:

- den Status der **Support-Tickets** (offen, Antwort erforderlich, Kundenvalidierung, Vorfälle);
- die **Anzahl der Tenants** der Organisation;
- einen **Kostenüberblick** (Kosten des laufenden Monats, Aufschlüsselung nach Tenant und nach Dienst).

{/* TODO screenshot: Dashboard der Organisation (Zusammenfassung Support, Tenants, Kosten) */}

## Verwaltung der Organisation

Der Bereich **Administration** der linken Navigation gruppiert die Governance-Seiten der Organisation. Die Anzeige jeder Seite hängt von den Berechtigungen des Benutzers ab.

| Seite | Zweck | Erforderliche Berechtigung |
|---|---|---|
| **Tenants** | Tenants erstellen und weiterentwickeln | Administrationsrechte (siehe unten) |
| **Benutzer** | Konten und ihre Berechtigungen verwalten | `iam_read` / `iam_write` |
| **Zugriff** | Liste der zugelassenen öffentlichen IPs (Whitelist) | `console_public_access_read` / `console_public_access_write` |
| **Logs** | Aktivitätsprotokoll (Nachvollziehbarkeit) | `activity_read` |
| **Support** | Tickets der Organisation | `support_read` / `support_write` / `support_management` |

Der **Kostenmanager** (außerhalb des Bereichs Administration) bietet die Verbrauchsverfolgung (`billing_read`).

## Tenants

Die Seite **Tenants** listet alle Tenants der Organisation auf. Eine Suchleiste und die Seitennummerierung erleichtern die Navigation, wenn es viele Tenants gibt.

### Einen Tenant erstellen

Die Schaltfläche **„Neuer Tenant“** öffnet ein zweiteiliges Formular:

- **Identität des Tenants**: der **Name** (in Echtzeit geprüft) und eine **Beschreibung**;
- **Produkte des Tenants**: die auf dem Tenant zu aktivierenden Produkte — VM Instances, VMware, OpenIaaS, OpenShift, Bare Metal, Bastion, Object Storage, Private Backbone, VPC, LLMaaS, Colocation. Die Schaltflächen **„Alle auswählen“** / **„Alle abwählen“** beschleunigen die Eingabe.

Bestätigen Sie mit **„Erstellen“**: Der Tenant wird mit den ausgewählten Produkten initialisiert.

:::note
Ein Tenant kann nicht leer bleiben: Er wird mit einem Mindestbestand an Ressourcen initialisiert. Die Voraussetzungen (Verfügbarkeitszone, Rechen-Cluster, Speicher, VLAN) und die zugehörigen Bestellreferenzen sind im Modul [IAM](iam/concepts.md) beschrieben.
:::

### Aktionen für einen Tenant

Das Aktionsmenü jeder Zeile bietet:

- **Mit dem Tenant verbinden** — legt diesen Tenant als Arbeits-Tenant fest;
- **Produkte ändern** — aktiviert oder deaktiviert Produkte auf dem Tenant, um seinen Umfang anzupassen;
- **UUID kopieren** — kopiert die technische Kennung des Tenants (nützlich für die API oder ein Supportticket).

### Eigentümer und Lebenszyklus

- **Erstellung**: im Self-Service über **„Neuer Tenant“**, vorbehaltlich der entsprechenden Administrationsrechte.
- **Weiterentwicklung**: Hinzufügen oder Entfernen von Produkten über **„Produkte ändern“**.
- **Löschung**: erfolgt auf **Supportanfrage** — es gibt keine direkte Löschung über die Oberfläche.
- **Tenant-Eigentümer**: Jeder Tenant hat mindestens einen Eigentümer. Die Regeln (empfohlene Anzahl, Propagationsverzögerung, Entfernung auf Supportanfrage, Berechtigungen eines Eigentümers) sind im Modul [IAM](iam/concepts.md) beschrieben.

:::info
Vorgänge an Tenants werden auf der Seite **Logs** protokolliert (zum Beispiel „*Creating tenant…*“ oder „*Updating features on tenant…*“).
:::

{/* TODO screenshot: Seite Tenants (Liste), dann Dialog „Neuer Tenant“ (Abschnitte Identität + Produkte) */}

## Benutzer und Berechtigungen

Die Seite **Benutzer** listet die Konten der Organisation auf. Die Anmeldedaten sind **organisationsweit gültig**; die Berechtigungen hingegen werden **pro Tenant** definiert.

Für jedes Konto werden der **Name**, die **E-Mail**, der **Kontotyp** — **Föderiertes Konto** (externer Identitätsanbieter) oder **Lokales Konto** — sowie visuelle Kennzeichen angezeigt: **Eigentümer der Organisation**, **Ich** oder **E-Mail nicht verifiziert** (noch nicht abgeschlossenes Konto).

### Werkzeuge der Seite

- **Filter**: nach **Eigentümer der Organisation**, **Typ**, **Quelle** und **Status**.
- **CSV exportieren**: exportiert die Liste der Benutzer und ihrer Zugriffe, nützlich für Audits.

### Aktionen für ein Konto

Das Aktionsmenü bietet je nach Kontostatus:

- **Als Organisationseigentümer hinzufügen / entfernen**;
- **Erneute Einladung** — sendet die Einladung an ein nicht abgeschlossenes Konto erneut;
- **UUID kopieren**;
- **Löschen**.

:::note
Sie können sich nicht selbst löschen. Das **Einladen** eines neuen Benutzers und die **feingranulare Zuweisung von Berechtigungen pro Tenant** (Rechte `read` / `write` / `management` …) sind im Modul [IAM](iam/quickstart.md) beschrieben. Die Verwaltung der Berechtigungen erfordert das Recht `iam_write`.
:::

### Organisationseigentümer und Tenant-Eigentümer

Dies sind zwei unterschiedliche Konzepte:

- der **Organisationseigentümer** wird über die Seite **Benutzer** verwaltet (Aktion „Als Organisationseigentümer hinzufügen / entfernen“);
- der **Tenant-Eigentümer** gehört zum Umfang eines Tenants; seine Regeln sind im Modul [IAM](iam/concepts.md) beschrieben.

{/* TODO screenshot: Seite Benutzer (Kennzeichen „Eigentümer der Organisation“ und „Föderiertes Konto“) + Filterbereich */}

## Zugriff — IP-Whitelist

Die Seite **Zugriff** verwaltet die **Liste der zugelassenen öffentlichen IP-Adressen**, die die Console erreichen dürfen. Gemäß den **SecNumCloud**-Anforderungen wird nur Datenverkehr von diesen Adressen akzeptiert.

- Jeder Eintrag ordnet einer **IP** (CIDR-Notation) eine **Beschreibung** zu.
- Die Schaltfläche **„Eine IP hinzufügen“** fügt eine Adresse hinzu (Recht `console_public_access_write`); die Ansicht erfordert `console_public_access_read`.

:::warning
Das **Löschen** einer zugelassenen IP erfolgt auf **Supportanfrage**.
:::

{/* TODO screenshot: Seite Zugriff (IP-Whitelist) + Dialog „Eine IP hinzufügen“ */}

## Verbrauchsbericht — Kostenmanager

Der **Kostenmanager** bietet eine Ansicht des Verbrauchs der Organisation, aufgeschlüsselt nach Tenant. Er erfordert das Recht `billing_read` und bietet zwei Registerkarten.

### Registerkarte „Übersicht“

Zusammenfassende Ansicht des laufenden Monats:

- Schlüsselindikatoren: **Kosten des laufenden Monats**, **Kosten des laufenden Jahres**, **Anzahl aktiver Produkte**;
- **Kosten pro Tenant** — Aufschlüsselung der Kosten auf die Tenants;
- **Aktuelle Kosten pro Dienst** und **Aktuelle Kosten pro Produkt** — wichtigste Verbrauchsposten.

### Registerkarte „Verbrauch“

Detaillierter, historisierter Bericht:

- Auswahl des **Zeitraums** (Anfangs- und Endmonat) und der Achse **„Anzeigen nach“**;
- Ansichten **Monatlicher Verbrauch**, **Gesamt**, **Prognose** und **Trend**;
- eine aufklappbare Tabelle nach **Monat / Tenant / Dienst / Produkt / Betrag**, mit dem **Trend** im Vergleich zum Vormonat.

:::info
Der Betrag des laufenden Monats ist eine **Prognose**: Er wird aus den bereits verbrauchten Tagen geschätzt.
:::

{/* TODO screenshot: Kostenmanager — Registerkarte „Übersicht“, dann Registerkarte „Verbrauch“ */}

## Protokollierung und Support

- **Logs** — die Seite **Aktivitäten** protokolliert die Lese- und Schreibvorgänge der Organisation (Registerkarten **Aktuell** / **Archiviert**, Filter, CSV-Export) zur Nachvollziehbarkeit (`activity_read`). Siehe auch den Abschnitt Protokollierung im [Console-Schnellstart](console_quickstart.md).
- **Support** — die Seite **Support** bündelt die **Tickets der Organisation** (Indikatoren, Ticketerstellung, Filter, Export). Das Erstellen und Verfolgen von Anfragen ist im [Console-Schnellstart](console_quickstart.md) beschrieben.
