(function () {
  const latestUpdates = [
    {
      source: "TechCrunch",
      date: "2026-10-19",
      displayDate: "October 19, 2026",
      category: "new-models",
      companies: ["NVIDIA", "Nemotron", "Open Models", "Local Agents"],
      title: "NVIDIA Expands Nemotron With Enterprise and Local Agent Models",
      url: "https://techcrunch.com/2026/10/19/nvidia-launches-new-open-models-to-run-agents-in-the-enterprise-and-on-pcs/",
      summary: "TechCrunch reports that NVIDIA's open-weight Nemotron 3.5 Super VL targets customizable enterprise agents, while Bolt 74B-A9B is designed for local multistep reasoning, tool use, and web browsing in 24GB of memory. Super VL and Bolt 74B are available now, Bolt E4B is due October 23, and NVIDIA's performance claims should be validated on each team's own workloads."
    },
    {
      source: "GitHub Agentic Workflows",
      date: "2026-10-19",
      displayDate: "October 19, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "Agentic Workflows", "MCP", "Workflow Security"],
      title: "GitHub Hardens Agentic Workflows With Safer MCP Compilation",
      url: "https://github.github.com/gh-aw/blog/2026-10-19-weekly-update/",
      summary: "GitHub's Agentic Workflows v0.92.1 through v0.92.5 updates add normalized structured reports, clearer subagent and model failure diagnostics, read-only MCP compilation unless write tools are enabled, output redaction, richer pull-request generation, automatic failure clustering, and updated agent engines. The release notes pair those controls with a scheduled firewall-report workflow for spotting unexpected network destinations."
    },
    {
      source: "Anthropic",
      date: "2026-10-18",
      displayDate: "October 18, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "AI Governance", "Public Benefit", "Workforce"],
      title: "Anthropic Commits Equity to a Public Benefit Fund",
      url: "https://www.anthropic.com/news/public-benefit-fund",
      summary: "Subject to stockholder approval, Anthropic says 5% of its shares will go to a wholly owned public-benefit fund, with the board able to add 2% for each 50% increase in company value above a baseline. The company names nonprofit grants, direct distributions, and labor-market disruption as possible uses, while saying the fund's governance and valuation milestones will be disclosed later."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
