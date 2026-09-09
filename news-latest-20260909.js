(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-09-08",
      displayDate: "September 8, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "JetBrains"],
      title: "GitHub Copilot for JetBrains Adds Enterprise-Managed Sandboxes",
      url: "https://github.blog/changelog/2026-09-08-enterprise-managed-sandbox-in-copilot-for-jetbrains/",
      summary:
        "GitHub's JetBrains update adds public-preview enterprise-managed sandbox policies for Copilot, letting administrators centrally control sandbox enablement, filesystem and network access, proxy settings, developer-tool access, and macOS Keychain access. The same release also adds cross-file next-edit jumps, global project context in chat, enterprise policy diagnostics, `/ide` links from Copilot CLI sessions into JetBrains IDE context, subagent model selection, and reliability fixes across MCP servers and agent sessions.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();