---
title: Frequently Asked Questions
sidebar_position: 4
---

# VM Instances FAQ

## What are VM Instances quotas?

**Quotas** define the maximum amount of resources that your tenant
can use for its VM Instances. Three limits are defined:

| Quota | Resource counted |
|---|---|
| **vCPU** | Total number of virtual processors allocated to the tenant's instances. |
| **RAM** | Total amount of memory allocated to the tenant's instances. |
| **Storage** | Total capacity provisioned for system disks and additional disks. |

These limits are shared across the tenant's instances. They apply to
configured resources: a VM with **4 vCPU** counts as 4 vCPU in the
tally, even if its applications use little processor. Storage
is counted based on the provisioned capacity of the disks, regardless
of the space actually occupied by files.

Each quota is independent: having available vCPU does not allow you to
exceed the RAM or storage limit.

For example, with a quota of **20 vCPU**, if your instances already account
for **16**, you can request **4 additional vCPU**, subject to
memory and storage quotas and available capacity.

When an operation would result in exceeding a quota, it is rejected.
This is particularly the case when creating a VM, increasing its
resources, or adding storage.

You can view your limits and their usage in the **Cloud Temple
Console**. A quota authorizes a maximum consumption; it does not
constitute a reservation of physical capacity. For a non-reserved instance,
creation or restart remains subject to available capacity.

## How to increase your quotas?

To increase your VM Instances quotas, open a **Cloud Temple support
request** specifying the relevant tenant, the desired new limits
in vCPU, RAM, and storage, as well as your requirement.

## What is the relationship between quotas and billing?

Quotas define your **authorized limits**. Billing depends on
the resources used and the services subscribed to: the quota limit does
not correspond to the amount of resources billed.

For a pay-as-you-go VM, the **configured vCPU and RAM are billed when the
VM is powered on**, regardless of the actual load of its applications.
Compute billing is hourly, **with any started hour being due**.

| Resource | VM powered on | VM powered off |
|---|---|---|
| **Configured vCPU and RAM** | Billed hourly. | Billing suspended. |
| **System disk and additional disks** | Billed per allocated GB. | Always billed as long as they are retained. |
| **Backup storage** | Billed based on consumed storage. | Still billed if backups are retained. |
| **Network, tenant, and support** | Based on subscribed services and subscriptions. | Based on subscribed services and subscriptions. |

**Reserved instances** are subject to the terms of their reservation.

## What remains billed when the VM is powered off?

Powering off the VM **suspends billing for vCPU and RAM**. It does
not delete the VM or its persistent volumes: the OS, software, and
data stored on these volumes are retained.

Other retained resources and subscriptions remain billed according to their
respective rules: notably the system disk, additional volumes, retained
backup storage, subscribed network services, the tenant, and support.
The suspension of compute billing does not describe the technical mechanism
of releasing or reserving physical resources.

## Is capacity guaranteed at restart or creation?

For a **non-reserved** instance, restart after a shutdown and creation
of a new VM are subject to available capacity. There is no
commitment to recover a given size, even if that size had been
used in a previous campaign. Destroying and then recreating the VM does
not constitute a capacity reservation.

To obtain a capacity commitment, you must subscribe to a **reserved
instance**, within the scope and according to the terms of the reservation.
Hourly pricing and the dedicated nature of Performance vCPU do
not, in themselves, constitute a reservation.

## Do you need to subscribe to an availability zone activation for VMI?

No. Subscribing to a billed AZ activation concerns the **IaaS** offering;
it is not required to use **VM Instances**. You do, however,
choose the hosting AZ when deploying the VM.

The tenant is a recurring subscription. The AZ activation of the IaaS offering is
also recurring; choosing an AZ for a VMI does not trigger this
IaaS subscription.

## What support is required for a direct client or one accompanied by a partner?

A **direct client** must subscribe to at least **Standard Support**,
even if they administer the OS and applications themselves.

**Basic Support** is intended for clients accompanied by a **trained
partner**. It does not constitute an alternative to Standard Support for a
direct client. The partner's scope and support terms are
to be defined in the subscription.

## Can you administer an instance over SSH without a Bastion?

Yes. An instance exposed on a **public IP** can be reached over SSH if
the SSH service is configured in the OS and if network rules allow
the traffic. The client is responsible for filtering, notably the restriction
to authorized source IPs, and the SSH access configuration.

The Bastion is not a systematic prerequisite of VM Instances. It provides
another administration path from the console, without direct exposure
of the VM to the Internet. See the [network concepts](./concepts#network) and the
[Bastion concepts](../../bastion/concepts).

## How to run a test before choosing the configuration?

You can test a VM Instances configuration in **self-service**, on
your own software and datasets, before choosing your sizing.

**Compute is billed hourly, with no monthly commitment**. This
flexibility facilitates short trials: for a test of a few hours, the
compute portion is calculated on those hours, at the usual service rate. Any started compute hour is due. With
an identical configuration, you thus adapt the compute budget to the duration of
your trial, from a few hours to several days.

Other resources and subscriptions required for the test, notably storage,
network, tenant, and support, remain subject to their own pricing
terms. The total cost of the trial is therefore not limited to compute.

Compare the compute time and RAM peak on your dataset, then
power off the VM at the end of the trial to suspend CPU/RAM billing.
Persistent volumes allow you to retain your environment for later use.

## Is a monthly-subscribed PERF3 blade a VMI?

No. A dedicated PERF3 blade from the **IaaS Open Source** offering falls under a
separate IaaS subscription from VM Instances. The one-month commitment of this
reference should not be confused with the hourly consumption of VMI.
Consult the [IaaS Open Source concepts](../../iaas_opensource/concepts)
and the applicable pricing catalog before comparing offerings.

## What is a custom flavor?

A **custom flavor** is a personalized resource template for a VM. It
allows you to define the number of **vCPU** and the amount of **RAM** according to
the workload requirements.

The actually available limits and combinations are those exposed in
the Cloud Temple Console.

For more details, see the [Concepts](./concepts) page.

## What is the difference between a template and a flavor?

The **template** corresponds to the image used to deploy the operating
system or appliance. The **flavor** corresponds to the resources allocated
to the VM, notably the number of vCPU and the amount of RAM.

During deployment, the template and the flavor are selected separately.

## Can you modify the resources of an existing VM?

The documentation confirms that **CPU** and **RAM** parameters can be
modified when the VM is powered off.

The exact conditions applicable to switching from a predefined flavor to a custom
flavor, as well as to changing the instance family, must be verified
in the Cloud Temple Console before any commitment.

See the [quick start guide](./quickstart).

## Can you migrate a VM with an OS that is not available in the Marketplace?

Yes, a migration can be studied through **Veeam Bare Metal Recovery**. This procedure notably allows handling an OS that is not offered in the standard catalog.

For a VM restored from a client environment, support covers the VM infrastructure. The proper functioning of the guest OS, applications, and required agents is not guaranteed if they are not installed or configured correctly. Guest OS support is then limited.

A second method, through **VHD/VMDK** disk import, is in development and targeted for **Q4 2026**. It will allow creating a VM from an existing image, but is not yet available.

## Is the system disk included for free?

No. A system disk is automatically created with each VM to host the OS, but it is a storage resource billed per **GB** according to the [official Cloud Temple pricing catalog](https://www.cloud-temple.com/en/our-public-rates/). vCPU, RAM, and storage resources are billed separately. Additional volumes and enabled backups are also billed according to the applicable catalog.

## Are Stormshield and FortiVM compatible with VM Instances?

Yes, Stormshield and FortiVM virtual appliances are compatible with the **Enterprise** family, subject to compliance with technical prerequisites and the applicable support scope.

## Is automatic VM replication between availability zones included?

No. VM replication is not included by default in VM Instances. Its
study is planned for the second half of 2026.

Choosing an availability zone at deployment therefore does not constitute
automatic replication of the VM.
