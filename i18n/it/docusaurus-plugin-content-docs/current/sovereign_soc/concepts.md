---
title: Concetti
---

## Presentazione

Il Sovereign SOC è un servizio gestito di cybersorveglianza. Assicura la raccolta, l'analisi e la qualificazione degli eventi di sicurezza dei vostri sistemi informativi, che siano ospitati sul Cloud di fiducia o in un altro ambiente. Il servizio è end-to-end: include la piattaforma tecnica di rilevamento, l'analisi automatizzata e la validazione umana 24/7 da parte di un team di analisti della sicurezza. Ricevete soltanto ticket di incidenti qualificati, accompagnati da un piano di remediation monitorato.

### Una qualificazione a imbuto

Ogni evento di sicurezza attraversa tre livelli di analisi successivi, in modo da coinvolgere i vostri team solo per incidenti accertati:

1. **Rilevamento automatico**: analisi in tempo reale dei log raccolti, tramite corrispondenza con regole di rilevamento (pattern matching).
2. **Pre-qualificazione tramite IA**: modelli di intelligenza artificiale arricchiscono gli alert in relazione alle minacce e alle vulnerabilità note, ed escludono i falsi positivi evidenti.
3. **Validazione umana**: un analista del SOC qualifica l'incidente prima dell'emissione del ticket, quindi monitora la remediation.

### Sovereign SOC o SIEM

Un SIEM (Security Information and Event Management) è la piattaforma tecnica che raccoglie, correla e conserva i log. Il Sovereign SOC include questa piattaforma, ma anche l'analisi e la qualificazione degli alert da parte di analisti. Se disponete già di un team SOC interno e cercate soltanto una piattaforma di raccolta e correlazione, un SIEM gestito da voi stessi o da terzi risponde a questa esigenza.

### Destinatari e casi d'uso

Il servizio si rivolge ai CIO e ai CISO che desiderano esternalizzare la sorveglianza della sicurezza senza costituire un SOC interno, ai team operativi che ricevono i ticket di incidenti e ai responsabili della conformità che hanno bisogno di centralizzare le tracce di audit. Casi d'uso tipici:

- **Rilevamento delle intrusioni**: tentativi di accesso illegittimi, compromissioni di account, escalation di privilegi. Ad esempio, una connessione anomala al di fuori dell'orario lavorativo viene verificata da un analista (assenza di un intervento di manutenzione pianificato), che vi avvisa per il blocco.
- **Rilevamento dei ransomware**: comportamenti di cifratura massiva di file e comunicazioni sospette verso server di comando e controllo (C2).
- **Sorveglianza dell'infrastruttura**: flussi di rete anomali e modifiche critiche della configurazione.
- **Tracciabilità**: centralizzazione delle tracce di audit dei vostri sistemi.

## Vantaggi

| Vantaggio                  | Descrizione                                                                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Sovranità                  | I dati raccolti sono ospitati in Francia e gli analisti del SOC hanno sede in Francia.                                                             |
| Sorveglianza continua      | Gli alert vengono trattati 24 ore su 24, 7 giorni su 7, tutto l'anno.                                                                              |
| Alert qualificati          | La combinazione dell'analisi automatizzata e della validazione umana limita il coinvolgimento dei vostri team agli incidenti confermati.          |
| Modello in abbonamento     | Il servizio viene sottoscritto in abbonamento, senza investimento iniziale in una piattaforma di rilevamento né in un team dedicato.                |
| Attivazione rapida         | L'architettura di raccolta e di elaborazione è pre-provisionata.                                                                                   |
| Coordinamento dei team     | Quando i vostri sistemi sono ospitati sul Cloud di fiducia, i team cloud e sicurezza si coordinano sulla gestione delle modifiche, degli asset e degli incidenti. |

## Funzionalità

| Funzionalità                    | Descrizione                                                                                                                       |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Catalogo delle sorgenti di log  | Raccolta dei log delle principali tecnologie dei vostri sistemi informativi.                                                      |
| Regole di rilevamento           | Catalogo di regole collaudate che coprono le principali tecniche di attacco, documentate secondo il framework MITRE ATT&CK.       |
| Pre-qualificazione tramite IA   | Qualificazione automatizzata di primo livello, per escludere i falsi positivi e arricchire l'analisi degli alert.                 |
| Competenza umana 24/7           | Validazione degli alert critici da parte di un analista del SOC, proposta e monitoraggio di un piano di remediation.              |
| Segregazione dei dati           | Isolamento logico rigoroso dei dati di ciascun cliente.                                                                           |
| Ticketing                       | Creazione automatica di un ticket per ogni incidente confermato.                                                                  |
| Notifiche                       | Invio degli alert qualificati via e-mail ai contatti da voi designati.                                                            |
| Portale clienti                 | Accesso ai ticket, alle dashboard, al registro delle regole di rilevamento e ai deliverable del servizio.                         |
| Monitoraggio mensile            | Dashboard mensile: revisione dei ticket, evoluzione del perimetro sorvegliato, registro delle regole di rilevamento implementate.  |

## Architettura

### Flusso dei dati

1. **Raccolta**: i log vengono raccolti in base alla natura di ciascuna sorgente, tramite un agente di inoltro (forwarder) installato sulla vostra infrastruttura o tramite chiamata API.
2. **Trasporto**: i log transitano attraverso un tunnel VPN IPsec verso l'enclave di raccolta del SOC.
3. **Elaborazione**: una piattaforma condivisa di raccolta e analisi applica le regole di rilevamento, integrata da un modulo di analisi tramite IA. I dati di ciascun cliente vi sono logicamente segregati.
4. **Gestione operativa**: gli analisti del SOC trattano gli alert da una console di gestione dedicata, quindi emettono i ticket di incidenti.

### Integrazioni

- **Notifiche**: alert qualificati inviati via e-mail ai contatti designati.
- **Portale clienti**: monitoraggio degli incidenti nello strumento di ticketing del servizio.
- **Strumenti ITSM di terze parti**: l'interfacciamento con i vostri strumenti di gestione dei servizi IT può essere valutato caso per caso.

### Organizzazione della risposta agli incidenti

Una procedura di gestione degli incidenti di sicurezza viene redatta insieme a voi, associata a una matrice di escalation. Essa specifica i contatti, il modello operativo e il processo di trattamento degli incidenti.

## Regioni e zone di disponibilità

Il servizio è operato in Francia: tutti i dati raccolti restano sul territorio nazionale. I sistemi sorvegliati, invece, possono essere ospitati sul Cloud di fiducia, su un cloud di terze parti oppure on-premise, purché i loro log possano essere instradati fino all'enclave di raccolta.

## Specifiche tecniche

| Parametro                     | Valore                                                                                         |
|-------------------------------|------------------------------------------------------------------------------------------------|
| Raccolta                      | Agente di inoltro installato sulla vostra infrastruttura, o raccolta tramite API               |
| Trasporto                     | Tunnel VPN IPsec; protocolli di raccolta compatibili con TLS 1.3                               |
| Cifratura a riposo            | AES-256                                                                                        |
| Conservazione dei log         | 90 giorni; un'esigenza di conservazione specifica può essere presa in considerazione su richiesta |
| Metodo di rilevamento         | Corrispondenza di pattern (pattern matching), regole documentate secondo MITRE ATT&CK          |
| Fascia di supervisione        | 24/7, tutto l'anno                                                                             |

### Regole di rilevamento

Le regole di rilevamento incluse nel servizio vengono presentate e convalidate con voi durante la fase di build, in funzione del perimetro sorvegliato e dei log disponibili. Sono progettate per:

- coprire le minacce più probabili;
- applicarsi a un sistema informativo senza una messa a punto onerosa;
- disporre di una copertura MITRE ATT&CK documentata, con soglie e livelli di criticità proposti per impostazione predefinita. Queste soglie possono essere adattate a partire dall'elenco dei vostri asset sensibili.

Il ciclo di vita delle regole viene definito con voi per seguire l'evoluzione del perimetro, delle minacce, delle vulnerabilità e degli incidenti di sicurezza. Il monitoraggio mensile vi consente di conoscere le regole in vigore e i rischi coperti.

Si distinguono due tipi di nuove regole:

- **Regola semplice**: una sorgente di log e una condizione, ad esempio il rilevamento di un attacco di forza bruta su un'autenticazione.
- **Regola avanzata**: più condizioni, oppure un arricchimento tramite IA (threat intelligence, sensibilità degli asset).

### Fasi del servizio

1. **Sottoscrizione**: il perimetro del servizio e le opzioni scelte vengono definiti con voi; prendete visione dei prerequisiti a vostro carico.
2. **Build**: costruzione del servizio insieme a voi, implementazione della raccolta e delle regole di rilevamento, definizione dell'organizzazione della gestione degli incidenti tra i vostri team e il SOC.
3. **Pre-run**: periodo di un mese dedicato alla messa a punto delle regole di rilevamento. Al suo termine, può essere stabilito con voi un obiettivo di tasso di falsi positivi.
4. **Run**: sorveglianza attiva, notifiche ed escalation, definizione e monitoraggio dei piani di remediation, governance mensile, evoluzione delle sorgenti di log e delle regole di rilevamento.

### Opzioni

| Opzione                                             | Descrizione                                                                                                                                                                  |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Allineamento con la vostra analisi dei rischi       | Opzione del build. A partire dalla vostra analisi dei rischi di cybersicurezza, le regole di rilevamento e la criticità degli alert vengono allineate ai vostri rischi, durante un workshop congiunto. |
| Test di intrusione                                  | Opzione del run. Verifica della sicurezza di un'applicazione, oppure attivazione volontaria di regole di rilevamento per mettere alla prova end-to-end l'organizzazione predisposta. |
| Conservazione a freddo dei log                      | Archiviazione dei log a lungo termine, al di fuori dei sistemi di rilevamento, con protezione della loro integrità e riservatezza.                                            |

### Limiti

- Il servizio si basa sull'analisi dei log e sulla corrispondenza di pattern. Non include funzionalità avanzate di analisi comportamentale degli utenti e delle entità (UEBA), né la correlazione complessa tra più sorgenti.
- Il livello di falsi positivi dipende dal vostro contesto: qualità dei dati raccolti, esposizione del sistema informativo, rispetto delle buone pratiche da parte degli utenti e degli amministratori.

## Sicurezza e conformità

Il servizio e il relativo sistema informativo applicano misure di sicurezza tecniche e organizzative:

- **Hosting in Francia**: i dati raccolti e i modelli di IA che li analizzano sono ospitati in Francia.
- **Cifratura**: i dati sono cifrati in transito e a riposo.
- **Segregazione**: architettura segregata, isolamento logico dei dati di ciascun cliente.
- **Mantenimento in condizioni di sicurezza** dei componenti tecnici del servizio.
- **Misure organizzative**: carte d'uso del sistema informativo, di etica e di amministrazione, verifica dei precedenti, clausola di riservatezza e sensibilizzazione alla sicurezza per tutti i collaboratori del SOC.
- **Supervisione continua**: gli alert vengono trattati 24/7 da analisti con sede in Francia.

## Reversibilità

I dati raccolti (log) e le regole di rilevamento restano di vostra proprietà. Vi vengono restituiti su richiesta, in formati standard.

## Prezzi

Il Sovereign SOC è fatturato sotto forma di abbonamento fisso, integrato da una quota variabile calcolata sul volume medio giornaliero di log acquisiti; questa quota copre l'acquisizione, la conservazione per 90 giorni e l'analisi tramite IA. La messa in servizio (build) e le opzioni sono fatturate separatamente. I prezzi sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[Sovereign SOC — prezzi](https://www.cloud-temple.com/produits/sovereign-soc/).

## Buone pratiche

- Si raccomanda di far raccogliere dal SOC gli alert emessi dalle vostre soluzioni di sicurezza (xDR, firewall applicativo, IPS…), affinché vengano qualificati insieme al resto dei vostri eventi.
- Fornite l'elenco dei vostri asset sensibili: consente di adattare le soglie e la criticità degli alert.
- Gli accessi al portale clienti sono nominativi: spetta a voi effettuarne una revisione periodica.
