(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-11-18",
      displayDate: "November 18, 2026",
      category: "ai-workflows",
      companies: ["GitHub CLI", "Agents", "Pull requests"],
      title: "GitHub CLI Can Wait for Pull Request Events Instead of Polling",
      url: "https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli/",
      summary: "GitHub CLI 2.105.0 adds gh event listen so agents and scripts can wait for pull request reviews, state or head changes, conflicts, and check-suite updates instead of repeatedly polling. The command is a preview, requires GitHub Event Streams preview access through the current waitlist, and may change, so keep production automation behind explicit version checks and fallback handling."
    },
    {
      source: "GitHub",
      date: "2026-11-18",
      displayDate: "November 18, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "MCP", "Connectors"],
      title: "Copilot Adds Eight GitHub-Verified MCP Connectors",
      url: "https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot/",
      summary: "Copilot can now connect to Box, Buildkite, Calendly, ClickUp, Mixpanel, Supabase, Webflow, and Wix through GitHub-verified MCP servers across the Copilot app, CLI, VS Code, and github.com. The connectors are a public preview; Business and Enterprise administrators may need to enable Editor preview features, update MCP allowlists, and approve access in the connected service."
    },
    {
      source: "GitHub",
      date: "2026-11-18",
      displayDate: "November 18, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Google", "Models"],
      title: "Gemini 4 Neon Arrives in GitHub Copilot",
      url: "https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot/",
      summary: "Gemini 4 Neon is generally available for agentic coding, multistep tool use, and knowledge work on Copilot Pro+, Max, Business, and Enterprise across major Copilot clients, with gradual rollout and administrator model-policy controls. Usage is billed at $3 per million input tokens, $0.15 cached input, and $15 output; Google's quality, speed, benchmark, and reduced-fabrication comparisons are vendor-reported and still require task-specific validation."
    },
    {
      source: "GitHub",
      date: "2026-11-18",
      displayDate: "November 18, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "Agent Plugins", "Teams"],
      title: "Copilot Team Maintainers Can Set Default Agent Plugins",
      url: "https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team/",
      summary: "Copilot Business and Enterprise team maintainers or organization owners can set approved Agent Plugins as optional defaults for direct team members in VS Code, the Copilot app, and Copilot CLI. Child teams do not inherit the defaults, members can disable them where policy allows, and organization or enterprise policy continues to override team choices."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
