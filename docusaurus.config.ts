import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const themeVariant = process.env.THEME_VARIANT === "alt" ? "alt" : "default";

const config: Config = {
  title: "Codex CLI Guide Book",
  tagline: "A practical field guide for OpenAI Codex CLI",
  favicon: "img/favicon.svg",

  url: "https://yunusakin.github.io",
  baseUrl: "/codex-cli-guide-book/",

  organizationName: "yunusakin",
  projectName: "codex-cli-guide-book",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw"
    }
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/yunusakin/codex-cli-guide-book/tree/main/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false
        },
        blog: false,
        theme: {
          customCss: themeVariant === "alt" ? "./src/css/custom.alt.css" : "./src/css/custom.sleek.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image: "img/social-card.svg",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: "Codex CLI Guide Book",
      logo: {
        alt: "Codex CLI Guide Book logo",
        src: "img/logo-mark.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guideSidebar",
          position: "left",
          label: "Docs"
        },
        {
          to: "/docs/quickstart",
          label: "Quickstart",
          position: "left"
        },
        {
          to: "/docs/references",
          label: "References",
          position: "left"
        },
        {
          href: "https://github.com/yunusakin/codex-cli-guide-book/blob/main/README.tr.md",
          label: "Turkce Ozet",
          position: "right"
        },
        {
          href: "https://github.com/yunusakin/codex-cli-guide-book",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Guide",
          items: [
            {
              label: "Quickstart",
              to: "/docs/quickstart"
            },
            {
              label: "Cheat Sheet",
              to: "/docs/cheatsheet"
            },
            {
              label: "Official References",
              to: "/docs/references"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Repository",
              href: "https://github.com/yunusakin/codex-cli-guide-book"
            },
            {
              label: "Turkce Ozet",
              href: "https://github.com/yunusakin/codex-cli-guide-book/blob/main/README.tr.md"
            }
          ]
        },
        {
          title: "Official",
          items: [
            {
              label: "Codex CLI Overview",
              href: "https://developers.openai.com/codex/cli"
            },
            {
              label: "Codex CLI Reference",
              href: "https://developers.openai.com/codex/cli/reference"
            },
            {
              label: "Codex Changelog",
              href: "https://developers.openai.com/codex/changelog"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Codex CLI Guide Book`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "toml", "json", "yaml"]
    }
  } satisfies Preset.ThemeConfig,
  customFields: {
    themeVariant
  }
};

export default config;
