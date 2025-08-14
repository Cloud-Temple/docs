---
title: Security Alerts
---

Find here the security alerts related to our cloud services.
This page is updated daily to account for newly identified vulnerabilities.

## Vulnerabilities

| Date | Reference(s) | CVSS | Title | Description | Service(s) | Severity | Treatment |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 01/07/2025 | [XSA-470](https://xenbits.xen.org/xsa/advisory-470.html) | N/A | **XCP-NG Vulnerability via Poor Exception Handling** <br/> [Editor's Bulletin](https://xcp-ng.org/blog/2025/07/03/july-2025-security-and-maintenance-update-for-xcp-ng-8-2-lts/) | A vulnerability was discovered in XCP-NG, allowing privileged code executed from a virtual machine to cause the hypervisor to crash, resulting in a denial of service (DoS) for the entire host. | IaaS OpenSource | 🟡 Moderate | ✅ Your XCP-ng instances will be updated as soon as the fixes are validated by Cloud Temple. No action is required from your side.|
| 23/05/2025 | [XSA-468](https://xenbits.xen.org/xsa/advisory-468.html) | 8.8-9.0 | **XCP-NG Vulnerabilities in Windows PV Drivers (XSA-468)** <br/> [Editor's Bulletin](https://xcp-ng.org/blog/2025/05/27/xsa-468-windows-pv-driver-vulnerabilities/) | Multiple vulnerabilities (CVE-2025-27462, CVE-2025-27463, CVE-2025-27464) in Windows PV drivers allow unprivileged users to gain system privileges inside Windows VMs. | IaaS OpenSource | 🟠 Important | ⚠️ We recommend updating the Windows PV drivers on your virtual machines to the corrected versions indicated in the security bulletin. ✅ Your XCP-ng instances will be updated as soon as the fixes are validated by Cloud Temple. |
| 22/05/2025 | [XSA-469, INTEL-SA](https://xcp-ng.org/blog/2025/05/14/may-2025-security-update-for-xcp-ng-8-2-8-3/) | 4.9-6.5 | **XCP-NG Vulnerabilities in Intel Microcode and Xen (XSA-469, INTEL-SA)** <br/> [Editor's Bulletin](https://xcp-ng.org/blog/2025/05/14/may-2025-security-update-for-xcp-ng-8-2-8-3/) | Security patches for XCP-ng have been released, addressing multiple vulnerabilities in Intel microcode and Xen. | IaaS OpenSource | 🟡 Moderate | ✅ Your XCP-ng instances will be updated as soon as the fixes are validated by Cloud Temple. No action is required from your side.|
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-6.8 | **VMSA-2025-0010: Multiple Vulnerabilities in VMware ESXi (CVE-2025-41226, CVE-2025-41227, CVE-2025-41228)** | Multiple vulnerabilities in VMware ESXi have been reported: Guest operation denial of service vulnerability (CVE-2025-41226), Denial of service vulnerability (CVE-2025-41227), Cross Site Scripting (XSS) vulnerability (CVE-2025-41228). Patches are provided by the vendor. | IaaS By VMware | 🟡 Moderate | ⚠️ We recommend updating your hypervisors. The corrected ESXi versions are available once validated by Cloud Temple. Console will indicate ESXi requiring an update. | 
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-8.8 | **VMSA-2025-0010: Multiple Vulnerabilities in vCenter (CVE-2025-41225, CVE-2025-41228)** | Multiple vulnerabilities in VMware vCenter have been reported: Authenticated command execution vulnerability in VMware vCenter Server (CVE-2025-41225), Cross Site Scripting (XSS) vulnerability (CVE-2025-41228). Patches are provided by the vendor. | IaaS By VMware | 🟠 Important | ✅ Your vCenter instances will be updated as soon as the fixes are validated by Cloud Temple. No action is required from your side. The update is indicated in Console notifications. | 
| 14/05/2025 | [VMSA-2025-0007](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 6.1 | **VMSA-2025-0007: Unsecure File Management Vulnerability in VMware Tools (CVE-2025-22247)** | An unsecure file management vulnerability in VMware Tools has been reported. Patches are provided by the vendor. | IaaS By VMware | 🟡 Moderate | ⚠️ We recommend updating VMware Tools on your virtual machines. The corrected VM Tools versions are included in the ESXi packages provided by Cloud Temple. | 
| 25/03/2025 | [VMSA-2025-0005](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 7.8 | **VMSA-2025-0005: Authentication Bypass Vulnerability in VMware Tools for Windows (CVE-2025-22230)** | An authentication bypass vulnerability in VMware Tools for Windows has been reported. Patches are provided by the vendor. | IaaS By VMware | 🟠 Important | ⚠️ We recommend updating VMware Tools on your virtual machines. The corrected VM Tools versions are included in the ESXi packages provided by Cloud Temple |
| 04/03/2025 | [VMSA-2025-0004](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 7.1-9.3 | **VMSA-2025-0004: Multiple Vulnerabilities in VMware ESXi (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** | Multiple vulnerabilities in VMware ESXi have been reported: VMCI heap overflow vulnerability (CVE-2025-22224) rated Critical by VMware, Arbitrary write vulnerability in VMware ESXi (CVE-2025-22225), HGFS information disclosure vulnerability (CVE-2025-22226). Patches are provided by the vendor.  | IaaS By VMware | 🟠 Important | ⚠️ We recommend updating your hypervisors. The corrected ESXi versions are available once validated by Cloud Temple. Console will indicate ESXi requiring an update. |

## Information

- **Date** : Initial publication date of the Cloud Temple security alert.
- **Reference(s)** : CVE ID, if available.
- **CVSS** : Base CVSS v3 score as reported by the vendor or the CVE, uncontextualized. Contextualization is expressed through the CT severity. If the alert concerns multiple vulnerabilities, the minimum and maximum CVSS scores are indicated.
- **Title** : Title of the alert, with vendor reference if available.
- **Description** : Summary description, with links to detailed information.
- **Service(s)** : Cloud Temple service(s) potentially affected.
- **Severity** : Severity level within the context of Cloud Temple services (for the most critical vulnerability in case of multiple vulnerabilities). Exploitation criteria are considered within the technical context of our cloud infrastructure and services.

| Level | Description |
|--------|-------------|
| 🔴 **Critical** | Vulnerability with CVSS 7+ presenting a significant exploitation risk (high exposure, ease of exploitation). A fix or mitigation is strongly recommended as soon as possible.|
| 🟠 **Important** | Vulnerability with CVSS 7+ not presenting a significant exploitation risk (limited exposure or exploitation constraints) |
| 🟡 **Moderate** | Vulnerability with CVSS 4+ |
| 🔵 **Low** | Vulnerability with CVSS below 4, or non-exploitable. |

- **Treatment** : Information and recommendations within the context of Cloud Temple services. ⚠️ indicates that user action is required to address the vulnerability. ✅ indicates that the vulnerability treatment is handled by Cloud Temple.