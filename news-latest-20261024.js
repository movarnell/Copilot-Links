(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-10-23",
      displayDate: "October 23, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Usage Metrics", "OpenCode", "Claude Code", "Codex"],
      title: "Copilot Metrics Add Model Usage from OpenCode, Claude Code, Codex, and More",
      url: "https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode/",
      summary: "GitHub's Copilot usage metrics API now groups server-side model requests, sessions, tokens, and model-selection modes by client, including OpenCode, Claude Code, Codex, Zed, Copilot CLI, the Copilot app, cloud agent, code review, VS Code, and JetBrains. GitHub says request counts are model calls rather than prompts and client names are best-effort integration identifiers, so use the data for governance and adoption trends rather than exact interaction counts."
    },
    {
      source: "GitHub Changelog",
      date: "2026-10-23",
      displayDate: "October 23, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Microsoft Teams", "Pull Requests"],
      title: "GitHub Copilot in Teams Can Turn Issue Notifications into Pull Requests",
      url: "https://github.blog/changelog/2026-10-23-turn-notifications-into-code-with-github-copilot-in-teams/",
      summary: "The consolidated GitHub app for Microsoft Teams can take an issue notification from a channel, group chat, or private chat, let a user mention @GitHub to investigate and fix it, and create a pull request for team review, testing, and merge. GitHub says the older Teams app will be renamed GitHub (deprecated) and retired November 16, so users should move to the consolidated app."
    },
    {
      source: "OpenAI",
      date: "2026-10-23",
      displayDate: "October 23, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Agents API", "Scheduled Automations", "Agent Workflows"],
      title: "OpenAI Agents API Adds Scheduled Automations",
      url: "https://developers.openai.com/api/docs/guides/agents-api/sessions/automations",
      summary: "OpenAI's Agents API can now schedule a message into an existing session or start a new session on a recurring cron schedule or one-time timestamp. Developers can also give an agent the automations tool so it can create, update, or remove schedules from natural-language requests; applications still need deliberate permissions, monitoring, and failure handling for unattended work."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
