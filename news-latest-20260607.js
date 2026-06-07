(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Agent apps", "Copilot cloud agent", "MCP", "Enterprise tools"],
      title: "GitHub Opens Copilot to Agent Apps From External Tools",
      url: "https://github.blog/changelog/2026-06-02-extend-github-with-agent-apps/",
      summary:
        "GitHub introduced agent apps that let third-party tools plug into Copilot workflows, starting with partners such as Amplitude, PagerDuty, and Sonar. Developers can assign tasks to these agents, mention them in pull request comments, or select them from the Agents screen, while Copilot coordinates the handoff. For teams standardizing agent workflows, this is a signal that Copilot is moving beyond one assistant into a managed agent ecosystem where tool permissions, MCP configuration, review boundaries, and vendor governance need to be reviewed together.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Sandboxes", "Cloud agents", "Security", "Governance"],
      title: "GitHub Previews Cloud and Local Sandboxes for Copilot Agents",
      url: "https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/",
      summary:
        "GitHub put cloud and local sandboxes for Copilot into public preview, giving teams a more explicit way to isolate agent work, control execution boundaries, and inspect generated changes before they reach normal development paths. This matters for Copilot Links because agent adoption is now tied to runtime safety, not just prompt quality. Recommended guidance should keep emphasizing isolated worktrees, reviewed diffs, tool allowlists, and verification steps before trusting background agent output.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot code review", "Pull requests", "Team standards"],
      title: "GitHub Adds Team-Shaping Controls for Copilot Code Review",
      url: "https://github.blog/changelog/2026-06-02-shape-copilot-code-review-around-your-team/",
      summary:
        "GitHub added more ways to shape Copilot code review around a team's expectations, continuing the shift from generic AI comments toward repository- and organization-aware review behavior. The practical takeaway is that Copilot review should be configured like a team process: align instructions with coding standards, decide when AI review is required or optional, monitor suggestion quality, and keep human reviewers responsible for merge decisions.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
