---
title: Esempio di federazione di identità con Microsoft ADFS
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoAdfs_001 from './images/sso_adfs_001.png'
import ssoAdfs_002 from './images/sso_adfs_002.png'
import ssoAdfs_003 from './images/sso_adfs_003.png'
import ssoAdfs_004 from './images/sso_adfs_004.png'
import ssoAdfs_005 from './images/sso_adfs_005.png'
import ssoAdfs_006 from './images/sso_adfs_006.png'
import ssoAdfs_007 from './images/sso_adfs_007.png'
import ssoAdfs_008 from './images/sso_adfs_008.png'
import ssoAdfs_009 from './images/sso_adfs_009.png'
import ssoAdfs_010 from './images/sso_adfs_010.png'
import ssoAdfs_011 from './images/sso_adfs_011.png'
import ssoAdfs_012 from './images/sso_adfs_012.png'

Ecco un esempio di configurazione del repository di autenticazione di un'organizzazione Cloud Temple con __Microsoft ADFS__.

La configurazione del vostro repository Microsoft a livello di un'organizzazione Cloud Temple facilita l'autenticazione dei vostri utenti sulla console Shiva.
Questo aiuta a evitare la moltiplicazione dei fattori di autenticazione e riduce la superficie di attacco.
Se i vostri utenti sono autenticati al loro account Microsoft, l'autenticazione ai servizi della console Shiva sarà trasparente.

Ecco i diversi passaggi per realizzare questa configurazione:

## Prerequisiti

Il vostro server Microsoft ADFS deve poter accedere a [l'URL di Cloud Temple](https://keycloak-shiva.cloud-temple.com/auth/).

L'ADFS deve essere accessibile dalle reti di Cloud Temple e __esporre un certificato TLS di una CA pubblica__.

Gli utenti che desiderano connettersi al portale devono avere la loro email, nome e cognome compilati sull'Active Directory.

## Fase 2: Richiedere la configurazione SSO (Single Sign-On) per la vostra organizzazione

Questa parte della configurazione viene effettuata a livello dell'organizzazione dal team Cloud Temple.

Per fare ciò, effettuate una __richiesta di supporto__ nella console indicando il vostro desiderio di configurare il vostro repository di autenticazione Microsoft ADFS.

Si prega di fornire le seguenti informazioni nella richiesta di supporto:

```
    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    URL pubblica dei Metadata della federazione dell'ADFS (<nome di dominio dell'adfs>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Esempio: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

Non appena la configurazione sarà completata lato console Shiva, il contatto indicato sarà informato.

Il team di supporto Cloud Temple vi fornirà un URL che assomiglierà a questo: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*Potete incollare l'URL in un browser per testarlo. Se funziona correttamente, dovreste vedere un XML visualizzato*

## Fase 3: Implementazione della configurazione ADFS

### Configurazione della federazione di autenticazione

#### Aggiunta di una relying party trust

Sul vostro server ADFS, andate su __"Aggiungi una relying party trust"__.

<img src={ssoAdfs_001} />

### Configurare i "claims"

I claims forniscono informazioni al token che sarà trasmesso alla console Cloud Temple.

Trasmettono le informazioni dell'utente connesso che sono necessarie per il corretto funzionamento dei vari servizi, come la sua email, nome e cognome.

<img src={ssoAdfs_002} />

Selezionate "Importa dati sulla relying party pubblicati online o su una rete locale" e inserite l'URL fornito dal supporto Cloud Temple.

<img src={ssoAdfs_003} />

Potete inserire un nome e una descrizione per la relying party; questa parte è opzionale.

<img src={ssoAdfs_004} />

Di default, permettiamo a tutti, ma è possibile selezionare __"Consenti un gruppo specifico"__ per scegliere il/i gruppo/i che saranno autorizzati ad accedere ai servizi della console Shiva tramite ADFS.

<img src={ssoAdfs_005} />

Una volta completati tutti questi passaggi, avete terminato la configurazione della relying party.

<img src={ssoAdfs_006} />

Dovrete poi modificare la politica di emissione dei claim per questa nuova relying party.

<img src={ssoAdfs_007} />

Cliccate su "Aggiungi regola" e specificate il modello, che è "Trasforma un claim in entrata".

<img src={ssoAdfs_008} />

Dovrete solo inserire le informazioni come mostrato nello screenshot qui sotto.

<img src={ssoAdfs_009} />

### Aggiungere i claims

Aggiungete una seconda regola con il modello "Invia attributi LDAP come claims" questa volta.

<img src={ssoAdfs_010} />

Selezionate l'archivio degli attributi e aggiungete gli attributi "Indirizzi email, Nome, Cognome e Nome account SAM" come mostrato nello screenshot qui sotto.

<img src={ssoAdfs_011} />

Dovete solo applicare le modifiche.

## Fase 3: Finalizzazione

Ora potete testare andando alla console Shiva e cliccando sul pulsante corrispondente all'autenticazione client ADFS; in questo esempio, è __"ADFS Test"__

<img src={ssoAdfs_012} />
