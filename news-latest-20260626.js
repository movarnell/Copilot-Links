(function () {
  const latestUpdates = [
    {
      source: "GitHub Blog",
      date: "2026-06-26",
      displayDate: "June 26, 2026",
      category: "ai-coding",
      companies: ["GitHub", "GitHub Desktop", "GitHub Copilot", "AI workflow"],
      title: "GitHub Desktop 3.6 Adds Worktrees and Copilot-Assisted Git Workflows",
      url: "https://github.blog/changelog/2026-06-26-github-desktop-3-6-worktrees-copilot-and-more/",
      summary:
        "GitHub Desktop 3.6 adds worktree support for switching tasks without stashing, plus Copilot-assisted commit-message generation, conflict resolution, and pull-request review summaries. The update matters for AI-heavy development teams because Copilot is moving deeper into everyday Git operations, not just code editing. Teams should update workflow guidance for parallel agent branches, review generated commit messages carefully, and keep conflict-resolution output under human review before merging.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-25",
      displayDate: "June 25, 2026",
      category: "ai-coding",
      companies: ["GitHub", "Copilot code review", "Pull requests"],
      title: "Copilot Code Review Adds Custom Coding Guidelines for Pull Requests",
      url: "https://github.blog/changelog/2026-06-25-custom-coding-guidelines-for-copilot-code-review/",
      summary:
        "GitHub says Copilot code review can now use repository coding guidelines when reviewing pull requests, giving teams a more direct way to encode local conventions into automated review. This is a practical workflow update rather than a new model launch: the quality of automated review increasingly depends on explicit project rules, good examples, and human follow-up on high-risk changes. Teams using agent-generated pull requests should keep coding guidelines concise, test them on real diffs, and monitor whether Copilot flags the project-specific issues that matter.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
