(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-09-17",
      displayDate: "September 17, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Copilot Enterprise", "Impact dashboard", "Usage metrics"],
      title: "Copilot Impact Dashboard Adds Feature-Level Adoption Signals",
      url: "https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement/",
      summary:
        "GitHub's Copilot impact dashboard and aggregate usage APIs now show 28-day engagement across code completion, agent edit, active and passive code review, cloud agent, Copilot CLI, and the Copilot app. The new adoption-phase population field separates the full rolling population from users active on a particular day, giving enterprise teams a better basis for targeted enablement; counts are aggregate, users can appear under multiple features, and missing data can be null rather than zero.",
    },
    {
      source: "GitHub",
      date: "2026-09-17",
      displayDate: "September 17, 2026",
      category: "workflows",
      companies: ["GitHub Copilot", "Copilot CLI", "Agent skills", "MCP"],
      title: "Copilot Metrics Now Track CLI Skills, Custom Agents, MCP, Commands, and Plugins",
      url: "https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api/",
      summary:
        "GitHub added Copilot CLI customization metrics for skills, custom agents, MCP servers, slash commands, and plugins to enterprise and organization reports. Teams can compare up to five most-used items in each category and the number of distinct customizations over time, but should read the fields carefully: customer-defined names are privacy-grouped, MCP interaction counts represent connection attempts rather than tool calls, and plugin skill invocations already appear in skill totals.",
    },
    {
      source: "GitHub",
      date: "2026-09-16",
      displayDate: "September 16, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Copilot Enterprise", "AI credits", "Usage-based billing"],
      title: "Copilot Budget Requests Restore Credit Access Without Leaving Settings",
      url: "https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available/",
      summary:
        "GitHub Copilot Business and Enterprise members who exhaust their AI credits can now request more budget at the point of use. The request routes to the organization or enterprise that pays for the budget, where owners and billing managers can approve, adjust, or deny it; approval immediately restores access to credit-consuming Copilot features. The GA flow applies to usage-based billing, so teams should pair it with clear approval criteria and spend monitoring rather than treating restoration as automatic.",
    },
    {
      source: "OpenAI Economic Research",
      date: "2026-09-16",
      displayDate: "September 16, 2026",
      category: "workflows",
      companies: ["OpenAI", "ChatGPT", "Work design", "AI adoption"],
      title: "OpenAI Study Finds Some Cross-Occupation AI Tasks Become Recurring Workflows",
      url: "https://openai.com/index/unlocking-new-ways-of-working/",
      summary:
        "OpenAI analyzed more than 1.5 million work-related ChatGPT messages and found evidence that some tasks outside a worker's usual occupation become recurring parts of the job. For unfamiliar domains, workers used shorter prompts but supplied more examples and context and asked for verification more often, a pattern consistent with borrowing expertise rather than requesting a tutorial. Among workers observed consistently from April through July, previously used cross-occupation tasks rose from 13.1% to 25.9% of occupation-specific AI activity; the design lesson is to support context-rich, verifiable cross-functional work.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
