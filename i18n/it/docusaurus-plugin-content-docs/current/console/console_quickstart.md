---
title: Quickstart
---
import shivaLogin from './images/shiva_login.png'
import shivaHome from './images/shiva_home.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaSupport from './images/shiva_support.png'
import shivaSupport_01 from './images/shiva_support_01.png'
import shivaSupport_02 from './images/shiva_support_02.png'
import shivaSupport_03 from './images/shiva_support_03.png'
import shivaOnboard_007 from './images/shiva_onboard_007.png'
import shivaLogs from './images/shiva_logs.png'
import shivaOnboard_009 from './images/shiva_onboard_009.png'
import shivaOnboard_008 from './images/shiva_onboard_008.png'


## Prérequis
- Avere sottoscritto un'offerta Cloud Temple. Per sottoscrivere semplicemente, potete [contattarci](https://www.cloud-temple.com/contactez-nous/) o via email all'indirizzo __contact@cloud-temple.com__.
- Avere accesso alla console Shiva
- Avere il proprio IPv4 pubblico dichiarato nella zona di fiducia Cloud Temple (l'accesso alla console Shiva è limitato agli indirizzi di fiducia identificati)

## Connessione al vostro tenant Cloud Temple
Shiva è accessibile tramite l'URL seguente:
    https://shiva.cloud-temple.com
    Oppure tramite l'URL diretta che vi è stata comunicata via email.

La prima pagina permette di selezionare [l'organizzazione](iam/concepts.md#organisations) nella quale è stato creato il vostro utente.
Una volta inserita l'azienda, cliccate su __'Accedi'__.

<img src={shivaLogin} />

Sarete quindi reindirizzati verso una pagina che richiede di autenticarsi.
Una volta connessi, raggiungerete questa pagina.

<img src={shivaHome} />

## Gestione della lingua
La console è disponibile in __francese__, __inglese__. È possibile cambiare la lingua di funzionamento grazie all'icona __lingua__ situata in alto a destra dello schermo.

Il cambio di lingua di un utente si effettua nel proprio __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

<img src={shivaProfil_006} />

La configurazione è fatta per ogni tenant [Tenant](iam/concepts.md#tenant).

## Accesso al supporto tecnico

In qualsiasi momento, è possibile contattare __il team di supporto Cloud Temple__ tramite l'__icona 'salvagente'__ situata in alto a destra dello schermo.

<img src={shivaSupport} />

Sarete guidati durante l'intero processo di richiesta di supporto.

La prima fase è l'identificazione del tipo di richiesta di supporto:

- Richiedere un consiglio sull'uso di un prodotto (fuori incidente),
- Richiedere assistenza riguardo al vostro account cliente,
- Dichiarare un incidente o richiedere supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (disponibilità di un ingegnere Cloud Temple per una problematica).

<img src={shivaSupport_01} />

È quindi possibile fornire dettagli ed includere file (immagini o log per esempio).

Il richiedente può anche specificare un livello di criticità (P1 a P4) nella descrizione del ticket, nel caso di un incidente, come:

**CRITICA (P1)**:

- Sospetto di fuga di dati sensibili
- Rilevazione di un accesso non autorizzato ai vostri dati
- Compromissione delle vostre credenziali di amministrazione
- Totale indisponibilità dei vostri servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati di carattere personale

**ALTA (P2)**:

- Malfunzionamento degli accessi utenti
- Anomalia nella cifratura dei vostri dati
- Perdita di accesso a certe funzionalità critiche
- Incoerenza nei dati
- Rallentamenti significativi che impattano l'attività

**MEDIA (P3)**:

- Problema di prestazioni localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso puntuale

**BASSA (P4)**:

- Richiesta di investigazione
- Anomalia senza impatto diretto
- Questione di conformità
- Necessità di chiarimenti tecnici

<img src={shivaSupport_02} />

Una volta effettuata la vostra richiesta, è possibile ritrovare le vostre richieste tramite l'__icona 'salvagente'__ situata in alto a destra dello schermo:

<img src={shivaSupport_03} />

## Accesso alle funzionalità utente tramite l'interfaccia web

Tutte le funzionalità accessibili al vostro utente (a seconda dei suoi diritti) si trovano a sinistra dello schermo, nella banda verde.
Le funzionalità sono raggruppate per modulo. Questo comprende principalmente:

- L'__inventario__ delle vostre risorse,
- Il __monitoraggio delle operazioni__,
- La __gestione delle risorse IaaS__ (Calcolo, storage, rete, ...)
- La __gestione delle risorse OpenIaaS__ (Calcolo, storage, rete, ...)
- L'accesso ai __servizi accessori__ (Bastion, monitoraggio, ...)
- L'__amministrazione della vostra organizzazione__ (Gestione dei tenant, dei diritti, ...)

L'attivazione di un modulo per un utente dipende dai diritti dell'utente stesso. Ad esempio, il modulo __'Comando'__ non sarà disponibile se l'utente non dispone del diritto __'ORDER'__.

Ecco una presentazione dei diversi moduli disponibili. Nuovi moduli arricchiscono regolarmente la console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : permette di avere rapidamente una visione del __totale delle risorse di calcolo e storage__, le statistiche del __backup__ e una __sintesi dei ticket di supporto__,
- __Inventario__ : permette di avere una visione di tutte le vostre risorse di tipo __'macchine virtuali'__. Se vengono usati i __tag__, permette di avere una visione per __tag__ (ad esempio, visione aziendale, visione applicativa, ...),
- __Gestione__ : dà accesso al monitoraggio delle vostre __richieste di supporto__ e alla __metrologia dei servizi__,
- __IaaS__ : permette la __gestione delle infrastrutture VMware IaaS__ (Macchine virtuali, cluster, hypervisor, replica, backup, ...),
- __OpenIaaS__ : permette la __gestione delle risorse Xen Orchestra__ (Macchine virtuali, backup, ...),
- __OpenShift__ : permette la gestione della vostra **architettura PaaS RedHat Openshift** e la gestione dei vostri container nelle 3 zone di disponibilità della piattaforma.
- __Bastion__ : Permette di distribuire e gestire appliance bastion SSH/RDP nelle vostre reti,
- __Rete__ : permette la gestione delle __reti di livello 2 e 3__, degli __IP pubblici__ e dei vostri __circuiti telecom__,
- __Colocation__ : Offre la visione sugli apparati situati nella zona di __collocazione condivisa o dedicata__,
- __Ordine__ : Permette di ordinare risorse e monitorare i deployment,
- __Amministrazione__ : Raggruppa le funzioni di amministrazione degli utenti e dei tenant così come l'accesso alla registrazione globale.
</div>
</div>
I pittogrammi __'NEW'__ significano che il prodotto in questione è stato fornito ma non è ancora qualificato come __offerta SecNumCloud__ e __'BETA'__ significano che il prodotto in questione è stato fornito e appena qualificato come __offerta SecNumCloud__.

**Registrazione - Monitoraggio delle Attività**
=====================================

La pagina delle attività è destinata a fornire una visibilità completa su tutte le operazioni di lettura e scrittura realizzate all'interno della console, garantendo così una tracciabilità e una sicurezza accresciute. Mette in evidenza i due tab principali: Recenti e Archiviati.

<img src={shivaLogs} />

### **Struttura della Pagina**

#### **Tab**
	+ **Recenti**
		- Operazioni recenti
		- Monitoraggio in tempo reale
	+ **Archiviati**
		- Operazioni su un periodo più lungo
		- Operazioni archiviate per tracciabilità e conformità
#### **Informazioni Visualizzate**
	+ Data e Ora
	+ Tipo di operazione
    + Stato
	+ Utente
	+ Descrizione dell'operazione
#### **Funzionalità**
	+ Ricerca/Filtraggio per operazioni specifiche

### **Utilizzo**

* **Accesso:** permesso `activity_read`
* **Navigazione:**
	- Selezionate il tab "Recenti" per le operazioni in tempo reale.
	- Scegliete "Archiviati" per consultare lo storico.
	- Utilizzate le funzionalità di ricerca e filtraggio per individuare operazioni specifiche.

#### **Nota di Conformità**
Conformemente alla qualificazione SecNumCloud, la conservazione degli eventi della console Cloud Temple è di una durata minima di **6 mesi**, garantendo così il rispetto dei requisiti di sicurezza e tracciabilità.

## Consultazione degli ultimi aggiornamenti

Cliccate in basso a sinistra della banda verde sull'icona __'Novità'__. Avrete il dettaglio delle modifiche per ogni versione della console Cloud Temple.

<img src={shivaOnboard_009} />

## Accesso alle funzionalità utente tramite API

L'accesso a tutte le funzionalità della console Shiva è possibile tramite l'API Shiva. È possibile avere il dettaglio dei verbi e delle configurazioni tramite __'Profilo'__ e __'API'__ :

<img src={shivaOnboard_008} />

## Provider Terraform

Cloud Temple mette a vostra disposizione un provider Terraform per gestire *"as code"* la vostra piattaforma Cloud. È accessibile qui :

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest