---
title: Quickstart
---

## Voraussetzungen
- Ein Abonnement bei einem Cloud Temple-Angebot. Um einfach zu abonnieren, können Sie [uns kontaktieren](https://www.cloud-temple.com/contactez-nous/) oder per E-Mail an __contact@cloud-temple.com__.
- Zugang zur Shiva-Konsole haben
- Ihre öffentliche IPv4-Adresse muss in der Vertrauenszone von Cloud Temple deklariert sein (der Zugriff auf die Shiva-Konsole ist auf identifizierte vertrauenswürdige Adressen beschränkt)

## Anmeldung bei Ihrem Cloud Temple-Tenant
Shiva ist über die folgende URL zugänglich:
    https://shiva.cloud-temple.com
    Oder über die direkte URL, die Ihnen per E-Mail mitgeteilt wurde.

Auf der ersten Seite können Sie die [Organisation](iam/concepts.md#organisations) auswählen, in der Ihr Benutzer erstellt wurde.
Nachdem Sie das Unternehmen angegeben haben, klicken Sie bitte auf __'Anmelden'__.

![](images/shiva_login.png)

Sie werden anschließend zu einer Seite weitergeleitet, die Sie zur Authentifizierung auffordert.
Nach der Anmeldung gelangen Sie auf diese Seite.

![](images/shiva_home.png)

## Sprachverwaltung
Die Konsole ist in __Französisch__ und __Englisch__ verfügbar. Sie können die Betriebssprache über das __Sprachsymbol__ oben rechts auf dem Bildschirm ändern.

Die Sprachänderung eines Benutzers erfolgt in seinem __'Profil'__, oben rechts auf dem Bildschirm, unter den __'Benutzereinstellungen'__.

![](images/shiva_profil_006.png)

Die Konfiguration erfolgt für jeden [Tenant](iam/concepts.md#tenant).

## Zugang zum technischen Support

Sie können jederzeit das __Cloud Temple Support-Team__ über das __'Rettungsring-Symbol'__ oben rechts auf dem Bildschirm kontaktieren.

![](images/shiva_support.png)

Sie werden durch den gesamten Prozess der Supportanfrage geführt.

Der erste Schritt besteht in der Identifizierung des Typs der Supportanfrage:

- Einen Rat zur Nutzung eines Produkts einholen (außer bei einem Vorfall),
- Unterstützung im Zusammenhang mit Ihrem Kundenkonto anfordern,
- Einen Vorfall melden oder technischen Support anfordern.
- Unterstützung durch einen professionellen Dienst anfordern (Bereitstellung eines Cloud Temple-Ingenieurs für ein Problem).

![](images/shiva_support_01.png)

Sie haben anschließend die Möglichkeit, genauere Angaben zu machen und Dateien (z. B. Bilder oder Protokolle) einzufügen.

![](images/shiva_support_02.png)

Sobald Ihre Anfrage abgeschlossen ist, können Sie Ihre Anfragen über das __'Rettungsring-Symbol'__ oben rechts auf dem Bildschirm finden :

![](images/shiva_support_03.png)

## Zugriff auf Benutzerfunktionen über die Weboberfläche

Alle für Ihren Benutzer zugänglichen Funktionen (je nach seinen Rechten) befinden sich links auf dem Bildschirm im grünen Banner.
Die Funktionen sind nach Modulen gruppiert. Dies umfasst hauptsächlich:

- Das __Inventar__ Ihrer Ressourcen,
- Das __Monitoring der Operationen__,
- Das __Management der IaaS-Ressourcen__ (Computing, Storage, Netzwerk, ...)
- Das __Management der OpenIaaS-Ressourcen__ (Computing, Storage, Netzwerk, ...)
- Der Zugriff auf __zusätzliche Dienste__ (Bastion, Monitoring, ...)
- Die __Verwaltung Ihrer Organisation__ (Management der Tenants, Rechte, ...)

Die Aktivierung eines Moduls für einen Benutzer hängt von dessen Rechten ab. Beispielsweise wird das Modul __'Bestellung'__ nicht verfügbar sein, wenn der Benutzer nicht über das Recht __'ORDER'__ verfügt.

Hier eine Darstellung der verschiedenen verfügbaren Module. Neue Module erweitern die Konsole regelmäßig :

![](images/shiva_onboard_007.png)

- __Dashboard__ : ermöglicht einen schnellen Überblick über die __gesamt genutzten Compute- und Speicherressourcen__, die __Backup-Statistiken__ und eine __Zusammenfassung der Support-Tickets__,
- __Inventar__ : bietet einen Überblick über alle Ihre Ressourcen vom Typ __'Virtuelle Maschinen'__. Wenn __Tags__ verwendet werden, bietet es eine Ansicht nach __Tag__ (z. B. Betriebsansicht, Anwendungsansicht, ...),
- __Managed Services__ : ermöglicht den Zugriff auf das Monitoring Ihrer __Support-Tickets__ und die __Metrologie der Dienste__,
- __IaaS__ : ermöglicht das __Management der VMware IaaS-Infrastrukturen__ (Virtuelle Maschinen, Cluster, Hypervisoren, Replikationen, Backup, ...),
- __OpenIaaS__ : ermöglicht das __Management der Xen Orchestra-Ressourcen__ (Virtuelle Maschinen, Backup, ...),
- __OpenShift__ : ermöglicht das Management Ihrer **RedHat Openshift PaaS-Architektur** und das Management Ihrer Container in den drei Verfügbarkeitszonen der Plattform.
- __Bastion__ : Ermöglicht die Bereitstellung und Verwaltung von SSH/RDP Bastion-Appliances in Ihren Netzwerken,
- __Netzwerk__ : ermöglicht das Management der __Netzwerke der Ebene 2 und 3__, der __öffentlichen IP-Adressen__ und Ihrer __Telekommunikationsverbindungen__,
- __Colocation__ : bietet eine Übersicht über die in der __geteilten oder dedizierten Co-Location-Zone__ befindlichen Ausrüstungen,
- __Bestellung__ : ermöglicht das Bestellen von Ressourcen und das Monitoring der Bereitstellungen,
- __Verwaltung__ : fasst die Verwaltungsfunktionen der Benutzer und Tenants sowie den Zugriff auf das globale Logging zusammen.

## Zugriff auf Benutzerfunktionen über die API

Der Zugriff auf alle Funktionen der Shiva-Konsole ist über die Shiva-API möglich. Detaillierte Informationen zu den Verben und Konfigurationen finden Sie unter __'Profil'__ und __'APIs'__ :

![](images/shiva_onboard_008.png)

## Terraform Provider

Cloud Temple stellt Ihnen einen Terraform Provider zur Verfügung, um Ihre Cloud-Plattform *"as code"* zu verwalten. Er ist hier verfügbar:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest