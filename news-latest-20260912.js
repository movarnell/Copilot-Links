(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-09-11",
      displayDate: "September 11, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Visual Studio Code", "Usage metrics", "Enterprise management"],
      title: "GitHub Adds VS Code Agents to Copilot Usage Metrics",
      url: "https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics/",
      summary:
        "GitHub added generally available enterprise and organization metrics for the dedicated VS Code Agents window. New daily and 28-day aggregate reports can count active users, sessions, and user messages, while user-level reports indicate Agents-window use and include session and message totals. For Copilot program owners, the separate fields make adoption reporting more useful by measuring dedicated Agents-window activity without conflating it with editor-window Agent Mode or generic usage rollups.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-11",
      displayDate: "September 11, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Code review", "Multi-agent review", "Agent firewall"],
      title: "Copilot Code Review Adds Auto-Resolution and Multi-Agent Lite Reviews",
      url: "https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review/",
      summary:
        "Copilot code review now resolves its own comments when a later commit addresses the feedback and generates a tailored commit message when a suggestion is applied. Its review agent can also run builds, tests, targeted scripts, and other shell tools behind the Copilot agent firewall, while Lite reviews now combine findings from an ensemble of agents. Keep normal CI and human approval gates in place: broader tool-backed analysis can improve signal, but an automatically resolved thread is still a review result rather than independent proof that the change is correct.",
    },
    {
      source: "The GitHub Blog",
      date: "2026-09-11",
      displayDate: "September 11, 2026",
      category: "workflows",
      companies: ["GitHub Copilot", "GitHub Actions", "Agent Skills", "Operations automation"],
      title: "GitHub Shows How to Turn Operations Runbooks into Reviewed Agent Workflows",
      url: "https://github.blog/ai-and-ml/github-copilot/marketing-ops-as-code-automating-events-from-planning-to-follow-up-on-github/",
      summary:
        "GitHub documented an operations-as-code pattern that turns structured Issues, labels, Actions, AGENTS.md guidance, and Copilot agent skills into a repeatable event workflow. The practical lessons extend beyond marketing: start with one bounded task, keep human sign-off before consequential actions, add a DRY_RUN rehearsal switch, review skills through pull requests and CODEOWNERS, protect secrets, and make scheduled failures visible. The case study is especially useful for teams converting existing runbooks into governed AI workflows instead of asking an agent to improvise an entire process.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
