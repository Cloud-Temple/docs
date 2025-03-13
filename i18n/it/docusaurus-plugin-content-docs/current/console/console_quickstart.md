---
title: Guida rapida
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

- Aver sottoscritto un'offerta Cloud Temple. Per sottoscrivere facilmente, potete [contattarci](https://www.cloud-temple.com/contactez-nous/) o via email all'indirizzo __contact@cloud-temple.com__.
- Avere accesso alla console Shiva
- Avere il vostro IPv4 pubblico dichiarato nella zona di fiducia Cloud Temple (l'accesso alla console Shiva è limitato agli indirizzi di fiducia identificati)

## Connessione al vostro tenant Cloud Temple

Shiva è accessibile tramite l'URL seguente: [Shiva](https://shiva.cloud-temple.com) oppure dall'URL diretta che vi è stata comunicata via email.

La prima pagina vi permette di selezionare [l'organizzazione](iam/concepts.md#organisations) in cui è stato creato il vostro utente.
Una volta inserita l'azienda, cliccate su __'Accedi'__.

<img src={shivaLogin} />

Sarete quindi reindirizzati a una pagina che vi chiederà di autenticarvi.
Una volta connessi, arriverete su questa pagina.

<img src={shivaHome} />

## Gestione della lingua

La console è disponibile in __francese__ e __inglese__. Potete cambiare la lingua di funzionamento grazie all'icona __lingua__ situata in alto a destra dello schermo.

Il cambio di lingua di un utente si realizza nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione viene fatta per ogni [Tenant](iam/concepts.md#tenant).

## Accesso al supporto tecnico

In qualsiasi momento, potete contattare il __team di supporto Cloud Temple__ tramite l'__icona 'salvagente'__ situata in alto a destra dello schermo.

<img src={shivaSupport} />

Sarete guidati durante tutto il processo di richiesta di supporto.

Il primo passo è l'identificazione del tipo di richiesta di supporto:

- Richiedere un consiglio sull'utilizzo di un prodotto (al di fuori degli incidenti),
- Richiedere assistenza in relazione al vostro account cliente,
- Dichiarare un incidente o richiedere un supporto tecnico,
- Richiedere l'assistenza di un servizio professionale (messa a disposizione di un ingegnere Cloud Temple su una problematica).

<img src={shivaSupport_01} />

Avete poi la possibilità di fornire precisazioni e includere file (immagine o log, ad esempio).

Il richiedente può anche precisare un livello di criticità (da P1 a P4) nella descrizione del ticket, in caso di incidente, come:

__CRITICO (P1)__:

- Sospetto di fuga di dati sensibili
- Rilevamento di un accesso non autorizzato ai vostri dati
- Compromissione delle vostre credenziali di amministrazione
- Indisponibilità totale dei vostri servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati personali

__ALTO (P2)__:

- Malfunzionamento degli accessi utenti
- Anomalia nella crittografia dei vostri dati
- Perdita di accesso a certe funzionalità critiche
- Incoerenza nei dati
- Rallentamenti maggiori che impattano l'attività

__MEDIO (P3)__:

- Problema di performance localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso puntuale

__BASSO (P4)__:

- Richiesta di investigazione
- Anomalia senza impatto diretto
- Domanda di conformità
- Necessità di chiarimento tecnico

<img src={shivaSupport_02} />

Una volta effettuata la vostra richiesta, è possibile ritrovare le vostre richieste tramite l'__icona 'salvagente'__ situata in alto a destra dello schermo:

<img src={shivaSupport_03} />

## Accesso alle funzionalità utente tramite l'interfaccia web

L'insieme delle funzionalità accessibili al vostro utente (in funzione dei suoi diritti) si trova a sinistra dello schermo, nella fascia verde.
Le funzionalità sono raggruppate per modulo. Questo include principalmente:

- L'__inventario__ delle vostre risorse,
- Il __monitoraggio delle operazioni__,
- La __gestione delle risorse IaaS__ (Calcolo, archiviazione, rete, ...),
- La __gestione delle risorse OpenIaaS__ (Calcolo, archiviazione, rete, ...),
- L'accesso ai __servizi annessi__ (Bastion, monitoraggio, ...),
- L'__amministrazione della vostra organizzazione__ (Gestione dei tenant, dei diritti, ...).

L'attivazione di un modulo per un utente dipende dai diritti dell'utente. Ad esempio, il modulo __'Ordine'__ non sarà disponibile se l'utente non dispone del diritto __'ORDER'__.

Ecco una presentazione dei diversi moduli disponibili. Nuovi moduli arricchiscono regolarmente la console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: permette di avere rapidamente una vista sul __totale delle risorse di calcolo e di archiviazione__, le statistiche del __backup__ e una __sintesi dei dossier di supporto__,
- __Inventario__: permette di avere una vista dell'insieme delle vostre risorse di tipo __'macchine virtuali'__. Se vengono utilizzati i __tag__, permette di avere una vista per __tag__ (ad esempio, vista business, vista applicativa, ...),
- __Servizi gestiti__: dà accesso al monitoraggio delle vostre __richieste di supporto__ e alla metrologia dei servizi,
- __IaaS__: permette la __gestione delle infrastrutture IaaS VMware__ (Macchine virtuali, cluster, hypervisor, replicazioni, backup, ...),
- __OpenIaaS__: permette la __gestione delle risorse Xen Orchestra__ (Macchine virtuali, backup, ...),
- __OpenShift__: permette la gestione della vostra **architettura PaaS RedHat Openshift** e la gestione dei vostri container sulle 3 zone di disponibilità della piattaforma,
- __Bastion__: Permette di distribuire e gestire appliance bastion SSH/RDP nelle vostre reti,
- __Rete__: permette la gestione delle __reti di livello 2 e 3__, degli __IP pubblici__ e dei vostri __circuiti di telecomunicazione__,
- __Colocation__: Offre la vista sugli equipaggiamenti situati in zona di __colocation condivisa o dedicata__,
- __Ordine__: Permette l'ordine di risorse e il monitoraggio delle distribuzioni,
- __Amministrazione__: Raggruppa le funzioni di amministrazione degli utenti e dei tenant così come l'accesso alla registrazione globale.
</div>
</div>
I pittogrammi __'NEW'__ significano che il prodotto in questione è stato approvvigionato ma non è ancora qualificato come __offerta SecNumCloud__ e __'BETA'__ significano che il prodotto in questione è stato approvvigionato ed è appena stato qualificato come __offerta SecNumCloud__.

__Registrazione - Monitoraggio delle Attività__
=====================================

La pagina delle attività è destinata a fornire una visibilità completa su tutte le operazioni di lettura e scrittura realizzate all'interno della console, assicurando così una tracciabilità e una sicurezza aumentate. Evidenzia le due schede principali: Recenti e Archiviate.

<img src={shivaLogs} />

### __Struttura della Pagina__

#### __Schede__

 + **Recenti**

- Operazioni recenti
- Monitoraggio in tempo reale

 + __Archiviate__

- Operazioni su un periodo più lungo
- Operazioni archiviate per tracciabilità e conformità

#### __Informazioni Visualizzate__

 + Data e Ora
 + Tipo di operazione
 + Stato
 + Utente
 + Descrizione dell'operazione

#### __Funzionalità__

 + Ricerca/Filtro per operazioni specifiche

### __Utilizzo__

- __Accesso:__ permesso `activity_read`
- __Navigazione:__
  - Selezionate la scheda "Recenti" per le operazioni in tempo reale.
  - Scegliete "Archiviate" per consultare la cronologia.
  - Utilizzate le funzionalità di ricerca e filtro per localizzare operazioni specifiche.

#### __Nota di Conformità__

Conformemente alla qualifica SecNumCloud, la conservazione degli eventi della console Cloud Temple è di una durata minima di __6 mesi__, garantendo così il rispetto delle esigenze di sicurezza e tracciabilità.

## Consultazione degli ultimi aggiornamenti

Cliccate in basso a sinistra della fascia verde sull'icona __'Novità'__. Avrete il dettaglio delle modifiche per ogni versione della console Cloud Temple.

<img src={shivaOnboard_009} />

## Accesso alle funzionalità utente tramite l'API

L'accesso all'insieme delle funzionalità della console Shiva è possibile tramite l'API Shiva. Potete avere il dettaglio dei verbi e delle configurazioni tramite __'Profilo'__ e __'API'__:

<img src={shivaOnboard_008} />

## Provider Terraform

Cloud Temple mette a vostra disposizione un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) per gestire *"as code"* la vostra piattaforma Cloud.
