(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-07-30",
      displayDate: "July 30, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Visual Studio Code", "Copilot CLI", "Claude", "OpenAI Codex"],
      title: "GitHub Recaps July Copilot Releases for VS Code",
      url: "https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-code-july-2026-releases/",
      summary:
        "GitHub's July VS Code Copilot roundup covers VS Code 1.127 through 1.131, including Agents window review improvements, worktree-based Copilot, Claude, and Codex sessions, subagent visibility, multi-chat sessions, Copilot vision, Business and Enterprise AI-credit usage visibility, BYOK models in the Agents window, terminal command execution with the ! prefix, prompt-to-skill migration, and agent-editable Markdown workflows.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-29",
      displayDate: "July 29, 2026",
      category: "ai-agents",
      companies: ["GitHub Copilot", "MCP", "Agent Skills"],
      title: "Copilot Code Review Skills and MCP Support Reach GA",
      url: "https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available/",
      summary:
        "GitHub says Copilot code review support for agent skills and MCP servers is now generally available for Copilot Pro, Pro+, Business, and Enterprise users. Teams can attach repository or organization standards through SKILL.md files and read-only MCP context, and Copilot review comments now attribute when skills or MCP context contributed to a finding.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-29",
      displayDate: "July 29, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Copilot Business", "Copilot Enterprise"],
      title: "Copilot Business and Enterprise Add Default GA Model Enablement",
      url: "https://github.blog/changelog/2026-07-29-default-model-enablement-for-copilot-business-and-enterprise/",
      summary:
        "GitHub introduced a default availability policy for generally available Copilot models on Business and Enterprise plans. The policy becomes effective August 26, 2026, preserves explicit per-model choices, and excludes open-weight models such as Kimi K2.7 and models outside GitHub's data-retention agreement such as Fable 5, giving admins a new governance checkpoint before future GA models turn on automatically.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-28",
      displayDate: "July 28, 2026",
      category: "models",
      companies: ["GitHub Copilot", "xAI", "Grok 4.5"],
      title: "Grok 4.5 Rolls Out in GitHub Copilot",
      url: "https://github.blog/changelog/2026-07-28-grok-4-5-is-now-available-in-github-copilot/",
      summary:
        "GitHub says xAI's Grok 4.5 is rolling out to Copilot Pro, Pro+, Max, Business, and Enterprise users across VS Code, Visual Studio, Copilot CLI, Copilot cloud agent, and the Copilot app. GitHub positions it for fast agentic coding and complex multi-step workflows with up to a 500,000-token context window, image inputs, configurable reasoning effort, and provider-list-price billing.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
