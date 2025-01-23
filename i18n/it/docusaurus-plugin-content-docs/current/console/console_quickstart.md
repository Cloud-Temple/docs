---
title: Quickstart
---

## Prérequis
- Avere sottoscritto a un'offerta Cloud Temple. Per sottoscrivere facilmente, potete [contattarci](https://www.cloud-temple.com/contactez-nous/) o tramite mail all'indirizzo __contact@cloud-temple.com__.
- Avere accesso alla console Shiva
- Avere il proprio IPv4 pubblico dichiarato nella zona di fiducia Cloud Temple (l'accesso alla console Shiva è limitato agli indirizzi di fiducia identificati)

## Connessione al vostro tenant Cloud Temple
Shiva è accessibile tramite l'URL qui sotto:
    https://shiva.cloud-temple.com
    Oppure dall'URL diretto che vi è stato comunicato via mail.

La prima pagina vi permette di selezionare [l'organizzazione](iam/concepts.md#organisations) in cui il vostro utente è stato creato.
Una volta specificata l'azienda, cliccare su __'Connettersi'__.

![](images/shiva_login.png)

Sarete quindi reindirizzati a una pagina che richiede di autenticarsi.
Una volta connessi, arriverete a questa pagina.

![](images/shiva_home.png)

## Gestione della lingua
La console è disponibile in __francese__, __inglese__. Potete cambiare la lingua di funzionamento tramite l'icona __lingua__ situata in alto a destra dello schermo.

Il cambio della lingua di un utente va effettuato nel proprio __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

![](images/shiva_profil_006.png)

La configurazione è effettuata per ciascun tenant [Tenant](iam/concepts.md#tenant).

## Accesso al supporto tecnico

In qualsiasi momento, potete contattare __il team di supporto Cloud Temple__ tramite l'icona __'boa'__ situata in alto a destra dello schermo.

![](images/shiva_support.png)

Sarete guidati durante tutto il processo di richiesta di supporto.

La prima fase è l'identificazione del tipo di richiesta di supporto:

- Chiedere un consiglio sull'uso di un prodotto (al di fuori degli incidenti),
- Chiedere assistenza in relazione al vostro account cliente,
- Dichiarare un incidente o richiedere supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (disponibilità di un ingegnere Cloud Temple su una problematica).

![](images/shiva_support_01.png)

Avrete quindi la possibilità di fornire dettagli e includere file (ad esempio immagini o log).

Il richiedente può anche specificare un livello di criticità (P1 a P4) nella descrizione del ticket, in caso di un incidente, come:

**CRITICO (P1)**:

- Sospetto di fuga di dati sensibili
- Rilevazione di accesso non autorizzato ai vostri dati
- Compromissione delle vostre credenziali di amministrazione
- Indisponibilità totale dei vostri servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati personali

**ALTO (P2)**:

- Malfunzionamento degli accessi utenti
- Anomalia nella crittografia dei vostri dati
- Perdita di accesso a certe funzionalità critiche
- Incoerenza nei dati
- Lentezze importanti che impattano l'attività

**MEDIO (P3)**:

- Problema di performance localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso puntuale

**BASSO (P4)**:

- Richiesta di investigazione
- Anomalia senza impatto diretto
- Domanda di conformità
- Bisogno di chiarimenti tecnici

![](images/shiva_support_02.png)

Una volta effettuata la richiesta, è possibile ritrovare le proprie richieste tramite l'icona __'boa'__ situata in alto a destra dello schermo:

![](images/shiva_support_03.png)

## Accesso alle funzionalità utente tramite l'interfaccia web

L'insieme delle funzionalità accessibili al vostro utente (in base ai suoi diritti) è situato a sinistra dello schermo, nella fascia verde.
Le funzionalità sono raggruppate per modulo. Questo raggruppa principalmente:

- L'__inventario__ delle vostre risorse,
- Il __monitoraggio delle operazioni__,
- Il __controllo delle risorse IaaS__ (Calcolo, storage, rete, ...)
- Il __controllo delle risorse OpenIaaS__ (Calcolo, storage, rete, ...)
- L'accesso ai __servizi ausiliari__ (Bastion, monitoring, ...)
- L'__amministrazione della vostra organizzazione__ (Gestione dei tenant, diritti, ...)

L'attivazione di un modulo per un utente dipende dai diritti dell'utente. Ad esempio, il modulo __'Ordini'__ non sarà disponibile se l'utente non dispone del diritto __'ORDER'__.

Ecco una presentazione dei vari moduli disponibili. Nuovi moduli arricchiscono regolarmente la console:

![](images/shiva_onboard_007.png)

- __Cruscotto__ : permette di avere una visione rapida sul __totale delle risorse di calcolo e di storage__, le statistiche del __backup__ e una __sintesi dei ticket di supporto__,
- __Inventario__ : permette di avere una visione dell'insieme delle vostre risorse di tipo __'macchine virtuali'__. Se vengono utilizzati __tag__, permette di avere una visione per __tag__ (ad esempio, visione per business, visione per applicativi, ...),
- __Infogestione__ : dà accesso al monitoraggio delle vostre __richieste di supporto__ e alla __metrologia dei servizi__,
- __IaaS__ : permette il __controllo delle infrastrutture IaaS VMware__ (Macchine virtuali, cluster, hypervisor, repliche, backup, ...),
- __OpenIaaS__ : permette il __controllo delle risorse Xen Orchestra__ (Macchine virtuali, backup, ...),
- __OpenShift__ : permette il controllo della vostra **architettura PaaS RedHat Openshift** e la gestione dei vostri container sulle 3 zone di disponibilità della piattaforma.
- __Bastion__ : Permette di distribuire e controllare appliance bastion SSH/RDP nelle vostre reti,
- __Rete__ : permette il controllo delle __reti di livello 2 e 3__, degli __IP pubblici__ e dei vostri __circuiti telecom__,
- __Colocation__ : Offre la visione sugli equipaggiamenti situati nella zona di __colocazione condivisa o dedicata__,
- __Ordini__ : Permette di ordinare risorse e monitorare i deployment,
- __Amministrazione__ : Raggruppa le funzioni di amministrazione degli utenti e dei tenant nonché l'accesso alla registrazione generale.

I pittogrammi __'NEW'__ significano che il prodotto in questione è stato fornito ma non è ancora qualificato __offerta SecNumCloud__ e __'BETA'__ significano che il prodotto in questione è stato fornito e appena qualificato __offerta SecNumCloud__.

**Registrazione - Monitoraggio delle Attività**
=====================================

La pagina delle attività è destinata a fornire una visibilità completa su tutte le operazioni di lettura e scrittura effettuate all'interno della console, garantendo così una maggiore tracciabilità e sicurezza. Evidenzia le due schede principali: Recenti e Archiviati.

![](images/shiva_logs.png)

### **Struttura della Pagina**

#### **Schede**
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
* **Accesso :** permesso `activity_read`
* **Navigazione :**
	- Selezionare la scheda "Recenti" per le operazioni in tempo reale.
	- Scegliere "Archiviati" per consultare lo storico.
	- Utilizzare le funzionalità di ricerca e filtraggio per localizzare operazioni specifiche.

#### **Nota di Conformità**
Conformemente alla qualificazione SecNumCloud, la memorizzazione degli eventi della console Cloud Temple è di una durata minima di **6 mesi**, garantendo così il rispetto dei requisiti di sicurezza e tracciabilità.

## Accesso alle funzionalità utente tramite l'API

L'accesso all'insieme delle funzionalità della console Shiva è possibile tramite l'API Shiva. Si possono trovare i dettagli dei verbi e delle configurazioni tramite __'Profilo'__ e __'API'__ :

![](images/shiva_onboard_008.png)

## Provider Terraform

Cloud Temple mette a disposizione un provider Terraform per controllare *"as code"* la vostra piattaforma Cloud. È accessibile qui:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest