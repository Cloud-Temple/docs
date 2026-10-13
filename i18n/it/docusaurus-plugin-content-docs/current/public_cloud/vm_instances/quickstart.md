---
title: Guida di avvio
---

## Prerequisiti

Prima di iniziare, assicuratevi di disporre dei seguenti elementi :

- Un **Tenant Cloud Temple** attivo
- Un'abbonamento al **Support Standard** minimo per un cliente diretto ; il **Support Basic** è destinato ai clienti accompagnati da un partner formato (vedi la [FAQ](./faq))
- Le autorizzazioni necessarie nella vostra organizzazione Cloud Temple

## Accedere al servizio VM Instances

Accedere alla **Console Cloud Temple** e navigare verso **Cloud Public > VM Instances** dal menu principale.

![Dashboard Console Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

La dashboard presenta un'anteprima delle risorse VM Instances consumate (archiviazione, CPU, RAM) nonché il numero di macchine virtuali attive.

Fare clic su **Cloud Public** nella barra laterale sinistra per espandere il sottomenu, quindi selezionare **VM Instances**.

![Navigation vers VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Si arriva all'elenco delle proprie VM Instances:

![Liste des VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

La tabella mostra per ogni VM: il nome, lo stato (Accesa / Spenta), la zona di disponibilità, la famiglia di istanza, il modello, nonché le risorse allocate (CPU, RAM, Dimensione disco).

## Deployare una macchina virtuale

Fare clic sul pulsante **+ Nuova macchina virtuale** in alto a destra per aprire la procedura guidata di creazione. Questa procedura guidata si svolge in **9 fasi**.

### Passo 1 — Famiglia di istanza

![Passo 1: Famiglia di istanza](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Scegliete la **famiglia di istanza** adatta al vostro carico di lavoro:

| Famiglia | Descrizione | CPU |
|---------|-------------|-----|
| **Development** | Costo ottimizzato, per ambienti di test e pre-produzione | Condivisi |
| **General Purpose** | Equilibrio ottimale vCPU/RAM per carichi standard | Condivisi |

:::info
La famiglia **Performance** (vCPU dedicati) è disponibile tramite il modello personalizzato.
:::

### Passo 2 — Zona di disponibilità

![Passo 2 : Zona di disponibilità](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Selezionare la **zona di disponibilità (AZ)** in cui la VM verrà ospitata (es. : `fr1-az01`).

Questa scelta non richiede di sottoscrivere l'attivazione AZ a fatturazione dell'offerta
IaaS : questa sottoscrizione non è un prerequisito di VM Instances.

### Passo 3 — Scegliere un template

![Passo 3: Scegliere un template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Sfoglia il catalogo delle immagini disponibili tramite le schede **OS** e **Appliances** :

- **Debian 13** (Trixie)
- **Rocky Linux**
- E altri sistemi disponibili nella Marketplace Cloud Temple

Selezionate il sistema operativo desiderato e scegliete la versione nel menu a tendina associato.

### Passo 4 — Template

![Étape 4 : Gabarit](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Scegli un **template predefinito** o crea un **template Custom** :

- `dev-1` : 1 vCPU
- `dev-2` : 2 vCPU / 8 Go RAM (selezionato per impostazione predefinita)
- **Custom** : inserisci liberamente il numero di vCPU e la quantità di RAM

### Passo 5 — Nome e politica di backup

![Passo 5 : Nome e politica di backup](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Compilare:

| Parametro | Descrizione |
|-----------|-------------|
| **Nome** | Nome univoco della VM nel tenant |
| **Politica di backup** | `No Backup` per impostazione predefinita, oppure una politica di retention se l'opzione backup è stata sottoscritta |

Questo passaggio mostra anche un riepilogo del sistema operativo selezionato e della dimensione del disco di sistema.

### Passo 6 — Cloud Init

![Étape 6 : Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Questo passaggio è **opzionale**. Consente di preconfigurare la VM al primo avvio tramite due editor:

- **Cloud Config** : iniezione di chiavi SSH, configurazione dell'hostname, installazione di pacchetti, ecc.
- **Network Config** : configurazione di rete statica (formato Netplan)

Esempio di Cloud Config minimale:

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

Una casella di spunta consente di **rimuovere il disco di configurazione Cloud Init** dopo il primo avvio (consigliato per la sicurezza).

### Passo 7 — Dischi

![Étape 7 : Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Configurate il disco o i dischi della tua VM:

- **Disco di sistema** : creato automaticamente (`system-disk-1`), dimensione determinata dal sistema operativo
- **Dischi aggiuntivi** : aggiungi volumi supplementari con il nome, la capacità e il tipo di storage desiderati

Sono disponibili due tipi di storage:

| Tipo | IOPS |
|------|------|
| **Standard** | ~1 500 IOPS/To |
| **Enterprise** | ~7 500 IOPS/To |

### Passaggio 8 — Adattatori di rete

![Passaggio 8 : Adattatori di rete](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Associa la tua VM a una rete dal menu a tendina. Sono disponibili due tipi di rete:

- **Backbone privato** (es. : PACKFR) : rete privata condivisa con isolamento logico
- **VPC** : rete privata completamente dedicata con segmentazione avanzata

### Passo 9 — Riepilogo

![Étape 9 : Sommaire](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verificate il riepilogo completo prima di avviare il provisioning:

- Informazioni generali (famiglia, AZ, modello, nome, backup)
- Template (CPU, RAM)
- Configurazione Cloud Init
- Dischi virtuali
- Rete

Fare clic su **Crea** per avviare il deployment. La VM viene provisionata in pochi minuti.

## Gestire le proprie macchine virtuali

Dall'elenco, fate clic su una VM per espandere il relativo pannello di dettaglio. Sono disponibili quattro schede:

### Scheda Informazioni

![Détail VM - Informations](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

Consultate e modificate i parametri della vostra VM:
- Nome, UUID, zona di disponibilità
- Famiglia di istanza, modello OS
- CPU, RAM (modificabili a VM spenta)
- Politica di backup

Le icone di azione consentono di **avviare**, **arrestare**, **riavviare** o **aprire la console** della VM.

### Scheda Dischi

![Dettaglio VM - Dischi](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Consultate i dischi allegati e aggiungete volumi aggiuntivi tramite il pulsante **+ Aggiungi un disco**.

### Scheda Adattatori di Rete

![Dettaglio VM - Rete](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

Consultare le interfacce di rete della VM (nom du réseau, adresse MAC, adresse IPv4/IPv6).

### Scheda Snapshots

![Détail VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Creare e gestire gli snapshot della tua VM tramite il pulsante **+ Crea uno snapshot**.

## Automazione e Infrastructure as Code

Il servizio VM Instances è completamente automatizzabile :

### Via l'API REST

L'API REST Cloud Temple consente il controllo programmatico completo del ciclo di vita delle macchine virtuali.

Riferimento API : [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Via Terraform

Il provider Terraform Cloud Temple consente di gestire le proprie VM Instances in Infrastructure as Code.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Consultare la [documentazione Terraform](/terraform) per l'installazione e la configurazione del provider.

## Risorse utili

- [Documentation publique Cloud Temple](https://docs.cloud-temple.com/home)
- [Référence API](https://shiva.cloud-temple.com/api/)
- [Documentation Terraform](/terraform)
- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)