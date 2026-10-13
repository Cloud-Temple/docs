---
title: Frequently Asked Questions
sidebar_position: 4
---

# FAQ VM Instances

## What remains billed when the VM is shut down?

Shutting down the VM **suspends billing for vCPUs and RAM**. It does
not delete the VM or its persistent volumes: the OS, software, and data
stored on these volumes are retained.

Other retained resources and subscriptions remain billed according to their
respective rules: notably the system disk, additional volumes, retained
backup storage, subscribed network services, the tenant, and support.
The suspension of compute billing does not describe the technical mechanism
for releasing or reserving physical resources.

## Is capacity guaranteed on restart or creation?

For a **non-reserved** instance, restart after a stop and the creation of a new VM are subject to available capacity. There is no commitment to retrieve a given size, even if that size had been used in a previous campaign. Destroying and then recreating the VM does not constitute a capacity reservation.

To obtain a capacity commitment, you must subscribe to a **reserved instance**, within the scope and according to the conditions of the reservation. The hourly pricing and the dedicated nature of Performance vCPUs do not, in themselves, constitute a reservation.

## Do you need to subscribe to an Availability Zone activation for VMI?

No. The subscription to a billed AZ activation applies to the **IaaS** offering;
it is not required to use **VM Instances**. However, you do select
the hosting AZ when deploying the VM.

The tenant is a recurring subscription. The AZ activation of the IaaS offering is
also recurring; selecting an AZ for a VMI does not trigger this
IaaS subscription.

## What level of support is required for a direct client or one accompanied by a partner?

A **direct client** must subscribe to **Standard Support at a minimum**,
even if they administer the OS and applications themselves.

**Basic Support** is intended for clients accompanied by a **trained
partner**. It does not constitute an alternative to Standard Support for a
direct client. The partner's scope and support conditions are to be defined
in the subscription.

## Can an instance be administered over SSH without a Bastion?

Yes. An instance exposed on a **public IP** can be reached over SSH if
the SSH service is configured in the OS and if the network rules allow
the traffic. The client is responsible for filtering, in particular
restricting to authorized source IPs, and for configuring SSH access.

A Bastion is not a systematic prerequisite for VM Instances. It provides
another administration path from the console, without direct exposure
of the VM to the Internet. See the [concepts réseau](./concepts#network) and the
[concepts Bastion](../../bastion/concepts).

## How to run a test before choosing the configuration?

You can test a VM Instances configuration in **self-service** mode, using your own software and datasets, before choosing your sizing.

**Compute is billed hourly, with no monthly commitment.** This
flexibility facilitates short trials: for a test of a few hours, the
compute portion is calculated over those hours, at the service's standard rate. Any
started compute hour is billable. With
an identical configuration, you can thus adapt the compute budget to the duration of
your trial, from a few hours to several days.

Other resources and subscriptions required for the test, notably storage,
network, tenant, and support, remain subject to their own pricing
terms. The total cost of the trial is therefore not limited to compute.

Compare the compute time and peak RAM usage on your dataset, then
stop the VM at the end of the trial to suspend CPU/RAM billing.
Persistent volumes allow you to retain your environment for later use.

## Is a monthly PERF3 blade a VMI?

No. A dedicated PERF3 blade from the **IaaS Open Source** offer is a distinct IaaS subscription from VM Instances. The one-month commitment for this reference should not be confused with the hourly consumption of VMI.
Consult the [IaaS Open Source concepts](../../iaas_opensource/concepts)
and the applicable pricing catalog before comparing offers.

## What is a custom flavor?

A **custom flavor** is a personalized resource template for a VM. It
allows you to define the number of **vCPU** and the amount of **RAM** according
to the workload requirements.

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
flavor, as well as changing the instance family, must be verified
in the Cloud Temple Console before any commitment.

See the [guide de démarrage](./quickstart).

## Can a VM be migrated with an OS that is not available in the Marketplace?

Yes, a migration can be considered through **Veeam Bare Metal Recovery**. This procedure specifically allows handling an OS that is not offered in the standard catalog.

For a VM restored from a client environment, support covers the VM infrastructure. The proper functioning of the guest OS, applications, and required agents is not guaranteed if they are not installed or configured correctly. Guest OS support is then limited.

A second method, through **VHD/VMDK** disk import, is under development and targeted for the **fourth quarter of 2026**. It will allow creating a VM from an existing image, but is not yet available.

## Is the system disk included for free?

No. A system disk is automatically created with each VM to host the OS, but it is a storage resource billed per **Go** according to the VM Instances pricing catalog. vCPU, RAM, and storage resources are billed separately. Additional volumes and enabled backups are also billed according to the applicable catalog.

## Are Stormshield and FortiVM compatible with VM Instances?

Yes, Stormshield and FortiVM virtual appliances are compatible with the **Enterprise family**, subject to meeting the technical prerequisites and the applicable support scope.

## Is automatic VM replication between availability zones included?

No. VM replication is not included by default in VM Instances. Its
assessment is planned for the second half of 2026.

The choice of an availability zone at deployment therefore does not constitute
automatic VM replication.