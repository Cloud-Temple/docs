---
title: Domande frequenti
---
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'

# FAQ IAM

Le domande più comuni su account, diritti e accesso alla console. Le procedure passo passo si trovano in [Onboarding](../onboarding.md); il riferimento completo è nei [concetti IAM](concepts.md).

<a id="tenant"></a>
<a id="création-dun-tenant"></a>
<a id="selection-dun-tenant"></a>

## Come creare o scegliere un tenant?

La creazione di un tenant avviene __in self-service__ dalla console, senza alcuna richiesta di servizio preliminare: __'Amministrazione > Tenant'__, pulsante __'Nuovo tenant'__. Il tenant di lavoro si sceglie dal selettore __'I miei tenant'__ dell'intestazione.

Vedere [Scegliere o creare un ambiente](../onboarding.md#tappa-3-scegliere-o-creare-un-ambiente).

*__Nota:__ Le risorse di un tenant gli sono proprie e non vengono condivise con gli altri tenant.*

<a id="comptes-daccès-à-la-console"></a>
<a id="création-dun-compte-utilisateur-dans-votre-organisation"></a>

## Come aggiungere un utente?

Tramite invito, da __'Amministrazione > Utenti'__, pulsante __'Nuovo utente'__. Le credenziali sono globali alla vostra [organizzazione](concepts.md#organizzazioni), qualunque sia il repository di autenticazione.

*__Nota__: Per aggiungere un utente, dovete disporre del diritto __'iam_write'__.*

Vedere [Invitare i vostri collaboratori](../onboarding.md#tappa-4-invitare-i-vostri-collaboratori) e il [riferimento](concepts.md#creazione-di-un-account-utente-nella-tua-organizzazione).

<a id="affectation-des-permissions-à-un-utilisateur"></a>

## Come aggiungere un'autorizzazione?

Per impostazione predefinita, un utente non ha alcun diritto. Dalla pagina degli utenti, aprite il menu __'Azioni'__ dell'utente e scegliete __'Modifica'__. Le autorizzazioni si assegnano __tenant per tenant__: non esiste un'assegnazione globale a livello dell'organizzazione.

Vedere l'[assegnazione delle autorizzazioni in un tenant](concepts.md#assegnazione-dei-permessi-in-un-tenant).

## Perché non riesco ad aggiungere un'autorizzazione?

Per aggiungere un'autorizzazione, dovete disporre dell'autorizzazione __'iam_write'__ e dell'__autorizzazione che desiderate aggiungere__.

<a id="permissions"></a>

## Quali sono le autorizzazioni disponibili per gli account utente della console?

Vedere l'elenco delle [autorizzazioni disponibili](concepts.md#permessi-disponibili-per-gli-utenti-della-tua-organizzazione) e la loro definizione.

## Come verificare gli accessi/le autorizzazioni degli utenti?

Andate alla pagina __'Utenti'__ e fate clic sul pulsante __'Esporta CSV'__: ottenete l'elenco degli utenti e dei loro accessi.

## Come eliminare un utente?

Nel menu __'Amministrazione'__ della barra verde a sinistra dello schermo, nel sottomenu __'Utenti'__, fate clic sull'icona __'Azioni'__ dell'utente interessato e scegliete __'Elimina'__.

*__Nota__:*

- *Non potete eliminare voi stessi, né eliminare un utente __'Proprietario'__.*
- *Se si tratta di un utente federato, __assicuratevi che l'utente sia stato eliminato anche dal repository di identità__.*

## Perché alcuni utenti sono in grigio?

Gli utenti in grigio sono quelli che non hanno confermato il loro account. Al momento della creazione dell'account, l'utente ha ricevuto un'e-mail di verifica.

<img src={shivaOnboard_001} />

L'account resta in grigio finché la verifica non è stata completata. Se il link è scaduto, utilizzate l'azione __'Reinvio'__: vedere il [reinvio dell'invito a un utente](concepts.md#reiscrizione-di-un-utente).

## Come reimpostare la propria password?

È possibile reimpostare la propria password dalla pagina di accesso della console facendo clic su __'Password dimenticata?'__.

## Cos'è l'MFA ed è obbligatorio?

L'MFA (multi-factor authentication) è un concetto di verifica dell'identità di un utente in due fasi, chiamato __autenticazione a due fattori__.

L'utente deve fornire due prove di identità distinte. Nel caso della console, l'autenticazione a due fattori è obbligatoria e richiede di inserire un codice monouso dopo che l'utente ha inserito la password del proprio account.

## Cos'è un Personal Access Token (PAT)?

La generazione di una chiave API, chiamata anche __Personal Access Token (PAT)__, è un modo sicuro per connettersi alle API della console senza passare da un'interfaccia grafica. Vedere la [documentazione dell'API](../api.md).

<a id="gestion-des-accès-et-authentification"></a>
<a id="autorisation-daccès-à-la-console--ip-autorisées"></a>

## Come autorizzare un nuovo indirizzo IP ad accedere alla console?

Poiché la console è ospitata su un'infrastruttura qualificata SecNumCloud, il suo accesso è limitato agli indirizzi IP pubblici autorizzati. L'elenco è quello dell'__organizzazione__: si consulta e si amplia da __'Amministrazione > Accesso'__, con i diritti `console_public_access_read` e `console_public_access_write`. La rimozione di un indirizzo avviene tramite una richiesta di supporto nella console.

Vedere [Aggiungere un indirizzo IP](../onboarding.md#aggiungere-un-indirizzo-ip).

## Come federare l'autenticazione con la nostra directory?

La federazione delle identità si configura a livello dell'organizzazione: vedere i [meccanismi di autenticazione](concepts.md#meccanismi-di-autenticazione) e i [tutorial di federazione delle identità](/console/iam/tutorials).

<a id="changer-la-langue-dun-utilisateur"></a>

## Come cambiare la lingua di un utente?

Nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__. Vedere [Cambiare la lingua di un utente](concepts.md#modificare-la-lingua-di-un-utente).

<a id="abonnement-aux-notifications-thématiques"></a>

## Come ricevere le notifiche via e-mail?

Nel profilo utente, scheda __'I miei abbonamenti'__, attivate le tematiche desiderate. Vedere l'[abbonamento alle notifiche tematiche](concepts.md#sottoscrizione-alle-notifiche-tematiche).
