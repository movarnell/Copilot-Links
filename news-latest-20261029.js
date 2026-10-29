(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-10-28",
      displayDate: "October 28, 2026",
      category: "ai-general-news",
      companies: ["GitHub Copilot", "Copilot Fusion", "Visual Studio Code"],
      title: "GitHub Copilot Fusion Is Generally Available",
      url: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/",
      summary: "GitHub made Copilot Fusion generally available across all Copilot plans in VS Code, the Copilot app, Copilot CLI, and JetBrains; High and Max effort are offered on Pro+, Max, Business, and Enterprise. Fusion routes and can orchestrate multiple policy-enabled models, with each model leg billed at its standard rate and a temporary paid-plan discount. GitHub's benchmark and efficiency figures are company-reported rather than independent validation."
    },
    {
      source: "GitHub",
      date: "2026-10-28",
      displayDate: "October 28, 2026",
      category: "ai-general-news",
      companies: ["GitHub Copilot", "Visual Studio Code", "Agent Host"],
      title: "VS Code Copilot Adds Portable Agent Sessions and Parallel Model Comparison",
      url: "https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases/",
      summary: "GitHub announced session continuity across VS Code and other Copilot clients, persistent local or remote Agent Host sessions, and parallel model and harness comparison. The model comparison and Agent Customizations marketplace are previews; desktop computer use is experimental, requires application approval, and can be disabled by organization policy."
    },
    {
      source: "GitHub",
      date: "2026-10-28",
      displayDate: "October 28, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Actions", "GitHub Copilot"],
      title: "GitHub Agentic Workflows Reach General Availability",
      url: "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/",
      summary: "GitHub's open-source Agentic Workflows project is generally available, compiling natural-language Markdown workflows into standard Actions YAML for tasks such as issue triage, CI analysis, documentation, and tests. Workflows default to read-only permissions and add sandbox, firewall, safe-output, and threat-detection controls; the productivity figures in GitHub's announcement are a named Accenture customer report, not independently validated GitHub-wide results."
    },
    {
      source: "GitHub",
      date: "2026-10-28",
      displayDate: "October 28, 2026",
      category: "ai-general-news",
      companies: ["GitHub Copilot", "GitHub Mobile", "Visual Studio Code"],
      title: "GitHub Unifies Copilot Cloud Sessions Across Clients",
      url: "https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/",
      summary: "GitHub made its connected Copilot cloud experience and resumable cloud sandboxes generally available on paid plans, with rollout beginning October 28. Sessions can move among GitHub, Mobile, CLI, the Copilot app, VS Code, Slack, and Teams; availability remains plan- and policy-dependent, and cloud-sandbox billing begins in November 2026 against the shared Actions compute entitlement."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
