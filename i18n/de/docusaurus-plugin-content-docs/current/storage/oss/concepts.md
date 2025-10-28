---
title: Objektspeicher-Konzepte
sidebar_position: 2
---

# Object Storage Service (OSS) Concepts

## Technical Architecture

The Cloud Temple object storage service is built on a distributed architecture that ensures high data durability and availability. Objects are redundantly stored across multiple storage nodes within our SecNumCloud-certified data centers.

Access to the service is provided through a standard RESTful API, compatible with the S3 protocol, enabling you to use a wide range of existing tools and SDKs.

## Hauptkomponenten

-   **Objekte**: Die grundlegenden Daten, die im Dienst gespeichert werden. Ein Objekt besteht aus Daten (der eigentliche Dateiinhalt) und Metadaten (beschreibende Informationen über das Objekt).
-   **Buckets (Container)**: Objekte werden in Buckets organisiert. Ein Bucket ist ein Container für Objekte, und sein Name muss innerhalb des Dienstes eindeutig sein.
-   **Schlüssel**: Jedes Objekt in einem Bucket wird eindeutig durch einen Schlüssel (einen Dateinamen) identifiziert.
-   **Endpunkte**: Regionale URLs, die Sie verwenden, um auf die API des Speicherdienstes zuzugreifen.

## Security and Encryption

The security of your data is our absolute priority. The OSS service integrates robust encryption mechanisms to protect your data, whether it is stored (at rest) or transmitted over the network.

### Datenverschlüsselung im Ruhezustand (Data at Rest Encryption - D@RE)

Um Ihre gespeicherten Daten zu schützen, verwendet unser Dienst Server-seitige Verschlüsselung.

-   **Aktivierung**: Die D@RE-Verschlüsselung ist auf Ebene des *Namespace* (Namensraum) aktiviert.
-   **Algorithmus**: Wir verwenden den Algorithmus **AES-256**, einen der sichersten verfügbaren Verschlüsselungsstandards.
-   **Funktionsweise**: Wenn Sie ein Objekt in einem Bucket schreiben, in dem D@RE aktiviert ist, verschlüsselt der Dienst Ihre Daten automatisch, bevor sie auf die Festplatten geschrieben werden. Beim Lesen des Objekts wird es transparent für Sie entschlüsselt. Die Verwaltung der Verschlüsselungsschlüssel erfolgt vollständig durch den Dienst.

### Data Encryption in Transit

All communications with the object storage service API—whether for uploading, downloading, or managing your data—must be secured.

-   **Protocol**: We require the use of the **TLS (Transport Layer Security)** protocol, versions **1.2 and 1.3**.
-   **Operation**: By using HTTPS for all your API requests, you ensure that data exchanged between your client and our servers is encrypted, thereby protecting it against interception or tampering during transmission over the network.