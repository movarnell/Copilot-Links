(function () {
  const latestUpdates = [
    {
      source: "AP News",
      date: "2026-06-05",
      displayDate: "June 5, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "OpenAI", "Frontier AI", "AI safety", "AI governance"],
      title: "Anthropic Calls for a Coordinated Way to Pause Frontier AI if Risks Grow",
      url: "https://apnews.com/article/938c99158e5953601cf3322f1cec12af",
      summary:
        "AP reported that Anthropic is urging top AI companies to develop a coordinated mechanism for slowing or temporarily pausing frontier AI development if advanced systems begin improving faster than society can manage the risks. The proposal is framed around Claude and other systems increasingly accelerating AI research itself, which raises governance questions that a single company cannot solve alone. For builders and teams adopting AI agents, the practical takeaway is to watch for safety policies that depend on cross-lab verification, not just vendor promises or internal risk thresholds.",
    },
    {
      source: "OpenAI",
      date: "2026-06-03",
      displayDate: "June 3, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Frontier AI", "AI governance", "Safety", "Policy"],
      title: "OpenAI Publishes a Blueprint for Democratic Frontier AI Governance",
      url: "https://openai.com/index/frontier-safety-blueprint/",
      summary:
        "OpenAI published a frontier safety blueprint arguing that democratic governments should set the rules, safeguards, and accountability mechanisms for advanced AI rather than leaving private companies to govern the field alone. The post emphasizes independent risk evaluation, transparency requirements, cybersecurity resilience, and public institutions that can keep pace with model capability gains. For AI-tool users, this is a useful counterpoint to company-led pause proposals: governance is shifting toward external audits, legal obligations, and accountable public oversight.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-01",
      displayDate: "June 1, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot billing", "AI credits", "Copilot Max", "Actions"],
      title: "GitHub Activates Usage-Based Billing and Budget Controls for Copilot",
      url: "https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans",
      summary:
        "GitHub said usage-based billing is now active across Copilot plans, with Copilot code review consuming GitHub Actions minutes as well as GitHub AI Credits. The update also adds user-level budget controls and enables upgrades to Copilot Max, making cost management a more visible part of everyday Copilot administration. For developers and teams, the practical guidance is to review model multipliers, set user budgets, and treat agentic code review usage as both an AI-credit and CI-capacity planning concern.",
    },
    {
      source: "The White House",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["United States", "AI security", "Cybersecurity", "Critical infrastructure", "AI policy"],
      title: "White House Orders New Federal Work on Advanced AI Security",
      url: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/",
      summary:
        "The White House issued an executive order directing federal agencies to accelerate advanced AI security work, including a voluntary AI cybersecurity clearinghouse with industry and critical infrastructure operators. The order focuses on using AI for cyber defense, vulnerability discovery, patch coordination, national security systems, and federal hiring pathways for AI-related cybersecurity expertise. For AI practitioners, the signal is that security evaluation and vulnerability-management workflows are becoming a central policy lane for frontier model deployment.",
    },
    {
      source: "GitHub Changelog",
      date: "2026-06-02",
      displayDate: "June 2, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Copilot app", "Canvases", "Agentic development", "Pull requests"],
      title: "GitHub Expands the Copilot App Preview With Shared Canvases",
      url: "https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/",
      summary:
        "GitHub expanded the technical preview of the GitHub Copilot app, adding canvases that can collect agent sessions, files, planning notes, pull requests, and follow-up work in one shared workspace. The update matters for VS Code and Copilot users because agentic development is moving from single chat turns into coordinated work surfaces where sessions, validation, review, and handoff all need to be tracked. For teams, the practical guidance is to treat Copilot app work like any other development workflow: isolate changes, keep context auditable, review generated diffs, and avoid letting canvas organization replace normal pull request discipline.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
