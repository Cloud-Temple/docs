---
title: Guida introduttiva alla Marketplace
---
import marketplaceCatalog from '@site/docs/marketplace/images/marketplace_catalog.png'
import marketplaceSolutionDetails from '@site/docs/marketplace/images/marketplace_solution_details.png'

# Guida introduttiva alla Marketplace

Questa pagina vi guida attraverso i passaggi iniziali per utilizzare la **Marketplace Cloud Temple** dalla console. Seguite queste istruzioni per scoprire le soluzioni disponibili e deployarle rapidamente.

---

## Prerequisiti

Prima di iniziare, assicuratevi dei seguenti punti:

1. **Abbonamento attivo**: Per consentire i deployment, la vostra organizzazione deve aver sottoscritto almeno un servizio Cloud Temple (OpenIaaS, VMware o VM Instances). Nel quadro del contatto con i nostri partner non è necessario un abbonamento specifico.
2. **Permessi utente**: Il vostro account utente deve disporre dei diritti necessari per accedere alla console e dei diritti di scrittura sugli ambienti target quando si desidera deployare risorse.
3. **Ambiente target**: Disporre di un tenant configurato per il deployment delle soluzioni.

---

## Accesso alla Marketplace

### 1. Accesso dalla Console

Una volta connessi alla console Cloud Temple, è possibile accedere alla Marketplace in diversi modi:

- **Menu principale**: Un menu **Marketplace** è disponibile nella navigazione principale
- **Pagine macchine virtuali**: La Marketplace è inoltre accessibile dalle pagine di creazione di macchine virtuali negli ambienti OpenIaaS, VMware e VM Instances

### 2. Pagina Marketplace

La pagina Marketplace presenta un catalogo delle soluzioni disponibili. Ogni soluzione mostra:

- **Nome e logo** della soluzione
- **Breve descrizione**
- **Editore/Partner**
- **Tipo di soluzione** (VM Image, Solution SaaS, ecc.)

<img src={marketplaceCatalog} />

---

## Consultazione dei dettagli di una soluzione

### Accesso alle informazioni dettagliate

Cliccando su una soluzione, si accede a una pagina di dettagli che comprende:

- **Descrizione completa** della soluzione
- **Specifiche tecniche** (se applicabile)
- **Prerequisiti** di deployment
- **Documentazione** fornita dall'editore
- **Opzioni di deployment** disponibili

<img src={marketplaceSolutionDetails} />

---

## Azioni disponibili

A seconda del tipo di soluzione, sono possibili diverse azioni:

### Deployment di immagini di macchine virtuali

Per le soluzioni compatibili con i vostri ambienti OpenIaaS, VMware o VM Instances, è possibile deployare direttamente dalla Marketplace.

**Nota importante:** Il deployment diretto è disponibile solo per le immagini che hanno il vostro ambiente tra i target compatibili.

**Guide dettagliate:**

- [Come deployare un'immagine su OpenIaaS?](tutorials/deploy_openiaas.md)
- [Come deployare un'immagine su VMware?](tutorials/deploy_vmware.md)
- [Come deployare un'immagine su VM Instance?](tutorials/deploy_vminstance.md)

### Contatto con i partner

Per le soluzioni che richiedono una messa in relazione, è possibile contattare direttamente il partner editore.

**Guida dettagliata:**

- [Come contattare un partner?](tutorials/contact_partner)

---
