---
title: Conceptos avanzados
---

## Introducción

Esta página presenta las funcionalidades avanzadas de enrutamiento BGP disponibles en la infraestructura de Internet Cloud Temple.

## Comunidades BGP

Cloud Temple ofrece una variedad de comunidades BGP que permiten controlar la selección de la ruta que siga su tráfico.

### ¿Qué es una comunidad BGP?

Las comunidades BGP son atributos opcionales que se pueden adjuntar a las rutas BGP para marcar, filtrar o influir en el enrutamiento.

### Acciones sobre la Preferencia Local

Las siguientes comunidades BGP le permiten modificar la **preferencia local** de sus prefijos, influyendo así en la selección de la ruta hacia la máquina que anuncia el prefijo dentro del AS33930.

Puede modificar la preferencia local de un prefijo dentro del backbone Internet Cloud Temple en el AS 33930 utilizando las siguientes comunidades :

| Comunidad BGP | Prioridad | Preferencia Local |
|:---------------|:------------|:----------------:|
| 33930:40010 | Prioridad baja | 10 |
| *Por defecto* | Backbone Cloud Temple (predeterminado) | 100 |
| 33930:40150 | Prioridad media | 150 |
| 33930:40200 | Prioridad alta | 200 |
| 33930:40250 | Prioridad máxima  | 250 |

**Nota :** Cuanto mayor sea el valor de la preferencia local, más preferente será la ruta en las decisiones de enrutamiento BGP. Por defecto, sin una comunidad específica, sus prefijos utilizan la preferencia local estándar de 100.

## Configuración

Para aplicar una comunidad BGP a sus anuncios:

1. Definir una política que etiquete el prefijo con la comunidad
2. Aplicar esta política a la sesión BGP con los servidores de rutas de Cloud Temple

### Ejemplo de configuración (bird)

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

El prefijo 203.0.113.0/32 se anunciará con una **preferencia local de 250** y el prefijo 203.0.113.1/32 se anunciará con una **preferencia local de 100** (por defecto) dentro del AS33930.