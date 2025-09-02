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

Die Verfolgung der Bereitstellung neuer Ressourcen erfolgt im Menü __'Bestellungen'__, das in der grünen Seitenleiste auf der linken Seite des Bildschirms zugänglich ist.

Es ermöglicht Ihnen, bestellte Cloud-Ressourcen, solche in der Bereitstellung und eventuelle Fehler innerhalb eines [Tenants](iam/concepts.md#tenant) Ihrer [Organisation](iam/concepts.md#organisationen) zu sehen.

<img src={shivaOrdersList} />

*__Hinweis: Derzeit ist eine globale Ansicht auf Organisationsebene aller in verschiedenen Tenants bereitgestellten Ressourcen noch nicht möglich.__ Dieses Thema wird 2024 durch die Implementierung eines speziellen Portals für den Auftraggeber (im Sinne eines Unterzeichners) und die Verwaltung seiner Organisation behandelt werden.*

Die Bereitstellung oder Entfernung von Ressourcen erfolgt in jedem Produkt in den Menüs __'IaaS'__ und __'Netzwerk'__ auf der linken Seite des Bildschirms in der grünen Seitenleiste.

Es ist auch möglich, Lieferungen direkt in den Benachrichtigungen der Cloud Temple-Konsole zu sehen:

<img src={shivaOrderNotif_001} />

Von der Bestellungsseite aus können Sie den Fortschritt einer Lieferung sehen und gegebenenfalls mit dem Team kommunizieren, indem Sie Kommentare oder Präzisierungen hinzufügen:

<img src={shivaOrderStatus} />

__Hinweis__: __Es ist nicht möglich, mehrere Bestellungen desselben Ressourcentyps gleichzeitig zu starten. Sie müssen daher warten, bis die aktuelle Bestellung bearbeitet und abgeschlossen ist, bevor Sie eine neue aufgeben können. Dies gewährleistet eine effiziente und geordnete Verwaltung der Ressourcen in Ihrer Umgebung.__

## Bestellung einer neuen Verfügbarkeitszone

Es ist möglich, eine neue Verfügbarkeitszone hinzuzufügen, indem Sie auf das Menü "__Bestellung__" zugreifen. Diese Option ermöglicht es Ihnen, Ihre Ressourcen zu erweitern und die Verfügbarkeit und Widerstandsfähigkeit Ihrer Anwendungen mit nur wenigen Klicks zu verbessern:

<img src={shivaOrderAz_01} />

Beginnen Sie mit der Auswahl des gewünschten Standorts, indem Sie zuerst die geografische Region und dann die entsprechende Verfügbarkeitszone (AZ) aus den verfügbaren auswählen. Dieser Schritt ermöglicht es Ihnen, die Bereitstellung Ihrer Ressourcen an den Standort und die Anforderungen Ihrer Infrastruktur anzupassen:

<img src={shivaOrderAz_02} />

Fahren Sie dann mit der Auswahl des gewünschten Hypervisor-Cluster-Typs fort, indem Sie denjenigen wählen, der Ihren Leistungs- und Verwaltungsanforderungen für Ihre Cloud-Infrastruktur am besten entspricht:

<img src={shivaOrderAz_03} />

Wählen Sie die Anzahl der Hypervisoren sowie die gewünschte Speichermenge, um die Ressourcen an die Arbeitslast und die spezifischen Anforderungen Ihrer Cloud-Umgebung anzupassen:

<img src={shivaOrderAz_04} />

Wählen Sie die Anzahl der im Cluster bereitzustellenden Datastores und deren Typen. Es ist wichtig zu beachten, dass die maximale Anzahl der autorisierten Datastores 10 beträgt, wobei mindestens 2 erforderlich sind. Jeder unterschiedliche Datastore-Typ führt zur Erstellung eines zusätzlichen DatastoreClusters. Wenn Sie beispielsweise 2 Datastores vom Typ "live" und 1 Datastore vom Typ "mass" wählen, führt dies zur Bildung von 2 verschiedenen DatastoreClustern:

<img src={shivaOrderAz_05} />

Definieren Sie die für die Sicherung notwendige Speichergröße, wobei Sie darauf achten sollten, eine Kapazität zu planen, die Ihrem Produktionsspeicher entspricht. Berücksichtigen Sie eine durchschnittliche Kompressionsrate von 2, um den Sicherungsspeicherplatz zu optimieren und einen effektiven Datenschutz zu gewährleisten:

<img src={shivaOrderAz_06} />

Wählen Sie die zu propagierenden Netzwerke entsprechend Ihren Bedürfnissen. Sie haben auch die Möglichkeit, bei Bedarf die Option "Internetzugang" zu aktivieren, indem Sie die gewünschte Anzahl von IP-Adressen definieren, wobei die Wahl zwischen 1 und maximal 8 liegt:

<img src={shivaOrderAz_07} />

Sie erhalten dann eine Zusammenfassung der ausgewählten Optionen, bevor Sie Ihre Bestellung bestätigen.

<img src={shivaOrderAz_08} />

## Bestellung zusätzlicher Speicherressourcen

Die Logik der Speicherzuweisung im Blockmodus auf Berechnungsclustern ist TODO

### Bereitstellung eines neuen Berechnungsclusters

Bestellen Sie einen Hypervisor-Cluster, indem Sie die Optionen auswählen, die Ihren Virtualisierungsanforderungen entsprechen. Definieren Sie Schlüsselmerkmale wie die Anzahl der Hypervisoren, den Cluster-Typ, die Speichermenge und die erforderlichen Rechenressourcen:

<img src={shivaOrderClucalc_01} />

Wählen Sie die Verfügbarkeitszone:

<img src={shivaOrderClucalc_02} />

Wählen Sie den Typ der Recheneinheit:

<img src={shivaOrderClucalc_03} />

Sie haben dann die Möglichkeit, bestehende Netzwerke auszuwählen und zu propagieren oder direkt in dieser Phase neue zu erstellen, je nach den Bedürfnissen Ihrer Infrastruktur. Beachten Sie, dass die Gesamtzahl der konfigurierbaren Netzwerke auf maximal 20 begrenzt ist:

<img src={shivaOrderClucalc_04} />

Sie erhalten dann eine Zusammenfassung der ausgewählten Optionen, bevor Sie Ihre Bestellung bestätigen, und können dann Ihre laufende Bestellung visualisieren:

<img src={shivaOrderClucalc_05} />

### Bereitstellung eines neuen Speicherclusters

Bestellen Sie im Menü "__Bestellung__" einen __neuen Speichercluster__ für Ihre Umgebung, indem Sie Optionen auswählen, die Ihren Anforderungen an Kapazität, Leistung und Redundanz entsprechen. Wählen Sie den Standort:

<img src={shivaOrderClusto_01} />

Definieren Sie die Anzahl der im Cluster bereitzustellenden Datastores und deren Typ, wobei folgende Grenzen zu beachten sind: Es können mindestens 2 und höchstens 10 Datastores konfiguriert werden. Wählen Sie die Datastore-Typen, die Ihren Anforderungen an Leistung, Kapazität und Nutzung am besten entsprechen, um den Speicher in Ihrer Umgebung zu optimieren:

<img src={shivaOrderClusto_02} />

Wählen Sie den gewünschten Speichertyp aus den verschiedenen verfügbaren Optionen:

<img src={shivaOrderClusto_03} />

Sie erhalten dann eine vollständige Zusammenfassung der von Ihnen ausgewählten Optionen, die es Ihnen ermöglicht, alle Parameter zu überprüfen, bevor Sie Ihre Bestellung endgültig bestätigen:

<img src={shivaOrderClusto_04} />

### Bereitstellung eines neuen Datastores in einem VMware SDRS-Cluster

In diesem Beispiel werden wir Blockspeicher für eine VMware-Infrastruktur hinzufügen.
Um einen zusätzlichen Datastore in Ihrem SDRS-Speichercluster hinzuzufügen, gehen Sie zum Untermenü __'Infrastruktur'__ und dann zu __'VMWare'__.
Wählen Sie dann den VMware-Stack und die Verfügbarkeitszone. Gehen Sie anschließend zum Untermenü __'Speicher'__.

Wählen Sie den SDRS-Cluster, der den gewünschten Leistungsmerkmalen entspricht, und klicken Sie auf die Schaltfläche __'Datastore hinzufügen'__, die sich in der Tabelle mit der Liste der Datastores befindet.

<img src={shivaOrdersIaasSpoolDs} />

__Hinweis__:

- *Die Größe der kleinsten aktivierbaren LUN auf einem Cluster beträgt __500 GiB__.*
- *Die Leistung eines Datastores reicht von durchschnittlich 500 IOPS/TiB bis zu durchschnittlich 15000 IOPS/TiB. __Dies ist eine Software-Drosselung, die auf der Ebene der Speichercontroller durchgeführt wird__.*
- *Die Volumenabrechnung des von Ihrer Organisation verbrauchten Speichers ist die Summe aller LUNs über alle verwendeten AZs hinweg*.
- *Die Rechte __'order'__ sowie __'compute'__ sind für das Konto notwendig, um diese Aktion durchzuführen.*

### Bestellung neuer Netzwerke

Die auf der Cloud Temple-Infrastruktur verwendete Netzwerktechnologie basiert auf [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Sie ermöglicht es Ihnen, von __Schicht-2-Netzwerkkontinuität zwischen Ihren Verfügbarkeitszonen innerhalb einer Region__ zu profitieren.
Es ist auch möglich, Netzwerke zwischen Ihren Tenants zu teilen und sie in der Hosting-Zone zu beenden.
Im Grunde können Sie sich ein Cloud Temple-Netzwerk als ein 802.1q-VLAN vorstellen, das an jedem Punkt Ihres Tenants verfügbar ist.

TODO

Die Bestellung eines neuen Netzwerks und die Entscheidungen zur Freigabe zwischen Ihren Tenants werden im Menü __'Netzwerk'__ in der grünen Seitenleiste auf der linken Seite des Bildschirms getroffen. Die Netzwerke werden zuerst erstellt, dann wird eine separate Bestellung generiert, um sie zu propagieren. Sie können den Fortschritt laufender Bestellungen verfolgen, indem Sie auf die Registerkarte "Bestellung" im Menü zugreifen oder auf die Informationslabels klicken, die Sie zu aktiven oder in Bearbeitung befindlichen Bestellungen weiterleiten.

<img src={shivaOrdersNet_002} />

Es ist auch möglich, bereits bestehende Netzwerke zu propagieren oder die beiden Schritte zu trennen, indem Sie mit der Erstellung des Netzwerks beginnen und dann später je nach Bedarf mit der Propagierung fortfahren. Die Propagierungsoption befindet sich in den Optionen des ausgewählten Netzwerks:

<img src={shivaOrdersNet_003} />

Klicken Sie auf die Option "Propagieren" für ein bestehendes Netzwerk und wählen Sie dann das gewünschte Propagierungsziel. Dieser Schritt ermöglicht es Ihnen, den Ort oder die Ressourcen zu definieren, auf die das Netzwerk propagiert werden soll:

<img src={shivaOrdersNet_004} />

### Deaktivierung eines Netzwerks

Ein Netzwerk kann bei Bedarf auch deaktiviert werden. Diese Option ermöglicht es Ihnen, den Zugriff oder die Nutzung des Netzwerks vorübergehend zu pausieren, ohne es dauerhaft zu löschen, und bietet so Flexibilität bei der Verwaltung Ihrer Infrastruktur entsprechend Ihren Bedürfnissen.

Die Deaktivierungsoption befindet sich in den Optionen des ausgewählten Netzwerks.

## Hinzufügen zusätzlicher Hypervisoren zu einem Berechnungscluster

Die Betriebslogik für Berechnungscluster ist TODO

Das Hinzufügen von Hypervisoren zu einem Berechnungscluster erfolgt im Menü __'IaaS'__ in der grünen Seitenleiste auf der linken Seite des Bildschirms.
Im folgenden Beispiel werden wir einem Hypervisor-Cluster, der die VMware-Technologie verwendet, Rechenleistung hinzufügen.

Gehen Sie zum Untermenü __'Infrastruktur'__ und dann zu __'VMware'__. Wählen Sie dann den VMware-Stack, die Verfügbarkeitszone und den Berechnungscluster.
In diesem Beispiel handelt es sich um den __'clu001-ucs12'__. Klicken Sie auf die Schaltfläche __'Host hinzufügen'__, die sich in der Tabelle mit der Hostliste oben rechts befindet.

__Hinweis__:

- *__Die Konfiguration eines Clusters muss homogen sein__. Es ist daher nicht erlaubt, Hypervisor-Typen innerhalb eines Clusters zu mischen. Alle Blades müssen vom gleichen Typ sein.*
- *Die Rechte __'order'__ sowie __'compute'__ sind für das Konto notwendig, um diese Aktion durchzuführen.*

<img src={shivaOrdersIaasCpoolEsx} />

## Hinzufügen zusätzlicher Speicherressourcen zu einem Berechnungscluster

Die Logik der Speicherzuweisung auf Berechnungsclustern ist TODO

Um einem Cluster Arbeitsspeicher hinzuzufügen, gehen Sie einfach zur Cluster-Konfiguration (wie beim Hinzufügen eines Rechenhosts, wie zuvor gesehen) und klicken Sie auf __'Speicher ändern'__.

<img src={shivaOrdersIaasCpoolMemory} />

__Hinweis__:

- *__Maschinen werden mit dem gesamten physischen Speicher geliefert__. Die Freischaltung der Speicherressource ist nur eine Software-Aktivierung auf Cluster-Ebene.*
- *Es ist nicht möglich, die Menge des physischen Speichers eines Blade-Typs zu ändern. Berücksichtigen Sie die maximale Kapazität eines Blades bei der Erstellung eines Clusters.*
- *Die Rechte __'order'__ sowie __'compute'__ sind für das Konto notwendig, um diese Aktion durchzuführen.*
