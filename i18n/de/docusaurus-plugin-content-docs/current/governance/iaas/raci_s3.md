---
title: Matriz der Verantwortlichkeiten IaaS - S3-Objektspeicher
---

Hier ist das RACI über die Verantwortlichkeitsaufteilung zwischen dem Kunden und Cloud Temple für die Nutzung der S3-Objektspeicherplattform von Cloud Temple.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen des RACI:

| Rolle         | Beschreibung                                     |
|---------------|--------------------------------------------------|
| (R) Realisiert| __R__ealisiert den Prozess                       |
| (A) Genehmigt | __A__probiert die Durchführung des Prozesses     |
| (C) Konsultiert | __C__onsultiert während des Prozesses         |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses|

## Ihren Bedarf definieren

| Aktivität                                                                            | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------|-------------|---------------------|
| Validieren, dass das S3-Objektspeicherprodukt den Anforderungen der Anwendung entspricht | __RA__      | __CI__              | 
| Den Dienst mit den erforderlichen Informationen abonnieren                          | __RA__      | __I__               | 

## Den Dienst umsetzen

| Aktivität                                                                             | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------|-------------|---------------------|
| Betriebsbereitschaft der S3-Objektspeicherplattform sicherstellen                   | __I__       | __RA__              | 
| Sicherheit der S3-Objektspeicherplattform sicherstellen                            | __I__       | __RA__              | 
| Objekte erstellen                                                                   | __RA__      |                     | 
| Zugriffsschlüssel erstellen und zugehörige Rechte zuweisen                          | __RA__      |                     |

## Wiederkehrende Operationen

| Aktivität                                                                            | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------|-------------|---------------------|
| Betriebsbereitschaft der S3-Objektspeicherplattform sicherstellen                   | __I__       | __RA__              | 
| Sicherheit der S3-Objektspeicherplattform sicherstellen                            | __I__       | __RA__              | 
| Verfügbarkeit des S3-Objektspeicherdienstes sicherstellen                            | __I__       | __RA__              |
| Protokolle der S3-Objektspeicherplattform archivieren und bereitstellen             |             | __RA__              |
| Überwachung der ordnungsgemäßen Funktion der S3-Objektspeicherplattform             | __I__       | __RA__              |
| Lebenszyklus der Objekte verfolgen                                                  | __RA__      |                     | 
| Lebenszyklus der Rechte auf den Objekten verfolgen                                  | __RA__      |                     |
| Logische Sicherheit der Objekte verwalten                                           | __RA__      |                     |
| Vorfälle im S3-Objektspeicherdienst verwalten                                       | __I__       | __RA__              |
| Probleme im S3-Objektspeicherdienst verwalten                                       | __I__       | __RA__              |
| Kapazitätsverwaltung beim S3-Objektspeicherdienst                                   | __I__       | __RA__              |
| Änderungen im S3-Objektspeicherdienst verwalten                                     | __I__       | __RA__              |

## Verschlüsselungsverwaltung

| Aktivität                                                                                 | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|----------------     |
| Datenverschlüsselung vor dem Einsatz im S3-Objektspeicherdienst verwalten                 | __RA__      |                      |
| Verschlüsselung im vom S3-Objektspeicherdienst zugewiesenen Speicherbereich verwalten    | __A__       | __R__               | 

## Geschäftskontinuität

| Aktivität                                                                                  | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|---------------------|
| Geschäftskontinuität des S3-Objektspeicherdienstes sicherstellen                           | __I__       | __RA__              |
| Daten sichern                                                                             | __RA__      |                     |
| Regelmäßige Tests zur Datenwiederherstellung durchführen                                  | __RA__      |                     | 
| Kontinuitäts- und Wiederherstellungsplan für Anwendungen aufrechterhalten                 | __RA__      |                     | 

## Reversibilität

| Aktivität                                                                                  | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|------------------   |
| Das Reversibilitätsprojekt umsetzen (Planung, Werkzeuge, Methoden, Ziele, ...)            | __RA__      |                     |
| Daten vom S3-Objektspeicherdienst exportieren                                             | __RA__      |                     |
| Daten im S3-Objektspeicherdienst löschen                                                  | __RA__      |                     | 
| Speicherträger am Ende ihrer Lebensdauer oder bei Fehler vernichten                       |             | __RA__              |