---
title: Concetti
---

## Due opzioni sono possibili

- __ospitamento fisico per 'U'__ in armadio condiviso e spazio condiviso,
- __ospitamento dedicato per rack__ di almeno 42 'U' in spazio condiviso.

I servizi Housing supportati sono accessibili nel modulo __Ordini (Order)__ della console Cloud Temple: prenotazione dello spazio, installazione e rimozione, assistenza tecnica, smart hands e cablaggio/scollegamento. Per le operazioni non supportate dalla console, contattare il supporto. La richiesta deve in particolare specificare:

    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e n° di telefono per finalizzare la configurazione
    Il nome del tenant
    il tipo di ospitamento desiderato (condiviso per 'U' o dedicato al rack)
    La quantità desiderata
    Il tipo di attrezzatura e le sue caratteristiche (dimensioni, peso, consumo energetico, dissipazione termica, ...)

Il team di supporto Cloud Temple prenderà contatto con voi per finalizzare la richiesta.

## Hosting condiviso

### Hosting di appliance (rete, firewall, ...)

L'hosting condiviso avviene in un rack condiviso tra diversi clienti Cloud Temple. [La segmentazione](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) avviene a livello di 'U' (unità di rack).
Un'unità di rack misura 1,75 pollici (cioè 44,45 mm) di altezza. I rack per hosting condiviso dispongono di due linee elettriche distinte.

Il peso massimo delle apparecchiature per ogni unità di 'U' è di 25 kg. Superiore a questo valore, è necessario richiedere il numero di 'U' necessario a sostenere il peso totale della propria apparecchiatura.

Ad esempio, per un'apparecchiatura di 34 kg, è necessario sottoscrivere 2 unità di rack.

È possibile richiedere per ogni unità di rack una o due prese elettriche di tipo C13 in base alle proprie esigenze.

Ogni presa elettrica è limitata a 150 W a 220 V per ogni 'U'.

Se si desidera che la propria apparecchiatura disponga di una potenza di 1500 W su due alimentazioni, è necessario richiedere

1500 W / 150 W = 10 'U', ovvero 5 'U' (o 750 W) per linea elettrica.

La connettività di rete deve essere sottoscritta parallelamente in base al tipo di porta prevista e alla banda larga desiderata; di seguito le opzioni possibili per ogni porta di rete :

- Rame `100MBps/1Gbps`,
- Fibra 1Gbps/10Gbps tramite un modulo SFP fornito per la connettività lato Cloud Temple.

Per queste unità operative, il raffreddamento avviene necessariamente dalla parte anteriore del rack verso quella posteriore, e __l'appliance riceve la propria connettività di rete dalla parte anteriore del rack.__

__*Nota:*__ *l'impegno minimo è di 12 mesi.*

| Riferimento                                          | Unità | SKU                                    | Impegno |
| -------------------------------------------------- | ----- | -------------------------------------- | -------- |
| HOSTING IN RACK - 1 U Condiviso - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 mesi    |
| HOSTING IN RACK - 1 U Condiviso - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 mesi    |

### Hosting di server

Le unità di opere __'Server'__ sono progettate per adattarsi alla dissipazione termica dei server e __forniscono connettività di rete sul retro__, semplificando le operazioni di manutenzione e ottimizzando così il raffreddamento del rack.

__Sono obbligatorie per i server.__

| Riferimento                                                    | Unità | SKU                                        | Impegno |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | -------- |
| HOSTING IN RACK - 1 U Condiviso - Server - 400 W (2 C19)     | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 mesi  |
| HOSTING IN RACK - 1 U Condiviso - Server - 800 W (2 C19)     | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 mesi  |

## Hosting dedicato

L'hosting in rack dedicato avviene in una zona di hosting mutualizzato al di fuori di secnumcloud. Il rack di hosting dedicato ha una dimensione minima di 42 'U' o 42 unità di rack.
La profondità è di 1200 millimetri, di cui 1000 millimetri utilizzabili dalle apparecchiature. La larghezza è di 600 millimetri.

Viene fornito con il raffreddamento necessario, le porte anteriori e posteriori sicure e 3 kW di energia su 2 linee elettriche da 16 ampere ciascuna.

È possibile richiedere incrementi di energia aggiuntivi da 2 kW. __Il peso massimo delle apparecchiature integrabili nel rack dedicato è di 1000 kg__.

L'armadio è dotato di 'PDU' (unità di distribuzione dell'energia) adeguati alla potenza sottoscritta e monitorati. È presente un 'PDU' per ogni linea elettrica.

| Riferimento                                                    | Unità      | SKU                                        | Impegno |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | -------- |
| HOSTING IN ARMADIO - Rack 42U Dedicato includente 3kW di energia | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 mesi  |
| ENERGIA - 2 kW aggiuntivo                                    | 2 kW       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 mesi  |

### Connettività di rete per l'hosting fisico

La connettività di rete va sottoscritta in aggiunta all'hosting fisico in base al tipo di porta attesa e alla banda passante desiderata, di seguito le opzioni possibili per porta di rete:

- Rame 1 Gbps,
- Fibra 1 Gbps/10 Gbps tramite modulo SFP fornito per la connettività lato Cloud Temple.

È inoltre possibile richiedere una connettività nella zona meet me room dei diversi data center per ricevere la propria connettività di operatore.
Questa connettività deve essere necessariamente in fibra ottica con velocità di 1 Gbps o 10 Gbps.

| Riferimento                                                              | Unità     | SKU                                    | Impegno |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| RETE - 1 porta - 1 Gbps - fibra o rame                             | 1 porta    | csp:(region):hosting:shared:port1g:v1  | 36 mesi    |
| RETE - 1 porta - 10 Gbps - fibra                                      | 1 porta    | csp:(region):hosting:shared:port10g:v1 | 36 mesi    |
| RETE - Connessione link privato in meet me room di una AZ - 1 porta 1 Gbps  | 1 pacchetto | csp:(region):hosting:mmr:v1:1g         | 36 mesi    |
| RETE - Connessione link privato in meet me room di una AZ - 1 porta 10 Gbps | 1 pacchetto | csp:(region):hosting:mmr:v1:10g        | 36 mesi    |

### Servizi 'Hands & Eyes'

In aggiunta ai servizi di hosting fisico e connettività di rete, è possibile richiedere servizi professionali di assistenza per il proprio hosting fisico.

Sono gestiti dai tecnici del datacenter o dagli ingegneri Cloud Temple specializzati in datacenter.

Di seguito le principali unità di lavoro 'Hands & Eyes' disponibili. Sono finalizzate a gestire le seguenti attività:

- Accompagnamento di un tecnico esterno previamente identificato,
- Verifica dello stato di un'attrezzatura (état des LEDS, état de fonctionnement, ...),
- Scatto di foto di un'attrezzatura cliente previamente identificata,
- Pressione di un interruttore,
- Riavvio dell'attrezzatura,
- Collegamento di un terminale di accesso per il controllo remoto,
- Sostituzione di un connettore senza modifica del cablaggio.

| Riferimento                                                                               | Unità   | SKU                              | Tempo di intervento |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hand's & Eyes datacenter - Heures ouvrées (8h - 19h; Lundi au vendredi)                 | 1 ora | csp:(region):hosting:ho:std:v1   | 2 ore   |
| Hand's & Eyes datacenter - Heures ouvrées (8h - 19h; Lundi au vendredi) - URGENT        | 1 ora | csp:(region):hosting:ho:fast:v1  | 30 minuti |
| Hand's & Eyes datacenter - Heures non ouvrées (nuit, week end et jours fériés)          | 1 ora | csp:(region):hosting:hno:std:v1  | 2 giorni    |
| Hand's & Eyes datacenter - Heures non ouvrées (nuit, week end et jours fériés) - URGENT | 1 ora | csp:(region):hosting:hno:fast:v1 | 2 ore   |

È inoltre possibile usufruire di un ingegnere datacenter Cloud Temple per gestire le seguenti attività:

- Rackizzazione (avec les équipements de protection et de levage adaptés),
- Cablaggio (suivant le plan de câblage préalablement remis),
- Modifica del cablaggio o spostamento di un'attrezzatura esistente,
- Assistenza per la connettività di rete dell'operatore.

| Riferimento                                                                    | Unità  | SKU                             | Tempo di intervento |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Ingénieur Datacenter - Heures ouvrées (8h - 19h; Lundi au vendredi)          | 1 intervento | csp:(region):hosting:ho:std:v1  | 2 giorni  |
| Ingénieur Datacenter - Heures ouvrées (8h - 19h; Lundi au vendredi) - URGENT | 1 intervento | csp:(region):hosting:ho:fast:v1 | 4 ore |

__Nota :__

- *Ogni richiesta deve avvenire tramite l'apertura di un ticket di intervento nella console Cloud Temple*,
- *In caso di richiesta urgente, chiamare il servizio di reperibilità dopo l'apertura del ticket di intervento nella console Cloud Temple*,
- *Ogni ora iniziata è dovuta.*