---
title: Esempio di federazione di identità con JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.jpg';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.jpg';

Questo tutorial ti guida attraverso la configurazione del Single Sign-On (SSO) tra JumpCloud e la console Cloud Temple utilizzando il protocollo OpenID Connect (OIDC).

Per informazioni più dettagliate direttamente da JumpCloud, consulta la loro documentazione ufficiale su OIDC SSO: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Prerequisiti

Prima di iniziare, assicurati di aver ottenuto le informazioni necessarie da Cloud Temple, in particolare l'URI di reindirizzamento specifico per la tua istanza Keycloak.

## Configurazione in JumpCloud

Segui questi passaggi per configurare una nuova applicazione OIDC nella tua console di amministrazione JumpCloud:

1.  **Creare una nuova applicazione:**
    *   Naviga alla sezione applicazioni in JumpCloud.
    *   Clicca su "Aggiungi" o "Crea una nuova applicazione".
    *   Scegli l'opzione per una "Integrazione di applicazione personalizzata" (Custom Application Integration).

2.  **Configurare SSO OIDC:**
    *   Seleziona "Gestisci Single Sign-On (SSO)".
    *   Scegli "Configura SSO con OIDC".

    <img src={ssoJumpcloud001} alt="Configurazione SSO OIDC JumpCloud" />

3.  **Inserire gli URI di reindirizzamento:**
    *   Nel campo appropriato (spesso chiamato "Redirect URIs" o "Callback URLs"), inserisci l'URI fornito da Cloud Temple. Seguirà generalmente questo formato:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<specifico dell'azienda>/broker/<specifico dell'azienda>/endpoint
        ```
        *Sostituisci `<specifico dell'azienda>` con gli identificatori specifici della tua azienda forniti da Cloud Temple.*

4.  **Scegliere il tipo di autenticazione del client:**
    *   Seleziona `Client Secret Post` come "Tipo di autenticazione del client".

5.  **Inserire l'URL di accesso:**
    *   Nel campo "URL di accesso", inserisci l'URL che utilizzi per accedere alla tua console Cloud Temple. Ad esempio:
        ```
        https://<identificatore-unico>.shiva.cloud-temple.com
        ```
        *Sostituisci `<identificatore-unico>` con l'identificatore unico della tua istanza Cloud Temple.*

6.  **Configurare la mappatura degli attributi:**
    *   Nella sezione "Mappatura degli attributi" (o equivalente), assicurati che i seguenti attributi siano selezionati per essere inviati a Cloud Temple:
        *   `Email`
        *   `Profile` (può includere nome, cognome, ecc.)

    <img src={ssoJumpcloud002} alt="Mappatura attributi JumpCloud" />

7.  **Assegnare i gruppi:**
    *   Assegna i gruppi di utenti JumpCloud che devono avere accesso alla console Cloud Temple tramite questa applicazione SSO.

8.  **Attivare l'applicazione:**
    *   Clicca su "Attiva" o "Salva" per finalizzare la configurazione dell'applicazione.

9.  **Fornire le credenziali a Cloud Temple:**
    *   Dopo l'attivazione, JumpCloud ti fornirà un **Client ID** e un **Client Secret**.
    *   Comunica in modo sicuro queste due informazioni al tuo contatto Cloud Temple per finalizzare la configurazione della federazione sul lato Keycloak.

Una volta che Cloud Temple avrà configurato la federazione con le credenziali fornite, i tuoi utenti assegnati potranno accedere alla console Cloud Temple utilizzando le loro credenziali JumpCloud.
