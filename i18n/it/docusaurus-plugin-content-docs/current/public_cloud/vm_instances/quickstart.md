---
title: Guida introduttiva
---

## Prerequisiti

Prima di iniziare, assicurarsi di disporre di quanto segue:

- Un **Tenant Cloud Temple** attivo
- Un abbonamento minimo al **Supporto Standard**
- I permessi necessari nella propria organizzazione Cloud Temple

## Distribuire una macchina virtuale

### 1. Accedere al servizio

Accedere alla **Console Cloud Temple** e navigare alla sezione **VM Instances** dal menu principale.

### 2. Selezionare il tenant e la zona di disponibilità

- Scegliere il **tenant** in cui si desidera distribuire la macchina virtuale.
- Selezionare la **zona di disponibilità (AZ)** di destinazione tra quelle disponibili nella regione FR1.

### 3. Scegliere un'immagine dal Marketplace

Le macchine virtuali vengono distribuite esclusivamente dalle **immagini ufficiali del Marketplace di Cloud Temple**.

- Sfogliare il catalogo delle immagini disponibili.
- Selezionare il sistema operativo e la versione desiderati.

### 4. Configurare la macchina virtuale

Inserire i parametri per la propria istanza:

| Parametro | Descrizione |
|-----------|-------------|
| **Classe di servizio** | Development, General Purpose o Performance |
| **Flavor** | Scegliere tra flavor predefiniti o creare un flavor personalizzato (vCPU + RAM) |
| **Dischi aggiuntivi** | Aggiungere volumi aggiuntivi se necessario (fino a 16 volumi, massimo 2 TB per volume) |
| **Rete (VPC)** | Associare la VM alla propria rete VPC |
| **Cloud-init** | Opzionale: iniettare uno script di preconfigurazione all'avvio (chiavi SSH, configurazione di rete, ecc.) |

:::info[Disco di sistema]
Il disco di sistema (Flash) è incluso automaticamente. La sua dimensione (tra 15 e 100 GB) dipende dal sistema operativo scelto.
:::

### 5. Avviare la distribuzione

Convalidare la configurazione e avviare il provisioning. La distribuzione è **automatizzata e immediata** (pochi minuti).

## Gestire le macchine virtuali

Dalla console è possibile eseguire le seguenti azioni sulle proprie macchine virtuali:

- **Avviare / Arrestare / Riavviare** la macchina virtuale
- **Aprire la console** per accedere direttamente al sistema
- **Modificare la configurazione** (vCPU, RAM) — richiede l'arresto della VM
- **Aggiungere dischi** aggiuntivi
- **Visualizzare le metriche delle prestazioni** (CPU, RAM, Disco)
- **Configurare il backup** (opzione a pagamento) con conservazione configurabile

## Automazione e Infrastructure as Code

Il servizio VM Instances è completamente automatizzabile:

### Tramite l'API REST

L'API REST di Cloud Temple consente il controllo programmatico completo del ciclo di vita delle macchine virtuali.

Riferimento API: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Tramite Terraform

Il provider Terraform di Cloud Temple consente di gestire le VM Instances come Infrastructure as Code.

```hcl
# Esempio di risorsa VM Instances con Terraform
# Consultare la documentazione del provider per gli attributi disponibili
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Consultare la [documentazione Terraform](pathname:///docs/terraform/terraform) per l'installazione e la configurazione del provider.

## Risorse utili

- [Documentazione pubblica Cloud Temple](https://docs.cloud-temple.com/home)
- [Riferimento API](https://shiva.cloud-temple.com/api/)
- [Documentazione Terraform](pathname:///docs/terraform/terraform)
- [Concetti sulle zone di disponibilità](../../additional_content/concepts_az.md)
