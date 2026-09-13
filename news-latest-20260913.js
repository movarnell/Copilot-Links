(function () {
  const latestUpdates = [
    {
      source: "The Atlantic",
      date: "2026-09-13",
      displayDate: "September 13, 2026",
      category: "workflows",
      companies: ["AI agents", "Payments", "Prompt injection", "Human approval"],
      title: "Real-World AI Assistants Show Why Consequential Actions Need Guardrails",
      url: "https://www.theatlantic.com/technology/2026/09/instinct-ai-personal-assistant-credit-card/688607/",
      summary:
        "The Atlantic tested and examined Instinct, a personal agent that can connect to payment cards, email, Slack, Google Workspace, and password-management tools. Reported failures included an unintended flight cancellation, an unapproved reservation with a cancellation fee, account lockouts from repeated requests, and risks from private-data leakage or prompt injection. The practical workflow lesson is to narrow permissions, use disposable or tightly limited credentials for evaluation, and require explicit approval before purchases, cancellations, messages, or other hard-to-reverse actions.",
    },
    {
      source: "Associated Press",
      date: "2026-09-12",
      displayDate: "September 12, 2026",
      category: "research",
      companies: ["Anthropic", "OpenAI", "AI safety", "Independent evaluation"],
      title: "Amodei Urges Slower AI Growth; Altman Backs Embedded Safety Evaluation",
      url: "https://apnews.com/article/anthropic-ai-dario-amodei-d59552edcb27892d8ee4d98a48397706",
      summary:
        "AP reports that Anthropic CEO Dario Amodei called for frontier model development to slow enough for alignment and safety measures to catch up, while OpenAI CEO Sam Altman supported a proposal for embedded outside evaluators. The broader proposals include continuous independent access to lab safety practices, shared capability and safety standards, and international coordination. For teams deploying agents now, the operational takeaway is concrete: keep powerful tool access behind monitoring, sandboxing, staged evaluation, and human-controlled release gates rather than treating benchmark gains as deployment readiness.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
