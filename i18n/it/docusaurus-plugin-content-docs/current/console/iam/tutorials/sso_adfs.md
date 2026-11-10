---
title: Esempio di federazione di identità con Microsoft ADFS
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoAdfs_001 from '@site/docs/console/iam/tutorials/images/sso_adfs_001.png'
import ssoAdfs_002 from '@site/docs/console/iam/tutorials/images/sso_adfs_002.png'
import ssoAdfs_003 from '@site/docs/console/iam/tutorials/images/sso_adfs_003.png'
import ssoAdfs_004 from '@site/docs/console/iam/tutorials/images/sso_adfs_004.png'
import ssoAdfs_005 from '@site/docs/console/iam/tutorials/images/sso_adfs_005.png'
import ssoAdfs_006 from '@site/docs/console/iam/tutorials/images/sso_adfs_006.png'
import ssoAdfs_007 from '@site/docs/console/iam/tutorials/images/sso_adfs_007.png'
import ssoAdfs_008 from '@site/docs/console/iam/tutorials/images/sso_adfs_008.png'
import ssoAdfs_009 from '@site/docs/console/iam/tutorials/images/sso_adfs_009.png'
import ssoAdfs_010 from '@site/docs/console/iam/tutorials/images/sso_adfs_010.png'
import ssoAdfs_011 from '@site/docs/console/iam/tutorials/images/sso_adfs_011.png'
import ssoAdfs_012 from '@site/docs/console/iam/tutorials/images/sso_adfs_012.png'

Ecco un esempio di configurazione del repository di autenticazione di un'organizzazione Cloud Temple con __Microsoft ADFS__.

La configurazione del vostro repository Microsoft a livello di organizzazione Cloud Temple semplifica l'autenticazione degli utenti sulla Console.  
Questo permette di evitare la moltiplicazione dei fattori di autenticazione e di ridurre la superficie di attacco.  
Se gli utenti sono già autenticati sul loro account Microsoft, l'autenticazione ai servizi della Console avverrà in modo trasparente.

Di seguito sono riportati i diversi passaggi necessari per completare questa configurazione:

## Prerequisiti

Il server Microsoft ADFS deve essere in grado di accedere all'[URL Cloud Temple](https://keycloak-shiva.cloud-temple.com/auth/).

L'ADFS deve essere raggiungibile dai network di Cloud Temple e __deve esporre un certificato TLS rilasciato da una CA pubblica__.

Gli utenti che desiderano effettuare il login sul portale devono avere email, nome e cognome compilati nell'Active Directory.

## Passo 1: Richiedere la configurazione dell'SSO (Single Sign-On) della vostra organizzazione

Questa parte della configurazione viene eseguita a livello di organizzazione dal team Cloud Temple.

Per farlo, inviate __una richiesta di assistenza__ dalla console indicando che desiderate configurare il vostro repository di autenticazione Microsoft ADFS.

Fornite le seguenti informazioni nella richiesta di assistenza:

```
    Il nome della vostra Organizzazione
    Il nome di un referente, con la sua email e il suo numero di telefono, per finalizzare la configurazione
    URL pubblico dei Metadata della federazione ADFS (<nome di dominio dell'ADFS>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Esempio: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

Non appena la configurazione sarà stata eseguita lato Console, il referente indicato verrà informato.

Il team di supporto Cloud Temple vi trasmetterà un URL simile a questo: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*Potete incollare l'URL in un browser per testarlo. Se funziona correttamente, dovreste veder comparire un documento XML.*

## Passo 2: Realizzazione della configurazione ADFS

### Configurazione della federazione di autenticazione

#### Aggiunta di un'affidabilità di parte fidata

Sul vostro server ADFS, andate su __"Aggiungi un'affidabilità di parte fidata"__.

<img src={ssoAdfs_001} />

### Configurare i "claims"

I claims consentono di fornire informazioni al token che verrà trasmesso alla console Cloud Temple.

Essi trasmettono le informazioni dell'utente connesso necessarie al corretto funzionamento dei diversi servizi, come ad esempio la sua email, nome e cognome.

<img src={ssoAdfs_002} />

Selezionare "Importa dati pubblicati online o su una rete locale relativi alla parte di fiducia" e inserire l'URL fornita dal supporto Cloud Temple.

<img src={ssoAdfs_003} />

È possibile inserire un nome e una descrizione per la parte di fiducia; tale campo è facoltativo.

<img src={ssoAdfs_004} />

Per impostazione predefinita, si autorizza chiunque, ma è possibile selezionare __"Autorizza un gruppo specifico"__ per selezionare il o i gruppi autorizzati ad accedere ai servizi della Console tramite ADFS.

<img src={ssoAdfs_005} />

Una volta completate queste operazioni, la configurazione della parte di fiducia è terminata.

<img src={ssoAdfs_006} />

È quindi necessario modificare la strategia di emissione dei claims per questa nuova parte di fiducia.

<img src={ssoAdfs_007} />

Fare clic su "Aggiungi regola" e specificare il modello, ovvero "Trasforma un claim in ingresso".

<img src={ssoAdfs_008} />

Basterà quindi inserire le informazioni come indicato nella schermata riportata di seguito.

<img src={ssoAdfs_009} />

### Aggiungere i claim

Aggiungete una seconda regola, questa volta con il modello "Invia gli attributi LDAP come claim".

<img src={ssoAdfs_010} />

Selezionate l'archivio attributi e aggiungete gli attributi "Indirizzi E-Mail, Given-Name, Cognome e SAM-Account-Name", come indicato nell'immagine qui sotto.

<img src={ssoAdfs_011} />

È sufficiente applicare le modifiche.

## Passo 3: Finalizzazione

Ora potete eseguire un test accedendo alla Console e facendo clic sul pulsante corrispondente all'autenticazione ADFS del cliente; in questo esempio si tratta di __"ADFS Test"__.

<img src={ssoAdfs_012} />
