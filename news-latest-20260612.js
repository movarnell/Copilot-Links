(function () {
  const latestUpdates = [
    {
      source: "The Wall Street Journal",
      date: "2026-06-12",
      displayDate: "June 12, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Anthropic", "Microsoft", "AI workflows", "Enterprise AI"],
      title: "Enterprise AI Cost Pressure Pushes Teams Toward Model Routing",
      url: "https://www.wsj.com/tech/ai/the-ai-price-war-is-here-piling-pressure-on-openai-and-anthropic-86e1d21b",
      summary:
        "The Wall Street Journal reports that businesses are increasingly routing work across cheaper open and smaller models, then reserving frontier systems from companies such as OpenAI and Anthropic for harder tasks. The enterprise workflow signal is that model choice is becoming a cost-control layer, not just a quality preference: teams are measuring total task cost, using lower-cost models for routine work, and escalating selectively when accuracy or reasoning depth matters. That pressure reinforces the Copilot-model guidance on starting with included or lower-multiplier models before using premium models for high-value planning, review, and agent workflows.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
