---
title: Guida introduttiva
---

##  Tenant

### Creazione di un tenant

La creazione di un tenant viene effettuata tramite una richiesta di servizio indicando:

    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e n° di telefono per finalizzare la configurazione
    Il nome del tenant
    La zona di disponibilità o, in alternativa, il sito fisico desiderato per il tenant


### Selezione di un tenant

La selezione del tenant si effettua dalla pagina principale della console Shiva:

![](images/shiva_tenant.png)


*__Nota:__ Le risorse di un tenant sono proprie e non possono essere mescolate con altri tenant.*



## Account di accesso alla console Shiva

Gli account di accesso alla console Shiva vengono creati dall'account principale del committente su invito (indipendentemente dal repository di autenticazione).
Le informazioni di identificazione sono globali alla tua [Organizzazione](concepts.md#organisations).

*__Nota:__ La federazione dell'identità è gestita a livello di organizzazione*

### Creazione di un account utente nella tua organizzazione

La creazione di un account utente nella tua organizzazione si effettua tramite invito. Per invitare un utente in una [Organizzazione](concepts.md#organisations), andare nel menu __'Amministrazione'__ a sinistra del tuo schermo nel banner verde e poi nel sottomenu __'Utenti'__.  

Clicca sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti. 

![](images/shiva_onboard_003.png)

Indica quindi l'indirizzo email dell'utente 

![](images/shiva_onboard_004.png)

L'utente riceverà quindi un'email di verifica.  

![](images/shiva_onboard_001.png)

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti utente si effettua dalla pagina utente. 

![](images/shiva_onboard_003.png)

Per impostazione predefinita, un utente non ha alcun diritto. È quindi necessario che l'amministratore che ha effettuato l'invito gli assegni i diritti necessari alla sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.  

Il menu di attivazione dei diritti appare quindi:

![](images/shiva_onboard_005.png)

La configurazione dei permessi deve essere effettuata per ogni [Tenant](concepts.md#tenants) dell'
[Organizzazione](concepts.md#organisations).

La lista dei permessi e la loro definizione è accessibile [qui](#permissions).

### Cambiare la lingua di un utente

Il cambio della lingua di un utente deve essere effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

![](images/shiva_profil_006.png)

La configurazione viene effettuata per ogni tenant [Tenant](concepts.md#tenants).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere le e-mail relative alle tematiche attivate che saranno automaticamente inviate quando si verificano eventi corrispondenti.

È accessibile nel profilo utente, nel tab "I miei abbonamenti":

![](images/shiva_profil_007.png)

 Ad esempio, in caso di incidente, verranno generate notifiche email specifiche per questa tematica.

La lista delle tematiche disponibili è soggetta ad evoluzione e ad arricchimento progressivo per adattarsi alle necessità e ai cambiamenti nel nostro ambiente operativo.


## Permessi

### Quali sono i permessi disponibili per gli account utente della console Shiva?

Ecco la lista dei [permessi disponibili](#permissions).

### Come aggiungere un permesso?

Ecco la [procedura di assegnazione del permesso è disponibile qui](#permissions)

### Perché non posso aggiungere un permesso?

Per aggiungere un permesso, è necessario possedere il permesso __'iam_write'__ oltre al __permesso che si desidera aggiungere__.

### Come aggiungere un utente?

*__Nota__ : Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*

### Come si effettua l'audit degli accessi/permessi degli utenti?

Vai sulla pagina utenti e clicca il pulsante __'Esporta csv'__:

### Come eliminare un utente?

Nel menu __'Amministrazione'__ nel banner verde a sinistra dello schermo, nel sottomenu __'utente'__, clicca sull'icona __'Azione'__ dell'utente desiderato e scegli __'Elimina'__.

*__nota__ :*
- *Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*
- *Se si tratta di un utente federato, __assicurarsi che l'utente sia stato eliminato anche dal repository di identità__.*

### Come reimpostare la propria password?
È possibile reimpostare la propria password dalla pagina di accesso della console Shiva cliccando su __'Password dimenticata?'__.

### Perché alcuni utenti sono grigiati?
Gli utenti grigiati sono quelli che non hanno validato il loro account. Durante la creazione dell'account, l'utente ha ricevuto un'email di verifica.  

![](../../console/images/shiva_onboard_001.png)

Una volta completata la verifica, l'utente potrà accedere alla console.  

L'account resta grigiato fino a quando la verifica non è stata finalizzata.

### Cos'è un Personal Access Token (PAT)?

La generazione di una chiave API, anche chiamata __Personal Access Token (PAT)__, 
è un modo sicuro di connettersi alle API Shiva senza passare per un'interfaccia grafica. 

### Cos'è l'MFA ed è obbligatorio?
L'MFA (autenticazione multi-fattoriale) è un concetto di verifica dell'identità di un utente in due passaggi, chiamato __autenticazione a due fattori__.

L'utente deve fornire due prove di identità distinte. Nel caso della console Shiva, l'autenticazione a due fattori è obbligatoria e richiede di inserire un codice a uso unico una volta che l'utente ha inserito la password del suo account. 


## Gestione degli accessi e autenticazione

### Autorizzazione di accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP preventivamente autorizzati, in conformità con i requisiti della qualifica SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato non permettendo l'accesso se non agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

È possibile visualizzare la lista degli indirizzi IP pubblici autorizzati sul tenant e aggiungere un nuovo indirizzo IP pubblico a questa lista direttamente dal tab "Amministrazione > Accesso".

![](images/shiva_ip_access_management_01.png)

Per farlo, l'utente deve disporre del diritto `console_public_access_read` per consultare gli IP autorizzati e del diritto `console_public_access_write` per aggiungere un indirizzo IP pubblico alla lista.

È quindi possibile aggiungere un nuovo IP:

![](images/shiva_ip_access_management_02.png)

Nota: *La rimozione di un IP autorizzato viene effettuata con una richiesta di supporto nella console Cloud Temple.*