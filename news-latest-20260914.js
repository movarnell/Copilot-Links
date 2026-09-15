(function () {
  const latestUpdates = [
    {
      source: "GitHub",
      date: "2026-09-14",
      displayDate: "September 14, 2026",
      category: "models",
      companies: ["GitHub Copilot", "Auto model selection", "VS Code", "Copilot CLI"],
      title: "Copilot Auto Adds Efficiency, Balance, and Intelligence Tiers",
      url: "https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/",
      summary:
        "GitHub is rolling out three Auto model-selection tiers in VS Code, Copilot CLI, and the Copilot app. Efficiency favors low cost for simple work, Balance weighs cost, quality, and speed, and Intelligence favors quality on complex tasks. All tiers draw from the same eligible model set and evaluate each prompt individually; even Intelligence may choose a small model for an easy task. Usage is billed at the rate of the model selected, regardless of tier, with the paid-plan Auto discount still applying. Pick the tier for your work, then inspect the actual model and credits rather than assuming a fixed price or model.",
    },
    {
      source: "OpenAI",
      date: "2026-09-14",
      displayDate: "September 14, 2026",
      category: "workflows",
      companies: ["OpenAI", "Perplexity", "GPT-6 Astra", "Testing", "Production monitoring"],
      title: "Perplexity Uses GPT-6 Astra for End-to-End Testing and Production Work",
      url: "https://openai.com/index/perplexity-improving-accuracy-with-astra/",
      summary:
        "OpenAI's customer story describes Perplexity using GPT-6 Astra to write communications, change software, and monitor production systems. A concrete workflow has the model build test programs, simulate realistic API or connector responses, and exercise an application from end to end. The useful pattern is broader than the model claim: test agents against realistic boundaries, verify complete workflows rather than isolated code, and retain production monitoring even when stronger models need fewer check-ins.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
