(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-07-17",
      displayDate: "July 17, 2026",
      category: "tools",
      companies: ["GitHub", "GitHub Copilot", "Copilot coding agent", "Copilot code review"],
      title: "GitHub Adds Repository-Level Copilot Usage Metrics",
      url: "https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available/",
      summary:
        "GitHub's Copilot usage metrics REST API now includes daily repository-level reports for Copilot coding agent pull requests and Copilot code review activity. Enterprise and organization reports can show where AI-created pull requests, merged PRs, and review suggestions are happening, giving leaders a more precise basis for AI-readiness and enablement decisions.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-17",
      displayDate: "July 17, 2026",
      category: "tools",
      companies: ["GitHub", "GitHub Copilot", "Copilot app"],
      title: "GitHub Copilot App Activity Lands in Usage Metrics API",
      url: "https://github.blog/changelog/2026-07-17-github-copilot-app-now-available-in-the-usage-metrics-api/",
      summary:
        "GitHub added Copilot app usage to enterprise and organization 1-day and 28-day metrics reports. New fields track distinct active Copilot app users plus sessions, requests, prompts, and token usage in a separate app section, making desktop app adoption visible alongside IDE, chat, code review, and coding agent usage.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-17",
      displayDate: "July 17, 2026",
      category: "tools",
      companies: ["GitHub", "GitHub Copilot", "Copilot code review", "AGENTS.md"],
      title: "Copilot Code Review Gains Branch-Testable Instructions and Firewall Controls",
      url: "https://github.blog/changelog/2026-07-17-copilot-code-review-customization-and-configurability-improvements/",
      summary:
        "Copilot code review now reads custom instructions from the pull request head branch, expands supported instruction files to include REVIEW.md, GEMINI.md, CLAUDE.md, agent skills, and AGENTS.md, and adds a dedicated copilot-code-review.yml setup path. GitHub also enabled a default firewall for Copilot code review and split code-review runner configuration from Copilot cloud agent runner settings.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
