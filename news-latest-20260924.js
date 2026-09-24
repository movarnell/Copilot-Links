(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-09-23",
      displayDate: "September 23, 2026",
      category: "vscode",
      companies: ["Visual Studio Code", "Agent Host", "Dev Containers"],
      title: "VS Code 1.139 Extends Agent Dev Containers to Remote Projects",
      url: "https://code.visualstudio.com/updates/v1_139",
      summary:
        "VS Code 1.139 extends Dev Container agent sessions to SSH, Tunnel, and WSL projects, speeds up large session lists, adds compact views and in-place renaming, and previews single- or multiple-chat presentation within a session. Microsoft reports roughly 12x faster first listing and 4x faster refresh in a 645-session development benchmark.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-23",
      displayDate: "September 23, 2026",
      category: "github-copilot",
      companies: ["GitHub Copilot", "Code review", "Enterprise governance"],
      title: "Copilot Code Review Adds Personal Automation and Enterprise Effort Defaults",
      url: "https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews/",
      summary:
        "GitHub made dedicated Copilot code-review settings generally available across every Copilot plan, including automatic review for new pull requests, draft pull requests, and new pushes plus personal Lite or Balanced effort defaults. Enterprise administrators can set an inherited default effort for organization-owned repositories while allowing organization and repository overrides.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-23",
      displayDate: "September 23, 2026",
      category: "ai-security",
      companies: ["GitHub Copilot", "Local sandboxing", "Agent permissions"],
      title: "GitHub Copilot App Adds Per-Project Local Sandboxing in Public Preview",
      url: "https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app/",
      summary:
        "The GitHub Copilot app can now limit local agent access to files, networks, and Git or GitHub CLI credentials on a per-project basis. The preview is off by default, applies to new or restarted local sessions, fails closed when the operating system cannot enforce the policy, and remains separate from cloud, remote-host, and Copilot CLI sandbox settings.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-22",
      displayDate: "September 22, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "OpenTelemetry", "Enterprise observability"],
      title: "GitHub Copilot App Adds Enterprise-Managed OpenTelemetry for Agent Monitoring",
      url: "https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app",
      summary:
        "GitHub now lets enterprises export Copilot app agent traces through managed OpenTelemetry settings, including model requests and tool use. Prompt and response content is excluded by default, giving teams a centralized way to investigate unexpected behavior and monitor agent workflows without automatically exporting conversation content.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-22",
      displayDate: "September 22, 2026",
      category: "github-copilot",
      companies: ["GitHub Copilot", "JetBrains", "Codex", "MCP"],
      title: "Copilot for JetBrains Adds Assisted Approvals, Codex Planning, and Persistent MCP Controls",
      url: "https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains",
      summary:
        "Copilot for JetBrains 1.18.0 adds assisted approvals for low-risk tool calls, rewinding of earlier prompts and file changes, organization skills and instructions, Codex plan review, and persistent per-tool MCP controls. The release strengthens both human checkpoints and reusable enterprise guidance in agent sessions.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-22",
      displayDate: "September 22, 2026",
      category: "ai-models",
      companies: ["GitHub Copilot", "Anthropic", "Claude Opus 5.5"],
      title: "Claude Opus 5.5 Arrives in GitHub Copilot for Long-Running Agent Work",
      url: "https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot/",
      summary:
        "GitHub is gradually rolling out Claude Opus 5.5 across eligible Copilot plans and supported clients for agentic coding, long-running tasks, and knowledge work. GitHub says early testing found results comparable to Opus 5 with fewer steps and tokens plus quick recovery from multistep errors; usage follows provider-list pricing and enterprise model-policy controls.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-09-22",
      displayDate: "September 22, 2026",
      category: "ai-models",
      companies: ["GitHub Copilot", "OpenAI", "GPT-6 Sol", "GPT-6 Luna"],
      title: "GPT-6 Sol and GPT-6 Luna Expand Copilot's Agentic Coding Options",
      url: "https://github.blog/changelog/2026-09-22-openais-gpt-6-sol-and-gpt-6-luna-now-available",
      summary:
        "GitHub is gradually adding GPT-6 Sol as a balanced model for interactive and agentic coding with multistep validation, and GPT-6 Luna as the GPT-6 family's lightweight, lowest-cost option for smaller, faster tasks. Availability varies by Copilot plan, client, and enterprise model policy, and usage is token-billed.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
