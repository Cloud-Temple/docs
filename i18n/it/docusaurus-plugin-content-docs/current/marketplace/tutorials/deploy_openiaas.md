---
title: Distribuire un'immagine su OpenIaaS
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

Questo tutorial ti guida per distribuire un'immagine di macchina virtuale dal Cloud Temple Marketplace al tuo ambiente OpenIaaS.

## Prerequisiti

- Avere un ambiente OpenIaaS configurato
- Avere permessi di creazione macchine virtuali
- L'immagine deve avere **OpenIaaS** nei suoi target compatibili

## Passaggi di distribuzione

### 1. Selezione e distribuzione

Dalla pagina di dettagli di una soluzione compatibile OpenIaaS, seleziona il tuo ambiente target e clicca **Distribuisci**:
<img src={marketplaceOpeniaasDeployment} />

### 2. Configurazione della macchina virtuale

Configura i parametri base della tua macchina virtuale:
- **Nome** della VM
- **Risorse** (CPU, RAM)
- **Storage**
- **Rete**

<img src={marketplaceOpeniaasConfig} />

La distribuzione richiede normalmente meno di 10 minuti a seconda della dimensione dell'immagine.

## Accesso alternativo

Puoi anche accedere alle immagini Marketplace direttamente dalla pagina **Macchine Virtuali** del tuo ambiente OpenIaaS:

1. Vai a **Macchine Virtuali** > **Crea una VM**
2. Seleziona **Immagini Marketplace** nelle opzioni sorgente
3. Scegli la tua soluzione dal catalogo integrato

## Monitoraggio della distribuzione

Una volta lanciata la distribuzione:
- Segui il progresso dalla console OpenIaaS
- La VM apparirà nella tua lista di macchine virtuali
- Connettiti una volta completata la distribuzione
