---
title: Metrologia
---
import metricsHypervisorsCo2 from './images/metrics_hypervisors_co2.png'
import shivaHome from './images/shiva_home.png'
import shivaMetric_000 from './images/shiva_metric_000.png'
import shivaMetric_001 from './images/shiva_metric_001.png'
import shivaMetric_002 from './images/shiva_metric_002.png'
import shivaMetric_003 from './images/shiva_metric_003.png'
import shivaMetric_004 from './images/shiva_metric_004.png'
import shivaMetric_006 from './images/shiva_metric_006.png'
import shivaMetric_007 from './images/shiva_metric_007.png'
import shivaMetric_008 from './images/shiva_metric_008.png'
import shivaMetric_009 from './images/shiva_metric_009.png'
import shivaMetric_010 from './images/shiva_metric_010.png'
import shivaMetric_011 from './images/shiva_metric_011.png'
import shivaMetric_012 from './images/shiva_metric_012.png'
import shivaMetric_013 from './images/shiva_metric_013.png'
import grafanaDashboards_003 from './images/grafana_dashboards_003.png'
import grafanaDashboards_004 from './images/grafana_dashboards_004.png'
import grafanaDashboards_002 from './images/grafana_dashboards_002.png'
import grafanaDatasourceHttp from './images/grafana_datasource_http.png'
import grafanaDatasourceAuth from './images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from './images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from './images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from './images/grafana_datasource_working.png'
import grafanaDashboards_001 from './images/grafana_dashboards_001.png'

La maggioranza dei clienti __Cloud Temple__ dispone di strumenti di visualizzazione, monitoraggio e metrologia per il tracciamento delle proprie operazioni.

La filosofia della console Shiva è consentire l'accesso ai dati per integrarsi in questa strumentazione tramite un proxy Prometheus integrato.

Questo proxy ti permette di eseguire query e manipolare i dati da uno strumento di visualizzazione come [Grafana](https://grafana.com).

Tuttavia, è possibile visualizzare alcuni dati di prestazioni delle tue risorse Cloud nell'interfaccia web della console Shiva.

*__Nota:__ La filosofia __Cloud Temple__ non è di integrare molti grafici nell'interfaccia web, ma di offrire il massimo delle informazioni accessibili tramite l'API*

## Dashboard integrati nell'interfaccia web

*__Nota:__ Per accedere a questi dashboard, è necessario possedere il diritto __'metric_read'__*

### Vista Globale

La pagina iniziale della console Shiva visualizza il dashboard principale, che presenta tutte le metriche che forniscono una panoramica di ciascun prodotto a cui sei abbonato nel tuo perimetro. In caso di problema(i) sui tuoi prodotti VMware e/o OpenIaaS, gli avvisi saranno visibili, con colori che indicano la loro importanza.

Questi avvisi sono cliccabili e reindirizzano alla pagina del prodotto interessato.

<img src={shivaHome} />

### Metriche VMware - Vista Globale

Nel menu **'VMware'**, un dashboard specifico è disponibile nel sottomenu **'Metriche'**. Raggruppa 4 schede:

#### Panoramica

In questa scheda, si trovano alcune delle metriche già presenti nel dashboard globale affrontato all'inizio di questo capitolo.

<img src={shivaMetric_000} />

#### Calcolo

In questa scheda, si trova il numero di **AZ**, **Cluster**, **ESX**, **emissioni di carbonio**, **consumo**, così come 7 grafici che offrono una panoramica molto visiva del tuo ambiente VMware.

Puoi scegliere l'intervallo di date da coprire, così come il tipo di raggruppamento dei dati (per impostazione predefinita, i dati sono raggruppati per l'intero perimetro). Ad esempio, scegliendo **Host**:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

#### Storage

Allo stesso modo che nella scheda "Calcolo", si trovano diverse informazioni: il numero di **AZ**, **cluster di datastore**, **datastore**, così come 2 grafici. Lo stesso principio dei filtri si applica, ma qui possiamo raggruppare per **Cluster SDRS** e **Datastore**.

<img src={shivaMetric_004} />

#### Macchine virtuali

Qui si trova una vista globale della salute delle macchine virtuali.

Questo riepilogo fornisce, nell'intervallo di tempo selezionato:
- il numero di CPU e la __media di utilizzo della CPU__,
- il numero di GB di memoria e la __media di utilizzo della memoria__,
- Le medie della __latenza di accesso al storage__ in lettura e scrittura,
- Il __CPU Ready__ medio della macchina virtuale (che corrisponde al tempo medio di attesa per la disponibilità di un core fisico da parte della macchina virtuale).

<img src={shivaMetric_006} />

Per ogni VM, è possibile accedere alla cronologia delle prestazioni facendo clic sull'icona verde __'Storico'__ della macchina virtuale nella colonna azione:

<img src={shivaMetric_003} />

Si accede così alla pagina di visualizzazione grafica dei dati storici, inclusa una vista __prestazioni ambientali__:

<img src={shivaMetric_007} />

### Metriche VMware - Vista per risorsa

È anche possibile consultare alcune delle metriche relative a VMware, ma questa volta più specificamente per un **Host** o un **Datastore** dato.

#### Host

Nella vista di un Host, è possibile consultare per un periodo dato, il **consumo energetico** così come la stima delle **emissioni di carbonio**.

<img src={shivaMetric_008} />

#### Datastore

Nella vista di un Datastore, è possibile consultare per un periodo dato gli **IOPS**.

<img src={shivaMetric_009} />

### Metriche OpenIaaS

Nel menu **'OpenIaaS'**, un dashboard specifico è disponibile nel sottomenu **'Metriche'**. Raggruppa 3 schede:

#### Panoramica

In questa scheda, si trovano alcune delle metriche già presenti nel dashboard globale affrontato all'inizio di questo capitolo.

<img src={shivaMetric_010} />

#### Calcolo

In questa scheda, si trova il numero di **AZ**, **Cluster**, **Host**, così come 5 grafici che offrono una panoramica molto visiva del tuo ambiente OpenIaaS.

Puoi scegliere l'intervallo di date da coprire, così come il tipo di raggruppamento dei dati (per impostazione predefinita, i dati sono raggruppati per l'intero perimetro). Ad esempio, scegliendo **Host**:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Storage

Allo stesso modo che nella scheda "Calcolo", si trovano diverse informazioni: il numero di **AZ**, **Cluster**, **Datastore**, così come un grafico. Lo stesso principio dei filtri si applica, ma qui possiamo raggruppare per **Block Storage**.

<img src={shivaMetric_013} />

## Utilizzo con __Grafana__

Integrazione della console Shiva con Grafana

La console Shiva di Cloud Temple può essere utilizzata come sorgente dati per la tua infrastruttura [Grafana](https://grafana.com/).

La console è compatibile con Prometheus, il che permette di aggiungerla in Grafana come sorgente dati di tipo Prometheus. Potrai così:

- Visualizzare l'intero set delle tue metriche.
- Creare i tuoi propri dashboard personalizzati adatti alle tue esigenze.

Cloud Temple mette inoltre a disposizione una [collezione di dashboard](https://github.com/Cloud-Temple/console-grafana-iaas) pronti all'uso, che puoi utilizzare come base o adattare in base ai tuoi casi d'uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />



### Configurare la Console come origine dati in Grafana

L'obiettivo è arricchire l'osservabilità della vostra infrastruttura Cloud attraverso la metrologia Cloud Temple.



#### Pre-requisiti

- Un'istanza di Grafana con accesso alle API della Console.
- Un accesso amministrativo sull'istanza di Grafana per poter configurare le *datasources*.
- Un token di accesso personale che dispone almeno del permesso `metrics_read`.



#### Configurazione

Nella __configurazione__ di Grafana andare sulla scheda "__datasources__" e fare clic su "__Aggiungi datasource__".

Nell'URL, fornire l'__URL dell'API Console Metrics__ senza la versione e che termina con "__/prometheus__"
(esempio: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Nella __autenticazione__, attivare l'opzione __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Nella sezione "__Basic Auth Details__", configurare __username__ e __password__ utilizzando rispettivamente gli __id__ e __secret__ di un __Token di accesso personale__ con il diritto __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

Nella sezione "__Alerting__", configurare la proprietà __Metodo HTTP__ su __GET__.

<img src={grafanaDatasourceAlerting} />



#### Risultato

Per verificare che la configurazione sia corretta e funzionante, premi il pulsante "__Salva e testa__".

Dovresti vedere apparire un banner che ti informa che la configurazione è riuscita.

<img src={grafanaDatasourceWorking} />

Troverai un insieme di esempi di configurazione per Grafana qui: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
