---
title: Esempio di federazione dell'identità con Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Questo tutorial ti guida nella configurazione della federazione dell'identità con Okta per la tua organizzazione Cloud Temple.

## Prerequisiti

- Accesso amministratore alla tua istanza Okta
- Diritti di proprietario sulla tua organizzazione Cloud Temple
- Accesso alla console Cloud Temple

## Configurazione

La configurazione della federazione delle identità con Okta consente di integrare il vostro directory Okta con la console Cloud Temple per un'autenticazione centralizzata.

### Fase 1 : Configurazione lato Okta

1. Accedi alla tua console di amministrazione Okta
2. Vai su **Applications** > **Applications**
3. Clicca su **Create App Integration**
4. Seleziona **SAML 2.0** come metodo di autenticazione
5. Configura le impostazioni SAML per Cloud Temple

### Fase 2 : Configurazione dei parametri SAML

Configurare i seguenti parametri in Okta :

- **Single sign on URL** : Fornito dal team Cloud Temple
- **Audience URI (SP Entity ID)** : Fornito dal team Cloud Temple
- **Attribute Statements** : Configurare gli attributi utente necessari

### Passo 3: Richiesta di configurazione Cloud Temple

Per configurare la federazione con Okta, crea una richiesta di supporto nella console Cloud Temple specificando:

- Il nome della tua Organizzazione
- Il nome di un contatto con la relativa email e numero di telefono
- L'URL dei metadati SAML della tua applicazione Okta
- Il certificato di firma SAML
- Gli attributi utente configurati

### Fase 4: Test e validazione

Una volta completata la configurazione:

1. Testare l'autenticazione con un utente di test
2. Verificare che gli attributi utente siano mappati correttamente
3. Validare l'accesso alle risorse Cloud Temple

## Buone pratiche

- Configurate i gruppi Okta per gestire le autorizzazioni per tenant
- Abilitate l'autenticazione multifattore (MFA) in Okta
- Monitorate i log di autenticazione per rilevare le anomalie

## Supporto

Per qualsiasi assistenza con la configurazione di Okta, contattate il supporto Cloud Temple tramite la console.