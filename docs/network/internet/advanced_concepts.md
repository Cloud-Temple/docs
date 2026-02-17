---
title: Concepts avancés
---

## Introduction

Cette page présente les fonctionnalités avancées de routage BGP disponibles sur l'infrastructure Internet Cloud Temple.

## Communautés BGP

Cloud Temple offre une variété de communautés BGP permettant de contrôler la sélection du chemin emprunté par votre trafic. 

### Qu'est-ce qu'une communauté BGP ?

Les communautés BGP sont des attributs optionnels qui peuvent être attachés aux routes BGP pour marquer, filtrer ou influencer le routage.

### Actions sur la Local Preference

Les communautés BGP suivantes vous permettent de modifier la **local preference** de vos préfixes, influençant ainsi la sélection du chemin à destination de la machine annonçant le préfixe à l'intérieur de l'AS33930.

Vous pouvez modifier la local preference d'un préfixe à l'intérieur du backbone Internet Cloud Temple dans l'AS 33930 en utilisant les communautés suivantes :

| Communauté BGP | Priorité | Local Preference |
|:---------------|:------------|:----------------:|
| 33930:40010 | Priorité basse | 10 | 
| *Par défaut* | Backbone Cloud Temple (défaut) | 100 | 
| 33930:40150 | Priorité moyenne | 150 | 
| 33930:40200 | Priorité haute | 200 | 
| 33930:40250 | Priorité maximale  | 250 | 

**Note :** Plus la valeur de local preference est élevée, plus le chemin est préféré dans les décisions de routage BGP. Par défaut, sans communauté spécifique, vos préfixes utilisent la local preference standard de 100.

## Configuration

Pour appliquer une communauté BGP à vos annonces :

1. Définir une policy qui tag le préfixe avec la communauté
2. Appliquer cette policy à la session BGP avec les serveurs de routes Cloud Temple

### Exemple de configuration (bird)

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

Le préfixe 203.0.113.0/32 sera annoncé avec une **local preference de 250** et le préfixe 203.0.113.1/32 sera annoncé avec une **local preference de 100** (par défaut) à l'intérieur de l'AS33930.
