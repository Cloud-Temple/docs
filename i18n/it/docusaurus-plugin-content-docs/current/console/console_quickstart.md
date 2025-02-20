---
title: Quickstart
---

## Prérequis
- Avoir souscrit à une offre Cloud Temple. Pour souscrire simplement, vous pouvez [nous contacter](https://www.cloud-temple.com/contactez-nous/) ou par mail à l'adresse __contact@cloud-temple.com__.
- Avoir un accès à la console Shiva
- Avoir son IPv4 publique déclarée dans la zone de confiance Cloud Temple (l'accès à la console shiva est limité aux adresses de confiances identifiées)

## Connexion à votre tenant Cloud Temple
Shiva est accessible via l'URL ci-dessous:
    https://shiva.cloud-temple.com
    Ou bien depuis l'URL directe qui vous a été communiquée par mail.

La première page vous permet de sélectionner [l'organisation](iam/concepts.md#organisations) dans laquelle votre utilisateur a été créé.
Une fois l'entreprise renseignée, veuillez cliquer sur __'Se connecter'__.

![](images/shiva_login.png)

Vous allez ensuite être redirigé vers une page vous demandant de vous authentifier.
Une fois connecté, vous arrivez sur cette page.

![](images/shiva_home.png)

## Gestione della lingua
La console è disponibile in __francese__, __inglese__. Puoi cambiare la lingua di funzionamento grazie all'icona __lingua__ situata in alto a destra dello schermo.

Il cambiamento della lingua di un utente è da effettuare nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

![](images/shiva_profil_006.png)

La configurazione è fatta per ogni tenant [Tenant](iam/concepts.md#tenant).

## Accesso al supporto tecnico

In qualsiasi momento, puoi contattare __il team di supporto Cloud Temple__ tramite l'icona __'boa'__ situata in alto a destra dello schermo.

![](images/shiva_support.png)

Sarai guidato durante tutto il processo di richiesta di supporto.

La prima fase è l'identificazione del tipo di richiesta di supporto :

- Chiedere un consiglio sull'uso di un prodotto (fuori incidente),
- Chiedere assistenza in merito al tuo account cliente,
- Dichiarare un incidente o richiedere supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (disponibilità di un ingegnere Cloud Temple per una problematica).

![](images/shiva_support_01.png)

Hai quindi la possibilità di fornire dettagli e includere file (immagini o log, ad esempio).

Il committente può anche specificare un livello di criticità (P1 a P4) nella descrizione del ticket, in caso di incidente, come ad esempio:

**CRITICO (P1)**:

- Sospetto di fuga di dati sensibili
- Rilevamento di un accesso non autorizzato ai tuoi dati
- Compromissione delle tue credenziali di amministrazione
- Indisponibilità totale dei tuoi servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati personali

**ALTO (P2)**:

- Malfunzionamento degli accessi utente
- Anomalia nella crittografia dei tuoi dati
- Perdita di accesso ad alcune funzionalità critiche
- Incoerenza nei dati
- Rallentamenti significativi che impattano l'attività

**MEDIO (P3)**:

- Problema di performance localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso puntuale

**BASSO (P4)**:

- Richiesta di indagine
- Anomalia senza impatto diretto
- Questione di conformità
- Necessità di chiarimento tecnico

![](images/shiva_support_02.png)

Una volta effettuata la richiesta, è possibile ritrovare le tue richieste tramite l'icona __'boa'__ situata in alto a destra dello schermo:

![](images/shiva_support_03.png)

## Accesso alle funzionalità utente tramite interfaccia web

L'insieme delle funzionalità accessibili al tuo utente (in funzione dei suoi diritti) è situato a sinistra dello schermo, nel banner verde.
Le funzionalità sono raggruppate per modulo. Questo comprende principalmente:

- L'__inventario__ delle tue risorse,
- Il __monitoraggio delle operazioni__,
- Il __controllo delle risorse IaaS__ (Calcolo, storage, rete, ...)
- Il __controllo delle risorse OpenIaaS__ (Calcolo, storage, rete, ...)
- L'accesso ai __servizi ausiliari__ (Bastion, monitoring, ...)
- L'__amministrazione della tua organizzazione__ (Gestione dei tenant, dei diritti, ...)

L'attivazione di un modulo per un utente dipende dai diritti dell'utente stesso. Ad esempio, il modulo __'Ordine'__ non sarà disponibile se l'utente non dispone del diritto __'ORDER'__.

Ecco una presentazione dei diversi moduli disponibili. Nuovi moduli arricchiscono la console regolarmente:

![](images/shiva_onboard_007.png)

- __Cruscotto__ : permette di avere rapidamente una vista sul __totale delle risorse di calcolo e di storage__, le statistiche del __backup__ e una __sintesi delle richieste di supporto__,
- __Inventario__ : permette di avere una vista d'insieme delle tue risorse tipo __'macchine virtuali'__. Se i __tag__ sono utilizzati, consente di avere una vista per __tag__ (ad esempio, vista per mestiere, vista applicativa, ...),
- __Gestione__ : fornisce accesso al monitoraggio delle tue __richieste di supporto__ e alla __metrologia dei servizi__,
- __IaaS__ : permette il __controllo delle infrastrutture IaaS VMware__ (Macchine virtuali, cluster, hypervisor, repliche, backup, ...),
- __OpenIaaS__ : permette il __controllo delle risorse Xen Orchestra__ (Macchine virtuali, backup, ...),
- __OpenShift__ : permette il controllo della tua **architettura PaaS RedHat Openshift** e la gestione dei tuoi container nelle 3 zone di disponibilità della piattaforma.
- __Bastione__ : Permette di distribuire e controllare appliance bastion SSH/RDP nelle tue reti,
- __Rete__ : Permette il controllo delle __reti di livello 2 e 3__, delle __IP pubbliche__ e dei tuoi __circuiti telecom__,
- __Colocation__ : Offre la vista sugli equipaggiamenti situati in zona di __collocazione condivisa o dedicata__,
- __Ordine__ : Permette di ordinare risorse e monitorare i deployment,
- __Amministrazione__ : Raggruppa le funzioni di amministrazione degli utenti e dei tenant nonché l'accesso alla registrazione globale.

I pittogrammi __'NEW'__ significano che il prodotto in questione è stato fornito ma non è ancora qualificato come __offerta SecNumCloud__ e __'BETA'__ significano che il prodotto in questione è stato fornito e appena qualificato come __offerta SecNumCloud__.

**Registrazione - Monitoraggio delle Attività**
=====================================

La pagina delle attività è destinata a fornire una visibilità completa su tutte le operazioni di lettura e scrittura effettuate all'interno della console, garantendo così una tracciabilità e una sicurezza maggiori. Pone l'accento su due schede principali: Recenti e Archiviate.

![](images/shiva_logs.png)

### **Struttura della Pagina**

#### **Schede**
	+ **Recenti**
		- Operazioni recenti
		- Monitoraggio in tempo reale
	+ **Archiviate**
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
	- Seleziona la scheda "Recenti" per le operazioni in tempo reale.
	- Scegli "Archiviate" per consultare lo storico.
	- Utilizza le funzionalità di ricerca e filtraggio per localizzare operazioni specifiche.

#### **Nota di Conformità**
Conformemente alla qualificazione SecNumCloud, la memorizzazione degli eventi della console Cloud Temple ha una durata minima di **6 mesi**, garantendo così il rispetto dei requisiti di sicurezza e tracciabilità.

## Consultazione degli ultimi aggiornamenti

Clicca in basso a sinistra del banner verde sull'icona __'Novità'__. Avrai il dettaglio delle modifiche per ogni versione della console Cloud Temple.

![](images/shiva_onboard_009.png)

## Accesso alle funzionalità utente tramite API

L'accesso all'insieme delle funzionalità della console Shiva è possibile tramite l'API Shiva. Puoi avere il dettaglio dei verbi e delle configurazioni tramite __'Profilo'__ e __'APIs'__ :

![](images/shiva_onboard_008.png)

## Provider Terraform

Cloud Temple mette a tua disposizione un provider Terraform per gestire *"as code"* la tua piattaforma Cloud. È accessibile qui:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest