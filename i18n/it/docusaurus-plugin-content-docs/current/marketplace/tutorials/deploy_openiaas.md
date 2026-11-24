---
title: Distribuire un'immagine su OpenIaaS
---
import marketplaceOpeniaasDeployment from '@site/docs/marketplace/images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '@site/docs/marketplace/images/marketplace_openiaas_config.png'

Questo tutorial vi guida nella distribuzione di un'immagine di macchina virtuale dalla Marketplace Cloud Temple al vostro ambiente OpenIaaS.

## Prerequisiti

- Disporre di un ambiente OpenIaaS configurato
- Avere i permessi di creazione di macchine virtuali
- L'immagine deve avere **OpenIaaS** tra le sue destinazioni compatibili

## Fasi di distribuzione

### 1. Selezione e distribuzione

Dalla pagina di dettaglio di una soluzione compatibile con OpenIaaS, selezionate il vostro ambiente di destinazione e fate clic su **Distribuisci** :
<img src={marketplaceOpeniaasDeployment} />

### 2. Configurazione della macchina virtuale

Configurate i parametri di base della vostra macchina virtuale :

- **Nome** della VM
- **Risorse** (CPU, RAM)
- **Archiviazione**
- **Rete**

<img src={marketplaceOpeniaasConfig} />

La distribuzione viene generalmente completata in meno di 10 minuti a seconda della dimensione dell'immagine.

## Accesso alternativo

È inoltre possibile accedere alle immagini Marketplace direttamente dalla pagina **Macchine Virtuali** del vostro ambiente OpenIaaS :

1. Accedete a **Macchine Virtuali** > **Crea una VM**
2. Selezionate **Immagini Marketplace** tra le opzioni di origine
3. Scegliete la vostra soluzione dal catalogo integrato

## Monitoraggio della distribuzione

Una volta avviata la distribuzione :

- Seguite l'avanzamento dalla console OpenIaaS
- La VM apparirà nella vostra lista di macchine virtuali

Se l'immagine fornisce credenziali predefinite, sostituite la password al primo accesso.
