---
title: Regionen und Verfügbarkeitszonen
---

import iaasAz001 from '@site/docs/additional_content/images/iaas_az_001.png';

Die Cloud Temple-Infrastruktur ist darauf ausgelegt, die Betriebskontinuität Ihrer Anwendungen und Plattformen zu gewährleisten. Sie ist in Regionen gegliedert, die jeweils aus mehreren Verfügbarkeitszonen bestehen.

## Regionen

Innerhalb einer Region profitieren Sie von einer Netzwerkkontinuität auf Layer 2. So lässt sich innerhalb einer Region eine technische Architektur über drei physische Standorte definieren, um eine hochverfügbare Plattform mit Quorum einzurichten.

Cloud Temple betreibt die Region **FR1** (Paris).

### Region FR1

Die Region FR1 basiert auf drei physischen Standorten im Großraum Paris:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Jeder Standort ist mehr als 30 km Luftlinie von den anderen entfernt; im Durchschnitt beträgt die optische Distanz zwischen zwei Standorten 80 km. Die angestrebte Netzwerklatenz zwischen Verfügbarkeitszonen derselben Region liegt unter 5 ms.

## Verfügbarkeitszonen

Jeder physische Standort einer Region verfügt über einen oder mehrere eigene Räume für unsere Infrastruktur. Diese Räume stehen ausschließlich Cloud Temple zur Verfügung.

__Jeder physische Raum entspricht einer Verfügbarkeitszone (AZ, *Availability Zone*)__ und ist in Bezug auf Stromversorgung, Kühlung, Rechenleistung, Speicher und Netzwerk vollständig autark. Die Wahl einer Verfügbarkeitszone bedeutet somit die Wahl eines physischen Standorts und einer Region.

Die Konsole schlägt Ihnen automatisch Verfügbarkeitszonen auf verschiedenen physischen Standorten vor, um Ihre Infrastruktur auf möglichst viele physische Standorte zu verteilen.

Wenn Sie eine besondere Konfiguration benötigen (mehrere AZ am selben physischen Standort), stellen Sie eine Supportanfrage.
