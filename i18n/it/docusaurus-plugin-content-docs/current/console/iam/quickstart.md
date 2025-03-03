---
title: Guida di avvio
---

## Tenant

### Creazione di un tenant

La creazione di un tenant è realizzata tramite una richiesta di servizio indicando:

    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e n° di telefono per finalizzare la configurazione
    Il nome del tenant
    La zona di disponibilità o, in mancanza, il sito fisico desiderato per il tenant

### Selezione di un tenant

La selezione del tenant si effettua dalla pagina principale della console Shiva:

![](images/shiva_tenant.png)

*__Nota:__ Le risorse di un tenant gli sono proprie e non sono mescolabili con altri tenant.*

## Account di accesso alla console Shiva

Gli account di accesso alla console Shiva sono creati dall'account master del committente su invito (qualunque sia il riferimento di autenticazione).
Le informazioni di identificazione sono globali alla tua [Organizzazione](concepts.md#organisations).

*__Nota:__ La federazione d'identità si gestisce a livello dell'organizzazione*

### Creazione di un account utente nella tua organizzazione

La creazione di un account utente nella tua organizzazione avviene tramite invito. Per invitare un utente in un'[Organizzazione](concepts.md#organisations), vai nel menu __'Amministrazione'__ a sinistra dello schermo sulla barra verde e poi nel sottomenu __'Utenti'__.

Clicca sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

![](images/shiva_onboard_003.png)

Indica poi l'indirizzo email dell'utente

![](images/shiva_onboard_004.png)

L'utente riceverà quindi un'email di verifica.

![](images/shiva_onboard_001.png)

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione delle autorizzazioni a un utente

La gestione dei diritti utente avviene dalla pagina utente.

![](images/shiva_onboard_003.png)

Per impostazione predefinita, un utente non ha alcun diritto. È quindi necessario che l'amministratore che ha inviato l'invito gli conceda i diritti necessari per la sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.

Il menu di attivazione dei diritti appare quindi:

![](images/shiva_onboard_005.png)

La configurazione delle autorizzazioni deve essere effettuata per ogni [Tenant](concepts.md#tenants) dell'
[Organizzazione](concepts.md#organisations).

L'elenco delle autorizzazioni e la loro definizione è accessibile [qui](#permissions).

### Cambiare la lingua di un utente

Il cambio di lingua di un utente deve essere effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Impostazioni utente'__.

![](images/shiva_profil_006.png)

La configurazione è effettuata per ogni tenant [Tenant](concepts.md#tenants).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti permette di ricevere le email relative alle tematiche attivate che saranno automaticamente inviate al verificarsi degli eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

![](images/shiva_profil_007.png)

 Ad esempio, in caso di incidente, verranno generate notifiche via email specifiche per questa tematica.

L'elenco delle tematiche disponibili può evolvere e arricchirsi progressivamente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Autorizzazioni

### Quali sono le autorizzazioni disponibili per gli account utente della console Shiva?

Ecco l'elenco delle [autorizzazioni disponibili](#permissions).

### Come aggiungere un'autorizzazione?

Ecco la [procedura di assegnazione delle autorizzazioni disponibile qui](#permissions)

### Perché non posso aggiungere un'autorizzazione?

Per aggiungere un'autorizzazione, devi possedere l'autorizzazione __'iam_write'__ oltre all'autorizzazione che desideri aggiungere.

### Come aggiungere un utente?

*__Nota__: Per aggiungere un utente, devi possedere il diritto __'iam_write'__.*

### Come controllare gli accessi/le autorizzazioni degli utenti?

Vai sulla pagina degli utenti e clicca sul pulsante __'Esporta csv'__:

### Come eliminare un utente?

Nel menu __'Amministrazione'__ sulla barra verde a sinistra dello schermo, nel sottomenu __'utenti'__, clicca sull'icona __'Azione'__ dell'utente target e scegli __'Elimina'__.

*__Nota__:*
- *Per aggiungere un utente, devi possedere il diritto __'iam_write'__.*
- *Se si tratta di un utente federato, __assicurati che l'utente sia stato eliminato anche dal repository di identità__.*

### Come ripristinare la propria password?
È possibile ripristinare la propria password dalla pagina di login della console Shiva cliccando su __'Password dimenticata?'__.

### Perché alcuni utenti sono grigi?
Gli utenti grigi sono quelli che non hanno validato il loro account. Alla creazione dell'account, l'utente ha ricevuto un'email di verifica.

![](../../console/images/shiva_onboard_001.png)

Una volta terminata la verifica, l'utente potrà accedere alla console.

L'account rimane grigio finché la verifica non viene completata.

### Cos'è un Personal Access Token (PAT)?

La generazione di una chiave API, chiamata anche __Personal Access Token (PAT)__, è un modo sicuro per connettersi alle API Shiva senza passare per un'interfaccia grafica.

### Cos'è il MFA ed è obbligatorio?
Il MFA (multi-factor authentication) è un concetto di verifica dell'identità di un utente in due fasi, chiamata __autenticazione a due fattori__.

L'utente deve fornire due prove distinte di identità. Nel caso della console Shiva, l'autenticazione a due fattori è obbligatoria e richiede l'inserimento di un codice monouso una volta inserita la password dell'account.

## Gestione degli accessi e autenticazione

### Autorizzazione di accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP previamente autorizzati, in conformità con i requisiti della certificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato permettendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, riducendo così i rischi di accessi non autorizzati e proteggendo l'infrastruttura cloud secondo i più alti standard di sicurezza.

È ora possibile visualizzare l'elenco degli indirizzi IP pubblici autorizzati sul tenant e aggiungere un nuovo indirizzo IP pubblico a tale elenco direttamente dal tab "Amministrazione > Accesso".

![](images/shiva_ip_access_management_01.png)

Per farlo, l'utente deve disporre del diritto `console_public_access_read` per consultare gli IP autorizzati, e del diritto `console_public_access_write` per aggiungere un indirizzo IP pubblico all'elenco.

È quindi possibile aggiungere un nuovo IP:

![](images/shiva_ip_access_management_02.png)

Nota: *La rimozione di un IP autorizzato avviene tramite una richiesta di supporto nella console Cloud Temple.*