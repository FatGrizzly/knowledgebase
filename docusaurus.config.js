module.exports = {
  title: 'InfinitzHost KnowledgeBase',
  tagline: 'This knowledge base is filled with articles detailing many common operations and common issues. If you need any help with your hosting, this is the place to start!',
  url: 'https://infinitzhost.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.razorpay.com/logos/GEP7EbaTyp9248_medium.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
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
          href: 'https://github.com/InfinitzHost/KnowledgeBase',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
