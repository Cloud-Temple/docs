---
titolo: Esempio di federazione dell'identità con JumpCloud
tag:
  - iam
  - tutorial
  - onboarding
---
importa `ssoJumpcloud001` da './immagini/sso_jumpcloud_001.png';
importa `ssoJumpcloud002` da './immagini/sso_jumpcloud_002.png';

Questo tutorial guida attraverso la configurazione dell'autenticazione unica (SSO) tra JumpCloud e la console Cloud Temple utilizzando il protocollo OpenID Connect (OIDC).

Per ulteriori informazioni dettagliate direttamente da JumpCloud, consulta la loro documentazione ufficiale sul SSO OIDC: [SSO con OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Prerequisiti

Prima di iniziare, assicurati di aver raccolto tutte le informazioni necessarie da parte di Cloud Temple, in primo luogo l'URL di reindirizzamento specifica per la tua istanza Keycloak.

## Configurazione di un'applicazione OIDC in JumpCloud

Seguire queste istruzioni per configurare una nuova applicazione OIDC nella console di amministrazione JumpCloud:

1. **Creare una nuova applicazione:**
    * Naviga nella sezione delle applicazioni di JumpCloud.
    * Clicca su "Aggiungi" o "Crea nuova applicazione".
    * Seleziona l'opzione per un'integrazione di applicazione personalizzata ("Integrazione di applicazione personalizzata").

2. **Configurare SSO OIDC:**
    * Scegli "Gestione Single Sign-On (SSO)".
    * Seleziona "Configura SSO con OIDC".

    <img src="ssoJumpcloud001.png" alt="Configurazione SSO OIDC JumpCloud">

3. **Inserire le URI di reindirizzamento:**
    * Nel campo appropriato (spesso chiamato "URI di reindirizzamento" o "Callback URL"), inserisci l'URI fornita da Cloud Temple. Seguirà generalmente questo formato:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        * Sostituisci `<company specific>` con gli identificativi specifici della tua azienda forniti da Cloud Temple.

4. **Scegliere il tipo di autenticazione del client:**
    * Seleziona `Client Secret Post` come "Tipo di autenticazione del client".

5. **Inserire l'URL di accesso:**
    * Nel campo "URL di accesso", inserisci l'URL che utilizzi per accedere alla tua console Cloud Temple. Ad esempio:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        * Sostituisci `<unique-identifier>` con l'identificatore unico della tua istanza Cloud Temple.

6. **Configurare il mappaggio degli attributi:**
    * Nella sezione "Mappatura degli attributi" (o equivalente), assicurati che gli attributi seguenti siano selezionati per essere inviati a Cloud Temple:
        * `Email`
        * `Profile` (può includere nome, cognome, ecc.)

    <img src="ssoJumpcloud002.png" alt="Mappatura degli attributi JumpCloud">

7. **Assegnare i gruppi:**
    * Assegna i gruppi di utenti JumpCloud che dovrebbero avere accesso alla console Cloud Temple tramite questa applicazione SSO.

8. **Attivare l'applicazione:**
    * Clicca su "Attiva" o "Salva" per completare la configurazione dell'applicazione.

9. **Fornire gli identificativi a Cloud Temple:**
    * Dopo l'attivazione, JumpCloud ti fornirà un **Client ID** e un **Client Secret**.
    * Comunica queste informazioni di maniera sicura al tuo contatto Cloud Temple per completare la configurazione della federazione da parte di Keycloak.

Una volta che Cloud-Temple avrà configurato la federazione utilizzando gli identificativi forniti, i tuoi utenti assegnati potranno connettersi alla console Cloud Temple utilizzando le loro credenziali JumpCloud.