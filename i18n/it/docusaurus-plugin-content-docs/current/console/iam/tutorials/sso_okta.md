---
title: Esempio di federazione dell'identità con Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Questo tutorial vi guida nella configurazione della federazione dell'identità con Okta per la vostra organizzazione Cloud Temple.

## Prerequisiti

- Accesso amministratore alla vostra istanza Okta
- Diritti di proprietario sulla vostra organizzazione Cloud Temple
- Accesso alla console Cloud Temple

## Configurazione

La configurazione della federazione di identità con Okta consente di integrare la vostra directory Okta con la console Cloud Temple per un'autenticazione centralizzata.

### Fase 1: Configurazione lato Okta

1. Accedi alla tua console di amministrazione Okta
2. Vai su **Applications** > **Applications**
3. Fai clic su **Create App Integration**
4. Seleziona **SAML 2.0** come metodo di autenticazione
5. Configura le impostazioni SAML per Cloud Temple

### Passo 2: Configurazione dei parametri SAML

Configurare i seguenti parametri in Okta:

- **Single sign on URL** : Fornito dal team Cloud Temple
- **Audience URI (SP Entity ID)** : Fornito dal team Cloud Temple
- **Attribute Statements** : Configurare gli attributi utente necessari

### Fase 3: Richiesta di configurazione Cloud Temple

Per configurare la federazione con Okta, crea una richiesta di supporto nella console Cloud Temple specificando:

- Il nome della vostra Organizzazione
- Il nome di un contatto con la relativa email e numero di telefono
- L'URL dei metadati SAML della vostra applicazione Okta
- Il certificato di firma SAML
- Gli attributi utente configurati

### Fase 4: Test e validazione

Una volta completata la configurazione:

1. Testare l'autenticazione con un utente di test
2. Verificare che gli attributi utente siano mappati correttamente
3. Validare l'accesso alle risorse Cloud Temple

## Buone pratiche

- Configurare i gruppi Okta per gestire le autorizzazioni per tenant
- Abilitare l'autenticazione multifattore (MFA) in Okta
- Monitorare i log di autenticazione per rilevare le anomalie

## Supporto

Per qualsiasi assistenza con la configurazione di Okta, contattare il supporto Cloud Temple tramite la console.