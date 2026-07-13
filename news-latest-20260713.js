(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-07-12",
      displayDate: "July 12, 2026",
      category: "workflows",
      companies: ["OpenAI", "GPT-5.6", "ChatGPT Work", "Codex"],
      title: "Axios Breaks Down How to Choose Among GPT-5.6 Models",
      url: "https://www.axios.com/2026/07/12/openai-chatgpt-work-luna-terra-sol",
      summary:
        "Axios' follow-up on the GPT-5.6 rollout focuses on the workflow decision teams now face: matching Luna, Terra, or Sol to the right task, reasoning level, and budget. The practical takeaway is to test the new ChatGPT Work and Codex model choices on known tasks before standardizing a default for longer multi-step work.",
    },
    {
      source: "Financial Times",
      date: "2026-07-11",
      displayDate: "July 11, 2026",
      category: "workflows",
      companies: ["Open Source", "AI Coding", "Maintainers"],
      title: "Financial Times Examines Who Cleans Up After AI-Generated Code",
      url: "https://www.ft.com/content/cec8df9e-b43b-4cd1-8feb-c07e804e8d33",
      summary:
        "The Financial Times looks at the maintenance burden created when AI-assisted coding floods open-source projects with low-quality contributions. The useful workflow lesson is to pair coding agents with stricter contribution review, provenance checks, and maintainer time budgeting instead of treating generated patches as free throughput.",
    },
    {
      source: "Business Insider",
      date: "2026-07-11",
      displayDate: "July 11, 2026",
      category: "workflows",
      companies: ["OpenAI", "Codex", "Vibe Coding"],
      title: "Business Insider Shows Codex Building a Small Mac Utility in Minutes",
      url: "https://www.businessinsider.com/openai-codex-niche-macbook-idea-five-minutes-vide-coding-2026-7",
      summary:
        "Business Insider's hands-on Codex example shows a reporter prompting a small Mac clipboard utility into existence in minutes. It is a useful reminder that the highest-value Codex workflows are often narrow personal tools with clear inputs, bounded scope, and immediate manual verification.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
