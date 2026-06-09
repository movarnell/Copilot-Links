(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-09",
      displayDate: "June 9, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "OpenAI Codex", "Claude", "CodeQL", "Secret scanning"],
      title: "GitHub Extends Security Validation to Third-Party Coding Agents",
      url: "https://github.blog/changelog/2026-06-09-security-validation-for-third-party-coding-agents/",
      summary:
        "GitHub made security validation generally available for third-party coding agents that work directly in repositories, including Claude and OpenAI Codex. GitHub says agent-generated code now receives the same automatic validation used for Copilot cloud agent: CodeQL analysis for new vulnerabilities, dependency checks against the GitHub Advisory Database, and secret scanning for exposed tokens or keys. For teams adopting coding agents, the practical guidance is to keep these validations enabled and treat security feedback as part of the agent handoff before a pull request is finalized.",
    },
    {
      source: "Anthropic",
      date: "2026-06-09",
      displayDate: "June 9, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "Claude Fable 5", "Claude Mythos 5", "AI safety", "Cybersecurity"],
      title: "Anthropic Launches Claude Fable 5 and Restricted Mythos 5 Access",
      url: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      summary:
        "Anthropic launched Claude Fable 5 as its first generally available Mythos-class model, while reserving Claude Mythos 5 for vetted cyberdefenders, infrastructure providers, and later selected biology researchers. The release uses conservative classifiers that route some high-risk cybersecurity, biology, chemistry, and distillation requests to Claude Opus 4.8 rather than letting the newest model answer directly. For teams comparing frontier models, the practical signal is that the most capable systems are moving toward tiered access, stronger safety routing, and explicit data-retention tradeoffs for abuse monitoring.",
    },
    {
      source: "The Verge",
      date: "2026-06-09",
      displayDate: "June 9, 2026",
      category: "ai-general-news",
      companies: ["Apple", "Apple Intelligence", "Siri", "Google Gemini", "Private Cloud Compute"],
      title: "Apple Frames Its WWDC AI Push Around Siri, Privacy, and Ecosystem Integration",
      url: "https://www.theverge.com/ai-artificial-intelligence/946780/apples-ai-promises-are-finally-almost-sort-of-here",
      summary:
        "The Verge reported that Apple's WWDC AI announcements center on a rebuilt Siri and deeper Apple Intelligence features rather than a standalone chatbot strategy. The coverage highlights Apple's privacy posture, including on-device processing and Private Cloud Compute for agentic tasks, while noting that the company is still catching up to rivals on many user-facing AI capabilities. For AI-tool users, the comparison matters because Apple is positioning assistant automation as a system-level feature where privacy, device context, and ecosystem control are the differentiators.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
