---
title: Frequently Asked Questions
sidebar_position: 4
---

# FAQ VM Instances

## What is a custom flavor?

A **custom flavor** is a custom resource template for a VM. It
allows you to define the number of **vCPU** and the amount of **RAM** according to
the workload requirements.

The limits and combinations actually available are those exposed in
the Cloud Temple Console.

For more details, consult the [Concepts](./concepts) page.

## What is the difference between a template and a flavor?

The **template** refers to the image used to deploy the operating
system or appliance. The **flavor** refers to the resources allocated
to the VM, specifically the number of vCPUs and the amount of RAM.

During deployment, the template and flavor are selected separately.

## Can the resources of an existing VM be modified?

The documentation confirms that the **CPU** and **RAM** parameters can be
modified when the VM is powered off.

The exact conditions applicable to switching from a predefined flavor to a custom
flavor, as well as changing the instance family, must be verified
in the Cloud Temple Console before any commitment.

See the [getting started guide](./quickstart).

## Is automatic VM replication across availability zones included?

No. VM replication is not included by default in VM Instances. Its
evaluation is planned for the second half of 2026.

Therefore, selecting an availability zone at deployment does not constitute
automatic replication of the VM.