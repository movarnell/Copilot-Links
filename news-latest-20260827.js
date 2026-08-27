(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-08-26",
      displayDate: "August 26, 2026",
      category: "ai-tools",
      companies: ["Microsoft", "VS Code", "GitHub Copilot", "Anthropic"],
      title: "VS Code 1.135 Adds External Agent Sessions, Rubber Duck Review, and Detailed Chat Usage",
      url: "https://code.visualstudio.com/updates/v1_135",
      summary:
        "The VS Code 1.135 release notes say the stable editor now helps developers continue recent Copilot or Claude agent sessions from other applications, use an experimental Rubber Duck command for a second-model review of agent work, and inspect per-model chat token usage. The update also makes the single-pane Agents window layout the desktop default and keeps local-agent-harness sandboxing as an opt-in feature while VS Code focuses on the Agent Host and Copilot harness.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-08-26",
      displayDate: "August 26, 2026",
      category: "ai-tools",
      companies: ["Microsoft", "VS Code", "GitHub Copilot", "Anthropic", "Agent Host Protocol"],
      title: "VS Code Details Agent Host Architecture for Persistent, Portable Agent Sessions",
      url: "https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture",
      summary:
        "The VS Code team explains that Agent Host is a self-contained process for owning agent sessions, while the open Agent Host Protocol lets multiple clients monitor, approve, cancel, and contribute tools to the same long-running session. The post says VS Code's host can run locally or remotely, keeps sessions synchronized across editor windows and the Agents window, and provides a shared foundation for Copilot and Claude harnesses without forcing every harness into the same runtime model.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
