---
title: Tutoriels
---

## Utiliser MINIO

Puede utilizar el cliente minio por ejemplo:

https://min.io/docs/minio/linux/reference/minio-mc.html

Por ejemplo:
```
    mc alias set <alias_name> https://reks2ee2b1.s3.fr1.cloud-temple.com <access_key> <secret_key>
```
Subir un archivo:
```
    mc cp test.txt <alias_name>/<bucket_name>
```
Recuperar un archivo:
```
    mc ls <alias_name>/<bucket_name>
```
## Cloud Berry Explorer

también puede utilizar [Cloud Berry Explorer](https://www.msp360.com/explorer/).

1. Conéctese usando su endpoint y su clave:

![](images/S3_cloudberry_001.png)

2. Una vez conectado, ingrese el nombre del bucket en la barra de navegación:

![](images/S3_cloudberry_002.png)

3. Entonces podrá usar el bucket normalmente:

![](images/S3_cloudberry_003.png)

## Utiliser WINSCP 6.3.x

Puede utilizar [Winscp](https://winscp.net/eng/download.php):

1. Conéctese usando su endpoint, su clave de acceso y su clave secreta:

![](images/S3_winscp_001.png)

2. Una vez conectado, use WINSCP normalmente como un sitio FTP o SCP:

![](images/S3_winscp_002.png)


## Añadir el HASH de un archivo al subir un objeto

Globalmente, el HASH de los archivos es soportado en nuestro almacenamiento de objetos mediante metadatos. Algunos clientes permiten calcular al vuelo un HASH y añadirlo como metadato (minio-mc con md5 por ejemplo), para otros, hay que especificar el dato como metadato directamente.

1. Caso de añadir un HASH con el cliente minio-mc: este cliente soporta el cálculo al vuelo de un hash MD5 y su almacenamiento en los metadatos


            ╰─➤  cat test.txt                       
            Ceci est un test 
            ╰─➤  md5 test.txt                       
            MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83
            ╰─➤  mc cp -md5 test.txt CLR-PUB/CLR-PUB
            ...lesur/Downloads/test.txt: 18 B / 18 B  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  111 B/s 0s
            ╰─➤  mc stat CLR-PUB/CLR-PUB/test.txt
            Name      : test.txt
            Date      : 2024-06-08 10:21:31 CEST 
            Size      : 18 B   
            ETag      : 8b34b2754802a46e3475998dfcf76f83 
            Type      : file 
            Encryption: SSE-S3
            Metadata  :
                Content-Type: text/plain 

2. Ejemplo de añadir un sha256 "manualmente": para ello usamos los atributos S3 del archivo.

            ╰─➤  cat test.txt
            Ceci est un test
            ╰─➤  shasum -a 256 test.txt                            
            2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt
            ╰─➤  mc cp -md5 test.txt CLR-PUB/CLR-PUB -attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
            ...lesur/Downloads/test.txt: 18 B / 18 B  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  141 B/s 0s
            ╰─➤  mc stat CLR-PUB/CLR-PUB/test.txt                                                                     
            Name      : test.txt
            Date      : 2024-06-08 10:41:17 CEST 
            Size      : 18 B   
            ETag      : 8b34b2754802a46e3475998dfcf76f83 
            Type      : file 
            Encryption: SSE-S3
            Metadata  :
                X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682 
                Content-Type              : text/plain