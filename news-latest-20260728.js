(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-07-27",
      displayDate: "July 27, 2026",
      category: "ai-agents",
      companies: ["GitHub Copilot", "JetBrains", "Claude", "MCP"],
      title: "GitHub Copilot for JetBrains Adds OpenTelemetry, Model Controls, and Claude Agent Tools",
      url: "https://github.blog/changelog/2026-07-27-github-copilot-for-jetbrains-adds-improvved-opentelemetry-configuration-and-model-management/",
      summary:
        "GitHub says its JetBrains Copilot plugin now supports OpenTelemetry export for agent workflows, default token limits for BYOK and custom endpoints, built-in model enablement controls, MCP servers and custom agents in Claude agent flows, and Copilot CLI session additions such as forks, a /rubber-duck command, and harness todo lists.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-27",
      displayDate: "July 27, 2026",
      category: "ai-agents",
      companies: ["GitHub Copilot", "Copilot app"],
      title: "GitHub Adds a Dedicated Access Policy for the Copilot App",
      url: "https://github.blog/changelog/2026-07-27-manage-github-copilot-app-access-with-a-dedicated-policy/",
      summary:
        "GitHub says the Copilot app now has a separate enterprise and organization access policy instead of depending on the Copilot CLI policy. The default remains enabled everywhere, but admins can disable the app across an enterprise or let organizations decide, while the app also joins Copilot CLI and VS Code as a supported client for enterprise-managed settings.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-27",
      displayDate: "July 27, 2026",
      category: "ai-agents",
      companies: ["GitHub Copilot", "Copilot cloud agent", "Copilot app"],
      title: "Enterprise Managed Settings Now Cover the Copilot App and Copilot Cloud Agent",
      url: "https://github.blog/changelog/2026-07-27-enterprise-managed-settings-now-apply-to-the-github-copilot-app/",
      summary:
        "GitHub says enterprise managed settings now govern the Copilot app and Copilot cloud agent alongside Copilot CLI and VS Code. Enterprise owners can use managed-settings.json to control plugin and marketplace availability, approval-prompt bypass behavior in interactive clients, and default Auto model selection, with cloud-agent tasks observing approved plugins and marketplaces.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
