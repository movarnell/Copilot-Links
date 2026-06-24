(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code Release Notes",
      date: "2026-06-24",
      displayDate: "June 24, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Visual Studio Code", "GitHub Copilot", "Agent workflows"],
      title: "VS Code 1.126 Adds Session-Level Cost Tracking and Multi-Chat Agent Sessions",
      url: "https://code.visualstudio.com/updates/v1_126",
      summary:
        "Visual Studio Code 1.126 adds a whole-session credit-cost view, a unified picker for context size and reasoning effort, and multiple independent chats within one Agent Host Copilot session. It also opens newly encountered folders in Restricted Mode by default, allowing developers to inspect unfamiliar code before granting workspace trust. For AI workflows, use session-cost information to identify expensive work, separate implementation and review chats while preserving shared workspace context, and keep untrusted repositories restricted until their contents have been evaluated.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
