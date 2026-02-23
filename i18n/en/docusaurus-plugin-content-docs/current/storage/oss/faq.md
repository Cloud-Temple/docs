---
title: Frequently Asked Questions
---

## Is S3 access restricted to an internal network?

No — there is no concept of a "private internal network" in this context. Access to the **S3** service is performed **via public IP addresses**. By default, S3 buckets are **private**, and access is controlled through IP address whitelists associated with each bucket.

Allowed IP addresses can be:

- **Dedicated public IPs** assigned to the client within the Cloud Temple infrastructure;
- or **external public IPs** (remote sites, warehouses, factories, partner operators, etc.).

## Can buckets be accessible from outside?

Yes, but only in specific, controlled cases. Access restrictions are managed **at the bucket level**, allowing you to define:

- **Strictly private buckets**, accessible only from the client's authorized public IP addresses;
- **Partially accessible buckets**, allowing specific external public IP addresses (remote sites, partners).

## What is a secure S3 download link?

A **pre-signed URL** is a temporary, signed URL that allows one-time access to an S3 object without exposing permanent credentials. The link contains a **token** and an **expiration date**.

**Characteristics:**

- Configurable validity period (e.g., 5 days by default)
- Generated via API or from within an application
- Access subject to IP whitelist rules and bucket policies

## Can signed URLs be used from outside?

Not if the bucket is restricted by IP list.

Even with a valid signed URL, access will be denied if the request does not originate from an **authorized public IP address** for that bucket.

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

## Recommended Use Cases

- **Internal client archiving**: Private buckets accessible only from the client's dedicated public IP addresses (managed via whitelist).
- **Secure temporary sharing**: Generation of pre-signed links with short expiration times and strict IP access control.
- **Specific remote site access**: Authorization of precise external public IP addresses for business sites (warehouses, factories) after security validation.