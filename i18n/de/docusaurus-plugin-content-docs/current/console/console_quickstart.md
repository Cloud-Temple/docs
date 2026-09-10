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

- Ein Cloud Temple-Produkt abonniert haben. Um unkompliziert ein Abonnement abzuschließen, können Sie [uns kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder per E-Mail an die Adresse __contact@cloud-temple.com__ schreiben.
- Über einen Zugriff auf die Konsole verfügen
- Die eigene öffentliche IPv4-Adresse in der Cloud Temple-Vertrauenszone hinterlegt haben (der Zugriff auf die Konsole ist auf identifizierte Vertrauensadressen beschränkt)

## Verbindung zu Ihrem Cloud Temple-Tenant

Die Konsole ist über die folgende URL erreichbar: [Console](https://shiva.cloud-temple.com) oder über die direkte URL, die Ihnen per E-Mail mitgeteilt wurde.

Auf der ersten Seite können Sie [l'organisation](iam/concepts.md#organisationen) auswählen, in der Ihr Benutzer erstellt wurde.
Sobald das Unternehmen eingegeben wurde, klicken Sie auf __'Anmelden'__.

<img src={shivaLogin} />

Anschließend werden Sie zu einer Seite weitergeleitet, auf der Sie sich authentifizieren müssen.
Nach der Anmeldung gelangen Sie auf diese Seite.

Dort finden Sie alle Metriken zu den in Ihrem Bereich abonnierten Produkten. Bei Problemen mit Ihren VMware- und/oder OpenIaaS-Produkten werden Warnungen angezeigt, deren Farbe den jeweiligen Schweregrad anzeigt.

<img src={shivaHome} />

## Organisationsansicht

:::info
Die **Organisationsansicht** ist ausschließlich **Organisationsinhabern** vorbehalten.
:::

Die **Organisationsansicht** bündelt die Steuerungsfunktionen für Ihre Entität in der Cloud Temple Console: Verwaltung von Tenants, Nutzern und deren Berechtigungen, Zugriffssteuerung und Verbrauchsüberwachung. Eine Organisation fasst einen oder mehrere **Tenants** (abgegrenzte Cloud-Umgebungen) zusammen, und die Nutzerberechtigungen unterliegen einer **tenantgetrennten Berechtigungsvergabe**.

:::info
Dieser Abschnitt beschreibt die **Benutzeroberfläche**: Wo Sie jede Funktion finden und was sie ermöglicht. Die **Referenzdokumentation** zum Organisations-/Tenant-Modell und zu den Berechtigungen finden Sie im Modul [IAM](iam/concepts.md).
:::

### Kopfzeile und Auswahl des Arbeits-Tenants

Oben in der Konsole zeigt die Kopfzeile die aktuelle Organisation (**« Meine Organisation »**). Das zugehörige Auswahlmenü öffnet die Liste **« Meine Tenants »** : Jeder Tenant ist dort aufgeführt, gegebenenfalls begleitet vom Badge **SecNumCloud**, wenn er zertifiziert ist.

Um **den Arbeits-Tenant auszuwählen**, gibt es zwei Möglichkeiten :

- über die Kopfzeile: Öffnen Sie das Auswahlmenü **« Meine Tenants »** und klicken Sie auf den gewünschten Tenant ;
- über die Seite **Tenants**: Verwenden Sie die Aktion **« Zu Tenant wechseln »** in einer Zeile.

Die technischen Ressourcen (Rechenleistung, Speicher, Netzwerk…) sind **tenant-spezifisch** und werden nicht zwischen Tenants geteilt.

<img src={imgSelector} />

### Dashboard

Das **Dashboard** ist die Startseite der Organisation. Es bietet eine übergreifende Übersicht:

- den Status der **Support-Tickets** (ouverts, réponses requises, validation client, incidents) ;
- die **Anzahl der Tenants** der Organisation ;
- eine **Kostenübersicht** (coût du mois en cours, répartition par tenant et par service).

<img src={imgDashboard} />

### Organisationsverwaltung

Der Bereich **Administration** in der linken Navigation fasst die Governance-Seiten der Organisation zusammen.

| Seite | Rolle |
|---|---|
| **Tenants** | Tenants erstellen und verwalten |
| **Benutzer** | Konten und deren Berechtigungen verwalten |
| **Zugriff** | Liste der erlaubten öffentlichen IPs (Whitelist) |
| **Logs** | Aktivitätsprotokoll (Nachverfolgbarkeit) |
| **Support** | Tickets der Organisation |

Der **Kostenmanager** (außerhalb des Administrationsbereichs) bietet die Verbrauchsüberwachung.

### Mandanten

Die Seite **Mandanten** listet alle Mandanten der Organisation auf. Eine Suchleiste und die Paginierung erleichtern die Navigation, wenn viele Mandanten vorhanden sind.

#### Einen Tenant erstellen

Die Schaltfläche **« Neuer Tenant »** öffnet ein Formular in zwei Teilen :

- **Tenant-Identität** : der **Name** (wird live validiert) und eine **Beschreibung** ;
- **Tenant-Produkte** : die auf dem Tenant zu aktivierenden Produkte. Die Schaltflächen **« Alle auswählen »** / **« Alle abwählen »** beschleunigen die Eingabe.

Bestätigen Sie mit **« Erstellen »** : Der Tenant wird mit den ausgewählten Produkten initialisiert.

#### Aktionen für einen Tenant

Das Aktionen-Menü jeder Zeile bietet:

- **Zum Tenant wechseln** — definiert diesen Tenant als Arbeits-Tenant;
- **Produkte bearbeiten** — aktiviert oder deaktiviert Produkte im Tenant, um dessen Umfang anzupassen;
- **UUID kopieren** — kopiert die technische Kennung des Tenants (nützlich für die API oder ein Support-Ticket).

#### Eigentümer und Lebenszyklus

- **Erstellung** : im Self-Service über **« Neuer Tenant »**.
- **Änderung** : Hinzufügen oder Entfernen von Produkten über **« Produkte bearbeiten »**.
- **Tenant-Eigentümer** : Jeder Tenant hat mindestens einen Eigentümer. Die Regeln (empfohlene Anzahl, Ausbreitungsverzögerung, Entfernung auf Anfrage des Supports, Berechtigungen eines Eigentümers) werden im Modul [IAM](iam/concepts.md) detailliert beschrieben.

:::info
Operationen an Tenants werden auf der Seite **Logs** protokolliert (z. B. « *Creating tenant…* » oder « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Benutzer und Berechtigungen

Die Seite **Benutzer** listet die Konten der Organisation auf. Die Identitäten sind **organisationweit global**; die Berechtigungen werden **pro Tenant** festgelegt.

Für jedes Konto werden der **Name**, die **E-Mail-Adresse**, der **Typ** des Kontos — **Föderiertes Konto** (référentiel d'identité externe) oder **Lokales Konto** — sowie visuelle Kennzeichnungen angezeigt: **Organisationsinhaber**, **Ich** oder **E-Mail nicht verifiziert** (compte non finalisé).

#### Seitentools

- **Filter** : nach **Organisationsinhaber**, **Typ**, **Quelle** und **Status**.
- **CSV exportieren** : Export der Benutzerliste und ihrer Zugriffsrechte, nützlich für Audits.

#### Aktionen für ein Konto

Je nach Kontostatus bietet das Aktionenmenü folgende Optionen an:

- **Als Organisationsinhaber hinzufügen** ;
- **Erneute Einladung** — sendet die Einladung an ein nicht abgeschlossenes Konto erneut ;
- **UUID kopieren** ;
- **Löschen**.

:::note
Sie können sich nicht selbst löschen. Die **Einladung** eines neuen Benutzers und die **feingranulare Berechtigungsvergabe pro Tenant** werden im Modul [IAM](iam/quickstart.md) beschrieben.
:::

#### Organisationsinhaber und Tenant-Inhaber

Es handelt sich um zwei verschiedene Konzepte :

- der **Organisationsinhaber** wird über die Seite **Benutzer** hinzugefügt (action « Ajouter en tant que propriétaire d'organisation ») ; die **Entfernung erfolgt auf Anfrage beim Support** ;
- der **Tenant-Inhaber** fällt in den Geltungsbereich eines Tenants ; die entsprechenden Regeln werden im Modul [IAM](iam/concepts.md) beschrieben.

:::info
Als **Organisationsinhaber** sind Sie standardmäßig **Inhaber aller Tenants** der Organisation. Damit verfügen Sie über sämtliche Berechtigungen für jeden dieser Tenants. Umgekehrt verlieren Sie diese Berechtigungen **nicht**, wenn Ihnen diese Rolle entzogen wird: Sie bestehen für die betroffenen Tenants weiterhin fort.
:::

<img src={imgUsers} />

### Zugriff — IP-Whitelist

Die Seite **Zugriff** verwaltet die **Liste der öffentlichen IP-Adressen, die zum Zugriff auf die Konsole berechtigt sind**. Gemäß den **SecNumCloud**-Anforderungen wird ausschließlich der Datenverkehr von diesen Adressen zugelassen.

- Jeder Eintrag verknüpft eine **IP** (CIDR-Notation) mit einer **Beschreibung**.
- Über die Schaltfläche **« IP hinzufügen »** kann eine Adresse zur Liste hinzugefügt werden.

:::warning
Das **Löschen** einer autorisierten IP erfolgt auf **Anfrage beim Support**.
:::

<img src={imgAccess} />

### Verbrauchsbericht — Kostenmanager

Der **Kostenmanager** bietet eine Übersicht über den Organisationsverbrauch, aufgeschlüsselt nach Tenant. Er enthält zwei Registerkarten.

#### Reiter « Übersicht »

Zusammenfassende Ansicht des aktuellen Monats:

- Schlüsselkennzahlen: **Kosten des aktuellen Monats**, **Kosten des aktuellen Jahres**, **Anzahl der aktiven Produkte** ;
- **Kosten pro Tenant** — Kostenverteilung zwischen den Tenants ;
- **Aktuelle Kosten pro Dienst** und **Aktuelle Kosten pro Produkt** — Hauptkostenpositionen.

#### Register „Verbrauch“

Detaillierter und historisierter Bericht:

- Auswahl des **Zeitraums** (Start- und Endmonat) und der Achse **„Anzeigen nach“** ;
- Ansichten **Monatlicher Verbrauch**, **Gesamt**, **Prognose** und **Trend** ;
- aufklappbare Tabelle nach **Monat / Tenant / Service / Produkt / Betrag**, mit dem **Trend** im Vergleich zum Vormonat.

:::info
Der Betrag des aktuellen Monats ist **vorläufig** : er wird auf Basis der bereits verbrauchten Tage geschätzt.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Protokollierung und Support

- **Logs** — die Seite **Aktivitäten** protokolliert die Lese- und Schreibvorgänge der Organisation (Registerkarten **Neu** / **Archiviert**, Filter, CSV-Export) zu Zwecken der Nachverfolgbarkeit. Siehe auch den Abschnitt [Journalisation — Suivi des Activités](#protokollierung---aktivitätsverfolgung) unten.
- **Support** — die Seite **Support** bündelt die **Tickets der Organisation** (Metriken, Ticket-Erstellung, Filter, Export). Die Erstellung und Verfolgung der Anfragen werden im Abschnitt [Accès au support technique](#zugriff-auf-den-technischen-support) unten beschrieben.

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
- Totale Ausfall Ihrer kritischen Dienste
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

- Betriebssicherer Service ohne unmittelbares Risiko

<img src={shivaSupport_02} />

Sobald Ihre Anfrage gestellt wurde, können Sie Ihre Anfragen über das __'Hilfe'-Symbol__ oben rechts auf dem Bildschirm aufrufen:

<img src={shivaSupport_03} />

## Zugriff auf Benutzerfunktionen über die Weboberfläche

Alle für Ihren Benutzer verfügbaren Funktionen (en fonction de ses droits) befinden sich links auf dem Bildschirm in der grünen Leiste.
Die Funktionen sind nach Modulen gruppiert. Dies umfasst hauptsächlich :

- Das __Inventar__ Ihrer Ressourcen,
- Die __Betriebsüberwachung__,
- Die __Steuerung der IaaS-Ressourcen__ (Calcul, stockage, réseau, ...)
- Die __Steuerung der OpenIaaS-Ressourcen__ (Calcul, stockage, réseau, ...)
- Der Zugriff auf __Zusatzdienste__ (Bastion, monitoring, ...)
- Die __Verwaltung Ihrer Organisation__ (Gestion des tenants, des droits, ...)

Die Aktivierung eines Moduls für einen Benutzer hängt von den Benutzerberechtigungen ab. Beispielsweise ist das Modul __'Commande'__ nicht verfügbar, wenn der Benutzer nicht über die Berechtigung __'ORDER'__ verfügt.

Im Folgenden werden die verschiedenen verfügbaren Module vorgestellt. Neue Module erweitern die Konsole regelmäßig :
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : bietet einen schnellen Überblick über die __Gesamtzahl der Rechen- und Speicherressourcen__, die __Backup-Statistiken__ und eine __Zusammenfassung der Support-Tickets__,
- __Inventar__ : bietet einen Überblick über alle Ressourcen vom Typ __'virtuelle Maschinen'__. Wenn __Tags__ verwendet werden, ermöglicht es eine Ansicht nach __Tag__ (par exemple, vue métier, vue applicatif, ...),
- __Managed Services__ : bietet Zugriff auf die Verfolgung Ihrer __Supportanfragen__ und die __Service-Metriken__,
- __IaaS__ : ermöglicht die __Steuerung der VMware IaaS-Infrastrukturen__ (Machines virtuelles, clusters, hyperviseurs, réplications, sauvegarde, ...),
- __OpenIaaS__ : ermöglicht die __Steuerung der Xen Orchestra-Ressourcen__ (Machines virtuelles, sauvegarde, ...),
- __OpenShift__ : ermöglicht die Steuerung Ihrer **RedHat OpenShift PaaS-Architektur** und das Management Ihrer Container in den 3 Verfügbarkeitszonen der Plattform.
- __Bastion__ : Ermöglicht das Bereitstellen und Steuern von SSH/RDP-Bastion-Appliances in Ihren Netzwerken,
- __Netzwerk__ : ermöglicht die Steuerung von __Layer-2- und Layer-3-Netzwerken__, __öffentlichen IPs__ und Ihren __Telekom-Leitungen__,
- __Colocation__ : Bietet einen Überblick über die Geräte in der __gemeinsamen oder dedizierten Colocation-Zone__,
- __Bestellung__ : Ermöglicht die Bestellung von Ressourcen und die Verfolgung der Bereitstellungen,
- __Verwaltung__ : Bündelt die Verwaltungsfunktionen für Benutzer und Tenants sowie den Zugriff auf die globale Protokollierung.
</div>
</div>
Die Symbole __'NEW'__ bedeuten, dass das betreffende Produkt bereitgestellt wurde, aber noch nicht als __SecNumCloud-Angebot__ zertifiziert ist, und __'BETA'__ bedeutet, dass das betreffende Produkt bereitgestellt wurde und gerade als __SecNumCloud-Angebot__ zertifiziert wurde.

## Protokollierung - Aktivitätsverfolgung

Die Aktivitätsseite dient dazu, eine vollständige Übersicht über alle Lese- und Schreibvorgänge in der Konsole zu bieten und gewährleistet so eine verbesserte Nachverfolgbarkeit und Sicherheit. Sie zeigt die beiden Hauptregisterkarten: Aktuell und Archiviert.

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
  - Wählen Sie die Registerkarte "Neueste" für Echtzeitoperationen.
  - Wählen Sie "Archiviert", um den Verlauf einzusehen.
  - Nutzen Sie die Such- und Filterfunktionen, um bestimmte Operationen zu finden.

#### __Hinweis zur Konformität__

Gemäß der SecNumCloud-Qualifikation beträgt die Aufbewahrungsfrist für die Ereignisse der Cloud Temple-Konsole mindestens __6 Monate__, wodurch die Einhaltung der Sicherheits- und Nachverfolgbarkeitsanforderungen gewährleistet wird.

## Übersicht der neuesten Updates

Klicken Sie unten links auf dem grünen Banner auf das Symbol __'Neuigkeiten'__. Sie erhalten die Details zu den Änderungen für jede Version der Cloud Temple-Konsole.

<img src={shivaOnboard_009} />

## Zugriff auf Benutzerfunktionen über die API

Der Zugriff auf alle Funktionen der Konsole ist über die Konsole-API möglich. Sie können die Details zu den Verben und Konfigurationen über __'Profil'__ und __'APIs'__ :

<img src={shivaOnboard_008} />

## Terraform-Provider

Cloud Temple stellt Ihnen einen [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) zur Verfügung, um Ihre Cloud-Plattform *"as code"* zu verwalten.