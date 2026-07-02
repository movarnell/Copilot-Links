(function () {
  const latestUpdates = [
    {
      source: "Visual Studio Code",
      date: "2026-07-01",
      displayDate: "July 1, 2026",
      category: "workflows",
      companies: ["VS Code", "GitHub Copilot", "AI Agents", "Browser Tools"],
      title: "VS Code 1.127 Ships Browser-Driven Agent Testing and Session Organization",
      url: "https://code.visualstudio.com/updates/v1_127",
      summary:
        "VS Code 1.127 makes browser tools for agents generally available, adds per-site permission prompts, and lets developers group and rearrange busy agent-session lists. Agents can now navigate, click through, and capture screenshots of web apps while sensitive browser permissions remain explicitly controlled by the user.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-01",
      displayDate: "July 1, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Kimi", "Open Models", "VS Code"],
      title: "Kimi K2.7 Code Becomes Copilot's First Selectable Open-Weight Model",
      url: "https://github.blog/changelog/2026-07-01-kimi-k2-7-is-now-available-in-github-copilot/",
      summary:
        "GitHub is gradually rolling Kimi K2.7 Code out to individual Copilot plans, starting in VS Code 1.127 and expanding across Copilot surfaces. GitHub hosts the open-weight model on Azure, bills it at provider list pricing, and advises Business and Enterprise admins to review security and data-governance requirements before enabling it.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-01",
      displayDate: "July 1, 2026",
      category: "workflows",
      companies: ["GitHub Copilot", "VS Code", "Copilot CLI", "Multimodal AI"],
      title: "Copilot Vision Is Generally Available for Images and PDFs",
      url: "https://github.blog/changelog/2026-07-01-copilot-vision-is-generally-available/",
      summary:
        "All Copilot plans can now attach images and PDFs to Copilot Chat in VS Code and on github.com, while Copilot CLI accepts image paths. The feature is on by default without an admin-policy change; GitHub says Business and Enterprise attachments are retained for about 24 hours to provide the service.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-07-01",
      displayDate: "July 1, 2026",
      category: "models",
      companies: ["GitHub Models", "GitHub Copilot", "Azure AI Foundry"],
      title: "GitHub Models Will Shut Down for All Customers on July 30",
      url: "https://github.blog/changelog/2026-07-01-github-models-is-being-fully-retired-on-july-30-2026/",
      summary:
        "GitHub will retire the Models playground, catalog, inference API, and BYOK endpoints for every customer on July 30, with brownouts scheduled for July 16 and July 23. GitHub points model-access projects to Azure AI Foundry and GitHub-native AI workflows to Copilot.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
