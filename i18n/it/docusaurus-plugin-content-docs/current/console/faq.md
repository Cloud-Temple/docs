---
title: Domande frequenti
---

## Quali operazioni generano un'attività?

Tutte le operazioni eseguite dalla Console o tramite la sua API: le scritture (creazione, modifica, eliminazione) come le letture. Ogni attività indica in particolare l'iniziatore, la data, il tipo di operazione, le risorse interessate e lo stato. Vedi [Attività](./concepts.md#attività).

## Quando un'attività passa da «Recenti» ad «Archiviati»?

Una volta terminata l'operazione, con esito positivo o negativo, l'attività passa in **Archiviati** tra 24 e 30 ore dopo la sua creazione. Un'operazione più lunga rimane in **Recenti** finché è in corso, poi passa in **Archiviati** entro 6 ore dalla sua conclusione.

## Per quanto tempo vengono conservate le attività archiviate?

558 giorni, ovvero circa 18 mesi, a partire dalla loro archiviazione. Questa durata va oltre il minimo di 6 mesi associato alla qualifica SecNumCloud della Console.

## Queste durate sono le stesse per tutti i tenant?

Sì. Sono fissate da Cloud Temple a livello di piattaforma, identiche per tutti i tenant, e non sono configurabili.

## Come consultare o recuperare le attività archiviate?

Nella Console, dal menu **Logs**, scheda **Archiviati**, con il permesso `activity_read`. Tramite l'API, con la rotta `GET /activity/v1/activities/archive`: vedi l'[API della Console](./api.md#le-attività).

## Le attività coprono gli eventi dell'infrastruttura?

No. Tracciano le operazioni eseguite sulla Console e sulla sua API, non gli eventi dell'infrastruttura sottostante.
