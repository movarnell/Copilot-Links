(function () {
  const latestUpdates = [
    {
      source: "Associated Press",
      date: "2026-09-21",
      displayDate: "September 21, 2026",
      category: "research",
      companies: ["Gates Foundation", "Anthropic", "Google", "OpenAI", "Language data"],
      title: "AI Coalition Targets Better Language Data for Three Billion People",
      url: "https://apnews.com/article/aefb021bede3b02c83890f65cd540fd0",
      summary:
        "The Associated Press reports that the Gates Foundation has convened a 60-member coalition, including Anthropic, Google, and the OpenAI Foundation, to coordinate language-data work intended to expand useful AI access to more than three billion people over five years. The effort highlights a practical model-quality constraint: systems cannot serve communities well when training and evaluation data omit their languages and local contexts.",
    },
    {
      source: "Associated Press",
      date: "2026-09-21",
      displayDate: "September 21, 2026",
      category: "workflows",
      companies: ["AI safety", "United States", "China", "Incident response"],
      title: "U.S. and China Discuss an AI Incident-Notification Mechanism",
      url: "https://apnews.com/article/d08e58524de21511dcaba51f43faad95",
      summary:
        "Ahead of expected talks between the U.S. and Chinese leaders, the Associated Press reports that officials discussed an AI dialogue and a notification mechanism for incidents that could affect national security. The proposal is not yet an operating standard, but it reinforces a useful workflow principle for high-risk AI systems: define escalation paths, share material incident signals quickly, and keep safety coordination distinct from competitive model development.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
