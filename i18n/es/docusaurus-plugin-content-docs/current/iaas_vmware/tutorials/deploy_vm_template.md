---
title: Despliegue desde una plantilla
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

Esta guía le permitirá desplegar sus primeras instancias en menos de 5 minutos en el Cloud de Confianza.

## __Prerrequisitos__

1. Haber suscrito a la oferta Cloud Temple (suscripción a la oferta IaaS).
2. Tener los permisos activados para el piloto de los objetos __'IaaS'__

## Desplegar una máquina virtual desde una Plantilla

Esta guía le muestra paso a paso cómo desplegar una máquina virtual desde una Plantilla en la consola Shiva.

En el portal Shiva, vaya a la pestaña "Cloud de confianza", luego "Catálogos". Antes de poder desplegar una Plantilla, ésta debe estar cargada en su catálogo privado, en la pestaña "Mi catálogo".

Para ello, tiene dos posibilidades: importar su propia Plantilla directamente en su catálogo privado o bien importar un modelo desde el catálogo público de Cloud Temple.

### Importar una Plantilla personal en el catálogo privado

En la pestaña "Mi catálogo", haga clic en "Publicar archivos".

<img src={shivaCatalogsCharger} />

Siga luego los pasos de publicación de la Plantilla, proporcionando su nombre y una descripción, y eligiendo su ubicación en una librería.

La Plantilla debe luego aparecer en su catálogo privado.

### Importar una Plantilla desde el catálogo público

En la pestaña "Catálogo público", haga clic en el botón "Añadir a mi catálogo" de la Plantilla de su elección para importarla en su catálogo privado. Ésta debe luego aparecer en su catálogo privado.
<img src={shivaCatalogsAjout} />

### Desplegar la Plantilla

Una vez que la Plantilla se haya importado a su catálogo privado, puede desplegarla haciendo clic en "Desplegar".

<img src={shivaCatalogsDeployer} />

Siga luego los distintos pasos de despliegue del recurso, seleccionando su ubicación física (datacenter, clúster de cálculo, datastore) y otros parámetros de configuración opcionales.