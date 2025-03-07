---
title: Guida introduttiva
---
import shivaTenant from './images/shiva_tenant.png'
import shivaOnboard_003 from './images/shiva_onboard_003.png'
import shivaOnboard_004 from './images/shiva_onboard_004.png'
import shivaOnboard_001 from './images/shiva_onboard_001.png'
import shivaOnboard_005 from './images/shiva_onboard_005.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaProfil_007 from './images/shiva_profil_007.png'
import shivaIpAccessManagement_01 from './images/shiva_ip_access_management_01.png'
import shivaIpAccessManagement_02 from './images/shiva_ip_access_management_02.png'

##  Tenant

### Creazione di un tenant

La creazione di un tenant viene effettuata tramite una richiesta di servizio che indica:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua mail e il numero di telefono per finalizzare la configurazione
    Il nome del tenant
    L'area di disponibilità o, in mancanza, il sito fisico desiderato per il tenant


### Selezione di un tenant

La selezione del tenant avviene dalla pagina principale della console Shiva:

<img src={shivaTenant} />


*__Nota:__ Le risorse di un tenant gli sono proprie e non possono essere mescolate con altri tenant.*



## Account di accesso alla console Shiva

Gli account di accesso alla console Shiva sono creati dall'account principale del committente su invito (indipendentemente dal riferimento di autenticazione).
Le informazioni di identificazione sono globali per la tua [Organizzazione](concepts.md#organisations).

*__Nota:__ La federazione dell'identità è gestita a livello organizzativo*

### Creazione di un account utente nella tua organizzazione

La creazione di un account utente nella tua organizzazione avviene tramite invito. Per invitare un utente in una [Organizzazione](concepts.md#organisations), andare nel menu __'Amministrazione'__ a sinistra dello schermo sul banner verde e poi nel sottomenu __'Utenti'__.

Cliccare sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Indicare quindi l'indirizzo di posta elettronica dell'utente

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti degli utenti avviene dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Per default, un utente non ha diritti. È quindi necessario che l'amministratore che ha fatto l'invito gli conceda i diritti necessari per la sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.

Appare quindi il menu di attivazione dei diritti:

<img src={shivaOnboard_005} />

La configurazione dei permessi è da effettuare per ogni [Tenant](concepts.md#tenants) dell'
[Organizzazione](concepts.md#organisations).

L'elenco dei permessi e la loro definizione è accessibile [qui](#permissions).

### Cambiare la lingua di un utente

Il cambiamento della lingua di un utente è da effettuare nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

<img src={shivaProfil_006} />

La configurazione è effettuata per ogni tenant [Tenant](concepts.md#tenants).

### Iscrizione alle notifiche tematiche

La gestione delle iscrizioni permette di ricevere le email relative ai temi attivati che saranno automaticamente inviate al verificarsi degli eventi corrispondenti.

Essa è accessibile nel profilo utente, nella scheda "I miei abbonamenti":

<img src={shivaProfil_007} />

 Ad esempio, in caso di incidente, saranno generate notifiche via email specifiche per questo tema.

L'elenco dei temi disponibili è suscettibile di evolversi e arricchirsi progressivamente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.


## Permessi

### Quali sono i permessi disponibili per gli account utente della console Shiva?

Ecco l'elenco dei [permessi disponibili](#permissions).

### Come aggiungere un permesso?

Ecco la [procedura di assegnazione del permesso disponibile qui](#permissions)

### Perché non posso aggiungere un permesso?

Per aggiungere un permesso, è necessario avere il permesso __'iam_write'__ oltre al __permesso che desideri aggiungere__.

### Come aggiungere un utente?

*__Nota__ : Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*

### Come controllare l'accesso/i permessi degli utenti?

Vai alla pagina degli utenti e clicca sul pulsante __'Esporta csv'__:

### Come eliminare un utente?

Nel menu __'Amministrazione'__ sul banner verde a sinistra dello schermo, nel sottomenu __'utente'__, cliccare sull'icona __'Azione'__ dell'utente target e scegliere __'Elimina'__.

*__nota__ :*
- *Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*
- *Se si tratta di un utente federato, __assicurati che l'utente sia stato eliminato anche dal riferimento di identità__.*

### Come reimpostare la password?
È possibile reimpostare la password dalla pagina di accesso alla console Shiva cliccando su __'Password dimenticata ?'__.

### Perché alcuni utenti sono grigiati?
Gli utenti grigiati sono quelli che non hanno convalidato il loro account. Durante la creazione dell'account, l'utente ha ricevuto un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

L'account è grigiato finché la verifica non è stata completata.

### Cos'è un Personal Access Token (PAT)?

La generazione di una chiave API, anche chiamata __Personal Access Token (PAT)__,
è un modo sicuro per connettersi alle API Shiva senza passare attraverso un'interfaccia grafica.

### Cos'è il MFA ed è obbligatorio?
Il MFA (multi-factor authentication) è un concetto di verifica dell'identità dell'utente in due passaggi, chiamata __autenticazione a due fattori__.

L'utente deve fornire due prove distinte di identità. Nel caso della console Shiva, l'autenticazione a due fattori è obbligatoria e richiede l'inserimento di un codice a uso unico una volta che l'utente ha inserito la password del proprio account.


## Gestione degli accessi e autenticazione

### Autorizzazione di accesso a un tenant: IP autorizzate

L'accesso alla console di gestione del cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con le esigenze della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato permettendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo i più alti standard di sicurezza.

È ora possibile visualizzare l'elenco degli indirizzi IP pubblici autorizzati sul tenant e aggiungere un nuovo indirizzo IP pubblico a questo elenco direttamente dalla scheda "Amministrazione > Accesso".

<img src={shivaIpAccessManagement_01} />

Per questo, l'utente deve disporre del diritto `console_public_access_read` per consultare gli IP autorizzati, e del diritto `console_public_access_write` per aggiungere un indirizzo IP pubblico all'elenco.

È quindi possibile aggiungere un nuovo IP:

<img src={shivaIpAccessManagement_02} />

Nota: *La rimozione di un IP autorizzato avviene tramite una richiesta di supporto nella console Cloud Temple.*