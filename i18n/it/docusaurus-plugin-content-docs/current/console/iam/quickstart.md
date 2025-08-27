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

## Tenant

### Creazione di un tenant

La creazione di un tenant viene effettuata tramite una richiesta di servizio indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    La zona di disponibilità o, in mancanza, il sito fisico desiderato per il tenant

### Selezione di un tenant

La selezione del tenant si fa dalla pagina principale della console Shiva:

<img src={shivaTenant} />

*__Nota:__ Le risorse di un tenant sono proprie e non possono essere mescolate con altri tenant.*

## Account di accesso alla console Shiva

Gli account di accesso alla console Shiva sono creati dall'account master del committente su invito (qualunque sia il repository di autenticazione).
Le credenziali sono globali per la vostra [Organizzazione](concepts.md#organisations).

*__Nota:__ La federazione di identità si gestisce a livello dell'organizzazione*

### Creazione di un account utente nella vostra organizzazione

La creazione di un account utente nella vostra organizzazione si fa per invito. Per invitare un utente in un'[Organizzazione](concepts.md#organisations), andare nel menu __'Amministrazione'__ a sinistra dello schermo sulla barra verde e poi nel sottomenu __'Utenti'__.

Cliccare sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Indicare poi l'indirizzo email dell'utente.

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà connettersi alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti utente si fa dalla pagina utente.

<img src={shivaOnboard_003} />

Di default, un utente non ha diritti. È quindi necessario che l'amministratore che ha fatto l'invito gli conceda i diritti necessari alla sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.

Appare quindi il menu di attivazione dei diritti:

<img src={shivaOnboard_005} />

La configurazione dei permessi deve essere fatta per ogni [Tenant](concepts.md#tenant) dell'[Organizzazione](concepts.md#organisations).

La lista dei permessi e le loro definizioni è accessibile [qui](#permissions).

### Cambiare la lingua di un utente

Il cambio di lingua di un utente si fa dal suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione viene fatta per ogni [Tenant](concepts.md#tenant).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti permette di ricevere email relative alle tematiche attivate che saranno automaticamente inviate al verificarsi di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

<img src={shivaProfil_007} />

Per esempio, in caso di incidente, verranno generate notifiche email specifiche a questa tematica.

La lista delle tematiche disponibili è suscettibile di evolversi e arricchirsi progressivamente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Permessi

### Quali permessi sono disponibili per gli account utente della console Shiva?

Ecco la lista dei [permessi disponibili](#permissions).

### Come aggiungere un permesso?

La [procedura di assegnazione dei permessi è disponibile qui](#permissions).

### Perché non posso aggiungere un permesso?

Per aggiungere un permesso, è necessario possedere il permesso __'iam_write'__ così come il __permesso che si desidera aggiungere__.

### Come aggiungere un utente?

*__Nota__: Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*

### Come verificare gli accessi/permessi degli utenti?

Andare sulla pagina utenti e cliccare sul pulsante __'Esporta csv'__:

### Come eliminare un utente?

Nel menu __'Amministrazione'__ sulla barra verde a sinistra dello schermo, nel sottomenu __'utenti'__, cliccare sull'icona __'Azione'__ dell'utente target e scegliere __'Elimina'__.

*__Nota__:*

- *Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*
- *Se si tratta di un utente federato, __assicurarsi che l'utente sia stato eliminato anche dal repository di identità__.*

### Come reimpostare la password?

È possibile reimpostare la propria password dalla pagina di connessione della console Shiva cliccando su __'Password dimenticata?'__.

### Perché alcuni utenti sono in grigio?

Gli utenti in grigio sono quelli che non hanno validato il loro account. Quando è stato creato l'account, l'utente ha ricevuto un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà connettersi alla console.

L'account è in grigio finché la verifica non è stata completata.

### Cos'è un Personal Access Token (PAT)?

La generazione di una chiave API, anche chiamata __Personal Access Token (PAT)__, è un modo sicuro per connettersi alle API Shiva senza passare da un'interfaccia grafica.

### Cos'è l'MFA ed è obbligatorio?

L'MFA (multi-factor authentication) è un concetto di verifica dell'identità di un utente in due fasi, chiamata __autenticazione a due fattori__.

L'utente deve fornire due prove di identità distinte. Nel caso della console Shiva, l'autenticazione a due fattori è obbligatoria e richiede di inserire un codice monouso una volta che l'utente ha inserito la password del suo account.

## Gestione degli accessi e autenticazione

### Autorizzazione di accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con le esigenze della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato permettendo l'accesso solo agli utenti provenienti da range di IP specificati, minimizzando così i rischi di accessi non autorizzati e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

È ora possibile visualizzare la lista degli indirizzi IP pubblici autorizzati sul tenant e aggiungere un nuovo indirizzo IP pubblico a questa lista direttamente dalla scheda "Amministrazione > Accesso".

<img src={shivaIpAccessManagement_01} />

Per fare ciò, l'utente deve disporre del diritto `console_public_access_read` per consultare gli IP autorizzati, e del diritto `console_public_access_write` per aggiungere un indirizzo IP pubblico alla lista.

È quindi possibile aggiungere un nuovo IP:

<img src={shivaIpAccessManagement_02} />

Nota: *La rimozione di un IP autorizzato si fa tramite una richiesta di supporto nella console Cloud Temple.*
