(function () {
  const latestUpdates = [
    {
      source: "Associated Press",
      date: "2026-10-16",
      displayDate: "October 16, 2026",
      category: "ai-general-news",
      companies: ["International Monetary Fund", "World Bank", "Anthropic", "AI Governance"],
      title: "IMF and World Bank Meetings Put AI Risks and Economic Gains in Focus",
      url: "https://apnews.com/article/ai-economy-imf-anthropic-faba248f0609534a0d8284dec1b46a81",
      summary: "Associated Press reports that IMF managing director Kristalina Georgieva and Anthropic co-founder Jack Clark urged faster safeguards for artificial intelligence while acknowledging its potential economic gains. Their discussion highlighted uncertain labor effects, unequal access, cybersecurity risk, and the need for policy frameworks that do not depend only on company self-governance."
    },
    {
      source: "GitHub",
      date: "2026-10-15",
      displayDate: "October 15, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Copilot", "Slack", "Microsoft Teams"],
      title: "GitHub Copilot Adds Multi-Repository Workflows in Slack and Teams",
      url: "https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates/",
      summary: "GitHub Copilot in Slack and Microsoft Teams can now answer across multiple repositories in one conversation for pull-request, issue, and activity questions. GitHub also says mentions can appear anywhere in a message, shared Slack messages and threads can supply context, repository switching is smoother, and interrupted tasks recover more reliably."
    },
    {
      source: "GitHub",
      date: "2026-10-15",
      displayDate: "October 15, 2026",
      category: "new-models",
      companies: ["GitHub", "GitHub Copilot", "Anthropic", "OpenAI"],
      title: "GitHub Schedules Three Copilot Models for November 16 Deprecation",
      url: "https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november/",
      summary: "GitHub will deprecate Claude Opus 4.8, Claude Opus 5, and GPT-5.6 Terra across Copilot experiences on November 16, 2026. GitHub recommends Claude Opus 5.5 for both Opus models and GPT-6.1 Sol or GPT-6 Luna for Terra; Claude Opus 4.8 remains available to individual Copilot subscribers on annual plans so they retain an Opus option."
    },
    {
      source: "GitHub",
      date: "2026-10-15",
      displayDate: "October 15, 2026",
      category: "ai-general-news",
      companies: ["GitHub", "GitHub Code Security", "GitHub Advanced Security", "AI Scan"],
      title: "GitHub Makes AI Scan for Pull Requests Generally Available",
      url: "https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available/",
      summary: "GitHub's AI Scan now checks pull-request changes in languages and frameworks not currently covered by CodeQL, including PHP, Shell and Bash, Terraform HCL, Dockerfiles, JSP, and Blazor, and can provide explanations plus suggested fixes. Findings are advisory and cannot block merges, forks and Dependabot pull requests are excluded, and runs consume Code Security AI Credits; a Copilot license is not required."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
