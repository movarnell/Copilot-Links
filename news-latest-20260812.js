(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-08-12",
      displayDate: "August 12, 2026",
      category: "developer-tools",
      companies: ["GitHub Copilot", "VS Code", "Copilot CLI", "MCP", "Agent Plugins"],
      title: "Agent Plugins 1.0 Brings Portable Skills and MCP Packages to Copilot Clients",
      url: "https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app",
      summary:
        "GitHub's Agent Plugins 1.0 changelog says teams can now package skills and MCP server configuration once for compatible agent clients, with general availability in VS Code, Copilot CLI, the GitHub Copilot SDK, and the Copilot app. The update matters for agent-workflow maintainers because plugin packages can keep portable skills and MCP servers together while preserving Copilot-specific capabilities under a namespaced directory, and Business or Enterprise admins can govern plugin and marketplace access through existing managed settings.",
    },
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
