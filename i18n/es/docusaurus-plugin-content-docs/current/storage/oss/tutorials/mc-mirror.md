---
title: Sincronizar un directorio con mc mirror
---

El comando `mc mirror` es una herramienta poderosa para sincronizar el contenido de un directorio local con un bucket S3. Puede transferir los archivos nuevos o modificados y, opcionalmente, eliminar los archivos del bucket que ya no existan localmente. Es una forma eficiente de mantener copias de seguridad o desplegar un sitio estático.

No olvide configurar su [cliente MinIO según lo indicado en la guía de inicio](../quickstart.md).

### Ejemplo básico

Para sincronizar el contenido del directorio local `./mon-site` hacia el bucket `demo-app` en su alias `cloudtemple-fr1`:

```bash
❯ mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Opciones útiles

* `--overwrite`: Fuerza el reemplazo de los archivos existentes en el destino, incluso si son más recientes.
* `--remove`: Elimina los archivos del destino que ya no existen en el directorio fuente. **Utilizar con precaución**, ya que esto puede causar una pérdida de datos irreversible.

```bash
# Sincronización completa con eliminación de archivos remotos obsoletos
❯ mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/
```
