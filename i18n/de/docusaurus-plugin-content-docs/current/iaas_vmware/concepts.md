---
title: Concepts
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple ist darauf ausgelegt, den kritischen Bedürfnissen von Kontinuität und Disaster Recovery gerecht zu werden, mit einem besonderen Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungen. Basierend auf Spitzentechnologien garantiert diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine zuverlässige technologische Plattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Berechnung: **CISCO UCS**.
- Speicher: **IBM Spectrum Virtualize**, **IBM FlashSystem** für Blockspeicher.
- Netzwerk: **JUNIPER**.
- Virtualisierung: **VMware**, bietet eine zuverlässige und erprobte Grundlage zur Verwaltung Ihrer Cloud-Umgebungen.
- Backup: **IBM Spectrum Protect Plus**, für die Orchestrierung und Speicherung von Backups.

Diese Architektur basiert auf dem **VersaStack**-Modell, einer Allianz zwischen Cisco und IBM, die eine erweiterte Kompatibilität mit den wichtigsten Softwareherstellern garantiert.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl die IaaS-Lösung von Cloud Temple vollständig durch APIs und einen Terraform-Provider automatisiert ist, bietet sie eine einzigartige Infrastruktur:

- **Dedizierte Ressourcen**: Die Computing-Blades, Speichervolumen und Software-Stacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen Kunden geteilt.
- **Maximale Vorhersehbarkeit**: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf den Speicher und profitieren von einer klaren monatlichen Verbrauchsabrechnung.

Die Plattform ist von [ANSSI](https://www.ssi.gouv.fr/) als **SecNumCloud** qualifiziert, was ein hohes Maß an Automatisierung und Sicherheit gewährleistet.

## Hauptfunktionen

- Dedizierte und bedarfsgerechte Rechenressourcen (CPU, RAM).
- On-Demand-Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Gekreuzte Backups mit konfigurierbarem Aufbewahrungszeitraum.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Shiva-Konsole](../console/console.md) oder im Infrastructure as Code-Modus dank APIs und dem Terraform-Provider.

## Vorteile

| Vorteil            | Beschreibung                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauen | Datenhosting in Frankreich und GDPR-Konformität.                                                                                          |   
| Sicherheit            | Hochsichere Plattform, qualifiziert als **SecNumCloud**, **HDS** (Hosting von Gesundheitsdaten), **ISO 27001** und **ISAE 3402 Typ II**. |  
| Hohe Verfügbarkeit | Plattformverfügbarkeit von 99,99 %, monatlich gemessen, einschließlich Wartungsfenstern.                                        |   
| Resilienz          | Implementierung von Business-Continuity- oder Disaster-Recovery-Plänen je nach Bedarf.                                                               |
| Automatisierung      | Vollständig automatisierte Plattform, die darauf ausgelegt ist, sich in ein digitales Transformationsprogramm zu integrieren.                                        |
| On Demand           | Ressourcen auf Abruf verfügbar.                                                                                                          |













## Berechnung

Die von Cloud Temple bereitgestellten Blades sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple (Firmware, OS-Version usw.) über die Cloud Temple-Konsole verwaltet.

Im Katalog sind mehrere Kategorien von Compute Blades verfügbar, um Ihre Arbeitslasten (Virtualisierung, Containerisierung usw.) zu unterstützen.
Diese weisen unterschiedliche Merkmale und Leistungen auf, um Ihren Anforderungen bestmöglich gerecht zu werden. Der Katalog der Compute Blades wird regelmäßig aktualisiert.

Innerhalb eines Virtualisierungsangebots besteht ein Hypervisor-Cluster ausschließlich aus Blades desselben Typs (es ist nicht möglich, Blades verschiedener Typen innerhalb eines Clusters zu mischen).

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU **(4)**          | SKU für das VMware-Angebot         |
| ---------------------| ------------| ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO Blade v3         | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder ähnlich)  | 20 / 40 Threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD Blade v3    | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder ähnlich)  | 32 / 64 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE Blade v3     | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder ähnlich)    | 48 / 96 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 Blade v3 | 384 GB     | 3.20/3.6 GHz (Xeon E-53I5Y oder ähnlich) | 16 / 32 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 Blade v3 | 768 GB     | 3.00/3.6 GHz (Gold 6354 oder ähnlich)    | 36 / 72 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 Blade v3 | 1536 GB    | 2.60/3.5 GHz (Gold 6348 oder ähnlich)    | 56 / 112 Threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 Blade v3 | 512 GB     | 2.50/4.1 GHz (Intel 6426Y oder ähnlich)  | 32 / 64 Threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Hinweise__:

- __(1)__ Die gelieferte Speicherkapazität ist die physisch auf den Blades verfügbare Menge. Es ist nicht möglich, die physische Speicherkapazität eines Blades zu ändern.

- __(2)__ Mindestbasisfrequenz / Turbofrequenz, ausgedrückt in GHz. Standardmäßig sind die Prozessoren im BIOS für maximale Leistung konfiguriert.

- __(3)__ Die physische Konnektivität ist für Netzwerkzugang und Blockspeicherzugang gemeinsam genutzt, da die CISCO-Plattform konvergiert ist.

- __(4)__ Das tatsächlich verfügbare GPU-Angebot ändert sich ständig. Ab dem 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S GPUs. Standardmäßig wird das Blade PERF4 mit 2 L40S-Karten mit 48 GB RAM geliefert. Kontaktieren Sie bei Bedarf den Support für genauere Informationen.

Die Verfügbarkeit des Compute-Angebots beträgt 99,99 %, monatlich berechnet, einschließlich Wartungsfenster. Die Berechtigung im Falle einer Nichteinhaltung des SLA erfordert die Erstellung eines Incident Tickets. Sie müssen auch mindestens zwei Hosts pro Cluster besitzen und die __High Availability__ (HA)-Funktion aktivieren. Diese Funktion ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen automatisch auf den zweiten Hypervisor neu zu starten. Wenn eine Verfügbarkeitszone nur einen Hypervisor enthält, ist ein automatischer Neustart nicht möglich.













## Netzwerk

Der Netzwerkservice auf der IaaS-Plattform von Cloud Temple basiert auf einer VPLS-Technologie-Infrastruktur, die eine flexible und leistungsfähige Segmentierung bietet, um den Bedürfnissen der Kunden in Bezug auf Konnektivität und Netzwerkisolation gerecht zu werden.

### VLANs der Ebene 2

Die in der IaaS-Lösung bereitgestellten VLANs sind vom Typ **Ebene 2** und bieten vollständige Netzwerkisolation und eine anpassbare Konfiguration je nach Bedarf.

#### Hauptkonzepte:
- **Freigabe zwischen Clustern und Verfügbarkeitszonen (AZ)**: 
  - Die VLANs können zwischen den verschiedenen AZs und den verschiedenen Clustern, die zum selben Tenant gehören, geteilt werden.
- **Propagation zwischen Tenants**: 
  - Die VLANs können zwischen mehreren Tenants, die zu einer Organisation gehören, propagiert werden, um interne Kommunikationswege zu erleichtern.

---

### Netzwerkleistung

Die Netzwerkinfrastruktur garantiert eine geringe Latenz für optimale Leistung:
- **Intra-AZ-Latenz**: Weniger als **3 ms**.
- **Inter-AZ-Latenz**: Weniger als **5 ms**.

---

### Schlüsselpunkte

1. **Flexibilität**: Die VLANs können konfiguriert werden, um sich an Multi-Cluster- und Multi-Tenant-Umgebungen anzupassen.
2. **Hohe Leistung**: Minimale Latenz sorgt für schnelle und effiziente Kommunikation zwischen den Verfügbarkeitszonen.
3. **Isolation und Sicherheit**: Die VLANs der Ebene 2 bieten eine strikte Netzwerkssegmentierung, um Daten und Datenfluss zu schützen.

---













## Blockspeicher

Cloud Temple bietet mehrere Speicherklassen basierend auf [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
und [IBM SVC](https://www.ibm.com/products/san-volume-controller).

Die __IBM SVC__-Technologie ermöglicht es, das geforderte Leistungsniveau für die Umgebungen unserer Kunden zu liefern, dank der großen Menge an eingebettetem Cache-Speicher in den Controllern und der Möglichkeit, alle IOPS eines Servers auf mehrere SANs zu verteilen.

Sie wird auch verwendet, um die Replikation Ihrer Block-Speicher-LUNs zwischen den Verfügbarkeitszonen zu ermöglichen oder Eingriffe auf den Speicherarrays zu erleichtern.

Der Speicher ist hauptsächlich FLASH NVME-Speicher, der für professionelle Arbeitslasten vorgesehen ist.
Die Platten werden von den Speicherarrays in [__'Distributed RAID 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) verwendet.
Le classe de stockage __'Mass Storage'__ propose des disques mécaniques pour les besoins d'archivages dans un contexte d'efficience économique. Plusieurs niveaux de performances sont disponibles :

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *La performance effective pour une classe de stockage étant liée à la volumétrie effectivement commandée, selon la notion "IOPS/To", s'entendant "limite d'IOPS par Tera alloué",*
> *Ainsi, un volume de 0,5To dans la classe de performance 'Standard' aura une limitation d'IOPS plafonnée à 750IOPS,*
> *De même, un volume de 10To dans la classe de performance 'Ultra' aura lui une limitation d'IOPS à hauteur de 150000 IOPS,*
- *La limitation d'IOPS est appliquée au volume, donc à la notion de Datastore pour un environnement VMware,*
- *La disponibilité du stockage est de 99.99% mesuré mensuellement, plage de maintenance incluse,*
- *Il n'y a pas de restriction ou de quota sur la lecture ou l'écriture,*
- *Il n'y a pas de facturation à l'IOPS,*
- *Il n'y a pas d'engagement de performance sur la classe __'Mass Storage'__,*
- *La taille minimale d'une LUN de stockage est de 500Gio,*
- *Lors de l'usage d'un mécanisme de réplication de stockage, les performances doivent être identiques sur les deux zones de disponibilité,*
- *Aucun mécanisme d'optimisation "intelligent" de type compression ou déduplication n'est mis en œuvre : quand vous réservez 10Tio de stockage, vous avez physiquement 10Tio utile de stockage mis en œuvre sur les machines IBM.*
- *Les LUNs de stockage sont dédiés à l'environnement client.*

### Utilisation dans le cadre de l'offre de calcul vmware

Dans le cadre de l'utilisation du stockage en mode bloc sous forme de datastore dans l'offre de calcul VMware de Cloud Temple, **vous devez prendre en compte plusieurs considérations importantes** :

1. **Fichier de swap (.VSWP) lors du démarrage des machines virtuelles** : Lorsqu'une machine virtuelle démarre, elle crée un fichier .VSWP de la taille de sa mémoire sur le disque. Par conséquent, pour pouvoir démarrer vos machines virtuelles, vous devez toujours disposer dans votre datastore d'un espace libre équivalent à la somme des tailles mémoires de vos machines virtuelles. Par exemple, si votre datastore dispose de 1 Tio de stockage bloc et que vous souhaitez démarrer 10 machines virtuelles de 64 Gio de mémoire chacune, 640 Gio d'espace disque seront nécessaires. Sans cet espace, le démarrage des machines sera limité par la capacité disponible pour créer les fichiers de swap.

2. **Espace libre pour les snapshots de sauvegarde** : Le service de sauvegarde utilise des clichés instantanés (snapshots). Vous devez donc toujours avoir suffisamment d'espace libre pour permettre la création d'un instantané lors de la sauvegarde d'une machine virtuelle. La taille de l'instantané dépend du volume d'écriture de la machine virtuelle et du temps nécessaire pour effectuer la sauvegarde. En règle générale, il est recommandé de maintenir au moins 10 % d'espace libre pour cette opération.

3. **Gestion des disques dynamiques** : Soyez prudent avec l'utilisation des disques dynamiques. Si vous ne maîtrisez pas leur croissance, un manque d'espace physique peut entraîner un gel (freeze) de la machine virtuelle dans le meilleur des cas, ou un plantage avec corruption dans le pire des cas. Il est crucial de surveiller attentivement l'espace disponible sur vos datastores lorsque vous utilisez ce type de disque.

Une gestion proactive de l'espace disque est essentielle pour assurer le bon fonctionnement de vos machines virtuelles et la fiabilité des sauvegardes. Assurez-vous de toujours disposer de l'espace nécessaire pour les fichiers de swap, les snapshots et la croissance des disques dynamiques.

## Stockage en mode backup

Le stockage dédié à la sauvegarde de vos machines virtuelles est auto-provisionné par la plateforme dans la limite du quota commandé. 

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Réplication du stockage en mode bloc

#### Principes

Pour permettre la mise œuvre de vos plans de reprise d'activité, lorsqu'il n'est pas possible d'être en situation de continuité d'activité avec des mécanismes applicatifs et que la réplication des machines virtuelles n'est pas adaptée, Cloud Temple propose des __mécanismes de réplication du stockage en mode bloc entre les zones de disponibilité d'une région__.

Ces mécanismes de réplication sont appliqués sur les LUNs de stockage de vos environnements, en complément des sauvegardes. Le choix de l'utilisation d'un mécanisme de réplication sur un environnement __dépend de nombreux facteurs dont sa criticité, la perte de données tolérée ou encore la performance visée__ pour l'application. 

Cloud Temple propose deux types de mécanismes déployés dans une configuration actif/passif : 

- La réplication __asynchrone__ (ou __'Global Mirror'__) : *La fonction __'Global Mirror'__ fournit un processus de copie asynchrone. Lorsqu'un hôte écrit sur le volume primaire, la confirmation de l'achèvement de l'E/S est reçue avant que l'opération d'écriture ne se termine pour la copie sur le volume secondaire. Si une opération de basculement est initiée, l'application doit récupérer et appliquer toutes les mises à jour qui n'ont pas été confirmées sur le volume secondaire. Si les opérations d'E/S sur le volume primaire sont mises en pause pendant une courte période, le volume secondaire peut devenir une correspondance exacte du volume primaire. Cette fonction est comparable à un processus de sauvegarde continue dans lequel les dernières mises à jour sont toujours manquantes. Lorsque vous utilisez Global Mirror à des fins de reprise après sinistre, vous devez réfléchir à la manière dont vous souhaitez gérer ces mises à jour manquantes.*

- La réplication __synchrone__ (ou __'Metro Mirror'__) : *La fonction __'Metro Mirror'__ est un type de copie à distance qui crée une copie synchrone des données d'un volume primaire vers un volume secondaire. Avec des copies synchrones, les applications hôtes écrivent sur le volume primaire, mais ne reçoivent pas de confirmation que l'opération d'écriture est terminée tant que les données ne sont pas écrites sur le volume secondaire. Cela garantit que les deux volumes contiennent des données identiques lorsque l'opération de copie est terminée. Après que l'opération de copie initiale est terminée, la fonction Metro Mirror maintient en permanence une copie entièrement synchronisée des données source sur le site cible. __Depuis le 1° janvier 2024, la fonction 'Metro Mirror' n'est plus commercialisée.__*


On définit alors un site dit "actif" ou "principal" et un site "passif" ou "standby". Le plan de reprise d'activité est activé en cas de sinistre ou dans le cadre d'une demande de test du PRA. Le site passif prend ensuite le relais du site actif.

#### Réplication asynchrone 

Lorsque vos charges de travail nécessitent des temps de reprise d'activité courts et qu'il n'est pas acceptable ou adapté d'utiliser des mécanismes de type réplications applicatives / réplication de machines virtuelles, il est possible de répliquer une LUN de stockage SAN entre deux zones de disponibilité d'une même région. 

Cette offre permet d'obtenir un __RPO de 15Mn__ et un __RTO inférieur à 4H__. Elle permet de repartir beaucoup plus rapidement que la mise en œuvre d'une restauration de sauvegarde.

Dans un volume de stockage en réplication asynchrone (__Global Mirror__), les contrôleurs de virtualisation SAN des deux zones de disponibilité travaillent de concert pour réaliser les opérations d'écritures sur les deux sites. Le site maitre n'attend pas l'acquittement d'écriture du site esclave.

Les étapes d'une opération d'écriture sont les suivantes :

1. Ein Hypervisor möchte __eine Schreiboperation auf einem Global-Mirror-Volume ausführen__: er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der entfernten Zone auf, die Schreiboperation durchzuführen,
3. Der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SAN und führt dann das Schreiben lokal durch,
4. Er gibt dem Hypervisor, der die Anfrage gestellt hat, eine __Bestätigung__,
5. __Die Hypervisoren der entfernten Site greifen nicht direkt auf die Global-Mirror-LUN zu__: Ein Serviceantrag ist erforderlich.

| SLA       | Beschreibung                                                                                                                                     |   
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | Im Falle einer Katastrophe im Haupt-Rechenzentrum entspricht die maximale Menge verlorener Daten maximal den letzten 15 Minuten des Schreibvorgangs|
| RTO < 4H  | Im Falle einer Katastrophe im Haupt-Rechenzentrum ist die Wiederaufnahme des Betriebs innerhalb von 4 Stunden garantiert, je nach Komplexität der Umgebung |
En cas d’activation du PRA, l’équipe de Cloud Temple réalise une opération de présentation de la LUN __'Global Mirror'__ aux hyperviseurs distants pour qu’ils puissent accéder à la donnée. La mise en place de cette solution nécessite donc d'avoir réservé sur le site 'standby' de la ressource de calcul et de la RAM pour reprendre l'activité en cas de sinistre.

L'usage de cette technologie nécessite également le doublement de l'espace disque : il est nécessaire d'avoir exactement le même espace sur le site distant que sur le site local.

L'usage de ce mécanisme peut impacter la performance de l'application à hauteur de 10 %. __Seules les classes de stockage 500 Iops/To, 1500 Iops/To et 3000 Iops/TO sont compatibles.__

| Référence                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STOCKAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *L'offre étant asynchrone, il est possible lors d'un sinistre que certaines opérations disques n'est pas été écrite sur le site distant. Il peut donc y avoir un risque sur la cohérence des données, a mitigé dans l'analyse de risque du plan de reprise d'activité.*
- *La réplication du stockage en mode bloc se fait de façon masquée pour les machines virtuelles et les applications,*
- *À ce titre, il est important de privilégier les scénarios de réplication applicative ou éventuellement de réplication de machine virtuelle,*
- *Le calcul et la mémoire, sur le site de reprise, peuvent être diminués pour optimiser les coûts si une situation dégradée est acceptable pour le métier lors de l'action du plan de reprise d'activité.*

## Virtualisation VMware

L'offre de virtualisation VMware Cloud Temple qualifiée SecNumCloud est basée sur la technologie __VMware Vsphere__.

La plateforme est managées par Cloud Temple de façon automatique (maintien de condition de sécurité, maintien en condition opérationnelle, ...).
Elle est pilotable via l'interface graphique de la console Shiva ou via les APIs associées.

*__Remarque__* : *Pour des raisons de sécurité liées à la qualification SecNumCloud,
__il n'est pas possible pour le commanditaire d'accéder directement à la plateforme de virtualisation VMware__ (aucun accès direct au vCenter notamment).
En effet, la qualification SecNumCloud impose __une totale ségrégation__ entre les interfaces de pilotage des actifs techniques et l'interface du commanditaire (la console Shiva).*

- Les produits misent en oeuvre sont VMware ESXi, VMware Vcenter et VMware Replication.
- *Le réseau de l'offre de virtualisation n'utilise pas la technologie VMware NSX, mais est piloté matériellement par la technologie Juniper et le protocole VPLS.*
- *Le stockage n'utilise pas la technologie VMWare vSan, mais uniquement des SANs IBM en fiber channel 32G.*
- *Aucune forme d'optimisation cachée n'est mise en œuvre (compression, deduplication, ...).*

### Définition d'un cluster de lame de calcul ('Cpool')

Le __'Cpool'__ est un regroupement d'hyperviseur VMware ESXi, également connu sous le nom de *'cluster ESX'*.

Les hôtes présents dans un __'Cpool'__ appartiennent tous __au même tenant et à la même zone de disponibilité__ (AZ). Ils doivent nécessairement avoir la même classe :
__il n'est pas possible de mixer des modèles différents de lame de calcul au sein d'un même cluster__.

Toutes les lames de calcul étant livrées avec le maximum physique de mémoire, une limitation d'utilisation de la RAM est appliquée logiciellement au niveau du cluster pour s'assurer qu'elle correspond à la RAM facturée.

Par défaut, chaque lame dispose de 128 Go de mémoire activée au sein du __'Cpool'__.

Un __'Cpool'__ peut contenir au maximum 32 hyperviseurs. Au-delà de cette limite, il sera nécessaire de créer un deuxième cluster.

Le stockage peut être partagé entre les __'Cpool'__.

### Allocation Mémoire pour un 'Cpool'

La réservation de la RAM est configurable par cluster. Vous pouvez réduire ou augmenter la quantité de la RAM pour qu'elle corresponde à vos besoins à l'échelle du cluster.

__Attention à ne pas dépasser une moyenne de 85 % de consommation mémoire par lame de calcul__.
En effet, la technologie VMware utilisera une méthode d'optimisation de type compression qui peut impacter fortement les performances de vos charges de travail et complexifier le diagnostic.
De même, une trop forte pression mémoire sur vos lames de calcul forcera l'hyperviseur à décharger une partie de sa mémoire sur disque pour répondre aux besoins des machines virtuelles.

Ce cas, appelé __'Ballooning'__ impacte très fortement l'ensemble des performances des machines virtuelles situées sur le stockage (datastore) concerné.
__Le diagnostic est compliqué dans ce contexte__, car votre métrologie constatera des impacts au niveau CPU et non de la mémoire ou du stockage.
Gardez aussi à l'esprit que la première chose que fait l'hyperviseur au démarrage d'une machine virtuelle est de créer __un fichier de swap mémoire__ (.vswap) sur
le disque, de la taille de la mémoire de la machine virtuelle concernée. Il vous faut __en tenir compte sur le dimensionnement de votre stockage__.

Chaque lame de calcul est livré avec 128Go de mémoire activée logiciellement au niveau du __'Cpool'__ mais dispose physiquement de la totalité de la mémoire allouable.

Par exemple, pour un cluster de trois hosts de type ```vmware:standard:v2```, la réservation de la RAM à l'activation du __'Cpool'_ sera de 3 x 128Go = 384 Go de RAM.
Vous pourrez l'étendre au maximum à 3 x 384Go = 1152Go de mémoire.

    Minimum de mémoire d'un 'Cpool' = nombre de host X 128Go de mémoire
    Maximum de mémoire d'un 'Cpool' = nombre de host X la quantitée de mémoire physique de la lame de calcul

### Catalogues de machines virtuelles Cloud Temple

Cloud Temple met à votre disposition un catalogue de `Templates` régulièrement enrichi et mis à jour par nos équipes.
Il comprend à ce jour plusieurs dizaines de `Templates` et images à monter sur vos machines virtuelles.

### Mise a jour des Hyperviseurs
Cloud Temple fournit régulièrement des builds pour les hyperviseurs afin d’assurer l’application des correctifs de sécurité.
Cependant, la mise à jour des hyperviseurs reste sous votre responsabilité, car nous n’avons pas de visibilité sur vos contraintes métier.

Le processus de mise à jour est entièrement automatisé. Pour garantir une continuité de service, un minimum de deux hyperviseurs est requis par cluster pendant la mise à jour. Assurez-vous de disposer des permissions nécessaires pour effectuer ces actions.

### Gestion de l'affinité de vos machines virtuelles

Les __règles d'affinité et d'anti-affinité__ permettent de contrôler l'emplacement des machines virtuelles sur vos hyperviseurs.
Elles peuvent être utilisées pour gérer l'utilisation des ressources de votre __'Cpool'__.
Par exemple, elles peuvent aider à équilibrer la charge de travail entre les serveurs ou à isoler les charges de travail gourmandes en ressources.
Dans un __'Cpool'__ VMware, ces règles sont souvent utilisées pour gérer le comportement des machines virtuelles avec vMotion.
vMotion permet de déplacer des machines virtuelles d'un hôte à un autre sans interruption de service.

Vous pouvez configurer grâce à la gestion des règles :

- __Règles d'Affinité__ : Ces règles assurent que certaines machines virtuelles soient exécutées sur le même hôte physique.
Elles sont utilisées pour améliorer les performances en maintenant les machines virtuelles qui communiquent fréquemment
ensemble sur le même serveur pour réduire la latence réseau. Les règles d'affinité sont utiles dans des scénarios
où la performance est critique, comme dans le cas de bases de données ou d'applications qui nécessitent une communication rapide entre les serveurs.

- __Règles d'Anti-affinité__ : À l'inverse, ces règles garantissent que certaines machines virtuelles ne soient pas exécutées
sur le même hôte physique. Elles sont importantes pour la disponibilité et la résilience, par exemple,
pour éviter que des machines critiques ne soient toutes affectées en cas de défaillance d'un serveur unique.
Les règles d'anti-affinité sont cruciales pour les applications nécessitant une haute disponibilité,
comme dans les environnements de production où la tolérance aux pannes est une priorité.
Par exemple, vous ne souhaitez pas que vos deux Actives Directory soient sur le même hyperviseur.

Lors de la création d'une règle, vous définissez le type de règle (affinité / anti-affinité), le nom de la règle,
son état d'activation (__'Statut'__) et les machines concernées de votre cluster d'hyperviseurs.

*Remarque : les règles affinité/aint-affinité proposées dans la console sont des règles concernant les machines virtuelles entre elles (pas de règles entre hyperviseurs et machines virtuelles).*

### Réplication asynchrone de vos machines virtuelles en environnement VMware

La réplication asynchrone de vos machines virtuelles est un mécanisme qui consiste à pousser au niveau de l'hyperviseur source les opérations d'écriture sur le site standby à intervalle de temps régulier.

Après une copie initiale à chaud de l'ensemble du stockage actif sur le site standby, seules les écritures sont poussées à intervalles réguliers sur le site en sommeil.
Cet intervalle dépend du volume d'écriture (de toutes les heures à toutes les 24 heures).

La réplication des machines virtuelles s'appuie sur le mécanisme de clichés instantanés de l'hyperviseur. À ce titre,
cette solution a les mêmes inconvénients, en particulier la sensibilité au volume d'écritures de la machine virtuelle,
le processus de cliché instantané étant un mécanisme récursif pour la clôture du cliché instantané.

L'exemple typique de machine qui ne supporte pas le mécanisme de réplication des machines virtuelles est un
serveur FTP qui reçoit les flux temps réels de caméras de surveillance. __Die Maschine verbringt ihre Zeit mit Schreiben und wird 
nicht in der Lage sein, einen Snapshot abzuschließen, ohne das Betriebssystem für eine signifikante Zeitspanne zu pausieren
(mehrere Dutzende von Minuten)__. Wenn der Hypervisor es nicht schafft, den Snapshot abzuschließen, wird er genau das tun,
ohne Eingriffsmöglichkeit, außer die virtuelle Maschine zu beschädigen.

| SLA             | Beschreibung                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO von 1H bis 24H | Im Falle einer Katastrophe im Hauptrechenzentrum ist die maximale Datenmenge, die verloren gehen kann, die der letzten Schreibaktivität auf der Standby-Website. |
| RTO  < 15min     | Startvorgang der gestoppten virtuellen Maschine auf der entfernten Seite                                                                                |


Im Bedarfsfall oder im Falle eines Fehlers an einer Maschine im Hauptstandort, wird die Spiegelmaschine auf der Standby-Website aktiviert. 
Die Wiederaufnahme der Aktivität erfordert die Reservierung von Rechen- und RAM-Ressourcen im Standby-Modus. Es 
ist notwendig, auf der passiven Site den gleichen Speicherplatz wie auf der aktiven Site zu haben.


| Referenz                         | Einheit | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - VMware-Replikation zwischen AZ | 1 VM  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Hinweis__ : Die Berechnung des minimalen RPO muss basierend auf der Änderungsrate der virtuellen Maschine festgelegt werden.*













## Sicherung von virtuellen Maschinen
Cloud Temple bietet __eine native und nicht deaktivierbare Kreuzsicherungsarchitektur__ (sie ist in der französischen Secnumcloud-Qualifikation obligatorisch).

Die Backups werden in einer Verfügbarkeitszone und in einem anderen physischen Rechenzentrum als das virtuelle Maschinenhosting gespeichert.

Dies ermöglicht den Schutz im Falle eines schwerwiegenden Fehlers im Produktionsrechenzentrum und die Wiederherstellung in einem sekundären Rechenzentrum (z. B. bei einem Brand).

Diese Lösung umfasst:

- Das Offsite-Hot-Backup aller Festplatten,
- Die Präsentation und das sofortige Starten einer virtuellen Maschine aus der Massenspeicher-Infrastruktur und das Hot-Reloading auf die Produktions-SANs,
- Die teilweise Wiederherstellung von Dateien aus dem Backup,
- Eine begrenzte Aufbewahrung, die nur durch die Zuweisung von Massenspeicherplatz eingeschränkt wird.

Diese Backup-Infrastruktur basiert auf der Lösung *IBM Spectrum Protect Plus*, einer agentenlosen, einfach zu bedienenden Lösung,
die die Automatisierung von Backup-Prozessen sowie eine Optimierung des Massenspeicherplatzes ermöglicht.

Die Backup- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab.
Die Backup-Richtlinie ist über die [Cloud Temple-Konsole](../console/console.md) für jede virtuelle Maschine konfigurierbar.

*__Hinweis :__*

*__Bestimmte virtuelle Maschinen sind mit dieser Sicherungstechnologie nicht kompatibel__, die die Snapshot-Mechanismen des Hypervisors nutzt.
Dies betrifft typischerweise Maschinen mit konstanten Festplatten-Schreiblasten. Der Hypervisor kann den Snapshot nicht schließen, was 
ein Einfrieren der virtuellen Maschine erforderlich macht, um den Abschluss der Operation zu ermöglichen. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht abbrechbar.*

*Die Lösung besteht dann darin, die Festplatte, die Ziel ständiger Schreibvorgänge ist, auszuschließen und die Daten auf andere Weise zu sichern.*

| Referenz                                               | Einheit | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| SICHERUNG - Zugriff auf den Service IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Erstellen einer Backup-Richtlinie
Um eine neue Backup-Richtlinie hinzuzufügen, müssen Sie eine Anfrage beim Support stellen. Der Support ist über das Rettungsring-Symbol oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Backup-Richtlinie erfolgt durch __eine Serviceanfrage__, die Folgendes angibt:

    Den Namen Ihrer Organisation
    Den Namen eines Ansprechpartners mit seiner E-Mail und Telefonnummer zur endgültigen Konfiguration
    Den Namen des Mandanten
    Den Namen der Backup-Richtlinie
    Die Merkmale (x Tage, y Wochen, z Monate, ...)