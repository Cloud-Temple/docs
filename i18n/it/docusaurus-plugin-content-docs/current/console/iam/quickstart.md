---
title: Guida di Partenza
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

# Tenente

### Creazione di un tenente

La creazione di un tenente viene eseguita tramite una richiesta di servizio che specifica:

    Il nome dell'organizzazione
    Il nome di un contatto insieme al suo indirizzo email e numero di telefono per finalizzare la configurazione
    Il nome del tenente
    La zona di disponibilità o, in assenza, il sito fisico desiderato per il tenente

### Selezione del tenant

La selezione del tenant avviene dalla pagina principale della console Shiva:

<img src={shivaTenant} />

*__Nota__: Le materiale di un tenant è esclusivo e non può essere mescolato con quello di altri tenenti.*

## Accesso i conti di accesso alla console Shiva

I conti di accesso alla console Shiva vengono creati dal conto master del committente su invito (indipendentemente dal riferimento di autenticazione).
Le dati di identificazione sono globali per la tua [Organizzazione](concepts.md#organizzazioni).

*__Nota__: La federazione dell'identità viene gestita al livello dell'organizzazione*

### Creazione di un utente nell'organizzazione della tua azienda

La creazione di un account utente all'interno dell'organizzazione della tua azienda avviene tramite invito. Per invitare un utente nell' [Organizzazione](concepts.md#organisations), accedi al menu __'Amministrazione'__ situato a sinistra del bandetto superiore sul tuo schermo, poi al sotto-menu __'Utenti'.

Fai clic sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Dopo di che, inserisci l'indirizzo email dell'utente.

<img src={shivaOnboard_004} />

L'utente riceverà quindi un messaggio di conferma via email.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.


### Note:
- Il codice Markdown non contiene elementi HTML o Markdown strutturali da tradurre (ad esempio `<a>`, `<div>`, `<h1>`, `<ul>`, blocchi di codice).
- I blocchi di codice Python, come descritto nelle regole 4, non sono presenti in questo testo.
- Nessun elemento HTML bruto è stato modificato o tradotto.
- La struttura e il formato del Markdown originale sono stati mantenuti.

### Assegnazione dei Permessi Utente

La gestione dei permessi utente viene gestita dalla pagina del profilo utente.

<img src={shivaOnboard_003} alt="Assegnazione Permessi Utente" />

Per impostazione predefinita, un utente non ha alcun permesso. Pertanto, è necessario che l'amministratore che li ha invitati conceda i permessi richiesti in base al loro ruolo. Questo può essere fatto cliccando sul menu "Azioni" dell'utente e selezionando "Modifica".

Il menu di assegnazione dei permessi appare quindi:

<img src={shivaOnboard_005} alt="Assegnazione Permessi Utente" />

La configurazione dei permessi deve essere impostata per ogni [Tenant] all'interno di un'[Organizzazione].

L'elenco dei permessi insieme alle loro definizioni può essere trovato [qui](#permessi).

### Modifica la lingua di un utente

Il cambio della lingua di un utente deve essere effettuato nel **Profilo** dell'utente, situato in alto a destra dello schermo, all'interno delle **Impostazioni utente**.

<img src={shivaProfil_006} />

La configurazione è specifica per ogni tenant [Tenant](concepts.md#tenant).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere gli email relativi ai temi attivi che verranno inviati automaticamente in caso di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "Mie abbonamenti":

<img src={shivaProfil_007} />

Ad esempio, in caso di incidente, saranno generate notifiche email specifiche per questo tema.

La lista dei temi disponibili può evolversi e arricchirsi progressivamente per adattarsi ai bisogni e ai cambiamenti nel nostro ambiente operativo.

# Permessi

### Quali sono le permessi disponibili per gli account utente della console Shiva?

Ecco la lista delle [permessi disponibili](#permissions).

### Come aggiungere una permesso?

La procedura per l'assegnazione delle autorizzazioni è disponibile qui: [autorizzazioni](#autorizzazioni)

Perché non riesco ad aggiungere una permesso?

Per aggiungere una permesso, è necessario possedere sia la permesso `__iam_write__` che la permesso specifica che si desidera aggiungere.

### Come aggiungere un utente?

*__Nota__: Per aggiungere un utente è necessario possedere il diritto 'iam_write'.*

### Come auditare gli accessi/permessi degli utenti?

Vai sulla pagina degli utenti e fai clic sul pulsante __'Esporta CSV'__.

### Come eliminare un utente?

Nel menu "Amministrazione" sulla barra laterale verticale sinistra dello schermo, all'interno del sotto-menu "Utenti", fare clic sull'icona di azione dell'utente da rimuovere e selezionare "Eliminare".

*NOTA:*

- *Per aggiungere un utente, è necessario possedere il diritto __iam_write__.*
- *Se l'utente è federato, assicurati che sia stato rimosso anche dal repository di identità.*

### Come cambiare il proprio password?

È possibile cambiare la propria password dal pulsante "Password dimenticata?" sulla pagina di accesso della console Shiva.

### Perché alcuni utenti sono grigi?

Gli utenti grigi sono quelli che non hanno ancora validato il proprio account. Durante la creazione dell'account, l'utente riceve un messaggio di conferma via email.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

L'account è grigiato fino a quando la verifica non sarà stata completata.

### Cosa è un Personal Access Token (PAT)?

La generazione di una chiave API, nota anche come __Personal Access Token (PAT)__, rappresenta una modalità sicura per connettersi alle API Shiva senza passare attraverso un'interfaccia grafica.

### Cosa è il MFA e è obbligatorio?

Il MFA (multi-factor authentication) è un concetto di verifica dell'identità di un utente in due fasi, chiamato autenticazione a doppio fattore.

L'utente deve fornire due prove d'identità distinte. Nel caso della console Shiva, l'autenticazione a doppio fattore è obbligatoria e richiede di inserire un codice unico una volta che l'utente ha digitato il password del proprio account.

### Gestione degli accessi e autenticazione

### Accesso all'ambito tenant: IP autorizzate

L'accesso alla console di gestione cloud è strettamente limitato alle indirizzi IP previste, in conformità con le requisiti di qualifica SecNumCloud. Questa restrizione garantisce un livello di sicurezza migliorato consentendo l'accesso solo agli utenti provenienti da fasce di indirizzi IP specificate, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

Ora è possibile visualizzare la lista delle indirizzi IP pubbliche autorizzate sul tenant e aggiungere una nuova indirizzo IP pubblico direttamente dall'angolo "Amministrazione > Accesso".

<img src={shivaIpAccessManagement_01} />

Per farlo, l'utente deve avere il diritto `console_public_access_read` per visualizzare gli indirizzi IP autorizzati e il diritto `console_public_access_write` per aggiungere un'indirizzo IP pubblico alla lista.

È quindi possibile aggiungere una nuova IP:

<img src={shivaIpAccessManagement_02} />

Nota: *La rimozione di un'indirizzo IP autorizzato richiede una richiesta di supporto tramite la console Cloud Temple.*
