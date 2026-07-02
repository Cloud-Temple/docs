---
title: Déployer un firewall Stormshield SNS EVA
sidebar_label: Déployer un firewall Stormshield SNS EVA
sidebar_position: 6
---

# Déployer un firewall Stormshield SNS EVA

## Prérequis

Avant de commencer, il vous faut un compte Cloud Temple actif et les droits qui vont avec :

- avoir souscrit à l'offre Cloud Temple ;
- disposer des droits sur le module Compute.

Une fois ces éléments réunis, le déploiement ne prend que quelques minutes.

## Ce qu'est Stormshield SNS

Stormshield Network Security (SNS) est un pare-feu / UTM français édité par Stormshield. Sa déclinaison virtuelle s'appelle SNS EVA (Elastic Virtual Appliance). Ses points forts :

- une interface web d'administration complète ;
- un moteur de filtrage et NAT par règles ordonnées ;
- le moteur de routage dynamique BIRD (BGP, OSPF, RIP) intégré ;
- le support natif d'IPsec et de SSL VPN.

Toute l'administration se fait depuis un navigateur. Une fois le réseau en place, on n'a donc plus besoin d'un accès console, sauf pour quelques vérifications avancées comme l'état des sessions BGP.


## Le principe du déploiement

On monte deux machines virtuelles :

- le firewall lui-même, déployé depuis l'image SNS EVA ;
- une VM de management avec interface graphique, placée dans le même réseau que l'interface LAN du firewall. C'est depuis cette VM qu'on réalise la configuration initiale du firewall.

Le firewall a deux interfaces : LAN (côté réseau interne, nommée `in` sur SNS) et WAN (côté Internet, nommée `out` sur SNS).
Nous allons configurer l'interface LAN pour accéder à l'interface web du firewall pour pouvoir par la suite réaliser la configuration de l'accès Internet.

# Étape 1 — Récupérer les paramètres réseau dans Shiva

Dans l'interface Shiva de Cloud Temple vous aurez besoin de récupérer les éléments suivants pour configurer la session BGP qui donne accès à Internet :

- **Préfixe public** : votre bloc d'IP publiques (onglet « IP publiques »)
- **Préfixe d'interconnexion** : le sous-réseau point-à-point qui porte la liaison BGP (onglet « IP d'interco »)
- **Adresse de passerelle partagée** (onglet « IP d'interco »)
- **Local AS** : le numéro d'AS de votre organisation
- **AS partenaire** : le numéro d'AS de Cloud Temple
- **Keepalive timer** : l'intervalle qui maintient la session BGP vivante
- **Hold-time timer** : le délai avant que la session soit déclarée morte
- **Adresses des route servers** : les serveurs avec qui on échange les routes

Gardez cette liste sous les yeux, on y reviendra à l'étape WAN et dans la configuration BIRD.

![Paramètres BGP dans Shiva](/img/screenshots/shiva.png)

# Étape 2 — Déployer les deux VM

Depuis **Shiva** :

1. déployez le firewall à partir de l'image SNS EVA depuis la Marketplace ;
2. déployez la VM de management avec interface graphique (Ubuntu par exemple).

L'interface WAN de votre firewall doit être configurée dans votre vLAN Internet avec une IP prise dans le préfixe d'interconnexion fourni par Shiva.


# Étape 3 — Configurer le LAN et joindre l'interface web

Sur l'interface LAN du firewall, mettez une IP de votre réseau interne avec son masque de sous-réseau.
:::info
Sur SNS cela se fait au premier démarrage via la console, ou plus tard dans **Configuration > Réseau > Interfaces**.
:::

![Interface LAN](/img/screenshots/storm-in.png)

Placez ensuite la VM de management dans ce même réseau.
Pour la démonstration nous utilisons Ubuntu 22.04, avec une IP du même sous-réseau attribuée via Netplan. La passerelle par défaut de cette VM doit être l'adresse LAN du firewall.

Ouvrez un navigateur sur la VM de management et entrez l'adresse `https://IP-LAN-du-firewall/admin`.

Vous devriez maintenant pouvoir accéder à l'interface d'administration de SNS.

![Login firewall](/img/screenshots/storm-login.png)

<div align="center">

**Identifiants par défaut**
Username : **admin**
Password : **admin**

</div>

:::warning Changez le mot de passe tout de suite
Avant d'aller plus loin, remplacez le mot de passe `admin` par défaut.
:::

# Étape 4 — Configuration de l'interface WAN

Tout se passe désormais dans l'interface web, sous **Configuration > Réseau**.

:::info Les adresses IP sont des objets
Sur SNS, on ne saisit pas une adresse IP directement dans les champs des routes, des règles de filtrage ou du NAT : il faut d'abord la déclarer comme objet réseau dans Configuration > Objets > Objets réseau, puis la sélectionner ensuite.  
  
 Créez donc au fur et à mesure les objets dont vous avez besoin (passerelle partagée, route servers, préfixe public, réseaux LAN et WAN).
:::
## 4.1 — L'interface WAN

Dans **Réseau > Interfaces**, configurez sur l'interface WAN (`out`) une IP prise dans le préfixe d'interconnexion.

![Interface WAN](/img/screenshots/storm-out.png)

## 4.2 — La passerelle

Dans **Réseau > Routage**, définissez la passerelle par défaut avec l'adresse de passerelle partagée notée à l'étape 1.

![Passerelle WAN](/img/screenshots/storm-gw.png)

# Étape 5 — Créer la loopback pour le préfixe public

Le préfixe public doit être porté par une interface loopback sur le firewall : elle sert à annoncer le préfixe en BGP et de source de translation pour le NAT.

Dans **Réseau > Interfaces virtuelles**, onglet **Loopback**, ajoutez une loopback avec votre IP publique en `/32`.

![Loopback](/img/screenshots/storm-loopback.png)

# Étape 6 — Monter la session BGP

Sur SNS, le BGP se configure dans le moteur BIRD, via **Configuration > Réseau > Routage dynamique**.

## 6.1 — Routes statiques vers les route servers

Dans **Réseau > Routage > Routes statiques**, ajoutez une route en `/32` vers chaque route server, pointant vers la passerelle partagée. Ces routes doivent être déclarées ici et non dans BIRD, pour éviter que le trafic BGP soit bloqué par les alarmes d'usurpation d'adresse IP.

![Routes statiques vers les route servers](/img/screenshots/storm-routes.png)

## 6.2 — Activer le routage dynamique

Dans **Routage dynamique**, activez le routage dynamique BIRD et sélectionnez la version **BIRD v2**.

## 6.3 — Écrire la configuration BIRD

Dans l'onglet **BIRD V2**, saisissez la configuration en remplaçant les valeurs par les vôtres (notées à l'étape 1). On déclare un bloc `protocol bgp` par route server.

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

Cliquez sur **Vérifier la configuration** puis **Appliquer**.

:::info Pourquoi le multi-hop ?
Les route servers sont à plus d'un saut, or une session eBGP a un TTL de 1 par défaut : sans `multihop`, les paquets n'atteindraient jamais les serveurs.
:::

La directive `route ... blackhole` et le filtre `export_public` remplacent la route blackhole et les cases de redistribution d'OPNsense : on annonce uniquement le préfixe public et on rejette le reste.

![Configuration BIRD](/img/screenshots/storm-bird-bgp.png)

## 6.4 — Vérifier la session

Depuis l'interface web, ouvrez **Monitoring > Connexions**. Les deux sessions vers les route servers y apparaissent en protocole `tcp`, service `bgp`, avec du trafic échangé dans les deux sens et une durée qui augmente : les sessions sont établies.

![Sessions BGP dans Monitoring > Connexions](/img/screenshots/storm-gui-bgp.png)

Pour l'état détaillé des voisins, la vérification se fait en console : `birdc` puis `show protocols`. L'état doit afficher `Established` pour RS1 et RS2.

![birdc show protocols](/img/screenshots/storm-birdc.png)

# Étape 7 — Configurer le filtrage

Sur SNS, le filtrage et le NAT se règlent dans le même module (**Configuration > Politique de sécurité > Filtrage et NAT**), dans deux onglets distincts. Aucune règle n'autorise le trafic par défaut : tout ce qui n'est pas explicitement permis est bloqué par la règle finale `Block all`.

Dans l'onglet **Filtrage**, la politique doit contenir, dans cet ordre :

| # | Action | Source | Destination | Port | Rôle |
|---|---|---|---|---|---|
| 1 | passer | Any | firewall_all | https | Administration web |
| 2 | passer | Any | firewall_all | icmp | Ping du firewall |
| 3 | passer | Firewall_out | Route_server_1 | Any | Session BGP 1 |
| 4 | passer | Firewall_out | Route_server_2 | Any | Session BGP 2 |
| 5 | passer | Network_in | Any | Any | Accès Internet du LAN |
| 6 | bloquer | Any | Any | Any | Block all |

La règle `Block all` doit rester en dernière position. Les règles 3 et 4 sont nécessaires pour que les sessions BGP puissent s'établir.

# Étape 8 — Configurer le NAT

Toujours dans **Filtrage et NAT**, onglet **NAT**.
L'ordre compte : les règles « ne pas NATer » doivent passer avant les règles d'accès Internet, sinon le NAT s'applique au trafic BGP et la session tombe.

La politique NAT contient quatre règles, dans cet ordre :

| # | Source | Destination | Source translatée | Rôle |
|---|---|---|---|---|
| 1 | Firewall_all | Route_server_1 | Firewall_all | Ne pas NATer le trafic BGP |
| 2 | Firewall_all | Route_server_2 | Firewall_all | Ne pas NATer le trafic BGP |
| 3 | Network_int | Internet | loopback | Accès Internet du LAN |
| 4 | Firewall_all | Internet | loopback | Accès Internet du firewall |

En destination des règles d'accès Internet (3 et 4), utilisez l'objet **Internet** et non **Any** : l'objet Internet exclut les réseaux directement rattachés au firewall, ce qui évite de NATer le trafic d'administration et le trafic BGP.

Pour les règles 1 et 2, la source translatée est identique à la source d'origine : SNS n'accepte pas de règle NAT sans translation, cette astuce revient donc à ne pas modifier le trafic BGP tout en satisfaisant cette contrainte.

Après avoir saisi les règles, activez la politique pour la rendre effective (**Éditer > Activer cette politique**).

# Étape 9 — Tester la connectivité

Depuis la console du firewall :

```
birdc show protocols     # les sessions RS1 et RS2 doivent être Established
ping 1.1.1.1             # le firewall accède à Internet
```

Depuis la VM de management :

```
ping 1.1.1.1
```

Si les tests répondent, l'accès Internet est opérationnel.

# Conclusion

Le firewall Stormshield SNS EVA est déployé, les sessions BGP sont établies via BIRD et votre préfixe public est annoncé.

**Si besoin, la documentation officielle de Stormshield.**

https://documentation.stormshield.eu/SNS/v4/fr/Content/Home.htm
