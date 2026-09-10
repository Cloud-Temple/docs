---
title: Guida introduttiva
---

## Prerequisiti

Prima di iniziare, assicurati di disporre dei seguenti elementi:

- Un **Tenant Cloud Temple** attivo
- Una sottoscrizione al **Supporto Standard** minimo
- Le autorizzazioni necessarie nella tua organizzazione Cloud Temple

## Accedere al servizio VM Instances

Accedi alla **Console Cloud Temple** e vai a **Cloud Public > VM Instances** dal menu principale.

![Dashboard Console Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

Il pannello di controllo ti presenta una panoramica delle risorse VM Instances consumate (stockage, CPU, RAM) nonché il numero di macchine virtuali attive.

Fai clic su **Cloud Public** nella barra laterale sinistra per espandere il sottomenu, quindi seleziona **VM Instances**.

![Navigation vers VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Verrai visualizzata la lista delle tue VM Instances :

![Liste des VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

La tabella mostra per ogni VM: il nome, lo stato (Allumée / Éteinte), la zona di disponibilità, la famiglia di istanza, il modello, nonché le risorse allocate (CPU, RAM, Taille disque).

## Distribuire una macchina virtuale

Fate clic sul pulsante **+ Nuova macchina virtuale** in alto a destra per aprire la procedura guidata di creazione. Questa procedura guidata prevede **9 passaggi**.

### Passo 1 — Famiglia di istanza

![Passo 1: Famiglia di istanza](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Seleziona la **famiglia di istanza** adatta al tuo carico di lavoro :

| Famiglia | Descrizione | CPU |
|---------|-------------|-----|
| **Development** | Costo ottimizzato, per ambienti di test e staging | Condivisi |
| **General Purpose** | Equilibrio ottimale vCPU/RAM per carichi di lavoro standard | Condivisi |

:::info
La famiglia **Performance** (vCPU dedicati) è disponibile tramite il modello personalizzato.
:::

### Fase 2 — Zona di disponibilità

![Fase 2: Zona di disponibilità](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Selezionate la **zona di disponibilità (AZ)** in cui la vostra VM sarà ospitata (es: `fr1-az01`).

### Passo 3 — Scegliere un template

![Passo 3: Scegliere un template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Esplora il catalogo delle immagini disponibili tramite le schede **OS** e **Appliances** :

- **Debian 13** (Trixie)
- **Rocky Linux**
- E altri sistemi disponibili nella Marketplace Cloud Temple

Seleziona il sistema operativo desiderato e scegli la versione dal menu a tendina associato.

### Passo 4 — Modello

![Passo 4 : Modello](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Scegli un **modello predefinito** o crea un **modello Custom** :

- `dev-1` : 1 vCPU
- `dev-2` : 2 vCPU / 8 Go RAM (selezionato per impostazione predefinita)
- **Custom** : inserisci liberamente il numero di vCPU e la quantità di RAM

### Passo 5 — Nome e politica di backup

![Passo 5: Nome e politica di backup](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Inserisci :

| Parametro | Descrizione |
|-----------|-------------|
| **Nome** | Nome univoco della tua VM nel tenant |
| **Politica di backup** | `No Backup` per impostazione predefinita, oppure una politica di retention se è stata sottoscritta l'opzione backup |

Questo passaggio mostra inoltre un riepilogo del sistema operativo selezionato e delle dimensioni del disco di sistema.

### Passo 6 — Cloud Init

![Passo 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Questo passaggio è **opzionale**. Consente di preconfigurare la VM al primo avvio tramite due editor:

- **Cloud Config**: iniezione di chiavi SSH, configurazione dell'hostname, installazione di pacchetti, ecc.
- **Network Config**: configurazione di rete statica (formato Netplan)

Esempio di Cloud Config minimo:

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

Una casella di spunta consente di **eliminare il disco di configurazione Cloud Init** dopo il primo avvio (consigliato per la sicurezza).

### Passo 7 — Dischi

![Passo 7: Dischi](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Configura il disco o i dischi della tua VM:

- **Disco di sistema** : creato automaticamente (`system-disk-1`), dimensione determinata dal sistema operativo
- **Dischi aggiuntivi** : aggiungi volumi supplementari con il nome, la capacità e il tipo di archiviazione desiderati

Sono disponibili due tipi di archiviazione:

| Tipo | IOPS |
|------|------|
| **Standard** | ~1 500 IOPS/TB |
| **Enterprise** | ~7 500 IOPS/TB |

### Passo 8 — Adattatori di Rete

![Étape 8 : Adaptateurs Réseaux](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Associa la tua VM a una rete dal menu a discesa. Sono disponibili due tipi di rete:

- **Backbone privato** (ex : PACKFR) : rete privata condivisa con isolamento logico
- **VPC** : rete privata completamente dedicata con segmentazione avanzata

### Passo 9 — Sommario

![Étape 9 : Sommaire](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verifica il riepilogo completo prima di avviare il provisioning:

- Informazioni generali (famiglia, AZ, modello, nome, backup)
- Configurazione (CPU, RAM)
- Configurazione Cloud-Init
- Dischi virtuali
- Rete

Fai clic su **Crea** per avviare il deployment. La VM viene provisionata in pochi minuti.

## Gestire le macchine virtuali

Dall'elenco, fare clic su una VM per aprire il pannello dei dettagli. Sono disponibili quattro schede:

### Scheda Informazioni

![Dettaglio VM - Informazioni](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

Visualizza e modifica le impostazioni della tua VM :
- Nome, UUID, zona di disponibilità
- Famiglia di istanza, modello OS
- CPU, RAM (modificabili con VM spenta)
- Politica di backup

Le icone di azione consentono di **avviare**, **arrestare**, **riavviare** o **aprire la console** della VM.

### Scheda Dischi

![Détail VM - Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Visualizza i dischi allegati e aggiungi volumi aggiuntivi tramite il pulsante **+ Aggiungi un disco**.

### Scheda Adattatori di Rete

![Dettaglio VM - Rete](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

Visualizza le interfacce di rete della VM (nome della rete, indirizzo MAC, indirizzo IPv4/IPv6).

### Scheda Snapshots

![Dettaglio VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Crea e gestisci gli snapshot della tua VM tramite il pulsante **+ Crea uno snapshot**.

## Automazione e Infrastructure as Code

Il servizio VM Instances è completamente automatizzabile :

### Tramite l'API REST

L'API REST Cloud Temple consente il controllo programmatico completo del ciclo di vita delle macchine virtuali.

Riferimento API: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Tramite Terraform

Il provider Terraform Cloud Temple consente di gestire le vostre VM Instances in Infrastructure as Code.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Consultate la [documentation Terraform](/terraform) per l'installazione e la configurazione del provider.

## Risorse utili

- [Documentation publique Cloud Temple](https://docs.cloud-temple.com/home)
- [Référence API](https://shiva.cloud-temple.com/api/)
- [Documentation Terraform](/terraform)
- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)