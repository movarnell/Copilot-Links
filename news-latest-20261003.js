(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-10-02",
      displayDate: "October 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub Copilot", "Code Review", "APIs"],
      title: "Copilot Code Review Adds API Requests and Balanced Default Effort",
      url: "https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level/",
      summary: "GitHub Copilot code review can now be requested through supported REST and GraphQL APIs, with an optional effort level for each request. Balanced is now the default review effort for new and existing repositories and organizations unless Lite was explicitly selected; the API and effort controls are generally available to Copilot Pro, Pro+, Max, Business, and Enterprise."
    },
    {
      source: "GitHub Changelog",
      date: "2026-10-02",
      displayDate: "October 2, 2026",
      category: "new-models",
      companies: ["GitHub Copilot", "Gemini", "Kimi", "Anthropic"],
      title: "GitHub Copilot Deprecates Four Older Models",
      url: "https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated/",
      summary: "GitHub deprecated Gemini 3.5 Flash, Gemini 3.6 Flash, Kimi K2.7 Code, and Claude Opus 4.7 across Copilot experiences. GitHub recommends Gemini 3.8 Flash, Kimi K3, and Claude Opus 5.5 as replacements; Enterprise administrators may need to enable the replacement models through model policies."
    },
    {
      source: "GitHub",
      date: "2026-10-02",
      displayDate: "October 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "AI Workflows"],
      title: "GitHub Highlights Three Skills for Agentic Development",
      url: "https://github.blog/ai-and-ml/ai-is-rewriting-the-developer-career-ladder-heres-how-to-stand-out/",
      summary: "GitHub recommends clearly directing agents with context and outcomes, critically reviewing AI output, and keeping human judgment focused on customer needs, architecture, accessibility, and success measures. It suggests second-model critique where useful while warning that AI speed does not replace developer review."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
