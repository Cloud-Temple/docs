---
title: Guida di avvio
---
import shivaBareMetalMenu from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_menu.png'
import shivaBareMetalList from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_storagelist.png'

# Guida rapida per l'offerta Bare Metal

Questa pagina illustra i passaggi iniziali per utilizzare l'offerta **Bare Metal** dalla console Cloud Temple. Segui queste istruzioni per scoprire i menu e le funzionalità disponibili.

---

## Prerequisiti

Prima di iniziare, verifica i seguenti punti:

1. **Sottoscrizione attiva** : La tua organizzazione deve aver sottoscritto l'offerta Bare Metal.
2. **Permessi utente** : Il tuo account utente deve disporre dei permessi necessari per accedere e gestire le risorse Bare Metal.

---

## Accesso all'interfaccia Bare Metal

Una volta attivata la sottoscrizione e configurate le autorizzazioni, un nuovo menu denominato **Bare Metal** appare nella console Cloud Temple. Questo menu contiene due sottomenu principali: **Bare Metal** e **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Sottomenu **Bare Metal**

Il sottomenu **Bare Metal** visualizza una tabella che elenca tutte le istanze Bare Metal disponibili. Questa tabella include le informazioni principali per ogni istanza:

- **Nome del Bare Metal**
- **Stato**
- **Configurazione hardware**
- **Indirizzo IP**

<img src={shivaBareMetalList} />

#### Funzionalità principali

- **Pulsante Azione** : Consente di accedere direttamente alla console di amministrazione del Bare Metal.
- **Nome cliccabile** : Facendo clic sul nome di un'istanza Bare Metal, viene visualizzata una nuova pagina con i **dettagli completi** dell'istanza :
  - Informazioni sull'hardware (RAM, CPU, GPU, ecc.).
  - Configurazione di rete (indirizzi IP associati).
  - Informazioni di connettività per la gestione.

<img src={shivaBareMetalDetails} />

---

### 2. Sottomenu **Volumes**

Il sottomenu **Volumes** visualizza una tabella che elenca tutti i volumi di archiviazione associati alla tua sottoscrizione Bare Metal. Per ogni volume, sono disponibili le seguenti informazioni:

- **Nome del volume**
- **Capacità**
- **Classe di prestazioni** (IOPS per TB)
- **Stato** (Disponibile, In fase di distribuzione, ecc.)

<img src={shivaBareMetalStoragelist} />

:::info[Volume BFS (Boot from SAN)]
Il **Volume 1** è il volume **BFS (Boot from SAN)** e deve essere utilizzato per installare il sistema operativo.

**Importante:** Questo volume non è condivisibile con gli altri Bare Metal della stessa zona di disponibilità (AZ).
:::

:::tip[Best practice]
Si consiglia di installare l'OS sul volume **BFS** e di archiviare i dati su un volume **LUN** aggiuntivo. Questa separazione facilita la manutenzione, i backup e la reinstallazione del sistema, se necessario.
:::

#### Funzionalità principali

- **Gestione dei volumi** : Da questa dashboard, puoi mappare i volumi alle tue istanze Bare Metal.

---