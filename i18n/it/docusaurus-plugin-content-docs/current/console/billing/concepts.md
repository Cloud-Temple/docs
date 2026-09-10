---
title: Gestore dei costi
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardConsumptionTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardConsumptionPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardConsumptionPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'
import billingPricesList from '@site/docs/console/billing/images/billing_prices_list.png'

## Panoramica

Il **Gestore dei costi** è il modulo della Console Cloud Temple dedicato alla **visibilità dei vostri consumi**. Vi consente di monitorare in tempo reale l'utilizzo delle vostre risorse cloud all'interno di un tenant e di avere una visione chiara delle vostre spese.

Questo modulo risponde a un'esigenza fondamentale: **comprendere cosa consumate, quando lo consumate e a quale costo**, senza dover navigare in tabelle complesse o fatture dettagliate.

:::info
Il Gestore dei costi mostra il **consumo effettivo** delle vostre risorse sul tenant selezionato. I dati vengono aggiornati regolarmente per riflettere il vostro utilizzo corrente.
:::

## Dashboard principale

La pagina iniziale del Gestore dei costi offre una sintesi visiva dei tuoi consumi. All'apertura, hai a disposizione una panoramica che ti consente di identificare rapidamente le tendenze dei consumi e le voci più rilevanti.

<img src={billingDashboardPreview} />

La dashboard è organizzata attorno a diverse sezioni complementari, accessibili tramite le schede disponibili nella parte superiore della pagina.

## Consumo totale

La scheda **Consumo totale** offre una vista aggregata di tutti i tuoi consumi nel periodo selezionato. Questo grafico ti permette di osservare l'andamento delle tue spese nel tempo e di identificare eventuali picchi o tendenze.

<img src={billingDashboardConsumptionTotal} />

Puoi regolare il **periodo di visualizzazione** per affinare la tua analisi: giorno, settimana, mese o intervallo personalizzato. La curva del consumo totale è di immediata lettura e non richiede competenze tecniche particolari.

## Consumo per prodotto

La scheda **Consumo per prodotto** suddivide il tuo consumo in base alle principali famiglie di servizi Cloud Temple a cui hai sottoscritto: compute, storage, rete, ecc.

<img src={billingDashboardConsumptionPerProduct} />

Questa vista è particolarmente utile per **identificare le voci di spesa più significative** e orientare le decisioni di ottimizzazione. Ogni prodotto è rappresentato con la propria quota relativa nel consumo complessivo, facilitando la lettura e il confronto.

## Consumo per servizio

La scheda **Consumo per servizio** offre un livello di dettaglio aggiuntivo suddividendo il consumo per **servizio specifico** all'interno di ciascun prodotto.

<img src={billingDashboardConsumptionPerService} />

Questo livello di granularità consente di approfondire l'analisi: è possibile ad esempio distinguere il consumo delle macchine virtuali, dello storage a blocchi, degli snapshot o della banda di rete, e così identificare con precisione le risorse che generano i costi maggiori.

## Dettaglio dei consumi

La vista **Dettaglio dei consumi** presenta una tabella esaustiva che elenca tutte le risorse consumate nel periodo. Ogni riga corrisponde a una risorsa identificabile (macchina virtuale, volume di archiviazione, indirizzo IP pubblico, ecc.) con il relativo livello di consumo.

<img src={billingConsumptionDetails} />

Questo dettaglio è prezioso per i team che desiderano effettuare una **ripartizione analitica** dei propri costi o per identificare risorse potenzialmente inutilizzate che potrebbero essere disattivate per ottimizzare le spese.

## Griglia tariffaria

La scheda **Griglia tariffaria** (o **Elenco prezzi**) elenca tutti i prezzi unitari applicabili alle risorse disponibili nel tuo tenant. Si tratta del catalogo dei prezzi in vigore che ti consente di prevedere il costo di nuove risorse prima della loro implementazione.

<img src={billingPricesList} />

Ogni voce della griglia indica:

- Il **tipo di risorsa** interessata
- L'**unità di fatturazione** (all'ora, per GB, per unità, ecc.)
- Il **prezzo unitario** applicabile

:::tip
La griglia tariffaria è il tuo riferimento per **simulare il costo** di un'infrastruttura prima di ordinarla. Combina queste informazioni con i dati di consumo per individuare le leve di ottimizzazione.
:::

## Buone pratiche

Per sfruttare al meglio il Gestore dei costi, ecco alcune raccomandazioni:

- **Consultare regolarmente** i consumi per rilevare rapidamente eventuali scostamenti di budget.
- **Confrontare i periodi** : lo strumento consente di analizzare l'andamento mese per mese per identificare le tendenze.
- **Utilizzare la vista per servizio** per identificare risorse sottoutilizzate o dimenticate (snapshot obsoleti, volumi scollegati, ecc.).
- **Confrontare con la griglia tariffaria** per valutare l'impatto finanziario di qualsiasi modifica all'infrastruttura prima di attuarla.