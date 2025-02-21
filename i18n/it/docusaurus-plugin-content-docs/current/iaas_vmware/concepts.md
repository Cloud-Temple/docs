---
title: Concepts
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per soddisfare le esigenze critiche di continuità e recupero di attività, con un focus particolare sui settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce una disponibilità massima e prestazioni ottimali per i carichi di lavoro critici.

## Una piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale :

- Calcolo : **CISCO UCS**.
- Archiviazione : **IBM Spectrum Virtualize**, **IBM FlashSystem** per l'archiviazione a blocchi.
- Rete : **JUNIPER**.
- Virtualizzazione : **VMware**, offrendo una base affidabile e comprovata per gestire i vostri ambienti cloud.
- Backup: **IBM Spectrum Protect Plus**, per l'orchestrazione e la gestione dei backup.

Questa architettura si basa sul modello **VersaStack**, un'alleanza tra Cisco e IBM, garantendo un'estesa compatibilità con i principali fornitori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata grazie ad API e un provider Terraform, l'offerta IaaS di Cloud Temple propone un'infrastruttura unica :

- **Risorse dedicate** : Le lame di calcolo, i volumi di archiviazione e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- **Massima prevedibilità** : Potete gestire i tassi di virtualizzazione, la pressione in IOPS sull'archiviazione e beneficiare di una fatturazione chiara, basata sul consumo mensile.

La piattaforma è qualificata **SecNumCloud** dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e on demand.
- Archiviazione on demand (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con retention configurabile.
- Replica asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio            | Descrizione                                                                                                                                  |   
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Affidabilità digitale | Ospitare i dati in Francia e conformità al GDPR.                                                                                             |   
| Sicurezza            | Piattaforma altamente sicura, qualificata **SecNumCloud**, **HDS** (Ospitalità dei Dati Sanitari), **ISO 27001** e **ISAE 3402 tipo II**.     |  
| Alta disponibilità   | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, incluse le finestre di manutenzione.                               |   
| Resilienza           | Implementazione di piani di continuità o di ripartenza dell'attività secondo le necessità.                                                    |
| Automazione          | Piattaforma completamente automatizzata pensata per integrarsi in un programma di trasformazione digitale.                                     |
| On demand            | Risorse disponibili on demand.                                                                                                               |













## Calcolo

Le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__ . Sono completamente gestite da Cloud Temple (firmware, versione dell'OS, ...) attraverso la console Cloud Temple.

Diverse categorie di lame di calcolo sono disponibili nel catalogo per supportare i vostri carichi di lavoro (Virtualizzazione, Contenizzazione, ...).
Queste presentano caratteristiche e prestazioni diverse per rispondere al meglio alle vostre esigenze. Il catalogo delle lame di calcolo evolve regolarmente.

Nel contesto dell'uso con un'offerta di virtualizzazione, un cluster di hypervisor è composto unicamente da lame di calcolo dello stesso tipo (non è possibile mescolare lame di diversi tipi nello stesso cluster).

| Riferimento           | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core/thread      | Connettività __(3)__ | GPU **(4)**             | SKU per l'offerta Vmware        |
|-----------------------|--------------|-------------------------------------------|----------------------------|----------------------|-------------------------|---------------------------------|
| Lame ECO v3           | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread             | 2 X 10 Gbit/s        |                         | csp:fr1:iaas:vmware:eco:v3      |
| Lame STANDARD v3      | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread             | 2 X 25 Gbit/s        |                         | csp:fr1:iaas:vmware:standard:v3 |
| Lame ADVANCE v3       | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread             | 2 X 25 Gbit/s        |                         | csp:fr1:iaas:vmware:advance:v3  |
| Lame PERFORMANCE 1 v3 | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread             | 2 X 25 Gbit/s        |                         | csp:fr1:iaas:vmware:perf1:v3    |
| Lame PERFORMANCE 2 v3 | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread             | 2 X 25 Gbit/s        |                         | csp:fr1:iaas:vmware:perf2:v3    |
| Lame PERFORMANCE 3 v3 | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread            | 2 X 25 Gbit/s        |                         | csp:fr1:iaas:vmware:perf3:v3    |
| Lame PERFORMANCE 4 v3 | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48go    | csp:fr1:iaas:vmware:perf4:v3    |

__Note__:

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ La frequenza di base minima / frequenza turbo, espressa in Ghz. Per impostazione predefinita, i processori sono configurati per massime prestazioni a livello di BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso all'archiviazione a blocchi, la piattaforma CISCO essendo convergente.

- __(4)__ L'offerta GPU disponibile evolve continuamente. Al 1° Maggio 2024, l'offerta si basa sui GPU NVIDIA LOVELACE L40S. Per impostazione predefinita, la lama PERF4 è fornita con 2 schede L40S da 48 GB di RAM ciascuna. Contattate il supporto per maggiori dettagli se necessario.

La disponibilità dell'offerta di calcolo è del 99,99%, calcolata mensilmente, incluse le finestre di manutenzione. L'idoneità in caso di non rispetto del SLA è soggetta alla
creazione di un ticket d'incidente. Dovete anche possedere almeno due host per cluster e attivare la funzionalità __High Availability__ (HA).
Questa funzionalità permette alla vostra architettura di riavviare automaticamente le vostre macchine virtuali sul secondo hypervisor.
Nell'ipotesi che una zona di disponibilità contenga un solo hypervisor, il riavvio automatico non è possibile.













## Rete

Il servizio rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata sulla tecnologia VPLS, offrendo una segmentazione flessibile e performante per rispondere alle esigenze dei clienti in termini di connettività e isolamento di rete.

### VLAN di livello 2

Le VLAN offerte nell'IaaS sono di tipo **livello 2**, offrendo un completo isolamento di rete e una configurazione adattabile secondo le necessità.

#### Principali concetti:
- **Condivisione tra cluster e zone di disponibilità (AZ)**: 
  - Le VLAN possono essere condivise tra le diverse AZ e tra i vari cluster appartenenti allo stesso tenant.
- **Propagazione inter-tenants**: 
  - Le VLAN possono essere propagate tra più tenants appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

---

### Performance di rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali:
- **Latenza intra-AZ**: Inferiore a **3 ms**.
- **Latenza inter-AZ**: Inferiore a **5 ms**.

---

### Punti chiave

1. **Flessibilità**: Le VLAN possono essere configurate per adattarsi agli ambienti multi-cluster e multi-tenant.
2. **Alte prestazioni**: Una latenza minima garantisce comunicazioni rapide ed efficienti tra le zone di disponibilità.
3. **Isolamento e sicurezza**: Le VLAN di livello 2 offrono una segmentazione rigorosa della rete per proteggere i dati e i flussi.

---













## Archiviazione a blocchi

Cloud Temple propone diverse classi di archiviazione basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ permette di fornire il livello di prestazioni richiesto per gli ambienti dei nostri clienti grazie all'ampia
quantità di cache di memoria presente nei controller e alla possibilità di distribuire l'insieme degli IOPS
di un server su più SAN.

È anche utilizzata per permettere la replica dei vostri LUN di archiviazione in modalità blocco tra
le zone di disponibilità o per facilitare gli interventi sulle unità di archiviazione.

L'archiviazione è principalmente di tipo FLASH NVME dedicata ai carichi di lavoro professionali.
I dischi sono utilizzati dalle unità di archiviazione in modalità [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
Le classe di storage __'Mass Storage'__ propone dischi meccanici per le esigenze di archiviazione
in un contesto di efficienza economica. Sono disponibili vari livelli di prestazioni:

| Riferimento                         | Unità | SKU                                          | 
|-------------------------------------|-------|----------------------------------------------|
| FLASH - Essenziale - 500 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To      | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To       | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archiviazione        | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *Le prestazioni effettive per una classe di storage sono legate al volume effettivamente ordinato, secondo il concetto "IOPS/To", inteso come "limite di IOPS per Tera assegnato",* 
> *Così, un volume di 0,5To nella classe di prestazione 'Standard' avrà una limitazione di IOPS fissata a 750IOPS,*
> *Allo stesso modo, un volume di 10To nella classe di prestazione 'Ultra' avrà una limitazione di IOPS fino a 150000 IOPS,*
- *La limitazione di IOPS si applica al volume, quindi al concetto di Datastore per un ambiente VMware,*
- *La disponibilità dello storage è del 99.99% misurata mensilmente, inclusa la finestra di manutenzione,*
- *Non ci sono restrizioni o quote sulla lettura o scrittura,*
- *Non ci sono addebiti per IOPS,*
- *Non c'è garanzia di prestazioni sulla classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di storage è di 500Gio,*
- *Quando si utilizza un meccanismo di replica dello storage, le prestazioni devono essere identiche in entrambe le zone di disponibilità,*
- *Non viene implementato alcun meccanismo di ottimizzazione "intelligente" come la compressione o deduplicazione: quando si riservano 10Tio di storage, si hanno fisicamente 10Tio utili di storage implementati sulle macchine IBM.*
- *Le LUNs di storage sono dedicate all'ambiente cliente.*

### Utilizzo nel contesto dell'offerta di calcolo vmware

Nel contesto dell'utilizzo dello storage in modalità blocco sotto forma di datastore nell'offerta di calcolo VMware di Cloud Temple, **dovete prendere in considerazione diversi fattori importanti**:

1. **File di swap (.VSWP) all'avvio delle macchine virtuali**: Quando una macchina virtuale si avvia, crea un file .VSWP della dimensione della sua memoria sul disco. Pertanto, per poter avviare le vostre macchine virtuali, dovete sempre avere nel vostro datastore uno spazio libero equivalente alla somma delle dimensioni delle memorie delle vostre macchine virtuali. Ad esempio, se il vostro datastore dispone di 1 Tio di storage blocco e desiderate avviare 10 macchine virtuali da 64 Gio di memoria ciascuna, saranno necessari 640 Gio di spazio disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. **Spazio libero per gli snapshots di backup**: Il servizio di backup utilizza snapshot. Pertanto, dovete sempre avere sufficiente spazio libero per permettere la creazione di uno snapshot durante il backup di una macchina virtuale. La dimensione dello snapshot dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per completare il backup. In generale, si raccomanda di mantenere almeno il 10% di spazio libero per questa operazione.

3. **Gestione dei dischi dinamici**: Siate prudenti nell'utilizzo dei dischi dinamici. Se non controllate la loro crescita, una mancanza di spazio fisico può causare un freeze della macchina virtuale nel migliore dei casi, o un crash con corruzione nel peggiore dei casi. È cruciale monitorare attentamente lo spazio disponibile sui vostri datastores quando utilizzate questo tipo di disco.

Una gestione proattiva dello spazio disco è essenziale per garantire il corretto funzionamento delle vostre macchine virtuali e l'affidabilità dei backup. Assicuratevi sempre di disporre dello spazio necessario per i file di swap, gli snapshots e la crescita dei dischi dinamici.

## Storage in modalità backup

Lo storage dedicato al backup delle vostre macchine virtuali è auto-provisionato dalla piattaforma entro i limiti della quota ordinata. 

| Riferimento               | Unità | SKU                                      | 
|---------------------------|-------|------------------------------------------|
| MASS STORAGE - Archiviazione | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Replica dello storage in modalità blocco

#### Principi

Per consentire l'implementazione dei vostri piani di ripristino dell'attività, quando non è possibile essere in situazione di continuità dell'attività con meccanismi applicativi e la replica delle macchine virtuali non è appropriata, Cloud Temple propone dei __meccanismi di replica dello storage in modalità blocco tra le zone di disponibilità di una regione__.

Questi meccanismi di replica sono applicati alle LUNs di storage dei vostri ambienti, in aggiunta ai backup. 
La scelta dell'uso di un meccanismo di replica su un ambiente __dipende da numerosi fattori, tra cui la sua criticità, la perdita di dati tollerata o le prestazioni mirate__ per l'applicazione. 

Cloud Temple propone due tipi di meccanismi implementati in una configurazione attivo/passivo: 

- La replica __asincrona__ (o __'Global Mirror'__) : *La funzione __'Global Mirror'__ fornisce un processo di copia asincrona. 
Quando un host scrive sul volume primario, la conferma dell'avvenuta operazione di I/O è ricevuta prima che l'operazione di scrittura sia completata per la copia sul volume secondario. Se viene iniziata un'operazione di failover, l'applicazione deve recuperare e applicare tutti gli aggiornamenti che non sono stati confermati sul volume secondario. 
Se le operazioni di I/O sul volume primario sono messe in pausa per un breve periodo, 
il volume secondario può diventare una esatta corrispondenza del volume primario. Questa funzione è paragonabile a un processo di backup continuo in cui gli ultimi aggiornamenti sono sempre mancanti.
Quando si utilizza Global Mirror per scopi di ripristino di emergenza, è necessario riflettere su come gestire questi aggiornamenti mancanti.*

- La replica __sincrona__ (o __'Metro Mirror'__) : *La funzione __'Metro Mirror'__ è un tipo di copia remota che crea una copia sincrona 
dei dati di un volume primario su un volume secondario. Con le copie sincrone, le applicazioni host scrivono sul volume primario ma non ricevono conferma 
che l'operazione di scrittura è completata finché i dati non sono scritti sul volume secondario. Questo garantisce che i due volumi contengano dati identici 
quando l'operazione di copia è completa. Dopo che l'operazione di copia iniziale è completata, la funzione Metro Mirror 
mantiene costantemente una copia completamente sincronizzata dei dati sorgente sul sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più comercializzata.__*


Si definisce quindi un sito detto "attivo" o "principale" e un sito "passivo" o "standby".
Il piano di ripristino dell'attività è attivato in caso di disastro o nell'ambito di una richiesta di test del PRA. 
Il sito passivo subentra quindi al sito attivo.

#### Replica asincrona 

Quando i vostri carichi di lavoro richiedono tempi di ripristino dell'attività brevi e non è accettabile 
o appropriato utilizzare meccanismi come repliche applicative / replica di macchine virtuali, 
è possibile replicare una LUN di storage SAN tra due zone di disponibilità della stessa regione. 

Questa offerta consente di ottenere un __RPO di 15Mn__ e un __RTO inferiore a 4H__. Permette di ripartire molto più rapidamente dell'implementazione di un ripristino di backup.

In un volume di storage in replica asincrona (__Global Mirror__), i controllori di virtualizzazione SAN delle 
due zone di disponibilità lavorano di concerto per eseguire le operazioni di scrittura su entrambi i siti. 
Il sito principale non attende l'acquittamento di scrittura del sito secondario.

I passaggi di un'operazione di scrittura sono i seguenti:

1. Un hypervisor desidera eseguire __un'operazione di scrittura su un volume Global-Mirror__: invia la richiesta al controllore SAN della sua zona di disponibilità, 
2. Il controllore SAN locale richiede al controllore SAN della zona remota di eseguire l'operazione di scrittura,
3. il controllore SAN locale non attende l'acquittamento del SAN remoto ed esegue quindi la scrittura localmente,
4. Egli dà __acquittamento__ all’hypervisor che ha emesso la richiesta,
5. __Gli hypervisors del sito remoto non accedono direttamente alla LUN Global Mirror__: È necessaria una richiesta di servizio.


| SLA       | Descrizione                                                                                                                                        |   
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In caso di disastro sul datacenter principale, la quantità massima di dati persi corrisponde al massimo agli ultimi 15 minuti di scrittura         |
| RTO < 4H  | In caso di disastro sul datacenter principale, il ripristino dell'attività è garantito entro 4 ore a seconda della complessità degli ambienti.     |
En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere haber reservado en el sitio de 'standby' el recurso de cálculo y la RAM para reanudar la actividad en caso de desastre.

El uso de esta tecnología también requiere duplicar el espacio en disco: es necesario disponer del mismo espacio exacto en el sitio remoto que en el sitio local.

El uso de este mecanismo puede afectar el rendimiento de la aplicación hasta en un 10%. __Solo son compatibles las clases de almacenamiento de 500 Iops/To, 1500 Iops/To y 3000 Iops/TO.__


| Référence                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STOCKAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *Al ser una oferta asincrónica, es posible que durante un desastre algunas operaciones de disco no hayan sido escritas en el sitio remoto. Por lo tanto, puede haber un riesgo de coherencia de datos, que debe ser mitigado en el análisis de riesgo del plan de recuperación ante desastres.*
- *La replicación de almacenamiento en modo bloque se realiza de manera transparente para las máquinas virtuales y las aplicaciones,*
- *Por ello, es importante favorecer los escenarios de replicación aplicativo o eventualmente de replicación de máquina virtual,*
- *El cálculo y la memoria, en el sitio de recuperación, pueden reducirse para optimizar los costos si una situación degradada es aceptable para el negocio durante la acción del plan de recuperación ante desastres.*


## Virtualisation VMware

La oferta de virtualización VMware Cloud Temple calificada SecNumCloud se basa en la tecnología __VMware Vsphere__.

La plataforma es gestionada por Cloud Temple de manera automática (mantenimiento de condiciones de seguridad, mantenimiento en condiciones operativas, ...).
Se puede gestionar a través de la interfaz gráfica de la consola Shiva o mediante las APIs asociadas.

*__Remarque__* : *Por razones de seguridad relacionadas con la calificación SecNumCloud,
__no es posible para el cliente acceder directamente a la plataforma de virtualización VMware__ (sin acceso directo al vCenter en particular).
De hecho, la calificación SecNumCloud impone __una segregación total__ entre las interfaces de gestión de los activos técnicos y la interfaz del cliente (la consola Shiva).*

- Los productos implementados son VMware ESXi, VMware Vcenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que se gestiona físicamente con la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMWare vSan, sino solo SANs IBM en fibra de canal 32G.*
- *No se lleva a cabo ninguna forma de optimización oculta (compresión, deduplicación, ...).*

### Definición de un clúster de láminas de cálculo ('Cpool')

El __'Cpool'__ es una agrupación de hipervisores VMware ESXi, también conocido como *'clúster ESX'*.

Los anfitriones presentes en un __'Cpool'__ pertenecen todos __al mismo tenant y a la misma zona de disponibilidad__ (AZ). Deben tener necesariamente la misma clase:
__no es posible mezclar diferentes modelos de láminas de cálculo dentro de un mismo clúster__.

Todas las láminas de cálculo se entregan con el máximo físico de memoria, y una limitación de uso de la RAM se aplica a nivel del clúster para asegurarse de que corresponde a la RAM facturada.

Por defecto, cada lámina dispone de 128 Go de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener un máximo de 32 hipervisores. Más allá de este límite, será necesario crear un segundo clúster.

El almacenamiento puede ser compartido entre los __'Cpool'__.

### Asignación de Memoria para un 'Cpool'

La reserva de la RAM es configurable por clúster. Puede reducir o aumentar la cantidad de RAM para que corresponda a sus necesidades a escala del clúster.

__Cuidado con no exceder un promedio del 85% de consumo de memoria por lámina de cálculo__.
De hecho, la tecnología VMware utilizará un método de optimización tipo compresión que puede impactar fuertemente el rendimiento de sus cargas de trabajo y complicar el diagnóstico.
Asimismo, una presión excesiva de memoria en sus láminas de cálculo forzará al hipervisor a descargar una parte de su memoria en disco para satisfacer las necesidades de las máquinas virtuales.

Este caso, llamado __'Ballooning'__, impacta fuertemente el rendimiento de todas las máquinas virtuales situadas en el almacenamiento (datastore) afectado.
__El diagnóstico es complicado en este contexto__, ya que su metrología notará impactos a nivel del CPU y no de la memoria o el almacenamiento.
Tenga también en cuenta que lo primero que hace el hipervisor al iniciar una máquina virtual es crear __un archivo de swap de memoria__ (.vswap) en
el disco, del tamaño de la memoria de la máquina virtual correspondiente. Usted debe __considerar esto al dimensionar su almacenamiento__.

Cada lámina de cálculo se entrega con 128Go de memoria activada a nivel del __'Cpool'__, pero dispone físicamente de la totalidad de la memoria asignable.

Por ejemplo, para un clúster de tres anfitriones del tipo ```vmware:standard:v2```, la reserva de la RAM al activarse el __'Cpool'__ será de 3 x 128Go = 384 Go de RAM.
Puede extenderse como máximo a 3 x 384Go = 1152Go de memoria.

    Mínimo de memoria de un 'Cpool' = número de anfitriones x 128Go de memoria
    Máximo de memoria de un 'Cpool' = número de anfitriones x la cantidad de memoria física de la lámina de cálculo

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` regularmente enriquecido y actualizado por nuestros equipos.
Incluye a día de hoy varias docenas de `Templates` e imágenes para montar en sus máquinas virtuales.

### Actualización de los hipervisores
Cloud Temple proporciona regularmente builds para los hipervisores con el fin de asegurar la aplicación de parches de seguridad. 
Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones comerciales.

El proceso de actualización está completamente automatizado. Para garantizar la continuidad del servicio, se requiere un mínimo de dos hipervisores por clúster durante la actualización. Asegúrese de disponer de los permisos necesarios para realizar estas acciones.


### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Se pueden utilizar para gestionar el uso de los recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo intensivas en recursos.
En un __'Cpool'__ VMware, estas reglas se utilizan a menudo para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un anfitrión a otro sin interrupción del servicio.

Puede configurar a través de la gestión de reglas:

- __Reglas de Afinidad__: Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo anfitrión físico.
Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican frecuentemente
juntas en el mismo servidor para reducir la latencia de la red. Las reglas de afinidad son útiles en situaciones
donde el rendimiento es crucial, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre los servidores.

- __Reglas de Anti-afinidad__: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo anfitrión físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que las máquinas críticas se vean afectadas todas en caso de fallo de un único servidor.
Las reglas de anti-afinidad son cruciales para las aplicaciones que requieren alta disponibilidad,
como en los entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no desea que sus dos Active Directory estén en el mismo hipervisor.

Al crear una regla, defina el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,
su estado de activación (__'Statut'__) y las máquinas afectadas de su clúster de hipervisores.

*Remarque: las reglas de afinidad/anti-afinidad propuestas en la consola son reglas que afectan a las máquinas virtuales entre sí (no reglas entre los hipervisores y las máquinas virtuales).*

### Replicación asincrónica de sus máquinas virtuales en entorno VMware

La replicación asincrónica de sus máquinas virtuales es un mecanismo que consiste en empujar a nivel del hipervisor fuente las operaciones de escritura en el sitio standby a intervalos de tiempo regulares.

Después de una copia inicial en caliente de todo el almacenamiento activo en el sitio standby, solo las escrituras se envían a intervalos regulares al sitio en espera.
Este intervalo depende del volumen de escritura (desde cada hora hasta cada 24 horas).

La replicación de las máquinas virtuales se basa en el mecanismo de instantáneas del hipervisor. En este sentido,
esta solución tiene las mismas desventajas, en particular la sensibilidad al volumen de escrituras de la máquina virtual,
siendo el procedimiento de instantánea un mecanismo recursivo para el cierre de la instantánea.

El ejemplo típico de una máquina que no soporta el mecanismo de replicación de las máquinas virtuales es un
serveur FTP che riceve i flussi in tempo reale dalle telecamere di sorveglianza. __La macchina passa il suo tempo a scrivere e non sarà 
in grado di chiudere un'istantanea senza mettere in pausa il sistema operativo per un periodo di tempo significativo
(diverse decine di minuti)__. Se l'hypervisor non riesce a chiudere l'istantanea, è esattamente quello che farà,
senza possibilità di intervenire se non corrompendo la macchina virtuale.

| SLA             | Descrizione                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO di 1H a 24H | In caso di disastro nel datacenter principale, la quantità massima di dati persi è quella dell'ultimo push delle scritture sul sito standby. |
| RTO  < 15mn     | Operazione di avvio della macchina virtuale fermata sul sito remoto                                                                                  |


In caso di necessità, o in caso di guasto su una macchina del sito principale, la macchina specchio sul sito di standby viene attivata. 
Il ripristino delle attività richiede di riservare risorse di calcolo e RAM in standby sul sito di standby. 
È necessario avere lo stesso spazio di archiviazione sul sito passivo come sul sito attivo.


| Riferimento                         | Unità | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : Il calcolo del RPO minimo deve essere definito in base al tasso di cambiamento sulla macchina virtuale.*













## Backup di macchine virtuali
Cloud Temple propone __un'architettura di backup incrociata nativa e non disattivabile__ (è obbligatoria nella qualificazione secnumcloud francese).

I backup sono archiviati in una zona di disponibilità e in un datacenter fisico diverso da quello che ospita la macchina virtuale.

Ciò consente di proteggersi in caso di guasto grave nel datacenter di produzione e di ripristinare su un datacenter secondario (per esempio in caso di incendio).

Questa soluzione include:

- Il backup off-site a caldo di tutti i dischi,
- La presentazione e l'avvio istantaneo di una macchina virtuale dall'infrastruttura di mass storage e il ricaricamento a caldo sui SAN di produzione,
- Il ripristino parziale dei file dal backup,
- Una ritenzione limitata solo dall'allocazione dello spazio di mass storage.

Questa infrastruttura di backup è basata sulla soluzione *IBM Spectrum Protect Plus*, una soluzione con architettura senza agent, 
facile da usare e che permette l'automazione dei processi di backup oltre a un'ottimizzazione dello spazio di mass storage.

Le velocità di backup e ripristino dipendono dal tasso di cambiamento sugli ambienti.
La politica di backup è configurabile dalla [Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

*__Nota :__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__ che utilizza i meccanismi di snapshot dell'hypervisor.
Queste sono tipicamente macchine con carichi di scrittura su disco costanti. Non è possibile per l'hypervisor chiudere lo snapshot, il che 
costringe al congelamento della macchina virtuale per poter completare l'operazione di chiusura. Questo congelamento può durare diverse ore e non è fermabile.*

*La soluzione è quindi di escludere il disco che è il bersaglio di scritture permanenti e di salvare i dati con un altro metodo.*

| Riferimento                                               | Unità | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Accesso al servizio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Creare una politica di backup
Per aggiungere una nuova politica di backup, è necessario fare una richiesta al supporto. Il supporto è accessibile tramite l'icona della boa in alto a destra della finestra.

La creazione di una nuova politica di backup è effettuata tramite __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua mail e n. di telefono per completare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)