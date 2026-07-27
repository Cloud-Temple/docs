---
title: Concetti
---

## Due opzioni sono possibili

- __ospitamento fisico a 'U'__ in rack condiviso e spazio condiviso,
- __ospitamento dedicato per rack__ di almeno 42 'U' in spazio condiviso.

La richiesta di ospitamento fisico viene effettuata tramite __una richiesta di servizio__ che indica:

    Il nome della vostra Organizzazione
    Il nome di un referente con la sua email e il numero di telefono per finalizzare la configurazione
    Il nome del tenant
    il tipo di ospitamento desiderato (condiviso a 'U' o dedicato al rack)
    La quantità desiderata
    Il tipo di attrezzatura e le sue caratteristiche (dimensioni, peso, consumo energetico, dissipazione termica, ...)

Il team di supporto Cloud Temple vi contatterà per finalizzare la richiesta.

## Hosting condiviso

### Collocamento di appliance (rete, firewall, ...)

Il collocamento condiviso avviene in un rack condiviso tra diversi clienti Cloud Temple. [La segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) avviene in 'U' (unità di rack).
Un'unità di rack misura 1,75 pollici (cioè 44,45 mm) di altezza. I rack di collocamento condiviso dispongono di due linee elettriche distinte.

La massa massima delle apparecchiature per ogni unità 'U' è di 25 kg. Oltre tale limite, è necessario ordinare il numero di 'U' necessario per sostenere il peso totale della vostra apparecchiatura.

Ad esempio, per un'attrezzatura di 34 kg, è necessario sottoscrivere 2 unità di rack.

Per ogni unità di rack è possibile richiedere una o due prese elettriche di tipo C13 in base alle vostre esigenze.

Ogni presa elettrica è limitata a 150 W a 220 V per ogni 'U'.

Se desiderate che la vostra apparecchiatura disponga di una potenza di 1500 W, su due alimentazioni, è necessario richiedere

1500 W / 150 W = 10 'U', ovvero 5 'U' (ou 750 W) per linea elettrica.

La connettività di rete va sottoscritta in parallelo in base al tipo di porta previsto e alla larghezza di banda desiderata; ecco le opzioni possibili per porta di rete:

- Rame 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

Per queste unità operative, il raffreddamento avviene necessariamente dalla parte anteriore del rack verso quella posteriore, e __l'appliance riceve la connettività di rete dalla parte anteriore del rack.__

__*Nota:*__ *l'impegno minimo è di 12 mesi.*

| Riferimento                                          | Unità | SKU                                    | Impegno |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| COLLOCAMENTO IN RACK - 1 U Condiviso - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 mesi    |
| COLLOCAMENTO IN RACK - 1 U Condiviso - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 mesi    |

### Alloggiamento di server

Le unità di servizio __'Server'__ sono progettate per adattarsi alla dissipazione termica dei server e __forniscono connettività di rete posteriore__, semplificando le operazioni di manutenzione e ottimizzando così il raffreddamento del rack.

__Sono obbligatorie per i server.__

| Riferimento                                                    | Unità | SKU                                        | Impegno |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| ALLOGGIAMENTO IN RACK - 1 U Condiviso - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 mesi    |
| ALLOGGIAMENTO IN RACK - 1 U Condiviso - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 mesi    |

## Hosting dedicato

L'hosting in rack dedicato si effettua in una zona di hosting condiviso esterna a secnumcloud. Il rack di hosting dedicato ha una dimensione minima di 42 'U' o 42 unità di rack.
La profondità è di 1200 millimetri, di cui 1000 millimetri utilizzabili dalle apparecchiature. La larghezza è di 600 millimetri.

Viene fornito con il raffreddamento necessario, porte blindate anteriori e posteriori e 3 Kw di energia su 2 circuiti elettrici da 16 ampere ciascuno.

È possibile richiedere incrementi di energia aggiuntivi da 2 Kw. __La massa massima delle apparecchiature integrabili nel rack dedicato è di 1000 kg__.

Il rack è dotato di 'PDU' (unità di distribuzione dell'energia) adatti alla potenza sottoscritta e monitorati. C'è un 'PDU' per ogni circuito elettrico.

| Riferimento                                                    | Unità      | SKU                                        | Impegno |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| HOSTING IN RACK - Rack 42 U Dedicato incluso 3 Kw di energia | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 mesi    |
| ENERGIA - 2 Kw supplementari                                | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 mesi    |

### Connettività di rete per l'hosting fisico

La connettività di rete va sottoscritta in aggiunta all'hosting fisico in base al tipo di porta previsto e alla banda passante desiderata. Ecco le opzioni disponibili per porta di rete:

- Rame 1 Gbps,
- Fibra 1 Gbps/10 Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

È inoltre possibile richiedere una connettività nell'area meet me room dei vari datacenter per ricevere la connettività del proprio operatore.
Questa connettività è necessariamente in fibra ottica con velocità di 1 Gbps o 10 Gbps.

| Riferimento                                                              | Unità     | SKU                                    | Impegno    |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| RETE - 1 porta - 1 Gbps - fibra o rame                                 | 1 porta   | csp:(region):hosting:shared:port1g:v1  | 36 mesi    |
| RETE - 1 porta - 10 Gbps - fibra                                       | 1 porta   | csp:(region):hosting:shared:port10g:v1 | 36 mesi    |
| RETE - Connessione link privato in meet me room di un'AZ - 1 porta 1 Gbps  | 1 pacchetto | csp:(region):hosting:mmr:v1:1g         | 36 mesi    |
| RETE - Connessione link privato in meet me room di un'AZ - 1 porta 10 Gbps | 1 pacchetto | csp:(region):hosting:mmr:v1:10g        | 36 mesi    |

### Servizi 'Hands & Eyes'

In aggiunta ai servizi di hosting fisico e di connettività di rete, è possibile richiedere servizi professionali di assistenza per il proprio hosting fisico.

Vengono eseguiti dai tecnici del datacenter o dagli ingegneri Cloud Temple specializzati in datacenter.

Di seguito sono riportate le principali unità di lavoro 'Hands & Eyes' disponibili. Hanno lo scopo di gestire le seguenti attività :

- Accompagnamento di un tecnico esterno precedentemente identificato,
- Verifica dello stato di un dispositivo (état des LEDS, état de fonctionnement, ...),
- Scatto di foto di un dispositivo del cliente precedentemente identificato,
- Pressione di un pulsante di alimentazione,
- Riavvio del dispositivo,
- Collegamento di un terminale di accesso per il controllo remoto,
- Sostituzione di una connettica senza modifiche al cablaggio.

| Riferimento                                                                               | Unità   | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hand's & Eyes datacenter - Ore lavorative (8h - 19h; Lundi au vendredi)                 | 1 ora | csp:(region):hosting:ho:std:v1   | 2 ore   |
| Hand's & Eyes datacenter - Ore lavorative (8h - 19h; Lundi au vendredi) - URGENT        | 1 ora | csp:(region):hosting:ho:fast:v1  | 30 minuti |
| Hand's & Eyes datacenter - Ore non lavorative (nuit, week end et jours fériés)          | 1 ora | csp:(region):hosting:hno:std:v1  | 2 giorni    |
| Hand's & Eyes datacenter - Ore non lavorative (nuit, week end et jours fériés) - URGENT | 1 ora | csp:(region):hosting:hno:fast:v1 | 2 ore   |

È inoltre possibile avvalersi di un ingegnere datacenter Cloud Temple per gestire le seguenti attività :

- Rackizzazione (avec les équipements de protection et de levage adaptés),
- Cablaggio (suivant le plan de câblage préalablement remis),
- Modifica del cablaggio o spostamento di un dispositivo esistente,
- Assistenza alla connettività di rete dell'operatore.

| Riferimento                                                                    | Unità  | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Ingegnere Datacenter - Ore lavorative (8h - 19h; Lundi au vendredi)          | 1 intervento | csp:(region):hosting:ho:std:v1  | 2 giorni  |
| Ingegnere Datacenter - Ore lavorative (8h - 19h; Lundi au vendredi) - URGENT | 1 intervento | csp:(region):hosting:ho:fast:v1 | 4 ore |

__Nota :__

- *Ogni richiesta deve passare attraverso l'apertura di un ticket di intervento nella console Cloud Temple*,
- *In caso di richiesta urgente, contattare il servizio di guardia dopo aver aperto il ticket di intervento nella console Cloud Temple*,
- *Ogni ora iniziata è dovuta.*