---
title: Esempio di federazione di identità con Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Questo tutorial vi guida nella configurazione della federazione di identità con Okta per la vostra organizzazione Cloud Temple.

## Prerequisiti

- Accesso amministratore alla vostra istanza Okta
- Diritti di proprietario sulla vostra organizzazione Cloud Temple
- Accesso alla console Cloud Temple

## Configurazione

La configurazione della federazione di identità con Okta consente di integrare il vostro annuario Okta con la console Cloud Temple per un'autenticazione centralizzata.

### Passaggio 1: Configurazione lato Okta

1. Accedete alla vostra console di amministrazione Okta
2. Navigate verso **Applications** > **Applications**
3. Cliccate su **Create App Integration**
4. Selezionate **SAML 2.0** come metodo di autenticazione
5. Configurate i parametri SAML per Cloud Temple

### Passaggio 2: Configurazione dei parametri SAML

Configurate i seguenti parametri in Okta :

- **Single sign on URL** : Fornito dal team Cloud Temple
- **Audience URI (SP Entity ID)** : Fornito dal team Cloud Temple
- **Attribute Statements** : Configurate gli attributi utente necessari

### Passaggio 3: Richiesta di configurazione Cloud Temple

Per configurare la federazione con Okta, create una richiesta di supporto nella console Cloud Temple specificando :

- Il nome della vostra Organizzazione
- Il nome di un contatto con il suo indirizzo email e numero di telefono
- L'URL dei metadati SAML della vostra applicazione Okta
- Il certificato di firma SAML
- Gli attributi utente configurati

### Passaggio 4: Test e validazione

Una volta completata la configurazione :

1. Testate l'autenticazione con un utente di test
2. Verificate che gli attributi utente siano correttamente mappati
3. Validate l'accesso alle risorse Cloud Temple

## Buone pratiche

- Configurate dei gruppi Okta per gestire le autorizzazioni per tenant
- Attivate l'autenticazione multifattore (MFA) in Okta
- Monitorate i log di autenticazione per rilevare le anomalie

## Supporto

Per qualsiasi assistenza con la configurazione di Okta, contattate il supporto Cloud Temple tramite la console.
