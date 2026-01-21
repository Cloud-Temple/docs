---
title: Concetti
---

# Concetti VPC

## Definizione e posizionamento

Il **VPC (Virtual Private Cloud)** è un servizio di rete gestito che consente la creazione di reti private isolate, sicure e gestibili tramite la console Cloud Temple. È progettato per offrire un'esperienza nativa cloud, automatizzando la configurazione della rete e della sicurezza.

Al momento (Gennaio 2026), le reti private del VPC consentono l'interconnessione con i servizi **IaaS Open Source** e **IaaS VMware**. L'interconnessione con i server **Bare Metal** sarà disponibile in un aggiornamento futuro.

### VPC vs Private Backbone

Cloud Temple offers two network consumption modes:

*   **Private Backbone (Legacy offering)**:
    *   Ideal for experts seeking maximum autonomy and specific network configurations (extended L2).
    *   Requires manual installation and management of security equipment (firewalls, routers).
    *   Manual management of IP addressing.

*   **VPC (New offering)**:
    *   Designed for a cloud-native and automated experience.
    *   Built-in security (Gateway, Firewalling, NAT) without the need for third-party equipment management.
    *   Fully managed service with high availability guaranteed by Cloud Temple.
    *   Ideal for modern projects, DevOps, and web application hosting.

## Architettura

Il VPC si basa su un'architettura ridondante e altamente disponibile, sfruttando il backbone inter-AZ a bassa latenza di Cloud Temple.

### Componenti Chiave

*   **Router VPC**: Al centro di ogni VPC, gestisce il routing dinamico tra i diversi Private Networks (traffico est-ovest).
*   **Private Networks (VLAN)**: Segmenti di rete di livello 2 che collegano le tue risorse (VM, server). Si estendono nativamente su diverse zone di disponibilità (AZ) senza necessità di riconfigurazione IP.
*   **Gateway Esterno (External Gateway)**: Punto di ingresso e uscita opzionale per il traffico Internet (nord-sud). Include funzionalità di NAT e gestione dei flussi.

### Isolamento e Sicurezza

Il VPC garantisce un'isolamento rigoroso:
*   Ogni VPC è un'entità di rete indipendente.
*   Il deployment avviene su risorse dedicate (per i client IaaS Open Source), garantendo che nessuna risorsa di rete venga condivisa.
*   Il servizio è in corso di qualifica **SecNumCloud**.

## Funzionalità Principali

| Funzionalità | Descrizione | Disponibilità |
|----------------|-------------|---------------|
| **Reti private regionali** | Distribuzione multi-AZ e propagazione L2 trasparente. | Disponibile |
| **Instradamento nativo** | Comunicazione automatica tra reti private all'interno dello stesso VPC. | Disponibile |
| **IPAM & DHCP** | Gestione automatica dei pool di indirizzi e assegnazione dinamica. | Disponibile |
| **Accesso a Internet** | Configurabile tramite Gateway (NAT, DNAT, uscita controllata). | Disponibile |
| **IP fluttuanti** | Esposizione flessibile dei servizi su Internet. | Disponibile |
| **Micro-segmentazione** | Gruppi di politiche di rete per una sicurezza avanzata. | S1 2026 |
| **Osservabilità** | Log e metriche di prestazione della rete. | S1 2026 |
| **Servizio DNS** | Risoluzione dei nomi interni ed esterni. | S2 2026 |
| **VPN & Cloud Connect** | Connessione sicura verso ambienti on-premise e cloud pubblici. | S2 2026 |

## Use Case

*   Critical application hosting requiring strong isolation.
*   Multi-project segmentation (Prod, Pre-prod, Dev).
*   Ephemeral and isolated test environments.
*   Sovereign networking foundations for sensitive data.