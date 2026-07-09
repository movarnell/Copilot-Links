(function () {
  const latestUpdates = [
    {
      source: "SpaceXAI",
      date: "2026-07-08",
      displayDate: "July 8, 2026",
      category: "models",
      companies: ["SpaceXAI", "Grok 4.5", "Cursor", "AI Coding Agents"],
      title: "Grok 4.5 Launches for Coding, Agentic Tasks, and Knowledge Work",
      url: "https://x.ai/news/grok-4-5",
      summary:
        "SpaceXAI launched Grok 4.5 as its strongest model for coding, agentic tasks, and knowledge work, with availability in Grok Build, Cursor, and the SpaceXAI API. The company emphasizes long-running software-engineering rollouts, token efficiency, and roughly 80-token-per-second serving, but its benchmark claims remain provider-reported.",
    },
    {
      source: "OpenAI",
      date: "2026-07-08",
      displayDate: "July 8, 2026",
      category: "research",
      companies: ["OpenAI", "SWE-bench Pro", "AI Coding Agents", "Model Evaluation"],
      title: "OpenAI Finds Major Reliability Problems in SWE-bench Pro",
      url: "https://openai.com/index/separating-signal-from-noise-in-coding-evaluations/",
      summary:
        "OpenAI's audit argues that substantial noise in SWE-bench Pro can obscure real differences between coding models and agents. The finding is a practical warning for model selection: benchmark rankings should be paired with task-level evaluation, repository-specific tests, and human review rather than treated as definitive.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
