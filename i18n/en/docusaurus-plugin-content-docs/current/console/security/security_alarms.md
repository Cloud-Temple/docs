---
title: Security Alerts
---

Find here the security alerts related to our cloud services.  
This page is updated daily to reflect newly identified vulnerabilities.

## Vulnerabilities

| Date | Reference(s) | CVSS | Title | Description | Service(s) | Severity | Treatment |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 01/07/2025 | [XSA-470](https://xenbits.xen.org/xsa/advisory-470.html) | N/A | **XCP-NG vulnerability due to improper exception handling** <br/> [Vendor bulletin](https://xcp-ng.org/blog/2025/07/03/july-2025-security-and-maintenance-update-for-xcp-ng-8-2-lts/) | A vulnerability was discovered in XCP-NG, allowing privileged code executed from a virtual machine to crash the hypervisor, resulting in a denial of service (DoS) of the entire host. | IaaS OpenSource | 🟡 Moderate | ✅ Updating your XCP-ng instances is scheduled as soon as the patches are validated by Cloud Temple. No action is required on your part. |
| 23/05/2025 | [XSA-468](https://xenbits.xen.org/xsa/advisory-468.html) | 8.8-9.0 | **XCP-NG vulnerabilities in Windows PV drivers (XSA-468)** <br/> [Publisher bulletin](https://xcp-ng.org/blog/2025/05/27/xsa-468-windows-pv-driver-vulnerabilities/) | Several vulnerabilities (CVE-2025-27462, CVE-2025-27463, CVE-2025-27464) in Windows PV drivers allow unprivileged users to obtain system privileges within Windows VMs. | IaaS OpenSource | 🟠 Important | ⚠️ We recommend updating the Windows PV drivers of your virtual machines to the corrected versions indicated in the security bulletin. ✅ The update of your XCP-ng instances is planned as soon as the patches are validated by Cloud Temple. |
| 22/05/2025 | [XSA-469, INTEL-SA](https://xcp-ng.org/blog/2025/05/14/may-2025-security-update-for-xcp-ng-8-2-8-3/) | 4.9-6.5 | **XCP-NG vulnerabilities in Intel microcode and Xen (XSA-469, INTEL-SA)** <br/> [Publisher bulletin](https://xcp-ng.org/blog/2025/05/14/may-2025-security-update-for-xcp-ng-8-2-8-3/) | Security patches for XCP-ng have been published, correcting several vulnerabilities in Intel microcode and Xen. | IaaS OpenSource | 🟡 Moderate | ✅ The update of your XCP-ng instances is planned as soon as the patches are validated by Cloud Temple. No action is required from your side.|
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-6.8 | **VMSA-2025-0010: Multiple vulnerabilities in VMware ESXi (CVE-2025-41226, CVE-2025-41227, CVE-2025-41228)** | Multiple vulnerabilities have been reported in VMware ESXi: Guest operation denial of service vulnerability (CVE-2025-41226), Denial of service vulnerability (CVE-2025-41227), Cross Site Scripting (XSS) vulnerability (CVE-2025-41228). Fixes are provided by the vendor. | IaaS By VMware | 🟡 Moderate | ⚠️ We recommend that you update your hypervisors. The patched ESXi versions are available once validated by Cloud Temple. The Console indicates which ESXi instances require an update. |
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-8.8 | **VMSA-2025-0010: Multiple vulnerabilities in vCenter (CVE-2025-41225, CVE-2025-41228)** | Multiple vulnerabilities have been reported in VMware vCenter: Authenticated command execution vulnerability in VMware vCenter Server (CVE-2025-41225), Cross Site Scripting (XSS) vulnerability (CVE-2025-41228). Fixes are provided by the vendor. | IaaS By VMware | 🟠 Important | ✅ Updating your vCenter instances is scheduled as soon as the patches are validated by Cloud Temple. No action is required on your part. |
| 14/05/2025 | [VMSA-2025-0007](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 6.1 | **VMSA-2025-0007: Insecure file management vulnerability in VMware Tools (CVE-2025-22247)** | An insecure file management vulnerability in VMware Tools has been reported. Fixes are provided by the vendor. | IaaS By VMware | 🟡 Moderate | ⚠️ We recommend that you update VMware Tools on your virtual machines. |
| 25/03/2025 | [VMSA-2025-0005](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 7.8 | **VMSA-2025-0005: Authentication bypass vulnerability in VMware Tools for Windows (CVE-2025-22230)** | An authentication bypass vulnerability in VMware Tools for Windows has been reported. Fixes are provided by the vendor. | IaaS By VMware | 🟠 Important | ⚠️ We recommend that you update VMware Tools on your virtual machines. |
| 04/03/2025 | [VMSA-2025-0004](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 7.1-9.3 | **VMSA-2025-0004: Multiple vulnerabilities in VMware ESXi (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** | Multiple vulnerabilities have been reported in VMware ESXi: VMCI heap overflow vulnerability (CVE-2025-22224) rated Critical by VMware, Arbitrary write vulnerability in VMware ESXi (CVE-2025-22225), HGFS information disclosure vulnerability (CVE-2025-22226). Fixes are provided by the vendor. | IaaS By VMware | 🟠 Important | ⚠️ We recommend that you update your hypervisors. The patched ESXi versions are available once validated by Cloud Temple. The Console indicates which ESXi instances require an update. |

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
