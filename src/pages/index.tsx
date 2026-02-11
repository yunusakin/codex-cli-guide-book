import clsx from "clsx";
import {useMemo, useState} from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

const featureItems = [
  {
    title: "Fast Start",
    description: "Install, launch, and move through core workflows in minutes.",
    to: "/docs/quickstart"
  },
  {
    title: "Security Defaults",
    description: "Use safe sandbox and approval settings before editing unfamiliar repos.",
    to: "/docs/security-and-control"
  },
  {
    title: "Team Rules",
    description: "Lock behavior with AGENTS.md and team-level config conventions.",
    to: "/docs/agents-md"
  },
  {
    title: "Non-Interactive CI",
    description: "Run Codex in pipelines using deterministic command patterns.",
    to: "/docs/noninteractive-and-ci"
  },
  {
    title: "MCP and Tools",
    description: "Connect external docs and tools through MCP integrations.",
    to: "/docs/mcp"
  },
  {
    title: "Troubleshooting",
    description: "Recover quickly from auth, sandbox, and execution failures.",
    to: "/docs/troubleshooting"
  }
];

const interactiveFlow = [
  {
    action: "Install CLI",
    value: "npm i -g @openai/codex@latest"
  },
  {
    action: "Safe first session",
    value: "codex --sandbox read-only --ask-for-approval on-request"
  },
  {
    action: "Resume previous",
    value: "codex resume --last"
  },
  {
    action: "Help inside session",
    value: "/help"
  }
];

const automationFlow = [
  {
    action: "JSON output",
    value: "codex exec --json \"<task>\""
  },
  {
    action: "Skip repo check",
    value: "codex exec --skip-git-repo-check \"<task>\""
  },
  {
    action: "Set profile",
    value: "codex --profile ci"
  },
  {
    action: "Cloud run",
    value: "codex cloud \"<task>\""
  }
];

const guideRoadmap = [
  {
    label: "00-03",
    title: "Getting Productive",
    detail: "Quickstart, installation, authentication, and core workflows.",
    to: "/docs/core-workflows"
  },
  {
    label: "04-07",
    title: "Control and Safety",
    detail: "AGENTS.md, slash commands, configuration, and sandbox controls.",
    to: "/docs/security-and-control"
  },
  {
    label: "08-11",
    title: "Scale and Automate",
    detail: "Non-interactive mode, MCP, cloud tasks, and team configuration.",
    to: "/docs/team-config-skills-and-rules"
  },
  {
    label: "12-13",
    title: "Recovery and Cheat Sheet",
    detail: "Troubleshooting patterns and compact command reference.",
    to: "/docs/cheatsheet"
  }
];

const officialLinks = [
  {
    title: "Codex CLI Overview",
    href: "https://developers.openai.com/codex/cli"
  },
  {
    title: "Codex CLI Reference",
    href: "https://developers.openai.com/codex/cli/reference"
  },
  {
    title: "Codex Changelog",
    href: "https://developers.openai.com/codex/changelog"
  }
];

type InstallTabId = "npm" | "safety" | "automation";

const installTabs: Array<{id: InstallTabId; label: string; content: string}> = [
  {
    id: "npm",
    label: "npm",
    content: `npm i -g @openai/codex@latest
codex
codex --sandbox read-only --ask-for-approval on-request`
  },
  {
    id: "safety",
    label: "safety",
    content: `codex --sandbox read-only --ask-for-approval on-request
codex --sandbox workspace-write --ask-for-approval on-request
codex --full-auto`
  },
  {
    id: "automation",
    label: "automation",
    content: `codex exec --json "<task>"
codex exec --skip-git-repo-check "<task>"
codex cloud "<task>"`
  }
];

export default function Home(): JSX.Element {
  const [activeTab, setActiveTab] = useState<InstallTabId>("npm");
  const activeTabContent = useMemo(
    () => installTabs.find((tab) => tab.id === activeTab)?.content ?? installTabs[0].content,
    [activeTab]
  );

  return (
    <Layout
      title="Codex CLI Guide Book"
      description="A practical and visual field guide for OpenAI Codex CLI"
    >
      <main className={styles.landing}>
        <section className={styles.hero}>
          <p className={styles.kicker}>OpenAI Codex CLI</p>
          <Heading as="h1" className={styles.heroTitle}>
            Codex CLI Guide Book
          </Heading>
          <p className={styles.heroDescription}>
            A Scribbler-inspired documentation hub for moving fast without losing
            control. Learn the path once, then use chapters as an operational
            reference.
          </p>
        </section>

        <section className={styles.heroTerminal} aria-label="Quick terminal demo">
          <pre>
            <code>{`$ npm i -g @openai/codex@latest
$ codex --sandbox read-only --ask-for-approval on-request
$ /help
$ codex exec --json "summarize repo risks"
$ codex cloud "fix failing CI and open PR"`}</code>
          </pre>
        </section>

        <div className={styles.wrapper}>
          <section className={styles.installation}>
            <Heading as="h2" className={styles.sectionTitle}>
              Install and Run
            </Heading>
            <div className={styles.tabContainer}>
              <ul className={styles.tabMenu} role="tablist" aria-label="Install command presets">
                {installTabs.map((tab) => (
                  <li key={tab.id} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls={`install-panel-${tab.id}`}
                      id={`install-tab-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={clsx(styles.tabButton, activeTab === tab.id && styles.activeTabButton)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <pre
                className={styles.codeBlock}
                role="tabpanel"
                id={`install-panel-${activeTab}`}
                aria-labelledby={`install-tab-${activeTab}`}
              >
                <code>{activeTabContent}</code>
              </pre>
            </div>
          </section>

          <section className={styles.featureGrid}>
            {featureItems.map((item) => (
              <Link key={item.title} to={item.to} className={styles.featureItem}>
                <Heading as="h3" className={styles.sectionTitle}>
                  {item.title}
                </Heading>
                <p>{item.description}</p>
              </Link>
            ))}
          </section>

          <section className={styles.keybinding}>
            <ul className={styles.keybindingDetail}>
              <li className={styles.keybindingTitle}>Interactive Flow</li>
              {interactiveFlow.map((item) => (
                <li key={item.action}>
                  {item.action}
                  <span className={styles.keyLabel}>{item.value}</span>
                </li>
              ))}
            </ul>
            <ul className={styles.keybindingDetail}>
              <li className={styles.keybindingTitle}>CI and Automation Flow</li>
              {automationFlow.map((item) => (
                <li key={item.action}>
                  <span className={styles.keyLabel}>{item.value}</span>
                  {item.action}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.callout}>
            <p>Use the full guide for details, and verify behavior against official docs.</p>
            <div className={styles.calloutActions}>
              <Link className={clsx("button button--primary", styles.primaryAction)} to="/docs/quickstart">
                Open Guide
              </Link>
              <Link className={clsx("button button--secondary", styles.secondaryAction)} to="/docs/references">
                Official References
              </Link>
            </div>
          </section>
        </div>

        <section className={styles.roadmap}>
          <div className={styles.wrapper}>
            <Heading as="h2" className={styles.sectionTitle}>
              Guide Roadmap
            </Heading>
            {guideRoadmap.map((item) => (
              <div key={item.label} className={styles.roadmapItem}>
                <div className={styles.roadmapMeta}>
                  <h4 className={styles.roadmapTag}>{item.label}</h4>
                </div>
                <div className={styles.roadmapDetail}>
                  <Link to={item.to} className={styles.roadmapLink}>
                    {item.title}
                  </Link>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
            <div className={styles.roadmapCallout}>
              <a href="https://github.com/yunusakin/codex-cli-guide-book/blob/main/README.tr.md" target="_blank" rel="noreferrer" className={clsx("button button--secondary", styles.secondaryAction)}>
                Turkce Ozet
              </a>
            </div>
          </div>
        </section>

        <section className={styles.metaFooter}>
          <div className={styles.wrapper}>
            <p>
              Official sources: {" "}
              {officialLinks.map((item, index) => (
                <span key={item.title}>
                  <a href={item.href} target="_blank" rel="noreferrer" className={styles.metaLink}>
                    {item.title}
                  </a>
                  {index < officialLinks.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
