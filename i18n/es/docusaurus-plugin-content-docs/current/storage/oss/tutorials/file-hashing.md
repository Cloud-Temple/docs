---
title: Añadir el HASH de un archivo (Checksum)
---

El servicio de Almacenamiento de objetos de Cloud Temple admite la verificación de la integridad de los archivos mediante los metadatos (checksums). Algunos clientes, como `mc`, pueden calcular y adjuntar este hash automáticamente, mientras que para otros es necesario especificarlo manualmente.

### 1. Cálculo automático del MD5 con `mc`

El cliente MinIO (`mc`) puede calcular en tiempo real un hash MD5 y adjuntarlo al objeto durante la carga. El hash luego es visible en el campo `ETag` de los metadatos del objeto.

```bash


# Cálculo local del MD5 para verificación
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# Upload del archivo con cálculo del MD5
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Verificación de los metadatos del objeto
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Date      : 2024-06-08 10:21:31 CEST
Size      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Type      : file
Encryption: SSE-S3
Metadata  :
    Content-Type: text/plain
```

El `ETag` corresponde efectivamente al hash MD5 del archivo local.

### 2. Adición manual de un hash SHA-256

También puede añadir manualmente un hash (por ejemplo, SHA-256) como atributo S3 durante la carga.

```bash
# Cálculo local del SHA-256
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# Upload del archivo pasando el hash como atributo
❯ mc cp test.txt cloudtemple-fr1/demo-app/ --attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
...test.txt: 18 B / 18 B [================] 100.00% 141 B/s 0s

# Verificación de metadatos
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Date      : 2024-06-08 10:41:17 CEST
Size      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Type      : file
Encryption: SSE-S3
Metadata  :
    X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682
    Content-Type              : text/plain
```

El hash SHA-256 ahora está presente en los metadatos personalizados del objeto.

### 3. Resolver los errores `XAmzContentSHA256Mismatch` con AWS CLI o Terraform

#### Origen del problema

Los errores del tipo `XAmzContentSHA256Mismatch` pueden producirse tras una modificación del comportamiento predeterminado del SDK de AWS respecto al cálculo de los checksums. Este SDK se utiliza tanto en AWS CLI como en Terraform.

#### Versiones afectadas

- **AWS CLI**: Versión 2.23.0 y posteriores
- **Terraform**: Versión 1.11.2 y posteriores

Estas versiones incluyen un SDK de AWS que incluye automáticamente el encabezado `x-amz-checksum-mode` y calcula checksums CRC32 para las cargas, lo cual puede entrar en conflicto con la configuración del servidor de almacenamiento objeto.

#### Solución 1: Variable de entorno (Recomendada)

La solución más sencilla consiste en desactivar este nuevo comportamiento mediante una variable de entorno.

Para **AWS CLI**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED aws s3 cp archivo.txt s3://mi-bucket/
```

Para **Terraform**:

```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED terraform apply
```

Para hacer que este parámetro sea permanente en su sesión de shell:

```bash
export AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED
```

#### Solución 2: Configuración en el perfil de AWS (para AWS CLI)

Puede configurar este parámetro de forma permanente en su perfil de AWS CLI.

1. Abra su archivo de configuración de AWS: `~/.aws/config`
2. Agregue el siguiente parámetro en su perfil:

```ini
[default]
request_checksum_calculation = WHEN_REQUIRED
```

Esta solución es ideal si utiliza con frecuencia la CLI de AWS.

#### Solución 3: Reversión de versión (No recomendado)

Como último recurso, puede volver a una versión anterior de las herramientas.

Para **AWS CLI**, vuelva a la versión 2.22.35:

```bash
pip install awscli==2.22.35
```

Para **Terraform**, vuelva a la versión 1.11.1.

#### Verificación

Para confirmar que su solución funciona, ejecute un comando simple:

```bash
aws s3 ls
# o
terraform plan
```

Si los comandos se ejecutan sin error de checksum, el problema está resuelto.
