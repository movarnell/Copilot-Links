(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-07-24",
      displayDate: "July 24, 2026",
      category: "new-models",
      companies: ["GitHub Copilot", "Anthropic", "Claude Opus 5"],
      title: "Claude Opus 5 Arrives in GitHub Copilot",
      url: "https://github.blog/changelog/2026-07-24-claude-opus-5-is-now-available-in-github-copilot/",
      summary:
        "GitHub says Anthropic's Claude Opus 5 is now available in Copilot for Pro+, Max, Business, and Enterprise users, with gradual rollout across VS Code, Visual Studio, Copilot CLI, the cloud agent, the Copilot app, github.com, mobile, JetBrains, Xcode, and Eclipse. GitHub positions the model for complex long-running coding tasks, multi-step tool use, regression verification, and careful execution, while noting enhanced cyber-safety safeguards, provider-list-price billing, and Business/Enterprise admin policy controls.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
