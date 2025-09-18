---
title: Distribuire un'immagine su VMware
---
import marketplaceVmwareDeployment from '../images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '../images/marketplace_vmware_config.png'

Questo tutorial ti guida per distribuire un'immagine di macchina virtuale dal Cloud Temple Marketplace al tuo ambiente VMware.

## Prerequisiti

- Avere un ambiente VMware configurato
- Avere permessi di creazione macchine virtuali
- L'immagine deve avere **VMware** nei suoi target compatibili

## Passaggi di distribuzione

### 1. Selezione e distribuzione

Dalla pagina di dettagli di una soluzione compatibile VMware, seleziona il tuo ambiente target e clicca **Distribuisci**:
<img src={marketplaceVmwareDeployment} />

### 2. Configurazione della macchina virtuale

Configura i parametri base della tua macchina virtuale:
- **Nome** della VM
- **Risorse** (CPU, RAM)
- **Storage**
- **Rete**

<img src={marketplaceVmwareConfig} />

La distribuzione richiede normalmente meno di 10 minuti a seconda della dimensione dell'immagine.

## Accesso alternativo

Puoi anche accedere ai template Marketplace direttamente dall'interfaccia VMware:

1. Vai a **vSphere** > **Distribuisci una VM**
2. Seleziona **Template Marketplace** come sorgente
3. Naviga tra le immagini disponibili nel catalogo integrato

## Monitoraggio della distribuzione

Una volta lanciata la distribuzione:
- Segui il progresso dalla console VMware
- La VM apparirà nel tuo inventario vSphere
- Connettiti una volta completata la distribuzione
