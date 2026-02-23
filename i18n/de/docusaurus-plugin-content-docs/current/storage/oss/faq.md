---
title: Häufig gestellte Fragen
---

## Is access to S3 restricted to the internal network?

No — there is no such thing as a "private internal network" in this context. Access to the **S3** service is performed **via public IP addresses**. By default, S3 buckets are **private**, and access is controlled through IP address whitelists associated with the bucket.

Allowed IP addresses can be:

- **Dedicated public IPs** assigned to the client within the Cloud Temple infrastructure;
- or **external public IPs** (remote sites, warehouses, factories, partner operators, etc.).

## Can buckets be accessible from outside?

Yes, but only in specific, controlled cases. Access restrictions are managed **per bucket**, allowing you to define:

- **strictly private buckets**, accessible only from the client's authorized public IP addresses;
- **partially accessible buckets**, allowing specific external public IP addresses (remote sites, partners).

## Was ist ein sicheres S3-Download-Link?

Ein **vorgeschalteter Link** (*pre-signed URL*) ist eine temporäre, signierte URL, die es ermöglicht, gezielt auf ein S3-Objekt zuzugreifen, ohne permanente Zugangsdaten preiszugeben. Der Link enthält einen **Token** und ein **Ablaufdatum**.

**Eigenschaften:**

- Konfigurierbare Gültigkeitsdauer (z. B. standardmäßig 5 Tage)
- Generierung über API oder über die Anwendung
- Zugriff unterliegt IP-Whitelist-Regeln und Bucket-Politiken

## Can signed URLs be used from outside?

Not if the bucket is restricted by IP list.

Even with a valid signed URL, access will be denied if the request does not originate from an **authorized public IP address** for this bucket.

Example:

> If the bucket is configured to allow only the client's dedicated public IPs, an external user will **not** be able to download the file, even with a temporary link.

## Can temporary links be created for one-time use?

Yes. **Pre-signed links** can be generated on demand for temporary sharing. They include an **access token** and expire after the configured duration.

These links always remain subject to the bucket's **IP restrictions**.

## What happens if a request comes from an unauthorized IP?

Access is **denied** (HTTP 403 – *Access Denied*).

The service checks:

1. The validity of the **token** (if pre-signed link)
2. The **source IP** of the request
3. The **ACL policies** and rules configured on the bucket

Any unsatisfied condition results in access being denied.

## Empfohlene Anwendungsszenarien

- **Interne Kundenarchivierung**: Private Buckets, die ausschließlich über die dedizierten öffentlichen IP-Adressen des Kunden zugänglich sind (Verwaltung über Whitelist).
- **Sichere temporäre Freigabe**: Generierung von vorgeschriebenen Links mit kurzer Gültigkeit und strenger Kontrolle der autorisierten IP-Adressen.
- **Spezifischer Fernzugriff auf Standorte**: Genehmigung genau definierter externer öffentlicher IP-Adressen für geschäftskritische Standorte (Lager, Fabriken) nach Sicherheitsüberprüfung.