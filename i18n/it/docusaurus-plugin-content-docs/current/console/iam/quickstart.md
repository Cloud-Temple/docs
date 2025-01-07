---
title: Quickstart
---

##  Tenant

### Creazione di un tenant

La creazione di un tenant viene effettuata tramite una richiesta di servizio che indica:

    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e n. di telefono per finalizzare la configurazione
    Il nome del tenant
    La zona di disponibilità o, in mancanza di essa, il sito fisico desiderato per il tenant


### Selezione di un tenant

La selezione del tenant avviene dalla pagina principale della console Shiva:

![](images/shiva_tenant.png)


*__Nota:__ Le risorse di un tenant sono proprie e non possono essere mescolate con altri tenant.*



## Account di accesso alla console Shiva

Gli account di accesso alla console Shiva sono creati dall'account principale del committente su invito (qualunque sia il sistema di autenticazione).
Le informazioni di identificazione sono globali alla tua [Organizzazione](concepts.md#organisations).

*__Nota:__ La federazione dell'identità viene gestita a livello dell'organizzazione*

### Creazione di un account utente nella tua organizzazione

La creazione di un account utente nella tua organizzazione viene effettuata tramite invito. Per invitare un utente in una [Organizzazione](concepts.md#organisations), vai nel menu __'Amministrazione'__ a sinistra dello schermo sulla banda verde e poi nel sottomenu __'Utenti'__.  

Clicca sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti. 

![](images/shiva_onboard_003.png)

Indica poi l'indirizzo email dell'utente 

![](images/shiva_onboard_004.png)

L'utente riceverà quindi un'email di verifica.  

![](images/shiva_onboard_001.png)

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti degli utenti avviene dalla pagina dell'utente. 

![](images/shiva_onboard_003.png)

Di default, un utente non ha diritti. È quindi necessario che l'amministratore che ha inviato l'invito gli conceda i diritti necessari per la sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.  

Il menu di attivazione dei diritti apparirà:

![](images/shiva_onboard_005.png)

La configurazione dei permessi deve essere effettuata per ogni [Tenant](concepts.md#tenants) dell'
[Organizzazione](concepts.md#organisations).

La lista dei permessi e la loro definizione è accessibile [qui](#permissions).

### Cambiare la lingua di un utente

Il cambio della lingua di un utente deve essere effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

![](images/shiva_profil_006.png)

La configurazione è effettuata per ogni tenant [Tenant](concepts.md#tenants).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere le email relative alle tematiche attivate che saranno automaticamente inviate in caso di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

![](images/shiva_profil_007.png)

 Ad esempio, in caso di incidente, saranno generate notifiche via email specifiche per quella tematica.

La lista delle tematiche disponibili è suscettibile di evoluzione e arricchimento progressivo per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.


## Permessi

### Quali sono i permessi disponibili per gli account utente della console Shiva?

Ecco la lista dei [permessi disponibili](#permissions).

### Come aggiungere un permesso?

Ecco la [procedura di assegnazione del permesso disponibile qui](#permissions)

### Perché non posso aggiungere un permesso?

Per aggiungere un permesso, è necessario possedere il permesso __'iam_write'__ oltre al __permesso che si desidera aggiungere__.

### Come aggiungere un utente?

*__Nota__ : Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*

### Come auditare gli accessi/permessi degli utenti?

Vai alla pagina utenti e clicca sul pulsante __'Esporta csv'__:

### Come eliminare un utente?

Nel menu __'Amministrazione'__ sulla banda verde a sinistra dello schermo, nel sottomenu __'utente'__, clicca sull'icona __'Azione'__ dell'utente target e scegli __'Elimina'__.

*__nota__ :*
- *Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*
- *Se si tratta di un utente federato, __assicurati che l'utente sia stato eliminato anche dal sistema di identità__.*

### Come reimpostare la propria password?
È possibile reimpostare la propria password dalla pagina di login della console Shiva cliccando su __'Password dimenticata?'__.

### Perché alcuni utenti sono grigiati?
Gli utenti grigiati sono quelli che non hanno validato il loro account. Durante la creazione dell'account, l'utente ha ricevuto un'email di verifica.  

![](../../console/images/shiva_onboard_001.png)

Una volta completata la verifica, l'utente potrà accedere alla console.  

L'account resta grigiato finché la verifica non è stata completata.

### Cos'è un Personal Access Token (PAT)?

La generazione di una chiave API, detta anche __Personal Access Token (PAT)__, è un modo sicuro di connettersi alle API Shiva senza passare per un'interfaccia grafica. 

### Cos'è il MFA ed è obbligatorio?
Il MFA (autenticazione multi-fattore) è un concetto di verifica dell'identità di un utente in due fasi, detto __autenticazione a due fattori__.

L'utente deve fornire due prove di identità distinte. Nel caso della console Shiva, l'autenticazione a due fattori è obbligatoria e richiede l'inserimento di un codice monouso una volta che l'utente ha inserito la password del suo account.


## Gestione degli accessi e autenticazione

### Autorizzazione di accesso a un tenant: IP autorizzate

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP preventivamente autorizzati, in conformità con i requisiti della qualificazione SecNumCloud. Questa restrizione assicura un livello di sicurezza rafforzato permettendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo i più alti standard di sicurezza.

Ora è possibile visualizzare la lista degli indirizzi IP pubblici autorizzati sul tenant e aggiungere un nuovo indirizzo IP pubblico a questa lista direttamente dalla scheda "Amministrazione > Accessi". 

![](images/shiva_ip_access_management_01.png)

Per farlo, l'utente deve avere il diritto `console_public_access_read` per consultare gli IP autorizzati, e il diritto `console_public_access_write` per aggiungere un indirizzo IP pubblico alla lista.

È quindi possibile aggiungere un nuovo IP:

![](images/shiva_ip_access_management_02.png)

Nota: *La rimozione di un IP autorizzato viene effettuata tramite una richiesta di supporto nella console Cloud Temple.*

### Cos'è il captcha? Perché può bloccare l'accesso all'applicazione?
Il __'Captcha'__ è una misura di sicurezza che protegge il tuo account dallo spam e impedisce qualsiasi tentativo di decifrazione della password.

Il __'Captcha'__ presenta un semplice test per verificare che si tratta realmente di un essere umano e non di un robot che cerca di accedere all'account. 

La console Cloud Temple utilizza un Captcha di tipo v3. Il tipo v3 è un test invisibile che stabilisce un indice di fiducia basato sulle interazioni dell'utente. 

La console Cloud Temple si basa su questo punteggio di indice di fiducia per autorizzare o meno l'utente a connettersi. 

Se incontri difficoltà con il test __'Captcha'__ per connetterti alla console Shiva, contatta il supporto utenti.