---
title: Using WinSCP
---
import S3Winscp_001 from '../images/S3_winscp_001.png'
import S3Winscp_002 from '../images/S3_winscp_002.png'

You can use [Winscp (version 6.3 or higher)](https://winscp.net/eng/download.php) to connect to your object storage.

### 1. Connection Configuration

In the connection window, select the `Amazon S3` protocol. Then enter your endpoint (endpoint) in the 'Hostname' field, as well as your access key and secret key.

<img src={S3Winscp_001} />

### 2. File Management

Once connected, you can interact with your buckets and files as you would do for a traditional FTP or SCP site.

<img src={S3Winscp_002} />