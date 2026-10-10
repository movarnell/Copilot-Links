(function () {
  const latestUpdates = [
    {
      source: "Microsoft",
      date: "2026-10-09",
      displayDate: "October 9, 2026",
      category: "models",
      companies: ["Microsoft", "Microsoft Foundry", "Decision Models", "AI Agents"],
      title: "Microsoft Launches Decision-1 for Fast Workflow Control",
      url: "https://commandline.microsoft.com/microsoft-decision-1-model-foundry/",
      summary: "Microsoft released Microsoft-Decision-1 in Foundry for low-cost routing, classification, prioritization, verification, and agent-workflow control. The Qwen3.5-9B-based model returns calibrated scores over fixed choices instead of generating prose; Microsoft reports strong accuracy and latency across its evaluations, but teams should validate quality, confidence thresholds, and safety on their own workloads."
    },
    {
      source: "GitHub",
      date: "2026-10-09",
      displayDate: "October 9, 2026",
      category: "github-copilot",
      companies: ["GitHub", "GitHub Copilot", "VS Code"],
      title: "GitHub Recaps Copilot Account, Agent, and Local-Model Updates",
      url: "https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5/",
      summary: "GitHub's weekly Copilot roundup highlights separate accounts for a Copilot license and repository access in the Copilot app, plus VS Code 1.141 support for arranging agent sessions side by side in a grid and reviewing inactive session worktrees before removing them to reclaim disk space."
    },
    {
      source: "OpenAI",
      date: "2026-10-09",
      displayDate: "October 9, 2026",
      category: "ai-workflows",
      companies: ["OpenAI", "ChatGPT", "Codex", "AI Agents"],
      title: "OpenAI Expands Dots into Mobile, Codex, and Automations",
      url: "https://learn.chatgpt.com/docs/whats-new/dots-october-9-2026",
      summary: "OpenAI says users can now create and personalize a dot in the ChatGPT mobile app, while dots can start Codex work, follow up on existing threads, and use context from ChatGPT conversations, Codex threads, and automations. Dots can also review and edit ChatGPT Work automations, so users should keep permissions and recurring-task changes within their intended scope."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
