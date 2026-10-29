---
title: Quickstart
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
import shivaLogsDetail from '@site/docs/console/images/shiva_logs_detail.png'
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

- Ein Cloud-Temple-Produkt abonniert haben. Um ein Abonnement abzuschließen, können Sie uns [kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder per E-Mail an __contact@cloud-temple.com__.
- Einen Zugriff auf die Konsole haben
- Die öffentliche IPv4-Adresse in der Vertrauenszone von Cloud Temple registriert haben (der Zugriff auf die Konsole ist auf identifizierte Vertrauensadressen beschränkt)

## Anmeldung an Ihrem Cloud-Temple-Tenant

Die Konsole ist über die folgende URL erreichbar: [Konsole](https://shiva.cloud-temple.com) oder über die direkte URL, die Ihnen per E-Mail mitgeteilt wurde.

Auf der ersten Seite können Sie die [Organisation](iam/concepts.md#organisationen) auswählen, in der Ihr Benutzer erstellt wurde.
Sobald das Unternehmen eingegeben wurde, klicken Sie bitte auf __'Anmelden'__.

<img src={shivaLogin} />

Anschließend werden Sie zu einer Seite weitergeleitet, auf der Sie sich authentifizieren müssen.
Nach der Anmeldung gelangen Sie auf diese Seite.

Hier finden Sie alle Metriken zu den in Ihrem Bereich abonnierten Produkten. Bei Problemen mit Ihren VMware- und/oder OpenIaaS-Produkten werden Warnungen angezeigt; die Farbe ist mit deren Schweregrad verknüpft.

<img src={shivaHome} />

## Organisationsansicht

:::info
Die **Organisationsansicht** ist den **Eigentümern der Organisation** vorbehalten.
:::

Die **Organisationsansicht** bündelt die Steuerungsfunktionen Ihrer Einheit in der Cloud-Temple-Konsole: Verwaltung der Tenants, Benutzer und deren Berechtigungen, Zugriffskontrolle und Verfolgung des Verbrauchs. Eine Organisation bündelt einen oder mehrere **Tenants** (abgeschottete Cloud-Umgebungen), und die Benutzerberechtigungen unterliegen einer **Segregation pro Tenant**.

:::info
Dieser Abschnitt beschreibt die **Oberfläche**: Wo Sie jede Funktion finden und was sie ermöglicht. Die **Referenzdokumentation** zum Organisations-/Tenant-Modell und zu den Berechtigungen finden Sie im Modul [IAM](iam/concepts.md).
:::

### Kopfbereich und Auswahl des Arbeits-Tenants

Oben in der Konsole zeigt der Kopfbereich die aktuelle Organisation (**« Meine Organisation »**) an. Der zugehörige Auswahldialog öffnet die Liste **« Meine Tenants »**: Jeder Tenant wird dort aufgeführt, gegebenenfalls mit dem Badge **SecNumCloud**, wenn er zertifiziert ist.

Um **den Arbeits-Tenant auszuwählen**, gibt es zwei Möglichkeiten:

- Öffnen Sie im Kopfbereich den Auswahldialog **« Meine Tenants »** und klicken Sie auf den gewünschten Tenant;
- Verwenden Sie auf der Seite **Tenants** die Aktion **« Mit Tenant verbinden »** in einer Zeile.

Die technischen Ressourcen (Rechenleistung, Speicher, Netzwerk …) sind **jedem Tenant eigen** und werden zwischen Tenants nicht geteilt.

<img src={imgSelector} />

### Dashboard

Das **Dashboard** ist die Startseite der Organisation. Es zeigt eine übergreifende Übersicht:

- den Status der **Support-Tickets** (offen, Antwort erforderlich, Kundenfreigabe, Vorfälle);
- die **Anzahl der Tenants** der Organisation;
- eine **Kostenübersicht** (Kosten des laufenden Monats, Aufteilung nach Tenant und nach Dienst).

<img src={imgDashboard} />

### Organisationsverwaltung

Der Bereich **Verwaltung** in der linken Navigation bündelt die Governance-Seiten der Organisation.

| Seite | Rolle |
|---|---|
| **Tenants** | Tenants erstellen und weiterentwickeln |
| **Benutzer** | Konten und deren Berechtigungen verwalten |
| **Zugriff** | Liste der erlaubten öffentlichen IP-Adressen (Whitelist) |
| **Logs** | Aktivitätsprotokoll (Nachverfolgbarkeit) |
| **Support** | Tickets der Organisation |

Der **Kostenverwalter** (außerhalb des Bereichs Verwaltung) bietet die Verbrauchsverfolgung.

### Tenants

Die Seite **Tenants** listet alle Tenants der Organisation auf. Eine Suchleiste und die Paginierung erleichtern die Navigation, wenn viele Tenants vorhanden sind.

#### Tenant erstellen

Die Schaltfläche **« Neuer Tenant »** öffnet ein Formular in zwei Teilen:

- **Identität des Tenants**: der **Name** (live validiert) und eine **Beschreibung**;
- **Produkte des Tenants**: die auf dem Tenant zu aktivierenden Produkte. Die Schaltflächen **« Alle auswählen »** / **« Alle abwählen »** beschleunigen die Eingabe.

Bestätigen Sie mit **« Erstellen »**: Der Tenant wird mit den ausgewählten Produkten initialisiert.

#### Aktionen auf einem Tenant

Das Aktionsmenü jeder Zeile bietet:

- **Mit Tenant verbinden** — definiert diesen Tenant als Arbeits-Tenant;
- **Produkte ändern** — aktiviert oder deaktiviert Produkte auf dem Tenant, um dessen Umfang anzupassen;
- **UUID kopieren** — kopiert die technische Kennung des Tenants (nützlich für die API oder ein Support-Ticket).

#### Eigentümer und Lebenszyklus

- **Erstellung**: im Self-Service über **« Neuer Tenant »**.
- **Weiterentwicklung**: Hinzufügen oder Entfernen von Produkten über **« Produkte ändern »**.
- **Tenant-Eigentümer**: Jeder Tenant hat mindestens einen Eigentümer. Die Regeln (empfohlene Anzahl, Ausbreitungsverzögerung, Entfernung auf Support-Anfrage, Berechtigungen eines Eigentümers) sind im Modul [IAM](iam/concepts.md) detailliert beschrieben.

:::info
Die Operationen auf Tenants werden in der Seite **Logs** protokolliert (z. B. « *Creating tenant…* » oder « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Benutzer und Berechtigungen

Die Seite **Benutzer** listet die Konten der Organisation auf. Die Anmeldeinformationen sind **organisationsweit**; die Berechtigungen werden hingegen **pro Tenant** definiert.

Für jedes Konto werden der **Name**, die **E-Mail-Adresse**, der **Typ** des Kontos — **Föderiertes Konto** (externes Identitätsverzeichnis) oder **Lokales Konto** — sowie visuelle Kennzeichnungen angezeigt: **Eigentümer der Organisation**, **Ich** oder **E-Mail nicht verifiziert** (nicht finalisiertes Konto).

#### Werkzeuge der Seite

- **Filter**: nach **Eigentümern der Organisation**, **Typ**, **Quelle** und **Status**.
- **CSV exportieren**: Export der Benutzerliste und deren Zugriffe, nützlich für die Auditierung.

#### Aktionen auf einem Konto

Das Aktionsmenü bietet je nach Kontostatus:

- **Als Organisationseigentümer hinzufügen**;
- **Neue Einladung** — sendet die Einladung an ein nicht finalisiertes Konto erneut;
- **UUID kopieren**;
- **Löschen**.

:::note
Sie können sich nicht selbst löschen. Die **Einladung** eines neuen Benutzers und die **feingranulare Zuweisung der Berechtigungen pro Tenant** sind im Modul [IAM](iam/quickstart.md) beschrieben.
:::

#### Organisationseigentümer und Tenant-Eigentümer

Dies sind zwei unterschiedliche Begriffe:

- der **Eigentümer der Organisation** wird über die Seite **Benutzer** hinzugefügt (Aktion « Als Organisationseigentümer hinzufügen »); seine **Entfernung erfolgt auf Support-Anfrage**;
- der **Tenant-Eigentümer** gehört zum Umfang eines Tenants; seine Regeln sind im Modul [IAM](iam/concepts.md) beschrieben.

:::info
Als **Eigentümer der Organisation** sind Sie standardmäßig **Eigentümer aller Tenants** der Organisation. In dieser Eigenschaft verfügen Sie über sämtliche Berechtigungen auf jedem dieser Tenants. Umgekehrt verlieren Sie diese Berechtigungen **nicht**, wenn Ihnen diese Rolle entzogen wird: Sie bleiben auf den betroffenen Tenants erhalten.
:::

<img src={imgUsers} />

### Zugriff — IP-Whitelist

Die Seite **Zugriff** verwaltet die **Liste der erlaubten öffentlichen IP-Adressen** für den Zugriff auf die Konsole. Gemäß den Anforderungen von **SecNumCloud** wird nur der Verkehr von diesen Adressen akzeptiert.

- Jeder Eintrag verknüpft eine **IP** (CIDR-Notation) mit einer **Beschreibung**.
- Die Schaltfläche **« IP hinzufügen »** ermöglicht das Hinzufügen einer Adresse zur Liste.

:::warning
Die **Entfernung** einer erlaubten IP-Adresse erfolgt auf **Support-Anfrage**.
:::

<img src={imgAccess} />

### Verbrauchsbericht — Kostenverwalter

Der **Kostenverwalter** bietet eine Ansicht des Verbrauchs der Organisation, aufgeteilt nach Tenant. Er bietet zwei Registerkarten.

#### Registerkarte « Übersicht »

Synthetische Ansicht des laufenden Monats:

- Kennzahlen: **Kosten des laufenden Monats**, **Kosten des laufenden Jahres**, **Anzahl aktiver Produkte**;
- **Kosten pro Tenant** — Aufteilung der Kosten zwischen den Tenants;
- **Aktuelle Kosten pro Dienst** und **Aktuelle Kosten pro Produkt** — Hauptverbrauchspositionen.

#### Registerkarte « Verbrauch »

Detaillierter und historisierter Bericht:

- Auswahl des **Zeitraums** (Beginn- und Endmonat) und der Achse **« Anzeigen nach »** ;
- Ansichten **Monatlicher Verbrauch**, **Gesamt**, **Prognose** und **Trend**;
- aufklappbare Tabelle nach **Monat / Tenant / Dienst / Produkt / Betrag**, mit dem **Trend** im Vergleich zum Vormonat.

:::info
Der Betrag des laufenden Monats ist **vorläufig**: Er wird auf Basis der bereits verbrauchten Tage geschätzt.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Protokollierung und Support

- **Logs** — die Seite **Aktivitäten** dokumentiert die Lese- und Schreiboperationen der Organisation (Registerkarten **Letzte** / **Archiviert**, Filter, CSV-Export) zu Nachverfolgungszwecken. Siehe auch den Abschnitt [Protokollierung — Aktivitätsverfolgung](#protokollierung---aktivitätsverfolgung) unten.
- **Support** — die Seite **Support** bündelt die **Tickets der Organisation** (Kennzahlen, Ticketerstellung, Filter, Export). Die Erstellung und Verfolgung von Anfragen sind im Abschnitt [Zugang zum technischen Support](#zugang-zum-technischen-support) unten beschrieben.

## Sprachverwaltung

Die Konsole ist in __Französisch__ und __Englisch__ verfügbar. Sie können die Betriebssprache über das __Sprachsymbol__ oben rechts auf dem Bildschirm ändern.

Die Sprachänderung eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden Tenant [Tenant](iam/concepts.md#tenant).

## Zugang zum technischen Support

Zu jedem Zeitpunkt können Sie das __Cloud-Temple-Support-Team__ über das __'Lebensring'-Symbol__ oben rechts auf dem Bildschirm kontaktieren.

<img src={shivaSupport} />

Sie werden während des gesamten Supportanfrageprozesses geführt.

Der erste Schritt ist die Identifizierung des Typs der Supportanfrage:

- Einen Rat zur Nutzung eines Produkts anfordern (außerhalb eines Vorfalls),
- Unterstützung im Zusammenhang mit Ihrem Kundenkonto anfordern,
- Einen Vorfall melden oder technischen Support anfordern,
- Die Unterstützung eines professionellen Dienstes anfordern (Bereitstellung eines Cloud-Temple-Ingenieurs für ein Problem).

<img src={shivaSupport_01} />

Anschließend haben Sie die Möglichkeit, Präzisierungen zu geben und Dateien beizufügen (z. B. Bilder oder Protokolle).

Der Auftraggeber kann in der Ticketbeschreibung auch einen Schweregrad (P1 bis P5) angeben, im Falle eines Sicherheitsvorfalls, wie z. B.:

<img src={shivaSupportCriticities} />

__KRITISCH (P1)__:

- Verdacht auf Leckage sensibler Daten
- Erkennung eines unbefugten Zugriffs auf Ihre Daten
- Kompromittierung Ihrer Administrationsanmeldeinformationen
- Vollständige Nichtverfügbarkeit Ihrer kritischen Dienste
- Anomales Verhalten bei sensiblen Daten
- Verletzung personenbezogener Daten

__HOCH (P2)h__:

- Funktionsstörung der Benutzerverbindungen
- Anomalie bei der Verschlüsselung Ihrer Daten
- Verlust des Zugriffs auf bestimmte kritische Funktionen
- Inkonsistenz in den Daten
- Schwere Verzögerungen mit Auswirkungen auf die Geschäftstätigkeit

__MITTEL (P3)__:

- Lokalisiertes Leistungsproblem
- Vorfall bei einer nicht kritischen Funktion
- Konfigurationsfehler mit begrenzter Auswirkung
- Gelegentliches Zugriffsproblem

__NIEDRIG (P4)__:

- Untersuchungsaufforderung
- Anomalie ohne direkte Auswirkung
- Konformitätsfrage
- Bedarf an technischer Klärung

__DIENST BETRIEBSBEREIT (P5)__:

- Dienst betriebsbereit ohne unmittelbares Risiko

<img src={shivaSupport_02} />

Nachdem Ihre Anfrage gestellt wurde, können Sie Ihre Anfragen über das __'Lebensring'-Symbol__ oben rechts auf dem Bildschirm wiederfinden:

<img src={shivaSupport_03} />

## Zugang zu den Benutzerfunktionen über die Web-Oberfläche

Die gesamten Ihrem Benutzer zugänglichen Funktionen (abhängig von seinen Berechtigungen) befinden sich links auf dem Bildschirm, in der grünen Leiste.
Die Funktionen sind nach Modulen gruppiert. Dies umfasst hauptsächlich:

- Das __Inventar__ Ihrer Ressourcen,
- Das __Tracking der Operationen__,
- Die __Steuerung der IaaS-Ressourcen__ (Compute, Storage, Netzwerk, ...)
- Die __Steuerung der OpenIaaS-Ressourcen__ (Compute, Storage, Netzwerk, ...)
- Der Zugang zu den __Zusatzdiensten__ (Bastion, Monitoring, ...)
- Die __Verwaltung Ihrer Organisation__ (Verwaltung der Tenants, der Berechtigungen, ...)

Die Aktivierung eines Moduls für einen Benutzer hängt von den Berechtigungen des Benutzers ab. Zum Beispiel ist das Modul __'Commande'__ nicht verfügbar, wenn der Benutzer nicht über die Berechtigung __'ORDER'__ verfügt.

Hier ist eine Übersicht der verfügbaren Module. Neue Module erweitern die Konsole regelmäßig:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : ermöglicht einen schnellen Überblick über die __Gesamtheit der Compute- und Storage-Ressourcen__, die Statistiken zur __Backup__ und eine __Zusammenfassung der Support-Tickets__,
- __Inventar__ : ermöglicht einen Überblick über alle Ihre Ressourcen vom Typ __'virtuelle Maschinen'__. Falls __Tags__ verwendet werden, ermöglicht es eine Ansicht nach __Tag__ (z. B. geschäftliche Ansicht, Anwendungsansicht, ...),
- __Infogérance__ : gibt Zugriff auf das Tracking Ihrer __Support-Anfragen__ und auf die __Metrik der Dienste__,
- __IaaS__ : ermöglicht die __Steuerung der IaaS-VMware-Infrastrukturen__ (Virtuelle Maschinen, Cluster, Hypervisoren, Replikationen, Backup, ...),
- __OpenIaaS__ : ermöglicht die __Steuerung der Xen Orchestra-Ressourcen__ (Virtuelle Maschinen, Backup, ...),
- __OpenShift__ : ermöglicht die Steuerung Ihrer **PaaS-Architektur RedHat OpenShift** und das Management Ihrer Container in den 3 Verfügbarkeitszonen der Plattform.
- __Bastion__ : Ermöglicht das Deployment und die Steuerung von SSH/RDP-Bastion-Appliances in Ihren Netzwerken,
- __Netzwerk__ : ermöglicht die Steuerung der __Netzwerke der Ebene 2 und 3__, der __öffentlichen IPs__ und Ihrer __Telekom-Kreisläufe__,
- __Colocation__ : Bietet einen Überblick über die Geräte in der __gemeinsam genutzten oder dedizierten Colocation-Zone__,
- __Commande__ : Ermöglicht die Bestellung von Ressourcen und das Tracking der Deployments,
- __Administration__ : Gruppiert die Verwaltungsfunktionen für Benutzer und Tenants sowie den Zugriff auf die globale Protokollierung.
</div>
</div>
Die Piktogramme __'NEW'__ bedeuten, dass das betreffende Produkt provisioniert wurde, aber noch nicht als __SecNumCloud-Angebot__ qualifiziert ist, und __'BETA'__ bedeutet, dass das betreffende Produkt provisioniert wurde und gerade als __SecNumCloud-Angebot__ qualifiziert wurde.

## Protokollierung - Aktivitätsverfolgung

Die Aktivitäten-Seite dient dazu, eine vollständige Sichtbarkeit über alle Lese- und Schreiboperationen innerhalb der Konsole bereitzustellen und somit eine erhöhte Nachverfolgbarkeit und Sicherheit zu gewährleisten. Sie hebt die beiden Haupt-Registerkarten hervor: Letzte und Archivierte.

<img src={shivaLogs} />

Es ist möglich, das Detail eines Logs zu öffnen, indem man seine Zeile aufklappt.

<img src={shivaLogsDetail} />

### __Struktur der Seite__

#### __Registerkarten__

- __Letzte__

- Letzte Operationen
- Echtzeit-Tracking

- __Archivierte__

- Operationen über einen längeren Zeitraum
- Archivierte Operationen zur Nachverfolgbarkeit und Konformität

#### __Angezeigte Informationen__

- Datum und Uhrzeit

- Typ der Operation
  - Der Status
- Benutzer
- Beschreibung der Operation

#### __Funktionalität__

- Suche/Filterung für spezifische Operationen

### __Verwendung__

- __Zugang :__ Berechtigung `activity_read`
- __Navigation :__
  - Wählen Sie die Registerkarte "Letzte" für Echtzeit-Operationen.
  - Wählen Sie "Archivierte", um den Verlauf einzusehen.
  - Verwenden Sie die Such- und Filterfunktionen, um spezifische Operationen zu lokalisieren.

#### __Hinweis zur Konformität__

Gemäß der SecNumCloud-Qualifikation beträgt die Speicherdauer der Ereignisse der Cloud Temple Konsole mindestens __6 Monate__, was somit die Einhaltung der Sicherheits- und Nachverfolgbarkeitsanforderungen gewährleistet.

## Einsichtnahme in die letzten Aktualisierungen

Klicken Sie unten links in der grünen Leiste auf das Symbol __'Neuigkeiten'__. Sie erhalten die Details der Änderungen für jede Version der Cloud Temple Konsole.

<img src={shivaOnboard_009} />

## Zugang zu den Benutzerfunktionen über die API

Der Zugang zu allen Funktionen der Konsole ist über die Konsole-API möglich. Sie können die Details der Verben und Konfigurationen über __'Profil'__ und __'APIs'__ einsehen:

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple stellt Ihnen einen [Terraform Provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) zur Verfügung, um Ihre Cloud-Plattform *"as code"* zu steuern.
