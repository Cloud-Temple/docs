---
title: Getting Started Guide
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasVmConsoleBtn from './images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from './images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from './images/open_iaas_vm_console_clipboard.png'
import openIaasReplicationMenu from './images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from './images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from './images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from './images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from './images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from './images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from './images/open_iaas_replication_replicas_table.png'

### Calculation

This term refers to the process of performing mathematical operations such as addition, subtraction, multiplication, division, and more complex calculations involving equations, functions, and algorithms. In a technical context, it often pertains to computations performed by computers or software systems, including numerical analysis, data processing, and algorithmic problem-solving.

### Management of Virtual Machines

The management interface for your virtual machines is accessible in the Shiva console under the 'OpenIaaS' option, located on the top left toolbar in the screen.

### List of Virtual Machines

In the 'Virtual Machines' section, you can access a list of your virtual machines hosted on your trusted Cloud provider.

<img src={openIaasVirtualMachinesList} />

For each virtual machine, you will find:

- Its name.
- Its status (powered off or on).
- The availability zone (AZ).
- Its operating system.
- The number of virtual CPUs (vCPU).
- The amount of virtual memory (vRAM).

### Actions sur les machines virtuelles

Les opérations suivantes sont réalisables via cette interface :

- Mettre à jour la liste des machines virtuelles.
- Filtrer la liste.
- Rechercher une machine virtuelle par son nom.
- Créer une nouvelle machine virtuelle.

<img src={openIaasVirtualMachinesListActions} />

En cliquant sur l'icône de flèche verte à droite d'une machine virtuelle, vous accédez à toutes les informations pertinentes pour celle-ci.

<img src={openIaasVirtualMachineOverview} />

Un bandeau rapide offre des fonctionnalités de base :

<img src={openIaasVirtualMachineActions} />

- Allumer la machine virtuelle.
- Éteindre la machine virtuelle.
- Redémarrer la machine virtuelle.
- Ouvrir la console.
- Monter un ISO.
- Démonter un ISO.
- Convertir la machine virtuelle en template.
- Déplacer la machine virtuelle.
- Renommer la machine virtuelle.
- Supprimer la machine virtuelle.

Dans l'onglet d'informations générales, vous obtenez des détails détaillés sur votre machine virtuelle, notamment son emplacement physique (AZ, Pool, Host), la RAM, le CPU, les adresses IP, et d'autres informations.

<img src={openIaasVirtualMachineOverviewInformations} />

L'onglet avancé fournit des informations plus spécifiques :

- UUID de la machine virtuelle
- Guest tools
- OS invité
- Lecteur DVD

De plus, vous pouvez modifier certaines options telles que :

- Ordre de démarrage
- Secure boot
- Automatisé au démarrage (impossible si aucune politique de sauvegarde n'est associée à la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Virtual Machine Console

The virtual machine console can be accessed from the list of virtual machines by clicking on the __'Console'__ icon:

<img src={openIaasVmConsoleBtn} />

A new tab opens in your browser, displaying the console of your virtual machine, based on a VNC client:

<img src={openIaasVmConsoleOpen} />

Within the VNC menu, you can:
- Request sending specific keys,
- Force keyboard mapping (in case your virtual machine does not have the same keyboard layout as your web browser),
- Open a text field that can be transmitted to the machine. This method replaces the old non-functional clipboard,
- Switch to full-screen mode,
- Change window size (scaling).

#### Keyboard Layout Support
Input typed in the console depends on the language of your web browser's keyboard, the virtual machine's keyboard language, and whether the 'enforce keyboard' option on the left side of the screen is enabled or not. Here's a summary of possible scenarios with French language:

| Physical machine keyboard language (input) | Virtual machine keyboard language | 'Enforce keyboard' option selected | Result (output)        |
| ------------------------------------------ | --------------------------------- | ---------------------------------- | ---------------------- |
| French                                     | French                            | No                                 | ✅                     |
| French                                     | French                            | Yes                                | Not recommended        |
| French                                     | English                           | No                                 | English                |
| French                                     | English                           | Yes                                | ✅                     |
| English                                    | French                            | No                                 | French                 |
| English                                    | French                            | Yes                                | ✅                     |
| English                                    | English                           | No                                 | ✅                     |
| English                                    | English                           | Yes                                | Not recommended        |

__Note__:
- If certain characters don't work with manual input, you can try using the clipboard.

#### Clipboard Functionality
This feature allows you to send an entire string of characters to your virtual machine. It's important to note that the "enforce keyboard" key affects how this string of characters is transmitted to your virtual machine. If you notice during console input that the "enforce keyboard" option is necessary, remember to enable it before using the clipboard.  
This feature can be used to send a password, a command, or the contents of a configuration file, for example:

<img src={openIaasVmConsoleClipboard} />

Upon clicking the "Paste" button, the content of your text field is sent to your virtual machine.

## Replication

The term "replication" in the context of cloud computing and IT systems refers to the process of creating multiple copies or instances of data, applications, or services across different physical or virtual locations. This redundancy serves several purposes:

1. **High Availability**: By distributing resources across multiple sites, replication ensures that if one site fails, others can continue providing service without interruption.
2. **Disaster Recovery**: Replication aids in disaster recovery by maintaining backup copies of data at geographically distant locations, allowing for quick restoration in case of catastrophic events like natural disasters or hardware failures.
3. **Load Balancing**: Distributing workloads across multiple replicas can improve performance and scalability, as requests are handled by the nearest available resource.
4. **Data Consistency**: Techniques such as synchronous replication ensure that all copies of data remain consistent in real-time, while asynchronous methods may introduce slight delays but offer greater flexibility.
5. **Fault Tolerance**: Replication enhances fault tolerance by automatically switching to backup systems or resources when primary ones fail, minimizing downtime and ensuring service continuity.

In cloud computing environments, replication is often facilitated through various technologies such as:

- **Storage Replication**: Tools like Amazon S3 Cross-Region Replication, Azure Site Recovery, or Google Cloud Storage Replication for maintaining copies of data across different geographical zones.
- **Database Replication**: Solutions like MySQL Cluster, PostgreSQL Streaming Replication, or Oracle RAC (Real Application Clusters) for replicating database transactions and ensuring data consistency.
- **Virtual Machine Replication**: Platforms such as VMware vSphere Site Recovery Manager or Microsoft Azure Site Recovery enable replication of virtual machines across different hypervisor environments.

The choice of replication method depends on factors like the required level of data consistency, performance needs, budget, and specific use cases (e.g., disaster recovery vs. high availability).

### Accessing Replication Management

The replication management interface is accessible via the Shiva console, under the 'OpenIaaS' menu > 'Replication' located in the top left navigation bar of the screen.

<img src={openIaasReplicationMenu} />

### Creation of a replication policy

In the 'Replication' section, you can create policies that define protection parameters for your virtual machines.

<img src={openIaasReplicationPoliciesView} />

To create a new policy, click on the 'Add Policy' button. A form opens with the following steps:

#### Step 1: General Information

- **Name**: Provide an explicit name for your replication policy
- **Frequency**: Select the replication interval (1-59 minutes or 1-24 hours)

<img src={openIaasReplicationPolicyForm1} />

### Step 2: Storage Selection

- **Availability Zone**: Select the destination zone
- **Pool**: Choose the resource pool
- **Block Storage**: Select the target storage

<img src={openIaasReplicationPolicyForm2} />

#### Step 3: Verification

Check the parameters and click on __'Add'__ to create the policy.

### Associating a VM to Replication

To safeguard a virtual machine, navigate to the details of your VM from the list of virtual machines.

In the detailed view of the VM, you'll find a section labeled __'Replication'__:

<img src={openIaasVmReplicationSection} />

Steps to associate a VM with replication:

1. Click on __'Configure Policy'__
2. Choose the desired replication policy from the dropdown list
3. Confirm your selection

Replication begins automatically after validation.

## Policy Management and Replication

This section focuses on the management of policies and replication within cloud computing environments. It's crucial for maintaining consistency, security, and compliance across distributed systems. Here’s a breakdown:

### 1. **Policy Definition**
Policies are essentially sets of rules or guidelines that dictate how resources should be managed within an organization's IT infrastructure. These can encompass various aspects such as data access controls, security protocols, compliance standards, and operational procedures.

- **Centralized Policy Management**: Utilizing a centralized system allows for uniform policy enforcement across different cloud environments (e.g., AWS, Azure, Google Cloud). This ensures consistency regardless of where the resources are deployed.
- **Policy Templates**: Predefined templates can streamline the creation process by offering standard configurations that can be customized to fit specific needs.

### 2. **Replication Strategies**
Replication is a critical aspect of maintaining data integrity and availability in distributed systems. It involves creating copies of data across multiple locations or nodes for redundancy and fault tolerance.

- **Asynchronous Replication**: Data changes are propagated asynchronously, meaning the primary system doesn’t wait for confirmation from replicas before proceeding. This is efficient but can lead to temporary inconsistencies.
- **Synchronous Replication**: Changes are mirrored immediately across all replicas, ensuring consistency at any given time. However, this approach can introduce latency and reduce performance.

### 3. **Policy Enforcement and Compliance**
Ensuring that policies are adhered to is vital for maintaining compliance with regulations (e.g., GDPR, HIPAA). This involves continuous monitoring and auditing:

- **Automated Policy Checks**: Tools can scan systems in real-time or scheduled intervals to verify policy compliance against predefined rules.
- **Alert Systems**: When non-compliance is detected, automated alerts notify administrators for timely intervention.

### 4. **Challenges and Considerations**
Implementing robust policy management and replication strategies comes with several challenges:

- **Scalability**: As the number of resources grows, managing policies and ensuring consistent replication becomes increasingly complex.
- **Performance Overhead**: Enforcing policies and replicating data can introduce performance bottlenecks if not optimized properly.
- **Data Consistency**: Maintaining strong consistency across distributed systems while allowing for eventual consistency in some cases is a delicate balance.

### 5. **Best Practices**
To overcome these challenges, organizations should adopt best practices:

- **Standardization**: Use standardized policies and replication strategies to simplify management and enhance interoperability.
- **Automation**: Leverage automation tools for policy enforcement, compliance checks, and replication management to reduce human error and increase efficiency.
- **Continuous Monitoring**: Implement robust monitoring systems to detect deviations from established policies and replication patterns promptly.

By carefully managing policies and replication, organizations can ensure their cloud infrastructure remains secure, compliant, and resilient against data loss or system failures.

#### Policy Overview

The 'Policies' tab allows you to view all your replication policies:

<img src={openIaasReplicationPoliciesTable} />

For each policy, you can access the following information:

- Name
- Replication frequency
- Destination availability zone
- Associated pool
- Block storage used

Available actions include:

- Viewing details of each policy
- Modifying parameters
- Deleting unused policies

#### Replica View

The "Replicas" tab displays all virtual machines currently in replication:

<img src={openIaasReplicationReplicasTable} />

You can view:

- The name of the replicated virtual machines
- Source and target locations
- Associated replication policy

Available actions include:

- Exporting data in CSV format
- Viewing replication details
- Managing replicas by policy
