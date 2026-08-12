(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-08-12",
      displayDate: "August 12, 2026",
      category: "developer-tools",
      companies: ["VS Code", "Copilot", "Claude", "Agent Host Protocol"],
      title: "VS Code 1.133 Adds Agent Host and Claude Session Workflow Updates",
      url: "https://code.visualstudio.com/updates/v1_133",
      summary:
        "Microsoft's VS Code 1.133 release adds agent-host workflow changes that matter for mixed agent stacks: Claude sessions can switch between Anthropic and Copilot-provided models between turns, the Agents window can open without GitHub sign-in when a usable Claude API-key setup exists, and local HTML previews can auto-reload as files change. Teams using Copilot, Claude, or other Agent Host Protocol harnesses should recheck provider billing boundaries, sign-in assumptions, and preview workflows before standardizing agent runbooks.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
