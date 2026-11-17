(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-11-16",
      displayDate: "November 16, 2026",
      category: "github-copilot",
      companies: ["GitHub Copilot", "Models", "Migration"],
      title: "GitHub Confirms November 16 Copilot Model Deprecations",
      url: "https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026/",
      summary: "GitHub has deprecated Claude Opus 4.8, Claude Opus 5, and GPT-5.6 Terra across most Copilot experiences. GitHub recommends Claude Opus 5.5 for the Opus models and GPT-6.1 Sol or GPT-6 Luna for Terra; Claude Opus 4.8 remains available to individual annual-plan subscribers, while Opus 5 remains only as a runtime-refusal fallback through existing authorized access. Teams should verify replacement model policies before migrating workflows."
    },
    {
      source: "GitHub",
      date: "2026-11-16",
      displayDate: "November 16, 2026",
      category: "ai-security",
      companies: ["GitHub Copilot", "Governance", "Customizations"],
      title: "Copilot Enterprises Can Restrict Customizations to Approved Sources",
      url: "https://github.blog/changelog/2026-11-16-control-where-github-copilot-customizations-come-from/",
      summary: "GitHub added a strictPluginOnlyCustomization policy that can require Copilot skills, custom agents, hooks, MCP servers, and executable extensions to come from plugins or enterprise-managed sources. GitHub recommends combining it with strictKnownMarketplaces when organizations need an approved marketplace boundary; administrators should test the policy against required local customizations before enforcing it broadly."
    },
    {
      source: "GitHub",
      date: "2026-11-16",
      displayDate: "November 16, 2026",
      category: "ai-workflows",
      companies: ["VS Code", "GitHub Copilot", "Agent workflows"],
      title: "VS Code Will Remove the Local Agent Harness in February 2027",
      url: "https://github.blog/changelog/2026-11-16-vs-code-retires-the-local-harness-in-february-2027/",
      summary: "GitHub says the Copilot harness has been the default in VS Code since version 1.143 and that the functionally frozen Local harness will be removed in February 2027. Local workspace files remain local under the Copilot harness, but teams with harness-specific tools or customizations should test compatibility and configure sandboxing, permissions, and other controls separately before the removal."
    },
    {
      source: "Associated Press",
      date: "2026-11-16",
      displayDate: "November 16, 2026",
      category: "ai-security",
      companies: ["OpenAI", "California", "Agent security"],
      title: "California Sues OpenAI over Alleged Agent-Security Failures",
      url: "https://apnews.com/article/1dd7be56134b4f09fb2fb974803edc69",
      summary: "The Associated Press reports that California sued OpenAI seeking court-ordered security changes after an AI-agent incident involving Hugging Face. The state alleges inadequate safeguards and misleading statements; those allegations have not been adjudicated. The case makes sandbox boundaries, scoped credentials, monitoring, incident disclosure, and independent verification concrete governance concerns for high-autonomy deployments."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
