(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-11-06",
      displayDate: "November 6, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot"],
      title: "GitHub Expands Copilot Code Review APIs and Reliability",
      url: "https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates/",
      summary: "GitHub added REST and GraphQL management and attribution for Copilot code review, a more compact review overview, AI-credit visibility, automatic-review bypass lists, and retry and reliability fixes. The updates are available on Copilot Pro, Pro+, Max, Business, and Enterprise; some enterprise and organization settings endpoints do not support GitHub Apps or fine-grained personal access tokens."
    },
    {
      source: "GitHub",
      date: "2026-11-06",
      displayDate: "November 6, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "VS Code"],
      title: "GitHub Copilot Weekly Release Connects App, CLI, IDE, and Agent Workflows",
      url: "https://github.blog/changelog/2026-11-06-github-copilot-weekly-releases-november-2/",
      summary: "GitHub's weekly release covers pull-request and session management plus opt-in assisted approvals in the Copilot app, a unified CLI settings dashboard, JetBrains Air and Xcode integrations, and VS Code 1.145 agent improvements. The VS Code additions include Preview remote app views and canvases, local cron automations, and Experimental chat view modes."
    },
    {
      source: "GitHub",
      date: "2026-11-06",
      displayDate: "November 6, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "VS Code"],
      title: "Copilot Impact Dashboard Adds Chat and VS Code Agent Usage",
      url: "https://github.blog/changelog/2026-11-06-copilot-impact-dashboard-adds-chat-and-vs-code-agent-usage/",
      summary: "GitHub added Copilot Chat and the VS Code Agents window to the Copilot impact dashboard and enterprise and organization 28-day reports, and renamed the Passive users cohort to Chat-first users. The two features count as engagement but do not change adoption-phase rules, historical reports are not backfilled, and access still requires the usage-metrics policy and an eligible role."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
