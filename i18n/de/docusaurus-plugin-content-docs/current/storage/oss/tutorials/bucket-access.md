---
title: Verwaltung der Zugriffe auf S3-Buckets über die Cloud Temple-Konsole
---
import S3CustomAccess from '@site/docs/storage/oss/images/S3_access_custom.png'
import S3PrivateAccess from '@site/docs/storage/oss/images/S3_access_private.png'
import S3PublicAccess from '@site/docs/storage/oss/images/S3_access_public.png'

Die Konfigurationsoberfläche der Buckets bietet je nach gewünschter Art der IP-Beschränkung drei Modi für die Zugriffsverwaltung:

### **Öffentlicher Zugriff (Public)**

<img src={S3PublicAccess} />

- Funktionsweise: Es wird keine Beschränkung nach IP-Adressen angewendet.
- Folge: Der Bucket ist ohne Filterung von allen IP-Adressen aus erreichbar.

### **Privater Zugriff (Private, automatisch)**

<img src={S3PrivateAccess} />

- Funktionsweise: Alle dem Tenant zugewiesenen CIDR-Bereiche werden vom Editor automatisch hinzugefügt, ohne manuellen Eingriff.
- Besonderheit der Konsole: Die Netzwerkadressen (erste Adresse des Blocks) und Broadcast-Adressen (letzte Adresse des Blocks), die in einem IP-Netzwerk in der Regel reserviert sind, werden ebenfalls automatisch hinzugefügt.
- Folge: Der Benutzer muss sich nicht um diese Feinheiten kümmern; das Tool berücksichtigt alles.

### **Benutzerdefinierter Zugriff (Custom, manuell)**

<img src={S3CustomAccess} />

- Funktionsweise: Der Benutzer muss alle zuzulassenden CIDR-Bereiche sowie die Netzwerk- und Broadcast-Adressen explizit angeben.
- Beispiel: Wenn Sie das Präfix `80.75.153.200/29` zulassen möchten, müssen Sie zusätzlich die Adressen `80.75.153.200/32` (Netzwerkadresse) und `80.75.153.207/32` (Broadcast-Adresse) explizit hinzufügen, damit diese in die Zugriffsrichtlinie aufgenommen werden.
- Folge: Bietet volle Freiheit, erfordert aber eine vollständige und sorgfältige Konfiguration.

:::info

### Art der von Cloud Temple bereitgestellten CIDR-Präfixe

Alle von Cloud Temple bereitgestellten CIDR-Präfixe sind Routing-Präfixe (route prefixes). Das bedeutet, dass für diese Bereiche **alle von ihnen abgedeckten Adressen, einschließlich der Netzwerk- und Broadcast-Adressen, als gültige Zugriffsquellen** in der Richtlinie verwendet werden können. Deshalb nimmt der Editor der Konsole diese speziellen Adressen im Modus Private systematisch auf.

Diese Besonderheit unterscheidet Ihre Umgebung von bestimmten klassischen Netzwerken, in denen diese Adressen reserviert und nicht nutzbar sind.

:::
