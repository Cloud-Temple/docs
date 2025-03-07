---
title: Bereitstellung von Ressourcen
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

Der Verlauf der Bereitstellung neuer Ressourcen wird im Menü __'Aufträge'__, das über die grüne Leiste links auf dem Bildschirm zugänglich ist, verfolgt.

Es ermöglicht die Visualisierung der bestellten Cloud-Ressourcen, derjenigen, die sich in der Bereitstellung befinden, und eventueller Fehler innerhalb eines [Tenants](iam/concepts.md#tenant) Ihrer [Organisation](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Hinweis: Derzeit ist keine globale Ansicht aller in den verschiedenen Mandanten bereitgestellten Ressourcen auf Organisationsebene möglich.__ Dieses Thema wird 2024 durch die Implementierung eines speziellen Portals für den Auftraggeber (im Sinne des Unterzeichners) und die Verwaltung seiner Organisation behandelt.*

Die Bereitstellung oder Entfernung von Ressourcen erfolgt in den einzelnen Produkten in den Menüs __'IaaS'__ und __'Netzwerk'__ links auf dem Bildschirm in der grünen Leiste.

Es ist auch möglich, die Lieferungen direkt über die Benachrichtigungen der Cloud Temple Konsole zu sehen:

<img src={shivaOrderNotif_001} />

Von der Auftragsseite aus können Sie den Fortschritt einer Lieferung einsehen und gegebenenfalls mit dem Team kommunizieren, indem Sie Kommentare oder Präzisierungen hinzufügen:

<img src={shivaOrderStatus} />

**Hinweis**: **Es ist nicht möglich, mehrere Aufträge desselben Ressourcentyps gleichzeitig zu starten. Sie müssen daher warten, bis der laufende Auftrag bearbeitet und abgeschlossen ist, bevor Sie einen neuen Auftrag ausführen können. Dies gewährleistet eine effiziente und geordnete Verwaltung der Ressourcen in Ihrer Umgebung.**

## Eine neue Verfügbarkeitszone bestellen

Es ist möglich, eine neue Verfügbarkeitszone hinzuzufügen, indem Sie auf das Menü "**Auftrag**" zugreifen. Diese Option ermöglicht es Ihnen, Ihre Ressourcen zu erweitern und die Verfügbarkeit und Ausfallsicherheit Ihrer Anwendungen mit nur wenigen Klicks zu verbessern:

<img src={shivaOrderAz_01} />

Beginnen Sie damit, den gewünschten Standort auszuwählen, indem Sie zuerst die geografische Region und dann die entsprechende Verfügbarkeitszone (AZ) aus den verfügbaren Optionen auswählen. Dieser Schritt ermöglicht es, die Bereitstellung Ihrer Ressourcen an den Standort und die Anforderungen Ihrer Infrastruktur anzupassen:

<img src={shivaOrderAz_02} />

Fahren Sie dann mit der Auswahl des gewünschten Hypervisor-Cluster-Typs fort, indem Sie denjenigen auswählen, der den Leistungs- und Verwaltungsanforderungen Ihrer Cloud-Infrastruktur am besten entspricht:

<img src={shivaOrderAz_03} />

Wählen Sie anschließend die Anzahl der Hypervisoren sowie die gewünschte Speichermenge aus, um die Ressourcen an die Arbeitslast und die spezifischen Anforderungen Ihrer Cloud-Umgebung anzupassen:

<img src={shivaOrderAz_04} />

Wählen Sie anschließend die Anzahl der im Cluster bereitzustellenden Datastores und deren Typen aus. Es ist wichtig zu beachten, dass die maximal zulässige Anzahl von Datastores 10 beträgt, wobei mindestens 2 Datastores erforderlich sind. Jeder unterschiedliche Datastore-Typ führt zur Erstellung eines zusätzlichen DatastoreClusters. Wenn Sie beispielsweise 2 Datastores des Typs "Live" und 1 Datastore des Typs "Mass" auswählen, werden 2 separate DatastoreClusters erstellt:

<img src={shivaOrderAz_05} />

Definieren Sie die erforderliche Speicherkapazität für das Backup, wobei Sie eine Kapazität vorsehen, die der Ihres Produktionsspeichers entspricht. Berücksichtigen Sie dabei eine durchschnittliche Kompressionsrate von 2, um den Backup-Speicherplatz zu optimieren und den wirksamen Schutz Ihrer Daten sicherzustellen:

<img src={shivaOrderAz_06} />

Wählen Sie die zu propagierenden Netzwerke basierend auf Ihren Anforderungen aus. Sie haben auch die Möglichkeit, die Option "Internetzugang" bei Bedarf zu aktivieren, indem Sie die gewünschte Anzahl an IP-Adressen definieren, wobei eine Auswahl zwischen 1 und maximal 8 zur Verfügung steht:

<img src={shivaOrderAz_07} />

Anschließend erhalten Sie eine Zusammenfassung der ausgewählten Optionen, bevor Sie Ihre Bestellung bestätigen.

<img src={shivaOrderAz_08} />

## Zusätzliche Speicherkapazität bestellen

Die Logik der Speicherzuweisung im Blockmodus auf den Rechenclustern ist TODO

### Ein neues Rechencluster bereitstellen

Führen Sie die Bestellung eines Hypervisor-Clusters durch, indem Sie die Optionen auswählen, die Ihren Virtualisierungsanforderungen entsprechen. Definieren Sie die wichtigsten Merkmale wie die Anzahl der Hypervisoren, den Clustertyp, die Speichermenge sowie die erforderlichen Rechenressourcen:

<img src={shivaOrderClucalc_01} />

Wählen Sie die Verfügbarkeitszone:

<img src={shivaOrderClucalc_02} />

Wählen Sie den Typ der Rechenklinge aus:

<img src={shivaOrderClucalc_03} />

Sie haben anschließend die Möglichkeit, bestehende Netzwerke auszuwählen und zu propagieren oder bei Bedarf direkt in diesem Schritt neue Netzwerke zu erstellen, je nach den Anforderungen Ihrer Infrastruktur. Beachten Sie, dass die Gesamtanzahl der konfigurierbaren Netzwerke auf maximal 20 begrenzt ist:

<img src={shivaOrderClucalc_04} />

Anschließend erhalten Sie eine Zusammenfassung der ausgewählten Optionen, bevor Sie Ihre Bestellung bestätigen, und können Ihren laufenden Auftrag einsehen:

<img src={shivaOrderClucalc_05} />

### Ein neues Speichercluster bereitstellen

Im Menü "**Befehl**" führen Sie die Bestellung eines **neuen Speicherclusters** für Ihre Umgebung durch, indem Sie die Optionen auswählen, die Ihren Anforderungen in Bezug auf Kapazität, Leistung und Redundanz entsprechen. Wählen Sie den Standort:

<img src={shivaOrderClusto_01} />

Definieren Sie die Anzahl der im Cluster bereitzustellenden Datastores und deren Typen, wobei die folgenden Grenzen zu beachten sind: Es müssen mindestens 2 und maximal 10 Datastores konfiguriert werden. Wählen Sie die Typen von Datastores aus, die Ihren Anforderungen in Bezug auf Leistung, Kapazität und Nutzung am besten entsprechen, um den Speicher Ihrer Umgebung zu optimieren:

<img src={shivaOrderClusto_02} />

Wählen Sie den gewünschten Speichertyp aus den verfügbaren Optionen aus:

<img src={shivaOrderClusto_03} />

Anschließend erhalten Sie eine vollständige Zusammenfassung der ausgewählten Optionen, die es Ihnen ermöglicht, alle Parameter zu überprüfen, bevor Sie Ihre Bestellung endgültig bestätigen:

<img src={shivaOrderClusto_04} />

### Ein neues Datastore innerhalb eines VMware SDRS Clusters bereitstellen

In diesem Beispiel werden wir blockbasierten Speicher für eine VMware-Infrastruktur hinzufügen.
Um ein weiteres Datastore in Ihrem SDRS-Speichercluster hinzuzufügen, gehen Sie in das Untermenü __'Infrastruktur'__ und dann __'VMWare'__.
Wählen Sie dann den entsprechenden VMware-Stack und die Verfügbarkeitszone aus. Wechseln Sie anschließend zum Untermenü __'Speicher'__.

Wählen Sie den SDRS-Cluster aus, der den gewünschten Leistungsmerkmalen entspricht, und klicken Sie auf die Schaltfläche __'Ein Datastore hinzufügen'__, die sich in der Tabelle mit der Liste der Datastores befindet.

<img src={shivaOrdersIaasSpoolDs} />

__Hinweis__ :
- *Die Größe der kleinsten LUN, die in einem Cluster aktivierbar ist, beträgt __500 Gio__.*
- *Die Leistung eines Datastores reicht durchschnittlich von 500 iops/Tio bis zu 15000 iops/Tio. __Dies ist eine softwareseitige Drosselung auf Ebene der Speichercontroller.__*
- *Die Festplattengröße, die von Ihrer Organisation verbraucht wird, ist die Summe aller LUNs in allen verwendeten AZs.*
- *Die Berechtigungen __'order'__ sowie __'compute'__ sind für das Konto erforderlich, um diese Aktion durchzuführen.*

### Neue Netzwerke bestellen

Die Netzwerktechnologie, die in der Cloud Temple-Infrastruktur verwendet wird, basiert auf [VPLS](https://de.wikipedia.org/wiki/Virtual_Private_LAN_Service). Sie ermöglicht es Ihnen, von __Layer-2-Netzen, die Ihre Verfügbarkeitszonen innerhalb einer Region durchgängig verbinden, zu profitieren__.
Es ist auch möglich, Netzwerke zwischen Ihren Mandanten zu teilen und sie in einer Hosting-Zone zu beenden.
Grundsätzlich können Sie sich ein Cloud Temple-Netzwerk wie ein 802.1q VLAN vorstellen, das an jedem Punkt Ihres Tenants verfügbar ist.

TODO


Die Bestellung eines neuen Netzwerks und die Entscheidungen über die Freigabe zwischen Ihren Mietern erfolgen im Menü __'Netzwerk'__ in der grünen Leiste links auf dem Bildschirm. Die Netzwerke werden zuerst erstellt, dann wird ein separater Befehl generiert, um sie zu propagieren. Sie können den Fortschritt der aktuellen Befehle verfolgen, indem Sie auf die Registerkarte "Befehl" im Menü zugreifen oder auf die Informationsetiketten klicken, die Sie zu den aktiven oder in Bearbeitung befindlichen Befehlen weiterleiten.

<img src={shivaOrdersNet_002} />

Es ist auch möglich, bereits vorhandene Netzwerke zu propagieren oder die beiden Schritte zu trennen, indem Sie mit der Erstellung des Netzwerks beginnen und später nach Bedarf die Propagierung durchführen. Die Option zur Propagierung finden Sie in den Optionen des ausgewählten Netzwerks:

<img src={shivaOrdersNet_003} />

Klicken Sie auf die Option "Propagieren" für ein bereits vorhandenes Netzwerk und wählen Sie dann das gewünschte Ziel für die Propagierung aus. Dieser Schritt ermöglicht es Ihnen, den Standort oder die Ressourcen festzulegen, auf die das Netzwerk propagiert werden soll:

<img src={shivaOrdersNet_004} />

### Deaktivierung eines Netzwerks

Ein Netzwerk kann bei Bedarf auch deaktiviert werden. Diese Option ermöglicht es Ihnen, den Zugang oder die Nutzung des Netzwerks vorübergehend zu pausieren, ohne es endgültig zu löschen, und bietet somit Flexibilität in der Verwaltung Ihrer Infrastruktur entsprechend Ihren Bedürfnissen.

Die Option zur Deaktivierung finden Sie in den Optionen des ausgewählten Netzwerks.

## Hinzufügen zusätzlicher Hypervisoren zu einem Compute-Cluster

Die Funktionslogik der Compute-Cluster ist TODO

Das Hinzufügen von Hypervisoren zu einem Compute-Cluster erfolgt im Menü __'IaaS'__ in der grünen Leiste links auf dem Bildschirm.
Im folgenden Beispiel werden wir Rechenkapazitäten zu einem Hypervisor-Cluster hinzufügen, der die VMware-Technologie verwendet.

Gehen Sie zum Untermenü __'Infrastruktur'__ und dann zu __'VMWare'__. Wählen Sie dann den VMware-Stack, die Verfügbarkeitszone und den Compute-Cluster aus.
In diesem Beispiel handelt es sich um den __'clu001-ucs12'__. Klicken Sie auf die Schaltfläche __'Host hinzufügen'__, die sich in der Tabelle mit der Liste der Hosts oben rechts befindet.

__Hinweis__:

- *__Die Konfiguration eines Clusters muss homogen sein__. Es ist daher nicht erlaubt, Hypervisortypen innerhalb eines Clusters zu mischen. Alle Blades müssen vom gleichen Typ sein.*
- *Die Rechte __'order'__ sowie __'compute'__ sind erforderlich, damit das Konto diese Aktion durchführen kann.*

<img src={shivaOrdersIaasCpoolEsx} />

## Hinzufügen zusätzlicher Speicherressourcen zu einem Compute-Cluster

Die Logik der Zuweisung von Speicher in Compute-Clustern ist TODO

Um einem Cluster Arbeitsspeicher hinzuzufügen, gehen Sie einfach zur Clusterkonfiguration (wie beim Hinzufügen eines Compute-Hosts, wie zuvor gesehen) und klicken Sie auf __'Speicher ändern'__.

<img src={shivaOrdersIaasCpoolMemory} />

__Hinweis__:
- *__Die Maschinen werden mit dem gesamten physischen Speicher geliefert__. Die Freischaltung der Speicherressource erfolgt lediglich softwareseitig auf Clusterebene.*
- *Es ist nicht möglich, die Menge des physischen Speichers eines Blade-Typs zu ändern. Beachten Sie die maximale Kapazität eines Blades bei der Erstellung eines Clusters.*
- *Die Rechte __'order'__ sowie __'compute'__ sind erforderlich, damit das Konto diese Aktion durchführen kann.*
