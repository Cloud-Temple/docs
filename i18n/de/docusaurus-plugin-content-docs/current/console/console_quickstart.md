---
title: Rundgang durch die Konsole
---
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

Diese Seite führt Sie durch die Oberfläche der Cloud Temple-Konsole: wo Sie jede Funktion finden und was sie ermöglicht.

:::tip[Neu hier?]
Die Erstellung Ihrer Organisation, die Anmeldung, der zweite Faktor, die autorisierten IP-Adressen, die Erstellung eines Tenants, die Einladung Ihrer Mitarbeiter, die Aktivierung der Produkte und der Zugriff auf die API werden der Reihe nach unter [Onboarding](./onboarding.md) beschrieben.
:::

## Voraussetzungen

- Über einen Zugriff auf die Konsole verfügen: siehe [Onboarding](./onboarding.md).
- Sich von einer autorisierten öffentlichen IP-Adresse aus anmelden: siehe [Eine IP-Adresse hinzufügen](./onboarding.md#eine-ip-adresse-hinzufügen).

<a id="connexion-à-votre-tenant-cloud-temple"></a>

## Organisationsansicht

:::info
Die **Organisationsansicht** ist ausschließlich **Organisationsinhabern** vorbehalten.
:::

Die **Organisationsansicht** bündelt die Steuerungsfunktionen für Ihre Entität in der Cloud Temple-Konsole: Verwaltung von Tenants, Nutzern und deren Berechtigungen, Zugriffssteuerung und Verbrauchsüberwachung. Eine Organisation fasst einen oder mehrere **Tenants** (abgegrenzte Cloud-Umgebungen) zusammen, und die Nutzerberechtigungen unterliegen einer **Trennung nach Tenant**.

:::info
Dieser Abschnitt beschreibt die **Benutzeroberfläche**. Die Verfahren finden Sie unter [Onboarding](./onboarding.md); die **Referenzdokumentation** zum Organisations-/Tenant-Modell und zu den Berechtigungen finden Sie im Modul [IAM](iam/concepts.md).
:::

### Kopfzeile und Auswahl des Arbeits-Tenants

Oben in der Konsole zeigt die Kopfzeile die aktuelle Organisation (**« Meine Organisation »**). Das zugehörige Auswahlmenü öffnet die Liste **« Meine Tenants »**, aus der Sie Ihren Arbeits-Tenant auswählen: siehe [Ihren Arbeits-Tenant auswählen](./onboarding.md#ihren-arbeits-tenant-auswählen).

<img src={imgSelector} />

### Dashboard

Das **Dashboard** ist die Startseite der Organisation. Es bietet eine übergreifende Übersicht:

- den Status der **Support-Tickets** (offen, Antwort erforderlich, Kundenvalidierung, Vorfälle);
- die **Anzahl der Tenants** der Organisation;
- eine **Kostenübersicht** (Kosten des laufenden Monats, Aufteilung nach Tenant und nach Dienst).

<img src={imgDashboard} />

### Organisationsverwaltung

Der Bereich **Administration** in der linken Navigation fasst die Governance-Seiten der Organisation zusammen.

| Seite | Rolle | Vorgehen |
|---|---|---|
| **Tenants** | Tenants erstellen und verwalten | [Eine Umgebung erstellen](./onboarding.md#eine-neue-umgebung-erstellen), [ein Produkt aktivieren](./onboarding.md#ein-produkt-aktivieren) |
| **Benutzer** | Konten und deren Berechtigungen verwalten | [Ihre Mitarbeiter einladen](./onboarding.md#schritt-4-ihre-mitarbeiter-einladen) |
| **Zugriff** | Liste der erlaubten öffentlichen IPs | [Eine IP-Adresse hinzufügen](./onboarding.md#eine-ip-adresse-hinzufügen) |
| **Logs** | Aktivitätsprotokoll (Nachverfolgbarkeit) | [Protokollierung](#protokollierung---aktivitätsverfolgung) |
| **Support** | Tickets der Organisation | [Technischer Support](#zugriff-auf-den-technischen-support) |

Der **Kostenmanager** (außerhalb des Administrationsbereichs) bietet die Verbrauchsüberwachung.

### Tenants

Die Seite **Tenants** listet alle Tenants der Organisation auf. Eine Suchleiste und die Paginierung erleichtern die Navigation, wenn viele Tenants vorhanden sind. Die Schaltfläche **« Neuer Tenant »** erstellt eine Umgebung: siehe [Eine neue Umgebung erstellen](./onboarding.md#eine-neue-umgebung-erstellen).

#### Aktionen für einen Tenant

Das Aktionen-Menü jeder Zeile bietet:

- **Zum Tenant wechseln** — definiert diesen Tenant als Arbeits-Tenant;
- **Produkte bearbeiten** — aktiviert oder deaktiviert Produkte im Tenant, um dessen Umfang anzupassen;
- **UUID kopieren** — kopiert die technische Kennung des Tenants (nützlich für die API oder ein Support-Ticket).

Jeder Tenant hat mindestens einen Eigentümer. Die Regeln (empfohlene Anzahl, Ausbreitungsverzögerung, Entfernung auf Support-Anfrage, Berechtigungen eines Eigentümers) werden im Modul [IAM](iam/concepts.md#verwaltung-der-eigentümer-auf-einem-tenant) detailliert beschrieben.

:::info
Operationen an Tenants werden auf der Seite **Logs** protokolliert (z. B. « *Creating tenant…* » oder « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

### Benutzer und Berechtigungen

Die Seite **Benutzer** listet die Konten der Organisation auf. Die Identitäten sind **organisationsweit global**; die Berechtigungen werden **pro Tenant** festgelegt. Die Schaltfläche **« Neuer Benutzer »** lädt einen Mitarbeiter ein: siehe [Ihre Mitarbeiter einladen](./onboarding.md#schritt-4-ihre-mitarbeiter-einladen).

Für jedes Konto werden der **Name**, die **E-Mail-Adresse**, der **Typ** des Kontos — **Föderiertes Konto** (externes Identitätsverzeichnis) oder **Lokales Konto** — sowie visuelle Kennzeichnungen angezeigt: **Organisationsinhaber**, **Ich** oder **E-Mail nicht verifiziert** (nicht abgeschlossenes Konto).

#### Seitentools

- **Filter**: nach **Organisationsinhaber**, **Typ**, **Quelle** und **Status**.
- **CSV exportieren**: Export der Benutzerliste und ihrer Zugriffsrechte, nützlich für Audits.

#### Aktionen für ein Konto

Je nach Kontostatus bietet das Aktionenmenü folgende Optionen an:

- **Als Organisationsinhaber hinzufügen**;
- **Erneute Einladung** — sendet die Einladung an ein nicht abgeschlossenes Konto erneut;
- **UUID kopieren**;
- **Löschen**.

:::note
Sie können sich nicht selbst löschen.
:::

#### Organisationsinhaber und Tenant-Inhaber

Es handelt sich um zwei verschiedene Konzepte:

- der **Organisationsinhaber** wird über die Seite **Benutzer** hinzugefügt (Aktion « Als Organisationsinhaber hinzufügen »); die **Entfernung erfolgt auf Anfrage beim Support**;
- der **Tenant-Inhaber** fällt in den Geltungsbereich eines Tenants; die entsprechenden Regeln werden im Modul [IAM](iam/concepts.md#verwaltung-der-eigentümer-auf-einem-tenant) beschrieben.

:::info
Als **Organisationsinhaber** sind Sie standardmäßig **Inhaber aller Tenants** der Organisation. Damit verfügen Sie über sämtliche Berechtigungen für jeden dieser Tenants. Umgekehrt verlieren Sie diese Berechtigungen **nicht**, wenn Ihnen diese Rolle entzogen wird: Sie bestehen für die betroffenen Tenants weiterhin fort.
:::

<img src={imgUsers} />

<a id="accès--whitelist-ip"></a>

### Verbrauchsbericht — Kostenmanager

Der **Kostenmanager** bietet eine Übersicht über den Organisationsverbrauch, aufgeschlüsselt nach Tenant. Er enthält zwei Registerkarten.

#### Reiter « Übersicht »

Zusammenfassende Ansicht des aktuellen Monats:

- Schlüsselkennzahlen: **Kosten des aktuellen Monats**, **Kosten des aktuellen Jahres**, **Anzahl der aktiven Produkte**;
- **Kosten pro Tenant** — Kostenverteilung zwischen den Tenants;
- **Aktuelle Kosten pro Dienst** und **Aktuelle Kosten pro Produkt** — Hauptkostenpositionen.

#### Reiter « Verbrauch »

Detaillierter und historisierter Bericht:

- Auswahl des **Zeitraums** (Start- und Endmonat) und der Achse **« Anzeigen nach »**;
- Ansichten **Monatlicher Verbrauch**, **Gesamt**, **Prognose** und **Trend**;
- aufklappbare Tabelle nach **Monat / Tenant / Service / Produkt / Betrag**, mit dem **Trend** im Vergleich zum Vormonat.

:::info
Der Betrag des aktuellen Monats ist **vorläufig**: Er wird auf Basis der bereits verbrauchten Tage geschätzt.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Protokollierung und Support

- **Logs** — die Seite **Aktivitäten** protokolliert die Lese- und Schreibvorgänge der Organisation (Registerkarten **Kürzlich** / **Archiviert**, Filter, CSV-Export) zu Zwecken der Nachverfolgbarkeit. Siehe den Abschnitt [Protokollierung — Aktivitätsverfolgung](#protokollierung---aktivitätsverfolgung) unten.
- **Support** — die Seite **Support** bündelt die **Tickets der Organisation** (Kennzahlen, Ticket-Erstellung, Filter, Export). Die Erstellung und Verfolgung der Anfragen werden im Abschnitt [Zugriff auf den technischen Support](#zugriff-auf-den-technischen-support) unten beschrieben.

## Zugriff auf Benutzerfunktionen über die Weboberfläche

Alle für Ihren Benutzer verfügbaren Funktionen (abhängig von seinen Berechtigungen) befinden sich links auf dem Bildschirm in der grünen Leiste.
Die Funktionen sind nach Modulen gruppiert. Dies umfasst hauptsächlich:

- Das __Inventar__ Ihrer Ressourcen,
- Die __Betriebsüberwachung__,
- Die __Steuerung der IaaS-Ressourcen__ (Rechenleistung, Speicher, Netzwerk, ...)
- Die __Steuerung der OpenIaaS-Ressourcen__ (Rechenleistung, Speicher, Netzwerk, ...)
- Der Zugriff auf __Zusatzdienste__ (Bastion, Monitoring, ...)
- Die __Verwaltung Ihrer Organisation__ (Verwaltung der Tenants, der Berechtigungen, ...)

Die Aktivierung eines Moduls für einen Benutzer hängt von den Benutzerberechtigungen ab. Beispielsweise ist das Modul __'Bestellung'__ nicht verfügbar, wenn der Benutzer nicht über die Berechtigung __'ORDER'__ verfügt.

Im Folgenden werden die verschiedenen verfügbaren Module vorgestellt. Neue Module erweitern die Konsole regelmäßig:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : bietet einen schnellen Überblick über die __Gesamtzahl der Rechen- und Speicherressourcen__, die __Backup-Statistiken__ und eine __Zusammenfassung der Support-Tickets__,
- __Inventar__ : bietet einen Überblick über alle Ressourcen vom Typ __'virtuelle Maschinen'__. Wenn __Tags__ verwendet werden, ermöglicht es eine Ansicht nach __Tag__ (zum Beispiel Fachansicht, Anwendungsansicht, ...),
- __Managed Services__ : bietet Zugriff auf die Verfolgung Ihrer __Supportanfragen__ und die __Service-Metriken__,
- __IaaS__ : ermöglicht die __Steuerung der VMware IaaS-Infrastrukturen__ (virtuelle Maschinen, Cluster, Hypervisoren, Replikationen, Backup, ...),
- __OpenIaaS__ : ermöglicht die __Steuerung der Xen Orchestra-Ressourcen__ (virtuelle Maschinen, Backup, ...),
- __OpenShift__ : ermöglicht die Steuerung Ihrer **RedHat OpenShift PaaS-Architektur** und das Management Ihrer Container in den 3 Verfügbarkeitszonen der Plattform.
- __Bastion__ : Ermöglicht das Bereitstellen und Steuern von SSH/RDP-Bastion-Appliances in Ihren Netzwerken,
- __Netzwerk__ : ermöglicht die Steuerung von __Layer-2- und Layer-3-Netzwerken__, __öffentlichen IPs__ und Ihren __Telekom-Leitungen__,
- __Colocation__ : Bietet einen Überblick über die Geräte in der __gemeinsamen oder dedizierten Colocation-Zone__,
- __Bestellung__ : Ermöglicht die Bestellung von Ressourcen und die Verfolgung der Bereitstellungen,
- __Administration__ : Bündelt die Verwaltungsfunktionen für Benutzer und Tenants sowie den Zugriff auf die globale Protokollierung.
</div>
</div>

## Sprachverwaltung

Die Konsole ist in __Französisch__, __Englisch__ verfügbar. Sie können die Arbeitssprache über das oben rechts auf dem Bildschirm befindliche __Sprachsymbol__ ändern.

Die Sprachänderung für einen Benutzer erfolgt in dessen __'Profil'__, oben rechts auf dem Bildschirm, unter __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden Tenant [Tenant](iam/concepts.md#tenant).

## Zugriff auf den technischen Support

Zu jeder Zeit können Sie das __Cloud Temple Support-Team__ über das __'Hilfe'-Symbol__ oben rechts auf dem Bildschirm kontaktieren.

<img src={shivaSupport} />

Sie werden während des gesamten Supportanforderungsprozesses unterstützt.

Der erste Schritt ist die Identifizierung des Typs der Supportanforderung:

- Beratung zur Nutzung eines Produkts anfordern (außerhalb von Störungen),
- Unterstützung im Zusammenhang mit Ihrem Kundenkonto anfordern,
- Eine Störung melden oder technischen Support anfordern.
- Unterstützung durch einen professionellen Service anfordern (Zur Verfügungstellung eines Cloud Temple-Ingenieurs für ein spezifisches Problem).

<img src={shivaSupport_01} />

Anschließend haben Sie die Möglichkeit, weitere Details anzugeben und Dateien (z. B. Bilder oder Protokolle) anzuhängen.

Der Auftraggeber kann in der Ticketbeschreibung im Falle eines Sicherheitsvorfalls auch ein Kritikalitätsniveau (P1 bis P5) angeben, wie zum Beispiel:

<img src={shivaSupportCriticities} />

__KRITISCH (P1)__:

- Verdacht auf Datenleck sensibler Daten
- Erkennung eines unbefugten Zugriffs auf Ihre Daten
- Kompromittierung Ihrer Administrationszugangsdaten
- Totaler Ausfall Ihrer kritischen Dienste
- Anomales Verhalten bei sensiblen Daten
- Verletzung personenbezogener Daten

__HOCH (P2)__:

- Fehlfunktion der Benutzerzugriffe
- Anomalie bei der Verschlüsselung Ihrer Daten
- Verlust des Zugriffs auf bestimmte kritische Funktionen
- Dateninkonsistenzen
- Schwerwiegende Verzögerungen, die den Betrieb beeinträchtigen

__MITTEL (P3)__:

- Lokalisiertes Leistungsproblem
- Störung bei einer nicht kritischen Funktion
- Konfigurationsfehler mit begrenzter Auswirkung
- Vorübergehende Zugriffsprobleme

__NIEDRIG (P4)__:

- Anfrage zur Untersuchung
- Anomalie ohne direkte Auswirkung
- Frage zur Compliance
- Bedarf an technischer Klärung

__BETRIEBSDIENST (P5)__:

- Betriebsbereiter Service ohne unmittelbares Risiko

<img src={shivaSupport_02} />

Sobald Ihre Anfrage gestellt wurde, können Sie Ihre Anfragen über das __'Hilfe'-Symbol__ oben rechts auf dem Bildschirm aufrufen:

<img src={shivaSupport_03} />

## Protokollierung - Aktivitätsverfolgung

Die Aktivitätsseite dient dazu, eine vollständige Übersicht über alle Lese- und Schreibvorgänge in der Konsole zu bieten und gewährleistet so eine verbesserte Nachverfolgbarkeit und Sicherheit. Sie zeigt die beiden Hauptregisterkarten: Kürzlich und Archiviert.

<img src={shivaLogs} />

### __Seitenstruktur__

#### __Registerkarten__

- __Kürzlich__

- Kürzliche Vorgänge
- Echtzeit-Überwachung

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
  - Wählen Sie die Registerkarte "Kürzlich" für Echtzeitoperationen.
  - Wählen Sie "Archiviert", um den Verlauf einzusehen.
  - Nutzen Sie die Such- und Filterfunktionen, um bestimmte Operationen zu finden.

#### __Hinweis zur Konformität__

Da die Konsole auf einer SecNumCloud-qualifizierten Infrastruktur gehostet wird, werden ihre Ereignisse mindestens __6 Monate__ lang aufbewahrt, um die Sicherheits- und Nachverfolgbarkeitsanforderungen zu erfüllen.

## Übersicht der neuesten Updates

Klicken Sie unten links auf dem grünen Banner auf das Symbol __'Neuigkeiten'__. Sie erhalten die Details zu den Änderungen für jede Version der Cloud Temple-Konsole.

<img src={shivaOnboard_009} />

<a id="accès-aux-fonctionnalités-utilisateur-via-lapi"></a>
<a id="provider-terraform"></a>

## Automatisieren

Die API der Konsole und der Terraform-Provider werden unter [Onboarding](./onboarding.md#schritt-6-automatisieren) vorgestellt und in der [API-Dokumentation](./api.md) sowie unter [Terraform Provider](/terraform) ausführlich beschrieben.
