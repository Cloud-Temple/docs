---
title: Conceptos avanzados
---

## Introducción

Esta página presenta las funciones avanzadas de enrutamiento BGP disponibles en la infraestructura de Internet Cloud Temple.

## BGP Communities

Cloud Temple ofrece una variedad de comunidades BGP que permiten controlar la selección de la ruta que tomará su tráfico.

### ¿Qué es una comunidad BGP?

Las comunidades BGP son atributos opcionales que se pueden asociar a rutas BGP para marcar, filtrar o influir en el enrutamiento.

### Actions on Local Preference

The following BGP communities allow you to modify the **local preference** of your prefixes, thereby influencing the path selection toward the machine announcing the prefix within AS33930.

You can adjust the local preference of a prefix within the Cloud Temple Internet backbone in AS 33930 by using the following communities:

| BGP Community | Priority | Local Preference |
|:--------------|:---------|:----------------:|
| 33930:40010 | Low priority | 10 | 
| *Default* | Cloud Temple Backbone (default) | 100 | 
| 33930:40150 | Medium priority | 150 | 
| 33930:40200 | High priority | 200 | 
| 33930:40250 | Maximum priority | 250 | 

**Note:** The higher the local preference value, the more preferred the path is in BGP routing decisions. By default, without a specific community, your prefixes use the standard local preference of 100.

## Configuración

Para aplicar una comunidad BGP a sus anuncios:

1. Definir una política que etiquete el prefijo con la comunidad
2. Aplicar esta política a la sesión BGP con los servidores de rutas de Cloud Temple

### Ejemplo de configuración (bird)

```junos
# Define a policy that tags the prefix with the community
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

# Apply this policy to the BGP session with Cloud Temple route servers
protocol bgp p_bkb_rs_001 {
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

The prefix 203.0.113.0/32 will be advertised with a **local preference of 250**, and the prefix 203.0.113.1/32 will be advertised with a **local preference of 100** (default) within AS33930.
