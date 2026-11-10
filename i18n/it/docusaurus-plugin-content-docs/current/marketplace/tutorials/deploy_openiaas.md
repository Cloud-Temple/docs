---
title: Distribuire un'immagine su OpenIaaS
---
import marketplaceOpeniaasDeployment from '@site/docs/marketplace/images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '@site/docs/marketplace/images/marketplace_openiaas_config.png'

Questo tutorial vi guida per distribuire un'immagine di macchina virtuale dal Marketplace Cloud Temple al vostro ambiente OpenIaaS.

## Prerequisiti

- Disporre di un ambiente OpenIaaS configurato
- Avere i permessi per la creazione di macchine virtuali
- L'immagine deve avere **OpenIaaS** tra i suoi target compatibili

## Fasi di distribuzione

### 1. Selezione e distribuzione

Dalla pagina di dettaglio di una soluzione compatibile con OpenIaaS, selezionate il vostro ambiente di destinazione e fate clic su **Distribuisci** :
<img src={marketplaceOpeniaasDeployment} />

### 2. Configurazione della macchina virtuale

Configurate i parametri di base della vostra macchina virtuale:

- **Nome** della VM
- **Risorse** (CPU, RAM)
- **Archiviazione**
- **Rete**

<img src={marketplaceOpeniaasConfig} />

Il deployment avviene generalmente in meno di 10 minuti in base alla dimensione dell'immagine.

## Accesso alternativo

È inoltre possibile accedere alle immagini del Marketplace direttamente dalla pagina **Macchine Virtuali** dell'ambiente OpenIaaS:

1. Accedete a **Macchine Virtuali** > **Crea una VM**
2. Selezionate **Immagini Marketplace** nelle opzioni di origine
3. Scegliete la vostra soluzione nel catalogo integrato

## Monitoraggio della distribuzione

Una volta avviata la distribuzione :

- Monitorate i progressi dalla console OpenIaaS
- La VM apparirà nell'elenco delle macchine virtuali