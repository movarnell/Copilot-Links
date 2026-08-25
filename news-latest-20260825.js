(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-08-24",
      displayDate: "August 24, 2026",
      category: "ai-models",
      companies: ["OpenAI", "AWS", "Kiro", "Coding Agents"],
      title: "OpenAI Brings the GPT-5.6 Model Family to Kiro's Software Development Agent",
      url: "https://openai.com/index/gpt-5-6-in-kiro/",
      summary:
        "OpenAI says GPT-5.6 Sol, Terra, and Luna are now available in Kiro, AWS's spec-driven software development agent, so teams can route planning, implementation, review, and testing work through the newer OpenAI model family. The announcement highlights Kiro's requirements-and-design workflow, repository and team-standard context, human review checkpoints, and property-based testing, with OpenAI and AWS reporting materially lower task cost for GPT-5.6 Terra on Terminal-Bench 2.1 inside Kiro.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
