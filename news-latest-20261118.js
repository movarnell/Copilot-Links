(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-11-17",
      displayDate: "November 17, 2026",
      category: "models",
      companies: ["GitHub Copilot", "OpenAI", "Models"],
      title: "GPT-6.2 Astra and Sol Arrive in GitHub Copilot",
      url: "https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available/",
      summary: "GitHub made GPT-6.2 Astra and GPT-6.2 Sol generally available for agentic coding and code review on Pro+, Max, Business, and Enterprise, with a gradual rollout across its major Copilot clients. Usage is billed at provider list pricing, administrators can control access through model policies, and GitHub's quality and token-efficiency comparisons are early company testing rather than independent results."
    },
    {
      source: "GitHub",
      date: "2026-11-17",
      displayDate: "November 17, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "Code review", "Security"],
      title: "Copilot Code Review Adds Adaptive Effort and Secret Detection",
      url: "https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more/",
      summary: "Copilot code review can now choose Lite, Balanced, or Max effort within administrator limits, use related public repositories as context, and flag likely secrets before merge. Adaptive effort, cross-repository context, and secret detection are public previews; teams should keep human review, repository permissions, and independent security scanning in the release gate."
    },
    {
      source: "GitHub",
      date: "2026-11-17",
      displayDate: "November 17, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "Fusion", "Model routing"],
      title: "Copilot Fusion Expands Surfaces and Model Routing",
      url: "https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models/",
      summary: "Copilot Fusion expanded to github.com, Visual Studio, and GitHub Mobile beta and added Claude Sonnet 5.5 to Max, GPT-6.1 Terra to High, and MAI Code 2 to Standard. GitHub also published a 71.2% Terminal-Bench 4.1 result and cost comparisons for Fusion Max; those figures are GitHub-reported even though the benchmark leaderboards are public, so teams should validate quality and cost on their own tasks."
    },
    {
      source: "GitHub",
      date: "2026-11-17",
      displayDate: "November 17, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Microsoft AI", "Models"],
      title: "MAI Code 2 and Code 2 Flash Launch in Copilot",
      url: "https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/",
      summary: "Microsoft's MAI Code 2 targets deep debugging, multi-file implementation, refactoring, and repository-wide reasoning, while Code 2 Flash targets explanations, focused edits, routine fixes, and rapid iteration. Availability depends on plan, annual eligibility, client, and administrator policy; both use usage-based billing, and MAI-Code-1.1-Flash is scheduled to retire on December 18."
    },
    {
      source: "GitHub",
      date: "2026-11-17",
      displayDate: "November 17, 2026",
      category: "ai-workflows",
      companies: ["GitHub Copilot", "Evals", "MCP"],
      title: "GitHub Copilot Evals Enters Public Preview",
      url: "https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview/",
      summary: "GitHub Copilot Evals adds repeatable behavior tests for skills, custom agents, and MCP tools in VS Code, Copilot CLI, and the Copilot app. Users approve each run and can compare results before and after a customization change; because the feature is a public preview and model output varies, one passing run is not proof of reliability and teams should track repeated results and usage cost."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
