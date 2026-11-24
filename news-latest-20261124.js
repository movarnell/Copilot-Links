(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-11-24",
      displayDate: "November 24, 2026",
      category: "ai-security",
      companies: ["Anthropic", "OpenAI", "AI safety"],
      title: "Employees Raise Concerns About Releasing More Powerful Frontier Models",
      url: "https://www.axios.com/2026/11/24/anthropic-openai-unreleased-ai-safety-risks",
      summary: "Axios reports, based on more than two dozen unnamed sources, that some Anthropic and OpenAI employees believe unreleased models are becoming difficult to control safely, prompting internal debate about delaying releases or limiting access. This is a sourced report about unreleased systems rather than an independently demonstrated capability claim; views inside the labs differ, and Axios says there is no technical consensus."
    },
    {
      source: "Anthropic",
      date: "2026-11-23",
      displayDate: "November 23, 2026",
      category: "ai-workflows",
      companies: ["Anthropic", "Claude", "GitHub", "code review"],
      title: "Claude Ship Automates Policy-Governed Pull Request Review and Fixes",
      url: "https://claude.com/resources/articles/introducing-claude-ship",
      summary: "Anthropic introduced Claude Ship for GitHub repositories on Claude Team and Enterprise, combining generally available Code Review with beta PR Steward and Claude Approvals to review pull requests, address feedback or failing checks, and apply repository-defined approval policies. Anthropic recommends starting approvals in observe-only mode and warns that the system can miss bugs or security issues; usage can add token costs, and some regulated or customer-managed-encryption configurations are excluded."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
