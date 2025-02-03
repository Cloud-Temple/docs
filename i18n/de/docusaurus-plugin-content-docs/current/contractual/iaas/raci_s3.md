---
title: Verantwortlichkeitsmatrix IaaS - Objekt-Speicher S3
---

Hier ist die RACI-Matrix der Verantwortlichkeitsverteilung zwischen dem Kunden und Cloud Temple für die Nutzung der Cloud Temple Objekt-Speicher S3 Plattform.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen der RACI:

| Rolle         | Beschreibung                              |
|--------------|------------------------------------------|
| (R) Realisiert  | __R__ealisiert den Prozess                 |
| (A) Genehmigt | __A__bsegnet die Durchführung des Prozesses |
| (C) Konsultiert | __C__onsultiert während des Prozesses        |
| (I) Informiert  | __I__nformiert über die Ergebnisse des Prozesses   |

## Ihren Bedarf definieren

| Aktivität                                                                            | Kundenrolle | Cloud Temple Rolle |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validieren, dass das Produkt Objekt-Speicher S3 den Anwendungsanforderungen entspricht | __RA__      | __CI__            | 
| Den Dienst mit den notwendigen Informationen abonnieren                           | __RA__      | __I__             | 

## Dienst implementieren

| Aktivität                                                                             | Kundenrolle | Cloud Temple Rolle |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen der Betriebsbereitschaft der Objekt-Speicher S3 Plattform | __I__       | __RA__            | 
| Sicherstellen der Sicherheitsbedingungen der Objekt-Speicher S3 Plattform    | __I__       | __RA__            | 
| Objekte erstellen                                                                   | __RA__      |                   | 
| Zugriffsschlüssel erstellen und die zugehörigen Rechte zuweisen                            | __RA__      |                   |

## Wiederkehrende Operationen

| Aktivität                                                                           | Kundenrolle | Cloud Temple Rolle |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen der Betriebsbereitschaft der Objekt-Speicher S3 Plattform | __I__       | __RA__            | 
| Sicherstellen der Sicherheitsbedingungen der Objekt-Speicher S3 Plattform    | __I__       | __RA__            | 
| Sicherstellen der Zugänglichkeit des Objekt-Speicher S3 Dienstes                               | __I__       | __RA__            |
| Aufbewahren und Bereitstellen der Protokolle der Objekt-Speicher S3 Plattform  |             | __RA__            |
| Überwachen des ordnungsgemäßen Betriebs der Objekt-Speicher S3 Plattform                | __I__       | __RA__            |
| Lebenszyklus der Objekte verfolgen                                                  | __RA__      |                   | 
| Lebenszyklus der Rechte auf die Objekte verfolgen                                   | __RA__      |                   |
| Logische Sicherheit der Objekte verwalten                                               | __RA__      |                   |
| Vorfälle im Objekt-Speicher S3 Dienst verwalten                              | __I__       | __RA__            |
| Probleme im Objekt-Speicher S3 Dienst verwalten                              | __I__       | __RA__            |
| Kapazität im Objekt-Speicher S3 Dienst verwalten                               | __I__       | __RA__            |
| Weiterentwicklungen im Objekt-Speicher S3 Dienst verwalten                             | __I__       | __RA__            |

## Verschlüsselungsmanagement

| Aktivität                                                                                 | Kundenrolle | Cloud Temple Rolle |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Datenverschlüsselung vor der Bereitstellung im Objekt-Speicher S3 Dienst verwalten      | __RA__      |                   |
| Verschlüsselung im vom Objekt-Speicher S3 Dienst zugewiesenen Speicherraum verwalten    | __A__       | __R__             | 

## Geschäftskontinuität

| Aktivität                                                                                  | Kundenrolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Geschäftskontinuität des Objekt-Speicher S3 Dienstes sicherstellen                         | __I__       | __RA__            |
| Datensicherung sicherstellen                                                         | __RA__      |                   |
| Regelmäßige Wiederherstellungstests durchführen                                | __RA__      |                   | 
| Kontinuitäts- und Wiederherstellungsplan für Anwendungen aufrechterhalten | __RA__      |                   | 

## Reversibilität

| Aktivität                                                                                  | Kundenrolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Reversibilitätsprojekt umsetzen (Planung, Werkzeuge, Methoden, Ziele,...) | __RA__      |                   |
| Daten aus dem Objekt-Speicher S3 Dienst exportieren                              | __RA__      |                   |
| Daten im Objekt-Speicher S3 Dienst löschen                                | __RA__      |                   | 
| Speichermedien am Lebensende oder mit Fehler vernichten                              |             | __RA__            |