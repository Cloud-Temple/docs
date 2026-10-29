---
title: Gestore dei costi
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardConsumptionTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardConsumptionPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardConsumptionPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'

## Presentazione

Il **Gestore dei costi** è il modulo della Console Cloud Temple dedicato alla **visibilità del vostro consumo**. Vi consente di monitorare in tempo reale l'utilizzo delle vostre risorse cloud all'interno di un tenant e di avere una visione chiara delle vostre spese.

Questo modulo risponde a un'esigenza fondamentale: **comprendere cosa consumate, quando lo consumate e a quale costo**, senza dover navigare tra tabelle complesse o fatture dettagliate.

:::info
Il Gestore dei costi presenta il **consumo effettivo** delle vostre risorse sul tenant selezionato. I dati vengono aggiornati regolarmente per riflettere il vostro utilizzo corrente.
:::

## Dashboard principale

La pagina di benvenuto del Gestore dei costi presenta una sintesi visiva del vostro consumo. Fin dall'apertura, disponete di una visione d'insieme che consente di identificare rapidamente le tendenze di consumo e le voci più significative.

<img src={billingDashboardPreview} />

La dashboard è organizzata attorno a diversi assi complementari, accessibili tramite le schede disponibili in alto nella pagina.

## Consumo totale

La scheda **Consumo totale** offre una vista aggregata dell'intero consumo nel periodo selezionato. Questo grafico vi consente di osservare l'evoluzione delle vostre spese nel tempo e di identificare eventuali picchi o tendenze.

<img src={billingDashboardConsumptionTotal} />

È possibile regolare il **periodo di visualizzazione** per affinare l'analisi: giorno, settimana, mese o intervallo personalizzato. La curva del consumo totale è direttamente leggibile e non richiede competenze tecniche particolari.

## Consumo per prodotto

La visualizzazione **Prodotto** scompone il vostro consumo secondo le grandi famiglie di servizi Cloud Temple a cui avete sottoscritto: compute, storage, rete, ecc.

<img src={billingDashboardConsumptionPerService} />

Questa vista è particolarmente utile per **identificare le voci di spesa più significative** e orientare le decisioni di ottimizzazione. Ogni prodotto è rappresentato con la sua quota relativa nel consumo globale, il che facilita la lettura e il confronto.

## Consumo per SKU

La visualizzazione **SKU** offre un livello di dettaglio aggiuntivo suddividendo il consumo per **riferimento tariffario (SKU)** all'interno di ciascun prodotto.

<img src={billingDashboardConsumptionPerProduct} />

Questo livello di granularità vi consente di andare oltre nell'analisi: è possibile ad esempio distinguere il consumo delle vostre macchine virtuali, del vostro storage a blocchi, dei vostri snapshot o della vostra banda passante di rete, e così identificare precisamente le risorse che generano i costi maggiori.

## Dettaglio del consumo

La vista **Dettaglio del consumo** presenta una tabella esaustiva che elenca l'insieme delle risorse consumate nel periodo. Ogni riga corrisponde a una risorsa identificabile (macchina virtuale, volume di storage, indirizzo IP pubblico, ecc.) con il relativo livello di consumo associato.

<img src={billingConsumptionDetails} />

Questo dettaglio è prezioso per i team che desiderano effettuare un'**allocazione analitica** dei propri costi o per identificare risorse potenzialmente non utilizzate che potrebbero essere disattivate al fine di ottimizzare le spese.

## Buone pratiche

Per trarre il massimo vantaggio dal Gestore dei costi, ecco alcune raccomandazioni:

- **Consultate regolarmente** il vostro consumo per rilevare rapidamente qualsiasi deriva di budget.
- **Confrontate i periodi**: lo strumento vi consente di analizzare l'evoluzione mese per mese per identificare le tendenze.
- **Utilizzate la vista per SKU** per identificare risorse sottoutilizzate o dimenticate (snapshot datati, volumi disconnessi, ecc.).
