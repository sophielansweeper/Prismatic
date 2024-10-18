// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");

const {
  DOCUSAURUS_URLS_ROOT: rootUrl = "https://prismatic.io",
  DOCUSAURUS_URLS_APP: appUrl = "https://app.prismatic.io/",
} = process.env;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prismatic Docs",
  tagline: "Documentation",
  url: rootUrl,
  baseUrl: "/docs/",
  favicon: "img/favicon.ico",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: "Prismatic Docs",
      logo: {
        alt: "Logo",
        src: "img/logo-primary-purple.png",
      },
      items: [
        {
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          items: [
            {
              label: "Custom Component SDK (Spectral)",
              href: "https://github.com/prismatic-io/spectral",
            },
            {
              label: "CLI Tool (Prism)",
              href: "https://github.com/prismatic-io/prism",
            },
            {
              label: "Embedded Library",
              href: "https://github.com/prismatic-io/embedded",
            },
            {
              label: "Examples",
              href: "https://github.com/prismatic-io/examples",
            },
          ],
        },
        {
          label: "Sign Up",
          position: "right",
          className: "header-signup",
          href: `${rootUrl}/sign-up/?plan=free`,
        },
        {
          label: "Log In",
          position: "right",
          className: "header-login",
          href: appUrl,
        },
        {
          label: "Get Started",
          to: "getting-started/what-is-prismatic",
          position: "left",
        },
        {
          label: "Docs",
          to: "organization",
          position: "left",
        },
        {
          label: "Components",
          to: "components/component-catalog",
          position: "left",
        },
        {
          label: "CLI & SDKs",
          position: "left",
          items: [
            {
              label: "Prism CLI Tool",
              to: "cli/cli-usage",
            },
            {
              label: "Custom Component SDK",
              to: "custom-components/writing-custom-components",
            },
            {
              label: "Embedded SDK",
              to: "embedding-marketplace",
            },
          ],
        },
        {
          label: "API",
          position: "left",
          items: [
            {
              label: "API Docs",
              to: "api/api-overview",
            },
            {
              label: "Common Queries and Mutations",
              to: "api/using-prismatic-api",
            },
            {
              label: "API Explorer",
              to: "explorer",
            },
          ],
        },
        {
          label: "Changelog",
          to: "changelog",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Platform",
          items: [
            {
              label: "Intuitive Integration Designer",
              to: "../platform/integration-designer/",
              target: "_parent",
            },
            {
              label: "Embedded Integration Marketplace",
              to: "../platform/embedded-integration-marketplace/",
              target: "_parent",
            },
            {
              label: "Integration Deployment & Support",
              to: "../platform/integration-deployment-support/",
              target: "_parent",
            },
            {
              label: "Purpose-Built Infrastructure",
              to: "../platform/purpose-built-infrastructure/",
              target: "_parent",
            },
            {
              label: "Built In A Way Devs Love",
              to: "../platform/built-in-a-way-devs-love/",
              target: "_parent",
            },
            {
              label: "Connectors",
              to: "../components/",
              target: "_parent",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "Docs Home",
              to: "/",
            },
            {
              label: "Getting Started Guide",
              to: "getting-started/what-is-prismatic",
            },
            {
              label: "Component Docs",
              to: "components/component-catalog",
            },
            {
              label: "Building Custom Components",
              to: "custom-components/writing-custom-components",
            },
            {
              label: "API Reference",
              to: "api/api-overview",
            },
            {
              label: "Prismatic CLI",
              to: "cli/cli-usage",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              to: "../about/",
              target: "_parent",
            },
            {
              label: "Pricing",
              to: "../pricing/",
              target: "_parent",
            },
            {
              label: "Guides",
              to: "../resources/",
              target: "_parent",
            },
            {
              label: "Blog",
              to: "../blog/",
              target: "_parent",
            },
            {
              label: "Legal",
              to: "../legal/terms/",
              target: "_parent",
            },
            {
              label: "Careers",
              to: "../careers/",
              target: "_parent",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Contact Us",
              to: "../contact/",
              target: "_parent",
            },
            {
              label: "5013 S Louise Ave #122\nSioux Falls, SD 57108",
              href: "https://www.google.com/maps/place/5013+S+Louise+Ave,+Sioux+Falls,+SD+57108/@43.4997057,-96.7749949,17z/data=!3m1!4b1!4m5!3m4!1s0x878ec9936333b29b:0x141d63a9b6ec2aa7!8m2!3d43.4997018!4d-96.7728009",
              target: "_self",
              className: "footer__link-item footer-address",
            },
            {
              label: "(888) 305-5453",
              href: "tel:888-305-5453",
            },
            {
              label: "info@prismatic.io",
              href: "mailto:info@prismatic.io",
            },
            {
              label: "Support",
              href: "mailto:support@prismatic.io",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Prismatic LLC. All rights reserved.`,
    },
    algolia: {
      appId: "BEWKIBOAL9",
      apiKey: "c9f49c4de3de9c665077ee289db8d014",
      indexName: "prismatic",
      algoliaOptions: {
        hitsPerPage: 10,
      },
    },
    prism: {
      theme: require("./src/prism-theme"),
      additionalLanguages: [
        "csharp",
        "hcl",
        // Liquid syntax highlighting has a bug. There is a swizzle work-around
        // if we're keen to get syntax highlighting for Liquid back
        // https://github.com/facebook/docusaurus/issues/8065
        // "liquid",
        "php",
      ],
    },
    image: "img/meta-image.png", // og:image and twitter:image for social posting
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // announcementBar: {
    //   id: "hiring",
    //   content:
    //     "Do you love automation and building scalable, resilient cloud infrastructure? <a href='https://boards.greenhouse.io/prismatic' class='apply-link' style='color:var(--cyan);text-decoration:none'>We're hiring backend developers! ›</a>",
    //   backgroundColor: "var(--periwinkle)",
    //   textColor: "white",
    //   isCloseable: false,
    // },
  },
  stylesheets: [
    "/docs/fonts/material-icons.min.css",
    "/docs/fonts/roboto.min.css",
  ],
  clientModules: [require.resolve("./src/plugins/fix-anchor-scroll/index.ts")],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars/index.js"),
          routeBasePath: "/",
          exclude: [
            "**/_*/**", // Allow for .md files prepended with underscores, like for our API
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "src/plugins/segment"),
    path.resolve(__dirname, "src/plugins/components"),
    // [
    //   "@docusaurus/plugin-client-redirects",
    //   {
    //     redirects: [
    //       {
    //         from: "/getting-started/example-from/",
    //         to: "/getting-started/example-redirect-to/",
    //       },
    //     ],
    //   },
    // ],
  ],
};

module.exports = config;
