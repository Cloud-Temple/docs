---
title: Matrice de responsabilité - LLMaaS
---

Voici le RACI du partage de responsabilité entre le client et Cloud Temple pour l'usage de la plateforme LLM as a Service (LLMaaS).

## Définition des différents rôles

Nous rappelons ici les différents rôle du RACI :

| Rôle         | Description                              |
| ------------ | ---------------------------------------- |
| (R) Réalise  | __R__éalise le processus                 |
| (A) Approuve | __A__pprouve la réalisation du processus |
| (C) Consulte | __C__onsulté pendant le processus        |
| (I) Informé  | __I__nformé des résultats du processus   |

## Définir votre besoin

| Activité                                                              | Rôle Client | Rôle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Valider que le service LLMaaS est conforme au besoin de l'application | __RA__      | __CI__            |
| Souscrire au service et sélectionner un tier de facturation           | __RA__      | __I__             |

## Mettre en oeuvre le service

| Activité                                                                           | Rôle Client | Rôle Cloud Temple |
| ---------------------------------------------------------------------------------- | ----------- | ----------------- |
| Assurer le maintien en condition opérationnelle de la plateforme LLMaaS (API, GPU) | __I__       | __RA__            |
| Assurer le maintien en condition de sécurité de la plateforme LLMaaS               | __I__       | __RA__            |
| Gérer les clés d'accès API (création, rotation, révocation)                        | __RA__      |                   |
| Développer et maintenir le code de l'application cliente                           | __RA__      |                   |

## Opérations récurrentes

| Activité                                                         | Rôle Client | Rôle Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Assurer la disponibilité de l'API LLMaaS                         | __I__       | __RA__            |
| Superviser le bon fonctionnement de la plateforme et des modèles | __I__       | __RA__            |
| Gérer les incidents sur la plateforme LLMaaS                     | __I__       | __RA__            |
| Gérer les problèmes sur la plateforme LLMaaS                     | __I__       | __RA__            |
| Gérer la capacité de l'infrastructure GPU                        | __I__       | __RA__            |
| Gérer les évolutions des modèles (ajout, dépréciation)           | __C, I__    | __RA__            |
| Suivre la consommation et la facturation                         | __RA__      | __I__             |

## Gestion de la sécurité

| Activité                                                                    | Rôle Client | Rôle Cloud Temple |
| --------------------------------------------------------------------------- | ----------- | ----------------- |
| Sécuriser l'infrastructure physique et la plateforme LLMaaS                 | __I__       | __RA__            |
| Gérer les accès et les permissions des utilisateurs finaux de l'application | __RA__      |                   |
| Sécuriser les données et les prompts envoyés à l'API                        | __RA__      | __C__             |
| Assurer la confidentialité des données traitées par les modèles             | __R__       | __A__             |
| Gérer la conformité de l'application finale (RGPD, etc.)                    | __RA__      | __I__             |

## Continuité d'activité

| Activité                                                              | Rôle Client | Rôle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Assurer la continuité d'activité de la plateforme LLMaaS              | __I__       | __RA__            |
| Assurer la sauvegarde des données de l'application cliente            | __RA__      |                   |
| Maintenir le plan de continuité d'activité pour l'application cliente | __RA__      |                   |

## Réversibilité

| Activité                                                                    | Rôle Client | Rôle Cloud Temple |
| --------------------------------------------------------------------------- | ----------- | ----------------- |
| Mettre en oeuvre le projet de réversibilité (planification, outils, cibles) | __RA__      | __C__             |
| Exporter les données et le code de l'application cliente                    | __RA__      |                   |
| Supprimer les clés d'API et les accès au service                            | __RA__      |                   |
