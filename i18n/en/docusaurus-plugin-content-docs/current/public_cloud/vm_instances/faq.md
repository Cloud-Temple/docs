---
title: Frequently Asked Questions
sidebar_position: 4
---

# FAQ VM Instances

## What is a custom flavor?

A **custom flavor** is a personalized resource template for a VM. It
allows defining the number of **vCPU** and the amount of **RAM** according to
the workload requirements.

The actually available limits and combinations are those exposed in the
Cloud Temple Console.

For more details, see the [Concepts](./concepts) page.

## What is the difference between a template and a flavor?

The **template** corresponds to the image used to deploy the operating system or appliance. The **flavor** corresponds to the resources allocated to the VM, notably the number of vCPUs and the amount of RAM.

During deployment, the template and the flavor are selected separately.

## Can the resources of an existing VM be modified?

The documentation confirms that the **CPU** and **RAM** parameters can be
modified when the VM is powered off.

The exact conditions applicable to switching from a predefined flavor to a custom
flavor, as well as to changing the instance family, must be verified
in the Cloud Temple Console before any commitment.

See the [guide de démarrage](./quickstart).

## Can a VM with an OS that is not available in the Marketplace be migrated?

Yes, a migration can be considered through a **Veeam Bare Metal Recovery** restore. This procedure specifically allows handling an OS that is not offered in the standard catalog.

For a VM restored from a client environment, support covers the VM infrastructure. The proper functioning of the guest OS, applications, and required agents is not guaranteed if they are not installed or configured correctly. Guest OS support is then limited.

A second method, by importing **VHD/VMDK** disks, is under development and targeted for the **fourth quarter of 2026**. It will allow creating a VM from an existing image, but is not yet available.

## Is the system disk included for free?

No. A system disk is automatically created with each VM to host the OS, but it is a storage resource billed per **GB** according to the VM Instances pricing catalog. vCPU, RAM, and storage resources are billed separately. Additional volumes and enabled backups are also billed according to the applicable catalog.

## Are Stormshield and FortiVM compatible with VM Instances?

Yes, Stormshield and FortiVM virtual appliances are compatible with the **Enterprise family**, subject to meeting the technical prerequisites and the applicable support scope.

## Is automatic VM replication between availability zones included?

No. VM replication is not included by default in VM Instances. Its evaluation is planned for the second half of 2026.

The choice of an availability zone at deployment therefore does not constitute automatic VM replication.