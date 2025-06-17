---
title: Automation with Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from './images/status_cloud_init.png';
import cloudInitOutput from './images/cloud-init-output.png';

This guide will allow you to deploy your first instances on the Trust Cloud in less than 5 minutes.

## __Prerequisites__

1. Have subscribed to the Cloud Temple offer (subscription to the IaaS offer).
2. Have the permissions enabled for the __'IaaS'__ object driver

## Deploy a Virtual Machine via Terraform

In this section, we will see how to deploy a virtual machine on the Trust Cloud via the Cloud Temple Terraform provider in a few minutes.
If you have not yet used the Cloud Temple provider, follow the instructions at [this address](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs) to install it and authenticate to your tenant.

We will start by creating a .tf file that describes the instance we want to deploy.
The following script allows you to deploy a virtual machine from scratch.

```hcl
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "flo" {
  name = "clu002-ucs01_FLO"
}

data "cloudtemple_compute_datastore_cluster" "koukou" {
  name = "sdrs001-LIVE_KOUKOU"
}

resource "cloudtemple_compute_virtual_machine" "scratch" {
  name = "from-scratch"

  memory                 = 8 * 1024 * 1024 * 1024
  cpu                    = 2
  num_cores_per_socket   = 1
  cpu_hot_add_enabled    = true
  cpu_hot_remove_enabled = true
  memory_hot_add_enabled = true

  datacenter_id                = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id              = data.cloudtemple_compute_host_cluster.flo.id
  datastore_cluster_id         = data.cloudtemple_compute_datastore_cluster.koukou.id
  guest_operating_system_moref = "amazonlinux2_64Guest"

  tags = {
    created_by = "Terraform"
  }
}
```

The parameters used in this script are as follows:

- datacenter_id (required): datacenter in which the virtual machine is deployed
- host_cluster_id (required): cluster in which the virtual machine is deployed
- name (required): name of the machine
- memory: RAM allocated to the machine initially
- cpu: number of vCPU allocated to the machine initially
- num_cores_per_socket: number of cores per socket
- datastore_cluster_id: datastore to which the machine is attached
- guest_operating_system_moref: guest operating system

Other parameters can be applied to a virtual machine during its deployment. You can find all these parameters on the following page of the [Terraform documentation](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine)

Once the .tf file is created and saved, run the following command to verify your code:

```
terraform validate
```

Then, plan the deployment and check that the plan matches what you want to achieve:

```
terraform plan
```

Finally, deploy the virtual machine by running the following command:

```
terraform apply
```

## Use cloud-init to configure a virtual machine deployed from the Terraform provider

The __'cloud-init'__ tool allows you to customize a virtual machine, or a cloud instance, during its first boot. It is a widely used standard.
For more information, refer to the [documentation](https://cloudinit.readthedocs.io/en/latest/)

### Compatibility

In order to be able to configure a virtual machine deployed from the Cloud Temple Terraform provider via cloud-init, the __OVF__ used to deploy it must be __compatible__ with __cloud-init__.

To check the compatibility of your virtual machine with cloud-init, enter the following command:

`systemctl status cloud-init.service`

If cloud-init is correctly installed on the machine, you should see a response like this. (See screenshot below)

<img src={statusCloudInit}/>

If needed, you can find cloud-init compatible images on the internet (for example [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) or install it yourself on your machine before converting it to an OVF.

### Deployment

Now that you are sure the deployed OVF is compatible with cloud-init, here is an example of a Terraform file (.tf) that you can use to configure your virtual machine.
NB: All examples shown here can be found in the examples folder of the Cloud Temple Terraform provider repository here: [Examples](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)

#### `main.tf`

```HCL
resource "cloudtemple_compute_virtual_machine" "ubuntu-cloud-init" {
  name = "ubuntu-cloud-init"

  memory                 = 8 * 1024 * 1024 * 1024
  cpu                    = 2
  num_cores_per_socket   = 1
  cpu_hot_add_enabled    = true
  cpu_hot_remove_enabled = true
  memory_hot_add_enabled = true

  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.TH3S.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.CLU001.id
  datastore_id    = data.cloudtemple_compute_datastore.DS003.id

  content_library_id      = data.cloudtemple_compute_content_library.local.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.ubuntu-cloudimg.id

  power_state = "on"

  backup_sla_policies = [
    data.cloudtemple_backup_sla_policy.sla001-daily-par7s.id,
    data.cloudtemple_backup_sla_policy.sla001-weekly-par7s.id,
  ]

  cloud_init = {
    network-config = filebase64("./cloud-init/network-config.yml")
    user-data      = filebase64("./cloud-init/user-data.yml")
  }
}
```

#### `network-config.yml`

```YAML
#cloud-config
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: false
      addresses:
        - 172.16.100.192/24
      gateway4: 172.16.100.1
      nameservers:
        addresses:
          - 172.16.11.4
```

#### `user-data.yml`

```YAML
#cloud-config
users:
  - default
  - name: terraform
    primary_group: users
    shell: /bin/bash
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: sudo
    lock_passwd: false
    plain_text_passwd: password
```

The interesting element here is the presence of the cloud-init property, you can see that it is composed of two sub-properties: __network-config__, and __user-data__.

These last ones are part of a set of 7 properties that you can use to configure your virtual machine with cloud-init.

- __user-data__: This value must be encoded in base64 and contains notably configuration information for the user accounts of the virtual machine. You can also add scripts to install or update packages.
- __network-config__: This value must be encoded in base64 and contains notably network configuration information for the virtual machine.
- __public-keys__: Indicates that the instance should fill the 'authorized_keys' of the default user with this value.
- __instance-id__: Allows to define a unique instance identifier with cloud-init.
- __password__: If defined, the default user's password will be set to this value to allow password-based connection. The password will only be valid for one connection. If the value is 'RANDOM', a random password will be generated and displayed on the console.
- __hostname__: Specifies a hostname for the deployed instance.
- __seedfrom__: Allows to define a URL where cloud-init will go to retrieve the configuration files it must use.
For more information on how cloud-init works, please refer to the [official documentation](https://cloudinit.readthedocs.io/en/latest/)

### Execution

To verify the correct execution of cloud-init, you should be able to connect with the user you configured in the user-data.yml file or the hostname should change to be set to the one you put in 'hostname'.

In case of issues, you can check the cloud-init logs using the following command:

`sudo cat /var/log/cloud-init-output.log`

You should see various information about the execution of cloud-init. In the following screenshot, it can be seen that the network configuration was successfully completed.

<img src={cloudInitOutput} />