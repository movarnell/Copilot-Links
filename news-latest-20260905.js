(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-09-04",
      displayDate: "September 4, 2026",
      category: "models",
      companies: ["GitHub Copilot", "OpenAI"],
      title: "GPT-6 Astra Is Generally Available in GitHub Copilot",
      url: "https://github.blog/changelog/2026-09-04-gpt-6-astra-is-generally-available-in-github-copilot/",
      summary:
        "GitHub added OpenAI's GPT-6 Astra to Copilot for Pro+, Max, Business, and Enterprise users across VS Code, Visual Studio, Copilot CLI, GitHub coding agent, the Copilot app, github.com, GitHub Mobile, JetBrains, Xcode, and Eclipse. GitHub frames Astra as a long-horizon autonomous coding model that plans, validates, batches diagnosis with verification, and is governed by Business and Enterprise model policy defaults.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-04",
      displayDate: "September 4, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "VS Code"],
      title: "Copilot Weekly Roundup Adds Model Choice, Content Protections, and VS Code 1.136 Agent Workflows",
      url: "https://github.blog/changelog/2026-09-04-github-copilot-weekly-releases-august-31/",
      summary:
        "GitHub's weekly Copilot roundup collects the newest practical workflow changes: Claude Fable 5.1, Gemini 3.8 Flash, content exclusions in the Copilot app and CLI, the generally available Copilot harness in JetBrains, and VS Code 1.136 features for Agent Merge, multi-root agent sessions, chat backgrounds, and session hierarchies.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-09-02",
      displayDate: "September 2, 2026",
      category: "vscode",
      companies: ["VS Code", "GitHub Copilot"],
      title: "VS Code 1.136 Adds Agent Merge and Multi-Root Agent Sessions",
      url: "https://code.visualstudio.com/updates/v1_136",
      summary:
        "VS Code 1.136 focuses on getting pull requests merge-ready with agents and managing related agent work across complex workspaces. The release introduces Agent Merge preview for review feedback, failed checks, and merge conflicts; experimental multi-root workspaces for Copilot and Claude agent sessions; chat backgrounds; and hierarchical chat sessions that surface which related chats need attention.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-03",
      displayDate: "September 3, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Google"],
      title: "Gemini 3.8 Flash Is Rolling Out in GitHub Copilot",
      url: "https://github.blog/changelog/2026-09-03-gemini-3-8-flash-is-now-available-in-github-copilot/",
      summary:
        "GitHub says Gemini 3.8 Flash is rolling out to Copilot Pro, Pro+, Max, Business, and Enterprise users across VS Code, Visual Studio, Copilot CLI, Copilot cloud agent, the Copilot app, JetBrains, Xcode, and Eclipse. GitHub's pricing table lists introductory Copilot rates through December 31, 2026 at $0.75 per 1M input tokens, $0.075 per 1M cached input tokens, and $3.75 per 1M output tokens.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
