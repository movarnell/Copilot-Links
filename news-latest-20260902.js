(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-09-01",
      displayDate: "September 1, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Code Review"],
      title: "GitHub Copilot Code Review Can Now Approve Pull Requests",
      url: "https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests/",
      summary:
        "GitHub says Copilot code review can now leave approving reviews on pull requests when it finds no blocking issues, while existing repository rules and required-review policies still control whether a PR can merge. For enterprise workflows, this makes Copilot's review signal more explicit but keeps human governance, branch protection, and billing visibility important.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-01",
      displayDate: "September 1, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Anthropic"],
      title: "Claude Fable 5.1 Is Now Available in GitHub Copilot",
      url: "https://github.blog/changelog/2026-09-01-claude-fable-5-1-generally-available-in-github-copilot/",
      summary:
        "GitHub added Claude Fable 5.1 to Copilot's selectable model lineup for long-horizon autonomous coding and knowledge-work tasks. The current GitHub Docs pricing table lists it as a GA Anthropic powerful model at $10.00 per 1M input tokens, $0.25 per 1M cached input tokens, $12.50 per 1M cache-write tokens, and $50.00 per 1M output tokens; GitHub also notes that Fable 5.1 requires data retention by default, with zero data retention available only for certain eligible enterprise customers.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
