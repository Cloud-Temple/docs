---
title: Guida di avvio
---
import shivaTenant from '@site/docs/console/iam/images/shiva_tenant.png'
import shivaOnboard_003 from '@site/docs/console/iam/images/shiva_onboard_003.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaProfil_006 from '@site/docs/console/iam/images/shiva_profil_006.png'
import shivaProfil_007 from '@site/docs/console/iam/images/shiva_profil_007.png'
import shivaOrgAccess from '@site/docs/console/images/shiva_org_access.png'
import shivaIpAccessManagement_02 from '@site/docs/console/iam/images/shiva_ip_access_management_02.png'

## Tenant

### Creazione di un tenant

La creazione di un tenant viene effettuata __in self-service__ dalla Console, senza richiesta di servizio preliminare. Da __'Amministrazione > Tenants'__, il pulsante __'Nuovo tenant'__ apre un modulo in due parti: l'identità del tenant (nome e descrizione) e i prodotti da attivare.

La procedura dettagliata è descritta nel [Quickstart Console](../console_quickstart.md).

### Selezione di un tenant

La selezione del tenant viene effettuata dalla pagina principale della Console:

<img src={shivaTenant} />

*__Nota:__ Le risorse di un tenant sono di sua proprietà e non sono mescolabili con altri tenant.*

## Account di accesso alla Console

Gli account di accesso alla Console vengono creati dall'account principale del committente su invito (indipendentemente dal registro di autenticazione).
Le credenziali sono globali per la vostra [Organizzazione](concepts.md#organizzazioni).

*__Nota:__ La federazione delle identità viene gestita a livello di organizzazione*

### Creazione di un account utente nella vostra organizzazione

La creazione di un account utente nella vostra organizzazione viene effettuata tramite invito. Per invitare un utente in un'[Organizzazione](concepts.md#organizzazioni), andare nel menu __'Amministrazione'__ a sinistra dello schermo sulla barra verde e poi nel sottomenu __'Utenti'__.

Fare clic sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Indicare quindi l'indirizzo di posta elettronica dell'utente

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'e-mail di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti utente viene effettuata dalla pagina utente.

<img src={shivaOnboard_003} />

Per impostazione predefinita, un utente non ha alcun diritto. È quindi necessario che l'amministratore che ha effettuato l'invito gli conceda i diritti necessari per la sua attività. Basta fare clic sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.

Il menu di attivazione dei diritti viene quindi visualizzato:

<img src={shivaOnboard_005} />

La configurazione dei permessi deve essere effettuata per ogni [Tenant](concepts.md#tenant) dell'
[Organizzazione](concepts.md#organizzazioni).

L'elenco dei permessi e la loro definizione è accessibile [qui](#permessi).

### Cambiare la lingua di un utente

Il cambio di lingua di un utente va effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione viene effettuata per ogni tenant [Tenant](concepts.md#tenant).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere le e-mail relative alle tematiche attivate che verranno automaticamente inviate in caso di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

<img src={shivaProfil_007} />

 Ad esempio, in caso di incidente, verranno generate notifiche via e-mail specifiche per questa tematica.

L'elenco delle tematiche disponibili è soggetto a evoluzione e arricchimento progressivo per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Permessi

### Quali sono i permessi disponibili per gli account utente della Console?

Ecco l'elenco dei [permessi disponibili](#permessi).

### Come aggiungere un permesso?

Ecco la [procedura di assegnazione del permesso disponibile qui](#permessi)

### Perché non posso aggiungere un permesso?

Per aggiungere un permesso, è necessario possedere il permesso __'iam_write'__ nonché il __permesso che si desidera aggiungere__.

### Come aggiungere un utente?

*__Nota__ : Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*

### Come auditare gli accessi/permessi degli utenti?

Andare sulla pagina utenti e fare clic sul pulsante __'Esporta csv'__ :

### Come eliminare un utente?

Nel menu __'Amministrazione'__ sulla barra verde a sinistra dello schermo, nel sottomenu __'utente'__, fare clic sull'icona __'Azione'__ dell'utente target e scegliere __'Elimina'__.

*__nota__ :*

- *Per aggiungere un utente, è necessario possedere il diritto __'iam_write'__.*
- *Se si tratta di un utente federato, __assicurarsi che l'utente sia stato eliminato anche dal registro di identità__.*

### Come reimpostare la propria password?

È possibile reimpostare la propria password dalla pagina di accesso della Console facendo clic su __'Password dimenticata ?'__.

### Perché alcuni utenti sono grigiati?

Gli utenti grigiati sono quelli che non hanno validato il proprio account. Durante la creazione dell'account, l'utente ha ricevuto un'e-mail di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

L'account rimane grigiato finché la verifica non è stata completata.

### Cos'è un Personal Access Token (PAT)?

La generazione di una chiave API, anche chiamata __Personal Access Token (PAT)__,
è un modo sicuro per accedere alle API Console senza passare da un'interfaccia grafica.

### Cos'è il MFA ed è obbligatorio?

Il MFA (multi-factor authentication) è un concetto di verifica dell'identità di un utente in due fasi, chiamato __autenticazione a doppio fattore__.

L'utente deve fornire due prove di identità distinte. Nel caso della Console, l'autenticazione a doppio fattore è obbligatoria e richiede di inserire un codice a uso singolo una volta che l'utente ha inserito la password del proprio account.

## Gestione degli accessi e autenticazione

### Autorizzazione di accesso alla Console: IP autorizzate

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con i requisiti della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato consentendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

L'elenco è quello dell'__organizzazione__: un indirizzo aggiunto da qualsiasi tenant autorizza l'accesso alla Console per l'intera organizzazione. È consultabile e arricchibile dalla scheda __'Amministrazione > Accessi'__.

<img src={shivaOrgAccess} />

Per questo, l'utente deve disporre del diritto `console_public_access_read` per consultare gli IP autorizzati e del diritto `console_public_access_write` per aggiungere un indirizzo IP pubblico all'elenco.

È quindi possibile aggiungere un nuovo IP:

<img src={shivaIpAccessManagement_02} />

Nota: *L'eliminazione di un IP autorizzato viene effettuata tramite una richiesta di supporto nella console Cloud Temple.*
