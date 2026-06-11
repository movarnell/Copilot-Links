(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-10",
      displayDate: "June 10, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot Chat", "Copilot cloud agent", "Agent sessions"],
      title: "Copilot Chat Can Search and Explain Active Agent Sessions",
      url: "https://github.blog/changelog/2026-06-10-copilot-chat-now-sees-your-agent-sessions/",
      summary:
        "GitHub improved the handoff between Copilot Chat and Copilot cloud agent on the web. Copilot Chat can now reflect the status of in-progress sessions that were started from chat, pull-request creation, or deep repository research, and it can answer follow-up questions after a session completes. Two new tools bring agent logs into chat and search past sessions by topic, title, or recency. For teams using cloud agents, this makes the review loop more traceable because developers can ask what changed, what was validated, and why without leaving the chat thread.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
