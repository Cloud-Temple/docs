---
title: Concepts
---

## Due opzioni sono possibili: 

- __hosting fisico in 'U'__ in armadio condiviso e spazio condiviso,
- __hosting dedicato per rack__ di almeno 42 'U' in spazio condiviso.

La richiesta di hosting fisico viene effettuata tramite __una richiesta di servizio__ che indica:

    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    il tipo di hosting desiderato (condiviso in 'U' o dedicato per rack)
    La quantità desiderata
    Il tipo di attrezzatura e le sue caratteristiche (dimensione, peso, consumo energetico, dissipazione termica, ...)

Il team di supporto Cloud Temple ti contatterà per finalizzare la richiesta.

## Hosting condiviso

### Hosting di appliances (rete, firewall, ...)

L'hosting condiviso avviene in un rack condiviso tra diversi clienti Cloud Temple. [La segmentazione](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) avviene a 'U' (unità di rack).
Un'unità di rack misura 1,75 pollici (ossia 44,45 mm) di altezza. I rack di hosting condiviso dispongono di due catene elettriche distinte.

Il peso massimo delle apparecchiature per ogni unità di 'U' è di 25kg. Oltre, è necessario ordinare il numero di 'U' che consente di sostenere il peso totale dell'apparecchiatura.

Ad esempio, per un'apparecchiatura di 34 kg, è necessario sottoscrivere 2 unità di rack.

È possibile per ogni unità di rack richiedere una o due prese elettriche tipo C13 in base alle proprie esigenze.

Ogni presa elettrica è limitata a 150W a 220V per ogni 'U'.

Se desideri che la tua apparecchiatura benefici di una potenza di 1500W, su due alimentatori, è necessario richiedere 

1500 W / 150 W = 10 'U', ossia 5 'U' (o 750 W) per catena elettrica.

La connettività di rete deve essere sottoscritta in parallelo per tipo di porta previsto e larghezza di banda desiderata, ecco le opzioni possibili per porta di rete:

- Rame 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

Per queste unità di lavoro, il raffreddamento avviene necessariamente dal lato anteriore della baia, verso il lato posteriore, e **l'appliance prende la sua connettività di rete dal lato anteriore della baia.**

__*Nota:*__ *l'impegno minimo è di 12 mesi.*

| Riferimento                                          | Unità | SKU                                    | Impegno    |
| ---------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| HOSTING IN BAIA - 1 U Condiviso - 150W (1 C13)       | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 mesi    |
| HOSTING IN BAIA - 1 U Condiviso - 300W (2 C13)       | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 mesi    |

### Hosting di server

Le unità di lavoro **'Server'** sono progettate per adattarsi alla dissipazione termica dei server e **offrono connettività di rete sul lato posteriore**, semplificando le operazioni di manutenzione e ottimizzando così il raffreddamento della baia.

**Sono obbligatorie per i server.**

| Riferimento                                                    | Unità | SKU                                        | Impegno    |
| -------------------------------------------------------------- | ----- | ------------------------------------------ | ---------- |
| HOSTING IN BAIA - 1 U Condiviso - Server - 400 W (2 C19)       | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 mesi    |
| HOSTING IN BAIA - 1 U Condiviso - Server - 800 W (2 C19)       | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 mesi    |


## Hosting dedicato

L'hosting in rack dedicato avviene in zona di hosting condiviso fuori secnumcloud. Il rack di hosting dedicato è di dimensioni di almeno 42 'U' o 42 unità di rack.
La profondità è di 1200 millimetri di cui 1000 millimetri utilizzabili dalle apparecchiature. La larghezza è di 600 millimetri.

È fornito con il raffreddamento necessario, porte anteriori e posteriori sicure e 3 Kw di energia su 2 catene elettriche di 16 ampere ciascuna.

È possibile richiedere ulteriori livelli di energia da 2Kw. __Il peso massimo delle apparecchiature integrabili nel rack dedicato è di 1000kg__.

La baia è dotata di 'PDU' (unità di distribuzione dell'energia) adatte alla potenza sottoscritta e monitorate. C'è una 'PDU' per catena elettrica.

| Riferimento                                                    | Unità      | SKU                                        | Impegno    |
| -------------------------------------------------------------- | ---------- | ------------------------------------------ | ---------- |
| HOSTING IN BAIA - Rack 42 U Dedicato includendo 3Kw di energia | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 mesi    |
| ENERGIA - 2 Kw supplementare                                   | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 mesi    |

### Connettività di rete per l'hosting fisico

La connettività di rete deve essere sottoscritta in aggiunta all'hosting fisico per tipo di porta prevista e larghezza di banda desiderata, ecco le opzioni possibili per porta di rete:

- Rame 1Gbps,
- Fibra 1Gbps/10Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

È inoltre possibile richiedere una connettività in zona meet me room dei vari datacenter per ricevere la tua connettività operatore.
Questa connettività è necessariamente in fibra ottica a velocità di 1Gbps o 10Gbps.

| Riferimento                                                              | Unità     | SKU                                    | Impegno    |
| ------------------------------------------------------------------------ | --------- | -------------------------------------- | ---------- |
| RETE - 1 porta - 1 Gbps - fibra o rame                                   | 1 porta   | csp:(region):hosting:shared:port1g:v1  | 36 mesi    |
| RETE - 1 porta - 10 Gbps - fibra                                         | 1 porta   | csp:(region):hosting:shared:port10g:v1 | 36 mesi    |
| RETE - Connessione link privato in meet me room di una AZ - 1 porta 1Gbps| 1 forfait | csp:(region):hosting:mmr:v1:1g         | 36 mesi    |
| RETE - Connessione link privato in meet me room di una AZ - 1 porta 10Gbps| 1 forfait | csp:(region):hosting:mmr:v1:10g        | 36 mesi    |

### Servizi 'Hands & Eyes'

In aggiunta ai servizi di hosting fisico e connettività di rete, è possibile richiedere servizi di assistenza professionale per il tuo hosting fisico.

Sono eseguiti dai tecnici del datacenter o dagli ingegneri di Cloud Temple specializzati in datacenter.

Ecco le principali unità di lavoro 'Hands & Eyes' disponibili. Puntano a trattare i seguenti temi: 

- Accompagnamento di un intervento esterno precedentemente identificato,
- Verifica dello stato di un'apparecchiatura (stato dei LED, stato di funzionamento, ...),
- Scattare foto di un'apparecchiatura cliente precedentemente identificata,
- Premere un contattore,
- Riavviare l'apparecchiatura,
- Collegare un terminale per accesso remoto,
- Sostituire un connettore senza modificare il cablaggio.

| Riferimento                                                                               | Unità   | SKU                              | GTI        |
| ----------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hands & Eyes datacenter - Orario d'ufficio (8h - 19h; Lunedì al venerdì)                  | 1 ora   | csp:(region):hosting:ho:std:v1   | 2 ore      |
| Hands & Eyes datacenter - Orario d'ufficio (8h - 19h; Lunedì al venerdì) - URGENT         | 1 ora   | csp:(region):hosting:ho:fast:v1  | 30 minuti  |
| Hands & Eyes datacenter - Orario non d'ufficio (notte, fine settimana e giorni festivi)   | 1 ora   | csp:(region):hosting:hno:std:v1  | 2 giorni   |
| Hands & Eyes datacenter - Orario non d'ufficio (notte, fine settimana e giorni festivi) - URGENT| 1 ora   | csp:(region):hosting:hno:fast:v1 | 2 ore      |

Puoi anche avvalerti di un ingegnere datacenter Cloud Temple per trattare i seguenti temi:

- Rackage (con attrezzature di protezione e sollevamento adeguate),
- Cablaggio (secondo il piano di cablaggio precedentemente fornito),
- Modifica del cablaggio o spostamento di un'apparecchiatura esistente,
- Assistenza alla connettività di rete operatore.

| Riferimento                                                                    | Unità  | SKU                             | GTI      |
| ------------------------------------------------------------------------------ | ------ | ------------------------------- | -------- |
| Ingegnere Datacenter - Orario d'ufficio (8h - 19h; Lunedì al venerdì)           | 1 attività | csp:(region):hosting:ho:std:v1  | 2 giorni  |
| Ingegnere Datacenter - Orario d'ufficio (8h - 19h; Lunedì al venerdì) - URGENT  | 1 attività | csp:(region):hosting:ho:fast:v1 | 4 ore    |

__Nota:__

- *Qualsiasi richiesta deve essere effettuata aprendo un ticket di intervento nella console Cloud Temple*,
- *In caso di richiesta urgente, chiamare il reperibile dopo aver aperto il ticket di intervento nella console Cloud Temple*,
- *Ogni ora iniziata è dovuta.*