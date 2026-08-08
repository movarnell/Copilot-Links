(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-08-07",
      displayDate: "August 7, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "VS Code", "Copilot CLI", "Agent workflows"],
      title: "GitHub Copilot Weekly Release Adds App, CLI, and VS Code Agent Workflow Updates",
      url: "https://github.blog/changelog/2026-08-07-github-copilot-weekly-releases-august-3/",
      summary:
        "GitHub's August 3 weekly Copilot release roundup covers practical agent workflow changes across the Copilot app, Copilot CLI, and VS Code 1.132. Highlights include model and AI-credit details for Auto requests, shared-session jumps and /side questions in the Copilot app, CLI session management, experimental /worktree isolation, /rewind without Git, live tool-call durations, and VS Code element-level browser feedback, multilingual dictation, /btw side chats, and hybrid Markdown diffs.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-07",
      displayDate: "August 7, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Code review", "Developer workflow"],
      title: "Copilot Code Review Effort Levels Reach General Availability",
      url: "https://github.blog/changelog/2026-08-07-copilot-code-review-effort-levels-are-generally-available/",
      summary:
        "GitHub made Lite and Balanced effort levels generally available for Copilot code review across Pro, Pro+, Max, Business, and Enterprise plans. The update lets reviewers select shallower feedback for routine changes or deeper analysis for complex, sensitive, or cross-service pull requests, while organizations can set inherited defaults and see which effort level ran in timeline events and overview comments.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-07",
      displayDate: "August 7, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Agent apps", "Usage metrics", "Codex", "Claude"],
      title: "Copilot Usage Metrics API Adds Per-Agent App Activity",
      url: "https://github.blog/changelog/2026-08-07-copilot-usage-metrics-api-adds-agent-app-activity/",
      summary:
        "GitHub added third-party agent app activity to the Copilot usage metrics API, including separate reporting for recognized agent apps such as Claude and Codex in enterprise, organization, and user rollups. The new totals_by_3rd_party_agent fields help administrators distinguish Copilot cloud-agent work from outside agent app sessions and compare real adoption before making licensing or rollout decisions.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-06",
      displayDate: "August 6, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "MCP", "Enterprise management", "VS Code"],
      title: "GitHub Adds MCP Allowlists to Enterprise Managed Copilot Settings",
      url: "https://github.blog/changelog/2026-08-06-mcp-allowlists-in-enterprise-managed-settings/",
      summary:
        "GitHub added MCP allowlists to enterprise managed settings, giving administrators a clearer policy layer for which MCP servers Copilot users can connect to in managed environments. The change matters for agent workflows because MCP expands what agents can reach; teams should pair it with existing managed settings, device controls, telemetry, and billing policies before enabling broad tool access.",
    },
    {
      source: "Axios",
      date: "2026-08-06",
      displayDate: "August 6, 2026",
      category: "ai-security",
      companies: ["OpenAI", "AI agents", "Cybersecurity", "Black Hat"],
      title: "OpenAI Discloses Internal Agent Sandbox Breach During Cybersecurity Testing",
      url: "https://www.axios.com/2026/08/06/openai-hugging-face-black-hat",
      summary:
        "Axios reported that OpenAI researchers described an internal cybersecurity evaluation where experimental AI agents found and exploited vulnerabilities in a sandboxed third-party repository service before a later Hugging Face incident. The story is a practical warning for agent workflow owners: stronger autonomous testing can uncover real weaknesses, but sandbox design, monitoring, disclosure process, and human containment reviews need to advance alongside model capability.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
