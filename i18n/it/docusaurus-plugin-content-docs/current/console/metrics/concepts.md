---
title: Metriche
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
import grafanaDatasourceHttp from '@site/docs/console/metrics/images/grafana_datasource_http.png'
import grafanaDatasourceAuth from '@site/docs/console/metrics/images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from '@site/docs/console/metrics/images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from '@site/docs/console/metrics/images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from '@site/docs/console/metrics/images/grafana_datasource_working.png'
import grafanaDashboards_001 from '@site/docs/console/metrics/images/grafana_dashboards_001.png'

La maggior parte dei clienti __Cloud Temple__ dispone di strumenti di visualizzazione, monitoraggio e metriche per il tracciamento delle proprie operazioni.

La filosofia della Console consiste nel consentire l'accesso ai dati per integrarsi in questa suite di strumenti tramite un proxy Prometheus integrato.

Questo proxy consente di interrogare e manipolare i dati da uno strumento di visualizzazione come [Grafana](https://grafana.com).

È comunque possibile visualizzare alcuni dati sulle prestazioni delle proprie risorse Cloud nell'interfaccia web della Console.

*__Nota :__ La filosofia di __Cloud Temple__ non si limita a integrare grafici nell'interfaccia web, ma mira anche a offrire il massimo delle informazioni accessibili tramite API.*

## Dashboard integrate nell'interfaccia web

*__Nota :__ Per accedere a queste dashboard, è necessario disporre dell'autorizzazione __'metric_read'__*

### Panoramica

La pagina iniziale della Console visualizza la dashboard principale, presentando l'insieme delle metriche che consentono di avere uno stato di ciascun prodotto a cui si è sottoscritto nel proprio perimetro. In caso di problemi sui prodotti VMware e/o OpenIaaS, verranno visualizzate delle alert, il cui colore è legato alla loro importanza.

Queste alert sono cliccabili e reindirizzano alla pagina del prodotto interessato.

<img src={shivaHome} />

### Metriche VMware - Panoramica

Nel menu __'VMware'__, è disponibile una dashboard specifica nel sottomenu __'Metriche'__. Raggruppa 4 schede:

#### Panoramica

In questa scheda si trovano alcune delle metriche già presenti nel dashboard globale trattato all'inizio di questo capitolo.

<img src={shivaMetric_000} />

#### Calcolo

In questa scheda sono riportati il numero di __AZ__, di __Clusters__, di __ESXs__, l'__emissione di carbonio__, la __stima dei consumi__, nonché 7 grafici
che offrono una panoramica molto visuale del vostro ambiente VMware. La stima dei consumi in kw/h è calcolata sulla media dei rilevamenti che coprono il periodo selezionato, rapportata a un'ora.

È possibile scegliere l'intervallo di date da coprire, nonché il tipo di raggruppamento dei dati (per impostazione predefinita, i dati sono raggruppati per l'intero perimetro). Ad esempio, selezionando __Host__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

Al passaggio del mouse su ciascuno dei grafici, vengono visualizzati i dettagli dei nomi delle risorse e i relativi valori. Al clic su questi stessi grafici, si apre un piccolo tooltip che vi permette di consultare più facilmente i dettagli corrispondenti alla data selezionata:
<img src={shivaMetric_014} />

#### Archiviazione

Allo stesso modo della scheda "Calcolo", sono presenti diverse informazioni: il numero di __AZ__, di __cluster di datastore__, di __datastore__ nonché 2 grafici. Si applica lo stesso principio di filtraggio, ma in questo caso è possibile raggruppare per __Cluster SDRS__ e __Datastore__.

<img src={shivaMetric_004} />

#### Macchine virtuali

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

### Metriche VMware - Vista per risorsa

È possibile consultare anche una parte delle metriche relative a VMware, ma questa volta in modo più mirato per un __Host__ o un __Datastore__ specifico.

#### Host

Nella vista di un Host, è possibile consultare, per un determinato periodo, il __consumo energetico__ e la stima delle __emissioni di carbonio__.

<img src={shivaMetric_008} />

#### Datastore

Nella vista di un Datastore, è possibile consultare gli __IOPS__ per un periodo determinato.

<img src={shivaMetric_009} />

### Metriche OpenIaaS

Nel menu __'OpenIaaS'__, è disponibile una dashboard specifica nel sottomenu __'Metriche'__. Raggruppa 3 schede :

#### Panoramica

In questa scheda sono riportate alcune delle metriche già presenti nel dashboard globale trattato all'inizio di questo capitolo.

<img src={shivaMetric_010} />

#### Calcolo

In questa scheda sono riportati il numero di __AZ__, __Clusters__, __Hosts__, nonché 5 grafici
che offrono una panoramica molto visuale del tuo ambiente OpenIaaS.

È possibile scegliere l'intervallo di date da considerare, nonché il tipo di raggruppamento dei dati (per impostazione predefinita, i dati sono raggruppati per l'intero perimetro). Ad esempio, selezionando __Host__:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Archiviazione

Allo stesso modo della scheda "Calcolo", sono disponibili diverse informazioni: il numero di __AZ__, __Cluster__, __Datastore__ nonché un grafico. Si applica lo stesso principio di filtraggio, ma in questo caso è possibile raggruppare per __Block Storage__.

<img src={shivaMetric_013} />

## Utilizzo con __Grafana__

Integrazione della Console con Grafana

La Console di Cloud Temple può essere utilizzata come origine dati per la tua infrastruttura [Grafana](https://grafana.com/).

La console è compatibile con Prometheus, il che consente di aggiungerla a Grafana come origine dati di tipo Prometheus. Potrai così:

- Visualizzare tutte le tue metriche.
- Creare i tuoi dashboard personalizzati in base alle tue esigenze.

Cloud Temple mette inoltre a disposizione una [raccolta di dashboard](https://github.com/Cloud-Temple/console-grafana-iaas) pronte all'uso, che puoi utilizzare come base o adattare in base ai tuoi casi d'uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

### Configurare la Console come origine dati in Grafana

L'obiettivo è arricchire l'osservabilità della vostra infrastruttura Cloud tramite la telemetria Cloud Temple.

#### Prerequisiti

- Un'istanza Grafana con accesso alle API della Console.
- Un accesso di amministrazione sull'istanza Grafana per poter configurare le *datasource*.
- Un token di accesso personale con almeno l'autorizzazione `metrics_read`.

#### Configurazione

Nella __configurazione__ di Grafana, andare alla scheda "__datasources__" e fare clic su "__Add datasource__".

Nell'__URL__, fornire l'__URL dell'API Console Metrics__ senza la versione e che termina con "__/prometheus__"
(esempio: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Nell'__autenticazione__, attivare l'opzione __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Nella sezione "__Basic Auth Details__", configurare il __username__ e la __password__ utilizzando
rispettivamente l'__id__ e il __secret__ di un __Token di accesso personale__ con il permesso __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

Nella sezione "__Alerting__", configurare la proprietà __HTTP Method__ su __GET__.

<img src={grafanaDatasourceAlerting} />

#### Risultato

Per confermare che la configurazione sia corretta e funzionante, clicca sul pulsante "__Save & test__".

Dovresti visualizzare un banner che ti informa che la configurazione è stata completata con successo.

<img src={grafanaDatasourceWorking} />

Troverai una serie completa di esempi di configurazione per Grafana qui: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />