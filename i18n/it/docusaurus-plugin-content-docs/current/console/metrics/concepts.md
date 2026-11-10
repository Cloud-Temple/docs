---
title: Concetti
---
import metricsHypervisorsCo2 from '@site/docs/console/metrics/images/metrics_hypervisors_co2.png'
import shivaHome from '@site/docs/console/metrics/images/shiva_home.png'
import shivaMetric_000 from '@site/docs/console/metrics/images/shiva_metric_000.png'
import shivaMetric_001 from '@site/docs/console/metrics/images/shiva_metric_001.png'
import shivaMetric_002 from '@site/docs/console/metrics/images/shiva_metric_002.png'
import shivaMetric_003 from '@site/docs/console/metrics/images/shiva_metric_003.png'
import shivaMetric_004 from '@site/docs/console/metrics/images/shiva_metric_004.png'
import shivaMetric_006 from '@site/docs/console/metrics/images/shiva_metric_006.png'
import shivaMetric_007 from '@site/docs/console/metrics/images/shiva_metric_007.png'
import shivaMetric_008 from '@site/docs/console/metrics/images/shiva_metric_008.png'
import shivaMetric_009 from '@site/docs/console/metrics/images/shiva_metric_009.png'
import shivaMetric_010 from '@site/docs/console/metrics/images/shiva_metric_010.png'
import shivaMetric_011 from '@site/docs/console/metrics/images/shiva_metric_011.png'
import shivaMetric_012 from '@site/docs/console/metrics/images/shiva_metric_012.png'
import shivaMetric_013 from '@site/docs/console/metrics/images/shiva_metric_013.png'
import shivaMetric_014 from '@site/docs/console/metrics/images/shiva_metric_014.png'
import grafanaDashboards_003 from '@site/docs/console/metrics/images/grafana_dashboards_003.png'
import grafanaDashboards_004 from '@site/docs/console/metrics/images/grafana_dashboards_004.png'
import grafanaDashboards_002 from '@site/docs/console/metrics/images/grafana_dashboards_002.png'

## Presentazione

La maggior parte dei clienti __Cloud Temple__ dispone di strumenti di visualizzazione, monitoraggio e metriche per il tracciamento delle proprie operazioni.

La filosofia della Console consiste nel consentire l'accesso ai dati per integrarsi in questa suite di strumenti tramite un proxy Prometheus integrato.

Questo proxy consente di interrogare e manipolare i dati da uno strumento di visualizzazione come [Grafana](https://grafana.com).

È comunque possibile visualizzare alcuni dati sulle prestazioni delle proprie risorse Cloud nell'interfaccia web della Console.

*__Nota :__ La filosofia di __Cloud Temple__ non si limita a integrare grafici nell'interfaccia web, ma mira anche a offrire il massimo delle informazioni accessibili tramite API.*

Il servizio include inoltre la visibilità sulle operazioni pianificate e sugli incidenti (interventi, manutenzioni, rapporti di incidente) dalla Console, con notifiche via e-mail.

## Vantaggi

| Vantaggio                    | Descrizione                                                                                       |
|------------------------------|---------------------------------------------------------------------------------------------------|
| Standard aperto              | Le metriche sono esposte in formato Prometheus e si interrogano in PromQL, senza linguaggio proprietario. |
| API-first                    | Ogni metrica visibile nell'interfaccia web è accessibile anche tramite API.                      |
| Visibilità immediata         | Le dashboard sono integrate nella Console per IaaS VMware e OpenIaaS.                            |
| Grafana pronto all'uso       | La Console si aggiunge come origine dati Prometheus in Grafana, con dashboard open source.       |
| Metriche ambientali          | Emissioni di CO₂ e consumo energetico disponibili nativamente.                                   |

## Funzionalità

| Funzionalità                    | Descrizione                                                                          |
|---------------------------------|--------------------------------------------------------------------------------------|
| Proxy Prometheus                | API compatibile con PromQL, consultabile da Grafana o da qualsiasi strumento compatibile. |
| Dashboard integrate             | Metriche IaaS VMware e OpenIaaS nell'interfaccia web della Console.                  |
| Metriche ambientali             | CO₂ e consumo energetico (kWh) per risorsa.                                          |
| Operazioni e incidenti          | Interventi pianificati e incidenti visibili nella Console, notifiche via e-mail.     |

### Dashboard integrate nell'interfaccia web

*__Nota :__ Per accedere a queste dashboard, è necessario disporre dell'autorizzazione __'metric_read'__*

#### Panoramica

La pagina iniziale della Console visualizza la dashboard principale, presentando l'insieme delle metriche che consentono di avere uno stato di ciascun prodotto a cui si è sottoscritto nel proprio perimetro. In caso di problemi sui prodotti VMware e/o OpenIaaS, verranno visualizzate delle alert, il cui colore è legato alla loro importanza.

Queste alert sono cliccabili e reindirizzano alla pagina del prodotto interessato.

<img src={shivaHome} />

#### Metriche VMware - Panoramica

Nel menu __'VMware'__, è disponibile una dashboard specifica nel sottomenu __'Metriche'__. Raggruppa 4 schede:

##### Panoramica

In questa scheda si trovano alcune delle metriche già presenti nel dashboard globale trattato all'inizio di questo capitolo.

<img src={shivaMetric_000} />

##### Calcolo

In questa scheda sono riportati il numero di __AZ__, di __Clusters__, di __ESXs__, l'__emissione di carbonio__, la __stima dei consumi__, nonché 7 grafici
che offrono una panoramica molto visuale del vostro ambiente VMware. La stima dei consumi in kw/h è calcolata sulla media dei rilevamenti che coprono il periodo selezionato, rapportata a un'ora.

È possibile scegliere l'intervallo di date da coprire, nonché il tipo di raggruppamento dei dati (per impostazione predefinita, i dati sono raggruppati per l'intero perimetro). Ad esempio, selezionando __Host__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

Al passaggio del mouse su ciascuno dei grafici, vengono visualizzati i dettagli dei nomi delle risorse e i relativi valori. Al clic su questi stessi grafici, si apre un piccolo tooltip che vi permette di consultare più facilmente i dettagli corrispondenti alla data selezionata:
<img src={shivaMetric_014} />

##### Archiviazione

Allo stesso modo della scheda "Calcolo", sono presenti diverse informazioni: il numero di __AZ__, di __cluster di datastore__, di __datastore__ nonché 2 grafici. Si applica lo stesso principio di filtraggio, ma in questo caso è possibile raggruppare per __Cluster SDRS__ e __Datastore__.

<img src={shivaMetric_004} />

##### Macchine virtuali

Qui è disponibile una visione globale dello stato di salute delle macchine virtuali.

Questa sintesi fornisce, per l'intervallo di tempo selezionato:

- il numero di CPU e la __media di utilizzo della CPU__,
- il numero di Go di memoria e la __media di utilizzo della memoria__,
- le medie di __latenza di accesso allo storage__ in lettura e in scrittura,
- la __'CPU Ready'__ media della macchina virtuale (che corrisponde al tempo medio di attesa per la disponibilità di un core fisico da parte della macchina virtuale).

<img src={shivaMetric_006} />

Per ogni VM, è possibile accedere alla cronologia delle prestazioni facendo clic sull'icona verde __'Cronologia'__ della macchina virtuale nella colonna Azioni:

<img src={shivaMetric_003} />

Si accede così alla pagina di visualizzazione grafica dei dati storici, che include una vista __prestazioni ambientali__:

<img src={shivaMetric_007} />

#### Metriche VMware - Vista per risorsa

È possibile consultare anche una parte delle metriche relative a VMware, ma questa volta in modo più mirato per un __Host__ o un __Datastore__ specifico.

##### Host

Nella vista di un Host, è possibile consultare, per un determinato periodo, il __consumo energetico__ e la stima delle __emissioni di carbonio__.

<img src={shivaMetric_008} />

##### Datastore

Nella vista di un Datastore, è possibile consultare gli __IOPS__ per un periodo determinato.

<img src={shivaMetric_009} />

#### Metriche OpenIaaS

Nel menu __'OpenIaaS'__, è disponibile una dashboard specifica nel sottomenu __'Metriche'__. Raggruppa 3 schede :

##### Panoramica

In questa scheda sono riportate alcune delle metriche già presenti nel dashboard globale trattato all'inizio di questo capitolo.

<img src={shivaMetric_010} />

##### Calcolo

In questa scheda sono riportati il numero di __AZ__, __Clusters__, __Hosts__, nonché 5 grafici
che offrono una panoramica molto visuale del vostro ambiente OpenIaaS.

È possibile scegliere l'intervallo di date da considerare, nonché il tipo di raggruppamento dei dati (per impostazione predefinita, i dati sono raggruppati per l'intero perimetro). Ad esempio, selezionando __Host__:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

##### Archiviazione

Allo stesso modo della scheda "Calcolo", sono disponibili diverse informazioni: il numero di __AZ__, __Cluster__, __Datastore__ nonché un grafico. Si applica lo stesso principio di filtraggio, ma in questo caso è possibile raggruppare per __Block Storage__.

<img src={shivaMetric_013} />

### Utilizzo con __Grafana__

Integrazione della Console con Grafana

La Console di Cloud Temple può essere utilizzata come origine dati per la vostra infrastruttura [Grafana](https://grafana.com/).

La console è compatibile con Prometheus, il che consente di aggiungerla a Grafana come origine dati di tipo Prometheus. Potrete così:

- Visualizzare tutte le vostre metriche.
- Creare i vostri dashboard personalizzati in base alle vostre esigenze.

Cloud Temple mette inoltre a disposizione una [raccolta di dashboard](https://github.com/Cloud-Temple/console-grafana-iaas) pronte all'uso, che potete utilizzare come base o adattare in base ai vostri casi d'uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

Per collegare la vostra istanza Grafana alla Console, seguite la [guida introduttiva](quickstart.md).

## Architettura

Un proxy Prometheus integrato nella Console espone le metriche delle vostre risorse. Il vostro strumento di visualizzazione (Grafana, ad esempio) interroga questo proxy come origine dati Prometheus, con le vostre credenziali della Console.

## Regioni e zone di disponibilità

Il servizio è integrato nella console Cloud Temple: le metriche coprono le risorse dei vostri tenant, indipendentemente dalla loro zona di disponibilità.

## Specifiche tecniche

| Parametro                          | Valore                                    |
|------------------------------------|-------------------------------------------|
| Formato delle metriche             | Prometheus, query PromQL                  |
| Perimetro delle dashboard          | IaaS VMware, OpenIaaS                     |
| Cronologia delle operazioni e degli incidenti | 60 giorni                      |

## Sicurezza e conformità

Observability è certificato HDS e ISO 27001. È incluso nei servizi qualificati SecNumCloud e conformi C5.

## Reversibilità

| Operazione                        | Mezzo                                              | Costo   |
|-----------------------------------|----------------------------------------------------|---------|
| Esportazione delle metriche       | Raccolta Prometheus nei vostri strumenti, in self-service | Incluso |
| Esportazione dei log di attività  | API Activity della Console                         | Incluso |

## Prezzi

Observability è incluso senza costi aggiuntivi in qualsiasi sottoscrizione Cloud Temple. Vedete la pagina del prodotto sul sito Cloud Temple:
[Observability](https://www.cloud-temple.com/produits/observability/).
