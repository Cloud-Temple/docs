---
title: Konzepte des Objektspeichers
sidebar_position: 2
---

# Konzepte des Objektspeichers (OSS)

## Technische Architektur

Der Objektspeicherdienst von Cloud Temple basiert auf einer verteilten Architektur, die eine hohe Datenhaltbarkeit und -verfügbarkeit gewährleistet. Die Objekte werden redundant auf mehreren Speicherknoten innerhalb unserer SecNumCloud-zertifizierten Rechenzentren gespeichert.

Der Zugriff auf den Dienst erfolgt über eine standardisierte RESTful-API, die mit dem S3-Protokoll kompatibel ist, sodass Sie eine breite Palette bestehender Tools und SDKs nutzen können.

## Hauptkomponenten

- **Objekte** : Die grundlegenden Daten, die im Dienst gespeichert werden. Ein Objekt besteht aus Daten (der Datei selbst) und Metadaten (beschreibende Informationen zum Objekt).
- **Buckets (Container)** : Objekte werden in Buckets organisiert. Ein Bucket ist ein Container für Objekte, und sein Name muss innerhalb des Dienstes eindeutig sein.
- **Schlüssel** : Jedes Objekt in einem Bucket wird eindeutig durch einen Schlüssel (einen Dateinamen) identifiziert.
- **Endpoints** : Die regionalen URLs, die Sie zum Zugriff auf die API des Speicherdienstes verwenden.

## Sicherheit und Verschlüsselung

Die Sicherheit Ihrer Daten ist unsere oberste Priorität. Der OSS-Dienst integriert robuste Verschlüsselungsmechanismen, um Ihre Daten zu schützen, sowohl bei der Speicherung (au repos) als auch während der Übertragung über das Netzwerk.

### Verschlüsselung ruhender Daten (Data at Rest Encryption - D@RE)

Um Ihre gespeicherten Daten zu schützen, verwendet unser Dienst die serverseitige Verschlüsselung.

- **Aktivierung** : Die D@RE-Verschlüsselung wird auf *Namespace*-Ebene (espace de nommage) aktiviert.
- **Algorithmus** : Wir verwenden eine **AES-256-Bit**-Verschlüsselung, zertifiziert nach **FIPS 140-3**, über die Softwarebibliothek **RSA BSAFE Crypto-J** in Version **7.x**.
- **Funktionsweise** : Wenn Sie ein Objekt in einen Bucket schreiben, in dem D@RE aktiviert ist, verschlüsselt der Dienst Ihre Daten automatisch, bevor sie auf die Festplatten geschrieben werden. Beim Lesen des Objekts wird es für Sie transparent entschlüsselt. Die Verwaltung der Verschlüsselungsschlüssel wird vollständig vom Dienst übernommen.

### Verschlüsselung von Daten während der Übertragung

Alle Kommunikationen mit der API des Objektspeicherdienstes, sei es zum Hochladen, Herunterladen oder Verwalten Ihrer Daten, müssen gesichert sein.

- **Protokoll** : Wir schreiben die Verwendung des **TLS-Protokolls (Transport Layer Security)** in den Versionen **1.2 und 1.3** vor.
- **Funktionsweise** : Durch die Verwendung von HTTPS für alle Ihre API-Anfragen stellen Sie sicher, dass die zwischen Ihrem Client und unseren Servern ausgetauschten Daten verschlüsselt sind, wodurch sie vor Abfangen oder Manipulation während der Übertragung im Netzwerk geschützt werden.