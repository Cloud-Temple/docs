---
title: Panoramica
---

Il provider Terraform Cloud Temple consente di gestire l'infrastruttura del proprio account Cloud Temple utilizzando l'approccio Infrastructure as Code (IaC). Offre un'integrazione completa con i servizi di infrastruttura Cloud Temple, consentendo di provisioning, configurare e gestire le risorse cloud in modo dichiarativo e riproducibile.

## Funzionalità principali

- **Infrastructure as Code**: Definire l'infrastruttura in file di configurazione versionabili
- **Gestione dichiarativa**: Descrivere lo stato desiderato dell'infrastruttura, Terraform si occupa del resto
- **Automazione completa**: Automatizzare il provisioning e la gestione delle risorse
- **Riproducibilità**: Distribuire ambienti identici in modo affidabile
- **Gestione delle dipendenze**: Terraform gestisce automaticamente l'ordine di creazione delle risorse

## Prodotti coperti

Il provider Terraform Cloud Temple supporta i seguenti servizi:

### IaaS VMware

Gestire le macchine virtuali VMware con tutte le funzionalità avanzate di virtualizzazione:

- **Macchine virtuali**: Creazione e configurazione di macchine virtuali
- **Dischi virtuali**: Creazione e configurazione di dischi virtuali
- **Adattatori di rete**: Gestione degli adattatori di rete delle macchine virtuali
- **Controller virtuali**: Gestione dei controller di disco e altri dispositivi
- **Cloud-Init**: Configurazione automatizzata all'avvio
- **Backup**: Integrazione con le politiche di backup di Cloud Temple

### IaaS OpenSource

Provisioning e gestione di macchine virtuali su infrastruttura OpenSource basata su XCP-ng:

- **Macchine virtuali**: Creazione e gestione di macchine virtuali
- **Dischi virtuali**: Creazione e configurazione di dischi virtuali
- **Adattatori di rete**: Creazione e configurazione degli adattatori di rete delle macchine virtuali
- **Replica**: Politiche di replica dei dati
- **Alta disponibilità**: Configurazione HA (disabled, restart, best-effort)
- **Cloud-Init**: Configurazione automatizzata compatibile con NoCloud
- **Backup**: Integrazione con le politiche di backup di Cloud Temple

### Object Storage

Gestire gli spazi di archiviazione oggetti compatibili con S3:

- **Bucket**: Creazione e configurazione di bucket
- **Account di archiviazione**: Gestione delle identità e delle credenziali S3
- **ACL**: Controllo granulare degli accessi ai bucket
- **Versionamento**: Gestione delle versioni degli oggetti

## Prerequisiti

Prima di utilizzare il provider Terraform Cloud Temple, assicurarsi di disporre di:

### Accesso alla console Cloud Temple

È necessario avere accesso alla [Console Cloud Temple](https://shiva.cloud-temple.com) con i diritti appropriati sul tenant su cui si desidera lavorare.

### Chiave API

Il provider richiede le credenziali API di Cloud Temple:

- **Client ID**: Identificatore client per l'autenticazione
- **Secret ID**: Segreto associato al Client ID

Queste credenziali possono essere generate dalla Console Cloud Temple seguendo [questa procedura](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

### Diritti e permessi

A seconda delle risorse che si desidera gestire, è necessario disporre dei ruoli appropriati:

#### Per IaaS VMware

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` e `backup_iaas_spp_write` (per il backup)

#### Per IaaS OpenSource

- `compute_iaas_opensource_management`
- `compute_iaas_opensource_read`
- `compute_iaas_opensource_virtual_machine_power`
- `backup_iaas_opensource_read` e `backup_iaas_opensource_write` (per il backup)

#### Per Object Storage

- `object-storage_write`
- `object-storage_read`
- `object-storage_iam_management`

#### Diritti comuni

- `activity_read`
- `tag_read` e `tag_write`

## Compatibilità Terraform

Il provider Cloud Temple è compatibile con:

- **Terraform**: Versione 1.0 e successive
- **OpenTofu**: Compatibile con le versioni recenti

## Logging e debug

Per abilitare il logging dettagliato del provider:

```bash
# Logging livello DEBUG
export TF_LOG=DEBUG
terraform apply

# Logging in formato JSON
export TF_LOG=JSON
terraform apply

# Salvare i log in un file
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Supporto e risorse

- **Documentazione ufficiale**: [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Codice sorgente**: [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Issues**: [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Prossimi passi

- [Concetti](concepts.md): Comprendere i concetti chiave del provider
- [Guida introduttiva](quickstart.md): Creare la prima infrastruttura
- [Tutorial](tutorials.md): Esempi pratici e casi d'uso
