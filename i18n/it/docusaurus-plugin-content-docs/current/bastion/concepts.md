---
title: Concetti
---
import bastion from './images/bastion.svg'

## Cos'è il Bastion Cloud Temple?

Il Bastion Cloud Temple è un servizio gestito che fornisce una connessione RDP o SSH sicura dalla console Cloud Temple alle vostre infrastrutture fisiche e virtuali, indipendentemente dal fatto che siano situate nel Cloud di fiducia, in un Cloud pubblico o on-premise. La soluzione Bastion consente di gestire i vostri dispositivi senza esporli direttamente a Internet.

<img src={bastion} />

## Vantaggi

| Vantaggio              |                                                                                                                                                                        |
|------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestione centralizzata | Il Bastion Cloud Temple è accessibile direttamente dalla Console.                                                                                                                                                                       |
| Sicurezza              | I dispositivi gestiti tramite il Bastion non sono esposti a Internet, proteggendoli così da analisi dei loro porte da parte di utenti malintenzionati.                                                                                      |
| Infrastructure as Code | Le API consentono di gestire completamente il Bastion Cloud Temple "as Code" (creazione di sessione, connessione, modifica e cancellazione di sessione).                                                                                   |

## References (SKU)

| Reference                          |   Unit   |           SKU           |
|------------------------------------|:--------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |

### Bastion Appliance

The Bastion Appliance is a virtual machine deployed close to your equipment. This appliance enables a secure, direct flow from the Console platform to the equipment to be managed, which is located in the same virtual network.

The traffic is encrypted and encapsulated within a VPN tunnel. The solution does not require opening a connection from the Internet to your infrastructure. It is sufficient that the appliance has access to the public IP address of the Console Bastion module on port 443.

A single appliance can be used to quickly connect to a piece of equipment. For each connection, the desired protocol, the machine's IP address, and your credentials must be specified. To avoid entering these details for every connection, it is possible to create sessions associated with equipment that is regularly managed.

### Sessioni

Una sessione è una configurazione di connessione a un dispositivo tramite un Bastion. Consiste nel definire il dispositivo da gestire e l'Appliance da utilizzare per instradare il flusso, consentendo così di connettersi più rapidamente a tale dispositivo.

Questa soluzione è adatta nel caso di connessioni regolari a un dispositivo da gestire. Le informazioni essenziali vengono conservate, richiedendo solo le tue credenziali durante la connessione.