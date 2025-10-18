---
title: Agregar el HASH de un archivo (Checksum)
---

El servicio de Almacenamiento de Objetos de Cloud Temple admite la verificación de la integridad de los archivos mediante metadatos (checksums). Algunos clientes, como `mc`, pueden calcular y adjuntar este hash automáticamente, mientras que para otros, es necesario especificarlo manualmente.

### 1. Cálculo automático del MD5 con `mc`

El cliente MinIO (`mc`) puede calcular un hash MD5 en tiempo real y adjuntarlo al objeto durante la carga. El hash es visible luego en el campo `ETag` de las metadatos del objeto.

```bash
```

# Cálculo del MD5 local para verificación
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# Subida del archivo con cálculo del MD5
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Verificación de los metadatos del objeto
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Nombre    : test.txt
Fecha     : 2024-06-08 10:21:31 CEST
Tamaño    : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Tipo      : archivo
Cifrado   : SSE-S3
Metadatos :
    Content-Type: text/plain
```
El `ETag` coincide correctamente con el hash MD5 del archivo local.

### 2. Adición manual de un hash SHA-256

También puede agregar manualmente un hash (por ejemplo, SHA-256) como atributo S3 durante la carga.

```bash
```

# Cálculo del SHA-256 local
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# Carga del archivo pasando el hash como atributo
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
El hash SHA-256 ahora está presente en las metadatos personalizadas del objeto.