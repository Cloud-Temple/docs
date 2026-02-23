---
title: Guida di avvio
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# Guida rapida per l'offerta Bare Metal

Questa pagina ti guida attraverso i passaggi iniziali per utilizzare l'offerta **Bare Metal** dalla console Cloud Temple. Segui queste istruzioni per esplorare i menu e le funzionalità disponibili.

---

## Prerequisiti

Prima di iniziare, assicurati dei seguenti punti:

1. **Sottoscrizione attivata**: La tua organizzazione deve aver sottoscritto l'offerta Bare Metal.
2. **Permessi utente**: Il tuo account utente deve disporre dei diritti necessari per accedere e gestire le risorse Bare Metal.

## Accesso all'interfaccia Bare Metal

Dopo l'attivazione della sottoscrizione e la configurazione dei permessi, un nuovo menu denominato **Bare Metal** appare nella console Cloud Temple. Questo menu contiene due sottomenu principali: **Bare Metal** e **Volumes**.

<img src={shivaBareMetalMenu} />

### 1. Sottomenu **Bare Metal**

Il sottomenu **Bare Metal** presenta un tabella che elenca tutte le istanze Bare Metal disponibili. Tale tabella include le informazioni principali per ciascuna istanza:

- **Nome del Bare Metal**
- **Stato**
- **Configurazione hardware**
- **Indirizzo IP**

<img src={shivaBareMetalList} />

#### Funzionalità principali

- **Pulsante Azione**: consente di accedere direttamente alla console di amministrazione del Bare Metal.
- **Nome cliccabile**: facendo clic sul nome di un'istanza Bare Metal, viene aperta una nuova pagina con i **dettagli completi** dell'istanza:
  - Informazioni sul hardware (RAM, CPU, GPU, ecc.).
  - Configurazione di rete (indirizzi IP associati).
  - Informazioni di connettività per la gestione.

<img src={shivaBareMetalDetails} />

### 2. Sottomenu **Volumi**

Il sottomenu **Volumi** visualizza una tabella che elenca tutti i volumi di archiviazione associati alla tua sottoscrizione Bare Metal. Per ciascun volume sono disponibili le seguenti informazioni:

- **Nome del volume**
- **Capacità**
- **Classe di prestazioni** (IOPS per To)
- **Stato** (Disponibile, In fase di distribuzione, ecc.)

<img src={shivaBareMetalStoragelist} />

:::info Volume BFS (Avvio da SAN)
Il **Volume 1** è il volume **BFS (Avvio da SAN)** e deve essere utilizzato per installare il sistema operativo.

**Importante:** Questo volume non può essere condiviso con altri server Bare Metal della stessa zona di disponibilità (AZ).
:::

:::tip Buona pratica
Preferisci installare il sistema operativo sul volume **BFS**, e memorizza i tuoi dati su un volume **LUN** aggiuntivo. Questa separazione semplifica la manutenzione, i backup e la reinstallazione del sistema, se necessario.
:::

#### Funzionalità principali

- **Gestione dei volumi**: Da questo pannello è possibile mappare i volumi alle proprie istanze Bare Metal.