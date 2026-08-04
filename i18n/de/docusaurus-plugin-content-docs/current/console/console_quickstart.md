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
import shivaTenant from '@site/docs/console/iam/images/shiva_tenant.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaIpAccessManagement_01 from '@site/docs/console/iam/images/shiva_ip_access_management_01.png'
import shivaOrdersList from '@site/docs/console/images/shiva_orders_list.png'
import shivaOrdersIaasCpoolEsx from '@site/docs/console/images/shiva_orders_iaas_cpool_esx.png'

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

## Administration: Ihre Organisation und Ihre Tenants

Das Modul __Administration__ (unten im grünen Menüband, links) bündelt die Verwaltung Ihrer __Organisation__ und Ihrer __Tenants__: Auswahl des Arbeitsbereichs, Verwaltung der Benutzer und ihrer Berechtigungen, Zugriffsbeschränkung per IP sowie Protokollierung.

- Die __Organisation__ ist Ihre vertragliche Einheit: Sie enthält die Benutzerkonten, den Authentifizierungsmechanismus (lokales Verzeichnis oder Identitätsföderation) und föderiert alle Ihre Tenants.
- Ein __Tenant__ ist eine abgeschottete Gruppierung von Ressourcen innerhalb der Organisation (Produktion, Vorproduktion, pro Anwendung, pro Kritikalität…). Die Ressourcen eines Tenants werden nicht mit den anderen geteilt.

Die Berechtigungen der Benutzer werden __pro Tenant__ definiert: Ein und dasselbe Konto kann beispielsweise auf einem Tenant Ressourcen bestellen und auf einem anderen nur einsehen.

:::info
Diese Seite beschreibt den Ablauf in der Console. Für die ausführliche Referenz — Definitionen, Lebenszyklus, Identitätsföderation und die vollständige Liste der Berechtigungen — siehe das Modul IAM: [Konzepte](iam/concepts.md) und [IAM-Schnellstart](iam/quickstart.md).
:::

### Das Modul Administration auf einen Blick

Das Modul __Administration__ fasst vier Menüs zusammen:

- __Support__: Sehen Sie Ihre Support-Vorgänge für den Tenant ein und verfolgen Sie sie (Berechtigungen `support_read`, `support_write`, `support_management`). Das Erstellen eines Vorgangs wird im Abschnitt „Zugang zum technischen Support" weiter oben beschrieben.
- __Benutzer__: Laden Sie die Konten Ihrer Organisation ein und weisen Sie ihre Berechtigungen pro Tenant zu (Berechtigungen `iam_read`, `iam_write`). Nachstehend im Detail.
- __Logs__: Protokoll der in der Console durchgeführten Lese- und Schreiboperationen zu Nachverfolgbarkeitszwecken (Berechtigung `activity_read`). Im Detail unter „Protokollierung" nachstehend.
- __Zugriff__: Verwalten Sie die Whitelist der öffentlichen IP-Adressen, die auf die Console zugreifen dürfen (Berechtigungen `console_public_access_read`, `console_public_access_write`). Nachstehend im Detail.

### Den Arbeits-Tenant auswählen

Der Tenant-Selektor befindet sich oben links in der Console. Er ermöglicht den Wechsel von einem Bereich zum anderen; qualifizierte Tenants zeigen das Abzeichen __SecNumCloud__ an.

<img src={shivaTenant} />

Die Erstellung eines Tenants erfolgt über eine Serviceanfrage (siehe [Erstellung eines Tenants](iam/quickstart.md#creation-of-a-tenant)). Ein Tenant darf nicht leer sein: Er wird mit mindestens einer Verfügbarkeitszone, einem Compute-Cluster, einem Speicherbereich und einem Netzwerk-VLAN initialisiert.

### Benutzer und ihre Berechtigungen verwalten

Über __Administration > Benutzer__ laden Sie einen Benutzer per E-Mail ein und weisen ihm anschließend seine Berechtigungen __für jeden Tenant__ zu. Standardmäßig besitzt ein Konto keine Berechtigung; die Zuweisung erfordert die Berechtigung `iam_write`.

<img src={shivaOnboard_005} />

Die Berechtigungen sind __einzeln__ (sie überschneiden sich nicht) und __kumulativ__: Eine Aktion kann mehrere Berechtigungen erfordern (zum Beispiel `..._read` __und__ `..._write`). Das vollständige Verfahren und die [vollständige Liste der Berechtigungen](iam/concepts.md#berechtigungen) sind im Modul IAM dokumentiert.

### Zugriff beschränken: zugelassene IPs (Whitelist IP)

Gemäß der SecNumCloud-Qualifikation ist der Zugriff auf die Console auf zuvor deklarierte öffentliche IP-Adressen beschränkt. Über __Administration > Zugriff__ sehen Sie die zugelassenen IPs und Subnets ein und fügen sie hinzu.

<img src={shivaIpAccessManagement_01} />

- Liste einsehen: Berechtigung `console_public_access_read`.
- Adresse hinzufügen: Berechtigung `console_public_access_write`.
- Das __Entfernen__ einer zugelassenen IP erfolgt über eine Support-Anfrage.

### Die Seite Support

Über __Administration > Support__ sehen Sie Ihre dem Tenant zugeordneten __Support-Vorgänge__ ein und verfolgen sie: Beratungsanfragen, kontobezogene Unterstützung, Vorfälle und Anfragen für professionelle Dienstleistungen. Die zugehörigen Berechtigungen sind `support_read` (eigene Vorgänge einsehen), `support_write` (einen Vorgang erstellen) und `support_management` (alle Vorgänge des Tenants einsehen). Das schrittweise Erstellen eines Vorgangs wird im Abschnitt „Zugang zum technischen Support" weiter oben beschrieben.

### Die Produkte eines Tenants erstellen und aktualisieren

Die Produkte und Ressourcen eines Tenants (Compute, Speicher, Netzwerk, Bastion, Colocation…) werden über das Modul __Bestellung__ verwaltet (Berechtigung `order_read` für die Nachverfolgung, `order_write` für die Erstellung). Jede bestellte Ressource wird __einem bestimmten Tenant zugewiesen__ und nicht mit den anderen geteilt.

<img src={shivaOrdersList} />

__Ein Produkt oder eine Ressource erstellen__: Wählen Sie im Modul __Bestellung__ den Ziel-Tenant und dann das zu aktivierende Produkt aus (Verfügbarkeitszone, Compute-Cluster, Speicher-Cluster, Netzwerk…). Die Bestellung wird validiert und dann bereitgestellt; ihr Fortschritt ist in der Bestellliste und im Tenant-Dashboard sichtbar.

__Aktualisieren oder skalieren__: Das Hinzufügen von Kapazität zu einem bestehenden Produkt erfolgt ebenfalls über eine Bestellung — zum Beispiel das Hinzufügen eines Hypervisors oder von Arbeitsspeicher zu einem Compute-Cluster, eines Datastores zu einem Speicher-Cluster oder eines neuen Netzwerks.

<img src={shivaOrdersIaasCpoolEsx} />

Erinnerungen zum Lebenszyklus:

- __Initialisierung__: Ein Tenant darf nicht leer sein; er startet mit mindestens einer Verfügbarkeitszone, einem Compute-Cluster, einem Speicherbereich und einem Netzwerk-VLAN.
- __Weiterentwicklung__: Sie fügen Ressourcen durch neue Bestellungen hinzu oder entfernen sie, und Sie können die Architektur durch Hinzufügen oder Entfernen von Tenants weiterentwickeln.
- __Tenant-übergreifende Netzwerke__: Um die Netzwerkkontinuität zwischen Tenants zu gewährleisten, können „cross tenant"-Netzwerke angefordert werden.
- __Berechtigungen__: Ein Eigentümer des Tenants besitzt automatisch alle Berechtigungen der auf diesem Tenant aktivierten Produkte (siehe unten).

Die Details zu jeder Bestellart (Verfügbarkeitszone, Cluster, Speicher, Netzwerke, Hinzufügen von Hypervisoren oder Arbeitsspeicher…) sind in [Bestellungen](orders.md) dokumentiert; die Definition und die Aktivierungsreferenzen eines Tenants finden Sie unter [Tenant](iam/concepts.md#tenant).

### Eigentümer und Lebenszyklus eines Tenants

Jeder Tenant hat mindestens einen __Eigentümer__, der automatisch alle Berechtigungen der auf diesem Tenant aktivierten Produkte besitzt. Diese Berechtigungen sind nicht änderbar, und die Oberfläche warnt ab mehr als 3 Eigentümern, um das Prinzip der minimalen Rechtevergabe zu fördern. Das Entfernen eines Eigentümers erfolgt über eine Support-Anfrage (siehe [Verwaltung der Eigentümer auf einem Tenant](iam/concepts.md#verwaltung-der-eigentümer-auf-einem-tenant)).

Sie können die Nutzung eines Tenants über den __Verbrauchsbericht__ verfolgen (siehe [Ressourcenverbrauch innerhalb eines Tenants](iam/concepts.md#ressourcenverbrauch-innerhalb-eines-tenants)).

Die Protokollierung der Aktivitäten, die ebenfalls Teil des Moduls __Administration__ ist, wird nachstehend beschrieben.

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