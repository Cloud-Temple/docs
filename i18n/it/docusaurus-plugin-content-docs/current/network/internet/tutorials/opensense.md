---
sidebar_position: 1
---

# Deployare un firewall open source OPNsense

## Prerequisiti

Prima di iniziare, è necessario disporre di un account Cloud Temple attivo e dei relativi diritti :

- aver sottoscritto l'offerta Cloud Temple ;
- disporre dei diritti sul modulo Compute.

Una volta riuniti questi elementi, il deployment richiede solo pochi minuti.

## Cos'è OPNsense

OPNsense è un firewall e router open source basato su FreeBSD. È un fork di pfSense nato nel 2014. I suoi punti di forza:

- un'interfaccia web chiara e moderna;
- aggiornamenti due volte a settimana;
- un'architettura modulare con un sistema di plugin;
- il supporto nativo di OpenVPN, WireGuard e IPsec.

Tutta l'amministrazione viene effettuata da un browser. Una volta configurata la rete, non è quindi più necessario un accesso alla console.

## Il principio di deployment

Si avviano due macchine virtuali :

- **il firewall** stesso, deployato dal template OPNsense ;
- **una VM di management** con interfaccia grafica, posizionata nella stessa rete dell'interfaccia LAN del firewall. È da questa VM che si effettua la configurazione iniziale del firewall.

Il firewall ha due interfacce : **LAN** (lato rete interna) e **WAN** (lato Internet).  
Configureremo l'interfaccia LAN per accedere all'interfaccia web del firewall al fine di poter successivamente effettuare la configurazione dell'accesso a Internet.

# Passo 1 — Recuperare i parametri di rete in Shiva

Nell'interfaccia shiva di cloud temple sarà necessario recuperare gli elementi seguenti per configurare la sessione BGP che dà accesso a internet

- **Prefisso pubblico** : il vostro blocco di IP pubbliche (scheda « IP pubbliche »)
- **Prefisso di interconnessione** : la sottorete point-to-point che porta la liaison BGP (scheda « IP d'interco »)
- **Indirizzo del gateway condiviso** (scheda « IP d'interco »)
- **AS locale** : il numero di AS della vostra organizzazione
- **AS partner** : il numero di AS di Cloud Temple
- **Keepalive timer** : l'intervallo che mantiene la sessione BGP attiva
- **Hold-time timer** : il ritardo prima che la sessione venga dichiarata morta
- **Indirizzi dei route server** : i server con cui si scambiano le rotte

Tenete questa lista a portata d'occhio, vi tornerà utile al passo WAN.

![Paramètres BGP dans Shiva](/img/screenshots/shiva.png)
![IP publiques](/img/screenshots/ip-publiques.png)
![IP d'interco](/img/screenshots/ip-dintercos.png)

# Passo 2 — Creare le due VM

Da **Shiva** :

1. creare il firewall a partire dal template OPNsense ;
2. creare la VM di management con interfaccia grafica, qui utilizziamo l'immagine Ubuntu 26.04 LTS disponibile sulla Marketplace.

L'interfaccia WAN del vostro firewall deve essere configurata nel vostro vlan Internet con un IP preso dal prefisso di interconnessione fornito da Shiva.

# Passo 3 — Configurare il LAN e accedere all'interfaccia web


Sull'interfaccia **LAN** del firewall, impostate un IP della vostra rete interna, con la sua maschera di sottorete e il suo gateway.

![Paramètres LAN](/img/screenshots/lan.png)

Posizionate quindi la VM di management nella stessa rete.  
Per la dimostrazione utilizziamo Ubuntu 22.04, con un IP dello stesso sottorete assegnato tramite Netplan.

Aprite un browser sulla VM di management e inserite l'IP LAN del firewall.  
  
Ora dovreste poter accedere all'interfaccia di amministrazione di Opensense.

![Login firewall](/img/screenshots/login-fw.png)

<div align="center">

**Credenziali predefinite**
Username : **root**
Password : **opnsense**

</div>

:::warning[Changez le mot de passe tout de suite]
Prima di procedere, sostituite la password predefinita `root`.
:::

# Passo 4 — Configurazione dell'interfaccia  WAN

Ora tutto avviene nell'interfaccia web.

## 4.1 — Il gateway

Innanzitutto, immettere il **gateway** WAN con l'indirizzo di gateway condiviso annotato al passaggio 1.

![Gateway WAN](/img/screenshots/wan-gw.png)

## 4.2 — L'interfaccia WAN

Configurare sull'interfaccia WAN un IP preso dal prefisso di interconnessione e associare l'interfaccia al gateway appena creato.

![Interfaccia WAN](/img/screenshots/ip-wan.png)

# Passo 5 — Avviare la sessione BGP

## 5.1 — Abilitare il routing

Vai in **Routing > General** e spunta **Enable**.

![Routing General](/img/screenshots/routing-general.png)
![Routing BGP](/img/screenshots/routing-bgp.png)

Inserisci quindi le informazioni di connessione verso i route server :

- le IP dei route server ;
- il numero AS del partner.

:::info[Perché il multi-hop ?]
Spunta la casella **multi-hop**. I route server sono a più di un hop, mentre una sessione eBGP ha un TTL di 1 per impostazione predefinita : senza multi-hop, i pacchetti non raggiungerebbero mai i server.
:::

![PEER1](/img/screenshots/peer1.png)
![PEER2](/img/screenshots/peer2.png)

## 5.2 — Route statiche verso i route server

In **Routing > Static**, aggiungete le route per raggiungere questi server (ciascuna in `/32`).

![Activer les routes statiques](/img/screenshots/routing-static-enable.png)
![Route RS1](/img/screenshots/routes-peer1.png)
![Route RS2](/img/screenshots/routes-peer2.png)

## 5.3 — Ridistribuzione delle rotte

Autorizzate la **ridistribuzione delle rotte statiche e connesse** per annunciare il vostro prefisso pubblico.

![Redistribution des routes statiques](/img/screenshots/redistribute-static.png)
![Redistribution des routes connectées](/img/screenshots/redistribute-connected.png)

## 5.4 — Verificare la sessione

Direzione **Routing > Diagnostic > BGP**.  
Se i parametri sono corretti, il **BGP State** mostra `established`.

![Peer 1 established](/img/screenshots/peer1-established.png)
![Peer 2 established](/img/screenshots/peer2-established.png)

# Passo 6 — Annunciare il prefisso pubblico

Sempre in **Routing > Static**, creare una route che punta alla **loopback** del firewall, ciò crea una route « blackhole ».

Questa route consente di annunciare il proprio prefisso pubblico ai route server.

![Prefisso pubblico / route blackhole](/img/screenshots/prefix-pub.png)

# Passo 7 — Configurare il NAT

Per concludere, alcune regole NAT da inserire manualmente.  
**L'ordine conta**: le regole « no NAT » devono precedere le regole di accesso a Internet, altrimenti il NAT viene applicato al traffico BGP e la sessione cade.

**Non applicare il NAT con i peer BGP** (questa in assoluto per prima) :

**Concedere l'accesso a Internet alla propria rete LAN** :

**Concedere l'accesso a Internet al firewall stesso**, per i suoi aggiornamenti :


![NAT Rules](/img/screenshots/NAT-rules.png)

Non resta che testare la connettività verso Internet dalla macchina di management :

![ping](/img/screenshots/pingvm.png)

# Conclusione

Il firewall OPNsense è stato deployato, le sessioni BGP sono stabilite e il vostro prefisso pubblico è annunciato.  


**Se necessario, la documentazione ufficiale di OPNsense.**


https://docs.opnsense.org/index.html