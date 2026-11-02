---
title: Konzepte
sidebar_position: 2
---

<a id="concepts-du-stockage-objet-oss"></a>

## Einführung

Der **Objektspeicher** ist ein verteilter, skalierbarer und kostengünstiger Speicherdienst für unstrukturierte Daten. Er ist mit dem S3-Protokoll kompatibel, repliziert die Daten automatisch über drei Verfügbarkeitszonen und berechnet keine ausgehenden Datenübertragungen. Er eignet sich für die Archivierung, die Sicherung und die Speicherung von Anwendungsdaten in einer souveränen Umgebung.

### Zielgruppen und Anwendungsfälle

- **Anwendungsentwickler**: Speicher für Cloud-native Anwendungen und Microservices.
- **DevOps-Teams**: Sicherung und Archivierung kritischer Daten.
- **Große Datenmengen**: kostengünstige Verwaltung großer Volumen.
- **Rich Content**: Bilder, Videos und Dokumente.
- **Öffentlicher Sektor**: Langzeitarchivierung gemäß den Souveränitätsanforderungen.

## Vorteile

| Vorteil                   | Beschreibung                                                                         |
|---------------------------|--------------------------------------------------------------------------------------|
| Skalierbarkeit            | Die horizontale Architektur passt sich dem Wachstum Ihrer Daten an.                  |
| Haltbarkeit und Redundanz | Die Daten werden automatisch über drei Verfügbarkeitszonen verteilt.                 |
| Keine Egress-Gebühren     | Die ausgehende Übertragung Ihrer Daten ist kostenlos.                                |
| S3-Kompatibilität         | Vorhandene S3-Tools und -SDKs können ohne Anpassung verwendet werden.                |

## Funktionen

| Funktion                 | Beschreibung                                                                |
|--------------------------|-----------------------------------------------------------------------------|
| S3-kompatible API        | Zugriff über die S3-API, zu 97 % kompatibel mit AWS S3.                     |
| Bucket-Typ               | Wahl bei der Erstellung zwischen einem „Performance“- oder „Archiv“-Bucket. |
| Replikation über 3 Zonen | Automatische Redundanz über drei Verfügbarkeitszonen.                       |
| Erasure Coding           | EC-12+4-Schutz.                                                             |
| Verschlüsselung ruhender Daten | Serverseitige Verschlüsselung, aktiviert auf *Namespace*-Ebene.       |
| Vorsignierte Anfragen    | Sichere temporäre URLs.                                                     |
| Netzwerkzugriffsmodi     | Steuerung der Netzwerkexposition der Buckets (öffentlich, privat, benutzerdefiniert). |
| Universelle Clients      | AWS-CLI, S3CMD, minio-CLI, MC CLI.                                          |

### Hauptkomponenten

- **Objekte**: die grundlegenden Daten, die im Dienst gespeichert werden. Ein Objekt besteht aus Daten (der Datei selbst) und Metadaten (beschreibende Informationen zum Objekt).
- **Buckets (Container)**: Objekte werden in Buckets organisiert. Ein Bucket ist ein Container für Objekte, und sein Name muss innerhalb des Dienstes eindeutig sein.
- **Schlüssel**: Jedes Objekt in einem Bucket wird eindeutig durch einen Schlüssel (einen Dateinamen) identifiziert.
- **Endpoints**: die regionalen URLs, über die Sie auf die API des Dienstes zugreifen.

<a id="architecture-technique"></a>

## Architektur

Der Dienst basiert auf einer verteilten Architektur, die eine hohe Haltbarkeit und eine hohe Verfügbarkeit der Daten gewährleistet. Die Objekte werden redundant auf mehreren Speicherknoten gespeichert, die über drei Verfügbarkeitszonen verteilt sind.

- **Erasure Coding EC 12+4**: Die Daten werden in 12 Segmente aufgeteilt und durch 4 Paritätssegmente ergänzt.
- **Verteilung**: Die Segmente werden auf verschiedene Knoten und Racks verteilt.
- **Netzwerk**: Hochleistungsnetzwerk, bis zu 100 Gb/s.

Der Zugriff auf den Dienst erfolgt über eine standardisierte RESTful-API, die mit dem S3-Protokoll kompatibel ist, sodass eine breite Palette vorhandener Tools und SDKs genutzt werden kann. Der Dienst ist in die Cloud Temple-Konsole integriert und lässt sich auch als Infrastructure as Code mit Terraform steuern.

## Regionen und Verfügbarkeitszonen

Der Objektspeicher ist in der Region FR1 verfügbar. Die Daten werden über drei Verfügbarkeitszonen verteilt.

## Technische Spezifikationen

| Parameter             | Wert                                  |
|-----------------------|---------------------------------------|
| Kompatibilität        | 97 % AWS S3                           |
| Haltbarkeit           | 99,999999999 % (elf Neunen), jährlich |
| Erasure Coding        | EC 12+4                               |
| Netzwerkleistung      | 1 Gbps garantiert, bis zu 100 Gb/s    |
| Verschlüsselung       | TLS 1.2 / 1.3 bei der Übertragung, AES-256 im Ruhezustand |

### Grenzen

- 999 Buckets pro Tenant.
- 5 TB pro Objekt.

<a id="sécurité-et-chiffrement"></a>

## Sicherheit und Compliance

Der Objektspeicher ist nach HDS und ISO 27001 zertifiziert, C5-konform und SecNumCloud-qualifiziert.

Die Sicherheit Ihrer Daten hat Priorität. Der Dienst verfügt über Verschlüsselungsmechanismen, um Ihre Daten zu schützen, sowohl bei der Speicherung (im Ruhezustand) als auch während der Übertragung über das Netzwerk.

### Verschlüsselung ruhender Daten (Data at Rest Encryption - D@RE)

Zum Schutz Ihrer gespeicherten Daten verwendet der Dienst serverseitige Verschlüsselung.

- **Aktivierung**: Die D@RE-Verschlüsselung wird auf *Namespace*-Ebene aktiviert.
- **Algorithmus**: **AES-256-Bit**-Verschlüsselung, zertifiziert nach **FIPS 140-3**, über die Softwarebibliothek **RSA BSAFE Crypto-J** in Version **7.x**.
- **Funktionsweise**: Wenn Sie ein Objekt in einen Bucket schreiben, in dem D@RE aktiviert ist, verschlüsselt der Dienst Ihre Daten automatisch, bevor sie auf die Festplatten geschrieben werden. Beim Lesen wird das Objekt transparent entschlüsselt. Die Verwaltung der Verschlüsselungsschlüssel wird vollständig vom Dienst übernommen.

### Verschlüsselung von Daten während der Übertragung

Die gesamte Kommunikation mit der API des Dienstes, sei es zum Hochladen, Herunterladen oder Verwalten Ihrer Daten, muss gesichert sein.

- **Protokoll**: Die Verwendung des Protokolls **TLS (Transport Layer Security)** in den Versionen **1.2 und 1.3** ist vorgeschrieben.
- **Funktionsweise**: Durch die Verwendung von HTTPS für alle Ihre API-Anfragen werden die zwischen Ihrem Client und den Servern ausgetauschten Daten verschlüsselt und während der Übertragung vor Abfangen oder Manipulation geschützt.

## Dienstverfügbarkeit

Das Verfügbarkeitsziel des Dienstes beträgt 99,99 %, monatlich gemessen, einschließlich Wartungsfenster.

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple ist in der [Verantwortlichkeitsmatrix (RACI) des Objektspeichers](../../contractual/iaas/raci_s3.md) beschrieben.

## Reversibilität

Sie können Ihre Daten jederzeit selbstständig mit den Standard-S3-Tools abrufen.

| Vorgang                     | Beschreibung                                                                                 | Kosten     |
|-----------------------------|----------------------------------------------------------------------------------------------|------------|
| Datenabruf                  | Herunterladen aller Ihrer Objekte über die S3-API.                                           | Kostenlos  |
| Ausgehende Übertragung      | Keine Egress-Gebühren bei der Übertragung Ihrer Daten zu einem anderen Anbieter.             | Kostenlos  |
| Migrationsunterstützung     | Technischer Support auf Anfrage für komplexe Migrationsvorgänge.                             | Auf Angebot |

## Preise

Der Dienst wird nach der tatsächlich genutzten Kapazität abgerechnet, ohne Egress-Gebühren. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Objektspeicher — Preise](https://www.cloud-temple.com/produits/stockage-objet/).
