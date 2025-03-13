---
title: Concetti
---

## Sono disponibili due opzioni

- __hosting fisico a 'U'__ in rack condiviso e spazio condiviso,
- __hosting dedicato per rack__ di minimo 42 'U' in spazio condiviso.

La richiesta di hosting fisico viene effettuata tramite __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Il tipo di hosting desiderato (condiviso a 'U' o dedicato a rack)
    La quantità desiderata
    Il tipo di apparecchiatura e le sue caratteristiche (dimensioni, peso, consumo energetico, dissipazione termica, ...)

Il team di supporto Cloud Temple vi contatterà per finalizzare la richiesta.

## Hosting condiviso

### Hosting di appliance (rete, firewall, ...)

L'hosting condiviso viene effettuato in un rack condiviso tra diversi clienti Cloud Temple. [La segmentazione](https://it.wikipedia.org/wiki/Unit%C3%A0_rack) viene fatta a 'U' (unità rack).
Un'unità rack misura 1,75 pollici (o 44,45 mm) di altezza. I rack di hosting condiviso dispongono di due catene elettriche distinte.

Il peso massimo delle apparecchiature per ogni unità 'U' è di 25 kg. Oltre questo peso, è necessario ordinare il numero di 'U' necessario per sostenere il peso totale della vostra apparecchiatura.

Ad esempio, per un'apparecchiatura di 34 kg, è necessario sottoscrivere 2 unità rack.

Per ogni unità rack, è possibile richiedere una o due prese elettriche di tipo C13 in base alle vostre esigenze.

Ogni presa elettrica è limitata a 150W a 220v per ogni 'U'.

Se desiderate che la vostra apparecchiatura abbia una potenza di 1500W, su due alimentazioni, è necessario richiedere:

1500 W / 150 W = 10 'U', ovvero 5 'U' (o 750 W) per catena elettrica.

La connettività di rete deve essere sottoscritta separatamente per tipo di porta richiesta e larghezza di banda desiderata. Ecco le opzioni possibili per porta di rete:

- Rame 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

Per queste unità di lavoro, il raffreddamento viene necessariamente effettuato dalla parte anteriore del rack verso la parte posteriore, e __l'appliance prende la sua connettività di rete dalla parte anteriore del rack.__

__*Nota:*__ *l'impegno minimo è di 12 mesi.*

| Riferimento                                          | Unità | SKU                                    | Impegno |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| HOSTING IN RACK - 1 U Condiviso - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 mesi    |
| HOSTING IN RACK - 1 U Condiviso - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 mesi    |

### Hosting di server

Le unità di lavoro __'Server'__ sono progettate per adattarsi alla dissipazione termica dei server e __forniscono connettività di rete nella parte posteriore__, semplificando le operazioni di manutenzione e ottimizzando così il raffreddamento del rack.

__Sono obbligatorie per i server.__

| Riferimento                                                    | Unità | SKU                                        | Impegno |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| HOSTING IN RACK - 1 U Condiviso - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 mesi    |
| HOSTING IN RACK - 1 U Condiviso - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 mesi    |

## Hosting dedicato

L'hosting in rack dedicato viene effettuato in una zona di hosting condiviso al di fuori di secnumcloud. Il rack di hosting dedicato ha una dimensione minima di 42 'U' o 42 unità rack.
La profondità è di 1200 millimetri, di cui 1000 millimetri utilizzabili dalle apparecchiature. La larghezza è di 600 millimetri.

Viene consegnato con il raffreddamento necessario, porte sicure anteriori e posteriori, e 3 kW di energia su 2 catene elettriche da 16 ampere ciascuna.

È possibile richiedere livelli di energia aggiuntivi in incrementi di 2 kW. __Il peso massimo delle apparecchiature integrabili nel rack dedicato è di 1000 kg__.

Il rack è dotato di 'PDU' (unità di distribuzione dell'energia) adattate alla potenza sottoscritta e monitorate. C'è una 'PDU' per catena elettrica.

| Riferimento                                                    | Unità      | SKU                                        | Impegno |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| HOSTING IN RACK - Rack 42 U Dedicato inclusi 3 kW di energia | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 mesi    |
| ENERGIA - 2 kW aggiuntivi                                | 2 kW       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 mesi    |

### Connettività di rete per l'hosting fisico

La connettività di rete deve essere sottoscritta in aggiunta all'hosting fisico per tipo di porta richiesta e larghezza di banda desiderata. Ecco le opzioni possibili per porta di rete:

- Rame 1Gbps,
- Fibra 1Gbps/10Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

È anche possibile richiedere la connettività nella zona meet-me room dei diversi datacenter per ricevere la vostra connettività operatore.
Questa connettività è necessariamente in fibra ottica a velocità di 1 Gbps o 10 Gbps.

| Riferimento                                                              | Unità     | SKU                                    | Impegno |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| RETE - 1 porta - 1 Gbps - fibra o rame                             | 1 porta    | csp:(region):hosting:shared:port1g:v1  | 36 mesi    |
| RETE - 1 porta - 10 Gbps - fibra                                      | 1 porta    | csp:(region):hosting:shared:port10g:v1 | 36 mesi    |
| RETE - Connessione link privato in meet-me room di una AZ - 1 porta 1Gbps  | 1 pacchetto | csp:(region):hosting:mmr:v1:1g         | 36 mesi    |
| RETE - Connessione link privato in meet-me room di una AZ - 1 porta 10Gbps | 1 pacchetto | csp:(region):hosting:mmr:v1:10g        | 36 mesi    |

### Servizi 'Hands & Eyes'

In aggiunta ai servizi di hosting fisico e connettività di rete, è possibile richiedere servizi professionali di assistenza per il vostro hosting fisico.

Sono operati da tecnici datacenter o da ingegneri Cloud Temple specializzati in datacenter.

Ecco le principali unità di lavoro 'Hands & Eyes' disponibili. Mirano a trattare i seguenti argomenti:

- Accompagnamento di un intervento esterno precedentemente identificato,
- Verifica dello stato di un'apparecchiatura (stato dei LED, stato di funzionamento, ...),
- Scattare foto di un'apparecchiatura cliente precedentemente identificata,
- Premere un interruttore,
- Riavviare l'apparecchiatura,
- Collegare un terminale di accesso per il controllo remoto,
- Sostituire connettori senza modificare il cablaggio.

| Riferimento                                                                               | Unità   | SKU                              | Tempo di risposta |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hand's & Eyes datacenter - Orario lavorativo (8h - 19h; Lunedì a venerdì)                 | 1 ora | csp:(region):hosting:ho:std:v1   | 2 ore   |
| Hand's & Eyes datacenter - Orario lavorativo (8h - 19h; Lunedì a venerdì) - URGENTE        | 1 ora | csp:(region):hosting:ho:fast:v1  | 30 minuti |
| Hand's & Eyes datacenter - Orario non lavorativo (notte, fine settimana e giorni festivi)          | 1 ora | csp:(region):hosting:hno:std:v1  | 2 giorni    |
| Hand's & Eyes datacenter - Orario non lavorativo (notte, fine settimana e giorni festivi) - URGENTE | 1 ora | csp:(region):hosting:hno:fast:v1 | 2 ore   |

Potete anche beneficiare di un ingegnere datacenter Cloud Temple per trattare i seguenti argomenti:

- Racking (con le attrezzature di protezione e sollevamento adeguate),
- Cablaggio (secondo il piano di cablaggio precedentemente consegnato),
- Modifica del cablaggio o spostamento di un'apparecchiatura esistente,
- Assistenza alla connettività di rete operatore.

| Riferimento                                                                    | Unità  | SKU                             | Tempo di risposta |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Ingegnere Datacenter - Orario lavorativo (8h - 19h; Lunedì a venerdì)          | 1 atto | csp:(region):hosting:ho:std:v1  | 2 giorni  |
| Ingegnere Datacenter - Orario lavorativo (8h - 19h; Lunedì a venerdì) - URGENTE | 1 atto | csp:(region):hosting:ho:fast:v1 | 4 ore |

__Nota:__

- *Ogni richiesta deve passare attraverso l'apertura di un fascicolo di intervento nella console Cloud Temple*,
- *In caso di richiesta urgente, chiamare il servizio di reperibilità dopo l'apertura del fascicolo di intervento nella console Cloud Temple*,
- *Ogni ora iniziata è dovuta.*
