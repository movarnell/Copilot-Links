(function () {
  const latestUpdates = [
    {
      source: "TechCrunch",
      date: "2026-11-24",
      displayDate: "November 24, 2026",
      category: "ai-workflows",
      companies: ["OpenAI", "Anthropic", "Meta", "AI agents"],
      title: "ShellBench Finds Everyday AI Agent Work Still Unreliable",
      url: "https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/",
      summary: "TechCrunch reports that ShellBench's 100-task evaluation found the tested agents failed more than one-third of everyday personal-work tasks, while 15.7% of attempts missed at least one safety requirement and identical reruns often produced inconsistent results. The benchmark used five harnesses but did not test the companies' native Muse, Dots, or Claude Duet products, includes an LLM judge and all-or-nothing task criteria, and should not be treated as a direct evaluation of those consumer products."
    },
    {
      source: "Google Workspace",
      date: "2026-11-24",
      displayDate: "November 24, 2026",
      category: "ai-workflows",
      companies: ["Google", "Google Workspace", "MCP", "AI agents"],
      title: "Google Makes Governed Workspace MCP Servers and CLI Generally Available",
      url: "https://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html",
      summary: "Google made its hosted Workspace MCP servers and official Workspace CLI generally available for agent access to Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat, and Tasks, with scoped OAuth, confirmations, administrator controls, DLP, and audit logs. Rollout can take two weeks; agentic integrations must move from direct Workspace REST access to MCP before February 1, 2027, and scaled-tier billing above free allowances begins April 1, 2027 for Gmail, Calendar, Drive, and Workspace MCP usage. Traditional non-agent applications are not covered by the MCP requirement."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
