---
title: Panoramica
---

Il provider Terraform Cloud Temple ti permette di gestire l'infrastruttura del tuo account Cloud Temple utilizzando l'approccio Infrastructure as Code (IaC). Offre un'integrazione completa con i servizi di infrastruttura Cloud Temple, consentendo di provisioning, configurare e gestire le tue risorse cloud in modo dichiarativo e ripetibile.

## Funzionalità principali

- **Infrastructure as Code**: definisci la tua infrastruttura in file di configurazione versionabili
- **Gestione dichiarativa**: descrivi lo stato desiderato della tua infrastruttura, Terraform si occupa del resto
- **Automazione completa**: automatizza il provisioning e la gestione delle tue risorse
- **Reproducibilità**: distribuisci ambienti identici in modo affidabile
- **Gestione delle dipendenze**: Terraform gestisce automaticamente l'ordine di creazione delle risorse

## Prodotti coperti

Il provider Terraform Cloud Temple supporta i seguenti servizi:

### IaaS VMware

Gestisci le tue macchine virtuali VMware con tutte le funzionalità avanzate di virtualizzazione:

- **Macchine virtuali**: creazione e configurazione di macchine virtuali
- **Dischi virtuali**: creazione e configurazione di dischi virtuali
- **Adattatori di rete**: gestione degli adattatori di rete delle macchine virtuali
- **Controller virtuali**: gestione dei controller di dischi e di altri dispositivi
- **Cloud-Init**: configurazione automatica all'avvio
- **Backup**: integrazione con le politiche di backup Cloud Temple

### IaaS OpenSource

Provision and manage virtual machines on the OpenSource infrastructure based on XCP-ng:

- **Virtual Machines**: Creation and management of virtual machines
- **Virtual Disks**: Creation and configuration of virtual disks
- **Network Adapters**: Creation and configuration of network adapters for virtual machines
- **Replication**: Data replication policies
- **High Availability**: HA configuration (disabled, restart, best-effort)
- **Cloud-Init**: Automated configuration compatible with NoCloud
- **Backup**: Integration with Cloud Temple backup policies

### Archiviazione oggetti

Gestisci i tuoi spazi di archiviazione oggetti compatibili con S3:

- **Bucket**: Creazione e configurazione di bucket
- **Account di archiviazione**: Gestione delle identità e delle credenziali S3
- **ACL**: Controllo degli accessi granulare ai bucket
- **Versioning**: Gestione delle versioni degli oggetti

## Prerequisiti

Prima di utilizzare il provider Terraform Cloud Temple, assicurati di disporre di:

### Accesso alla Console Cloud Temple

È necessario disporre dell'accesso alla [Console Cloud Temple](https://shiva.cloud-temple.com) con i diritti appropriati sul tenant su cui si desidera lavorare.

### API Key

The provider requires Cloud Temple API credentials:

- **Client ID**: Client identifier for authentication
- **Secret ID**: Secret associated with the Client ID

These credentials can be generated via the Cloud Temple Console by following [this procedure](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

### Diritti e autorizzazioni

A seconda delle risorse che desideri gestire, devi disporre dei ruoli appropriati:

#### Per IaaS VMware

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` e `backup_iaas_spp_write` (per il backup)

#### Per IaaS Open Source

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

## Terraform Compatibility

The Cloud Temple provider is compatible with:

- **Terraform**: Version 1.0 and higher
- **OpenTofu**: Compatible with recent versions

## Logging e debug

Per abilitare il logging dettagliato del provider:

```bash
# Logging a livello DEBUG
export TF_LOG=DEBUG
terraform apply

# Logging in formato JSON
export TF_LOG=JSON
terraform apply

# Salvare i log in un file
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Support e risorse

- **Documentazione ufficiale** : [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Codice sorgente** : [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Problemi** : [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Prossimi passaggi

- [Concetti](concepts.md) : Comprendere i concetti chiave del provider
- [Guida introduttiva](quickstart.md) : Creare la tua prima infrastruttura
- [Tutorial](tutorials.md) : Esempi pratici e casi d'uso
