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
import shivaTenant from '@site/docs/console/iam/images/shiva_tenant.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaIpAccessManagement_01 from '@site/docs/console/iam/images/shiva_ip_access_management_01.png'

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

## Amministrazione: la tua organizzazione e i tuoi tenant

Il modulo __Amministrazione__ (in basso nella banda verde, a sinistra) raccoglie la gestione della tua __organizzazione__ e dei tuoi __tenant__: selezione del perimetro di lavoro, gestione degli utenti e dei loro permessi, restrizione degli accessi tramite IP e registrazione delle attività.

- L'__organizzazione__ è la tua entità contrattuale: contiene gli account utente, il meccanismo di autenticazione (directory locale o federazione delle identità) e federa l'insieme dei tuoi tenant.
- Un __tenant__ è un raggruppamento di risorse isolato all'interno dell'organizzazione (Produzione, Preproduzione, per applicazione, per criticità…). Le risorse di un tenant non sono condivise con gli altri.

I permessi degli utenti si definiscono __per ogni tenant__: uno stesso account può, ad esempio, ordinare risorse su un tenant e soltanto consultarle su un altro.

:::info
Questa pagina descrive il percorso all'interno della Console. Per il riferimento dettagliato — definizioni, ciclo di vita, federazione delle identità ed elenco esaustivo dei permessi — consulta il modulo IAM: [Concetti](iam/concepts.md) e [Guida introduttiva IAM](iam/quickstart.md).
:::

### Selezionare il tenant di lavoro

Il selettore di tenant si trova in alto a sinistra nella Console. Consente di passare da un perimetro all'altro; i tenant qualificati mostrano il badge __SecNumCloud__.

<img src={shivaTenant} />

La creazione di un tenant avviene tramite una richiesta di servizio (vedere [Creazione di un tenant](iam/quickstart.md#creazione-di-un-tenant)). Un tenant non può essere vuoto: viene inizializzato con almeno una zona di disponibilità, un cluster di calcolo, uno spazio di archiviazione e una VLAN di rete.

### Gestire gli utenti e i loro permessi

Da __Amministrazione > Utenti__, inviti un utente tramite e-mail, quindi gli assegni i permessi __per ogni tenant__. Per impostazione predefinita, un account non possiede alcun permesso; l'assegnazione richiede il permesso `iam_write`.

<img src={shivaOnboard_005} />

I permessi sono __unitari__ (non si sovrappongono) e __cumulativi__: un'azione può richiedere più permessi (ad esempio `..._read` __e__ `..._write`). La procedura completa e l'[elenco esaustivo dei permessi](iam/concepts.md#permessi) sono documentati nel modulo IAM.

### Limitare gli accessi: IP autorizzati (Whitelist IP)

In conformità con la qualificazione SecNumCloud, l'accesso alla Console è limitato agli indirizzi IP pubblici dichiarati in precedenza. Da __Amministrazione > Accesso__, consulti e aggiungi gli IP e i subnet autorizzati.

<img src={shivaIpAccessManagement_01} />

- Consultare l'elenco: permesso `console_public_access_read`.
- Aggiungere un indirizzo: permesso `console_public_access_write`.
- La __rimozione__ di un IP autorizzato avviene tramite una richiesta di supporto.

### Proprietari e ciclo di vita di un tenant

Ogni tenant ha almeno un __proprietario__, che dispone automaticamente di tutti i permessi dei prodotti attivati su quel tenant. Questi permessi non sono modificabili e l'interfaccia avvisa oltre i 3 proprietari per incoraggiare il privilegio minimo. La rimozione di un proprietario avviene tramite una richiesta di supporto (vedere [Gestione dei proprietari su un tenant](iam/concepts.md#gestione-dei-proprietari-su-un-tenant)).

Puoi monitorare l'utilizzo di un tenant tramite il __Rapporto di consumo__ (vedere [Consumo di risorse all'interno di un tenant](iam/concepts.md#consumo-di-risorse-allinterno-di-un-tenant)).

La registrazione delle attività, anch'essa parte del modulo __Amministrazione__, è descritta di seguito.

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