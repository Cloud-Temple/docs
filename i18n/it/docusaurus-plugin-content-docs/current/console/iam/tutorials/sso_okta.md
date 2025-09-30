

---
title: Esempio di federazione dell'identità con Okta
tags:
  - identità e accesso
  - tutorial
  - onboarding
---

Questo tutorial ti guida nella configurazione della federazione dell'identità con Okta per la tua organizzazione Cloud Temple.



## Requisiti

- Accesso amministratore alla tua istanza Okta
- Diritti di proprietario sulla tua organizzazione Cloud Temple
- Accesso alla console Cloud Temple



## Configuration

La configurazione della federazione di identità con Okta consente di integrare il tuo directory Okta con la console Cloud Temple per un'autenticazione centralizzata.



### Passo 1: Configurazione lato Okta

1. Accedi alla tua console di amministrazione Okta
2. Vai a **Applicazioni** > **Applicazioni**
3. Fai clic su **Crea Integrazione App**
4. Seleziona **SAML 2.0** come metodo di autenticazione
5. Configura le impostazioni SAML per Cloud Temple



### Passo 2: Configurazione dei parametri SAML

Configurate i seguenti parametri in Okta:

- **URL di accesso unico** : Fornito dall'équipe Cloud Temple
- **URI dell'audience (ID dell'entità SP)** : Fornito dall'équipe Cloud Temple
- **Dichiarazioni di attributi** : Configurate gli attributi utente necessari



### Passo 3: Richiesta di configurazione Cloud Temple

Per configurare l'autenticazione federata con Okta, si prega di creare una richiesta di supporto nella console Cloud Temple specificando:

- Il nome della vostra Organizzazione
- Il nome di un contatto con la sua email e numero di telefono
- L'URL delle metadati SAML della vostra applicazione Okta
- Il certificato di firma SAML
- Gli attributi utente configurati



### Fase 4: Test e validazione

Una volta completata la configurazione:

1. Testa l'autenticazione con un utente di prova
2. Verifica che gli attributi utente siano correttamente mappati
3. Conferma l'accesso alle risorse Cloud Temple



## Buone pratiche

- Configurate i gruppi Okta per gestire le autorizzazioni per tenant
- Attivate l'autenticazione a due fattori (MFA) in Okta
- Monitorate i log di autenticazione per rilevare le anomalie



## Supporto

Per qualsiasi assistenza con la configurazione di Okta, contatta il supporto Cloud Temple tramite la console.