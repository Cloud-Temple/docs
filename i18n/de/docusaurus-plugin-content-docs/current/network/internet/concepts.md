---
Thema: Konzepte
---

## Assignment of a Public Internet Address (PA)

In this scenario, you are utilizing public IP addresses assigned to Cloud Temple, which you lease for your usages.

The establishment of internet connectivity and the assignment of associated public IP addresses is carried out through a **service request** specifying:

    Your Organization's Name
    The contact person's email and phone number to finalize configuration
    The Tenant's Name
    The desired subnet size (minimum /29 in IPv4 and /64 in IPv6)
    If not already provided, RIPE (administrative contact information, among other details) will be requested by the support team

The delivery of internet access is facilitated via BGP4, in response to your support request, which will provide the following:

    *Public IP prefix*
    *Interconnection prefix*
    *Any-cast gateway*
    *Subnet IP*
    *Local AS number*
    *Cloud Temple's AS number*
    *Keepalive timers and hold-time timer*
    *Addresses of the route servers associated with your tenant*.

The use of BGP4 ensures efficient routing of your internet traffic to the active edge router in your architecture, particularly beneficial in multi-zone deployment scenarios, such as distributed firewall clusters across two availability zones.

### IPv4-Blocks

Cette section traite des blocs d'adresses IPv4. Les blocs IPv4 sont des groupes d'adresses IP qui ont été allouées à des fournisseurs de services Internet (ISPs) ou à des organisations pour une utilisation interne. Ces blocs permettent aux réseaux de communiquer efficacement entre eux en utilisant des adresses IP spécifiques et uniques.

#### Structure des Blocs IPv4

Les blocs d'adresses IPv4 sont généralement représentés sous forme de tableau ou de liste, avec chaque élément correspondant à une plage d'adresses IPv4. Par exemple :

```
IPv4_Blocks:
- 192.168.0.0/24
- 10.0.0.0/8
- 172.16.0.0/12
```

Chaque entrée dans la liste représente un bloc d'adresses IPv4, avec le premier élément indiquant le préfixe (ou la partie de l'adresse avant le décimal point) et le deuxième élément indiquant la taille du bloc en bits.

#### Utilisation des Blocs IPv4

Les fournisseurs d'accès Internet (FAI) et les entreprises utilisent souvent des blocs d'adresses IPv4 pour leur infrastructure interne, permettant aux appareils au sein du réseau de communiquer efficacement. Par exemple :

- Un FAI peut recevoir un bloc d'adresses 192.168.0.0/24 et l'utiliser pour ses clients internes, garantissant que chaque appareil a une adresse IP unique dans cette plage.
- Une entreprise peut utiliser des blocs spécifiques pour différents départements ou services internes, assurant la séparation et la sécurité des communications.

#### Gestion des Blocs IPv4

La gestion efficace des blocs d'adresses IPv4 est cruciale pour plusieurs raisons :

- **Efficacité de l'utilisation** : Une bonne planification des blocs permet une utilisation optimale des adresses IP, minimisant les gaspillages.
- **Sécurité** : La segmentation du réseau en utilisant des blocs distincts peut améliorer la sécurité en limitant l'impact d'une violation de sécurité potentielle à une partie spécifique du réseau.
- **Planification future** : Les fournisseurs doivent anticiper leur besoin futur et planifier les allocations d'adresses IPv4 en conséquence, car la transition vers l'IPv6 est en cours.

En conclusion, les blocs IPv4 jouent un rôle central dans la gestion des adresses IP au sein des réseaux, facilitant la communication et la sécurité internes. Leur allocation et leur utilisation efficaces sont essentielles pour assurer une infrastructure réseau robuste et performante.

### Offer of IPv4 Version 1

*Please note that this offer is no longer available for marketing as of May 2, 2024.*

IPv4 delivery is provided within the stock limits available to our clients, with a minimum block of 8 IPv4 addresses (/29 or 255.255.255.248).

You can view the assigned IP address blocks in the 'Public IPs' menu under the Networks menu on the top left sidebar.

| Reference                               | Unité   | SKU                          |
| --------------------------------------- | ------- | ---------------------------- |
| Dedicated Public IPv4 Range             | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Offer of IPv4 Version 2

The delivery of an IPv4 is provided within the **stock limits available** for our clients, per IP address.

You can view the affected blocks of addresses in the 'Public IPv4' menu under the Network section on the top left sidebar.

| Reference                     | Unité  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Network - Dedicated IPv4 Public | 1 IPv4 | csp:(region):network:ipv4:v2 |

## IPv6 Blocks

The IPv6 block command is accessed via the "Internet" menu under the "Networks" tab.

You can view the prefixes assigned to you in the "Public IPs" menu within the left sidebar of the "Networks".

| Reference                             | Unité   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 Ranges | 64 IPv6 | csp:(region):network:ipv6:v1 |

## IP-Adressen (Provider-Independent)

Wenn Sie über eine eigene Provider-Independente IP-Adresse verfügen, können Sie diese im Autonomous System von Cloud Temple anzeigen lassen. Dies ermöglicht es Ihnen, Ihre eigenen IP-Adressen innerhalb der Cloud Temple-Infrastruktur weiterhin zu nutzen und die Migrationen zu erleichtern.

Um dies zu erreichen, stellen Sie bitte eine Serviceanfrage ein, in der Sie folgende Informationen angeben:

    Den Namen Ihrer Organisation
    Der Name eines Kontaktpersonals mit seinem E-Mail-Adresse und Telefonnummer zur Endgültigen Konfiguration
    Der Name des Tenants
    Die Provider-Independente IP-Adresse, die Sie besitzen und anzeigen möchten
    Wenn diese Informationen noch nicht bereits vorliegen, werden von unserem Support RIPE-Informationen angefordert

Es gibt keine spezifische Rechnungsstellung für Kunden, die Provider-Independente IP-Adressen verwenden.

### Internet Bandwidth Reservation

Die Internet-Bandbreite kann reserviert werden in Schritten von 100 MBit/s. Die maximale verfügbare Bandbreite für eine Router-Karte beträgt 10 GBit/s, möglicherweise durch die technischen Eigenschaften Ihrer Router eingeschränkt.

Die Rechnung erfolgt auf Basis des 95. Pendels der Fakturperiode, typischerweise monatlich. Dadurch können Sie gelegentlich von einer Überlastung außerhalb Ihres reservierten Bandbreitenbereichs profitieren.

| Referenz                                 | Einheit    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Internet-Bandbreite - Reservierung       | 100 MBit/s | csp:(region):network:traffic:internet:v1 |

**Hinweis:**
*Es gibt keine **volumenabhängige** Gebühr wie "Egress Fees". Sie zahlen nur für die Bandbreitenreservierung.*

## Anti-DDoS

Eine DDoS-Angriff zielt darauf ab, einen Dienst durch Überlastung mit illegitimen Traffic zu degradieren oder offline zu machen.

Die Anti-DDoS-Schutzlösung von Cloud Temple schützt Sie vor böswillem Akteuren und ist kostenlos bei der Abwehr von Volumenangriffen: Der Filter erfolgt im Vorfeld durch unsere Telekom-Partner.