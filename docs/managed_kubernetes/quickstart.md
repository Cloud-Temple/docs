---
title: Guide de démarrage
---

Ce guide **Quickstart Managed kubernetes** vous accompagne pour démarrer rapidement avec l’offre Managed Kubernetes Cloud Temple.

## Étape 1 : Pré-requis

Vous devez disposer d'une infrastructure IaaS avec les minimaux requis pour le déploiement de Kubernetes Managé:

### Production (multi-zonale)

- 1 tenant Cloud-Temple
- 3 AZ
- 2 IP Publiques disponibles
- 1 VLAN multi-zone avec un range privé IPv4 **/22**
- 1 cluster de firewall : de préférence Fortigate, pour avoir du load-balacing avec BGP et une automatisation complète (mais les autres clusters de firewall sont acceptés)
- ~2 To de stockage S3 (facturé au réél)
- Sur chaque AZ:
    - 1 lame hyperviseur (OpenIaaS ou VMware) par AZ avec 40 cores, et 72 Go de RAM dédiés à Kubernetes Managé (Lame ECO ou supérieur)
    - 600 Go de disponible dans un datastore avec **7500 IOPS effectif** (par exemple un datastore de 2,5 To à 3000 IOPS)

### Dev/test (mono-zonale)

- 1 tenant Cloud-Temple
- 1 AZ
- 2 IP Publiques disponibles
- 1 VLAN avec un range privé IPv4 **/22**
- 1 cluster de firewall : de préférence Fortigate, pour avoir du load-balacing avec BGP et une automatisation complète (mais les autres clusters de firewall sont acceptés)
- une capacité de calcul disponible de 48 cores et 92 Go de RAM (il est accepté que les cores soient soumis à un coefficient de virtualisation de 1.5)
- 1,2 To disponible dans un datastore avec **7500 IOPS effectif**
- ~1 To de stockage S3 (facturé au réél)

## Étape 2 : Commander Kubernetes Managé

Contactez Cloud-Temple pour souscrire à l'offre Kubernetes Managé.

## Étape 3 : utiliser Kubernetes Managé

Suite au déploiement de l'offre, vous disposerez des accès aux API Kubernetes et aux différentes interfaces mise à votre disposition (Grafana, Hubble, etc...) 

Consultez nos tutoriaux pour une prise en main rapide !
