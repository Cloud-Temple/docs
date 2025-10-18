---
title: Distribuire un'immagine su OpenIaaS
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

Questo tutorial ti guida nel distribuire un'immagine di macchina virtuale dalla Marketplace Cloud Temple nel tuo ambiente OpenIaaS.

## Prerequisiti

- Disporre di un ambiente OpenIaaS configurato
- Avere i permessi per la creazione di macchine virtuali
- L'immagine deve avere **OpenIaaS** tra le destinazioni compatibili

## Passi di distribuzione

### 1. Selezione e distribuzione

Dalla pagina di dettaglio di una soluzione compatibile con OpenIaaS, seleziona l'ambiente di destinazione e fai clic su **Distribuisci**:
<img src={marketplaceOpeniaasDeployment} />

### 2. Configurazione della macchina virtuale

Configurate i parametri di base della vostra macchina virtuale:
- **Nome** della VM
- **Risorse** (CPU, RAM)
- **Archiviazione**
- **Rete**

<img src={marketplaceOpeniaasConfig} />

Il provisioning viene solitamente completato in meno di 10 minuti, in base alle dimensioni dell'immagine.

## Accesso alternativo

È inoltre possibile accedere direttamente alle immagini Marketplace dalla pagina **Macchine Virtuali** del proprio ambiente OpenIaaS:

1. Accedi a **Macchine Virtuali** > **Crea una VM**
2. Seleziona **Immagini Marketplace** tra le opzioni di origine
3. Scegli la tua soluzione nel catalogo integrato

## Monitoraggio del deployment

Dopo aver avviato il deployment:
- Segui l'avanzamento dalla console OpenIaaS
- La VM apparirà nella tua lista delle macchine virtuali