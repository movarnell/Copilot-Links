(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-08-31",
      displayDate: "August 31, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "VS Code"],
      title: "GitHub Copilot in VS Code August Roundup Highlights Agent Sessions, Integrated Browser, and Dictation Updates",
      url: "https://github.blog/changelog/2026-08-31-github-copilot-in-vs-code-august-2026-releases/",
      summary:
        "GitHub's monthly VS Code roundup collects the August 2026 Copilot changes across VS Code 1.132 through 1.135, including grouped agent sessions, /btw side conversations, prompt timeline navigation, Agent Plugins 1.0 installation, external Copilot and Claude session continuation, shared Agent Host connections, Rubber Duck review, transcript search, per-model token usage, integrated-browser element comments, automatic HTML reloads, and dictation cleanup controls.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
