---
title: Despliegue desde una plantilla
tags:
  - iaas_vmware
  - tutoriales
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

Este guía le permitirá desplegar sus primeras instancias en menos de 5 minutos en el Cloud de Confianza.

## __Requisitos__

1. Haber suscrito la oferta Cloud Temple (suscripción a la oferta IaaS).
2. Tener activadas las permisos para el controlador de objetos __'IaaS'__

## Desplegar una máquina virtual desde una plantilla

Este guía le muestra paso a paso cómo desplegar una máquina virtual desde una plantilla en la consola Shiva.

En el portal Shiva, vaya a la pestaña "Cloud de Confianza", luego a "Catálogos". Antes de poder desplegar una plantilla, esta debe estar cargada en su catálogo privado, en la pestaña "Mi catálogo".

Para ello, tiene dos opciones: importar su propia plantilla directamente en su catálogo privado o bien importar un modelo desde el catálogo público de Cloud Temple.

### Importar una plantilla personal en el catálogo privado

En la pestaña "Mi catálogo", haga clic en "Publicar archivos".

<img src={shivaCatalogsCharger} />

Siga luego los pasos de publicación de la plantilla, ingresando su nombre y una descripción, y eligiendo su ubicación en una biblioteca.

La plantilla debe aparecer luego en su catálogo privado.

### Importar una plantilla desde el catálogo público

En la pestaña "Catálogo público", haga clic en el botón "Añadir a mi catálogo" de la plantilla que desee para importarla a su catálogo privado. Esta debe aparecer luego en su catálogo privado.
<img src={shivaCatalogsAjout} />

### Desplegar la plantilla

Una vez importada la plantilla a su catálogo privado, puede desplegarla haciendo clic en "Desplegar".

<img src={shivaCatalogsDeployer} />

Siga luego los diferentes pasos de despliegue de la recurso, seleccionando su ubicación física (datacenter, cluster de cálculo, datastore) y otros parámetros de configuración opcionales.