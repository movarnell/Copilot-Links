(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-08-19",
      displayDate: "August 19, 2026",
      category: "developer-tools",
      companies: ["VS Code", "GitHub Copilot", "Agent Host Protocol", "Copilot SDK"],
      title: "VS Code 1.134 Adds Agent Host, Side-by-Side Chats, and Prompt Timeline",
      url: "https://code.visualstudio.com/updates/v1_134",
      summary:
        "Microsoft's VS Code 1.134 release says the Agent Host Protocol-based agent host can connect the same agent session from multiple VS Code windows, with the Copilot harness powered by the Copilot SDK to align behavior with Copilot CLI, the standalone Copilot app, and other Copilot products. The release also adds side-by-side chat and subagent chat layouts, a prompt timeline for long agent sessions, full-conversation find in chat surfaces, and integrated-browser default handling for local HTML files, making the Agents window a more reviewable workspace for multi-session agent work.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-08-18",
      displayDate: "August 18, 2026",
      category: "developer-tools",
      companies: ["GitHub Copilot", "JetBrains", "MCP", "OpenTelemetry", "Enterprise"],
      title: "GitHub Copilot for JetBrains Adds Enterprise Managed Settings",
      url: "https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains/",
      summary:
        "GitHub's Copilot changelog says JetBrains IDEs now support enterprise managed settings for plugin governance, MCP server allowlists and denylists, OpenTelemetry routing, and organization-controlled permission modes. The governance update matters for teams standardizing agent workflows because administrators can centrally restrict marketplaces, require or disable plugins, route telemetry to approved collectors, and prevent Copilot agents in JetBrains from using Bypass Approvals or Autopilot when enterprise policy requires tighter human review.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
