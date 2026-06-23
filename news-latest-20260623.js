(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-23",
      displayDate: "June 23, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot CLI", "Developer workflow"],
      title: "GitHub Makes the Redesigned Copilot CLI Terminal Interface Generally Available",
      url: "https://github.blog/changelog/2026-06-23-copilot-cli-new-terminal-interface-is-generally-available/",
      summary:
        "GitHub made the redesigned Copilot CLI terminal interface generally available. It adds tabs for the active session, personal gists, and—inside a repository—issues and pull requests, so developers can reference GitHub work directly in a prompt without leaving the terminal. The release also adds guided in-session configuration for MCP servers and other extensions, plus accessibility-focused theme and responsive-layout improvements. For agent workflows, this makes the terminal a more complete review and task-navigation surface; teams should still apply normal repository, tool, and approval boundaries before acting on agent output.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-22",
      displayDate: "June 22, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "JetBrains", "Claude", "Agent governance"],
      title: "GitHub Adds Organization Agents and Claude Provider Preview to JetBrains Copilot",
      url: "https://github.blog/changelog/2026-06-22-new-features-and-claude-as-agent-provider-preview-in-jetbrains-ides/",
      summary:
        "GitHub's JetBrains Copilot update adds organization- and enterprise-defined agents, queueing and steering for running Copilot CLI sessions, agent debug-log summaries, model-picker improvements, and per-turn AI-credit indicators. It also places Claude as an agent provider in public preview, configured through a local Claude Code CLI installation. GitHub notes that the preview currently runs in bypass-permissions mode, so file edits and tool calls are automatically approved; organizations should treat it as a guarded evaluation surface and require the relevant administrator policy before broader use.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-19",
      displayDate: "June 19, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "AI Credits", "Enterprise metrics"],
      title: "GitHub Adds Per-User AI-Credit Consumption to Copilot Usage Metrics API",
      url: "https://github.blog/changelog/2026-06-19-ai-credits-consumed-per-user-now-in-the-copilot-usage-metrics-api/",
      summary:
        "GitHub's Copilot usage metrics API now reports each user's daily AI-credit consumption through a new ai_credits_used field in single-day and 28-day enterprise and organization reports. The field is an overall per-user total, not a breakdown by model, feature, or surface, and GitHub says it is a metrics signal rather than a billed total. For Copilot program owners, it provides a practical way to monitor adoption and usage-based cost patterns alongside value and workflow outcomes without treating the metric as an invoice.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
