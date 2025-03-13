---
title: Guida introduttiva
---
import shivaInet_001 from './images/shiva_inet_001.png'
import shivaInet_002 from './images/shiva_inet_002.png'
import shivaInet_003 from './images/shiva_inet_003.png'
import shivaInet_004 from './images/shiva_inet_004.png'
import shivaInet_005 from './images/shiva_inet_005.png'
import shivaInet_008 from './images/shiva_inet_008.png'
import shivaInet_007 from './images/shiva_inet_007.png'

## Gestione delle vostre connettività Internet

La gestione della connettività si effettua tramite il menu **'Rete'** > **'Internet'**. Questo menu centralizza la gestione degli indirizzi IP, offrendo due categorie distinte:

1. **Indirizzi IP Pubblici**: vengono utilizzati per esporre i vostri servizi su Internet, facilitando così gli scambi di dati in entrata e in uscita.
2. **Indirizzi IP di Interconnessione**: questi indirizzi permettono ai vostri gateway di dirigere il traffico verso la rete specifica di Cloud Temple, assicurando una connessione sicura ed efficiente.

Gli indirizzi IP pubblici permettono l'accesso a Internet, mentre gli indirizzi IP di interconnessione utilizzati con il protocollo BGP4 assicurano connessioni sicure tra reti. Questi ultimi facilitano scambi affidabili e sicuri tra il vostro tenant e la rete Cloud Temple. L'impiego congiunto di questi indirizzi migliora la gestione del traffico e rafforza la sicurezza e le prestazioni della rete.

Ecco l'interfaccia principale per la gestione degli indirizzi IP:

<img src={shivaInet_001} />

La scheda iniziale corrisponde al vostro ASN interno dedicato al vostro tenant. Indica in particolare le informazioni importanti per la configurazione della vostra connettività BGP.

### Indirizzi IP pubblici

È possibile visualizzare e commentare i blocchi e gli indirizzi IP associati al vostro tenant tramite l'IPAM integrato nella console Cloud Temple:

<img src={shivaInet_002} />

L'ordine di indirizzi IP pubblici si effettua tramite il pulsante **'Ordinare IP pubblici'**:

<img src={shivaInet_003} />

La prenotazione e l'assegnazione di un indirizzo IP si effettuano tramite il pulsante **'Prenotare un indirizzo'**:

<img src={shivaInet_004} />

La modifica o l'eliminazione della prenotazione si effettuano tramite i pulsanti **'Azioni'**:

<img src={shivaInet_005} />

Eliminare una prenotazione significa che la risorsa diventa disponibile per un altro uso, ma rimane allocata e fatturata al cliente.

Su alcune righe, il pulsante **'Azione'** non è disponibile, indicando che gli indirizzi IP sono riservati e quindi non disponibili per l'utilizzo.

### Indirizzi IP di interconnessione

Allo stesso modo, potete visualizzare e commentare i blocchi di indirizzi IP di interconnessione. Potete visualizzare le sottoreti di interconnessione con la rete Cloud Temple e il loro utilizzo:

<img src={shivaInet_008} />

Potete facilmente modificare, come per gli indirizzi pubblici, il loro utilizzo nella gestione IPAM integrata:

<img src={shivaInet_007} />
