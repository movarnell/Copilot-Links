(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-09-22",
      displayDate: "September 22, 2026",
      category: "ai-security",
      companies: ["Palo Alto Networks", "Anthropic", "OpenAI", "Multi-model agents"],
      title: "Palo Alto Networks Pairs Multiple AI Models for Continuous Security Testing",
      url: "https://www.axios.com/2026/09/22/palo-alto-networks-cyber-defense-ai-agents",
      summary:
        "Axios reports that Palo Alto Networks is launching a subscription service that combines gated frontier models, including Anthropic Mythos 5 and OpenAI GPT-5.6-Cyber, with open-weight models to find vulnerabilities and recommend fixes. In the company's testing, no single model caught more than 40% of the flaws in a complex environment, supporting a multi-model, human-supervised security workflow rather than reliance on one agent.",
    },
    {
      source: "Axios",
      date: "2026-09-22",
      displayDate: "September 22, 2026",
      category: "ai-research",
      companies: ["Anthropic", "OpenAI", "AI safety", "Recursive self-improvement"],
      title: "AI Development Is More Automated, but Recursive Self-Improvement Is Not Here Yet",
      url: "https://www.axios.com/2026/09/22/ai-rsi-meaning-recursive-self-improvement-doom",
      summary:
        "Axios examines growing automation in model development at Anthropic and OpenAI while separating that evidence from claims that recursive self-improvement already exists. A new analysis cited by Axios says current feedback loops have not met RSI benchmarks, making human control, independent evaluation, and careful monitoring more useful guidance than assuming fully self-improving systems are already operating.",
    },
    {
      source: "Axios",
      date: "2026-09-21",
      displayDate: "September 21, 2026",
      category: "ai-workflows",
      companies: ["Amazon", "Meta", "Muse", "Agent permissions"],
      title: "Amazon Blocks Meta's Muse Agent from Shopping on Its Platform",
      url: "https://www.axios.com/2026/09/21/amazon-meta-muse-ai-agentic-shopping",
      summary:
        "Axios reports that Amazon blocked Meta's Muse agent from browsing and buying on Amazon, citing unauthorized account access, scraping, transactions, customer security, and user-experience concerns. The dispute shows that agentic workflows depend on platform permission, interoperability, and clear control of customer data and consequential actions—not only on model capability.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
