---
title: Guida rapida
---
import shivaInet_001 from './images/shiva_inet_001.png'
import shivaInet_002 from './images/shiva_inet_002.png'
import shivaInet_003 from './images/shiva_inet_003.png'
import shivaInet_004 from './images/shiva_inet_004.png'
import shivaInet_005 from './images/shiva_inet_005.png'
import shivaInet_008 from './images/shiva_inet_008.png'
import shivaInet_007 from './images/shiva_inet_007.png'


## Gestione delle tue connettività Internet

La gestione della connettività si effettua tramite il menu **'Rete'** > **'Internet'**. Questo menu centralizza la gestione degli indirizzi IP, offrendo due categorie distinte:

1. **Indirizzi IP Pubblici**: sono utilizzati per esporre i tuoi servizi su Internet, facilitando così gli scambi di dati in entrata e in uscita.
2. **Indirizzi IP di Interconnessione**: questi indirizzi permettono ai tuoi gateway di indirizzare il traffico verso la rete specifica di Cloud Temple, assicurando una connessione sicura ed efficiente.

Gli indirizzi IP pubblici permettono l'accesso a Internet, mentre gli indirizzi IP di interconnessione utilizzati con il protocollo BGP4 assicurano connessioni sicure tra reti. Questi ultimi facilitano scambi affidabili e sicuri tra il tuo tenant e la rete Cloud Temple. L'uso congiunto di questi indirizzi migliora la gestione del traffico e potenzia la sicurezza e le prestazioni della rete.

Ecco l'interfaccia principale per la gestione degli indirizzi IP:

<img src={shivaInet_001} />

La scheda di accoglienza corrisponde al tuo ASN interno dedicato al tuo tenant. Indica tra l'altro le informazioni importanti per la configurazione della tua connettività BGP.

### Indirizzi IP pubblici

È possibile visualizzare e commentare i blocchi e gli indirizzi IP associati al tuo tenant tramite l'IPAM integrato nella console Cloud Temple:

<img src={shivaInet_002} />

L'ordine degli indirizzi IP pubblici si effettua tramite il pulsante **'Ordinare IP pubblici'** :

<img src={shivaInet_003} />

La prenotazione e l'assegnazione di un indirizzo IP si fanno tramite il pulsante **'Prenotare un indirizzo'** :

<img src={shivaInet_004} />

La modifica o la cancellazione della prenotazione tramite i pulsanti **'Azioni'** :

<img src={shivaInet_005} />

Eliminare una prenotazione significa che la risorsa diventa disponibile per un altro uso, ma resta allocata e fatturata al cliente.

Su alcune righe, il pulsante **'Azione'** non è disponibile, indicando che gli indirizzi IP sono riservati e quindi non disponibili per un utilizzo.

### Indirizzi IP di interconnessione

Allo stesso modo, puoi vedere e commentare i blocchi di indirizzi IP di interconnessione. Puoi visualizzare le sottoreti di interconnessione con la rete Cloud Temple e il loro uso:

<img src={shivaInet_008} />

Puoi facilmente modificare, come per gli indirizzi pubblici, il loro uso nella gestione IPAM integrata:

<img src={shivaInet_007} />
