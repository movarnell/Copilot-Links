(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-06-26",
      displayDate: "June 26, 2026",
      category: "models",
      companies: ["OpenAI", "GPT-5.6", "Codex", "AI agents"],
      title: "OpenAI Previews GPT-5.6 Sol, Terra, and Luna for Coding and Agent Work",
      url: "https://openai.com/index/previewing-gpt-5-6-sol/",
      summary:
        "OpenAI introduced the GPT-5.6 family with Sol as its flagship, Terra as a balanced lower-cost option, and Luna as the fastest and least expensive tier. The limited preview initially reaches selected partners through the API and Codex, with broader ChatGPT, Codex, and API availability planned later. OpenAI also adds a max reasoning effort, an ultra multi-agent mode, stronger prompt caching, and a layered safety system, making this a significant model and workflow preview even though it is not yet a general GitHub Copilot option.",
    },
    {
      source: "Associated Press",
      date: "2026-06-26",
      displayDate: "June 26, 2026",
      category: "industry",
      companies: ["OpenAI", "Anthropic", "AI safety", "Cybersecurity"],
      title: "OpenAI and Anthropic Limit New Frontier Models During U.S. Cybersecurity Review",
      url: "https://apnews.com/article/065d5398baac7f16c8265c2cb8ba2baa",
      summary:
        "The Associated Press reports that OpenAI and Anthropic are limiting access to their newest high-capability models while the U.S. government reviews cybersecurity risks and approves early customers. The restrictions affect how quickly developers and enterprises can adopt frontier capabilities, and they reinforce a practical workflow rule: distinguish a model announcement from broad availability, then verify product, plan, policy, and data-handling requirements before changing production defaults.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
