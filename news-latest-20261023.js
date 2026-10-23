(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-10-23",
      displayDate: "October 23, 2026",
      category: "mythos-news",
      companies: ["OpenAI", "NASK", "Polish AI Safety Institute", "Cybersecurity"],
      title: "OpenAI and Poland's NASK Expand Joint AI Safety Research",
      url: "https://openai.com/index/openai-nask-ai-safety-security-partnership/",
      summary: "OpenAI and Poland's NASK National Research Institute signed an agreement to explore joint frontier-system evaluation, vulnerability research, safeguards, synthetic-content detection, and multilingual malicious-use research. The partnership builds on CERT Polska's use of OpenAI models to identify six RouterOS vulnerabilities, whose vendor fixes CERT Polska later confirmed blocked the observed attacks."
    },
    {
      source: "GitHub Changelog",
      date: "2026-10-22",
      displayDate: "October 22, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Visual Studio", "MCP", "BYOM"],
      title: "Visual Studio Copilot Adds PR Context, Agent-Only BYOM, and NuGet Fixes",
      url: "https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2/",
      summary: "GitHub's Visual Studio 2026 update lets the Git agent summarize attached pull requests through GitHub or Azure DevOps MCP servers, moves the BYOM preview onto the new Copilot SDK-based Agent experience, and lets NuGet Audit warnings open agent-mode fixes through the NuGet MCP server. BYOM users must re-add previously configured Ollama models after updating."
    },
    {
      source: "GitHub Changelog",
      date: "2026-10-22",
      displayDate: "October 22, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Custom Agents", "Skills", "MCP"],
      title: "Copilot Metrics Now Name Custom Skills, Agents, MCP Servers, and Plugins",
      url: "https://github.blog/changelog/2026-10-22-custom-skills-agents-and-mcp-servers-in-usage-metrics-api/",
      summary: "GitHub's Copilot usage metrics API now reports configured names for customer-built skills, custom agents, MCP servers, slash commands, and plugins and expands each list from five to 25 entries. Coverage depends on supported client and SDK versions, and GitHub cautions that blocked or outdated telemetry can undercount activity, so the data is better for adoption trends than exact accounting."
    },
    {
      source: "GitHub Changelog",
      date: "2026-10-22",
      displayDate: "October 22, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Enterprise", "AI Governance"],
      title: "GitHub Begins Enforcing the Global Default for Eligible Copilot Features",
      url: "https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available/",
      summary: "GitHub is gradually applying the Business and Enterprise global default policy through October 26. Eligible generally available features left unconfigured follow the selected global default, explicit per-feature choices remain unchanged, and preview features stay opt-in unless they later become generally available and eligible."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
