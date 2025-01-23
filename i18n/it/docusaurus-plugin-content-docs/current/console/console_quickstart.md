---
title: Quickstart
---

## Prérequis
- Avere sottoscritto un'offerta Cloud Temple. Per sottoscrivere semplicemente, puoi [contattarci](https://www.cloud-temple.com/contactez-nous/) o via email all'indirizzo __contact@cloud-temple.com__.
- Avere un accesso alla console Shiva
- Avere il proprio IPv4 pubblico dichiarato nella zona di fiducia Cloud Temple (l'accesso alla console shiva è limitato agli indirizzi di fiducia identificati)

## Connessione al tuo tenant Cloud Temple
Shiva è accessibile tramite l'URL qui sotto:
    https://shiva.cloud-temple.com
    Oppure dall'URL diretto che ti è stato comunicato via email.

La prima pagina ti permette di selezionare l'[organizzazione](iam/concepts.md#organisations) in cui il tuo utente è stato creato.
Una volta indicata l'azienda, clicca su __'Accedi'__.

![](images/shiva_login.png)

Sarai quindi reindirizzato verso una pagina che ti chiederà di autenticarti.
Una volta effettuato l'accesso, arriverai su questa pagina.

![](images/shiva_home.png)

## Gestione della lingua
La console è disponibile in __francese__, __inglese__. Puoi cambiare la lingua operativa tramite l'icona __lingua__ situata in alto a destra dello schermo.

Il cambio di lingua per un utente è da effettuare nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Impostazioni utente'__.

![](images/shiva_profil_006.png)

La configurazione è fatta per ogni tenant [Tenant](iam/concepts.md#tenant).

## Accesso all'assistenza tecnica

In qualsiasi momento, puoi contattare __il team di supporto Cloud Temple__ tramite l'icona __'boa'__ situata in alto a destra dello schermo.

![](images/shiva_support.png)

Sarai guidato durante tutto il processo di richiesta di supporto.

Il primo passo è l'identificazione del tipo di richiesta di supporto:

- Chiedere un consiglio sull'utilizzo di un prodotto (fuori incidente),
- Richiedere assistenza relativa al tuo account cliente,
- Segnalare un incidente o richiedere supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (disponibilità di un ingegnere Cloud Temple su una problematica).

![](images/shiva_support_01.png)

Hai quindi la possibilità di fornire dettagli e di includere file (immagine o registri ad esempio).

Il richiedente può anche specificare un livello di criticità (P1 a P4) nella descrizione del ticket, in caso di incidente, come:

**CRITICO (P1)**:

- Sospetto di perdita di dati sensibili
- Rilevamento di un accesso non autorizzato ai tuoi dati
- Compromissione delle tue credenziali di amministrazione
- Totale indisponibilità dei tuoi servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati personali

**ALTO (P2)**:

- Malfunzionamento degli accessi utenti
- Anomalia nella crittografia dei tuoi dati
- Perdita di accesso a determinate funzionalità critiche
- Incoerenza nei dati
- Gravi lentezze che impattano l'attività

**MEDIO (P3)**:

- Problema di prestazioni localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso occasionale

**BASSO (P4)**:

- Richiesta di indagine
- Anomalia senza impatto diretto
- Domanda di conformità
- Bisogno di chiarimento tecnico

![](images/shiva_support_02.png)

Una volta effettuata la tua richiesta, è possibile ritrovare le tue richieste tramite l'icona __'boa'__ situata in alto a destra dello schermo:

![](images/shiva_support_03.png)

## Accesso alle funzionalità utente tramite interfaccia web

Tutte le funzionalità accessibili al tuo utente (a seconda dei diritti) sono situate a sinistra dello schermo, nella fascia verde.
Le funzionalità sono raggruppate per modulo. Ciò comprende principalmente:

- L'__inventario__ delle tue risorse,
- Il __monitoraggio delle operazioni__,
- La __gestione delle risorse IaaS__ (Calcolo, archiviazione, rete, ...),
- La __gestione delle risorse OpenIaaS__ (Calcolo, archiviazione, rete, ...),
- Accesso ai __servizi accessori__ (Bastion, monitoraggio, ...),
- L'__amministrazione della tua organizzazione__ (Gestione dei tenant, dei diritti, ...).

L'attivazione di un modulo per un utente dipende dai diritti dell'utente. Ad esempio, il modulo __'Ordine'__ non sarà disponibile se l'utente non dispone del diritto __'ORDER'__.

Ecco una presentazione dei vari moduli disponibili. Nuovi moduli arricchiscono regolarmente la console:

![](images/shiva_onboard_007.png)

- __Dashboard__: permette di avere rapidamente una vista sul __totale delle risorse di calcolo e archiviazione__, le statistiche del __backup__ e una __sintesi delle richieste di supporto__,
- __Inventario__: permette di avere una vista di tutte le tue risorse di tipo __'macchine virtuali'__. Se vengono utilizzati i __tag__, permette una vista per __tag__ (ad esempio, vista commerciale, vista applicativa, ...),
- __Gestione__: dà accesso al monitoraggio delle tue __richieste di supporto__ e alla __metrologia dei servizi__,
- __IaaS__: permette la __gestione delle infrastrutture IaaS VMware__ (Macchine virtuali, cluster, hypervisor, repliche, backup, ...),
- __OpenIaaS__: permette la __gestione delle risorse Xen Orchestra__ (Macchine virtuali, backup, ...),
- __OpenShift__: permette la gestione della tua **architettura PaaS RedHat Openshift** e la gestione dei tuoi container nelle 3 zone di disponibilità della piattaforma.
- __Bastion__: Permette di distribuire e gestire le appliance bastion SSH/RDP nelle tue reti,
- __Rete__: permette la gestione delle __reti di livello 2 e 3__, degli __IP pubblici__ e dei tuoi __circuiti telecom__,
- __Colocation__: offre la vista sugli equipaggiamenti situati in zona di __collocamento condiviso o dedicato__,
- __Ordine__: permette l'ordinazione di risorse e il monitoraggio delle distribuzioni,
- __Amministrazione__: raggruppa le funzioni di amministrazione degli utenti e dei tenant e l'accesso alla registrazione globale.

I pittogrammi __'NEW'__ significano che il prodotto in questione è stato fornito ma non è ancora qualificato __offerta SecNumCloud__ e __'BETA'__ significano che il prodotto in questione è stato fornito ed è appena stato qualificato __offerta SecNumCloud__.

## Accesso alle funzionalità utente tramite API

L'accesso a tutte le funzionalità della console Shiva è possibile tramite l'API di Shiva. Puoi avere il dettaglio dei verbi e delle configurazioni tramite __'Profilo'__ e __'API'__:

![](images/shiva_onboard_008.png)

## Provider Terraform

Cloud Temple mette a disposizione un provider Terraform per gestire *"as code"* la tua piattaforma Cloud. È accessibile qui:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest