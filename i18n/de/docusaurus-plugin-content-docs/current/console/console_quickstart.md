---
title: Schnellstart
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgTenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgAccess from '@site/docs/console/images/shiva_org_access.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

## Voraussetzungen

- Ein Cloud Temple-Produkt abonniert haben. Für eine einfache Buchung können Sie uns [uns kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder per E-Mail an __contact@cloud-temple.com__.
- Zugriff auf die Konsole haben
- Die öffentliche IPv4-Adresse in der Cloud Temple-Vertrauenszone hinterlegt haben (der Zugriff auf die Konsole ist auf identifizierte vertrauenswürdige Adressen beschränkt)

## Verbindung mit Ihrem Cloud Temple-Tenant

Die Konsole ist über die folgende URL erreichbar: [Konsole](https://shiva.cloud-temple.com) oder direkt über die URL, die Ihnen per E-Mail mitgeteilt wurde.

Die erste Seite ermöglicht die Auswahl der [Organisation](iam/concepts.md#organisations), in der Ihr Benutzer erstellt wurde.
Nachdem das Unternehmen angegeben wurde, klicken Sie bitte auf __'Anmelden'__.

<img src={shivaLogin} />

Sie werden anschließend zu einer Seite weitergeleitet, auf der Sie sich authentifizieren müssen.
Nach der Anmeldung gelangen Sie auf diese Seite.

Hier finden Sie alle Metriken zu den Produkten, die in Ihrem Zuständigkeitsbereich abonniert sind. Bei Problemen mit Ihren VMware- und/oder OpenIaaS-Produkten werden Warnungen angezeigt; die Farbe entspricht ihrer Priorität.

<img src={shivaHome} />

## Organisationsansicht

:::info Zugriff
Die **Organisationsansicht** ist den **Organisationseigentümern** vorbehalten.
:::

Die **Organisationsansicht** bündelt die Funktionen zur Steuerung Ihrer Einheit in der Cloud Temple Console: Verwaltung der Tenants, der Benutzer und ihrer Berechtigungen, Zugriffskontrolle und Verfolgung des Verbrauchs. Eine Organisation fasst einen oder mehrere **Tenants** (voneinander isolierte Cloud-Umgebungen) zusammen, und die Benutzerberechtigungen werden **pro Tenant getrennt** verwaltet.

:::info
Dieser Abschnitt beschreibt die **Oberfläche**: wo sich die einzelnen Funktionen befinden und was sie ermöglichen. Die **Referenzdokumentation** zum Organisations-/Tenant-Modell und zu den Berechtigungen finden Sie im Modul [IAM](iam/concepts.md).
:::

### Kopfleiste und Auswahl des Arbeits-Tenants

Am oberen Rand der Console zeigt die Leiste die aktuelle Organisation an (**„Meine Organisation“**). Die zugehörige Auswahl öffnet die Liste **„Meine Tenants“**: Jeder Tenant erscheint dort, gegebenenfalls mit dem Abzeichen **SecNumCloud**, wenn er qualifiziert ist.

Um den **Arbeits-Tenant auszuwählen**, gibt es zwei Möglichkeiten:

- öffnen Sie in der Kopfleiste die Auswahl **„Meine Tenants“** und klicken Sie auf den gewünschten Tenant;
- verwenden Sie auf der Seite **Tenants** die Aktion **„Mit dem Tenant verbinden“** einer Zeile.

Die technischen Ressourcen (Rechenleistung, Speicher, Netzwerk usw.) sind **jedem Tenant eigen** und werden nicht zwischen Tenants geteilt.

<img src={imgSelector} />

### Dashboard

Das **Dashboard** ist die Startseite der Organisation. Es bietet eine übergreifende Zusammenfassung:

- den Status der **Support-Tickets** (offen, Antwort erforderlich, Kundenvalidierung, Vorfälle);
- die **Anzahl der Tenants** der Organisation;
- einen **Kostenüberblick** (Kosten des laufenden Monats, Aufschlüsselung nach Tenant und nach Dienst).

<img src={imgDashboard} />

### Verwaltung der Organisation

Der Bereich **Administration** der linken Navigation gruppiert die Governance-Seiten der Organisation.

| Seite | Zweck |
|---|---|
| **Tenants** | Tenants erstellen und weiterentwickeln |
| **Benutzer** | Konten und ihre Berechtigungen verwalten |
| **Zugriff** | Liste der zugelassenen öffentlichen IPs (Whitelist) |
| **Logs** | Aktivitätsprotokoll (Nachvollziehbarkeit) |
| **Support** | Tickets der Organisation |

Der **Kostenmanager** (außerhalb des Bereichs Administration) bietet die Verbrauchsverfolgung.

### Tenants

Die Seite **Tenants** listet alle Tenants der Organisation auf. Eine Suchleiste und die Seitennummerierung erleichtern die Navigation, wenn es viele Tenants gibt.

#### Einen Tenant erstellen

Die Schaltfläche **„Neuer Tenant“** öffnet ein zweiteiliges Formular:

- **Identität des Tenants**: der **Name** (in Echtzeit geprüft) und eine **Beschreibung**;
- **Produkte des Tenants**: die auf dem Tenant zu aktivierenden Produkte. Die Schaltflächen **„Alle auswählen“** / **„Alle abwählen“** beschleunigen die Eingabe.

Bestätigen Sie mit **„Erstellen“**: Der Tenant wird mit den ausgewählten Produkten initialisiert.

#### Aktionen für einen Tenant

Das Aktionsmenü jeder Zeile bietet:

- **Mit dem Tenant verbinden** — legt diesen Tenant als Arbeits-Tenant fest;
- **Produkte ändern** — aktiviert oder deaktiviert Produkte auf dem Tenant, um seinen Umfang anzupassen;
- **UUID kopieren** — kopiert die technische Kennung des Tenants (nützlich für die API oder ein Supportticket).

#### Eigentümer und Lebenszyklus

- **Erstellung**: im Self-Service über **„Neuer Tenant“**.
- **Weiterentwicklung**: Hinzufügen oder Entfernen von Produkten über **„Produkte ändern“**.
- **Tenant-Eigentümer**: Jeder Tenant hat mindestens einen Eigentümer. Die Regeln (empfohlene Anzahl, Propagationsverzögerung, Entfernung auf Supportanfrage, Berechtigungen eines Eigentümers) sind im Modul [IAM](iam/concepts.md) beschrieben.

:::info
Vorgänge an Tenants werden auf der Seite **Logs** protokolliert (zum Beispiel „*Creating tenant…*“ oder „*Updating features on tenant…*“).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Benutzer und Berechtigungen

Die Seite **Benutzer** listet die Konten der Organisation auf. Die Anmeldedaten sind **organisationsweit gültig**; die Berechtigungen hingegen werden **pro Tenant** definiert.

Für jedes Konto werden der **Name**, die **E-Mail**, der **Kontotyp** — **Föderiertes Konto** (externer Identitätsanbieter) oder **Lokales Konto** — sowie visuelle Kennzeichen angezeigt: **Eigentümer der Organisation**, **Ich** oder **E-Mail nicht verifiziert** (noch nicht abgeschlossenes Konto).

#### Werkzeuge der Seite

- **Filter**: nach **Eigentümer der Organisation**, **Typ**, **Quelle** und **Status**.
- **CSV exportieren**: exportiert die Liste der Benutzer und ihrer Zugriffe, nützlich für Audits.

#### Aktionen für ein Konto

Das Aktionsmenü bietet je nach Kontostatus:

- **Als Organisationseigentümer hinzufügen**;
- **Erneute Einladung** — sendet die Einladung an ein nicht abgeschlossenes Konto erneut;
- **UUID kopieren**;
- **Löschen**.

:::note
Sie können sich nicht selbst löschen. Das **Einladen** eines neuen Benutzers und die **feingranulare Zuweisung von Berechtigungen pro Tenant** sind im Modul [IAM](iam/quickstart.md) beschrieben.
:::

#### Organisationseigentümer und Tenant-Eigentümer

Dies sind zwei unterschiedliche Konzepte:

- der **Organisationseigentümer** wird über die Seite **Benutzer** hinzugefügt (Aktion „Als Organisationseigentümer hinzufügen“); das **Entfernen erfolgt auf Supportanfrage**;
- der **Tenant-Eigentümer** gehört zum Umfang eines Tenants; seine Regeln sind im Modul [IAM](iam/concepts.md) beschrieben.

:::info
Als **Organisationseigentümer** sind Sie standardmäßig **Eigentümer aller Tenants** der Organisation. Dadurch verfügen Sie über sämtliche Berechtigungen auf jedem dieser Tenants. Umgekehrt verlieren Sie diese Berechtigungen **nicht**, wenn Ihnen diese Rolle entzogen wird: Sie bleiben auf den betreffenden Tenants erhalten.
:::

<img src={imgUsers} />

### Zugriff — IP-Whitelist

Die Seite **Zugriff** verwaltet die **Liste der zugelassenen öffentlichen IP-Adressen**, die die Console erreichen dürfen. Gemäß den **SecNumCloud**-Anforderungen wird nur Datenverkehr von diesen Adressen akzeptiert.

- Jeder Eintrag ordnet einer **IP** (CIDR-Notation) eine **Beschreibung** zu.
- Die Schaltfläche **„Eine IP hinzufügen“** fügt eine Adresse zur Liste hinzu.

:::warning
Das **Löschen** einer zugelassenen IP erfolgt auf **Supportanfrage**.
:::

<img src={imgAccess} />

### Verbrauchsbericht — Kostenmanager

Der **Kostenmanager** bietet eine Ansicht des Verbrauchs der Organisation, aufgeschlüsselt nach Tenant. Er bietet zwei Registerkarten.

#### Registerkarte „Übersicht“

Zusammenfassende Ansicht des laufenden Monats:

- Schlüsselindikatoren: **Kosten des laufenden Monats**, **Kosten des laufenden Jahres**, **Anzahl aktiver Produkte**;
- **Kosten pro Tenant** — Aufschlüsselung der Kosten auf die Tenants;
- **Aktuelle Kosten pro Dienst** und **Aktuelle Kosten pro Produkt** — wichtigste Verbrauchsposten.

#### Registerkarte „Verbrauch“

Detaillierter, historisierter Bericht:

- Auswahl des **Zeitraums** (Anfangs- und Endmonat) und der Achse **„Anzeigen nach“**;
- Ansichten **Monatlicher Verbrauch**, **Gesamt**, **Prognose** und **Trend**;
- eine aufklappbare Tabelle nach **Monat / Tenant / Dienst / Produkt / Betrag**, mit dem **Trend** im Vergleich zum Vormonat.

:::info
Der Betrag des laufenden Monats ist eine **Prognose**: Er wird aus den bereits verbrauchten Tagen geschätzt.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Protokollierung und Support

- **Logs** — die Seite **Aktivitäten** protokolliert die Lese- und Schreibvorgänge der Organisation (Registerkarten **Aktuell** / **Archiviert**, Filter, CSV-Export) zur Nachvollziehbarkeit.
- **Support** — die Seite **Support** bündelt die **Tickets der Organisation** (Indikatoren, Ticketerstellung, Filter, Export).

## Sprachverwaltung

Die Konsole ist in __Französisch__ und __Englisch__ verfügbar. Sie können die Arbeitssprache über das Symbol __Sprache__ oben rechts auf dem Bildschirm ändern.

Die Änderung der Sprache für einen Benutzer erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, unter den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration wird für jeden Tenant [Tenant](iam/concepts.md#tenant) vorgenommen.

## Zugriff auf den technischen Support

Sie können __das Cloud Temple Support-Team__ jederzeit über __das 'Rettungsring'-Symbol__ oben rechts auf dem Bildschirm kontaktieren.

<img src={shivaSupport} />

Während des gesamten Vorgangs zur Supportanfrage werden Sie Schritt für Schritt geführt.

Der erste Schritt besteht in der Identifizierung der Art der Supportanfrage:

- Beratung zur Nutzung eines Produkts anfordern (kein Vorfall),
- Unterstützung in Bezug auf Ihr Kundenkonto anfordern,
- Einen Vorfall melden oder technischen Support anfordern.
- Unterstützung durch einen professionellen Dienst anfordern (Bereitstellung eines Cloud Temple-Ingenieurs für ein spezifisches Problem).

<img src={shivaSupport_01} />

Anschließend haben Sie die Möglichkeit, Präzisierungen vorzunehmen und Dateien anzuhängen (z. B. Bilder oder Protokolle).

Der Kunde kann im Ticket-Description bei einem Sicherheitsvorfall zudem einen Kritikalitätsgrad (P1 bis P5) angeben, wie folgt:

<img src={shivaSupportCriticities} />

__KRITISCH (P1)__:

- Verdacht auf Datenleck sensibler Daten
- Erkennung eines unbefugten Zugriffs auf Ihre Daten
- Kompromittierung Ihrer Administrationsanmeldedaten
- Totalausfall Ihrer kritischen Dienste
- Anormale Aktivitäten bei sensiblen Daten
- Verstoß gegen den Schutz personenbezogener Daten

__HOCH (P2)h__:

- Fehlfunktion der Benutzerzugänge
- Anomalie in der Verschlüsselung Ihrer Daten
- Verlust des Zugriffs auf bestimmte kritische Funktionen
- Inkonsistenzen in den Daten
- Massive Verzögerungen, die den Betrieb beeinträchtigen

__MITTLER (P3)__:

- Lokal begrenztes Leistungsproblem
- Vorfall bei einer nicht kritischen Funktion
- Konfigurationsfehler mit begrenzter Auswirkung
- Vorübergehende Zugriffsprobleme

__GERING (P4)__:

- Anfrage zur Untersuchung
- Anomalie ohne direkte Auswirkung
- Compliance-Frage
- Bedarf an technischer Klärung

__OPERATIVER DIENST (P5)__:

- Betriebsbereiter Dienst ohne unmittelbares Risiko

<img src={shivaSupport_02} />

Nach Einreichung Ihrer Anfrage können Sie diese über __das 'Rettungsring'-Symbol__ oben rechts auf dem Bildschirm einsehen:

<img src={shivaSupport_03} />

## Zugriff auf Benutzerfunktionen über die Weboberfläche

Alle Funktionen, die Ihrem Benutzer (je nach Berechtigungen) zugänglich sind, befinden sich links auf dem Bildschirm im grünen Banner.
Die Funktionen sind nach Modulen gruppiert. Dazu gehören hauptsächlich :

- Das __Inventar__ Ihrer Ressourcen,
- Das __Betriebstracking__,
- Das __Management der IaaS-Ressourcen__ (Compute, Storage, Netzwerk, ...)
- Das __Management der OpenIaaS-Ressourcen__ (Compute, Storage, Netzwerk, ...)
- Der Zugriff auf __Zusatzdienste__ (Bastion, Monitoring, ...)
- Die __Verwaltung Ihrer Organisation__ (Management von Tenants, Berechtigungen, ...)

Die Aktivierung eines Moduls für einen Benutzer hängt von dessen Berechtigungen ab. So ist das Modul __'Bestellung'__ beispielsweise nicht verfügbar, wenn der Benutzer nicht über die Berechtigung __'ORDER'__ verfügt.

Nachfolgend eine Übersicht der verfügbaren Module. Die Konsole wird regelmäßig um neue Module erweitert :
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : ermöglicht einen schnellen Überblick über die __Gesamtzahl der Compute- und Storage-Ressourcen__, die __Backup_-Statistiken und eine __Zusammenfassung der Support-Tickets__,
- __Inventar__ : ermöglicht einen Überblick über alle Ihre Ressourcen vom Typ __'virtuelle Maschinen'__. Bei Verwendung von __Tags__ ermöglicht es eine Ansicht nach __Tag__ (z. B. Geschäftsbereich, Anwendung, ...),
- __Managed Services__ : ermöglicht den Zugriff auf das Tracking Ihrer __Support-Anfragen__ und die __Service-Metriken__,
- __IaaS__ : ermöglicht das __Management der VMware IaaS-Infrastrukturen__ (Virtuelle Maschinen, Cluster, Hypervisor, Replikationen, Backups, ...),
- __OpenIaaS__ : ermöglicht das __Management der Xen Orchestra-Ressourcen__ (Virtuelle Maschinen, Backups, ...),
- __OpenShift__ : ermöglicht das Management Ihrer **RedHat OpenShift PaaS-Architektur** und das Management Ihrer Container in den 3 Verfügbarkeitszonen der Plattform.
- __Bastion__ : Ermöglicht das Bereitstellen und Management von SSH/RDP-Bastion-Appliances in Ihren Netzwerken,
- __Netzwerk__ : ermöglicht das Management von __Layer-2- und Layer-3-Netzwerken__, __öffentlichen IPs__ und Ihren __Telekommunikationsleitungen__,
- __Colocation__ : Bietet einen Überblick über Geräte in Zonen mit __gemeinsamer oder dedizierter Colocation__,
- __Bestellung__ : Ermöglicht die Bestellung von Ressourcen und das Tracking von Bereitstellungen,
- __Administration__ : Bündelt die Verwaltungsfunktionen für Benutzer und Tenants sowie den Zugriff auf die globale Protokollierung.
</div>
</div>
Die Symbole __'NEW'__ bedeuten, dass das betreffende Produkt bereitgestellt wurde, aber noch nicht für das __SecNumCloud-Angebot__ zertifiziert ist, und __'BETA'__ bedeuten, dass das betreffende Produkt bereitgestellt und kürzlich für das __SecNumCloud-Angebot__ zertififiziert wurde.

__Protokollierung - Aktivitätsverfolgung__
=====================================

Die Aktivitätsseite dient dazu, einen vollständigen Überblick über alle Lese- und Schreiboperationen innerhalb der Konsole zu bieten und gewährleistet so eine verbesserte Nachverfolgbarkeit und Sicherheit. Sie hebt die beiden Hauptregisterkarten hervor : Aktuell und Archivierte.

<img src={shivaLogs} />

### __Seitenstruktur__

#### __Register__

- __Aktuell__

- Aktuelle Vorgänge
- Echtzeitüberwachung

- __Archiviert__

- Vorgänge über einen längeren Zeitraum
- Archivierte Vorgänge zur Rückverfolgbarkeit und Compliance

#### __Angezeigte Informationen__

- Datum und Uhrzeit

- Operationstyp
  - Status
- Benutzer
- Operationsbeschreibung

#### __Funktionalität__

- Suche/Filterung für spezifische Operationen

### __Nutzung__

- __Zugriff :__ Berechtigung `activity_read`
- __Navigation :__
  - Wählen Sie die Registerkarte „Aktuell“ für Echtzeitvorgänge.
  - Wählen Sie „Archiviert“, um den Verlauf einzusehen.
  - Nutzen Sie die Such- und Filterfunktionen, um bestimmte Vorgänge zu finden.

#### __Hinweis zur Konformität__

Gemäß der SecNumCloud-Qualifikation beträgt die Mindestspeicherdauer der Ereignisse der Cloud-Temple-Konsole __6 Monate__, wodurch somit die Einhaltung der Sicherheits- und Rückverfolgbarkeitsanforderungen gewährleistet wird.

## Anzeige der neuesten Updates

Klicken Sie unten links im grünen Banner auf das Symbol __'Neuigkeiten'__. Sie erhalten die Details der Änderungen für jede Version der Cloud Temple-Konsole.

<img src={shivaOnboard_009} />

## Zugriff auf die Benutzerfunktionen über die API

Der Zugriff auf alle Funktionen der Konsole ist über die Konsolen-API möglich. Details zu den Verben und Konfigurationen finden Sie über __'Profil'__ und __'APIs'__ :

<img src={shivaOnboard_008} />

## Terraform-Provider

Cloud Temple stellt Ihnen einen [Terraform-Provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) zur Verfügung, um Ihre Cloud-Plattform *"als Code"* zu steuern.