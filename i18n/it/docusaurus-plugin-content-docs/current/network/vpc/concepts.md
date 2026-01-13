---
title: Concetti
---

# Concetti VPC

## Definizione e Posizionamento

Il **VPC (Virtual Private Cloud)** è un servizio di rete gestito che consente la creazione di reti private isolate, sicure e controllabili tramite la console Cloud Temple. È progettato per offrire un'esperienza cloud-native, automatizzando la configurazione della rete e della sicurezza.

A partire da gennaio 2026, le reti private VPC consentono di interconnettere i servizi **IaaS Open Source** e **IaaS VMware**. L'interconnessione con i server **Bare Metal** sarà disponibile in un prossimo aggiornamento.

### VPC vs Backbone Privato

Cloud Temple offre due modalità di consumo di rete:

*   **Backbone Privato (Offerta storica)**:
    *   Ideale per esperti che cercano la massima autonomia e configurazioni di rete specifiche (L2 esteso).
    *   Richiede l'installazione e la gestione manuale di apparecchiature di sicurezza (firewall, router).
    *   Gestione manuale del piano di indirizzamento.

*   **VPC (Nuova offerta)**:
    *   Progettato per un'esperienza cloud-native e automatizzata.
    *   Sicurezza integrata (Gateway, Firewalling, NAT) senza gestione di apparecchiature di terze parti.
    *   Servizio gestito con alta disponibilità garantita da Cloud Temple.
    *   Ideale per progetti moderni, DevOps e hosting di applicazioni web.

## Architettura

Il VPC si basa su un'architettura ridondante e ad alta disponibilità, sfruttando la dorsale inter-AZ a bassa latenza di Cloud Temple.

### Componenti Chiave

*   **Router VPC**: Al centro di ogni VPC, gestisce il routing dinamico tra le diverse Private Networks (traffico est-ovest).
*   **Private Networks (VLANs)**: Segmenti di rete di livello 2 che collegano le tue risorse (VM, server). Si estendono nativamente su più Zone di Disponibilità (AZ) senza riconfigurazione IP.
*   **External Gateway**: Punto di ingresso e uscita opzionale per il traffico Internet (nord-sud). Integra funzionalità di NAT e gestione dei flussi.

### Isolamento e Sicurezza

Il VPC garantisce un isolamento rigoroso:
*   Ogni VPC è un'entità di rete indipendente.
*   Il deployment avviene su risorse dedicate (per i clienti IaaS Open Source), garantendo che nessuna risorsa di rete sia condivisa.
*   Il servizio è attualmente in fase di qualificazione **SecNumCloud**.

## Funzionalità Principali

| Funzionalità | Descrizione | Disponibilità |
|--------------|-------------|---------------|
| **Reti private regionali** | Deployment multi-AZ e propagazione L2 trasparente. | Disponibile |
| **Routing nativo** | Comunicazione automatica tra reti private dello stesso VPC. | Disponibile |
| **IPAM & DHCP** | Gestione automatica dei pool di indirizzi e assegnazione dinamica. | Disponibile |
| **Accesso a Internet** | Configurabile tramite Gateway (NAT, DNAT, Egress controllato). | Disponibile |
| **IP Flottanti** | Esposizione flessibile dei servizi su Internet. | Disponibile |
| **Micro-segmentazione** | Gruppi di policy di rete per una sicurezza avanzata. | S1 2026 |
| **Osservabilità** | Log e metriche di prestazione della rete. | S1 2026 |
| **Servizio DNS** | Risoluzione dei nomi interna ed esterna. | S2 2026 |
| **VPN & Cloud Connect** | Connettività sicura verso on-premise e cloud pubblici. | S2 2026 |

## Casi d'Uso

*   **Hosting di applicazioni critiche** che richiedono un forte isolamento.
*   **Segmentazione multi-progetto** (Prod, Pre-prod, Dev).
*   **Ambienti di test** effimeri e isolati.
*   **Basi di rete sovrane** per dati sensibili.
