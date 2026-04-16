import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: 'doc',
      id: 'console/api',
      label: 'API Documentation',
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
    {
      type: 'doc',
      id: 'contractual/contracts',
      label: 'Contractuel',
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQs',
    },

    // ─────────────────────────────────────────
    // MANAGEMENT & GOVERNANCE
    // ─────────────────────────────────────────
    {
      type: 'html',
      value: `<h3 class="sidebar-title">Management &amp; Governance</h3>`,
    },
    {
      type: 'category',
      label: 'Console',
      items: [
        'console/console',
        'console/console_quickstart',
        'console/status',
        'console/orders',
      ],
    },
    {
      type: 'category',
      label: 'Billing',
      items: [
        'console/billing/concepts',
      ],
    },
    {
      type: 'category',
      label: 'Security & Identity',
      items: [
        {
          type: 'category',
          label: 'IAM',
          items: [
            'console/iam/iam',
            'console/iam/concepts',
            'console/iam/quickstart',
            {
              type: 'category',
              label: 'Tutoriels IAM',
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
          label: 'Sécurité',
          items: [
            'console/security/security_recommendations',
            'console/security/security_alarms',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // PRODUCTS
    // ─────────────────────────────────────────
    {
      type: 'html',
      value: `<h3 class="sidebar-title">Products</h3>`,
    },
    {
      type: 'category',
      label: 'AI',
      items: [
        'llmaas/llmaas',
        'llmaas/concepts',
        'llmaas/quickstart',
        'llmaas/api',
        'llmaas/models',
        'llmaas/faq',
        {
          type: 'category',
          label: 'Tutoriels',
          key: 'llmaas_tutorials',
          items: [
            {
              type: 'doc',
              id: 'llmaas/tutorials',
              label: 'Intégrations & Frameworks',
            },
            {
              type: 'doc',
              id: 'llmaas/ocr',
              label: 'Reconnaissance de documents (OCR)',
            },
          ],
        },
      ],
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
      label: 'Compute',
      items: [
        {
          type: 'category',
          label: 'VM Instances (Preview)',
          items: [
            'public_cloud/vm_instances/vm_instances',
            'public_cloud/vm_instances/concepts',
            'public_cloud/vm_instances/quickstart',
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
              label: 'Tutoriels',
              key: 'iaas_opensource_tutorials',
              items: [
                'iaas_opensource/tutorials/create_vm',
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
                  label: 'Backup',
                  key: 'iaas_opensource_backup',
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
              label: 'Tutoriels',
              key: 'iaas_vmware_tutorials',
              items: [
                {
                  type: 'category',
                  label: 'Backup',
                  key: 'iaas_vmware_backup',
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
              label: 'Tutoriels',
              key: 'vpc_tutorials',
              items: [
                'network/vpc/tutorials/vm_configuration',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Private Network',
          key: 'private_network',
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
          key: 'internet',
          items: [
            'network/internet/internet',
            'network/internet/concepts',
            'network/internet/advanced_concepts',
            'network/internet/quickstart',
            {
              type: 'category',
              label: 'Tutoriels',
              key: 'internet_tutorials',
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
            'storage/oss/faq',
            {
              type: 'category',
              label: 'Tutoriels',
              key: 'oss_tutorials',
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
                'storage/oss/tutorials/rclone',
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
      label: 'Monitoring',
      items: [
        'console/metrics/concepts',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'bastion/bastion',
        'bastion/concepts',
        'bastion/quickstart',
        'bastion/tutorials',
      ],
    },
    {
      type: 'category',
      label: 'Housing (Colocation)',
      items: [
        'housing/housing',
        'housing/concepts',
        'housing/quickstart',
        'housing/tutorials',
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
          label: 'Tutoriels',
          key: 'marketplace_tutorials',
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
      label: 'Containers',
      key: 'containers_products',
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
              label: 'Tutoriels',
              key: 'paas_openshift_tutorials',
              items: [
                'paas_openshift/tutorials/deploy-through-helmfile',
                'paas_openshift/tutorials/deploy-vm-with-kubevirt',
                'paas_openshift/tutorials/using-kasten',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: [
        {
          type: 'category',
          label: 'Terraform Provider',
          items: [
            'terraform/terraform',
            'terraform/concepts',
            'terraform/quickstart',
            'terraform/tutorials',
          ],
        },
        {
          type: 'category',
          label: 'Concepts Globaux',
          items: [
            'additional_content/concepts_regional',
            'additional_content/concepts_az',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // MANAGED PRODUCTS
    // ─────────────────────────────────────────
    {
      type: 'html',
      value: `<h3 class="sidebar-title">Managed Products</h3>`,
    },
    {
      type: 'category',
      label: 'Managed Kubernetes',
      items: [
        'managed_kubernetes/managed_kubernetes',
        'managed_kubernetes/concepts',
        'managed_kubernetes/managed_core_kubernetes',
        'managed_kubernetes/quickstart',
        {
          type: 'category',
          label: 'Tutoriels',
          key: 'managed_kubernetes_tutorials',
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
    {
      type: 'category',
      label: 'Databases',
      items: [
        {
          type: 'category',
          label: 'MariaDB Managé (Preview)',
          items: [
            'managed_mariadb/managed_mariadb',
            'managed_mariadb/concepts',
            'managed_mariadb/quickstart',
          ],
        },
        {
          type: 'category',
          label: 'PostgreSQL Managé (Preview)',
          items: [
            'managed_postgresql/managed_postgresql',
            'managed_postgresql/concepts',
            'managed_postgresql/quickstart',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
