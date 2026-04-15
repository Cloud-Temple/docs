---
title: Gestore dei costi
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'
import billingPricesList from '@site/docs/console/billing/images/billing_prices_list.png'

Il **Gestore dei costi** è accessibile dal menu principale della Console Cloud Temple. Offre una visione completa e trasparente del consumo delle risorse cloud, consentendo di gestire le proprie spese in autonomia.

:::info
L'accesso al Gestore dei costi richiede i diritti appropriati sul proprio tenant. Contattare il proprio responsabile commerciale per ulteriori informazioni e per conoscere le condizioni di accesso al servizio.
:::

## Dashboard

La dashboard del Gestore dei costi è la pagina iniziale del modulo. Fornisce una vista riassuntiva di tutto il consumo per il periodo selezionato.

<img src={billingDashboardPreview} alt="Dashboard del Gestore dei costi" />

Da questa dashboard è possibile:

- **Selezionare un periodo** di analisi (mese corrente, mese precedente o un intervallo di date personalizzato),
- **Navigare tra le diverse schede** per affinare l'analisi del consumo,
- **Esportare i dati di consumo** per integrarli negli strumenti di reporting interni.

## Consumo globale

La scheda **Consumo globale** mostra l'importo totale consumato nel periodo selezionato. È il punto di partenza per comprendere l'andamento generale delle spese cloud.

<img src={billingDashboardTotal} alt="Consumo globale del periodo" />

Questo grafico consente di visualizzare:

- L'**importo totale** consumato nel periodo,
- L'**evoluzione temporale** del consumo (giorno per giorno o mese per mese in base alla granularità scelta),
- Eventuali **picchi di consumo** per identificare rapidamente anomalie o aumenti del carico.

:::info
**Lettura del grafico per il mese corrente**

Per il mese corrente, il grafico distingue due zone visive:
- La parte **blu (piena)** rappresenta il **consumo reale fino ad oggi**, ovvero le risorse effettivamente consumate dall'inizio del mese,
- La parte **arancione (tratteggiata)** rappresenta la **previsione** stimata fino alla fine del mese, calcolata sulla base del ritmo di consumo attuale.

Questa proiezione consente di anticipare il budget di fine mese in tempo reale.
:::

## Consumo per prodotto

La scheda **Consumo per prodotto** consente di identificare la ripartizione delle spese in base ai prodotti Cloud Temple sottoscritti.

<img src={billingDashboardPerProduct} alt="Ripartizione del consumo per prodotto" />

Ogni prodotto (IaaS, Storage, Rete, ecc.) è presentato con:

- La sua **quota relativa** nel consumo totale,
- Il suo **importo assoluto** per il periodo,
- La **tendenza** rispetto al periodo precedente.

Questa vista è particolarmente utile per identificare quali prodotti rappresentano le voci di spesa più importanti e orientare le decisioni di ottimizzazione.

## Consumo per servizio

La scheda **Consumo per servizio** affina l'analisi suddividendo il consumo a livello dei singoli servizi all'interno di ciascun prodotto.

<img src={billingDashboardPerService} alt="Ripartizione del consumo per servizio" />

Questa vista dettagliata consente di:

- Identificare con precisione **quali servizi** contribuiscono maggiormente alla fatturazione,
- Confrontare il consumo di servizi simili,
- Rilevare servizi sottoutilizzati o sovradimensionati per **ottimizzare il footprint cloud**.

## Dettagli di consumo

La sezione **Dettagli di consumo** elenca tutte le singole righe di fatturazione per il periodo selezionato. È la vista più granulare del Gestore dei costi.

<img src={billingConsumptionDetails} alt="Dettagli delle righe di consumo" />

Per ogni riga di consumo si trovano:

- Il **nome della risorsa** consumata,
- La **quantità** consumata e l'**unità di misura** associata (ore, GB, richieste, ecc.),
- Il **prezzo unitario** applicato,
- L'**importo totale** per questa riga nel periodo.

Questa vista è indispensabile per effettuare una riconciliazione contabile precisa o per analizzare in dettaglio l'utilizzo di risorse specifiche.

## Catalogo dei prezzi

Il **Catalogo dei prezzi** raccoglie i prezzi unitari di tutte le risorse e i servizi disponibili nel tenant Cloud Temple.

<img src={billingPricesList} alt="Catalogo dei prezzi unitari" />

Questo catalogo consente di:

- **Anticipare il costo** di una nuova risorsa prima di ordinarla,
- Effettuare **simulazioni di budget** per i propri progetti cloud,
- Confrontare i prezzi tra diversi livelli o configurazioni di risorse.

:::tip
I prezzi mostrati nel catalogo sono le tariffe contrattuali applicabili al proprio tenant. Possono differire dalle tariffe pubbliche in base al contratto Cloud Temple.
:::
