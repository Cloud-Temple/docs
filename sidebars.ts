import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: 'doc',
      id: 'home',
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
      label: 'IAM',
      items: [
        'console/iam/iam',
        'console/iam/concepts',
        'console/iam/quickstart',
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'console/iam/tutorials/sso_aad',
            'console/iam/tutorials/sso_adfs',
          ],
        },
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
        'iaas_opensource/tutorials',
      ],
    },
    {
      type: 'category',
      label: 'IaaS by VMware',
      items: [
        'iaas_vmware/iaas_vmware',
        'iaas_vmware/concepts',
        'iaas_vmware/quickstart',
        'iaas_vmware/tutorials',
      ],
    },
    {
      type: 'category',
      label: 'PaaS Openshift',
      items: [
        'paas_openshift/paas_openshift',
        'paas_openshift/concepts',
        'paas_openshift/quickstart',
        'paas_openshift/tutorials',
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
            'network/internet/tutorials',
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
            'storage/oss/tutorials',
          ],
        },
      ],
    },
  ],
};

export default sidebars;