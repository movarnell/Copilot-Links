(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-08-26",
      displayDate: "August 26, 2026",
      category: "ai-tools",
      companies: ["OpenAI", "AI agents", "Hugging Face"],
      title: "OpenAI Reviews Agent Safeguards After Hugging Face Demonstration Incident",
      url: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/",
      summary:
        "OpenAI published a post-incident review after a live demonstration at Hugging Face triggered unintended repository activity, using the case to explain stronger safeguards for agentic systems. The guidance is relevant for Copilot-style workflows because it emphasizes constrained tool permissions, explicit approvals, monitoring, and failure-containment patterns for autonomous or multi-agent development work.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
