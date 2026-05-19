---
title: Metrologie
---
import metricsHypervisorsCo2 from '@site/docs/console/metrics/images/metrics_hypervisors_co2.png'
import shivaHome from '@site/docs/console/metrics/images/shiva_home.png'
import shivaMetric_000 from '@site/docs/console/metrics/images/shiva_metric_000.png'
import shivaMetric_001 from '@site/docs/console/metrics/images/shiva_metric_001.png'
import shivaMetric_002 from '@site/docs/console/metrics/images/shiva_metric_002.png'
import shivaMetric_003 from '@site/docs/console/metrics/images/shiva_metric_003.png'
import shivaMetric_004 from '@site/docs/console/metrics/images/shiva_metric_004.png'
import shivaMetric_006 from '@site/docs/console/metrics/images/shiva_metric_006.png'
import shivaMetric_007 from '@site/docs/console/metrics/images/shiva_metric_007.png'
import shivaMetric_008 from '@site/docs/console/metrics/images/shiva_metric_008.png'
import shivaMetric_009 from '@site/docs/console/metrics/images/shiva_metric_009.png'
import shivaMetric_010 from '@site/docs/console/metrics/images/shiva_metric_010.png'
import shivaMetric_011 from '@site/docs/console/metrics/images/shiva_metric_011.png'
import shivaMetric_012 from '@site/docs/console/metrics/images/shiva_metric_012.png'
import shivaMetric_013 from '@site/docs/console/metrics/images/shiva_metric_013.png'
import shivaMetric_014 from '@site/docs/console/metrics/images/shiva_metric_014.png'
import grafanaDashboards_003 from '@site/docs/console/metrics/images/grafana_dashboards_003.png'
import grafanaDashboards_004 from '@site/docs/console/metrics/images/grafana_dashboards_004.png'
import grafanaDashboards_002 from '@site/docs/console/metrics/images/grafana_dashboards_002.png'
import grafanaDatasourceHttp from '@site/docs/console/metrics/images/grafana_datasource_http.png'
import grafanaDatasourceAuth from '@site/docs/console/metrics/images/grafana_datasource_auth.png'
import grafanaDatasourceBasicAuthDetails from '@site/docs/console/metrics/images/grafana_datasource_basic_auth_details.png'
import grafanaDatasourceAlerting from '@site/docs/console/metrics/images/grafana_datasource_alerting.png'
import grafanaDatasourceWorking from '@site/docs/console/metrics/images/grafana_datasource_working.png'
import grafanaDashboards_001 from '@site/docs/console/metrics/images/grafana_dashboards_001.png'

La majorité des clients __Cloud Temple__ disposent d'outils de visualisation, de monitoring et de métrologie pour le suivi de leurs opérations.

La philosophie de la Console est de permettre l'accès à la donnée afin de s'intégrer dans cet outillage via un proxy prometheus intégré.

Ce proxy vous permet de requêter et manipuler les donnes depuis un outil de visualisation comme [Grafana](https://grafana.com).

Il est cependant possible de visualiser certaines données de performances de vos ressources Cloud dans l'interface web de la Console.

*__Nota :__ La philosophie __Cloud Temple__ n'est pas d'intégrer uniquement des graphiques dans l'interface web, mais aussi d'offrir le maximum d'informations accessibles par l'API*

## Tableaux de bord intégrés à l'interface web

*__Nota :__ Pour accéder à ces dashboards, il est nécessaire de posséder le droit __'metric_read'__*

### Vue globale

La page d'accueil de la Console affiche le dashboard principal, présentant l'ensemble des métriques qui permettent un état des lieux de chaque produits auquels vous avez souscrit sur votre périmètre. En cas de problème(s) sur vos produits VMware et/ou OpenIaaS, des alertes seront visibles, la couleur est liée à leur importance.

Ces alertes sont clicables, et redirigent vers la page produit concerné.

<img src={shivaHome} />

### Métriques VMware - Vue globale

Dans le menu __'VMware'__, un tableau de bord spécifique est disponible dans le sous menu __'Métriques'__. Il regroupe 4 onglets :

#### Aperçu

Sur cet onglet, on retrouve une partie des métriques déjà présentes dans le dashboard global abordé en début de ce chapitre.

<img src={shivaMetric_000} />

#### Calcul

Sur cet onglet, on retrouve le nombre d'__AZ__, de __Clusters__, d'__ESXs__, l'__émission carbone__, l'__estimation de la consommation__, ainsi que 7 graphiques
dressant un état des lieux très visuel de votre environnement VMware. L'estimation de la consommation en kw/h est calculée sur la moyenne des relevés couvrant la période choisie, rapportée à une heure.

Vous pouvez choisir l'intervalle de dates à couvrir, ainsi que le type de regroupement de données (par défaut, les données sont regroupées pour l'ensemble de votre périmètre). En choisissant __Host__ par ex:

<img src={shivaMetric_001} />

<img src={shivaMetric_002} />

Au passage de la souris sur chacun des graphs, les détails des noms de resources et leurs valeurs sont présentées. Au clic sur ces mêmes graphs, une petite tooltip s'ouvre, et vous permez de consulter plus facilement les détails correspondant à la date cliquée :
<img src={shivaMetric_014} />

#### Stockage

De la même manière que sur l'onglet "Calcul", on retrouve différentes informations : le nombre d'__AZ__, de __datastore clusters__, de __datastores__ ainsi que 2 graphiques. Le même principe de filtres s'applique, mais ici, nous pouvons grouper par __Cluster SDRS__ et __Datastore__.

<img src={shivaMetric_004} />

#### Machines virtuelles

On retrouve ici une vue globale de la santé des machines virtuelles.

Cette synthèse donne, sur la plage de temps sélectionnée :

- le nombre de CPU et la __moyenne d'utilisation CPU__,
- le nombre de Go de mémoire et la __moyenne d'usage de la mémoire__,
- Les moyennes de __latence d'accès au stockage__ en lecture et en écriture,
- Le __'CPU Ready'__ moyen de la machine virtuelle (ce qui correspond au temps moyen d'attente de disponibilité d'un core physique par la machine virtuelle).

<img src={shivaMetric_006} />

Pour chaque VM, vous pouvez accéder à l'historique de ses performances en cliquant sur l'icône vert __'Historique'__ de la machine virtuelle dans la colonne action. :

<img src={shivaMetric_003} />

Vous accédez alors à la page de visualisation graphique des données historisée, incluant une vue __performance environnementale__ :

<img src={shivaMetric_007} />

### Métriques VMware - Vue par resource

Il est possible de consulter également une partie des métriques liées à VMware, mais cette fois plus spécifiquement pour un __Host__ ou un __Datastore__ donné.

#### Host

Dans la vue d'un Host, on peut consulter pour une période donnée, la __consommation énergétique__ ainsi que l'estimation d'__émissions de carbone__.

<img src={shivaMetric_008} />

#### Datastore

Dans la vue d'un Datastore, on peut consulter pour une période donnée les __IOPS__.

<img src={shivaMetric_009} />

### Métriques OpenIaaS

Dans le menu __'OpenIaaS'__, un tableau de bord spécifique est disponible dans le sous menu __'Métriques'__. Il regroupe 3 onglets :

#### Aperçu

Sur cet onglet, on retrouve une partie des métriques déjà présentes dans le dashboard global abordé en début de ce chapitre.

<img src={shivaMetric_010} />

#### Calcul

Sur cet onglet, on retrouve le nombre d'__AZ__, de __Clusters__, d'__Hosts__, ainsi que 5 graphiques
dressant un état des lieux très visuel de votre environnement OpenIaaS.

Vous pouvez choisir l'intervalle de dates à couvrir, ainsi que le type de regroupement de données (par défaut, les données sont regroupées pour l'ensemble de votre périmètre). En choisissant __Host__ par ex:

<img src={shivaMetric_011} />

<img src={shivaMetric_012} />

#### Stockage

De la même manière que sur l'onglet "Calcul", on retrouve différentes informations : le nombre d'__AZ__, de __Clusters__, de __Datastores__ ainsi qu'un graphique. Le même principe de filtres s'applique, mais ici, nous pouvons grouper par __Block Storage__.

<img src={shivaMetric_013} />

## Utilisation avec __Grafana__

Intégration de la Console avec Grafana

La Console de Cloud Temple peut être utilisée comme datasource pour votre infrastructure [Grafana](https://grafana.com/).

La console est compatible Prometheus, ce qui permet de l’ajouter dans Grafana en tant que datasource de type Prometheus. Vous pourrez ainsi :

- Visualiser l’ensemble de vos métriques.
- Créer vos propres dashboards personnalisés adaptés à vos besoins.

Cloud Temple met également à disposition une [collection de dashboards](https://github.com/Cloud-Temple/console-grafana-iaas) prêts à l’emploi, que vous pouvez utiliser comme base ou adapter selon vos cas d’usage.

<img src={grafanaDashboards_003} />

<img src={grafanaDashboards_004} />

<img src={grafanaDashboards_002} />

### Configurer la Console en tant que datasource dans Grafana

L'objectif est d'enrichir l'observabilité de votre infrastructure Cloud via la métrologie Cloud Temple.

#### Prérequis

- Une instance Grafana ayant accès aux API de la Console.
- Un accès d'administration sur l'instance Grafana afin de pouvoir configurer les *datasources*.
- Un personal access token possédant au moins le droit `metrics_read`.

#### Configuration

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

#### Résultat

Afin de confirmer que la configuration est correcte et fonctionnelle, appuyez sur le bouton "__Save & test__".

Vous devriez voir s'afficher un bandeau vous informant que la configuration a réussie.

<img src={grafanaDatasourceWorking} />

Vous trouverez tout un ensemble d'exemple de configuration pour Grafana ici : [https://github.com/Cloud-Temple/console-grafana-iaas](https://github.com/Cloud-Temple/console-grafana-iaas)

<img src={grafanaDashboards_001} />
