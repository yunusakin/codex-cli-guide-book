import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

const quickActions = [
  {
    title: "Start Safely",
    to: "/docs/quickstart",
    command: "codex --sandbox read-only --ask-for-approval on-request"
  },
  {
    title: "Install and Upgrade",
    to: "/docs/installation",
    command: "npm i -g @openai/codex@latest"
  },
  {
    title: "Set Security Defaults",
    to: "/docs/security-and-control",
    command: "codex --full-auto"
  },
  {
    title: "Run in CI",
    to: "/docs/noninteractive-and-ci",
    command: "codex exec --json \"...\""
  }
];

const chapters = [
  {title: "00 Quickstart", to: "/docs/quickstart", tag: "Foundation"},
  {title: "01 Installation", to: "/docs/installation", tag: "Setup"},
  {title: "02 Authentication", to: "/docs/authentication", tag: "Identity"},
  {title: "03 Core Workflows", to: "/docs/core-workflows", tag: "Daily Flow"},
  {title: "04 AGENTS.md", to: "/docs/agents-md", tag: "Instructions"},
  {title: "05 Slash Commands", to: "/docs/slash-commands", tag: "Session Control"},
  {title: "06 Configuration", to: "/docs/configuration", tag: "config.toml"},
  {title: "07 Security and Control", to: "/docs/security-and-control", tag: "Safety"},
  {title: "08 Non-Interactive and CI", to: "/docs/noninteractive-and-ci", tag: "Automation"},
  {title: "09 MCP", to: "/docs/mcp", tag: "Tooling"},
  {title: "10 Cloud Tasks", to: "/docs/cloud-tasks", tag: "Remote Runs"},
  {title: "11 Team Config", to: "/docs/team-config-skills-and-rules", tag: "Collaboration"},
  {title: "12 Troubleshooting", to: "/docs/troubleshooting", tag: "Recovery"},
  {title: "13 Cheat Sheet", to: "/docs/cheatsheet", tag: "Reference"}
];

const officialReferences = [
  {
    title: "Codex CLI Overview",
    href: "https://developers.openai.com/codex/cli"
  },
  {
    title: "Codex CLI Reference",
    href: "https://developers.openai.com/codex/cli/reference"
  },
  {
    title: "Slash Commands",
    href: "https://developers.openai.com/codex/cli/slash-commands"
  },
  {
    title: "Configuration",
    href: "https://developers.openai.com/codex/config-basic"
  },
  {
    title: "Security",
    href: "https://developers.openai.com/codex/security"
  },
  {
    title: "Changelog",
    href: "https://developers.openai.com/codex/changelog"
  }
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Codex CLI Guide Book"
      description="A practical and visual field guide for OpenAI Codex CLI"
    >
      <main className={styles.home}>
        <section className={clsx(styles.section, styles.hero)}>
          <div className={styles.heroBackdrop} aria-hidden />
          <p className={styles.kicker}>OpenAI Codex CLI</p>
          <Heading as="h1" className={styles.title}>
            Codex CLI Guide Book
          </Heading>
          <p className={styles.subtitle}>
            A practical field guide with a cleaner visual dashboard. Read fast,
            move safely, and cross-check official docs when behavior changes.
          </p>
          <div className={styles.heroActions}>
            <Link className={clsx("button button--primary", styles.primaryAction)} to="/docs/quickstart">
              Start with Quickstart
            </Link>
            <Link className={clsx("button button--secondary", styles.secondaryAction)} to="/docs/references">
              Official References
            </Link>
          </div>
        </section>

        <section className={clsx(styles.section, styles.quickActionWrap)}>
          <div className={styles.sectionHeading}>
            <Heading as="h2">Quick Actions</Heading>
            <p>Fast entry points for setup, safety, and automation.</p>
          </div>
          <div className={styles.quickGrid}>
            {quickActions.map((item) => (
              <Link key={item.title} to={item.to} className={styles.quickCard}>
                <h3>{item.title}</h3>
                <code>{item.command}</code>
              </Link>
            ))}
          </div>
        </section>

        <section className={clsx(styles.section, styles.chapterWrap)}>
          <div className={styles.sectionHeading}>
            <Heading as="h2">Guide Chapters</Heading>
            <p>Structured in the same order as your canonical Markdown docs.</p>
          </div>
          <div className={styles.chapterGrid}>
            {chapters.map((chapter) => (
              <Link key={chapter.title} to={chapter.to} className={styles.chapterCard}>
                <span className={styles.chapterTag}>{chapter.tag}</span>
                <h3>{chapter.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className={clsx(styles.section, styles.referencesWrap)}>
          <div className={styles.sectionHeading}>
            <Heading as="h2">Official Sources</Heading>
            <p>When docs drift, trust developers.openai.com first.</p>
          </div>
          <div className={styles.referenceGrid}>
            {officialReferences.map((ref) => (
              <a
                key={ref.title}
                href={ref.href}
                target="_blank"
                rel="noreferrer"
                className={styles.referenceCard}
              >
                <h3>{ref.title}</h3>
                <span>Open source of truth</span>
              </a>
            ))}
          </div>
        </section>

        <section className={clsx(styles.section, styles.metaRow)}>
          <p>
            Turkish summary is available in{" "}
            <a
              href="https://github.com/yunusakin/codex-cli-guide-book/blob/main/README.tr.md"
              target="_blank"
              rel="noreferrer"
            >
              README.tr.md
            </a>
            .
          </p>
        </section>
      </main>
    </Layout>
  );
}
