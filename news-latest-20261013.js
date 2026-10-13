(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-10-13",
      displayDate: "October 13, 2026",
      category: "ai-workflows",
      companies: ["GitHub", "GitHub Advanced Security", "AI Scan", "Developer Security"],
      title: "GitHub Adds AI Scan Metrics to Security Overview",
      url: "https://github.blog/changelog/2026-10-13-code-scanning-ai-scan-metrics-in-security-overview",
      summary: "GitHub's public-preview security overview metrics now show AI Scan findings, remediation rates, repository coverage, and trends alongside Copilot Autofix availability and adoption. Organization and enterprise administrators can use the views to assess rollout impact without inspecting individual pull requests; the feature is available on GitHub.com to GitHub Code Security or GitHub Advanced Security customers, not GitHub Enterprise Server."
    },
    {
      source: "GitHub",
      date: "2026-10-12",
      displayDate: "October 12, 2026",
      category: "github-copilot",
      companies: ["GitHub", "GitHub Copilot", "OpenTelemetry", "Enterprise Governance"],
      title: "GitHub Adds Fine-Grained Copilot Telemetry Controls",
      url: "https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture",
      summary: "GitHub added managed Copilot telemetry settings that can optionally attribute activity to GitHub, operating-system, and host identities while separately controlling capture of prompts, responses, tool arguments, tool output, and policy details. Every capture class is off by default; managed values override local settings, and GitHub warns that captured content can include source code, commands, results, and workspace paths, so it should go only to approved endpoints."
    },
    {
      source: "GitHub",
      date: "2026-10-12",
      displayDate: "October 12, 2026",
      category: "ai-workflows",
      companies: ["GitHub", "GitHub Copilot", "Agent Skills", "Model Context Protocol"],
      title: "GitHub Maps Four Layers of Repository-Aware Copilot Guidance",
      url: "https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-how-to-teach-copilot-about-your-codebase/",
      summary: "GitHub explains how repository and path-specific instructions encode project conventions, agent skills package repeatable procedures, custom agents provide broader specialist guidance, and MCP servers connect outside tools and data. Its practical example uses Playwright through MCP to verify interface behavior after automated checks, while advising teams to start with one recurring convention or workflow."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
