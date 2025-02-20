---
title: Matrice di responsabilità IaaS - Archiviazione Oggetti S3
---

Voici le RACI du partage de responsabilité entre le client et Cloud Temple pour l'usage de la plateforme de Stockage Objets S3 Cloud Temple.

## Definizione dei diversi ruoli

Nous rappelons ici les différents rôle du RACI :

| Rôle         | Description                              |
|--------------|------------------------------------------|
| (R) Réalise  | __R__éalisate il processo                |
| (A) Approuve | __A__pprova la realizzazione del processo|
| (C) Consulte | __C__onsultato durante il processo       |
| (I) Informé  | __I__nformato sui risultati del processo |

## Definire il tuo bisogno

| Activité                                                                            | Rôle Client | Rôle Cloud Temple |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Valider que le produit Stockage Objet S3 est conforme au besoin de l'application | __RA__      | __CI__            | 
| Souscrire au service avec les informations nécessaires                           | __RA__      | __I__             | 

## Mettere in opera il servizio

| Activité                                                                             | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer le maintien en condition opérationnelle de la plateforme Stockage Objet S3 | __I__       | __RA__            | 
| Assurer le maintien en condition de sécurité de la plateforme Stockage Objet S3    | __I__       | __RA__            | 
| Créer les objets                                                                   | __RA__      |                   | 
| Créer les clefs d'accès et affecter les droits associés                            | __RA__      |                   |

## Operazioni ricorrenti

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

## Gestione della crittografia

| Activité                                                                                 | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Gérer le chiffrement des données avant déploiement sur le service Stockage Objet S3      | __RA__      |                   |
| Gérer le chiffrement sur l'espace de stockage alloué par le service Stockage objet S3    | __A__       | __R__             | 

## Continuità operativa

| Activité                                                                                  | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer la continuité d'activité du service de stockage objets S3                         | __I__       | __RA__            |
| Assurer la sauvegarde des données                                                         | __RA__      |                   |
| Réaliser des tests périodiques de restauration des données                                | __RA__      |                   | 
| maintenir le plan de continuité d'activité et de reprise d'activité pour les applications | __RA__      |                   | 

## Reversibilità

| Activité                                                                                  | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Mettre en oeuvre le projet de réversibilité (planification, outils, méthodes, cibles,...) | __RA__      |                   |
| Exporter les données depuis le service de Stockage Objets S3                              | __RA__      |                   |
| Supprimer les données sur le service de Stockage Objets S3                                | __RA__      |                   | 
| Détruite les supports de stockage en fin de vie ou en erreur                              |             | __RA__            |