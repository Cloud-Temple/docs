---
title: Ressourcen bereitstellen
---
import shivaOrdersList from '@site/docs/console/images/shiva_orders_list.png'
import shivaOrderNotif_001 from '@site/docs/console/images/shiva_order_notif_001.png'
import shivaOrderStatus from '@site/docs/console/images/shiva_order_status.png'
import shivaOrderAz_01 from '@site/docs/console/images/shiva_order_az_01.png'
import shivaOrderAz_02 from '@site/docs/console/images/shiva_order_az_02.png'
import shivaOrderAz_03 from '@site/docs/console/images/shiva_order_az_03.png'
import shivaOrderAz_04 from '@site/docs/console/images/shiva_order_az_04.png'
import shivaOrderAz_05 from '@site/docs/console/images/shiva_order_az_05.png'
import shivaOrderAz_06 from '@site/docs/console/images/shiva_order_az_06.png'
import shivaOrderAz_07 from '@site/docs/console/images/shiva_order_az_07.png'
import shivaOrderAz_08 from '@site/docs/console/images/shiva_order_az_08.png'
import shivaOrderClucalc_01 from '@site/docs/console/images/shiva_order_clucalc_01.png'
import shivaOrderClucalc_02 from '@site/docs/console/images/shiva_order_clucalc_02.png'
import shivaOrderClucalc_03 from '@site/docs/console/images/shiva_order_clucalc_03.png'
import shivaOrderClucalc_04 from '@site/docs/console/images/shiva_order_clucalc_04.png'
import shivaOrderClucalc_05 from '@site/docs/console/images/shiva_order_clucalc_05.png'
import shivaOrderClusto_01 from '@site/docs/console/images/shiva_order_clusto_01.png'
import shivaOrderClusto_02 from '@site/docs/console/images/shiva_order_clusto_02.png'
import shivaOrderClusto_03 from '@site/docs/console/images/shiva_order_clusto_03.png'
import shivaOrderClusto_04 from '@site/docs/console/images/shiva_order_clusto_04.png'
import shivaOrdersIaasSpoolDs from '@site/docs/console/images/shiva_orders_iaas_spool_ds.png'
import shivaOrdersNet_002 from '@site/docs/console/images/shiva_orders_net_002.png'
import shivaOrdersNet_003 from '@site/docs/console/images/shiva_orders_net_003.png'
import shivaOrdersNet_004 from '@site/docs/console/images/shiva_orders_net_004.png'
import shivaOrdersIaasCpoolEsx from '@site/docs/console/images/shiva_orders_iaas_cpool_esx.png'
import shivaOrdersIaasCpoolMemory from '@site/docs/console/images/shiva_orders_iaas_cpool_memory.png'

## Konzept

Die Nachverfolgung der Bereitstellung neuer Ressourcen erfolgt im Menü __'Bestellungen'__, das im grünen Banner links auf dem Bildschirm verfügbar ist.

Dies ermöglicht die Anzeige der bestellten Cloud-Ressourcen, die sich in der Bereitstellung befinden, sowie eventueller Fehler innerhalb eines [Tenant](iam/concepts.md#tenant) Ihrer [Organisation](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Hinweis: Derzeit ist die globale Ansicht aller innerhalb der verschiedenen Tenants bereitgestellten Ressourcen auf Organisationsebene noch nicht möglich.__ Dieses Thema wird später durch die Implementierung eines Portals für den Auftraggeber (im Sinne des Unterzeichners) und die Steuerung seiner Organisation behandelt.*

Die Bereitstellung von Ressourcen oder deren Löschung erfolgt in jedem Produkt über die Menüs __'IaaS'__ und __'Netzwerk'__ links auf dem Bildschirm im grünen Banner.

Die Bereitstellungen können auch direkt auf Ebene der Benachrichtigungen der Cloud Temple-Konsole eingesehen werden:

<img src={shivaOrderNotif_001} />

Auf der Bestellseite können Sie den Fortschritt einer Bereitstellung einsehen und gegebenenfalls mit dem Team kommunizieren, indem Sie Kommentare oder Präzisierungen hinzufügen:

<img src={shivaOrderStatus} />

__Hinweis__: __Es ist nicht möglich, mehrere Bestellungen desselben Ressourcentyps gleichzeitig zu starten. Sie müssen daher warten, bis die aktuelle Bestellung bearbeitet und abgeschlossen ist, bevor Sie eine neue aufgeben können. Dies gewährleistet ein effizientes und geordnetes Ressourcenmanagement in Ihrer Umgebung.__

## Eine neue Verfügbarkeitszone bestellen

Sie können eine neue Verfügbarkeitszone hinzufügen, indem Sie das Menü „__Bestellung__“ aufrufen. Diese Option ermöglicht es Ihnen, Ihre Ressourcen zu erweitern und die Verfügbarkeit und Resilienz Ihrer Anwendungen mit nur wenigen Klicks zu verbessern:

<img src={shivaOrderAz_01} />

Zunächst wählen Sie den gewünschten Standort, indem Sie zuerst die geografische Region und anschließend die entsprechende Verfügbarkeitszone (AZ) aus den verfügbaren Optionen auswählen. Dieser Schritt ermöglicht es, die Bereitstellung Ihrer Ressourcen an den Standort und die Anforderungen Ihrer Infrastruktur anzupassen:

<img src={shivaOrderAz_02} />

Wählen Sie anschließend den gewünschten Typ des Hypervisor-Clusters aus und entscheiden Sie sich für die Variante, die am besten zu den Leistungs- und Verwaltungsanforderungen Ihrer Cloud-Infrastruktur passt:

<img src={shivaOrderAz_03} />

Legen Sie anschließend die Anzahl der Hypervisor-Instanzen sowie die gewünschte Speichermenge fest, um die Ressourcen an die Workload und die spezifischen Anforderungen Ihrer Cloud-Umgebung anzupassen:

<img src={shivaOrderAz_04} />

Wählen Sie anschließend die Anzahl der im Cluster bereitzustellenden Datastores sowie deren Typen. Bitte beachten Sie, dass maximal 10 Datastores erlaubt sind, wobei mindestens 2 Datastores erforderlich sind. Jeder unterschiedliche Datastore-Typ führt zur Erstellung eines zusätzlichen datastoreClusters. Wenn Sie beispielsweise 2 Datastores vom Typ „live“ und 1 Datastore vom Typ „mass“ auswählen, werden 2 separate datastoreClusters erstellt:

<img src={shivaOrderAz_05} />

Legen Sie die für die Sicherung erforderliche Speicherkapazität fest und stellen Sie sicher, dass eine Kapazität vorgesehen wird, die der Ihres Produktions-Speichers entspricht. Berücksichtigen Sie einen durchschnittlichen Komprimierungsfaktor von 2, um den Sicherungsspeicher zu optimieren und einen effektiven Schutz Ihrer Daten zu gewährleisten:

<img src={shivaOrderAz_06} />

Wählen Sie die zu propagierenden Netzwerke entsprechend Ihren Anforderungen aus. Falls erforderlich, können Sie zudem die Option „Internetzugriff“ aktivieren und dabei die gewünschte Anzahl an IP-Adressen festlegen (Wahl zwischen 1 und maximal 8):

<img src={shivaOrderAz_07} />

Anschließend erhalten Sie eine Zusammenfassung der ausgewählten Optionen, bevor Sie Ihre Bestellung bestätigen.

<img src={shivaOrderAz_08} />

## Zusätzliche Speicherressourcen bestellen

Die Logik der Block-Speicherzuweisung auf den Compute-Clustern basiert auf der __IBM SVC (San Volume Controller)__- und der __IBM FlashSystem__-Technologie. Der Speicher ist in __LUNs mit mindestens 500 GiB__ unterteilt, die je nach verwendeter Technologie wie folgt bereitgestellt werden:

- Für __VMware__: als __Datastores__, die in __SDRS-Clustern (Storage Distributed Resource Scheduler)__ gruppiert sind
- Für __Bare Metal__: als __Volumes__
- Für __Open IaaS__: als __Storage Repository (SR)__

Jeder Datastore erbt eine __Performance-Klasse__, die in IOPS/To definiert ist (de 500 à 15000 IOPS/To pour le FLASH, ou sans garantie pour le MASS STORAGE). Die IOPS-Beschränkung wird __auf Datastore-Ebene__ (et non par VM), was bedeutet, dass sich alle virtuellen Maschinen, die denselben Datastore teilen, das zugewiesene IOPS-Quota teilen.

__Wichtige Punkte__ :

- __Mindestgröße__ : 500 GiB pro LUN
- __Performance__: Proportional zum zugewiesenen Volumen, __bis zu einer absoluten physikalischen Obergrenze pro LUN__ (ex: 2 To en classe Standard = 3000 IOPS, mais une LUN de 10 To plafonnera à 30 000 IOPS maximum). Diese Obergrenze variiert je nach Klasse (10 000 IOPS / 512 Mo/s pour la classe Essentiel, et 30 000 IOPS / 1024 Mo/s pour les classes supérieures).
- __Organisation__: Datastores desselben Typs werden automatisch zu Datastore-Clustern gruppiert
- __Verfügbarkeit__: 99,99 % (monatlich gemessen, inklusive Wartungsfenster)
- __Benötigter Speicherplatz__: Immer 10 % freien Speicherplatz für Backup-Snapshots sowie das Äquivalent der Summe der VM-RAMs für .VSWP-Dateien einplanen

### Einen neuen Compute-Cluster bereitstellen

Bestellen Sie einen Hypervisor-Cluster, indem Sie die Optionen auswählen, die Ihren Virtualisierungsanforderungen entsprechen. Legen Sie die wichtigsten Merkmale fest, wie die Anzahl der Hypervisoren, den Clustertyp, die Speichergröße sowie die erforderlichen Rechenressourcen:

<img src={shivaOrderClucalc_01} />

Wählen Sie die Verfügbarkeitszone:

<img src={shivaOrderClucalc_02} />

Wählen Sie den Typ der Compute-Lame:

<img src={shivaOrderClucalc_03} />

Anschließend haben Sie die Möglichkeit, bereits vorhandene Netzwerke auszuwählen und zu propagieren, oder direkt in diesem Schritt neue zu erstellen, je nach den Anforderungen Ihrer Infrastruktur. Beachten Sie, dass die Gesamtzahl der konfigurierbaren Netzwerke auf maximal 20 begrenzt ist:

<img src={shivaOrderClucalc_04} />

Anschließend erhalten Sie eine Zusammenfassung der ausgewählten Optionen, bevor Sie Ihre Bestellung bestätigen, und können anschließend den Status Ihrer Bestellung einsehen:

<img src={shivaOrderClucalc_05} />

### Einen neuen Storage-Cluster bereitstellen

Im Menü "__commande__" bestellen Sie einen __neuen Storage-Cluster__ für Ihre Umgebung, indem Sie die Optionen auswählen, die Ihren Anforderungen an Kapazität, Leistung und Redundanz entsprechen. Wählen Sie den Standort:

<img src={shivaOrderClusto_01} />

Legen Sie die Anzahl der im Cluster bereitzustellenden Datastores sowie deren Typ fest und beachten Sie dabei die folgenden Grenzen: Es können mindestens 2 und maximal 10 Datastores konfiguriert werden. Wählen Sie die Datastore-Typen, die Ihren Anforderungen an Leistung, Kapazität und Nutzung am besten entsprechen, um die Speicherung in Ihrer Umgebung zu optimieren:

<img src={shivaOrderClusto_02} />

Wählen Sie den gewünschten Speichertyp aus den verfügbaren Optionen aus:

<img src={shivaOrderClusto_03} />

Anschließend gelangen Sie zu einer vollständigen Zusammenfassung der von Ihnen ausgewählten Optionen, mit der Sie alle Parameter überprüfen können, bevor Sie Ihre Bestellung endgültig bestätigen:

<img src={shivaOrderClusto_04} />

### Einen neuen Datastore in einem VMware SDRS-Cluster bereitstellen

In diesem Beispiel fügen wir Block-Speicher für eine VMware-Infrastruktur hinzu.
Um einen zusätzlichen Datastore in Ihrem SDRS-Speichercluster hinzuzufügen, navigieren Sie zum Untermenü __'Infrastructure'__ und dann zu __'VMWare'__.
Wählen Sie anschließend den VMware-Stack und die Verfügbarkeitszone. Navigieren Sie dann zum Untermenü __'Stockage'__.

Wählen Sie den SDRS-Cluster, der den gewünschten Leistungsmerkmalen entspricht, und klicken Sie auf die Schaltfläche __'Ajouter un datastore'__ in der
Tabelle mit der Liste der Datastores.

<img src={shivaOrdersIaasSpoolDs} />

__Hinweis__ :

- *Die Größe der kleinsten aktivierbaren LUN in einem Cluster beträgt __500 GiB__.*
- *Die Leistung eines Datastore reicht von durchschnittlich 500 IOPS/TiB bis zu durchschnittlich 15000 IOPS/TiB. __Dies ist eine softwareseitige Drosselung auf Ebene der Speicherkontroller__, die einem absoluten Hardware-Limit von maximal 30.000 IOPS und 1024 MB/s pro LUN unterliegt.*
- *Die Abrechnung des von Ihrer Organisation verbrauchten Datenvolumens entspricht der Summe aller LUNs in allen verwendeten AZs.*
- *Für das Konto sind die Berechtigungen __'order'__ sowie __'compute'__ erforderlich, um diese Aktion durchzuführen.*

### Neue Netzwerke bestellen

Die in der Cloud-Temple-Infrastruktur verwendete Netzwerktechnologie basiert auf [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Sie ermöglicht Ihnen, __durchgängige Level-2-Netzwerke zwischen Ihren Verfügbarkeitszonen innerhalb einer Region__ zu nutzen.
Es ist auch möglich, Netzwerke zwischen Ihren Mandanten zu teilen und sie in einer Hosting-Zone zu terminieren.
Im Grunde können Sie sich ein Cloud-Temple-Netzwerk als ein 802.1q-VLAN vorstellen, das an jedem Punkt Ihres Mandanten verfügbar ist.

Die Netzwerke auf der Cloud-Temple-Plattform sind auf __Level 2 (VLANs)__ basierend auf der __VPLS-Technologie (Virtual Private LAN Service)__. Diese Technologie ermöglicht Ihnen eine __Netzwerkkontinuität zwischen Ihren Verfügbarkeitszonen__ innerhalb einer Region mit garantierten Leistungsdaten:

- __Intra-AZ-Latenz__ : < 3 ms
- __Inter-AZ-Latenz__ : < 5 ms

__Flexibilität der Netzwerke__ :

- Ein Netzwerk kann __zwischen mehreren Clustern__ derselben Verfügbarkeitszone __geteilt__ werden
- Ein Netzwerk kann __zwischen mehreren Verfügbarkeitszonen__ derselben Region __propagiert__ werden
- Ein Netzwerk kann __zwischen verschiedenen Mandanten__ Ihrer Organisation __geteilt__ werden
- Ein Netzwerk kann __in einer Hosting-Zone terminiert__ werden, um Ihre physischen Geräte anzuschließen
- __Begrenzung__ : Maximal 20 Netzwerke pro Bestellung. Sie können mehrere aufeinanderfolgende Bestellungen durchführen, um diese Anzahl nach Bedarf zu erweitern

Die Bestellung eines neuen Netzwerks und die Freigabeentscheidungen zwischen Ihren Mandanten werden im Menü __'Netzwerk'__ der grünen Leiste links auf dem Bildschirm durchgeführt. Die Netzwerke werden zunächst erstellt, anschließend wird eine separate Bestellung zur Propagierung generiert. Sie können den Fortschritt laufender Bestellungen nachverfolgen, indem Sie auf die Registerkarte „Bestellung“ im Menü zugreifen oder auf die Informationslabels klicken, die Sie zu aktiven oder in Bearbeitung befindlichen Bestellungen weiterleiten.

<img src={shivaOrdersNet_002} />

Es ist auch möglich, bereits vorhandene Netzwerke zu propagieren oder die beiden Schritte zu trennen, indem zunächst das Netzwerk erstellt und die Propagierung später nach Bedarf durchgeführt wird. Die Propagierungsoption befindet sich in den Optionen des ausgewählten Netzwerks:

<img src={shivaOrdersNet_003} />

Klicken Sie für ein bereits vorhandenes Netzwerk auf die Option „Propagieren“ und wählen Sie dann das gewünschte Propagierungsziel aus. Dieser Schritt ermöglicht es Ihnen, den Standort oder die Ressourcen festzulegen, auf die das Netzwerk propagiert werden soll:

<img src={shivaOrdersNet_004} />

### Deaktivierung eines Netzwerks

Ein Netzwerk kann bei Bedarf ebenfalls deaktiviert werden. Diese Option ermöglicht es Ihnen, den Zugriff oder die Nutzung des Netzwerks vorübergehend zu pausieren, ohne es endgültig zu löschen, und bietet so Flexibilität bei der Verwaltung Ihrer Infrastruktur entsprechend Ihren Anforderungen.

Die Deaktivierungsoption befindet sich in den Optionen des ausgewählten Netzwerks. '

## Weitere Hypervisor zu einem Rechencluster hinzufügen

Ein __Rechencluster__ ist eine Gruppe von Hypervisoren, die folgenden Regeln erfüllen müssen:

### Für VMware ESXi-Cluster

__Homogenitätsregeln__ :

- Alle Hosts eines Clusters müssen vom __gleichen Bladentyp__ sein (ECO, STANDARD, ADVANCE, PERFORMANCE, usw.)
- Alle Hosts gehören __zum selben Tenant und zur selben Verfügbarkeitszone__
- __Grenze__ : Maximal 32 Hypervisor pro Cluster

__Speicherzuweisung__ :

- Jeder Blade wird ab Werk mit __der vollständigen aktivierten physischen Speicherkapazität__ ausgeliefert
- __Beispiel__ : Ein Cluster aus 3 STANDARD v3 Blades (jeweils 384 Go physisch) = 3 × 384 Go = 1152 Go verfügbar
- __Empfehlung__ : Die Speichernutzung pro Blade sollte 85 % nicht überschreiten, um den VMware-Komprimierungsmechanismus und Ballooning zu vermeiden

__Hohe Verfügbarkeit__ :

- __Empfohlenes Minimum__ : 2 Hypervisor pro Cluster, um die SLA von 99,99 % zu gewährleisten
- Aktivieren Sie die Funktion __VMware HA__ (High Availability), um VMs im Falle eines Host-Ausfalls automatisch neu zu starten

Das Hinzufügen von Hypervisor zu einem Rechencluster erfolgt im Menü __'IaaS'__ im grünen Bereich links auf dem Bildschirm.
Im folgenden Beispiel fügen wir Rechenleistung zu einem Hypervisor-Cluster hinzu, der die VMware-Technologie verwendet.

Gehen Sie in das Untermenü __'Infrastructure'__ und dann __'VMWare'__. Wählen Sie anschließend den VMware-Stack, die Verfügbarkeitszone und das Rechencluster.
In diesem Beispiel handelt es sich um __'clu001-ucs12'__. Klicken Sie auf die Schaltfläche __'Host hinzufügen'__, die sich oben rechts in der Tabelle mit der Host-Liste befindet.

__Hinweis__ :

- *__Die Konfiguration eines Clusters muss homogen sein__. Daher ist es nicht erlaubt, Hypervisortypen innerhalb eines Clusters zu mischen. Alle Blades müssen vom gleichen Typ sein.*
- *Das Konto benötigt die Berechtigungen __'order'__ sowie __'compute'__, um diese Aktion durchzuführen.*

<img src={shivaOrdersIaasCpoolEsx} />

### Für Open IaaS-Cluster

Für Open IaaS-Cluster gelten ähnliche Regeln hinsichtlich Homogenität und Hochverfügbarkeit. Die Verwaltung der Compute-Ressourcen erfolgt ebenfalls über das Menü __'OpenIaaS'__ mit denselben Anforderungen an die Zugriffsrechte.

## Hinzufügen zusätzlicher Speicherressourcen zu einem Compute-Cluster

Die Speicherallokation auf Compute-Clustern funktioniert wie folgt:

__Prinzip der Speicherallokation__ :

- Alle Compute-Blades werden mit dem __physischen Maximalspeicher__ ausgeliefert
- Auf Cluster-Ebene in VMware wird eine __softwareseitige Begrenzung__ angewendet, um der abgerechneten RAM-Menge zu entsprechen
- Jede Blade verfügt über __den gesamten physischen Speicher__, der im Cluster aktiviert ist

__Dimensionierung pro Cluster__ :

- __Minimum__ : Anzahl der Hosts × 128 GB Speicher
- __Maximum__ : Anzahl der Hosts × physische Speichermenge der Blade

__Beispiel__ : Für ein Cluster aus drei Hosts vom Typ `STANDARD v3` (384 GB physisch pro Blade)

- Verfügbarer Gesamtspeicher: 3 × 384 GB = 1152 GB

__Wichtige Empfehlungen__ :

- Die __durchschnittliche Speichernutzung pro Blade__ sollte __85 %__ nicht überschreiten, um VMware-Ballooning und -Komprimierung zu vermeiden
- Festplattenspeicher für Swap-Dateien (.VSWP) einplanen, die beim Start jeder VM erstellt werden (Größe = Speicher der VM)

Um Arbeitsspeicher zu einem Cluster hinzuzufügen, navigieren Sie zur Cluster-Konfiguration (wie zuvor beim Hinzufügen eines Compute-Hosts beschrieben) und klicken Sie auf __'Speicher ändern'__.

<img src={shivaOrdersIaasCpoolMemory} />

__Hinweis__ :

- *__Die Maschinen werden mit dem gesamten physischen Speicher ausgeliefert__. Die Freischaltung der Speicherressource ist lediglich eine softwareseitige Aktivierung auf Cluster-Ebene.*
- *Die physische Speichermenge eines Bladetyps kann nicht geändert werden. Berücksichtigen Sie bei der Erstellung eines Clusters unbedingt die maximale Kapazität einer Blade.*
- *Das Konto benötigt die Berechtigungen __'order'__ sowie __'compute'__, um diese Aktion durchzuführen.*