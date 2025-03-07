---
title: Esempio di federazione d'identità con Microsoft ADFS
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

La configurazione del tuo repository Microsoft a livello di un'organizzazione Cloud Temple facilita l'autenticazione dei tuoi utenti sulla console Shiva.
Questo permette di evitare la moltiplicazione dei fattori di autenticazione e di ridurre la superficie di attacco.
Se i tuoi utenti sono autenticati al loro account Microsoft, l'autenticazione ai servizi della console Shiva sarà trasparente.

Ecco le diverse fasi per realizzare questa configurazione:


## Prerequisiti
Il tuo server Microsoft ADFS deve poter accedere al seguente URL Cloud Temple: https://keycloak-shiva.cloud-temple.com/auth/.

L'ADFS deve essere accessibile dalle reti di Cloud Temple e __esporre un certificato TLS di una CA pubblica__.

Gli utenti che desiderano connettersi al portale devono avere la loro email, nome e cognome registrati sull'Active Directory.

## Fase 2: Richiedere la configurazione del SSO (Single Sign-On) della tua organizzazione

Questa parte della configurazione viene effettuata a livello dell'organizzazione dal team Cloud Temple.

Per farlo, effettua __una richiesta di assistenza__ nella console indicando il tuo desiderio di configurare il tuo repository di autenticazione Microsoft ADFS.

Si prega di fornire le seguenti informazioni nella richiesta di assistenza:
```
    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e il n. di telefono per finalizzare la configurazione
    URL pubblica dei Metadata della federazione dell'ADFS (<nome di dominio dell'adfs>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Esempio: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```
Non appena la configurazione è realizzata lato console Shiva, il contatto indicato sarà informato.

Il team di supporto Cloud Temple ti trasmetterà un URL che assomiglierà a questo: https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor

*Puoi incollare l'URL in un browser per testarlo. Se funziona correttamente dovresti vedere apparire un XML*

## Fase 3: Realizzazione della configurazione ADFS
### Configurazione della federazione di autenticazione

#### Aggiunta di un'approvazione di parte fiduciaria

Sul tuo server ADFS, vai in __"Aggiungi un'approvazione di parte fiduciaria"__.

<img src={ssoAdfs_001} />

### Configurare i "claims"
Le "claims" permettono di fornire informazioni al token che sarà trasmesso alla console Cloud Temple.

Transmettono le informazioni dell'utente connesso che sono necessarie per il corretto funzionamento dei vari servizi, come la sua email, il suo nome e il suo cognome.

<img src={ssoAdfs_002} />

Seleziona "Importa i dati, pubblicati online o su una rete locale, riguardanti la parte fiduciaria" e inserisci l'URL fornito dal supporto Cloud Temple.

<img src={ssoAdfs_003} />

Puoi fornire un nome e una descrizione per la parte di fiducia, questa parte è opzionale.

<img src={ssoAdfs_004} />

Di default, autorizziamo tutti, ma è possibile selezionare __"Autorizza un gruppo specifico"__ per selezionare il o i gruppi che saranno autorizzati ad accedere ai servizi della console Shiva tramite ADFS.

<img src={ssoAdfs_005} />

Una volta completati tutti questi passaggi, hai terminato la configurazione della parte fiduciaria.

<img src={ssoAdfs_006} />

Sarà poi necessario modificare la strategia di emissione della rivendicazione di questa nuova parte di fiducia.

<img src={ssoAdfs_007} />

Clicca su "Aggiungi una regola" e specifica il modello, ovvero "Trasforma una rivendicazione entrante".

<img src={ssoAdfs_008} />

Devi solo fornire le informazioni come indicato nello screenshot qui sotto.

<img src={ssoAdfs_009} />

### Aggiungere i claims
Aggiungi una seconda regola con, questa volta, il modello "Inviare gli attributi LDAP come rivendicazioni".

<img src={ssoAdfs_010} />

Seleziona l'archivio degli attributi e aggiungi gli attributi "Indirizzi E-Mail, Nome, Cognome e SAM-Account-Name" come indicato nell'immagine qui sotto.

<img src={ssoAdfs_011} />

Basta applicare le modifiche.

## Fase 3: Finalizzazione

Puoi adesso fare una prova accedendo alla console Shiva e cliccando sul pulsante corrispondente all'autenticazione cliente ADFS; in questo esempio, si tratta di __"ADFS Test"__

<img src={ssoAdfs_012} />
