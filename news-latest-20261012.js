(function () {
  const latestUpdates = [
    {
      source: "Sakana AI",
      date: "2026-10-12",
      displayDate: "October 12, 2026",
      category: "ai-workflows",
      companies: ["Sakana AI", "UC Berkeley", "Multi-Agent Systems", "AI Research"],
      title: "MASS Trains One Model from Its Own Multi-Agent Workflows",
      url: "https://sakana.ai/mass/",
      summary: "Sakana AI and UC Berkeley introduced Multi-Agent Self-Supervision, where one shared 27B open-weights model acts as task solver, workflow optimizer, and evaluator, then trains on the strongest team trajectories. After two cycles, Sakana reports 1.2-1.6x the base model's score per output token on four research benchmarks, while warning that shared evaluator blind spots can reinforce flawed results and highlighting the need to preserve effective ways to detect errors and intervene."
    },
    {
      source: "Microsoft",
      date: "2026-10-12",
      displayDate: "October 12, 2026",
      category: "ai-workflows",
      companies: ["Microsoft", "Microsoft 365 Copilot", "AI Agents", "Human-in-the-Loop"],
      title: "Microsoft Details Human-in-the-Loop HR Agent Workflows",
      url: "https://news.microsoft.com/source/asia/2026/10/12/microsofts-ai-transformation-of-hr-from-efficiency-to-operational-impact/",
      summary: "Microsoft describes internal Learning, Workforce Insights, and People agents that help employees find development paths, organizational signals, and expertise. Its operating boundary is explicit: agents surface information and patterns, while people retain consequential interpretation, career decisions, organizational design, judgment, and accountability."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
