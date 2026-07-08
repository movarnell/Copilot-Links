(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-07-08",
      displayDate: "July 8, 2026",
      category: "tools",
      companies: ["VS Code", "GitHub Copilot", "AI Agents", "Developer Tools"],
      title: "VS Code 1.128 Expands Agent Chat, Planning, and Browser Workflows",
      url: "https://code.visualstudio.com/updates/v1_128",
      summary:
        "VS Code 1.128 adds a redesigned chat experience, richer plan review, subagents, improved browser-agent workflows, and stronger session controls. The release continues the editor's shift from single prompts toward managed, observable agent workflows with clearer review points.",
    },
    {
      source: "GitHub",
      date: "2026-07-07",
      displayDate: "July 7, 2026",
      category: "tools",
      companies: ["GitHub Copilot", "Copilot App", "AI Coding Agents", "GitHub"],
      title: "GitHub Copilot App Reaches General Availability",
      url: "https://github.blog/changelog/2026-07-07-github-copilot-app-is-now-generally-available/",
      summary:
        "GitHub has made the Copilot app generally available, giving developers a dedicated surface for assigning, monitoring, and reviewing coding-agent work. The release reinforces GitHub's Agent HQ direction by treating background tasks and review handoffs as a first-class workflow.",
    },
    {
      source: "GitHub",
      date: "2026-07-07",
      displayDate: "July 7, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Kimi K2.7 Code", "Moonshot AI", "Enterprise AI"],
      title: "Kimi K2.7 Code Expands to Copilot Business and Enterprise",
      url: "https://github.blog/changelog/2026-07-07-kimi-k2-7-code-is-now-available-for-copilot-business-and-enterprise/",
      summary:
        "GitHub has expanded Kimi K2.7 Code to Copilot Business and Enterprise customers after its initial individual-plan rollout. Organization administrators still control access, so teams should confirm policy, data-governance, and AI-credit behavior before adopting the open-weight coding model broadly.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
