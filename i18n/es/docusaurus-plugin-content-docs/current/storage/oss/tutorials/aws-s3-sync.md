---
título: Sincronizar un directorio con AWS CLI
---

Al igual que `mc`, la herramienta AWS CLI ofrece la comando `aws s3 sync` para sincronizar directorios. Esta comando compara el contenido del directorio fuente y el bucket de destino para transferir solo los archivos nuevos o modificados.

No olvides configurar tu [cliente AWS según lo indicado en el guía de inicio](../quickstart.md) y utilizar el parámetro `--endpoint-url`.

### Exemple de traduction en español

Para sincronizar el contenido del directorio local `./mon-sitio` hacia el bucket `s3://demo-app`:

```bash
❯ aws s3 sync ./mon-sitio/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Opciones útiles

*   `--delete`: Elimina los archivos del bucket que no existen en el directorio local, equivalente a la opción `--remove` de `mc mirror`.
*   `--exact-timestamps`: Durante la sincronización, copia solo el archivo si la hora de modificación es diferente.
*   `--dryrun`: Mostró las operaciones que se realizarían sin ejecutarlas realmente. Muy útil para verificar una comanda antes de ejecutarla.

# Simulación de sincronización con eliminación para verificar cambios
❯ aws s3 sync ./mon-sitio/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(después del dry run) eliminación: s3://demo-app/antiguo-archivo.html
(después del dry run) carga: mon-sitio/nuevo-archivo.css a s3://demo-app/nuevo-archivo.css