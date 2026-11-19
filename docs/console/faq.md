---
title: Questions fréquentes
---

## Quelles opérations génèrent une activité ?

Toutes les opérations réalisées depuis la Console ou par son API : les écritures (création, modification, suppression) comme les lectures. Chaque activité indique notamment l'initiateur, la date, le type d'opération, les ressources concernées et l'état. Voir [Activités](./concepts.md#activités).

## Quand une activité passe-t-elle de « Récents » à « Archivés » ?

Une fois l'opération terminée, réussie ou en échec, l'activité passe dans **Archivés** entre 24 et 30 heures après sa création. Une opération plus longue reste dans **Récents** tant qu'elle est en cours, puis passe dans **Archivés** dans les 6 heures qui suivent sa fin.

## Combien de temps les activités archivées sont-elles conservées ?

558 jours, soit environ 18 mois, à compter de leur archivage. Cette durée va au-delà du minimum de 6 mois associé à la qualification SecNumCloud de la Console.

## Ces durées sont-elles les mêmes pour tous les tenants ?

Oui. Elles sont fixées par Cloud Temple au niveau de la plateforme, identiques pour tous les tenants, et ne sont pas paramétrables.

## Comment consulter ou récupérer les activités archivées ?

Dans la Console, depuis le menu **Logs**, onglet **Archivés**, avec la permission `activity_read`. Par l'API, avec la route `GET /activity/v1/activities/archive` : voir l'[API de la Console](./api.md#les-activités).

## Les activités couvrent-elles les événements d'infrastructure ?

Non. Elles tracent les opérations réalisées sur la Console et son API, pas les événements de l'infrastructure sous-jacente.
