---
title: Quickstart
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
- Ein Cloud Temple Angebot abonniert haben. Um einfach zu abonnieren, können Sie uns [kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder per E-Mail an __contact@cloud-temple.com__.
- Zugriff auf die Shiva-Konsole haben
- Ihre öffentliche IPv4-Adresse in der vertrauenswürdigen Zone Cloud Temple eingetragen haben (der Zugriff auf die Shiva-Konsole ist auf vertrauenswürdige Adressen beschränkt)

## Verbindung zu Ihrem Cloud Temple Tenant
Shiva ist über die folgende URL zugänglich:
    https://shiva.cloud-temple.com
    Oder über die direkte URL, die Ihnen per E-Mail mitgeteilt wurde.

Die erste Seite ermöglicht Ihnen die Auswahl der [Organisation](iam/concepts.md#organisations), in der Ihr Benutzer erstellt wurde.
Sobald das Unternehmen eingetragen ist, klicken Sie bitte auf __'Se connecter'__.

<img src={shivaLogin} />

Sie werden dann zu einer Seite weitergeleitet, auf der Sie sich authentifizieren müssen.
Nach der Anmeldung gelangen Sie auf diese Seite.

<img src={shivaHome} />

## Sprachverwaltung
Die Konsole ist in __Französisch__ und __Englisch__ verfügbar. Sie können die Sprache über das __Sprachsymbol__ oben rechts auf dem Bildschirm ändern.

Die Änderung der Sprache eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

<img src={shivaProfil_006} />

Die Konfiguration erfolgt für jeden [Tenant](iam/concepts.md#tenant).

## Zugriff auf den technischen Support

Sie können jederzeit __das Cloud Temple Support-Team__ über das __'Boje'-Symbol__ oben rechts auf dem Bildschirm kontaktieren.

<img src={shivaSupport} />

Sie werden während des gesamten Supportanfrageprozesses geführt.

Der erste Schritt besteht darin, den Typ der Supportanfrage zu identifizieren:

- Eine Beratung zur Nutzung eines Produkts (außerhalb von Vorfällen) anfordern,
- Unterstützung im Zusammenhang mit Ihrem Kundenkonto anfordern,
- Einen Vorfall melden oder technischen Support anfordern.
- Unterstützung durch einen professionellen Dienst anfordern (Bereitstellung eines Cloud Temple Ingenieurs für ein spezifisches Problem).

<img src={shivaSupport_01} />

Sie haben dann die Möglichkeit, weitere Einzelheiten anzugeben und Dateien beizufügen (z.B. Bilder oder Protokolle).

Der Auftraggeber kann in der Beschreibung des Tickets auch einen Kritikalitätsgrad (P1 bis P4) festlegen, im Falle eines Vorfalls, wie z. B.:

**KRITISCH (P1)**:

- Vermutung auf Datenleck sensibler Daten
- Feststellung eines unbefugten Zugriffs auf Ihre Daten
- Kompromittierung Ihrer Administrationsanmeldeinformationen
- Totale Unverfügbarkeit Ihrer kritischen Dienste
- Abnormales Verhalten bei sensiblen Daten
- Verletzung personenbezogener Daten

**HOCH (P2)**:

- Fehlfunktion der Benutzerzugriffe
- Anomalie bei der Verschlüsselung Ihrer Daten
- Verlust des Zugriffs auf einige kritische Funktionen
- Dateninkonsistenz
- Größere Verlangsamungen, die die Aktivität beeinträchtigen

**MITTEL (P3)**:

- Lokalisierter Leistungsprobleme
- Vorfall bei einer nicht kritischen Funktion
- Konfigurationsfehler mit begrenztem Einfluss
- Gelegentliche Schwierigkeiten beim Zugriff

**NIEDRIG (P4)**:

- Anfrage zur Untersuchung
- Anomalie ohne direkten Einfluss
- Frage zur Konformität
- Bedarf an technischer Klärung

<img src={shivaSupport_02} />

Nach Ihrer Anfrage können Sie Ihre Anfragen über das __'Boje'-Symbol__ oben rechts auf dem Bildschirm einsehen:

<img src={shivaSupport_03} />

## Zugriff auf Benutzerfunktionen über die Web-Oberfläche

Alle für Ihren Benutzer zugänglichen Funktionen (abhängig von seinen Rechten) befinden sich links auf dem Bildschirm, im grünen Streifen.
Die Funktionen sind nach Modulen gruppiert. Diese umfassen hauptsächlich:

- Das __Inventar__ Ihrer Ressourcen,
- Die __Überwachung der Operationen__,
- Die __Steuerung von IaaS-Ressourcen__ (Rechnen, Speicher, Netzwerk, ...),
- Die __Steuerung von OpenIaaS-Ressourcen__ (Rechnen, Speicher, Netzwerk, ...),
- Den Zugang zu __zusätzlichen Diensten__ (Bastion, Überwachung, ...),
- Die __Verwaltung Ihrer Organisation__ (Verwaltung von Tenants, Rechten, ...).

Die Aktivierung eines Moduls für einen Benutzer hängt von den Rechten des Benutzers ab. Zum Beispiel ist das Modul __'Bestellung'__ nicht verfügbar, wenn der Benutzer nicht das Recht __'ORDER'__ hat.

Hier ist eine Präsentation der verschiedenen verfügbaren Module. Neue Module bereichern die Konsole regelmäßig:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : bietet eine schnelle Übersicht über das __Gesamtvolumen der Rechen- und Speicherressourcen__, die Statistiken zur __Datensicherung__ und eine __Zusammenfassung der Supportanfragen__,
- __Inventar__ : bietet eine Übersicht über alle Ihre __'virtuellen Maschinen'__. Wenn __Tags__ verwendet werden, bietet es eine Ansicht nach __Tag__ (z.B. Geschäftsansicht, Anwendungsansicht, ...),
- __Managed Services__ : bietet Zugang zur Verfolgung Ihrer __Supportanfragen__ und zur __Metrik der Dienste__,
- __IaaS__ : ermöglicht die __Steuerung der VMware IaaS-Infrastrukturen__ (Virtuelle Maschinen, Cluster, Hypervisoren, Replikationen, Sicherung, ...),
- __OpenIaaS__ : ermöglicht die __Steuerung der Xen Orchestra-Ressourcen__ (Virtuelle Maschinen, Sicherung, ...),
- __OpenShift__ : ermöglicht die Steuerung Ihrer **RedHat Openshift PaaS-Architektur** und das Management Ihrer Container in den 3 Verfügbarkeitszonen der Plattform.
- __Bastion__ : Ermöglicht die Bereitstellung und Steuerung von SSH/RDP-Bastion Appliances in Ihren Netzwerken,
- __Netzwerk__ : ermöglicht die Steuerung der __Netzwerke der Ebene 2 und 3__, der __öffentlichen IPs__ und Ihrer __Telekommunikationsverbindungen__,
- __Colocation__ : Bietet eine Übersicht über die in der __gemeinsam genutzten oder dedizierten Colocation-Zone__ befindlichen Geräte,
- __Bestellung__ : Ermöglicht die Bestellung von Ressourcen und die Verfolgung von Bereitstellungen,
- __Administration__ : Fasst die Administrationsfunktionen der Benutzer und Tenants zusammen sowie den Zugang zur Gesamtprotokollierung.
</div>
</div>
Die Piktogramme __'NEW'__ bedeuten, dass das betreffende Produkt bereitgestellt wurde, aber noch nicht als __SecNumCloud-Angebot__ qualifiziert ist, und __'BETA'__ bedeutet, dass das betreffende Produkt bereitgestellt wurde und gerade als __SecNumCloud-Angebot__ qualifiziert wurde.

**Protokollierung - Aktivitätsverfolgung**
=========================================

Die Aktivitätenseite dient dazu, eine vollständige Sichtbarkeit aller Lese- und Schreiboperationen innerhalb der Konsole zu bieten und so eine erhöhte Rückverfolgbarkeit und Sicherheit zu gewährleisten. Sie hebt die beiden Hauptregisterkarten hervor: Aktuell und Archiviert.

<img src={shivaLogs} />

### **seitenstruktur**

#### **registerkarten**
	+ **Aktuell**
		- Aktuelle Operationen
		- Echtzeitverfolgung
	+ **Archiviert**
		- Operationen über einen längeren Zeitraum
		- Archivierte Operationen für Rückverfolgbarkeit und Konformität
#### **angezeigte informationen**
	+ Datum und Uhrzeit
	+ Art der Operation
    + Zustand
	+ Benutzer
	+ Beschreibung der Operation
#### **funktionalität**
	+ Suche/Filterung nach bestimmten Operationen

### **nutzung**

* **zugang:** Berechtigung `activity_read`
* **navigation:**
	- Wählen Sie den Reiter "Aktuell" für Echtzeitoperationen.
	- Wählen Sie "Archiviert", um das Verlaufsprotokoll einzusehen.
	- Verwenden Sie die Such- und Filterfunktionen, um spezifische Operationen zu finden.

#### **konformitätshinweis**
In Übereinstimmung mit der SecNumCloud Qualifikation werden die Ereignisse der Cloud Temple Konsole für mindestens **6 Monate** gespeichert, um die Einhaltung der Sicherheits- und Rückverfolgbarkeitsanforderungen zu gewährleisten.

## Abruf der neuesten Updates

Klicken Sie unten links im grünen Streifen auf das Symbol __'Neuigkeiten'__. Sie erhalten die Details zu den Änderungen für jede Version der Cloud Temple Konsole.

<img src={shivaOnboard_009} />

## Zugriff auf Benutzerfunktionen über die API

Der Zugriff auf alle Funktionen der Shiva-Konsole ist über die Shiva-API möglich. Sie können die Details der Verben und Konfigurationen über __'Profil'__ und __'APIs'__  einsehen:

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple stellt Ihnen einen Terraform-Provider zur Verfügung, um Ihre Cloud-Plattform "as code" zu steuern. Er ist hier zugänglich:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest