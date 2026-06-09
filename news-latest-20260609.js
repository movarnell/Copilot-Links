(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-09",
      displayDate: "June 9, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "OpenAI Codex", "Claude", "CodeQL", "Secret scanning"],
      title: "GitHub Extends Security Validation to Third-Party Coding Agents",
      url: "https://github.blog/changelog/2026-06-09-security-validation-for-third-party-coding-agents/",
      summary:
        "GitHub made security validation generally available for third-party coding agents that work directly in repositories, including Claude and OpenAI Codex. GitHub says agent-generated code now receives the same automatic validation used for Copilot cloud agent: CodeQL analysis for new vulnerabilities, dependency checks against the GitHub Advisory Database, and secret scanning for exposed tokens or keys. For teams adopting coding agents, the practical guidance is to keep these validations enabled and treat security feedback as part of the agent handoff before a pull request is finalized.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
