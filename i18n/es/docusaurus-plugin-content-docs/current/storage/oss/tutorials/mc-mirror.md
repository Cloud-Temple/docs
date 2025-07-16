---
title: Sincronizar un directorio con mc mirror
---

El comando `mc mirror` es una herramienta poderosa para sincronizar el contenido de un directorio local en un bucket S3. Puede subir archivos nuevos o modificados, y opcionalmente eliminar los archivos del bucket que ya no existen localmente. Es un método eficaz para mantener una copia de seguridad o implementar un sitio web estático.

No olvide configurar su [cliente MinIO como se indica en el guía de inicio](../quickstart.md#configurer-votre-client-minio-mc).

### Ejemplo básico

Para sincronizar el contenido del directorio local `./mon-site` hacia el bucket `demo-app` en su alias `cloudtemple-fr1`:

```bash
❯ mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Opciones útiles

*   `--overwrite` : Forza el reemplazo de los archivos existentes en el destino, aunque sean más recientes.
*   `--remove` : Elimina los archivos del destino que ya no existen en el directorio de origen. **Usar con precaución**, ya que esto puede causar una pérdida de datos irreversible.

```bash
```

# Sincronización completa con eliminación de archivos obsoletos remotos
❯ mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/