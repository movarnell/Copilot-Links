(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-29",
      displayDate: "June 29, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Anthropic", "Claude Opus", "AI Credits"],
      title: "Claude Opus 4.8 Fast Mode Enters Preview for GitHub Copilot",
      url: "https://github.blog/changelog/2026-06-29-claude-opus-4-8-fast-mode-is-now-in-preview-for-github-copilot/",
      summary:
        "GitHub added Claude Opus 4.8 fast mode as a Copilot preview for users who need Opus-class reasoning with lower latency. GitHub's supported-model docs also list Claude Opus 4.6 fast mode as retired on June 29 with Claude Opus 4.8 fast mode as the suggested replacement, so teams using fast Opus sessions should recheck model picker availability, policy settings, and AI-credit impact before updating defaults.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
