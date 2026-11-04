import fs from 'fs';
import path from 'path';
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Les libellés ci-dessous sont en français (langue par défaut du site) ;
// leurs traductions sont dans i18n/<langue>/docusaurus-plugin-content-docs/current.json.

// Les intitulés de section sont des éléments HTML, que Docusaurus ne traduit pas :
// ils sont donc choisis ici selon la langue en cours de construction.
const locale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'fr';

const SECTIONS = {
  management: { fr: 'Gestion et gouvernance', en: 'Management &amp; Governance', de: 'Verwaltung &amp; Governance', es: 'Gestión y gobernanza', it: 'Gestione e governance' },
  products: { fr: 'Produits', en: 'Products', de: 'Produkte', es: 'Productos', it: 'Prodotti' },
  managed: { fr: 'Produits managés', en: 'Managed Products', de: 'Managed-Produkte', es: 'Productos gestionados', it: 'Prodotti gestiti' },
  links: { fr: 'Liens rapides', en: 'Quick Links', de: 'Schnellzugriff', es: 'Enlaces rápidos', it: 'Link rapidi' },
};

const divider = { type: 'html' as const, value: '<hr class="sidebar-divider" />' };

const section = (name: keyof typeof SECTIONS) => ({
  type: 'html' as const,
  value: `<p class="sidebar-section-label">${
    Object.prototype.hasOwnProperty.call(SECTIONS[name], locale) ? SECTIONS[name][locale] : SECTIONS[name].fr
  }</p>`,
});

// Rubriques standard de chaque produit : Vue d'ensemble, Concepts, Guide de démarrage,
// Tutoriels, Questions fréquentes. La clé (produit_rubrique) rend chaque libellé traduisible.
const LABELS = {
  overview: "Vue d'ensemble",
  concepts: 'Concepts',
  quickstart: 'Guide de démarrage',
  tutorials: 'Tutoriels',
  faq: 'Questions fréquentes',
};

const page = (product: string, slot: keyof typeof LABELS, id: string) => ({
  type: 'doc' as const,
  id,
  label: LABELS[slot],
  key: `${product}_${slot}`,
});

const tutorials = (product: string, link, items) => ({
  type: 'category' as const,
  label: LABELS.tutorials,
  key: `${product}_tutorials`,
  link,
  items,
});

const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: 'doc',
      id: 'changelog_produits',
      label: 'Nouveautés produits',
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'Questions fréquentes',
      key: 'global_faq',
    },

    // ─────────────────────────────────────────
    // GESTION ET GOUVERNANCE
    // ─────────────────────────────────────────
    divider,
    section('management'),
    {
      type: 'category',
      label: 'Console',
      className: 'sidebar-cat-console',
      link: { type: 'doc', id: 'console/console' },
      items: [
        page('console', 'overview', 'console/console'),
        page('console', 'concepts', 'console/concepts'),
        page('console', 'quickstart', 'console/onboarding'),
        tutorials('console', { type: 'generated-index', slug: '/console/tutorials' }, [
          'console/console_quickstart',
          'console/status',
        ]),
        page('console', 'faq', 'console/faq'),
      ],
    },
    {
      type: 'category',
      label: 'Facturation',
      className: 'sidebar-cat-billing',
      link: { type: 'doc', id: 'console/billing/concepts' },
      items: [
        'console/billing/concepts',
      ],
    },
    {
      type: 'category',
      label: 'Sécurité et identité',
      className: 'sidebar-cat-security-identity',
      link: { type: 'doc', id: 'security_identity_overview' },
      items: [
        {
          type: 'category',
          label: 'IAM',
          link: { type: 'doc', id: 'console/iam/iam' },
          items: [
            page('iam', 'overview', 'console/iam/iam'),
            page('iam', 'concepts', 'console/iam/concepts'),
            {
              type: 'category',
              label: 'Tutoriels',
              key: 'iam_tutorials',
              link: { type: 'generated-index', slug: '/console/iam/tutorials' },
              items: [
                'console/iam/tutorials/sso_azuread',
                'console/iam/tutorials/sso_adfs',
                'console/iam/tutorials/sso_jumpcloud',
                'console/iam/tutorials/sso_intune',
                'console/iam/tutorials/sso_okta',
              ],
            },
            // La FAQ de l'IAM est rangée sous quickstart.md (URL historique conservée).
            page('iam', 'faq', 'console/iam/quickstart'),
          ],
        },
        {
          type: 'category',
          label: 'Sécurité',
          key: 'console_security',
          // Slug figé : l'URL d'origine reste valide dans toutes les langues.
          link: { type: 'generated-index', slug: '/category/sécurité' },
          items: [
            'console/security/security_recommendations',
            'console/security/security_alarms',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Plateforme Cloud Temple',
      className: 'sidebar-cat-platform',
      // Notions communes à tous les produits ; slug figé pour une URL identique dans toutes les langues.
      link: { type: 'generated-index', slug: '/category/platform' },
      items: [
        {
          type: 'doc',
          id: 'additional_content/concepts_regional',
          label: 'Régions et zones de disponibilité',
        },
        {
          type: 'doc',
          id: 'contractual/shared-responsibility',
          label: 'Responsabilité partagée',
        },
      ],
    },

    // ─────────────────────────────────────────
    // PRODUITS
    // ─────────────────────────────────────────
    divider,
    section('products'),
    {
      type: 'category',
      label: 'IA',
      className: 'sidebar-cat-ai',
      link: { type: 'doc', id: 'ai_overview' },
      items: [
        {
          type: 'category',
          label: 'LLMaaS',
          link: { type: 'doc', id: 'llmaas/llmaas' },
          items: [
            page('llmaas', 'overview', 'llmaas/llmaas'),
            page('llmaas', 'concepts', 'llmaas/concepts'),
            page('llmaas', 'quickstart', 'llmaas/quickstart'),
            'llmaas/api',
            'llmaas/models',
            tutorials('llmaas', { type: 'generated-index', slug: '/category/tutoriels' }, [
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
            ]),
            page('llmaas', 'faq', 'llmaas/faq'),
          ],
        },
        {
          type: 'category',
          label: 'GPU',
          link: { type: 'doc', id: 'gpu/gpu' },
          items: [
            page('gpu', 'overview', 'gpu/gpu'),
            page('gpu', 'concepts', 'gpu/concepts'),
            page('gpu', 'quickstart', 'gpu/quickstart'),
            page('gpu', 'tutorials', 'gpu/tutorials'),
            page('gpu', 'faq', 'gpu/faq'),
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
        page('bare_metal', 'overview', 'iaas_bare-metal/iaas_bare-metal'),
        page('bare_metal', 'concepts', 'iaas_bare-metal/concepts'),
        page('bare_metal', 'quickstart', 'iaas_bare-metal/quickstart'),
        page('bare_metal', 'tutorials', 'iaas_bare-metal/tutorials'),
        page('bare_metal', 'faq', 'iaas_bare-metal/faq'),
      ],
    },
    {
      type: 'category',
      label: 'Calcul',
      className: 'sidebar-cat-compute',
      link: { type: 'doc', id: 'compute_overview' },
      items: [
        {
          type: 'category',
          label: 'VM Instances',
          link: { type: 'doc', id: 'public_cloud/vm_instances/vm_instances' },
          items: [
            page('vm_instances', 'overview', 'public_cloud/vm_instances/vm_instances'),
            page('vm_instances', 'concepts', 'public_cloud/vm_instances/concepts'),
            page('vm_instances', 'quickstart', 'public_cloud/vm_instances/quickstart'),
            tutorials('vm_instances', { type: 'generated-index', slug: '/public_cloud/vm_instances/tutorials' }, [
              'public_cloud/vm_instances/tutorials/create_vm',
              'public_cloud/vm_instances/tutorials/manage_disks',
              'public_cloud/vm_instances/tutorials/snapshots',
            ]),
            page('vm_instances', 'faq', 'public_cloud/vm_instances/faq'),
          ],
        },
        {
          type: 'category',
          label: 'IaaS OpenSource',
          link: { type: 'doc', id: 'iaas_opensource/iaas_opensource' },
          items: [
            page('iaas_opensource', 'overview', 'iaas_opensource/iaas_opensource'),
            page('iaas_opensource', 'concepts', 'iaas_opensource/concepts'),
            page('iaas_opensource', 'quickstart', 'iaas_opensource/quickstart'),
            tutorials('iaas_opensource', { type: 'generated-index', slug: '/iaas_opensource/tutorials' }, [
              'iaas_opensource/tutorials/create_vm',
              {
                type: 'category',
                label: 'Haute disponibilité',
                key: 'iaas_opensource_high_availability',
                // Slug figé : l'URL d'origine reste valide malgré la traduction du libellé.
                link: { type: 'generated-index', slug: '/category/high-availability' },
                items: [
                  'iaas_opensource/tutorials/high_availability/manage_pool',
                  'iaas_opensource/tutorials/high_availability/manage_vm',
                ],
              },
              {
                type: 'category',
                label: 'Sauvegarde',
                key: 'iaas_opensource_backup',
                link: { type: 'generated-index', slug: '/category/backup' },
                items: [
                  'iaas_opensource/tutorials/backup/iaas_opensource_backup',
                ],
              },
            ]),
            page('iaas_opensource', 'faq', 'iaas_opensource/faq'),
          ],
        },
        {
          type: 'category',
          label: 'IaaS VMware',
          link: { type: 'doc', id: 'iaas_vmware/iaas_vmware' },
          items: [
            page('iaas_vmware', 'overview', 'iaas_vmware/iaas_vmware'),
            page('iaas_vmware', 'concepts', 'iaas_vmware/concepts'),
            page('iaas_vmware', 'quickstart', 'iaas_vmware/quickstart'),
            tutorials('iaas_vmware', { type: 'generated-index', slug: '/iaas_vmware/tutorials' }, [
              {
                type: 'category',
                label: 'Sauvegarde',
                key: 'iaas_vmware_backup',
                link: { type: 'generated-index', slug: '/category/backup-1' },
                items: [
                  'iaas_vmware/tutorials/backup/iaas_backup',
                ],
              },
              'iaas_vmware/tutorials/configure_management_vm',
              'iaas_vmware/tutorials/deploy_vm_template',
              'iaas_vmware/tutorials/deploy_vm_terraform',
              'iaas_vmware/tutorials/vm_encryption',
              // Commandes depuis la Console (zones, clusters, réseaux) : la page vit ici, une seule fois
              // dans le menu, pour que son fil d'Ariane reste juste.
              'console/orders',
            ]),
            page('iaas_vmware', 'faq', 'iaas_vmware/faq'),
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Réseau',
      className: 'sidebar-cat-network',
      link: { type: 'doc', id: 'network/network_overview' },
      items: [
        {
          type: 'category',
          label: 'VPC',
          link: { type: 'doc', id: 'network/vpc/vpc' },
          items: [
            page('vpc', 'overview', 'network/vpc/vpc'),
            page('vpc', 'concepts', 'network/vpc/concepts'),
            page('vpc', 'quickstart', 'network/vpc/quickstart'),
            tutorials('vpc', { type: 'generated-index', slug: '/network/vpc/tutorials' }, [
              'network/vpc/tutorials/vm_configuration',
            ]),
            page('vpc', 'faq', 'network/vpc/faq'),
          ],
        },
        {
          type: 'category',
          label: 'Private Backbone',
          key: 'private_backbone',
          link: { type: 'doc', id: 'network/private_backbone/private_backbone' },
          items: [
            page('private_backbone', 'overview', 'network/private_backbone/private_backbone'),
            page('private_backbone', 'concepts', 'network/private_backbone/concepts'),
            page('private_backbone', 'quickstart', 'network/private_backbone/quickstart'),
            page('private_backbone', 'tutorials', 'network/private_backbone/tutorials'),
            page('private_backbone', 'faq', 'network/private_backbone/faq'),
            {
              type: 'category',
              label: 'Private Network',
              link: { type: 'doc', id: 'network/private_network/private_network' },
              items: [
                page('private_network', 'overview', 'network/private_network/private_network'),
                page('private_network', 'concepts', 'network/private_network/concepts'),
                page('private_network', 'quickstart', 'network/private_network/quickstart'),
                page('private_network', 'tutorials', 'network/private_network/tutorials'),
                page('private_network', 'faq', 'network/private_network/faq'),
              ],
            },
            {
              type: 'category',
              label: 'Internet',
              link: { type: 'doc', id: 'network/internet/internet' },
              items: [
                page('internet', 'overview', 'network/internet/internet'),
                page('internet', 'concepts', 'network/internet/concepts'),
                'network/internet/advanced_concepts',
                page('internet', 'quickstart', 'network/internet/quickstart'),
                tutorials('internet', { type: 'generated-index', slug: '/network/internet/tutorials' }, [
                  'network/internet/tutorials/forti',
                  'network/internet/tutorials/pfSense',
                  'network/internet/tutorials/opensense',
                  'network/internet/tutorials/stormchield',
                ]),
                page('internet', 'faq', 'network/internet/faq'),
                {
                  type: 'category',
                  label: 'Anti-DDoS',
                  link: { type: 'doc', id: 'network/anti_ddos/anti_ddos' },
                  items: [
                    page('anti_ddos', 'overview', 'network/anti_ddos/anti_ddos'),
                    page('anti_ddos', 'concepts', 'network/anti_ddos/concepts'),
                    page('anti_ddos', 'quickstart', 'network/anti_ddos/quickstart'),
                    page('anti_ddos', 'tutorials', 'network/anti_ddos/tutorials'),
                    page('anti_ddos', 'faq', 'network/anti_ddos/faq'),
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Stockage',
      className: 'sidebar-cat-storage',
      link: { type: 'doc', id: 'storage/oss/oss' },
      items: [
        {
          type: 'category',
          label: 'Stockage Objet',
          link: { type: 'doc', id: 'storage/oss/oss' },
          items: [
            page('oss', 'overview', 'storage/oss/oss'),
            page('oss', 'concepts', 'storage/oss/concepts'),
            page('oss', 'quickstart', 'storage/oss/quickstart'),
            tutorials('oss', { type: 'doc', id: 'storage/oss/tutorials' }, [
              'storage/oss/tutorials/bucket-access',
              'storage/oss/tutorials/cloudberry-explorer',
              'storage/oss/tutorials/winscp',
              'storage/oss/tutorials/mc-mirror',
              'storage/oss/tutorials/aws-s3-sync',
              'storage/oss/tutorials/rclone',
              'storage/oss/tutorials/python-boto3',
              'storage/oss/tutorials/file-hashing',
              'storage/oss/tutorials/restic',
            ]),
            page('oss', 'faq', 'storage/oss/faq'),
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Supervision',
      className: 'sidebar-cat-monitoring',
      link: { type: 'doc', id: 'console/metrics/concepts' },
      items: [
        'console/metrics/concepts',
      ],
    },
    {
      type: 'category',
      label: 'Sécurité',
      key: 'security_products',
      className: 'sidebar-cat-security',
      link: { type: 'doc', id: 'bastion/bastion' },
      items: [
        {
          type: 'category',
          label: 'Bastion',
          link: { type: 'doc', id: 'bastion/bastion' },
          items: [
            page('bastion', 'overview', 'bastion/bastion'),
            page('bastion', 'concepts', 'bastion/concepts'),
            page('bastion', 'quickstart', 'bastion/quickstart'),
            page('bastion', 'tutorials', 'bastion/tutorials'),
            page('bastion', 'faq', 'bastion/faq'),
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Colocation',
      className: 'sidebar-cat-housing',
      link: { type: 'doc', id: 'housing/housing' },
      items: [
        page('housing', 'overview', 'housing/housing'),
        page('housing', 'concepts', 'housing/concepts'),
        page('housing', 'quickstart', 'housing/quickstart'),
        page('housing', 'tutorials', 'housing/tutorials'),
        page('housing', 'faq', 'housing/faq'),
      ],
    },
    {
      type: 'category',
      label: 'Marketplace',
      className: 'sidebar-cat-marketplace',
      link: { type: 'doc', id: 'marketplace/marketplace' },
      items: [
        page('marketplace', 'overview', 'marketplace/marketplace'),
        page('marketplace', 'concepts', 'marketplace/concepts'),
        page('marketplace', 'quickstart', 'marketplace/quickstart'),
        tutorials('marketplace', { type: 'generated-index', slug: '/marketplace/tutorials' }, [
          'marketplace/tutorials/deploy_openiaas',
          'marketplace/tutorials/deploy_vmware',
          'marketplace/tutorials/contact_partner',
          'marketplace/tutorials/customize_image_openiaas',
          'marketplace/tutorials/customize_image_vmware',
        ]),
        page('marketplace', 'faq', 'marketplace/faq'),
      ],
    },
    {
      type: 'category',
      label: 'Conteneurs',
      className: 'sidebar-cat-containers',
      key: 'containers_products',
      link: { type: 'doc', id: 'paas_openshift/paas_openshift' },
      items: [
        {
          type: 'category',
          label: 'PaaS OpenShift',
          link: { type: 'doc', id: 'paas_openshift/paas_openshift' },
          items: [
            page('paas_openshift', 'overview', 'paas_openshift/paas_openshift'),
            page('paas_openshift', 'concepts', 'paas_openshift/concepts'),
            page('paas_openshift', 'quickstart', 'paas_openshift/quickstart'),
            tutorials('paas_openshift', { type: 'generated-index', slug: '/paas_openshift/tutorials' }, [
              'paas_openshift/tutorials/deploy-through-helmfile',
              'paas_openshift/tutorials/deploy-vm-with-kubevirt',
              'paas_openshift/tutorials/using-kasten',
            ]),
            page('paas_openshift', 'faq', 'paas_openshift/faq'),
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Outils de développement',
      className: 'sidebar-cat-devtools',
      // Index généré : un lien vers console/api, aussi première entrée, ferait boucler « Suivant ».
      link: { type: 'generated-index', slug: '/category/developer-tools' },
      items: [
        {
          type: 'doc',
          id: 'console/api',
          label: 'API de la Console',
        },
        {
          type: 'category',
          label: 'Provider Terraform',
          link: { type: 'doc', id: 'terraform/terraform' },
          items: [
            page('terraform', 'overview', 'terraform/terraform'),
            page('terraform', 'concepts', 'terraform/concepts'),
            page('terraform', 'quickstart', 'terraform/quickstart'),
            page('terraform', 'tutorials', 'terraform/tutorials'),
            page('terraform', 'faq', 'terraform/faq'),
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // PRODUITS MANAGÉS
    // ─────────────────────────────────────────
    divider,
    section('managed'),
    {
      type: 'category',
      label: 'Kubernetes',
      className: 'sidebar-cat-k8s',
      link: { type: 'doc', id: 'managed_kubernetes/managed_kubernetes' },
      items: [
        page('managed_kubernetes', 'overview', 'managed_kubernetes/managed_kubernetes'),
        page('managed_kubernetes', 'concepts', 'managed_kubernetes/concepts'),
        'managed_core_kubernetes/concepts',
        page('managed_kubernetes', 'quickstart', 'managed_kubernetes/quickstart'),
        tutorials('managed_kubernetes', { type: 'generated-index', slug: '/managed_kubernetes/tutorials' }, [
          'managed_kubernetes/tutorials/firstdeploy',
          'managed_kubernetes/tutorials/networking',
          'managed_kubernetes/tutorials/usingstorage',
          'managed_kubernetes/tutorials/usingcapsule',
          'managed_kubernetes/tutorials/usinggapi',
          'managed_kubernetes/tutorials/usingopencost',
          'managed_kubernetes/tutorials/usingkasten',
          'managed_kubernetes/tutorials/usingargocd',
          'managed_kubernetes/tutorials/usingharbor',
          'managed_kubernetes/tutorials/usinggpu',
        ]),
        page('managed_kubernetes', 'faq', 'managed_kubernetes/faq'),
      ],
    },
    {
      type: 'category',
      label: 'Bases de données',
      className: 'sidebar-cat-databases',
      link: { type: 'doc', id: 'databases_overview' },
      items: [
        {
          type: 'category',
          label: 'MariaDB Managé',
          link: { type: 'doc', id: 'managed_mariadb/managed_mariadb' },
          items: [
            page('managed_mariadb', 'overview', 'managed_mariadb/managed_mariadb'),
            page('managed_mariadb', 'concepts', 'managed_mariadb/concepts'),
            page('managed_mariadb', 'quickstart', 'managed_mariadb/quickstart'),
            page('managed_mariadb', 'tutorials', 'managed_mariadb/tutorials'),
            page('managed_mariadb', 'faq', 'managed_mariadb/faq'),
          ],
        },
        {
          type: 'category',
          label: 'PostgreSQL Managé',
          link: { type: 'doc', id: 'managed_postgresql/managed_postgresql' },
          items: [
            page('managed_postgresql', 'overview', 'managed_postgresql/managed_postgresql'),
            page('managed_postgresql', 'concepts', 'managed_postgresql/concepts'),
            page('managed_postgresql', 'quickstart', 'managed_postgresql/quickstart'),
            page('managed_postgresql', 'tutorials', 'managed_postgresql/tutorials'),
            page('managed_postgresql', 'faq', 'managed_postgresql/faq'),
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // LIENS RAPIDES
    // ─────────────────────────────────────────
    divider,
    section('links'),
    {
      type: 'link',
      label: 'Tarifs publics',
      href: 'https://www.cloud-temple.com/nos-tarifs-publics/',
    },
    {
      type: 'link',
      label: 'GitHub Cloud Temple',
      href: 'https://github.com/cloud-temple',
    },
    {
      type: 'link',
      label: 'Roadmap',
      href: 'https://github.com/orgs/Cloud-Temple/projects/2',
    },
    {
      type: 'link',
      label: 'Page de statut',
      href: 'https://status.cloud-temple.com/',
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Historique de la documentation',
    },
  ],
};

// Docusaurus calcule les liens Précédent / Suivant avant d'appliquer current.json : un libellé
// fixé ici restait donc en français dans la pagination des autres langues. On applique la
// traduction dès le chargement du menu, en figeant la clé (key ?? label) pour que les clés de
// current.json ne changent pas.
type Translations = Record<string, { message: string }>;

function loadTranslations(): Translations {
  if (locale === 'fr') return {};
  const file = path.join(__dirname, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current.json');
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
}

function translateItems(items: any[], translations: Translations): void {
  for (const item of items) {
    const kind = item.type;
    if (item.label && ['doc', 'category', 'link'].includes(kind)) {
      item.key = item.key ?? item.label;
      item.label = translations[`sidebar.docSidebar.${kind}.${item.key}`]?.message ?? item.label;
    }
    if (item.type === 'category') translateItems(item.items, translations);
  }
}

translateItems(sidebars.docSidebar as any[], loadTranslations());

// Une catégorie qui pointe vers une page déjà présente dans son contenu (l'entrée « Vue
// d'ensemble » d'un produit, le produit d'une famille) ferait boucler « Suivant » : Docusaurus
// ne retient que la première occurrence d'une page. Ces catégories perdent leur lien ; un clic
// sur leur nom les déplie.
function docIdsIn(items: any[]): Set<string> {
  const ids = new Set<string>();
  for (const item of items) {
    if (typeof item === 'string') ids.add(item);
    else if (item.type === 'doc') ids.add(item.id);
    else if (item.type === 'category') {
      if (item.link?.type === 'doc') ids.add(item.link.id);
      docIdsIn(item.items).forEach((id) => ids.add(id));
    }
  }
  return ids;
}

function dropDuplicateCategoryLinks(items: any[]): void {
  for (const item of items) {
    if (item?.type !== 'category') continue;
    if (item.link?.type === 'doc' && docIdsIn(item.items).has(item.link.id)) delete item.link;
    dropDuplicateCategoryLinks(item.items);
  }
}

dropDuplicateCategoryLinks(sidebars.docSidebar as any[]);

export default sidebars;
