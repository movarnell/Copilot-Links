(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-11-23",
      displayDate: "November 23, 2026",
      category: "ai-general-news",
      companies: ["Amazon", "Alphabet", "Microsoft", "Meta", "Oracle", "AI infrastructure"],
      title: "Hyperscaler AI Spending Forecasts Stop Climbing",
      url: "https://www.axios.com/2026/11/23/ai-spending-slowdown",
      summary: "Axios reports that Wall Street analysts did not raise capital-spending forecasts after the latest earnings from Amazon, Alphabet, Microsoft, Meta, and Oracle, interrupting the repeated upward revisions that accompanied the AI data-center boom. The report says investors increasingly want evidence of profitable AI services beyond infrastructure sales; this is a shift in analyst forecasts and market expectations, not evidence that absolute AI spending has fallen."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
