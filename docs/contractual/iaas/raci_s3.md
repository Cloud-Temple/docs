---
title: Matrice de responsabilité IaaS - Stockage Objet S3
---

Voici le RACI du partage de responsabilité entre le client et Cloud Temple pour l'usage de la plateforme de Stockage Objets S3 Cloud Temple.

## Définition des différents rôles

Nous rappelons ici les différents rôle du RACI :

| Rôle         | Description                              |
|--------------|------------------------------------------|
| (R) Réalise  | __R__éalise le processus                 |
| (A) Approuve | __A__pprouve la réalisation du processus |
| (C) Consulte | __C__onsulté pendant le processus        |
| (I) Informé  | __I__nformé des résultats du processus   |

## Définir votre besoin

| Activité                                                                            | Rôle Client | Rôle Cloud Temple |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Valider que le produit Stockage Objet S3 est conforme au besoin de l'application | __RA__      | __CI__            | 
| Souscrire au service avec les informations nécessaires                           | __RA__      | __I__             | 

## Mettre en oeuvre le service

| Activité                                                                             | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer le maintien en condition opérationnelle de la plateforme Stockage Objet S3 | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité de la plateforme Stockage Objet S3    | __I__       | __RA__            | 
| Créer les objets                                                                   | __RA__      |                   | 
| Créer les clefs d'accès et affecter les droits associés                            | __RA__      |                   |

## Opérations récurrentes

| Activité                                                                           | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer le maintien en condition opérationnelle de la plateforme Stockage Objet S3 | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité de la plateforme Stockage Objet S3    | __I__       | __RA__            | 
| Assurer l'accessibilité du service Stockage Objet S3                               | __I__       | __RA__            |
| Conserver et mettre à disposition les journaux de la plateforme Stockage Objet S3  |             | __RA__            |
| Superviser le bon fonctionnement de la plateforme Stockage Objet S3                | __I__       | __RA__            |
| Suivre le cycle de vie des objets                                                  | __RA__      |                   | 
| Suivre le cycle de vie des droits sur les objets                                   | __RA__      |                   |
| Gérer la sécurité logique des objets                                               | __RA__      |                   |
| Gérer les incidents sur le service Stockage objets S3                              | __I__       | __RA__            |
| Gérer les problèmes sur le service Stockage objets S3                              | __I__       | __RA__            |
| Gérer la capacité sur le service Stockage objets S3                                | __I__       | __RA__            |
| Gérer les évolutions sur le service Stockage objets S3                             | __I__       | __RA__            |

## Gestion du chiffrement

| Activité                                                                                 | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Gérer le chiffrement des données avant déploiement sur le service Stockage Objet S3      | __RA__      |                   |
| Gérer le chiffrement sur l'espace de stockage alloué par le service Stockage objet S3    | __A__       | __R__             | 

## Continuité d'activité

| Activité                                                                                  | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer la continuité d'activité du service de stockage objets S3                         | __I__       | __RA__            |
| Assurer la sauvegarde des données                                                         | __RA__      |                   |
| Réaliser des tests périodiques de restauration des données                                | __RA__      |                   | 
| maintenir le plan de continuité d'activité et de reprise d'activité pour les applications | __RA__      |                   | 

## Réversibilité

| Activité                                                                                  | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Mettre en oeuvre le projet de réversibilité (planification, outils, méthodes, cibles,...) | __RA__      |                   |
| Exporter les données depuis le service de Stockage Objets S3                              | __RA__      |                   |
| Supprimer les données sur le service de Stockage Objets S3                                | __RA__      |                   | 
| Détruite les supports de stockage en fin de vie ou en erreur                              |             | __RA__            | 