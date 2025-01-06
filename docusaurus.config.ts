import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Documentation Cloud Temple',
  tagline: 'Tout ce dont vous avez besoin pour tirer le meilleur parti des produits Cloud Temple.  ',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'log',

  // enable faster build time https://docusaurus.io/blog/releases/3.6
  future: {
    experimental_faster: true,
  },
  
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cloud-Temple', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
      fr: {
        htmlLang: 'fr',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Cloud-Temple/docs/edit/dev/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.svg',
    navbar: {
      title: '',
      logo: {
        alt: 'Cloud Temple Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/Cloud-Temple',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tools',
          items: [
            {
              label: 'Status page',
              href: 'https://status.cloud-temple.com/',
            },
            {
              label: 'Tutorial',
              to: '/docs/tags/tutorials/',
            },
            {
              label: 'Onboarding',
              to: '/docs/tags/onboarding/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/cloud-temple/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cloud-temple',
            },
            {
              label: 'Cloud Temple Web Site',
              href: 'https://cloud-temple.com',
            }
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Privacy',
              to: '/docs/privacy/',
            },
            {
              label: 'UGAP',
              to: '/docs/market_place_public',
            },
            {
              label: 'CAIH',
              to: '/docs/market_place_public',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cloud Temple Docs, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
