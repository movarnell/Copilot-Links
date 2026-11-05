(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-11-05",
      displayDate: "November 5, 2026",
      category: "ai-general-news",
      companies: ["OpenAI"],
      title: "OpenAI Introduces Community Commitments for AI Infrastructure",
      url: "https://openai.com/index/setting-new-standard-responsible-ai-infrastructure",
      summary: "OpenAI published a National Community Compact for future compute campuses it owns and operates, plus a policy blueprint urging governments to establish broader rules on infrastructure costs, resource reporting, and local economic participation. The compact is a company commitment and the blueprint is a set of proposals, not evidence that individual projects have delivered those outcomes or that governments have adopted the policies."
    },
    {
      source: "TechCrunch",
      date: "2026-11-04",
      displayDate: "November 4, 2026",
      category: "ai-general-news",
      companies: ["Meta", "Conductor"],
      title: "Meta Acquires Multi-Agent Coding Startup Conductor",
      url: "https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/",
      summary: "TechCrunch reports that Meta acquired Conductor, whose coding product coordinates third-party agents across parallel workspaces. Meta confirmed the deal but disclosed no terms; Conductor says its current core features will continue until early next year, while its cloud service shuts down November 20 and cloud-data deletion begins afterward."
    },
    {
      source: "GitHub",
      date: "2026-11-04",
      displayDate: "November 4, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Apple", "Xcode"],
      title: "GitHub Copilot Enters Xcode's Built-In Coding Assistant",
      url: "https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant/",
      summary: "GitHub released a public-preview integration for Copilot in Xcode's built-in coding assistant, starting with Xcode 27.3 beta. It supports all Copilot plans, requires macOS Tahoe 26.6 or later, and remains separate from the existing GitHub Copilot for Xcode extension."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
