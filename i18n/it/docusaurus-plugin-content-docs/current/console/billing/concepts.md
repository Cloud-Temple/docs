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

Il **Gestore dei costi** è il modulo della Console Cloud Temple dedicato alla **visibilità del tuo consumo**. Ti consente di monitorare in tempo reale l'utilizzo delle tue risorse cloud all'interno di un tenant e di avere una visione chiara delle tue spese.

Questo modulo risponde a un'esigenza fondamentale: **comprendere cosa consumi, quando lo consumi e a quale costo**, senza dover navigare in tabelle complesse o fatture dettagliate.

:::info
Il Gestore dei costi visualizza il **consumo effettivo** delle tue risorse sul tenant selezionato. I dati vengono aggiornati regolarmente per riflettere il tuo utilizzo corrente.
:::

## Dashboard principale

La pagina iniziale del Gestore dei costi presenta una sintesi visiva del tuo consumo. All'apertura, hai a disposizione una panoramica che ti permette di identificare rapidamente le tendenze di consumo e le voci più significative.

<img src={billingDashboardPreview} />

La dashboard è organizzata attorno a diversi assi complementari, accessibili tramite le schede disponibili nella parte superiore della pagina.

## Consumo totale

La scheda **Consumo totale** offre una vista aggregata di tutto il tuo consumo nel periodo selezionato. Questo grafico ti consente di osservare l'evoluzione delle tue spese nel tempo e di identificare eventuali picchi o tendenze.

<img src={billingDashboardConsumptionTotal} />

Puoi regolare la **periodo di visualizzazione** per affinare la tua analisi: giorno, settimana, mese o intervallo personalizzato. La curva del consumo totale è direttamente leggibile e non richiede competenze tecniche specifiche.

## Consumo per prodotto

La scheda **Consumo per prodotto** scompone il tuo consumo in base alle grandi famiglie di servizi Cloud Temple a cui ti sei abbonato: compute, storage, rete, ecc.

<img src={billingDashboardConsumptionPerProduct} />

Questa vista è particolarmente utile per **identificare le voci di spesa più significative** e orientare le decisioni di ottimizzazione. Ogni prodotto è rappresentato con la sua quota relativa nel consumo globale, facilitando la lettura e il confronto.

## Consumo per servizio

La scheda **Consumo per servizio** offre un livello di dettaglio aggiuntivo ventilando il consumo per **servizio specifico** all'interno di ogni prodotto.

<img src={billingDashboardConsumptionPerService} />

Questo livello di granularità ti permette di approfondire l'analisi: puoi ad esempio distinguere il consumo delle tue macchine virtuali, del tuo storage block, dei tuoi snapshot o della tua banda passante di rete, identificando così con precisione le risorse che generano i costi maggiori.

## Dettaglio del consumo

La vista **Dettaglio del consumo** presenta una tabella esaustiva che elenca tutte le risorse consumate nel periodo. Ogni riga corrisponde a una risorsa identificabile (macchina virtuale, volume di storage, indirizzo IP pubblico, ecc.) con il relativo livello di consumo.

<img src={billingConsumptionDetails} />

Questo dettaglio è prezioso per i team che desiderano effettuare una **ripartizione analitica** dei propri costi o per identificare risorse potenzialmente inutilizzate che potrebbero essere disattivate per ottimizzare le spese.

## Griglia tariffaria

La scheda **Griglia tariffaria** (o **Lista dei prezzi**) elenca tutti i prezzi unitari applicabili alle risorse disponibili nel tuo tenant. Si tratta del catalogo dei prezzi vigente che ti permette di anticipare il costo di nuove risorse prima del loro deployment.

<img src={billingPricesList} />

Ogni voce della griglia indica:

- Il **tipo di risorsa** interessata
- L'**unità di fatturazione** (all'ora, per GB, per unità, ecc.)
- Il **prezzo unitario** applicabile

:::tip
Per i prezzi pubblici vigenti, consulta il [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). La griglia visualizzata nella Console presenta i prezzi applicabili al tuo tenant; combina queste informazioni con i dati di consumo per identificare i leve di ottimizzazione.
:::

## Buone pratiche

Per trarre il massimo vantaggio dal Gestore dei costi, ecco alcune raccomandazioni:

- **Consulta regolarmente** il tuo consumo per rilevare rapidamente eventuali derive di budget.
- **Confronta i periodi**: lo strumento ti permette di analizzare l'evoluzione mese per mese per identificare le tendenze.
- **Utilizza la vista per servizio** per identificare risorse sotto-utilizzate o dimenticate (snapshot vecchi, volumi scollegati, ecc.).
- **Incrocia con la griglia tariffaria** per valutare l'impatto finanziario di qualsiasi cambiamento infrastrutturale prima di realizzarlo.
