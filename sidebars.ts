// @ts-nocheck
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
          label: 'Tutorials',
          key: 'tutorials-iam',
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
          label: 'Tutorials',
          key: 'tutorials-marketplace',
          items: [
            'marketplace/tutorials/deploy_openiaas',
            'marketplace/tutorials/deploy_vmware',
            'marketplace/tutorials/contact_partner',
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
          label: 'Tutorials',
          key: 'tutorials-iaas-opensource',
          items: [
            {
              type: 'category',
              label: 'High Availability',
              items: [
                'iaas_opensource/tutorials/high_availability/manage_pool',
                'iaas_opensource/tutorials/high_availability/manage_vm',
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
          label: 'Tutorials',
          key: 'tutorials-iaas-vmware',
          items: [
            {
              type: 'category',
              label: 'Backup',
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
      label: 'PaaS Openshift',
      items: [
        'paas_openshift/paas_openshift',
        'paas_openshift/concepts',
        'paas_openshift/quickstart',
        {
          type: 'category',
          label: 'Tutorials',
          key: 'tutorials-paas-openshift',
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
      label: 'LLMaaS',
      items: [
        'llmaas/llmaas',
        'llmaas/concepts',
        'llmaas/rag_explained',
        'llmaas/quickstart',
        'llmaas/api',
        'llmaas/models',
        'llmaas/tutorials',
        'llmaas/faq',
      ],
    },
    {
      type: 'category',
      label: 'Network',
      items: [
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
              label: 'Tutorials',
              key: 'tutorials-network-internet',
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
              label: 'Tutoriels',
              link: {
                type: 'doc',
                id: 'storage/oss/tutorials',
              },
              items: [
                'storage/oss/tutorials/cloudberry-explorer',
                'storage/oss/tutorials/winscp',
                'storage/oss/tutorials/mc-mirror',
                'storage/oss/tutorials/aws-s3-sync',
                'storage/oss/tutorials/python-boto3',
                'storage/oss/tutorials/file-hashing',
              ],
            },
          ],
        },
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
        'contractual/llmaas/raci'
      ],
    },
  ],
};

export default sidebars;
