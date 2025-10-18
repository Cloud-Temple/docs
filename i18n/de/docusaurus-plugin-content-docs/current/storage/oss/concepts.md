---
title: Objektspeicher-Konzepte
sidebar_position: 2
---

# Object Storage Concepts (OSS)

## Technical Architecture

The Cloud Temple object storage service is built on a distributed architecture that ensures high data durability and availability. Objects are redundantly stored across multiple storage nodes within our SecNumCloud-certified data centers.

Access to the service is provided through a standard RESTful API, compatible with the S3 protocol, enabling you to use a wide range of existing tools and SDKs.

## Hauptkomponenten

-   **Objekte**: Die grundlegenden Daten, die im Dienst gespeichert werden. Ein Objekt besteht aus Daten (der eigentliche Dateiinhalt) und Metadaten (beschreibende Informationen über das Objekt).
-   **Buckets (Container)**: Objekte werden in Buckets organisiert. Ein Bucket ist ein Container für Objekte, und sein Name muss innerhalb des Dienstes eindeutig sein.
-   **Schlüssel**: Jedes Objekt innerhalb eines Buckets wird eindeutig durch einen Schlüssel (einen Dateinamen) identifiziert.
-   **Endpunkte**: Regionale URLs, die Sie zum Zugriff auf die API des Speicherdienstes verwenden.

## Security and Encryption

The security of your data is our absolute priority. The OSS service integrates robust encryption mechanisms to protect your data, whether it is stored (at rest) or transmitted over the network.

### Verschlüsselung von Daten im Ruhezustand (Data at Rest Encryption - D@RE)

Um Ihre gespeicherten Daten zu schützen, verwendet unser Dienst Server-seitige Verschlüsselung.

-   **Aktivierung**: Die D@RE-Verschlüsselung ist auf Ebene des *Namespace* (Namensraum) aktiviert.
-   **Algorithmus**: Wir verwenden den Algorithmus **AES-256**, einen der sichersten verfügbaren Verschlüsselungsstandards.
-   **Funktionsweise**: Wenn Sie ein Objekt in einem Bucket schreiben, in dem D@RE aktiviert ist, verschlüsselt der Dienst Ihre Daten automatisch, bevor sie auf die Festplatten geschrieben werden. Beim Lesen des Objekts wird es transparent für Sie entschlüsselt. Die Verwaltung der Verschlüsselungsschlüssel erfolgt vollständig durch den Dienst.

### Datenverschlüsselung im Transit

Alle Kommunikationen mit der API des Objektspeicherdienstes – egal ob zum Hochladen, Herunterladen oder Verwalten Ihrer Daten – müssen sicher sein.

-   **Protokoll**: Wir verlangen die Verwendung des **TLS-Protokolls (Transport Layer Security)**, Versionen **1.2 und 1.3**.
-   **Funktionsweise**: Durch die Verwendung von HTTPS für alle Ihre API-Anfragen stellen Sie sicher, dass die zwischen Ihrem Client und unseren Servern ausgetauschten Daten verschlüsselt sind und somit vor Abhörung oder Manipulation während der Übertragung im Netzwerk geschützt sind.