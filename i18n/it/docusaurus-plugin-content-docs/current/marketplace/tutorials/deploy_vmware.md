---
title: Distribuire un'immagine su VMware
---
import marketplaceVmwareDeployment from '@site/docs/marketplace/images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '@site/docs/marketplace/images/marketplace_vmware_config.png'

Questo tutorial ti guida nel distribuire un'immagine di macchina virtuale dalla Marketplace Cloud Temple al tuo ambiente VMware.

## Prerequisiti

- Disporre di un ambiente VMware configurato
- Avere i permessi per la creazione di macchine virtuali
- L'immagine deve avere **VMware** nei target compatibili

## Fasi di distribuzione

### 1. Selezione e distribuzione

Dalla pagina dei dettagli di una soluzione compatibile con VMware, seleziona il tuo ambiente di destinazione e fai clic su **Distribuisci** :
<img src={marketplaceVmwareDeployment} />

### 2. Configurazione della macchina virtuale

Configura i parametri di base della tua macchina virtuale :

- **Nome** della VM
- **Risorse** (CPU, RAM)
- **Archiviazione**
- **Rete**

<img src={marketplaceVmwareConfig} />

Il deployment avviene generalmente in meno di 10 minuti in base alla dimensione dell'immagine.

## Accesso alternativo

È inoltre possibile accedere direttamente ai template del Marketplace dall'interfaccia VMware:

1. Accedi a **vSphere** > **Distribuisci una VM**
2. Seleziona **Template Marketplace** come origine
3. Esplora le immagini disponibili nel catalogo integrato

## Monitoraggio del deployment

Una volta avviato il deployment:

- Monitora l'avanzamento dalla console VMware
- La VM apparirà nel tuo inventario vSphere