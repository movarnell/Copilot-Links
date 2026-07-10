(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-07-09",
      displayDate: "July 9, 2026",
      category: "models",
      companies: ["OpenAI", "GPT-5.6", "ChatGPT Work", "Codex"],
      title: "OpenAI Releases GPT-5.6 and ChatGPT Work",
      url: "https://www.axios.com/2026/07/09/ai-openai-gpt-release",
      summary:
        "Axios reports that OpenAI released GPT-5.6 and a new ChatGPT Work product after a delayed broader rollout. For AI workflow planning, the important shift is that OpenAI is positioning Codex-style agent work beyond software engineering and into daily professional tasks.",
    },
    {
      source: "GitHub Docs",
      date: "2026-07-10",
      displayDate: "July 10, 2026",
      category: "models",
      companies: ["GitHub Copilot", "OpenAI", "GPT-5.6", "VS Code"],
      title: "GitHub Copilot Docs List GPT-5.6 Luna, Sol, and Terra as GA Models",
      url: "https://docs.github.com/en/copilot/reference/ai-models/supported-models",
      summary:
        "GitHub's supported-models page now lists GPT-5.6 Luna, Sol, and Terra as GA Copilot models, with VS Code 1.128 minimum guidance and extended context/reasoning availability. Teams should verify plan policy and AI-credit pricing before routing default agent work to the new models.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
