(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-30",
      displayDate: "June 30, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Anthropic", "Claude Sonnet", "AI Credits"],
      title: "Claude Sonnet 5 Becomes Generally Available in GitHub Copilot",
      url: "https://github.blog/changelog/2026-06-30-claude-sonnet-5-is-generally-available-for-github-copilot/",
      summary:
        "GitHub made Claude Sonnet 5 available across VS Code, Visual Studio, Copilot CLI, cloud agent, the Copilot app, github.com, mobile, JetBrains, Xcode, and Eclipse. The rollout is gradual, Business and Enterprise admins must enable it in model policy settings, and usage is billed at provider list pricing under usage-based billing.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-30",
      displayDate: "June 30, 2026",
      category: "workflows",
      companies: ["GitHub Copilot", "JetBrains", "AI Agents"],
      title: "Copilot Agent Lands in the JetBrains AI Assistant Agent Picker",
      url: "https://github.blog/changelog/2026-06-30-copilot-agent-is-now-available-in-jetbrains-ai-assistant/",
      summary:
        "JetBrains AI Assistant now exposes GitHub Copilot as a first-class agent choice. Developers can select supported Copilot models, tune reasoning depth, and hand off multistep work that can inspect projects, propose changes, run commands, and iterate inside the IDE; GitHub says skills and deeper cross-tool orchestration are planned next.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
