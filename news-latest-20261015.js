(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-10-15",
      displayDate: "October 15, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "GitHub Code Security", "CodeQL"],
      title: "GitHub Makes Agentic Code-Scanning Autofix Generally Available",
      url: "https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability/",
      summary: "GitHub's agentic autofix is now generally available for Code Security and GitHub Advanced Security customers on Enterprise Cloud. When assigned an alert, Copilot explores relevant files, proposes and iterates on a fix, reruns CodeQL to verify that the alert closes, and opens a draft pull request for review; access requires enterprise policy enablement and a Copilot billing method, and runs consume Code Security AI Credits plus GitHub Actions minutes."
    },
    {
      source: "GitHub",
      date: "2026-10-14",
      displayDate: "October 14, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "HydraFusion", "Multi-Model Orchestration"],
      title: "GitHub Updates HydraFusion and Adds a Max Option",
      url: "https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/",
      summary: "GitHub's research-preview HydraFusion now draws from Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol, and GPT-6 Luna, varies reasoning effort by workflow stage, and adds a judge-and-repair step to Cascade plus parallel, tool-backed critics. A new HydraFusion Max option applies higher reasoning effort for demanding work; both options are available in VS Code, the Copilot app, and Copilot CLI for Pro, Pro+, Business, and Enterprise plans with preview features and applicable model policies enabled."
    },
    {
      source: "OpenAI",
      date: "2026-10-14",
      displayDate: "October 14, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Third Moment Research", "Codex", "Daybreak"],
      title: "Third Moment Runs 10,000 Agents for Multi-Day Research",
      url: "https://openai.com/index/third-moment-research/",
      summary: "OpenAI profiles Third Moment Research's system for running 10,000 agents concurrently in 36-to-48-hour sessions with the Codex harness, subagents, context compaction, and an outer loop that retries, terminates, or escalates unfinished work to a human. The team also uses Daybreak to test sandbox-escape risk and reports that a Codex-discovered caching and memory-packing change cut a backtest from about three hours to three-to-five minutes; the performance figures are customer-reported."
    },
    {
      source: "GitHub",
      date: "2026-10-13",
      displayDate: "October 13, 2026",
      category: "new-models",
      companies: ["GitHub", "GitHub Copilot", "Google", "Gemini 4 Argon"],
      title: "Gemini 4 Argon Reaches GitHub Copilot",
      url: "https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot/",
      summary: "Google's Gemini 4 Argon is generally available in GitHub Copilot for Pro+, Max, Business, and Enterprise users, with gradual rollout across VS Code, Visual Studio, Copilot CLI, the coding agent, the Copilot app, JetBrains IDEs, Xcode, and Eclipse. GitHub positions it for complex coding, agentic, and reasoning tasks; usage is billed at provider list pricing, and Business or Enterprise administrators can control access through model policy."
    },
    {
      source: "GitHub",
      date: "2026-10-13",
      displayDate: "October 13, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Enterprise Governance", "Managed Settings"],
      title: "Copilot Enterprise Settings Can Now Fail Closed at Startup",
      url: "https://github.blog/changelog/2026-10-13-enterprise-managed-settings-enforcement-updates/",
      summary: "Enterprise administrators can require Copilot CLI, VS Code, and the GitHub Copilot app to fetch current managed settings at startup instead of accepting cached policy. When forceRemoteSettingsRefresh is active and current policy cannot be confirmed, the client fails closed; GitHub is also introducing minimum client-version enforcement for governance settings, beginning with the sandbox key."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
