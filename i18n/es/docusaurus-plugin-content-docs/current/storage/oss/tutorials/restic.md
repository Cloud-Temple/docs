---
title: Backup con Restic en Storage Objet (S3)
---

## Introducción

Restic es una herramienta de copia de seguridad rápida, segura y eficiente, compatible con múltiples backends, incluidos servicios tipo S3. Este tutorial te guiará paso a paso para configurar una copia de seguridad hacia un almacenamiento de objetos compatible con S3 (como AWS S3, MinIO, Wasabi, etc.).

## Requis

*   Un bucket S3 existente
*   Las credenciales de acceso (Access Key y Secret Key)
*   El nombre de la región (para AWS)
*   La URL del endpoint S3 (en caso de un proveedor no-AWS)
*   Restic instalado en su máquina

## Instalación de Restic

### Debian/Ubuntu

```bash
sudo apt update
sudo apt install restic
```

### macOS (mediante Homebrew)

```bash
brew install restic
```

### Windows

Descargar el binario desde: [https://github.com/restic/restic/releases](https://github.com/restic/restic/releases)

## Configuración de las variables de entorno

Antes de utilizar Restic con S3, debe configurar las siguientes variables:

```bash
export AWS_ACCESS_KEY_ID="su_clave_de_acceso"
export AWS_SECRET_ACCESS_KEY="su_clave_secreta"
export RESTIC_PASSWORD="su_contraseña"
```

Para un endpoint S3 personalizado (no de AWS), agregue también:

```bash
export RESTIC_REPOSITORY="s3:https://endpoint.personalizado:puerto/nombre_del_bucket"
```

Ejemplo:

```bash
export RESTIC_REPOSITORY="s3:https://s3.mipyme.local:9000/copia_de_seguridad"
```

## Inicializar el repositorio Restic

Una sola vez, inicialice el repositorio en el bucket:

```bash
restic init
```

## Hacer una copia de seguridad

Para hacer una copia de seguridad de un directorio:

```bash
restic backup /ruta/hacia/mi_directorio
```

## Listar las copias de seguridad

```bash
restic snapshots
```

## Restaurar una copia de seguridad

Restaurar la última copia de seguridad:

```bash
restic restore latest --target /ruta/restauracion
```

## Eliminar las copias de seguridad antiguas

Por ejemplo, mantener los últimos 7 instantáneos:

```bash
restic forget --keep-last 7 --prune
```

## Verificación de integridad

Para verificar que todo está en orden:

```bash
restic check
```

## Automatizar la copia de seguridad (cron)

Crear una tarea cron, por ejemplo todos los días a las 2:00:

```bash
0 2 * * * /usr/bin/restic backup /home/user/dossier >> /var/log/restic.log 2>&1
```

Asegúrese de que todas las variables de entorno estén exportadas en un archivo cargado por cron (por ejemplo: `/etc/restic.env`).

## Más información

*   Documentación oficial: [https://restic.readthedocs.io](https://restic.readthedocs.io)
*   Restic con otros backends: B2, Azure, Google Cloud, etc.

Este tutorial le proporciona una base sólida para integrar Restic en una política de copia de seguridad fiable, cifrada y compatible con almacenamientos modernos como S3.