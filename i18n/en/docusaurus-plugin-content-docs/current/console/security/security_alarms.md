---
title: Security Alerts
---

Find here the security alerts related to our cloud services.
This page is updated daily to account for newly identified vulnerabilities.

## Information

- **Date** : Initial publication date of the Cloud Temple security alert.
- **Reference(s)** : CVE ID, if available.
- **CVSS** : Base CVSS v3 score as reported by the vendor or CVE, uncontextualized. Contextualization is expressed through the CT severity. If the alert concerns multiple vulnerabilities, the minimum and maximum CVSS scores are indicated.
- **Title** : Alert title, with vendor reference if available.
- **Description** : Summary description, with links to detailed information.
- **Service(s)** : Cloud Temple service(s) potentially affected.
- **Severity** : Severity level within the context of Cloud Temple services (for the most critical vulnerability in case of multiple vulnerabilities). Exploitation criteria are considered within the technical context of our cloud infrastructure and services.

| Level | Description |
|--------|-------------|
| 🔴 **Critical** | CVSS 7+ vulnerability presenting a significant exploitation risk (high exposure, ease of exploitation). A correction or mitigation is strongly recommended as soon as possible.|
| 🟠 **Important** | CVSS 7+ vulnerability not presenting a significant exploitation risk (limited exposure or exploitation constraints) |
| 🟡 **Moderate** | CVSS 4+ vulnerability |
| 🔵 **Low** | CVSS below 4, or non-exploitable vulnerability. |

- **Treatment** : Information and recommendations within the context of Cloud Temple services. ⚠️ indicates that user action is required to address the vulnerability. ✅ indicates that the vulnerability treatment is handled by Cloud Temple.

## Vulnerabilities

| Date | Reference(s) | CVSS | Title | Description | Service(s) | Severity | Treatment |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-6.8 | **VMSA-2025-0010 : Multiple vulnerabilities in VMware ESXi (CVE-2025-41226, CVE-2025-41227, CVE-2025-41228)** | Multiple vulnerabilities in VMware ESXi have been reported: Guest operation denial of service vulnerability (CVE-2025-41226), Denial of service vulnerability (CVE-2025-41227), Cross Site Scripting (XSS) vulnerability (CVE-2025-41228). Patches are provided by the vendor. | IaaS By VMware | 🟡 Moderate | ⚠️ We recommend updating your hypervisors. The corrected ESXi versions are available once validated by Cloud Temple. Console will indicate the ESXi requiring an update. | 
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-8.8 | **VMSA-2025-0010 : Multiple vulnerabilities in vCenter (CVE-2025-41225, CVE-2025-41228)** | Multiple vulnerabilities in VMware vCenter have been reported: Authenticated command execution vulnerability in VMware vCenter Server (CVE-2025-41225), Cross Site Scripting (XSS) vulnerability (CVE-2025-41228). Patches are provided by the vendor. | IaaS By VMware | 🟠 Important | ✅ The update of your vCenter instances is scheduled once the patches are validated by Cloud Temple. No action is required from your side. | 
| 14/05/2025 | [VMSA-2025-0007](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 6.1 | **VMSA-2025-0007 : Unsecured file management vulnerability in VMware Tools (CVE-2025-22247)** | An unsecured file management vulnerability in VMware Tools has been reported. Patches are provided by the vendor. | IaaS By VMware | 🟡 Moderate | ⚠️ We recommend updating VMware Tools on your virtual machines. | 
| 25/03/2025 | [VMSA-2025-0005](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 7.8 | **VMSA-2025-0005 : Authentication bypass vulnerability in VMware Tools for Windows (CVE-2025-22230)** | An authentication bypass vulnerability in VMware Tools for Windows has been reported. Patches are provided by the vendor. | IaaS By VMware | 🟠 Important | ⚠️ We recommend updating VMware Tools on your virtual machines. |
| 04/03/2025 | [VMSA-2025-0004](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 7.1-9.3 | **VMSA-2025-0004 : Multiple vulnerabilities in VMware ESXi (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** | Multiple vulnerabilities in VMware ESXi have been reported: VMCI heap overflow vulnerability (CVE-2025-22224) rated as Critical by VMware, Arbitrary write vulnerability in VMware ESXi (CVE-2025-22225), HGFS information disclosure vulnerability (CVE-2025-22226). Patches are provided by the vendor.  | IaaS By VMware | 🟠 Important | ⚠️ We recommend updating your hypervisors. The corrected ESXi versions are available once validated by Cloud Temple. Console will indicate the ESXi requiring an update. |