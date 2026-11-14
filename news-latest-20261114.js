(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-11-13",
      displayDate: "November 13, 2026",
      category: "ai-agents",
      companies: ["OpenAI", "ChatGPT"],
      title: "OpenAI Introduces ChatGPT Wallet for User-Approved Agent Purchases",
      url: "https://openai.com/index/introducing-chatgpt-wallet/",
      summary: "OpenAI introduced ChatGPT Wallet for purchases completed by dots after the user reviews the merchant, items, total, and card and approves each transaction with a security check. Payment networks issue a substitute credential so the agent and business do not receive the user's actual card details. The gradual initial rollout is limited to eligible U.S. ChatGPT Pro subscribers age 18 or older using dots and eligible U.S.-issued cards; some sites may not support agent purchases, and users should still confirm the merchant completed the order."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
