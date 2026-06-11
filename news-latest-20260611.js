(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-11",
      displayDate: "June 11, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot CLI", "Developer settings"],
      title: "Copilot CLI Adds a Unified /settings Command",
      url: "https://github.blog/changelog/2026-06-11-copilot-cli-configure-everything-from-one-place-with-settings/",
      summary:
        "GitHub added a unified `/settings` command to Copilot CLI so users can browse, search, update, and reset CLI configuration from one schema-driven surface. The command replaces scattered commands such as `/theme`, `/streamer-mode`, and `/experimental`, supports inline and scripted changes, and validates settings before writing them to disk. For teams standardizing AI developer workflows, this makes Copilot CLI easier to govern because settings become discoverable, typed, and less dependent on manually editing local files.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-11",
      displayDate: "June 11, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "GitHub Actions", "Agentic Workflows"],
      title: "GitHub Agentic Workflows Enters Public Preview",
      url: "https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/",
      summary:
        "GitHub put Agentic Workflows into public preview, letting teams define reasoning-based automations in natural language Markdown and compile them into standard GitHub Actions workflows. GitHub positions the feature for tasks such as issue triage, CI failure analysis, documentation updates, dependency work, compliance checks, and cross-repository engineering routines. The important workflow signal is that agentic automation is moving into existing Actions infrastructure, with runner policies, read-only defaults, sandboxing, output validation, and threat-detection checks becoming part of the normal review story.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-11",
      displayDate: "June 11, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "GitHub Actions", "Agentic Workflows"],
      title: "Agentic Workflows Can Use GITHUB_TOKEN Instead of a PAT",
      url: "https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/",
      summary:
        "GitHub updated Agentic Workflows so they can use the built-in GitHub Actions `GITHUB_TOKEN` instead of requiring a long-lived personal access token. Organization-owned repositories can bill Copilot CLI usage directly to the organization when the relevant policy and `copilot-requests: write` permission are enabled, and GitHub points teams to cost centers plus workflow-level cost controls for spend management. For production agent workflows, the change reduces credential-management risk while making budget policy part of the automation design.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-10",
      displayDate: "June 10, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot Chat", "Copilot cloud agent", "Agent sessions"],
      title: "Copilot Chat Can Search and Explain Active Agent Sessions",
      url: "https://github.blog/changelog/2026-06-10-copilot-chat-now-sees-your-agent-sessions/",
      summary:
        "GitHub improved the handoff between Copilot Chat and Copilot cloud agent on the web. Copilot Chat can now reflect the status of in-progress sessions that were started from chat, pull-request creation, or deep repository research, and it can answer follow-up questions after a session completes. Two new tools bring agent logs into chat and search past sessions by topic, title, or recency. For teams using cloud agents, this makes the review loop more traceable because developers can ask what changed, what was validated, and why without leaving the chat thread.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
