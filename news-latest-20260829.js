(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-08-28",
      displayDate: "August 28, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "VS Code", "Visual Studio"],
      title: "GitHub Copilot Weekly Release Roundup Expands App, CLI, VS Code, and Visual Studio Agent Controls",
      url: "https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24/",
      summary:
        "GitHub's latest Copilot weekly roundup covers shared Copilot sessions in Slack and Microsoft Teams, general availability for the Copilot app Customize tab, Azure DevOps handoffs, WSL support, native-Rust Copilot CLI performance, restored interrupted sessions, plugin/MCP/skills management, JetBrains enterprise controls, VS Code 1.135 agent-session updates, and Visual Studio model, custom-agent, usage, and Git review workflows.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
