---
title: Modello di Responsabilità Condivisa — VPC
slug: /contractual/network/raci-vpc
---

# Modello di Responsabilità Condivisa — VPC (Virtual Private Cloud)

Questo modello **RACI** definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per il servizio **VPC (Virtual Private Cloud)**.

> **Particolarità del servizio VPC**  
> Il VPC è un servizio di rete **completamente gestito da Cloud Temple**, che offre un'esperienza cloud-nativa: routing automatico, alta disponibilità integrata e gestione nativa di IPAM/DHCP. Cloud Temple garantisce il funzionamento e la disponibilità dell'infrastruttura di rete sottostante (router VPC, backbone inter-AZ, gateway esterno). Il cliente è responsabile della progettazione, della configurazione e della sicurezza del proprio spazio di rete: sottoreti, indirizzamento, politiche di filtraggio e interconnessioni.

---

## Definizione dei Ruoli

| Ruolo            | Descrizione                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| (R) Responsabile | __R__ealizza il processo                                                                          |
| (A) Approva      | __A__pprova il completamento del processo                                                         |
| (C) Consultato   | __C__onsultato durante il processo                                                                |
| (I) Informato    | __I__nformato dei risultati del processo                                                          |

---

## Infrastruttura di Rete Fisica e Backbone

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'implementazione e il mantenimento dell'**infrastruttura di rete fisica**                         |         | **RA**       |
| Garantire la connettività **inter-datacenter / inter-AZ** del backbone Cloud Temple                           | **I**   | **RA**       |
| Mantenere la **rete backbone** in condizione operativa                                                        | **I**   | **RA**       |
| Mantenere la **rete backbone** in condizione di sicurezza                                                     | **I**   | **RA**       |
| Gestire incidenti, problemi e capacità della rete backbone                                                    | **I**   | **RA**       |
| Acquisire e mantenere le **licenze** necessarie per il funzionamento dell'infrastruttura di rete              |         | **RA**       |

---

## Infrastruttura VPC (Router, Gateway e IPAM)

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Mantenere il **Router VPC** in condizione operativa *(1)*                                                    | **I**   | **RA**       |
| Garantire l'**alta disponibilità** del Router VPC                                                             | **I**   | **RA**       |
| Mantenere il **Gateway Esterno (External Gateway)** in condizione operativa *(1)*                            | **I**   | **RA**       |
| Garantire l'**alta disponibilità** del Gateway Esterno                                                        | **I**   | **RA**       |
| Garantire il funzionamento del servizio **IPAM & DHCP** sottostante                                          | **I**   | **RA**       |
| Gestire incidenti e problemi sui componenti core del VPC                                                      | **I**   | **RA**       |
| Aggiornare e mantenere in sicurezza i componenti core del VPC                                                 | **I**   | **RA**       |

*(1) Il Router VPC e il Gateway Esterno sono componenti completamente gestiti da Cloud Temple. La loro disponibilità è garantita da Cloud Temple nel quadro del SLA del servizio VPC.*

---

## Provisioning e Configurazione del VPC

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Creare, modificare ed eliminare un **VPC**                                                                    | **RA**  | **I**        |
| Definire l'architettura di rete del VPC (numero di sottoreti, topologia)                                     | **RA**  |              |
| Creare, modificare ed eliminare **reti private (Private Networks / VLAN)** nel VPC                          | **RA**  | **I**        |
| Definire il **piano di indirizzamento IP** (range CIDR) delle reti private                                   | **RA**  | **I**        |
| Configurare i **pool DHCP** (range dinamici, DNS, gateway)                                                    | **RA**  | **C**        |
| Attivare e configurare il **Gateway Esterno** (accesso Internet, NAT, DNAT) *(2)*                            | **RA**  | **C**        |
| Gestire le **route statiche** all'interno del VPC                                                             | **RA**  |              |

*(2) L'attivazione del Gateway Esterno apre l'accesso Internet per il VPC. Il cliente è responsabile delle regole di filtraggio e del controllo del traffico associati.*

---

## IP Pubbliche ed Esposizione Internet

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Allocare il **pool di IP pubbliche** disponibili sulla piattaforma                                            | **I**   | **RA**       |
| Ordinare e associare **IP pubbliche (IP flottanti)** al proprio VPC                                           | **RA**  | **I**        |
| Configurare le regole **NAT / DNAT** per l'esposizione dei servizi                                            | **RA**  |              |
| Gestire il ciclo di vita delle IP pubbliche (associazione, rilascio, spostamento)                            | **RA**  | **I**        |
| Garantire che i servizi esposti su Internet rispettino le politiche di sicurezza applicabili                 | **RA**  |              |

---

## Sicurezza di Rete

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'**isolamento di rete tra tenant** a livello di piattaforma *(3)*                                  |         | **RA**       |
| Definire e configurare le **politiche di micro-segmentazione** (security group) *(4)*                        | **RA**  |              |
| Implementare il **filtraggio del traffico** in entrata/uscita (firewall applicativo, IDS/IPS) *(5)*          | **RA**  |              |
| Gestire i **certificati TLS** e la terminazione SSL dei servizi esposti                                       | **RA**  |              |
| Eseguire **test di penetrazione** sulle risorse ospitate nel VPC *(6)*                                       | **RA**  | **C**        |
| Monitorare i **comportamenti anomali** sui flussi di rete del tenant                                         | **RA**  |              |

*(3) Cloud Temple garantisce l'isolamento rigoroso tra VPC appartenenti a tenant diversi.*  
*(4) La micro-segmentazione (security group) sarà disponibile nel H1 2026.*  
*(5) Il filtraggio del traffico applicativo nel VPC è responsabilità del cliente.*  
*(6) I test di penetrazione devono essere dichiarati in anticipo a Cloud Temple.*

---

## Interconnessione con Reti Esterne

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Definire la **strategia di interconnessione** con ambienti on-premise o altri cloud                          | **RA**  | **C**        |
| Sottoscrivere e configurare un accesso **VPN site-to-site** *(disponibile H2 2026)*                          | **RA**  | **C**        |
| Sottoscrivere e configurare **Cloud Connect** (link dedicato) *(disponibile H2 2026)*                        | **RA**  | **C**        |
| Gestire i **BGP / route** associati alle interconnessioni operatore                                           | **RA**  | **CI**       |
| Garantire la **sicurezza dei flussi** transitanti sulle interconnessioni                                      | **RA**  |              |

---

## Connessione delle Risorse al VPC

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Collegare **istanze VM** a una rete privata del VPC                                                           | **RA**  | **I**        |
| Collegare **risorse IaaS** (VM VMware, OpenIaaS) alle reti private del VPC                                   | **RA**  | **C**        |
| Configurare le **interfacce di rete** delle risorse connesse al VPC                                          | **RA**  |              |
| Garantire che le risorse connesse applichino **configurazioni di rete coerenti** (gateway, DNS)              | **RA**  |              |

---

## Monitoraggio e Osservabilità di Rete

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Monitorare il funzionamento dei **componenti core del VPC** (router, gateway)                                 | **I**   | **RA**       |
| Monitorare le **performance del backbone** di rete Cloud Temple                                               | **I**   | **RA**       |
| Raccogliere e analizzare i **log di flusso di rete** (flow log) del VPC *(disponibile H1 2026)*              | **RA**  | **I**        |
| Implementare la **supervisione dei flussi applicativi** nel VPC                                               | **RA**  |              |
| Monitorare la **latenza e la larghezza di banda** dei flussi nel VPC                                         | **RA**  | **I**        |

---

## Gestione delle Modifiche e Capacità

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Decidere di aggiungere, modificare o rimuovere risorse di rete nel proprio VPC                               | **RA**  | **CI**       |
| Gestire capacità e scalabilità dell'infrastruttura di rete backbone                                           |         | **RA**       |
| Pianificare e gestire la crescita del piano di indirizzamento IP nel VPC                                      | **RA**  | **C**        |

---

## Gestione degli Accessi e delle Identità

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'accessibilità della **Console Cloud Temple** e dell'API di rete                                  |         | **RA**       |
| Gestire le abilitazioni dei team Cloud Temple all'infrastruttura di rete                                      |         | **RA**       |
| Amministrare i diritti di accesso al VPC nella Console Cloud Temple (IAM)                                     | **RA**  |              |

---

## Log (Registri)

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Conservare e mettere a disposizione i **log della piattaforma VPC** *(7)*                                    |         | **RA**       |
| Raccogliere e conservare i **log di flusso** e i log applicativi del tenant                                   | **RA**  |              |

*(7) La durata di conservazione dei log della piattaforma VPC è specificata nell'accordo di servizio corrispondente.*

---

## Documentazione e Contrattuale

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Gestire gli aspetti commerciali e contrattuali                                                                | **I**   | **RA**       |
| Monitorare l'esecuzione contrattuale del servizio                                                             | **RA**  | **I**        |
| Mantenere e mettere a disposizione la documentazione tecnica del servizio VPC                                 | **I**   | **RA**       |
| Documentare l'architettura di rete deployata nel tenant (schemi, CMDB)                                        | **RA**  |              |

---

## Reversibilità

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| Pianificare il progetto di reversibilità di rete e scegliere le architetture target                          | **RA**  | **I**        |
| Esportare la configurazione VPC e le risorse di rete tramite API o strumenti forniti                          | **RA**  | **I**        |
| Procedere allo smantellamento delle configurazioni VPC a seguito della risoluzione del contratto              | **I**   | **RA**       |

---

> *Sono disponibili servizi professionali se si desidera delegare a Cloud Temple alcune o tutte le responsabilità. Contattare il proprio account manager Cloud Temple.*
