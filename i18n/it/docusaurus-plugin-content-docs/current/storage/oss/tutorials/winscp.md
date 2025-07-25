---
title: Utilizzare WinSCP
---
import S3Winscp_001 from '../images/S3_winscp_001.png'
import S3Winscp_002 from '../images/S3_winscp_002.png'

È possibile utilizzare [Winscp (versione 6.3 o superiore)](https://winscp.net/eng/download.php) per connettersi al tuo storage oggetti.

### 1. Configurazione della connessione

Nella finestra di connessione, selezionate il protocollo `Amazon S3`. Inserite quindi il vostro endpoint (endpoint) nel campo "Nome dell'host", così come la vostra chiave di accesso e la vostra chiave segreta.

<img src={S3Winscp_001} />

### 2. Gestione dei file

Dopo esserti connesso, puoi interagire con i tuoi bucket e i tuoi file come faresti per un sito FTP o SCP classico.

<img src={S3Winscp_002} />