(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-09-30",
      displayDate: "September 30, 2026",
      category: "ai-general-news",
      companies: ["GitHub Copilot", "HydraFusion", "Visual Studio Code"],
      title: "HydraFusion Expands Multi-Model Workflows to VS Code and the Copilot App",
      url: "https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app/",
      summary:
        "GitHub expanded the HydraFusion research preview beyond Copilot CLI to VS Code 1.140 or later and the GitHub Copilot app. HydraFusion can choose a single-model, cascade, or cross-family critique workflow, now shows clearer real-time progress, and remains an administrator-controlled preview for Business and Enterprise users.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-09-30",
      displayDate: "September 30, 2026",
      category: "ai-general-news",
      companies: ["Visual Studio Code", "GitHub Copilot", "Agent Host"],
      title: "VS Code 1.140 Expands Agent Orchestration, Remote Delegation, and Enterprise Controls",
      url: "https://code.visualstudio.com/updates/v1_140",
      summary:
        "VS Code 1.140 makes the Copilot harness consistent with other Copilot products and adds experimental multi-folder sessions, remote-agent-host delegation, shared ignored folders across worktrees, and higher orchestration capacity. It also introduces HydraFusion, portable MCP configuration, managed Auto-tier defaults, and clearer enterprise minimum-version enforcement.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-29",
      displayDate: "September 29, 2026",
      category: "new-models",
      companies: ["GitHub Copilot", "OpenAI", "GPT-6.1 Sol"],
      title: "GPT-6.1 Sol Brings More Efficient Agentic Coding to GitHub Copilot",
      url: "https://github.blog/changelog/2026-09-29-gpt-6-1-sol-in-github-copilot/",
      summary:
        "GitHub is gradually rolling out GPT-6.1 Sol for agentic coding and terminal workflows across major Copilot clients. GitHub says early testing completed tasks with fewer tokens and steps than earlier GPT-6 and GPT-5.6 models; usage follows provider-list pricing, and Business or Enterprise administrators retain model-policy control.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
