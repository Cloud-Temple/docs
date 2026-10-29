---
title: Concetti
---

## Presentazione

Managed Firewall è un cluster di firewall di nuova generazione (NGFW) interamente gestito. Garantisce il filtraggio dei flussi nord-sud (tra Internet e le vostre risorse) ed est-ovest (tra i vostri segmenti interni), la prevenzione delle intrusioni, l'ispezione applicativa e la connettività VPN verso le vostre sedi remote e i vostri utenti in mobilità.

Il servizio è disponibile in due edizioni:

- **Edizione Stormshield**: soluzione di un produttore francese, adatta alle organizzazioni che ricercano la sovranità tecnologica sulla propria apparecchiatura di sicurezza;
- **Edizione Fortinet**: adatta alle organizzazioni che desiderano appoggiarsi all'ecosistema Fortinet (SD-WAN, ZTNA, Security Fabric) o integrarlo nelle proprie infrastrutture esistenti.

In entrambe le edizioni, il servizio comprende il cluster ad alta disponibilità Attivo/Passivo, la gestione operativa (mantenimento in condizioni operative, supervisione 24/7, aggiornamenti delle firme) e le funzioni VPN.

### Destinatari e casi d'uso

Managed Firewall si rivolge ai RSSI e ai team di sicurezza, alle direzioni dei sistemi informativi che estendono o sostituiscono un firewall on-premise e ai team DevOps che hanno bisogno di un firewall dedicato davanti ai propri cluster applicativi. Casi d'uso tipici:

- **Perimetro di sicurezza cloud**: filtraggio dei flussi in entrata e in uscita dalle vostre risorse (macchine virtuali, cluster Kubernetes, database).
- **VPN site-to-site (IPsec)**: interconnessione cifrata tra le vostre risorse cloud, i vostri datacenter on-premise, le vostre filiali e i vostri partner.
- **Accesso remoto (SSL-VPN)**: accesso cifrato e autenticato tramite MFA alle risorse interne per i collaboratori in mobilità.
- **Micro-segmentazione**: isolamento dei segmenti di rete (DMZ, produzione, sviluppo, database) con regole di filtraggio tra segmenti.
- **Ispezione applicativa e prevenzione delle intrusioni**: controllo delle applicazioni che attraversano il firewall e blocco dei tentativi di sfruttamento di vulnerabilità.
- **SD-WAN e ZTNA (edizione Fortinet)**: gestione di più collegamenti WAN con failover automatico e accesso applicativo basato sull'identità e sulla postura del terminale.

## Vantaggi

| Vantaggio                    | Descrizione                                                                                                                                              |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gestione operativa inclusa   | La distribuzione, l'alta disponibilità, gli aggiornamenti (sistema del firewall, firme IPS, database di URL) e la supervisione sono gestiti per voi.      |
| Scelta del produttore        | Scegliete l'edizione Stormshield o Fortinet in base ai vostri requisiti di sovranità e al vostro ecosistema esistente.                                   |
| Alta disponibilità           | Il cluster Attivo/Passivo commuta automaticamente sul secondo nodo in caso di guasto di un nodo.                                                         |
| Protezione multilivello      | Filtraggio L3/L4 con stato, controllo applicativo L7, IPS/IDS, filtraggio web e antivirus sono riuniti in un unico servizio.                             |
| VPN integrata                | VPN IPsec site-to-site e SSL-VPN sono incluse, senza infrastruttura VPN aggiuntiva.                                                                      |
| Threat intelligence          | Le firme IPS, i database di URL e gli indicatori di compromissione sono aggiornati automaticamente dalle fonti del produttore.                            |
| Scalabilità                  | Potete passare a un modello superiore senza riprogettare l'architettura, mantenendo la configurazione.                                                   |

## Funzionalità

### Funzionalità comuni alle due edizioni

| Funzionalità                       | Descrizione                                                                                                                                                  |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Firewall con stato (L3/L4)         | Filtraggio per indirizzo IP di origine e di destinazione, porta TCP/UDP e protocollo, con tracciamento dello stato delle sessioni.                          |
| Controllo applicativo (L7)         | Identificazione e controllo di oltre 3 000 applicazioni, indipendentemente dalla porta utilizzata: autorizzazione, blocco o limitazione per applicazione.    |
| Prevenzione delle intrusioni (IPS/IDS) | Rilevamento e blocco dei tentativi di sfruttamento di vulnerabilità: firme di attacchi, anomalie di protocollo, patch virtuali (virtual patching).        |
| Filtraggio web                     | Categorizzazione e filtraggio degli URL, blocco dei siti malevoli e di phishing, filtraggio DNS, applicazione di SafeSearch.                                 |
| Ispezione SSL/TLS                  | Decifratura e ispezione del traffico HTTPS/TLS, quindi nuova cifratura trasparente. Possono essere definite eccezioni (banche, sanità, certificati interni). |
| Antivirus                          | Analisi dei file in transito su HTTP, FTP, SMTP, IMAP e POP3.                                                                                                |
| VPN IPsec site-to-site             | Tunnel IKEv2 cifrati in AES-256-GCM con Perfect Forward Secrecy, autenticazione tramite certificati o chiave pre-condivisa, VPN basata su routing (VTI), Dead Peer Detection. |
| SSL-VPN                            | Accesso remoto in full tunnel o split tunnel, autenticazione MFA (TOTP con LDAP o Active Directory), portale web o client nativo.                            |
| Alta disponibilità                 | Cluster Attivo/Passivo con sincronizzazione delle sessioni e delle configurazioni e failover automatico.                                                     |
| NAT/PAT                            | Traduzione degli indirizzi di origine e di destinazione per esporre servizi in modo controllato e gestire i flussi Internet.                                 |
| Registrazione dei log              | Log dei flussi autorizzati e bloccati, degli eventi IPS, delle connessioni VPN e delle sessioni utente, esportabili verso un SIEM.                            |

### Funzionalità specifiche dell'edizione Fortinet

| Funzionalità                  | Descrizione                                                                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SD-WAN                        | Gestione di più collegamenti WAN con failover automatico, bilanciamento del carico per applicazione e monitoraggio della qualità dei collegamenti (perdita, latenza, jitter). |
| ZTNA                          | Accesso applicativo basato sull'identità dell'utente e sulla postura del terminale (FortiClient), con verifica continua della conformità del terminale.            |
| Virtual Domains (VDOM)        | Suddivisione del firewall in istanze logicamente isolate su uno stesso cluster, per separare ambienti o entità.                                                    |
| Servizi FortiGuard            | Threat intelligence: database di URL (oltre 175 categorie), firme IPS e antivirus, reputazione IP, filtraggio DNS, anti-botnet.                                    |
| Integrazione Security Fabric  | Integrazione con l'ecosistema Fortinet (FortiAnalyzer, FortiManager, FortiSIEM, FortiEDR).                                                                         |
| Anti-spam                     | Filtraggio del traffico e-mail (SMTP, IMAP, POP3) contro lo spam e le e-mail malevole.                                                                             |

### Funzionalità specifiche dell'edizione Stormshield

| Funzionalità                           | Descrizione                                                                                                                    |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Analisi dei protocolli ASQ             | Motore di ispezione che verifica la conformità dei protocolli di rete alle RFC, oltre le firme.                                |
| Integrazione Stormshield Data Security | Compatibilità con Stormshield Data Security per la cifratura dei dati a livello di file e di e-mail.                           |
| Stormshield Management Center          | Console di gestione centralizzata delle politiche di sicurezza.                                                                |
| Threat intelligence                    | Aggiornamenti regolari delle firme IPS, degli URL malevoli e degli indicatori di compromissione da parte del produttore.        |

### Amministrazione e supervisione

- **Gestione delle politiche**: ogni modifica (regola di filtraggio, configurazione VPN) è oggetto di una richiesta di modifica formalizzata, gestita dal team operativo del servizio.
- **Interfaccia del produttore**: può essere proposto un accesso all'interfaccia web del produttore per la consultazione dei log e delle politiche.
- **Supervisione**: dashboard preconfigurate (traffico per interfaccia, sessioni attive, tasso di blocco IPS, larghezza di banda VPN, stato dell'alta disponibilità, CPU e memoria).
- **Avvisi**: avvisi preconfigurati (nodo non disponibile, tunnel VPN interrotto, picco di traffico anomalo, rilevamento di attacco, saturazione delle sessioni).
- **Esportazione dei log**: Syslog (TCP/TLS), CEF o LEEF verso il vostro SIEM o quello di una terza parte.

## Architettura

Il servizio si basa su un cluster di due nodi in modalità Attivo/Passivo. Il nodo attivo garantisce il filtraggio, l'ispezione e il gateway VPN; il nodo passivo rimane sincronizzato (sessioni, configurazione, tabelle di routing) e riprende il traffico in caso di guasto.

Il cluster si inserisce tra i vostri accessi esterni (Internet, WAN, sedi remote, utenti in mobilità) e le vostre risorse ospitate, che protegge in zone di rete filtrate.

Il servizio comprende:

- **il cluster ad alta disponibilità** di due nodi;
- **la gestione delle firme**: aggiornamento automatico dei database IPS, di filtraggio degli URL, antivirus e di threat intelligence;
- **la supervisione** dello stato del cluster, delle sessioni attive, dei tunnel VPN e delle metriche di prestazione;
- **l'amministrazione** del firewall da parte del team operativo del servizio.

### Integrazioni

- **VPC**: il firewall si inserisce come gateway di sicurezza tra le zone di rete del vostro VPC.
- **Private Backbone**: filtraggio dei flussi tra zone di disponibilità e tra siti.
- **Managed Kubernetes**: firewall dedicato davanti ai cluster Kubernetes gestiti.
- **Bastion**: accesso di amministrazione tracciato alle console del firewall.
- **SIEM**: esportazione dei log dei flussi, degli eventi IPS e delle connessioni VPN verso il vostro SIEM o quello di una terza parte.
- **Apparecchiature di terze parti**: VPN IPsec compatibile con qualsiasi apparecchiatura che supporti IKEv2; autenticazione SSL-VPN tramite Active Directory, LDAP o RADIUS, con TOTP.

## Regioni e zone di disponibilità

Managed Firewall è disponibile nella regione FR1. L'infrastruttura e i dati di configurazione sono ospitati esclusivamente in Francia.

## Specifiche tecniche

### Modelli dell'edizione Stormshield

Ogni modello corrisponde a un cluster ad alta disponibilità completo di due nodi.

| Modello | vCPU | RAM  | Utenti SSL-VPN max | Tunnel IPsec max |
|--------|------|------|--------------------------|-------------------|
| EVA1   | 1    | 2 GB | 50                       | 100               |
| EVA2   | 2    | 3 GB | 512                      | 150               |
| EVA3   | 4    | 6 GB | 512                      | 200               |

### Modelli dell'edizione Fortinet

Ogni modello corrisponde a un cluster ad alta disponibilità completo di due nodi.

| Modello | vCPU | VDOM inclusi |
|--------|------|-------------|
| VM02V  | 2    | 1           |
| VM04V  | 4    | 1           |
| VM08V  | 8    | 1           |

Un'opzione aggiunge 5 VDOM. Ogni VDOM dispone di proprie politiche di sicurezza, tabelle di routing, interfacce di rete e log.

### Parametri comuni

| Parametro                  | Valore                                                    |
|----------------------------|-----------------------------------------------------------|
| Modalità di alta disponibilità | Attivo/Passivo (Attivo/Attivo su richiesta)           |
| VPN IPsec                  | IKEv2 (compatibile IKEv1)                                 |
| Cifratura VPN              | AES-256-GCM, AES-128-GCM                                  |
| Integrità VPN              | SHA-256, SHA-384, SHA-512                                 |
| Perfect Forward Secrecy    | DH gruppo 14 (2 048 bit) come minimo, fino al gruppo 21 (ECDH P-521) |
| Autenticazione VPN         | Certificati X.509 o chiave pre-condivisa                  |
| Cifratura SSL-VPN          | TLS 1.3 (TLS 1.2 come minimo)                             |
| Cifratura dell'amministrazione | TLS 1.3                                               |
| Registrazione dei flussi   | Tutte le sessioni, volume configurabile                   |

### Limiti

- Le regole di filtraggio sono gestite dal team operativo del servizio, in coordinamento con voi, tramite il processo di richiesta di modifica.
- L'accesso diretto alla riga di comando del firewall (SSH o console) non è fornito di serie.
- I modelli Stormshield hanno un numero massimo di utenti SSL-VPN e di tunnel IPsec stabilito dalla licenza: oltre tale limite, è necessario passare a un modello superiore.
- La modalità Attivo/Attivo (ripartizione delle sessioni) è disponibile su richiesta; la modalità standard è Attivo/Passivo.

## Sicurezza e conformità

Managed Firewall è certificato HDS e ISO 27001.

- **Cifratura in transito**: AES-256-GCM per le VPN (IKEv2, SSL-VPN), TLS 1.3 per l'amministrazione.
- **Cifratura a riposo**: i log sono cifrati.
- **Governance delle modifiche**: ogni modifica della politica di sicurezza segue un processo di modifica documentato e tracciabile.
- **Tracciabilità**: tutte le operazioni di amministrazione sono registrate (autore, modifica, data).
- **Avvisi**: gli eventi critici (tentativi di intrusione, superamento di soglie, guasto di un nodo) attivano avvisi in tempo reale.

## Backup e continuità

- **Alta disponibilità**: il cluster Attivo/Passivo sincronizza sessioni, configurazioni e tabelle di routing e commuta automaticamente in caso di guasto di un nodo.
- **Manutenzione senza interruzioni**: le patch vengono applicate nodo per nodo (aggiornamento del nodo passivo, failover, quindi aggiornamento dell'altro nodo) per garantire la continuità del servizio.

## Versioni e ciclo di vita

- **Edizione Fortinet**: versione di FortiOS scelta secondo le raccomandazioni del produttore, con due aggiornamenti principali pianificati all'anno.
- **Edizione Stormshield**: ultima versione stabile, con due aggiornamenti principali pianificati all'anno e patch di sicurezza applicate entro 15 giorni.
- **Firme IPS, antivirus e URL**: aggiornamenti automatici giornalieri, o in tempo reale a seconda dell'abbonamento del produttore.
- **Fine del supporto**: ricevete una notifica 90 giorni prima della fine del supporto di una versione.

## Disponibilità del servizio

| Elemento                       | Obiettivo di disponibilità, misurato su un mese |
|--------------------------------|-----------------------------------------------|
| Servizio di filtraggio (cluster) | 99,9 %                                      |
| Tunnel VPN IPsec stabiliti     | 99,9 %                                        |

## Reversibilità

Al termine del servizio, potete recuperare i seguenti elementi:

| Elemento esportato       | Deliverable                                                | Tempi di messa a disposizione | Costo      |
|--------------------------|------------------------------------------------------------|-----------------------------|------------|
| Configurazione           | File di configurazione completo del firewall (formato del produttore) | 15 giorni         | Senza costi |
| Log                      | Log dei flussi e degli eventi (Syslog o CEF)               | 30 giorni                   | Senza costi |
| Politiche VPN            | Parametri dei tunnel IPsec e della SSL-VPN                 | 15 giorni                   | Senza costi |
| Assistenza alla migrazione | Supporto tecnico per una distribuzione su un'altra infrastruttura | Su richiesta       | Su preventivo |

I dati di configurazione e i log vengono quindi cancellati in modo sicuro entro 7 giorni.

## Prezzi

Managed Firewall è fatturato mensilmente, per cluster ad alta disponibilità di due nodi, licenze del produttore, firme e gestione operativa incluse. Le tariffe sono pubblicate sulla pagina del prodotto sul sito Cloud Temple:
[Managed Firewall — prezzi](https://www.cloud-temple.com/produits/managed-firewall/).

## Buone pratiche

- Scegliete l'edizione in base ai vostri requisiti: sovranità del produttore (Stormshield) o funzioni SD-WAN, ZTNA e VDOM (Fortinet).
- Dimensionate il modello in base al numero di utenti SSL-VPN e di tunnel IPsec previsti, con un margine di crescita.
- Esportate i log verso il vostro SIEM per correlare gli eventi di rete con le altre vostre fonti di sicurezza.
- Passate dal Bastion per gli accessi di amministrazione, affinché siano tracciati.
