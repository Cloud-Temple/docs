---
title: Despliegue desde una plantilla
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from '@site/docs/iaas_vmware/tutorials/images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from '@site/docs/iaas_vmware/tutorials/images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from '@site/docs/iaas_vmware/tutorials/images/shiva_catalogs_deployer.png';

Esta guía le permitirá desplegar en menos de 5 minutos sus primeras instancias en la Nube de Confianza.

## __Requisitos previos__

1. Haber suscrito el producto Cloud Temple (suscripción al producto IaaS).
2. Tener los permisos habilitados para el controlador de objetos __'IaaS'__

## Desplegar una máquina virtual desde una plantilla

Esta guía le muestra paso a paso cómo desplegar una máquina virtual desde una plantilla en la Consola.

En el portal de la Consola, vaya a la pestaña "Nube de confianza" y luego a "Catálogos". Antes de poder desplegar una plantilla, esta debe cargarse en su catálogo privado, en la pestaña "Mi catálogo".

Para ello, tiene dos opciones: importar su propia plantilla directamente en su catálogo privado o bien importar un modelo desde el catálogo público de Cloud Temple.

### Importar una plantilla personal en el catálogo privado

En la pestaña "Mi catálogo", haga clic en "Publicar archivos".

<img src={shivaCatalogsCharger} />

A continuación, siga los pasos para publicar la plantilla, indicando su nombre y una descripción, y eligiendo su ubicación en una biblioteca.

La plantilla debe aparecer posteriormente en su catálogo privado.

### Importar una plantilla desde el catálogo público

En la pestaña "Catálogo público", haga clic en el botón "Agregar a mi catálogo" de la plantilla de su elección para importarla a su catálogo privado. Posteriormente, aparecerá en su catálogo privado.
<img src={shivaCatalogsAjout} />

### Desplegar la Plantilla

Una vez importada la plantilla en su catálogo privado, puede desplegarla haciendo clic en "Desplegar".

<img src={shivaCatalogsDeployer} />

A continuación, siga las diferentes etapas de despliegue del recurso, seleccionando su ubicación física (datacenter, cluster de cómputo, datastore) y otros parámetros de configuración opcionales.