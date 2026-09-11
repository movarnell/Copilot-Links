(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-09-10",
      displayDate: "September 10, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Microsoft", "MAI-Code-1-Flash", "MAI-Code-1.1-Flash"],
      title: "GitHub Deprecates MAI-Code-1-Flash Across Copilot",
      url: "https://github.blog/changelog/2026-09-10-mai-code-1-flash-deprecated/",
      summary:
        "GitHub deprecated MAI-Code-1-Flash across Copilot Chat, inline edits, ask and agent modes, and code completions on September 10. GitHub lists MAI-Code-1.1-Flash as the suggested replacement and tells Copilot Enterprise administrators to verify that the alternative model is enabled through model policies before depending on it in VS Code or github.com. For model guidance, the practical action is to remove MAI-Code-1-Flash from saved workflows and keep deprecation checks close to enterprise model-policy reviews.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-09",
      displayDate: "September 9, 2026",
      category: "copilot",
      companies: ["GitHub Copilot", "Enterprise management", "Agent Host", "VS Code", "Copilot CLI"],
      title: "GitHub Adds Enterprise-Managed Permissions for Agent Operations",
      url: "https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/",
      summary:
        "GitHub made enterprise managed permissions generally available for Copilot agent operations in the Copilot app, Copilot CLI, and Visual Studio Code sessions that use Agent Host. Administrators can centrally mark shell commands, file reads and edits, and network domains as blocked, approval-required, or allowed without letting local user or workspace settings weaken those restrictions. For teams adopting agents, this is a major governance update because permission prompts, saved approvals, and team-specific policy now become managed controls instead of individual developer habits.",
    },
    {
      source: "Visual Studio Code",
      date: "2026-09-09",
      displayDate: "September 9, 2026",
      category: "copilot",
      companies: ["Visual Studio Code", "GitHub Copilot", "Agent Host", "Automations", "Voice Mode"],
      title: "VS Code 1.137 Adds Agent Automations, Voice Mode, and GitHub Context",
      url: "https://code.visualstudio.com/updates/v1_137",
      summary:
        "Microsoft released VS Code 1.137 with preview Automations for scheduled recurring agent tasks, experimental Voice Mode for talking with an agent and redirecting it while it works, and GitHub issue and pull request context inside chat and the Agents window. The release also lets users continue a quick chat by attaching a workspace, queues messages between busy agent sessions, and documents the Copilot-powered Agent Host as the shared session layer for VS Code, Copilot CLI, the Copilot app, and other Copilot products. For workflow planning, this makes recurring agent work, voice steering, and GitHub context first-class VS Code surfaces.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
