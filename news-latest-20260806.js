(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-08-05",
      displayDate: "August 5, 2026",
      category: "ai-agents",
      companies: ["Visual Studio Code", "GitHub Copilot", "Agent Host Protocol", "Codex", "Claude"],
      title: "VS Code 1.132 Adds Agent Browser Comments, Side Chats, and Agent Host Updates",
      url: "https://code.visualstudio.com/updates/v1_132",
      summary:
        "Microsoft's VS Code 1.132 release adds element-level commenting in the integrated browser so developers can give agents feedback on specific page elements, side chats with /btw that share current-turn context without interrupting the main agent run, live activity pills for changes, previews, subagents, and browsers, and more Agent Host Protocol work for Copilot, Claude, and Codex harnesses.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-04",
      displayDate: "August 4, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "GitHub Spark", "Visual Studio Code", "Copilot CLI"],
      title: "GitHub Spark Stops New App Creation as Builders Move to Copilot Workflows",
      url: "https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/",
      summary:
        "GitHub says Spark on github.com no longer accepts new users or new apps as of August 4, with existing users able to export apps until August 31. GitHub points builders toward integrated Copilot workflows in VS Code, Copilot CLI, and the Copilot app, and warns that Spark apps using the retired GitHub Models llm() function need another inference provider.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-03",
      displayDate: "August 3, 2026",
      category: "ai-agents",
      companies: ["GitHub Copilot", "Copilot Cloud Agent"],
      title: "Copilot Cloud Agent Adds Per-Task Reasoning Level Controls",
      url: "https://github.blog/changelog/2026-08-03-customize-the-reasoning-level-for-copilot-cloud-agent/",
      summary:
        "GitHub now lets users choose a reasoning level when delegating work to Copilot cloud agent on paid plans that include the agent. Higher reasoning can improve complex-task results but consumes more tokens and AI credits, making reasoning level part of the same budget and quality tradeoff as model selection.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-03",
      displayDate: "August 3, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "Copilot Cloud Agent", "GitHub Issues"],
      title: "GitHub Adds Comment Triggers for Copilot Automations",
      url: "https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments/",
      summary:
        "GitHub Copilot automations can now run when issue or pull request comments match configured trigger text. GitHub suggests documentation generation, error investigation, and follow-up task creation as comment-driven workflows, with Business and Enterprise use gated by the Copilot cloud agent policy.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-03",
      displayDate: "August 3, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Copilot Business", "Copilot Enterprise"],
      title: "Enterprise Teams Can Specialize Copilot Managed Settings",
      url: "https://github.blog/changelog/2026-08-03-enterprise-team-specialization-for-managed-settings/",
      summary:
        "GitHub introduced team-specific managed settings for Copilot Business and Enterprise. Enterprise administrators can mark selected managed-settings keys as overridable, map team settings files to enterprise teams, and let teams specialize defaults such as model choice, plugin marketplaces, and bypass-permission behavior while central policy still sets the compliance ceiling.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
