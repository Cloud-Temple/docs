---
title: Modello di responsabilità condivisa — VPC
slug: /contractual/network/raci-vpc
---

# Modello di responsabilità condivisa — VPC (Virtual Private Cloud)

Ecco il modello **RACI** che definisce la ripartizione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo del servizio **VPC (Virtual Private Cloud)**.

> **Particolarità dell'offerta VPC**  
> Il VPC è un servizio di rete **completamente gestito da Cloud Temple**, che offre un'esperienza cloud-native: instradamento automatico, alta disponibilità integrata e gestione IPAM/DHCP nativa. Cloud Temple garantisce il funzionamento e la disponibilità dell'infrastruttura di rete sottostante (router VPC, backbone inter-AZ, gateway esterno). Il cliente è responsabile della progettazione, della configurazione e della sicurezza del proprio spazio di rete: subnet, indirizzamento, politiche di filtraggio e interconnessioni.

---

## Definizione dei ruoli

| Ruolo          | Descrizione                                                                           |
|----------------|---------------------------------------------------------------------------------------|
| (R) Esegue     | __R__ealizza il processo                                                              |
| (A) Approva    | __A__pprova la realizzazione del processo                                              |
| (C) Consulta   | __C__onsultato durante il processo                                                     |
| (I) Informato  | __I__nformato sui risultati del processo (tramite strumenti, portale o messaggistica) |

---

## Infrastruttura di rete fisica e backbone

Cloud Temple è interamente responsabile dell'infrastruttura fisica e del backbone di rete su cui si basa il VPC.

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'implementazione e la manutenzione delle infrastrutture di rete **fisiche** (switch, router backbone) |         | **RA**       |
| Garantire la connettività **inter-datacenter / inter-AZ** del backbone Cloud Temple                         | **I**   | **RA**       |
| Garantire il mantenimento in condizioni operative del **backbone di rete** Cloud Temple                     | **I**   | **RA**       |
| Garantire il mantenimento in condizioni di sicurezza del **backbone di rete** Cloud Temple                  | **I**   | **RA**       |
| Gestire gli incidenti, i problemi e le capacità del backbone di rete                                        | **I**   | **RA**       |
| Acquisire e mantenere le licenze essenziali per il funzionamento dell'infrastruttura di rete                |         | **RA**       |

---

## Infrastruttura VPC (router, gateway & IPAM)

Cloud Temple garantisce il funzionamento dei componenti core del VPC. Il cliente configura il proprio spazio di rete all'interno di questa infrastruttura.

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire il mantenimento in condizioni operative del **router VPC** *(1)*                                   | **I**   | **RA**       |
| Garantire l'**alta disponibilità** del router VPC                                                           | **I**   | **RA**       |
| Garantire il mantenimento in condizioni operative del **Gateway Esterno (External Gateway)** *(1)*      | **I**   | **RA**       |
| Garantire l'**alta disponibilità** del Gateway Esterno                                                 | **I**   | **RA**       |
| Garantire il funzionamento del servizio **IPAM & DHCP** sottostante                                           | **I**   | **RA**       |
| Gestire gli incidenti e i problemi sui componenti core del VPC                                            | **I**   | **RA**       |
| Aggiornare e mantenere in condizioni di sicurezza i componenti core del VPC                             | **I**   | **RA**       |

*(1) Il router VPC e il Gateway Esterno sono componenti interamente gestiti da Cloud Temple. La loro disponibilità è garantita da Cloud Temple nell'ambito dello SLA del servizio VPC.*

---

## Provisioning e configurazione del VPC

Il cliente è responsabile della creazione e della configurazione del proprio VPC nonché delle risorse di rete che lo compongono.

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Creare, modificare ed eliminare un **VPC**                                                                     | **RA**  | **I**        |
| Definire l'architettura di rete del VPC (nombre de sous-réseaux, topologie)                                   | **RA**  |              |
| Creare, modifier et supprimer des **reti private (Private Networks / VLANs)** nel VPC                 | **RA**  | **I**        |
| Definire il **piano di indirizzamento IP** (plages CIDR) delle reti private                                        | **RA**  | **I**        |
| Configurare i **pool DHCP** (plages dynamiques, DNS, gateway)                                             | **RA**  | **C**        |
| Attivare e configurare il **Gateway Esterno** (accès Internet, NAT, DNAT) *(2)*                          | **RA**  | **C**        |
| Gestire le **rotte statiche** all'interno del VPC                                                               | **RA**  |              |

*(2) L'attivazione del Gateway Esterno apre l'accesso a Internet per il VPC. Il cliente è responsabile delle regole di filtraggio e del controllo del traffico associato.*

---

## IP pubblici & esposizione Internet

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Assegnare il **pool di IP pubblici** disponibile sulla piattaforma                                          | **I**   | **RA**       |
| Richiedere e associare **IP pubblici (IP fluttuanti)** al proprio VPC                                       | **RA**  | **I**        |
| Configurare le regole **NAT / DNAT** per l'esposizione dei servizi                                          | **RA**  |              |
| Gestire il ciclo di vita degli IP pubblici (associazione, rilascio, spostamento)                            | **RA**  | **I**        |
| Assicurarsi che i servizi esposti su Internet rispettino le politiche di sicurezza applicabili              | **RA**  |              |

---

## Sicurezza di rete

| Attività                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Garantire l'**isolamento di rete inter-tenant** a livello di piattaforma *(3)*                              |        | **RA**       |
| Definire e configurare le **politiche di micro-segmentazione** (security groups) *(4)*                     | **RA** |              |
| Implementare un **filtraggio dei flussi** in entrata/uscita (firewall applicativo, IDS/IPS) *(5)*            | **RA** |              |
| Gestire i **certificati TLS** e la terminazione SSL dei servizi esposti                                    | **RA** |              |
| Eseguire **test di intrusione** sulle risorse ospitate nel VPC *(6)*                          | **RA** | **C**        |
| Monitorare i **comportamenti anomali** sui flussi di rete del tenant                                     | **RA** |              |

*(3) Cloud Temple garantisce l'isolamento rigoroso tra VPC appartenenti a tenant diversi. Nessun flusso può attraversare questa barriera senza un'azione esplicita del client.*  
*(4) La micro-segmentazione (security groups) sarà disponibile nel S1 2026. Le politiche di filtraggio che si applicano prima di tale disponibilità devono essere implementate dal client tramite un'attrezzatura di sicurezza dedicata.*  
*(5) Il filtraggio applicativo dei flussi all'interno del VPC è di responsabilità del client. Cloud Temple non effettua ispezione del contenuto dei flussi del tenant.*  
*(6) I test di intrusione devono essere oggetto di una dichiarazione preventiva a Cloud Temple, conformemente alle condizioni generali di utilizzo.*

## Interconnessione con reti esterne

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Definire la strategia di **interconnessione** con ambienti on-premise o altri cloud                         | **RA**  | **C**        |
| Sottoscrivere e configurare un accesso **VPN site-to-site** *(disponibile S2 2026)*                         | **RA**  | **C**        |
| Sottoscrivere e configurare un accesso **Cloud Connect** (collegamento dedicato) *(disponibile S2 2026)*     | **RA**  | **CI**       |
| Gestire i **BGP / route** associati alle interconnessioni dell'operatore                                     | **RA**  | **CI**       |
| Garantire la **sicurezza dei flussi** in transito sulle interconnessioni                                    | **RA**  |              |

---

## Connessione delle risorse al VPC

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Collegare le **istanze VM** a una rete privata del VPC                                                     | **RA**  | **I**        |
| Collegare le **risorse IaaS** (VMs VMware, OpenIaaS) alle reti private del VPC                         | **RA**  | **C**        |
| Configurare le **interfacce di rete** delle risorse collegate al VPC                                       | **RA**  |              |
| Verificare che le risorse collegate applichino **configurazioni di rete coerenti** (gateway, DNS) | **RA**  |              |

---

## Monitoraggio e osservabilità di rete

| Attività                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Monitorare il funzionamento dei **componenti core del VPC** (router, gateway)                             | **I**  | **RA**       |
| Monitorare le **prestazioni del backbone** di rete Cloud Temple                                             | **I**  | **RA**       |
| Raccogliere e analizzare i **log di flusso di rete** (flow logs) del VPC *(disponibile S1 2026)*            | **RA** | **I**        |
| Implementare una **supervisione dei flussi** applicativi nel VPC                                            | **RA** |              |
| Monitorare la **latenza e la banda passante** dei flussi all'interno del VPC                                | **RA** | **I**        |

---

## Gestione dei cambiamenti e delle capacità

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Prendere la decisione di aggiungere, modificare o rimuovere risorse di rete nel proprio VPC                       | **RA** | **CI**       |
| Gestire le capacità e la scalabilità dell'infrastruttura di rete backbone                                    |        | **RA**       |
| Pianificare e gestire la crescita del piano di indirizzamento IP nel VPC                                         | **RA** | **C**        |

---

## Gestione degli accessi e delle identità

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'accessibilità alla **Console Cloud Temple** e all'API di rete                                  |         | **RA**       |
| Gestire le autorizzazioni dei team Cloud Temple per l'infrastruttura di rete                                |         | **RA**       |
| Amministrare i permessi di accesso al VPC nella Console Cloud Temple (IAM)                                  | **RA**  |              |

---

## Log

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Conservare e rendere disponibili i **log della piattaforma VPC** *(7)*                                      |         | **RA**       |
| Raccogliere e conservare i **log di flusso** e i log applicativi del tenant                                 | **RA**  |              |

*(7) La durata di conservazione dei log della piattaforma VPC è specificata nel contratto di servizio corrispondente.*

---

## Documentazione & contrattualità

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Gestire l'aspetto commerciale e contrattuale (devis, commandes, facturation)                             | **I**   | **RA**       |
| Gestire il monitoraggio contrattuale della prestazione                                                               | **RA**  | **I**        |
| Garantire la manutenzione e la disponibilità della documentazione tecnica del servizio VPC                     | **I**   | **RA**       |
| Documentare l'architettura di rete distribuita nel proprio tenant (schémas, CMDB)                                   | **RA**  |              |

---

## Reversibilità

| Attività                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Pianificare il progetto di reversibilità di rete e selezionare le architetture target                       | **RA**  | **I**        |
| Esportare la configurazione del VPC e delle risorse di rete tramite API o gli strumenti messi a disposizione | **RA**  | **I**        |
| Procedere allo smantellamento delle configurazioni VPC in seguito alla cessazione                            | **I**   | **RA**       |

---

> *Sono disponibili servizi professionali qualora si desideri delegare tutte o parte delle responsabilità indicate come a carico del cliente. Contattare il proprio referente commerciale Cloud Temple.*