---
title: Deployare un'immagine su VMware
---
import marketplaceVmwareDeployment from '@site/docs/marketplace/images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '@site/docs/marketplace/images/marketplace_vmware_config.png'

Questo tutorial ti guida nel deployment di un'immagine di macchina virtuale dalla Marketplace Cloud Temple verso il tuo ambiente VMware.

## Prerequisiti

- Disporre di un ambiente VMware configurato
- Avere i permessi di creazione di macchine virtuali
- L'immagine deve avere **VMware** tra le sue destinazioni compatibili

## Fasi di deployment

### 1. Selezione e deployment

Dalla pagina di dettaglio di una soluzione compatibile con VMware, seleziona il tuo ambiente di destinazione e fai clic su **Deploy** :
<img src={marketplaceVmwareDeployment} />

### 2. Configurazione della macchina virtuale

Configura i parametri di base della tua macchina virtuale :

- **Nome** della VM
- **Risorse** (CPU, RAM)
- **Archiviazione**
- **Rete**

<img src={marketplaceVmwareConfig} />

Il deployment viene generalmente completato in meno di 10 minuti a seconda della dimensione dell'immagine.

## Accesso alternativo

È inoltre possibile accedere ai template Marketplace direttamente dall'interfaccia VMware :

1. Accedi a **vSphere** > **Deploy VM**
2. Seleziona **Template Marketplace** come origine
3. Sfoglia le immagini disponibili nel catalogo integrato

## Monitoraggio del deployment

Una volta avviato il deployment :

- Monitora l'avanzamento dalla console VMware
- La VM apparirà nel tuo inventario vSphere

Se l'immagine fornisce credenziali predefinite, sostituisci la password al primo accesso.
