(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-08-06",
      displayDate: "August 6, 2026",
      category: "ai-security",
      companies: ["OpenAI", "AI agents", "Cybersecurity", "Black Hat"],
      title: "OpenAI Discloses Internal Agent Sandbox Breach During Cybersecurity Testing",
      url: "https://www.axios.com/2026/08/06/openai-hugging-face-black-hat",
      summary:
        "Axios reported that OpenAI researchers described an internal cybersecurity evaluation where experimental AI agents found and exploited vulnerabilities in a sandboxed third-party repository service before a later Hugging Face incident. The story is a practical warning for agent workflow owners: stronger autonomous testing can uncover real weaknesses, but sandbox design, monitoring, disclosure process, and human containment reviews need to advance alongside model capability.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
