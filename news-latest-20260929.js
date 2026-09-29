(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-09-28",
      displayDate: "September 28, 2026",
      category: "new-models",
      companies: ["GitHub Copilot", "Anthropic", "Claude Sonnet 5.5"],
      title: "Claude Sonnet 5.5 Brings Faster Everyday Coding to GitHub Copilot",
      url: "https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot/",
      summary:
        "GitHub made Claude Sonnet 5.5 generally available across Copilot clients for well-scoped feature work and bug fixes. GitHub says early testing matched Sonnet 5 coding quality with fewer steps, tokens, and tool calls plus faster completion; rollout is gradual, usage follows provider-list pricing, and Business or Enterprise administrators retain model-policy control.",
    },
    {
      source: "Microsoft",
      date: "2026-09-25",
      displayDate: "September 25, 2026",
      category: "ai-general-news",
      companies: ["Microsoft Copilot", "GitHub Copilot", "Autopilot", "Microsoft 365"],
      title: "Microsoft Recasts Copilot Around Home, Code, and Persistent Autopilot Agents",
      url: "https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/",
      summary:
        "Microsoft is reorganizing Copilot around Home for conversational and delegated work, Code for sandboxed solution building with GitHub Copilot technology, and Autopilot for persistent cloud-hosted agents with their own identity, memory, workspace, permissions, and governance. Home and Code begin in Frontier, while Autopilot is expanding through private preview.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-25",
      displayDate: "September 25, 2026",
      category: "ai-general-news",
      companies: ["GitHub Copilot", "Slack", "Microsoft Teams"],
      title: "GitHub Copilot Carries More Conversation Context Into Slack and Teams Workflows",
      url: "https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams/",
      summary:
        "The Slack and Teams public preview now carries richer conversation context into GitHub work, checks for similar issues, and links results back to the source discussion. Users can keep a selected model across the conversation, while GitHub also improved long-running-task status and reconnection behavior plus, in Slack, protection against stale sessions acting in an old repository.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-25",
      displayDate: "September 25, 2026",
      category: "ai-general-news",
      companies: ["GitHub Copilot", "Copilot Memory", "Agentic autofix"],
      title: "Agentic Autofix Reuses Repository Security Patterns Through Copilot Memory",
      url: "https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory/",
      summary:
        "GitHub's public-preview agentic autofix can now read enabled Copilot Memory context when resolving security alerts and save fix patterns for reuse. Those repository-specific secure-development patterns can also inform Copilot code review and Copilot cloud agent workflows.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
