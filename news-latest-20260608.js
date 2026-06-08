(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot app", "Canvases", "Agentic development", "Pull requests"],
      title: "GitHub Expands the Copilot App Preview With Shared Canvases",
      url: "https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/",
      summary:
        "GitHub expanded the technical preview of the GitHub Copilot app, adding canvases that can collect agent sessions, files, planning notes, pull requests, and follow-up work in one shared workspace. The update matters for VS Code and Copilot users because agentic development is moving from single chat turns into coordinated work surfaces where sessions, validation, review, and handoff all need to be tracked. For teams, the practical guidance is to treat Copilot app work like any other development workflow: isolate changes, keep context auditable, review generated diffs, and avoid letting canvas organization replace normal pull request discipline.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
