---
title: Usar WinSCP
---
import S3Winscp_001 from '../images/S3_winscp_001.png'
import S3Winscp_002 from '../images/S3_winscp_002.png'

Puede usar [Winscp (versión 6.3 o superior)](https://winscp.net/eng/download.php) para conectarse a su almacenamiento objeto.

### 1. Configuración de la conexión

En la ventana de conexión, seleccione el protocolo `Amazon S3`. Luego, ingrese su punto de terminación (endpoint) en el campo "Nombre de host", así como su clave de acceso y su clave secreta.

<img src={S3Winscp_001} />

### 2. Gestión de archivos

Una vez conectado, puedes interactuar con tus buckets y archivos como lo harías con un sitio FTP o SCP clásico.

<img src={S3Winscp_002} />