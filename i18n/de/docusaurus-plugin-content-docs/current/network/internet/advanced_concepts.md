---
title: Erweiterte Konzepte
---

## Introduction

Diese Seite stellt die erweiterten BGP-Routing-Funktionen vor, die auf der Cloud-Temple-Internet-Infrastruktur verfügbar sind.

## BGP-Communities

Cloud Temple bietet eine Vielzahl von BGP-Communities, die es ermöglichen, die Pfadauswahl für Ihren Datenverkehr zu steuern.

### Was ist eine BGP-Community?

BGP-Communities sind optionale Attribute, die an BGP-Routen angehängt werden können, um sie zu markieren, zu filtern oder das Routing zu beeinflussen.

### Aktionen zur Local Preference

Die folgenden BGP-Communities ermöglichen es Ihnen, die **Local Preference** Ihrer Präfixe zu ändern und somit die Pfadauswahl für den Pfad zur Maschine, die das Präfix ankündigt, innerhalb des AS33930 zu beeinflussen.

Sie können die Local Preference eines Präfixes innerhalb des Cloud Temple Internet-Backbones im AS 33930 mit den folgenden Communities ändern:

| BGP-Community | Priorität | Local Preference |
|:---------------|:------------|:----------------:|
| 33930:40010 | Niedrige Priorität | 10 |
| *Standard* | Cloud Temple Backbone (Standard) | 100 |
| 33930:40150 | Mittlere Priorität | 150 |
| 33930:40200 | Hohe Priorität | 200 |
| 33930:40250 | Maximale Priorität | 250 |

**Hinweis:** Je höher der Wert der Local Preference ist, desto bevorzugter wird der Pfad bei BGP-Routing-Entscheidungen. Standardmäßig verwenden Ihre Präfixe ohne eine spezifische Community die Standard-Local Preference von 100.

## Konfiguration

Um eine BGP-Community auf Ihre Ankündigungen anzuwenden:

1. Definieren Sie eine Policy, die das Prefix mit der Community taggt
2. Wenden Sie diese Policy auf die BGP-Sitzung mit den Cloud Temple Route-Servern an

### Beispielkonfiguration (bird)

```junos
# Définir une policy qui tag le préfixe avec la communauté
filter p_bkb_rs_001_export {
if net ~ [203.0.113.0/32]
        then {
            bgp_community.add((33930,40250));
            accept;
        }
if net ~ [203.0.113.1/32]
        then {
            accept;
        }
else reject;
}

# Appliquer cette policy à la session BGP avec les serveurs de routes Cloud Temple
protocol bgp p_bkb_rs_001  {
        local 100.64.3.226 as 65551;
        neighbor 100.64.0.1 as 33930;
        multihop;
        keepalive time 10;
        hold time 30;
        ipv4 {
                export filter p_bkb_rs_001_export;
        };
}
```

Das Präfix 203.0.113.0/32 wird mit einer **Local Preference von 250** und das Präfix 203.0.113.1/32 wird mit einer **Local Preference von 100** (par défaut) innerhalb von AS33930 angekündigt.