(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-07-15",
      displayDate: "July 15, 2026",
      category: "tools",
      companies: ["VS Code", "GitHub Copilot", "Agent Host Protocol", "Codex"],
      title: "VS Code 1.129 Adds Dedicated Agent Host Sessions and Agent Review Tools",
      url: "https://code.visualstudio.com/updates/v1_129",
      summary:
        "VS Code 1.129 ships a dedicated agent host for Copilot, Claude, and Codex sessions, a new editor panel in the Agents window for reviewing generated files and diffs, command execution from chat with a `!` prefix, BYOK models for the Copilot agent harness, and prompt-file-to-skill migration. The release makes agent sessions more isolated, reusable across windows, and easier to review before changes land.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
