(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-11-25",
      displayDate: "November 25, 2026",
      category: "copilot",
      companies: ["GitHub", "GitHub Copilot", "Copilot code review"],
      title: "GitHub Will Default Unset Copilot Code-Review Billing to Organizations",
      url: "https://github.blog/changelog/2026-11-25-copilot-code-review-billing-will-default-to-the-organization/",
      summary: "Starting December 30, GitHub will bill licensed members' Copilot code reviews to the repository-owning organization when a Copilot Business or Enterprise account has not saved a billing choice. Existing Member or Organization selections remain in effect, and accounts without AI Credits paid usage, with a billing lock, or without a billable customer will stay on Member; administrators who want the current member-entitlement behavior must explicitly select Member before the change, because organization billing can increase spending."
    },
    {
      source: "TechCrunch",
      date: "2026-11-25",
      displayDate: "November 25, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "ChatGPT", "ChatGPT Work"],
      title: "OpenAI Starts Limited Chat and Work Merger With One Shared Usage Meter",
      url: "https://techcrunch.com/2026/11/25/openai-says-heavy-chatgpt-users-may-hit-limits-sooner-as-it-merges-chat-and-work/",
      summary: "TechCrunch reports that OpenAI has begun rolling out a unified Chat and Work experience to a small group of ChatGPT Pro subscribers, with both surfaces drawing from one shared usage meter. OpenAI says most users should not see more frequent resets, but a small fraction of the heaviest users may hit limits sooner; Instant remains outside the shared allowance, and broader December rollout details and exact allowances are still limited."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
