---
title: Metriche
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

La maggior parte dei clienti di __Cloud Temple__ dispone di strumenti di visualizzazione, monitoraggio e metriche per tracciare le proprie operazioni.

La filosofia della console Shiva è quella di fornire accesso ai dati per integrarsi con questi strumenti tramite un proxy Prometheus integrato.

Questo proxy consente di interrogare e manipolare i dati da uno strumento di visualizzazione come [Grafana](https://grafana.com).

Tuttavia, è possibile visualizzare alcuni dati sulle prestazioni delle risorse Cloud nell'interfaccia web della console Shiva.

*__Nota:__ La filosofia di __Cloud Temple__ non è quella di integrare più grafici nell'interfaccia web, ma di offrire la massima quantità di informazioni accessibili tramite l'API.*

## Dashboard integrato nell'interfaccia web

*__Nota:__ Per accedere a queste dashboard, è necessario disporre del permesso __'metric_read'__.*

### Monitoraggio delle emissioni di carbonio per il calcolo

La dashboard della console Shiva include di default un grafico per il monitoraggio del consumo di elettricità delle risorse di calcolo e la stima delle emissioni di carbonio associate.

È accessibile direttamente dalla homepage dell'interfaccia web della console di Cloud Temple cliccando su __'Metric'__:

<img src={metricsHypervisorsCo2} />

### Vista globale dello stato di salute delle macchine virtuali

Il riepilogo dello stato delle macchine virtuali è accessibile nel menu __'IaaS'__ a sinistra dello schermo, nel sottomenu __'Salute'__ e poi __'Macchine Virtuali'__.

Questo riepilogo fornisce, per l'intervallo di tempo selezionato in __'Filtri'__:

- il numero di CPU e l'__utilizzo medio della CPU__,
- la quantità di memoria in GB e l'__utilizzo medio della memoria__,
- la __latenza media di accesso allo storage__ in lettura e scrittura,
- il __'CPU Ready'__ medio della macchina virtuale (che corrisponde al tempo medio di attesa di una macchina virtuale per la disponibilità di un core fisico).

<img src={shivaMetric_000} />

Per ogni VM, è possibile accedere alla sua cronologia delle prestazioni cliccando sull'icona verde __'Cronologia'__ della macchina virtuale nella colonna delle azioni:

<img src={shivaMetric_003} />

Si accederà quindi alla pagina di visualizzazione grafica dei dati storici, che include una vista sulle __prestazioni ambientali__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Utilizzo con __Grafana__

### Configurare la Console come origine dati in Grafana

L'obiettivo è migliorare l'osservabilità della vostra infrastruttura Cloud tramite le metriche di Cloud Temple.

#### Prerequisiti

- Un'istanza di Grafana con accesso alle API della Console.
- Accesso amministrativo all'istanza di Grafana per configurare le *origini dati*.
- Un token di accesso personale con almeno il permesso `metrics_read`.

#### Configurazione

Nella __configurazione__ di Grafana, andare alla scheda "__datasources__" e cliccare su "__Add datasource__".

Nell'URL, fornire l'__URL dell'API delle Metriche della Console__ senza la versione e che termini con "__/prometheus__"
(esempio: [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Nella sezione __autenticazione__, abilitare l'opzione __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Nella sezione "__Basic Auth Details__", configurare __username__ e __password__ utilizzando
rispettivamente l'__id__ e il __secret__ di un __Token di Accesso Personale__ con il permesso __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

Nella sezione "__Alerting__", configurare la proprietà __HTTP Method__ su __GET__.

<img src={grafanaDatasourceAlerting} />

#### Risultato

Per confermare che la configurazione è corretta e funzionante, premere il pulsante "__Save & test__".

Dovrebbe apparire un banner che informa che la configurazione è avvenuta con successo.

<img src={grafanaDatasourceWorking} />

Troverete un'intera serie di esempi di configurazione per Grafana qui: [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />

Integrazione della console Shiva con Grafana

La console Shiva di Cloud Temple può essere utilizzata come origine dati per la vostra infrastruttura [Grafana](https://grafana.com/).

La console è compatibile con Prometheus, il che consente di aggiungerla in Grafana come origine dati di tipo Prometheus. Potrete così:

- Visualizzare tutte le vostre metriche.
- Creare le vostre dashboard personalizzate su misura per le vostre esigenze.

Cloud Temple fornisce anche una [raccolta di dashboard](https://github.com/Cloud-Temple/console-grafana-iaas) pronte all'uso, che potete utilizzare come base o adattare ai vostri casi d'uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
