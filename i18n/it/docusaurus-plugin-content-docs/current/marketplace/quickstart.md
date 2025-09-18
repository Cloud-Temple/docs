---
title: Guida introduttiva
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# Avvio rapido per Cloud Temple Marketplace

Questa pagina ti guida attraverso i passaggi iniziali per utilizzare il **Cloud Temple Marketplace** dalla console. Segui queste istruzioni per scoprire le soluzioni disponibili e distribuirle rapidamente.

---

## Prerequisiti

Prima di iniziare, assicurati dei seguenti punti:

1. **Abbonamento attivo**: Per abilitare le distribuzioni, la tua organizzazione deve aver sottoscritto almeno un servizio Cloud Temple (IaaS OpenSource o IaaS VMware). Per contattare i nostri partner, non hai bisogno di un abbonamento specifico.
2. **Permessi utente**: Il tuo account utente deve avere i diritti necessari per accedere alla console e i permessi di scrittura sugli ambienti target quando vuoi distribuire risorse lì.
3. **Ambiente target**: Avere un tenant configurato per la distribuzione delle soluzioni.

---

## Accesso al Marketplace

### 1. Accesso dalla console Shiva

Una volta connesso alla console Cloud Temple, puoi accedere al Marketplace in diversi modi:

- **Menu principale**: Un menu **Marketplace** è disponibile nella navigazione principale
- **Pagine macchine virtuali**: Il Marketplace è anche accessibile dalle pagine di creazione macchine virtuali negli ambienti OpenIaaS e VMware

### 2. Pagina Marketplace

La pagina Marketplace presenta un catalogo di soluzioni disponibili. Ogni soluzione mostra:

- **Nome e logo** della soluzione
- **Descrizione breve**
- **Editore/Partner**
- **Tipo di soluzione** (VM Image, Soluzione SaaS, ecc.)

<img src={marketplaceCatalog} />

---

## Consultazione dettagli soluzione

### Accesso alle informazioni dettagliate

Cliccando su una soluzione, accedi a una pagina di dettagli che include:

- **Descrizione completa** della soluzione
- **Specifiche tecniche** (se applicabile)
- **Prerequisiti** di distribuzione
- **Documentazione** fornita dall'editore
- **Opzioni di distribuzione** disponibili

<img src={marketplaceSolutionDetails} />

---

## Azioni disponibili

A seconda del tipo di soluzione, sono possibili diverse azioni:

### Distribuzione di immagini macchine virtuali

Per soluzioni compatibili con i tuoi ambienti OpenIaaS o VMware, puoi distribuire direttamente dal Marketplace.

**Nota importante:** La distribuzione diretta è disponibile solo per immagini che hanno il tuo ambiente nei loro target compatibili.

**Guide dettagliate:**
- [Come distribuire un'immagine su OpenIaaS?](tutorials/deploy_openiaas)
- [Come distribuire un'immagine su VMware?](tutorials/deploy_vmware)

### Contatto partner

Per soluzioni che richiedono connessione, puoi contattare direttamente l'editore partner.

**Guida dettagliata:**
- [Come contattare un partner?](tutorials/contact_partner)

---
