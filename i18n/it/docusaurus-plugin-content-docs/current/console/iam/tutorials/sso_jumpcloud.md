---
title: Esempio di federazione d'identità con JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.png';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.png';

Questo tutorial ti guida nella configurazione dell'autenticazione unica (SSO) tra JumpCloud e la console Cloud Temple utilizzando il protocollo OpenID Connect (OIDC).

Per ulteriori informazioni dettagliate direttamente da JumpCloud, consulta la loro documentazione ufficiale sul SSO OIDC: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Prerequisiti

Prima di iniziare, assicurati di aver ottenuto da Cloud Temple le informazioni necessarie, in particolare l'URI di reindirizzamento specifico per la tua istanza Keycloak.

## Configurazione in JumpCloud

Segui questi passaggi per configurare una nuova applicazione OIDC nella tua console di amministrazione JumpCloud:

1.  **Creare una nuova applicazione:**
    *   Vai alla sezione delle applicazioni in JumpCloud.
    *   Clicca su "Aggiungi" o "Crea una nuova applicazione".
    *   Scegli l'opzione per un'integrazione applicativa personalizzata ("Custom Application Integration").

2.  **Configurare il SSO OIDC:**
    *   Seleziona "Gestisci Single Sign-On (SSO)".
    *   Scegli "Configura SSO con OIDC".

    <img src={ssoJumpcloud001} alt="Configuration SSO OIDC JumpCloud" />

3.  **Inserire gli URI di reindirizzamento:**
    *   Nel campo appropriato (spesso chiamato "Redirect URIs" o "Callback URLs"), inserisci l'URI fornito da Cloud Temple. Seguirà generalmente questo formato:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        *Sostituisci `<company specific>` con gli identificativi specifici della tua azienda forniti da Cloud Temple.*

4.  **Scegliere il tipo di autenticazione del client:**
    *   Seleziona `Client Secret Post` come "Client Authentication Type".

5.  **Inserire l'URL di login:**
    *   Nel campo "Login URL", inserisci l'URL che usi per accedere alla tua console Cloud Temple. Ad esempio:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        *Sostituisci `<unique-identifier>` con l'identificativo univoco della tua istanza Cloud Temple.*

6.  **Configurare il mapping degli attributi:**
    *   Nella sezione "Attribute Mapping" (o equivalente), assicurati che i seguenti attributi siano selezionati per essere inviati a Cloud Temple:
        *   `Email`
        *   `Profile` (può includere nome, cognome, ecc.)

    <img src={ssoJumpcloud002} alt="Mappage Attributs JumpCloud" />

7.  **Assegnare i gruppi:**
    *   Assegna i gruppi di utenti JumpCloud che devono avere accesso alla console Cloud Temple tramite questa applicazione SSO.

8.  **Attivare l'applicazione:**
    *   Clicca su "Attiva" o "Salva" per completare la configurazione dell'applicazione.

9.  **Fornire le credenziali a Cloud Temple:**
    *   Dopo l'attivazione, JumpCloud ti fornirà un **Client ID** e un **Client Secret**.
    *   Comunica queste due informazioni in modo sicuro al tuo contatto Cloud Temple per completare la configurazione della federazione lato Keycloak.

Una volta che Cloud-Temple avrà configurato la federazione con le credenziali fornite, gli utenti assegnati potranno accedere alla console Cloud Temple utilizzando le loro credenziali JumpCloud.