---
title: Matrice delle Responsabilità (RACI) - Kubernetes Gestito
displayed_sidebar: docSidebar
---

## RACI

### Architettura e Infrastruttura

| **Attività**                                                        | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------------- | ----------- | ---------------- |
| Definire l'architettura globale del servizio Kubernetes             | C           | RA               |
| Dimensionare il servizio Kubernetes (numero di nodi, risorse)       | C           | RA               |
| Installare il servizio Kubernetes con configurazione predefinita    | I           | RA               |
| Configurazione del servizio Kubernetes                              | C           | RA               |
| Configurare la rete di base del servizio Kubernetes                 | I           | RA               |
| Implementazione della configurazione iniziale di identità e accessi | C           | RA               |
| Definire la strategia di scalabilità e alta disponibilità          | C           | RA               |

### Gestione dei progetti e delle applicazioni aziendali

| **Attività**                                       | **Cliente** | **Cloud Temple** |
| -------------------------------------------------- | ---------- | ---------------- |
| Creare e gestire i progetti Kubernetes             | RA         | I*               |
| Distribuire e gestire le applicazioni in Kubernetes| RA         | I*               |
| Configurare le pipeline CI/CD                      | RA         | I*               |
| Gestire le immagini dei container e i registri     | RA         | I*               |

*Queste responsabilità possono essere delegate a Cloud Temple tramite un contratto di gestione complementare.

### Monitoraggio e prestazioni

| **Attività**                                    | **Cliente** | **Cloud Temple** |
| ----------------------------------------------- | ----------- | ---------------- |
| Monitorare le prestazioni del servizio Kubernetes | I           | RA               |
| Monitorare le prestazioni delle applicazioni      | RA          |                  |
| Gestire gli alert del servizio Kubernetes         | I           | RA               |
| Gestire gli alert delle applicazioni              | RA          |                  |

### Manutenzione e aggiornamenti delle infrastrutture

| **Attività**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Aggiornare il servizio Kubernetes/OS                   | C          | RA               |
| Applicare le patch di sicurezza a Kubernetes           | C          | RA               |
| Aggiornare le applicazioni distribuite (operatori*)    | C          | RA               |

*Package operatore incluso su Managed Kube - vedere capitoli: Package Helm gestiti

### Sicurezza

| **Attività**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Gestire la sicurezza del servizio Kubernetes                                    | RA         | RA               |
| Configurare e gestire le politiche di sicurezza dei pod                    | RA         | I*               |
| Gestire i certificati SSL/TLS per il servizio Kubernetes                   | C          | RA               |
| Gestire i certificati SSL/TLS per le applicazioni                        | RA         | I*               |
| Implementare e gestire il controllo degli accessi basato sui ruoli di base (RBAC) | C          | R                |
| Implementare e gestire il controllo degli accessi basato sui ruoli client (RBAC)  | RA         | I*               |

*Queste responsabilità possono essere delegate a Cloud Temple tramite un contratto di gestione complementare.

### Backup e disaster recovery

| **Attività**                                                               | **Cliente** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ----------- | ---------------- |
| Definire la strategia di backup per il servizio Kubernetes                 | I           | RA               |
| Implementare e gestire i backup del servizio Kubernetes                    | I           | RA               |
| Definire la strategia di backup per le applicazioni                        | RA*         | I*               |
| Implementare e gestire i backup delle applicazioni                         | RA*         | I*               |
| Testare le procedure di disaster recovery per il servizio Kubernetes       | CI          | RA               |
| Testare le procedure di disaster recovery per le applicazioni              | RA*         | CI*              |

*Queste responsabilità possono essere delegate a Cloud Temple tramite un contratto di gestione complementare.

### Supporto e risoluzione dei problemi

| **Attività**                                              | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ----------- | ---------------- |
| Fornire supporto di livello 1 per l'infrastruttura        | I           | RA               |
| Fornire supporto di livello 2 e 3 per l'infrastruttura    | I           | RA               |
| Risolvere i problemi relativi al servizio Kubernetes      | C           | RA               |
| Risolvere i problemi relativi alle applicazioni           | RA          | I                |

### Gestione delle capacità e dell'evoluzione

| **Attività**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Monitorare l'utilizzo delle risorse Kubernetes         | C          | RA               |
| Pianificare l'evoluzione delle capacità del servizio   | RA         | C                |
| Implementare le modifiche alle capacità                | I          | RA               |
| Gestire l'evoluzione delle applicazioni e delle loro risorse | RA         | I                |

### Documentazione e conformità

| **Attività**                                     | **Cliente** | **Cloud Temple** |
| ------------------------------------------------ | ---------- | ---------------- |
| Mantenere la documentazione del servizio Kubernetes | I          | RA               |
| Mantenere la documentazione delle applicazioni      | RA         | I                |
| Garantire la conformità del servizio Kubernetes      | I          | RA               |
| Garantire la conformità delle applicazioni           | RA         | I                |
| Eseguire audit del servizio Kubernetes        | I          | RA               |
| Eseguire audit delle applicazioni             | RA         | I                |

### Gestione degli operatori/CRD Kubernetes di base

| **Attività**                                                | **Cliente** | **Cloud Temple** |
| ----------------------------------------------------------- | ----------- | ---------------- |
| Messa a disposizione del catalogo predefinito degli operatori | CI          | RA               |
| Aggiornamento degli operatori                               | CI          | RA               |
| Monitoraggio dello stato degli operatori                    | CI          | RA               |
| Risoluzione dei problemi legati agli operatori              | CI          | RA               |
| Gestione dei permessi degli operatori                       | CI          | RA               |
| Gestione delle risorse degli operatori (aggiunta/rimozione) | CI          | RA               |
| Backup dei dati delle risorse degli operatori               | CI          | RA               |
| Supervisione delle risorse degli operatori                  | CI          | RA               |
| Ripristino dei dati delle risorse degli operatori           | CI          | RA               |
| Audit di sicurezza degli operatori                          | CI          | RA               |
| Supporto degli operatori                                    | CI          | RA               |
| Gestione delle licenze degli operatori                      | CI          | RA               |
| Gestione dei piani di supporto specifici per gli operatori  | CI          | RA               |

*Package operatore incluso su Managed Kube - vedere capitoli: Package Helm gestiti

### Gestione delle applicazioni/operatori/CRD Kubernetes (business)

| **Attività**                                                | **Cliente** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Deploy dei CRDs                                        | RA*        | I*               |
| Aggiornamento degli Operatori                                  | RA         | I                |
| Monitoraggio dello stato degli Operatori                       | RA         | I                |
| Risoluzione dei problemi legati agli Operatori                | RA         | I                |
| Gestione delle autorizzazioni degli Operatori                    | RA         | I                |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)   | RA         | I                |
| Backup dei dati delle risorse degli Operatori        | RA         | I                |
| Supervisione delle risorse degli Operatori                       | RA         | I                |
| Ripristino dei dati delle risorse degli Operatori      | RA         | I                |
| Audit di sicurezza degli Operatori                            | RA         | I                |
| Supporto degli Operatori                                      | RA         | I                |
| Gestione delle licenze sugli operatori                     | RA         | I                |
| Gestione dei piani di supporto specifici sugli operatori | RA         | I                |

*Queste responsabilità possono essere delegate a Cloud Temple tramite un contratto di gestione operativa complementare.

### Supporto applicativo

| **Attività**                                | **Cliente** | **Cloud Temple** |
| ------------------------------------------- | ---------- | ---------------- |
| Supporto applicativo (prestazione esterna) | RA         | I                |

Un supporto applicativo può inoltre essere fornito nell'ambito di una prestazione complementare.

### RACI (sintetico)

- Cloud Temple: responsabile e attore (RA) della piattaforma Kubernetes, sicurezza del cluster, backup dell'infrastruttura, supervisione.
- Cliente: responsabile e attore (RA) dei progetti applicativi, operatori di business, pipeline CI/CD, backup applicativi.
- Zona "grigia": adattamenti ed estensioni (IAM, operatori specifici, hardening della conformità/sicurezza del cluster) - fatturati a progetto.