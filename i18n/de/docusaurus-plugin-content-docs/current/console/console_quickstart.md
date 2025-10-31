---
title: Schnellstart
---
import shivaLogin from './images/shiva_login.png'
import shivaHome from './images/shiva_home.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaSupport from './images/shiva_support.png'
import shivaSupport_01 from './images/shiva_support_01.png'
import shivaSupport_02 from './images/shiva_support_02.png'
import shivaSupport_03 from './images/shiva_support_03.png'
import shivaOnboard_007 from './images/shiva_onboard_007.png'
import shivaLogs from './images/shiva_logs.png'
import shivaOnboard_009 from './images/shiva_onboard_009.png'
import shivaOnboard_008 from './images/shiva_onboard_008.png'

## Voraussetzungen

- Eine Cloud Temple-Angebot abgeschlossen haben. Um einfach abzuschließen, können Sie uns [kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder per E-Mail an die Adresse __contact@cloud-temple.com__ erreichen.
- Zugriff auf die Shiva-Konsole haben
- Ihre öffentliche IPv4-Adresse in der vertrauenswürdigen Zone von Cloud Temple angegeben haben (der Zugriff auf die Shiva-Konsole ist auf identifizierte vertrauenswürdige Adressen beschränkt)

## Connecting to your Cloud Temple tenant

Shiva is accessible via the URL below: [Shiva](https://shiva.cloud-temple.com) or directly via the URL provided to you by email.

The first page allows you to select the [organization](iam/concepts.md#organizations) in which your user was created.  
Once you have entered the company name, click on __'Sign in'__.

<img src={shivaLogin} />

You will then be redirected to a page prompting you to authenticate.  
After logging in, you will arrive at this page.

Hier finden Sie alle Metriken zu den in Ihrem Bereich abonnierten Produkten. Bei Problem(en) mit Ihren VMware- und/oder OpenIaaS-Produkten werden Warnungen sichtbar, deren Farbe mit ihrer Wichtigkeit verbunden ist.

<img src={shivaHome} />

## Language Management

The console is available in __French__ and __English__. You can change the operating language using the __language__ icon located in the top-right corner of the screen.

To change a user's language, go to their __'Profile'__, in the top-right corner of the screen, and select __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is set individually for each tenant [Tenant](iam/concepts.md#tenant).

## Technischer Support

Sie können jederzeit die __Cloud Temple-Support-Team__ über die __Schwimmring-Ikone__ oben rechts auf dem Bildschirm kontaktieren.

<img src={shivaSupport} />

Sie werden während des gesamten Support-Anfrage-Prozesses unterstützt.

Der erste Schritt ist die Identifizierung der Art der Support-Anfrage:

- Beratung zur Nutzung eines Produkts (außer bei Incident),
- Unterstützung im Zusammenhang mit Ihrem Kundenkonto,
- Melden eines Incidents oder Anfordern technischer Unterstützung.
- Anfordern der Unterstützung eines professionellen Dienstleisters (Bereitstellung eines Cloud Temple-Engineers für eine spezifische Problemstellung).

<img src={shivaSupport_01} />

Anschließend können Sie zusätzliche Informationen angeben und Dateien beifügen (z. B. Bilder oder Protokolle).

Der Auftraggeber kann außerdem in der Ticket-Beschreibung einen Kritikalitätsgrad (P1 bis P4) angeben, insbesondere bei Sicherheitsvorfällen, wie folgt:

__KRITISCH (P1)__:

- Verdacht auf Datenlecks sensibler Informationen
- Erkennung eines nicht autorisierten Zugriffs auf Ihre Daten
- Kompromittierung Ihrer Administratoren-Zugangsdaten
- Vollständige Unzugänglichkeit Ihrer kritischen Dienste
- Anomalies im Verhalten sensibler Daten
- Verletzung personenbezogener Daten

__HOCH (P2)__:

- Funktionsstörungen bei Benutzerzugängen
- Anomalie im Verschlüsselungsverfahren Ihrer Daten
- Verlust des Zugriffs auf bestimmte kritische Funktionen
- Inkonsistenzen in den Daten
- Schwere Verzögerungen, die die Geschäftsaktivität beeinträchtigen

__MITTEL (P3)__:

- Lokal begrenztes Leistungsproblem
- Ausfall einer nicht-kritischen Funktion
- Konfigurationsfehler mit begrenztem Auswirkungsumfang
- Punktuelle Zugriffsschwierigkeiten

__NIEDRIG (P4)__:

- Anfrage zur Untersuchung
- Anomalie ohne direkten Einfluss
- Frage zur Konformität
- Bedarf an technischer Klärung

<img src={shivaSupport_02} />

Nach Abschluss Ihrer Anfrage können Sie Ihre Anfragen über die __Schwimmring-Ikone__ oben rechts auf dem Bildschirm wiederfinden:

<img src={shivaSupport_03} />

## Zugriff auf Benutzerfunktionen über die Web-Oberfläche

Alle für Ihren Benutzer (abhängig von seinen Berechtigungen) verfügbaren Funktionen befinden sich auf der linken Seite des Bildschirms im grünen Bereich. Die Funktionen sind nach Modulen gruppiert. Dazu gehören hauptsächlich:

- Der __Bestand__ Ihrer Ressourcen,
- Die __Verfolgung von Operationen__,
- Die __Steuerung von IaaS-Ressourcen__ (Berechnung, Speicher, Netzwerk, ...),
- Die __Steuerung von OpenIaaS-Ressourcen__ (Berechnung, Speicher, Netzwerk, ...),
- Der Zugriff auf __zusätzliche Dienste__ (Bastion, Monitoring, ...),
- Die __Verwaltung Ihrer Organisation__ (Verwaltung von Mandanten, Berechtigungen, ...).

Die Aktivierung eines Moduls für einen Benutzer hängt von dessen Berechtigungen ab. Zum Beispiel ist das Modul __'Bestellung'__ nicht verfügbar, wenn der Benutzer die Berechtigung __'ORDER'__ nicht besitzt.

Im Folgenden finden Sie eine Übersicht über die verfügbaren Module. Regelmäßig werden neue Module zur Konsole hinzugefügt:

<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: ermöglicht eine schnelle Übersicht über den __Gesamtbestand an Rechen- und Speicherressourcen__, die Statistiken der __Sicherung__ sowie eine __Zusammenfassung der Support-Fälle__,
- __Bestand__: bietet eine Übersicht über alle Ihre Ressourcen des Typs __'virtuelle Maschinen'__. Wenn __Tags__ verwendet werden, ermöglicht es eine Ansicht nach __Tag__ (z. B. Geschäftsbereich, Anwendung, ...),
- __Infogérance__: gewährt Zugriff auf die Verfolgung Ihrer __Support-Anfragen__ und die __Metriken der Dienste__,
- __IaaS__: ermöglicht die __Steuerung Ihrer VMware-IaaS-Infrastrukturen__ (virtuelle Maschinen, Cluster, Hypervisoren, Replikationen, Sicherungen, ...),
- __OpenIaaS__: ermöglicht die __Steuerung von Xen Orchestra-Ressourcen__ (virtuelle Maschinen, Sicherungen, ...),
- __OpenShift__: ermöglicht die Steuerung Ihrer **RedHat OpenShift-PaaS-Architektur** und die Verwaltung Ihrer Container über die drei Verfügbarkeitszonen der Plattform.
- __Bastion__: ermöglicht das Bereitstellen und Steuern von Bastion-Appliances für SSH/RDP in Ihren Netzwerken,
- __Netzwerk__: ermöglicht die Steuerung von __Netzwerken der Ebene 2 und 3__, __öffentlichen IP-Adressen__ und Ihrer __Telekommunikationsverbindungen__,
- __Colocation__: bietet eine Übersicht über die Geräte in den Bereichen der __gemeinsamen oder dedizierten Colocation__,
- __Bestellung__: ermöglicht die Bestellung von Ressourcen und die Verfolgung der Bereitstellungen,
- __Administration__: fasst die Administrationsfunktionen für Benutzer und Mandanten sowie den Zugriff auf die globale Protokollierung zusammen.
</div>
</div>

Die Piktogramme __'NEW'__ bedeuten, dass das betreffende Produkt bereitgestellt wurde, aber noch nicht als __SecNumCloud-Angebot__ qualifiziert ist. Die Piktogramme __'BETA'__ bedeuten, dass das betreffende Produkt bereitgestellt wurde und kürzlich als __SecNumCloud-Angebot__ qualifiziert wurde.

__Protokollierung – Verfolgung von Aktivitäten__
=====================================

Die Aktivitätsseite dient dazu, eine vollständige Übersicht über alle Lese- und Schreibvorgänge innerhalb der Konsole bereitzustellen und somit eine erhöhte Nachvollziehbarkeit und Sicherheit zu gewährleisten. Sie hebt die beiden Hauptregisterkarten hervor: Kürzlich und Archiviert.

<img src={shivaLogs} />

### __Page Structure__

#### __Tabs__

 + **Recent**

- Recent operations
- Real-time monitoring

- __Archived__

- Operations over a longer period
- Archived operations for traceability and compliance

#### __Displayed Information__

 + Date and Time

- Operation Type
  - Status
- User
- Operation Description

#### __Funktion__

 + Suche/Filter für spezifische Operationen

### __Usage__

- __Access:__ permission `activity_read`
- __Navigation:__
  - Select the "Recent" tab for real-time operations.
  - Choose "Archived" to view the history.
  - Use search and filtering features to locate specific operations.

#### __Compliance Note__

In accordance with the SecNumCloud certification, the retention period for Cloud Temple console events is a minimum of __6 months__, ensuring compliance with security and traceability requirements.

## Viewing the latest updates

Click on the __'New Features'__ icon in the bottom-left corner of the green banner. You will find detailed information about the changes for each version of the Cloud Temple console.

<img src={shivaOnboard_009} />

## Zugriff auf Benutzerfunktionen über die API

Der Zugriff auf alle Funktionen der Shiva-Konsole ist über die Shiva-API möglich. Sie finden detaillierte Informationen zu Verben und Konfigurationen unter __'Profil'__ und __'APIs'__:

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple vous met à disposition un [Terraform-Provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) pour piloter votre plateforme Cloud *"as code"*.
