(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-11-03",
      displayDate: "November 3, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Heimstaden"],
      title: "Heimstaden Applies ChatGPT and Codex Across Property Workflows",
      url: "https://openai.com/index/heimstaden/",
      summary: "OpenAI's customer story says Heimstaden uses ChatGPT Enterprise and Codex across property-management workflows. It reports analyzing 20,112 assets, cutting the cost of producing virtually staged property images in the Netherlands by more than 99%, and estimating that one process could fall from five people working for a year to two people working for two months; Heimstaden staff still own the methodology, review, commercial decisions, and approvals."
    },
    {
      source: "OpenAI",
      date: "2026-11-02",
      displayDate: "November 2, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Cathedral Systems"],
      title: "OpenAI Plans Another AI-Assisted Internal Security Sprint",
      url: "https://openai.com/index/preparing-our-next-security-sprint-to-harden-openai/",
      summary: "OpenAI says it is planning an internal security sprint with Cathedral Systems researchers using its models to probe defenses and help test fixes. The next sprint has not happened yet; prior-sprint results and OpenAI's $1 billion, six-month Daybreak access commitment for frontline defenders are company-reported."
    },
    {
      source: "OpenAI",
      date: "2026-11-02",
      displayDate: "November 2, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Codex", "Pando"],
      title: "OpenAI Builds a Git Backend for Agent-Scale Development",
      url: "https://openai.com/index/scaling-git-at-openai/",
      summary: "OpenAI describes Pando, a Git-compatible backend built to support many concurrent agent and engineer branches in its monorepo. The company reports nearly fivefold lower median push latency and almost a petabyte of daily delivery, while noting that Pando's causal-consistency design can show readers different branches at different points in time."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
