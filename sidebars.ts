import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: 'doc',
      id: 'home',
    },
    {
      type: 'doc',
      id: 'changelog',
    },
    {
      type: 'html', // Séparateur et titre
      value: `
        <hr class="sidebar-separator" />
        <h3 class="sidebar-title">Console</h3>
      `,
    },
    {
      type: 'doc',
      id: 'console/console',
    },
    {
      type: 'doc',
      id: 'console/console_quickstart',
    },
    {
      type: 'doc',
      id: 'console/status',
    },
    {
      type: 'doc',
      id: 'console/orders',
    },
    {
      type: 'doc',
      id: 'console/metrics/concepts',
    },
    {
      type: 'doc',
      id: 'console/api',
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'console/security/security_recommendations',
        'console/security/security_alarms',
      ],
    },
    {
      type: 'category',
      label: 'IAM',
      items: [
        'console/iam/iam',
        'console/iam/concepts',
        'console/iam/quickstart',
        {
          type: 'category',
          label: 'IAM Tutoriels',
          items: [
            'console/iam/tutorials/sso_azuread',
            'console/iam/tutorials/sso_adfs',
            'console/iam/tutorials/sso_jumpcloud',
            'console/iam/tutorials/sso_intune',
            'console/iam/tutorials/sso_okta',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'AdditionalContent',
      items: [
        'additional_content/concepts_regional',
        'additional_content/concepts_az',
      ],
    },
    {
      type: 'html',
      value: `
        <br>
        <h3 class="sidebar-title">Products</h3>
      `,
    },
    {
      type: 'category',
      label: 'Bare Metal',
      items: [
        'iaas_bare-metal/iaas_bare-metal',
        'iaas_bare-metal/concepts',
        'iaas_bare-metal/quickstart',
        'iaas_bare-metal/tutorials',
      ],
    },
    {
      type: 'category',
      label: 'Marketplace',
      items: [
        'marketplace/marketplace',
        'marketplace/concepts',
        'marketplace/quickstart',
        {
          type: 'category',
          label: 'Marketplace Tutoriels',
          items: [
            'marketplace/tutorials/deploy_openiaas',
            'marketplace/tutorials/deploy_vmware',
            'marketplace/tutorials/contact_partner',
            'marketplace/tutorials/customize_image_openiaas',
            'marketplace/tutorials/customize_image_vmware',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Bastion',
      items: [
        'bastion/bastion',
        'bastion/concepts',
        'bastion/quickstart',
        'bastion/tutorials',
      ],
    },
    {
      type: 'category',
      label: 'Housing',
      items: [
        'housing/housing',
        'housing/concepts',
        'housing/quickstart',
        'housing/tutorials',
      ],
    },
    {
      type: 'category',
      label: 'IaaS OpenSource',
      items: [
        'iaas_opensource/iaas_opensource',
        'iaas_opensource/concepts',
        'iaas_opensource/quickstart',
        {
          type: 'category',
          label: 'OpenSource Tutoriels',
          items: [
            {
              type: 'category',
              label: 'High Availability',
              items: [
                'iaas_opensource/tutorials/high_availability/manage_pool',
                'iaas_opensource/tutorials/high_availability/manage_vm',
              ],
            },
            {
              type: 'category',
              label: 'OpenSource Backup',
              items: [
                'iaas_opensource/tutorials/backup/iaas_opensource_backup',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'IaaS VMware',
      items: [
        'iaas_vmware/iaas_vmware',
        'iaas_vmware/concepts',
        'iaas_vmware/quickstart',
        {
          type: 'category',
          label: 'VMware Tutoriels',
          items: [
            {
              type: 'category',
              label: 'VMware Backup',
              items: [
                'iaas_vmware/tutorials/backup/iaas_backup',
              ],
            },
            'iaas_vmware/tutorials/configure_management_vm',
            'iaas_vmware/tutorials/deploy_vm_template',
            'iaas_vmware/tutorials/deploy_vm_terraform',
            'iaas_vmware/tutorials/vm_encryption',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Containers',
      link: {
        type: 'doc',
        id: 'containers_overview',
      },
      items: [
        {
          type: 'category',
          label: 'PaaS OpenShift',
          items: [
            'paas_openshift/paas_openshift',
            'paas_openshift/concepts',
            'paas_openshift/quickstart',
        {
          type: 'category',
          label: 'Openshift Tutoriels',
          items: [
            'paas_openshift/tutorials/deploy-through-helmfile',
            'paas_openshift/tutorials/deploy-vm-with-kubevirt',
            'paas_openshift/tutorials/using-kasten'
          ]
        }
          ],
        },
        {
          type: 'category',
          label: 'Managed Kubernetes',
          items: [
            'managed_kubernetes/managed_kubernetes',
            'managed_kubernetes/concepts',
            'managed_kubernetes/quickstart',
            {
          type: 'category',
          label: 'Tutoriels MK',
          items: [
            'managed_kubernetes/tutorials/firstdeploy',
            'managed_kubernetes/tutorials/networking',
            'managed_kubernetes/tutorials/usingcapsule',
            'managed_kubernetes/tutorials/usinggapi',
            'managed_kubernetes/tutorials/usingopencost',
            'managed_kubernetes/tutorials/usingkasten',
            'managed_kubernetes/tutorials/usingargocd',
            'managed_kubernetes/tutorials/usingharbor',
            'managed_kubernetes/tutorials/usinggpu',
          ],
        },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'LLMaaS',
      items: [
        'llmaas/llmaas',
        'llmaas/concepts',
        'llmaas/rag_explained',
        'llmaas/quickstart',
        'llmaas/api',
        'llmaas/models',
        'llmaas/tutorials',
        'llmaas/ocr',
        'llmaas/faq',
      ],
    },
    {
      type: 'category',
      label: 'Network',
      items: [
        {
          type: 'category',
          label: 'VPC',
          items: [
            'network/vpc/vpc',
            'network/vpc/concepts',
            'network/vpc/quickstart',
            {
              type: 'category',
              label: 'VPC Tutoriels',
              items: [
                'network/vpc/tutorials/vm_configuration',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Privates Network',
          items: [
            'network/private_network/private_network',
            'network/private_network/concepts',
            'network/private_network/quickstart',
            'network/private_network/tutorials',
          ],
        },
        {
          type: 'category',
          label: 'Internet',
          items: [
            'network/internet/internet',
            'network/internet/concepts',
            'network/internet/quickstart',
            {
              type: 'category',
              label: 'Internet Tutoriels',
              items: [
                'network/internet/tutorials/forti',
                'network/internet/tutorials/pfSense',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      items: [
        {
          type: 'category',
          label: 'Object Storage',
          items: [
            'storage/oss/oss',
            'storage/oss/concepts',
            'storage/oss/quickstart',
            {
              type: 'category',
              label: 'Object Storage Tutoriels',
              link: {
                type: 'doc',
                id: 'storage/oss/tutorials',
              },
              items: [
                'storage/oss/tutorials/bucket-access',
                'storage/oss/tutorials/cloudberry-explorer',
                'storage/oss/tutorials/winscp',
                'storage/oss/tutorials/mc-mirror',
                'storage/oss/tutorials/aws-s3-sync',
                'storage/oss/tutorials/python-boto3',
                'storage/oss/tutorials/file-hashing',
                'storage/oss/tutorials/restic',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Provider Terraform',
      items: [
        'terraform/terraform',
        'terraform/concepts',
        'terraform/quickstart',
        'terraform/tutorials',
      ],
    },
    {
      type: 'html', // Séparateur et titre
      value: `
        <hr class="sidebar-separator" />
        <h3 class="sidebar-title">Contractuel</h3>
      `,
    },
    {
      type: 'doc',
      id: 'contractual/orderdoc',
    },
    {
      type: 'category',
      label: 'Contractual documents',
      items: [
        'contractual/cgvu',
        'contractual/iaas/sla_iaas',
        'contractual/iaas/sla_openiaas',
        'contractual/paas/sla_paas',
        'contractual/baremetal',
        'contractual/dpa',
        'contractual/iaas/raci',
        'contractual/iaas/raci_s3',
        'contractual/paas/raci',
        'contractual/paas/raci_ocp_std',
        'contractual/llmaas/raci',
        'contractual/kubernetes/raci'
      ],
    },
  ],
};

export default sidebars;
