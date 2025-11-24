---
title: Avvio rapido
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

## Prerequisiti

- Aver sottoscritto un'offerta Cloud Temple. Per sottoscrivere facilmente, puoi [contattarci](https://www.cloud-temple.com/contactez-nous/) o via email all'indirizzo __contact@cloud-temple.com__.
- Avere accesso alla console Shiva
- Aver dichiarato il proprio indirizzo IPv4 pubblico nella zona di fiducia Cloud Temple (l'accesso alla console Shiva è limitato agli indirizzi di fiducia identificati)

## Accesso al tuo tenant Cloud Temple

Shiva è accessibile tramite l'URL seguente: [Shiva](https://shiva.cloud-temple.com) oppure dall'URL diretta che ti è stata inviata via email.

La prima pagina ti permette di selezionare l'[organizzazione](iam/concepts.md#organisations) in cui è stato creato il tuo utente.  
Dopo aver inserito l'azienda, fai clic su __'Accedi'__.

<img src={shivaLogin} />

Successivamente verrai reindirizzato a una pagina in cui ti verrà chiesto di autenticarti.  
Una volta effettuato l'accesso, arriverai a questa pagina.

Qui troverai l'insieme delle metriche relative ai prodotti sottoscritti nel tuo ambito. In caso di problemi relativi ai tuoi prodotti VMware e/o OpenIaaS, verranno visualizzate delle notifiche; il colore è correlato alla gravità dell'evento.

<img src={shivaHome} />

## Gestione della lingua

La console è disponibile in __francese__, __inglese__. È possibile cambiare la lingua di utilizzo tramite l'icona __lingua__ situata in alto a destra dello schermo.

Il cambio di lingua per un utente deve essere effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione viene effettuata per ogni tenant [Tenant](iam/concepts.md#tenant).

## Accesso al support tecnico

In qualsiasi momento, è possibile contattare __l'équipe di supporto Cloud Temple__ tramite __l'icona 'boa'__ situata in alto a destra dello schermo.

<img src={shivaSupport} />

Verrai guidato durante tutto il processo di richiesta di supporto.

La prima fase consiste nell'identificare il tipo di richiesta di supporto:

- Richiedere un consiglio sull'utilizzo di un prodotto (fuori dal caso di incidente),
- Richiedere assistenza legata al tuo account cliente,
- Segnalare un incidente o richiedere supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (messaggio a disposizione di un ingegnere Cloud Temple su una problematica).

<img src={shivaSupport_01} />

Successivamente, potrai fornire ulteriori dettagli e allegare file (immagini o log, ad esempio).

Il committente può inoltre specificare un livello di criticità (P1 a P4) nella descrizione del ticket, nel caso di un incidente di sicurezza, come indicato di seguito:

__CRITICO (P1)__:

- Sospetta fuga di dati sensibili
- Rilevamento di un accesso non autorizzato ai tuoi dati
- Compromissione delle tue credenziali di amministrazione
- Inutilizzabilità totale dei tuoi servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati personali

__ALTO (P2)__:

- Malfunzionamento degli accessi utente
- Anomalia nel cifratura dei tuoi dati
- Perdita di accesso a funzionalità critiche
- Incoerenza nei dati
- Lentezze significative che impattano l'attività

__MEDIO (P3)__:

- Problema di prestazioni localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso occasionale

__BASSO (P4)__:

- Richiesta di indagine
- Anomalia senza impatto diretto
- Domanda di conformità
- Bisogno di chiarimenti tecnici

<img src={shivaSupport_02} />

Una volta inviata la tua richiesta, è possibile recuperare le tue richieste tramite __l'icona 'boa'__ situata in alto a destra dello schermo:

<img src={shivaSupport_03} />

## Accesso alle funzionalità utente tramite l'interfaccia web

Tutte le funzionalità accessibili all'utente (in base ai suoi diritti) si trovano a sinistra dello schermo, nella barra verde.  
Le funzionalità sono raggruppate per modulo. Questi includono principalmente:

- L'__inventario__ delle proprie risorse,  
- Il __tracciamento delle operazioni__,  
- Il __pilotaggio delle risorse IaaS__ (Calcolo, archiviazione, rete, ...),  
- Il __pilotaggio delle risorse OpenIaaS__ (Calcolo, archiviazione, rete, ...),  
- L'accesso ai __servizi aggiuntivi__ (Bastion, monitoraggio, ...),  
- L'__amministrazione della propria organizzazione__ (Gestione dei tenant, dei diritti, ...).

L'attivazione di un modulo per un utente dipende dai diritti dell'utente. Ad esempio, il modulo __'Ordine'__ non sarà disponibile se l'utente non dispone del diritto __'ORDER'__.

Di seguito una presentazione dei diversi moduli disponibili. Nuovi moduli vengono regolarmente aggiunti alla console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: permette di ottenere rapidamente una visione generale sul __totale delle risorse di calcolo e archiviazione__, sulle statistiche della __protezione dei dati__ e su una __sintesi dei ticket di supporto__,  
- __Inventario__: permette di visualizzare l'insieme delle proprie risorse di tipo __'macchine virtuali'__. Se vengono utilizzati i __tag__, permette di visualizzare le risorse raggruppate per __tag__ (ad esempio, vista aziendale, vista applicativa, ...),  
- __Infogestione__: fornisce l'accesso al tracciamento delle proprie __richieste di supporto__ e alla __metodologia dei servizi__,  
- __IaaS__: permette il __pilotaggio delle infrastrutture IaaS VMware__ (macchine virtuali, cluster, iperhost, replicazioni, backup, ...),  
- __OpenIaaS__: permette il __pilotaggio delle risorse Xen Orchestra__ (macchine virtuali, backup, ...),  
- __OpenShift__: permette il pilotaggio dell'**architettura PaaS RedHat OpenShift** e la gestione dei container nelle 3 zone di disponibilità della piattaforma.  
- __Bastion__: permette il deployment e il pilotaggio di appliance bastion SSH/RDP nei propri reti,  
- __Rete__: permette il pilotaggio dei __reti di livello 2 e 3__, delle __IP pubbliche__ e dei propri __circuiti telecomunicazioni__,  
- __Colocation__: offre la visione sugli apparati posizionati nelle zone di __colocazione condivisa o dedicata__,  
- __Ordine__: permette l'ordine di risorse e il tracciamento dei deployment,  
- __Amministrazione__: raggruppa le funzionalità di amministrazione degli utenti e dei tenant, nonché l'accesso alla registrazione globale.
</div>
</div>

I pictogrammi __'NEW'__ indicano che il prodotto in questione è stato provisionato ma non è ancora qualificato come __offerta SecNumCloud__, mentre __'BETA'__ indica che il prodotto è stato provisionato e recentemente qualificato come __offerta SecNumCloud__.

__Registrazione - Tracciamento delle attività__
=====================================

La pagina delle attività è pensata per fornire una visibilità completa su tutte le operazioni di lettura e scrittura effettuate all'interno della console, garantendo così una tracciabilità e una sicurezza maggiori. Essa mette in evidenza i due principali tab: Recenti e Archiviati.

<img src={shivaLogs} />

### __Struttura della Pagina__

#### __Schede__

 + **Recenti**

- Operazioni recenti
- Monitoraggio in tempo reale

- __Archiviati__

- Operazioni su un periodo più lungo
- Operazioni archiviate per tracciabilità e conformità

#### __Informazioni Visualizzate__

 + Data e Ora

- Tipo di operazione
  - Stato
- Utente
- Descrizione dell'operazione

#### __Funzionalità__

 + Ricerca/Filtraggio per operazioni specifiche

### __Utilizzo__

- __Accesso:__ autorizzazione `activity_read`
- __Navigazione:__
  - Seleziona la scheda "Recenti" per le operazioni in tempo reale.
  - Scegli "Archiviati" per consultare la cronologia.
  - Utilizza le funzionalità di ricerca e filtraggio per individuare operazioni specifiche.

#### __Nota di Conformità__

In conformità con la qualifica SecNumCloud, la conservazione degli eventi della console Cloud Temple è di durata minima di __6 mesi__, garantendo così il rispetto dei requisiti di sicurezza e tracciabilità.

## Consulta degli ultimi aggiornamenti

Fai clic sull'icona __'Novità'__ nell'angolo in basso a sinistra della barra verde. Troverai il dettaglio delle modifiche apportate in ciascuna versione della console Cloud Temple.

<img src={shivaOnboard_009} />

## Accesso alle funzionalità utente tramite l'API

L'accesso a tutte le funzionalità della console Shiva è possibile tramite l'API Shiva. È possibile trovare ulteriori informazioni sui verbi e sulle configurazioni tramite __'Profilo'__ e __'API'__:

<img src={shivaOnboard_008} />

## Provider Terraform

Cloud Temple mette a vostra disposizione un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) per gestire la vostra piattaforma Cloud in modalità *"as code"*.