module.exports = {
  title: 'InfinitzHost KnowledgeBase',
  tagline: 'This knowledge base is filled with articles detailing many common operations and common issues. If you need any help with your hosting, this is the place to start!',
  url: 'https://support.infinitzhost.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.razorpay.com/logos/GEP7EbaTyp9248_medium.png',
  organizationName: 'fatgrizzly', // Usually your GitHub org/user name.
  projectName: 'knowledgebase', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'InfinitzHost',
      logo: {
        alt: 'InfinitzHost Logo',
        src: 'https://cdn.razorpay.com/logos/GEP7EbaTyp9248_medium.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://dash.infinitzhost.com',
          label: 'Dashboard',
          position: 'left',
        },
        {
          href: 'https://github.com/FatGrizzly/Knowledgebase',
          label: 'GitHub',
          position: 'left',
        },
        {
          href: 'https://status.infinitzhost.com',
          label: 'StatusPage',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/InfinitzHost.India',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/sq4ccuDFM6',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/infinitzhost/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCsjbT50QtGJeXB4TTMyoX0A/featured',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Dashboard',
              href: 'https://dash.infinitzhost.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/InfinitzHost',
            },
            {
              label: 'StatusPage',
              href: 'https://status.infinitzhost.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} InfinitzHost`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/fatgrizzly/knowledgebase',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
