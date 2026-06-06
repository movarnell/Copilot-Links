(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-05",
      displayDate: "June 5, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "VS Code", "Copilot CLI", "Enterprise management", "Plugins"],
      title: "GitHub Adds Enterprise-Managed Plugins for VS Code in Public Preview",
      url: "https://github.blog/changelog/2026-06-05-enterprise-managed-plugins-in-vs-code-in-public-preview/",
      summary:
        "GitHub said enterprise-managed plugins are now in public preview for Visual Studio Code, extending the Copilot CLI managed-plugin capability into the editor. Enterprise administrators can define plugin marketplaces and auto-installed plugins in enterprise client settings, with VS Code and Copilot CLI applying those standards for licensed Copilot Business and Enterprise users. For teams adopting agents, this is a governance milestone: custom agents, skills, hooks, MCP configuration, onboarding defaults, and allowed marketplaces can be distributed centrally instead of relying on each developer to configure them by hand.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-05",
      displayDate: "June 5, 2026",
      category: "new-models",
      companies: ["GitHub", "GitHub Copilot", "OpenAI", "GPT-5.2", "GPT-5.2-Codex", "Model governance"],
      title: "GitHub Deprecates GPT-5.2 and GPT-5.2-Codex Across Most Copilot Surfaces",
      url: "https://github.blog/changelog/2026-06-05-gpt-5-2-and-gpt-5-2-codex-deprecated/",
      summary:
        "GitHub deprecated GPT-5.2 and GPT-5.2-Codex across most Copilot experiences, including Copilot Chat, inline edits, Ask mode, agent mode, and completions. GitHub lists GPT-5.5 as the suggested alternative for GPT-5.2 and GPT-5.3-Codex as the suggested alternative for GPT-5.2-Codex, while noting that GPT-5.2 remains available for Copilot code review. The practical action is to stop recommending GPT-5.2 models for new workflows, update saved prompts and model policies, and verify that enterprise admins have enabled the replacement models where needed.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-06-05",
      displayDate: "June 5, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Visual Studio Code", "Agents window", "Integrated browser", "WSL"],
      title: "VS Code 1.124 Adds WSL Agent Connections and Browser Toolbar Controls",
      url: "https://code.visualstudio.com/updates/v1_124",
      summary:
        "The June 5 VS Code 1.124 iteration notes add WSL connection support in the Agents window and customization for the integrated browser toolbar, letting users show or hide toolbar actions from the context menu. These are incremental updates, but they matter for agent workflows because they tighten two practical surfaces: where local agents can connect and how developers keep the browser validation area focused. The current official VS Code release notes remain fresher than the matching YouTube feature-video coverage, so the page should keep using 1.124 as the primary watchlist until a newer official walkthrough appears.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
