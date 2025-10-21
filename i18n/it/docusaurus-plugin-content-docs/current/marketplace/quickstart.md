---
title: Guida di avvio
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# Guida rapida per la Marketplace Cloud Temple

Questa pagina ti guida attraverso i passaggi iniziali per utilizzare la **Marketplace Cloud Temple** dalla console. Segui queste istruzioni per esplorare le soluzioni disponibili e distribuirle rapidamente.

## Prerequisiti

Prima di iniziare, assicurati dei seguenti punti:

1. **Sottoscrizione attivata**: Per consentire i deployment, la tua organizzazione deve essere sottoscritta a almeno un servizio Cloud Temple (IaaS OpenSource o IaaS VMware). Nel contesto del contatto con i nostri partner, non è necessaria una sottoscrizione specifica.
2. **Permessi utente**: Il tuo account utente deve disporre dei diritti necessari per accedere alla console e dei diritti di scrittura sugli ambienti di destinazione quando desideri distribuire risorse.
3. **Ambiente di destinazione**: Disporre di un tenant configurato per il deployment delle soluzioni.

## Accesso alla Marketplace

### 1. Accesso dalla console Shiva

Dopo esserti connesso alla console Cloud Temple, puoi accedere alla Marketplace in diversi modi:

- **Menu principale**: Un menu **Marketplace** è disponibile nella navigazione principale
- **Pagine delle macchine virtuali**: La Marketplace è inoltre accessibile dalle pagine di creazione di macchine virtuali negli ambienti OpenIaaS e VMware

### 2. Pagina Marketplace

La pagina Marketplace presenta un catalogo delle soluzioni disponibili. Ogni soluzione mostra:

- **Nome e logo** della soluzione  
- **Descrizione breve**  
- **Editore/Partner**  
- **Tipo di soluzione** (Immagine VM, Soluzione SaaS, ecc.)

<img src={marketplaceCatalog} />

## Viewing solution details

### Accesso alle informazioni dettagliate

Faccendo clic su una soluzione, si accede a una pagina di dettagli che include:

- **Descrizione completa** della soluzione  
- **Specifiche tecniche** (se applicabile)  
- **Requisiti** per il deployment  
- **Documentazione** fornita dall'editore  
- **Opzioni di deployment** disponibili  

<img src={marketplaceSolutionDetails} />

## Azioni disponibili

A seconda del tipo di soluzione, sono disponibili diverse azioni:

### Deployment di immagini di macchine virtuali

Per le soluzioni compatibili con i tuoi ambienti OpenIaaS o VMware, puoi effettuare il deployment direttamente dalla Marketplace.

**Nota importante:** Il deployment diretto è disponibile solo per le immagini che includono il tuo ambiente tra i target compatibili.

**Guide dettagliate:**
- [Come distribuire un'immagine su OpenIaaS?](tutorials/deploy_openiaas)
- [Come distribuire un'immagine su VMware?](tutorials/deploy_vmware)

### Contatto con i partner

Per le soluzioni che richiedono un collegamento diretto, è possibile contattare direttamente il partner editore.

**Guida dettagliata:**
- [Come contattare un partner?](tutorials/contact_partner)