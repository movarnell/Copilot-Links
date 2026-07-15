(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-07-14",
      displayDate: "July 14, 2026",
      category: "security",
      companies: ["GitHub Copilot", "Copilot app", "Security review"],
      title: "GitHub Adds Security Reviews to the Copilot App",
      url: "https://github.blog/changelog/2026-07-14-security-reviews-now-available-in-the-github-copilot-app/",
      summary:
        "GitHub's Copilot app now has a public-preview `/security-review` command that scans in-flight local changes for high-confidence issues such as injection, cross-site scripting, insecure data handling, path traversal, and weak cryptography. The practical workflow is to run a focused security pass before code lands, apply suggestions, and reverify without leaving the Copilot app.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-14",
      displayDate: "July 14, 2026",
      category: "workflows",
      companies: ["GitHub Copilot", "JetBrains", "Copilot CLI", "Claude"],
      title: "GitHub Expands Copilot JetBrains BYOK, Customizations, and Local Sandboxing",
      url: "https://github.blog/changelog/2026-07-14-github-copilot-for-jetbrains-expands-byok-capabilities/",
      summary:
        "GitHub's JetBrains update expands bring-your-own-key support to OpenAI-compatible custom endpoints, adds richer plugin management, brings Claude agent provider customizations into public preview, and introduces local sandboxing settings. It also adds a built-in debugger skill for Copilot CLI sessions, making JetBrains a more complete surface for governed agent workflows.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-14",
      displayDate: "July 14, 2026",
      category: "tools",
      companies: ["GitHub Copilot", "Visual Studio", "MCP", "C++"],
      title: "GitHub Copilot in Visual Studio Adds MCP Trust Checks and C++ Modernization GA",
      url: "https://github.blog/changelog/2026-07-14-github-copilot-in-visual-studio-june-update/",
      summary:
        "GitHub's June Visual Studio Copilot update focuses on trust and visibility: real-time usage tracking, MCP server trust validation, C++ modernization agent general availability, longer-distance next edit suggestions, and pull-request context inside Copilot Chat. For teams, the takeaway is to pair agent rollout with billing alerts, MCP change review, and IDE-native PR review flows.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
