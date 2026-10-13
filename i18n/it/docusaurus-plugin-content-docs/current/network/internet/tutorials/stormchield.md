---
title: Deployare un firewall Stormshield SNS EVA
sidebar_label: Deployare un firewall Stormshield SNS EVA
sidebar_position: 6
---

# Deployare un firewall Stormshield SNS EVA

## Prerequisiti

Prima di iniziare, è necessario disporre di un account Cloud Temple attivo e dei relativi permessi:

- aver sottoscritto l'offerta Cloud Temple;
- disporre dei permessi sul modulo Compute.

Una volta soddisfatti questi requisiti, il deployment richiede solo pochi minuti.

## Cos'è Stormshield SNS

Stormshield Network Security (SNS) è un firewall / UTM francese edito da Stormshield. La sua versione virtuale si chiama SNS EVA (Elastic Virtual Appliance). I suoi punti di forza:

- un'interfaccia web di amministrazione completa;
- un motore di filtraggio e NAT basato su regole ordinate;
- il motore di routing dinamico BIRD (BGP, OSPF, RIP) integrato;
- il supporto nativo di IPsec e SSL VPN.

Tutta l'amministrazione viene effettuata da un browser. Una volta configurata la rete, non è quindi più necessario un accesso console, salvo per alcune verifiche avanzate come lo stato delle sessioni BGP.

## Il principio di deployment

Si avviano due macchine virtuali :

- il firewall stesso, deployato dall'immagine SNS EVA ;
- una VM di management con interfaccia grafica, collocata nella stessa rete dell'interfaccia LAN del firewall. È da questa VM che si effettua la configurazione iniziale del firewall.

Il firewall ha due interfacce : LAN **(lato rete interna, denominata `in` su SNS)** e WAN **(lato Internet, denominata `out` su SNS).**
Configureremo l'interfaccia LAN per accedere all'interfaccia web del firewall al fine di poter successivamente effettuare la configurazione dell'accesso a Internet.

# Passo 1 — Recuperare i parametri di rete in Shiva

Nell'interfaccia Shiva di Cloud Temple sarà necessario recuperare i seguenti elementi per configurare la sessione BGP che fornisce l'accesso a Internet :

- **Prefisso pubblico** : il vostro blocco di IP pubbliche (scheda « IP publiques »)
- **Prefisso di interconnessione** : la sottorete point-to-point che porta il collegamento BGP (scheda « IP d'interco »)
- **Indirizzo del gateway condiviso** (scheda « IP d'interco »)
- **Local AS** : il numero AS della vostra organizzazione
- **AS partner** : il numero AS di Cloud Temple
- **Keepalive timer** : l'intervallo che mantiene la sessione BGP attiva
- **Hold-time timer** : il tempo prima che la sessione venga dichiarata morta
- **Indirizzi dei route server** : i server con cui si scambiano le rotte

Tenete questa lista a portata d'occhio, vi tornerà utile al passo WAN e nella configurazione BIRD.

![Parametri BGP in Shiva](/img/screenshots/shiva.png)

# Passo 2 — Deployare le due VM

Da **Shiva** :

1. deployare il firewall a partire dall'immagine SNS EVA dalla Marketplace ;
2. deployare la VM di management con interfaccia grafica (Ubuntu ad esempio).

L'interfaccia WAN del vostro firewall deve essere configurata nel vostro vLAN Internet con un IP preso dal prefisso di interconnessione fornito da Shiva.

# Passo 3 — Configurare il LAN e accedere all'interfaccia web

Sull'interfaccia LAN del firewall, impostate un IP della vostra rete interna con la relativa maschera di sottorete.
:::info
Su SNS ciò avviene al primo avvio tramite la console.
:::

![Interface LAN](/img/screenshots/storm-in.png)

Posizionate quindi la VM di management nella stessa rete.  
Per la dimostrazione utilizziamo un'immagine Ubuntu 26.04 LTS disponibile sulla Marketplace, con un IP dello stesso sottorete assegnato tramite Netplan.  
:::info
Il gateway predefinito di questa VM deve essere l'indirizzo LAN del firewall.
:::

Aprite un browser sulla VM di management e inserite l'indirizzo `https://IP-LAN-du-firewall/admin`.

Ora dovreste poter accedere all'interfaccia di amministrazione di SNS.

![Login firewall](/img/screenshots/storm-login.png)

<div align="center">

**Credenziali predefinite**
Username : **admin**
Password : **admin**

</div>

:::warning[Cambiate subito la password]
Prima di procedere, sostituite la password predefinita `admin`.
:::

# Passo 4 — Configurazione dell'interfaccia WAN

Ora tutto avviene nell'interfaccia web, sotto **Configurazione > Rete**.

:::info[Les adresses IP sont des objets]
Su SNS, non si inserisce un indirizzo IP direttamente nei campi delle route, delle regole di filtraggio o del NAT: è necessario prima dichiararlo come oggetto di rete in Configurazione > Oggetti > Oggetti di rete, poi selezionarlo.  
  
 Creare quindi man mano gli oggetti di cui si ha bisogno (gateway, route servers, prefisso pubblico, reti LAN e WAN).
:::

## 4.1 — L'interfaccia WAN

In **Rete > Interfacce**, configurate sull'interfaccia WAN (`out`) un IP preso dal prefisso di interconnessione.

![Interface WAN](/img/screenshots/storm-out.png)

## 4.2 — Il gateway

In **Rete > Routing**, definite il gateway predefinito con l'indirizzo di gateway condiviso annotato al passaggio 1.

![Passerelle WAN](/img/screenshots/storm-gw.png)

# Passo 5 — Creare la loopback per il prefisso pubblico

Il prefisso pubblico deve essere portato da un'interfaccia loopback sul firewall.

In **Rete > Interfacce virtuali**, scheda **Loopback**, aggiungete una loopback con il vostro IP pubblico in `/32`.

![Loopback](/img/screenshots/storm-loopback.png)

# Passo 6 — Avviare la sessione BGP

Su SNS, il BGP viene configurato nel motore BIRD, tramite **Configurazione > Rete > Routing dinamico**.

## 6.1 — Route statiche verso i route server

In **Rete > Routing > Route statiche**, aggiungere una route in `/32` verso ciascun route server, puntando al gateway condiviso.  

:::info
Queste route devono essere dichiarate qui e non in BIRD, per evitare che il traffico BGP venga bloccato dagli allarmi di usurpazione dell'indirizzo IP.
:::

![Route statiche verso i route server](/img/screenshots/storm-routes.png)

## 6.2 — Attivare il routing dinamico

In **Routing dinamico**, attivate il routing dinamico BIRD e selezionate la versione **BIRD v2**.

## 6.3 — Scrivere la configurazione BIRD

Nella scheda **BIRD V2**, inserisci la configurazione sostituendo i valori con i tuoi (annotati al passaggio 1). Si dichiara un blocco `protocol bgp` per route server.

![Configuration BIRD](/img/screenshots/storm-bird-bgp.png)


```
router id <ip-wan-firewall>;

# On n'annonce que le préfixe public
filter export_public {
    if net = <prefixe-public> then accept;
    else reject;
}

# Route blackhole pour annoncer le préfixe public
protocol static StaticRoutes {
    ipv4;
    route <prefixe-public> blackhole;
}

protocol kernel {
    persist;
    scan time 20;
    ipv4 {
        export all;
        preference 254;
    };
    learn;
}

protocol device {
    scan time 10;
}

# Session vers le route server 1
protocol bgp RS1 {
    description "Route server 1";
    local as <local-as>;
    neighbor <ip-route-server-1> as <as-partenaire>;
    multihop 5;
    hold time <hold-time>;
    keepalive time <keepalive>;
    source address <ip-wan-firewall>;
    ipv4 {
        import all;
        export filter export_public;
    };
}

# Session vers le route server 2
protocol bgp RS2 {
    description "Route server 2";
    local as <local-as>;
    neighbor <ip-route-server-2> as <as-partenaire>;
    multihop 5;
    hold time <hold-time>;
    keepalive time <keepalive>;
    source address <ip-wan-firewall>;
    ipv4 {
        import all;
        export filter export_public;
    };
}
```

Fai clic su **Verifica la configurazione** quindi **Applica**.

:::info[Perché il multi-hop?]
I route server sono a più di un hop, mentre una sessione eBGP ha un TTL di 1 per impostazione predefinita: senza `multihop`, i pacchetti non raggiungerebbero mai i server.
:::

## 6.4 — Vérifier la session

Dall'interfaccia web, aprite **Monitoring > Connexions**. Le due sessioni verso i route servers vi appaiono con protocollo `tcp`, servizio `bgp`, con traffico scambiato in entrambe le direzioni e una durata che aumenta: le sessioni sono stabilite.

![Sessioni BGP in Monitoring > Connexions](/img/screenshots/storm-gui-bgp.png)

La verifica può essere effettuata anche da console: `birdc` poi `show protocols`. Lo stato deve mostrare `Established` per RS1 e RS2.

![birdc show protocols](/img/screenshots/storm-birdc.png)

# Passo 7 — Configurare il filtraggio

Il filtraggio viene effettuato in Configuration > Policy di sicurezza > Filtraggio e NAT, scheda Filtraggio.

Creare le regole di sicurezza conformemente allo screenshot seguente.  
La policy viene valutata dall'alto verso il basso: le regole che autorizzano l'amministrazione del firewall e le sessioni BGP devono essere posizionate prima delle regole di accesso a Internet.  
  
Infine, la regola Block all deve imperativamente rimanere in ultima posizione per bloccare tutto il traffico non esplicitamente autorizzato.

:::info
Le regole che autorizzano le sessioni BGP verso i due route server sono indispensabili per il corretto stabilimento del peering.
:::
  

![Show flow rules](/img/screenshots/storm-rules.png)

La regola `Block all` deve rimanere in ultima posizione. Le regole 3 e 4 sono necessarie affinché le sessioni BGP possano essere stabilite.

# Passo 8 — Configurare il NAT

Nello stesso menu, aprite la scheda NAT.

Configurate le regole come indicato nello screenshot qui sotto.  
:::info
 L'ordine è essenziale: le prime due regole permettono di escludere il traffico BGP da qualsiasi traduzione di indirizzo, mentre le due successive realizzano la traduzione dei flussi Internet provenienti dal LAN e dal firewall.
:::
  
Per le regole di accesso a Internet, utilizzate l'oggetto **Internet** come destinazione anziché Any.  

:::info
Questo oggetto esclude automaticamente le reti direttamente collegate al firewall, evitando così di fare NAT sulle comunicazioni di amministrazione o sulle sessioni BGP.
:::
Le regole di esclusione BGP utilizzano lo stesso indirizzo in sorgente prima e dopo la traduzione. Questa configurazione risponde al vincolo di SNS, che non autorizza una regola NAT senza traduzione, mantenendo al contempo il traffico BGP invariato.

Una volta create le regole, attivate la politica **(Modifica > Attiva questa politica).**

![Show NAT](/img/screenshots/storm-nat.png)


Nella destinazione delle regole di accesso a Internet (3 e 4), utilizzate l'oggetto **Internet** e non **Any**: l'oggetto Internet esclude le reti direttamente collegate al firewall, evitando così di fare NAT sul traffico di amministrazione e sul traffico BGP.

Per le regole 1 e 2, la sorgente tradotta è identica alla sorgente originale: SNS non accetta una regola NAT senza traduzione, quindi questo trucco equivale a non modificare il traffico BGP soddisfando al contempo questo vincolo.

Dopo aver inserito le regole, attivate la politica per renderla effettiva (**Modifica > Attiva questa politica**).

# Passo 9 — Testare la connettività

**Dalla console del firewall :**

```
birdc show protocols     # les sessions aux route serveurs doivent être Established
ping 1.1.1.1             # le firewall accède à Internet
```

**Dalla macchina di management :**

![ping](/img/screenshots/pingvm.png)

# Conclusione

Il firewall Stormshield SNS EVA è stato deployato, le sessioni BGP sono stabilite tramite BIRD e il vostro prefisso pubblico è annunciato.

**Se necessario, la documentazione ufficiale di Stormshield.**

https://documentation.stormshield.eu/SNS/v4/fr/Content/Home.htm