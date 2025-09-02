---
title: Configurazione SSO con Okta
sidebar_position: 2
---

# Configurazione Single Sign-On (SSO) con Okta

Questa guida vi accompagna nella configurazione dell'autenticazione Single Sign-On (SSO) utilizzando Okta come provider di identità per accedere alla console Cloud Temple.

## Prerequisiti

Prima di iniziare la configurazione, assicuratevi di avere:

- Un account amministratore Okta con i privilegi necessari per creare applicazioni
- Accesso alla console Cloud Temple con diritti di amministrazione IAM
- Le informazioni di configurazione fornite dal team Cloud Temple

## Configurazione in Okta

### Passo 1: Creazione dell'applicazione SAML

1. **Accedere alla console di amministrazione Okta**
   - Connettersi al vostro tenant Okta come amministratore
   - Navigare verso **Applications** > **Applications**

2. **Creare una nuova applicazione**
   - Cliccare su **Create App Integration**
   - Selezionare **SAML 2.0** come metodo di sign-in
   - Cliccare su **Next**

3. **Configurazione generale**
   - **App name**: `Cloud Temple Console`
   - **App logo**: (Opzionale) Caricare il logo Cloud Temple
   - Cliccare su **Next**

### Passo 2: Configurazione SAML

1. **Impostazioni SAML**
   - **Single sign on URL**: `https://console.cloud-temple.com/api/iam/v1/saml/acs`
   - **Audience URI (SP Entity ID)**: `https://console.cloud-temple.com`
   - **Default RelayState**: (Lasciare vuoto)
   - **Name ID format**: `EmailAddress`
   - **Application username**: `Email`

2. **Mappatura degli attributi**
   Configurare i seguenti attributi:
   
   | Nome attributo | Formato nome | Valore |
   |----------------|--------------|--------|
   | `email` | Basic | `user.email` |
   | `firstName` | Basic | `user.firstName` |
   | `lastName` | Basic | `user.lastName` |
   | `groups` | Basic | `user.groups` |

3. **Finalizzazione**
   - Cliccare su **Next**
   - Selezionare **I'm an Okta customer adding an internal app**
   - Cliccare su **Finish**

### Passo 3: Recupero dei metadati

1. **Accesso ai metadati SAML**
   - Nell'applicazione appena creata, andare alla scheda **Sign On**
   - Nella sezione **SAML 2.0**, cliccare su **View Setup Instructions**
   - Copiare l'URL dei metadati o scaricare il file XML dei metadati

## Configurazione nella Console Cloud Temple

### Passo 1: Accesso alla configurazione IAM

1. **Connessione alla console**
   - Accedere a [https://console.cloud-temple.com](https://console.cloud-temple.com)
   - Autenticarsi con un account amministratore

2. **Navigazione verso IAM**
   - Nel menu principale, cliccare su **Identity and Access Management**
   - Selezionare **Identity Providers**

### Passo 2: Aggiunta del provider Okta

1. **Creazione del provider**
   - Cliccare su **Add Identity Provider**
   - Selezionare **SAML 2.0** come tipo
   - Inserire un nome descrittivo: `Okta SSO`

2. **Configurazione SAML**
   - **Metadata URL**: Incollare l'URL dei metadati Okta
   - Oppure caricare il file XML dei metadati
   - **Entity ID**: Verificare che corrisponda all'Entity ID di Okta
   - **SSO URL**: Verificare che corrisponda all'SSO URL di Okta

3. **Mappatura degli attributi**
   Configurare la mappatura degli attributi:
   
   | Attributo Cloud Temple | Attributo SAML | Obbligatorio |
   |------------------------|----------------|--------------|
   | Email | `email` | Sì |
   | Nome | `firstName` | Sì |
   | Cognome | `lastName` | Sì |
   | Gruppi | `groups` | No |

### Passo 3: Configurazione dei gruppi e ruoli

1. **Mappatura dei gruppi**
   - Definire la corrispondenza tra i gruppi Okta e i ruoli Cloud Temple
   - Esempio:
     - Gruppo Okta `CloudTemple-Admins` → Ruolo `Administrator`
     - Gruppo Okta `CloudTemple-Users` → Ruolo `User`

2. **Regole di autorizzazione**
   - Configurare le regole per determinare l'accesso basato sui gruppi
   - Definire i permessi per ogni ruolo mappato

## Assegnazione degli utenti in Okta

### Passo 1: Assegnazione individuale

1. **Accesso all'applicazione**
   - Nella console Okta, andare all'applicazione Cloud Temple
   - Cliccare sulla scheda **Assignments**

2. **Assegnazione utenti**
   - Cliccare su **Assign** > **Assign to People**
   - Selezionare gli utenti da assegnare
   - Cliccare su **Assign** per ogni utente
   - Cliccare su **Done**

### Passo 2: Assegnazione per gruppi

1. **Assegnazione di gruppo**
   - Cliccare su **Assign** > **Assign to Groups**
   - Selezionare i gruppi appropriati
   - Cliccare su **Assign** per ogni gruppo
   - Cliccare su **Done**

## Test della configurazione

### Passo 1: Test di connessione

1. **Test dal lato Okta**
   - Nella console Okta, andare all'applicazione Cloud Temple
   - Cliccare su **View Setup Instructions**
   - Utilizzare il link di test fornito

2. **Test dal lato Cloud Temple**
   - Disconnettersi dalla console Cloud Temple
   - Cliccare su **Sign in with SSO**
   - Inserire il dominio Okta configurato
   - Verificare il reindirizzamento verso Okta

### Passo 2: Verifica dell'autenticazione

1. **Processo di login**
   - Autenticarsi con le credenziali Okta
   - Verificare il reindirizzamento verso la console Cloud Temple
   - Controllare che i permessi siano applicati correttamente

2. **Verifica degli attributi**
   - Controllare che le informazioni utente siano popolate correttamente
   - Verificare l'appartenenza ai gruppi e i ruoli assegnati

## Risoluzione dei problemi

### Problemi comuni

1. **Errore di reindirizzamento**
   - Verificare che gli URL configurati siano corretti
   - Controllare che non ci siano caratteri extra o spazi

2. **Attributi mancanti**
   - Verificare la mappatura degli attributi in Okta
   - Controllare che gli attributi richiesti siano popolati per l'utente

3. **Problemi di autorizzazione**
   - Verificare l'assegnazione dell'utente all'applicazione Okta
   - Controllare la mappatura dei gruppi nella console Cloud Temple

### Log e diagnostica

1. **Log Okta**
   - Consultare i log di sistema in Okta per errori SAML
   - Verificare i log dell'applicazione per problemi specifici

2. **Log Cloud Temple**
   - Controllare i log di autenticazione nella console Cloud Temple
   - Contattare il supporto per assistenza nella diagnostica

## Sicurezza e best practice

### Configurazione di sicurezza

1. **Certificati**
   - Utilizzare certificati validi e aggiornati
   - Configurare la rotazione automatica dei certificati quando possibile

2. **Timeout di sessione**
   - Configurare timeout appropriati per le sessioni
   - Implementare politiche di riautenticazione per operazioni sensibili

### Monitoraggio

1. **Audit trail**
   - Attivare il logging delle autenticazioni
   - Monitorare gli accessi anomali o non autorizzati

2. **Revisioni periodiche**
   - Rivedere regolarmente le assegnazioni degli utenti
   - Aggiornare i gruppi e i ruoli secondo necessità

## Supporto

Per assistenza con la configurazione SSO Okta:

- **Documentazione Okta**: [https://developer.okta.com/docs/](https://developer.okta.com/docs/)
- **Supporto Cloud Temple**: Aprire un ticket tramite la console
- **Community**: Consultare i forum della community Cloud Temple

---

*Questa guida è stata aggiornata per riflettere le ultime versioni di Okta e della console Cloud Temple. Per informazioni specifiche sulla vostra configurazione, consultare la documentazione più recente o contattare il supporto.*
