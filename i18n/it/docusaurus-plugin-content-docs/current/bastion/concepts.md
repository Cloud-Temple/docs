---
title: Concepts
---
import bastion from './images/bastion.svg'


## Cos'è il Bastion Cloud Temple?

Il Bastion Cloud Temple è un servizio gestito che ti fornisce una connettività RDP o SSH sicura dalla console
Cloud Temple verso le tue infrastrutture fisiche e virtuali, che siano situate nel Cloud di fiducia, su un
Cloud pubblico o on-premise. La soluzione Bastion consente di amministrare i tuoi dispositivi senza esporli a Internet.

<img src={bastion} />

## I vantaggi
| Vantaggio              |                                                                              Descrizione                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestione centralizzata |                                               Il Bastion Cloud Temple è accessibile direttamente dal portale Shiva.                                                    |
| Sicurezza              | I dispositivi amministrati tramite il Bastion non sono esposti a Internet, il che li protegge in particolare dall'analisi delle loro porte da parte di utenti malintenzionati. |
| Infrastructure as Code |          Le API consentono di gestire il Bastion Cloud Temple interamente "as Code" (creazione di sessione, connessione, modifica e cancellazione di sessione).          |

## Riferimenti (SKU)
| Riferimento                        |   Unità   |           SKU           |
|------------------------------------|:---------:|:-----------------------:|
| AMMINISTRAZIONE - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |


### L'Appliance Bastion

L'Appliance Bastion è una macchina virtuale distribuita in prossimità dei tuoi dispositivi. Questa Appliance consente di far passare un flusso sicuro e diretto dalla piattaforma Shiva verso i dispositivi da amministrare che si trovano nello stesso rete virtuale.

Il flusso è crittografato e incapsulato in un tunnel VPN. La soluzione non richiede l'apertura di un flusso da Internet verso le tue infrastrutture. È sufficiente che l'Appliance abbia accesso all'IP pubblico del modulo Shiva Bastion sulla porta 443.

Un'Appliance può essere utilizzata per effettuare una connessione rapida a un dispositivo. A ogni connessione, è necessario specificare il protocollo desiderato, l'indirizzo IP della macchina e le tue credenziali. Per evitare di inserire queste informazioni a ogni connessione, è possibile creare delle sessioni associate ai dispositivi da amministrare regolarmente.

### Le Sessioni

Una sessione è una configurazione di connessione a un dispositivo tramite un Bastion. Consiste nel definire un dispositivo da amministrare e l'Appliance da utilizzare per il transito del flusso, permettendo così di connettersi più rapidamente a quel dispositivo.

Questa soluzione è adatta nel caso di una connessione regolare a un dispositivo da amministrare. Le informazioni essenziali sono conservate, sono richieste solo le tue credenziali durante la connessione.