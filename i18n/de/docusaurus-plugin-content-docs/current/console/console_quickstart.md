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

- Ein Cloud Temple-Angebot abonniert haben. Um einfach zu abonnieren, können Sie [uns kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder eine E-Mail an __contact@cloud-temple.com__ senden.
- Zugang zur Shiva-Konsole haben
- Ihre öffentliche IPv4 in der Cloud Temple-Vertrauenszone deklariert haben (der Zugriff auf die Shiva-Konsole ist auf identifizierte vertrauenswürdige Adressen beschränkt)

## Verbindung zu Ihrem Cloud Temple-Tenant

Shiva ist über die folgende URL zugänglich: [Shiva](https://shiva.cloud-temple.com) oder über die direkte URL, die Ihnen per E-Mail zugesandt wurde.

Auf der ersten Seite können Sie [die Organisation](iam/concepts.md#organisations) auswählen, in der Ihr Benutzer erstellt wurde.
Sobald das Unternehmen eingegeben ist, klicken Sie bitte auf __'Anmelden'__.

<img src={shivaLogin} />

Sie werden dann zu einer Seite weitergeleitet, die Sie zur Authentifizierung auffordert.
Nach der Anmeldung gelangen Sie auf diese Seite.

<img src={shivaHome} />

## Sprachverwaltung

Die Konsole ist in __Französisch__ und __Englisch__ verfügbar. Sie können die Betriebssprache über das __Sprachsymbol__ oben rechts auf dem Bildschirm ändern.

Die Änderung der Sprache eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden [Tenant](iam/concepts.md#tenant).

## Zugang zum technischen Support

Sie können jederzeit das __Cloud Temple-Support-Team__ über das __'Rettungsring-Symbol'__ oben rechts auf dem Bildschirm kontaktieren.

<img src={shivaSupport} />

Sie werden durch den gesamten Support-Anfrageprozess geführt.

Der erste Schritt ist die Identifizierung der Art der Support-Anfrage:

- Beratung zur Nutzung eines Produkts (außerhalb von Vorfällen),
- Unterstützung im Zusammenhang mit Ihrem Kundenkonto anfordern,
- Einen Vorfall melden oder technischen Support anfordern,
- Unterstützung durch einen professionellen Service anfordern (Bereitstellung eines Cloud Temple-Ingenieurs für ein Problem).

<img src={shivaSupport_01} />

Sie haben dann die Möglichkeit, Details anzugeben und Dateien (z.B. Bilder oder Protokolle) beizufügen.

Der Anforderer kann im Falle eines Vorfalls auch einen Kritikalitätsgrad (P1 bis P4) in der Ticketbeschreibung angeben, wie zum Beispiel:

__KRITISCH (P1)__:

- Verdacht auf Verletzung sensibler Daten
- Erkennung eines unbefugten Zugriffs auf Ihre Daten
- Kompromittierung Ihrer Administratoranmeldedaten
- Vollständige Nichtverfügbarkeit Ihrer kritischen Dienste
- Abnormales Verhalten bei sensiblen Daten
- Verletzung personenbezogener Daten

__HOCH (P2)__:

- Fehlfunktion des Benutzerzugriffs
- Anomalie bei der Datenverschlüsselung
- Verlust des Zugriffs auf bestimmte kritische Funktionen
- Dateninkonsistenz
- Größere Verlangsamungen, die die Aktivität beeinträchtigen

__MITTEL (P3)__:

- Lokalisiertes Leistungsproblem
- Vorfall bei einer nicht kritischen Funktion
- Konfigurationsfehler mit begrenzten Auswirkungen
- Gelegentliche Zugangsschwierigkeiten

__NIEDRIG (P4)__:

- Untersuchungsanfrage
- Anomalie ohne direkte Auswirkungen
- Frage zur Compliance
- Bedarf an technischer Klärung

<img src={shivaSupport_02} />

Sobald Ihre Anfrage gestellt ist, können Sie Ihre Anfragen über das __'Rettungsring-Symbol'__ oben rechts auf dem Bildschirm finden:

<img src={shivaSupport_03} />

## Zugriff auf Benutzerfunktionen über die Weboberfläche

Alle für Ihren Benutzer zugänglichen Funktionen (abhängig von seinen Rechten) befinden sich auf der linken Seite des Bildschirms, im grünen Streifen.
Die Funktionen sind nach Modulen gruppiert. Dies umfasst hauptsächlich:

- Das __Inventar__ Ihrer Ressourcen,
- Die __Operationsverfolgung__,
- Die __Verwaltung der IaaS-Ressourcen__ (Berechnung, Speicher, Netzwerk usw.),
- Die __Verwaltung der OpenIaaS-Ressourcen__ (Berechnung, Speicher, Netzwerk usw.),
- Zugang zu __zusätzlichen Diensten__ (Bastion, Überwachung usw.),
- Die __Verwaltung Ihrer Organisation__ (Verwaltung von Tenants, Rechten usw.).

Die Aktivierung eines Moduls für einen Benutzer hängt von den Rechten des Benutzers ab. Zum Beispiel wird das Modul __'Bestellung'__ nicht verfügbar sein, wenn der Benutzer nicht das Recht __'ORDER'__ hat.

Hier ist ein Überblick über die verschiedenen verfügbaren Module. Neue Module werden regelmäßig zur Konsole hinzugefügt:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: bietet einen schnellen Überblick über die __gesamten Rechen- und Speicherressourcen__, Backup-Statistiken und eine __Zusammenfassung der Support-Tickets__,
- __Inventar__: bietet eine Ansicht aller Ihrer __'virtuellen Maschinen'-Ressourcen__. Wenn __Tags__ verwendet werden, bietet es eine Ansicht nach __Tag__ (z.B. Geschäftsansicht, Anwendungsansicht usw.),
- __Managed Services__: bietet Zugang zur Verfolgung Ihrer __Support-Anfragen__ und Service-Metriken,
- __IaaS__: ermöglicht die Verwaltung der VMware IaaS-Infrastruktur (Virtuelle Maschinen, Cluster, Hypervisoren, Replikation, Backup usw.),
- __OpenIaaS__: ermöglicht die Verwaltung von Xen Orchestra-Ressourcen (Virtuelle Maschinen, Backup usw.),
- __OpenShift__: ermöglicht die Verwaltung Ihrer **RedHat Openshift PaaS-Architektur** und Container über die drei Verfügbarkeitszonen der Plattform,
- __Bastion__: Ermöglicht die Bereitstellung und Verwaltung von SSH/RDP-Bastion-Appliances in Ihren Netzwerken,
- __Netzwerk__: ermöglicht die Verwaltung von __Schicht 2- und 3-Netzwerken__, __öffentlichen IPs__ und Ihren __Telekom-Leitungen__,
- __Colocation__: Bietet eine Ansicht der Geräte, die sich in __gemeinsam genutzten oder dedizierten Colocation-Bereichen__ befinden,
- __Bestellung__: Ermöglicht die Bestellung von Ressourcen und die Verfolgung von Bereitstellungen,
- __Administration__: Gruppiert Benutzer- und Tenant-Verwaltungsfunktionen und Zugang zur globalen Protokollierung.
</div>
</div>
Die Symbole __'NEW'__ zeigen an, dass das Produkt bereitgestellt wurde, aber noch nicht als __SecNumCloud-Angebot__ qualifiziert ist, und __'BETA'__ zeigt an, dass das Produkt bereitgestellt wurde und gerade als __SecNumCloud-Angebot__ qualifiziert wurde.

__Protokollierung - Aktivitätsverfolgung__
=====================================

Die Aktivitätsseite soll einen vollständigen Überblick über alle Lese- und Schreibvorgänge innerhalb der Konsole bieten und so eine erhöhte Rückverfolgbarkeit und Sicherheit gewährleisten. Sie hebt die beiden Hauptregisterkarten hervor: Aktuell und Archiviert.

<img src={shivaLogs} />

### __Seitenstruktur__

#### __Registerkarten__

 + **Aktuell**

- Aktuelle Operationen
- Echtzeit-Verfolgung

 + __Archiviert__

- Operationen über einen längeren Zeitraum
- Archivierte Operationen für Rückverfolgbarkeit und Compliance

#### __Angezeigte Informationen__

 + Datum und Uhrzeit
 + Art der Operation
 + Status
 + Benutzer
 + Beschreibung der Operation

#### __Funktionalität__

 + Suche/Filter für spezifische Operationen

### __Nutzung__

- __Zugang:__ Berechtigung `activity_read`
- __Navigation:__
  - Wählen Sie die Registerkarte "Aktuell" für Operationen in Echtzeit.
  - Wählen Sie "Archiviert", um den Verlauf anzuzeigen.
  - Verwenden Sie die Such- und Filterfunktionen, um bestimmte Operationen zu lokalisieren.

#### __Compliance-Hinweis__

Gemäß der SecNumCloud-Qualifikation beträgt die Speicherdauer von Konsolenereignissen bei Cloud Temple mindestens __6 Monate__, wodurch die Einhaltung der Sicherheits- und Rückverfolgbarkeitsanforderungen gewährleistet wird.

## Überprüfung der neuesten Updates

Klicken Sie unten links im grünen Streifen auf das Symbol __'Neuigkeiten'__. Sie erhalten die Details der Änderungen für jede Version der Cloud Temple-Konsole.

<img src={shivaOnboard_009} />

## Zugriff auf Benutzerfunktionen über die API

Der Zugriff auf alle Funktionen der Shiva-Konsole ist über die Shiva-API möglich. Sie können Details zu Verben und Konfigurationen über __'Profil'__ und __'APIs'__ einsehen:

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple stellt Ihnen einen [Terraform Provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) zur Verfügung, um Ihre Cloud-Plattform "as code" zu verwalten.
