---
title: Avvio rapido
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'

## Prerequisiti

- Avere sottoscritto un prodotto Cloud Temple. Per la semplice sottoscrizione, puoi [contattarci](https://www.cloud-temple.com/contactez-nous/) o via email all'indirizzo __contact@cloud-temple.com__.
- Avere accesso alla Console
- Avere la propria IPv4 pubblica dichiarata nella zona di fiducia di Cloud Temple (l'accesso alla Console è limitato agli indirizzi fidati identificati)

## Connessione al tuo tenant Cloud Temple

La Console è accessibile tramite l'URL riportato di seguito: [Console](https://shiva.cloud-temple.com) oppure direttamente dall'URL che ti è stato comunicato via email.

La prima pagina ti consente di selezionare [l'organizzazione](iam/concepts.md#organisations) in cui è stato creato il tuo utente.
Una volta inserita l'azienda, fai clic su __'Accedi'__.

<img src={shivaLogin} />

Verrai quindi reindirizzato a una pagina che ti richiede di autenticarti.
Una volta effettuato l'accesso, verrai portato a questa pagina.

Troverai tutte le metriche relative ai prodotti sottoscritti nel tuo perimetro. In caso di problemi con i tuoi prodotti VMware e/o OpenIaaS, verranno visualizzati degli allarmi; il colore è legato alla loro gravità.

<img src={shivaHome} />

## Gestione della lingua

La console è disponibile in __francese__, __inglese__. È possibile modificare la lingua di lavoro utilizzando l'icona __lingua__ situata in alto a destra dello schermo.

La modifica della lingua di un utente deve essere effettuata nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione è impostata per ogni tenant [Tenant](iam/concepts.md#tenant).

## Accesso al supporto tecnico

In qualsiasi momento, puoi contattare __il team di supporto Cloud Temple__ tramite __l'icona 'salvagente'__ situata in alto a destra dello schermo.

<img src={shivaSupport} />

Sarai guidato durante l'intero processo di richiesta di supporto.

La prima fase è l'identificazione del tipo di richiesta di supporto :

- Richiedere un consiglio sull'utilizzo di un prodotto (fuori da incidenti),
- Richiedere assistenza relativa al proprio account cliente,
- Segnalare un incidente o richiedere supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (messa a disposizione di un ingegnere Cloud Temple su una problematica).

<img src={shivaSupport_01} />

Successivamente, hai la possibilità di fornire ulteriori dettagli e allegare file (immagini o log, ad esempio).

Il richiedente può inoltre specificare un livello di criticità (P1-P5) nella descrizione del ticket, in caso di incidente di sicurezza, come:

<img src={shivaSupportCriticities} />

__CRITICA (P1)__:

- Sospetta fuoriuscita di dati sensibili
- Rilevamento di un accesso non autorizzato ai propri dati
- Compromissione delle credenziali di amministrazione
- Indisponibilità totale dei servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati personali

__ALTA (P2)h__:

- Malfunzionamento degli accessi utente
- Anomalia nella crittografia dei propri dati
- Perdita di accesso ad alcune funzionalità critiche
- Incoerenza nei dati
- Rallentamenti significativi che impattano l'attività

__MEDIA (P3)__:

- Problema di prestazioni localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso occasionale

__BASSA (P4)__:

- Richiesta di indagine
- Anomalia senza impatto diretto
- Questioni di conformità
- Necessità di chiarimenti tecnici

__SERVIZIO OPERATIVO (P5)__:

- Servizio operativo senza rischi immediati

<img src={shivaSupport_02} />

Una volta inviata la richiesta, è possibile recuperare le proprie richieste tramite __l'icona 'salvagente'__ situata in alto a destra dello schermo :

<img src={shivaSupport_03} />

## Accesso alle funzionalità utente tramite l'interfaccia web

L'insieme delle funzionalità accessibili al tuo utente (in base ai suoi permessi) si trova a sinistra dello schermo, nella barra verde.
Le funzionalità sono raggruppate per modulo. Questo raggruppamento include principalmente:

- L'__inventario__ delle tue risorse,
- Il __tracciamento delle operazioni__,
- La __gestione delle risorse IaaS__ (Calcolo, storage, rete, ...)
- La __gestione delle risorse OpenIaaS__ (Calcolo, storage, rete, ...)
- L'accesso ai __servizi accessori__ (Bastion, monitoraggio, ...)
- L'__amministrazione della tua organizzazione__ (Gestione dei tenant, dei permessi, ...)

L'attivazione di un modulo per un utente dipende dai permessi dell'utente. Ad esempio, il modulo __'Ordine'__ non sarà disponibile se l'utente non dispone del permesso __'ORDER'__.

Di seguito è presentata una panoramica dei diversi moduli disponibili. Nuovi moduli vengono aggiunti alla console regolarmente:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : consente di avere rapidamente una panoramica sul __totale delle risorse di calcolo e storage__, le statistiche del __backup__ e una __sintesi dei ticket di supporto__,
- __Inventario__ : consente di visualizzare l'insieme delle tue risorse di tipo __'macchine virtuali'__. Se vengono utilizzati i __tag__, permette di avere una visualizzazione per __tag__ (ad esempio, vista aziendale, vista applicativa, ...),
- __Infogestione__ : consente di accedere al monitoraggio delle tue __richieste di assistenza__ e alla __metriche dei servizi__,
- __IaaS__ : consente la __gestione delle infrastrutture IaaS VMware__ (Macchine virtuali, cluster, hypervisor, repliche, backup, ...),
- __OpenIaaS__ : consente la __gestione delle risorse Xen Orchestra__ (Macchine virtuali, backup, ...),
- __OpenShift__ : consente la gestione della tua **architettura PaaS RedHat OpenShift** e la gestione dei tuoi container nelle 3 zone di disponibilità della piattaforma.
- __Bastion__ : Consente di distribuire e gestire appliance bastion SSH/RDP nelle tue reti,
- __Rete__ : consente la gestione delle __reti di livello 2 e 3__, degli __indirizzi IP pubblici__ e dei tuoi __circuiti telecom__,
- __Colocation__ : Offre una vista sulle apparecchiature situate in zona di __collocazione condivisa o dedicata__,
- __Ordine__ : Consente l'ordine di risorse e il monitoraggio dei deployment,
- __Amministrazione__ : Riunisce le funzioni di amministrazione degli utenti e dei tenant, nonché l'accesso alla registrazione globale.
</div>
</div>
Le etichette __'NEW'__ indicano che il prodotto in questione è stato provisionato ma non è ancora qualificato __offerta SecNumCloud__, mentre __'BETA'__ indicano che il prodotto in questione è stato provisionato ed è appena stato qualificato __offerta SecNumCloud__.

__Registrazione - Monitoraggio delle Attività__
=====================================

La pagina delle attività è destinata a fornire una visibilità completa su tutte le operazioni di lettura e scrittura eseguite all'interno della console, garantendo così una maggiore tracciabilità e sicurezza. Evidenzia le due schede principali: Recenti e Archiviati.

<img src={shivaLogs} />

### __Struttura della Pagina__

#### __Schede__

- __Recenti__

- Operazioni recenti
- Monitoraggio in tempo reale

- __Archiviati__

- Operazioni su un periodo più lungo
- Operazioni archiviate per tracciabilità e conformità

#### __Informazioni Visualizzate__

- Data e Ora

- Tipo di operazione
  - Stato
- Utente
- Descrizione dell'operazione

#### __Funzionalità__

- Ricerca/Filtraggio per operazioni specifiche

### __Utilizzo__

- __Accesso :__ autorizzazione `activity_read`
- __Navigazione :__
  - Seleziona la scheda "Recenti" per le operazioni in tempo reale.
  - Scegli "Archiviati" per consultare la cronologia.
  - Utilizza le funzionalità di ricerca e filtraggio per individuare operazioni specifiche.

#### __Nota di Conformità__

In conformità alla qualifica SecNumCloud, la conservazione degli eventi della console Cloud Temple ha una durata minima di __6 mesi__, garantendo così il rispetto dei requisiti di sicurezza e tracciabilità.

## Consultazione degli ultimi aggiornamenti

Clicca in basso a sinistra sul banner verde sull'icona __'Novità'__. Troverai i dettagli delle modifiche per ogni versione della console Cloud Temple.

<img src={shivaOnboard_009} />

## Accesso alle funzionalità utente tramite API

L'accesso a tutte le funzionalità della Console è possibile tramite l'API Console. È possibile consultare i dettagli dei metodi e delle configurazioni tramite __'Profilo'__ e __'API'__ :

<img src={shivaOnboard_008} />

## Provider Terraform

Cloud Temple mette a disposizione un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) per gestire *"as code"* la vostra piattaforma Cloud.