---
title: Distribuire un'immagine su VMware
---
import marketplaceVmwareDeployment from '../images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '../images/marketplace_vmware_config.png'

Questo tutorial ti guida nel distribuire un'immagine di macchina virtuale dalla Marketplace Cloud Temple nel tuo ambiente VMware.

## Prerequisiti

- Disporre di un ambiente VMware configurato
- Avere i permessi per la creazione di macchine virtuali
- L'immagine deve avere **VMware** tra i target compatibili

## Passi di distribuzione

### 1. Selezione e distribuzione

Dalla pagina di dettaglio di una soluzione compatibile con VMware, seleziona l'ambiente di destinazione e fai clic su **Distribuisci**:
<img src={marketplaceVmwareDeployment} />

### 2. Configurazione della macchina virtuale

Configurate i parametri di base della vostra macchina virtuale:
- **Nome** della VM
- **Risorse** (CPU, RAM)
- **Archiviazione**
- **Rete**

<img src={marketplaceVmwareConfig} />

Il provisioning viene solitamente completato in meno di 10 minuti, in base alle dimensioni dell'immagine.

## Accesso alternativo

È inoltre possibile accedere ai template Marketplace direttamente dall'interfaccia VMware:

1. Accedi a **vSphere** > **Distribuisci una VM**
2. Seleziona **Template Marketplace** come origine
3. Esplora le immagini disponibili nel catalogo integrato

## Deployment tracking

Once the deployment is started:
- Monitor the progress from the VMware console
- The VM will appear in your vSphere inventory