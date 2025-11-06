---
title: Matrice di Responsabilità (RACI) - Kubernetes Gestito
---

## RACI

### Architettura e Infrastruttura

| **Attività**                                                        | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------------- | ----------- | ---------------- |
| Definire l'architettura generale del servizio Kubernetes             | C           | RA               |
| Dimensionare il servizio Kubernetes (numero di nodi, risorse)        | C           | RA               |
| Installare il servizio Kubernetes con una configurazione predefinita | I           | RA               |
| Configurare il servizio Kubernetes                                   | C           | RA               |
| Configurare la rete di base del servizio Kubernetes                  | I           | RA               |
| Distribuire la configurazione iniziale per identità e accessi        | C           | RA               |
| Definire la strategia di scalabilità e disponibilità elevata         | C           | RA               |

### Gestione dei progetti e delle applicazioni aziendali

| **Attività**                                       | **Cliente** | **Cloud Temple** |
| -------------------------------------------------- | ----------- | ---------------- |
| Creare e gestire i progetti Kubernetes              | RA          | I*               |
| Distribuire e gestire le applicazioni in Kubernetes | RA          | I*               |
| Configurare i pipeline CI/CD                        | RA          | I*               |
| Gestire le immagini dei contenitori e i registri    | RA          | I*               |

*Queste responsabilità possono essere delegate a Cloud Temple tramite un contratto di infrastruttura aggiuntivo.

### Monitoraggio e prestazioni

| **Attività**                                    | **Cliente** | **Cloud Temple** |
| ----------------------------------------------- | ---------- | ---------------- |
| Monitorare le prestazioni del servizio Kubernetes | I          | RA               |
| Monitorare le prestazioni delle applicazioni      | RA         |                  |
| Gestire le allerte relative al servizio Kubernetes | I          | RA               |
| Gestire le allerte relative alle applicazioni        | RA         |                  |

### Manutenzione e aggiornamenti Infrastrutture

| **Attività**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------ | ----------- | ---------------- |
| Aggiornare il servizio Kubernetes/OS                  | C           | RA               |
| Applicare i patch di sicurezza a Kubernetes            | C           | RA               |
| Aggiornare le applicazioni distribuite (operatori*)    | C           | RA               |

*Pacchetto operatore incluso nel Managed Kube - vedere capitoli: Pacchetti Helm gestiti

### Security

| **Activity**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Manage security for the Kubernetes service                                 | RA         | RA               |
| Configure and manage pod security policies                                   | RA         | I*               |
| Manage SSL/TLS certificates for the Kubernetes service                     | C          | RA               |
| Manage SSL/TLS certificates for applications                                 | RA         | I*               |
| Implement and manage basic role-based access control (RBAC)                 | C          | R                |
| Implement and manage client role-based access control (RBAC)                | RA         | I*               |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.

### Backup and Disaster Recovery

| **Activity**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Define the backup strategy for the Kubernetes service                     | I          | RA               |
| Implement and manage backups for the Kubernetes service                   | I          | RA               |
| Define the backup strategy for applications                               | RA*        | I*               |
| Implement and manage backups for applications                             | RA*        | I*               |
| Test disaster recovery procedures for the Kubernetes service             | CI         | RA               |
| Test disaster recovery procedures for applications                        | RA*        | CI*              |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.

### Support and troubleshooting

| **Activity**                                              | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------- | ---------------- |
| Provide level 1 support for infrastructure                | I          | RA               |
| Provide level 2 and 3 support for infrastructure         | I          | RA               |
| Resolve issues related to the Kubernetes service          | C          | RA               |
| Resolve issues related to applications                    | RA         | I                |

### Gestione delle capacità e evoluzione

| **Attività**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------ | ----------- | ---------------- |
| Monitorare l'utilizzo delle risorse Kubernetes         | C           | RA               |
| Pianificare l'evoluzione delle capacità del servizio   | RA          | C                |
| Implementare i cambiamenti delle capacità              | I           | RA               |
| Gestire l'evoluzione delle applicazioni e delle loro risorse | RA       | I                |

### Documentazione e conformità

| **Attività**                                     | **Cliente** | **Cloud Temple** |
| ------------------------------------------------ | ----------- | ---------------- |
| Mantenere la documentazione del servizio Kubernetes | I           | RA               |
| Mantenere la documentazione delle applicazioni    | RA          | I                |
| Garantire la conformità del servizio Kubernetes    | I           | RA               |
| Garantire la conformità delle applicazioni         | RA          | I                |
| Effettuare audit del servizio Kubernetes          | I           | RA               |
| Effettuare audit delle applicazioni               | RA          | I                |

### Basic Kubernetes Operators/CRD Management

| **Activity**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Provisioning of default Operators catalog                   | CI         | RA               |
| Updating Operators                                          | CI         | RA               |
| Monitoring Operators status                                 | CI         | RA               |
| Troubleshooting Operator-related issues                     | CI         | RA               |
| Managing Operator permissions                               | CI         | RA               |
| Managing Operator resources (addition/removal)              | CI         | RA               |
| Backing up Operator resources data                          | CI         | RA               |
| Monitoring Operator resources                               | CI         | RA               |
| Restoring Operator resources data                           | CI         | RA               |
| Security auditing of Operators                              | CI         | RA               |
| Operator support                                            | CI         | RA               |
| License management for Operators                            | CI         | RA               |
| Management of specific support plans for Operators          | CI         | RA               |

*Operator package included in Managed Kube – see chapters: Managed Helm Packages

### Management of Kubernetes applications/operators/CRDs (business)

| **Activity**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Deployment of CRDs                                          | RA*        | I*               |
| Update of Operators                                         | RA         | I                |
| Monitoring of Operator status                               | RA         | I                |
| Troubleshooting issues related to Operators                 | RA         | I                |
| Management of Operator permissions                          | RA         | I                |
| Management of Operator resources (addition/removal)         | RA         | I                |
| Backup of Operator resource data                            | RA         | I                |
| Monitoring of Operator resources                            | RA         | I                |
| Restoration of Operator resource data                       | RA         | I                |
| Security audit of Operators                                 | RA         | I                |
| Support for Operators                                       | RA         | I                |
| License management for Operators                            | RA         | I                |
| Management of specific support plans for Operators          | RA         | I                |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.*

### Support applicativo

| **Attività**                                | **Cliente** | **Cloud Temple** |
| ------------------------------------------- | ---------- | ---------------- |
| Supporto applicativo (prestazione esterna) | RA         | I                |

Un support applicativo può inoltre essere fornito nell'ambito di una prestazione complementare.

### RACI (sintetico)

- Cloud Temple: responsabile e attore (RA) per la base Kubernetes, sicurezza del cluster, backup infrastruttura, monitoraggio.
- Cliente: responsabile e attore (RA) per i progetti applicativi, operatori aziendali, pipeline CI/CD, backup applicativi.
- Zona "grigia": adattamenti ed estensioni (IAM, operatori specifici, rafforzamento della conformità/sicurezza del cluster) - fatturati in modalità progetto.