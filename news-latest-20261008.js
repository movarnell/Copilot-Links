(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-10-07",
      displayDate: "October 7, 2026",
      category: "github-copilot",
      companies: ["GitHub", "GitHub Copilot", "Anthropic", "Claude"],
      title: "Claude Haiku 5.5 Arrives in GitHub Copilot",
      url: "https://github.blog/changelog/2026-10-07-claude-haiku-5-5-in-github-copilot/",
      summary: "GitHub made Claude Haiku 5.5 generally available for Copilot Pro, Pro+, Max, Business, and Enterprise users, with a gradual rollout across VS Code, Visual Studio, Copilot CLI, cloud agent, the Copilot app, github.com, Mobile, JetBrains, Xcode, and Eclipse. GitHub positions the model for fast, high-volume work such as subagents, quick edits, and terminal tasks; usage is billed at provider list pricing."
    },
    {
      source: "GitHub Changelog",
      date: "2026-10-07",
      displayDate: "October 7, 2026",
      category: "ai-security",
      companies: ["GitHub", "GitHub Copilot", "GitHub Advanced Security", "Enterprise"],
      title: "GitHub Introduces a Purpose-Built Model for Leaked Secret Detection",
      url: "https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection/",
      summary: "GitHub introduced a fine-tuned model that uses surrounding code to identify likely credentials, including passwords without a recognizable token format. Existing AI-detected alert scans remain included for GitHub Secret Protection and GitHub Advanced Security customers, while planned opt-in push-protection and Copilot security-review checks will consume AI Credits when enabled."
    },
    {
      source: "GitHub Changelog",
      date: "2026-10-07",
      displayDate: "October 7, 2026",
      category: "ai-workflows",
      companies: ["GitHub", "GitHub Copilot", "VS Code", "Enterprise"],
      title: "Local Sandboxing for GitHub Copilot Is Generally Available",
      url: "https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available/",
      summary: "GitHub made local sandboxing generally available in Copilot CLI, the Copilot app, and VS Code Agent Host sessions. Powered by Microsoft eXecution Container, the controls can restrict agent access to files, networks, credentials, local tools, MCP servers, and language servers; enterprise-managed policies can require boundaries that developers cannot weaken."
    },
    {
      source: "GitHub Changelog",
      date: "2026-10-07",
      displayDate: "October 7, 2026",
      category: "github-copilot",
      companies: ["GitHub", "GitHub Copilot", "Ollama", "Local Models"],
      title: "Copilot CLI Can Discover Local Ollama Models",
      url: "https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli/",
      summary: "Starting in Copilot CLI 1.0.94-0, the /model picker can discover supported models from a running local Ollama instance and add one without restarting the CLI. Models must already be installed and support tool calling and streaming; selecting a local model does not automatically enable offline mode or disable GitHub telemetry."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
