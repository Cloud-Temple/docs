---
title: Esempio di federazione di identità con Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Questo tutorial ti guida nella configurazione della federazione di identità con Okta per la tua organizzazione Cloud Temple.

## Prerequisiti

- Accesso amministratore alla tua istanza Okta
- Diritti di proprietario sulla tua organizzazione Cloud Temple
- Accesso alla console Cloud Temple

## Configurazione

La configurazione della federazione di identità con Okta consente di integrare il tuo annuario Okta con la console Cloud Temple per un'autenticazione centralizzata.

### Passo 1 : Configurazione lato Okta

1. Accedi alla tua console di amministrazione Okta
2. Vai su **Applications** > **Applications**
3. Fai clic su **Create App Integration**
4. Seleziona **SAML 2.0** come metodo di autenticazione
5. Configura i parametri SAML per Cloud Temple

### Passo 2 : Configurazione dei parametri SAML

Configura i seguenti parametri in Okta :

- **Single sign on URL** : Fornito dal team Cloud Temple
- **Audience URI (SP Entity ID)** : Fornito dal team Cloud Temple
- **Attribute Statements** : Configura gli attributi utente necessari

### Passo 3 : Richiesta di configurazione Cloud Temple

Per configurare la federazione con Okta, crea una richiesta di supporto nella console Cloud Temple specificando :

- Il nome della tua Organizzazione
- Il nome di un contatto con email e numero di telefono
- L'URL dei metadati SAML della tua applicazione Okta
- Il certificato di firma SAML
- Gli attributi utente configurati

### Passo 4 : Test e validazione

Una volta completata la configurazione :

1. Testa l'autenticazione con un utente di test
2. Verifica che gli attributi utente siano correttamente mappati
3. Validi l'accesso alle risorse Cloud Temple

## Buone pratiche

- Configura dei gruppi Okta per gestire le autorizzazioni per tenant
- Attiva l'autenticazione multifattore (MFA) in Okta
- Monitora i log di autenticazione per rilevare le anomalie

## Supporto

Per qualsiasi assistenza con la configurazione di Okta, contatta il supporto Cloud Temple tramite la console.
