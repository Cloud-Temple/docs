

---
title: Metrologia
---
import metricsHypervisorsCo2 from './images/metrics_hypervisors_co2.png'
import shivaMetric_000 from './images/shiva_metric_000.png'
import shivaMetric_003 from './images/shiva_metric_003.png'
import shivaMetric_001 from './images/shiva_metric_001.png'
import shivaMetric_002 from './images/shiva_metric_002.png'
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

*__Nota :__ La filosofia __Cloud Temple__ non è di integrare molti grafici nell'interfaccia web, ma di offrire il massimo delle informazioni accessibili tramite l'API*



## Dashboard integrato nell'interfaccia web

*__Nota :__ Per accedere a questi dashboard, è necessario possedere il diritto __'metric_read'__*



### Tracciamento delle emissioni di carbonio per il calcolo

Il dashboard della console Shiva integra di default un grafico di monitoraggio del consumo elettrico del tuo calcolo così come la stima delle emissioni di carbonio associate.

È accessibile direttamente nella pagina iniziale dell'interfaccia web della console Cloud Temple, cliccando su __'Metric'__ :

<img src={metricsHypervisorsCo2} />



### Panoramica della salute delle macchine virtuali

Il riepilogo dello stato delle macchine virtuali è accessibile nel menu __'IaaS'__ a sinistra dello schermo, nel sottomenu __'Salute'__ poi __'Macchine virtuali'__.

Questo riepilogo fornisce, nell'intervallo di tempo selezionato in __'Filtri'__:

- il numero di CPU e la __media di utilizzo della CPU__,
- il numero di GB di memoria e la __media di utilizzo della memoria__,
- le medie della __latenza di accesso al storage__ in lettura e scrittura,
- il __CPU Ready__ medio della macchina virtuale (che corrisponde al tempo medio di attesa per la disponibilità di un core fisico da parte della macchina virtuale).

<img src={shivaMetric_000} />

Per ogni VM, è possibile accedere alla cronologia delle prestazioni facendo clic sull'icona verde __'Storico'__ della macchina virtuale nella colonna azione:

<img src={shivaMetric_003} />

Si accede così alla pagina di visualizzazione grafica dei dati storici, inclusa una vista __prestazioni ambientali__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />



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