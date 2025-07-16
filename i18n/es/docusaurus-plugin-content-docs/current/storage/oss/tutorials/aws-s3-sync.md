---
title: Sincronizar un directorio con AWS CLI
---

De manera similar a `mc`, el CLI de AWS proporciona el comando `aws s3 sync` para sincronizar directorios. Este comando compara el contenido del directorio de origen y el bucket de destino para transferir solo los archivos nuevos o modificados.

No olvide configurar su [cliente AWS como se indica en el guía de inicio](../quickstart.md#configurer-votre-client-aws-aws) y utilizar el parámetro `--endpoint-url`.

### Ejemplo básico

Para sincronizar el contenido del directorio local `./mon-site` hacia el bucket `s3://demo-app` :

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Opciones útiles

*   `--delete` : Elimina los archivos del bucket que ya no existen en el directorio local. Es el equivalente a la opción `--remove` de `mc mirror`.
*   `--exact-timestamps` : Durante la sincronización, no copia el archivo si la marca de tiempo de modificación es la misma.
*   `--dryrun` : Muestra las operaciones que se realizarían sin ejecutarlas realmente. Muy útil para verificar un comando antes de ejecutarlo.

```bash
```

# Simulación de una sincronización con eliminación para verificar los cambios
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(dryrun) eliminar: s3://demo-app/old-file.html
(dryrun) subir: mon-site/new-file.css a s3://demo-app/new-file.css