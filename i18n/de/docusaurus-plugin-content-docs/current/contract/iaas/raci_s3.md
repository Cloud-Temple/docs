---
title: Verantwortlichkeitsmatrix IaaS - S3-Objektspeicher
---

Hier ist die RACI-Matrix der Verantwortungsaufteilung zwischen dem Kunden und Cloud Temple für die Nutzung der S3-Objektspeicherplattform von Cloud Temple.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen der RACI:

| Rolle         | Beschreibung                                  |
|--------------|-----------------------------------------------|
| (R) Realisiert   | __R__ealisiert den Prozess                      |
| (A) Abgezeichnet | __A__bgenehmigt die Durchführung des Prozesses |
| (C) Konsultiert  | __C__onsultiert während des Prozesses        |
| (I) Informiert   | __I__nformiert über die Ergebnisse des Prozesses   |

## Ihren Bedarf definieren

| Aktivität                                                                            | Rolle Kunde | Rolle Cloud Temple |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validieren, dass das Produkt S3-Objektspeicher den Anforderungen der Anwendung entspricht | __RA__      | __CI__            | 
| Den Dienst mit den notwendigen Informationen abonnieren                           | __RA__      | __I__             | 

## Den Dienst implementieren

| Aktivität                                                                             | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen des betriebsbereiten Zustands der S3-Objektspeicherplattform         | __I__       | __RA__            | 
| Sicherstellen des sicheren Zustands der S3-Objektspeicherplattform                 | __I__       | __RA__            | 
| Erstellen der Objekte                                                              | __RA__      |                   | 
| Erstellen der Zugangsschlüssel und Zuweisen der zugehörigen Rechte                 | __RA__      |                   |

## Wiederkehrende Operationen

| Aktivität                                                                           | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen des betriebsbereiten Zustands der S3-Objektspeicherplattform         | __I__       | __RA__            | 
| Sicherstellen des sicheren Zustands der S3-Objektspeicherplattform                 | __I__       | __RA__            | 
| Sicherstellen der Verfügbarkeit des S3-Objektspeicherdienstes                      | __I__       | __RA__            |
| Aufbewahrung und Bereitstellung der Protokolle der S3-Objektspeicherplattform      |             | __RA__            |
| Überwachung der ordnungsgemäßen Funktion der S3-Objektspeicherplattform            | __I__       | __RA__            |
| Verfolgen des Lebenszyklus der Objekte                                             | __RA__      |                   | 
| Verfolgen des Lebenszyklus der Rechte an den Objekten                              | __RA__      |                   |
| Verwaltung der logischen Sicherheit der Objekte                                    | __RA__      |                   |
| Verwaltung von Vorfällen im S3-Objektspeicherdienst                                | __I__       | __RA__            |
| Verwaltung von Problemen im S3-Objektspeicherdienst                                  | __I__       | __RA__            |
| Verwaltung der Kapazität des S3-Objektspeicherdienstes                             | __I__       | __RA__            |
| Verwaltung der Änderungen im S3-Objektspeicherdienst                               | __I__       | __RA__            |

## Verschlüsselungsverwaltung

| Aktivität                                                                                 | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Verwaltung der Datenverschlüsselung vor der Bereitstellung im S3-Objektspeicherdienst    | __RA__      |                   |
| Verwaltung der Verschlüsselung auf dem vom S3-Objektspeicherdienst zugewiesenen Speicherplatz    | __A__       | __R__             | 

## Geschäftskontinuität

| Aktivität                                                                                  | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen der Geschäftskontinuität des S3-Objektspeicherdienstes                      | __I__       | __RA__            |
| Sicherstellung der Datensicherung                                                         | __RA__      |                   |
| Durchführung periodischer Wiederherstellungstests der Daten                                  | __RA__      |                   | 
| Aufrechterhaltung des Geschäfts- und Wiederherstellungsplans für Anwendungen            | __RA__      |                   | 

## Reversibilität

| Aktivität                                                                                  | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implementierung des Reversibilitätsprojekts (Planung, Werkzeuge, Methoden, Ziele,...)     | __RA__      |                   |
| Export der Daten vom S3-Objektspeicherdienst                                              | __RA__      |                   |
| Löschen der Daten im S3-Objektspeicherdienst                                              | __RA__      |                   | 
| Vernichtung der Datenträger am Ende des Lebenszyklus oder im Fehlerfall                      |             | __RA__            |