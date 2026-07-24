(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-07-23",
      displayDate: "July 23, 2026",
      category: "tools",
      companies: ["GitHub Copilot", "Linear", "Copilot coding agent"],
      title: "Copilot Cloud Agent for Linear Is Generally Available",
      url: "https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available",
      summary:
        "GitHub says the Copilot cloud agent integration for Linear is now generally available, letting teams delegate work from Linear issues into GitHub-hosted coding-agent sessions. The workflow reinforces Copilot's move from editor-only assistance toward tracked, issue-driven implementation loops.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-23",
      displayDate: "July 23, 2026",
      category: "tools",
      companies: ["GitHub MCP Server", "MCP", "GitHub Copilot"],
      title: "GitHub MCP Server Adds Support for the Next MCP Specification",
      url: "https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification",
      summary:
        "GitHub updated its MCP Server for the next Model Context Protocol specification, which matters for Copilot and other agents that depend on stable, governed tool access to repositories, issues, pull requests, and related development context.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-23",
      displayDate: "July 23, 2026",
      category: "tools",
      companies: ["GitHub Copilot", "GitHub Issues", "Automation controls"],
      title: "GitHub Previews Agent Automation Controls in Issues",
      url: "https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview",
      summary:
        "GitHub introduced public-preview controls for automating Copilot agent behavior from GitHub Issues. The feature adds another policy and workflow surface for teams deciding when agents should start work, how much autonomy they get, and how human review stays attached.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-07-22",
      displayDate: "July 22, 2026",
      category: "tools",
      companies: ["VS Code", "GitHub Copilot", "Agent Host Protocol", "AI approvals"],
      title: "VS Code 1.130 Ships Agent Host and Assisted Approval Updates",
      url: "https://code.visualstudio.com/updates/v1_130",
      summary:
        "The July VS Code release promotes 1.130 to the stable channel with more agent-workflow plumbing: continued Agent Host Protocol work, assisted tool approvals, and editor-side Copilot improvements that matter for teams standardizing agent sessions, MCP tools, and review boundaries.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
