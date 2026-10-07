(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-10-06",
      displayDate: "October 6, 2026",
      category: "github-copilot",
      companies: ["GitHub", "GitHub Copilot", "VS Code", "Enterprise"],
      title: "GitHub Starts Restoring IDE Agent Activity in Copilot Usage Metrics",
      url: "https://github.blog/changelog/2026-10-06-update-your-ide-to-restore-agent-activity-in-copilot-usage-metrics/",
      summary: "GitHub says Copilot SDK-based agent sessions were undercounted or misattributed in usage metrics. VS Code 1.139 and later restores attribution now, while fixes for Visual Studio, JetBrains, Eclipse, and Xcode are still rolling out; missing history cannot be backfilled, earlier Copilot CLI activity may be inflated, and billing was not affected."
    },
    {
      source: "GitHub Engineering",
      date: "2026-10-06",
      displayDate: "October 6, 2026",
      category: "ai-workflows",
      companies: ["GitHub", "Git", "AI Agents", "Developer Infrastructure"],
      title: "GitHub Rebuilds Git Infrastructure for Agent-Scale Development",
      url: "https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/",
      summary: "GitHub says developers and agents made 7.38 billion commits in September, more than five times the year-earlier total. Its new architecture separates durable storage from compute, minimizes coordination on the write path, and moves maintenance off the serving path; internal benchmarks have reached up to 35 times higher write throughput."
    },
    {
      source: "Anthropic",
      date: "2026-10-06",
      displayDate: "October 6, 2026",
      category: "ai-security",
      companies: ["Anthropic", "Claude", "Cybersecurity", "AI Safety"],
      title: "Anthropic Expands Vetted Access to Claude Cyber Capabilities",
      url: "https://www.anthropic.com/news/cyber-verification-program",
      summary: "Anthropic expanded its Cyber Verification Program into three vetted access tiers for defensive security, authorized red teaming, and specialized safety-system testing. The program offers qualifying teams reduced blocking and access to Claude Opus 5.5, Sonnet 5.5, and Mythos 5.1 while retaining verification, monitoring, and tier-specific safeguards."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
