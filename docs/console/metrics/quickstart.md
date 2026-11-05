---
title: Guide de démarrage
---

import grafanaDatasourceHttp from '@site/docs/console/metrics/images/grafana_datasource_http.png'
import grafanaDatasourceAuth from '@site/docs/console/metrics/images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from '@site/docs/console/metrics/images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from '@site/docs/console/metrics/images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from '@site/docs/console/metrics/images/grafana_datasource_working.png'
import grafanaDashboards_001 from '@site/docs/console/metrics/images/grafana_dashboards_001.png'

Ce guide ajoute la Console comme source de données Prometheus dans votre instance Grafana. Vous pourrez ensuite y consulter les métriques de vos ressources Cloud Temple et construire vos propres tableaux de bord.

:::info

Cloud Temple ne fournit pas d'instance Grafana managée : vous utilisez votre propre instance, dans le cloud ou sur site. Les tableaux de bord intégrés à la Console ne demandent, eux, aucune configuration (voir [Concepts](concepts.md)).

:::

## Prérequis

- Une instance Grafana ayant accès aux API de la Console.
- Un accès d'administration sur l'instance Grafana afin de pouvoir configurer les *datasources*.
- Un personal access token possédant au moins le droit `metrics_read`.

## Configuration

Dans la __configuration__ de Grafana aller dans l'onglet "__datasources__" puis cliquer sur "__Add datasource__".

Dans l'URL, fournir l'__URL de l'API Console Metrics__ sans la version et finissant par "__/prometheus__"
(exemple : [https://shiva.cloud-temple.com/api/metric/prometheus](https://shiva.cloud-temple.com/api/metric/prometheus))

<img src={grafanaDatasourceHttp} />

Dans l'__authentification__, activer l'option __Basic Auth__.

<img src={grafanaDatasourceAuth} />

Dans la partie "__Basic Auth Details__", configurer le __username__ et __password__ en utilisant
respectivement les __id__ et __secret__ d'un __Jeton d'accès personnel__ ayant le droit __metrics_read__.

<img src={grafanaDatasourceBasicAuthDetails} />

Dans la partie "__Alerting__", configurer la propriété __HTTP Method__ en __GET__.

<img src={grafanaDatasourceAlerting} />

## Résultat

Afin de confirmer que la configuration est correcte et fonctionnelle, appuyez sur le bouton "__Save & test__".

Vous devriez voir s'afficher un bandeau vous informant que la configuration a réussie.

<img src={grafanaDatasourceWorking} />

Vous trouverez tout un ensemble d'exemple de configuration pour Grafana ici : [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
