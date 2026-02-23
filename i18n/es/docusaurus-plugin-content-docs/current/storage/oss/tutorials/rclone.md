---
title: Copiar y sincronizar con Rclone
---

[Rclone](https://rclone.org/) es una herramienta de línea de comandos de código abierto que permite copiar y sincronizar archivos hacia muchos servicios de almacenamiento en la nube, incluidos los almacenamientos compatibles con S3. Es especialmente adecuado para copias de seguridad, migraciones de datos y sincronización de directorios.

:::caution Versión requerida
Asegúrese de utilizar una **versión reciente de Rclone** para garantizar la compatibilidad con el almacenamiento objeto Cloud Temple. Puede verificar su versión con `rclone version`.
:::

## Requis

- Una cuenta de almacenamiento S3 de Cloud Temple con las claves de acceso (Access Key y Secret Key).
- El endpoint S3 de su cuenta (disponible en la [consola Cloud Temple](../../console/console.md)).

## Instalación de Rclone

En Linux/macOS, instale Rclone con el script oficial:

```bash
curl https://rclone.org/install.sh | sudo bash
```

En otros sistemas, consulta la [documentación de instalación oficial](https://rclone.org/install/).

Verifica la instalación:

```bash
rclone version
```

## Configuración

Cree el archivo de configuración de Rclone para su almacenamiento S3 Cloud Temple:

```bash
mkdir -p ~/.config/rclone
cat > ~/.config/rclone/rclone.conf <<EOF
[cloudtemple-s3]
type = s3
provider = Other
access_key_id = SU_CLAVE_DE_ACCESO
secret_access_key = SU_CLAVE_SECRETA_DE_ACCESO
endpoint = https://SU_CUENTA.s3.fr1.cloud-temple.com/
EOF
```

:::tip
Reemplace `SU_CLAVE_DE_ACCESO`, `SU_CLAVE_SECRETA_DE_ACCESO` y `SU_CUENTA` por sus datos reales, disponibles en la consola Cloud Temple en la sección **Almacenamiento de objetos > Cuentas de almacenamiento**.
:::

Puede verificar su configuración:

```bash
cat ~/.config/rclone/rclone.conf
```

## Verificación de la conexión

Enumere sus buckets para verificar que la conexión funciona:

```bash
rclone lsd cloudtemple-s3:
```

Enumere los archivos de un bucket:

```bash
rclone ls cloudtemple-s3:nombre-del-bucket
```

## Copiar archivos (`copy`)

El comando `rclone copy` copia los archivos de origen hacia el destino **sin eliminar los archivos existentes** en el destino.

### Prueba en modo simulación (dry-run)

Antes de realizar cualquier operación, pruebe con `--dry-run` para ver qué se hará sin modificar nada:

```bash
rclone copy /data/backup cloudtemple-s3:nom-du-bucket/ --dry-run --verbose
```

### Copia efectiva

```bash
rclone copy /data/backup cloudtemple-s3:nom-du-bucket/ --verbose
```

## Sincronizar archivos (`sync`)

El comando `rclone sync` hace que el destino sea **idéntico** a la fuente. Los archivos presentes en el destino pero ausentes en la fuente serán **eliminados**.

:::danger Atención
`rclone sync` **elimina** archivos del destino que ya no existen en la fuente. Siempre prueba con `--dry-run` antes de ejecutar el comando.
:::

### Prueba en modo simulación

```bash
rclone sync /data/backup cloudtemple-s3:nombre-del-bucket/ --dry-run --verbose
```

### Sincronización efectiva

```bash
rclone sync /data/backup cloudtemple-s3:nombre-del-bucket/ --delete-during --verbose
```

## Opciones útiles

| Opción | Descripción |
|--------|-------------|
| `--dry-run` | Simula la operación sin modificar nada |
| `--verbose` | Muestra los detalles de las operaciones |
| `--progress` | Muestra una barra de progreso en tiempo real |
| `--transfers N` | Número de transferencias paralelas (por defecto: 4) |
| `--bwlimit RATE` | Limita el ancho de banda (por ejemplo, `10M` para 10 MB/s) |
| `--exclude PATTERN` | Excluye archivos según un patrón (por ejemplo, `*.tmp`) |
| `--min-age DURÉE` | Solo transfiere archivos más antiguos que la duración especificada |

### Ejemplo con opciones avanzadas

```bash
rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ \
  --transfers 8 \
  --bwlimit 50M \
  --exclude "*.tmp" \
  --exclude ".cache/**" \
  --progress \
  --verbose
```

## Automatización con cron

Para automatizar una copia de seguridad diaria, añada una entrada cron:

```bash
```

# Daily backup at 2 AM
0 2 * * * rclone sync /data/backup cloudtemple-s3:bucket-name/ --log-file=/var/log/rclone-backup.log --log-level INFO
```