---
sidebar_position: 1
---

# Déployer un firewall opensource OPNsense
## Prérequis
Ce guide va vous aider à déployer votre firewall opensource OPNsense dans le Cloud de Confiance.  

Les prérequis à ce guide sont les suivants :  

> Avoir souscrit à l'offre Cloud Temple : vous devez disposer de votre organisation, de votre tenant et de vos accès  
> Avoir les droits sur le module compute

# Présentation d'OPNsense

_OPNsense est une plateforme de firewall et de routage open source basée sur FreeBSD. Fork de pfSense depuis 2014, OPNsense se distingue par_:  

> Une interface utilisateur moderne et intuitive  
> Un cycle de développement transparent avec des mises à jour bi-hebdomadaires  
> Une architecture modulaire avec un système de plugins extensible  
> Un support natif d'OpenVPN, Wireguard et IPsec  

## Architecture de déploiement
  
_Pour le déploiement, nous utiliserons une architecture à deux machines virtuelles_ :

> La première sera la machine sur laquelle nous allons déployer le firewall  
> La deuxième sera la machine à partir de laquelle nous allons administrer le firewall

# Récupérer ses informations de connection internet  

Avant de procéder au déploiement d'OPNsense, il est essentiel de récupérer l'ensemble des paramètres de connectivité fournis par Cloud Temple depuis l'interface **Shiva.**  

_Pour établir une session BGP fonctionnelle avec OPNsense, vous devez disposer des éléments suivants_ :

- **Préfixe public** : Bloc d'adresses IP publiques alloué à votre organisation (visible dans l'onglet "IP publiques")
- **Préfixe d'interconnexion** : Sous-réseau point-à-point pour la liaison BGP (visible dans l'onglet "IP d'interco")
- **Adresse de passerelle partagée** (visible dans l'onglet "IP d'interco")
- **Local AS** : Numéro AS attribué à votre organisation
- **AS partenaire** : Numéro AS de Cloud Temple
- **Keepalive timer** : Intervalle d'envoi des messages de maintien de session
- **Hold-time timer** : Délai d'expiration de la session BGP
- **Adresses des route servers** : IPs des serveurs de routes pour l'échange d'informations de routage


![Paramètres BGP dans Shiva](/img/screenshots/shiva.png)

# Étapes de déploiement
1. Installation du firewall depuis le template OPNsense disponible dans **Shiva**  

_Deux options s'offrent à vous_:  
> Déployer via la console  
> Déployer via Terraform

2. Configuration de l'interfaces LAN du firewall  
_Consultez l'étape suivante "Configuration de l'interface LAN du firewall"_


3. Installation de la deuxième machine de management avec interface graphique (_Ubuntu par exemple_)

4. Configuration de l'interface de la VM de management  
_Cette machine doit être dans le même réseau que celui dans lequel l'interface LAN du firewall a été configurée._


# Configuration de l'interface LAN du firewall
_Pour pouvoir accéder au firewall en HTTP, vous devez associer une adresse IP de votre réseau à l'interface LAN, en y renseignant votre masque de sous-réseau et votre passerelle._
![Paramètres LAN](/img/screenshots/lan.png)

Il convient maintenant de mettre une machine virtuelle avec interface graphique dans le même réseau afin d'administrer le firewall. Pour la démonstration, nous utilisons Ubuntu 22.04 avec une adresse IP dans le même réseau que l'interface LAN du firewall via Netplan.  

> Accédez à l'interface web du firewall depuis la machine virtuelle graphique en tapant l'adresse IP du firewall dans un navigateur.
![Login screen](/img/screenshots/login.png)

> **Note** : Identifiants par défaut  
> Username : root  
> Password : opnsense 


> Important : Pensez à changer le mot de passe par défaut après la première connexion.

# Configuration du firewall partie WAN
## Étape 1 : Configuration de la passerelle
La première étape est de renseigner la passerelle depuis les informations fournies depuis Shiva.
![Gateway WAN](/img/screenshots/gateway.png)
## Étape 2 : Configuration de l'interface WAN
Ensuite, il faut fournir une adresse IP sur votre patte WAN qui est également choisie du préfixe d'interconnexion, tout en renseignant la passerelle précédemment configurée.
![Interface WAN](/img/screenshots/wan.png)
## Étape 3 : Configuration du routage BGP
Choisir sur la gauche "Routing > General" qui va nous permettre de fournir les informations de connexion.

> Important : Veillez à cliquer sur "Enable"

![General ](/img/screenshots/general.png)


Il faut ensuite renseigner les informations de connexion vers nos serveurs de routes disponible depuis Shiva :

Les adresses IP des serveurs de routes  
Le numéro d'AS partenaire  
> Cochez le multi-hop car la destination est à plus d'un saut et les sessions eBGP ont par défaut un TTL de 1

![PEER1](/img/screenshots/peer1.png)
![PEER2](/img/screenshots/peer2.png)


## Étape 4 : Configuration des routes statiques
Nous devons renseigner les routes statiques pour joindre ces serveurs (pensez à ajouter /32).
![Route RS1](/img/screenshots/routers1.png)
![Route RS2](/img/screenshots/routers2.png)

## Étape 5 : Redistribution des routes
Il faut également permettre la redistribution des routes statiques & connectées afin de pouvoir annoncer votre préfixe public.
![Redistribute routes](/img/screenshots/redistribute.png)

## Étape 6 : Vérification de l'état de la session BGP
Dans "Routing > Diagnostic > BGP", vous pouvez voir l'état de la session BGP que vous venez de configurer.  
Veillez à ce que le "BGP State" soit à "established".
![diag BGP1](/img/screenshots/diagbgp1.png)
![diag BGP2](/img/screenshots/diagbgp2.png)


# Annoncer son préfixe public
Pour annoncer son préfixe public, il faut l'annoncer en route statique en renseignant la passerelle comme étant la loopback du firewall lui-même, créant ainsi une route "blackhole".
![blackhole](/img/screenshots/blackhole.png)

# Règles NAT
Enfin, des règles doivent être rentrées manuellement pour :  
> Ne pas faire du NAT avec les PEER BGP (à faire en premier)  
![Rule1](/img/screenshots/rule1.png)

> Donner accès à internet à votre réseau LAN  
![Rule2](/img/screenshots/rule2.png)

> Donner accès à internet au firewall (pour mises à jour)  
![Rule3](/img/screenshots/rule3.png)

![NAT Rules](/img/screenshots/nat.png)

> Il ne nous reste plus qu'à tester la connectivité vers Internet
![ping](/img/screenshots/pinginternet.png)

# Conclusion
Votre firewall OPNsense est maintenant déployé et configuré dans le Cloud de Confiance.  
La session BGP est établie et votre préfixe public est annoncé, n'oubliez pas de :  

> Changer le mot de passe superutilisateur par défaut  
> Configurer les règles de firewall selon vos besoins  
> Effectuer les mises à jour de sécurité régulières  
> Monitorer l'état des sessions BGP

_Pour toute question ou problème, consultez la documentation officielle d'OPNsense ou contactez le support Cloud Temple._
