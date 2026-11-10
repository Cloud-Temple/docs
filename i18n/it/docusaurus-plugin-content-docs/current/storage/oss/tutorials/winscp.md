---
title: Utilizzare WinSCP
---
import S3Winscp_001 from '@site/docs/storage/oss/images/S3_winscp_001.png'
import S3Winscp_002 from '@site/docs/storage/oss/images/S3_winscp_002.png'

È possibile utilizzare [Winscp (versione 6.3 o superiore)](https://winscp.net/eng/download.php) per connettersi al vostro storage oggetti.

### 1. Configurazione della connessione

Nella finestra di connessione, selezionate il protocollo `Amazon S3`. Inserite quindi il vostro endpoint (endpoint) nel campo "Nome dell'host", così come la vostra chiave di accesso e la vostra chiave segreta.

<img src={S3Winscp_001} />

### 2. Gestione dei file

Dopo esservi connessi, potete interagire con i vostri bucket e i vostri file come fareste per un sito FTP o SCP classico.

<img src={S3Winscp_002} />
