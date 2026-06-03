---
sidebar_position: 1
---

# Déployer un firewall opensource OPNsense

## Prérequis

Avant de commencer, il vous faut un compte Cloud Temple actif et les droits qui vont avec :

- avoir souscrit à l'offre Cloud Temple : organisation, tenant et accès en main ;
- disposer des droits sur le module Compute.

Une fois ces éléments réunis, le déploiement ne prend que quelques minutes.

## Ce qu'est OPNsense

OPNsense est un pare-feu et routeur open source bâti sur FreeBSD. C'est un fork de pfSense né en 2014. Ses points forts :

- une interface web claire et moderne ;
- des mises à jour deux fois par semaine ;
- une architecture modulaire avec un système de plugins ;
- le support natif d'OpenVPN, WireGuard et IPsec.

Toute l'administration se fait depuis un navigateur. Une fois le réseau en place, on n'a donc plus jamais besoin d'un accès console.

## Le principe du déploiement

On monte deux machines virtuelles :

- **le firewall** lui-même, déployé depuis le template OPNsense ;
- **une VM de management** avec interface graphique, placée dans le même réseau que la patte LAN du firewall. C'est depuis cette VM qu'on ouvre l'interface web pour tout configurer.

Le firewall a deux pattes : **LAN** (côté réseau interne) et **WAN** (côté Internet). On les configure dans cet ordre, parce qu'on a besoin du LAN fonctionnel pour atteindre l'interface web avant de pouvoir toucher au WAN.

# Étape 1 — Récupérer les paramètres réseau dans Shiva

Tout part de l'interface **Shiva** de Cloud Temple. Avant de déployer quoi que ce soit, notez les éléments suivants selon que votre connexion Internet a été livrée en **IPv4** ou en **IPv6**. Vous en aurez besoin pour monter la session BGP :

- **Préfixe public** : votre bloc d'IP publiques (onglet « IP publiques »)
- **Préfixe d'interconnexion** : le sous-réseau point-à-point qui porte la liaison BGP (onglet « IP d'interco »)
- **Adresse de passerelle partagée** (onglet « IP d'interco »)
- **Local AS** : le numéro d'AS de votre organisation
- **AS partenaire** : le numéro d'AS de Cloud Temple
- **Keepalive timer** : l'intervalle qui maintient la session BGP vivante
- **Hold-time timer** : le délai avant que la session soit déclarée morte
- **Adresses des route servers** : les serveurs avec qui on échange les routes

Gardez cette liste sous les yeux, on y reviendra à l'étape WAN.

![Paramètres BGP dans Shiva](/img/screenshots/shiva.png)
![IP publiques](/img/screenshots/ip-publiques.png)
![IP d'interco](/img/screenshots/ip-dintercos.png)

# Étape 2 — Déployer les deux VM

Depuis **Shiva** :

1. déployez le firewall à partir du template OPNsense ;
2. déployez la VM de management avec interface graphique (Ubuntu par exemple).

Profitez-en pour rattacher les interfaces. La patte **WAN** du firewall doit être dans votre vLAN Internet, avec une IP prise dans le préfixe d'interconnexion fourni par Shiva. On la configurera finement à l'étape 4 ; pour l'instant on la rattache simplement au bon vLAN.

# Étape 3 — Configurer le LAN et joindre l'interface web

C'est l'étape qui débloque tout le reste.

Sur l'interface **LAN** du firewall, mettez une IP de votre réseau interne, avec son masque de sous-réseau et sa passerelle.

![Paramètres LAN](/img/screenshots/lan.png)

Placez ensuite la VM de management dans ce même réseau. Pour la démonstration nous utilisons Ubuntu 22.04, avec une IP du même sous-réseau attribuée via Netplan.

Vous pouvez maintenant ouvrir un navigateur sur la VM de management et taper l'IP LAN du firewall. L'interface web d'OPNsense apparaît.

![Login firewall](/img/screenshots/login-fw.png)

<div align="center">

**Identifiants par défaut**
Username : **root**
Password : **opnsense**

</div>

:::warning Changez le mot de passe tout de suite
Avant d'aller plus loin, remplacez le mot de passe `root` par défaut.
:::

# Étape 4 — Configurer le WAN

Tout se passe désormais dans l'interface web.

## 4.1 — La passerelle

Renseignez d'abord la **passerelle** WAN avec l'adresse de passerelle partagée notée à l'étape 1.

![Gateway WAN](/img/screenshots/wan-gw.png)

## 4.2 — L'interface WAN

Attribuez à la patte WAN une IP prise dans le préfixe d'interconnexion, et pointez-la vers la passerelle que vous venez de créer.

![Interface WAN](/img/screenshots/ip-wan.png)

# Étape 5 — Monter la session BGP

## 5.1 — Activer le routage

Allez dans **Routing > General** et cochez **Enable**.

![Routing General](/img/screenshots/routing-general.png)
![Routing BGP](/img/screenshots/routing-bgp.png)

Renseignez ensuite les informations de connexion vers les route servers (toujours depuis Shiva) :

- les IP des route servers ;
- le numéro d'AS partenaire.

:::info Pourquoi le multi-hop ?
Cochez la case **multi-hop**. Les route servers sont à plus d'un saut, or une session eBGP a un TTL de 1 par défaut : sans multi-hop, les paquets n'atteindraient jamais les serveurs.
:::

![PEER1](/img/screenshots/peer1.png)
![PEER2](/img/screenshots/peer2.png)

## 5.2 — Routes statiques vers les route servers

Dans **Routing > Static**, ajoutez les routes pour joindre ces serveurs (chacune en `/32`).

![Activer les routes statiques](/img/screenshots/routing-static-enable.png)
![Route RS1](/img/screenshots/routes-peer1.png)
![Route RS2](/img/screenshots/routes-peer2.png)

## 5.3 — Redistribution des routes

Autorisez la **redistribution des routes statiques et connectées**. Sans ça, le firewall ne partagera rien avec ses voisins et ne pourra pas annoncer votre préfixe public.

![Redistribution des routes statiques](/img/screenshots/redistribute-static.png)
![Redistribution des routes connectées](/img/screenshots/redistribute-connected.png)

## 5.4 — Vérifier la session

Direction **Routing > Diagnostic > BGP**. Si tout va bien, le **BGP State** affiche `established`. Tant que vous ne voyez pas cet état, inutile de passer à la suite : l'annonce du préfixe ne fonctionnera pas.

![Peer 1 established](/img/screenshots/peer1-established.png)
![Peer 2 established](/img/screenshots/peer2-established.png)

# Étape 6 — Annoncer le préfixe public

Toujours dans **Routing > Static**, créez une route en pointant la passerelle vers la **loopback** du firewall lui-même. Cela crée une route « blackhole ».

C'est voulu : cette route via la loopback (sans passerelle physique) apparaît dans FRR comme `unreachable`, mais sa présence dans la RIB permet d'annoncer le préfixe aux voisins BGP de façon stable, sans dépendre d'une interface physique qui pourrait tomber.

![Préfixe public / route blackhole](/img/screenshots/prefix-pub.png)

# Étape 7 — Régler le NAT

Pour finir, quelques règles NAT à saisir manuellement. **L'ordre compte** : les règles « ne pas NATer » doivent passer avant les règles d'accès Internet, sinon le NAT s'applique au trafic BGP et la session tombe.

**Ne pas faire de NAT avec les peers BGP** (celle-ci en tout premier) :


**Donner accès à Internet à votre réseau LAN** :


**Donner accès à Internet au firewall lui-même**, pour ses mises à jour :


![NAT Rules](/img/screenshots/NAT-rules.png)

Il ne reste plus qu'à tester la connectivité vers Internet :

![ping](/img/screenshots/pinginternet.png)

# Conclusion

Le firewall OPNsense est déployé, la session BGP est établie et votre préfixe public est annoncé. Avant de considérer la chose terminée :

- changez le mot de passe `root` si ce n'est pas déjà fait ;
- écrivez vos règles de firewall selon vos besoins ;
- prévoyez les mises à jour de sécurité régulières ;
- surveillez l'état des sessions BGP.

En cas de souci, la documentation officielle d'OPNsense et le support Cloud Temple sont là.
