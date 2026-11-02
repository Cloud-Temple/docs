---
title: Concetti
---

## Presentazione

L'Anti-DDoS protegge le applicazioni e i servizi pubblicati su Internet dagli attacchi volumetrici di tipo DDoS (Distributed Denial of Service), che mirano a saturare i collegamenti di rete. Il traffico in ingresso è monitorato in modo permanente: in caso di attacco, il traffico illegittimo viene filtrato a monte e solo le richieste legittime raggiungono i vostri servizi.

La protezione è inclusa nell'[accesso Internet](../internet/concepts.md) del Private Backbone. È attiva per impostazione predefinita e non richiede alcuna configurazione da parte vostra.

### Destinatari e casi d'uso

- **Siti web ad alto traffico**: mantenimento della disponibilità del sito durante un attacco.
- **Applicazioni critiche**: continuità delle applicazioni web esposte su Internet.
- **Editori di soluzioni SaaS**: protezione delle piattaforme accessibili dai loro clienti.

## Vantaggi

| Vantaggio                  | Descrizione                                                                                          |
|----------------------------|------------------------------------------------------------------------------------------------------|
| Continuità del servizio    | I vostri servizi restano accessibili durante un attacco volumetrico.                                 |
| Filtraggio a monte         | Il traffico illegittimo viene filtrato prima di raggiungere la rete Cloud Temple e le vostre infrastrutture. |
| Monitoraggio permanente    | Il traffico in ingresso viene analizzato in modo continuo, per una reazione immediata.               |
| Nessuna configurazione     | La protezione si applica automaticamente agli indirizzi IP pubblici, senza impostazioni né interventi. |

## Funzionalità

| Funzionalità            | Descrizione                                                                                       |
|-------------------------|---------------------------------------------------------------------------------------------------|
| Protezione volumetrica  | Pulizia del traffico a monte per bloccare gli attacchi volumetrici prima che raggiungano i vostri servizi. |
| Analisi del traffico    | Rilevamento e analisi dei modelli di traffico malevolo.                                           |
| Monitoraggio continuo   | Monitoraggio permanente del traffico in ingresso.                                                 |
| Report degli attacchi   | In caso di attacco significativo, un report dell'incidente può essere fornito su richiesta al supporto. |

## Architettura

### Funzionamento della protezione

Gli attacchi volumetrici vengono rilevati e mitigati ai margini della rete, a monte della rete Cloud Temple. Quando viene rilevato un attacco, il traffico illegittimo viene automaticamente deviato e filtrato («ripulito»), senza perturbare il traffico legittimo, che continua a essere instradato verso i vostri servizi.

La protezione opera a livello di rete (livelli 3 e 4): non decifra i flussi e non ne ispeziona il contenuto.

### Integrazione con gli altri prodotti

L'Anti-DDoS è una componente dell'accesso Internet. Copre tutti i servizi esposti su un indirizzo IP pubblico fornito da Cloud Temple, in particolare:

- **Housing**: hosting condiviso o dedicato;
- **Compute**: Bare Metal, IaaS VMware, IaaS OpenSource;
- **Containers**: PaaS OpenShift, Managed Kubernetes.

Anche i prefissi IP che migrate verso l'infrastruttura Cloud Temple beneficiano della protezione, senza configurazione aggiuntiva (vedere i [concetti dell'accesso Internet](../internet/concepts.md)).

## Regioni e zone di disponibilità

La protezione è disponibile nella regione FR1.

## Specifiche tecniche

| Parametro               | Valore                                                        |
|-------------------------|---------------------------------------------------------------|
| Tipo di attacchi trattati | Attacchi volumetrici                                        |
| Livello di protezione   | Rete (livelli 3 e 4)                                          |
| Capacità di mitigazione | 1 Tb/s                                                        |
| Rilevamento             | Permanente                                                    |
| Perimetro               | Indirizzi IP pubblici forniti da Cloud Temple e prefissi migrati |
| Configurazione          | Nessuna, protezione attiva per impostazione predefinita       |

### Limiti

- La protezione è mirata agli attacchi volumetrici a livello di rete: non ispeziona il contenuto applicativo dei flussi.
- Non è messa a disposizione alcuna console né API: la protezione è interamente gestita dai team Cloud Temple e non è configurabile.
- I report degli attacchi sono forniti su richiesta, tramite il supporto.

## Sicurezza e conformità

L'Anti-DDoS è certificato HDS e ISO 27001.

- **Crittografia**: la protezione non effettua alcuna decifratura dei flussi.
- **Ispezione**: il contenuto dei flussi non viene ispezionato.

## Disponibilità del servizio

L'obiettivo di disponibilità del servizio Anti-DDoS è del 99,99%, misurato su base mensile.

## Reversibilità

Poiché l'Anti-DDoS è incluso nell'accesso Internet, la sua reversibilità segue quella dell'offerta di rete: la protezione viene rimossa alla risoluzione del servizio Internet. Potete recuperare gratuitamente i seguenti elementi:

| Elemento esportato   | Deliverable                           | Tempi di messa a disposizione |
|----------------------|---------------------------------------|-----------------------------|
| Report degli incidenti | Report degli attacchi, su richiesta | 30 giorni                   |

## Prezzi

L'Anti-DDoS è incluso nell'offerta di accesso Internet, senza costi aggiuntivi. I prezzi sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[Anti-DDoS — prezzi](https://www.cloud-temple.com/produits/anti-ddos/).
