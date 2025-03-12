---
title: Concepts - Zones de disponibilité
---

## Verfügbarkeitszonen

Jeder physische Standort innerhalb einer Region verfügt über einen oder mehrere private Räume für unsere Infrastrukturen. Diese Räume werden ausschließlich von Cloud Temple genutzt.

__Jeder physische Raum entspricht einer Verfügbarkeitszone (AZ / Availability Zone)__ und ist in Bezug auf Strom, Kühlung, Rechenleistung, Speicher und Netzwerk vollständig autonom.
Die Wahl einer Verfügbarkeitszone impliziert daher die Wahl eines physischen Standorts und einer Region.

Die Shiva-Konsole bietet Ihnen automatisch Verfügbarkeitszonen an verschiedenen physischen Standorten an, um Ihre Infrastruktur auf möglichst vielen physischen Standorten zu verteilen.

*__Hinweis: Wenn Sie eine spezifische Konfiguration für einen bestimmten Kontext benötigen (mehrere AZs am selben physischen Standort), ist es notwendig, eine Support-Anfrage zu stellen.__*


| Bestellreferenz                                                      | Einheit         | SKU                       |  
|---------------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Aktivierung einer Verfügbarkeitszone | 1 AZ pro Tenant | csp:*(REGION)*:iaas:az:v1 |