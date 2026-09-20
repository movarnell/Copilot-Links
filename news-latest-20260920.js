(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-09-20",
      displayDate: "September 20, 2026",
      category: "workflows",
      companies: ["AI agents", "OpenAI", "Meta", "Apple", "Privacy"],
      title: "Personal Agents Move From Chat Into Everyday Tasks",
      url: "https://www.axios.com/2026/09/20/ai-assistant-openai-meta-muse-instinct-grok-apple",
      summary:
        "Axios surveys the growing race to build persistent personal agents that can shop, book travel, manage calendars, make calls, and navigate the web. As these assistants accumulate durable knowledge about relationships, schedules, and spending, permission boundaries, privacy, and ownership of agent memory become core workflow-design questions. Treat personal context as sensitive data, minimize connected access, and keep explicit approval gates around consequential actions.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
