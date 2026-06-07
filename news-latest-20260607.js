(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-06-04",
      displayDate: "June 4, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "ChatGPT", "Memory", "Dreaming", "Personalization"],
      title: "OpenAI Launches a More Capable ChatGPT Memory Architecture",
      url: "https://openai.com/index/chatgpt-memory-dreaming/",
      summary:
        "OpenAI said it is launching a more capable and compute-efficient ChatGPT memory architecture built on its background dreaming process. The update makes synthesized memories visible through a reviewable memory summary, lets users add or update what ChatGPT knows about them, and is intended to keep preferences, goals, and ongoing-work context fresher over time. For AI-tool users, the practical signal is that personalization is becoming a core product surface rather than a one-off saved-notes feature, which makes memory review, stale-context cleanup, and privacy controls more important.",
    },
    {
      source: "Fortune",
      date: "2026-06-05",
      displayDate: "June 5, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Anthropic", "Google DeepMind", "Microsoft AI", "Biosecurity"],
      title: "AI Leaders Urge Congress to Require Synthetic DNA Screening",
      url: "https://fortune.com/2026/06/05/openai-anthropic-microsoft-ceos-congress-bioweapon-safeguards/",
      summary:
        "Fortune reported that leaders from OpenAI, Anthropic, Google DeepMind, Microsoft AI, and other organizations signed a public letter asking Congress to make screening and recordkeeping mandatory for synthetic DNA and RNA orders. The letter argues that AI progress could erode the knowledge barriers that have historically limited biological-weapons development, while order screening is a relatively well-understood supply-chain safeguard. For AI governance, this is a notable cross-company alignment around regulating downstream biosecurity chokepoints rather than only regulating model access.",
    },
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
