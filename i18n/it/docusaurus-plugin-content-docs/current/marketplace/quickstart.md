---
title: Guida introduttiva
---
import marketplaceCatalog from '@site/docs/marketplace/images/marketplace_catalog.png'
import marketplaceSolutionDetails from '@site/docs/marketplace/images/marketplace_solution_details.png'

# Guida rapida per il Marketplace Cloud Temple

Questa pagina guida attraverso i passaggi iniziali per utilizzare il **Marketplace Cloud Temple** dalla console. Segui queste istruzioni per scoprire le soluzioni disponibili e distribuirle rapidamente.

---

## Prerequisi

Prima di iniziare, verifica i seguenti punti:

1. **Sottoscrizione attiva** : Per consentire i deployment, la tua organizzazione deve aver sottoscritto almeno un servizio Cloud Temple (IaaS OpenSource ou IaaS VMware). Nel caso di contatto con i nostri partner, non è necessaria una sottoscrizione specifica.
2. **Autorizzazioni utente** : L'account utente deve disporre dei permessi necessari per accedere alla console e dei diritti di scrittura sugli ambienti target quando si desidera distribuire risorse.
3. **Ambiente target** : Avere un tenant configurato per il deployment delle soluzioni.

---

## Accesso al Marketplace

### 1. Accesso dalla Console

Una volta connessi alla console Cloud Temple, è possibile accedere al Marketplace in diversi modi :

- **Menu principale** : Un menu **Marketplace** è disponibile nella navigazione principale
- **Pagine macchine virtuali** : Il Marketplace è inoltre accessibile dalle pagine di creazione delle macchine virtuali negli ambienti OpenIaaS e VMware

### 2. Pagina Marketplace

La pagina Marketplace presenta un catalogo delle soluzioni disponibili. Ogni soluzione mostra:

- **Nome e logo** della soluzione
- **Descrizione breve**
- **Editore/Partner**
- **Tipo di soluzione** (Immagine VM, Soluzione SaaS, ecc.)

<img src={marketplaceCatalog} />

---

## Visualizzazione dei dettagli di una soluzione

### Accesso alle informazioni dettagliate

Cliccando su una soluzione, si accede a una pagina di dettaglio che include:

- **Descrizione completa** della soluzione
- **Specifiche tecniche** (se applicabile)
- **Requisiti** di deployment
- **Documentazione** fornita dall'editore
- **Opzioni di deployment** disponibili

<img src={marketplaceSolutionDetails} />

---

## Azioni disponibili

A seconda del tipo di soluzione, sono possibili diverse azioni:

### Distribuzione di immagini di macchine virtuali

Per le soluzioni compatibili con i tuoi ambienti OpenIaaS o VMware, puoi distribuire direttamente dal Marketplace.

**Nota importante:** La distribuzione diretta è disponibile solo per le immagini che includono il tuo ambiente tra i target compatibili.

**Guide dettagliate:**

- [Comment déployer une image sur OpenIaaS ?](tutorials/deploy_openiaas)
- [Comment déployer une image sur VMware ?](tutorials/deploy_vmware)

### Contatto con i partner

Per le soluzioni che richiedono un'intermediazione, puoi contattare direttamente il partner editore.

**Guida dettagliata :**

- [Come contattare un partner?](tutorials/contact_partner)

---