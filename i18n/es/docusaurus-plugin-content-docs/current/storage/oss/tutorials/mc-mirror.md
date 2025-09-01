---
title: Sincronizar un directorio con mc mirror
---

La comando `mc mirror` es una herramienta poderosa para sincronizar el contenido de un directorio local con un bucket S3. Puede transferir nuevos o modificados archivos, y opcionalmente eliminar los archivos del bucket que no existan localmente. Es una forma eficiente de mantener copias de seguridad o desplegar un sitio estático.

No olvides configurar tu [cliente MinIO según lo indicado en el guía de inicio](../quickstart.md).

### Traducción al español (Español)

Para sincronizar el contenido del directorio local `./mon-site` hacia el bucket `demo-app` en tu alias `cloudtemple-fr1`:

```bash
❯ mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Opciones útiles

*   `--overwrite`: Reemplaza los archivos existentes en la destino, incluso si son más recientes.
*   `--remove`: Elimina los archivos de la destino que no existen en el directorio fuente. **Utilizar con precaución**, ya que esto puede causar una pérdida de datos irreversible.

# Sincronización completa con eliminación de archivos remotos obsoletos
> mc mirror --eliminar ./mon-sitio/ cloudtemple-fr1/demo-app/