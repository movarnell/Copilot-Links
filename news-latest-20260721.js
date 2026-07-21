(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-07-20",
      displayDate: "July 20, 2026",
      category: "tools",
      companies: ["GitHub", "GitHub Copilot", "AI credits", "Enterprise management"],
      title: "GitHub Adds AI Credit Pools to Cost Center Billing UI",
      url: "https://github.blog/changelog/2026-07-20-ai-credit-pools-for-cost-centers-in-the-billing-ui/",
      summary:
        "GitHub Enterprise Cloud customers on Copilot Business and Copilot Enterprise can now manage cost-center AI credit pools directly in the billing UI. The pool limit is calculated from assigned Copilot licenses, and admins can decide whether usage stops at the included-credit limit or continues as additional spend when overages are allowed.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-20",
      displayDate: "July 20, 2026",
      category: "tools",
      companies: ["GitHub", "CodeQL", "Copilot Autofix", "AI-assisted detection"],
      title: "GitHub Code Quality Reaches General Availability",
      url: "https://github.blog/changelog/2026-07-20-github-code-quality-is-now-generally-available/",
      summary:
        "GitHub Code Quality is now generally available on GitHub Enterprise Cloud and GitHub Team, pairing CodeQL deterministic analysis with AI-assisted detection for maintainability and reliability issues in pull requests. The GA release adds organization dashboards, coverage metrics, ruleset quality gates, management APIs, and Copilot Autofix suggestions for review before merge.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
