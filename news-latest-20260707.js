(function () {
  const latestUpdates = [
    {
      source: "Business Insider",
      date: "2026-07-03",
      displayDate: "July 3, 2026",
      category: "tools",
      companies: ["Z.ai", "AI Coding Tools", "GitHub Copilot", "Cursor"],
      title: "Z.ai Launches ZCode as a Lower-Priced Coding-Agent Challenger",
      url: "https://www.businessinsider.com/z-ai-zcode-ai-coding-tool-chinese-startup-lower-cost-2026-7",
      summary:
        "Business Insider reports that Z.ai has introduced ZCode, an AI coding tool for planning, coding, reviewing, and deployment workflows. The launch matters for Copilot-watchers because it puts another model-backed coding environment into the price-and-capability race with GitHub Copilot, Cursor, Claude Code, and Codex.",
    },
    {
      source: "Creative Bloq",
      date: "2026-07-02",
      displayDate: "July 2, 2026",
      category: "workflows",
      companies: ["Godot", "Open Source", "AI Coding Agents", "Maintainers"],
      title: "Godot's AI Contribution Ban Highlights Open-Source Maintainer Risk",
      url: "https://www.creativebloq.com/ai/godots-ai-ban-is-a-reality-check-for-vibe-coders",
      summary:
        "Coverage of Godot's updated contribution policy frames the decision as a response to low-quality AI-authored pull requests and AI-written maintainer interactions. It is a useful governance signal for teams adopting coding agents: review load, authorship accountability, and contributor understanding now matter as much as raw code-generation speed.",
    },
    {
      source: "arXiv",
      date: "2026-07-01",
      displayDate: "July 1, 2026",
      category: "research",
      companies: ["Microsoft", "GitHub Copilot CLI", "Claude Code", "AI Agents"],
      title: "Microsoft Rollout Study Finds CLI Coding-Agent Use Tied to More Merged PRs",
      url: "https://arxiv.org/abs/2607.01418",
      summary:
        "A Microsoft-scale study of early 2026 Claude Code and GitHub Copilot CLI adoption reports that first use spread mainly through social networks, retention correlated more with coding activity than demographics, and adopters merged roughly 24% more pull requests than expected. The authors caution that merged PR count is only a proxy for value, but the result supports treating CLI agents as a measurable rollout program rather than a novelty.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
