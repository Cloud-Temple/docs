import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
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

  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL ?? "/docs/",

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
    locales: ['en', 'fr', 'es', 'it', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
      fr: {
        htmlLang: 'fr',
      },
      es: {
        htmlLang: 'es',
      },
      it: {
        htmlLang: 'it',
      },
      de: {
        htmlLang: 'de',
      },
    },
  },
  plugins: [
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        // Options disponibles ici : https://github.com/gabrielcsapo/docusaurus-plugin-search-local
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/',
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root ("/docs/" by default)
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false, // Optional: disable the blog plugin
      },
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
        href: '/home'
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
              label: 'Tutorials',
              to: '/tags/tutorials/',
            },
            {
              label: 'Onboarding',
              to: '/tags/onboarding/',
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
            },
            {
              label: 'Cloud Temple Roadmap',
              href: 'https://github.com/orgs/Cloud-Temple/projects/2',
            }
          ],
        },
        {
          title: 'Market Place',
          items: [
            {
              label: 'UGAP',
              to: '/market_place_public',
            },
            {
              label: 'CAIH',
              to: '/market_place_public',
            },
          ],
        },
      ],
      copyright: `
      <div style="text-align: center;">
        <a href="/governance">Contracts</a> |
        <a href="/privacy">Privacy Policy</a>
        <br />
        Copyright © ${new Date().getFullYear()} Cloud Temple.
      </div>
    `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
