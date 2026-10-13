---
title: Frequently Asked Questions
sidebar_position: 4
---

# VM Instances FAQ

## What remains billed when the VM is stopped?

Stopping the VM **suspends billing for vCPUs and RAM**. It does not
delete the VM or its persistent volumes: the OS, software, and data
stored on these volumes are preserved.

Other retained resources and subscriptions remain billed according to their
rules: notably the system disk, additional volumes, retained backup storage,
subscribed network services, tenant, and support.
The suspension of compute billing does not describe the technical mechanism
for releasing or reserving physical resources.

## Is capacity guaranteed upon restart or creation?

For an **unreserved** instance, restarting after a stop and creating
a new VM are subject to available capacity. There is no
commitment to finding a given size, even if that size had been
used during a previous campaign. Destroying and then recreating the VM does
not constitute a capacity reservation.

To obtain a capacity commitment, you must subscribe to a **reserved
instance**, within the scope and according to the conditions of the reservation.
The hourly pricing and the dedicated nature of Performance vCPUs do
not, by themselves, constitute a reservation.

## Is an Availability Zone activation subscription required for VMI?

No. Subscribing to a billed AZ activation concerns the **IaaS** offer;
it is not necessary to use **VM Instances**. You choose
the hosting AZ when deploying the VM.

The tenant is a recurring subscription. The IaaS offer's AZ activation is
also recurring; choosing an AZ for a VMI does not trigger this IaaS subscription.

## What support is required for a direct client or one assisted by a partner?

A **direct client** must subscribe to **Standard Support at a minimum**,
even if they administer the OS and applications themselves.

**Basic Support** is intended for clients assisted by a **trained partner**.
It does not constitute an alternative to Standard Support for a
direct client. The partner's scope and support conditions
must be defined in the subscription.

## Can an instance be administered via SSH without a Bastion?

Yes. An instance exposed on a **public IP** can be reached via SSH if
the SSH service is configured in the OS and if network rules allow
the traffic. The client is responsible for filtering, particularly restricting
to authorized source IPs, and for configuring SSH access.

The Bastion is not a systematic prerequisite for VM Instances. It provides
another administration path from the console, without direct exposure
of the VM to the Internet. See [network concepts](./concepts#network) and
[Bastion concepts](../../bastion/concepts).

## How to perform a test before choosing the configuration?

You can test a VM Instances configuration in a **self-service** manner, on
your own software and datasets, before choosing your sizing.

**Compute is billed hourly, with no monthly commitment**. This
flexibility facilitates short trials: for a test lasting a few hours, the
compute cost is calculated for those hours, at the service's usual rate. Any started hour of compute is due.
With identical configuration, you can thus adjust the compute budget to the duration of
your trial, from a few hours to several days.

Other resources and subscriptions necessary for the test, notably storage,
network, tenant, and support, remain subject to their own pricing
conditions. The total cost of the trial is therefore not limited to compute.

Compare the compute time and RAM peak on your dataset, then
stop the VM at the end of the trial to suspend CPU/RAM billing.
Persistent volumes allow you to preserve your environment for later.

## Is a monthly subscribed PERF3 slice a VMI?

No. A dedicated PERF3 slice from the **IaaS Open Source** offer falls under a
separate IaaS subscription from VM Instances. The one-month commitment for this
reference should not be confused with VMI hourly consumption.
Consult the [IaaS Open Source concepts](../../iaas_opensource/concepts)
and the applicable price list before comparing offers.

## What is a custom flavor?

A **custom flavor** is a customized resource template for a VM. It
allows defining the number of **vCPUs** and the amount of **RAM** according to
the workload's needs.

The limits and combinations actually available are those displayed in
the Cloud Temple Console.

For more details, consult the [Concepts](./concepts) page.

## What is the difference between a template and a flavor?

The **template** corresponds to the image used to deploy the operating
system or appliance. The **flavor** corresponds to the resources allocated
to the VM, notably the number of vCPUs and the amount of RAM.

During deployment, the template and flavor are selected separately.

## Can the resources of an existing VM be modified?

Documentation confirms that **CPU** and **RAM** parameters can be
modified when the VM is stopped.

The exact conditions applicable to switching from a predefined flavor to a custom
flavor, as well as to changing the instance family, must be verified
in the Cloud Temple Console before any commitment.

See the [quickstart guide](./quickstart).

## Can a VM be migrated with an OS not available in the Marketplace?

Yes, a migration can be studied via **Veeam restoration in Bare Metal Recovery mode**. This procedure allows handling an OS that is not offered in the standard catalog.

For a VM restored from a client environment, support covers the VM infrastructure. The proper functioning of the guest OS, applications, and necessary agents is not guaranteed if they are not installed or configured correctly. Guest OS support is then limited.

A second method, by importing **VHD/VMDK** disks, is in development and targeted for the **fourth quarter of 2026**. It will allow creating a VM from an existing image, but is not yet available.

## Is the system disk included for free?

No. A system disk is automatically created with each VM to host the OS, but it is a billed storage resource per **GB** according to the [official Cloud Temple price list](https://www.cloud-temple.com/en/our-public-rates/). vCPU, RAM, and storage resources are billed separately. Additional volumes and activated backups are also billed according to the applicable catalog.

## Are Stormshield and FortiVM compatible with VM Instances?

Yes, Stormshield and FortiVM virtual appliances are compatible with the **Enterprise family**, subject to meeting technical prerequisites and the applicable support scope.

## Is automatic VM replication between availability zones included?

No. VM replication is not included by default in VM Instances. Its
study is planned for the second half of 2026.

Choosing an availability zone at deployment therefore does not constitute
automatic VM replication.
