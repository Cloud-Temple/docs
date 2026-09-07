---
title: Erste Schritte
---

# Erste Schritte — Private Backbone

Dieser Leitfaden führt Sie durch die Erstellung Ihres ersten Inter-AZ-Privatnetzwerks und die Konfiguration des Internetzugangs mit öffentlichen IPs.

---

## Voraussetzungen

- Zugriff auf die **Cloud Temple-Konsole** mit aktivierten Netzwerkrechten
- Mindestens ein Compute-Cluster in Ihrem Mandanten bereitgestellt
- Für den Internetzugang: eine vorherige Serviceanfrage für externe Konnektivitätsports

---

## Teil 1 — Ein privates Netzwerk (VLAN) erstellen

### Schritt 1: Auf das Netzwerkmenü zugreifen

Klicken Sie in der Cloud Temple-Konsole auf **Netzwerk** in der linken Navigationsleiste.

### Schritt 2: Neues Netzwerk erstellen

Klicken Sie auf **Neues Netzwerk** und füllen Sie die Felder aus:

| Feld | Beschreibung | Beispiel |
|------|--------------|---------|
| Name | Lesbarer Bezeichner für Ihr Netzwerk | `prod-backend-vlan` |
| VLAN-ID | VLAN-Kennung (automatisch oder manuell) | `100` |
| Beschreibung | Verwendungszweck des Netzwerks (optional) | `Produktions-Backend-Netzwerk` |

### Schritt 3: Propagierung konfigurieren

Wählen Sie die **Ziel-Cluster** aus, auf die dieses Netzwerk propagiert werden soll.

:::caution[Propagierungslimit]
Propagierungsänderungen sind auf **20 Netzwerke** pro Aktion begrenzt. Führen Sie bei größeren Mengen mehrere aufeinanderfolgende Aktionen durch.
:::

### Schritt 4: Bestätigen

Klicken Sie auf **Erstellen**. Das VLAN wird sofort provisioniert und ist auf den ausgewählten Clustern verfügbar.

---

## Teil 2 — Ein Netzwerk zwischen Mandanten teilen

Wenn Ihre Organisation mehrere Mandanten hat, können Sie ein Netzwerk teilen:

1. Wählen Sie das Netzwerk aus der Liste aus
2. Klicken Sie auf **Teilen**
3. Wählen Sie den/die Zielmandanten aus der nach Organisation gefilterten Liste
4. Bestätigen Sie das Teilen

Das Netzwerk erscheint dann im Bereich **Mit mir geteilt** des Zielmandanten.

---

## Teil 3 — Öffentliche IPs bestellen

### Schritt 1: Auf den Internetbereich zugreifen

Navigieren Sie in der Cloud Temple-Konsole zu **Netzwerk > Internet**.

### Schritt 2: Einen IP-Block bestellen

Klicken Sie auf **IP-Adressen bestellen** und wählen Sie:

| Typ | Mindestblock |
|-----|-------------|
| IPv4 | 1 Adresse |
| IPv6 | /64 (64 Adressen) |

### Schritt 3: IPs mit Ihren Diensten verknüpfen

Sobald der Block zugewiesen ist:
1. Wählen Sie die IP-Adresse aus der Liste aus
2. Klicken Sie auf **Verknüpfen**
3. Wählen Sie den Zieldienst (VM, Gerät usw.)

### Schritt 4: Reverse-DNS konfigurieren (PTR)

Für jede öffentliche IP können Sie einen PTR-Eintrag festlegen:
1. Klicken Sie auf die IP in der Konsole
2. Wählen Sie **PTR konfigurieren**
3. Geben Sie den gewünschten DNS-Namen ein (z. B. `dienst.beispiel.de`)

---

## Teil 4 — Externe Konnektivität (1G/10G-Ports)

So schließen Sie Netzwerkgeräte (Firewall, Router) oder eine Betreiberverbindung an:

**Öffnen Sie eine Serviceanfrage** mit folgenden Informationen:
- Organisationsname und technischer Ansprechpartner
- Mandantenname und Ziel-Verfügbarkeitszone
- Gewünschter Porttyp: **1 Gbps** oder **10 Gbps** (Glasfaser oder Kupfer)
- Zielnetzwerk und eventuelle physische Hosting-Anforderungen

:::info[Lieferzeit]
Externe Konnektivitätsports werden auf Angebot nach Validierung der Serviceanfrage geliefert.
:::

---

## Nächste Schritte

- 📖 [Private Backbone Konzepte](./concepts) — VPLS, VLAN-Tagging, BGP verstehen
- 🔧 [Tutorials](./tutorials) — FortiGate oder pfSense mit BGP konfigurieren
- 🌐 [VPC-Dokumentation](../vpc) — Für einen cloud-nativen Netzwerkansatz
