(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-06-10",
      displayDate: "June 10, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot CLI", "Security review", "Application security"],
      title: "GitHub Adds a Dedicated Security Review Command to Copilot CLI",
      url: "https://github.blog/changelog/2026-06-10-dedicated-security-review-command-now-available-in-copilot-cli/",
      summary:
        "GitHub added an experimental `/security-review` slash command to Copilot CLI, letting developers run an AI-driven review of local code changes before committing. The command returns high-confidence findings, severity and confidence signals, and suggested fixes for common vulnerability classes such as injection, cross-site scripting, insecure data handling, path traversal, and weak cryptography. For teams using coding agents, this is a practical new pre-commit checkpoint that complements CodeQL, Dependabot, secret scanning, and human review rather than replacing them.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-06-10",
      displayDate: "June 10, 2026",
      category: "ai-general-news",
      companies: ["Microsoft", "Visual Studio Code", "GitHub Copilot", "Agents window", "Autopilot"],
      title: "VS Code 1.124 Improves Agent Sessions, Autopilot, and Browser Workflows",
      url: "https://code.visualstudio.com/updates/v1_124#agents-window-preview",
      summary:
        "Microsoft released Visual Studio Code 1.124 with a stronger focus on Copilot agent workflows: background send for new sessions, keyboard navigation across sessions, restore-on-reload behavior, single-file diff options in the Agents window, and improved integrated browser history and toolbar controls. The release also enables Autopilot by default where allowed and adds an advanced Autopilot option that uses a small utility model to decide whether an agent should keep iterating or stop. For users adopting agents in VS Code, the update makes multi-session work more manageable while raising the importance of organization-level permission and plugin policies.",
    },
    {
      source: "Business Insider",
      date: "2026-06-10",
      displayDate: "June 10, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Anthropic", "GitHub Copilot", "AI credits", "Enterprise AI"],
      title: "Enterprise AI Adoption Shifts Toward Token Budgets and ROI Discipline",
      url: "https://www.businessinsider.com/ai-companies-raising-prices-internal-token-limits-openai-anthropic-ipo-2026-6",
      summary:
        "Business Insider reported that more companies are adding tighter controls around AI token usage as providers shift away from flat all-you-can-use pricing toward metered consumption. The coverage highlights internal usage caps, budget reviews, and model-tier decisions across enterprises that previously encouraged broad experimentation. For Copilot and AI-agent users, the practical guidance is to pair model recommendations with budgets, usage alerts, cheaper default models, and explicit escalation rules before agentic workflows become expensive background processes.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
