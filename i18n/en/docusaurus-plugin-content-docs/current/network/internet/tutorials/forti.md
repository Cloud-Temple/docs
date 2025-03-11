---
title: Deploy a Fortigate virtual firewall
tags:
  - internet
  - tutorials
---

import fortiSupport from '../images/forti_support.png';
import fortiSupportVm01 from '../images/forti_support_vm_01.png';
import fortiSupportVm02 from '../images/forti_support_vm_02.png';
import asn from '../images/asn.png';
import ipsPub from '../images/ips_pub.png';
import ipsInterco from '../images/ips_interco.png';
import fortiVmType01 from '../images/forti_vm_type_01.png';
import shivaCatalogues from '../images/shiva_catalogues.png';
import imgImport01 from '../images/img_import_01.png';
import imgImport02 from '../images/img_import_02.png';
import imgImport03 from '../images/img_import_03.png';
import imgImport04 from '../images/img_import_04.png';
import imgImport05 from '../images/img_import_05.png';
import imgImport06 from '../images/img_import_06.png';
import imgImport07 from '../images/img_import_07.png';
import imgImport08 from '../images/img_import_08.png';
import imgImport09 from '../images/img_import_09.png';
import imgImport10 from '../images/img_import_10.png';
import imgImport11 from '../images/img_import_11.png';
import imgImport12 from '../images/img_import_12.png';
import ipPlan01 from '../images/ip_plan_01.png';
import ipPlan02 from '../images/ip_plan_02.png';
import ipPlan03 from '../images/ip_plan_03.png';
import ipPlan04 from '../images/ip_plan_04.png';
import ipPlan05 from '../images/ip_plan_05.png';
import imgDeploy01 from '../images/img_deploy_01.png';
import imgDeploy02 from '../images/img_deploy_02.png';
import imgDeploy03 from '../images/img_deploy_03.png';
import imgDeploy04 from '../images/img_deploy_04.png';
import imgDeploy05 from '../images/img_deploy_05.png';
import imgDeploy06 from '../images/img_deploy_06.png';
import imgDeploy07 from '../images/img_deploy_07.png';
import imgDeploy08 from '../images/img_deploy_08.png';
import imgDeploy09 from '../images/img_deploy_09.png';
import imgDeploy10 from '../images/img_deploy_10.png';
import imgDeploy11 from '../images/img_deploy_11.png';
import imgBackup01 from '../images/img_backup_01.png';
import imgBackup02 from '../images/img_backup_02.png';
import imgBackup03 from '../images/img_backup_03.png';
import imgBackup04 from '../images/img_backup_04.png';
import vmStart01 from '../images/vm_start_01.png';
import vmStart02 from '../images/vm_start_02.png';
import vmConsole01 from '../images/vm_console_01.png';
import vmBoot01 from '../images/vm_boot_01.png';
import vmBoot02 from '../images/vm_boot_02.png';
import vmBoot03 from '../images/vm_boot_03.png';
import vmBoot04 from '../images/vm_boot_04.png';

## Purpose of this guide

This guide details the essential steps to efficiently deploy a standalone firewall or a cluster of firewalls in a SecNumCloud environment.

**Note:** *The configurations presented in this document serve as a reference guide and must be carefully adapted to the technical specifics, security requirements, and operational objectives unique to each environment*

## Prerequisites to this guide

### Required Permissions

Deploying virtual appliances requires access to the client's tenant in the Cloud Temple console with the following specific permissions:

If you are using the **OpenIaaS** offer:

| Permission Name                                | Permission Description                                                                                                       |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| compute_iaas_opensource_console_access        | OpenIaaS Offer - Opening the console of a virtual machine                                                                    |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS Offer - Consulting advanced data of VMware resources (affinity/anti-affinity rules, DRS configuration, etc.)        |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS Offer - Advanced management of VMware resources                                                                     |
| compute_iaas_opensource_read                  | OpenIaaS Offer - Consulting resources of type Virtual Machines                                                               |
| compute_iaas_opensource_management            | OpenIaaS Offer - Managing resources of type Virtual Machines                                                                 |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS Offer - Managing the power supply of a virtual machine                                                              |
| activity_read                                 | Consulting logs and activities                                                                                               |

If you are using the **Vmware** offer:

| Permission Name                                | Permission Description                                                                                                       |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| compute_iaas_vmware_console_access            | Vmware Offer - Opening the console of a virtual machine                                                                      |
| compute_iaas_vmware_infrastructure_read       | Vmware Offer - Consulting advanced data of VMware resources (affinity/anti-affinity rules, DRS configuration, etc.)          |
| compute_iaas_vmware_infrastructure_write      | Vmware Offer - Advanced management of VMware resources                                                                       |
| compute_iaas_vmware_read                      | Vmware Offer - Consulting resources of type Virtual Machines                                                                 |
| compute_iaas_vmware_management                | Vmware Offer - Managing resources of type Virtual Machines                                                                   |
| compute_iaas_vmware_virtual_machine_power     | Vmware Offer - Managing the power supply of a virtual machine                                                                |
| activity_read                                 | Consulting logs and activities                                                                                               |
  
If you wish to use ***Terraform***, the following additional permissions are required:

| Permission Name                                | Permission Description                                                                                                       |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| tag_read                                      | Consulting tags, except RTMS tags                                                                                            |
| tag_write                                     | Managing tags, except RTMS tags                                                                                              |
| iam_read                                      | Consulting user rights                                                                                                       |
| iam_write                                     | Managing user rights                                                                                                         |

The OVA image of the appliance to be deployed must be available before starting the process. You will find Fortinet images on [the support site](https://support.fortinet.com/welcome/). You need a Fortinet support account.

Go to the **Download section** then **Firmware Images**:

<img src={fortiSupport} />

**As of July 1, 2024, version 7.2 is recommended.**

The image to retrieve is FGT_VM64 in OVF/ZIP format:

<img src={fortiSupportVm01} />

**Note:** *If you have subscribed to a Fortinet firewall unit of work, Cloud Temple support can provide the image in OVA format as well as the associated license.*

| Infrastructure Unit of Work - VIRTUAL FIREWALLS | Unit              | sku                    |
| :---------------------------------------------- | :----------------- | :--------------------- |
| FIREWALL UTM - Fortigate Virtual VM02V - without vdom | 1 virtual cluster  | csp:fr1:license:fw:ftg2 |
| FIREWALL UTM - Fortigate Virtual VM04V - without vdom | 1 virtual cluster  | csp:fr1:license:fw:ftg4 |
| FIREWALL UTM - Fortigate Virtual VM08V - without vdom | 1 virtual cluster  | csp:fr1:license:fw:ftg8 |
| FIREWALL UTM - Fortigate - 5 additional vdom    | 5 vdom             | csp:fr1:license:fw:vdom |

### Network Connectivity Information

You must have the necessary information to establish the BGP session with the backbone. This data is available in the Cloud Temple console, in the Network → Internet → ASNs section:

<img src={asn} />

You must also have a range of public IP addresses whose extent is related to your need. The reserved address range is indicated in the Cloud Temple console in the Network → Internet → Public IPs section. Here is an example:

<img src={ipsPub} />
Finally, you must use the block allocated to you on the BGP interconnection network to be able to benefit from an Internet route. The Cloud Temple interconnection network is 100.64.0.0/16, and each access has an interconnection subnet of type /28. This network establishes the BGP session with the Cloud Temple routing core. You can find this range in the Cloud Temple console in the section Network → Internet → Interconnection IPs. Here is an example:

<img src={ipsInterco} />

**Note:** *You must have subscribed to the associated Internet connectivity units of work. You will then see the connectivity information in the Cloud Temple console.*

## Typical Network Architecture

The typical architecture of a Cloud Temple deployment is a Business Continuity Cluster type. It involves implementing and subscribing to at least two availability zones within a region.

The standard deployment of firewalls is done in a cluster, with equipment in each SNC availability zone. A virtual network ensures cluster synchronization. WAN ports access the Internet via the interconnection network.

An initial configuration is necessary to establish BGP sessions, thus enabling Internet connectivity. Private VLANs are routed to the virtual firewall's LAN interfaces via a trunk (aggregation of layer 2 networks using 802.1q technology).

**Note:** *Although this is not a recommended architecture, this guide also applies to single-AZ deployments.*

## Importing the Fortinet Appliance into the Cloud Temple Console

### Decompressing the Appliance File

After downloading from the Fortinet support site, decompress the ZIP file to obtain:

- The virtual VMDK disks of the appliance,

- The OVF files describing the appliance for different VMware virtual hardware formats.
  
<img src={fortiSupportVm02} />

Here are the types of templates commonly integrated into the .ZIP file:

| Template                     | Compatible with                           |
| ---------------------------- | ----------------------------------------- |
| FortiGate-VM64.ovf           | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.hw13.ovf      | ESXI 6.5(Hardware Version 13) or later    |
| FortiGate-VM64.hw15.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64.hw17.ovf      | ESXI 7.0(Hardware Version 17) or later    |
| FortiGate-VM64.vapp.ovf      | ESXI 8.0(Hardware Version 20) or later    |
| FortiGate-VM64.nsxt.ovf      | ESXI 6.7U2+(Hardware Version 15) or later |
| FortiGate-VM64-ZNTA.vapp.ovf | ESXI 7.0(Hardware Version 17) or later    |

### Importing the Appliance into Your Image Catalog via the Cloud Temple Console

Log in to your tenant within the Cloud Temple console, then go to "**Catalog**" and "**Publish Files**":

<img src={shivaCatalogues} />

Choose a name for your image. We recommend using: **FGT-VM-VERSION-AZ**, for example here FGT-VM-*7.2.8*-*TH3S*:

<img src={imgImport01} />

Then select the image library for the availability zone **(1)**:

<img src={imgImport02} />

Next, choose the files to publish in the library **(2)**:

<img src={imgImport03} />

<img src={imgImport04} />

Then click on "**publish files**":

<img src={imgImport05} />

Wait for your files to finish uploading into the library:

<img src={imgImport06} />

<img src={imgImport07} />

*The operation needs to be repeated for each availability zone where you wish to deploy an appliance.*

For example, for the second zone PAR7S:

<img src={imgImport08} />

<img src={imgImport09} />

<img src={imgImport10} />

<img src={imgImport11} />

<img src={imgImport12} />

**Note:**

- ***(1)*** *Each availability zone has an image library for the hypervisors in that zone.*
  
- ***(2)*** *for the .ovf file, take a version whose virtual hardware is compatible with the version of the ESXi hypervisors (as of July 1, 2024, the maximum supported version is **v19**, corresponding to ESX 7.0.x.).*

## Deploying the Fortinet Appliance in an Availability Zone

### Planning the Deployment of Your BGP Interconnection

You need to select an interconnection IP address for your future Firewall appliance. The first address is always the Cloud Temple BGP gateway. The other addresses are therefore generally available (unless you have previously deployed other equipment):

<img src={ipPlan01} />

The rule is to take the available IPs in sequence:

<img src={ipPlan02} />

### Planning the Use of Your Public IP Addresses

All allocated public IPs are usable for your tenant. The subnet size depends on the subscribed units of work.

<img src={ipPlan03} />

### BGP4 Configuration Parameters

Note the following three important pieces of information for the BGP4 configuration:

<img src={ipPlan04} />

- **Partner AS**: the remote AS used to establish the BGP session from the firewall's perspective, which is the Cloud Temple AS.

- **Route Servers**: the two BGP peers towards which to establish a BGP session.
  
- **Name**: the tenant's own AS number; remove the *AS* prefix to retain only the number.

<img src={ipPlan05} />

### Deploying the Appliance on the Infrastructure

From the library of the availability zone where you wish to install your appliance, select the template and then "**Deploy**":

<img src={imgDeploy01} />

You will then need to name the virtual machine; we recommend the following naming convention: FGT-VM-**0X**-**ROLE**-**AZ**

- **0X**: corresponds to the Fortigate license type you have subscribed to:

<img src={fortiVmType01} />

- **ROLE**: For instance, INTERNET for an Internet interconnection firewall.

- **AZ**: The availability zone

<img src={imgDeploy02} />

Next, choose the availability zone:

<img src={imgDeploy03} />

Then the target hypervisor cluster:

<img src={imgDeploy04} />

Choose the storage target:

<img src={imgDeploy05} />

Finally, enter your appliance's configuration information, particularly the addressing information obtained previously:

<img src={imgDeploy06} />

- **Token**: leave it empty

- **Configuration URL**: leave it empty

- **Hostname**: identical to the VM's envelope name

- **DNS**: 208.91.112.53 and 208.91.112.2 (by default, but you can decide to use other DNS of your choice)

- **Interface IP**: first available interconnection IP

- **Netmask**: netmask of the interconnection range

- **Interface 2**: not configured

Click **Next**. The network interface configuration information must be entered. The first interface is used for Internet access; the others are temporarily set to the VLAN dedicated to high availability:

<img src={imgDeploy07} />

Finally, click on "**Deploy**".

<img src={imgDeploy08} />

<img src={imgDeploy09} />

When the deployment is complete, the Cloud Temple console will indicate it:

<img src={imgDeploy10} />

Your appliance is now visible in the virtual machines:

<img src={imgDeploy11} />

### Assigning a Backup Policy

In a SecNumCloud environment, a virtual machine must have a backup policy to start. You can configure it in the policies and launch the inventory task:

<img src={imgBackup01} />

<img src={imgBackup02} />

Assign the policy corresponding to the desired RPO; by default, you can choose a daily policy:

<img src={imgBackup03} />

You can confirm your choice:

<img src={imgBackup04} />

If additional policies are required (as in this example 'daily' and 'monthly'), repeat the operation for each additional policy.

### Starting the Virtual Machine

Starting the virtual machine is done from the Cloud Temple console:

<img src={vmStart01} />

It is possible to observe the console and the Fortinet appliance reboot again after the initial boot:

<img src={vmStart02} />

After this second boot, the IP address indicated in the deployment of the virtual machine in the **OvfProperties** section should respond to ping, provided it has access to the interconnection network.

## Initial Configuration

### Connecting to the Console

In the Cloud Temple console, select your Fortinet appliance and request the appliance's console.

<img src={vmConsole01} />

Depending on when you access the console, you might see the initial boot and reboot of the appliance:

<img src={vmBoot01} />

<img src={vmBoot02} />

You can then log in to the appliance console; the username is "**admin**". The appliance will prompt you to change the password (there is no default password, just press ENTER).

You must then enter a new password.

**Attention: The appliance uses a QWERTY keyboard layout.**

**In case of a password error, you will need to reinstall your appliance.**

<img src={vmBoot03} />

<img src={vmBoot04} />

### Configuring the BGP Session

In this step, we will configure your Fortinet appliance in console mode to establish the BGP4 link.

#### Configuring the Range of Public IPs

The first step is to define the ranges of public IP addresses. Initially, we will configure only the first block. We will use the information you noted earlier.

    config router prefix-list
        edit "pfx_net_public_customer"
        config rule
        edit 1
            set prefix 80.75.159.90/31
                unset ge
                set le 32
            next
        edit 100
            set action deny
            set prefix 0.0.0.0 0.0.0.0
                unset ge
Vous can then verify that the configuration was successful with the command:

```
show router prefix-list
```

#### Configuring the Route Map

A "route map policy" is used to define more complex routing policies that can influence or modify network traffic behavior based on specific criteria. Route maps are particularly useful for advanced traffic management tasks, such as route filtering, traffic redirection, or route attribute modification in dynamic routing protocols like BGP (Border Gateway Protocol). In our context, it aims to secure your network from invalid announcements.

The second step is to configure the route map policy:

```
config router route-map
    edit "rm_deny_all"
        config rule
        edit 1
            set match-ip-address "pfx_deny_all"
        next
    end
    next
    edit "rm_net_public_customer"
        config rule
        edit 1
            set match-ip-address "pfx_net_public_customer"
        next
    end
    next
end
```

You can then verify that the configuration was successful with the command:

```
show router route-map
```

#### Configuring the BGP Announcement

We will now configure the BGP announcement. You should have in your possession, as seen earlier in this guide, the interconnection IP (here, the router-id), the IP address of the BGP4 peer (here, **100.64.0.1** and **100.64.0.2**), the local AS (here **4200000005**) and the previously configured Public IP range. ***Remember***:

<img src={ipPlan04} />

and

<img src={ipPlan05} />

In this configuration, the AS (autonomous system) of Cloud Temple is 33930. AS 65001 is a private AS representing you. Using a private AS number at this level is cleaner, especially if multiple BGP connections need to be configured.

```
config router bgp
    set as 65001
    set router-id **100.64.1.110**
    set network-import-check disable
    set graceful-restart enable
    config neighbor
        edit "100.64.0.1"
            set capability-graceful-restart enable
            set ebgp-enforce-multihop enable
            set next-hop-self enable
            set soft-reconfiguration enable
            set ebgp-multihop-ttl 3
            set remote-as 33930
            set local-as 4200000005
            set route-map-in "rm_deny_all"
            set route-map-out "rm_net_public_customer"
            set keep-alive-timer 10
            set holdtime-timer 30
        next
        edit "100.64.0.2"
            set capability-graceful-restart enable
            set ebgp-enforce-multihop enable
            set next-hop-self enable
            set soft-reconfiguration enable
            set ebgp-multihop-ttl 3
            set remote-as 33930
            set local-as 4200000005
            set route-map-in "rm_deny_all"
            set route-map-out "rm_net_public_customer"
            set keep-alive-timer 10
            set holdtime-timer 30
        next
    end
config network
    edit 1
        set prefix 80.75.159.90/31
    next
end
config redistribute "connected"
end
config redistribute "static"
    set status enable
end
end
```

You can then check that the BGP sessions are up:

```
get router info bgp summary
```

#### Configuring the LoopBack Address

Using the loopback address to establish BGP sessions between peers improves session stability. Loopback addresses do not depend on the state of a specific physical interface. As a result, even if an interface fails or a path is interrupted, the BGP session can remain active as long as there is another valid routing path between the peers. This increases network redundancy and resilience.

Using loopback addresses for BGP sessions also helps to enhance security. Security policies can be applied more uniformly and effectively to loopback addresses, and additional security measures such as authentication and access control lists can be more easily implemented.

We recommend naming the LoopBack address using the first public IP of the first range, which should be the default address for accessing the Internet: **LOOP_"SECOND TO LAST OCTET OF PUBLIC IP"_"LAST OCTET OF PUBLIC IP"**

For example, if your first Public IP of your first range is 80.75.159.90/32, the loopback is named **LOOP_159.90**.
In the command line of your appliance, type (**Note 80.75.159.90/32 is an example!**):

```
config system interface
    edit "LOOP_159_90"
    set vdom "root"
    set ip 80.75.159.90/32
    set allowaccess ping
    set type loopback
    next
end
config firewall ippool
    edit "NAT-PUB-ALL"
    set startip 80.75.159.90
    set endip 80.75.159.90
    next
end
config system dns
    set primary 96.45.45.45
    set secondary 96.45.46.46
    set source-ip 80.75.159.90
end
config system fortiguard
    set update-server-location eu
    set source-ip 80.75.159.90
end
config system ntp
    set ntpsync enable
    set source-ip 80.75.159.90
end
```

This allows for the initial configuration of NAT, DNS, intrusion prevention, and the clock. Now, your appliance should be able to ping the outside if the source IP address is the NAT IP (here in this example 80.57.159.90).

**We also recommend changing the administration port, which is by default 80 or 443.**

#### Configuring WAN and HA Interfaces

To simplify the readability of interfaces in the equipment administration, we recommend renaming the interfaces for their corresponding role on the firewall. This is done by defining an alias on the interface.

Port1 is defined as WAN and port2 is renamed HA. For the HA port, an IP address in the APIPA subnet is defined so that equipment can join this way once in a cluster.

```
config system interface
    edit "port1"
        set alias "WAN"
    next
    edit "port2"
        set ip 169.254.254.1 255.255.255.252
        set allowaccess ping
        set type physical
        set alias "HA"
        set snmp-index 2
    next
end
```

### Deploying a Second Member

#### Deploying the Second VM

To deploy a second member for clustering, it is recommended to have a second AZ to ensure a high availability cluster of firewalls.

For the deployment of the second appliance, you should repeat the deployment actions indicated previously in the second AZ:

- Adding the OVF template to a content library
- Deploying a VM from this content library
- Assigning a backup policy

We recommend keeping the VM naming policy, i.e., FGT-VM-0X-ROLE-AZ and for the IP address of the first interface, it will be using the second free IP from the interconnection range.

#### Configuring WAN and HA Interfaces

Still aiming to simplify interface readability, these should be renamed on the second member. You will also need to configure the IP address of the HA interface at this stage so that equipment can communicate for clustering.

```
config system interface
    edit "port1"
        set alias "WAN"
    next
    edit "port2"
        set ip 169.254.254.2 255.255.255.252
        set allowaccess ping
        set type physical
        set alias "HA"
        set snmp-index 2
    next
end
```

### Clustering

We will configure an Active/Passive clustering. The password serves as a shared key between the two cluster members and must be kept securely. The communication between the equipment is done in unicast, so the peer IP to indicate is that of the HA interface of the firewall with which to establish the cluster.
Finally, the interfaces mentioned in the *monitor* section are the supervised interfaces; if the L2 link is lost, it triggers a cluster switch.

For the first equipment, it gives this configuration:

```
config system ha
    set mode a-p
    set group-name "FTG-HA-INTERNET"
    set group-id 16
    set password SECRET
    set hbdev HA 10
    set priority 100
    set monitor "HA" "WAN"
    set unicast-hb enable
    set unicast-hb-peerip 169.254.254.2
end 
```

Finally, on the second one, we will change the peer's IP address and lower the priority so that the first equipment is elected by default as the active member of the cluster:

```
config system ha
    set mode a-p
    set group-name "FTG-HA-INTERNET"
    set group-id 16
    set password SECRET
    set hbdev HA 10
    set priority 200
    set monitor "HA" "WAN"
    set unicast-hb enable
    set unicast-hb-peerip 169.254.254.1
end 
```

The synchronization may take a few minutes to establish.
Pour une vérification complète, la commande *get sys ha status* est la commande indiquée. Pour vérifier de manière plus succincte, il faut faire *diag sys ha checksum cluster*
Lorsque la synchronisation est fonctionnelle, les checksum de la ligne *all* doivent être identiques sur les deux équipements.

```
# diag sys ha checksum cluster

================== FG3H0ZZZNNNNNNN1 ==================

is_manage_primary()=1, is_root_primary()=1
debugzone
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f 
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d 
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb 

checksum
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f 
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d 
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb 

================== FG3H0ZZZNNNNNNN2 ==================

is_manage_primary()=0, is_root_primary()=0
debugzone
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f 
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d 
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb 

checksum
global: 2e b4 fb 43 fb 7a 98 7f db ed c0 47 5b 35 e4 1f 
root: bb 66 88 7d df ab 27 f0 b3 a8 a7 72 f4 a0 f3 2d 
all: c9 4b 3b e2 1b e6 25 89 df d2 95 31 ba 8b 47 bb 
```

#### Configuration for external access on the firewall

First, we move the administration port from port 443 to port 8443 to free up a standard port that can be used for business purposes.

```
config system global
 set admin-sport 8443
end
```

Adding a custom service for the following traffic rules:

```
config firewall service custom
    edit "TCP-8443"
        set tcp-portrange 8443
    next
end
```

Allowing administration on the WAN interface and the loopback interface. At this step, it will be important to adapt the name of the LOOP interface as defined previously:

```
edit port1
 set allowaccess ping https ssh http
next

config system interface 
 edit "LOOP_0"
        set allowaccess ping https ssh http snmp
 next
end
```

Then we create a traffic rule that allows access to the administration interfaces on the loopback interface. This rule is very permissive; it allows all IP addresses, and it is advisable to filter explicitly permitted ranges afterwards.

```
config firewall policy
    edit 1
        set name "WAN to LOOP"
        set srcintf "port1"
        set dstintf "LOOP_0"
        set action accept
        set srcaddr "all"
        set dstaddr "all"
        set schedule "always"
        set service "ALL_ICMP" "HTTP" "HTTPS" "SSH" "TCP-8443"
    next
end
```

Finally, we restrict the authentication of the admin account to pre-defined IP ranges. This a strong security recommendation from Cloud Temple.

```
config system admin
    edit "admin"
        set trusthost1 100.64.1.99/32
        set trusthost2 1.2.3.4/32
        set trusthost3 5.6.7.8/32
        set accprofile "super_admin"
        set vdom "root"
        set password SECRET
     next
end
```