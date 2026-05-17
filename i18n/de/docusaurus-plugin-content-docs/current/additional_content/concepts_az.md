---
title: Konzepte - Verfügbarkeitszonen
---

## Verfügbarkeitszonen

Jeder physische Standort in einer Region verfügt über einen oder mehrere eigene Serverräume für unsere Infrastruktur. Diese Räume stehen ausschließlich Cloud Temple zur Verfügung.

__Jeder physische Raum entspricht einer Verfügbarkeitszone (AZ / Availability Zone)__ und ist in Bezug auf Stromversorgung, Kühlung, Rechenleistung, Speicher und Netzwerk vollständig autark.
Die Wahl einer Verfügbarkeitszone bedeutet somit die Wahl eines physischen Standorts und einer Region.

Die Konsole schlägt Ihnen automatisch Verfügbarkeitszonen auf verschiedenen physischen Standorten vor, um Ihre Infrastruktur auf die größtmögliche Anzahl physischer Standorte zu verteilen.

*__Hinweis: Wenn Sie eine spezifische Konfiguration für einen bestimmten Anwendungsfall benötigen (plusieurs AZ sur le même site physique), ist eine Supportanfrage erforderlich.__*

| Bestellreferenz                                        | Einheit           | SKU                       |  
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone | 1 AZ pro Tenant | csp:*(REGION)*:iaas:az:v1 |