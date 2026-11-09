---
title: Questions fréquentes
---

## Le service est-il facturé en supplément ?

Non. Les tableaux de bord intégrés à la Console, l'endpoint API Prometheus (PromQL), les modèles de tableaux de bord Grafana open source, la visibilité sur les opérations planifiées et les incidents ainsi que les notifications d'incidents par e-mail sont inclus sans surcoût dans toute souscription Cloud Temple.

## Cloud Temple fournit-il une instance Grafana managée ?

Non. Cloud Temple fournit la source de données (le proxy Prometheus de la Console) et des [modèles de tableaux de bord open source](https://github.com/Cloud-Temple/console-grafana-iaas), mais pas Grafana en tant que service. Vous connectez l'outil compatible PromQL de votre choix, par exemple votre propre instance Grafana, dans le cloud ou sur site.

## Comment l'accès à mes métriques est-il sécurisé ?

Par un jeton d'accès personnel (PAT). Votre outil s'authentifie en Basic Auth avec l'identifiant et le secret d'un jeton créé depuis votre profil dans la Console. Selon le principe du moindre privilège, ce jeton ne doit avoir que la permission `metrics_read`.

## Puis-je créer des alertes sur les métriques Cloud Temple ?

Oui, dans votre propre outil : par exemple des règles d'alerte Grafana sur la saturation mémoire, le CPU ou les IOPS, à partir de la datasource Prometheus. Pour l'alerting, réglez la méthode HTTP de la datasource sur GET (voir le [guide de démarrage](quickstart.md)).

## Puis-je suivre l'empreinte carbone de mon infrastructure ?

Oui. Le flux Prometheus et les tableaux de bord de la Console incluent les émissions de CO₂ et la consommation énergétique estimée (kWh), par hyperviseur et par datacenter.

## Combien de temps l'historique des incidents et des interventions est-il conservé ?

60 jours. La Console affiche les interventions terminées et les incidents résolus (avec leurs rapports) des 60 derniers jours, ainsi que les interventions planifiées des 60 prochains jours.
