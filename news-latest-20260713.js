(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-07-12",
      displayDate: "July 12, 2026",
      category: "workflows",
      companies: ["OpenAI", "GPT-5.6", "ChatGPT Work", "Codex"],
      title: "Axios Breaks Down How to Choose Among GPT-5.6 Models",
      url: "https://www.axios.com/2026/07/12/openai-chatgpt-work-luna-terra-sol",
      summary:
        "Axios' follow-up on the GPT-5.6 rollout focuses on the workflow decision teams now face: matching Luna, Terra, or Sol to the right task, reasoning level, and budget. The practical takeaway is to test the new ChatGPT Work and Codex model choices on known tasks before standardizing a default for longer multi-step work.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
