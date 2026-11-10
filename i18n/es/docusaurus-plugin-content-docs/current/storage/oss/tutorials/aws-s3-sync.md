---
title: Sincronizar un directorio con AWS CLI
---

Al igual que `mc`, la herramienta AWS CLI ofrece el comando `aws s3 sync` para sincronizar directorios. Este comando compara el contenido del directorio fuente y el bucket de destino para transferir solo los archivos nuevos o modificados.

No olvide configurar su [cliente AWS según lo indicado en la guía de inicio](../quickstart.md) y utilizar el parámetro `--endpoint-url`.

### Ejemplo básico

Para sincronizar el contenido del directorio local `./mon-sitio` hacia el bucket `s3://demo-app`:

```bash
❯ aws s3 sync ./mon-sitio/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Opciones útiles

* `--delete`: Elimina los archivos del bucket que ya no existen en el directorio local, equivalente a la opción `--remove` de `mc mirror`.
* `--exact-timestamps`: Durante la sincronización, copia solo el archivo si la hora de modificación es diferente.
* `--dryrun`: Muestra las operaciones que se realizarían sin ejecutarlas realmente. Muy útil para verificar un comando antes de ejecutarlo.

```bash
# Simulación de sincronización con eliminación para verificar los cambios
❯ aws s3 sync ./mon-sitio/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(dryrun) delete: s3://demo-app/antiguo-archivo.html
(dryrun) upload: mon-sitio/nuevo-archivo.css to s3://demo-app/nuevo-archivo.css
```
