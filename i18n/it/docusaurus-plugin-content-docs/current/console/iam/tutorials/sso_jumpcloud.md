---
title: Esempio di federazione dell'identità con JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from '@site/docs/console/iam/tutorials/images/sso_jumpcloud_001.png';
import ssoJumpcloud002 from '@site/docs/console/iam/tutorials/images/sso_jumpcloud_002.png';

Questo tutorial guida alla configurazione dell'autenticazione unica (SSO) tra JumpCloud e la console Cloud Temple utilizzando il protocollo OpenID Connect (OIDC).

Per ulteriori informazioni dettagliate direttamente da JumpCloud, consulta la documentazione ufficiale sul SSO OIDC: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Prerequisiti

Prima di iniziare, assicurati di aver ottenuto le informazioni necessarie da Cloud Temple, in particolare l'URI di reindirizzamento specifico per la tua istanza Keycloak.

## Configurazione in JumpCloud

Segui questi passaggi per configurare una nuova applicazione OIDC nella tua console di amministrazione JumpCloud:

1. **Crea una nuova applicazione:**
    * Naviga alla sezione delle applicazioni in JumpCloud.
    * Fai clic su "Aggiungi" o "Crea una nuova applicazione".
    * Scegli l'opzione per un'integrazione di applicazione personalizzata ("Custom Application Integration").

2. **Configura il SSO OIDC:**
    * Seleziona "Manage Single Sign-On (SSO)".
    * Scegli "Configure SSO with OIDC".

    <img src={ssoJumpcloud001} alt="Configurazione SSO OIDC JumpCloud" />

3. **Inserire gli URI di reindirizzamento:**
    * Nel campo appropriato (spesso denominato "Redirect URIs" o "Callback URLs"), inserisci l'URI fornita da Cloud Temple. Seguirà generalmente questo formato:

        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```

        *Sostituisci `<company specific>` con le credenziali specifiche della tua azienda fornite da Cloud Temple.*

4. **Scegliere il tipo di autenticazione client:**
    * Seleziona `Client Secret Post` come "Client Authentication Type".

5. **Inserire l'URL di accesso:**
    * Nel campo "Login URL", inserisci l'URL che utilizzi per accedere alla tua console Cloud Temple. Ad esempio:

        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```

        *Sostituisci `<unique-identifier>` con l'identificativo univoco della tua istanza Cloud Temple.*

6. **Configurare la mappatura degli attributi:**
    * Nella sezione "Attribute Mapping" (o equivalente), assicurati che i seguenti attributi siano selezionati per essere inviati a Cloud Temple:
        * `Email`
        * `Profile` (può includere nome, cognome, ecc.)

    <img src={ssoJumpcloud002} alt="Mappatura Attributi JumpCloud" />

7. **Assegnare gruppi:**
    * Assegna i gruppi di utenti JumpCloud che devono avere accesso alla console Cloud Temple tramite questa applicazione SSO.

8. **Attivare l'applicazione:**
    * Fai clic su "Activate" o "Save" per completare la configurazione dell'applicazione.

9. **Fornire le credenziali a Cloud Temple:**
    * Dopo l'attivazione, JumpCloud ti fornirà un **Client ID** e un **Client Secret**.
    * Comunica queste due informazioni in modo sicuro al tuo referente Cloud Temple per completare la configurazione della federazione lato Keycloak.

Una volta che Cloud-Temple avrà configurato la federazione con le credenziali fornite, i tuoi utenti assegnati potranno accedere alla console Cloud Temple utilizzando le proprie credenziali JumpCloud.