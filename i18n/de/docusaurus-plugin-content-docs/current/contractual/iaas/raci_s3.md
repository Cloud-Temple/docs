---
title: IaaS-Verantwortungsmatrix - S3-Objektspeicher
---

Hier ist die RACI-Matrix für die Verantwortungsteilung zwischen dem Kunden und Cloud Temple für die Nutzung der Cloud Temple S3-Objektspeicherplattform.

## Definition der verschiedenen Rollen

Wir erinnern hier an die verschiedenen Rollen des RACI:

| Rolle         | Beschreibung                                |
|--------------|------------------------------------------|
| (R) Durchführt  | __R__ealisiert den Prozess                 |
| (A) Genehmigt | __A__kzeptiert die Durchführung des Prozesses |
| (C) Konsultiert | Wird während des Prozesses __k__onsultiert        |
| (I) Informiert  | Wird über die Ergebnisse des Prozesses __i__nformiert   |

## Ihren Bedarf definieren

| Aktivität                                                                            | Rolle des Kunden | Rolle von Cloud Temple |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Überprüfen, ob das S3-Objektspeicherprodukt den Anforderungen der Anwendung entspricht | __RA__      | __CI__            |
| Abonnieren des Dienstes mit den erforderlichen Informationen                           | __RA__      | __I__             |

## Implementierung des Dienstes

| Aktivität                                                                             | Rolle des Kunden | Rolle von Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen der betrieblichen Aufrechterhaltung der S3-Objektspeicherplattform | __I__       | __RA__            |
| Sicherstellen der Aufrechterhaltung der Sicherheit der S3-Objektspeicherplattform    | __I__       | __RA__            |
| Erstellen von Objekten                                                                   | __RA__      |                   |
| Erstellen von Zugriffsschlüsseln und Zuweisen der zugehörigen Rechte                            | __RA__      |                   |

## Wiederkehrende Operationen

| Aktivität                                                                           | Rolle des Kunden | Rolle von Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen der betrieblichen Aufrechterhaltung der S3-Objektspeicherplattform | __I__       | __RA__            |
| Sicherstellen der Aufrechterhaltung der Sicherheit der S3-Objektspeicherplattform    | __I__       | __RA__            |
| Sicherstellen der Zugänglichkeit des S3-Objektspeicherdienstes                               | __I__       | __RA__            |
| Aufbewahrung und Bereitstellung der Protokolle der S3-Objektspeicherplattform  |             | __RA__            |
| Überwachung des ordnungsgemäßen Funktionierens der S3-Objektspeicherplattform                | __I__       | __RA__            |
| Überwachung des Lebenszyklus der Objekte                                                  | __RA__      |                   |
| Überwachung des Lebenszyklus der Rechte an den Objekten                                   | __RA__      |                   |
| Verwaltung der logischen Sicherheit der Objekte                                               | __RA__      |                   |
| Verwaltung von Vorfällen im S3-Objektspeicherdienst                              | __I__       | __RA__            |
| Verwaltung von Problemen im S3-Objektspeicherdienst                              | __I__       | __RA__            |
| Kapazitätsverwaltung im S3-Objektspeicherdienst                                | __I__       | __RA__            |
| Verwaltung von Weiterentwicklungen im S3-Objektspeicherdienst                             | __I__       | __RA__            |

## Verschlüsselungsverwaltung

| Aktivität                                                                                 | Rolle des Kunden | Rolle von Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Verwaltung der Datenverschlüsselung vor der Bereitstellung im S3-Objektspeicherdienst      | __RA__      |                   |
| Verwaltung der Verschlüsselung im vom S3-Objektspeicherdienst zugewiesenen Speicherbereich    | __A__       | __R__             |

## Geschäftskontinuität

| Aktivität                                                                                  | Rolle des Kunden | Rolle von Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellung der Geschäftskontinuität des S3-Objektspeicherdienstes                         | __I__       | __RA__            |
| Sicherstellung der Datensicherung                                                         | __RA__      |                   |
| Durchführung regelmäßiger Tests zur Datenwiederherstellung                                | __RA__      |                   |
| Aufrechterhaltung des Geschäftskontinuitäts- und Wiederherstellungsplans für die Anwendungen | __RA__      |                   |

## Umkehrbarkeit

| Aktivität                                                                                  | Rolle des Kunden | Rolle von Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implementierung des Umkehrbarkeitsprojekts (Planung, Werkzeuge, Methoden, Ziele,...) | __RA__      |                   |
| Exportieren von Daten aus dem S3-Objektspeicherdienst                              | __RA__      |                   |
| Löschen von Daten im S3-Objektspeicherdienst                                | __RA__      |                   |
| Vernichtung von Speichermedien am Ende ihrer Lebensdauer oder bei Fehlern                              |             | __RA__            |
