---
title: Quickstart
---

## Voraussetzungen
- Ein Abonnement bei einem Cloud Temple Angebot. Um einfach zu abonnieren, können Sie [uns kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder per E-Mail an __contact@cloud-temple.com__.
- Zugang zur Shiva-Konsole haben
- Ihre öffentliche IPv4 in der Cloud Temple Vertrauenszone deklariert haben (der Zugang zur Shiva-Konsole ist auf identifizierte Vertrauensadressen beschränkt)

## Verbindung zu Ihrem Cloud Temple Tenant
Shiva ist über die untenstehende URL erreichbar:
    https://shiva.cloud-temple.com
    Oder über die direkte URL, die Ihnen per E-Mail mitgeteilt wurde.

Die erste Seite ermöglicht es Ihnen, die [Organisation](iam/concepts.md#organisations) auszuwählen, in der Ihr Benutzer erstellt wurde.
Sobald das Unternehmen angegeben wurde, klicken Sie bitte auf __'Anmelden'__.

![](images/shiva_login.png)

Sie werden dann zu einer Seite weitergeleitet, die Sie zur Authentifizierung auffordert.
Nach dem Einloggen gelangen Sie zu dieser Seite.

![](images/shiva_home.png)

## Sprachverwaltung
Die Konsole ist in __Französisch__, __Englisch__ verfügbar. Sie können die Sprache über das __Sprach-Icon__ oben rechts auf dem Bildschirm ändern.

Die Sprachauswahl eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, in den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden Tenant [Tenant](iam/concepts.md#tenant).

## Zugang zum technischen Support

Sie können jederzeit das __Cloud Temple Supportteam__ über das __'Rettungsring-Icon'__ oben rechts auf dem Bildschirm kontaktieren.

![](images/shiva_support.png)

Sie werden durch den gesamten Supportanfrageprozess geführt.

Der erste Schritt ist die Identifikation des Supportanfragetypen:

- Beratung zur Nutzung eines Produkts (außerhalb von Vorfällen) anfordern,
- Support in Bezug auf Ihr Kundenkonto anfordern,
- Einen Vorfall melden oder technischen Support anfordern,
- Unterstützung durch einen professionellen Service anfordern (Bereitstellung eines Cloud Temple Ingenieurs für ein Problem).

![](images/shiva_support_01.png)

Sie haben dann die Möglichkeit, Details anzugeben und Dateien (z. B. Bilder oder Protokolle) hinzuzufügen.

Der Auftraggeber kann auch den Kritikalitätsgrad (P1 bis P4) in der Beschreibung des Tickets angeben, im Falle eines Vorfalls, wie zum Beispiel:

**KRITISCH (P1) - Sofortige Benachrichtigung**:

- Verdacht auf Datenleakage sensibler Daten
- Erkennung eines unautorisierten Zugriffs auf Ihre Daten
- Kompromittierung Ihrer Administrationsanmeldedaten
- Totalausfall Ihrer kritischen Dienste
- Anormales Verhalten bei sensiblen Daten
- Verletzung personenbezogener Daten

**HOCH (P2) - Benachrichtigung < 2 Stunden**:

- Funktionsstörung der Benutzerzugriffe
- Anomalie bei der Verschlüsselung Ihrer Daten
- Verlust des Zugangs zu bestimmten kritischen Funktionen
- Inkonsistenzen in den Daten
- Erhebliche Verzögerungen, die die Aktivität beeinträchtigen

**MITTEL (P3) - Benachrichtigung < 4 Stunden**:

- Lokales Leistungsproblem
- Vorfall bei einer nicht kritischen Funktion
- Konfigurationsfehler mit begrenztem Einfluss
- Zeitweilige Zugangsprobleme

**NIEDRIG (P4) - Benachrichtigung < 24 Stunden**:

- Anfrage einer Untersuchung
- Anomalie ohne direkten Einfluss
- Frage zur Compliance
- Bedarf an technischer Klarstellung

![](images/shiva_support_02.png)

Sobald Ihre Anfrage gestellt ist, können Sie Ihre Anfragen über das __'Rettungsring-Icon'__ oben rechts auf dem Bildschirm abrufen:

![](images/shiva_support_03.png)

## Zugang zu Benutzerfunktionen über die Web-Oberfläche

Alle für Ihren Benutzer zugänglichen Funktionen (je nach seinen Rechten) befinden sich links auf dem Bildschirm, im grünen Banner.
Die Funktionen sind nach Modulen gruppiert. Dies umfasst hauptsächlich:

- Die __Inventur__ Ihrer Ressourcen,
- Die __Überwachung der Operationen__,
- Das __Management der IaaS-Ressourcen__ (Rechnen, Speicher, Netzwerk, ...)
- Das __Management der OpenIaaS-Ressourcen__ (Rechnen, Speicher, Netzwerk, ...)
- Den Zugang zu __Nebendiensten__ (Bastion, Überwachung, ...)
- Die __Verwaltung Ihrer Organisation__ (Tenant- und Rechteverwaltung, ...)

Die Aktivierung eines Moduls für einen Benutzer hängt von den Rechten des Benutzers ab. Zum Beispiel wird das Modul __'Bestellung'__ nicht verfügbar sein, wenn der Benutzer nicht das Recht __'ORDER'__ hat.

Hier ist eine Präsentation der verschiedenen verfügbaren Module. Neue Module erweitern regelmäßig die Konsole:

![](images/shiva_onboard_007.png)

- __Dashboard__ : bietet einen schnellen Überblick über die __Gesamtressourcen für Berechnung und Speicher__, die __Sicherungsstatistiken__ und eine __Zusammenfassung der Supportanfragen__,
- __Inventar__ : bietet eine Übersicht über alle Ihre Ressourcen des Typs __'virtuelle Maschinen'__. Wenn __Tags__ verwendet werden, ermöglicht es eine Ansicht nach __Tag__ (z. B. Geschäftsansicht, Anwendungsansicht, ...),
- __Managed Services__ : bietet Zugang zur Überwachung Ihrer __Supportanfragen__ und zur __Dienstmetrologie__,
- __IaaS__ : erlaubt das __Management der VMware Infrastrukturen__ (Virtuelle Maschinen, Cluster, Hypervisoren, Replikationen, Sicherung, ...),
- __OpenIaaS__ : erlaubt das __Management der Xen Orchestra Ressourcen__ (Virtuelle Maschinen, Sicherung, ...),
- __OpenShift__ : erlaubt das Management Ihrer **RedHat Openshift PaaS-Architektur** und der Verwaltung Ihrer Container in den drei Verfügbarkeitszonen der Plattform.
- __Bastion__ : ermöglicht das Bereitstellen und Management von Bastion SSH/RDP Appliances in Ihren Netzwerken,
- __Netzwerk__ : erlaubt das Management der __Netzwerke der Ebenen 2 und 3__, der __öffentlichen IP-Adressen__ und Ihrer __Telekommunikationsstrecken__,
- __Colocation__ : bietet einen Überblick über die in einer __gemeinsamen oder dedizierten Colocation-Zone__ befindlichen Geräte,
- __Bestellung__ : ermöglicht die Bestellung von Ressourcen und die Überwachung der Bereitstellungen,
- __Verwaltung__ : umfasst die Verwaltungsfunktionen der Benutzer und Tenant sowie den Zugang zur globalen Protokollierung.

Die Piktogramme __'NEU'__ bedeuten, dass das betreffende Produkt bereitgestellt, aber noch nicht als __SecNumCloud Angebot__ qualifiziert ist, und __'BETA'__ bedeuten, dass das betreffende Produkt bereitgestellt und gerade als __SecNumCloud Angebot__ qualifiziert wurde.

## Zugang zu Benutzerfunktionen über die API

Der Zugang zu allen Funktionen der Shiva-Konsole ist über die Shiva-API möglich. Sie können die Details zu den Verben und Konfigurationen über __'Profil'__ und __'APIs'__ einsehen:

![](images/shiva_onboard_008.png)

## Terraform Provider

Cloud Temple stellt Ihnen einen Terraform Provider zur Verfügung, um Ihre Cloud-Plattform *"as code"* zu verwalten. Er ist hier zugänglich:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest