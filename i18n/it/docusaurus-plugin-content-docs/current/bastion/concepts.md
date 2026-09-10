---
title: Concetti
---
import bastion from '@site/docs/bastion/images/bastion.png'

## Che cos'è il Bastion Cloud Temple ?

Il Bastion Cloud Temple è un servizio gestito che fornisce una connettività RDP o SSH sicura dalla console
Cloud Temple verso le vostre infrastrutture fisiche e virtuali, che si trovino sul Cloud di fiducia, su un
Cloud pubblico o on-premise. La soluzione Bastion consente di amministrare le vostre apparecchiature senza esporle a Internet.

<img src={bastion} />

## I vantaggi

| Vantaggio              |                                                                              Descrizione                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestione centralizzata |                                              Il Bastion Cloud Temple è accessibile direttamente dalla Console.                                                |
| Sicurezza              | Le apparecchiature gestite tramite il Bastion non sono esposte a Internet, il che le protegge in particolare dall'analisi delle loro porte da parte di utenti malintenzionati. |
| Infrastructure as Code |          Le API consentono di gestire il Bastion Cloud Temple interamente "as Code" (creazione di sessione, connessione, modifica e eliminazione di sessione).           |

## Riferimenti (SKU)

| Riferimento                          |   Unità   |           SKU           |
|------------------------------------|:---------:|:-----------------------:|
| AMMINISTRAZIONE - Bastion SSH & RDP | 1 Sessione | cmp:bastion:session:std |

### L'Appliance Bastion

L'Appliance Bastion è una macchina virtuale distribuita in prossimità dei vostri dispositivi. Questa Appliance consente di far transitare un flusso sicuro e diretto dalla piattaforma Console verso i dispositivi da amministrare, situati nella stessa rete virtuale.

Il flusso è cifrato e incapsulato in un tunnel VPN. La soluzione non richiede l'apertura di un flusso da Internet verso le vostre infrastrutture. È sufficiente che l'Appliance abbia accesso all'IP pubblico del modulo Console Bastion sulla porta 443.

Un'Appliance può essere utilizzata per effettuare una connessione rapida verso un dispositivo. Ad ogni connessione, è necessario specificare il protocollo desiderato, l'indirizzo IP della macchina e le proprie credenziali. Per evitare di inserire queste informazioni ad ogni connessione, è possibile creare sessioni associate a dispositivi da amministrare regolarmente.

### Le Sessioni

Una sessione è una configurazione di connessione a un dispositivo tramite un Bastion. Consiste nel definire un dispositivo da amministrare e l’Appliance da utilizzare per far transitare il traffico, consentendo così di connettersi più rapidamente a tale dispositivo.

Questa soluzione è adatta nel caso di connessioni regolari a un dispositivo da amministrare. Le informazioni essenziali vengono memorizzate, sono richieste solo le tue credenziali al momento della connessione.