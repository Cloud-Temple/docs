---
title: Ressourcen bereitstellen
---
import shivaOrdersList from './images/shiva_orders_list.png'
import shivaOrderNotif_001 from './images/shiva_order_notif_001.png'
import shivaOrderStatus from './images/shiva_order_status.png'
import shivaOrderAz_01 from './images/shiva_order_az_01.png'
import shivaOrderAz_02 from './images/shiva_order_az_02.png'
import shivaOrderAz_03 from './images/shiva_order_az_03.png'
import shivaOrderAz_04 from './images/shiva_order_az_04.png'
import shivaOrderAz_05 from './images/shiva_order_az_05.png'
import shivaOrderAz_06 from './images/shiva_order_az_06.png'
import shivaOrderAz_07 from './images/shiva_order_az_07.png'
import shivaOrderAz_08 from './images/shiva_order_az_08.png'
import shivaOrderClucalc_01 from './images/shiva_order_clucalc_01.png'
import shivaOrderClucalc_02 from './images/shiva_order_clucalc_02.png'
import shivaOrderClucalc_03 from './images/shiva_order_clucalc_03.png'
import shivaOrderClucalc_04 from './images/shiva_order_clucalc_04.png'
import shivaOrderClucalc_05 from './images/shiva_order_clucalc_05.png'
import shivaOrderClusto_01 from './images/shiva_order_clusto_01.png'
import shivaOrderClusto_02 from './images/shiva_order_clusto_02.png'
import shivaOrderClusto_03 from './images/shiva_order_clusto_03.png'
import shivaOrderClusto_04 from './images/shiva_order_clusto_04.png'
import shivaOrdersIaasSpoolDs from './images/shiva_orders_iaas_spool_ds.png'
import shivaOrdersNet_002 from './images/shiva_orders_net_002.png'
import shivaOrdersNet_003 from './images/shiva_orders_net_003.png'
import shivaOrdersNet_004 from './images/shiva_orders_net_004.png'
import shivaOrdersIaasCpoolEsx from './images/shiva_orders_iaas_cpool_esx.png'
import shivaOrdersIaasCpoolMemory from './images/shiva_orders_iaas_cpool_memory.png'

## Konzept

Die Nachverfolgung der Bereitstellung neuer Ressourcen erfolgt im Menü __'Bestellungen'__, das über das grüne Banner auf der linken Seite des Bildschirms zugänglich ist.

Es ermöglicht die Anzeige der bestellten Cloud-Ressourcen, der in Bereitstellung befindlichen Ressourcen und eventueller Fehler innerhalb eines [Tenants](iam/concepts.md#tenant) Ihrer [Organisation](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Hinweis: Derzeit ist eine globale Ansicht auf Organisationsebene aller in verschiedenen Tenants bereitgestellten Ressourcen noch nicht möglich.__ Dieses Thema wird 2026 durch die Implementierung eines dedizierten Portals für den Auftraggeber (Unterzeichner) und die Verwaltung seiner Organisation behandelt.*

Die Bereitstellung von Ressourcen oder deren Löschung erfolgt in jedem Produkt über die Menüs __'IaaS'__ und __'Netzwerk'__ auf der linken Seite des Bildschirms im grünen Banner.

Es ist auch möglich, Lieferungen direkt auf der Ebene der Benachrichtigungen der Cloud Temple-Konsole zu sehen:

<img src={shivaOrderNotif_001} />

Auf der Bestellseite können Sie den Fortschritt einer Lieferung verfolgen und möglicherweise mit dem Team interagieren, indem Sie Kommentare oder Klarstellungen hinzufügen:

<img src={shivaOrderStatus} />

__Hinweis__: __Es ist nicht möglich, mehrere Bestellungen desselben Ressourcentyps gleichzeitig zu starten. Sie müssen warten, bis die aktuelle Bestellung bearbeitet und abgeschlossen ist, bevor Sie eine neue aufgeben können. Dies gewährleistet eine effiziente und geordnete Ressourcenverwaltung in Ihrer Umgebung.__

## Bestellung einer neuen Verfügbarkeitszone

Es ist möglich, eine neue Verfügbarkeitszone hinzuzufügen, indem Sie auf das Menü "__Bestellung__" zugreifen. Diese Option ermöglicht es Ihnen, Ihre Ressourcen zu erweitern und die Verfügbarkeit und Resilienz Ihrer Anwendungen mit nur wenigen Klicks zu verbessern:

<img src={shivaOrderAz_01} />

Beginnen Sie mit der Auswahl des gewünschten Standorts, indem Sie zunächst die geografische Region und dann die entsprechende Verfügbarkeitszone (AZ) aus den verfügbaren auswählen. Dieser Schritt ermöglicht es Ihnen, die Bereitstellung Ihrer Ressourcen basierend auf Standort und Infrastrukturanforderungen anzupassen:

<img src={shivaOrderAz_02} />

Fahren Sie dann mit der Auswahl des gewünschten Hypervisor-Cluster-Typs fort und wählen Sie denjenigen aus, der den Leistungs- und Verwaltungsanforderungen Ihrer Cloud-Infrastruktur am besten entspricht:

<img src={shivaOrderAz_03} />

Wählen Sie dann die Anzahl der Hypervisoren und die gewünschte Speichermenge aus, um die Ressourcen an die Arbeitslast und die spezifischen Anforderungen Ihrer Cloud-Umgebung anzupassen:

<img src={shivaOrderAz_04} />

Wählen Sie als Nächstes die Anzahl der im Cluster bereitzustellenden Datastores sowie deren Typen aus. Es ist wichtig zu beachten, dass die maximale Anzahl zulässiger Datastores 10 beträgt, wobei mindestens 2 Datastores erforderlich sind. Jeder unterschiedliche Datastore-Typ führt zur Erstellung eines zusätzlichen datastoreClusters. Wenn Sie beispielsweise 2 Datastores vom Typ "live" und 1 Datastore vom Typ "mass" wählen, führt dies zur Bildung von 2 verschiedenen datastoreClusters:

<img src={shivaOrderAz_05} />

Definieren Sie die für die Sicherung benötigte Speichergröße und stellen Sie sicher, dass Sie eine Kapazität einplanen, die Ihrem Produktionsspeicher entspricht. Berücksichtigen Sie eine durchschnittliche Kompressionsrate von 2, um den Backup-Speicherplatz zu optimieren und einen effektiven Schutz Ihrer Daten zu gewährleisten:

<img src={shivaOrderAz_06} />

Wählen Sie die zu verbreitenden Netzwerke entsprechend Ihren Anforderungen aus. Sie haben auch die Möglichkeit, bei Bedarf die Option "Internetzugang" zu aktivieren und die Anzahl der gewünschten IP-Adressen zu definieren, wobei die Auswahl zwischen 1 und maximal 8 liegt:

<img src={shivaOrderAz_07} />

Sie erhalten dann eine Zusammenfassung der ausgewählten Optionen, bevor Sie Ihre Bestellung bestätigen.

<img src={shivaOrderAz_08} />

## Bestellung zusätzlicher Speicherressourcen

Die Logik der Speicherzuweisung im Block-Modus auf Compute-Clustern basiert auf der Technologie __IBM SVC (San Volume Controller)__ und __IBM FlashSystem__. Der Speicher ist in __LUNs von mindestens 500 GiB__ organisiert, die VMware-Hypervisoren als __Datastores__ präsentiert werden, die in __SDRS (Storage Distributed Resource Scheduler) Clustern__ gruppiert sind.

Jeder Datastore erbt eine __Leistungsklasse__, die in IOPS/TB definiert ist (von 500 bis 15.000 IOPS/TB für FLASH oder ohne Garantie für MASS STORAGE). Die IOPS-Beschränkung wird __auf Datastore-Ebene__ angewendet (nicht pro VM), was bedeutet, dass alle virtuellen Maschinen, die sich denselben Datastore teilen, das zugewiesene IOPS-Kontingent teilen.

__Wichtige Punkte__:

- __Mindestgröße__: 500 GiB pro LUN
- __Leistung__: Proportional zum zugewiesenen Volumen (z. B. 2 TB in der Standard-Klasse = maximal 3.000 IOPS)
- __Organisation__: Datastores desselben Typs werden automatisch in Datastore-Clustern gruppiert
- __Verfügbarkeit__: 99,99% monatlich gemessen, einschließlich Wartungsfenster
- __Erforderlicher Speicherplatz__: Planen Sie immer 10% freien Speicherplatz für Backup-Snapshots und das Äquivalent der Summe der VM-RAMs für .VSWP-Dateien ein

### Bereitstellung eines neuen Compute-Clusters

Bestellen Sie einen Hypervisor-Cluster, indem Sie Optionen auswählen, die Ihren Virtualisierungsanforderungen entsprechen. Definieren Sie Schlüsselmerkmale wie die Anzahl der Hypervisoren, den Cluster-Typ, die Speichermenge und die erforderlichen Rechenressourcen:

<img src={shivaOrderClucalc_01} />

Wählen Sie die Verfügbarkeitszone aus:

<img src={shivaOrderClucalc_02} />

Wählen Sie den Typ der Compute-Blade aus:

<img src={shivaOrderClucalc_03} />

Sie haben dann die Möglichkeit, vorhandene Netzwerke auszuwählen und zu verbreiten oder in diesem Schritt direkt neue zu erstellen, je nach den Anforderungen Ihrer Infrastruktur. Beachten Sie, dass die Gesamtzahl der konfigurierbaren Netzwerke auf maximal 20 begrenzt ist:

<img src={shivaOrderClucalc_04} />

Sie erhalten dann eine Zusammenfassung der ausgewählten Optionen, bevor Sie Ihre Bestellung bestätigen, und können dann Ihre laufende Bestellung einsehen:

<img src={shivaOrderClucalc_05} />

### Bereitstellung eines neuen Storage-Clusters

Im Menü "__Bestellung__" bestellen Sie einen __neuen Storage-Cluster__ für Ihre Umgebung, indem Sie Optionen auswählen, die Ihren Anforderungen in Bezug auf Kapazität, Leistung und Redundanz entsprechen. Wählen Sie den Standort aus:

<img src={shivaOrderClusto_01} />

Definieren Sie die Anzahl der im Cluster bereitzustellenden Datastores und deren Typ unter Berücksichtigung folgender Grenzen: Mindestens 2 Datastores und maximal 10 können konfiguriert werden. Wählen Sie Datastore-Typen, die Ihren Anforderungen in Bezug auf Leistung, Kapazität und Nutzung am besten entsprechen, um den Speicher in Ihrer Umgebung zu optimieren:

<img src={shivaOrderClusto_02} />

Wählen Sie den gewünschten Speichertyp aus den verschiedenen verfügbaren Optionen aus:

<img src={shivaOrderClusto_03} />

Sie erhalten dann Zugriff auf eine vollständige Zusammenfassung der von Ihnen ausgewählten Optionen, mit der Sie alle Parameter vor der endgültigen Bestätigung Ihrer Bestellung überprüfen können:

<img src={shivaOrderClusto_04} />

### Bereitstellung eines neuen Datastores in einem VMware SDRS-Cluster

In diesem Beispiel fügen wir Block-Speicher für eine VMware-Infrastruktur hinzu.
Um einen zusätzlichen Datastore zu Ihrem SDRS-Storage-Cluster hinzuzufügen, gehen Sie zum Untermenü __'Infrastruktur'__ und dann zu __'VMware'__.
Wählen Sie dann den VMware-Stack und die Verfügbarkeitszone aus. Gehen Sie dann zum Untermenü __'Speicher'__.

Wählen Sie den SDRS-Cluster aus, der den gewünschten Leistungsmerkmalen entspricht, und klicken Sie auf die Schaltfläche __'Datastore hinzufügen'__, die sich in der Tabelle mit der Liste der Datastores befindet.

<img src={shivaOrdersIaasSpoolDs} />

__Hinweis__:

- *Die minimale LUN-Größe, die auf einem Cluster aktiviert werden kann, beträgt __500 GiB__.*
- *Die Leistung eines Datastores reicht von durchschnittlich 500 iops/TiB bis durchschnittlich 15.000 iops/TiB. __Dies ist eine Software-Drosselung, die auf Ebene der Storage-Controller durchgeführt wird__.*
- *Die Abrechnung des von Ihrer Organisation verbrauchten Festplattenvolumens ist die Summe aller LUNs über alle verwendeten AZs hinweg*.
- *Für dieses Konto sind die Rechte __'order'__ sowie __'compute'__ erforderlich, um diese Aktion durchzuführen.*

### Bestellung neuer Netzwerke

Die auf der Cloud Temple-Infrastruktur verwendete Netzwerktechnologie basiert auf [VPLS](https://de.wikipedia.org/wiki/Virtual_Private_LAN_Service). Sie ermöglicht es Ihnen, von __Layer-2-Netzwerken in Kontinuität zwischen Ihren Verfügbarkeitszonen innerhalb einer Region__ zu profitieren.
Es ist auch möglich, Netzwerke zwischen Ihren Tenants zu teilen und sie in der Hosting-Zone zu beenden.
Grundsätzlich können Sie sich ein Cloud Temple-Netzwerk als 802.1q-VLAN vorstellen, das überall in Ihrem Tenant verfügbar ist.

Netzwerke auf der Cloud Temple-Plattform sind __Layer 2 (VLANs)__, die auf der Technologie __VPLS (Virtual Private LAN Service)__ basieren. Diese Technologie ermöglicht es Ihnen, von __Netzwerkkontinuität zwischen Ihren Verfügbarkeitszonen__ innerhalb einer Region mit garantierter Leistung zu profitieren:

- __Intra-AZ-Latenz__: < 3 ms
- __Inter-AZ-Latenz__: < 5 ms

__Netzwerkflexibilität__:

- Ein Netzwerk kann __zwischen mehreren Clustern__ innerhalb derselben Verfügbarkeitszone geteilt werden
- Ein Netzwerk kann __zwischen mehreren Verfügbarkeitszonen__ innerhalb derselben Region verbreitet werden
- Ein Netzwerk kann __zwischen verschiedenen Tenants__ Ihrer Organisation geteilt werden
- Ein Netzwerk kann __in der Hosting-Zone beendet werden__ für Ihre physische Ausrüstung
- __Grenze__: Maximal 20 konfigurierbare Netzwerke pro Compute-Cluster

Die Bestellung eines neuen Netzwerks und Entscheidungen über die Freigabe zwischen Ihren Tenants erfolgen im Menü __'Netzwerk'__ im grünen Banner auf der linken Seite des Bildschirms. Die Netzwerke werden zunächst erstellt, dann wird eine separate Bestellung zur Verbreitung generiert. Sie können den Fortschritt laufender Bestellungen verfolgen, indem Sie auf die Registerkarte "Bestellung" im Menü zugreifen oder auf die Informationslabels klicken, die Sie zu aktiven oder in Bearbeitung befindlichen Bestellungen weiterleiten.

<img src={shivaOrdersNet_002} />

Es ist auch möglich, bereits vorhandene Netzwerke zu verbreiten oder die beiden Schritte zu trennen, indem Sie zunächst mit der Netzwerkerstellung beginnen und dann die Verbreitung später nach Ihren Bedürfnissen durchführen. Die Verbreitungsoption befindet sich in den Optionen des ausgewählten Netzwerks:

<img src={shivaOrdersNet_003} />

Klicken Sie auf die Option "Verbreiten" für ein bereits vorhandenes Netzwerk und wählen Sie dann das gewünschte Verbreitungsziel aus. Dieser Schritt ermöglicht es Ihnen, den Standort oder die Ressourcen zu definieren, auf die das Netzwerk verbreitet werden soll:

<img src={shivaOrdersNet_004} />

### Deaktivierung eines Netzwerks

Ein Netzwerk kann bei Bedarf auch deaktiviert werden. Diese Option ermöglicht es Ihnen, den Zugriff auf oder die Nutzung des Netzwerks vorübergehend zu pausieren, ohne es dauerhaft zu löschen, und bietet so Flexibilität bei der Verwaltung Ihrer Infrastruktur entsprechend Ihren Anforderungen.

Die Deaktivierungsoption befindet sich in den Optionen des ausgewählten Netzwerks.

## Hinzufügen zusätzlicher Hypervisoren zu einem Compute-Cluster

Ein __Compute-Cluster__ ist eine Gruppierung von VMware ESXi-Hypervisoren, die die folgenden Regeln befolgen müssen:

__Homogenitätsregeln__:

- Alle Hosts in einem Cluster müssen vom __gleichen Blade-Typ__ sein (ECO, STANDARD, ADVANCE, PERFORMANCE usw.)
- Alle Hosts gehören __zum selben Tenant und zur selben Verfügbarkeitszone__
- __Grenze__: Maximal 32 Hypervisoren pro Cluster

__Speicherzuweisung__:

- Jede Blade wird standardmäßig mit __128 GB softwareaktiviertem RAM__ geliefert
- Der gesamte physische Speicher ist auf der Blade vorhanden, wird aber softwareseitig auf Cluster-Ebene gedrosselt
- __Beispiel__: Ein Cluster mit 3 STANDARD v3-Blades = 3 × 128 GB = 384 GB aktiviert (erweiterbar auf 3 × 384 GB = 1.152 GB)
- __Empfehlung__: Überschreiten Sie nicht 85% Speicherverbrauch pro Blade, um den VMware-Kompressionsmechanismus und Ballooning zu vermeiden

__Hochverfügbarkeit__:

- __Empfohlenes Minimum__: 2 Hypervisoren pro Cluster, um vom 99,99% SLA zu profitieren
- Aktivieren Sie die Funktion __VMware HA__ (High Availability) für den automatischen VM-Neustart im Falle eines Host-Ausfalls

Das Hinzufügen von Hypervisoren zu einem Compute-Cluster erfolgt im Menü __'IaaS'__ im grünen Banner auf der linken Seite des Bildschirms.
Im folgenden Beispiel fügen wir Rechenleistung zu einem Hypervisor-Cluster hinzu, der VMware-Technologie verwendet.

Gehen Sie zum Untermenü __'Infrastruktur'__ und dann zu __'VMware'__. Wählen Sie dann den VMware-Stack, die Verfügbarkeitszone und den Compute-Cluster aus.
In diesem Beispiel ist es __'clu001-ucs12'__. Klicken Sie auf die Schaltfläche __'Host hinzufügen'__, die sich in der Tabelle mit der Liste der Hosts oben rechts befindet.

__Hinweis__:

- *__Die Konfiguration eines Clusters muss homogen sein__. Daher ist es nicht erlaubt, Hypervisor-Typen innerhalb eines Clusters zu mischen. Alle Blades müssen vom gleichen Typ sein.*
- *Für dieses Konto sind die Rechte __'order'__ sowie __'compute'__ erforderlich, um diese Aktion durchzuführen.*

<img src={shivaOrdersIaasCpoolEsx} />

## Hinzufügen zusätzlicher Speicherressourcen zu einem Compute-Cluster

Die Speicherzuweisung auf Compute-Clustern funktioniert wie folgt:

__Prinzip der Speicherzuweisung__:

- Alle Compute-Blades werden mit dem __maximalen physischen Speicher__ installiert geliefert
- Eine __Software-Beschränkung__ wird auf VMware-Cluster-Ebene angewendet, um dem abgerechneten RAM zu entsprechen
- Standardmäßig hat jede Blade __128 GB aktivierten Speicher__ innerhalb des Clusters

__Cluster-Dimensionierung__:

- __Minimum__: Anzahl der Hosts × 128 GB Speicher
- __Maximum__: Anzahl der Hosts × physische Speichermenge der Blade

__Beispiel__: Für einen Cluster mit drei Hosts vom Typ `STANDARD v3` (384 GB physisch pro Blade)

- Anfänglich aktivierter Speicher: 3 × 128 GB = 384 GB
- Maximal verfügbarer Speicher: 3 × 384 GB = 1.152 GB

__Wichtige Empfehlungen__:

- Überschreiten Sie nicht __85% durchschnittlichen Speicherverbrauch pro Blade__, um Ballooning und VMware-Kompression zu vermeiden
- Planen Sie Festplattenspeicher für Swap-Dateien (.VSWP) ein, die beim Start jeder VM erstellt werden (Größe = VM-Speicher)

Um RAM zu einem Cluster hinzuzufügen, gehen Sie einfach zur Cluster-Konfiguration (wie beim Hinzufügen eines Compute-Hosts, wie zuvor gesehen) und klicken Sie auf __'Speicher ändern'__.

<img src={shivaOrdersIaasCpoolMemory} />

__Hinweis__:

- *__Maschinen werden mit dem gesamten physischen Speicher geliefert__. Die Freigabe der Speicherressource ist nur eine Software-Aktivierung auf Cluster-Ebene.*
- *Es ist nicht möglich, die Menge des physischen Speichers eines Blade-Typs zu ändern. Berücksichtigen Sie die maximale Kapazität einer Blade beim Erstellen eines Clusters.*
- *Für dieses Konto sind die Rechte __'order'__ sowie __'compute'__ erforderlich, um diese Aktion durchzuführen.*
