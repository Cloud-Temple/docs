---
title: Esempio di federazione di identità con Microsoft Intune
sidebar_position: 1
tags:
  - iam
  - tutorials
  - onboarding
---

Questo tutorial ti guida nella configurazione della federazione di identità con Microsoft Intune per la tua organizzazione Cloud Temple.

## Prerequisiti

- Accesso amministratore a Microsoft Intune
- Diritti di proprietario sulla tua organizzazione Cloud Temple
- Accesso alla console Cloud Temple

## Configurazione

La configurazione della federazione di identità con Microsoft Intune permette di integrare il tuo ambiente Intune con la console Cloud Temple per un'autenticazione centralizzata con gestione dei dispositivi mobili.

### Passo 1: Configurazione lato Microsoft Intune

1. Accedi al portale Microsoft Intune
2. Naviga verso le impostazioni di autenticazione
3. Configura una nuova applicazione per Cloud Temple
4. Imposta i parametri di gestione dei dispositivi

### Passo 2: Configurazione dei parametri di autenticazione

Configura i seguenti parametri in Intune:

- **Application ID** : Identificatore dell'applicazione
- **Directory ID** : ID del tenant Azure
- **Secret** : Segreto dell'applicazione
- **Device compliance policies** : Politiche di conformità dei dispositivi

### Passo 3: Richiesta di configurazione

Per configurare la federazione con Microsoft Intune, crea una richiesta di supporto nella console Cloud Temple specificando:

- Il nome della tua Organizzazione
- Il nome di un contatto con email e numero di telefono
- Le informazioni di configurazione Intune
- I parametri di autenticazione desiderati
- Le politiche di gestione dei dispositivi

### Passo 4: Test e validazione

Una volta completata la configurazione:

1. Testa l'autenticazione con un utente di test
2. Verifica la conformità dei dispositivi
3. Valida l'accesso alle risorse Cloud Temple
4. Controlla l'applicazione delle politiche di sicurezza

## Buone pratiche

- Configura politiche di conformità dei dispositivi appropriate
- Attiva l'autenticazione multi-fattore (MFA) in Intune
- Monitora i dispositivi non conformi
- Implementa politiche di accesso condizionale

## Supporto

Per qualsiasi assistenza con la configurazione di Microsoft Intune, contatta il supporto Cloud Temple tramite la console.
