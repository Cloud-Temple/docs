---
sidebar_position: 1
---

# Prérequis

Ce guide va vous aider à déployer votre firewall opensource OPNSense dans le Cloud de Confiance en seulement quelques minutes.


Les prérequis à ce guide sont les suivants :

1. Avoir souscrit à l'offre Cloud Temple : vous devez disposer de votre organisation, de votre tenant et de vos accès,
1. Avoir les droits sur le module compute.

Ce document décrit les étapes à suivre pour déployer un firewall virtuel OPNSense.


# Déployer un firewall opensource OPNSense
## Présentation d'OPNsense
OPNsense est une plateforme de firewall et de routage open source basée sur FreeBSD. Fork de pfSense depuis 2014, OPNsense se distingue par :

Une interface utilisateur moderne et intuitive basée sur Bootstrap
Un cycle de développement transparent avec des mises à jour bi-hebdomadaires
Une architecture modulaire avec un système de plugins extensible
Une API REST complète pour l'automatisation
Un support natif d'OpenVPN, Wireguard et IPsec

## Architecture de déploiement
OPNsense propose une expérience utilisateur modernisée avec des tableaux de bord configurables et une navigation simplifiée.
L'administration d'OPNsense s'effectue via son interface web responsive accessible depuis n'importe quel navigateur moderne. Pour le déploiement, nous utiliserons une architecture à deux VM :

- la première sera la machine sur laquelle nous allons déployer le firewall
- la deuxième sera la machine à partir de laquelle nous allons administrer le firewall.

# Demander une livraison d'accès internet
Avant de procéder au déploiement d'OPNsense, il est essentiel de récupérer l'ensemble des paramètres de connectivité fourni par Cloud Temple depuis l'interface Shiva.
