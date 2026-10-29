---
title: Concetti
---

<a id="deux-options-sont-possibles"></a>

## Presentazione

L'Housing Cloud Temple ospita le vostre apparecchiature fisiche (server, appliance di rete, apparati dell'operatore) in datacenter sicuri. Sono disponibili due opzioni:

- **hosting condiviso a 'U'**, in un rack condiviso tra più clienti;
- **hosting dedicato per rack**, di almeno 42 'U', riservato alla vostra organizzazione.

L'offerta comprende la connettività di rete verso le vostre apparecchiature e servizi di assistenza in datacenter.

:::info
L'Housing è ospitato in una zona non SecNumCloud.
:::

### Destinatari e casi d'uso

- **Apparecchiature fisiche legacy**: hosting di server che non possono essere virtualizzati.
- **Appliance di rete e di sicurezza**: firewall e apparati di rete in prossimità delle vostre risorse cloud.
- **Connessione dell'operatore**: ricezione di un collegamento dell'operatore nella Meet Me Room.
- **Transizione verso il cloud**: hosting temporaneo durante una migrazione progressiva.
- **Vincoli normativi**: apparecchiature che devono rimanere fisicamente separate.
- **Ripristino dell'attività**: sito di soccorso per apparecchiature critiche.

## Vantaggi

| Vantaggio                | Descrizione                                                                                                       |
|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| Sicurezza fisica         | Le apparecchiature sono ospitate in datacenter sorvegliati 24/7, con un controllo degli accessi rigoroso.         |
| Libertà di configurazione | Scegliete e configurate l'hardware in base alle vostre esigenze.                                                 |
| Spazio dedicato          | Il rack dedicato offre uno spazio privato, senza condivisione con altri clienti.                                  |
| Supporto in loco         | I tecnici del datacenter intervengono per vostro conto, senza che dobbiate spostarvi.                             |
| Prossimità al cloud      | Le apparecchiature ospitate possono essere collegate agli altri prodotti Cloud Temple.                            |

## Funzionalità

| Funzionalità                     | Descrizione                                                                         |
|----------------------------------|-------------------------------------------------------------------------------------|
| Hosting condiviso                | A partire da 1 'U' e 150 W, per appliance o server.                                 |
| Rack dedicato                    | Rack da 42 'U' con 3 kW di energia, estendibile per incrementi di 2 kW.             |
| Alimentazione ridondante         | Due catene elettriche indipendenti.                                                 |
| Connettività di rete             | Porte in rame o in fibra, fino a 10 Gbps.                                           |
| Meet Me Room                     | Ricezione di un collegamento privato dell'operatore a 1 Gbps o 10 Gbps.             |
| Servizi Hands & Eyes             | Interventi puntuali dei tecnici del datacenter.                                     |
| Servizi di ingegnere datacenter  | Installazione in rack, cablaggio e gestione delle connessioni (patch management).   |

### Ordini e richieste

Gli ordini Housing supportati sono accessibili nel modulo __Ordini (Order)__ della console Cloud Temple: prenotazione dello spazio, installazione e rimozione dal rack, assistenza tecnica, smart hands e cablaggio/scablaggio. Per le operazioni non supportate dalla console, contattate il supporto. La richiesta deve in particolare specificare:

- il nome della vostra organizzazione;
- il nome di un contatto, con il suo indirizzo e-mail e il suo numero di telefono, per finalizzare la configurazione;
- il nome del tenant;
- il tipo di hosting desiderato (condiviso a 'U' o dedicato per rack);
- la quantità desiderata;
- il tipo di apparecchiatura e le sue caratteristiche (dimensioni, peso, consumo energetico, dissipazione termica, ecc.).

Il team di supporto vi contatterà quindi per finalizzare la richiesta.

<a id="services-hands--eyes"></a>

### Servizi Hands & Eyes

I tecnici del datacenter possono intervenire per vostro conto, in particolare per:

- accompagnare un tecnico esterno preventivamente identificato;
- constatare lo stato di un'apparecchiatura (stato dei LED, stato di funzionamento, ecc.);
- scattare foto di un'apparecchiatura preventivamente identificata;
- premere un interruttore o riavviare un'apparecchiatura;
- collegare un terminale di accesso per una presa di controllo remota;
- sostituire un connettore senza modificare il cablaggio.

### Servizi di ingegnere datacenter

Un ingegnere datacenter può occuparsi di:

- l'installazione in rack, con le attrezzature di protezione e di sollevamento adeguate;
- il cablaggio, secondo il piano di cablaggio consegnato in precedenza;
- la modifica del cablaggio o lo spostamento di un'apparecchiatura esistente;
- l'assistenza alla connettività di rete dell'operatore.

Qualsiasi intervento sul cablaggio fisico (rete, alimentazione, fibra ottica) è eseguito esclusivamente dagli ingegneri datacenter. La configurazione software delle vostre apparecchiature resta sotto il vostro controllo.

| Servizio                              | Fascia oraria                                  | Tempo di intervento  | Tempo in caso di urgenza |
|---------------------------------------|------------------------------------------------|----------------------|------------------|
| Hands & Eyes                          | Orario lavorativo (8:00 – 19:00, dal lunedì al venerdì) | 2 ore       | 30 minuti        |
| Hands & Eyes                          | Fuori orario lavorativo (notte, fine settimana, festivi) | 2 giorni   | 2 ore            |
| Ingegnere datacenter                  | Orario lavorativo (8:00 – 19:00, dal lunedì al venerdì) | 2 giorni    | 4 ore            |

:::note
- Ogni richiesta passa per l'apertura di una pratica di intervento nella console.
- In caso di urgenza, chiamate la reperibilità dopo l'apertura della pratica.
- Ogni ora iniziata è dovuta.
:::

## Architettura

- **Infrastruttura**: alimentazione ridondante (due alimentazioni elettriche indipendenti), raffreddamento e climatizzazione controllati, sicurezza fisica multilivello.
- **Integrazioni**: connessione diretta ai prodotti Cloud Temple e Meet Me Room per le connessioni dell'operatore.

## Regioni e zone di disponibilità

L'Housing è disponibile nella regione FR1, su tre zone di disponibilità. I rack si trovano esclusivamente in Francia.

## Specifiche tecniche

### Hosting condiviso

L'hosting condiviso avviene in un rack condiviso tra diversi clienti. [La segmentazione](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) avviene a 'U' (unità rack). Un'unità rack misura 1,75 pollici (ossia 44,45 mm) di altezza. I rack di hosting condiviso dispongono di due catene elettriche distinte.

La massa massima delle apparecchiature è di 25 kg per 'U'. Oltre tale valore, occorre ordinare il numero di 'U' che consente di sostenere la massa totale dell'apparecchiatura: ad esempio, 2 'U' per un'apparecchiatura di 34 kg.

<a id="hébergement-dappliances-réseau-firewall-"></a>

#### Appliance (rete, firewall…)

Ogni unità rack può disporre di una o due prese elettriche di tipo C13, in base alle vostre esigenze. Ogni presa è limitata a 150 W a 220 V. Per un'apparecchiatura da 1.500 W su due alimentatori occorrono quindi 1.500 W / 150 W = 10 'U', ossia 5 'U' (750 W) per catena elettrica.

Il raffreddamento avviene dalla parte anteriore verso la parte posteriore del rack, e __l'appliance riceve la connettività di rete sul lato anteriore del rack.__

#### Hosting di server

Le unità dedicate ai server (2 'U', 400 W o 800 W su due prese C19) sono adatte alla dissipazione termica dei server e __forniscono la connettività di rete sul lato posteriore__, il che semplifica la manutenzione e ottimizza il raffreddamento del rack. __Sono obbligatorie per i server.__

### Hosting dedicato

Il rack dedicato è installato in una zona di hosting condiviso al di fuori di SecNumCloud.

| Parametro            | Valore                                                                  |
|----------------------|-------------------------------------------------------------------------|
| Dimensioni           | 42 'U' minimo; profondità 1.200 mm, di cui 1.000 mm utili; larghezza 600 mm |
| Energia              | 3 kW inclusi su due catene elettriche da 16 A, estendibile per incrementi di 2 kW |
| Massa massima        | 1.000 kg per rack                                                       |
| Distribuzione        | Una PDU (unità di distribuzione dell'energia) monitorata per catena elettrica |
| Dotazione            | Raffreddamento e porte protette sul lato anteriore e posteriore         |

<a id="connectivité-réseau-pour-lhébergement-physique"></a>

### Connettività di rete

La connettività di rete si sottoscrive in aggiunta all'hosting, per tipo di porta e larghezza di banda desiderata:

- rame 100 Mbps o 1 Gbps;
- fibra 1 Gbps o 10 Gbps, tramite un modulo SFP fornito per la connettività lato Cloud Temple.

Una connettività nella Meet Me Room consente inoltre di ricevere il vostro collegamento dell'operatore. È necessariamente in fibra ottica, a 1 Gbps o 10 Gbps.

### Limiti

- Massa massima di 25 kg per 'U' in hosting condiviso, e di 1.000 kg per rack dedicato.
- Potenza di 150 W per presa in hosting condiviso di appliance.
- Profondità utile di 1.000 mm in un rack dedicato.

## Sicurezza e conformità

L'Housing è certificato HDS e ISO 27001. È ospitato in una zona non SecNumCloud.

- **Controllo degli accessi fisici**: accesso rigoroso, sorveglianza 24/7 e tracciabilità completa degli interventi.
- **Accesso accompagnato**: ogni visita in loco avviene su appuntamento, accompagnata da un tecnico del datacenter.
- **Cifratura**: la cifratura delle apparecchiature ospitate è di vostra responsabilità. Il servizio garantisce la sicurezza fisica dei locali.

## Disponibilità del servizio

| Elemento                | Obiettivo di disponibilità, misurato su un mese |
|-------------------------|-----------------------------------------------|
| Alimentazione elettrica | 100%                                          |
| Raffreddamento          | 100%                                          |

## Reversibilità

Al termine del servizio, le vostre apparecchiature vi vengono restituite:

| Operazione                | Deliverable        | Tempistica | Costo     |
|---------------------------|--------------------|-----------|-----------|
| Recupero dell'hardware    | Hardware del cliente | 15 giorni | Senza costi |
| Assistenza al trasloco    | Supporto logistico | Su richiesta | Su preventivo |

## Prezzi

L'hosting è sottoscritto con un impegno minimo di 12 mesi. I prezzi e le durate di impegno di ciascuna opzione sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[Housing — prezzi](https://www.cloud-temple.com/produits/housing-espace-dedie/).
