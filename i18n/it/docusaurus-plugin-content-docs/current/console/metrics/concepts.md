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
import shivaMetric_014 from './images/shiva_metric_014.png'
import grafanaDashboards_003 from './images/grafana_dashboards_003.png'
import grafanaDashboards_004 from './images/grafana_dashboards_004.png'
import grafanaDashboards_002 from './images/grafana_dashboards_002.png'
import grafanaDatasourceHttp from './images/grafana_datasource_http.png'
import grafanaDatasourceAuth from './images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from './images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from './images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from './images/grafana_datasource_working.png'
import grafanaDashboards_001 from './images/grafana_dashboards_001.png'

La maggior parte dei clienti __Cloud Temple__ dispone di strumenti di visualizzazione, monitoraggio e metrologia per il tracciamento delle proprie operazioni.

La filosofia della console Shiva è consentire l'accesso ai dati in modo da integrarsi in questi strumenti tramite un proxy Prometheus integrato.

Questo proxy ti permette di interrogare e manipolare i dati da uno strumento di visualizzazione come [Grafana](https://grafana.com).

È tuttavia possibile visualizzare alcune metriche di prestazioni delle risorse Cloud direttamente nell'interfaccia web della console Shiva.

*__Nota:__ La filosofia __Cloud Temple__ non è quella di integrare esclusivamente grafici nell'interfaccia web, ma anche di offrire il massimo delle informazioni accessibili tramite l'API*

## Dashboards integrati nell'interfaccia web

*__Nota:__ Per accedere a questi dashboards, è necessario disporre del permesso __'metric_read'__*

### Panoramica generale

La pagina iniziale della console Shiva mostra il dashboard principale, che presenta l'insieme delle metriche utili per avere un quadro generale di ciascun prodotto a cui hai sottoscritto nel tuo ambito. In caso di problemi relativi ai tuoi prodotti VMware e/o OpenIaaS, verranno visualizzate delle avvisi, la cui colorazione è legata alla loro gravità.

Questi avvisi sono cliccabili e reindirizzano alla pagina del prodotto corrispondente.

<img src={shivaHome} />

### Metriche VMware - Panoramica generale

Nel menu **'VMware'**, è disponibile un dashboard specifico nel sottomenu **'Metriche'**. Esso raggruppa 4 schede:

#### Panoramica

Su questa scheda sono presenti alcune delle metriche già disponibili nel dashboard generale trattato all'inizio di questo capitolo.

<img src={shivaMetric_000} />

#### Calcolo

Su questa scheda è possibile visualizzare il numero di **AZ**, di **Cluster**, di **ESX**, l'**emissione di carbonio**, la **stima del consumo**, nonché 7 grafici che forniscono una panoramica molto visiva del vostro ambiente VMware. La stima del consumo in kWh è calcolata sulla media delle rilevazioni che coprono il periodo selezionato, espressa su base oraria.

È possibile selezionare l'intervallo di date da considerare, nonché il tipo di raggruppamento dei dati (per impostazione predefinita, i dati sono raggruppati per l'intero ambito). Ad esempio, scegliendo **Host**:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

Passando il mouse su ciascuno dei grafici, vengono visualizzati i dettagli dei nomi delle risorse e i loro valori. Cliccando su questi grafici, si apre un piccolo tooltip che permette di consultare più facilmente i dettagli corrispondenti alla data selezionata:
<img src={shivaMetric_014} />

#### Archiviazione

Come nell'ottica "Calcolo", vengono visualizzate diverse informazioni: il numero di **AZ**, di **datastore clusters**, di **datastores**, nonché due grafici. Lo stesso principio di filtraggio si applica, ma qui è possibile raggruppare per **Cluster SDRS** e **Datastore**.

<img src={shivaMetric_004} />

#### Macchine virtuali

Qui qui si trova una panoramica generale sulla salute delle macchine virtuali.

Questa sintesi fornisce, nell'intervallo di tempo selezionato:
- il numero di CPU e la __media di utilizzo CPU__,
- la quantità di RAM in GB e la __media di utilizzo della memoria__,
- le medie della __latenza di accesso allo storage__ in lettura e scrittura,
- la media del valore __'CPU Ready'__ della macchina virtuale (che corrisponde al tempo medio di attesa della disponibilità di un core fisico da parte della macchina virtuale).

<img src={shivaMetric_006} />

Per ogni VM, è possibile accedere all'archivio delle prestazioni facendo clic sull'icona verde __'Storico'__ nella colonna Azioni:

<img src={shivaMetric_003} />

Si accede così alla pagina di visualizzazione grafica dei dati storici, che include una vista __ambientale delle prestazioni__:

<img src={shivaMetric_007} />

### VMware Metrics - View by resource

It is also possible to view some metrics related to VMware, this time more specifically for a given **Host** or **Datastore**.

#### Host

Nella vista di un Host, è possibile consultare, per un periodo specifico, il **consumo energetico** nonché la stima delle **emissioni di carbonio**.

<img src={shivaMetric_008} />

#### Datastore

Nella vista di un Datastore, è possibile consultare per un periodo specifico le **IOPS**.

<img src={shivaMetric_009} />

### OpenIaaS Metrics

In the **'OpenIaaS'** menu, a dedicated dashboard is available in the **'Metrics'** submenu. It includes 3 tabs:

#### Panoramica

Su questa scheda sono presenti alcune delle metriche già visualizzate nel dashboard generale trattato all'inizio di questo capitolo.

<img src={shivaMetric_010} />

#### Calcolo

Su questa scheda è possibile visualizzare il numero di **AZ**, di **Cluster**, di **Host**, nonché 5 grafici che forniscono una panoramica molto visiva del vostro ambiente OpenIaaS.

È possibile selezionare l'intervallo di date da considerare, nonché il tipo di raggruppamento dei dati (per impostazione predefinita, i dati sono raggruppati per l'intero ambito). Ad esempio, scegliendo **Host**:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Archiviazione

Come nell'abaco "Calcolo", vengono visualizzate diverse informazioni: il numero di **AZ**, di **Cluster**, di **Datastore**, nonché un grafico. Lo stesso principio di filtraggio si applica, ma qui è possibile raggruppare per **Block Storage**.

<img src={shivaMetric_013} />

## Utilizzo con __Grafana__

Integrazione della console Shiva con Grafana

La console Shiva di Cloud Temple può essere utilizzata come datasource per la tua infrastruttura [Grafana](https://grafana.com/).

La console è compatibile con Prometheus, il che permette di aggiungerla in Grafana come datasource di tipo Prometheus. Potrai così:

- Visualizzare l'insieme delle tue metriche.
- Creare i tuoi dashboard personalizzati adatti alle tue esigenze.

Cloud Temple mette inoltre a disposizione una [collezione di dashboard](https://github.com/Cloud-Temple/console-grafana-iaas) pronti all'uso, che puoi utilizzare come base o adattare in base ai tuoi casi d'uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

### Configure the Console as a data source in Grafana

The goal is to enhance the observability of your Cloud infrastructure through Cloud Temple metrics.

#### Prerequisiti

- Un'istanza Grafana con accesso alle API della Console.
- Un accesso amministrativo all'istanza Grafana per poter configurare i *datasources*.
- Un personal access token con almeno il permesso `metrics_read`.

#### Configuration

Nella __configurazione__ di Grafana, andare nella scheda "__datasources__" e fare clic su "__Add datasource__".

Nell'URL, specificare l'__URL dell'API Console Metrics__ senza la versione e che termina con "__/prometheus__"  
(esempio: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Nella sezione "__Autenticazione__", abilitare l'opzione __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Nella sezione "__Basic Auth Details__", impostare __username__ e __password__ utilizzando rispettivamente gli __id__ e __secret__ di un __Personal Access Token__ con il permesso __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

Nella sezione "__Alerting__", configurare la proprietà __HTTP Method__ su __GET__.

<img src={grafanaDatasourceAlerting} />

#### Risultato

Per confermare che la configurazione sia corretta e funzionante, premi il pulsante "__Salva e testa__".

Dovresti vedere apparire una barra informativa che ti comunica che la configurazione è andata a buon fine.

<img src={grafanaDatasourceWorking} />

Trovate qui un insieme completo di esempi di configurazione per Grafana: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
