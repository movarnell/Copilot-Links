(function () {
  const latestUpdates = [
    {
      source: "GitHub Blog",
      date: "2026-07-22",
      displayDate: "July 22, 2026",
      category: "analysis",
      companies: ["GitHub Copilot", "AI Credits", "BYOK", "Agent workflows"],
      title: "GitHub Explains Copilot Versus Raw API Access Under AI Credits",
      url: "https://github.blog/ai-and-ml/github-copilot/copilot-vs-raw-api-access-what-are-you-actually-paying-for/",
      summary:
        "GitHub compares Copilot subscriptions with direct model API access now that Copilot bills many chat and agentic workflows through AI Credits. The article frames Copilot as a development harness around models, covering editor, repository, terminal, pull request, issue, policy, usage visibility, BYOK, and model-selection workflows rather than only token access.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
