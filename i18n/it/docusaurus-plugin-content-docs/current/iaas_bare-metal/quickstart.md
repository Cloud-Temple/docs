---
title: Guida rapida
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# Guida rapida per l'offerta Bare Metal

Questa pagina vi guida attraverso i passaggi iniziali per utilizzare l'offerta **Bare Metal** dalla console Cloud Temple. Seguite queste istruzioni per scoprire i menu e le funzionalità disponibili.

---

## Prerequisiti

Prima di iniziare, assicuratevi dei seguenti punti:

1. **Abbonamento attivo**: La vostra organizzazione deve aver sottoscritto l'offerta Bare Metal.
2. **Permessi utente**: Il vostro account utente deve disporre dei diritti necessari per accedere e gestire le risorse Bare Metal.

---

## Accesso all'interfaccia Bare Metal

Una volta che l'abbonamento è attivato e i permessi configurati, un nuovo menu intitolato **Bare Metal** appare nella console Cloud Temple. Questo menu contiene due sottomenu principali: **Bare Metal** e **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Sottomenu **Bare Metal**

Il sottomenu **Bare Metal** presenta una tabella che elenca tutte le istanze Bare Metal disponibili. Questa tabella include le informazioni principali per ogni istanza:

- **Nome del Bare Metal**
- **Stato**
- **Configurazione hardware**
- **Indirizzo IP**

<img src={shivaBareMetalList} />

#### Funzionalità principali

- **Pulsante Azione**: Permette di accedere direttamente alla console di amministrazione del Bare Metal.
- **Nome cliccabile**: Cliccando sul nome di un'istanza Bare Metal, viene visualizzata una nuova pagina con i **dettagli completi** dell'istanza:
  - Informazioni sull'hardware (RAM, CPU, GPU, ecc.).
  - Configurazione di rete (indirizzi IP associati).
  - Informazioni di connettività per la gestione.

<img src={shivaBareMetalDetails} />

---

### 2. Sottomenu **Volumes**

Il sottomenu **Volumes** mostra una tabella che elenca tutti i volumi di storage associati al vostro abbonamento Bare Metal. Per ogni volume, sono disponibili le seguenti informazioni:

- **Nome del volume**
- **Capacità**
- **Classe di prestazioni** (IOPS per TB)
- **Stato** (Disponibile, In fase di distribuzione, ecc.)

<img src={shivaBareMetalStoragelist} />

#### Funzionalità principali

- Gestione dei volumi: Da questa tabella, potete mappare i volumi alle vostre istanze Bare Metal.

---
