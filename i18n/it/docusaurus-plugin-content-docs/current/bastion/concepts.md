---
title: Concepts
---
## Cos'è il Bastion Cloud Temple?

Il Bastion Cloud Temple è un servizio gestito che fornisce una connettività RDP o SSH sicura dalla console 
Cloud Temple verso le vostre infrastrutture fisiche e virtuali, che si trovino sul Cloud di fiducia, su un 
Cloud pubblico o onpremise. La soluzione Bastion permette di amministrare i vostri dispositivi senza esporli a Internet. 

![](images/bastion.svg)

## I vantaggi
| Vantaggio              |                                                                              Descrizione                                                                               |   
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestione centralizzata |                                              Il Bastion Cloud Temple è accessibile direttamente dal portale Shiva.                                                     |   
| Sicurezza              | I dispositivi amministrati tramite il Bastion non sono esposti a Internet, il che li protegge in particolare dall'analisi delle loro porte da parte di utenti malintenzionati. |  
| Infrastructure as Code |          Le API consentono di gestire il Bastion Cloud Temple interamente "as Code" (creazione di sessioni, connessione, modifica e rimozione di sessioni).              |   

## Riferimenti (SKU)
| Riferimento                        |   Unità   |           SKU           |  
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRAZIONE - Bastion SSH & RDP| 1 Sessione| cmp:bastion:session:std | 


### L'Appliance Bastion

L'Appliance Bastion è una macchina virtuale distribuita in prossimità dei vostri dispositivi. Questa Appliance consente di creare un flusso sicuro e diretto dalla piattaforma Shiva verso i dispositivi da amministrare che si trovano nella stessa rete virtuale. 

Il flusso è criptato e incapsulato in un tunnel VPN. La soluzione non richiede l'apertura di un flusso da Internet verso le vostre infrastrutture. È sufficiente che l’Appliance abbia accesso all'IP pubblico del modulo Shiva Bastion sulla porta 443.

Un'Appliance può essere utilizzata per effettuare una connessione rapida a un dispositivo. Ad ogni connessione, devono essere specificati il protocollo desiderato, l’indirizzo IP della macchina e le vostre credenziali. Per evitare di inserire queste informazioni ad ogni connessione, è possibile creare sessioni associate ai dispositivi da amministrare regolarmente.

### Le Sessioni

Una sessione è una configurazione di connessione a un dispositivo tramite un Bastion. Consiste nel definire un dispositivo da amministrare e l’Appliance da utilizzare per il passaggio del flusso, consentendo così di connettersi più rapidamente a tale dispositivo. 

Questa soluzione è adatta nel caso di una connessione regolare a un dispositivo da amministrare. Le informazioni essenziali sono conservate; solo le vostre credenziali sono richieste durante la connessione.