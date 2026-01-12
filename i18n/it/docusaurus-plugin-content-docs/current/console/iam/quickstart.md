---
title: Guida di avvio
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

La creazione di un tenant viene effettuata tramite una richiesta di servizio che indica:

    Il nome della vostra Organizzazione
    Il nome di un referente con mail e numero di telefono per completare la configurazione
    Il nome del tenant
    La zona di disponibilità oppure, in mancanza, il sito fisico desiderato per il tenant

### Selezione di un tenant

La selezione del tenant avviene dalla pagina principale della Console:

<img src={shivaTenant} />

*__Nota:__ Le risorse di un tenant sono esclusive e non possono essere condivise con altri tenant.*

## Access accounts to the Console

Access accounts to the Console are created by the sponsor's master account upon invitation (regardless of the authentication repository).

Credentials are global to your [Organization](concepts.md#organizations).

*__Nota:__ Identity federation is managed at the organization level*

### Creazione di un account utente nella tua organizzazione

La creazione di un account utente nella tua organizzazione avviene tramite invito. Per invitare un utente a un'[Organizzazione](concepts.md#organisations), vai nel menu __'Amministrazione'__ a sinistra nella barra verde, quindi nel sottomenu __'Utenti'__.

Fai clic sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Indica quindi l'indirizzo email dell'utente.

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti utente avviene dalla pagina utente.

<img src={shivaOnboard_003} />

Per impostazione predefinita, un utente non ha diritti. È quindi necessario che l'amministratore che ha inviato l'invito gli attribuisca i diritti necessari per la sua attività. Basta fare clic sul menu __'Azioni'__ dell'utente e selezionare l'opzione __'Modifica'__.

Viene quindi visualizzato il menu per l'attivazione dei diritti:

<img src={shivaOnboard_005} />

La configurazione dei permessi deve essere effettuata per ogni [Tenant](concepts.md#tenant) dell'[Organizzazione](concepts.md#organisations).

L'elenco dei permessi e la loro definizione è disponibile [qui](#permissions).

### Cambiare la lingua di un utente

La modifica della lingua di un utente deve essere effettuata nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione viene effettuata per ogni tenant [Tenant](concepts.md#tenant).

### Iscrizione alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere email relative alle tematiche attivate, che vengono inviate automaticamente in caso di verificarsi di eventi corrispondenti.

È accessibile dal profilo utente, nella scheda "I miei abbonamenti":

<img src={shivaProfil_007} />

Ad esempio, in caso di incidente, verranno generate notifiche via email specifiche per questa tematica.

L'elenco delle tematiche disponibili può evolversi e arricchirsi progressivamente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Permessi

### Quali sono le autorizzazioni disponibili per gli account utente della Console?

Ecco l'elenco delle [autorizzazioni disponibili](#permissions).

### Come aggiungere un'autorizzazione?

La [procedura di assegnazione dell'autorizzazione è disponibile qui](#permissions)

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you want to add__.

### Come aggiungere un utente?

*__Nota__ : Per aggiungere un utente, è necessario disporre del permesso __'iam_write'__.*

### Come auditare gli accessi/permessi degli utenti?

Vai alla pagina degli utenti e fai clic sul pulsante __'Esporta in CSV'__:

### Come eliminare un utente?

Nel menu __'Amministrazione'__ sulla barra verde a sinistra dello schermo, nel sottomenu __'utente'__, fare clic sull'icona __'Azioni'__ dell'utente di interesse e scegliere __'Elimina'__.

*__Nota__ :*

- *Per aggiungere un utente, è necessario disporre del permesso __'iam_write'__.*
- *Se si tratta di un utente federato, __assicurarsi che l'utente sia stato eliminato anche dal repository di identità__.*

### Come reimpostare la password?

È possibile reimpostare la password dalla pagina di accesso della Console facendo clic su __'Password dimenticata?'__.

### Perché alcuni utenti sono grigi?

Gli utenti grigi sono quelli che non hanno ancora confermato il loro account. Al momento della creazione del conto, l'utente ha ricevuto un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

Il conto rimane grigio finché la verifica non è stata completata.

### Cos'è un Personal Access Token (PAT)?

La generazione di una chiave API, nota anche come __Personal Access Token (PAT)__,
è un modo sicuro per connettersi alle API Console senza dover passare attraverso un'interfaccia grafica.

### Cos'è l'MFA e obbligatorio?

L'MFA (multi-factor authentication) è un concetto di verifica dell'identità di un utente in due fasi, chiamato __autenticazione a due fattori__.

L'utente deve fornire due prove di identità distinte. Nel caso della Console, l'autenticazione a due fattori è obbligatoria e richiede di inserire un codice a uso singolo una volta immesso la password del proprio account.

## Gestione degli accessi e autenticazione

### Autorizzazione all'accesso a un tenant: IP autorizzate

L'accesso alla console di gestione cloud è strettamente limitato alle indirizzi IP precedentemente autorizzati, in conformità con i requisiti della qualifica SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato, consentendo l'accesso soltanto agli utenti provenienti da intervalli IP specifici, riducendo così i rischi di accessi non autorizzati e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

È ora possibile visualizzare l'elenco degli indirizzi IP pubblici autorizzati sul tenant e aggiungere un nuovo indirizzo IP pubblico a tale elenco direttamente dall'opzione "Amministrazione > Accesso".

<img src={shivaIpAccessManagement_01} />

Per effettuare queste operazioni, l'utente deve disporre del permesso `console_public_access_read` per consultare le IP autorizzate e del permesso `console_public_access_write` per aggiungere un indirizzo IP pubblico all'elenco.

È quindi possibile aggiungere una nuova IP:

<img src={shivaIpAccessManagement_02} />

Nota: *La rimozione di un indirizzo IP autorizzato avviene tramite richiesta di supporto nella console Cloud Temple.*