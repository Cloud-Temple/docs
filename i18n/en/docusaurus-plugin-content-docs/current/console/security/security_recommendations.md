## Access to the Console

Access to the Console is the entry point to all your Cloud Temple services. It is therefore essential to protect it effectively.

### Configure backups

To ensure the security and resilience of your data, it is essential to define and correctly apply your backup policies. Assigning a backup policy to each virtual machine before starting it is mandatory. The documentation is available in the "Backup" section of the [Quick Start Guide | Cloud Temple Documentation](../../iaas_vmware/quickstart).

Here are the recommendations for managing backup policies for your Cloud Temple resources:

- **Define your backup policies:** Request support to create backup policies tailored to your organization's security needs.  
- **Avoid suspended policies:** Do not leave any VM associated with a suspended backup policy to avoid compromising data security.
- **Perform restoration tests:** Regularly test your backups to verify the effectiveness of your restoration procedures.

### Monitoring Activity on Cloud Services

To ensure effective monitoring of your cloud environment and quick response to anomalies, it is essential to implement an active monitoring strategy. We recommend particularly:

- **Monitor service availability** via the [Status page | Cloud Temple](https://status.cloud-temple.com/), to be alerted in case of incidents or global outages;
- **Enable relevant thematic notifications** for your usage from the Console, to receive real-time important alerts (see [Subscribing to Thematic Notifications | Cloud Temple Documentation](../../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques));
- **Leverage Cloud activity logs** to identify sensitive or suspicious actions on your resources (see section "Logging - Activity Tracking" of the [Getting Started Guide | Cloud Temple Documentation](../../iaas_vmware/quickstart)). The collection and analysis of activity logs can be automated via the Console API, to integrate events into your monitoring or incident detection tools.

### Encrypt Sensitive VMs

In addition to disk-level data encryption, native to all cloud resources, **VM encryption can be enabled to protect your most sensitive resources**. For this, see [Encrypt a VMware Virtual Machine | Cloud Temple Documentation](../../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Here are some best practices when using VM encryption:

- Enable encryption on sensitive VMs: Apply it from the machine creation or during a scheduled update. The operation requires temporarily stopping the VM;
- Verify the encryption status: Check from the console that the VM displays the "encrypted" status;
- Backup before encryption: Ensure the VM is properly backed up before any modification.

### Restrict access to the Console via IP filtering

Access to the cloud management console is limited to previously authorized IP addresses. This restriction allows access only to users from specified IP ranges, thus minimizing the risk of unauthorized access.

You can configure these IP restrictions in your organization's settings. To learn how to set up IP filtering, see the [Access Management and Authentication | Cloud Temple Documentation](../../console/iam/quickstart?_highlight=*facteur#gestion-des-accès-et-authentification).

To maximize the effectiveness of this mechanism, make sure to:

- **Limit the number of authorized IP addresses** to the strict minimum;
- Avoid overly broad or generic ranges;
- Add **only IP addresses from controlled environments** (e.g., your corporate network's outgoing IP);
- Prohibit, or limit as much as possible, individual IP addresses (e.g., IT staff's home public IP);
- Prohibit, or limit, IP addresses from third parties (e.g., service providers);
- Keep this list updated in case of changes to your network infrastructure.

For remote access (telecommuting, third-party providers...), prefer accessing through your corporate network via VPN rather than directly authorizing individual IP addresses. This reduces the exposure surface of the Console and centralizes access management within your organization.

### Managing Permissions on Your Cloud Services

The Cloud Temple Console allows granular access management by assigning each user one or more permission levels, which precisely define the authorized actions. Refer to the permissions documentation ([Available Permissions for Users in Your Organization | Cloud Temple Documentation](../../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) to understand in detail the different permissions and assign them appropriately.

For effective and secure permission management, we recommend following these best practices:

- **Apply the principle of least privilege:** Grant users only the permissions necessary for their tasks. This reduces risks by limiting access to non-essential features.
- **Limit sensitive permissions:** Assign sensitive permissions only to users responsible for these functions. Sensitive permissions include access management (console_public_access_write, *_console_access, object - storage_write), permission management (iam_write, iam_offline_access), and backup management (backup_iaas_opensource_write, backup_iaas_spp_write).**
- **Prioritize read-only access:** In case of doubt, provide read-only access (*_read) to minimize risks while allowing access to necessary information.
- **Conduct regular permission reviews:** Regularly check user permissions to remove obsolete ones. Exporting permissions in CSV format facilitates this management.**

Controlled permission allocation limits the risk of errors or malicious actions, while strengthening your security posture.

### Restrict the exposure of your resources

To limit the attack surface of your virtual machines, it is strongly recommended to restrict to the minimum necessary the services that are exposed. In particular, make sure to configure your resources so as **not to publicly expose the administration interfaces and consoles** of the deployed systems and applications.

If you use the Cloud Temple Object Storage services, it is also recommended to **not configure your buckets as public access**, unless strictly necessary (see [Limitation of access to your S3 buckets | Cloud Temple Documentation](../../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

## Recommendations for the Secure Usage of Cloud Temple Services

Cloud Temple services provide you with a highly secure infrastructure by design. However, certain security best practices fall under your responsibility as a user of these services. This guide helps you enhance the security of your cloud environment by leveraging the features provided in the Console.

You will find concrete recommendations for:

- Protect access to the cloud Console;
- Manage access and permissions in a controlled manner;
- Secure the resources deployed via our cloud services.

### Hardening Containers (PaaS Services)

To ensure the security of your containers within the OpenShift PaaS service, we recommend implementing the following measures to strengthen their hardening:

- **Image Sources**: Ensure all images come from reliable sources such as internal registries or the Red Hat Container Catalog, and avoid using unverified community images, such as those available on public Docker Hub.
- **Privilege Restriction**: Limit container privileges using OpenShift features, including *Security Context Constraints* (SCC), to restrict permissions to the minimum necessary.
- **SCC Configuration**: Create custom SCCs for each application or group of applications. This includes restricting allowed system calls (e.g., via *seccomp profiles*), with specific configurations such as prohibiting *ptrace* or *mount* to reduce container escape risks.
- **Workload Isolation**: Use *Namespaces* and *Network Policies* to isolate applications and limit unnecessary interactions between containers.
- **Full Logging**: Enable logging via the OpenShift Logging operator to capture events related to containers and hosted systems, to better detect and analyze any suspicious activity.

### Use Identity Federation

Identity federation allows integrating the Cloud Temple Console with your identity provider (IdP), enabling SSO. This approach centralizes authentication and offers several benefits:

- Unified account management: creation, modification, and deletion via your directory;
- Reduced attack surface: local accounts become unnecessary or limited;
- Enhanced traceability: access is logged by your IdP;
- Strengthened integration: MFA, alerting, contextual security policies...;
- Easier compliance: consistency with your internal practices.

For these reasons, **identity federation is recommended**, especially for large environments or high-security requirements.

Follow our step-by-step guides to integrate your identity provider:

- [Configure identity federation with Azure AD | Cloud Temple Documentation](../../console/iam/tutorials/sso_aad)
- [Configure identity federation with ADFS | Cloud Temple Documentation](../../console/iam/tutorials/sso_adfs)

### Regularly update hypervisors

Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches. However, updating hypervisors remains your responsibility, as we do not have visibility into your business constraints.  

Therefore, we recommend:  

- Check regularly in the Console for the availability of new builds for your hypervisors;  
- **Regularly deploy the new builds on all your hypervisors**, especially if they fix security vulnerabilities;  
- Regularly deploy new versions of the vmtools on your virtual machines.  

**A security alerts page is available** to inform you of known vulnerabilities and associated recommendations: [Security Alerts | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).

## Cloud Service Management

Your Cloud resources are managed from the Console. This chapter presents essential recommendations for controlling the operation of cloud services.

### Enable Multi-Factor Authentication (MFA)

Multi-Factor Authentication (MFA) significantly enhances the security of access to the Cloud Temple Console. It adds an authentication step by requesting a temporary code generated by a dedicated application, in addition to the password. This measure strongly limits the risk of unauthorized access, even if credentials are stolen.

For accounts managed locally by the Console (without federation), MFA is enabled by default and cannot be disabled.

**For federated accounts, it is strongly recommended to enforce MFA on the identity provider side**, especially for administrators with access to the Console.

For more information:  

- [What is MFA and is it mandatory? | Cloud Temple Documentation](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutorial: Identity Federation with Microsoft EntraID | Cloud Temple Documentation](../../console/iam/tutorials/sso_aad)
- [Tutorial: Identity Federation with Microsoft ADFS | Cloud Temple Documentation](../../console/iam/tutorials/sso_adfs)

### Hardening Virtual Machines (IaaS Services)

Hosting a virtual machine on a secure cloud does not, by itself, guarantee the security of the operating system, services, or applications it runs. Hardening VMs, whether deployed by you or from the catalog, is your responsibility.

We recommend **applying basic security measures**

- Keep systems up to date with security patches;
- Limit exposed services;
- Disable unnecessary components;  
- Restrict access rights to the minimum necessary;
- Enable access logging;
- Configure regular backups.

To guide you in these actions, rely on:

- The hardening guides from the software vendors you use;
- [Essential Guides and Best Practices for Cybersecurity | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer);
- [CIS Security Benchmarks® Guides | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

These best practices constitute the first line of defense to secure your systems in the cloud.

---
title: Best Practices
---

*Last update: 22/05/2025*

### Identify Tenant Owners

The tenant owner holds all permissions related to enabled products and receives official notifications. It is crucial to ensure that the owners of your tenant are the appropriate points of contact within your organization.

For secure and efficient management:

- **Identify a responsible owner**, preferably a person directly involved in managing the environment.
- **Verify the contact email address** of the owner to ensure it is valid and regularly checked.
- **Ensure direct control** by adding an owner who is a member of your organization, even if you delegate the management of your cloud service, to be able to monitor notifications and critical decisions.
- **Limit the number of owners** to 3 to reduce the attack surface and facilitate auditing of critical actions.

For more information on managing tenant owners, see the [Guide for Tenant Owners | Cloud Temple Documentation](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Access the Console from Secure Devices

The workstation and environment from which you access the Console are important for securing the administration of your cloud services. If you are operating in a high-security environment, you can apply the following recommendations:

- For administration by your own teams, apply all or part of the [Secure IT Administration Recommendations | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si);
- In case of administration by a third party, consider the possibility of engaging a [Secure Administration and Maintenance Providers (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), depending on the sensitivity of the hosted resources and your legal and regulatory context.

## To go further

If you wish to benefit from additional security services or enhanced support on security aspects (audit, hardening, compliance, advice, etc.), our **Professional Services** can be engaged. For more information, contact your Cloud Temple contact person.

## Securing Hosted Resources

In a Cloud model, the security of deployed resources is the responsibility of the user. Cloud Temple provides a secure infrastructure, but it is up to you to protect your operating systems, data, and configurations.

The essential best practices below will help strengthen the security of your VMs: configuration of backup policies, encryption of critical resources, and system hardening. These measures help mitigate the risk of compromise, ensure data integrity, and guarantee business continuity in case of an incident.

### Raise Awareness for Administrators About the Risk of Phishing

Access to the Cloud Temple Console must be subject to enhanced vigilance, particularly against phishing attempts aimed at stealing credentials or MFA codes. It is crucial that authorized users are regularly educated on these risks: systematic verification of the URL, caution with unexpected messages, and immediate reporting of any suspicious activity.

To limit these risks, we recommend never accessing the Console via a link received by email, but always manually entering the usual URL.

These best practices are your responsibility as a client and are essential to prevent phishing attacks. In case of doubt, the Cloud Temple support remains available to you.