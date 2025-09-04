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

## Concetto

La maggior parte dei clienti __Cloud Temple__ dispone di strumenti di visualizzazione, monitoraggio e metrologia per il controllo delle proprie operazioni.

La filosofia della console Shiva è di permettere l'accesso ai dati per integrarsi in questi strumenti tramite un proxy Prometheus integrato.

Questo proxy vi permette di interrogare e manipolare i dati da uno strumento di visualizzazione come [Grafana](https://grafana.com).

È tuttavia possibile visualizzare alcuni dati di performance delle vostre risorse Cloud nell'interfaccia web della console Shiva.

*__Nota:__ La filosofia di __Cloud Temple__ non è di integrare molteplici grafici nell'interfaccia web, ma di offrire il massimo delle informazioni accessibili tramite l'API*

## Dashboard integrata nell'interfaccia web

*__Nota:__ Per accedere a queste dashboard, è necessario possedere il diritto __'metric_read'__*

### Monitoraggio delle emissioni di carbonio per il calcolo

La dashboard della console Shiva integra di default un grafico di monitoraggio del consumo elettrico del vostro calcolo e la stima dell'emissione di carbonio associata.

È accessibile direttamente nella pagina iniziale dell'interfaccia web della console Cloud Temple, cliccando su __'Metric'__:

<img src={metricsHypervisorsCo2} />

### Vista globale della salute delle macchine virtuali

La sintesi dello stato delle macchine virtuali è accessibile nel menu __'IaaS'__ a sinistra del vostro schermo, nel sottomenu __'Salute'__ e poi __'Macchine virtuali'__

Questa sintesi fornisce, nell'intervallo di tempo selezionato in __'Filtri'__:

- il numero di CPU e la __media di utilizzo CPU__,
- il numero di GB di memoria e la __media di utilizzo della memoria__,
- Le medie di __latenza di accesso allo storage__ in lettura e scrittura,
- Il __'CPU Ready'__ medio della macchina virtuale (che corrisponde al tempo medio di attesa per la disponibilità di un core fisico da parte della macchina virtuale).

<img src={shivaMetric_000} />

Per ogni VM, potete accedere alla cronologia delle sue performance cliccando sull'icona verde __'Cronologia'__ della macchina virtuale nella colonna azione:

<img src={shivaMetric_003} />

Accederete quindi alla pagina di visualizzazione grafica dei dati storicizzati, inclusa una vista di __performance ambientale__:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

## Utilizzo con __Grafana__

Integrazione della console Shiva con Grafana

La console Shiva di Cloud Temple può essere utilizzata come origine dati per la tua infrastruttura [Grafana](https://grafana.com).

La console è compatibile con Prometheus, il che ti consente di aggiungerla in Grafana come origine dati di tipo Prometheus. Sarai in grado di:
-  Visualizzare tutte le tue metriche.
-  Creare le tue dashboard personalizzate su misura per le tue esigenze.

Cloud Temple fornisce anche una [raccolta di dashboard pronte all'uso](https://github.com/Cloud-Temple/console-grafana-iaas), che puoi utilizzare come base o adattare ai tuoi casi d'uso.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />
