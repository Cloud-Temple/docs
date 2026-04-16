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
      value: '<hr class="sidebar-divider" />',
    },
    {
      type: 'html',
      value: `<p class="sidebar-section-label">Management &amp; Governance</p>`,
    },
    {
      type: 'category',
      label: 'Console',
      className: 'sidebar-cat-console',
      link: { type: 'doc', id: 'console/console' },
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
      className: 'sidebar-cat-billing',
      link: { type: 'generated-index' },
      items: [
        'console/billing/concepts',
      ],
    },
    {
      type: 'category',
      label: 'Security & Identity',
      className: 'sidebar-cat-security-identity',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'IAM',
          link: { type: 'doc', id: 'console/iam/iam' },
          items: [
            'console/iam/iam',
            'console/iam/concepts',
            'console/iam/quickstart',
            {
              type: 'category',
              label: 'Tutoriels IAM',
              link: { type: 'generated-index' },
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
          link: { type: 'generated-index' },
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
      value: '<hr class="sidebar-divider" />',
    },
    {
      type: 'html',
      value: `<p class="sidebar-section-label">Products</p>`,
    },
    {
      type: 'category',
      label: 'AI',
      className: 'sidebar-cat-ai',
      link: { type: 'doc', id: 'llmaas/llmaas' },
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
          link: { type: 'generated-index' },
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
      className: 'sidebar-cat-baremetal',
      link: { type: 'doc', id: 'iaas_bare-metal/iaas_bare-metal' },
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
      className: 'sidebar-cat-compute',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'VM Instances',
          className: 'sidebar-preview',
          link: { type: 'generated-index' },
          items: [
            'public_cloud/vm_instances/vm_instances',
            'public_cloud/vm_instances/concepts',
            'public_cloud/vm_instances/quickstart',
          ],
        },
        {
          type: 'category',
          label: 'IaaS OpenSource',
          link: { type: 'doc', id: 'iaas_opensource/iaas_opensource' },
          items: [
            'iaas_opensource/iaas_opensource',
            'iaas_opensource/concepts',
            'iaas_opensource/quickstart',
            {
              type: 'category',
              label: 'Tutoriels',
              key: 'iaas_opensource_tutorials',
              link: { type: 'generated-index' },
              items: [
                'iaas_opensource/tutorials/create_vm',
                {
                  type: 'category',
                  label: 'High Availability',
                  link: { type: 'generated-index' },
                  items: [
                    'iaas_opensource/tutorials/high_availability/manage_pool',
                    'iaas_opensource/tutorials/high_availability/manage_vm',
                  ],
                },
                {
                  type: 'category',
                  label: 'Backup',
                  key: 'iaas_opensource_backup',
                  link: { type: 'generated-index' },
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
          link: { type: 'doc', id: 'iaas_vmware/iaas_vmware' },
          items: [
            'iaas_vmware/iaas_vmware',
            'iaas_vmware/concepts',
            'iaas_vmware/quickstart',
            {
              type: 'category',
              label: 'Tutoriels',
              key: 'iaas_vmware_tutorials',
              link: { type: 'generated-index' },
              items: [
                {
                  type: 'category',
                  label: 'Backup',
                  key: 'iaas_vmware_backup',
                  link: { type: 'generated-index' },
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
      className: 'sidebar-cat-network',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'VPC',
          link: { type: 'doc', id: 'network/vpc/vpc' },
          items: [
            'network/vpc/vpc',
            'network/vpc/concepts',
            'network/vpc/quickstart',
            {
              type: 'category',
              label: 'Tutoriels',
              key: 'vpc_tutorials',
              link: { type: 'generated-index' },
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
          link: { type: 'doc', id: 'network/private_network/private_network' },
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
          link: { type: 'doc', id: 'network/internet/internet' },
          items: [
            'network/internet/internet',
            'network/internet/concepts',
            'network/internet/advanced_concepts',
            'network/internet/quickstart',
            {
              type: 'category',
              label: 'Tutoriels',
              key: 'internet_tutorials',
              link: { type: 'generated-index' },
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
      className: 'sidebar-cat-storage',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'Object Storage',
          link: { type: 'doc', id: 'storage/oss/oss' },
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
      className: 'sidebar-cat-monitoring',
      link: { type: 'generated-index' },
      items: [
        'console/metrics/concepts',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      className: 'sidebar-cat-security',
      link: { type: 'doc', id: 'bastion/bastion' },
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
      className: 'sidebar-cat-housing',
      link: { type: 'doc', id: 'housing/housing' },
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
      className: 'sidebar-cat-marketplace',
      link: { type: 'doc', id: 'marketplace/marketplace' },
      items: [
        'marketplace/marketplace',
        'marketplace/concepts',
        'marketplace/quickstart',
        {
          type: 'category',
          label: 'Tutoriels',
          key: 'marketplace_tutorials',
          link: { type: 'generated-index' },
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
      className: 'sidebar-cat-containers',
      key: 'containers_products',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'PaaS OpenShift',
          link: { type: 'doc', id: 'paas_openshift/paas_openshift' },
          items: [
            'paas_openshift/paas_openshift',
            'paas_openshift/concepts',
            'paas_openshift/quickstart',
            {
              type: 'category',
              label: 'Tutoriels',
              key: 'paas_openshift_tutorials',
              link: { type: 'generated-index' },
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
      className: 'sidebar-cat-devtools',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'Terraform Provider',
          link: { type: 'doc', id: 'terraform/terraform' },
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
          link: { type: 'generated-index' },
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
      value: '<hr class="sidebar-divider" />',
    },
    {
      type: 'html',
      value: `<p class="sidebar-section-label">Managed Products</p>`,
    },
    {
      type: 'category',
      label: 'Managed Kubernetes',
      className: 'sidebar-cat-k8s',
      link: { type: 'doc', id: 'managed_kubernetes/managed_kubernetes' },
      items: [
        'managed_kubernetes/managed_kubernetes',
        'managed_kubernetes/concepts',
        'managed_kubernetes/managed_core_kubernetes',
        'managed_kubernetes/quickstart',
        {
          type: 'category',
          label: 'Tutoriels',
          key: 'managed_kubernetes_tutorials',
          link: { type: 'generated-index' },
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
      className: 'sidebar-cat-databases',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'MariaDB Managé',
          className: 'sidebar-preview',
          link: { type: 'doc', id: 'managed_mariadb/managed_mariadb' },
          items: [
            'managed_mariadb/managed_mariadb',
            'managed_mariadb/concepts',
            'managed_mariadb/quickstart',
          ],
        },
        {
          type: 'category',
          label: 'PostgreSQL Managé',
          className: 'sidebar-preview',
          link: { type: 'doc', id: 'managed_postgresql/managed_postgresql' },
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
