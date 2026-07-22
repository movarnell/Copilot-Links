(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-07-21",
      displayDate: "July 21, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Google", "Gemini", "Agent workflows"],
      title: "Gemini 3.6 Flash Rolls Out in GitHub Copilot",
      url: "https://github.blog/changelog/2026-07-21-gemini-3-6-flash-is-now-available-in-github-copilot/",
      summary:
        "Google's Gemini 3.6 Flash is rolling out in GitHub Copilot for Pro, Pro+, Max, Business, and Enterprise users. GitHub says the model targets web and app development, coding, and longer-horizon agentic tasks, with configurable reasoning effort, parallel tool use, gradual availability, provider-list usage billing, and a Business/Enterprise admin policy gate.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-20",
      displayDate: "July 20, 2026",
      category: "tools",
      companies: ["GitHub Copilot", "AI credits", "Billing", "Enterprise management"],
      title: "Copilot Users Can See AI Credits Used Per Billing Cycle",
      url: "https://github.blog/changelog/2026-07-20-copilot-users-can-now-see-ai-credits-used-per-billing-cycle/",
      summary:
        "Copilot Business and Copilot Enterprise users can now see billing-cycle AI credit usage on their GitHub Copilot usage page even when an individual budget has not been set. If an admin does set a budget, the page shows credits used against that budgeted amount, making usage-based billing easier to monitor.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
