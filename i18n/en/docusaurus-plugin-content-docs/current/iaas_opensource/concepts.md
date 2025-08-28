---
Title: Concepts
---

The Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical continuity and disaster recovery needs, with a particular emphasis on demanding sectors such as manufacturing, finance, and insurance. Leveraging cutting-edge technologies, this infrastructure ensures maximum uptime and optimal performance for your critical workloads.

## A Trusted Technological Platform

The Cloud Temple IaaS platform leverages renowned international technology partners:

- Computing: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Networking: __JUNIPER__.
- Virtualization: __Stack Opensource__, providing a reliable and proven foundation for managing your cloud environments.

This architecture is built upon the __VersaStack__ model, an alliance between Cisco and IBM, ensuring broad compatibility with major software vendors.

## A Dedicated and Automated Infrastructure

Although entirely automated through APIs and a provider Terraform, Cloud Temple's IaaS offering provides a unique infrastructure:

- **Dedicated Resources**: Compute instances, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among clients.
- **Maximum Predictability**: You have full control over virtualization rates, storage IOPS pressure, and benefit from clear, consumption-based billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Primary Features

- Dedicated and on-demand computing resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Networking resources (Internet, private networks).
- Cross-region replication with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via [Shiva Console](../console/console.md) or Infrastructure as Code using APIs and Terraform provider.

## Benefits

| Advantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Trust in the digital | Data storage in France and GDPR compliance.                                                                                          |
| Security            | Highly secure platform, certified __SecNumCloud__, __HDS__ (Health Data Storage), __ISO 27001__ and __ISAE 3402 type II__.        |
| Uptime             | Platform uptime of 99.99%, measured monthly, including maintenance windows.                                                        |
| Resilience         | Implementation of business continuity/disaster recovery plans as needed.                                                               |
| Automation         | Fully automated platform designed for integration into a digital transformation program.                                        |
| On-demand           | Resources available on demand.                                                                                                          |

## Regions and Availability Zones

The OpenIaaS product is deployed within a availability zone.
An availability zone constitutes part of a region.

This type of deployment allows for the selection of cluster location and distribution across different availability zones (AZ).
This enhances load balancing, maximizes redundancy, and simplifies the implementation of a Disaster Recovery Plan (DRP) in case of an incident.

---

## Classes of Compute Blades

The compute blades available for the Bare Metal offering provide a range of performance levels to meet diverse requirements:

| Reference             | RAM (1) | Frequency (2)                         | Cores / Threads | Connectivity (3) | GPU (4)          |
|-----------------------|----------|-------------------------|------------------|-----------------|-------------------|
| ECO                   | 384 Go   | 2.20/3.0 GHz (Silver 4114 or equivalent) | 20 / 40 threads | 2 X 10 Gbit/s    | -                  |
| STANDARD              | 384 Go   | 2.40/3.4 GHz (Silver 4314 or equivalent) | 32 / 64 threads | 2 X 25 Gbit/s    | -                  |
| ADVANCE               | 768 Go   | 2.80/3.5 GHz (Gold 6342 or equivalent) | 48 / 96 threads | 2 X 25 Gbit/s    | -                  |
| PERFORMANCE 1         | 384 Go   | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads | 2 X 25 Gbit/s    | -                  |
| PERFORMANCE 2         | 768 Go   | 3.00/3.6 GHz (Gold 6354 or equivalent) | 36 / 72 threads | 2 X 25 Gbit/s    | -                  |
| PERFORMANCE 3         | 1536 Go  | 2.60/3.5 GHz (Gold 6348 or equivalent) | 56 / 112 threads | 2 X 25 Gbit/s    | -                  |
| PERFORMANCE 4         | 512 Go   | 2.50/4.1 GHz (Intel 6426Y or equivalent) | 32 / 64 threads | 2 X 25 Gbit/s    | 2 x NVIDIA L40S 48Go |

(1) RAM in gigabytes (GB).
(2) CPU frequency in gigahertz (GHz).
(3) Connectivity speed in gigabits per second (Gbps), specified as "X X [speed]".
(4) GPU type, if applicable.

### Notes

- **(1)__ The available memory is physically present on the blades and cannot be altered.
- **(2)__ The indicated frequencies correspond to the minimum base frequency and turbo frequency.
- **(3)__ Physical connectivity is shared for network access and block storage access, thanks to Cisco UCS converged architecture.
- **(4)__ Available GPUs evolve with the latest technologies. As of May 1st, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.
- **(5)__ High availability on a cluster is available only from two nodes.

Infrastructure uptime is guaranteed at 99.9%, measured monthly, including maintenance windows. All SLA-related requests must be submitted via an incident ticket.

## Block Storage Classes

The distributed block storage, based on **IBM Spectrum Virtualize**, provides a range of performance levels suitable for various use cases:

| Reference                     | IOPS/TB                 | Primary Usage                        |
|------------------------------|-------------------------|----------------------------------------|
| __FLASH - Essential__         | 500                     | Light workload tasks                   |
| __FLASH - Standard__          | 1500                    | Standard workload tasks               |
| __FLASH - Premium__           | 3000                    | Intensive workload tasks              |
| __FLASH - Enterprise__        | 7500                    | Critical workload tasks             |
| __FLASH - Ultra__             | 15000                   | Extremely intensive workload tasks   |
| __MASS STORAGE - Archiving__   | Not applicable          | Economical storage for archival       |

### Features

- **Technology**: Flash NVMe with Distributed RAID 6 for enhanced resilience.
- **Availability**: 99.99%, measured monthly.
- **Restrictions**: No read/write limitations, no automatic compression or deduplication, ensuring full utilization of reserved volumes.

## Networks

The OpenIaaS product is compatible with [private networks](network/private_network) and [internet access](network/internet).

Two types of networks are available upon configuring a virtual machine:

### VLAN Networks

VLAN networks should be deployed on a per-VLAN basis, meaning you create one network card for each VLAN. If you need to support multiple networks, simply create additional network cards.

A limitation exists regarding the maximum number of network cards that can be created on a VM, which is capped at 7.

### The VLAN Trunk

In scenarios where you need to carry more than 7 VLANs, a VLAN Trunk is required. A VLAN Trunk allows all your VLANs to pass through a single interface. The configuration of VLAN IDs is done via virtual interfaces of type VLAN from the hypervisor OS of the VM. The VLAN IDs are the same as those visible and present on the console.

## Virtual Machine Backups

Cloud Temple offers a **distributed, non-stop backup architecture**, an essential component for SecNumCloud French qualification.

Backups are stored on the [Qualified Object Storage (SecNumCloud)](../storage/oss), ensuring optimal protection in case of major production datacenter failure. This approach allows restoring data onto a secondary datacenter even during critical incidents such as fires.

This comprehensive solution includes:

- **Hot, site-outage backup of the entire disk**
- **Flexibility in restoration**, enabling selection of recovery point and location

The backup infrastructure leverages an open-source technology with agentless architecture, combining ease of use with automated processes. This solution optimizes storage space usage while maintaining high performance.

Backup speeds and restore times depend on the environment's change rate. The backup policy is fully configurable via [Cloud Temple Console](../console/console.md) for each virtual machine.

**Important Note:**

* Some virtual machines may not be compatible with this backup technology*, which relies on hypervisor instantaneous snapshot mechanisms. This typically applies to VMs with constant disk write operations. In such cases, the hypervisor cannot finalize the snapshot, necessitating VM freeze for completing the operation. The freeze can last several hours and is non-interruptible.

The recommended solution involves excluding the targeted disk from persistent writes and employing an alternative backup method.

| Reference                                   | Unité | SKU                               |
| -------------------------------------------- | ----- | ---------------------------------- |
| BACKUP - Access to service                  | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creation of a Backup Policy

To create a new backup policy, a request must be submitted to support, accessible via the float icon located at the top right corner of the interface.

Creating a new backup policy involves submitting:

- The name of your Organization
- Contact details (email and phone) for finalizing configuration
- Tenant's name
- Backup policy's name
- Desired characteristics (x days, y weeks, z months, etc.)

## Virtual Machines

### Management of vCPU Resources

Adjustments to virtual CPU (vCPU) resources are performed cold, meaning the machine is powered off. The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful tests conducted on Linux VMs equipped with 128 vCPUs.

It's crucial to note that the support for the guest operating system plays a pivotal role in resource allocation. Allocating more than what is supported by the operating system can lead to substantial performance issues.

### Memory Management

Memory modifications can also be performed cold. The limits are as follows:

- 1.5 TiB with memory snapshots support
- 8 TiB without memory snapshots support
- 16 TiB (theoretical limit excluding security overhead, minus RAM allocated to Xen and control domain)

The actually usable memory can be limited by the invited operating system. Exceeding limits supported by the OS guest may result in performance drops.

### Disk Management

- The maximum size of a disk is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

It is not possible to resize existing disks. To increase storage capacity, a new disk must be created.

### Tools for Virtual Machines
These tools are utilized to ensure optimal performance of virtual machines. Whenever you intend to perform an action and one of these tools is required, a message will appear on the Cloud Temple console.
To install these tools, refer to the official Xen Server websites for precise instructions based on your operating system.

### Management Agent
The Management Agent is a component installed on each virtual machine. It enables the hypervisor to better manage the machine by providing access to more information and facilitating certain actions in a cleaner manner.

#### Paravirtualization Drivers (PV Drivers)
The PV Drivers are drivers installed within the virtual machine to enhance its performance.
Without these drivers, the machine operates but at a slower pace. Furthermore, they enable certain advanced actions.
The PV Drivers are natively installed on most current Linux kernels.

### Tools
The Tools encompass a suite of software components that enhance the integration of the virtual machine with the virtualization infrastructure.

## Catalogues

The catalog serves to manage three primary types of essential elements:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can access critical information such as location, number of disks, and network adapters.

When the number of virtual disks is indicated as zero, it signifies that this is a configuration template without an operating system pre-installed, enabling you to deploy your personalized environment independently.

## Virtual Machine Replication

Cloud Temple's __virtual machine replication__ ensures the protection and continuity of your critical data through automated copying of your environments to a separate availability zone. This feature, natively integrated into our Open Source IaaS offering, meets the most stringent business continuity and disaster recovery requirements.

### Automated and Secure Protection

The Cloud Temple replication leverages a **qualified SecNumCloud** infrastructure, ensuring:

- **Asynchronous Replication**: Continuous copying of your virtual machines without impacting production performance
- **Geographic Separation**: Storage of replicas in a different availability zone compared to the source
- **Complete Automation**: Entirely automated process via the [Cloud Temple Console](../console/console.md)
- **Regulatory Compliance**: Adherence to backup and continuity of operations requirements

### Benefits of Replication

| Advantage                | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuity of Service   | Safeguarding critical services from major incidents on the primary site through replication.                                                          |
| Geographic Protection   | Replication to a distinct availability zone, shielding against localized disasters.                                             |
| Temporal Flexibility   | Selection of replication interval according to your needs: from 1 minute to 24 hours.                                                            |
| Simplified Management  | Fully integrated configuration and monitoring within the Cloud Temple Console.                                                                |
| SecNumCloud Compliance | Qualified infrastructure ensuring highest security for sensitive data.                                             |

## Replication Configuration

#### Replication Policies

Defining a replication policy sets the protection parameters for your virtual machines:

- **Destination**: Selection of target storage in the availability zone for replication
- **Frequency**: Interval of replication tailored to your recovery point objective (RPO) needs
- **Retention**: Number of recovery points retained

#### Available Time Intervals

| Time Interval          | Recommended Usage                           | Max Allowed Data Loss (RPO) |
|------------------------|\-----------------------------------------------|-----------------------------|
| __1 to 59 minutes__    | Critical real-time applications             | < 1 hour                     |
| __1 to 24 hours__      | Business and standard environment applications | < 24 hours                   |

#### Association of Virtual Machines

Once the policy is created, you can associate your virtual machines to be protected:

- **Simple Selection**: Choosing VMs from the Console interface
- **Automatic Validation**: Checking compatibility and prerequisites
- **Immediate Activation**: Automatic start of replication upon configuration

## Replica Management

This section outlines the management of replicas within our cloud infrastructure. It covers aspects such as creation, configuration, monitoring, and scaling of replica instances to ensure high availability, fault tolerance, and optimal performance for our applications.

### Replica Creation

1. **Initiating Replica Deployment**:
   - Users can initiate replica deployment through the Cloud Management Console (CMC).
   - Specify the application type, desired replicas count, and target region/zone.

2. **Automated Provisioning**:
   - The system automatically provisions necessary resources based on the specified parameters.
   - Utilizes Infrastructure as Code (IaC) tools for consistent and scalable deployment.

### Replica Configuration

1. **Instance Tuning**:
   - Configure instance types, memory allocation, CPU cores, and storage options according to application requirements.
   - Leverage auto-scaling policies to dynamically adjust resources based on load.

2. **Network Configuration**:
   - Set up network settings including VPCs, subnets, security groups, and load balancers for seamless communication between replicas.

3. **Software Deployment**:
   - Automate software installation and configuration using containerization (e.g., Docker) or virtual machines (e.g., VMs).
   - Ensure consistent deployment across all replica instances through version control and automated scripts.

### Replica Monitoring

1. **Health Checks**:
   - Implement health checks to monitor the status of each replica instance continuously.
   - Utilize monitoring tools like Prometheus, Grafana for real-time metrics collection and alerting.

2. **Performance Metrics**:
   - Track key performance indicators (KPIs) such as CPU utilization, memory usage, network throughput, and response times.
   - Set up dashboards to visualize health and performance data effectively.

3. **Alerting System**:
   - Configure alerts for critical thresholds or anomalies detected by monitoring tools.
   - Notify operations teams via email, SMS, or integration with incident management systems (e.g., PagerDuty).

### Replica Scaling

1. **Horizontal Scaling**:
   - Easily add or remove replicas based on demand using automated scaling groups.
   - Leverage auto-scaling policies to adjust replica count dynamically in response to load changes.

2. **Load Balancing**:
   - Distribute incoming traffic across replicas using built-in load balancers (e.g., AWS ELB, Azure Load Balancer).
   - Implement health checks for automatic failover and redundancy.

3. **Resource Optimization**:
   - Optimize resource allocation by analyzing performance metrics and scaling patterns.
   - Use cost optimization strategies to balance performance with expenditure.

### Replica Maintenance

1. **Patch Management**:
   - Automate patching of operating systems, application servers, and middleware to maintain security and stability.
   - Schedule maintenance windows to minimize disruption to services.

2. **Backup & Recovery**:
   - Implement automated backup solutions for replica data using tools like AWS RDS snapshots or Azure Backup.
   - Test recovery procedures regularly to ensure business continuity in case of failures.

3. **Compliance & Security**:
   - Ensure replicas adhere to security standards and compliance requirements (e.g., GDPR, HIPAA).
   - Regularly audit configurations and access logs for potential vulnerabilities or misconfigurations.

### Replica Troubleshooting

1. **Diagnostic Tools**:
   - Utilize logging tools like ELK Stack (Elasticsearch, Logstash, Kibana) to analyze replica-specific logs.
   - Employ tracing tools such as Jaeger or Zipkin for distributed tracing across microservices.

2. **Root Cause Analysis**:
   - Use monitoring data and logs to pinpoint the root cause of issues affecting replicas.
   - Collaborate with development teams to resolve application-level problems impacting replica health.

3. **Incident Response**:
   - Establish clear incident response procedures for handling replica-related failures or outages.
   - Document processes for quick recovery and minimize downtime.

This comprehensive management framework ensures that replicas operate efficiently, reliably, and securely within our cloud environment, supporting the scalability and resilience of our applications.

#### Policy Overview

The Cloud Temple Console provides a centralized view of your replication policies:

- Policy Name and Frequency
- Destination Availability Zone
- Associated Storage Pool
- Available Management Actions

### Replica View

The replica table provides a view of:

- The names of the virtual machines replicated
- The source and target locations
- The replication policy associated
- Exporting data in CSV format

---

# Best Practices

---

#### Recommendations by Type of Load

- **Critical Applications**: Replicate every 1-30 minutes to minimize data loss
- **Business Applications**: Replicate hourly or bi-hourly as needed
- **Development Environments**: Daily replication is usually sufficient

### Policy Planning

- Develop distinct policies based on application criticality
- Clearly name your policies for easy management
- Regularly check the status of replicas from the console
- Document your replication strategy for your team

**Important Note:**

*Replication does not replace a comprehensive backup strategy. It serves as an essential complement to ensure business continuity in case of a major incident on your primary site.*

## High Availability

High availability ensures the continuous operation of virtual machines (VM) in case of a physical host failure within an OpenIaaS pool. With high availability (HA), each host in the pool regularly sends health check signals to its peers via shared storage (Block Storage Heartbeat). In the event of prolonged unresponsiveness, the host is considered failed.

A Block Storage designated as a heartbeat serves as the foundation for authenticating hosts that no longer respond.

To properly configure high availability within an OpenIaaS pool, it's essential to have **at least two hosts** connected.

Each VM must be configured with a high-availability restart priority:

#### Disabled
High availability is not enabled. In case of host failure, the virtual machine will not be restarted.

#### Restart
In case of host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured for "restart" are given priority and restarted before those set to "best-effort."

#### Best-Effort
In the event of a host failure, the virtual machine will be automatically restarted only if sufficient resources remain available after processing all virtual machines configured in "restart" mode. The "Best-effort" mode makes only one attempt; therefore, if resources are insufficient, the virtual machine will not be restarted.