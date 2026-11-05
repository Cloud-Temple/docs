---
title: Domande frequenti
---

## Il servizio viene fatturato a parte?

No. Le dashboard integrate nella Console, l'endpoint API Prometheus (PromQL), i modelli di dashboard Grafana open source, la visibilità sulle operazioni pianificate e sugli incidenti e le notifiche e-mail sugli incidenti sono inclusi senza costi aggiuntivi in ogni sottoscrizione Cloud Temple.

## Cloud Temple fornisce un'istanza Grafana gestita?

No. Cloud Temple fornisce l'origine dati (il proxy Prometheus della Console) e [modelli di dashboard open source](https://github.com/Cloud-Temple/console-grafana-iaas), ma non Grafana come servizio. Colleghi lo strumento compatibile con PromQL che preferisci, ad esempio la tua istanza Grafana, nel cloud o on-premise.

## Come è protetto l'accesso alle mie metriche?

Con un token di accesso personale (PAT). Il tuo strumento si autentica in Basic Auth con l'identificativo e il secret di un token creato dal tuo profilo nella Console. Secondo il principio del privilegio minimo, questo token deve avere solo l'autorizzazione `metrics_read`.

## Posso creare avvisi sulle metriche Cloud Temple?

Sì, nel tuo strumento: ad esempio regole di avviso Grafana sulla saturazione della memoria, sulla CPU o sugli IOPS, a partire dall'origine dati Prometheus. Per gli avvisi, imposta il metodo HTTP dell'origine dati su GET (vedi la [guida introduttiva](quickstart.md)).

## Posso monitorare l'impronta di carbonio della mia infrastruttura?

Sì. Il flusso Prometheus e le dashboard della Console includono le emissioni di CO₂ e il consumo energetico stimato (kWh), per hypervisor e per datacenter.

## Per quanto tempo viene conservato lo storico di incidenti e interventi?

60 giorni. La Console mostra gli interventi completati e gli incidenti risolti (con i relativi rapporti) degli ultimi 60 giorni, oltre agli interventi pianificati per i prossimi 60 giorni.
