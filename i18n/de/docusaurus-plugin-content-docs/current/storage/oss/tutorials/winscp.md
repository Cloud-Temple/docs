---
title: WinSCP verwenden
---
import S3Winscp_001 from '../images/S3_winscp_001.png'
import S3Winscp_002 from '../images/S3_winscp_002.png'

Sie können [Winscp (Version 6.3 oder höher)](https://winscp.net/eng/download.php) verwenden, um sich mit Ihrem Objektspeicher zu verbinden.

### 1. Verbindungskonfiguration

In der Verbindungsfläche wählen Sie das Protokoll `Amazon S3` aus. Geben Sie anschließend Ihren Endpunkt (Endpoint) im Feld "Hostname" sowie Ihre Zugangsschlüssel und Ihren geheimen Schlüssel ein.

<img src={S3Winscp_001} />

### 2. Dateiverwaltung

Nach der Verbindung können Sie mit Ihren Buckets und Dateien interagieren, wie Sie es bei einem klassischen FTP- oder SCP-Server tun würden.

<img src={S3Winscp_002} />