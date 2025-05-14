---
title: Security Alerts
---

Find here our security alerts and recommendations related to Cloud Temple services.

## Security Vulnerabilities

### Vulnerabilities Table

| Publication Date | Affected Service | Identifier | CVSSv3 Score | Details | CT Severity | Recommendation | Description |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 12/05/2025 | IaaS By VMware | CVE-2025-22247 | 6.1 | **VMware Tools Vulnerability: CVE-2025-25234** [Vendor Bulletin](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 🟡 Moderate | Update VMware Tools to 12.5.2 on your VMs to fix the vulnerability. | An insecure file management vulnerability in VMware Tools was privately reported to VMware. Updates are available to remediate this vulnerability in affected VMware products. |
| 25/03/2025 | IaaS By VMware | CVE-2025-22230 | 7.8 | **VMware Tools Vulnerability: CVE-2025-22230** [Vendor Bulletin](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 🟠 High | Update VMware Tools to 15.5.1 for Windows on your VMs to fix this vulnerability. | An authentication bypass vulnerability in VMware Tools for Windows was privately reported to VMware. Updates are available to remediate this vulnerability in affected VMware products. |
| 04/03/2025 | IaaS By VMware | Multiple CVEs | 7.1 to 9.3 | **Vulnerabilities in VMware ESXI (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** [Vendor Bulletin](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 🟠 High | Deploy available patches corresponding to your branch as soon as possible. The new patched versions are available in Console. As a reminder, Console indicates which versions of your ESXi are not up to date. | Multiple vulnerabilities in VMware ESXi were privately reported to VMware (CVE-2025-22224; CVE-2025-22225; CVE-2025-22226). Updates are available to remediate these vulnerabilities in affected VMware products. |

## Severity Scales

| Level | Description |
|--------|-------------|
| 🔴 **Critical** | CVSS 7+ vulnerability with significant exploitation risk (exposure, ease of exploitation) |
| 🟠 **High** | CVSS 7+ vulnerability without significant exploitation risk (limited exposure or exploitation constraints) |
| 🟡 **Moderate** | CVSS 4+ vulnerability |
| 🔵 **Low** | CVSS vulnerability below 4, or not exploitable. |

*Exploitation criteria are considered within the technical context of our Cloud infrastructures and services.*
