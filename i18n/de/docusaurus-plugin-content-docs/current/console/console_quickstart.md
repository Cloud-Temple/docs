---
title: Quickstart
---

## Voraussetzungen
- Ein Cloud Temple Angebot abonniert haben. Um sich einfach anzumelden, können Sie [uns kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder per E-Mail unter __contact@cloud-temple.com__.
- Zugang zur Shiva-Konsole haben
- Ihre öffentliche IPv4-Adresse in der Cloud Temple Vertrauenszone registriert haben (der Zugriff auf die Shiva-Konsole ist auf erkannte Vertrauensadressen beschränkt)

## Verbindung zu Ihrem Cloud Temple Tenant
Shiva ist über die folgende URL zugänglich:
    https://shiva.cloud-temple.com
    Oder über die direkte URL, die Ihnen per E-Mail mitgeteilt wurde.

Die erste Seite ermöglicht die Auswahl der [Organisation](iam/concepts.md#organisations), in der Ihr Benutzer erstellt wurde.
Sobald Sie das Unternehmen eingegeben haben, klicken Sie bitte auf __'Se connecter'__.

![](images/shiva_login.png)

Sie werden dann zu einer Seite weitergeleitet, auf der Sie sich authentifizieren müssen.
Nach der Anmeldung gelangen Sie auf diese Seite.

![](images/shiva_home.png)

## Sprachverwaltung
Die Konsole ist in __Französisch__, __Englisch__ verfügbar. Sie können die Sprache mit dem __Sprach__-Symbol oben rechts auf dem Bildschirm ändern.

Die Sprachänderung eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration wird für jeden einzelnen [Tenant](iam/concepts.md#tenant) durchgeführt.

## Zugriff auf den technischen Support

Sie können jederzeit das __Cloud Temple Support Team__ über das __'Rettungsring'__-Symbol oben rechts auf dem Bildschirm kontaktieren.

![](images/shiva_support.png)

Sie werden durch den gesamten Supportanfrageprozess geführt.

Der erste Schritt ist die Identifizierung des Typs der Supportanfrage:

- Einen Rat zur Nutzung eines Produkts (außerhalb eines Vorfalls) einholen,
- Unterstützung in Verbindung mit Ihrem Kundenkonto anfordern,
- Ein Ereignis melden oder technischen Support anfordern.
- Unterstützung durch einen professionellen Dienst (Bereitstellung eines Cloud Temple-Ingenieurs für ein Problem) anfordern.

![](images/shiva_support_01.png)

Sie haben anschließend die Möglichkeit, Details anzugeben und Dateien (z. B. Bilder oder Protokolle) hinzuzufügen.

Der Antragsteller kann in der Beschreibung des Tickets auch einen Dringlichkeitsgrad (P1 bis P4) angeben, im Falle eines Vorfalls, zum Beispiel:

**KRITISCH (P1)**:

- Verdacht auf Datenlecks sensibler Informationen
- Erkennung eines unbefugten Zugriffs auf Ihre Daten
- Kompromittierung Ihrer Administrationsanmeldeinformationen
- Totalausfall Ihrer kritischen Dienste
- Abnormales Verhalten bei sensiblen Daten
- Verletzung personenbezogener Daten

**HOCH (P2)**:

- Fehlfunktion der Benutzerzugänge
- Anomalie in der Datenverschlüsselung
- Verlust des Zugriffs auf bestimmte kritische Funktionen
- Dateninkonsistenz
- Wesentliche Verzögerungen, die die Aktivität beeinträchtigen

**MITTEL (P3)**:

- Lokalisierte Leistungsprobleme
- Vorfall bei einer nicht kritischen Funktion
- Konfigurationsfehler mit begrenzter Auswirkung
- Punktuelle Zugriffsschwierigkeiten

**NIEDRIG (P4)**:

- Anforderung einer Untersuchung
- Anomalie ohne direkten Einfluss
- Frage zur Konformität
- Bedarf an technischer Klärung

![](images/shiva_support_02.png)

Nach Ihrer Anfrage können Sie Ihre Anfragen über das __'Rettungsring'__-Symbol oben rechts auf dem Bildschirm abrufen:

![](images/shiva_support_03.png)

## Zugriff auf Benutzerfunktionen über die Weboberfläche

Alle für Ihren Benutzer zugänglichen Funktionen (je nach seinen Rechten) befinden sich links auf dem Bildschirm im grünen Balken.
Die Funktionen sind nach Modulen gruppiert. Dies umfasst hauptsächlich:

- Das __Inventar__ Ihrer Ressourcen,
- Die __Überwachung der Vorgänge__,
- Die __Steuerung der IaaS-Ressourcen__ (Rechnen, Speicher, Netzwerk, ...),
- Die __Steuerung der OpenIaaS-Ressourcen__ (Rechnen, Speicher, Netzwerk, ...),
- Den Zugriff auf __zusätzliche Dienste__ (Bastion, Monitoring, ...),
- Die __Verwaltung Ihrer Organisation__ (Verwaltung der Tenants, Rechte, ...).

Die Aktivierung eines Moduls für einen Benutzer hängt von den Rechten des Benutzers ab. Beispielsweise ist das Modul __'Bestellung'__ nicht verfügbar, wenn der Benutzer nicht das Recht __'ORDER'__ hat.

Hier ist eine Übersicht der verfügbaren Module. Neue Module werden regelmäßig zur Konsole hinzugefügt:

![](images/shiva_onboard_007.png)

- __Dashboard__ : Ermöglicht eine schnelle Ansicht über die __Gesamtheit der Rechen- und Speicherressourcen__, die Statistiken der __Sicherung__ und eine __Zusammenfassung der Supportanfragen__,
- __Inventar__ : Ermöglicht eine Ansicht aller Ihrer Ressourcen vom Typ __'virtuelle Maschinen'__. Wenn __Tags__ verwendet werden, ermöglicht es eine Ansicht nach __Tag__ (z.B. Fachansicht, Anwendungsansicht, ...),
- __Managed Services__ : Bietet Zugang zur Überwachung Ihrer __Supportanfragen__ und zur __Messung der Dienstleistungen__,
- __IaaS__ : Ermöglicht die __Steuerung der VMware IaaS-Infrastrukturen__ (Virtuelle Maschinen, Cluster, Hypervisoren, Replikationen, Sicherung, ...),
- __OpenIaaS__ : Ermöglicht die __Steuerung der Xen Orchestra-Ressourcen__ (Virtuelle Maschinen, Sicherung, ...),
- __OpenShift__ : Ermöglicht die Steuerung Ihrer **PaaS RedHat Openshift Architektur** und das Management Ihrer Container in den 3 Verfügbarkeitszonen der Plattform.
- __Bastion__ : Ermöglicht die Bereitstellung und Steuerung von SSH/RDP-Bastion Appliance in Ihren Netzwerken,
- __Netzwerk__ : Ermöglicht die Steuerung der __Netzwerke der Ebene 2 und 3__, der __öffentlichen IPs__ und Ihrer __Telekommunikationsverbindungen__,
- __Colocation__ : Bietet eine Ansicht der in der __gemeinschaftlichen oder dedizierten Colocation-Zone__ befindlichen Geräte,
- __Bestellung__ : Ermöglicht die Bestellung von Ressourcen und die Überwachung der Bereitstellungen,
- __Verwaltung__ : Fasst die Verwaltungsfunktionen der Benutzer und Tenants sowie den Zugriff auf die globale Protokollierung zusammen.

Die Piktogramme __'NEW'__ bedeuten, dass das betreffende Produkt bereitgestellt, jedoch noch nicht als __SecNumCloud-Angebot__ qualifiziert ist, und __'BETA'__ bedeuten, dass das betreffende Produkt bereitgestellt und gerade als __SecNumCloud-Angebot__ qualifiziert wurde.

**Protokollierung - Aktivitätsverfolgung**
=====================================

Die Aktivitätsseite bietet eine vollständige Übersicht über alle Lese- und Schreibvorgänge innerhalb der Konsole und gewährleistet so verbesserte Rückverfolgbarkeit und Sicherheit. Sie hebt die beiden Hauptreiter hervor: Aktuelle und Archivierte.

![](images/shiva_logs.png)

### **Seitenstruktur**

#### **Reiter**
	+ **Aktuelle**
		- Aktuelle Vorgänge
		- Echtzeitverfolgung
	+ **Archivierte**
		- Vorgänge über einen längeren Zeitraum
		- Für Rückverfolgbarkeit und Konformität archivierte Vorgänge
#### **Angezeigte Informationen**
	+ Datum und Uhrzeit
	+ Vorgangstyp
    + Status
	+ Benutzer
	+ Beschreibung des Vorgangs
#### **Funktionalität**
	+ Suche/Filterung für spezifische Vorgänge

### **Nutzung**

* **Zugang :** Berechtigung `activity_read`
* **Navigation :**
	- Wählen Sie den Reiter "Aktuelle" für Vorgänge in Echtzeit.
	- Wählen Sie "Archivierte", um die Historie einzusehen.
	- Verwenden Sie die Such- und Filterfunktionen, um spezifische Vorgänge zu finden.

#### **Konformitätshinweis**
In Übereinstimmung mit der SecNumCloud-Qualifikation werden die Konsolenevents von Cloud Temple für mindestens **6 Monate** gespeichert, wodurch die Sicherheits- und Rückverfolgbarkeitsanforderungen erfüllt werden.

## Überprüfung der neuesten Updates

Klicken Sie unten links im grünen Balken auf das __'Neuigkeiten'__-Symbol. Sie sehen die Details zu den Änderungen in jeder Version der Cloud Temple-Konsole.

![](images/shiva_onboard_009.png)

## Zugriff auf Benutzerfunktionen über die API

Der Zugriff auf alle Funktionen der Shiva-Konsole ist über die Shiva-API möglich. Sie können die Details der Verben und Konfigurationen über __'Profil'__ und __'APIs'__ einsehen:

![](images/shiva_onboard_008.png)

## Terraform Provider

Cloud Temple stellt Ihnen einen Terraform-Provider zur Verfügung, um Ihre Cloud-Plattform "als Code" zu steuern. Er ist hier zugänglich:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest